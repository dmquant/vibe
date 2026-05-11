---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Institute Diagnosis Report — 2026-05-08

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Institute Diagnosis Report — 2026-05-08

*Diagnostician generated: 2026-05-08 · Source snapshot: fleet_health.md (generated_at: 2026-05-07T16:00:36.703Z)*

---

## 1. One-Sentence Verdict

The institute is operational with zero archive failures and zero salvage markers, but **26 workflow runs remain parked (52% of window runs)**, combined with an elevated whiteboard card failure rate (8.3%) and heavy routing concentration on tmt-analyst — placing the system on **Watch-listed** status today.

---

## 2. Key Metrics

| Metric | Value |
|---|---:|
| Managed workflows | 220 |
| Runs in window (completed) | 50 |
| Pending runs (parked, awaiting terminal) | **26** |
| Mailbox threads (all auto-handoffs) | 122 / 122 |
| Mailbox thread failures | **2** |
| Mailbox dispatch failures | **2** |
| Whiteboard sessions / cards | 6 / 24 |
| Whiteboard cards: completed / running / failed | 17 / **5** / **2** |
| Execution-archive entries | 0 (failed: 0, salvage markers: 0) |
| Events in window | 112 |

---

## 3. Anomalies & Patterns

### A. Disproportionately high parked-run ratio
- **Observed**: 50 runs completed in the window, while **26 runs remain in parked state** (~52% of the running total). The snapshot does not surface start timestamps for individual parked runs, so it is impossible to confirm whether any breach the 2-hour staleness threshold directly from this data.
- **Why it matters**: If any of these parked runs have been waiting longer than 2 hours, it signals a systemic delay in terminal-state feedback from the scheduler — which can block downstream workflows that depend on completion signals.
- **Confidence**: High (count taken directly from snapshot)

### B. tmt-analyst is heavily over-weighted as an auto-handoff recipient
- **Observed**: Of 122 auto-handoffs, tmt-analyst received **24 (19.7%)**, global-macro received **22 (18.0%)**, together accounting for **37.7%** of all handoffs. The next highest, ashare-strategist, received 17 (13.9%).
- **Why it matters**: tmt-analyst absorbing nearly one-fifth of all handoffs is inconsistent with its role as a sector-specific analyst. This concentration suggests the upstream routing logic (QA step or dispatch prompt) is failing to apply proper topic filtering and is defaulting to tmt-analyst too broadly.
- **Confidence**: High

### C. Whiteboard handoff distribution skewed toward chief-risk (reviewer over-routing signal)
- **Observed**: Excluding 7 cards with `(none)` recipients, the 17 whiteboard cards with named recipients show **chief-risk receiving 3 (17.6%)** — the highest single named recipient.
- **Why it matters**: The diagnostic heuristic flags chief-risk / qa-manager / compliance-officer as primary whiteboard recipients being a signal that the QA-step prompt is over-routing to reviewers rather than primary analysts (macro, strategy, sector, equity-strategy). Under normal conditions, most whiteboard cards should route to domain analysts first.
- **Confidence**: Medium (whiteboard sample is small — only 6 sessions)

### D. 7 whiteboard cards with no handoff recipient (`(none)`)
- **Observed**: **7 of 24 whiteboard cards (29.2%)** carry a `(none)` recipient.
- **Why it matters**: A high `(none)` proportion could legitimately reflect cards that terminate as final-state nodes, but combined with the chief-risk over-routing in finding C, it raises a broader question about whiteboard routing quality — the prompt may not be reliably identifying downstream recipients.
- **Confidence**: Medium

### E. 5 whiteboard cards still in "running" state at snapshot time
- **Observed**: At snapshot generation (2026-05-07T16:00:36.703Z), **5 whiteboard cards** remained in `running` status (17 completed + 5 running + 2 failed = 24 total).
- **Why it matters**: Cards that were in flight at snapshot time may be legitimately long-running, or they may be stalled. Without start timestamps, we cannot distinguish. Operator confirmation of their age and expected duration is needed.
- **Confidence**: Medium

### F. 2 mailbox thread / dispatch failures
- **Observed**: 2 out of 122 threads failed (1.6% failure rate); the dispatch layer shows an identical 2 failures — a 1-to-1 match, indicating failures occurred at the dispatch layer rather than the routing layer.
- **Why it matters**: The absolute count is low, but if both failures originate from the same task_key or sender, they may reflect a systemic prompt or tool-call issue rather than transient errors. The snapshot does not identify the owning task_keys; further investigation is needed.
- **Confidence**: Medium

