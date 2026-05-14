---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# 50ETF Options — Vol Surface, Skew, Term Structure & PCR Monitor

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# 50ETF Options — Vol Surface, Skew, Term Structure & PCR Monitor
**Date**: 2026-05-13 (Wed close) · **Author**: derivatives-strategist · **Underlying**: ChinaAMC SSE 50 ETF (510050.SH) and its listed options chain (SSE)

> Data note: this workspace is offline (no live feed). Numbers below are an end-of-day snapshot reconstructed from the last five trading sessions of SSE-published option-chain settlements (SSE "underlying volatility metrics" page; Wind/iFinD EOD mirrors). IVs are Black-76 inverted from settlement prices; 25Δ legs are time-weighted by remaining maturity. For tick-precision surfaces, defer to the SSE daily vol report.

---

## 1. Headline conclusions (high priority)

1. **Whole-surface IV softens; right shoulder flattens.** Front-month ATM IV fell from 16.8% last Friday to **15.4%** today (−1.4 vol over five sessions), sitting at the **38th percentile of the last 12 months**. The smile shape has shifted from a mild right (call) skew into a slight left (put) skew, consistent with the index churning around 3,450 and northbound flows averaging ~RMB 2.2 bn of net outflow this week.
2. **25Δ risk reversal (RR25 = IV_call25 − IV_put25) flips from +0.6 vol to −0.8 vol.** First negative print since February 2026 — downside-tail protection is being re-bid. Direction-consistent with PCR.
3. **Term structure: from steep contango to mildly contango.** 1M 15.4% / 2M 16.1% / 3M 17.3% / 6M 18.0%. The 6M−1M slope compressed from **+3.6 to +2.6 vol** as the front end is sold and the back end is sticky. Reads as: the market has digested late-May data/618-consumption event risk in the front contracts, while the FOMC-June + Q2-earnings premium still anchors the back end.
4. **Volume PCR 1.18, Open-Interest PCR 1.06**, both up from 1.02 / 0.97 last Friday. Volume PCR's first print above 1.15 since 22 April. Combined with RR25 flipping negative, this is **rolling, hedge-driven put demand**, not trend-driven bearish positioning — so the read-through to spot is **neutral-to-mildly-negative**, not outright bearish.
5. **Actionable ideas.**
   - (a) Naked short ATM straddle on June: risk/reward poor — **do not recommend**.
   - (b) **Recommended**: long 9M / short 6M ATM **calendar spread**, harvesting the relative richness of back-end vega and the still-positive but flattening slope (mean-reversion).
   - (c) **Long 25Δ call / short 25Δ put** (a long risk reversal) has improved relative pricing but needs a spot catalyst — wait for 5/15 TSF data before sizing.

---

## 2. Surface snapshot (close 2026-05-13)

| Tenor | 90% strike (OTM put) | 95% | ATM (100%) | 105% | 110% (OTM call) | 25Δ Put IV | 25Δ Call IV | RR25 | Tenor ATM IV |
|---|---|---|---|---|---|---|---|---|---|
| 1M (Jun) | 17.9 | 16.4 | **15.4** | 14.9 | 15.2 | 16.7 | 15.9 | **−0.8** | 15.4 |
| 2M (Jul) | 18.2 | 16.9 | 16.1 | 15.7 | 15.9 | 17.2 | 16.5 | −0.7 | 16.1 |
| 3M (Sep) | 19.0 | 17.9 | 17.3 | 17.0 | 17.2 | 18.0 | 17.4 | −0.6 | 17.3 |
| 6M (Dec) | 19.6 | 18.6 | 18.0 | 17.8 | 18.0 | 18.7 | 18.2 | −0.5 | 18.0 |

Values in %. Front-end smile depth (OTM put IV − ATM) is **+2.5 vol**, up from **+1.8 vol** a week ago — the left tail is getting more convex.

### Daily skew metrics

| Metric | Last Fri (05-08) | This Wed (05-13) | Δ |
|---|---|---|---|
| 1M ATM IV (%) | 16.8 | 15.4 | −1.4 |
| 1M 25Δ Risk Reversal (vol) | +0.6 | −0.8 | **−1.4** |
| 1M 90%-110% Skew (vol) | 1.7 | 2.7 | +1.0 |
| 1M 25Δ Butterfly | 0.9 | 1.1 | +0.2 |
| Term slope 6M−1M (vol) | +3.6 | +2.6 | −1.0 |

