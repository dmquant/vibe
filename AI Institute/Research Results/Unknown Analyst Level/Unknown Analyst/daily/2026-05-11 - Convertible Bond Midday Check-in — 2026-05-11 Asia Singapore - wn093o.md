---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Convertible Bond Midday Check-in — 2026-05-11 (Asia/Singapore)

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Convertible Bond Midday Check-in — 2026-05-11 (Asia/Singapore)

- Role: convertible-analyst
- Shell-anchored date: `2026-05-11`
- Upstream inputs:
  - `my_recent_reports.md`: **empty (0 lines)**. No prior convertible-analyst deliverables in the 5-day window — no self-contradiction to flag.
  - `recent_reports.md`: 1163 lines, 25 analyst reports, all work_date=2026-05-11.
- Stance: anchor on chief-strategist / chief-risk / factor-analyst's quantum-basket event window, global-macro's post-Powell USD strength, ashare-strategist's "policy expectation → earnings delivery" style switch, esg-analyst's CEA price and paid-auction signal, and bond-analyst's Shandong/Hubei LGFV anomalies. Translate each into the four legs that drive a convertible: **conversion premium, straight-bond floor, forced-redemption trigger, credit spread**.

---

## 1. Morning Confirmed Facts and Data

### 1.1 US quantum earnings window is fixed (drives A-share quantum-proxy converts)
- chief-strategist `card-08`:
  - **QUBT** Q1 2026 shareholder call: 2026-05-11 US post-close **4:30 p.m. ET**.
  - **Rigetti** Q1 2026 results call: 2026-05-11 **5:00 p.m. ET**.
  - **D-Wave** Q1 FY2026: 2026-05-12 US pre-open **8:00 a.m. ET**.
- A-share proxy core book: **688027 / 002281 / 688489 / 603019**.
- Strategy desk has stepped the original 93%/7% quantum/utility allocation down to **88% quantum + 7% utility + 5% cash** as the waiting portfolio (source: `whiteboard/.../card-08/report.zh.md`).
- **Convertible read-through**: high-delta AI / quantum / compute-themed convertibles linked to this basket (high parity, conversion premium already compressed into single digits or inverted) will gap at the 05-12 open — we need pre-staged orders for both "clean confirm" and "disconfirm" branches.

### 1.2 Portfolio-level VaR is not materially reduced by the utility hedge
- chief-risk `card-07`:
  - After swapping 600900 5% → 600900 3% + 600011 2%, **1-day 95% VaR is still ~6.45%, 2-day ~9.12%**.
  - **~89% of marginal VaR sits in 688027 and 002281**; the utility leg's risk contribution is ~0.
- **Convertible read-through**: event-gap risk cannot be solved with utility hedges at the equity level. A convertible's natural "downward conversion-price reset clause + straight-bond floor" is a cheaper tail insurance. We should pick this protection at the **single-name** level, not by overlaying it onto the portfolio.

### 1.3 Factor crowding alarm: dividend / low-vol at the 94th percentile
- factor-analyst `card-06`: dividend +2.1 Z, low-vol +1.8 Z, size +2.6 Z; dividend factor crowding at the 94.2nd percentile, Yangtze Power institutional ownership at the 97th percentile.
- **Convertible read-through**: bank / utility bottom-tier convertibles (straight-bond-dominant, positive YTM, parity 70-85) carry the same "defensive factor burden." If growth squeezes higher on 05-12/13, these names will be sold by redemption-driven flows — **the joint downside risk to underlying equity AND convertible is being under-priced**.

### 1.4 Macro: hawkish Powell → DXY strength → A-share blue-chip headwind
- global-macro `handoff_response.md` (Powell 2026-05-06 Stanford speech + 05-07 Congressional testimony).
- ashare-strategist: style has rotated from "policy expectation" into "earnings delivery"; leveraged money is concentrating in earnings-certain names.
- **Convertible read-through**: marginal northbound outflows → blue-chip equity pressure → parity leg passively re-prices lower for high-rated, large-cap, low-premium converts (banks, utilities, leading manufacturers). However, **straight-bond floor usually caps the convertible decline at 0.4-0.5x the equity move** — a relatively defensive "semi-equity" exposure.

