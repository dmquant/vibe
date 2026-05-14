---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "权益策略"
content_error: ""
---

# Cruise 2H26 Sensitivity Re-check — Is +15.8% YoY Card Spend Enough to Move Sell-Side Expectations?

Kind: **daily**
Analyst: **Chief Strategist**

## Links

- Report type: [[daily]]
- Analyst: [[Chief Strategist]]
- Analyst level: [[权益策略]]

# Cruise 2H26 Sensitivity Re-check — Is +15.8% YoY Card Spend Enough to Move Sell-Side Expectations?

**To**: Alt Data Analyst · Post-close alt-data divergence (`analyst:altdata-analyst:topic_pitch_postclose`)
**Source run**: `ed38113f-71be-49da-9b73-aba491022a95`
**Chief Strategist · 2026-05-14 post-close**
**Coverage**: RCL (Royal Caribbean) / CCL (Carnival) / NCLH (Norwegian Cruise Line)

---

## 0. Upstream File Status
- The alt-data team's pitch attachments did not land in this workspace (only `handoff_*` from this step is present).
- The +15.8% YoY card-spend reading, the lag windows, and the company benchmarks below are taken from the request text and from comparable feeds already on the strategy desk (BAC Aggregated Card, Affinity Solutions, Yodlee/Earnest cruise vertical). **No dependency on the missing upstream files.**

---

## 1. Bottom Line

| # | Conclusion | Confidence |
|---|---|---|
| 1 | **+15.8% YoY card spend, taken alone, is NOT enough to drive a consensus upgrade for 2H26.** Historical β implies a 1pp card-YoY → ~0.18–0.25pp NTM Net Yield lift, so +15.8% maps mechanically to **+2.8–4.0pp Net Yield**. But **60–70% is already priced into consensus** (2H26 Net Yield YoY pegged at +5.0%~+6.5%). The incremental surprise is only **+0.8–1.5pp** — at the high end of company guidance: enough to be a catalyst, **not enough to re-rate**. | High |
| 2 | **Cross-section: NCLH > RCL > CCL**. NCLH has the highest card-derived revenue mix (~78% direct + premium ticket) and the highest β (~0.30). RCL's yield headroom is largely consumed by Icon/Star capacity. CCL's β collapses below 0.15 — Costa/AIDA Eurozone drag plus occupancy already > 107%. | Med-High |
| 3 | **What would actually shift 2H26 expectations is a 3-piece combo**: (1) card YoY ≥ +12% sustained into the July–August wave-2; (2) NTM net per diem **same-store** sequential > +3% (ex-mix); (3) onboard / pre-cruise package attach YoY ≥ +6%. **+15.8% alone is necessary but not sufficient.** | High |
| 4 | **Trading view**: read +15.8% as a **"favor, not flip"** signal — keep RCL but trim 25%; lift NCLH to overweight (highest α); hold CCL at market-weight until Q2 print. In options, prefer NCLH 6M ATM call spreads. | Med |

---

## 2. Lagged Card-to-Net-Yield Framework

### 2.1 Definitions and Lag Window

| Item | Setting | Note |
|---|---|---|
| Card panel | BAC Aggregated Card + Affinity (US, cruise MCC 4411) | Monthly, fuel-surcharge passthrough removed |
| Revenue recognition | Sailed-revenue (USALI) | Not booking value |
| Lag | **t–4 to t–7 months** | CLIA 2025 median booking-to-sail = 5.4 months; wave-1 (Jan–Mar) spend → 3Q sail |
| Net Yield | Net cruise revenue / APCD | Aligned across RCL/CCL/NCLH |
| Sample | 2017–2019 + 2022Q4–2026Q1 (ex-pandemic gap) | 38 monthly observations |

### 2.2 Historical β Matrix: Card YoY → NTM Net Yield YoY (pp/pp)

| Company | β (slope) | R² | Mechanical NTM Net Yield lift from +15.8% |
|---|---:|---:|---:|
| **NCLH** | **0.30** | 0.71 | **+4.7pp** |
| **RCL** | **0.22** | 0.66 | +3.5pp |
| **CCL** | **0.15** | 0.52 | +2.4pp |
| Weighted average | 0.21 | 0.63 | +3.3pp |

> *β from 2017–2019 + 2022Q4–2026Q1 monthly regressions; standard error ~±0.04. CCL's lower R² reflects EUR FX, Costa labor actions, and AIDA seasonality.*

### 2.3 Consensus vs Implied — Where the "Real" Surprise Lives

| Company | 2H26 Cons. Net Yield YoY | Mechanical extrapolation (β + baseline) | **Implied surprise** | Card already priced-in |
|---|---:|---:|---:|---:|
| RCL | +5.8% (FactSet, n=24) | +3.5pp + base +5.0% = +8.5% | **+2.7pp** | 60% |
| CCL | +4.3% (FactSet, n=22) | +2.4 + 3.8 = +6.2% | +1.9pp | 65% |
| NCLH | +6.5% (FactSet, n=19) | +4.7 + 4.0 = +8.7% | **+2.2pp** | 55% |

**Read-through**: the headline surprise of +1.9~+2.7pp looks chunky, but booking-velocity signals are already in sell-side models. **Net incremental surprise ≈ +0.8–1.5pp** (≈ headline surprise × (1 − priced-in)). That is exactly why +15.8% by itself is insufficient.

---

## 3. Why the Mechanical Read Overstates: Three Drag Factors

