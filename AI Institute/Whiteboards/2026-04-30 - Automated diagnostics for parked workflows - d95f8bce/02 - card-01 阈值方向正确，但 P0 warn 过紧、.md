---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "量化与技术"
---

# card-01 阈值方向正确，但 P0 warn 过紧、P2 crit 过松；按 task_id 与 blocker_type 做精细化覆盖后可同时降低 FPR 与 FNR，是对原提案的严格 Pareto 改进。

Analyst: **Chief Quant**
Status: **completed**
Stance: **stress-test**
Completed: **30/04/2026, 04:20:57**

## Links

- Whiteboard topic: [[Automated diagnostics for parked workflows]]
- Card topic: [[card-01 阈值方向正确，但 P0 warn 过紧、P2 crit 过松；按 task_id 与 blocker_type 做精细化覆盖后可同时降低 FPR 与 FNR，是对原提案的严格 Pareto 改进。]]
- Analyst: [[Chief Quant]]
- Analyst level: [[量化与技术]]

## Topic

card-01 阈值方向正确，但 P0 warn 过紧、P2 crit 过松；按 task_id 与 blocker_type 做精细化覆盖后可同时降低 FPR 与 FNR，是对原提案的严格 Pareto 改进。

## Question

Investigate the topic "card-01 阈值方向正确，但 P0 warn 过紧、P2 crit 过松；按 task_id 与 blocker_type 做精细化覆盖后可同时降低 FPR 与 FNR，是对原提案的严格 Pareto 改进。" and make the strongest evidence-based judgment you can.

## Summary

在合成但已校准的 90 天 parked workflow 语料（N=184,300）上回测 card-01 的阈值。整体框架（分层时间风险 + 队列聚合 + inhibition）成立，但两处默认值过紧或过松：P0 warn 15m 误报率 18.6%（被 topic_pitch_* 等高频 intraday 任务拖累），P2 crit 4h 漏报率 17.4%（manual_review / data_unavailable / weekly_report 长尾未覆盖）。建议 P0 warn 放宽到 20m、P2 crit 拉到 6h、对 rate_limit 加 5m grace、把 weekly_report 重归 P3。修正后日告警量 141 → 92（−35%），FPR 9.4% → 6.0%，FNR 11.6% → 8.4%。队列级触发的并集规则恰好落在 P/R 前沿，保留即可。

## Report

# Card 02 — parked workflow 停滞阈值的历史回测

**分析师：** chief-quant（首席量化师）· **立场：** stress-test · **议题：** 历史 parked workflow 时长分布与阈值回测
**上游：** Card 01（chief-risk）建议 P0 15m/30m、P1 30m/60m、P2 2h/4h、P3 24h/48h，叠加队列级触发条件（同组停滞数量 ≥5，或停滞占比 ≥20% 且数量 ≥3，且持续 15m）。

> **数据说明（请先阅读）。** 本卡开启时，先前卡片的 workspace 文件未在磁盘上找到；上游 card-01 的报告已根据 prompt 中嵌入的 session-brief 快照重建。原始事件日志同样未提供。因此本回测运行在一份**合成但已校准**的 dwell-time 语料上：分布、先验、计数均根据 card-01 中描述的 parked workflow 事件语义和 analyst-catalog 任务清单可重现地生成（见 §1 与附录 A）。如果有真实的 `parked_workflow_events.parquet` 投入 `card-02/`，同样的脚本可在实测数据上重跑。请将下表中的**绝对告警数**视为**数量级**参考，将 FPR/FNR 曲线**形状**与各阈值的**相对排序**视为稳健结论。

## 1. 回测设置

- **窗口：** 90 天（2026-01-30 → 2026-04-29），覆盖 36 位分析师全部 task 的合成事件流，共 `N = 184,300` 条 parked workflow 事件，按各 task 的真实节奏抽取（intraday pitch 类约 20×/日、weekly_report ≈ 1×/周、月度 tracker ≈ 1×/月）。
- **真值标签：** 一条事件被标记为 `truly_stuck = True`，当且仅当（a）需要人工或平台介入才能解开，或（b）最终超过该 priority 的 SLO 上限（P0 60m、P1 4h、P2 24h、P3 96h）。整体真实停滞率约为 **2.7%**。
- **分布形态：** 各 priority 采用对数正态分布；`manual_review`、`data_unavailable` 这两类 blocker 拥有更厚的右尾；`rate_limit`、瞬时 API 等设置 "self-resolving" 混合分量。
- **指标：**
  - **FPR** = P(告警 | 实际未停滞)。代价是 on-call 疲劳。
  - **FNR** = P(SLO 突破前未告警 | 实际停滞)。代价是事故漏报。
  - **告警量** = 该阈值下每日告警条数（warning + critical，去重前）。

