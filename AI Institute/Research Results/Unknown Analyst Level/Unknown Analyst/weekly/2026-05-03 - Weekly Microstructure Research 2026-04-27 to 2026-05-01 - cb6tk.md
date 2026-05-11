---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Microstructure Research: 2026-04-27 to 2026-05-01

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Microstructure Research: 2026-04-27 to 2026-05-01

## Priority Conclusions

1. **The FOMC shock was a short-lived liquidity drawdown, not a persistent cross-market dislocation.** At 14:00 EDT on 2026-04-29, the Fed held the federal funds target range at **3-1/2% to 3-3/4%**; SPY/QQQ 1-minute high-low range proxies widened from pre-event medians of **2.39/2.96 bps** to **12.11/13.50 bps**, while the QQQ liquidity proxy drew down **-57.14%** and needed **9 minutes** to recover to its pre-event median.
2. **Post-earnings adverse selection showed up most consistently in wider ranges, not in uniformly higher single-name VPIN.** During the first 90 minutes on 2026-04-30, MSFT's VPIN30 proxy rose **55.07%** and QQQ's rose **323.45%**; GOOGL, despite a **9.96%** daily rally, saw its VPIN30 proxy fall **38.61%**, pointing to concentrated directional repricing rather than symmetric two-sided toxicity.
3. **The April 30 MOC statistical-arbitrage hypothesis was not supported by the available data.** Using Yahoo Finance 1-minute RTH data as a proxy, SPY's April 30 final-minute share was **2.44%** and final-10-minute share was **6.36%**; there was no verifiable support for the plan's “above 35%” auction-share assumption.
4. **May 1 was not an NFP shock day; it was an overseas holiday-liquidity session.** The official BLS calendar places the April 2026 Employment Situation release at **2026-05-08 08:30 AM**, not 2026-05-01; Euronext and HKEX were closed for **2026-05-01 Labour Day**, while U.S. equities were open.
5. **Execution recommendation: reduce POV caps during FOMC, use tighter price protection in earnings names, and do not blindly chase month-end MOC imbalance.** For large baskets, cap POV at 3%-5% during 14:00-14:10 EDT; for QQQ/MSFT/GOOGL-type high beta names, use dynamic limits and short-window participation recalibration.

## Method And Data

I first read `01_weekly_plan.md`, then validated the macro and earnings calendar against official sources and built reproducible microstructure proxies from Yahoo Finance 1-minute OHLCV and daily data. The workspace did not contain L2 order book data, tick prints, exchange auction detail, NBBO, or per-venue direct feeds, so every “depth, spread, VPIN, slippage” metric below is explicitly a proxy rather than a millisecond-level order-book measurement.

| Category | Input | Window | Use |
| --- | --- | --- | --- |
| Official event | Federal Reserve FOMC statement / implementation note | 2026-04-29 14:00 EDT | FOMC timestamp and rate decision |
| Official event | BLS Employment Situation schedule | 2026-05-01 and 2026-05-08 | Correction of the NFP assumption |
| Official event | Microsoft FY26 Q3 release; Alphabet Q1 2026 release | 2026-04-29 after close; 2026-04-30 RTH | Earnings-shock baseline |
| Market data | Yahoo Finance 1m OHLCV: SPY, QQQ, MSFT, GOOGL, NVDA, ES=F, NQ=F | 2026-04-27 to 2026-05-01 | Range, volume, lead-lag, POV proxies |
| Market data | Yahoo Finance 1d OHLCV: SPY, QQQ, MSFT, GOOGL, NVDA, ES=F, NQ=F, ^VIX | 2026-04-24 to 2026-05-01 | Daily return, volume, volatility backdrop |

Core definitions: 1-minute range proxy = `(High-Low)/mid * 10000`; liquidity proxy = `dollar volume / 1-minute range bps`; VPIN30 proxy = rolling 30-minute `abs(buy volume - sell volume)/total volume` using minute return signs; closing auction proxy = final 1-minute and final 10-minute RTH volume shares; POV slippage is a simplified impact model benchmarked to daily market VWAP.

