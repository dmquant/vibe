---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Risk Research Report

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Risk Research Report

Date anchor: local `date +%Y-%m-%d` returned `2026-05-10`. Coverage window: `2026-05-04` to `2026-05-08`, the latest completed U.S. trading week before the anchor date.

## Priority Conclusions

1. This week’s equity rally was not a broad risk-on move; it was concentrated in technology, semiconductors, and mega-cap leaders. `SPY` rose `2.35%`, `QQQ` rose `5.50%`, while `RSP` gained only `0.63%`; only `42.9%` of `S&P 500` constituents finished higher on the week, and the top ten `SPY` holdings contributed `1.535` percentage points, about `65.2%` of `SPY`’s weekly return.
2. Labor data reduced immediate hard-landing risk, but did not remove two-sided tail risk. April 2026 nonfarm payrolls rose `115,000`, above the `55,000` estimate; unemployment held at `4.3%`; average hourly earnings rose `0.2%` month over month and `3.6%` year over year. At the same time, labor-force participation slipped to `61.8%`, and workers part time for economic reasons rose by `445,000`, keeping the left tail active.
3. The inflation right tail remains the main risk constraint. `ISM Services Prices` held at `70.7`, marking `107` consecutive months of increase; `ISM Manufacturing Prices` rose to `84.6`, the highest since April 2022; `WTI` fell `6.40%` on the week but still closed at `95.42`, so oil risk should remain in inflation and margin stress tests.
4. Market volatility has not fully priced event risk. `VIX` closed Friday at `17.19`, up only `1.18%` from the prior Friday; the latest available high-yield OAS was `2.79%`, only `2 bp` wider than `2026-05-01`. Short-gamma, credit-carry, and less liquid strategies should receive tighter risk-budget haircuts or higher hedge thresholds.
5. The proxy portfolio’s one-year historical `95%` daily VaR is `1.08%`, but the “`VIX` to `25`,” “technology down `8%`,” and “`10Y` up `50 bp`” scenarios lose `3.61%`, `3.30%`, and `3.27%`, respectively, or `3.34x`, `3.05x`, and `3.03x` VaR. Next week’s weakest points are concentration, correlation failure, and rate repricing, not the headline index move itself.

## Data and Method Overview

| Item | Method | Raw inputs and evidence | Main limitations |
|---|---|---|---|
| Market prices | Downloaded adjusted closes through `yfinance` from `2026-05-01` to `2026-05-08`; calculated weekly and daily returns; cross-checked index weekly returns with AP. | AP index weekly returns; Yahoo Finance/yfinance ETF, index, futures, and single-name prices. | ETF returns use adjusted data; index levels are price indices; free vendor data may be revised slightly. |
| Constituent breadth | Used `S&P 500` constituents as a proxy for exchange breadth: downloaded prices for `503` constituents, then calculated daily advancers, weekly advancers, and 52-week highs/lows. | Wikipedia constituent list; Yahoo Finance/yfinance prices. | This is not full NYSE/Nasdaq breadth; the constituent list is a collection-time snapshot. |
| Macro data | Read official BLS, ADP, and ISM releases and compared them with public market-expectation reporting. | BLS `Employment Situation - April 2026`; ADP `National Employment Report`; ISM Manufacturing/Services PMI; Kiplinger estimate. | Macro data may be revised; expectation data is public reporting, not a proprietary consensus feed. |
| Rates, volatility, and credit | Cross-checked rates using Yahoo Finance and FRED/H.15; used Yahoo Finance/Cboe for `VIX`/`VVIX`; used FRED ICE BofA series for credit OAS. | FRED `DGS2`, `DGS10`, `DGS30`, `T10Y2Y`, `BAMLH0A0HYM2`, `BAMLC0A0CM`; Cboe VIX page. | FRED rates and credit data lag over weekends, with some latest values only through `2026-05-07`; official daily `MOVE` was not available through a stable free feed. |
| Stress test | No live portfolio was provided, so this report uses a proxy portfolio: `SPY 40%`, `QQQ 20%`, `IWM 10%`, `TLT 10%`, `HYG 10%`, `LQD 5%`, `GLD 5%`; estimated VaR from one year of daily returns and applied specified scenario shocks. | Yahoo Finance/yfinance daily returns. | This is a market proxy, not an actual account; scenario shocks are risk assumptions, not forecasts. |

## Question 1: Quality of the Equity Rally

