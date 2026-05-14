---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Research Package QA Review (2026-05-04 → 2026-05-08)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Research Package QA Review (2026-05-04 → 2026-05-08)

**Review date:** 2026-05-10  
**Scope:** `01_weekly_plan.md`, `01_weekly_plan.en.md`, `02_weekly_research.md`, `02_weekly_research.en.md`  
**Reviewer:** QA Manager

## 1. File manifest

| Declared file | Exists in workspace | Note |
|---|---|---|
| `01_weekly_plan.md` | Yes | 4,151 bytes, all five sections present (Scope / Questions / Data / Visuals / Outline) |
| `01_weekly_plan.en.md` | Yes | 4,201 bytes, parallel to the Chinese version |
| `02_weekly_research.md` | Yes | 16,305 bytes, contains priority conclusions + five Q&A blocks + visualization tables + strategy + sources |
| `02_weekly_research.en.md` | Yes | 18,163 bytes, parallel English version |
| `QA_review.md` | Yes | Chinese version of this review |
| `QA_review.en.md` | Yes (this file) | — |

No upstream file is missing.

## 2. Cross-step consistency

| # | Item | Plan (Step 01) | Research (Step 02) | Verdict |
|---|---|---|---|---|
| 1 | AMD weekly return | 26.3% | 26.25% | ✅ Consistent (plan rounded) |
| 2 | S&P 500 close | 7,398.93 | 7,398.93 | ✅ Consistent |
| 3 | Nasdaq close | 26,247.08 | 26,247.08 | ✅ Consistent |
| 4 | April nonfarm payrolls | +115,000 vs ~60k expected | +115,000 vs 55–65k expected | ✅ Consistent |
| 5 | Unemployment rate | 4.3% | 4.3% | ✅ Consistent |
| 6 | Shanghai Composite post-holiday | "Reclaimed 4,100, two-month high" | 4,112.16 → 4,179.95 (+1.65%) | ✅ Consistent |
| 7 | May Day travel headline | "**1.52 billion cross-border movements**" | "Domestic trips **325 million**" | ❌ **Material definition error**. The plan cites "1.52 bn cross-border movements", which is off by an order of magnitude vs the official 325 mn domestic-trips figure used by the research stage. Plan must be corrected. |
| 8 | Trump–Xi summit | May 14–15 in Beijing | AP source link in references | ✅ Consistent (research does not give it its own paragraph; acceptable) |
| 9 | RBA hike | 5/5, +25 bp to 4.10% | Only present in the source list; no quantitative analysis in the body | ⚠️ De-emphasized. Plan listed it as core driver #4 but the research stage did not work it through. |

## 3. Narrative coherence

The five planner questions are answered cleanly by the research stage:

| Plan question | Research mapping | Assessment |
|---|---|---|
| Q1 Momentum vs value at historical extreme? | Question 1 (MTUM-VLUE percentile 3.77%) | ✅ Directly falsifies the planner's prior; well grounded |
| Q2 Sustainability of May Day consumption | Question 2 (visits +3.6% YoY vs revenue +2.9%, consumer ETF -1.74%) | ✅ Lands on a clear "neutral, do not overweight" call |
| Q3 Fed pricing | Question 3 (2Y 3.92%, 10Y 4.41%, +49 bp slope) | ✅ Tied back to the discount-rate constraint on long-duration growth |
| Q4 Chip-supply-chain spillover | Question 4 (Inspur 20-day correlation rose 0.12 → 0.41) | ✅ Differentiates servers vs optical modules; conclusion is non-uniform |
| Q5 Concentration / crowding risk | Question 5 (median stock -13% from high; margin balance ¥27,864 bn) | ✅ Calibrated as "yellow alert" |

**Orphans / gaps:**
- The plan's market drivers #4 (RBA) and #7 (ECB Schnabel) appear only in the source list of the research stage, never in a conclusion or analytical paragraph — covered-but-not-discussed.
- Plan driver #5 ("geopolitical risk premium fading"): the research's Brent -6.36% on the week is consistent with that narrative, but the strategy table also recommends "retain tail hedge for oil upside". The two are not contradictory (the first is realised, the second is tail-protection), but the research stage never explicitly bridges the two layers.

## 4. Editorial quality

1. **The "ChiNext start price" cell in the core market-data table** is written as `3676.72 (back-solved from +3.24%)`. Embedding a derivation note inside a numeric cell looks unprofessional. Move the methodology to a footnote and keep the table cells numeric only.
2. **Figure 3 correlation heatmap shows only two rows** (AMD, NVDA) instead of the full 7×7 matrix. Either complete the matrix or rename the title to "Pairwise AI-name correlation table".
3. **In Question 3, the line about "Powell's term ending and Kevin Warsh confirmation expectations"** is information-dense but uncited. Add a source link, otherwise a PM will ask "which appointment, which release".
4. **Figure 4 substitution rationale** — research replaced "Northbound vs Southbound" with "Southbound + margin balance" because of disclosure-mechanism changes. Add one plain-English sentence ("Northbound daily net-buy data has been suspended since the 2024 disclosure reform") so a non-quant PM understands the substitution at a glance.

## 5. Recommended revisions

By priority:

- **[High] Correct the May Day travel definition in the plan** — change "1.52 bn cross-border movements" to "domestic trips 325 mn (+3.6% YoY); cross-border / inbound–outbound is a separate series". The current figure is off by an order of magnitude vs the official series and will erode credibility if a PM challenges it.
- **[High] Add a one-or-two sentence quantitative read on RBA and ECB** to the research stage so the plan's drivers are not left as dead links.
- **[Medium] Complete the 7×7 matrix in Figure 3** or rename the title.
- **[Medium] Add a citation for the Powell/Warsh sentence** in Question 3 to match the citation hygiene used elsewhere in the report.
- **[Low] Move the ChiNext start-price derivation to a footnote**.
- **[Low] Add one business-context sentence to the Figure 4 substitution note**.

## 6. Overall grade

**`needs-revision`**

The data foundation is sound, the question-to-answer mapping is clean, and the risk calibration is balanced. However, the May Day travel definition error in the plan is the kind of factual slip a PM will catch in real time and must be fixed. A short RBA / ECB quantitative read should also be added so the plan and the research stage do not have orphan drivers. Once those revisions are applied the package can move to `pass`.

```json
{"follow_ups":[
  {"to":"chief-strategist","subject":"Re-calibrating net exposure to the AI theme given crowding signals","question":"With SMH up 11.13% on the week, A-share margin balance at ¥27,864 bn (record high), and the S&P 500 median stock still 13% below its high, what is the appropriate net-exposure range for the tech / semiconductor leg over the next 1–2 weeks? Please specify (1) the conditions under which an overweight should be maintained, (2) the objective triggers for cutting to neutral (pick from VIX, daily margin-balance change, breadth indicators, or a combination), and (3) if a hedge is preferred, whether index futures or sector-ETF shorts is the better instrument and why.","priority":"high"}
]}
```
