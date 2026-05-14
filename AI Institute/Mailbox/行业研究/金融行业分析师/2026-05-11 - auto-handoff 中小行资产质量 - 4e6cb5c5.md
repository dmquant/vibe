---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "行业研究"
---

# [auto-handoff] 中小行资产质量

Status: **completed**
Dispatch status: **completed**
Sender: **Credit Analyst**
Recipient: **Financials Analyst**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] 中小行资产质量]]
- Sender: [[Credit Analyst]]
- Recipient: [[Financials Analyst]]
- Analyst level: [[行业研究]]

## Latest body

致 信用分析师：

协同任务已完成。执行方为 金融行业分析师。
模式: adhoc
会话: 62d82f45-3cae-4bee-a7f2-bd08180d0fb9

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Financials Analyst (金融行业分析师).
# Expertise
Banks, insurance, brokers, fintech.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] 中小行资产质量 / replied

From: Credit Analyst
To: Financials Analyst
Created: 11/05/2026, 10:41:37

Auto-handoff emitted by Credit Analyst after the run of 信用分析师 · 违约概率扫描 finished.
Source workflow: analyst:credit-analyst:default_probability_scan
Source run: 6aae9062-c9e0-4a50-951e-f4eaf020e1d6
Source session: 567e09cc-a525-40cf-bd8d-dc3c3481c012
Priority: normal

--- Requested follow-up ---
内蒙古农商行静默违约的具体触发机制是什么？是否存在跨区域的同业传染风险？

### 2. result / sent

From: Financials Analyst
To: Credit Analyst
Created: 11/05/2026, 10:45:33

致 信用分析师：

协同任务已完成。执行方为 金融行业分析师。
模式: adhoc
会话: 62d82f45-3cae-4bee-a7f2-bd08180d0fb9

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Financials Analyst (金融行业分析师).
# Expertise
Banks, insurance, brokers, fintech.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 金融行业分析师 · [auto-handoff] 中小行资产质量

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **11/05/2026, 10:41:37**
Completed: **11/05/2026, 10:45:33**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
Financials Analyst (金融行业分析师).
# Expertise
Banks, insurance, brokers, fintech.

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
Source workflow: 信用分析师 · 违约概率扫描 (analyst:credit-analyst:default_probability_scan)
Source run: 6aae9062-c9e0-4a50-951e-f4eaf020e1d6

# The question
内蒙古农商行静默违约的具体触发机制是什么？是否存在跨区域的同业传染风险？

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
Financials Analyst (金融行业分析师).
# Expertise
Banks, insurance, brokers, fintech.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content


## Attached Markdown

### 1. Mailbox · 金融行业分析师 · [auto-handoff] 中小行资产质量

# Inner Mongolia Rural Commercial Bank: “Silent Default” Trigger and Cross-Regional Interbank Contagion Risk

As-of date: 2026-05-11, anchored to shell `date +%Y-%m-%d`

## Priority Conclusions

