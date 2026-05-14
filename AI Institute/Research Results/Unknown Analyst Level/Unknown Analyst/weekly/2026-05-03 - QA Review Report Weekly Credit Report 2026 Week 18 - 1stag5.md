---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report: Weekly Credit Report (2026 Week 18)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report: Weekly Credit Report (2026 Week 18)

**Reviewer:** QA Manager  
**Review Date:** 2026-05-03  
**Files Covered:** 01_weekly_plan.md / 01_weekly_plan.en.md / 02_weekly_research.md / 02_weekly_research.en.md / 03_weekly_report.html / 03_weekly_report.md

---

## 1. File Manifest

| Declared File | Present in Workspace | Notes |
|---|:---:|---|
| `01_weekly_plan.md` | Yes | 4,114 bytes — normal |
| `01_weekly_plan.en.md` | Yes | 4,556 bytes — normal |
| `02_weekly_research.md` | Yes | 20,921 bytes — normal |
| `02_weekly_research.en.md` | Yes | 25,392 bytes — normal |
| `03_weekly_report.html` | Yes | 39,863 bytes — normal |
| `03_weekly_report.md` (supplemental output) | Yes | 12,522 bytes — not declared in plan but adds value |

**Conclusion:** All declared files are present and well above the 200-byte threshold. Step 03 additionally produced a Markdown companion file. **No missing files.**

---

## 2. Cross-Step Consistency

Six data points cited across multiple steps were spot-checked:

| Item | Step 01 | Step 02 | Step 03 (Report) | Consistent? |
|---|---|---|---|:---:|
| April Manufacturing PMI | **49.8%** | **50.3%** (explicit correction of Step 01) | 50.3% | ❌ 01 vs. 02/03 conflict |
| Politburo meeting property language | **"coordinated research on digesting existing housing stock and optimizing incremental housing"** (2024 phrasing) | **"striving to stabilize the real estate market and advance urban renewal"** (explicit correction) | Aligned with 02 | ❌ 01 vs. 02/03 conflict |
| AA+ 1Y/3Y/5Y vs CDB approximate spread | — | 16.68 / 21.02 / 24.34 bp | 16.68 / 21.02 / 24.34 bp | ✅ Consistent |
| Vanke 2025 net profit / operating cash flow | — | -¥88.556B / -¥9.88B | -¥88.556B / -¥9.88B | ✅ Consistent |
| 2026Q1 refinancing bonds for debt replacement / share of annual quota | — | ¥960.4B / 48.0% | ¥960.4B / 48.0% | ✅ Consistent |
| Yunnan Urban Construction & Real Estate debt extension | — | ¥19.60B | ¥19.60B | ✅ Consistent |

**Key conflicts explained:**

- **PMI error (−1.4pp gap, direction wrong):** `01_weekly_plan` records April 2026 manufacturing PMI as 49.8% (contraction territory). The NBS actual print was 50.3% (expansion territory). Step 02 explicitly corrects this in its opening disclaimer paragraph, and Step 03 uses the correct figure. However, the error is now part of the archived package and, if the plan file is cited in isolation, it will mislead.

- **Politburo property language (wrong vintage):** Step 01 quotes the April 30, 2024 Politburo language — a full year earlier than this week's meeting — as the April 28, 2026 meeting output. Step 02 explicitly corrects this. The substantive implication matters: the 2024 "digest housing stock" framing is more bullish for property credit than the 2026 "stabilise + urban renewal" framing. Because Step 03 uses the corrected language, the analytical conclusions are sound, but the plan document contains a misleading policy anchor.

---

## 3. Narrative Coherence

### 3.1 Plan Questions → Research Answers → Report Conclusions

| Plan Question (Step 01) | Research Coverage (Step 02) | Report Treatment (Step 03) | Chain Intact? |
|---|---|---|:---:|
| Q1: Can Politburo's "inventory digestion" policy materially improve Vanke/Gemdale credit valuations? | Full analysis ("valuation floor" not "rating floor"), data table, counterarguments | Deep-dive section with consistent conclusion | ✅ Complete |
| Q2: Which regional LGFV platforms carry the highest rating risk post-annual reports? | 6-province ranked table, Yunnan first, evidence cited | Mirrored ranking with consistent conclusions | ✅ Complete |
| Q3: Have AA+ spreads hit a historical floor under PMI softness + asset famine? | Exact spread calculations (Cbonds), comparison to Dongfang Jincheng March report historical percentile | Data table and strategy implication fully presented | ✅ Complete |
| Q4: How much do special refinancing bonds relieve non-standard overdue pressure? | 6-indicator table, Chongqing/Xinjiang case studies | Conclusion table aligned with Step 02 | ✅ Complete |

### 3.2 Visualization Plan → Execution

| Planned Visualization (Step 01) | Actual Delivery (Step 02/03) | Gap |
|---|---|---|
| Chart 1: LGFV spread heatmap by province | ✅ Data table in 02; SVG heatmap in 03 HTML | None |
| Chart 2: Scatter — property sales YoY vs. bond price change | ⚠️ Replaced with "sales + credit events + index proxy" table; reason: public channels lack per-issuer traded prices | Substitution is analytically sound but **final report does not inform the reader that a substitution was made** |
| Chart 3: 2025 annual report radar chart | ✅ Risk-score table in 02; risk matrix in 03 | None |
| Chart 4: Trading volume + liquidity premium bar-line chart | ✅ Data table in 02; combo chart in 03 HTML | None |

### 3.3 Orphaned Items / Coverage Gaps

- **Primary market data flagged "pending terminal verification":** Both 02 and 03 label the issuance/redemption/net-financing figures for LGFV, property, coal, and steel bonds as "Wind-pending confirmation." This caveat does not surface in the five key conclusions or in the risk traffic lights, creating a mismatch where conclusions are stated with high confidence while the underlying data is still provisional.

