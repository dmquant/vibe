---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report · China Macro Weekly — Week 18 (2026-04-27 to 2026-05-01)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report · China Macro Weekly — Week 18 (2026-04-27 to 2026-05-01)

**Reviewer:** QA Manager  
**Review Date:** 2026-05-03  
**Scope:** All research deliverables produced across Steps 01–03

---

## 1. File Manifest

| Declared File | Present in Workspace | Size (bytes) | Notes |
|---|:---:|---:|---|
| `01_weekly_plan.md` | Yes | 3,637 | Research plan (Chinese), complete |
| `01_weekly_plan.en.md` | Yes | 3,702 | Research plan (English), complete |
| `02_weekly_research.md` | Yes | 16,800 | Research draft (Chinese), complete |
| `02_weekly_research.en.md` | Yes | 19,958 | Research draft (English), complete |
| `03_weekly_report.html` | Yes | 53,550 | Visualization report (self-contained HTML), complete |
| `03_weekly_report.md` | Yes | 13,758 | Visualization report (Markdown mirror), complete (bonus file not in plan, adds value) |

All expected files are present and well above the 200-byte threshold. **File manifest: PASS.**

---

## 2. Cross-Step Consistency

Six numerical / date / ticker items that appear in more than one step were spot-checked:

| Item | Step 01 (Plan) | Step 02 (Research) | Step 03 (Report) | Status | Notes |
|---|---:|---:|---:|:---:|---|
| Manufacturing PMI (2026-04) | **50.2** | **50.3** | **50.3** | ⚠️ Discrepancy | Plan used 50.2; research explicitly corrected to the official NBS release of 50.3; final report adopts 50.3. Correction proactively disclosed in Step 02 but not footnoted in Step 03. |
| CSI 300 period return (4/24–4/30) | Not forecast | +0.80% | +0.80% | ✅ Consistent | Steps 02 and 03 match. |
| Full-A net profit growth (2026Q1) | Not forecast | +6.59% | +6.59% | ✅ Consistent | Steps 02 and 03 match. |
| CSI 500 net profit growth (2026Q1) | Not forecast | +18.80% | +18.80% | ✅ Consistent | Steps 02 and 03 match. |
| Non-manufacturing PMI (2026-04) | Not forecast | 49.4 (MoM −0.7) | 49.4 (MoM −0.7) | ✅ Consistent | Steps 02 and 03 match. |
| Politburo meeting keyword counts ("新质生产力": 1 / 2 / 0 across three meetings) | Consistent narrative | 1 / 2 / 0 | 1 / 2 / 0 | ✅ Consistent | All three steps align. |
| Four-day OMO total (4/27–4/30) | Not forecast | 2,185 + 435 + 259 + 1,262 = 4,141 bn CNY | 4,141 bn CNY | ✅ Consistent | Arithmetic check passes. |

**Key discrepancy:** Manufacturing PMI 50.2 (plan) vs. 50.3 (official NBS release). Step 02 proactively flags the correction, which reflects good research practice. However, the final HTML/MD report does not surface this revision to the reader. A brief footnote in Step 03's PMI table is recommended.

---

## 3. Narrative Coherence

Step 01 posed four core questions. Each is traced through Steps 02 and 03 below:

| Plan Question | Step 02 Coverage | Step 03 Coverage | Chain Integrity |
|---|---|---|:---:|
| Q1: What is new in policy signaling? | Full keyword-frequency comparison across three meetings; three-pronged policy toolkit inferred | Q1 section with full comparison table | ✅ Complete |
| Q2: What does the PMI data signal? | Eight sub-index rows; manufacturing and non-manufacturing analysis | Q2 section, eight-row table with signal column | ✅ Complete |
| Q3: What is the quality of Q1 earnings? | Full-A, Full-A ex-fin, major index breakdowns, sector extremes, ROE(TTM) data | Q3 section covers profit growth and sector breakdown, but **ROE data (Full-A 7.59%, Full-A ex-fin 6.46%) present in Step 02 is absent from Step 03** | ⚠️ Partial gap |
| Q4: Which way does post-holiday sentiment lean? | Index returns, Shenwan sector heatmap, 5-day fund flows | Q4 section with conclusion and key catalysts | ✅ Complete |

**Data needs (Step 01 § 3) vs. delivery:**
- NBS PMI sub-indices ✅
- Policy text comparison ✅
- Market performance data ✅
- Capital flows: Step 01 requested **northbound (Stock Connect) net flows by sector**; Step 02 explains that the public northbound daily net-buy field returns NaN and substitutes A-share 5-day sector fund flow. This caveat is disclosed in Step 02 but **is not repeated in Step 03's fund-flow table**, leaving readers who only see the final report unaware of the data-source switch. ⚠️
- Earnings data: CSI 300 / CSI 500 profit growth ✅; ROE changes in Step 02 ✅ but absent from Step 03 ⚠️

**Visualization plan vs. delivery:**
- Chart 1: PMI trend chart ✅ (SVG embedded in HTML)
- Chart 2: Sector heatmap ✅ (SVG embedded in HTML)
- Chart 3: Keyword-frequency comparison ✅ (SVG embedded in HTML)
- Chart 4: Capital-flow radar chart → Replaced with a tabular fund-flow summary; no radar chart produced; table has no disclosure note about the substitution. ⚠️