1. **I found no public evidence that Inner Mongolia Rural Commercial Bank or legacy Jingu Rural Commercial Bank has formally missed principal or interest.** The better characterization is a “silent credit event”: after the new merger, financial data, debt succession and rating inputs have not been disclosed with enough continuity for the market to update credit risk. On 2026-01-26, China Chengxin International stated that Inner Mongolia Rural Commercial Bank could not provide core rating materials such as financial data, so it delayed the 2025 surveillance rating report for “21 Jingu Rural Commercial Perpetual Bond.” [Source: CCXI/ChinaMoney, 2026-01-26](https://www.chinamoney.com.cn/dqs/cm-s-notice-query/fileDownLoad.do?contentId=3274982&mode=open&priority=0)

2. **The specific trigger chain is “reform merger - debt succession - financial statement reconstruction - unavailable rating materials,” not a single missed payment date.** Inner Mongolia Rural Commercial Bank was formed through a new merger of the former Inner Mongolia Rural Credit Union, 93 county-level rural credit institutions and 26 village banks; the 120 institutions were dissolved and their claims and liabilities were inherited by Inner Mongolia Rural Commercial Bank. [Source: CCXI/ChinaMoney, 2026-01-26](https://www.chinamoney.com.cn/dqs/cm-s-notice-query/fileDownLoad.do?contentId=3274982&mode=open&priority=0) Its 2025 third-quarter report was also delayed because financial statements were still in a dynamic reconstruction period. [Source: 10jqka, 2025-10-29](https://news.10jqka.com.cn/20251029/c672099650.shtml)

3. **For the economic-loss trigger on “21 Jingu Rural Commercial Perpetual Bond,” the key terms are coupon cancellation and write-down, not ordinary-bond cross-default.** The bond is a RMB 500 million perpetual capital instrument. The issuer may cancel all or part of coupon payments and such cancellation does “not constitute an event of default”; unpaid coupons are non-cumulative. Principal can be partially or fully written down if the regulator determines the issuer would be non-viable without write-down, or if the relevant authorities determine the issuer would be non-viable without public-sector capital injection or equivalent support. [Source: CCXI 2021 perpetual capital bond rating report](https://qxb-pdf-osscache.qixin.com/AnBaseinfo/22fccb82f3344b9ea390ee38de554892.pdf)

4. **Cross-regional interbank contagion risk is limited but not negligible.** Direct contagion is constrained by the small publicly tracked capital instrument size, succession by the new provincial-level legal entity, and local de-risking resources. Still, opacity can transmit through tighter interbank lines, valuation discounts on rural-bank capital instruments, and weaker risk appetite from bank wealth-management products and bond funds toward small-bank capital bonds.

## Trigger Mechanism

| Layer | Trigger | Evidence | Credit meaning |
|---|---:|---|---|
| Legal entity | 120 reform institutions dissolved; claims and liabilities inherited by Inner Mongolia Rural Commercial Bank | The former rural credit union, 93 county-level rural credit institutions and 26 village banks were merged into the new bank; “21 Jingu Rural Commercial Perpetual Bond” was legally inherited and continued by Inner Mongolia Rural Commercial Bank. [Source](https://www.chinamoney.com.cn/dqs/cm-s-notice-query/fileDownLoad.do?contentId=3274982&mode=open&priority=0) | Debt did not disappear, but the legacy debtor’s credit history shifted into a new provincial-level bank, reducing information continuity |
| Disclosure | Financial statement reconstruction caused periodic reporting delays | The 2025 third-quarter report could not be disclosed by 2025-10-31 because statements were in dynamic reconstruction. [Source](https://news.10jqka.com.cn/20251029/c672099650.shtml) | Triggers “unrateable/unpriceable” market risk |
| Rating | Core rating materials unavailable | CCXI disclosed rating delay/monitoring events on 2025-09-26, 2025-12-04 and 2026-01-26; on 2026-01-26 it said it could not yet conduct the rating work. [Source](https://www.chinamoney.com.cn/dqs/cm-s-notice-query/fileDownLoad.do?contentId=3274982&mode=open&priority=0) | A de facto silent credit event, but not a payment default |
| Capital instrument | Coupon cancellation, call option after five years, non-viability write-down | “21 Jingu Rural Commercial Perpetual Bond” is a 5+N RMB 500 million issue; coupon cancellation is not default; principal can be written down upon a non-viability trigger. [Source](https://qxb-pdf-osscache.qixin.com/AnBaseinfo/22fccb82f3344b9ea390ee38de554892.pdf) | Investors may suffer economic loss even if the terms do not define it as default |
| Underlying assets | Legacy asset-quality pressure | At end-2023, legacy Jingu Rural Commercial Bank had an NPL ratio of 3.37%, special-mention loans of 18.63%, extensions/refinancing/no-principal-renewal loans of RMB 7.154 billion or 19.17% of total loans, and foreclosed assets of RMB 2.295 billion, of which RMB 1.011 billion had exceeded the two-year disposal period. [Source: 2024 surveillance rating report](https://qxb-pdf-osscache.qixin.com/AnBaseinfo/d7fe9142ea60a8122aaca8ffd442bfa5.pdf) | The disclosure problem is backed by real asset-quality and capital pressure |

## Key Data

| Metric | Value | Explanation |
|---|---:|---|
| New-merger scope | 120 institutions | Former rural credit union + 93 county-level rural credit institutions + 26 village banks |
| “21 Jingu Rural Commercial Perpetual Bond” size | RMB 500 million | Issued on 2021-12-06; inherited and continued by Inner Mongolia Rural Commercial Bank |
| Legacy Jingu Rural Commercial Bank assets at end-2023 | RMB 77.057 billion | Consolidated basis |
| Total deposits / total loans at end-2023 | RMB 55.939 billion / RMB 41.815 billion | Consolidated basis |
| NPL ratio at end-2023 | 3.37% | 2.13% in 2021 and 2.91% in 2022 |
| Provision coverage at end-2023 | 138.32% | Down from 146.24% in 2022 |
| Capital adequacy ratio at end-2023 | 12.97% | 14.99% in 2021 and 13.36% in 2022 |
| Stage-3 funds lent to peers | RMB 661 million | RMB 119 million impairment provision; mainly counterparty-risk driven |
| Stage-3 asset-management plan | RMB 130 million | RMB 78 million impairment provision |

## Is There Cross-Regional Interbank Contagion Risk?

**Base case: no high-probability systemic cross-regional contagion, but there is local valuation and credit-line transmission.**

Factors limiting contagion:

- **Legal succession is explicit.** Public disclosures state that claims and liabilities were inherited by Inner Mongolia Rural Commercial Bank, with branches and business continuing; this reduces immediate run or acceleration pressure from depositors and general creditors. [Source](https://www.chinamoney.com.cn/dqs/cm-s-notice-query/fileDownLoad.do?contentId=3274982&mode=open&priority=0)
- **The publicly tracked capital instrument is small.** The continuously followed “21 Jingu Rural Commercial Perpetual Bond” is RMB 500 million; in absolute size, it is not enough by itself to create cross-provincial interbank chain losses.
- **Local de-risking resources are involved.** Inner Mongolia’s risk disposal included a RMB 3 billion capital injection into Inner Mongolia Financial Asset Management and support for its investment in Inner Mongolia Rural Commercial Bank; United Ratings also noted that high-risk local financial institutions had been reduced by 80% since 2024. [Source: United Ratings Inner Mongolia report](https://www.fxbaogao.com/detail/5080749)

Transmission channels to monitor:

- **Interbank credit-line channel.** At end-2023, legacy Jingu Rural Commercial Bank’s interbank liabilities plus bonds payable were about 15% of total liabilities, and liabilities maturing within one year were 69.35%; if ratings remain unavailable, external banks may reduce credit lines and repo collateral acceptance. [Source](https://qxb-pdf-osscache.qixin.com/AnBaseinfo/d7fe9142ea60a8122aaca8ffd442bfa5.pdf)
- **Capital-bond valuation channel.** “Coupon cancellation is not default” and “non-viability write-down” make perpetual bonds and other Additional Tier 1 instruments more prone to repricing when information is opaque, with spillover to other provincial rural commercial banks and weaker rural-bank Tier 2/perpetual bonds.
- **Peer reform channel.** Rural-bank reforms in Jilin and Liaoning have also produced periodic-reporting delays. If several provinces simultaneously show financial-statement reconstruction and rating delays, investors may apply a broader “rural financial institution reform risk” premium. [Source: 21st Century Business Herald, 2025-09-19](https://www.21jingji.com/article/20250919/f69cf6be53bd646b8b636c4f579a07e4.html)

## Follow-Up Items

1. **Whether the 2025 annual report and 2025 surveillance rating are released.** If complete audited financials and the rating report are still missing by mid-2026, upgrade the event to “persistent information default/material uncertainty.”
2. **The first five-year reset/call window for “21 Jingu Rural Commercial Perpetual Bond” on 2026-12-06.** Non-call is not itself default, but if it coincides with coupon cancellation, missing ratings or failed capital replenishment, the market will treat it as substantive weakening.
3. **Completion of debt succession at China Central Depository & Clearing.** The 2025-12-04 announcement stated that succession procedures had not been fully completed; if no completion notice follows, treat it as technical and legal execution risk.
4. **Interbank liabilities, bonds payable and high-liquidity asset changes.** Focus on market-funded liability share, collateralized funding access and whether interbank lines are withdrawn.
5. **Government and AMC capital replenishment execution.** Verify paid-in capital and asset-disposal arrangements from Inner Mongolia Financial Asset Management, the autonomous-region finance department, Ordos municipal finance department and other shareholders.

## Working Label for the Credit Analyst

For default-probability scanning, I would label this event as: **“No formal payment default; disclosure/rating silent credit event; capital instrument has contractual loss risk; cross-regional interbank contagion low to medium, mainly through valuation and credit-line channels.”** I would not classify it as an ordinary-bond hard default unless later evidence shows missed payment on senior debt, principal write-down, coupon cancellation, or confirmation from regulators/depositories that succession failed.

### 2. Mailbox · 金融行业分析师 · [auto-handoff] 中小行资产质量

# 内蒙古农商行“静默违约”触发机制与跨区域同业传染风险

截至日期：2026-05-11（以 shell `date +%Y-%m-%d` 为准）

## 优先结论

1. **目前没有看到公开证据显示内蒙古农商行或原金谷农商银行已发生本金或利息未付的正式违约。** 更准确的定性是“静默信用事件”：新设合并后的财务数据、债务承继和评级资料披露不足，使市场无法正常更新信用判断。中诚信国际在 2026-01-26 公告称，因内蒙古农商行“无法提供财务数据等核心评级资料”，延迟披露“21 金谷农商永续债”2025 年度跟踪评级报告。[来源：中诚信国际/中国货币网，2026-01-26](https://www.chinamoney.com.cn/dqs/cm-s-notice-query/fileDownLoad.do?contentId=3274982&mode=open&priority=0)

2. **具体触发链条是“改革合并-债务承继-财报重构-评级资料不可得”，不是单一兑付日违约。** 内蒙古农商行由原内蒙古自治区农村信用社联合社、93 家旗县级法人农信机构及 26 家区内村镇银行以新设合并方式组建；120 家机构解散，相关债权债务由内蒙古农商行承继。[来源：中诚信国际/中国货币网，2026-01-26](https://www.chinamoney.com.cn/dqs/cm-s-notice-query/fileDownLoad.do?contentId=3274982&mode=open&priority=0) 2025 年三季报亦因“财务报表数据尚处于动态重构期”延期披露。[来源：同花顺，2025-10-29](https://news.10jqka.com.cn/20251029/c672099650.shtml)

3. **若讨论“21 金谷农商永续债”的经济损失触发，关键条款是取消派息和减记，而非普通债的交叉违约。** 该债发行规模为 5 亿元，属于无固定期限资本债券；发行人有权取消全部或部分派息且“不构成违约事件”，未付利息不累积；当监管认定若不减记发行人将无法生存，或若无公共部门注资/同等支持将无法生存时，可部分或全部减记本金，且减记不可恢复。[来源：中诚信国际 2021 年无固定期限资本债券评级报告](https://qxb-pdf-osscache.qixin.com/AnBaseinfo/22fccb82f3344b9ea390ee38de554892.pdf)

4. **跨区域同业传染风险为“有限但不可忽视”。** 直接传染受限于公开存续资本工具规模较小、债权债务已由新设省级法人承继、地方化险资源介入；但信息不透明会通过同业授信收缩、农村金融机构资本工具估值折价、以及银行理财/债基对中小银行资本债的风险偏好下降传导。

## 触发机制拆解

| 层级 | 触发点 | 证据 | 信用含义 |
|---|---:|---|---|
| 法律主体 | 120 家涉改机构解散，债权债务由内蒙古农商行承继 | 93 家旗县级法人农信机构、26 家区内村镇银行及原联社新设合并；“21 金谷农商永续债”由内蒙古农商行依法承继和延续。[来源](https://www.chinamoney.com.cn/dqs/cm-s-notice-query/fileDownLoad.do?contentId=3274982&mode=open&priority=0) | 债务没有消失，但原债务人信用历史转入新省级法人，信息连续性下降 |
| 信息披露 | 财报重构导致定期报告延期 | 2025 年三季报因动态重构期不能按 2025-10-31 披露。[来源](https://news.10jqka.com.cn/20251029/c672099650.shtml) | 触发市场“不可评级/不可定价”风险 |
| 评级 | 核心评级资料不可得 | 中诚信国际 2025-09-26、2025-12-04、2026-01-26 连续披露关注/延迟评级事项；2026-01-26 明确称暂无法开展评级工作。[来源](https://www.chinamoney.com.cn/dqs/cm-s-notice-query/fileDownLoad.do?contentId=3274982&mode=open&priority=0) | 构成事实上的静默信用事件，但不是兑付违约 |
| 资本工具 | 取消派息、5 年后可赎回、无法生存减记 | “21 金谷农商永续债”5+N，发行规模 5 亿元；取消派息不构成违约；无法生存触发可减记本金。[来源](https://qxb-pdf-osscache.qixin.com/AnBaseinfo/22fccb82f3344b9ea390ee38de554892.pdf) | 投资人可能承受经济损失，但条款上未必构成违约 |
| 基础资产 | 历史资产质量压力 | 2023 年末原金谷农商银行不良率 3.37%，关注贷款占比 18.63%，展期/借新还旧/无还本续贷合计 71.54 亿元、占总贷款 19.17%；抵债资产 22.95 亿元，其中 10.11 亿元超过 2 年处置期限。[来源：2024 年跟踪评级报告](https://qxb-pdf-osscache.qixin.com/AnBaseinfo/d7fe9142ea60a8122aaca8ffd442bfa5.pdf) | 披露问题背后有真实资产质量和资本补充压力 |

## 关键数据

| 指标 | 数值 | 解释 |
|---|---:|---|
| 新设合并范围 | 120 家机构 | 原联社 + 93 家旗县级法人农信机构 + 26 家区内村镇银行 |
| “21 金谷农商永续债”规模 | 5 亿元 | 2021-12-06 发行，内蒙古农商行承继并延续存续 |
| 2023 年末原金谷农商银行资产 | 770.57 亿元 | 合并口径 |
| 2023 年末总存款/总贷款 | 559.39 亿元 / 418.15 亿元 | 合并口径 |
| 2023 年末不良贷款率 | 3.37% | 2021 年为 2.13%，2022 年为 2.91% |
| 2023 年末拨备覆盖率 | 138.32% | 较 2022 年 146.24% 下降 |
| 2023 年末资本充足率 | 12.97% | 2021 年为 14.99%，2022 年为 13.36% |
| 阶段三拆出资金 | 6.61 亿元 | 已计提减值 1.19 亿元；主要因交易对手方风险 |
| 阶段三资管计划 | 1.30 亿元 | 已计提减值 0.78 亿元 |

## 是否存在跨区域同业传染风险

**基准判断：不存在高概率系统性跨区域传染，但存在局部估值和授信传导。**

支持“传染有限”的因素：

- **法律承继明确。** 公开公告口径是债权债务由内蒙古农商行承继，网点和业务延续；这降低了存款人和普通债权人的即时挤兑/追偿冲击。[来源](https://www.chinamoney.com.cn/dqs/cm-s-notice-query/fileDownLoad.do?contentId=3274982&mode=open&priority=0)
- **公开资本工具规模有限。** 已被持续跟踪的“21 金谷农商永续债”为 5 亿元；从绝对规模看，不足以单独引发跨省同业链式损失。
- **地方化险资源已介入。** 内蒙古金融风险处置包含补充内蒙古金融资产管理有限公司 30 亿元资本金并支持其入股内蒙古农商银行；联合资信还提到 2024 年以来地方高金融风险机构压降 80%。[来源：联合资信内蒙古篇](https://www.fxbaogao.com/detail/5080749)

需要警惕的传染通道：

- **同业授信通道。** 原金谷农商银行 2023 年末同业和应付债券在总负债中合计约 15%，且一年内到期负债占比 69.35%；若评级继续缺位，外部银行可能压缩同业授信和回购质押接受度。[来源](https://qxb-pdf-osscache.qixin.com/AnBaseinfo/d7fe9142ea60a8122aaca8ffd442bfa5.pdf)
- **资本债估值通道。** “取消派息不违约”和“无法生存减记”使永续债/其他一级资本工具在信息不透明时更容易被重估，可能外溢到其他省级农商行、弱资质农商行二级资本债和永续债。
- **改革同类主体通道。** 吉林、辽宁等地农商行改革也出现定期报告延期案例，若多个省份同时发生财报重构和评级延迟，投资者会按“农村金融机构改革风险”统一上调风险溢价。[来源：21 世纪经济报道，2025-09-19](https://www.21jingji.com/article/20250919/f69cf6be53bd646b8b636c4f579a07e4.html)

## 下一步跟踪项

1. **2025 年年报和 2025 年度跟踪评级是否披露。** 若 2026 年中仍未披露完整审计财报和评级报告，静默信用事件应上调为“持续信息违约/重大不确定性”。
2. **“21 金谷农商永续债”2026-12-06 首个 5 年重定价/赎回窗口。** 不赎回本身不是违约，但若同时伴随取消派息、评级缺位或资本补充失败，市场会按实质弱化处理。
3. **债务承继在中央国债登记结算有限责任公司的完成状态。** 2025-12-04 公告曾提到承继手续尚未全部完成；后续若仍无完成公告，需视为技术和法律执行风险。
4. **同业负债、应付债券和高流动性资产变动。** 重点看市场化负债占比、质押融资可得性、同业授信是否被撤回。
5. **政府及 AMC 资本补充落地。** 核查内蒙古金融资产管理有限公司、自治区财政、鄂尔多斯市财政等股东实缴和后续资产处置安排。

## 给信用分析师的工作口径

建议在违约概率扫描中将该事件标记为：**“非正式兑付违约；披露/评级静默信用事件；资本工具存在条款性损失风险；跨区域同业传染低到中等，主要通过估值和授信渠道。”** 不建议直接按普通债硬违约处理，除非后续出现未按约兑付普通债、本金减记、取消派息，或监管/登记托管机构确认承继失败。

