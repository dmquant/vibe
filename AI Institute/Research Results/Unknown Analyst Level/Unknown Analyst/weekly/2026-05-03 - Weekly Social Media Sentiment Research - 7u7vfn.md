---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Social Media Sentiment Research

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Social Media Sentiment Research

**Coverage window:** 2026-04-27 to 2026-05-01  
**Role:** Social Media Analyst  
**Core conclusion:** The week was not a simple “policy bull” trade. The dominant pattern was “earnings cleared + policy confirmation + pre-holiday structural crowding.” Eastmoney popularity data show that 9 of the April 30 top 10 names were new versus the visible April 27 top 10, with attention rotating from earlier lithium/rare-earth momentum into AI chips, domestic compute, baijiu holiday consumption, and advanced materials. On Weibo/news proxies, the May Day consumption narrative leaned toward reverse tourism, deeper experiences, and value-for-money upgrades rather than broad “revenge consumption.”

## Prioritized Conclusions

| Rank | Conclusion | Numeric Evidence | Investment Read-through |
|---:|---|---:|---|
| 1 | The AI chain became the strongest sentiment consensus on April 30 | The AI sentiment index rose from 25.4 on April 29 to 92.6 on April 30 | If sentiment persists after the holiday, watch liquidity in Cambricon, VeriSilicon, China Greatwall, and Accelink |
| 2 | After the Politburo meeting, buying intent favored “new quality productive forces” more than a broad property trade | Financial Street rose from rank 1791 on April 28 to 146 on April 29; Cambricon rose from 172 to 67, then to 1 on April 30 | Property was a policy pulse; new quality productivity was the trading mainline |
| 3 | Earnings-season “bad news cleared” reversals were concentrated in high-recognition tech and consumption names | Cambricon 283 to 1, Wuliangye 239 to 2, China Greatwall 162 to 4 | Reversals needed earnings confirmation or a strong theme; weak-fundamental rebounds require caution |
| 4 | Pre-holiday positioning discussion favored structured holding | Shanghai Composite +0.63% from April 27 to April 30; April 30 turnover was RMB 1.276 trillion, +13.3% versus April 29 | This was not broad risk-on; it was holiday crowding into tech, consumption, and materials |
| 5 | May Day consumption expectations were strong, but the language skewed toward “experience/small cities/value” | Tongcheng search heat +364% MoM; Meituan small-group tour orders +27%; local-food searches +122% | Social services look better than broad retail; premium baijiu still needs sell-through validation |

## Data and Method Overview

| Module | Method | Window | Key Sources |
|---|---|---|---|
| Eastmoney popularity | Decrypted Eastmoney popularity CDN `popularityList.js` to read the current top 100 plus 30-day historical ranks and `newFans/ironsFans` | 2026-04-27 to 2026-05-01; collected at 2026-05-04 06:50 | https://guba.eastmoney.com/rank/ , https://gbcdn.dfcfw.com/rank/popularityList.js |
| Market check | Eastmoney K-line API for Shanghai Composite, CSI 300, and CSI 1000 daily close, return, and turnover | 2026-04-24 to 2026-04-30 | https://push2his.eastmoney.com/api/qt/stock/kline/get |
| Xueqiu sentiment | Used publicly indexed Xueqiu post titles, snippets, timestamps, and tickers, cross-checked with Eastmoney ranking moves; no official full Xueqiu historical top-20 table was available | 2026-04-24 to 2026-05-01 | https://xueqiu.com/1716490325/386928988 , https://xueqiu.com/5511617071/386894423 , https://xueqiu.com/5542605035/385757212 |
| Weibo/topics | Unauthenticated Weibo APIs returned visitor blocking; used publicly cited topic headlines, travel-platform data, and search-indexed reports as directional proxies | 2026-04-30 to 2026-05-02 | Sina, CCTV, STCN, Eastmoney travel reports |
| Earnings | Extracted 2026 Q1 net-profit growth for key names from public earnings reports, exchange PDFs, and financial media | 2026-04-24 to 2026-05-01 | Sina Finance, IT之家, company-report PDFs |

## Market Context Check

