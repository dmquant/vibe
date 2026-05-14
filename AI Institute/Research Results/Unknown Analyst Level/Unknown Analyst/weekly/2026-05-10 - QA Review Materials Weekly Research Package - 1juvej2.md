---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review: Materials Weekly Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review: Materials Weekly Research Package

Date anchor: `2026-05-10`. This QA review uses the workspace files as the source of record. No upstream file had to be reconstructed from conversation context.

## 1. File Manifest

| Declared file | Exists in workspace | Note |
|---|---|---|
| `01_weekly_plan.md` | Yes | 14,558 bytes, readable; complete Chinese research plan. |
| `01_weekly_plan.en.md` | Yes | 17,135 bytes, readable; complete English research plan. |
| `02_weekly_research.md` | Yes | 5,015 bytes, readable; complete but relatively brief Chinese research output. |
| `02_weekly_research.en.md` | Yes | 5,713 bytes, readable; complete English research output. |

## 2. Cross-Step Consistency

| Check item | Planning-stage value | Research-stage value | QA judgment |
|---|---|---|---|
| Date anchor and coverage window | `date +%Y-%m-%d` was `2026-05-10`; mainland trading-day metrics should cover `2026-05-06` to `2026-05-08`. | Date anchor is `2026-05-10`; coverage window is `2026-05-06` to `2026-05-08`. | Consistent. |
| Lithium carbonate LC2609 | On `2026-05-06`, high of `CNY 199,600/mt`, settlement `CNY 199,400/mt`, up `7.31%`, open interest +`21,281` lots.[S4] | Commodity table labels `CNY 199,400/mt`, `7.31%`, and open interest +`21,281` lots as “price/close (May 8)”. | Numbers match, but the date/field label is inconsistent: `199,400` is the May 6 settlement in the plan, not a May 8 close. Needs correction. |
| Battery-grade lithium carbonate spot | May 6 Mysteel average `CNY 194,800/mt`, up `5.67%` on the day, rising for `8` consecutive days.[S5] | Commodity table labels `CNY 194,800/mt`, `5.67%`, and an `8`-day winning streak as “price/close (May 8)”. | Numbers match, but the date label is likely wrong: the value comes from May 6 spot pricing, not a May 8 close. |
| Battery demand | April NEV wholesale volume `1.22 million` units, YoY `+7%`, MoM `+7%`; May battery production schedule `249 GWh`, MoM `+6%`, ESS share `42.3%`, ternary share `14.7%`.[S12][S13] | Core conclusions and Table 1 use `249 GWh`, `42.3%`, `14.7%`, and derive ESS `105.3 GWh`, ternary `36.6 GWh`, residual `107.1 GWh`. | Consistent; the derived values are mathematically sound, but “LFP/Other Power” is a residual category and should be labeled as an author/QA calculation rather than directly sourced data. |
| Iron ore and hot metal | DCE I2609 `CNY 814.5/mt`, roughly `+3%` for the week, fourth consecutive weekly gain; daily average hot-metal output down `9,800 mt` WoW.[S7][S8] | Core conclusions and Q3 use `CNY 814.5/mt`, fourth consecutive weekly gain, and hot-metal output down `9,800 mt`. | Consistent. |
| Chemical-chain prices | CommoPlast on `2026-05-07`: PVC `CNY 5,163/mt`, `-CNY 143`; PTA `CNY 6,482/mt`, `-CNY 290`; MEG `CNY 4,851/mt`, `-CNY 300`; PET Bottle `CNY 8,482/mt`, `-CNY 348`.[S9] | Commodity table lists PTA `6,482` and PVC `5,163`; Table 2 lists PTA `-4.28%`, MEG `-5.82%`, PVC `-2.70%`. | Price figures match, but the commodity table’s “May 8” heading conflicts with the May 7 source date. Percent changes appear reverse-calculated from absolute moves and should be labeled as calculated metrics. |
| A-share market | From `2026-05-06` to `2026-05-08`: Shanghai Composite `+1.65%`, Shenzhen Component `+3.02%`, ChiNext `+3.24%`, daily average turnover `CNY 3.1398 trillion`; technology themes led.[S11] | Keeps only the qualitative statement that materials recovered with the broader market but were not the leadership theme, while technology led. | Directionally consistent, but the research output omits key market numbers, weakening the equity-mapping section’s auditability. |

