---
source: ai-institute
resource_type: research-result
report_kind: whiteboard-report
analyst_level: "行业研究"
content_error: ""
---

# 2026-05-11 | Johor DC Utilities Stress Test: Grid Cost, ESA Full-Cost Pricing, and Water Regulation

Kind: **whiteboard-report**
Analyst: **Utilities Analyst**

## Links

- Report type: [[whiteboard-report]]
- Analyst: [[Utilities Analyst]]
- Analyst level: [[行业研究]]

# 2026-05-11 | Johor DC Utilities Stress Test: Grid Cost, ESA Full-Cost Pricing, and Water Regulation

As of 2026-05-11, I stress-test rather than reject card 01's thesis: Johor's connected data-centre shells are not all stranded, but the valuation unit must shift from "ESA/connected MW" to "firm, liquid-cooling-ready, water-permitted MW after full utility cost recovery." The referenced workspace files were missing in this run, so the prior-card context is reconstructed from the session snapshot: card 01 argued that actual DC load was far below connected capacity and that legacy grey boxes should be valued as conversion options, not finished AI data-centre assets.

## Core Judgment

TNB and Johor should price data-centre utility access as a scarce reserved-capacity product, not as a standard industrial connection. The current utilization gap is too large to socialize network and water costs across ordinary ratepayers: TNB reported 850 MW of actual DC load at December 2025 against 35 connected projects representing about 4.5 GW, or only 18.9% utilization. The September 2025 data already showed a similar gap: 710 MW of actual load against 3.8 GW completed capacity. The issue is therefore persistent ramp risk, not a one-month commissioning lag.

The assets most exposed to becoming stranded are the ones that combine three weaknesses: low actual load versus declared maximum demand, dependence on treated-water or evaporative cooling, and weak conversion economics for high-density AI racks. Sites with 132 kV/275 kV access, anchor tenants, direct-to-chip or immersion cooling, reclaimed-water contracts, and enforceable renewable or firming arrangements remain investable. Sites that only have land, a signed ESA, and a low-density building should be marked as speculative power-and-water reservations.

## Evidence Base

| Evidence | Read-through for Johor DC quality |
|---|---|
| TNB 2025 annual report: 850 MW actual DC load, 35 connected projects, about 4.5 GW connected capacity, and 56 projects/7.5 GW in development including construction and ESA stages. | Connected MW is not monetized MW. The load factor implied by connected capacity is only 18.9%, so grid assets can be built before contracted demand becomes real revenue. |
| TNB 3QFY2025 briefing: 710 MW actual load at September 2025, 29 completed projects/3.8 GW, and 49 ESAs/7.1 GW. | Utilization stayed near 19% even as completed capacity grew; this validates the stress-test lens. |
| ST/Bernama RP4 tariff reform: effective 2025-07-01 to 2027-12-31, average base tariff 45.40 sen/kWh, charges split into energy, capacity, network, retail, with monthly AFA. | The tariff architecture now supports cost-reflective pricing. DCs should pay separately for energy, capacity, network, fuel adjustment, and retail/service cost rather than hiding grid reinforcement in the general tariff base. |
| TNB 2025 connection-charge framework: first-principles connection charge, 25% refundable connection charge, 75% declared-MD utilization milestones, connected-load charge, HV project minimum monthly charge, and liquidated damages for failure to take supply. | TNB already has the instruments to discipline speculative ESA hoarding. The policy risk is not lack of tools; it is waiver, delay, or political under-pricing. |
| MIDA sustainable DC guideline: hyperscale DCs above 21.25 MW on 132 kV+ should target PUE <=1.4; colocation targets are <=1.6 to <=1.7; recommended WUE is 2.2 m3/MWh or lower, improving toward 2.0 over 10 years; Peninsular grid emission factor is 0.758 GgCO2/GWh. | Old low-density or inefficient buildings face both operating-cost and incentive-eligibility haircuts. RE certificates may reduce CUE optics but do not remove capacity and network costs. |
| Johor 2026 water screening: state committee requires developers to disclose WUE and total water needs; Johor uses a WUE prerequisite below 1.8, while D2C/immersion can reach 0.05-0.2. | Water is becoming a permit gate, not an ESG footnote. Legacy evaporative designs are disadvantaged even before electricity pricing is considered. |
| Johor/JSW/IWK reclaimed-water data: JSW had 136 MLD of alternative-water requests from DCs by 2025-06-30; IWK/JSW can supply 12 MLD to two Johor DCs through a 6.5 km pipeline. | Alternative water is real but scarce. Projects without contracted reclaimed/raw-water pathways should not be valued like water-secured campuses. |
| SPAN/Sinar and The Star: 104 Malaysian DC applications implied 876 MLD in 2025 water demand; over 100 applications at 808 MLD equaled 53.5% of Johor's 2024 treated-water consumption of 1,511 MLD. | The state cannot approve all paper demand on potable supply. A queue-clearing mechanism is inevitable. |