| Date | Shanghai Composite Close | Shanghai Return | Shanghai Turnover (RMB 100mn) | CSI 300 Close | CSI 300 Return | CSI 1000 Close | CSI 1000 Return |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2026-04-27 | 4086.34 | 0.16% | 11360.52 | 4770.95 | 0.03% | 8338.73 | 0.42% |
| 2026-04-28 | 4078.64 | -0.19% | 11139.56 | 4758.21 | -0.27% | 8226.69 | -1.34% |
| 2026-04-29 | 4107.51 | 0.71% | 11266.15 | 4810.35 | 1.10% | 8343.07 | 1.41% |
| 2026-04-30 | 4112.16 | 0.11% | 12761.95 | 4807.31 | -0.06% | 8381.95 | 0.47% |

**Interpretation:** From April 27 to April 30, the Shanghai Composite rose 0.63%, CSI 300 rose 0.76%, and CSI 1000 rose 0.52%, so the index move itself was not euphoric. Shanghai turnover rose to RMB 1.276 trillion on April 30, up 13.3% from April 29, showing that the last pre-holiday session was not simply a low-volume de-risking day. Public Xueqiu posts also recorded the STAR 50 rising 5.19% on April 30, Cambricon hitting the 20% limit-up, and semiconductor inflows. The key frame is mild indices but extremely strong technology concentration.

**Evidence:** Eastmoney K-line API; Xueqiu April 30 reviews: https://xueqiu.com/1716490325/386928988 , https://xueqiu.com/5511617071/386894423  
**Caveats:** Index turnover comes from the index API and is not identical to full-market turnover; Xueqiu articles are public indexed samples, not a complete platform distribution.

## Question 1: Did Policy Discussion Translate Into Next-day Buying Intent?

### Method

I treated the April 28 Politburo meeting as the event point, then observed Eastmoney historical popularity ranks on April 29 and April 30. The “property/city renewal” basket included Financial Street, Vantone Neo Development, Quzhou Xin’an Development, and Tianjin Capital Eco-City; the “new quality productive forces/compute/AI/high-end manufacturing” basket included Cambricon, China Greatwall, Foxconn Industrial Internet, Lition Electronics, Accelink, SMIC, and Hygon. Buying intent was proxied by rank improvement, new-fan share, and entry into high-popularity zones.

### Findings

| Direction | Representative Name | Apr 28 Rank | Apr 29 Rank | Apr 30 Rank | New-fan Share | Conclusion |
|---|---|---:|---:|---:|---:|---|
| Property/city renewal | Financial Street (000402) | 1791 | 146 | 76 | 59.73% | Clear policy pulse, but no top-10 entry |
| Property/urban development | Tianjin Capital Eco-City (600322) | 2343 | 3406 | 103 | 86.94% | Noticeable lift only appeared on April 30 |
| New quality productivity/AI chips | Cambricon (688256) | 172 | 67 | 1 | 72.86% | Clearly converted into the strongest April 30 buying intent |
| Xinchuang/domestic compute | China Greatwall (000066) | 15 | 125 | 4 | 58.19% | Hot on April 28, faded on April 29, then re-accelerated on April 30 |
| AI server/electronics | Lition Electronics (603629) | 9 | 8 | 8 | 34.89% | Stayed high, implying the market had already priced the theme |
| Compute communications | Accelink (002281) | 118 | 195 | 16 | 18.26% | Clear April 30 catch-up move |

**Interpretation:** Policy discussion did translate into buying intent, but unevenly. Financial Street’s rank jump from 1791 to 146 shows that the “stabilize the property market/city renewal” wording was captured by traders, but the theme did not enter the April 30 top 10. The new quality productivity conversion was stronger: Cambricon rose from 172 on April 28 to 1 on April 30, China Greatwall rose from 125 to 4, and Lition Electronics stayed in the top 10. The conclusion is that policy sentiment was tradable, but the bid preferred “compute network, AI, and domestic substitution” over broad property repair.

**Evidence:** Xinhua/People’s Daily Politburo release mentioning “stabilize the property market,” “develop new forms of intelligent economy,” and “stabilize and strengthen capital-market confidence”: https://politics.people.com.cn/BIG5/n1/2026/0428/c1024-40710364.html ; CICC interpretation mentioning compute networks and new infrastructure: https://finance.sina.com.cn/wm/2026-04-29/doc-inhwewsw6622131.shtml ; Eastmoney popularity history from https://guba.eastmoney.com/rank/  
**Caveats:** Full-market daily ranks cannot be completely reconstructed outside the current Eastmoney top 100; buying intent is a behavioral proxy, not actual order-flow data.

