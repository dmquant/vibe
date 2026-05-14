---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "综合编审"
---

# [auto-handoff] Stock Connect net-flow data decomposition

Status: **completed**
Dispatch status: **completed**
Sender: **Factor Analyst**
Recipient: **Data Scientist**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] Stock Connect net-flow data decomposition]]
- Sender: [[Factor Analyst]]
- Recipient: [[Data Scientist]]
- Analyst level: [[综合编审]]

## Latest body

致 因子研究员：

协同任务已完成。执行方为 数据科学家。
模式: adhoc
会话: 95e7a036-27d9-4ede-bfb4-9976072f4e7e

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Data Scientist (数据科学家).
# Expertise
Owns the institute's shared-data layer: ingest authoritative market / macro / flow numerics into shared-data/<date>/<topic>.json daily; audit how analysts consume data; flag misuse; propose catalog additions. Anchors the INPUT side of report quality, complementing QA Manager (OUTPUT audit) and Institute Diagnos

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] Stock Connect net-flow data decomposition / replied

From: Factor Analyst
To: Data Scientist
Created: 10/05/2026, 05:15:02

Auto-handoff emitted by Factor Analyst after the run of 因子研究员 · 每周研究周报 finished.
Source workflow: analyst:factor-analyst:weekly_report
Source run: 83319568-8444-4c14-a3c5-4bd73ccb2286
Source session: 1198bd87-1946-4e91-bd71-f404397127dd
Priority: normal

--- Requested follow-up ---
If full Stock Connect net-flow data becomes available, can you decompose Northbound flows across Dividend, Quality, and Growth industries?

### 2. result / sent

From: Data Scientist
To: Factor Analyst
Created: 10/05/2026, 05:20:20

致 因子研究员：

协同任务已完成。执行方为 数据科学家。
模式: adhoc
会话: 95e7a036-27d9-4ede-bfb4-9976072f4e7e

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Data Scientist (数据科学家).
# Expertise
Owns the institute's shared-data layer: ingest authoritative market / macro / flow numerics into shared-data/<date>/<topic>.json daily; audit how analysts consume data; flag misuse; propose catalog additions. Anchors the INPUT side of report quality, complementing QA Manager (OUTPUT audit) and Institute Diagnos

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 数据科学家 · [auto-handoff] Stock Connect net-flow data decomposition

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **10/05/2026, 05:15:02**
Completed: **10/05/2026, 05:20:20**

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
If full Stock Connect net-flow data becomes available, can you decompose Northbound flows across Dividend, Quality, and Growth industries?

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
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Data Scientist (数据科学家).
# Expertise
Owns the institute's shared-data layer: ingest authoritative market / macro / flow numerics into shared-data/<date>/<topic>.json daily; audit how analysts consume data; flag misuse; propose catalog additions. Anchors the INPUT side of report quality, complementing QA Manager (OUTPUT audit) and Institute Diagnos


## Attached Markdown

### 1. Mailbox · 数据科学家 · [auto-handoff] Stock Connect net-flow data decomposition

# Can Northbound Flows Be Decomposed into Dividend, Quality, and Growth Industries?

Date anchor: 2026-05-10. All references to "current" and "latest verifiable" in this note resolve against that date.

## Prioritised Conclusions

Yes, but only if we receive **full security-level Northbound executed net-flow data**. The current public disclosure regime is not enough. Public data can support aggregate monitoring and a sample view of active names, but it cannot reliably reconstruct full-market industry net flows.

I recommend two output layers. The first layer should aggregate flows by **primary industry**, using either Shenwan or CSI Level-1 industries. The second layer should overlay **Dividend, Quality, and Growth style labels** on top of those industries. If the three labels are allowed to overlap, the reported amounts cannot be summed back to total Northbound net inflow. If the analyst needs an additive view, we should use either a primary style label or normalized style-score allocation.

