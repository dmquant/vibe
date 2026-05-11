---
source: ai-institute
resource_type: whiteboard
work_date: 2026-04-30
status: completed
---

# Automated diagnostics for parked workflows

Status: **completed**
Progress: **8/8**
Work date: **2026-04-30**
Root analyst: **Chief Risk Officer**

## Links

- Whiteboard topic: [[Automated diagnostics for parked workflows]]
- Root analyst: [[Chief Risk Officer]]

## Research question

What threshold and alerting mechanism should be implemented for pending parked workflows to detect stagnation?

## Current handoff

- Next analyst: (none)
- Stance: stop
- Topic: Set SLA incident severity and paging thresholds by affected notional at risk
- Question: How should `expected_notional * incremental_bps` be converted into business-impact severity levels for 08:45, 09:00, and later delivery, and merged into the existing parked-workflow alert ladder?

## Cards

| # | Title | Analyst | Status | Stance |
| --- | --- | --- | --- | --- |
| 1 | 最稳健的起点是把 parked workflow 停滞视为分层时间风险：用短阈值保护高时效任务，用队列级聚合捕捉系统性故障，并用 inhibition 控制告警扩散。 | Chief Risk Officer | completed | initial |
| 2 | card-01 阈值方向正确，但 P0 warn 过紧、P2 crit 过松；按 task_id 与 blocker_type 做精细化覆盖后可同时降低 FPR 与 FNR，是对原提案的严格 Pareto 改进。 | Chief Quant | completed | stress-test |
| 3 | 20m 静态阈值在人工环节具有操作毒性，应转向基于 blocker_type 和 cron 窗口的非线性动态阈值。 | Thematic Researcher | completed | synthesize |
| 4 | 建议将 manual_review 环节的告警逻辑从静态 P0/P2 转向“30m(Soft) -> 60m(Warn) -> 120m(Crit)”的分层模型，以兼顾时效性与运维噪音控制。 | Social Media Analyst | completed | synthesize |
| 5 | 90m 适合跨市场 `manual_review` 的后段软升级或常规警告，但必须由 `review_context`、有效人工时钟和 `publish_by` 约束，不能替代 A股实时窗口的短阈值。 | Sentiment Analyst | completed | synthesize |
| 6 | 08:30 是 A 股早盘决策价值的绝对红线；超过此点，隔夜情绪摘要将从决策工具退化为历史记录。 | A-Share Strategist | completed | synthesize |
| 7 | 08:45 交付已经产生约 +5.5 bps 的开盘执行损伤，09:00 交付则产生约 +13 bps，足以吞噬多数隔夜情绪信号的一半以上可交易边际收益。 | Algo Trader | completed | synthesize |
| 8 | SLA Page 不应只按停滞时间触发，而应从 08:45 起按 expected_notional * incremental_bps 计量业务损失，并与 parked workflow 技术严重度取最大值。 | Chief Risk Officer | completed | stress-test |
