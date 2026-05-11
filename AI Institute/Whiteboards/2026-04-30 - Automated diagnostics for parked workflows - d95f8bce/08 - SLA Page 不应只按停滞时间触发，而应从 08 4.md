---
source: ai-institute
resource_type: whiteboard-card
card_index: 8
status: completed
analyst_level: "风控与合规"
---

# SLA Page 不应只按停滞时间触发，而应从 08:45 起按 expected_notional * incremental_bps 计量业务损失，并与 parked workflow 技术严重度取最大值。

Analyst: **Chief Risk Officer**
Status: **completed**
Stance: **stress-test**
Completed: **30/04/2026, 05:25:17**

## Links

- Whiteboard topic: [[Automated diagnostics for parked workflows]]
- Card topic: [[SLA Page 不应只按停滞时间触发，而应从 08 45 起按 expected_notional incremental_bps 计量业务损失，并与 parked workflow 技术严重度取最大值。]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

## Topic

SLA Page 不应只按停滞时间触发，而应从 08:45 起按 expected_notional * incremental_bps 计量业务损失，并与 parked workflow 技术严重度取最大值。

## Question

Investigate the topic "SLA Page 不应只按停滞时间触发，而应从 08:45 起按 expected_notional * incremental_bps 计量业务损失，并与 parked workflow 技术严重度取最大值。" and make the strongest evidence-based judgment you can.

## Summary

本卡将 A 股盘前 SLA 延迟转换为名义本金口径的业务影响：impact_amount = expected_notional * incremental_bps / 10,000。08:45 使用 +5.5 bps 基准，09:00 使用 +13 bps 基准，小盘/主题篮子用 1.5x 流动性乘数。建议以 CNY 50,000 / 250,000 / 1,000,000 作为 owner page、desk incident、critical incident 阈值，并与既有 parked workflow 时间阶梯取最高严重度统一路由。09:00 后不应继续把信号作为正常开盘执行输入，除非重新论证。

## Report

# 卡片 08 研究报告：按名义本金设定 SLA 事故等级与 Page 阈值

## 角色与立场

作为首席风控官，我对前序结论做压力测试，并把市场窗口结论转换成可执行的操作风险规则。我支持卡片 06 的 `08:30` 硬 SLA，也支持卡片 07 对执行成本的估算，但不支持只按时间触发 Page。`08:30` 之后，告警必须进入**业务暴露**口径，即用 `expected_notional * incremental_bps` 计量，再与 parked workflow 告警阶梯合并，由最高严重度统一决定路由。

工作区说明：本卡片撰写时，实时工作区仅包含 `card-01`、`card-03`、`card-04` 与 `card-05`；`session-brief.md`、`analyst-catalog.json`、`card-02`、`card-06` 与 `card-07` 在磁盘上缺失。因此，缺失的上游结论根据用户提示中的 session snapshot 重建。[^1][^2][^3][^4][^5][^6][^7]

## 核心判断

转换公式应为：

`impact_amount = expected_notional * incremental_bps / 10,000`

其中，`expected_notional` 是受影响的计划交易或决策名义本金，按报告货币计；`incremental_bps` 是相对于 `08:30` 准时交付的延迟惩罚。对卡片 06 与卡片 07 已界定的 A 股隔夜情绪摘要场景，默认 bps 曲线为：

| 交付时间 | 流动性较好的机构级行业篮子 | 基准 `incremental_bps` | 小盘或主题篮子 |
|---|---:|---:|---:|
| `<= 08:30` | 相对 SLA 为 `0 bps` | `0 bps` | `0 bps` |
| `08:45` | `+4 to +7 bps` | `+5.5 bps` | 使用 `1.5x` 流动性乘数后为 `+8.25 bps` |
| `09:00` | `+10 to +16 bps` | `+13 bps` | 使用 `1.5x` 流动性乘数后为 `+19.5 bps`，位于卡片 07 的小盘/主题 `+16 to +24 bps` 区间内 |
| `09:15` 及之后 | 不再是正常盘前执行输入 | 以 `+13 bps` 为下限，并打上 `>50%` alpha 衰减标记 | 以 `+19.5 bps` 为下限，并打上 `>50%` alpha 衰减标记 |
| `10:00` 及之后 | 早盘决策价值视为失效 | 停止用于开盘执行 | 停止用于开盘执行 |

事故等级应取三个维度的最大值：

1. **时间严重度**，来自 `08:15 / 08:30 / 08:45 / 09:00 / 09:15` SLA 时钟。
2. **业务影响严重度**，来自 `impact_amount`。
3. **队列严重度**，来自相似 parked workflow 的数量/占比聚合与影响金额加总。

这样可以避免两个错误：一是为很小的过期 workflow 打扰平台 on-call，二是因为只晚了 15 分钟而低估大额名义本金暴露。

## 业务影响分层

业务影响用报告货币分层，A 股 workflow 默认使用 `CNY`。如果 workflow 使用其他货币，应按最新可用内部 FX mark 把 `impact_amount` 折算为事故报告货币。

| 影响分层 | `impact_amount` | 业务含义 | 默认动作 |
|---|---:|---|---|
| `I0` 观察 | `< CNY 10,000` | 可计量，但对交易台不构成实质影响 | 仅记录日志和看板，除非技术规则本身已经触发 Page |
| `I1` 轻微 | `CNY 10,000 to < CNY 50,000` | workflow owner 应介入，但通常不值得触发平台 Page | 分析师 IM 加 ticket |
| `I2` 重大 | `CNY 50,000 to < CNY 250,000` | 预期成本对交易台可见 | Page workflow owner 与 analyst lead |
| `I3` 严重 | `CNY 250,000 to < CNY 1,000,000` | 形成实质 P&L 泄漏或决策损伤 | Page owner、analyst lead、desk lead 与相关 on-call |
| `I4` 极严重 | `>= CNY 1,000,000` | 尾部损失型操作风险事故 | Page incident commander、platform on-call、analyst lead 与 desk lead |

表上方应有两个覆盖规则：

- 如果 A 股盘前 P0/P1 workflow 缺失 `expected_notional`，则视为**未知名义本金风险**：`08:45` 至少按 `I2` 路由，`09:00` 至少按 `I3` 路由，直到补齐名义本金。
- 如果一组告警由许多个单体小延迟构成，应按 `task_id`、`queue`、`blocker_type` 与 `market_window` 汇总 `sum(expected_notional * incremental_bps / 10,000)`。队列级 `I3` 或 `I4` 应抑制单体告警，并只触发一次分组 Page。

## SLA 时间下限

时间时钟本身不应机械触发完整平台 Page，但应为业务影响层设定最低严重度下限。

| SLA 时钟 | 时间下限 | 含义 | 路由下限 |
|---|---|---|---|
| `08:15` | `T1` | 距离 `publish_by` 还有 15 分钟的预违约软告警 | 分析师 IM，不触发平台 Page |
| `08:30` | `T2` | 硬 SLA 已错过，决策价值开始衰减 | ticket；若短时间未恢复，通知 analyst lead |
| `08:45` | `T3` | 业务影响事故；卡片 07 的基准惩罚为 `+5.5 bps` | 按 `impact_amount` 路由，若 `impact_amount >= CNY 50,000`，至少 Page owner |
| `09:00` | `T4` | 卡片 07 认为该信号不应再作为正常开盘执行输入；基准惩罚为 `+13 bps` | 按 `impact_amount` 路由；若 `impact_amount >= CNY 50,000`，至少 Page analyst lead；若 `>= CNY 250,000`，通知 desk lead |
| `09:15` | `T4+` | 卡片 06 指出集合竞价开始后 alpha 损失超过 `50%` | 对任何重大暴露 Page desk lead，并把建议从“执行”切换为“取消、顺延或重新定价” |
| `10:00` | `expired` | 卡片 06 指出早盘决策价值基本消失 | 作为错过 SLA 关闭；任何 `I2+` 影响必须做事后复盘 |

关键风控点是：`08:45` 已经不是表面延迟，而是可计量的执行成本事件。`09:00` 也不只是更差的延迟；它会改变允许的业务动作，从“作为开盘信号使用”变成“重新论证后才能使用”。

## 压力测试案例

| 场景 | 计算 | 影响分层 | 合并动作 |
|---|---:|---|---|
| `CNY 100m` 流动性较好篮子在 `08:45` 交付 | `100,000,000 * 5.5 / 10,000 = CNY 55,000` | `I2` | Page owner 与 analyst lead |
| `CNY 100m` 流动性较好篮子在 `09:00` 交付 | `100,000,000 * 13 / 10,000 = CNY 130,000` | `I2`，受 `T4` 上调 | Page owner 与 analyst lead；未经重新论证不得进入正常开盘执行 |
| `CNY 500m` 流动性较好篮子在 `08:45` 交付 | `500,000,000 * 5.5 / 10,000 = CNY 275,000` | `I3` | Page owner、analyst lead、desk lead 与相关 on-call |
| `CNY 500m` 流动性较好篮子在 `09:00` 交付 | `500,000,000 * 13 / 10,000 = CNY 650,000` | `I3`，受 `T4` 上调 | 作为关键业务事故处理；desk lead 必须决定取消、顺延或重新论证 |
| `CNY 100m` 主题篮子在 `09:00` 交付 | `100,000,000 * 19.5 / 10,000 = CNY 195,000` | `I2`，接近 `I3` | Page owner 与 analyst lead；若集中度或流动性恶化，则通知 desk lead |
| 十个 workflow 各自延迟影响为 `CNY 30,000` | `10 * 30,000 = CNY 300,000` 分组影响 | 队列级 `I3` | 触发一次分组 Page，抑制十个单体 Page |

压力测试结论是，`CNY 50,000` 适合作为 owner 与 analyst lead 的首个 Page 阈值。它能覆盖 `CNY 100m` 在 `08:45` 的场景，因为该损失已经足够有业务意义，同时不会因极小名义本金产生噪音。平台级升级通常应等到 `I3`、`I4`，或出现共享技术 blocker 的证据。

## 与现有 parked-workflow 阶梯合并

现有 parked-workflow 策略不应被替代，而应增加业务影响覆盖层。

| 现有规则族 | 保留内容 | 对 A 股盘前 SLA workflow 增加内容 |
|---|---|---|
| 单体停滞阈值 | 保留卡片 02 校准后的默认值：P0 warn `20m`，自动化硬 blocker 约 `18m warn / 30m crit`，`rate_limit` `+5m` 宽限，P2 critical 调整为 `6h`，weekly report 归为 P3。[^2][^3] | 若 `publish_by=08:30`，业务影响严重度可以早于通用 parked age 升级。 |
| `manual_review` 阈值 | 保留卡片 04 对本地实时市场的 `30m -> 60m -> 120m` 阶梯，以及卡片 05 对跨市场隔夜审阅的有效人工时钟逻辑。[^4][^5] | 随着 `publish_by` 接近，压缩人工宽限；`publish_by` 高于人工审阅舒适窗口。 |
| 队列/集群聚合 | 保留卡片 01 的规则：同组停滞数量 `>= 5`，或停滞占比 `>= 20%` 且数量至少 `3`，并持续 `15m`。[^1] | 增加分组名义本金影响：即使数量低于旧阈值，只要合计 `impact_amount` 达到 `I3` 或 `I4`，也应触发一次分组 Page。 |
| 抑制与去重 | 保留分组告警抑制，避免一个系统性故障产生大量 Page。[^1] | 对同一 `task_id`、`queue`、`blocker_type` 与 `market_window`，若已有更高严重度的队列影响告警，则抑制单体影响告警。 |
| 元数据缺失 | 过去主要是数据质量问题。 | 对 P0/P1 盘前 workflow，缺失 `expected_notional`、`publish_by` 或 `incremental_bps_model` 在 `08:45` 后本身就是升级因素。 |

在操作上，每条告警事件应计算：

```text
technical_severity = parked_workflow_ladder(priority, blocker_type, stagnant_age, expected_resume_by)
time_floor = sla_time_floor(now, publish_by, market_window)
impact_amount = expected_notional * incremental_bps(now, liquidity_bucket) / 10,000
impact_severity = impact_band(impact_amount)
fleet_severity = max(count_share_fleet_rule, summed_impact_fleet_rule)

final_severity = max(technical_severity, time_floor_adjusted_impact_severity, fleet_severity)
```

随后只根据 `final_severity` 做一次路由决策。不要在现有 parked-workflow Pager 旁边再建一个独立业务 Pager，否则会重新制造告警扩散。正确做法是把 `expected_notional`、`incremental_bps`、`impact_amount`、`publish_by`、`liquidity_bucket` 与 `market_window` 作为现有告警 payload 的 label 或 annotation。

## 推荐 Page 矩阵

| 最终严重度 | 典型触发条件 | Page 目标 |
|---|---|---|
| `S0` 观察 | `I0`，`08:30` 前，或非实质性技术噪音 | 仅看板 |
| `S1` ticket | `I1`，低名义本金的 `08:30` 违约，或非关键 parked warning | workflow owner ticket 加分析师 IM |
| `S2` owner page | `I2`，`08:45` 且 `impact_amount >= CNY 50,000`，或无队列证据的 P0/P1 技术 critical | workflow owner 与 analyst lead |
| `S3` desk incident | `I3`，分组影响 `>= CNY 250,000`，或 `09:00` 且 `impact_amount >= CNY 250,000` | owner、analyst lead、desk lead、相关 service on-call |
| `S4` critical incident | `I4`，分组影响 `>= CNY 1,000,000`，`09:15+` 且有重大暴露但无法重新论证，或共享平台 blocker 影响多个高名义本金 workflow | incident commander、platform on-call、analyst lead、desk lead |

对 `data_unavailable`、`rate_limit`、`llm_timeout`、credential failure 或 scheduler failure 等自动化 blocker，只要最终严重度达到 `S3`，或队列规则触发，就应通知 platform on-call。对 `manual_review`，除非有 UI/access failure、共享队列故障证据，或 SLA 已经转化成重大业务事故，否则不应直接 Page 平台。

## 最终建议

对所有 P0/P1 市场窗口 workflow，强制写入以下字段：

- `expected_notional`
- `notional_ccy`
- `publish_by`
- `market_window`
- `liquidity_bucket`
- `incremental_bps_model`
- `owner_analyst_id`
- `desk_lead_id`
- `fallback_reviewer_id`

生产规则应为：**从 `08:45` 开始计算 `expected_notional * incremental_bps / 10,000`；`CNY 50,000` 触发 owner 与 analyst lead Page，`CNY 250,000` 触发 desk lead 与相关 on-call，`CNY 1,000,000` 或分组影响超过该水平时开启 critical incident。到 `09:00`，除非明确重新论证，否则停止把该信号作为正常开盘执行输入。**

这是否定时间阶梯吗？不是。这是对前序结论的压力测试式细化：时间阶梯负责发现风险，名义本金覆盖层负责决定组织应以多大力度响应。

## 交接

不建议继续交接给其他分析师。本卡片为 8/8，研究链条已经形成可执行策略。若团队后续要把规则写成生产 runbook，可再由 `qa-manager [reviewer]` 做审校，但这已超出当前研究序列。

## 引用

[^1]: Card-01，`whiteboard/d95f8bce-fc25-4964-af06-b82f8b488ad2/card-01/report.en.md`。
[^2]: Card-02 摘要来自 session snapshot，`whiteboard/d95f8bce-fc25-4964-af06-b82f8b488ad2/card-02/report.en.md`；本卡撰写时该文件在实时工作区缺失。
[^3]: Card-03，`whiteboard/d95f8bce-fc25-4964-af06-b82f8b488ad2/card-03/report.en.md`。
[^4]: Card-04，`whiteboard/d95f8bce-fc25-4964-af06-b82f8b488ad2/card-04/report.en.md`。
[^5]: Card-05，`whiteboard/d95f8bce-fc25-4964-af06-b82f8b488ad2/card-05/report.en.md`。
[^6]: Card-06 摘要来自 session snapshot，`whiteboard/d95f8bce-fc25-4964-af06-b82f8b488ad2/card-06/report.en.md`；本卡撰写时该文件在实时工作区缺失。
[^7]: Card-07 摘要来自 session snapshot，`whiteboard/d95f8bce-fc25-4964-af06-b82f8b488ad2/card-07/report.en.md`；本卡撰写时该文件在实时工作区缺失。
