---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "权益策略"
---

# 把宏观召唤条件、role tag 强制化和 reviewer 资格闸三项机制层改动同时上线，是把研究串配比拉回 7-8 / 1-2 / 0-1 目标的最短路径。

Analyst: **Chief Strategist**
Status: **completed**
Stance: **initial**
Completed: **30/04/2026, 02:05:54**

## Links

- Whiteboard topic: [[Whiteboard handoff optimization]]
- Card topic: [[把宏观召唤条件、role tag 强制化和 reviewer 资格闸三项机制层改动同时上线，是把研究串配比拉回 7-8 1-2 0-1 目标的最短路径。]]
- Analyst: [[Chief Strategist]]
- Analyst level: [[权益策略]]

## Topic

把宏观召唤条件、role tag 强制化和 reviewer 资格闸三项机制层改动同时上线，是把研究串配比拉回 7-8 / 1-2 / 0-1 目标的最短路径。

## Question

Investigate the topic "把宏观召唤条件、role tag 强制化和 reviewer 资格闸三项机制层改动同时上线，是把研究串配比拉回 7-8 / 1-2 / 0-1 目标的最短路径。" and make the strongest evidence-based judgment you can.

## Summary

白板交接的两类失效——reviewer 过度路由与宏观分析师参与不足——根因分别是泛风险反射 + 角色标签不可见，以及缺乏宏观转向触发条件 + 行业邻接偏好。建议五项机制层修复：新增宏观转向触发条件、强制 role tag 入 rationale 字符串、reviewer 资格闸（卡序 ≥5 或具名数值脆弱性）、名册置顶宏观、session brief 内嵌实时配比预算。下一卡交给 chief-economist，借一条 A 股配置研究串实战演练宏观转向触发条件。

## Report

# 优化白板交接：减少 reviewer 过度路由、提升宏观分析师参与度

**Card：** 01 / 08 — 首席策略师（ashare-strategist）— Stance：initial

> **关于工作区状态的说明：** 本卡启动时，`whiteboard/ba76e4d8-fc00-474a-9f40-c7f240e8d7bd/` 下并不存在 `session-brief.md` 与 `analyst-catalog.json`。内容根据卡片提示中提供的 session brief 快照与分析师名册重建。本卡负责初始化工作集。

---

## 1. 问题界定

过往白板研究串中观察到两类失效模式：

1. **Reviewer 过度路由。** Reviewer 角色（`qa-manager`、`compliance-officer`、`chief-risk`）在 8 卡研究串里被当作第 02 ～ 03 张卡片调用，而此时尚未出现任何具体的"脆弱性"可供压力测试。Reviewer 因此只能产出一段泛泛的风险提醒，下游卡片要么忽略、要么改写一遍，平白浪费两个卡位。
2. **宏观分析师参与不足。** 四位 primary 宏观分析师 —— `chief-economist`、`china-macro`、`global-macro`、`ashare-strategist` —— 整体出场频率低于应有水平，尽管多数议题骨子里都带宏观脉络。行业分析师习惯把交接给到另一位行业分析师，宏观层就这样被绕过去。

卡片提示中给出的目标比例（"10 张卡的健康分布约为 7–8 primary、1–2 specialist、0–1 reviewer"）是合理的。问题在于：研究串*为什么*会偏离这个目标，以及哪种纠偏机制真正起作用。

## 2. 根因诊断

### 2.1 Reviewer 为何被过度路由

| 驱动因素 | 机制 | 证据特征 |
|---|---|---|
| **泛风险反射** | 分析师感到模糊的不安（"这里好像有风险"），就直接召唤 reviewer，而不是先点出具体的脆弱性 | Reviewer 卡正文充斥泛 VaR / 合规话术，无法回指上一张卡的某个具体数字或论断 |
| **过早收尾** | 分析师把第 02 ～ 03 张当作"结案陈词"，转手交给 QA | QA 卡要求"数值一致性"，可整条研究串还没出现像样的数字 |
| **角色标签不可见** | 决策时刻，做交接的分析师没有把 primary / specialist / reviewer 角色看进去 | Handoff rationale 里没有 role tag，仅凭话题相似性挑选 reviewer |
| **模型层面的避险先验** | 不确定时，模型倾向"先做个风险审查吧" | 在低风险流程问题上也召唤 reviewer |

### 2.2 宏观分析师为何被低估

| 驱动因素 | 机制 | 证据特征 |
|---|---|---|
| **行业到行业的邻接偏好** | 行业分析师"下一个未答问题"在感觉上更靠近另一行业，而不是宏观重构 | TMT → 半导体 → 消费电子 一路递推，从不引入 `chief-economist` 谈需求底色 |
| **宏观感觉"太抽象"，不像下一卡** | 宏观重构被当成铺垫问题、而非推进答案 | 研究串开篇宏观，之后再无宏观回访 |
| **名册排序** | `chief-economist`、`global-macro`、`china-macro`、`ashare-strategist` 在名册中段，分析师扫读后顺手挑了邻近名字 | Handoff rationale 引用行业邻接者，没有考虑宏观候选 |
| **缺一个明确的"宏观转向"触发条件** | 提示告诉你*在什么条件下*召唤 specialist / reviewer，但没有对应的"如果下一个问题落在*需求 / 流动性 / 政策 / 跨资产溢出*，就该叫宏观"的触发条件 | 即便问题本就属于宏观，也不会提名宏观 |

## 3. 推荐的优化方案

