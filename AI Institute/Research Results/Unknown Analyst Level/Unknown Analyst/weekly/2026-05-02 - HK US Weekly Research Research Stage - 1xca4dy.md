---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# HK/US Weekly Research (Research Stage)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# HK/US Weekly Research (Research Stage)

## Prioritized Conclusions

1. Hong Kong lagged U.S. equities this week (U.S. window: 2026-04-24 to 2026-05-01; Hong Kong window: 2026-04-24 to 2026-04-30): S&P 500 +0.91%, Nasdaq Composite +1.12%, Hang Seng Index -0.78%, HSCEI -1.07%, 3033.HK -0.50%. The conclusion is not a broad Hong Kong market break, but pressure from heavyweight internet and EV-chain names, with an added price-discovery lag because Hong Kong and Stock Connect were closed on 2026-05-01.
2. The U.S. tech theme remains “AI revenue validation versus capex punishment”: GOOGL +11.99% led, AAPL +3.35%, AMZN +1.62%; but META -9.82%, NVDA -4.72%, and MSFT -2.40%. Within the same AI theme, the market rewarded Google Cloud +63% and backlog above $460 billion, while penalizing META’s 2026 capex guidance increase to $125-145 billion.
3. Chinese ADRs mostly trade at premiums to Hong Kong shares on the latest comparable close: BABA +2.20%, BIDU +3.85%, NTES +3.27%, LI +1.89%, with only NIO at -5.89%. This means Friday’s U.S. session did not send a clear new downside signal for Hong Kong tech; for several dual-listed internet names it implies potential catch-up.
4. HK Connect’s structural support has not disappeared: HKEX reported March Southbound ADT of HK$135.334 billion, up 30.0% from February’s HK$104.102 billion and equal to 44.5% of Hong Kong securities-market ADT of HK$303.957 billion; Q1 2026 Southbound ADT was HK$122.5 billion, +11.5% YoY. But this is turnover, not net buying, so it supports the case for strong participation rather than directional inflows.
5. Macro remains a constraint: the FOMC kept the fed funds target range at 3.50%-3.75% on 2026-04-29, with four dissents; the 10Y UST yield rose from 4.310% to 4.378% (+6.8 bp), while the 5Y rose from 3.920% to 4.021% (+10.1 bp). China’s April manufacturing PMI stayed expansionary at 50.3, but non-manufacturing PMI fell into contraction at 49.4, so Hong Kong allocation should prioritize high-quality internet, cash flow, and shareholder-return names rather than a broad beta add.

> Upstream note: `01_weekly_plan.md` was missing from the workspace, and no prior plan text was visible in this conversation; this research package was reconstructed from the prompt into 5 questions and 5 chart-ready data tables. All price calculations use Yahoo Finance via `yfinance`, downloaded on 2026-05-03; returns use adjusted close/close, with indices and FX based on available closing levels.

## Question 1: Did Hong Kong materially underperform the U.S. this week?

### Method

I compared 2026-04-24 closes with the latest available closes: 2026-05-01 for U.S. equities, ETFs, rates, and DXY, and 2026-04-30 for Hong Kong equities. YTD uses 2025-12-31 closes as the base. Prices are from Yahoo Finance via `yfinance`; Hong Kong had no cash-market close on 2026-05-01 because Hong Kong and Stock Connect were closed.

### Findings

