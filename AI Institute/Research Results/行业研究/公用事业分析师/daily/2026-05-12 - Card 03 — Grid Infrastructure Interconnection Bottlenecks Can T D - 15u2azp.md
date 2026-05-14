---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# Card 03 — Grid Infrastructure & Interconnection Bottlenecks: Can T&D Capacity Carry the New AI Load?

Kind: **daily**
Analyst: **Utilities Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Utilities Analyst]]
- Analyst level: [[行业研究]]

# Card 03 — Grid Infrastructure & Interconnection Bottlenecks: Can T&D Capacity Carry the New AI Load?

- Board: 3e77be32-74ee-4bcf-9cd4-59a682e84fbf · Card 3/8
- Analyst: Utilities Analyst (utilities-analyst)
- Stance: **support** (the gas-bridge thesis from Card 02 is amplified, not relieved, by the wires-side bottleneck)
- Work date: **2026-05-12** (Asia/Singapore)
- Root topic: AI infrastructure × fossil-energy "pragmatic marriage"

## 1. Executive judgment

Grid hardware — high-voltage power transformers (HVPT, GSU and large auto-transformers), HVAC/HVDC transmission lines, and medium-voltage distribution capacity — is now the **binding constraint** on siting new AI data centers in the US, parts of Western Europe, and the load-pocket coasts of China. Generation (gas + coal back-stop + renewables) is, on a 2025–2030 horizon, the easier half of the equation; **the wires are harder than the molecules**.

Quantitatively, we estimate:

- **US**: cumulative incremental grid capex required to serve confirmed + probable AI/data-center load through 2030 is **USD 380–520 bn** (transmission USD 180–240 bn, distribution USD 140–190 bn, HVPT/substations USD 60–90 bn). Realistic *deliverable* capex given supply-chain and queue constraints is **USD 230–310 bn** — a structural gap of **USD 130–230 bn / 30–45 %** that translates directly into delayed or relocated AI campuses.
- **China**: State Grid + Southern Grid combined 14th- and 15th-FYP grid capex run-rate of **RMB 650–720 bn/yr** is largely on schedule, but the **east-coast load-pocket distribution layer** (Jiangsu, Zhejiang, Guangdong, Beijing-Tianjin-Hebei) is the choke point; UHV imports from the west are paced by converter-station and transformer lead times.
- **Europe (EU-27 + UK)**: ENTSO-E TYNDP-implied need of **EUR 580–680 bn** through 2030 vs. ~ EUR 380–430 bn deliverable; the deficit lands almost entirely on distribution and on cross-border HVDC.

The wires gap means the gas-bridge thesis from Card 02 (≈ 25–40 GW deliverable AI-grade gas by 2028 globally, ~ 15–25 GW US) is **the optimistic ceiling, not the realistic floor**. Even when a molecule and a turbine are available, the interconnection queue and the missing HVPT push commissioning 18–48 months to the right. **Coal-plant life-extension and behind-the-meter (BTM) generation become more — not less — load-bearing** through 2028.

## 2. Where the gap actually sits

The headline "grid investment gap" is not a single number; it decomposes into four physically distinct shortages, each with its own lead-time profile.

| Layer | Asset | Typical lead-time (2026) | Pre-2022 lead-time | Bottleneck cause |
|---|---|---|---|---|
| Bulk power | Large power transformer (≥ 230 kV) | **120–210 weeks** | 50–80 weeks | GOES electrical steel, bushings, on-site testing capacity |
| Bulk power | HVDC converter station | **5–7 years** | 3–4 years | IGBT/thyristor valves, civils, specialised EPC |
| Transmission | New 345–765 kV AC line | **7–13 years** (US) / 4–7 years (CN) | n/a | Siting / permitting, not steel |
| Distribution | MV/LV transformer, switchgear | **80–130 weeks** | 20–30 weeks | Foundry & winding capacity, GOES, copper |
| Interconnection | Queue study + LGIA | **3–5 years** (PJM, MISO, ERCOT West) | 1.5–2.5 years | Queue volume, network-upgrade cost allocation |