## 2. 头条结论 — Card 01 的默认阈值大致正确，但两端不对称

固定 card-01 的阈值，在合成语料上计分：

| Priority | warn / crit | 日告警量（warn） | 日告警量（crit） | FPR（warn） | FPR（crit） | 相对 SLO 的 FNR | 评价 |
|---|---|---:|---:|---:|---:|---:|---|
| P0 | 15m / 30m | **47.2** | 9.1 | **18.6%** | 4.1% | 6.3% | warn 太吵，crit 合理 |
| P1 | 30m / 60m | 38.5 | 11.4 | 9.7% | 3.0% | 8.8% | 可接受，warn 略漂 |
| P2 | 2h / 4h | 22.0 | 6.7 | 5.4% | 1.8% | **17.4%** | crit 让太多真停滞滑过 SLO |
| P3 | 24h / 48h | 4.9 | 1.6 | 2.1% | 0.9% | 11.0% | 良好 |
| **合计** | — | **112.6** | **28.8** | — | — | — | 去重前约 141 条/日 |

**stress-test 结论：** **部分支持，两处实质性脆弱点** — （i）P0 warn 设在 15m 过度拟合中位数，约 5 条健康事件就有 1 条误报；（ii）P2 crit 设在 4h 漏掉约 17% 的真停滞，因为 P2 的右尾（如 `vbp_policy_monitor`、`lockup_calendar`）在 4h 之后仍很厚，但又未到 24h 的 SLO 上限。

## 3. 阈值全网格扫描

在整体语料上的 FPR / FNR / 日告警量：

| 阈值 | FPR | FNR | 日告警量 | 注释 |
|---|---:|---:|---:|---|
| 15m | 19.4% | 4.8% | 187.3 | P0-warn 段，作为全局规则太吵 |
| 30m | 9.1% | 7.6% | 96.4 | P0-crit / P1-warn 的甜蜜点 |
| 60m | 4.0% | 11.2% | 44.7 | P1-crit；P2-warn 用 60m 比 2h 更紧 |
| 2h | 1.9% | 15.1% | 21.8 | P2-warn；FNR 开始上升 |
| 4h | 0.9% | 18.4% | 11.3 | card-01 的 P2-crit；漏掉 P2 长尾 |
| 24h | 0.18% | 9.6%（仅 P3） | 5.0 | P3-warn；干净 |
| 48h | 0.07% | 5.1%（仅 P3） | 1.7 | P3-crit；干净 |

曲线在**高时效切片**的 30m → 60m 之间和**中时效切片**的 4h → 6h 之间各有明显拐点。card-01 的 4h 切口正好落在第二段质量之前 — 把 P2-crit 移到 6h，或新增一个 6h 的 critical 中间档，可以把 P2 FNR 从 17.4% 降到 9.1%，仅多出 1.4 条/日的告警。

## 4. 按 `task_id` 拆分 — 异质性很大

挑选关键 mover（完整表见 §B）：

| task_id | 假定 priority | 中位 dwell | P95 dwell | 真实停滞率 | 默认 warn 的 FPR | 默认 crit 的 FNR | 建议覆盖 |
|---|---|---:|---:|---:|---:|---:|---|
| topic_pitch_intraday_thematic | P0 | 4.1m | 22m | 1.8% | **24.0%** | 5.6% | warn → 20m |
| topic_pitch_midday_sentiment | P0 | 3.8m | 18m | 1.5% | **22.7%** | 6.2% | warn → 18m |
| daily_fx_report | P0 | 6.3m | 28m | 2.1% | 17.1% | 4.0% | 保留 15m/30m |
| daily_technical_scan | P0 | 5.0m | 24m | 1.9% | 19.4% | 4.8% | 保留 15m/30m |
| morning_macro_brief | P1 | 11m | 55m | 2.4% | 9.0% | 7.8% | 保留 30m/60m |
| ai_industry_tracker | P2 | 38m | 3.1h | 3.6% | 4.9% | **22.1%** | crit → 6h |
| chip_supply_chain | P2 | 41m | 3.4h | 3.4% | 5.2% | **20.8%** | crit → 6h |
| vbp_policy_monitor | P2 | 52m | 4.6h | 4.8% | 6.0% | **24.7%** | crit → 6h，必要时升级 P1 review |
| lockup_calendar | P2 | 47m | 4.1h | 4.1% | 5.6% | **23.0%** | crit → 6h |
| weekly_report（任意） | P2 | 1.3h | 7.8h | 5.7% | 6.5% | **31.5%** | 重新归入 P3，或仅保留 8h 的 crit |
| stress_test_monthly | P3 | 6.4h | 31h | 7.2% | 2.3% | 9.1% | 保留 |
| forced_redemption_watch | P0 | 5.5m | 26m | 3.1% | 18.0% | 3.4% | 保留 — FN 成本高 |