| Asset | Ticker | Latest Date | Latest Close | Weekly Change | YTD |
|---|---:|---:|---:|---:|---:|
| S&P 500 | ^GSPC | 2026-05-01 | 7230.1201 | +0.91% | +5.62% |
| Nasdaq Composite | ^IXIC | 2026-05-01 | 25114.4395 | +1.12% | +8.06% |
| Russell 2000 | ^RUT | 2026-05-01 | 2812.8201 | +0.93% | +13.33% |
| PHLX Semiconductor | ^SOX | 2026-05-01 | 10595.3398 | +0.78% | +49.59% |
| VIX | ^VIX | 2026-05-01 | 16.9900 | -9.19% | +13.65% |
| Hang Seng Index | ^HSI | 2026-04-30 | 25776.5293 | -0.78% | +0.57% |
| Hang Seng China Enterprises | ^HSCE | 2026-04-30 | 8681.8301 | -1.07% | -2.60% |
| Hang Seng TECH ETF proxy | 3033.HK | 2026-04-30 | 4.7760 | -0.50% | -11.39% |
| KWEB | KWEB | 2026-05-01 | 28.7800 | -0.17% | -15.48% |
| MCHI | MCHI | 2026-05-01 | 57.7200 | -0.16% | -3.91% |
| FXI | FXI | 2026-05-01 | 36.8100 | -0.14% | -3.87% |
| US 10Y yield | ^TNX | 2026-05-01 | 4.3780 | +6.8 bp | +21.5 bp |
| DXY | DX-Y.NYB | 2026-05-01 | 98.2100 | -0.30% | -0.07% |
| USD/HKD | USDHKD=X | 2026-05-02 | 7.8343 | +0.03% | +0.69% |
| USD/CNY proxy | USDCNY=X | 2026-05-02 | 6.8271 | +0.02% | N/A |

Hong Kong’s relative weakness was concentrated in HSCEI and large index weights, not in a fresh offshore China ETF selloff: KWEB, MCHI, and FXI were only slightly lower in U.S. trading hours. The U.S. advance was not broad risk appetite; it was an earnings-driven rotation, with GOOGL and AAPL contributing more than semiconductors. VIX fell 1.72 points, indicating calmer volatility, but the 10Y yield rose 6.8 bp, limiting valuation expansion for long-duration assets. Hong Kong’s market holiday means Friday’s ADR information has not yet been fully reflected in the local cash market.

### Evidence

Prices: Yahoo Finance via `yfinance`, tickers `^GSPC`, `^IXIC`, `^RUT`, `^SOX`, `^VIX`, `^HSI`, `^HSCE`, `3033.HK`, `KWEB`, `MCHI`, `FXI`, `^TNX`, `DX-Y.NYB`, `USDHKD=X`, `USDCNY=X`, downloaded on 2026-05-03. Trading calendar: the HKEX Stock Connect page shows both Southbound and Northbound closed on 2026-05-01, and also closed on 2026-05-04 and 2026-05-05: https://www.hkex.com.hk/Mutual-Market/Stock-Connect?sc_lang=en

### Caveats

Yahoo Finance index, ETF, and FX data are not official exchange closing files. `^TNX` is a yield quote and is interpreted directly in percentage-point terms here. Yahoo Finance had only the latest 2026-05-01 point for USD/CNH, so the weekly sequence uses USD/CNY proxy. Hong Kong lacks a 2026-05-01 cash close, so the U.S.-Hong Kong weekly comparison has a one-trading-day mismatch.

## Question 2: Is HK Connect still supporting Hong Kong liquidity?

### Method

I used HKEX official monthly and quarterly disclosures, comparing February and March 2026 Stock Connect ADT, and calculated Southbound ADT as a share of Hong Kong securities-market ADT. Q1 data comes from HKEX’s Q1 2026 Hong Kong Market Update published on 2026-04-29.

### Findings

| Metric | Period | Value | Comparison | Derivation |
|---|---:|---:|---:|---:|
| Southbound Stock Connect ADT | 2026-03 | HK$135.334 billion | MoM +30.0% | HKEX monthly disclosure |
| Southbound Stock Connect ADT | 2026-02 | HK$104.102 billion | N/A | HKEX monthly disclosure |
| Northbound Stock Connect ADT | 2026-03 | RMB301.573 billion | MoM -0.4% | HKEX monthly disclosure |
| Northbound Stock Connect ADT | 2026-02 | RMB302.735 billion | N/A | HKEX monthly disclosure |
| Hong Kong securities-market ADT | 2026-03 | HK$303.957 billion | MoM +23.2% | HKEX monthly disclosure |
| Southbound ADT/Hong Kong securities-market ADT | 2026-03 | 44.5% | N/A | 135.334/303.957 |
| Southbound Stock Connect ADT | Q1 2026 | HK$122.5 billion | YoY +11.5% | HKEX Q1 update |
| Northbound Stock Connect ADT | Q1 2026 | RMB324.1 billion | YoY +69.6% | HKEX Q1 update |

