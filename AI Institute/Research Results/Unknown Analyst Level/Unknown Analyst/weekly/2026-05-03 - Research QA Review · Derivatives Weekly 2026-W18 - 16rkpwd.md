---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Research QA Review · Derivatives Weekly 2026-W18

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Research QA Review · Derivatives Weekly 2026-W18

**Reviewer:** QA Manager
**Review date:** 2026-05-03
**Scope:** Step 01 plan, Step 02 research draft, Step 03 visualization deliverables (HTML + Markdown)

---

## 1. File manifest

| Declared file | Exists in workspace | Bytes | Note |
|---|---|---:|---|
| `01_weekly_plan.md` | yes | 3,608 | Simplified Chinese plan; structurally complete |
| `01_weekly_plan.en.md` | yes | 3,810 | English mirror of the plan |
| `02_weekly_research.md` | yes | 15,957 | Five-question research draft with evidence + limitations |
| `02_weekly_research.en.md` | yes | 17,252 | English mirror of the research |
| `03_weekly_report.html` | yes | 42,950 | Four inline SVG charts, no external dependencies |
| `03_weekly_report.md` | yes | 9,367 | Markdown mirror of the HTML report |
| `QA_review.md` | yes | — | Simplified Chinese QA review |
| `QA_review.en.md` (this file) | yes | — | English QA review |

No missing files. Every upstream artifact landed on disk and well exceeds the 200-byte sanity threshold.

---

## 2. Cross-step consistency

