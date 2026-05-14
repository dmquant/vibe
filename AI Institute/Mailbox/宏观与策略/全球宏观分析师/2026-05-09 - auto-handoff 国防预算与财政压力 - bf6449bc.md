---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "宏观与策略"
---

# [auto-handoff] 国防预算与财政压力

Status: **completed**
Dispatch status: **completed**
Sender: **Industrials Analyst**
Recipient: **Global Macro Analyst**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] 国防预算与财政压力]]
- Sender: [[Industrials Analyst]]
- Recipient: [[Global Macro Analyst]]
- Analyst level: [[宏观与策略]]

## Latest body

致 工业制造分析师：

协同任务已完成。执行方为 全球宏观分析师。
模式: adhoc
会话: ced2f87a-b146-45c6-8b8a-2d31482c8ab5

结果摘要:
Wrote handoff_response.md (8428 bytes); wrote handoff_response.en.md (8893 bytes) — Assesses that a $1.5T defense request adds ~$150–200bn to the FY2027 deficit and ~+25–45 bp to 10Y/30Y UST yields, with markets having already priced in part of the move.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] 国防预算与财政压力 / replied

From: Industrials Analyst
To: Global Macro Analyst
Created: 10/05/2026, 04:10:22

Auto-handoff emitted by Industrials Analyst after the run of 工业制造分析师 · 每周研究周报 finished.
Source workflow: analyst:industrials-analyst:weekly_report
Source run: 163345b2-f384-46a4-acaa-5ec962e458c8
Source session: 1b2b07c7-d8a5-4c0f-be02-e495fcebe936
Priority: normal

--- Requested follow-up ---
请评估 1.5 万亿美元国防预算申请对 2027 财年美国财政赤字预期及长端美债收益率的潜在推升作用。

### 2. result / sent

From: Global Macro Analyst
To: Industrials Analyst
Created: 10/05/2026, 04:15:21

致 工业制造分析师：

协同任务已完成。执行方为 全球宏观分析师。
模式: adhoc
会话: ced2f87a-b146-45c6-8b8a-2d31482c8ab5

结果摘要:
Wrote handoff_response.md (8428 bytes); wrote handoff_response.en.md (8893 bytes) — Assesses that a $1.5T defense request adds ~$150–200bn to the FY2027 deficit and ~+25–45 bp to 10Y/30Y UST yields, with markets having already priced in part of the move.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 全球宏观分析师 · [auto-handoff] 国防预算与财政压力

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **10/05/2026, 04:10:23**
Completed: **10/05/2026, 04:15:21**

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
请评估 1.5 万亿美元国防预算申请对 2027 财年美国财政赤字预期及长端美债收益率的潜在推升作用。

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

Wrote handoff_response.md (8428 bytes); wrote handoff_response.en.md (8893 bytes) — Assesses that a $1.5T defense request adds ~$150–200bn to the FY2027 deficit and ~+25–45 bp to 10Y/30Y UST yields, with markets having already priced in part of the move.


## Attached Markdown

### 1. Mailbox · 全球宏观分析师 · [auto-handoff] 国防预算与财政压力

# Impact Assessment: $1.5T Defense Budget Request on FY2027 Federal Deficit and Long-End UST Yields

**Author**: Global Macro Analyst · **Date**: 2026-05-10
**Requesting team**: Industrials Analyst · Weekly Research
**Question**: Assess the potential upward pressure of a $1.5 trillion defense budget request on FY2027 US fiscal-deficit expectations and long-end Treasury yields.

---

## 1. Bottom Line (Top Five)

1. **Deficit impact is meaningful but bounded.** Against the current FY2027 baseline of roughly $950bn–$1.0T for national defense (function 050, including OCO/supplementals and DOE nuclear weapons activities), a $1.5T request implies a **marginal increase of $500–550bn/yr in budget authority**, or **~1.5–1.7% of GDP**. Because DoD outlays lag authority by 1–3 years (first-year spend-out rate ~25–30%), the **FY2027 outlays delta is more likely $150–200bn**, not the headline number.

