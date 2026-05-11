---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "权益策略"
---

# AI capex 上修后的正确动作不是撤离 AI 硬件，而是把 AI 基础设施从“芯片→电力”的线性交易重写为 30/20/25/25 的芯片、自研芯片、电力、功率电子四桶结构。

Analyst: **Chief Strategist**
Status: **completed**
Stance: **initial**
Completed: **09/05/2026, 04:06:14**

## Links

- Whiteboard topic: [[AI CapEx 上修后的轮动二阶效应：从 芯片→电力 切到 芯片 自研芯片 电力 功率电子]]
- Card topic: [[AI capex 上修后的正确动作不是撤离 AI 硬件，而是把 AI 基础设施从“芯片→电力”的线性交易重写为 30 20 25 25 的芯片、自研芯片、电力、功率电子四桶结构。]]
- Analyst: [[Chief Strategist]]
- Analyst level: [[权益策略]]

## Topic

AI capex 上修后的正确动作不是撤离 AI 硬件，而是把 AI 基础设施从“芯片→电力”的线性交易重写为 30/20/25/25 的芯片、自研芯片、电力、功率电子四桶结构。

## Question

Investigate the topic "AI capex 上修后的正确动作不是撤离 AI 硬件，而是把 AI 基础设施从“芯片→电力”的线性交易重写为 30/20/25/25 的芯片、自研芯片、电力、功率电子四桶结构。" and make the strongest evidence-based judgment you can.

## Summary

截至2026-05-09，本卡综合 global-macro、materials-analyst、tmt-analyst 的同日结论：MSFT/GOOGL/META 继续上修 2026 AI capex，真实瓶颈从单一 GPU 扩展到 Cu/SiC/IGBT、功率电子、电力设备和并网能力；H100 折旧与 B200 切换风险要求在 AI 硬件内部重新分层。建议将 AI 基础设施权重改为先进算力芯片 30%、自研与国产硅基栈 20%、电力与数据中心电气基础设施 25%、功率电子与瓶颈材料 25%。

## Report

# AI CapEx 上修后的基础设施权重重写

工作日期：2026-05-09，Asia/Singapore。本文综合今日 global-macro、materials-analyst、tmt-analyst 的三个独立输入：MSFT/GOOGL/META 的 2026 capex 仍在上修；Cu/SiC/IGBT 与电力设备才是真正物理瓶颈；H100 折旧加速但 B200 切换存在硬着陆风险。配置结论不是离开 AI 硬件，而是把 AI 基础设施从简单的“芯片再到电力”重写为四个子桶：芯片 + 自研芯片 + 电力 + 功率电子。

## 立场

我支持并综合此前逻辑。capex 证据说明 AI 建设仍在进行；供应链证据说明稀缺性收益正在从加速器本身扩散到供配电、功率半导体、铜与电网设备；TMT 证据说明应削减错误的旧周期算力敞口，而不是削减全部 AI 硬件敞口。

## 证据锚点

| 信号 | 截至 2026-05-09 的解读 | 配置含义 |
|---|---:|---|
| MSFT | Microsoft 在 2026-04-29 表示 FY26 Q3 capex 为 USD 31.9bn，其中约三分之二为 GPU、CPU 等短周期资产；公司预计 calendar-2026 capex 约 USD 190bn，其中约 USD 25bn 来自更高组件价格，并预计 2026 年仍受产能约束。 | 需求没有熄火，但定价权不只在服务器组装，而在组件与稀缺产能。 |
| GOOGL | Alphabet 在 2026-04-29 披露 Q1 capex 为 USD 35.674bn；电话会将 2026 capex 指引从 USD 175-185bn 上调至 USD 180-190bn，并称 2027 capex 将较 2026 年显著增加。 | 自研芯片、云 backlog、能源、折旧与技术基础设施仍是可投资的 capex 通道。 |
| META | Meta 在 2026-04-29 披露 Q1 capex 为 USD 19.84bn，并将 2026 capex 指引从 USD 115-135bn 上调至 USD 125-145bn，理由包括更高组件价格与增量数据中心成本。 | 边际惊喜来自组件价格与物理建设成本，A 股敞口应向上游瓶颈倾斜。 |
| 能源与电网 | IEA 2026 年 Energy-and-AI 更新显示，2025 年数据中心用电需求增长 17%，AI-focused 数据中心用电需求增长 50%，总数据中心用电量预计从 2025 年 485 TWh 大致翻倍至 2030 年 950 TWh。 | 电力不再是二阶映射，而是决定产能释放的约束变量。 |
| 功率电子 | IEA 强调 AI 机柜功率密度、高压直流配电、功率电子、变压器与储能正在接受下一轮 AI 数据中心的压力测试。Wolfspeed 2026 年 3 月 SiC 电力白皮书把 SiC-based solid-state transformers 描述为 AI 数据中心 800 V DC 路径。 | SiC/IGBT/模块/铜与中压电能转换应成为独立子仓，而不是公用事业里的附注。 |

## AI 基础设施新权重

