---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# FX Majors Daily Report (2026-05-08)

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# FX Majors Daily Report (2026-05-08)

## Executive Summary
The US Dollar Index (DXY) is hovering around 98.26 as markets cautiously await today's April Non-Farm Payrolls (NFP) report. USD/JPY remains sensitive at 156.88 following significant intervention by the Japanese Ministry of Finance (estimated at ¥5.4 trillion) as it tested the 160 level. Carry trade dynamics are under structural pressure due to a combination of a hawkish tilt from the Bank of Japan (BoJ) and a slight easing in energy prices. The Chinese Yuan (CNY) remains resilient despite a persistent yield gap with the US.

## 1. Major Exchange Rate Table
| Currency Pair | Current Rate | Data Source |
| :--- | :--- | :--- |
| **EUR/USD** | 1.17252 | markets_overnight_us |
| **USD/JPY** | 156.878 | markets_overnight_us |
| **GBP/USD** | 1.3547 | fx_majors |
| **AUD/USD** | 0.7203 | fx_majors |
| **USD/CAD** | 1.36641 | fx_majors |
| **USD/CHF** | 0.78072 | fx_majors |
| **USD/CNY** | 6.8009 | fx_majors |
| **USD/HKD** | 7.83232 | fx_majors |
| **DXY (Dollar Index)** | 98.257 | markets_overnight_us |

## 2. USD & Carry Perspective
- **US Dollar Index (DXY):** Currently steady at 98.26. The Fed held rates at 3.50%–3.75% in May, but four hawkish dissents highlighted growing internal pressure. Markets are already pricing in a potential shift toward a more hawkish stance under incoming Chair Kevin Warsh.
- **Yen Carry Trade:** While USD/JPY has retreated from 160, the Yen remains fundamentally undervalued. With the BoJ policy rate at 0.75% and a hike to 1.00% expected soon, the "engine" of the carry trade is losing steam. A drop in Brent crude to $101.04 has also alleviated some trade balance pressure for Japan, supporting a Yen recovery. Combined with a UST 10Y yield of 4.41%, the net carry appeal is narrowing at the margin.
- **Commodity Currencies:** AUD/USD (0.7203) and USD/CAD (1.3664) are reacting to the recent drop in oil prices. However, record-high gold prices ($4685.87) continue to provide a floor for the Australian Dollar.

## 3. CNY & Offshore Observations
- **Exchange Rate Performance:** USD/CNY is trading at 6.8009, reflecting stability. USD/HKD at 7.8323 remains well within the Pegged Exchange Rate System band.
- **Yield Gap:** The China 10-year government bond yield stands at approximately 1.76%, compared to the US 10-year yield of 4.41%. While this ~265bps gap continues to drive capital outflow pressures, improved geopolitical sentiment ahead of the high-stakes Trump-Xi summit has bolstered market confidence in the Yuan.
- **Policy Stance:** The PBOC held the 1-year LPR at 3.00% but signaled room for further RRR and rate cuts to ensure the 5% GDP target is met in late 2026.

## 4. Risk Events & Policy Calendar
- **May 8 (Today):** **US April Non-Farm Payrolls (NFP)**. Forecast is 73k; a significant miss could weaken the USD.
- **May 11:** China April CPI data; crucial for the PBOC's next easing move.
- **May 12:** US April CPI data; the key global macro event of the week.

## Data Sources
- **Internal APIs:** `fx_majors` (fetched at 2026-05-08), `markets_overnight_us` (fetched at 2026-05-08)
- **External Research:** TradingEconomics, Bloomberg, PBOC Official Statements, US Treasury Data.

```json
{"follow_ups":[
  {"to":"china-macro","subject":"US-China Yield Spread","question":"Given the volatility in US inflation expectations, do you expect the US-China 10Y yield spread to narrow below 200bps in the next three months? How would this impact the CNY support level?","priority":"normal"},
  {"to":"global-macro","subject":"Yen Carry Trade Unwind Risk","question":"If the BoJ hikes rates to 1.00% in June alongside a weakening US jobs market, could a mass unwind of Yen carry trades cause a liquidity shock to US tech equities (QQQ)?","priority":"high"}
]}
```
