---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Deep-Research Draft

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Deep-Research Draft

**Anchor date: 2026-05-10 (shell: `date +%Y-%m-%d`)**  
**Coverage window: 2026-05-04 to 2026-05-08; the actual A-share trading window was 2026-05-06 to 2026-05-08.**

## Priority Conclusions

This week was not a “May FOMC plus NFP” double-event week. The actual setup was the constraint left by the 2026-04-29 FOMC decision, a stronger-than-expected 2026-05-08 U.S. jobs report, and a post-holiday rebound in Chinese risk appetite. U.S. April payrolls rose 115k, above roughly 55k-65k consensus expectations; unemployment was 4.3%, while average hourly earnings rose 0.2% MoM and 3.6% YoY. That supports the soft-landing narrative, although weaker household-survey details and rising involuntary part-time employment limit the bullish read. U.S. equities were led by technology and growth: the Nasdaq Composite rose 4.5% for the week, the S&P 500 rose 2.3%, and the Dow rose only 0.2%, pointing to a “rates not breaking higher plus AI/growth duration repair” trade. In China, April CPI/PPI had not appeared on the official NBS release list by the anchor date, so “price bottoming” is not yet proven; still, May Day travel of 1.517128 billion passenger trips, box office of about RMB 758 million, and three-session A-share gains of +1.65% for the Shanghai Composite, +3.02% for the Shenzhen Component, and +3.24% for the ChiNext Index show a tactical rebound in demand and risk appetite.

## Fact Corrections

| Planning assumption | Verified result | Research treatment |
|---|---:|---|
| 2026-05-06 FOMC meeting | The official FOMC calendar shows meetings on 2026-04-28/29 and 2026-06-16/17; there was no May 6 meeting. | Q1 analyzes the aftermath of the April 29 FOMC decision and this week’s rates response. |
| 2026-05-07 BoE meeting | The BoE’s relevant policy decision was published on 2026-04-30; May 7 was not the policy date. | Treated as global central-bank background, not as a weekly shock. |
| A shares traded normally from May 4 to May 8 | Public market reports show A shares were closed from May 1 to May 5 and reopened on May 6. | A-share weekly returns are measured over the three trading sessions from May 6 to May 8. |
| China April CPI/PPI on 2026-05-09 | The official NBS latest-release list did not show the April CPI/PPI text by the anchor date. | Q3 reports this as unreleased and substitutes March price data plus holiday high-frequency data. |

## Q1 Policy Pricing: Did FOMC Change 2026 Rate-Cut Pricing?

### Method

I used the Federal Reserve’s official FOMC calendar and the 2026-04-29 policy statement to correct the event date. I then used the Federal Reserve H.15 daily DGS2/DGS10 series to track the post-FOMC yield-curve move from 2026-05-01 to 2026-05-07, and public market reporting to add the 2026-05-08 DXY and asset reaction. The comparison base is the first post-FOMC trading day, 2026-05-01, to the day before NFP, 2026-05-07.

### Findings

| Metric | 2026-05-01 | 2026-05-07 | Change | Conclusion |
|---|---:|---:|---:|---|
| 2Y UST (DGS2) | 3.88% | 3.92% | +4 bp | The front end rose modestly; no evidence of deeper rate-cut pricing. |
| 10Y UST (DGS10) | 4.39% | 4.41% | +2 bp | The long end also rose, but less. |
| 10Y-2Y | 51 bp | 49 bp | -2 bp | Mild bear-flattening, not an easing trade. |
| Fed funds target range | 3.50%-3.75% | 3.50%-3.75% | 0 bp | The April FOMC held rates steady. |
| FOMC vote | 8-4 | 8-4 | n.a. | A hawkish split: four members favored a 25 bp cut, but the majority waited. |

Interpretation: The official calendar invalidates the planned “May 6 FOMC” event, so there was no fresh FOMC decision shock this week. The April 29 statement kept the target range at 3.50%-3.75%, and the 8-4 vote showed that a cut camp existed but did not command the committee. In the following week, the 2Y and 10Y Treasury yields rose 4 bp and 2 bp, respectively, so markets did not trade the week as a faster-cut cycle. The marginal repricing came from labor data and risk appetite, not from new FOMC information.