## Question 1: Liquidity Consumption During FOMC

### Method

I compared **13:30-13:59 EDT** and **14:00-14:10 EDT** on 2026-04-29 using 1-minute ranges, the liquidity proxy, and maximum 1-minute absolute returns. Recovery time is the number of minutes after 14:00 until the liquidity proxy stayed above its pre-event median for three consecutive minutes; cross-market arbitrage was tested through ES=F/SPY and NQ=F/QQQ lead-lag correlations from -5 to +5 minutes.

### Findings

| symbol | Pre-event median range bps | Event max range bps | Event max 1m absolute return bps | Pre-event liquidity proxy median | Event min liquidity proxy | Liquidity drawdown % | Recovery minutes | Corr: liquidity change vs abs return |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPY | 2.39 | 12.11 | 8.74 | 14267866.41 | 11241141.15 | -21.21 | 3.00 | -0.06 |
| QQQ | 2.96 | 13.50 | 12.00 | 6745521.60 | 2890808.72 | -57.14 | 9.00 | 0.11 |
| ES=F | 2.45 | 13.63 | 8.05 | 3200261.46 | 1838034.48 | -42.57 | 3.00 | -0.01 |
| NQ=F | 3.21 | 14.23 | 11.12 | 3064530.17 | 2499564.94 | -18.44 | 2.00 | -0.12 |

The FOMC range widening was material: SPY and QQQ event max ranges were roughly **5.1x** and **4.6x** their pre-event medians. QQQ recovered slowest, which is consistent with tech-heavy baskets becoming more fragile when FOMC risk overlaps with earnings risk. The correlation between liquidity changes and absolute returns ranged from **-0.12 to 0.11**, showing no stable linear minute-level relationship; the event looks more like discrete quote withdrawal than continuous volatility response. Cross-market correlations peaked at 0 minutes, so the data did not show a minute-level executable latency arbitrage.

### Evidence

| date | future | etf | future_leads_minutes | correlation |
| --- | --- | --- | --- | --- |
| 2026-04-29 | ES=F | SPY | 0 | 0.99 |
| 2026-04-29 | NQ=F | QQQ | 0 | 0.99 |
| 2026-05-01 | ES=F | SPY | 0 | 0.99 |
| 2026-05-01 | NQ=F | QQQ | 0 | 0.99 |

Raw inputs: `research_fomc.csv`, `research_leadlag.csv`. Official sources: Federal Reserve FOMC statement, 2026-04-29 14:00 EDT, https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm; implementation note, https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a1.htm.

### Caveats

Minute bars cannot answer the true tradability of “100ms spread widening” or “cross-exchange latency arbitrage”; that requires SIP/direct feeds, depth levels, exchange timestamps, and order acknowledgements. The liquidity proxy may overstate recovery when volume rises, so it should be used only directionally.

## Question 2: Adverse Selection During Earnings Season

### Method

MSFT and Alphabet both reported after the U.S. close on 2026-04-29, so I used **09:30-11:00 EDT** on 2026-04-30 as the shock window and the same time window on 2026-04-27 to 2026-04-29 as the baseline. I compared the VPIN30 proxy, median 1-minute range, and a price-impact proxy per $100 million of traded value.

### Findings

| symbol | Baseline VPIN30 median | Post-earnings VPIN30 median | VPIN change % | Baseline range bps | Post-earnings range bps | Range change % | Baseline impact bps/100m | Post-earnings impact bps/100m |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MSFT | 0.12 | 0.19 | 55.07 | 12.71 | 20.23 | 59.14 | 19.68 | 16.08 |
| GOOGL | 0.30 | 0.18 | -38.61 | 14.78 | 24.53 | 65.96 | 21.94 | 20.37 |
| NVDA | 0.15 | 0.12 | -18.04 | 19.57 | 26.94 | 37.63 | 10.08 | 10.15 |
| QQQ | 0.07 | 0.30 | 323.45 | 6.71 | 9.73 | 44.95 | 5.05 | 5.35 |

