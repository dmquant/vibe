---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "固收与衍生品"
---

# [auto-handoff] LPR stability in May-June 2026

Status: **completed**
Dispatch status: **completed**
Sender: **Financials Analyst**
Recipient: **Bond Analyst**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] LPR stability in May-June 2026]]
- Sender: [[Financials Analyst]]
- Recipient: [[Bond Analyst]]
- Analyst level: [[固收与衍生品]]

## Latest body

致 金融行业分析师：

协同任务已完成。执行方为 债券分析师。
模式: adhoc
会话: e5acbe1e-cf18-4566-91bd-7fc8a377eb9c

结果摘要:
Wrote handoff_response.md (6172 bytes); wrote handoff_response.en.md (6280 bytes) — Base case (~75%): both 1Y LPR 3.00% and 5Y+ LPR 3.50% hold through May and June 2026, anchored by an unchanged 7-day OMO rate (1.40%, last confirmed at the 9 May 2026 operation) and an 11-month LPR freeze; principal downside is a June 5Y+-only −10bp cut if April credit/CPI prints disappoint.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] LPR stability in May-June 2026 / replied

From: Financials Analyst
To: Bond Analyst
Created: 11/05/2026, 10:23:27

Auto-handoff emitted by Financials Analyst after the run of 金融行业分析师 · 银行净息差追踪 finished.
Source workflow: analyst:financials-analyst:bank_nim_tracker
Source run: b3751039-fc77-4f79-9fbf-b2eb76e405a5
Source session: 86f17a9b-094f-4e73-99fb-9d7ea2961fd7
Priority: normal

--- Requested follow-up ---
Will the 1-year and 5-year-plus LPRs remain at 3.00% and 3.50% respectively for the May-June 2026 period?

### 2. result / sent

From: Bond Analyst
To: Financials Analyst
Created: 11/05/2026, 10:30:12

致 金融行业分析师：

协同任务已完成。执行方为 债券分析师。
模式: adhoc
会话: e5acbe1e-cf18-4566-91bd-7fc8a377eb9c

结果摘要:
Wrote handoff_response.md (6172 bytes); wrote handoff_response.en.md (6280 bytes) — Base case (~75%): both 1Y LPR 3.00% and 5Y+ LPR 3.50% hold through May and June 2026, anchored by an unchanged 7-day OMO rate (1.40%, last confirmed at the 9 May 2026 operation) and an 11-month LPR freeze; principal downside is a June 5Y+-only −10bp cut if April credit/CPI prints disappoint.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 债券分析师 · [auto-handoff] LPR stability in May-June 2026

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **11/05/2026, 10:23:27**
Completed: **11/05/2026, 10:30:12**

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
# Incoming coordination request from Financials Analyst
Source workflow: 金融行业分析师 · 银行净息差追踪 (analyst:financials-analyst:bank_nim_tracker)
Source run: b3751039-fc77-4f79-9fbf-b2eb76e405a5

# The question
Will the 1-year and 5-year-plus LPRs remain at 3.00% and 3.50% respectively for the May-June 2026 period?

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

Wrote handoff_response.md (6172 bytes); wrote handoff_response.en.md (6280 bytes) — Base case (~75%): both 1Y LPR 3.00% and 5Y+ LPR 3.50% hold through May and June 2026, anchored by an unchanged 7-day OMO rate (1.40%, last confirmed at the 9 May 2026 operation) and an 11-month LPR freeze; principal downside is a June 5Y+-only −10bp cut if April credit/CPI prints disappoint.


## Attached Markdown

### 1. Mailbox · 债券分析师 · [auto-handoff] LPR stability in May-June 2026

# LPR Hold-at-3.00%/3.50% Assessment — May–June 2026 Window

**To:** Financials Analyst · Bank NIM Tracker (run b3751039-fc77-4f79-9fbf-b2eb76e405a5)
**From:** Bond Analyst | **Date:** 2026-05-11 (ahead of the 20 May LPR fixing)

---

## 1. Bottom Line

| Scenario | 20 May fixing | 22 June fixing | Subj. prob. |
|---|---|---|---|
| **Base case: both rates unchanged** (1Y = 3.00%, 5Y+ = 3.50%) | Unchanged | Unchanged | **≈ 75%** |
| OMO cut in June, LPR follows symmetrically | Unchanged | 1Y −10bp / 5Y −10bp | ≈ 15% |
| Asymmetric cut (5Y+ only, to support housing) | Unchanged | 5Y −10bp, 1Y flat | ≈ 7% |
| May surprise cut | 5Y or 1Y −10bp | — | ≈ 3% |

