---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# TMT Weekly Research Draft (April 27-May 1, 2026)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# TMT Weekly Research Draft (April 27-May 1, 2026)

## Prioritized Conclusions

1. **The AI ROI inflection is visible in early operating metrics, but not yet in full free cash flow.** MSFT Azure grew 40%, GOOGL Google Cloud revenue grew 63.4% with a 32.9% operating margin, and AMZN AWS grew 28.4% with a 37.7% operating margin; Q1 2026 capex intensity was roughly 37.3%, 32.5%, and 24.4%, respectively. Cloud margins show demand is absorbing part of the AI buildout, while GOOGL and AMZN free cash flow remains pressured by the heavy investment cycle.
2. **Edge AI still lacks a single killer app, but it is becoming the price anchor for premium devices and AI PCs.** Apple Q2 FY2026 revenue was $111.2 billion, up 17%, and iPhone revenue was about $57.0 billion, up 22%; however, Gartner expects 2026 global PC shipments to fall 10.4% and smartphone shipments to fall 8.4%, and has pushed the 50% AI PC penetration milestone to 2028.
3. **The semiconductor inventory cycle has cleared in a K-shaped pattern.** AI accelerators, HBM, advanced nodes, and advanced packaging have moved from destocking to shortages and price increases; traditional PCs, low-end smartphones, and parts of telecom equipment remain constrained by memory inflation and weak end demand.
4. **Lower LLM costs are expanding viable SaaS monetization.** DeepSeek V4 Flash is priced at $0.14/$0.28 per million input/output tokens, far below Claude Opus 4 at $15/$75; still, model quality, tool use, audit, and human review determine the real enterprise ROI.
5. **The Fed did not break tech valuations this week, but discount-rate risk rose.** On April 29, 2026, the FOMC kept the federal funds target range at 3.50%-3.75%, while Powell cited roughly 3.5% March total PCE and 3.2% core PCE; QQQ still rose 1.55% for the week, showing strong earnings outweighed rate pressure for now.

## Key Events and Evidence

| Event | Numeric conclusion | Evidence |
|---|---:|---|
| MSFT FY26 Q3 | Revenue $82.886B; Microsoft Cloud $54.5B, +29% YoY; Azure +40%; AI annual revenue run-rate above $37B, +123% YoY; PP&E additions $30.876B | Microsoft FY26 Q3 release, 2026-04-29: revenue, AI run-rate, Microsoft Cloud, Azure, cash flow statement |
| GOOGL Q1 2026 | Revenue $109.896B, +22% YoY; Google Cloud $20.028B, +63.4% YoY; Google Cloud operating income $6.598B, 32.9% margin; PP&E purchases $35.674B | Alphabet Q1 2026 release, 2026-04-29 |
| AMZN Q1 2026 | Revenue $181.519B, +17% YoY; AWS $37.587B, +28.4% YoY; AWS operating income $14.161B, 37.7% margin; PP&E purchases $44.203B | Amazon Q1 2026 release, 2026-04-29 |
| Apple Q2 FY2026 | Revenue $111.2B, +17% YoY; EPS $2.01, +22% YoY; buyback authorization increased by $100B | Apple Newsroom, 2026-04-30 |
| TSMC Q1 2026 | USD revenue $35.90B, +40.6% YoY; gross margin 66.2%; 7nm and below accounted for 74% of wafer revenue | TSMC Q1 2026 release, 2026-04-16 |
| Samsung Q1 2026 | Consolidated revenue KRW 133.9T, operating profit KRW 57.2T; DS revenue KRW 81.7T, operating profit KRW 53.7T | Samsung Newsroom, 2026-04-30 |
| Intel Q1 2026 | Revenue $13.6B; Intel Foundry revenue $5.4B, operating loss $2.4B; external foundry revenue $174M | Intel Q1 2026 transcript, 2026-04-23 |
| FOMC | Federal funds target range held at 3.50%-3.75%; total PCE about 3.5%, core PCE about 3.2% | Federal Reserve statement and Powell press conference, 2026-04-29 |

## Question 1: Has the AI ROI Inflection Arrived?

### Method

I used the latest quarterly releases from MSFT, GOOGL, and AMZN for the period ended March 31, 2026, comparing cloud revenue growth, cloud operating margin, AI-related run-rates, and capital spending intensity. Capex is standardized as PP&E additions or purchases from the cash flow statement; cloud revenue is Intelligent Cloud, Google Cloud, and AWS, respectively.

