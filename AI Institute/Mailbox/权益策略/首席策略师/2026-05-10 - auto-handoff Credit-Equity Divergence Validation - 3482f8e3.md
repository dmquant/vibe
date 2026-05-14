---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "权益策略"
---

# [auto-handoff] Credit-Equity Divergence Validation

Status: **completed**
Dispatch status: **completed**
Sender: **Sentiment Analyst**
Recipient: **Chief Strategist**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] Credit-Equity Divergence Validation]]
- Sender: [[Sentiment Analyst]]
- Recipient: [[Chief Strategist]]
- Analyst level: [[权益策略]]

## Latest body

致 市场情绪师：

协同任务已完成。执行方为 首席策略师。
模式: adhoc
会话: e47ae2ca-ffae-4d0e-b45e-d2fc96aa3f82

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

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] Credit-Equity Divergence Validation / replied

From: Sentiment Analyst
To: Chief Strategist
Created: 11/05/2026, 06:36:59

Auto-handoff emitted by Sentiment Analyst after the run of 市场情绪师 · 隔夜情绪资金扫描 finished.
Source workflow: analyst:sentiment-analyst:topic_pitch_overnight_sentiment
Source run: 188c8ca7-d08b-4dfc-8547-c1082ba46ed4
Source session: cb99ad76-9c1b-473d-a320-83fed2808397
Priority: high

--- Requested follow-up ---
Analyze historical cases over the last 20 years where credit spreads widened during equity rallies. Does the current divergence level trigger recession-pricing thresholds?

### 2. result / sent

From: Chief Strategist
To: Sentiment Analyst
Created: 11/05/2026, 06:45:09

致 市场情绪师：

协同任务已完成。执行方为 首席策略师。
模式: adhoc
会话: e47ae2ca-ffae-4d0e-b45e-d2fc96aa3f82

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

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 首席策略师 · [auto-handoff] Credit-Equity Divergence Validation

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **11/05/2026, 06:36:59**
Completed: **11/05/2026, 06:45:09**

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
Analyze historical cases over the last 20 years where credit spreads widened during equity rallies. Does the current divergence level trigger recession-pricing thresholds?

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

### 1. Mailbox · 首席策略师 · [auto-handoff] Credit-Equity Divergence Validation

# Credit Spreads Widening During Equity Rallies: Has Recession Pricing Triggered?

Anchor date: 2026-05-11, from local shell `date +%Y-%m-%d`. The latest complete cross-asset observation is 2026-05-07; the S&P 500 alone is updated through 2026-05-08.

## Prioritized Conclusions

1. **The current setup does not trigger recession-pricing thresholds.** As of 2026-05-07, ICE BofA US High Yield OAS was **2.79%**, BBB OAS was **0.99%**, and US investment-grade corporate OAS was **0.79%**; the S&P 500 closed at **7,337.11** that day and rose further to **7,398.93** on 2026-05-08. Historically, HY OAS around **5%-6%** marks clear credit stress, while **8%+** is a high-stress/crisis zone; BBB OAS near or above **2%** looks more like broad recession pricing. The current HY OAS is still **221bp, 321bp, and 521bp** below the 5%, 6%, and 8% thresholds, respectively; BBB OAS is **101bp** below 2%.

2. **There is no active, actionable “equities up, credit materially worse” divergence right now.** In the 1-month window ending 2026-05-07, the S&P 500 rose **8.17%**, while HY OAS tightened **15bp**, BBB OAS tightened **6bp**, and investment-grade OAS tightened **4bp**. In the 3-month window, the S&P 500 rose **7.92%**, HY OAS tightened **18bp**, and BBB and investment-grade OAS widened only **3bp** each, too small to qualify as a recession signal.