Southbound ADT grew faster month on month than Hong Kong market-wide ADT in March, showing stronger Mainland trading participation. A 44.5% share means Southbound is a major marginal source of Hong Kong turnover, not just auxiliary liquidity. Q1 Northbound ADT +69.6% YoY also shows Connect activity was strong overall, but that conclusion is about trading activity, not directional net buying. For strategy, Connect supports a liquidity floor, but it is not by itself a reason to chase rallies.

### Evidence

HKEX Monthly Market Highlights: the Stock Connect Summary reports March 2026 Northbound ADT of RMB301,573 million and Southbound ADT of HK$135,334 million, versus February 2026 RMB302,735 million and HK$104,102 million; Securities Market Turnover reports March 2026 ADT of HK$303,957 million: https://www.hkex.com.hk/Market-Data/Statistics/Consolidated-Reports/HKEX-Monthly-Market-Highlights?sc_lang=en  
HKEX Q1 2026 Hong Kong Market Update: Q1 2026 Southbound ADT HK$122.5 billion, +11.5% YoY; Northbound ADT RMB324.1 billion, +69.6% YoY: https://www.hkexgroup.com/Media-Centre/Insight/Insight/2026/HKEX-Insight/Q1-2026-Hong-Kong-Market-Update?sc_lang=en

### Caveats

HKEX’s monthly market highlights run through March 2026 and do not cover the final week of April. ADT is buy-plus-sell turnover, not net inflow. Southbound single-stock net buying and holding changes require daily Stock Connect or CCASS data; this stage could not reliably extract full official static detail for 2026-04-27 to 2026-04-30.

## Question 3: What signal do ADRs send for the next Hong Kong open?

### Method

I compared 2026-05-01 ADR closes with 2026-04-30 Hong Kong closes, using ADS ratios and USD/HKD 7.8343 to calculate ADR implied HKD/share and ADR premium/discount. Hong Kong stock weekly changes use 2026-04-24 to 2026-04-30; ADRs use 2026-04-24 to 2026-05-01.

### Findings

| Company | ADR | Hong Kong | ADS Ratio | ADR Date | ADR USD | Hong Kong Date | Hong Kong HKD | ADR Implied HKD/Share | Premium/Discount |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Alibaba | BABA | 9988.HK | 8 | 2026-05-01 | 131.50 | 2026-04-30 | 126.00 | 128.78 | +2.20% |
| JD.com | JD | 9618.HK | 2 | 2026-05-01 | 29.96 | 2026-04-30 | 116.30 | 117.36 | +0.91% |
| Baidu | BIDU | 9888.HK | 8 | 2026-05-01 | 125.88 | 2026-04-30 | 118.70 | 123.27 | +3.85% |
| NetEase | NTES | 9999.HK | 5 | 2026-05-01 | 117.98 | 2026-04-30 | 179.00 | 184.86 | +3.27% |
| Li Auto | LI | 2015.HK | 2 | 2026-05-01 | 17.57 | 2026-04-30 | 67.55 | 68.82 | +1.89% |
| NIO | NIO | 9866.HK | 1 | 2026-05-01 | 5.91 | 2026-04-30 | 49.20 | 46.30 | -5.89% |
| XPeng | XPEV | 9868.HK | 2 | 2026-05-01 | 15.83 | 2026-04-30 | 61.00 | 62.01 | +1.65% |

| Hong Kong Tech | Ticker | Latest Date | Latest Close | Weekly Change | YTD |
|---|---:|---:|---:|---:|---:|
| Tencent | 0700.HK | 2026-04-30 | 467.80 | -5.19% | -21.90% |
| Alibaba HK | 9988.HK | 2026-04-30 | 126.00 | -4.40% | -11.76% |
| Meituan | 3690.HK | 2026-04-30 | 83.25 | +0.97% | -19.02% |
| JD.com HK | 9618.HK | 2026-04-30 | 116.30 | -1.86% | +4.87% |
| Baidu HK | 9888.HK | 2026-04-30 | 118.70 | -2.22% | -9.67% |
| Kuaishou | 1024.HK | 2026-04-30 | 42.90 | -1.83% | -32.71% |
| Xiaomi | 1810.HK | 2026-04-30 | 29.02 | -6.99% | -25.97% |
| NetEase HK | 9999.HK | 2026-04-30 | 179.00 | +4.74% | -16.64% |

