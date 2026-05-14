---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report · Auto Industry Weekly, Week 18, 2026

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report · Auto Industry Weekly, Week 18, 2026
**Reviewer**: QA Manager  
**Scope**: Step 01 (Research Plan) → Step 02 (Deep Research) → Step 03 (Visualization Report)  
**Review Date**: 2026-05-03  

---

## 1. File Manifest

| Declared File | Present in Workspace | Size (bytes) | Note |
| --- | :---: | ---: | --- |
| `01_weekly_plan.md` | Yes | 3,591 | Readable, intact |
| `01_weekly_plan.en.md` | Yes | 4,047 | Readable, intact |
| `02_weekly_research.md` | Yes | 18,952 | Readable, intact |
| `02_weekly_research.en.md` | Yes | 22,672 | Readable, intact |
| `03_weekly_report.html` | Yes | 31,011 | Readable, intact |
| `03_weekly_report.md` | Yes | 11,701 | Readable, intact |

**Conclusion**: All upstream files are present and well above the 200-byte threshold. No missing deliverables.

---

## 2. Cross-Step Numerical Consistency

The following six data points were spot-checked across Step 02 (research) and Step 03 (both .md and .html report):

| Data Point | Step 02 | Step 03 (.md) | Step 03 (.html) | Consistent? | Note |
| --- | --- | --- | --- | :---: | --- |
| BYD 2026Q1 consolidated gross margin | 18.8%, +1.4ppt QoQ | 18.8%, +1.4ppt QoQ | 18.8%, +1.4ppt QoQ | ✓ | 01_plan's initial estimate was "above 18.5%"; actual 18.8% is a normal plan-vs-actuals deviation |
| BYD net profit attributable to shareholders, YoY | RMB4.085bn, -55.38% YoY | RMB4.085bn, -55.38% YoY | RMB4.085bn, -55.38% YoY | ✓ | Exact match across all three sources |
| Tesla 2026Q1 total automotive gross margin | 21.1% (vs. 2025Q1: 16.2%) | 21.1%, vs. 2025Q1 16.2% | 21.1%, vs. 2025Q1 16.2% | ✓ | Exact match across all three sources |
| BYD April overseas passenger vehicle and pickup sales | 134,542 units, +70.9% YoY | 134,542 units, +70.9% YoY | 134,542 units, +70.9% YoY | ✓ | Exact match across all three sources |
| EU countervailing duty range | 7.8%-35.3% on top of 10% standard tariff | 7.8%-35.3% on top of 10% standard tariff | 7.8%-35.3% on top of 10% standard tariff | ✓ | Exact match across all three sources |
| Export cost model: 25% tariff scenario | -€3,500/unit (margin: -11.7%) | -€3,500/unit (margin: -11.7%) | -€3,500 per unit loss | ✓ | Exact match; 35% scenario also consistent (-€6,500, -21.7%) |
| Lithium carbonate 2609 futures (2026-04-30) | RMB189,100/t, +5.07% on the day | RMB189,100/t, +5.07% | 189,100 (+5.07%/day) | ✓ | Exact match across all three sources |

**Conclusion**: All spot-checked figures are internally consistent from Step 02 through Step 03. The only minor discrepancy is the BYD gross margin initial estimate in 01_plan ("above 18.5%") versus the reported actual (18.8%), which is a normal variance between a preliminary planning estimate and a disclosed figure.

---

## 3. Narrative Coherence

### 3.1 Question List vs. Research Coverage

| Plan Question | Question (01_plan § 2) | Answered in 02_research? | Carried Through to 03_report? | Assessment |
| --- | --- | :---: | :---: | --- |
| Q1 | Have gross margins per vehicle among top NEV players bottomed? | Yes (Section 2) | Yes (Question 1 deep-dive) | **Complete** — conclusions consistent (staged bottom probable; industry-wide bottom unconfirmed) |
| Q2 | Did Urban NOA subscription conversion improve significantly in April? | Yes (Section 3) | Yes (Question 2 deep-dive) | **Complete** — conclusions consistent (no verifiable evidence; maintain neutral) |
| Q3 | Are SAIC, Chery, and BYD overseas plants ahead of expectations? | Yes (Section 4) | Yes (Question 3 deep-dive) | **Complete** — conclusions consistent (BYD clearly ahead; SAIC directionally ahead; Chery repairing) |
| Q4 | Did CATL and WeLion solid-state briefings revise the 2027 mass-deployment consensus? | Partly — CATL covered; **WeLion (卫蓝新能源) absent** | Partly — CATL covered; **WeLion absent** | ⚠️ **Partial gap** — 01_plan explicitly named WeLion alongside CATL; neither the research nor the report addresses WeLion |

