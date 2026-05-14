---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review: A-Share Weekly Strategy Research (Final Week of April 2026)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review: A-Share Weekly Strategy Research (Final Week of April 2026)

- Reviewer: QA Manager
- Scope: Step 01 (plan) / Step 02 (research) / Step 03 (visualization report)
- Review date: 2026-05-03

> Workspace baseline: this node has `02_weekly_research.md`, `02_weekly_research.en.md`, `03_weekly_report.html`, `03_weekly_report.md`. **`01_weekly_plan.md` and `01_weekly_plan.en.md` are missing.** Downstream steps reconstructed the research plan from the prior-step summary in chat context, and disclosed this explicitly in their own front matter.

## ⚠️ Upstream Gaps

- `01_weekly_plan.md` — **not found in workspace**. Downstream `02_weekly_research.md` and `03_weekly_report.md/html` rebuilt the five research questions and scope from the prior-step summary, and noted "01_weekly_plan.md missing" in their front matter.
- `01_weekly_plan.en.md` — **not found in workspace**. As above; the English plan could not be cross-checked, but `02_weekly_research.en.md` and the English passages of the HTML report align with the reconstructed five-question structure.
- Impact: this audit cannot perform a strict question-by-question mapping from "plan → research". It only verifies the relationship across the five themes listed in the prior-step summary: Politburo meeting, PMI, Q1 earnings, index/style/sector, and chart-ready datasets.

## 1. File Manifest

| Declared deliverable | Exists in workspace | Bytes | Note |
|---|---|---:|---|
| `01_weekly_plan.md` | No | — | Plan missing; downstream reconstructed from summary, but the Chinese plan text could not be line-checked |
| `01_weekly_plan.en.md` | No | — | English plan missing; same as above |
| `02_weekly_research.md` | Yes | 18,436 | Five-question research note complete: evidence, source URLs, caveats, and chart-ready tables |
| `02_weekly_research.en.md` | Yes | 22,425 | English version structurally aligned with the Chinese version; question numbering, values, and URLs match |
| `03_weekly_report.html` | Yes | 50,640 | Includes 6 inline dashboards/tables, 3-tier risk light, and the next-week watchlist |
| `03_weekly_report.md` | Yes | 15,217 | Plain-text companion of the HTML, sharing the same backbone |
| `QA_review.md` / `QA_review.en.md` | Yes (this file) | — | Output of this step |

## 2. Cross-Step Consistency

Spot-check of values, dates, and tickers that appear across multiple steps:

| Item | `02_weekly_research.md` | `03_weekly_report.md` | `03_weekly_report.html` | Consistency |
|---|---|---|---|---|
| STAR 50 (000688), final-week return | +8.07% | +8.07% | +8.07% (exec summary + Table 2.1 + dashboard) | ✅ Consistent |
| STAR 50, April full-month return | +21.02% | +21.02% | +21.02% | ✅ Consistent |
| April manufacturing PMI | 50.3 (MoM -0.1) | 50.3 (MoM -0.1) | 50.3 | ✅ Consistent; March baseline 50.4 also consistent across all three |
| Q1 number of disclosing companies | 5,503 (primary; with 5,501 from Choice mobile and 5,507 from Sina noted as alt counts) | 5,503 | 5,503 | ✅ Primary count consistent. Research note keeps the 5,501 / 5,507 alt counts; the HTML/MD report drops them — not a contradiction, but a precision loss (see §4 recommendation 1) |
| Q1 all-A attributable net profit | RMB1.59tn, +6.7% YoY | RMB1.59tn, +6.7% | RMB1.59tn, +6.7% | ✅ Consistent |
| Politburo meeting date | 2026-04-28 | 2026-04-28 | 2026-04-28 | ✅ Consistent |
| CSI 800 Telecom (000936): final week / April / volume change | -1.68% / +11.92% / -23.3% | -1.68% / +11.92% / -23.3% | -1.68% / +11.92% / -23.3% | ✅ Consistent |
| Trading days in the final week | 4 trading days (called out in the research caveats) | Not restated in the body | Not restated in the executive summary | ⚠️ Not a contradiction, but the report does not surface the "4 trading days only" caveat (see §4 recommendation 2) |
| ChiNext Q1 net-profit growth | Above 22% (alt: +22.56%) | Above 22% | Above 22% | ✅ Consistent |
| Main board / BSE Q1 net-profit growth | +3.58% / -7.14% (Choice mobile) | +3.58% / -7.14% | +3.58% / -7.14% | ✅ Consistent |

Conclusion: no cross-step contradictions in the core values, dates, or tickers. The only precision delta is the Q1 disclosure count across three vendors (5,501 / 5,503 / 5,507): the research note keeps all three, while the HTML/MD report uses only the primary 5,503. This is an acceptable simplification, but a vendor-source footnote should be preserved for traceability in the HTML.

## 3. Narrative Coherence

Because `01_weekly_plan.md` is missing, this section uses the five themes listed in the prior-step summary as the baseline:

| Plan theme (from summary) | Research-note question | Report landing | Assessment |
|---|---|---|---|
| Politburo meeting | Q1 | Exec-summary point 2 + §III Question 1 + dashboard "policy-5-dimension" panel | Closed loop |
| April PMI | Q2 | Exec-summary point 3 + §III Question 2 + Table 2.4 + yellow-light risk (price-vs-demand scissor) | Closed loop |
| Q1 earnings wrap | Q3 | Exec-summary point 4 + §III Question 3 + Table 2.6 + green-light risk | Closed loop |
| Index / style rotation | Q4 | Exec-summary points 1 & 5 + §III Question 4 + Tables 2.1/2.2/2.5 + red-light (STAR 50 overheating) | Closed loop |
| Sector allocation / chart datasets | Q5 + 6 charts | §III Question 5 + Table 2.3 + portfolio summary + 6 inline HTML dashboards | Closed loop |