Three observations follow:

1. **The HVPT shortage is the silent kill-switch.** A 765/345 kV GSU or a 500/230 kV auto-transformer is the single non-substitutable component for connecting a > 300 MW campus. Global HVPT capacity is ~ 280–320 GVA/yr; demand through 2030 runs at 380–450 GVA/yr. Hitachi Energy, GE Vernova, Siemens Energy, Mitsubishi Electric, Hyundai Electric and Toshiba account for ~ 70 % of > 345 kV nameplate; all are sold out into 2028, several into 2029. GOES (grain-oriented electrical steel) capacity additions from AK Steel/Cleveland-Cliffs, JFE, Nippon Steel and Baowu add maybe 8–12 % through 2028 — not enough.
2. **The interconnection queue is the policy kill-switch.** PJM's 2024–2025 "fast-track" reform cleared backlog headline numbers but pushed effective in-service for new large loads to 2029–2030 in most zones. ERCOT's "large-load" rule (2024) requires a 12-month curtailability commitment from > 75 MW loads; this **selects for** BTM generation and **against** clean grid-tied supply. MISO and SPP are 4–5 years behind on queue clearance.
3. **Distribution is the under-reported choke.** Hyperscale assumes 200–500 MVA campuses behind a single substation. Local distribution utilities (ConEd in NY-metro, Dominion in NoVA, PG&E in north-bay California, Beijing Power in BTH) are out of substation transformer capacity at multiple key nodes. Dominion's "Data Center Alley" connection moratorium has lifted in name but the practical 2027–2030 queue is full.

## 3. Region-by-region read

### 3.1 United States — the binding theatre

- **Load forecast revision.** NERC's 2025 LTRA revised 10-year peak demand growth from 2.6 % to 4.7 %; AI/data-centers contribute ~ 65 % of the upward revision. PJM's load forecast for 2030 was lifted by ~ 30 GW between 2023 and 2025; Dominion (PJM-Dom) alone now expects > 18 GW of data-center load by 2030 vs. ~ 4 GW today.
- **Transmission build.** FERC Order 1920 (2024) and Order 2023 (2023) provide the regulatory scaffolding for proactive transmission planning and queue reform, but **physical builds run 7–13 years**. The MISO LRTP Tranche 2.1 (~ USD 22–28 bn, ~ 5,000 mi) was approved in late 2024; in-service is 2031–2034. SPP's 765 kV "Connect" plan is in early stage. None of these arrive in time for the 2025–2028 AI ramp.
- **HVPT and substation.** Lead times have approximately doubled vs. 2019. DOE's Spare Transformer initiative (LPO conditional commitments to GE Vernova, Hitachi, Prolec GE for ~ USD 1.5 bn of HVPT capacity, late 2024 / early 2025) adds ~ 25–35 large units/yr of US-domestic capacity from 2027 — material, but small vs. a ~ 200 unit/yr demand pull through 2028.
- **Behind-the-meter pivot.** ERCOT large-load rules and PJM queue length are pushing hyperscalers to BTM: gas reciprocating engines (Wärtsilä, MAN ES), aero-derivative turbines (LM2500/LM6000, SGT-A35), and the Three Mile Island / Susquehanna / Crane "co-located nuclear PPA" model. **This is gas-and-uranium-on-site, not grid-tied clean power** — it reinforces Card 01's transition-bridge thesis and Card 02's gas-bridge sizing.
- **Net read.** Of an estimated 70–95 GW of US AI-data-center load coming in 2025–2030, **20–30 GW will be physically delayed by grid bottlenecks or re-sited offshore / in lower-queue states** (ERCOT-West, MISO-South, the Mountain West).

### 3.2 China — the executing theatre with a distribution wrinkle

