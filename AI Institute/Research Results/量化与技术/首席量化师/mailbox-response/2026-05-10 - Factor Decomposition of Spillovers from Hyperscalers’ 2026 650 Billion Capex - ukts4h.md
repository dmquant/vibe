---
source: ai-institute
resource_type: research-result
report_kind: mailbox-response
analyst_level: "量化与技术"
content_error: ""
---

# Factor Decomposition of Spillovers from Hyperscalers’ 2026 $650 Billion Capex to Industrials and Utilities

Kind: **mailbox-response**
Analyst: **Chief Quant**

## Links

- Report type: [[mailbox-response]]
- Analyst: [[Chief Quant]]
- Analyst level: [[量化与技术]]

# Factor Decomposition of Spillovers from Hyperscalers’ 2026 $650 Billion Capex to Industrials and Utilities

Date anchor: 2026-05-11, from local `date +%Y-%m-%d`.

## Priority Conclusions

1. **The highest-sensitivity exposures are electrical equipment, thermal management/liquid cooling, backup power and modular power systems in Industrials; in Utilities, the highest sensitivity is in transmission/distribution and integrated electric utilities with contracted data-center load queues, followed by merchant generation and independent power producers.** This is not a broad “Industrials” or broad “Utilities” factor; it is a “data-center power density + grid bottleneck + long-cycle electrical equipment” factor.
2. **Using $650 billion as the base case is reasonable but conservative.** In January 2026, Goldman Sachs put consensus 2026 hyperscaler capex at $527 billion and noted up to $200 billion of upside relative to current estimates based on prior technology investment cycles. In March 2026, Morgan Stanley said major global technology companies had announced $740 billion of capex for the year, up 69% from 2025. On May 6, 2026, TrendForce raised its 2026 capex forecast for the top nine global CSPs to about $830 billion, up 79% year over year.[^1][^2][^3]
3. **Every incremental $100 billion of hyperscaler AI capex implies roughly $13.9 billion of direct data-center power/cooling equipment revenue pool.** McKinsey estimates $5.2 trillion of AI-workload data-center capex from 2025 to 2030, with $720 billion allocated to power and cooling equipment: $280 billion for power distribution, $220 billion for backup power and $220 billion for cooling. Scaled to each +$100 billion capex shock, this implies about $5.4 billion for power distribution, $4.2 billion for backup power and $4.2 billion for cooling. Under the $650 billion base case, those pools are about $35 billion, $27.5 billion and $27.5 billion, respectively.[^4]
4. **Every incremental $100 billion of capex implies about 3.3 GW of data-center demand and about 24 TWh/year of electricity use.** Calculation: McKinsey’s $6.7 trillion of cumulative global data-center capex maps to 220 GW of demand by 2030, or about $30.5 billion/GW; at an 85% load factor, 3.3 GW translates to about 24 TWh/year. The $650 billion base case maps to about 21 GW and 159 TWh/year. This is consistent with the IEA’s view that global data-center electricity use rises from 415 TWh in 2024 to about 945 TWh in 2030, with U.S. data centers accounting for nearly half of U.S. electricity-demand growth to 2030.[^4][^5]
5. **Utilities alpha is more of a “regional queue + regulatory recovery + interconnection speed” factor.** S&P Global RRA forecasts about $1.3 trillion of U.S. energy-utility capex from 2026 to 2030, driven partly by AI/cloud data centers and other large-load customers; it cites 374 TWh of incremental energy demand and more than 45 GW of peak load from large loads by 2035. On May 5, 2026, AEP said contracted incremental load had expanded to 63 GW by 2030 and raised its five-year capital plan from $72 billion to $78 billion, with $33 billion of transmission investment, or 42% of the plan.[^6][^7]

## Factor Framework

I would decompose the theme into four quantifiable factors:

| Factor | Transmission variable | Main beneficiary subindustries | Key metric |
|---|---:|---|---:|
| Data-center non-IT capital intensity | Non-chip, non-server share of capex | Electrical equipment, cooling, EPC, building products | Power + cooling are about 14% of AI data-center capex[^4] |
| Power-density upgrade | kW/rack, liquid-cooling penetration | Thermal management, liquid-cooling components, CDUs, pumps/valves, sensors/controls | Liquid-cooling equipment CAGR of 45%-50% in 2025-2030[^4] |
| Grid/power bottleneck | GW queue, PPAs, power-access shortfall | T&D utilities, transmission EPC, transformers/switchgear, backup power | Morgan Stanley estimates U.S. data-center demand of 74 GW by 2028 and about a 49 GW power-access shortfall[^8] |
| Regulatory capitalization | Rate-base growth, cost allocation, customer agreements | AEP, Dominion, Duke and other large-load-jurisdiction utilities | AEP has 63 GW of new load and a $78 billion five-year plan; Duke has a $103 billion five-year plan[^7][^9] |

## Subindustry Sensitivity to Each +$100 Billion Capex Shock

Scores are relative sensitivities from 0 to 100, combining direct revenue pool, marginal growth rate, supply bottlenecks and probability of capitalization. They are not investment ratings.

| Rank | Subindustry | Relative sensitivity | Revenue/asset pool per +$100 billion capex | Explanation |
|---:|---|---:|---:|---|
| 1 | Electrical equipment: switchgear, transformers, PDUs, busway, panels | 95 | About $5.4 billion of direct power-distribution equipment, plus grid-side equipment pull-through | Highest capex content and long lead times. Morgan Stanley flagged transmission, switchgear, breakers and similar supply-chain items as a key bottleneck over the next 24 months, with grid-equipment costs up 30% since 2019.[^8] |
| 2 | Thermal management/liquid cooling: CDUs, cold plates, pumps/valves, heat exchangers, chillers, dry coolers | 90 | About $4.2 billion of direct cooling equipment | Most sensitive to AI rack power density. McKinsey expects liquid-cooling equipment to grow from $2-3 billion in 2025 to $15-17 billion in 2030, a 45%-50% CAGR; heat-rejection systems grow from $3-5 billion to $12-14 billion, a 30%-35% CAGR.[^4] |
| 3 | Backup power/on-site power: UPS, batteries, diesel/gas gensets, fuel cells, microgrids | 85 | About $4.2 billion of direct backup-power equipment, plus on-site generation spillover | Grid-access shortfalls turn “backup” into quasi-primary power. If U.S. data-center demand reaches 74 GW by 2028 with a 49 GW access shortfall, on-site power and storage have stronger marginal pricing power than normal cyclical equipment.[^8] |
| 4 | T&D utilities and transmission EPC | 80 | About 3.3 GW/24 TWh of annual load; using AEP’s $78 billion/63 GW rough intensity, about $4.1 billion of utility capex | Highly regional. AEP, Dominion and Duke load queues and capital plans have already been repriced by data centers/large loads; returns depend on regulatory recovery and customer cost allocation.[^6][^7][^9][^10] |
| 5 | Data-center EPC, modular construction, engineering/design | 75 | About $9-10 billion of construction/engineering, plus about $5-6 billion of core-and-shell construction | High revenue beta, but margins and bargaining power are usually lower than bottleneck electrical/cooling equipment. In McKinsey’s non-IT capex split, construction, labor, engineering and design are 22%-25%; core and shell are 12%-15%.[^4] |
| 6 | Merchant generation/IPP, nuclear life extension, gas generation, storage | 70 | Not direct capex content; monetized through PPAs, capacity prices and power spreads | Morgan Stanley expects power spreads to rise 15% and potentially create $350 billion of value across the power supply chain. The IEA expects renewables, natural gas and nuclear all to contribute to incremental data-center supply.[^5][^8] |
| 7 | Water utilities, building products, copper/cabling/connectors, general industrial machinery | 55 | Usually below $5 billion per +$100 billion capex for any single category | There is second-order demand, but water permitting, local opposition and commodity-price pass-through dilute alpha. Better treated as lower-crowding satellite baskets. |

## Industrials: Highest-Sensitivity Paths

