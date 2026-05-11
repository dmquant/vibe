---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Convertible Bond Weekly Research Report

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Convertible Bond Weekly Research Report

**Date anchor:** Shell `date +%Y-%m-%d` = `2026-05-10`. In this report, “this week” means `2026-05-04` to `2026-05-08`; the actual A-share and convertible-bond trading days were `2026-05-06`, `2026-05-07`, and `2026-05-08`. “Previous trading day” means `2026-05-08`.

## Priority Conclusions

1. The post-holiday rebound was driven by underlying equities and parity, not by broad CB valuation expansion. The CSI Convertible Bond Index `000832.CSI` rose `1.47%` from `2026-04-30` to `2026-05-08`, below the CSI 1000’s `4.29%` and slightly above the CSI 300’s `1.34%`; the Jisilu equal-weight CB index rose `2.62%`. On valuation, average conversion premium fell from `50.53%` to `50.15%`, while median conversion premium edged up from `36.87%` to `37.04%`, so the market did not rerate all CBs uniformly.
2. Credit risk is not spreading systemically across the whole market, but stress is highly concentrated in low-priced and impaired names. The number of bonds below `90` rose from `2` to `4`; the `<90` price bucket returned `-6.75%` over the three trading days, while the `>=130` bucket returned `+3.35%`. Among active low-priced bonds, estimated three-day turnover for 三房转债, 宏图转债, 龙大转债, and 闻泰转债 was about `145.90%`, `157.85%`, `47.81%`, and `38.17%`, respectively, indicating credit repricing rather than normal volatility.
3. The forced-redemption trade has entered a high-risk stage. Jisilu’s redemption snapshot as of `2026-05-08` shows `11` bonds marked “announced forced redemption.” 华兴转债, 盈峰转债, and 万顺转2 traded `140.92%`, `109.14%`, and `90.64%` above their forced-redemption prices; investors who fail to convert or sell in time face severe redemption-price drawdown risk.
4. Small/micro-cap elasticity capital is still present, but it is favoring high-parity/high-price CBs. The CSI 1000 returned `+4.29%`, far ahead of the CSI 300’s `+1.34%`; within CBs, the `>=130` price bucket contributed the most with a `+3.35%` three-day gain. But market-wide turnover only rose from `16.56%` to `16.91%`, and CSI CB turnover value rose from `RMB 72.653bn` to `RMB 79.100bn`, a `8.87%` increase, which does not support a blanket “20% position increase” claim.
5. Downward conversion-price revisions are more about issuer-specific conversion incentives or credit defense than broad clause easing. On `2026-05-06`, 科蓝转债 cut its conversion price from `RMB 16.01/share` to `RMB 13.20/share`; on `2026-05-07`, 龙大美食 proposed a downward revision for 龙大转债; on the same date, 垒知集团 announced no revision for 垒知转债. Clause trades should be handled bond by bond based on issuer credit pressure, remaining tenor, and sellback pressure.

## Data Sources and Method

