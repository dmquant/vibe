---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review: TMT Weekly Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review: TMT Weekly Research Package

Date anchor: shell `date +%Y-%m-%d` returned `2026-05-10`. This review covers the upstream files `01_weekly_plan.md`, `01_weekly_plan.en.md`, `02_weekly_research.md`, and `02_weekly_research.en.md`.

## 1. File Manifest

| declared file | exists in workspace (yes / no) | note |
|---|---|---|
| `01_weekly_plan.md` | yes | Present and readable, `12118` bytes; the Chinese research plan is complete. |
| `01_weekly_plan.en.md` | yes | Present and readable, `13655` bytes; the English version matches the Chinese version on scope, core questions, and sources. |
| `02_weekly_research.md` | yes | Present and readable, `20890` bytes; the Chinese research draft is complete and answers the 6 core questions from the plan. |
| `02_weekly_research.en.md` | yes | Present and readable, `24094` bytes; the English version is broadly aligned with the Chinese version on conclusions, numbers, and structure. |

## 2. Cross-Step Consistency

| Check Item | Planning Draft Value | Research Draft Value | QA Conclusion |
|---|---:|---:|---|
| Coverage window | `2026-05-04` to `2026-05-08`; shell date `2026-05-10` | `2026-05-04` to `2026-05-08`; shell date `2026-05-10` | Consistent. The date anchor is clear, and weekly returns use the `2026-05-01` close to the `2026-05-08` close. |
| `SMH` and `QQQ` weekly returns | `SMH` `11.13%`, `QQQ` `5.50%` | `SMH` `11.13%`, `QQQ` `5.50%`; outperformance of `5.63` percentage points | Consistent. The research draft also adds `SPY` at `2.35%` and `SOXX` at `11.71%`. |
| `AMD` Q1'26 | Revenue `10.253B` dollars, Data Center revenue `5.8B` dollars, `+57%` YoY, Q2 guidance `11.2B ± 300M` | Revenue `$10.253B`, Data Center revenue `$5.8B`, `+57%` YoY, Q2 guidance `$11.2B ± 300M` | Consistent. The research draft also adds non-GAAP gross margin of `55%` and Q2 non-GAAP gross margin guidance of about `56%`; the final version should keep the source pointer to [S2]. |
| `INTC` / Apple event | `INTC` weekly gain `25.40%`; report-time afternoon move `+15%`; `AAPL` about `+1.7%` | `INTC` weekly gain `25.40%`; May 8 close `124.92`, up `13.96%` from `109.62` on May 7; `AAPL` weekly gain `4.70%` | Broadly consistent. The planning draft's “afternoon `+15%`” and the research draft's close-to-close `13.96%` are not contradictory, but the final version should clarify that one is intraday/report-time and the other is close-to-close. |
| Cloudflare / `NET` | `NET` weekly decline `9.83%`; Q1 revenue `639.8M`, `+34%` YoY; about `1,100` layoffs | `NET` `-9.83%`; Q1 revenue `$639.8M`, `+34%` YoY; about `1,100` layoffs; restructuring charges `$140M-$150M` | Consistent. The research draft adds non-GAAP operating income of `$73.1M`, margin `11.4%`, and FCF of `$84.1M`; dollar symbols and units should be standardized across tables. |
| BLS employment data | Payrolls `115,000`, unemployment `4.3%`, Information employment `-13,000`, related subcategory `-4,000` | Payrolls `115,000`, unemployment `4.3%`, Information employment `-13,000`, related subcategory `-4,000` | Consistent. The research draft also adds average hourly earnings of `+0.2%` MoM / `+3.6%` YoY and 10Y yield movement from `4.378%` to `4.364%`; these are useful but should not be overstated as the main macro driver. |

## 3. Narrative Coherence

The plan's 6 core questions are largely answered one by one in the research draft's Q1-Q6 sections: semiconductor outperformance, AMD's competitive impact, the Apple-Intel agreement, hyperscaler capex, software and edge-cloud dispersion, and the employment-data transmission channels all have matching sections.

The main strength is that the research draft does more than restate the plan. It adds cross-checks such as `SOXX`, `SPY`, `MU`, `ASML`, `DDOG`, `PANW`, and 10Y yield data, making the central narrative clear: AI hardware repricing led the week, software dispersion mattered, and macro was only a mild tailwind.

Three narrative weaknesses remain:

- The plan asked the analyst to separate earnings revisions, order visibility, and event-driven short-covering. The research draft substitutes price, volume, and event timing for sell-side EPS revisions and options IV, which is a reasonable public-data limitation, but the conclusion should be toned down accordingly; `AMD` and `INTC` gains should not be presented as fully validated by earnings revisions.
- The Apple-Intel section explains the potential reduction in Intel Foundry's credibility discount, but it lacks node, wafer volume, production timing, and product-complexity detail. Therefore, it cannot directly infer improved Foundry utilization. The research draft states this limitation, but the final version should move it earlier.
- The hyperscaler capex section usefully distinguishes supply-chain beneficiaries from platform-company FCF pressure, but company capex definitions differ. The final version should explicitly state that `$725B` is a high-end estimate or upper-bound framing, not a number that can be equated with direct chip orders.

## 4. Editorial Quality

1. Compress the “Priority Conclusions” into 4-5 bullets where each bullet states the investment implication before the evidence. The current version is numerically dense, which makes it harder for a PM to separate the thesis from the supporting data.
2. Make table titles more explicit, for example “Weekly return: `2026-05-01` close to `2026-05-08` close” and “Volume multiple: current 5-day average volume / prior 20-day average volume,” so readers do not mistake the data for natural-week or intraday figures.
3. In the AMD section, move “share assumptions revised higher, but no ecosystem reversal” into a subheading or opening conclusion. That judgment is more important than several of the detailed metric rows.
4. In the software section, add a table note that `CRWD`, `SNOW`, and `PANW` are based on recent public disclosures plus same-week stock performance, not identical reporting-calendar data versus `NET`.

## 5. Recommended Revisions

- P0: Add a “data methodology box” at the top of the final draft, stating shell date `2026-05-10`, coverage window `2026-05-04` to `2026-05-08`, and weekly-return calculation window from the `2026-05-01` close to the `2026-05-08` close.
- P0: Move the Apple-Intel preliminary-agreement limitations forward, explicitly noting that public sources lack node, product, wafer volume, pricing, and production-timing details; describe `INTC`'s `25.40%` weekly gain as event repricing, not confirmed order conversion.
- P1: Add or retain a “missing data” list covering sell-side EPS revisions, target-price changes, options IV, and ETF constituent contribution data that were not reliably available, so readers do not infer full attribution has been completed.
- P1: Standardize table units and dollar notation, especially `$10.253B`, `$639.8M`, `$140M-$150M`, `$725B`, and `$1.2B`; the Chinese version should also preserve `$` and `B/M` for alignment with the English version.
- P2: Add a methodology footnote to the hyperscaler capex matrix explaining that company definitions differ on finance leases, land, power contracts, and lease payments.

## 6. Overall Rating

`needs-revision` — The research package is complete, cross-step numbers are broadly consistent, and the narrative answers the planning questions; however, the Intel-Apple event, capex methodology, and public-data gaps need more cautious wording and clearer methodology notes before the report is ready for PM presentation.