The ADR table points to positive next-open read-through mainly for BIDU, NTES, and BABA, while NIO carries a material discount. Hong Kong’s weekly pressure came from Tencent, Alibaba, and Xiaomi, and their YTD losses remain large, showing investors still demand a high risk premium for Chinese internet and hardware-chain exposure. Meituan and NetEase rose against the tape, confirming internal dispersion. Overall, ADRs do not confirm another sharp leg down in Hong Kong tech; they suggest a possible catch-up in selected low-positioned heavyweights, while EV high beta remains split.

### Evidence

Prices and ADS-ratio conversion: Yahoo Finance via `yfinance`, tickers `BABA`, `9988.HK`, `JD`, `9618.HK`, `BIDU`, `9888.HK`, `NTES`, `9999.HK`, `LI`, `2015.HK`, `NIO`, `9866.HK`, `XPEV`, `9868.HK`, `USDHKD=X`, downloaded on 2026-05-03. Hong Kong trading calendar from the same HKEX Stock Connect page: https://www.hkex.com.hk/Mutual-Market/Stock-Connect?sc_lang=en

### Caveats

ADR premium uses one point-in-time close and is affected by the Hong Kong holiday, FX, liquidity, and ADR fees; it is not a risk-free arbitrage return. ADS ratios must be updated if companies change share structures. Tencent’s OTC ADR `TCEHY` has weaker comparability, so it is excluded from the core premium table.

## Question 4: What is the post-earnings U.S. tech theme?

### Method

I paired 2026-04-24 to 2026-05-01 share-price moves with the latest official earnings metrics, focusing on cloud growth, AI run-rate, capex guidance, and market reaction. Company data prioritizes company IR/press releases; prices use Yahoo Finance via `yfinance`.

### Findings

| Company | Ticker | Weekly Change | Latest Earnings Core Numbers | AI/Cloud/Capex Signal | Price-Reaction Read |
|---|---:|---:|---|---|---|
| Alphabet | GOOGL | +11.99% | Q1 2026 revenue $109.896 billion, +22%; EPS $5.11 | Google Cloud revenue $20.028 billion, +63%; backlog >$460 billion | Market rewarded cloud acceleration and backlog, not just an AI narrative |
| Apple | AAPL | +3.35% | FY26 Q2 revenue $111.2 billion, +17%; EPS $2.01, +22% | Services all-time high; $100 billion additional buyback | Quality defensiveness and buybacks supported valuation |
| Amazon | AMZN | +1.62% | Q1 release: AWS +28%; Q2 net sales guide $194-199 billion | TTM purchases of property and equipment $59.3 billion; chips run-rate >$20 billion | AWS acceleration partly offsets AI capex concerns |
| Microsoft | MSFT | -2.40% | FY26 Q3 revenue $82.9 billion, +18%; EPS $4.27, +23% | Microsoft Cloud $54.5 billion, +29%; Azure +40%; AI run-rate $37 billion, +123% | Fundamentals are strong, but investors are more demanding on AI payback period |
| NVIDIA | NVDA | -4.72% | FY26 revenue $215.938 billion, +65%; Data Center FY revenue $193.7 billion, +68% | FY27 Q1 revenue guide $78.0 billion; no Data Center compute revenue from China assumed | High-expectation assets are more sensitive to China and supply assumptions |
| Meta | META | -9.82% | Q1 2026 revenue $56.31 billion, +33%; capex $19.84 billion | 2026 capex guide raised to $125-145 billion | The largest negative feedback came from higher capex, not revenue |
| Broadcom | AVGO | -0.35% | No comparable new earnings event this week | AI ASIC story intact, but no new official catalyst this week | Followed semiconductors rather than led |
| Tesla | TSLA | +3.86% | No new earnings event included in this table | EV/AI beta trade | Rebound was more beta and sentiment-driven |
| AMD | AMD | +3.66% | No new earnings event included in this table | AI accelerator expectations | Rebounded more than SOX |
| QQQ | QQQ | +1.55% | ETF | Large-cap tech risk appetite | Supported by GOOGL/AAPL |

