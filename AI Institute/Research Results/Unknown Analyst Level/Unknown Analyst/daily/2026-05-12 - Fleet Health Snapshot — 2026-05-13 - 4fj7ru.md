---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Fleet Health Snapshot — 2026-05-13

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Fleet Health Snapshot — 2026-05-13

*Scope: daily (last 24h) · generated_at: 2026-05-12T16:00:13.629Z*

---

## At a glance

- Managed workflows: **224**
- Runs in window: **26** (completed=26)
- Pending runs (parked, awaiting terminal): **4**
- Mailbox threads in window: **25** (auto-handoffs: 25)
- Pending adhoc dispatches (parked, brain task running): **0**
- Whiteboard sessions in window: **9** (cards: 72)
- Events in window: **106**
- Execution-archive entries: **0** (failed: 0, salvage markers: 0)

---

## Workflow runs (window)

### By status

| status | count |
|---|---:|
| completed | 26 |

### By task_key

| task_key | count |
|---|---:|
| institute_diagnosis | 1 |
| sector_rotation_daily_api | 1 |
| topic_pitch_overnight_sentiment | 1 |
| topic_pitch_overnight_altdata | 1 |
| fx_majors_daily_api | 1 |
| topic_pitch_morning_thematic | 1 |
| topic_pitch_morning_editor | 1 |
| oil_price_monitor_api | 1 |
| topic_pitch_premarket_thematic | 1 |
| topic_pitch_morning_altdata | 1 |
| topic_pitch_premarket_editor | 1 |
| topic_pitch_morning_social | 1 |
| topic_pitch_midday_sentiment | 1 |
| topic_pitch_midday | 1 |
| topic_pitch_intraday_thematic | 1 |
| topic_pitch_intraday_altdata | 1 |
| topic_pitch_intraday_editor | 1 |
| topic_pitch_close_sentiment | 1 |
| topic_pitch_postclose | 1 |
| market_structure_daily_api | 1 |

### By workflow_kind

| kind | count |
|---|---:|
| routine | 25 |
| global | 1 |

---

## Mailbox (window)

### Thread status

| thread status | count |
|---|---:|
| completed | 24 |
| running | 1 |

### Dispatch status

| dispatch status | count |
|---|---:|
| completed | 24 |
| running | 1 |

### Auto-handoff senders

| sender | count |
|---|---:|
| thematic-researcher | 8 |
| daily-report-editor | 4 |
| altdata-analyst | 3 |
| social-media-analyst | 3 |
| chief-strategist | 2 |
| sentiment-analyst | 2 |
| ashare-strategist | 2 |
| energy-analyst | 1 |

### Auto-handoff recipients

| recipient | count |
|---|---:|
| ashare-strategist | 7 |
| chief-strategist | 7 |
| tmt-analyst | 4 |
| global-macro | 4 |
| industrials-analyst | 1 |
| utilities-analyst | 1 |
| derivatives-strategist | 1 |

---

## Whiteboard (window)

### Card status

| card status | count |
|---|---:|
| completed | 70 |
| running | 2 |

### Handoff recipient distribution

| recipient | count |
|---|---:|
| (none) | 8 |
| asset-allocator | 7 |
| energy-analyst | 6 |
| tmt-analyst | 6 |
| chief-risk | 4 |
| ashare-strategist | 4 |
| chief-strategist | 4 |
| utilities-analyst | 4 |
| credit-analyst | 3 |
| materials-analyst | 3 |
| industrials-analyst | 3 |
| fx-strategist | 3 |
| bond-analyst | 3 |
| offshore-strategist | 3 |
| global-macro | 2 |

---

## Events (window)

| event_type | count |
|---|---:|
| whiteboard.card.completed | 70 |
| workflow.scheduled.completed | 28 |
| whiteboard.thread.completed | 8 |

---

## Notes

- This snapshot is the input to the L2 diagnostician. The diagnostician will fetch this markdown, sample artifacts, and emit a daily diagnosis with recommendations.

- All numbers are computed from D1 — no model judgment involved at this layer.
