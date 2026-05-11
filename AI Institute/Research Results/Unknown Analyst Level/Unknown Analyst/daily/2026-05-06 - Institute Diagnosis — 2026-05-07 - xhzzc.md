---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Institute Diagnosis — 2026-05-07

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Institute Diagnosis — 2026-05-07

*Source: fleet_health.md (generated_at 2026-05-06T16:00:52.558Z, window: last 24h)*

---

## 1. One-sentence verdict

The institute is **operating normally but with watch items**: all 29 routine runs in the window completed cleanly with zero salvage and zero workflow failures, but 26 pending runs remain parked, ~23% of whiteboard cards have no downstream handoff recipient, and tmt-analyst is heavily net-receiving — load and routing-completeness deserve attention.

## 2. Key metrics

| Metric | Value | Note |
|---|---:|---|
| Managed workflows | 215 | Under management |
| Runs in window (completed) | 29 / 29 | Failures: 0 |
| Pending runs (parked, awaiting terminal) | 26 | Same order of magnitude as completed — backlog |
| Mailbox threads | 74 (auto-handoffs: 74) | 73 completed / 1 running |
| Pending adhoc dispatches | 0 | Healthy |
| Whiteboard sessions / cards | 21 / 109 | 97 completed / 12 running / 1 failed |
| Events | 193 | Includes 1 × whiteboard.card.failed |
| Execution-archive failures / salvage markers | 0 / 0 | Healthy |

---

## 3. Anomalies & patterns

1. **26 pending runs parked, on par with the 29 completed in-window** — nearly 1:1. So beyond today's 29 finishes, 26 workflows are still hanging un-terminated, suggesting a long tail (brain task still running, or a missing terminal callback). **Why it matters**: this pollutes tomorrow's pending pool and can mask real failures. **Confidence: high**.

2. **25 of 109 whiteboard cards (~23%) have `(none)` as their handoff recipient** — the single largest bucket, exceeding any named analyst. **Why it matters**: ~a quarter of whiteboard output is not being explicitly routed to a downstream analyst — a "note pinned to the wall but no one assigned to pick it up" gap. **Confidence: high**.

3. **tmt-analyst is severely load-skewed** — 14 mailbox inbound (highest) + 9 whiteboard inbound = 23 inbound; only 1 outbound as sender. The single heaviest "message sink" of the day, with negligible upstream contribution. **Why it matters**: either the TMT queue is piling up, or routing templates default cross-topic material to TMT. **Confidence: medium** (would need follow-up pitch completion rates to confirm).

4. **whiteboard.card.failed = 1** — small in count but the only failure-class signal of the day; the snapshot doesn't expose the specific card_id / workflow. **Why it matters**: a candidate clue for explaining the 26 pending runs. **Confidence: medium**.

5. **12 whiteboard cards still running** — across 21 sessions that's ~0.6 unfinished per session; given the window is already 24h, some cards may exceed reasonable execution time. **Why it matters**: long-running cards precede salvage / failures, though this period's salvage_marker_window=0 means we haven't tipped over yet. **Confidence: medium**.

6. **QA routing is NOT over-skewed toward reviewers** — auto-handoff recipients show compliance-officer=1, with no chief-risk / qa-manager. The QA-step prompt is currently NOT over-routing to review roles. This is a healthy datapoint. **Confidence: high**.

7. **daily-report-editor is the top upstream sender (12)** — consistent with the editor's distribution role, normal; but whether editor → tmt-analyst is the source of finding #3 deserves a routing-template review. **Confidence: medium**.

8. **offshore-strategist receives 10 whiteboard handoffs but is entirely absent from mailbox** — channel split: active on whiteboard, zero on mailbox. **Why it matters**: this role may lack a mailbox-handling prompt, or be intentionally excluded from auto-handoff — need to confirm whether it's design or omission. **Confidence: low-medium**.

---

## 4. Recommended optimisations (ordered by expected impact)

### Optimisation 1: whiteboard handoff fallback recipient
- **Target**: `whiteboard:card.finalize` (or whichever step template emits the `handoff_recipient` field).
- **Suggested change**: in the finalize step add a guard — if `handoff_recipient` is empty AND the card carries identifiable sector/topic tags, map via tag → default owner (e.g. TMT keywords → tmt-analyst, energy → energy-analyst); if still indeterminate, fall back to `chief-strategist` instead of `(none)`, and stamp `routing_fallback=true` on the artifact for auditability.
- **Rationale**: §3.2 — 25/109 ≈ 23% of cards have no recipient, the largest single link-break in the system.
- **Risk**: mis-targeting (forcing an unrelated card on an analyst) adds noise; mitigate by always tagging `routing_fallback=true` so the operator can trace and correct.

### Optimisation 2: pending-runs sweeper + terminal-callback audit
- **Target**: system component `workflow.runtime.finalizer` (or a daily morning sweep hook owned by the diagnostician layer).
- **Suggested change**: add a daily scan — for any run pending > 2 hours, query its brain-task state; if the brain has completed but the run is not terminated, force the terminal callback; if the brain is still running, tag stale and alert. Add a `pending_runs_age_buckets` (<2h / 2–12h / >12h) field to the fleet-health output to expose the real tail.
- **Rationale**: §3.1 — 26 parked. Without sweep this accumulates daily and eventually drowns real failure signal.
- **Risk**: forcibly terminating a still-running brain task would discard results; the order MUST be brain-state query first, force-terminate only when brain is `done`.

### Optimisation 3: relieve tmt-analyst single-point overload
- **Target**: `task_template`: daily-report-editor distribution prompt + the follow-up routing block of each `topic_pitch_*` template.
- **Suggested change**: introduce a soft cap — once a single role's inbound count in a window ≥ 10, downgrade further TMT-bound handoffs to `cc` form, or split between thematic-researcher / sector-specific sub-analysts to prevent any one recipient from becoming a throughput bottleneck. Add explicit prompt language: "do not default cross-topic synthesis material to TMT".
- **Rationale**: §3.3 — tmt-analyst is +23 inbound / +1 outbound, the worst load-skew of the day.
- **Risk**: splitting may fragment topic continuity that tmt-analyst would otherwise have unified; recommend monitoring for one week before hard-coding the soft cap.

---

## 5. Open questions for the operator

1. **Are the 26 pending runs expected (e.g. waiting on cross-day brain finalisation), or is the terminal callback materially missing?** This determines whether Optimisation 2 should be observation-only or must include a force-terminate path.
2. **Are the 25 `(none)`-handoff whiteboard cards intentionally "self-archive, no handoff" types (e.g. certain monitoring cards)?** If so, those templates should be excluded from the anomaly base so the diagnostician isn't chasing a non-signal.
3. **Is offshore-strategist's absence from the mailbox-recipient list a design choice?** If not, its mailbox prompt needs filling in; if yes, please mark it explicitly in the mailbox-routing config so this doesn't surface in the diagnosis every day.
