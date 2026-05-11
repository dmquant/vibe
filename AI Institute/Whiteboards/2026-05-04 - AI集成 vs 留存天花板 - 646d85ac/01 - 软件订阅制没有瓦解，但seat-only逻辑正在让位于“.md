---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "ESG与主题"
---

# 软件订阅制没有瓦解，但seat-only逻辑正在让位于“平台subscription + 智能usage + outcome proof”的混合模型。

Analyst: **Thematic Researcher**
Status: **completed**
Stance: **initial**
Completed: **04/05/2026, 19:26:08**

## Links

- Whiteboard topic: [[AI集成 vs 留存天花板]]
- Card topic: [[软件订阅制没有瓦解，但seat-only逻辑正在让位于“平台subscription 智能usage outcome proof”的混合模型。]]
- Analyst: [[Thematic Researcher]]
- Analyst level: [[ESG与主题]]

## Topic

软件订阅制没有瓦解，但seat-only逻辑正在让位于“平台subscription + 智能usage + outcome proof”的混合模型。

## Question

Investigate the topic "软件订阅制没有瓦解，但seat-only逻辑正在让位于“平台subscription + 智能usage + outcome proof”的混合模型。" and make the strongest evidence-based judgment you can.

## Summary

本卡结论是：AI成为标配不会让软件订阅制瓦解，但会削弱单纯按seat收取AI溢价的逻辑。Microsoft、Salesforce、GitHub、OpenAI和Adobe的定价都指向混合化：基础订阅负责访问、治理、工作流和采购，AI基线能力进入套餐，高成本或高价值agentic work通过credits、requests、conversations、usage或outcome pricing变现。留存天花板从“功能更多”转向“工作流上下文、分发、治理和可证明结果”。下一步应筛选上市软件公司中谁能把AI usage转化为NRR或attach-rate提升，而谁只是在吸收AI成本。

## Report

# AI集成 vs 留存天花板

## 核心判断

软件订阅制逻辑没有瓦解，但旧版本的订阅制已经被削弱。当AI从可单独感知的升级项变成默认功能，厂商就很难再对所有客户收取统一的AI附加费。更可持续的模式正在转向分层结构：基础订阅负责工作流、身份、治理、数据上下文和采购便利；内置AI负责留存和竞争标配；高成本或高价值的agentic work则通过用量、credit或结果导向定价来变现。

换句话说，AI没有终结订阅制，但让“seat”不再是完整的价值单位。

## 当前定价行为给出的证据

最强的证据是，头部厂商并没有放弃订阅制，而是在拆分订阅制。