### 3.2 Core Event Coverage

| Plan Event | Event (01_plan § 1) | Coverage in 02_research | Coverage in 03_report | Flag |
| --- | --- | --- | --- | --- |
| Event 1 | Tesla FSD China approval acceleration (Apr 27) | Covered (Section 3, Chart 4 substitute) | Covered (Question 2, risk dashboard) | Normal |
| Event 2 | BYD Q1 earnings (Apr 28) | Covered (Section 2, detailed) | Covered (Question 1 deep-dive, detailed) | Normal |
| Event 3 | **Xiaomi Auto SU7 cumulative production milestone of 300,000 units (Apr 29)** | **Not covered** — only April monthly deliveries (>30,000) noted in the delivery table; the 300,000 cumulative milestone and its strategic implications are not analyzed | **Not covered** — no mention of the milestone in any section of the report | ⚠️ **Orphaned event** |
| Event 4 | EU anti-subsidy tariff draft (Apr 30) | Covered (Section 4, detailed) | Covered (Conclusions 3/4, Question 3, detailed) | Normal |
| Event 5 | New-force April delivery data (May 1) | Covered (Section 7, detailed) | Covered (Conclusion 2, Data Table 2) | Normal |

### 3.3 Visualization Plan vs. Actual Delivery

| Planned Chart (01_plan § 4) | 02_research Data Provided | 03_report Actual Output | Deviation |
| --- | --- | --- | --- |
| Chart 1: Weekly sector performance heatmap | Data table (Chart 1 in research) | Inline SVG sector heatmap | **Aligned** |
| Chart 2: April delivery radar chart | Delivery radar data table (monthly target attainment) | Inline SVG horizontal bar chart (substituted for radar) | **Substantially aligned** — format adjustment not explicitly explained |
| Chart 3: Export margin sensitivity model (25% vs. 35%) | Cost model table (Chart 3 in research) | Inline SVG grouped bar chart | **Aligned** |
| Chart 4: L3/L4 road-test mileage trend | **Substituted** with smart-driving milestone event table (noted as "original chart cannot be populated") | **Substituted again** with lithium carbonate price line chart (SVG Chart 4) — different from what Step 02 proposed | ⚠️ **Double substitution, unexplained** — the plan called for L3/L4 mileage; Step 02 replaced it with an event table; Step 03 replaced it again with lithium carbonate prices, without explaining why the Step 02 substitute was abandoned |

**Conclusion**: Q1, Q2, and Q3 logic chains are complete and internally consistent. Q4 has a partial gap (WeLion). Event 3 (Xiaomi SU7 300,000-unit milestone) is an orphaned scope item. Chart 4 underwent two undisclosed substitutions across the three steps, leaving readers without an explanation.

---

## 4. Editorial Quality

The following are concrete improvement suggestions directed at the Step 03 deliverables (03_weekly_report.md and 03_weekly_report.html):

1. **Emoji risk-signal markers (🔴🟡🟢) are inappropriate for professional research reports**  
   The risk dashboard section uses colored-dot emojis to encode severity levels. In the HTML version, CSS styling provides adequate visual support. In the .md version, however, raw emojis are inconsistently rendered across PDF exports and print outputs. Replace with text labels — e.g., `[HIGH]` / `[MEDIUM]` / `[LOW]` or `Red / Amber / Green` — for consistency across all rendering environments.

2. **Chart 2 subtitle "radar substituted by horizontal bar" needs a rationale**  
   The HTML version labels Chart 2 as "delivery vs. monthly target attainment (radar chart substituted by horizontal bars)" without explaining the switch. A brief parenthetical note — e.g., "five brands is insufficient for a meaningful radar polygon; bar chart improves readability" — would prevent readers from inferring a production shortcut.

