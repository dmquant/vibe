---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Research Report: Global Macro and AI Tech (2026-W18)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Research Report: Global Macro and AI Tech (2026-W18)

Coverage window: 2026-04-27 to 2026-05-01  
Chair’s resolution: the committee can close the week with three decisions. First, the AI inference price shock is real, but it mainly compresses model API margins and raises the bar for compute utilization rather than immediately reducing hardware demand for companies such as NVDA. Second, official FOMC materials do not support the claim that Powell discussed AI productivity or tolerance for a higher inflation target; the verified signal was a hold at 3.50%-3.75% and a wait-and-see stance on oil prices and core inflation. Third, China’s April PMI shows mild manufacturing expansion and weaker services; new export orders rose from 49.1 to 50.3, so the data do not support a simple “protectionism is worsening” interpretation.

## Priority Conclusions

| Topic | Numeric answer | Committee conclusion |
|---|---:|---|
| AI price war | DeepSeek V4-Pro output is $3.48/M tokens, 88.4% below GPT-5.5 at $30/M; V4-Flash is $0.28/M, 99.1% lower | The model-layer price anchor has moved down; do not cut hardware demand yet, but focus on token throughput per dollar, power efficiency, and non-CUDA substitution risk |
| FOMC | Fed funds target range held at 3.50%-3.75%; Powell cited headline PCE at 3.5%, core PCE at 3.2%, and March unemployment at 4.3% | No signal of a higher inflation target; the better description is “near neutral, able to move either way, waiting for oil-price pass-through” |
| Treasury curve | 10Y: 4.35% (4/27) → 4.42% (4/29) → 4.39% (5/1); 2Y: 3.78% → 3.92% → 3.88% | The post-FOMC move was a mild bear flattening; May 1 was not post-NFP pricing because the official April Employment Situation release is scheduled for 2026-05-08 |
| Tech capex | MSFT/GOOGL/AMZN Q1 purchases/additions of PP&E totaled $110.753B; cloud revenue totaled about $92.309B | Capex intensity is now above quarterly cloud revenue; the issue is 2026-2027 utilization and contract execution, not immediate impairment |
| China PMI | Manufacturing PMI 50.3, non-manufacturing 49.4, composite PMI output 50.1; production 51.5, new export orders 50.3 | Manufacturing is resilient but not strong; export-order improvement offsets the single-line protectionism narrative |

## Question 1: Valuation Anchors in an AI Price War

### Method
I compared public model releases, API pricing, and benchmark data from 2026-04-24 through 2026-05-01. Pricing is measured in dollars per 1M tokens, while capability uses SWE-bench Verified, MMLU-Pro, GPQA Diamond, and LiveCodeBench. DeepSeek V4 pricing and parameter data come from DeepSeek-platform references, the Hugging Face blog, and technical-report summaries; GPT-5.5 and Claude 4.7 pricing and scores come from public trackers and technology-media references, so they are not regulatory or audited disclosures.

### Findings

| Model | Release/status | Input $/M tokens | Output $/M tokens | SWE-bench Verified | MMLU-Pro | GPQA Diamond | Output price vs. GPT-5.5 |
|---|---|---:|---:|---:|---:|---:|---:|
| DeepSeek V4-Flash | 2026-04-24 preview | 0.14 | 0.28 | 79.0 | 86.2 | 88.1 | -99.1% |
| DeepSeek V4-Pro | 2026-04-24 preview | 1.74 | 3.48 | 80.6 | 87.5 | 90.1 | -88.4% |
| GPT-5.5 | Public API | Not verified | 30.00 | 82.6 | Not disclosed | 94.2 | Baseline |
| Claude Opus 4.7 | Public API | Not verified | 25.00 | 87.6 | Not disclosed | 93.6 | -16.7% |

Numeric answer: on output pricing, V4-Pro is not “97% cheaper” than GPT-5.5 as the plan stated; it is 88.4% cheaper. V4-Flash is the model that approaches and exceeds that threshold, at a 99.1% discount. On “output cost per SWE-bench Verified point,” V4-Pro is $0.043/M tokens/point, compared with about $0.363/M tokens/point for GPT-5.5 and $0.285/M tokens/point for Claude Opus 4.7. This lower price anchor will force closed model vendors to differentiate through tooling, reliability, enterprise compliance, long-context stability, and ecosystem lock-in rather than generic reasoning alone. For NVDA, the first-order effect is not a demand downgrade; lower prices should stimulate more token consumption, while the real strategic risk is that DeepSeek V4 is described as optimized for Huawei Ascend, raising the weight of non-CUDA supply chains.

