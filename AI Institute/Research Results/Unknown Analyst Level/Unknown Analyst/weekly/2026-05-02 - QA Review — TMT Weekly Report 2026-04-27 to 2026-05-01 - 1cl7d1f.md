---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review — TMT Weekly Report (2026-04-27 to 2026-05-01)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review — TMT Weekly Report (2026-04-27 to 2026-05-01)

**Reviewer:** QA Manager  
**Review Date:** 2026-05-03  
**Steps Covered:** Step 01 (Weekly Plan) → Step 02 (Research) → Step 03 (Report / Visualization)

---

## 1. File Manifest

| Declared File | Present in Workspace | Notes |
|---|:---:|---|
| `01_weekly_plan.md` | No | Step 01 never wrote this file; both Step 02 and Step 03 acknowledge the gap and reconstruct the question list from the standard TMT weekly framework |
| `01_weekly_plan.en.md` | No | Same gap; English version also missing |
| `02_weekly_research.md` | Yes | 21,391 bytes; content complete; body notes the upstream gap and reconstructs accordingly |
| `02_weekly_research.en.md` | Yes | 24,193 bytes; content complete |
| `03_weekly_report.html` | Yes | 49,048 bytes; contains 5 inline SVG charts and all data tables |
| `03_weekly_report.md` | Yes | 14,649 bytes; Markdown companion to the HTML report |

**Summary:** 6 declared output files; 4 present, 2 missing (`01_weekly_plan.md` / `01_weekly_plan.en.md`).

---

## 2. Cross-Step Consistency

Six key data points checked against both `02_weekly_research.md` and `03_weekly_report.md` / `03_weekly_report.html`:

| Data Point | Step 02 Value | Step 03 (MD / HTML) Value | Verdict |
|---|---|---|:---:|
| QCOM weekly return | +18.92% (148.85 → 177.01) | +18.92% | ✅ Match |
| META weekly return | -9.82% (675.03 → 608.75) | -9.82% | ✅ Match |
| Google Cloud quarterly revenue and YoY growth | $20.028bn, +63% | $20.028bn, +63% | ✅ Match |
| Microsoft AI business annualised run-rate | >$37bn, +123% YoY | >$37bn, +123% | ✅ Match |
| FOMC vote and target range | 8 for, 4 against; 3.50%–3.75% | 8:4; 3.50%–3.75% | ✅ Match |
| Four hyperscalers' combined 2026 capex range | **(narrative)** $705–725bn; **(detail table low end)** $695bn | $705–725bn | ⚠️ Minor divergence (see below) |

**⚠️ Capex Low-End Discrepancy:**  
`02_weekly_research.md`'s detail table sums the four companies' low-end estimates to **$695bn** (Microsoft $190bn + Alphabet $180bn + Amazon $200bn + Meta $125bn), while the narrative and media-aggregated figure cited throughout is **$705bn**. The research document does acknowledge the $10bn gap in a table footnote ("due to rounding and differing per-company reporting scopes"). However, `03_weekly_report.html` and `03_weekly_report.md` adopt the media-aggregated $705–725bn figure everywhere without flagging the bottom-up discrepancy. A footnote explaining the difference should be added to the HTML report to prevent readers who cross-check the individual company numbers from being confused.

---

## 3. Narrative Coherence

### Question → Research → Report Mapping

Because `01_weekly_plan.md` is absent, a direct comparison against the original question list is not possible. The five questions reconstructed in `02_weekly_research.md` are used as the reference baseline.

| Research Question | Answered in Step 02? | Carried Through to Step 03? | Quality |
|---|---|---|:---:|
| Q1: Where was TMT market leadership this week? | Yes — 14-ticker price table with earnings-driven divergence narrative | Chart 1 bar chart + cumulative-return line chart + consistent prose | ✅ Complete |
| Q2: Is cloud/AI demand strong enough to justify the capex? | Yes — per-company revenue metrics and capex ranges; conclusion: demand confirmed, payback timeline uncertain | Chart 4 cloud-growth comparison + Chart 5 capex table + consistent prose | ✅ Complete |
| Q3: Is the semiconductor supply chain still in an AI upcycle? | Yes — TSMC advanced-node mix at 74%, Samsung DS operating profit record high | Chart 6 semiconductor KPI table + consistent prose | ✅ Complete |
| Q4: Are consumer electronics and internet platform fundamentals improving in sync? | Yes — Apple revenue/EPS at March-quarter records vs China smartphone shipments -3.3% | Consumer electronics metrics table + consistent prose | ✅ Complete |
| Q5: Is the macro rate environment a headwind or tailwind for TMT valuations? | Yes — 10Y Treasury +8bp to 4.39%; FOMC 8:4 hold; conclusion: structural headwind | Chart 7 yield-curve shift table + consistent prose | ✅ Complete |

**Orphaned questions:** None. All five questions receive complete answers that flow into the final report.

**Unsupported conclusions:** No major conclusions lack data backing. The characterisation of QCOM edge-AI SoC as "the most underpriced theme of the week" rests entirely on price performance; no QCOM-specific financial guidance or shipment data is cited. This is a reasonable inference but should be substantiated in a follow-up once QCOM's FY2026 Q2 earnings are published.

