# The Operator Role — A Proposal for a Running-Operations Layer

> **Status**: draft v1 — for discussion, not yet committed
> **Date drafted**: 2026-04-26
> **Decision required from**: project owner (daoming)
> **Scope of decision**: whether to add an Operator subsystem; if yes, which layers to build first; how to gate prompt mutations.

---

## TL;DR

Yes — the institute has reached the complexity tier where a meta-layer earns its keep. Don't build it as one monolithic *Operator analyst*. Decompose it into **four subsystems with different risk profiles** (observer → diagnostician → cross-workflow handoff supervisor → prompt curator), build them in that order, and keep humans in the loop on prompt changes for the first 1–2 months. The first two layers are high value / low risk and ship-able in days. The latter two depend on what the first two reveal.

---

## Context — why this conversation, why now

The institute today has **39 analyst personas, 5 headline workflow templates, ~182 managed workflows, and a continuous flow of weekly / daily / morning / committee / research / whiteboard output**. Recent debugging cycles have surfaced patterns that no single analyst — and no per-workflow QA Manager — can see:

- The *gemini-doesn't-write-files* prompt issue affected every workflow that used gemini, but only became visible after pattern-matching across many runs.
- The *queue-time-counted-toward-timeout* bug stemmed from agent-route's load-balancer interacting with our staleness logic — a cross-cutting symptom, not a per-step one.
- The *parser-reads-empty-field* bug in `auto-handoff.ts` would never have been caught by a per-workflow QA pass; only fleet-level "why have zero handoffs ever fired" thinking surfaced it.
- The *follow_ups blocks landing in `QA_review.md` but no mailbox emission* cycle was a four-step debugging journey across three subsystems (prompt → cursor → parser → seeding).

These are operations-engineering problems, not research problems. The institute has no role today that owns operations.

The introduction document promises a "self-evolution loop." That loop is currently unbuilt. The Operator proposal is the implementation of that loop.

---

## What the user proposed (verbatim, lightly numbered)

1. Manage all workflows and tasks prompts and data.
2. Do everyday deep analysis of the tasks.
3. Based on deep analysis, decide if there need any optimizations on workflow and prompt of each task and step.
4. Do update on workflows and tasks prompts to make the institute perform better, and do version control of these resources.
5. Manage all analysts' memory; decide which analyst should adopt for every task.
6. Take over the handoff mechanism, both whiteboard and mailbox; review each whiteboard card and workflow tasks and other tasks routinely; gen the follow-ups and handoffs; gen mails, messages and trigger analyst's follow-up tasks, to make the ecosystem running healthy.
7. Others.

---

## Per-function analysis

### (1) Manage workflows + prompts — *high risk, build last*

This is the most consequential function and the one most likely to silently degrade the institute. Subtle prompt wording changes can dramatically alter model behavior; auto-applied changes accumulate into drift over weeks.

**Don't** have the Operator *autonomously* rewrite prompts. **Do** have it *suggest* changes that land in an approval queue. Pair with a `prompt_versions` D1 table so every change is reversible.

### (2) Daily deep analysis — *high value, low risk, missing today*

The institute today has no fleet-level view. QA Manager reviews one weekly at a time; nobody asks "are Friday daily reports 20% shorter than Mondays — and why?" or "claude visualizations are timing out 3× more this week than last." This is the layer with the best ROI and lowest risk because the output is read-only.

This is genuinely needed and isn't currently covered.

### (3) Optimization recommendations — *couple to (2)*

This is the natural output of (2). Frame it strictly as advisory: a daily `diagnosis_YYYY-MM-DD.md` artifact with concrete recommendations and confidence scores. Resist the temptation to make it a closed loop — the human signs off on which recommendations propagate to (4).

### (4) Apply prompt updates with version control — *needs the queue*

Versioning is the easy half (D1 table + audit trail). The hard half is the *gate* between "Operator has an idea" and "the institute now runs different prompts." Default to human-in-the-loop for the first 1–2 months. Once you have evidence that Operator-suggested changes are actually improvements, you can auto-apply low-risk categories (typo fixes, formatting, language consistency) while keeping semantic changes gated.

