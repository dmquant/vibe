---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Research Quality Review — Week 5 of April 2026

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Research Quality Review — Week 5 of April 2026

**Reviewer:** QA Manager (Head of Research Quality)
**Workflow audited:** Step 01 plan → Step 02 research → Step 03 visualization & weekly report
**Review date:** 2026-05-03
**Coverage window of artifacts under review:** 2026-04-27 to 2026-05-01

---

## 1. File manifest

| Declared file | Exists in workspace | Bytes | Note |
|---|---|---:|---|
| `01_weekly_plan.md` | Yes | 4,147 | Simplified Chinese plan, complete |
| `01_weekly_plan.en.md` | Yes | 4,525 | English plan, aligned with the Chinese version |
| `02_weekly_research.md` | Yes | 15,556 | Chinese research execution, 5-question structure plus visualization data tables |
| `02_weekly_research.en.md` | Yes | 16,976 | English research execution |
| `03_weekly_report.html` | Yes | 46,490 | Self-contained, includes four inline SVG charts and red/yellow/green risk cards |
| `03_weekly_report.md` | Yes | 13,764 | Markdown weekly report, structurally complete |
| `QA_review.md` | This file | — | Current document |
| `QA_review.en.md` | Co-produced | — | English version of this review |

**Conclusion:** All upstream deliverables are present on disk; nothing missing.

---

## 2. Cross-step consistency

Spot-checks of numbers, dates, and tickers that appear in more than one step:

| # | Item | Step 01 plan | Step 02 research | Step 03 weekly report | Consistency |
|---|---|---|---|---|---|
| 1 | Q1 2026 real GDP (SAAR) | `1.2%` | `2.0%` | `2.0%` | **Conflict resolved**: Step 02 explicitly flagged the plan's value vs. the BEA release and switched to `2.0%`; Step 03 carries the corrected value. |
| 2 | March core PCE (y/y) | `3.1%` | `3.2%` | `3.2%` | **Conflict resolved**: same correction path. |
| 3 | April ISM Manufacturing PMI | `52.8%` | `52.7` | `52.7` | **Conflict resolved**: Step 02 substituted ISM's published `52.7`. |
| 4 | 2026-06-17 FOMC hold probability | not quantified | `93.4%` | `93.4%` | Consistent |
| 5 | 2026-10-28 FOMC cumulative cut probability | not quantified | `14.2%` (research narrative and visualization table; verified by summing the four heat-map rows: `0.7% + 13.5% = 14.2%`) | **`16.2%`** | **Conflict**: the report's "Chart 1" dashboard and "Question 1" deep-dive both print `16.2%`, which disagrees with both the research stage and the heat-map row sum. |
| 6 | April ISM Prices Index | not quantified | `84.6` | `84.6` | Consistent |
| 7 | ISM Prices Index, 3-month rise | not quantified | `+25.6` pts (`84.6−59.0`) | `+25.6` pts | Consistent |
| 8 | 2026-04-29 FOMC vote split | not quantified ("hold unchanged" only) | `8-4` (Miran for a cut; Hammack, Kashkari, Logan against any easing bias) | `8-4` | Consistent |
| 9 | SPY May 1 vs Apr 30 volume | not quantified | `43.05mn` vs `67.24mn`, `-36.0%` | `43.05mn`, `-36%` | Consistent |
| 10 | HSI 2026-04-30 close | not quantified | `25,776.53`, `-1.28%` | `25,776`, `-1.28%` | Consistent (rounding does not affect the conclusion) |
| 11 | Tone of policy guidance | "Powell's dovish guidance / dovish stance" | Hawk/dove split, market re-anchored on "no rush to cut" | "Hold but more hawkish" | **Narrative conflict already corrected at the research stage**: the plan's "dovish" framing is inconsistent with the actual `8-4` hawkish dissent and the FedWatch repricing; Steps 02 and 03 adopted the corrected "near-term cut window has narrowed" framing. |

**Headline findings:**
- **Critical fix needed**: in the report's "Chart 1 — FedWatch probability distribution," the 2026-10-28 "current cumulative cut probability" column reads `16.2%`, contradicting Step 02's `14.2%` (which also matches the four-bin sum of the heat map). The same `16.2%` is repeated in the "Question 1" deep-dive table. Both occurrences must be corrected before publication.
- **Three plan-stage values were explicitly corrected at the research stage and propagated cleanly downstream**, so none of the errors leaked into the weekly report. The self-correction loop worked. We recommend appending a one-line "plan-stage data corrections" footnote to the weekly report to preserve an audit trail.

---

## 3. Narrative coherence

Mapping the five planning questions to the research and report stages:

| Plan question | Step 02 answer | Step 03 presentation | Closed loop |
|---|---|---|---|
| Q1 Policy pivot signal | Question 1: FedWatch day-on-day / week-on-week diff; conclusion "patient hold, no near-term cut window opened" | Executive summary + Question 1 deep-dive + Chart 1 | Yes |
| Q2 Stagflation risk | Question 2: GDP `2.0%` x core PCE `4.3% SAAR`; conclusion "soft landing under reflation pressure" | Question 2 deep-dive + Chart 2 | Yes |
| Q3 Cost pass-through | Question 3: ISM Prices `84.6`, Dallas Fed finished-goods prices `27.6`; conclusion "goods/PPI first, services TBD" | Question 3 deep-dive + Chart 3 | Yes |
| Q4 Labor cost trajectory | Question 4: ECI `0.9% q/q`, `3.4% y/y`, benefits `5.7%` y/y | Question 4 deep-dive | Yes |
| Q5 Post-holiday liquidity | Question 5: SPY `-36%`, HKEX closed, HSI pre-adjusted | Question 5 deep-dive + Chart 4 | Yes |

