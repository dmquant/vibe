---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "综合编审"
---

# [auto-handoff] Wind/FactSet/Choice consensus estimates

Status: **completed**
Dispatch status: **completed**
Sender: **Factor Analyst**
Recipient: **Data Scientist**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] Wind FactSet Choice consensus estimates]]
- Sender: [[Factor Analyst]]
- Recipient: [[Data Scientist]]
- Analyst level: [[综合编审]]

## Latest body

致 因子研究员：

协同任务已完成。执行方为 数据科学家。
模式: adhoc
会话: 90cb547a-3fb9-4fb6-bd1d-08406d0ba22b

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上��交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Data Scientist (��据科学家).
# Expertise
Owns the institute's shared-data layer: ingest authoritative market / macro / flow numerics into shared-data/<date>/<topic>.json daily; audit how analysts consume data; flag misuse; propose catalog additions. Anchors the INPUT side of report quality, complementing QA Manager (OUTPUT audit) and Institute Diagn

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] Wind/FactSet/Choice consensus estimates / replied

From: Factor Analyst
To: Data Scientist
Created: 10/05/2026, 05:14:36

Auto-handoff emitted by Factor Analyst after the run of 因子研究员 · 每周研究周报 finished.
Source workflow: analyst:factor-analyst:weekly_report
Source run: 83319568-8444-4c14-a3c5-4bd73ccb2286
Source session: 1198bd87-1946-4e91-bd71-f404397127dd
Priority: normal

--- Requested follow-up ---
Can you obtain Wind/FactSet/Choice consensus estimates and rebuild the earnings surprise cross-section instead of using two-day alpha as a proxy?

### 2. result / sent

From: Data Scientist
To: Factor Analyst
Created: 10/05/2026, 05:20:28

致 因子研究员：

协同任务已完成。执行方为 数据科学家。
模式: adhoc
会话: 90cb547a-3fb9-4fb6-bd1d-08406d0ba22b

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上��交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Data Scientist (��据科学家).
# Expertise
Owns the institute's shared-data layer: ingest authoritative market / macro / flow numerics into shared-data/<date>/<topic>.json daily; audit how analysts consume data; flag misuse; propose catalog additions. Anchors the INPUT side of report quality, complementing QA Manager (OUTPUT audit) and Institute Diagn

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 数据科学家 · [auto-handoff] Wind/FactSet/Choice consensus estimates

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **10/05/2026, 05:14:36**
Completed: **10/05/2026, 05:20:28**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
Data Scientist (数据科学家).
# Expertise
Owns the institute's shared-data layer: ingest authoritative market / macro / flow numerics into shared-data/<date>/<topic>.json daily; audit how analysts consume data; flag misuse; propose catalog additions. Anchors the INPUT side of report quality, complementing QA Manager (OUTPUT audit) and Institute Diagnostician (fleet health)..

# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content (same numbers, same citations, same conclusions, idiomatic English prose).
- You MUST use your file-creation tool (shell, write_file, or your CLI's equivalent) to actually write BOTH files. Printing content as your chat reply alone is NOT acceptable.
- After writing, verify both files exist (e.g. `ls -la handoff_response.md handoff_response.en.md`). Your chat reply must be a single confirmation line in the form: `Wrote handoff_response.md (<bytes> bytes); wrote handoff_response.en.md (<bytes> bytes) — <one-sentence summary>`.
- This step is graded on the presence and content of BOTH files in the workspace. If either is missing, the step is treated as failed regardless of how good the inline content was, and downstream steps will fail.
- Do NOT echo the deliverables' full content in your chat reply. The reply is the confirmation line only; the deliverables live in the files.

# Task
# Incoming coordination request from Factor Analyst
Source workflow: 因子研究员 · 每周研究周报 (analyst:factor-analyst:weekly_report)
Source run: 83319568-8444-4c14-a3c5-4bd73ccb2286

# The question
Can you obtain Wind/FactSet/Choice consensus estimates and rebuild the earnings surprise cross-section instead of using two-day alpha as a proxy?

# Your task
Investigate the question above using your domain expertise. Produce a focused, evidence-backed answer suitable for the requesting analyst's next step. Lead with conclusions; back them with specific data, source citations, and concrete numbers where possible.

# Output Format
- Write BOTH `handoff_response.md` and `handoff_response.en.md` using structured Markdown: clear headings, prioritised conclusions, supporting tables, follow-up items.
- The two files MUST cover the same content, the same numbers, the same citations, and the same conclusions. They are not a translator's literal back-and-forth — they are the same analysis written for different audiences (中文为主读者 vs. English-as-primary readers), idiomatic to each language.
- Re-read the MANDATORY DELIVERABLE section above before responding.

# Output Language Policy
- Follow these instructions (English). Produce the report deliverables in BOTH 简体中文 and English (see the bilingual rule above).
- `handoff_response.md` — fully 简体中文: headings, narrative, bullet points, table cells, in-line annotations.
- `handoff_response.en.md` — fully English: headings, narrative, bullet points, table cells, in-line annotations.
- Keep ticker symbols, English analyst IDs, file paths, code identifiers, raw numeric values, and proper nouns without good Chinese renderings (e.g. "Powell", "DeepSeek V4") verbatim in BOTH files.

# Workspace Robustness
- BEFORE running your task, try to read any files this prompt references (using your workspace-list / read-file tool). If a referenced file is missing because an earlier step failed to write it, do NOT abort. Search the conversation context above for the prior step's full output and use that as the source. State explicitly in your confirmation line which referenced files were missing and reconstructed from context.
- Continue and complete this step's deliverable regardless of upstream file gaps. Always write your own declared output file even if upstream files were missing.

#### Result

# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上��交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Data Scientist (��据科学家).
# Expertise
Owns the institute's shared-data layer: ingest authoritative market / macro / flow numerics into shared-data/<date>/<topic>.json daily; audit how analysts consume data; flag misuse; propose catalog additions. Anchors the INPUT side of report quality, complementing QA Manager (OUTPUT audit) and Institute Diagn


## Attached Markdown

### 1. Mailbox · 数据科学家 · [auto-handoff] Wind/FactSet/Choice consensus estimates

# Conclusions

Anchor date: `2026-05-10`. The conclusion is: **we should rebuild the earnings-surprise cross-section from consensus estimates, and we should not keep using two-day alpha as the earnings-surprise proxy**. Two-day alpha is a price reaction; it blends guidance, call tone, risk appetite, liquidity, and industry spillovers. It can remain as a validation field or market-reaction outcome, but not as a fundamental input.

I cannot directly write proprietary Wind/FactSet/Choice consensus values into `shared-data/2026-05-10/` today: this workspace has no detected `WindPy`, `EmQuantAPI`, `fds`/FactSet SDK, and no environment credentials prefixed with `FACTSET`, `FDS`, `WIND`, `CHOICE`, `EMQUANT`, or `EASTMONEY`. This handoff therefore separates what is feasible from what is executable today; once entitlement is available, the JSON can be regenerated the same day.

Recommended priority: **FactSet PIT Consensus > Wind/Choice consensus > ordinary current consensus snapshots > two-day alpha**. For A-share research, Wind or Choice may provide better local coverage; for cross-market work or clean look-ahead control, FactSet PIT is the cleanest benchmark source.

# Evidence And Availability

| Source | Availability View | Key Evidence | Implication For This Task |
|---|---:|---|---|
| FactSet Estimates / PIT Consensus | High, but requires subscription and API credentials | FactSet Estimates covers 90 countries, 800+ contributors, 20+ years of history, and provides consensus, detail, actuals, and guidance data; the public API/SDK lists `actuals`, `fixed-consensus`, `rolling-consensus`, and `surprise` endpoints; PIT Consensus is a daily point-in-time snapshot designed to remove look-ahead bias.[S1][S2][S3] | Best source for rebuilding the surprise cross-section; we can pull T-1 consensus and actuals directly, and use the vendor surprise endpoint for reconciliation. |
| Wind Client API | Medium-high, but requires terminal/API entitlement | Wind says its Client API supports Python/MATLAB/R/C++/C#/VBA access and covers listed-company fundamentals, equity events, financial results, and earnings forecasts.[S4] | Good production source for A-shares/H-shares; we must confirm whether it exposes pre-announcement point-in-time consensus, analyst count, dispersion, and forecast dates. |
| Choice / Eastmoney Choice | Medium-high, but requires Choice Quant API or terminal entitlement | Choice has a Quant API entry point supporting Python, MATLAB, R, C++, C#, and Java; Eastmoney's public earnings-forecast page labels the data source as Eastmoney Choice, but the public page also carries accuracy/completeness/timeliness disclaimers.[S5][S6] | Useful A-share fallback or cross-check source; the public webpage should not be ingested directly. Use licensed API or terminal export and preserve point-in-time fields. |
| Two-day alpha | Low, outcome variable only | Academic definitions usually define surprise as actual EPS minus the pre-announcement analyst consensus and require split adjustments; FactSet surprise fields also distinguish pre-event consensus, post-event value, surprise amount, surprise percent, and price impact.[S7][S8] | Two-day alpha is a price shock, not earnings surprise; it should be downgraded from the primary input. |

# Recommended Cross-Section Definition

The weekly window ends on the anchor date: `2026-05-04` to `2026-05-10`. For each company with an earnings release, preliminary result, or profit warning inside the window, produce one surprise record.

| Field | Definition |
|---|---|
| `asof_date` | `2026-05-10` |
| `event_date` | Event date for the earnings release, preliminary result, or profit warning; normalized with the local trading calendar. |
| `ticker`, `vendor_id` | Security ticker and vendor primary key, with mapping-table version retained. |
| `period_type`, `fiscal_period` | `quarterly`, `semi`, or `annual`; record fiscal year and fiscal quarter. |
| `metric` | First release should keep `EPS`, `revenue`, and `net_profit_parent`; for A-shares, prioritize net profit attributable to parent and keep EPS in parallel. |
| `actual_value` | Company-reported actual or vendor-standardized actual. |
| `consensus_pre_event` | Point-in-time snapshot from one local trading day before the event, or local midnight before the event; do not use post-announcement revisions. |
| `consensus_mean`, `consensus_median`, `num_estimates`, `dispersion` | Prefer both mean and median; records with `num_estimates < 3` should be down-weighted or flagged as low confidence. |
| `surprise_amount` | `actual_value - consensus_pre_event`. |
| `surprise_pct` | `(actual_value - consensus_pre_event) / abs(consensus_pre_event)`; set to null and flag when the denominator is zero or very small. |
| `sue` | Preferred formula is `(actual - consensus) / dispersion`; if dispersion is unavailable, use the standard deviation of the last 8 same-metric forecast errors. |
| `ret_2d_alpha` | Keep the existing two-day alpha, but rename it to `market_reaction_2d_alpha` and use it only for validation. |
| `source` | `FactSet_PIT`, `Wind`, or `Choice`; record extraction time, API parameters, and raw field names. |

# Production Rules

1. **Point-in-time first**: if FactSet PIT is available, use local-midnight consensus from the day before the event. FactSet states that PIT snapshots include only data available at the calculation date, which prevents later revisions from entering historical samples.[S2]
2. **Event priority**: earnings release > preliminary release > profit warning. If a vendor surprise endpoint uses the first event as the surprise event, keep `surprise_event` so profit warnings and formal earnings are not mixed silently.[S8]
3. **Coverage threshold**: use only `num_estimates >= 3` for the core factor. Keep `1-2` analyst coverage records in the data layer, but bucket or exclude them in analysis. This threshold is consistent with common I/B/E/S research practice.[S7]
4. **A-share metric choice**: prioritize `net_profit_parent` surprise, with EPS as a comparability supplement. A-share sell-side forecasts often center on net profit attributable to parent, while EPS is more sensitive to share-count changes.
5. **Exception handling**: flag splits, bonus issues, currency changes, and accounting-method changes; EPS forecasts and actuals must use the same split-adjusted/diluted basis. Academic work explicitly warns that split adjustments are needed, otherwise surprise can be mechanically distorted.[S7]
6. **Vendor reconciliation**: if FactSet `surprise` is available, reconcile our calculated value against the vendor value; differences above 5bp or one minimum reporting unit should enter `qa_flags`.

# Suggested Data Layout

Target files:

```text
shared-data/2026-05-10/earnings_surprise_cross_section.json
shared-data/2026-05-10/earnings_surprise_cross_section.meta.json
```

Example record:

```json
{
  "asof_date": "2026-05-10",
  "event_window": ["2026-05-04", "2026-05-10"],
  "source": "FactSet_PIT",
  "ticker": "000001.SZ",
  "vendor_id": "PLACEHOLDER",
  "metric": "net_profit_parent",
  "period_type": "quarterly",
  "fiscal_period": "2026Q1",
  "event_date": "2026-04-30",
  "actual_value": null,
  "consensus_pre_event": null,
  "num_estimates": null,
  "dispersion": null,
  "surprise_amount": null,
  "surprise_pct": null,
  "sue": null,
  "market_reaction_2d_alpha": null,
  "qa_flags": ["vendor_credentials_required"]
}
```

# Next Steps For Factor Analyst

1. **Stop using two-day alpha as the primary surprise proxy**; rename the existing field to `market_reaction_2d_alpha` and use it as an outcome, stratification check, or delayed-reaction diagnostic.
2. **Request data entitlement**: for A-share weekly reports, prioritize Wind or Choice API; for cross-market research, prioritize FactSet PIT Consensus. Minimum field list: actual, pre-event consensus mean/median, analyst count, dispersion, forecast date, event date, fiscal period, currency, and unit.
3. **Data-layer delivery**: after credentials are enabled, the shared-data layer should generate `shared-data/2026-05-10/earnings_surprise_cross_section.json`, with `meta.json` recording vendor, API parameters, coverage, missingness, and QA differences.
4. **Research-layer replacement**: Factor Analyst should sort portfolios using `sue` or `surprise_pct`; samples with `num_estimates < 3` or non-empty `qa_flags` should be reported separately and not mixed with high-confidence records.

# Citations

[S1] FactSet, “At a Glance: FactSet Consensus Estimates DataFeed,” lines 171-197, https://insight.factset.com/resources/factset-consensus-estimates-datafeed  
[S2] FactSet, “At a Glance: FactSet Estimates Point-in-Time Consensus,” lines 178-196, https://insight.factset.com/resources/at-a-glance-factset-estimates-point-in-time-consensus  
[S3] `fds.sdk.FactSetEstimates` public SDK page, lines 277-307, https://pypi.org/project/fds.sdk.FactSetEstimates/  
[S4] Wind, “Client API,” lines 12-20 and 72-76, https://www.wind.com.cn/mobile/ClientApi/zh.html  
[S5] Choice, “Choice Data Quant API,” lines 2-8, https://quantapi.eastmoney.com/  
[S6] Eastmoney, “Earnings Forecasts,” lines 236-257, https://data.eastmoney.com/report/profitforecast.jshtml  
[S7] Review of Accounting Studies, “Analyst information precision and small earnings surprises,” lines 653-667 and 303-304, https://link.springer.com/article/10.1007/s11142-016-9370-2  
[S8] FactSet, `F.EstimatesOnDemand` PDF, surprise methodology and fields, lines 849-904, https://go.factset.com/hubfs/Website_Downloads/Statistical%20Package%20Integration/Docs%203.0/estimates-ondemand.pdf

### 2. Mailbox · 数据科学家 · [auto-handoff] Wind/FactSet/Choice consensus estimates

# 结论

锚定日期：`2026-05-10`。结论是：**应该重建基于一致预期的 earnings surprise 截面，不应继续把两日 alpha 当作 surprise 代理变量**。两日 alpha 反映的是价格反应，混入指引、电话会语气、风险偏好、流动性和行业联动；它可以作为检验变量或后验市场反应字段，但不适合作为基本面输入。

今天我不能直接把 Wind/FactSet/Choice 的专有一致预期数值落入 `shared-data/2026-05-10/`：当前工作区没有检测到 `WindPy`、`EmQuantAPI`、`fds`/FactSet SDK，也没有 `FACTSET`、`FDS`、`WIND`、`CHOICE`、`EMQUANT`、`EASTMONEY` 前缀的环境凭据。本次交付给出可执行的数据方案和供应商优先级；拿到授权后可以在同一天重跑并生成 JSON。

优先级建议：**FactSet PIT Consensus > Wind/Choice 一致预期 > 普通当前一致预期快照 > 两日 alpha**。如果研究对象是 A 股，Wind 或 Choice 更贴近本地覆盖；如果要做跨市场或避免前视偏差，FactSet PIT 是最干净的基准源。

# 证据与可得性

| 数据源 | 可用性判断 | 关键证据 | 对本任务的含义 |
|---|---:|---|---|
| FactSet Estimates / PIT Consensus | 高，但需要订阅与 API 凭据 | FactSet Estimates 覆盖 90 个国家、800+ 贡献方、20+ 年历史，并提供 consensus、detail、actuals、guidance 四类数据；公开 API/SDK 列出 `actuals`、`fixed-consensus`、`rolling-consensus`、`surprise` 等端点；PIT Consensus 是每日点时快照，明确用于去除前视偏差。[S1][S2][S3] | 最适合重建 surprise 截面；可直接取 T-1 consensus 与 actuals，也可用供应商 surprise 端点做对账。 |
| Wind Client API | 中高，但需要终端/API 授权 | Wind 官方说明 Client API 可用 Python/MATLAB/R/C++/C#/VBA 访问数据，并覆盖上市公司基本面、权益事件、财务业绩、盈利预测等数据。[S4] | 适合 A 股/港股日常生产；需要确认字段是否能取到公告前点时一致预期、分析师数、离散度和预测日期。 |
| Choice / 东方财富 Choice | 中高，但需要 Choice 量化接口或终端授权 | Choice 官网有量化接口入口，支持 Python、MATLAB、R、C++、C#、Java；东方财富公开“盈利预测”页面标注数据来源为东方财富 Choice 数据，同时公开页带有准确性/完整性/及时性免责声明。[S5][S6] | 可作为 A 股备选或交叉校验源；公开网页不适合直接入库，必须走授权 API 或终端导出，并保留点时字段。 |
| 两日 alpha | 低，只能做反应变量 | 学术定义通常把 surprise 定义为实际 EPS 减公告前分析师共识，并要求处理拆股；FactSet surprise 字段也区分事件前 consensus、事件后值、surprise amount、surprise percent 和 price impact。[S7][S8] | 两日 alpha 是价格冲击，不是 earnings surprise；应从主输入中降级。 |

# 推荐截面定义

本周口径按锚定日期结束：`2026-05-04` 至 `2026-05-10`。对每个在窗口内披露财报或业绩快报的公司，生成一行 surprise 记录。

| 字段 | 口径 |
|---|---|
| `asof_date` | `2026-05-10` |
| `event_date` | 财报、业绩快报、profit warning 或 preliminary release 的事件日期；使用本地交易日历归一。 |
| `ticker`, `vendor_id` | 证券代码与供应商主键，保留映射表版本。 |
| `period_type`, `fiscal_period` | `quarterly`、`semi` 或 `annual`；记录财年和财季。 |
| `metric` | 首批建议保留 `EPS`、`revenue`、`net_profit_parent` 三项；A 股优先用归母净利润，并同步 EPS。 |
| `actual_value` | 公司披露实际值或供应商标准化 actual。 |
| `consensus_pre_event` | 事件前一个本地交易日或本地午夜点时快照；不得使用公告后修订。 |
| `consensus_mean`, `consensus_median`, `num_estimates`, `dispersion` | 优先使用 mean 与 median 双口径；`num_estimates < 3` 的记录降权或标为低可信。 |
| `surprise_amount` | `actual_value - consensus_pre_event`。 |
| `surprise_pct` | `(actual_value - consensus_pre_event) / abs(consensus_pre_event)`；分母为 0 或极小值时置空并打标。 |
| `sue` | 首选 `(actual - consensus) / dispersion`；若无离散度，用过去 8 个同口径 forecast error 的标准差。 |
| `ret_2d_alpha` | 保留原两日 alpha，但改名为 `market_reaction_2d_alpha`，只用于检验。 |
| `source` | `FactSet_PIT`、`Wind`、`Choice`；记录抽取时间、API 参数和原始字段名。 |

# 生产规则

1. **点时优先**：若有 FactSet PIT，使用事件前一日 local midnight consensus。FactSet 明确说明 PIT 快照只包含该日期计算时已可用的数据，避免后续修订进入历史样本。[S2]
2. **公告事件优先级**：earnings release > preliminary release > profit warning。若供应商 surprise 端点把第一事件作为 surprise event，需要保留 `surprise_event`，防止把 profit warning 与正式财报混在一起。[S8]
3. **覆盖门槛**：核心因子仅使用 `num_estimates >= 3`；`1-2` 家覆盖可保留在数据层，但分析层应单独分桶或剔除。这个门槛与常见 I/B/E/S 研究口径一致。[S7]
4. **A 股口径**：优先 `net_profit_parent` surprise，EPS 作为可比补充。原因是 A 股盈利预测研报经常以归母净利润为主，而 EPS 受股本变动影响更强。
5. **异常处理**：对拆股、送转、币种变化、会计口径变化做标记；EPS 预测与实际值需统一复权/稀释口径。学术文献明确提示拆股调整，否则 surprise 会被机械扭曲。[S7]
6. **供应商对账**：若 FactSet `surprise` 端点可用，用自算值与供应商值对账；差异超过 5bp 或 1 个最小披露单位时落入 `qa_flags`。

# 建议落库结构

目标文件：

```text
shared-data/2026-05-10/earnings_surprise_cross_section.json
shared-data/2026-05-10/earnings_surprise_cross_section.meta.json
```

记录示例：

```json
{
  "asof_date": "2026-05-10",
  "event_window": ["2026-05-04", "2026-05-10"],
  "source": "FactSet_PIT",
  "ticker": "000001.SZ",
  "vendor_id": "PLACEHOLDER",
  "metric": "net_profit_parent",
  "period_type": "quarterly",
  "fiscal_period": "2026Q1",
  "event_date": "2026-04-30",
  "actual_value": null,
  "consensus_pre_event": null,
  "num_estimates": null,
  "dispersion": null,
  "surprise_amount": null,
  "surprise_pct": null,
  "sue": null,
  "market_reaction_2d_alpha": null,
  "qa_flags": ["vendor_credentials_required"]
}
```

# 给 Factor Analyst 的下一步

1. **停止在主因子中使用两日 alpha 代理 surprise**；把现有字段重命名为 `market_reaction_2d_alpha`，作为因变量、分层检验或滞后反应诊断。
2. **请求数据权限**：A 股周报优先开通 Wind 或 Choice API；跨市场研究优先 FactSet PIT Consensus。最低字段清单是 actual、pre-event consensus mean/median、分析师数、离散度、预测日期、事件日期、财期、币种、单位。
3. **数据层交付**：权限打通后，由共享数据层生成 `shared-data/2026-05-10/earnings_surprise_cross_section.json`，并附 `meta.json` 记录供应商、API 参数、覆盖率、缺失率和 QA 差异。
4. **研究层替换**：Factor Analyst 用 `sue` 或 `surprise_pct` 排序建组；`num_estimates < 3` 和 `qa_flags` 非空的样本单独报告，不与高可信样本混合。

# 引用

[S1] FactSet, “At a Glance: FactSet Consensus Estimates DataFeed,” lines 171-197, https://insight.factset.com/resources/factset-consensus-estimates-datafeed  
[S2] FactSet, “At a Glance: FactSet Estimates Point-in-Time Consensus,” lines 178-196, https://insight.factset.com/resources/at-a-glance-factset-estimates-point-in-time-consensus  
[S3] `fds.sdk.FactSetEstimates` public SDK page, lines 277-307, https://pypi.org/project/fds.sdk.FactSetEstimates/  
[S4] Wind, “Client API,” lines 12-20 and 72-76, https://www.wind.com.cn/mobile/ClientApi/zh.html  
[S5] Choice, “Choice 数据量化接口,” lines 2-8, https://quantapi.eastmoney.com/  
[S6] 东方财富, “盈利预测,” lines 236-257, https://data.eastmoney.com/report/profitforecast.jshtml  
[S7] Review of Accounting Studies, “Analyst information precision and small earnings surprises,” lines 653-667 and 303-304, https://link.springer.com/article/10.1007/s11142-016-9370-2  
[S8] FactSet, `F.EstimatesOnDemand` PDF, surprise methodology and fields, lines 849-904, https://go.factset.com/hubfs/Website_Downloads/Statistical%20Package%20Integration/Docs%203.0/estimates-ondemand.pdf