The most stable evidence of higher market-making risk is wider ranges: MSFT, GOOGL, NVDA, and QQQ widened by **59.14%**, **65.96%**, **37.63%**, and **44.95%**, respectively. MSFT and QQQ showed clear VPIN30 proxy increases, supporting a higher hedging-cost/informed-flow interpretation; GOOGL and NVDA did not, which points more toward one-way repricing than two-sided toxicity. GOOGL closed at **384.80** with a **9.96%** daily gain, consistent with rapid capitalization of positive earnings information; MSFT closed at **407.78** with a **-3.93%** daily return, suggesting investors focused on capex or earnings-quality concerns.

### Evidence

Raw inputs: `research_earnings.csv`, `research_daily.csv`. Microsoft FY26 Q3 release, 2026-04-29, https://www.microsoft.com/en-us/investor/earnings/FY-2026-Q3/press-release-webcast. Alphabet Q1 2026 release, 2026-04-29, SEC exhibit, https://www.sec.gov/Archives/edgar/data/1652044/000165204426000043/googexhibit991q12026.htm.

### Caveats

VPIN30 is a minute-bar bulk-classification proxy, not tick-level trade classification or Lee-Ready signing. Because options IV, dealer inventory, borrow costs, and off-exchange hedge flow are unavailable, “hedging cost” is inferred indirectly from range and impact proxies.

## Question 3: Month-End Closing Auction Deviation And Execution Slippage

### Method

I used the final 1-minute RTH volume share as a closing-auction proxy and the final 10-minute share as a proxy for MOC-stage pressure; closing execution slippage is measured as close versus 15:50-15:59 VWAP in bps. The key test was whether 2026-04-30 showed the plan's proposed “above 35%” month-end auction pressure.

### Findings

| symbol | RTH volume | Final 1-minute share % | Final 10-minute share % | Close vs 15:50 VWAP bps |
| --- | --- | --- | --- | --- |
| SPY | 153207459 | 2.44 | 6.36 | -5.39 |
| QQQ | 191773615 | 0.58 | 1.80 | -3.12 |
| MSFT | 134495508 | 0.82 | 3.17 | -21.39 |
| GOOGL | 400738485 | 0.26 | 0.96 | 33.41 |
| NVDA | 1558499613 | 0.24 | 0.83 | -24.51 |

There was no verifiable 35% closing-auction share on April 30; in the 1-minute data, SPY's final 1-minute share was only **2.44%** and its final 10-minute share was **6.36%**. The more tradable signal was single-name close deviation: GOOGL closed **33.41 bps** above its 15:50 VWAP, while MSFT and NVDA closed **21.39 bps** and **24.51 bps** below their respective 15:50 VWAPs. These deviations can seed next-open mean-reversion candidates, but one day is not enough to claim statistical significance.

### Evidence

Raw input: `research_auction.csv`. The key ETF daily sequence for visualization:

| date | symbol | Final 1-minute share % | Final 10-minute share % | Close vs 15:50 VWAP bps |
| --- | --- | --- | --- | --- |
| 2026-04-27 | SPY | 2.28 | 9.66 | -1.27 |
| 2026-04-28 | SPY | 3.64 | 15.50 | -1.06 |
| 2026-04-29 | SPY | 1.65 | 4.88 | 7.00 |
| 2026-04-30 | SPY | 2.44 | 6.36 | -5.39 |
| 2026-05-01 | SPY | 0.63 | 2.00 | -5.42 |
| 2026-04-27 | QQQ | 0.83 | 4.39 | 0.56 |
| 2026-04-28 | QQQ | 2.62 | 8.42 | -1.95 |
| 2026-04-29 | QQQ | 1.33 | 4.23 | 10.11 |
| 2026-04-30 | QQQ | 0.58 | 1.80 | -3.12 |
| 2026-05-01 | QQQ | 0.27 | 0.81 | -0.86 |

