---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Derivatives Strategy Research

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Derivatives Strategy Research

Date anchor: local `date +%Y-%m-%d` returned `2026-05-10`. The coverage window is `2026-05-04` through `2026-05-08`; every reference to “this week,” “next week,” and “previous trading day” is resolved against that date.

## Priority Conclusions

1. This was not a quiet grind higher. It was an “index record high + expanding technology beta + suppressed front-end volatility” week: from the `2026-05-04` close to the `2026-05-08` close, SPX rose `2.75%`, NDX rose `5.73%`, and RUT rose `2.33%`; over the same window, VIX fell from `18.29` to `17.19`, while VIX9D fell from `16.60` to `14.21`.[3]
2. Implied volatility is not simply “cheap.” SPX 5-day realized volatility was `12.21%`, below VIX at `17.19`; NDX 5-day realized volatility was `17.62%`, close to VIX but above VIX9D. The conclusion is that index-level short-vol still has premium in SPX, but Nasdaq/semiconductor directional gamma risk is much higher.[3]
3. The labor report weakened the fast-cut narrative: April payrolls rose `115,000`, unemployment was `4.3%`, and average hourly earnings were `+0.2% m/m` and `+3.6% y/y`; Investing.com’s Fed Rate Monitor showed an `86.3%` probability that the `2026-06-17` target range stays at `3.75%-4.00%`, `68.6%` for `2026-07-29`, and `39.4%` for `2026-09-16`.[2][4]
4. Single-name event volatility dominated index behavior. AMD’s post-earnings 1-day close-to-close move was `+18.61%`, exceeding the pre-earnings expected move of `±8.4%` by `10.21` percentage points. AKAM, MNST, and DIS also had large post-event realized moves, but most public pages do not provide verifiable pre-earnings implied moves, so the full sample does not support a strict claim that implied volatility was systematically underpriced.[3][6][8][9]
5. The cross-asset message was not a simple inflation-risk unwind: WTI futures fell `-10.34%` close-to-close for the week and USO fell `-9.50%`, while Gold futures rose `+4.45%` and GLD rose `+4.60%`. That looks more like oil supply/geopolitical repricing plus retained gold tail hedging, not a one-way removal of inflation risk.[3]

## Q1 After Record Highs, Are SPX, NDX, and RUT Implied Volatilities Too Low?

### Method

I pulled daily closes for SPX, NDX, RUT, VIX, VIX9D, VIX3M, and VVIX from the Yahoo Finance chart API for `2026-05-04` through `2026-05-08`; annualized 5-day realized volatility is calculated from four daily returns. 0DTE volume, dealer gamma, and major strike open interest are not available as publicly verifiable daily datasets, so they are treated as data gaps and excluded from the numerical conclusion.[3][14]

### Findings

| Metric | `2026-05-04` | `2026-05-08` | Weekly Change | 5-Day Realized Vol |
|---|---:|---:|---:|---:|
| SPX | `7,200.75` | `7,398.93` | `+2.75%` | `12.21%` |
| NDX | `27,651.82` | `29,234.99` | `+5.73%` | `17.62%` |
| RUT | `2,796.00` | `2,861.21` | `+2.33%` | `24.41%` |
| VIX | `18.29` | `17.19` | `-1.10 vol pts` | Not applicable |
| VIX9D | `16.60` | `14.21` | `-2.39 vol pts` | Not applicable |
| VIX3M | `21.05` | `20.50` | `-0.55 vol pts` | Not applicable |
| VVIX | `98.29` | `96.78` | `-1.51 pts` | Not applicable |

The SPX realized/implied relationship still supports the view that index-level short volatility carries premium: 5-day realized volatility of `12.21%` is below VIX at `17.19`. For NDX, however, 5-day realized volatility of `17.62%` already exceeds VIX9D at `14.21`, which means short-dated index volatility is less protective against technology beta. RUT realized volatility of `24.41%` was materially higher than large-cap realized volatility, but VIX-family indexes do not directly price small-cap risk, and the lack of IWM/RUT option-surface data limits the pricing conclusion. Overall: SPX vol is not obviously too low; NDX/RUT front-end protection looks more fragile.

