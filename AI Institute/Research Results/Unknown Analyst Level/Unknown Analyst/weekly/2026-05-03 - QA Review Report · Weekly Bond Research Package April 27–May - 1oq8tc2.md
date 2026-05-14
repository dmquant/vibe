---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report · Weekly Bond Research Package (April 27–May 1, 2026)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report · Weekly Bond Research Package (April 27–May 1, 2026)

> **Reviewer role**: QA Manager  
> **Review date**: May 3, 2026  
> **Scope**: Step 01 (Research Planning), Step 02 (Bond Research), Step 03 (Visualization Report)  
> **Note**: `01_weekly_plan.md` and `01_weekly_plan.en.md` were absent from the workspace. The planning question framework has been reconstructed from the Step 1 session summary ("conflicting US macro data, BoJ policy shifts, and China's credit market recovery"). All planning-stage assessments below are based on that reconstruction.

---

## 1. File Manifest

| Declared file | Present in workspace | Note |
|---|:---:|---|
| `01_weekly_plan.md` | No | Step 1 did not write to workspace; content inferred from session summary |
| `01_weekly_plan.en.md` | No | Same as above |
| `02_weekly_research.md` | Yes | 14,415 bytes; all four research questions covered |
| `02_weekly_research.en.md` | Yes | 16,566 bytes; English mirror consistent with Chinese version |
| `03_weekly_report.html` | Yes | 38,414 bytes; five inline-SVG charts; self-contained HTML |
| `03_weekly_report.md` | Yes (extra output) | 13,149 bytes; Markdown version of the report; not declared in original task spec but adds readability |

**Finding**: Two planning files are missing due to a workspace-sync issue, not a content failure. All research and visualization deliverables are present.

---

## 2. Cross-Step Consistency

Six key data points were spot-checked across steps:

| Data point | Step 02 (research) | Step 03 report (MD / HTML) | Consistent |
|---|---|---|:---:|
| UST 10Y end-of-week yield | `4.39%` | `4.39%` / `4.39%` | ✓ |
| JGB 40Y weekly move | `+11.0 bps` | `+11 bps` / `+11.0bp` (SVG label) | ✓ |
| BoJ vote result | `6-3, hold at 0.75%` | `6-3` / `6-3` | ✓ |
| March new RMB loans | `RMB2.99 trillion` | `RMB2.99 tn` / `2.99` (Chart 4) | ✓ |
| US HY OAS end-of-week | `2.83%` | `2.83%` / `HY 2.83` (SVG label) | ✓ |
| TSF stock y/y (Feb → Mar) | `8.2% → 7.9%` | `8.2% → 7.9%` / `8.2% → 7.9%` (Chart 4 SVG) | ✓ |

**Note on the February NFP prior value**: In `02_weekly_research.md` (Chart 2 table) and `03_weekly_report.md` (Table 2), the prior-period value for March 2026 nonfarm payrolls is listed as **−133k** (representing February 2026). The HTML Chart 2 correctly derives a +311k delta from that basis. The figure is internally consistent across all three steps, but a February reading of −133k would be an extraordinary anomaly — the largest single-month job loss outside recession or pandemic. This must be manually verified against the BLS release before presenting to a portfolio manager.

---

## 3. Narrative Coherence

### Planning question → research answer → visualization conclusion mapping

| Planning question (reconstructed from Step 1 summary) | Step 02 answer | Step 03 conclusion | Link |
|---|---|---|:---:|
| How do conflicting U.S. data affect the Treasury curve? | Sticky inflation (PCE +0.7%, ISM Prices 84.6) drove front-end selling; growth resilience (GDP 2.0%) limited rate-cut pricing | Charts 1+2; Conclusion ①: bear-flattening, favor 2Y-5Y carry | ✓ |
| How strong is the BoJ policy-shift signal? | 6-3 vote, 3 members favored 1.0%; JGB bear-steepened, 40Y +11 bps | Chart 3; Conclusion ③: hawkish fracture is now inside the reaction function | ✓ |
| Does China's credit recovery support risk appetite? | Seasonal rebound only (Q1 cumulative below 2025; TSF stock y/y declining) | Chart 4; Conclusion ④: falsifies "full releveraging" thesis | ✓ |
| Duration/curve/credit allocation conclusions? (inferred question) | Neutral to underweight long duration, favor 2Y-5Y carry, selective credit | Allocation matrix (Question 4), five-item risk watchlist | ✓ |

**Orphaned questions**: Because the planning files are missing, it cannot be confirmed whether the planner posed additional sub-questions (e.g., explicit FOMC rate-path quantification, LGFV vs. property credit-spread differentiation). If such sub-questions existed, they do not appear in Step 02's answers.

**Unsupported forward projection**: The next-week watchlist (in `03_weekly_report.md` and `03_weekly_report.html`) states "any hawkish FOMC shift → 2Y-5Y up another 5-10 bps." This is a forward prediction without a quantitative backing model; it should be reframed as a conditional scenario ("under the assumption of historical sensitivity, a hawkish tilt would imply…") rather than a data-driven conclusion.

---

## 4. Editorial Quality

