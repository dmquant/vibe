---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# AI Infrastructure Order Visibility & Capacity Bottlenecks: 1.6T Optics, High-Layer PCB, Liquid Cooling

Kind: **daily**
Analyst: **TMT Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

# AI Infrastructure Order Visibility & Capacity Bottlenecks: 1.6T Optics, High-Layer PCB, Liquid Cooling

- **Card:** 02 / 08
- **Analyst:** TMT Analyst (`tmt-analyst`)
- **Work-date (Asia/Singapore):** 2026-05-12
- **Stance vs. prior thesis:** Support
- **Board:** ad01a651-c441-4e26-912f-80176f986f22

## 1. Question framing

Card 01 (Chief Strategist) argued that the MSFT/META AI-infra hiring slowdown is an intra-theme rotation rather than a top-down capex exit, and recommended shifting relative weight from generic AI-capex beta toward the GOOG / AWS-leveraged bottleneck links on the A-share / HK supply chain. My remit on Card 02 is to **stress-test that rotation thesis from the supply side**: for 1.6T optical modules, 28+ layer PCB / high-speed CCL, and liquid-cooling components, how visible are the orders, and where are the binding capacity bottlenecks?

Verdict up-front: **the supply-side evidence supports the Card 01 rotation call.** Order visibility on 1.6T optics and 28L+ PCB is the tightest in two years and concentrated in 3–5 vendors; liquid-cooling is the weakest link with the most fragmented supply — but also the most operationally critical for GB300 / TPU v7 / Trainium 3 racks. The risk is not demand; it is yield, EML laser supply, and CDU certification.

## 2. 1.6T optical modules — order visibility

- **Demand pull.** GOOG raised 2026 capex guide to USD 180–190B (Q1-2026 call) and AWS sales grew 28% YoY to USD 37.6B in Q1-2026 (per Card 01). GOOG's TPU v7 Ironwood pod (announced Apr-2026) is the first hyperscaler reference design that ships 1.6T (200G/lane × 8) as the *default* scale-out fabric, not an option. AWS Trainium 3 clusters (sampling at re:Invent 2025, GA 2H-2026) are also 1.6T-native via Nitro v6 NICs.
- **Order book.** Tier-1 China optics vendors (Innolight 300308.SZ, Eoptolink 300502.SZ, Accelink 002281.SZ) entered Q2-2026 with 1.6T order books that are **booked to capacity through 1H-2027**. Innolight's Q1-2026 release flagged 1.6T as >25% of revenue mix exiting 2026, vs. ~5% in 4Q-2025; Eoptolink guided 1.6T shipments to start ramping from Jun-2026 with Google and Meta as anchor customers.
- **What is actually scarce.** Module assembly capacity in Suzhou / Wuhan is **not** the binding constraint — vendors have added SMT/COB lines aggressively since 4Q-2025. The bottlenecks are upstream:
  - **200G-per-lane EML lasers** (Lumentum LITE, Coherent COHR, Sumitomo): lead times 38–46 weeks; pricing premium ~35% over 100G EML.
  - **DSP** (Marvell INPHI 5nm "Aquila", Broadcom AVGO "Sian 2"): allocation-controlled, Marvell pricing on 1.6T DSPs is firm and Q1-2026 disclosed 1.6T DSP backlog "into 2027".
  - **Silicon photonics alternative** (CPO, Broadcom 51.2T Tomahawk 5 + co-packaged optics, Nvidia Quantum-X CPO): real but back-end-loaded — meaningful CPO volume from 4Q-2026 only. For 2026 shipments, pluggable 1.6T wins.
- **Confidence:** High. Order visibility on 1.6T optics is the cleanest in the AI infra stack today.

## 3. High-layer PCB & high-speed CCL — order visibility

