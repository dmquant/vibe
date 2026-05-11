---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Convertible Bond Weekly Research: Earnings Finale, Pre-Holiday Volume Contraction, and Redemption Risk

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Convertible Bond Weekly Research: Earnings Finale, Pre-Holiday Volume Contraction, and Redemption Risk

**Coverage window:** 2026-04-27 to 2026-05-01; 2026-05-01 was a Labor Day market holiday, so the actual trading window was 2026-04-27 to 2026-04-30.  
**Conclusion first:** The CSI Convertible Bond Index was resilient but did not outperform equities. It rose **0.40%** from April 24, versus **0.80%** for CSI 300, **0.79%** for the SSE Composite, and **1.12%** for the SZSE Component. Pre-holiday turnover fell from **RMB 79.725bn** on April 24 to **RMB 72.653bn** on April 30, down **8.87%**. Valuation remains expensive: the Jisilu median conversion premium fell from **38.16%** to **36.87%**, but still ranked at the **92.80th percentile** over the latest 250 trading days. Forced redemption is the clearest single-name risk: Hengshuai CB, Yong02 CB, Wanshun CB2, Wangneng CB, and Jialian CB have all announced redemptions, so secondary-market prices face material downside if holders miss the sell/convert deadline.

## 1. Research Method and Raw Inputs