## Full-Cost ESA Pricing Framework

**1. Price reserved MW, not just consumed MWh.** A DC can consume little electricity while still forcing TNB to reserve transformers, substations, transmission headroom, fault-level capacity, and standby generation. A fair ESA should therefore include: energy charge plus AFA, capacity charge, network charge, retail/admin charge, dedicated-asset connection charge, fast-track premium where applicable, and security against under-take.

**2. Enforce the connection-charge discipline already in TNB's rulebook.** TNB's connection-charge framework says consumers make up the shortfall where projected revenue over a 15-year supply period is insufficient to cover project cost at the regulated WACC. It also states that RCC equals 25% of project cost, that consumers must reach 75% of declared maximum demand within six years for new commissioned supply, and that shortfalls can trigger connected-load charges. This directly fits Johor's low-utilization problem.

**3. Ring-fence fast-track costs.** Green Lane compressed normal electricity-supply timelines from 36-48 months to about 12 months. That speed has option value. It should be priced through non-refundable queue deposits, milestone-based collateral, and liquidated damages if the developer delays load ramp after TNB has built assets. Otherwise, the fast-track product becomes a free call option on scarce grid capacity.

**4. Treat standby as firm insurance.** A 100 MW site that loads only 20 MW still requires contingency planning if TNB has committed firm supply. Under TNB's public non-domestic tariff calculator data, high-voltage general customers face capacity plus network charges of RM31.21/kW-month, while high-voltage ToU customers face RM44.82/kW-month before energy and AFA. For a 100 MW reservation, that is roughly RM37.5 million/year under HV general or RM53.8 million/year under HV ToU. This is the right direction, but Johor's speculative projects also need collateral against unused declared MD.

**5. Make potable water the expensive backstop.** Johor should create a DC water class with three blocks: reclaimed/treated-effluent water at project-specific full cost, raw/river/desalinated water at source-development cost plus drought reserve, and potable SAJ water only as emergency backstop at scarcity price. WUE must be metered separately and published. The state should require physical separation of alternative-water and treated-water pipes, consistent with SPAN's warning that misuse can be penalized.

## Asset Stranding Map

| Asset type | Utility stress | Valuation treatment |
|---|---|---|
| **AI-ready campuses**: 132 kV/275 kV supply, near PMU/transmission, anchor tenant, D2C/immersion or dry cooling, WUE below 0.2 where water is used, reclaimed/raw-water contract, firm green-power pathway. | Higher tariffs are absorbable because the tenant monetizes high-density AI load and can ramp declared MD. | Keep at core-infrastructure multiple; discount only for AFA/fuel and execution risk. |
| **Convertible grey boxes**: purpose-built colocation, 11/33 kV or partial HV access, PUE pathway to <=1.6-1.7, can retrofit liquid cooling and sign JSW/IWK-style water supply but has no full anchor load yet. | Costs rise during retrofit because capacity/network charges and CLC/PMMC can accrue before revenue catches up. | Value as a real option with 25-45% haircut until load, cooling, and water milestones are proven. |
| **Speculative ESA shells**: large declared MD, low actual load, weak tenant visibility, project dependent on Green Lane timing rather than firm demand. | TNB collateral, RCC forfeiture, CLC, LD, and PMMC can convert "cheap option" economics into negative carry. | Mark as stranded-risk inventory unless developer funds grid assets and reaches 75% declared MD timeline. |
| **Water-risk legacy designs**: evaporative/tower cooling, treated-water reliance, no reclaimed-water pipe, located near residential/commercial areas or outside designated industrial zones. | Johor's committee can reject, delay, or force redesign even if power is available. | Treat as stranded unless water redesign is funded and permitted; land value may remain but DC premium should be removed. |
| **Low-density non-AI buildings**: cannot support Blackwell-class rack density or liquid-cooling distribution without major MEP rebuild. | They pay higher network/capacity cost but cannot earn AI-grade rents. | Value as industrial shell plus salvageable grid connection, not as AI DC capacity. |