### Evidence
Raw inputs include Tom’s Hardware’s 2026-04-26 report on V4 pricing, parameters, and Huawei Ascend optimization; Hugging Face’s 2026 DeepSeek V4 blog on the 1.6T/49B active and 284B/13B active configurations; DeepSeek V4 technical-report summaries and public benchmark tables; and API pricing trackers comparing GPT-5.5, Claude Opus 4.7, and DeepSeek output pricing. Sources: <https://www.tomshardware.com/tech-industry/artificial-intelligence/deepseek-launches-1-6-trillion-parameter-v4-on-huawei-chips-as-us-escalates-ai-theft-accusations>; <https://huggingface.co/blog/deepseekv4>; <https://deepseekv4.app/docs/DeepSeek_V4_Technical_Report_Summary.pdf>.

### Caveats
DeepSeek V4 is still in preview, and independent third-party reproduction is limited. Pricing pages differ across versions, with references to $0.30/$0.50 and $1.74/$3.48; this report uses the Pro/Flash quotes that appeared consistently across this week’s sources and keeps the conclusion framed as a discount range. GPT-5.5 and Claude 4.7 data are not official financial disclosures, so the cost conclusion is fit for investment debate rather than audit work.

## Question 2: A New Paradigm for Monetary Policy

### Method
I read the 2026-04-29 FOMC statement and Powell press-conference transcript directly, searching for “AI,” “productivity,” “neutral,” and “inflation target.” I then used the U.S. Treasury daily par yield curve to measure market moves on 4/27, 4/29, and 5/1, and used the latest BLS Employment Situation release to verify the NFP calendar.

### Findings

| Indicator | Number/fact | Meaning |
|---|---:|---|
| Fed funds target range | 3.50%-3.75% | FOMC held rates unchanged |
| Powell mentions of “AI” | 0 | The planned “AI productivity” language is not supported by the official transcript |
| Powell on neutral rate | “between three and four percent”; current rate “a little north of three and a half” | Policy is seen as near neutral or mildly restrictive |
| Inflation references | headline PCE 3.5%, core PCE 3.2% | Still above the 2% goal |
| Labor-market reference | March 2026 unemployment rate 4.3% | Hiring has slowed but has not broken |
| April Employment Situation | BLS scheduled for 2026-05-08 | 2026-05-01 cannot be described as the official post-NFP market |

Numeric answer: there is no evidence that Powell used AI productivity to prepare markets for a higher inflation target; official material repeatedly refers to the 2% longer-run goal. The policy framework is better described as “waiting through supply shocks”: oil and tariffs are pushing inflation up, labor demand is cooling but not collapsing, and the Fed is preserving both hiking and cutting optionality. After 4/29, the 2Y yield rose 14bp from 4/27, while the 10Y rose 7bp, showing that markets read the meeting as a hawkish hold rather than a productivity narrative. Yields eased modestly by 5/1, but that was not a response to the April NFP release.

### Evidence
Federal Reserve 2026-04-29 Powell press conference transcript; U.S. Treasury Daily Treasury Par Yield Curve Rates; BLS 2026-04-03 Employment Situation Summary, which says the April Employment Situation is scheduled for Friday, May 8, 2026. Sources: <https://www.federalreserve.gov/mediacenter/files/FOMCpresconf20260429.pdf>; <https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve>; <https://www.bls.gov/news.release/empsit.nr0.htm>.

### Caveats
I did not obtain an auditable FedWatch or OIS snapshot, so those probabilities are excluded from the formal table. Some news reports said markets no longer expected a cut this year, but this report prioritizes official yield-curve data and the Fed transcript.

## Question 3: Sustainability of Big Tech Capex

### Method
I used Microsoft FY26 Q3, Alphabet Q1 2026, and Amazon Q1 2026 official investor-relations materials to extract quarterly revenue, cloud revenue/growth, and purchases or additions of property and equipment. The reporting basis is the quarter ended 2026-03-31 or the closest equivalent; Microsoft is FY26 Q3 but covers the same quarter ended 2026-03-31.

### Findings

| Company | Quarterly revenue | Cloud/AI revenue measure | Cloud growth | Quarterly Capex/PP&E additions | Capex/cloud revenue | Contract or demand signal |
|---|---:|---:|---:|---:|---:|---|
| MSFT | $82.886B | Intelligent Cloud $34.681B; Microsoft Cloud $54.5B | Intelligent Cloud +30%; Azure +40% | $30.876B | 0.89x | Commercial RPO $627B; AI business run-rate $37B |
| GOOGL | $109.896B | Google Cloud $20.028B | +63% | $35.674B | 1.78x | Cloud operating income $6.598B; shared AI R&D costs rising |
| AMZN | $181.5B | AWS $37.6B | +28% | $44.203B | 1.18x | AI chip business run-rate >$20B; OpenAI/Anthropic/Meta compute commitments |
| Total | $374.282B | $92.309B | N/A | $110.753B | 1.20x | Demand is strong, but cash-flow pressure is rising too |

