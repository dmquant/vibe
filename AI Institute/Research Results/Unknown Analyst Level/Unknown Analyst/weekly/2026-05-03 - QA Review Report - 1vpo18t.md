---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report

- Reviewer: QA Manager
- Scope: Steps 01–03 weekly research package
- Research window: through 2026-05-01
- Review date: 2026-05-03

> **⚠️ Upstream Gaps**  
> `01_weekly_plan.md` and `01_weekly_plan.en.md` are absent from this workspace node (`ls -la` confirmed).  
> The research scope in Steps 2 and 3 was reconstructed from the workflow summary (baijiu earnings / Labor Day consumption forecasts / trade-in policy), not from the original plan files.  
> This review is as complete as the available material permits, but **Section 3 (Narrative Coherence) cannot fully verify the original question wording in the plan files**.

---

## 1. File Manifest

| Declared file | Exists in workspace | Note |
|---|:---:|---|
| `01_weekly_plan.md` | **No** | Written by Step 1 (gemini) per its summary, but not synced to this workspace node |
| `01_weekly_plan.en.md` | **No** | Same as above |
| `02_weekly_research.md` | Yes | 16,962 bytes; content complete |
| `02_weekly_research.en.md` | Yes | 21,335 bytes; content complete; numeric values consistent with the Chinese version |
| `03_weekly_report.html` | Yes | 41,382 bytes; inline SVG dashboards; styling complete |
| `03_weekly_report.md` | Yes | 12,115 bytes; plain-text companion; mentioned in the Step 3 summary but not in the original five-file expected list — counts as an extra deliverable |

**Impact of missing files:** Without `01_weekly_plan.md`, the QA reviewer cannot verify the exact question wording, prioritisation, or data-source plan from the planner. The first link in the plan → research → report chain cannot be directly confirmed.

---

## 2. Cross-Step Consistency

Six numerical / date / ticker data points were spot-checked between `02_weekly_research.md` (research stage) and `03_weekly_report.html` / `03_weekly_report.md` (visualization stage):

| Data point | Step 2 value | Step 3 value | Result |
|---|---|---|:---:|
| Kweichow Moutai 2026Q1 revenue | RMB 53.909 bn / +6.54% YoY | RMB 53.909 bn / +6.54% YoY | ✓ Match |
| Q1 trade-in driven sales | RMB 433.17 bn | RMB 433.17 bn | ✓ Match |
| Auto share of trade-in sales | 52.8% / RMB 228.69 bn | 52.8% / RMB 228.69 bn | ✓ Match |
| Q1 total retail sales of consumer goods | RMB 12,769.5 bn / +2.4% | RMB 12,769.5 bn / +2.4% | ✓ Match |
| Labor Day cross-regional passenger movements | 1.52 bn / +4.0% | 1.52 bn / +4.0% | ✓ Match |
| Luzhou Laojiao Q1 net profit YoY | -19.25% | -19.25% | ✓ Match |

**Additional back-of-envelope checks:**

| Derived metric | Calculation | Reported value | Result |
|---|---|---|:---:|
| Trade-in share of total retail sales | 433.17 ÷ 12,769.5 = 3.392% | 3.39% | ✓ Valid |
| Appliance/digital sales per unit | RMB 204.48 bn ÷ 59.525 mn units = RMB 3,435.2 | RMB 3,435.2 per unit | ✓ Exact |
| Auto subsidy-driven sales per application | RMB 228.69 bn ÷ 1.408 mn applications = RMB 162,400 | RMB 162,400 per application | ✓ Exact |
| Average trade-in sales per consumer visit | RMB 433.17 bn ÷ 60.933 mn visits = RMB 7,109 | RMB 7,109.0 per visit | ✓ Rounding diff RMB 0.3, acceptable |
| Q1 catering revenue YoY estimate | [(1,026.4×4.8%)+(435.9×2.9%)] ÷ 1,462.3 ≈ 4.23% | About +4.2% | ✓ Correctly flagged as an estimate |

**No numerical contradictions found.** All cross-step figures are fully consistent; derived calculations are arithmetically correct.

---

## 3. Narrative Coherence

### Plan → Research mapping

