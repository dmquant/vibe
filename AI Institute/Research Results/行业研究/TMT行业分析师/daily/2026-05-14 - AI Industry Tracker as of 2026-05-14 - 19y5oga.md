---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# AI Industry Tracker (as of 2026-05-14)

Kind: **daily**
Analyst: **TMT Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

# AI Industry Tracker (as of 2026-05-14)

## Prioritized Conclusions

1. **The frontier-model race is moving from “single-shot intelligence” to executable agents.** OpenAI GPT-5.5, Google Gemini 3.1 Pro, DeepSeek-V4, and Alibaba Qwen3.5 all emphasize coding, tool use, GUI/computer control, multimodality, and long-horizon task execution. Differentiation is shifting away from generic chat quality toward reliable integration with enterprise software, successful completion of multi-step workflows, and inference economics that can support large-scale usage. Sources: [S1](https://openai.com/index/introducing-gpt-5-5/), [S2](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/), [S3](https://www.deepseek.com/en/transparency/), [S5](https://www.alibabagroup.com/en-US/document-1960233590314762240)

2. **Compute demand is still being revised upward; capacity constraints have not cleared.** Microsoft expects roughly $190 billion of calendar-2026 capital expenditures and says Azure will remain capacity-constrained at least through 2026 even as GPU, CPU, and storage capacity comes online faster. Meta raised 2026 capex guidance from $115 billion-$135 billion to $125 billion-$145 billion. Amazon disclosed an annualized chips revenue run rate above $20 billion, plus OpenAI’s roughly 2GW Trainium commitment and Anthropic’s commitment for up to 5GW of Trainium capacity. Sources: [S7](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3), [S8](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-First-Quarter-Results/), [S9](https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-First-Quarter-2026-Results/)

3. **Upstream semiconductor data still validate strong AI demand.** NVIDIA’s latest results showed fourth-quarter revenue of $62.3 billion, up 75% year over year, and full-year revenue of $193.7 billion, up 68%. AMD Q1 2026 Data Center revenue was $5.8 billion, up 57%. TSMC’s January-April 2026 consolidated revenue was NT$1.545 trillion, up 29.9%. Together, these datapoints keep AI servers, accelerators, HBM/advanced packaging, and leading-edge foundry demand at the center of the semiconductor cycle. Sources: [S10](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026/), [S11](https://www.amd.com/en/newsroom/press-releases/2026-5-5-amd-reports-first-quarter-2026-financial-results.html), [S12](https://investor.tsmc.com/english/monthly-revenue/2026)

4. **AI applications are moving from assistants into business processes.** Microsoft’s AI business ARR exceeded $37 billion, up 123%, and Microsoft 365 Copilot paid seats exceeded 20 million. Google says nearly 75% of Cloud customers already use Google Cloud AI, while 330 organizations each processed more than 1 trillion tokens over the past year. Anthropic launched Claude for Small Business with connectors to QuickBooks, PayPal, HubSpot, Canva, Docusign, Google Workspace, and Microsoft 365. Alibaba’s Qwen App partnered with China Eastern Airlines to put flight search, ticketing, seat selection, and check-in into a chat-based flow. Sources: [S6](https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/), [S7](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3), [S13](https://www.anthropic.com/news/claude-for-small-business), [S14](https://www.alibabagroup.com/en-US/document-1985779771614691328)

## Model Progress

| Company/model | Latest milestone | Key metrics or capabilities | Analytical read-through |
|---|---:|---:|---|
| OpenAI GPT-5.5 | Released on 2026-04-23; API available on 2026-04-24 | 1M context window; standard API price of $5 per 1M input tokens and $30 per 1M output tokens; Terminal-Bench 2.0 score of 82.7% and FrontierMath Tier 1-3 score of 51.7% | OpenAI is leaning into professional work, coding, toolchains, and computer use; cost and latency are now as important as raw capability. [S1](https://openai.com/index/introducing-gpt-5-5/) |
| Google Gemini 3.1 Pro | Previewed on 2026-02-19 | ARC-AGI-2 verified score of 77.1%; available through Gemini API, Vertex AI, Gemini Enterprise, Gemini app, and NotebookLM | Google is strengthening its full-stack loop across model, TPU, Cloud, and Workspace, with complex reasoning and enterprise agents as the focus. [S2](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/) |
| DeepSeek-V4 | Released on 2026-04-24 | API supports `deepseek-v4-pro` and `deepseek-v4-flash`; `deepseek-chat` and `deepseek-reasoner` will be discontinued on 2026-07-24 | Chinese model supply continues to move toward cost-effective and interface-compatible models; V4 commercial API stability and enterprise adoption need close tracking. [S3](https://www.deepseek.com/en/transparency/), [S4](https://api-docs.deepseek.com/updates/) |
| Alibaba Qwen3.5-397B-A17B | Open-sourced on 2026-02-16 | Natively multimodal; supports 201 languages and dialects; uses linear attention plus sparse MoE to lower inference cost | Qwen’s route is “open ecosystem + low-cost deployment + Alibaba business scenarios,” which is attractive for Chinese enterprise private deployment and multimodal agents. [S5](https://www.alibabagroup.com/en-US/document-1960233590314762240) |
| Google Gemma 4 | April 2026 update | Google says the Gemma family has exceeded 500 million cumulative developer downloads | Open-model ecosystems keep expanding, which should push down pricing for edge deployment, private deployment, and industry fine-tuning. [S6](https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/) |

## Compute Demand and the Semiconductor Chain

| Layer | Latest data | Investment read-through |
|---|---:|---|
| Hyperscaler capex | Microsoft Q3 FY26 capex was $31.9 billion, with roughly two-thirds in short-lived assets such as GPUs and CPUs; calendar-2026 capex is expected to be about $190 billion, and Q4 FY26 capex is expected to exceed $40 billion. [S7](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3) | AI training and inference are becoming a continuing capacity race rather than a one-off project; high short-lived compute asset intensity makes depreciation, supply chain execution, and utilization central to valuation. |
| Cloud custom silicon | Amazon’s chips business exceeded a $20 billion annualized revenue run rate; more than 2.1 million AI chips landed over the past 12 months, more than half of them Trainium; Amazon also plans to deploy more than 1 million NVIDIA GPUs starting in 2026. [S8](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-First-Quarter-Results/) | Custom ASICs and Trainium are not a simple replacement story for NVIDIA; they are a cost-down tool for selected training and inference workloads, while GPUs remain central for flexibility and ecosystem compatibility. |
| GW-scale customer commitments | Amazon disclosed that OpenAI’s roughly 2GW Trainium capacity begins ramping in 2027, while Anthropic has committed to up to 5GW of Trainium capacity. [S8](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-First-Quarter-Results/) | Compute procurement has moved from chip counts to GW-scale contracts spanning power, datacenters, networking, and silicon, benefiting power, liquid cooling, optical, advanced packaging, and datacenter supply chains. |
| GPU leader | NVIDIA fourth-quarter revenue was $62.3 billion, up 75%; full-year revenue was $193.7 billion, up 68%; Rubin targets up to a 10x reduction in inference token cost versus Blackwell. [S10](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026/) | NVIDIA’s story has expanded from training GPUs to inference cost, networking, storage, software, and AI factories; cycle duration depends on whether inference revenue can cover elevated capex. |
| Second supplier | AMD Q1 2026 revenue was $10.253 billion, up 38%; Data Center revenue was $5.8 billion, up 57%, driven by EPYC and Instinct GPU ramp. [S11](https://www.amd.com/en/newsroom/press-releases/2026-5-5-amd-reports-first-quarter-2026-financial-results.html) | AMD continues to gain share in mainstream CPUs and selected GPU clusters; key monitors are MI450/MI455X, ROCm maturity, cloud adoption, and supply execution. |
| Leading-edge foundry | TSMC April 2026 revenue was NT$410.726 billion, up 17.5%; January-April revenue was NT$1.545 trillion, up 29.9%. [S12](https://investor.tsmc.com/english/monthly-revenue/2026) | Leading-edge demand remains strong, but monthly growth slowed from 45.2% in March to 17.5% in April; monitor whether AI customer schedules are moving from acute shortage to structural tightness. |

## Application Deployment

| Use case | Progress | Commercialization signal |
|---|---|---|
| Office and knowledge work | Microsoft 365 Copilot paid seats exceeded 20 million; large-customer expansion is visible, with Accenture above 740,000 seats and Bayer, Johnson & Johnson, Mercedes, and Roche each committing 90,000+ seats. [S7](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3) | Monetization is moving from seats toward “seats + consumption”; ARPU will depend on real agent usage and integration with enterprise data. |
| Cloud AI platforms | Microsoft AI ARR exceeded $37 billion, up 123%; nearly 75% of Google Cloud customers already use Google Cloud AI, and 330 organizations each processed more than 1 trillion tokens over the past year. [S6](https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/), [S7](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3) | Enterprise AI has moved from pilots into production usage; token scale, governance, and data permissions are becoming cloud-platform differentiators. |
| Small and mid-sized businesses | Anthropic launched Claude for Small Business with 15 ready-to-run workflows and 15 skills across finance, operations, sales, marketing, HR, and customer service. [S13](https://www.anthropic.com/news/claude-for-small-business) | SMB could be a second adoption curve for AI applications, but trust, data security, and training costs remain conversion bottlenecks. |
| Consumer and local-services agents | Qwen App partnered with China Eastern Airlines, opening its agentic capabilities to an external partner for the first time and covering search, ticketing, seat selection, and check-in. [S14](https://www.alibabagroup.com/en-US/document-1985779771614691328) | Chinese internet platforms have an advantage in transaction loops and super-app ecosystems; agent value can show up directly in conversion, repeat purchase, and service commissions. |
| Cloud agent infrastructure | Amazon previewed Amazon Bedrock Managed Agents powered by OpenAI and said GPT-5.4 is in limited preview on Bedrock, with GPT-5.5 coming soon. [S8](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-First-Quarter-Results/) | The boundary between model vendors and cloud platforms keeps blurring; multi-model routing, managed agent runtimes, and enterprise governance will be core battlegrounds. |

## Key Company Moves

| Company | Development | Variables to monitor |
|---|---|---|
| OpenAI | GPT-5.5 launched with a 1M context window and stronger agentic capabilities; API pricing is $5 per 1M input tokens and $30 per 1M output tokens; Amazon says GPT-5.5 is coming to Bedrock. [S1](https://openai.com/index/introducing-gpt-5-5/), [S8](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-First-Quarter-Results/) | Enterprise API gross margin, long-task reliability, and channel balance across Microsoft and AWS. |
| Microsoft | AI ARR exceeded $37 billion; Azure revenue grew 40%, or 39% in constant currency; calendar-2026 capex is expected to be about $190 billion, with capacity still constrained. [S7](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3) | Capex intensity, Copilot usage monetization, available Azure capacity, and the quality of OpenAI-related RPO. |
| Amazon | AWS Q1 2026 sales were $37.6 billion, up 28%, with AWS operating income of $14.2 billion; chips annualized revenue exceeded $20 billion; trailing-twelve-month FCF fell to $1.2 billion, mainly due to AI-related PPE investment. [S8](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-First-Quarter-Results/) | Trainium utilization, Bedrock model breadth, and the pace of free-cash-flow recovery. |
| Google/Alphabet | Gemini 3.1 Pro and Gemma 4 strengthen the model layer; Cloud Next '26 introduced Gemini Enterprise Agent Platform and eighth-generation TPUs; Google disclosed more aggressive Cloud AI usage metrics. [S2](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/), [S6](https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/) | TPU ecosystem openness, Workspace/Gemini paid conversion, and AI-driven changes to search advertising. |
| Meta | Q1 2026 revenue was $56.311 billion, up 33%; 2026 capex guidance was raised to $125 billion-$145 billion due to component pricing and future datacenter capacity. [S9](https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-First-Quarter-2026-Results/) | Whether AI recommendations and ad ROI justify very large capex, plus expense flexibility across Reality Labs and AI talent. |
| NVIDIA | Datacenter and inference ecosystem leadership continues; Rubin, Blackwell Ultra, networking, and AI-native storage form the next platform narrative. [S10](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026/) | Whether lower inference token costs expand total demand, and whether customer custom silicon pressures long-term gross margin. |
| AMD | Data Center revenue rose 57%; Meta plans to deploy up to 6GW of AMD Instinct GPUs, with the first 1GW powered by a custom MI450 GPU. [S11](https://www.amd.com/en/newsroom/press-releases/2026-5-5-amd-reports-first-quarter-2026-financial-results.html) | MI450/MI455X supply, ROCm maturity, and cloud-customer scale deployment. |
| Alibaba/DeepSeek | Qwen3.5 emphasizes multimodality, 201 languages, and low inference cost; DeepSeek-V4 was released on 2026-04-24 and updated API model naming. [S3](https://www.deepseek.com/en/transparency/), [S4](https://api-docs.deepseek.com/updates/), [S5](https://www.alibabagroup.com/en-US/document-1960233590314762240) | Domestic model price competition, private deployment, public-sector/export constraints, and inference stability. |

## Risks and Debate Points

- **ROI pressure is rising.** Microsoft, Meta, and Amazon have moved into hundred-billion-dollar and GW-scale AI investment programs. If Copilot, ad recommendations, Bedrock/Trainium, and enterprise agents ramp revenue more slowly than depreciation, the market will compress valuation multiples for cloud and internet platforms.
- **The supply bottleneck is shifting from GPUs to systems engineering.** Key 2026 constraints include power, racks, optical modules, network switching, HBM, advanced packaging, liquid cooling, and datacenter delivery, not just GPU availability.
- **Model capability continues to improve quickly, but price competition will erode mid-range inference.** Efficient and open models such as Qwen, DeepSeek, and Gemma should push down pricing for ordinary text, coding assistance, and RAG workloads. Premium closed models need to justify their spread through long-task reliability, enterprise security, and tool execution.
- **Regulation and data security remain deployment bottlenecks.** SMB, financial-services, healthcare, and government customers need permission inheritance, auditability, data isolation, and human approvals. Agents without a governance layer will struggle to enter production.

## Follow-Up Items

| Priority | Item to track | Trigger |
|---|---|---|
| High | Further 2026 capex guidance from Microsoft, Meta, Amazon, and Alphabet | If guidance rises again, focus on power, liquid cooling, optical modules, advanced packaging, and server ODMs; if it falls, watch for AI-demand or financing-constraint signals. |
| High | NVIDIA Q1 FY27 results and Rubin/Blackwell Ultra order visibility | Watch China revenue assumptions, Blackwell-to-Rubin migration, inference mix, and gross margin. |
| High | Real retention and usage for Copilot, Claude for Small Business, and Qwen App | Seat growth must turn into high-frequency workflow calls; otherwise the agent narrative remains demo-led. |
| Medium | Pricing and stability of DeepSeek-V4 and Qwen3.5 in enterprise APIs and private deployment | If Chinese models improve stability in multimodal and agent tasks, domestic enterprise replacement and pricing pressure will accelerate. |
| Medium | TSMC monthly revenue, CoWoS/advanced-packaging capacity, and HBM supply | Use these datapoints to judge whether the AI supply chain is moving from shortage to tight balance or into an inventory cycle. |

## Sources

| ID | Source |
|---|---|
| S1 | OpenAI, “Introducing GPT-5.5,” 2026-04-23. https://openai.com/index/introducing-gpt-5-5/ |
| S2 | Google, “Gemini 3.1 Pro: A smarter model for your most complex tasks,” 2026-02-19. https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/ |
| S3 | DeepSeek Transparency Center, DeepSeek-V4 release date. https://www.deepseek.com/en/transparency/ |
| S4 | DeepSeek API Docs, Change Log, 2026-04-24. https://api-docs.deepseek.com/updates/ |
| S5 | Alibaba Group, “Alibaba Open-Sources Qwen3.5,” 2026-02-16. https://www.alibabagroup.com/en-US/document-1960233590314762240 |
| S6 | Google, “The latest AI news we announced in April 2026,” 2026-05-04. https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/ |
| S7 | Microsoft FY26 Q3 Earnings Conference Call, 2026-04-29. https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3 |
| S8 | Amazon Q1 2026 Results, 2026-04-29. https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-First-Quarter-Results/ |
| S9 | Meta Q1 2026 Results, 2026-04-29. https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-First-Quarter-2026-Results/ |
| S10 | NVIDIA Q4 and Fiscal 2026 Results, 2026-02-25. https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026/ |
| S11 | AMD Q1 2026 Results, 2026-05-05. https://www.amd.com/en/newsroom/press-releases/2026-5-5-amd-reports-first-quarter-2026-financial-results.html |
| S12 | TSMC 2026 Monthly Revenue. https://investor.tsmc.com/english/monthly-revenue/2026 |
| S13 | Anthropic, “Introducing Claude for Small Business,” 2026-05-13. https://www.anthropic.com/news/claude-for-small-business |
| S14 | Alibaba Group, “Qwen App Expands Seamless End-to-End Agentic Experience with First External Partnership,” 2026-04-23. https://www.alibabagroup.com/en-US/document-1985779771614691328 |
