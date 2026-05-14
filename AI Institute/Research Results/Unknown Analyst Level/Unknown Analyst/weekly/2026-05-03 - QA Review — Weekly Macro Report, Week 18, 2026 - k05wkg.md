---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review — Weekly Macro Report, Week 18, 2026

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review — Weekly Macro Report, Week 18, 2026

**Reviewer: QA Manager**  
**Review date: 2026-05-04**  
**Coverage window: 2026-04-27 → 2026-05-01**

---

## 1. File manifest

| Declared file | Exists in workspace | Bytes | Note |
|---|---|---:|---|
| `01_weekly_plan.md` | Yes | 4,274 | Chinese plan, structurally complete |
| `01_weekly_plan.en.md` | Yes | 4,549 | English plan, mirrors Chinese |
| `02_weekly_research.md` | Yes | 20,855 | Chinese research, evidence-rich |
| `02_weekly_research.en.md` | Yes | 22,706 | English research |
| `03_weekly_report.html` | Yes | 45,053 | Includes 4 inline SVG/HTML charts |
| `03_weekly_report.md` | Yes | 9,009 | Markdown version, numerically consistent with HTML |

**Conclusion:** All upstream deliverables are present. No gaps; substantive review can proceed.

---

## 2. Cross-step consistency

Spot-check of values appearing in two or more steps:

| Item | Plan (01) | Research (02) | Report (03 md/html) | Verdict |
|---|---|---|---|---|
| Q1 GDP advance estimate | "Q1 GDP advance" | **2.0% SAAR** vs Reuters 2.3% consensus | **2.0% SAAR**; HTML same | ✅ Consistent |
| March core PCE YoY | "PCE & Core PCE YoY/MoM" | **3.2% YoY** (in-line with consensus) | **3.2% YoY**; HTML same | ✅ Consistent |
| Q1 annualized core PCE | Not quantified in plan | **4.3% SAAR** | **4.3% SAAR**; HTML same | ✅ Consistent |
| March NFP | Plan named April NFP (May 1) | Pivoted to latest available March **+178k**; 6-month avg +14.8k | **+178k**, 6-mo avg +14.8k; HTML same | ✅ Consistent (see ⚠ below) |
| FOMC policy rate | Plan did not pre-state | **3.50%–3.75%**, "4 dissents" | **3.50%–3.75%**, "3 dissents against easing bias" | ⚠️ Dissent count: research uses "4 dissents" in the core-PCE block but "1 vote for cut, 3 against easing bias" in the inflation block; the report adopts the latter. Reconcile to a single phrasing |
| Meta 2026 CapEx guide | Not quantified | **$125B–$145B** | **$125B–$145B**; HTML same | ✅ Consistent |
| Weekly SPX | — | **+0.95%**, AP Friday close 7,230.12 | **+0.95%**; HTML same | ✅ Consistent |
| Weekly oil | — | **+8.19%** | **+8.19%**; HTML same | ✅ Consistent |

**Critical calendar discrepancy (⚠️ Plan vs Research):**

- The plan assumed March JOLTS released 2026-04-28 and April NFP released 2026-05-01. Research verified the BLS calendar and showed **March JOLTS is actually 2026-05-05 and April NFP is actually 2026-05-08** — neither falls in this week's window. Research therefore downgraded to the latest available data (February JOLTS, March NFP). The report acknowledges this in the Q2 section.
- The handling is correct, but the executive summary should explicitly note "calendar correction: NFP/JOLTS data deferred to next week" so a PM does not assume April labor data is already covered.

---

## 3. Narrative coherence

Plan's five analytical questions vs Research / Report answers:

| Plan question | Research answer | Reflected in report | Assessment |
|---|---|---|---|
| Q1 Growth-driver switch (inventory vs consumption) | 6-component decomposition; "not inventory-driven" | Summary + Q1 section + contribution table + stacked bar | ✅ Closed loop |
| Q2 Labor-market inflection | Substituted latest available data (March NFP, February JOLTS); "low-hire / low-fire" | Summary + Q2 section + yellow-light trigger | ✅ Closed loop (with explicit substitution note) |
| Q3 Sticky inflation & "another hike"? | Explicitly negates "three consecutive surprises" hypothesis but flags Q1 4.3% annualized core PCE as the real binding constraint | Summary + Q3 section + red-light trigger | ✅ Closed loop, gracefully refutes the original hypothesis |
| Q4 AI CapEx vs revenue divergence? | Stock-by-stock breakdown of 7 names; "not divergent overall, Meta is the exception" | Summary + Q4 section + green-light support | ✅ Closed loop |
| Q5 Long-weekend geopolitical hedge | Cross-asset matrix; "no hedge cluster formed, energy is the channel" | Summary + Q5 section | ✅ Closed loop |

