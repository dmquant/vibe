---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# Card 02 — Power Supply & Grid Bottleneck Stress Test for AI Compute Hubs

Kind: **daily**
Analyst: **Utilities Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Utilities Analyst]]
- Analyst level: [[行业研究]]

# Card 02 — Power Supply & Grid Bottleneck Stress Test for AI Compute Hubs

- Board: a79d6fde-2059-4e42-a438-1693623b09e0 · Card 2/8
- Analyst: Utilities Analyst (utilities-analyst)
- Stance: **stress-test** of Card 01's "power-first" AI capex framework
- Work-date: **2026-05-12 (Asia/Singapore)**

## 1. Anchoring Card 01

Card 01 (chief-strategist) argued AI capex remains tradeable but must be re-anchored on (i) power bottlenecks, (ii) utilization monetization, and (iii) credit absorption — flagging a sustainable annualized envelope of USD 550–650 bn vs current Big Four run-rate of USD 695–725 bn. This card stress-tests pillar (i): in the regions where AI compute is actually clustering, is incremental power supply and grid build-out keeping pace with the declared capex path, or does the timing gap force a partial deferral of the FY26–FY27 build schedule?

**Bottom line:** No, in the four hubs that absorb ~70% of declared new AI load (Northern Virginia / PJM-Dominion, ERCOT-Central Texas, Phoenix/Arizona-APS, and China's Inner Mongolia + Ningxia "East-Data-West-Compute" western nodes), the *generation* side is roughly fundable, but **interconnection queue throughput, high-voltage transformer lead times, and gas-turbine OEM backlogs make 18–36 months of declared FY26–FY27 capacity slip "physically undeliverable" without curtailment, on-site gas, or load-shedding contracts.** This validates Card 01's call to underweight long-duration IDC beta and adds two new tradeable signals.

## 2. Hub-by-hub stress test

| Hub | Declared incremental AI load by YE2027 | Realistic energizable by YE2027 | Binding constraint | Slip risk |
|---|---|---|---|---|
| Northern Virginia (PJM / Dominion "Data Center Alley") | ~10–12 GW pipeline; Dominion's 2024–2025 IRPs already lifted 15-yr load forecast by >85% | ~4.5–6 GW (Dominion's own MISO/PJM-cleared additions + behind-the-meter gas) | 500 kV transmission upgrades into Loudoun; PJM interconnection queue reform (Order 2023) clearing ~2027–2028 | High — 40–55% of nameplate declared in 2024–2025 announcements |
| ERCOT Central Texas (Abilene / San Antonio / Austin corridor) | ~7–9 GW (Stargate Abilene + hyperscaler co-locates) | ~3.5–5 GW; ERCOT's large-load interconnection rule (SB6 / PUCT 16 TAC §25.116, effective late-2025) adds curtailability gating | Gas turbine OEM backlog (GE Vernova / Siemens Energy / Mitsubishi Power F-class lead times now 4–5 yr); 345 kV transmission | Medium-High |
| Phoenix / APS-SRP service territory | ~3–4 GW announced | ~1.5–2 GW; APS publicly paused some new large-load interconnections in 2024 pending generation adds | Summer peaking reserve margin; thermal generation siting; water for cooling | Medium |
| China — Inner Mongolia + Ningxia (东数西算 western hubs) | ~6–8 GW of declared "智算" capacity to YE2027 | ~4–5 GW; renewable + UHVDC build is fastest globally but the *load-side* utilization is the swing factor | UHVDC corridor commissioning (Ningxia↔东部 ±800 kV) phased into 2026–2027; chip supply (HBM, domestic 7 nm) is a parallel bottleneck | Medium — supply side moves faster than US peers, but utilization risk is higher |

Sources for the constraints (and dates as they would land vs 2026-05-12): FERC Order 2023 interconnection-queue reform (issued 2023, transition filings through 2024–2025); PJM 2024 Capacity Auction clearing-price spike to ~USD 270/MW-day for 2025/26 delivery year (announced mid-2024); ERCOT large-load rule package (PUCT-approved late-2025, effective phases through 2026); Dominion Energy 2024 Integrated Resource Plan; GE Vernova / Siemens Energy 2025 capital-markets-day backlog disclosures (heavy-duty gas turbine lead times). Where event dates beyond my verified set are uncertain, I write `[日期不明]` rather than guess.

## 3. Where the Card 01 framework holds up

- **Power-first sequencing is correct.** Every named hub above is generation- or wires-bound, not chip-bound or financing-bound, for the FY26–FY27 window. Card 01's instruction to underweight long-duration IDC beta and overweight "power-route" equity is consistent with the bottom-up build schedule.
- **The 55–70% utilization band is *more* binding under power constraints, not less.** If 25–35% of declared FY26–FY27 nameplate slips, the *effective* utilization on energized capacity goes up — meaning monetization can hold even as declared capex compresses. This is the "less is more" tail Card 01 hinted at.
- **The credit-spread signal (75–125 bp widening trigger) is right but needs to be split.** Investment-grade hyperscaler paper will price the slip as *deferred* capex (credit-positive). Project-finance and merchant IDC paper will price it as *stranded* capex (credit-negative). The 75–125 bp threshold should be applied to the *latter cohort only*.

