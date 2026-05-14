---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report: Convertible Bond Weekly Research Package (2026-04-27 to 2026-04-30)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report: Convertible Bond Weekly Research Package (2026-04-27 to 2026-04-30)

**Reviewer:** QA Manager  
**Review Date:** 2026-05-03  
**Files Covered:** `01_weekly_plan.md`, `01_weekly_plan.en.md`, `02_weekly_research.md`, `02_weekly_research.en.md`, `03_weekly_report.html`, `03_weekly_report.md`

---

## 1. File Manifest

| Declared File | Exists in Workspace | Bytes | Note |
|---|---|---|---|
| `01_weekly_plan.md` | Yes | 3,558 | Normal |
| `01_weekly_plan.en.md` | Yes | 3,861 | Normal |
| `02_weekly_research.md` | Yes | 18,730 | Normal |
| `02_weekly_research.en.md` | Yes | 20,976 | Normal |
| `03_weekly_report.html` | Yes | 41,706 | Self-contained with inline SVGs, dual light/dark theme |
| `03_weekly_report.md` | Yes | 14,155 | Human-readable companion to the HTML report |

**Finding:** All 6 declared files are present and have non-trivial sizes (all ≥ 3,500 bytes). No missing files.

---

## 2. Cross-Step Consistency

Six key data points were spot-checked across steps:

| Check Item | `02_weekly_research.md` | `03_weekly_report.md` | Consistent? |
|---|---|---|---|
| CSI CB Index weekly return | +0.40% | +0.40% | ✓ |
| Trading volume decline | ¥79.725bn → ¥72.653bn, −8.87% | ¥79.725bn → ¥72.653bn, −8.87% | ✓ |
| Median conversion premium / percentile | 38.16% → 36.87%, 92.80th pct (250-day) | 36.87%, 92.80th pct (250-day) | ✓ |
| Hengshuai CB (123256) final trading date | 2026-05-07 | 2026-05-07 | ✓ |
| Sanfang CB (110092) weekly return | −21.02% | −21.02% | ✓ |
| Jisilu universe size change | 334 → 330 (−4) | 334 → 330 (−4) | ✓ |

**Arithmetic verification:**
- Volume decline: (797.25 − 726.53) / 797.25 = 70.72 / 797.25 = **8.87%** ✓
- CSI CB Index normalized on 4/30: 516.08 / 514.03 × 100 = **100.399** ✓
- Hengshuai CB conversion value: (122.40 / 62.55) × 100 = **195.69** (report: 195.68; rounding error ≤ 0.01, acceptable) ✓

**Finding:** All spot-checked figures are internally consistent across steps; no material contradictions found. All arithmetic checks pass.

---

## 3. Narrative Coherence

### 3.1 Question-to-Answer Mapping

| Plan Question (01) | Research Answer (02) | Report Conclusion (03) | Coherence |
|---|---|---|---|
| Q1: How has the credit environment changed after earnings season? | §3: Low-price bucket +1, avg YTM fell to −14.74%, credit improvement uneven | Q1 section: "No broad low-price recovery; credit divergence persists" | ✓ Complete |
| Q2: What is the current valuation percentile? Is CB still defensive? | §4: 92.80th percentile (250-day); defensive only partly valid | Q2 section: High-percentile confirmed; partial defensive case | ✓ Complete |
| Q3: Which CBs face imminent forced-redemption risk? | §5: Top-5 forced-redemption table; final-trading-date countdown analysis | Q3 section + Table 3: Countdown risk; disposal action plan | ✓ Complete |
| Q4: How might market style rotate post-holiday? | §6: East Money industry proxy analysis; top-10 / bottom-10 CB movers | Q4 section + Table 4: Mid-price, earnings-recovery play for May | ✓ Complete |

### 3.2 Visualization Execution vs. Plan

| Planned Visualization (01) | Research-Stage Execution (02) | Report-Stage Execution (03) | Deviation |
|---|---|---|---|
| Normalized index comparison chart (CSI CB vs. CSI 300) | Data table (Figure 1) | Table 1 (MD) + SVG chart (HTML) | ✓ Delivered |
| Conversion **premium rate** distribution histogram | Substituted with **price-bucket** distribution table (Figure 2); data limitation disclosed | Table 2: price buckets | ⚠️ Premium-rate histogram replaced by price-bucket table; substitution rationale transparently documented |
| Forced-redemption Top-5 alert table | §5 delivered in full | Table 3 delivered in full | ✓ Delivered |
| Sector bar chart (CB underlying stock weighted returns) | Substituted with East Money industry index proxy; limitation disclosed | Table 4: industry index proxy | ⚠️ CB-to-stock weighted sector return replaced by market-level industry index proxy; rationale transparently documented |

### 3.3 Orphaned Questions and Unsupported Conclusions

- **No orphaned research questions.** All 4 questions from the plan are fully addressed in both the research and report stages.
- **Thin support acknowledged:** The report recommends that low-price CB investing requires verifying narrowing losses, cash-flow improvement, manageable leverage, and clean repayment records — but only 7 underlying stock financials are provided, which cannot represent the full low-price universe. This limitation is proactively disclosed in the research stage. Acceptable within scope.

---

## 4. Editorial Quality

Four concrete edit suggestions for `03_weekly_report.md`:

1. **Table 4 shows an unexplained Top-10 / Bottom-5 asymmetry.** The sector table presents Top 10 gainers but only Bottom 5 losers (#487–#491) without any explanation of the asymmetry. Fix: either normalize to "Top 5 / Bottom 5" throughout, or add a table-header note: "Top 10 gainers / Bottom 5 losers (from East Money's 496-sector index universe)" so readers are not left wondering whether additional losers were omitted.

2. **Sports sector (体育Ⅲ, BK1564, +11.73%) appears in the table but is absent from the post-holiday narrative.** It ranks second in Table 4, yet the narrative on post-holiday style only names "lithium / energy metals / semiconductor equipment / IC manufacturing / battery chemicals." Since 体育Ⅲ has negligible overlap with the convertible bond universe, it should be flagged explicitly: a one-sentence footnote reading "体育Ⅲ (BK1564, +11.73%) is excluded from post-holiday CB allocation guidance due to minimal overlap with the CB universe" would prevent PM confusion.

3. **YTM percentile signal is shown but not interpreted.** In the Q2 valuation table, the average YTM ranks at the **8.40th percentile** of the past 250 trading days — arguably the single strongest valuation warning in the entire report, since it implies the market was cheaper than today in 91.6% of historical sessions. The report narrative only states "average YTM is deeply negative," missing the percentile implication. Add one sentence: "An 8.40th-percentile average YTM means CBs were less expensive than today in roughly 91.6% of the past 250 trading days — this is historically stretched valuation territory."

4. **Executive summary headline should front-load the most time-critical risk.** The current headline "财报季收官、节前缩量与强赎风险" (Earnings Season Close, Pre-Holiday Volume Decline, and Forced Redemption Risk) treats all three topics as equals. Since the 2026-05-07 forced-redemption final trading date falls in the **first post-holiday trading week**, the headline should lead with forced redemptions — e.g., "Forced-Redemption Countdown: CB Weekly Against an Earnings-Season Close and Pre-Holiday Thinning (2026-04-27 to 2026-04-30)" — ensuring PM awareness of the time-critical action item on first read.

---

## 5. Recommended Revisions

**P0 (Must fix before post-holiday delivery):**
- None. No data errors or substantive content omissions identified.

**P1 (Important — address in next version):**
1. Add an annotation to Table 4 explaining the Top-10 / Bottom-5 count asymmetry and labeling the data source as "East Money sector index proxy — not CB-to-underlying-stock weighted sector returns."
2. Supplement the Q2 valuation narrative with a one-sentence interpretation of the 8.40th-percentile YTM signal: "Historically, CBs were cheaper than today in ~91.6% of sessions — current valuations are historically stretched."

**P2 (Nice-to-have — address in next iteration):**
3. Add a brief footnote on 体育Ⅲ (BK1564) explaining its low relevance to the CB universe and its exclusion from post-holiday allocation guidance.
4. Consider revising the executive summary headline to front-load the forced-redemption urgency, so the most time-sensitive action item is visible on first read.
5. In the "Data Needs" or "Limitations" section, explicitly record the conversion premium distribution histogram data gap (requires Wind/Choice access), giving the PM a clear picture of which visualization is pending a data-feed upgrade.

---

## 6. Overall Grade

**pass**

All 4 core research questions are answered, all 5 report outline sections are delivered, all 6 cross-step numerical spot-checks are consistent, and all arithmetic verifications pass. Two visualization deviations from the plan are transparently documented with data-availability rationale and reasonable substitutes provided. P1-level editorial suggestions (sector-table annotation, YTM-percentile interpretation) do not affect the substantive accuracy of any conclusion. This report package is ready for PM presentation upon applying P1 revisions.

---

```json
{"follow_ups":[
  {"to":"tmt-analyst","subject":"Sustainability of semiconductor/lithium/energy-metals rally into May 2026","question":"The CB weekly report (2026-04-27 to 2026-04-30) shows semiconductor equipment (BK1326, +8.21%), IC manufacturing (BK1329, +6.93%), lithium (BK1621, +13.62%), and energy metals (BK1015, +10.74%) as the top-performing East Money sector proxies for the week. The CB analyst has flagged these as post-holiday allocation reference sectors for May. Please assess from a sector-fundamentals perspective: (1) Are the momentum trends in these four sectors likely to persist into May 2026, or are there near-term catalysts or fundamental risks that could reverse the move before mid-May? (2) For CB investors looking to position in these sectors' underlying equities, what are the key screening conditions and sector priority ranking?","priority":"high"},
  {"to":"credit-analyst","subject":"Credit risk follow-up on low-price CB cohort (<90 yuan up by 1; Sanfang CB −21%)","question":"The CB weekly report (2026-04-27 to 2026-04-30) shows the sub-90-yuan CB bucket increased from 1 to 2 names. Sanfang CB (110092) fell 21.02% on the week; its underlying Sanfang Xiang had a debt-to-assets ratio of 69.89% in 2026Q1 and returned to profitability only marginally (net profit ¥32.74mn on ¥4.989bn revenue). Please provide: (1) a credit assessment of Sanfang CB — does it face near-term default risk, and what does its repayment schedule and short-term debt-service capacity look like? (2) The code and credit condition of the second CB currently in the sub-90-yuan bucket; (3) Over the next 1–2 months post-earnings-season, which additional CBs are most at risk of entering the low-price bucket, and what financial conditions would trigger a credit discount re-pricing?","priority":"high"}
]}
```
