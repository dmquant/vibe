---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Institute Daily Diagnosis — 2026-05-05

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Institute Daily Diagnosis — 2026-05-05

*Diagnostician generated: 2026-05-05 · Data window: 2026-05-04T16:01:08Z (last 24 h)*

---

## 1. One-Sentence Verdict

The institute's pipeline is running cleanly with zero failures and zero salvage markers, but **parked/pending runs (26) outnumber completions in the window (21)** and `chief-risk` is materially over-represented as a handoff recipient across both the whiteboard and the mailbox — status rating: **Watch-listed**.

---

## 2. Key Metrics

| Metric | Value | Note |
|---|---:|---|
| Managed workflows | 215 | — |
| Runs in window | 21 | All completed; 100% completion rate |
| Pending runs (parked) | **26** | Exceeds completions — warrants investigation |
| Mailbox threads in window | 49 | All auto-handoffs |
| Pending adhoc dispatches | 0 | No backlog |
| Whiteboard sessions | 23 | 165 cards total |
| Whiteboard cards (running) | 34 | 20.6% of all cards still in-flight |
| Whiteboard cards (failed) | 1 | — |
| Execution-archive entries | 0 | failed=0, salvage_markers=0 |
| Events in window | 181 | — |

---

## 3. Anomalies & Patterns

### 3.1 Parked-run backlog exceeds window completions (26 pending vs. 21 completed)
- **Observed**: 21 runs completed in the window; 26 runs remain in "parked / awaiting terminal" state — a 1.24× ratio.
- **Why it matters**: More work is queued than was resolved in the same period. If any of these parked runs have been sitting for more than 2 h without reaching a terminal state, it may indicate a scheduler stall or a broken dependency chain. The snapshot does not expose per-run timestamps, so age cannot be confirmed from this view alone.
- **Confidence**: Medium (count visible; age unknown)

### 3.2 `chief-risk` over-represented as handoff recipient across both channels
- **Observed**:
  - Mailbox auto-handoffs: `chief-risk` receives **4** of 49 (8.2%) — on par with front-line analysts tmt-analyst (6), chief-strategist (6), and factor-analyst (5).
  - Whiteboard handoffs: `chief-risk` receives **7**, one of the highest single-recipient counts in the session, comparable to energy-analyst (11), global-macro (9), industrials-analyst (9), and utilities-analyst (8).
- **Why it matters**: `chief-risk` is a reviewer / risk-oversight role. Receiving 11 combined handoffs (7 whiteboard + 4 mailbox) at the same frequency as primary analysts is a strong signal that the QA-step prompt is over-routing toward reviewers. This lengthens approval chains and overloads a role meant to be a selective gate rather than a routine stop.
- **Confidence**: High

### 3.3 34 whiteboard cards still `running` at snapshot time
- **Observed**: Of 165 cards: completed=130, running=**34** (20.6%), failed=1.
- **Why it matters**: One-in-five cards was in-flight when the snapshot was taken. If these are simply the tail of an active work session, this is normal. However, if any subset has been running beyond a reasonable time bound, they may be stuck. A secondary discrepancy — `whiteboard.card.completed` events (138) exceed completed-card count (130) by 8 — suggests some cards may be firing duplicate completion events or being re-run, which warrants a data-consistency check.
- **Confidence**: Medium

### 3.4 `sentiment-analyst` highly concentrated as auto-handoff sender
- **Observed**: sentiment-analyst sends **14/49** auto-handoffs (28.6%); convertible-analyst sends 9/49 (18.4%). The top two senders account for 47% of mailbox volume.
- **Why it matters**: A single sender generating nearly a third of all routed work creates structural concentration. Current downstream throughput looks healthy (48 dispatches completed, 1 running), but any disruption to sentiment-analyst's workflow would have outsized fleet-wide impact.
- **Confidence**: Medium

### 3.5 Whiteboard handoff "(none)" bucket is the single largest recipient group
- **Observed**: 36 whiteboard handoffs have no recipient (`(none)`), the largest single category — more than three times the next-highest, energy-analyst (11).
- **Why it matters**: If these cards are intentional terminal nodes (output already filed, no further routing needed), this is by design. But if any of these 36 represent analytical outputs that should have been routed to primary analysts, they are silently dropped — invisible to the recipient and untracked.
- **Confidence**: Low (snapshot cannot distinguish "designed terminal" from "routing miss")