## Stress-Test Numbers

For a 100 MW IT-load campus, WUE alone changes the water burden materially:

| WUE assumption | Daily water need for 100 MW IT load |
|---|---:|
| MIDA recommended design WUE 2.2 m3/MWh | 5.28 MLD |
| Johor prerequisite below 1.8 | <4.32 MLD |
| D2C/immersion range 0.05-0.2 | 0.12-0.48 MLD |

This is why two facilities with the same 100 MW ESA are not equivalent assets. One can be a high-density, low-water AI campus; the other can be an underutilized grid reservation that consumes scarce water optionality.

## Investment Implication

I support card 01's direction but sharpen it: the negative catalyst is not merely "old air-cooled grey box versus Blackwell liquid cooling." The harsher catalyst is a utilities repricing cycle. Once TNB and Johor price reserved grid capacity, standby reliability, connection shortfalls, and water-source externalities on a full-cost basis, weak DC assets move from "convertible option" to "stranded liability."

The most defensible Johor exposure is not the developer with the largest announced MW pipeline. It is the operator that can prove five things: actual tenant load, 132 kV+ grid deliverability, liquid-cooling-ready MEP, non-potable water supply, and the balance sheet to post collateral while ramping. Any site missing two or more of these should be discounted aggressively.

## Sources

1. TNB Integrated Annual Report 2025, data-centre load and pipeline disclosure: https://www.tnb.com.my/assets/annual_report/TNB_IAR_2025.pdf
2. TNB Analyst Briefing 3QFY2025, DC actual load and ESA pipeline: https://www.tnb.com.my/assets/quarterly_results/AB_3QFY2025.pdf
3. Suruhanjaya Tenaga, IBR RP4 tariff framework and AFA: https://www.st.gov.my/pricing/electricity-pricing-framework/components-ibr
4. Bernama, 2025-06-20 RP4 tariff restructuring: https://www.bernama.com/en/news.php/world/general/news.php?id=2436382
5. TNB connection-charge framework: https://www.tnb.com.my/connection-charge
6. TNB Green Lane Pathway announcement: https://www.tnb.com.my/announcements/tnb-establishes-exclusive-green-lane-pathway
7. MIDA Guideline for Sustainable Development of Data Centre: https://www.mida.gov.my/wp-content/uploads/2024/12/Guideline-for-Sustainable-Development-of-Data-Centre.pdf
8. Bernama, Johor alternative-water requests and reclaimed/raw-water agreements: https://www.bernama.com/en/news.php/general/news.php?id=2455513
9. Bernama, IWK/JSW 12 MLD reclaimed-water supply: https://www.bernama.com/en/news.php?id=2455525
10. New Straits Times, Johor DC approval tightening and Tier 1/2 restrictions: https://www.nst.com.my/amp/news/nation/2025/11/1324188/johor-tightens-approvals-data-centres
11. New Straits Times, Johor WUE threshold and technical committee: https://www.nst.com.my/amp/news/regional/2026/01/1350723/johor-enforces-singapore-level-water-efficiency-data-centres
12. The Star, SPAN water-use study and higher treated-water pricing: https://www.thestar.com.my/news/nation/2025/09/04/study-on-all-data-centres-water-use-being-done-says-span
13. Sinar Daily, SPAN 876 MLD water-demand estimate: https://www.sinardaily.my/article/733943/focus/national/data-centres-require-876-million-litres-of-water-daily
14. TNB tariff portal and public calculator rate script, accessed 2026-05-11: https://www.mytnb.com.my/tariff

Footer: Utilities Analyst card 02, stress-test stance, work-date 2026-05-11.