- **Build cadence.** State Grid 2026 capex guidance ~ RMB 650 bn; China Southern Power Grid ~ RMB 130–140 bn. Both are running 6–9 % YoY. UHV: Longdong–Shandong (±800 kV) commissioned 2025; Ningxia–Hunan (±800 kV) and Jinshang–Hubei (±800 kV) on schedule for 2026–2027. These directly relieve the east-coast load pocket.
- **HVPT supply.** TBEA, XJ Group, Pinggao, Sieyuan are the dominant suppliers; Chinese HVPT capacity utilization is ~ 85–90 % vs. > 100 % globally. Lead times 60–90 weeks vs. 120–210 globally. **This is a genuine, durable comparative advantage** for siting AI compute in Chinese east-coast hubs (Lin'gang, Wuhu, Zhangbei, Hohhot, Gui'an).
- **The wrinkle: distribution at the load.** UHV delivers GW to the substation; getting it to a 400 MVA AI campus needs MV transformers, 220 kV step-downs, and switchgear. Local grid companies in BTH, YRD and GBA are short on 220 kV substation slots in 2026–2028; this is the closest Chinese analogue to the US distribution bottleneck.
- **Net read.** China can absorb its planned ~ 35–50 GW AI-data-center buildout through 2030 with **single-digit GW of slippage**, concentrated in 2026–2027 and concentrated in coastal load pockets. Westward relocation (Inner Mongolia, Ningxia, Gansu, Guizhou) is the policy-blessed safety valve and is already operational under "东数西算 / East-data-west-compute".

### 3.3 Europe — the structurally worst grid math

- **Investment gap.** Eurelectric (2024) and ENTSO-E TYNDP 2024 imply EUR 580–680 bn of T&D capex through 2030; current trajectory delivers EUR 380–430 bn. Distribution is ~ 70 % of the gap.
- **Permitting.** German "Bundesfachplanung" and France's "déclaration d'utilité publique" remain the gating items; even with the EU's 2024 Grid Action Plan, average HV line permitting still runs 7–11 years.
- **AI siting consequence.** Frankfurt, Amsterdam, London, Dublin and Paris (FLAP-D) data-center markets are functionally connection-frozen or quota-capped through 2027–2029. Marginal AI capacity is being pushed to Nordic (Norway, Sweden, Finland) and Iberian (Madrid, Aragon) markets where grid headroom exists.
- **Net read.** Europe is the most **AI-supply-constrained** region. The combination of weak grid build, weak gas supply (post-Ukraine), and aggressive ESG taxonomy means Europe under-hosts AI infra and over-imports AI services — a current-account drag, not a sovereign-AI position.

## 4. The five binding constraints — ranked

1. **Large power transformers (HVPT) and GOES electrical steel.** Hardest to relieve; capacity additions are 3–5 year projects with no substitutes. Single biggest 2026–2028 constraint.
2. **Interconnection queue length & cost allocation.** Policy-driven; FERC Order 2023 and 1920 are the right direction but operate on a 5–7 year clock. ERCOT and PJM the hottest queues.
3. **Distribution-layer substation capacity at load pockets.** Under-reported, locally severe (NoVA, Phoenix, Santa Clara, Dublin, Frankfurt, Beijing-CBD-fringe).
4. **HVDC converter stations and skilled HVDC EPC labour.** Especially binding for offshore wind tie-ins and long-haul renewables-to-load corridors.
5. **Linemen, transformer techs, HV commissioning engineers.** A workforce constraint that gets worse before it gets better; US IBEW pipelines are 4–6 years from inflection.

## 5. Investable expression (consistent with Cards 01–02)

The grid-bottleneck overlay **strengthens** the Card 01 "AI-energy bridge basket" and refines the long-list:

- **Overweight (high conviction)** — HVPT and HV equipment: **Hitachi Energy** (private under Hitachi 6501.T), **GE Vernova (GEV)**, **Siemens Energy (ENR.DE)**, **Eaton (ETN)**, **Schneider Electric (SU.PA)**, **Prysmian (PRY.MI)**, **Nexans (NEX.PA)**, **Quanta Services (PWR)**, **MYR Group (MYRG)**, **MasTec (MTZ)**. China A: **TBEA (600089)**, **XJ Electric (000400)**, **Pinggao Electric (600312)**, **Sieyuan Electric (002028)**, **NARI Tech (600406)**, **Henan Pinggao (600312)**.
- **Overweight (medium conviction)** — Behind-the-meter generation enablers: **Caterpillar (CAT)**, **Cummins (CMI)**, **Wärtsilä (WRT1V.HE)**, **Generac (GNRC)**, plus the Card 02 gas-midstream basket (**WMB**, **KMI**, **OKE**, **TRGP**).
- **Overweight (thematic)** — GOES and grade-3 electrical steel: **Cleveland-Cliffs (CLF)**, **Nippon Steel (5401.T)**, **JFE Holdings (5411.T)**, **Baowu group listed vehicles**.
- **Underweight** — Pure-play renewable IPPs in queue-constrained ISOs without firm interconnection (especially solar-only late-stage developers in PJM/MISO); FLAP-D-concentrated European colo REITs without secured grid capacity.
- **Pair (long/short)** — Long China grid-equipment basket / short US-pure-renewable-IPP-with-PJM-queue-exposure. This expresses the comparative grid-execution gap directly.

## 6. Stress tests

| Scenario | Effect on the wires gap | Effect on AI-data-center siting |
|---|---|---|
| HVPT lead-times normalise to 80 wks by 2028 | Gap closes ~ 30 % | + 5–8 GW US capacity 2028–2030 |
| FERC Order 2023 queue reform fully bites by 2027 | Gap closes ~ 15 % on interconnection axis | + 4–6 GW US capacity by 2030 |
| Recession-induced capex pullback by hyperscalers (–25 %) | Demand softens; gap narrows mechanically | Equipment names de-rate hardest |
| Coal-life-extension blocked by EPA / state PUC | Reliability deteriorates; BTM gas accelerates | Pushes deeper into Card 01's "pragmatic marriage" |
| China east-coast distribution accelerates (+ 15 % capex) | Closes Chinese wrinkle | China sovereign-AI hosting share rises further |

## 7. Bottom line

The wires layer is the **harder, slower, and less substitutable** half of the AI-power equation than the molecule layer. Card 02's gas-bridge sizing (~ 25–40 GW deliverable AI-grade gas by 2028 globally) is **already conditional on the wires being available**; the wires evidence suggests that condition is met for ~ 60–70 % of that envelope, not 100 %. The shortfall is closed by (a) BTM generation (gas reciprocating + co-located nuclear PPAs), (b) coal-plant life extension as reliability back-stop, and (c) geographic relocation to lower-queue regions (ERCOT-West, MISO-South, Inner Mongolia, Nordics, Iberia).

This **supports** Cards 01 and 02 and **adds a new investable layer**: HVPT, HV cable, GSU transformers, switchgear, T&D EPC contractors, and the GOES upstream — these are the *capacity-constrained pick-and-shovel* names of the AI-energy bridge, with multi-year backlog visibility and rising pricing power into 2028.

## 8. Handoff

The wires-side gap is now well-bounded. The next unanswered question is **whether the upstream raw materials and component supply (copper, aluminium, GOES, transformer-grade silicon steel, HV cable insulation, rare-earth-free motor-grade magnets) can be physically delivered into the equipment-maker order books at the scale implied by Section 5**. That is a materials-analyst question.

Suggested next analyst: **materials-analyst** — stress-test the copper / aluminium / GOES electrical steel / HV-cable insulation supply curve against the 2025–2030 grid-equipment order book implied by this card.