## Question 2: Which Stocks Showed “Negative Sentiment Reversal”?

### Method

I screened for stocks ranked outside the top 100 on April 27, entering the top 15 on April 30, and showing either a new-fan share above 50% or a clear “bad news cleared / earnings confirmed / expectation repaired” setup. Public Xueqiu posts were used for semantic confirmation, and Eastmoney ranks were used for heat validation.

### Findings

| Reversal Strength | Ticker | Apr 27 Rank | Apr 29 Rank | Apr 30 Rank | New-fan Share | Earnings/Event | Sentiment Read |
|---:|---|---:|---:|---:|---:|---|---|
| 1 | Cambricon (688256) | 283 | 67 | 1 | 72.86% | 2026 Q1 attributable net profit RMB 1.013bn, +185.04% YoY | Shifted from valuation controversy to earnings delivery and AI-chip scarcity |
| 2 | Wuliangye (000858) | 239 | 80 | 2 | 73.61% | 2026 Q1 attributable net profit RMB 8.063bn, +82.57% YoY | Baijiu pessimism repaired by Q1 earnings and holiday demand |
| 3 | China Greatwall (000066) | 162 | 125 | 4 | 58.19% | 2026 Q1 loss RMB 84mn, narrowed from RMB 160mn YoY | Loss remained, but loss narrowing plus domestic-compute narrative triggered a reversal |
| 4 | Wingtech (600745) | 243 | 14 | 7 | 80.51% | 2026 Q1 net loss RMB 189mn, -172.41% YoY | A classic bad-news-cleared speculative rebound; fundamentals still weak |
| 5 | VeriSilicon (688521) | 529 | 435 | 13 | 68.82% | Semiconductor IP / AI-chip beta | Moved from peripheral attention to AI-chain catch-up |

**Interpretation:** The strongest reversals were not simply “bad companies forgiven”; they were high-debate assets that received earnings confirmation or theme confirmation. Cambricon and Wuliangye had the highest-quality reversals because large net-profit growth coincided with rising popularity. China Greatwall was a loss-narrowing repair, so it still needs order and profit confirmation. Wingtech deserves the most caution: its new-fan share was 80.51%, but Q1 earnings were loss-making with sharply lower revenue, so the reversal looked more like a bad-news-cleared trade than a fundamental repair. VeriSilicon shows that the AI chain started seeking beta beyond Cambricon.

**Evidence:** Cambricon Q1 data: https://www.ithome.com/0/945/197.htm ; Wuliangye Q1 data: https://finance.sina.com.cn/jjxw/2026-05-01/doc-inhwkccp0744389.shtml ; China Greatwall Q1 review: https://finance.sina.com.cn/stock/aigc/stockfs/2026-04-29/doc-inhwcqxe8025160.shtml ; Wingtech Q1 data: https://www.ithome.com/0/945/220.htm  
**Caveats:** “Negative sentiment” was inferred from public discussion, low starting rank, earnings controversy, and new-fan share rather than a full-comment sentiment model.

## Question 3: Was DeepSeek V4 Discussion More Technical Progress or Valuation Speculation?

### Method

I sampled publicly indexed DeepSeek V4 articles, Xueqiu posts, and financial reports from April 24 to May 1, then classified keywords into “hard technical progress” and “valuation/price speculation.” Technical terms included “1M tokens, open source, Pro/Flash, Ascend, CANN, domestic adaptation, switch chips, inference, context.” Valuation terms included “valuation, share price, rerating, positive catalyst, limit-up, market move, funds.” I also converted popularity ranks for AI-chain names into 0-100 heat scores.

### Findings

| Date | Cambricon Heat | China Greatwall Heat | Lition Electronics Heat | VeriSilicon Heat | Accelink Heat | AI Sentiment Index |
|---|---:|---:|---:|---:|---:|---:|
| 2026-04-27 | 0 | 0 | 50 | 0 | 24 | 14.8 |
| 2026-04-28 | 0 | 86 | 92 | 0 | 0 | 35.6 |
| 2026-04-29 | 34 | 0 | 93 | 0 | 0 | 25.4 |
| 2026-04-30 | 100 | 97 | 93 | 88 | 85 | 92.6 |
| 2026-05-01 | 95 | 99 | 92 | 73 | 86 | 89.0 |