### Evidence

Yahoo Finance chart API: `^GSPC`, `^NDX`, `^RUT`, `^VIX`, `^VIX9D`, `^VIX3M`, and `^VVIX`, queried from `period1=1777852800` to `period2=1778284800`.[3] AP also reported that SPX and Nasdaq Composite closed at record highs on `2026-05-08`.[1]

### Caveats

0DTE volume, put/call ratios, dealer gamma, and strike-level open interest typically require Cboe, OptionMetrics, SpotGamma, or broker-terminal datasets; no public page provided a downloadable `2026-05-08` daily breakdown. VIX is 30-day SPX implied volatility and is not a direct proxy for NDX, RUT, or ETF option surfaces.

## Q2 Did the Labor Report Change June/July/September FOMC Futures Pricing?

### Method

I used the BLS April employment report published on `2026-05-08` as the macro shock and read Investing.com’s Fed Rate Monitor probabilities for the `2026-06-17`, `2026-07-29`, and `2026-09-16` FOMC meetings. Yahoo Finance `^TNX`, `^TYX`, and `TLT` provide public proxies for the rates-market reaction.[2][3][4]

### Findings

| Item | Value |
|---|---:|
| April nonfarm payrolls | `115,000` |
| Unemployment rate | `4.3%` |
| Average hourly earnings | `+0.2% m/m`, `+3.6% y/y` |
| Combined February and March revision | `-16,000` |
| `2026-06-17` probability of holding `3.75%-4.00%` | `86.3%` |
| `2026-07-29` probability of holding `3.75%-4.00%` | `68.6%` |
| `2026-09-16` probability of holding `3.75%-4.00%` | `39.4%` |
| 10Y yield on `2026-05-08` | `4.364%` |
| 30Y yield on `2026-05-08` | `4.947%` |

The labor report was not a clean “cut now” print: hiring slowed, but unemployment was stable and wage growth remained `+3.6% y/y`. The Fed-pricing read is that June and July still lean toward no cut, while September is the more contested meeting. For derivatives, that means front-end rates options should not be expressed only as directional cut bets, and equity options on long-duration technology should preserve sensitivity to 10Y/30Y shocks. NDX rose `5.73%` this week while the 30Y yield still closed at `4.947%`, so upside chase and rates-shock negative convexity coexist.

### Evidence

BLS Employment Situation -- April 2026.[2] Investing.com Fed Rate Monitor lists June, July, and September 2026 probabilities.[4] Yahoo Finance chart API provides daily closing data for `^TNX`, `^TYX`, and `TLT`.[3]

### Caveats

Investing.com probabilities are a web snapshot and can change with futures prices in real time; this report does not use original CME Fed funds futures settlement files. SOFR futures, OIS curves, and MOVE Index data were not fully available through public interfaces, so the analysis uses FedWatch-style probabilities and Treasury yields as proxies.

## Q3 After AI and Semiconductor Earnings, Were Single-Name Realized Moves Systematically Above Implied Moves?

### Method

For AMD, PLTR, DIS, AKAM, and MNST, I calculated 1-day realized moves from the pre-earnings close to the post-earnings close. For MU, QCOM, SOXX, and SMH, I calculated weekly returns and 5-day realized volatility as semiconductor beta-spillover proxies. Pre-earnings implied move is included only when publicly verifiable; AMD uses Market Chameleon’s `±8.4%`, and PLTR uses a `9.82%` figure from Investing.com/Options AI search results.[3][6][8][9]

### Findings

| Ticker | Event Window | Pre-Event Close | Post-Event Close | 1-Day Realized Move | Pre-Event Implied Move | Realized - Implied |
|---|---|---:|---:|---:|---:|---:|
| AMD | after `2026-05-05` | `355.26` | `421.39` | `+18.61%` | `8.40%` | `+10.21 pts` |
| PLTR | after `2026-05-04` | `146.03` | `135.91` | `-6.93%` | `9.82%` | `-2.89 pts` |
| DIS | `2026-05-06` | `100.48` | `108.06` | `+7.54%` | Not publicly verifiable | Not applicable |
| AKAM | after `2026-05-07` | `116.69` | `147.71` | `+26.58%` | Not publicly verifiable | Not applicable |
| MNST | after `2026-05-07` | `75.97` | `86.29` | `+13.58%` | Not publicly verifiable | Not applicable |