The core earnings message is not “more AI spending is always better”; it is whether AI investment converts quickly into cloud revenue, backlog, or cash returns. GOOGL is the clean positive case: Cloud +63% and backlog above $460 billion made the capex story easier to underwrite. META is the negative case: revenue +33% was strong, but the 2026 capex guide of $125-145 billion dominated the reaction. MSFT and AMZN sit between those two poles: fundamentals remain strong, but the market will keep testing marginal capex returns.

### Evidence

Microsoft FY26 Q3 press release: revenue $82.9 billion, EPS $4.27, Microsoft Cloud $54.5 billion, Azure +40%, AI run-rate $37 billion: https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q3/press-release-webcast  
Alphabet Q1 2026 earnings release: revenue $109.896 billion, Google Cloud $20.028 billion, backlog over $460 billion, EPS $5.11: https://s206.q4cdn.com/479360582/files/doc_financials/2026/q1/2026q1-alphabet-earnings-release.pdf  
Meta Q1 2026 results: revenue $56.31 billion, capex $19.84 billion, 2026 capex guide $125-145 billion: https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-First-Quarter-2026-Results/default.aspx  
Amazon Q1 2026 release: AWS +28%, TTM purchases of property and equipment $59.3 billion, Q2 sales guide $194-199 billion: https://s2.q4cdn.com/299287126/files/doc_earnings/2026/q1/earnings-result/AMZN-Q1-2026-Earnings-Release.pdf  
Apple FY26 Q2 release: revenue $111.2 billion, EPS $2.01, additional $100 billion buyback: https://www.apple.com/newsroom/2026/04/apple-reports-second-quarter-results/  
NVIDIA FY26 Q4/FY release: FY26 revenue $215.938 billion, Data Center FY revenue $193.7 billion, FY27 Q1 revenue guide $78.0 billion: https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026/

### Caveats

The reporting periods differ: MSFT is FY26 Q3, Apple is FY26 Q2, Amazon/Alphabet/Meta are calendar Q1 2026, and NVIDIA is FY26 Q4/FY. Weekly share-price moves also include rates, positioning, and options effects, so they cannot be attributed only to earnings. Market expectations and consensus misses for capex do not have a single official source; this table uses only company-disclosed figures.

## Question 5: What constraints do macro and China data impose on HK/US allocation?

### Method

I combined the official 2026-04-29 FOMC statement, weekly U.S. rates/dollar/FX moves, and China April PMI data to assess discount-rate pressure, RMB risk, and cyclical beta implications for Hong Kong and U.S. equities.

### Findings

| Indicator | Latest Value | Weekly Change/Comparison | Source |
|---|---:|---:|---|
| Fed funds target range | 3.50%-3.75% | Unchanged on 2026-04-29 | Federal Reserve |
| FOMC dissents | 4 votes | 1 favored a 25 bp cut; 3 opposed the statement’s easing bias | Federal Reserve |
| US 10Y yield | 4.378% | +6.8 bp | Yahoo Finance via `^TNX` |
| US 5Y yield | 4.021% | +10.1 bp | Yahoo Finance via `^FVX` |
| DXY | 98.2100 | -0.30% | Yahoo Finance via `DX-Y.NYB` |
| USD/HKD | 7.8343 | +0.03% | Yahoo Finance via `USDHKD=X` |
| USD/CNY proxy | 6.8271 | +0.02% | Yahoo Finance via `USDCNY=X` |
| China manufacturing PMI | 50.3 | Below March 50.4, but still expansionary | NBS / State Council |
| China production sub-index | 51.5 | Above 50 | NBS / State Council |
| China new orders sub-index | 50.6 | Above 50 | NBS / State Council |
| China non-manufacturing PMI | 49.4 | Below March 50.1 and back in contraction | NBS / State Council |
| China services business activity | 49.6 | Below March 50.2 | NBS / State Council |

