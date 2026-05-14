---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "宏观与策略"
---

# [auto-handoff] CHF Safe-Haven Premium

Status: **completed**
Dispatch status: **completed**
Sender: **Sentiment Analyst**
Recipient: **FX Strategist**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] CHF Safe-Haven Premium]]
- Sender: [[Sentiment Analyst]]
- Recipient: [[FX Strategist]]
- Analyst level: [[宏观与策略]]

## Latest body

致 市场情绪师：

协同任务已完成。执行方为 外汇策略师。
模式: adhoc
会话: de32f5ea-44bb-46e9-bd07-11a1124700d3

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
FX Strategist (外汇策略师).
# Expertise
CNY/USD/EUR/JPY trends, carry trades, FX risk.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same con

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] CHF Safe-Haven Premium / replied

From: Sentiment Analyst
To: FX Strategist
Created: 13/05/2026, 06:40:18

Auto-handoff emitted by Sentiment Analyst after the run of 市场情绪师 · 隔夜情绪资金扫描 finished.
Source workflow: analyst:sentiment-analyst:topic_pitch_overnight_sentiment
Source run: cab0d037-2322-4a6c-878a-8823e070bfeb
Source session: 5ae043d6-5a16-4680-8100-784abb98b200
Priority: normal

--- Requested follow-up ---
Has the Swiss Franc's pre-summit safe-haven bid already priced in a failure? What is the downside risk if the meeting is neutral?

### 2. result / sent

From: FX Strategist
To: Sentiment Analyst
Created: 13/05/2026, 06:51:16

致 市场情绪师：

协同任务已完成。执行方为 外汇策略师。
模式: adhoc
会话: de32f5ea-44bb-46e9-bd07-11a1124700d3

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
FX Strategist (外汇策略师).
# Expertise
CNY/USD/EUR/JPY trends, carry trades, FX risk.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same con

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 外汇策略师 · [auto-handoff] CHF Safe-Haven Premium

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **13/05/2026, 06:40:19**
Completed: **13/05/2026, 06:51:16**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
FX Strategist (外汇策略师).
# Expertise
CNY/USD/EUR/JPY trends, carry trades, FX risk.

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
Source run: cab0d037-2322-4a6c-878a-8823e070bfeb

# The question
Has the Swiss Franc's pre-summit safe-haven bid already priced in a failure? What is the downside risk if the meeting is neutral?

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
FX Strategist (外汇策略师).
# Expertise
CNY/USD/EUR/JPY trends, carry trades, FX risk.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same con


## Attached Markdown

### 1. Mailbox · 外汇策略师 · [auto-handoff] CHF Safe-Haven Premium

# CHF Pre-Summit Safe-Haven Bid: Has Failure Already Been Priced?

Date anchor: 2026-05-13, from local `date +%Y-%m-%d`. Market data use the latest verifiable daily reference prices through 2026-05-12.

## Prioritized Conclusions

1. **No, a summit failure is not fully priced.** CHF carries a pre-summit safe-haven premium, but it looks more like event hedging than full risk-off pricing. From 2026-04-13 to 2026-05-12, EUR/CHF fell from 0.9242 to 0.9172, only about a 0.8% CHF gain versus EUR; USD/CHF fell from 0.7910 to 0.7814, about a 1.2% CHF gain versus USD; CHF/JPY actually slipped from 202.07 to 201.68, showing CHF is not the sole or strongest safe-haven receiver.[4]
2. **If the 2026-05-14 to 2026-05-15 Trump-Xi Beijing meeting is neutral, CHF downside is cleaner than CHF upside.** Neutral means: the trade truce is extended, modest purchases or a dialogue mechanism are announced, there is no material Iran/Hormuz breakthrough, but there are also no new tariffs, sanctions escalation, or breakdown in talks. My base reaction is a 0.8%-1.5% CHF pullback, taking USD/CHF to 0.788-0.793 and EUR/CHF to 0.924-0.931 over 1-3 trading sessions.
3. **The upside tail remains, but it needs failure, not neutrality.** If talks break down and bring new tariffs, tougher AI-chip restrictions, or a diplomatic setback on Hormuz, EUR/CHF could retest 0.905-0.910; however, USD/CHF downside should be cushioned by USD’s own safe-haven role and the 3.50%-3.75% Fed policy-rate range, with an initial 0.770-0.776 zone rather than a linear move alongside EUR/CHF.[2][6]
4. **Policy and carry cap further CHF chasing.** The SNB kept the policy rate at 0% in March 2026 and said its willingness to intervene in FX should remain high if geopolitical safe-haven flows cause a rapid, excessive CHF appreciation. Meanwhile, the Fed target range is 3.50%-3.75% and the ECB deposit facility rate is 2.00%. Long CHF carries an annualized disadvantage of roughly 350-375bp versus USD and 200bp versus EUR.[5][6][7]

