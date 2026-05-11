---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Social Media Research

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Social Media Research

Coverage window: 2026-04-27 to 2026-05-01. May 1, 2026 was the Labor Day market holiday in mainland China, so A-shares were closed. The pre-event market baseline is the 2026-04-24 close, and the trading-week window is 2026-04-27 to 2026-04-30.

## Priority Conclusions

1. DeepSeek V4 was officially released on 2026-04-24, not on 2026-04-28; April 28 was the secondary amplification and market digestion phase. Weibo DeepSeek-related heat peaked at 4,685,912 on April 24, while the combined April 27-April 30 heat was only 2,015,175, meaning mass-market attention peaked before this trading week.
2. AI sentiment did not lift the whole AI complex. Attention and trading concentrated in domestic compute hardware. From 2026-04-24 to 2026-04-30, Semiconductor (BK1036) rose 5.08% and Cambricon (688256) rose 25.69%, while Artificial Intelligence (BK0800) rose only 0.69%, Foxconn Industrial Internet (601138) fell 3.28%, and Inspur Information (000977) fell 6.81%.
3. May Day travel discussion was much stronger than travel-stock pricing. Weibo “May Day/travel/consumption” heat rose from 15,059,490 on April 24-April 26 to 65,359,370 on April 27-April 30, up 333.87%; over the same baseline-to-close window, Tourism & Hotel (BK0485) fell 1.74%.
4. PMI and social “felt temperature” diverged sharply. April manufacturing PMI was 50.3 and the composite PMI output index was 50.1, yet there were 0 matches for “PMI/purchasing managers” in the Weibo hot-search archive from 2026-04-24 to 2026-04-30. Social media focused on holidays, AI, delisting risk, and single-stock events instead.
5. Earnings and risk events do not show higher retail tolerance. *ST Yan Shi (600696) was suspended from April 30 after closing at RMB 1.31 with a market cap of RMB 438 million; Puyang Refractories (002225) hit a limit-down open on April 27 after a smuggling indictment and fell 15.89% from the April 24 close.

## Method and Data Status

| Data block | Method | Coverage | Status |
|---|---:|---:|---|
| Weibo hot searches | Scraped `weibo.zhaoyizhe.com/date/YYYYMMDD/`; classified by keyword; aggregated topic count, listed minutes, and heat value | 2026-04-24 to 2026-04-30 | Reproducible |
| Eastmoney market prices | `push2his.eastmoney.com/api/qt/stock/kline/get` daily bars, adjusted with `fqt=1` | 2026-04-24 to 2026-04-30 | Reproducible |
| Eastmoney popularity | `emappdata.eastmoney.com/stockrank/getHisList` and `getHisProfileList` | Latest 366 days, extracting 2026-04-24 to 2026-05-03 | Reproducible |
| Xueqiu hot-stock list | Tried Xueqiu page, Xueqiu JSON endpoint, and a third-party Xueqiu hot-stock endpoint | This week | Historical list not publicly stable; not used for hard numbers |
| Northbound net buying | Eastmoney `RPT_NORTH_NETBUY` returns only through 2024-08-16; April 30 has only public turnover | 2026-04-30 | Net-buying figure not publicly verifiable |

Core evidence: DeepSeek’s official transparency page lists DeepSeek-V4 release date as 2026-04-24; the National Bureau of Statistics reported April manufacturing PMI at 50.3, non-manufacturing business activity at 49.4, and composite PMI output at 50.1; Eastmoney reported April 30 northbound turnover of RMB 3506.82 billion, equal to 12.79% of total A-share turnover. Links are listed in “Evidence List.”

## Question 1: Sentiment Resilience at the End of Earnings Season

### Method

I combined risk announcements, earnings-related delisting events, Weibo finance hot searches, and Eastmoney popularity rankings for 2026-04-27 to 2026-04-30. The comparison basis is the 2026-04-24 close and same-day Eastmoney popularity rank, with a focus on whether negative news was treated as “bad news exhausted.”

### Findings

