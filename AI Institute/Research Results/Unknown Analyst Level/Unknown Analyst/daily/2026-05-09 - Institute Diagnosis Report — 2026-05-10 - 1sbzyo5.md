---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Institute Diagnosis Report — 2026-05-10

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Institute Diagnosis Report — 2026-05-10

Date anchor: this report resolves all relative date terms such as “today,” “yesterday,” “this week,” “last week,” and “previous trading day” against the shell date `2026-05-10`; the input snapshot is `Fleet Health Snapshot — 2026-05-10`, generated at `2026-05-09T16:00:18.381Z` (source: `fleet_health.md:1-3`).

## 1. One-Sentence Verdict

The institute is **watch-listed** today: the core execution path completed cleanly, with no execution-archive failures or salvage markers, but `25` parked pending workflow runs and a whiteboard/event count mismatch indicate that terminal-state reconciliation and monitoring consistency need attention (sources: `fleet_health.md:9-16`, `fleet_health.md:91-127`).

## 2. Key Metrics

| Metric | Value | Diagnostic meaning | Source |
|---|---:|---|---|
| Managed workflows | 224 | Baseline denominator for the managed fleet | `fleet_health.md:9` |
| Runs in window | 6 | Low workflow-run volume in today’s window, all completed | `fleet_health.md:10`, `fleet_health.md:24-43` |
| Completed workflow runs | 6 | Workflow-run terminal success rate in the window is 100% | `fleet_health.md:24-26` |
| Pending runs parked awaiting terminal | 25 | Parked pending volume exceeds today’s completed run count and needs terminal-state review | `fleet_health.md:11` |
| Mailbox threads / auto-handoffs | 17 / 17 | All mailbox activity today came from auto-handoff | `fleet_health.md:12`, `fleet_health.md:49-61` |
| Mailbox running | 1 thread / 1 dispatch | One auto-handoff item has not reached terminal state | `fleet_health.md:51-61` |
| Pending adhoc dispatches | 0 | No backlog in adhoc dispatches | `fleet_health.md:13` |
| Whiteboard sessions / cards | 20 / 280 | Whiteboard collaboration volume is much higher than workflow-run volume | `fleet_health.md:14` |
| Whiteboard card status | 279 completed / 1 running | Whiteboard cards are mostly complete, with one card still running | `fleet_health.md:91-96` |
| Failure counts | execution-archive failed 0; whiteboard.card.failed 1 | No execution-archive failures, but the event layer recorded one whiteboard-card failure | `fleet_health.md:16`, `fleet_health.md:120-127` |
| Salvage markers | 0 | No signal that declared output files are frequently being dropped | `fleet_health.md:16` |

## 3. Anomalies & Patterns

- **Parked workflow runs are elevated:** today’s window has only `6` workflow runs, all completed, while pending runs parked awaiting terminal are `25`, or `4.17x` today’s completed run count (sources: `fleet_health.md:10-11`, `fleet_health.md:24-26`). This may indicate lag in terminal-state writeback, cleanup, or observability for historical or cross-window runs; the snapshot does not expose pending-run ages or IDs, so it cannot confirm whether any pending item is older than 2h. Confidence: medium.

- **Execution-entry volume is low while collaboration-layer volume is high:** workflow runs in window are only `6`; task_key coverage is limited to `institute_diagnosis` plus weekend topic-pitch variants, each appearing once, and every workflow_kind is routine. In contrast, the snapshot shows `20` whiteboard sessions, `280` cards, and `324` events (sources: `fleet_health.md:10`, `fleet_health.md:28-43`, `fleet_health.md:14-15`). This suggests today’s load sits mainly in the collaboration/whiteboard layer rather than the workflow-run layer; if this is the expected weekend profile, it is benign, but otherwise it may indicate incomplete schedule coverage or a narrow run-recording scope. Confidence: medium.

- **Auto-handoffs are concentrated toward TMT:** auto-handoff volume is `17`, with `tmt-analyst` receiving `6`, or `35.3%`; the senders `thematic-researcher`, `sentiment-analyst`, and `social-media-analyst` each sent `4`, for a combined `12/17 = 70.6%` (source: `fleet_health.md:63-85`). This is not reviewer over-routing: `chief-risk` received only `1`, and neither `qa-manager` nor `compliance-officer` appears as a concentrated mailbox recipient. It does suggest that the weekend pitch flow may be funneling sentiment, social, and thematic signals into TMT rather than distributing them more evenly to macro, strategy, sector, or asset-allocation owners. Confidence: high.