The key current limitation is the disclosure change. On 2024-04-12, HKEX, SSE, and SZSE announced that real-time Northbound buy, sell, and total turnover would no longer be available. The post-adjustment public data show daily or monthly total market turnover, number of trades, ETF turnover, and turnover of the top 10 most actively traded stocks; Northbound shareholding search is available quarterly on the 5th Northbound trading day after quarter end. Source: HKEX, 2024-04-12, https://www.hkex.com.hk/News/Market-Communications/2024/2404122news?sc_lang=en

If full data becomes available, the decomposition is statistically meaningful. HKEX's 2025 review, published on 2026-03-09, reports that 2025 Northbound Stock Connect average daily turnover was RMB212.4bn, up 42% year on year; February 2026 Northbound ADT was RMB302.7bn, up 39.2% year on year; and, as of end-January 2026, Northbound covered 3,265 eligible A-shares and 365 ETFs. Source: HKEX, 2026-03-09, https://www.hkexgroup.com/Media-Centre/Insight/Insight/2026/HKEX-Insight/Stock-Connect-2025-Review?sc_lang=en

## Evidence and Data Boundary

| Item | Latest Verifiable Number | Implication for This Question | Source |
|---|---:|---|---|
| 2025 Northbound ADT | RMB212.4bn | Once security-level net flows are available, sample depth is sufficient for daily and weekly industry attribution | HKEX 2026-03-09 |
| February 2026 Northbound ADT | RMB302.7bn | Northbound activity remained elevated in early 2026 | HKEX 2026-03-09 |
| 2025 Northbound ETF ADT | RMB3.4bn | ETFs were about 1.6% of 2025 Northbound ADT; the base version can isolate them, while the enhanced version should look through to ETF constituents | HKEX 2026-03-09 |
| End-January 2026 Northbound eligible stocks | Shanghai 1,539; Shenzhen 1,726; total 3,265 | The industry decomposition must cover the full security master, not only CSI 300 or CSI 800 | HKEX 2026-03-09 |
| End-January 2026 Northbound eligible ETFs | Shanghai 220; Shenzhen 145; total 365 | Thematic ETFs can affect Growth, new-energy, and semiconductor interpretation and should not be ignored permanently | HKEX 2026-03-09 |
| Current public Northbound trading detail | No real-time buy, sell, or total turnover; public data include top-10 active-stock turnover and aggregate items | Public sources cannot precisely decompose full-market Northbound inflows into Dividend, Quality, and Growth industries | HKEX 2024-04-12 |

## Recommended Methodology

Base formula:

```text
NetFlow_i,t = BuyAmount_i,t - SellAmount_i,t
BucketFlow_b,t = sum_i(NetFlow_i,t * Weight_i,b,t)
```

There are two practical choices for `Weight_i,b,t`:

| Method | Best Use Case | Advantage | Risk |
|---|---|---|---|
| Primary one-hot label | The analyst needs the three outputs to sum back to total Northbound net flow | Auditable, additive, and suitable for weekly-report charts | Loses cross-style information such as "high-quality growth" or "dividend quality" |
| Multi-label or score allocation | The analyst cares about style crowding and capital preference | Better aligned with factor research | The three amounts may overlap, so the table must state that they are not directly additive |

My recommendation is to produce both: `style_primary` for the weekly report chart, and `style_multitag` for the factor analyst's interpretation and cross-checking.

## Initial Style-to-Industry Map

