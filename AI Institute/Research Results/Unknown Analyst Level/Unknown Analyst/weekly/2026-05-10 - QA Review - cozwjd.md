---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review

Review anchor date: 2026-05-10, from shell `date +%Y-%m-%d`.

## 1. File Completeness (File manifest)

| declared file | exists in workspace (yes / no) | note |
| :--- | :---: | :--- |
| `01_weekly_plan.md` | yes | 3999 bytes; readable, covering 2026-05-04 to 2026-05-08 and noting China’s May 9 compensatory trading day. |
| `01_weekly_plan.en.md` | yes | 4424 bytes; readable, broadly aligned with the Chinese version. |
| `02_weekly_research.md` | yes | 4451 bytes; readable, with key conclusions, four analytical sections, and visualization data tables. |
| `02_weekly_research.en.md` | yes | 4710 bytes; readable, broadly aligned with the Chinese version. |

## 2. Cross-step Consistency

| Check item | Step 01 plan | Step 02 research | QA conclusion |
| :--- | :--- | :--- | :--- |
| Coverage window | 2026-05-04 → 2026-05-08; China’s May 9 is noted as a compensatory trading day | Coverage window is written as 2026-05-04 — 2026-05-08, while the CGB table uses May 9 | Broadly consistent; the research report should add a title note or footnote that CGB data extends to May 9. |
| US April NFP | About 70k / 70k jobs added, versus 178k expected | 70k, versus 178k expected | Consistent. |
| US unemployment rate | 4.3% | 4.3%, versus 3.9% expected | Consistent; however, the “Sahm Rule warning” claim needs the three-month average and cycle-low definition. |
| US 30Y Treasury | Touched 5.00% on May 5; 10Y near 4.38% on May 8 | Table 3 shows 30Y UST at 5.00% on May 5 and 4.62% on May 8; Table 1 shows 10Y at 4.38% on May 8 | Consistent. |
| CGB 10Y-30Y spread | 52bps, four-year high; May 6-9 | 50bps on May 6 and 52bps on May 9 | Consistent. |
| PMI / price-pressure evidence | Chinese plan cites J.P. Morgan Global PMI input prices at a 41-month high; English plan additionally gives a value of 51.8 | Research report switches to ISM Services PMI input prices at 71.5 versus 68.0 expected, while still using the 41-month-high language | Inconsistent metric usage: J.P. Morgan Global PMI and ISM Services PMI are not the same indicator, and 51.8 versus 71.5 does not reconcile. The source, metric name, release date, and value need to be relabeled. |
| PBoC reverse repos | CNY 300 billion / 3000亿元 | 3000亿 / 300bn RMB | Consistent; the unit conversion is correct. |

## 3. Narrative Coherence

The four core questions in the plan all map to dedicated sections in the research report. The overall structure is substantially complete: the US rates narrative shift, CGB curve dynamics, safe-haven efficacy, and liquidity-versus-inflation policy tradeoff each receive a direct answer.

The main weakness is evidentiary depth. In the US section, the “Hard Data carries more weight” conclusion is plausible as a market narrative, but the 92% June hold probability is unsourced, and the mixed PMI labeling undermines confidence in the inflation-pressure argument. In the CGB section, moving from a 52bps spread to a “structural process” is too strong without a longer history, supply figures, trading volume, or spread percentiles.

The safe-haven section answers the correlation question, but the -0.32 calculation lacks sample frequency, whether the input was yield levels or yield changes, and the underlying data points. The further claim that CGBs are an “inflation-hedged safe haven” with strong diversification value goes beyond the stated evidence. The liquidity section answers the PBoC stance question, but it does not show daily reverse-repo maturities, net injections, or the ultra-long special sovereign bond issuance schedule.

The planned CNH volatility data, Fed speaker summary, and investment strategy recommendations (neutral-to-short duration and tactical 30Y ultra-long bond trades) are largely missing from the research report. These are unfinished data requirements and outline items.

## 4. Editorial Quality

- Separate “J.P. Morgan Global PMI” and “ISM Services PMI input prices” into distinct rows, or choose one indicator consistently throughout the report.
- Table 2 is titled “Monthly Average,” but 2026-05 (Current) at 52bps appears to be a weekly/current point estimate; relabel it as “monthly average or current level,” or use a full monthly-average series.
- Phrases such as “inflation-hedged safe haven” and “significant diversification value” should be softened to “low/negative correlation in this week’s sample” unless longer-sample evidence is added.
- The follow-up items are too thin for PM use; add a three-part summary covering conclusion, risk, and trade implication.

## 5. Recommended Revisions

- High priority: Fix the PMI price-pressure data definition, making clear whether the report uses J.P. Morgan Global PMI or ISM Services PMI, and reconcile 51.8 / 71.5 and the 41-month-high language.
- High priority: Add source labels, calculation methodology, and date ranges for the 92% June hold probability, the -0.32 correlation coefficient, and the four-year-high 10Y-30Y spread.
- Medium priority: Add CNH volatility, Fed speaker summaries, daily reverse-repo net injections, and the ultra-long special sovereign bond issuance schedule to complete the planned data requirements.
- Medium priority: Recast strong conclusions such as “structural process” and “inflation-hedged safe haven” as conditional statements, or support them with longer historical samples.
- Low priority: Standardize units and table labels across the Chinese and English files, including `3000 亿元 / 300bn RMB` and `monthly average / current level`.

## 6. Overall Rating

needs-revision. The research package is complete, has a clear narrative, and most headline numbers are consistent across steps; however, the PMI metric confusion and several unsupported quantitative claims mean it is not yet ready for PM distribution.