| Stock/event | Event date | Price performance | Eastmoney popularity change | New-follower rate | Sentiment conclusion |
|---|---:|---:|---:|---:|---|
| *ST Yan Shi (600696) | 2026-04-29/30 | Closed at 1.31 on Apr 29, -5.07% vs Apr 24; suspended from Apr 30 | 483 (4/24) -> 716 (4/30) | 54.32% (4/30) | Negative, but not a top attention stock |
| Puyang Refractories (002225) | 2026-04-27 | -15.89% vs Apr 24 | 911 (4/24) -> 154 (4/27) -> 117 (4/28) | 94.36% (4/30) | Event-driven attention, not tolerance |
| Semiconductor (BK1036) | 2026-04-27 | +5.08% vs Apr 24 | Cambricon 135 (4/24) -> 1 (4/30) | Cambricon 72.61% (4/30) | “Bad news exhausted” concentrated in domestic compute |
| Tourism & Hotel (BK0485) | 2026-04-29/30 | -1.74% vs Apr 24 | BTG Hotels 3215 (4/24) -> 609 (4/29) -> 2330 (4/30) | BTG Hotels 53.27% (4/30) | Short attention spike, no consensus pricing |

Interpretation: Retail investors did not show higher tolerance toward delisting, criminal indictment, or disclosure-risk events; price reactions remained direct. The real “bad news exhausted” consensus appeared in semiconductors and domestic compute, not because investors accepted earnings risk, but because DeepSeek V4, Ascend adaptation, and Cambricon’s Day 0 adaptation reset the sector narrative. Puyang Refractories’ popularity rank jumped quickly, but the near-95% new-follower rate points more to spectators and short-term trading than to fundamental repair. Tourism and hotels showed the opposite pattern: high pre-holiday attention but weak price validation.

### Evidence

* Sina Finance: *ST Yan Shi was suspended from April 30; it last traded at RMB 1.31 with a RMB 438 million market cap and had fallen nearly 98% from its historical high.
* Sina Finance: Puyang Refractories opened limit-down on April 27 after being accused of smuggling 1243.55 tons of natural flake graphite.
* Eastmoney market API: price and board close data above.
* Eastmoney popularity APIs: `getHisList`, `getHisProfileList`.

### Caveats

I did not obtain full historical Xueqiu comments or full Eastmoney Guba post-level history, so this is not a year-over-year, same-method retail-tolerance test. The conclusion is based on public hot searches, popularity ranks, price reactions, and key event samples.

## Question 2: DeepSeek V4 Reach and Cognitive Gap

### Method

First, I corrected the event date: the official release was 2026-04-24. I then measured Weibo DeepSeek topic heat from April 24 to April 30 and compared it with Eastmoney popularity ranks and price performance for AI hardware-related stocks. Historical Xueqiu hot-stock data could not be retrieved from a stable public source, so it is disclosed as a data gap and excluded from the numeric divergence calculation.

### Findings

| Metric | 2026-04-24 | 2026-04-27 | 2026-04-28 | 2026-04-29 | 2026-04-30 | Conclusion |
|---|---:|---:|---:|---:|---:|---|
| Weibo DeepSeek topic count | 6 | 2 | 1 | 0 | 1 | Public peak was release day |
| Weibo DeepSeek heat | 4,685,912 | 541,473 | 918,977 | 0 | 554,725 | Sharp cooling after Apr 24 |
| Foxconn Industrial Internet Eastmoney rank | 38 | 27 | 8 | 9 | 19 | Eastmoney chased hardware mapping |
| Inspur Information Eastmoney rank | 118 | 217 | 242 | 183 | 182 | Not every compute stock benefited |
| Cambricon Eastmoney rank | 135 | 283 | 172 | 67 | 1 | Strongest focus was domestic chips |
| Semiconductor (BK1036) close | 2386.72 | 2469.91 | 2420.70 | 2425.39 | 2507.92 | The board ultimately monetized the story |