| 子板块 | 新权重 | 旧心智模型 | 调整内容 |
|---|---:|---:|---|
| 先进算力芯片与核心组件 | 30% | 45-55% | 保留敞口，但收窄到下一代算力、HBM、先进封装、载板、高速互联与验证过的供应商。削减 H100 残值风险和低毛利服务器组装敞口。 |
| 自研与国产硅基栈 | 20% | 5-10% | 从期权仓升为核心仓。Alphabet TPU 商业化与 hyperscaler 垂直栈说明自研芯片是战略趋势；A 股侧重点是国产加速器生态、EDA/IP、封测与具备真实出货证据的板级集成。 |
| 电力与数据中心电气基础设施 | 25% | 20-30% | 保持高配。逻辑已从“AI 需要电”升级为“并网、变压器、开关设备、UPS、电缆与数据中心电气 EPC 决定收入兑现时间”。 |
| 功率电子与瓶颈材料 | 25% | 5-10% | 大幅上调。Cu、SiC、IGBT、功率模块、中压转换、DC distribution 与储能接口最贴近 materials-analyst 指出的物理瓶颈。 |

新的 30/20/25/25 结构不是防御性撤退。它仍把 50% 权重放在芯片与自研芯片，同时把另外 50% 放到决定 capex 能否变成可用算力的设备与材料上。

## A 股执行规则

第一，下调依赖旧一代 GPU 折旧、库存周转或服务器低毛利 pass-through 的“AI 硬件 beta”。tmt-analyst 关于 H100 折旧与 B200 硬着陆的输入意味着：即便 AI capex 上修，错误的算力敞口也可能亏钱。

第二，上调盈利桥接来自多季度订单能见度、组件涨价、国产替代或并网周期的公司。capex 上修只有在转化为收入、利润率或 backlog 时才有用，否则只是叙事估值。

第三，把公用事业与电力设备拆开。受监管发电资产可以受益于负荷增长，但未必获取稀缺性收益。变压器、开关设备、UPS、功率模块、高压电缆、工业铜、SiC/IGBT 器件与数据中心电气工程商更接近瓶颈。

第四，把国产 AI 芯片作为杠铃而不是无差别高配。可投部分必须控制三类稀缺环节之一：面向模型的 ASIC/NPU 设计、可制造的封测能力，或能把芯片转化为利用率的软件/工具链。没有出货或代工可得性的纯概念公司不应获得同等权重。

## 何时改变判断

如果两家以上 hyperscaler 将 2026 capex 指引下调超过 10%，或组件价格评论连续两个季度从短缺转为过剩，或 B200/下一代 GPU 消化从时间差变成订单取消，则应下调 30/20/25/25 配置。反过来，如果并网周期或变压器/开关设备 backlog 继续拉长且 AI capex 指引仍未下调，应把功率电子权重提高到 25% 以上。

## 交接

建议下一位分析师：`ashare-strategist` [primary]。下一个未解问题不是 AI capex 是否真实，而是 A 股市场能否承接 30/20/25/25 的新子仓结构，且不触发拥挤度、流动性、两融余额或 ETF 资金流压力。这是市场结构问题，应交给 ashare-strategist，而不是行业专家或 reviewer。

## 资料来源

1. Microsoft, "Earnings Release FY26 Q3," 2026-04-29 发布: https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast
2. Microsoft, "Fiscal Year 2026 Third Quarter Earnings Conference Call," capex 与产能约束指引: https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3
3. Alphabet, "Q1 2026 Earnings Release," capex 与现金流表: https://s206.q4cdn.com/479360582/files/doc_financials/2026/q1/2026q1-alphabet-earnings-release.pdf
4. Alphabet, "Q1 2026 Earnings Call Transcript," 2026/2027 capex 指引与 AI compute demand: https://s206.q4cdn.com/479360582/files/doc_events/2026/Apr/29/2026_Q1_Earnings_Transcript.pdf
5. Meta, "Meta Reports First Quarter 2026 Results," 2026-04-29 发布: https://s21.q4cdn.com/399680738/files/doc_news/Meta-Reports-First-Quarter-2026-Results-2026.pdf
6. Meta, "Q1 2026 Earnings Call Transcript," capex、数据中心成本与组件价格评论: https://s21.q4cdn.com/399680738/files/doc_financials/2026/q1/META-Q1-2026-Earnings-Call-Transcript.pdf
7. IEA, "Electricity 2026," executive summary: https://www.iea.org/reports/electricity-2026/executive-summary
8. IEA, "Key Questions on Energy and AI," executive summary, 2026: https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary
9. Wolfspeed, "Powering AI with SiC-based solid-state transformers," 2026 年 3 月: https://assets.wolfspeed.com/uploads/2026/03/Wolfspeed_Powering_AI_with_reliable_SiC-based_solid-state_transformers_white_paper.pdf

页脚：card-01，chief-strategist，工作日期 2026-05-09。

## Follow-up

- Analyst: utilities-analyst
- Topic: AI 基础设施中的电力需求与电网并网瓶颈
- Question: 深入研究数据中心电力需求增长对电网容量、变压器及配电设备的压力，以验证“电力与数据中心电气基础设施”在 AI 产业链中的核心地位。
