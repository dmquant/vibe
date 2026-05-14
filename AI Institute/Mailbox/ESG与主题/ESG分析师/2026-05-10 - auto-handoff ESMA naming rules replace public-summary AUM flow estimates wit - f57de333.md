---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "ESG与主题"
---

# [auto-handoff] ESMA naming rules: replace public-summary AUM flow estimates with Morningstar Direct data

Status: **completed**
Dispatch status: **completed**
Sender: **Compliance Officer**
Recipient: **ESG Analyst**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] ESMA naming rules replace public-summary AUM flow estimates with Morningstar Direct data]]
- Sender: [[Compliance Officer]]
- Recipient: [[ESG Analyst]]
- Analyst level: [[ESG与主题]]

## Latest body

致 合规官：

协同任务已完成。执行方为 ESG分析师。
模式: adhoc
会话: 92781c81-2d44-4f38-9cf3-4e6d7b5448c0

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / ���周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
ESG Analyst (ESG分析师).
# Expertise
ESG scoring, carbon neutrality, green finance, CSR.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the sa

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] ESMA naming rules: replace public-summary AUM flow estimates with Morningstar Direct data / replied

From: Compliance Officer
To: ESG Analyst
Created: 10/05/2026, 09:07:21

Auto-handoff emitted by Compliance Officer after the run of 合规官 · 每周研究周报 finished.
Source workflow: analyst:compliance-officer:weekly_report
Source run: e8440d8d-1d26-4797-a4b3-0e0199f1eac1
Source session: 9f4e31d5-5f38-4b72-85e6-0d5b9d250cf5
Priority: normal

--- Requested follow-up ---
The current weekly report's ESG section relies entirely on a Morningstar public blog summary (1,450 funds renamed, approx. 30–31% of scope) and ESMA TRV portfolio-exposure proxies (fossil fuel AUM EUR 17.4bn → 5.9bn) to characterise fund outflows. The report explicitly flags that 'AUM outflows cannot be directly attributed from public materials.' Please use Morningstar Direct or Lipper to pull, for UCITS funds with ESG/sustainability-related names in scope of the ESMA guidelines (2024-05-14 to 2026-05-01): (1) monthly net AUM flows segmented by SFDR Article classification; (2) flow differential between funds that renamed vs. funds that retained ESG names; (3) portfolio turnover rates for funds above vs. below the 80% threshold requirement. The goal is to replace the current limitation with a quantified flow estimate usable by a PM.

### 2. result / sent

From: ESG Analyst
To: Compliance Officer
Created: 10/05/2026, 09:15:25

致 合规官：

协同任务已完成。执行方为 ESG分析师。
模式: adhoc
会话: 92781c81-2d44-4f38-9cf3-4e6d7b5448c0

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / ���周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
ESG Analyst (ESG分析师).
# Expertise
ESG scoring, carbon neutrality, green finance, CSR.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the sa

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · ESG分析师 · [auto-handoff] ESMA naming rules: replace public-summary AUM flow estimates with Morningstar Direct data

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **10/05/2026, 09:07:21**
Completed: **10/05/2026, 09:15:25**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
ESG Analyst (ESG分析师).
# Expertise
ESG scoring, carbon neutrality, green finance, CSR.

# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content (same numbers, same citations, same conclusions, idiomatic English prose).
- You MUST use your file-creation tool (shell, write_file, or your CLI's equivalent) to actually write BOTH files. Printing content as your chat reply alone is NOT acceptable.
- After writing, verify both files exist (e.g. `ls -la handoff_response.md handoff_response.en.md`). Your chat reply must be a single confirmation line in the form: `Wrote handoff_response.md (<bytes> bytes); wrote handoff_response.en.md (<bytes> bytes) — <one-sentence summary>`.
- This step is graded on the presence and content of BOTH files in the workspace. If either is missing, the step is treated as failed regardless of how good the inline content was, and downstream steps will fail.
- Do NOT echo the deliverables' full content in your chat reply. The reply is the confirmation line only; the deliverables live in the files.

# Task
# Incoming coordination request from Compliance Officer
Source workflow: 合规官 · 每周研究周报 (analyst:compliance-officer:weekly_report)
Source run: e8440d8d-1d26-4797-a4b3-0e0199f1eac1

# The question
The current weekly report's ESG section relies entirely on a Morningstar public blog summary (1,450 funds renamed, approx. 30–31% of scope) and ESMA TRV portfolio-exposure proxies (fossil fuel AUM EUR 17.4bn → 5.9bn) to characterise fund outflows. The report explicitly flags that 'AUM outflows cannot be directly attributed from public materials.' Please use Morningstar Direct or Lipper to pull, for UCITS funds with ESG/sustainability-related names in scope of the ESMA guidelines (2024-05-14 to 2026-05-01): (1) monthly net AUM flows segmented by SFDR Article classification; (2) flow differential between funds that renamed vs. funds that retained ESG names; (3) portfolio turnover rates for funds above vs. below the 80% threshold requirement. The goal is to replace the current limitation with a quantified flow estimate usable by a PM.

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
All "today / yesterday / this week / ���周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
ESG Analyst (ESG分析师).
# Expertise
ESG scoring, carbon neutrality, green finance, CSR.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the sa


## Attached Markdown

### 1. Mailbox · ESG分析师 · [auto-handoff] ESMA naming rules: replace public-summary AUM flow estimates with Morningstar Direct data

# ESG Fund Naming Rule Flow Impact: Handoff for the Compliance Officer

Date anchor: `2026-05-10`, from shell `date +%Y-%m-%d`. This analysis treats the requested window as `2024-05-14` to `2026-05-01`; the latest publicly citable SFDR flow splits available here run through `2026 Q1` and do not include fund-level monthly detail for `2026-04-01` to `2026-05-01`.

## Priority Conclusions

1. **The current report limitation cannot be fully removed.** This workspace has no terminal-level Morningstar Direct or Lipper export entitlement, so I cannot represent that the requested fund-level monthly pull has been performed, nor can I produce an audit-grade net-flow differential for renamed funds versus funds that retained ESG names, or turnover differentials above versus below the 80% threshold. The stronger replacement language is: public evidence shows the naming rules changed fund names and fossil-fuel portfolio exposure, but public materials are still insufficient to attribute AUM outflows directly to renaming events.

2. **The PM-usable directional flow read is: Article 8 still gathers money, while Article 9 and sustainable equity strategies remain the main redemption pocket.** LSEG Lipper's latest public quarterly data says European Article 8 funds gathered `EUR 77.58bn` in `2026 Q1`, Article 9 funds redeemed `EUR 2.68bn`, and Article 8+9 together attracted `EUR 74.91bn`, equal to `29.81%` of the European fund market's `EUR 251.24bn` net inflows. However, Article 8+9 equity funds had `EUR 0.49bn` of net redemptions, driven by `EUR 2.73bn` of Article 9 equity outflows and only partly offset by `EUR 2.24bn` of Article 8 equity inflows. [LSEG Lipper, 2026-05-05](https://lipperalpha.refinitiv.com/reports/2026/05/everything-green-flows-europe-q1-2026/)

3. **The evidence on “naming rules caused outflows” should be split into two layers.** ESMA's historical event study found that adding ESG-related words to UCITS fund names generated a `+8.9%` cumulative net-flow effect in the first year after the name change, with environmental terms contributing the strongest effect at about `+16%` in the first year; this shows that ESG naming has economic value. [ESMA TRV, 2025-04-10](https://www.esma.europa.eu/sites/default/files/2025-04/ESMA50-524821-3646_Fund_names_-_ESG_related_changes_and_their_impact_on_investment_flows.pdf) ESMA's later study says investor outflows partly contributed to fossil-fuel exposure reductions for funds retaining ESG words, but it does not publish a monthly renamed-versus-retained net-flow table that a PM can directly model. [ESMA TRV, 2025-12-17](https://www.esma.europa.eu/sites/default/files/2025-12/ESMA50-801628861-4423_TRV_Risk_Analysis_Impact_of_the_ESMA_Guidelines_on_the_use_of_ESG_or_sustainability-related_terms_in_fund_names.pdf)

4. **The portfolio-adjustment evidence is stronger than the flow-attribution evidence.** ESMA's portfolio sample of `4,017` EU UCITS funds with `EUR 1,995bn` in AUM shows that name changes alone reduced fossil-fuel exposure among funds using sustainability/environmental terms from `EUR 17.4bn` to `EUR 5.9bn`; funds with non-zero fossil-fuel exposure were about `60%` more likely to change name than zero-exposure funds, and each `1` percentage point compliance gap raised the probability of a name change by about `2` percentage points. Funds retaining ESG terms and subject to PAB exclusions cut fossil-fuel exposure by more than `40%` after `2024-05`, around `EUR 5bn` or `1%` of AUM; funds that removed ESG terms cut only around `EUR 0.5bn`, or `0.2%` of AUM. [ESMA TRV, 2025-12-17](https://www.esma.europa.eu/sites/default/files/2025-12/ESMA50-801628861-4423_TRV_Risk_Analysis_Impact_of_the_ESMA_Guidelines_on_the_use_of_ESG_or_sustainability-related_terms_in_fund_names.pdf)

5. **Recommended report wording: do not say “ESG funds are broadly seeing outflows.”** The more accurate PM framing is: “ESMA naming rules triggered large-scale renaming and fossil-fuel exposure reduction; in the latest public SFDR flow data, Article 8 remains flow-positive, while Article 9 and sustainable equity strategies remain under pressure. Fund-level outflow attribution requires a Morningstar Direct/Lipper export.”

## Request Status Table

| Requested item | Current deliverable conclusion | Citable numbers | Evidence status |
|---|---:|---:|---|
| Monthly net AUM flows by SFDR Article | Public materials only provide quarterly/periodic aggregates; terminal export is needed for monthly data | `2026 Q1`: Article 8 `+EUR 77.58bn`; Article 9 `-EUR 2.68bn`; Article 8+9 `+EUR 74.91bn` | LSEG Lipper public quarterly data; not fund-level monthly |
| Flow differential: renamed vs retained ESG names | Not directly quantifiable from public materials; ESMA provides directional flow and portfolio-adjustment evidence | Funds retaining ESG words reduced fossil-fuel exposure by `>40%`, around `EUR 5bn`; funds that removed ESG words reduced around `EUR 0.5bn` | ESMA portfolio evidence; not a net AUM flow differential |
| Portfolio turnover above vs below the 80% threshold | Public materials do not disclose fund-level turnover by threshold status; requires Morningstar/Lipper holdings or annual turnover fields | Available proxy: each `1` percentage point compliance gap corresponds to about `2` percentage points higher probability of renaming | ESMA logistic proxy; not turnover |
| Number that can replace the current report limitation | Can replace with “directional estimate plus data gap,” not with “attributed outflow” | Name changes reduced fossil-fuel exposure for relevant-term funds from `EUR 17.4bn` to `EUR 5.9bn` | Citable and useful for PM risk framing |

## Citable Data Points

| Topic | Number | Meaning | Source |
|---|---:|---|---|
| ESMA naming-rule scope | Rules published `2024-05-14`; existing fund compliance/renaming deadline `2025-05-21`; ESG/sustainability-related names require an `80%` investment threshold | Defines the event window and compliance pressure | [ESMA Guidelines](https://www.esma.europa.eu/document/guidelines-funds-names-using-ESG-or-sustainability-related-terms), [ESMA press release](https://www.esma.europa.eu/press-news/esma-news/esma-guidelines-establish-harmonised-criteria-use-esg-and-sustainability-terms) |
| Renaming activity | From `2024-01` to `2025-09`, at least `1,450` Article 8/9 funds were renamed, around `31%` of funds in scope of the ESMA naming guidelines; `2025 Q3` added `121` renamed funds, of which `64` dropped ESG-related terms, `44` swapped terms, and `13` added terms | Shows this was not an isolated phenomenon | [Morningstar SFDR Q3 2025](https://www.morningstar.com/content/cs-assets/v3/assets/blt9415ea4cc4157833/blt5c7c84c44b0328f2/69021a4ca53b8cd1069298c4/SFDR_Article_8_and_Article_9_Funds_Q3_2025.pdf) |
| SFDR flows | `2026 Q1`: Article 8 `+EUR 77.58bn`; Article 9 `-EUR 2.68bn`; Article 8+9 total `+EUR 74.91bn`; total European fund market net inflows `EUR 251.24bn` | Positive Article 8 flows mask Article 9 pressure | [LSEG Lipper Q1 2026](https://lipperalpha.refinitiv.com/reports/2026/05/everything-green-flows-europe-q1-2026/) |
| Equity-strategy pressure | `2026 Q1`: Article 8+9 equity total `-EUR 0.49bn`; Article 9 equity `-EUR 2.73bn`; Article 8 equity `+EUR 2.24bn`; Equity Global Article 8+9 `-EUR 8.47bn`; Equity US Article 8+9 `-EUR 7.37bn` | Outflows are concentrated in sustainable equity/Article 9, not the overall Article 8+9 pool | [LSEG Lipper Q1 2026](https://lipperalpha.refinitiv.com/reports/2026/05/everything-green-flows-europe-q1-2026/) |
| Historical economic value of ESG names | Adding ESG terms produced a first-year cumulative net-flow effect of `+8.9%`; environmental terms around `+16%`; sample includes `1,554` UCITS ESG-term additions | ESG naming itself attracts money, explaining the business cost of dropping names | [ESMA TRV, 2025-04-10](https://www.esma.europa.eu/sites/default/files/2025-04/ESMA50-524821-3646_Fund_names_-_ESG_related_changes_and_their_impact_on_investment_flows.pdf) |
| Fossil-fuel exposure reduction | Name changes reduced fossil-fuel exposure for funds with sustainability/environmental names from `EUR 17.4bn` to `EUR 5.9bn`; funds retaining ESG words cut `>40%`, around `EUR 5bn`; funds removing ESG words cut around `EUR 0.5bn` | Portfolio-adjustment evidence is stronger than flow attribution | [ESMA TRV, 2025-12-17](https://www.esma.europa.eu/sites/default/files/2025-12/ESMA50-801628861-4423_TRV_Risk_Analysis_Impact_of_the_ESMA_Guidelines_on_the_use_of_ESG_or_sustainability-related_terms_in_fund_names.pdf) |

## PM-Usable Estimate

| Estimate target | Suggested value/direction | Confidence | Use |
|---|---:|---|---|
| Market-wide net redemption caused by ESG naming rules | Do not assign a single negative number; Article 8+9 still had `+EUR 74.91bn` in `2026 Q1` | Medium | Avoid describing the whole ESG label as outflowing |
| Article 9 flow pressure | `2026 Q1 -EUR 2.68bn`; Morningstar `2025` full-year Article 9 `-EUR 23bn`; LSEG `2025` full-year Article 9 `-EUR 25.52bn` | High | PM can treat Article 9 as a persistent redemption-risk pool |
| Sustainable equity pressure | `2026 Q1` Article 8+9 equity `-EUR 0.49bn`; Equity Global `-EUR 8.47bn`; Equity US `-EUR 7.37bn` | High | Apply a higher liquidity discount to ESG equity beta, thematic funds, and Article 9 equity |
| Renamed versus retained ESG-name flow differential | Do not quantify yet; public materials lack the fund-level counterfactual | Low | Requires terminal export and difference-in-differences |
| Turnover differential above versus below 80% threshold | Do not quantify yet; public materials lack fund-level turnover and threshold status | Low | Requires holdings churn or reported portfolio turnover |

## Next Terminal Export Specification

To truly replace the “AUM outflows cannot be directly attributed” limitation, a colleague with access should export the following fields from Morningstar Direct or Lipper:

| Module | Required fields |
|---|---|
| Fund master | Fund ID, ISIN, share class, oldest share class flag, legal name history, domicile, UCITS flag, asset class, Morningstar/Lipper category, active/passive, index fund flag, manager, inception date, base currency |
| SFDR | monthly SFDR Article `6/8/9`, Article change date, minimum/planned sustainable investment percentage, EU taxonomy alignment, PAB/CTB exclusion flag |
| Flows | monthly total net assets, monthly estimated net flow, organic growth rate, returns, FX-adjusted EUR flow |
| Naming-rule labels | whether the monthly legal name matches the ESMA term list; event type as retained, dropped, swapped, added; term category as sustainability, environmental, social/governance, transition, impact |
| Portfolio and turnover | monthly/quarterly holdings, issuer LEI, portfolio weights, fossil-fuel exclusion breach flag, reported portfolio turnover; where reported turnover is missing, compute holdings churn as `0.5 * sum(abs(weight_t - weight_t-1))` |

Recommended model:

1. **Monthly net-flow table**: aggregate EUR net flow and organic growth by `month × SFDR Article × asset class × active/passive × renamed/retained`.
2. **Renaming impact**: run matched difference-in-differences around `2024-05-14`, `2024-11-21`, and `2025-05-21`; control for peer category, AUM, age, trailing 12-month return, fees, active/passive status, and manager fixed effects.
3. **80% threshold/turnover**: split on `minimum/planned sustainable investment percentage >= 80%` or an aligned-investment proxy; compare winsorized median holdings churn and reported turnover over `6`-month and `12`-month windows before and after `2024-05`.
4. **PM output**: report the monthly `renamed - retained` flow spread, `Article 8 vs Article 9` flow spread, and `below 80% - above 80%` turnover spread, with Article 9 equity shown separately.

## Suggested Report Replacement Text

Suggested replacement:

> Public evidence on ESMA's fund-naming guidelines shows material changes to fund names and portfolio exposures: Morningstar estimates that at least `1,450` Article 8/9 funds were renamed from `2024-01` to `2025-09`, around `31%` of the rule-scope universe; ESMA's UCITS portfolio sample shows that name changes reduced fossil-fuel exposure among sustainability/environmental-name funds from `EUR 17.4bn` to `EUR 5.9bn`. However, as of `2026-05-10`, publicly verifiable data still cannot directly attribute AUM outflows to “renamed versus retained ESG names.” The latest LSEG Lipper data show Article 8 funds still had `EUR 77.58bn` of net inflows in `2026 Q1`, while Article 9 funds had `EUR 2.68bn` of net outflows; pressure is concentrated in Article 9 and sustainable equity strategies, not the full ESG/SFDR Article 8+9 pool. Fund-level attribution requires a Morningstar Direct/Lipper monthly export.

## Sources

- [ESMA, Guidelines on funds' names using ESG or sustainability-related terms](https://www.esma.europa.eu/document/guidelines-funds-names-using-ESG-or-sustainability-related-terms)
- [ESMA press release, 2024-05-14](https://www.esma.europa.eu/press-news/esma-news/esma-guidelines-establish-harmonised-criteria-use-esg-and-sustainability-terms)
- [ESMA TRV Risk Analysis, Fund names: ESG-related changes and their impact on investment flows, 2025-04-10](https://www.esma.europa.eu/sites/default/files/2025-04/ESMA50-524821-3646_Fund_names_-_ESG_related_changes_and_their_impact_on_investment_flows.pdf)
- [ESMA TRV Risk Analysis, Impact of ESMA Guidelines on ESG/sustainability fund names, 2025-12-17](https://www.esma.europa.eu/sites/default/files/2025-12/ESMA50-801628861-4423_TRV_Risk_Analysis_Impact_of_the_ESMA_Guidelines_on_the_use_of_ESG_or_sustainability-related_terms_in_fund_names.pdf)
- [Morningstar Sustainalytics, SFDR Article 8 and Article 9 Funds: Q3 2025 in Review](https://www.morningstar.com/content/cs-assets/v3/assets/blt9415ea4cc4157833/blt5c7c84c44b0328f2/69021a4ca53b8cd1069298c4/SFDR_Article_8_and_Article_9_Funds_Q3_2025.pdf)
- [LSEG Lipper, Everything Green Flows, Europe: Q1 2026, 2026-05-05](https://lipperalpha.refinitiv.com/reports/2026/05/everything-green-flows-europe-q1-2026/)

### 2. Mailbox · ESG分析师 · [auto-handoff] ESMA naming rules: replace public-summary AUM flow estimates with Morningstar Direct data

# ESG 基金命名规则流量影响：给 Compliance Officer 的交接结论

日期锚点：`2026-05-10`，来自 shell `date +%Y-%m-%d`。本分析按请求窗口 `2024-05-14` 至 `2026-05-01` 处理；公开可引用的最新分项 SFDR 流量数据截至 `2026 Q1`，未覆盖 `2026-04-01` 至 `2026-05-01` 的基金级月度明细。

## 优先结论

1. **不能把当前周报中的限制完全删除。** 在本工作区没有 Morningstar Direct 或 Lipper 终端级导出权限，因此不能声称已经完成请求中的基金级月度拉取，也不能审计级量化“改名基金 vs 保留 ESG 名称基金”的净流量差异或“80% 阈值以上 vs 以下”的组合换手率差异。可以替换为更强的表述：公开资料已证明命名规则改变了基金名称和组合化石燃料敞口，但公开资料仍不足以把 AUM 流出直接归因到改名事件。

2. **PM 可用的方向性流量判断是：Article 8 仍吸收资金，Article 9 和可持续股票策略是主要流出点。** LSEG Lipper 的最新公开季度数据称，`2026 Q1` 欧洲 Article 8 基金净流入 `EUR 77.58bn`，Article 9 基金净流出 `EUR 2.68bn`，Article 8+9 合计净流入 `EUR 74.91bn`，占欧洲基金市场 `EUR 251.24bn` 净流入的 `29.81%`；但 Article 8+9 股票基金合计净赎回 `EUR 0.49bn`，其中 Article 9 股票赎回 `EUR 2.73bn`、Article 8 股票流入 `EUR 2.24bn`。[LSEG Lipper, 2026-05-05](https://lipperalpha.refinitiv.com/reports/2026/05/everything-green-flows-europe-q1-2026/)

3. **对“命名规则导致流出”的可引用证据应拆成两层。** ESMA 的历史事件研究显示，给 UCITS 基金名称新增 ESG 相关词，在改名后第一年带来 `+8.9%` 的累计净流入，环境类词贡献最强，第一年累计约 `+16%`；这说明 ESG 名称有经济价值。[ESMA TRV, 2025-04-10](https://www.esma.europa.eu/sites/default/files/2025-04/ESMA50-524821-3646_Fund_names_-_ESG_related_changes_and_their_impact_on_investment_flows.pdf) 但 ESMA 后续研究只说明保留 ESG 词的基金存在净投资者流出贡献因素，并没有公布可直接用于 PM 模型的 renamed vs retained 月度净流量表。[ESMA TRV, 2025-12-17](https://www.esma.europa.eu/sites/default/files/2025-12/ESMA50-801628861-4423_TRV_Risk_Analysis_Impact_of_the_ESMA_Guidelines_on_the_use_of_ESG_or_sustainability-related_terms_in_fund_names.pdf)

4. **组合调整证据比流量归因更硬。** ESMA 覆盖 `4,017` 只 EU UCITS、`EUR 1,995bn` AUM 的组合样本显示，基金名称变化本身使使用 sustainability/environmental 相关词基金的化石燃料敞口从 `EUR 17.4bn` 降到 `EUR 5.9bn`；非零化石燃料敞口基金改名概率比零敞口基金高约 `60%`，每 `1` 个百分点合规缺口使改名概率上升约 `2` 个百分点。保留 ESG 词且受 PAB 排除约束的基金自 `2024-05` 后把化石燃料敞口削减逾 `40%`，约 `EUR 5bn`、即 `1%` AUM；已移除 ESG 词的基金仅减少约 `EUR 0.5bn`、即 `0.2%` AUM。[ESMA TRV, 2025-12-17](https://www.esma.europa.eu/sites/default/files/2025-12/ESMA50-801628861-4423_TRV_Risk_Analysis_Impact_of_the_ESMA_Guidelines_on_the_use_of_ESG_or_sustainability-related_terms_in_fund_names.pdf)

5. **建议周报改写口径：不要写“ESG 基金普遍外流”。** 更准确的 PM 口径是：“ESMA 命名规则触发了大规模重命名和组合去化石燃料敞口；截至最新公开 SFDR 流量，Article 8 资金面仍为正，Article 9 及可持续股票策略继续承压。基金级 outflow attribution 需要 Morningstar Direct/Lipper 导出后才能量化。”

## 请求项状态表

| 请求项 | 当前可交付结论 | 可引用数字 | 证据状态 |
|---|---:|---:|---|
| 按 SFDR Article 分类的月度净 AUM flows | 公开资料只能给季度/阶段性汇总；终端导出后才能补月度 | `2026 Q1`: Article 8 `+EUR 77.58bn`; Article 9 `-EUR 2.68bn`; Article 8+9 `+EUR 74.91bn` | LSEG Lipper 公开季度数据；非基金级月度 |
| 改名 vs 保留 ESG 名称的 flow differential | 不能用公开资料直接量化；ESMA 只给了流量影响方向和组合调整证据 | 保留 ESG 词基金的化石燃料敞口削减 `>40%`，约 `EUR 5bn`; 已移除 ESG 词基金减少约 `EUR 0.5bn` | ESMA 组合证据；不是净 AUM flow differential |
| 80% 阈值以上 vs 以下的组合换手率 | 公开资料没有披露基金级 turnover 分组；需 Morningstar/Lipper holdings 或 annual turnover 字段 | 可用 proxy：`1` 个百分点合规缺口对应约 `2` 个百分点更高改名概率 | ESMA logistic proxy；不是 turnover |
| 可替代当前周报限制的数字 | 可以替代为“方向性估计 + 数据缺口”，不能替代为“已归因 outflow” | 命名变化使相关词基金化石燃料敞口 `EUR 17.4bn -> EUR 5.9bn` | 可引用，适合 PM 风险判断 |

## 可引用数据点

| 主题 | 数字 | 含义 | 来源 |
|---|---:|---|---|
| ESMA 命名规则范围 | 规则发布 `2024-05-14`; 既有基金合规/改名期限 `2025-05-21`; ESG/可持续相关名称须满足 `80%` 投资阈值 | 定义事件窗口和合规压力 | [ESMA Guidelines](https://www.esma.europa.eu/document/guidelines-funds-names-using-ESG-or-sustainability-related-terms), [ESMA press release](https://www.esma.europa.eu/press-news/esma-news/esma-guidelines-establish-harmonised-criteria-use-esg-and-sustainability-terms) |
| 命名活动 | 自 `2024-01` 至 `2025-09`，至少 `1,450` 只 Article 8/9 基金改名，约为 ESMA 命名规则范围内基金的 `31%`; `2025 Q3` 新增 `121` 只改名，其中 `64` 只删除 ESG 相关词、`44` 只替换词、`13` 只新增词 | 说明不是孤立现象 | [Morningstar SFDR Q3 2025](https://www.morningstar.com/content/cs-assets/v3/assets/blt9415ea4cc4157833/blt5c7c84c44b0328f2/69021a4ca53b8cd1069298c4/SFDR_Article_8_and_Article_9_Funds_Q3_2025.pdf) |
| SFDR 资金面 | `2026 Q1`: Article 8 `+EUR 77.58bn`; Article 9 `-EUR 2.68bn`; Article 8+9 合计 `+EUR 74.91bn`; 欧洲基金市场总净流入 `EUR 251.24bn` | Article 8 正流入掩盖 Article 9 压力 | [LSEG Lipper Q1 2026](https://lipperalpha.refinitiv.com/reports/2026/05/everything-green-flows-europe-q1-2026/) |
| 股票策略压力 | `2026 Q1`: Article 8+9 股票合计 `-EUR 0.49bn`; Article 9 股票 `-EUR 2.73bn`; Article 8 股票 `+EUR 2.24bn`; Equity Global Article 8+9 `-EUR 8.47bn`; Equity US Article 8+9 `-EUR 7.37bn` | 流出集中在可持续股票/Article 9，而非 Article 8 总体 | [LSEG Lipper Q1 2026](https://lipperalpha.refinitiv.com/reports/2026/05/everything-green-flows-europe-q1-2026/) |
| ESG 名称的历史经济价值 | 新增 ESG 词后第一年累计净流入影响 `+8.9%`; 环境类词约 `+16%`; 样本包括 `1,554` 次 UCITS ESG 词新增事件 | ESG 名称本身有资金吸引力，解释为什么删除名称可能有商业代价 | [ESMA TRV, 2025-04-10](https://www.esma.europa.eu/sites/default/files/2025-04/ESMA50-524821-3646_Fund_names_-_ESG_related_changes_and_their_impact_on_investment_flows.pdf) |
| 组合去化石燃料敞口 | 名称变化使 sustainability/environmental 词基金化石燃料敞口 `EUR 17.4bn -> EUR 5.9bn`; 保留 ESG 词基金削减 `>40%`、约 `EUR 5bn`; 移除 ESG 词基金削减约 `EUR 0.5bn` | 组合调整证据强于流量归因 | [ESMA TRV, 2025-12-17](https://www.esma.europa.eu/sites/default/files/2025-12/ESMA50-801628861-4423_TRV_Risk_Analysis_Impact_of_the_ESMA_Guidelines_on_the_use_of_ESG_or_sustainability-related_terms_in_fund_names.pdf) |

## PM 可用估计

| 估计对象 | 建议数值/方向 | 置信度 | 用法 |
|---|---:|---|---|
| ESG 命名规则导致的全市场净赎回 | 不建议给单一负数；`2026 Q1` Article 8+9 仍合计 `+EUR 74.91bn` | 中 | 避免把 ESG 标签整体描述为流出 |
| Article 9 流量压力 | `2026 Q1 -EUR 2.68bn`; Morningstar `2025` 全年 Article 9 `-EUR 23bn`; LSEG `2025` 全年 Article 9 `-EUR 25.52bn` | 高 | PM 可把 Article 9 作为持续赎回风险池 |
| 可持续股票压力 | `2026 Q1` Article 8+9 股票 `-EUR 0.49bn`; Equity Global `-EUR 8.47bn`; Equity US `-EUR 7.37bn` | 高 | 对 ESG equity beta、主题基金和 Article 9 equity 设置更高流动性折价 |
| 改名基金 vs 保留 ESG 名称 flow differential | 暂不量化；公开资料没有基金级 counterfactual | 低 | 需要终端导出后用 difference-in-differences |
| 80% 阈值上下 turnover differential | 暂不量化；公开资料没有基金级 turnover 与阈值状态 | 低 | 需要 holdings churn 或 reported portfolio turnover |

## 下一步终端导出规格

为了真正替换“无法直接归因 AUM outflows”的限制，建议由有权限的同事在 Morningstar Direct 或 Lipper 中导出以下字段：

| 模块 | 必要字段 |
|---|---|
| 基金主表 | Fund ID、ISIN、share class、oldest share class flag、legal name history、domicile、UCITS flag、asset class、Morningstar/Lipper category、active/passive、index fund flag、manager、inception date、base currency |
| SFDR | monthly SFDR Article `6/8/9`、Article change date、minimum/planned sustainable investment percentage、EU taxonomy alignment、PAB/CTB exclusion flag |
| 流量 | monthly total net assets、monthly estimated net flow、organic growth rate、returns、FX-adjusted EUR flow |
| 命名规则标签 | 每月 legal name 是否命中 ESMA 词库；事件类型为 retained、dropped、swapped、added；词组类别为 sustainability、environmental、social/governance、transition、impact |
| 组合与换手 | monthly/quarterly holdings、issuer LEI、portfolio weights、fossil-fuel exclusion breach flag、reported portfolio turnover；若 reported turnover 缺失，用 `0.5 * sum(abs(weight_t - weight_t-1))` 计算 holdings churn |

建议模型：

1. **月度净流量表**：按 `month × SFDR Article × asset class × active/passive × renamed/retained` 汇总 EUR net flow 与 organic growth。
2. **改名影响**：以 `2024-05-14`、`2024-11-21`、`2025-05-21` 为事件节点，做 matched difference-in-differences；控制同类基金、AUM、年龄、过去 12 个月回报、费用、主动/被动、管理人固定效应。
3. **80% 阈值/换手率**：用 `minimum/planned sustainable investment percentage >= 80%` 或合规投资比例 proxy 切分；对 `2024-05` 前后 `6` 个月、`12` 个月 holdings churn 与 reported turnover 做 winsorized 中位数比较。
4. **PM 输出**：给出 `renamed - retained` 的月度 flow spread、`Article 8 vs Article 9` flow spread、以及 `below 80% - above 80%` turnover spread，并对 Article 9 equity 单独列示。

## 建议周报替换文字

可替换为：

> ESMA 基金命名规则的公开证据显示，规则已显著改变基金名称和组合暴露：Morningstar 估计自 `2024-01` 至 `2025-09` 至少 `1,450` 只 Article 8/9 基金改名，约占规则范围 `31%`；ESMA 的 UCITS 组合样本显示，名称变化使 sustainability/environmental 名称基金的化石燃料敞口从 `EUR 17.4bn` 降至 `EUR 5.9bn`。但截至 `2026-05-10` 可公开核验的数据仍不能直接把 AUM 流出归因到“改名 vs 保留 ESG 名称”。最新 LSEG Lipper 数据显示，`2026 Q1` Article 8 基金仍净流入 `EUR 77.58bn`，Article 9 净流出 `EUR 2.68bn`；压力集中于 Article 9 和可持续股票策略，而非整个 ESG/SFDR Article 8+9 资金池。基金级归因需 Morningstar Direct/Lipper 月度导出后补齐。

## 来源

- [ESMA, Guidelines on funds' names using ESG or sustainability-related terms](https://www.esma.europa.eu/document/guidelines-funds-names-using-ESG-or-sustainability-related-terms)
- [ESMA press release, 2024-05-14](https://www.esma.europa.eu/press-news/esma-news/esma-guidelines-establish-harmonised-criteria-use-esg-and-sustainability-terms)
- [ESMA TRV Risk Analysis, Fund names: ESG-related changes and their impact on investment flows, 2025-04-10](https://www.esma.europa.eu/sites/default/files/2025-04/ESMA50-524821-3646_Fund_names_-_ESG_related_changes_and_their_impact_on_investment_flows.pdf)
- [ESMA TRV Risk Analysis, Impact of ESMA Guidelines on ESG/sustainability fund names, 2025-12-17](https://www.esma.europa.eu/sites/default/files/2025-12/ESMA50-801628861-4423_TRV_Risk_Analysis_Impact_of_the_ESMA_Guidelines_on_the_use_of_ESG_or_sustainability-related_terms_in_fund_names.pdf)
- [Morningstar Sustainalytics, SFDR Article 8 and Article 9 Funds: Q3 2025 in Review](https://www.morningstar.com/content/cs-assets/v3/assets/blt9415ea4cc4157833/blt5c7c84c44b0328f2/69021a4ca53b8cd1069298c4/SFDR_Article_8_and_Article_9_Funds_Q3_2025.pdf)
- [LSEG Lipper, Everything Green Flows, Europe: Q1 2026, 2026-05-05](https://lipperalpha.refinitiv.com/reports/2026/05/everything-green-flows-europe-q1-2026/)