**One-liner for NIM modelling:** For **May (near-certain) and June (high confidence)**, anchor pricing at 1Y LPR = 3.00% and 5Y+ LPR = 3.50%. Carry a "June 5Y −10bp" sensitivity as the principal downside test.

---

## 2. Why the Hold Is the High-Conviction Call — Three Pillars

### 2.1 The policy-rate anchor has not moved
- Since 2024, the PBOC has formally designated the **7-day reverse-repo rate** as its main policy rate; LPR quotes are derived as 7-day OMO rate + bank-specific spread.
- The 7-day OMO rate was cut from **1.50% → 1.40% on 8 May 2025** and has been **unchanged ever since**.
- On **9 May 2026**, the PBOC ran another 7-day reverse-repo operation at a fixed **1.40%**, confirming the May LPR base is unmoved. Without an OMO move, LPR almost never drifts on its own.

### 2.2 LPR has now been frozen for 11 straight months
- 1Y LPR 3.00% / 5Y+ LPR 3.50% have held from **June 2025 through April 2026 (11 months)**, an entrenched inertia.
- Historically, quoting banks compress the spread (move LPR without an OMO change) only in exceptional cases — virtually never within a single month.

### 2.3 Macro & external constraints reduce urgency in May–June
- **Growth:** Beijing's 2026 GDP target is **4.5%–5%** (lowest since 1991), but Q1 prints came in "steady at the start", easing pressure for fresh stimulus.
- **Inflation:** Middle-East tensions are lifting oil prices, turning the inflation outlook from "low" to "uncertain" — the PBOC is in a watching mode.
- **FX & bank margins:** With the Fed still relatively tight and RMB constraints unresolved — and with bank NIMs near record lows — the PBOC's Q4-2025 Monetary Policy Report (released 10 Feb 2026) explicitly listed "maintain a reasonable bank net interest margin" as a binding constraint. This last point is the most direct read-through for your NIM tracker.

---

## 3. Downside Risks That Cannot Be Ruled Out (≈ 25%)

| Trigger | Likely timing | Shape |
|---|---|---|
| April credit/TSF/CPI data (mid-May) sharply weak | June OMO + June LPR | Symmetric 10bp cut |
| Property sales re-deteriorate sequentially | June | **5Y+ only −10bp** (cf. Feb 2024 and Jul 2024 precedents) |
| Export / tariff shock escalates | Late May to June | OMO −10bp, LPR follows |
| Stronger forward guidance on "flexible and effective use of RRR/rate cuts" | Any time | Open-ended |

**Key watch points:**
1. **Around 15 May** — April credit, TSF, CPI/PPI. A second consecutive negative TSF y/y print combined with CPI < 0 would materially lift the June-cut odds.
2. **20 May 09:15** — May LPR fixing; strong prior = hold.
3. **16–20 June** — June OMO rollover and LPR fixing. If OMO is cut around 16 June, LPR will follow the same week.
4. The PBOC's Q1-2026 Monetary Policy Report (typically released mid-to-late May) — the softest but earliest signal; focus on wording around "interest margin" and "rate transmission".

---

## 4. Recommendations for the NIM Tracker

1. **Base NIM model:** Continue pricing new loans in May–June off 1Y LPR = 3.00% and 5Y+ LPR = 3.50%.
2. **Sensitivities:**
   - **Scenario A (base):** LPR flat through September, with a symmetric 10bp cut by year-end.
   - **Scenario B (downside):** 5Y+ −10bp in June, 1Y flat — marginal NIM drag of roughly 1–2bp for the large state-owned banks (where mortgage repricing is concentrated).
   - **Scenario C (severe):** 1Y and 5Y both −10bp in June, with deposit-rate self-discipline cuts lagging by one quarter — quarterly NIM pressure widens to 3–4bp.
3. **Deposit-side linkage:** Recall the May-2025 playbook (policy-rate cut paired with deposit-board-rate cuts). If June indeed delivers a cut, the magnitude *and lag* of the deposit-side response is the dominant NIM-buffer variable; model the lag explicitly.

---

## 5. Follow-ups

- [ ] **~15 May 2026:** April credit / TSF / CPI / PPI prints — I will refresh the June-cut probability after release.
- [ ] **20 May 2026, 09:15:** May LPR fixing — I will send a same-morning confirmation note.
- [ ] **Mid-to-late May 2026:** PBOC Q1 Monetary Policy Report — I will extract any change in language on "interest margin", "rate transmission" and "moderately accommodative".
- [ ] **~16 June 2026:** June MLF/OMO rollover rate — I will flag the LPR move one business day in advance if OMO is cut.

---

## Sources

