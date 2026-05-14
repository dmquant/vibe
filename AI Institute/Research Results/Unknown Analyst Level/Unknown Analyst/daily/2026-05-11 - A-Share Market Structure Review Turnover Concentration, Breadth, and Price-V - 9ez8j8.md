---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# A-Share Market Structure Review: Turnover Concentration, Breadth, and Price-Volume Features

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# A-Share Market Structure Review: Turnover Concentration, Breadth, and Price-Volume Features

**Trading day: 2026-05-11; date anchor: shell `date +%Y-%m-%d` = `2026-05-11`.**

## Priority Conclusions

1. **Turnover remained in a high-heat zone, and today was a volume-backed rally.** National Business Daily reported **Rmb3.54tn** in Shanghai/Shenzhen turnover, up **Rmb490.3bn** from the prior trading day, with turnover above **Rmb3tn** for the **4th** consecutive trading day. The Shanghai Composite, Shenzhen Component, and ChiNext rose **1.08% / 2.16% / 3.50%**, respectively. [Source: National Business Daily](https://www.nbd.com.cn/articles/2026-05-11/4386652.html)
2. **Turnover was concentrated in AI hardware, semiconductors, and optical-communications leaders, but not yet at an extreme single-stock crowding level.** Based on a Sina Finance `hs_a` stock-level turnover scrape, the Top 10 names traded **Rmb236.501bn**, or about **6.68%** of Shanghai/Shenzhen turnover; the Top 20 traded **Rmb390.914bn**, or **11.05%**. This is elevated concentration, but it still looks like “main-theme absorption plus broad high turnover,” not an index move driven only by a handful of mega-cap stocks.
3. **Market breadth was constructive, but dispersion was visible.** In the Sina `hs_a` sample of **5514** stocks, **3121** rose, **2238** fell, and **155** were flat; the advance/decline ratio was about **1.39:1**. National Business Daily also noted more than **3100** advancing stocks and more than 100 limit-up stocks for the **4th** consecutive trading day. [Source: National Business Daily](https://www.nbd.com.cn/articles/2026-05-11/4386652.html)
4. **The white/yellow-line divergence matches broad-index performance: large-cap growth and STAR Market exposure led, while small caps did not fully lag.** STAR 50 rose **4.65%**, ChiNext rose **3.50%**, and CSI 300, CSI 500, and CSI 1000 rose **1.64% / 1.67% / 1.44%**; BSE 50 fell **0.70%**. Risk appetite was released mainly through growth-tech chains rather than through an indiscriminate market-wide rally.
5. **Margin financing is still increasing market elasticity.** As of **2026-05-08**, Shanghai/Shenzhen margin financing balances stood at **Rmb2773.528bn**, up **Rmb15.805bn** from the prior trading day. Together with high turnover and a high number of limit-up names, this points to an aggressive funding structure. [Source: National Business Daily](https://www.nbd.com.cn/articles/2026-05-11/4386084.html)

## Index and Turnover Overview

| Metric | Close/Data | Change | Turnover | Structural Read |
| --- | ---: | ---: | ---: | --- |
| Shanghai Composite | 4225.02 | +1.08% | Rmb1584.367bn | Broke above 4200 on higher volume, with visible large-cap support |
| Shenzhen Component | 15899.30 | +2.16% | Rmb1954.495bn | Growth and electronics chains led |
| ChiNext | 3928.97 | +3.50% | Rmb922.847bn | High-beta growth assets were strongest |
| STAR 50 | 1716.69 | +4.65% | Rmb183.092bn | Semiconductor and compute-hardware demand drove the move |
| CSI 300 | 4951.84 | +1.64% | Rmb904.479bn | Large-cap growth outperformed traditional heavyweights |
| CSI 500 | 8839.74 | +1.67% | Rmb709.125bn | Mid-caps participated, but lagged STAR/ChiNext beta |
| CSI 1000 | 8866.78 | +1.44% | Rmb742.541bn | Small-cap breadth improved, but this was not the main battlefield |
| BSE 50 | 1426.31 | -0.70% | Rmb26.843bn | Risk appetite did not spill over evenly into the Beijing Stock Exchange |

Note: index quotes are from the Sina Finance quote API. Shanghai/Shenzhen turnover summed to about **Rmb3538.862bn**, consistent with National Business Daily’s **Rmb3.54tn** closing headline. Sina quote API example: https://hq.sinajs.cn/list=sh000001,sz399001,sz399006,sh000688,sh000300,sh000905,sh000852,bj899050

## Turnover Concentration

| Scope | Turnover | Share of Shanghai/Shenzhen Turnover | Conclusion |
| --- | ---: | ---: | --- |
| Top 5 stocks | Rmb138.945bn | 3.93% | Core names absorbed heavy flow, but the tape was not single-stock driven |
| Top 10 stocks | Rmb236.501bn | 6.68% | Optical communications, semiconductors, PCB, and power-equipment chains dominated |
| Top 20 stocks | Rmb390.914bn | 11.05% | The main theme broadened across the AI-hardware supply chain |
| Top 50 stocks | Rmb678.833bn | 19.18% | High-turnover crowding was concentrated in growth sectors |
| Top 100 stocks | Rmb981.717bn | 27.74% | Nearly 30% of turnover was handled by the top 100 names, indicating high market heat |

Top 10 turnover stocks are shown below; turnover is in Rmb bn:

| Rank | Ticker | Name | Change | Turnover | Turnover Ratio |
| ---: | --- | --- | ---: | ---: | ---: |
| 1 | sz300502 | 新易盛 | +2.18% | 31.812 | 6.50% |
| 2 | sz300308 | 中际旭创 | +6.11% | 29.399 | 2.91% |
| 3 | sh688256 | 寒武纪 | +1.48% | 27.509 | 3.69% |
| 4 | sh688008 | 澜起科技 | +18.52% | 26.886 | 9.61% |
| 5 | sz300476 | 胜宏科技 | +5.46% | 23.339 | 7.25% |
| 6 | sh603986 | 兆易创新 | +8.39% | 20.674 | 8.61% |
| 7 | sz002475 | 立讯精密 | +6.69% | 20.584 | 3.71% |
| 8 | sz002384 | 东山精密 | +3.27% | 19.364 | 6.45% |
| 9 | sh688041 | 海光信息 | +8.01% | 18.642 | 2.34% |
| 10 | sh600522 | 中天科技 | +7.24% | 18.294 | 12.16% |

Calculation source: Sina Finance Market Center `hs_a` stock-level quotes, sorted by turnover in descending order; API template: https://vip.stock.finance.sina.com.cn/quotes_service/api/json_v2.php/Market_Center.getHQNodeData?page=1&num=100&sort=amount&asc=0&node=hs_a&symbol=&_s_r_a=page

## Breadth Distribution

| Range | Number of Stocks | Observation |
| --- | ---: | --- |
| Gain >= 10% | 132 | Both 20cm and 10cm limit-style moves contributed; money-making effect was strong |
| +5% to +10% | 351 | The main theme broadened visibly |
| 0 to +2% | 1776 | Many stocks rose moderately |
| Flat | 155 | Neutral names were limited |
| -2% to 0 | 1766 | Most decliners had controlled drawdowns |
| -5% to -2% | 410 | Dispersion pressure was mostly outside the main theme |
| -10% to -5% | 57 | Localized loss-making effect remained |
| Decline <= -10% | 5 | Downside pressure was not systemic |

Using the approximate thresholds of `changepercent >= 9.9% / <= -9.9%`, the Sina `hs_a` sample had **163** limit-up-or-near-limit-up names and **7** limit-down-or-near-limit-down names. This approximation does not adjust security by security for ST status, BSE rules, or different daily price-limit regimes; it is used only as a market-temperature gauge.

## Price-Volume Features

- **The rally came with higher volume, not with shrinking liquidity.** Shanghai/Shenzhen turnover increased by **Rmb490.3bn** versus the prior trading day, while major indices rose together. Incremental trading and price direction were aligned.
- **Growth indices outperformed traditional broad benchmarks.** ChiNext rose **3.50%** and STAR 50 rose **4.65%**, well above CSI 300’s **1.64%**. The market was repricing AI compute, semiconductors, PCB, optical communications, and related hardware chains.
- **Large-cap and main-theme stocks contributed together.** National Business Daily explicitly noted a clear white/yellow-line divergence and stronger heavyweight performance; the stock-level turnover table shows the heaviest trading clustered in growth-tech chains. [Source: National Business Daily](https://www.nbd.com.cn/articles/2026-05-11/4386652.html)
- **The downside was structural rather than systemic.** The closing review highlighted weakness in port and shipping concepts. The stock-level distribution also shows most decliners were in the **0 to -2%** bucket, suggesting the main index risk is high-level theme volatility, not broad-based selling.

## Strategy View

Today’s structure was an aggressive market: high turnover, many limit-up names, strong growth leadership, and still-acceptable breadth. The key question is not whether there is a money-making effect, but whether **turnover above Rmb3tn can persist**. If turnover stays above **Rmb3tn** and the Top 20 turnover share does not quickly rise above **15%**, the market can still progress through theme rotation and high-level consolidation. If turnover falls while the Top 10/Top 20 share keeps rising, that would signal a shift from broadening to crowding, and drawdown elasticity would increase materially.

## Follow-Up Items

| Item to Track | Trigger | Meaning |
| --- | --- | --- |
| Shanghai/Shenzhen turnover | Falls below Rmb3tn for consecutive sessions | The high-heat trading environment is cooling; chasing strength becomes less attractive |
| Top 20 turnover share | Rises above 15% | Main-theme crowding is rising; watch for high-level volatility |
| Advancing stocks | Drops below 2500 | Money-making effect is shifting from broadening to contraction |
| Shanghai/Shenzhen margin financing balance | Daily increase remains above Rmb15bn | Levered money is still amplifying market beta, but volatility will also rise |
| This week’s lockup expiry | 37 stocks and about Rmb38.187bn of lockup expiry from May 11 to May 15 | Stock-specific supply pressure, not a market-wide pressure point, but high-expiry-ratio names should be avoided; source: [Eastmoney / Securities Times DataBao](https://finance.eastmoney.com/a/202605093732254056.html) |

## Data Scope and Citations

- Date anchor: local shell `date +%Y-%m-%d` returned `2026-05-11`.
- Closing headline: National Business Daily, 2026-05-11 15:03:41, **Rmb3.54tn** Shanghai/Shenzhen turnover, **Rmb490.3bn** volume increase, more than **3100** advancers, and more than 100 limit-up stocks for the **4th** consecutive trading day. https://www.nbd.com.cn/articles/2026-05-11/4386652.html
- Stock-level calculations: Sina Finance Market Center `hs_a`, **5514** stocks scraped for turnover concentration and breadth distribution. https://vip.stock.finance.sina.com.cn/quotes_service/api/json_v2.php/Market_Center.getHQNodeData?page=1&num=100&sort=amount&asc=0&node=hs_a&symbol=&_s_r_a=page
- Index quotes: Sina Finance quote API, 2026-05-11 closing quotes. https://hq.sinajs.cn/list=sh000001,sz399001,sz399006,sh000688,sh000300,sh000905,sh000852,bj899050
- Margin financing balance: National Business Daily, 2026-05-11 08:48:28; as of **2026-05-08**, Shanghai/Shenzhen margin financing balances were **Rmb2773.528bn**, up **Rmb15.805bn** day on day. https://www.nbd.com.cn/articles/2026-05-11/4386084.html
- Lockup expiry: Eastmoney reposting Securities Times DataBao, 2026-05-09; next week has **37** stocks with lockup expiry, total market value **Rmb38.187bn**. https://finance.eastmoney.com/a/202605093732254056.html
