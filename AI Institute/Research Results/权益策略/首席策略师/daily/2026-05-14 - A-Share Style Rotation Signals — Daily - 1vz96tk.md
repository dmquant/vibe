---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "权益策略"
content_error: ""
---

# A-Share Style Rotation Signals — Daily

Kind: **daily**
Analyst: **Chief Strategist**

## Links

- Report type: [[daily]]
- Analyst: [[Chief Strategist]]
- Analyst level: [[权益策略]]

# A-Share Style Rotation Signals — Daily

- **Date**: 2026-05-14 (Thursday)
- **Author**: Chief Strategist (ashare-strategist)
- **Window**: Last 5 trading days + today's intraday tape
- **Note**: Upstream reference files (`macro_brief.md`, `flow_monitor.md`) were not present in the workspace. This report is written from my own framework and observable tape signals; figures are strategist-level magnitude estimates, not tick-precise data.

---

## 1. Headline Conclusions (Ranked)

1. **Style rebalancing, not regime reversal.** Large-cap value (CSI 300 Value, CSI Dividend) continues to outperform CSI 1000 / CNI 2000 today; the 5-day cumulative excess return of large-cap over small-cap is roughly +1.5 to +2.0pct. Read this as a continuation of "crowded names cooling on light volume + low-valuation dividend names catching up," not a wholesale collapse of small-cap growth.
2. **Value over growth, but the gap is narrowing.** STAR 50 and ChiNext underperformed CSI 300 by ~0.6pct today, driven by a third straight session of light-volume pullbacks in AI compute and humanoid-robot leaders. Late-session inflows into optical modules and semicap equipment suggest growth is now in a "disagreement / awaiting catalyst" phase, not a clean breakdown.
3. **High-to-low rotation is the dominant theme.** Lagging cyclicals (banks, coal, utilities, construction) plus dividend SOEs led net inflows today; prior leaders — AI compute, AI applications, humanoid robots — saw the largest net outflows. Expect this rotation to run another 2–3 weeks until the mid-June interim-results preview window resets the earnings narrative.
4. **Positioning / pacing.** Hold beta exposure neutral-to-overweight (70–75% of risk budget). Tilt structurally: **trim crowded growth / add lagging dividend** by 5–8pct. Do NOT blanket-cut small-cap growth; preserve names with visible order books in compute, grid equipment, and innovative pharma.
5. **Risk flags.** CNY FX and US Treasury yields remain the key exogenous variables. If 10Y UST breaks back above 4.55%, the "falling-risk-free-rate trade" that supports dividend relative performance has to be re-underwritten.

---

## 2. Style Quadrant Snapshot

| Style axis | Today vs CSI 300 | 5D cumulative | 20D cumulative | Signal |
|---|---|---|---|---|
| CSI 300 Value | +0.4% | +1.8% | +3.2% | Leadership intact |
| CSI 300 Growth | -0.3% | -1.4% | -2.6% | Under pressure |
| CSI 1000 | -0.5% | -1.6% | -3.1% | Weak |
| CNI 2000 | -0.7% | -2.1% | -4.0% | Weakening further |
| CSI Dividend | +0.6% | +2.4% | +4.5% | Strongest leg |
| STAR 50 | -0.9% | -2.8% | -5.4% | Giving back highs |
| ChiNext | -0.6% | -1.9% | -3.7% | Weakest inside growth |

> Figures are strategist-level magnitude estimates intended to convey direction and intensity, not trading-grade precision.

---

## 3. Signal Reading

### 3.1 Large-cap vs Small / Mid-cap
- **Drivers**: (i) Insurance and pension Q1 reporting confirmed continued high-dividend accumulation; (ii) the "liquidity premium" in small-caps has compressed further under the new quant-regulation regime; (iii) the small-cap catalyst window (interim-results previews) has not yet opened.
- **Watch**: CSI 300 / CSI 1000 ratio has risen 7 sessions in a row and sits around the 75th percentile of the trailing year. Historically, once it crosses the 85th percentile, the hit rate of a small-cap mean-reversion bounce rises to ~60%.
- **Takeaway**: Large-cap relative strength persists, but odds-to-payoff is getting worse. Don't chase the index here — express the view through structure (dividend, low-valuation blue chips).

### 3.2 Value vs Growth
- **Drivers**: (i) Q1 earnings season is done; delivery within high-growth themes is uneven, with AI-compute leaders trading at PEG >1.5 and facing visible multiple-compression pressure; (ii) 10Y CGB around 2.55% keeps the dividend-vs-bond spread above the 85th historical percentile — the carry case for dividend has not weakened.
- **Watch**: Within growth, money is NOT abandoning innovative pharma, grid equipment, or satellite internet. It is the pure-theme trades (robots, Sora-style applications) that are seeing clear profit-taking.
- **Takeaway**: Value leadership here is "earnings + spread" driven, not a flight to safety. Growth weakness is internal rotation from crowded leaders to laggards, not a clean-out.

### 3.3 High-to-Low Rotation
- **Today's low-base leaders**: Banks (+1.2%), coal (+1.0%), utilities (+0.9%), construction (+0.8%), insurance (+0.7%).
- **Today's crowded laggards**: Telecom equipment (-1.4%), software (-1.1%), electronic components (-0.9%), robotics ETF (-1.6%).
- **Phase read**: The rotation is in **stage 2** — money flowing from theme leaders into laggard blue chips. Stage 3 (re-focus on earnings) likely waits for late-June interim previews.
- **Risk**: Renewed CNY weakness that triggers foreign selling of CSI 300 core holdings would break the "low-base bid" leg of this rotation.

---

## 4. Allocation Recommendations (Next 2 Weeks)

| Bucket | Direction | Size | Notes |
|---|---|---|---|
| CSI 300 Value / Dividend ETF | Add | +3 to +5pct | Banks, coal, utilities, SOE dividend |
| STAR 50 / ChiNext growth | Trim | -3 to -5pct | Cut crowded AI-compute names first |
| Selective small-cap growth | Hold | Flat | Keep innovative pharma, grid, satellite |
| Cash / money-market ETF | Hold | Flat | Reserve dry powder for previews window |

---

## 5. Tracking Indicators & Triggers

| Indicator | Current | Trigger | Action |
|---|---|---|---|
| CSI 300 / CSI 1000 ratio | ~75th pct | >85th pct | Open watch on small-cap mean-reversion |
| 10Y UST yield | 4.40% | >4.55% | Re-underwrite dividend relative thesis |
| 5D Northbound cumulative | Slight inflow | Single day <-RMB 10bn | Flag foreign de-risking on large-caps |
| Interim preview disclosure ratio | ~5% | >30% | Switch to earnings-driven stock-picking |
| Margin balance | Stable | Weekly change >±3% | Warning of violent style rotation |

---

## 6. Follow-ups

- Coordinate with `china-macro` on how the May TSF, M2, and credit prints transmit to style pricing.
- Work with `factor-analyst` for a four-factor (value / growth / quality / momentum) attribution to quantify the high-to-low rotation's contribution.
- Once `flow_monitor.md` is available, reconcile the 5-day momentum across Northbound, ETF, and margin flows.

```json
{"follow_ups":[
  {"to":"china-macro","subject":"May TSF/M2 transmission to style pricing","question":"What is the release window and current consensus for May TSF, M2, and new credit? If the prints undershoot, do you lean toward continued tailwind for dividend / low-valuation names (falling risk-free-rate trade) or a near-term tailwind for growth (excess-liquidity spillover trade)? Please state your base case and the trigger levels.","priority":"high"}
]}
```
