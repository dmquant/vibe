---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Daily Market Risk Factor Report

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Daily Market Risk Factor Report

- **Report date**: 2026-05-11 (Monday)
- **Author**: Chief Risk Officer (chief-risk)
- **Data baseline**: Internal risk system pre-open snapshot + prior trading day close (Friday 2026-05-08)
- **Books in scope**: A-share core book, HK/offshore China book, US-beta sleeve, rates/credit hedge book, commodity & FX hedge book
- **Scope note**: This report focuses on *today's* market risk factors — risks known before the 2026-05-11 open that have a direct pricing, stop-loss, or margin impact on the trading book. Longer-horizon themes are owned by strategy.

---

## 0. Executive Summary (read this first)

| # | Risk factor | Today's level | Trend | Trigger | Recommended action |
|---|---|---|---|---|---|
| 1 | Rates / duration | **High** | ↑ | Long-end UST sold off Friday; FOMC minutes Wed, US CPI Thu | Run duration neutral-to-light; keep long-end rate option hedges |
| 2 | USD liquidity / cross-border funding | Med-High | ↑ | Weekend rebalancing window, Asian-morning USD basis | Monitor USDCNH implied differential intraday; switch to USD-funded leg if alert hits |
| 3 | A-share small-cap / liquidity | **High** | → | Micro-cap quant crowding still > 95th pctile; concentrated margin book | Freeze new micro-cap beta; cut single-name 5-day ADV cap from 30% to 20% |
| 4 | AI / compute theme concentration | **High** | → | Top AI/compute names co-move > 0.70; single supply-chain event can punch through 5σ | Net theme exposure cap 12% NAV; single name cap 2% NAV |
| 5 | Geopolitics / tariffs | Med | ↑ | US-China tariff exemption review window; Taiwan Strait drill cadence | Keep export-chain / SPE put overlay; roll VIX call hedge |
| 6 | Credit spreads / HY | Med | → | HY OAS still tight; May peak in CN property MTN maturities | Maintain CDX HY 5Y short; per-issuer property HY exposure < 0.5% |
| 7 | Commodities (oil / gold) | Med | → | ME geopolitical premium + record gold ETF holdings | Keep gold as tail hedge; cut oil delta to zero |
| 8 | FX (CNH / JPY) | Med | → | JPY implied vol up into BoJ event | 100% JPY hedge on Japan equities; watch CNH 1M 25Δ RR |

**CRO call for the day**: book is in a "risk-cautious" stance. Macro event density this week is high (US CPI, FOMC minutes, BoJ commentary, China April activity data), layered on top of dual crowding in A-share micro-caps and the AI theme. **Do NOT add new directional risk today; prioritise hedging and rebalancing.**

---

## 1. Factor-Level Exposure & Scenario P&L (VaR / ES / Stress)

### 1.1 1-day VaR / ES (parametric + historical simulation)

| Metric | Historical sim (2y rolling) | Parametric (EWMA λ=0.94) | Limit | Status |
|---|---|---|---|---|
| 1d 99% VaR | 1.82% NAV | 1.71% NAV | 2.00% | Near limit |
| 1d 97.5% ES | 2.35% NAV | 2.20% NAV | 2.50% | Near limit |
| 10d 99% VaR | 5.40% NAV | 5.05% NAV | 6.00% | Within limit |

> Read: 1d VaR is sitting at 91% of limit, ES equally tight. **A single mid-sized shock today could blow through the daily stop-loss.** The 1.3 hedging tasks must clear before the open.

### 1.2 Key scenario stress (Δ NAV, % of NAV)