### Method

The window is `2026-05-04` to `2026-05-08`, with returns calculated from the `2026-05-01` close to the `2026-05-08` close. The analysis compares `SPY`, `QQQ`, `IWM`, `DIA`, `RSP`, 11 sector ETFs, factor ETFs, and `S&P 500` constituent breadth; mega-cap contribution is estimated by multiplying the top ten `SPY` holding weights by each stock’s return.

### Findings

| Metric | Weekly value | Risk meaning |
|---|---:|---|
| `SPY` weekly return | `2.35%` | The headline large-cap move was strong. |
| `QQQ` weekly return | `5.50%` | Growth and technology beta dominated. |
| `RSP` weekly return | `0.63%` | Equal-weight performance lagged cap-weight sharply. |
| `RSP - SPY` | `-1.72 pp` | Weak breadth and higher concentration risk. |
| `XLK` weekly return | `8.43%` | Information technology was the strongest sector. |
| `XLE` weekly return | `-5.35%` | Lower oil weighed on energy. |
| Weekly advancers in `S&P 500` constituents | `42.9%` | Most constituents did not participate. |
| Top ten `SPY` holding contribution | `1.535 pp` | About `65.2%` of `SPY`’s weekly return. |

Interpretation: The quality of the index rally was low, with the clearest evidence being the `1.72` percentage point gap between `SPY` and `RSP` and the fact that only `42.9%` of `S&P 500` constituents rose on the week. `XLK` gained `8.43%`, `SMH` gained `11.13%`, and `SOXX` gained `11.71%`, showing that risk appetite was concentrated in technology and semiconductors. Defensive and energy sectors did not confirm the move: `XLU` fell `3.93%`, and `XLE` fell `5.35%`. The risk conclusion is to keep market beta under review, but raise concentration capital for technology, semiconductors, and the top index weights.

### Evidence

| Date/source | Evidence |
|---|---|
| AP, 2026-05-08 | `S&P 500` rose `2.3%` for the week, `Dow` rose `0.2%`, `Nasdaq` rose `4.5%`, and `Russell 2000` rose `1.7%`; Friday closes were `7,398.93`, `49,609.16`, `26,247.08`, and `2,861.21`. Link: https://apnews.com/article/wall-street-stocks-dow-nasdaq-b7ff696f0770489a60427121a6931ada |
| Yahoo Finance/yfinance | `SPY`, `QQQ`, `IWM`, `DIA`, `RSP`, sector ETFs, factor ETFs, and single-name equities, downloaded on `2026-05-10`. |
| Wikipedia + Yahoo Finance/yfinance | `503`-constituent `S&P 500` breadth proxy. |

### Caveats

Exchange advancers/decliners and 52-week highs/lows were not captured from official NYSE/Nasdaq breadth sources; this report uses `S&P 500` constituents as a proxy. `RSP` is an equal-weight ETF, not a frictionless equal-weight index replication. Top-ten contribution uses a `SPY` holding snapshot and does not reconstruct daily holding changes.

## Question 2: Labor and Wage Data, Left and Right Tails

### Method

BLS `Employment Situation - April 2026` is the primary source, with ADP as a private-payroll cross-check and ISM employment/prices as contemporaneous growth and inflation indicators. Comparisons use the prior month, public expectations, and internal risk thresholds: payroll growth below `100,000` flags rising growth-left-tail risk, while wage growth above `3.5%` and ISM prices above `65` indicate that inflation-right-tail risk remains active.

### Findings

| Metric | Actual | Comparison base | Difference | Risk read |
|---|---:|---:|---:|---|
| Nonfarm payrolls | `115,000` | Estimate `55,000` | `+60,000` | Immediate hard-landing risk declined. |
| Unemployment rate | `4.3%` | Prior `4.3%` | `0.0 pp` | Stable, but not improving. |
| Labor-force participation | `61.8%` | Prior `61.9%` | `-0.1 pp` | Stable unemployment partly reflects labor-force exit. |
| Average hourly earnings MoM | `0.2%` | Around `0.3%` expected | `-0.1 pp` | Monthly wage pressure did not accelerate. |
| Average hourly earnings YoY | `3.6%` | Risk threshold `3.5%` | `+0.1 pp` | Wage inflation remains above comfort. |
| Part time for economic reasons | `4.942 million` | Prior `4.497 million` | `+445,000` | Labor-quality left tail worsened. |
| ADP private payrolls | `109,000` | Prior `61,000` | `+48,000` | Private hiring improved. |
| ADP job-stayer pay YoY | `4.4%` | Slightly higher prior month | Mild slowdown | Sticky wage pressure remains. |
| ISM Services Employment | `48.0` | Prior `45.2` | `+2.8 pp` | Services employment still contracted. |
| ISM Manufacturing Employment | `46.4` | Prior `48.7` | `-2.3 pp` | Manufacturing employment kept contracting. |

