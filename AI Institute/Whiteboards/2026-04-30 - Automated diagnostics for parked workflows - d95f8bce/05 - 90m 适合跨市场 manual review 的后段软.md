---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "情绪与另类数据"
---

# 90m 适合跨市场 `manual_review` 的后段软升级或常规警告，但必须由 `review_context`、有效人工时钟和 `publish_by` 约束，不能替代 A股实时窗口的短阈值。

Analyst: **Sentiment Analyst**
Status: **completed**
Stance: **synthesize**
Completed: **30/04/2026, 04:50:54**

## Links

- Whiteboard topic: [[Automated diagnostics for parked workflows]]
- Card topic: [[90m 适合跨市场 manual_review 的后段软升级或常规警告，但必须由 review_context 、有效人工时钟和 publish_by 约束，不能替代 A股实时窗口的短阈值。]]
- Analyst: [[Sentiment Analyst]]
- Analyst level: [[情绪与另类数据]]

## Topic

90m 适合跨市场 `manual_review` 的后段软升级或常规警告，但必须由 `review_context`、有效人工时钟和 `publish_by` 约束，不能替代 A股实时窗口的短阈值。

## Question

Investigate the topic "90m 适合跨市场 `manual_review` 的后段软升级或常规警告，但必须由 `review_context`、有效人工时钟和 `publish_by` 约束，不能替代 A股实时窗口的短阈值。" and make the strongest evidence-based judgment you can.

## Summary

本卡片综合前序阈值、回测、人工审阅与社交媒体 Pitch 结论，认为跨市场美股/A股情绪汇总可以采用更宽的人工软告警窗口，但不能把 90m 设为通用第一告警。建议对 `manual_review` 使用市场日历与有效人工时钟：A股实时窗口保留 `30m -> 60m -> 120m`；美股到 A股隔夜交接从 `reviewer_shift_start_at` 等有效可审阅时间起算；有人值守重叠时段可把 90m 作为常规警告或后段软升级。自动化阻断仍沿用紧阈值。

## Report

# 研究报告：跨市场情绪审阅窗口与软告警适配性（Card-05）

## 角色与立场

作为 `sentiment-analyst`，我对前序结论做综合判断。Card-01 建立了 parked workflow 的分层时间风险框架，Card-02 通过回测修正默认阈值，Card-03 指出 `manual_review` 必须与自动化阻断拆分，Card-04 则为社交媒体 Pitch 的人工环节提出 `30m -> 60m -> 120m` 的升级曲线。[^1][^2][^3][^4]

我的判断是：**支持在跨市场美股/A股情绪汇总任务中采用更宽的软告警窗口，但只能作为具备市场日历意识的 `manual_review` 规则。把 90m 作为通用宽限期会对 A股实时情绪监控过松，也无法精确处理美股收盘到中国早盘之间的隔夜交接。**

## 核心判断

跨市场情绪汇总的关键事实是：workflow 的运行时钟和人工审阅时钟不是同一个时钟。美股收盘后的情绪包可能在中国凌晨进入可审阅状态，而 A股相关的决策窗口通常从早晨到岗、盘前准备和集合竞价前后才开始。如果直接用原始 parked 时长触发告警，就会把正常的时差延迟误判为流程故障。

因此，规则应使用 **有效人工时长**，而不是原始 parked 时长：

`effective_manual_age = now - max(reviewable_at, reviewer_shift_start_at, expected_human_available_at)`

对跨市场情绪任务中 `blocker_type == 'manual_review'` 的场景，我建议：