1. **SVG rendering defect in Chart 3 (high priority)**: In `03_weekly_report.html`, the first `<polyline>` element in Chart 3 contains a stray token `nope` inside the `points` attribute (`540,182.75 nope">`). This line is overwritten by the correctly computed second `<polyline>` below it, but strict SVG parsers (certain browsers or PDF renderers) may emit a warning or skip the element entirely. The erroneous first `<polyline>` should be removed; only the valid coordinates should remain.

2. **Chart 2 mixes units on a "standardized" axis (medium priority)**: The y-axis subtitle claims "standardized change (prior = 0 baseline)" but the bar labels use three different units: percentage points (+1.5pp, +0.3pp, -0.1pp), unitless index points (+6.3 for ISM Prices), and absolute thousands (+311k for NFP). Readers comparing bar heights will draw incorrect comparisons. Options: relabel the axis as directional (hawkish ↑ / dovish ↓), add per-bar unit annotations, or split into independent panels.

3. **Missing data footnote for February NFP −133k (medium priority)**: The `−133k` prior-period value appears in Table 2 / Chart 2 without any source note or caveat. Given how unusual the number is, it warrants a brief footnote citing the BLS release date, whether this is an initial or revised estimate, and whether the anomaly (if real) affects the "labor has not clearly weakened" conclusion.

4. **Risk-level indicators not print-safe (low priority)**: The Markdown version (`03_weekly_report.md`) uses 🔴🟡🟢 emoji as risk-level indicators; these render correctly on screen but become invisible in monochrome PDF or some Markdown exporters. Consider supplementing with text labels (HIGH / MEDIUM / LOW) in the same cell.

---

## 5. Recommended Revisions

- **[P1] Fix the SVG rendering defect in Chart 3**: Remove the first, broken `<polyline>` element from `03_weekly_report.html` that contains the `nope` token. Retain only the second, correctly computed polyline. This is required for reliable cross-browser display and automated PDF generation.

- **[P2] Add a data footnote for February 2026 NFP −133k**: In both `03_weekly_report.md` (Table 2) and `03_weekly_report.html` (Chart 2), add a footnote citing the BLS source, stating whether the figure is an initial or revised estimate, and clarifying how it was used in the delta computation (+311k). If the number is a working assumption rather than published data, mark it as an estimate.

- **[P2] Clarify Chart 2's unit convention or redesign the axis**: Change the y-axis label from "standardized change" to a qualitative directional label, or annotate each bar with its own unit, to prevent misleading cross-indicator bar-height comparisons.

- **[P3] Reframe forward FOMC impact estimates as conditional scenarios**: Rewrite "any hawkish tilt → 2Y-5Y up another 5-10 bps" and similar predictions in the next-week watchlist as explicit conditional scenarios with stated assumptions, distinguishing them from conclusions that are directly supported by this week's data.

- **[P4] Surface upstream-file-gap status in the HTML report header**: The research (`02_weekly_research.md`) and the Markdown report (`03_weekly_report.md`) both include a brief header noting that `01_weekly_plan.md` was missing. The HTML version does not. Adding a short collapsible or grayed-out banner ensures that any stakeholder reading the HTML is aware of this upstream gap without it cluttering the main content.

---

## 6. Overall Grade

**`needs-revision`**

The analytical content is rigorous, cross-step numeric consistency is clean, and the narrative logic flows coherently from macro inputs to allocation conclusions. However, two issues must be resolved before PM presentation: (1) an SVG rendering defect in Chart 3 that can break the visual output in certain environments, and (2) an unannotated anomalous data point (February NFP −133k) that could undermine credibility if a reader queries it. All other items are lower-priority editorial improvements.

---

```json
{"follow_ups":[
  {
    "to":"global-macro",
    "subject":"Verify February 2026 U.S. nonfarm payrolls prior value of -133k",
    "question":"The bond research package for the week of April 27–May 1, 2026 cites February 2026 nonfarm payrolls as -133,000 (used as the prior-period baseline for the March +178k print, yielding a +311k delta). A sub-zero monthly payroll print of this magnitude would be the largest single-month job loss outside of recession and pandemic contexts. Please confirm: (1) whether the BLS March 2026 Employment Situation report (released April 3, 2026) actually cited February 2026 payrolls at -133k (initial estimate or revision), (2) if so, what drove the anomaly (weather, strike, statistical revision), and (3) whether this changes the characterisation of U.S. labor market resilience used in the bond allocation conclusions.",
    "priority":"high"
  },
  {
    "to":"fx-strategist",
    "subject":"Quantify JPY repatriation risk to UST long-end demand from BoJ 6-3 hawkish vote",
    "question":"The bond research package concludes that rising JGB yields (10Y +8 bps, 40Y +11 bps following the April 28 BoJ 6-3 vote) will weaken Japanese investor marginal demand for overseas long bonds and 'indirectly weigh on UST long-end valuations.' Please provide a quantitative estimate of: (1) the approximate JPY-hedged carry differential between 10Y UST and 10Y JGB as of April 30, 2026, (2) the FX-hedge cost for a Japanese institution rolling 3-month USD/JPY forwards at current levels, and (3) at what JGB 10Y yield level the hedged UST long-end carry turns negative for a typical Japanese life insurer, which would constitute a structural demand cliff for UST 30Y.",
    "priority":"normal"
  }
]}
```
