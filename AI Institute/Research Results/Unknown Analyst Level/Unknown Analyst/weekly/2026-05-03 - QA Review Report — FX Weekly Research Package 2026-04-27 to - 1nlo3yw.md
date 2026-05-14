---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report — FX Weekly Research Package (2026-04-27 to 2026-05-01)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report — FX Weekly Research Package (2026-04-27 to 2026-05-01)

> **Reviewer**: QA Manager  
> **Review date**: 2026-05-04  
> **Source files**: `02_weekly_research.md`, `02_weekly_research.en.md`, `03_weekly_report.html`, `03_weekly_report.md`

---

## ⚠️ Upstream Gaps

The following files were absent from this node's workspace and could not be read directly:

| Missing file | Impact |
|---|---|
| `01_weekly_plan.md` | Cannot cross-check the planner's question list against research-stage coverage; Q1–Q5 structure reconstructed from the research files as a proxy |
| `01_weekly_plan.en.md` | Same as above (English version) |

The FX Strategist (steps 01/02) explicitly noted this gap inside the research files and stated that the question structure was reconstructed from a matching adjacent workspace plan. The content is not invalidated, but plan-vs-research alignment can only be assessed at reduced precision.

---

## 1. File Manifest

| Declared file | Present in workspace | Size (bytes) | Note |
|---|:---:|---:|---|
| `01_weekly_plan.md` | **No** | — | Should have been written by step 01; not synced to this node |
| `01_weekly_plan.en.md` | **No** | — | Should have been written by step 01; not synced to this node |
| `02_weekly_research.md` | Yes | 16,299 | Complete; all five research questions covered |
| `02_weekly_research.en.md` | Yes | 18,042 | Complete; numbers match the Chinese version |
| `03_weekly_report.html` | Yes | 42,986 | Self-contained HTML with 6 inline SVG charts |
| `03_weekly_report.md` | Yes | 11,851 | Markdown companion; structure matches HTML |

**Summary**: 4 of 6 declared deliverables are present. The 2 step-01 plan files are missing.

---

## 2. Cross-Step Consistency

Spot-checking 6 numerical / date / ticker mentions across steps:

| Check item | 02_weekly_research | 03_weekly_report.html / .md | Result |
|---|---|---|:---:|
| DXY weekly change | 98.53 → 98.16, -0.38% | 98.53 → 98.16 (-0.38%) ✓ | **Match** |
| FOMC rate decision | Held 3.50%–3.75% | Held 3.50%–3.75% ✓ | **Match** |
| USD/JPY weekly / intraday low | 159.21 → 156.56, -1.66%; intraday 156.985 | 159.21 → 156.56 (-1.66%); 156.985 ✓ | **Match** |
| China April PMI | Mfg 50.3 / Non-mfg 49.4 | 50.3 / 49.4 ✓ | **Match** |
| Euro-area HICP April flash | 3.0% (prev 2.6%), energy +10.9% | 3.0%; energy +10.9% ✓ | **Match** |
| U.S. April NFP schedule | BLS date 2026-05-08; consensus +73K; prior +178K | 2026-05-08; +73K; +178K ✓ | **Match** |

**Minor internal discrepancy (does not affect conclusions, but should be annotated):**

`02_weekly_research.md` cites "USD/CNY reference rate +0.08%" in the executive conclusions table (using the 2026-04-27 to 2026-04-30 window, 6.8231 → 6.8287), but then shows "-0.11%" in the Q2 data table (using the 2026-04-24 baseline of 6.8359 → 6.8287 on 2026-04-30). Both figures are arithmetically correct for their respective windows, but without a note they can confuse readers into thinking the conclusions about RMB direction are contradictory. `03_weekly_report.html` and `.md` carry the "+0.08%" figure (intra-week window), consistent with the executive summary. **Recommendation**: add a brief footnote to the Q2 table distinguishing the two date windows.

---