Interpretation: Nonfarm payrolls of `115,000` beat the `55,000` estimate, reducing the probability of an immediate recession outcome, but the number is not strong and BLS reported a `445,000` increase in workers part time for economic reasons. Monthly wage growth of `0.2%` is a relief for rates markets, but `3.6%` year-over-year wage growth and ADP job-stayer pay of `4.4%` show that wage stickiness remains. Both ISM employment components are below `50`, indicating weak hiring intentions. The risk conclusion is that both growth-left-tail and inflation-right-tail scenarios should remain active; a payroll beat versus a low bar is not enough to reduce rate or credit stress weights.

### Evidence

| Source | Evidence |
|---|---|
| BLS, `Employment Situation - April 2026` | Payrolls `115,000`, unemployment `4.3%`, participation `61.8%`, average hourly earnings `$37.41`, monthly wage growth `0.2%`, yearly wage growth `3.6%`, workers part time for economic reasons `4.942 million`, and combined February/March revision of `-16,000`. Link: https://www.bls.gov/news.release/archives/empsit_05082026.htm |
| ADP/PRNewswire, 2026-05-06 | Private payrolls `109,000`, job-stayer pay up `4.4%` year over year, job-changer pay up `6.6%` year over year. Link: https://www.stocktitan.net/news/ADP/adp-national-employment-report-private-sector-employment-increased-n62l4v5z9mjc.html |
| ISM Services, 2026-04 | `Services PMI 53.6`, `New Orders 53.5`, `Employment 48.0`, `Prices 70.7`. Link: https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/april/ |
| ISM Manufacturing, 2026-04 | `Manufacturing PMI 52.7`, `Employment 46.4`, `Prices 84.6`. Link: https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/pmi/april/ |
| Kiplinger, 2026-05-08 | Reported economists’ payroll estimate near `55,000`. Link: https://www.kiplinger.com/investing/economy/jobs-report-april-2026-what-to-expect |

### Caveats

BLS payrolls and unemployment come from different surveys and are subject to revision. ADP covers private employment and is not the same as BLS nonfarm payrolls. The expectation benchmark uses public reporting, not a proprietary consensus database.

## Question 3: Did Volatility, Rates, the Dollar, and Credit Price the Shock?

### Method

The analysis reviews `VIX`, `VVIX`, Treasury yields, the dollar, credit OAS, and cross-asset correlations. Credit OAS comes from FRED ICE BofA series and is available through `2026-05-07`; prices and volatility use `2026-05-08` closes. Correlations use 20-day and 60-day daily-return correlations between `SPY` and `TLT`, `UUP`, `USO`, `GLD`, `HYG`, and `LQD`.

### Findings

| Metric | Latest value | Weekly change | Risk signal |
|---|---:|---:|---|
| `VIX` | `17.19` | `+1.18%` | Equity implied volatility remains moderate. |
| `VVIX` | `96.78` | `+1.69%` | Vol-of-vol is not signaling panic. |
| `10Y` Treasury yield | `4.364%` | `-1.4 bp` | Long rates did not confirm broad risk stress. |
| `2s10s` | `+48 bp` | `-3 bp` vs `2026-05-01` | Curve remains positively sloped; recession pricing is limited. |
| High-yield OAS | `2.79%` | `+2 bp` | Credit has not confirmed equity/oil tail risk. |
| Investment-grade OAS | `0.79%` | `-2 bp` | IG spreads remain tight. |
| `DXY` | `97.84` | `-0.38%` | No strong dollar safe-haven bid. |
| `SPY`-`TLT` 20-day correlation | `0.70` | Above 60-day `0.33` | Stock-bond hedging is unstable. |
| `SPY`-`USO` 20-day correlation | `-0.78` | Below 60-day `-0.61` | Lower oil and higher equities are tightly linked short term. |
| `SPY`-`HYG` 20-day correlation | `0.88` | Above 60-day `0.83` | Credit carry is highly aligned with equity beta. |

