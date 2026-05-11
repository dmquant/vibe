---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Research Report: Execution Algorithms, HF Signals, and Market Microstructure

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Research Report: Execution Algorithms, HF Signals, and Market Microstructure

Date anchor: local `date +%Y-%m-%d` returned `2026-05-10`. The coverage window is `2026-05-04` through `2026-05-08`, U.S. regular trading hours.

## Priority Conclusions

1. This was not a clean breadth expansion; it was a Nasdaq/technology-led advance. Nasdaq gained `4.51%` for the week, S&P 500 gained `2.33%`, Russell 2000 gained `1.72%`, and Dow gained only `0.22%`. On Friday, the S&P 500 technology sector rose more than `3.27%`, and Intel rose `13.9%`, so sector concentration mattered more for execution than the headline index move suggests.
2. The macro timestamps are clear, but public data are insufficient to directly measure effective spread, realized spread, queue time, or cancel/replace rate. ISM Services PMI was `53.6` at `2026-05-05 10:00 ET`; BLS reported payrolls of `+115,000` and unemployment of `4.3%` at `2026-05-08 8:30 ET`. These should be hard labels for TAQ/LOB replay, not a place to substitute daily returns for microstructure cost.
3. The risk-off and pullback sessions show that small-cap and lower-liquidity legs were more fragile: Russell 2000 fell `0.60%` on `2026-05-04` and `1.63%` on `2026-05-07`, materially worse than the S&P 500's `-0.38%` on the latter day. Next week, IWM, small-cap baskets, and high-beta semiconductor baskets should carry less passive queue exposure near the open and close.
4. Options activity was high, but public sources do not provide `2026-05-08` SPX/SPY/QQQ/IWM 0DTE volume, dealer gamma, or minute-level delta-hedging flow. What is verifiable is that SIFMA reported April 2026 listed options ADV of `66.5M` contracts and Cboe reported Q1 2026 market-wide options ADV of `68.6M` contracts. Derivatives sensitivity belongs in risk controls, but the Friday trend amplification claim is not proven.
5. The routing baselines are off-exchange share of `48.9%`, U.S. equity ADV of `17.8B` shares, ETF ADV of `4.2B` shares, and ETF share of equity trading of `23.3%`. Large-order execution should not simply raise participation because indexes were strong; a better setup is to slow around macro windows, raise participation only after lit depth recovers, and evaluate dark hit rate separately from closing-auction participation.

## Q1: Was This a High-Quality Breadth Expansion or a Technology-Led Move?

### Method

I rebuilt the close-to-close path from AP daily major-index closes and normalized each series to the prior Friday, `2026-05-01`, at `100`. For sector context, I used TheStreet/Kiplinger reporting on the `2026-05-08` technology sector move, Intel, and WTI. Equal-weight index data, advance/decline, new highs/new lows, and up/down volume were not fully available from public sources.

### Findings

| Metric | Value | Interpretation |
|---|---:|---|
| S&P 500 weekly return | `+2.33%` | From `7,230.12` to `7,398.93` |
| Nasdaq weekly return | `+4.51%` | From `25,114.45` to `26,247.08` |
| Nasdaq versus S&P 500 | `+2.18 pp` | Technology/growth clearly led |
| Dow weekly return | `+0.22%` | Far behind the S&P 500 |
| Russell 2000 weekly return | `+1.72%` | Positive but below S&P 500 and Nasdaq |
| 2026-05-08 S&P 500 technology sector | `>+3.27%` | Main driver of Friday's record close |
| 2026-05-08 Intel | `+13.9%` | Single-name semiconductor momentum was material |

The answer is concentrated leadership rather than confirmed broad breadth. Russell 2000 finished positive, but Nasdaq outperformed the S&P 500 by `2.18 pp`, while Dow was nearly flat. Friday's technology sector gain of more than `3.27%`, plus Intel's `+13.9%`, increased crowding and hedge-leg slippage risk for baskets. Without full advance/decline and equal-weight data, this week should not be classified as a breadth-confirmed rally.