以下五项改动从机制层面对应这两类失效。按"单位实施成本下的预期收益"排序。

### 3.1（最高杠杆）在 reviewer / specialist 守门规则旁，增加一条**宏观转向触发条件**

卡片提示已经规定了*何时*召唤 specialist 或 reviewer，却没有规定*何时*召唤宏观。新增一条正向触发条件：

> **当下一个未答问题具体落在以下场景时，应召唤一位 primary 宏观分析师（`chief-economist`、`china-macro`、`global-macro`、`ashare-strategist`）：需求周期、货币 / 财政政策、跨资产流动性、FX / 利率溢出、A 股市场结构、自上而下的风格轮动。**

措辞与已有的 specialist 守门规则平行，可直接嵌入模型行为，无需重训。预期效果：在涉及需求 / 政策 / 流动性的研究串中（也就是绝大多数），宏观卡占比从当前低于目标提升至 25–35%。

### 3.2 将 **role tag 强制写进 handoff rationale 字符串本体**，不仅停留在政策层

当前规则要求注明 role tag。把它升级为 rationale 字符串的结构性要求：分析师 id 之后的第一个 token 必须是 `[primary]`、`[specialist]` 或 `[reviewer]`。Reviewer 交接如果未同时引用*某张具名前卡里的具体脆弱性*，应在校验阶段拒绝。预期效果：迫使做交接的分析师在召唤 reviewer 前先指向一个具体的数字 / 论断，泛风险型的 reviewer 路由因此塌陷。

### 3.3 引入 **reviewer 资格闸**：卡片序号 ≥ 5 才允许，除非已具名一项数值脆弱性

硬规则：reviewer 仅在以下两种情况下可作为下一位分析师 —— (a) 当前卡片序号 ≥ 5，或 (b) handoff rationale 明确指出某张具名前卡（非当前卡）中的数值或政策脆弱性。提示层面的软闸即可，不必做硬校验器。预期效果：把 reviewer 卡推向研究串靠后的位置（这才是收尾逻辑应在的地方），释放 1–2 个本应给 primary 或 specialist 的中段卡位。

### 3.4 重新排序名册，把宏观顶在最前

在交接时呈给分析师的名册渲染中，把 primary 宏观（`chief-economist`、`china-macro`、`global-macro`、`ashare-strategist`、`asset-allocator`）置于 primary 段最前，行业放其后。名册顺序是选择行为上一个有意义的先验 —— 分析师倾向先读到什么就先选什么。预期效果：宏观提名概率获得小但累积的提升，尤其在前 2–3 张卡（研究串形态此时被定型）。

### 3.5 在 session brief 内编入**预期配比预算**

把目标比例显性化、并对每张卡可见：

> 本 8 卡研究串的目标配比：6 张 primary（其中 ≥ 2 张宏观）、≤ 1 张 specialist、≤ 1 张 reviewer。已用：{tally}。剩余预算：{derived}。

每张卡都看得到当前用量并自我调整。把模糊指引转换成实时硬约束。预期效果：单一杠杆里命中比例目标的最大力度，因为约束在决策时刻可读，而不是审计时刻才显形。

## 4. 我*不*推荐什么，以及理由

- **完全禁止研究串前半段出现 reviewer。** 第 03 张卡确实可能出现真正具体的脆弱性（例如行业层面的风险数据落地后立刻需要做压力测试）。一刀切的禁令是过度纠偏。带显式豁免的闸门规则（即 3.3）保留了这条合法用法。
- **强制每条研究串第 02 张就上宏观。** 部分研究串 —— 纯执行、微观结构、窄口径技术形态 —— 确实不需要宏观重构。3.1 的触发条件是有条件的，不是无条件的。
- **新增一个"路由"分析师角色。** 看似诱人，实则错向：等于多加一层而非修正路由逻辑本身。更优解是修复现有分析师在使用时所参照的先验。

## 5. 信心与可推翻条件

**Confidence：** 0.62。中高水位，因为各项处方都是机制层面的、可叠加的；但我尚未观测到改动后的研究串分布数据，无法确认宏观触发条件是否真按预期触发。

**何种证据会推翻当前判断：**
- 实测数据显示 reviewer 卡本就集中在研究串后段（会削弱 3.3）。
- 证据表明宏观参与不足源于分析师能力而非选择（焦点应从提示机制移向分析师设计）。
- 名册排序对提名概率无影响的发现（会取消 3.4）。

## 6. 交接

要检验宏观转向触发条件（3.1）是否真的起作用，最干净的做法是开一条*应当*早期召唤宏观的研究串，看优化后的路由会不会真把宏观提名出来。下一个未答问题——"今日宏观面应当如何锚定一条 A 股配置研究串？"——正好落在 `chief-economist` 的领域内（全球宏观周期、GDP / CPI / PMI、央行政策）。交给 `chief-economist` 既是对所推荐规则的实战演练，也为后续卡片提供了一条真实的宏观主轴，避免行业邻接式的横向漂移。

**Handoff：** `chief-economist` [primary] —— primary 宏观主声部，正好示范宏观转向触发条件的实战应用，并为整条 8 卡研究串锚定一个自上而下的起点，而非行业邻接散步。

## Follow-up

- Analyst: chief-economist
- Topic: 今日宏观面对 A 股配置的锚定
- Question: 结合最新 GDP/CPI/PMI 数据与央行表态，今日宏观面应当如何锚定一条 A 股配置研究串的自上而下结论？
