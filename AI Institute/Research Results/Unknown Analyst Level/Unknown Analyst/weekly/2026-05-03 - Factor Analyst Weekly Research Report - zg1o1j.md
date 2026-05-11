---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Factor Analyst Weekly Research Report

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Factor Analyst Weekly Research Report

**Coverage window:** 2026-04-27 to 2026-05-01  
**Analyst:** Factor Analyst ID: FA-2026-05  
**Conclusion first:** The week’s winning factor was not Quality; it was U.S. Value / Dividend. A-share Quality and Dividend both lagged CSI 300 after the reporting deadline. Momentum did not show an index-level crash signal, but A-share Growth turnover reached the 94.0% one-year percentile, making single-name AI dispersion and domestic tech crowding the main risks.

## Priority Conclusions

1. **Quality did not generate significant positive alpha.** A-share `300质量` returned -0.200% for the week and lagged CSI 300 by 0.996 percentage points; U.S. `QUAL` returned -0.118% and lagged `SPY` by 1.058 percentage points. Kweichow Moutai and China Merchants Bank produced two-day post-report alpha of -3.433 and -4.390 percentage points, respectively, so low-single-digit positive earnings growth was not enough to trigger a Quality re-rating.
2. **Value beat Growth clearly in the U.S., but not in A-shares.** `VLUE` gained 3.684%, beating `IVW` by 3.052 percentage points; the 10Y Treasury yield rose from 4.31% to 4.40%, reinforcing the defensive case for low valuation and dividend exposure. In A-shares, `300成长` rose 0.674%, ahead of `300价值` at 0.334%, driven more by Sci-Tech and semiconductor trading than by macro cyclicality.
3. **Global AI / semiconductor crowding did not broadly exceed the 90% warning threshold.** `MTUM` volume percentile was 34.6%, `SMH` and `SOXX` were both 61.5%, and `NVDA` was 34.6%; only `MU` reached 84.6%, still below 90%. A-share `300成长` turnover amount was the exception at the 94.0% one-year percentile.
4. **Dividend stability was market-specific.** U.S. `SCHD` rose 2.115% and outperformed `SPY` by 1.176 percentage points; A-share `300红利` fell 0.051% and lagged CSI 300 by 0.847 percentage points. Pre-holiday risk-off demand was visible in U.S. dividend exposure, but not in A-share dividend exposure.

## Method Summary

- Time window: U.S. and global proxies use close-to-close returns from 2026-04-24 to 2026-05-01. A-shares use 2026-04-24 to 2026-04-30 because the mainland market was closed for Labour Day on 2026-05-01.
- Factor proxies: U.S. side uses `QUAL`, `MTUM`, `VLUE`, `USMV`, `IWM`, `IVW`, `SCHD`, `SMH`, and `SOXX`, benchmarked to `SPY`; A-share side uses `300质量`, `300红利`, `300价值`, `300成长`, and `中证1000`, benchmarked to `沪深300`.
- Crowding metric: current-week average volume or turnover amount as a percentile and Z-score versus the past one year of weekly averages. This is a reproducible liquidity-crowding proxy, not a broker PB-level position-crowding measure.
- Earnings sample: Kweichow Moutai and China Merchants Bank, both named in the plan and both major Quality constituents. Two-day post-report alpha equals stock return minus CSI 300 return over the same post-report window.

## Question 1: Quality Factor Premium

**Method.** I measured Quality via `300质量` versus CSI 300 and `QUAL` versus `SPY`, then checked post-report price validation using two-day alpha for Kweichow Moutai and China Merchants Bank. Earnings data came from Q1 report news releases; prices came from Eastmoney K-lines and Nasdaq historical quotes.

**Findings.**

| Metric | Value |
| --- | --- |
| `300质量` weekly return | -0.200% |
| `300质量` excess vs CSI 300 | -0.996 percentage points |
| `QUAL` weekly return | -0.118% |
| `QUAL` excess vs `SPY` | -1.058 percentage points |
| Kweichow Moutai two-day post-report alpha | -3.433 percentage points |
| China Merchants Bank two-day post-report alpha | -4.390 percentage points |

Quality did not receive a positive re-rating; it lagged benchmarks in both sampled markets. The A-share Quality heavyweight reports showed positive growth, but the growth rates were low and the market did not capitalize “certainty” into a premium. Kweichow Moutai’s attributable net profit grew 1.47% YoY and China Merchants Bank’s grew 1.52% YoY, while both stocks materially lagged CSI 300 over the two post-report trading days. The conclusion is that post-deadline Quality factor efficacy was weak and needs broader earnings upgrades, not merely completion of disclosure.