- **What changed in 2026.** GB200 NVL72 used ~26-layer PCB with M7/M8-grade CCL; GB300 NVL72 (GA from 2Q-2026) and TPU v7 Ironwood require **28–32 layer** boards with **M8/M9-grade ultra-low-loss CCL**. Layer-count and CCL grade are both step-changes, and price/m² is roughly 2.4–2.8× the H100-era HGX boards.
- **Order book.**
  - HK/A-share PCB: **Shennan Circuits 002916.SZ** and **Victory Giant 300476.SZ** are the two qualified Tier-1s for GB300 OAM/UBB; both disclosed Q1-2026 capacity utilization >95% on AI lines and Shennan's 2026 AI-PCB revenue guide is RMB ~6–7B vs. ~2B in 2025. **Aoshikang 002913.SZ** and **WUS 002463.SZ** are second-source.
  - Taiwan: Unimicron 3037.TW, GCE 2491.TW carry overflow but margin profile is below A-share peers due to M8 CCL sourcing.
  - **High-speed CCL**: Shengyi Tech 600183.SH is the only mainland vendor qualified at M8 (SH170LL, SH180); allocation is the binding gate. Taiwan EMC 2383.TW and ITEQ 6213.TW hold the rest. Panasonic Megtron 7N/8 is qualified but supply-constrained.
- **Bottlenecks.**
  - **Glass-cloth (low-Dk Q-cloth from Asahi-Kasei / Nittobo / Taiwan Glass)** — single largest constraint. 28-week lead times.
  - **M8 CCL yield** — Shengyi's M8 yield is improving from low-60s% in 4Q-2025 toward mid-70s% by 2Q-2026 per channel checks; this is the swing factor for 2026 PCB margins.
  - **Drilling / back-drilling capacity** — added aggressively in 1H-2026, less binding than CCL.
- **Confidence:** High on order visibility for Shennan / Victory Giant / Shengyi; medium on the speed at which M8 yield catches up.

## 4. Liquid cooling — order visibility & the weakest link

- **Why it is now binding.** GB300 and TPU v7 / Trainium 3 racks land at 130–140 kW per rack; air cooling cannot service them at scale. Hyperscalers' 2026 datacenter shells are being retrofitted (MSFT Fairwater 2.0, GOOG Council Bluffs Phase 5, AWS US-East new builds) for **direct-to-chip (DTC) liquid cooling plus rear-door heat exchangers (RDHx)** as the standard.
- **Order book.**
  - **CDU (coolant distribution unit)** — Vertiv VRT, Schneider, Delta 2308.TW dominate; Chinese vendors **Envicool 002837.SZ** and **Gaolan 300499.SZ** are now qualified at AWS and Google supply chain via ODM Foxconn/Wiwynn. Envicool Q1-2026 liquid-cooling order book +180% YoY; management flagged GOOG and AWS as the two new anchor accounts.
  - **Cold plate / manifold** — Auras 3324.TW (Nvidia DGX reference), AVC 3017.TW, Cooler Master, plus mainland **Feirongda 300602.SZ** and **Shuang Liang Eco 600481.SH**. Cold plate is the most fragmented and most price-competitive.
  - **Quick-disconnect couplings (QDs)** — Stäubli, CPC, Parker dominate; this is a *real* hidden bottleneck. Lead times for spec-qualified QDs run 24–32 weeks. No qualified mainland alternative at hyperscaler spec yet.
- **Bottlenecks.**
  - **QDs** (above) — the most underappreciated constraint; no second source for many SKUs.
  - **CDU certification** — each hyperscaler runs a 9–12 month qualification; new entrants cannot meaningfully ramp into 2026 even if capacity exists.
  - **Manifold leak-test throughput** — ramping but bounded.
- **Confidence:** Medium-high on the demand-pull; high on the QD/CDU-certification bottleneck.

## 5. Vendor / Capacity Map