### 1.5 Credit side: LGFV / property-linked convertibles
- bond-analyst: Shandong (Qingdao, Jiaozhou, Chengyang) accounts for 50% of nationwide Q1 2026 LGFV bill-default issuers; Wuhan Vehicle-Valley non-bank funding RMB 3.58bn at 4.75-5.90%; Hubei's 2024-2026 debt-swap quota is RMB 982bn/yr.
- realestate-analyst: **TOP100 equity sales in April fell 0.8% MoM** — not a sector-wide cash-flow recovery. Only Longfor, Seazen and a weaker fourth name (Xinxiwang / Excellence / Midea Real Estate) have credible CDB-guaranteed issuance windows before June.
- **Convertible read-through**: property-chain + LGFV-linked convertibles (some landscaping, municipal-engineering, contracting, decoration names) need to be re-priced by issuer. If the issuer's public bond YTM > 6%, the convertible's straight-bond floor should be reset by widening the credit spread 50-80bp; for sub-60-parity names, confidence in the "bond-floor support" must be lowered.

### 1.6 Carbon: CEA price and the "3% paid auction" signal
- esg-analyst: CEA closed at **RMB 114.6/tonne on 2026-05-09** — but this **conflicts +43% with the RMB 80.06/tonne quote used by utilities-analyst / materials-analyst (see §2.1)**. The 05-06 draft rule cuts free allocation from 100% to 97%, with 3% auctioned — the first paid-allocation signal since CEA inception.
- **Convertible read-through**: high-carbon issuers (steel, cement, electrolytic aluminium, coal-fired power). If the ESG figure is correct, the unit carbon cost doubles instantly, undermining the "distressed-reversal + downward conversion-price reset" thesis for some convertibles. This is a **same-day hard contradiction to resolve**.

---

## 2. Open Questions Still to Verify

### 2.1 ⚠️ CEA spot price reconciliation (80.06 vs 114.6 RMB/tonne)
| Source | Price | Date |
|---|---:|---|
| utilities-analyst / materials-analyst | RMB 80.06/tonne | 2026-05-08 |
| esg-analyst | RMB 114.6/tonne | 2026-05-09 |

- Impact: steel/cement/aluminium equity earnings models AND convertible bond-floor credit views both rely on this number.
- Action: pull the Shanghai Environment Exchange's official close from its website this afternoon; cross-check with third-party carbon data vendors (CICC, Wind carbon dataset). Until reconciled, every steel/cement convertible "distressed-reversal + reset clause" target price will be quoted as a dual-range, not a point target.

### 2.2 The "clean order" definition inside the quantum-basket trigger rules
- chief-strategist's trigger rule is truncated in the cited section (`card-08` lines 611-613).
- Impact: pacing of add/trim on quantum-proxy convertibles at the 05-12 open.
- Action: request the full text from chief-strategist this afternoon, then embed the three-way criterion ("auditable orders / Bookings / ARR") in our same-day **forced-redemption alert + add-trim gate** matrix.

### 2.3 Market-wide forced-redemption (强赎) trigger list is not yet refreshed
- We have not yet pulled the "≥15 of last 30 closing prices ≥ 130% of current conversion price" list.
- Impact: in a scenario where A-share volume stays elevated and quantum-proxy converts push above 130 yuan, **a missed forced-redemption warning could result in passive equity conversion and a sharp premium decompression**.
- Action: deliver the full market forced-redemption count table (by sector, by remaining N days to trigger) before **14:00**; flag converts mapped to the four quantum/AI proxy sectors separately.

### 2.4 YTM re-pricing of issuers behind property / LGFV converts
- The workspace does not contain a directly callable cross-section of issuer public-bond YTM.
- Impact: bond-floor confidence on sub-80-parity converts.
- Action: pull onshore/offshore bond YTM quotes for **five representative issuers** (Longfor, Seazen, Xinxiwang, Wuhan City Investment, one Qingdao district-county LGFV) this afternoon.

---

## 3. Afternoon Action Items (priority order)

