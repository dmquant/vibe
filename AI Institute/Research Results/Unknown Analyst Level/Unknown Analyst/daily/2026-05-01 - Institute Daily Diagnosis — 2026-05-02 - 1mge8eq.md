---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Institute Daily Diagnosis — 2026-05-02

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Institute Daily Diagnosis — 2026-05-02

*Snapshot source: `fleet_health.md` (generated_at 2026-05-01T16:00:27.644Z, window: daily / last 24h)*

---

## 1. One-sentence verdict

The institute is **healthy** today — all 56 workflow runs in window completed, mailbox and whiteboard failure rates are below 2%, and no salvage markers fired — but two structural signals deserve watching: whiteboard handoffs skewing toward a reviewer (chief-risk), and 12 parked runs still awaiting terminal.

## 2. Key metrics

| Metric | Value | Note |
|---|---:|---|
| Managed workflows | 215 | Total under management |
| Runs in window | 56 | All completed |
| Pending runs (parked, awaiting terminal) | 12 | Watch for staleness |
| Mailbox threads | 138 | completed=134, failed=2, running=2 |
| Mailbox auto-handoffs | 138 | Every thread is an auto-handoff |
| Pending adhoc dispatches | 0 | — |
| Whiteboard sessions | 25 | cards=191 (completed=189, failed=1, running=1) |
| Events | 304 | of which `workflow.scheduled.completed=92` |
| Execution-archive entries | 0 | failed=0, salvage_markers=0 |

## 3. Anomalies & patterns

1. **Whiteboard handoffs skew heavily toward a reviewer (chief-risk) — high confidence**
   - Evidence: in the whiteboard handoff distribution, `chief-risk=17` is the **top** recipient after `(none)=20`, ahead of chief-strategist (10), tmt-analyst (11), and china-macro / global-macro (7 each). `qa-manager=7` also sits in the top tier. Reviewer-style roles (chief-risk + qa-manager + parts of chief-*) account for ≈31/171, ~18% of routed cards.
   - Why it matters: the whiteboard QA / handoff-suggestion step seems to be "double-insuring" primary-analyst output by routing cards to oversight roles instead of to the execution-side primary analysts who would normally pick the work up.
   - Confidence: **high** (numerically clear, pattern unambiguous).

2. **20 whiteboard cards have no handoff recipient — medium confidence**
   - Evidence: `(none)=20` in the handoff-recipient table, ~10% of the 191 cards.
   - Why it matters: these may legitimately be terminal cards, or analysts may be skipping the recipient field at closeout, breaking the follow-up chain. The snapshot alone cannot distinguish the two.
   - Confidence: **medium**.

3. **12 parked workflow runs still awaiting terminal — medium confidence**
   - Evidence: `Pending runs (parked, awaiting terminal): 12`, while all 56 runs counted in the window are `completed`. The 12 parked items therefore live outside the in-window completed set.
   - Why it matters: they may be waiting on brain-task or async-signal completion; if any have been parked beyond ~2h, the backfill pipeline is stalling. The snapshot does not expose parked age, so we cannot confirm.
   - Confidence: **medium** (missing the time dimension).

4. **Auto-handoff inflow concentrates on tmt-analyst — medium confidence**
   - Evidence: tmt-analyst is the top mailbox auto-handoff recipient (25) plus 11 on the whiteboard, ≈36 incoming. china-macro=23 and global-macro=20 follow. As a sender, tmt-analyst only emits 5, so inflow / outflow is highly asymmetric.
   - Why it matters: without a matching execution bandwidth on the TMT desk, this pattern can produce single-point queue build-up.
   - Confidence: **medium**.

5. **Overnight topic-pitch chain dominates the sender head — medium confidence**
   - Evidence: top three senders are social-media-analyst=16, sentiment-analyst=14, altdata-analyst=14 — combined 44/138 ≈ 32%. Yet `topic_pitch_overnight_*` task_keys each ran only once.
   - Why it matters: a small set of overnight workflows produces a large burst of handoffs. By design, but worth confirming that downstream china-macro / global-macro / tmt can absorb the burst before the morning brief.
   - Confidence: **medium**.