3. **Historically, this type of divergence is an early risk warning, not a standalone recession call.** In 2007 and 2020, the key was not simply that equities were still rising; it was that HY OAS quickly moved above **5%-6%**, then toward **8%+**, alongside broad funding stress. The 2015-2016 and 2018 episodes show the opposite: credit can weaken first because of sector stress or valuation repricing without producing an NBER recession.

4. **Implication for the sentiment-flow scan: keep risk appetite intact, but raise trigger sensitivity.** The current credit reading looks more like “low default risk/crowded risk positioning” than a “recession trade.” If **HY OAS >4.0% and widens >75bp over 4 weeks**, downgrade to yellow alert. If **HY OAS >5.0% and BBB OAS >1.50%**, raise the external risk-premium assumption for A-shares. If **HY OAS >6.0% or BBB OAS >2.0%**, then recession pricing becomes the right discussion.

## Current Readings and Thresholds

| Indicator | Latest Reading | 1-Month Change | 3-Month Change | Recession/Stress Threshold | Conclusion |
|---|---:|---:|---:|---:|---|
| HY OAS | 2.79% | -15bp | -18bp | 5%-6% stress zone, 8%+ high-stress zone | Not triggered |
| BBB OAS | 0.99% | -6bp | +3bp | Near or above 2.0% | Not triggered |
| Investment-grade OAS | 0.79% | -4bp | +3bp | Watch 1.5%-2.0% range | Not triggered |
| S&P 500 | 7,337.11 (2026-05-07); 7,398.93 (2026-05-08) | +8.17% | +7.92% | Not applicable | Equity rally is not accompanied by credit deterioration |

Data note: FRED states that, starting in April 2026, the ICE BofA OAS series on FRED contains limited history and longer history requires the ICE source. This note therefore uses FRED for current readings and public historical compilations for the case-study framework.

## Main Cases Over the Last 20 Years

| Case | Divergence Setup | Key Numbers | Recession? | Implication for Today |
|---|---|---|---|---|
| 2007-2009 GFC | Credit deteriorated first while equities kept pushing to a peak | HY OAS low of **2.41%** in 2007-06; rose to **4.28%** by mid-2007-07, widening **187bp** in 6 weeks; S&P 500 still climbed to **1,562** in 2007-10; HY OAS peaked at **21.30%** in 2008-12; S&P 500 max drawdown **-56.2%** | Yes, NBER recession from 2007-12 to 2009-06 | The valid recession signal was “divergence + fast move above 5%-6% + broad funding stress” |
| 2014-2016 Energy/China shock | High-yield energy credit weakened first, while the S&P 500 kept making highs | HY OAS low of **3.36%** in 2014-06; S&P 500 reached **2,127** in 2015-07; HY OAS reached **8.64%** in 2016-02; S&P 500 drawdown **-12.3%** | No | HY can enter the stress zone as a sector shock; confirm whether BBB/investment-grade spreads are also deteriorating |
| Q4 2018 | Rate hikes, balance-sheet runoff, and trade worries weakened credit before equities peaked in 2018-09 | HY OAS low of **3.23%** in 2018-01; S&P 500 high of **2,930** in 2018-09; HY OAS expanded by about **2.07 percentage points** to roughly **5.30%**; S&P 500 drawdown **-17.5%** | No | Around 5% is a risk-asset drawdown signal, but without a labor/default chain it can be repaired by a policy turn |
| 2020 COVID | Credit led briefly, then both markets collapsed together | HY OAS low of **3.39%** in 2020-01; rose to **5.04%** on 2020-02-28; rose to **10.09%** on 2020-03-20; S&P 500 fell from **3,380** to **2,305**, a **-31.8%** drawdown | Yes, NBER recession from 2020-02 to 2020-04 | Exogenous shocks compress the lead time; once HY moves above 8% quickly, treat it as a crisis state |
| 2021-2022 rate shock | Credit softened modestly ahead of a large equity valuation reset | HY OAS low of **3.04%** in 2021-06; S&P 500 high of **4,766** in 2021-12; HY OAS peaked at **5.92%** in 2022-07; S&P 500 drawdown **-24.8%** | No | Equity valuation damage can be large, but credit below 8% argues against a classic default/recession-pricing event |

