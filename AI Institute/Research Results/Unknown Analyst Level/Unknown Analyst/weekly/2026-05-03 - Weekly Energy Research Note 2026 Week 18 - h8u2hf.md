---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Energy Research Note (2026 Week 18)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Energy Research Note (2026 Week 18)

Coverage window: 2026-04-27 to 2026-05-01. Bottom line: this was not a week of broad inventory comfort. It was a week in which the extreme oil risk premium faded, US product inventories stayed tight, and European gas was driven by low storage and refill pressure rather than high storage. Three assumptions in the plan need correction: the EIA 2026-04-29 report showed a 6.075 million barrel gasoline draw, not a build; DOE/EIA reported SPR releases, not fresh purchases; and GIE/AGSI+ showed EU gas storage near 32%, not 65%.

## Priority Conclusions

| Priority | Numeric conclusion | Implication |
|---|---:|---|
| 1 | The Brent-WTI spread narrowed from USD 11.86/bbl to USD 6.23/bbl | The geopolitical premium compressed sharply, but about USD 1.87/bbl of residual security premium remained versus the 2026-02-27 spot spread baseline of USD 4.36/bbl. |
| 2 | US gasoline stocks were 222.299 million barrels, down 6.075 million barrels w/w | The data do not support a driving-season demand destruction call; four-week gasoline supplied was 8.953 million b/d, up 1.2% y/y. |
| 3 | EU gas storage was 367.92 TWh, 32.49% full | This is not a high-storage setup; reaching 90% by 2026-11-01 requires about 651.3 TWh of injections, or 3.54 TWh/d. |
| 4 | China April manufacturing PMI was 50.3, with production at 51.5 | Post-holiday coal and power load should recover moderately, but non-manufacturing PMI at 49.4 and raw-material input prices at 63.7 cap the demand signal. |
| 5 | Brent daily returns and DXY daily returns had a +0.541 correlation | This week does not support a simple “strong dollar suppresses oil” explanation; geopolitics and inventories dominated oil pricing. |

## Data And Source Audit

| Planning assumption | Research check | Treatment |
|---|---|---|
| DOE announced an extra 3 million barrel SPR purchase for August-October 2026 on 2026-04-28 | DOE/EIA’s 2026-04-30 article said DOE released 17.5 million barrels from 2026-03-20 to 2026-04-24, including 7.1 million barrels in the week ending 2026-04-24; SPR stocks were 397.9 million barrels. | Reframed SPR as a short-term supply release, not a back-end refill support. |
| EIA gasoline stocks rose by 1.2 million barrels | EIA WPSR showed gasoline stocks fell by 6.075 million barrels to 222.299 million barrels in the week ending 2026-04-24. | The demand question is answered using the actual inventory draw. |
| EU gas storage reached 65% | GIE’s 2026-05-01 06:00 CEST snapshot showed EU storage at 367.92 TWh and 32.49% full; a GIE-derived report put end-April at 32.73%. | The European balance section treats storage as low, with strong refill requirements. |
| US April NFP was released on 2026-05-01 | The BLS March Employment Situation said the April report was scheduled for 2026-05-08. | April NFP is not used as released data for this week; actual DXY price action is used instead. |

Main raw inputs: EIA WPSR 2026-04-29, EIA Today in Energy 2026-04-30, GIE/AGSI+, BLS, China State Council/Xinhua, Yahoo Finance chart API, Investing.com, Argus sample report, EPA/Federal Register.

## Question 1: How Much Security Premium Remains In Brent?

### Method

I used 2026-04-27 to 2026-05-01 Brent and WTI front-month futures closes to calculate the Brent-WTI spread, then used the EIA spot Brent-WTI spread on 2026-02-27, USD 4.36/bbl, as a rough pre-escalation baseline. The security premium is defined as the current Brent-WTI spread above that baseline. I also compared EIA Brent spot against Brent futures to identify physical-market tightness.

### Findings