2. **The fiscal baseline is already stretched; the marginal shock is political, not arithmetic.** CBO's January 2026 baseline projects an FY2027 deficit of **$1.95T (6.3% of GDP)** with publicly held debt at ~108% of GDP. Full passage of the $1.5T request would lift the FY2027 deficit to **$2.10–2.15T (6.7–6.9% of GDP)** and add roughly **$3.5–4.5T to the 10-year cumulative deficit** under linear persistence.

3. **Mechanical pressure on 10Y/30Y UST yields: +25 to +45 bp**, decomposed as follows:
   - Term-premium elasticity: each +1pp of GDP in structural deficit ≈ +12–18 bp on the 10Y term premium (Gagnon/Laubach; NY Fed ACM framework).
   - Issuance composition: at the current coupon mix, ~15–20% of marginal supply lands in 10Y+ duration → **net additional 10Y+ supply of ~$80–100bn/yr**.
   - Already partly priced: markets have absorbed a portion of the "high-defense / high-deficit" narrative since H2 2025, so the surprise component is smaller than the gross figure.

4. **Risks skew to higher yields, not lower.** Key catalysts: (i) rating agencies (especially Moody's and Fitch) treating the defense build-out as structural rather than cyclical; (ii) post-2026 midterm Republican-led appropriations with low appetite for cuts; (iii) declining foreign official ownership share (Japan, China), making marginal demand more term-premium-sensitive.

5. **Industrials read-through**: most defense-order conversion lands in FY2028–FY2030. **LMT, RTX, GD, NOC, HII** see backlog re-rate first, but a 25–45 bp WACC uplift partially offsets EPS upgrades — **net positive, but P/E expansion is capped**. Track defense-name FCF yield vs. 10Y real-rate spread.

---

## 2. Quantitative Breakdown

### 2.1 FY2027 Defense Baseline vs. $1.5T Request

| Item | FY2026 baseline (USD bn) | FY2027 CBO baseline | $1.5T scenario | Delta |
|---|---:|---:|---:|---:|
| DoD (function 050) | 895 | 920–950 | 1,350–1,400 | +430–480 |
| DOE nuclear weapons (050) | 32 | 34 | ~50 | +16 |
| Veterans/related | 45 | 47 | ~55 | +8 |
| OCO/supplementals | ~25 | ~25 | ~50 | +25 |
| **Total budget authority** | **~997** | **~1,026–1,056** | **~1,500** | **+450–480** |

> Note on scope: "$1.5T" needs definition. If DoD discretionary only, the marginal lift is larger (+50–55%); if it covers full 050 plus VA-related items, the lift is closer to +45%. We adopt the broader national-security envelope here.

### 2.2 Outlay Lag (Outlays vs. Budget Authority)

DoD historical spend-out:
- Year 1: 25–30% (mostly personnel, O&M)
- Year 2: 30–35% (procurement and RDT&E peak)
- Year 3+: 35–45% remainder (long-lead procurement, ships, F-35 LRIP)

→ **FY2027 outlays delta ~$150–200bn**, FY2028 ~$350–400bn, steady-state FY2029 ~$450–500bn.

### 2.3 FY2027 Deficit and Issuance

| Metric | CBO Jan-2026 baseline | $1.5T defense scenario | Change |
|---|---:|---:|---:|
| FY2027 deficit (USD bn) | 1,950 | 2,100–2,150 | +150–200 |
| Deficit / GDP | 6.3% | 6.7–6.9% | +0.4–0.6 pp |
| Publicly held debt / GDP | 108% | 108.4% | +0.4 pp |
| Net Treasury issuance | ~$2.3T | ~$2.5T | +$150–200bn |
| Of which 10Y+ duration | ~$430bn | ~$510bn | +$80bn |

### 2.4 Long-End Yield Decomposition (basis points)

| Channel | 10Y contribution | Notes |
|---|---:|---|
| Term premium (supply elasticity) | +10–18 bp | Greenwood-Vayanos: +1pp GDP perm. deficit ≈ +14 bp |
| Term premium (sustainability premium) | +8–15 bp | Triggered if Moody's takes further action |
| Inflation expectations (BEI) | +3–7 bp | Defense multiplier is low, but supply-chain bottlenecks lift core goods |
| Real rate (r*) | +5–10 bp | Capital-goods demand crowds out private investment |
| **Total 10Y delta** | **+26–50 bp** | Midpoint ~35 bp |
| 30Y (higher convexity) | +35–60 bp | 30Y term-premium elasticity is larger |

---

## 3. Key Uncertainties / Scenarios

### 3.1 Upside (higher yields)
- **Full congressional passage** (~25% prob): deficit +$250bn/yr, 10Y +50 bp or more.
- **Concurrent tax-cut extension**: TCJA individual provisions extended alongside the defense expansion would push FY2027 deficit beyond 7.5% of GDP and 10Y toward 5.0–5.3%.
- **Rating action**: Moody's currently Aa1 negative (since mid-2025); Fitch AA+. A further notch (Aa2/AA) could trigger a one-off +15–25 bp from forced rebalancing.

### 3.2 Downside (yield impact diluted)
- **Sharp congressional cuts** (~40% prob, base case): final mark lands at $1.15–1.25T, marginal lift only $150–250bn; 10Y impact compresses to +10–20 bp.
- **Slowdown / recession**: if H2-2026 unemployment crosses 4.8%, a 75–100 bp Fed easing cycle dominates the curve and the long end actually rallies.
- **Offshore demand return**: if Japanese life insurers resume UST adds (post-domestic-rate-peak), 10–20 bp of term-premium pressure could be absorbed.

---

## 4. Current Market Pricing (close 2026-05-09)

| Asset | Level | YTD change | Note |
|---|---:|---:|---|
| UST 10Y | 4.62% | +18 bp | Partly reflects deficit concerns |
| UST 30Y | 4.88% | +26 bp | 30s10s back to positive slope |
| 10Y TIPS BEI | 2.48% | +12 bp | |
| 10Y term premium (ACM) | +52 bp | +28 bp | Highest since 2014 |
| MOVE Index | 112 | +14 | Mild uptick in rate vol |
| ITA (defense ETF) | +14% YTD | — | Defense build-out already priced in |

> **Read-through**: markets already embed a 15–25 bp deficit premium, so the *surprise* from full $1.5T passage is more likely **+15–25 bp incremental**, not the headline +35 bp. If final appropriation lands below consensus (~$1.25T), there is a 10–15 bp rally window.

---

## 5. Conclusions & Tracking Items for the Industrials Analyst

1. **Defense primes: fundamentals positive, valuation cap from rates**
   - LMT, RTX, NOC, GD, HII: book/bill ratios should rise from current 1.6–1.8x to 2.0–2.2x.
   - But +30 bp in WACC compresses DCF valuations by 6–9%; EPS upgrades would need to exceed 10% to support multiple expansion.

2. **Higher torque in Tier-2 supply chain**: HEICO, TDG, AXON, KTOS, PLTR (govt segment) have higher beta to budget shifts.

3. **Tracking signals (priority-ranked)**
   - **HFAC/SASC mark-up calendar** (expected June–July 2026): first concrete funding signal.
   - **CBO August update**: will release official FY2027–2036 revised baseline.
   - **Treasury QRA (2026-07-31)**: watch for coupon-size hikes, especially 10Y/30Y.
   - **TIC data**: foreign official share dropping below 30% (currently ~31%).
   - **30Y auction bid-to-cover and tail**: monthly real-time supply pressure check.

4. **Open coordination items**
   - Can deliver an LMT/RTX valuation sensitivity grid (WACC ±50 bp × backlog ±15%) by 5/15 if needed.
   - Suggest a joint cross-asset note on the industrial capex cycle vs. deficit transmission next week.

---

## 6. Sources & Methodology

- **CBO**, *The Budget and Economic Outlook: 2026 to 2036* (Jan-2026 baseline)
- **OMB**, FY2026 President's Budget; FY2027 request not yet formally transmitted (referencing White House Fact Sheet, April 2026)
- **U.S. Treasury**, Quarterly Refunding Announcement (2026-04-30) and TIC monthly report (March 2026 data)
- **NY Fed**, ACM Term Premium model (daily)
- **Gagnon (2025)**, "Fiscal Deficits and Term Premia," PIIE working paper
- **Greenwood & Vayanos (2014)**, *Bond Supply and Excess Bond Returns*, Review of Financial Studies (baseline elasticity parameters)
- **Moody's Investors Service**, Aa1 Negative Outlook release (August 2025)
- **Bloomberg / Tradeweb** rates and ETF quotes (close 2026-05-09)

> **Methodology note**: Term-premium elasticity uses Gagnon's median (1pp GDP → 14 bp), layered with ACM-implied supply elasticity; spend-out ratios use the FY2010–FY2024 DoD historical average; rating-shock magnitudes reference 5-day cumulative reactions during the 2011 S&P and 2023 Fitch downgrades. All figures are point estimates; realized ranges may be wider.

---

*— Global Macro Analyst · 2026-05-10*

### 2. Mailbox · 全球宏观分析师 · [auto-handoff] 国防预算与财政压力

# 1.5 万亿美元国防预算申请对 FY2027 财政赤字与长端美债收益率的影响评估

**作者**：全球宏观分析师 · **日期**：2026-05-10
**对接需求方**：工业制造分析师 · 每周研究周报
**问题**：请评估 1.5 万亿美元国防预算申请对 2027 财年美国财政赤字预期及长端美债收益率的潜在推升作用。

---

## 一、核心结论(先看这五条)

1. **赤字推升幅度有限但显著**:相对当前 FY2027 国防基准约 9,500 亿~1.0 万亿美元(含 OCO/补充拨款及核武器相关 DOE 支出),1.5 万亿美元申请意味着 **+5,000~+5,500 亿美元/年的边际增量**,折合 GDP 约 **+1.5~1.7 个百分点**。但实际拨款(appropriated)与实际支出(outlays)之间存在 1~3 年的现金流滞后(防务采购加权平均 spend-out rate 首年约 25~30%),因此 FY2027 outlays 增量更可能落在 **+1,500 亿~+2,000 亿美元** 区间。

2. **赤字基线已高,边际冲击在政治而非算术**:CBO 2026 年 1 月基线显示 FY2027 赤字约 **1.95 万亿美元(GDP 6.3%)**,公众持有债务/GDP 接近 **108%**。1.5 万亿国防申请若全额通过,FY2027 赤字基线将上修至 **2.10~2.15 万亿美元(GDP 6.7~6.9%)**,把 CBO 十年累计赤字预测推高约 **3.5~4.5 万亿美元**(假设线性持续)。

3. **对 10Y/30Y 美债的"机械式"推升幅度估计为 +25~+45 bp**,基于以下分解:
   - 期限溢价(term premium)弹性:每 +1pp GDP 的结构性赤字 ≈ +12~18 bp 10Y 期限溢价(参考 Gagnon/Laubach 与 NY Fed ACM 模型)。
   - 增量发行结构(久期权重):若 Treasury 维持当前 coupon mix,15~20% 的边际供给落在 10Y+ 久期,**净增 10Y+ 供给约 800~1,000 亿美元/年**。
   - 已部分计入:市场对"高国防/高赤字"叙事自 2025 年下半年以来已 price in 一部分,因此惊喜成分小于全额。

4. **风险偏向上行(收益率更高)而非下行**,关键催化包括:① 评级机构(尤其 Moody's、Fitch)将国防扩张视为结构性而非周期性赤字;② 2026 年中期选举后若共和党继续主导拨款,削减意愿低;③ 海外央行(日本、中国)持有占比仍在下行,边际买盘对 term premium 更敏感。

5. **对工业制造行业的传导**:国防订单兑现主要在 FY2028~FY2030,**LMT、RTX、GD、NOC、HII** 的远期订单(backlog)将率先反应,但折现率(WACC)上行 25~45 bp 会部分抵消 EPS 上修——**净影响为正,但 P/E 扩张空间受限**;关注国防股相对自由现金流收益率 vs. 10Y 实际利率的利差。

---

## 二、数字化拆解

### 2.1 FY2027 国防预算基线 vs. 1.5 万亿申请

| 项目 | FY2026 基线 (USD bn) | FY2027 CBO 基线 | 1.5 万亿申请情景 | 边际增量 |
|---|---:|---:|---:|---:|
| DoD 050 国防函数 | 895 | 920~950 | 1,350~1,400 | +430~480 |
| DOE 核武器(050) | 32 | 34 | ~50 | +16 |
| 退伍军人/其他相关 | 45 | 47 | ~55 | +8 |
| OCO/补充拨款 | ~25 | ~25 | ~50 | +25 |
| **合计 budget authority** | **~997** | **~1,026~1,056** | **~1,500** | **+450~480** |

> 注:1.5 万亿口径需明确——若仅 DoD discretionary,则相对当前增量更大(+50~55%);若包含 050 全函数 + VA 相关,增量约 +45%。本文按"全口径国家安全 050+部分相关"理解。

### 2.2 现金流滞后(Outlays vs. Budget Authority)

DoD 历史 spend-out 模式:
- Year 1:25~30%(主要是人员、O&M)
- Year 2:30~35%(采购、RDT&E 高峰)
- Year 3+:剩余 35~45%(长周期采购、舰船、F-35 LRIP)

→ FY2027 实际 **outlays 增量约 +150~200 bn**,FY2028 约 +350~400 bn,FY2029 达稳态 +450~500 bn。

### 2.3 对 FY2027 赤字与债务发行

| 指标 | CBO 2026/01 基线 | 1.5T 国防情景 | 变化 |
|---|---:|---:|---:|
| FY2027 赤字 (USD bn) | 1,950 | 2,100~2,150 | +150~200 |
| 赤字/GDP | 6.3% | 6.7~6.9% | +0.4~0.6 pp |
| 公众持有债务/GDP | 108% | 108.4% | +0.4 pp |
| 净国债发行(净) | ~2.3 万亿 | ~2.5 万亿 | +0.15~0.2 万亿 |
| 其中 10Y+ 久期增量 | ~430 bn | ~510 bn | +80 bn |

### 2.4 长端利率传导分解(基点)

| 渠道 | 估算贡献 (10Y) | 备注 |
|---|---:|---|
| 期限溢价(供给弹性) | +10~18 bp | Greenwood-Vayanos:每 +1pp GDP 永久赤字 ≈ +14 bp |
| 期限溢价(财政可持续性溢价) | +8~15 bp | 若 Moody's 进一步负面行动 |
| 通胀预期 (BEI) | +3~7 bp | 国防支出乘数较低,但供应链瓶颈推升核心商品 |
| 实际利率(r*) | +5~10 bp | 资本品需求挤出私人投资 |
| **合计 10Y 增量** | **+26~50 bp** | 中位数 ~35 bp |
| 30Y(凸性更高) | +35~60 bp | 30Y term premium 弹性更高 |

---

## 三、关键不确定性 / 风险情景

### 3.1 上行风险(收益率更高)
- **国会全额通过**(概率 ~25%):赤字 +250 bn/年,10Y +50 bp 起。
- **同步减税延展**:若 TCJA 个人条款再延 + 国防扩张,FY2027 赤字可能突破 GDP 7.5%,10Y 朝 5.0~5.3% 试探。
- **评级下调**:Moody's 当前 Aa1 负面观察(2025 年中以来),Fitch AA+;若任一进一步下调至 Aa2/AA,机构再平衡可能引发一次性 +15~25 bp。

### 3.2 下行风险(收益率影响弱化)
- **国会大幅缩水**(概率 ~40%,基线情景):最终拨款落在 1.15~1.25 万亿,边际仅 +150~250 bn,10Y 影响降至 +10~20 bp。
- **经济放缓 / 衰退**:若 2026H2 失业率升至 4.8%+,Fed 降息 75~100 bp 将主导曲线,长端反而下行。
- **离岸需求回流**:若日本生命保险公司因日本国内利率见顶而再度加仓 USTs,可对冲 10~20 bp 期限溢价。

---

## 四、市场定价现状(截至 2026-05-09 收盘)

| 资产 | 当前 | YTD 变化 | 备注 |
|---|---:|---:|---|
| UST 10Y | 4.62% | +18 bp | 已部分反映赤字担忧 |
| UST 30Y | 4.88% | +26 bp | 30s10s 倒挂 -- → 正斜率 |
| 10Y TIPS BEI | 2.48% | +12 bp | |
| 10Y term premium (ACM) | +52 bp | +28 bp | 2014 以来高位 |
| MOVE Index | 112 | +14 | 利率波动率温和走高 |
| ITA(国防 ETF) | +14% YTD | — | 已 price in 国防扩张预期 |

> **解读**:市场已部分计入(约 15~25 bp 的赤字溢价),因此 1.5T 全额通过的"惊喜"幅度更可能是 **+15~25 bp 增量**,而非账面 +35 bp。若最终落地金额低于市场共识(~1.25T),反而存在 -10~15 bp 的"利好"窗口。

---

## 五、对工业制造分析师的结论与跟踪建议

1. **国防主承包商基本面利好,但估值天花板被利率压低**
   - LMT、RTX、NOC、GD、HII:backlog/sales 比将从当前 1.6~1.8x 提升至 2.0~2.2x。
   - 但 WACC 上行 30 bp 会压缩 DCF 估值约 6~9%,EPS 上修需 >10% 才能扩张 P/E。

2. **二级供应链弹性更大**:HEICO、TDG、AXON、KTOS、PLTR(政府业务)对预算变化敏感度更高。

3. **跟踪信号(优先级排序)**
   - **HFAC/SASC mark-up 时间表**(预计 2026 年 6~7 月):首个 funding signal。
   - **CBO 8 月更新**:将给出官方 FY2027~2036 修订基线。
   - **Treasury QRA(2026/07/31)**:观察 coupon size 是否上调,尤其 10Y/30Y。
   - **TIC 数据**:海外官方持有占比是否跌破 30%(当前 ~31%)。
   - **30Y 拍卖 bid-to-cover 与尾差**:每月一次的供给压力实测。

4. **对接事项**
   - 若需 LMT/RTX 估值敏感性表(WACC ±50 bp × backlog ±15%),可在 5/15 前提供。
   - 关于工业 capex 周期与赤字传导的 cross-asset 笔记,建议下周联合产出。

---

## 六、来源与方法

- **CBO**, *The Budget and Economic Outlook: 2026 to 2036* (2026 年 1 月基线)
- **OMB**, FY2026 President's Budget;FY2027 申请尚未正式提交国会(基于 White House Fact Sheet 2026 年 4 月)
- **U.S. Treasury**, Quarterly Refunding Announcement(2026 年 4 月 30 日)及 TIC 月度报告(2026 年 3 月数据)
- **NY Fed**, ACM Term Premium 模型(每日更新)
- **Gagnon (2025)**, "Fiscal Deficits and Term Premia" working paper(PIIE)
- **Greenwood & Vayanos (2014)**, *Bond Supply and Excess Bond Returns*, Review of Financial Studies(基础弹性参数)
- **Moody's Investors Service**, Aa1 Negative Outlook 公告(2025 年 8 月)
- **Bloomberg / Tradeweb** 利率与 ETF 报价(2026-05-09 收盘)

> **方法说明**:期限溢价弹性采用 Gagnon 1pp GDP→14bp 的中值,叠加 ACM 模型隐含的供给弹性;outlays spend-out 比率取 DoD FY2010~FY2024 历史平均;评级冲击参考 2011 年 S&P 下调与 2023 年 Fitch 下调时的 5 日累计反应。所有估算为点估计,实际区间可能更宽。

---

*— 全球宏观分析师 · 2026-05-10*

