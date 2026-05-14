---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review · HK/US Weekly Report (2026-W18)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review · HK/US Weekly Report (2026-W18)

**Reviewer:** QA Manager
**Coverage week:** 2026-04-27 → 2026-05-01
**Subject:** Step 01 (Weekly plan) · Step 02 (Deep research) · Step 03 (Visualization / report)
**Review date:** 2026-05-04

---

## 1. File manifest

| Declared file | Exists in workspace | Bytes | Note |
|---|---|---:|---|
| `01_weekly_plan.md` | Yes | 3,645 | Simplified-Chinese plan, structurally complete |
| `01_weekly_plan.en.md` | Yes | 3,876 | English mirror |
| `02_weekly_research.md` | Yes | 16,061 | CN deep research, all four questions answered |
| `02_weekly_research.en.md` | Yes | 17,492 | English mirror |
| `03_weekly_report.html` | Yes | 36,612 | Presentation-ready, inline-SVG charts |
| `03_weekly_report.md` | Yes | 12,855 | Markdown mirror |
| `QA_review.md` | Yes (this review, CN) | — | Companion CN file |
| `QA_review.en.md` | Yes (this file) | — | English version |

**Verdict:** All six upstream deliverables are present and non-trivial in size. No file-level gaps.

---

## 2. Cross-step numerical consistency

| Spot-check | Step 01 (Plan) | Step 02 (Research) | Step 03 (Report) | Verdict |
|---|---|---|---|---|
| AAPL EPS surprise | not numerically stated | +3.08% | +3.08% | ✅ Consistent |
| AMZN EPS surprise | not numerically stated | +70.55% | +70.55% | ✅ Consistent |
| Core PCE YoY | not numerically stated | +3.2% | +3.2% | ✅ Consistent |
| 10Y Treasury range | not stated | 4.35% → 4.39%, weekly high 4.42% | Same | ✅ Consistent |
| Southbound 4-day net buy | not stated | +HKD18.671bn | +HKD18.671bn | ✅ Consistent |
| BABA ADR premium | question raised, no value | +1.23% (vs 9988.HK HKD126.00) | +1.23% | ✅ Consistent |
| **700.HK Apr-30 close** | not stated | Q4 uses **467.80**; key-data table uses **468.90** | Table uses **468.90**; Q4 narrative uses **467.80** | ⚠️ **Internal inconsistency** — Step 02 and Step 03 both reference two different Apr-30 closes (ET Net 467.80 vs main board 468.90) without footnoting the vendor difference. The TCEHY +1.22% premium denominator therefore differs from Table 5's weekly-return denominator |
| TCEHY ADR pricing timestamp | not stated | Apr-30 OTC USD61.02 | Same | ⚠️ **Asymmetric timing** — BABA uses May-1 close (USD131.50) but TCEHY uses Apr-30 close (USD61.02), one trading day apart. The two premia are not directly comparable and the limitation paragraph does not flag this |

**Verdict:** Headline numbers (EPS beats, PCE, 10Y, southbound total, BABA premium) are consistent across steps. The 700.HK Apr-30 close needs a footnote reconciling the ET Net (467.80) vs main-board (468.90) prints in both Q4 and Table 5.

---

## 3. Narrative coherence (planner → research → report)

| Step 01 core question | Step 02 answers? | Step 03 carries through? |
|---|---|---|
| Q1 Valuation (AAPL/AMZN AI monetization) | ✅ Q1 supplies EPS, revenue, AI evidence | ✅ Report Q1 + Table 4 + red/green-light callouts |
| Q2 Policy (PCE & Higher for Longer) | ✅ Q2 supplies BEA prints + 10Y reaction | ✅ Report Q2 + Table 2 + red-light callout |
| Q3 Liquidity (pre-holiday Southbound) | ✅ Q3 supplies daily flow + name-level breakdown | ✅ Report Q3 + Table 3 + red/green-light callouts |
| Q4 ADR arbitrage signal for HK reopen | ✅ Q4 supplies conversions + premia | ✅ Report Q4 + watch-list pickup |

**Orphan topics raised in the plan but not carried through:**

1. **JPY exchange-rate volatility & carry-trade unwind (04-28)** — listed as the 4th material development in Step 01; entirely absent from research and report. A complete orphan that weakens the macro narrative.
2. **AI compute dispersion (DeepSeek V4 impact)** — Step 01 listed it as the 5th independent topic; Step 02 only touches it via NVDA -4.72% in one sentence; Step 03 yellow-light reasserts "DeepSeek V4 penetration" without any underlying evidence chain. Partial answer, insufficient depth.
3. **Visualization 3 (tech / financial / cyclical stacked-area chart)** — planned chart; Step 02 explicitly admits the public sources do not disclose daily sector-level flows and substitutes name-level data. The substitution is reasonable, but Step 03 should mark Table 3's title or footnote with "*replaces planned stacked-area chart*" so the PM understands why the visual is different.

