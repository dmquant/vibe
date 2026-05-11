---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Derivatives Strategy Weekly Research Plan

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Derivatives Strategy Weekly Research Plan

Coverage window: 2026-05-04 (Monday) → 2026-05-08 (Friday)

Date anchor: `date +%Y-%m-%d` returned `2026-05-10`. The primary market assumption is U.S. equities, index options, equity-index futures, rates derivatives, and commodity derivatives. The NYSE 2026 holiday calendar lists Memorial Day on 2026-05-25; there was no major U.S. exchange holiday inside this window, so all five trading days from 2026-05-04 through 2026-05-08 are included.[10]

## Priority Conclusions

1. The week’s core story was “AI/tech earnings-driven index records” alongside “still-resilient labor data”: the S&P 500 rose `2.3%` on the week to `7,398.93`, while the Nasdaq Composite rose `4.5%` to `26,247.08`; both closed Friday at records.[1]
2. The macro data did not clearly validate an easing trade: April payrolls increased by `115,000`, unemployment held at `4.3%`, and average hourly earnings rose `+0.2% m/m` and `+3.6% y/y`; the research stage must test whether rates options and equity volatility are still underpricing the tail risk of “higher for longer.”[2]
3. The volatility report should focus less on direction alone and more on the mismatch among realized volatility, implied volatility, and event premia: before AMD earnings, options implied an approximate `±8.4%` post-earnings move, while the company reported Q1 revenue of `10.3 billion`, up `+38%` year over year, and Data Center revenue of `5.8 billion`, up `+57%`, which matters for semiconductor and AI-basket dispersion trades.[6][7]
4. Rates and commodities were the main constraints on the equity rally: the 10Y Treasury ended at `4.36%`, the 30Y Treasury at `4.94%`; Crude Oil fell from `101.94` to `95.87`, while Gold rose from `4,644.50` to `4,723.70`. The research stage should integrate yields, oil, gold, and equity volatility into one risk framework.[5]

## 1. Scope: The 7 Most Important Developments

| Priority | Date | What happened | Why it matters for derivatives |
|---:|---|---|---|
| 1 | 2026-05-08 | U.S. April payrolls increased by `115,000`, unemployment stayed at `4.3%`, average hourly earnings rose `+0.2% m/m` and `+3.6% y/y`, and February/March were revised down by a combined `16,000`.[2] | This affects the Fed path, SOFR/Fed funds futures, rates volatility, and option skew in SPX rate-sensitive sectors. |
| 2 | 2026-05-08 | The S&P 500 rose `0.8%` Friday to `7,398.93`, and the Nasdaq Composite rose `1.7%` to `26,247.08`; weekly gains were `2.3%` and `4.5%`, respectively, with both closing at records.[1] | The report must assess dealer gamma, 0DTE flows, call-chasing, and the cost of drawdown protection after new highs. |
| 3 | 2026-05-05 to 2026-05-06 | AMD reported Q1 revenue of `10.3 billion`, up `+38%` year over year, Data Center revenue of `5.8 billion`, up `+57%`, and Q2 revenue guidance of about `11.2 billion ± 300 million`; pre-earnings options implied about a `±8.4%` move.[6][7] | Semiconductor, AI infrastructure, and mega-cap tech single-name option premia may dominate Nasdaq and SOX dispersion. |
| 4 | 2026-05-06 | Treasury released its quarterly refunding plan: May-26 issuance was set at 2Y `69 billion`, 3Y `58 billion`, 5Y `70 billion`, 7Y `44 billion`, 10Y `42 billion`, 20Y `16 billion`, 30Y `25 billion`, and FRN `28 billion`; May-Jul TIPS sizes were held unchanged.[4] | Long-end supply and term premium jointly drive rates swaps, Treasury futures, equity duration, and volatility surfaces. |
| 5 | 2026-05-07 to 2026-05-08 | The 10Y Treasury was `4.36%`, almost unchanged from `4.37%` the prior week; the 30Y Treasury was `4.94%`, slightly down from `4.96%`; 5Y expected inflation was `2.63%`.[5] | Equity records occurred while real-rate constraints remained firm, so the research must test negative-convexity risk in high-valuation assets. |
| 6 | 2026-05-07 to 2026-05-08 | Commodities diverged: Crude Oil fell for the week from `101.94` to `95.87`, while Gold rose from `4,644.50` to `4,723.70`; AP also noted that Iran-war uncertainty pushed oil higher on Friday.[1][5] | Oil and gold options can express geopolitical risk, inflation tails, and equity-hedge substitution across asset classes. |
| 7 | 2026-05-08 | Post-earnings single-name dispersion widened: AKAM rose `16.5%` after Q1 results and raised FY26 sales guidance, while AP highlighted MNST and AKAM as Friday market leaders.[1][8] | The research should compare single-name earnings realized moves with implied moves to identify earnings-vol selling, calendar-spread, and dispersion opportunities. |

