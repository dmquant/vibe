---
source: ai-institute
resource_type: research-result
report_kind: mailbox-response
analyst_level: "行业研究"
content_error: ""
---

# 688027 Power-Tariff Sensitivity and Per-Qubit Running Cost Check

Kind: **mailbox-response**
Analyst: **TMT Analyst**

## Links

- Report type: [[mailbox-response]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

# 688027 Power-Tariff Sensitivity and Per-Qubit Running Cost Check

Anchor date: 2026-05-11, from local `date +%Y-%m-%d`. Bottom line: do not map the power-cost narrative from tonight's U.S. AI/cloud earnings directly onto 688027. QuantumCTek (688027.SH) is currently mainly a supplier of quantum communication products, quantum-computing full systems/core components, and technical services, not an operator of large-scale quantum compute capacity. Direct power-tariff erosion to EBIT should be treated as R&D, testing, and demonstration cloud-platform operating cost, not as a GPU-cluster-style core COGS line.

## Priority Conclusions

1. **The right per-qubit running-cost metric is “annual system electricity bill / physical qubits,” not instantaneous energy for a single quantum gate.** For superconducting quantum computers, the power load mostly comes from dilution refrigerators, room-temperature control electronics, and supporting infrastructure. The qubit's own gate-operation energy is not the main financial cost. RAND's rough superconducting-transmon estimate assumes 4,158 qubits in one dilution refrigerator drawing about 26 kW, or **6.25 W/qubit**; RAND also stresses that this is an “extremely rough estimate” and excludes both scale economies and classical processing overhead for error correction.[7]

2. **Using 688027's disclosed/reported domestic systems and Anhui commercial/industrial tariffs, estimated per-qubit electricity cost is about RMB 271-521 per year for Tianyan-504 under a 26-50 kW system-power assumption, or RMB 0.74-1.43 per day.** For a 287-qubit system, the same power range implies about **RMB 476-916 per year per qubit**. This is not a first-order EBIT issue.

3. **Incremental erosion from higher tariffs is small: every RMB 0.10/kWh increase adds only about RMB 43,800 of annual EBIT pressure for one 50 kW system, or RMB 22,800 for one 26 kW system.** Even if 688027 itself carried electricity for 10 fully operated 50 kW systems, a RMB 0.10/kWh tariff increase would add only about **RMB 438,000 per year**, equal to **8.4%** of 2025 profit before tax of RMB 5.2264 million. That “10 systems fully self-operated” case is an upper-bound assumption and does not match the currently disclosed business model of selling systems/components and providing services.

4. **The real EBIT drivers for 688027 remain project acceptance timing, gross margin, R&D expense, and sustainability of subsidies/investment income, not electricity.** In 2025, the company reported revenue of RMB 310 million, net profit attributable to shareholders of RMB 5.3919 million, quantum-computing revenue of RMB 120 million (+111.82% YoY), and R&D investment of RMB 123 million, equal to 39.7% of revenue. In 2026Q1, revenue was RMB 22.9995 million, profit before tax was -RMB 18.8867 million, and R&D investment was RMB 25.3621 million.[1][5]

## Verified Facts

| Item | Verified Result | Implication for Tariff Sensitivity |
|---|---:|---|
| Business positioning | The company develops, produces, sells, and services quantum communication, quantum computing, and quantum precision-measurement products. Quantum-computing products include superconducting quantum full systems, control systems, dilution refrigerators, and other core components.[2] | Most operating electricity should be borne by customers/operators; the company's direct exposure is more likely R&D, testing, and demonstration cloud-platform electricity. |
| 2025 quantum-computing revenue | RMB 120 million, +111.82% YoY; the company provided full-system construction services for China Telecom Quantum Group and Hefei Advanced Computing Center.[1] | Revenue recognition looks driven by project delivery/acceptance, not by selling qubit-hours. |
| Domestic system scale | “Tianyan-504” completed acceptance, “Tianyan-287” completed debugging, and overseas delivery of a 25-qubit full system is underway.[3] | Use 504 and 287 physical qubits for per-qubit electricity allocation. |
| 2025 profitability baseline | Revenue of RMB 310 million, profit before tax of RMB 5.2264 million, net profit attributable to shareholders of RMB 5.3919 million, and R&D investment of RMB 123 million.[1][3] | The profit base is thin, so small costs can look large as a percentage of profit, but the absolute power cost remains small. |
| 2026Q1 baseline | Revenue of RMB 22.9995 million, profit before tax of -RMB 18.8867 million, net loss attributable to shareholders of -RMB 19.0136 million, and R&D investment of RMB 25.3621 million.[5] | Near-term losses are still mainly driven by revenue seasonality and R&D expense. |
| Anhui power tariffs | In March 2026, Anhui commercial/industrial non-time-of-use tariffs were about RMB 0.5160-0.6301/kWh depending on voltage class. In April 2026, the agency-purchase price was RMB 0.34453/kWh and system operating charges were RMB 0.0998/kWh. In May 2025, the agency-purchase price was RMB 0.41334/kWh.[4][6] | The model uses RMB 0.60/kWh as the central all-in flat commercial/industrial tariff and RMB +0.10/kWh as the upside tariff stress case. |

## Per-Qubit Running-Cost Estimate

Formula: annual electricity bill = system power in kW × 8,760 hours × tariff in RMB/kWh. Per-qubit annual electricity cost = annual electricity bill / physical qubits. The table uses **RMB 0.60/kWh** throughout.

| Scenario | Qubits | System-Power Assumption | Annual Electricity Bill | Per-Qubit Annual Cost | Per-Qubit Daily Cost | EBIT Pressure From RMB 0.10/kWh Increase |
|---|---:|---:|---:|---:|---:|---:|
| Tianyan-504, refrigerator-level reference | 504 | 26 kW | RMB 136,700 | RMB 271 | RMB 0.74 | RMB 22,800/year |
| Tianyan-504, full system plus control-electronics stress case | 504 | 50 kW | RMB 262,800 | RMB 521 | RMB 1.43 | RMB 43,800/year |
| Tianyan-287, refrigerator-level reference | 287 | 26 kW | RMB 136,700 | RMB 476 | RMB 1.31 | RMB 22,800/year |
| Tianyan-287, full system plus control-electronics stress case | 287 | 50 kW | RMB 262,800 | RMB 916 | RMB 2.51 | RMB 43,800/year |
| RAND scaled reference | Not applicable | 6.25 W/qubit | Not applicable | RMB 33 | RMB 0.09 | RMB 0.55/qubit/year |

Note: NIST says pulse-tube refrigerators are common workhorse devices in ultralow-temperature experiments and consume significant electricity; demand for cryogenic systems in quantum computing is likely to expand.[8] A 100-qubit-scale superconducting-systems paper shows that cooling power at the coldest stage of a dilution refrigerator is in the microwatt range, making wiring heat load and refrigeration efficiency the scaling bottlenecks.[9] Financial modeling should therefore treat electricity as the operating cost of the whole cryogenic and control stack, not as the energy consumption of the qubit chip itself.

## EBIT Erosion Estimate

| Stress Test | Incremental Annual Electricity Cost | % of 2025 Profit Before Tax of RMB 5.2264 Million | % of 2025 R&D Investment of RMB 123 Million | Assessment |
|---|---:|---:|---:|---|
| One 26 kW system, tariff +RMB 0.10/kWh | RMB 22,800 | 0.44% | 0.02% | Immaterial. |
| One 50 kW system, tariff +RMB 0.10/kWh | RMB 43,800 | 0.84% | 0.04% | Immaterial. |
| Ten 50 kW systems, tariff +RMB 0.10/kWh | RMB 438,000 | 8.38% | 0.36% | Noticeable only if the company fully self-operates multiple systems; this is closer to an upper-bound case under current disclosures. |
| Ten 50 kW systems, tariff +RMB 0.20/kWh | RMB 876,000 | 16.76% | 0.71% | Even this extreme case is still smaller than quarterly project-acceptance swings and R&D-expense volatility. |

Key interpretation: 688027 only just turned profitable in 2025, with profit before tax of RMB 5.2264 million, so any small cost item can appear meaningful as a percentage of profit. But compared with RMB 310 million of revenue and RMB 123 million of R&D investment, power-tariff increases are not a first-order EBIT driver. If U.S. cloud companies emphasize power/capacity constraints tonight, that should be read as a MW/GW-scale AI data-center capex and grid-availability issue. Domestic quantum names are still mostly research and project-delivery businesses, with power loads typically in kW to tens of kW.

## Committee-Ready Wording

For 688027, higher electricity prices are not a core bearish variable for EBIT. Using 26-50 kW per system and RMB 0.60/kWh, a 504-qubit superconducting quantum computer has an estimated per-qubit annual electricity cost of about RMB 271-521. Every RMB 0.10/kWh tariff increase adds only RMB 22,800-43,800 of annual EBIT pressure per system. Because the company's current revenue mainly comes from full-system/component delivery and technical services, much of the electricity cost should sit with customers or operators. The key variables to track are quantum-computing project acceptance, gross margin, R&D expense ratio, and sustainability of subsidies and investment income.

## Follow-Up Items

1. Confirm with company IR whether “Tianyan-504” and “Tianyan-287” are owned and operated by customers, and whether QuantumCTek bears any ongoing electricity cost or cloud-platform revenue-share cost.
2. Obtain or wait for disclosure on the actual PUE, facility tariff, annual machine hours, and system utilization of the quantum cloud platform / Hefei hybrid quantum-supercomputing center.
3. During tonight's U.S. earnings calls, separate AI data-center electricity as a COGS/capacity constraint from quantum full-system companies, where electricity is mostly R&D testing and after-sales operations; the two should not be mapped one-to-one.

## Sources

[1] Shanghai Stock Exchange, “QuantumCTek: Reports 2025 Net Profit of RMB 5.3919 Million, Reversing Losses Year-on-Year,” 2026-03-30. https://english.sse.com.cn/news/newsrelease/digest/c/c_20260330_10813449.shtml  
[2] QuantumCTek Co., Ltd., “2025 Annual Report Summary,” 2026-03-24. https://pdf.dfcfw.com/pdf/H2_AN202603241820724002_1.pdf  
[3] Securities Times, “QuantumCTek Turns Profitable in 2025; Quantum-Computing Revenue Doubles,” 2026-03-24. https://www.stcn.com/article/detail/3695900.html  
[4] State Grid Anhui Electric Power, “Agency-Purchase Commercial and Industrial User Tariff Table / Agency-Purchase Price Information Table (Effective March and April 2026).” https://www.ahgc.gov.cn/file_cz/2/202604/20260409e07d3b65b56c4421bd8fb8af250bb90e.pdf and https://www.ahgc.gov.cn/file_cz/2/202604/202604091d0d4ed83352476bb52684a7e41f398e.pdf  
[5] QuantumCTek Co., Ltd., “2026 First-Quarter Report,” 2026-04-20. https://pdf.dfcfw.com/pdf/H2_AN202604201821342674_1.pdf  
[6] Anhui Development and Reform Commission, “Notice Publishing May Grid-Agency Commercial and Industrial Tariff Tables and Agency-Purchase Price Tables,” 2025-05-12. https://www.jiuhuashan.gov.cn/OpennessContent/show/1651234.html  
[7] RAND, “Estimating the Energy Requirements to Operate a Cryptanalytically Relevant Quantum Computer,” 2024. https://www.rand.org/content/dam/rand/pubs/working_papers/WRA2400/WRA2427-1/RAND_WRA2427-1.pdf  
[8] NIST, “The Big Quantum Chill: NIST Scientists Modify Common Lab Refrigerator to Cool Faster With Less Energy,” 2024-04-23. https://www.nist.gov/news-events/news/2024/04/big-quantum-chill-nist-scientists-modify-common-lab-refrigerator-cool  
[9] Krinner et al., “Engineering cryogenic setups for 100-qubit scale superconducting circuit systems,” EPJ Quantum Technology, 2019. https://link.springer.com/article/10.1140/epjqt/s40507-019-0072-0