Interpretation: Broad public discussion focused on product-level themes such as “price killer,” “million-token context,” and “is DeepSeek still the strongest domestic AI.” Eastmoney retail users mapped the story more quickly into hardware and chip tickers. The cognitive gap was not “whether investors understood V4,” but whether they mapped “model capability” into “investable assets.” Cambricon rose from Eastmoney rank 135 to rank 1 and gained 25.69% from April 24, showing concentrated trading attention; Foxconn Industrial Internet and Inspur fell, showing that “compute” was not a blanket bid.

### Evidence

* DeepSeek official transparency center: DeepSeek-V4 Release Date April 24, 2026.
* Eastmoney: after DeepSeek-V4’s release, semiconductors, HBM, and memory-chip concepts led gains, and Cambricon completed Day 0 adaptation for V4-Flash and V4-Pro.
* Weibo historical hot-search archive: 2026-04-24 to 2026-04-30.
* Eastmoney market and popularity APIs.

### Caveats

The Xueqiu hot-stock public page and third-party endpoint returned login/302/empty data during this run, so I cannot provide Xueqiu Top 20 historical rankings for April 27-April 30. “Professional individual investors” therefore remains a follow-up data item, not a number inferred from an unstable source.

## Question 3: Did PMI Diverge from Social Felt Temperature?

### Method

I used the PMI release published by the National Bureau of Statistics at 09:30 on 2026-04-30 and compared it with keyword appearances in Weibo hot searches around the release date. Social “felt temperature” is measured by hits for “PMI/purchasing managers” and by the heat of competing finance topics.

### Findings

| Indicator | April 2026 | MoM | Weibo hot-search hits | Interpretation |
|---|---:|---:|---:|---|
| Manufacturing PMI | 50.3 | -0.1 pct | 0 | Still expansionary, but weak social reach |
| Production index | 51.5 | +0.1 pct | 0 | Production stronger than orders |
| New orders index | 50.6 | -1.0 pct | 0 | Demand softened at the margin |
| Non-manufacturing business activity | 49.4 | -0.7 pct | 0 | Service-sector felt temperature was weak |
| Composite PMI output | 50.1 | -0.4 pct | 0 | Overall activity barely expanded |

Interpretation: The macro signal was “weak expansion,” but social platforms did not make PMI a core topic. In the same window, Weibo attention went to May Day travel, AI, delisting, and single-stock moves, meaning macro data did not anchor retail narratives. The divergence likely came from non-manufacturing at 49.4 and service new orders at 44.8, both of which fit the online mix of travel enthusiasm and consumption/price anxiety. For the post-holiday market, PMI support looks weaker than structural themes.

### Evidence

* National Bureau of Statistics: April 2026 China PMI release.
* Weibo historical hot-search archive: 2026-04-24 to 2026-04-30, with 0 PMI matches.

### Caveats

Weibo hot searches are not whole-web search volume, so they cannot represent every platform. As a measure of mass-topic penetration, however, PMI’s absence is directionally meaningful.

## Question 4: Was May Day Travel Discussion Fully Priced?

### Method

I aggregated Weibo heat for “May Day/travel/culture tourism/consumption/trips/Fliggy/highway” and compared it with Tourism & Hotel (BK0485), China Tourism Group Duty Free (601888), and BTG Hotels (600258) from 2026-04-24 to 2026-04-30.

### Findings

| Metric | Apr 24-Apr 26 | Apr 27-Apr 30 | Change | Market performance |
|---|---:|---:|---:|---|
| Weibo “May Day/travel/consumption” heat | 15,059,490 | 65,359,370 | +333.87% | Public attention surged |
| Related Weibo topic count | 19 | 62 | +226.32% | Topic diffusion accelerated |
| Tourism & Hotel (BK0485) | 16188.79 (4/24) | 15907.64 (4/30) | -1.74% | Not fully priced |
| China Tourism Group Duty Free (601888) | 65.42 (4/24) | 65.62 (4/30) | +0.31% | Essentially flat |
| BTG Hotels (600258) | 15.12 (4/24) | 15.65 (4/30) | +3.51% | Stock-specific elasticity |