| Ticker | Weekly Close-to-Close Return | 5-Day Realized Vol |
|---|---:|---:|
| AMD | `+33.28%` | `148.53%` |
| MU | `+29.55%` | `128.56%` |
| QCOM | `+30.12%` | `52.79%` |
| SOXX | `+12.60%` | `63.28%` |
| SMH | `+11.79%` | `50.96%` |

AMD is the clean case where realized move beat implied move: the actual 1-day move of `+18.61%` was `2.22` times the `±8.4%` expected move. PLTR went the other way, with a `-6.93%` move versus a `9.82%` expected move. AKAM, MNST, and DIS had large realized moves, but without publicly verifiable pre-earnings implied moves, they cannot be included in a strict implied-versus-realized win/loss tally. The strategy conclusion is that long dispersion/short index variance is worth researching, but the trade should be built around AMD/semiconductor chain names and available option panels rather than an incomplete public sample.

### Evidence

AMD reported Q1 revenue of `10.3 billion`, up `+38%` year over year, Data Center revenue of `5.8 billion`, up `+57%`, and Q2 revenue guidance of about `11.2 billion ± 300 million`.[6] AMD’s pre-earnings implied move comes from Market Chameleon.[9] Price series are from the Yahoo Finance chart API.[3]

### Caveats

Market Chameleon, OptionSlam, Options AI, and similar event-volatility sources use different definitions, including “expected post-earnings move,” “weekly straddle move,” and “ATM IV implied move.” Without original OptionMetrics/ORATS chains, IV crush, skew, and vega P&L cannot be verified systematically.

## Q4 Do Treasury Refunding and a 30Y Yield Near `4.9%` Create an Equity-Volatility Trigger?

### Method

I used the U.S. Treasury `2026-05-06` Quarterly Refunding Statement for issuance sizes; Yahoo Finance `^TNX` and `^TYX` provide daily 10Y/30Y yield proxies, which are compared with SPX and NDX prices over the same window.[3][5]

### Findings

| Item | Value |
|---|---:|
| 2Y note | `$69 billion` |
| 3Y note | `$58 billion` |
| 5Y note | `$70 billion` |
| 7Y note | `$44 billion` |
| 10Y note | `$42 billion` |
| 20Y bond | `$16 billion` |
| 30Y bond | `$25 billion` |
| FRN | `$28 billion` |
| 10Y on `2026-05-08` | `4.364%` |
| 30Y on `2026-05-08` | `4.947%` |

Yields did not stop technology stocks from rallying this week, and that is the risk: NDX rose `5.73%` while the 30Y still closed at `4.947%`, so earnings optimism temporarily dominated valuation-duration pressure. The refunding sizes confirm that long-end supply remains a term-premium variable. If the 30Y yield breaks back above `5.00%`, NDX call chasing can turn into a volatility trigger. In options, naked short crash convexity in NDX/SPX is unattractive; put spreads, put calendars, or rates/equity relative-value structures are cleaner ways to control theta.

### Evidence

U.S. Treasury Quarterly Refunding Statement, `2026-05-06`.[5] Yahoo Finance chart API: `^TNX`, `^TYX`, `^GSPC`, and `^NDX`.[3]

### Caveats

This report does not include full auction-level data such as WI yield, auction tail/stop-through, bid-to-cover, primary dealer takedown, swap spreads, or Treasury futures basis. The conclusion should be updated after next week’s 10Y and 30Y auctions.

## Q5 Do Lower Oil and Higher Gold Mean Inflation Risk Was Cut While Geopolitical Hedges Were Retained?

### Method

I pulled daily closes for `CL=F`, `GC=F`, USO, GLD, XLE, DXY, and TLT from the Yahoo Finance chart API, then calculated 1-day, 5-day, YTD returns and annualized 5-day realized volatility.[3]

### Findings