| Metric | 2026-04-27 | 2026-05-01 | Change |
|---|---:|---:|---:|
| Brent front-month futures, USD/bbl | 108.23 | 108.17 | -0.06% |
| WTI front-month futures, USD/bbl | 96.37 | 101.94 | +5.78% |
| Brent-WTI spread, USD/bbl | 11.86 | 6.23 | -5.63 |
| 2026-02-27 EIA spot Brent-WTI baseline, USD/bbl | 4.36 | 4.36 | - |
| Estimated residual security premium, USD/bbl | 7.50 | 1.87 | -5.63 |
| EIA Brent spot, USD/bbl | 113.89 | lagged | - |
| 2026-04-27 EIA Brent spot minus Brent futures, USD/bbl | 5.66 | lagged | - |

Brent settled as high as 118.03 USD/bbl on 2026-04-29 before falling back to 108.17 USD/bbl by 2026-05-01, showing a rapid unwind of position risk premium. On the Brent-WTI spread method, Friday still carried about USD 1.87/bbl of security premium, but that was far below Monday’s roughly USD 7.50/bbl. EIA spot Brent was still USD 5.66/bbl above Brent futures on 2026-04-27, which points to continued physical tightness and delivery-date effects. The conclusion is that geopolitical premium did not disappear, but it moved from the dominant driver to a secondary support behind inventory and available-barrel constraints.

### Evidence

| Input | Date | Number | Source |
|---|---|---:|---|
| Brent/WTI futures closes | 2026-04-27 to 2026-05-01 | Brent 108.23 to 108.17; WTI 96.37 to 101.94 | Yahoo Finance chart API: `BZ=F`, `CL=F` |
| Brent/WTI spot | 2026-02-27, 2026-04-27 | Brent 71.32, 113.89; WTI 66.96, 99.89 | EIA dnav `RBRTEd.xls`, `RWTCd.xls` |
| SPR status | 2026-04-24 | SPR 397.9 million barrels; 7.1 million barrels released during the week | EIA Today in Energy: https://www.eia.gov/todayinenergy/detail.php?id=67625 |

### Caveats

The Brent-WTI spread also reflects quality, logistics, Cushing constraints, export capacity, and dollar liquidity, so it is not a pure geopolitical premium. EIA Brent spot data were available only through 2026-04-27, not through 2026-05-01. Treat the estimate as an observable proxy for residual security premium, not a structural model.

## Question 2: Does Gasoline Inventory Signal Demand Feedback From High Prices?

### Method

I used the EIA Weekly Petroleum Status Report released on 2026-04-29, comparing stocks, four-week average gasoline supplied, refinery inputs, and retail gasoline prices for the week ending 2026-04-24. The comparison basis is week-on-week, year-on-year, and EIA’s stated five-year-average deviation.

### Findings

| Metric | 2026-04-24 or 2026-04-27 | Weekly change | Y/y or five-year comparison |
|---|---:|---:|---:|
| Commercial crude stocks excluding SPR, million barrels | 459.495 | -6.233 | About 1% above the five-year average |
| SPR stocks, million barrels | 397.924 | -7.121 | -0.618 y/y |
| Gasoline stocks, million barrels | 222.299 | -6.075 | -1.4% y/y, about 2% below the five-year average |
| Distillate stocks, million barrels | 103.638 | -4.494 | About 11% below the five-year average |
| Four-week gasoline supplied, million b/d | 8.953 | +0.105 | +1.2% y/y |
| Refinery utilization, current week | 89.6% | roughly +0.5 percentage point | Four-week average 90.1% |
| US regular gasoline retail price, USD/gal | 4.123 | +0.079 | +0.990 y/y |

The planning assumption of an unexpected gasoline build is inconsistent with the EIA report; the actual move was a large draw. Four-week gasoline supplied rose to 8.953 million b/d from 8.848 million b/d and was 1.2% higher year on year, so the weekly data do not show clear demand destruction. High retail prices still raise the risk of delayed demand feedback, but this week looks more like a tight product balance across refinery operations, imports, and inventories. If prices stay high, demand weakness may appear in late-May driving data rather than in the week ending 2026-04-24.

### Evidence

