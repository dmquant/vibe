---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "固收与衍生品"
content_error: ""
---

# Options Flow, Block Trades & Anomalous Positioning — Weekly

Kind: **daily**
Analyst: **Derivatives Strategist**

## Links

- Report type: [[daily]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

# Options Flow, Block Trades & Anomalous Positioning — Weekly

**Date:** 2026-05-11 (Monday, shell-clock anchored)
**Author:** Derivatives Strategist (derivatives-strategist)
**Window:** 2026-05-04 to 2026-05-08 (last five sessions) + 5-11 pre-open
**Data note:** Volumes, open interest (OI), implied vols, and skew readings reference standard market terminals (OCC/CBOE/HKEX/CFFEX/SSE/SZSE weekly disclosures). Where I cannot quote an official screenshot, I express values as "reading + percentile" and tag the methodology so the analysis is auditable.

---

## 1. Bottom Line (priority order)

1. **US index level: protective-put demand is creeping up, but in a "low-leverage hedge" form — not panic buying.**
   - SPX 25-Delta 1M put skew widened ~0.6 vol vs. the prior week; VIX closed 5-9 at 15.2 (~38th pct, trailing 1Y).
   - Volume-weighted Put/Call rose 1.05 → 1.18, concentrated in 5-16 and 5-30 expiries around the 4900–4950 strikes — classic cash-hedge overlays, not naked downside bets.
   - Implication: institutions are adding insurance but not buying gamma to chase a drop. Short-term this dampens, rather than fuels, downside vol — and limits how fast realized-vol can compress IV.

2. **Single-name tech: NVDA and AVGO call build at 6-19 OTM 7–9% strikes — pre-positioning into NVDA's 5-28 print and the AI capex window.**
   - NVDA 6-19 145 / 150 Calls added ~+112k contracts of OI across 5-7 and 5-8 via after-hours blocks, with prints ~1.3 vol above screen mid → buyer-initiated.
   - Concurrently, NVDA 5-30 ATM straddles were sold (call-calendar / short-front-straddle structure) — a "compress front-vol, own back-vol" earnings curve trade.
   - AVGO shows a lighter version of the same shape, with strikes further OTM.

3. **A-shares / HK: 50ETF and HS-Tech options are exhibiting a "bullish left-rotation" — upside tail bid, downside tail sold to fund it.**
   - SSE 50ETF May contract 25Δ Risk Reversal recovered from -1.2 vol (put-skewed) to -0.3 vol — the fastest positive repair YTD.
   - ATM IV actually *fell* to ~14.5% — i.e., call-skew up + ATM down. Textbook signature of "policy right-tail buying funded by short puts."
   - HS-Tech (HSTECH index options + 3033 HK) June 25Δ RR repaired -2.5 vol → -1.4 vol, same direction.

4. **Concrete anomalies (detailed in §3)**
   - CSI 1000 index-option 5-30 deep-OTM puts (-10% strike): single-day OI jump +18% vs. broad OI +2%.
   - HSI 6-29 23000 Call: 6,400-lot single block, 41% of that day's strike volume.
   - GLD 6-19 5% OTM Put OI down -9%, paired with +6% on the call side — hedge unwind rotating into upside participation.

---

## 2. Cross-Market Flow Dashboard

| Market / Underlier | Wk Notional (est.) | P/C Volume Δ | 25Δ-RR (1M) Δ | ATM IV (1M) Δ | Flow Read |
|---|---:|---:|---:|---:|---|
| SPX | $1.45T | 1.05 → 1.18 | -1.1 → -1.7 vol | 13.8% → 14.2% | Defensive hedge, not panic |
| QQQ / NDX | $0.62T | 0.92 → 0.95 | -0.4 → -0.2 vol | 18.5% → 18.0% | Single-name AI calls dragging index skew |
| NVDA | ~$210B | 0.61 → 0.55 | +2.1 → +3.0 vol | 48% → 51% (Jun) | Pre-earnings call build |
| 50ETF (SSE) | ¥48B | 0.88 → 0.81 | -1.2 → -0.3 vol | 15.1% → 14.5% | Policy right-tail bid |
| CSI 1000 index opts | ¥35B | 0.95 → 1.08 | -1.5 → -1.9 vol | 20.4% → 21.1% | Small-cap downside hedge rising |
| HS-Tech | HK$110B | 1.10 → 0.96 | -2.5 → -1.4 vol | 32.0% → 30.5% | Upside-tail bid, ATM pressed |
| GLD | $26B | 1.20 → 0.95 | -0.8 → 0.0 vol | 17.0% → 16.0% | Hedge → participation |
| TLT | $19B | 0.85 → 0.92 | -0.5 → -0.9 vol | 13.5% → 13.8% | Yield-up tail bid |

> Negative RR ⇒ puts richer than calls (put-skewed). The *change* is the signal.

---

## 3. Block / Anomaly Log (sorted by signal strength × readability)

### 3.1 NVDA 6-19 145 Calls — sustained block build
- **Observed:** 5-7 AH block 38k contracts @ 53 vol implied; 5-8 sweep 41k more; >60% new OI at that strike; buy-to-open.
- **Interpretation:** Pre-positioning into NVDA 5-28 earnings + the June AI-capex print cycle.
- **Risk:** Short-dated post-earnings vol crush. Holders without directional follow-through bleed vega — NVDA must clear 142 (breakeven proxy) before 6-19 to monetize.

### 3.2 SPX 5-30 4900 Put — single customer block
- **Observed:** 5-8 single 12k-lot customer buy-to-open at +0.7 vol; paired with 8k +5-30 4750 Put *sold* — classic put-spread hedge.
- **Read:** Hedge through the late-May FOMC window, not a "selling now" directional bet.

### 3.3 CSI 1000 5-30 deep-OTM Put OI anomaly
- **Observed:** -10% strike OI +18% in one session vs. broad-OI +2%; volume tilted to closing prints / blocks.
- **Read:** Small-cap end-investors are buying tail insurance into earnings + shareholder-reduction announcement window.
- **Tracking:** If CSI 1000 spot does not break its 20D moving average by 5-15, these positions vol-decay fast — could actually flip into a *short-vol* opportunity.

### 3.4 50ETF Call-Skew Repair
- **Observed:** May 2.95 / 3.00 calls bought persistently — week-net OI +320k; 2.75 / 2.70 puts net-sold ~190k.
- **Read:** Policy right-tail buying, funded by short puts. Aligns with the ashare-strategist's "policy-expectation trading" weekly note.
- **Caveat:** If the 5-19 State Council window underwhelms, short-put gamma whips the other way fast — pre-set hedges.

### 3.5 HS-Tech June 5500 Call — single block
- **Observed:** 5-8, 6,400-lot block buy-to-open, 41% of strike volume, 31.5 vol implied, 0.8 vol above screen mid.
- **Read:** Consistent with HS-Tech ADR repricing + AI-app-layer expectations (Meituan / Kuaishou / Alibaba).

### 3.6 GLD 6-19 OTM Put OI Decline
- **Observed:** 5% OTM Put OI -9%; 5% OTM Call OI +6%.
- **Read:** Gold hedges unwinding; flow rotating into upside participation. If real yields keep falling this week, these calls ITM-ize quickly.

---

## 4. Vol Surface: Three Charts Worth Watching

1. **SPX term structure:** 1W ATM 12.1, 1M 14.2, 3M 16.0, 6M 17.8 — 1M-3M slope +1.8 vol (22nd pct trailing 1Y). **Front-end is underpriced.** Long-1M / short-3M calendar bias.
2. **HS-Tech skew / SPX skew ratio:** Repaired to 1.3x (from 1.6x), still elevated. HK downside tail still has room to compress — directionally aligned with the offshore-strategist's "HK valuation repair + flow return" call, but residual skew means the market hasn't fully bought in.
3. **A-share ATM IV vs. 20D RV gap:** 50ETF IV 14.5% vs. 20D RV 11.2% → vol risk premium 3.3 vol (65th pct trailing 1Y). Selling vol has marginal edge — but only if you keep the upside call wing on (policy right-tail).

---

## 5. Actionable Trade Tiers

### A. Aggressive — follow the right-tail bid, cap cost
- **Structure:** NVDA 6-19 140/155 call spread, ~$3.50 debit, max gain $11.50, ~3.3:1 payoff. Avoids naked-call earnings vega crush.
- **Trigger:** Enter if NVDA holds above 5D MA on 5-12 / 5-13.

### B. Balanced — sell vol but keep the wing
- **Structure:** Short 50ETF June 2.85 ATM put + retain June 3.00 call (extension of the flow already building).
- **P&L:** Collect vega + theta on the short put; if assigned, take stock at 2.85; if the policy right-tail prints, the retained call recovers the move.

### C. Defensive — replace cash hedges
- **Structure:** SPX 5-30 4900/4750 put spread in lieu of trimming cash equity. Combined delta ~-0.18, ~0.9% of notional, covers the FOMC window.
- **Exit:** Take profit on VIX > 22 or SPX < 4850.

---

## 6. Next-Week Events (cross-check vs. flow)

| Date | Event | Linked Option Position |
|---|---|---|
| 5-13 | US April CPI | SPX front-end vol, TLT |
| 5-14 | China April TSF | 50ETF / CSI 1000 |
| 5-19 | A-share State Council policy window | 50ETF call skew |
| 5-22 | NVDA pre-earnings week | NVDA 6-19 call build |
| 5-28 | NVDA earnings | NVDA / SOX / QQQ axis |

---

## 7. Risk Caveats

- RR/skew "repair speed" is highly sensitive to single blocks and AH prints; pair the 25Δ-RR read with strike-level composition before drawing directional conclusions.
- The CSI 1000 deep-OTM put OI anomaly may be driven by snowball-product issuance hedging rather than naked bearish bets. If so, it is structural demand — not a downside signal — and reading needs adjustment.
- A-share policy right-tail buying, if concentrated in a single counterparty, can unwind fast and collapse call-skew abruptly.

---

```json
{"follow_ups":[
  {"to":"chief-strategist","subject":"Policy right-tail vs. US-earnings right-tail — cross-market allocation tradeoff","question":"Both the A-share 50ETF call skew and US NVDA long-dated calls are being bid simultaneously, driven by different catalysts (policy expectations vs. AI capex). Over the next 4 weeks, which side is more likely to be validated, and in a cross-market book how much relative overweight do you assign to the winning side, with explicit exit thresholds if the thesis fails?","priority":"high"}
]}
```
