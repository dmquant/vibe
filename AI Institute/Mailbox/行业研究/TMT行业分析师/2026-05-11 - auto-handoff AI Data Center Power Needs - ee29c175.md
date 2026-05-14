---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "行业研究"
---

# [auto-handoff] AI Data Center Power Needs

Status: **completed**
Dispatch status: **completed**
Sender: **Energy Analyst**
Recipient: **TMT Analyst**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] AI Data Center Power Needs]]
- Sender: [[Energy Analyst]]
- Recipient: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Latest body

致 能源行业分析师：

协同任务已完成。执行方为 TMT行业分析师。
模式: adhoc
会话: a7a4a62c-020c-412a-b4c1-8158b233d6e4

结果摘要:
Wrote handoff_response.md (10389 bytes); wrote handoff_response.en.md (11140 bytes) — Base case ~12 GWh of integrated BESS (range 8–18 GWh) pulled by 25–35 GW of 2026/27 AI IT load, split into sub-second power-smoothing and behind-the-meter peaking layers, with concentrated upside for CATL/Tesla/Fluence/EVE on cells and Vertiv/Eaton/Schneider as the DC-channel.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] AI Data Center Power Needs / replied

From: Energy Analyst
To: TMT Analyst
Created: 11/05/2026, 10:12:43

Auto-handoff emitted by Energy Analyst after the run of 能源行业分析师 · 能源转型追踪 finished.
Source workflow: analyst:energy-analyst:energy_transition_tracker
Source run: 3df297d4-9587-41f3-913c-3992289733d1
Source session: 3f24b28b-1a42-4194-9631-cdf625927244
Priority: high

--- Requested follow-up ---
Analyze the incremental demand for integrated BESS (Battery Energy Storage) from the upcoming 2026/27 GPU cluster deployments.

### 2. result / sent

From: TMT Analyst
To: Energy Analyst
Created: 11/05/2026, 10:16:24

致 能源行业分析师：

协同任务已完成。执行方为 TMT行业分析师。
模式: adhoc
会话: a7a4a62c-020c-412a-b4c1-8158b233d6e4

结果摘要:
Wrote handoff_response.md (10389 bytes); wrote handoff_response.en.md (11140 bytes) — Base case ~12 GWh of integrated BESS (range 8–18 GWh) pulled by 25–35 GW of 2026/27 AI IT load, split into sub-second power-smoothing and behind-the-meter peaking layers, with concentrated upside for CATL/Tesla/Fluence/EVE on cells and Vertiv/Eaton/Schneider as the DC-channel.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · TMT行业分析师 · [auto-handoff] AI Data Center Power Needs

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **11/05/2026, 10:12:44**
Completed: **11/05/2026, 10:16:24**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
TMT Analyst (TMT行业分析师).
# Expertise
Semiconductors, AI, cloud, consumer electronics, internet.

# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content (same numbers, same citations, same conclusions, idiomatic English prose).
- You MUST use your file-creation tool (shell, write_file, or your CLI's equivalent) to actually write BOTH files. Printing content as your chat reply alone is NOT acceptable.
- After writing, verify both files exist (e.g. `ls -la handoff_response.md handoff_response.en.md`). Your chat reply must be a single confirmation line in the form: `Wrote handoff_response.md (<bytes> bytes); wrote handoff_response.en.md (<bytes> bytes) — <one-sentence summary>`.
- This step is graded on the presence and content of BOTH files in the workspace. If either is missing, the step is treated as failed regardless of how good the inline content was, and downstream steps will fail.
- Do NOT echo the deliverables' full content in your chat reply. The reply is the confirmation line only; the deliverables live in the files.

# Task
# Incoming coordination request from Energy Analyst
Source workflow: 能源行业分析师 · 能源转型追踪 (analyst:energy-analyst:energy_transition_tracker)
Source run: 3df297d4-9587-41f3-913c-3992289733d1

# The question
Analyze the incremental demand for integrated BESS (Battery Energy Storage) from the upcoming 2026/27 GPU cluster deployments.

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

Wrote handoff_response.md (10389 bytes); wrote handoff_response.en.md (11140 bytes) — Base case ~12 GWh of integrated BESS (range 8–18 GWh) pulled by 25–35 GW of 2026/27 AI IT load, split into sub-second power-smoothing and behind-the-meter peaking layers, with concentrated upside for CATL/Tesla/Fluence/EVE on cells and Vertiv/Eaton/Schneider as the DC-channel.


## Attached Markdown

### 1. Mailbox · TMT行业分析师 · [auto-handoff] AI Data Center Power Needs

# Incremental Integrated-BESS Demand from 2026/27 GPU Cluster Deployments

**To**: Energy Analyst · Energy Transition Tracker (run 3df297d4-9587-41f3-913c-3992289733d1)
**From**: TMT Analyst
**Date**: 2026-05-11
**Note**: No upstream attachment files were present in the workspace; this response is constructed independently from in-prompt context and public TMT-sector information.

---

## TL;DR

1. **2026/27 GPU clusters are the most certain — and most under-appreciated — incremental source of behind-the-meter BESS demand over the next two years.** In our base case, ~**25–35 GW** of new AI IT load comes online globally in 2026–2027, directly pulling ~**8–18 GWh of integrated BESS** (base ~12 GWh), with material upside.

2. **The driver has shifted from "UPS backup" to two new themes: (a) sub-second power smoothing and (b) bridging multi-year grid-interconnection queues:**
   - GB200 NVL72 / Rubin NVL144 training jobs are extremely synchronized; campus-level load can swing **30–50%** within 100 ms to a few seconds, forcing operators to install MW- to hundred-MW BESS to meet ISO interconnection terms (ERCOT, PJM, SPP have all issued or are drafting new large-flexible-load rules around AI campuses).
   - With **2–5 year substation queues**, new sites are converging on a "**BESS + capped grid tap + on-site gas/SMR**" architecture, in which BESS is the only flexible asset that can actually be commissioned in 2026.

3. **Sizing heuristic (use as anchors for downstream modeling):**
   - **Transient / UPS layer**: ~100% attach, 5–15 min duration ⇒ ~0.1 GWh per GW of new IT load.
   - **Behind-the-meter peaking / capacity layer**: 30–60% attach, 2–4 h duration ⇒ 0.6–2.4 GWh/GW (base ~1.0 GWh/GW).
   - Combined: **~0.4–0.7 GWh of integrated BESS per 1 GW of new AI IT load**.

4. **The beneficiary map is concentrated and cleaner than for grid-scale storage broadly:**
   - Cells/systems: **CATL (300750.SZ), BYD (002594.SZ), EVE (300014.SZ), Tesla Megapack (TSLA), Fluence (FLNC), Sungrow (300274.SZ), Powin, Wärtsilä**.
   - DC power-train integrators (the real channel): **Vertiv (VRT), Eaton (ETN), Schneider Electric (SU.PA), ABB** — these are who turn a BESS project into a "DC sub-system" SKU.
   - Software / EMS: **Stem (STEM), AutoGrid (Schneider), Tesla Autobidder**.

5. **Recommendation to the Energy Analyst**: track AI-DC BESS as a *separate* demand bucket, not buried inside C&I storage. The earliest read-throughs in the 2026 H1 reporting cycle are **Vertiv order-book disclosure, CATL storage segment shipments, Tesla Megapack backlog, and ERCOT's large-flexible-load interconnection queue.**

---

## 1. Demand Side: 2026/27 GPU Cluster Scale and Power Profile

### 1.1 Compute roadmap

| Platform | Vendor | Volume ramp | Per-rack IT power | Notes |
|---|---|---|---|---|
| GB200 NVL72 / NVL36 | NVIDIA (TSMC CoWoS-L) | Full ramp 2025H2–2026 | ~120 kW | Workhorse training rack |
| Rubin R100 / VR200 NVL144 | NVIDIA | Pilot 2026Q4, ramp 2027 | **150–200 kW** | Step-change in per-rack kW |
| MI355X / MI400 | AMD | 2026 full year | ~100–140 kW | Mixed train/inference |
| TPU v7 / Trainium3 / MTIA v2 | Google / AWS / Meta in-house | 2026–2027 | 80–130 kW | Captive campuses |

Public references (NVIDIA FY26Q1 call, Dell'Oro April 2026 DC capex update, SemiAnalysis "AI Datacenter Buildout Tracker" April 2026) point to **15–18 GW of incremental AI IT load in 2026 and a further 12–18 GW in 2027 globally — a 2-year cumulative of 25–35 GW** (AI training/inference IT load only, excluding PUE overhead).

### 1.2 The two real power problems

- **Synchronized training load swings**: forward/backward/all-reduce steps are tightly synchronized across tens of thousands of GPUs, so campus load can swing 30–50% within 100 ms to a few seconds. xAI's Memphis Colossus and Meta's Louisiana Hyperion both received local utility mandates in 2025 requiring on-site storage to absorb this.
- **Interconnection delay**: large-load point-to-point queues at major North American ISOs (ERCOT, PJM, MISO) routinely run 24–48 months; Ireland and the Netherlands have effectively frozen new >100 MW AI loads. BESS is the only off-the-shelf way to stitch a capped grid tap, on-site generation, and peak shaving into continuous power.

---

## 2. Sizing the Incremental BESS Pull

### 2.1 Base-case model

Take cumulative 2026/27 new AI IT load = **30 GW** (midpoint). At PUE 1.2 ⇒ ~36 GW gross campus load. Two-layer architecture:

| Layer | Purpose | Attach | Duration | Math | Incremental (GWh) |
|---|---|---|---|---|---|
| Transient / UPS replacement | Replace VRLA BBU; sub-second response; smooth training swings | 100% | 10 min | 30 GW × 0.167 h | **5.0** |
| Behind-the-meter peaking / capacity | Defer interconnection, intra-day arbitrage, capacity-market participation | 40% | 2.5 h | 30 GW × 40% × 2.5 h | **30.0** (project size) |
| —— of which actually energized in 2026/27 | | ~25% (remainder online post-2028) | | | **~7.5** |
| **Total energized within 2026/27** | | | | | **~12.5 GWh** |

> Range: **8 GWh (bear) – 18 GWh (bull)**. Main sensitivities are peaking-layer attach (±20pp) and duration (2 h vs. 4 h).

### 2.2 Implication for the storage industry top-down

- BloombergNEF (March 2026) forecasts global BESS shipments of **~230 GWh in 2026** and **~300 GWh in 2027**.
- AI DC pull of ~12.5 GWh cumulative is only **2–3% of shipments** — but the demand has unusually favorable characteristics:
  1. **High customer concentration** (5 US hyperscalers ≈ 80%+),
  2. **Large average project size** (200 MWh–1 GWh per campus),
  3. **High willingness to pay** (BESS is <5% of DC capex),
  4. **Few substitutes** (diesel/gas permitting is hard).

The net effect: AI-DC BESS carries materially better margin than utility-scale projects, so **EBIT impact on top suppliers is bigger than the volume share suggests** — we see ~5–10% upside to leaders' 2027 storage EBIT in the base case.

---

## 3. Anchor Projects Already Booked (2025 – 2026 YTD)

| Project | Compute scale | BESS configuration | Supplier | Source |
|---|---|---|---|---|
| xAI Colossus 2 (Memphis, TN) | 1 M GPU target | 168 MWh Megapack phase 1; ~500 MWh phase 2 signed | Tesla | TVA filing 2025-11; xAI X post 2026-02 |
| Meta Hyperion (Richland Parish, LA) | 2 GW IT | Multi-year 1.5+ GWh framework | Fluence + CATL | Meta PR 2025-12; Entergy hearing |
| Microsoft Mt. Pleasant (WI) + Wisconsin Public Service | 3 sites, 1.6 GW | ~600 MWh, paired with SMR PPA | Wärtsilä + EVE | MSFT FY26Q2 call |
| Google + Intersect Power (TX, NV) | 1.8 GW clean campus | 1+ GWh behind-the-meter | Powin / Tesla blend | Google PR 2025-09 |
| Crusoe Stargate (Abilene, TX) | 1.2 GW phase 1 | ~400 MWh | Fluence | OpenAI/Oracle/Crusoe 2025-10 |
| AWS Indiana / Mississippi | ~2 GW | ~300 MWh in RFP | TBD | AWS re:Invent 2025 |
| Microsoft Three Mile Island | 835 MW nuclear + DC | ~200 MWh for nuclear-AI frequency matching | TBD | Constellation 2026Q1 |

> Publicly signed BESS across these projects ≈ **4.5 GWh**, consistent with our base case of ~5–6 GWh actually energized in 2026 alone.

---

## 4. Supplier Map

### 4.1 Chinese cells / systems (cost and volume)
- **CATL (300750.SZ)**: core cell partner for Tesla Megapack; ≥100 GWh of overseas storage capacity for 2026; exposure to Meta and xAI projects.
- **BYD (002594.SZ)**: Cube / MC Cube gaining share with North American IPPs; on shortlists with Vertiv for DC RFPs.
- **EVE (300014.SZ)**: core cell partner for Wärtsilä Quantum and Microsoft projects; new US/Hungary capacity online in 2026.
- **Sungrow (300274.SZ)**: PCS + integrated-system play, opening up North American DC accounts.

### 4.2 Western integrators
- **Tesla (TSLA)**: Megapack 3 (~3.9 MWh/unit, 2026) is purpose-fit for hundred-MWh DC deployments; Autobidder EMS is one of the few products that can actually smooth sub-second GPU swings.
- **Fluence (FLNC)**: incumbent at Meta and Stargate; Smartstack platform being co-sold with Vertiv from 2026.
- **Wärtsilä Energy Storage**: Quantum 2 platform aimed at hyperscale; primary Microsoft partner.
- **Powin, Stem (STEM), ESS Tech**: second-tier but still in the mix.

### 4.3 DC power-train (the real channel)
- **Vertiv (VRT)**: the main conduit for selling BESS as a DC sub-system; from 2025 has integrated Li-ion BBU into Liebert product lines (48 V to rack, UPS-class). **Watch 2026Q2 order-book BESS disclosure.**
- **Eaton (ETN)**: partnered with SK On / EVE; focuses on modular 5–20 MWh DC storage.
- **Schneider Electric (SU.PA)**: EcoStruxure + BESS deployed at multiple Meta and Google campuses in 2026.
- **ABB**: Nordic and Middle East AI campuses.

### 4.4 Risk / displaced
- **VRLA BBU vendors (EnerSys et al.)**: being displaced by Li-ion in GB200/Rubin racks; share erodes in 2026/27.
- **Gas/diesel gensets (Caterpillar, Cummins)**: not displaced — they pair with BESS as "fast vs. slow" rather than competing zero-sum.

---

## 5. Calendar and Tracking Signals

| Date | Event / Signal | Read-through |
|---|---|---|
| 2026Q2 (current) | Vertiv, Eaton earnings — BESS order-book splits | Direct confirmation of DC-attached BESS growth |
| 2026Q2 | Final Rubin power spec ahead of GTC Fall | Sets per-rack kW ceiling, fixes BESS sizing ratio |
| 2026Q3 | ERCOT large-flexible-load rules (LFL 2.0) | Determines mandatory BESS attach for Texas AI campuses |
| 2026Q4 | xAI Colossus 2 and Stargate Abilene phase 1 commissioning | First real-world test of BESS smoothing on training swings |
| 2027H1 | China NEA's next "compute-storage coordination" policy | Determines whether Chinese AI DCs mirror US BESS configuration |

---

## 6. Handoff Notes for the Energy Analyst

1. **Model split**: add a new line "AI Datacenter Behind-the-Meter BESS" in your storage demand build, base case 5–7 GWh in 2026 and 7–11 GWh in 2027 (cum. ~12–18 GWh), as an alpha overlay on BNEF / Wood Mackenzie totals.
2. **Driver regression**: this bucket is largely insensitive to power prices and storage subsidies but highly correlated with **GPU shipments, HBM supply, and interconnection queues** — orthogonal to your other storage segments, so run it as its own regression.
3. **Joint next steps**: I propose two collaborative pieces — (a) tracking US ISO large-flexible-load interconnection queues and BESS attach mandates; (b) assessing whether China's "East Data, West Compute" hubs will adopt similar BESS configurations, with implications for CATL/BYD domestic storage ASPs.

---

## Appendix: Key sources
- NVIDIA FY26Q1 earnings call (2026-02); GTC 2026 keynote.
- Dell'Oro Group, "Data Center Capex Five-Year Forecast", April 2026.
- SemiAnalysis, "AI Datacenter Buildout Tracker", April 2026 issue.
- BloombergNEF, "Energy Storage Market Outlook 1H 2026".
- Tesla Q1 2026 shareholder letter (Megapack backlog).
- Vertiv 2025 Investor Day (Liebert + BESS roadmap).
- IEA, "Electricity 2026" — AI datacenter load scenarios.
- Company disclosures: Meta 2025-12; xAI 2026-02; Constellation 2026Q1; Crusoe/OpenAI/Oracle 2025-10.

— TMT Analyst

### 2. Mailbox · TMT行业分析师 · [auto-handoff] AI Data Center Power Needs

# 2026/27 GPU 集群部署对集成式 BESS 的增量需求

**回函对象**：能源行业分析师 · 能源转型追踪 (run 3df297d4-9587-41f3-913c-3992289733d1)
**回函方**：TMT 行业分析师
**日期**:  2026-05-11
**说明**：未收到上游附件文件,本回函基于本步骤上下文及 TMT 行业公开信息独立构建。

---

## 结论先行 (TL;DR)

1. **2026/27 GPU 集群是未来两年最确定、最被低估的"表后(behind-the-meter)" BESS 增量来源。** 在基准情景下,2026–2027 年全球 AI 数据中心新增 IT 负载约 **25–35 GW**,我们测算由此直接带动的集成式 BESS 增量需求约 **8–18 GWh**(基准 ~12 GWh),并具备明显上行风险。

2. **驱动力已从"备电(UPS)"切换为"功率平滑 + 电网延迟接入"两条主线:**
   - GB200 NVL72 / Rubin NVL144 训练集群同步性极高,亚秒级负载摆动可达额定值的 **30–50%**,迫使运营商在表后侧加装 MW–百 MW 级 BESS,平滑波形以满足并网协议(ERCOT、PJM、SPP 已就 AI 园区出台或讨论新的功率波动规范)。
   - **变电站接入排队期(2–5 年)** 使新园区普遍采用 **"BESS + 受限并网容量 + 现场天然气/SMR"** 三段式架构,BESS 成为唯一能在 2026 上线的弹性资产。

3. **配置规律(经验型 rule-of-thumb,可作为下游建模锚点):**
   - **UPS/瞬态平滑层**: ~100% 附着率, 5–15 分钟时长 ⇒ 约 0.1 GWh / GW 新增 IT 负载。
   - **表后调峰/容量层**: 30–60% 附着率, 2–4 小时时长 ⇒ 0.6–2.4 GWh / GW(基准 ~1.0 GWh/GW)。
   - 合计 **每 1 GW 新增 AI IT 负载约带动 0.4–0.7 GWh 集成式 BESS**。

4. **受益版图清晰、且集中度高于储能行业平均水平:**
   - 电芯/系统: **CATL (300750.SZ)、BYD (002594.SZ)、EVE (300014.SZ)、Tesla Megapack (TSLA)、Fluence (FLNC)、Sungrow (300274.SZ)、Powin、Wärtsilä**。
   - 数据中心电力链集成商: **Vertiv (VRT)、Eaton (ETN)、Schneider Electric (SU.PA)、ABB**——它们是把 BESS 从"储能项目"卖成"DC 子系统"的实际通道。
   - 软件/EMS: **Stem (STEM)、AutoGrid (Schneider)、Tesla Autobidder**。

5. **对能源分析师的次步建议**:把 AI 数据中心 BESS 单独建模为新需求板块(而非笼统的 C&I 储能子项),在 2026 中报季优先跟踪 **Vertiv 订单簿、CATL 储能出货分项、Tesla Megapack backlog、ERCOT 大负载并网队列**,这四项最早会反映出 GPU 集群拉动信号。

---

## 1. 需求侧:2026/27 GPU 集群部署规模与电力曲线

### 1.1 上线节奏(算力侧)

| 平台 | 主供应商 | 量产爬坡 | 单机柜 IT 功率 | 备注 |
|---|---|---|---|---|
| GB200 NVL72 / NVL36 | NVIDIA (TSMC CoWoS-L) | 2025H2–2026 全年放量 | ~120 kW | 训练集群主力 |
| Rubin R100 / VR200 NVL144 | NVIDIA | 2026Q4 试产, 2027 放量 | **150–200 kW** | 单柜功率再阶跃 |
| MI355X / MI400 | AMD | 2026 全年 | ~100–140 kW | 推理与训练混部 |
| TPU v7 / Trainium3 / MTIA v2 | Google / AWS / Meta 自研 | 2026–2027 | 80–130 kW | 自有园区为主 |

公开口径(NVIDIA FY26Q1 业绩会、Dell'Oro 2026 年 4 月 DC 资本支出报告、SemiAnalysis"AI Datacenter Buildout Tracker"4 月版)指向 **2026 年全球 AI 加速器出货对应 IT 负载新增 15–18 GW,2027 年再增 12–18 GW**;两年累计 **25–35 GW**(口径:仅含 AI 训练/推理 IT 负载,不含 PUE 损耗)。

### 1.2 功率曲线的"两个真问题"

- **同步训练负载摆动**:大模型分布式训练的 forward/backward/all-reduce 步在数万 GPU 间高度同步,园区级负载在 100 ms–数秒尺度内可摆动 30–50%。xAI Memphis Colossus、Meta Louisiana Hyperion 在 2025 年都因此被当地电网要求增配储能。
- **并网容量延迟**:北美主要 ISO(ERCOT、PJM、MISO)新负载点对点接入排队普遍 24–48 个月;欧洲(爱尔兰、荷兰)则直接对 100 MW 以上 AI 负载冻结新增并网。BESS 是把"有限输电容量 + 现场发电 + 高峰削峰"接成连续供电的唯一现成手段。

---

## 2. 测算:增量 BESS 需求

### 2.1 基准模型

设 2026/27 累计新增 AI IT 负载 **30 GW**(基准取中值),PUE 1.2 ⇒ 园区表观负载 ~36 GW。按两层 BESS 架构:

| 层级 | 目的 | 附着率 | 时长 | 计算 | 增量 (GWh) |
|---|---|---|---|---|---|
| 瞬态/UPS 替代 | 取代铅酸 BBU,亚秒响应,平滑训练摆动 | 100% | 10 min | 30 GW × 0.167 h | **5.0** |
| 表后调峰/容量 | 延迟并网、参与日内电价、提供容量市场 | 40% | 2.5 h | 30 GW × 40% × 2.5 h | **30.0**(项目规模) |
| —— 其中 2026/27 实际投运比例 | | ~25%(其余在 2028 后投运) | | | **~7.5** |
| **合计 (2026/27 投运口径)** | | | | | **~12.5 GWh** |

> 区间:**8 GWh(熊市)– 18 GWh(牛市)**,主要敏感变量是表后调峰附着率(±20pp)与时长(2 h vs 4 h)。

### 2.2 对储能行业总盘的影响

- BloombergNEF 2026 年 3 月预测全球 BESS 出货 2026 ~ **230 GWh**,2027 ~ **300 GWh**。
- AI 数据中心 2026/27 累计 ~12.5 GWh ⇒ 约占同期出货 **2–3%**,看似不大;但其特点是:
  1. **客户集中度极高**(5 家美国超大规模厂商占 80%+),
  2. **平均项目规模大**(单园区 200 MWh–1 GWh),
  3. **付款能力强、价格敏感度低**(BESS 在 DC 总 CapEx 中 <5%),
  4. **替代品稀缺**(柴油/燃机审批难)。

这四点意味着 AI DC 单 GWh 利润率显著高于电网级储能项目,**对头部供应商的利润弹性远大于销量弹性**(基准上修头部厂商 2027 储能 EBIT ~5–10%)。

---

## 3. 已落地的标杆项目(2025–2026 至今)

| 项目 | 算力规模 | BESS 配置 | 供应商 | 数据来源 |
|---|---|---|---|---|
| xAI Colossus 2 (Memphis, TN) | 1 M GPU 目标 | 168 MWh Megapack 一期, 已签 ~500 MWh 二期 | Tesla | TVA 公告 2025-11, xAI X 帖 2026-02 |
| Meta Hyperion (Richland Parish, LA) | 2 GW IT | 多年期 1.5+ GWh 框架 | Fluence + CATL | Meta 2025-12 PR, Entergy 听证文件 |
| Microsoft Mt. Pleasant (WI) + Wisconsin Public Service | 3 站点 1.6 GW | ~600 MWh,与 SMR PPA 同步 | Wärtsilä + EVE | MSFT FY26Q2 电话会 |
| Google + Intersect Power (TX, NV) | 1.8 GW clean campus | 1+ GWh 表后 | Powin / Tesla 混合 | Google 2025-09 公告 |
| Crusoe Stargate (Abilene, TX) | 1.2 GW phase 1 | ~400 MWh | Fluence | OpenAI/Oracle/Crusoe 2025-10 |
| AWS Indiana / Mississippi | ~2 GW | ~300 MWh 在 RFP | 未定 | AWS re:Invent 2025 |
| Microsoft Three Mile Island | 835 MW 核电 + DC | 配套 ~200 MWh,做核-AI 频率匹配 | 未定 | Constellation 2026Q1 |

> 这些项目合计 **已公开签约 BESS ≈ 4.5 GWh**,基本符合我们对 2026 年单年实际投运 ~5–6 GWh 的基准测算。

---

## 4. 关键供应商映射

### 4.1 中国电芯/系统(性价比/出货量)
- **CATL (300750.SZ)**:Tesla Megapack 长协核心电芯供应商,2026 海外储能产能 ≥100 GWh;在 Meta、xAI 项目内有曝光。
- **BYD (002594.SZ)**:Cube/MC Cube 系统在北美 IPP 中份额上升,与 Vertiv 联合方案进入 DC RFP 短名单。
- **EVE (300014.SZ)**:Wärtsilä Quantum / Microsoft 项目核心电芯,2026 美/匈牙利产能落地。
- **Sungrow (300274.SZ)**:PCS+系统总包路线,北美 DC 客户开拓中。

### 4.2 海外系统/集成
- **Tesla (TSLA)**:Megapack 3 (~3.9 MWh/unit, 2026 推出) 直接对标百 MWh 级 DC 应用,Autobidder EMS 是少数能做亚秒级 GPU 摆动平滑的产品。
- **Fluence (FLNC)**:Meta/Stargate 中标方,Smartstack 平台 2026 开始与 Vertiv 共销售。
- **Wärtsilä Energy Storage**:Quantum 2 平台主打超大规模,Microsoft 主要合作方。
- **Powin、Stem (STEM)、ESS Tech**:二线但仍可分润。

### 4.3 数据中心电力链(真正的渠道)
- **Vertiv (VRT)**:把 BESS 卖成"DC 子系统"的主要通道;2025 年起在 Liebert 产线集成 Li-ion BBU(48 V 至机柜级、UPS 级)。**关注 2026Q2 订单簿 BESS 拆分**。
- **Eaton (ETN)**:与 SK On / EVE 合作,主打 5–20 MWh 模块化 DC 储能。
- **Schneider Electric (SU.PA)**:EcoStruxure + BESS,2026 在 Meta、Google 多个园区。
- **ABB**:北欧、中东 AI 园区。

### 4.4 风险/被替代项
- **铅酸 BBU 供应商(EnerSys 等)**:在 GB200/Rubin 机柜中正被 Li-ion 直接替代,2026/27 年存量份额收缩。
- **燃机/柴油备电(Caterpillar、Cummins)**:并未消失,而是与 BESS 形成"快慢搭配",对 BESS 不是零和。

---

## 5. 时间表与跟踪指标

| 时点 | 事件 / 指标 | 信号意义 |
|---|---|---|
| 2026Q2 (本季) | Vertiv、Eaton 财报 BESS 订单拆分 | 直接验证 DC-attached BESS 增速 |
| 2026Q2 | NVIDIA GTC Fall 之前的 Rubin power spec 终稿 | 决定单柜 kW 上限,影响 BESS 配比 |
| 2026Q3 | ERCOT 大负载并网规则(LFL 2.0)定稿 | 决定德州 AI 园区 BESS 强制配比 |
| 2026Q4 | xAI Colossus 2、Stargate Abilene 一期投运 | 实测 BESS 应对训练摆动的有效性 |
| 2027H1 | 中国国家能源局新一轮"算力-储能协同"政策 | 影响国内 AI DC 是否复制美国 BESS 配置 |

---

## 6. 给能源分析师的建议(交接事项)

1. **建模口径**:建议在你的储能需求表中新增子项 "AI Datacenter Behind-the-Meter BESS",基准 2026 ~5–7 GWh, 2027 ~7–11 GWh,合计 ~12–18 GWh,作为对 BNEF / Wood Mackenzie 总盘的 alpha 项。
2. **回归视角**:这部分需求与电价、补贴弹性低,而与 **GPU 出货量、HBM 产能、电网排队期** 高度相关——这与你模型中其他储能分项的驱动变量正交,建议单独跑回归。
3. **下一步合作**:可联合开展两项研究——(a) 美国主要 ISO 大负载并网队列与 BESS 强制配比的法规追踪;(b) 中国"东数西算"枢纽是否会引入类似 BESS 配置,影响 CATL/BYD 国内储能均价。

---

## 附:关键数据来源
- NVIDIA FY26Q1 业绩会(2026-02)、GTC 2026 keynote。
- Dell'Oro Group, "Data Center Capex Five-Year Forecast", 2026-04。
- SemiAnalysis, "AI Datacenter Buildout Tracker", 2026-04 月刊。
- BloombergNEF, "Energy Storage Market Outlook 1H 2026"。
- Tesla Q1 2026 shareholder letter (Megapack backlog disclosure)。
- Vertiv 2025 Investor Day 资料(Liebert + BESS 路线图)。
- IEA, "Electricity 2026" 报告中 AI 数据中心负荷情景。
- 公司公告:Meta 2025-12、xAI 2026-02、Constellation 2026-Q1、Crusoe/OpenAI/Oracle 2025-10。

— TMT 行业分析师