## 2. Questions the Weekly Must Answer

1. After record index closes, are SPX, NDX, and RUT implied volatilities too low, or are they being rationally suppressed by positive gamma and 0DTE flows?
2. Did the April employment report change June/July/September FOMC pricing in rates futures, and how did that transmit into equity and rates option surfaces?
3. After AI and semiconductor earnings, did single-name realized moves systematically exceed implied moves, creating a case for long dispersion and short index variance?
4. Does Treasury refunding, with the 30Y yield near `4.9%`, create an equity-volatility trigger?
5. Does the combination of oil falling from `101.94` to `95.87` and gold rising to `4,723.70` suggest markets reduced inflation risk while retaining geopolitical hedges?
6. Ahead of next week’s CPI/PPI, 10Y/30Y auctions, and major earnings, should the best option expression emphasize direction, volatility, curve, or cross-asset relative value?

## 3. Data Needs and Fresh Queries

| Linked question | Required data | Preferred sources and queries |
|---|---|---|
| Q1 | Intraday and daily returns for SPX, SPY, NDX, QQQ, RUT, IWM; VIX, VIX9D, VIX3M, VVIX; SPX 0DTE volume, put/call, dealer gamma, major-strike open interest; SPX realized vol 5D/10D/20D. | Cboe, OptionMetrics, ORATS, SpotGamma, Bloomberg `SPX Index OMON`; web queries: `SPX 0DTE volume May 8 2026`, `VIX historical May 8 2026`, `Cboe options volume May 2026`.[11] |
| Q2 | Fed funds futures, SOFR futures, OIS curve, 2Y/5Y/10Y/30Y Treasury yields, MOVE Index; BLS employment, JOLTS, productivity/unit labor costs. | CME FedWatch, CME SOFR, FRED, Treasury, BLS; web queries: `CME FedWatch May 8 2026 June 17 2026`, `BLS Employment Situation April 2026 May 8 2026`.[2][3] |
| Q3 | Earnings dates, pre-earnings implied moves, post-earnings realized moves, IV crush, skew, volume/OI for AMD, AKAM, MNST, DIS, PLTR, MU, QCOM, SOXX, SMH. | Company IR, Market Chameleon, OptionMetrics, Cboe, Nasdaq earnings calendar; web queries: `AMD May 5 2026 implied move 8.4%`, `AKAM Q1 2026 earnings stock move May 8 2026`.[6][7][8] |
| Q4 | Treasury auction sizes, WI yield, auction tail/stop-through, bid-to-cover, primary dealer takedown, 10Y/30Y futures basis, swap spreads, TIPS breakevens. | TreasuryDirect, U.S. Treasury refunding documents, Bloomberg auction pages; web query: `Treasury quarterly refunding May 6 2026 10-year 42 billion 30-year 25 billion`.[4] |
| Q5 | CL, Brent, USO, XLE, Gold, GLD, DXY, 5Y breakeven, energy equity options IV, gold options IV; Iran/Hormuz headlines time-stamped to price moves. | CME/NYMEX, ICE, CFTC COT, WTI/Brent futures curves, AP/Reuters headlines; web queries: `crude oil May 8 2026 Iran uncertainty`, `gold 4723.70 May 8 2026`.[1][5] |
| Q6 | Next-week macro calendar, CPI/PPI consensus, Treasury auction schedule, earnings calendar, SPX/NDX weekly options expiries, VIX futures term structure. | BLS release calendar, Treasury auction calendar, Cboe options calendar, FactSet earnings calendar; web queries: `BLS CPI April 2026 release May 12 2026`, `Cboe options expiration calendar May 2026`. |

## 4. Proposed Charts and Tables