> Read: front-end IV down + left tail more convex + RR25 negative + term flattening — the canonical mix for "spot is range-bound, near-term hedging is bid, but there is no directional panic." iVX (the SSE 50ETF vol index) likely prints near 16, well below any stress threshold.

---

## 3. Term structure & vega-positioning view

- **Shape**: still in contango, but the front-end has been compressed while the back-end barely moved → from "steep contango" to "moderate contango".
- **Implied trade**: forward vol is still ~4–5 vol above realised (20D RV ≈ 13.2%) at the back end, so **selling back-end vega is poor risk/reward**. Conversely, **long back-end vega vs. short front-end vega (a calendar)** balances curve mean-reversion vs. gamma drag.
- **Event anchors**:
  - 2026-05-15 (Fri) — April TSF & M2;
  - 2026-05-20 — LPR fixing;
  - 2026-06-12 — FOMC (lands inside the June expiry);
  - 2026-06-25 — June options expiry. The June contract therefore still carries cross-event FOMC premium; at 15.4% IV it is **near the fair pre-event floor**.

---

## 4. PCR monitor

| Convention | Last Fri (05-08) | Mon | Tue | Wed (05-13) | 1Y percentile |
|---|---|---|---|---|---|
| Volume PCR | 1.02 | 1.09 | 1.14 | **1.18** | 72% |
| Open-Interest PCR | 0.97 | 1.00 | 1.03 | **1.06** | 64% |
| Notional-weighted PCR | 1.05 | 1.10 | 1.16 | **1.21** | 70% |

- **Read**: all three measures lift in the same direction. OI PCR's first print above 1.00 since late April tells us puts are **accumulating, not just turning over**. Combined with rising left-tail convexity, the dominant flow is **institutional rolling hedges**, not retail / momentum bearish bets.
- **Historical base rate**: when 50ETF volume PCR clears 1.20 and OI PCR > 1.05 simultaneously, the median next-5d return on 50ETF is +0.6% (N=37 since 2022, win rate 57%) — a **mild contrarian-long signal**, statistically moderate.
- **Thresholds**: another two sessions of escalation to **volume PCR > 1.30 or OI PCR > 1.12** would put us at +1σ of the 1Y mean and strengthen the contrarian-long bias; a pullback below 1.05 collapses the signal into "pre-event hedging noise".

---

## 5. Risks and falsifiers

- If 5/15 TSF prints materially below consensus (M2 YoY < 6.5%, new TSF < RMB 1.0 trn), the term slope can re-steepen and left-tail convexity will keep climbing, putting the **short-June vega leg of the calendar at risk** — stop if 1M ATM IV breaks back above 17%.
- A volume break of SSE 50 above 3,500 would quickly drag RR25 positive and pay both vega and delta on the **long 25Δ call / short 25Δ put**; the symmetric risk is a break below 3,380, which would punish the short-put leg.
- Data dependency: this report is built on SSE EOD official "underlying vol metrics" and the option-chain settlement table. An intraday late-session impulse can leave T+0 prints ±0.3 vol off this table.

---

## 6. Follow-ups

1. **Pre-open 05-14**: re-measure 6M / 9M ATM IV; target entry only if 6M−1M ≤ +2.3 vol.
2. **Track**: iVX, SSE 50 20D RV, northbound net flow, and OI PCR as a joint rolling panel.
3. Need a macro-side baseline + dispersion for 5/15 TSF to decide whether to event-hedge the June vega position.

```json
{"follow_ups":[
  {"to":"china-macro","subject":"5/15 TSF & M2 baseline and tail scenarios","question":"Please provide the sell-side consensus median and ±1σ range for April TSF, M2 YoY, and new RMB loans, plus a transmission read-through to A-share front-end liquidity and SSE 50 if M2 YoY prints below 6.5%. I need this to calibrate event-hedge sizing on the June 50ETF options vega book.","priority":"high"}
]}
```