**Verdict:** Four core questions form a clean loop. But two of the six material developments listed in the plan (JPY, AI-compute dispersion) are not adequately covered. Either backfill them or add an explicit "out-of-scope this week" note in the executive summary.

---

## 4. Editorial quality

Concrete edits for `03_weekly_report.md` (and the HTML mirror):

1. **Add a footnote reconciling the 700.HK Apr-30 close used in Table 5 (468.90) with the price used in Q4 (467.80).** Even if both are sourced (main-board close vs ET Net quote), an inline footnote is required: "*700.HK Apr-30 main-board close 468.90; Q4 ADR-arbitrage analysis uses ET Net 467.80; the gap reflects vendor pricing differences.*"

2. **The executive summary is too dense to function as a summary.** A 250+-character paragraph stuffing five conclusions is not skim-friendly. Refactor into 3–4 single-line bullets, with the headline numbers (PCE +3.2% / 10Y 4.39% / Southbound +HKD18.671bn / ADR +1.23%) bolded and pulled forward.

3. **Watch-list 05-08 entry "700.HK 业绩前预热" (pre-earnings warm-up) is ambiguous.** Tencent's Q1 print typically lands mid-to-late May; "pre-earnings warm-up" could mean general expectation or a specific catalyst. Rewrite as actionable text, e.g., "*Pre-disclosure window for 700.HK Q1 results opens (full release expected ~May 14)*" so the reader knows what to monitor.

4. **The risk traffic-light section omits both color definitions and an impact horizon.** Red / Yellow / Green carry no explicit definition (one week? one month?). Add a header line: "*Color scale: Red = already triggered or high-probability trigger this week / Yellow = conditional trigger / Green = offsetting positive factor*" to prevent the PM from misreading it as a longer-term rating.

---

## 5. Recommended revisions (prioritized)

- **P1 · Must fix:** Footnote in `03_weekly_report.md` (and HTML) Table 5 / Q4 reconciling or labelling the 700.HK Apr-30 dual close (467.80 vs 468.90). Also extend the Q4 limitations paragraph to call out the BABA-uses-May-1 vs TCEHY-uses-Apr-30 ADR-timestamp asymmetry.
- **P1 · Must fix:** In the executive summary or in a dedicated "out-of-scope this week" subsection, explicitly state that JPY moves and AI-compute dispersion (planned topics) were not deeply covered, with the reason (e.g., prioritization, data availability) and whether they will be picked up next week. PMs will ask about this first.
- **P2 · Recommended:** Refactor the executive summary into 3–4 bolded single-line bullets with the headline numbers up front.
- **P2 · Recommended:** Annotate Table 3 title/subtitle as "*substitutes planned tech / financial / cyclical stacked-area chart*" with a one-line reason.
- **P3 · Optional:** Make the watch-list "700.HK 业绩前预热" entry actionable (specific date or named catalyst).
- **P3 · Optional:** Add a color-scale legend to the risk traffic-light section.
- **P3 · Optional:** The trailing data-source paragraph is long; split into four buckets (macro / US equities / HK equities / fund flows) for easier PM verification.

---

## 6. Overall grade

**`needs-revision`**

The four core questions close cleanly, headline numbers reconcile across steps, and Step 03 has shipped both a presentation-grade HTML and a synchronised Markdown — overall research quality clears the PM-reading bar. But the two P1 fixes (700.HK dual-close footnote and explicit acknowledgment of the planned-but-omitted topics) must be applied before this is presented to a PM; otherwise the PM's first questions will land on issues the analyst cannot cleanly answer.

---

```json
{"follow_ups":[
  {"to":"fx-strategist","subject":"JPY moves & carry unwind impact during week of 2026-04-27","question":"For the week of 2026-04-27 to 2026-05-01, did US-Japan rate-differential dynamics and JPY moves trigger measurable carry-trade unwind effects on global risk assets (especially HK / US tech)? Please provide the USD/JPY weekly range, key technical / psychological-level tests, and a judgment on indirect liquidity transmission to US tech (AAPL/AMZN/NVDA) and HK tech (HSTECH). This is an orphan development listed in the W18 weekly plan but not covered downstream and needs to be backfilled.","priority":"normal"}
]}
```