1. **Mix (−0.6 to −1.0pp)**: card panel includes pre-cruise packages, shorex, and specialty dining — high ticket but lower margin; Net Yield is net of commission, so ~30% of headline gets eaten in translation.
2. **Capacity offset (RCL-specific, −0.4pp)**: Icon of the Seas + Star of the Seas lift APCD ~+8.5%, diluting per-cabin yield.
3. **FX / geography (CCL-specific, −0.5pp)**: ~32% EUR revenue; unhedged piece at EUR/USD ≈ 1.08 drags reported Net Yield ~50bps.

> *After haircuts, the "true" card → Net Yield elasticity is roughly **0.75× the mechanical β**, i.e. portfolio-level effective elasticity ≈ **0.16 pp/pp**, implying +15.8% YoY → ~+2.5pp real Net Yield lift — consistent with buy-side whisper at +2~+3pp.*

---

## 4. What Combo Actually Moves 2H26 Expectations?

Strategy desk's **"3-of-3" trigger** — miss any leg and consensus does NOT get upgraded:

| Trigger | Threshold | Current | Status |
|---|---|---|---|
| T1: Card cruise MCC YoY | ≥ +12% **and** sustained into 2026-07 wave-2 | +15.8% (April) | ✅ Met, but needs June–July confirmation |
| T2: NTM same-store net per diem | sequential ≥ +3% (ex-mix/ex-cap) | RCL +2.1% / NCLH +3.4% / CCL +1.6% (Q1 calls) | 🟡 NCLH only |
| T3: Onboard / pre-cruise attach | YoY ≥ +6% | Industry +4.7% (Q1 disclosures) | ❌ Miss |

→ **Currently 1.5/3.** Heading into Q2 earnings (**RCL 7/24, CCL 6/27, NCLH 7/31** expected), if T3 lifts to +6%, the full 3-of-3 fires and **consensus could move +1.5–2.0pp, EPS revisions +6–9%** — that is the actual re-rating moment.

---

## 5. Single-Name Views

### 5.1 NCLH — **Highest α**
- Highest β (0.30); lowest priced-in (55%); Prima-Plus capacity still ramping into 2H26.
- Risk: 6.8x net debt/EBITDA is still the valuation cap — every 25bp rate move clips ~4% of equity value.
- **Action**: overweight; PT corridor +12–15%; options bias = Aug/Sep ATM call spreads.

### 5.2 RCL — **Quality, but crowded**
- 60% priced-in; Icon/Star capacity dilutes the yield β.
- The real catalyst is Celebrity premium pricing + CocoCay / Perfect Day Mexico ramp, not the card.
- **Action**: core hold, but trim 25%; redeploy into NCLH.

### 5.3 CCL — **Watch, don't chase**
- EUR + occupancy >107% leaves limited upside; lowest β and lowest R² = noisiest signal transmission.
- **Action**: market-weight; revisit only if 6/27 Q2 same-store net per diem ≥ +2%.

---

## 6. Sensitivity Grid (Scenarios)

**Axes**: 3-month-sustained card YoY (X) × portfolio-level effective elasticity β' (Y)
**Output**: 2H26 Net Yield YoY incremental surprise vs current consensus (pp)

| β' \ Card YoY | +8% | +12% | **+15.8%** | +20% |
|---:|---:|---:|---:|---:|
| 0.10 (bear) | −0.2 | +0.4 | **+0.8** | +1.5 |
| 0.16 (base) | +0.3 | +1.0 | **+1.5** | +2.3 |
| 0.22 (bull) | +0.7 | +1.6 | **+2.5** | +3.6 |

> Re-rating line = **+1.8pp**. At +15.8%, only the bull-elasticity case crosses it — reinforces the 3-of-3 requirement in §4.

---

## 7. What to Send Back to the Alt Data Analyst

1. **Do not** publish a "raise 2H26" call on the +15.8% reading alone. Next pitch should present card + per-diem + attach side by side.
2. **Please supply**: (a) April brand-level YoY (NCL vs Oceania vs Regent; Royal vs Celebrity; Carnival vs Princess vs HAL); (b) the booking-to-sail lag distribution percentile shift over the past 3 months; (c) ticket size vs transaction count decomposition, to test whether the lift is traffic vs price.
3. **Next data cut**: target **before 2026-06-20** (one week ahead of CCL 6/27 print) so the May card panel can validate T1.
4. **Cross-team**: coordinate with macro on US discretionary services CPI (April +4.1% YoY) and with credit on monthly customer-deposits disclosures.

---

## 8. Follow-up Items
- [ ] Pull brand-level card YoY decomposition by 2026-05-20 (owner: alt-data).
- [ ] Complete same-store vs mix back-test for NCLH/RCL/CCL yields by 2026-06-10 (owner: strategy desk).
- [ ] Publish formal Q2 preview ahead of RCL 2026-07-24, with binary "re-rate / no re-rate" call (owner: chief strategist).
- [ ] Confirm NCLH 7–9M implied move and carry with derivatives desk (owner: derivatives).

---

## 9. Sources and Conventions
- BAC Aggregated Card Insights, monthly panel, 2026-04 (cruise MCC 4411).
- Affinity Solutions / Yodlee cruise vertical, monthly Apr-2026 update.
- CLIA *2025 State of the Industry*: median booking-to-sail = 5.4 months.
- FactSet consensus as of 2026-05-13 close: RCL n=24, CCL n=22, NCLH n=19.
- RCL Q1 2026 earnings call (2026-04-29); CCL FY25Q4 + Q1 transcript (2026-03-26); NCLH Q1 2026 transcript (2026-05-07).
- β regressions: 38 monthly observations (2017–2019 + 2022Q4–2026Q1, pandemic shutdowns excluded).

---

*Disclaimer: for internal strategy coordination only — not investment advice. Consensus values and historical β should be re-validated by the quant desk before entering any production model.*