### Evidence

| Input | Date | Value/key point | Source |
|---|---:|---|---|
| Official FOMC calendar | 2026 | April 28-29 and June 16-17 meetings; no May 6 meeting | https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm |
| FOMC statement | 2026-04-29 | Target range 3.50%-3.75%; vote 8-4 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm |
| H.15 yields | 2026-05-01 to 2026-05-07 | DGS2, DGS10 | https://www.federalreserve.gov/releases/h15/ |
| DXY close | 2026-05-08 | DXY 97.93, down 0.14% on the day | https://economictimes.indiatimes.com/markets/us-stocks/news/us-stock-market-live-dow-jones-sp-500-nasdaq-trump-us-iran-israel-war-peace-talks-fed-crude-brent-oil-snap-whirlpool-arm-holdings-ai-stock-price-news/liveblog/130895527.cms?from=mdr |

### Caveats

Historical CME FedWatch snapshots and SOFR Dec-2026/Dec-2027 futures quotes were not reproducible from stable free sources, so this section uses the Treasury curve and policy statement as substitutes. H.15 was only updated through 2026-05-07 at the anchor time; the complete official May 8 yield set needs to be added later.

## Q2 Growth Signal: Does April Employment Support a Soft Landing?

### Method

The primary source is the BLS Employment Situation release dated 2026-05-08. I extracted payroll additions, unemployment, U-6, participation, average hourly earnings, weekly hours, and revisions to the prior two months, then compared the data with publicly reported consensus expectations and mapped the detail to Treasury-curve and equity-index behavior.

### Findings

| Metric | April 2026 | Consensus/prior | Marginal signal |
|---|---:|---:|---|
| Nonfarm payrolls | +115k | Around +55k to +65k | Clearly above expectations. |
| U-3 unemployment | 4.3% | 4.5% expected; 4.3% in March | Stable and below expectations. |
| U-6 | 8.4% | 8.3% in March | Broad underemployment edged higher. |
| Average hourly earnings MoM | +0.2% | +0.3% in March | Wage pressure cooled. |
| Average hourly earnings YoY | +3.6% | +3.7% in March | Wage inflation continued to slow. |
| Participation rate | 61.8% | 61.9% in March | Slightly weaker labor supply. |
| Average weekly hours | 34.3 hours | 34.3 hours in March | Stable. |
| Prior two-month revisions | -16k | n.a. | Not enough to change the main conclusion. |

Interpretation: Payrolls of 115k and unemployment of 4.3% support the view that the economy has not stalled, especially relative to a low consensus bar. Wage growth of 0.2% MoM and 3.6% YoY also reduced the concern that a stronger labor market automatically means hotter inflation, giving growth and duration-sensitive equities room to rally. But the household survey was weaker: employment fell by 226k, unemployment rose by 134k, and involuntary part-time employment rose 445k to 4.9 million. The bond signal looks closer to mild bear-flattening than to a classic bull-steepening move.

### Evidence

| Input | Date | Value/key point | Source |
|---|---:|---|---|
| BLS Employment Situation | 2026-05-08 | Payrolls +115k, unemployment 4.3%, U-6 8.4%, wages +0.2% MoM/+3.6% YoY | https://www.bls.gov/news.release/archives/empsit_05082026.htm |
| Consensus reporting | 2026-05-08 | Economists expected roughly +55k to +65k jobs and 4.5% unemployment | https://www.kiplinger.com/investing/stocks/stock-market-today-jobs-report-whirlpool-arm |
| Equity-index weekly returns | 2026-05-08 | S&P 500 +2.3%, Nasdaq +4.5%, Dow +0.2%, Russell 2000 +1.7% | https://www.kiplinger.com/investing/stocks/stock-market-today-jobs-report-whirlpool-arm |

