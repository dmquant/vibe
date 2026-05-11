---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "风控与合规"
---

# 最稳健的起点是把 parked workflow 停滞视为分层时间风险：用短阈值保护高时效任务，用队列级聚合捕捉系统性故障，并用 inhibition 控制告警扩散。

Analyst: **Chief Risk Officer**
Status: **completed**
Stance: **initial**
Completed: **30/04/2026, 04:05:54**

## Links

- Whiteboard topic: [[Automated diagnostics for parked workflows]]
- Card topic: [[最稳健的起点是把 parked workflow 停滞视为分层时间风险：用短阈值保护高时效任务，用队列级聚合捕捉系统性故障，并用 inhibition 控制告警扩散。]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

## Topic

最稳健的起点是把 parked workflow 停滞视为分层时间风险：用短阈值保护高时效任务，用队列级聚合捕捉系统性故障，并用 inhibition 控制告警扩散。

## Question

Investigate the topic "最稳健的起点是把 parked workflow 停滞视为分层时间风险：用短阈值保护高时效任务，用队列级聚合捕捉系统性故障，并用 inhibition 控制告警扩散。" and make the strongest evidence-based judgment you can.

## Summary

建议对 pending parked workflows 实施双触发机制：按单个 workflow 的停滞时长告警，并按 queue、task_id、blocker_type 识别队列级累积风险。默认阈值为 P0 15m/30m、P1 30m/60m、P2 2h/4h、P3 24h/48h；队列级触发条件为同组停滞数量 >= 5，或停滞占比 >= 20% 且数量至少为 3，并持续 15m。单体 warning 进 ticket，critical page owner/on-call，队列级 page platform on-call，并抑制重复单体告警。

## Report

# 卡片 01 研究报告：pending parked workflows 的停滞阈值与告警机制

## 角色与立场

作为 Chief Risk Officer，我把 pending parked workflow 视为一种运营风险敞口：它未必已经失败，但随着未恢复时间拉长，损失分布会变得越来越不对称。由于目前没有已完成的前序卡片，本报告是初始建议。我支持先上线分层停滞阈值，再用历史 parked-workflow 时长分布对阈值和告警级别做压力测试。

磁盘中未找到 `whiteboard/d95f8bce-fc25-4964-af06-b82f8b488ad2/session-brief.md` 和 `whiteboard/d95f8bce-fc25-4964-af06-b82f8b488ad2/analyst-catalog.json`，因此本报告以用户提示中提供的 session snapshot 作为事实来源。

## 核心判断

应实施双触发告警：一个触发器识别单个 workflow 的停滞，另一个触发器识别整体队列层面的累积。默认生产阈值建议如下：

| Workflow 类别 | Warning / ticket | Critical / page | 确认窗口 |
|---|---:|---:|---:|
| `P0` 用户可见或市场窗口阻塞 | 停滞 15 分钟 | 停滞 30 分钟或 `expected_resume_by + 15m` | 2 个评估周期，至少 5 分钟 |
| `P1` 盘中、盘前、收盘或当日发布任务 | 停滞 30 分钟 | 停滞 60 分钟或 `expected_resume_by + 30m` | 10 分钟 |
| `P2` 每日调度诊断 / 标准研究 workflow | 停滞 2 小时 | 停滞 4 小时或错过本地业务日截止时间 | 15 分钟 |
| `P3` 每周 / 低紧急度异步研究 | 停滞 24 小时 | 停滞 48 小时 | 30 分钟 |

队列层面的升级条件应为：同一 `queue`、`task_id` 或 `blocker_type` 下，达到 warning 阈值的 workflow 数量 `>= 5` 且持续 `15 分钟`；或该分组内 `>= 20%` 的当前 parked workflows 已停滞，且停滞数量至少为 `3`。这能识别系统性队列饥饿、凭证过期、外部依赖故障或调度器缺陷，即使单个 workflow 本身看起来并不紧急。

## 为什么这个阈值适合作为起点

核心风险不是 parked workflow 的存在。Parked 状态在等待人工响应、外部 API、市场数据刷新、限流重置或计划恢复时是合理的。真正的风险是无人察觉的时间衰减：pending 状态越久，越可能错过时效性决策窗口、违反内部 SLA，或静默阻塞下游工作。

因此阈值应使用“距离最后一次进展”的时间，而不是只看创建时间。诊断逻辑应计算：

`stagnant_age_seconds = now - max(parked_at, last_progress_at, last_heartbeat_at)`

然后把它与 workflow 类别阈值和显式 `expected_resume_by` 比较。如果存在 `expected_resume_by`，它应优先于通用阈值，因为该 workflow 已经声明了预期恢复时间。

这一设计遵循三条 SRE 原则。第一，告警应等待条件持续成立后再触发；Google SRE 指出，告警规则通常要求条件至少持续两个评估周期，以减少抖动告警。[^1] 第二，Prometheus 风格的告警支持 `for` 持续时间，用于 pending 到 firing 的确认语义，也支持 `keep_firing_for` 来降低瞬时数据丢失导致的错误恢复。[^2] 第三，告警扩散应通过 grouping、deduplication、inhibition 和 silences 控制，Alertmanager 明确提供这些能力。[^3]

## 告警机制

机制应分为四层实施。

1. **状态埋点。** 每个 parked workflow 必须输出结构化字段：`workflow_id`、`run_id`、`task_id`、`owner_analyst_id`、`priority`、`state`、`parked_at`、`last_progress_at`、`last_heartbeat_at`、`expected_resume_by`、`blocker_type`、`dependency`、`resume_attempts` 和 `runbook_url`。

2. **单个 workflow 停滞规则。** 当 workflow 保持 `state="parked_pending"`，且 `stagnant_age_seconds` 超过其类别阈值时，即判定为停滞。`warning` 告警进入 ticket 或 workflow inbox。`critical` 告警根据 `blocker_type` 路由到 owner on-call 或 platform on-call。

3. **队列累积规则。** 按 `queue`、`task_id` 和 `blocker_type` 分组。如果停滞数量 `>= 5`，或停滞占比 `>= 20%` 且最小数量为 `3`，并持续 `15 分钟`，则触发聚合 page。这可以防止低优先级但大范围的 parking 缺陷长期不可见。

4. **通知治理。** 按 `alertname`、`queue`、`task_id` 和 `blocker_type` 做 grouping；当同一分组的 fleet-level alert 已触发时，抑制单个 workflow 告警；维护窗口使用 silence；每条通知必须包含 runbook 链接、受影响数量、最老 workflow 时长、owner、dependency 和下一步安全动作。

## 建议规则草案

具体语法取决于指标栈，但以下 Prometheus 风格规则表达了目标行为：

```yaml
groups:
  - name: parked-workflow-stagnation
    rules:
      - alert: ParkedWorkflowStagnationWarning
        expr: workflow_parked_stagnant_age_seconds{state="parked_pending"} > workflow_parked_warning_threshold_seconds
        for: 10m
        labels:
          severity: ticket
        annotations:
          summary: "Parked workflow {{ $labels.workflow_id }} stagnant"
          runbook: "{{ $labels.runbook_url }}"

      - alert: ParkedWorkflowStagnationCritical
        expr: workflow_parked_stagnant_age_seconds{state="parked_pending"} > workflow_parked_critical_threshold_seconds
        for: 15m
        keep_firing_for: 30m
        labels:
          severity: page
        annotations:
          summary: "Critical parked workflow stagnation in {{ $labels.task_id }}"
          runbook: "{{ $labels.runbook_url }}"

      - alert: ParkedWorkflowFleetStagnation
        expr: |
          sum by (queue, task_id, blocker_type) (workflow_parked_stagnant_warning == 1) >= 5
          or
          (
            sum by (queue, task_id, blocker_type) (workflow_parked_stagnant_warning == 1)
            /
            sum by (queue, task_id, blocker_type) (workflow_parked_pending == 1) >= 0.20
            and
            sum by (queue, task_id, blocker_type) (workflow_parked_stagnant_warning == 1) >= 3
          )
        for: 15m
        labels:
          severity: page
        annotations:
          summary: "Fleet-level parked workflow stagnation for {{ $labels.task_id }}"
```

关键实现细节是：`workflow_parked_warning_threshold_seconds` 和 `workflow_parked_critical_threshold_seconds` 应从 workflow 元数据派生，而不是在每条规则里重复硬编码。这样政策集中，后续校准更安全。

## 尾部风险控制

最大的漏报场景是低流量但高重要性的 workflow：它可能永远不会积累足够多的同类 workflow 来触发队列级告警。因此 `P0` 和 `P1` 必须有较短的单体阈值，并且由 `expected_resume_by` 覆盖通用阈值。

最大的误报场景是已知外部依赖故障或计划维护窗口。因此告警路径必须支持 inhibition 和 silences，而不是对每个 parked workflow 单独通知。Prometheus 文档也指出，简单规则之外还需要一层机制处理摘要、通知限速、静默和告警依赖；在 Prometheus 生态中，这个角色由 Alertmanager 承担。[^2]

最大的模型风险是对所有 workflow 类型使用任意固定阈值。第一版生产发布可以采用上表，但第二版应从观测分布中校准阈值：按 `task_id`、`priority` 和 `blocker_type` 计算 parked duration 的 `p50`、`p90`、`p95` 和 `p99`。只有在提升检测能力且不造成不可管理的告警疲劳时，规则才应被提升为正式策略。Google SRE 的 SLO 告警原则也支持这种优先级拆分：快速消耗预算的问题适合 page，慢速消耗的问题更适合 ticket。[^4]

## 最小仪表盘

仪表盘至少应展示：

| 指标 | 用途 |
|---|---|
| 按 `queue`、`task_id`、`priority`、`blocker_type` 分组的 `parked_pending_count` | 识别集中度风险 |
| 各分组最老的 `stagnant_age_seconds` | 识别尾部敞口 |
| parked age 的 `p50`、`p90`、`p95`、`p99` | 校准阈值并观察分布漂移 |
| 超过 `expected_resume_by` 的数量 | 识别显式恢复承诺是否被错过 |
| `resume_attempts` 和 failure reason | 区分外部等待与重试循环 |
| 按 severity 统计的告警率 | 控制运营噪音 |

## 决策

建议立即采用分层阈值表，其中 `P2` 每日 workflow 默认 `2h` warning、`4h` critical；并要求所有 parking 原因可确定的 workflow 都必须携带 `expected_resume_by`。单个 workflow 的 warning 路由到 ticket，单个 workflow 的 critical 路由到 owner/on-call，队列层面的聚合告警路由到 platform on-call，并在聚合告警触发时抑制对应的单体告警。

下一位最合适的分析师是 `chief-quant [specialist]`，不是 reviewer，因为剩余开放问题是实证校准：用历史 parked workflow 时长回测 `15m / 30m / 60m / 2h / 4h / 24h / 48h` 阈值，估计告警量，并测试误报与漏报之间的权衡。

## 引用

[^1]: Google SRE, "Time Series Database for Monitoring and Alerting"，尤其是关于持续条件、告警上下文信息和 Alertmanager 路由的讨论：https://sre.google/sre-book/practical-alerting/
[^2]: Prometheus documentation, "Alerting rules"，包括 `for`、pending/firing 状态、`keep_firing_for`、annotations 以及通知层需求：https://prometheus.io/docs/prometheus/3.5/configuration/alerting_rules/
[^3]: Prometheus documentation, "Alertmanager"，包括 grouping、inhibition、silences 和 high availability：https://prometheus.io/docs/alerting/latest/alertmanager/
[^4]: Google SRE Workbook, "Alerting on SLOs"，尤其是 multi-window severity、paging versus ticketing 和 alert suppression：https://sre.google/workbook/alerting-on-slos/

## Follow-up

- Analyst: chief-quant
- Topic: 历史 parked workflow 时长分布与阈值回测
- Question: 用历史数据回测 `15m / 30m / 60m / 2h / 4h / 24h / 48h` 阈值时，各 priority、task_id、blocker_type 的误报率、漏报率和预期告警量是多少？