## Decision Framework

- **Divergence alone means bond investors are demanding more default compensation.** When large-cap growth stocks support the equity index, that signal can be hidden by index weights, as in the 2014-2016 energy credit episode.
- **Recession pricing needs three things at once:** HY OAS above the 5%-6% zone; BBB/investment-grade spreads widening too; and credit deterioration fast enough to outweigh the wealth effect from rising equities.
- **The current setup only satisfies “equities are strong,” not “credit is materially deteriorating.”** The 2026 HY OAS year-to-date high was **3.46%** on 2026-03-30, and it had fallen to **2.79%** by 2026-05-07; over the same phase, the S&P 500 rebounded from its **6,343.72** low to **7,337.11**. That is more consistent with risk-appetite repair than with credit markets front-running recession.

## Follow-Up Items for the Sentiment Analyst

1. Track `BAMLH0A0HYM2`, `BAMLC0A4CBBB`, `BAMLC0A0CM`, and the S&P 500 on matched dates; do not infer divergence from mixed-date observations.
2. Use three triggers: yellow alert at HY OAS >4.0% and >75bp widening over 4 weeks; orange alert at HY OAS >5.0% and BBB OAS >1.50%; red alert at HY OAS >6.0% or BBB OAS >2.0%.
3. If orange or red triggers fire, rotate the A-share style bias away from high beta/small-cap/theme trades toward high dividend, cash-flow quality, low leverage, and policy defensives. If they do not fire, overseas credit should not be treated as the main constraint on A-share risk appetite.

## Main Sources

- FRED: ICE BofA US High Yield OAS, **2.79%** on 2026-05-07; the page also explains that OAS is measured relative to a spot Treasury curve and that the FRED history is limited after April 2026. https://fred.stlouisfed.org/series/BAMLH0A0HYM2
- FRED: ICE BofA BBB US Corporate OAS, **0.99%** on 2026-05-07. https://fred.stlouisfed.org/series/BAMLC0A4CBBB
- FRED: ICE BofA US Corporate OAS, **0.79%** on 2026-05-07. https://fred.stlouisfed.org/series/BAMLC0A0CM
- FRED: S&P 500, **7,398.93** on 2026-05-08 and **7,337.11** on 2026-05-07. https://fred.stlouisfed.org/series/SP500
- NBER: US business-cycle dates, including recessions from 2007-12 to 2009-06 and from 2020-02 to 2020-04. https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions
- Eco3min Research: 1997-2026 weekly HY OAS, BBB OAS, and S&P 500 case-study compilation; used for the 2007, 2014-2016, 2018, 2020, and 2022 divergence figures and spread-regime thresholds. https://eco3min.fr/spreads-credit-high-yield-indicateur-avance-sp500-dataset/

### 2. Mailbox · 首席策略师 · [auto-handoff] Credit-Equity Divergence Validation

# 信用利差在权益上涨中走阔：是否已触发衰退定价？

锚定日期：2026-05-11，来自本地 shell `date +%Y-%m-%d`。最新完整交叉资产观测为 2026-05-07；S&P 500 单独已更新至 2026-05-08。

## 优先结论

1. **当前没有触发衰退定价阈值。**截至 2026-05-07，ICE BofA US High Yield OAS 为 **2.79%**，BBB OAS 为 **0.99%**，美国投资级公司债 OAS 为 **0.79%**；同日 S&P 500 收于 **7,337.11**，2026-05-08 进一步收于 **7,398.93**。以历史经验看，HY OAS **5%-6%** 才进入明显信用压力区，**8% 以上**才是高压力/危机区；BBB OAS **2% 附近或以上**才更像广谱衰退定价。当前 HY OAS 距 5%、6%、8% 阈值分别还有 **221bp、321bp、521bp**，BBB OAS 距 2% 还有 **101bp**。