## 3. Narrative Coherence

### Plan → Research alignment

`01_weekly_plan.md` was missing, so the question list was reconstructed from the research files: Q1 (FOMC/dollar), Q2 (China PMI/CNY), Q3 (holiday effect/CNH), Q4 (JPY carry trade), Q5 (EUR inflation/ECB). All five questions have complete Method, Findings, Evidence, and Caveats sections in `02_weekly_research.md`. **No orphaned questions**.

### Research → Visualization alignment

| Research conclusion | Carried through to visualization stage |
|---|---|
| Decomposed dollar beta; DXY -0.38%; JPY dominates | Chart 5 (DXY path) + Key conclusion 1 ✓ |
| CNY fixing stable; reference-rate gap 200–340 pips negative | Chart 1 (fixing vs reference rate) + Table 1 ✓ |
| JPY-funded carry: all four trades negative on the week | Chart 6 (carry waterfall) + Table 6 ✓ |
| G10 dispersion; JPY the only gainer | Chart 2 (heat bar chart) + Table 2 ✓ |
| UST-CGB spread widened to 267.6 bps but did not lift USD/CNY | Chart 3 (dual-axis chart) + Table 3 ✓ |
| EUR/USD under stagflation shock, not a dovish ECB story | Q5 deep-dive narrative ✓ |
| April NFP delayed to 2026-05-08; not a realized catalyst this week | Key conclusion 5 + next-week watchlist ✓ |

**No missing answers, no unsupported conclusions**. The vendor-data gap for USD/CNH 1M implied volatility is explicitly flagged in both the research and visualization stages, which is appropriate.

---

## 4. Editorial Quality

Primary focus: `03_weekly_report.html`.

**Suggestion 1 (medium priority) — Chart 3 right Y-axis ceiling too low**  
The right Y-axis (USD/CNY reference rate) is labeled with a maximum of 6.840, but the 2026-04-28 data point of 6.8388 exceeds this value. Per the SVG coordinate mapping, that point is plotted at approximately y=41.4, above the labeled axis ceiling at y=34 (6.840). Visually the data point appears to break out of the labeled range. Recommendation: extend the right axis maximum to at least 6.845 or 6.842 so no data point falls outside the labeled scale.

**Suggestion 2 (medium priority) — Chart 6 carry waterfall has a non-uniform X-axis**  
The X-axis labels show: x=120 → "-2.5%", x=240 → "-1.0%", x=360 → "0.0%". This places a 120-pixel span between 0% and -1.0%, but also a 120-pixel span between -1.0% and -2.5% (a 1.5% interval), so the axis is not equally scaled. The bar widths, however, are computed at 120px per 1% (e.g., the MXN spot bar at -2.57% is 308.4px wide, i.e. 2.57 × 120 = 308.4). This means the axis labels are inconsistent with the bar widths. Recommendation: change the axis labels to equal-interval marks (0%, -1.0%, -2.0%, -3.0%) with gridlines at x=360, x=240, x=120, and x=0 (or add a -3.0% gridline at x=0), so the labels align with what the bar widths actually represent. The data labels written directly on each bar (-2.57%, -1.93%, etc.) remain accurate; only the axis reference lines need updating.

**Suggestion 3 (low priority) — Chart 1 title does not acknowledge the substitution**  
Chart 1 is titled "人民币运行图：USD/CNY 中间价 vs 参考价 / RMB Path: USD/CNY Fixing vs Reference Rate" with no mention that the original plan asked for a USD/CNH chart. While the research stage flags this substitution in Q3, the HTML visualization stage does not surface it at the chart level. Recommendation: add one sentence to the chart's footnote (ctake): "The original plan requested a USD/CNH spot chart; due to incomplete public CNH high-frequency data, this chart substitutes the verifiable onshore fixing vs ECB reference rate series."