**Evidence.** Kweichow Moutai reported attributable net profit of RMB 27.243 bn, +1.47% YoY, on the evening of 2026-04-24. China Merchants Bank reported attributable net profit of RMB 37.852 bn, +1.52% YoY, on 2026-04-28. Raw price files are `data_raw/eastmoney_300质量_2_932431.csv`, `data_raw/eastmoney_贵州茅台_1_600519.csv`, `data_raw/eastmoney_招商银行_1_600036.csv`, and `data_raw/nasdaq_QUAL.csv`.

**Caveats.** I did not have Wind / FactSet consensus estimates, so “surprise” is proxied by post-report price reaction. The stock sample contains only the two heavyweight names specified in the plan and is not a full cross-sectional regression.

## Question 2: Value vs Growth Equilibrium

**Method.** For the U.S., I compared `VLUE` against `IVW` and `SPY`; for A-shares, I compared `300价值` against `300成长` and CSI 300. The rate backdrop used FRED `DGS10`, `DGS2`, and calculated core PCE changes. The comparison basis is weekly return and excess return versus benchmark.

**Findings.**

| Metric | Value |
| --- | --- |
| `VLUE` weekly return | 3.684% |
| `IVW` weekly return | 0.632% |
| U.S. Value minus Growth | +3.052 percentage points |
| `VLUE` excess vs `SPY` | +2.744 percentage points |
| `300价值` weekly return | 0.334% |
| `300成长` weekly return | 0.674% |
| A-share Value minus Growth | -0.340 percentage points |
| 10Y Treasury yield change | +9 bp |
| Core PCE MoM / YoY | +0.293% / +3.20% |

The U.S. showed a clean “higher-rate, low-valuation wins” pattern: `VLUE` beat both `IVW` and `SPY`, and `SCHD` also outperformed. Treasury yields stayed higher after the PCE release, pressuring long-duration Growth valuations. A-shares were different: `300成长` beat `300价值` by 0.340 percentage points, and its turnover amount reached the 94.0% one-year percentile, showing that domestic tech trading overwhelmed Value defense. The equilibrium therefore tilted toward Value in the U.S. but remained dominated by local tech risk appetite in A-shares.

**Evidence.** FRED shows `DGS10` rising from 4.31% on 2026-04-24 to 4.40% on 2026-04-30. FRED `PCEPILFE` was 129.279 for 2026-03 versus 128.901 for 2026-02, giving +0.293% MoM and +3.20% YoY. Market returns are in `factor_weekly_returns.csv`.

**Caveats.** `VLUE` and `IVW` are U.S. ETF proxies, not official MSCI World style indices. The A-share Value and Growth indices have different industry exposures, so the comparison does not fully strip out sector effects.

## Question 3: Momentum Reversal Warning

**Method.** I used weekly return, one-year volume percentile, and Z-score for `MTUM`, `SMH`, `SOXX`, `NVDA`, and `MU` to gauge global AI / semiconductor momentum crowding. A-share `300成长` turnover amount was added as the domestic Growth crowding proxy. A percentile above 90% is treated as the warning zone.

**Findings.**

| Metric | Value |
| --- | --- |
| `MTUM` one-year volume percentile | 34.6% |
| `SMH` one-year volume percentile | 61.5% |
| `SOXX` one-year volume percentile | 61.5% |
| `NVDA` one-year volume percentile | 34.6% |
| `MU` one-year volume percentile | 84.6% |
| `300成长` one-year turnover-amount percentile | 94.0% |
| `MTUM` weekly return / excess vs `SPY` | 1.492% / +0.552 percentage points |
| `NVDA` weekly return | -4.715% |
| `MU` weekly return | +9.158% |

Global semiconductors and AI did not cross a uniform 90% crowding threshold, so this was not a broad pre-crash Momentum setup. `MTUM` still outperformed slightly, while `SMH` and `SOXX` were close to the benchmark, which looks more like cooling than collapse. The risk was single-name dispersion: `NVDA` fell 4.715% while `MU` rose 9.158%, indicating the AI chain moved from one-way leadership buying to event- and earnings-driven selection. The clearer crowding signal was in A-share `300成长`, where a post-holiday turnover fade could create higher drawdown beta.