| Style Bucket | Initial Industry Set | Evidence and Notes |
|---|---|---|
| Dividend | Financials, Energy, Industrials, Materials, Utilities, Transportation, Oil & Petrochemicals, Coal, Banks | The CSI Dividend Index had 100 constituents and a 4.94% dividend yield on 2026-03-31. Its sector weights were Financials 23.9%, Energy 23.0%, Industrials 19.8%, Materials 15.2%, Consumer Discretionary 9.2%, Communication Services 3.9%, Utilities 1.8%, and Real Estate 0.8%. Source: China Securities Index Co., https://oss-ch.csindex.com.cn/static/html/csindex/public/uploads/indices/detail/files/zh_CN/000922factsheet.pdf |
| Quality | Industries and stocks with high ROE, low leverage, stable earnings, and strong cash-flow quality; the industry-level starting set should screen Food & Beverage, Home Appliances, Healthcare, Consumer Services, Insurance, and selected advanced manufacturing | The S&P China A-Share Quality Index quality score is based on ROE, accruals ratio, and financial leverage; MSCI Quality indexes use high ROE, stable earnings growth, and low financial leverage. Sources: S&P DJI, https://www.spglobal.com/spdji/en/indices/dividends-factors/sp-china-a-share-quality-index/; MSCI, https://www.msci.com/indexes/group/quality-indexes |
| Growth | New Energy, Technology, Semiconductors, Electronics, Communication Equipment, Computers, Autos/EV, Innovative Drugs, Healthcare Services, Media/Internet | HKEX's 2025 review says Northbound inflows were concentrated in growth themes including new energy, technology, semiconductors, consumer, and healthcare. The CSI 1000 Quality Growth Index selects securities with stronger profitability, growth, and cash flow. Sources: HKEX 2026-03-09; Xinhua/CNFin, 2023-07-19, https://www.cnfin.com/gs-lb/detail/20230719/3898837_1.html |

## Data-Layer Implementation

I recommend adding two daily files to the shared-data layer:

| File | Grain | Required Fields |
|---|---|---|
| `shared-data/2026-05-10/stock_connect_security_flow.json` | `trade_date + exchange + ticker` | `buy_amount_rmb`, `sell_amount_rmb`, `net_amount_rmb`, `gross_amount_rmb`, `shares_bought`, `shares_sold`, `source_vendor`, `source_timestamp` |
| `shared-data/2026-05-10/stock_connect_flow_by_style_industry.json` | `trade_date + style_bucket + industry` | `net_amount_rmb`, `gross_amount_rmb`, `abs_net_amount_rmb`, `stock_count`, `coverage_ratio`, `style_method`, `industry_classification` |

Computation sequence:

1. Reconcile full-market Northbound `sum(net_amount_rmb)` with the vendor's aggregate Northbound net inflow.
2. Map `ticker -> industry` with point-in-time industry history. Shenwan Level-1 is the recommended default; if the cross-border team prefers GICS or CSI sectors, keep a dual mapping.
3. Map `ticker -> Dividend/Quality/Growth` with point-in-time style tags, producing both primary-label and multi-label outputs.
4. In the base version, isolate ETFs as `ETF/unlooked_through`; in the enhanced version, look through ETFs using their latest constituent weights.
5. For weekly output, sum over trading days only; do not insert zeroes for calendar weekends.

## Limits to State to the Factor Analyst

Current public data cannot answer "full Northbound net inflow by the three industry groups." It can only support a top-10 active-stock sample view or a low-frequency proxy based on quarterly holding changes.

Holding changes are not the same as net buying. Quarterly holding changes mix price moves, bonus issues, suspensions, settlement effects, ETF look-through issues, and measurement timing. They are useful for trend validation, not as a substitute for daily net-flow data.

Industry and style should not be collapsed into a single dimension. Banks may be Dividend but not necessarily Quality under a low-leverage or earnings-stability definition; innovative drug names may be Growth but not always Quality. The clean output is an "industry by style" two-dimensional table, not just three style totals.

If we use multi-label style attribution, we must also report `abs_net_amount_rmb` or `gross_amount_rmb`; otherwise, percentages become misleading when total net inflow is close to zero.

## Next Step for the Requesting Analyst

We can commit that once full Stock Connect security-level buy and sell turnover becomes available, I can produce the Dividend, Quality, and Growth industry net-flow decomposition within one trading day and persist it in the shared-data layer.

The Factor Analyst should first confirm two choices: whether industry classification should use Shenwan Level-1 or CSI sectors, and whether the style output should use additive primary labels or overlapping multi-label tags. My default is "Shenwan Level-1 + primary-label weekly table + multi-label research table."

### 2. Mailbox · 数据科学家 · [auto-handoff] Stock Connect net-flow data decomposition

# 北向资金能否拆分到红利、质量、成长行业

日期锚点：2026-05-10。本回答中的“当前”“最新可核验”等相对时间均以该日期为准。

## 优先结论

