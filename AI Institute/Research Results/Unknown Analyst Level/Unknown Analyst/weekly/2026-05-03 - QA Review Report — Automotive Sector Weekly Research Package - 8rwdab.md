---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report — Automotive Sector Weekly Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report — Automotive Sector Weekly Research Package
**Coverage window:** 2026-04-27 to 2026-05-01
**Review date:** 2026-05-03
**Reviewer:** QA Manager

---

## 1. File Manifest

| Declared File | Present in Workspace | Size (bytes) | Note |
|---|:---:|---:|---|
| `01_weekly_plan.md` | Yes | 3,573 | Research plan, Chinese version — complete |
| `01_weekly_plan.en.md` | Yes | 3,627 | Research plan, English version — complete |
| `02_weekly_research.md` | Yes | 22,640 | Research stage, Chinese version — complete |
| `02_weekly_research.en.md` | Yes | 27,276 | Research stage, English version — complete |
| `03_weekly_report.html` | Yes | 49,052 | Visualization stage, self-contained HTML — complete |
| `03_weekly_report.md` | Yes | 13,210 | Visualization stage, Markdown companion — complete |

**Conclusion:** All declared deliverables are present; all sizes comfortably exceed the 200-byte minimum threshold.

---

## 2. Cross-step Consistency

Six numerical/date data points were spot-checked across steps:

| Metric | Step 02 (Research) | Step 03 (Report) | Consistent? | Notes |
|---|---|---|:---:|---|
| BYD Q1 gross margin | 18.81% | 18.81% | ✅ | Both flag this as consolidated-level figure |
| BYD Q1 net profit YoY | −55.38% | −55.38% (abbreviated to −55.4% in exec summary) | ✅ | Rounding in exec summary is acceptable |
| Li Auto April 2026 deliveries | 34,085 units | 34,085 units | ✅ | Exact match throughout |
| BYD overseas NEV YoY | +55.84% | +55.8% (abbreviated) | ✅ | Minor rounding, no material impact |
| Lithium carbonate LC2609 weekly move | Body states "Apr 27–Apr 30 range approx. **+1.84%**" (from 180,560 to 183,880) | Report states "**+2.9%**" (from 178,620 to 183,880, using Apr 28 intraday low as base) | ⚠️ | **Inconsistent baseline.** Research stage anchors to the Apr 27 open; the report anchors to the Apr 28 intraday low, producing a larger percentage that overstates the full-week move. |
| BYD Q1 NEV sales YoY | −30.01% | −30% (headline and body) | ⚠️ | As a headline financial stat, the 0.01 ppt rounding should be preserved for source-data fidelity. |

**Key flag:** The lithium carbonate percentage discrepancy is the most actionable numeric consistency issue in this package. Both figures are individually defensible but the two-stage report must use the same measurement window; as-is, the figures mislead on the magnitude of the weekly move.

---

## 3. Narrative Coherence

### 3.1 Five Core Questions — End-to-End Coverage

| Plan Question | Answered in Research? | Carried into Report? | Assessment |
|---|:---:|:---:|---|
| Q1: Auto China "standard configuration" trends | ✅ | ✅ | Research scoring table maps cleanly to report radar chart |
| Q2: Xiaomi vs. HIMA April delivery battle | ✅ (with caveats on 200k–300k segment) | ✅ | Data limitation flag is consistent across both stages |
| Q3: BYD Q1 gross margin 18% red line | ✅ | ✅ | Full financial breakdown present and coherent |
| Q4: Solid-state battery Tier 1 supply chain | ✅ | ✅ | A/B/C grading system is consistent across stages |
| Q5: Southeast Asia / Middle East vs. Europe gap | ✅ | ✅ | "Volume buffer, not margin substitute" conclusion consistent |

### 3.2 Plan Scope Items Not Followed Through

The plan's Section 1 (Scope) named two additional weekly catalysts that were not addressed as standalone analysis in either the research or report stage:

- **Tesla China FSD V13 testing progress (Apr 29):** The plan flagged this as a "valuation catalyst for domestic smart-driving players." The report mentions TSLA only in the valuation snapshot table; the transmission mechanism to domestic NOA/L3 valuations is never developed.
- **Nvidia Thor chip production timeline (Apr 27):** The research stage folded this into the "domestic ADAS chip" row of the radar chart (score 4/5, citing Horizon Journey 6M). The Thor-specific impact on domestic platform roadmaps is not independently analyzed, which falls short of the plan's framing.

### 3.3 Report Outline Delivery Gap

Plan Section 5, item 6 promised: **"Investment Strategy: Top Picks in the 'Intelligence' segment with attractive valuations."** The final report delivers a valuation snapshot table with directional labels ("overvalued / fairly valued / mixed") but no formal recommendation ranking, no price-target context, and no conviction call. This is a partial fulfillment of the plan's stated deliverable.

---

## 4. Editorial Quality

Four concrete revision suggestions on the `03_weekly_report.md` / HTML deliverable:

1. **Li Auto data vintage not flagged in executive summary.**
   The executive summary presents gross margin figures for BYD, Tesla, Seres, and Li Auto side by side. The Li Auto figure (17.8%) is Q4 2025 — a substitute used because Q1 2026 has not yet been published — but this caveat only appears with a footnote asterisk inside the data tables, not in the executive summary narrative. A reader skimming the summary will reasonably assume all four figures are Q1 2026. Fix: add "*(Q4 2025 substitute; Q1 2026 not yet reported)*" the first time Li Auto's margin appears in the executive summary.