**Suggestion 4 (low priority) — BoE meeting date marked conditional without a source**  
Section 4 (next-week watchlist) lists "BoE rate decision (if scheduled)" for 2026-05-07 in both the HTML and Markdown versions, with no citation for the BoE calendar. Recommendation: add a reference to the Bank of England's official monetary policy meeting schedule, or explicitly mark the row as unconfirmed to prevent the PM from treating it as a certain event date.

---

## 5. Recommended Revisions

**Prioritized, highest to lowest:**

- **[P1] Locate or reproduce the missing 01 plan files**: `01_weekly_plan.md` and `01_weekly_plan.en.md` were absent from this node. Confirm with the workflow scheduler whether step 01 wrote these files and they failed to sync, or whether they were never produced. If never produced, the FX Strategist should reproduce them so a full plan-vs-research alignment check can be completed before the report reaches the PM.
- **[P2] Fix Chart 3 right Y-axis upper bound**: Extend the USD/CNY reference-rate axis maximum from 6.840 to at least 6.845 so the 2026-04-28 data point of 6.8388 falls within the labeled range.
- **[P2] Fix Chart 6 X-axis to equal-interval labels**: Replace the current non-uniform labels (0%, -1.0%, -2.5%) with equal-interval marks (0%, -1.0%, -2.0%, -3.0%) that match the 120px-per-1% bar-width convention used in the SVG.
- **[P3] Add window footnote to Q2 USD/CNY table**: In `02_weekly_research.md` and the equivalent Q2 section in the report, annotate the "+0.08%" (2026-04-27→2026-04-30 intra-week window) and "-0.11%" (2026-04-24→2026-04-30 five-day window) figures so readers understand they use different start dates and are not contradictory.
- **[P3] Add substitution note to Chart 1 footnote**: Surface the vendor-data gap information at the chart level (not just in the Q3 narrative) so readers examining only the visual dashboard are aware of the CNH 1M IV data limitation.

---

## 6. Overall Grade

**`needs-revision`**

The research package is substantively sound: all five questions are answered with cited data, cross-step numerical consistency is strong across every spot-checked figure, and the narrative arc from research findings to visualization conclusions is clean and complete. However, two charting presentation errors in `03_weekly_report.html` — Chart 3's right Y-axis ceiling and Chart 6's non-uniform axis scale — should be corrected before PM delivery, and the status of the two missing step-01 plan files must be confirmed. Once the P2 chart fixes are applied and the upstream file question is resolved, the package should clear a final pass.

---

```json
{"follow_ups":[
  {
    "to":"fx-strategist",
    "subject":"Confirm 01_weekly_plan.md write status and reproduce if missing",
    "question":"Your workspace for the 2026-04-27 to 2026-05-01 FX weekly is missing 01_weekly_plan.md and 01_weekly_plan.en.md. QA can confirm 02_weekly_research.md and all 03 files are present and internally consistent. Please confirm whether step 01 (planner) actually wrote the plan files and they failed to sync, or whether the files were never written. If never written, please reproduce them so QA can complete a full plan-vs-research alignment check before the report goes to PM.",
    "priority":"high"
  },
  {
    "to":"fx-strategist",
    "subject":"Fix two SVG charting errors in 03_weekly_report.html before PM submission",
    "question":"QA identified two charting errors in 03_weekly_report.html that should be corrected before PM delivery: (1) Chart 3 right Y-axis is capped at 6.840 but the 2026-04-28 USD/CNY reference rate of 6.8388 exceeds this value — please extend the right axis max to at least 6.845. (2) Chart 6 carry-trade waterfall has a non-uniform X-axis: the label at x=120 reads '-2.5%' but the bar widths are calculated at 120px per 1%, meaning x=120 should label '-2.0%' — please standardise the axis labels to equal-interval marks (0%, -1.0%, -2.0%, -3.0%). The underlying data tables are correct; only the SVG axis rendering needs fixing.",
    "priority":"normal"
  }
]}
```