### Evidence

AP reported daily closes and weekly changes for the major indexes from `2026-05-04` through `2026-05-08`; TheStreet reported Nasdaq `+1.71%`, S&P 500 `+0.84%`, and technology sector performance above `+3.27%` on `2026-05-08`; Kiplinger reported Intel `+13.9%` and WTI down almost `7%` for the week.[S1][S2][S3][S4][S5][S6][S7]

### Caveats

S&P 500 equal weight, constituent advance/decline, new highs/new lows, up/down volume, and full five-day sector returns were missing. The breadth conclusion is inferred from index dispersion and public sector snapshots.

## Q2: Did Macro Event Windows Significantly Raise Short-Horizon Impact Cost?

### Method

I aligned ISM and BLS timestamps to `America/New_York`. Public data cover the macro actuals and same-day returns; effective spread, realized spread, depth depletion, cancel/replace rate, and trade-sign imbalance require TAQ/SIP/LOB data and could not be filled from public sources.

### Findings

| Event | Timestamp | Actual | Public market proxy | Can impact cost be directly measured? |
|---|---|---:|---|---|
| ISM Services PMI | `2026-05-05 10:00 ET` | `53.6`, prior `54.0` | S&P 500 `+0.81%`, Nasdaq `+1.03%`, Russell 2000 `+1.75%` | No, TAQ/LOB missing |
| BLS Employment Situation | `2026-05-08 8:30 ET` | payroll `+115,000`, unemployment `4.3%` | S&P 500 `+0.84%`, Nasdaq `+1.71%` | No, TAQ/LOB missing |

Public data do not prove that short-horizon impact cost rose significantly. What is verifiable is that both macro windows landed on risk-on sessions, especially after BLS when Nasdaq and technology led. For execution, the `8:30 ET` BLS release mainly affects fair value, the opening auction, opening spreads, and the first 15 minutes of queue risk; the `10:00 ET` ISM release occurs during continuous trading and should be tested over `09:55-10:10 ET` for spread widening and order cancellations. Event pauses remain justified, but statistical significance needs internal tick replay.

### Evidence

ISM reported April Services PMI of `53.6`, Business Activity of `55.9`, and Prices of `70.7`; BLS reported April payrolls of `+115,000`, unemployment of `4.3%`, and release time of `2026-05-08 8:30 ET`.[S8][S9]

### Caveats

No trades, NBBO, depth, cancel/replace, or trade-sign data were available. Daily returns describe direction, not transaction cost.

## Q3: Which HF Signals Failed or Reversed First During the Risk Shock and Pullback?

### Method

I used the `2026-05-04` risk-shock session, the `2026-05-06` trend-repair session, and the `2026-05-07` pullback session to identify fragile signal regimes from close-to-close index behavior. Because LOB data were missing, signal performance is mapped from observable price paths to expected failure modes in order-flow imbalance, queue imbalance, short-term momentum, and spread reversion.

### Findings

| Date | Market state | Key values | Most fragile signal | Execution implication |
|---|---|---:|---|---|
| `2026-05-04` | Geopolitical risk shock | Dow `-1.13%`, S&P 500 `-0.41%`, Russell 2000 `-0.60%` | Passive queue imbalance, short-term mean reversion | Avoid immediately refilling passive size after the open; first cut participation cap |
| `2026-05-06` | Trend repair | S&P 500 `+1.46%`, Nasdaq `+2.02%`, Russell 2000 `+1.47%` | Spread reversion that fades trend | VWAP/TWAP needs permission to chase, or opportunity cost rises |
| `2026-05-07` | Pullback/small-cap stress | Russell 2000 `-1.63%`, S&P 500 `-0.38%` | Small-cap order-flow imbalance, short-term momentum | Lower lit passive use in IWM and small-cap baskets; tighten limit protection |

