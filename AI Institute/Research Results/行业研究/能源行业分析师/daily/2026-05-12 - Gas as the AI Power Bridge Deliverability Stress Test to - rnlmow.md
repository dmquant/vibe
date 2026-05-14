---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# Gas as the AI Power Bridge: Deliverability Stress Test to 2028

Kind: **daily**
Analyst: **Energy Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Energy Analyst]]
- Analyst level: [[行业研究]]

# Gas as the AI Power Bridge: Deliverability Stress Test to 2028

**Card 02 / 08 | Energy Analyst | Stance: stress-test | Work-date: 2026-05-12 (Asia/Singapore)**

As of **2026-05-12**, I stress-test Card 01's "gas bridge" thesis and narrow it: the global oil-and-gas complex has enough gas molecules and LNG projects on paper to cover the central AI-data-center fuel requirement through 2028, but it cannot convert all of that supply into **local, firm, data-center-ready megawatts** on the same schedule. The binding constraints are not global gas reserves; they are gas turbines, local gas pipes, interconnection, air permits, and grid reserve margins. Coal-life extension remains the non-clean backstop for 2025-2028 reliability, especially in the United States and China.

## Core Judgment

**Partial support, hard stress-test.** The gas bridge is real but smaller and less flexible than the market narrative implies. My base case is that the global gas/LNG system can practically deliver about **25-40 GW of incremental firm equivalent power** to AI-heavy grids by 2028, with perhaps **15-25 GW in the United States**, **3-6 GW in the Middle East**, and **3-8 GW across selected Asian markets**. That is enough for the IEA-style central path, where gas and coal together meet a little over 40% of incremental data-center electricity demand, but it is not enough for the high-end U.S. data-center scenario without coal-retirement delays, demand response, or project slippage.

The important distinction is:

| Question | Answer through 2028 |
|---|---|
| Are there enough global gas molecules? | Broadly yes, if LNG ramp-ups arrive on schedule. |
| Are there enough LNG cargoes for every importing AI grid? | Mostly yes at a price, but cargoes are already committed into Europe/Asia security demand. |
| Are there enough gas turbines and local pipes to make firm AI megawatts? | No; this is the main bottleneck. |
| Can gas alone replace coal extension in the 2025-2028 gap? | No; coal extension is an ugly but material reliability backstop. |

## Demand Frame: The AI Load Is Big Locally, Still Small Globally

The IEA's updated AI-energy work says global data-center electricity use was about **485 TWh in 2025** and is projected to roughly double to **950 TWh in 2030**, or around **3% of global power demand**. AI-focused data-center demand grows faster, roughly tripling over the period. A simple interpolation puts 2028 data-center electricity demand near **760 TWh**, implying about **275-285 TWh** of incremental annual load from 2025 to 2028, or roughly **31-33 GW of average power**.

The United States is the sharper bottleneck. LBNL's 2024 U.S. data-center report estimates U.S. data centers consumed **176 TWh in 2023**, or **4.4%** of U.S. electricity consumption, and could reach **325-580 TWh in 2028**, equal to **74-132 GW** of total power demand at 50% average utilization and **6.7-12.0%** of U.S. electricity consumption. That is a much harsher local delivery problem than the global TWh number suggests.

Rule of thumb used in this card: **1 Bcf/d of natural gas can support about 6 GW of continuous CCGT output** at a 7.0-7.3 MMBtu/MWh heat rate. **1 mtpa of LNG can support about 0.8 GW** of continuous CCGT output before plant availability and grid constraints.

## Supply Stack: Molecules Are Available, Deliverability Is Not

### 1. U.S. shale and LNG: enough growth, but most is pre-empted by export demand

EIA's April 2026 STEO projects U.S. dry gas production rising from **107.74 Bcf/d in 2025** to **112.60 Bcf/d in 2027**, a gain of **4.86 Bcf/d**. At the conversion rule above, that production growth is a theoretical **29 GW** of continuous gas-fired power. But EIA also projects U.S. LNG exports rising from **15.1 Bcf/d in 2025** to **18.6 Bcf/d in 2027**, absorbing **3.5 Bcf/d**, or about **21 GW-equivalent**. The residual margin for incremental domestic power demand is therefore much thinner than the production headline.

This matters for data centers because the easiest gas is not necessarily where the load is. Haynesville and Permian supply is structurally advantaged for Gulf Coast LNG and Texas power. Appalachia is closer to PJM/Virginia load pockets, but new pipe remains politically and legally harder than drilling wells. FERC's 2025 market review shows U.S. pipeline additions have been heavily tied to Gulf Coast LNG feedgas, including a **1.1 Bcf/d** Plaquemines-linked pipeline completed in May 2025; that buildout does not automatically solve Virginia, Illinois, Georgia, or Arizona AI-cluster deliverability.

### 2. North American LNG wave: powerful, but not the same as local AI power

