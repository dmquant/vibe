---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Scheduled: 研究院诊断师 · 研究院日度诊断

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

## 1. One-sentence verdict
The institute is healthy today with high execution efficiency in core workflows (Weekly Reports), though a significant load imbalance is observed in the macro analysis segment.

## 2. Key metrics
| Metric | Value |
|---|---|
| Managed Workflows | 224 |
| Runs in Window (Completed/Running) | 49 (48/1) |
| Pending Runs (Parked) | 4 |
| Auto-handoff Volume | 92 |
| Whiteboard Card Failures (Event Log) | 7 |

## 3. Anomalies & patterns
- **Macro Load Concentration**: `global-macro` (17) and `china-macro` (11) received ~30% of all auto-handoffs. This indicates heavy reliance on macro-level synthesis, highlighting a potential processing bottleneck. [Confidence: High]
- **Frequent Risk-Driven Handoffs**: `chief-risk` initiated 7 auto-handoffs as a sender. This typically signifies that QA or risk-check steps are triggering redirects or escalations; warrants investigation into potential over-routing. [Confidence: Medium]
- **Whiteboard Routing Gaps**: 19 whiteboard cards have `(none)` as a recipient. This may indicate orphaned outputs at the end of a chain or tasks that aren't being effectively assigned to subsequent analysts. [Confidence: High]
- **Event vs. Status Discrepancy**: Event logs show 7 card failures, while only 2 are currently in a "failed" state. This suggests a high recovery rate via retries but also points to underlying instability in card generation. [Confidence: Medium]

## 4. Recommended optimisations
- **Target**: `global-macro` / `china-macro`
- **Suggested Change**: Refine the prompts for macro analysts to introduce more granular sub-task delegation or improve the pre-processing quality of upstream sector analysts to reduce the synthesis burden.
- **Rationale**: Mitigates current load skew and prevents the macro layer from becoming a single point of failure/delay.
- **Risk**: May slightly reduce the coherence of the overall macro narrative if the delegation logic is not strictly defined.

- **Target**: `chief-risk` / `qa-manager`
- **Suggested Change**: Review the handoff logic for `chief-risk`. If redirects are caused by trivial formatting issues, adjust the QA thresholds or reinforce formatting constraints in the generation phase of primary analysts.
- **Rationale**: Reduces unnecessary handoff overhead and improves the rate of automated closure.
- **Risk**: Excessive loosening of standards could impact final report quality.

## 5. Open questions for the operator
1. Are the whiteboard cards with `(none)` recipients intended to be terminal nodes (e.g., direct data persistence without further analyst review)?
2. Given that `weekly_report` accounts for 83% of workflow runs, should we consider increasing the frequency of thematic research during non-peak hours?
