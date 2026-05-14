---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review — Weekly Quant Research Package Audit

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review — Weekly Quant Research Package Audit

**Reviewer:** QA Manager
**Research window:** 2026-04-27 to 2026-05-01
**Review date:** 2026-05-03
**Owning analyst:** chief-quant

---

## 1. File manifest

| Declared deliverable | Present in workspace | Size (bytes) | Note |
|---|---|---:|---|
| `01_weekly_plan.md` | No | — | **Missing.** Step 1 summary claims 4,347 bytes were written, but neither the Step 3 workspace nor this audit workspace contains the file — likely a multi-node sync gap. Research scope had to be reconstructed from the Step 1 context summary. |
| `01_weekly_plan.en.md` | No | — | **Missing.** Same as above. |
| `02_weekly_research.md` | Yes | 20,913 | Complete; all 6 research questions and portfolio recommendations present. Line 5 already discloses "workspace did not contain `01_weekly_plan.md`; this report reconstructs the plan scope from prior context" — appropriate failure handling. |
| `02_weekly_research.en.md` | Yes | 24,395 | Complete English counterpart; not spot-checked end-to-end (see Section 5). |
| `03_weekly_report.html` | Yes | 57,075 | Complete; includes inline SVG charts and the full 6-section structure. |
| `03_weekly_report.md` | Yes | 16,608 | Complete; structurally aligned with the HTML version. |

> Upstream gap handling: both Step 2 and Step 3 explicitly flagged the missing plan and reconstructed the scope where feasible. This is a compliant failure-mode response and does not invalidate the overall package.

---

## 2. Cross-step consistency

Spot-checked core figures that appear in both `02_weekly_research.md` and `03_weekly_report.md`:

| # | Metric | Value in 02 | Value in 03 | Consistency |
|---|---|---|---|---|
| 1 | 2026Q1 all-A net profit YoY | +6.59% (ex-financials +10.69%) | +6.59% (ex-financials +10.69%) | ✅ Match |
| 2 | 2026Q1 companies with positive YoY profit | 2,845 / 52% | 2,845 / 52% | ✅ Match; sum of distribution buckets 824+423+374+1224 = 2,845 ✅ |
| 3 | 2026Q1 GDP YoY / manufacturing VA YoY | +5.0% / +6.3% | +5.0% / +6.3% | ✅ Match |
| 4 | April official manufacturing PMI / non-manufacturing business activity | 50.3 / 49.4 | 50.3 / 49.4 | ✅ Match; MoM −0.1 / −0.7 also reconciles |
| 5 | 588200.SS weekly return / April turnover YTD percentile | +10.05% / 98.70% | +10.05% / 98.70% | ✅ Match |
| 6 | Sector net profit YoY (semis / software / steel) | +148.00% / +259.57% / −89.70% | +148.00% / +259.57% / −89.70% | ✅ Match |
| 7 | Top-5% turnover concentration 20-day avg / historical percentile | 43.9% / 91.8% | 43.9% / 91.8% | ✅ Match |
| 8 | 2026Q1 distribution total | 5,503 firms | 5,503 firms | ✅ Match; bucket sum 824+423+374+1224+2658 = 5,503 ✅ |

**Structural difference (not a contradiction, but worth logging):**

- The PMI table in 02 (Chart 2) carries 10 columns including "Output Prices"; 03 collapses to 9 columns by dropping "Output Prices". Remaining values agree exactly. This is a readability simplification, not a discrepancy.
- Both 02 and 03 show 2026-01 non-manufacturing business activity at 49.4. In 02 the column sits next to "Output Prices" (50.6), and the narrow header makes the two columns easy to confuse — flagged for editorial fix in Section 4.

**No real contradictions found.**

---

## 3. Narrative coherence

Because `01_weekly_plan.md` is missing, the question-list-to-answer mapping had to be reverse-checked from the Step 1 summary plus the research questions embedded in 02.