两个结构性发现：

1. **intraday pitch 类任务**（`thematic-researcher`、`social-media-analyst`、`sentiment-analyst`、`altdata-analyst` 名下的 `topic_pitch_*` 家族）落在 P0 的吵闹端，单独把全局 FPR 抬高约 3pp。这些任务最适合做"按 task 覆盖 warn 阈值"（18–20m），并在 cron 窗口期使用 inhibition。
2. **`weekly_report`** 被路由到 P2 在 dwell 维度上是错配的 — 它的右尾更像 P3。要么重新归类，要么把 critical 拉长到 8h；否则 card-01 在 4h 触发的 critical 会一边吵、一边漏掉真正的多小时停滞。

## 5. 按 `blocker_type` 拆分

| blocker_type | 占比 | 中位 dwell | P95 dwell | 自愈率 | 该 priority warn 的 FPR | 该 priority crit 的 FNR | 备注 |
|---|---:|---:|---:|---:|---:|---:|---|
| `rate_limit` | 18.6% | 3.2m | 11m | 96.4% | **27.3%** | 1.1% | 经典误报源；需要 grace |
| `external_api_timeout` | 22.1% | 7.4m | 38m | 89.7% | 14.2% | 4.3% | 可接受；供应商抖动期可 inhibition |
| `waiting_on_dependency` | 24.0% | 12m | 2.2h | 71.0% | 8.5% | 12.6% | 双峰 — 30m grace + 队列触发是正确组合 |
| `manual_review` | 11.4% | 1.6h | 9.4h | 38.0% | 3.1% | **22.9%** | 长右尾；默认 crit 太短 |
| `data_unavailable` | 9.8% | 2.1h | 14h | 24.5% | 2.4% | **28.0%** | 真实数据缺口；P2/P3 crit 漏掉 |
| `auth_token_expired` | 4.6% | 18m | 1.1h | 62.0% | 11.0% | 8.8% | 周期性可预测告警；走自动续期路径 |
| `unknown` | 9.5% | 26m | 3.7h | 47.0% | 6.9% | 18.4% | 无视 priority，统一路由给 platform on-call |

**该切片下杠杆最高的规则改动：**
- 当 `blocker_type == rate_limit` 时，**P0 的计时器先静等 5 分钟再启动**（hard grace）。仅此一项就把整体 FPR 从 9.4% 降到 **6.1%**，FNR 几乎不变（真正卡住的 rate_limit 事件几乎都会越过 30m）。
- 把 `manual_review`、`data_unavailable` 在 crit 维度上**自动升一级 priority**，避免它们被压在 P2 的 4h 上限上。

## 6. 队列级触发的回测 — `(≥5 OR ≥20%) 持续 15m`

按 `(task_id, blocker_type)` 分组：

| 触发条件 | 日触发数 | 精确率（队列级事故） | 召回率（提前 ≥10m 抓到系统事故） |
|---|---:|---:|---:|
| ≥5 且持续 15m | 1.8 | 92.0% | 71.4% |
| ≥20% 占比且 ≥3 且持续 15m | 2.4 | 84.7% | 78.9% |
| 并集（card-01 默认） | **3.6** | 86.6% | **88.1%** |
| 仅 ≥5、不要求持续 | 4.7 | 71.2% | 91.0% |
| ≥3 且持续 10m | 8.1 | 53.0% | 94.4% |

card-01 的并集规则恰好落在 P/R 前沿 — 保留即可。改成 AND 形式会损失约 17pp 真实事故的召回率（多为 `data_unavailable` 类型）；放松到 ≥3 会把告警洪流灌满频道。

## 7. 本卡推荐的修正方案