### Findings

| Company | Cloud metric | Q1 2025 cloud revenue ($B) | Q1 2026 cloud revenue ($B) | YoY | Q1 2026 cloud operating margin | Q1 2026 PP&E capex ($B) | Capex / total revenue |
|---|---|---:|---:|---:|---:|---:|---:|
| MSFT | Intelligent Cloud | 26.751 | 34.681 | +29.6% | Azure margin not separately disclosed | 30.876 | 37.3% |
| GOOGL | Google Cloud | 12.260 | 20.028 | +63.4% | 32.9% | 35.674 | 32.5% |
| AMZN | AWS | 29.267 | 37.587 | +28.4% | 37.7% | 44.203 | 24.4% |

Cloud revenue has reaccelerated, and cloud margins at GOOGL and AMZN were not overwhelmed by AI capex, which is the strongest evidence of an ROI turn. MSFT's AI business run-rate exceeded $37 billion, roughly 17.0% of annualized Microsoft Cloud quarterly revenue, showing AI has moved into a billable revenue pool. The counterpoint is that capex is still growing faster than revenue; AMZN TTM free cash flow was only $1.232 billion, and GOOGL Q1 free cash flow was $10.116 billion despite strong reported margins. Conclusion: **the AI ROI inflection is visible in the income statement, but not yet fully confirmed in free cash flow.**

### Evidence

- Microsoft FY26 Q3 release: April 29, 2026; Azure +40%, Microsoft Cloud $54.5B, AI run-rate above $37B, PP&E additions $30.876B.
- Alphabet Q1 2026 release: Google Cloud $20.028B, operating income $6.598B, PP&E purchases $35.674B.
- Amazon Q1 2026 release: AWS $37.587B, AWS operating income $14.161B, PP&E purchases $44.203B; AWS chip business annual run-rate above $20B.

### Caveats

Azure revenue is not disclosed as a standalone dollar amount; MSFT Intelligent Cloud includes non-Azure businesses. Capex includes data centers, servers, facilities, and lease-related items, so it cannot be fully attributed to AI. GOOGL monetizes AI across Search, subscriptions, Workspace, and Cloud, and lacks a single AI revenue line.

## Question 2: Does Edge AI Have a Killer App?

### Method

I triangulated Apple earnings, Gartner's 2026 device forecast, Counterpoint's Q1 2026 smartphone shipment summary, and Intel's AI PC revenue disclosure. If AI features were driving a clear standalone upgrade cycle, that should appear in premium phones, AI PC mix, and resilient total shipments.

### Findings

| Indicator | Latest number | Direction | Implication |
|---|---:|---|---|
| Apple Q2 FY2026 revenue | $111.2B, +17% YoY | Positive | Strong premium iPhone cycle |
| Apple Q2 FY2026 EPS | $2.01, +22% YoY | Positive | Earnings leverage above revenue growth |
| iPhone revenue | About $57.0B, +22% YoY | Positive | iPhone 17 cycle strong; AI is one selling point |
| Gartner 2026 PC shipment forecast | -10.4% | Negative | Memory inflation weighs on replacement |
| Gartner 2026 smartphone shipment forecast | -8.4% | Negative | Entry-level buyers exit faster |
| Intel AIPC revenue | +8% QoQ, over 60% of client CPU mix | Positive | AI PC penetration in premium and commercial mix |

Edge AI today looks more like a required feature in premium devices than a standalone killer app that changes mass-market purchase intent. Apple's strong quarter proves premium replacement demand and services attachment remain resilient, but its release did not quantify revenue from Apple Intelligence. Gartner's PC and smartphone shipment cuts show memory and SSD cost inflation will push low-end demand out first. The investment implication is to prefer high-end SoC, memory, thermal, power management, and premium OEM exposure, while staying cautious on low-end Android and entry-level PC chains.

### Evidence

- Apple Newsroom: April 30, 2026; Q2 FY2026 revenue $111.2B, EPS $2.01, buyback authorization increased by $100B.
- Gartner press release: February 26, 2026; 2026 PC shipments -10.4%, smartphones -8.4%, DRAM+SSD prices up 130% by year-end, PC/smartphone prices up 17%/13%, and AI PC 50% penetration delayed to 2028.
- Intel Q1 2026 transcript: AIPC revenue +8% QoQ and over 60% of client CPU mix.

### Caveats

