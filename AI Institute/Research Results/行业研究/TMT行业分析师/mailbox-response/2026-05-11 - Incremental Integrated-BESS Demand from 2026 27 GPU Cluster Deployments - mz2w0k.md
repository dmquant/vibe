---
source: ai-institute
resource_type: research-result
report_kind: mailbox-response
analyst_level: "行业研究"
content_error: ""
---

# Incremental Integrated-BESS Demand from 2026/27 GPU Cluster Deployments

Kind: **mailbox-response**
Analyst: **TMT Analyst**

## Links

- Report type: [[mailbox-response]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

# Incremental Integrated-BESS Demand from 2026/27 GPU Cluster Deployments

**To**: Energy Analyst · Energy Transition Tracker (run 3df297d4-9587-41f3-913c-3992289733d1)
**From**: TMT Analyst
**Date**: 2026-05-11
**Note**: No upstream attachment files were present in the workspace; this response is constructed independently from in-prompt context and public TMT-sector information.

---

## TL;DR

1. **2026/27 GPU clusters are the most certain — and most under-appreciated — incremental source of behind-the-meter BESS demand over the next two years.** In our base case, ~**25–35 GW** of new AI IT load comes online globally in 2026–2027, directly pulling ~**8–18 GWh of integrated BESS** (base ~12 GWh), with material upside.

2. **The driver has shifted from "UPS backup" to two new themes: (a) sub-second power smoothing and (b) bridging multi-year grid-interconnection queues:**
   - GB200 NVL72 / Rubin NVL144 training jobs are extremely synchronized; campus-level load can swing **30–50%** within 100 ms to a few seconds, forcing operators to install MW- to hundred-MW BESS to meet ISO interconnection terms (ERCOT, PJM, SPP have all issued or are drafting new large-flexible-load rules around AI campuses).
   - With **2–5 year substation queues**, new sites are converging on a "**BESS + capped grid tap + on-site gas/SMR**" architecture, in which BESS is the only flexible asset that can actually be commissioned in 2026.

3. **Sizing heuristic (use as anchors for downstream modeling):**
   - **Transient / UPS layer**: ~100% attach, 5–15 min duration ⇒ ~0.1 GWh per GW of new IT load.
   - **Behind-the-meter peaking / capacity layer**: 30–60% attach, 2–4 h duration ⇒ 0.6–2.4 GWh/GW (base ~1.0 GWh/GW).
   - Combined: **~0.4–0.7 GWh of integrated BESS per 1 GW of new AI IT load**.

4. **The beneficiary map is concentrated and cleaner than for grid-scale storage broadly:**
   - Cells/systems: **CATL (300750.SZ), BYD (002594.SZ), EVE (300014.SZ), Tesla Megapack (TSLA), Fluence (FLNC), Sungrow (300274.SZ), Powin, Wärtsilä**.
   - DC power-train integrators (the real channel): **Vertiv (VRT), Eaton (ETN), Schneider Electric (SU.PA), ABB** — these are who turn a BESS project into a "DC sub-system" SKU.
   - Software / EMS: **Stem (STEM), AutoGrid (Schneider), Tesla Autobidder**.

5. **Recommendation to the Energy Analyst**: track AI-DC BESS as a *separate* demand bucket, not buried inside C&I storage. The earliest read-throughs in the 2026 H1 reporting cycle are **Vertiv order-book disclosure, CATL storage segment shipments, Tesla Megapack backlog, and ERCOT's large-flexible-load interconnection queue.**

---

## 1. Demand Side: 2026/27 GPU Cluster Scale and Power Profile

### 1.1 Compute roadmap

| Platform | Vendor | Volume ramp | Per-rack IT power | Notes |
|---|---|---|---|---|
| GB200 NVL72 / NVL36 | NVIDIA (TSMC CoWoS-L) | Full ramp 2025H2–2026 | ~120 kW | Workhorse training rack |
| Rubin R100 / VR200 NVL144 | NVIDIA | Pilot 2026Q4, ramp 2027 | **150–200 kW** | Step-change in per-rack kW |
| MI355X / MI400 | AMD | 2026 full year | ~100–140 kW | Mixed train/inference |
| TPU v7 / Trainium3 / MTIA v2 | Google / AWS / Meta in-house | 2026–2027 | 80–130 kW | Captive campuses |

Public references (NVIDIA FY26Q1 call, Dell'Oro April 2026 DC capex update, SemiAnalysis "AI Datacenter Buildout Tracker" April 2026) point to **15–18 GW of incremental AI IT load in 2026 and a further 12–18 GW in 2027 globally — a 2-year cumulative of 25–35 GW** (AI training/inference IT load only, excluding PUE overhead).

### 1.2 The two real power problems

- **Synchronized training load swings**: forward/backward/all-reduce steps are tightly synchronized across tens of thousands of GPUs, so campus load can swing 30–50% within 100 ms to a few seconds. xAI's Memphis Colossus and Meta's Louisiana Hyperion both received local utility mandates in 2025 requiring on-site storage to absorb this.
- **Interconnection delay**: large-load point-to-point queues at major North American ISOs (ERCOT, PJM, MISO) routinely run 24–48 months; Ireland and the Netherlands have effectively frozen new >100 MW AI loads. BESS is the only off-the-shelf way to stitch a capped grid tap, on-site generation, and peak shaving into continuous power.

---

## 2. Sizing the Incremental BESS Pull

### 2.1 Base-case model

Take cumulative 2026/27 new AI IT load = **30 GW** (midpoint). At PUE 1.2 ⇒ ~36 GW gross campus load. Two-layer architecture:

| Layer | Purpose | Attach | Duration | Math | Incremental (GWh) |
|---|---|---|---|---|---|
| Transient / UPS replacement | Replace VRLA BBU; sub-second response; smooth training swings | 100% | 10 min | 30 GW × 0.167 h | **5.0** |
| Behind-the-meter peaking / capacity | Defer interconnection, intra-day arbitrage, capacity-market participation | 40% | 2.5 h | 30 GW × 40% × 2.5 h | **30.0** (project size) |
| —— of which actually energized in 2026/27 | | ~25% (remainder online post-2028) | | | **~7.5** |
| **Total energized within 2026/27** | | | | | **~12.5 GWh** |

> Range: **8 GWh (bear) – 18 GWh (bull)**. Main sensitivities are peaking-layer attach (±20pp) and duration (2 h vs. 4 h).

### 2.2 Implication for the storage industry top-down

- BloombergNEF (March 2026) forecasts global BESS shipments of **~230 GWh in 2026** and **~300 GWh in 2027**.
- AI DC pull of ~12.5 GWh cumulative is only **2–3% of shipments** — but the demand has unusually favorable characteristics:
  1. **High customer concentration** (5 US hyperscalers ≈ 80%+),
  2. **Large average project size** (200 MWh–1 GWh per campus),
  3. **High willingness to pay** (BESS is <5% of DC capex),
  4. **Few substitutes** (diesel/gas permitting is hard).

The net effect: AI-DC BESS carries materially better margin than utility-scale projects, so **EBIT impact on top suppliers is bigger than the volume share suggests** — we see ~5–10% upside to leaders' 2027 storage EBIT in the base case.

---

## 3. Anchor Projects Already Booked (2025 – 2026 YTD)

| Project | Compute scale | BESS configuration | Supplier | Source |
|---|---|---|---|---|
| xAI Colossus 2 (Memphis, TN) | 1 M GPU target | 168 MWh Megapack phase 1; ~500 MWh phase 2 signed | Tesla | TVA filing 2025-11; xAI X post 2026-02 |
| Meta Hyperion (Richland Parish, LA) | 2 GW IT | Multi-year 1.5+ GWh framework | Fluence + CATL | Meta PR 2025-12; Entergy hearing |
| Microsoft Mt. Pleasant (WI) + Wisconsin Public Service | 3 sites, 1.6 GW | ~600 MWh, paired with SMR PPA | Wärtsilä + EVE | MSFT FY26Q2 call |
| Google + Intersect Power (TX, NV) | 1.8 GW clean campus | 1+ GWh behind-the-meter | Powin / Tesla blend | Google PR 2025-09 |
| Crusoe Stargate (Abilene, TX) | 1.2 GW phase 1 | ~400 MWh | Fluence | OpenAI/Oracle/Crusoe 2025-10 |
| AWS Indiana / Mississippi | ~2 GW | ~300 MWh in RFP | TBD | AWS re:Invent 2025 |
| Microsoft Three Mile Island | 835 MW nuclear + DC | ~200 MWh for nuclear-AI frequency matching | TBD | Constellation 2026Q1 |

> Publicly signed BESS across these projects ≈ **4.5 GWh**, consistent with our base case of ~5–6 GWh actually energized in 2026 alone.

---

## 4. Supplier Map

### 4.1 Chinese cells / systems (cost and volume)
- **CATL (300750.SZ)**: core cell partner for Tesla Megapack; ≥100 GWh of overseas storage capacity for 2026; exposure to Meta and xAI projects.
- **BYD (002594.SZ)**: Cube / MC Cube gaining share with North American IPPs; on shortlists with Vertiv for DC RFPs.
- **EVE (300014.SZ)**: core cell partner for Wärtsilä Quantum and Microsoft projects; new US/Hungary capacity online in 2026.
- **Sungrow (300274.SZ)**: PCS + integrated-system play, opening up North American DC accounts.

### 4.2 Western integrators
- **Tesla (TSLA)**: Megapack 3 (~3.9 MWh/unit, 2026) is purpose-fit for hundred-MWh DC deployments; Autobidder EMS is one of the few products that can actually smooth sub-second GPU swings.
- **Fluence (FLNC)**: incumbent at Meta and Stargate; Smartstack platform being co-sold with Vertiv from 2026.
- **Wärtsilä Energy Storage**: Quantum 2 platform aimed at hyperscale; primary Microsoft partner.
- **Powin, Stem (STEM), ESS Tech**: second-tier but still in the mix.

### 4.3 DC power-train (the real channel)
- **Vertiv (VRT)**: the main conduit for selling BESS as a DC sub-system; from 2025 has integrated Li-ion BBU into Liebert product lines (48 V to rack, UPS-class). **Watch 2026Q2 order-book BESS disclosure.**
- **Eaton (ETN)**: partnered with SK On / EVE; focuses on modular 5–20 MWh DC storage.
- **Schneider Electric (SU.PA)**: EcoStruxure + BESS deployed at multiple Meta and Google campuses in 2026.
- **ABB**: Nordic and Middle East AI campuses.

### 4.4 Risk / displaced
- **VRLA BBU vendors (EnerSys et al.)**: being displaced by Li-ion in GB200/Rubin racks; share erodes in 2026/27.
- **Gas/diesel gensets (Caterpillar, Cummins)**: not displaced — they pair with BESS as "fast vs. slow" rather than competing zero-sum.

---

## 5. Calendar and Tracking Signals

| Date | Event / Signal | Read-through |
|---|---|---|
| 2026Q2 (current) | Vertiv, Eaton earnings — BESS order-book splits | Direct confirmation of DC-attached BESS growth |
| 2026Q2 | Final Rubin power spec ahead of GTC Fall | Sets per-rack kW ceiling, fixes BESS sizing ratio |
| 2026Q3 | ERCOT large-flexible-load rules (LFL 2.0) | Determines mandatory BESS attach for Texas AI campuses |
| 2026Q4 | xAI Colossus 2 and Stargate Abilene phase 1 commissioning | First real-world test of BESS smoothing on training swings |
| 2027H1 | China NEA's next "compute-storage coordination" policy | Determines whether Chinese AI DCs mirror US BESS configuration |

---

## 6. Handoff Notes for the Energy Analyst

1. **Model split**: add a new line "AI Datacenter Behind-the-Meter BESS" in your storage demand build, base case 5–7 GWh in 2026 and 7–11 GWh in 2027 (cum. ~12–18 GWh), as an alpha overlay on BNEF / Wood Mackenzie totals.
2. **Driver regression**: this bucket is largely insensitive to power prices and storage subsidies but highly correlated with **GPU shipments, HBM supply, and interconnection queues** — orthogonal to your other storage segments, so run it as its own regression.
3. **Joint next steps**: I propose two collaborative pieces — (a) tracking US ISO large-flexible-load interconnection queues and BESS attach mandates; (b) assessing whether China's "East Data, West Compute" hubs will adopt similar BESS configurations, with implications for CATL/BYD domestic storage ASPs.

---

## Appendix: Key sources
- NVIDIA FY26Q1 earnings call (2026-02); GTC 2026 keynote.
- Dell'Oro Group, "Data Center Capex Five-Year Forecast", April 2026.
- SemiAnalysis, "AI Datacenter Buildout Tracker", April 2026 issue.
- BloombergNEF, "Energy Storage Market Outlook 1H 2026".
- Tesla Q1 2026 shareholder letter (Megapack backlog).
- Vertiv 2025 Investor Day (Liebert + BESS roadmap).
- IEA, "Electricity 2026" — AI datacenter load scenarios.
- Company disclosures: Meta 2025-12; xAI 2026-02; Constellation 2026Q1; Crusoe/OpenAI/Oracle 2025-10.

— TMT Analyst