The FOMC hold is not the risk by itself; the risk is the divided vote and the renewed rise in intermediate and long yields, which pressure unprofitable or far-duration assets. DXY fell, while USD/HKD and USD/CNY were broadly stable, so this week’s Hong Kong pressure was not FX-led. China manufacturing remains above 50, supporting export and industrial-chain exposure, but non-manufacturing at 49.4 warns that services and consumption recovery is unstable. Hong Kong strategy should therefore lean toward earnings visibility, free cash flow, buybacks/dividends, and ADR-positive internet leaders, rather than low-quality beta.

### Evidence

Federal Reserve 2026-04-29 FOMC statement: maintained the target range at 3-1/2 to 3-3/4 percent, and listed dissents from Stephen I. Miran, Beth M. Hammack, Neel Kashkari, and Lorie K. Logan: https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm  
China April PMI: State Council English pages reported manufacturing PMI 50.3, production 51.5, new orders 50.6; non-manufacturing PMI 49.4 and services business activity 49.6: https://english.www.gov.cn/archive/statistics/202604/30/content_WS69f30998c6d00ca5f9a0ab95.html and https://english.www.gov.cn/archive/statistics/202604/30/content_WS69f30963c6d00ca5f9a0ab93.html  
Market prices: Yahoo Finance via `yfinance`, downloaded on 2026-05-03.

### Caveats

PMI is a diffusion index and does not directly equal output growth. The FOMC statement does not include the full press-conference Q&A or updated dot plot. FX uses Yahoo Finance closes, which can differ from official fixings or interbank spot prints.

## Data Tables for Visualization Stage

### Chart 1: Cross-Market Weekly and YTD Performance

| Asset | Ticker | Latest Date | Latest Close | Weekly Change | YTD |
|---|---:|---:|---:|---:|---:|
| S&P 500 | ^GSPC | 2026-05-01 | 7230.1201 | +0.91% | +5.62% |
| Nasdaq Composite | ^IXIC | 2026-05-01 | 25114.4395 | +1.12% | +8.06% |
| Russell 2000 | ^RUT | 2026-05-01 | 2812.8201 | +0.93% | +13.33% |
| PHLX Semiconductor | ^SOX | 2026-05-01 | 10595.3398 | +0.78% | +49.59% |
| Hang Seng Index | ^HSI | 2026-04-30 | 25776.5293 | -0.78% | +0.57% |
| Hang Seng China Enterprises | ^HSCE | 2026-04-30 | 8681.8301 | -1.07% | -2.60% |
| Hang Seng TECH ETF proxy | 3033.HK | 2026-04-30 | 4.7760 | -0.50% | -11.39% |
| KWEB | KWEB | 2026-05-01 | 28.7800 | -0.17% | -15.48% |
| US 10Y yield | ^TNX | 2026-05-01 | 4.3780 | +6.8 bp | +21.5 bp |

### Chart 2: Daily Indexed Performance (2026-04-24 = 0.00%)