Interpretation: Volatility and credit markets are not charging enough premium for oil, policy, and concentration risks. `VIX 17.19` and `VVIX 96.78` describe a controlled-volatility regime, but the 20-day `SPY`-`TLT` correlation of `0.70` means traditional duration hedges may fail on stress days. High-yield OAS of only `2.79%` is below levels normally associated with stress. The risk conclusion is that short-gamma, volatility-selling, credit-carry, and levered relative-value strategies require higher risk-budget haircuts.

### Evidence

| Source | Evidence |
|---|---|
| Yahoo Finance/yfinance | `VIX`, `VVIX`, `DXY`, `10Y`, ETF daily returns, and correlations, downloaded on `2026-05-10`. |
| Cboe VIX historical data page | Official `VIX` historical data entry point. Link: https://www.cboe.com/tradable-products/vix/vix-historical-data |
| FRED | `DGS2`, `DGS10`, `DGS30`, `T10Y2Y`, `BAMLH0A0HYM2`, `BAMLC0A0CM`. Link: https://fred.stlouisfed.org |

### Caveats

FRED weekend data lags, and the latest available credit OAS values are through `2026-05-07`. Official daily `MOVE` data was not available through a stable free source; this report uses the public single-point `MOVE 65.7` only as a reference and excludes it from the main visualization series.

## Question 4: Oil’s Weekly Drop and Friday Rebound

### Method

Oil risk is measured using weekly returns for `CL=F`, `BZ=F`, and `USO`; cross-asset impact is assessed through `XLE`, `JETS`, `IYT`, `XLY`, `TIP`, and inflation expectations. The latest EIA weekly inventory report available at the anchor date covers the week ended `2026-05-01`; the report for the week ended `2026-05-08` was not yet available.

### Findings

| Metric | Friday close/latest | Weekly return or change | Risk meaning |
|---|---:|---:|---|
| `WTI` (`CL=F`) | `95.42` | `-6.40%` | Oil fell from highs, but the absolute level remains elevated. |
| `Brent` (`BZ=F`) | `101.29` | `-6.36%` | Brent is still near triple digits. |
| `USO` | `133.59` | `-6.45%` | Tradable oil beta drew down sharply. |
| `XLE` | `55.70` | `-5.35%` | Energy equities confirmed downside oil risk. |
| `JETS` | `27.48` | `+6.68%` | Airlines benefited from easing fuel pressure. |
| `IYT` | `80.78` | `-0.02%` | Transportation did not broadly benefit. |
| `TIP` | `111.40` | `+0.04%` | TIPS did not reprice materially. |
| 5-year inflation expectations | `2.62%` | `-7 bp` vs `2026-05-01` | Inflation expectations declined only modestly. |
| 10-year inflation expectations | `2.45%` | `-3 bp` vs `2026-05-01` | Long-term inflation expectations were stable. |
| EIA commercial crude inventories | `457.2 million bbl` | Weekly draw `2.3 million bbl` | Inventory buffer is limited but not confirming scarcity. |

Interpretation: A weekly oil decline of more than `6%` helps airlines and consumer-cost pressure, but it does not mean the energy shock is over because `Brent 101.29` and `WTI 95.42` remain high absolute prices. `XLE`’s `5.35%` loss shows that energy longs and inflation-hedge exposures face drawdown risk. `JETS` gained `6.68%`, reflecting fuel-cost relief, but `IYT` was nearly flat, so the broader transportation chain did not fully recover. The risk conclusion is to keep two-way oil scenarios: both a further `10%` oil decline and a `10%` rebound belong in the stress pack.

### Evidence

| Source | Evidence |
|---|---|
| Yahoo Finance/yfinance | Prices for `CL=F`, `BZ=F`, `USO`, `XLE`, `JETS`, `IYT`, and `TIP`. |
| Reuters via MarketScreener, 2026-05-08 | Reported `Brent` settlement at `101.29` and `WTI` settlement at `95.42`, both down more than `6%` on the week. Link: https://www.marketscreener.com/quote/commodity/WTI-2355639/news/Oil-prices-settle-higher-but-down-more-than-6-for-the-week-50182042/ |
| EIA Weekly Petroleum Status Report | For the week ended `2026-05-01`, commercial crude inventories were `457.2 million bbl`, down `2.3 million bbl` on the week. Link: https://www.eia.gov/petroleum/supply/weekly/ |