### 3.6 3 runs with `workflow_kind=(none)`; 1 run with `task_key=(none)`
- **Observed**: workflow_kind distribution shows `(none)` for 3 runs (vs. routine=17, global=1). task_key distribution shows one `(none)` entry.
- **Why it matters**: Unclassified runs are metadata noise. Accumulated over time they degrade the reliability of fleet-level analytics. These may be test runs, orphaned workflows, or newly registered workflows not yet tagged.
- **Confidence**: Low

### 3.7 Minor event/card-count discrepancy
- **Observed**: `whiteboard.card.completed` events = 138; completed card status count = 130 (Δ=8). `whiteboard.card.failed` events = 2; failed card count = 1 (Δ=1).
- **Why it matters**: Likely caused by retries or re-entrant card execution firing the completed event more than once per card. Not operationally critical today, but indicates a gap in event deduplication that will complicate long-run trend analysis.
- **Confidence**: Medium

---

## 4. Recommended Optimisations

### Optimisation 1 (Priority: High) — Tighten `chief-risk` routing conditions in the QA-step prompt

- **Target**: QA / handoff-step prompt logic across whiteboard sessions (routing decision layer)
- **Suggested change**: Add explicit trigger conditions for `chief-risk` routing. Route to `chief-risk` only when content matches specific risk keywords — e.g., "leverage breach, credit risk, regulatory compliance, counterparty exposure, margin call." All other market-analysis output should default to the appropriate primary analyst (macro, sector, equity-strategy, etc.). As a transitional guard, consider adding a soft cap such as: "route to `chief-risk` no more than twice per day unless a hard risk condition is met."
- **Rationale**: §3.2 — 11 combined handoffs to a reviewer role is inconsistent with the institute's intent of routing primary research to primary analysts. The current distribution resembles a QA-step that defaults to the reviewer when uncertain.
- **Risk**: Over-tightening may cause genuine risk-sensitive content to bypass `chief-risk`. Recommend a permissive initial threshold monitored for two weeks before further tightening.

---

### Optimisation 2 (Priority: High) — Audit and resolve the 26 parked-run backlog

- **Target**: Scheduler / run-management system (pending-run queue)
- **Suggested change**: Query the `created_at` timestamp for all 26 parked runs. For any run that has been parked for more than 2 h without reaching a terminal state, inspect its upstream dependency chain. If dependencies are broken or resolved, manually advance the run to `failed` or `cancelled` to prevent the backlog from compounding. If all 26 are confirmed to be recent (within the same batch window and not yet due), this action can be deferred.
- **Rationale**: §3.1 — 26 parked > 21 completed creates a divergence trend. If left unresolved across multiple daily windows, the parked queue will inflate without a natural drain.
- **Risk**: Forcibly terminating runs may discard valid in-progress analysis. Limit intervention strictly to runs that have demonstrably exceeded their expected completion window (>2 h).

---

### Optimisation 3 (Priority: Medium) — Tag or clean up `workflow_kind=(none)` run records

- **Target**: Workflow registration / metadata configuration
- **Suggested change**: Enforce non-null `workflow_kind` and `task_key` fields at workflow registration time. Trace the 3 unclassified runs: if they are test runs, mark them with a `test` kind; if they are new production workflows, assign the correct kind. Going forward, add a validation step at registration that rejects or warns on blank metadata fields.
- **Rationale**: §3.6 — untagged runs are a data-quality issue. With 215 managed workflows, a small number of unclassified entries today can grow into a significant noise floor that obscures operational trends.
- **Risk**: Low — purely a metadata fix with no impact on business logic.

---

## 5. Open Questions for the Operator

1. **How old are the 26 parked runs?** Please query their `created_at` timestamps and confirm whether any have been parked for more than 2 h. This is the key piece of information needed to determine whether the pending backlog represents a real scheduling stall or simply normal end-of-batch timing.

2. **Is `chief-risk`'s elevated routing volume driven by a current business context?** Has there been a recent compliance window, regulatory event, credit incident, or market stress that would legitimately require elevated risk-officer review? If so, the current routing volume may be appropriate and Optimisation 1 should be deferred.

3. **Are the 36 whiteboard "(none)" handoffs intentional terminal nodes or routing gaps?** Please confirm whether these cards are designed to be self-terminating (output already archived, no downstream routing required) or whether they represent research that should have been forwarded to a primary analyst. The answer determines whether the "(none)" bucket is a feature or a silent failure mode.

---

*This report is purely advisory. The diagnostician does not modify prompts, workflows, or any system state. All figures are taken directly from the raw snapshot; no model-layer inference has been applied to the source numbers.*