### Caveats

Yahoo Finance 1-minute volume is not the official NYSE/Nasdaq closing auction print and cannot split MOC, LOC, and continuous trading. The correct conclusion is that the 35% figure could not be verified with available data, not that the official auction share could never be higher.

## Question 4: Holiday Liquidity Fingerprint And POV Thresholds

### Method

I first corrected the calendar: 2026-05-01 was a Labour Day closure date in several overseas markets, but not a U.S. NFP release date. I compared 2026-05-01 RTH with the 2026-04-27 to 2026-04-30 RTH baseline using median 1-minute range and median 1-minute volume, then compared ES=F/NQ=F Globex volumes across Asian hours, European hours, and U.S. RTH.

### Findings

| symbol | Baseline range bps | May 1 range bps | Range change % | Baseline 1m volume | May 1 1m volume | Volume change % |
| --- | --- | --- | --- | --- | --- | --- |
| SPY | 2.78 | 2.77 | -0.34 | 60144.00 | 65709.00 | 9.25 |
| QQQ | 4.09 | 4.01 | -2.02 | 51327.00 | 58533.00 | 14.04 |
| MSFT | 7.77 | 8.43 | 8.49 | 53949.00 | 45608.00 | -15.46 |
| GOOGL | 8.99 | 9.38 | 4.38 | 54315.00 | 48345.00 | -10.99 |
| NVDA | 11.38 | 10.01 | -12.09 | 290835.00 | 199794.00 | -31.30 |
| ES=F | 2.80 | 3.09 | 10.45 | 1922.00 | 1813.00 | -5.67 |
| NQ=F | 4.41 | 4.22 | -4.40 | 755.50 | 750.00 | -0.73 |

U.S. ETF liquidity did not materially deteriorate on May 1: SPY/QQQ range proxies slightly narrowed. The liquidity gap was more visible in overseas hours and selected single names. ES=F European-hours volume fell from **188468** on April 30 to **101634** on May 1, while NQ=F European-hours volume fell from **91161** to **51465**. For large U.S. RTH orders, POV does not need to be cut for the full day, but pre-09:30 and Europe-absent price-discovery windows warrant lower urgency caps and tighter price protection.

### Evidence

Official sources: BLS Employment Situation schedule, April 2026 release = 2026-05-08 08:30 AM, https://www.bls.gov/schedule/news_release/empsit.htm; Euronext trading calendar, 2026-05-01 Labour Day closed, https://www.euronext.com/en/trading-calendars-hours; HKEX 2026 holiday calendar, 2026-05-01 Labour Day, https://www.hkex.com.hk/-/media/HKEX-Market/Services/Market-Data-Services/Infrastructure/Index-Feed-Calendar-2026-%28English-%2C-a-%2C-Chinese%29.pdf; NYSE hours and calendars, https://www.nyse.com/markets/hours-calendars.

| date | symbol | Asia volume 00:00-03:00 | Europe volume 03:00-09:30 | U.S. RTH volume 09:30-16:00 |
| --- | --- | --- | --- | --- |
| 2026-04-27 | ES=F | 21903 | 114320 | 819701 |
| 2026-04-28 | ES=F | 19143 | 212825 | 1025375 |
| 2026-04-29 | ES=F | 15089 | 139234 | 1024817 |
| 2026-04-30 | ES=F | 50832 | 188468 | 1249626 |
| 2026-05-01 | ES=F | 10311 | 101634 | 1020866 |
| 2026-04-27 | NQ=F | 16810 | 65707 | 308119 |
| 2026-04-28 | NQ=F | 14570 | 123140 | 413826 |
| 2026-04-29 | NQ=F | 10458 | 60266 | 359239 |
| 2026-04-30 | NQ=F | 34655 | 91161 | 467283 |
| 2026-05-01 | NQ=F | 8162 | 51465 | 397860 |

