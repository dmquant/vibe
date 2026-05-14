---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Research Package · QA Review · 2026-04-27 → 2026-05-01

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Research Package · QA Review · 2026-04-27 → 2026-05-01

- **QA Manager:** Research Quality Lead
- **Review date:** 2026-05-04
- **Scope:** Step 01 (plan), Step 02 (research draft), Step 03 (visualization deliverable)
- **Overall grade:** `pass` (with light revisions; see §5)

---

## 1. File manifest

| Declared file | Exists in workspace | Bytes | Note |
|---|---|---:|---|
| `01_weekly_plan.md` | yes | 4,152 | Chinese plan present |
| `01_weekly_plan.en.md` | yes | 4,169 | English companion present |
| `02_weekly_research.md` | yes | 17,105 | Chinese research draft present; six data tables |
| `02_weekly_research.en.md` | yes | 18,468 | English companion present |
| `03_weekly_report.html` | yes | 29,939 | Self-contained HTML report; four inline SVG/HTML charts |
| `03_weekly_report.md` | yes | 8,067 | Plain-text companion aligned with the HTML |

Verdict: **6/6 files present.** No `no` row, no Upstream Gaps.

---

## 2. Cross-step consistency

Spot-checked numerical / date / ticker mentions that recur across steps:

| # | Data point | Step 01 (plan) | Step 02 (research) | Step 03 (report HTML / MD) | Verdict |
|---|---|---|---|---|---|
| 1 | China April Manufacturing PMI | **50.6** (wrong) | **50.3** (NBS Table 1) | **50.3**, explicitly flagged as "not the 50.6 the plan assumed" | ✅ Step 02/03 aligned; Step 01 corrected by research |
| 2 | Brent 4-30 close / April move | "below **85** USD/bbl" | **114.01** USD/bbl, April -3.67% | **114.01** USD/bbl; April -3.67% | ✅ Step 02/03 aligned; Step 01 wrong on both level and direction |
| 3 | US April NFP (5-01 print) | "**+192k / 3.9%** released on 5-01" | BLS official release date is **2026-05-08**; no April NFP exists on 5-01 | Matches Step 02; carried into §V "next-week watchlist" 5-08 row | ✅ Step 02/03 aligned; Step 01 timeline error |
| 4 | FOMC 4-29 decision / vote split | "rates held" (no detail) | **3.50%-3.75%**, **8-4 split vote** | **3.50%-3.75%**, **8-4 split vote** | ✅ All three steps consistent |
| 5 | April SPX / Nasdaq 100 returns | not specified (direction only) | SPX **+10.42%**, NDX **+15.64%** | SPX **+10.42%**, NDX **+15.64%** (HTML SVG bars match) | ✅ Step 02/03 aligned; no Step 01 conflict |
| 6 | AMZN TTM FCF / Q1 CapEx | qualitative only ("higher AI CapEx") | TTM FCF **1.2B** (vs 25.9B prior); Q1 CapEx **44.2B** | TTM FCF **1.2B**; Q1 CapEx **44.2B**; Chart 3 table shows quarterly FCF **-18.17B** | ⚠️ Internal note: TTM FCF (1.2B, annualized) and Q1 quarterly OCF-CapEx (-18.17B) are two different bases. Both are used in the report — flag for a clarifying footnote. |

**Verdict:** Step 02 and Step 03 are fully consistent. Step 01 contained three factual / timeline errors, but Step 02 explicitly listed and corrected them in its "Priority conclusions #1" and the visualization stage carried the corrected versions throughout. The chain is closed and **no incorrect data leaked into the client-facing report**.

---

## 3. Narrative coherence

Mapping the planner's four research questions through to the report:

| Plan question | Research draft section | Report §III Q | Closed? |
|---|---|---|---|
| Q1 Fed posture → 2026 H2 rate path | "Research question 1: Fed narrative…" | Q1 · Fed | ✅ Complete: FOMC text + 8-4 vote + 10Y + FedWatch 83.8% |
| Q2 Is AI CapEx fully priced in? | "Research question 2: AI CapEx…" | Q2 · AI CapEx | ✅ Complete: Mag-7 cross-section + AMZN/MSFT margin pressure |
| Q3 China recovery: domestic vs external | "Research question 3: China recovery…" | Q3 · China | ✅ Complete: new orders -1.0pt vs new export orders +1.2pt; gap +2.5→+0.3pt |
| Q4 Does 5-01 NFP confirm a Goldilocks regime? | "Research question 4: Employment…" | Q4 · Employment | ✅ Complete + bonus: research falsified the planner's premise (no NFP on 5-01) and substituted March NFP + a 44/100 heat score, delivering a substantive "cooling but not breaking" answer |