**The preferred exposure is electrical equipment, not general capital goods.** Power-distribution equipment is about 5.4% of AI data-center capex, and McKinsey explicitly includes switchgear, PDUs, transformers and cabling. These categories benefit from both data-center construction and utility-grid expansion. Representative screening pool: `ETN`, `VRT`, `SU FP/SBGSY`, `ABB`, `SIE GY`, `NVT`, `HUBB`.

**The second exposure is thermal management/liquid cooling.** Its current revenue pool is smaller, but its growth rate is the highest and it is directly driven by AI GPU rack power density. Traditional HVAC has lower beta than liquid-cooling components and integrated systems; prioritize suppliers of CDUs, cold plates, quick connects, pumps/valves, sensor controls and heat-rejection systems. Representative screening pool: `VRT`, `TT`, `CARR`, `JCI`, `MOD`, and the `nVent` ecosystem.

**The third exposure is backup power and on-site power.** Convexity comes from grid-access shortfalls: when hyperscalers cannot secure enough power quickly enough and cleanly enough, UPS, batteries, gensets, gas turbines, fuel cells and microgrids move from redundancy equipment to constraints on the build schedule. Representative screening pool: `CAT`, `CMI`, `GEV`, `BE`, `FLNC`.

## Utilities: Highest-Sensitivity Paths

**The highest beta is in jurisdictional electric utilities with signed large-load demand and recoverable transmission/distribution investment.** AEP is the clearest case: 63 GW of incremental load agreements, a $78 billion five-year capital plan and $33 billion of transmission investment. Dominion’s sensitivity comes from the Virginia/Northern Virginia data-center cluster; its 2026 Form 10-K cites a $64.7 billion 2026-2030 capex plan and flags accelerated new data-center demand and Loudoun County concentration risk. Duke’s $103 billion five-year plan is similarly supported by contracted AI and advanced-manufacturing demand.[^7][^9][^10]

**The second beta is in merchant generation/IPP and clean or dispatchable resources that can sign long-term PPAs.** If power spreads widen by 15%, independent generation, nuclear life extension, gas peakers and storage have more earnings elasticity than pure regulated wires; this group is also most exposed to fuel prices, capacity-market rules and validation of actual load.

**Water utilities are low-to-medium beta.** Data centers need water and heat-rejection permits, but hyperscalers are shifting toward lower-water cooling architectures. Water is more of a permitting/local-politics bottleneck than a first-order beneficiary of the $650 billion capex pool.

## Quant Implementation Suggestions

1. **Build a three-layer basket.** Core basket: electrical equipment, liquid cooling and backup power. Second layer: T&D utilities and transmission EPC. Third layer: IPP/generation, building products and water utilities.
2. **Do not regress only on hyperscaler capex.** Add `data-center GW queue`, `PJM/ERCOT/SPP large-load interconnection applications`, `transformer/switchgear lead times`, `power spreads`, and `liquid-cooling penetration`. These variables should explain within-Industrials/Utilities dispersion better than total capex alone.
3. **Risk controls.** When the theme is crowded, electrical equipment and liquid cooling valuations can front-run orders. Utilities are constrained by regulatory lag, customer cost-allocation disputes and residential-rate politics. Duke’s May 4, 2026 statement that large-load contracts now include added provisions to avoid shifting data-center connection costs to other customers shows that regulation and affordability are already thematic risks.[^11]

## Follow-Ups for Thematic Researcher

- Break down 2026 capex guidance by company: `AMZN`, `MSFT`, `GOOGL`, `META`, `ORCL`, separating GPU/server, land/building, electrical/cooling and power procurement.
- Pull PJM, ERCOT, SPP and MISO large-load interconnection queues and map them to `AEP`, `D`, `DUK`, `SO`, `NEE`, `CEG`, `VST`, `NRG` jurisdictions.
- Validate industrial suppliers through orders: data-center order mix, book-to-bill, lead times, backlog, liquid-cooling revenue disclosure and transformer/switchgear pricing.
- Neutralize at the portfolio level: orthogonalize semiconductor capex, interest-rate duration, natural-gas prices, copper prices and utility regulatory beta to avoid mistaking macro duration for AI capex alpha.

## Sources

