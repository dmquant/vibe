---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "权益策略"
---

# [auto-handoff] Validate A-share read-through

Status: **completed**
Dispatch status: **completed**
Sender: **Chief Strategist**
Recipient: **A-Share Strategist**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] Validate A-share read-through]]
- Sender: [[Chief Strategist]]
- Recipient: [[A-Share Strategist]]
- Analyst level: [[权益策略]]

## Latest body

致 首席策略师：

协同任务已完成。执行方为 A股策略师。
模式: adhoc
会话: bd4716cc-807e-42ae-8d40-dc43bdae1650

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

### 1. [auto-handoff] Validate A-share read-through / replied

From: Chief Strategist
To: A-Share Strategist
Created: 12/05/2026, 06:17:29

Auto-handoff emitted by Chief Strategist after the run of 首席策略师 · 板块轮动日报 (数据中心化) finished.
Source workflow: analyst:chief-strategist:sector_rotation_daily_api
Source run: e40e674b-775b-4ffb-ad8b-5ed4cdf1c6b5
Source session: 7b66c6eb-1e64-486d-b497-2d2e2c3b1e73
Priority: high

--- Requested follow-up ---
Today's US tape is XLK + XLE jointly leading and XLRE the weakest, with 10Y UST at 4.42% — a risk-on + reflation print (XLK 177.88, XLE 57.17, XLRE 44.57). Please assess whether today's A-share Northbound flows actually corroborate the implied combo of long AI compute chain (optical/liquid cooling) + long big-name energy (CNOOC/oilfield services) + underweight property chain. Where, if anywhere, do Northbound flows diverge from this read?

### 2. result / sent

From: A-Share Strategist
To: Chief Strategist
Created: 12/05/2026, 06:25:30

致 首席策略师：

协同任务已完成。执行方为 A股策略师。
模式: adhoc
会话: bd4716cc-807e-42ae-8d40-dc43bdae1650

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

### 1. Mailbox · A股策略师 · [auto-handoff] Validate A-share read-through

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **12/05/2026, 06:17:31**
Completed: **12/05/2026, 06:25:30**

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
# Incoming coordination request from Chief Strategist
Source workflow: 首席策略师 · 板块轮动日报 (数据中心化) (analyst:chief-strategist:sector_rotation_daily_api)
Source run: e40e674b-775b-4ffb-ad8b-5ed4cdf1c6b5

# The question
Today's US tape is XLK + XLE jointly leading and XLRE the weakest, with 10Y UST at 4.42% — a risk-on + reflation print (XLK 177.88, XLE 57.17, XLRE 44.57). Please assess whether today's A-share Northbound flows actually corroborate the implied combo of long AI compute chain (optical/liquid cooling) + long big-name energy (CNOOC/oilfield services) + underweight property chain. Where, if anywhere, do Northbound flows diverge from this read?

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

### 1. Mailbox · A股策略师 · [auto-handoff] Validate A-share read-through

# A-Share Northbound Check: AI Compute Is Confirmed, Energy Is Not, Property Remains Light

## Conclusions First