| 厂商 / 产品 | 当前模式显示什么 | 含义 |
|---|---:|---|
| Microsoft 365 Copilot | Microsoft 365 Copilot Chat对符合条件的Microsoft 365租户免费包含；付费Copilot Business按用户定价，agents可通过Azure或Copilot Studio容量计量。来源：[Microsoft Copilot pricing](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing)、[Microsoft Learn licensing](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-licensing)。 | 基线AI正在进入套件；更重的应用内和agent使用仍可变现。 |
| Salesforce Agentforce | Salesforce列示Flex Credits为$500/100k credits，Agentforce User License为$5/user/month，Conversations为$2/conversation，Flat Fee Access为$125/user/month。来源：[Salesforce Agentforce pricing](https://www.salesforce.com/agentforce/pricing/)。 | Salesforce明确混合了seat、conversation、credit和flat-fee access。 |
| GitHub Copilot | GitHub Copilot Free每月包含2,000 completions和50次chat/agent requests；Pro为$10/user/month，含300次premium requests；Pro+为$39/user/month，含1,500次premium requests，额外premium requests定价为$0.04/request。来源：[GitHub Copilot plans](https://github.com/features/copilot/plans)。 | 开发者AI仍以订阅销售，但稀缺模型访问通过request额度来约束。 |
| OpenAI ChatGPT Business | 标准ChatGPT seats是固定per-user per-month，USD通常为月付$25或年付$20；Codex-only seats是usage-based且没有固定月度seat fee。API usage单独计费。来源：[OpenAI Help Center](https://help-lb.openai.com/en/articles/8792828-what-is-chatgpt-business)。 | 即使AI-native厂商，也把workspace subscription和usage-based compute分开。 |
| Adobe Creative Cloud / Firefly | Adobe称Creative Cloud和Firefly subscriptions包含按月、按plan设置的generative credits，免费plan包含有限generative credits；公司也使用term subscription和pay-per-use模式。来源：[Adobe FY2025 annual report](https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/adbe-2025-annual-report.pdf)。 | 创意软件正在把AI纳入plan，同时用credits保护可变成本和升级路径。 |

这个模式不支持简单的“订阅制已死”结论。它更像是“subscription成为访问层，usage成为成本和价值层”。

## 留存仍然真实，但天花板变了

经典SaaS依赖高gross retention，再通过seat、module和涨价带来net revenue retention。这个引擎仍然存在。Snowflake披露FY2026 Q4 product revenue为$1.23 billion，同比增长30%，net revenue retention rate为125%；FY2026全年product revenue为$4.47 billion，同比增长29%。来源：[Snowflake FY2026 Q4 release](https://www.sec.gov/Archives/edgar/data/1640147/000162828026011631/fy2026q4earnings.htm)。Atlassian披露FY2025 revenue为$5.2 billion，cloud revenue为$3.4 billion，AI monthly active users为2.3 million，cloud net revenue retention为120%。来源：[Atlassian FY2025 annual report](https://www.sec.gov/Archives/edgar/data/1650372/000165037225000060/team2025annualreport.pdf)。

真正的变化不是客户不再续订软件，而是AI削弱了“更多功能”作为主要扩张故事的防御力。如果每个CRM、IDE、设计套件、observability tool和office suite都有总结、草拟、搜索和chat，这些功能就会变成标配。新的留存天花板取决于四类更难复制的优势：

1. 专有工作流上下文：权限、文档、tickets、code、telemetry、customer records和audit trails。
2. 分发控制：产品是否处在工作实际发生的系统内。
3. 治理与信任：企业数据保护、角色控制、合规、admin reporting和model choice。
4. 结果捕获：能否证明AI完成了工作、减少人工、缩短incident time或提升conversion。

这也是Salesforce FY2026 Q4表述重要的原因。Salesforce披露FY2026 revenue为$41.5 billion，total RPO为$72.4 billion，Agentforce ARR为$800 million，Agentforce and Data 360 ARR超过$2.9 billion，Agentforce deals为29,000，且超过60%的Agentforce and Data 360 Q4 bookings来自existing customer expansion。来源：[Salesforce FY2026 Q4 release](https://s205.q4cdn.com/626266368/files/doc_financials/2026/q4/CRM-Q4-FY26-Earnings-Press-Release.pdf)。重点不是每个AI SKU都会成功，而是龙头正在尝试把AI变成已签约system of record内部的扩张工具。

## 利润率问题迫使定价变化

传统SaaS可以按seat定价，是因为增量软件使用的边际成本很低。AI改变了这一点。在Microsoft FY2026 Q3，Microsoft Cloud gross margin降至66%，管理层把下降归因于AI infrastructure investment和growing AI product usage。Microsoft还披露Productivity and Business Processes cost of revenue增加$680 million，部分用于支持Microsoft 365 Copilot seat and usage growth；Intelligent Cloud cost of revenue增加$4.8 billion，部分来自AI infrastructure和GitHub Copilot usage。来源：[Microsoft FY2026 Q3 performance](https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q3/performance)、[Productivity and Business Processes](https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q3/productivity-and-business-processes-performance)、[Intelligent Cloud](https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q3/intelligent-cloud-performance)。

私募市场证据也指向同一方向。Bessemer的State of AI 2025称，其调研中的AI “Supernova” startups在商业化第一年约达到$40 million ARR，第二年约达到$125 million ARR，但平均gross margins只有约25%；更接近SaaS的“Shooting Stars”平均gross margins约60%。来源：[Bessemer State of AI 2025](https://www.bvp.com/atlas/the-state-of-ai-2025)。High Alpha和OpenView发现，39%的受访者报告实施AI strategy带来成本上升；同时68%的AI products仍包含subscription component，许多公司在测试hybrid、usage-based或output-driven models。来源：[2024 SaaS Benchmarks](https://www.highalpha.com/saas-benchmarks/2024)。

这就是订阅制必须演化的经济原因。如果厂商把无限inference打包进固定seat price，重度用户会消耗利润池。如果厂商对一切计量收费，客户又会面临预算焦虑和采用摩擦。折中方案就是可预测的基础订阅，加上有边界的usage entitlements和付费超额用量。

## 投资含义

对软件股而言，关键问题不再是“产品有没有AI”。这个筛选条件正在变得低信号。更好的筛选标准是：AI是否能提升gross retention、net revenue retention或attach rate，同时不结构性稀释gross margin。

正面案例应体现三个特征：

1. AI嵌入既有工作流数据，而不是可拆卸的chatbot。
2. 定价架构能把成本映射到价值：credits、requests、conversations、compute或agentic work units。
3. 现有客户群出现扩张证据，而不只是trial usage。

负面案例会呈现不同特征：

1. AI功能被快速复制，变成采购清单上的勾选项。
2. 厂商广泛内置AI但缺乏usage controls，压缩gross margin。
3. 客户因为AI自动化了原本由多人完成的工作而整合seats。
4. 独立AI工具在新鲜感使用后流失，因为没有嵌入source-of-truth workflows。

## 对任务问题的回答

订阅制逻辑并未瓦解，而是在重新定价。AI成为标配会削弱增量add-on叙事，并提高留存门槛。但订阅仍然解决访问、信任、身份、协作、合规和采购问题。更可能胜出的软件模型是：“平台用subscription，智能用usage，溢价用outcome proof。”只依赖seat growth的厂商会遇到留存天花板；能把AI usage转化为可衡量workflow outcomes的厂商，则可以延长订阅制时代，而不是退出订阅制时代。

## 交接

推荐下一位分析师：`tmt-analyst` [primary]。

后续主题：上市软件公司的AI monetization quality screen。

后续问题：哪些软件公司正在把AI integration转化为可持续的net revenue retention或attach-rate gains，哪些只是把AI cost吸收为标配功能膨胀？

## Follow-up

- Analyst: tmt-analyst
- Topic: 上市软件公司的AI monetization quality screen
- Question: 哪些软件公司正在把AI integration转化为可持续的net revenue retention或attach-rate gains，哪些只是把AI cost吸收为标配功能膨胀？
