---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Institute Diagnostic Report — 2026-05-01

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Institute Diagnostic Report — 2026-05-01

*Diagnostician generated: 2026-05-01 · Snapshot scope: last 24h · Snapshot generated at: 2026-04-30T16:00:38.246Z*

---

## 1. One-sentence Verdict

The institute is broadly healthy today — zero workflow failures and clean execution archives — but a significant routing anomaly has emerged in the Whiteboard layer: `chief-risk`, a reviewer role, is the single most-routed named handoff recipient (21 cards, ~12.5% of named handoffs), outpacing every front-line analyst, which strongly suggests the QA-step prompt is over-routing to reviewers and warrants priority attention.

---

## 2. Key Metrics

| Metric | Value | Note |
|---|---:|---|
| Managed workflows | 213 | — |
| Runs in window | 80 | 100% completed, 0 failures |
| Pending runs | 12 | parked, awaiting terminal |
| Mailbox threads in window | 169 | 100% auto-handoffs |
| Mailbox thread failures | 2 | failure rate 1.2% |
| Mailbox threads running | 1 | — |
| Whiteboard cards in window | 193 | — |
| Whiteboard card failures | 2 | failure rate 1.0% |
| Whiteboard cards running | 2 | — |
| Execution-archive entries | 0 | salvage markers = 0 |
| Events in window | 381 | — |
| Auto-handoff volume | 169 | 100% of mailbox threads |
| Pending adhoc dispatches | 0 | healthy |

---

## 3. Anomalies & Patterns

### 3.1 Whiteboard handoffs over-routing to reviewer `chief-risk` — HIGH confidence
- **Observed**: `chief-risk` received 21 whiteboard handoffs, the largest share of any named recipient (~12.5% of ~168 named handoffs). `qa-manager` added another 6. Reviewers combined (chief-risk + qa-manager) account for 27 handoffs, or ~16% of named handoffs. By contrast, the top front-line analyst recipients are `tmt-analyst` (12), `energy-analyst` (10), and `financials-analyst` (8).
- **Why it matters**: If the whiteboard QA step is pushing cards to `chief-risk` by default — rather than only when genuine risk exposure is flagged — the review bottleneck sits upstream of front-line analysis, reducing throughput and creating an artificial dependency on the risk reviewer.
- **Confidence**: High

### 3.2 Mailbox auto-handoff recipients heavily concentrated on `tmt-analyst` (27/169 = 16%) — MEDIUM confidence
- **Observed**: `tmt-analyst` leads all mailbox auto-handoff recipients at 27, followed by `chief-quant` (24) and `china-macro` (21). The top three together absorb 72 of 169 auto-handoffs (43%). The leading senders, `sentiment-analyst` and `social-media-analyst`, each sent 17, well below the concentration on the receive side.
- **Why it matters**: A single analyst role handling ~1 in 6 institute auto-handoffs may become a throughput bottleneck. This may reflect genuine TMT event flow today (acceptable), or it may reveal a hardcoded routing bias in the generating workflow prompts (actionable).
- **Confidence**: Medium

### 3.3 25 whiteboard cards (13%) have no named handoff recipient — MEDIUM confidence
- **Observed**: Among 193 whiteboard cards, 25 are classified with `recipient = (none)`, making it the largest single bucket. No breakdown is available to distinguish intentional broadcasts, terminal cards, or misconfigured handoffs.
- **Why it matters**: If a meaningful fraction of these 25 cards should have been routed to a named analyst but were not, the research output they carry is effectively orphaned. The current snapshot provides no way to distinguish this from legitimate broadcast / terminal design.
- **Confidence**: Medium (requires operator review to confirm card intent)

### 3.4 Two failed mailbox thread dispatches — MEDIUM confidence
- **Observed**: 2 of 169 mailbox threads ended in `failed` status (both thread status and dispatch status). No thread IDs or error reasons are exposed in the snapshot.
- **Why it matters**: A 1.2% failure rate is within a tolerable range, but if both failures share the same sender, task_key, or workflow, they may indicate a systemic issue that will recur. Without IDs, root-cause analysis cannot be completed at this layer.
- **Confidence**: Medium

### 3.5 15 workflow runs with `kind=(none)` and 2 with `task_key=(none)` — LOW confidence
- **Observed**: Of 80 workflow runs, 63 are classified `routine`, 2 `global`, and 15 have `workflow_kind=(none)`. Separately, 2 runs carry no `task_key`. These are minor in volume but represent unclassified execution.
- **Why it matters**: Runs without a `task_key` cannot be attributed to any registered task template, which may indicate ad-hoc or misconfigured triggers. The `kind=(none)` group may simply be manual or one-off runs and is likely benign.
- **Confidence**: Low