EIA estimates North American LNG export capacity can rise from **11.4 Bcf/d in 2023** to **24.4 Bcf/d in 2028** if projects under construction start as planned. The increase is **13.0 Bcf/d**, theoretically enough to fuel roughly **78 GW** of continuous CCGT output somewhere in the world. U.S. projects account for **9.7 Bcf/d**, Canada **2.5 Bcf/d**, and Mexico **0.8 Bcf/d**.

IEA's Q1 2026 gas report confirms the same direction: global LNG production is forecast to grow by **more than 7%**, or **over 40 bcm**, in 2026, with North America providing over **85%** of the increase. The IEA's LNG capacity tracker also shows about **345 bcm/year** of new LNG export capacity due online between 2025 and 2030 from already-FID projects under construction.

The stress-test caveat: LNG capacity is export capacity, not a firm AI-power contract. Europe still needs LNG for Russian-gas phaseout security; Asia still has winter price elasticity; and many cargoes are contracted long term. LNG helps global balancing, but the AI grid only receives the benefit if regas, downstream pipes, power plants, and interconnection exist at the load node.

### 3. LNG shipping and regas: global capacity looks less binding than downstream pipes

GIIGNL's 2025 annual report puts 2024 LNG trade at **406 mt**, liquefaction capacity at **492 mtpa**, regasification capacity at **1,188 mtpa**, and the LNG vessel fleet at **831 vessels**. The same broad picture appears in IGU data: 2024 LNG trade was about **411 mt** and the active LNG carrier fleet was above **700 vessels**. This means the global bottleneck is not aggregate regas capacity. It is where regas terminals connect, whether the inland pipe can move gas to data-center load, and whether power plants exist behind the gas meter.

## The Real Bottleneck: Converting Gas Into Megawatts

The tightest physical constraint is gas-fired power equipment. Wood Mackenzie reported in April 2026 that global gas-turbine orders stood at **110 GW** at end-2025 against manufacturing capacity of only **60-70 GW**, with order books sold through 2027 and lead times around **six years**. Turbine prices are expected to reach **$600/kW** by end-2027, up **195%** from 2019.

That changes the cost curve. AI buyers may be willing to pay high energy prices, but they cannot pay a turbine into existence for 2026-2027 delivery. Existing gas plants can run harder where pipelines and emissions permits allow. New large CCGT projects ordered now are more realistically a 2029-2031 supply answer, not a 2026-2028 answer.

## Marginal Cost Curve for AI-Firm Power

| Layer | 2025-2028 deliverability | Indicative marginal cost | Main constraint |
|---|---:|---:|---|
| Existing U.S. CCGT higher utilization | High where pipe is available | Henry Hub fuel cost at EIA **$3.67/MMBtu in 2026** and **$3.59/MMBtu in 2027** implies roughly **$25-30/MWh** fuel-only; all-in existing-power price often **$45-70/MWh** before congestion | Pipeline deliverability, summer peaks, emissions limits |
| Existing LNG-import gas plants | Medium | LNG-linked fuel often **$80-140/MWh** fuel-only when JKM/TTF spreads are wide; all-in power can exceed **$110-180/MWh** | Cargo competition, FX, regas-to-grid pipes |
| New U.S. CCGT | Low before 2028 | Capital cost inflation pushes practical all-in economics toward **$70-110/MWh** even with U.S. gas | Turbines, transformers, interconnection, air permits |
| Reciprocating engines / mobile turbines / behind-the-meter gas | Medium for small blocks | Often above utility CCGT cost; valuable for time-to-power rather than cheap energy | NOx permits, fuel logistics, noise, uptime |
| Coal-life extension | High where units still exist | Often competitive on cash cost, but high CO2 and local-pollution cost | Policy tolerance, coal logistics, ESG pressure |
| New nuclear / SMR / geothermal | Low before 2028 | Strategic option, not near-term marginal supply | Licensing, supply chain, execution time |

## Coal Extension: Not Clean, But Hard to Avoid

Coal is not the preferred strategic bridge, but it is the fastest reliability backstop because the capacity already exists. EIA reported that U.S. owners planned **12.3 GW** of retirements in 2025 but retired only **4.6 GW**, the least since 2008, after DOE emergency orders delayed several coal plants. For 2026, **6.4 GW** of coal capacity and **4.6 GW** of older gas capacity are scheduled to retire, but EIA explicitly notes that renewed emergency orders could alter the outcome.

EIA also reported that U.S. coal capacity was scheduled to fall from **172 GW in May 2025** to **145 GW by end-2028**, a **27 GW** decline, with **58%** of planned retirements in the Midwest and Mid-Atlantic. Those are precisely the broad regions where PJM/MISO data-center and industrial load stress is rising. Delaying even half of that retirement wedge would preserve about **13-14 GW** of nameplate dispatchable capacity. At a 50-60% capacity factor, that is roughly **60-75 TWh/year**, comparable to a large share of near-term U.S. AI incremental energy.