| Instrument | `2026-05-08` 1-Day Return | Weekly Return | YTD Return | 5-Day Realized Vol |
|---|---:|---:|---:|---:|
| CL | `+0.64%` | `-10.34%` | `+66.47%` | `55.90%` |
| USO | `-1.02%` | `-9.50%` | Not calculated | `53.35%` |
| GC | `+0.44%` | `+4.45%` | `+9.41%` | `17.92%` |
| GLD | `+0.48%` | `+4.60%` | Not calculated | `20.58%` |
| XLE | `-0.45%` | `-6.21%` | `+22.02%` | `29.89%` |
| DXY | `-0.42%` | `-0.64%` | `-0.59%` | `5.39%` |
| TLT | `+0.50%` | `+1.32%` | `-1.09%` | `8.95%` |

Oil fell sharply this week but still has a very large year-to-date gain, so this is not a full clearing of inflation risk. Gold and GLD rose together, DXY slipped, and TLT gained modestly, which points to a mix of haven demand and marginal real-rate relief supporting gold. XLE followed oil lower, suggesting energy-equity options are closer to oil beta and earnings beta, while gold options are cleaner macro/geopolitical tail hedges. Cross-asset relative value favors GLD call spreads or GLD/USO volatility relative value over outright oil chasing.

### Evidence

Yahoo Finance chart API: `CL=F`, `GC=F`, USO, GLD, XLE, DXY, and TLT.[3] AP provided news context on Friday’s oil move and geopolitical uncertainty.[1]

### Caveats

NYMEX/ICE option IV, risk reversals, CFTC COT positioning, and daily futures-curve data are missing, so the report cannot determine whether volatility risk premium and speculative positioning moved in the same direction.

## Q6 For Next Week, Should the Best Option Expression Favor Direction, Volatility, Curve, or Cross-Asset Relative Value?

### Method

I combined this week’s realized/implied volatility, post-payroll Fed path, long-end yields, and next-week catalysts. Key events include BLS CPI, PPI, Treasury auctions, major earnings, and weekly option expiries; structures are ranked by trigger conditions rather than by a single-point forecast.[11][12][13]

### Findings

| Structure | Bias | Trigger | Main Risk |
|---|---|---|---|
| SPX put spread | Neutral to positive | VIX9D below VIX and protection cheap before CPI/PPI | Positive gamma and record-high momentum keep realized vol low |
| NDX call spread overwrite | Neutral to positive | Crowded upside after NDX rises `5.73%` | AI earnings keep breaking upper strikes |
| SMH dispersion | Research positive | AMD, MU, and QCOM realized vol far above index vol | Single-name IV has already repriced; entry quality worsens |
| GLD call spread | Positive | Gold up `+4.45%` this week with DXY lower | Real yields rebound and pressure gold |
| USO/XLE relative vol | Research positive | CL down `-10.34%`, USO RV `53.35%`, XLE RV `29.89%` | Oil headline gaps are hard to delta hedge |
| Rates/equity convexity pair | Research positive | 30Y near `5.00%` while NDX makes new highs | Lower yields cause equity put leg decay |

The best expression is not a single outright directional bet; it is a limited-loss mix of event volatility and cross-asset relative value. SPX implied volatility is still above short-term realized volatility, so outright long index vol needs an event trigger. NDX/SMH are better expressed through spreads or dispersion that capture single-name tails. The rates/equity pair is the most important hedge to keep on the worksheet because the 30Y yield at `4.947%` is close to re-triggering valuation pressure. In commodities, gold is cleaner than oil as a hedge expression, while oil is better suited for relative-volatility or curve structures.

### Evidence

BLS CPI/PPI release calendars, Treasury refunding documents, Cboe option calendars, and Yahoo Finance price series.[3][5][11][12][13]

### Caveats

This report does not include next-week CPI/PPI consensus, full earnings whispers, SPX/NDX weekly option open interest, or original VIX futures term-structure terminal data. The structures are a research watchlist, not execution instructions.

## Data Tables for Visualization

### Chart 1: Indexes and Volatility

