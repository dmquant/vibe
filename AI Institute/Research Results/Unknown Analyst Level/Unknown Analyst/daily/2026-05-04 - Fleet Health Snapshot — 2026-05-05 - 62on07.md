---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Fleet Health Snapshot — 2026-05-05

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Fleet Health Snapshot — 2026-05-05

*Scope: daily (last 24h) · generated_at: 2026-05-04T16:01:08.141Z*

---

## At a glance

- Managed workflows: **215**
- Runs in window: **21** (completed=21)
- Pending runs (parked, awaiting terminal): **26**
- Mailbox threads in window: **49** (auto-handoffs: 49)
- Pending adhoc dispatches (parked, brain task running): **0**
- Whiteboard sessions in window: **23** (cards: 165)
- Events in window: **181**
- Execution-archive entries: **0** (failed: 0, salvage markers: 0)

---

## Workflow runs (window)

### By status

| status | count |
|---|---:|
| completed | 21 |

### By task_key

| task_key | count |
|---|---:|
| institute_diagnosis | 1 |
| topic_pitch_overnight_sentiment | 1 |
| morning_macro_brief | 1 |
| topic_pitch_morning_thematic | 1 |
| topic_pitch_close_sentiment | 1 |
| style_rotation_signal | 1 |
| market_structure_daily | 1 |
| daily_technical_scan | 1 |
| daily_sentiment_index | 1 |
| crowding_alert | 1 |
| vol_surface_daily | 1 |
| options_flow_analysis | 1 |
| basis_trade_monitor | 1 |
| cb_valuation_scan | 1 |
| premium_compression_alert | 1 |
| forced_redemption_watch | 1 |
| topic_pitch_postclose | 1 |
| (none) | 1 |
| topic_pitch_evening_social | 1 |
| topic_pitch_evening_editor | 1 |

### By workflow_kind

| kind | count |
|---|---:|
| routine | 17 |
| (none) | 3 |
| global | 1 |

---

## Mailbox (window)

### Thread status

| thread status | count |
|---|---:|
| completed | 48 |
| running | 1 |

### Dispatch status

| dispatch status | count |
|---|---:|
| completed | 48 |
| running | 1 |

### Auto-handoff senders

| sender | count |
|---|---:|
| sentiment-analyst | 14 |
| convertible-analyst | 9 |
| derivatives-strategist | 6 |
| thematic-researcher | 4 |
| chief-strategist | 4 |
| altdata-analyst | 4 |
| daily-report-editor | 3 |
| chief-economist | 2 |
| social-media-analyst | 2 |
| ashare-strategist | 1 |

### Auto-handoff recipients

| recipient | count |
|---|---:|
| tmt-analyst | 6 |
| chief-strategist | 6 |
| factor-analyst | 5 |
| bond-analyst | 4 |
| global-macro | 4 |
| china-macro | 4 |
| chief-risk | 4 |
| fx-strategist | 3 |
| chief-quant | 3 |
| asset-allocator | 2 |
| technical-analyst | 2 |
| chief-economist | 2 |
| consumer-analyst | 2 |
| sentiment-analyst | 2 |

---

## Whiteboard (window)

### Card status

| card status | count |
|---|---:|
| completed | 130 |
| running | 34 |
| failed | 1 |

### Handoff recipient distribution

| recipient | count |
|---|---:|
| (none) | 36 |
| energy-analyst | 11 |
| global-macro | 9 |
| industrials-analyst | 9 |
| utilities-analyst | 8 |
| chief-strategist | 7 |
| financials-analyst | 7 |
| chief-risk | 7 |
| asset-allocator | 6 |
| derivatives-strategist | 6 |
| bond-analyst | 6 |
| materials-analyst | 6 |
| tmt-analyst | 6 |
| chief-economist | 5 |
| offshore-strategist | 5 |

---

## Events (window)

| event_type | count |
|---|---:|
| whiteboard.card.completed | 138 |
| workflow.scheduled.completed | 39 |
| whiteboard.thread.completed | 2 |
| whiteboard.card.failed | 2 |

---

## Notes

- This snapshot is the input to the L2 diagnostician. The diagnostician will fetch this markdown, sample artifacts, and emit a daily diagnosis with recommendations.

- All numbers are computed from D1 — no model judgment involved at this layer.