**Orphaned questions:** None. All four core questions have corresponding answers. The eight-item next-week watchlist each carries an explicit trigger logic. **Overall narrative coherence is strong.**

---

## 4. Editorial Quality

Four concrete edit suggestions on the Step 03 visualization deliverable:

1. **Fund-flow table lacks a data-source disclosure note (material)**  
   The table header reads "5-Day Sector Mainboard Net Inflow," but readers have no indication this replaces the originally planned northbound-flow radar chart. Add a table footnote: *"Note: Original plan called for northbound (Stock Connect) net inflows by sector. Daily northbound data were unavailable (NaN in public feed); replaced with A-share 5-day sector fund flow (source: AkShare `stock_sector_fund_flow_rank`)."*

2. **PMI revision is not flagged in the final report (moderate)**  
   The plan-stage value of 50.2 was corrected to the official 50.3 in Step 02, but Step 03 presents 50.3 without any note. Add a brief table footnote: *"Official NBS release: 50.3. Plan-stage estimate was 50.2."* This demonstrates source discipline to PM readers.

3. **ROE data are missing from the Q3 section (moderate)**  
   Step 01 explicitly requested ROE changes for CSI 300 and CSI 500. Step 02 provides Full-A ROE(TTM) at 7.59% (vs. 2025 annual report −0.15 pct) and Full-A ex-financials ROE at 6.46% (+0.02 pct). These figures do not appear anywhere in Step 03. Suggest appending two rows to the Q3 earnings table.

4. **Risk-panel traffic-light emojis — cross-platform compatibility (minor)**  
   The 🔴 / 🟡 / 🟢 icons render correctly in CommonMark and most browsers, but may display as mojibake in plain-text email, Bloomberg terminal exports, or certain PDF pipelines. Consider providing a text fallback — [Red] / [Yellow] / [Green] — or replacing emoji with CSS-styled badges in the HTML version to ensure consistent rendering regardless of delivery channel.

---

## 5. Recommended Revisions

Prioritized list of revisions to complete before the report is presented to a PM:

- **[High priority]** Add a footnote to Step 03's fund-flow table disclosing that the data source was changed from northbound Stock Connect flows to A-share 5-day sector mainboard fund flow, citing the AkShare interface name.
- **[High priority]** Append Full-A ROE(TTM) 7.59% and Full-A ex-financials ROE 6.46% to the Q3 earnings table in Step 03 (data already present in Step 02; only requires a copy-over).
- **[Medium priority]** Add a one-line note in Step 03's PMI section or table footer acknowledging that manufacturing PMI 50.3 is the official NBS release, correcting the plan-stage estimate of 50.2.
- **[Low priority]** Evaluate whether 🔴 / 🟡 / 🟢 emojis in the risk panel are compatible with the PM's preferred reading format; substitute with CSS badges or text labels if needed.

---

## 6. Overall Grade

**`needs-revision`**

The research package is substantively strong: all four planned questions are answered with real evidence, numerical data are internally consistent across the three major deliverables, and the narrative arc from plan through research to visualization is coherent. The downgrade from "pass" reflects two issues that must be fixed before PM presentation: (1) the fund-flow data-source substitution is undisclosed in the final report — a transparency gap; and (2) ROE data explicitly requested in the plan are absent from the final report — a completeness gap. Both revisions are minor in scope and can be completed quickly.

---

```json
{"follow_ups":[
  {"to":"asset-allocator","subject":"Asset allocation implications of the post-holiday style rotation thesis","question":"The China Macro Week-18 report (2026-04-27 to 2026-05-01) concludes that the post-holiday market is more likely to rotate from crowded tech into resources, property-chain, and low-priced cyclicals rather than making a one-step switch from tech to consumption. Key catalyst variables are the pace of real-estate policy implementation and whether the May manufacturing PMI holds above 50. Please assess from an asset-allocation perspective: (1) If May PMI stays below 50 for a second consecutive month, how should the fixed-income/equity split be dynamically adjusted? (2) Given CSI 500 earnings growth of +18.80% YoY materially outpacing CSI 300 at +4.93%, is a structural mid-cap-growth overweight warranted? Please provide concrete large-asset-class allocation recommendations with a cross-asset view.","priority":"high"},
  {"to":"china-macro","subject":"Persistence risk of sub-50 non-manufacturing PMI in China","question":"China's April 2026 non-manufacturing business activity index fell to 49.4 (MoM −0.7) — the first sub-50 print in the past 12 months — with construction at 48.0 and services at 49.6. Please assess: (1) Given the April Politburo meeting's directive to 'advance urban renewal,' is the construction-sector contraction seasonal or structural? (2) If non-manufacturing PMI stays below 50 in May, what is the implication for the full-year GDP growth path, and what scale of fiscal or monetary support would be needed to reverse services-sector contraction? Please support your assessment with available high-frequency data (e.g., Baidu Migration Index, restaurant dine-in activity, mobility data).","priority":"normal"}
]}
```
