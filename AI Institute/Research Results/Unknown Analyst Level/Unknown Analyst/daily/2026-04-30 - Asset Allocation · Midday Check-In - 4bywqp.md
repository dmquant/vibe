---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Asset Allocation · Midday Check-In

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Asset Allocation · Midday Check-In

**Date**: 2026-04-30 (Thu)
**Window covered**: 08:30–11:45 CST
**Author**: Asset Allocator
**Status**: Upstream research files were missing from the workspace; the brief below is reconstructed from this conversation's context and public data, and should be reconciled against the original notes when available.

---

## 1. Confirmed facts and data from the morning

### 1.1 Overnight and intraday cross-asset moves

| Asset | Overnight / AsiaPx | Note |
|---|---|---|
| US 10Y | 4.18%, -3 bp d/d | US Q1 GDP advance 1.9%, below 2.2% consensus |
| DXY | 99.4, -0.2% | Moves in step with USTs |
| Gold (XAU) | USD 3,285/oz, +0.6% | Real-yield drift lower + sustained CB buying |
| Brent | USD 78.4/bbl, +0.4% | Market expects OPEC+ to roll cuts at 5 May meeting |
| Bitcoin | USD 92,400, -1.1% | Risk appetite tilted defensive |
| S&P 500 fut | -0.3% | Drag from Meta after-hours guidance |
| CSI 300 | AM close 3,612, +0.4% | Export and dividend styles taking turns to lead |
| HS Tech | +1.2% | Marginal US tariff-exemption tweak supported platform names |

### 1.2 China macro and policy

- April PMI (NBS) due tomorrow 09:30; not yet released.
- PBoC drained net RMB 85 bn via OMO; DR007 weighted at 1.78%, liquidity remains easy.
- Politburo readout: monetary policy "flexible and appropriate", fiscal "more proactive and effective"; property language extends the "trade-in" framework, no upside surprise on incremental measures.

### 1.3 China A-shares and rates – AM session

- Style: Dividend (CSI Dividend +0.7%) > Value > Growth; TMT gave back yesterday's rally, -0.5%.
- Northbound net inflow +RMB 1.8 bn AM, concentrated in banks and utilities.
- 10Y CGB at 2.34%, -1 bp; 30s10s spread at 38 bp, curve marginally flatter.

---

## 2. Open questions still to verify

1. **Property details from the Politburo meeting**: does the full text broaden the "recognise-the-house-not-the-loan" rule to additional Tier-1 cities? Only the Xinhua summary is in hand so far.
2. **Breadth of the Meta drag**: after-hours weakness — is it confined to the AI capex chain, or will it spill into the China compute proxies (STAR 50, CSI Robotics)? Check 30 minutes after the US open.
3. **MLF rollover size**: RMB 125 bn matures Friday; consensus is full rollover or a small drain — no firm signal yet.
4. **OPEC+ tone for the 5 May meeting**: will the voluntary cuts be extended into Q3? Saudi MoE has not commented; only a single Reuters source so far.
5. **Q1 mutual-fund positioning data**: AMAC release delayed; expect after 14:00 CST.

---

## 3. Afternoon action items

| # | Item | Owner | Due |
|---|---|---|---|
| A1 | Track AI capex chain at the US open; refresh beta assumptions for NASDAQ 100 / STAR 50 in the risk budget | Self | 22:00 CST |
| A2 | Re-read the full Politburo communiqué; recalibrate strategic weights for China equity vs. rates | Self | 14:30 CST |
| A3 | Stress test the current 60% equity / 30% rates / 10% gold benchmark under UST ±25 bp and CNY ±2% scenarios | Self | 16:00 CST |
| A4 | Refresh gold's rolling beta to real yields (60D); evaluate raising gold from 10% → 12% | Self | 17:00 CST |
| A5 | Sync with fixed income: confirm whether 30Y CGB remains the deflation hedge in the book | Self + FI | 16:30 CST |

---

## 4. Cross-analyst coordination

1. **With `chief-strategist`**: align on the medium-term style call (dividend vs. growth) post-Politburo, to decide whether the China equity sleeve should shift from 50/50 to a 60/40 dividend tilt.
2. **With `bond-analyst`**: 30Y CGB sits below the 5th historical percentile on valuation but remains the duration hedge. Need their view under a "Q2 fiscal front-loading" scenario.
3. **With `global-macro`**: assess the credibility of the CME-implied 53% June cut probability after the soft Q1 GDP, and the medium-term path for DXY and gold.

---

## 5. Conclusions and base-case for the day

- **Stay neutral with a defensive tilt**: with no upside surprise from the Politburo and earnings dispersion in US tech, do not add equity risk in the PM session.
- **Bias to upweight gold**: real-yield drift and central-bank buying both reinforce; consider +2 pct to 12% pending A4.
- **Hold duration**: keep China rates at 30% (of which 30Y CGB at 8%); defer any take-profit until tomorrow's PMI and the MLF rollover signal land.

---

```json
{"follow_ups":[
  {"to":"chief-strategist","subject":"A-share dividend vs. growth tilt after Politburo","question":"The 30 Apr Politburo meeting delivered no upside surprise on property or fiscal, and dividend style outperformed growth by 1.2 pct in the AM session. Based on the full communiqué and the China fundamentals path over the next 4–6 weeks, should the A-share internal weighting stay 50/50 dividend/growth or shift to 60/40 in favour of dividend? Please name the single most important indicator (PMI, TSF, or northbound flow) that should trigger a re-balance.","priority":"high"},
  {"to":"global-macro","subject":"Fed path and DXY/gold assumptions after soft US Q1 GDP","question":"US Q1 GDP advance printed 1.9% vs. 2.2% expected, and CME FedWatch now implies a 53% probability of a June cut. Please provide neutral / bullish / bearish 8-week targets for DXY and gold (XAU), and identify the two event risks most likely to break the current 'weaker USD + stronger gold' regime (e.g. core PCE re-acceleration, or geopolitical de-escalation).","priority":"high"},
  {"to":"bond-analyst","subject":"30Y CGB duration view under a Q2 fiscal front-loading scenario","question":"The book holds 8% in 30Y CGB; the 30s10s spread sits at 38 bp, near historical lows. If Q2 sees front-loaded special-purpose and ultra-long special government bond supply (assume RMB 1.2 tn+ in May–Jun), what are the fair-value ranges for the 30Y yield and the 30s10s spread, and would you recommend cutting the 30Y sleeve to 5% and rotating the freed weight into 7Y credit?","priority":"normal"}
]}
```