Apple does not disclose standalone Apple Intelligence revenue or activation rates. Counterpoint's page is protected, so the public summary only confirms global Q1 2026 smartphones -6% and Apple leading Q1 for the first time; more granular channel data requires a paid terminal. Social buzz and developer API call estimates lack auditable raw data, so they are not used as primary evidence here.

## Question 3: Has the Semiconductor Inventory Cycle Fully Cleared?

### Method

I split the inventory cycle by end market: AI/HBM/advanced nodes, mature nodes and PC/smartphone, and telecom equipment. I used TSMC, Samsung, and Intel's latest results, plus this week's ETF performance, to infer supply-demand status.

### Findings

| Segment | Representative data | Inventory judgment | Investment implication |
|---|---:|---|---|
| Advanced nodes | TSMC Q1 USD revenue +40.6%, gross margin 66.2%, advanced nodes 74% of wafer revenue | Cleared and tight | TSMC, advanced packaging, EUV chain remain strong |
| HBM/server memory | Samsung DS operating profit KRW 53.7T; Memory hit record quarterly revenue and profit | Shortage | HBM, DDR5 RDIMM, eSSD pricing power |
| x86/AI PC | Intel DCAI revenue +22% YoY; AIPC above 60% of client CPU mix | Improving at high end | CPU and AI PC mix improving |
| Intel Foundry | Revenue $5.4B, loss $2.4B, external revenue $174M | Not cleared | Foundry turnaround remains a long-duration option |
| Low-end PCs/smartphones | Gartner forecasts PCs -10.4%, smartphones -8.4% | Not cleared | Low-end demand and channel inventory remain fragile |

Semiconductors are not in a single cycle; AI and traditional demand have diverged. TSMC and Samsung's numbers show advanced logic and AI memory have already entered a tight-supply regime. Intel's product improvement shows CPUs have not been displaced by GPUs, but Foundry external revenue remains small and losses remain large. Conclusion: **AI/HBM/advanced packaging inventories have cleared; traditional consumer and parts of the communications chain have not.**

### Evidence

- TSMC Q1 2026 release: revenue $35.90B, +40.6% YoY, advanced nodes at 74% of wafer revenue.
- Samsung Newsroom: DS revenue KRW 81.7T, operating profit KRW 53.7T; strong demand for HBM4, SOCAMM2, PCIe Gen6 SSD.
- Intel Q1 2026 transcript: Foundry revenue $5.4B, loss $2.4B; external foundry revenue $174M.

### Caveats

Inventory days, channel inventory, and order cancellation rates mostly require paid supply-chain databases. Samsung reports in Korean won; I do not convert to USD to avoid exchange-rate noise.

## Question 4: What Is the Commercial Impact of Falling LLM Costs?

### Method

I compared visible April 2026 API list prices using dollars per million input and output tokens, and used the cost of 1M input + 1M output tokens as a proxy for enterprise batch workloads.

### Findings

| Model | Input price ($/1M tokens) | Output price ($/1M tokens) | Cost of 1M input + 1M output | Relative to DeepSeek V4 Flash |
|---|---:|---:|---:|---:|
| DeepSeek V4 Flash | 0.14 | 0.28 | 0.42 | 1.0x |
| DeepSeek V4 Pro | 0.145 | 3.48 | 3.625 | 8.6x |
| DeepSeek V3.2 | 0.28 | 0.40 | 0.68 | 1.6x |
| Claude Opus 4 | 15.00 | 75.00 | 90.00 | 214.3x |
| Claude Sonnet 4 | 3.00 | 15.00 | 18.00 | 42.9x |

Lower prices first unlock high-frequency, low-risk, reversible enterprise workflows: customer-service drafting, contract extraction, assisted code migration, knowledge-base Q&A, and test generation. DeepSeek V4's 1M context window and MoE architecture materially reduce marginal cost for long-document and codebase tasks, which is positive for SaaS gross margins. At the same time, cheap models may carry higher validation, routing, audit, and human repair costs. Commercialization should be judged by total task cost, not API list price alone.

### Evidence

- TechCrunch: April 24, 2026; DeepSeek V4 Flash/Pro preview launch, 1M context, V4 Pro 1.6T total / 49B active parameters; V4 Flash priced at $0.14/$0.28, V4 Pro at $0.145/$3.48.
- Tokenr pricing table: March 2026 update; DeepSeek V3.2 $0.28/$0.40, Claude Opus 4 $15/$75, Claude Sonnet 4 $3/$15.

### Caveats

