---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "固收与衍生品"
---

# [auto-handoff] Gamma Suppression Quant

Status: **completed**
Dispatch status: **completed**
Sender: **Sentiment Analyst**
Recipient: **Derivatives Strategist**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] Gamma Suppression Quant]]
- Sender: [[Sentiment Analyst]]
- Recipient: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Latest body

致 市场情绪师：

协同任务已完成。执行方为 衍生品策略师。
模式: adhoc
会话: 369b95b6-9a4a-4971-bc6c-7ec29cb93a6f

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Derivatives Strategist (衍生品策略师).
# Expertise
Options strategies, futures arbitrage, volatility trading.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English v

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] Gamma Suppression Quant / replied

From: Sentiment Analyst
To: Derivatives Strategist
Created: 11/05/2026, 06:37:26

Auto-handoff emitted by Sentiment Analyst after the run of 市场情绪师 · 隔夜情绪资金扫描 finished.
Source workflow: analyst:sentiment-analyst:topic_pitch_overnight_sentiment
Source run: 188c8ca7-d08b-4dfc-8547-c1082ba46ed4
Source session: cb99ad76-9c1b-473d-a320-83fed2808397
Priority: high

--- Requested follow-up ---
Based on current Covered Call ETF AUM, estimate the basis points of artificial suppression on the VIX. What is the estimated scale of stop-loss buying if VIX breaks 18?

### 2. result / sent

From: Derivatives Strategist
To: Sentiment Analyst
Created: 11/05/2026, 06:45:17

致 市场情绪师：

协同任务已完成。执行方为 衍生品策略师。
模式: adhoc
会话: 369b95b6-9a4a-4971-bc6c-7ec29cb93a6f

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Derivatives Strategist (衍生品策略师).
# Expertise
Options strategies, futures arbitrage, volatility trading.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English v

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 衍生品策略师 · [auto-handoff] Gamma Suppression Quant

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **11/05/2026, 06:37:26**
Completed: **11/05/2026, 06:45:17**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
Derivatives Strategist (衍生品策略师).
# Expertise
Options strategies, futures arbitrage, volatility trading.

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
Based on current Covered Call ETF AUM, estimate the basis points of artificial suppression on the VIX. What is the estimated scale of stop-loss buying if VIX breaks 18?

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
Derivatives Strategist (衍生品策略师).
# Expertise
Options strategies, futures arbitrage, volatility trading.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English v


## Attached Markdown

### 1. Mailbox · 衍生品策略师 · [auto-handoff] Gamma Suppression Quant

# Covered Call ETF VIX Suppression and VIX 18 Stop-Loss Buying Estimate

## Conclusions First

- Date anchor: local `date +%Y-%m-%d` returned `2026-05-11`. This report's “current” window ends on 2026-05-11; because 2026-05-09/10 were weekend days, most market prices and ETF disclosures stop at 2026-05-08.
- My estimate for the “artificial suppression” of VIX from covered call / option-income ETFs is **80-150 bps, or roughly 0.8-1.5 VIX points**. A high-confidence range should be stated as **50-200 bps**, because public AUM does not reveal embedded ELN option notional, OTC hedging, or dealer net vega.
- This is not a “VIX is suppressed by 4-5 points” setup. Option-income ETF AUM is large, but VIX is determined only by 30-day SPX option prices; Cboe also stresses that only a fraction of option-income AUM directly lands in 1-month SPX options, while dispersion by underlying, tenor, and strike dilutes the effect.
- If spot VIX breaks **18**, I estimate the first wave of stop-loss / chase buying at **20k-40k VX futures contracts, about $0.4-0.8bn of VIX futures notional**. If a break above 18 extends toward 19.5-20 and forces broader short-vol accounts to reduce leverage, the stress case can expand to **50k-70k contracts, about $1.0-1.4bn notional**.
- Pure ETF mechanical rebalancing is smaller than the market narrative: if the short-term VX basket rises 5% in one day, mechanical buyback from public short-vol ETPs such as SVIX/SVXY/SVOL is about **$40mn**; if those products cut their short VIX exposure to zero, the total is **roughly $0.45-0.50bn**.

## Key Data