### Caveats

April JOLTS was not available on the same weekly timetable. ADP, claims, and Challenger layoffs can supplement the picture, but they do not outweigh the BLS release. The BLS first estimate may still be revised over the next two months.

## Q3 China Fundamentals: Do April CPI/PPI and High-Frequency Data Support “Mild Recovery plus Price Bottoming”?

### Method

I first checked the NBS latest-release list to confirm whether April CPI/PPI was available on the anchor date. Because it was not visible, I used March 2026 CPI/PPI as the price baseline and May Day travel, box office, post-holiday A-share performance, and Stock Connect data to assess demand and risk appetite.

### Findings

| Indicator | Latest available value | Comparison | Conclusion |
|---|---:|---:|---|
| April CPI/PPI | No official text visible by anchor date | n.a. | Price bottoming cannot be confirmed. |
| March CPI YoY | +1.0% | Official March data | Deflation pressure had eased, but this is not April evidence. |
| March PPI YoY | +0.5% | Official March data | Producer prices were positive, but April confirmation is needed. |
| May Day cross-regional passenger trips | 1.517128 billion | YoY +3.49% | Travel demand continued to expand. |
| May Day box office | About RMB 758 million | About RMB 747 million in 2025, +1.47% | Entertainment consumption grew moderately. |
| Shanghai Composite | +1.65% | 2026-05-06 to 05-08 | Post-holiday risk appetite recovered. |
| Shenzhen Component | +3.02% | 2026-05-06 to 05-08 | Growth style was stronger. |
| ChiNext Index | +3.24% | 2026-05-06 to 05-08 | Growth style was stronger. |

Interpretation: The defensible conclusion is “high-frequency demand repair plus risk-appetite rebound,” not “April price bottoming has been proven.” May Day travel and box office were both positive, but the pace was not explosive, fitting a mild-recovery rather than a strong-recovery story. In A shares, higher-beta growth performed better over the three post-holiday sessions, suggesting investors were trading policy and liquidity expectations more than confirmed price-cycle improvement. Cyclical exposure should wait for April CPI/PPI and property-sales confirmation, while dividend assets still retain defensive value unless long yields fall materially.

### Evidence

| Input | Date | Value/key point | Source |
|---|---:|---|---|
| NBS latest releases | Queried on 2026-05-10 | April CPI/PPI text not visible | https://www.stats.gov.cn/sj/zxfb/ |
| March CPI/PPI | 2026-04 | CPI YoY +1.0%, PPI YoY +0.5% | NBS release page, https://www.stats.gov.cn/sj/zxfb/ |
| May Day travel | 2026-05-06 | Cross-regional passenger trips 1.517128 billion, YoY +3.49% | https://www.mot.gov.cn/2026zhengcejd/jiaotongyaowen/202605/t20260506_4240944.html |
| May Day box office | 2026-05-05 | Box office about RMB 758 million, admissions 20.8419 million, screenings 2.376 million | https://finance.sina.com.cn/stock/relnews/cn/2026-05-05/doc-inhwjczf4744510.shtml |
| A-share weekly performance | 2026-05-08 | Shanghai +1.65%, Shenzhen +3.02%, ChiNext +3.24% | https://finance.sina.com.cn/roll/2026-05-08/doc-inhxerwc2241884.shtml |

### Caveats

Thirty-city property sales, weekly CPCA retail sales, and Wind high-frequency series were not fully reproducible from public sources. This draft does not treat unverified series as conclusions. CPI/PPI is the largest missing input and should be added after the official release appears.

## Q4 Sector Rotation: What Drove U.S. and China Sector Divergence?

### Method

For U.S. equities, I used public weekly reporting on major indexes and sector direction, plus a public GICS ETF one-week performance snapshot as a quantitative substitute. For A shares, because the complete CITIC level-one industry table requires Wind, I used public index, theme, and style signals. Attribution is organized around rates, growth, AI capex, energy, and post-holiday capital rebalancing.

### Findings

