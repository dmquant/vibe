---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# US-China Treasury Yield Curve Daily (2026-05-12)

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# US-China Treasury Yield Curve Daily (2026-05-12)

## Executive Summary
The US 10-year Treasury yield (UST10) remains elevated at 4.42%, reflecting market absorption of the Federal Reserve's "Higher-for-Longer" policy stance. The 2s10s spread stands at 47 bps, with the curve exhibiting a normal upward slope, ending a prolonged period of inversion. Meanwhile, China's 10-year yield is fluctuating at a low level around 1.75%, maintaining a deep negative US-China 10Y spread of 267 bps. Market expectations for rate cuts in 2026 have cooled significantly due to persistent US inflation and geopolitical-driven energy prices.

## 1. US Treasury Curve

| Tenor | Yield (%) | Source |
| :--- | :--- | :--- |
| 2Y | 3.95 | Internal API (financialmodelingprep.com) |
| 5Y | 4.07 | Internal API (financialmodelingprep.com) |
| 10Y | 4.42 | Internal API (financialmodelingprep.com) |
| 30Y | 4.98 | Internal API (financialmodelingprep.com) |

- **2s10s Spread**: 47 bps (Normal)
- **5s30s Spread**: 91 bps

## 2. China Government Bond (CGB) Curve

| Tenor | Yield (%) | Source |
| :--- | :--- | :--- |
| 2Y | 1.28 | [Trading Economics](https://tradingeconomics.com/china/government-bond-yield) |
| 5Y | 1.48 | [World Government Bonds](http://www.worldgovernmentbonds.com/bond-yield/china/5y/) |
| 10Y | 1.75 | [CEIC Data](https://www.ceicdata.com/en/china/government-bond-yield-daily/government-bond-yield-10-year) |

*Note: Internal API currently does not cover CGB data; figures are based on public market discovery. The 10Y yield edged down by ~1bp today, influenced by stronger-than-expected trade data and expectations for US-China high-level meetings.*

## 3. Yield Spreads & Implied Policy Expectations

- **US-China 10Y Spread**: -267 bps (US 4.42% vs CN 1.75%)
- **Fed Funds Futures Implied Probabilities**:
    - **June Meeting (2026-06-17)**: Probability of a hold at 3.50%-3.75% is **95.9%**; probability of a 25bps cut is only **4.1%**.
    - **2026 Full-Year Outlook**: Market pricing now suggests a **72.6% probability of no rate cuts** throughout the entire year.
- **Domestic Policy Benchmarks**:
    - **LPR**: 1Y at 3.00%, 5Y+ at 3.50% (stable since June 2025).
    - **MLF/Reverse Repo**: 7-day reverse repo rate at 1.40%; 1Y MLF auction rates roughly between 1.5% - 1.6%.

## 4. Conclusion & Monitoring Indicators
1. **Upward Shift in US Yield Anchor**: Core PCE (projected at 2.7%) and geopolitical risks support high US yields; the steepening trend in the curve is likely to persist in the short term.
2. **Persistent Deep Negative Spread**: Pressure on the CNY remains, but ample domestic liquidity and strong bond allocation demand limit the room for CGB yields to rebound.
3. **Key Watch Items**:
    - Upcoming May inflation data release.
    - Fed Chair Powell's guidance on the "accommodative bias" during the June 16-17 FOMC meeting.

## Data Sources
- **Internal API**: `yield_curve_us` (Source: Financial Modeling Prep)
- **web_search**: Trading Economics, World Government Bonds, CEIC Data, CME FedWatch Tool.