---

## 4. Editorial Quality

Four concrete suggestions targeting `03_weekly_report.html` and `03_weekly_report.md`:

1. **Remove the internal process note from the report footer**  
   `03_weekly_report.md` ends with: "注：01_weekly_plan.md 在工作区缺失，本报告依据 02_weekly_research.md 内容完整重建。" This is a workflow-internal annotation and must not appear in the version shared with a PM or any external reader. It should be removed from the final deliverable; the upstream gap is already documented in this QA review file.

2. **Fix the revenue-scope mismatch in the Q2 cloud/AI metrics table**  
   In the cloud/AI core-metrics table under Q2, Meta's row lists **total revenue ($56.31bn)** while Microsoft, Alphabet, and Amazon each show **cloud-segment revenue** ($54.5bn, $20.028bn, $37.6bn respectively). Placing these in the same column implies a like-for-like comparison that does not exist. Suggested fix: relabel Meta's entry as "Total Revenue (no standalone cloud segment)" or add a column-level footnote to prevent the misreading.

3. **Add a 2025 baseline reference element to Chart 4 (capex SVG)**  
   Chart 4 mentions the 2025 baseline of $410bn only in a small caption line. The chart body has no corresponding visual element (reference line or baseline bar) for 2025. Adding one would make the ~73% YoY increase immediately visible without requiring the reader to read the caption text, improving the chart's standalone communicative value.

4. **Standardise date precision in the "Next Week Watch List"**  
   The watch-list mixes precise dates ("starting 2026-05-04"), rough estimates ("~2026-05-08"), vague windows ("mid-May 2026"), and open-ended labels ("ongoing"). Adopting a uniform format — e.g., "Expected: [date/range]" for each row — and anchoring open-ended items to known release calendars (e.g., IDC global smartphone data typically published late May) would make the list actionable rather than illustrative.

---

## 5. Recommended Revisions

Ordered by priority:

- **[High]** Delete the internal workflow annotation from the footer of `03_weekly_report.md` (and the equivalent comment in the HTML) before submitting to a PM.
- **[High]** Add a footnote to the capex data table / chart caption explaining the $10bn gap between the media-aggregated low-end figure ($705bn) and the bottom-up sum of the four companies' disclosed low-end estimates ($695bn), and note that the report consistently uses the media-aggregated figure.
- **[Medium]** Correct the revenue-scope labelling in the Q2 cloud/AI metrics table so Meta's total-revenue figure is not presented in the same column as peers' cloud-segment revenues.
- **[Medium]** Add a 2025 baseline visual element (reference line or comparison bar) to Chart 4 (capex SVG) so the +73% YoY acceleration is immediately readable without relying on caption text.
- **[Low]** Standardise date formats across all rows in the "Next Week Watch List."
- **[Low]** Supplement the QCOM edge-AI thesis with fundamental data (shipment volumes, financial guidance) once QCOM FY2026 Q2 earnings are available, to ground the narrative in more than price performance.

---

## 6. Overall Grade

**`needs-revision`**

The package is substantively strong: all five research questions are fully addressed, numerical data is consistent across the research and visualization stages, and the report narrative is logically coherent. The grade falls short of "pass" because of three issues that must be corrected before PM delivery: (1) an internal workflow annotation left in the report footer, (2) the capex low-end discrepancy ($695bn vs. $705bn) not disclosed in the final report, and (3) a revenue-scope mismatch in one data table. All three are editorial fixes — no data re-collection or structural rewrites are required.

---

```json
{"follow_ups":[
  {
    "to":"tmt-analyst",
    "subject":"Fundamental substantiation for QCOM edge-AI thesis",
    "question":"This week's TMT report attributes QCOM's +18.92% weekly gain to markets 'beginning to price AI inference migrating from data centres to edge devices,' but supports this solely with price performance — no QCOM financial guidance or shipment data is cited. Once QCOM FY2026 Q2 earnings are published (expected mid-May 2026), please provide: (1) the share of Snapdragon X/8-Elite-series shipments or revenue attributable to AI-related SoC features; (2) any QTL licensing-term changes tied to AI functionality; (3) a quantitative assessment of the edge-AI-versus-data-centre-inference substitution narrative, including a TAM size estimate and adoption timeline. Rely on verifiable financial disclosures rather than price signals alone.",
    "priority":"normal"
  },
  {
    "to":"global-macro",
    "subject":"Implications of the FOMC 8:4 dissent split for the rate path",
    "question":"The 2026-04-29 FOMC decision to hold the federal funds target range at 3.50%–3.75% came with four dissents — the largest internal split in recent meetings. Please assess: (1) which direction(s) the four dissenting votes likely represent (dovish calls for a cut vs. hawkish calls to hold longer); (2) whether a surprise upside April CPI print (expected mid-May 2026) could push the 10-year Treasury yield meaningfully above 4.50%, and over what time horizon; (3) the magnitude of the implied discount-rate impact on high-multiple TMT assets (cloud/AI software names trading above 30x P/E). Please frame the analysis as three actionable rate scenarios (base, upside, downside) with corresponding valuation-impact estimates for the TMT sector.",
    "priority":"normal"
  }
]}
```