## 3. Narrative Coherence

The research output broadly follows the planning-stage question set. It answers the main thesis through “macro repricing dominance,” the `CNY 200,000/mt` lithium carbonate level, “strong ore, weak steel,” and “metals strong, chemicals weak.” The high-level narrative is coherent.

Main gaps:

- Planning Q4 asked for differentiated fundamentals across copper, aluminum, nickel, and tin. The research output substantively discusses copper, tin, and lithium, but aluminum and nickel lack standalone inventory, supply, or demand analysis.
- Planning Q5 asked why basic chemicals underperformed metals. The research output cites “SC crude fell nearly 3% on May 6” and “insufficient downstream textile orders,” but does not provide PTA, MEG, or PVC inventory, operating-rate, or textile-order evidence. “Insufficient orders” is not yet fully supported.
- Planning Q6 asked whether A-share materials positioning should follow commodity beta or prioritize capacity constraints, cost advantages, and earnings visibility. The research output gives directional advice, but does not include SHENWAN/CITIC subsector returns, key-stock performance, or capital-flow data, so the equity mapping remains conceptual.
- The research output adds “Jiangxi lithium mine license renewals and Zimbabwe policy changes tightened supply expectations.” This matches the planning data checklist, but the body does not provide specific events, dates, or citation IDs, so it cannot fully support a strong supply-tightening conclusion.

## 4. Editorial Quality

- Rename the commodity-table column from “price/close (May 8)” to “latest available price / date basis,” and add a date column for each commodity. The current table mixes May 6, May 7, and May 8 data.
- Do not mix daily percent moves, absolute moves, and full-week gains under one “weekly change (5/6-5/8)” heading. Split it into “change basis” and “change value” to avoid mixing `7.31%`, `-CNY 290`, and `3.8% (full week)`.
- Add citation IDs inside the “In-depth Answers” section, for example lithium inventory [S4], battery production schedule [S13], iron ore [S7][S8], and chemical prices [S9].
- Rename Table 1’s “LFP/Other Power” to “Other/residual (249 - ESS - ternary)” so readers do not mistake the residual for directly disclosed LFP power-battery data.

## 5. Recommended Revisions

- P0: Correct all commodity-table date and basis labels, especially LC2609 `CNY 199,400/mt`, battery-grade lithium carbonate `CNY 194,800/mt`, and the May 7 PTA/PVC/MEG data. Do not label non-May 8 data as May 8 closes.
- P0: Add direct citation markers for each key conclusion. The current blanket “Sources [S1]-[S13] as referenced in the Research Plan” is too broad for PM-level verification.
- P1: Add a fundamentals-differentiation table for aluminum, nickel, and tin, covering at least price moves, inventory/warrants, supply disruption, and demand validation, to answer planning Q4.
- P1: Add weekly performance for A-share materials subsectors and key names, including SHENWAN/CITIC steel, non-ferrous, basic chemicals, battery materials, and 600019.SH, 000708.SZ, 603799.SH, 002466.SZ, 002460.SZ, 300750.SZ, 600309.SH, 002064.SZ.
- P2: Support the chemical-chain claims on “weak textile orders” and “inventory pressure” with data. If data is unavailable, downgrade them to “hypotheses to verify.”

## 6. Overall Rating

`needs-revision`. The research output has a clear thesis and carries over most key numbers from the plan, but date/basis labeling errors, unsupported claims, and incomplete answers to several planning questions need to be fixed before PM presentation.

```json
{"follow_ups":[{"to":"materials-analyst","subject":"Verify key commodity bases in the materials weekly","question":"Please verify the latest available prices, date bases, and change bases for LC2609, battery-grade lithium carbonate spot, PTA, MEG, PVC, and PET Bottle for the 2026-05-06 to 2026-05-08 materials weekly, and confirm which figures can be labeled as 2026-05-08 closes or weekly changes.","priority":"high"}]}
```
