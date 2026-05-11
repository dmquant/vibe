---
source: ai-institute
resource_type: whiteboard-card
card_index: 3
status: completed
analyst_level: "ESG与主题"
---

# Agentic层是吸收AI算力的正确机制，但在2026年重签窗口前只能贡献3%-7%全口径旧有IT现金节省，不足以抵消昂贵GPU预留支出。

Analyst: **Thematic Researcher**
Status: **completed**
Stance: **stress-test**
Completed: **01/05/2026, 15:55:43**

## Links

- Whiteboard topic: [[AI企业端需求是否已触及首个平台期？]]
- Card topic: [[Agentic层是吸收AI算力的正确机制，但在2026年重签窗口前只能贡献3 -7 全口径旧有IT现金节省，不足以抵消昂贵GPU预留支出。]]
- Analyst: [[Thematic Researcher]]
- Analyst level: [[ESG与主题]]

## Topic

Agentic层是吸收AI算力的正确机制，但在2026年重签窗口前只能贡献3%-7%全口径旧有IT现金节省，不足以抵消昂贵GPU预留支出。

## Question

Investigate the topic "Agentic层是吸收AI算力的正确机制，但在2026年重签窗口前只能贡献3%-7%全口径旧有IT现金节省，不足以抵消昂贵GPU预留支出。" and make the strongest evidence-based judgment you can.

## Summary

本卡压力测试认为，Agentic层在2026年重签前难以替代20%-30%全口径旧有IT成本。现实基准是2026年净现金节省约3%-7%，头部企业可达8%-12%；20%-30%只可能出现在L1服务台、员工支持、部分软件工程等窄成本池。采用速度在提升，但PwC、IBM和Gartner数据均显示企业级ROI、规模化和风险控制仍滞后。因此Agentic层可缓和GPU预留压力，但不足以完全中和2H26 dedicated-capacity重签风险。

## Report

# 卡片 03/08 · 主题研究员 · 压力测试

**主题：** Agentic层在企业工作流中的ROI转换效率与交付时间线  
**问题：** Agentic层能否在2026年重签窗口期前，通过替代20%-30%的IT旧有成本，来抵消当前昂贵的GPU预留支出？  
**连续性说明：** 当前工作区缺少 `session-brief.md`、`analyst-catalog.json` 和 `card-02/*`，本卡已根据提示词快照重建上游上下文。`card-01/*` 在磁盘上可读取。

## 核心结论

我对“2026年重签前用Agentic层替代20%-30%旧有IT成本”这一假设采取**压力测试并基本否定**。Agentic AI确实正在从演示进入工作流，但现金ROI转换速度不足以在广泛企业层面吸收当前GPU预留支出的跃升。更现实的2026年企业全口径旧有IT运行成本现金节省区间是**3%-7%**；只有数据、流程、治理和预算权限已经成熟的头部企业，才可能达到**8%-12%**。20%-30%这个数字只可能出现在L1服务台、重复性员工支持、部分软件工程任务等窄成本池内，不能作为全口径企业IT成本的可靠抵消项。

对上一张卡片的关键补充是时间错配。Card 02认为2026年capex账面上有合同覆盖，但如果利用率密度不能在重签前兑现，2H26仍有风险。本卡的判断是：Agentic层可以改善利用率，但可审计的P&L转换主要落在**2027-2028年**，不足以让2H26重签风险消失。

## 证据链

多头证据并不弱。Gartner预计，到2026年底，**40%的企业应用**将嵌入任务型AI agents，而2025年这一比例低于5%；到2028年，约三分之一用户体验会转向agentic前端 [2]。McKinsey 2025年调查显示，**23%**的受访企业已经在至少一个业务功能中扩展agentic AI系统，另有**39%**开始实验；IT和知识管理是最领先的应用函数 [4]。在具体工作流中，Microsoft Research发现使用GitHub Copilot的开发者在受控编程任务中完成速度快**55.8%** [8]；Microsoft报告Copilot使用6周、10周和超过10周后，自评生产率提升的用户比例逐步上升 [9]；ServiceNow内部Now Assist上线120天内形成**$10M**年化可量化收益，包括**50 FTE**年化生产率提升和员工自助分流率提升**14%** [7]。

但空头证据同样真实，而且对“2026年现金抵消”这个问题更关键。PwC 2026 Global CEO Survey显示，只有**12%**的CEO表示AI同时带来成本和收入收益，**56%**表示至今没有看到显著财务收益 [5]。IBM 2025年CEO研究显示，过去几年只有**25%**的AI项目达到预期ROI，只有**16%**实现企业级扩展，即使**65%**的CEO已经开始按ROI筛选AI用例 [6]。Gartner还警告，到2027年底，超过**40%**的agentic AI项目可能因成本上升、商业价值不清或风险控制不足而被取消 [3]。

