---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Recent analyst reports

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Recent analyst reports

Window anchor: 2026-05-05 (Asia/Singapore) · since_hours=14 · lang=zh
Files included: 3 of 3 candidate(s) · ~4096 chars
Analyst filter: (none — all analysts)

Each section below is a clipped excerpt of one archived deliverable.
Sources are sorted by archive time, newest first. Use this as your
authoritative "what other analysts said" feed.

---
## data-scientist · data_ingest_premarket · data_ingest_summary.md

- analyst: `data-scientist`
- task: `data_ingest_premarket`
- workflow: `analyst:data-scientist:data_ingest_premarket`
- work_date: 2026-05-05
- archived_at: 2026-05-04T23:08:14.719Z
- session: `0e1e97e6-348f-4cc6-a39c-76c3dc31a754`

# 共享数据采集摘要 2026-05-05

## markets_overnight
- 字段总数 13、空值 0、confidence: high

## markets_close_cn
- 字段总数 5、空值 0、confidence: high

## 失败 / 修复
- brent=empty(N/D)，已用 Investing.com 搜索片段修复为 113.53
- dxy=implausible(61.3845)，已用 Stooq dx.f 修复为 98.34
- ust10y=empty(N/D)，已用 Greystone 搜索片段修复为 4.41
- vix=empty(N/D)，已用 Investing.com 搜索片段修复为 18.25
- 既有引用文件缺失：markets_overnight.json、markets_close_cn.json、data_ingest_summary.md；本轮已重新采集并生成。

---

## institute-diagnostician · institute_diagnosis · diagnosis.md

- analyst: `institute-diagnostician`
- task: `institute_diagnosis`
- workflow: `analyst:institute-diagnostician:institute_diagnosis`
- work_date: 2026-05-05
- archived_at: 2026-05-04T17:38:01.924Z
- session: `1bf9cac4-b07e-477d-8203-1e3ebe2bbcb4`

# 研究院每日诊断报告 — 2026-05-05

*诊断师生成时间: 2026-05-05 · 数据窗口: 2026-05-04T16:01:08Z（过去24小时）*

---

## 1. 一句话总览

研究院今日整体运行稳定，调度流水线零失败、零救援标记，但**积压待处理运行数（26个）超过窗口内已完成数（21个）**，同时 `chief-risk` 在白板与邮箱双渠道均出现显著超配，提示 QA 路由存在过度偏向审查员的风险，状态评级：**观察列表（Watch-listed）**。

---

## 2. 关键指标

| 指标 | 数值 | 备注 |
|---|---:|---|
| 托管工作流总数 | 215 | — |
| 窗口内运行数 | 21 | 全部 completed，完成率 100% |
| 待处理运行数（parked） | **26** | 超过已完成数，需关注 |
| 窗口内邮箱线程 | 49 | 全部为自动移交（auto-handoff） |
| 待处理临时派发 | 0 | 无积压 |
| 白板会话 | 23 | 共 165 张卡片 |
| 白板卡片（running） | 34 | 占全部卡片 20.6% |
| 白板卡片（failed） | 1 | — |
| 执行档案条目 | 0 | failed=0, salvage_markers=0 |
| 窗口内事件总数 | 181 | — |

---

## 3. 异常与模式

### 3.1 待处理运行积压（26 pending > 21 completed）
- **观察**：窗口内已完成运行 21 个，但"parked/awaiting terminal"的待处理运行达 **26** 个，二者比值 1.24×。
- **意义**：积压量超过当日产出，若这批 parked 任务已超过 2 小时未推进至终态，可能指向调度卡死或依赖链断裂。无法从快照直接判断积压时长，需运营员核查时间戳。
- **置信度**：中（数据可见，但无时间戳细节）

### 3.2 `chief-risk` 在两条渠道均过度接收路由
- **观察**：
  - 邮箱自动移交：`chief-risk` 接收 **4 次**，占总量 49 的 8.2%，与一线分析师 tmt-analyst（6）、chief-strategist（6）、factor-analyst（5）同量级。
  - 白板移交：`chief-risk` 接收 **7 次**，是白板中接收量最大的单一角色之一，与 energy-analyst（11）、global-macro（9）、industrials-analyst（9）、utilities-analyst（8）在同一数量级，远高于审查员正常比例。