2. **当前也不存在“股票上涨、信用明显恶化”的有效背离。**截至 2026-05-07 的 1 个月窗口中，S&P 500 上涨 **8.17%**，但 HY OAS 收窄 **15bp**，BBB OAS 收窄 **6bp**，投资级 OAS 收窄 **4bp**。3 个月窗口中，S&P 500 上涨 **7.92%**，HY OAS 收窄 **18bp**，BBB 与投资级 OAS 仅各走阔 **3bp**，幅度太小，不能作为衰退信号。

3. **历史上，这类背离是“早期风险预警”，不是单独的衰退判定。**2007 与 2020 的共同点不是权益还在涨，而是 HY OAS 快速越过 **5%-6%**，随后冲向 **8% 以上**，并伴随广谱融资压力。2015-2016 与 2018 则显示：信用先走弱也可能只是行业冲击或估值再定价，不必然对应 NBER 衰退。

4. **给情绪资金扫描的操作含义：维持风险偏好，但提高触发器敏感度。**当前信用读数更像“低违约风险/偏拥挤风险资产仓位”，不是“衰退交易”。若后续出现 **HY OAS >4.0% 且 4 周走阔 >75bp**，应降级为黄色预警；若 **HY OAS >5.0% 且 BBB OAS >1.50%**，才应把 A 股外部风险溢价假设上调；若 **HY OAS >6.0% 或 BBB OAS >2.0%**，再讨论衰退定价。

## 当前读数与阈值

| 指标 | 最新读数 | 近 1 个月变化 | 近 3 个月变化 | 衰退/压力阈值 | 结论 |
|---|---:|---:|---:|---:|---|
| HY OAS | 2.79% | -15bp | -18bp | 5%-6% 为压力区，8%+ 为高压力区 | 未触发 |
| BBB OAS | 0.99% | -6bp | +3bp | 2.0% 附近或以上 | 未触发 |
| 投资级 OAS | 0.79% | -4bp | +3bp | 1.5%-2.0% 区间需警惕 | 未触发 |
| S&P 500 | 7,337.11（2026-05-07）；7,398.93（2026-05-08） | +8.17% | +7.92% | 不适用 | 权益上涨未伴随信用走弱 |

数据说明：FRED 对 ICE BofA OAS 的页面注明，自 2026 年 4 月起该系列在 FRED 仅包含有限历史，完整更长历史需回到 ICE 数据源；因此本文用 FRED 做当前读数，用公开历史整理数据做历史案例框架。

## 近 20 年主要案例

| 案例 | 背离形态 | 关键数字 | 是否衰退 | 对当前的启示 |
|---|---|---|---|---|
| 2007-2009 GFC | 信用先恶化，权益继续冲顶 | HY OAS 2007-06 低点 **2.41%**；到 2007-07 中旬升至 **4.28%**，6 周走阔 **187bp**；S&P 500 到 2007-10 仍升至 **1,562**；HY OAS 2008-12 最高 **21.30%**，S&P 500 最大跌幅 **-56.2%** | 是，NBER 定义为 2007-12 至 2009-06 | 有效衰退信号来自“背离 + 快速越过 5%-6% + 广谱融资压力” |
| 2014-2016 能源/中国冲击 | 高收益能源债先恶化，标普继续创新高 | HY OAS 2014-06 低点 **3.36%**；S&P 500 2015-07 升至 **2,127**；HY OAS 2016-02 达 **8.64%**；S&P 500 跌幅 **-12.3%** | 否 | HY 可以进入压力区但仍是行业型冲击，需看 BBB/投资级是否同步恶化 |
| 2018 年四季度 | 加息、缩表和贸易担忧使信用先走弱，股票到 2018-09 才见顶 | HY OAS 2018-01 低点 **3.23%**；S&P 500 2018-09 高点 **2,930**；HY OAS 扩张约 **2.07 个百分点**至约 **5.30%**；S&P 500 跌幅 **-17.5%** | 否 | 5% 附近是风险资产回撤信号，但若没有失业和违约链条，常以政策转向修复 |
| 2020 COVID | 信用领先极短，随后同步崩跌 | HY OAS 2020-01 低点 **3.39%**；2020-02-28 升至 **5.04%**；2020-03-20 升至 **10.09%**；S&P 500 从 **3,380** 跌至 **2,305**，跌幅 **-31.8%** | 是，NBER 定义为 2020-02 至 2020-04 | 外生冲击会压缩领先期；一旦 HY 快速越过 8%，应按危机状态处理 |
| 2021-2022 利率冲击 | 信用提前小幅恶化，权益后续大跌 | HY OAS 2021-06 低点 **3.04%**；S&P 500 2021-12 高点 **4,766**；HY OAS 2022-07 最高 **5.92%**；S&P 500 跌幅 **-24.8%** | 否 | 估值杀伤可很大，但信用未越过 8%，说明不是典型违约/衰退定价 |

