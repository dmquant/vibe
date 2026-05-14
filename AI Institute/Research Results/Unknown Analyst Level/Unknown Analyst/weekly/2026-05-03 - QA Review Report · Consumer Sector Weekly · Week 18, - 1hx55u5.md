---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report · Consumer Sector Weekly · Week 18, 2026

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report · Consumer Sector Weekly · Week 18, 2026

**Reviewer**: QA Manager
**Review Date**: May 3, 2026
**Scope**: 01_weekly_plan.md / 01_weekly_plan.en.md / 02_weekly_research.md / 02_weekly_research.en.md / 03_weekly_report.html / 03_weekly_report.md

---

## 1. File Manifest

| Declared File | Present in Workspace | File Size (bytes) | Note |
|---|:---:|---:|---|
| 01_weekly_plan.md | Yes | 3,776 | Complete; covers 6 key events and 4 research questions |
| 01_weekly_plan.en.md | Yes | 4,359 | English version maps one-to-one with the Chinese version |
| 02_weekly_research.md | Yes | 17,850 | All four research questions answered; includes data tables and source URLs |
| 02_weekly_research.en.md | Yes | 20,908 | Numbers are consistent with the Chinese research draft |
| 03_weekly_report.html | Yes | 35,799 | Self-contained HTML report with inline SVG charts |
| 03_weekly_report.md | Yes | 11,555 | Plain-text companion; independently readable |

**Conclusion**: All declared files are present and non-trivial in size (minimum 3,776 bytes). File manifest check: **passed**.

---

## 2. Cross-Step Consistency

Six key data points were spot-checked across steps. The table below records plan assumption vs. research finding vs. final report.

| Data Point | Step 01 Plan | Step 02 Research | Step 03 Report | Status |
|---|---|---|---|:---:|
| Kweichow Moutai 600519.SH 2026Q1 revenue growth | "~15%" | RMB53.909bn, +6.54% YoY | RMB53.909bn, +6.54% YoY | ⚠️ Plan overstated; Research & Report consistent ✓ |
| Wuliangye 000858.SZ 2026Q1 net profit growth | Not specified | +82.57% | +82.57% | ✓ |
| Luzhou Laojiao 000568.SZ 2026Q1 revenue growth | Not specified | −14.19% | −14.19% | ✓ |
| April manufacturing PMI | "50.1" | 50.3% | 50.3% | ⚠️ Plan used composite PMI; Research & Report consistent ✓ |
| April non-manufacturing business activity index | "Remains expansionary" | 49.4% (below 50 threshold) | 49.4%, below threshold | ⚠️ Plan direction incorrect; Research & Report consistent ✓ |
| Trade-in consumer goods Q1 2026 cumulative sales | Not provided | >RMB433.17bn | >RMB433.17bn | ✓ |
| May Day county-level destination booking heat | "+12% overall" (rough estimate) | +128% (county-level) | +128% | ⚠️ Plan was a broad estimate; Research & Report consistent ✓ |
| Wuliangye 2026Q1 operating cash flow (OCF) | — | −RMB2.535bn | −RMB2.535bn | ✓ |

**Summary**: All numbers are fully consistent between Steps 02 and 03. Three plan assumptions were corrected by actual research data. The research draft explicitly flagged all three corrections in Priority Conclusion 5, and the final report carries them forward in Key Conclusion 5 — the correction chain is intact. One gap: the plan assumed Moutai revenue growth of "~15%," but the report states the actual figure (+6.54%) without explicitly surfacing the plan vs. actual delta. This should be addressed in revision.

---

## 3. Narrative Coherence

### Plan Questions vs. Research Answers

| Plan Question | Research Coverage | Answered? | Carried into Report? |
|---|---|:---:|:---:|
| Q1: Channel inventory DOI trends and channel stuffing | Step 02 Q1: DOI + contract liabilities + OCF three-signal analysis | ✓ | ✓ (Report Key Conclusion 1 + Table 1) |
| Q2: F&B supply-chain cost savings headroom | Step 02 Q2: Marginal cost structure analysis | ✓ | ✓ (Report Key Conclusion 2 + Table 2) |
| Q3: Trade-in policy transmission lag | Step 02 Q3: Policy timeline with MOFCOM data anchors | ✓ | ✓ (Report Key Conclusion 3 + Table 3) |
| Q4: May Day consumption divergence by city tier | Step 02 Q4: Platform booking heat by tier | ✓ | ✓ (Report Key Conclusion 4 + Table 4) |

### Orphaned Questions and Unsupported Conclusions

1. **Policy Sensitivity Heatmap (Plan Visualization 3) was downgraded**: The plan explicitly called for a policy-elasticity heatmap by consumer sub-sector. The research draft delivered a complete five-row elasticity scoring table (home appliances 5/5, digital smart products 4/5, smart home 4/5, NEVs 3/5, traditional furniture 3/5). However, the final report (03_weekly_report.md) replaced that table with a cumulative trade-in sales timeline table, removing the Q2 category allocation sequence — a key bridge from analysis to investment recommendation.

2. **May Day per-capita budget assumption left open**: The plan assumed "flat per-capita budgets." The research partially corroborated this via mixed signals (county-level premium hotel bookings +76%, but Song Hot Pot same-store sales −19.9%), but did not produce an explicit conclusion on per-capita spending. This is defensible, but the report's limitations section should note that the official May Day final data (due May 5) is required before this assumption can be confirmed or refuted.

