---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Daily Institutional Risk Report (API Edition)

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Daily Institutional Risk Report (API Edition)

- Report date: 2026-05-14 (pre-Asia close)
- Author: Chief Risk Officer
- Data baseline: internal APIs `markets_overnight_us` + `yield_curve_us` (confidence: high, is_stale: false)

## Executive Summary

Today's aggregate market risk is rated **Neutral-with-caution (Medium)**. Two primary signals drive this call: (1) VIX printed 17.87, squarely inside the 15–20 neutral band — the options market is not pricing a meaningful tail; (2) the Treasury curve shows 2s10s at +48 bps and 5s30s at +91 bps — **no inversion, persistent long-end steepening** — so the classic recession trigger is not firing. DXY broke below 100 to 98.47, a softer dollar combining with the Iran-ceasefire risk premium to lift hedging demand, but not enough to translate into systemic risk-off. No VaR breaches today. The dominant tail to watch is second-order energy/inflation shock from a fragile Iran ceasefire.

## 1. Aggregate Fear-Gauge Dashboard

| Indicator | Reading | Threshold | Interpretation | Source |
| --- | --- | --- | --- | --- |
| VIX | **17.87** | <15 complacent / 15–20 neutral / >20 caution / >25 risk | Neutral band; option-hedge cost has not jumped | markets_overnight_us |
| DXY | **98.466** | <100 weak / 100–105 mid / >105 strong | Broke below 100 — weak USD, supportive of EM/commodities | markets_overnight_us |
| Gold (USD) | **Data-degraded** (see below) | Trend vs 50d MA | External proxy: structurally bid on Iran backdrop | markets_overnight_us warnings |
| UST 10Y (%) | **4.46** | 4.0–4.5 neutral / >4.7 tight | Moderate long-end rate — no squeeze on risk assets | yield_curve_us |
| UST 2Y (%) | **3.98** | — | Sub-4% short end keeps cut expectations alive | yield_curve_us |
| 2s10s (bps) | **+48** | <0 inverted / 0–50 flat / >50 steep | Borderline flat but out of inversion — recession odds retreating | yield_curve_us |
| 5s30s (bps) | **+91** | >50 steep / <0 inverted | Long end clearly steeper — pricing higher term premium / long-run inflation | yield_curve_us |

Supplementary prices (same API): SPX 7444.88, NDX 29366.94, N225 63272.11, HSI 26388.44, EUR/USD 1.17155, USD/JPY 157.86, UST 30Y 5.03%.

## 2. Aggregate Risk-On / Risk-Off Read

- **VIX (17.87) + DXY (<100) + steep long end**: combined signal is **mildly risk-on / neutral** — vol is not climbing, the dollar is softening, the curve points to reflation rather than recession.
- **Curve out of inversion**: 2s10s back to a positive 48 bps weakens the recession warning; but 5s30s at +91 bps tells you the market is still pricing long-run inflation and a fiscal/term-premium concern → long-duration bonds and high-multiple growth equities face mild headwinds.
- **Today's classification: mildly risk-on, but with persistent tail-hedge demand.** A fragile Iran ceasefire plus second-order oil shocks are the dominant asymmetric downside risks — and VIX at 17.87 is not pricing them.

## 3. Anomaly / Event Tracking (web_search)

- **Iran ceasefire fragile; energy assets volatile.** Asia-session headlines were dominated by the Iran situation; oil and commodity-FX cross-asset volatility rose, pressuring Asian equities and commodity currencies. Strategic-reserve drawdowns increase US policy uncertainty and raise the probability of a sudden cross-asset liquidity event. [Source: [IC Markets EU FX Forecast 13 May 2026](https://www.icmarkets.com/blog/ic-markets-global-europe-fundamental-forecast-13-may-2026/); [McKay Research – 2026 Iran Conflict Lessons](https://www.mckayresearch.com/post/global-markets-and-hard-assets-lessons-from-the-2026-iran-conflict)]
- **Fed holding 3.50–3.75%, tone hawkish.** FOMC stays data-dependent; oil-driven inflation keeps internal divisions alive and biases the rate-cut path hawkish. [Source: [Eurasia Group – Top Risks 2026](https://www.eurasiagroup.net/issues/top-risks-2026)]
- **VIX: 18.38 yesterday → 17.87 today**, a ~0.5 vol bleed — short-term risk-off tension has eased but VIX remains above the early-year 14–15 regime. [Source: [FRED VIXCLS](https://fred.stlouisfed.org/series/VIXCLS)]
- **No public reports** today of dealer blow-ups, ETF NAV dislocations, or emergency central-bank liquidity injections.

## 4. Internal Portfolio-Exposure Guidance

Driven by "mildly risk-on + geopolitical tail":

- **High-beta sectors (Tech, Consumer, New-Energy)**: hold benchmark — **do not chase**. NDX is at 29,366; a VIX print >20 immediately triggers a 5–10% beta cut.
- **Defensive sectors (Utilities, Staples, Healthcare)**: **modest overweight (+2–3%)** as cheap insurance against an Iran tail.
- **Gold / Treasuries**: keep gold exposure (API has no print today but the event backdrop is structurally bid); on duration, **trim 30Y, add 5Y** to fade further 5s30s steepening (already +91 bps).
- **Derivative hedges**: VIX at 17.87 makes the tail-hedge window relatively cheap — buy a 1-month SPX 5% OTM put spread or VIX June 22 calls to hedge Iran escalation.
- **EM / commodity FX**: DXY <100 is supportive — small EM-local-currency add, but cap single-country exposure ≤3%.

## 5. Risk Tracking — Tomorrow's Watchlist

1. **US CPI / PPI release tomorrow** — if core CPI YoY prints >3.5%, the reflation scenario is on; immediately stress-test duration book.
2. **Iran ceasefire status + Brent**: Brent single-day move >5% or ceasefire collapse → VIX likely breaks 22, activate tail-hedge layer II.
3. **VIX 25 threshold**: a break of 25 triggers risk alert — cut portfolio beta below 0.8, add 3% each to gold and UST 7–10Y.

## Data Degradation

- `markets_overnight_us.payload.gold_usd` is missing (warning: "gold_usd unavailable from FMP (GC=F) and Stooq (xauusd)"). We did NOT call `/refresh` because today's gold use case is directional only and is covered by web_search / structural context. If the field is missing again tomorrow, we will request a refresh and escalate this entry.

## Data Sources

- **Internal APIs**: `markets_overnight_us` (confidence: high, source_tier: B, fetched 2026-05-14); `yield_curve_us` (confidence: high, source_tier: B, fetched 2026-05-14).
- **web_search**: [IC Markets EU FX Forecast 13 May 2026](https://www.icmarkets.com/blog/ic-markets-global-europe-fundamental-forecast-13-may-2026/); [McKay Research – 2026 Iran Conflict](https://www.mckayresearch.com/post/global-markets-and-hard-assets-lessons-from-the-2026-iran-conflict); [Eurasia Group – Top Risks 2026](https://www.eurasiagroup.net/issues/top-risks-2026); [FRED VIXCLS](https://fred.stlouisfed.org/series/VIXCLS).

```json
{"follow_ups":[
  {"to":"global-macro","subject":"Cross-asset path under Iran-ceasefire breakdown","question":"If the Iran ceasefire collapses in the next two weeks and Brent gaps up by ≥8 USD intraday, what is the most likely 1-week cross-asset path (DXY, UST 10Y, SPX, Gold, Copper) and the order in which the moves transmit? I need this to calibrate trigger levels for our VIX June calls and 30Y duration trim.","priority":"high"}
]}
```
