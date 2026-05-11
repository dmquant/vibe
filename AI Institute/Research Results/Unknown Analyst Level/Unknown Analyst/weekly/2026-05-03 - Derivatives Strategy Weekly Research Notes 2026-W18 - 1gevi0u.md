---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Derivatives Strategy Weekly Research Notes (2026-W18)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Derivatives Strategy Weekly Research Notes (2026-W18)

**Coverage window: 2026-04-27 to 2026-05-01. Bottom line: this was not a macro-volatility break; it was an event-risk unwind. The FOMC held the target range at 3.50%-3.75%, VIX closed at 18.81 on Apr 29 and fell to 16.89 on Apr 30; VIX9D fell from 17.61 to 14.37 over the same window. Big Tech dispersion was extreme: GOOGL gained +9.96% after earnings, while META fell -8.55% and MSFT fell -3.93%; however, index-level SPY May 22 ATM IV was only 14.20%, below its 30-day realized volatility of 16.73%, so the broad index vol premium was thin.**

## Priority Conclusions

| Priority | Conclusion | Key numbers | Strategy implication |
|---|---:|---:|---|
| 1 | The VIX futures curve stayed in contango, not panic backwardation | VX/K6 was 20.2515 on Apr 29 and 19.4774 on Apr 30; VX/M6 was 21.1753 on Apr 29 and 20.6453 on Apr 30 | Front-end vol mean-reverted after FOMC, but short vol is not a blanket trade |
| 2 | Earnings risk was redistributed, not eliminated | GOOGL +9.96% post-earnings; META -8.55%; MSFT -3.93%; AMZN +0.77% | Single-name relative value is cleaner than broad index straddle selling |
| 3 | AAPL and MSFT have wider single-name gamma cushions; SPY does not | AAPL gamma flip 231.81 vs spot 280.14; MSFT flip 336.90 vs spot 414.44; SPY proxy flip 719.61 vs spot 720.65 | Short vol has more margin of safety in select single names than in the index |
| 4 | April NFP was not released this week; the plan date needs correction | BLS schedules the April 2026 Employment Situation for 2026-05-08 08:30 ET | Do not attribute May 1 rate moves to NFP; treat them as positioning and event-risk repricing |
| 5 | May Day closures reduced Asian/European hedging channels, leaving ADRs to absorb more risk transfer | KWEB weekly return +1.48%, FXI +0.99%; KWEB volume 17.86m on Apr 30 and 15.19m on May 1 | China ADR vol-arb needs wider slippage assumptions and more overnight risk budget |

## Data And Method Summary

| Module | Method | Sources and window |
|---|---|---|
| Index and single-name returns | Used Apr 27, Apr 29, Apr 30, and May 1 closes to compute weekly and post-earnings 1-day returns | Nasdaq historical API; Stooq SPX page as a cross-check for SPX |
| Volatility indexes | Used Cboe CSV daily closes for VIX, VIX9D, VIX3M, VVIX, and SKEW | Cboe index CSV, 2026-04-20 to 2026-05-01 |
| VIX futures term structure | Used Cboe CFE settlement CSV for VX/K6, VX/M6, VX/N6 and other tenors | Cboe futures settlement, 2026-04-27 to 2026-05-01 |
| IV, tail cost, and gamma | Used Nasdaq option chains; selected 2026-05-22 expiry as the near-1-month proxy; backed out IV from bid/ask mid via Black-Scholes; recomputed GEX from OI, multiplier 100, and spot scenarios | Nasdaq option-chain, valuation date 2026-05-01, rate assumption 3.65% |
| Rates curve | Calculated Apr 29 to Apr 30 and Apr 30 to May 1 Treasury yield changes | U.S. Treasury daily treasury yield curve |
| FedWatch and NFP | Checked the official BLS release date; used public FedWatch/Investing.com probability snapshots | BLS release schedule; Investing.com Fed Rate Monitor; CME FedWatch as the methodology source |

## Question 1: How Did The FOMC Statement Alter The VIX Futures Curve?

### Method