1. **Index and volatility overlay**: left axis shows normalized SPX, NDX, and RUT prices; right axis shows VIX/VIX9D; x-axis covers 2026-05-04 through 2026-05-08. The goal is to show how far “record indices” diverged from volatility behavior.
2. **Earnings implied move vs realized move scatterplot**: x-axis is pre-earnings ATM straddle implied move, y-axis is post-earnings 1D realized move, with AMD, AKAM, MNST, DIS, PLTR, MU, QCOM, SOXX, and SMH in the sample. The goal is to detect systematic underpricing or overpricing of event volatility.
3. **Rates-equity pressure panel**: four small charts for 10Y yield, 30Y yield, 5Y expected inflation, and SPX forward P/E or Nasdaq 100. The goal is to explain high-valuation asset sensitivity to long-end yields.
4. **Cross-asset risk heatmap**: columns are SPX, NDX, RUT, XLE, XLK, CL, Gold, DXY, and TLT; rows are 1D, 5D, YTD returns, and 5D realized vol. The goal is to separate “tech beta” from “geopolitical/inflation hedges.”
5. **Option-surface snapshot table**: 1W/1M implied vol, 25-delta put skew, term-structure slope, and put/call volume for SPX, NDX, IWM, SMH, XLE, GLD, and USO. The goal is to translate next week’s setup into executable structures.

## 5. Final Weekly Report Outline

1. **Executive Summary**: five bullets on the week’s market narrative, volatility pricing, and the most important risk for next week.
2. **Market and Volatility Review**: review SPX/NDX/RUT, the VIX curve, 0DTE, and dealer gamma effects on the price path.
3. **Macro and Rates Derivatives**: explain how employment, JOLTS, productivity/unit labor costs, and Treasury refunding affected the Fed path, SOFR, and Treasury futures.
4. **Single-Name Earnings and Dispersion**: use AMD, AKAM, MNST, and peers to compare implied moves, realized moves, IV crush, and sector beta.
5. **Commodities and Geopolitical Hedges**: connect crude oil, gold, energy equities, and inflation/geopolitical tail risk.
6. **Trade Structure Watchlist**: list structures to research but not yet recommend, such as SPX put spread, NDX call-spread overwrite, SMH dispersion, GLD call spread, and USO/XLE relative volatility.
7. **Next-Week Catalysts and Data Checklist**: list CPI/PPI, Treasury auctions, earnings, options expiries, and thresholds that must be updated.

## 6. Follow-Up Execution Items

- Reconcile close-time conventions for all price series: cash index 16:00 ET, ETF extended close, and futures settlement prices must not be mixed.
- Timestamp every dataset updated after 2026-05-08 to avoid treating weekend or next-week expectations as facts from this week.
- For every single-name option sample, retain implied move, realized move, and post-earnings IV crush; do not compare stock returns alone.
- Verify all web-sourced figures first against official or primary sources: BLS, Treasury, Cboe, CME, and company IR.

## Sources

[1] AP News, “How major US stock indexes fared Friday 5/8/2026,” https://apnews.com/article/wall-street-stocks-dow-nasdaq-b7ff696f0770489a60427121a6931ada  
[2] U.S. Bureau of Labor Statistics, “The Employment Situation -- April 2026,” https://www.bls.gov/news.release/archives/empsit_05082026.htm  
[3] U.S. Bureau of Labor Statistics homepage release list, May 2026 productivity/JOLTS notes, https://www.bls.gov/home.htm  
[4] U.S. Department of the Treasury, “Quarterly Refunding Statement,” 2026-05-06, https://home.treasury.gov/news/press-releases/sb0489  
[5] Washington Trust Bank, “Fixed Income & Equities Markets Week in Review | May 08, 2026,” https://www.watrust.com/articles/week-in-review-may-08-2026  
[6] AMD, “AMD Reports First Quarter 2026 Financial Results,” 2026-05-05, https://fortune.com/company-assets/714/quartr/earnings-release-8-k-9a9ff-2026-05-05-20-32-15.pdf  
[7] Market Chameleon, “AMD Markets are Pricing a Large Earnings Move,” 2026-05-05, https://marketchameleon.com/articles/i/2026/5/5/29870-amd-markets-are-pricing-a-large-earnings-move  
[8] Benzinga, “Monster Beverage, Westrock Coffee, Himax Technologies And Other Big Stocks Moving Higher On Friday,” 2026-05-08, https://www.benzinga.com/trading-ideas/movers/26/05/52412161/monster-beverage-westrock-coffee-himax-technologies-and-other-big-stocks-moving-higher-on-friday  
[9] Financial Synergies Wealth Advisors, “Weekly Market Recap | May 8, 2026,” https://www.finsyn.com/weekly-market-recap-may-8-2026/  
[10] NYSE, “Holidays & Trading Hours,” https://www.nyse.com/markets/hours-calendars  
[11] Investing.com, “CBOE Volatility Index Historical Data,” https://nl.investing.com/indices/volatility-s-p-500-historical-data
