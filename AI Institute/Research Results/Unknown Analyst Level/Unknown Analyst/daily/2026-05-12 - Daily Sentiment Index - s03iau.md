---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Daily Sentiment Index

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Daily Sentiment Index
**Date:** 2026-05-12
**Analyst ID:** Sentiment Analyst

## Executive Summary
Institutional market sentiment for today is rated as **Greed**, with a combined index score of **73/100**. Despite a slight uptick in the VIX to 18.92 (neutral-to-tense zone), core risk assets remain robust. The US Dollar Index (DXY) breaking below the critical 100 level (98.16) has significantly eased global liquidity pressures. Coupled with a high premium in offensive sectors (Technology, Consumer Discretionary) relative to defensives (Ratio: 1.52), this suggests institutional investors are actively embracing risk exposure. External surveys indicate retail sentiment has also shifted toward "Greed," though minor outflows from the QQQ suggest high-level profit-taking and rotation.

## 1. Quantitative Sentiment Signal Panel
| Signal | Current Value | Interpretation | Source |
| :--- | :--- | :--- | :--- |
| **VIX** | 18.92 | **Neutral**: Market volatility is rising moderately but remains below the panic threshold. | markets_overnight_us |
| **DXY** | 98.16 | **Risk-on**: A weaker dollar supports multinational earnings and emerging markets. | markets_overnight_us |
| **2s10s (bps)** | 47 | **Late-Cycle/Recovery**: Curve steepening reflects confidence in a soft landing. | yield_curve_us |
| **Sector Dispersion** | 1.52 | **Strong Risk-on**: Offensive sectors are trading at a high premium vs defensives. | sector_etf_closes_us |

## 2. Sector Dispersion Calculation
Based on `sector_etf_closes_us` data:
- **Offensive (Avg):** (XLK: 177.88 + XLY: 119.37 + XLC: 115.58) / 3 = **137.61**
- **Defensive (Avg):** (XLP: 83.37 + XLU: 45.14 + XLV: 143.04) / 3 = **90.52**
- **Offensive / Defensive Ratio:** **1.52**

**Quantitative Assessment:** With a ratio > 1.05, the market is in a **Strong Risk-on** state. Capital is heavily concentrated in growth and offensive consumption, with little demand for defensive positioning.

## 3. Combined Sentiment Index (0-100)
**Calculation Formula:**
`Index = (VIX_Score * 0.2) + (DXY_Score * 0.2) + (Curve_Score * 0.2) + (Sector_Score * 0.4)`
- VIX Score (18.92 -> Neutral): 50
- DXY Score (98.16 -> <100): 75
- Curve Score (47 bps -> Recovery): 65
- Sector Score (1.52 -> Strong Risk-on): 90

**Final Score:** **73**
- **Rating:** Greed

## 4. External Sentiment Surveys
- **AAII Investor Survey:** Bullish 38.3% / Bearish 33.0%. The Bull-Bear spread of +5.4% shows retail sentiment is improving but remains cautious. [Source: AAII.com]
- **CNN Fear & Greed Index:** **66.89 (Greed)**. Highly consistent with the internal index, reflecting broad-based market strength. [Source: CNN Business]
- **ETF Flows:** SPY recorded +$4.2B in net inflows, while QQQ saw -$3.8B in outflows. This indicates a "constructive rotation" from extreme tech toward broad-cap value and the S&P 500. [Source: Morningstar]

## 5. Implications for Portfolio Positioning
- **Sentiment State:** The market is in a phase of "Constructive Greed." While prices are high, we are not yet at the 85+ "Extreme Euphoria" level, suggesting the trend has room to run.
- **Contrarian Advice:** Full shorting is not recommended yet, but be wary of profit-taking pressure in QQQ. Consider rotating some tech exposure into value sectors (XLF/XLI) to hedge against potential VIX spikes.
- **Monitoring Items:** Watch if VIX breaks above 20 or if DXY climbs back above 100.

## Data Sources
- **Internal APIs:** `markets_overnight_us`, `yield_curve_us`, `sector_etf_closes_us`
- **Web Search:** AAII, CNN Business, Morningstar, Benzinga
