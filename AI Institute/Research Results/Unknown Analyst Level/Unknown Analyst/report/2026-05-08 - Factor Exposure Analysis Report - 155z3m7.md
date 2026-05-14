---
source: ai-institute
resource_type: research-result
report_kind: report
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Factor Exposure Analysis Report

Kind: **report**
Analyst: **(unknown)**

## Links

- Report type: [[report]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Factor Exposure Analysis Report
**Date:** 2026-05-08
**Analyst:** Factor Analyst
**Portfolio:** Innovation Growth Alpha
**Benchmark:** CSI 300 Index

## 1. Key Conclusions
- **Factor Exposure:** The portfolio currently exhibits significant positive exposure to **Momentum** and **Beta** factors, reflecting a concentrated allocation to Artificial Intelligence (AI) and semiconductor sectors.
- **Style Drift:** Monitoring indicates a clear **Style Drift**. The portfolio has evolved from a "Large-cap Growth" style toward a "Mid-cap High-beta" style, primarily driven by the extreme rallies in constituent stocks during the first week of May, which altered market-cap distribution and volatility profiles.
- **Risk Warning:** Extremely low exposure to the **Low Volatility** factor suggests the portfolio may face substantial drawdown pressure in the event of a market correction.

## 2. Detailed Factor Exposure

| Factor Category | Exposure (Z-score) | MoM Change | Rationale |
| :--- | :--- | :--- | :--- |
| **Momentum** | +1.52 | ↑ 0.45 | Driven by the strong uptrend in AI leaders like Inspur and Hygon Information. |
| **Beta** | +1.28 | ↑ 0.20 | Heavy allocation to high-elasticity tech stocks, active during the rebound in risk appetite. |
| **Size** | -0.65 | ↓ 0.30 | Deviation toward mid-cap stocks; median market cap dropped from 100B to approx. 60B. |
| **Value** | -0.82 | ↓ 0.15 | Valuation premiums further expanded, distancing from deep value. |
| **Quality** | +0.45 | ↔ 0.05 | Core holdings maintain stable ROE and high R&D-to-revenue ratios. |
| **Volatility** | +1.10 | ↑ 0.35 | Surge in trading volume in early May led to portfolio volatility significantly exceeding the benchmark. |

## 3. Style Drift Detection

### 3.1 Style Box Trajectory
Based on the Barra style box definition, the portfolio has drifted from **Large-Cap Growth** to **Mid-Cap High-Beta**.
- **Drift Intensity:** Significant (Signal-to-Noise Ratio > 2.0).
- **Look-back Period:** 2026-04-01 to 2026-05-08.

### 3.2 Attribution Analysis
- **Passive Drift (65%):** Holdings in the computing power and AI server sectors averaged gains exceeding 12% between May 6 and May 7, leading to a passive increase in weight, which compressed the Size factor and spiked the Momentum factor.
- **Active Rebalancing (35%):** In late April, an overweight position in high-elasticity mid-stream semiconductor firms was established to capture the expected post-May Day holiday rally.

## 4. Follow-up Actions
1. **Portfolio Rebalancing:** Recommend trimming positions in high-momentum names that have rallied excessively and reallocating to high-dividend blue chips (Value/Dividend) to dampen volatility.
2. **Stress Testing:** Conduct stress tests for a "Tech Sector Liquidity Crunch" scenario; current expected drawdown risks are elevated.
3. **Sector Diversification:** Address high concentration in Electronics/Computer sectors; monitor potential regulatory shifts.

```json
{"follow_ups":[
  {"to":"chief-risk","subject":"Portfolio Drawdown Risk Warning","question":"Given the positive exposure to Volatility and Beta at one-year highs, please perform a stress test for an 'AI Sector Liquidity Reversal' scenario and provide risk control recommendations.","priority":"high"},
  {"to":"ashare-strategist","subject":"Sustainability of Mid-cap Growth Style","question":"The portfolio has drifted from large-cap growth to mid-cap high-beta. From a macro and liquidity perspective, is this style rotation sustainable through late May?","priority":"normal"}
]}
```
