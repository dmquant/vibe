---
source: ai-institute
resource_type: research-result
report_kind: mailbox-response
analyst_level: "宏观与策略"
content_error: ""
---

# 2026-2027 Power Gap in US/EU AI Hubs and Inflation Implications

Kind: **mailbox-response**
Analyst: **Chief Economist**

## Links

- Report type: [[mailbox-response]]
- Analyst: [[Chief Economist]]
- Analyst level: [[宏观与策略]]

# 2026-2027 Power Gap in US/EU AI Hubs and Inflation Implications

Date anchor: `date +%Y-%m-%d` returned **2026-05-11**. All “current,” “2026-2027,” and “previous trading day” references in this note are anchored to that date.

## Prioritized Conclusions

1. **The Rubin generation shifts the bottleneck further from GPU procurement toward firm power that can actually connect in 2026-2027.** NVIDIA’s Vera Rubin NVL72 enters the 2026 platform cycle with rack power already around the 190-230 kW range; Rubin Ultra NVL576 is expected to move toward roughly 600 kW per rack in the second half of 2027. At a PUE of 1.10, 1 GW of delivered campus power supports only about 3,950-4,785 Vera Rubin NVL72 racks, or about 1,515 Rubin Ultra NVL576 racks. [NVIDIA](https://nvidianews.nvidia.com/news/nvidia-vera-rubin-opens-agentic-ai-frontier); [Data Center Dynamics](https://www.datacenterdynamics.com/en/news/nvidias-rubin-ultra-nvl576-rack-expected-to-be-600kw-coming-second-half-of-2027/)

2. **The real 2026-2027 “gap” is not a shortage of total US or European generation; it is a shortage of local transmission, substations, interconnection slots, and dispatchable power in the main hubs on the Rubin deployment timeline.** TMT models should use firm MW/GW deliverable by 2026-2027, not announced demand or raw interconnection requests. Base case: major US AI hubs face an available-power gap of roughly **8-18 GW** in 2026-2027; major European/UK hubs face about **5-12 GW**, with a much larger apparent gap if low-certainty projects in the UK and EU connection queues are counted.

3. **The inflation impact is small but non-zero at the national CPI level, and much larger in regional power prices, commercial rents, and utility capex.** Electricity is about 2.5% of the US CPI basket. If AI load lifts residential/commercial electricity prices by an extra 4-8 percentage points versus baseline, the direct CPI effect is roughly **+0.10-0.20 percentage points**, with lags through network charges and capacity costs. EIA’s high AI-load case shows 2027 ERCOT wholesale power prices **79%** above baseline and PJM **4%** above baseline; Dallas Fed research finds low-single-digit national wholesale price effects in moderate cases, but much larger upside in high-load cases by 2028. [EIA](https://www.eia.gov/todayinenergy/detail.php?id=67344); [Dallas Fed](https://www.dallasfed.org/research/papers/2026/wp2606); [BLS CPI weights](https://www.bls.gov/cpi/tables/relative-importance/)

4. **For the Fed and ECB, this is best viewed as a local supply bottleneck plus a utility capex cycle, not a standalone shock large enough to reset the 2026 core inflation path.** It does, however, raise the right-tail risk in electricity inflation, reduce confidence in cost disinflation for services and goods, and bring earlier cost and political pressure in Texas, Virginia, Ireland, the UK South East, and Frankfurt.

## Rubin Power Assumptions

| Item | 2026-2027 modeling assumption | Power-demand implication |
|---|---:|---|
| Vera Rubin NVL72 | About 190-230 kW/rack IT load | About 209-253 kW/rack after PUE 1.10; 100 MW of campus power supports about 395-479 racks |
| Rubin Ultra NVL576 | About 600 kW/rack IT load | About 660 kW/rack after PUE 1.10; 100 MW of campus power supports about 151 racks |
| Load shape | AI training/inference is close to 24/7 high utilization | The stress on capacity markets, transmission, cooling, and redundancy is higher than for ordinary commercial load with the same annual MWh |

Note: NVIDIA’s official roadmap confirms the Vera Rubin platform in the 2026 cycle; the 600 kW Rubin Ultra rack figure comes from industry reporting and is best used as a 2027 stress-test assumption rather than a confirmed shipment baseline.

## 2026-2027 Power Gap by Major Hub

| Hub | Estimated 2026-2027 available-power gap | Rationale | Inflation/cost transmission |
|---|---:|---|---|
| Northern Virginia / PJM East | **3-6 GW** | One of the world’s largest AI/cloud clusters, with the tightest constraints in PJM East transmission and capacity; data-center load growth is now central to PJM load forecasting, while much of the new transmission and generation cannot be fully online before 2027. | Higher capacity charges, transmission costs, and commercial tariffs; limited direct US CPI effect, but material pressure on Virginia/Maryland/DC business power costs and data-center rents. |
| ERCOT / Texas | **2-5 GW** | Texas has land and generation advantages, but AI load is concentrated and constrained by interconnection, substations, and peak reserve margins; EIA scenarios show ERCOT is the most price-sensitive region, with 2027 wholesale prices 79% above baseline in the high-load case. | The clearest regional power-price upside risk; could lift industrial tariffs, commercial rents, and marginal natural-gas demand. |
| Georgia / Southeast | **1-3 GW** | Atlanta and surrounding AI/cloud campuses are growing quickly; Georgia Power and peers are incorporating large-load demand into resource plans, but more generation and transmission relief arrives after 2028. | Transmission comes through utility infrastructure investment and rate cases, showing up first in commercial tariffs and large-load contracts in 2026-2027. |
| Midwest / PJM-West / Northern Illinois-Ohio | **1-3 GW** | Chicago, Columbus, and nearby markets benefit from land, fiber, and lower power prices, but PJM/MISO interconnection queues and capacity-market tightness limit rapid 2026-2027 scaling. | Regional wholesale and capacity prices face pressure, with a weaker inflation impulse than Texas/Virginia. |
| Phoenix / Arizona / Nevada | **0.5-1.5 GW** | Land and solar resources are attractive, but water, cooling, transmission, and high-temperature peak load limit the pace of additions. | Mostly a commercial power and water/cooling cost issue, not a national CPI issue. |
| London / UK South East | **2-4 GW** firm gap; much larger apparent queue | The UK connection queue includes many data-center and electrification projects; South East substations and transmission are constrained, so deliverable projects will be screened heavily. | Retail price-cap design dampens near-term CPI pass-through, but network charges, commercial leases, and public investment pressure rise. |
| Frankfurt / Rhine-Main | **1-3 GW** | One of Europe’s largest connectivity and cloud hubs, with binding limits from land, substations, and local approvals; new power also faces stricter efficiency and heat-reuse requirements. | German industrial electricity prices are sensitive, and data centers compete with industrial users for reliable power. |
| Amsterdam / Netherlands | **0.5-1.5 GW** | Prior data-center construction restrictions, grid congestion, and space constraints limit capacity that can come online in 2026-2027. | Small national HICP effect, but visible through network charges and commercial power contracts. |
| Paris / Île-de-France | **0.3-1.0 GW** | France has a low-carbon power advantage, but Paris-region substations, land, and permitting remain short-term constraints for AI campuses. | National inflation impact is lower than in Germany/UK; the main effect is regional business costs. |
| Dublin / Ireland | **0.3-0.8 GW** | Ireland already has a very high data-center share of power demand; new connections increasingly require paired generation, storage, and flexibility, with Dublin the tightest local market. | Significant for Irish power prices and political pressure; limited euro-area-wide HICP effect but high tail risk. |

## Inflation Mechanisms

- **Direct electricity item:** Electricity is about 2.5% of US CPI. Even if AI load adds 4-8 percentage points to national average retail electricity inflation, the direct CPI contribution is only about +0.10-0.20 percentage points; regional dispersion will be large. In Europe, electricity weights differ by country, and the euro-area direct effect is usually smaller, while Ireland, the Netherlands, Germany, and the UK face more visible regional commercial-cost pressure.

- **Wholesale-to-retail lag:** Data centers first raise nodal wholesale prices, capacity charges, transmission-upgrade costs, and utility capex. These then pass through with a lag via rate cases, commercial contracts, and network tariffs. In 2026 the effect is more likely to sit in wholesale and commercial pricing; by 2027 the probability of spillover to households and smaller businesses rises.

- **Natural gas and capacity markets:** AI load is 24/7, so intermittent renewables alone do not match it well. The 2026-2027 gap is likely to be filled by gas plants, storage, demand response, on-site generation, and higher capacity prices. If gas is the marginal power source, the upside elasticity of energy-services inflation increases.

- **Non-power cost effects:** High-density Rubin racks lift demand for liquid cooling, transformers, switchgear, UPS, cabling, and electrical engineering labor. Even if retail electricity prices do not spike, data-center rents, cloud capital costs, and AI inference pricing may rise through a “power availability premium.”

## Practical Guidance for TMT Modeling

1. For 2026-2027 Rubin deployment, do not model compute only from GPU shipments. Add a firm-power haircut. In Northern Virginia, Texas, London, Frankfurt, and Dublin, apply a **20-40%** power-delivery discount to nominal rack deployment unless projects disclose substations, PPAs, on-site power, or firm interconnection dates.

2. For AI data-center capex, increase the power-infrastructure share in 2026-2027. Substations, transformers, liquid cooling, redundancy, and long-cycle electrical equipment are the binding items. GPU availability does not equal cluster commissioning.

3. For inflation scenarios, use a base case of **+0.05-0.15 percentage points** for US CPI and **+0.03-0.10 percentage points** for euro-area HICP. The upside case is spillover from Texas/Virginia/Ireland/UK South East power shocks, with US CPI above **+0.20 percentage points** and localized double-digit commercial power-price increases.

4. Leading indicators to track: PJM and ERCOT peak-load forecast revisions, capacity auction prices, large-load connection disclosures from Dominion/Oncor/Georgia Power, UK queue reform, EirGrid data-center connection policy, Frankfurt/Amsterdam local permits, and the actual NVIDIA Rubin Ultra shipment cadence.

## Key Sources

- NVIDIA, “NVIDIA Vera Rubin Opens Agentic AI Frontier,” 2026-03-18: https://nvidianews.nvidia.com/news/nvidia-vera-rubin-opens-agentic-ai-frontier
- Data Center Dynamics, “Nvidia’s Rubin Ultra NVL576 rack expected to be 600kW, coming second half of 2027,” 2025-03-24: https://www.datacenterdynamics.com/en/news/nvidias-rubin-ultra-nvl576-rack-expected-to-be-600kw-coming-second-half-of-2027/
- EIA, “Data center demand could significantly increase electricity prices in some regions,” 2026-04-15: https://www.eia.gov/todayinenergy/detail.php?id=67344
- Federal Reserve Bank of Dallas, “AI and the electricity grid,” Working Paper 2606, 2026: https://www.dallasfed.org/research/papers/2026/wp2606
- BLS, CPI Relative Importance Tables: https://www.bls.gov/cpi/tables/relative-importance/
- LBNL/DOE, “2024 United States Data Center Energy Usage Report”: https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report.pdf
- IEA, “Electricity 2026”: https://www.iea.org/reports/electricity-2026
- CBRE, “European Data Centres Market Outlook 2026”: https://www.cbre.com/insights/books/european-real-estate-market-outlook-2026/data-centres
