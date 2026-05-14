---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "固收与衍生品"
---

# [auto-handoff] 城投离岸债监管影响

Status: **completed**
Dispatch status: **completed**
Sender: **Credit Analyst**
Recipient: **Bond Analyst**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] 城投离岸债监管影响]]
- Sender: [[Credit Analyst]]
- Recipient: [[Bond Analyst]]
- Analyst level: [[固收与衍生品]]

## Latest body

致 信用分析师：

协同任务已完成。执行方为 债券分析师。
模式: adhoc
会话: 9a5e765c-9543-4b73-9f81-37cf9e81cc0d

结果摘要:
Wrote handoff_response.md (9026 bytes); wrote handoff_response.en.md (9707 bytes) — Weak-LGFV offshore refinancing is throttled (not closed) by 35号文/47号文/NDRC 56, dim sum can absorb only USD 1.5–2.5bn of 2026's USD 8–10bn weak-credit maturity wall, and a NDRC pass-rate drop below ~55% or SBLC pullback would open a USD 2–4bn hard gap with onshore +30–70bp spillover.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] 城投离岸债监管影响 / replied

From: Credit Analyst
To: Bond Analyst
Created: 11/05/2026, 17:26:03

Auto-handoff emitted by Credit Analyst after the run of 信用分析师 · 利差监控 finished.
Source workflow: analyst:credit-analyst:spread_monitor
Source run: 78dd7386-eca4-46c2-9749-08f03e479c44
Source session: 3e5354dc-c511-4a52-acd6-298c5636efe3
Priority: high

--- Requested follow-up ---
请评估近期监管收紧对弱资质城投海外债到期回购及再融资的具体压力，尤其是点心债市场的承接能力。

### 2. result / sent

From: Bond Analyst
To: Credit Analyst
Created: 11/05/2026, 17:30:38

致 信用分析师：

协同任务已完成。执行方为 债券分析师。
模式: adhoc
会话: 9a5e765c-9543-4b73-9f81-37cf9e81cc0d

结果摘要:
Wrote handoff_response.md (9026 bytes); wrote handoff_response.en.md (9707 bytes) — Weak-LGFV offshore refinancing is throttled (not closed) by 35号文/47号文/NDRC 56, dim sum can absorb only USD 1.5–2.5bn of 2026's USD 8–10bn weak-credit maturity wall, and a NDRC pass-rate drop below ~55% or SBLC pullback would open a USD 2–4bn hard gap with onshore +30–70bp spillover.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 债券分析师 · [auto-handoff] 城投离岸债监管影响

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **11/05/2026, 17:26:04**
Completed: **11/05/2026, 17:30:38**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
Bond Analyst (债券分析师).
# Expertise
Rates, credit, yield curve, duration management.

# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content (same numbers, same citations, same conclusions, idiomatic English prose).
- You MUST use your file-creation tool (shell, write_file, or your CLI's equivalent) to actually write BOTH files. Printing content as your chat reply alone is NOT acceptable.
- After writing, verify both files exist (e.g. `ls -la handoff_response.md handoff_response.en.md`). Your chat reply must be a single confirmation line in the form: `Wrote handoff_response.md (<bytes> bytes); wrote handoff_response.en.md (<bytes> bytes) — <one-sentence summary>`.
- This step is graded on the presence and content of BOTH files in the workspace. If either is missing, the step is treated as failed regardless of how good the inline content was, and downstream steps will fail.
- Do NOT echo the deliverables' full content in your chat reply. The reply is the confirmation line only; the deliverables live in the files.

# Task
# Incoming coordination request from Credit Analyst
Source workflow: 信用分析师 · 利差监控 (analyst:credit-analyst:spread_monitor)
Source run: 78dd7386-eca4-46c2-9749-08f03e479c44

# The question
请评估近期监管收紧对弱资质城投海外债到期回购及再融资的具体压力，尤其是点心债市场的承接能力。

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

Wrote handoff_response.md (9026 bytes); wrote handoff_response.en.md (9707 bytes) — Weak-LGFV offshore refinancing is throttled (not closed) by 35号文/47号文/NDRC 56, dim sum can absorb only USD 1.5–2.5bn of 2026's USD 8–10bn weak-credit maturity wall, and a NDRC pass-rate drop below ~55% or SBLC pullback would open a USD 2–4bn hard gap with onshore +30–70bp spillover.


## Attached Markdown

### 1. Mailbox · 债券分析师 · [auto-handoff] 城投离岸债监管影响

# Offshore Refinancing Pressure on Weak LGFVs — Assessment

**Responding to**: Credit Analyst · Spread Monitor (run 78dd7386-eca4-46c2-9749-08f03e479c44)
**Analyst**: Bond Analyst (Rates / Credit / Duration)
**As of**: 2026-05-11
**Note**: No upstream attachments were present in the workspace (only `.git`). This response is built from the public regulatory framework and the author's view of the offshore China LGFV stock; stock/maturity figures are given as ranges and flagged for Bloomberg/Wind/DM verification.

---

## 1. Headline Conclusions (ranked)

1. **The refinancing channel has been materially narrowed — it is a funnel, not a hard stop.** The stack of 35号文 + 47号文 + 134号文 + NDRC Order No. 56 has effectively limited weak LGFVs in the 12 "key provinces" to *roll-over only, no net issuance* through the 2024–2026 maturity window. NDRC registration has shifted from a quota-style approval to a substantive review, lengthening processing time (4–6 months per deal is now typical) and scrutinizing use of proceeds, guarantee structures, and keepwell / SBLC credit-enhancement chains. **Extensions are workable; net new money is essentially closed.**

2. **2025H2–2026H2 is the offshore maturity peak, and weak LGFVs are concentrated in it.** China LGFV USD + dim sum bond stock stands at roughly USD 95–110bn equivalent. 2026 full-year maturities are estimated at USD 28–34bn, of which weak credits (implied AA-/below, or prefecture/county-level platforms in the 12 key provinces) account for ~25–32%. The hardest refinancing pain is concentrated in **Tianjin, Guizhou, Yunnan, Guangxi, Gansu, Qinghai** prefecture/county platforms, mostly USD 100–300mn deal size; on-balance-sheet cash and parent-group cash mobilization are the key buffers.

3. **Dim sum bond "absorption capacity" is being over-estimated — it can take incremental issuers, not the weak-LGFV maturity stock.** 2024–2025 dim sum bond annual issuance crossed CNH 1,000bn (including financials, sovereigns, central SOEs), but **LGFV share has stayed below 8%**. The buyer base — offshore Chinese banks, HK-based insurers, RQFII-channel asset managers — has **not meaningfully opened up to weak prefecture/county LGFVs**. The CNH liquidity pool is ample (HKMA ~CNH 1.0–1.1tn), but **the credit premium demanded (350–500bp over comparable AAA central-SOE dim sum)** is enough to push most weak issuers out of the market on price alone.

4. **Alternative channels are repricing, not disappearing.** FTZ "Pearl" bonds, keepwell + SBLC dual-enhancement structures, and onshore LGFV ABS / REITs feeding offshore repayment are the current "quasi-channel" tools. Combined 2026 capacity is estimated at USD 8–12bn equivalent — **covering only 30–45% of weak-LGFV maturities**. The residual gap must be filled by onshore parent groups, provincial "unified borrowing / unified repayment", AMC stepping in, or negotiated extensions.

5. **Watch window**: 2026 Sep–Dec. If by then the NDRC registration pass-rate for weak LGFVs stays below 60%, and weak-LGFV dim sum primary stays cold (>200bp break in secondary), we expect **offshore 1–3y weak-LGFV USD bonds to reprice toward 12–15% yields**, with onshore spillover of **+30–50bp on the same issuer's onshore MTN spread**.

---

## 2. Regulatory Stack — Source of the Pressure

| Document | Date | Substance | Effect on weak-LGFV offshore bonds |
|---|---|---|---|
| State Council 35号文 | 2023-07 | Designates 12 "key provinces"; strict cap on new hidden debt / LGFV financing | New offshore issuance in key provinces effectively halted; only refinancing allowed |
| NDRC Order No. 56 | Effective 2023-02 | Medium/long-term external debt review-and-registration rules | Substantive review of use of proceeds, guarantee chain, mandatory pre-disclosure |
| MoF 47号文 | 2024 | Rectification of non-standard / high-cost debt in key provinces | New offshore issues with YTM > ~7% restricted; existing stock pushed into negotiated workout |
| 134号文 | 2024 | Unified provincial borrow-repay & risk isolation | Provincial platforms can pool repayment; weak county-level platforms get "carved out" |
| 14号文 + supplements | 2025 | Continuation of the "package" debt-resolution program; expanded AMC role | Extension / swap channels open, but spread costs remain elevated |

**Reading**: regulators have not banned offshore refinancing — they have tightened *who can issue, how much, and for what*. The practical effect on weak LGFVs is (i) refinancing volume ≤ maturing volume (net financing zero or negative), (ii) original-currency proceeds repatriation tightly controlled, (iii) onshore parent guarantees under keepwell look-through scrutiny.

---

## 3. Maturity Wall & Gap Estimate (indicative)

| Period | China LGFV offshore maturities (USDbn) | Weak-credit share | Weak-credit maturities (USDbn) |
|---|---|---|---|
| 2026H1 | 14–17 | 28% | 4.0–4.8 |
| 2026H2 | 14–17 | 30% | 4.2–5.1 |
| FY2027 | 22–26 | 25% | 5.5–6.5 |

**Refinancing tool capacity (2026)**:

| Channel | Estimated capacity (USDbn equiv.) | Notes |
|---|---|---|
| Dim sum (LGFV portion) | 1.5–2.5 | Mostly AA+/AAA provincial platforms; key-province county names mostly excluded |
| USD bond roll-over | 4.0–5.5 | NDRC pass-rate ~55–65% on weak-credit submissions |
| FTZ / Pearl bonds | 1.5–2.5 | Limited offshore participation; mostly absorbed by onshore-bank HK branches |
| Keepwell + SBLC | 1.0–1.5 | Consumes onshore bank credit lines; sized by bank risk appetite |
| **Total capacity** | **8.0–12.0** | |
| **2026 weak-LGFV maturities** | **8.2–9.9** | |
| **Gap** | **0–2 (base), 3–4 (bear)** | Residual covered by onshore mobilization / AMC / extensions |

**Take-away**: in the base case, the tool stack covers 90–110% of weak-LGFV maturities — but **any single tool failure (e.g. SBLC credit lines tightening, or NDRC pass-rate dropping below 50%) opens a USD 2–4bn hard gap almost immediately**.

---

## 4. Dim Sum Market — Diagnosis of Absorption Capacity

1. **Stock & liquidity**: CNH pool ~CNH 1.0–1.1tn (HKMA); dim sum stock ~CNH 1.5–1.8tn equivalent. Market-making depth is better than 5y ago, but **LGFV secondary daily turnover < CNH 200mn**, an order of magnitude thinner than offshore USD LGFVs.
2. **Buyer base**: offshore Chinese bank proprietary (~40%), insurance / AM (~25%), RQFII / northbound-channel indirect (~15%), other incl. central-SOE treasuries. **Risk appetite for key-province county LGFVs has not opened up.**
3. **2024–2025 primary characteristics**: LGFV dim sum coupons cluster at 4.5–6.5%, 1–3y tenor; **near-zero primary issuance from key-province prefecture / county platforms**. The issuer mix remains dominated by strong Jiangsu / Zhejiang / Shandong / Fujian names.
4. **Price signal**: weak-LGFV vs AAA central-SOE dim sum spread has widened from 200–280bp in 2023 to 350–500bp in 2025 — the market has already priced in "can't absorb".
5. **Policy tailwinds**: Southbound Connect expansion and Swap Connect refinement add CNH liquidity, but **transmit almost nothing to credit migration down** — eligible-investment rules still gate LGFVs by rating / region.

**View**: dim sum can provide at most USD 1.5–2.5bn equivalent of capacity to weak LGFVs in 2026 (a modest step up from 2025) — **far from a primary substitute channel**.

---

## 5. Recommendations for Credit Analyst · Spread Monitor

1. **Watch the NDRC monthly registration pass-list** (publicly disclosed). Compute pass-rate for key-province prefecture/county LGFVs; if pass-rate stays below 55% for two consecutive months, trigger an onshore-spread alert on the same issuers.
2. **Build a dual-track "weak-LGFV USD vs dim sum" watchlist** — propose 30–40 sample bonds (key-province county platforms, 1–3y USD/CNH), tracking OAS vs onshore MTN spreads (co-movement vs divergence).
3. **Keepwell + SBLC exposure**: estimate quarterly SBLC outstandings at the big-4 / JSCBs; treat as the "last-resort liquidity" gauge for offshore repayment.
4. **Onshore spillover**: if a key-province LGFV technical default or major extension emerges offshore, expect a **+30–50bp impulse on onshore 1y AA(2) LGFV spreads, +40–70bp on 3y**. Recommend trimming portfolio duration to 1.5–2.0y in advance.
5. **Data fields to verify (next step — pull from Bloomberg / Wind / DM)**:
   - 2026/2027 China LGFV offshore monthly maturities by issuer rating & province;
   - 2024–2026 dim sum LGFV primary issuer list;
   - NDRC monthly pass vs fail counts (weak-credit cohort);
   - Offshore SBLC outstandings (quarterly bank disclosure);
   - Onshore vs offshore spread time series for weak LGFVs.

---

## 6. Caveats

- This response was produced without live Bloomberg / Wind / DM access. All stock, maturity, and spread figures are interval estimates and **must be verified against a primary data source before any execution decision**.
- The regulatory regime is still evolving (the 2026 continuation of the "package" resolution plan). Further offshore-specific rules from State Council / NDRC / MoF remain a key variable to monitor.
- The workspace was empty at the start of this step — no upstream-analyst attachments were available. This response is based on independent research at this step.

---

## 7. Follow-ups (pending Credit Analyst confirmation)

- [ ] Should the scope be narrowed to specific provinces (e.g. Tianjin / Guizhou / Yunnan)?
- [ ] Should the sample be extended to weak platforms outside the 12 key provinces (e.g. northeast counties)?
- [ ] Do you want a regression of onshore MTN / PPN spreads against offshore bond yields (suggest 2y rolling)?

### 2. Mailbox · 债券分析师 · [auto-handoff] 城投离岸债监管影响

# 弱资质城投海外债到期回购与再融资压力评估

**回应工作流**：信用分析师 · 利差监控（run 78dd7386-eca4-46c2-9749-08f03e479c44）
**分析师**：债券分析师（利率/信用/久期）
**截止日期**：2026-05-11
**说明**：本次回应未收到上游附件（workspace 为空，仅有 `.git`）。结论基于公开监管文件框架与本人对中资离岸债存量结构的研判，关键存量/到期数字以区间形式给出，并标注后续需 Bloomberg/Wind 复核的字段。

---

## 一、核心结论（优先级排序）

1. **再融资通道实质性收窄，但不是"断点"，而是"漏斗"。** 35 号文 + 47 号文 + 134 号文 + NDRC 56 号令构成的组合拳，使 12 个重点省份的弱资质城投在 2024–2026 年到期窗口内基本只能"借新还旧、不得净融资"，并且 NDRC 备案的口径已从"额度审批"转为"实质审查"，对募集用途、担保结构、维好/SBLC 增信链路的审查时长显著拉长（个案备案 4–6 个月已成常态）。结果是**展期可行、净增量基本被关闭**。

2. **2025H2–2026H2 是境外到期峰值，弱资质城投承压最集中。** 中资城投美元债 + 点心债存量约 USD 95–110bn 等值，其中 2026 全年到期估计 USD 28–34bn，弱资质（隐含评级 AA- 及以下、或重点省份地市级/区县级平台）占比约 25–32%。**真正难再融资的"硬骨头"集中在天津、贵州、云南、广西、甘肃、青海地市/区县平台**，单只规模 USD 100–300mn 居多，账面 cash + 母集团调度能力是关键缓冲。

3. **点心债的"承接能力"被高估——它能接增量发行人，但接不动弱资质城投的存量到期。** 2024–2025 年点心债年发行量虽已突破 CNH 1,000bn（含金融、主权类、央企），但 **LGFV 占比长期 < 8%**；且买方以离岸中资银行 + 在港保险 + RQFII 通道资管为主，**对重点省份区县平台的风险偏好并未明显放宽**。CNH 资金池虽然充裕（HKMA 数据约 CNH 1.0–1.1tn），但**定价端要求的信用溢价（弱资质 LGFV 较同期限 AAA 央企利差 350–500bp）足以让大部分弱平台被动放弃**。

4. **替代路径正在重定价，而非消失。** 自贸区债（FTZ "明珠债"）、维好+SBLC 双增信结构、境内城投 ABS/REITs 反向滋养境外偿付，是当前主要"非标式接续"工具。这些路径的总承接量估计 2026 年仅 USD 8–12bn 等值，**仅能覆盖弱资质城投到期量的 30–45%**，剩余缺口必须靠**境内母集团/省级统借统还/AMC 接续/展期协商**完成。

5. **风险时点**：2026 年 9 月–12 月是观察窗口。若届时 NDRC 备案通过率（弱资质城投口径）继续低于 60%，且点心债弱资质 LGFV 一级冷淡（发行后破发幅度 > 200bp），则会触发**境外二级市场 1–3 年期弱资质城投美元债收益率向 12–15% 区域定价**的再校准，并向境内城投债利差传导（预计带动境内同主体中票利差走阔 30–50bp）。

---

## 二、监管框架——压力来源拆解

| 文件 | 时间 | 关键内容 | 对弱资质城投离岸债的影响 |
|---|---|---|---|
| 国办发 35 号文 | 2023-07 | 划定 12 个"重点省份"，严控新增隐债与城投融资 | 重点省份平台境外新增融资原则上停止，仅允许借新还旧 |
| NDRC 第 56 号令 | 2023-02 生效 | 企业中长期外债审核登记管理办法 | 备案从核准制走向实质审查，募集用途/担保链路必须前置披露 |
| 财预 47 号文 | 2024 | 化债重点省份非标/高息整改 | 境外高息（YTM > 7%）品种新发受限，存量需启动协商化解 |
| 134 号文 | 2024 | 完善地方债务统借统还、风险隔离 | 省级平台可统筹偿付，但弱区县平台被"剥离" |
| 14 号文 / 配套通知 | 2025 | 化债"一揽子"延续，AMC 介入扩容 | 提供展期/置换路径，但成本端利差仍维持高位 |

**关键判读**：监管并未禁止离岸再融资，而是把**"谁能发、发多少、用在哪"**的口径收紧。对弱资质城投的实际效果是：
- 借新还旧规模 ≤ 到期规模（净融资归零或为负）；
- 募集款项原币回流路径受限；
- 维好协议项下境内主体担保被穿透审查。

---

## 三、到期墙与缺口测算（指示性）

| 期间 | 中资城投离岸债到期估算 (USD bn) | 其中弱资质占比 | 弱资质到期 (USD bn) |
|---|---|---|---|
| 2026H1 | 14–17 | 28% | 4.0–4.8 |
| 2026H2 | 14–17 | 30% | 4.2–5.1 |
| 2027 全年 | 22–26 | 25% | 5.5–6.5 |

**对应再融资工具承接力（2026 年）**：

| 工具 | 估计承接量 (USD bn 等值) | 备注 |
|---|---|---|
| 点心债 (LGFV 部分) | 1.5–2.5 | 主要面向 AA+/AAA 省级平台，重点省份区县基本无门 |
| 美元债借新还旧 | 4.0–5.5 | NDRC 备案通过率约 55–65%（弱资质口径） |
| 自贸区/明珠债 | 1.5–2.5 | 离岸投资者参与受限，更多为境内银行海外分行承接 |
| 维好 + SBLC | 1.0–1.5 | 银行 SBLC 占用授信，规模受银行风险偏好约束 |
| **承接合计** | **8.0–12.0** | |
| **2026 弱资质到期** | **8.2–9.9** | |
| **缺口** | **0–2 (基准)，悲观情形 3–4** | 缺口须靠境内调度/AMC/展期补齐 |

**结论**：基准情形下，工具组合可覆盖 90–110% 弱资质到期，但**任何一个工具失灵（如 SBLC 银行授信收紧或 NDRC 备案通过率掉到 50% 以下）都会瞬间出现 USD 2–4bn 的硬缺口**。

---

## 四、点心债市场承接能力——具体诊断

1. **存量与流动性**：CNH 资金池约 CNH 1.0–1.1tn（HKMA 口径），点心债存量约 CNH 1.5–1.8tn 等值；做市深度优于五年前，但 **LGFV 板块二级日均成交 < CNH 200mn**，比美元债离岸板块流动性差一个数量级。
2. **买方结构**：离岸中资银行自营（~40%）、保险/资管（~25%）、RQFII/北向通道间接持有（~15%）、其他（含央企财资）。**对重点省份区县城投的风险偏好实质未打开**。
3. **一级发行特征 2024–2025**：LGFV 点心债票面集中在 4.5–6.5%，期限 1–3 年；**重点省份地市/区县平台一级几乎零发行**，发行人主体仍以江浙、山东、福建强资质平台为主。
4. **价格信号**：弱资质 LGFV 同期限 vs AAA 央企点心债利差从 2023 年的 200–280bp 走阔到 2025 年的 350–500bp，说明定价端已经把"接不动"反映出来。
5. **政策窗口**：南向通扩容 + "互换通"细化对 CNH 流动性是正面增量，但对**信用下沉**几乎无传导，原因是合格投资范围对城投仍有评级/区域门槛。

**判断**：点心债在 2026 年最多能为弱资质城投提供 USD 1.5–2.5bn 等值的承接力（小幅高于 2025 年），**远不足以构成主力替代渠道**。

---

## 五、给信用分析师 · 利差监控的具体建议

1. **盯紧 NDRC 月度备案通过名单**（公开披露），统计重点省份地市级/区县级 LGFV 通过率；通过率连续 2 个月 < 55% 即应触发境内同主体利差告警。
2. **构建"弱资质 LGFV 美元债-点心债"双轨观察组**：建议追踪 30–40 只样本券（重点省份区县平台 USD/CNH 1–3 年期），监测 OAS 与境内中票利差的同向/背离。
3. **维好+SBLC 结构暴露**：对国有大行/股份行 SBLC 余额做季度估算，作为离岸偿付的"最后流动性"指标。
4. **境内反向传导**：若离岸出现单只重点省份城投技术性违约或大幅展期，预判**境内 1Y AA(2) 城投利差 +30~50bp、3Y +40~70bp** 的脉冲，建议提前调整组合久期至 1.5–2.0 年防御。
5. **数据需复核字段**（建议下一步从 Bloomberg/Wind/DM 拉取）：
   - 2026/2027 中资城投离岸债逐月到期明细（按主体评级、省份）；
   - 2024–2026 点心债 LGFV 一级发行人列表；
   - NDRC 月度备案通过 vs 未通过家数（弱资质口径）；
   - 离岸银行 SBLC 余额季报；
   - 弱资质 LGFV 离岸 vs 在岸利差时间序列。

---

## 六、不确定性与免责

- 本回应未接入 Bloomberg/Wind/DM 实时数据；存量、到期、利差均为区间估算，**所有具体数字需在执行决策前用一级数据源复核**。
- 监管政策仍在演化中（2026 年化债"一揽子"延续），后续是否出台进一步针对离岸债的细则是关键变量，建议持续跟踪国办、NDRC、财政部官方发布。
- 工作目录初始为空，未发现上游分析师的附件文件；本回应基于本步骤独立调研产出。

---

## 七、Follow-up（待信用分析师确认）

- [ ] 是否需要把分析口径限定到具体若干省份（如天津/贵州/云南）？
- [ ] 是否需要把样本券扩展到非 12 重点省份的弱资质平台（如东北区县）？
- [ ] 是否需要补充境内中票/PPN 利差与离岸债的相关性回归（建议 2y rolling）？

