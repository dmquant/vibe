---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "行业研究"
---

# AI capex 的约束变量已从芯片供给换挡到并网电力，定价权正在从 GPU 链向电力资产迁移。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **initial**
Completed: **23/04/2026, 08:04:49**

## Links

- Whiteboard topic: [[AI capex 瓶颈换挡：从 GPU 短缺到并网电力短缺]]
- Card topic: [[AI capex 瓶颈换挡：从 GPU 短缺到并网电力短缺]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

AI capex 瓶颈换挡：从 GPU 短缺到并网电力短缺

## Question

2026 年 AI 资本开支周期的核心约束是否已从芯片供给切换为并网电力，这一换挡对超大规模厂商收入实现节奏和受益者名单的跨资产含义是什么？

## Summary

美国五大超大规模厂商 2026 年 capex 指引 660–690B USD，几乎占满经营现金流。但瓶颈已不是 GPU：Microsoft 承认 Azure 80B 在手订单因缺电延迟交付，Uptime Institute 将电力列为全球数据中心增长首要约束，30% 新增容量将走 off-grid 自备电源路线，到 2030 年可能超 33%。叙事从'GPU 买得到就赢'切换到'插得上电才算算力'，每美元 capex 的并网 MW 成为新效率指标。最先被重新定价的将是 IPP、燃气轮机、SMR、输变电与液冷供应链，而不是 GPU 链本身。

## Report

# Card 01 — AI Capex 的瓶颈换挡：从 GPU 短缺到电力短缺

- Analyst: tmt-analyst (TMT 行业分析师)
- Task: ai_industry_tracker
- Date: 2026-04-23
- Stance: initial

## Thesis
AI 资本开支周期的约束变量正在从"芯片供给"换挡到"并网电力"，这意味着 2026 年超大规模云厂商的收入实现节奏、CapEx 转化率、以及受益者名单都将发生结构性切换——最先被重新定价的不是 GPU 供应链，而是电力资产。

## 1. 关键事实点（2026-04 时点）

- **CapEx 体量**：美国五大超大规模厂商 2026 年合计资本开支指引 **660–690B USD**，几乎等于其经营现金流的 100%（十年均值约 40%）。这是一个"在现金流上全押"的姿态。
- **电力成为硬约束**：Uptime Institute 在《Five Predictions for 2026》中将电力列为全球数据中心增长的"**首要单一约束变量**"，AI 负荷到 2026 年底将达 **10 GW**。
- **明示信号**：Microsoft 承认 Azure **$80B 在手订单**的瓶颈是并网电力，而非需求疲软；Satya Nadella 公开说 "GPU 有库存，但没电可插"。这是把瓶颈说破的一次关键陈述。
- **项目被阻力挡住**：Data Center Watch（2025 年 6 月）显示 **36 个项目、$162B 投资**被否决或显著推迟，主要原因是地方电网容量与社区反对。
- **自建电源崛起**：Cleanview（2026 年 2 月）预计 2026 年新增数据中心容量中 **30% 将依赖场内自备电源**（on-site generation），一年前这一比例接近 0%。到 2030 年这一比例可能超过 **33%**。
- **需求曲线**：高盛测算到 2030 年数据中心电力需求增长 **165%**。对美国电力行业来说，这是二战后首次真正意义上的负荷增长拐点。

## 2. 为什么这是"换挡"而不仅仅是"约束"

2023–2024 年的 AI capex 叙事是"**GPU 买得到就是赢**"——Nvidia/CoWoS/HBM 是定价核心。到了 2026 年，叙事变成"**插得上电才算算力**"：

1. **GPU 利用率不再是 capex 效率的前置变量**，**每美元 capex 的并网 MW** 才是。
2. **折旧周期与收入实现错配**：GPU 服役寿命 4–6 年，电力合同与自建电站的投产周期 24–48 个月——收入与电费 PPA 的匹配成为新的财务工程课题。
3. **地理/监管变量权重提升**：PJM、ERCOT 的队列排队时间、本地反对意见、税收返还条款，取代了台积电产能配额成为主要"选址决定论"。

## 3. 投资含义（五个方向）

| 方向 | 逻辑 | 代表标的池 |
|---|---|---|
| 独立发电商/商品电力 IPP | 数据中心 off-grid 化，merchant generator 与 PPA 供给方重新定价 | Vistra、Constellation、Talen、NRG |
| 燃气轮机与动力设备 | 新增调峰与基荷首选仍是天然气联合循环；燃气轮机交付排到 2028+ | GE Vernova、Siemens Energy、三菱重工 |
| SMR/核电重启 | 超大规模厂商签的 SMR 与重启反应堆 PPA 已多起，但兑现风险高 | NuScale、Oklo、Constellation（TMI 重启） |
| 输变电与电网硬件 | 变压器、GIS、HVDC 交付周期已拉到 2027+ | Hitachi Energy、Eaton、Quanta Services |
| 冷却与液冷 | 每机柜 100kW+ 时代，液冷从可选项变必选项 | Vertiv、Nvidia CoolIT 生态 |

## 4. 风险与反证

- **需求端反噬**：若推理侧模型效率（MoE、蒸馏、专用芯片）提升快过电力供给速度，电力瓶颈可能在 2027–2028 局部缓解，从而让今天的"电力溢价"回吐。
- **资本开支透支**：660–690B 几乎用尽经营现金流，一旦 AI 单位经济账（unit economics）证伪（例如企业级 AI 渗透率不达预期），capex 指引可能在下半年出现拐点。
- **政策反转**：联邦与地方对数据中心的税收优惠可能在 2026 中期选举周期被重新审视。
- **中国镜像问题**：东数西算与国产算力集群走了另一条路径（电价管制 + 绿电指标），美股叙事不能直接平移到 A 股/港股。

## 5. 一句话结论

**2026 年 AI 主题的 alpha 不在更大的 GPU 集群，而在"谁有电、谁能先把电卖给谁"。**下一阶段最值得盯住的不是云厂商 earnings 的 AI 收入线，而是**超大规模厂商自建电站与 IPP 合同的节奏**，以及**电网/燃气轮机/变压器供应链的交付曲线**。

## 6. 开放问题（用于传递给下一位分析师）

- 谁是 off-grid 化趋势下最被低估的 beneficiary？是 IPP，还是被锁死 PPA 的监管型公用事业？
- SMR 与核电重启的 PPA 承诺到 2028 年的实际兑现比例有多少？
- 如果公用事业因 AI 负荷获得费率基础扩张（rate base expansion），美国公用事业板块的估值重估能到什么程度？
- 国内"东数西算"模式在电力瓶颈问题上，对 A 股电力、算力板块意味着什么？

## Sources

- [Hyperscalers in 2026: What's Next — Data Center Knowledge](https://www.datacenterknowledge.com/hyperscalers/hyperscalers-in-2026-what-s-next-for-the-world-s-largest-data-center-operators-)
- [Hyperscaler CapEx Hits $690B in 2026 — Introl](https://introl.com/blog/hyperscaler-capex-690-billion-microsoft-azure-power-bottleneck-2026)
- [AI to drive 165% increase in data center power demand by 2030 — Goldman Sachs](https://www.goldmansachs.com/insights/articles/ai-to-drive-165-increase-in-data-center-power-demand-by-2030)
- [AI Grid Constraints Will Push Over 33% of Data Centers Off-Grid by 2030 — Futurum](https://futurumgroup.com/press-release/ai-grid-constraints-will-push-over-33-of-data-centers-off-grid-by-2030/)
- [US Utilities Plan $1.4T for AI Data Centers: 27% Capex Surge — Tech Insider](https://tech-insider.org/us-utility-1-4-trillion-ai-data-center-energy-2026/)
- [AI Data Center Grid Strain: Power Halts Growth in 2026 — EnkiAI](https://enkiai.com/data-center/ai-data-center-grid-strain-power-halts-growth-in-2026/)

## Follow-up

- Analyst: utilities-analyst
- Topic: 数据中心 off-grid 化与费率基础扩张下，美国公用事业和 IPP 的重估空间
- Question: 在超大规模厂商 30% 新增容量走自备电源、IPP 签长期 PPA、监管型公用事业争取 rate base 扩张的三重路径下，谁是真正被低估的受益者？请区分商品电力 IPP、垂直一体化公用事业、以及 SMR/核电重启承诺的兑现风险，给出未来 12–18 个月的相对排序。