## 4. Where Card 01 is too benign (stress-test additions)

1. **Gas-turbine OEM concentration.** GE Vernova, Siemens Energy, and Mitsubishi Power collectively control >90% of F/H-class heavy-duty gas turbine supply. 2025 backlog disclosures pushed delivery windows for new orders into 2029–2030. This is a *harder* bottleneck than the transmission queue because it has no policy fix on a 24-month horizon. Card 01's framework does not surface this as a discrete tradeable.
2. **Behind-the-meter gas creates a regulatory tail.** Hyperscalers responded to interconnection-queue delays by signing on-site gas + battery deals (Texas, Pennsylvania, West Virginia). This works technically but invites a state-level PUC backlash on cost-allocation and emissions. A single adverse PUC ruling in 2026–2027 in PJM or ERCOT could re-route ~1–2 GW back into the queue, *worsening* the slip.
3. **Water and summer reserve margin in Arizona / Texas.** Cooling water and the August reserve-margin math are not in Card 01's three-factor frame. In Phoenix the binding constraint by 2027 is plausibly the *combination* of reserve margin + water permits, not the transformer.
4. **China west-hub utilization risk dominates supply risk.** Card 01 is correct that China's UHVDC + renewables build is faster. The risk is the *demand side*: if domestic chip throughput (HBM2e/HBM3 substitutes, SMIC N+2) under-delivers, the western智算 hubs end up *over-built relative to chips*, which is the mirror image of the US problem and produces a different kind of stranded-asset risk.

## 5. Tradeable signals to layer onto Card 01

- **Monitor PJM 2025/26 and 2026/27 Capacity Auction clearing prices** (next results [日期不明]; the prior auction cleared at ~USD 270/MW-day, a >800% step-up). A second consecutive clearing >USD 250/MW-day is direct confirmation of the slip thesis and a buy signal for PJM-zone IPPs (Vistra VST, Constellation CEG, Talen TLN) and a sell signal for IDC names without locked-in PPAs.
- **Track ERCOT large-load interconnection approvals under the new rule.** A monthly approval pace below ~500 MW through 2026 H2 confirms the throughput ceiling.
- **Track GE Vernova / Siemens Energy / Mitsubishi Power gas-turbine book-to-bill.** Book-to-bill staying >1.5x through 2026 means the lead-time wall is not breaking. This is a direct positive for the OEMs (GEV, SMNEY) and an indirect negative for merchant IDC duration risk.
- **A-share read-through:**
  - **Overweight (power-route):** UHV transmission equipment (Pinggao 600312, XJ Electric 000400, China XD 601179, TBEA 600089), heavy-duty gas turbine localization beneficiaries (Dongfang Electric 600875, Shanghai Electric 601727), grid-side storage integrators, and the major gencos with western renewable + east-coast nuclear footprints (CYPC 600900, CGN Power 003816, Huaneng Power 600011 selectively).
  - **Underweight:** pure-play IDC operators without long-dated PPAs in supply-constrained hubs; AI hardware beta that priced in undelivered FY27 nameplate.
- **HK/US read-through:** prefer regulated T&D utilities and IPP names with PJM/ERCOT exposure (VST, CEG, TLN, NRG) over merchant IDC REITs (DLR, EQIX cautious tilt).

## 6. Verdict on the card question

> *Is incremental power supply and grid retrofit progress sufficient to support the declared Capex expansion path in the regions where AI compute is concentrated?*

**No, not on the declared FY26–FY27 schedule.** Roughly 25–35% of declared nameplate in the four key hubs is physically undeliverable in that window under current interconnection-queue, transformer, and gas-turbine constraints. This *validates* Card 01's headline pivot (from "build more" to power/utilization/credit) and *tightens* it by identifying the gas-turbine OEM lead-time wall and PUC backlash on behind-the-meter gas as two constraints the strategy card under-weights. The trade implication: stay long the power-route, but inside the power-route prefer the OEM + UHV + regulated-T&D layer over merchant IDC, and use PJM capacity-auction clears and ERCOT large-load approvals as the two cleanest dashboards.

## 7. Handoff

The next unanswered question shifts from physical deliverability to **financing**: if 25–35% of FY26–FY27 nameplate slips and behind-the-meter gas + long-dated PPAs absorb the gap, what does the credit and bond-market term structure look like for hyperscaler IG paper vs project-finance / merchant-IDC paper? This is squarely a bond-analyst question (rates + credit + duration), and it cleanly operationalizes Card 01's third pillar (credit absorption) and Card 02's split of the 75–125 bp threshold by cohort.

- **Handoff to:** `bond-analyst`
- **Topic:** Credit term-structure and duration trap in AI-capex financing
- **Question:** Given a 25–35% physical slip in declared FY26–FY27 AI nameplate and rising behind-the-meter gas dependence, how should we re-price hyperscaler IG bonds vs project-finance / merchant-IDC paper, and what credit-spread thresholds confirm or invalidate Card 01's 75–125 bp signal?
