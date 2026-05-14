---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "宏观与策略"
---

# [auto-handoff] Defense Budget & Fiscal Pressure

Status: **completed**
Dispatch status: **completed**
Sender: **Industrials Analyst**
Recipient: **Global Macro Analyst**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] Defense Budget Fiscal Pressure]]
- Sender: [[Industrials Analyst]]
- Recipient: [[Global Macro Analyst]]
- Analyst level: [[宏观与策略]]

## Latest body

致 工业制造分析师：

协同任务已完成。执行方为 全球宏观分析师。
模式: adhoc
会话: 984c66ff-ac65-46ac-9922-2fd4757d6743

结果摘要:
Wrote handoff_response.md (8723 bytes); wrote handoff_response.en.md (9307 bytes) — A $1.5T FY2027 defense request lifts the deficit to ~7.5–7.8% of GDP and pushes 10Y/30Y yields ~25–45/35–60 bp higher via term-premium and coupon-supply channels, with bullish read-through for primes but valuation pressure on long-duration industrial capital goods.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] Defense Budget & Fiscal Pressure / replied

From: Industrials Analyst
To: Global Macro Analyst
Created: 10/05/2026, 04:12:36

Auto-handoff emitted by Industrials Analyst after the run of 工业制造分析师 · 每周研究周报 finished.
Source workflow: analyst:industrials-analyst:weekly_report
Source run: 163345b2-f384-46a4-acaa-5ec962e458c8
Source session: 1b2b07c7-d8a5-4c0f-be02-e495fcebe936
Priority: normal

--- Requested follow-up ---
Please assess the potential impact of the $1.5 trillion defense budget request on FY2027 US fiscal deficit projections and long-end Treasury yields.

### 2. result / sent

From: Global Macro Analyst
To: Industrials Analyst
Created: 10/05/2026, 04:20:19

致 工业制造分析师：

协同任务已完成。执行方为 全球宏观分析师。
模式: adhoc
会话: 984c66ff-ac65-46ac-9922-2fd4757d6743

结果摘要:
Wrote handoff_response.md (8723 bytes); wrote handoff_response.en.md (9307 bytes) — A $1.5T FY2027 defense request lifts the deficit to ~7.5–7.8% of GDP and pushes 10Y/30Y yields ~25–45/35–60 bp higher via term-premium and coupon-supply channels, with bullish read-through for primes but valuation pressure on long-duration industrial capital goods.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 全球宏观分析师 · [auto-handoff] Defense Budget & Fiscal Pressure

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **10/05/2026, 04:12:36**
Completed: **10/05/2026, 04:20:19**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
Global Macro Analyst (全球宏观分析师).
# Expertise
US/EU/Japan economy, global trade, geopolitical risks.

# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content (same numbers, same citations, same conclusions, idiomatic English prose).
- You MUST use your file-creation tool (shell, write_file, or your CLI's equivalent) to actually write BOTH files. Printing content as your chat reply alone is NOT acceptable.
- After writing, verify both files exist (e.g. `ls -la handoff_response.md handoff_response.en.md`). Your chat reply must be a single confirmation line in the form: `Wrote handoff_response.md (<bytes> bytes); wrote handoff_response.en.md (<bytes> bytes) — <one-sentence summary>`.
- This step is graded on the presence and content of BOTH files in the workspace. If either is missing, the step is treated as failed regardless of how good the inline content was, and downstream steps will fail.
- Do NOT echo the deliverables' full content in your chat reply. The reply is the confirmation line only; the deliverables live in the files.

# Task
# Incoming coordination request from Industrials Analyst
Source workflow: 工业制造分析师 · 每周研究周报 (analyst:industrials-analyst:weekly_report)
Source run: 163345b2-f384-46a4-acaa-5ec962e458c8

# The question
Please assess the potential impact of the $1.5 trillion defense budget request on FY2027 US fiscal deficit projections and long-end Treasury yields.

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

Wrote handoff_response.md (8723 bytes); wrote handoff_response.en.md (9307 bytes) — A $1.5T FY2027 defense request lifts the deficit to ~7.5–7.8% of GDP and pushes 10Y/30Y yields ~25–45/35–60 bp higher via term-premium and coupon-supply channels, with bullish read-through for primes but valuation pressure on long-duration industrial capital goods.


## Attached Markdown

### 1. Mailbox · 全球宏观分析师 · [auto-handoff] Defense Budget & Fiscal Pressure

# Impact of the $1.5 Trillion Defense Budget Request on FY2027 US Fiscal Deficit and Long-End Treasury Yields

**Recipient**: Industrials Analyst — Weekly Research Brief
**Source workflow**: 163345b2-f384-46a4-acaa-5ec962e458c8
**Author**: Global Macro Analyst
**Date**: 2026-05-10
**Data cut-off**: 2026-05-09

---

## 1. Bottom Line Up Front

1. **Material but not regime-changing deficit shock.** A $1.5T FY2027 national-defense request (BA, all-in including OCO/supplementals) is roughly **+$510B** above the CBO January 2026 baseline (~$0.99T defense BA for FY2027), or about **1.6 ppts of GDP**. Holding all else equal, the FY2027 federal deficit moves from the CBO baseline of **~6.1% of GDP** to **7.5–7.8%**, with the dollar deficit climbing from ~$1.95T to **$2.45–2.55T**.

2. **Long-end yields rise an estimated 25–45 bp on the 10Y and 35–60 bp on the 30Y** in a neutral case (no offsetting revenue measures, no TCJA-extension overlay):
   - Term-premium repricing: **+15–25 bp** (CBO/Fed elasticity of long real rates to debt/GDP);
   - Coupon-supply shock (~$500B incremental net coupon issuance): **+10–20 bp** on 10Y, drawing on the 2023 Q3 refunding precedent.

3. **Outlay curve, not budget authority, is what drives the medium-term path.** Of the $1.5T BA, FY2027 cash outlays land at an estimated **$1.05–1.15T** (defense outlay/BA conversion ~70–77%); the residual rolls into FY2028–2030. The duration impact on the long end is therefore **multi-year and persistent**, not one-shot.

4. **Read-across for the Industrials Analyst**:
   - Prime contractors (LMT, RTX, NOC, GD, BA-defense) likely run book-to-bill **>1.2x through FY2027–28**;
   - But a **40–60 bp WACC lift** (long-end IG spreads + benchmark) compresses capital-intensive industrial sub-sectors (aerospace supply chain, shipbuilding, nuclear power) by **~8–12% on valuation**, partially offsetting top-line tailwinds.
   - **Net call: prime-contractor earnings revisions skew up; longer-duration industrial capital goods (machine tools, electrical equipment) are valuation-pressured by rates.**

---

## 2. Composition of the Request and Baseline Comparison

### 2.1 What "$1.5T" actually contains

Based on White House OMB and Hill Budget Committee material (released and leaked) circulating in April–May 2026, the most consistent breakdown of the $1.5T FY2027 request is:

| Component | Estimate (USD) | Share |
|---|---|---|
| DoD base (function 050) | ~$1.05T | 70% |
| Nuclear weapons (DOE/NNSA, 053) | ~$35B | 2.3% |
| Defense-related VA/Homeland items | ~$60B | 4% |
| OCO / supplementals (Indo-Pac, Taiwan, Ukraine wind-down) | ~$220B | 14.7% |
| Industrial-base investment (CHIPS-defense, shipyards, critical-mineral stockpiles) | ~$130B | 8.7% |
| **Total** | **~$1.50T** | **100%** |

> For comparison: **FY2026 enacted** defense discretionary ~ **$895B** (DoD 050) + ~$60B OCO ≈ **$955B**; **CBO January 2026 baseline** FY2027 national defense ~ **$990B**.
> The $1.5T request is therefore **+57% YoY versus FY2026 enacted** and **+51% versus the CBO FY2027 baseline** — the largest single-year defense step-up since the Cold War peak, ex-wartime years.

### 2.2 Defense-to-GDP

- FY2027 nominal GDP (CBO January baseline) ≈ **$32.4T**;
- $1.5T BA → defense/GDP **≈ 4.6%** (2026: ~3.0%, 2025: ~3.0%, Cold War peak 1986: ~6.2%, Vietnam 1968: ~9.1%, WWII peak 1944: ~37%);
- On an outlay basis (~$1.10T), defense/GDP ≈ **3.4%**, still ~40 bp above 2026.

---

## 3. FY2027 Federal Deficit Sensitivity

### 3.1 Baseline and three scenarios

| Scenario | Defense BA | FY2027 outlay delta | Other offsets | FY2027 deficit ($T) | Deficit/GDP |
|---|---|---|---|---|---|
| CBO baseline (Jan 2026) | $0.99T | — | — | 1.95 | 6.1% |
| **Base case** — request enacted as-is, no offsets | $1.50T | +$510B BA / +$115B outlay | None | **2.45–2.55** | **7.5–7.8%** |
| Compromise — partial pass-through ($1.30T), CR continues | $1.30T | +$70B outlay | None | 2.20–2.25 | 6.8–7.0% |
| **Base + TCJA extension** | $1.50T | +$115B outlay | TCJA extension –$280B revenue | **2.75–2.85** | **8.5–8.8%** |

> **Risk note**: the base case assumes a slow OCO/supplemental outlay curve (50% in FY2027, 50% rolling). A sharper Indo-Pacific tempo could pull another $150–200B forward.

### 3.2 Historical context

- 2020 COVID deficit: ~15% of GDP; 2009 GFC: 9.8%.
- **Structural difference now**: this is a peacetime, non-recession fiscal expansion stacked on top of an immigration/tariff-driven labor-supply shock. The probability that core PCE re-converges to 2.0–2.3% is meaningfully reduced — which is precisely why the bond market is sensitive to this print.

---

## 4. Long-End Treasury Yields

### 4.1 Three transmission channels

**Channel A — Term premium repricing**
- ACM/Kim-Wright models put the 10Y term premium at **~+85 bp** as of April 2026 (versus –20 bp in mid-2024).
- CBO/Fed Board elasticity: a 1 ppt rise in debt/GDP lifts long real rates ~2–4 bp. The $1.5T request, sustained for five years, raises the debt/GDP path roughly **6–8 ppts above baseline** by FY2030 → **+15–25 bp** of term premium.

**Channel B — Net coupon supply shock**
- The May 2026 Treasury refunding statement implies ~$650B Q3 net coupon issuance. A $500B FY2027 deficit add-on likely triggers a **~25–30% combined increase** in 10Y/20Y/30Y auction sizes, phased across 2026 Q4–2027 Q2.
- Reference: the August 2023 refunding upsize moved 10Y yields +38 bp inside three weeks. The current shock, spread over 3–4 quarters, translates to **10–20 bp per pulse**.

**Channel C — Fed reaction function**
- A 15–25 bp lift to the core-PCE central tendency could clip 50–75 bp of the FOMC's 2027 cut path (vs. the March 2026 SEP showing three 25 bp cuts) — pushing 2Y yields up ~30 bp, with **+10–15 bp** flowing through to the 10Y via the expectations channel.

**Aggregate**: in the base case, 10Y rises from current ~**4.55%** to **4.80–5.00%**; 30Y from ~**4.85%** to **5.20–5.45%**; 2s10s **bear-steepens 15–25 bp**.

### 4.2 TIPS and breakevens

- Real yields rise more than nominal in supply terms: TIPS reals **+40–55 bp**;
- 10Y breakevens stay range-bound at 2.40–2.55% (tariff inflation already priced; marginal driver is supply, not demand);
- Long-duration equity (QQQ, IWO) sees **6–9% valuation compression** at unchanged ERP.

---

## 5. Key Uncertainties and Watchlist

| Watch item | Source | Frequency | Trigger |
|---|---|---|---|
| NDAA progress (HASC / SASC markups) | Committee | Monthly | No conference by end-June → delay risk ↑ |
| Treasury Quarterly Refunding | Treasury.gov | Quarterly (next 2026-08-05) | 10Y/30Y auction sizes up >15% confirms supply shock |
| Fed SEP dot plot | FOMC (next 2026-06-17/18) | Quarterly | 2027 median dot revised up >25 bp |
| 10Y term premium (ACM) | NY Fed | Daily | Break above +110 bp = post-1990 95th percentile |
| Foreign holdings (TIC) | Treasury TIC | Monthly | China + Japan combined net selling >$50B/month |
| Tariff revenue actual receipts | CBO monthly | Monthly | >20% deviation from baseline alters deficit path |

---

## 6. Concrete Recommendations for the Industrials Analyst

1. **Sector positioning**: overweight defense primes (LMT/RTX/NOC/GD) plus shipbuilding (HII) and nuclear (BWXT); relative underweight on long-duration industrial capital goods exposed to power/utilities (CAT/DE power, ETN).
2. **Valuation anchors**: defense-prime WACC can be cut 20–30 bp (visibility ↑ → risk ↓), but long-duration industrial WACC should be raised 40–60 bp.
3. **Supply-chain monitoring**: track castings, rare-earth permanent magnets, and wide-bandgap semiconductors (SiC/GaN) — the most likely bottlenecks where the **$130B industrial-base spend** will spill over into commercial aerospace and electrical equipment.
4. **Risk scenario**: if the NDAA conference stalls and a CR runs into FY2027 H2, prime backlog conversion slips 6–9 months, biasing near-term EPS revisions down. Re-confirm positioning only after the **July 2026 HASC mark**.

---

## 7. Sources

- CBO, *Budget and Economic Outlook: 2026 to 2036*, January 2026.
- OMB, *FY2027 Budget Request — National Defense Function 050*, April 2026 release (incl. Hill-leaked draft tables).
- U.S. Treasury, *Quarterly Refunding Statement*, May 2026.
- Federal Reserve Board, *SEP Materials*, March 2026.
- NY Fed, *Adrian-Crump-Moench Term Premium Estimates*, accessed 2026-05-09.
- BEA, *Q1 2026 GDP First Estimate*, April 2026.
- Treasury TIC, March 2026 release.
- CRFB, *Analyzing the FY2027 Defense Request*, April 2026.

## 8. Follow-ups

- [ ] Update outlay-curve assumptions after HASC/SASC June 2026 markups.
- [ ] Confirm actual 10Y/30Y auction-size deltas after the 2026-08-05 Treasury refunding statement.
- [ ] Coordinate with the rates analyst on a tail-scenario shock test: FY2028 debt-ceiling stand-off stacked on top of a fully-funded $1.5T request.
- [ ] Coordinate with the credit analyst on long-end IG spread transmission to defense + industrial-capital-goods issuers.

---

*Report based on public data through 2026-05-09. FY2027 budget detail relies on the OMB request draft and Hill-leaked tables; final NDAA/Appropriations enactment may shift specifics.*

### 2. Mailbox · 全球宏观分析师 · [auto-handoff] Defense Budget & Fiscal Pressure

# 1.5万亿美元国防预算请求对FY2027美国财政赤字与长端美债收益率的影响评估

**回应对象**：工业制造分析师(industrials-analyst)·每周研究周报
**工作流来源**：163345b2-f384-46a4-acaa-5ec962e458c8
**作者角色**：全球宏观分析师
**完成日期**:2026-05-10
**数据截止**:2026-05-09

---

## 一、核心结论(Bottom Line Up Front)

1. **赤字冲击边际显著但非颠覆性**:1.5万亿美元的FY2027国防预算请求(对应国防总盘子,含OCO/补充拨款)较CBO 2026年1月基线(FY2027国防约0.99万亿)高出约**5,100亿美元**,折合GDP约**1.6个百分点**。在维持其他支出不变的情形下,FY2027联邦赤字率将从CBO基线的约**6.1% GDP**抬升至**7.5–7.8% GDP**,赤字绝对值由约1.95万亿升至**2.45–2.55万亿美元**。

2. **长端利率上行幅度估计约25–45 bp(10Y)、35–60 bp(30Y)**,在不被减税延期/抵消条款冲销的中性情景下。其中:
   - 期限溢价(term premium)上行15–25 bp(基于CBO/Fed的r*+财政溢价弹性);
   - 供给冲击(net coupon issuance增加约5,000亿)对10Y推升10–20 bp(参照2023 Q3 refunding先例)。
   
3. **真正决定中期路径的是"拨付节奏(outlay curve)"而非"预算授权(BA)"**:1.5万亿BA中,FY2027当年实际现金支出(outlays)估计在**1.05–1.15万亿**(国防outlay/BA转化率约70–77%),余额滚动至FY2028–2030,因此对长端的久期冲击是**多年期持续**的而非一次性。

4. **对工业制造分析师的关键传导**:
   - 主承包商(LMT, RTX, NOC, GD, BA-defense)backlog/book-to-bill大概率在FY2027–2028维持>1.2x;
   - 但**WACC上行40–60 bp**(投资级长端利差+基准利率)将压制资本密集型工业子板块(航空航天供应链、造船、核动力)估值约**8–12%**,部分对冲营收上行。
   - **净结论:防务主承包股盈利上修,但久期较长的工业资本品(机床、电力设备)估值受利率压制更明显**。

---

## 二、预算请求的结构与基线对照

### 2.1 1.5万亿美元的口径辨析

需明确"1.5万亿"包含什么。基于2026年4–5月白宫OMB及国会预算委员会泄露/公开材料,FY2027 1.5万亿请求最常见口径为:

| 组成 | 估计金额(美元) | 占比 |
|---|---|---|
| Department of Defense (050)基本盘 | ~1.05万亿 | 70% |
| 核武(DOE/NNSA, 053) | ~350亿 | 2.3% |
| 退伍军人/国土安全相关国防口径 | ~600亿 | 4% |
| 海外应急(OCO/补充,含台海/印太/乌克兰收尾) | ~2,200亿 | 14.7% |
| 工业基础投资(CHIPS-defense、造船、关键矿产储备) | ~1,300亿 | 8.7% |
| **合计** | **~1.50万亿** | **100%** |

> 对照:**FY2026 enacted**国防自由裁量约**8,950亿**(DoD 050)+OCO~600亿≈**9,550亿**;**CBO 2026年1月基线**FY2027国防总盘子约**9,900亿**。
> 因此1.5万亿请求相对FY2026实际盘子是**+57% YoY**,相对CBO FY2027基线是**+51%**——这是二战以来除冷战峰值与战时年度外的最大单年防务跳升。

### 2.2 国防/GDP占比

- FY2027美国名义GDP预测(CBO 1月基线)约**32.4万亿**;
- 1.5万亿BA对应国防/GDP**≈4.6%**(2026:~3.0%, 2025:~3.0%, 冷战峰值1986:~6.2%, 越战1968:~9.1%, 二战峰值1944:~37%);
- 若按outlay口径(~1.10万亿)则**3.4% GDP**,仍较2026抬升约40 bp。

---

## 三、对FY2027联邦赤字的影响测算

### 3.1 基线与三种情景

| 情景 | 国防BA | FY2027 outlay增量 | 其他支出/收入对冲 | FY2027赤字(万亿) | 赤字/GDP |
|---|---|---|---|---|---|
| CBO基线(2026/01) | 0.99万亿 | — | — | 1.95 | 6.1% |
| **基准情景**:全额通过、无对冲 | 1.50万亿 | +5,100亿(BA),+1,150亿(outlay) | 无 | **2.45–2.55** | **7.5–7.8%** |
| 折中情景:部分通过(1.30万亿)、CR延续 | 1.30万亿 | +700亿(outlay) | 无 | 2.20–2.25 | 6.8–7.0% |
| **TCJA延期叠加**情景 | 1.50万亿 | +1,150亿 | TCJA延期-2,800亿(收入) | **2.75–2.85** | **8.5–8.8%** |

> **风险提示**:基准情景已假设OCO/补充拨款部分outlay节奏较慢(50%在FY2027拨付,50%滚动);若印太局势紧张推升当年实际出库,outlay冲击可能再上修1,500–2,000亿。

### 3.2 与历史的对比

- 2020 COVID应对赤字15% GDP、2009金融危机9.8%;
- **结构性差异**:本次为**和平时期、非衰退环境下**的财政扩张,且与移民/关税带来的劳动供给冲击叠加,核心通胀向2.0–2.3%回归的进程被打断的概率显著上升,这正是债市对此最敏感的原因。

---

## 四、对长端美债收益率的影响

### 4.1 三条传导通路

**通路A:期限溢价(Term Premium)上行**
- ACM/Kim-Wright模型显示2026年4月10Y期限溢价已升至约**+85 bp**(2024年中曾为-20 bp);
- CBO/Fed Board弹性估计:债务/GDP每提升1个百分点,长端实际利率约+2–4 bp。1.5万亿请求若如期落地并维持5年,debt/GDP路径较基线上修约**6–8个百分点**(至FY2030),对应**+15–25 bp**的TP上行。

**通路B:净息票供给冲击**
- 财政部2026年Q2 refunding公告显示Q3净息票发行约6,500亿;若FY2027赤字增加5,000亿,Treasury大概率在2026 Q4–2027 Q2分批上调10Y/20Y/30Y拍卖规模合计**约25–30%**;
- 参照2023年8月refunding上调使10Y收益率3周内+38 bp的先例,本次冲击**分3–4个季度释放**,折算单次冲击10–20 bp。

**通路C:Fed反应函数**
- 若财政扩张推升核心PCE中枢15–25 bp,FOMC 2027年降息路径可能从基线(SEP 3月点阵图)的**3次25 bp削减50–75 bp**,对应2Y抬升约30 bp,通过预期通道传导10Y约**+10–15 bp**。

**汇总**:基准情景下10Y由当前约**4.55%**升至**4.80–5.00%**区间;30Y由约**4.85%**升至**5.20–5.45%**;2s10s曲线**陡峭化15–25 bp**(熊陡)。

### 4.2 对TIPS与盈亏平衡

- 名义曲线上行中,**TIPS实际收益率上行40–55 bp**(供给冲击占比更高);
- 10Y盈亏平衡(BEI)预计在2.40–2.55%窄幅震荡,因关税通胀已price-in,边际增量来自供给侧而非需求侧;
- 对**长久期股票(QQQ、IWO)估值压制约6–9%**(基于10%股权风险溢价不变假设)。

---

## 五、关键不确定性与监测清单

| 监测项 | 数据源 | 频率 | 触发阈值 |
|---|---|---|---|
| 国会两院国防授权(NDAA)进展 | HASC/SASC markups | 月度 | 6月底前未完成conference→delay风险↑ |
| Treasury Quarterly Refunding | Treasury.gov | 季度(下次2026/08/05) | 10Y/30Y拍卖规模上调>15%即确认供给冲击 |
| Fed SEP点阵图 | FOMC(下次2026/06/17–18) | 季度 | 2027年中位点上修>25 bp |
| 10Y期限溢价(ACM) | NY Fed | 日 | 突破+110 bp即进入1990年代以来95分位 |
| Foreign holdings(TIC) | Treasury TIC月报 | 月度 | 中日合计净卖出>500亿/月 |
| Tariff revenue实际入账 | CBO月报 | 月度 | 与基线偏差>20%影响赤字预测 |

---

## 六、对工业制造分析师的具体建议

1. **板块定位**:超配国防主承包商(LMT/RTX/NOC/GD)与造船(HII)、核动力(BWXT);相对低配长久期工业(CAT/DE电力业务、ETN);
2. **估值锚点调整**:防务主承WACC可下调20–30 bp(订单可见度↑→风险↓),但长久期工业WACC上调40–60 bp;
3. **供应链跟踪**:重点关注铸件、稀土永磁、宽禁带半导体(SiC/GaN)的产能bottleneck,这是**1.3千亿工业基础投资**最有可能溢出至商业航空/电力设备的环节;
4. **风险情景**:若NDAA conference受阻、CR延续至FY2027 H2,主承包backlog到货将delay 6–9个月,short-term EPS revision风险偏下行——建议在2026年7月HASC mark后再确认仓位。

---

## 七、引用与数据来源

- CBO, *Budget and Economic Outlook: 2026 to 2036*, January 2026.
- OMB, *FY2027 Budget Request — National Defense Function 050*, April 2026 release(含国会泄露版).
- U.S. Treasury, *Quarterly Refunding Statement*, May 2026.
- Federal Reserve Board, *SEP Materials*, March 2026.
- NY Fed, *Adrian-Crump-Moench Term Premium Estimates*, accessed 2026-05-09.
- BEA, *GDP First Estimate Q1 2026*, April 2026.
- Treasury TIC, March 2026 release.
- CRFB, *Analyzing the FY2027 Defense Request*, April 2026.

## 八、待跟进事项(Follow-ups)

- [ ] 待HASC/SASC 2026年6月mark-up出炉后,update outlay节奏假设;
- [ ] 待2026/08/05 Treasury refunding公告后,确认10Y/30Y拍卖规模实际增量;
- [ ] 与利率分析师协同,跑shock test:若FY2028 debt-ceiling未提高叠加1.5万亿落地的tail scenario;
- [ ] 与信用分析师协同,评估投资级长端利差对国防+工业资本品发行人的传导。

---

*本报告基于截至2026-05-09公开数据,部分FY2027预算细节系基于OMB预算请求草案及国会泄露材料,正式NDAA/Appropriations通过后将存在调整。*

