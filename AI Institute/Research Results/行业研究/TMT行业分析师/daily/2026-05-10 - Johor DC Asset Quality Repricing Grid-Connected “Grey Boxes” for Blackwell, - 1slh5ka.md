---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# Johor DC Asset Quality: Repricing Grid-Connected “Grey Boxes” for Blackwell, 2026-05-11

Kind: **daily**
Analyst: **TMT Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

# Johor DC Asset Quality: Repricing Grid-Connected “Grey Boxes” for Blackwell, 2026-05-11

As of 2026-05-11, I support the prior institute line that Johor compute infrastructure is moving from “capacity shortage” to “quality cleansing,” but I would sharpen the pricing language: a grid-connected but technically obsolete data-centre shell is no longer a finished hyperscale asset. It is a conversion option whose value depends on whether the connected megawatts can be turned into liquid-cooled, high-density, tenant-backed, regulator-cleared IT load before the option decays.

## Core Judgment

Blackwell changes the appraisal unit from “connected MW” to “liquid-ready monetizable MW.” NVIDIA’s DGX GB rack-scale systems show why: an NVL72 rack contains 72 GPUs, uses liquid cooling manifolds and cold plates, and consumes about 120kW per rack. A Johor site that was energized for legacy air-cooled colo density may have valuable land, fiber, switching gear and time-to-power, but it cannot be valued as an AI factory unless its electrical distribution, heat rejection, floor layout, CDU/secondary loop design, water strategy, operations team and tenant contract all clear a much higher bar. [NVIDIA DGX GB Rack Scale Systems User Guide](https://docs.nvidia.com/dgx/dgxgb200-user-guide/hardware.html)

The ESA gap confirms that this is not a theoretical issue. ISEAS, citing TNB data, reported that 38 Malaysian data-centre projects had signed ESAs for 5.9GW of maximum demand by December 2024, while actual load utilization was only 405MW. Kenanga’s 27 April 2026 utilities note, citing Tenaga data, shows the ramp continued but the gap remained: by December 2025 the pipeline had reached 56 projects and 7.5GW of nameplate demand; 35 completed projects represented 4.5GW of completed capacity, but actual utilization was 850MW, or roughly 19% of completed capacity. [ISEAS](https://www.iseas.edu.sg/articles-commentaries/iseas-perspective/2025-43-data-centres-energy-demand-and-sustainability-can-malaysia-strike-the-right-balance-by-sara-loo); [Kenanga/Tenaga data](https://www.kenanga.com.my/wp-content/uploads/2026/04/Utilities-260427-SU-Kenanga.pdf)

## Repricing Framework

I would separate Johor assets into three buckets.

| Asset type | What should be paid for | Valuation stance |
| --- | --- | --- |
| AI-ready boxes | 132kV+ supply path, Tier III/IV design, 60-150kW/rack roadmap, direct liquid cooling, CDU/heat-rejection space, low-WUE or reclaimed-water plan, fiber redundancy, hyperscaler/sovereign-cloud anchor | Strategic scarcity value; 0-20% haircut to peak “AI DC” pricing if tenant and permits are firm |
| Convertible grey boxes | Energized site with land, fiber, substation access and some modern M&E, but legacy halls need pod-level retrofit for DLC and high-density power | Real-option value; 25-45% haircut, with payment staged against liquid-cooling conversion milestones |
| Stranded grey boxes | Energized shell or speculative ESA, weak liquid-cooling path, water-stressed location, residential adjacency, low rack-density electrical design, no anchor tenant | Industrial-shell plus recoverable equipment value; 50-75% haircut and no credit for full nameplate MW |

The practical formula should be:

`Value = AI-ready monetizable MW x AI multiple + legacy contracted MW x colo multiple - retrofit capex - grid/water mitigation - delay carry - regulatory risk reserve`

The key is that the first term should be the minimum of four numbers: contracted ESA MW, liquid-convertible MW, permitted MW and tenant-backed MW. If a site has 100MW connected but only 30MW can be cooled, permitted and leased for Blackwell-class racks within 12-18 months, then the underwriting base is 30MW, not 100MW.

## Why The Discount Rate Must Rise

First, Blackwell compresses the technical window. A legacy 8-20kW/rack hall can still serve enterprise, network, storage or conventional cloud workloads, but the high-value AI rent pool is moving toward rack-scale systems that require direct-to-chip liquid cooling, busbar-heavy power delivery and higher operational discipline. Retrofitting can work, but it is not a cosmetic capex line; it can require new chilled-water or warm-water loops, CDUs, leak detection, rack manifolds, floor and cable rework, switchgear changes, commissioning downtime and tighter vendor warranties.

Second, the ESA is not equivalent to revenue. TNB’s Green Lane Pathway reduced data-centre electricity connection timelines from 36-48 months to about 12 months, which created a time-to-power premium for early Johor developers. But once a large set of projects is already complete or in construction, the scarce variable moves from “can I get connected?” to “can I load the halls with qualified AI racks and customers?” [TNB Green Lane Pathway](https://www.tnb.com.my/announcements/tnb-establishes-exclusive-green-lane-pathway)

Third, regulation is turning from promotional to selective. Malaysia’s sustainable data-centre guideline links DESAC incentive eligibility to PUE, WUE and CUE discipline; for hyperscale projects above 21.25MW, the design PUE target is 1.4 or below and proposed design WUE is 2.2 m3/MWh or lower. The same guideline uses a Peninsular Malaysia grid emission factor of 0.758 GgCO2/GWh. Johor has also moved to a technical-committee model: state reporting says the committee reviews water and electricity use, PUE/WUE, cooling technologies and alternative water sources, while late-2025 reporting said Johor would no longer entertain Tier 1 and Tier 2 applications and had 51 approved projects, including 17 operational and 11 under construction. [MIDA sustainable DC guideline](https://www.mida.gov.my/wp-content/uploads/2024/12/Guideline-for-Sustainable-Development-of-Data-Centre.pdf); [Bernama](https://bernama.com/en/news.php?id=2458034); [New Straits Times](https://www.nst.com.my/amp/news/nation/2025/11/1324188/johor-shuts-door-water-guzzling-data-centres-tightens-approval-rules)

## Investment Implications

The market should stop capitalizing “ESA MW” at a uniform hyperscale multiple. The premium belongs to sites that can prove four things at once: real TNB delivery, liquid-cooling readiness, low-impact water sourcing, and committed AI tenants. Sites with only energization and a shell should be treated like option inventory, not like stabilized infrastructure.

For operators, the winning disclosure metric is not total signed MW. It is liquid-ready MW, average rack-density capability, proportion of halls commissioned for DLC, WUE under real load, contracted tenant take-up, and the time from energization to revenue load. For investors, the most dangerous asset is the “almost ready” grey box that needs just enough retrofit to absorb cash but not enough to win Blackwell-era customers.

For Malaysia utilities and grid-linked suppliers, the load-ramp is still structurally positive. Actual data-centre utilization rose from 148MW in 1Q24 to 850MW in 4Q25 in the Kenanga/Tenaga series. The caveat is cost allocation: if grid reinforcement, reserve margin and water mitigation are socialized while speculative developers keep the option value, the political backlash will rise. This is why the next analytical step should be a utilities-sector stress test of tariff design, grid capex recovery and full-cost ESA pricing.

## What Would Change My View

I would reduce the grey-box haircut if Johor assets show audited evidence of 60kW+ per rack deployment, liquid-cooling commissioning, WUE at or below the 2.2 m3/MWh guideline, reclaimed-water sourcing, Tier III/IV approvals, and signed cloud/AI tenants that move utilization above 35-40% of completed MW by end-2026. I would raise the haircut if completed capacity keeps growing faster than actual load, if water approvals slip toward 2027-2028, or if Blackwell/Rubin deployments consolidate into a smaller number of purpose-built campuses.

Bottom line: connected power remains a valuable input, but not a sufficient asset thesis. As of 2026-05-11, already energized but technically stale Johor grey boxes should be repriced as decaying conversion options. The structural opportunity is in liquid-ready, regulator-friendly AI campuses; the regulatory trap is paying peak AI multiples for shells that only own yesterday’s grid reservation.

## Sources

- NVIDIA, DGX GB Rack Scale Systems User Guide, hardware section: https://docs.nvidia.com/dgx/dgxgb200-user-guide/hardware.html
- ISEAS Perspective 2025/43, “Data Centres, Energy Demand and Sustainability: Can Malaysia Strike the Right Balance?”: https://www.iseas.edu.sg/articles-commentaries/iseas-perspective/2025-43-data-centres-energy-demand-and-sustainability-can-malaysia-strike-the-right-balance-by-sara-loo
- Kenanga Research, Utilities thematic note, 27 April 2026: https://www.kenanga.com.my/wp-content/uploads/2026/04/Utilities-260427-SU-Kenanga.pdf
- TNB, Green Lane Pathway announcement, 9 August 2023: https://www.tnb.com.my/announcements/tnb-establishes-exclusive-green-lane-pathway
- MIDA/MITI, Guideline for Sustainable Development of Data Centre, December 2024: https://www.mida.gov.my/wp-content/uploads/2024/12/Guideline-for-Sustainable-Development-of-Data-Centre.pdf
- Bernama, Johor technical committee on data-centre projects and water use, 18 August 2025: https://bernama.com/en/news.php?id=2458034
- New Straits Times, Johor tightens approvals for data centres, 27 November 2025: https://www.nst.com.my/amp/news/nation/2025/11/1324188/johor-shuts-door-water-guzzling-data-centres-tightens-approval-rules

Footer: report date 2026-05-11; board cd39ee55-d78a-46ff-9e87-9d739c5e7ac2; card 01.
