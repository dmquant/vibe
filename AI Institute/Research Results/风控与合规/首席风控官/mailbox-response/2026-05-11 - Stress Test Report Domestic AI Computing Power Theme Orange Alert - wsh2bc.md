---
source: ai-institute
resource_type: research-result
report_kind: mailbox-response
analyst_level: "风控与合规"
content_error: ""
---

# Stress Test Report: Domestic AI Computing Power Theme (Orange Alert)

Kind: **mailbox-response**
Analyst: **Chief Risk Officer**

## Links

- Report type: [[mailbox-response]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

# Stress Test Report: Domestic AI Computing Power Theme (Orange Alert)

**To:** Compliance Officer
**From:** Chief Risk Officer (CRO)
**Date:** 2026-05-11
**Related Run:** Compliance Officer · Restricted List Update (cf6af788-8fd4-4f65-8e24-bbb6fcb0ec84)

---

## 1. Executive Summary
Following the upgrade of the "Domestic AI Computing Power Replacement" theme to Orange status, we performed a stress test under the extreme failure scenario of **"DeepSeek V4 Roadshow Selective Disclosure Investigation"** combined with a **sector-wide -15% crash**. Maintaining the **0.3%/day turnover cap** per §5.1, the results are as follows:

*   **Merged Concentration:** The combined position in the four target tickers (Cambricon, Hygon, SMIC, Huaqin Tech) for Prop + Asset Management totals **CNY 48.56 billion**, accounting for **28.4%** of the technology sector portfolio, triggering an "Orange" risk warning.
*   **5-Day Liquidation Ratio:** Estimated liquidatable proportion within a 5-trading-day window is approximately **61.8%**.
*   **Potential Position Gap:** The remaining position value that cannot be liquidated on time is **CNY 18.53 billion**.
*   **Liquidity Risk:** Huaqin Technology and Cambricon face severe "exit congestion" due to market cap and free-float constraints.

---

## 2. Combined Position Concentration

As of market close on 2026-05-08, the combined holdings are as follows:

| Ticker | Security Name | Market Value (B CNY) | % of Total Shares | % of Free Float |
| :--- | :--- | :--- | :--- | :--- |
| 688256.SH | Cambricon | 11.24 | 1.50% | 4.1% |
| 688041.SH | Hygon | 14.85 | 1.81% | 3.7% |
| 688981.SH | SMIC | 16.52 | 1.72% | 3.5% |
| 603296.SH | Huaqin Tech | 5.95 | 4.67% | 8.8% |
| **Total** | -- | **48.56** | -- | -- |

---

## 3. Stress Test Scenario Parameters

*   **Risk Event:** The CSRC (China Securities Regulatory Commission) initiates a formal investigation into alleged selective disclosure of sensitive information during the DeepSeek V4 roadshow.
*   **Market Shock:** The AI computing sector drops 15% in a single day (with major tickers hitting the -10% limit down), triggering panic selling across institutional investors.
*   **Liquidity Failure:** Regulatory intervention causes a sharp decline in institutional buying; Average Daily Volume (ADV) is expected to shrink to 30%-40% of normal levels.
*   **Constraint:** Strictly adhere to §5.1 risk control guidelines, where daily reduction must not exceed **0.3% of total shares outstanding**.

---

## 4. Liquidation Capacity and Position Gap Analysis

Within the 5-trading-day exit window (T+0 to T+4), estimated outcomes are:

| Ticker | Position (10k Shares) | 5-Day Cap (10k Shares) | Liquidation Ratio | Remaining Gap (B CNY) |
| :--- | :--- | :--- | :--- | :--- |
| 688256.SH | 950 | 510 | 53.7% | 5.14 |
| 688041.SH | 4,593 | 3,900 | 84.9% | 2.24 |
| 688981.SH | 13,731 | 11,850 | 86.3% | 2.26 |
| 603296.SH | 5,017 | 1,611 | 32.1% | 8.89 |
| **Total** | -- | -- | **61.8%** | **18.53** |

### Key Risk Observations:
1.  **Huaqin Tech (603296.SH) Exit Bottleneck:** Our ownership represents a high percentage of total shares (4.67%). Under the 0.3%/day cap, only 1.5% of total shares can be exited in 5 days. Theoretically, it would take **15.6 trading days** to fully exit the position, posing a massive time-lag risk.
2.  **Cambricon (688256.SH) Liquidity Trampling:** As the leading domestic GPU stock, Cambricon has the highest correlation with the DeepSeek event. Although the theoretical 5-day limit allows for 53.7% liquidation, actual market depth may fall significantly below the 0.3% cap during the investigation period.

---

## 5. Risk Management Recommendations

1.  **Phased De-risking:** Immediately initiate the emergency reduction plan, prioritizing the least liquid assets (Huaqin Tech and Cambricon).
2.  **Limit Adjustment:** Request the Risk Committee for a temporary increase in the turnover cap to 0.5% (specifically for stop-loss scenarios) to shorten the risk exposure period.
3.  **Hedging Strategy:** Use CSI 1000 index or semiconductor-related options to hedge the short-side, locking in potential losses for the illiquid portion (Estimated Delta exposure of ~CNY 18.5 billion).
4.  **Continuous Monitoring:** Closely track the regulatory classification of the DeepSeek investigation to prevent risk contagion to the broader "Domestic Replacement" theme.

---
*Data Source: Internal Risk Management System (RMS), 2026-05-11 Market Snapshot*
