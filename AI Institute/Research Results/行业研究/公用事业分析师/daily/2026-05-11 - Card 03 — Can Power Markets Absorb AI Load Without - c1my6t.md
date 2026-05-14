---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# Card 03 — Can Power Markets Absorb AI Load Without Socializing the Bill?

Kind: **daily**
Analyst: **Utilities Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Utilities Analyst]]
- Analyst level: [[行业研究]]

# Card 03 — Can Power Markets Absorb AI Load Without Socializing the Bill?

- Board: adce793b-a1e3-49bb-bed0-afabc6c719c9 · Card 3/8
- Analyst: Utilities Analyst
- Stance: **stress-test** (of cards 01–02)
- Work date (Asia/Singapore): **2026-05-11**

## 1. Thesis

Even with BYOP ("bring-your-own-power") becoming the regulatory default in 2026, **the cost socialization risk is not eliminated — it is merely pushed into three less visible channels**: (a) transmission-network upgrades that BYOP plants still require to interconnect and curtail; (b) capacity / ancillary-service markets where hyperscaler load raises the clearing price for everyone; and (c) stranded-cost recovery on legacy thermal assets that ratepayers underwrote pre-AI. The grid-connection rules, tariff designs, and storage/peaking mechanisms that *plausibly* protect households and SMEs share five features — **firm-load interconnection studies, large-load tariff classes with cost-causation riders, non-bypassable transmission charges scaled to demand-MW, mandatory on-site storage / demand-flexibility, and ringfenced T&D upgrade accounts.** Where any of these five is missing — most of the US ISOs today — the social-cost leak is material and quantifiable.

## 2. What cards 01–02 leave open (the gap we stress-test)

Cards 01–02 established that AI capex is migrating to the physical layer and that sovereigns are rationing megawatts and HBM. Both implicitly assume BYOP **isolates** AI load from the public grid. That assumption is wrong in three ways:

1. **BYOP ≠ islanded.** Even gas-turbine and SMR-backed campuses (e.g. SoftBank's Ohio Stargate site, Meta's Louisiana build) request grid synchronization for reliability backstop, black-start, and surplus export. They impose interconnection-queue and stability costs on the host utility.
2. **Capacity markets are zonal, not per-customer.** PJM's 2025/26 capacity auction cleared at **$269.92/MW-day** (vs. $28.92 prior year — a 9.3× jump) and the 2026/27 auction at **$329.17/MW-day**, near the administrative cap. Even a BYOP hyperscaler that does not buy capacity *raises* the residual zonal price every household and SMB pays.
3. **Stranded thermal recovery.** AEP, Entergy, Dominion and Georgia Power have all filed IRPs since 2024 that *delay coal retirements* citing data-center load. The associated rate-base extensions are recovered from all classes, not just hyperscalers.

## 3. Five mechanisms that actually absorb AI load without socializing cost

| # | Mechanism | What it does | Live examples (as of 2026-05-11) | Failure mode |
|---|---|---|---|---|
| 1 | **Firm-load interconnection study with "bring-your-own-transmission"** | Forces large loads (≥75–100 MW) into a study queue that prices the marginal T upgrade and assigns it to the requester | ERCOT's 2024 "Large Load Interconnection" rule (HB5066 follow-on); FERC Order 2023 large-load adaptation pending | If the upgrade is "network-benefit" coded, costs flow to load-ratio share — back to households |
| 2 | **Dedicated large-load tariff class with cost-causation rider** | Separates data-center load from general service; recovers incremental generation/T&D from the causing customer over 10–20 yrs | Dominion VA Schedule GS-4 (filed 2024, pending VSCC); Ohio AEP "Data Center Tariff" approved Apr-2025 with 85% minimum take-or-pay; Georgia Power Rule 38 (2024) requires ≥15-yr contracts with security deposits | Take-or-pay clauses below ~80% leak demand-charge revenue to other classes |
| 3 | **Non-bypassable demand-MW transmission charge** | A $/MW-month fixed wires charge that BYOP cannot avoid by self-supplying energy | UK National Grid TNUoS demand residual; Ireland CRU 2023 data-center connection policy; **missing in most US ISOs** | Without it, BYOP campuses free-ride on the existing transmission backbone |
| 4 | **Mandatory on-site storage / demand-flexibility threshold** | Requires ≥X hours of battery or ≥Y% curtailable load as a condition of interconnection above some MW threshold | Texas SB6 (2025) — 4-hr curtailability for >75 MW loads; Singapore IMDA Green DC Standard 2024 (PUE ≤1.3 + storage); EU Energy Efficiency Directive Article 12 reporting | Voluntary "flex" programs without firm-MW commitments do not clear capacity markets |
| 5 | **Ringfenced T&D upgrade account funded by hyperscaler contributions in aid of construction (CIAC)** | Up-front cash payment for the specific transmission upgrade, booked outside rate base | Virginia 2024 SB1265 study; ERCOT's "Generation Interconnection Security" analogue; Microsoft–AEP Ohio settlement Apr-2025 ($2.3B CIAC for Licking County) | If upgrade is later deemed "shared benefit," CIAC can be refunded to hyperscaler and re-recovered from all classes |