Numeric answer: the three companies’ quarterly PP&E purchases/additions totaled $110.753B, equal to 1.20x their combined cloud revenue of $92.309B. Year over year, Microsoft additions to PP&E rose from $16.745B to $30.876B (+84.4%), Alphabet purchases of PP&E rose from $17.197B to $35.674B (+107.4%), and Amazon purchases of PP&E rose from $25.019B to $44.203B (+76.7%). This is not an immediate impairment signal because cloud growth is still strong, backlog is high, and AI run-rate figures are being disclosed. But the price war changes the investor question from “is there demand?” to “how many gross-profit dollars can each $1 of Capex generate?” If V4-like models pressure inference ASPs while memory, power, land, and GPU costs keep rising, depreciation and lease burdens will pressure valuation discount rates after 2027.

### Evidence
Microsoft FY26 Q3 investor release; Alphabet Q1 2026 earnings release PDF; Amazon Q1 2026 earnings release. Sources: <https://www.microsoft.com/en-us/investor/earnings/FY-2026-Q3/press-release-webcast>; <https://s206.q4cdn.com/479360582/files/doc_financials/2026/q1/2026q1-alphabet-earnings-release.pdf>; <https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-First-Quarter-Results/>.

### Caveats
Microsoft does not fully disclose Azure absolute revenue, so this report uses Intelligent Cloud as the auditable approximation. Amazon does not fully break out AWS AI revenue, and the chip run-rate is not equivalent to profit. Capex and revenue are mismatched over time, so single-quarter Capex/cloud revenue measures intensity, not ROI.

## Question 4: Quality of China’s Macro Recovery

### Method
I used the National Bureau of Statistics’ 2026-04-30 release for April PMI and its 12-month tables. The key series are manufacturing PMI, production, new orders, new export orders, non-manufacturing business activity, and composite PMI output. The main comparison is March to April 2026, including the gap between production and new export orders.

### Findings

| Indicator | 2026-03 | 2026-04 | M/M change | Conclusion |
|---|---:|---:|---:|---|
| Manufacturing PMI | 50.4 | 50.3 | -0.1 | Expansion for a second month, but with slightly slower momentum |
| Production | 51.4 | 51.5 | +0.1 | Production is still expanding and edged higher |
| New orders | 51.6 | 50.6 | -1.0 | Aggregate demand is still expanding but cooling |
| New export orders | 49.1 | 50.3 | +1.2 | Returned to expansion |
| Production minus new export orders | 2.3 | 1.2 | -1.1 | Divergence narrowed, not widened |
| Non-manufacturing business activity | 50.1 | 49.4 | -0.7 | Services/construction moved into contraction |
| Composite PMI output | 50.5 | 50.1 | -0.4 | Overall activity is still expanding but close to the threshold |

Numeric answer: April production at 51.5 minus new export orders at 50.3 gives a 1.2-point gap, down from 2.3 points in March. The data do not support the claim that a widening gap signals rising protectionism; they show export-order improvement. The real weakness is non-manufacturing: business activity fell to 49.4 and new orders to 44.3, so pre-Labor-Day services demand did not deliver a strong confirmation. For A-shares, the strategy should be structural rather than broad-index bullish: track high-end manufacturing and export-chain improvement, but wait for stronger order data before adding consumer-services and property-linked exposure.

### Evidence
National Bureau of Statistics, “2026 年 4 月中国采购经理指数运行情况”; NBS service survey center interpretation. Sources: <https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260430_1963473.html>; <https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260430_1963474.html>.

### Caveats
PMI is a diffusion index and does not report production or order value. Lunar New Year effects, pre-Labor-Day stocking, and oil-price shocks can all distort a single month. The export-order rebound needs confirmation from customs export values and destination-level data.

## Visualization-Ready Data Tables

### Chart 1: AI Inference Cost and Capability Matrix

| Model | Input $/M tokens | Output $/M tokens | SWE-bench Verified | MMLU-Pro | GPQA Diamond | LiveCodeBench | Note |
|---|---:|---:|---:|---:|---:|---:|---|
| DeepSeek V4-Flash | 0.14 | 0.28 | 79.0 | 86.2 | 88.1 | 91.6 | Preview, open weights |
| DeepSeek V4-Pro | 1.74 | 3.48 | 80.6 | 87.5 | 90.1 | 93.5 | Preview, 1.6T/49B active |
| GPT-5.5 | N/A | 30.00 | 82.6 | N/A | 94.2 | N/A | Pricing/scores from public trackers, not official filings |
| Claude Opus 4.7 | N/A | 25.00 | 87.6 | N/A | 93.6 | N/A | Pricing/scores from public trackers, not official filings |

