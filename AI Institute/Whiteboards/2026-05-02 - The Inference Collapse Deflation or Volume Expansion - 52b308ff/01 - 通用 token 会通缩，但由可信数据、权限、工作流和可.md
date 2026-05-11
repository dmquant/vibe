---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "ESG与主题"
---

# 通用 token 会通缩，但由可信数据、权限、工作流和可衡量结果构成的 AI 控制面会扩张并捕获更持久价值。

Analyst: **Thematic Researcher**
Status: **completed**
Stance: **initial**
Completed: **02/05/2026, 05:05:28**

## Links

- Whiteboard topic: [[The Inference Collapse Deflation or Volume Expansion]]
- Card topic: [[通用 token 会通缩，但由可信数据、权限、工作流和可衡量结果构成的 AI 控制面会扩张并捕获更持久价值。]]
- Analyst: [[Thematic Researcher]]
- Analyst level: [[ESG与主题]]

## Topic

通用 token 会通缩，但由可信数据、权限、工作流和可衡量结果构成的 AI 控制面会扩张并捕获更持久价值。

## Question

Investigate the topic "通用 token 会通缩，但由可信数据、权限、工作流和可衡量结果构成的 AI 控制面会扩张并捕获更持久价值。" and make the strongest evidence-based judgment you can.

## Summary

本卡形成初始综合判断：推理成本坍塌不会导致 AI 终端市场坍塌，而是把价值从通用模型 token 迁移到 AI-ready data、权限治理和嵌入业务流程的 workflow platforms。证据包括 Stanford HAI 的 GPT-3.5 等效查询成本超过 280 倍下降、OpenAI/Google/Anthropic 的低价与缓存价格、NVIDIA Data Center FY2026 收入 193.7B 美元，以及 McKinsey/Gartner 对工作流重构和 AI-ready data 的约束判断。下一步应由 tmt-analyst 量化 TMT 技术栈中谁能把推理通缩转化为软件利润。

## Report

# The Inference Collapse: 通缩还是用量扩张？

**问题：** 当边际推理成本趋近于零，价值捕获如何从模型层转向数据/工作流层？

**立场：** 初始综合判断。推理成本坍塌同时具有通缩性和扩张性：模型调用的单位价格快速下降，但更便宜的调用会扩大 AI 工作流的数量、长度和自主性。模型层会更像高吞吐、规模驱动的基础设施市场；更持久的价值捕获将转向专有数据、工作流集成、权限、治理和可衡量的业务结果。

## 核心判断

正确框架不是“AI 变便宜，所以 AI 收入坍塌”。更接近 Jevons 式转变：当一单位可用智能变便宜，用户会更自由地消费它。商品化的是通用 token；稀缺的是在可信企业上下文中行动的权利：客户记录、产品遥测、代码库、供应链事件、合规规则、运营审批，以及把 AI 建议变成已执行动作的工作流界面。

这会形成三层价值迁移：

1. **模型层：** 通用推理价格压缩，尤其是 mini/flash/nano 模型和缓存 prompt。
2. **数据层：** 企业会为干净、治理完善、权限明确、可复用的数据产品付费，因为坏数据会阻断生产级 AI。
3. **工作流层：** 嵌入业务流程的平台通过把低成本推理转化为工单关闭、代码交付、销售动作、欺诈决策、理赔处理和受监管审计轨迹来捕获价值。

## 证据基础