China is the other coal reality. IEA's AI-energy supply analysis says China's current data-center electricity mix is nearly **70% coal**, and coal remains the largest incremental source for Chinese data-center electricity to 2030, adding nearly **90 TWh**, matched by nearly **90 TWh** of renewables. That supports Card 01's China nuance: the Chinese expression of the AI-energy bridge is more administratively executable, but it is not clean in the 2025-2028 window.

## Bottom-Up 2028 Deliverability Estimate

| Region | Practical incremental firm power to AI-heavy grids by 2028 | Why not higher? |
|---|---:|---|
| United States | **15-25 GW** | U.S. gas molecules are available, but LNG exports absorb most production growth; turbines, PJM/Virginia pipes, interconnection, and local permits bind. |
| Canada / Mexico export-linked systems | **2-4 GW** | LNG projects ramp, but domestic AI clusters are smaller; infrastructure is export-oriented. |
| Middle East | **3-6 GW** | Gas-rich systems can co-site power with sovereign AI campuses, but LNG exports and domestic cooling demand compete. |
| China | **5-10 GW gas-equivalent**, plus larger coal support | Gas is not the main bridge; coal, renewables, and nuclear dominate actual delivery. |
| Europe | **0-2 GW** | ESG, gas-security politics, high prices, and grid permitting make gas a poor new-build answer. |
| Rest of Asia | **3-8 GW** | LNG importability exists, but price sensitivity, regas-to-grid pipes, and utility credit constrain delivery. |
| **Global practical range** | **25-40 GW** | This is firm equivalent, not headline gas-fired nameplate. |

The conclusion is that global oil and gas can absorb the central AI-power shock, but only if "absorb" means a portfolio of higher utilization at existing gas plants, selective new behind-the-meter gas, LNG balancing, coal-retirement delay, and slower interconnection for speculative data-center projects. If the high end of LBNL's U.S. 2028 range materializes, gas alone cannot bridge it.

## Implications for the Session Thesis

Card 01 is directionally right: AI infrastructure is forcing a pragmatic fossil re-coupling in the 2025-2028 baseload window. This card adds two constraints:

1. The best long exposure is not simply "gas commodity beta." It is **gas midstream near data-center load, turbine scarcity, grid equipment, and regulated utilities with approved cost recovery**.
2. Coal-life extension should be modeled as a reliability option, not as an ESG reversal thesis. Its value is time-to-power and reserve margin, not long-run growth.

Investment read-through: favor U.S. and Chinese gas/power infrastructure with physical proximity to AI load; be selective on LNG names because much of the LNG wave is already needed for Europe/Asia energy security; keep coal exposure tactical and cash-yield based; avoid assuming every announced AI campus receives firm power by 2028.

## Handoff

The next unanswered question belongs to **utilities-analyst**: where can the grid actually interconnect this load, who pays for the transmission and reserve-margin upgrades, and which regulated utilities can earn on the AI load without socializing stranded-cost risk onto ratepayers?

## Sources

1. IEA, **Key Questions on Energy and AI**, executive summary, accessed 2026-05-12: https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary  
2. IEA, **Energy and AI**, energy supply chapter, accessed 2026-05-12: https://www.iea.org/reports/energy-and-ai/energy-supply-for-ai  
3. Lawrence Berkeley National Laboratory, **2024 United States Data Center Energy Usage Report**, published 2024: https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report.pdf  
4. EIA, **Short-Term Energy Outlook: Natural Gas**, release dated 2026-04-07: https://www.eia.gov/outlooks/steo/report/natgas.php  
5. EIA, **North America's LNG export capacity is on track to more than double by 2028**, published 2024-09-03: https://www.eia.gov/todayinenergy/detail.php?id=64128  
6. IEA, **Gas Market Report, Q1-2026**, published 2026-01-23: https://www.iea.org/reports/gas-market-report-q1-2026  
7. IEA, **Global LNG Capacity Tracker**, status as of 2026-03-17: https://www.iea.org/data-and-statistics/data-tools/global-lng-capacity-tracker  
8. GIIGNL, **2025 Annual Report**, 2024 LNG market data: https://www.giignl.org/annual-report  
9. Wood Mackenzie, **Gas turbine prices soar 195% as market faces supply-demand crisis**, published 2026-04: https://www.woodmac.com/press-releases/gas-turbine-prices-soar-195-as-market-faces-supply-demand-crisis/  
10. EIA, **Retirement delays of U.S. electric generating capacity may continue in 2026**, published 2026-03: https://www.eia.gov/todayinenergy/detail.php?id=67206  
11. EIA, **Most of the planned coal capacity retirements are in the Midwest or Mid-Atlantic regions**, published 2025-07: https://www.eia.gov/todayinenergy/detail.php?id=65744  
12. FERC, **2025 State of the Markets**, published 2026-03: https://www.ferc.gov/sites/default/files/2026-03/26_State-of-the-Market_0324_1430.pdf  

---

**Metadata footer:** Board 3e77be32-74ee-4bcf-9cd4-59a682e84fbf | Card 02 | Energy Analyst | Work-date 2026-05-12 (Asia/Singapore)
