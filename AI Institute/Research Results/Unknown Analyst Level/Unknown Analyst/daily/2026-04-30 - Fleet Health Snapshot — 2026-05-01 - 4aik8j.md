---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Fleet Health Snapshot — 2026-05-01

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Fleet Health Snapshot — 2026-05-01

*Scope: daily (last 24h) · generated_at: 2026-04-30T16:00:38.246Z*

---

## At a glance

- Managed workflows: **213**
- Runs in window: **80** (completed=80)
- Pending runs (parked, awaiting terminal): **12**
- Mailbox threads in window: **169** (auto-handoffs: 169)
- Pending adhoc dispatches (parked, brain task running): **0**
- Whiteboard sessions in window: **24** (cards: 193)
- Events in window: **381**
- Execution-archive entries: **0** (failed: 0, salvage markers: 0)

---

## Workflow runs (window)

### By status

| status | count |
|---|---:|
| completed | 80 |

### By task_key

| task_key | count |
|---|---:|
| daily_meetup | 16 |
| (none) | 2 |
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
| commodity_price_tracker | 1 |
| support_resistance_map | 1 |
| social_buzz_daily | 1 |
| influencer_opinion_scan | 1 |
| topic_pitch_overnight_social | 1 |
| eu_ecb_monitor | 1 |
| margin_analysis | 1 |

### By workflow_kind

| kind | count |
|---|---:|
| routine | 63 |
| (none) | 15 |
| global | 2 |

---

## Mailbox (window)

### Thread status

| thread status | count |
|---|---:|
| completed | 166 |
| failed | 2 |
| running | 1 |

### Dispatch status

| dispatch status | count |
|---|---:|
| completed | 166 |
| failed | 2 |
| running | 1 |

### Auto-handoff senders

| sender | count |
|---|---:|
| sentiment-analyst | 17 |
| social-media-analyst | 17 |
| altdata-analyst | 13 |
| thematic-researcher | 12 |
| derivatives-strategist | 11 |
| technical-analyst | 10 |
| chief-economist | 7 |
| materials-analyst | 7 |
| offshore-strategist | 6 |
| chief-quant | 6 |
| bond-analyst | 5 |
| fx-strategist | 4 |
| global-macro | 4 |
| ashare-strategist | 4 |
| tmt-analyst | 4 |

### Auto-handoff recipients

| recipient | count |
|---|---:|
| tmt-analyst | 27 |
| chief-quant | 24 |
| china-macro | 21 |
| ashare-strategist | 17 |
| global-macro | 15 |
| chief-strategist | 13 |
| fx-strategist | 7 |
| bond-analyst | 6 |
| consumer-analyst | 6 |
| altdata-analyst | 5 |
| chief-risk | 4 |
| thematic-researcher | 4 |
| chief-economist | 4 |
| derivatives-strategist | 3 |
| asset-allocator | 3 |

---

## Whiteboard (window)

### Card status

| card status | count |
|---|---:|
| completed | 189 |
| failed | 2 |
| running | 2 |

### Handoff recipient distribution

| recipient | count |
|---|---:|
| (none) | 25 |
| chief-risk | 21 |
| chief-strategist | 13 |
| tmt-analyst | 12 |
| energy-analyst | 10 |
| financials-analyst | 8 |
| industrials-analyst | 7 |
| utilities-analyst | 7 |
| ashare-strategist | 6 |
| derivatives-strategist | 6 |
| global-macro | 6 |
| qa-manager | 6 |
| factor-analyst | 5 |
| thematic-researcher | 5 |
| china-macro | 5 |

---

## Events (window)

| event_type | count |
|---|---:|
| whiteboard.card.completed | 190 |
| workflow.scheduled.completed | 168 |
| whiteboard.thread.completed | 23 |

---

## Notes

- This snapshot is the input to the L2 diagnostician. The diagnostician will fetch this markdown, sample artifacts, and emit a daily diagnosis with recommendations.

- All numbers are computed from D1 — no model judgment involved at this layer.
