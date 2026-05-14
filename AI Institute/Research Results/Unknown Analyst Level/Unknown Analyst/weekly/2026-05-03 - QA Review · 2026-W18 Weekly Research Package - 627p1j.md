---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review · 2026-W18 Weekly Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review · 2026-W18 Weekly Research Package

- **Reviewer:** QA Manager
- **Review date:** 2026-05-03
- **Coverage window:** 2026-04-27 → 2026-05-01
- **Artifacts under review:** `01_weekly_plan.md` / `01_weekly_plan.en.md` / `02_weekly_research.md` / `02_weekly_research.en.md` / `03_weekly_report.html` / `03_weekly_report.md`

---

## 1. File manifest

| Declared file | Exists in workspace | Bytes | Note |
|---|:---:|---:|---|
| `01_weekly_plan.md` | yes | 3,960 | Plan stage, Simplified Chinese; question list fully populated. |
| `01_weekly_plan.en.md` | yes | 4,067 | Plan stage, English; matches CN structure and byte size. |
| `02_weekly_research.md` | yes | 16,046 | Research stage, Simplified Chinese; carries evidence and caveats. |
| `02_weekly_research.en.md` | yes | 17,685 | Research stage, English. |
| `03_weekly_report.html` | yes | 44,280 | Self-contained HTML weekly brief (inline SVGs + light/dark CSS). |
| `03_weekly_report.md` | yes | 13,074 | Prose + tables companion to the HTML. |

**Conclusion:** All declared deliverables are present and non-trivial. Substantive review can proceed.

---

## 2. Cross-step consistency

| # | Data point | Plan (01) | Research (02) | Report (03) | Verdict |
|---|---|---|---|---|---|
| 1 | March PCE / Core PCE YoY | "Core PCE 3.5%" | Headline 3.5% / Core 3.2% | Headline 3.5% / Core 3.2% | **Conflict, correctly remediated by Research.** The plan mislabeled 3.5% as Core; Research explicitly reclassified it as headline and restored Core to 3.2%. Report uses the corrected reading and signals the revision. ✓ Handled cleanly. |
| 2 | Fed funds target range | 3.50%–3.75% | 3.50%–3.75% | 3.50%–3.75% | ✓ Fully consistent. |
| 3 | DeepSeek V4 release / scale | "this week" (no exact date) | 2026-04-24; 1.6T Pro / 284B Flash / 1M context | 2026-04-24; 1.6T Pro / 284B Flash / 1M context | ✓ Research filled in detail; Report cites it consistently. |
| 4 | ISM Manufacturing PMI (Apr) | 52.7 ("18 months expansion") | 52.7 | 52.7 | ✓ Numeric agreement. The "18-month streak" qualifier is not independently re-verified downstream but is qualitative and low-impact. |
| 5 | S&P Global Manufacturing PMI (Apr) | 54.5 ("4-yr high") | 54.5 ("strongest since May 2022") | 54.5 | ✓ Number and superlative compatible. |
| 6 | Big Tech weekly returns (GOOGL / META / NVDA) | Not specified | +11.99% / -9.82% / -4.72% | +11.99% / -9.82% / -4.72% | ✓ Research → Report identical, aligned with Nasdaq endpoint window. |
| 7 | 10Y UST yield | "watch 10Y" | 4.31% → 4.40% (+9bp) | 4.31% → 4.40% (+9bp) | ✓ Consistent. |
| 8 | MSFT AI run-rate | Not specified | $37B / +123% | $37B / +123% | ✓ Consistent. |