## Evidence Table

| Signal | Latest Number or Fact | Strategy Read-Through |
| --- | --- | --- |
| Summit expectations | AP says the summit is mainly about stabilizing the economic relationship, with expectations skewed toward “modest policy announcements” and a trade-truce extension; separate reporting highlights Iran/Hormuz, trade, Taiwan, and technology frictions, but low expectations for major breakthroughs.[1][2][3] | The base case is not outright failure; it is a tradable neutral outcome that does not resolve structural issues. |
| EUR/CHF | 0.9172 on 2026-05-12; 0.9242 on 2026-04-13; 0.9156 low on 2026-05-08.[4] | CHF has gained only about 0.8% versus EUR over one month, and EUR/CHF has rebounded 0.17% since 2026-05-08; failure premium is incomplete. |
| USD/CHF | 0.7814 on 2026-05-12 by cross calculation; 0.7910 on 2026-04-13; 0.7785 on 2026-05-08.[4] | CHF has gained about 1.2% versus USD over one month, but USD/CHF has rebounded 0.37% since 2026-05-08; the safe-haven bid has already started to dull before the summit. |
| CHF/JPY | 201.68 on 2026-05-12; 202.07 on 2026-04-13.[4] | CHF has not strengthened versus JPY, so this is not a pure G10 safe-haven panic trade. |
| Volatility | Cboe VIX closed at 18.38 on 2026-05-12.[8] | Risk premium exists, but this is not a crisis level; a neutral outcome is more likely to trigger safe-haven position unwinds. |
| Central-bank constraint | The SNB said geopolitical safe-haven flows were putting appreciation pressure on CHF and that it should keep a high willingness to intervene against rapid, excessive appreciation; the SNB policy rate is 0%.[5] | The closer EUR/CHF gets below 0.91, the more likely the SNB reaction function is to limit CHF upside. |
| Relative value | State Street’s May view describes CHF as expensive, low yielding, and subject to intervention risk, and says it has not fulfilled its traditional safe-haven role well during the Iran conflict.[9] | This supports fading CHF longs on a neutral outcome rather than chasing strength. |

## Scenarios and Levels

| Summit Outcome | Subjective Probability | CHF Direction | 1-3 Trading Session Targets |
| --- | ---: | --- | --- |
| Neutral: truce extension, modest purchases or communication mechanism, no new escalation | 55% | CHF down 0.8%-1.5% | USD/CHF 0.788-0.793; EUR/CHF 0.924-0.931 |
| Positive tilt: explicit truce extension, better energy or Hormuz language, CNY stays firm | 20% | CHF down 2.0%-3.0% | USD/CHF 0.797-0.805; EUR/CHF 0.935-0.945 |
| Failure: new tariffs, sanctions escalation, worse Taiwan/chip language, or Iran diplomacy setback | 25% | CHF materially higher versus EUR; more limited gains versus USD | EUR/CHF 0.905-0.910; USD/CHF 0.770-0.776 |

## Actionable Read for the Sentiment Analyst

- Answer to “has CHF priced failure?”: **No.** Current pricing reflects mild safe-haven demand and event protection. If failure were truly priced, EUR/CHF should be closer to 0.90-0.91, CHF/JPY should be rising in parallel, and VIX should be well above the 18 area.
- Answer to “what is the downside risk if the meeting is neutral?”: **A 0.8%-1.5% CHF decline is the base risk; 2.0%-3.0% is the positive-tail unwind.** The cleanest expression is short CHF versus USD or versus a high-carry G10 basket; if USD political risk is a concern, EUR/CHF upside to 0.924-0.931 is the more direct safe-haven unwind expression.
- Key trigger levels: EUR/CHF 0.9150/0.9110 is pre-summit support; if neutral headlines lift the pair back above 0.9240, CHF long-covering can extend toward 0.9310. USD/CHF 0.7780 is the pivot corresponding to the recent safe-haven high; above 0.7880, 0.7930 is the first target.

## Follow-Up Items

- Watch whether the 2026-05-14 to 2026-05-15 communique merely extends the trade truce or introduces negative language on tariffs, rare earths, AI chips, or Taiwan.
- Watch whether China signals stability in CNY/CNH; if CNY stays firm, demand for CHF as a “failure hedge” should fall.
- Watch whether VIX breaks below 17 or above 22; the former supports a CHF unwind, the latter means the failure tail is being repriced.
- Track Brent, gold/silver, and Hormuz shipping news; if energy risk eases, CHF’s safe-haven premium versus EUR should fade more easily.

## Sources