## 判断框架

- **背离本身只说明债券投资者开始要求更高违约补偿。**在权益指数由大型成长股支撑时，这种信号可能被指数权重掩盖，尤其是 2014-2016 的能源信用压力。
- **衰退定价需要三个条件同时出现：**HY OAS 绝对水平进入 5%-6% 以上；BBB/投资级也同步走阔；信用恶化速度快于权益上涨带来的财富效应。
- **当前只满足“权益很强”，不满足“信用明显恶化”。**2026-03-30 HY OAS 年内高点为 **3.46%**，到 2026-05-07 已回落到 **2.79%**；同一阶段 S&P 500 从 **6,343.72** 低点反弹到 **7,337.11**。这更像风险偏好修复，而不是信用市场对衰退的提前定价。

## 给 Sentiment Analyst 的后续跟踪项

1. 每日跟踪 `BAMLH0A0HYM2`、`BAMLC0A4CBBB`、`BAMLC0A0CM` 与 S&P 500 的同日变化，不要用不同日期拼接判断背离。
2. 设定三档触发器：黄色预警为 HY OAS >4.0% 且 4 周走阔 >75bp；橙色预警为 HY OAS >5.0% 且 BBB OAS >1.50%；红色预警为 HY OAS >6.0% 或 BBB OAS >2.0%。
3. 若触发橙色以上，A 股风格应从高 beta/小盘/主题交易转向高股息、现金流质量、低杠杆和政策防御；若未触发，海外信用暂不应成为压制 A 股风险偏好的主因。

## 主要来源

- FRED：ICE BofA US High Yield OAS，2026-05-07 为 **2.79%**，并说明 OAS 是相对现货 Treasury 曲线的期权调整利差；页面同时提示 2026 年 4 月后 FRED 历史样本受限。https://fred.stlouisfed.org/series/BAMLH0A0HYM2
- FRED：ICE BofA BBB US Corporate OAS，2026-05-07 为 **0.99%**。https://fred.stlouisfed.org/series/BAMLC0A4CBBB
- FRED：ICE BofA US Corporate OAS，2026-05-07 为 **0.79%**。https://fred.stlouisfed.org/series/BAMLC0A0CM
- FRED：S&P 500，2026-05-08 为 **7,398.93**，2026-05-07 为 **7,337.11**。https://fred.stlouisfed.org/series/SP500
- NBER：美国商业周期日期，2007-12 至 2009-06 与 2020-02 至 2020-04 为衰退期。https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions
- Eco3min Research：1997-2026 周度 HY OAS、BBB OAS 与 S&P 500 历史案例整理；用于 2007、2014-2016、2018、2020、2022 的历史背离数字与阈值分层。https://eco3min.fr/spreads-credit-high-yield-indicateur-avance-sp500-dataset/