| Input | Date | Number | Source |
|---|---|---:|---|
| WPSR release | Released 2026-04-29, covering 2026-04-24 | Gasoline -6.1 million barrels, commercial crude -6.2 million barrels, distillate -4.5 million barrels | EIA WPSR PDF: https://www.eia.gov/petroleum/supply/weekly/pdf/wpsrall.pdf |
| Table 1 stocks | 2026-04-24 | Gasoline 222.299, crude excluding SPR 459.495, SPR 397.924 | EIA WPSR `table1.csv`: https://ir.eia.gov/wpsr/table1.csv |
| Gasoline district stocks | 2026-04-24 | Total gasoline 222.299, down 6.075 | EIA WPSR `table5.csv`: https://ir.eia.gov/wpsr/table5.csv |
| Retail gasoline price | 2026-04-27 | 4.123 USD/gal | EIA WPSR Highlights |

### Caveats

EIA weekly “product supplied” is apparent demand, not end-user consumption. Easter timing, refinery maintenance, import batches, and inventory reclassification can all distort one week of data. A driving-season demand call needs at least three to four consecutive weeks of confirmation.

## Question 3: Will TTF Summer-Winter Contango Widen Against High Storage?

### Method

I first verified the storage premise, then assessed the curve. Storage uses the GIE/AGSI+ 2026-05-01 06:00 CEST snapshot and GIE-derived end-April comparisons. Refill needs are calculated from current storage of 367.92 TWh and a 32.49% fill rate, which imply working gas capacity, then the daily injection pace required to reach 90% or 80% by 2026-11-01. The TTF curve uses the Argus sample report’s midpoint prices for TTF May-September, TTF Winter 2026, and TTF 3Q26/4Q26.

### Findings

| Metric | Value | Calculation/comparison |
|---|---:|---|
| EU gas in storage | 367.92 TWh | GIE 2026-05-01 06:00 CEST |
| EU fill rate | 32.49% | GIE 2026-05-01 06:00 CEST |
| Estimated working gas capacity | 1,132.4 TWh | 367.92 / 0.3249 |
| Inventory required for 90% target | 1,019.2 TWh | 1,132.4 * 90% |
| Additional injections needed for 90% target | 651.3 TWh | 1,019.2 - 367.92 |
| Required average injection to 2026-11-01 | 3.54 TWh/d | 651.3 / 184 days |
| Required average injection for 80% flexible target | 2.92 TWh/d | 538.0 / 184 days |
| TTF May-Sep 2026 average | 43.914 EUR/MWh | Argus May 44.005, Jun 43.990, Jul 43.915, Aug 43.810, Sep 43.850 |
| TTF Winter 2026 | 42.885 EUR/MWh | Argus |
| Summer versus winter spread | +1.029 EUR/MWh | Summer average minus Winter 2026 |

The premise of high storage is wrong; European storage was near a five-year low, not a seasonal high. The curve also was not in a classic “cheap summer, expensive winter” refill contango: the Argus sample showed the May-September average about 1.029 EUR/MWh above Winter 2026. Low inventories mean summer gas must compete for LNG and pipeline supply, which supports summer contracts. Norwegian maintenance adds near-term supply risk, but that strengthens prompt/summer risk premium rather than mechanically widening winter premium.

### Evidence

| Input | Date | Number | Source |
|---|---|---:|---|
| EU storage snapshot | 2026-05-01 06:00 CEST | 367.92 TWh, 32.49% | GIE homepage: https://www.gie.eu/ |
| End-month y/y comparison | Around 2026-04-30 | 2026 32.73%; 2025 39.52%; 2024 62.44%; 2023 59.73%; 2022 33.47% | GIE-derived report: https://www.nampa.org/text/22920611 |
| Initial summer storage | 2026-04-01 | 314 TWh, 28% WGV | ENTSOG Summer Supply Outlook 2026 |
| TTF curve | Argus sample | Winter 2026 42.885; May 44.005; 3Q26 43.855; 4Q26 43.545 | Argus sample report: https://www.argusmedia.com/-/media/project/argusmedia/mainsite/english/documents-and-files/sample-reports/argus-european-natural-gas.pdf |
| Norwegian maintenance | 2026-05 | Troll 2026-05-17 to 05-22, Kollsnes 88.0 mcm/d, Nyhamna 14.8 mcm/d | Reuters/SahmCapital table: https://www.sahmcapital.com/news/content/table-north-sea-gas-maintenance-schedule-revises-troll-outage-2026-04-08 |