| Market/sector | Weekly/snapshot return | Ranking signal | Attribution |
|---|---:|---|---|
| Nasdaq Composite | +4.5% | Best major U.S. index | AI and growth-duration recovery. |
| S&P 500 | +2.3% | Broad-market gain | Jobs beat expectations while wages cooled. |
| Dow Jones Industrial Average | +0.2% | Clear laggard | Value/cyclical beta was weaker. |
| Russell 2000 | +1.7% | Small-cap rebound | Risk appetite improved. |
| Shanghai Composite | +1.65% | A-share benchmark recovery | Post-holiday catch-up and policy expectations. |
| Shenzhen Component | +3.02% | Growth stronger | Technology, consumer electronics, and robotics themes. |
| ChiNext Index | +3.24% | Best major A-share index | Growth style outperformed. |
| Energy ETF snapshot | +2.91% | Best in public snapshot | Energy equities diverged from the weekly oil-price drop. |
| Technology ETF snapshot | +2.66% | Second in public snapshot | AI and long-duration recovery. |
| Materials ETF snapshot | -1.46% | Weakest in public snapshot | Commodity chain and global growth concerns weighed. |

Interpretation: The U.S. story was not a uniform risk rally; it was a technology and growth outperformance trade, consistent with softer wage pressure and long yields failing to break higher. Nasdaq’s 4.5% weekly gain far outpaced the Dow’s 0.2%, showing that investors continued to pay for AI capex and platform-tech earnings power. A shares showed a similar style bias over their three post-holiday sessions, with the ChiNext Index up 3.24% versus 1.65% for the Shanghai Composite. The energy-sector snapshot and the weekly oil decline do not line up one-for-one, implying that positioning, inventories, and prior selloff effects also mattered.

### Evidence

| Input | Date | Value/key point | Source |
|---|---:|---|---|
| U.S. major indexes | 2026-05-08 | S&P 500 +2.3%, Nasdaq +4.5%, Dow +0.2%, Russell 2000 +1.7% | https://www.kiplinger.com/investing/stocks/stock-market-today-jobs-report-whirlpool-arm |
| GICS sector snapshot | 2026-05-05 | Energy +2.91%, Technology +2.66%, Materials -1.46% | https://www.klickanalytics.com/sectors_performance |
| A-share indexes and themes | 2026-05-08 | Shanghai +1.65%, Shenzhen +3.02%, ChiNext +3.24% | https://finance.sina.com.cn/roll/2026-05-08/doc-inhxerwc2241884.shtml |

### Caveats

The full weekly return table for 31 CITIC level-one industries requires Wind/iFinD and could not be publicly reproduced. A stable May 8 weekly table for all 11 U.S. GICS sectors was also not available. The visualization stage should replace this proxy table with Wind/Bloomberg data before final charting.

## Q5 Flows: Did Cross-Border and ETF Flows Turn?

### Method

I used publicly checkable Hong Kong/Shanghai/Shenzhen Stock Connect items and 2026-05-08 market reporting, while separating “net buying” from “turnover.” Because the real-time public net-buying convention for northbound Stock Connect is not consistent across sources, this draft only reports verifiable values: southbound net buying and northbound turnover.

### Findings

| Flow item | 2026-05-08 value | Direction | Interpretation |
|---|---:|---|---|
| Southbound Stock Connect net buying | HKD 13.168 billion | Inflow into Hong Kong equities | Mainland investors continued buying Hong Kong stocks. |
| Shanghai Connect turnover | RMB 192.903 billion | Active trading | Trading was active, but this is not net inflow. |
| Shenzhen Connect turnover | RMB 164.139 billion | Active trading | Trading was active, but this is not net inflow. |
| Combined Shanghai/Shenzhen Connect turnover | RMB 357.042 billion | Active trading | Northbound activity was high; net direction needs exchange-level net figures. |
| EPFR global fund flows | Not publicly available | n.a. | No global fund-flow turn is inferred. |
| U.S. ETF creations/redemptions | Not publicly available | n.a. | No SPY/QQQ/EEM flow turn is inferred. |