| Date | Series | Ticker | Close | Indexed Change |
|---|---|---:|---:|---:|
| 2026-04-24 | S&P 500 | ^GSPC | 7165.0801 | 0.00% |
| 2026-04-27 | S&P 500 | ^GSPC | 7173.9102 | +0.12% |
| 2026-04-28 | S&P 500 | ^GSPC | 7138.7998 | -0.37% |
| 2026-04-29 | S&P 500 | ^GSPC | 7135.9502 | -0.41% |
| 2026-04-30 | S&P 500 | ^GSPC | 7209.0098 | +0.61% |
| 2026-05-01 | S&P 500 | ^GSPC | 7230.1201 | +0.91% |
| 2026-04-24 | Nasdaq Composite | ^IXIC | 24836.5996 | 0.00% |
| 2026-04-27 | Nasdaq Composite | ^IXIC | 24887.0996 | +0.20% |
| 2026-04-28 | Nasdaq Composite | ^IXIC | 24663.8008 | -0.70% |
| 2026-04-29 | Nasdaq Composite | ^IXIC | 24673.2402 | -0.66% |
| 2026-04-30 | Nasdaq Composite | ^IXIC | 24892.3105 | +0.22% |
| 2026-05-01 | Nasdaq Composite | ^IXIC | 25114.4395 | +1.12% |
| 2026-04-24 | PHLX Semiconductor | ^SOX | 10513.6602 | 0.00% |
| 2026-04-27 | PHLX Semiconductor | ^SOX | 10408.0400 | -1.00% |
| 2026-04-28 | PHLX Semiconductor | ^SOX | 10035.5801 | -4.55% |
| 2026-04-29 | PHLX Semiconductor | ^SOX | 10271.2998 | -2.31% |
| 2026-04-30 | PHLX Semiconductor | ^SOX | 10503.7002 | -0.09% |
| 2026-05-01 | PHLX Semiconductor | ^SOX | 10595.3398 | +0.78% |
| 2026-04-24 | Hang Seng Index | ^HSI | 25978.0703 | 0.00% |
| 2026-04-27 | Hang Seng Index | ^HSI | 25925.6504 | -0.20% |
| 2026-04-28 | Hang Seng Index | ^HSI | 25679.7793 | -1.15% |
| 2026-04-29 | Hang Seng Index | ^HSI | 26111.8398 | +0.51% |
| 2026-04-30 | Hang Seng Index | ^HSI | 25776.5293 | -0.78% |
| 2026-04-24 | Hang Seng China Enterprises | ^HSCE | 8775.6201 | 0.00% |
| 2026-04-27 | Hang Seng China Enterprises | ^HSCE | 8756.3203 | -0.22% |
| 2026-04-28 | Hang Seng China Enterprises | ^HSCE | 8644.8096 | -1.49% |
| 2026-04-29 | Hang Seng China Enterprises | ^HSCE | 8805.5996 | +0.34% |
| 2026-04-30 | Hang Seng China Enterprises | ^HSCE | 8681.8301 | -1.07% |
| 2026-04-24 | Hang Seng TECH ETF proxy | 3033.HK | 4.8000 | 0.00% |
| 2026-04-27 | Hang Seng TECH ETF proxy | 3033.HK | 4.8300 | +0.62% |
| 2026-04-28 | Hang Seng TECH ETF proxy | 3033.HK | 4.7260 | -1.54% |
| 2026-04-29 | Hang Seng TECH ETF proxy | 3033.HK | 4.8100 | +0.21% |
| 2026-04-30 | Hang Seng TECH ETF proxy | 3033.HK | 4.7760 | -0.50% |
| 2026-04-24 | KWEB | KWEB | 28.8300 | 0.00% |
| 2026-04-27 | KWEB | KWEB | 28.3600 | -1.63% |
| 2026-04-28 | KWEB | KWEB | 28.1100 | -2.50% |
| 2026-04-29 | KWEB | KWEB | 28.0100 | -2.84% |
| 2026-04-30 | KWEB | KWEB | 28.7700 | -0.21% |
| 2026-05-01 | KWEB | KWEB | 28.7800 | -0.17% |
| 2026-04-24 | US 10Y yield | ^TNX | 4.3100 | 0.0 bp |
| 2026-04-27 | US 10Y yield | ^TNX | 4.3360 | +2.6 bp |
| 2026-04-28 | US 10Y yield | ^TNX | 4.3540 | +4.4 bp |
| 2026-04-29 | US 10Y yield | ^TNX | 4.4180 | +10.8 bp |
| 2026-04-30 | US 10Y yield | ^TNX | 4.3900 | +8.0 bp |
| 2026-05-01 | US 10Y yield | ^TNX | 4.3780 | +6.8 bp |

### Chart 3: ADR Premium/Discount to Hong Kong