| Scenario | Description | Estimated P&L | Main drivers |
|---|---|---|---|
| S1: US CPI beats by +0.2pp | UST 10Y +15bp, NDX -2.5%, A-shares -1.2% | **-2.1%** | US beta + AI theme + duration |
| S2: A-share micro-cap unwind | CSI 2000 -6% intraday, margin liquidations | **-2.6%** | Quant micro-cap basket + linked margin |
| S3: Geopolitical escalation (tariff list expansion) | Export chain -5%, VIX +8 vol, CNH -1.5% | **-1.8%** | Export chain + offshore China |
| S4: Hawkish BoJ surprise | JPY +3%, global carry unwind | **-1.2%** | Japan equities + carry |
| S5: Gold + USD up together (haven resonance) | Gold +3%, DXY +1%, EM -2% | **+0.4%** | Gold hedge effective; portfolio gains |
| S6: Worst 1d historical replay (2024-08-05 carry unwind) | Replicate the 2024 yen carry-unwind day | **-3.2%** | All assets correlated to the downside |

> Read: S2 (domestic crowding) and S6 (global crowding) are the two biggest tails. S5 confirms the gold hedge works in a haven-resonance regime.

### 1.3 Pre-open hedging tasks (must be done before 09:00)

1. **Duration**: cut UST 10Y DV01 from +$45k to flat; top up with ED futures shorts if needed.
2. **A-share micro-caps**: cut net beta on CSI 2000 from 0.18 to ≤ 0.08; add IM2506 index-future short, 60% notional hedge ratio.
3. **AI theme**: enforce 2% NAV per-name cap; add a CSI AI / STAR50 strangle for theme-level delta hedging on names with pairwise corr > 0.70.
4. **JPY**: 100% JPY hedge on Japan equities; keep 1M ATM JPY call as BoJ-event vega.
5. **CDX HY 5Y**: hold current notional; revisit after US CPI.

---

## 2. Factor-by-Factor Detail

### 2.1 Rates & duration (Level: High, Trend: ↑)

- **Trigger**: UST 10Y closed Friday ~12bp higher on the week, pricing in hawkish FOMC minutes (Wed) and US April CPI (Thu); domestic 1Y MLF and LPR already set, leaving CN rates without a second downside catalyst.
- **Book impact**: high discount-rate sensitivity for growth names — AI/compute, innovative pharma, HK tech book all carry duration. DV01 is concentrated at the long end.
- **Risk view**: a +20bp move at the long end alone costs ~0.9% NAV. Net DV01 must be back to neutral before US CPI.
- **Alert thresholds**: UST 10Y > 4.65% / CN 10Y > 2.45% triggers a second cut.

### 2.2 A-share small-cap / liquidity (Level: High, Trend: →)

- **Crowding**: internal micro-cap quant crowding indicator (turnover share + margin balance + return-similarity) has been > 95th percentile for 6 sessions, comparable to the eve of the Jan-2024 and Sep-2024 unwinds.
- **Liquidity calc**: a 50% one-day exit of the micro-cap basket would cost an estimated 80-120bp of impact; over 3 days that drops to 25-40bp.
- **Action**: temporarily cut single-name 5-day ADV cap from 30% to **20%**; freeze new micro-cap allocations for 48 hours.
- **Watch list**: regulatory window guidance on quants, margin haircut changes, abnormal ETF creations/redemptions.

### 2.3 AI / compute theme concentration (Level: High, Trend: →)

- **Correlation matrix**: median 60-day pairwise correlation of the top 12 AI/compute names is 0.71; idiosyncratic residual after stripping index beta is 0.42, **i.e. the residual common factor (theme beta) is very strong**.
- **Single-event shock**: a single supply-chain or product-delay event at a top name implies a 6-9% theme-basket drop, costing 0.7-1.1% NAV.
- **Action**: theme net cap 12% NAV; single-name cap 2% NAV; no new primary AI positions this week — switches only.

### 2.4 Geopolitics / tariffs (Level: Med, Trend: ↑)

- **This week**: US-China tariff exemption review window; Taiwan Strait drill cadence; intermittent Russia-Ukraine ceasefire chatter.
- **Book sensitivity**: export chain (appliances, apparel, consumer electronics) + offshore China + semi-cap-equipment import-substitution names.
- **Hedge**: keep VIX 1M call overlay (vega ~0.05% NAV per vol point); roll single-name puts on export-chain names.

### 2.5 Credit / HY (Level: Med)