| Item | Current reading | Interpretation | Source |
|---|---:|---|---|
| U.S. option ETF total AUM | Around $250bn | Nasdaq’s April 2026 report says the U.S. option ETF universe has around 800 funds, over $250bn AUM, and about $127bn in the top 10 | [Nasdaq, All About ETFs with Options 2026](https://www.nasdaq.com/docs/index/all-about-etfs-with-options-2026) |
| Covered call ETF universe | Around $147bn | Third-party covered-call ETF monitor: about 94 funds and $147bn AUM as of March 2026 | [CoveredCallETFHQ](https://coveredcalletfhq.com/largest-covered-call-etfs.html) |
| JEPI | $44.66bn | Largest derivative-income ETF; holdings page classifies it as Derivative Income | [StockAnalysis JEPI holdings](https://stockanalysis.com/etf/jepi/holdings/) |
| JEPQ | $37.93bn | Nasdaq-100 derivative-income ETF | [StockAnalysis JEPQ holdings](https://stockanalysis.com/etf/jepq/holdings/) |
| SPYI | $9.52bn | S&P 500 High Income ETF; discloses use of SPX index options | [NEOS SPYI](https://neosfunds.com/spyi/) |
| QQQI | $11.62bn | Nasdaq-100 High Income ETF | [NEOS fund overview](https://neosfunds.com/) |
| QYLD | $8.39bn; short NDX call notional $9.15bn | Global X disclosed a short NASDAQ call as of 2026-05-08 | [Global X QYLD](https://www.globalxetfs.com/funds/QYLD) |
| XYLD | $3.12bn; short SPX call notional $3.18bn | Global X disclosed a short S&P 500 call as of 2026-05-05 | [Global X XYLD](https://www.globalxetfs.com/funds/XYLD) |
| DIVO | $6.89bn | More active single-name overwrite exposure, not a pure SPX 1M overwrite | [StockAnalysis DIVO holdings](https://stockanalysis.com/etf/divo/holdings/) |
| SPX option liquidity | 4.49mn contracts volume and 23.21mn contracts OI on 2026-05-08 | At an SPX level near 7,300, this implies roughly $3.3tn of single-day notional volume | [Cboe SPX options](https://www.cboe.com/tradable-products/sp-500/spx-options/) |
| Q1 2026 SPX ADV | 4.9mn contracts | Cboe says Q1 2026 SPX ADV reached a record | [Cboe Q1 2026 options review](https://www.cboe.com/insights/posts/the-state-of-the-options-industry-q-1-2026) |
| Latest spot VIX | Around 17.10 close on 2026-05-08 | VIX is below but close to the 18 trigger | [Investing.com historical VIX](https://za.investing.com/indices/volatility-s-p-500-historical-data?cid=1096487) |
| CFTC VIX futures positioning | OI 362,343 contracts; Asset Manager short 63,482, Leveraged Funds short 100,608 | 2026-04-28 COT; main non-dealer net short is about 46k contracts | [CFTC financial futures short report](https://www.cftc.gov/dea/futures/financial_lf.htm) |
| SVXY | AUM $231.6mn; short VX exposure about -$116mn | -0.5x VIX short-term futures product; holdings are short May/Jun VX | [ProShares SVXY](https://www.proshares.com/our-etfs/strategic/svxy) |
| SVIX | AUM around $217-227mn; short VX exposure about 91% of NAV | -1x short VIX futures ETF | [ETF Central SVIX](https://www.etfcentral.com/fund/SVIX), [StockAnalysis SVIX](https://stockanalysis.com/etf/svix/) |
| SVOL | AUM $594.8mn; target -0.2x to -0.3x VIX short-term futures | Short-vol income ETF with VIX call hedges | [Simplify SVOL](https://www.simplify.us/etfs/svol-simplify-volatility-premium-etf) |

## Suppression Estimate Framework

I split “artificial suppression” into two components:

1. **Option supply effect**: covered call ETFs systematically sell index calls / call spreads / ELN-embedded options, directly lowering implied vol in the relevant tenor and moneyness. The most direct input to VIX is 30-day SPX OTM/ATM options; NDX, Russell, single-name, and sub-30-day option selling only affects VIX indirectly.
2. **Dealer gamma effect**: ETFs sell calls, dealers often buy calls and delta hedge. In a positive-gamma zone, dealers tend to sell rallies and buy dips, suppressing realized volatility and indirectly lowering VIX. BIS describes how yield-enhancing structured products can dampen underlying price movements through dealer dynamic hedging and may depress VIX; T. Rowe Price also argues that call-overwriting ETFs increase the supply of OTM calls used in the VIX calculation and can suppress market moves through dealer long gamma.

But the mechanism should not be extrapolated linearly. Cboe’s counterpoint matters: option-income fund AUM rose from about $20bn in 2019 to over $120bn in 2024, but only a fraction directly affects VIX; if buy-write flows were the dominant force depressing call vol, call skew should be extremely low, while Cboe observed SPX call skew near historical highs. I therefore do not recommend using a large “artificial suppression” number.

## Order-of-Magnitude Derivation

| Step | Assumption | Result |
|---|---|---:|
| 1. Current covered-call / income ETF AUM | Category about $147bn; largest funds sum to about $125bn | The pool is large, but it does not all hit VIX |
| 2. Direct VIX-relevant supply | SPX 1M / near-1M overwrite around $55-75bn; NDX / single-name / other around $55-70bn | The directly VIX-relevant share is about 40%-55% |
| 3. Relative to SPX market depth | SPX options traded 4.49mn contracts on 2026-05-08; with SPX near 7,300 and a 100 multiplier, notional was about $3.3tn | Covered-call monthly rolls amortize to only about $2.5-4.0bn per day; on roll days they can rise to $20-40bn |
| 4. Transmission to VIX | Assume call supply lowers relevant call vol by 1-3 vol pts, passing through about 0.2-0.8 VIX points; dealer gamma / realized-vol feedback adds another 0.3-0.7 point | Total about 0.8-1.5 VIX points |
| 5. Sensitivity | If effective JEPI/JEPQ ELN coverage is cut to 40%-50%, suppression is closer to 0.5-1.0 point; if rolls are concentrated and market-maker inventory is hard to absorb, short-term impact can reach 1.5-2.0 points | Best phrasing: 50-200 bps range, with an 80-150 bps center |

## Stop-Loss Buying if VIX Breaks 18

### Public Short-Vol ETP Mechanical Component

The estimate uses AUM around 2026-05-08:

| Product | Exposure multiple | AUM | Estimated short VX exposure | Mechanical buyback if VX basket rises 5% | Buyback if exposure is cut to zero |
|---|---:|---:|---:|---:|---:|
| SVIX | -1.0x | $217-227mn | $200-210mn | About $22mn | $200-210mn |
| SVXY | -0.5x | $231.6mn | $116mn | About $9mn | $116mn |
| SVOL | -0.25x midpoint | $594.8mn | $149mn | About $9mn | $149mn |
| Other smaller short-vol products | Mixed | About $50-150mn | $25-75mn | About $1-5mn | $25-75mn |
| **Total** |  |  | **About $0.45-0.55bn** | **About $40mn** | **About $0.45-0.50bn** |

Explanation: an intraday break of 18 does not automatically force ETFs to fully flatten. The mechanical rebalancing formula is approximately `2 * AUM * index move` for -1x products, `0.75 * AUM * index move` for -0.5x, and `0.3125 * AUM * index move` for -0.25x. The true forced flow comes from stop-loss / risk controls, not daily rebalancing itself.

### CFTC / Discretionary Short-Vol Stop Component

The 2026-04-28 CFTC VIX futures data show:

- Asset Manager short: 63,482 contracts; long: 57,703 contracts; net short about 5,779 contracts.
- Leveraged Funds short: 100,608 contracts; long: 60,287 contracts; net short about 40,321 contracts.
- The main non-dealer net short is about **46k VX contracts**, or about **$0.9bn** notional using a 19-20 VX price and $1,000 multiplier.

If VIX 18 is the first spot trigger, I would not assume full covering. A more practical breakdown is:

| Scenario | Trigger | Buying estimate |
|---|---|---:|
| Mild break | VIX above 18 but VX rises only 3%-5%, with no clear SPX breakdown | **10k-20k VX contracts**, about **$0.2-0.4bn** |
| Base case | VIX holds above 18 and short-end VX rises with it; CTA/vol-control/short-vol pods cut risk by roughly half | **20k-40k VX contracts**, about **$0.4-0.8bn** |
| Stress case | VIX breaks 18 and quickly runs toward 19.5-20; SPX breaks key moving averages; short-vol risk controls turn forced | **50k-70k VX contracts**, about **$1.0-1.4bn** |

## Suggested Language for the Sentiment Analyst

- “Covered call ETF AUM is large enough to create structural vol supply, but in VIX terms the suppression is closer to **around 1 VIX point**, not several points.”
- “VIX 18 is a light trigger. The real risk is whether VIX can hold above 18 and pull the first two VX futures months higher. If it is only a spot VIX poke, mechanical buying is about $40mn; if it trips short-vol risk controls, flow can expand to $0.4-0.8bn.”
- “If VIX approaches 20, shift the framing from ‘covered calls suppress VIX’ to ‘short-vol stop-loss accounts chase VIX futures.’ At that point dealer gamma can move from volatility dampening to liquidity consumption, and sentiment can deteriorate nonlinearly.”

## Follow-Up Items

- Check the latest full JEPI/JEPQ holdings for embedded ELN notional, strikes, and expiries; public pages give AUM and stock holdings but do not fully reconstruct embedded short-option exposure.
- Track the 2026-05-06/13 CFTC VIX futures COT updates to confirm whether leveraged funds keep expanding net shorts.
- Monitor synchronization across VIX 18, 19.5, and 20 versus VX1/VX2; if spot VIX crosses but VX futures do not follow, stop-loss buying is likely below the base case.

### 2. Mailbox · 衍生品策略师 · [auto-handoff] Gamma Suppression Quant

# Covered Call ETF 对 VIX 的压制与 VIX 18 止损买盘估算

## 结论优先

- 日期锚定：本机 `date +%Y-%m-%d` 返回 `2026-05-11`。本报告的“当前”数据窗口截至 2026-05-11；由于 2026-05-09/10 为周末，市场价格与多数 ETF 披露停在 2026-05-08。
- 我估计 covered call / option-income ETF 对 VIX 的“人工压制”中枢为 **80-150 bps，即约 0.8-1.5 个 VIX 点**。高置信区间应写成 **50-200 bps**，因为公开 AUM 不能直接观察 ELN 内嵌期权、OTC 对冲和 dealer 净 vega。
- 这不是“VIX 被压低 4-5 点”的量级。当前 option-income ETF AUM 很大，但 VIX 只由 30 天 SPX 期权价格决定；Cboe 也强调，只有一部分 option-income AUM 直接落在 1 个月 SPX 期权上，底层、期限和行权价分散会稀释影响。
- 如果 VIX 现货突破 **18**，我估计第一波止损/追买规模为 **20k-40k 张 VX 期货，约 $0.4-0.8bn VIX 期货名义本金**。若突破 18 后延伸到 19.5-20，并迫使更广泛 short-vol 账户降杠杆，压力情景可扩至 **50k-70k 张，约 $1.0-1.4bn 名义本金**。
- 纯 ETF 机械再平衡比市场叙事小：若短端 VX 篮子单日上涨 5%，SVIX/SVXY/SVOL 这类公开 short-vol ETP 的机械买回约 **$40mn**；若这些产品全部把短 VIX 暴露降到零，才是 **约 $0.45-0.50bn**。

## 关键数据

| 项目 | 当前读数 | 解释 | 来源 |
|---|---:|---|---|
| 美国 option ETF 总 AUM | 约 $250bn | Nasdaq 2026 年 4 月报告称美国 option ETF 约 800 只、AUM 超 $250bn，前 10 大约 $127bn | [Nasdaq, All About ETFs with Options 2026](https://www.nasdaq.com/docs/index/all-about-etfs-with-options-2026) |
| Covered call ETF 宇宙 | 约 $147bn | 第三方 covered-call ETF 监测口径，2026 年 3 月约 94 只、$147bn AUM | [CoveredCallETFHQ](https://coveredcalletfhq.com/largest-covered-call-etfs.html) |
| JEPI | $44.66bn | 最大 derivative-income ETF；持仓页列为 Derivative Income | [StockAnalysis JEPI holdings](https://stockanalysis.com/etf/jepi/holdings/) |
| JEPQ | $37.93bn | Nasdaq-100 derivative-income ETF | [StockAnalysis JEPQ holdings](https://stockanalysis.com/etf/jepq/holdings/) |
| SPYI | $9.52bn | S&P 500 High Income ETF；披露使用 SPX index options | [NEOS SPYI](https://neosfunds.com/spyi/) |
| QQQI | $11.62bn | Nasdaq-100 High Income ETF | [NEOS fund overview](https://neosfunds.com/) |
| QYLD | $8.39bn；短 NDX call 名义 $9.15bn | Global X 披露 2026-05-08 短 NASDAQ call | [Global X QYLD](https://www.globalxetfs.com/funds/QYLD) |
| XYLD | $3.12bn；短 SPX call 名义 $3.18bn | Global X 披露 2026-05-05 短 S&P 500 call | [Global X XYLD](https://www.globalxetfs.com/funds/XYLD) |
| DIVO | $6.89bn | 更偏主动单名覆盖，不是纯 SPX 1M 覆盖 | [StockAnalysis DIVO holdings](https://stockanalysis.com/etf/divo/holdings/) |
| SPX 期权流动性 | 2026-05-08 成交 4.49mn 张；OI 23.21mn 张 | 以 SPX 约 7,300 估算，单日名义成交约 $3.3tn | [Cboe SPX options](https://www.cboe.com/tradable-products/sp-500/spx-options/) |
| Q1 2026 SPX ADV | 4.9mn 张 | Cboe 称 Q1 2026 SPX ADV 创纪录 | [Cboe Q1 2026 options review](https://www.cboe.com/insights/posts/the-state-of-the-options-industry-q-1-2026) |
| VIX 最新现货 | 2026-05-08 收盘约 17.10 | VIX 已在 18 下方但接近触发位 | [Investing.com historical VIX](https://za.investing.com/indices/volatility-s-p-500-historical-data?cid=1096487) |
| CFTC VIX futures 定位 | OI 362,343 张；Asset Manager short 63,482，Leveraged Funds short 100,608 | 2026-04-28 COT；非 dealer 净空约 46k 张 | [CFTC financial futures short report](https://www.cftc.gov/dea/futures/financial_lf.htm) |
| SVXY | AUM $231.6mn；短 VX 暴露约 -$116mn | -0.5x VIX short-term futures；持仓为 May/Jun VX 空头 | [ProShares SVXY](https://www.proshares.com/our-etfs/strategic/svxy) |
| SVIX | AUM 约 $217-227mn；短 VX 暴露约 91% NAV | -1x short VIX futures ETF | [ETF Central SVIX](https://www.etfcentral.com/fund/SVIX), [StockAnalysis SVIX](https://stockanalysis.com/etf/svix/) |
| SVOL | AUM $594.8mn；目标 -0.2x 至 -0.3x VIX short-term futures | 带 VIX call 对冲的 short-vol income ETF | [Simplify SVOL](https://www.simplify.us/etfs/svol-simplify-volatility-premium-etf) |

## 压制估算框架

我的口径是把“人工压制”拆成两部分：

1. **期权供给效应**：covered call ETF 系统性卖出 index call / call spread / ELN 内嵌期权，直接压低相关期限和 moneyness 的 implied vol。对 VIX 最直接的是 30 天 SPX OTM/ATM 期权；NDX、Russell、单名和短于 30 天的卖权只能间接影响。
2. **dealer gamma 效应**：ETF 卖 call，dealer 通常买 call、做 delta hedge；在正 gamma 区域，dealer 往往涨时卖、跌时买，抑制 realized vol，间接压低 VIX。BIS 对这一机制的描述是：yield-enhancing structured products 可通过 dealer 动态对冲来 dampen underlying price movements，并可能压低 VIX；T. Rowe Price 也指出 call-overwriting ETF 会增加 VIX 计算中 OTM call 的供给，并通过 dealer long gamma 抑制市场波动。

但是这个机制不能线性外推。Cboe 的反证很重要：option-income fund AUM 虽然已从 2019 年约 $20bn 增至 2024 年超过 $120bn，但只有一部分直接影响 VIX；如果 buy-write 压低 call vol 是主因，应看到极低 call skew，可 Cboe 当时观察到的是 SPX call skew 接近历史高位。因此我不建议给出过大的“人工压制”数字。

## 数量级推导

| 步骤 | 假设 | 结果 |
|---|---|---:|
| 1. 当前 covered-call / income ETF AUM | Category 约 $147bn；前几大基金合计约 $125bn | 大池子足够大，但不是全部打到 VIX |
| 2. 直接 VIX 相关供给 | SPX 1M/near-1M 覆盖约 $55-75bn；NDX/单名/其他约 $55-70bn | 直接影响 VIX 的比例约 40%-55% |
| 3. 与 SPX 市场体量比较 | SPX 期权 2026-05-08 成交 4.49mn 张，按 SPX 约 7,300、乘数 100 约 $3.3tn 名义 | 覆盖 call 月度 roll 折算成日均仅约 $2.5-4.0bn；roll 日可升至 $20-40bn |
| 4. 对 VIX 的传导 | 假设 call 供给压低相关 call vol 1-3 vol pts，VIX 权重传导约 0.2-0.8 点；dealer gamma / realized-vol feedback 再贡献 0.3-0.7 点 | 合计约 0.8-1.5 个 VIX 点 |
| 5. 敏感性 | 若把 JEPI/JEPQ ELN 的有效覆盖率降到 40%-50%，压制偏 0.5-1.0 点；若 roll 集中且 market maker 库存难吸收，短期可到 1.5-2.0 点 | 建议表达为 50-200 bps 区间，中枢 80-150 bps |

## VIX 突破 18 的止损买盘

### 公开 short-vol ETP 的机械部分

估算基于 2026-05-08 附近 AUM：

| 产品 | 暴露倍数 | AUM | 估算短 VX 暴露 | 若 VX 篮子上涨 5%的机械买回 | 若降到零的买回 |
|---|---:|---:|---:|---:|---:|
| SVIX | -1.0x | $217-227mn | $200-210mn | 约 $22mn | $200-210mn |
| SVXY | -0.5x | $231.6mn | $116mn | 约 $9mn | $116mn |
| SVOL | -0.25x 中枢 | $594.8mn | $149mn | 约 $9mn | $149mn |
| 其他小型 short-vol 产品 | 混合 | 约 $50-150mn | $25-75mn | 约 $1-5mn | $25-75mn |
| **合计** |  |  | **约 $0.45-0.55bn** | **约 $40mn** | **约 $0.45-0.50bn** |

解释：日内只破 18，不会让 ETF 自动“全平”。机械再平衡公式对 -1x 产品近似为 `2 * AUM * index move`；对 -0.5x 为 `0.75 * AUM * index move`；对 -0.25x 为 `0.3125 * AUM * index move`。所以真正的强迫买盘来自止损/风控，而不是每日再平衡本身。

### CFTC / discretionary short-vol 的止损部分

2026-04-28 CFTC VIX futures 数据显示：

- Asset Manager short：63,482 张，long：57,703 张，净空约 5,779 张。
- Leveraged Funds short：100,608 张，long：60,287 张，净空约 40,321 张。
- 合计主要非 dealer 净空约 **46k 张 VX**，按 19-20 的 VX 价格和 $1,000 乘数，名义约 **$0.9bn**。

如果 VIX 18 是第一道 spot trigger，我不会假设全部平仓。更合理的分层：

| 情景 | 触发条件 | 买盘估计 |
|---|---|---:|
| 温和突破 | VIX 18 上方但 VX 仅涨 3%-5%，SPX 未明显破位 | **10k-20k 张 VX**，约 **$0.2-0.4bn** |
| 基准情景 | VIX 18 站稳且短端 VX 同步上行，CTA/vol-control/short-vol pod 减半风险 | **20k-40k 张 VX**，约 **$0.4-0.8bn** |
| 压力情景 | VIX 18 后快速冲 19.5-20，SPX 下破关键均线，短 vol 风控转为强制 | **50k-70k 张 VX**，约 **$1.0-1.4bn** |

## 对 Sentiment Analyst 的可用话术

- “Covered call ETF 的 AUM 已足以形成结构性 vol supply，但以 VIX 口径看，压制更像 **1 个 VIX 点上下**，不是数点级别。”
- “VIX 18 是轻度触发位；真正危险阈值是 18 后能否站稳并推动前两个月 VX 期货一起上行。若只是现货刺穿，机械买盘约 $40mn；若触发 short-vol 风控，买盘可放大到 $0.4-0.8bn。”
- “若 VIX 逼近 20，应把风险从 ‘covered call 压制 VIX’ 切换到 ‘short-vol stop-loss 追买 VIX futures’。那时 dealer gamma 从抑制波动转为流动性消耗，情绪信号会非线性恶化。”

## 需要跟进

- 核对 JEPI/JEPQ 最新完整持仓中的 ELN 名义、strike、expiry；公开页面只给 AUM 和股票持仓，不能精确还原内嵌短期权。
- 跟踪 2026-05-06/13 CFTC VIX futures COT 更新，确认 leveraged funds 是否继续净空扩张。
- 监控 VIX 18、19.5、20 三个层级下的 VX1/VX2 同步性；若 spot VIX 上穿但 VX futures 不跟，止损买盘大概率低于基准情景。

