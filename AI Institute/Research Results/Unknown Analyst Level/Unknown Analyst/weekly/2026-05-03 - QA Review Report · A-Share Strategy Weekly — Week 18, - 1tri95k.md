---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report · A-Share Strategy Weekly — Week 18, 2026 (Apr 27–May 1)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report · A-Share Strategy Weekly — Week 18, 2026 (Apr 27–May 1)

**Reviewer:** QA Manager, Research Quality  
**Review Date:** 2026-05-03  
**Scope:** All deliverables produced in Steps 01–03

---

## 1. File Manifest

| Expected File | Present in Workspace | Notes |
|---|:---:|---|
| `01_weekly_plan.md` | Yes | 3,260 bytes, content complete |
| `01_weekly_plan.en.md` | Yes | 3,220 bytes, content complete |
| `02_weekly_research.md` | Yes | 16,404 bytes, all 4 research questions answered with supporting data tables |
| `02_weekly_research.en.md` | Yes | 19,144 bytes, English research draft |
| `03_weekly_report.html` | Yes | 39,023 bytes, contains 4 inline SVG charts |
| `03_weekly_report.md` | Yes | 11,016 bytes, plain-text companion version |

**Verdict:** All required files are present with non-trivial size (all well above 200 bytes). No gaps.

---

## 2. Cross-Step Consistency

Six numerical/date/ticker data points were spot-checked across steps:

| Data Point | 01_plan | 02_research | 03_report | Status |
|---|---|---|---|:---:|
| April Manufacturing PMI | 50.3 | 50.3 | 50.3 | ✓ Consistent |
| All-A ex-financials net profit growth YoY | Not applicable (plan stage) | +11.7% | +11.7% | ✓ Consistent |
| CSI STAR 50 weekly return | Not applicable | +8.07% | +8.07% | ✓ Consistent |
| May 6 lockup expiry total market cap | Not applicable (plan estimated ~CNY 60bn for the full week) | CNY 44.69bn | CNY 44.69bn | ✓ Consistent |
| Jinghe Integrated (688249) lockup amount / share ratio | Not applicable | CNY 27.695bn / 40.81% | CNY 27.695bn / 40.81% | ✓ Consistent |
| **Apr 29 margin balance (quantitative description)** | Not applicable | **Two figures coexist with conflicting qualifiers** (see below) | **Inconsistency carried into 03_report** | ⚠️ **Needs correction** |

### ⚠️ Key Inconsistency: Two Margin Balance Figures on Apr 29

- `02_weekly_research.md`, data table (lines 56–59): **Apr 29 total market margin loan balance = CNY 27,038.92bn**, up +CNY 15.542bn from the prior day.
- `02_weekly_research.md`, narrative interpretation (line 61): **"Apr 29 A-share liang-rong balance = CNY 27,323.02bn, the third-highest on record, representing 2.59% of tradeable market cap."**
- `03_weekly_report.md` (line 18): Attaches the qualifiers "third-highest on record, 2.59% of tradeable market cap" to the **smaller figure of CNY 27,038.92bn**, while in `02_research` those same qualifiers were attached to CNY 27,323.02bn.

**Explanation:** The two figures likely reflect different scopes (one = pure margin loan balance from exchange-level summaries; the other = total liang-rong including short-selling balances, sourced from Shanghai Securities News). However, neither draft clearly labels which figure comes from which source. By reassigning the "third-highest on record" qualifier to the lower figure, `03_report` introduces a material attribution error that could mislead a portfolio manager reading standalone.

---

## 3. Narrative Coherence

### Planner Questions → Research Answers → Report Conclusions

| Question from 01_plan | 02_research Coverage | 03_report Conclusion | Loop Closed? |
|---|---|---|:---:|
| Q1: Is the Q1 earnings inflection point confirmed for all-A ex-financials? | Section on Q1: full data table, sector breakdown | Conclusion 1: inflection confirmed, structural (not broad-based) recovery | ✓ |
| Q2: Was the pre-holiday leverage unwind seasonal or a trend reversal? | Section on Q2: net margin balance +CNY 19.362bn Apr 27–29 | Conclusion 2: "node-level cooling under high leverage," not trend deleveraging | ✓ |
| Q3: Will market style revert to theme/growth-driven after earnings season? | Section on Q3: STAR 50 +8.07%, northbound and margin both skewed to hard tech | Conclusion 3: style has shifted to "earnings-validated + thematic" dual drivers | ✓ |
| Q4: Does the PMI provide enough support for a May rebound? | Section on Q4: 50.3 manufacturing, 49.4 non-manufacturing, sub-index detail | Conclusion 4: floor support, insufficient for broad-market position increase | ✓ |

### Visualization Plan vs. Actual Delivery

| 01_plan Visualization | 03_report Actual Chart | Gap |
|---|---|---|
| Shenwan L1 sector return radar chart | Broad-index return bar chart (substitution) | ⚠️ HTML version contains no footnote explaining the substitution |
| Margin balance vs. SSE Composite trend | Chart 2: financing balance vs. SSE Composite | ✓ |
| 12-month PMI trend line | Chart 3: PMI 12-month trend | ✓ |
| Post-holiday lockup expiry bar chart | Chart 4: lockup distribution | ✓ |

**Data-gap handling:** `02_research` explicitly flags three limitations (Shenwan weekly sector series unavailable via public APIs; Shenzhen Exchange Apr 30 margin summary missing; per-stock PE screening requires Wind/Choice terminal). All three gaps are consistently flagged or addressed in `03_report`'s forward-looking checklist. No orphaned conclusions were found.

---

