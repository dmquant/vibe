---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Fleet Health Snapshot — 2026-05-08

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Fleet Health Snapshot — 2026-05-08

*Scope: daily (last 24h) · generated_at: 2026-05-07T16:00:36.703Z*

---

## At a glance

- Managed workflows: **220**
- Runs in window: **50** (completed=50)
- Pending runs (parked, awaiting terminal): **26**
- Mailbox threads in window: **122** (auto-handoffs: 122)
- Pending adhoc dispatches (parked, brain task running): **0**
- Whiteboard sessions in window: **6** (cards: 24)
- Events in window: **112**
- Execution-archive entries: **0** (failed: 0, salvage markers: 0)

---

## Workflow runs (window)

### By status

| status | count |
|---|---:|
| completed | 50 |

### By task_key

| task_key | count |
|---|---:|
| daily_meetup | 7 |
| institute_diagnosis | 1 |
| topic_pitch_overnight_sentiment | 1 |
| morning_macro_brief | 1 |
| topic_pitch_overnight_altdata | 1 |
| data_ingest_premarket | 1 |
| topic_pitch_morning_thematic | 1 |
| topic_pitch_morning_editor | 1 |
| us_data_watch | 1 |
| daily_fx_report | 1 |
| adr_monitor | 1 |
| oil_price_monitor | 1 |
| eu_ecb_monitor | 1 |
| margin_analysis | 1 |
| ai_industry_tracker | 1 |
| grain_price_monitor | 1 |
| new_issuance_tracker | 1 |
| topic_pitch_premarket | 1 |
| topic_pitch_premarket_thematic | 1 |
| steel_inventory_weekly | 1 |

### By workflow_kind

| kind | count |
|---|---:|
| routine | 49 |
| global | 1 |

---

## Mailbox (window)

### Thread status

| thread status | count |
|---|---:|
| completed | 120 |
| failed | 2 |

### Dispatch status

| dispatch status | count |
|---|---:|
| completed | 120 |
| failed | 2 |

### Auto-handoff senders

| sender | count |
|---|---:|
| thematic-researcher | 14 |
| altdata-analyst | 11 |
| global-macro | 11 |
| social-media-analyst | 9 |
| sentiment-analyst | 8 |
| fx-strategist | 7 |
| daily-report-editor | 7 |
| ashare-strategist | 6 |
| offshore-strategist | 6 |
| technical-analyst | 6 |
| chief-quant | 5 |
| chief-economist | 4 |
| agri-analyst | 4 |
| materials-analyst | 4 |
| factor-analyst | 4 |

### Auto-handoff recipients

| recipient | count |
|---|---:|
| tmt-analyst | 24 |
| global-macro | 22 |
| ashare-strategist | 17 |
| china-macro | 9 |
| fx-strategist | 8 |
| chief-strategist | 8 |
| chief-quant | 7 |
| energy-analyst | 6 |
| chief-economist | 4 |
| sentiment-analyst | 4 |
| healthcare-analyst | 3 |
| consumer-analyst | 3 |
| thematic-researcher | 2 |
| chief-risk | 2 |
| credit-analyst | 1 |

---

## Whiteboard (window)

### Card status

| card status | count |
|---|---:|
| completed | 17 |
| running | 5 |
| failed | 2 |

### Handoff recipient distribution

| recipient | count |
|---|---:|
| (none) | 7 |
| chief-risk | 3 |
| energy-analyst | 2 |
| derivatives-strategist | 2 |
| auto-analyst | 2 |
| financials-analyst | 1 |
| consumer-analyst | 1 |
| chief-quant | 1 |
| global-macro | 1 |
| realestate-analyst | 1 |
| fx-strategist | 1 |
| tmt-analyst | 1 |
| ashare-strategist | 1 |

---

## Events (window)

| event_type | count |
|---|---:|
| workflow.scheduled.completed | 95 |
| whiteboard.card.completed | 15 |
| whiteboard.card.failed | 1 |
| whiteboard.thread.completed | 1 |

---

## Notes

- This snapshot is the input to the L2 diagnostician. The diagnostician will fetch this markdown, sample artifacts, and emit a daily diagnosis with recommendations.

- All numbers are computed from D1 — no model judgment involved at this layer.