The core comparison is the Apr 29 FOMC statement day versus the Apr 30 post-event trading day, using Cboe CFE daily settlement prices for VX futures. Cboe VIX, VIX9D, and VIX3M closes are used to confirm whether spot volatility compressed in parallel. The official FOMC statement kept the target range at 3.50%-3.75%, with an 8-4 vote and several dissents tied to the easing-bias language rather than the level of rates.

### Findings

| Date | VIX | VIX9D | VIX3M | VX/K6 | VX/M6 | VX/N6 | VX/M6 - VX/K6 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-04-27 | 18.02 | 16.69 | 20.77 | 20.0502 | 21.0997 | 21.9461 | 1.0495 |
| 2026-04-28 | 17.83 | 16.69 | 20.49 | 19.7201 | 20.7805 | 21.7250 | 1.0604 |
| 2026-04-29 | 18.81 | 17.61 | 21.19 | 20.2515 | 21.1753 | 21.9442 | 0.9238 |
| 2026-04-30 | 16.89 | 14.37 | 20.08 | 19.4774 | 20.6453 | 21.5556 | 1.1679 |
| 2026-05-01 | 16.99 | 14.15 | 20.37 | 19.6928 | 20.7897 | 21.6363 | 1.0969 |

On FOMC day, VIX rose from 17.83 to 18.81 and front VX/K6 rose from 19.7201 to 20.2515, so the statement and Powell press conference still added short-term event premium. On Apr 30, VX/K6 fell 0.7741 points, VIX fell 1.92 points, and VIX9D fell 3.24 points, making the mean reversion clear. The term structure never inverted; VX/M6 - VX/K6 widened to 1.1679 on Apr 30, indicating that front-end overpricing was released while 3-month macro risk remained priced.

### Evidence

- Federal Reserve FOMC statement, 2026-04-29: `https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm`
- Cboe VX settlement CSV: `https://www-api.cboe.com/us/futures/market_statistics/settlement/csv?dt=2026-04-29`, `dt=2026-04-30`, `dt=2026-05-01`
- Cboe index CSV: `https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv`, `VIX9D_History.csv`, `VIX3M_History.csv`

### Caveats

Some weekly CFE VX contracts carry discretionary settlement markers, so the front end can include exchange settlement judgment. VIX futures are settlement prices, not intraday paths; they do not capture minute-by-minute gamma shocks during Powell's press conference.

## Question 2: Did The Four Mega-Cap Tech Earnings Releases Create Volatility Clustering?

### Method

MSFT, AMZN, META, and GOOGL returns from Apr 29 close to Apr 30 close measure the directional post-earnings shock. The May 22 option chain is used to infer post-event ATM IV, ATM straddle cost, and 90% put cost from option mid prices. RV30 is the annualized standard deviation of the most recent 30 daily log returns.

### Findings

| Ticker | Apr 29 close | Apr 30 close | Post-earnings 1D return | RV30 | May 22 ATM IV | ATM straddle / spot | 90% put IV | 90% put cost / spot |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| MSFT | 424.46 | 407.78 | -3.93% | 32.65% | 27.34% | 5.23% | 31.55% | 0.294% |
| AMZN | 263.04 | 265.06 | +0.77% | 31.46% | 27.93% | 5.37% | 33.64% | 0.276% |
| META | 669.12 | 611.91 | -8.55% | 52.40% | 30.69% | 5.87% | 33.92% | 0.372% |
| GOOGL | 349.94 | 384.80 | +9.96% | 41.67% | 30.57% | 5.85% | 35.23% | 0.331% |

There was a genuine volatility cluster, but it showed up as cross-sectional jump risk rather than broad index panic. META and GOOGL both moved roughly 8.5% or more in absolute terms, far more than MSFT and AMZN. Post-event 90% put costs were still highest in META and GOOGL, so the market did not fully abandon single-name tail pricing; however, ATM IV was already below each name's RV30, which argues against blindly buying at-the-money volatility after the event.

### Evidence