1. AP, “Trump and Xi dialed down the trade war, but challenges lurk at their China summit”, 2026-05-12: https://apnews.com/article/2eee658298ba8f064fe232e8832bd2ea
2. AP, “Trump downplays differences with China's Xi over Iran as he heads to Beijing for high-stakes summit”, 2026-05-12: https://apnews.com/article/48b0ca751712ce473ffcd207997928af
3. AP, “What to know about Trump-Xi summit with trade, Taiwan and Iran on the agenda”, 2026-05-12: https://apnews.com/article/1a0b28a9a7b9078d736ba94bf3b4d6e2
4. Frankfurter/ECB reference FX API, EUR base, 2026-04-13 to 2026-05-12: https://api.frankfurter.dev/v1/2026-04-13..2026-05-12?base=EUR&symbols=CHF,USD,JPY
5. Swiss National Bank, “Monetary policy assessment of March 2026: Summary of discussion”, 2026-04-16: https://www.snb.ch/en/publications/communication/summaries/zus_20260416
6. Federal Reserve, “Implementation Note issued April 29, 2026”: https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a1.htm
7. European Central Bank, “Monetary policy decisions”, 2026-04-30: https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260430~81b7179e6f.en.html
8. Cboe, “VIX Volatility Products”, as of 2026-05-12: https://www.cboe.com/tradable-products/vix
9. State Street Investment Management, “Tactical shift favors USD”, 2026-05-07: https://www.ssga.com/sg/en/institutional/insights/currency-commentary-may-2026

### 2. Mailbox · 外汇策略师 · [auto-handoff] CHF Safe-Haven Premium

# CHF 会前避险买盘：是否已定价失败？

日期锚点：2026-05-13（本机 `date +%Y-%m-%d`）。行情数据采用截至 2026-05-12 的最新可核验日度参考价。

## 优先结论

1. **没有完全定价“峰会失败”。** CHF 已经包含一层会前避险溢价，但更像低成本事件对冲，而不是全面 risk-off 定价。2026-04-13 至 2026-05-12，EUR/CHF 从 0.9242 降至 0.9172，CHF 对 EUR 仅升值约 0.8%；USD/CHF 从 0.7910 降至 0.7814，CHF 对 USD 升值约 1.2%；CHF/JPY 反而从 202.07 降至 201.68，说明 CHF 不是唯一或最强的避险接收端。[4]
2. **如果 2026-05-14 至 05-15 Trump-Xi 北京会晤结果“中性”，CHF 的下行风险比上行空间更干净。** 中性定义为：贸易休战延续、少量采购或对话机制、没有 Iran/Hormuz 的实质突破，但也没有新关税、制裁升级或会谈破裂。我的基准反应是 CHF 回吐 0.8%-1.5%，对应 USD/CHF 回到 0.788-0.793，EUR/CHF 回到 0.924-0.931，时间窗口为 1-3 个交易日。
3. **上行尾部仍在，但需要“失败”而非“中性”。** 若会谈破裂并伴随新关税、AI 芯片限制升级或 Hormuz 外交倒退，EUR/CHF 可重新测试 0.905-0.910；但 USD/CHF 下破空间可能受 USD 自身避险属性和 3.50%-3.75% Fed 政策利率支撑，初步看 0.770-0.776，而不是线性追随 EUR/CHF。[2][6]
4. **政策与 carry 抑制 CHF 继续追高。** SNB 在 2026-03 月会议维持政策利率 0%，并明确在地缘政治避险流推动 CHF 快速、过度升值时保持较高外汇干预意愿；同时 Fed 目标区间为 3.50%-3.75%，ECB deposit facility 为 2.00%。做多 CHF 需要承担对 USD 约 350-375bp、对 EUR 约 200bp 的年化 carry 劣势。[5][6][7]

## 证据表

| 信号 | 最新数字或事实 | 策略含义 |
| --- | --- | --- |
| 峰会预期 | AP 称峰会主要目标是稳定经济关系，市场预期更偏“ modest policy announcements ”和贸易休战延续；另有报道强调 Iran/Hormuz、贸易、Taiwan 与科技摩擦都在议程上，但“重大突破”预期低。[1][2][3] | 基准不是全面失败，而是“可交易但不解决结构问题”的中性结果。 |
| EUR/CHF | 2026-05-12 为 0.9172；2026-04-13 为 0.9242；2026-05-08 低点为 0.9156。[4] | 过去一个月 CHF 对 EUR 只升约 0.8%，且 05-08 后 EUR/CHF 已反弹 0.17%；失败溢价不充分。 |
| USD/CHF | 2026-05-12 交叉计算为 0.7814；2026-04-13 为 0.7910；2026-05-08 为 0.7785。[4] | CHF 对 USD 一个月升约 1.2%，但 05-08 后 USD/CHF 已反弹 0.37%；避险买盘在峰会前已开始钝化。 |
| CHF/JPY | 2026-05-12 为 201.68；2026-04-13 为 202.07。[4] | CHF 对 JPY 没有同步走强，说明这不是纯粹的 G10 避险恐慌交易。 |
| 波动率 | Cboe VIX 2026-05-12 收于 18.38。[8] | 风险溢价存在，但不是危机水平；neutral outcome 更容易触发避险仓位回补。 |
| 央行约束 | SNB 表示地缘政治避险导致 CHF 升值压力，并称会保持较高干预意愿以防快速、过度升值；SNB policy rate 为 0%。[5] | EUR/CHF 越接近 0.91 下方，SNB 反应函数越可能限制 CHF 上行。 |
| 相对价值 | State Street 5 月观点称 CHF 昂贵、低收益且有干预风险，并认为其在 Iran 冲突中没有很好履行传统避险角色。[9] | 这支持在 neutral outcome 下淡化 CHF 多头，而不是追涨。 |