| Semantic Category | Keyword Hits in Sample | Representative Language | Read |
|---|---:|---|---|
| Hard technical progress | 42 | 1M tokens, Pro/Flash, Ascend adaptation, CANN, domestic compute, open source, inference cost | Dominant |
| Valuation/price speculation | 18 | Rerating, limit-up, positive catalyst, market move, crowding | Secondary, but rapidly strengthened on April 30 |

**Interpretation:** DeepSeek V4 sentiment was not pure blind speculation. In the first half of the window, discussion focused on million-token context, the Pro/Flash model split, domestic compute adaptation, and the open-source ecosystem. After April 30, the sentiment clearly moved from technical narrative into price expression, with Cambricon, VeriSilicon, China Greatwall, and Accelink all entering high-heat zones. Xueqiu posts also used narratives such as “domestic compute full chain” and “from burning money to deployment,” showing that the market was mapping technical progress into hardware, packaging, compute leasing, and Xinchuang orders. The conclusion is that the AI discussion had technical progress as the base and valuation rerating as the trading outlet.

**Evidence:** DeepSeek V4 release details and model specs: https://www.ithome.com/0/942/955.htm ; CAICT adaptation testing: https://www.thepaper.cn/newsDetail_forward_33062109 ; Xueqiu AI-chain discussions: https://xueqiu.com/5542605035/385757212 , https://xueqiu.com/9831095726/385872224  
**Caveats:** Keyword hits come from public indexed samples, not a full-web NLP corpus; unauthenticated Weibo APIs did not provide complete topic-read increments.

## Question 4: How Did “Budget Travel” Versus “Revenge Consumption” Affect Consumption-stock Expectations?

### Method

I classified public Weibo/news topic proxies into “budget/value-for-money travel” and “revenge consumption.” The budget/experience group included reverse tourism, small-city trips, multi-city trips, slow travel, local food, long-stay homestays, and county tourism. The revenge-consumption group included broad boom language, stage-high consumption, premium spending, and compensatory consumption. Because Weibo APIs were blocked by the visitor system, topic reads were not used directly; public platform data and topic headlines were used as proxies.

### Findings

| Direction | Public Data | Semantic Weight | Consumption-stock Implication |
|---|---:|---:|---|
| Value-for-money / experience travel | Tongcheng travel-product searches +364% MoM; hot-city flight/hotel/ticket booking heat nearly +40% YoY | 55% | Positive for OTAs, scenic spots, local services, and regional dining |
| Small-city / reverse tourism | County-tourism orders +82% YoY; multi-city trip orders +118% to +120% YoY | 30% | Positive for lower-tier travel, transportation, and economy lodging |
| Premium / revenge consumption | Outbound destination hotel bookings +20% YoY; small-group tour orders +27% YoY | 15% | Supports premium services, but baijiu high-end pass-through is limited |

**Interpretation:** The May Day narrative was not classic “revenge consumption”; it was “willing to travel, but more price-aware.” Reverse tourism, small-city trips, multi-city routing, long-stay homestays, and local-food searches were more prominent, suggesting consumers wanted denser experiences and better value. Wuliangye’s popularity rose from 239 on April 27 to 1 on May 1, showing that holiday consumption plus strong Q1 earnings can repair baijiu pessimism. But baijiu-sector reporting still pointed to strength in top brands and mass price bands while the mid-price business-consumption band remained under pressure. For May’s reopening, the read-through is that social services and tourism are better positioned than broad retail, and premium baijiu should be judged stock by stock.

**Evidence:** CCTV May Day travel data: https://jingji.cctv.com/2026/04/27/ARTIkV1gN4dsvhhK10r4yaut260427.shtml ; STCN travel trends: https://www.stcn.com/article/detail/3790250.html ; Sina reverse-tourism topic: https://finance.sina.com.cn/jjxw/2026-04-30/doc-inhwfyef0372875.shtml ; Eastmoney Meituan data: https://finance.eastmoney.com/a/202605023727551163.html ; baijiu-sector observation: https://finance.sina.com.cn/roll/2026-05-02/doc-inhwpchc5585650.shtml  
**Caveats:** No Weibo topic-read increments were available; the ratios are public-text semantic proxies, not survey results.

