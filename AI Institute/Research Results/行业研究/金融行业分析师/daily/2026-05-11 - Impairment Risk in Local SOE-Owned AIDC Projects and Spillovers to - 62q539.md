---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# Impairment Risk in Local SOE-Owned AIDC Projects and Spillovers to Local Financial Platforms

Kind: **daily**
Analyst: **Financials Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Financials Analyst]]
- Analyst level: [[行业研究]]

# Impairment Risk in Local SOE-Owned AIDC Projects and Spillovers to Local Financial Platforms

Date anchor: 2026-05-11.

## Priority Conclusions

1. **There is a high risk of large project-level impairments, but in the near term this is more likely to appear as localized credit stress than as a nationwide systemic shock.** The main depreciating asset in an AIDC project is not the building shell but AI servers/GPUs. One disclosed RMB1.3045bn intelligent-computing-center fundraising project budgeted RMB1.2761bn, or 97.82%, for software and hardware procurement, including RMB1.2669bn of hardware. Technology turnover therefore hits the balance sheet directly. [CNINFO](https://static.cninfo.com.cn/finalpage/2025-07-30/1224330534.PDF)
2. **The duration mismatch is real: GPU economic life should be stress-tested at 3-5 years, while local special bonds and platform financing are often longer than 10 years.** Ministry of Finance data show RMB1.4199tn of new local-government bonds issued in 1Q26, including RMB1.1599tn of special bonds; the average issuance tenor of special bonds was 19.1 years and their average remaining life was 12.7 years. [Chinanews/MOF data](https://www.chinanews.com.cn/gn/2026/05-08/10617655.shtml) The State Council has included cloud computing, data centers, industrial internet, computing equipment and auxiliary equipment infrastructure in the positive list for special-bond investment and project-capital use. [Gov.cn](https://www.gov.cn/zhengce/zhengceku/202412/content_6994503.htm)
3. **The impairment trigger is not a collapse in aggregate compute demand; it is a mismatch between supply quality and customer structure.** MIIT’s action plan targets more than 300 EFLOPS of computing power and a 35% intelligent-computing share by 2025, but it also says new projects in regions with overall rack utilization below 50% require stronger justification. [MIIT](https://www.miit.gov.cn/cms_files/filemanager/1226211233/attach/20238/1f932a10298244da844cacef2baa63c7.pdf) Fujian SASAC recently noted that China’s compute-infrastructure buildout peaked in 2025 while low equipment utilization and weak operations had already emerged. [Fujian SASAC](https://gzw.fujian.gov.cn/zwgk/gzdt/gzjg/ghfz/202605/t20260507_7145121.htm)
4. **The spillover channel to local financial platforms runs mainly through bank loans, financial leases, special-bond project-revenue gaps and LGFV spread repricing.** The IMF’s 2025 China FSAP found that the property downturn and highly leveraged LGFV stress had lifted financial-stability risks; it estimated banks hold 75% of LGFV debt and 39%-46% of LGFV debt needs restructuring to restore debt-service capacity. [IMF FSAP 2025](https://www.imf.org/-/media/files/publications/cr/2025/english/1chnea2025001-print-pdf.pdf)
5. **The practical test is simple: projects with locked customers, compute orchestration and real application ecosystems can be upgraded over time; projects with only parks, racks and GPUs should be treated as potentially stranded heavy assets.** Xiamen Siming Intelligent Computing Center is the better pattern: after connecting carrier capacity it exceeded 2,200P, and by end-2025 it had signed or intended compute-service demand of more than 540P across 63 application scenarios in 12 sectors. [Fujian SASAC](https://gzw.fujian.gov.cn/zwgk/gzdt/gzjg/ghfz/202605/t20260507_7145121.htm)

## Quantitative Risk Framework

| Item | Base Assumption | Meaning for an RMB1bn AIDC Project |
|---|---:|---:|
| IT/software-hardware share of total investment | 70%-98%; disclosed sample at 97.82% | RMB700mn-RMB980mn is the high-risk asset pool |
| GPU/AI server economic life | 3-5 years; local SOE projects should be stress-tested at 3 years | A reinvestment or lower-priced inference migration is needed after year 3 |
| Debt tenor | 1Q26 special-bond average 19.1 years; remaining life 12.7 years | Asset replacement comes 9-16 years before principal recovery |
| 10-year equal-principal loan | 70% leverage | About RMB490mn principal still outstanding at end-year 3 |
| 15-30 year special bond or quasi-special-bond debt | 70% leverage, often bullet-style | Principal may still be close to RMB700mn at end-year 3 |
| Year-3 economic residual value | Stress old training cards at 10%-30% of original hardware cost | If hardware is RMB700mn, economic residual value is RMB70mn-RMB210mn |

Simplified calculation: if hardware is 70% of an RMB1bn project and is depreciated straight-line over five years, year-3 book value is still about RMB280mn. If market economic value is only 10%-20% of original hardware cost, the impairment charge is about RMB140mn-RMB210mn. If a local platform depreciates AI servers over a longer “infrastructure-like” life, the impairment gap can rise to 30%-40% of total investment.

## Why AIDC Is More Impairment-Prone Than Traditional IDC

| Risk Dimension | AIDC Characteristic | Credit Implication |
|---|---|---|
| Technology turnover | NVIDIA says Vera Rubin can train MoE models with one-fourth the GPUs versus Blackwell, deliver up to 10x inference throughput per watt and cut token cost to one-tenth. [NVIDIA](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Vera-Rubin-Opens-Agentic-AI-Frontier/default.aspx) | Even if old cards still run, unit compute economics can become uncompetitive quickly |
| Depreciation accounting | Meta, an optimized hyperscaler, extended the life of certain servers and network assets to 5.5 years in 2025, reducing expected full-year depreciation by USD2.9bn. [Meta](https://investor.atmeta.com/investor-news/press-release-details/2025/Meta-Reports-Fourth-Quarter-and-Full-Year-2024-Results/) | 5.5 years is closer to a hyperscaler upper bound; local projects should not copy it |
| Energy constraint | The green data-center action plan targets nationwide rack utilization of at least 60%, average PUE below 1.5 and 10% annual growth in renewable-energy use by end-2025. [Gov.cn](https://www.gov.cn/lianbo/bumen/202407/content_6964334.htm) | PUE, power price and green-energy access determine whether old equipment still has cash-flow value |
| Business model | Training-compute pricing is volatile; inference compute depends more on low cost, low latency, software stack and customer scenarios | Selling only headline “P” capacity easily becomes a price war |

## Local Project Samples: Fast Capacity Growth, Uneven Demand Validation

| Region/Entity | Publicly Disclosed Scale | Analytical Read-Through |
|---|---:|---|
| Henan Airport Intelligent Computing Center | Planned IT capacity of 40MW, 85.06 mu, 5,000 high-performance inference servers; phase 1 no less than 2,000PFLOPS@FP16, phase 2 no less than 6,000PFLOPS, phase 3 no less than 12,000PFLOPS. [Henan Airport Digital City](https://www.kgszcs.com/about_14/) | High capital intensity; the key issue is whether inference customers are locked in long term |
| Sichuan Data Group / Tianfu Cloud | Planned RMB1bn investment in a 5,000 sqm room for an energy-investment intelligent computing center with 3,000-5,000P; park-level investment RMB10bn, 50,000 racks and PUE <1.25. [Sichuan Data Group](https://www.sc-datagroup.com/industry/ywbk/szjcss/) | Utilization is better if it carries SOE cloud, culture-tourism cloud and data cloud workloads |
| Fuzhou Changle Airport Comprehensive Bonded Zone Project | Total investment RMB1.1bn, phase 1 RMB330mn; phase 1 designed capacity above 10,000P (FP16). [Changle District Government](https://www.fzcl.gov.cn/xjwz/ztzl/tzcl/zsyz/202505/t20250504_5013941.htm) | Investment per P looks low, so chip generation, lease contracts and operating definitions need verification |
| Siming Intelligent Computing Center | Above 2,200P after carrier capacity integration; signed and intended demand above 540P by end-2025. [Fujian SASAC](https://gzw.fujian.gov.cn/zwgk/gzdt/gzjg/ghfz/202605/t20260507_7145121.htm) | A regional industry-service center is stronger than a pure compute warehouse, but intended demand still needs to become revenue |

## Spillovers to Local Financial Platforms

**Banks:** National banks can absorb losses from individual AIDC projects, but local banks, rural commercial banks and city commercial banks face compounded risk if they also provide LGFV loans, industrial-fund leverage and receivables pledges to the same local ecosystem. The IMF has already flagged that smaller and mid-sized banks are more vulnerable and that LGFV loss deferral reduces transparency. [IMF FSAP 2025](https://www.imf.org/-/media/files/publications/cr/2025/english/1chnea2025001-print-pdf.pdf)

**Financial leasing companies:** Direct leases and sale-leasebacks on AIDC equipment depend on chip generation, resaleability and import/export constraints. If the lessee is a local SOE platform, the real underwriting exposure is local credit. Once compute-rental cash flow misses plan, the risk shifts from equipment residual value to platform refinancing.

**LGFV bonds and special bonds:** If project-revenue special bonds rely on compute-rental income for repayment, the weakest point is the year 3-5 reinvestment window. When old cards must be repriced lower while new cards are needed, the project faces falling revenue, renewed capex and still-high outstanding principal at the same time.

**Brokers, insurers and asset managers:** Direct exposure is usually smaller than banks’, but mark-to-market losses can pass through LGFV bonds, local industrial-fund LP stakes and ABS/quasi-REIT cash-flow assumptions. Risk pricing should move from “local government support” to “tenant-contract coverage plus equipment residual-value discount.”

## Bottom-Line Assessment

| Scenario | Triggers | Impairment Probability | Impact on Local Financial Platforms |
|---|---|---:|---|
| Controlled | Tier-1 or strong provincial-capital market, cloud provider or carrier take-or-pay for 3-5 years, PUE <1.25, utilization >60% | Low-medium | Mainly depreciation pressure and rolling capex pressure |
| Base case | Some government/enterprise customers and subsidies, contracts insufficient to cover debt service, old cards migrated to inference | Medium | LGFV EBITDA erosion, bank extensions, leasing rollovers |
| Stress case | Non-hub region, no anchor customers, utilization <50%, GPUs two generations behind, no power-price/PUE advantage | High | 15%-40% total-investment impairment, wider LGFV refinancing spreads |
| Tail case | Duplicate projects in the same city, cross-financing through special bonds, banks and leasing, fiscal subsidies taper | High | Capital drag at local banks, LGFV bond valuation losses, heavier hidden-debt cleanup burden |

## Follow-Up Items for the Editor

1. Obtain project-level debt stacks: special bonds, bank project loans, financial leases, industrial funds and supplier payables, including tenors and amortization schedules.
2. Require customer-quality disclosure: 3-year-plus take-or-pay contract amount, booked contracted revenue, intended orders and the share of revenue from government subsidies.
3. Revalue equipment by chip model, purchase price, delivery date, domestic/imported ecosystem and resale constraints; run 10%/20%/30% year-3 residual-value stress cases.
4. Look through local financial institutions: determine whether city commercial banks, rural commercial banks and financial leasing companies simultaneously hold project loans, leasing claims, LGFV bonds and industrial-fund stakes.
5. Suggested wording for the daily report: avoid saying “the AIDC bubble has already become systemic.” A tighter formulation is: “3-5 year technology depreciation is pushing a group of projects financed with 10-year-plus debt into an impairment-test window, with risk concentrated in weak-fiscal regions, weak-customer projects and local financial institutions.”
