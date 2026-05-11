---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Research Plan: Execution Algos, HF Signals, and Market Microstructure

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Research Plan: Execution Algos, HF Signals, and Market Microstructure

Coverage window: 2026-05-04 (Monday) → 2026-05-08 (Friday)

Date anchor: this plan resolves “this week / previous trading day / most recent completed trading week” against the local `date +%Y-%m-%d` output of `2026-05-10`. The primary market assumption is U.S. equities; the NYSE holiday calendar shows no NYSE holiday from 2026-05-04 through 2026-05-08, so all five dates are included in trading-day metrics.[^nyse]

## Prioritized Conclusions for the Research Stage

1. The price narrative was “early-week geopolitical risk, midweek repair on lower oil, and a Friday jobs-driven record close”: the S&P 500 rose `2.3%` on the week to `7,398.93`, Nasdaq rose `4.5%` to `26,247.08`, Dow rose `0.2%` to `46,476.71`, and Russell 2000 rose `1.7%` to `2,576.56`.[^ap-fri]
2. For execution algos, the key issue is not daily direction but order-book regime shifts: the 2026-05-04 risk discount, 2026-05-06 trend day, 2026-05-07 pullback, and 2026-05-08 strong close require separate treatment of opening gaps, the 10:00 ET macro window, afternoon liquidity, and the closing auction.
3. Macro events should be used as microstructure timestamps: ISM Services PMI printed `53.6` on 2026-05-05, while BLS reported nonfarm payrolls of `+115,000` and an unemployment rate of `4.3%` on 2026-05-08; the research stage should validate these windows using trades, NBBO, depth, spreads, and short-horizon impact costs.[^ism][^bls]
4. Options and off-exchange liquidity are necessary context: Cboe shows U.S. Options ADV of `19.7M` contracts, U.S. Equities ADV of `$84.4B` notional, and U.S. Futures ADV of `213.3K` contracts; SIFMA’s 2026-04 market-structure data shows U.S. equity ADV of `17.8B` shares, off-exchange share of `48.9%`, and listed-options ADV of `66.5M` contracts. The report should use these as routing and book-quality baselines rather than relying on a simple index story.[^cboe][^sifma]

## 1. Scope: Key Developments During the Coverage Window

| Priority | Date | What happened | Why it matters for algo trading and microstructure | Key source |
|---:|---|---|---|---|
| 1 | 2026-05-08 | U.S. labor data beat expectations: BLS reported 2026-04 nonfarm payroll gains of `115,000` and an unemployment rate of `4.3%`; AP reported the S&P 500 up `0.9%` and Nasdaq up `1.7%`, with both at record highs. | Spreads, depth, cancel rates, volume curves, and the closing auction after the 8:30 ET macro release may be the week’s most important execution-cost window. | [^bls][^ap-fri] |
| 2 | 2026-05-06 | Lower oil prices supported the risk-asset rebound: AP reported Brent below `$102`, with S&P 500 `+1.5%`, Dow `+1.0%`, Nasdaq `+2.0%`, and Russell 2000 `+1.5%`. | A trend day is the right setting to test order-flow imbalance, book replenishment speed, VWAP/TWAP deviation, and the opportunity cost of chasing liquidity. | [^ap-wed] |
| 3 | 2026-05-04 | Geopolitical risk pressured risk appetite at the start of the week: AP reported Dow `-1.1%`, S&P 500 `-0.4%`, Nasdaq `-0.2%`, and Russell 2000 `-0.6%`. | Opening gaps and defensive rotation alter optimal participation, dark-pool hit rates, and adverse selection on passive orders. | [^ap-mon] |
| 4 | 2026-05-05 | ISM Services PMI printed `53.6`, remaining in expansion; the same day, AP reported S&P 500 `+0.8%`, Nasdaq `+1.0%`, and Russell 2000 `+1.8%`. | The 10:00 ET data window is a natural experiment for testing short-horizon signal decay, quote-recovery time, and macro event filters. | [^ism][^ap-tue] |
| 5 | 2026-05-07 | The market gave back part of the midweek rally: AP reported S&P 500 `-0.4%`, Nasdaq `-0.1%`, and Russell 2000 `-1.6%`. | A reversal day helps identify momentum-signal failure, stop-loss cascades, short-term crowding, and the liquidity discount in small caps. | [^ap-thu] |
| 6 | 2026-05-08 | Technology and semiconductors led: Kiplinger reported the technology sector up `3.27%` and Intel up `13.9%`; TheStreet reported a `4.5%` weekly Nasdaq gain. | Sector concentration affects basket impact costs, single-name queue priority, and ETF hedge-leg slippage. | [^kip][^thestreet] |
| 7 | 2026-05-08 | Trading-structure context remained highly active: Cboe shows U.S. Options ADV of `19.7M` contracts and U.S. Equities ADV of `$84.4B`; SIFMA reported 2026-04 off-exchange share of `48.9%`. | The weekly should measure exchange, off-exchange, options, and futures liquidity separately so an index rally is not misread as broad improvement across execution settings. | [^cboe][^sifma] |