**No orphans, no missing answers.** The plan also flagged JPY intervention and oil/geopolitics as themes (without making them formal questions). The report carries them into the risk panel as a yellow light (USDJPY 160) and a green light (Brent -3.67%) — appropriate handling.

**Above-plan strengths in the research stage:**
1. Proactively cross-checked and corrected three factual errors in the plan, preventing bad data from reaching the deliverable.
2. Added an SPX sector-contribution proxy table (XLK contributes +6.58pp), strengthening the "AI + earnings driven" attribution.
3. Each research question carries an explicit "Limitations" sub-section (definition mismatches, lag, etc.), giving high methodological transparency.

---

## 4. Editorial quality

Four concrete edits for Step 03 (HTML primary + MD companion):

1. **Brent's price level needs an explanatory footnote.** The report uses Brent **114.01 USD/bbl** throughout and pairs it with the "oil pulling back / imported-inflation pressure easing" storyline. But 114 USD/bbl is historically a high-percentile level; a reader unfamiliar with the underlying data will be confused why "114" reads as relief. Suggest a footnote under Table 2 or the §V green-light row: "−3.67% off the higher early-April level; absolute price remains in a historically elevated band — Mideast escalation is the downside trigger to monitor."

2. **Promote the "three plan-stage corrections" to the executive summary.** The corrections currently sit as bullet 1 of §I "Key conclusions". From a PM reading lens, this is a research-quality win and deserves a closing sentence in the executive summary: "Three plan-stage assumptions (PMI, Brent, 5-01 NFP) were validated against official sources and corrected during research; this report uses the corrected figures throughout."

3. **Annotate the two AMZN FCF bases side-by-side.** Table 3 (single-quarter OCF-CapEx) shows AMZN FCF = **-18.17B**, while the executive summary, §I bullet 4, and Q2 deep-dive use TTM FCF = **1.2B**. Both are correct under their respective definitions but they will read as a contradiction without a note. Add under Table 3: "FCF here is single-quarter OCF-CapEx; differs from the TTM figure cited in the executive summary."

4. **Chart 1 (Fed anchor drift) axis labels could be tighter.** The HTML SVG plots "2025-12-31 ≈3.10%" and "2026-03 ≈3.14%" as implied EFFR estimates alongside "2026-04-29 range 3.50–3.75%", which are not strictly the same metric. Add a chart note: "Y-axis is normalized to effective FFR / range midpoint; cross-anchor units harmonized."

---

## 5. Recommended revisions

In priority order:

1. **[High / required]** Add a footnote (executive summary or table) clarifying Brent 4-30 = 114.01 USD/bbl is a month-on-month easing from a still-elevated absolute level — prevents a PM from reading the green light as "oil back to comfort zone".
2. **[High / required]** Add a basis footnote under Table 3 distinguishing AMZN's quarterly FCF (-18.17B) from TTM FCF (1.2B).
3. **[Medium / suggested]** Promote "three plan-stage assumptions corrected" into the executive summary as a research-quality disclosure to the PM.
4. **[Medium / suggested]** Add a same-unit declaration to Chart 1 to avoid EFFR-vs-range-midpoint confusion.
5. **[Low / optional]** In §IV next-week watchlist, pre-load a consensus expectation (e.g. ~+150k / 4.3%) on the 5-08 NFP row so the print can be benchmarked instantly.

Non-blocking — the report is shippable to a PM after revisions 1 and 2.

---

## 6. Overall grade

**`pass`** — The data chain is closed, the question→answer→report mapping is complete, and Step 02 actively corrected three Step 01 errors that were then carried cleanly through Step 03. Research quality is above routine. The four revisions above are light wording and disclosure polish; none of them undermines the report's conclusions.

---

```json
{"follow_ups":[
  {"to":"global-macro","subject":"Where Brent 114 USD/bbl sits in the 2026 oil narrative","question":"The research draft shows Brent closing 2026-04-30 at 114.01 USD/bbl with April -3.67%, yet the absolute level remains historically high. Under the 2026 global oil baseline, please provide where the current Brent print sits as a percentile vs a 2022-2025 rolling window, and — assuming current OPEC+ supply and no Mideast escalation — the reasonable timeline and triggers for Brent to revisit sub-100. The output will inform whether the §V green-light line (imported-inflation pressure easing) should be downgraded to yellow.","priority":"normal"}
]}
```