| Date | SPX Normalized | NDX Normalized | RUT Normalized | VIX | VIX9D |
|---|---:|---:|---:|---:|---:|
| `2026-05-04` | `100.00` | `100.00` | `100.00` | `18.29` | `16.60` |
| `2026-05-05` | `100.81` | `101.31` | `101.75` | `17.38` | `14.64` |
| `2026-05-06` | `102.28` | `103.43` | `103.25` | `17.39` | `14.76` |
| `2026-05-07` | `101.89` | `103.30` | `101.56` | `17.08` | `14.56` |
| `2026-05-08` | `102.75` | `105.73` | `102.33` | `17.19` | `14.21` |

### Chart 2: Earnings Implied Move vs Realized Move

The original chart cannot be fully populated: pre-earnings ATM straddle implied moves for AKAM, MNST, DIS, MU, QCOM, SOXX, and SMH are not publicly verifiable as daily data. The substitute table is a “verifiable implied sample plus realized move sample.”

| Ticker | Earnings/Event Window | Realized Move | Implied Move | Data Status |
|---|---|---:|---:|---|
| AMD | after `2026-05-05` to `2026-05-06` close | `+18.61%` | `8.40%` | Complete |
| PLTR | after `2026-05-04` to `2026-05-05` close | `-6.93%` | `9.82%` | Complete, but source is not an exchange-original chain |
| DIS | `2026-05-05` to `2026-05-06` close | `+7.54%` | Not publicly verifiable | Substitute point |
| AKAM | `2026-05-07` to `2026-05-08` close | `+26.58%` | Not publicly verifiable | Substitute point |
| MNST | `2026-05-07` to `2026-05-08` close | `+13.58%` | Not publicly verifiable | Substitute point |

### Chart 3: Rates-Equity Pressure Panel

| Date | 10Y Yield | 30Y Yield | SPX Normalized | NDX Normalized |
|---|---:|---:|---:|---:|
| `2026-05-04` | `4.446%` | `5.025%` | `100.00` | `100.00` |
| `2026-05-05` | `4.416%` | `4.984%` | `100.81` | `101.31` |
| `2026-05-06` | `4.356%` | `4.943%` | `102.28` | `103.43` |
| `2026-05-07` | `4.392%` | `4.969%` | `101.89` | `103.30` |
| `2026-05-08` | `4.364%` | `4.947%` | `102.75` | `105.73` |

### Chart 4: Cross-Asset Risk Heatmap

| Instrument | `2026-05-08` 1-Day Return | Weekly Return | YTD Return | 5-Day Realized Vol |
|---|---:|---:|---:|---:|
| SPX | `+0.84%` | `+2.75%` | `+7.88%` | `12.21%` |
| NDX | `+2.35%` | `+5.73%` | `+15.98%` | `17.62%` |
| RUT | `+0.76%` | `+2.33%` | `+14.07%` | `24.41%` |
| XLE | `-0.45%` | `-6.21%` | `+22.02%` | `29.89%` |
| XLK | `+3.44%` | `+8.31%` | `+21.64%` | `24.89%` |
| CL | `+0.64%` | `-10.34%` | `+66.47%` | `55.90%` |
| Gold | `+0.44%` | `+4.45%` | `+9.41%` | `17.92%` |
| DXY | `-0.42%` | `-0.64%` | `-0.59%` | `5.39%` |
| TLT | `+0.50%` | `+1.32%` | `-1.09%` | `8.95%` |

### Chart 5: Options Surface Snapshot

The original table cannot be fully populated publicly: 1W/1M IV, 25-delta put skew, term-structure slope, and put/call volume for SPX, NDX, IWM, SMH, XLE, GLD, and USO require OptionMetrics/ORATS/Cboe raw chains or a broker terminal. The substitute is an auditable volatility proxy table.