| Check | Step 01 plan | Step 02 research | Step 03 report | Verdict |
|---|---|---|---|---|
| April NFP release date | 2026-05-01 (planner's assumption) | 2026-05-08 08:30 ET (corrected against BLS calendar) | 2026-05-08 08:30 ET (explicit "no NFP this week") | ✅ Research caught the planner's error; report propagated the correction |
| FOMC rate decision | hold (no number) | 3.50%–3.75%, vote 8–4 | 3.50%–3.75%, vote 8–4 | ✅ Consistent |
| VIX 04-29 / 04-30 close | — | 18.81 / 16.89 | 18.81 / 16.89 | ✅ Consistent |
| GOOGL post-earnings 1-day return | — | +9.96% | +9.96% | ✅ Consistent |
| META post-earnings 1-day return | — | −8.55% | −8.55% | ✅ Consistent |
| AAPL gamma flip / spot | — | 231.81 / 280.14 (buffer +20.85%) | 231.81 / 280.14 (buffer +20.85%) | ✅ Consistent |
| MSFT gamma flip / spot | — | 336.90 / 414.44 (buffer +23.01%) | 336.90 / 414.44 (buffer +23.01%) | ✅ Consistent |
| SPY proxy flip / spot | — | 719.61 / 720.65 (buffer +0.14%) | 719.61 / 720.65 (buffer +0.14%) | ✅ Consistent |
| June-17 cut probability | — | 13.5% current vs 27.2% prior week | 13.5% current vs 27.2% prior week | ✅ Consistent |
| SPY 22-May ATM IV vs 30D RV | — | 14.20% vs 16.73% | 14.20% vs 16.73% | ✅ Consistent; but RV 16.73% only appears once in research narrative and is absent from the Mag7 table (see §4) |

**Watch-item:** The plan (Step 01) treated NFP as a 2026-05-01 release and built question 4 plus the 0DTE special-topic section around that. The research (Step 02) correctly verified BLS's actual release date as **2026-05-08**, and the report repeats that correction. The chain is healthy — the research function caught and patched the planner's wrong assumption — but this should be filed in the post-mortem so the plan template doesn't reuse the same incorrect date.

---

## 3. Narrative coherence

| Plan question | Research answered? | Report carried through? | Verdict |
|---|---|---|---|
| Q1 Post-FOMC VIX term structure | yes (5-day VX/K6, VX/M6 table) | yes (conclusion 1 + VIX line chart) | ✅ closed loop |
| Q2 Mag7 vol cluster | yes (RV30, ATM IV, 90% put table) | yes (conclusion 2 + Mag7 scatter) | ✅ closed loop |
| Q3 AAPL/MSFT gamma flip | yes (with SPY proxy comparison) | yes (conclusion 3 + SPY GEX profile) | ✅ closed loop; but the chart targets SPY rather than AAPL/MSFT — minor question-vs-chart mismatch |
| Q4 NFP & June Fed pricing | yes (BLS correction + TLT data) | yes (conclusion 4 + yield curve chart) | ✅ correction is sound; the plan's 0DTE-on-NFP-day sub-section is now defunct and should be flagged as deferred |
| Q5 Holiday closures & vol arb liquidity | yes (KWEB/FXI/USD-CNH table) | yes (conclusion 5; no chart) | ⚠️ Plan never assigned a chart to Q5; research and report did not add one — Q5 is text-only and lacks a visual anchor |

**Plan-vs-execution drift:**
- **Visualization #1 (3D IV surface) was substituted.** Research explicitly notes that free public sources cannot back-fill a historical IV surface; the report ships a **VIX term-structure line chart** (different chart type, different research dimension). The substitution is a reasonable data-availability concession, but neither final artifact references the original 3D surface intent — a reader cannot trace back from the report to the planner's original ambition.
- **Plan's "0DTE on NFP day" special topic is now stranded.** The research correctly establishes that there is no NFP this week, so the topic has no data; the report has no dedicated 0DTE section. The executive summary should add one sentence stating this topic is deferred to the May-8 NFP cycle.

**Orphaned conclusions:** none — the report's "trim 0DTE net gamma the day before NFP" line is supported by the TLT 10.36% ATM IV finding, and "AI capex narrative divergence" is supported by Mag7 RV30 > ATM IV.

---

## 4. Editorial quality

1. **SPY is absent from the Mag7 table but cited repeatedly.** The report's executive summary mentions "SPY ATM IV at 14.20%, below the RV30 of 16.73%", yet the Mag7 table lists only the seven single names. Add a SPY proxy row (spot 720.65 / RV30 16.73% / IV30 14.20% / IV-RV −2.53 pp), or note in fine print that SPY data lives in the GEX profile section.
2. **Inconsistent date/number formatting.** The report mixes "4 月 29 日" (with spaces) and "4月29日" (no spaces); "3.50%–3.75%" uses the en-dash in the executive summary but a half-width hyphen elsewhere. Normalize for the PM-facing version.
3. **Chart-title risk on Chart 3.** The plan called for an SPX-level GEX profile; the research used a SPY proxy; the report should not silently inherit "SPX" in the chart title. Recommend titling it "SPY Gamma Exposure Profile (SPY proxy — full SPX option-chain OI not available from free public sources)".
4. **The May-9 META/GOOGL AI capex analyst-day entry says "(expected)".** The parenthetical is too soft for the PM watchlist. Either tag it "(industry-expected, not officially announced)" or footnote the source.

---

## 5. Recommended revisions

By priority:

- **High**
  - Rename Chart 3 to **"SPY proxy"** explicitly and add a chart caption explaining the substitution from the planned SPX figure. This affects how the PM reads SPX 0DTE positioning.
  - Add a sentence at the end of the executive summary: **"The originally planned 0DTE-on-NFP topic is deferred — April NFP actually releases on 2026-05-08, so this report contains no post-NFP attribution."**
- **Medium**
  - Append a SPY proxy row to the Mag7 table so RV30 16.73% / IV 14.20% are not floating numbers.
  - Normalize date and percent-range formatting (no inner spaces; consistent en-dash).
- **Low**
  - Annotate the May-9 AI capex day with a source (or restate as "industry-expected").
  - Add a small chart for Q5 (e.g., KWEB / FXI 5-day volume bars) so the holiday-liquidity finding has a visual anchor.
  - Update the plan template's checklist to require BLS-calendar verification of any cited macro release date.

---

## 6. Overall grade

**Grade: `needs-revision`**

Data consistency, research methodology, evidence chain, and chart construction are all of high quality; all five core questions are answered and propagated cleanly to the report's conclusions. However, two items materially affect the PM's reading — the SPY-proxy label is not surfaced on the chart, and the planned 0DTE topic was silently deferred without a callout in the executive summary. Both fixes are <1 hour of work; once applied, the package clears `pass`.

---

*This review is based exclusively on the workspace artifacts from Steps 01–03. The reviewer did not re-pull underlying data sources; numerical consistency checks are lateral comparisons across the three steps.*

```json
{"follow_ups":[
  {"to":"derivatives-strategist","subject":"Add SPY proxy row to Mag7 table; rename Chart 3 to SPY proxy; declare 0DTE topic deferred in exec summary","question":"In the weekly report, please (1) append a SPY proxy row to the Mag7 data table (spot 720.65 / RV30 16.73% / IV30 14.20% / IV-RV −2.53 pp / weekly return per the SPY series), (2) retitle Chart 3 to 'SPY Gamma Exposure Profile (SPY proxy — full SPX option-chain OI not available from free public sources)', and (3) add a closing sentence to the executive summary: 'The originally planned 0DTE-on-NFP topic is deferred — April NFP actually releases on 2026-05-08, so this report contains no post-NFP attribution; the topic moves to the May-8 cycle.' Reissue v2 of the HTML and Markdown deliverables.","priority":"high"}
]}
```