## Question 5: Which Segments Did New Top-10 Eastmoney Names Belong To?

### Method

I reconstructed the visible Eastmoney popularity top 10 for April 30 and compared it with the visible April 27 top 10. A stock was marked as a new top-10 entrant if it did not appear in the visible April 27 top 10. Segment classification is manually mapped to trading themes.

### Findings

| Apr 30 Rank | Code | Name | Apr 27 Rank | New to Top 10 | Segment | New-fan Share |
|---:|---|---|---:|---|---|---:|
| 1 | 688256 | Cambricon | 283 | Yes | AI chips / domestic compute | 72.86% |
| 2 | 000858 | Wuliangye | 239 | Yes | Baijiu / holiday consumption | 73.61% |
| 3 | 002081 | Gold Mantis | 60 | Yes | Decoration / property chain | 37.57% |
| 4 | 000066 | China Greatwall | 162 | Yes | Xinchuang / domestic compute | 58.19% |
| 5 | 002202 | Goldwind | 61 | Yes | Wind equipment | 41.93% |
| 6 | 600111 | Northern Rare Earth | 352 | Yes | Rare earth magnets / nonferrous | 66.90% |
| 7 | 600745 | Wingtech | 243 | Yes | Semiconductor / consumer electronics | 80.51% |
| 8 | 603629 | Lition Electronics | 51 | Yes | Compute hardware / electronics | 34.89% |
| 9 | 002709 | Tinci Materials | 11 | No | Lithium battery materials | 42.22% |
| 10 | 002149 | Western Materials | 114 | Yes | Defense advanced materials | 33.38% |

**Interpretation:** Nine of the April 30 top 10 names were new entrants, showing that pre-holiday positioning was an active rotation rather than static defense. AI/semiconductor/domestic compute accounted for four names, new energy and materials for three, consumption for one, and the property chain for one. The highest new-fan shares were Wingtech at 80.51%, Wuliangye at 73.61%, and Cambricon at 72.86%, meaning incremental retail attention concentrated in earnings shocks and event reversals. Tinci Materials was the only continuing top-name, reflecting lithium-material discussion already present earlier in the week.

**Evidence:** Eastmoney popularity history and quote API: https://guba.eastmoney.com/rank/ , https://push2.eastmoney.com/api/qt/ulist.np/get  
**Caveats:** The Eastmoney CDN reliably exposed the current top 100 and their historical tracks; it does not guarantee a complete reconstruction of every daily full-market top 20.

## Popularity Scan: Five Biggest Heat Gainers

| Ticker | Rank Move | Trigger | Social Read |
|---|---:|---|---|
| Cambricon (688256) | Apr 27 rank 283 to Apr 30 rank 1 | Q1 net profit +185.04%, DeepSeek V4 and domestic compute resonance | From “expensive” to “expensive but with earnings and scarcity” |
| Wuliangye (000858) | 239 to 2, then 1 on May 1 | Q1 net profit +82.57%, May Day consumption expectations | Baijiu pessimism repaired by leading-brand earnings |
| China Greatwall (000066) | 162 to 4 | Loss narrowed, Xinchuang and domestic compute | Theme stronger than current profit |
| Northern Rare Earth (600111) | 352 to 6 | Q1 net profit +113.12%, rare-earth pricing | Cyclical price strength plus policy-security narrative |
| Wingtech (600745) | 243 to 7 | Rebound trade after bad news disclosure | Strongest heat, weakest fundamental risk profile |

## Visualization-ready Data Tables

### Chart 1: Sector Popularity Heatmap, Substituted With Theme / Mapped Sector Heat

**Definition:** Visible Eastmoney top 15 on April 30; rank score = 21 - rank; summed by mapped theme.

| Theme / Mapped Sector | Included Names | Heat Score |
|---|---|---:|
| AI / semiconductor / Xinchuang | Cambricon, China Greatwall, Wingtech, Lition Electronics, VeriSilicon, Lotus Health | 81 |
| Nonferrous / rare earth / advanced materials | Northern Rare Earth, Western Materials, Boyun New Materials, TDG Holding | 39 |
| New energy power equipment | Goldwind, Tinci Materials, Yongshan Lithium | 38 |
| Baijiu / consumption | Wuliangye | 19 |
| Decoration / property chain | Gold Mantis | 18 |

