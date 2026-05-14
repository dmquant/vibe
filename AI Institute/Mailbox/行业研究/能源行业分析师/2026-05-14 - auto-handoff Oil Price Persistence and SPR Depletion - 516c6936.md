---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "行业研究"
---

# [auto-handoff] Oil Price Persistence and SPR Depletion

Status: **completed**
Dispatch status: **completed**
Sender: **Global Macro Analyst**
Recipient: **Energy Analyst**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] Oil Price Persistence and SPR Depletion]]
- Sender: [[Global Macro Analyst]]
- Recipient: [[Energy Analyst]]
- Analyst level: [[行业研究]]

## Latest body

致 全球宏观分析师：

协同任务已完成。执行方为 能源行业分析师。
模式: adhoc
会话: f3cef1d7-c99b-4671-a64c-64fc22f8a69a

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易���" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Energy Analyst (能源行���分析师).
# Expertise
Oil, gas, coal, renewables, power generation.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the sa

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] Oil Price Persistence and SPR Depletion / replied

From: Global Macro Analyst
To: Energy Analyst
Created: 14/05/2026, 08:08:33

Auto-handoff emitted by Global Macro Analyst after the run of 全球宏观分析师 · 美国数据追踪 finished.
Source workflow: analyst:global-macro:us_data_watch
Source run: b15e3d55-7c5d-452d-a590-30170032a296
Source session: 5f84e7a3-c290-4ab1-9d42-bd9ecef82586
Priority: high

--- Requested follow-up ---
With SPR at 2024 lows, how do you evaluate the path of PPI in H2 2026 given potential sustained supply disruptions?

### 2. result / sent

From: Energy Analyst
To: Global Macro Analyst
Created: 14/05/2026, 08:15:33

致 全球宏观分析师：

协同任务已完成。执行方为 能源行业分析师。
模式: adhoc
会话: f3cef1d7-c99b-4671-a64c-64fc22f8a69a

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易���" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Energy Analyst (能源行���分析师).
# Expertise
Oil, gas, coal, renewables, power generation.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the sa

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 能源行业分析师 · [auto-handoff] Oil Price Persistence and SPR Depletion

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **14/05/2026, 08:08:34**
Completed: **14/05/2026, 08:15:33**

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
# Incoming coordination request from Global Macro Analyst
Source workflow: 全球宏观分析师 · 美国数据追踪 (analyst:global-macro:us_data_watch)
Source run: b15e3d55-7c5d-452d-a590-30170032a296

# The question
With SPR at 2024 lows, how do you evaluate the path of PPI in H2 2026 given potential sustained supply disruptions?

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
All "today / yesterday / this week / 上周 / 上一交易���" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Energy Analyst (能源行���分析师).
# Expertise
Oil, gas, coal, renewables, power generation.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the sa


## Attached Markdown

### 1. Mailbox · 能源行业分析师 · [auto-handoff] Oil Price Persistence and SPR Depletion

# Energy View: H2 2026 PPI Path with SPR Back Near 2024 Lows

**Date anchor: 2026-05-14.** All references to “current,” “H2 2026,” and “last week” are resolved against this date.

## Prioritised Conclusions

1. **Base case: H2 2026 PPI should cool from April’s shock reading, but not return quickly to a low-inflation track.** In EIA’s May 2026 STEO baseline, Brent averaged $117/b in April, is expected near $106/b in May-June, and then falls as Middle East production recovers, reaching about $89/b in Q4 2026; the corresponding WTI path is Q2 $96.42/b, Q3 $90.06/b, and Q4 $83.00/b. If this path holds, headline PPI is likely to decelerate from April’s +1.4% m/m to roughly +0.2% to +0.7% m/m in H2, but the year-over-year rate should remain around 5.5% to 6.5% in Q3 before easing toward roughly 4.5% to 5.5% in Q4.

2. **Sustained supply disruption is the main upside risk, and SPR can cushion but not neutralize the shock.** EIA weekly data show U.S. SPR at 384.095 million barrels as of 2026-05-08, below the 384.642 million barrels recorded on 2024-10-18 and back near early-October 2024 levels; the weekly draw was 8.605 million barrels. Since 2026-03-20, when SPR stood at 415.442 million barrels, the draw has totaled 31.347 million barrels. If Middle East supply recovery is delayed, EIA estimates that a one-month delay in reopening the Strait of Hormuz would leave near-term oil prices more than $20/b above the current forecast. Based on PPI weights, every additional 10% rise in H2 energy PPI adds about 0.5 percentage point directly to the headline PPI level, with second-round pressure through diesel, jet fuel, chemicals, plastics, asphalt, freight, and wholesale/retail margins.