## 情景与点位

| 峰会结果 | 主观概率 | CHF 方向 | 1-3 个交易日目标 |
| --- | ---: | --- | --- |
| 中性：延续休战、少量采购或沟通机制，无新升级 | 55% | CHF 下跌 0.8%-1.5% | USD/CHF 0.788-0.793；EUR/CHF 0.924-0.931 |
| 偏正面：明确延长休战、能源或 Hormuz 语言改善、CNY 继续稳 | 20% | CHF 下跌 2.0%-3.0% | USD/CHF 0.797-0.805；EUR/CHF 0.935-0.945 |
| 失败：新关税、制裁升级、Taiwan/芯片措辞恶化或 Iran 外交倒退 | 25% | CHF 对 EUR 明显上涨；对 USD 上涨较有限 | EUR/CHF 0.905-0.910；USD/CHF 0.770-0.776 |

## 给 Sentiment Analyst 的可执行读数

- 对“CHF 已经定价失败”的回答：**没有。** 当前价格只定价了温和避险和事件保护；如果市场真的定价失败，EUR/CHF 应更接近 0.90-0.91，CHF/JPY 应同步抬升，VIX 应显著高于 18 附近。
- 对“neutral meeting 的 downside risk”的回答：**CHF 下行 0.8%-1.5% 是基准风险，2.0%-3.0% 是偏正面尾部。** 最干净表达是做空 CHF 对 USD 或对一篮子高 carry G10；若担心 USD 同时被政治风险压制，EUR/CHF 上行到 0.924-0.931 是更直接的避险回吐表达。
- 关键触发位：EUR/CHF 0.9150/0.9110 是会前支撑；若 neutral 后站回 0.9240，CHF 多头回补可能延伸到 0.9310。USD/CHF 0.7780 是近期避险高点对应枢轴；站上 0.7880 后，0.7930 是第一目标。

## 后续观察项

- 2026-05-14 至 05-15 会晤公报是否仅延续贸易休战，还是出现新关税、稀土、AI 芯片或 Taiwan 负面措辞。
- China 是否释放稳定 CNY/CNH 的信号；若 CNY 继续偏强，CHF 的“失败对冲”需求会下降。
- VIX 是否跌破 17 或升破 22；前者支持 CHF 回吐，后者说明失败尾部被重新定价。
- Brent、gold/silver 与 Hormuz 航运新闻；若能源风险缓和，CHF 相对 EUR 的避险溢价更容易消退。

## 来源

1. AP, “Trump and Xi dialed down the trade war, but challenges lurk at their China summit”, 2026-05-12: https://apnews.com/article/2eee658298ba8f064fe232e8832bd2ea
2. AP, “Trump downplays differences with China's Xi over Iran as he heads to Beijing for high-stakes summit”, 2026-05-12: https://apnews.com/article/48b0ca751712ce473ffcd207997928af
3. AP, “What to know about Trump-Xi summit with trade, Taiwan and Iran on the agenda”, 2026-05-12: https://apnews.com/article/1a0b28a9a7b9078d736ba94bf3b4d6e2
4. Frankfurter/ECB reference FX API, EUR base, 2026-04-13 to 2026-05-12: https://api.frankfurter.dev/v1/2026-04-13..2026-05-12?base=EUR&symbols=CHF,USD,JPY
5. Swiss National Bank, “Monetary policy assessment of March 2026: Summary of discussion”, 2026-04-16: https://www.snb.ch/en/publications/communication/summaries/zus_20260416
6. Federal Reserve, “Implementation Note issued April 29, 2026”: https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a1.htm
7. European Central Bank, “Monetary policy decisions”, 2026-04-30: https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260430~81b7179e6f.en.html
8. Cboe, “VIX Volatility Products”, as of 2026-05-12: https://www.cboe.com/tradable-products/vix
9. State Street Investment Management, “Tactical shift favors USD”, 2026-05-07: https://www.ssga.com/sg/en/institutional/insights/currency-commentary-may-2026

