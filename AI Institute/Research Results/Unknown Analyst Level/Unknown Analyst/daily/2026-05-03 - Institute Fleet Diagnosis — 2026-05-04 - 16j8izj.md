---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Institute Fleet Diagnosis — 2026-05-04

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Institute Fleet Diagnosis — 2026-05-04

*Snapshot scope: last 24 h · generated_at: 2026-05-03T16:00:51.341Z · diagnosed: 2026-05-04*

---

## 1. One-sentence verdict

The institute is **watch-listed** today: whiteboard card failure rate is elevated at 21.7%, a large share of runs remain in-flight, and nearly half of whiteboard cards carry no handoff recipient — all warrant operator follow-up before declaring the fleet healthy.

---

## 2. Key metrics

| Metric | Value |
|---|---:|
| Managed workflows | 215 |
| Runs in window (total) | 50 |
| — completed | 20 |
| — running | 30 |
| Pending runs (parked / awaiting terminal) | 26 |
| Mailbox threads in window (auto-handoff) | 21 (all auto-handoff) |
| Mailbox thread failures | 1 |
| Whiteboard sessions / cards | 23 sessions / 46 cards |
| Whiteboard card failures | 10 (failure rate 21.7%) |
| Execution-archive failed entries | 0 |
| Salvage markers | 0 |
| Events in window | 54 |

---

## 3. Anomalies & patterns

### 3.1 Elevated whiteboard card failure rate ⚠️
- **Observed**: 10 of 46 whiteboard cards are in `failed` status — a 21.7% failure rate (completed=25, running=11, failed=10).
- **Why it matters**: More than one in five whiteboard cards did not complete. Downstream analysts may be missing outputs or handoffs, undermining the daily research pipeline's integrity.
- **Confidence**: High

### 3.2 Event count vs card failure count discrepancy ⚠️
- **Observed**: The events table records only 1 `whiteboard.card.failed` event, yet card status shows 10 failed cards — a gap of 9.
- **Why it matters**: If the event system drives monitoring or alerting, 9 card failures went undetected by that layer, creating a blind spot. Possible causes: the events window is narrower than the card status window (events = last few hours, cards = full day); or there is a bug in failure-event emission.
- **Confidence**: Medium

### 3.3 Large in-flight / pending backlog
- **Observed**: 30 of 50 runs (60%) are still `running`; an additional 26 are `parked/awaiting terminal`. In-flight total (running + pending) is 56, far exceeding the 20 completed.
- **Why it matters**: The snapshot was generated at 2026-05-03T16:00:51Z. If most of these tasks are weekend-batch `weekly_report` runs (45/50), the high in-flight ratio may simply reflect normal bulk execution timing. However, if any tasks were still pending 2+ hours after launch, they may be stalled.
- **Confidence**: Medium (requires launch-time data to resolve)

### 3.4 43.5% of whiteboard cards have no handoff recipient
- **Observed**: 20 of 46 whiteboard cards show `(none)` as handoff recipient. Cards with recipients go to industrials-analyst (5), chief-strategist (4), offshore-strategist (3), china-macro (3), and others (11 across 10 roles).
- **Why it matters**: If `(none)` cards are intentional terminal cards that require no further routing, this is expected. If the routing logic was supposed to assign a recipient to every card, nearly half the research outputs are being siloed — no analyst picks them up.
- **Confidence**: Medium

### 3.5 weekly_report accounts for 90% of run volume
- **Observed**: 45 of 50 runs are `weekly_report`; the remaining 5 are 4 × `topic_pitch_weekend_*` and 1 × `institute_diagnosis`.
- **Why it matters**: 2026-05-04 is a Monday, making a large batch of `weekly_report` runs entirely expected. This is a low-risk baseline observation, included for reference.
- **Confidence**: Low (low anomaly risk)

### 3.6 One mailbox thread failure
- **Observed**: 1 of 21 mailbox threads (and the corresponding dispatch) is `failed` (4.8%). The top sender is auto-analyst (4 threads).
- **Why it matters**: Absolute volume is low, but the specific sender/recipient involved should be confirmed to rule out a high-priority routing failure (e.g., global-macro or chief-strategist affected).
- **Confidence**: Low