The first failure was less about simple price momentum and more about the passive-queue assumption under risk shocks. On `2026-05-04`, geopolitical news raised adverse-selection risk after the open, making short-term mean reversion vulnerable to persistent post-gap selling. On `2026-05-07`, Russell 2000 underperformed the S&P 500 by `1.25 pp`, which points to earlier reversal in small-cap order-flow imbalance and depth signals. On `2026-05-06`, the regime flipped: trend following dominated spread reversion.

### Evidence

AP daily closes identify the `2026-05-04` selloff, the `2026-05-06` risk repair, and the `2026-05-07` small-cap pullback; AP also linked the early-week shock to Middle East/Iran risk.[S1][S3][S4]

### Caveats

No 1-second/5-second OFI, queue imbalance, book depth, or trade-sign data were available. The signal ranking is an inference from price paths and microstructure experience, not a tick-replay result.

## Q4: Did Options Flow, 0DTE Gamma, and ETF Hedging Amplify Friday's Post-Jobs Trend?

### Method

I checked public Cboe, SIFMA, OCC/industry reporting and compared it with the `2026-05-08` index and technology moves. The target data were SPX/SPY/QQQ/IWM 0DTE volume, put/call, dealer gamma proxy, and ETF 5-minute returns; public sources did not provide same-day minute-level 0DTE/gamma data.

### Findings

| Metric | Value | Use in conclusion |
|---|---:|---|
| SIFMA April 2026 listed options ADV | `66.5M` contracts | Overall options activity was high |
| SIFMA April 2026 equity options ADV | `60.3M` contracts | ETF/single-name options matter for cash execution |
| SIFMA April 2026 index options ADV | `6.2M` contracts | SPX-type hedging chain is important |
| Cboe Q1 2026 market-wide options ADV | `68.6M` contracts | Consistent with high April activity |
| Cboe Q1 2026 SPX options ADV | `4.9M` contracts | SPX is a core options-impact channel |
| `2026-05-08` Nasdaq daily return | `+1.71%` | Cash trend was strong |
| `2026-05-08` technology sector | `>+3.27%` | Theme trend was strong |

The evidence does not prove that 0DTE gamma amplified Friday's late-day trend, because same-day expiry structure, dealer gamma, and 5-minute ETF hedge flow are missing. It does show that the options complex was large enough for SPX and ETF hedging to affect short-horizon cash liquidity. For execution, macro-day participation in SPY/QQQ/IWM should be tied to internal options sensitivity: if the internal gamma proxy is negative and cash breaks the opening range, the opportunity-cost threshold should widen; if gamma is positive, late-day mean reversion risk is higher. This is a risk-control recommendation, not a proven causal claim.

### Evidence

SIFMA's April 2026 market-structure PDF reported options ADV of `66.5M`, equity options of `60.3M`, and index options of `6.2M`; Cboe reported Q1 2026 options ADV of `68.6M` and SPX options ADV of `4.9M`.[S10][S11]

### Caveats

No `2026-05-08` 0DTE share, strike-level open interest, dealer gamma, put/call, or minute-level ETF hedge flow was available.

## Q5: Did Off-Exchange Share, Exchange Spreads, and Closing Auctions Change Optimal Routing?

### Method

I used SIFMA April 2026 structure data and Cboe April 2026 volume data as the latest public routing baselines. The target ticker x venue x time-bucket data for fill rate, effective spread, realized spread, median queue time, dark hit rate, and auction share were not publicly available.

### Findings

| Routing baseline | Value | Algorithm implication |
|---|---:|---|
| U.S. equity ADV | `17.8B` shares | Aggregate volume was large, but down `13.0%` from March 2026 |
| Off-exchange share | `48.9%` | Dark/wholesale hit rate must be monitored separately |
| Listed options ADV | `66.5M` contracts | Derivative hedging can compress or amplify cash depth |
| ETF trading ADV | `4.2B` shares | ETF legs are a major liquidity source for baskets |
| ETF share of equity trading | `23.3%` | ETF hedges and constituent impact need joint evaluation |
| Cboe U.S. on-exchange equities ADV | `1,677M` shares | Cboe reported a `20.8%` year-over-year decline for April 2026 |