宏观IT支出背景进一步抬高了门槛，而不是降低门槛。Gartner预计2026年全球IT支出达到**$6.15 trillion**，同比增长**10.8%**，其中数据中心系统支出增长**31.7%**至**$653.4 billion** [1]。这意味着企业一边要消化AI，一边还要承受基础设施线的快速上升。公有云GPU容量也具有块状特征：AWS的 `p5.48xlarge` 是8张H100、640 GiB GPU内存的节点 [10]，企业通常购买集群或预留容量，而不是按极小单位线性加减。因此，抵消GPU预留支出的必须是可复现的现金节省，而不仅是生产率叙事。

## ROI桥接测算

做一个简单压力测试：把旧有IT运行成本设为**$100**，观察Agentic AI在2026年重签前能实际拿掉多少。

| 桥接变量 | 保守情景 | 基准情景 | 头部企业情景 | 说明 |
|---|---:|---:|---:|---|
| 近期agents可触达的旧有IT成本 | 30% | 40% | 50% | 服务台、员工支持、QA、代码辅助、知识工作、常规应用运维 |
| 2026年前可自动化的可触达工作比例 | 15% | 20% | 30% | 仍需要集成、护栏、异常处理和人工复核 |
| 生产率向现金的转化率 | 45% | 50% | 75% | 需要供应商重谈、人员再配置、seat减少或应用退役 |
| 新增agent运营成本拖累 | -1.0% | -1.0% | -0.5% | 推理、编排、监控、评测、安全和支持成本 |
| 2026年全口径旧有IT成本净现金节省 | **约1%-2%** | **约3%-5%** | **约10%-11%** | 除窄成本池外，均低于20%-30%的要求 |

若要达到20%-30%抵消，需要更激进的假设：约**60%-70%**的全口径旧有IT支出必须能被agents触达，其中约**45%-55%**的工作要被自动化，并且**70%-80%**的生产率要在重签前转成现金节省。这与当前调查证据不一致：agent采用面在扩大，但企业级规模化ROI仍然稀缺 [4][5][6]。

## 哪些工作流最快转成现金ROI

最有把握的现金ROI来自高重复、系统边界清晰、单位经济可计量的流程。

| 工作流 | 2026年交付窗口 | 2026年可实现现金影响 | 研究含义 |
|---|---:|---:|---|
| IT服务台和员工支持 | 3-9个月 | L1/支持成本池的10%-25% | 最好的近期场景；ServiceNow 120天内部案例可信，但不能自动外推 [7]。 |
| 软件工程辅助 | 3-12个月 | 工程运行成本的5%-15%，监管严格系统更低 | 编码速度提升在任务层面成立 [8]，但现金化取决于 backlog 消化、承包商减少、QA效率和返工下降。 |
| 知识管理和内部研究 | 6-12个月 | 覆盖知识工作成本池的3%-8% | 对时间节省有用；若不伴随岗位重设计，难以记为现金。 |
| 财务、HR、采购、法务入口流程 | 9-18个月 | 目标流程成本的5%-12% | 需要ERP/CRM/CLM集成和政策控制。 |
| 旧应用现代化和应用精简 | 12-24个月 | 2026年前3%-10%；之后更大 | 潜在空间大，但交付风险高，退役旧系统慢于写新wrapper。 |
| 跨应用自主agents | 18-30个月 | 2H26前通常不显著 | 战略价值高，但治理和可靠性是瓶颈。 |

这解释了为什么Agentic AI可以具备战略意义，同时仍然无法通过2026年GPU抵消测试。容易做的流程相对总IT成本太小；真正大的成本池则依赖系统退役、流程重构和供应商重谈，通常超出一个预算周期。

## 什么条件下20%-30%抵消才可能成立？

需要三个条件同时发生：

1. **工作流重构，而不是工具采购。** 企业必须删除步骤、队列、审批和供应商工单，而不是在现有工作上叠加copilots。
2. **现金捕获权限。** 生产率必须转成更低的BPO支出、更少承包商、更低seat数量或应用退役。如果员工只是用同样系统和供应商做更多事，GPU账单仍然是增量成本。
3. **面向利用率的架构。** 企业需要在小模型、frontier models、检索、确定性自动化和人工升级之间路由。如果所有agent路径都跑在昂贵GPU容量上，ROI桥接会被摧毁。