### Caveats

The AGSI+ raw API requires an API key, so this note uses the public GIE snapshot and GIE-derived reporting. The Argus report is a public sample, not a full exchange settlement file. TTF seasonal contract naming can cross gas years; any trade implementation should re-check ICE settlements.

## Question 4: What Do China’s April PMIs Signal For Post-Holiday Coal And Power Load?

### Method

I used China’s official April PMI and sub-indexes, focusing on manufacturing output, new orders, purchasing activity, prices, and business expectations as leading indicators for industrial power demand, coal burn, and fuel procurement. The comparison basis is the 50 expansion threshold and the move from March.

### Findings

| Indicator | April 2026 | M/m | Demand implication |
|---|---:|---:|---|
| Official manufacturing PMI | 50.3 | -0.1 percentage point | A second month of expansion supports post-holiday industrial load. |
| Production index | 51.5 | Not disclosed | Positive for coal-fired power burn and industrial electricity use. |
| New orders index | 50.6 | Not disclosed | Demand is still expanding, but only moderately. |
| Procurement volume index | 51.1 | +0.2 percentage point | Marginal improvement in raw-material and fuel restocking. |
| Raw-material purchase price index | 63.7 | Not disclosed | High cost pressure may cap operating rates in energy-intensive sectors. |
| Factory-gate price index | 55.1 | Not disclosed | Partial cost pass-through, but also higher end-demand risk. |
| Non-manufacturing PMI | 49.4 | -0.7 percentage point | Services and construction-related load offset manufacturing recovery. |

The PMI signal is “recovery, but not strong recovery.” Production and new orders both stayed above 50, so coal burn and industrial power load should improve after the Labor Day holiday. But the signal looks more like moderate restocking than the start of a strong cycle. The raw-material purchase price index at 63.7 is a direct warning for coal, oil, gas, and metals cost pressure, which could delay starts or reduce load in energy-intensive manufacturing. Non-manufacturing PMI below 50 means services and construction power demand cannot simply be extrapolated from manufacturing expansion.

### Evidence

| Input | Date | Number | Source |
|---|---|---:|---|
| Official manufacturing PMI | 2026-04 | 50.3, versus 50.4 in March | China State Council/Xinhua: https://english.www.gov.cn/archive/statistics/202604/30/content_WS69f30998c6d00ca5f9a0ab95.html |
| Production and new orders | 2026-04 | Production 51.5; new orders 50.6 | Same source |
| Procurement and prices | 2026-04 | Procurement volume 51.1; raw-material purchase prices 63.7; factory-gate prices 55.1 | Same source |
| Non-manufacturing PMI | 2026-04 | 49.4, down 0.7 percentage point m/m | Same source |

### Caveats

PMI is a diffusion index, not an absolute measure of electricity, coal burn, or tonnes purchased. The Labor Day holiday creates short-term distortions in power load and coastal power-plant coal burn. Confirmation requires post-holiday plant coal consumption, port inventories, and blast-furnace operating rates.

## Renewables And Policy Note

| Item | Number/date | Energy implication |
|---|---:|---|
| EPA final repeal of 2024 MATS amendments became effective | 2026-04-27 | Reduces incremental particulate, mercury, and CEMS compliance pressure on coal- and oil-fired units, marginally delaying some fossil baseload retirements. |
| EPA proposed repeal of power-sector GHG standards | Proposal dated 2025-06-11, page updated 2026-02-27 | Negative for renewable policy premium and positive for gas/coal capacity value, but litigation risk remains high. |
| EPA said repeal of 2024 MATS amendments removes several compliance requirements | 2026-02-20 press release | More supportive for short-term coal availability than for long-term investment, which still depends on state policy, tax credits, and interconnection. |

Evidence: EPA MATS repeal analysis: https://www.epa.gov/power-sector-modeling/analysis-final-repeal-mercury-and-air-toxics-standards-amendments; Federal Register summary: https://regulations.justia.com/regulations/fedreg/2026/02/24/2026-03638.html; EPA GHG power plant page: https://www.epa.gov/stationary-sources-air-pollution/greenhouse-gas-standards-and-guidelines-fossil-fuel-fired-power.

## Visualization-Ready Data Tables

