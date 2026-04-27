# Optimisation Proposal — Drawing on the Institute Diagnostician's First Diagnosis

**Date**: 2026-04-27
**Source**: `diagnosis.md` for run `949fad01-...` (2026-04-27 01:30 SG), cross-checked with 7-day fresh queries against `workflow_runs`, `mailbox_threads`, `whiteboard_cards`.
**Status**: Working proposal. Not implemented.

---

## 0. What the diagnostician saw vs. what 7 days actually shows

The diagnostician's first run (24h window, 40 runs, 11 mailbox threads) flagged three issues. Cross-checking with a 7-day window changes the picture:

| Diagnostician finding (24h, n=11 / 40) | 7-day reality | Net read |
|---|---|---|
| Auto-handoff 82% → reviewers | **19%** to reviewers, **68%** to primaries (n=131) | Diagnostician miscategorised `chief-strategist` (which is `primary` in our roster) as a reviewer. The genuine reviewer-skew is mild, not severe. |
| Whiteboard `chief-risk` is the single dominant recipient | Confirmed: 95 / 852 = **11%**. Next is derivatives-strategist at 64. | Real issue, smaller magnitude. |
| 21 / 40 runs still `running`, "early signal of stuck terminal-write" | **105 / 316 = 33%** in `running` for 7d, with rows from 04-21 / 04-22 still `running`. **8/8 sampled runs are `completed` upstream.** | This is the biggest finding the diagnostician materially undersold. The mirror DB is silently desyncing from agent-route. |

So the diagnostician picked the right *direction* on stuck runs but drastically underplayed the magnitude, and got the auto-handoff side wrong because of a roster classification miss.

This proposal re-prioritises around what the 7-day data actually shows, and adds two improvements to the diagnostician itself so future diagnoses are more accurate.

---

## 1. Findings, ordered by impact

### 1A. (HIGH) Mirror-DB drift — `workflow_runs` rows stuck `running` when upstream is `completed`

**Evidence**
- `workflow_runs` contains 105 rows in `running` status over the last 7 days. The oldest is from `2026-04-21 18:20`.
- Sampled 8 of these and queried `/api/workflow-runs/{id}` upstream — all 8 returned `status: "completed"`. None genuinely running.
- The institute's `sessions_cache`, fleet-health metrics, diagnostician percentages, and the dashboard's "in-flight" counts all read from the mirror — they're all wrong by the size of this orphan set.

**Root cause** (`worker/src/index.ts:2194-2211` in `processCandidateRun`)

`syncManagedScheduledRuns` revisits runs through two narrow channels:
1. **Phase A — Pending revisit**: a single `pending_run_id` per `institute_workflows` row.
2. **Phase B — Cursor-advance discovery**: when the remote schedule's `last_run_at` advances past the local cursor.

When a workflow has multiple non-terminal runs in flight at once (very common during `weekly_report` Sunday burst), only ONE can occupy `pending_run_id`. As the cursor advances on subsequent firings, the older non-terminal runs become **orphans**: nothing in the sync loop touches them again, so the row stays `running` forever in our mirror even after upstream finalises.

**Knock-on damage**
- L1 fleet health overstates `running` count → distorts diagnosis.
- The post-terminal pipeline (`salvage`, `auto-handoff`, `harvest`, `opencode-extractor`) **never runs** for orphaned terminal-success runs. So follow-ups + whiteboard pitches embedded in those workspaces are lost.
- Dashboard run timelines show stale "running" badges indefinitely.

**Recommendation R1** (highest priority)

Add a third phase to `syncManagedScheduledRuns`: **age-bucket reaper**.

- Each tick, additionally pull `SELECT run_id, workflow_id, session_id FROM workflow_runs WHERE status = 'running' AND created_at < NOW - 30 min`. Cap the batch (e.g. 25 per tick) so the worker stays within wall-time.
- For each: `GET /api/workflow-runs/{id}` upstream. If terminal → run the same `processCandidateRun` flow (record, archive, salvage, auto-handoff, harvest, opencode-extractor). If still `running` upstream → leave alone.
- This is a one-time backfill of the existing 105-row backlog AND an ongoing safety net.