The public baselines support more granular routing, not unconditional higher lit participation. With off-exchange share near half of total volume, dark/wholesale opportunity cost and information leakage need to be evaluated alongside lit queue quality. ETF trading at `23.3%` of equity volume makes SPY/QQQ/IWM hedge legs a likely source of macro-day impact cost. Next week, reduce lit participation around macro windows; if dark hit rate is below its 20-day median, shift to stricter limit offsets; estimate closing-auction participation separately from continuous VWAP.

### Evidence

SIFMA's April 2026 PDF gives equity ADV, off-exchange share, options ADV, and ETF ADV; Cboe's April 2026 volume report gives U.S. on-exchange equities ADV of `1,677M` shares and its year-over-year change.[S10][S12]

### Caveats

No exchange-level spread, auction imbalance, MOC/LOC, odd-lot share, maker-taker fee tier, or internal fill data were available.

## Q6: How Did Oil and Middle East Risk Transmit into Sector Liquidity?

### Method

I aligned AP/Kiplinger reporting on Brent/WTI and Middle East/Iran risk with daily index behavior and used public sector snapshots as liquidity proxies. The target XLE, XOP, JETS, IYT, SOXX, SMH, and IWM intraday spreads, volume, realized volatility, and ETF premium/discount data were not fully available.

### Findings

| Date | Oil/risk clue | Cash-market reaction | Microstructure implication |
|---|---|---|---|
| `2026-05-04` | Middle East/Iran risk escalated and oil jumped | S&P 500 `-0.41%`, Dow `-1.13%` | Opening adverse selection rose; airlines/transports and small caps should cut participation |
| `2026-05-05` | Brent fell `4%` | S&P 500 `+0.81%`, Russell 2000 `+1.75%` | In risk repair, chase cost can exceed passive waiting cost |
| `2026-05-06` | Brent fell below `$102` | Nasdaq `+2.02%`, S&P 500 `+1.46%` | Trend session; technology/semiconductor baskets need opportunity-cost controls |
| `2026-05-07` | Brent near `$100`, but stocks faded after intraday swings | Russell 2000 `-1.63%` | Oil direction alone is insufficient; volatility and news risk pressured small-cap depth |
| `2026-05-08` | WTI `$94.92`, `+0.1%` on the day, almost `-7%` on the week | Nasdaq `+1.71%`, technology sector `>+3.27%` | Lower oil improved risk appetite, but energy legs could lag |

The transmission looked more like an energy shock changing risk budgets than a simple energy-up/technology-down relationship. Early-week oil strength coincided with a risk-asset pullback; midweek Brent below `$102` coincided with trend repair in Nasdaq and S&P 500. By Friday, WTI was down almost `7%` for the week but still tied to Middle East risk, while technology and semiconductors became the primary beneficiaries. Execution should bucket energy, airlines, transports, small caps, and semiconductors separately: energy is headline-jump sensitive, airlines/transports are oil-direction sensitive, small caps are risk-budget sensitive, and semiconductors are crowding sensitive.

### Evidence

AP reported Middle East/Iran risk and oil's jump on `2026-05-04`, Brent down `4%` on `2026-05-05`, Brent below `$102` on `2026-05-06`, and Brent around `$100` on `2026-05-07`; Kiplinger reported WTI at `94.92` and down almost `7%` for the week.[S1][S2][S3][S4][S7]

### Caveats

ETF sponsor daily holdings, ETF premium/discount, sector ETF intraday spreads, and tick volume were missing. The sector-transmission conclusion is a framework from cross-asset prices and news timestamps.

## Visualization-Ready Tables

### Chart 1: Major Index Weekly Path (Substituted with Daily Close Normalized Path)

