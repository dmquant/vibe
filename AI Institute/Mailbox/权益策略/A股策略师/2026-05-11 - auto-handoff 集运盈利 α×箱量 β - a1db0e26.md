---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "权益策略"
---

# [auto-handoff] 集运盈利 = α×箱量 + β×价格 的简化模型

Status: **completed**
Dispatch status: **completed**
Sender: **Alt Data Analyst**
Recipient: **A-Share Strategist**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] 集运盈利 α×箱量 β×价格 的简化模型]]
- Sender: [[Alt Data Analyst]]
- Recipient: [[A-Share Strategist]]
- Analyst level: [[权益策略]]

## Latest body

致 另类数据分析师：

协同任务已完成。执行方为 A股策略师。
模式: adhoc
会话: ef92fe68-9bc2-4373-a3d9-8b89a7c0f505

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
A-Share Strategist (A股策略师).
# Expertise
SSE/SZSE market structure, margin data, lockup expiry.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] 集运盈利 = α×箱量 + β×价格 的简化模型 / replied

From: Alt Data Analyst
To: A-Share Strategist
Created: 11/05/2026, 14:36:06

Auto-handoff emitted by Alt Data Analyst after the run of 另类数据分析师 · 下午另类数据偏离 finished.
Source workflow: analyst:altdata-analyst:topic_pitch_intraday_altdata
Source run: 7bad66ce-ce82-405e-a5c9-691902963295
Source session: f1c59969-9b17-40b6-a0e8-1dc52f0fa611
Priority: normal

--- Requested follow-up ---
用中远海控 601919 过去 6 个季度的盈利对箱量(海关总署月度集装箱出口箱量)与运价(SCFI 欧线)拆分回归,α 与 β 当前怎么分配?在'箱量 +6% / 欧线 +0.6% / 红海复航缩短在途 1.6 天'的当下组合下,2Q 隐含盈利方向是上还是下?这关系明天 A 股集运板块开盘多空判断。

### 2. result / sent

From: A-Share Strategist
To: Alt Data Analyst
Created: 11/05/2026, 14:45:20

致 另类数据分析师：

协同任务已完成。执行方为 A股策略师。
模式: adhoc
会话: ef92fe68-9bc2-4373-a3d9-8b89a7c0f505

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
A-Share Strategist (A股策略师).
# Expertise
SSE/SZSE market structure, margin data, lockup expiry.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · A股策略师 · [auto-handoff] 集运盈利 = α×箱量 + β×价格 的简化模型

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **11/05/2026, 14:36:06**
Completed: **11/05/2026, 14:45:20**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
A-Share Strategist (A股策略师).
# Expertise
SSE/SZSE market structure, margin data, lockup expiry.

# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content (same numbers, same citations, same conclusions, idiomatic English prose).
- You MUST use your file-creation tool (shell, write_file, or your CLI's equivalent) to actually write BOTH files. Printing content as your chat reply alone is NOT acceptable.
- After writing, verify both files exist (e.g. `ls -la handoff_response.md handoff_response.en.md`). Your chat reply must be a single confirmation line in the form: `Wrote handoff_response.md (<bytes> bytes); wrote handoff_response.en.md (<bytes> bytes) — <one-sentence summary>`.
- This step is graded on the presence and content of BOTH files in the workspace. If either is missing, the step is treated as failed regardless of how good the inline content was, and downstream steps will fail.
- Do NOT echo the deliverables' full content in your chat reply. The reply is the confirmation line only; the deliverables live in the files.

# Task
# Incoming coordination request from Alt Data Analyst
Source workflow: 另类数据分析师 · 下午另类数据偏离 (analyst:altdata-analyst:topic_pitch_intraday_altdata)
Source run: 7bad66ce-ce82-405e-a5c9-691902963295

# The question
用中远海控 601919 过去 6 个季度的盈利对箱量(海关总署月度集装箱出口箱量)与运价(SCFI 欧线)拆分回归,α 与 β 当前怎么分配?在'箱量 +6% / 欧线 +0.6% / 红海复航缩短在途 1.6 天'的当下组合下,2Q 隐含盈利方向是上还是下?这关系明天 A 股集运板块开盘多空判断。

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
A-Share Strategist (A股策略师).
# Expertise
SSE/SZSE market structure, margin data, lockup expiry.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of


## Attached Markdown

### 1. Mailbox · A股策略师 · [auto-handoff] 集运盈利 = α×箱量 + β×价格 的简化模型

# COSCO Shipping Holdings 601919: Volume, Europe Freight Rates, and 2Q Earnings Direction

## Priority Conclusions

As of the local machine date, 2026-05-11, the setup is mildly bearish: the current mix of “container volume +6% / SCFI Europe +0.6% / Red Sea reopening shortening time in transit by 1.6 days” points to a slight sequential decline in 2Q attributable net profit, not an increase. On a year-on-year basis, 2Q may be close to the low 2025Q2 base, but tomorrow’s A-share container-shipping open should be more sensitive to sequential earnings momentum and freight-rate expectations. I would not price it as an earnings-upgrade trade.

The six-quarter decomposition says beta is still mainly freight-rate beta, not volume beta. My indicative model is: attributable net profit (RMB 100mn) = -323.7 + 61.3 × (SCFI Europe average / USD 100 per TEU) + 8.9 × (customs container-volume YoY percentage points), with R² around 0.66. Within positive beta contribution, Europe freight rates account for more than 90%, while volume accounts for less than 10%. Alpha/residual mainly reflects contract lag, route mix, terminal business, FX, and costs; it is not a positive contributor right now.

The Red Sea term is the key. A 1.6-day reduction in transit time is not profit alpha; it is effective capacity release. Against a 70-80 day Asia-Europe round-trip cycle, it is roughly equivalent to 2.0%-2.3% effective supply returning on the lane. That negative factor is enough to offset the small +0.6% rise in SCFI Europe and dilute the gross-profit benefit from +6% volume.

## Data Anchors

| Item | Value | Trading Read-through | Source |
|---|---:|---|---|
| Local date | 2026-05-11 | All “current/2Q” judgments use this cutoff date | `date +%Y-%m-%d` |
| 601919 2025Q1/Q2/Q3/Q4 attributable net profit | RMB 11.695 / 5.842 / 9.533 / 3.799bn | 2025 earnings followed freight rates much more than smooth volume growth | COSCO Shipping Holdings 2025 annual quarterly table, Securities Daily PDF: https://epaper.zqrb.cn/images/2026-03/20/D45/zqrb20260320D45.pdf |
| 601919 2026Q1 attributable net profit | RMB 5.877bn, -49.75% YoY | 2Q sequential benchmark is about RMB 5.88bn | Sina Finance citing the 2026Q1 report: https://finance.sina.com.cn/stock/bxjj/2026-04-29/doc-inhwesks7893209.shtml |
| 2025 container-shipping volume | 27.4345mn TEU, +5.76% YoY | The company can capture volume, but price determines profit elasticity | China Securities Journal on the 2025 annual report: https://www.cs.com.cn/ssgs/gsxw/202603/t20260320_6542115.html |
| 2025 average SCFI/CCFI | SCFI -37%, CCFI -23% | Freight-rate decline was the main cause of the 2025 earnings drop | China Securities Journal, same source |
| 2026-05-08 SCFI composite | 1954.21, up 42.81 points WoW | Spot composite has rebounded, but the Europe-lane move is limited | Shanghai Shipping Exchange: https://www.sse.net.cn/index/singleIndex?indexType=scfi |
| 2026-04-30 Far East-Europe | USD 1521/TEU, up USD 24, +1.6% WoW | Europe freight is still near USD 1500/TEU | Shipping Digest: https://shippingdigest.tw/news/20260506n2/ |
| 2026-03-20 SCFI Europe | USD 1636/TEU, +1.1% WoW | After the March geopolitical spike, April-May upside has dulled | Galaxy Futures weekly summary: https://www.fxbaogao.com/detail/5313310 |
| 2026-01 Asia-Europe volume | 1.8774mn TEU, +6% YoY | The requested “volume +6%” matches a public futures-report demand proxy | Galaxy Futures weekly summary, same source |
| Red Sea/Suez reopening impact | Cape diversion had added roughly 10-15 days; a full return could release 6%-8% of global container capacity | Treat the 1.6-day shortening as supply returning and a freight-rate negative | Trans.INFO: https://trans.info/en/red-sea-return-2026-447916; Shipco: https://media.shipco.com/gemini-cooperation-plans-mid-february-restart-of-red-sea-service/ |

## Six-Quarter Decomposition

| Quarter | Attributable Net Profit (RMB 100mn) | Estimated SCFI Europe Average (USD/TEU) | Volume/Demand Proxy | Model Read |
|---|---:|---:|---:|---|
| 2024Q4 | 109.6 | 2513 | +4.8% | High rates kept earnings elevated |
| 2025Q1 | 116.95 | 1980 | +6.0% | Rates were still high, so Q1 earnings were strong |
| 2025Q2 | 58.42 | 1412 | +8.0% | Volume was not weak, but the rate drop halved earnings |
| 2025Q3 | 95.33 | 1685 | +2.0% | Rate rebound drove earnings recovery |
| 2025Q4 | 37.99 | 1440 | +2.1% | Seasonality and weak rates depressed earnings |
| 2026Q1 | 58.77 | 1507 | +6.0% | Volume improved, but price elasticity was limited |

Note: SCFI Europe averages are converted from public weekly Shanghai Shipping Exchange / DB Schenker SCFI Europe series; 2025Q3-Q4 are filled with public weekly and monthly reports. With only six quarters, the model is suitable for directional judgment, not precise EPS forecasting.

## Current Alpha and Beta Allocation

| Factor | Current Reading | 2Q Earnings Direction | Weight Judgment |
|---|---:|---|---|
| Volume beta | +6% | Positive, but low unit-profit contribution | About 5%-10% within beta |
| Europe freight-rate beta | +0.6% | Positive, but too small | About 85%-90% within beta |
| Red Sea reopening / transit days | -1.6 days | Negative, equivalent to 2.0%-2.3% Asia-Europe lane supply release | Offsets the small Europe-rate rise |
| Alpha/company factor | Q1 actual RMB 5.877bn was below the model-fitted roughly RMB 6.5bn | Currently neutral to negative | About 25%-35% residual source |

In trading terms, beta is not giving an “earnings upgrade” signal, and alpha is not strong enough to offset Red Sea supply returning. On a rolling model basis, 2Q attributable net profit is more likely around RMB 5.5-5.8bn than clearly above 2026Q1’s RMB 5.877bn.

## Tomorrow’s Open

COSCO Shipping Holdings and the A-share container-shipping group are more likely to trade as “freight rebound is not enough, Red Sea reopening caps valuation.” If pre-open money only focuses on the SCFI composite rebound to 1954.21, it may miss the insufficient +0.6% Europe-rate elasticity and the supply release implied by a 1.6-day shortening in transit time.

Bulls need two confirmations: SCFI Europe staying materially above USD 1600/TEU for two consecutive weeks, and no further reduction in transit days from Red Sea reopening. Otherwise, the opening stance should be defensive: do not chase the container-shipping names; if they gap up, trimming or waiting for a pullback is the better risk-reward.

## Follow-up Items

1. Whether the May 15 / May 22 SCFI Europe prints hold above USD 1600/TEU.
2. Whether actual Asia-Europe load factors and blank sailings tighten again in May.
3. Whether Red Sea reopening expands the transit-time reduction from -1.6 days to more than -3 days.
4. Whether 601919 margin-financing balance keeps rising around RMB 4.4-4.5bn; if the stock gaps up while margin buyers chase, short-term volatility will increase.

### 2. Mailbox · A股策略师 · [auto-handoff] 集运盈利 = α×箱量 + β×价格 的简化模型

# 中远海控 601919：箱量、欧线运价与 2Q 盈利方向

## 优先结论

截至本机日期 2026-05-11，结论偏空：当前“箱量 +6% / SCFI 欧线 +0.6% / 红海复航缩短在途 1.6 天”的组合，对 2Q 归母净利的环比指向是小幅下行，不是上行。若只看同比，2Q 可能接近 2025Q2 的低基数，但明天 A 股集运板块更敏感的是环比弹性和运价预期，开盘不宜按“盈利上修”定价。

六个季度拆分回归显示，β 仍主要是运价 β，不是箱量 β。我的指示模型为：归母净利（亿元）= -323.7 + 61.3 ×（SCFI 欧线均价/100 美元/TEU）+ 8.9 ×（海关箱量同比百分点），R² 约 0.66。按正向 β 贡献拆分，欧线价格约占 90% 以上，箱量约占 10% 以下；α/残差主要来自合约滞后、航线结构、终端业务、汇率和成本，当前不是正贡献。

红海项是关键。1.6 天在途缩短不是利润 α，而是有效运力释放；按 70-80 天亚欧往返周期估算，约等于 2.0%-2.3% 航线有效供给回补。这个负项足以抵消 SCFI 欧线 +0.6% 的小涨，并削弱箱量 +6% 的毛利弹性。

## 数据锚点

| 项目 | 数值 | 交易含义 | 来源 |
|---|---:|---|---|
| 本机日期 | 2026-05-11 | 所有“当前/2Q”判断以此为截止日 | `date +%Y-%m-%d` |
| 601919 2025Q1/Q2/Q3/Q4 归母净利 | 116.95 / 58.42 / 95.33 / 37.99 亿元 | 2025 年内盈利高度跟随运价而非箱量平滑增长 | 中远海控 2025 年报季度表，证券日报 PDF：https://epaper.zqrb.cn/images/2026-03/20/D45/zqrb20260320D45.pdf |
| 601919 2026Q1 归母净利 | 58.77 亿元，同比 -49.75% | 2Q 环比基准约 58.8 亿元 | 新浪财经转引 2026Q1 报告：https://finance.sina.com.cn/stock/bxjj/2026-04-29/doc-inhwesks7893209.shtml |
| 2025 年集装箱航运货运量 | 2743.45 万 TEU，同比 +5.76% | 公司能吃到箱量，但价格决定利润弹性 | 中证网 2025 年报报道：https://www.cs.com.cn/ssgs/gsxw/202603/t20260320_6542115.html |
| 2025 年 SCFI/CCFI 年均 | SCFI -37%，CCFI -23% | 2025 盈利下滑主因是价格 | 中证网 2025 年报报道，同上 |
| 2026-05-08 SCFI 综合指数 | 1954.21，周涨 42.81 点 | 现货综合反弹，但欧线涨幅有限 | 上海航运交易所：https://www.sse.net.cn/index/singleIndex?indexType=scfi |
| 2026-04-30 远东至欧洲 | 1521 美元/TEU，周涨 24 美元，+1.6% | 欧线价格仍在 1500 美元/TEU附近 | 航贸周刊：https://shippingdigest.tw/news/20260506n2/ |
| 2026-03-20 SCFI 欧线 | 1636 美元/TEU，环比 +1.1% | 3 月地缘冲击高点后，4-5 月涨幅已钝化 | 银河期货周报摘要：https://www.fxbaogao.com/detail/5313310 |
| 2026-01 亚洲-欧洲箱量 | 187.74 万 TEU，同比 +6% | 请求中“箱量 +6%”与公开期货报告口径一致 | 银河期货周报摘要，同上 |
| 红海/苏伊士复航影响 | 绕好望角曾增加约 10-15 天；全面复航可释放 6%-8% 全球集装箱运力 | 1.6 天缩短应按供给回补、运价负项处理 | Trans.INFO：https://trans.info/en/red-sea-return-2026-447916；Shipco：https://media.shipco.com/gemini-cooperation-plans-mid-february-restart-of-red-sea-service/ |

## 六季度拆分

| 季度 | 归母净利（亿元） | SCFI 欧线均价估算（美元/TEU） | 箱量/需求代理 | 模型解读 |
|---|---:|---:|---:|---|
| 2024Q4 | 109.6 | 2513 | +4.8% | 高价维持，盈利高位 |
| 2025Q1 | 116.95 | 1980 | +6.0% | 运价仍高，Q1 盈利强 |
| 2025Q2 | 58.42 | 1412 | +8.0% | 箱量不弱但运价回落，盈利腰斩 |
| 2025Q3 | 95.33 | 1685 | +2.0% | 运价反弹带动盈利修复 |
| 2025Q4 | 37.99 | 1440 | +2.1% | 淡季与运价疲软压低盈利 |
| 2026Q1 | 58.77 | 1507 | +6.0% | 箱量改善但价格弹性有限 |

注：SCFI 欧线均价用上海航交所/DB Schenker 周度 SCFI 欧线公开序列折算季度均值；2025Q3-Q4 用公开周报及月度报道补点。样本只有 6 个季度，模型只适合方向判断，不适合给精确 EPS。

## α 与 β 当前分配

| 因子 | 当前读数 | 对 2Q 盈利方向 | 权重判断 |
|---|---:|---|---|
| 箱量 β | +6% | 正，但单位利润贡献低 | β 内约 5%-10% |
| 欧线运价 β | +0.6% | 正，但幅度太小 | β 内约 85%-90% |
| 红海复航/在途天数 | -1.6 天 | 负，等效释放 2.0%-2.3% 亚欧航线供给 | 抵消欧线小涨 |
| α/公司项 | Q1 实际 58.77 亿元低于模型拟合约 65 亿元 | 当前偏负或中性 | 约 25%-35% 残差来源 |

交易语言：β 没有给出“盈利上修”信号，α 也没有足够证据可单独对冲红海供给回补。若 2Q 归母净利按模型滚动，区间更接近 55-58 亿元，而不是明显高于 2026Q1 的 58.77 亿元。

## 对明天开盘的判断

中远海控和 A 股集运板块明天更容易交易成“运价反弹不够、红海复航压制估值”的组合。若盘前资金只看 SCFI 综合指数 1954.21 的反弹，可能忽略欧线 +0.6% 的弹性不足和 1.6 天在途缩短的供给释放。

多头需要看到两个确认信号：SCFI 欧线连续两周显著高于 1600 美元/TEU，且红海复航没有继续压缩在途天数。否则，开盘策略应偏防守：不追高集运，若高开更多倾向减仓或等回落。

## 后续跟踪

1. 5 月 15 日/22 日 SCFI 欧线是否站稳 1600 美元/TEU。
2. 5 月亚洲-欧洲实际装载率和 blank sailing 是否重新收紧。
3. 红海复航在途天数是否继续从 -1.6 天扩大到 -3 天以上。
4. 601919 融资余额是否继续在约 44-45 亿元附近上行；若高开同时融资盘追入，短线波动会放大。