- Microsoft FY26 Q3 release: `https://www.microsoft.com/en-us/investor/earnings/FY-2026-Q3/press-release-webcast`
- Amazon Q1 2026 release: `https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-First-Quarter-Results/`
- Meta Q1 2026 release PDF: `https://fortune.com/company-assets/1548/quartr/earnings-release-8-k-197b8-2026-04-29-20-42-07.pdf`
- Alphabet Q1 2026 coverage: `https://www.androidcentral.com/phones/google-pixel/alphabet-earnings-q2-2026`
- Nasdaq historical and option-chain APIs for `MSFT`, `AMZN`, `META`, and `GOOGL`

### Caveats

Free public sources do not provide full historical IV surface snapshots before Apr 29, after hours, or before the Apr 30 open; the IV here is a May 1 post-event proxy. Tail cost uses a single May 22 expiry and an approximate 90% strike, not the full tenor surface.

## Question 3: Where Are The Post-Earnings Gamma Flip Levels For AAPL And MSFT?

### Method

For each name, the Nasdaq option chain was filtered to contracts within 60 days. IV was backed out from option mid prices, GEX was computed from OI across 80%-120% spot scenarios, call gamma was treated as positive and put gamma as negative. The gamma flip is the spot level where net GEX crosses zero. SPY is used as the tradable SPX proxy because complete SPX/SPXW historical OI is not available for free.

### Findings

| Ticker | Spot | May 22 ATM IV | Net GEX ($bn / 1% move) | Gamma flip | Spot cushion vs flip | Short-vol margin of safety |
|---|---:|---:|---:|---:|---:|---|
| AAPL | 280.14 | 23.28% | +0.651 | 231.81 | +20.85% | Higher |
| MSFT | 414.44 | 27.34% | +0.306 | 336.90 | +23.01% | Higher |
| SPY proxy | 720.65 | 14.20% | +1.019 | 719.61 | +0.14% | Very low |

AAPL and MSFT both trade well above their gamma flip levels and have positive net GEX, so dealer hedging should absorb modest realized moves. SPY is different: its flip is almost exactly at spot, so a small drawdown could push the index proxy into negative gamma. The conclusion is to consider defined-risk short-vol structures in AAPL and MSFT selectively, but not to extrapolate that comfort to SPX/SPY index volatility.

### Evidence

- Apple Q2 2026 release: `https://www.nasdaq.com/press-release/apple-reports-second-quarter-results-2026-04-30`
- Microsoft FY26 Q3 release: `https://www.microsoft.com/en-us/investor/earnings/FY-2026-Q3/press-release-webcast`
- Nasdaq option-chain APIs: `https://api.nasdaq.com/api/quote/AAPL/option-chain?assetclass=stocks&limit=9999`, `MSFT`, `SPY`

### Caveats

The gamma estimate does not include dealer inventory direction; it uses the common approximation that call gamma is positive and put gamma is negative. The Nasdaq option-chain timestamp showed `LAST TRADE: AS OF APR 30, 2026`, creating a small mismatch versus the May 1 closing spot.

## Question 4: How Did NFP And Fed Funds Futures Shift June FOMC Pricing?

### Method

The first step was to verify the official BLS release date. Because the April 2026 Employment Situation is scheduled for 2026-05-08, there was no NFP print this week. Rate pricing therefore uses the Investing.com Fed Rate Monitor probability snapshot for the June 17 meeting, plus the Treasury curve, TLT price action, and TLT near-month options as rate-sensitive proxies.

### Findings

| Metric | Value | Comparison | Interpretation |
|---|---:|---:|---|
| April 2026 NFP release date | 2026-05-08 08:30 ET | The plan's 2026-05-01 date is incorrect | This week cannot be analyzed as “post-NFP” |
| Probability of cut to 3.25%-3.50% by Jun 17 | 13.5% | Previous day 11.1%; previous week 27.2% | Cut odds fell sharply on the week, with a small daily rebound |
| Probability of hold at 3.50%-3.75% by Jun 17 | 86.5% | Inferred as 100% - 13.5% | Pause remains the dominant market baseline |
| TLT weekly return | -0.78% | 86.28 to 85.61 | Long-duration Treasuries did not receive a strong safe-haven bid |
| TLT May 22 ATM IV | 10.36% | RV30 10.12% | Rate-option premium was thin |
| TLT sub-45D put/call volume | 0.407 | Put volume 93,932; call volume 230,768 | Flow leaned toward bullish TLT / bearish yields |