- **意义**：`chief-risk` 是风控审查员角色，高频接收工作移交暗示 QA 步骤提示词存在过度路由至审查员的问题，可能导致合规/风控角色的工作负载过重，并拉长研究流水线的审批链路。
- **置信度**：高

### 3.3 白板卡片中 34 张仍处于 `running` 状态
- **观察**：165 张卡片中，completed=130，running=**34**（占 20.6%），failed=1。
- **意义**：快照生成时仍有 1/5 的卡片在运行中，若这批卡片在正常时间段内将完成则属正常；但若部分已运行超时，则为潜在卡死。Events 中 `whiteboard.card.completed=138`（高于 completed card count 130），可能存在重复事件或卡片多次完成的情况。
- **置信度**：中

### 3.4 `sentiment-analyst` 发件高度集中
- **观察**：邮箱自动移交发件人中，`sentiment-analyst` 贡献 **14/49**（28.6%），`convertible-analyst` 贡献 9/49（18.4%），前二者合计占 47%。
- **意义**：单一发件人占近三成，若 sentiment-analyst 的下游分析师（tmt-analyst、factor-analyst等）处理速度跟不上，将形成瓶颈。目前下游无明显积

[…truncated; original 4180 chars]

---

## institute-diagnostician · institute_diagnosis · fleet_health.md

- analyst: `institute-diagnostician`
- task: `institute_diagnosis`
- workflow: `analyst:institute-diagnostician:institute_diagnosis`
- work_date: 2026-05-05
- archived_at: 2026-05-04T17:38:01.924Z
- session: `1bf9cac4-b07e-477d-8203-1e3ebe2bbcb4`

# Fleet Health Snapshot — 2026-05-05

*Scope: daily (last 24h) · generated_at: 2026-05-04T16:01:08.141Z*

---

## At a glance

- Managed workflows: **215**
- Runs in window: **21** (completed=21)
- Pending runs (parked, awaiting terminal): **26**
- Mailbox threads in window: **49** (auto-handoffs: 49)
- Pending adhoc dispatches (parked, brain task running): **0**
- Whiteboard sessions in window: **23** (cards: 165)
- Events in window: **181**
- Execution-archive entries: **0** (failed: 0, salvage markers: 0)

---

## Workflow runs (window)

### By status

| status | count |
|---|---:|
| completed | 21 |

### By task_key

| task_key | count |
|---|---:|
| institute_diagnosis | 1 |
| topic_pitch_overnight_sentiment | 1 |
| morning_macro_brief | 1 |
| topic_pitch_morning_thematic | 1 |
| topic_pitch_close_sentiment | 1 |
| style_rotation_signal | 1 |
| market_structure_daily | 1 |
| daily_technical_scan | 1 |
| daily_sentiment_index | 1 |
| crowding_alert | 1 |
| vol_surface_daily | 1 |
| options_flow_analysis | 1 |
| basis_trade_monitor | 1 |
| cb_valuation_scan | 1 |
| premium_compression_alert | 1 |
| forced_redemption_watch | 1 |
| topic_pitch_postclose | 1 |
| (none) | 1 |
| topic_pitch_evening_social | 1 |
| topic_pitch_evening_editor | 1 |

### By workflow_kind

| kind | count |
|---|---:|
| routine | 17 |
| (none) | 3 |
| global | 1 |

---

## Mailbox (window)

### Thread status

| thread status | count |
|---|---:|
| completed | 48 |
| running | 1 |

### Dispatch status

| dispatch status | count |
|---|---:|
| completed | 48 |
| running | 1 |

### Auto-handoff senders

| sender | count |
|---|---:|
| sentiment-analyst | 14 |
| convertible-analyst | 9 |
| derivatives-strategist | 6 |
| thematic-researcher | 4 |
| chief-strategist | 4 |
| altdata-analyst | 4 |
| da

[…truncated; original 3307 chars]