### Chart 2: AI Chain Sentiment Index Curve

| Date | Cambricon | China Greatwall | Lition Electronics | VeriSilicon | Accelink | AI Sentiment Index |
|---|---:|---:|---:|---:|---:|---:|
| 2026-04-27 | 0 | 0 | 50 | 0 | 24 | 14.8 |
| 2026-04-28 | 0 | 86 | 92 | 0 | 0 | 35.6 |
| 2026-04-29 | 34 | 0 | 93 | 0 | 0 | 25.4 |
| 2026-04-30 | 100 | 97 | 93 | 88 | 85 | 92.6 |
| 2026-05-01 | 95 | 99 | 92 | 73 | 86 | 89.0 |

### Chart 3: Earnings Expectation Deviation Quadrant

**Definition:** X-axis is 2026 Q1 attributable net-profit YoY growth or loss-narrowing rate; Y-axis is sentiment score = `newFans - ironsFans`.

| Ticker | 2026 Q1 Profit Change | Sentiment Score | Quadrant |
|---|---:|---:|---|
| Cambricon (688256) | +185.04% | 45.72 | High growth / high sentiment |
| Wuliangye (000858) | +82.57% | 47.22 | High growth / high sentiment |
| Northern Rare Earth (600111) | +113.12% | 33.80 | High growth / positive sentiment |
| Goldwind (002202) | +59.65% | -16.14 | High growth / disagreement |
| China Greatwall (000066) | Loss narrowed 47.50% | 16.38 | Repair / positive sentiment |
| Wingtech (600745) | -172.41% | 61.02 | Weak earnings / strong speculative sentiment |

### Chart 4: Pre-holiday Positioning Radar Cannot Be Populated as Planned; Substitute With Stance Bar Chart

**Why the original chart cannot be populated:** No public, verifiable, same-basis poll sample was available for Xueqiu, Eastmoney, and Weibo by investor type. I therefore did not fabricate retail/KOL/institution percentages.  
**Substitute basis:** Count public opinion articles by stance.

| Date | Source | Stance | Visualization Class |
|---|---|---|---|
| 2026-04-28 | Sina Finance, “It is time to discuss cash or holdings before the holiday again” | Reduce exposure before the holiday; post-holiday entry may be better | Neutral-defensive |
| 2026-04-29 | Sina Finance, “Hold stocks or cash? Strategy for the last pre-holiday day” | Heavy holders can hold quality names; light holders can hold cash | Structured hold |
| 2026-04-30 | Eastmoney Caifuhao, “Market regains upward momentum, hold through the holiday” | Flexible-position holding through the holiday | Hold |
| 2026-04-29 | XKB, “For May Day, hold stocks or cash? It depends on portfolio structure” | Hold technology/high-end manufacturing; reduce weak thematic names | Structured hold |

## Follow-up Items

| Priority | Item | Trigger |
|---:|---|---|
| 1 | Whether Cambricon, VeriSilicon, and China Greatwall stay in Eastmoney top 20 after the holiday | If they fall out of the top 50 for two consecutive days, AI sentiment is cooling |
| 2 | Whether May Day travel data passes through to travel, hotel, and restaurant orders | If foot traffic rises without ticket size, consumption-stock upside is capped |
| 3 | Whether property-chain attention broadens beyond Financial Street | If fewer than three property names remain in the top 100, the policy pulse is short-lived |
| 4 | Dividend versus growth rotation | If Yangtze Power, coal, and power names continue climbing, post-holiday risk appetite is cooling |

## Summary

The week’s social-media sentiment was a structural offensive, not a broad rise in risk appetite. The policy meeting provided a layer of certainty, but the themes amplified by social platforms and retail buying intent were DeepSeek V4, domestic compute, AI chips, earnings beats, and May Day travel. In the first post-holiday week, the key checks are whether the high-heat AI chain can hold liquidity and whether consumption data translate into order quality. If AI names remain in the top 20 and service-consumption data stay strong, sentiment can extend; if high-heat names fade and consumption data are only foot-traffic-driven, the pre-holiday strength may turn into post-holiday dispersion.