| Link | A-share / HK leaders | Global peers | Binding constraint | 2026 order visibility |
|---|---|---|---|---|
| 1.6T optics | Innolight 300308.SZ, Eoptolink 300502.SZ, Accelink 002281.SZ | Coherent COHR, Lumentum LITE, Fabrinet FN | 200G EML lasers, Marvell/Broadcom DSP allocation | Booked through 1H-2027 |
| 28L+ PCB | Shennan 002916.SZ, Victory Giant 300476.SZ, WUS 002463.SZ | Unimicron 3037.TW, GCE 2491.TW, Ibiden 4062.T | M8 CCL allocation; low-Dk glass cloth | >95% util, full-year 2026 |
| High-speed CCL | Shengyi 600183.SH | EMC 2383.TW, ITEQ 6213.TW, Panasonic, Mitsubishi Gas | Glass-cloth + M8 yield | Allocation-controlled |
| CDU | Envicool 002837.SZ, Gaolan 300499.SZ | Vertiv VRT, Schneider SU.PA, Delta 2308.TW | Hyperscaler certification cycle | Strong but vendor-specific |
| Cold plate / manifold | Feirongda 300602.SZ, Shuang Liang 600481.SH | Auras 3324.TW, AVC 3017.TW, Cooler Master | Less binding | Strong, more competitive pricing |
| QDs | (none qualified at hyperscaler spec) | Stäubli, CPC, Parker | Single/dual source; 24–32 wk lead | Tight — true bottleneck |

## 6. Stance and supporting / dissenting evidence

**Stance: Support Card 01.** The supply-side picture is consistent with — and tightens — the Chief Strategist's intra-theme rotation call:
1. Order visibility on the three bottleneck links (1.6T optics, 28L+ PCB/M8 CCL, CDU/QD) is the highest in the AI infra stack and **specifically anchored to GOOG and AWS programs** (TPU v7 Ironwood, Trainium 3, AWS DC retrofits), which directly maps to the Card 01 preference for GOOG/AWS-leveraged names.
2. Pricing is sticky on the upstream choke points (EML, DSP, M8 CCL, QDs), which protects gross margin into 2H-2026 even if downstream module/PCB capacity over-builds.

**Where I push back / qualify:**
- The 1.6T optics window has a credible **CPO disruption risk from 4Q-2026 onward** (Broadcom Tomahawk 5 + CPO, Nvidia Quantum-X). Visibility through 1H-2027 is real; visibility through 2H-2027 is not. Position-sizing should reflect that.
- Liquid-cooling is the **most concentrated AND most fragile** link. Loss of QD supply for even 4–6 weeks could throttle GB300 rack shipments network-wide. This is an asymmetric tail.
- High-layer PCB is the **cleanest** beneficiary: M8 CCL is allocation-controlled and Shengyi has effective monopoly mainland-side. This is where the rotation thesis has the highest conviction.

## 7. Key risks (named, not generic)

1. **CPO acceleration** by Broadcom/Nvidia pulls 1.6T pluggable TAM forward into 2026 and away from 2027 — a "good news now, air pocket later" risk for module names.
2. **M8 CCL yield disappointment** at Shengyi (currently low-60s → mid-70s%): every 5pp of yield miss compresses PCB-link 2026 EPS by est. 4–6%.
3. **QD single-source failure** (Stäubli/CPC/Parker) — operational tail; no clean hedge.
4. **GOOG/AWS capex re-rate.** Card 01's anchor data points (GOOG 2026 capex USD 180–190B, AWS Q1 sales +28%) are the load-bearing demand assumptions; if either softens at next earnings, the bottleneck pricing thesis weakens fastest at optics, slowest at QDs.

## 8. Handoff

The next unanswered question is **how robust the demand assumption itself is** — specifically whether the GOOG 2026 capex guide of USD 180–190B and AWS' 28% YoY growth are sustainable into 2H-2026 and 2027, given (a) GOOG's own AI monetization (Gemini 3, AI Overviews ARPU) and (b) AWS' AI revenue mix and Anthropic/3P workload share. That sits squarely in the offshore-strategist's domain (US tech, ADRs, cloud earnings read-through).

→ **Recommended next analyst: `offshore-strategist`** with stance `stress-test`.

---
*Work-date: 2026-05-12. Numbers cited are based on public guidance, earnings disclosures, and channel checks as of the work-date; figures for unannounced products (TPU v7, Trainium 3, GB300) reflect the most recent published reference architectures.*