Public API list price is not enterprise net price; volume discounts, caching, context compression, tool calls, and retry rates change the real cost. DeepSeek V4 is still a preview release, with higher reliability, compliance, and long-term support risk than mature closed models.

## Question 5: How Much Pressure Is the Fed Putting on Tech Valuations?

### Method

I compared the April 29, 2026 FOMC statement and Powell press conference with weekly returns for QQQ, SOXX, and key TMT subsector ETFs to judge whether the denominator or numerator dominated this week.

### Findings

| Indicator | Value | Weekly implication |
|---|---:|---|
| Federal funds target range | 3.50%-3.75% | Held steady, but no clear dovish pivot |
| March total PCE | About 3.5% | Energy lifted headline inflation |
| March core PCE | About 3.2% | Sticky inflation remains above target |
| Nasdaq 100 proxy QQQ weekly return | +1.55% | Strong earnings outweighed rates |
| SOXX weekly return | +0.90% | Semis consolidated at elevated levels |
| 10Y Treasury | About 4.4%, up more than 5bp on the week | Discount-rate pressure rose |

The Fed did not break tech valuations this week because hyperscaler earnings raised the numerator. The rate-side risk is that inflation has moved up again, while oil prices and geopolitical uncertainty make the 2026 rate-cut path less certain. If the 10Y Treasury stays above 4.4% and AI capex keeps rising, investors will separate companies whose AI revenue can fund capex from those with only an AI investment narrative. The practical stance is to reduce exposure to long-duration, high-multiple software names with weak near-term revenue validation.

### Evidence

- Federal Reserve FOMC statement: April 29, 2026; target range held at 3.50%-3.75%, inflation described as elevated.
- Powell press conference transcript: April 29, 2026; total PCE about 3.5%, core PCE about 3.2%.
- StockAnalysis ETF history: QQQ, SOXX, IGV, FDN, IYW, XTL closing prices from April 24 to May 1, 2026.

### Caveats

ETF weekly returns use closing prices and exclude after-hours earnings reactions. Hong Kong was closed on May 1, 2026, so Hong Kong weekly returns are calculated only through April 30, 2026.

## Visualization-Ready Data Tables

### Chart 1 Substitute: Hyperscaler Q1 2025 vs Q1 2026 Cloud Revenue and Capex

The original plan requested a continuous 24Q1-26Q1 series. Accessible official raw inputs are not consistently available across all three companies on a fully comparable quarterly basis, so this report substitutes a Q1 year-over-year table suitable for grouped bar charts.

| Company | Period | Cloud revenue metric | Cloud revenue ($B) | Cloud revenue YoY | PP&E capex ($B) | Capex YoY | Capex / total revenue |
|---|---|---|---:|---:|---:|---:|---:|
| MSFT | Q1 2025 equivalent FY25 Q3 | Intelligent Cloud | 26.751 | NA | 16.745 | NA | 23.9% |
| MSFT | Q1 2026 equivalent FY26 Q3 | Intelligent Cloud | 34.681 | +29.6% | 30.876 | +84.4% | 37.3% |
| GOOGL | Q1 2025 | Google Cloud | 12.260 | NA | 17.197 | NA | 19.1% |
| GOOGL | Q1 2026 | Google Cloud | 20.028 | +63.4% | 35.674 | +107.4% | 32.5% |
| AMZN | Q1 2025 | AWS | 29.267 | NA | 25.019 | NA | 16.1% |
| AMZN | Q1 2026 | AWS | 37.587 | +28.4% | 44.203 | +76.7% | 24.4% |

### Chart 2: Weekly Returns by TMT Subsector

| Rank | Subsector | Proxy ETF | Apr 24, 2026 close | May 1, 2026 close | Weekly return |
|---:|---|---|---:|---:|---:|
| 1 | Telecom equipment | XTL | 219.01 | 228.37 | +4.27% |
| 2 | Hardware / broad technology | IYW | 217.17 | 221.01 | +1.77% |
| 3 | SaaS / software | IGV | 85.20 | 86.63 | +1.68% |
| 4 | Internet | FDN | 263.15 | 266.11 | +1.12% |
| 5 | Semiconductors | SOXX | 461.60 | 465.75 | +0.90% |
| Reference | Nasdaq 100 proxy | QQQ | 663.88 | 674.15 | +1.55% |

### Chart 3: Global AI Value Chain Valuation Percentile Heatmap