- **Whiteboard handoffs lean toward overlay/portfolio roles and include unassigned recipients:** in the whiteboard recipient distribution, `asset-allocator` has `29` cards and `chief-strategist` has `28`, together `57/280 = 20.4%`; `(none)` has `21`, or `7.5%` (source: `fleet_health.md:98-116`). Primary analysts are still participating, including `tmt-analyst` `20`, `utilities-analyst` `18`, `energy-analyst` `18`, and `industrials-analyst` `17`, but the first layer of whiteboard collaboration is visibly tilted toward portfolio and chief-strategy roles. If cards are supposed to be attributed first to primary analysts, this may increase synthesis load on strategy and asset allocation. Confidence: medium.

- **Reviewer routing does not look out of control, though whiteboard QA should still be sampled:** on the whiteboard, `qa-manager` has `12` and `chief-risk` has `9`, together `21/280 = 7.5%`; in the mailbox, reviewer-like routing is only `chief-risk` at `1/17 = 5.9%` (sources: `fleet_health.md:73-85`, `fleet_health.md:98-116`). This does not look like broad QA-step prompt over-routing to reviewers; it is more consistent with normal review or risk sampling. Confidence: medium.

- **Whiteboard card status and event counts have a small inconsistency:** card status shows `279 completed` and `1 running`, while the event layer shows `whiteboard.card.completed` at `280` and `whiteboard.card.failed` at `1` (sources: `fleet_health.md:91-96`, `fleet_health.md:120-127`). This may come from event deduplication rules, retry-after-failure success, or a boundary mismatch between the state snapshot and event stream. The scale is small, but it can affect future failure-rate and SLA interpretation. Confidence: medium.

- **Salvage-marker risk is low:** execution-archive entries are `0`, failed entries are `0`, and salvage markers are `0` (source: `fleet_health.md:16`). There is no evidence today that models are frequently dropping declared output files, so artifact-salvage prompt reinforcement should not be the main optimization focus. Confidence: high.

## 4. Recommended Optimisations

1. **Target: `<system component:workflow-terminal-reconciler>`**  
   **Suggested change:** Add a read-only terminal-state reconciliation guardrail or daily-report field that buckets `Pending runs (parked, awaiting terminal)` by age: `<2h`, `2-6h`, `6-24h`, and `>24h`, and lists the 10 oldest runs with `workflow_key`, `step_id`, `run_id`, and `last_event_at`. If an internal reconciler already exists, add this field to the fleet-health snapshot without automatically closing runs.  
   **Rationale:** today’s `25` parked pending runs exceed the `6` completed workflow runs, and the snapshot lacks age and ID detail, so it cannot distinguish genuinely stuck old pending runs from expected cross-window parked runs (source: `fleet_health.md:10-11`).  
   **Risk:** If the collection logic marks normal cross-day parked runs as risky, it will add operator noise; the first version should be read-only rather than auto-remediating.

2. **Target: `<topic_pitch_weekend_*:auto_handoff_step>`**  
   **Suggested change:** Add a recipient-selection constraint to the auto-handoff prompt: “When the evidence mainly comes from sentiment/social/thematic signals, first identify the primary owner; default to `tmt-analyst` only when the catalyst clearly belongs to TMT companies, platforms, AI, semiconductors, consumer electronics, or the software chain. Otherwise route first to the relevant macro, strategy, sector, or asset-allocation owner, and write the owner-selection rationale in the handoff.”  
   **Rationale:** of today’s `17` auto-handoffs, `tmt-analyst` received `6` (`35.3%`), and the three upstream thematic/sentiment/social senders account for `12/17 = 70.6%`, suggesting that the weekend pitch flow may be over-funneling multi-source signals into TMT (source: `fleet_health.md:63-85`).  
   **Risk:** If the constraint is too strong, true cross-cutting TMT themes may be routed to owners less familiar with the technology chain, reducing recall; the “clear TMT catalyst” exception should remain.

3. **Target: `<system component:whiteboard-event-normalizer>`**  
   **Suggested change:** Add a reconciliation note to whiteboard-card statistics: when `card status` and `event_type` counts diverge, output an explanatory field such as `retry_success_count`, `duplicate_completed_events`, `failed_then_completed_count`, or `window_boundary_mismatch_count`.  
   **Rationale:** today’s card status is `279 completed / 1 running`, while the event layer reports `whiteboard.card.completed 280` and `whiteboard.card.failed 1`, indicating at least a one-unit accounting mismatch between the state snapshot and event stream (sources: `fleet_health.md:91-127`).  
   **Risk:** If event attribution is implemented loosely, it may create false precision; first expose it as a snapshot accounting note before using it for SLA or failure-rate automation.

## 5. Open Questions for the Operator

1. Of the `25` parked pending workflow runs, how many are expected cross-day parked runs, and how many should have reached terminal state before `2026-05-10`?
2. Is the weekend topic-pitch process expected to be TMT-heavy? If not, should the `tmt-analyst` `6/17` auto-handoff share trigger a soft-threshold alert?
3. Does the whiteboard `(none)` recipient count of `21/280` represent system cards that do not need an owner, or is it a fixable data-quality issue where handoff recipients are missing?