- **No orphan questions**: all five questions are echoed in the report.
- **No unsupported conclusions**: every quantitative claim in the report is traceable to a research-note table, with full source URLs (People's Daily, NBS, Eastmoney, Sina, AkShare).
- **Minor dropped detail**: the research note's caveat for Q3 mentions "ICBC Q1 net profit RMB86.941bn ranks first" — the report compresses this into one inline sentence and does not surface it in any dashboard. Acceptable simplification.
- **Politburo "anti-involution" chain**: the research note maps it to non-ferrous metals, chemicals, and selected manufacturing; the sector ranking (Q5) places non-ferrous / energy in the second tier, internally consistent.

## 4. Editorial Quality

Four concrete edit suggestions for `03_weekly_report.html` / `03_weekly_report.md`:

1. **Preserve a Q1 vendor-count footnote.** Add a small footnote (or `<small>` block) below the HTML "Q1 earnings summary" table that records the three vendor counts: Choice web (5,503 / RMB17.65tn) / Choice mobile (5,501 / RMB17.68tn) / Sina (5,507 / RMB17.70tn / +6.76%). This stops a downstream reader from treating 5,503 / 17.65 / +6.7% as a single canonical figure.
2. **Surface the "4 trading days only" caveat.** Annotate either the executive summary or Table 2.1 header with: "Final week covers only 4 trading days (2026-04-24 to 2026-04-30, just before the Labor Day holiday)." Today this caveat lives only in the research-note caveat block; without it, a PM may overstate trend strength when comparing +8.07% against a normal full-5-day week.
3. **Polish dashboard labels and axes.** The 6 HTML dashboards should add explicit unit ("%"), window ("2026-04-24 to 2026-04-30"), and source labels. The sector-ranking bar chart should overlay a sub-marker on CSI 800 Telecom showing "volume change -23.3%", so the "rotation out of telecom highs" signal reads at a glance.
4. **Lead risk lights with the numbers.** The red-light "STAR 50 short-term overbought / crowded trade" line should become "STAR 50 crowding risk after +8.07% week / +21.02% month", embedding the numbers in the title. Similarly, anchor the green light with "+200%" and "+6.7%" so a PM scanning the risk page picks up the evidence intensity instantly.

## 5. Recommended Revisions

In priority order:

- **[P0 / must-fix]** Add a prominent disclosure at the top of both the HTML and MD reports stating that "`01_weekly_plan.md` was missing and the plan was reconstructed from the prior-step summary." The research note already discloses this; the report only mentions it in a single front-matter line and should upgrade it to a warning callout.
- **[P0 / must-fix]** Add the Q1 vendor-source footnote (5,501 / 5,503 / 5,507; 17.65 / 17.68 / 17.70 RMB tn) to the dashboard and Table 2.6. The simplification is acceptable for PM reading, but as a distributable artifact the source delta should remain auditable.
- **[P1 / should-fix]** Annotate the "4 trading days only" window in the executive summary or Table 2.1 to prevent misreading versus a normal 5-day week.
- **[P1 / should-fix]** Complete the unit / window / source watermarks on the 6 inline HTML dashboards; overlay the "CSI 800 Telecom volume change -23.3%" sub-marker on the sector-ranking chart.
- **[P2 / optional]** Embed key numbers (+8.07% / +21.02% / +6.7% / +200%) in the red/green/yellow risk-light titles so the evidence strength reads in a quick scan.
- **[P2 / optional]** In the next-week watchlist, merge "May 9–15 April CPI/PPI" with "May 10–15 social financing" into one line ("Mid-May April macro-financial data double release") and add a one-sentence note on the transmission path to growth-stock valuations, to avoid duplicate watchlist rows.

## 6. Overall Grade

`needs-revision`

- One-sentence rationale: core values / dates / tickers are fully self-consistent across the three steps and the narrative is closed-loop with complete evidence; however, the missing `01_weekly_plan.md/.en.md` upstream needs a prominent disclosure in the report, and both the Q1 vendor-source delta and the "4 trading days only" caveat should be surfaced before distribution. The required edits are small and finishable in roughly an hour.

---

## Coordination Requests

```json
{"follow_ups":[
  {"to":"ashare-strategist","subject":"Backfill 01_weekly_plan.md and add report-side source footnotes","question":"Before distribution, please complete two items: (1) Re-create 01_weekly_plan.md and 01_weekly_plan.en.md by reverse-engineering the five research questions, scope, data sources and window definitions from the already-published 02 / 03 deliverables; and add a callout at the top of 03_weekly_report.html stating 'upstream plan was missing at generation time and has been reconstructed from the prior-step summary.' (2) Add a footnote under the Q1 earnings dashboard and Table 2.6 listing the three vendor counts — Choice web (5,503 / RMB17.65tn), Choice mobile (5,501 / RMB17.68tn), Sina (5,507 / RMB17.70tn / +6.76%) — to prevent downstream PMs from treating the simplified 5,503 / 17.65 / +6.7% as a single canonical figure. Please confirm when complete.","priority":"high"}
]}
```