### G. `workflow.scheduled.completed` event count (95) substantially exceeds completed runs (50)
- **Observed**: Event breakdown shows **95** `workflow.scheduled.completed` events against **50** completed workflow runs — a ratio of approximately 1.9:1.
- **Why it matters**: ~1.9 scheduling-completion events per run is plausible for multi-step workflows, but if some steps are being re-scheduled due to retries or idempotency triggers, the ratio could mask redundant scheduling. Without a historical baseline this cannot be confirmed as anomalous.
- **Confidence**: Low (no prior-day baseline available in this snapshot for direct comparison)

---

## 4. Recommended Optimisations

### Optimisation 1 — Investigate and drain the parked-run backlog
- **Target**: `system:scheduler` / run terminal-state write-back logic
- **Suggested change**: Add a **2-hour staleness alarm** for parked runs: once a run exceeds the threshold it should be auto-marked `timed_out` and written to the execution archive, with an operator notification. As an immediate action, the operator should manually query the 26 parked runs' start times and confirm whether any are aged beyond 2 hours.
- **Rationale**: 26 parked runs (52% of the window) left unresolved will silently block downstream workflows that depend on their terminal signals, and will obscure real failures.
- **Risk**: If the timeout threshold is set too aggressively, legitimately long-running tasks (e.g., `data_ingest_premarket`) may be incorrectly marked as timed out. The initial threshold should be calibrated against the p95 historical runtime of each task_key.

### Optimisation 2 — Tighten the auto-handoff routing rules for tmt-analyst
- **Target**: `auto-handoff:routing_step` prompt, or sender-side prompts for the highest-volume senders (thematic-researcher, altdata-analyst, global-macro)
- **Suggested change**: Introduce an explicit **topic-to-recipient mapping constraint** in the routing prompt: tmt-analyst should receive only TMT / technology-sector content; macro, data, and sentiment outputs that are not TMT-related should be routed to domain-matched analysts (china-macro, fx-strategist, ashare-strategist, etc.) rather than defaulting to tmt-analyst.
- **Rationale**: tmt-analyst's 24-handoff lead (19.7%) is inconsistent with the role's sector scope, indicating the current routing logic lacks adequate topic filtering.
- **Risk**: Over-specifying routing rules may increase the `(none)` proportion for edge-case topics. Recommend a staged rollout with monitoring of the recipient distribution before and after the change.

### Optimisation 3 — Lower chief-risk's default routing weight in the whiteboard QA-step prompt
- **Target**: `whiteboard:qa_step` prompt
- **Suggested change**: Add an explicit guard clause to the whiteboard QA step: *"Only route to `chief-risk` when the card's content directly concerns risk-exposure assessment, compliance boundaries, or risk-limit triggers. Otherwise, prefer the domain analyst matching the card's primary subject (e.g., global-macro, sector-analyst, equity-strategy)."*
- **Rationale**: chief-risk accounts for 17.6% of named whiteboard handoffs, the highest single share among all named recipients — a textbook reviewer-over-routing signal per the diagnostic heuristic.
- **Risk**: If current whiteboard sessions genuinely contain elevated risk content (e.g., during high-volatility market conditions), reducing chief-risk routing weight could cause cards that genuinely warrant risk review to be sent to domain analysts instead. The operator should spot-check the 3 chief-risk cards before applying this change to confirm whether they were appropriate.

---

## 5. Open Questions for the Operator

1. **How old are the 26 parked runs?** Are any of them started before 2026-05-07T14:00Z (i.e., more than 2 hours prior to the snapshot)? If so, which task_keys are involved, and do any require manual termination?

2. **What is the origin of the 2 mailbox failures?** Which task_key or sender produced the 2 failed threads/dispatches? Are they isolated transient errors or repeated failures from the same workflow? Do they need to be re-triggered?

3. **Are the 5 still-running whiteboard cards expected?** Do these cards belong to by-design long-running tasks (e.g., real-time monitoring cards), or are they stalled due to upstream dependency blocks? Does the operator need to intervene to terminate or restart any of them?
