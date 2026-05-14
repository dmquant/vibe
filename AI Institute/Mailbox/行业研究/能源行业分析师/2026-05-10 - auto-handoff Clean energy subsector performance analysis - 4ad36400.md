---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "行业研究"
---

# [auto-handoff] Clean energy subsector performance analysis

Status: **completed**
Dispatch status: **completed**
Sender: **ESG Analyst**
Recipient: **Energy Analyst**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] Clean energy subsector performance analysis]]
- Sender: [[ESG Analyst]]
- Recipient: [[Energy Analyst]]
- Analyst level: [[行业研究]]

## Latest body

致 ESG分析师：

协同任务已完成。执行方为 能源行业分析师。
模式: adhoc
会话: 8c39fc29-9351-49c2-a4f0-782455138f33

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上��交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Energy Analyst (��源行业分析师).
# Expertise
Oil, gas, coal, renewables, power generation.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体���文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the sa

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] Clean energy subsector performance analysis / replied

From: ESG Analyst
To: Energy Analyst
Created: 10/05/2026, 09:13:59

Auto-handoff emitted by ESG Analyst after the run of ESG分析师 · 每周研究周报 finished.
Source workflow: analyst:esg-analyst:weekly_report
Source run: 3727df46-5d69-499a-afd5-cd763c2ae12e
Source session: 4e04664e-428a-4cc0-820f-14ad77bbf29a
Priority: normal

--- Requested follow-up ---
Given the recent earnings from Vestas and First Solar, please analyze the performance differences between the wind and solar subsectors, specifically focusing on whether the current trends are driven by fundamental earnings improvements or simple interest-rate sensitivity.

### 2. result / sent

From: Energy Analyst
To: ESG Analyst
Created: 10/05/2026, 09:20:28

致 ESG分析师：

协同任务已完成。执行方为 能源行业分析师。
模式: adhoc
会话: 8c39fc29-9351-49c2-a4f0-782455138f33

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上��交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Energy Analyst (��源行业分析师).
# Expertise
Oil, gas, coal, renewables, power generation.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体���文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the sa

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 能源行业分析师 · [auto-handoff] Clean energy subsector performance analysis

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **10/05/2026, 09:13:59**
Completed: **10/05/2026, 09:20:28**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
Energy Analyst (能源行业分析师).
# Expertise
Oil, gas, coal, renewables, power generation.

# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content (same numbers, same citations, same conclusions, idiomatic English prose).
- You MUST use your file-creation tool (shell, write_file, or your CLI's equivalent) to actually write BOTH files. Printing content as your chat reply alone is NOT acceptable.
- After writing, verify both files exist (e.g. `ls -la handoff_response.md handoff_response.en.md`). Your chat reply must be a single confirmation line in the form: `Wrote handoff_response.md (<bytes> bytes); wrote handoff_response.en.md (<bytes> bytes) — <one-sentence summary>`.
- This step is graded on the presence and content of BOTH files in the workspace. If either is missing, the step is treated as failed regardless of how good the inline content was, and downstream steps will fail.
- Do NOT echo the deliverables' full content in your chat reply. The reply is the confirmation line only; the deliverables live in the files.

# Task
# Incoming coordination request from ESG Analyst
Source workflow: ESG分析师 · 每周研究周报 (analyst:esg-analyst:weekly_report)
Source run: 3727df46-5d69-499a-afd5-cd763c2ae12e

# The question
Given the recent earnings from Vestas and First Solar, please analyze the performance differences between the wind and solar subsectors, specifically focusing on whether the current trends are driven by fundamental earnings improvements or simple interest-rate sensitivity.

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
Energy Analyst (��源行业分析师).
# Expertise
Oil, gas, coal, renewables, power generation.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体���文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the sa


## Attached Markdown

### 1. Mailbox · 能源行业分析师 · [auto-handoff] Clean energy subsector performance analysis

# Wind vs. Solar: Earnings Improvement, Not Just a Rate Trade

Anchor date: 2026-05-10. All references to “current,” “recent,” and “this week” are resolved against this date.

## Prioritized Conclusions

1. **The current subsector split is not explained by rate sensitivity alone.** As of 2026-05-08, the U.S. 10-year Treasury was 4.38%, only 2bp below 4.40% on 2026-04-30, and above 4.30% on 2026-03-31 and 4.19% on 2026-01-02. A pure “falling-rate / duration” explanation is not strong enough.

2. **First Solar’s solar improvement looks fundamentally driven.** Q1 2026 net sales were $1.044B, up 24% YoY; gross margin was 47%, up 6pp; net income was $347M; diluted EPS was $3.22, up 65% YoY; and Adjusted EBITDA was $520M, up 37% YoY. The key drivers are U.S. manufacturing, Section 45X credits, shipment volume, and strong contracted backlog, not just cheaper financing.

3. **Vestas is also recovering, but it is a lower-margin execution recovery, not yet a high-quality profit compounder.** Q1 2026 revenue was EUR 3.966B, up 14.4% YoY; EBIT before special items was EUR 127M, with margin improving to 3.2% from 0.4% in Q1 2025. However, adjusted free cash flow was EUR -533M and absolute margins remain thin, so wind is still in a repair phase.

4. **Investment read-through: treat First Solar as policy and manufacturing-margin realization; treat Vestas as order and execution recovery.** Both companies are exposed to project-finance rates, but the latest earnings signal is primarily about margins, backlog quality, and earnings revisions, not one common rate beta.

## Earnings Comparison

| Dimension | Vestas / Wind | First Solar / Solar | Interpretation |
|---|---:|---:|---|
| Latest reported period | Q1 2026, released 2026-05-06 | Q1 2026, released 2026-04-30 | Latest available quarterly earnings for both |
| Revenue | EUR 3.966B, +14.4% YoY | $1.044B, +24% YoY | First Solar showed faster growth |
| Margin | EBIT before special items margin 3.2%, versus 0.4% in Q1 2025 | Gross margin 47%, +6pp YoY; Adjusted EBITDA margin 50% | The solar leader has a much stronger margin profile |
| Absolute profit | EBIT before special items EUR 127M; net profit EUR 70M | Net income $347M; Adjusted EBITDA $520M | First Solar has much stronger profit conversion |
| Orders / backlog | Turbine orders 4,504 MW, +44% YoY; turbine backlog EUR 36.3B; service agreements with expected future revenue of EUR 39.8B; combined backlog EUR 76.1B | Contracted sales backlog of 47.9 GW, about $14.4B, through 2030 | Both have visibility; Vestas is equipment plus long-cycle service, while FSLR is module contracts plus policy premium |
| Cash flow / balance sheet | Adjusted free cash flow EUR -533M | Gross cash $2.4B and net cash $2.0B at quarter-end | First Solar has the stronger financial cushion |
| 2026 guidance | Revenue EUR 20-22B, EBIT before special items margin 6-8%, investments about EUR 1.2B, unchanged | Net sales $4.9-5.2B, gross profit $2.4-2.6B, Adjusted EBITDA $2.6-2.8B, Section 45X credits $2.10-2.19B, unchanged | Both reaffirmed guidance, but FSLR’s guidance has high policy-credit content |

## Fundamentals or Rate Sensitivity?

### 1. First Solar: Fundamentals Dominate

First Solar’s Q1 results flowed directly through the income statement: net sales of $1.044B, gross profit of $486M, net income of $347M, and Adjusted EBITDA of $520M. Gross margin rose from 41% to 47%, driven by a higher volume of U.S. 45X-eligible modules, Section 45X credits rising from $300M to $418M, lower freight, and U.S. fleet utilization of about 96%. The company also disclosed Q1 backlog of 47.9 GW / about $14.4B, which means the market is not merely buying lower discount rates; it is buying visible shipments and policy-supported manufacturing margins.

This should not be generalized to the entire solar chain. First Solar benefits from CdTe technology, U.S. manufacturing, independence from Chinese crystalline silicon supply chains, trade policy, and 45X. Residential solar, inverters, and leveraged developers remain highly exposed to rates, financing availability, and end-customer demand. The right formulation is: **within solar, FSLR’s strength is fundamentally driven, but the broader solar complex still includes highly rate-sensitive assets.**

### 2. Vestas: Genuine Repair, But Still in the Capex and Execution Cycle

Vestas’ improvement is also real: revenue rose 14.4% YoY, EBIT before special items margin improved from 0.4% to 3.2%, turbine orders reached 4,504 MW, up 44% YoY, and combined backlog reached EUR 76.1B. Management described it as the best first-quarter profitability since 2018 and cited better onshore/offshore execution, offshore ramp-up, and Service cost reductions.

However, wind’s earnings quality is weaker than First Solar’s. A 3.2% group EBIT margin is still thin, adjusted free cash flow was EUR -533M, and the industry remains exposed to project delays, offshore wind cost inflation, supply chains, grid connection, and customer financing costs. Vestas’ share and subsector recovery is supported by orders and margin repair, but it still looks like a cyclical recovery from a low base rather than a mature high-cash-return phase.

### 3. Rates Matter, But They Are Not the Main Explanation

Rates still matter: renewable projects have long-duration cash flows and high upfront capital intensity, so discount rates and project-debt costs affect IRRs, PPA pricing, and customer order timing. Offshore wind is especially sensitive to capital costs; residential and distributed solar are also highly financing-dependent.

But rates did not fall enough in the current window to explain the earnings-led moves by themselves: the U.S. 10-year Treasury was 4.38% on 2026-05-08, 4.40% on 2026-04-30, 4.30% on 2026-03-31, and 4.19% on 2026-01-02. The post-earnings read-through for Vestas and First Solar should therefore be framed around **earnings revision / margin recovery / backlog quality**, with rates as a secondary amplifier.

## Suggested Wording for the ESG Weekly

Use the following formulation in the main note:

> Recent earnings argue that renewables are no longer trading only as long-duration rate proxies. First Solar showed clear fundamental earnings momentum, with 24% revenue growth, 47% gross margin, $347M net income and $520M adjusted EBITDA in Q1 2026, supported by U.S. manufacturing and Section 45X credits. Vestas also showed a genuine wind recovery, with revenue up 14.4%, EBIT margin before special items improving to 3.2%, and turbine orders up 44%, but its cash flow and margin profile remain much thinner. The subsector split is therefore quality of earnings: solar leader FSLR is policy/manufacturing-margin driven, while wind leader Vestas is execution/backlog-recovery driven. Rate sensitivity remains relevant, but the 10-year Treasury at 4.38% on 2026-05-08 does not support a pure falling-rate explanation.

## Follow-Up Items

| Item to monitor | Why it matters | Trigger / watch point |
|---|---|---|
| First Solar Section 232 / trade-policy decision | Affects U.S. and Southeast Asia utilization, ASPs, and import competition | Company expects a Section 232 decision in Q2 2026, potentially slipping into Q3 |
| First Solar 45X durability | 2026 guidance includes $2.10-2.19B of Section 45X tax credits, so profit is policy-sensitive | Any change to 45X rules, sale discounts, or qualification |
| Vestas Service margin | Service provides the more stable profit stream; Q1 Service EBIT margin was 16.3% | Whether it stays within 2026 guidance of 15.5-17.5% |
| Vestas adjusted FCF | Margin recovery needs to convert into cash flow for valuation repair to continue | Q1 was EUR -533M; subsequent quarters need improvement |
| 10-year Treasury and project-finance spreads | Determines developer IRRs and the quality of new orders | If 10Y stays above 4.5% or credit spreads widen, wind and distributed solar pressure would increase |

## Main Sources

- Vestas, “Interim Report, First Quarter 2026,” 2026-05-06: https://www.vestas.com/en/media/company-news/2026/vestas---interim-report--first-quarter-2026-c4344988
- Vestas Q1 2026 Investor Presentation / financial table excerpt: https://www.vestas.com/content/dam/vestas-com/global/en/investor/reports-and-presentations/financial/2026/q1-2026/2026%20Q1%20Investor%20Presentation.pdf.coredownload.inline.pdf
- First Solar Q1 2026 Earnings Presentation: https://s202.q4cdn.com/499595574/files/doc_financials/2026/q1/Q1-26-Earnings-Presentation-vf-Secured.pdf
- First Solar Q1 2026 SEC-filed earnings release, Exhibit 99.1: https://www.sec.gov/Archives/edgar/data/1274494/000127449426000108/ex991pressreleaseq1-2026.htm
- U.S. Treasury Daily Treasury Par Yield Curve Rates, 2026 data: https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve
- First Trust Global Wind Energy ETF (FAN) fund page, performance and holdings context: https://www.ftportfolios.com/etf/FAN
- Invesco Solar ETF (TAN) market and holdings context via StockAnalysis: https://stockanalysis.com/etf/tan/

### 2. Mailbox · 能源行业分析师 · [auto-handoff] Clean energy subsector performance analysis

# 风电与太阳能：业绩改善不是单纯利率交易

锚定日期：2026-05-10。本分析中的“当前”“最近”“本周”均以该日期为准。

## 优先结论

1. **这轮分化不能简单归因于利率敏感性。** 截至 2026-05-08，美国 10 年期 Treasury 为 4.38%，较 2026-04-30 的 4.40% 仅低 2bp，且高于 2026-03-31 的 4.30% 和 2026-01-02 的 4.19%。如果只是“降息/久期”交易，利率本身并未提供足够解释。

2. **太阳能里 First Solar 的改善更像基本面驱动。** Q1 2026 净销售额 $1.044B、同比 +24%；毛利率 47%、同比 +6pp；净利润 $347M、摊薄 EPS $3.22、同比 +65%；Adjusted EBITDA $520M、同比 +37%。关键不是便宜融资，而是美国本土制造、Section 45X 抵免、出货量和较强积压订单共同推高利润。

3. **风电里 Vestas 也有真实复苏，但仍是“低基数修复 + 执行改善”，盈利质量弱于 First Solar。** Q1 2026 收入 EUR 3.966B、同比 +14.4%；EBIT before special items EUR 127M，利润率 3.2%，高于 Q1 2025 的 0.4%。但调整后自由现金流为 EUR -533M，绝对利润率仍低，说明风电还处于爬坡修复期。

4. **投资含义：把 First Solar 视为“政策与制造利润兑现”，把 Vestas 视为“订单和执行复苏”。** 两者都会受项目融资利率影响，但当前财报给出的主信号是盈利和订单改善，而不是单一利率 beta。

## 业绩对比

| 维度 | Vestas / 风电 | First Solar / 太阳能 | 解释 |
|---|---:|---:|---|
| 最新业绩期 | Q1 2026，发布于 2026-05-06 | Q1 2026，发布于 2026-04-30 | 均为当前可用的最新季度业绩 |
| 收入 | EUR 3.966B，同比 +14.4% | $1.044B，同比 +24% | First Solar 增速更高 |
| 利润率 | EBIT before special items margin 3.2%，Q1 2025 为 0.4% | 毛利率 47%，同比 +6pp；Adjusted EBITDA margin 50% | 太阳能龙头利润率显著更高 |
| 绝对利润 | EBIT before special items EUR 127M；净利润 EUR 70M | 净利润 $347M；Adjusted EBITDA $520M | First Solar 利润兑现更充分 |
| 订单 / backlog | 风机订单 4,504 MW，同比 +44%；风机订单 backlog EUR 36.3B；服务合约未来收入 EUR 39.8B；合计 EUR 76.1B | 合同销售 backlog 47.9 GW，约 $14.4B，覆盖至 2030 | 两者都有可见度；Vestas 更偏设备+服务长周期，FSLR 更偏模块合同和政策溢价 |
| 现金流 / 资产负债表 | 调整后自由现金流 EUR -533M | 期末 gross cash $2.4B、net cash $2.0B | First Solar 财务缓冲更强 |
| 2026 指引 | 收入 EUR 20-22B，EBIT before special items margin 6-8%，投资约 EUR 1.2B，维持不变 | 净销售额 $4.9-5.2B，毛利 $2.4-2.6B，Adjusted EBITDA $2.6-2.8B，Section 45X $2.10-2.19B，维持不变 | 两者均维持指引，但 FSLR 指引中政策抵免占比很高 |

## 基本面还是利率敏感性？

### 1. First Solar：基本面改善占主导

First Solar 的 Q1 结果直接体现到利润表：净销售额 $1.044B、毛利 $486M、净利润 $347M、Adjusted EBITDA $520M。毛利率从 41% 提升至 47%，核心驱动包括更高的美国 45X-eligible 模块量、Section 45X 抵免从 $300M 增至 $418M、运费下降，以及美国工厂利用率约 96%。同时，公司披露 Q1 backlog 为 47.9 GW / 约 $14.4B，说明市场不是只在买远期贴现率下降，而是在买可见出货和政策制造利润。

需要注意的是，这不是对整个太阳能链条的无差别看多。First Solar 受益于 CdTe 技术、美国制造、对中国晶硅供应链独立性、贸易政策和 45X；而住宅光伏、逆变器和高杠杆开发商仍然高度依赖利率、融资和终端需求。结论应写成：**太阳能子板块中 FSLR 的强势是基本面驱动，但太阳能内部仍有显著利率敏感资产。**

### 2. Vestas：真实修复，但仍未摆脱执行与资本开支周期

Vestas 的改善也是真实的：收入同比 +14.4%，EBIT before special items margin 从 0.4% 提升至 3.2%，风机订单 4,504 MW、同比 +44%，合计 backlog 达 EUR 76.1B。管理层称这是 2018 年以来最好的第一季度利润率，并提到 onshore/offshore 执行改善、offshore ramp-up、Service 成本削减。

但风电的修复质量低于 First Solar：3.2% 的集团 EBIT margin 仍薄，调整后自由现金流为 EUR -533M，且行业仍暴露于项目延期、海上风电成本、供应链、并网和客户融资成本。Vestas 的股价/板块反弹可以得到订单和利润率修复支持，但它仍更像“从低谷恢复”的周期修复，而不是已经进入高利润现金牛阶段。

### 3. 利率解释力有限，但不能忽略

利率确实重要：可再生能源开发项目现金流期限长、前期资本开支高，折现率和项目债成本会影响 IRR、PPA 定价和客户下单节奏。风电尤其是海上风电对资本成本更敏感；住宅光伏和分布式太阳能也高度依赖融资成本。

但截至当前窗口，利率并没有出现足以单独解释行情的明显下降：美国 10 年期 Treasury 在 2026-05-08 为 4.38%，2026-04-30 为 4.40%，2026-03-31 为 4.30%，2026-01-02 为 4.19%。因此，本次 Vestas 和 First Solar 财报后的判断应以 **earnings revision / margin recovery / backlog quality** 为主，利率只作为二级放大器。

## 对 ESG 周报的可用表述

建议主文使用以下判断：

> 最近业绩显示，可再生能源已不只是“长久期利率代理”。First Solar 在 Q1 2026 展现了清晰的基本面盈利动能：收入增长 24%，毛利率 47%，净利润 $347M，Adjusted EBITDA $520M，背后是美国制造和 Section 45X 抵免支撑。Vestas 也体现出真实的风电复苏：收入增长 14.4%，EBIT before special items margin 改善至 3.2%，风机订单增长 44%，但现金流和利润率仍明显偏薄。因此，子板块差异的核心是盈利质量：太阳能龙头 FSLR 更偏政策和制造利润率驱动，风电龙头 Vestas 更偏执行和 backlog 修复驱动。利率敏感性仍然相关，但 2026-05-08 的 10 年期 Treasury 为 4.38%，不足以支持“单纯由利率下行驱动”的解释。

## 后续跟踪项

| 跟踪项 | 为什么重要 | 触发阈值 / 观察点 |
|---|---|---|
| First Solar Section 232 / trade-policy 决议 | 影响美国与东南亚产能利用率、ASP 和进口竞争格局 | 公司称 Section 232 决议预期在 Q2 2026，可能滑入 Q3 |
| First Solar 45X 可持续性 | 2026 指引包含 $2.10-2.19B Section 45X tax credits，利润对政策高度敏感 | 任何 45X 规则、出售折价或资格变化 |
| Vestas Service margin | 服务业务提供更稳定利润；Q1 Service EBIT margin 为 16.3% | 是否维持在 2026 年 15.5-17.5% 指引区间 |
| Vestas adjusted FCF | 利润率改善若不能转化为现金流，估值修复会受限 | Q1 为 EUR -533M，后续季度需改善 |
| 10 年期 Treasury 与项目融资利差 | 决定开发商 IRR 和新增订单质量 | 若 10Y 持续高于 4.5% 或信用利差扩大，风电/分布式光伏压力会增加 |

## 主要来源

- Vestas, “Interim Report, First Quarter 2026,” 2026-05-06: https://www.vestas.com/en/media/company-news/2026/vestas---interim-report--first-quarter-2026-c4344988
- Vestas Q1 2026 Investor Presentation / financial table excerpt: https://www.vestas.com/content/dam/vestas-com/global/en/investor/reports-and-presentations/financial/2026/q1-2026/2026%20Q1%20Investor%20Presentation.pdf.coredownload.inline.pdf
- First Solar Q1 2026 Earnings Presentation: https://s202.q4cdn.com/499595574/files/doc_financials/2026/q1/Q1-26-Earnings-Presentation-vf-Secured.pdf
- First Solar Q1 2026 SEC-filed earnings release, Exhibit 99.1: https://www.sec.gov/Archives/edgar/data/1274494/000127449426000108/ex991pressreleaseq1-2026.htm
- U.S. Treasury Daily Treasury Par Yield Curve Rates, 2026 data: https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve
- First Trust Global Wind Energy ETF (FAN) fund page, performance and holdings context: https://www.ftportfolios.com/etf/FAN
- Invesco Solar ETF (TAN) market and holdings context via StockAnalysis: https://stockanalysis.com/etf/tan/

