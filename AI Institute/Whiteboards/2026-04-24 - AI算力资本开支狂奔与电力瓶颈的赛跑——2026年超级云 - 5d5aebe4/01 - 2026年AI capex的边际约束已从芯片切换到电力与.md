---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "行业研究"
---

# 2026年AI capex的边际约束已从芯片切换到电力与电气设备，超云capex名义值能兑现但有效算力上网率只有70-80%，产业链alpha从GPU硬件向供电与变配电环节迁移。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **initial**
Completed: **24/04/2026, 07:05:33**

## Links

- Whiteboard topic: [[AI算力资本开支狂奔与电力瓶颈的赛跑——2026年超级云厂商capex兑现率再审视]]
- Card topic: [[AI算力资本开支狂奔与电力瓶颈的赛跑——2026年超级云厂商capex兑现率再审视]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

AI算力资本开支狂奔与电力瓶颈的赛跑——2026年超级云厂商capex兑现率再审视

## Question

在Q1 2026 Magnificent Seven AI capex同比+45%、微软披露800亿美元Azure订单因电力缺口无法交付的背景下，AI基础设施capex的实际兑现节奏是否会在2026下半年被电力供给与电气设备交付瓶颈显著压制？

## Summary

Q1 2026超级云厂商AI capex同比+45%，六大云厂商2026年guidance合计600-690bn。但微软FY26Q1财报首次由CEO披露800亿美元Azure订单因电力缺口无法交付、GPU'到货即摆仓'，成为本轮周期的范式信号。芯片端英伟达GB300批量出货、机柜出货+129%，供给能力已经追上订单节奏。真正的硬约束在电力与电气设备侧：PJM预计2027年缺口6GW，美国2026年12GW计划数据中心中约7GW被取消或推迟，变压器/开关柜交付周期从40周拉长到80-130周。我们预期2026名义capex近似兑现，但有效算力落地率仅70-80%，算力链beta减速，电气设备/SMR核电/燃气轮机/液冷链条获二次定价。

## Report

# AI 算力资本开支狂奔与电力瓶颈的赛跑——2026 年超级云厂商 capex 兑现率再审视

- 分析师：TMT 行业分析师 (tmt-analyst)
- 任务模板：ai_industry_tracker
- 日期：2026-04-24
- 立场：initial（首轮卡片）

## 一句话核心判断
2026 年超级云厂商的 AI capex 名义口径仍在加速，但真正的边际约束已从"芯片到货"切换为"电力并网 + 电气设备交付"；下半年 capex 实际兑现率大概率低于 guidance，**算力链 beta 将被动减速，而供电与变配电环节的 alpha 将显著跑赢**。

## 1. 我们为什么关注这个问题
- 美股科技板块 2026 年的估值定价高度依赖"AI capex 兑现 → 云业务加速 → 变现曲线兑现"的三段论。
- Q1 FY2026 微软财报首次在电话会上把"power"而非"GPU"列为首要瓶颈（Nadella 原话："I can't plug in... chips sitting in inventory that I can't plug in"），这是一个**范式信号**：供给端的卡点从硅片下沉到了电。
- 如果 2026 下半年出现"capex 结转但营收不结转"的剪刀差，算力链 beta 会被重估，但电力/电气设备/核电/燃气轮机/变压器链条会获得二次定价。

## 2. 核心数据拼图

### 2.1 超级云厂商 2026 capex guidance（来源：公司指引 + 卖方）
| 厂商       | 2025 capex | 2026 capex guidance | YoY       |
| ---------- | ---------- | ------------------- | --------- |
| Amazon     | 131.8 bn   | ~200 bn             | +52%      |
| Alphabet   | ~95 bn     | 175–185 bn          | +85-95%   |
| Meta       | ~72 bn     | ~135 bn             | +88%      |
| Microsoft  | ~90 bn     | 110–120 bn          | +22-33%   |
| Oracle     | 披露不充分 | 显著抬升            | —         |
| **合计**   | **~440 bn**| **600–690 bn**      | **+36%+** |

> Q1 2026 "Magnificent Seven" AI 相关 capex 合计约 78 bn，同比 +45%，环比仍在加速。

### 2.2 微软 Q1 FY2026 关键拆解
- 总收入 77.7 bn，Azure & other cloud +40%；
- 单季 capex 34.9 bn，其中约一半投向 GPU/CPU；
- RPO（剩余履约义务） 625 bn，环比翻倍，主要由 OpenAI 锁单驱动；
- **80 bn 的 Azure 订单因电力缺口无法交付**——这是本轮周期第一次由 CEO 正式披露"GPU 在库但上不了电"。

### 2.3 英伟达供给侧：从短缺转向阶段性过剩风险
- B200/GB200 出货至 2026 年中的订单簿约 3.6M 枚；
- GB300 Blackwell Ultra 1 月开始批量出货，2026 年机柜出货预期 ~60k rack，同比 +129%；
- 单价：B200 list $35k–$40k，大 T 量价折扣加深；
- **结论**：芯片供给已经能够追上 hyperscaler 的订单节奏，约束端上移到下游（电力、变压器、开关柜、液冷）。

### 2.4 美国电网硬约束
- 美国数据中心耗电量：2023 年 176 TWh → 2028 年 325–580 TWh，占比从 4.4% → 6.7–12.0%；
- PJM 预计 2027 年可靠性容量缺口 ~6 GW；
- Gartner：2027 年前约 40% 新建 AI 数据中心将受电力制约；
- 互联队列（interconnection queue）累计 > 2,100 GW，已远超全美并网容量；
- 2026 年美国计划投产的 12 GW 数据中心中，**约 7 GW 已被取消或推迟**，仅 5 GW 在建；
- 关键电气设备（变压器、中压开关柜、大型 UPS 电池）交付周期从 40 周拉长至 80–130 周。

## 3. 交叉验证：capex 名义值 vs 实际兑现率

把"capex guidance → 算力上线 → 云收入"链条分成三段看：

1. **资金端**：充沛。超级云自由现金流 + 债务市场（私人信贷专项 AI 数据中心 ABS 等）已经能 underwrite 600–700bn 级别支出。
2. **芯片端**：从 2024 年的紧缺转为 2026 年的"到货即等电"。GPU 机柜滞留在仓库与物流中心的现象首次被 CEO 级别公开承认。
3. **电力 & 电气设备端**：**实质性瓶颈**。美国大电网新增可并网容量（发电 + 输配电）在 2026–2028 增量约 90–110 GW，而 AI 数据中心新增需求预计要 60–80 GW，叠加工业回流（reshoring）、EV 等基础负荷，净余量接近零。

因此我们预期：
- 2026 年超云 capex **名义值**大概率接近 guidance；
- 但**落地为在网运行的有效算力**只能兑现 guidance 的 70–80%；
- 差额表现为"GPU 在库 + 数据中心机电设备延期交付 + PPA/电力基础设施前置预付款"。

## 4. 对二级市场的映射

### 4.1 算力链（beta 减速）
- NVDA/AMD/AVGO/MRVL：2026H2 出货节奏可能出现短期消化，**不是需求端崩塌，而是供电端接不住**。节奏上为震荡消化。
- Hyperscaler 本身：Azure/OCI/GCP 营收加速度会被电力瓶颈削峰，股价对"revenue acceleration"叙事的敏感度上升。

### 4.2 电气设备 & 供电链（alpha 再定价）
- 变压器 & 开关柜：Eaton (ETN)、Hubbell (HUBB)、GE Vernova (GEV)、西门子能源、ABB；
- 燃气轮机：GE Vernova、Siemens Energy、三菱重工；
- 小型模块堆 SMR / 核电：NuScale、Oklo、Constellation Energy、Vistra（Talen 类似催化）；
- 液冷 & 机电总包：Vertiv (VRT)、Schneider Electric；
- A 股/港股映射：特变电工、平高电气、思源电气、金盘科技、明阳智能（海风）、中国核电、中广核电力。

### 4.3 对冲结构
- 做多 GE Vernova / Vertiv / Constellation Energy，做空纯粹依赖"AI 资本开支加速叙事"的 GPU 套现交易（配对，不是方向性）。

## 5. 主要风险与证伪路径
1. 美国 FERC 或州监管部门加速 interconnection reform（2026 年 Q3 可能有新方案），若 2026 末 permitting 周期快速压缩，电力瓶颈叙事可能在一个季度内逆转。
2. 中东（UAE、沙特）、北欧、东南亚的境外数据中心 offshoring 速度超预期，缓解美国本土瓶颈。
3. 天然气价格突破上行（若中东地缘升级），会挤压 gas peaker 经济性，延缓发电侧产能投放。
4. 如果 OpenAI 或 Anthropic 出现模型能力 plateau，需求侧本身走弱，整个叙事链条从供给瓶颈退化为需求过剩。

## 6. 给投研委员会的行动建议
- **仓位层面**：电气设备 & 核电在全球配置中的权重从"可选"调为"必需"；GPU 硬件链持有但减少加仓节奏。
- **观察变量（next 8 周）**：
  - 5 月上旬 Microsoft/Alphabet/Meta/Amazon FY Q2 财报 —— 观察 RPO、capex 口径、是否继续披露电力瓶颈规模；
  - NVIDIA 5 月末财报中 rack-level 出货 vs "deployed vs in-transit vs warehoused" 披露；
  - PJM 2026 年 capacity auction 结果（拍卖清算价是否再次冲上 cap）；
  - FERC Order 关于 co-located load（数据中心直连发电）的裁定节奏。

## 7. 资料来源
- CreditSights: *Hyperscaler Capex 2026 Estimates*
- IEEE ComSoc Technology Blog (2025-12-22): *Hyperscaler capex > $600bn in 2026*
- Futurum Group: *AI Capex 2026: The $690B Infrastructure Sprint*
- Introl Blog: *Hyperscaler CapEx Hits $690B in 2026 / Microsoft Azure Power Bottleneck*
- Fortune (2026-01-28): *Microsoft demand backlog doubles to $625 billion*
- Microsoft IR: *FY26 Q1 Earnings / Intelligent Cloud Performance*
- Data Center Dynamics: *Microsoft has AI GPUs "sitting in inventory" because it lacks the power*
- Fortune (2026-03-18): *Power grids snags electricity limits data centers*
- ITIF (2026-04-07): *Four Reasons New AI Data Centers Won't Overwhelm the Electricity Grid*
- Tech-Insider: *US AI Data Center Delays: 7 GW Capacity Crisis [2026]*
- Tom's Hardware: *Large-scale shipments of Nvidia GB300 servers / Blackwell cabinet forecasts*
- WCCFTech / KAD: *Blackwell Ultra GB300 shipments double in 2026*
- FinancialContent: *Nvidia's Blackwell Dynasty: 3.6M unit backlog through mid-2026*

---

## 交接说明
本卡结论集中在**"AI capex 的瓶颈已从芯片切换到电力"**这一核心命题。下一张卡的合理延伸，是把镜头转向**供电侧**：美国电网 2026–2028 的增量可并网容量从何而来？燃气轮机 / SMR / 地热 / 风光+储能的交付节奏与成本曲线排序？哪些上市标的能承接这轮需求？这正是**能源行业分析师 (energy-analyst)** 的专业领域。推荐立场为 **synthesize**，以跨域整合把 TMT 与能源两侧的现金流映射到同一张投研图上。

## Follow-up

- Analyst: energy-analyst
- Topic: 美国电网2026-2028的增量可并网容量与AI数据中心供电缺口——燃气轮机/SMR核电/地热/风光+储能的交付节奏与投资标的映射
- Question: 在AI数据中心2026-2028年新增60-80GW需求、而美国大电网增量可并网容量仅90-110GW（还要同时消化工业回流与EV负荷）的供需缺口下，燃气轮机、SMR小堆核电、地热、风光+储能的交付速度与度电成本如何排序？哪些上市标的（GEV/Constellation/Vistra/Vertiv/中国核电/特变电工/思源电气等）最受益于这轮供给结构性短缺，进场节奏与估值锚点怎么设？