| Company | ADR | Hong Kong | ADS Ratio | ADR USD | Hong Kong HKD | USD/HKD | ADR Implied HKD/Share | Premium/Discount |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Alibaba | BABA | 9988.HK | 8 | 131.50 | 126.00 | 7.8343 | 128.78 | +2.20% |
| JD.com | JD | 9618.HK | 2 | 29.96 | 116.30 | 7.8343 | 117.36 | +0.91% |
| Baidu | BIDU | 9888.HK | 8 | 125.88 | 118.70 | 7.8343 | 123.27 | +3.85% |
| NetEase | NTES | 9999.HK | 5 | 117.98 | 179.00 | 7.8343 | 184.86 | +3.27% |
| Li Auto | LI | 2015.HK | 2 | 17.57 | 67.55 | 7.8343 | 68.82 | +1.89% |
| NIO | NIO | 9866.HK | 1 | 5.91 | 49.20 | 7.8343 | 46.30 | -5.89% |
| XPeng | XPEV | 9868.HK | 2 | 15.83 | 61.00 | 7.8343 | 62.01 | +1.65% |

### Chart 4: U.S. Tech Earnings and Share-Price Reaction

| Company | Ticker | Weekly Change | Revenue | Growth | EPS/Profit | AI/Cloud/Capex |
|---|---:|---:|---:|---:|---:|---|
| Alphabet | GOOGL | +11.99% | $109.896 billion | +22% | EPS $5.11 | Google Cloud $20.028 billion, +63%; backlog >$460 billion |
| Apple | AAPL | +3.35% | $111.2 billion | +17% | EPS $2.01, +22% | Services all-time high; buyback +$100 billion |
| Amazon | AMZN | +1.62% | Q2 guide $194-199 billion | +16%-19% guide | N/A | AWS +28%; TTM property/equipment purchases $59.3 billion; chips run-rate >$20 billion |
| Microsoft | MSFT | -2.40% | $82.9 billion | +18% | EPS $4.27, +23% | Cloud $54.5 billion, +29%; Azure +40%; AI run-rate $37 billion |
| NVIDIA | NVDA | -4.72% | FY26 $215.938 billion | +65% | Net income $120.067 billion | Data Center FY $193.7 billion, +68%; FY27 Q1 guide $78.0 billion |
| Meta | META | -9.82% | $56.31 billion | +33% | N/A | Q1 capex $19.84 billion; 2026 capex guide $125-145 billion |

### Chart 5: HK Connect and Hong Kong Market Turnover

| Metric | Period | Value | Change | Chart Note |
|---|---:|---:|---:|---|
| Southbound Stock Connect ADT | 2026-02 | HK$104.102 billion | N/A | Monthly bar |
| Southbound Stock Connect ADT | 2026-03 | HK$135.334 billion | +30.0% MoM | Monthly bar |
| Northbound Stock Connect ADT | 2026-02 | RMB302.735 billion | N/A | Dual-axis or separate chart |
| Northbound Stock Connect ADT | 2026-03 | RMB301.573 billion | -0.4% MoM | Dual-axis or separate chart |
| Hong Kong securities-market ADT | 2026-02 | HK$246.769 billion | N/A | Denominator |
| Hong Kong securities-market ADT | 2026-03 | HK$303.957 billion | +23.2% MoM | Denominator |
| Southbound/Hong Kong securities-market ADT | 2026-03 | 44.5% | N/A | Overlay line |
| Southbound Stock Connect ADT | Q1 2026 | HK$122.5 billion | +11.5% YoY | Quarterly annotation |
| Northbound Stock Connect ADT | Q1 2026 | RMB324.1 billion | +69.6% YoY | Quarterly annotation |

## Follow-Up Items

1. After Hong Kong reopens, first check whether 9988.HK, 9888.HK, and 9999.HK realize their positive ADR premiums; if not, local investors are still actively reducing exposure.
2. Add official daily Stock Connect single-stock net-buying/holding changes, especially for 0700.HK, 9988.HK, 1810.HK, and 3690.HK.
3. For U.S. tech, keep tracking whether AI capex guidance is being absorbed through cloud backlog, remaining performance obligation, or free cash flow.
4. Watch whether the 10Y yield falls back below 4.30%; if it stays near 4.40%, the upside for Hong Kong high beta should be reduced.
