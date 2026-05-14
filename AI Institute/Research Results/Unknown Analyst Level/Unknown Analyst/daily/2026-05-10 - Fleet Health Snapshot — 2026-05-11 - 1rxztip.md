---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Fleet Health Snapshot — 2026-05-11

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Fleet Health Snapshot — 2026-05-11

*Scope: daily (last 24h) · generated_at: 2026-05-10T16:00:21.942Z*

---

## At a glance

- Managed workflows: **224**
- Runs in window: **49** (completed=48, running=1)
- Pending runs (parked, awaiting terminal): **4**
- Mailbox threads in window: **92** (auto-handoffs: 92)
- Pending adhoc dispatches (parked, brain task running): **0**
- Whiteboard sessions in window: **25** (cards: 187)
- Events in window: **348**
- Execution-archive entries: **0** (failed: 0, salvage markers: 0)

---

## Workflow runs (window)

### By status

| status | count |
|---|---:|
| completed | 48 |
| running | 1 |

### By task_key

| task_key | count |
|---|---:|
| weekly_report | 41 |
| institute_diagnosis | 1 |
| nev_sales_monthly | 1 |
| auto_export_data | 1 |
| topic_pitch_weekend_morning | 1 |
| topic_pitch_weekend_sentiment | 1 |
| topic_pitch_weekend_social | 1 |
| topic_pitch_weekend_altdata | 1 |
| topic_pitch_weekend_evening | 1 |

### By workflow_kind

| kind | count |
|---|---:|
| routine | 49 |

---

## Mailbox (window)

### Thread status

| thread status | count |
|---|---:|
| completed | 88 |
| running | 4 |

### Dispatch status

| dispatch status | count |
|---|---:|
| completed | 88 |
| running | 4 |

### Auto-handoff senders

| sender | count |
|---|---:|
| chief-risk | 7 |
| industrials-analyst | 5 |
| altdata-analyst | 5 |
| daily-report-editor | 5 |
| research-editor | 5 |
| offshore-strategist | 4 |
| factor-analyst | 4 |
| ashare-strategist | 4 |
| data-scientist | 4 |
| technical-analyst | 3 |
| esg-analyst | 3 |
| auto-analyst | 3 |
| chief-quant | 3 |
| fx-strategist | 3 |
| morning-brief-editor | 3 |

### Auto-handoff recipients

| recipient | count |
|---|---:|
| global-macro | 17 |
| china-macro | 11 |
| fx-strategist | 8 |
| chief-economist | 8 |
| chief-strategist | 8 |
| tmt-analyst | 8 |
| ashare-strategist | 6 |
| data-scientist | 4 |
| consumer-analyst | 3 |
| thematic-researcher | 3 |
| chief-quant | 3 |
| energy-analyst | 2 |
| derivatives-strategist | 2 |
| altdata-analyst | 2 |
| credit-analyst | 1 |

---

## Whiteboard (window)

### Card status

| card status | count |
|---|---:|
| completed | 183 |
| failed | 2 |
| running | 2 |

### Handoff recipient distribution

| recipient | count |
|---|---:|
| chief-strategist | 25 |
| (none) | 19 |
| asset-allocator | 19 |
| tmt-analyst | 14 |
| utilities-analyst | 10 |
| china-macro | 10 |
| chief-risk | 10 |
| fx-strategist | 9 |
| ashare-strategist | 8 |
| energy-analyst | 6 |
| offshore-strategist | 6 |
| credit-analyst | 5 |
| chief-economist | 5 |
| financials-analyst | 5 |
| industrials-analyst | 5 |

---

## Events (window)

| event_type | count |
|---|---:|
| whiteboard.card.completed | 183 |
| workflow.scheduled.completed | 131 |
| whiteboard.thread.completed | 23 |
| whiteboard.card.failed | 7 |
| research.dispatched | 3 |
| whiteboard.thread.failed | 1 |

---

## Notes

- This snapshot is the input to the L2 diagnostician. The diagnostician will fetch this markdown, sample artifacts, and emit a daily diagnosis with recommendations.

- All numbers are computed from D1 — no model judgment involved at this layer.