| 信号 | 证据 | 投资含义 |
|---|---:|---|
| 单位推理价格正在坍塌 | Stanford HAI 报告称，达到 GPT-3.5 等效 MMLU 水平的模型查询成本，从 **2022 年 11 月的每 1M tokens 20 美元** 降至 **2024 年 10 月的每 1M tokens 0.07 美元**，降幅 **超过 280 倍**；按任务不同，LLM 推理价格每年下降 **9x 到 900x**。 [Stanford HAI](https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts%C2%A0) |
| 下降并不均匀，也不是所有场景都同步 | Epoch AI 发现，固定性能水平下的 LLM 推理成本快速但不均匀地下行，按里程碑计算的下降速度为每年 **9x 到 900x**；其还估计 AI 芯片每美元性能每年提升 **37%**。 [Epoch AI](https://epoch.ai/trends/) |
| API 价格表已经显示商品化 | OpenAI 列示 `gpt-4.1-nano` 为每 1M tokens **0.10 美元输入 / 0.40 美元输出**，`gpt-4.1-mini` 为 **0.40 / 1.60 美元**，`gpt-4.1` 为 **2.00 / 8.00 美元**，Batch API 另有 **50%** 折扣。 [OpenAI](https://openai.com/index/gpt-4-1/) |
| 低成本模型正在成为多模态公共事业 | Google 列示 Gemini 2.5 Flash 为每 1M tokens **0.30 美元输入 / 2.50 美元输出**，Gemini 2.5 Flash-Lite 为 **0.10 美元输入 / 0.40 美元输出**；超出免费层的 grounding 可收费 **每 1,000 个 grounded prompts 35 美元**。 [Google AI](https://ai.google.dev/gemini-api/docs/pricing?gad_source=1) |
| 高端 reasoning 仍有定价权，但缓存会侵蚀重复上下文成本 | Anthropic 列示 Claude Sonnet 4.6 为每 MTok **3 美元输入 / 15 美元输出**，Claude Haiku 4.5 为 **1 / 5 美元**，cache hits 为基础输入价格的 **0.1x**。 [Anthropic](https://platform.claude.com/docs/en/about-claude/pricing) |
| 用量扩张是真实的 | NVIDIA 报告 Q4 FY2026 Data Center 收入 **62.3B 美元**，同比增长 **75%**，全年 Data Center 收入 **193.7B 美元**，同比增长 **68%**；公司还称 Rubin 相比 Blackwell 可将 inference token cost 最多降低 **10x**。 [NVIDIA](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026/) |
| 企业价值依赖工作流重构 | McKinsey 2025 AI 调研显示，高绩效者仅约占受访者 **6%**，其差异在于重构工作流、扩大部署、建设技术/数据基础设施、把 AI 嵌入业务流程并跟踪 KPI。 [McKinsey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai?form=MG0AV3) |
| 数据就绪是瓶颈 | Gartner 预测，到 2026 年，缺乏 AI-ready data 支撑的 AI 项目中将有 **60%** 被组织放弃。 [Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk) |
| 工作流平台正在货币化这一迁移 | ServiceNow 报告 Q4 2025 subscription revenue **3.466B 美元**，同比增长 **21%**，cRPO **12.85B 美元**，同比增长 **25%**；并将 Microsoft Agent 365 集成描述为把 workflow intelligence、trusted cloud、AI governance、copilots、agents 和 data 连接起来。 [ServiceNow SEC filing](https://www.sec.gov/Archives/edgar/data/1373715/000137371526000005/erq4fy25.htm) |
| Ontology/工作流 AI 可以呈现软件经济性 | Palantir 报告 FY2025 收入 **4.475B 美元**，同比增长 **56%**，U.S. commercial revenue **1.465B 美元**，同比增长 **109%**，adjusted free cash flow margin **51%**。 [Palantir/Nasdaq](https://www.nasdaq.com/press-release/palantir-reports-q4-2025-us-comm-revenue-growth-137-y-y-and-revenue-growth-70-y-y) |

## 机制：为什么价值离开通用模型层

**1. 模型质量扩散速度快于工作流改变速度。** 一旦前沿能力被封装进小模型、MoE routing、distillation、quantization、caching 和 batch inference，同一个用户任务往往可以由更便宜的模型完成。OpenAI 的 `gpt-4.1-nano` 和 Google 的 Flash-Lite 定价说明，市场正在形成低成本公共事业层。对许多重复性企业任务而言，赢家模型是“足够好、足够便宜、足够可观测”，不一定是原始 benchmark 最高的模型。

**2. 当应用掌握 orchestration，模型切换成本会下降。** 如果企业已经建设 routing、evaluation、observability、prompt libraries、retrieval、tool permissions 和 fallbacks，foundation model 就会变成可替换组件。这削弱纯模型定价权，同时强化掌握任务图和评估体系的平台。

**3. 数据成为稀缺输入，因为它是本地的、有权限边界的，而且很脏。** 公共预训练数据可以被复制或近似；企业当前合同条款、客户权益、实时库存、问题历史、实验记录、理赔文件或源代码依赖图不能。Gartner 的 **60%** 放弃预测很重要，因为它说明约束不只是 token 成本，而是 AI-ready data。

**4. 工作流所有权把推理转化为 ROI。** McKinsey 的 **6%** 高绩效者数据区分了“获得模型访问”和“实现经济捕获”。赢家会重构工作，把 AI 嵌入业务流程并跟踪 KPI。这也是 ServiceNow、Palantir、Snowflake、Databricks、Salesforce、Microsoft 和垂直软件厂商试图成为 AI control planes，而不是简单模型转售商的原因。

## 通缩还是用量扩张

**单位层面是通缩胜出。** 通用模型回答、总结、分类、抽取的价格会继续下降。这会压缩独立 API 的毛利，尤其是低端和中端层。供应商仍可通过 frontier reasoning、latency SLA、安全/合规担保、私有化部署、专门模态和硬件产能保留价值，但同等能力的默认方向是降价。

**系统层面是用量扩张胜出。** 更低成本把使用方式从“人问模型”扩展为“软件持续问模型”。Agents 会生成内部计划、调用工具、验证输出、失败重试、检查日志、总结状态，并与其他 agents 协作。一个业务事件可能触发几十次甚至上百次推理调用。NVIDIA 在声称 cost-per-token 下降的同时实现 Data Center 高增长，是最清晰的市场信号：单位成本下降，整体算力需求上升。

**会计单位发生变化。** 经济买方不想买 tokens；它想买已解决事件、合格线索、已更新 CRM 字段、已对账发票、通过的合规检查，或更快的药物发现循环。随着推理变便宜，定价会从 token 计量迁移到结果计量、席位打包、工作流交易、数据产品和治理层。

## 谁捕获价值？

| 层级 | 什么会商品化 | 什么仍具防御性 |
|---|---|---|
| Foundation models | 通用文本生成、总结、抽取、基础编码、低延迟商品推理 | Frontier reasoning、latency、多模态广度、安全担保、分发、私有部署、捆绑生态 |
| AI infrastructure | 原始 accelerator access、无差异 hosting | 规模、利用率、网络、内存层级、model serving software、电力接入、长期客户承诺 |
| Data platforms | 基础存储和 SQL | AI-ready data products、governance、lineage、vector/search integration、semantic layers、permission-aware retrieval |
| Workflow platforms | 简单 chatbots 和 copilots | System-of-record context、approvals、audit trails、agent orchestration、domain-specific actions、KPI-linked automation |
| Vertical applications | 通用 AI features | 受监管工作流、专有语料、合规知识、交易所有权、行业特定 evaluation loops |

最强的价值捕获点是 **workflow-data compounder**：一个平台既能看到工作、掌握权限、存储反馈，又能把每一次动作转化为下一次动作的更好上下文。这个护城河强于 prompt wrapper；在模型可替换之后，很多时候也强于纯模型护城河。

## 对投资者和经营者的含义

1. **不要把模型 API 收入作为稳定通行费来估值，除非供应商拥有 frontier、分发或基础设施控制权。** 低成本层和缓存会结构性压缩利润率。
2. **寻找那些推理成本下降能增加 gross profit dollars，而不只是增加用量的公司。** 采用固定订阅或结果定价的工作流软件可以把模型成本下降转化为利润。
3. **优先考虑数据重力和权限控制。** 如果供应商控制受治理的数据路径，它就能在不同模型之间 routing，并保留客户所有权。
4. **用工作流渗透率衡量 AI。** 相关 KPI 包括自动解决率、异常率、人工审批延迟、每完成任务成本、evaluation pass rate 和可审计性。
5. **预期捆绑战加剧。** 模型供应商会上移进入 agents 和 apps；应用平台会下探到 model routing 和数据层。争夺区是 enterprise agent control plane。

## 结论

推理成本坍塌不是终端市场坍塌，而是利润池再分配。通用 tokens 通缩，工作流膨胀。模型层仍然重要，但当推理接近零边际成本，市场会减少为模型的孤立答案付费，转而更多为答案周围的可信上下文、受控行动和可衡量结果付费。

## 交接

**推荐下一位分析师：** `tmt-analyst [primary]`

**后续主题：** 绘制 inference-collapse regime 下可投资的 TMT 技术栈。

**后续问题：** 哪些上市或后期私有 TMT 公司最具备 AI-ready data control、workflow ownership 和 model-routing leverage 的组合，从而受益于推理通缩？

**理由：** `tmt-analyst [primary]` 是合适的下一位，因为下一步不是泛化宏观风险复核，而是跨半导体、云、数据平台、企业软件和互联网应用的科技行业栈分析。

## Follow-up

- Analyst: tmt-analyst
- Topic: 绘制 inference-collapse regime 下可投资的 TMT 技术栈
- Question: 哪些上市或后期私有 TMT 公司最具备 AI-ready data control、workflow ownership 和 model-routing leverage 的组合，从而受益于推理通缩？