From Apr 29 to Apr 30, the 2-year Treasury yield fell from 3.92% to 3.88% and the 10-year yield fell from 4.42% to 4.40%, a mild bull-steepening rather than a jobs-data shock. FedWatch-implied June cut odds fell from 27.2% one week earlier to 13.5%, indicating that the post-FOMC market pushed back against an immediate easing restart. Since NFP was not released, any May 1 0DTE activity should be attributed to pre-weekend positioning and mega-cap tech rebalancing, not payroll data.

### Evidence

- BLS Employment Situation schedule: `https://www.bls.gov/schedule/news_release/empsit.htm`
- U.S. Treasury yield curve: `https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve&field_tdr_date_value_month=202604`
- Investing.com Fed Rate Monitor: `https://www.investing.com/central-banks/fed-rate-monitor`
- Nasdaq `TLT` historical and option-chain APIs

### Caveats

FedWatch historical time series is not available as a free official CSV here, so this report uses the public page snapshot and indexed previous day/previous week fields. TLT options provide only the current chain, not daily OI changes, so “positioning change” is proxied by current OI and volume structure.

## Question 5: How Did International Holidays Suppress Global Vol-Arb Liquidity?

### Method

The analysis checks HKEX, Euronext, and China market holiday schedules for 2026-05-01, then uses KWEB and FXI U.S. trading volume, returns, and RV30 to see whether ADR/ETF products absorbed more price discovery. CNH uses the publicly indexed USD/CNH May 1 close and 30-day range as a secondary reference because free minute-level CNH volatility data is unavailable.

### Findings

| Asset / market | Apr 27 close | May 1 close | Weekly return | RV30 | May 1 volume | Observation |
|---|---:|---:|---:|---:|---:|---|
| KWEB | 28.36 | 28.78 | +1.48% | 28.11% | 15.19m | U.S. trading carried China internet price discovery |
| FXI | 36.45 | 36.81 | +0.99% | 19.99% | 17.97m | Broad China ETF volatility was lower than KWEB |
| USD/CNH | n/a | approx. 6.83 | 30-day range 6.81-6.89 | n/a | n/a | Offshore yuan movement was contained, but liquidity was thinner |
| HKEX | Closed | Closed | 2026-05-01 Labour Day | n/a | n/a | Hong Kong cash hedges were unavailable |
| Euronext | Closed | Closed | 2026-05-01 Labour Day | n/a | n/a | European cash and derivatives liquidity was reduced |

The holiday effect was less about outright price gaps and more about missing hedge channels. KWEB RV30 was 28.11%, well above FXI's 19.99%, confirming that China internet ADR/ETF exposure remained the higher-beta volatility container. With the U.S. open while Hong Kong, China, and several European markets were closed, cross-market vol-arb legs were less synchronized; quotes should be wider and naked overnight gamma should be smaller.

### Evidence

- HKEX/Hong Kong holidays: `https://www.gov.hk/en/about/abouthk/holiday/2026.htm`
- Euronext trading calendar: `https://www.euronext.com/en/trading-calendars-hours`
- Exchange holiday summary: `https://www.yuantafutures.com.hk/en/Uploads/file/20260427/1777252454349057.pdf`
- Nasdaq `KWEB` and `FXI` historical APIs
- USD/CNH reference: `https://stockinvest.us/stock-price/USDCNH`

### Caveats

Free public sources do not provide CNH option IV, KWEB/FXI historical IV surfaces, or ADR market-maker quote width. ETF realized volatility and volume are therefore used as proxies for vol-arb liquidity.

## Visualization-Ready Data Tables

### Chart 1: FOMC And Earnings Season IV Surface

