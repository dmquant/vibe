---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# Conclusion: SoftBank's 1GWh Battery Factory Can Help Decarbonize AI Data Centers, but It Is Not Enough on Its Own

Kind: **daily**
Analyst: **Energy Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Energy Analyst]]
- Analyst level: [[行业研究]]

# Conclusion: SoftBank's 1GWh Battery Factory Can Help Decarbonize AI Data Centers, but It Is Not Enough on Its Own

Anchor date: 2026-05-11.

## Priority Conclusions

1. **It is not enough to support zero emissions by itself.** The reported 1GWh refers to annual energy-storage-system production capacity, not 1GW of generation, and it does not create electricity. If deployed at the data-center level, 1GWh of batteries can shift renewable electricity from low-price or high-generation hours into high-load hours and provide backup/peak shaving; zero emissions still depend on 24/7 carbon-free procurement, grid capacity, renewable overbuild, workload scheduling, and efficiency.
2. **It matters for the initial cluster, but is small for the long-term cluster.** 1GWh of storage would cover about 6.7 hours at the 150MW Osaka Sakai site and about 5.0 hours for a 200MW initial two-site Japan cluster; for a 550MW long-term Japan cluster, it covers only about 1.8 hours. Assuming 85% round-trip efficiency and one full cycle per day, annual discharge is about 310GWh, equal to only about 6.4% of annual power use for a 550MW cluster.
3. **Base-case contribution to long-term utility-bill reduction: about 5-7% gross, or about 2-4% on a net economic basis.** Using a Japan large-industrial/extra-high-voltage power price of about JPY 18-20/kWh, a 550MW cluster implies annual power spending of about JPY 86.7-96.4bn. If 1GWh of storage cycles daily and is charged with non-utility renewable power, it could reduce utility power purchases by about JPY 5.6-6.2bn per year, or about 6.4%; after renewable/PPA charging cost and losses, true all-in energy-cost savings are more likely about JPY 1.9-3.1bn per year, or about 2-4%.
4. **If SoftBank uses multiple years of 1GWh/year output internally, the contribution can scale linearly, but renewable supply and power-interface limits will bind.** For example, 5GWh of cumulative storage cycling once per day would theoretically discharge about 1.55TWh per year, covering about 32% of the annual demand of a 550MW cluster; this requires enough low-carbon charging energy, inverter power, grid capacity, and dispatch control.

## Evidence Base

| Item | Public Information | Analytical Meaning |
|---|---:|---|
| SoftBank battery project | A 2026-05-11 media report says SoftBank plans to work with Korea's Cosmos Lab and DeltaX to mass-produce energy storage systems at the former Sharp-related Sakai site in Osaka, targeting 1GWh of annual output; the batteries will support SoftBank AI data centers and are also planned for grid, factory, industrial, and residential uses.[1] Bloomberg previously reported that SoftBank's mobile unit planned to transform part of its Osaka factory into a large-scale battery line to power its own AI data centers.[2] | This is storage manufacturing capacity, not new electricity generation. |
| Osaka Sakai AI data center | SoftBank's 2024 announcement described an initial Sakai data center of about 150MW, with future expansion to more than 400MW.[3] Its 2025 Integrated Report updated the target to operations in 2026 at about 150MW, with future expansion to more than 250MW.[4] | Initial single-site annual consumption is about 1.31TWh; the more conservative long-term 250MW case is about 2.19TWh. |
| Hokkaido Tomakomai AI data center | SoftBank materials say the project is scheduled to open in FY2026, starts at about 50MW, can expand to 300MW, and emphasizes local Hokkaido renewable procurement and fully renewable-power operation.[4][5] | Initial annual consumption is about 0.44TWh; long-term consumption is about 2.63TWh. |
| SoftBank decarbonization targets | SoftBank targets carbon neutrality for Scope 1 and Scope 2 by 2030, aims to shift 100% of business electricity use to renewable energy by FY2030, and expects more than 50% to be procured from renewable energy sources.[6] | 1GWh of storage should be treated as one tool for 24/7 matching, not the target itself. |
| Japan power-price and emissions context | ANRE/METI materials put Japan's 2024 industrial electricity price in the roughly JPY 20/kWh range, while 2025 extra-high-voltage market data is around JPY 17/kWh; the FY2025 renewable-energy surcharge is JPY 3.98/kWh.[7][8] Japan's FY2024 end-use electricity CO2 intensity was 0.45kg-CO2/kWh, with generation mix at 23.1% renewables, 9.4% nuclear, and 67.5% thermal power.[9] | Both the bill and emissions baselines are high, so storage has value, but zero emissions require incremental carbon-free supply. |

## Quantitative Assessment

Core assumptions: 1GWh is storage capacity deployed at the data-center side; round-trip efficiency is 85%; the system completes one full cycle per day; battery degradation, power-capacity constraints, backup reserve, and time-of-use tariff details are not included. If the system cycles 0.5 times per day, the annual discharge share and bill contribution below are roughly halved.

| Scenario | Load Capacity | Annual Power Use | Hours Covered by 1GWh | 310GWh Annual Discharge as Share of Load |
|---|---:|---:|---:|---:|
| Osaka Sakai phase 1 | 150MW | 1.31TWh | 6.7 hours | 23.6% |
| Initial Japan combination: Sakai 150MW + Tomakomai 50MW | 200MW | 1.75TWh | 5.0 hours | 17.7% |
| Long-term disclosed Japan combination: Sakai 250MW + Tomakomai 300MW | 550MW | 4.82TWh | 1.8 hours | 6.4% |
| Upside case: Sakai 400MW + Tomakomai 300MW | 700MW | 6.13TWh | 1.4 hours | 5.1% |