**Evidence.** Nasdaq historical quotes are retained in `data_raw/nasdaq_MTUM.csv`, `data_raw/nasdaq_SMH.csv`, `data_raw/nasdaq_SOXX.csv`, `data_raw/nasdaq_NVDA.csv`, and `data_raw/nasdaq_MU.csv`; A-share Growth index data is in `data_raw/eastmoney_300成长_1_000918.csv`.

**Caveats.** Volume percentile measures trading crowding, not direct active fund, hedge fund, or option Gamma positioning. The 90% threshold is this report’s risk rule, not an official vendor crowding indicator.

## Question 4: Dividend Factor Stability

**Method.** I compared U.S. `SCHD` against `SPY` and A-share `300红利` against CSI 300, then used volume / turnover-amount percentiles to judge whether pre-holiday risk-off money was flowing consistently into dividend exposure.

**Findings.**

| Metric | Value |
| --- | --- |
| `SCHD` weekly return | 2.115% |
| `SCHD` excess vs `SPY` | +1.176 percentage points |
| `SCHD` one-year volume percentile | 67.3% |
| `300红利` weekly return | -0.051% |
| `300红利` excess vs CSI 300 | -0.847 percentage points |
| `300红利` one-year turnover-amount percentile | 62.0% |
| A-share market turnover on 2026-04-30 | RMB 2.74 tn |

The U.S. Dividend factor was stable: `SCHD` outperformed with a neutral-to-high volume percentile, consistent with defensive allocation in a higher-rate environment. A-share Dividend did not replicate this pattern: `300红利` slipped and materially lagged CSI 300, while its turnover percentile was only 62.0%, showing no concentrated risk-off inflow. The final pre-holiday A-share session saw turnover rise to RMB 2.74 tn, but the incremental activity was more concentrated in Sci-Tech, advanced packaging, and Cambricon-style trading themes. Dividend stability therefore held in the U.S. but not in A-shares.

**Evidence.** `SCHD` historical quotes are in `data_raw/nasdaq_SCHD.csv`; `300红利` is in `data_raw/eastmoney_300红利_1_000821.csv`; A-share turnover is from the Sina / Jiemian News report dated 2026-04-30.

**Caveats.** Dividend factor returns use price indices only and do not include dividend reinvestment. The A-share window has one fewer trading day because of the Labour Day closure.

## Macro And Liquidity Backdrop

| Indicator | Latest / window value | Change | Interpretation | Source |
| --- | --- | --- | --- | --- |
| U.S. 10Y Treasury yield DGS10 | 4.40% (2026-04-30) | Up 9 bp from 4.31% on 2026-04-24; touched 4.42% on 2026-04-29 | Discount-rate pressure remained, supporting Value / Dividend over Growth | FRED DGS10 |
| U.S. 2Y Treasury yield DGS2 | 3.88% (2026-04-30) | Up 10 bp from 3.78% on 2026-04-24 | Front-end yields rose as well; PCE did not loosen rate-cut expectations | FRED DGS2 |
| U.S. core PCE price index PCEPILFE | 129.279 (2026-03) | MoM +0.293%; YoY +3.20% | Core inflation stayed above 2%, unfriendly to long-duration Growth valuations | FRED/BEA PCEPILFE |
| U.S. headline PCE | YoY +3.5% (2026-03) | Current release dated 2026-04-30 | Headline inflation was elevated | BEA PCE page |
| China official manufacturing PMI | 50.3 (2026-04) | Down 0.1 point from March, still expansionary | Manufacturing resilience remained, but not a strong cyclical impulse | China government / NBS |
| China official non-manufacturing PMI | 49.4 (2026-04) | Down 0.7 point from March, back in contraction | Softer services / construction weighed on domestic-demand pricing | China government / NBS |
| A-share turnover | RMB 2.74 tn (2026-04-30) | About RMB 150.774 bn higher than the prior trading day | The final pre-holiday session was more tactical than defensive | Sina / Jiemian News |
| Northbound flow field | Net-flow value not populated | Stock Connect page notes exchanges do not provide the data if daily quota balance remains above 30% | The report substitutes turnover and index turnover-amount percentiles as liquidity proxies | J.P. Morgan Stock Connect page |

## Visualization-Ready Data Tables

### Chart 1: Factor Weekly Return Bar

