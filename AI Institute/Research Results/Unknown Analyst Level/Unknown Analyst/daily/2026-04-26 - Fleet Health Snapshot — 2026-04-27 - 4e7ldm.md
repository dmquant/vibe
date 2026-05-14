---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Fleet Health Snapshot — 2026-04-27

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Fleet Health Snapshot — 2026-04-27

*Scope: daily (last 24h) · generated_at: 2026-04-26T16:00:55.540Z*

---

## At a glance

- Managed workflows: **185**
- Runs in window: **40** (running=21, completed=19)
- Pending runs (parked, awaiting terminal): **12**
- Mailbox threads in window: **12** (auto-handoffs: 11)
- Pending adhoc dispatches (parked, brain task running): **0**
- Whiteboard sessions in window: **24** (cards: 249)
- Events in window: **334**
- Execution-archive entries: **0** (failed: 0, salvage markers: 0)

---

## Workflow runs (window)

### By status

| status | count |
|---|---:|
| running | 21 |
| completed | 19 |

### By task_key

| task_key | count |
|---|---:|
| weekly_report | 39 |
| (none) | 1 |

### By workflow_kind

| kind | count |
|---|---:|
| routine | 39 |
| legacy | 1 |

---

## Mailbox (window)

### Thread status

| thread status | count |
|---|---:|
| completed | 11 |
| running | 1 |

### Dispatch status

| dispatch status | count |
|---|---:|
| completed | 11 |
| running | 1 |

### Auto-handoff senders

| sender | count |
|---|---:|
| asset-allocator | 5 |
| technical-analyst | 2 |
| global-macro | 1 |
| materials-analyst | 1 |
| social-media-analyst | 1 |
| morning-brief-editor | 1 |

### Auto-handoff recipients

| recipient | count |
|---|---:|
| chief-risk | 5 |
| chief-strategist | 4 |
| china-macro | 1 |
| factor-analyst | 1 |

---

## Whiteboard (window)

### Card status

| card status | count |
|---|---:|
| completed | 246 |
| running | 3 |

### Handoff recipient distribution

| recipient | count |
|---|---:|
| chief-risk | 24 |
| (none) | 21 |
| industrials-analyst | 13 |
| derivatives-strategist | 13 |
| asset-allocator | 11 |
| credit-analyst | 11 |
| utilities-analyst | 10 |
| algo-trader | 10 |
| energy-analyst | 10 |
| materials-analyst | 10 |
| fx-strategist | 9 |
| offshore-strategist | 9 |
| chief-strategist | 7 |
| global-macro | 7 |
| china-macro | 6 |

---

## Events (window)

| event_type | count |
|---|---:|
| whiteboard.card.completed | 247 |
| workflow.scheduled.completed | 59 |
| whiteboard.thread.completed | 27 |
| whiteboard.thread.created | 1 |

---

## Notes

- This snapshot is the input to the L2 diagnostician. The diagnostician will fetch this markdown, sample artifacts, and emit a daily diagnosis with recommendations.

- All numbers are computed from D1 — no model judgment involved at this layer.