## 2. Questions the Weekly Must Answer

| ID | Analytical question | Research objective |
|---|---|---|
| Q1 | Was the week’s rally a high-quality breadth expansion, or was it concentrated in Nasdaq, technology, and semiconductors? | Separate tradable breadth improvement from crowded single-sector momentum. |
| Q2 | Did the macro event windows, 2026-05-05 10:00 ET and 2026-05-08 8:30 ET, materially lift short-horizon impact costs? | Parameterize event-day execution schedules, pause rules, and limit-price offsets. |
| Q3 | During the 2026-05-04 risk shock and the 2026-05-07 pullback, which HF signals failed or reversed first? | Test the robustness of order-flow imbalance, short-term momentum, quote skew, and depth signals. |
| Q4 | After Friday’s labor data, did options flow, 0DTE gamma, and ETF hedging amplify the index trend into the close? | Decide whether strong macro days require options-sensitivity constraints in SPY/QQQ/IWM execution algos. |
| Q5 | Did off-exchange share, exchange spreads, and closing-auction size change optimal routing for large orders during the week? | Convert the weekly price narrative into venue selection, participation caps, and dark/lit routing guidance. |
| Q6 | How did oil prices and Middle East risk transmit into relative liquidity for energy, airlines, transportation, semiconductors, and small caps? | Build a cross-asset explanation for equity-basket execution costs. |

## 3. Data Needs and Fresh Search Tasks

| Question | Required data series and indicators | Fresh web queries or sources to run |
|---|---|---|
| Q1 | `SPX`, `NDX`, `DJIA`, `RUT`, `SPY`, `QQQ`, and `IWM` intraday and daily returns; daily returns for all 11 GICS sectors; S&P 500 equal-weight index; advance/decline, new highs/new lows, and up/down volume. | `S&P 500 sector returns May 8 2026 technology +3.27%`; `Nasdaq weekly gain 4.5% May 8 2026`; AP daily market roundups; official exchange closing data. |
| Q2 | Trades, NBBO, top-of-book depth, quoted/effective/realized spread, cancel/replace rate, trade sign, and volume curve for 2026-05-05 09:45-10:30 ET and 2026-05-08 08:25-10:00 ET. | Official ISM `April 2026 Services PMI 53.6`; official BLS `Employment Situation April 2026 115,000 4.3%`; Bloomberg/Refinitiv economic surprise; TAQ/SIP data. |
| Q3 | 1-second, 5-second, and 1-minute order-flow imbalance; mid-price return; queue imbalance; spread widening; short-term alpha decay; execution slippage in the first and last 30 minutes. | `AP stock market May 4 2026 Dow S&P Nasdaq Russell`; `AP stock market May 7 2026 Russell 2000 -1.6%`; internal tick replay and LOB data. |
| Q4 | SPX/SPY/QQQ/IWM options volume, put/call, 0DTE share, gamma exposure, dealer delta-hedge proxy, VIX/VVIX, and implied-realized spread. | Cboe market statistics; OCC daily volume; `0DTE options volume May 8 2026 SPX SPY QQQ`; OptionMetrics or internal options-chain snapshots. |
| Q5 | Exchange and ATS venue fill rate; lit/dark share; off-exchange share; auction imbalance; MOC/LOC prints; maker-taker fee tier; short-sale constraint; odd-lot share. | SIFMA U.S. equity market structure April 2026; Cboe U.S. equities market volume; Nasdaq/NYSE trader updates; FINRA ATS/OTC transparency data. |
| Q6 | Intraday returns, volume, spread, realized volatility, ETF premium/discount, and correlations for Brent, WTI, USO, XLE, XOP, JETS, IYT, SOXX, SMH, and IWM. | `Brent below 102 May 6 2026 stocks`; EIA/ICE/CME oil data; AP energy-price paragraphs; ETF sponsor daily holdings and volume. |

## 4. Recommended Visualizations and Tables