| # | Action | Deadline | Notes |
|---:|---|---|---|
| 1 | Pull full-market forced-redemption trigger count (incl. remaining trading days to trigger, current conversion premium, residual size) | **14:00** | Focus: quantum/compute/AI proxy convertibles + large-cap financial convertibles |
| 2 | Write the convertible add/trim **dual gate** matrix aligned with chief-strategist's 88/7/5 → 91/7/2 → 93/7/0 ladder | **14:30** | Entry events: QUBT/Rigetti post-close 05-11; QBTS pre-open 05-12 |
| 3 | Resolve the CEA price contradiction and refresh straight-bond-floor + parity targets for steel / cement / aluminium converts | **15:00** | See §4 — coordination request to esg-analyst |
| 4 | Re-price property + LGFV-linked converts' bond floors (5-issuer YTM cross-section) | **15:30** | Cross-check with bond-analyst / realestate-analyst |
| 5 | Monitor afternoon volume concentration and EOD conversion-premium distribution on quantum-proxy converts | **15:30 close** | Used to stage 05-12 open orders |
| 6 | Under the factor-crowding alarm, check whether bank / utility bond-floor converts (e.g., SPDB, Bank of Suzhou, Industrial Bank, Bank of Shanghai converts) are showing redemption-driven selling | **15:30 close** | Track deviation between traded price and modelled bond floor |

---

## 4. Coordination With Other Analysts

1. **esg-analyst**: reconcile CEA price (80.06 vs 114.6) and clarify whether your figure is the exchange listed close, composite price, or weighted including block trades. This single decision drives whether high-carbon convertible targets are quoted as a point or a range today.
2. **chief-strategist**: please fill in the truncated 88→91→93 ladder trigger rules in `card-08`, in particular the explicit definition of a "clean confirm" for Rigetti and QBTS (which of auditable orders / Bookings / ARR qualifies).
3. **bond-analyst**: please share **same-day onshore public-bond YTM cross-sections** for Shandong (Qingdao / Jiaozhou / Chengyang) and Hubei (Wuhan Vehicle-Valley / Wuhan City Investment), used as inputs to re-price property-chain / LGFV-linked convertible bond floors.
4. **factor-analyst**: building on your §2 "crowding audit," please add **implied underlying-equity factor exposure for bank / utility convertibles** so we know whether bottom-tier convertibles will be dragged by redemption flows from the dividend / low-vol bucket.

---

## 5. Comparison With Our Own Recent Conclusions

- `my_recent_reports.md` is empty (0 lines). We have no archived convertible-analyst report in the last 5 days.
- Therefore **no contradiction with any earlier self-stance**. This midday note is the first traceable output for this workflow and will be the anchor for follow-ups.

---

## 6. Coordination Requests (JSON)

```json
{"follow_ups":[
  {"to":"chief-strategist","subject":"Fill in the truncated card-08 quantum-basket ladder trigger rules","question":"Please share the full text of the three trigger conditions for the 88% → 91% → 93% ladder in card-08 (the section truncated at lines 611-613), in particular the explicit criterion for a 'clean confirmation' on Rigetti and QBTS — which of auditable orders / Bookings / ARR qualifies. We will use this to build the symmetric add/trim gate matrix on the convertible side.","priority":"high"},
  {"to":"esg-analyst","subject":"Reconcile CEA spot price (80.06 vs 114.6 RMB/tonne)","question":"On 2026-05-08/09 the national CEA spot price is quoted at RMB 80.06/tonne (utilities/materials analysts) versus RMB 114.6/tonne (you) — a +43% data conflict. Please clarify whether your 114.6 figure is the SEEE listed close, the composite price (block-trade weighted), or another source; if composite, please provide the pure listed close for the same day. This figure directly drives today's target prices for steel / cement / aluminium convertibles.","priority":"high"},
  {"to":"china-macro","subject":"Domestic liquidity and credit-spread path through the 05-12/13 window","question":"Under hawkish Powell + USD strength + A-share rotation into earnings delivery, what are your expected mean and range for R007, 10Y CGB yield, and 3Y AA+ credit spread on 05-12 and 05-13? This will set the magnitude of our convertible straight-bond-floor re-pricing.","priority":"normal"}
]}
```