Interpretation: May Day discussion was not fully priced at the sector level; it produced “hot social, cold board” behavior. The market rewarded only selected hotel/travel names, while duty-free and the broader tourism-hotel board did not rise in line with social heat. Investors likely worried that high-frequency holiday expectations were already discounted, while non-manufacturing PMI and service orders below 50 capped valuation appetite. Post-holiday confirmation should come from actual traffic, hotel RevPAR, and duty-free sales rather than hot searches alone.

### Evidence

* Sina Finance/Global Times: Tongcheng Travel expected flight-search heat for April 28-April 30 to rise 26% YoY.
* Xinhua/People’s Daily Online: Didi expected May Day ride-hailing demand to rise 23% versus pre-holiday levels, intercity ride-hailing demand to rise 56%, hub-bound demand to rise 63%, and refueling demand to rise 40% versus normal days.
* Weibo historical hot-search archive and Eastmoney market API.

### Caveats

Post-level Xiaohongshu data and OTA raw daily search indices were not public. This section uses Weibo hot-search heat and public news figures as substitutes.

## Visualization-Ready Tables

### Chart 1: Sector Sentiment vs Return Quadrant

The planned x-axis was Xueqiu discussion heat change. Because historical Xueqiu hot-stock data was not publicly stable, this table substitutes “Weibo related hot-search heat change.” The y-axis remains the 2026-04-24 to 2026-04-30 return.

| Sector/theme | Heat metric | Apr 24-Apr 26 heat | Apr 27-Apr 30 heat | Heat change | Index/ticker | Period return |
|---|---|---:|---:|---:|---|---:|
| Artificial intelligence | General AI topics | 29,637,573 | 15,358,479 | -48.18% | Artificial Intelligence (BK0800) | +0.69% |
| Domestic compute/semiconductor | DeepSeek topics | 7,661,073 | 2,015,175 | -73.70% | Semiconductor (BK1036) | +5.08% |
| May Day travel consumption | May Day/travel/consumption | 15,059,490 | 65,359,370 | +333.87% | Tourism & Hotel (BK0485) | -1.74% |
| A-share stock events | A-share/stock/share price | 1,704,995 | 6,455,100 | +278.60% | CSI 300 | +0.80% |

### Chart 2: DeepSeek V4 Discussion Volume and Related Stock Moves

The planned chart used minute-level correlation around the release. Because the official release was on 2026-04-24 and public minute-level discussion volume is unavailable, this table substitutes a daily event window from April 24 to April 30.

| Date | DeepSeek topic count | DeepSeek heat | Artificial Intelligence (BK0800) | Semiconductor (BK1036) | Foxconn Industrial Internet | Inspur Information | Cambricon |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-04-24 | 6 | 4,685,912 | 1923.42 | 2386.72 | 65.01 | 74.85 | 1352.50 |
| 2026-04-27 | 2 | 541,473 | 1938.97 | 2469.91 | 67.25 | 73.16 | 1356.72 |
| 2026-04-28 | 1 | 918,977 | 1901.13 | 2420.70 | 68.20 | 70.83 | 1374.50 |
| 2026-04-29 | 0 | 0 | 1922.76 | 2425.39 | 66.26 | 72.28 | 1416.63 |
| 2026-04-30 | 1 | 554,725 | 1936.70 | 2507.92 | 62.88 | 69.75 | 1699.96 |

### Chart 3: Earnings/Risk Announcement Sentiment Score Distribution

Scoring rule: manual event score from -100 to +100 based on price reaction, Eastmoney popularity change, new-follower rate, and hot-search semantics. This is a visualization input, not a machine-learning model output.

| Sample | Event | Period return | Eastmoney popularity change | New-follower rate | Sentiment score |
|---|---|---:|---:|---:|---:|
| *ST Yan Shi (600696) | Annual report followed by suspension and proposed delisting | -5.07% | 483 -> 716 | 54.32% | -92 |
| Puyang Refractories (002225) | Smuggling indictment, limit-down open | -15.89% | 911 -> 154 | 94.36% | -84 |
| Cambricon (688256) | DeepSeek V4 Day 0 adaptation | +25.69% | 135 -> 1 | 72.61% | +78 |
| BTG Hotels (600258) | May Day travel expectations | +3.51% | 3215 -> 2330 | 53.27% | +28 |
| China Tourism Group Duty Free (601888) | May Day consumption expectations | +0.31% | 453 -> 420 | 39.98% | +6 |