| Date | S&P 500 Close | S&P 500 Base=100 | Nasdaq Close | Nasdaq Base=100 | Dow Close | Dow Base=100 | Russell 2000 Close | Russell 2000 Base=100 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `2026-05-01` | `7,230.12` | `100.00` | `25,114.45` | `100.00` | `49,499.27` | `100.00` | `2,812.82` | `100.00` |
| `2026-05-04` | `7,200.75` | `99.59` | `25,067.80` | `99.81` | `48,941.90` | `98.87` | `2,796.00` | `99.40` |
| `2026-05-05` | `7,259.22` | `100.40` | `25,326.13` | `100.84` | `49,298.25` | `99.59` | `2,845.00` | `101.14` |
| `2026-05-06` | `7,365.12` | `101.87` | `25,838.94` | `102.88` | `49,910.59` | `100.83` | `2,886.77` | `102.63` |
| `2026-05-07` | `7,337.11` | `101.48` | `25,806.20` | `102.75` | `49,596.97` | `100.20` | `2,839.63` | `100.95` |
| `2026-05-08` | `7,398.93` | `102.33` | `26,247.08` | `104.51` | `49,609.16` | `100.22` | `2,861.21` | `101.72` |

### Chart 2: Event-Window Liquidity Shock (Public Data Cannot Fill It; Substituted with Event Proxy Table)

| Event | Timestamp | Actual | S&P 500 Same Day | Nasdaq Same Day | Russell 2000 Same Day | TAQ/LOB Status |
|---|---|---:|---:|---:|---:|---|
| ISM Services PMI | `2026-05-05 10:00 ET` | `53.6` | `+0.81%` | `+1.03%` | `+1.75%` | Not available |
| BLS Employment Situation | `2026-05-08 8:30 ET` | payroll `+115,000`; unemployment `4.3%` | `+0.84%` | `+1.71%` | `+0.76%` | Not available |

### Chart 3: Sector and Theme Heatmap (Full Five-Day GICS Table Not Available; Substituted with Driver Bar Table)

| Driver | Date/window | Value | Source |
|---|---|---:|---|
| Nasdaq weekly return | `2026-05-04` to `2026-05-08` | `+4.51%` | AP |
| S&P 500 weekly return | `2026-05-04` to `2026-05-08` | `+2.33%` | AP |
| Russell 2000 weekly return | `2026-05-04` to `2026-05-08` | `+1.72%` | AP |
| Dow weekly return | `2026-05-04` to `2026-05-08` | `+0.22%` | AP |
| S&P 500 technology sector | `2026-05-08` | `>+3.27%` | TheStreet |
| Intel | `2026-05-08` | `+13.9%` | Kiplinger |
| WTI | `2026-05-08` day/week | `$94.92`; week almost `-7%` | Kiplinger |

### Chart 4: Options and Cash Linkage Panel (0DTE/Gamma Not Available; Substituted with Derivatives Context Table)

| Metric | Window | Value | Source |
|---|---|---:|---|
| Listed options ADV | `2026-04` | `66.5M` contracts | SIFMA |
| Equity options ADV | `2026-04` | `60.3M` contracts | SIFMA |
| Index options ADV | `2026-04` | `6.2M` contracts | SIFMA |
| Market-wide options ADV | Q1 2026 | `68.6M` contracts | Cboe |
| SPX options ADV | Q1 2026 | `4.9M` contracts | Cboe |
| Nasdaq Friday return | `2026-05-08` | `+1.71%` | AP/TheStreet |

### Chart 5: Venue Quality Table (Ticker x Venue x Time Bucket Not Available; Substituted with Public Routing Baseline)

| Metric | Window | Value | Source |
|---|---|---:|---|
| U.S. equity ADV | `2026-04` | `17.8B` shares | SIFMA |
| Off-exchange share | `2026-04` | `48.9%` | SIFMA |
| ETF trading ADV | `2026-04` | `4.2B` shares | SIFMA |
| ETF share of equity trading | `2026-04` | `23.3%` | SIFMA |
| Cboe U.S. on-exchange equities ADV | `2026-04` | `1,677M` shares | Cboe/StockTitan |

