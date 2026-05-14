---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# US-China Treasury Yield Curve Daily (2026-05-11)

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# US-China Treasury Yield Curve Daily (2026-05-11)

## Executive Summary
The US 10Y Treasury yield stands at 4.38% today. Driven by strong labor data and persistent inflation, market expectations for Fed rate cuts have significantly cooled. The 2s10s spread remains in positive territory at 48 bps, indicating a normalizing, steeper curve. Meanwhile, China's 10Y Treasury yield has drifted lower to approximately 1.75%, deepening the US-China 10Y spread inversion to -263 bps. This extreme divergence continues to exert pressure on the CNY exchange rate.

## 1. US Treasury Yield Curve
| Tenor | Yield (%) | Source |
| :--- | :--- | :--- |
| 2Y | 3.90% | Internal API (financialmodelingprep.com) |
| 5Y | 4.02% | Internal API (financialmodelingprep.com) |
| 10Y | 4.38% | Internal API (financialmodelingprep.com) |
| 30Y | 4.95% | Internal API (financialmodelingprep.com) |

- **2s10s Spread:** 48 bps (Normal/Positive)
- **5s30s Spread:** 93 bps

## 2. China Treasury Yield Curve
| Tenor | Yield (%) | Source |
| :--- | :--- | :--- |
| 2Y | 1.28% | [Source: tradingeconomics.com] |
| 5Y | 1.49% | [Source: cnfin.com] |
| 10Y | 1.7535% | [Source: eastmoney.com] |
| 30Y | 2.236% | [Source: cnfin.com] |

*Note: China Treasury data is not yet covered by the internal API; figures are sourced from public market valuations and active bond trading. The Chinese bond market showed strength today, with long-end yields edging lower.*

## 3. Yield Spreads and Policy Expectations
- **US-China 10Y Spread:** Approx. **-262.65 bps** (based on 1.7535% - 4.38%).
- **Fed Funds Futures Implied Probabilities:**
    - June Meeting: **93.8%** probability of holding rates at 3.50%-3.75% [Source: CME FedWatch].
    - September Meeting: **96.1%** probability of a hold.
    - Market consensus has shifted toward a "Higher for Longer" narrative for the remainder of 2026.
- **China Policy Rates:**
    - **1Y LPR:** 3.0% (Unchanged for 11 consecutive months) [Source: Xinhua News].
    - **5Y+ LPR:** 3.5%.
    - **7-Day Reverse Repo Rate:** 1.40% [Source: Eastmoney].

## 4. Conclusions and Key Indicators to Watch
1. **UST Range-Bound at Highs:** Following the May FOMC hold and as Chair Powell approaches the end of his term, market pricing has shifted to discount potential hike risks rather than cuts.
2. **China's "Asset Scarcity" Persists:** Despite the PBOC's calibrated liquidity injections, strong institutional demand continues to push the 10Y yield toward the 1.7% threshold.
3. **Spread Pressure:** The deeply inverted spread limits the scope for aggressive domestic easing. Watch for potential shifts in Fed rhetoric as new leadership takes over after Powell's departure on May 15.

## Data Sources
- **Internal API:** `yield_curve_us` (fetched_at: 2026-05-11)
- **Web Search:** ChinaBond, Eastmoney, CME FedWatch, Xinhua News, TradingEconomics