### Chart 2: Treasury Yield Curve Around FOMC

| Date | 1M | 3M | 6M | 1Y | 2Y | 3Y | 5Y | 7Y | 10Y | 20Y | 30Y | Note |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-04-27 | 3.70 | 3.68 | 3.72 | 3.69 | 3.78 | 3.83 | 3.94 | 4.14 | 4.35 | 4.92 | 4.94 | Pre-FOMC |
| 2026-04-29 | 3.68 | 3.68 | 3.73 | 3.75 | 3.92 | 3.94 | 4.05 | 4.23 | 4.42 | 4.97 | 4.98 | Post-FOMC |
| 2026-05-01 | 3.71 | 3.68 | 3.71 | 3.73 | 3.88 | 3.91 | 4.02 | 4.20 | 4.39 | 4.96 | 4.97 | Post-week; not Post-NFP |

### Chart 3: Big Tech Capex vs. Cloud Revenue Growth Scatter

| Company | Ticker | Cloud revenue basis | Cloud revenue $B | Cloud revenue YoY | Quarterly Capex $B | Capex/cloud revenue | Total revenue $B |
|---|---|---|---:|---:|---:|---:|---:|
| Microsoft | MSFT | Intelligent Cloud | 34.681 | 30% | 30.876 | 0.89 | 82.886 |
| Alphabet | GOOGL | Google Cloud | 20.028 | 63% | 35.674 | 1.78 | 109.896 |
| Amazon | AMZN | AWS | 37.600 | 28% | 44.203 | 1.18 | 181.500 |

### Chart 4: China PMI Sentiment Trend

| Month | Manufacturing PMI | Non-manufacturing business activity | Composite PMI output | Production | New orders | New export orders | 50 threshold |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2025-04 | 49.0 | 50.4 | N/A | 49.8 | 49.2 | 44.7 | 50.0 |
| 2025-05 | 49.5 | 50.3 | N/A | 50.7 | 49.8 | 47.5 | 50.0 |
| 2025-06 | 49.7 | 50.5 | N/A | 51.0 | 50.2 | 47.7 | 50.0 |
| 2025-07 | 49.3 | 50.1 | N/A | 50.5 | 49.4 | 47.1 | 50.0 |
| 2025-08 | 49.4 | 50.3 | N/A | 50.8 | 49.5 | 47.2 | 50.0 |
| 2025-09 | 49.8 | 50.0 | N/A | 51.9 | 49.7 | 47.8 | 50.0 |
| 2025-10 | 49.0 | 50.1 | N/A | 49.7 | 48.8 | 45.9 | 50.0 |
| 2025-11 | 49.2 | 49.5 | N/A | 50.0 | 49.2 | 47.6 | 50.0 |
| 2025-12 | 50.1 | 50.2 | N/A | 51.7 | 50.8 | 49.0 | 50.0 |
| 2026-01 | 49.3 | 49.4 | N/A | 50.6 | 49.2 | 47.8 | 50.0 |
| 2026-02 | 49.0 | 49.5 | N/A | 49.6 | 48.6 | 45.0 | 50.0 |
| 2026-03 | 50.4 | 50.1 | 50.5 | 51.4 | 51.6 | 49.1 | 50.0 |
| 2026-04 | 50.3 | 49.4 | 50.1 | 51.5 | 50.6 | 50.3 | 50.0 |

Note: the NBS page explicitly gives composite PMI output at 50.1 for 2026-04 and says it fell 0.4 points from March, so 2026-03 is derived as 50.5. Earlier composite PMI values were not listed on the page and are marked N/A rather than backfilled.

## Follow-Up Items

| Priority | Item | Numbers to verify |
|---|---|---|
| High | BLS April Employment Situation on 2026-05-08 | NFP, unemployment rate, hourly earnings, participation rate, and prior revisions |
| High | Fed officials’ comments on oil and core PCE pass-through | Whether the stance shifts from “wait” to “neutral/hiking bias” |
| High | Third-party DeepSeek V4 retests | Actual latency, throughput, long-context stability, and enterprise usability |
| Medium | Big Tech 10-Q details and earnings calls | 2026 full-year Capex guidance, lease commitments, power and memory costs |
| Medium | China April exports and Labor Day consumption | Whether PMI new export orders are confirmed by value data |