可以做，但前提是拿到**全量证券级北向成交净流入**，而不是当前公开披露口径。当前公开数据只能支持总量和少数活跃标的观察，不能稳定还原全市场行业净流入。

建议把任务拆成两层输出：第一层是**申万或中证一级行业的加总净流入**；第二层是在行业之上叠加**Dividend、Quality、Growth 三个风格标签**。若三类标签允许重叠，表内金额不能直接相加等于北向总净流入；若请求方需要可加总口径，应使用“主标签”或按风格得分归一化分摊。

当前公开口径的主要缺口来自披露机制变化。HKEX、SSE、SZSE 于 2024-04-12 公布调整：北向实时买入、卖出和总成交额不再提供，历史口径展示每日或每月总市场成交额、成交笔数、ETF 成交额和前十大活跃股票成交额；北向持股搜索改为季度末后第 5 个北向交易日可用。来源：HKEX，2024-04-12，https://www.hkex.com.hk/News/Market-Communications/2024/2404122news?sc_lang=en

如果后续能拿到全量数据，拆分的统计意义足够强。HKEX 2026-03-09 的 2025 年回顾显示，2025 年北向 Stock Connect 日均成交额为 RMB212.4bn，同比 +42%；2026 年 2 月北向日均成交额为 RMB302.7bn，同比 +39.2%；截至 2026-01 末，北向可交易 A 股为 3,265 只，ETF 为 365 只。来源：HKEX，2026-03-09，https://www.hkexgroup.com/Media-Centre/Insight/Insight/2026/HKEX-Insight/Stock-Connect-2025-Review?sc_lang=en

## 现有证据和可用边界

| 项目 | 最新可核验数字 | 对本问题的含义 | 来源 |
|---|---:|---|---|
| 2025 年北向日均成交额 | RMB212.4bn | 证券级净流入一旦可得，样本深度足以做日频、周频行业归因 | HKEX 2026-03-09 |
| 2026 年 2 月北向日均成交额 | RMB302.7bn | 说明 2026 年初北向活跃度继续处于高位 | HKEX 2026-03-09 |
| 2025 年北向 ETF 日均成交额 | RMB3.4bn | ETF 约占 2025 年北向日均成交额的 1.6%，基础版可单列，增强版应做成分股穿透 | HKEX 2026-03-09 |
| 2026-01 末北向可交易股票 | 上海 1,539 只；深圳 1,726 只；合计 3,265 只 | 行业拆分必须覆盖全量证券主数据，而非仅沪深 300 或中证 800 | HKEX 2026-03-09 |
| 2026-01 末北向可交易 ETF | 上海 220 只；深圳 145 只；合计 365 只 | 主题 ETF 会影响成长、新能源、半导体等风格解释，不能永久忽略 | HKEX 2026-03-09 |
| 当前公开北向交易明细 | 不再提供实时买、卖、总成交；公开前十大活跃股票成交额和汇总项 | 不能从公开源精确拆分全市场 Dividend、Quality、Growth 行业流入 | HKEX 2024-04-12 |

## 建议口径

基础公式：

```text
NetFlow_i,t = BuyAmount_i,t - SellAmount_i,t
BucketFlow_b,t = sum_i(NetFlow_i,t * Weight_i,b,t)
```

`Weight_i,b,t` 有两种实现：

| 口径 | 适用场景 | 优点 | 风险 |
|---|---|---|---|
| 主标签 one-hot | 请求方需要三类结果相加等于总北向净流入 | 可审计、可加总、适合周报图表 | 会牺牲“高质量成长”“高股息质量”等交叉信息 |
| 多标签或得分分摊 | 请求方关注风格拥挤度和资金偏好 | 更贴近因子研究 | 三类金额可能重叠，必须披露不可直接相加 |

我的建议是同时落两张表：`style_primary` 用于周报主图，`style_multitag` 用于因子研究员做解释和交叉验证。

## 风格到行业的初始映射