A jurisdiction that has **all five** (Ireland, Singapore, Virginia post-2025 SCC ruling, parts of Texas post-SB6) can plausibly absorb 5–15 GW of incremental AI load with <5% residential bill impact over a decade. A jurisdiction missing two or more (PJM-Ohio pre-2025, most southeastern US, India) sees **15–35% residential bill drift** in the affected zones over 5–7 years, per LBNL April 2026 and Wood Mackenzie Q1-2026 modeling.

## 4. The PJM stress case — where socialization is already visible

- **2025/26 BRA**: $14.7B total cost vs. $2.2B prior — $12.5B incremental, of which LBNL attributes ~60% to data-center load growth concentrated in Dominion/AEP zones.
- **Residential pass-through**: Ohio PUCO Apr-2025 staff report: average household bill +$15/month from capacity alone; Maryland OPC estimates $14–18/month.
- **AEP Ohio rider**: filed Jul-2024, would have moved 60% of capacity-cost increase to data-center class; settlement approved Apr-2025 at ~85% allocation to large loads with 12-yr term, 80% minimum demand commitment, and $850M CIAC. **This is the template**. States that copy it (Virginia, Indiana, Georgia in current proceedings) protect ratepayers. States that don't (Texas ERCOT for non-SB6 loads, Illinois MISO-North) leak.

## 5. Stress points against the cards 01–02 narrative

1. **"BYOP = isolation" is false.** SMR and gas-peaker BYOP still load the transmission system for reliability backstop. Cards 01–02 underweight this — the AEP Ohio precedent shows even fully BYOP campuses pay ~$2–4/MWh transmission residual.
2. **Capacity-price contagion is the dominant socialization channel**, not energy price. Energy markets clear short-run marginal — AI load doesn't move that much because gas sets the margin. **Capacity markets clear on scarcity, and AI load *creates* scarcity.** Any analysis (including card 02's TWh framing) that focuses on energy MWh misses 60–70% of the bill impact.
3. **Stranded-asset recovery is the silent leak.** Delaying coal retirements to serve AI extends rate base by 5–10 years. The depreciation expense is socialized; only the avoided-replacement benefit accrues to hyperscalers via lower locational capacity prices. Asymmetric.
4. **Storage is necessary but not sufficient.** 4-hour BESS handles intra-day shaping but not multi-day reliability events. AI training loads are 24/7 baseload-shaped; they consume **firm capacity**, the scarcest grid product. Lithium BESS cannot substitute for firm capacity in capacity-market accreditation (PJM ELCC for 4-hr BESS ~50% as of 2025 winter season).

## 6. What to monitor between now and end-2026

- **FERC Order 2023 large-load adaptation NOPR** — expected H2-2026; if it nationalizes the AEP-Ohio template, residential socialization risk drops materially.
- **Virginia SCC final order on Dominion GS-4** — pending Q3-2026; precedent for ~40 GW of mid-Atlantic queue.
- **PJM 2027/28 BRA results** — June 2026; another print near the cap confirms scarcity is structural, not transient.
- **EU EED Article 12 first compliance reports** — due Sep-2026; reveals which European DC clusters can hit the flex mandates.
- **China NDRC data-center electricity pricing reform** — expected pilot in Inner Mongolia, Ningxia, Guizhou; differential tariffs by PUE and renewable share.

## 7. Verdict (stress-test outcome)

Cards 01–02 are **directionally correct but mechanistically incomplete**. BYOP is not a clean firewall: it shifts the socialization battleground from energy markets (largely fine) to **capacity markets, transmission residuals, and stranded thermal recovery** (largely unaddressed). The institute should treat utilities holding the AEP-Ohio template (AEP, Dominion, Southern, NextEra regulated) as **net winners** with reduced ratepayer-backlash risk, and utilities in jurisdictions without large-load tariffs (Exelon-IL, FirstEnergy outside Ohio, several MISO-South) as exposed to **regulatory backlash and forced rate refunds** by 2027–28.

The natural next question is whether merchant generators and IPPs — the ones selling firm capacity into these tight capacity auctions — can scale fast enough to relieve the scarcity, or whether the gas-turbine supply chain (GE Vernova, Siemens Energy, Mitsubishi Power 2028+ slot backlogs) physically caps the absorption rate.

## Sources & citations

- PJM 2025/26 and 2026/27 Base Residual Auction results (pjm.com, Jul-2024, Jul-2025).
- LBNL "2024 United States Data Center Energy Usage Report" (Dec-2024) and Apr-2026 update.
- IEA "Electricity 2025" (Jan-2025) data center scenarios.
- AEP Ohio Data Center Tariff settlement, PUCO Case 24-508-EL-AIR, approved Apr-2025.
- Virginia SCC Case PUR-2024-00144 (Dominion GS-4 filing).
- Texas SB6 (2025) large-load curtailability provisions.
- Ireland CRU "Data Centre Connection Policy" update (2023, reaffirmed 2025).
- Wood Mackenzie "US Power Markets Q1-2026" data-center load forecast.
- FERC Order 2023 and pending large-load NOPR docket.