| Exhibit | Design | Axes and series | Intended takeaway |
|---|---|---|---|
| Chart 1: Major-index path through the week | Line chart indexed to the 2026-05-04 open or prior close at `100`. | X-axis is 5-minute or 30-minute time from 2026-05-04 to 2026-05-08; Y-axis is cumulative return; series are `SPX`, `NDX`, `DJIA`, and `RUT`. | Show the different timing of the early-week shock, midweek repair, and Friday record close. |
| Chart 2: Event-window liquidity shock | Dual-axis event chart. | X-axis is minutes around the event; left axis is effective spread or slippage in bps; right axis is volume divided by normal volume; events are ISM 2026-05-05 10:00 ET and BLS 2026-05-08 8:30 ET. | Quantify the immediate impact and recovery time of macro releases on execution cost. |
| Chart 3: Sector and theme return heatmap | Heatmap or bar chart. | Rows are GICS sectors and theme ETFs (`SOXX`, `SMH`, `XLE`, `IYT`, `JETS`, `IWM`); columns are the five trading days; color is daily return. | Determine whether the rally was concentrated in technology/semiconductors or broadened into cyclicals and small caps. |
| Chart 4: Options and cash-equity linkage panel | Four-panel chart. | SPX/SPY/QQQ 0DTE volume, put/call, dealer gamma proxy, and 5-minute ETF returns. | Test whether options activity amplified Friday’s post-payroll trend. |
| Table 5: Venue-quality matrix | Table by ticker × venue × time bucket. | Metrics are fill rate, effective spread, realized spread, median queue time, dark hit rate, and auction share. | Convert the market narrative into actionable routing and participation settings for next week. |

## 5. Final Weekly Report Outline

1. **Executive summary**: Present 5-7 conclusions on the week’s trading environment, best-execution risks, and algo-parameter focus for next week.
2. **Market state and weekly price path**: Review indices, sectors, theme ETFs, and key cross-asset variables to define the 2026-05-04 to 2026-05-08 narrative.
3. **Event-day microstructure**: Use the ISM and BLS timestamps to show how spreads, depth, volume curves, and impact costs changed.
4. **HF signal performance**: Evaluate order-flow imbalance, queue imbalance, short-term momentum, spread reversion, and close imbalance across trend and reversal days.
5. **Options, ETFs, and the closing auction**: Analyze how 0DTE activity, SPY/QQQ/IWM hedging, MOC/LOC flow, and closing volume affected late-day price paths.
6. **Execution recommendations**: Provide next-week settings for participation caps, event pauses, limit offsets, dark/lit routing, and auction participation.
7. **Risks and open checks**: List data gaps, assumptions, abnormal tickers, corporate events to exclude, and macro/policy events to monitor next week.

## 6. Follow-Up Checklist

- Pull and validate TAQ/SIP/LOB data covering `2026-05-04 09:30 ET` through `2026-05-08 16:00 ET`.
- Align every macro timestamp to `America/New_York` to avoid Singapore-date mismatches.
- Mark the 30 minutes before and after the 2026-05-08 payroll release, the 30 minutes before and after the 2026-05-05 ISM release, and the first/last 30 minutes of each session.
- Separate normal hours, opening auction, closing auction, and extended hours; trading-day metrics should use the regular session unless a chart explicitly says otherwise.
- Check ticker corporate actions, index rebalances, abnormal halts, and gaps in trade data.

## References

[^nyse]: NYSE, “Holidays and Trading Hours,” https://www.nyse.com/markets/hours-calendars
[^ap-mon]: AP News, “How major US stock indexes fared Monday, 5/4/2026,” https://apnews.com/article/0794d2ebc6d1ada7ba72362dc382becc
[^ap-tue]: AP News, “How major US stock indexes fared Tuesday, 5/5/2026,” https://apnews.com/article/0ed471110787252b35d08ec13838276a
[^ap-wed]: AP News, “How major US stock indexes fared Wednesday, 5/6/2026,” https://apnews.com/article/01820e2c9b2bb179fb8f0d8d43ad56ae
[^ap-thu]: AP News, “How major US stock indexes fared Thursday, 5/7/2026,” https://apnews.com/article/0f95cd26e78bb4c39bef5e21be68afda
[^ap-fri]: AP News, “How major US stock indexes fared Friday, 5/8/2026,” https://apnews.com/article/2f72f784342b00de78fc156abd1206b5
[^bls]: U.S. Bureau of Labor Statistics, “Employment Situation Summary,” https://www.bls.gov/news.release/empsit.nr0.htm
[^ism]: Institute for Supply Management, “Services PMI,” https://www.ismworld.org/supply-management-news-and-reports/reports/ism-report-on-business/services/
[^kip]: Kiplinger, “S&P 500, Nasdaq Close Week at New Highs: Stock Market Today,” https://www.kiplinger.com/investing/stocks/s-and-p-500-nasdaq-close-week-at-new-highs-stock-market-today
[^thestreet]: TheStreet, “Stock Market Today: Stocks Finish Higher as Nvidia Leads Tech Higher,” https://www.thestreet.com/investing/stocks/stock-market-today-stocks-finish-higher-as-nvidia-leads-tech-higher
[^cboe]: Cboe Global Markets, “Market Statistics,” https://www.cboe.com/us/options/market_statistics/
[^sifma]: SIFMA, “US Equity and Related Markets Statistics,” https://www.sifma.org/resources/research/us-equity-and-related-markets-statistics/
[^te]: Trading Economics, “United States Non Farm Payrolls,” https://tradingeconomics.com/united-states/non-farm-payrolls