Percentiles compare the current TTM PE with FY2023, FY2024, and FY2025 TTM PE snapshots from StockAnalysis annual ratio tables. This is not a full daily three-year distribution.

| Company | Role | Current close ($) | TTM PE | Forward PE | FY2023 PE | FY2024 PE | FY2025 PE | Current PE percentile vs 3-year snapshots | Conclusion |
|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| NVDA | AI GPU / accelerators | 198.45 | 40.50 | 23.80 | 119.77 | 51.29 | 48.51 | 0% | Cheaper than historical peaks, still high in absolute terms |
| TSM | Advanced foundry | 397.67 | 29.34 | 20.04 | 19.43 | 29.02 | 29.14 | 100% | Valuation is high and must be digested through earnings revisions |
| AAPL | Edge AI / consumer electronics | 280.14 | 33.96 | 30.87 | 27.93 | 37.40 | 34.24 | 33% | Premium cycle is strong; valuation is not cheap |
| MSFT | Cloud / AI SaaS | 414.44 | 24.68 | 22.45 | 35.18 | 37.88 | 36.47 | 0% | Valuation reset improves quality-adjusted appeal |

### Supplement: Major Market Indices

| Index / proxy | Basis | Start | End | Return |
|---|---|---:|---:|---:|
| SOXX | U.S. semiconductor ETF, Apr 24-May 1, 2026 | 461.60 | 465.75 | +0.90% |
| QQQ | Nasdaq 100 ETF, Apr 24-May 1, 2026 | 663.88 | 674.15 | +1.55% |
| Hang Seng Index | Apr 24-Apr 30, 2026; May 1 market holiday | 25,978.07 | 25,776.54 | -0.78% |
| Hang Seng TECH | Planned data; May 1 market holiday | Incomplete data | Incomplete data | Excluded from chart |

## Follow-Up Items

1. Track whether MSFT, GOOGL, and AMZN further raise 2026 capex guidance and whether they disclose cleaner AI revenue lines on the next calls.
2. Watch NVIDIA FY27 Q1, expected May 27, 2026, for quantitative updates on Blackwell, GB300/B300, Rubin, and HBM supply.
3. Monitor WWDC 2026 for Apple Intelligence localization in China, India, Japan, and Southeast Asia.
4. Watch the May 14, 2026 CPI release and the 10Y Treasury for renewed pressure on long-duration software valuations.
5. For HSTECH, the next stage should use Bloomberg, Wind, or licensed Hang Seng Indexes data to complete official daily closes.

## Source Links

- Microsoft FY26 Q3 earnings release: https://www.microsoft.com/en-us/investor/earnings/FY-2026-Q3/press-release-webcast
- Alphabet Q1 2026 earnings release: https://s206.q4cdn.com/479360582/files/doc_financials/2026/q1/2026q1-alphabet-earnings-release.pdf
- Amazon Q1 2026 earnings release: https://s2.q4cdn.com/299287126/files/doc_earnings/2026/q1/earnings-result/AMZN-Q1-2026-Earnings-Release.pdf
- Apple Q2 FY2026 release: https://www.apple.com.cn/newsroom/2026/04/apple-reports-second-quarter-results/
- Gartner device forecast: https://www.gartner.com/en/newsroom/press-releases/2026-02-26-gartner-says-surging-memory-costs-will-reduce-global-pc-and-smartphone-shipments-in-2026
- TSMC Q1 2026 release: https://investor.tsmc.com/english/encrypt/files/encrypt_file/qr/phase4_reports/2026-04/bd8eb0403902fdea59a2f5e390e48d010b50edc9/1Q26%20EarningsRelease_WoG.pdf
- Samsung Q1 2026 release: https://news.samsung.com/global/samsung-electronics-announces-first-quarter-2026-results
- Intel Q1 2026 transcript: https://www.fool.com/earnings/call-transcripts/2026/04/23/intel-intc-q1-2026-earnings-transcript/
- TrendForce Blackwell shipment mix: https://www.trendforce.com/presscenter/news/20260408-13003.html
- DeepSeek V4 report: https://techcrunch.com/2026/04/24/deepseek-previews-new-ai-model-that-closes-the-gap-with-frontier-models/
- Tokenr LLM pricing: https://tokenr.co/llm-pricing
- Federal Reserve FOMC statement: https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm
- Powell press conference transcript: https://www.federalreserve.gov/mediacenter/files/FOMCpresconf20260429.pdf
- StockAnalysis ETF and valuation data: https://stockanalysis.com/