### 3.6 12 pending runs with unknown age — LOW confidence
- **Observed**: 12 runs are parked and awaiting terminal state. No age data is provided in the snapshot, so it is not possible to determine whether any have been stalled for more than 2 hours.
- **Why it matters**: Long-stalled pending runs can block downstream report delivery or trigger timeout alerts. The absolute count (12) is not alarming, but age information is needed to assess severity.
- **Confidence**: Low (pending operator age query)

---

## 4. Recommended Optimisations

### Optimisation 1 (Highest priority): Whiteboard QA-step routing — reduce `chief-risk` trigger weight
- **Target**: `whiteboard:qa_step` routing logic (whiteboard handoff allocation prompt)
- **Suggested change**: Add an explicit conditional guard in the whiteboard QA-step prompt so that `chief-risk` is only selected when a card is tagged `risk_flag=true` or involves material position-level risk exposure. All other cards should default to their corresponding sector or macro analyst. Example instruction addition: *"Route to `chief-risk` only when the card is explicitly flagged for risk review or involves an open position risk event; otherwise prefer the relevant sector analyst (energy-analyst, financials-analyst, industrials-analyst, etc.) or macro lead."*
- **Rationale**: §3.1 — `chief-risk` at 21 whiteboard handoffs (12.5% of named) is the largest named recipient, surpassing every front-line analyst. This is the clearest signal of over-routing to reviewers in today's snapshot.
- **Risk**: If some of the current 21 cards legitimately require risk review, reducing the trigger weight may cause those to bypass the risk check. Recommend a phased rollout: adjust the prompt, monitor `chief-risk` share in the next 2–3 daily snapshots, and verify no risk-flagged cards are going unreviewed.

### Optimisation 2 (Medium priority): Investigate and rebalance mailbox `tmt-analyst` receive concentration
- **Target**: Mailbox auto-handoff routing in the primary sender workflows (`sentiment-analyst`, `social-media-analyst`, and peers)
- **Suggested change**: Review the handoff-generation prompts in the top sending workflows to determine whether TMT-related signals are being uniformly directed to `tmt-analyst` via a hardcoded rule. If today's concentration reflects real TMT news volume, no change is needed; if it reflects routing weight bias, add conditional branching (e.g., route TMT × macro cross-signals to `global-macro` or `chief-strategist` instead). Do not redistribute blindly — first confirm whether the concentration is event-driven.
- **Rationale**: §3.2 — `tmt-analyst` holds 27/169 auto-handoffs (16%), nearly double the next-most-concentrated primary analyst. This is a concentration risk and a potential throughput bottleneck.
- **Risk**: Over-distributing TMT signals may cause `tmt-analyst` to miss material sector-relevant items. Human judgment on today's TMT news environment is required before making this change.

### Optimisation 3 (Medium priority): Introduce explicit intent tagging for whiteboard `(none)` handoffs
- **Target**: Whiteboard card completion logic (whiteboard session template)
- **Suggested change**: Add a required classification field to the whiteboard card close event distinguishing: (a) intentional broadcast (`broadcast=true`), (b) intentional terminal (`terminal=true`), and (c) routing failure (no recipient assigned despite one being expected, triggering an alert). This change would allow the diagnostic layer to distinguish the three cases that currently all appear as `recipient=(none)`, enabling more precise anomaly detection in future snapshots.
- **Rationale**: §3.3 — 25 cards (13%) with `recipient=(none)` is the single largest whiteboard handoff bucket. The current snapshot provides no way to assess whether these represent normal design or silent routing failures.
- **Risk**: Adding a new required field to whiteboard card close events may require updates to all existing whiteboard session templates. Validate in a staging environment before production rollout.

---

## 5. Open Questions for the Operator

1. **Whiteboard `chief-risk` concentration**: Can you pull the card IDs or topic summaries for the 21 whiteboard cards routed to `chief-risk` today? Manual spot-checking is needed to confirm whether these are genuine risk-review cases or systematic mis-routing by the QA step.

2. **Two failed mailbox dispatches**: The snapshot does not expose `thread_id` or error reason for the two failed dispatches. What do the D1 database or execution logs show as the failure cause? Do both failures share the same sender, `task_key`, or workflow? This will determine whether the failures are isolated or systemic.

3. **Age of the 12 pending runs**: What is the age distribution of the 12 pending runs currently parked? Are any of them older than 2 hours without having advanced to a terminal state? If yes, please provide the corresponding `run_id` values for tracking.