6. **Mismatch between `workflow.scheduled.completed=92` and runs=56 — low confidence**
   - Evidence: 92 events vs 56 runs, gap of 36.
   - Why it matters: most likely multiple sub-step events per run, or boundary events from runs outside the window. Not urgent — needs the event schema to nail down.
   - Confidence: **low**.

7. **Failure tail is very thin — high confidence (positive signal)**
   - Evidence: mailbox failed=2, whiteboard cards failed=1, execution-archive failed=0, salvage_markers=0.
   - Why it matters: at the model layer, declared output files are landing and parsing cleanly — the output contract is being honoured.
   - Confidence: **high**.

## 4. Recommended optimisations (top 3 by expected impact)

### Optimisation 1 — Suppress over-routing to reviewers in the whiteboard QA / handoff step
- **Target**: the whiteboard QA-recommend / handoff-suggestion step (likely `whiteboard:qa_handoff_suggest` or the closest equivalent in the whiteboard session template; if the exact step ID differs, use the prompt that selects `handoff_recipient` for a card).
- **Suggested change**: add an explicit constraint to the prompt — "reviewer-class recipients (chief-risk, qa-manager, compliance-officer) may only be selected as `handoff_recipient` when the card explicitly contains a risk trigger (price-level break, compliance event, counterparty exposure, risk-threshold breach). Otherwise, prefer a primary analyst (china-macro, global-macro, sector-*, equity-strategy, chief-strategist)." Require the model to attach a ≤30-word `risk_trigger_reason` whenever a reviewer is chosen, so the choice is auditable after the fact.
- **Rationale**: §3.1 shows chief-risk as the #1 non-none whiteboard recipient (17), inverting the intended "reviewers are escalation endpoints" design.
- **Risk**: an over-tight rule could suppress legitimate escalations; the "default-suppress + reason-gated" form keeps the escape hatch open.

### Optimisation 2 — Make whiteboard card closeout half-mandatory on the recipient field
- **Target**: `whiteboard:card_closeout` / card-completion template (calibrate against the actual whiteboard template name).
- **Suggested change**: keep `handoff_recipient = none` allowed, but require an accompanying `terminal_reason` enum (`question_resolved` / `data_dead_end` / `merged_into_other_card` / `monitoring_only` / `other:<free_text>`); template rejects submission otherwise.
- **Rationale**: the 20 `(none)` cards in §3.2 cannot today be split into "legitimate terminal" vs "missed routing"; `terminal_reason` lets the operator filter out true breaks in the chain.
- **Risk**: extra cost per closeout; if the enum is too narrow, the model will force-fit a label and pollute the audit signal — keeping `other:<free_text>` mitigates this.

### Optimisation 3 — Surface parked-run age in the fleet-health snapshot
- **Target**: the fleet-health snapshot generator (the D1 query behind `/api/fleet-health/latest.md`, **not** a model prompt).
- **Suggested change**: in the `Pending runs` block add `parked_age_buckets` (<1h / 1–2h / 2–6h / 6–24h / >24h) plus the three oldest entries' `run_id` + `task_key`.
- **Rationale**: today the diagnostician only sees the count (12) and cannot judge whether the "<2h backfill SLA" is being violated. With age data, future diagnoses can flag stalls directly.
- **Risk**: snapshot grows slightly and the D1 query gets a touch more expensive; sensitivity is low.

## 5. Open questions for the operator

1. Does the current whiteboard QA / handoff-suggestion prompt encode an explicit preference for reviewer recipients (e.g. "have at least one reviewer cross-check")? If yes, is there appetite to switch it to on-demand escalation?
2. Can you share a list of the 12 parked runs (`run_id + task_key + parked_at`)? It is the prerequisite for deciding whether Optimisation 3 is urgent.
3. tmt-analyst's in/out ratio in the window is ≈36:5. Should some of that inflow (especially sentiment / social-media handoffs) be re-routed to thematic-researcher or peer sector analysts, or is the TMT desk's bandwidth comfortable?