**Cost & risk**
- Each reaper tick is bounded (25 × 1 GET each = 25 subrequests, well under Worker limits).
- No new failure modes — we only touch rows that are already broken in the mirror.
- Implementation effort: ~80 lines in `index.ts`, no new tables.

### 1B. (MEDIUM) chief-risk over-attraction on the whiteboard

**Evidence**
- Whiteboard handoffs over 7d: chief-risk receives 95 of 852 = 11%. Next single recipient (derivatives-strategist) is 64. Whiteboard handoffs to `reviewer`-tagged analysts collectively: 15%.
- Auto-handoff doesn't show this skew (only 8% of mailbox auto-handoffs hit chief-risk over 7d). So this is specifically a **whiteboard prompt** problem, not a mailbox problem.

**Likely cause**

The card prompts (`worker/src/whiteboard.ts`) already include the role-bias section (`primary` default, `reviewer` only on concrete fragility). But the bias language is at the bottom of a long card prompt and competes with `# MANDATORY DELIVERABLES` for attention. Models still default to the most "obvious" reviewer when the next question feels even loosely risk-tinted.

**Recommendation R2** (medium priority)

Two targeted prompt tightenings, not a code change:

1. In the card prompt's role-bias block, add an **explicit anti-default clause**:
   > "Before writing your follow-up `analyst_id`, ask yourself: can I name a specific, named-stress-test that chief-risk should run? If you can't write that test in one sentence, do NOT pick chief-risk. Pick the primary analyst whose domain owns the next question."
2. After-the-fact policing: the **opencode post-step extractor** already validates analyst IDs against the roster. Extend it with a one-line rule:
   > "If a `whiteboard_pitch.suggested_analyst_id` is `chief-risk` and the `rationale` field doesn't contain a specific stress-test phrase (e.g. 'stress', 'sensitivity', 'tail', 'concentration'), demote the pitch's priority to `low`."
   
This degrades — not blocks — questionable chief-risk routings, so legitimate ones still flow at full priority.

**Cost & risk**
- Pure prompt changes (R2.1) and ~10 lines in `opencode-extractor.ts` (R2.2). Reversible via a single revert.
- Risk of demoting genuine risk pitches: low, since the rule only fires when the rationale is generic.

### 1C. (LOW–MED) Diagnostician sample-size & roster miscategorisation

The diagnostician's first diagnosis miscategorised `chief-strategist` as a reviewer (whiteboard role is actually `primary`) and extrapolated a 24h × 11-thread snapshot to a system-level reviewer-skew claim.

**Recommendations** (cheap fixes, both in `runtime-overlays.json:institute_diagnosis.input_prompt`)

**R3.1** Bake the role-mapping table directly into the diagnostician prompt so it doesn't have to infer:

```
The institute roster has these whiteboard_role assignments. Use ONLY this mapping when categorising auto-handoff or whiteboard recipients:
- primary: chief-economist, china-macro, global-macro, fx-strategist, asset-allocator, chief-strategist, ashare-strategist, offshore-strategist, tmt-analyst, healthcare-analyst, consumer-analyst, energy-analyst, financials-analyst, industrials-analyst, materials-analyst, realestate-analyst, auto-analyst, utilities-analyst, agri-analyst, thematic-researcher
- specialist: chief-quant, factor-analyst, technical-analyst, algo-trader, sentiment-analyst, social-media-analyst, altdata-analyst, bond-analyst, derivatives-strategist, convertible-analyst, credit-analyst, esg-analyst
- reviewer: chief-risk, qa-manager, compliance-officer
- editorial: morning-brief-editor, daily-report-editor, committee-chair, research-editor, institute-diagnostician
```

**R3.2** Demand a cross-day baseline before flagging any anomaly above "low" confidence. Add to the prompt:

> "When rating confidence for an anomaly, you MUST cite a comparison to the prior fleet-health snapshot. If you don't have access to a prior snapshot, max confidence is `medium` and you must say so explicitly."

This requires extending L1 to keep at least 7 days of `fleet_health_snapshots` (already done — the table exists) and the diagnostician prompt to `curl` an additional `/api/fleet-health/snapshots?last=7` endpoint (not yet shipped — small new endpoint).

**Cost & risk**
- R3.1 is a prompt-only edit, free.
- R3.2 needs one new ~30-line endpoint that reads from the existing `fleet_health_snapshots` table. Reversible.

### 1D. (LOW) Workflow-mix narrowness on the day diagnostician runs

The diagnostician's 24h window covered 39 / 40 `weekly_report` runs because Sunday is the weekly-report fan-out day. Wednesday-or-Thursday window would tell a totally different story. Today's diagnosis is therefore biased toward weekly-report-specific failure modes.

**Recommendation R4** (do not change schedule)

Add a single line to the diagnostician's prompt:

> "Note in §1 (overview) which weekday this snapshot covers, and explicitly call out that the workflow-type mix you observed today may not represent typical days. If the mix is dominated by one workflow_key, scope your conclusions to that workflow's failure modes only."

Schedule-side change rejected: rotating the run time would lose the 90-min lag from L1 fleet-health (which is the consistent input contract).

---

## 2. What the diagnostician got RIGHT and we should keep

- Pointing at the in-flight backlog as a problem worth attention. The magnitude was wrong (105, not 21+12), but the direction was correct.
- Refusing to over-prescribe: §4 explicitly proposes the LEAST aggressive intervention first ("just record the reason in prompt, don't yet tighten the threshold"). That's a healthy advisory disposition we want to preserve.
- The "open questions for operator" pattern in §5 — these are the questions that, if answered, would let the diagnostician update its own conclusions next run.

---

## 3. Proposed implementation order

| # | Item | LoC est. | Risk | Owner |
|---|---|---:|---|---|
| 1 | **R1 reaper** in `syncManagedScheduledRuns` (one-time backfill + ongoing reap) | ~80 | low | worker |
| 2 | **R3.1** roster mapping into diagnostician prompt | ~20 | none | runtime-overlays |
| 3 | **R3.2 + new endpoint** `/api/fleet-health/snapshots?last=N` + prompt update | ~50 | low | worker + prompt |
| 4 | **R4** weekday-context line in diagnostician prompt | ~5 | none | runtime-overlays |
| 5 | **R2.1** card-prompt anti-default clause for chief-risk | ~15 | low | whiteboard.ts |
| 6 | **R2.2** opencode extractor demotion rule | ~10 | low | opencode-extractor.ts |

**Total**: ~180 LoC + two prompt tweaks. All reversible. R1 is the load-bearing one — it fixes data integrity that everything downstream depends on.

---

## 4. What this proposal does NOT do

- **No structural change to auto-handoff.** The 7-day picture (68% primary, 24% specialist, 8% chief-risk) is healthy. The diagnostician's recommendation #1 (gate the QA-step) would over-correct. Defer.
- **No new diagnostician schedule.** Once a day at 01:30 SG remains correct (matches the L1 90-min lag).
- **No L3/L4 operator work.** Stays in the "advisory only" zone of L2; doesn't promote diagnostician outputs to direct prompt-curation.

---

## 5. Open questions worth feeding into next run's diagnostician input

(These mirror the "questions the model can't answer alone" pattern from the original diagnosis.)

1. Of the 105 stuck-`running` rows, how many had follow-ups / whiteboard pitches in their workspace that we never harvested? (Affects how aggressive R1's backfill should be.)
2. Is the chief-risk over-attraction concentrated in any specific whiteboard topic types? (E.g. macro vs. single-name. Affects whether R2.1's wording should be domain-specific.)
3. Has the daily fleet-health snapshot drift-corrected once the reaper backfills? (Validates R1.)