### Caveats

As of the `2026-05-10` anchor date, EIA had not yet published the inventory report for the week ended `2026-05-08`. `USO` is affected by futures roll mechanics and is not a pure spot-oil proxy.

## Question 5: Apple-Intel Policy Catalyst and Semiconductor Event Risk

### Method

The event is the Reuters/WHBL report on a preliminary Apple-Intel chip manufacturing agreement. The analysis compares weekly and Friday returns for `AAPL`, `INTC`, `SMH`, `SOXX`, `NVDA`, `AMD`, and `TSM`, and uses ETF holdings to identify sector concentration.

### Findings

| Security | Weekly return | Friday return | Risk meaning |
|---|---:|---:|---|
| `INTC` | `25.40%` | `13.96%` | Policy event sharply repriced the single name. |
| `AAPL` | `4.70%` | `2.05%` | Mega-cap beneficiary, but smaller magnitude. |
| `SMH` | `11.13%` | `4.90%` | Semiconductor basket beta was strong. |
| `SOXX` | `11.71%` | `5.67%` | Sector risk appetite was concentrated. |
| `NVDA` | `8.44%` | `1.75%` | Core AI/semiconductor weight kept contributing. |
| `AMD` | `26.25%` | `11.44%` | High-beta semiconductor exposure was repriced. |
| `TSM` | `3.52%` | `-0.60%` | Supply-chain reshoring benefit was uneven. |

Interpretation: `INTC` rose `13.96%` on Friday and `25.40%` on the week, which is event-driven rather than ordinary sector beta. `SMH` and `SOXX` both rose more than `11%`, showing that a single-name event spread into industry baskets. `TSM` fell `0.60%` on Friday, indicating that supply-chain policy catalysts can reshape cross-region semiconductor correlations rather than simply lifting all chip stocks. The risk conclusion is to set event-exposure caps and jump-risk capital add-ons for `INTC`, `AAPL`, `AMD`, `NVDA`, `SMH`, and `SOXX`.

### Evidence

| Source | Evidence |
|---|---|
| Reuters via WHBL, 2026-05-08 | Reported U.S. government efforts to broker a preliminary Apple-Intel chip manufacturing agreement; the report said `Intel` rose as much as about `15%`, while `Apple` rose about `1.7%`. Link: https://whbl.com/2026/05/08/us-takes-steps-to-broker-preliminary-chip-deal-between-apple-and-intel-source-says/ |
| Yahoo Finance/yfinance | Daily and weekly returns for `AAPL`, `INTC`, `SMH`, `SOXX`, `NVDA`, `AMD`, and `TSM`. |
| Yahoo Finance/yfinance fund holdings | `SMH` holdings: `NVDA 18.09%`, `TSM 10.59%`, `AVGO 7.83%`, `INTC 7.14%`, `AMD 5.95%`; `SOXX` holdings: `AMD 8.03%`, `AVGO 7.95%`, `MU 7.63%`, `NVDA 6.85%`, `INTC 6.30%`. |

### Caveats

The Reuters report described a “preliminary” agreement, not a completed commercial contract. Options implied volatility and skew were not available through a stable free source, so event-risk judgment is based on spot jumps, sector ETFs, and holdings concentration.

## Question 6: Most Fragile Portfolio Risk Points Next Week

### Method

This section converts weekly market, macro, and correlation inputs into a ranked risk list. Ranking criteria are potential loss size, trigger probability, hedge stability, and liquidity consumption. The proxy portfolio is `SPY 40%`, `QQQ 20%`, `IWM 10%`, `TLT 10%`, `HYG 10%`, `LQD 5%`, and `GLD 5%`.

### Findings