### Caveats

Holiday effects are entangled with post-FOMC positioning and earnings reactions in the same week. A cleaner global-liquidity estimate would require cross-asset depth, European cash index futures, and ETF primary-market creation/redemption data.

## Execution Algorithm Performance

| date | POV rate | Slippage vs VWAP bps | IS vs arrival bps |
| --- | --- | --- | --- |
| 2026-04-27 | 0.01 | 0.12 | 16.84 |
| 2026-04-27 | 0.05 | 0.27 | 16.99 |
| 2026-04-27 | 0.10 | 0.38 | 17.10 |
| 2026-04-28 | 0.01 | 0.09 | 30.04 |
| 2026-04-28 | 0.05 | 0.20 | 30.15 |
| 2026-04-28 | 0.10 | 0.29 | 30.23 |
| 2026-04-29 | 0.01 | 0.08 | -10.67 |
| 2026-04-29 | 0.05 | 0.17 | -10.64 |
| 2026-04-29 | 0.10 | 0.25 | -10.61 |
| 2026-04-30 | 0.01 | 0.21 | -0.02 |
| 2026-04-30 | 0.05 | 0.46 | 0.09 |
| 2026-04-30 | 0.10 | 0.65 | 0.17 |
| 2026-05-01 | 0.01 | 0.08 | 23.80 |
| 2026-05-01 | 0.05 | 0.18 | 23.90 |
| 2026-05-01 | 0.10 | 0.26 | 23.98 |

The simplified POV model shows VWAP-benchmark slippage rising with participation but remaining small, peaking at **0.65 bps** for 10% POV on April 30. The real execution risk was arrival-price exposure in directional markets. Median IS was **30.04-30.23 bps** on April 28 and **23.80-23.98 bps** on May 1, which means slow POV can carry meaningful trend risk when order direction is wrong. Recommended adaptive POV: default to 3%-5% during FOMC and earnings windows, and only move toward 10% when real-time ranges are below the day's median and replenishment is confirmed.

## Visualization-Ready Tables

### Chart 1: FOMC Intraday Liquidity Heatmap

Populable, but without L2 depth it should be charted as a 1-minute range and liquidity-proxy heatmap. Use `research_fomc.csv` fields `pre_1330_1359_median_range_bps`, `event_1400_1410_max_range_bps`, `liquidity_drawdown_pct`, and `recovery_minutes_to_pre_median_3m`.

| symbol | Pre-event median range bps | Event max range bps | Liquidity drawdown % | Recovery minutes |
| --- | --- | --- | --- | --- |
| SPY | 2.39 | 12.11 | -21.21 | 3.00 |
| QQQ | 2.96 | 13.50 | -57.14 | 9.00 |
| ES=F | 2.45 | 13.63 | -42.57 | 3.00 |
| NQ=F | 3.21 | 14.23 | -18.44 | 2.00 |

### Chart 2: Slippage vs Volatility Scatterplot

Use `research_pov.csv`; x-axis is intraday realized range volatility in bps, y-axis is `slippage_vs_vwap_bps`, and point color is POV rate. The “Execution Algorithm Performance” table above provides all dates and participation-rate aggregates.

### Chart 3: Closing Auction Volume Share Bar Chart

Use `research_auction.csv`; chart final 1-minute and final 10-minute shares for SPY and QQQ. The data is in the “Question 3: Evidence” table above.

### Chart 4: Cross-Market Correlation Decay

Use `research_leadlag.csv`; x-axis is `future_leads_minutes`, y-axis is correlation. Full sequence:

| date | future | etf | future_leads_minutes | correlation |
| --- | --- | --- | --- | --- |
| 2026-04-29 | ES=F | SPY | -5 | -0.06 |
| 2026-04-29 | ES=F | SPY | -4 | 0.09 |
| 2026-04-29 | ES=F | SPY | -3 | 0.05 |
| 2026-04-29 | ES=F | SPY | -2 | 0.07 |
| 2026-04-29 | ES=F | SPY | -1 | -0.02 |
| 2026-04-29 | ES=F | SPY | 0 | 0.99 |
| 2026-04-29 | ES=F | SPY | 1 | 0.03 |
| 2026-04-29 | ES=F | SPY | 2 | 0.06 |
| 2026-04-29 | ES=F | SPY | 3 | 0.06 |
| 2026-04-29 | ES=F | SPY | 4 | 0.08 |
| 2026-04-29 | ES=F | SPY | 5 | -0.05 |
| 2026-04-29 | NQ=F | QQQ | -5 | -0.02 |
| 2026-04-29 | NQ=F | QQQ | -4 | 0.03 |
| 2026-04-29 | NQ=F | QQQ | -3 | -0.03 |
| 2026-04-29 | NQ=F | QQQ | -2 | 0.07 |
| 2026-04-29 | NQ=F | QQQ | -1 | 0.00 |
| 2026-04-29 | NQ=F | QQQ | 0 | 0.99 |
| 2026-04-29 | NQ=F | QQQ | 1 | 0.04 |
| 2026-04-29 | NQ=F | QQQ | 2 | 0.03 |
| 2026-04-29 | NQ=F | QQQ | 3 | 0.00 |
| 2026-04-29 | NQ=F | QQQ | 4 | 0.01 |
| 2026-04-29 | NQ=F | QQQ | 5 | -0.02 |
| 2026-05-01 | ES=F | SPY | -5 | 0.01 |
| 2026-05-01 | ES=F | SPY | -4 | 0.10 |
| 2026-05-01 | ES=F | SPY | -3 | 0.05 |
| 2026-05-01 | ES=F | SPY | -2 | 0.06 |
| 2026-05-01 | ES=F | SPY | -1 | -0.07 |
| 2026-05-01 | ES=F | SPY | 0 | 0.99 |
| 2026-05-01 | ES=F | SPY | 1 | -0.07 |
| 2026-05-01 | ES=F | SPY | 2 | 0.07 |
| 2026-05-01 | ES=F | SPY | 3 | 0.03 |
| 2026-05-01 | ES=F | SPY | 4 | 0.10 |
| 2026-05-01 | ES=F | SPY | 5 | 0.01 |
| 2026-05-01 | NQ=F | QQQ | -5 | 0.03 |
| 2026-05-01 | NQ=F | QQQ | -4 | 0.10 |
| 2026-05-01 | NQ=F | QQQ | -3 | -0.03 |
| 2026-05-01 | NQ=F | QQQ | -2 | 0.06 |
| 2026-05-01 | NQ=F | QQQ | -1 | -0.09 |
| 2026-05-01 | NQ=F | QQQ | 0 | 0.99 |
| 2026-05-01 | NQ=F | QQQ | 1 | -0.10 |
| 2026-05-01 | NQ=F | QQQ | 2 | 0.07 |
| 2026-05-01 | NQ=F | QQQ | 3 | -0.05 |
| 2026-05-01 | NQ=F | QQQ | 4 | 0.10 |
| 2026-05-01 | NQ=F | QQQ | 5 | 0.06 |

## Follow-Up Items

1. Obtain Nasdaq TotalView/NYSE OpenBook or Polygon/LOBSTER L2 data to recompute true quoted spread, depth depletion, OBI, and 100ms recovery curves.
2. Obtain official NYSE/Nasdaq closing auction imbalance and MOC/LOC prints to replace the final-minute proxy.
3. Upgrade VPIN from minute-sign bulk classification to tick-level trade signing, and add options IV, delta-hedging demand, and ETF creation/redemption data.
4. Run a separate event study for the 2026-05-08 NFP release so the 2026-05-01 Labour Day liquidity fingerprint is not misattributed to NFP.