| Market | Index / proxy | Weekly return | Benchmark | Excess vs benchmark | Close window |
| --- | --- | --- | --- | --- | --- |
| U.S. | SPY | 0.940% | SPY | 0.000% | 2026-04-24 to 2026-05-01 |
| U.S. | QUAL | -0.118% | SPY | -1.058% | 2026-04-24 to 2026-05-01 |
| U.S. | MTUM | 1.492% | SPY | 0.552% | 2026-04-24 to 2026-05-01 |
| U.S. | VLUE | 3.684% | SPY | 2.744% | 2026-04-24 to 2026-05-01 |
| U.S. | USMV | 0.531% | SPY | -0.408% | 2026-04-24 to 2026-05-01 |
| U.S. | IWM | 0.951% | SPY | 0.011% | 2026-04-24 to 2026-05-01 |
| U.S. | IVW | 0.632% | SPY | -0.308% | 2026-04-24 to 2026-05-01 |
| U.S. | SMH | 0.667% | SPY | -0.272% | 2026-04-24 to 2026-05-01 |
| U.S. | SOXX | 0.899% | SPY | -0.041% | 2026-04-24 to 2026-05-01 |
| U.S. | SCHD | 2.115% | SPY | 1.176% | 2026-04-24 to 2026-05-01 |
| U.S. | NVDA | -4.715% | SPY | -5.655% | 2026-04-24 to 2026-05-01 |
| U.S. | MU | 9.158% | SPY | 8.218% | 2026-04-24 to 2026-05-01 |
| A-share | 沪深300 | 0.795% | 沪深300 | 0.000% | 2026-04-24 to 2026-04-30 |
| A-share | 300质量 | -0.200% | 沪深300 | -0.996% | 2026-04-24 to 2026-04-30 |
| A-share | 300红利 | -0.051% | 沪深300 | -0.847% | 2026-04-24 to 2026-04-30 |
| A-share | 300价值 | 0.334% | 沪深300 | -0.461% | 2026-04-24 to 2026-04-30 |
| A-share | 300成长 | 0.674% | 沪深300 | -0.122% | 2026-04-24 to 2026-04-30 |
| A-share | 中证1000 | 0.937% | 沪深300 | 0.142% | 2026-04-24 to 2026-04-30 |

### Chart 2: Style Rotation Radar, Last Four Weeks