Based on the workflow summary (since `01_weekly_plan.md` is absent), the three research themes were:

| Planned theme (reconstructed from summary) | Covered in Step 2? | Carried into Step 3? |
|---|:---:|:---:|
| Baijiu earnings (cycle assessment) | ✓ Question 1, covering 6 companies across 2025 and 2026Q1 | ✓ Dashboard 1 + deep-dive 1 |
| Labor Day consumption forecast (traffic, average ticket) | ✓ Question 2, Ministry of Transport + OTA + historical tourism benchmarks | ✓ Dashboard 4 + deep-dive 2 |
| Trade-in policy quantification | ✓ Question 3, Ministry of Commerce Q1 data + NBS cross-check | ✓ Dashboards 2 & 3 + deep-dive 3 |

**No orphaned questions; no unanswered research hypotheses.** The three themes map cleanly across all stages.

### Evidence chains

- The **premium baijiu defensiveness** conclusion is supported by two independent sources for Kweichow Moutai (CNR annual-report coverage and China Financial Information Network Q1 report) and is explained structurally by iMoutai's +267.16% growth — chain is complete.
- The **sub-premium and regional baijiu pressure** conclusion draws on exchange filings and media reports for Luzhou Laojiao, Shanxi Fenjiu, and King's Luck; Gujing Gongjiu relies on a media excerpt only, which is correctly flagged as a limitation.
- The **trade-in** data originates from official Ministry of Commerce sources (CCTV/China News) cross-checked against NBS retail figures — evidence is strong.
- The **Labor Day** section uses only pre-holiday forecasts as of 2026-05-01, clearly labeled "to be released," with no fabrication of actual outcomes.

### Minor coherence gaps

1. **Wuliangye retrospective-adjustment context is incomplete.** Both Step 2 and Step 3 flag the adjustment but do not specify its nature (e.g., consolidation scope change vs. accounting standard revision). The risk table in the HTML report lists this as a standalone yellow risk, yet it is not actionable for a PM without knowing what was actually restated.
2. **Labor Day actual data is pending.** Labeled "to be released" throughout, which is correct. However, the "Next Week Watch List" does not assign a responsible party or state what threshold in per-capita spending would change the report's investment thesis — a gap for PM usability.

---

## 4. Editorial Quality

Four concrete suggestions on the visualization stage deliverable (`03_weekly_report.html`):

**Item 1 — Executive summary paragraph density (high priority)**  
The current executive summary is approximately 150 Chinese characters in a single run-on paragraph, which is harder to skim than typical PM-facing research. Recommended fix: restructure into three concise sentences, one per research theme, each anchored by the single most important number. Supporting detail can stay in the body.

**Item 2 — Chart 1 Y-axis scale distortion (medium priority)**  
The Y-axis spans −80% to +90% to accommodate Wuliangye's 2025 net profit (−71.89%) and 2026Q1 net profit (+82.57%). This causes the bars for Kweichow Moutai (revenue ±6%) and other companies to shrink to near-invisible heights, defeating the chart's purpose. Recommended fix: cap the Y-axis at ±40% and annotate Wuliangye's out-of-range values as text callouts, or remove Wuliangye from the main chart with a separate note.

**Item 3 — Chart 3 linear-scale legibility (medium priority)**  
Displaying RMB 12,769.5 billion (total retail sales) alongside RMB 43.317 billion (trade-in) and RMB 21.22 billion (tobacco and alcohol) on the same linear horizontal scale makes the smaller bars only 10–20 px wide — nearly invisible during a PM presentation. Recommended fix: use a broken axis or split into two sub-charts (left: total retail and catering; right: trade-in and tobacco/alcohol).

**Item 4 — Risk table contains a data-quality caveat (low priority)**  
The 🟡 "Wuliangye retrospective adjustment causing misreading of YoY" entry describes a data comparability note, not an investable risk with a clear trigger. It reduces the credibility of the risk table by mixing market-risk items with data-handling caveats. Recommended fix: move it to the "Caveats" or "Data Limitations" section and remove it from the red-yellow-green risk table.

---

## 5. Recommended Revisions

Ordered by priority:

- **P1 — Required before PM presentation**
  - Recover and sync `01_weekly_plan.md` and `01_weekly_plan.en.md` to the workspace, or add a prominent disclaimer on the report cover page specifying that the research scope was reconstructed from the workflow summary rather than verified against the original plan.
  - Clarify in one sentence what Wuliangye's retrospective adjustment actually changed, so PMs can assess whether it affects valuation or dividend forecasts.

- **P2 — Recommended before publication**
  - Rewrite the executive summary using a three-sentence structure (one sentence per theme).
  - Fix Chart 1's Y-axis to prevent visual compression of non-Wuliangye companies.
  - Fix Chart 3's scale so that trade-in and tobacco/alcohol bars are legible.

- **P3 — Suggested, not blocking**
  - Remove "Wuliangye retrospective adjustment" from the risk table; merge into the data-limitations section.
  - Add Spring Tour's +20% booking growth as a fifth bar or annotation in Chart 4 (currently text-only).
  - Add to the "Next Week Watch List" the typical publication lag for Ministry of Culture and Tourism holiday data (usually 3–5 business days post-holiday), so the PM can calibrate tracking timing.

---

## 6. Overall Grade

**`needs-revision`**

Numeric consistency is fully clean; narrative logic is coherent; all three research themes are well-covered with traceable evidence. The core issues requiring remediation are: (1) the missing upstream plan files create a blind spot in the full quality chain; (2) Charts 1 and 3 have visual design flaws that make them unsuitable for PM presentation in their current form; and (3) the Wuliangye retrospective-adjustment context is underspecified and risks reader misinterpretation. Once P1 and P2 revisions are applied, this package qualifies for a pass.

---

```json
{"follow_ups":[
  {
    "to": "china-macro",
    "subject": "Trade-in H2 policy-cliff risk and dependence on social retail growth",
    "question": "2026Q1 consumer-goods trade-in policy drove RMB 433.17 billion of sales, equal to about 3.39% of total retail sales of consumer goods of RMB 12,769.5 billion, with autos contributing 52.8%. Please assess: (1) whether the current pace of fiscal subsidy budget consumption risks a policy cliff in H2 2026 (budget exhaustion or expiry); (2) the estimated downside drag on full-year retail sales growth (Q1 currently at +2.4% YoY) if subsidies are not renewed; and (3) whether there are indications that central or local governments have already begun renewal discussions for Q3 2026. Please base your assessment on budget execution data and public statements from the NDRC or Ministry of Finance.",
    "priority": "high"
  },
  {
    "to": "altdata-analyst",
    "subject": "Real-time baijiu wholesale price and channel inventory data coverage",
    "question": "This week's baijiu earnings show Luzhou Laojiao, Shanxi Fenjiu, and King's Luck with synchronized revenue and profit declines in Q1 2026, but public filings lack wholesale prices, inventory turnover, and bottle-opening rates (see Step 2 research, Question 1 caveats). Please assess: (1) which alternative data sources (e.g., Shangjiu.com, 1919 platform bulk prices, Winelife/Yunjiu channel surveys) can provide near-real-time wholesale price series for Flying Fairy Moutai, Guojiao 1573, and Puwu Wuliangye; (2) the update frequency and reliability of each source; and (3) the recommended minimum refresh cadence and quality threshold if these are incorporated into weekly tracking.",
    "priority": "normal"
  },
  {
    "to": "ashare-strategist",
    "subject": "Baijiu premium-vs-sub-premium divergence: implications for A-share consumer index weights",
    "question": "This week's baijiu earnings show a sharp performance split between premium brands (Kweichow Moutai Q1 +6.54%) and sub-premium/regional brands (Luzhou Laojiao −14.19%, Shanxi Fenjiu −9.68%, King's Luck −15.23%). Please assess: (1) the current weight of premium vs. sub-premium baijiu in mainstream consumer-theme ETFs (e.g., 512200.SH / 159928.SZ) and the applicable rebalancing mechanism; (2) whether continued Q2 dual-decline among sub-premium names creates passive-weight reduction pressure on the index; and (3) whether switching to an active single-name allocation focused on premium brands is preferable to mitigate the drag from sub-premium index exposure.",
    "priority": "normal"
  }
]}
```