| Rank | Risk point | Trigger threshold | Monitoring indicators | Suggested action |
|---:|---|---|---|---|
| 1 | Technology/semiconductor concentration | `QQQ` weekly outperformance versus `RSP` keeps widening by `>2 pp` | `QQQ-RSP`, `SMH`, `SOXX`, top-ten weight contribution | Reduce single-name and sector-basket net exposure; raise jump VaR. |
| 2 | Correlation failure | 20-day `SPY`-`TLT` correlation stays `>0.50` | Stock-bond correlation, `10Y`, `TLT` | Do not treat duration as full equity protection; add option convexity. |
| 3 | Rate repricing | `10Y` breaks above `4.50%` or `2s10s` narrows by more than `15 bp` quickly | `DGS10`, `^TNX`, `T10Y2Y` | Cut long-duration growth and long-duration credit exposure. |
| 4 | Two-way oil jump | `WTI` breaks below `90` or returns to `105` | `CL=F`, `BZ=F`, `XLE`, `JETS` | Keep two-way energy and airline stress tests. |
| 5 | Lagged credit repricing | HY OAS breaks above `3.10%` or `HYG` falls `>1.5%` in a week | `BAMLH0A0HYM2`, `HYG` | Reduce lower-rated carry and review redemption liquidity. |
| 6 | Missing dollar/geopolitical hedge | `DXY` rises `>1%` in a day while oil also rises | `DXY`, `Gold`, oil | Raise FX and commodity margin buffers. |

Interpretation: The largest next-week fragility is concentration rather than headline beta, because most constituents did not rise even as the index made records. The second fragility is stock-bond correlation: the 20-day `SPY`-`TLT` correlation is `0.70`, so duration hedges may rise and fall with equities. Third is rate upside: the proxy portfolio loses `3.27%` in the `10Y +50 bp` scenario, about `3.03x` its `95%` daily VaR. If oil and the dollar rise together, inflation, rates, and margin pressure would compound.

### Evidence

| Source | Evidence |
|---|---|
| This report’s calculations | Proxy-portfolio VaR, correlations, and stress scenarios. |
| Yahoo Finance/yfinance | ETF, futures, and index daily returns. |
| FRED | Rates, credit OAS, and inflation expectations. |

### Caveats

Actual holdings, option Greeks, financing terms, and redemption terms were not provided, so the action list is a market-risk framework rather than account-level limit instruction.

## Visualization-Ready Data Tables

### Chart 1: Cross-Asset Weekly Return Bar Chart

| Asset/ETF | Category | 2026-05-08 close | Weekly return |
|---|---|---:|---:|
| `SPY` | U.S. large cap | `737.62` | `2.35%` |
| `QQQ` | Nasdaq/growth | `711.23` | `5.50%` |
| `IWM` | Small cap | `284.17` | `1.75%` |
| `DIA` | Dow | `496.13` | `0.22%` |
| `RSP` | Equal-weight S&P | `204.10` | `0.63%` |
| `XLK` | Information technology | `175.52` | `8.43%` |
| `XLC` | Communication services | `116.94` | `0.19%` |
| `XLY` | Consumer discretionary | `120.20` | `1.32%` |
| `XLI` | Industrials | `173.20` | `0.14%` |
| `XLF` | Financials | `51.24` | `-1.31%` |
| `XLV` | Health care | `143.49` | `-1.15%` |
| `XLP` | Consumer staples | `84.18` | `0.01%` |
| `XLU` | Utilities | `44.72` | `-3.93%` |
| `XLB` | Materials | `51.59` | `0.47%` |
| `XLRE` | Real estate | `44.41` | `0.20%` |
| `XLE` | Energy | `55.70` | `-5.35%` |
| `HYG` | High-yield credit | `80.14` | `0.10%` |
| `LQD` | Investment-grade credit | `109.20` | `0.55%` |
| `TLT` | Long-duration Treasuries | `86.08` | `0.55%` |
| `DXY` | Dollar index | `97.84` | `-0.38%` |
| `GLD` | Gold | `433.77` | `2.50%` |
| `WTI` | Crude futures | `95.42` | `-6.40%` |
| `Brent` | Crude futures | `101.29` | `-6.36%` |
| `TIP` | TIPS | `111.40` | `0.04%` |
| `JETS` | Airlines | `27.48` | `6.68%` |
| `IYT` | Transportation | `80.78` | `-0.02%` |

### Chart 2: Market Breadth and Concentration Heat Map

The plan requested NYSE/Nasdaq breadth; that source was not available reliably, so this table substitutes `S&P 500` constituent breadth.

