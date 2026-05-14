---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Memo: 2026-W18 Global Macro & AI Tech Weekly

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Memo: 2026-W18 Global Macro & AI Tech Weekly

**Reviewer:** QA Manager
**Review date:** 2026-05-03
**Scope:** 01_weekly_plan(.md/.en.md), 02_weekly_research(.md/.en.md), 03_weekly_report.html, 03_weekly_report.md

---

## 1. File Manifest

| Declared file | Present | Bytes | Note |
|---|:---:|---:|---|
| `01_weekly_plan.md` | Yes | 4,126 | Chinese plan, structurally complete |
| `01_weekly_plan.en.md` | Yes | 4,287 | English mirror complete |
| `02_weekly_research.md` | Yes | 15,113 | Chinese research with full Method/Findings/Evidence/Caveats sections |
| `02_weekly_research.en.md` | Yes | 16,923 | English mirror complete |
| `03_weekly_report.html` | Yes | 39,820 | Self-contained, includes inline SVG charts |
| `03_weekly_report.md` | Yes | 10,199 | Markdown companion consistent with the HTML |

**Conclusion:** Manifest is 100% complete; no missing files and no zero-byte deliverables.

---

## 2. Cross-Step Numerical Consistency

| Spot check | Plan stage | Research stage | Report stage | Consistent? |
|---|---|---|---|:---:|
| DeepSeek V4-Pro discount vs GPT-5.5 | "97% price advantage" | output -88.4% ($3.48 vs $30) | -88.4% | ⚠️ Plan claim was falsified by research and rewritten; report aligns with research |
| DeepSeek V4-Flash price | Not separately stated | $0.28/M output (-99.1%) | $0.28/M (-99.1%) | ✅ Aligned |
| FOMC target range | Assumed hold | 3.50%-3.75% held | 3.50%-3.75% | ✅ Aligned |
| Powell mentions of "AI" | Assumed: "first mention of AI-driven TFP" | 0 in transcript | 0 | ⚠️ Plan assumption falsified and explicitly corrected; report aligns with research |
| 10Y UST (4/27 / 4/29 / 5/1) | — | 4.35% / 4.42% / 4.39% | 4.35% / 4.42% / 4.39% | ✅ Aligned |
| Big-3 quarterly Capex sum | Plan only said "hundreds of billions" | $110.753B | $110.75B (rounded) | ✅ Aligned |
| Big-3 cloud revenue sum | — | $92.309B | $92.31B | ✅ Aligned |
| April Manufacturing PMI | Assumed "domestic recovery" | 50.3 | 50.3 | ✅ Aligned |
| April Non-manufacturing activity | — | 49.4 (contraction) | 49.4 | ✅ Aligned |
| April NFP release date | Assumed 5/1 | BLS scheduled 2026-05-08 | 5/1 not NFP day; tracked for 5/8 | ⚠️ Plan calendar error corrected by research/report |

**Conclusion:** Numbers from research to report are fully self-consistent. The research stage deserves explicit credit for catching and correcting three plan-stage errors ("97% discount", "Powell mentioned AI", "5/1 is NFP day"), all of which the report carries forward intact.

---

## 3. Narrative Coherence

| Plan question | Research answer | Report conclusion | Status |
|---|---|---|---|
| Q1 AI price war / NVDA impact | Question 1 | C1 + C5 | ✅ Fully covered, additionally split into pricing vs non-CUDA supply-chain risk |
| Q2 Fed AI-productivity new paradigm | Question 2 (answer: no evidence) | C2 | ✅ Negative confirmation is a valid closure |
| Q3 Big Tech Capex sustainability | Question 3 | C3 | ✅ Fully covered |
| Q4 China PMI / export-orders divergence | Question 4 (answer: divergence narrowed, not widened) | C4 | ✅ Fully covered with the inverse of the plan's premise |
| Plan §1.6 USD/CNH holiday liquidity | Not surfaced as a separate question | Not addressed in conclusions or risk table | ⚠️ Mild orphan: a plan flag never lands in the deliverable |
| Plan data list: VIX, SOFR, FedWatch | Research caveats note FedWatch could not be auditably snapshotted | Report does not separately disclose VIX/SOFR | 📝 Acknowledged in research caveats and acceptable, but a one-line "no liquidity anomaly observed" in the report would close the loop |

**Conclusion:** All four primary questions close cleanly, and three plan-stage misconceptions get corrected along the way. The only mild gap is the pre-Labor-Day USD/CNH offshore liquidity theme that the plan flagged but the report does not pick back up.

---

## 4. Editorial Quality

Targeted at `03_weekly_report.md` / `.html`:

1. **The "2026-05-06 (Tue) MSFT/GOOGL/AMZN follow-up 10-Q" item in next-week tracking is weakly framed.** The headline numbers shipped on 4/28–30; the 10-Q is supplemental disclosure, not an event. Reframe as "On 10-Q release, scrutinize: lease commitments, power contracts, capex line items in cash-flow statement" to anchor on auditable fields.
2. **The risk-light table mixes near-term and 2027-horizon risks with no time bucketing.** Split into "this-week-to-next-month" vs "2026H2–2027" tiers, with red/yellow/green within each tier. Today the 🔴 red light "Capex utilization risk" pointing at 2026–2027 sits next to the 🟡 yellow light "NFP > 200K" near-term trigger and reads incoherently.
3. **The Executive Summary is accurate on "10Y rose to 4.42% then eased to 4.39%" but should add "front-end rose more (2Y +14bp)" to match the body's "mild bear flattening" verdict.** This tightens the summary-vs-body voice.
4. **In the HTML chart labels, prefix the AI matrix with "by output price".** Today the matrix label is "price vs capability" — a first-glance reader could assume input pricing is in scope. Stating the metric explicitly removes the ambiguity.

---

## 5. Recommended Revisions (prioritized)

- **[Low]** Append one footnote to the Executive Summary or the head of the deep-dive section flagging the three plan-stage corrections ("-97%" → -88.4%, "Powell first mentioned AI" → 0 mentions, "5/1 NFP" → 5/8 NFP). This advertises the research process's self-audit value to the PM.
- **[Low]** Bucket the risk table by time horizon (see §4, item 2).
- **[Low]** Tighten the 5/6 10-Q item language (see §4, item 1).
- **[Low]** Add one line on USD/CNH / VIX / SOFR observed conditions (see §3).
- **[Low]** Add the "output-price" qualifier to HTML chart labels.

No high-priority blockers; every revision improves PM readability without overturning any conclusion.

---

## 6. Overall Grade

**`pass`**

> All three stages delivered, numbers are fully self-consistent, and the research stage proactively corrected three factual errors from the plan stage which the report inherits cleanly. The four plan questions converge into a clean 5-conclusion + 8-item watchlist + 6-light risk table format. Remaining revisions are presentation polish and do not block PM hand-off.

---

## Coordination Requests (none)

This week's deliverables are PM-ready as-is and do not raise concrete technical questions that require another analyst's follow-through. Routine sector / strategy follow-on (e.g. by `chief-strategist`, `global-macro`, or `tmt-analyst`) should be assigned by the PM at the next standing meeting; QA is not initiating a cross-analyst request.
