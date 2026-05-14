---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review · Week 18 of 2026 Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review · Week 18 of 2026 Research Package

**Scope of review:** `01_weekly_plan.md` / `01_weekly_plan.en.md` / `02_weekly_research.md` / `02_weekly_research.en.md` / `03_weekly_report.html` / `03_weekly_report.md`
**Reviewer role:** QA Manager (研究质量主管)
**Review date:** 2026-05-03

---

## 1. File manifest

| Declared file | Present in workspace | Bytes | Note |
|---|---|---:|---|
| `01_weekly_plan.md` | Yes | 3,113 | Planner CN; all five sections (Scope/Questions/Data/Visuals/Outline) present |
| `01_weekly_plan.en.md` | Yes | 3,268 | EN mirror, structurally aligned with CN |
| `02_weekly_research.md` | Yes | 18,095 | Research stage CN; 5 priority conclusions, 4 deep-dive answers, source list |
| `02_weekly_research.en.md` | Yes | 20,254 | EN mirror, comparable depth |
| `03_weekly_report.html` | Yes | 51,082 | Visualization stage HTML with inline SVG charts |
| `03_weekly_report.md` | Yes | 10,080 | Companion markdown for the visualization stage |

**No files missing.** Every upstream artifact is readable and well above the 200-byte threshold.

---

## 2. Cross-step consistency

| # | Datapoint | Plan (01) | Research (02) | Viz (03) | Verdict |
|---|---|---|---|---|---|
| 1 | Coverage window | 2026-04-27 → 2026-05-01 | same | same | ✅ consistent |
| 2 | SPX close / weekly change | — | 7,230.12 / +0.9% | 7,230.12 / +0.9% | ✅ |
| 3 | NDX close / weekly change | — | 27,710.36 / +1.0% | 27,710.36 / +1.0% | ✅ |
| 4 | March Core PCE YoY | hypothesised "below 2.5%" | actual 3.2% (Feb 3.0%) | 3.2% | ✅ values consistent; planner hypothesis explicitly falsified (healthy hand-off) |
| 5 | 10Y UST 4/24→5/1 | "tested 4.5% pivot" | 4.31%→4.39% (+8bp) | 4.31%→4.39% (+8bp) | ✅ consistent; never reached 4.5% |
| 6 | MSFT FY26 Q3 rev / EPS / Azure | flagged as priority | $82.89B / $4.27 / +40% | same | ✅ |
| 7 | GOOGL Q1 rev / EPS / Cloud | flagged as priority | $109.896B / $5.11 / +63% | same | ✅ |
| 8 | AMZN Q1 rev / EPS / AWS | flagged as priority | $181.519B / $2.78 / +28% | same | ✅ |
| 9 | Combined Q1 CapEx, three names | — | 30.876 + 35.674 + 43.2 ≈ 109.75B | "above $109B" | ✅ arithmetic verified |
| 10 | Sector perf: Utilities / Tech / Cons. Cyclical | — | +3.06% / +0.02% / −0.31% | same | ✅ |
| 11 | LSEG Lipper global equity flows | — | +$48.72B (week to 4/22) | same | ✅ |
| 12 | Initial jobless claims (week of 4/25) | — | 189,000 (prior 215,000) | 189,000 | ✅ |

**Conclusion:** All numerical and date references reconcile across the three stages. The planner's two pre-stated hypotheses ("Core PCE breaks below 2.5%", "10Y tests 4.5%") are explicitly answered by the research stage (one falsified, one never triggered). This is a clean hypothesis-to-evidence handoff, not a contradiction.

---

## 3. Narrative coherence

**Planner's four core questions → downstream coverage:**

| Planner question | Research-stage answer | Viz-stage rendering | Status |
|---|---|---|---|
| Q1 AI ROI inflection | Dedicated chapter w/ MSFT/GOOGL/AMZN comparison table | "Key conclusion 1" + earnings beat table/chart | ✅ fully traced |
| Q2 Inflation stickiness | Dedicated chapter (PCE + ECI + jobless claims) | "Key conclusion 2" + PCE trend table | ✅ fully traced |
| Q3 UST curve & small-cap squeeze | Dedicated chapter w/ full curve table | "Key conclusion 3" + curve table | ✅ fully traced |
| Q4 SOX premium durability | Dedicated chapter | "Key conclusion 4" + SOX data table | ✅ fully traced |