The original plan called for a 3D historical IV surface. Free public sources cannot fully reconstruct the IV surface before and after Apr 29; the substitute below uses the 2026-05-22 expiry and May 1 post-event option chains as a near-month moneyness slice.

| Ticker | Expiry | DTE | 90% put IV | ATM IV | 110% call IV | ATM straddle / spot |
|---|---|---:|---:|---:|---:|---:|
| AAPL | 2026-05-22 | 21 | 31.30% | 23.28% | 23.87% | 4.45% |
| MSFT | 2026-05-22 | 21 | 31.55% | 27.34% | 28.66% | 5.23% |
| AMZN | 2026-05-22 | 21 | 33.64% | 27.93% | 28.73% | 5.37% |
| META | 2026-05-22 | 21 | 33.92% | 30.69% | 32.58% | 5.87% |
| GOOGL | 2026-05-22 | 21 | 35.23% | 30.57% | 31.42% | 5.85% |
| NVDA | 2026-05-22 | 21 | 49.74% | 46.30% | 45.26% | 8.89% |
| TSLA | 2026-05-22 | 21 | 42.85% | 40.44% | 41.56% | 7.73% |

### Chart 2: Magnificent Seven RV30 vs IV30 Scatter

| Ticker | May 1 spot | RV30 | IV30 proxy | IV - RV | Apr 27 to May 1 return |
|---|---:|---:|---:|---:|---:|
| AAPL | 280.14 | 23.81% | 23.28% | -0.54 pp | +4.68% |
| MSFT | 414.44 | 32.65% | 27.34% | -5.31 pp | -2.44% |
| AMZN | 268.26 | 31.46% | 27.93% | -3.53 pp | +2.73% |
| META | 608.745 | 52.40% | 30.69% | -21.71 pp | -10.30% |
| GOOGL | 385.69 | 41.67% | 30.57% | -11.10 pp | +10.09% |
| NVDA | 198.45 | 38.19% | 46.30% | +8.11 pp | -8.38% |
| TSLA | 390.82 | 44.15% | 40.44% | -3.71 pp | +3.21% |

### Chart 3: Aggregate SPX Gamma Exposure Profile

Full SPX chain data is unavailable for free, so SPY is used as the proxy. GEX is in $bn / 1% move.

| SPY spot scenario | Net GEX |
|---:|---:|
| 576.52 | -2.824 |
| 612.55 | -1.979 |
| 648.59 | -3.067 |
| 684.62 | -10.981 |
| 720.65 | +1.019 |
| 756.68 | -1.335 |
| 792.72 | -0.497 |
| 828.75 | -0.663 |
| 864.78 | +1.547 |

### Chart 4: U.S. Treasury Yield Curve 1-Day Shift

| Tenor | 2026-04-29 | 2026-04-30 | 1D change | 2026-05-01 |
|---|---:|---:|---:|---:|
| 1 Mo | 3.68% | 3.72% | +4 bp | 3.71% |
| 3 Mo | 3.68% | 3.68% | 0 bp | 3.68% |
| 2 Yr | 3.92% | 3.88% | -4 bp | 3.88% |
| 5 Yr | 4.05% | 4.02% | -3 bp | 4.02% |
| 10 Yr | 4.42% | 4.40% | -2 bp | 4.39% |
| 30 Yr | 4.98% | 4.98% | 0 bp | 4.97% |

## Follow-Up Items

| Item | Trigger | Strategy action |
|---|---|---|
| April 2026 NFP | 2026-05-08 08:30 ET | Recompute FedWatch, TLT IV, and SPX 0DTE volume structure |
| CPI | 2026-05-12 | If the 2-year yield breaks back above 3.95%, reduce bullish TLT option exposure |
| Single-name earnings aftershocks | META, GOOGL, and MSFT continue digesting AI capex guidance | Prefer pairs vol: sell the low-realized/high-IV leg and buy the leg where post-event fundamental disagreement remains |
| Holiday liquidity | China market closures still affect May 4-May 5 | Keep ADR/ETF market-making widths above normal and avoid naked overnight short gamma |