The bootstrap-cache versioning discipline we already use (`v15 → v16` etc.) becomes the natural rollout primitive.

### (5) Memory + analyst assignment — *two different problems, separate them*

These are unrelated and should not be conflated.

- **Workflow assignment**: each routine is owned by a specific analyst by design (e.g. `chief-economist` owns `analyst:chief-economist:weekly_report`). The Operator should NOT override that — ownership is part of the audit identity. The line of thinking is "this *analyst* delivered this output", not "the Operator decided to delegate to this analyst this week."
- **Whiteboard assignment**: already model-driven (each card's `handoff` field picks the next analyst based on the next unanswered question). The Operator could provide better *context* for that decision (e.g. inject "this analyst handled a similar topic last week" into the prompt), not override it.
- **Memory curation**: today every analyst sees their full workspace history when relevant. The Operator could decide what's *fresh* and *relevant* per task — pruning, summarizing, building retrieval indexes. This is its own design problem and I'd defer it until you see whether stale-context is actually causing quality issues.

### (6) Centralized handoff supervisor — *augment, don't replace*

Per-workflow auto-handoff (what we just shipped) makes good *local* decisions. The Operator's value here is the *cross-cutting* lens that local steps can't see:

- "Morning brief says X is bullish, daily report says X is fragile — wants reconciliation by chief-strategist."
- "Three different weekly reports all flagged the same regulatory event independently — needs a unified read by the policy analyst."
- "A whiteboard thread on AI capex is touching the same questions a deep research run is exploring — these should converge."

Frame it as a **second-tier supervisor** that runs hourly/daily, looks at the *aggregate* of recent local handoffs + cards + tasks, and emits *additional* handoffs that the per-workflow logic missed. Does not replace what's working.

### (7) Others — operational housekeeping

Hand-load rebalancing, stuck-workflow alerting, workspace pruning, KV cache hygiene, dead-letter queue inspection. These are deterministic ops tasks; mostly SQL + cron, not LLM. Bundle them as a "fleet ops" cron alongside the observer.

---

## Proposed four-layer decomposition

| Layer | Role | LLM? | Risk | Initial value |
|---|---|---|---|---|
| **L1 — Fleet health observer** | Aggregates all run / task / mailbox data into a daily "fleet health" snapshot | No | Low | High — needed substrate for everything else |
| **L2 — Diagnostician** | Reads L1 + samples of artifacts; emits patterns + recommendations as advisory markdown | Yes | Low (read-only) | High |
| **L3 — Cross-workflow handoff supervisor** | Periodically reviews recent terminal runs / cards / mailbox; emits aggregated handoffs that local steps missed | Yes | Medium | High once L1+L2 mature |
| **L4 — Prompt curator** | Drafts unified diffs for prompt changes based on L2 recommendations; human-approved | Yes | High if auto-applied; manageable if approval-gated | Medium initially; high once trusted |

Build them in order. Each layer is useful on its own and feeds the next.

---

## Layer 1 — Fleet health observer (deterministic)

**Purpose**: replace ad-hoc D1 queries with a structured daily/weekly snapshot of how the institute is doing.

**Implementation**: a worker function (called from the existing 5-min cron daily at midnight SG, plus on-demand via endpoint) that aggregates:

- **Run-level**: count by status (completed / failed / running / queued) per workflow, per analyst, per hand, per day.
- **Task-level**: failure rate by hand (gemini / codex / claude), median + p95 duration per step type, watchdog reap rate, no-edge-node rate.
- **Workspace-level**: declared-output-file presence ratio (i.e. how often the salvage path actually had to back-fill a file), QA Manager grades distribution (`pass` / `needs-revision` / `fail`).
- **Coordination**: auto-handoff emit rate, mailbox dispatch success rate, average reply latency.
- **Schedule health**: deviation between scheduled run time and actual start time (queue lag).

**Output artifact**: `R2: fleet_health/YYYY-MM-DD.json` (machine-readable) + `fleet_health/YYYY-MM-DD.md` (human-readable summary), plus a permanent D1 table `fleet_health_snapshots` keyed on date for trending.

**No LLM involvement**. Pure SQL + R2 writes. Cheap.

---

## Layer 2 — Diagnostician (LLM, advisory)

**Purpose**: read fleet-health snapshots over a rolling window (last 7 days, last 30 days), sample a handful of failed / degraded artifacts, and produce a human-readable diagnosis + ranked recommendations.

**Inputs**: latest L1 snapshot + last 30 days of L1 trend + 5–10 sampled deliverables (failed runs, low-graded weeklies, long-running tasks).

**Output artifact**: `R2: diagnosis/YYYY-MM-DD.md` with a structured shape:

```
## 1. Fleet summary (1 paragraph)
## 2. Anomalies detected this period (each: pattern, evidence, severity)
## 3. Recommendations (each: target = workflow_key/step_id, rationale, suggested change, confidence 0-1)
## 4. Open questions for the human operator
```

**Position in architecture**: lives as an analyst persona (`id: institute-diagnostician`) with a daily scheduled task. Output is a research-style markdown artifact that fits naturally into the existing `/analysts/:id` UI.

**Authority**: read-only. Cannot change anything in the institute. Recommendations are pure advice.

**Risk profile**: low. Worst case is a confused diagnosis — easily ignored.

---

## Layer 3 — Cross-workflow handoff supervisor (LLM)

**Purpose**: spot cross-cutting handoffs that local per-workflow logic missed.

**Cadence**: hourly review (lighter) + daily review (heavier).

**Inputs**:
- All `[auto-handoff]` mailbox threads from the last 24h.
- All terminal workflow runs from the last 24h (their QA reviews + main deliverables).
- All recent whiteboard cards (last 6h).
- Recent mailbox traffic in general.

**Output**: zero or more *new* mailbox messages with adhoc dispatch attached. Same shape as existing auto-handoff messages but tagged `[supervisor-handoff]` to distinguish source.

**Guardrails** (similar to existing auto-handoff but more conservative):
- Max 5 supervisor handoffs per cycle.
- One-hop only — supervisor's emissions don't trigger another supervisor pass.
- 72-hour KV cooldown by `(supervisor, recipient, content_hash)` (longer than per-workflow's 36h because supervisor has bigger lens).
- Skips a recipient who already has a pending dispatch from any source.

**Position**: worker-level component (not an analyst). Has its own cron entry, own D1 audit table `supervisor_emissions`, own KV cooldown space.

**Risk profile**: medium. Adds an additional source of work for analysts; needs careful ROI tracking.

---

## Layer 4 — Prompt curator (LLM, human-approved)

**Purpose**: convert L2 recommendations into specific, applicable diffs.

**Mechanism**:
1. L2 emits a recommendation: "step 2 of `weekly_report` should explicitly mention ticker formatting consistency."
2. L4 reads the current step prompt + recommendation + sample evidence, drafts a unified diff (specific text-level edit).
3. Diff lands in `prompt_change_proposals` D1 table with: target (workflow_key / step_id), proposed_text, rationale, evidence_run_ids, status ∈ {`proposed`, `approved`, `rejected`, `applied`, `superseded`}.
4. UI surface: `/admin/prompt-proposals` page lists pending diffs with diff view; human approves / rejects.
5. Approved diffs get applied via the existing bootstrap-cache mechanism (cache version bump + re-registration) and a new row in `prompt_versions` (id, target, prompt_text, version, source, applied_at, created_by).

**Authority categories**:
- **Auto-applicable** (after a 1-month confidence period): typo fixes, formatting normalizations, language consistency. Logged but not gated on human approval.
- **Always-gated**: any semantic change (rules, structure, scope, file paths). Always requires human approval.

**Position**: worker-level component + frontend admin page.

**Risk profile**: high if auto-applied; safe if approval-gated. Start fully gated.

---

## Architectural choice — analyst role vs. worker component

Two options worth distinguishing:

**(a) Operator-as-analyst** (`id: operator`, lives in the analyst roster):
- Plays well with mailbox / whiteboard / workflows; gets dispatch for free.
- Output looks like research output; fits the existing UI surfaces.
- Mixes ops messages and research messages in mailbox.

**(b) Operator-as-worker-component** (its own cron, its own D1 tables, doesn't pretend to be an analyst):
- Cleaner ownership semantics.
- System-state changes don't pollute the research record.
- Needs new admin UI surfaces.

**Recommendation**: split it.
- **L2 (diagnostician)** as an analyst persona — its output IS research-style, fits naturally.
- **L1, L3, L4** as worker-level components — they touch system state, schedules, prompts; mixing them with analysts dilutes the "every analyst output is research" invariant.

---

## Data model sketches

```sql
-- L1: fleet snapshots (one row per snapshot)
CREATE TABLE fleet_health_snapshots (
  snapshot_id TEXT PRIMARY KEY,        -- YYYY-MM-DD or YYYY-MM-DD-HH
  scope TEXT NOT NULL,                  -- 'daily' | 'hourly'
  created_at INTEGER NOT NULL,
  metrics_json TEXT NOT NULL,           -- the raw aggregation blob
  r2_summary_key TEXT,                  -- pointer to human-readable .md
  r2_metrics_key TEXT                   -- pointer to machine .json
);

-- L4: prompt change proposals
CREATE TABLE prompt_change_proposals (
  proposal_id TEXT PRIMARY KEY,
  workflow_key TEXT NOT NULL,
  step_id TEXT NOT NULL,
  current_prompt_hash TEXT NOT NULL,    -- guards against stale proposals
  proposed_prompt TEXT NOT NULL,
  unified_diff TEXT NOT NULL,
  rationale TEXT NOT NULL,
  evidence_json TEXT,                   -- run_ids, sample artifacts referenced
  confidence REAL,                      -- 0..1, set by L4
  status TEXT NOT NULL,                 -- proposed | approved | rejected | applied | superseded
  created_at INTEGER NOT NULL,
  decided_at INTEGER,
  decided_by TEXT,                      -- 'human' | 'auto-low-risk'
  applied_at INTEGER
);

-- L4: prompt version history (one row per applied change)
CREATE TABLE prompt_versions (
  version_id TEXT PRIMARY KEY,
  workflow_key TEXT NOT NULL,
  step_id TEXT NOT NULL,
  prompt_text TEXT NOT NULL,
  source TEXT NOT NULL,                 -- 'human' | 'operator-suggested' | 'operator-auto-low-risk'
  proposal_id TEXT,                     -- FK to prompt_change_proposals when applicable
  applied_at INTEGER NOT NULL,
  superseded_at INTEGER
);

-- L3: supervisor emissions
CREATE TABLE supervisor_emissions (
  emission_id TEXT PRIMARY KEY,
  cycle_id TEXT NOT NULL,                -- groups emissions by supervisor pass
  source_run_ids_json TEXT NOT NULL,
  recipient_analyst_id TEXT NOT NULL,
  subject TEXT NOT NULL,
  question TEXT NOT NULL,
  thread_id TEXT,                        -- mailbox thread emitted
  emitted_at INTEGER NOT NULL
);
```

---

## Risks to manage

1. **Auto-feedback loop**: Operator measures → modifies → measures again. If the metric has bias (e.g. "shorter is better" because errors correlate with longer outputs), Operator may optimize toward bad measures. *Spend real design time on what "good" means per artifact before letting Operator close the loop.*
2. **Prompt drift**: small Operator-suggested tweaks accumulate. After 6 months of changes, prompts may have drifted far from original intent. *Schedule periodic "is this still doing what we asked?" human review.*
3. **Cost spiral**: deep analysis of all daily output × 39 analysts × multiple workflows = significant model-call volume. *Budget caps + sampling strategies for L2/L3.*
4. **Authorship traceability**: today every prompt has a clear human author (you, in code). Once Operator can change prompts, "who decided this wording?" gets murky. *The version table mitigates only if every change carries a rationale + evidence.*
5. **Mailbox role-mixing**: if Operator (L3) is an analyst, ops messages and research messages mix. *Either tag ops mail explicitly or keep L3 out of mailbox (recommendation: tag with subject prefix `[supervisor-handoff]`).*
6. **Recursive cost**: an Operator that reviews handoffs may itself emit handoffs, which generate more output, which the Operator must review next cycle. *Cap with sampling and a hard concurrency budget. One-hop rule for L3.*
7. **Operator self-improvement**: the Operator changing the Operator's own prompts is a hard recursive problem. *Don't allow it. Operator's own prompts are human-only territory.*

---

## What's explicitly NOT in scope (defer)

- **Memory curation** (your point #5 second half). Real problem but worth waiting until you have evidence that stale-context is actually hurting output quality. Solving it speculatively risks over-engineering a non-issue.
- **Auto-application of prompt changes**. Keep human-in-loop until you've watched 30+ Operator-suggested changes and seen the success rate.
- **Operator self-prompt-modification**. Off-limits forever.
- **Operator overriding workflow ownership**. Workflow assignment stays code-driven; Operator may augment context but cannot reassign owners.
- **Replacing per-workflow auto-handoff**. L3 augments; the existing per-workflow logic stays.

---

## Phasing

| Week | Milestone |
|---|---|
| 1–2 | L1 — fleet health observer. Daily snapshot to R2 + D1. Frontend page `/admin/fleet-health` (read-only chart of trends). |
| 3–4 | L2 — diagnostician. Daily run as `institute-diagnostician` analyst. Output `diagnosis_YYYY-MM-DD.md`. *Evaluate: are recommendations actually useful?* |
| 5–8 | Decision point. If L2 reveals chronic prompt issues across many workflows: continue to L3+L4. If L2 shows the institute self-corrects: stop here, the diagnostician alone is enough. |
| 9–12 | L3 — cross-workflow handoff supervisor (only if previous decision = continue). |
| 13–16 | L4 — prompt curator with approval queue. |
| Month 4+ | Memory curation, *if* L2 has by then surfaced evidence that stale-context is hurting quality. |

The **decision point at week 4–8** is critical. Don't pre-commit to L3+L4 — let L2's findings determine whether the additional layers are justified.

---

## Open questions for discussion

1. **Authority gradient**: should L4 ever auto-apply *anything*, or always require human approval? Argument for auto-apply on a narrow whitelist: typo fixes, formatting nits — these are mechanical and the human approval queue becomes noise. Argument against: any auto-apply opens a vector for drift.
2. **L2 cadence**: daily, weekly, or both? Daily catches recent regressions fast but adds cost. Weekly is cheaper but slower to react.
3. **Sampling strategy for L2**: should L2 read every artifact or sample? Reading every artifact scales linearly with the institute's growth; sampling introduces variance.
4. **L3's authority over the whiteboard**: should L3 be allowed to seed new whiteboard threads, or only emit mailbox handoffs? Threads are heavier — more visibility, more cost.
5. **Memory curation scope**: when (if ever) we build it, does it apply to all analysts uniformly or per-analyst opt-in?
6. **Operator persona naming**: "Operator" sounds technical. The project's tone is more researcher-friendly. Alternative names: "Institute Editor", "Research Director", "运营主管". The chosen name shapes how the persona writes.
7. **Cost budget**: what's the model-call budget for the Operator subsystems combined? This determines sampling and cadence decisions.
8. **Failure mode of the Operator itself**: what happens if the Operator hallucinates a recommendation that, applied, breaks an analyst? Rollback procedure? SLA on detection?

---

## Bottom line

The institute is at the complexity tier where this layer earns its keep. The honest answer is: **build L1 + L2 in the next 1–2 weeks** (low risk, high signal), **then evaluate** whether L3 and L4 are worth the additional design overhead based on what L2 turns up. If L2 reveals "actually most of our analysts are stable and the institute self-corrects," you may need only the diagnostician. If L2 reveals chronic prompt issues across many workflows, that's the trigger to invest in L3+L4.

Avoid the trap of designing the full Operator up front. Start with the observer, let the data tell you what's actually broken, then decide which subsequent layers to build.