3. **No incremental retail-sales estimate for trade-in**: The research correctly flags that MOFCOM monitoring figures are not one-for-one equivalent to incremental retail sales. The report does not offer even a rough conversion range, leaving PM readers without a calibration anchor when thinking about April retail sales surprises.

---

## 4. Editorial Quality

The following four observations apply specifically to **03_weekly_report.md** (the visualization-stage primary deliverable):

1. **Executive summary is too dense**: The current summary is a single ~100-character paragraph carrying four conclusions, multiple tickers, and large absolute RMB figures. For PM-ready delivery, restructuring as 3–4 bullet points (max ~30 characters each) would allow 10-second comprehension. The current block requires careful reading to extract the lead takeaways.

2. **Table 3 removes Q2 allocation ranking**: As noted in the coherence section, replacing the elasticity table with a sales-milestone timeline loses the allocation ordering. At minimum, a one-line summary — "Q2 elasticity rank: Home Appliances > Digital Smart > Smart Home > NEVs" — should appear at the end of the trade-in section to preserve actionability.

3. **Wuliangye OCF red flag lacks historical context**: The risk section flags OCF at −RMB2.535bn as a red-light risk, but provides no comparison to 2025Q1 or typical Q1 seasonality. If Q1 OCF is normally negative for Wuliangye due to seasonal working capital patterns, the red-light severity should be downgraded to yellow. The report should either provide the 2025Q1 comparable or explicitly state the comparison is pending annual-report verification.

4. **Next-week event calendar lacks ticker linkages**: Section 4 (Next-Week Watch List) lists eight events without attaching the primary impacted tickers. Adding a brief parenthetical like "(600519.SH / 000858.SZ)" or "(06862.HK)" after each event would significantly improve the operational usefulness of the calendar for portfolio managers.

---

## 5. Recommended Revisions

Prioritized list for PM-readiness:

- **[High] Restore category elasticity ranking**: Add the Q2 allocation sequence — "Home Appliances > Digital Smart > Smart Home > NEVs" — at the end of the trade-in analysis section in 03_weekly_report.md, or restore the full five-row elasticity scoring table from the research draft. This is the critical link between the policy analysis and investment strategy.

- **[High] Surface the Moutai growth-rate assumption gap**: In Key Conclusion 5 or the baijiu analysis section, explicitly note "The plan assumed Moutai revenue growth of ~15%; actual was +6.54%, driven by active channel-pacing and softer business-entertainment demand." This enables internal calibration of forecast accuracy.

- **[Medium] Add Wuliangye OCF historical comparison**: In the red-flag risk entry, add the 2025Q1 OCF figure (or a note that it is pending annual-report review) so readers can assess whether the negative cash flow represents a deterioration or a seasonal pattern.

- **[Medium] Restructure executive summary as bullet points**: Rewrite the dense summary paragraph into 3–4 bullets aligned to the four key conclusions: Baijiu divergence, F&B turnover-driven recovery, Trade-in front-loading, and May Day lower-tier outperformance.

- **[Low] Attach ticker annotations to the next-week calendar**: Each event in Section 4 should carry a short parenthetical indicating the primary listed tickers affected.

- **[Low] Close the May Day per-capita budget assumption**: Add one sentence in the limitations paragraph noting "Official May Day per-capita spending data due from the Ministry of Culture and Tourism on May 5 will confirm or refute the flat-budget assumption from the plan."

---

## 6. Overall Rating

**`needs-revision`**

The research package is substantively strong: all four plan questions are answered with sourced data, numbers are fully consistent between the research and final report stages, and all three plan-assumption errors are proactively identified and corrected. The revisions needed before PM distribution are targeted rather than structural: (1) the policy elasticity ranking was truncated in the final report, removing a direct link to Q2 allocation guidance; (2) the Moutai plan-vs-actual growth gap is not explicitly surfaced at the report level; and (3) the Wuliangye OCF red flag lacks the historical comparison needed to calibrate severity. Completing the three high/medium-priority items listed above is sufficient for this report to be ready for PM presentation.

---

```json
{"follow_ups":[
  {
    "to": "consumer-analyst",
    "subject": "Wuliangye 000858.SZ historical Q1 OCF for risk calibration",
    "question": "Please provide Wuliangye (000858.SZ) operating cash flow (OCF) for 2025Q1 and 2024Q1 so the QA team can determine whether the 2026Q1 OCF of −RMB2.535bn represents a seasonal pattern or a genuine deterioration. Also confirm: (1) whether the 2025 accounting-error restatement affects the 2025Q1 OCF comparable; and (2) given the contract-liability QoQ increase of +5.0%, whether the cash-collection mismatch is likely to reverse in Q2.",
    "priority": "high"
  },
  {
    "to": "consumer-analyst",
    "subject": "Policy elasticity scoring table — confirm inclusion in final report",
    "question": "The research draft (02_weekly_research.md) contains a five-row policy elasticity scoring table (home appliances 5/5, digital smart products 4/5, smart home 4/5, NEVs 3/5, traditional furniture 3/5) along with a Q2 allocation sequence. That table was replaced in 03_weekly_report.md by a sales-milestone timeline, removing the allocation ranking. Please confirm: (1) should the elasticity table be restored in the final report; and (2) if there is a more current Q2 allocation view that supersedes the original scoring, please provide it.",
    "priority": "normal"
  }
]}
```