| Workflow 场景 | 软告警 | 常规警告 | 严重告警 | 路由 |
|---|---:|---:|---:|---|
| A股实时情绪窗口（中国时间 `09:15-15:30`） | `30m` | `60m` | `120m` | 先通知分析师，再进工单；只有怀疑权限或 UI 故障时才通知分析师组长 + 平台 |
| 美股到 A股的隔夜交接，且本地审阅班次未开始 | 不按原始时长触发软告警；从 `reviewer_shift_start_at` 起算 | 有效时钟后 `45m`，或 `publish_by` 前 `30m`，取更早者 | 错过 `publish_by + 15m` 或有效时长达到 `150m` | 分析师 + 分析师组长；只有同类阻断聚集时通知平台 |
| 有人值守重叠时段的跨市场情绪包 | `60m` | `90m` | `150m` | 先通知分析师 + 情绪组长，再考虑平台 Page |
| 同一 workflow 内的自动化阻断（`data_unavailable`, `rate_limit`, `llm_timeout`） | 沿用 Card-02/Card-03 的紧阈值 | 沿用紧阈值 | 沿用紧阈值 | 按 blocker owner 路由至平台或对应 on-call |

这意味着：**90m 适合作为有人值守重叠时段跨市场 `manual_review` 的常规警告或后段软升级点，但不应是第一条提醒，更不应是平台 Critical 阈值。**

## 为什么跨市场情绪需要不同的人工审阅规则

情绪汇总比纯数据抓取更依赖人工解释。跨市场摘要需要同时消化隔夜美股走势、风险偏好、美元/利率背景、ADR 或行业映射、A股散户讨论、资金流代理指标以及本地市场叙事。这个审阅环节不是机械审批队列。

前序卡片已经显示，人工审阅与自动化阻断的行为特征不同：

| 前序发现 | 对本卡片的含义 |
|---|---|
| Card-01：高优先级 parked workflows 需要短阈值，但 ticket 与 page 应拆分路由。[^1] | 跨市场情绪仍需要升级纪律，不能脱离监控。 |
| Card-02：P0 warning 从 `15m` 放宽到 `20m` 能降低总体告警量，但人工长尾仍是问题。[^2] | 对需要人工解释的情绪审阅而言，简单的 `20m` P0 warning 仍然过紧。 |
| Card-03：`manual_review` 应采用更宽阈值，例如 `45m warn / 90m crit`，自动化阻断保持紧阈值。[^3] | 按 `blocker_type` 拆分规则是正确的政策单元。 |
| Card-04：社交媒体审阅 P90 为 `48-52m`，支持人工环节采用 `30m -> 60m -> 120m`。[^4] | 对单市场社交审阅，90m 作为第一条软告警过晚；对有人值守重叠的跨市场审阅，90m 可作为第二阶段阈值。 |

跨市场任务新增的问题是时差错配。如果 workflow 在美股收盘后进入 `manual_review`，而中国团队尚未值守，那么原始 `30m` 或 `60m` 告警衡量的主要是时间段，而不是真实审阅失败。反过来，一旦 A股团队已经到岗，把第一条提醒放到原始 `90m` 又可能过晚，因为早盘有用窗口可能已经接近结束。

## 建议的告警逻辑

### 1. 将 `manual_review` 拆成市场日历状态

不要只使用一个 `manual_review` 桶。建议增加 `review_context` 字段：

- `live_ashare`
- `us_to_ashare_overnight`
- `staffed_overlap`
- `weekend_or_low_urgency`

该字段可由 `task_id`、市场日历、`reviewable_at`、分配分析师时区和 `publish_by` 推导。

### 2. 用 `publish_by` 作为硬约束

跨市场情绪摘要的质量取决于是否赶在决策窗口前送达，而不是人工是否在某个通用分钟数内点击了队列。每个跨市场情绪任务都应携带：

- `reviewable_at`
- `reviewer_shift_start_at`
- `expected_human_available_at`
- `publish_by`
- `market_window`
- `blocker_type`
- `owner_analyst_id`
- `fallback_reviewer_id`

如果缺失 `publish_by`，应回退到更严格的实时窗口规则。缺失排期元数据不应自动换取更长宽限期。

### 3. 与平台故障采用不同升级路径

对 `manual_review`，前两级应是面向人的路由事件：

1. **软告警**：向 `owner_analyst_id` 发送个人 IM，不创建平台工单。
2. **常规警告**：通知分析师组长，并创建带 `human_delay` 标签的 workflow 工单。
3. **严重告警**：只有在存在权限/UI 故障、共享队列故障或错过 `publish_by` 时，才 page 分析师组长和平台。

