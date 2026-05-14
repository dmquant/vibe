---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "权益策略"
---

# [auto-handoff] 信贷与权益背离验证

Status: **completed**
Dispatch status: **completed**
Sender: **Sentiment Analyst**
Recipient: **Chief Strategist**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] 信贷与权益背离验证]]
- Sender: [[Sentiment Analyst]]
- Recipient: [[Chief Strategist]]
- Analyst level: [[权益策略]]

## Latest body

致 市场情绪师：

协同任务已完成。执行方为 首席策略师。
模式: adhoc
会话: bc9f41c6-f218-4f2b-a530-a49a77ad5e1b

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Chief Strategist (首席策略师).
# Expertise
A-share strategy, style rotation, sector allocation.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)
- china_bond_yield_curves_20060511_20260511.csv (china_bond_yield_curves_20060511_20260511.csv)
- csi300_daily_20060511_20260511.csv (csi300_daily_20060511_20260511.csv)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] 信贷与权益背离验证 / replied

From: Sentiment Analyst
To: Chief Strategist
Created: 11/05/2026, 06:35:06

Auto-handoff emitted by Sentiment Analyst after the run of 市场情绪师 · 隔夜情绪资金扫描 finished.
Source workflow: analyst:sentiment-analyst:topic_pitch_overnight_sentiment
Source run: 188c8ca7-d08b-4dfc-8547-c1082ba46ed4
Source session: cb99ad76-9c1b-473d-a320-83fed2808397
Priority: high

--- Requested follow-up ---
请分析过去 20 年中信贷利差走阔而权益市场反弹的案例，当前的背离程度是否达到了触发衰退定价的临界点？

### 2. result / sent

From: Chief Strategist
To: Sentiment Analyst
Created: 11/05/2026, 06:55:16

致 市场情绪师：

协同任务已完成。执行方为 首席策略师。
模式: adhoc
会话: bc9f41c6-f218-4f2b-a530-a49a77ad5e1b

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Chief Strategist (首席策略师).
# Expertise
A-share strategy, style rotation, sector allocation.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)
- china_bond_yield_curves_20060511_20260511.csv (china_bond_yield_curves_20060511_20260511.csv)
- csi300_daily_20060511_20260511.csv (csi300_daily_20060511_20260511.csv)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 首席策略师 · [auto-handoff] 信贷与权益背离验证

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **11/05/2026, 06:35:06**
Completed: **11/05/2026, 06:55:16**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
Chief Strategist (首席策略师).
# Expertise
A-share strategy, style rotation, sector allocation.

# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content (same numbers, same citations, same conclusions, idiomatic English prose).
- You MUST use your file-creation tool (shell, write_file, or your CLI's equivalent) to actually write BOTH files. Printing content as your chat reply alone is NOT acceptable.
- After writing, verify both files exist (e.g. `ls -la handoff_response.md handoff_response.en.md`). Your chat reply must be a single confirmation line in the form: `Wrote handoff_response.md (<bytes> bytes); wrote handoff_response.en.md (<bytes> bytes) — <one-sentence summary>`.
- This step is graded on the presence and content of BOTH files in the workspace. If either is missing, the step is treated as failed regardless of how good the inline content was, and downstream steps will fail.
- Do NOT echo the deliverables' full content in your chat reply. The reply is the confirmation line only; the deliverables live in the files.

# Task
# Incoming coordination request from Sentiment Analyst
Source workflow: 市场情绪师 · 隔夜情绪资金扫描 (analyst:sentiment-analyst:topic_pitch_overnight_sentiment)
Source run: 188c8ca7-d08b-4dfc-8547-c1082ba46ed4

# The question
请分析过去 20 年中信贷利差走阔而权益市场反弹的案例，当前的背离程度是否达到了触发衰退定价的临界点？

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
Chief Strategist (首席策略师).
# Expertise
A-share strategy, style rotation, sector allocation.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the


## Attached Markdown

### 1. Mailbox · 首席策略师 · [auto-handoff] 信贷与权益背离验证

# Credit Spreads Widening While Equities Rebound: Are We Near a Recession-Pricing Trigger?

Date anchor: 2026-05-11. All references to “current” and “previous trading day” are resolved against the local shell date; the latest common market window available for A-shares and FRED data is around 2026-05-08.

## Priority Conclusions

1. **The recession-pricing trigger has not been reached.** China’s 3-year AAA medium-term note minus 3-year CGB spread is **43.2bp**, around the **9.3rd percentile** of the daily sample since 2008; the 1-year and 5-year spreads on the same basis are **32.3bp** and **38.8bp**. This is not broadening credit stress; it is a narrow, low-level fluctuation after a small rebound.
2. **The current “equity rebound plus wider credit spreads” divergence is weak.** As of 2026-05-08, the CSI 300 closed at **4871.9**; it rose **9.7%** over the past **20 trading days**, while the 3-year AAA credit spread widened by only **5.1bp**. Over 40 trading days, the CSI 300 rose **5.6%** and the spread changed by **0.0bp**; over 60 trading days, the CSI 300 rose **3.5%** and the spread actually **tightened by 1.2bp**.
3. **The historical warning zone is “high spread level plus further widening.”** A practical empirical threshold is a 3-year AAA spread at **120-150bp**, with another roughly **50bp** widening over 40-60 trading days, while the equity rally is driven by policy or liquidity expectations rather than earnings improvement. The current **43.2bp** level is still about **77-107bp** below that zone.
4. **Global credit cross-checks also do not confirm a recession trade.** FRED shows U.S. HY OAS at **2.79%** on 2026-05-07 and IG OAS at **0.79%**; the S&P 500 closed at **7398.93** on 2026-05-08. The S&P 500 rose **8.5%/11.6%** over the past 20/40 trading days, while HY OAS **tightened by 15bp/49bp**. That is not a widening-spread divergence.

## Methodology and Data Definitions

| Item | Definition |
|---|---|
| China credit-spread proxy | ChinaBond 3-year AAA medium-term note yield minus ChinaBond 3-year CGB yield, in bp |
| Equity proxy | CSI 300 daily close |
| Sample | Pulled from 2006-05-11 to 2026-05-11; usable daily overlap for the 3-year AAA spread and CSI 300 runs from 2008-01-02 to 2026-05-08 |
| Divergence definition | CSI 300 up more than 5% over 20/40/60 trading days, while the 3-year AAA spread widens by more than 20bp; major warning threshold uses roughly 50bp widening or a 120-150bp spread level |

## Historical Case Comparison

| Date | Macro/market backdrop | Observation window | CSI 300 return | 3-year AAA spread change | Spread level | Next 60 trading-day CSI 300 return |
|---|---|---:|---:|---:|---:|---:|
| 2011-04-06 | Inflation, tightening, and rising credit risk | 60 days | 5.8% | +61.2bp | 159.6bp | -7.9% |
| 2013-12-04 | Aftershock of the liquidity squeeze, shadow-credit contraction concern | 60 days | 6.7% | +65.7bp | 185.0bp | -12.2% |
| 2014-12-17 | Post-rate-cut risk appetite surge and leveraged bull-market launch | 20 days | 32.5% | +61.0bp | 155.7bp | +15.8% |
| 2015-03-31 | Bull market acceleration while credit spreads stayed high | 40 days | 13.3% | +37.2bp | 158.3bp | +7.0% |
| 2016-04-27 | Supply-side reform and rising default concern | 60 days | 7.7% | +53.3bp | 101.5bp | +2.1% |
| 2016-12-05 | Financial deleveraging and bond-market selloff | 40 days | 5.3% | +51.5bp | 105.4bp | -0.4% |
| 2018-01-24 | Financial regulation and late-stage deleveraging pressure | 60 days | 9.6% | +52.9bp | 170.3bp | -14.4% |
| 2020-07-17 | Post-pandemic repair and broad-credit delivery | 20 days | 13.1% | +42.7bp | 110.4bp | +4.6% |
| 2022-12-16 | Wealth-management redemption shock plus reopening trade | 40 days | 5.6% | +67.6bp | 94.6bp | -0.4% |
| 2024-10-08 | Fast policy-expectation-driven rally | 40 days | 25.8% | +46.6bp | 78.0bp | -7.5% |
| 2026-05-08 | Current window | 20 days | 9.7% | +5.1bp | 43.2bp | Unknown |

The historical rule is not “wider spreads mean stocks must fall.” 2014-2015 and 2020 show that policy easing, leverage expansion, or real economic repair can overwhelm credit-spread noise. But when the spread level is already around or above **150bp** and continues to widen by roughly **50bp** over 40-60 trading days, the following 1-3 months usually move into higher volatility or index drawdown. 2011, 2013, and 2018 are the clearer recession/hard-landing repricing templates.

## Current Assessment

- **Credit side:** The current 3-year AAA spread of **43.2bp** is below the sample median of **96.2bp** and below the 25th percentile of **58.9bp**; it is far from the 90th percentile of **158.3bp** and the 95th percentile of **172.3bp**.
- **Equity side:** The CSI 300’s **9.7%** 20-day rebound is a risk-appetite repair, but it is not paired with expanding credit stress. The setup looks more like “equities repair first while credit spreads remain low.”
- **Cross-market side:** U.S. HY OAS at **2.79%** and IG OAS at **0.79%** are both low in absolute terms; the S&P 500 rebound has been accompanied by HY OAS tightening, so global credit has not confirmed a hard-landing signal.

## Implications for A-Share Strategy

1. **Do not upgrade the current divergence into a recession trade.** Portfolios do not need a systematic equity de-risking move purely because of credit spreads; the signal is better treated as a risk monitor.
2. **Keep a barbell rather than shifting into outright defense.** Low spreads support equity risk-premium repair. Maintain a high-dividend/cash-flow core while keeping exposure to manufacturing, technology, and consumer-service repair that can benefit from earnings upgrades and policy catalysts.
3. **Signals that would force a reassessment:** A break above **80bp** in the 3-year AAA spread is the first warning. A break above **120bp**, plus **50bp** widening over 40-60 trading days while the CSI 300 keeps rising on valuation rather than earnings, would justify moving to a recession/hard-landing pricing framework.

## Follow-Up Items

- Update 1-year, 3-year, and 5-year AAA medium-term note minus CGB spreads weekly, and check whether the curve is widening in parallel.
- Track net credit-bond financing, wealth-management redemption pressure, and discounted trading in LGFV and property bonds to confirm whether curve widening is transmitting into funding stress.
- If the CSI 300 continues rising while the 3-year AAA spread breaks **80bp**, start sector-level stress tests: property chain, low-rating bond-sensitive issuers, bank credit costs, and SME/private-enterprise financing links.

## Data Sources

- ChinaBond, historical query for CGB and other bond yield curves: <https://yield.chinabond.com.cn/cbweb-pbc-web/pbc/historyQuery?startDate=2026-01-01&endDate=2026-05-11&gjqx=0&qxId=ycqx&locale=cn_ZH>
- ChinaMoney, bond closing yield curve description: <https://www.chinamoney.com.cn/chinese/bkcurvclosedy/>
- China Securities Index, CSI 300 factsheet/methodology: <https://oss-ch.csindex.com.cn/static/html/csindex/public/uploads/indices/detail/files/zh_CN/000300factsheet.pdf>
- Sina Finance, CSI 300 market page: <https://finance.sina.com.cn/realstock/company/sh000300/nc.shtml>
- FRED, ICE BofA US High Yield Index Option-Adjusted Spread: <https://fred.stlouisfed.org/series/BAMLH0A0HYM2>
- FRED, ICE BofA US Corporate Index Option-Adjusted Spread: <https://fred.stlouisfed.org/series/BAMLC0A0CM>
- FRED, S&P 500: <https://fred.stlouisfed.org/series/SP500>

### 2. Mailbox · 首席策略师 · [auto-handoff] 信贷与权益背离验证

# 信用利差走阔但权益反弹：是否已到衰退定价临界点

锚定日期：2026-05-11。本报告所有“当前/上一交易日”均按本机日期回溯；A 股与 FRED 可得市场数据的最新共同交易窗口为 2026-05-08 附近。

## 优先结论

1. **没有达到触发衰退定价的临界点。** 当前中国 3 年 AAA 中短期票据 - 3 年国债利差为 **43.2bp**，处在 2008 年以来日度样本的约 **第 9.3 百分位**；1 年、5 年同口径利差分别为 **32.3bp、38.8bp**。这不是信用压力扩散，更像低位小幅修复后的窄幅震荡。
2. **当前“权益反弹 + 利差走阔”的背离幅度偏弱。** 截至 2026-05-08，沪深300收于 **4871.9**；过去 **20 个交易日上涨 9.7%**，但 3 年 AAA 信用利差仅 **走阔 5.1bp**；40 个交易日沪深300上涨 **5.6%**、利差变化 **0.0bp**；60 个交易日沪深300上涨 **3.5%**、利差反而 **收窄 1.2bp**。
3. **历史上真正需要警惕的是“利差水平已高 + 继续走阔”。** 经验阈值可设为：3 年 AAA 利差升至 **120-150bp**，且 40-60 个交易日继续走阔 **50bp** 左右，同时权益反弹依赖政策或流动性预期而不是盈利改善。当前 **43.2bp** 距离该区间仍有约 **77-107bp**。
4. **全球信用交叉验证也不支持衰退交易。** FRED 显示美国 HY OAS 在 2026-05-07 为 **2.79%**，IG OAS 为 **0.79%**；同期 S&P 500 在 2026-05-08 收 **7398.93**。S&P 500 过去 20/40 个交易日分别上涨 **8.5%/11.6%**，HY OAS 分别 **收窄 15bp/49bp**，不是信用利差走阔背离。

## 方法与数据口径

| 项目 | 口径 |
|---|---|
| 中国信用利差代理 | 中债 3 年 AAA 中短期票据收益率 - 中债 3 年国债收益率，单位 bp |
| 权益代理 | 沪深300指数，日收盘价 |
| 样本 | 拉取 2006-05-11 至 2026-05-11；3 年 AAA 利差与沪深300可用日度重合样本自 2008-01-02 至 2026-05-08 |
| 背离定义 | 20/40/60 个交易日内沪深300上涨超过 5%，且 3 年 AAA 利差走阔超过 20bp；重大预警阈值使用走阔约 50bp 或利差水平 120-150bp |

## 历史案例对照

| 日期 | 宏观/市场背景 | 观察窗口 | 沪深300涨幅 | 3 年 AAA 利差变化 | 利差水平 | 后 60 个交易日沪深300 |
|---|---|---:|---:|---:|---:|---:|
| 2011-04-06 | 通胀、紧缩与信用风险抬头 | 60 日 | 5.8% | +61.2bp | 159.6bp | -7.9% |
| 2013-12-04 | 钱荒余波、非标与信用收缩担忧 | 60 日 | 6.7% | +65.7bp | 185.0bp | -12.2% |
| 2014-12-17 | 降息后风险偏好急升、杠杆牛启动 | 20 日 | 32.5% | +61.0bp | 155.7bp | +15.8% |
| 2015-03-31 | 牛市加速、信用利差仍在高位 | 40 日 | 13.3% | +37.2bp | 158.3bp | +7.0% |
| 2016-04-27 | 供给侧与信用违约担忧升温 | 60 日 | 7.7% | +53.3bp | 101.5bp | +2.1% |
| 2016-12-05 | 金融去杠杆与债市调整 | 40 日 | 5.3% | +51.5bp | 105.4bp | -0.4% |
| 2018-01-24 | 金融监管、去杠杆尾部压力 | 60 日 | 9.6% | +52.9bp | 170.3bp | -14.4% |
| 2020-07-17 | 疫后修复与宽信用兑现 | 20 日 | 13.1% | +42.7bp | 110.4bp | +4.6% |
| 2022-12-16 | 理财赎回冲击叠加复苏交易 | 40 日 | 5.6% | +67.6bp | 94.6bp | -0.4% |
| 2024-10-08 | 政策预期驱动的快速反弹 | 40 日 | 25.8% | +46.6bp | 78.0bp | -7.5% |
| 2026-05-08 | 当前窗口 | 20 日 | 9.7% | +5.1bp | 43.2bp | 未知 |

历史规律并不简单等于“利差走阔时股票必跌”。2014-2015 与 2020 显示，政策放松、杠杆扩张或经济修复足以覆盖信用利差噪音。但当利差水平已在 **150bp** 附近或以上、且 40-60 日继续走阔 **50bp** 左右时，后续 1-3 个月通常会进入波动放大或指数回撤窗口，2011、2013、2018 是更典型的衰退/硬着陆再定价样本。

## 当前判断

- **信用端：** 当前 3 年 AAA 利差 **43.2bp**，低于样本中位数 **96.2bp**，也低于 25 分位 **58.9bp**；距离 90 分位 **158.3bp** 与 95 分位 **172.3bp** 很远。
- **权益端：** 沪深300的 20 日反弹 **9.7%** 是风险偏好修复，但不是与信用压力同步扩散的组合；当前更像“权益先行修复、信用利差仍在低位”的环境。
- **跨市场：** 美国 HY OAS **2.79%**、IG OAS **0.79%** 均处在低绝对水平；S&P 500 反弹伴随 HY OAS 收窄，全球信用没有给出硬着陆确认。

## 对 A 股策略的含义

1. **不宜把当前背离直接上升为衰退交易。** 组合上不需要因信用利差而系统性降仓；更合理的是把它作为风险监控项。
2. **风格上维持哑铃而非单边防御。** 低利差支持权益风险溢价修复，可保留高股息/现金流底仓，同时配置受益于盈利预期上修和政策催化的制造、科技、消费服务修复方向。
3. **触发再评估的信号：** 3 年 AAA 利差上破 **80bp** 是第一预警；上破 **120bp** 且 40-60 日走阔 **50bp**，同时沪深300仍靠估值驱动上涨，才应转向衰退/硬着陆定价框架。

## 后续跟踪项

- 每周更新 1 年、3 年、5 年 AAA 中票-国债利差，并记录是否同步上行。
- 跟踪信用债净融资、理财赎回压力、城投与地产债成交折价，确认利差走阔是否从估值曲线传导到融资压力。
- 若沪深300继续上涨但 3 年 AAA 利差突破 **80bp**，建议启动行业层面的压力测试：地产链、低评级债敏感主体、银行信用成本与小微/民企融资链条。

## 数据来源

- ChinaBond/中国债券信息网，国债及其他债券收益率曲线历史查询：<https://yield.chinabond.com.cn/cbweb-pbc-web/pbc/historyQuery?startDate=2026-01-01&endDate=2026-05-11&gjqx=0&qxId=ycqx&locale=cn_ZH>
- 中国货币网，债券收盘收益率曲线说明：<https://www.chinamoney.com.cn/chinese/bkcurvclosedy/>
- 中证指数，沪深300指数事实表/编制说明：<https://oss-ch.csindex.com.cn/static/html/csindex/public/uploads/indices/detail/files/zh_CN/000300factsheet.pdf>
- 新浪财经，沪深300指数行情页：<https://finance.sina.com.cn/realstock/company/sh000300/nc.shtml>
- FRED，ICE BofA US High Yield Index Option-Adjusted Spread：<https://fred.stlouisfed.org/series/BAMLH0A0HYM2>
- FRED，ICE BofA US Corporate Index Option-Adjusted Spread：<https://fred.stlouisfed.org/series/BAMLC0A0CM>
- FRED，S&P 500：<https://fred.stlouisfed.org/series/SP500>