目前很少有企业同时具备这三点。PwC和IBM的发现说明头部企业正在与中位数企业拉开差距，但中位数企业仍处于补基础阶段 [5][6]。

## 对共享主线的含义

**对hyperscaler capex：** Agentic层还不足以完全解除2H26 capex指引风险。它能支撑利用率增长，但大概率无法在重签前创造足够企业现金节省，让所有GPU预留容量都显得经济上无痛。若dedicated-capacity利用率不及预期，Card 02提出的15%-20% capex指引下修风险仍然存在。

**对企业软件：** 赢家是能把agents变成可计量工单分流、案例解决、编码吞吐或应用退役的嵌入式工作流平台。这更利好ServiceNow、Microsoft/GitHub、Salesforce、Atlassian和垂直工作流厂商，而不是通用API wrapper。利润池会从原始模型访问迁向编排、治理、系统集成和结果度量。

**对Nvidia和加速器需求：** 这不是近期需求坍塌。问题是ROI吸收和利用率密度，而不是没有工作负载。GPU需求仍受承诺容量、模型训练和推理增长支撑。风险在组合和期限：如果企业agents不能快速转成现金，客户会要求更短承诺期、更低预留价格、小模型路由和更多custom silicon替代。

**对投资者：** 2026年真正该看的不是“发布了多少agents”或“卖了多少agent seats”，而是：每客户付费生产agents数量、自主解决率、AI工作负载中低成本推理路由占比、应用退役数量、BPO/供应商合同减少金额，以及dedicated GPU capacity续约期限。

## 结论

Agentic层是正确机制，但日历不站在它这一边。它能让企业AI更有经济价值，到2027-2028年可能成为承诺AI容量被吸收的主因。但在2026年重签窗口前，中位数企业不太可能替代**20%-30%**旧有IT成本。我的基准判断是：2026年全口径企业净现金节省为**3%-7%**，头部企业可达**8%-12%**。这足以缓和GPU预留压力，但不足以完全中和。

## 交接

建议下一位分析师：**tmt-analyst [primary]**。下一步问题已经转为行业和公司层面：哪些企业软件与云厂商能够在2H26前，把agentic工作流采用转成付费生产使用、可计量成本节省和更稳固的续约支撑？

## 来源

[1] Gartner, "Gartner Forecasts Worldwide IT Spending to Grow 10.8% in 2026, Totaling $6.15 Trillion," February 3, 2026. https://www.gartner.com/en/newsroom/press-releases/2026-02-03-gartner-forecasts-worldwide-it-spending-to-grow-10-point-8-percent-in-2026-totaling-6-point-15-trillion-dollars  
[2] Gartner, "Gartner Predicts 40% of Enterprise Apps Will Feature Task-Specific AI Agents by 2026," August 26, 2025. https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025  
[3] Gartner, "Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027," June 25, 2025. https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027  
[4] McKinsey, "The State of AI: Global Survey 2025." https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai  
[5] PwC, "CEO confidence in revenue outlook hits five-year low - as AI becomes a defining divide between leaders and laggards: PwC 2026 Global CEO Survey," January 19, 2026. https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-global-ceo-survey.html  
[6] IBM, "IBM Study: CEOs Double Down on AI While Navigating Enterprise Hurdles," May 6, 2025. https://newsroom.ibm.com/2025-05-06-ibm-study-ceos-double-down-on-ai-while-navigating-enterprise-hurdles  
[7] ServiceNow, "Now on Now - Now Assist." https://www.servicenow.com/es/customers/now-on-now-now-assist.html  
[8] Microsoft Research, "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot," February 2023. https://www.microsoft.com/en-us/research/publication/the-impact-of-ai-on-developer-productivity-evidence-from-github-copilot/  
[9] Microsoft, "AI Data Drop: The 11-by-11 Tipping Point," March 20, 2024. https://www.microsoft.com/en-us/microsoft-365/blog/2024/03/20/ai-data-drop-the-11-by-11-tipping-point/  
[10] Amazon Web Services, "Specifications for Amazon EC2 accelerated computing instances." https://docs.aws.amazon.com/ec2/latest/instancetypes/ac.html

## Follow-up

- Analyst: tmt-analyst
- Topic: 企业软件与云厂商的agentic生产化变现能力和2H26续约支撑
- Question: 哪些企业软件与云厂商能够在2H26前把agentic工作流采用转成付费生产使用、可计量成本节省和更稳固的dedicated GPU capacity续约？