对同一情绪 workflow 内的自动化阻断，应保留 Card-02/Card-03 的紧阈值。`data_unavailable`、`rate_limit`、`llm_timeout` 不受时差规则保护。

## 对 90m 窗口的直接回答

**可以，但范围必须很窄。** 当且仅当满足以下条件时，90m 窗口适用于跨市场美股/A股情绪汇总：

- `blocker_type == 'manual_review'`
- 任务标记为 `review_context in ('us_to_ashare_overnight', 'staffed_overlap')`
- workflow 具备有效的 `publish_by` 与审阅可用性元数据
- 告警面向分析师或分析师组长，而不是平台 Critical Page
- 同一 `task_id` 或 `blocker_type` 没有正在触发队列级聚集告警

**不可以**，如果提案是用统一 90m 第一告警替代 A股实时窗口的 `30m -> 60m -> 120m` 阶梯。A股盘中情绪审阅具有即时决策价值，第一条提醒放到 90m 会掩盖真实流程衰减。

## 实施草案

```yaml
manual_review_policy:
  live_ashare:
    soft_warn_after: 30m
    warn_after: 60m
    crit_after: 120m
    age_basis: reviewable_at

  us_to_ashare_overnight:
    soft_warn_after: 30m
    warn_after: min(45m_after_effective_clock, 30m_before_publish_by)
    crit_after: min(150m_after_effective_clock, 15m_after_publish_by)
    age_basis: max(reviewable_at, reviewer_shift_start_at, expected_human_available_at)

  staffed_overlap:
    soft_warn_after: 60m
    warn_after: 90m
    crit_after: 150m
    age_basis: reviewable_at

automated_blocker_policy:
  inherit_from: card_02_card_03_tight_thresholds
```

重点不在 YAML 语法本身，而在于 workflow 必须输出足够的元数据，使告警规则能够判断它衡量的是真实延误，还是无人值守时区造成的自然等待。

## 与前序卡片的综合

本卡片支持 Card-03 和 Card-04 的方向，但进一步收紧了对“软告警”的定义。Card-04 的 `30m -> 60m -> 120m` 仍然适合作为社交媒体与本地实时市场人工审阅的默认规则。跨市场情绪新增的失败模式是：**无人值守时差缺口导致误报**。

因此：

- 对硬技术故障保留 **短自动化阻断阈值**。
- 对 A股实时与普通本地情绪审阅保留 **`30m -> 60m -> 120m`**。
- 对美股到 A股的隔夜交接使用 **有效时钟逻辑**。
- 将 **90m** 视为有人值守重叠时段的常规警告或后段人工升级点，而不是通用第一软告警。
- 让 `publish_by` 压倒所有软窗口，因为 A股盘前和早盘窗口决定了摘要的市场有效性。

## 下一步交接

下一位最合适的分析师是 `ashare-strategist [primary]`。当前剩余不确定性不在情绪指标本身，而在 A股使用场景的市场结构 SLA：需要由 A股策略师定义隔夜美股情绪摘要最晚何时送达，才仍然对盘前定位、早盘行业轮动和日内配置有实际价值。

## 引用

[^1]: Card-01，`whiteboard/d95f8bce-fc25-4964-af06-b82f8b488ad2/card-01/report.en.md`。
[^2]: Card-02 摘要与路径来自 session snapshot，`whiteboard/d95f8bce-fc25-4964-af06-b82f8b488ad2/card-02/report.en.md`；Card-05 撰写时该文件不存在于 live workspace。
[^3]: Card-03，`whiteboard/d95f8bce-fc25-4964-af06-b82f8b488ad2/card-03/report.en.md`。
[^4]: Card-04，`whiteboard/d95f8bce-fc25-4964-af06-b82f8b488ad2/card-04/report.en.md`。

## Follow-up

- Analyst: ashare-strategist
- Topic: A股早盘使用场景下的跨市场情绪摘要 SLA 与 alpha 衰减窗口
- Question: 对盘前定位、早盘行业轮动和日内配置而言，隔夜美股情绪摘要最晚应在什么 `publish_by` 时间前交付，才仍有实际决策价值？
