---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Technical Research: 2026-05-04 to 2026-05-08

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Technical Research: 2026-05-04 to 2026-05-08

**Date anchor:** `date +%Y-%m-%d` = **2026-05-10**. All references to “this week,” “previous trading day,” and “today” resolve against that date.  
**Core conclusion:** The week delivered a **valid breakout, but with concentrated leadership**: SPX closed at 7,398.93, up 2.33% for the week, while NDX gained 5.50% and closed above its upper Bollinger Band. However, RSP rose only 0.63%, showing that new index highs were still driven mainly by technology and semiconductors.

## Priority Conclusions

| Conclusion | Numeric Evidence | Technical Read |
|---|---:|---|
| SPX breakout is valid, but near-term overbought | Close 7,398.93; RSI(14) 74.58; only -0.15% below upper Bollinger Band at 7,409.70 | Trend remains strong, but chasing is less attractive |
| NDX has no material MACD bearish divergence | NDX close 29,234.99; MACD 939.12 at a new swing high; MACD histogram +152.93 | Momentum confirms the new high, not a classic false breakout |
| SHCOMP held MA20 after reopening | Close 4,179.95; MA20 4,072.41; 2.64% above MA20 | Mainland China’s post-holiday structure remains bullish |
| Breadth improved but is uneven | 63.9% of S&P 500 constituents above the 50-day MA; A-D +432; NH-NL +137; RSP +0.63% vs SPY +2.35% | Not a bearish breadth divergence, but large caps carried the move |
| Rotation favored growth | XLK +8.43%; SMH +11.13%; XLE -5.35%; XLU -3.93% | No clear rotation from AI infrastructure into defensives |

## Research Questions

### Question 1: Is SPX in a third-wave extension or a terminal fifth wave?

**Method.** I used Yahoo Finance chart API daily closes to calculate 20/50/200-day moving averages, RSI(14), MACD(12,26,9), and Bollinger Bands. The Elliott read uses the weekly advance from the 2026-03-27 low. Price levels were cross-checked against AP and countryeconomy’s 2026-05-08 close.

| Indicator | Value |
|---|---:|
| SPX close | 7,398.93 |
| Weekly return | 2.33% |
| Consecutive up weeks | 6 weeks |
| MA20 / MA50 / MA200 | 7,153.87 / 6,863.29 / 6,753.41 |
| RSI(14) | 74.58 |
| MACD / Signal / Hist | 143.36 / 128.38 / 14.99 |
| Bollinger upper / middle / lower | 7,409.70 / 7,153.87 / 6,898.04 |

**Findings.** The better interpretation is a **late-stage third-wave extension**, not a completed terminal fifth wave. SPX has risen for six straight weeks, and this week was not a low-volume push: average daily volume was about 5.72B shares versus 4.85B on May 1. Price is pressing the upper Bollinger Band and RSI is above 70, so the advance is stretched; however, MACD remains above its signal line and has not confirmed exhaustion. A break below 7,153.87 next week would raise the odds of a wave-four pullback; holding above 7,300 would turn 7,400-7,410 into the key confirmation area.

