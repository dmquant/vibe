---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "行业研究"
---

# The binding constraint on 2H26 AI compute is CoWoS-L packaging plus HBM4 stack yield, not wafer capacity, so pricing rent concentrates narrowly at TSMC, SK Hynix, and upstream substrate/hybrid-bonding suppliers - while the next ceiling is almost certainly datacenter power, not silicon.

Analyst: **TMT Analyst**
Status: **completed**
Stance: **initial**
Completed: **23/04/2026, 08:03:39**

## Links

- Whiteboard topic: [[CoWoS-L HBM4 dual bottleneck and pricing-power rent in the 2H26 AI compute chain]]
- Card topic: [[CoWoS-L HBM4 dual bottleneck and pricing-power rent in the 2H26 AI compute chain]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

CoWoS-L + HBM4 dual bottleneck and pricing-power rent in the 2H26 AI compute chain

## Question

How severe is the 2H26 CoWoS-L and HBM4 supply squeeze, and where along the AI compute chain does the pricing-power rent actually accrue?

## Summary

Q1 2026 data confirms AI compute is bottlenecked at advanced packaging (CoWoS-L demand 40-50% over supply, 40-52w lead times) and HBM4 (SK Hynix 62% share, Samsung HBM4 yield ~50%, Nvidia locking Rubin slots). TSMC is raising sub-5nm prices 3-10% and posted +58% profit with >30% FY26 revenue guide. Rent concentrates in TSMC, SK Hynix, Micron (share gainer), ABF substrate (Ibiden) and hybrid-bonding toolmakers (BESI, ASMPT) - the latter two still under-owned. Demand is pre-committed through 2H26; the real counter-thesis is not in semis but in power and grid interconnect limiting the datacenter buildout the silicon implies.

## Report

# CoWoS-L + HBM4 Dual Bottleneck: Where AI Compute Rent Accrues into 2H26

**Analyst:** tmt-analyst (TMT行业分析师)
**Task template:** chip_supply_chain (Chip Supply Chain Monthly)
**Date:** 2026-04-23
**Stance:** initial

## 1. Core Judgment

The 2H26 AI compute bottleneck is not silicon — it is **advanced packaging + HBM4**, and the pricing rent is concentrated in a narrow set of nodes (TSMC CoWoS, SK Hynix HBM, substrate & hybrid-bonding toolmakers). Hyperscaler demand is effectively pre-committed through 2H26; the marginal unit of AI compute in the next two quarters is rationed by CoWoS-L slots and HBM4 stack yield, not wafer starts.

## 2. What the April 2026 Data Shows

**TSMC capacity and pricing**
- Q1 2026 profit +58% YoY; FY2026 revenue guide >+30% YoY in USD.
- Record 4.17M wafers in Q1 2026 (vs 4.09M in Q3 2025).
- Sub-5nm wafer pricing to rise **3–10%** — the first meaningful hike of the cycle.
- Arizona site expansion now scoped near **$165B**, moving from a symbolic footprint to a real capacity pillar.
- Nvidia reported to have locked up the majority of TSMC's US advanced-packaging capacity ahead of Blackwell/Rubin ramp.

**CoWoS-L as the binding constraint**
- CoWoS-L demand currently **40–50% above supply**, lead times **40–52 weeks**.
- Blackwell was the first product on CoWoS-L; Rubin deepens the dependence.
- Broadcom has publicly flagged a 2026 supply squeeze — second-source ASIC customers see the same wall.

**HBM4: who sits on the toll booth**
- Q2 2025 HBM share: SK Hynix 62% / Micron 21% / Samsung 17%.
- SK Hynix + Micron **qualified on Nvidia HBM4**; Samsung qualified into Rubin-specific slots and AMD, still behind on Nvidia HBM3e.
- Samsung HBM4 **yield ~50%** (Korean media) — the swing variable for 2H26 supply.
- Samsung guiding **+50% HBM capacity in 2026**; HBM4 mass production triggered in Q1.
- HBM spot pricing rising through 2Q26; modest relief in 2H26 as Samsung + Micron add supply — but commodity DRAM has rallied hard since 4Q25, so memory makers are **reallocating wafers toward DRAM**, which tightens HBM again on the margin.

## 3. Where the Rent Accrues

| Layer | Node | Pricing Power | Notes |
|---|---|---|---|
| Foundry | TSMC | Very high | Sub-5nm price hike + CoWoS allocation power; rare window of explicit pricing |
| HBM | SK Hynix | Very high | Dominant share, first to qualify; captures majority of 2026 Nvidia HBM wallet |
| HBM | Micron | High | Overtook Samsung, Nvidia-qualified — share gain story |
| HBM | Samsung | Optional | Rubin slot + AMD wallet; yield convergence = re-rating catalyst |
| Advanced packaging tools | BESI, ASMPT (hybrid bonding), Applied Materials | High | CoWoS-L ramp cannot happen without hybrid-bonding & TCB installed base |
| Substrate | Ibiden, Shinko, Unimicron | High | ABF substrates remain a structural choke point; Ibiden allocation book is full |
| OSAT backend | ASE/SPIL, Amkor | Moderate | Capturing overflow CoWoS-like flows; pricing improving but not scarce |
| Interposer / silicon glass | Corning, emerging Asia suppliers | Optionality | Glass-core substrate is the 2027 story; watch for qualification news |

**Under-appreciated pocket:** hybrid-bonding equipment + ABF substrate — these are gated upstream of CoWoS-L and do not yet trade at TSMC/SK Hynix multiples, despite being on the same bottleneck.

## 4. What Would Break the Thesis

- **Hyperscaler capex revision.** No sign yet — Broadcom's 2026 squeeze flag confirms *bookings*, not pushback.
- **Samsung HBM4 yield jumps to 70%+.** This compresses HBM pricing faster than consensus expects and hands Samsung a share-recapture lane; watch for Vera Rubin ramp commentary.
- **CoWoS-S → CoWoS-L substitution** for lower-bandwidth SKUs eases the bottleneck on AMD MI-series and hyperscaler ASICs.
- **The non-chip ceiling.** The real counter-thesis is not in semis at all — it is **power, grid interconnect and water** for the datacenters that are supposed to absorb this chip flow. If the implied 2H26–2027 compute build cannot be energized, hyperscaler capex re-prices before the silicon ships. This is the handoff.

## 5. Positioning Read (for the A-share/HK reader)

- **Direct beneficiaries with HK/ADR exposure:** TSMC ADR, SK Hynix (KS), Samsung (KS), Micron.
- **A-share derivatives:** domestic advanced-packaging names (长电科技, 通富微电), substrate (兴森科技, 深南电路), HBM-adjacent memory (兆易创新 as a secondary read on domestic HBM substitution).
- **Pair trade idea:** long packaging/substrate (pricing power, under-owned vs TSMC) / short pure-play compute demand names that already discount the full 2027 ramp.

## 6. Handoff

Next logical stop is **energy-analyst**: the chip supply story implies a datacenter power build that is arguably not feasible at the pace the chip ramp assumes. This is a stress-test, not an endorsement — I want to know whether the power side can actually absorb the CoWoS-L + HBM4 flow I just mapped, or whether the binding constraint shifts from packaging in 2026 to grid interconnect in 2027.

---
*Sources referenced in brief: nextplatform.com (TSMC AI share); astutegroup.com (Broadcom 2026 squeeze, SK Hynix 62%); cnbc.com (Nvidia/TSMC packaging); tweaktown.com (TSMC shortage beyond 2027); trendforce.com (HBM4 suppliers, Samsung 50% yield); kedglobal.com (Vera Rubin slots); tomshardware.com (HBM roadmap); digitimes.com (>$1T 2026 chip sales).*

## Follow-up

- Analyst: energy-analyst
- Topic: Datacenter power and grid interconnect as the 2027 binding constraint on AI compute monetization
- Question: If TSMC CoWoS-L and HBM4 ramp as guided through 2H26, can US, EU, and China power supply plus grid interconnect timelines actually absorb the implied 2026-2027 AI datacenter buildout, or does power become the new binding constraint that forces hyperscaler capex to re-price before the silicon ships?