| Instrument/Proxy | 1W/Front-End Vol Proxy | 1M/Mid-Curve Vol Proxy | Term Structure | Put/Call Volume |
|---|---:|---:|---:|---|
| SPX | VIX9D `14.21` | VIX `17.19` | `+2.98 vol pts` | Not publicly verifiable |
| SPX 3M | VIX `17.19` | VIX3M `20.50` | `+3.31 vol pts` | Not publicly verifiable |
| VVIX | VVIX `96.78` | Not applicable | vol-of-vol above `90` | Not publicly verifiable |
| IWM/RUT | RUT 5D RV `24.41%` | No public IV | Not applicable | Not publicly verifiable |
| SMH | SMH 5D RV `50.96%` | No public IV | Not applicable | Not publicly verifiable |
| XLE | XLE 5D RV `29.89%` | No public IV | Not applicable | Not publicly verifiable |
| GLD | GLD 5D RV `20.58%` | No public IV | Not applicable | Not publicly verifiable |
| USO | USO 5D RV `53.35%` | No public IV | Not applicable | Not publicly verifiable |

## Follow-Up Data Needs

1. Use OptionMetrics/ORATS or Cboe raw chains to fill 1W/1M IV, 25-delta skew, and put/call volume for SPX, NDX, IWM, SMH, XLE, GLD, and USO.
2. Verify Investing.com FOMC probabilities against original CME Fed funds/SOFR futures settlements.
3. After next week’s CPI/PPI and 10Y/30Y auctions, update the rates/equity convexity trigger levels.
4. Rebuild AMD, AKAM, MNST, DIS, and PLTR with a consistent pre-earnings ATM straddle and post-earnings IV-crush framework.

## Sources

[1] AP News, “How major US stock indexes fared Friday 5/8/2026,” https://apnews.com/article/wall-street-stocks-dow-nasdaq-b7ff696f0770489a60427121a6931ada  
[2] U.S. Bureau of Labor Statistics, “The Employment Situation -- April 2026,” https://www.bls.gov/news.release/archives/empsit_05082026.htm  
[3] Yahoo Finance chart API, `query2.finance.yahoo.com/v8/finance/chart/{symbol}`, downloaded `2026-05-10`, symbols include `^GSPC`, `^NDX`, `^RUT`, `^VIX`, `^VIX9D`, `^VIX3M`, `^VVIX`, `SPY`, `QQQ`, `IWM`, `XLK`, `XLE`, `GLD`, `USO`, `TLT`, `DX-Y.NYB`, `CL=F`, `GC=F`, `AMD`, `AKAM`, `MNST`, `DIS`, `PLTR`, `MU`, `QCOM`, `SOXX`, `SMH`, `^TNX`, `^TYX`.  
[4] Investing.com, Fed Rate Monitor Tool, https://www.investing.com/central-banks/fed-rate-monitor  
[5] U.S. Department of the Treasury, “Quarterly Refunding Statement,” `2026-05-06`, https://home.treasury.gov/news/press-releases/sb0489  
[6] AMD, “AMD Reports First Quarter 2026 Financial Results,” `2026-05-05`, https://ir.amd.com/news-events/press-releases/detail/1284/amd-reports-first-quarter-2026-financial-results  
[7] Monster Beverage, “Monster Beverage Reports 2026 First Quarter Financial Results,” https://investors.monsterbevcorp.com/news-releases/news-release-details/monster-beverage-reports-2026-first-quarter-financial-results  
[8] Akamai Technologies, “Akamai Technologies Reports First Quarter 2026 Financial Results,” https://www.globenewswire.com/news-release/2026/05/07/3077176/0/en/Akamai-Technologies-Reports-First-Quarter-2026-Financial-Results.html  
[9] Market Chameleon, “AMD Markets are Pricing a Large Earnings Move,” `2026-05-05`, https://marketchameleon.com/articles/i/2026/5/5/29870-amd-markets-are-pricing-a-large-earnings-move  
[10] OptionSlam, AMD earnings option page, https://www.optionslam.com/earnings/weekly/AMD  
[11] BLS CPI release schedule, https://www.bls.gov/schedule/news_release/cpi.htm  
[12] BLS PPI release schedule, https://www.bls.gov/schedule/news_release/ppi.htm  
[13] Cboe options expiration calendar, https://www.cboe.com/tradable_products/sp_500/spx_options/specifications/  
[14] Cboe, “2025 State of the Options Industry,” https://www.cboe.com/insights/posts/2025-state-of-the-options-industry/