## Execution Recommendations

| Scenario | Suggested parameter change |
|---|---|
| Around macro events | ISM: reduce participation over `09:55-10:03 ET`; BLS: update fair value before the open and reduce passive posting over `09:30-09:45 ET` |
| Technology/semiconductor baskets | When Nasdaq leads S&P 500 by more than `2 pp`, increase opportunity-cost weight and avoid over-waiting for passive fills |
| IWM/small-cap baskets | On pullback days, Russell 2000 lagged S&P 500 by `1.25 pp`; reduce lit passive cap and tighten limit protection |
| ETF hedge legs | Set SPY/QQQ/IWM participation caps separately from constituents; check internal gamma proxy on macro days |
| Dark/lit routing | With off-exchange share at `48.9%`, reduce information leakage and use stricter limit offsets if dark hit rate is below its 20-day median |
| Closing auction | Estimate MOC/LOC separately; do not treat auction fills as a natural extension of continuous VWAP |

## Follow-Up Verification

- Pull TAQ/SIP/LOB data from `2026-05-04 09:30 ET` through `2026-05-08 16:00 ET`.
- Compute quoted/effective/realized spread, depth, OFI, and cancel/replace rate for `2026-05-05 09:45-10:30 ET` and `2026-05-08 08:25-10:00 ET`.
- Fill S&P 500 equal weight, advance/decline, up/down volume, and daily returns for all 11 GICS sectors.
- Obtain `2026-05-08` SPX/SPY/QQQ/IWM 0DTE volume, put/call, gamma exposure, and dealer delta hedge proxy.
- Backtest dark hit rate, median queue time, auction fills, and implementation shortfall from internal order data.

## Sources

[S1] AP News, “How major US stock indexes fared Monday 5/4/2026,” https://apnews.com/article/3beae4af5a5fa628f27e78ee109fdcf0  
[S2] AP News, “How major US stock indexes fared Tuesday 5/5/2026,” https://apnews.com/article/91988a57e184ec1538ecbe94fc1af022  
[S3] AP News, “How major US stock indexes fared Wednesday 5/6/2026,” https://apnews.com/article/8d2d47274565b8acda4553d945cf9ebe  
[S4] AP News, “How major US stock indexes fared Thursday 5/7/2026,” https://apnews.com/article/cf8565e4542cabda31bcc8e7945b3482  
[S5] AP News, “How major US stock indexes fared Friday 5/8/2026,” https://apnews.com/article/b7ff696f0770489a60427121a6931ada  
[S6] TheStreet, “Stock Market Today (May 8, 2026),” https://www.thestreet.com/latest-news/stock-market-today-may-8-2026-updates  
[S7] Kiplinger, “S&P 500, Nasdaq Close Week at New Highs: Stock Market Today,” https://www.kiplinger.com/investing/stocks/s-and-p-500-nasdaq-close-week-at-new-highs-stock-market-today  
[S8] Institute for Supply Management, “April 2026 ISM Services PMI Report,” https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/april/  
[S9] U.S. Bureau of Labor Statistics, “Employment Situation Summary,” https://www.bls.gov/news.release/empsit.nr0.htm  
[S10] SIFMA, “SIFMA Insights Spotlight - April 2026 Market Metrics,” https://www.sifma.org/wp-content/uploads/2026/04/SIFMA-Insights-Equities-and-Options-Monthly-Metrics_April_2026.pdf  
[S11] Cboe, “The State of the Options Industry: Q1 2026,” https://www.cboe.com/insights/posts/the-state-of-the-options-industry-q-1-2026  
[S12] StockTitan/Cboe, “Cboe Global Markets Reports Trading Volume for April 2026,” https://www.stocktitan.net/news/CBOE/cboe-global-markets-reports-trading-volume-for-april-yogghclqudo8.html
