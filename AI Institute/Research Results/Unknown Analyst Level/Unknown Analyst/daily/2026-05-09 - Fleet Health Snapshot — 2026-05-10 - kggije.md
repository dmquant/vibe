---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Fleet Health Snapshot — 2026-05-10

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Fleet Health Snapshot — 2026-05-10

*Scope: daily (last 24h) · generated_at: 2026-05-09T16:00:18.381Z*

---

## At a glance

- Managed workflows: **224**
- Runs in window: **6** (completed=6)
- Pending runs (parked, awaiting terminal): **25**
- Mailbox threads in window: **17** (auto-handoffs: 17)
- Pending adhoc dispatches (parked, brain task running): **0**
- Whiteboard sessions in window: **20** (cards: 280)
- Events in window: **324**
- Execution-archive entries: **0** (failed: 0, salvage markers: 0)

---

## Workflow runs (window)

### By status

| status | count |
|---|---:|
| completed | 6 |

### By task_key

| task_key | count |
|---|---:|
| institute_diagnosis | 1 |
| topic_pitch_weekend_morning | 1 |
| topic_pitch_weekend_sentiment | 1 |
| topic_pitch_weekend_social | 1 |
| topic_pitch_weekend_altdata | 1 |
| topic_pitch_weekend_evening | 1 |

### By workflow_kind

| kind | count |
|---|---:|
| routine | 6 |

---

## Mailbox (window)

### Thread status

| thread status | count |
|---|---:|
| completed | 16 |
| running | 1 |

### Dispatch status

| dispatch status | count |
|---|---:|
| completed | 16 |
| running | 1 |

### Auto-handoff senders

| sender | count |
|---|---:|
| thematic-researcher | 4 |
| sentiment-analyst | 4 |
| social-media-analyst | 4 |
| daily-report-editor | 3 |
| institute-diagnostician | 2 |

### Auto-handoff recipients

| recipient | count |
|---|---:|
| tmt-analyst | 6 |
| chief-strategist | 2 |
| industrials-analyst | 2 |
| chief-quant | 2 |
| china-macro | 1 |
| global-macro | 1 |
| chief-economist | 1 |
| asset-allocator | 1 |
| chief-risk | 1 |

---

## Whiteboard (window)

### Card status

| card status | count |
|---|---:|
| completed | 279 |
| running | 1 |

### Handoff recipient distribution

| recipient | count |
|---|---:|
| asset-allocator | 29 |
| chief-strategist | 28 |
| (none) | 21 |
| tmt-analyst | 20 |
| utilities-analyst | 18 |
| energy-analyst | 18 |
| industrials-analyst | 17 |
| qa-manager | 12 |
| ashare-strategist | 11 |
| materials-analyst | 10 |
| fx-strategist | 9 |
| china-macro | 9 |
| chief-risk | 9 |
| chief-economist | 7 |
| offshore-strategist | 7 |

---

## Events (window)

| event_type | count |
|---|---:|
| whiteboard.card.completed | 280 |
| whiteboard.thread.completed | 33 |
| workflow.scheduled.completed | 10 |
| whiteboard.card.failed | 1 |

---

## Notes

- This snapshot is the input to the L2 diagnostician. The diagnostician will fetch this markdown, sample artifacts, and emit a daily diagnosis with recommendations.

- All numbers are computed from D1 — no model judgment involved at this layer.