## 4. Editorial Quality

Four specific editorial suggestions on the visualization-stage deliverables (`03_weekly_report.html` / `.md`):

1. **Chart 1 footnote missing in HTML version:** The HTML report presents a broad-index return bar chart for Chart 1 with no indication that it replaces the originally planned Shenwan L1 industry radar chart. A PM reading the standalone HTML has no way to know this substitution occurred or why. Suggested fix: add a footnote below Chart 1 — "Note: This chart replaces the planned Shenwan L1 sector radar chart; public data feeds did not provide a stable 31-sector weekly return series. Terminal users (Wind/Choice) should substitute with Shenwan L1 data."

2. **New export orders signal understated:** The executive summary and Conclusion 3 describe April new export orders PMI (50.3) as "the highest in the past six months." Per the 12-month PMI table in `02_research` (May 2025 – April 2026), new export orders ranged from 45.0 to 49.1 throughout the entire preceding year — **50.3 in April 2026 is the first reading above 50 (expansion territory) in over 12 months**. "Six-month high" materially understates the significance of this data point. Recommended wording: "first entry into expansion territory (50+) in more than 12 months."

3. **Dual margin balance figures need source labeling:** Key Conclusion 2 uses CNY 27,038.92bn in the data table while the narrative and HTML summary reference CNY 27,323.02bn, with no explanation of the difference. Suggested fix: label the first as "combined margin loan balance (exchange-level summaries, SSE + SZSE)" and the second as "A-share liang-rong balance including short-selling (source: Shanghai Securities News)," then consistently attach the "third-highest on record" qualifier to the correct (larger) figure.

4. **Risk table amber signal trigger condition is non-operational:** The amber signal "cost pressure compressing midstream margins" lists the trigger condition as "PPI exceeds CPI with gap widening more than 1 percentage point." This formulation is imprecise for A-share sector analysis (sector-specific upstream PPI matters more than headline PPI vs. CPI) and April PPI data was not yet released within the report's coverage window. Suggested replacement: "Watch the PMI purchase-price vs. ex-factory price spread: if purchase price index (63.7) minus ex-factory price index (55.1) remains above 8 points or widens further in May, treat as a midstream margin compression signal."

---

## 5. Recommended Revisions

(Listed in priority order, high to low)

- **[High]** Reconcile the two Apr 29 margin balance figures: explicitly label each data source, move the "third-highest on record, 2.59% of tradeable market cap" qualifier to the correct figure (CNY 27,323.02bn), and use it consistently across `03_report.html` and `03_report.md`.

- **[High]** Revise the new export orders description in the executive summary and Conclusion 3 from "highest in the past six months" to "first time above 50 (expansion) in over 12 months," to accurately convey the signal's significance for the export manufacturing chain outlook.

- **[Medium]** Add a footnote to Chart 1 in the HTML report explaining the substitution from the planned Shenwan L1 radar chart to the broad-index bar chart, and noting that terminal users should replace with Shenwan L1 data.

- **[Low]** Revise the amber risk signal trigger condition for "cost-pressure margin squeeze" to use an actionable formulation based on PMI subindices already present in the report, rather than PPI vs. CPI data not yet available within the coverage window (see specific wording in Section 4 above).

---

## 6. Overall Grade

**`needs-revision`**

The research package is structurally complete, logically coherent, and commendably transparent about data limitations. The two required revisions are: (1) the margin balance figure attribution error, which carries a material risk of misleading a PM reading only the final report; (2) the understatement of the new export orders signal (12-month high mislabeled as 6-month high), which understates the bullish case for the export manufacturing chain in the May strategy. Once both high-priority corrections are applied, this report should be upgraded to `pass`.

---

```json
{"follow_ups":[
  {
    "to":"china-macro",
    "subject":"Verify signal strength of Apr new export orders PMI 50.3 — is it a 12-month or longer-dated high?",
    "question":"The A-share strategy weekly describes April new export orders PMI (50.3) as a 'six-month high,' but the 12-month PMI series in the research file (02_weekly_research.md) shows the figure was below 50 for all months from at least May 2025 through March 2026. Please confirm: (a) when was the last time new export orders PMI exceeded 50.0 before April 2026 — is it a 12-month, 18-month, or longer high? (b) Does entering expansion territory for the first time in over a year change your macro assessment of the external demand outlook for the export manufacturing chain (electronics, power equipment, nonferrous metals) for May–June 2026? (c) Should this be cross-validated against the Caixin manufacturing PMI new export orders sub-index due out May 7? Source reference: NBS PMI release 2026-04-30 and historical NBS PMI series.",
    "priority":"high"
  },
  {
    "to":"ashare-strategist",
    "subject":"Post-holiday impact assessment: Jinghe Integrated (688249) lockup expiry on May 6 — spillover to STAR 50 semiconductors",
    "question":"Jinghe Integrated (688249) has a lockup expiry on 2026-05-06 with CNY 27.695bn (40.81% of total shares) entering the market — representing approximately 61.9% of that day's total lockup volume. Please assess: (a) based on comparable STAR Market lockup events since 2024 where a single issuer released >CNY 20bn accounting for >30% of total shares, what has been the typical block-trade discount range on expiry day? (b) If the discount exceeds 5%, does the historical record show a systematic sector-level drag on other STAR semiconductor names (e.g., CXMT, Ingenic, Haiguang, Silanmicro), or is the impact contained to the issuing company? (c) Does your preferred positioning in AI hardware / semiconductor names need a hedging adjustment ahead of May 6? Please cite at least two analogous historical cases.",
    "priority":"high"
  }
]}
```
