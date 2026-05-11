---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "行业研究"
---

# AI基础设施主线应继续从宽泛capex-beta切向国产推理芯片、已兑现AI服务器订单和高负载数据中心设备，核心验证变量是推理利用率上行能否抵消token价格通缩。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **support**
Completed: **29/04/2026, 14:25:21**

## Links

- Whiteboard topic: [[AI基础设施：共识衰竭还是逻辑切换？]]
- Card topic: [[AI基础设施主线应继续从宽泛capex-beta切向国产推理芯片、已兑现AI服务器订单和高负载数据中心设备，核心验证变量是推理利用率上行能否抵消token价格通缩。]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

AI基础设施主线应继续从宽泛capex-beta切向国产推理芯片、已兑现AI服务器订单和高负载数据中心设备，核心验证变量是推理利用率上行能否抵消token价格通缩。

## Question

Investigate the topic "AI基础设施主线应继续从宽泛capex-beta切向国产推理芯片、已兑现AI服务器订单和高负载数据中心设备，核心验证变量是推理利用率上行能否抵消token价格通缩。" and make the strongest evidence-based judgment you can.

## Summary

本卡支持CEC逻辑切换：海外云厂2025Q4-2026Q1可货币化推理利用率约60-82%，2026E升至65-86%；中国云三家约50-68%，2026E升至58-76%。海外混合价格为USD 0.7-5.2/MTok，中国云为USD 0.12-1.30/MTok；标准1,200-token query毛利分别约USD 0.00035-0.0034和USD 0.00005-0.00070。A股合同/订单捕获最清晰的是688256、688041、000977、601138，002837和301018通过AIDC液冷与高负载MW经济间接受益。

## Report

# AI基础设施：推理利用率与Token货币化

**卡片 02/08 · TMT行业分析师 · 立场：support**  
**问题：** 在CEC框架下，海外超大规模云厂与阿里云/腾讯云/百度智能云的2025Q4-2026Q1推理利用率、USD/MTok混合价及单query毛利现处什么区间？哪些A股标的在合同/订单层面已经实质捕获到这部分单位经济？

---

## 1. 结论：CEC已经可被量化，但赢家范围在收窄

我支持卡片01的逻辑切换。证据并不指向“AI capex没有ROI”，而是指向市场不能继续把所有AI基础设施供应商都按同一套利用率、token价格和毛利率估值。当前CEC读数如下：

- 海外超大规模云厂的可货币化生产推理池利用率大致在 **60-82%**，2026E有望因路由、批处理、自研芯片和企业承诺需求提升至 **65-86%**。
- 中国云三家的利用率较低，约 **50-68%**，但token价格也显著更低。到2026E，随着国产模型路由和GPU池化系统成熟，预计提升至 **58-76%**。
- API货币化已经分成两个价格带：**海外云为USD 0.7-5.2/MTok**，**中国云为USD 0.12-1.30/MTok**。中国云不是“没有货币化”，而是在更低出清价格上货币化。
- 一个标准化的1,200-token企业query，在纯API口径下，海外单query毛利只有 **USD 0.00035-0.0034**，中国为 **USD 0.00005-0.00070**。所以投资信号不能只看token单价，而要看token量、高利用率和专有成本曲线的乘积。
- A股层面，合同/订单捕获最清晰的是 **688256 寒武纪、688041 海光信息、000977 浪潮信息、601138 工业富联**。**002837 英维克、301018 申菱环境** 通过AIDC液冷订单捕获同一轮CEC迁移，但它们是MW经济，而不是单token经济。

最强的映射是：CEC更有利于**推理芯片、AI服务器和高负载数据中心设备中已经体现收入转化的公司**；单纯capex-beta标的需要拿出真实订单兑现，而不只是引用海外云厂资本开支标题。

## 2. 估算框架

AWS、Microsoft、Google、Oracle、Alibaba、Tencent、Baidu都不直接披露“推理利用率”，因此我采用统一经营口径：

- **推理利用率：** 扣除低延迟冗余、故障切换、峰值突发和模型升级预留后，加速器资源池中实际分配给可收入确认推理工作负载的小时占比。
- **USD/MTok混合价：** 经输入/输出token结构、缓存折扣、企业折扣和小模型路由调整后的每百万总文本token实际收入。基准query设为 **800个输入token + 400个输出token**，合计1,200个token。
- **单query毛利：** `混合USD/MTok × 1,200 / 1,000,000 × 毛利率`。毛利率根据云毛利率指引、AI基础设施对毛利率的拖累、自研芯片占比和中国价格战估算。
- **汇率：** 人民币价格按 **RMB 7.10/USD** 换算。所有区间均做四舍五入，适合做方向性判断，不适合作为精确点估值。

因此，下表数字是**由公开价格表和披露信息锚定的研究估算**，不是云厂官方披露KPI。

## 3. 云厂区间：2025Q4-2026Q1与2026E

| 云厂 | 2025Q4-2026Q1推理利用率 | 2026E推理利用率 | 混合USD/MTok | 单query毛利 | CEC判断 |
|---|---:|---:|---:|---:|---|
| AWS | 63-72% | 70-78% | 1.4-3.6 | 0.0008-0.0025 | Bedrock多模型路由、Trainium/Inferentia成本曲线和AWS AI需求支撑利用率。 |
| Microsoft Azure/OpenAI | 68-80% | 72-84% | 2.2-5.2 | 0.0012-0.0034 | 企业货币化最强，但AI基础设施投入会压低云毛利率。 |
| Google Cloud/Gemini | 70-82% | 75-86% | 0.7-2.8 | 0.00045-0.0019 | TPU带来海外三家中最强成本曲线，但Gemini价格也更激进。 |
| Oracle OCI | 58-72% | 65-80% | 1.1-3.2 | 0.00055-0.0020 | 大型AI基础设施合同储备高；随着预付款/客户供卡产能交付，利用率上行。 |
| Alibaba Cloud | 57-68% | 64-76% | 0.12-0.85 | 0.00005-0.00045 | 中国云三家中的低价领导者；Aegaeon式池化是真实成本杠杆。 |
| Tencent Cloud | 50-62% | 58-70% | 0.18-1.10 | 0.00006-0.00055 | Hunyuan/TokenHub价格支持货币化，但利用率取决于Weixin、游戏和企业场景渗透。 |
| Baidu AI Cloud | 55-66% | 62-74% | 0.25-1.30 | 0.00010-0.00070 | 搜索、Qianfan和ERNIE集成提供流量，但ERNIE Turbo低价限制API毛利。 |

真正重要的是两点。第一，**Azure和Google是海外CEC切换最清晰的验证点**：二者同时具备高利用率、可辨识AI收入和自研优化能力。第二，**Alibaba和Baidu证明中国云在低价下仍可货币化推理**，前提是通过模型复用、池化调度和国产芯片供给抬高利用率。

## 4. 价格证据：token通缩真实存在，但不必然致命

官方及公司相关价格信息显示，token通缩是确定方向：

- AWS Bedrock覆盖第三方和自有模型，并在Q4 2025更新中纳入 Anthropic、Amazon Nova、OpenAI、Qwen、Mistral、Cohere、MiniMax、Moonshot 等模型，支持多模型测试与切换。来源：[Amazon Q4 2025 results](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Fourth-Quarter-Results/default.aspx)、[Amazon Bedrock pricing](https://aws.amazon.com/bedrock/pricing/)。
- Azure/OpenAI仍是高端货币化通道，因为企业愿意为OpenAI模型、治理能力和Microsoft 365/Copilot捆绑付费。Microsoft在FY26 Q2指引中提到Microsoft Cloud毛利率约 **65%**，同比下降主要受AI基础设施投资影响。来源：[Microsoft FY26 Q2 release](https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q2/press-release-webcast)、[Microsoft FY26 Q2 earnings call](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q2)、[Azure OpenAI pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/)。
- Google在海外三家中成本曲线最优，因为Gemini推理可以更多依赖TPU经济性，但其公开价格也更激进。Alphabet指引2026 capex为 **USD 175-185bn**，用于满足AI和云需求。来源：[Alphabet Q4 2025 results](https://s206.q4cdn.com/479360582/files/doc_news/2026/Feb/04/attachments/2025q4-alphabet-earnings-release.pdf)、[Vertex AI generative AI pricing](https://cloud.google.com/vertex-ai/generative-ai/pricing)。
- Oracle不是典型API价格故事，而是合同型AI基础设施故事。Q3 FY26 RPO大幅上行，管理层说明增量主要来自大型AI合同，且许多合同由客户预付款或客户自供GPU支持。来源：[Oracle Q3 FY26 results](https://investor.oracle.com/investor-news/news-details/2026/Oracle-Announces-Fiscal-Year-2026-Third-Quarter-Financial-Results/default.aspx)。
- 阿里云百炼官方价格页披露Qwen分层价格；Aegaeon调度器的独立研究显示，在Model Studio多月测试中，并发服务所需H20 GPU从 **1,192张降至213张**。来源：[Alibaba Model Studio pricing](https://help.aliyun.com/document_detail/2840914.html)、[Aegaeon SOSP paper](https://ennanzhai.github.io/pub/sosp25-aegaeon.pdf)。
- 腾讯云混元价格页显示 Hunyuan-TurboS 为 **RMB 0.8/MTok输入、RMB 2/MTok输出**，Tencent Hy3 preview页面显示国际TokenHub起步价格约为 **USD 0.18/MTok输入、USD 0.59/MTok输出**。来源：[Tencent Hunyuan pricing](https://cloud.tencent.com/document/product/1729/97731)、[Tencent Hy3 preview](https://www.tencent.com/en-us/articles/2202320.html)。
- Baidu ERNIE 4.5 API起步价为 **RMB 0.004/千输入token、RMB 0.016/千输出token**，后续ERNIE 4.5 Turbo价格降至 **RMB 0.8/MTok输入、RMB 3.2/MTok输出**。来源：[Baidu ERNIE 4.5 launch](https://finance.yahoo.com/news/baidu-unveils-ernie-4-5-083600428.html)、[Baidu ERNIE Turbo launch](https://finance.yahoo.com/news/baidu-launches-ernie-4-5-170300017.html)。

核心点是：只有当利用率不能同步上行时，token通缩才是利空。若利用率从55%提升至75%，且批处理、KV-cache、量化和自研芯片让每token服务成本下降30-50%，更低的USD/MTok仍可能带来更高的毛利额。

## 5. A股合同与订单捕获

| Ticker | 公司 | 捕获类型 | 证据状态 | 投资判断 |
|---|---|---|---|---|
| 688256 | 寒武纪 | 国产推理加速器与AI卡收入 | 强。2025年收入 **RMB 6.497bn**，同比 **453.21%**，实现盈利；2025H1毛利率为 **55.93%**。 | A股P1单位经济最纯标的，但客户集中度和估值纪律是主要风险。 |
| 688041 | 海光信息 | DCU + CPU国产AI集群平台 | 强。2025年收入 **RMB 14.377bn**，同比 **56.92%**；卖方对公司披露的总结显示DCU已经在互联网和商业AI场景规模化应用。 | P1/P2强映射，DCU放量直接关联国产推理利用率和本土化需求。 |
| 000977 | 浪潮信息 | AI服务器集成与推理服务器产品 | 收入捕获强，但毛利捕获质量较低。2025年收入 **RMB 164.782bn**，同比 **43.25%**，服务器收入约 **RMB 154.605bn**。 | 捕获云厂和AIDC订单转化，但集成模式和部件成本会稀释毛利。 |
| 601138 | 工业富联 | 全球AI服务器与云基础设施制造 | 订单/收入捕获强。2025年云计算业务收入报道为 **RMB 602.679bn**，AI服务器需求是核心增长驱动。 | 海外超大规模云厂capex/订单代理较好，但对单token毛利并不直接。 |
| 002837 | 英维克 | AIDC液冷与热管理 | 中到强。捕获高机柜密度和持续负载率，而非token收入。 | P4受益者：经常性MW负载和高密部署比模型选择更重要。 |
| 301018 | 申菱环境 | 数据中心精密空调与液冷系统 | 中等。订单链条指向AIDC建设和高负载运行。 | 可作为CEC支撑资产，但不是直接单位经济代理。 |

我会把这些标的分成两个篮子：

- **直接CEC捕获：** 寒武纪、海光信息。因为推理利用率和每token成本直接决定客户采购芯片的需求与议价能力。
- **订单转化捕获：** 浪潮信息、工业富联、英维克、申菱环境。它们货币化的是产能建设，而产能建设只有在利用率上行时才更有经济合理性。

暂时不应把没有披露AI模块ARR、API收入或云token透传收入的泛SaaS和应用层AI标的，视为已经在合同层面捕获CEC。它们后续可能受益，但本卡问题强调“已经可见的合同或订单捕获”。

## 6. 对白板主线的含义

本卡强化卡片01。争论不应停在“capex泡沫还是非泡沫”。更好的问题是：**哪些供应商最接近高利用率、低成本推理池，并且云厂在token通缩后仍能赚取毛利**。

我的判断：

- 海外超大规模云厂：CEC为正，尤其是Azure和Google；AWS通过Bedrock广度与Trainium改善；Oracle订单储备强，但要跟踪交付毛利。
- 中国云三家：CEC处于低价但可行状态。Alibaba是成本曲线领先者；Tencent需要生态场景拉动利用率；Baidu有搜索/Qianfan流量，但面临价格压缩。
- A股配置：从宽泛capex-beta转向**国产推理芯片 + 已兑现AI服务器订单 + 高负载液冷**。下一张卡应检验这些A股代理是否已经拥挤、估值是否提前反映2026E利用率上行。

## 7. 交接

建议下一位分析师：**ashare-strategist [primary]**。  
后续主题：A股CEC受益标的的估值与拥挤度筛查。  
后续问题：688256、688041、000977、601138、002837、301018是否已经计入2026E推理利用率改善，还是市场仍把它们按一般capex-beta定价？

## 来源

Amazon Q4 2025 results: https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Fourth-Quarter-Results/default.aspx  
Amazon Bedrock pricing: https://aws.amazon.com/bedrock/pricing/  
Microsoft FY26 Q2 release: https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q2/press-release-webcast  
Microsoft FY26 Q2 earnings call: https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q2  
Azure OpenAI pricing: https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/  
Alphabet Q4 2025 results: https://s206.q4cdn.com/479360582/files/doc_news/2026/Feb/04/attachments/2025q4-alphabet-earnings-release.pdf  
Vertex AI pricing: https://cloud.google.com/vertex-ai/generative-ai/pricing  
Oracle Q3 FY26 results: https://investor.oracle.com/investor-news/news-details/2026/Oracle-Announces-Fiscal-Year-2026-Third-Quarter-Financial-Results/default.aspx  
Alibaba Model Studio pricing: https://help.aliyun.com/document_detail/2840914.html  
Aegaeon SOSP paper: https://ennanzhai.github.io/pub/sosp25-aegaeon.pdf  
Tencent Hunyuan pricing: https://cloud.tencent.com/document/product/1729/97731  
Tencent Hy3 preview: https://www.tencent.com/en-us/articles/2202320.html  
Baidu ERNIE 4.5 launch: https://finance.yahoo.com/news/baidu-unveils-ernie-4-5-083600428.html  
Baidu ERNIE Turbo launch: https://finance.yahoo.com/news/baidu-launches-ernie-4-5-170300017.html  
Cambricon 2025 summary: https://stock.finance.sina.com.cn/stock/go.php/vReport_Show/kind/search/rptid/829013871066/index.phtml  
Cambricon 2025H1 margin summary: https://finance.sina.com.cn/jjxw/2025-08-27/doc-infnkyfe0708127.shtml  
Hygon 2025 and 2026Q1 summary: https://stock.finance.sina.com.cn/stock/go.php/vReport_Show/kind/lastest/rptid/829811580228/index.phtml  
Inspur 2025 summary: https://stock.finance.sina.com.cn/stock/go.php/vReport_Show/kind/search/rptid/830102466377/index.phtml  
FII 2025 summary: https://pdf.dfcfw.com/pdf/H3_AP202603121820526609_1.pdf%3F1773349426000.pdf

## Follow-up

- Analyst: ashare-strategist
- Topic: A股CEC受益标的的估值与拥挤度筛查
- Question: 688256、688041、000977、601138、002837、301018是否已经计入2026E推理利用率改善，还是市场仍把它们按一般capex-beta定价？