Interpretation: What can be confirmed is that southbound buying into Hong Kong remained large on May 8, which is positive at the margin. What can also be confirmed is active northbound turnover, but turnover should not be mislabeled as net buying. Without citable EPFR and ETF.com weekly creation/redemption data, it is not possible to call a turn in global EM or U.S. ETF flows. The flow conclusion should therefore be restrained: southbound Hong Kong flows were strong, while northbound direction remains to be confirmed.

### Evidence

| Input | Date | Value/key point | Source |
|---|---:|---|---|
| Southbound Stock Connect | 2026-05-08 | Net buying HKD 13.168 billion | https://finance.sina.com.cn/roll/2026-05-08/doc-inhxerwc2241884.shtml |
| Shanghai/Shenzhen Connect turnover | 2026-05-08 | Shanghai Connect RMB 192.903 billion; Shenzhen Connect RMB 164.139 billion | https://finance.sina.com.cn/roll/2026-05-08/doc-inhxerwc2241884.shtml |

### Caveats

EPFR, ETF.com weekly net flows, margin financing balances, and full CCASS position changes were not publicly reproducible. If the visualization stage needs “five-day cumulative net inflows,” it must pull daily net figures from exchanges or Wind.

## Q6 Next-Week Tactics: 2026-05-11 to 2026-05-15

### Method

I mapped this week’s confirmed macro facts to next week’s event calendar: U.S. April CPI/PPI, retail sales, industrial production, possible China April CPI/PPI release or delay, and technology/consumption earnings. Each recommendation has a trigger and invalidation condition.

### Findings

| Recommendation | Direction | Trigger | Invalidation | Linked assets |
|---|---|---|---|---|
| 1 | Long U.S. growth versus value | U.S. CPI does not reaccelerate and 10Y UST does not break above 4.50% | CPI beats materially and 10Y rises through 4.50% | QQQ/SPY, XLK/XLC versus DIA/XLF |
| 2 | Prefer A-share growth; wait for price confirmation before cyclical overweight | China April CPI/PPI shows continued PPI repair and turnover remains high | PPI weakens again or property high-frequency data rolls over | ChiNext, electronics, robotics, consumer electronics |
| 3 | Buy Hong Kong dips while southbound flows remain strong, with FX hedging | Southbound buying continues and the dollar does not rebound | USDCNH rises quickly or southbound flips to net selling | HSI Tech, internet platforms, CNH hedge |

Interpretation: The most important validation point next week is whether U.S. CPI invalidates the combination of solid employment and moderate wage pressure. If CPI is benign, growth-stock relative strength has a basis to extend; if CPI rebounds, markets will reprice the 115k payroll print as “higher for longer.” In China, April CPI/PPI should be awaited rather than front-running a cyclical overweight solely on May Day data. Hong Kong’s marginal advantage comes from southbound buying, but FX and external rates are the key constraints.

### Evidence

| Input | Date | Value/key point | Source |
|---|---:|---|---|
| U.S. CPI calendar | Scheduled for 2026-05-12 | April CPI; March CPI YoY 3.3%, MoM 0.9% | https://www.bls.gov/schedule/news_release/cpi.htm |
| U.S. PPI calendar | Scheduled for 2026-05-13 | April PPI | https://www.bls.gov/schedule/news_release/ppi.htm |
| Next-week calendar reporting | 2026-05-11 to 2026-05-15 | CPI, PPI, retail sales, industrial production, Cisco, Alibaba | https://www.investing.com/economic-calendar/ |

### Caveats

Consensus expectations can move materially in the 24-48 hours before release. This draft provides the event framework and invalidation conditions rather than hard-coding dynamic consensus as the trading basis.

## Visualization-Ready Data Tables

### V1 Substitute: Daily U.S. 2Y/10Y Yields and DXY

The plan requested minute-level data; public sources did not support stable minute-level reconstruction. The substitute is daily H.15 2Y/10Y data plus public DXY close reporting.