**Unsupported downstream conclusion:** the report's red-light risk card "FOMC hawk/dove split intensifies" mentions a "tail scenario for a hike this year," but FedWatch shows only `2.0%` for 2026-10-28 in the `3.75%–4.00%` bin and `0.0%` in June and July. The research narrative does not characterize a hike as a scenario. Recommend rewording to "no cut this year and a marginal hawkish bias" or "higher for longer," and removing the hike phrasing.

**Orphaned questions:** none. All five plan-stage questions are addressed in research and report.

**New material added at the report stage:** the "Question 3" deep-dive introduces a quantitative anchor of "transmission lag of roughly 2–4 months" and "~50% probability of full pass-through to core PCE." The research stage does not provide either anchor. This is a reasonable extrapolation, but should be softened with phrasing such as "based on historical experience" so readers do not mistake it for a model output.

---

## 4. Editorial quality

Concrete edit suggestions on the visualization-stage deliverable (`03_weekly_report.md` / `.html`):

1. **Fix the table value before publishing**: change `16.2%` to `14.2%` in both Chart 1 and the Question 1 table; cross-check that the "6.6% June cut probability" line in the executive summary remains the most actionable figure, and consider adding "the most-priced 2026 cut meeting is October at only 14.2%" so the framing stays consistent across sections.
2. **Re-tone the headline**: the current "FOMC decision and core inflation, a double test" inherits the weak plan-stage framing. Consider an investable subhead like "FOMC 8-4 hawk/dove split + core PCE re-acceleration: cut window pushed out," so the key facts and timing implication land immediately.
3. **Chart styling and axes**: in Chart 1 (heat map), use neutral grey for "hold," blue for "cut," and red for "hike" bins; in Chart 2, mark both Y axes explicitly as "% (SAAR)" and surface the 2025 Q1 `-0.6%` negative tick — otherwise readers can mistake the negative quarter for "near-zero."
4. **Risk-card wording**: the red light "FOMC hawk/dove split intensifies" reads alarmist and the "tail scenario for a hike this year" phrase has no FedWatch support. Reword as "higher for longer." On the green light, "soft-landing path supported by domestic demand resilience," qualify the "hard-landing risk remains low" line with "Q1 GDP is an advance estimate; do not over-anchor before the May 28 revision."
5. **Add a "plan-stage data corrections" footnote**: a 4-line footnote at the end of the report noting that the plan-stage values `1.2% GDP`, `3.1% core PCE`, and `52.8 ISM PMI` were superseded by `2.0%`, `3.2%`, and `52.7` after the official releases. Keeps the audit trail.

---

## 5. Recommended revisions

Prioritized punch list to apply before the report is shown to the PM:

- **[Must-fix]** Correct 2026-10-28 cumulative cut probability in the report's Chart 1 and Question 1 from `16.2%` to `14.2%`; mirror the change in the HTML SVG annotation.
- **[Must-fix]** Reword the red-light risk card: replace "tail scenario for a hike this year" with "higher for longer / marginal hawkish bias," because the FedWatch distribution does not support a hike scenario.
- **[Should-fix]** Add a one-line note at the top of the executive summary: "Three values are updated from the plan stage to align with BEA/ISM releases: Q1 GDP `2.0%` (was `1.2%`), March core PCE `3.2%` (was `3.1%`), April ISM PMI `52.7` (was `52.8`)."
- **[Should-fix]** Update the H1 headline or lead so that "8-4 hawk/dove split" anchors the week's narrative explicitly, distinguishing from the plan's "dovish" framing.
- **[Nice-to-have]** Apply the chart-styling and axis-labeling tweaks from §4.3; soften the "~50% transmission probability" line in Question 3 with "based on historical experience."
- **[Nice-to-have]** Add a contingent comment to the May 8 nonfarm/AHE row in the watchlist: "If average hourly earnings m/m ≥ 0.4%, expect repricing of September cut probability," to chain back to this week's ECI read.

---

## 6. Overall grade

**`needs-revision`**

The package's logic loop closes, sourcing is authoritative, and the research stage successfully reconciled the plan's data errors before they reached the report. However, the weekly report contains one locatable numeric error (October 28 cut probability `16.2%` vs `14.2%`) and one piece of "tail scenario for a hike" wording that is not supported by FedWatch. Both must be corrected before sending to the PM, and a short "plan-stage data corrections" footnote should be appended to preserve the audit trail.

---

*Review based on: `01_weekly_plan.md`, `02_weekly_research.md`, `03_weekly_report.md`, `03_weekly_report.html`.*
*Scope: file completeness, cross-step numerical consistency, question-to-answer-to-conclusion loop closure, editorial quality. Deliverables are not rewritten.*