### Chart 1: Energy Asset Weekly Return Heatmap

Basis: 2026-04-27 close to 2026-05-01 close; futures are Yahoo Finance front/continuous contracts, coal is Investing.com Newcastle Coal Futures May 2026.

| Asset | Ticker/contract | Unit | 2026-04-27 | 2026-05-01 | Weekly return |
|---|---|---|---:|---:|---:|
| Brent crude | BZ=F | USD/bbl | 108.23 | 108.17 | -0.06% |
| WTI crude | CL=F | USD/bbl | 96.37 | 101.94 | +5.78% |
| Dutch TTF gas | TTF=F | EUR/MWh | 44.646 | 45.766 | +2.51% |
| Henry Hub gas | NG=F | USD/MMBtu | 2.550 | 2.780 | +9.02% |
| Newcastle Coal | NCFMc1 | USD/t | 132.25 | 133.90 | +1.25% |
| Energy Select Sector SPDR | XLE | USD | 56.77 | 58.85 | +3.66% |
| U.S. Dollar Index | DX-Y.NYB | Index points | 98.48 | 98.21 | -0.27% |

### Chart 2: US Gasoline Inventory Seasonal Chart

The proposed chart requested a five-year average and range. EIA WPSR public tables provide the current week, prior week, 2025, 2024, and the statement that current stocks were about 2% below the five-year average, but the CSV does not provide the full five-year range. The substitute table is “current week versus the prior two same-period years and implied five-year average”; if the visualization needs a full range band, pull EIA `WGTSTUS1w.xls` and compute week-of-year ranges.

| Week ending | Gasoline stocks, million barrels | Basis |
|---|---:|---|
| 2024-04-26 | 227.087 | EIA WPSR same-period comparison |
| 2025-04-25 | 225.540 | EIA WPSR same-period comparison |
| 2026-04-17 | 228.374 | EIA WPSR prior week |
| 2026-04-24 | 222.299 | EIA WPSR current week |
| 2026-04-24 implied five-year average | 226.84 | 222.299 / 0.98, because EIA said current stocks were about 2% below the five-year average |

### Chart 3: EU Gas Storage Fill Rate Comparison

| Date/basis | 2022 | 2023 | 2024 | 2025 | 2026 |
|---|---:|---:|---:|---:|---:|
| End-April fill rate, % | 33.47 | 59.73 | 62.44 | 39.52 | 32.73 |
| 2026-05-01 GIE snapshot, % | - | - | - | - | 32.49 |
| 2026-05-01 gas in storage, TWh | - | - | - | - | 367.92 |

### Chart 4: Oil Price Versus DXY Correlation Scatter

| Date | Brent close, USD/bbl | DXY close | Brent daily return | DXY daily return |
|---|---:|---:|---:|---:|
| 2026-04-27 | 108.23 | 98.48 | - | - |
| 2026-04-28 | 111.26 | 98.62 | +2.80% | +0.14% |
| 2026-04-29 | 118.03 | 98.92 | +6.08% | +0.30% |
| 2026-04-30 | 114.01 | 98.08 | -3.41% | -0.85% |
| 2026-05-01 | 108.17 | 98.21 | -5.12% | +0.13% |
| Sample correlation | - | - | Brent vs DXY daily returns | +0.541 |

## Next Week Watch List

| Theme | Number to track | Trigger |
|---|---|---|
| US product demand | 2026-05-07/05-13 EIA gasoline stocks and four-week supplied | If gasoline stocks keep falling while supplied stays positive y/y, demand destruction remains delayed. |
| SPR | SPR stocks and release/refill notices | Weekly SPR draws above 5 million barrels add short-term supply but reduce strategic buffer. |
| European gas | GIE daily injections and TTF May-Winter 2026 spread | If injections stay below 3 TWh/d and storage remains below 35%, TTF summer downside is limited. |
| China demand | Post-holiday coastal power-plant coal burn, port coal stocks, blast-furnace operating rates | If PMI recovery does not show up in coal burn, coal-price upside needs to be revised lower. |
| Macro | BLS April Employment Situation on 2026-05-08 | April NFP was not yet released; the dollar effect needs confirmation from the 2026-05-08 release. |