Emissions sensitivity: if 310GWh/year of battery discharge fully replaces average Japanese grid electricity, avoided emissions are about 140,000 tonnes of CO2 per year using 0.45kg-CO2/kWh. This is not automatic: real emissions reduction occurs only when the battery charges from additional or otherwise curtailed low-carbon electricity; if it charges from thermal-heavy night power and discharges later, it may merely shift emissions.

## Utility-Bill Reduction Forecast

| Basis | Calculation | Result | Interpretation |
|---|---:|---:|---|
| Long-term Japan cluster utility-bill baseline | 550MW × 8,760 hours × JPY 18-20/kWh | About JPY 86.7-96.4bn/year | Based on Sakai 250MW + Tomakomai 300MW. |
| Gross bill-offset value of 1GWh storage | 310GWh × JPY 18-20/kWh | About JPY 5.6-6.2bn/year | Assumes charging power does not run through the utility bill and the battery cycles once per day. |
| Gross contribution rate | JPY 5.6-6.2bn ÷ JPY 86.7-96.4bn | **About 6.4%** | This is an upper-bound estimate for utility-bill reduction. |
| Net economic contribution | 310GWh × JPY 6-10/kWh net spread | About JPY 1.9-3.1bn/year | Closer to true cost savings after PPA/self-generated renewable opportunity cost, losses, and O&M. |
| Net contribution rate | JPY 1.9-3.1bn ÷ JPY 86.7-96.4bn | **About 2-4%** | Better for estimating long-term all-in energy-cost reduction. |

For thematic fund-flow purposes, the 1GWh factory is more a signal of AI data-center energy vertical integration than a single variable capable of repricing SoftBank's long-term electricity-cost curve. The market should be cautious if it interprets the project as "SoftBank can self-supply zero-emission electricity"; the stronger interpretation is that SoftBank is locking in storage supply to reduce exposure to peak/off-peak spreads and grid-connection risk.

## Investment Implications

- **Positive:** Putting AI data centers, storage manufacturing, and solar/energy-equipment manufacturing into the same Sakai factory ecosystem can reduce supply-chain delivery risk and strengthen SoftBank's credibility in negotiations with utilities and local governments.
- **Constraint:** 1GWh of storage cannot replace procurement of more than 4.8TWh per year of carbon-free electricity; if the Sakai site returns to the earlier 400MW-plus plan, the storage share falls further to about 5%.
- **True zero-emission drivers:** Hokkaido local renewables, long-term PPAs, nuclear/non-fossil certificate quality, 24/7 matching rules, grid capacity, and GPU workload scheduling.
- **Cost drivers:** Battery value comes not only from energy-price spreads but also from demand-charge peak shaving, backup substitution, lower diesel-backup operation, reduced renewable curtailment, and lower grid-access costs; these require disclosure of MW power rating, cycle life, usable capacity, and contracted power prices before a precise model is possible.

## Follow-Up Items

1. Verify the full SoftBank 2026-05-11 official release: confirm whether 1GWh is annual output from FY2027 onward or first-phase installed capacity, and confirm AX Factory/GX Factory ownership.
2. Obtain battery-system parameters: usable capacity, MW power rating, round-trip efficiency, cycle life, end-of-life capacity, warranties, and safety certifications.
3. Obtain power contracts for Sakai and Tomakomai: extra-high-voltage basic charges, demand charges, time-of-use rates, renewable surcharges, PPA prices, and treatment of non-fossil certificates.
4. Build a 24/7 carbon-free matching model: hourly load, Hokkaido and Kansai renewable output, curtailment, JEPX regional prices, and grid constraints.
5. If SoftBank discloses multiple years of internal use of annual output, rerun the bill and emissions sensitivities for cumulative storage of 3GWh, 5GWh, and 10GWh.

## Sources

[1] Economic Daily News, 2026-05-11, "SoftBank enters battery manufacturing; targets 1GWh annual zinc-halogen battery output at former Sharp plant": https://money.udn.com/money/story/5599/9494915  
[2] Bloomberg, 2026-04-23, "SoftBank Prepares to Manufacture Batteries for AI Data Centers": https://www.bloomberg.com/news/articles/2026-04-23/softbank-prepares-to-manufacture-batteries-for-ai-data-centers  
[3] SoftBank Corp., 2024-06-07, "SoftBank Corp. to Construct Large-scale AI Data Center that Utilizes Sharp Sakai Plant": https://www.softbank.jp/en/corp/news/press/sbkk/2024/20240607_01/  
[4] SoftBank Corp. Integrated Report 2025, AI data-center strategy page: https://www.softbank.jp/corp/set/data/ir/documents/integrated_reports/pdf/sbkk_integrated_report_2025_02.pdf  
[5] SoftBank News, 2025-05-01, "Laying the Foundation for the AI Era: Construction Begins on 'Hokkaido Tomakomai AI Data Center'": https://www.softbank.jp/en/sbnews/entry/20250501_01  
[6] SoftBank Corp., "SoftBank's Net Zero": https://www.softbank.jp/en/corp/sustainability/special/netzero/  
[7] ANRE/METI, "Japan Energy 2025": https://www.enecho.meti.go.jp/en/category/brochures/pdf/japan_energy_2025.pdf  
[8] METI, 2025-03-21, "METI Sets the Surcharge Rate for FY2025": https://www.meti.go.jp/english/press/2025/0321_001.html  
[9] METI, 2026-04-14, "FY2024 Energy Supply and Demand Report (Revised Report)": https://www.meti.go.jp/english/press/2026/0414_001.html  
[10] IEA, "Artificial Intelligence" topic page: https://www.iea.org/topics/artificial-intelligence
