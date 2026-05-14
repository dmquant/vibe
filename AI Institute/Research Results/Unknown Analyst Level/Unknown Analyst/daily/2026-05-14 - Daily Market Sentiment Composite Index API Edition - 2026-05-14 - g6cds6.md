---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Daily Market Sentiment Composite Index (API Edition) - 2026-05-14

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Daily Market Sentiment Composite Index (API Edition) - 2026-05-14

## Executive Summary
Institutional market sentiment is currently in the **"Greed"** territory, with a composite score of **85/100**. Despite macro headwinds from a hotter-than-expected Producer Price Index (PPI), institutional risk-on appetite remains robust. Key drivers include the **DXY dropping below the 100 mark** and **extreme outperformance of offensive sectors (Tech, Communications)** relative to defensive ones. However, retail sentiment (AAII) is increasingly polarized, and capital outflows from crypto markets suggest some high-level profit-taking.

## 1. Quantitative Sentiment Signal Panel
| Signal | Current Value | Interpretation | Source |
| :--- | :--- | :--- | :--- |
| **VIX** | 17.81 | 12-18 Optimistic: Market pricing for volatility remains at relatively low levels. | markets_overnight_us |
| **DXY** | 98.405 | < 100 Risk-on: Weakening Dollar supports cross-asset longs despite a flat yield curve. | markets_overnight_us |
| **2s10s (bps)** | 48 | 0-50 End of Tightening: Curve maintains a narrow spread; recession risk pricing is not significant. | yield_curve_us |
| **Sector Dispersion** | 1.493 | > 1.05 Strong Risk-on: Capital is highly concentrated in Tech and Discretionary sectors. | sector_etf_closes_us |

## 2. Sector Dispersion Calculation
Based on data from `sector_etf_closes_us` (Equal-weighted):
- **Offensive (XLK, XLY, XLC) Mean Price:** 137.44
- **Defensive (XLP, XLU, XLV) Mean Price:** 92.03
- **Quantitative Ratio (Offensive / Defensive):** **1.493**

**Interpretation:** This ratio is significantly above the 1.05 threshold, reflecting a classic "Tech Bull" market structure. Institutional investors have ignored inflation concerns to push the S&P 500 to a new high of 7,444.25, showing no rotation into defensive sectors.

## 3. Composite Sentiment Index (0-100)
**Current Score: 85 (Extreme Greed / Borderline Greed)**

**Calculation Formula:**
- VIX Contribution (25%): 17.81 -> 20 pts
- DXY Contribution (25%): 98.405 -> 25 pts
- 2s10s Contribution (25%): 48 bps -> 15 pts
- Sector Ratio Contribution (25%): 1.493 -> 25 pts
- **Total Score: 85**

**Sentiment Tiers:**
- 0-25 Extreme Fear | 25-45 Fear | 45-55 Neutral | 55-75 Greed | **75-100 Extreme Greed**

## 4. External Sentiment Surveys (Supplementary)
- **CNN Fear & Greed Index:** **65.8 (Greed)**. Aligns with the trend of this index; slightly lower as CNN incorporates lagging indicators like Put/Call ratios. [Source: benzinga.com]
- **AAII Investor Survey:** Bullish 39.3% (+1.0%), Bearish 36.6% (+3.6%). Polarization is rising as neutral sentiment drops, suggesting a "battleground" phase. [Source: aaii.com]
- **ETF Fund Flows:** On May 13, QQQ saw net inflows of **$4.03 Billion**, and SPY saw **$2.59 Billion**. Institutional buying remains resolute. [Source: optioncharts.io]
- **Crypto/Meme Heat:** Bitcoin slipped below $80,000 with $635M in ETF outflows. High-risk assets are showing localized "height vertigo" after the PPI release. [Source: economictimes.com]

## 5. Portfolio Positioning Implications
- **Extreme Alert:** The gap between our quantitative score (85) and the CNN index (65.8) stems from extreme sector concentration. Be wary of a technical overbought correction in XLK/QQQ.
- **Contrarian Logic:** While in the Greed zone, the 2s10s spread hasn't turned negative and the DXY remains weak, meaning no major "exit" signals have been triggered yet.
- **Indicators to Watch:** Monitor if the VIX breaks 20 or if the AAII Bearish ratio overtakes the Bullish ratio later this week.

## Data Sources
- **Internal APIs:** `markets_overnight_us`, `yield_curve_us`, `sector_etf_closes_us` (Data date: 2026-05-14)
- **Web Search:** AAII, CNN Business, Morningstar, Economic Times (Verified on 2026-05-14)