- **May FOMC treatment in forward outlook:** Step 03's tracker lists "May FOMC and foreign-bank allocation shifts in Chinese dollar bonds" as a watch item but provides no directional call. A reader arriving at the forward outlook section gets no view on which scenario (dovish/hawkish/in-line) the report authors consider most likely or how it would feed through to LGFV/property dollar-bond spreads.

---

## 4. Editorial Quality

Four specific edit suggestions for `03_weekly_report.md` (and the equivalent HTML version):

1. **Executive summary is too long; condense to three sentences.** The current executive summary runs ~120 characters and chains together PMI data, policy language, spread levels, debt-resolution progress, and individual issuer events in one breath. Recommended structure: one sentence on the macro backdrop (PMI + policy), one on the spread-level implication (AA+ at "prevent-reversal" lows), and one on the tail-risk anchor (Vanke + Yunnan). Move the "40% principal / 60% extension" detail to the Q1 deep-dive where it already appears.

2. **AA+ spread table should disclose the two-day date mismatch.** Table 2.2 juxtaposes AA+ curve data from 2026-04-27 with CDB curve data from 2026-04-29. The individual dates are shown, but neither the column header nor the table footer labels these as "approximate spreads." A reader who copies the 16.68/21.02/24.34 bp figures will likely treat them as simultaneous observations. Suggested fix: add a table footnote: *"Approximate spreads — AA+ curve dated 2026-04-27, CDB curve dated 2026-04-29 (Cbonds free-tier lag); final version should recalculate on a common date using ChinaBond terminal."*

3. **Chart 2 substitution is invisible to the reader.** The deep-dive section for Q1 contains a proxy comparison table (sales figures + credit proxies + index observations) rather than the planned scatter plot. Step 02 explains the data-access constraint clearly, but Step 03 presents the table without any indication that it is a substitute. Add a one-line note above the table: *"Note: Per-issuer traded prices for this week were not available via public channels; the following table uses observable sales data, public announcements, and index proxies as stand-ins for a scatter comparison."*

4. **Risk traffic lights lack a classification key.** Section 6 applies red/yellow/green labels without stating the criteria — is the signal based on event probability, loss severity, or imminence? Adding a one-line legend (e.g., "🔴 = high-probability near-term loss event; 🟡 = medium-term volatility risk; 🟢 = supporting factor / positive signal") would make the table independently legible and defensible to a PM audience.

---

## 5. Recommended Revisions

Prioritised:

- **P1 — Must fix before submitting to PM**
  - Add a correction notice to `01_weekly_plan.md` and `01_weekly_plan.en.md`: either (a) a brief inline errata block at the top citing the two corrected values and directing readers to 02_weekly_research.md, or (b) a "post-event revision" note at the end of the file. The plan files should not be left with materially wrong figures as permanent archival records.
  - Add the approximate-spread footnote to Table 2.2 in `03_weekly_report.md` and the HTML equivalent (see Editorial point 2 above).

- **P2 — Strongly recommended before distribution**
  - Add Chart 2 substitution notice (see Editorial point 3).
  - Add traffic-light classification key (see Editorial point 4).
  - Add "(pending Wind terminal confirmation)" qualifier to Conclusion 4 and/or in the primary-market section header.

- **P3 — Minor; can address in the next cycle**
  - Trim executive summary to three sentences.
  - Add a one-line directional call to the May FOMC watch item in the forward-outlook tracker.

---

## 6. Overall Rating

**`needs-revision`**

The planning document (Step 01) contains two material factual errors — a PMI reading off by 0.5pp in the wrong direction, and a Politburo policy quote from the prior year — that were explicitly corrected in Step 02 but remain uncorrected in the archived plan files. The final report (Step 03) is analytically sound and internally consistent with the corrected data, but carries two transparency deficiencies: the date-mismatch in the approximate spread calculation is undisclosed, and the Chart 2 substitution is invisible to readers. Completion of P1 revisions is sufficient to upgrade this package to `pass`.

---

```json
{"follow_ups":[
  {"to":"china-macro","subject":"Directional impact of May FOMC (dovish/hawkish/in-line) on offshore Chinese LGFV and property dollar-bond spreads","question":"The 2026 Week 18 credit report lists 'May FOMC outcome and foreign-bank allocation shifts in Chinese dollar bonds' as a next-week watch item (2026-05-05 to 2026-05-09) but provides no directional call. Please assess: (1) If May FOMC is unexpectedly dovish (e.g., signals June-July rate cuts), what is the likely direction and approximate magnitude of spread movement for offshore Chinese LGFV dollar bonds and property dollar bonds, and which issuer tier benefits most? (2) If FOMC is hawkish or in-line, what is the impact on the same two asset classes? The answer should be self-contained and ready to insert into the forward-outlook section of the following week's credit report.","priority":"normal"},
  {"to":"credit-analyst","subject":"Root-cause and process fix for two factual errors in 01_weekly_plan.md","question":"The 2026 Week 18 weekly research plan (01_weekly_plan.md) contains two factual errors that were explicitly corrected in 02_weekly_research.md: (1) April 2026 manufacturing PMI stated as 49.8% (actual: 50.3%); (2) April 28, 2026 Politburo real estate language quoted verbatim from the April 30, 2024 meeting. The fact that 02 corrected both errors suggests the research stage caught them, but the corrections did not flow back to the plan document. Please clarify: was the plan written before the events occurred (using expected/placeholder data) or were the errors introduced post-event? If pre-event, should the workflow include a mandatory post-event plan-file update to preserve archival accuracy? This review needs the process question answered before formalising a checklist change.","priority":"normal"}
]}
```