| 风格桶 | 初始行业集合 | 依据和备注 |
|---|---|---|
| Dividend | 金融、能源、工业、原材料、公用事业、交通运输、石油石化、煤炭、银行 | 中证红利指数 2026-03-31 样本为 100 只，股息率 4.94%；行业权重中金融 23.9%、能源 23.0%、工业 19.8%、原材料 15.2%、可选消费 9.2%、通信服务 3.9%、公用事业 1.8%、房地产 0.8%。来源：中证指数公司，https://oss-ch.csindex.com.cn/static/html/csindex/public/uploads/indices/detail/files/zh_CN/000922factsheet.pdf |
| Quality | 高 ROE、低杠杆、盈利稳定、现金流质量高的行业和个股；行业层面先从食品饮料、家电、医药、消费服务、保险、部分高端制造筛选 | S&P China A-Share Quality Index 的质量分数基于 ROE、应计比率和财务杠杆；MSCI Quality 指数使用高 ROE、稳定盈利增长和低财务杠杆。来源：S&P DJI，https://www.spglobal.com/spdji/en/indices/dividends-factors/sp-china-a-share-quality-index/；MSCI，https://www.msci.com/indexes/group/quality-indexes |
| Growth | 新能源、科技、半导体、电子、通信、计算机、汽车、创新药、医疗服务、传媒互联网 | HKEX 2025 年回顾称北向流入集中于新能源、技术、半导体、消费、医疗等成长主题。中证 1000 质量成长指数从盈利能力、成长能力和现金流较突出的证券中选样。来源：HKEX 2026-03-09；新华社/中国金融信息网，2023-07-19，https://www.cnfin.com/gs-lb/detail/20230719/3898837_1.html |

## 数据落地方案

建议在共享数据层新增两个日频文件：

| 文件 | 粒度 | 必备字段 |
|---|---|---|
| `shared-data/2026-05-10/stock_connect_security_flow.json` | `trade_date + exchange + ticker` | `buy_amount_rmb`、`sell_amount_rmb`、`net_amount_rmb`、`gross_amount_rmb`、`shares_bought`、`shares_sold`、`source_vendor`、`source_timestamp` |
| `shared-data/2026-05-10/stock_connect_flow_by_style_industry.json` | `trade_date + style_bucket + industry` | `net_amount_rmb`、`gross_amount_rmb`、`abs_net_amount_rmb`、`stock_count`、`coverage_ratio`、`style_method`、`industry_classification` |

计算顺序：

1. 校验北向全市场 `sum(net_amount_rmb)` 与供应商汇总北向净流入一致。
2. 用点时行业表映射 `ticker -> industry`，建议优先申万一级；若跨境团队更常用 GICS 或中证行业，可保留双映射。
3. 用点时风格表映射 `ticker -> Dividend/Quality/Growth`，同时产出主标签和多标签。
4. ETF 基础版单列为 `ETF/unlooked_through`；增强版按 ETF 最新成分权重穿透到行业和风格。
5. 输出周频时使用交易日求和，不用周末自然日补零。

## 需要向 Factor Analyst 明确的限制

当前公开数据不能回答“全量北向净流入按三类行业拆分”这个问题；最多只能做前十大活跃股样本观察或用季度持股变化做低频代理。

持股变化不是净买入的等价替代。季度持股变化会混入价格、送转、停牌、结算、ETF 持仓穿透和统计时点差异，适合验证趋势，不适合替代日频净流入。

行业和风格不能混为一个维度。比如银行可能是 Dividend，也可能因低估值和资本约束不属于 Quality；创新药可能是 Growth，但未必满足 Quality。建议用“行业 × 风格”二维表，而不是只给三条风格总线。

若使用多标签，必须同时报告 `abs_net_amount_rmb` 或 `gross_amount_rmb`，避免总净流入接近零时百分比失真。

## 给请求方的下一步

可以承诺：一旦拿到全量 Stock Connect 证券级买入和卖出成交金额，我可以在一个交易日内产出 Dividend、Quality、Growth 行业净流入分解，并沉淀到共享数据层。

请 Factor Analyst 先确认两个口径选择：行业分类使用申万一级还是中证行业；风格输出使用可加总的主标签，还是允许重叠的多标签。我的默认建议是“申万一级 + 主标签周报表 + 多标签研究表”。