| Date | `SPY` daily return | `RSP` daily return | `QQQ` daily return | `IWM` daily return | Constituent advancers | Constituent decliners | 52-week highs | 52-week lows | Top-ten `SPY` holding contribution |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 2026-05-04 | `-0.37%` | `-0.58%` | `-0.19%` | `-0.50%` | `30.4%` | `69.0%` | `24` | `27` | Not calculated |
| 2026-05-05 | `0.80%` | `0.79%` | `1.30%` | `1.68%` | `63.8%` | `36.2%` | `44` | `16` | Not calculated |
| 2026-05-06 | `1.39%` | `0.79%` | `2.08%` | `1.50%` | `63.4%` | `36.4%` | `55` | `21` | Not calculated |
| 2026-05-07 | `-0.31%` | `-0.64%` | `-0.12%` | `-1.58%` | `35.2%` | `64.8%` | `12` | `8` | Not calculated |
| 2026-05-08 | `0.83%` | `0.28%` | `2.34%` | `0.68%` | `41.6%` | `58.4%` | `26` | `27` | `0.448 pp` |
| Full week | `2.35%` | `0.63%` | `5.50%` | `1.75%` | `42.9%` | `56.9%` | Not applicable | Not applicable | `1.535 pp` |

### Chart 3: Macro Shock Dashboard

| Metric | Release date | Actual | Prior/expected | Surprise | Risk direction |
|---|---|---:|---:|---:|---|
| Nonfarm payrolls | 2026-05-08 | `115,000` | Estimate `55,000` | `+60,000` | Growth left tail down |
| Unemployment rate | 2026-05-08 | `4.3%` | Prior `4.3%` | `0.0 pp` | Neutral |
| Labor-force participation | 2026-05-08 | `61.8%` | Prior `61.9%` | `-0.1 pp` | Left tail up |
| Average hourly earnings MoM | 2026-05-08 | `0.2%` | Around `0.3%` expected | `-0.1 pp` | Inflation right tail down |
| Average hourly earnings YoY | 2026-05-08 | `3.6%` | Risk threshold `3.5%` | `+0.1 pp` | Inflation right tail remains |
| ADP private payrolls | 2026-05-06 | `109,000` | Prior `61,000` | `+48,000` | Growth left tail down |
| ADP job-stayer pay YoY | 2026-05-06 | `4.4%` | Slightly higher prior month | Mild slowdown | Inflation right tail remains |
| ISM Services PMI | 2026-05-05 | `53.6` | Prior `54.0` | `-0.4 pp` | Growth still expanding but cooling |
| ISM Services Employment | 2026-05-05 | `48.0` | Prior `45.2` | `+2.8 pp` | Still contracting |
| ISM Services Prices | 2026-05-05 | `70.7` | Prior `70.7` | `0.0 pp` | High inflation right tail |
| ISM Manufacturing PMI | 2026-05-01 | `52.7` | Prior not listed | Not applicable | Manufacturing expansion |
| ISM Manufacturing Employment | 2026-05-01 | `46.4` | Prior `48.7` | `-2.3 pp` | Employment left tail |
| ISM Manufacturing Prices | 2026-05-01 | `84.6` | Prior `78.3` | `+6.3 pp` | High inflation right tail |

### Chart 4: Volatility and Correlation State

Official daily `MOVE` could not be downloaded through a stable free source, so the line chart is substituted with `VIX`, `VVIX`, and `10Y` yield; the public single point `MOVE 65.7` is used only as a note.

| Date | `VIX` | `VVIX` | `10Y` yield | `DXY` | `WTI` |
|---|---:|---:|---:|---:|---:|
| 2026-05-04 | `18.29` | `98.29` | `4.446%` | `98.47` | `106.42` |
| 2026-05-05 | `17.38` | `95.26` | `4.416%` | `98.48` | `102.27` |
| 2026-05-06 | `17.39` | `93.70` | `4.356%` | `98.02` | `95.08` |
| 2026-05-07 | `17.08` | `93.61` | `4.392%` | `98.25` | `94.81` |
| 2026-05-08 | `17.19` | `96.78` | `4.364%` | `97.84` | `95.42` |

| Correlation | 20-day | 60-day | Risk interpretation |
|---|---:|---:|---|
| `SPY` vs `TLT` | `0.70` | `0.33` | Stock-bond hedging is unstable. |
| `SPY` vs `UUP` | `-0.72` | `-0.58` | Dollar safe-haven correlation strengthened. |
| `SPY` vs `USO` | `-0.78` | `-0.61` | Lower oil and higher equities are linked short term. |
| `SPY` vs `GLD` | `0.85` | `0.45` | Gold rose with risk assets, weakening its hedge role. |
| `SPY` vs `HYG` | `0.88` | `0.83` | Credit and equities are highly aligned. |
| `SPY` vs `LQD` | `0.79` | `0.59` | IG bond hedge value has declined. |