**Orphan points / unsupported conclusions:**

- The trailing line in Report Q1 — "**Q2 risk lies in government-spending durability and trade-policy uncertainty**" — is a forward statement not directly developed in the research body (only IEEPA tariff refunds are mentioned in "limitations"). Mild extrapolation, not a hard error, but the forward-look section should anchor it to data.
- The risk panel uses "**NDX > 27,000**" as the green-light maintenance signal. The number is consistent with the 5-day Nasdaq-100 close of 27,710.36 (≈2.6% buffer), but no derivation rationale (key support, 200DMA, etc.) is provided — add a short footnote.
- The plan's Q5 hypothesis ("preventive USD + gold buying") was empirically falsified by research/report (gold -1.77%, USD weakened). This is a high-quality falsification but should also be flagged in the executive summary ("the original safe-haven hypothesis was rejected") to strengthen the narrative signal.

---

## 4. Editorial quality

Targeting `03_weekly_report.md` / `03_weekly_report.html`:

1. **Executive summary is too dense.** Currently a 200+ character single paragraph with five distinct conclusions packed in. Split into 3 thesis sentences (growth structure / inflation-policy constraint / risk-on tape) plus 5 bolded bullets to match a PM reading cadence.
2. **Chart 3 title needs disambiguation.** The NFP table is labeled "surprise proxy," but the "non-Bloomberg consensus" caveat lives outside the table — easily misread as a Bloomberg surprise. Rename the table to "NFP vs trailing 3-month average (public-data proxy, NOT Bloomberg consensus)."
3. **Risk of conflating 'Energy' usage.** Energy sector +3.53% (week) appears alongside WTI oil +8.19% without explicitly distinguishing sector ETF vs commodity. Add one sentence above the sector table: "Energy sector +3.53% lagged WTI +8.19%, implying single-stock beta discount."
4. **Red/yellow/green color logic could be sharpened.** The current taxonomy (inflation / labor / tech) is reasonable, but "green = tech earnings support" reads as a positive conclusion rather than a risk note. Reframe as "Green: stage-of-cycle support (trigger to flip yellow: …)."
5. **HTML version should add an anchor TOC.** A 45KB report with no jump-navigation is inconvenient for terminal/meeting use; add a sticky TOC at the top.

---

## 5. Recommended revisions (prioritised)

- **[High] Reconcile the FOMC dissent count.** The research file has both "4 dissents" and "1 for cut, 3 against easing bias" within the same document; this must be unified to a single phrasing tied to the 2026-04-29 FOMC statement. The report inherits the ambiguity and a PM will challenge it.
- **[High] In the executive summary, explicitly declare the Plan vs Research data-calendar gap.** Add: "April NFP / March JOLTS were both deferred beyond this window; this report uses March NFP / February JOLTS as latest available." Prevents a PM from misreading the report as containing April labor data.
- **[Medium] Add one summary line: "the original safe-haven hypothesis (USD + gold bid) was rejected by the tape,"** strengthening the Q5 signal and closing the loop on the plan's research questions.
- **[Medium] The Report Q1 closing forward statement on Q2 risk should be data-anchored** — either reference government-spending contribution (+0.73 pct, federal +0.56 pct) or remove the line.
- **[Medium] Merge Chart 3 caption into its title** to clarify proxy provenance; mirror this caption in the HTML.
- **[Low] HTML: add anchor TOC; markdown report: add Energy sector vs WTI comparison note.**
- **[Low] Rewrite the green-light risk box as "stage-of-cycle support + trigger to flip yellow."**

---

## 6. Overall rating

**Rating: `needs-revision`**

Evidence chain is solid, numbers are consistent across steps, and the analytical loop closes cleanly — but one numerical-phrasing ambiguity (FOMC dissent count) and one mandatory disclosure gap (Plan vs Research calendar) must be fixed before the report is shown to a PM.

---

```json
{"follow_ups":[
  {"to":"global-macro","subject":"Reconcile FOMC dissent count and disclose data-calendar gap","question":"Using the 2026-04-29 FOMC statement official voting record, unify the FOMC dissent phrasing across Research and Report (currently the same document carries both '4 dissents' and '1 vote for cut, 3 against easing bias'); and add an explicit line in the Report executive summary declaring that April NFP (actual release 2026-05-08) and March JOLTS (actual release 2026-05-05) are deferred beyond this week's window, so the report uses March NFP and February JOLTS as latest available. Rewrite the files in place in the workspace.","priority":"high"}
]}
```
