---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Fleet Health Snapshot — 2026-05-12

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Fleet Health Snapshot — 2026-05-12

*Scope: daily (last 24h) · generated_at: 2026-05-11T16:00:35.408Z*

---

## At a glance

- Managed workflows: **224**
- Runs in window: **134** (completed=133, running=1)
- Pending runs (parked, awaiting terminal): **5**
- Mailbox threads in window: **201** (auto-handoffs: 201)
- Pending adhoc dispatches (parked, brain task running): **0**
- Whiteboard sessions in window: **19** (cards: 150)
- Events in window: **473**
- Execution-archive entries: **0** (failed: 0, salvage markers: 0)

---

## Workflow runs (window)

### By status

| status | count |
|---|---:|
| completed | 133 |
| running | 1 |

### By task_key

| task_key | count |
|---|---:|
| daily_meetup | 42 |
| (none) | 2 |
| institute_diagnosis | 1 |
| sector_rotation_daily_api | 1 |
| topic_pitch_overnight_sentiment | 1 |
| morning_macro_brief | 1 |
| topic_pitch_overnight_altdata | 1 |
| data_ingest_premarket | 1 |
| fx_majors_daily_api | 1 |
| topic_pitch_morning_thematic | 1 |
| topic_pitch_morning_editor | 1 |
| overnight_macro_api | 1 |
| us_data_watch | 1 |
| daily_fx_report | 1 |
| adr_monitor | 1 |
| oil_price_monitor | 1 |
| commodity_price_tracker | 1 |
| support_resistance_map | 1 |
| social_buzz_daily | 1 |
| influencer_opinion_scan | 1 |

### By workflow_kind

| kind | count |
|---|---:|
| routine | 132 |
| global | 2 |

---

## Mailbox (window)

### Thread status

| thread status | count |
|---|---:|
| completed | 198 |
| running | 3 |

### Dispatch status

| dispatch status | count |
|---|---:|
| completed | 198 |
| running | 3 |

### Auto-handoff senders

| sender | count |
|---|---:|
| social-media-analyst | 14 |
| sentiment-analyst | 13 |
| thematic-researcher | 12 |
| chief-quant | 10 |
| altdata-analyst | 9 |
| fx-strategist | 9 |
| offshore-strategist | 8 |
| technical-analyst | 8 |
| materials-analyst | 7 |
| bond-analyst | 7 |
| credit-analyst | 6 |
| derivatives-strategist | 6 |
| tmt-analyst | 5 |
| compliance-officer | 5 |
| ashare-strategist | 5 |

### Auto-handoff recipients

| recipient | count |
|---|---:|
| chief-strategist | 35 |
| global-macro | 29 |
| tmt-analyst | 21 |
| china-macro | 20 |
| ashare-strategist | 18 |
| esg-analyst | 16 |
| bond-analyst | 9 |
| energy-analyst | 9 |
| credit-analyst | 5 |
| utilities-analyst | 4 |
| chief-economist | 4 |
| chief-quant | 3 |
| chief-risk | 3 |
| industrials-analyst | 3 |
| materials-analyst | 3 |

---

## Whiteboard (window)

### Card status

| card status | count |
|---|---:|
| completed | 147 |
| running | 3 |

### Handoff recipient distribution

| recipient | count |
|---|---:|
| asset-allocator | 16 |
| (none) | 16 |
| chief-strategist | 10 |
| tmt-analyst | 9 |
| offshore-strategist | 9 |
| global-macro | 9 |
| china-macro | 8 |
| energy-analyst | 8 |
| utilities-analyst | 7 |
| chief-risk | 7 |
| ashare-strategist | 6 |
| fx-strategist | 6 |
| materials-analyst | 5 |
| chief-economist | 5 |
| bond-analyst | 5 |

---

## Events (window)

| event_type | count |
|---|---:|
| workflow.scheduled.completed | 304 |
| whiteboard.card.completed | 149 |
| whiteboard.thread.completed | 19 |
| whiteboard.card.failed | 1 |

---

## Notes

- This snapshot is the input to the L2 diagnostician. The diagnostician will fetch this markdown, sample artifacts, and emit a daily diagnosis with recommendations.

- All numbers are computed from D1 — no model judgment involved at this layer.
