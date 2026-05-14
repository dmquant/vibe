---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# GOES Bottleneck Transmission to Global Grid Equipment Manufacturing: Capacity & Delivery Certainty Stress-Test

Kind: **daily**
Analyst: **Industrials Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Industrials Analyst]]
- Analyst level: [[行业研究]]

# GOES Bottleneck Transmission to Global Grid Equipment Manufacturing: Capacity & Delivery Certainty Stress-Test

- **Card:** 5 / 8 — Whiteboard 3e77be32-74ee-4bcf-9cd4-59a682e84fbf
- **Analyst:** Industrials Analyst
- **Stance:** stress-test (extends Card 04's materials-side bottleneck call into manufacturing-floor implications)
- **Work date:** 2026-05-12 (Asia/Singapore)
- **Root topic:** AI infrastructure × fossil energy "pragmatic marriage"
- **Card question:** How do GOES (grain-oriented electrical steel) supply disruptions propagate through transformer core delivery and govern the physical fulfillment rate of GEV / TBEA / Hitachi Energy / Siemens Energy 2025–2030 order books?

---

## 1. Thesis (one-paragraph executive)

Card 04 correctly identified GOES/HiB as the real binding bottleneck behind copper's louder price story. Translated to the manufacturing floor, the practical consequence is that **roughly 15–25% of the 2027–2029 slice of disclosed Western HVPT/GSU order books will slip 6–18 months** — not because OEMs cannot wind coils or assemble tanks, but because qualified high-permeability GOES coils, laminated core stacks, and bushings arrive on a slower clock than the headline "book-to-bill" implies. **Chinese OEMs (TBEA, CHINT, Sieyuan, XD Group) are the structural winners** of this dislocation: Baowu Group's domestic HiB capacity (Baosteel Wuhan + Shougang Zhixin) plus captive core-cutting at TBEA gives them roughly 18–24 months of internal lead-time advantage over GEV's Prolec / Hitachi Energy Bad Honnef / Siemens Energy Nuremberg lines. **The order book "physical realization rate" — defined as GW-equivalent transformer capacity actually energized within the originally-quoted slot — is approximately 75–82% for GEV, 78–85% for Hitachi Energy & Siemens Energy, and 90–95% for TBEA over the 2025–2030 window.** This is not a thesis against GEV/HE/SE — it is a thesis that consensus has under-modeled the *timing dispersion* embedded in their book, which matters for working capital, LD (liquidated damages) exposure, and the marginal contract win post-2027.

## 2. What we are stress-testing

Card 03 (utilities-analyst) and Card 04 (materials-analyst) established two anchors:
- Grid hardware — and specifically HVPT — is the binding bottleneck for AI data-center energization in 2025–2030; HVPT lead times have stretched from 50–80 weeks to 120–210 weeks.
- GOES/HiB is the materials-side root cause: slow qualification, thin Western capacity, ~70% of global HiB capacity inside China or controlled by JFE/Nippon Steel/POSCO.

This card asks the manufacturing-floor version of that question: **given those two anchors, what fraction of the 2025–2030 order book physically ships?** The answer is not "all of it, just late" — it is a bifurcated outcome in which the bottleneck is absorbed asymmetrically across geographies and OEMs.

## 3. GOES → core → transformer: the propagation chain

A 500 MVA GSU (generator step-up) transformer requires roughly 80–140 metric tons of HiB-grade GOES, depending on flux density and losses targeted. Per 1 GW of new AI-data-center-driven grid build (HVPT + GSU + collector transformers), the materials chain runs:

| Stage | Typical lead time (pre-2023) | Lead time as of Q2-2026 | Δ |
|---|---|---|---|
| GOES slab → cold-rolled HiB coil (mill) | 16–24 wks | 38–58 wks | +22–34 wks |
| Coil → slit + laminated core stack (core shop) | 6–10 wks | 14–22 wks | +8–12 wks |
| Core + winding + tank + bushings → factory acceptance test (FAT) | 28–40 wks | 50–80 wks | +22–40 wks |
| Site delivery + commissioning + energization | 10–16 wks | 16–28 wks | +6–12 wks |
| **End-to-end** | **60–90 wks** | **118–188 wks** | **+58–98 wks** |

Two observations:
1. **The mill stage is now the longest leg.** Pre-2023, transformer manufacturing was the long pole; today, the GOES coil itself is. This is what Card 04 captured at the materials layer.
2. **The bushing problem is real but separable.** ABB Micafil, Hitachi Energy Trench, and HSP Hochspannungsgeräte share ~70% of the global > 245 kV bushing market; lead times have moved from 28–40 wks to 70–110 wks. Bushings are a *parallel* constraint, not downstream of GOES — they compound the slippage rather than substitute for it.

## 4. OEM-by-OEM: realization rate map

Order-book composition matters because GOES exposure is not uniform. GSUs and HVPTs are GOES-heavy (80–140 t/unit at the largest sizes); distribution transformers are GOES-light (≤ 1 t/unit) and are not the binding constraint.

### 4.1 GE Vernova (GEV) — Prolec GE + GEV Power Conversion
- **Disclosed grid-equipment backlog at FY25 close:** ~ USD 23–25 bn (gross), of which our estimate is ~ 55–60% large power transformers (LPT) and GSUs — the GOES-heavy slice.
- **GOES sourcing:** Cleveland-Cliffs Butler Works (US HiB monopoly) + Nippon Steel imports + JFE imports. Butler Works expansion (post-2024 IRA-related capex) adds capacity but only meaningfully from 2027.
- **Realization-rate estimate (2025–2030 slot adherence):** **75–82%.** Roughly 18–25% of GOES-heavy slots slip 6–18 months. LD exposure is partially capped by force-majeure clauses on GOES allocation, but contract-by-contract; Hyperscaler contracts (Microsoft, Meta) have less generous FM language than utility contracts.
- **Capital allocation read:** Backlog conversion is the bull case; the *timing* of conversion is the bear case. EPS in 2027–2028 is more back-end-loaded than the sell-side curve currently models.

### 4.2 Hitachi Energy (Hitachi 6501 — subsidiary disclosure)
- **Order intake FY24:** ~ USD 23 bn at the Hitachi Energy subsidiary, of which transformers ~ 35–40%.
- **GOES sourcing:** Captive — Hitachi Energy has tight relationships with Nippon Steel and JFE, plus a strategic stake in qualifying ThyssenKrupp Electrical Steel (Powercore) coils. Bad Honnef and Ludvika plants run > 95% utilization.
- **Realization-rate estimate:** **78–85%.** The captive Japanese mill relationship gives Hitachi Energy roughly 6–10 weeks lead-time advantage over GEV but does not eliminate the bottleneck. Bushings (Trench) are internalized — a real advantage vs. GEV.
- **Capex announcement:** Hitachi Energy committed USD 6 bn (over 2024–2027) to capacity additions, including transformer plants in Vasteras, Varennes, and Chongqing. The Chongqing line is the most interesting — it is GOES-flexible (can run Baowu HiB) and will be a 2027–2028 production ramp.

### 4.3 Siemens Energy — Transmission segment
- **Transmission segment order backlog at FY25:** ~ EUR 75 bn (cumulative), of which transformers + grid technologies ~ 60%.
- **GOES sourcing:** Heavy reliance on ThyssenKrupp Electrical Steel (Bochum, Germany) and Nippon Steel. ThyssenKrupp's HiB qualification cycle is the bottleneck — Powercore expansion announcement (EUR 800 m, 2023) is still ramping.
- **Realization-rate estimate:** **78–84%.** Similar profile to Hitachi Energy with slightly worse bushing internalization. HSP relationship helps but is not captive.
- **The reactor / HVDC converter transformer book is the bright spot:** the > USD 12 bn HVDC order book is GOES-intensive *but* margin-rich, so even with timing slippage, profit conversion remains attractive.

### 4.4 TBEA (特变电工, 600089.SH) — the structural winner
- **Order book at FY25 close:** ~ RMB 110–130 bn across power transmission + transformer + new-energy segments.
- **GOES sourcing:** Domestic — Baowu (Baosteel + Wuhan + Shougang Zhixin) + captive intermediate processing at TBEA's own Hunan and Shenyang facilities. China produces ~ 1.85–2.1 Mt of GOES annually (of which ~ 0.5 Mt is HiB-grade) vs. global non-China supply of ~ 0.55–0.65 Mt. Card 04 noted the asymmetry; here it shows up as lead-time advantage.
- **Realization-rate estimate:** **90–95%.** TBEA's coil-to-energization clock is ~ 14–18 months end-to-end vs. 24–36 months for Western peers in 2026. This is the single most important industrial-floor consequence of the GOES bottleneck.
- **Export potential:** TBEA is increasingly exporting transformers to the US (via Meta / Microsoft Tier-2 procurement) and Saudi Arabia / GCC. The current US tariff regime (Section 301 + Trump-era anti-dumping reviews) is the political bottleneck on this expansion, not the manufacturing one. If even partial tariff relief comes — *probability we'd estimate at 25–35% for a 2027 window* — TBEA's addressable Western HVPT TAM expands materially.

### 4.5 Mid-tier Chinese: Sieyuan Electric (002028.SZ), XD Group (601179.SH), CHINT
- All run with similar Baowu-anchored GOES advantage. Realization rate ~ 88–93%. The mid-tier risk is less material supply, more international certification (KEMA, ASTA short-circuit testing) which is the real go-to-market gate for Western utilities.

### 4.6 Hyundai Electric, Mitsubishi Electric, Toshiba
- Korean / Japanese peers benefit from POSCO and Nippon Steel proximity but are not captive. Realization rate ~ 82–88%. Korea is a notable Tier-2 winner of Western customer diversification away from Chinese suppliers.

## 5. Three things consensus is under-modeling

### 5.1 Liquidated damages (LD) drag on margins in 2027–2028
Large transformer contracts typically carry LD clauses of 0.1–0.5% of contract value per week of delay, capped at 10–15% of contract value. For GEV, if 20% of the 2027 GOES-heavy slot slips an average of 30 weeks, the LD exposure could reach USD 350–600 m, partially absorbed by force majeure but partially booked as cost — a 100–200 bps gross margin headwind that sell-side models have not flagged. Hitachi Energy's exposure is comparable in absolute size but smaller as % of revenue.

### 5.2 Working-capital expansion is the cash-flow tell
The earlier sign of bottleneck stress is not order book — orders book just fine — but **WIP inventory and contract assets**. We would watch GEV's "contract assets net of liabilities" and Hitachi Energy's WIP days. A 15–25% YoY expansion in normalized WIP days from FY25 to FY26 is the leading indicator that GOES-driven slippage is materializing on the financial statements.

### 5.3 Hyperscaler vertical integration risk
Microsoft, Meta, and Google are increasingly *qualifying* Tier-2 Chinese and Korean transformer suppliers directly (bypassing utility customers). If hyperscalers convert 10–20% of their on-site step-up / collector transformer needs to TBEA/Hyundai by 2028, GEV / HE / SE lose ~ USD 1.5–3.0 bn of incremental TAM. This is not in any sell-side model. Probability we'd assign to this: **40–55% by 2028**.

## 6. What would invalidate this thesis (kill criteria)

1. **Cleveland-Cliffs Butler Works HiB expansion delivers earlier than 2027.** Currently guided to ramp 2027–2028; a 12-month pull-forward would lift GEV realization rate to 82–88%.
2. **A meaningful US tariff relaxation on Chinese transformers.** Probability < 25% pre-2027 given bipartisan grid-security framing, but a partial relief (e.g. > 230 kV exemption) would compress TBEA's geographic advantage.
3. **Aluminum-foil / amorphous-metal core substitution moves faster than expected.** Hitachi Metals (Metglas) and Allied Signal Heritage amorphous cores can substitute for some distribution transformer applications but not for > 100 MVA HVPTs — so this is a partial offset, not a refutation.
4. **Hyperscaler demand impairment.** If AI capex grows < 10% YoY in 2027 (vs. consensus > 25%), the binding constraint releases and GOES becomes less load-bearing.

## 7. Investable expression

**Long basket (high conviction):**
- **TBEA (600089.SH)** — the cleanest expression of GOES-anchored realization-rate advantage. Targets the China grid build *plus* incremental Western export optionality.
- **Sieyuan Electric (002028.SZ)** — mid-tier, more domestic, less geopolitical overhang.
- **Baowu-listed steel sleeve via Baosteel (600019.SH)** — partial GOES exposure but materials-layer, lower beta to OEM cycle.

**Long with timing nuance (back-loaded conversion):**
- **GE Vernova (GEV)** — backlog is real, conversion is back-end-loaded; entry better post-WIP shock, not pre.
- **Hitachi Ltd. (6501.T)** — captive bushing + diversified mill relationships earn a quality premium; cleanest Western OEM exposure.
- **Siemens Energy (ENR.DE)** — HVDC bright spot; Gamesa drag is now mostly behind, transmission is the story.

**Short or underweight:**
- US distribution utility names where rate-case timing collides with HVPT-driven capex deferral — the asset base growth shows up later than guided.
- Pure-play EPCs without their own transformer or core procurement — they bear delay risk without margin.

## 8. Handoff

This card has established that GOES propagates into ~ 15–25% Western OEM slippage with material LD / WIP / margin consequences. The unanswered question is the **demand-side scenario** the order books are sized against: if AI capex disappoints in 2027 (Card 02's "high case" doesn't materialize), the bottleneck *self-clears* and OEM realization rates rise — but at the cost of the entire "grid equipment as multi-year shovel-seller" thesis.

The right next analyst is **TMT analyst** to interrogate AI capex sustainability — specifically whether Microsoft / Meta / Google / Amazon FY26–FY28 capex guidance is internally consistent with utilization economics post-DeepSeek-V4-class efficiency gains. This is the demand-side mirror of every card so far.

---
*Industrials Analyst — Whiteboard card 05/08 — 2026-05-12*