**Evidence.** Yahoo Finance chart API: `^GSPC` daily data from 2026-05-01 to 2026-05-08; AP reported the 2026-05-08 SPX close at 7,398.93 and a weekly gain of 168.81 points; countryeconomy’s U.S. index table also lists SPX at 7,398.93 on 2026-05-08. Links: [AP](https://apnews.com/article/b7ff696f0770489a60427121a6931ada), [countryeconomy](https://countryeconomy.com/stock-exchange/usa?dr=2026-05).

**Caveats.** Elliott labeling is not a single falsifiable numeric model; this report treats the 2026-03-27 low as the start of the current advance. Minor rounding differences exist across data vendors, but they do not change the trend read.

### Question 2: Did Nasdaq make new highs with a material daily MACD bearish divergence?

**Method.** I calculated daily MACD for NDX and the Nasdaq Composite, then compared price highs, the MACD line, and the histogram between late April and 2026-05-08. Volume uses the Yahoo Nasdaq Composite/NDX aggregate volume series.

| Date | NDX Close | MACD | Signal | Hist |
|---|---:|---:|---:|---:|
| 2026-04-24 | 27,303.67 | 680.71 | 460.80 | 219.91 |
| 2026-05-01 | 27,710.36 | 751.43 | 640.47 | 110.96 |
| 2026-05-08 | 29,234.99 | 939.12 | 786.20 | 152.93 |

**Findings.** There is no material bearish divergence. NDX made a new high on 2026-05-08 while the MACD line also reached a new high for the April-May swing, and the histogram stayed positive. The histogram did not return to its April 20 extreme, so acceleration is softer than the first thrust; that is momentum deceleration, not a confirmed divergence. A clearer daily divergence would require NDX to make another high while MACD remains below 939.12.

**Evidence.** Yahoo Finance chart API: `^NDX` and `^IXIC` daily data; AP reported the Nasdaq Composite at 26,247.08 on 2026-05-08, up 1,132.63 points for the week. Link: [AP](https://apnews.com/article/b7ff696f0770489a60427121a6931ada).

**Caveats.** Index volume is a Nasdaq aggregate and is not identical to ETF or futures volume. MACD is close-based and does not capture intraday reversals.

### Question 3: Did SHCOMP hold MA20 after the A-share reopening?

**Method.** Mainland markets were closed on 2026-05-04 and 2026-05-05 for the Labor Day holiday, so the reopening window is 2026-05-06 to 2026-05-08. MA20 is calculated from Yahoo Finance `000001.SS` daily data and cross-checked against Investing.com’s historical table.

| Date | Open | High | Low | Close | MA20 Relationship |
|---|---:|---:|---:|---:|---|
| 2026-05-06 | 4,135.45 | 4,166.15 | 4,129.91 | 4,160.17 | Above MA20 |
| 2026-05-07 | 4,168.45 | 4,180.21 | 4,163.14 | 4,180.09 | Above MA20 |
| 2026-05-08 | 4,163.85 | 4,183.06 | 4,154.25 | 4,179.95 | 2.64% above MA20 |

**Findings.** SHCOMP held MA20. The 2026-05-08 close of 4,179.95 was above MA20 at 4,072.41 and above MA50 at 4,045.29, leaving the short- and medium-term trend bullish. RSI(14) was 68.98, not yet at an extreme overbought reading; the upper Bollinger Band at 4,195.87 is the first upside test next week. A break below 4,072 would invalidate the reopening rebound; a move through 4,196 would confirm a fresh upside channel.

**Evidence.** Yahoo Finance chart API: `000001.SS`; Investing.com’s Shanghai Composite historical table lists the 2026-05-08 close at 4,179.95 and the daily range at 4,154.25-4,183.06. Link: [Investing.com](https://tr.investing.com/indices/shanghai-composite-historical-data).

**Caveats.** Yahoo’s Shanghai volume field is a compressed vendor field and should not be compared directly with official exchange turnover. This section uses price and trend indicators only.

### Question 4: Did market breadth improve with the indices, or was the rally carried by a few giants?

**Method.** I used three breadth proxies: SystemTrader’s S&P 500 internal breadth, Barchart’s all-market 52-week high/low summary, and weekly relative performance of RSP, SPY, and QQQ.

| Breadth Indicator | 2026-05-08 Value | Conclusion |
|---|---:|---|
| S&P 500 constituents above 50-day MA | 63.9% | Bullish, not overheated |
| S&P 500 A-D | +432 | Positive daily participation |
| S&P 500 NH-NL | +137 | New highs exceeded new lows |
| BPI | 58 | Neutral to bullish |
| Barchart all-market 52-week highs/lows | 208 / 155 | Positive expansion |
| Barchart NYSE 52-week highs/lows | 74 / 53 | Positive expansion |
| RSP weekly return vs SPY weekly return | 0.63% vs 2.35% | Large caps contributed more |

**Findings.** Breadth improved, but this was not an even bull market. With 63.9% of S&P 500 constituents above their 50-day moving average and both A-D and NH-NL positive, the breakout was not purely supported by a handful of stocks. Still, RSP lagged SPY by 1.72 percentage points and QQQ beat SPY by 3.15 percentage points, showing that size and growth exposure were still dominant. If RSP catches up next week, breakout quality improves; if RSP keeps lagging while NDX extends, the indices become more vulnerable to high-level chop.

**Evidence.** SystemTrader breadth page for 2026-05-08: 4/4 signals bullish, MA50% 63.9%, A-D +432, NH-NL +137, BPI 58. Barchart’s 2026-05-08 19:43 ET summary shows 52-week highs/lows of 208/155 overall and 74/53 on NYSE. Links: [SystemTrader](https://www.systemtrader.co/tools/breadth), [Barchart](https://www.barchart.com/stocks/highs-lows/summary).

**Caveats.** SystemTrader uses its roughly 6,700-symbol equity dataset plus S&P 500 internals, while Barchart applies exchange and eligibility filters. The two sources should not be added together line by line.

## Global Index And Macro Table

| Asset | 2026-05-08 Close | Weekly Change | Key Technical State |
|---|---:|---:|---|
| SPX | 7,398.93 | +2.33% | Near upper Bollinger Band, RSI 74.58 |
| NDX | 29,234.99 | +5.50% | Closed 0.53% above upper Bollinger Band |
| Nasdaq Composite | 26,247.08 | +4.51% | Volume about 27.1% above May 1 |
| SHCOMP | 4,179.95 | +1.65% | 2.64% above MA20 |
| HSI | 26,393.71 | +2.39% | Above MA50, below upper Bollinger Band |
| DXY | 97.84 | -0.38% | MACD still negative |
| 10Y UST Yield | 4.364% | -1.4 bps | Did not break the 4.45% weekly high |
| VIX | 17.19 | +1.18% | Below MA20 at 18.11 |

| Macro Event | Actual | Previous | Consensus | Market Meaning |
|---|---:|---:|---:|---|
| ADP Employment Change, 2026-04 | 109K | 61K | 84K | Set up the positive NFP surprise |
| NFP, 2026-04 | 115K | 185K | 62K | Positive surprise versus low expectations |
| Unemployment Rate, 2026-04 | 4.3% | 4.3% | 4.3% | No labor-market deterioration |
| Average Hourly Earnings MoM | 0.2% | 0.2% | 0.3% | Wage inflation below expectations |
| Average Hourly Earnings YoY | 3.6% | 3.4% | 3.8% | Wage pressure remained moderate |

Evidence: BLS Employment Situation for April 2026; ADP National Employment Report for April 2026; Trading Economics calendar. Links: [BLS](https://www.bls.gov/news.release/empsit.nr0.htm), [ADP PDF](https://adp-ri-nrip-static.adp.com/artifacts/us_ner/20260506/ADP_NATIONAL_EMPLOYMENT_REPORT_Press_Release_2026_04%20FINAL.pdf), [Trading Economics](https://tradingeconomics.com/united-states/calendar/news/502307).

## Visualization-Ready Data Tables

### Chart 1: SPX Weekly Candles And Key Levels

The planned 6,200 level is no longer this week’s resistance. It is replaced by the 7,400-7,410 resistance band; 6,200 remains only a deep-pullback reference.

| Week End | SPX Weekly Close | Weekly Change | Wave Label | Key Level |
|---|---:|---:|---|---|
| 2026-03-20 | 6,506.48 | -1.90% | Late correction | 6,500 support |
| 2026-03-27 | 6,368.85 | -2.12% | Upswing low | 6,369 low |
| 2026-04-03 | 6,582.69 | +3.36% | Wave 1 launch | Reclaimed MA200 |
| 2026-04-10 | 6,816.89 | +3.56% | Early wave 3 | 6,800 confirmation |
| 2026-04-17 | 7,126.06 | +4.54% | Wave 3 extension | 7,100 breakout |
| 2026-04-24 | 7,165.08 | +0.55% | High consolidation | Around MA20 at 7,154 |
| 2026-05-01 | 7,230.12 | +0.91% | Extension base | Below 7,300 |
| 2026-05-08 | 7,398.93 | +2.33% | Late wave 3 | 7,400-7,410 resistance |

### Chart 2: 11-Sector Heat Map

| Sector ETF | Sector | 2026-05-01 Close | 2026-05-08 Close | Weekly Change |
|---|---|---:|---:|---:|
| XLK | Technology | 161.87 | 175.52 | +8.43% |
| XLY | Consumer Discretionary | 118.63 | 120.20 | +1.32% |
| XLB | Materials | 51.35 | 51.59 | +0.47% |
| XLRE | Real Estate | 44.32 | 44.41 | +0.20% |
| XLC | Communication Services | 116.72 | 116.94 | +0.19% |
| XLI | Industrials | 172.96 | 173.20 | +0.14% |
| XLP | Consumer Staples | 84.17 | 84.18 | +0.01% |
| XLV | Health Care | 145.16 | 143.49 | -1.15% |
| XLF | Financials | 51.92 | 51.24 | -1.31% |
| XLU | Utilities | 46.55 | 44.72 | -3.93% |
| XLE | Energy | 58.85 | 55.70 | -5.35% |

Additional note: AI infrastructure proxies SMH and SOXX gained 11.13% and 11.71%, respectively; no classic dark-cloud-cover pattern appeared.

### Chart 3: Nasdaq Price-Volume Trend

| Date | Nasdaq Composite Close | Change | Volume |
|---|---:|---:|---:|
| 2026-05-01 | 25,114.44 | +0.89% | 7.53B |
| 2026-05-04 | 25,067.80 | -0.19% | 7.85B |
| 2026-05-05 | 25,326.13 | +1.03% | 8.09B |
| 2026-05-06 | 25,838.94 | +2.02% | 8.86B |
| 2026-05-07 | 25,806.20 | -0.13% | 9.12B |
| 2026-05-08 | 26,247.08 | +1.71% | 9.58B |

### Chart 4: NFP Release Shock

Cash indices were not open at 08:30 ET, so a cash SPX 5-minute chart cannot capture the immediate release reaction. This substitutes CME E-mini futures ES=F and NQ=F from 08:25 to 09:05 ET.

| Time ET | ES=F Close | ES=F Volume | NQ=F Close | NQ=F Volume |
|---|---:|---:|---:|---:|
| 08:25 | 7,401.00 | 2,275 | 28,906.25 | 840 |
| 08:30 | 7,407.50 | 6,824 | 28,934.75 | 4,023 |
| 08:35 | 7,407.00 | 8,266 | 28,952.50 | 3,582 |
| 08:40 | 7,408.25 | 4,383 | 28,961.00 | 2,467 |
| 08:45 | 7,403.50 | 3,861 | 28,932.00 | 1,826 |
| 08:50 | 7,401.75 | 2,903 | 28,922.75 | 1,676 |
| 08:55 | 7,398.25 | 6,117 | 28,912.25 | 3,048 |
| 09:00 | 7,397.50 | 5,675 | 28,909.50 | 2,334 |
| 09:05 | 7,394.25 | 5,531 | 28,895.75 | 2,216 |

## Next-Week Tracking Levels

| Asset | Support | Resistance | Trigger |
|---|---:|---:|---|
| SPX | 7,153.87 / 6,863.29 | 7,400-7,410 | Break below MA20 implies wave-four pullback; hold above 7,410 extends upside |
| NDX | 29,081.97 / 27,163.91 | 29,235 / 29,500 | A divergence requires price making a new high while MACD stays below 939.12 |
| SHCOMP | 4,072.41 / 4,045.29 | 4,195.87 | Break above upper Bollinger Band confirms reopening continuation |
| VIX | 16.47 | 18.11 / 19.75 | Move back above MA20 would weaken breakout quality |