| Market | Factor | Week | Actual close window | Return | Excess return |
| --- | --- | --- | --- | --- | --- |
| U.S. | QUAL | W-3 | 2026-04-02 to 2026-04-10 | 3.267% | -0.336% |
| U.S. | QUAL | W-2 | 2026-04-10 to 2026-04-17 | 3.735% | -0.780% |
| U.S. | QUAL | W-1 | 2026-04-17 to 2026-04-24 | 0.232% | -0.303% |
| U.S. | QUAL | W0 | 2026-04-24 to 2026-05-01 | -0.118% | -1.058% |
| U.S. | MTUM | W-3 | 2026-04-02 to 2026-04-10 | 7.155% | 3.552% |
| U.S. | MTUM | W-2 | 2026-04-10 to 2026-04-17 | 4.183% | -0.332% |
| U.S. | MTUM | W-1 | 2026-04-17 to 2026-04-24 | 2.346% | 1.811% |
| U.S. | MTUM | W0 | 2026-04-24 to 2026-05-01 | 1.492% | 0.552% |
| U.S. | VLUE | W-3 | 2026-04-02 to 2026-04-10 | 4.765% | 1.162% |
| U.S. | VLUE | W-2 | 2026-04-10 to 2026-04-17 | 3.996% | -0.519% |
| U.S. | VLUE | W-1 | 2026-04-17 to 2026-04-24 | 2.598% | 2.063% |
| U.S. | VLUE | W0 | 2026-04-24 to 2026-05-01 | 3.684% | 2.744% |
| U.S. | USMV | W-3 | 2026-04-02 to 2026-04-10 | -0.653% | -4.256% |
| U.S. | USMV | W-2 | 2026-04-10 to 2026-04-17 | 2.275% | -2.240% |
| U.S. | USMV | W-1 | 2026-04-17 to 2026-04-24 | -0.822% | -1.357% |
| U.S. | USMV | W0 | 2026-04-24 to 2026-05-01 | 0.531% | -0.408% |
| U.S. | IWM | W-3 | 2026-04-02 to 2026-04-10 | 3.983% | 0.380% |
| U.S. | IWM | W-2 | 2026-04-10 to 2026-04-17 | 5.542% | 1.026% |
| U.S. | IWM | W-1 | 2026-04-17 to 2026-04-24 | 0.315% | -0.220% |
| U.S. | IWM | W0 | 2026-04-24 to 2026-05-01 | 0.951% | 0.011% |
| A-share | 300质量 | W-3 | 2026-04-03 to 2026-04-10 | 1.670% | -2.738% |
| A-share | 300质量 | W-2 | 2026-04-10 to 2026-04-17 | 0.887% | -1.100% |
| A-share | 300质量 | W-1 | 2026-04-17 to 2026-04-24 | 0.651% | -0.210% |
| A-share | 300质量 | W0 | 2026-04-24 to 2026-04-30 | -0.200% | -0.996% |
| A-share | 300红利 | W-3 | 2026-04-03 to 2026-04-10 | -0.401% | -4.809% |
| A-share | 300红利 | W-2 | 2026-04-10 to 2026-04-17 | -0.388% | -2.374% |
| A-share | 300红利 | W-1 | 2026-04-17 to 2026-04-24 | 1.513% | 0.652% |
| A-share | 300红利 | W0 | 2026-04-24 to 2026-04-30 | -0.051% | -0.847% |
| A-share | 300价值 | W-3 | 2026-04-03 to 2026-04-10 | 0.961% | -3.448% |
| A-share | 300价值 | W-2 | 2026-04-10 to 2026-04-17 | 0.254% | -1.732% |
| A-share | 300价值 | W-1 | 2026-04-17 to 2026-04-24 | 0.068% | -0.793% |
| A-share | 300价值 | W0 | 2026-04-24 to 2026-04-30 | 0.334% | -0.461% |
| A-share | 300成长 | W-3 | 2026-04-03 to 2026-04-10 | 6.725% | 2.316% |
| A-share | 300成长 | W-2 | 2026-04-10 to 2026-04-17 | 3.163% | 1.177% |
| A-share | 300成长 | W-1 | 2026-04-17 to 2026-04-24 | 0.985% | 0.124% |
| A-share | 300成长 | W0 | 2026-04-24 to 2026-04-30 | 0.674% | -0.122% |
| A-share | 中证1000 | W-3 | 2026-04-03 to 2026-04-10 | 6.125% | 1.717% |
| A-share | 中证1000 | W-2 | 2026-04-10 to 2026-04-17 | 3.866% | 1.880% |
| A-share | 中证1000 | W-1 | 2026-04-17 to 2026-04-24 | -0.040% | -0.900% |
| A-share | 中证1000 | W0 | 2026-04-24 to 2026-04-30 | 0.937% | 0.142% |

### Chart 3: Factor Crowding Heatmap

| Market | Proxy | Theme | Metric | Current value | 1Y percentile | Z-score | Weekly return |
| --- | --- | --- | --- | --- | --- | --- | --- |
| U.S. | MTUM | Momentum / AI | Weekly average volume | 718982.400 | 34.6% | -0.477 | 1.492% |
| U.S. | SMH | Momentum / AI | Weekly average volume | 8.28 mn | 61.5% | 0.173 | 0.667% |
| U.S. | SOXX | Momentum / AI | Weekly average volume | 7.05 mn | 61.5% | 0.145 | 0.899% |
| U.S. | NVDA | Momentum / AI | Weekly average volume | 169.01 mn | 34.6% | -0.385 | -4.715% |
| U.S. | MU | Momentum / AI | Weekly average volume | 39.83 mn | 84.6% | 0.971 | 9.158% |
| U.S. | SCHD | Dividend | Weekly average volume | 19.10 mn | 67.3% | 0.119 | 2.115% |
| A-share | 300红利 | Dividend | Weekly average turnover amount | RMB 589.32 bn | 62.0% | 0.248 | -0.051% |
| A-share | 300质量 | Quality | Weekly average turnover amount | RMB 1091.39 bn | 76.2% | 0.679 | -0.200% |
| A-share | 300价值 | Style | Weekly average turnover amount | RMB 1197.19 bn | 60.0% | 0.205 | 0.334% |
| A-share | 300成长 | Style | Weekly average turnover amount | RMB 3331.03 bn | 94.0% | 1.431 | 0.674% |

### Chart 4: Earnings Surprise Scatter

Note: because consensus estimates were unavailable, the x-axis is substituted with Q1 attributable net profit growth and the y-axis with two-day post-report alpha. This substitute preserves the intended visualization of post-earnings price validation, but it should not be labeled as a strict consensus surprise.