[^1]: Goldman Sachs, [“Why AI Companies May Invest More than $500 Billion in 2026”](https://www.goldmansachs.com/insights/articles/why-ai-companies-may-invest-more-than-500-billion-in-2026), January 2026, citing $527 billion of consensus 2026 hyperscaler capex, up from $465 billion at the start of third-quarter earnings season, with up to $200 billion of upside.
[^2]: Morgan Stanley, [“AI Capex 2026: $740 Billion Signals Bank Tailwinds”](https://www.morganstanley.com/insights/articles/ai-capex-740-billion-banking-opportunity), March 11, 2026, saying major global technology companies had announced $740 billion of capex for the year, up 69% from 2025.
[^3]: TrendForce, [“North American AI Data Center Expansion Drives 2026 CapEx of Top Nine CSPs to US$830 Billion”](https://www.trendforce.com/presscenter/news/20260506-13033.html), May 6, 2026, forecasting about $830 billion of 2026 capex for the top nine CSPs, up 79% year over year.
[^4]: McKinsey, [“Beyond compute: Infrastructure that powers and cools AI data centers”](https://www.mckinsey.com/~/media/mckinsey/industries/advanced%20electronics/our%20insights/beyond%20compute%20infrastructure%20that%20powers%20and%20cools%20ai%20data%20centers/beyond-compute-infrastructure-that-powers-and-cools-ai-data-centers.pdf), 2025, estimating 220 GW of data-center demand by 2030 and $6.7 trillion of cumulative capex; $5.2 trillion of AI-workload capex, with $720 billion for power/cooling.
[^5]: IEA, [“Energy and AI: Executive summary”](https://www.iea.org/reports/energy-and-ai/executive-summary), 2025, saying global data-center electricity use was 415 TWh in 2024 and reaches about 945 TWh in 2030; U.S. data centers account for nearly half of U.S. electricity-demand growth to 2030.
[^6]: S&P Global Market Intelligence / RRA, [“Surging energy demand puts US utility capex forecast near $1.3T in 2026–30”](https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/04/surging-energy-demand-puts-us-utility-capex-forecast-near-1-3t-in-2026-30), April 2026, forecasting about $1.3 trillion of U.S. energy-utility capex in 2026-2030 and 374 TWh plus more than 45 GW of peak load from large loads by 2035.
[^7]: AEP, [“AEP Reports First-Quarter 2026 Earnings, Reaffirms Guidance and Increases Five-Year Capital Plan”](https://www.aep.com/news/stories/view/11917/), May 5, 2026, disclosing 63 GW of incremental load agreements, a $78 billion five-year capital plan and $33 billion of transmission investment.
[^8]: Morgan Stanley, [“Powering AI: Markets Race to Invest in AI Energy Solutions”](https://www.morganstanley.com/insights/articles/powering-ai-energy-market-outlook-2026), March 2026, saying U.S. data-center demand could reach 74 GW by 2028 with about a 49 GW power-access shortfall; power spreads could rise 15%, creating about $350 billion of value across the power supply chain.
[^9]: Duke Energy, [Q4 2025 earnings release PDF](https://s201.q4cdn.com/583395453/files/doc_financials/2025/q4/Q4-2025-Earnings-Release-vF.pdf), February 10, 2026, disclosing a $103 billion five-year capital plan, 9.6% earnings-base growth through 2030 and contracted demand from AI and advanced manufacturing.
[^10]: Dominion Energy, [2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/715957/000119312526063120/d-20251231.htm), February 2026, disclosing a $64.7 billion 2026-2030 capital plan and flagging accelerated new data-center demand and Loudoun County concentration risk.
[^11]: Duke Energy, [“Duke Energy finalizes two initiatives to deliver more than $5 billion in cost-saving benefits to customers”](https://investors.duke-energy.com/news/news-details/2026/Duke-Energy-finalizes-two-initiatives-to-deliver-more-than-5-billion-in-cost-saving-benefits-to-customers/default.aspx), May 4, 2026, saying large-load customer contracts, including data centers, now include additional provisions intended to keep connection costs from shifting to other customers.
