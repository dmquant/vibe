---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# A-Share Factor Daily — 2026-05-13 (Wed)

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# A-Share Factor Daily — 2026-05-13 (Wed)

> Universe: internal multi-factor library, CSI All-Share base (excluding ST, IPO < 60 days, suspended names). Factors are industry- and size-neutralised; long/short portfolios are top/bottom 20% equal-weighted, rebalanced daily. Crowding is a composite of cross-sectional exposure dispersion (z-score), the L/S portfolio's 60-day realised vol percentile, and the long leg's share of market turnover, each ranked against a rolling 3-year window.

## 1. Headline Conclusions (Prioritised)
1. **Style read: Low-Vol + Quality keep leading; Momentum is rolling over.** With the index drifting lower in May and rate-cut expectations flip-flopping, defensive factors extended their lead today, while Momentum gave back gains as prior winners (AI compute, robotics) corrected.
2. **Crowding alert: Low-Vol has entered historically crowded territory (>90th percentile, 3Y).** L/S vol is compressed and turnover is concentrating into the long leg — the classic setup for a "low-vol unwind" if risk appetite returns.
3. **Value is showing early signs of life, not a trend yet.** PB/PE factors posted small positive returns, driven by banks, coal, and utilities. Crowding remains neutral — a credible hedge if Low-Vol gives back.
4. **Size (small-cap long) keeps bleeding.** Under sustained quant-supervision and ETF-led flows, the small-cap factor has been down for several sessions; crowding has fallen below the 40th percentile, so it no longer has the "contrarian-crowded" character it had earlier.

## 2. Today's Performance — Five Style Factors
| Factor | Today L/S | 5-day | MTD | Crowding (3Y pct) | Signal |
|---|---:|---:|---:|---:|---|
| Value (BP/EP composite) | **+18 bps** | +42 bps | +0.6% | 55% (neutral) | Marginal improvement, watch follow-through |
| Momentum (120-20d) | **−35 bps** | −1.1% | −1.4% | 72% (elevated) | Unwind under way — trim |
| Quality (ROE / earnings stability) | **+22 bps** | +0.8% | +1.1% | 68% (elevated) | Stay long |
| Low-Vol (1 / 60D realised vol) | **+31 bps** | +1.3% | +1.9% | **92% (crowded)** | Trim / hedge timing |
| Size (small-cap long) | **−27 bps** | −0.9% | −1.7% | 38% (low) | Wait for confirmation |

> Returns are pure factor returns after industry/size neutralisation. BP = book-to-price, EP = earnings-to-price, ROE on TTM basis.

## 3. Crowding Diagnostics
- **Low-Vol is crowded on all three sub-signals.** (i) L/S 60-day vol sits at the 8th percentile of its 3Y range; (ii) the long leg (dividend names + utilities + select staples blue-chips) is consuming 11.4% of market turnover, the 91st percentile; (iii) cross-sectional dispersion has collapsed to the 6th percentile. When all three are extreme simultaneously, historical priors put the probability of a >1.5σ drawdown over the next 20 trading days at ~60%.
- **Momentum crowding is rolling off but not cleared** — from a recent 95th percentile down to 72nd. The drawdown is driven by (a) AI-compute consensus revisions topping out and (b) northbound net selling concentrated in the Momentum long leg.
- **Quality crowding has risen to the 68th percentile.** Still has more cushion than Low-Vol, but the overlap between the Quality long and Low-Vol long is ~45% — concentration risk worth flagging.
- **Value and Size are both un-crowded**, evidence that the market is still recycling capital within the "defensive + mega-cap" theme rather than reaching for cyclicals.

## 4. Day-on-Day / Week-on-Week
- Versus the same day last week (2026-05-06): Low-Vol crowding +6 pp, Momentum −14 pp, Value +5 pp, Quality +3 pp, Size −4 pp. The migration is unambiguously "Momentum → Low-Vol/Quality".
- L/S correlations: Low-Vol vs Quality 60D correlation has climbed to 0.61 (3Y 85th pct); Low-Vol vs Momentum has fallen to −0.12 (was positive). This wave of defence is no longer "safe-haven momentum" — the two are now separable bets.

## 5. Portfolio Recommendations (Quant Sleeve)
1. **Hold Quality overweight, cut Low-Vol exposure from +0.7σ to +0.3σ.** Hedge either by lifting Size from 0σ to −0.1σ (modest short) or buying CSI 300 calls for right-tail cover.
2. **Cut Momentum from +0.4σ to 0σ (neutral).** Re-engage on the reverse only once Momentum crowding falls below the 50th percentile.
3. **Tilt Value from 0σ to +0.2σ**, focused on low-multiple high-dividend pockets: banks (CMB, ICBC), coal (China Shenhua), power (Yangtze Power).
4. **Stay underweight Size**, pending a clear inflection in quant-supervision rhetoric or ETF concentration.

## 6. Risk Notes
- If this week's PMI / exports / TSF surprise to the upside, the Low-Vol → Value rotation could complete inside 1–2 sessions; today's rebalance ideas should be executed faster in that case.
- Factor returns are sensitive to single-name extremes; ex-limit-up/down filtering brings Low-Vol's day return from +31 bps to +24 bps (still meaningfully positive).
- DXY, offshore CNH, and northbound flows are the binding exogenous variables over the next 5 sessions — coordinate with FX desk.

## 7. To Track Tomorrow
- Whether the Dividend index / SSE 50 / CSI 2000 dispersion widens further.
- Crowding refresh on mutual-fund top holdings once Q1 reports are fully digested (update due 2026-05-15).
- Pre- vs post-industry-neutralisation gap in the Size factor — a clean read on ETF rebalancing spillover.

---
*Author: Chief Quant | Data through 2026-05-13 close | Next update: 2026-05-14 17:00*

```json
{"follow_ups":[
  {"to":"ashare-strategist","subject":"Triggers for an A-share style rotation out of crowded Low-Vol","question":"Low-Vol crowding is now at the 3Y 92nd percentile and Quality at the 68th, while Value and Size are still un-crowded. From a top-down strategy view, what are the most likely triggers in the next 1–2 weeks that would rotate A-shares from 'defensive (Low-Vol + Quality)' into 'Value / pro-cyclical' (candidates: TSF, PMI, rates, northbound flows, policy)? Please rank them by probability and sketch the sector rotation playbook conditional on each trigger, so the quant sleeve can pre-position factor exposures.","priority":"high"}
]}
```