| Stock | Report time | Q1 revenue YoY | Q1 net profit YoY | Q1 net profit | 2D post-report return | CSI 300 same window | 2D alpha |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 600519 贵州茅台 | 2026-04-24 evening | 6.540% | 1.470% | RMB 27.243 bn | -3.667% | -0.234% | -3.433% |
| 600036 招商银行 | 2026-04-28 evening | 3.810% | 1.520% | RMB 37.852 bn | -3.359% | 1.032% | -4.390% |

## Strategy For Next Week

- **Overweight U.S. low valuation / dividend.** `VLUE` and `SCHD` both outperformed, and the PCE / rate backdrop still supports near-term cash-flow and low-valuation assets.
- **Neutral U.S. Momentum.** `MTUM` is not crowded and still has positive excess return; however, `NVDA` versus `MU` dispersion means a single AI leader should not be used as the whole Momentum factor.
- **Underweight passive A-share Quality and Dividend defense.** `300质量` and `300红利` both lagged; earnings confirmation did not create a Quality premium, and pre-holiday turnover did not rotate into Dividend.
- **Watch A-share Growth crowding.** `300成长` turnover amount is at the 94.0% one-year percentile; if post-holiday turnover falls, Growth / tech factors should carry higher drawdown risk than the index.

## Follow-Up Items

- Obtain Wind / FactSet / Choice consensus estimates and rebuild the earnings surprise cross-section instead of using two-day alpha as a proxy.
- If official MSCI World Factor daily levels become available, replace U.S. ETF proxies to reduce regional and sector bias.
- If full Stock Connect net-flow data becomes available, decompose Northbound flows across Dividend, Quality, and Growth industries.

## Sources

- Raw market inputs: Nasdaq historical quote API (`https://api.nasdaq.com/api/quote/{symbol}/historical?...`), retained locally as `data_raw/nasdaq_*.csv`; Eastmoney K-line API (`https://push2his.eastmoney.com/api/qt/stock/kline/get?...`), retained locally as `data_raw/eastmoney_*.csv`.
- FRED DGS10: 4.40% on 2026-04-30, with daily values from 2026-04-24 to 2026-04-30; source is the Board of Governors of the Federal Reserve System, https://fred.stlouisfed.org/series/DGS10 .
- FRED PCEPILFE: 129.279 for 2026-03 and 128.901 for 2026-02; source is the U.S. Bureau of Economic Analysis, https://fred.stlouisfed.org/series/PCEPILFE .
- BEA PCE page: March 2026 headline PCE was +3.5% YoY and the current release date was 2026-04-30, https://bea.gov/data/personal-consumption-expenditures-price-index .
- China PMI: China government / Xinhua citing NBS and CFLP, April 2026 manufacturing PMI 50.3 and non-manufacturing PMI 49.4, https://english.www.gov.cn/archive/statistics/202604/30/content_WS69f30998c6d00ca5f9a0ab95.html .
- A-share turnover: Sina / Jiemian News, combined Shanghai and Shenzhen turnover of RMB 2.74 tn on 2026-04-30, about RMB 150.774 bn above the prior trading day, https://finance.sina.com.cn/jjxw/2026-04-30/doc-inhwhene7175673.shtml .
- Kweichow Moutai Q1 report: Sina Finance, 2026-04-24 release with revenue of RMB 54.703 bn, +6.34% YoY, and attributable net profit of RMB 27.243 bn, +1.47% YoY, https://finance.sina.com.cn/2026-04-24/doc-inhvramu4388979.shtml .
- China Merchants Bank Q1 report: Caijing, 2026-04-28 release with revenue of RMB 86.940 bn, +3.81% YoY, and attributable net profit of RMB 37.852 bn, +1.52% YoY, https://finance.caijing.com.cn/20260428/5156703.shtml .
- Trading days / holidays: NYSE regular trading hours are 9:30-16:00 ET, https://www.nyse.com/trade/hours-calendars ; SSE 2026 Labour Day holiday includes 2026-05-01, https://www.forexchurch.com/stock-market-holidays/shanghai-stock-exchange .
- Northbound flow field: the J.P. Morgan Stock Connect page notes that exchanges do not provide the data if daily quota balance stays above 30%, https://www.jpmhkwarrants.com/en_hk/stock-connect/nb-quota-balance .