### 3.7 Mailbox handoff recipient distribution is healthy (positive signal)
- **Observed**: Mailbox auto-handoff recipients are dominated by primary analysts — global-macro (5), china-macro (3), tmt-analyst (3), ashare-strategist (2), altdata-analyst (2). No review roles (chief-risk, qa-manager, compliance-officer) appear.
- **Why it matters**: This is a positive signal that the QA-step prompt is not over-routing to reviewer roles. No intervention needed here.
- **Confidence**: High

---

## 4. Recommended optimisations

### Rec 1 (highest priority): Investigate and address whiteboard card failure root cause

- **Target**: Whiteboard workflow card-generation step (all whiteboard sessions)
- **Suggested change**: Pull the session_id and card_id for all 10 failed cards and check whether failures cluster around a specific session, analyst role, or data source. Once a pattern is confirmed, add an explicit failure-handling instruction to the affected card template — for example: *"If required data is unreachable, output status=skipped with a reason field; do not silently fail."* This prevents silent failures and makes root-cause debugging easier.
- **Rationale**: §3.1 — 10/46 cards failed (21.7%), which is too high for routine operation.
- **Risk**: If failures stem from transient data unavailability rather than prompt logic, a prompt change will not help and may add latency via retries. Confirm the root cause before editing the prompt.

### Rec 2 (second priority): Clarify whiteboard card handoff routing rules

- **Target**: Whiteboard card handoff-assignment logic (the `handoff_recipient` assignment step or system prompt for whiteboard sessions)
- **Suggested change**: Add an explicit rule to the whiteboard card prompt or system config: *"Every completed card must either specify a handoff_recipient or be explicitly tagged as terminal (no routing needed)."* If no such rule exists today, the 43.5% `(none)` rate suggests the routing logic is under-specified. Adding an explicit conditional branch (assign recipient or mark terminal) will surface ambiguous cases at authoring time.
- **Rationale**: §3.4 — 20/46 whiteboard cards have no handoff recipient; without a clear terminal/non-terminal distinction it is impossible to tell if research outputs are reaching their intended audience.
- **Risk**: If some card types are genuinely terminal by design, enforcing the terminal-or-route rule adds complexity to the prompt. Map card types before updating to avoid over-engineering.

### Rec 3: Close the whiteboard card failure-event emission gap

- **Target**: Event emission system (`whiteboard.card.failed` trigger logic)
- **Suggested change**: Audit the conditions that trigger a `whiteboard.card.failed` event and confirm they cover all failure paths (timeout, internal error, model refusal, etc.). Reconcile with the card status database to ensure every `failed` card row results in a corresponding event. If the discrepancy turns out to be a window-size mismatch (events window ≠ card status window), align the monitoring dashboard to the same window rather than changing emission logic.
- **Rationale**: §3.2 — 10 failed cards vs 1 failure event is a 9× gap; if events drive alerting, this gap means the fleet appears healthier than it is.
- **Risk**: If the root cause is simply different window definitions (e.g., events cover only the last 6 h while card status covers 24 h), there is no emission bug — only a display/monitoring alignment issue. Verify window semantics before making code changes.

---

## 5. Open questions for the operator

1. **Concentration of whiteboard card failures**: Are the 10 failed cards clustered in a specific whiteboard session or analyst role? Is there a data-source outage that might explain them? The diagnostician cannot sample card-level detail from the snapshot alone — the operator should pull session_id / card_id from D1 to pinpoint the failure pattern.

2. **Intended semantics of `(none)` whiteboard handoffs**: Are the 20 cards with no handoff recipient designed as terminal cards (no further routing needed), or are they routing omissions? If both types exist, what proportion is each? Clarifying this is a prerequisite for deciding whether Rec 2 is actually necessary.

3. **Age distribution of the 26 pending runs**: Do any of the 26 parked/awaiting-terminal runs have a creation timestamp older than 2 hours? If so, they may be stalled or waiting on a dependency that has timed out. The snapshot does not include per-run timestamps — the operator needs to query D1 directly to check for stale runs.