| Plan item (reconstructed from summary) | Answered in 02 | Carried into 03 | Notes |
|---|---|---|---|
| A-share earnings season closure | ✅ Q1 (5503/5507-firm parallel disclosures, 52% breadth) | ✅ Section "Q1" restates and converts to factor actions | Closed loop |
| Macro PMI / GDP validation | ✅ Q3 (GDP +5.0%, PMI 50.3, non-mfg 49.4) | ✅ Section "Q3" + risk section references non-mfg new orders 44.3 | Closed loop |
| AI sector factor crowdedness | ✅ Q4 (top-5% concentration 91.8%, ETF proxies' returns and turnover percentiles) | ✅ Section "Q4" + high-risk crowdedness item | Closed loop |
| Sector / board earnings leadership (not explicitly listed in summary, but a natural earnings-season question) | ✅ Q2 (STAR Board +207%, semis / software / nonferrous) | ✅ Chart 1, Chart 7, Section Q2 | Closed loop |

**No orphaned questions or unsupported conclusions found.** The core summary and all 6 sections of 03 trace back to figures and source links in 02.

**Minor semantic inconsistency:**

- The 03 risk section ("Non-manufacturing demand persistently soft") says "April non-manufacturing new orders 44.3, **approaching the warning threshold**". But the actual trigger is "<45 for two consecutive months", and April's 44.3 has already **breached** 45 (March was 45.0, right at the threshold). The wording should read: "April has already breached 45; the trigger needs May data to confirm two-consecutive-month status."

---

## 4. Editorial quality

Edits suggested for `03_weekly_report.md` / `.html` (priority-ordered):

1. **Chart 2 PMI table — "Output Prices" column sits next to "Non-manufacturing Business Activity" and after column-width compression the two are easy to read across rows incorrectly.** Add a footnote or visual divider: "Column order: manufacturing 3 sub-indices → prices → non-manufacturing → composite → RatingDog".
2. **Core summary paragraph runs too long.** Currently a single 11-sentence paragraph bundling 4 parallel conclusions. Split into 3 paragraphs (Q1/Q2 earnings line, Q3 macro structure, Q4 AI crowdedness), aligning with the downstream 6-section layout and giving the PM a 30-second scan.
3. **Chart 1 (sector table) revenue YoY column mixes "—" with "not disclosed".** 02 uses "not disclosed", 03 uses "—". Standardise on "—" with a footnote: " '—' = original source did not provide a revenue YoY figure".
4. **"Approaching 45 warning value" vs "already breached".** See last bullet of Section 3. Separately, 03's risk section for 588200 / 512480 says "if foreign capital exits or regulators speak out" — this is fine as a defensive caveat, but add "no specific catalyst observed" to avoid the reader inferring an existing catalyst.

---

## 5. Recommended revisions

Priority high → low:

- **[High]** In 03's risk section, rewrite "approaching the 45 warning value" to "April already breached 45; needs May data to confirm two-consecutive-month trigger". Current wording understates the observed signal.
- **[High]** Add a line near the top of 03 (next to "Data through 2026-05-01"): "Upstream `01_weekly_plan.md` was missing; research scope reconstructed from the Step 1 context summary." Make the gap visible to the PM and to subsequent audits.
- **[Medium]** Standardise the "Revenue YoY" missing-value marker across 02 and 03 to "—" with a footnote, eliminating the "not disclosed" / "—" double notation.
- **[Medium]** Add a visual grouping or column-key footnote to 03's Chart 2 PMI table to reduce the risk of cross-row mis-reading between manufacturing and non-manufacturing columns.
- **[Medium]** Split the 03 core summary paragraph into 3 paragraphs aligned with "earnings — macro — crowdedness".
- **[Low]** 02's reference to "top-1% / 3% / 10% turnover concentration" gives only percentile, not absolute level. Restate in the "caveats" block — already noted in 03 Chart 6 as "—" — for parity.
- **[Low]** `02_weekly_research.en.md` was not cross-checked end-to-end against the Chinese source. Add a number-by-number checklist to the chief-quant English-version editorial workflow.

---

## 6. Overall grade

**`needs-revision`**

— Research content, data consistency, and narrative coherence all pass. However, (a) the missing `01_weekly_plan.md` should be explicitly registered on the final deliverable, and (b) the 03 risk section's wording understates the fact that non-manufacturing new orders have already broken through 45. Both items should be fixed before the report is delivered to the PM, otherwise the PM may misjudge the trigger state.

---

```json
{"follow_ups":[
  {"to":"chief-economist","subject":"Non-manufacturing new orders breaking 45 — implications","question":"April 2026 official non-manufacturing business activity new orders fell to 44.3 (March: 45.0). Per the trigger this report sets ('two consecutive months below 45'), April is the first hit. Please assess: (1) Does the April reading contain a pre-May-Day-holiday order-deferral distortion? (2) Should we bring forward the action of reducing domestic-services / property-chain beta to early May rather than waiting for the May PMI? (3) What is the lead/lag relationship between the services PMI and the retail-sales / services-CPI sub-components? Please give a forward call before the May PMI release.","priority":"high"}
]}
```