3. **XPeng year-on-year decline (-11.51% YoY) is missing from Chart 2**  
   Data Table 2 and Chart 2 capture only month-on-month and target attainment dimensions. XPeng's -11.51% YoY delivery decline is cited in the body text but absent from the visualization, which understates the severity of its demand trend. Add a YoY annotation to the XPeng bar label, or bold the reference in the adjacent narrative.

4. **Xiaomi SU7 milestone is a structural content gap in the report body**  
   The plan designated Xiaomi SU7 cumulative production breaking 300,000 units as the third key event of the week. No section of the report addresses this milestone or its competitive implications. Adding a short paragraph (~200 words) in either the quantitative dashboard or the deep-dive section — covering what the milestone means for Xiaomi's brand pricing power and the pressure it puts on traditional OEMs — would close the coverage gap.

---

## 5. Recommended Revisions

Prioritized for action before PM presentation:

- **[HIGH]** Add Xiaomi SU7 300,000-unit milestone analysis: insert a dedicated paragraph in 03_weekly_report.md and the HTML version covering the strategic significance of this production milestone, its validation of the cross-sector OEM model, and investment implications for traditional incumbents. (Addresses orphaned Event 3 from 01_plan.)

- **[HIGH]** Address WeLion (卫蓝新能源) in the solid-state battery section: 01_plan Q4 explicitly named WeLion alongside CATL. If no public disclosure was found in the research phase, the report must include an explicit note — "WeLion made no new public announcements this week" — rather than silently omitting it.

- **[MEDIUM]** Document Chart 4 double-substitution: add a footnote or in-chart annotation to HTML Chart 4 (lithium carbonate prices) explaining that L3/L4 mileage data were not publicly available this week; Step 02 initially proposed an event-table substitute; Step 03 ultimately selected lithium carbonate prices to fill the raw-materials signal gap; L3/L4 tracking has been added to the next-week watch list.

- **[LOW]** Replace emoji risk markers with text labels: ensures consistent rendering across PDF export, print, and downstream aggregation systems.

- **[LOW]** Add XPeng YoY delivery annotation to Chart 2: include "-11.51% YoY" in the bar label or the adjacent text box to provide a complete picture of XPeng's demand dynamics.

---

## 6. Overall Rating

**`needs-revision`**

Numerical consistency is strong across all three steps, and the logic chains for Q1, Q2, and Q3 are complete and mutually reinforcing. However, three issues — the missing Xiaomi SU7 milestone analysis (a named scope item in the plan), the absence of WeLion in the solid-state battery coverage, and the undocumented double substitution of Chart 4 — collectively reduce research coverage below the threshold acceptable for PM presentation. The report should be revised on the two high-priority items before distribution.

---

```json
{"follow_ups":[
  {"to":"tmt-analyst","subject":"Xiaomi SU7 cumulative 300,000-unit production milestone: strategic implications","question":"Xiaomi Auto announced on April 29, 2026 that cumulative SU7 production had surpassed 300,000 units. Please analyze: (1) what this milestone validates about the cross-sector OEM model in terms of ecosystem synergy (OTA, smartphone integration, AIoT), brand premium, and hardware margin sustainability versus comparable BYD and NIO models in the same price band; (2) what SU7 Ultra mass-production pre-order volumes beating expectations implies for Xiaomi's full-year 2026 delivery target (publicly ~300,000 units); (3) how Xiaomi's production ramp compares with NIO and XPeng at equivalent maturity stages, and what this means for investors in the new-forces peer group. Please provide numerical support and an investment conclusion in 3-5 paragraphs.","priority":"high"},
  {"to":"china-macro","subject":"EU anti-subsidy tariffs on Chinese EVs: macro trade-policy scenarios","question":"The EU's countervailing duties on Chinese smart-drive vehicles (7.8%-35.3% on top of the standard 10% auto tariff) have been in force since early 2026. As of 2026-04-06, only the Volkswagen Anhui CUPRA Tavascan has an accepted price undertaking. Please analyze from a macro and trade-policy perspective: (1) the main negotiating sticking points and probable paths forward (price undertakings vs. local production vs. retaliatory tariffs); (2) if tariffs remain at 25%-35% through 2027, the estimated impact on China's total passenger-vehicle export volume and value; (3) the transmission path to the RMB exchange rate and the trade surplus. Please provide baseline and downside scenarios in 3-5 paragraphs.","priority":"normal"}
]}
```