### Chart 4: Substitute Table for Pre-Holiday Fund Flows

The planned northbound net-flow chart cannot be fully populated from public data: Eastmoney’s historical net-buying API only returns through 2024-08-16, and the public April 30, 2026 figure is turnover of RMB 3506.82 billion, not net buying. This substitute uses turnover, margin-financing clues, and popularity change.

| Date | Trading status | CSI 300 turnover (RMB bn) | AI turnover (RMB bn) | Semiconductor turnover (RMB bn) | Tourism & Hotel turnover (RMB bn) | Public margin/northbound clue |
|---|---|---:|---:|---:|---:|---|
| 2026-04-24 | Trading | 6800.98 | 4240.47 | 2694.02 | 58.85 | Prior baseline day |
| 2026-04-27 | Trading | 6489.05 | 4016.00 | 3068.72 | 60.58 | Margin balance RMB 27285.30 bn |
| 2026-04-28 | Trading | 6315.22 | 3901.79 | 2762.80 | 62.91 | Financing balance RMB 27002.28 bn |
| 2026-04-29 | Trading | 6810.21 | 3805.54 | 2526.14 | 71.52 | Financing balance RMB 27038.92 bn |
| 2026-04-30 | Trading | 7266.65 | 4462.23 | 3366.88 | 74.09 | Northbound turnover RMB 3506.82 bn; net buying not publicly verifiable |
| 2026-05-01 | Closed | 0 | 0 | 0 | 0 | Labor Day market holiday |

## Evidence List

* DeepSeek official transparency center: https://www.deepseek.com/en/transparency/
* National Bureau of Statistics PMI: https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260430_1963473.html
* National Bureau of Statistics PMI interpretation: https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260430_1963474.html
* Weibo historical hot-search archive: https://weibo.zhaoyizhe.com/date/20260424/ , https://weibo.zhaoyizhe.com/date/20260428/ , https://weibo.zhaoyizhe.com/date/20260430/
* Eastmoney DeepSeek/chip market report: https://finance.eastmoney.com/a/202604273719992364.html
* Sina Finance *ST Yan Shi: https://finance.sina.com.cn/wm/2026-04-30/doc-inhwfyef0348930.shtml
* Sina Finance Puyang Refractories: https://finance.sina.com.cn/roll/2026-04-27/doc-inhvxhzn7846968.shtml
* Sina Finance/Global Times May Day travel: https://finance.sina.com.cn/roll/2026-04-28/doc-inhvyzkk8593708.shtml
* Xinhua/People’s Daily Online Didi May Day travel: https://www.news.cn/tech/20260429/e1edc3156ba94bb2acb84103741e2e78/c.html
* Eastmoney northbound turnover: https://finance.eastmoney.com/a/202604303726557184.html
* Eastmoney margin balance on April 27: https://finance.eastmoney.com/a/202604283721753527.html
* Sina Finance financing balance on April 28: https://finance.sina.com.cn/stock/estate/integration/2026-04-29/doc-inhwckrh8082187.shtml
* Sina Finance financing balance on April 29: https://finance.sina.com.cn/stock/zqgd/2026-04-30/doc-inhwftwn6273460.shtml

## Follow-Up Data Items

1. Add authorized or paid historical Xueqiu Top 20 hot-stock snapshots and Xueqiu comment text.
2. Use Eastmoney Guba post-level comments to replace this report’s event-level manual sentiment scores with a proper earnings-event sentiment model.
3. Validate May Day hot-search enthusiasm against actual OTA, hotel, and duty-free holiday data.
4. Backfill the pre-holiday northbound fund-flow chart if exchanges or data vendors restore a verifiable historical net-buying series.