**Conclusion:** Cross-step consistency is solid. The only material conflict (Plan's "Core PCE 3.5%") was caught and corrected at the Research stage; the Report inherits the corrected reading without introducing new contradictions.

---

## 3. Narrative coherence

| Plan question | Research answer | Report rendering | Closed loop? |
|---|---|---|---|
| Q1 AI valuation reset (capex vs revenue; does DeepSeek V4 break the moat?) | "Issue 1" answers via capex/revenue, margin Δ, weekly returns across 5 names; separates hard order cuts from discount-rate reset | "III. Issue 1" + Table 3 radar dataset; DeepSeek V4 in its own paragraph | ✓ |
| Q2 Inflation stickiness / cut window | "Issue 2" via monthly PCE + Q1 SAAR + FOMC language | "III. Issue 2" + Table 2 rate gap | ✓ |
| Q3 No-landing growth | "Issue 3" via GDP + ISM + S&P PMI + ISM Employment triangulation | "III. Issue 3" + Table 4 PMI dual-track | ✓ |
| Q4 Geopolitical hedging pricing | "Issue 4" via BNO/XLE/UUP/10Y/Supplier Deliveries cross-asset bundle | "III. Issue 4" + risk panel | ✓ |
| Plan data need: weekly cloud GPU rental price | Research explicitly declares "no unified public weekly series" and substitutes NVDA price + DeepSeek architectural efficiency as proxies | Report restates this caveat in Issue 1 | ✓ Transparent degradation, no fabrication. |
| Plan visual brief (4 charts) | Research provided full data tables | HTML rendered the corresponding SVGs (sector returns, PMI dual-track, rate gap, radar) | ✓ |

**Coherence verdict:** No orphaned questions, no unsupported conclusions. The Research stage's positive correction of the Plan's miscoded Core PCE (3.5% → 3.2%) reflects sound research discipline rather than silent inheritance.

---

## 4. Editorial quality

Concrete edits to `03_weekly_report.md` / `03_weekly_report.html`, in priority order:

1. **The executive summary should explicitly flag the "Plan figure correction."** Current wording only says "March headline PCE jumped to 3.5% and Core PCE rose to 3.2%." A reader who first read `01_weekly_plan.md` ("Core PCE 3.5%") will be confused. Add a single line at the end of the executive summary: "(Note: the plan stage labeled 3.5% as Core PCE; this report reclassifies it as headline and restores Core PCE YoY to 3.2%.)" so the PM can reconcile at a glance.

2. **The risk panel "real restrictiveness only +55bp" needs a symmetric scenario.** The current red-light bullet only frames "if May Core MoM ≥0.3%, cut probability collapses." Add the symmetric clause: "Conversely, if May Core MoM falls back to 0.2% and energy unwinds, the September cut window remains open." Avoids one-sided framing of PM expectations.

3. **The Big Tech radar chart's three-axis normalization is not disclosed.** Table 3 gives raw values, but the radar mixes "AI revenue growth" at +123% with "operating margin Δ" at +200bp — wildly different units. If the HTML normalizes, add a footnote under the chart: "Axis normalization: column-wise min-max scaling to [0,1], outer = better; margin Δ retains sign." Otherwise the visual is hijacked by MSFT's +123% point.

4. **The next-week watchlist's two "low priority" items overlap conceptually with high-priority ones.** The "May 28 Q1 GDP second estimate front-running" item is risk-adjacent to PCE revisions and could be folded into the PCE row or merged, reducing PM's 8-line reading load. The "NVDA late-May earnings preview" entry is dated 05-08, but NVDA's typical earnings window is later in May; tag it as "early positioning window" so PM doesn't misread it as the earnings day itself.

---

## 5. Recommended revisions

In priority order (apply before showing PM):

- **(High)** Add the plan-figure correction line to the executive summary (see §4-1) to remove the plan-vs-report reconciliation gap.
- **(High)** Add the symmetric cut-window scenario to the inflation/rate red-light card (see §4-2) so the PM sees both directions, not a one-sided narrative.
- **(Medium)** Add the radar normalization footnote (see §4-3) to prevent the +123% magnitude from visually swallowing the chart.
- **(Medium)** Merge / reorder the watchlist (see §4-4); fold low-priority items into adjacent high-priority rows.
- **(Low)** Add an erratum tag to `01_weekly_plan.md` line 8 ("Core PCE 3.5%") noting "revised to headline 3.5% / Core 3.2% in stage 02," so the plan stays standalone-readable without misleading.
- **(Low)** In `02_weekly_research.md`, when the Plan-asserted "ISM 18-month expansion streak" is referenced, cite "First Trust reprint annotation" explicitly so the streak provenance is auditable.

---

## 6. Overall grade

**Grade: `pass`**

**Justification:** All six declared deliverables are present and non-trivial; cross-step datapoints reconcile; the plan stage's only material numeric error ("Core PCE 3.5%") was explicitly corrected at the research stage and faithfully inherited by the report; the four planner questions all close the loop with transparent caveats; visualizations and the risk panel back the conclusions. The recommended edits are readability and reconciliation polish that do not change the conclusions, so the package can ship to PM after applying the §5 high/medium-priority fixes.

---

## 7. Coordination Requests

The weekly cloud GPU rental price series is flagged in `02_weekly_research.md` as "no credible public weekly series available," yet it is the central evidentiary gap for judging whether DeepSeek V4's unit-economics shock is already landing in real demand. This is a narrowly scoped alt-data sourcing request and fits the specialist-engagement bar.

```json
{"follow_ups":[
  {"to":"altdata-analyst","subject":"Build a weekly cloud GPU rental price series to calibrate the DeepSeek V4 shock","question":"Please attempt, within two weeks, to construct a publicly verifiable weekly cloud GPU rental price series covering AWS p5/p5e, Azure ND H100 v5, GCP A3/A3 Mega, and at least two third parties (CoreWeave, Lambda). Hold scope fixed at on-demand plus 1-year commitment, chip generations H100/H200, with a start date of 2026-04-01 to bracket the DeepSeek V4 release on 2026-04-24. If a unified rate-card series cannot be obtained, propose alternative proxies (spot rental marketplace token prices, CoreWeave public commitment-contract disclosures, secondary-market GPU resale prices) along with their estimated correlation to listed rate cards. The current weekly research (02_weekly_research.md) explicitly declares this series missing, which is the key evidentiary gap for whether NVDA -4.72% reflects real order cuts versus a discount-rate-only reset.","priority":"normal"}
]}
```