- [China keeps LPR unchanged for 11th straight month in April — CNBC](https://www.cnbc.com/2026/04/20/china-keeps-benchmark-lending-rates-unchanged-as-economic-growth-revs-up-amid-mounting-middle-east-risk-mount-.html)
- [China Holds LPR Rates at Record Lows for 11th Month — Trading Economics](https://tradingeconomics.com/china/interest-rate/news/542994)
- [Will LPR Move in 2026? Nine Months Unchanged — chinanews.com.cn (24 Feb 2026)](https://www.chinanews.com.cn/cj/2026/02-24/10575788.shtml)
- [PBOC 7-day reverse repo operation at 1.40% on 9 May 2026 — Sina Finance](https://finance.sina.com.cn/jjxw/2026-05-09/doc-inhxhcxm1617139.shtml)
- [PBOC cut 7-day reverse repo from 1.5% to 1.4% effective 8 May 2025 — gov.cn](https://www.gov.cn/lianbo/bumen/202505/content_7022721.htm)
- ["Flexible and effective" RRR/rate-cut tools in 2026 policy guidance — Xinhua (7 Jan 2026)](https://www.news.cn/fortune/20260107/2d78951afc9545b1a3e029687f0b4f31/c.html)
- [PBOC Monetary Policy Report Q4 2025, released 10 Feb 2026](https://cif.mofcom.gov.cn/cif/html/upload/20260211143114167_2025%E5%B9%B4%E7%AC%AC%E5%9B%9B%E5%AD%A3%E5%BA%A6%E4%B8%AD%E5%9B%BD%E8%B4%A7%E5%B8%81%E6%94%BF%E7%AD%96%E6%89%A7%E8%A1%8C%E6%8A%A5%E5%91%8A.pdf)

### 2. Mailbox · 债券分析师 · [auto-handoff] LPR stability in May-June 2026

# LPR 维持 3.00%/3.50% 概率评估（2026 年 5–6 月窗口）

**接收方**：金融行业分析师 · 银行净息差追踪（run b3751039-fc77-4f79-9fbf-b2eb76e405a5）
**撰写人**：债券分析师 ｜ **截稿日**：2026-05-11（早于 5 月 20 日 LPR 报价）

---

## 一、核心结论（Bottom Line）

| 情景 | 5 月 20 日 LPR | 6 月 22 日 LPR | 主观概率 |
|---|---|---|---|
| **基准：双双持平**（1Y = 3.00%，5Y+ = 3.50%） | 持平 | 持平 | **≈ 75%** |
| 6 月单独调降（OMO 先动 10bp，LPR 跟随） | 持平 | 1Y −10bp / 5Y −10bp | ≈ 15% |
| 非对称下调（仅 5Y+ 降，稳楼市） | 持平 | 5Y −10bp，1Y 持平 | ≈ 7% |
| 5 月即降 | 5Y 或 1Y −10bp | — | ≈ 3% |

**一句话给金融分析师**：净息差测算可在 **5 月（几乎确定）与 6 月（高概率）** 沿用 1Y LPR = 3.00%、5Y+ LPR = 3.50% 作为基准定价；同时建议准备一个"6 月 5Y −10bp"敏感性情景作为下行风险测试。

---

## 二、为什么大概率持平：三条支柱

### 1. 政策利率锚未动 — LPR 缺乏机械下行动力
- 自 2024 年起，央行已将 **7 天期逆回购利率定位为主要政策利率**，LPR 报价 = 7 天 OMO 利率 + 银行加点。
- 7 天 OMO 利率自 **2025-05-08 由 1.50% 下调至 1.40% 后，迄今未再调整**。
- **2026-05-09** 央行 OMO 操作仍以 **1.40%** 固定利率招标，确认 5 月 LPR 报价基础利率未变；缺乏 OMO 调整，LPR 几乎不会自发移动。

### 2. LPR 报价已连续 11 个月未动
- 1Y LPR 3.00%、5Y+ LPR 3.50% 自 **2025 年 6 月** 起至 **2026 年 4 月** 连续 11 个月不变，形成强惯性。
- 报价行通常在 OMO 利率变动当月才下调报价，单月加点压缩（不伴随政策利率下调）历史上极为罕见。

### 3. 宏观面与外部约束削弱 5–6 月主动降息必要性
- **增长**：2026 年政府增长目标已下调至 **4.5%–5%**（1991 年以来最低），但一季度数据"开局尚稳"，宽松紧迫性下降。
- **物价**：中东局势推升原油价格，通胀展望从"低位"转向"不确定"，央行更倾向观察而非抢跑。
- **汇率与息差**：美联储仍处偏紧周期、人民币汇率约束未解；同时银行净息差已逼近历史低位，央行 Q4 货币政策执行报告（2026-02-10）明确将"维护银行合理息差"列为约束项 — 这一点对你方追踪尤其关键。

---

## 三、不能完全排除的下行风险（≈25%）

| 触发条件 | 可能时点 | 形态 |
|---|---|---|
| 4 月经济数据（5 月 中旬公布）显著走弱、信贷塌方 | 6 月 OMO + 6 月 LPR | 对称下调 10bp |
| 房地产销售环比再度恶化 | 6 月 | **5Y+ 单独 −10bp**（参考 2024 年 2 月、2024 年 7 月先例） |
| 出口/关税冲击升级 | 5 月末至 6 月 | OMO 先降 10bp，5Y/1Y 跟随 |
| 内部"灵活高效用好降准降息"政策表态进一步前置 | 任意时点 | 不定 |

**关键观察窗口**：
1. **5 月 15 日前后**：4 月社融、信贷、CPI 数据 — 若社融同比再度负增长且 CPI < 0，6 月降息概率显著抬升。
2. **5 月 20 日 09:15**：5 月 LPR 报价公布 — 强基准（持平）。
3. **6 月 16–20 日**：6 月 OMO 续作 + LPR 报价；若 OMO 在 6 月 16 日左右先降，则 LPR 当周必跟。
4. 央行 Q1 货币政策执行报告（通常 5 月中下旬发布）中关于"息差"与"利率传导"的措辞为最重要软信号。

---

## 四、给净息差追踪的具体建议

1. **基准 NIM 模型**：5 月、6 月新发放贷款定价继续锚定 1Y LPR = 3.00%、5Y+ LPR = 3.50%。
2. **敏感性测试**：
   - 情景 A（基准）：LPR 全年持平至 9 月，年底前对称降 10bp。
   - 情景 B（下行）：6 月 5Y+ 单独 −10bp，1Y 持平 — 对按揭重定价集中的国有大行 NIM 边际拖累约 1–2bp（按存量结构估算）。
   - 情景 C（重度）：6 月 1Y/5Y 各 −10bp，叠加存款利率自律下调跟进滞后 1 个季度 — NIM 季度压力扩大至 3–4bp。
3. **存款端联动**：参考 2025 年 5 月"降息 + 存款挂牌利率跟降"组合，若 6 月真降息，存款端跟降幅度与时点直接决定净息差缓冲；建议在你方模型里把"存款挂牌利率跟降时滞"作为独立变量。

---

## 五、待跟进事项（Follow-ups）

- [ ] **2026-05-15 前后**：4 月信贷/社融/CPI/PPI — 完成后回流给我，更新 6 月降息概率。
- [ ] **2026-05-20 09:15**：5 月 LPR 报价 — 我会在当日上午发送即时确认。
- [ ] **2026-05 月中下旬**：央行 Q1 货币政策执行报告 — 重点摘录"息差""利率传导""适度宽松"措辞变化。
- [ ] **2026-06-16 前后**：6 月 MLF/OMO 续作利率 — 若 OMO 调整，提前 1 个工作日预警 LPR 当周变动。

---

## 资料来源（Sources）

- [中国央行 4 月连续第 11 个月维持 LPR，1Y 3.0%、5Y+ 3.5% — CNBC](https://www.cnbc.com/2026/04/20/china-keeps-benchmark-lending-rates-unchanged-as-economic-growth-revs-up-amid-mounting-middle-east-risk-mount-.html)
- [China Holds LPR Rates at Record Lows for 11th Month — Trading Economics](https://tradingeconomics.com/china/interest-rate/news/542994)
- [连续九个月按兵不动，2026 年 LPR 还会降吗？— 中新网（2026-02-24）](https://www.chinanews.com.cn/cj/2026/02-24/10575788.shtml)
- [央行 2026-05-09 开展 5 亿元 7 天逆回购操作，利率 1.40% — 新浪财经](https://finance.sina.com.cn/jjxw/2026-05-09/doc-inhxhcxm1617139.shtml)
- [中国人民银行 2025-05-08 起 7 天逆回购由 1.5% 下调至 1.4% — 中国政府网](https://www.gov.cn/lianbo/bumen/202505/content_7022721.htm)
- [央行定调 2026 货币政策：降准降息"灵活高效" — 新华网（2026-01-07）](https://www.news.cn/fortune/20260107/2d78951afc9545b1a3e029687f0b4f31/c.html)
- [中国货币政策执行报告 2025 年第四季度（2026-02-10 发布）](https://cif.mofcom.gov.cn/cif/html/upload/20260211143114167_2025%E5%B9%B4%E7%AC%AC%E5%9B%9B%E5%AD%A3%E5%BA%A6%E4%B8%AD%E5%9B%BD%E8%B4%A7%E5%B8%81%E6%94%BF%E7%AD%96%E6%89%A7%E8%A1%8C%E6%8A%A5%E5%91%8A.pdf)