### Table 1: Tail Scenario Stress Test

Proxy portfolio: `SPY 40%`, `QQQ 20%`, `IWM 10%`, `TLT 10%`, `HYG 10%`, `LQD 5%`, `GLD 5%`. One-year sample size `256`, `95%` daily VaR `1.08%`, `99%` daily VaR `1.59%`, annualized volatility `10.69%`, maximum drawdown `-7.84%`.

| Scenario | Portfolio P&L | VaR multiple | Liquidity-use proxy | Main loss source | Risk action |
|---|---:|---:|---:|---|---|
| Oil down another `10%` | `-0.52%` | `0.48x` | `0.68%` | Small cap, credit, and energy beta | Do not chase lower energy hedges; review inflation beta. |
| Oil rebounds `10%` | `-0.96%` | `0.89x` | `1.04%` | Equities, duration, and credit | Keep airline/consumer stress; add commodity margin. |
| `10Y` up `50 bp` | `-3.27%` | `3.03x` | `3.27%` | `TLT`, `QQQ`, long-duration credit | Cut duration and growth-equity net exposure. |
| `VIX` to `25` | `-3.61%` | `3.34x` | `3.98%` | `QQQ`, `IWM`, `SPY`, `HYG` | Buy convexity earlier; reduce short gamma. |
| Technology down `8%` | `-3.30%` | `3.05x` | `3.55%` | `QQQ`, `SPY`, semiconductor-linked beta | Reduce mega-cap technology concentration; hedge with `QQQ`/`SMH`. |

## References

| No. | Source |
|---|---|
| 1 | AP News, 2026-05-08, `How major US stock indexes fared Friday 5/8/2026`, https://apnews.com/article/wall-street-stocks-dow-nasdaq-b7ff696f0770489a60427121a6931ada |
| 2 | U.S. Bureau of Labor Statistics, 2026-05-08, `Employment Situation - April 2026`, https://www.bls.gov/news.release/archives/empsit_05082026.htm |
| 3 | ADP/PRNewswire, 2026-05-06, `ADP National Employment Report: April 2026`, https://www.stocktitan.net/news/ADP/adp-national-employment-report-private-sector-employment-increased-n62l4v5z9mjc.html |
| 4 | Institute for Supply Management, 2026-05, `April 2026 Services PMI`, https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/april/ |
| 5 | Institute for Supply Management, 2026-05, `April 2026 Manufacturing PMI`, https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/pmi/april/ |
| 6 | Reuters via WHBL, 2026-05-08, `US takes steps to broker preliminary chip deal between Apple and Intel, source says`, https://whbl.com/2026/05/08/us-takes-steps-to-broker-preliminary-chip-deal-between-apple-and-intel-source-says/ |
| 7 | Reuters via MarketScreener, 2026-05-08, `Oil prices settle higher, but down more than 6% for the week`, https://www.marketscreener.com/quote/commodity/WTI-2355639/news/Oil-prices-settle-higher-but-down-more-than-6-for-the-week-50182042/ |
| 8 | EIA, `Weekly Petroleum Status Report`, https://www.eia.gov/petroleum/supply/weekly/ |
| 9 | FRED, `DGS2`, `DGS10`, `DGS30`, `T10Y2Y`, `BAMLH0A0HYM2`, `BAMLC0A0CM`, `T5YIE`, `T10YIE`, https://fred.stlouisfed.org |
| 10 | Cboe, `VIX Historical Data`, https://www.cboe.com/tradable-products/vix/vix-historical-data |
| 11 | Yahoo Finance/yfinance, ETF, index, futures, and single-name prices, downloaded on `2026-05-10`. |

## Follow-Up Items

| Priority | Item | Suggested owner | Deadline |
|---|---|---|---|
| High | Replace the proxy portfolio with actual holdings and recalculate VaR, incremental VaR, and scenario P&L. | Risk quant | Before the next trading day |
| High | Pull options implied volatility, skew, and gamma exposure to validate event risk in `INTC`, `AAPL`, `SMH`, and `QQQ`. | Derivatives risk | 2026-05-11 |
| Medium | Add official NYSE/Nasdaq breadth, volume, and dark-pool liquidity data. | Market-risk data | 2026-05-12 |
| Medium | After EIA publishes inventories for the week ended `2026-05-08`, update oil scenarios and energy/airline stress. | Commodity risk | Release day |