**Scope-level topics raised by the planner that downstream did NOT cover adequately:**

1. **BoJ rate decision (2026-04-27, Scope #4)** — neither the research nor the report touches this; it is an *orphaned topic*. Recommendation: either add a line under next-week tracking, or explicitly state in conclusions that "the BoJ decision produced no identifiable spillover into US dollar/JPY or US equity liquidity this week, hence omitted."
2. **Apple spring event & Q1 earnings (Scope #3)** — research is silent; the report mentions Apple Q1 only as a low-priority next-week item. This is inconsistent with the planner having flagged Apple as one of the three weekly themes. Add a line in the executive summary or next-week section noting Apple did not report inside the 4/27–5/1 window and was therefore deferred.
3. **Energy / Middle East (Scope #5)** — referenced only indirectly inside the PCE explainer ("energy shock"). Add a one-line Brent close + linkage to the PCE energy component to close the loop.

**No internal logical breaks; the missed Scope items just need a one-liner of explicit acknowledgement so readers don't conflate "not mentioned" with "not researched".**

---

## 4. Editorial quality

Concrete edits for `03_weekly_report.md` / `03_weekly_report.html`:

1. **Inconsistent column treatment for SOX in the market snapshot table.** SOX row is labelled "SOX (proxy)" with an em-dash for 4/24, while SPX/NDX/Russell 2000 rows show 4/24 starting points. Add a footnote `*SOX weekly starting point not publicly available; SOXX/SOXQ ETF weekly returns used as proxy.` so readers don't read the em-dash as "data missing".
2. **CapEx aggregation caveat.** The "combined Q1 CapEx > $109B" sums MSFT accrual CapEx, GOOGL accrual CapEx, and AMZN cash CapEx. The research stage already flagged that the three numbers are not on the same basis; the report should mirror that caveat with a superscript footnote, otherwise the visualization stage will be the source future readers cite.
3. **Risk table colour/emoji alignment.** Markdown uses 🔴/🟡/🟢; verify HTML rendering preserves the same semantic colour. A mismatch between the emoji label and the rendered colour is the kind of detail a senior reader will flag immediately.
4. **Executive-summary tone.** "On the surface calm, beneath the surface fragmented" reads colloquial. For a PM-facing brief, prefer "headline indices closed higher while intra-market dispersion widened."

---

## 5. Recommended revisions (priority-ordered)

- **[High]** Add a *Scope-coverage acknowledgement* paragraph to `03` covering BoJ, Apple, and energy — clarify that they were either deferred, absorbed into another section, or judged immaterial. Prevents readers from inferring "not mentioned = not researched."
- **[High]** Add a methodology footnote next to "combined CapEx > $109B" warning that the three companies use different (cash vs accrual) bases and that the sum is for order-of-magnitude only.
- **[Medium]** Add a SOX-proxy footnote to the market snapshot row and replace the bare em-dash with `n/a*`.
- **[Medium]** Sanity-check the HTML rendering of the risk-table colour cells against the emoji labels.
- **[Low]** Replace the colloquial executive-summary phrasing (see §4.4).
- **[Low]** Group the source list in `02` by category (macro / company filings / indices & flows) to ease audit trace; currently a flat single list.

---

## 6. Overall grade

**`pass`** — All files present, numeric and date references reconcile across stages, and the four planner questions are answered and re-surfaced through the visualization stage. Outstanding items are presentation and disclosure-clarity issues that do not undermine the report's conclusions. Apply the two **[High]** revisions in §5 before circulating to a PM.

---

```json
{"follow_ups":[
  {"to":"global-macro","subject":"BoJ 4/27 decision impact on US equity liquidity","question":"The 2026-04-27 BoJ rate decision was raised in the planner's scope but never substantively covered in the research or report. Please provide: (a) the BoJ decision and JPY spot reaction; (b) any identifiable shifts in US dollar liquidity indicators (SOFR-OIS, xccy basis, TGA) over the week; (c) whether this is sufficient to explain the defensive sector leadership (Utilities/Real Estate) seen in US equities this week. Answer in under 200 words with 2-3 specific datapoints.","priority":"normal"}
]}
```