Primary sources: CSIndex historical data for `000832.CSI`, `000300.CSI`, `000852.CSI`, and `000139.CSI` via AKShare `stock_zh_index_hist_csindex`, original site [CSIndex](https://www.csindex.com.cn/); SZSE Convertible Bond Index `399307` via AKShare `stock_zh_index_daily`, original page [Sina sz399307](https://finance.sina.com.cn/realstock/company/sz399307/nc.shtml); Jisilu equal-weight CB index and redemption table via AKShare `bond_cb_index_jsl` and `bond_cb_redeem_jsl`, original pages [Jisilu CB index](https://www.jisilu.cn/web/data/cb/index) and [Jisilu redemption table](https://www.jisilu.cn/data/cbnew/#redeem); Eastmoney CB data and bond detail pages via AKShare `bond_zh_cov` and `bond_zh_cov_info`, original site [Eastmoney CB data](https://data.eastmoney.com/kzz/default.html); SW industry classification via AKShare `stock_industry_clf_hist_sw`, original file [SWS StockClassifyUse_stock.xls](https://www.swsresearch.com/swindex/pdf/SwClass2021/StockClassifyUse_stock.xls). Announcement and news evidence came from [Securities Times low-priced CB note](https://www.stcn.com/article/detail/1668949.html), [Caitong Securities CB weekly](https://www.nbd.com.cn/articles/2026-05-06/3864231.html), [科蓝转债 revision announcement](http://www.cninfo.com.cn/new/disclosure/detail?plate=szse&orgId=9900031470&stockCode=300663&announcementId=1223549912&announcementTime=2026-05-06), [龙大美食 revision proposal](http://www.cninfo.com.cn/new/disclosure/detail?plate=szse&orgId=9900023674&stockCode=002726&announcementId=1223575971&announcementTime=2026-05-07), and [垒知转债 no-revision announcement](http://www.cninfo.com.cn/new/disclosure/detail?plate=szse&orgId=9900017500&stockCode=002398&announcementId=1223585459&announcementTime=2026-05-07).

Calculation basis: index returns use the `2026-04-30` close as the pre-holiday base; bond-level weekly returns use the `2026-04-30` close, or the latest available close before that date, through the `2026-05-08` close; low-priced-bond weekly turnover is estimated as three-day trading volume times par value `100`, divided by Jisilu remaining balance; low-priced-bond YTM uses simplified XIRR based on Eastmoney bond cash-flow terms and excludes default loss, transaction costs, sellback uncertainty, and delisting uncertainty.

## Question 1: Post-Holiday Valuation Recovery

**Method.** I used `2026-04-30` as the pre-holiday base, compared cumulative returns for CSI CB, SSE CB, SZSE CB, CSI 1000, and CSI 300, and used Jisilu equal-weight CB average price, parity, average premium, and median premium to measure valuation center movement.

| Metric | 2026-04-30 | 2026-05-06 | 2026-05-07 | 2026-05-08 | 05-08 vs 04-30 |
|---|---:|---:|---:|---:|---:|
| CSI CB close `000832.CSI` | 516.08 | 522.17 | 523.75 | 523.66 | +1.47% |
| SSE CB close `000139.CSI` | 441.94 | 446.49 | 448.41 | 448.56 | +1.50% |
| SZSE CB close `399307` | 385.662 | 390.869 | 391.070 | 390.667 | +1.30% |
| CSI 1000 close `000852.CSI` | 8381.95 | 8574.56 | 8714.51 | 8741.15 | +4.29% |
| CSI 300 close `000300.CSI` | 4807.31 | 4877.09 | 4900.51 | 4871.91 | +1.34% |
| Jisilu equal-weight CB index | 2721.409 | 2765.115 | 2784.111 | 2792.658 | +2.62% |
| Average conversion premium | 50.53% | 50.89% | 50.66% | 50.15% | -0.38ppt |
| Median conversion premium | 36.87% | 39.15% | 37.50% | 37.04% | +0.17ppt |
| Median price | 138.487 | 140.188 | 140.642 | 141.465 | +2.15% |
| Median parity | 101.25 | 101.99 | 102.77 | 103.45 | +2.17% |

**Findings.** CB indices recovered, but less than small-cap equities, so CBs did not fully capture the CSI 1000 rebound. Median price gained `2.15%`, almost identical to the `2.17%` rise in median parity, meaning price recovery was mostly an equity/parity effect. Average conversion premium fell by `0.38ppt`, while median premium rose only `0.17ppt`, so there was no broad valuation expansion. CSI CB turnover value was `RMB 79.100bn` on `2026-05-08`, up `8.87%` from `RMB 72.653bn` before the holiday, a moderate rather than indiscriminate increase.

**Evidence.** CSIndex historical data for `000832.CSI`, `000300.CSI`, `000852.CSI`, and `000139.CSI`; Sina `sz399307`; Jisilu `bond_cb_index_jsl`. For holiday context, Ministry of Culture and Tourism data reported `325mn` domestic trips and `RMB 185.492bn` total tourism spending during the `2026` Labor Day holiday, implying about `RMB 570.74` per traveler.

**Caveats.** Jisilu’s equal-weight index differs from the CSI CB index’s weighting method; SZSE CB `399307` came from Sina historical data rather than CSIndex; turnover value units follow the source disclosure in RMB 100mn.

## Question 2: Credit Risk Divergence

**Method.** I examined Jisilu price-bucket counts and returns, then screened bonds priced below `90` with active trading on `2026-05-08`. I calculated three-day return, three-day trading volume, estimated three-day turnover, and simplified YTM.

| Price Bucket | Count on 2026-04-30 | Count on 2026-05-08 | 05-06 Return | 05-07 Return | 05-08 Return | Three-Day Cumulative |
|---|---:|---:|---:|---:|---:|---:|
| `<90` | 2 | 4 | -11.20% | +2.81% | +2.14% | -6.75% |
| `90-100` | 0 | 0 | +2.62% | -7.66% | 0.00% | -5.24% |
| `100-110` | 7 | 8 | -1.00% | -0.01% | +0.77% | -0.25% |
| `110-120` | 14 | 12 | +0.25% | +0.15% | -0.01% | +0.39% |
| `120-130` | 58 | 50 | +0.67% | +0.07% | -0.21% | +0.53% |
| `>=130` | 249 | 256 | +2.09% | +0.85% | +0.38% | +3.35% |

| Code | Name | Rating | 05-08 Price | 04-30 or Latest Base | Three-Day Return | Three-Day Volume | Estimated Three-Day Turnover | Simplified YTM | Key Risk |
|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| 110092 | 三房转债 | A+ | 73.291 | 82.515 | -11.18% | 30,909,230 | 145.90% | 18.09% | `*ST三房`, equity down sharply, credit repricing |
| 118027 | 宏图转债 | BB+ | 82.232 | 83.952 | -2.05% | 15,922,500 | 157.85% | 15.86% | `*ST航图`, `59.46%` premium, weak bond-floor protection |
| 128119 | 龙大转债 | BB- | 88.312 | 88.290 | +0.02% | 4,522,113 | 47.81% | 330.73% | Near `2026-07-13` maturity; high YTM reflects redemption/delisting discount |
| 110081 | 闻泰转债 | A | 89.967 | 90.098 | -0.15% | 32,807,840 | 38.17% | 17.99% | `*ST闻泰`, residual event and rating pressure |

**Findings.** Low-price and high-price/high-parity buckets moved in opposite directions: `<90` returned `-6.75%`, while `>=130` returned `+3.35%`. Estimated turnover in active low-priced bonds was extremely high, showing risk repricing and short-term trading rather than a simple cash exit. Securities Times reported that after 三房转债, 闻泰转债, 宏图转债, and 龙大转债 traded below par, 美锦转债 also briefly fell below `100` on `2026-05-08`, indicating some spillover. Still, the evidence points to concentrated pressure in impaired names, not a synchronized collapse across all lower-rated CBs.

**Evidence.** Jisilu equal-weight index price buckets; Eastmoney bond-detail cash flows; Securities Times `2026-05-09` low-priced CB note; Caitong Securities weekly noting that `10` of `333` CB-linked stocks had non-standard audit opinions, or about `3.00%`.

**Caveats.** Low-priced-bond YTM is a simplified hold-to-maturity estimate and should not be treated as risk-free return; turnover is estimated from remaining balance and can differ from actual depository and intraday round-trip activity; halted or delisting names such as 广汇转债 and 东时转债 are not included in the active low-priced-bond table.

## Question 3: Forced-Redemption Opportunities and Risks

**Method.** I used the Jisilu redemption table and screened bonds marked “announced forced redemption” as of `2026-05-08`. I calculated parity value, conversion premium, and price premium over forced-redemption price. Risk ranking prioritizes last trading date, price premium over redemption price, and conversion premium.

| Code | Name | Price | Parity Value | Conversion Premium | Redemption Price | Price vs Redemption | Last Trading Day | Trigger Count | Remaining Balance |
|---|---|---:|---:|---:|---:|---:|---|---|---:|
| 118003 | 华兴转债 | 242.948 | 243.71 | -0.31% | 100.843 | 140.92% | 2026-05-13 | 22/15\|30 | 2.214 |
| 127024 | 盈峰转债 | 211.500 | 212.52 | -0.48% | 101.129 | 109.14% | 2026-05-25 | 18/15\|30 | 6.338 |
| 123085 | 万顺转2 | 192.300 | 193.19 | -0.46% | 100.870 | 90.64% | 2026-05-12 | 26/15\|30 | 1.113 |
| 118004 | 博瑞转债 | 190.941 | 191.82 | -0.46% | 100.945 | 89.15% | 2026-05-18 | 21/15\|30 | 2.165 |
| 123236 | 家联转债 | 168.500 | 168.75 | -0.15% | 100.344 | 67.92% | 2026-05-22 | 26/15\|30 | 1.384 |
| 123126 | 瑞丰转债 | 157.000 | 156.96 | +0.03% | 102.532 | 53.12% | 2026-05-26 | 15/15\|30 | 3.100 |
| 123054 | 思特转债 | 139.200 | 139.57 | -0.27% | 102.900 | 35.28% | 2026-05-25 | 16/15\|30 | 1.559 |
| 128141 | 旺能转债 | 131.280 | 131.40 | -0.09% | 100.844 | 30.18% | 2026-05-14 | 13/15\|30 | 3.049 |

**Findings.** Announced forced-redemption bonds mostly have conversion premiums near zero or negative, so the opportunity is in the underlying equity trend and execution of sale/conversion, not in waiting for redemption. 华兴转债, 万顺转2, and 旺能转债 have last trading days on `2026-05-13`, `2026-05-12`, and `2026-05-14`, respectively, making timing risk acute. The higher the price premium over redemption price, the larger the tail loss if investors fail to convert or sell. These instruments should not be held as ordinary bond-floor assets after the redemption timetable is known.

**Evidence.** Jisilu `bond_cb_redeem_jsl` for redemption status, last trading day, redemption price, and trigger count; Eastmoney CB detail pages for conversion price and underlying price checks.

**Caveats.** The Jisilu redemption table is a status snapshot and does not include all “new this week” announcement dates; announcement-week attribution requires checking each exchange filing. Near-maturity bonds without a forced-redemption price are excluded from the drawdown calculation above.

## Question 4: Mutual-Fund and Quant Flows in Small/Micro-Cap CBs

**Method.** Daily public holdings for mutual funds and quant funds are unavailable, so I used three proxies: CSI 1000 relative to CSI 300, CB price-bucket returns and count migration, and market-wide turnover/transaction value. The flow conclusion is directional, not a precise position estimate.

| Proxy | 2026-04-30 | 2026-05-08 | Change |
|---|---:|---:|---:|
| CSI 1000 cumulative return | 0.00% | +4.29% | Small-cap equities sharply outperformed |
| CSI 300 cumulative return | 0.00% | +1.34% | Large-cap rebound was weaker |
| Jisilu market-wide turnover | 16.56% | 16.91% | +0.35ppt |
| Jisilu transaction value | 4750.80 | 4838.23 | +1.84% |
| CSI CB transaction value | RMB 72.653bn | RMB 79.100bn | +8.87% |
| Number of `>=130` CBs | 249 | 256 | +7 |
| Number of `<90` CBs | 2 | 4 | +2 |

**Findings.** Small-cap equities clearly outperformed, indicating that quant and high-elasticity capital was still willing to take beta risk, but within CBs the bid favored high-price/high-parity names rather than low-priced credit names. Market-wide turnover rose by only `0.35ppt`, and transaction-value growth was moderate, so this was not indiscriminate post-holiday buying. Caitong Securities’ weekly noted shrinking CB ETF shares and some high-level profit-taking, consistent with strong high-price bonds and weak low-price bonds this week. If CSI 1000 weakens next week, high-parity bonds require strict underlying-equity profit-taking discipline.

**Evidence.** CSIndex `000852.CSI` and `000300.CSI`; Jisilu equal-weight index price buckets; CSI CB `000832.CSI` transaction value; Caitong Securities `2026-05-06` CB weekly.

**Caveats.** Proxy variables cannot separate mutual funds, quant private funds, active trading desks, and retail investors; higher transaction value can also come from existing-capital turnover rather than net subscriptions.

## Question 5: Downward Revisions and Clause Trades

**Method.** I searched conversion-price downward-revision announcements from `2026-05-06` to `2026-05-08`, separating implemented revisions, board proposals, and no-revision decisions. I then assessed issuer intent using low price, near maturity, and sellback pressure.

| Date | Code | Name | Announcement Type | Key Number | Conclusion |
|---|---|---|---|---|---|
| 2026-05-06 | 123157 | 科蓝转债 | Implemented conversion-price revision | `RMB 16.01/share` cut to `RMB 13.20/share`, effective `2026-05-06` | Clear conversion incentive and lower conversion hurdle |
| 2026-05-07 | 128119 | 龙大转债 | Board proposal for downward revision | Proposal to revise conversion price downward, pending shareholder meeting | Near maturity and low price; more credit-defense oriented |
| 2026-05-07 | 127062 | 垒知转债 | No downward revision | Board decided not to revise this time | Issuer conversion incentive is insufficient or delayed |

**Findings.** The confirmed clause events this week do not amount to a one-way “revision wave”: there was one implementation, one proposal, and one no-revision decision. 科蓝转债 actively lowered its conversion hurdle, 龙大转债 looks more like a low-priced near-maturity credit-defense case, and 垒知转债 shows that not all issuers are willing to absorb dilution cost. If low-priced bonds remain under pressure next week, the focus should be issuers near sellback/maturity, with equities below revision triggers and meaningful remaining balance. Clause-trade priority should come before simple low-price screening.

**Evidence.** CNInfo filings: 科蓝转债 `2026-05-06`, 龙大美食 `2026-05-07`, and 垒知集团 `2026-05-07`.

**Caveats.** Announcement search may miss same-day filings from SSE or BSE if keywords differ; a board proposal does not guarantee shareholder approval or immediate parity improvement.

## Sector and Bond-Level Performance

**Method.** I merged `331` actively traded CBs with SW industry classification. CB return from `2026-04-30` to `2026-05-08` minus the corresponding underlying-stock return over the same period is used as an approximate premium contribution; sector sample size requires `n>=3`.

| Rank | SW Industry | Sample Count | Average CB Return | Parity Contribution | Premium Contribution |
|---:|---|---:|---:|---:|---:|
| 1 | Communications | 3 | +8.75% | +8.91% | -0.16% |
| 2 | Building Materials | 6 | +5.38% | +7.96% | -2.58% |
| 3 | Autos | 19 | +4.62% | +4.61% | +0.01% |
| 4 | Computers | 14 | +4.62% | +2.25% | +2.36% |
| 5 | Defense | 5 | +4.58% | +3.93% | +0.65% |

**Findings.** Communications, building materials, and autos were mainly parity-driven, while computers had a positive `+2.36%` premium contribution, better matching the “computing/technology elasticity” bid. Building materials ranked high by CB return, but its premium contribution was `-2.58%`, meaning underlying equities rose faster than CB valuations. On offense, prioritize computer/communications bonds with decent parity, controlled premium expansion, and no forced-redemption trigger. On defense, do not buy low price mechanically; exclude ST names, non-standard audit-opinion risks, and near-maturity bonds with unclear credit support.

**Bond Samples.**

| Code | Name | Underlying | Industry | CB Return | Underlying/Parity Contribution | Premium Contribution |
|---|---|---|---|---:|---:|---:|
| 127080 | 声迅转债 | *ST声迅 | Computers | +39.35% | +15.80% | +23.55% |
| 127096 | 泰坦转债 | 泰坦股份 | Machinery | +28.09% | +27.97% | +0.12% |
| 123187 | 超达转债 | 超达装备 | Autos | +23.88% | +15.29% | +8.59% |
| 127024 | 盈峰转债 | 盈峰环境 | Environmental Protection | +21.90% | +20.12% | +1.78% |
| 118003 | 华兴转债 | 华兴源创 | Machinery | +20.77% | +20.77% | +0.00% |

**Caveats.** Premium contribution is an approximation assuming stable conversion prices during the week. Downward revisions, ex-dividend adjustments, and approaching forced redemption can distort bond-level decomposition.

## Visualization-Ready Tables

### Chart 1: Index Return Comparison Line Chart

| Date | CSI CB Cumulative Return | SSE CB Cumulative Return | SZSE CB Cumulative Return | CSI 1000 Cumulative Return | CSI 300 Cumulative Return |
|---|---:|---:|---:|---:|---:|
| 2026-04-30 | 0.00% | 0.00% | 0.00% | 0.00% | 0.00% |
| 2026-05-06 | +1.18% | +1.03% | +1.35% | +2.30% | +1.45% |
| 2026-05-07 | +1.49% | +1.46% | +1.40% | +3.97% | +1.94% |
| 2026-05-08 | +1.47% | +1.50% | +1.30% | +4.29% | +1.34% |

### Chart 2: Substitute for Price-Premium Scatter Plot

The planned full “pre-holiday vs post-holiday” bond-level scatter requires historical per-bond conversion-premium snapshots. The reliable sources currently provide full current snapshots and historical aggregate Jisilu metrics, so I substitute a valuation-center shift table.

| Date | Average Price | Median Price | Median Parity | Average Conversion Premium | Median Conversion Premium | Average YTM |
|---|---:|---:|---:|---:|---:|---:|
| 2026-04-30 | 162.060 | 138.487 | 101.25 | 50.53% | 36.87% | -14.74% |
| 2026-05-06 | 164.976 | 140.188 | 101.99 | 50.89% | 39.15% | -15.51% |
| 2026-05-07 | 166.545 | 140.642 | 102.77 | 50.66% | 37.50% | -15.84% |
| 2026-05-08 | 166.935 | 141.465 | 103.45 | 50.15% | 37.04% | -16.23% |

### Chart 3: Top Sector Weekly Return Bar Chart

| SW Industry | Sample Count | Average CB Return | Parity Contribution | Premium Contribution |
|---|---:|---:|---:|---:|
| Communications | 3 | +8.75% | +8.91% | -0.16% |
| Building Materials | 6 | +5.38% | +7.96% | -2.58% |
| Autos | 19 | +4.62% | +4.61% | +0.01% |
| Computers | 14 | +4.62% | +2.25% | +2.36% |
| Defense | 5 | +4.58% | +3.93% | +0.65% |

### Chart 4: Low-Price CB YTM Heatmap

| Price Bucket | Remaining-Tenor Bucket | Sample Count | Simplified Average YTM | Risk Interpretation |
|---|---|---:|---:|---|
| `<90` | `<0.5 years` | 1 | 330.73% | 龙大转债 is near maturity; yield is mainly redemption-uncertainty discount |
| `<90` | `1-2 years` | 1 | 17.99% | 闻泰转债 still carries event risk |
| `<90` | `2-3 years` | 2 | 16.98% | 三房转债 and 宏图转债 reflect medium-tenor credit-risk premium |

## Next-Week Watchlist

1. Near forced redemption: risk reminders before the last trading days for 万顺转2 on `2026-05-12`, 华兴转债 on `2026-05-13`, and 旺能转债 on `2026-05-14`.
2. Low-price credit chain: whether 三房转债, 闻泰转债, 宏图转债, 龙大转债, and newly sub-par 美锦转债 continue to pressure the `100-110` price bucket.
3. Clause triggers: progress of 龙大转债’s revision proposal and whether other issuers near sellback/maturity with prices below `100` follow with revisions.
4. Sector rotation: hold high-parity elasticity names in computers and communications only while positive premium contribution persists; if CSI 1000 weakens, reduce bonds with announced forced redemption or excessive premium contribution first.