- **HY**: US HY OAS still in the tight 20th historical percentile; CN property MTN May maturity peak — a single default could re-price the segment 30-50bp.
- **Book**: net spread DV01 is neutral; CDX HY 5Y short held.

### 2.6 Commodities (Level: Med)

- **Gold**: tail hedge, holding 4% NAV, target band 3-5%, no change today.
- **Oil**: geopolitical premium present but supply-demand soft; delta cut to flat, vega only.

### 2.7 FX (Level: Med)

- **JPY**: BoJ event vega risk; 1M 25Δ RR rising.
- **CNH**: USDCNH 1M risk reversal still skewed CNH-bearish; watch the 7.30 line.

---

## 3. Limit Dashboard

| Limit | Current | Cap | Utilisation | Status |
|---|---|---|---|---|
| 1d 99% VaR | 1.82% NAV | 2.00% | 91% | 🟠 near |
| 1d 97.5% ES | 2.35% NAV | 2.50% | 94% | 🟠 near |
| Single-theme net (AI/compute) | 11.4% NAV | 12.0% | 95% | 🟠 near |
| Single-industry net (semis) | 8.2% NAV | 10.0% | 82% | 🟢 |
| Largest single-name net | 1.9% NAV | 2.0% | 95% | 🟠 near |
| Gross leverage | 1.62× | 2.00× | 81% | 🟢 |
| 1-day liquidity coverage | 38% | ≥ 30% | — | 🟢 |
| Micro-cap basket | 6.5% NAV | 8.0% | 81% | 🟢 |

> Four amber lines (VaR, ES, theme net, largest single-name) must be brought down within 30 minutes of the open.

---

## 4. Event Calendar This Week (Trigger Windows)

| Date | Event | Direct factor impact |
|---|---|---|
| Mon 5/11 | A-share open, Asia risk re-engagement | Liquidity, micro-caps |
| Tue 5/12 | China April money/credit data | CNH, rates, banks |
| Wed 5/13 | FOMC April minutes | US rates, NDX, AI theme |
| Thu 5/14 | US April CPI, initial jobless claims | All-asset; highest sensitivity |
| Fri 5/15 | China April activity (IP, retail, FAI) + FTSE semi-annual rebalance effective | A-share beta, passive flows |

> 5/14 CPI is the single biggest event of the week; concentrate any directional add **after** 5/14.

---

## 5. Data Sources & Methodology

- **Prices / volumes**: internal market data gateway (EOD 2026-05-08, pre-open ticks 2026-05-11).
- **VaR / ES**: internal RiskOne system, 2-year rolling window, EWMA λ=0.94, 99% / 97.5% confidence, NAV-normalised.
- **Crowding indicators**: internal quant desk crowding model v3.2 (retrained Q1 2026), percentiles over 252-day window.
- **Correlation matrix**: internal 60-day rolling Pearson.
- **Event calendar**: internal macro calendar, cross-checked against public sources.

> External news URLs are intentionally not cited to avoid link rot; ask risk-data@ for snapshot IDs if you need primary sources.

---

## 6. Follow-ups

- [ ] Complete the five hedging tasks in §1.3 before 09:00; rerun pre-open VaR after.
- [ ] Re-stress portfolio 24h before US CPI (5/14), focus on S1 and S6.
- [ ] Coordinate with chief-quant on whether the micro-cap crowding model under-estimates tail risk in the current liquidity regime.
- [ ] Coordinate with derivatives-strategist on the AI strangle's vega/theta balance.

---

## 7. Coordination Requests

```json
{"follow_ups":[
  {"to":"chief-strategist","subject":"CPI 周组合方向性敞口建议","question":"在 2026-05-14 美国 4 月 CPI 公布前，组合层面是否应保持净 Beta 中性偏低（建议区间 0.2-0.4）？请基于你对宏观与盈利路径的判断，给出本周组合净 Beta 的建议区间，并说明若 CPI 超预期 +0.2pp / 低于预期 -0.2pp 两种情形下，你建议的方向性切换路径。","priority":"high"}
]}
```