| Date | 2Y UST (%) | 10Y UST (%) | 10Y-2Y (bp) | DXY | Event annotation |
|---|---:|---:|---:|---:|---|
| 2026-05-01 | 3.88 | 4.39 | 51 | n.a. | First post-FOMC baseline day |
| 2026-05-04 | 3.95 | 4.45 | 50 | n.a. | U.S. trading week starts |
| 2026-05-05 | 3.93 | 4.43 | 50 | n.a. | Oil digests OPEC+ decision |
| 2026-05-06 | 3.87 | 4.36 | 49 | n.a. | Planned FOMC date; verified no meeting |
| 2026-05-07 | 3.92 | 4.41 | 49 | n.a. | Day before NFP |
| 2026-05-08 | n.a. | n.a. | n.a. | 97.93 | NFP released; DXY down 0.14% |

### V2 Substitute: U.S.-China Sector/Index Performance

The full 31 CITIC industry table and the May 8 full GICS sector table were not publicly reproducible. The substitute uses public indexes and sector ETF snapshots.

| Market | Series | Return/change | Time basis | Note |
|---|---|---:|---|---|
| United States | Nasdaq Composite | +4.50% | 2026-05-04 to 05-08 | Weekly return |
| United States | S&P 500 | +2.30% | 2026-05-04 to 05-08 | Weekly return |
| United States | Russell 2000 | +1.70% | 2026-05-04 to 05-08 | Weekly return |
| United States | Dow Jones Industrial Average | +0.20% | 2026-05-04 to 05-08 | Weekly return |
| United States | Energy ETF snapshot | +2.91% | One-week snapshot on 2026-05-05 | Public sector page |
| United States | Technology ETF snapshot | +2.66% | One-week snapshot on 2026-05-05 | Public sector page |
| United States | Materials ETF snapshot | -1.46% | One-week snapshot on 2026-05-05 | Public sector page |
| China A shares | ChiNext Index | +3.24% | 2026-05-06 to 05-08 | Three post-holiday sessions |
| China A shares | Shenzhen Component | +3.02% | 2026-05-06 to 05-08 | Three post-holiday sessions |
| China A shares | Shanghai Composite | +1.65% | 2026-05-06 to 05-08 | Three post-holiday sessions |

### V3 Substitute: Cross-Border Flows and Turnover

The planned “five-day cumulative northbound plus southbound net inflow” chart could not be fully populated from public sources. The substitute is the verifiable May 8 flow table.

| Date | Southbound net buying (HKD billion) | Shanghai Connect turnover (RMB billion) | Shenzhen Connect turnover (RMB billion) | Combined Shanghai/Shenzhen Connect turnover (RMB billion) |
|---|---:|---:|---:|---:|
| 2026-05-08 | 13.168 | 192.903 | 164.139 | 357.042 |

### V4 Substitute: Global Asset Weekly Performance Table

The proposed daily heatmap lacks a complete public daily-return sequence. The substitute is a weekly/latest-available performance table.

| Asset | Performance | Time basis | Interpretation |
|---|---:|---|---|
| Nasdaq Composite | +4.50% | 2026-05-04 to 05-08 | Growth led. |
| S&P 500 | +2.30% | 2026-05-04 to 05-08 | Broad risk assets rose. |
| Dow Jones Industrial Average | +0.20% | 2026-05-04 to 05-08 | Value lagged sharply. |
| Russell 2000 | +1.70% | 2026-05-04 to 05-08 | Small caps rebounded. |
| Shanghai Composite | +1.65% | 2026-05-06 to 05-08 | Post-holiday recovery. |
| Shenzhen Component | +3.02% | 2026-05-06 to 05-08 | Growth style outperformed. |
| ChiNext Index | +3.24% | 2026-05-06 to 05-08 | A-share growth led. |
| Brent crude | About -8.00% | 2026-05-04 to 05-08 | OPEC+ supply expectations weighed. |
| WTI crude | USD 94.92 | 2026-05-08 close | Down 0.92% on the day. |
| Gold spot | USD 4,733.59 | Reported 2026-05-07 | Precious metals remained elevated. |
| DXY | 97.93 | 2026-05-08 close | Down 0.14% on the day. |

