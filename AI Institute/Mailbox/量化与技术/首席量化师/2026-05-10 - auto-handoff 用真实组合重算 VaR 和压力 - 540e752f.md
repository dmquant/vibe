---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "量化与技术"
---

# [auto-handoff] 用真实组合重算 VaR 和压力测试

Status: **completed**
Dispatch status: **completed**
Sender: **Chief Risk Officer**
Recipient: **Chief Quant**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] 用真实组合重算 VaR 和压力测试]]
- Sender: [[Chief Risk Officer]]
- Recipient: [[Chief Quant]]
- Analyst level: [[量化与技术]]

## Latest body

致 首席风控官：

协同任务已完成。执行方为 首席量化师。
模式: adhoc
会话: 5df53f10-d338-4dc4-a5c7-dcc243e60ddd

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Chief Quant (首席量化师).
# Expertise
Multi-factor models, alpha mining, strategy portfolio.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the sa

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] 用真实组合重算 VaR 和压力测试 / replied

From: Chief Risk Officer
To: Chief Quant
Created: 10/05/2026, 10:25:49

Auto-handoff emitted by Chief Risk Officer after the run of 首席风控官 · 每周研究周报 finished.
Source workflow: analyst:chief-risk:weekly_report
Source run: 20959c09-6bc6-4034-a679-1ecfc9134c73
Source session: 1263e00a-0e8b-4035-9e2f-05ff65d12503
Priority: high

--- Requested follow-up ---
请用实际组合持仓替换研究稿中的代理组合 `SPY 40%`、`QQQ 20%`、`IWM 10%`、`TLT 10%`、`HYG 10%`、`LQD 5%`、`GLD 5%`，重算截至 `2026-05-08` 的 `95%` 日 VaR、`99%` 日 VaR、最大回撤，以及油价再跌 `10%`、油价反弹 `10%`、`10Y` 上行 `50 bp`、`VIX` 升至 `25`、科技股下跌 `8%` 五个情景的组合 P&L。

### 2. result / sent

From: Chief Quant
To: Chief Risk Officer
Created: 10/05/2026, 10:30:41

致 首席风控官：

协同任务已完成。执行方为 首席量化师。
模式: adhoc
会话: 5df53f10-d338-4dc4-a5c7-dcc243e60ddd

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Chief Quant (首席量化师).
# Expertise
Multi-factor models, alpha mining, strategy portfolio.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the sa

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 首席量化师 · [auto-handoff] 用真实组合重算 VaR 和压力测试

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **10/05/2026, 10:25:50**
Completed: **10/05/2026, 10:30:41**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
Chief Quant (首席量化师).
# Expertise
Multi-factor models, alpha mining, strategy portfolio.

# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content (same numbers, same citations, same conclusions, idiomatic English prose).
- You MUST use your file-creation tool (shell, write_file, or your CLI's equivalent) to actually write BOTH files. Printing content as your chat reply alone is NOT acceptable.
- After writing, verify both files exist (e.g. `ls -la handoff_response.md handoff_response.en.md`). Your chat reply must be a single confirmation line in the form: `Wrote handoff_response.md (<bytes> bytes); wrote handoff_response.en.md (<bytes> bytes) — <one-sentence summary>`.
- This step is graded on the presence and content of BOTH files in the workspace. If either is missing, the step is treated as failed regardless of how good the inline content was, and downstream steps will fail.
- Do NOT echo the deliverables' full content in your chat reply. The reply is the confirmation line only; the deliverables live in the files.

# Task
# Incoming coordination request from Chief Risk Officer
Source workflow: 首席风控官 · 每周研究周报 (analyst:chief-risk:weekly_report)
Source run: 20959c09-6bc6-4034-a679-1ecfc9134c73

# The question
请用实际组合持仓替换研究稿中的代理组合 `SPY 40%`、`QQQ 20%`、`IWM 10%`、`TLT 10%`、`HYG 10%`、`LQD 5%`、`GLD 5%`，重算截至 `2026-05-08` 的 `95%` 日 VaR、`99%` 日 VaR、最大回撤，以及油价再跌 `10%`、油价反弹 `10%`、`10Y` 上行 `50 bp`、`VIX` 升至 `25`、科技股下跌 `8%` 五个情景的组合 P&L。

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
Chief Quant (首席量化师).
# Expertise
Multi-factor models, alpha mining, strategy portfolio.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the sa


## Attached Markdown

### 1. Mailbox · 首席量化师 · [auto-handoff] 用真实组合重算 VaR 和压力测试

# Chief Quant Handoff: Actual-Holdings Replacement and Risk Recalculation

## Prioritized Conclusions

1. **This run cannot be certified as an “actual portfolio holdings” recalculation.** The workspace contains no upstream research draft, actual holdings file, portfolio NAV, currency data, derivative delta, cash, or financing information; I also found no reconstructable actual holdings detail in the conversation context. Therefore, I cannot replace the proxy portfolio with the true book and produce auditable actual-portfolio VaR / scenario P&L.
2. **To avoid blocking the risk weekly, I recalculated a reproducible proxy baseline as of `2026-05-08`.** The methodology is 5-year historical simulation, daily adjusted closes, window `2021-05-07` to `2026-05-08`, with `n=1,255` daily returns. For the proxy portfolio, `95%` daily VaR is **1.39%**, `99%` daily VaR is **2.42%**, and maximum drawdown is **-25.35%**.
3. **Across the five scenarios, the largest single shock is “technology stocks down 8%.”** Using one-factor betas estimated over the same historical window, proxy-portfolio P&L is **-4.86%**; VIX rising to `25` is **-2.94%**; 10Y rising `50 bp` is **-1.50%**; oil down / up `10%` is **-0.19% / +0.19%**. The oil scenario has very low correlation and is the lowest-confidence estimate.
4. **Minimum input required for the next step.** Please provide the actual holdings file with at least `as_of_date`, `ticker / ISIN / CUSIP`, `asset_class`, `quantity`, `market_value_base_ccy`, `base_ccy`, `long_short`, `delta_adjusted_exposure`, `duration / DV01`, `sector / country`, cash, and financing balances; for options, futures, swaps, or CDS, provide delta, gamma, vega, DV01 / CS01.

## Proxy-Portfolio Recalculation

| Metric | Result | Method note |
|---|---:|---|
| 95% daily VaR | **1.39%** | Historical simulation; loss version of the 5% quantile of daily portfolio returns |
| 99% daily VaR | **2.42%** | Historical simulation; loss version of the 1% quantile of daily portfolio returns |
| Maximum drawdown | **-25.35%** | Peak-to-trough drawdown of cumulative proxy-portfolio NAV over the same window |
| Drawdown peak date | `2021-12-27` | Cumulative proxy-portfolio NAV peak |
| Drawdown trough date | `2022-10-14` | Cumulative proxy-portfolio NAV trough |
| Sample window | `2021-05-07` to `2026-05-08` | Prior U.S. trading day relative to shell date `2026-05-10` |
| Daily return observations | `1,255` | Daily returns from ETF adjusted closes |

## Portfolio P&L Under Five Scenarios

P&L is portfolio return in percent. The amount in parentheses is the equivalent for a `100,000,000` USD portfolio NAV. Since actual portfolio NAV was not provided, dollar P&L is only a linear scaling reference.

| Scenario | Driver and shock | Beta / sensitivity | Correlation | Proxy-portfolio P&L |
|---|---:|---:|---:|---:|
| Oil down another 10% | `CL=F` daily return `-10%` | `0.0193` | `0.054` | **-0.19%** (about `-$0.193m` / `$100m`) |
| Oil rebounds 10% | `CL=F` daily return `+10%` | `0.0193` | `0.054` | **+0.19%** (about `+$0.193m` / `$100m`) |
| 10Y up 50 bp | `^TNX` yield change `+0.50` percentage points | `-0.0301` / 1 percentage point | `-0.208` | **-1.50%** (about `-$1.505m` / `$100m`) |
| VIX rises to 25 | `^VIX` rises from `17.19` to `25`, change `+7.81` points | `-0.00376` / VIX point | `-0.749` | **-2.94%** (about `-$2.939m` / `$100m`) |
| Technology stocks down 8% | `QQQ` daily return `-8%` | `0.6077` | `0.952` | **-4.86%** (about `-$4.862m` / `$100m`) |

## Data and Methodology

- Date anchor: as required, I first ran `date +%Y-%m-%d`; the shell returned `2026-05-10`. All “as of / prior trading day” references use that date, and `2026-05-08` is the market-data cutoff for this run.
- Portfolio definition: the research draft’s proxy portfolio is `SPY 40%`, `QQQ 20%`, `IWM 10%`, `TLT 10%`, `HYG 10%`, `LQD 5%`, `GLD 5%`. Because actual holdings are missing, no true-holdings replacement was performed.
- VaR: construct daily ETF returns from adjusted closes, linearly aggregate returns by weights, and report `95%` / `99%` daily VaR as the positive loss corresponding to the 5% / 1% quantiles.
- Maximum drawdown: compute peak-to-trough drawdown from cumulative proxy-portfolio returns.
- Scenarios: estimate the proxy portfolio’s daily return beta to each single risk driver over the same window, then multiply by the requested shock. Oil uses `CL=F`; 10Y uses `^TNX` yield changes in percentage points; VIX uses `^VIX` point changes; technology stocks use `QQQ`.

## Cutoff Market Data

| Data item | `2026-05-08` close / adjusted close |
|---|---:|
| `SPY` | `737.62` |
| `QQQ` | `711.23` |
| `IWM` | `284.17` |
| `TLT` | `86.08` |
| `HYG` | `80.14` |
| `LQD` | `109.20` |
| `GLD` | `433.77` |
| `CL=F` | `95.42` |
| `^TNX` | `4.364%` |
| `^VIX` | `17.19` |

## Sources

- Yahoo Finance chart historical price endpoints, downloaded on `2026-05-10`: [`SPY`](https://query1.finance.yahoo.com/v8/finance/chart/SPY?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit), [`QQQ`](https://query1.finance.yahoo.com/v8/finance/chart/QQQ?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit), [`IWM`](https://query1.finance.yahoo.com/v8/finance/chart/IWM?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit), [`TLT`](https://query1.finance.yahoo.com/v8/finance/chart/TLT?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit), [`HYG`](https://query1.finance.yahoo.com/v8/finance/chart/HYG?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit), [`LQD`](https://query1.finance.yahoo.com/v8/finance/chart/LQD?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit), [`GLD`](https://query1.finance.yahoo.com/v8/finance/chart/GLD?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit).
- Yahoo Finance chart scenario-driver endpoints, downloaded on `2026-05-10`: [`CL=F`](https://query1.finance.yahoo.com/v8/finance/chart/CL%3DF?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit), [`^TNX`](https://query1.finance.yahoo.com/v8/finance/chart/%5ETNX?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit), [`^VIX`](https://query1.finance.yahoo.com/v8/finance/chart/%5EVIX?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit).

## Follow-Up Items

1. Once Risk or Portfolio Management provides the true holdings and NAV, I can rerun the actual portfolio using the same price source and window; if the book includes non-U.S. assets, local prices, FX, and trading calendars are also required.
2. For bonds, options, and credit products, holding-level DV01 / CS01 / Greeks should be used for scenarios instead of ETF-beta proxies.
3. The oil scenario’s proxy-portfolio beta has only `0.054` correlation, so it should not be treated as an energy exposure conclusion; if the true book holds energy equities, commodity futures, oil services, airlines, or consumer fuel exposures, those should be decomposed separately.

### 2. Mailbox · 首席量化师 · [auto-handoff] 用真实组合重算 VaR 和压力测试

# 首席量化师交接回复：实际持仓替换与风险重算

## 优先结论

1. **本次不能认证为“实际组合持仓”重算。** 工作区没有上游研究稿、实际持仓清单、组合 NAV、币种、衍生品 delta、现金或融资信息；我也没有在对话上下文中看到可重建的实际持仓明细。因此，无法把研究稿中的代理组合替换成真实组合并给出可审计的实际组合 VaR / 情景 P&L。
2. **为避免阻塞风控周报，我已按原代理组合重算一套截至 `2026-05-08` 的可复核基准数。** 口径为 5 年历史模拟、日频调整收盘价、窗口 `2021-05-07` 至 `2026-05-08`，`n=1,255` 个日收益。代理组合的 `95%` 日 VaR 为 **1.39%**，`99%` 日 VaR 为 **2.42%**，最大回撤为 **-25.35%**。
3. **五个情景下，代理组合最大单项冲击来自“科技股下跌 8%”。** 用同一历史窗口的一因子 beta 估算，代理组合 P&L 为 **-4.86%**；VIX 升至 `25` 为 **-2.94%**；10Y 上行 `50 bp` 为 **-1.50%**；油价下跌 / 反弹 `10%` 分别为 **-0.19% / +0.19%**。油价情景相关性很低，结论置信度最低。
4. **下一步最小输入。** 请提供实际持仓文件，至少包含 `as_of_date`、`ticker / ISIN / CUSIP`、`asset_class`、`quantity`、`market_value_base_ccy`、`base_ccy`、`long_short`、`delta_adjusted_exposure`、`duration / DV01`、`sector / country`、现金与融资余额；有期权、期货、掉期或 CDS 时需提供 delta、gamma、vega、DV01 / CS01。

## 代理组合重算结果

| 指标 | 结果 | 口径说明 |
|---|---:|---|
| 95% 日 VaR | **1.39%** | 历史模拟法，取组合日收益 5% 分位数的损失口径 |
| 99% 日 VaR | **2.42%** | 历史模拟法，取组合日收益 1% 分位数的损失口径 |
| 最大回撤 | **-25.35%** | 同一窗口内组合净值峰谷回撤 |
| 回撤峰值日 | `2021-12-27` | 代理组合累计净值峰值 |
| 回撤谷值日 | `2022-10-14` | 代理组合累计净值谷值 |
| 样本窗口 | `2021-05-07` 至 `2026-05-08` | 截至 shell 日期 `2026-05-10` 前的上一美股交易日 |
| 日收益样本数 | `1,255` | ETF 调整收盘价日收益 |

## 五个情景的组合 P&L

P&L 为组合百分比收益；括号中为每 `100,000,000` 美元组合 NAV 的等价金额。实际组合 NAV 未提供，因此美元金额仅作线性缩放参考。

| 情景 | 驱动变量与冲击 | beta / 敏感度 | 相关性 | 代理组合 P&L |
|---|---:|---:|---:|---:|
| 油价再跌 10% | `CL=F` 日收益 `-10%` | `0.0193` | `0.054` | **-0.19%**（约 `-$0.193m` / `$100m`） |
| 油价反弹 10% | `CL=F` 日收益 `+10%` | `0.0193` | `0.054` | **+0.19%**（约 `+$0.193m` / `$100m`） |
| 10Y 上行 50 bp | `^TNX` 收益率变动 `+0.50` 个百分点 | `-0.0301` / 1 个百分点 | `-0.208` | **-1.50%**（约 `-$1.505m` / `$100m`） |
| VIX 升至 25 | `^VIX` 从 `17.19` 升至 `25`，变动 `+7.81` 点 | `-0.00376` / VIX 点 | `-0.749` | **-2.94%**（约 `-$2.939m` / `$100m`） |
| 科技股下跌 8% | `QQQ` 日收益 `-8%` | `0.6077` | `0.952` | **-4.86%**（约 `-$4.862m` / `$100m`） |

## 数据与方法

- 日期锚点：按要求先运行 `date +%Y-%m-%d`，shell 返回 `2026-05-10`；所有“截至 / 上一交易日”均按该日期解释，`2026-05-08` 为本次计算的市场数据截点。
- 组合口径：研究稿中的代理组合 `SPY 40%`、`QQQ 20%`、`IWM 10%`、`TLT 10%`、`HYG 10%`、`LQD 5%`、`GLD 5%`。因为实际持仓缺失，未做真实持仓替换。
- VaR：用各 ETF 调整收盘价构造日收益，再按权重线性加总组合日收益；`95%` / `99%` 日 VaR 分别为历史日收益 5% / 1% 分位数的正损失。
- 最大回撤：用代理组合日收益累计净值计算峰谷回撤。
- 情景：用同一窗口估算组合日收益对单一驱动因子的 OLS beta，再把指定冲击乘以 beta。油价用 `CL=F`，10Y 用 `^TNX` 收益率百分点变动，VIX 用 `^VIX` 点数变动，科技股用 `QQQ`。

## 截点市场数据

| 数据项 | `2026-05-08` 收盘 / 调整收盘 |
|---|---:|
| `SPY` | `737.62` |
| `QQQ` | `711.23` |
| `IWM` | `284.17` |
| `TLT` | `86.08` |
| `HYG` | `80.14` |
| `LQD` | `109.20` |
| `GLD` | `433.77` |
| `CL=F` | `95.42` |
| `^TNX` | `4.364%` |
| `^VIX` | `17.19` |

## 来源

- Yahoo Finance chart 历史价格接口，下载于 `2026-05-10`：[`SPY`](https://query1.finance.yahoo.com/v8/finance/chart/SPY?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit)、[`QQQ`](https://query1.finance.yahoo.com/v8/finance/chart/QQQ?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit)、[`IWM`](https://query1.finance.yahoo.com/v8/finance/chart/IWM?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit)、[`TLT`](https://query1.finance.yahoo.com/v8/finance/chart/TLT?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit)、[`HYG`](https://query1.finance.yahoo.com/v8/finance/chart/HYG?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit)、[`LQD`](https://query1.finance.yahoo.com/v8/finance/chart/LQD?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit)、[`GLD`](https://query1.finance.yahoo.com/v8/finance/chart/GLD?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit)。
- Yahoo Finance chart 情景驱动变量接口，下载于 `2026-05-10`：[`CL=F`](https://query1.finance.yahoo.com/v8/finance/chart/CL%3DF?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit)、[`^TNX`](https://query1.finance.yahoo.com/v8/finance/chart/%5ETNX?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit)、[`^VIX`](https://query1.finance.yahoo.com/v8/finance/chart/%5EVIX?period1=1620316800&period2=1778256000&interval=1d&events=history%7Cdiv%7Csplit)。

## 跟进项

1. 风控或组合管理端提供真实持仓与 NAV 后，我可以用相同价格源和窗口重算实际组合；如果组合含非美股资产，需要补充本币价格、FX 和交易日历。
2. 对债券、期权和信用产品，应优先使用持仓级 DV01 / CS01 / Greeks 做情景，而不是 ETF beta 代理。
3. 油价情景的代理组合 beta 相关性仅 `0.054`，不能作为能源敞口结论；真实持仓若有能源股、商品期货、油服或航空消费敞口，需单独拆分。