| Module | Method | Raw inputs and evidence | Basis |
|---|---|---|---|
| Index performance | Use 2026-04-24 as the base date and compare close prices and turnover from 2026-04-27 to 2026-04-30 | AkShare `index_zh_a_hist`, index codes 000832, 000300, 000001, 399001; Labor Day holiday schedule from [Yicai](https://www.yicai.com/news/103148737.html) and [The Paper](https://www.thepaper.cn/newsDetail_forward_33037046) | April 24 is the prior-week close |
| Valuation | Pull Jisilu market-wide CB index and valuation series, then calculate the latest 250-trading-day percentiles | AkShare `bond_cb_index_jsl`, fields `avg_price`, `mid_price`, `mid_premium_rt`, `avg_ytm_rt`, `price_*` | Jisilu had 330 CB samples on April 30 |
| Single-name moves | Calculate April 24 to April 30 close-to-close returns for 330 tradable Shanghai/Shenzhen CBs | AkShare `bond_zh_hs_cov_spot`, `bond_zh_hs_cov_daily`, Sina quote source | Bonds without valid April 24 or April 30 closes were excluded; near-maturity bonds were not fully excluded and are flagged in interpretation |
| Redemption monitoring | Screen Jisilu redemption table for “announced redemption”, sort by last trading date and remaining size, and calculate conversion value and premium | AkShare `bond_cb_redeem_jsl`; announcement checks: [Hengshuai CB](https://www.cfi.net.cn/p20260416004107.html), [Wanshun CB2](https://www.cfi.net.cn/p20260428005016.html), [Wangneng CB](https://paper.cnstock.com/html/2026-04/30/content_2211106.htm), [Aladdin/Zhenhua/Huicheng trading halt risk notice](https://www.njzq.com.cn/njzq/xwzx/xwzx_template.jsp?docId=9581845) | “Conversion premium” is recalculated as price / conversion value - 1 |
| Financials and credit | Select top movers, bottom movers, and redemption-related underlyings; read 2026Q1 revenue, net profit, and debt-to-asset ratio | AkShare `stock_financial_abstract_ths`, Tonghuashun financial summary; April 30 reporting-window context from [Wuliangye delay to after April 30 close](https://finance.sina.com.cn/wm/2026-04-28/doc-inhwapms8356722.shtml) | Key-sample analysis only; not a full-market financial screen |

## 2. Priority Conclusions

| Priority | Conclusion | Numeric evidence | Investment implication |
|---|---|---:|---|
| 1 | Redemption risk matters more than directional beta risk | 8 CBs had announced redemptions; among the top 5, Hengshuai CB and Yong02 CB both have 2026-05-07 as the last trading day | High-price CBs near redemption should be managed around conversion/sale deadlines, not traded for residual option premium |
| 2 | Valuation is still expensive and defensiveness is weaker | Median conversion premium 36.87%, 92.80th percentile over 250 trading days; average pre-tax YTM -14.74% | Bond-floor protection is concentrated in a small low-price subset; index-level valuation cushion is thin |
| 3 | Turnover contracted before the holiday, but the market did not gap lower | CSI CB Index +0.40%; April 30 turnover down 8.87% versus April 24 | Liquidity contraction did not trigger systemic discounting, but high-turnover thematic CBs became more volatile |
| 4 | Low-price credit recovery is limited | Number of bonds below RMB 90 rose from 1 to 2; Sanfang CB fell -21.02% | Low-price CBs are not a broad recovery trade; losses, leverage, and repayment visibility must be checked one by one |
| 5 | Post-holiday style should remain structural | Jialian CB +24.77%, Wanshun CB2 +24.07%, Qifan CB +15.82%; Sanfang CB -21.02%, Fuchun CB -17.49% | For May, prefer mid-price CBs with earnings improvement and low redemption risk; avoid high-price near-redemption names |

## 3. Question 1: How Did the Credit Environment Change After Earnings Season?

### Method

The April 30 reporting deadline week was evaluated through three lenses: Jisilu market-wide price distribution, YTM, and sample-count changes; cross-sectional weekly returns for 330 tradable CBs; and 2026Q1 revenue, net profit, and debt-to-asset ratios for key underlyings. The comparison base is the 2026-04-24 close.

### Findings

| Metric | 2026-04-24 | 2026-04-30 | Change |
|---|---:|---:|---:|
| Jisilu sample count | 334 | 330 | -4 |
| Average price | 160.901 | 162.060 | +1.159 |
| Median price | 139.833 | 138.487 | -1.346 |
| Count below RMB 90 | 1 | 2 | +1 |
| Count at RMB 90-100 | 2 | 0 | -2 |
| Average pre-tax YTM | -14.48% | -14.74% | -0.26pct |
| Mean weekly return across 330 CBs | N/A | +0.36% | N/A |
| Median weekly return across 330 CBs | N/A | -0.02% | N/A |

The credit environment did not show a broad low-price recovery after earnings season. Average price rose while median price fell, implying that gains were concentrated in high-price or thematic names rather than in the typical CB. The sub-RMB-90 bucket increased from 1 to 2 bonds, and average YTM moved further down to -14.74%, showing the coexistence of expensive valuation and credit dispersion. In the financial sample, Sanfangxiang turned profitable in 2026Q1 and Huicheng Environmental repaired earnings, but Jialian Technology’s loss widened and its debt-to-asset ratio rose to 72.15%, so improvement is uneven.

### Key Underlying 2026Q1 Financials

| Underlying | CB | 2026Q1 revenue | Revenue YoY | 2026Q1 net profit | Net profit YoY | Debt-to-asset ratio | Credit read-through |
|---|---|---:|---:|---:|---:|---:|---|
| Jialian Technology | Jialian CB | RMB 753mn | +48.89% | -RMB 98.607mn | -295.10% | 72.15% | Revenue grew fast, but losses widened; redemption dominates CB pricing |
| Wanshun New Material | Wanshun CB2 | RMB 1.698bn | +16.21% | RMB 21.937mn | +430.23% | 53.95% | Profit recovered, but announced redemption means it should not be valued as a normal CB |
| Fuchun Dyeing | Fuchun CB | RMB 873mn | +30.32% | RMB 73.297mn | +1415.88% | 65.71% | Earnings recovery is clear, but a -17.49% weekly CB drop reflects high-price trading pressure |
| Sanfangxiang | Sanfang CB | RMB 4.989bn | +24.11% | RMB 32.741mn | +127.92% | 69.89% | Turned profitable, but leverage remains high; -21.02% weekly CB drop shows credit discount persists |
| Huicheng Environmental | Huicheng CB | RMB 270mn | -5.34% | RMB 2.131mn | +130.25% | 66.00% | Net profit improved but revenue still fell; pricing was pressured by terms and trading factors |
| Wangneng Environment | Wangneng CB | RMB 836mn | -4.36% | RMB 201mn | +0.25% | 46.02% | Financial profile is stable, but announced redemption turns the CB risk into deadline risk |
| Hengshuai Inc. | Hengshuai CB | RMB 239mn | +17.65% | RMB 40.157mn | -3.93% | 30.25% | Low leverage; redemption, not credit, is the main variable |

### Evidence

Raw inputs include AkShare `bond_cb_index_jsl`, `bond_zh_hs_cov_daily`, and `stock_financial_abstract_ths`. The reporting-window backdrop is supported by the Wuliangye article showing its annual and Q1 reports were delayed to after the 2026-04-30 close.

### Caveats

Tonghuashun summaries can lag company filings. Jisilu sample count changes reflect listings, delistings, redemptions, and suspensions, not only credit migration. The financial table covers key trading and redemption-related names, not the full CB market.

## 4. Question 2: Where Is the Conversion Premium Historically, and Does Defensiveness Still Hold?

### Method

Jisilu’s latest 250-trading-day valuation series was used to calculate April 30 percentiles. Defensiveness was assessed by comparing April 24 to April 30 returns for the CSI CB Index, CSI 300, SSE Composite, and SZSE Component.

### Findings

| Metric | 2026-04-30 | Latest 250-day percentile | Versus 2026-04-24 |
|---|---:|---:|---:|
| Average price | 162.060 | 85.60% | +1.159 |
| Median price | 138.487 | 81.20% | -1.346 |
| Median conversion value | 101.25 | 42.80% | +0.80 |
| Average conversion premium | 50.53% | 90.00% | -0.64pct |
| Median conversion premium | 36.87% | 92.80% | -1.29pct |
| Average pre-tax YTM | -14.74% | 8.40% | -0.26pct |
| Turnover rate | 16.56% | 85.60% | -0.03pct |

Conversion premiums are still at high percentiles, meaning investors continue to pay a substantial price for CB optionality. Defensiveness held only partially: the CSI CB Index rose 0.40% and was less volatile than the SZSE Component, but it underperformed CSI 300, SSE Composite, and SZSE Component. With the median CB price still above RMB 138 and average YTM deeply negative, bond-like protection at the index level is weak; real defensiveness must be selected at the single-name level among low-price, profitable, non-redemption-risk bonds.

### Evidence

AkShare `bond_cb_index_jsl` shows a 36.87% median conversion premium on 2026-04-30 and 38.16% on 2026-04-24. A third-party weekly report also noted that the previous week’s median conversion premium stood at the **78.40th percentile**, still elevated; see the [Sina-reposted CB weekly](https://finance.sina.com.cn/wm/2026-04-28/doc-inhvzwqc1713568.shtml).

### Caveats

The Jisilu percentile is a 250-trading-day percentile, not a long-cycle historical percentile covering 2020-2024 rate and credit regimes. Median premium is not size-weighted, so large bank CBs and small thematic CBs affect it differently.

## 5. Question 3: Which CBs Face Imminent Forced Redemption Risk?

### Method

Jisilu’s redemption table was screened for “announced redemption”, sorted by last trading date, and the top 5 were recalculated for conversion value and conversion premium. Public announcements were used to check last trading dates, redemption prices, and trigger status.

### Findings

| Rank | Code | Name | Price | Conversion price | Stock price | Conversion value | Conversion premium | Remaining size | Trigger count | Last trading day | Redemption price |
|---:|---|---|---:|---:|---:|---:|---:|---:|---|---|---:|
| 1 | 123256 | Hengshuai CB | 195.11 | 62.55 | 122.40 | 195.68 | -0.29% | RMB 116mn | 25/15\|30 | 2026-05-07 | 100.19 |
| 2 | 113654 | Yong02 CB | 124.75 | 9.77 | 12.22 | 125.08 | -0.26% | RMB 110mn | 7/15\|30 | 2026-05-07 | 101.16 |
| 3 | 123085 | Wanshun CB2 | 193.55 | 4.99 | 9.76 | 195.59 | -1.05% | RMB 183mn | 23/15\|30 | 2026-05-12 | 100.87 |
| 4 | 128141 | Wangneng CB | 124.74 | 13.98 | 17.49 | 125.11 | -0.29% | RMB 443mn | 11/15\|30 | 2026-05-14 | 100.84 |
| 5 | 123236 | Jialian CB | 175.50 | 15.33 | 27.03 | 176.32 | -0.47% | RMB 208mn | 23/15\|30 | 2026-05-22 | 100.34 |

All five trade far above redemption price, while their conversion premiums have compressed to around zero or negative. The market has shifted from “CB option” pricing to “conversion arbitrage / exit countdown” pricing. The main investor risk is no longer premium expansion or compression, but missing the last trading or conversion deadline and being redeemed around RMB 100. The first post-holiday week is especially important for Hengshuai CB and Yong02 CB, both with 2026-05-07 as the last trading day.

### Evidence

Hengshuai’s announcement states a trading halt date of 2026-05-08 and a redemption price of RMB 100.191 per bond. Wanshun CB2 issued its sixth reminder announcement on April 28. Wangneng CB disclosed that it had triggered conditional redemption and warned holders of potential losses if they do not convert in time. The Aladdin-related risk notice, with 2026-04-27 as the last trading day and 2026-04-30 as the last conversion day, shows how short the pre-redemption action window can be.

### Caveats

Redemption counts update by trading day; this report uses data available after the 2026-04-30 close. If an issuer later chooses not to redeem, the risk profile changes, but “announced redemption” names should normally be managed according to the announcement.

## 6. Question 4: How Might Style Shift After the Holiday?

### Method

Weekly returns for 330 tradable CBs were combined with returns for 496 Eastmoney industry and sub-industry indices from 2026-04-24 to 2026-04-30. The industry table is not an equal-weighted or size-weighted return table for CB underlyings; it is a public industry-index proxy for post-holiday style.

### Findings: Top 10 and Bottom 10 Weekly Movers

| Rank | Code | Name | Apr 24 close | Apr 30 close | Weekly return | Apr 30 turnover |
|---:|---|---|---:|---:|---:|---:|
| 1 | 123236 | Jialian CB | 140.66 | 175.50 | +24.77% | RMB 2.136bn |
| 2 | 123085 | Wanshun CB2 | 156.00 | 193.55 | +24.07% | RMB 3.041bn |
| 3 | 111000 | Qifan CB | 209.13 | 242.21 | +15.82% | RMB 3.975bn |
| 4 | 127067 | Hengyi CB2 | 169.80 | 195.90 | +15.37% | RMB 1.251bn |
| 5 | 123241 | Outong CB | 833.50 | 951.00 | +14.10% | RMB 2.278bn |
| 6 | 127103 | Southeast CB | 155.24 | 176.00 | +13.37% | RMB 639mn |
| 7 | 118058 | Weidao CB | 279.93 | 317.14 | +13.29% | RMB 1.734bn |
| 8 | 123255 | Dinglong CB | 256.60 | 288.88 | +12.58% | RMB 870mn |
| 9 | 123258 | Shenglan CB2 | 177.10 | 198.54 | +12.11% | RMB 1.543bn |
| 10 | 123176 | Jingce CB2 | 285.20 | 316.50 | +10.98% | RMB 1.532bn |

| Rank | Code | Name | Apr 24 close | Apr 30 close | Weekly return | Apr 30 turnover |
|---:|---|---|---:|---:|---:|---:|
| 1 | 110092 | Sanfang CB | 104.47 | 82.52 | -21.02% | RMB 144mn |
| 2 | 111005 | Fuchun CB | 167.84 | 138.49 | -17.49% | RMB 654mn |
| 3 | 123118 | Huicheng CB | 576.00 | 516.50 | -10.33% | RMB 225mn |
| 4 | 123222 | Bojun CB | 186.55 | 170.44 | -8.64% | RMB 60mn |
| 5 | 123209 | Julong CB | 214.53 | 196.84 | -8.25% | RMB 80mn |
| 6 | 113039 | Jiaze CB | 258.60 | 237.34 | -8.22% | RMB 448mn |
| 7 | 111013 | Xingang CB | 139.70 | 128.56 | -7.97% | RMB 252mn |
| 8 | 118039 | Yubang CB | 167.76 | 154.58 | -7.86% | RMB 38mn |
| 9 | 110093 | Shenma CB | 134.84 | 124.60 | -7.59% | RMB 331mn |
| 10 | 123129 | Z Jinji CB | 136.50 | 126.30 | -7.48% | RMB 285mn |

Post-holiday style is more likely to be driven jointly by industry elasticity and single-name clauses. In Eastmoney’s industry indices, lithium, energy metals, semiconductor equipment, integrated-circuit manufacturing, and battery chemicals ranked near the top, which aligns with equipment, electronics, and new-material names in the CB gainer list. Other breeding, textile and footwear manufacturing, photovoltaic materials, and communications cable-related sectors ranked near the bottom, showing that high-expectation or expensive sectors can still be sold. For May, the better setup is likely in RMB 110-130 CBs with improved 2026Q1 earnings, moderate conversion premiums, and no near-term redemption countdown.

### Evidence

Single-name returns come from Sina historical quotes. Public weekly reports also mention Huate, Heda, Jinhong, and Qifan among leading gainers, and Huicheng, Libai, and Wangneng among leading decliners; see [Guosen weekly summary](https://www.fxbaogao.com/detail/5379122) and the [Sina-reposted weekly report](https://finance.sina.com.cn/wm/2026-04-28/doc-inhvzwqc1713568.shtml).

### Caveats

This report did not obtain a reliable public mapping from every CB underlying to Shenwan Level-1 industry. Industry interpretation therefore uses Eastmoney industry and sub-industry indices as a proxy. High-price CB moves are jointly affected by trading halts, redemption, liquidity, and underlying-stock events, so they should not be directly extrapolated into sector allocation.

## 7. Visualization-Ready Data Tables

### Chart 1: CSI CB Index vs CSI 300, Normalized

| Date | CSI CB close | CSI CB normalized | CSI 300 close | CSI 300 normalized |
|---|---:|---:|---:|---:|
| 2026-04-24 | 514.03 | 100.000 | 4769.37 | 100.000 |
| 2026-04-27 | 515.81 | 100.346 | 4770.95 | 100.033 |
| 2026-04-28 | 512.19 | 99.642 | 4758.21 | 99.766 |
| 2026-04-29 | 516.48 | 100.477 | 4810.35 | 100.859 |
| 2026-04-30 | 516.08 | 100.399 | 4807.31 | 100.795 |

### Chart 2: Valuation and Price Distribution

| Date | Sample count | Average price | Median price | Median conversion value | Average conversion premium | Median conversion premium | Average YTM | <90 | 90-100 | 100-110 | 110-120 | 120-130 | >130 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 2026-04-24 | 334 | 160.901 | 139.833 | 100.45 | 51.17% | 38.16% | -14.48% | 1 | 2 | 8 | 14 | 64 | 245 |
| 2026-04-27 | 334 | 162.048 | 139.722 | 100.39 | 50.63% | 38.98% | -15.01% | 0 | 3 | 8 | 14 | 62 | 247 |
| 2026-04-28 | 333 | 160.045 | 138.310 | 98.99 | 50.61% | 38.01% | -14.67% | 1 | 2 | 8 | 14 | 66 | 242 |
| 2026-04-29 | 331 | 162.318 | 139.707 | 100.65 | 50.48% | 37.97% | -15.19% | 1 | 1 | 7 | 13 | 62 | 247 |
| 2026-04-30 | 330 | 162.060 | 138.487 | 101.25 | 50.53% | 36.87% | -14.74% | 2 | 0 | 7 | 14 | 58 | 249 |

The original plan requested a conversion-premium histogram. The public interface did not return a full single-name premium distribution, so this table substitutes a price-bucket distribution plus average and median conversion premiums.

### Chart 3: Top 5 Redemption Alerts

| Code | Name | Current price | Conversion price | Redemption trigger price | Stock price | Trigger progress | Last trading day | Remaining size | Conversion premium |
|---|---|---:|---:|---:|---:|---|---|---:|---:|
| 123256 | Hengshuai CB | 195.11 | 62.55 | 81.31 | 122.40 | 25/15\|30 | 2026-05-07 | RMB 116mn | -0.29% |
| 113654 | Yong02 CB | 124.75 | 9.77 | 12.70 | 12.22 | 7/15\|30 | 2026-05-07 | RMB 110mn | -0.26% |
| 123085 | Wanshun CB2 | 193.55 | 4.99 | 6.49 | 9.76 | 23/15\|30 | 2026-05-12 | RMB 183mn | -1.05% |
| 128141 | Wangneng CB | 124.74 | 13.98 | 18.17 | 17.49 | 11/15\|30 | 2026-05-14 | RMB 443mn | -0.29% |
| 123236 | Jialian CB | 175.50 | 15.33 | 19.93 | 27.03 | 23/15\|30 | 2026-05-22 | RMB 208mn | -0.47% |

### Chart 4: Industry Return Horizontal Bar Chart Data

| Rank | Industry/sub-industry | Code | Apr 24 close | Apr 30 close | Weekly return |
|---:|---|---|---:|---:|---:|
| 1 | Lithium | BK1621 | 21866.73 | 24844.06 | +13.62% |
| 2 | Sports III | BK1564 | 1207.05 | 1348.62 | +11.73% |
| 3 | Energy metals | BK1015 | 1189.05 | 1316.77 | +10.74% |
| 4 | Semiconductor equipment | BK1326 | 33823.86 | 36601.59 | +8.21% |
| 5 | Other crop planting | BK1516 | 1066.49 | 1146.96 | +7.55% |
| 6 | Other accessories | BK1356 | 629.27 | 676.01 | +7.43% |
| 7 | Tungsten | BK1625 | 8579.61 | 9188.98 | +7.10% |
| 8 | Integrated-circuit manufacturing | BK1329 | 3196.62 | 3418.03 | +6.93% |
| 9 | Battery chemicals | BK1302 | 13928.19 | 14891.01 | +6.91% |
| 10 | Image media | BK1297 | 3446.56 | 3684.67 | +6.91% |
| 487 | Video media | BK1296 | 979.40 | 923.36 | -5.72% |
| 488 | Photovoltaic materials | BK1318 | 14946.89 | 14009.22 | -6.27% |
| 489 | Education operations and others | BK1556 | 1471.32 | 1363.12 | -7.35% |
| 490 | Textile and footwear manufacturing | BK1347 | 475.52 | 435.34 | -8.45% |
| 491 | Other breeding | BK1510 | 1004.78 | 900.87 | -10.34% |

The original plan requested “average performance by CB underlying industry.” Public interfaces could not reliably populate weighted returns by each CB underlying’s industry, so this table uses Eastmoney industry and sub-industry indices as a substitute style chart.

## 8. Allocation Recommendations and Follow-Ups

1. **Screen redemption first.** After the holiday, remove announced-redemption CBs near their last trading day, especially Hengshuai CB and Yong02 CB around 2026-05-07.
2. **Control valuation.** The median conversion premium is still at the 92.80th percentile over the latest 250 trading days, so chasing high-price CBs leaves little room for error.
3. **Credit screening is more important than low-price speculation.** Low-price CBs need narrower losses, better cash flow, manageable leverage, and no repayment uncertainty; low price alone is not enough.
4. **Focus on mid-price manufacturing and earnings repair after the holiday.** CBs around RMB 110-130 with improving 2026Q1 earnings, moderate conversion premium, and no redemption countdown are better May core holdings.
5. **Data to complete next.** With Wind/Choice access, add the full single-name conversion-premium histogram, Shenwan Level-1 industry mapping, rating-group returns, and debt-premium distribution.