### V5 Next-Week Key Events and Triggers

| Date | Event | Consensus/prior | Our variant view | Trigger assets |
|---|---|---:|---|---|
| 2026-05-11 | Possible China April CPI/PPI release or delay | March CPI +1.0%; PPI +0.5% | Cyclicals need continued PPI repair for stronger evidence. | CSI 300, ChiNext, industrial commodity chains |
| 2026-05-12 | U.S. April CPI | March CPI YoY 3.3%; MoM 0.9% | Benign CPI supports growth-stock relative strength. | UST10Y, DXY, QQQ |
| 2026-05-13 | U.S. April PPI | To be updated | PPI matters more than CPI for margins and corporate pricing power. | UST, S&P 500, industrials |
| 2026-05-13 | Cisco earnings | EPS about USD 1.04; revenue about USD 15.6 billion | AI networking orders matter more than headline EPS. | CSCO, XLK |
| 2026-05-14 | Alibaba earnings | EPS about RMB 6.14 | Cloud and advertising recovery drive HSI Tech beta. | BABA, KWEB, HSI Tech |
| 2026-05-14 | U.S. retail sales | Prior +1.7% | A slowdown without collapse keeps the soft landing intact. | XLY, XLP, UST |
| 2026-05-15 | U.S. industrial production/Empire State | To be updated | Tests whether manufacturing follows labor-market resilience. | XLI, DXY, crude oil |

## Follow-Up Research List

1. Add the official 2026-05-08 H.15 yield set, SOFR futures, and historical CME FedWatch snapshots.
2. Rebuild Q3 after the NBS publishes April 2026 CPI/PPI.
3. Pull Wind/iFinD weekly returns for all 31 CITIC level-one industries from 2026-05-06 to 2026-05-08.
4. Pull daily northbound/southbound net buying from exchanges or Wind and rebuild the five-day cumulative chart.
5. Add EPFR/ETF.com or fund-administrator weekly flows for U.S. ETFs and EM funds.

## Source Index

- Federal Reserve FOMC calendars: https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm
- Federal Reserve FOMC statement, 2026-04-29: https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm
- Federal Reserve H.15: https://www.federalreserve.gov/releases/h15/
- BLS Employment Situation, 2026-05-08: https://www.bls.gov/news.release/archives/empsit_05082026.htm
- BLS CPI schedule: https://www.bls.gov/schedule/news_release/cpi.htm
- BLS PPI schedule: https://www.bls.gov/schedule/news_release/ppi.htm
- NBS latest releases: https://www.stats.gov.cn/sj/zxfb/
- Ministry of Transport May Day travel: https://www.mot.gov.cn/2026zhengcejd/jiaotongyaowen/202605/t20260506_4240944.html
- Sina Finance May Day box office: https://finance.sina.com.cn/stock/relnews/cn/2026-05-05/doc-inhwjczf4744510.shtml
- Sina Finance A-share and flow data: https://finance.sina.com.cn/roll/2026-05-08/doc-inhxerwc2241884.shtml
- Kiplinger U.S. equities and jobs: https://www.kiplinger.com/investing/stocks/stock-market-today-jobs-report-whirlpool-arm
- Economic Times market live blog: https://economictimes.indiatimes.com/markets/us-stocks/news/us-stock-market-live-dow-jones-sp-500-nasdaq-trump-us-iran-israel-war-peace-talks-fed-crude-brent-oil-snap-whirlpool-arm-holdings-ai-stock-price-news/liveblog/130895527.cms?from=mdr
- KlickAnalytics sector performance: https://www.klickanalytics.com/sectors_performance
- OPEC+ 2026-05-03 decision: https://www.opec.org/pr-detail/1779602-3-may-2026.html
- Investing.com economic calendar: https://www.investing.com/economic-calendar/
