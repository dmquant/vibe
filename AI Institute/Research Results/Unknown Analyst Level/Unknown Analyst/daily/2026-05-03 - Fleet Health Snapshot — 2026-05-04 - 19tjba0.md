---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Fleet Health Snapshot — 2026-05-04

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Fleet Health Snapshot — 2026-05-04

*Scope: daily (last 24h) · generated_at: 2026-05-03T16:00:51.341Z*

---

## At a glance

- Managed workflows: **215**
- Runs in window: **50** (completed=20, running=30)
- Pending runs (parked, awaiting terminal): **26**
- Mailbox threads in window: **21** (auto-handoffs: 21)
- Pending adhoc dispatches (parked, brain task running): **0**
- Whiteboard sessions in window: **23** (cards: 46)
- Events in window: **54**
- Execution-archive entries: **0** (failed: 0, salvage markers: 0)

---

## Workflow runs (window)

### By status

| status | count |
|---|---:|
| running | 30 |
| completed | 20 |

### By task_key

| task_key | count |
|---|---:|
| weekly_report | 45 |
| institute_diagnosis | 1 |
| topic_pitch_weekend_morning | 1 |
| topic_pitch_weekend_sentiment | 1 |
| topic_pitch_weekend_social | 1 |
| topic_pitch_weekend_evening | 1 |

### By workflow_kind

| kind | count |
|---|---:|
| routine | 49 |
| (none) | 1 |

---

## Mailbox (window)

### Thread status

| thread status | count |
|---|---:|
| completed | 19 |
| running | 1 |
| failed | 1 |

### Dispatch status

| dispatch status | count |
|---|---:|
| completed | 19 |
| running | 1 |
| failed | 1 |

### Auto-handoff senders

| sender | count |
|---|---:|
| auto-analyst | 4 |
| consumer-analyst | 3 |
| utilities-analyst | 2 |
| sentiment-analyst | 2 |
| bond-analyst | 2 |
| social-media-analyst | 2 |
| research-editor | 2 |
| tmt-analyst | 1 |
| morning-brief-editor | 1 |
| energy-analyst | 1 |
| daily-report-editor | 1 |

### Auto-handoff recipients

| recipient | count |
|---|---:|
| global-macro | 5 |
| china-macro | 3 |
| tmt-analyst | 3 |
| ashare-strategist | 2 |
| altdata-analyst | 2 |
| thematic-researcher | 1 |
| bond-analyst | 1 |
| fx-strategist | 1 |
| consumer-analyst | 1 |
| esg-analyst | 1 |
| chief-strategist | 1 |

---

## Whiteboard (window)

### Card status

| card status | count |
|---|---:|
| completed | 25 |
| running | 11 |
| failed | 10 |

### Handoff recipient distribution

| recipient | count |
|---|---:|
| (none) | 20 |
| industrials-analyst | 5 |
| chief-strategist | 4 |
| offshore-strategist | 3 |
| china-macro | 3 |
| utilities-analyst | 2 |
| convertible-analyst | 1 |
| asset-allocator | 1 |
| tmt-analyst | 1 |
| financials-analyst | 1 |
| fx-strategist | 1 |
| algo-trader | 1 |
| consumer-analyst | 1 |
| ashare-strategist | 1 |
| energy-analyst | 1 |

---

## Events (window)

| event_type | count |
|---|---:|
| workflow.scheduled.completed | 27 |
| whiteboard.card.completed | 25 |
| whiteboard.thread.failed | 1 |
| whiteboard.card.failed | 1 |

---

## Notes

- This snapshot is the input to the L2 diagnostician. The diagnostician will fetch this markdown, sample artifacts, and emit a daily diagnosis with recommendations.

- All numbers are computed from D1 — no model judgment involved at this layer.