2. **Pie chart changed to bar chart with no explanation to reader.**
   The plan specified a "global market share pie chart" for Chart 4. The research stage correctly judged that aggregating Thailand EV share, Brazil EV segment share, and UAE total-market share into a single pie would be methodologically unsound. The report implements a per-market bar chart — the right call — but nowhere explains to the reader why the format changed from the plan. A single footnote sentence would close this gap and demonstrate analytical rigor rather than arbitrary formatting.

3. **Lithium carbonate percentage needs date-anchored context.**
   The yellow-light risk section states: "LC2609 rebounded from RMB 178,620/tonne to RMB 183,880/tonne (+2.9%) during the week." The starting price of 178,620 is the Apr 28 intraday low, not the Apr 27 opening price (180,560). Without the explicit date anchor, readers who reference the research stage's own "approx. +1.84% over Apr 27–Apr 30" will perceive a contradiction. Recommended fix: state "from the Apr 28 low of 178,620 to the Apr 29 close of 183,880 (+2.9% over two sessions); measured from the Apr 27 open of 180,560, the full-week gain was approximately +1.84%."

4. **BYD NEV YoY sales precision.**
   The report body and headlines consistently write "YoY −30%," dropping the 0.01 ppt from the Q1 earnings report figure of −30.01%. As a headline number used to justify the "scale effect is in diminishing returns" argument, preserving "−30.0%" (or "−30.01%") signals that the figure is sourced directly from the quarterly filing rather than rounded to an approximation. Recommendation: standardize to "−30.0%" throughout.

---

## 5. Recommended Revisions

Listed by priority:

**P1 — Must fix before PM submission**
- [ ] **Lithium carbonate baseline annotation:** In `03_weekly_report.md` and `03_weekly_report.html`, add a date anchor to the "LC2609 +2.9%" figure, or present both the two-session and full-week perspectives, to align with the research stage's stated +1.84% week-on-week figure.
- [ ] **Li Auto vintage flag in executive summary:** Add "(Q4 2025 substitute; Q1 2026 not yet released)" at the first mention of Li Auto's gross margin in the executive summary, to prevent cross-period misreading.

**P2 — Recommended for next iteration**
- [ ] **Chart 4 footnote:** Explain in one line why the planned global pie chart was replaced by a per-market bar chart (incomparable denominators across countries).
- [ ] **Tesla FSD V13 and Nvidia Thor disposition note:** Add one sentence in the forward-looking watch-list or a footnote to acknowledge that these two plan scope items lacked sufficient verifiable new information during the week and were therefore folded into the broader smart-driving section rather than given standalone treatment.
- [ ] **Formalize investment view:** Upgrade the valuation snapshot labels into an explicit one-paragraph investment summary (top 1–2 names, one-sentence rationale each) to fulfill the plan outline's Section 6 commitment.
- [ ] **BYD NEV YoY precision:** Replace all instances of "−30%" with "−30.0%" or "−30.01%" for source-data fidelity.

---

## 6. Overall Grade

**`needs-revision`**

The research package demonstrates strong internal data consistency across all five core questions, clean narrative flow from planning through research to visualization, and appropriately flagged data limitations at each stage. The two items requiring P1 revision — the lithium carbonate percentage baseline inconsistency and the Li Auto vintage caveat missing from the executive summary — are both addressable with minor edits and carry no structural implications. P2 items strengthen depth and transparency but do not block PM presentation once P1 fixes are applied.

---

```json
{"follow_ups":[
  {"to":"china-macro","subject":"EU anti-subsidy tariff timeline and impact on Chinese OEM European margin trajectory 2026–2027","question":"The 2026 Beijing Auto Show coverage confirms BYD, GWM, and others are accelerating European localization (Hungary, Spain). Please assess from a macro standpoint: if the EU final ruling holds tariffs at or near the current implemented level (i.e. no significant escalation beyond current rates), and given that local-production ramp-up typically takes 2+ years, what is the realistic European margin trajectory for China's major EV exporters in 2026–2027? Specifically, model the interaction between forex headwinds (BYD already absorbed RMB 2.1bn in financial charges from forex losses in Q1 2026), localization capex drag, and any residual tariff pass-through to assess free cash flow risk for BYD (002594.SZ / BYDDY).","priority":"high"},
  {"to":"esg-analyst","subject":"ESG compliance risk for Chinese NEV brands expanding in Southeast Asia and the Middle East","question":"BYD Q1 2026 overseas passenger NEV deliveries reached 321,165 units (45.85% of NEV sales, +55.84% YoY), with Chinese brands holding >65% EV market share in Thailand and >80% in Brazil's EV segment. Please evaluate two specific ESG compliance risks: (1) Do Thailand's, Brazil's, and UAE's battery recycling and battery passport regulations materially lag the EU Battery Regulation, and could this gap create future market-access restrictions or reputational risk for Chinese brands already dominant in those markets? (2) For Chinese OEMs (BYD, Changan) establishing KD assembly plants in Southeast Asia, are labor and environmental compliance standards adequate to avoid ESG rating downgrades or green financing restrictions from institutional investors applying EU Taxonomy or SFDR screens?","priority":"normal"}
]}
```