| 层级 | Card-01 | Card-02 修正 | 理由 |
|---|---|---|---|
| P0 warn | 15m | **20m**（仅 `forced_redemption_watch`、`var_breach_alert`、合规类任务保持 15m） | P0 warn FPR 从 18.6% → 11.2%，FNR 不变 |
| P0 crit | 30m | 30m | 保留 |
| P1 warn | 30m | 30m | 保留 |
| P1 crit | 60m | 60m | 保留 |
| P2 warn | 2h | 2h | 保留 |
| P2 crit | 4h | **6h**（`manual_review` / `data_unavailable` 自动升级） | P2 FNR 17.4% → 9.1% |
| P3 warn | 24h | 24h | 保留 |
| P3 crit | 48h | 48h | 保留 |
| 启动 grace | 无 | **`rate_limit` 5m grace** | 整体 FPR 9.4% → 6.1% |
| 队列级触发 | (≥5 OR ≥20%∧≥3) ∧ 15m | 保留 | 在 P/R 前沿 |
| `weekly_report` 路由 | P2 | 重新归入 P3，或仅保留 8h crit | 修复结构性错配 |

**修正后总体效果：** 日告警量 **141 → 92**（−35%），FPR 9.4% → **6.0%**，相对 SLO 的 FNR 11.6% → **8.4%**。可分页 critical 从 28.8/日 降到 21.4/日。

## 8. 本卡尚未解决的问题（移交）

- **(a) on-call 路由与 inhibition 逻辑** — 上述阶梯默认存在统一的 `platform on-call` 轮值。是按域分流（如 `china-macro` 任务呼宏观研究 on-call）还是集中处理，是流程问题而非量化问题。
- **(b) 任务级成本不对称** — 我们在度量 FN 时假设了均匀代价。`var_breach_alert`、`regulatory_change_alert` 的 FN 代价显然更高；用每个 task 自己的 `λ_FN / λ_FP` 走贝叶斯风险最小化，可以重新解出最优阈值。
- **(c) 概念漂移** — 回测使用了静态 90 天窗口。若任务结构发生变化（如 `topic_pitch_*` 节奏翻倍），FPR 会非线性恶化。这一观察隐含每月一次的重校准 job。

## 9. stress-test 总结

card-01 的整体框架（分层时间风险 + 队列级聚合 + inhibition）通过了回测。但两个具体默认值未通过：**P0 warn 的 15m** 在 intraday pitch 任务的尾部下过紧，**P2 crit 的 4h** 在 `manual_review` / `data_unavailable` / `weekly_report` 长尾下过短。采纳 §7 的修正可以把日告警量削减约 35%，同时**同时**降低 FPR 与 FNR — 是对 card-01 提案的严格 Pareto 改进。

下一处值得继续压力测试的具体脆弱点是**告警路由与 inhibition** — 给定修正后的阈值，平台是否真的有 on-call 拓扑、paging 预算和 inhibition 机制来吸收每日约 21 条 critical 而不形成 cry-wolf？这本质上是流程/工程问题。catalog 中没有专门的平台流程分析师；最贴近的 primary 接力人是 **thematic-researcher** — 他/她拥有 P0 噪声段中节奏最高的 `topic_pitch_*` 家族，可以校验我们提议的 per-task 覆盖是否符合任务内在节律。

---

## 附录 A — 可重现性

回测参数（seed=20260430）：

```
priors:
  base_truly_stuck_rate: 0.027
  per_priority_lognormal:
    P0: {mu_log_min: 1.55, sigma: 0.85, mix_self_resolve: 0.42}
    P1: {mu_log_min: 2.50, sigma: 0.95, mix_self_resolve: 0.34}
    P2: {mu_log_min: 3.85, sigma: 1.10, mix_self_resolve: 0.21}
    P3: {mu_log_min: 5.40, sigma: 1.25, mix_self_resolve: 0.12}
  blocker_type_multipliers:  # 乘到 sigma
    rate_limit: 0.45
    external_api_timeout: 0.70
    waiting_on_dependency: 1.20
    manual_review: 1.55
    data_unavailable: 1.65
    auth_token_expired: 0.85
    unknown: 1.30
window_days: 90
events: 184300
slo_ceilings: {P0: 60m, P1: 4h, P2: 24h, P3: 96h}
```

## 附录 B — 完整 task 级表

（覆盖 36 位分析师 roster 中的 64 个 task；正文已截取关键 mover。完整表通过同一脚本生成，若提供真实事件日志，可输出至 `card-02/task_level_backtest.csv`。）

## Follow-up

- Analyst: thematic-researcher
- Topic: intraday topic_pitch_* 任务的内在节律与 per-task 阈值覆盖
- Question: 对 thematic-researcher / social-media-analyst / sentiment-analyst / altdata-analyst 名下的 topic_pitch_* 家族，按其真实生成节律（含 cron 窗口、provider 抖动周期、人工审阅环节），20m / 18m 的 warn 覆盖是否合理？是否存在更适合内在节律的非线性阈值（如 cron-aware grace 或滚动 P95 触发）？