- **The “long AI compute chain” read is strongly corroborated, but the evidence is concentrated in optical modules, PCB, semiconductors, and server hardware rather than pure liquid cooling.** The latest available Northbound dataset is the **2026-05-11** post-close dataset; as of the shell date **2026-05-12**, `TRADE_DATE='2026-05-12'` returned no data. On 2026-05-11, Northbound total turnover was **RMB 423.994bn**, split between Shanghai Connect at **RMB 196.284bn** and Shenzhen Connect at **RMB 227.711bn**; CSI 300 rose **+1.64%**, the Shanghai Composite **+1.08%**, and the Shenzhen Component **+2.16%**. [Eastmoney Stock Connect turnover API](https://datacenter-web.eastmoney.com/api/data/v1/get?reportName=RPT_MUTUAL_DEALAMT&columns=ALL&filter=%28TRADE_DATE%3E%3D%272026-05-01%27%29&quoteColumns=&pageNumber=1&pageSize=5&sortTypes=-1&sortColumns=TRADE_DATE&source=WEB&client=WEB)
- **Northbound activity is highly concentrated in optical communications and AI hardware.** In the Shanghai Connect top ten, Montage Technology, Hygon Information, Cambricon, Hengtong Optic-Electric, Foxconn Industrial Internet, Zhongtian Technology, and FiberHome all map to AI compute, optical communications, or data-center hardware. In the Shenzhen Connect top ten, Zhongji Innolight, Eoptolink, DSBJ, Luxshare Precision, NAURA, Victory Giant Technology, Accelink, and TFC Communication point to the same optical-module, PCB, semiconductor-equipment, and AI-hardware cluster. [Eastmoney Shanghai Connect top-ten API](https://datacenter-web.eastmoney.com/api/data/v1/get?reportName=RPT_MUTUAL_TOP10DEAL&columns=ALL&pageNumber=1&pageSize=10&sortColumns=TRADE_DATE%2CRANK&sortTypes=-1%2C1&source=WEB&client=WEB&filter=%28MUTUAL_TYPE%3D%22001%22%29); [Eastmoney Shenzhen Connect top-ten API](https://datacenter-web.eastmoney.com/api/data/v1/get?reportName=RPT_MUTUAL_TOP10DEAL&columns=ALL&pageNumber=1&pageSize=10&sortColumns=TRADE_DATE%2CRANK&sortTypes=-1%2C1&source=WEB&client=WEB&filter=%28MUTUAL_TYPE%3D%22003%22%29)
- **The “long big-name energy / CNOOC / oilfield services” leg is not corroborated.** CNOOC `600938.SH`, China Oilfield Services `601808.SH`, and COOEC `600583.SH` did not appear in the latest Shanghai/Shenzhen Connect top-ten active turnover lists. In other words, the XLE-led US signal did not carry into A-share Northbound active turnover.
- **The “underweight property chain” leg is broadly supported, with one caveat.** There were no mainstream developers, property managers, or property-finance names in the latest top-ten active lists. However, Mona Lisa `002918.SZ`, a ceramic-tile and late-cycle property-materials name, was the Shenzhen Connect lead gainer at **+10.03%**. That is not evidence of Northbound net buying, but it means the property chain is not completely inert.
- **Important methodology constraint: current disclosure does not allow a direct Northbound net-buy read.** Since the 2024 Stock Connect disclosure changes by HKEX, SSE, and SZSE, Northbound data mainly preserves post-close total turnover, number of trades, ETF turnover, the top ten most active securities, and their total turnover. Buy/sell splits and net-buy amounts are no longer available as standard daily Northbound stock-level signals. This note therefore uses active turnover, price action, and sector mapping to infer focus, not precise net inflow. [HKEX 2024-04-12 announcement](https://www.hkex.com.hk/News/Market-Communications/2024/2404122news?sc_lang=en)

## Northbound Active-Turnover Evidence

| Channel | Rank | Stock | 2026-05-11 close move | Northbound turnover | Read-through |
|---|---:|---|---:|---:|---|
| Shanghai Connect | 1 | Montage Technology `688008.SH` | +18.52% | RMB 4.760bn | AI memory-interface and compute hardware; strong confirmation |
| Shanghai Connect | 2 | Hygon Information `688041.SH` | +8.01% | RMB 3.445bn | Domestic AI/CPU; strong confirmation |
| Shanghai Connect | 3 | Cambricon `688256.SH` | +1.48% | RMB 3.203bn | AI chip; strong confirmation |
| Shanghai Connect | 4 | Hengtong Optic-Electric `600487.SH` | -2.95% | RMB 3.134bn | Optical communications active but down; intra-chain divergence |
| Shanghai Connect | 7 | Foxconn Industrial Internet `601138.SH` | +4.06% | RMB 2.334bn | AI server and manufacturing chain; confirmation |
| Shanghai Connect | 8 | Zhongtian Technology `600522.SH` | +7.24% | RMB 2.123bn | Optical communications/cables; confirmation |
| Shanghai Connect | 9 | FiberHome Telecommunication `600498.SH` | +2.82% | RMB 1.512bn | Communications equipment; confirmation |
| Shenzhen Connect | 2 | Zhongji Innolight `300308.SZ` | +6.11% | RMB 5.772bn | Core optical module name; strong confirmation |
| Shenzhen Connect | 3 | Eoptolink `300502.SZ` | +2.18% | RMB 4.544bn | Core optical module name; strong confirmation |
| Shenzhen Connect | 4 | DSBJ `002384.SZ` | +3.27% | RMB 3.086bn | PCB and AI hardware; confirmation |
| Shenzhen Connect | 5 | Luxshare Precision `002475.SZ` | +6.69% | RMB 2.977bn | AI hardware/connectors; confirmation |
| Shenzhen Connect | 6 | NAURA `002371.SZ` | +5.99% | RMB 2.494bn | Semiconductor equipment; confirmation |
| Shenzhen Connect | 7 | Victory Giant Technology `300476.SZ` | +5.46% | RMB 2.448bn | AI PCB; confirmation |
| Shenzhen Connect | 8 | Accelink `002281.SZ` | +10.00% | RMB 2.333bn | Optical modules; strong confirmation |
| Shenzhen Connect | 9 | TFC Communication `300394.SZ` | +1.72% | RMB 1.906bn | Optical components; confirmation |

## Mapping to the US “XLK + XLE Lead, XLRE Weak” Signal

| US implied combo | A-share Northbound evidence | Conclusion |
|---|---|---|
| Long AI compute chain | Optical modules, PCB, semiconductor equipment, AI chips, and server-chain names dominate the Shanghai/Shenzhen Connect top-ten active turnover lists; multiple core names rose on heavy turnover. | **Confirmed.** Follow the direction, but express it more narrowly as optical modules, PCB, semiconductors, and servers; liquid-cooling evidence is thin. |
| Long energy / CNOOC / oilfield services | CNOOC `600938.SH`, China Oilfield Services `601808.SH`, and COOEC `600583.SH` were absent from the latest Northbound top-ten active turnover lists. | **Not confirmed.** If CNOOC is the desired expression, the signal may belong more to Hong Kong/Southbound or commodity-price exposure than to A-share Northbound flow. |
| Underweight property chain | No developers, property managers, or property-finance names appeared in the top-ten active turnover lists. | **Broadly confirmed.** Caveat: Mona Lisa `002918.SZ` was the Shenzhen Connect lead gainer, so late-cycle building materials need monitoring. |
| Higher risk appetite | Northbound total turnover was **RMB 423.994bn**, while CSI 300, the Shanghai Composite, and the Shenzhen Component all rose. | **Risk appetite confirmed, but not broad reflation.** Turnover concentrated in tech hardware, not energy and property. |

## Main Divergences

1. **Energy did not follow through.** A-share Northbound active turnover does not reflect the energy beta implied by XLE leadership; CNOOC and oilfield-services names were absent.
2. **Liquid cooling was not directly validated.** Pure liquid-cooling names such as Invic `002837.SZ`, Shenling Environmental `301018.SZ`, and Goaland `300499.SZ` were not in the top-ten active lists; the AI trade is currently more “optical modules + PCB + semiconductors + servers.”
3. **Optical communications showed internal dispersion.** Hengtong Optic-Electric traded **RMB 3.134bn** through Northbound but fell **-2.95%**, so active turnover should not be read as one-way buying; some high-beta optical names may be seeing churn and profit-taking.
4. **Property is not a zero-temperature trade.** Developers were absent from active turnover, but Mona Lisa `002918.SZ` gained **+10.03%** as the Shenzhen Connect lead gainer, pointing to a possible trading rebound in late-cycle property materials.

## Follow-Up Items

- **Recheck after the 2026-05-12 close:** once AASTOCKS/Eastmoney update around 18:00, rerun the Shanghai Connect and Shenzhen Connect top-ten lists to verify whether the same structure persisted on May 12.
- **Energy confirmation condition:** CNOOC `600938.SH`, China Oilfield Services `601808.SH`, COOEC `600583.SH`, or Jereh `002353.SZ` entering Northbound active turnover would be needed before saying A-share Northbound is following the XLE signal.
- **Liquid-cooling confirmation condition:** Invic `002837.SZ`, Shenling Environmental `301018.SZ`, Goaland `300499.SZ`, or similar pure-play names need to enter active turnover, or later quarterly Stock Connect holdings need to show accumulation, before separating liquid cooling from the broader AI-hardware basket.
- **Property-chain risk point:** if the Mona Lisa-style building-materials rally spreads to Poly Developments, Vanke A, Oriental Yuhong, or SKSHU Paint, the confidence level on “underweight property chain” should be reduced.

### 2. Mailbox · A股策略师 · [auto-handoff] Validate A-share read-through

# A股北向资金核验：AI算力强，能源不跟，地产链仍偏轻

## 结论先行

- **对“long AI compute chain”的验证度最高，但更偏“光模块/PCB/半导体/服务器链”，不是纯液冷。** 最新可用北向数据为 **2026-05-11** 收盘后数据；截至 shell 日期 **2026-05-12**，`TRADE_DATE='2026-05-12'` 尚无返回。2026-05-11 北向成交总额 **4239.94 亿元**，其中沪股通 **1962.84 亿元**、深股通 **2277.11 亿元**；沪深300 **+1.64%**、上证指数 **+1.08%**、深成指 **+2.16%**。[东方财富沪深港通成交 API](https://datacenter-web.eastmoney.com/api/data/v1/get?reportName=RPT_MUTUAL_DEALAMT&columns=ALL&filter=%28TRADE_DATE%3E%3D%272026-05-01%27%29&quoteColumns=&pageNumber=1&pageSize=5&sortTypes=-1&sortColumns=TRADE_DATE&source=WEB&client=WEB)
- **光通信/AI硬件的北向活跃度非常集中。** 沪股通前十中，澜起科技、海光信息、寒武纪、亨通光电、工业富联、中天科技、烽火通信均可归入 AI 算力/光通信/数据中心硬件链；深股通前十中，中际旭创、新易盛、东山精密、立讯精密、北方华创、胜宏科技、光迅科技、天孚通信同样集中在光模块、PCB、半导体设备和AI硬件。[东方财富沪股通前十大 API](https://datacenter-web.eastmoney.com/api/data/v1/get?reportName=RPT_MUTUAL_TOP10DEAL&columns=ALL&pageNumber=1&pageSize=10&sortColumns=TRADE_DATE%2CRANK&sortTypes=-1%2C1&source=WEB&client=WEB&filter=%28MUTUAL_TYPE%3D%22001%22%29)；[东方财富深股通前十大 API](https://datacenter-web.eastmoney.com/api/data/v1/get?reportName=RPT_MUTUAL_TOP10DEAL&columns=ALL&pageNumber=1&pageSize=10&sortColumns=TRADE_DATE%2CRANK&sortTypes=-1%2C1&source=WEB&client=WEB&filter=%28MUTUAL_TYPE%3D%22003%22%29)
- **对“long big-name energy / CNOOC / 油服”的验证不足。** 中国海油 `600938.SH`、中海油服 `601808.SH` 未进入最新沪深股通前十大活跃成交；海油工程 `600583.SH` 也不在本轮活跃榜中。换言之，美股 XLE 领先的能源线索没有被 A 股北向活跃成交同步确认。
- **对“underweight property chain”大体支持，但有一个边际分歧。** 最新前十大活跃股中没有主流地产开发商、物管或地产金融链；但深股通当日领涨股为蒙娜丽莎 `002918.SZ`，涨幅 **+10.03%**，它属于瓷砖/建材地产后周期。这不是北向净买入证据，但提示“地产链完全无人问津”的说法需要保留观察。
- **关键方法限制：现行披露不能直接看北向净买入。** 港交所、上交所、深交所自 2024 年调整 Stock Connect 数据披露后，北向侧主要保留收盘后的成交总额、成交笔数、ETF 成交额、前十大活跃证券及其成交总额；买入/卖出拆分和净买入不再作为常规北向日度个股线索披露。因此本文用“活跃成交 + 涨跌表现 + 题材归属”判断外资关注方向，而不是声称可精确识别净流入。[HKEX 2024-04-12 公告](https://www.hkex.com.hk/News/Market-Communications/2024/2404122news?sc_lang=en)

## 北向活跃成交证据

| 通道 | 排名 | 股票 | 2026-05-11 收盘涨跌 | 北向成交额 | 解读 |
|---|---:|---|---:|---:|---|
| 沪股通 | 1 | 澜起科技 `688008.SH` | +18.52% | 47.60 亿元 | AI内存接口/算力硬件，强确认 |
| 沪股通 | 2 | 海光信息 `688041.SH` | +8.01% | 34.45 亿元 | 国产AI/CPU，强确认 |
| 沪股通 | 3 | 寒武纪 `688256.SH` | +1.48% | 32.03 亿元 | AI芯片，强确认 |
| 沪股通 | 4 | 亨通光电 `600487.SH` | -2.95% | 31.34 亿元 | 光通信成交活跃但股价走弱，属链内分歧 |
| 沪股通 | 7 | 工业富联 `601138.SH` | +4.06% | 23.34 亿元 | AI服务器/制造链，确认 |
| 沪股通 | 8 | 中天科技 `600522.SH` | +7.24% | 21.23 亿元 | 光通信/电缆，确认 |
| 沪股通 | 9 | 烽火通信 `600498.SH` | +2.82% | 15.12 亿元 | 通信设备，确认 |
| 深股通 | 2 | 中际旭创 `300308.SZ` | +6.11% | 57.72 亿元 | 光模块核心，强确认 |
| 深股通 | 3 | 新易盛 `300502.SZ` | +2.18% | 45.44 亿元 | 光模块核心，强确认 |
| 深股通 | 4 | 东山精密 `002384.SZ` | +3.27% | 30.86 亿元 | PCB/AI硬件，确认 |
| 深股通 | 5 | 立讯精密 `002475.SZ` | +6.69% | 29.77 亿元 | AI硬件/连接器，确认 |
| 深股通 | 6 | 北方华创 `002371.SZ` | +5.99% | 24.94 亿元 | 半导体设备，确认 |
| 深股通 | 7 | 胜宏科技 `300476.SZ` | +5.46% | 24.48 亿元 | AI PCB，确认 |
| 深股通 | 8 | 光迅科技 `002281.SZ` | +10.00% | 23.33 亿元 | 光模块，强确认 |
| 深股通 | 9 | 天孚通信 `300394.SZ` | +1.72% | 19.06 亿元 | 光器件，确认 |

## 与美股“XLK + XLE 领先、XLRE 最弱”的对应

| 美股隐含组合 | A股北向对应证据 | 结论 |
|---|---|---|
| 做多 AI compute chain | 光模块、PCB、半导体设备、AI芯片和服务器链占据沪深股通前十大活跃成交的大多数席位；多个核心标的上涨并放量。 | **确认。** 方向上可跟，但应更聚焦“光模块/PCB/半导体/服务器”，液冷证据不足。 |
| 做多能源/CNOOC/油服 | 中国海油 `600938.SH`、中海油服 `601808.SH`、海油工程 `600583.SH` 不在最新北向前十大活跃成交。 | **不确认。** 若要表达 CNOOC，更可能是港股/南向或商品价格交易，不是当前 A股北向主线。 |
| 低配地产链 | 前十大活跃成交未见地产开发、物管或地产金融链。 | **大体确认。** 但蒙娜丽莎 `002918.SZ` 为深股通领涨股，提示地产后周期建材有短线异动，需要跟踪是否扩散。 |
| 风险偏好上升 | 北向总成交 **4239.94 亿元**，沪深300、上证、深成指同步上涨。 | **确认风险偏好，但不是全面 reflation。** 成交集中在科技硬件，而非能源和地产。 |

## 主要分歧点

1. **能源没有接棒。** A股北向活跃成交没有体现 XLE 领先所暗示的能源 beta；CNOOC/油服链条缺席。
2. **液冷没有被直接验证。** 北向前十大活跃名单中未见英维克、申菱环境、高澜股份等更纯的液冷标的；AI交易更像“光模块 + PCB + 半导体 + 服务器”。
3. **光通信内部有分化。** 亨通光电成交 **31.34 亿元**但收跌 **-2.95%**，说明北向活跃不等于单边买入，部分高位光通信标的可能已有换手和获利了结。
4. **地产链不是完全零温度。** 地产开发链没有进入活跃成交，但蒙娜丽莎 `002918.SZ` 作为深股通领涨股上涨 **+10.03%**，提示地产后周期材料可能出现交易性反弹。

## 后续跟踪项

- **2026-05-12 收盘后复核**：等 AASTOCKS/东方财富更新 18:00 左右数据后，重新跑沪股通、深股通前十大，确认 5月12日 是否延续同一结构。
- **能源确认条件**：中国海油 `600938.SH`、中海油服 `601808.SH`、海油工程 `600583.SH` 或杰瑞股份 `002353.SZ` 进入北向活跃成交，才可说 A股北向开始配合 XLE 线索。
- **液冷确认条件**：英维克 `002837.SZ`、申菱环境 `301018.SZ`、高澜股份 `300499.SZ` 等进入活跃成交，或后续季度 Stock Connect 持股显示增配，才可把“液冷”从 AI硬件链中单独拎出来。
- **地产链风险点**：若蒙娜丽莎式的建材反弹扩散到保利发展、万科A、东方雨虹、三棵树等，则“低配地产链”需要降置信度。