3. **The PPI shock has already broadened beyond finished fuel.** The BLS April 2026 PPI report showed final demand PPI at +1.4% m/m and +6.0% y/y; final demand energy had a 5.045% weight and rose +7.8% m/m and +22.7% y/y; processed energy goods rose +7.8% m/m; unprocessed energy materials rose +9.2% m/m; diesel fuel rose +12.6%; crude petroleum rose +11.3%; and truck transportation of freight rose +8.1%. This means that even if crude prices ease in H2, the Q2 shock will keep filtering into intermediate demand, trade margins, and transportation PPI.

4. **Within energy, oil products are the inflation source; natural gas and coal are buffers.** EIA expects Henry Hub to rise from $2.83/MMBtu in Q2 to $3.08 in Q3 and $3.31 in Q4, but the 2026 annual average of $3.50 remains below the January spike. Delivered coal costs to the power sector edge down from $2.35/MMBtu in Q2 to $2.34 in Q3 and $2.33 in Q4. Natural gas and coal will not offset the petroleum shock, but they should limit second-round pressure in U.S. power, fertilizer, and industrial heat costs.

## Key Data Table

| Indicator | Latest/Forecast Value | PPI Implication | Source |
|---|---:|---|---|
| SPR inventory, 2026-05-08 | 384.095 million barrels; w/w -8.605 million barrels | Policy buffer is thinner; if weekly releases remain near the latest pace, markets will price buffer exhaustion risk sooner | [EIA WCSSTUS1](https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?f=W&n=PET&s=WCSSTUS1), [EIA WPSR](https://www.eia.gov/petroleum/supply/weekly/pdf/wpsrall.pdf) |
| SPR change since 2026-03-20 | 415.442 -> 384.095 million barrels, down 31.347 million barrels | A meaningful share of the emergency cushion has already been used; SPR releases cannot cover a global-scale supply gap | [EIA WCSSTUS1](https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?f=W&n=PET&s=WCSSTUS1) |
| Middle East shut-ins | 10.5 million b/d in April 2026; near 10.8 million b/d peak in May 2026 | If sustained, oil-related PPI pressure will not be confined to April and will keep entering H2 input prices | [EIA STEO May 2026](https://www.eia.gov/outlooks/steo/pdf/steo_full.pdf) |
| Global oil inventory change | Average draw of 8.5 million b/d in 2Q26; full-year 2026 draw of 2.6 million b/d | Inventory depletion slows the oil-price decline even if geopolitical headlines cool | [EIA STEO May 2026](https://www.eia.gov/outlooks/steo/pdf/steo_full.pdf) |
| EIA oil price baseline | Brent $117/b in April, about $106/b in May-June, $89/b in 4Q26; WTI Q2 $96.42, Q3 $90.06, Q4 $83.00 | Under the baseline, H2 headline PPI cools sequentially but stays high year over year | [EIA STEO May 2026](https://www.eia.gov/outlooks/steo/pdf/steo_full.pdf) |
| Delayed reopening risk | A one-month Hormuz reopening delay would put near-term oil prices more than $20/b above baseline | The central risk that turns H2 PPI from “cooling” to “re-accelerating” | [EIA STEO May 2026](https://www.eia.gov/outlooks/steo/pdf/steo_full.pdf) |
| April 2026 PPI | Final demand +1.4% m/m and +6.0% y/y; final demand energy +7.8% m/m and +22.7% y/y, with 5.045% weight | Energy directly contributed about 0.4 percentage point in April and triggered indirect pass-through | [BLS PPI April 2026](https://www.bls.gov/news.release/archives/ppi_05132026.htm) |
| Intermediate pass-through | Processed energy +7.8%; unprocessed energy +9.2%; diesel +12.6%; crude petroleum +11.3%; truck freight +8.1% | Supports sticky H2 core and services PPI rather than a one-month oil-price noise story | [BLS PPI April 2026](https://www.bls.gov/news.release/archives/ppi_05132026.htm) |
| Natural gas and coal | Henry Hub Q2/Q3/Q4 at $2.83/$3.08/$3.31; power-sector coal at $2.35/$2.34/$2.33 | Limits second-round inflation pressure in power and industrial heat | [EIA STEO May 2026](https://www.eia.gov/outlooks/steo/pdf/steo_full.pdf) |

## H2 2026 PPI Path: Scenario Framework

| Scenario | Energy Assumption | Headline PPI Path | Core-Related Pass-Through |
|---|---|---|---|
| **Base case: gradual recovery** | Hormuz begins recovering in late May, flows rise slowly after June; Brent falls toward $89/b in 4Q26 | Q3 around +0.4% to +0.7% m/m, Q4 around +0.2% to +0.5% m/m; y/y around 5.5% to 6.5% in Q3 and 4.5% to 5.5% in Q4 | Final demand less foods, energy, and trade services can remain around 4% to 5% y/y because transportation, trade, and chemicals pass through with lags |
| **One-month disruption extension** | EIA sensitivity: near-term oil prices more than $20/b above baseline; SPR continues to be drawn | Q3 could stay around +0.7% to +1.0% m/m; y/y remains around 6.5% to 8.0% through Q3/Q4 | Diesel and freight PPI rise again; trade margins and industrial chemicals are slower to cool |
| **Sustained disruption into late summer or beyond** | Middle East shut-ins recover materially more slowly than EIA’s baseline; low SPR weakens market confidence | Monthly headline PPI could repeatedly print +0.9% to +1.5%; y/y could retest levels above 8% | Core PPI would be pulled higher by energy-intensive services and intermediate goods, pressuring the disinflation narrative |

## Analytical Logic

**Direct weight effect.** BLS reports final demand energy with a 5.045% relative importance. Therefore, if H2 energy PPI rises another 10% relative to baseline, the direct headline PPI level shock is about +0.5 percentage point. April’s +7.8% m/m energy increase already implies about +0.4 percentage point of direct contribution, against a total headline increase of +1.4%.

**Second-round effects matter more than the direct weight.** April’s synchronized increases in diesel, crude petroleum, industrial chemicals, plastic resins, truck freight, courier services, and freight forwarding show that the energy shock has entered the production chain. PPI usually captures these input pressures faster than CPI; the H2 risk is not a single month of gasoline prices, but repricing of transportation, packaging, chemical, and inventory costs.

**SPR constraints change the market reaction function.** An SPR level of 384.095 million barrels is not absolute depletion, but it is back near the October 2024 range. If the disruption persists, traders will focus more on the sustainable release rate than on the nominal stock level. Repeating the 2026-05-08 weekly draw of 8.605 million barrels would cause the remaining cushion to be capitalized into futures and physical spreads more quickly.

**Natural gas, coal, and power are not the main upside source.** U.S. natural gas production and inventories are relatively adequate, EIA expects Henry Hub at only $2.83/MMBtu in Q2, and delivered coal costs to the power sector drift lower in H2. The PPI upside is therefore concentrated in the petroleum chain, not the domestic power-fuel chain.

## Suggested Use for the Global Macro Analyst

- Treat energy PPI in H2 2026 as an **upside-skewed distribution**, not as a fully one-off April shock.
- Monitor three high-frequency triggers: whether weekly SPR releases remain above 5 million barrels; whether distillate/gasoline stocks remain below their five-year averages; whether the Brent spot-futures spread widens again.
- For macro modeling, use “one-month Hormuz delay” as the upside case: oil prices more than $20/b above baseline, the headline PPI y/y peak delayed into Q4, and core PPI cooling postponed by at least one quarter.
- Single-line takeaway: **the baseline is H2 cooling with high-level stickiness; the risk case is Q3 PPI re-acceleration, with low SPR reducing the credibility of the policy buffer.**

## Sources

- EIA, Weekly U.S. Ending Stocks of Crude Oil in SPR, release date 2026-05-13: https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?f=W&n=PET&s=WCSSTUS1
- EIA, Weekly Petroleum Status Report, week ending 2026-05-08: https://www.eia.gov/petroleum/supply/weekly/pdf/wpsrall.pdf
- EIA, Short-Term Energy Outlook, May 2026: https://www.eia.gov/outlooks/steo/pdf/steo_full.pdf
- BLS, Producer Price Indexes - April 2026, released 2026-05-13: https://www.bls.gov/news.release/archives/ppi_05132026.htm

### 2. Mailbox · 能源行业分析师 · [auto-handoff] Oil Price Persistence and SPR Depletion

# 能源视角：SPR回落至2024年区间低位后，H2 2026 PPI路径评估

**日期锚点：2026-05-14。** 本文所有“当前”“H2 2026”“上一周”均以该日期为准。

## 优先结论

1. **基准判断：H2 2026 PPI不会快速回到低通胀轨道，而是从4月的高冲击读数逐步降温。** 在EIA的May 2026 STEO基准中，Brent已在4月均价达到$117/b，5-6月约$106/b，随后随Middle East产量恢复回落，Q4 2026约$89/b；对应WTI为Q2 $96.42/b、Q3 $90.06/b、Q4 $83.00/b。若该路径成立，PPI headline大概率从4月的+1.4% m/m降至H2约+0.2%至+0.7% m/m，但同比仍会在Q3维持约5.5%至6.5%，Q4才向约4.5%至5.5%回落。

2. **持续供应中断是上行风险的主轴，SPR只能缓冲，不能压平价格冲击。** EIA周度数据，截至2026-05-08，美国SPR为384.095 million barrels，低于2024-10-18的384.642 million barrels，接近2024年10月初以来低位；当周减少8.605 million barrels。自2026-03-20的415.442 million barrels以来，SPR已下降31.347 million barrels。若中东供应恢复延后，EIA估计“Strait of Hormuz”重开每延迟一个月，近端油价将比当前预测高出超过$20/b。按PPI结构估算，H2能源项每额外上行10%约直接抬升headline PPI水平0.5 percentage point，且会通过柴油、航空燃料、化工品、塑料、沥青、货运和批零差价形成二轮传导。

3. **PPI传导已经扩散，不再只是成品油的单点冲击。** BLS 2026年4月PPI显示：final demand PPI +1.4% m/m、+6.0% y/y；final demand energy权重5.045%，当月+7.8% m/m、+22.7% y/y；processed energy goods +7.8% m/m；unprocessed energy materials +9.2% m/m；diesel fuel +12.6%；crude petroleum +11.3%；truck transportation of freight +8.1%。这意味着H2即便油价回落，Q2冲击仍会滞后进入intermediate demand、trade margins和transportation PPI。

4. **能源内部对PPI的影响分化：油品是通胀源，天然气和煤炭是缓冲项。** EIA预计Henry Hub从Q2 $2.83/MMBtu升至Q3 $3.08和Q4 $3.31，但2026全年$3.50仍低于1月峰值；电力用煤成本从Q2 $2.35/MMBtu降至Q3 $2.34和Q4 $2.33。天然气和煤炭不会抵消油品冲击，但会限制美国电力、化肥、工业热能成本的二轮扩散。

## 关键数据表

| 指标 | 最新/预测值 | 对PPI的含义 | 来源 |
|---|---:|---|---|
| SPR库存，2026-05-08 | 384.095 million barrels；w/w -8.605 million barrels | 政策缓冲空间变薄，若继续以当前周度速度释放，市场会更快定价“缓冲耗尽”风险 | [EIA WCSSTUS1](https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?f=W&n=PET&s=WCSSTUS1), [EIA WPSR](https://www.eia.gov/petroleum/supply/weekly/pdf/wpsrall.pdf) |
| SPR自2026-03-20变化 | 415.442 -> 384.095 million barrels，下降31.347 million barrels | 已经消耗相当一部分应急缓冲；SPR释放不足以覆盖全球级别供应缺口 | [EIA WCSSTUS1](https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?f=W&n=PET&s=WCSSTUS1) |
| Middle East shut-ins | 2026年4月10.5 million b/d；2026年5月接近10.8 million b/d峰值 | 若持续，油品PPI不会只在4月体现，而会继续进入H2投入品价格 | [EIA STEO May 2026](https://www.eia.gov/outlooks/steo/pdf/steo_full.pdf) |
| 全球油库存变化 | 2Q26平均下降8.5 million b/d；2026全年下降2.6 million b/d | 库存去化使油价回落慢于地缘新闻降温 | [EIA STEO May 2026](https://www.eia.gov/outlooks/steo/pdf/steo_full.pdf) |
| EIA油价基准 | Brent 4月$117/b，5-6月约$106/b，4Q26 $89/b；WTI Q2 $96.42、Q3 $90.06、Q4 $83.00 | 基准情形下H2 headline PPI环比降温，但同比高位延续 | [EIA STEO May 2026](https://www.eia.gov/outlooks/steo/pdf/steo_full.pdf) |
| 延迟重开风险 | Hormuz重开若延迟一个月，近端油价比基准高超过$20/b | H2 PPI从“降温”转为“再加速”的核心风险 | [EIA STEO May 2026](https://www.eia.gov/outlooks/steo/pdf/steo_full.pdf) |
| 2026年4月PPI | final demand +1.4% m/m、+6.0% y/y；final demand energy +7.8% m/m、+22.7% y/y，权重5.045% | 能源项4月直接贡献约0.4 percentage point，并引发间接传导 | [BLS PPI April 2026](https://www.bls.gov/news.release/archives/ppi_05132026.htm) |
| 中间品传导 | processed energy +7.8%；unprocessed energy +9.2%；diesel +12.6%；crude petroleum +11.3%；truck freight +8.1% | 支持H2核心和服务PPI黏性，而非单月油价噪音 | [BLS PPI April 2026](https://www.bls.gov/news.release/archives/ppi_05132026.htm) |
| 天然气和煤炭 | Henry Hub Q2/Q3/Q4为$2.83/$3.08/$3.31；电力用煤$2.35/$2.34/$2.33 | 降低电力和工业热能的二轮通胀压力 | [EIA STEO May 2026](https://www.eia.gov/outlooks/steo/pdf/steo_full.pdf) |

## H2 2026 PPI路径：情景框架

| 情景 | 能源假设 | Headline PPI路径 | Core/核心相关传导 |
|---|---|---|---|
| **基准：逐步恢复** | Hormuz 5月末开始恢复，6月后流量缓慢回升；Brent向4Q26 $89/b回落 | Q3约+0.4%至+0.7% m/m，Q4约+0.2%至+0.5% m/m；同比Q3约5.5%至6.5%，Q4约4.5%至5.5% | final demand less foods, energy, and trade services仍可能维持约4%至5% y/y，因为运输、批零、化工品滞后传导 |
| **中断延长一个月** | EIA敏感性：近端油价较基准高超过$20/b；SPR继续被动释放 | Q3可能维持+0.7%至+1.0% m/m；同比在Q3/Q4维持约6.5%至8.0% | 柴油和货运PPI再度抬升，trade margins和industrial chemicals更难降温 |
| **持续中断至夏末或更久** | Middle East shut-ins恢复明显慢于EIA基准，SPR低位削弱市场信心 | 月度headline PPI可能反复出现+0.9%至+1.5%读数；同比可能重新上探8%以上 | 核心PPI将被能源密集型服务和中间品拉高，降息叙事承压 |

## 分析逻辑

**直接权重效应。** BLS显示final demand energy的相对重要性为5.045%。因此，若H2能源PPI相对基准再上行10%，仅直接权重就约等于+0.5 percentage point的headline PPI水平冲击。4月能源项+7.8% m/m已对应约+0.4 percentage point直接贡献，且当月headline总涨幅为+1.4%。

**二轮传导比直接权重更关键。** 4月的柴油、crude petroleum、industrial chemicals、plastic resins、truck freight、courier、freight forwarding同步上行，说明能源冲击已经进入生产链。PPI通常比CPI更快反映这些投入品压力；H2的风险不是单月汽油价格，而是企业运输、包装、化工和库存成本重新定价。

**SPR约束改变市场反应函数。** 384.095 million barrels的SPR库存并非绝对耗尽，但已经回到2024年10月附近区间。若中断持续，交易员会更关注“可持续释放速度”而非名义库存总量。2026-05-08当周-8.605 million barrels的释放速度若重复，会让剩余缓冲被更快资本化进远期和现货价差。

**天然气、煤炭、电力不是主要上行源。** 美国天然气产量和库存较充足，EIA预计Henry Hub Q2仅$2.83/MMBtu，电力用煤成本H2继续小幅下行。因此PPI的能源上行主要来自油品链，而非美国本土电力燃料链。

## 给Global Macro Analyst的使用建议

- 在H2 2026美国通胀预测中，把energy PPI设为**上行偏态分布**，不要把4月PPI视为完全一次性冲击。
- 监测三个高频触发器：SPR周度释放是否连续超过5 million barrels；distillate/gasoline库存是否继续低于五年均值；Brent现货-期货价差是否再次扩大。
- 对宏观模型，可将“Hormuz延迟一个月”作为上行情景：油价较基准+>$20/b，headline PPI同比高点延后至Q4，核心PPI降温推迟至少1个季度。
- 若需要单一判断：**基准是H2降温但高位黏性；风险情景是PPI在Q3再加速，且SPR低位使政策缓冲的可信度下降。**

## 来源

- EIA, Weekly U.S. Ending Stocks of Crude Oil in SPR, release date 2026-05-13: https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?f=W&n=PET&s=WCSSTUS1
- EIA, Weekly Petroleum Status Report, week ending 2026-05-08: https://www.eia.gov/petroleum/supply/weekly/pdf/wpsrall.pdf
- EIA, Short-Term Energy Outlook, May 2026: https://www.eia.gov/outlooks/steo/pdf/steo_full.pdf
- BLS, Producer Price Indexes - April 2026, released 2026-05-13: https://www.bls.gov/news.release/archives/ppi_05132026.htm

