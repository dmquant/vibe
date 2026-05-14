---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Financials Weekly QA Review

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Financials Weekly QA Review

Anchor date: `2026-05-10`. This QA pass checked upstream file presence, byte sizes, and report content; no upstream files were missing.

## 1. File Completeness (File manifest)

| declared file | exists in workspace (yes / no) | note |
|---|---|---|
| `01_weekly_plan.md` | yes | Present at `12480` bytes; complete Chinese research plan for the `2026-05-04` to `2026-05-08` financials weekly. |
| `01_weekly_plan.en.md` | yes | Present at `13575` bytes; English plan is structurally consistent with the Chinese plan. |
| `02_weekly_research.md` | yes | Present at `26403` bytes; complete Chinese research deliverable with answers to the main questions, visualization-ready tables, and references. |
| `02_weekly_research.en.md` | yes | Present at `29323` bytes; English research deliverable is broadly consistent with the Chinese version in conclusions and numbers. |

## 2. Data Consistency (Cross-step consistency)

| spot-check | plan value | research value | QA conclusion |
|---|---:|---:|---|
| Date anchor and coverage window | `date +%Y-%m-%d` returned `2026-05-10`; coverage is `2026-05-04` to `2026-05-08` | Anchor date `2026-05-10`; “this week” is `2026-05-04` to `2026-05-08`, last trading day `2026-05-08` | Matches. Date convention is clear. |
| `XLF` weekly/7-day return | `-1.31%`, `2026-05-08` close `$51.24` | `-1.31%`, `2026-05-01` close `51.92`, `2026-05-08` close `51.24` | Matches. The research stage adds the starting price and excess return versus `SPY`. |
| Labor data | Payrolls `+115,000`, unemployment `4.3%`, average hourly earnings `+0.2%` m/m and `+3.6%` y/y; initial claims `200,000`, four-week average `203,250` | Same payrolls `+115,000`, unemployment `4.3%`, average hourly earnings `+0.2%` m/m and `+3.6%` y/y; initial claims `200,000`, four-week average `203,250` | Matches. The macro frame of “credit still stable, rate-cut hopes capped” is consistent. |
| `XYZ` / Block catalyst | Gross profit `+27%` y/y; adjusted EPS `$0.85`; 2026 gross profit guide `$12.33 billion`; Cash App consumer lending originations `+82%` y/y to `$17.6 billion` | Gross profit `$2.91B`, `+27%`; adjusted EPS `$0.85`; 2026 gross profit guide `$12.33B`; consumer lending originations `$17.6B`, `+82%` | Matches. The unit style should be standardized between `$12.33 billion` and `$12.33B`. |
| `MET` Q1 metrics | Net income `$1.1 billion`, adjusted earnings `$1.6 billion`, adjusted EPS `$2.42`, net investment income `$5.4 billion` | Net income `$1.1B`, adjusted earnings `$1.6B`, adjusted EPS `$2.42`, net investment income `$5.4B` | Matches. The unit abbreviations differ but the values are the same. |
| Market index versus ETF convention | The plan cites Nasdaq `+1.71%` to `26,247.08` and S&P 500 `+0.84%` to `7,398.93`, while also citing `XLF` | The research uses `SPY` `+0.83%` and `QQQ` `about +0.10%` ETF daily returns, then uses `SPY`/`QQQ` weekly returns as benchmarks | Not a substantive contradiction, but labels need to be clearer: the plan uses cash indices, while the research uses ETF proxies, and they should not be presented as the same convention. |
| `IYG` weekly return | Not listed in the plan | Research priority conclusion says `-1.06%`, while the table says `-1.05%` | Small internal rounding inconsistency in the research deliverable. Standardize one value and state the rounding convention. |

## 3. Narrative Coherence

The overall logic chain is sound: the six core questions in the plan map directly to Q1-Q6 in `02_weekly_research.md`, and each research section includes method, findings, evidence, and caveats. The main narrative moves coherently from “tech-led market strength without financials participation” into rates, banks, fintech, insurance, and regulation, which fits a weekly-sector report.

The remaining logic gaps are:

- The plan lists `IBKR` access to Korea Exchange equities as the eighth material development and includes a “brokers and market infrastructure” section in the final outline. The research stage only covers brokers/exchanges through `IAI` at a high level and does not substantively address the impact of `IBKR`’s Korea expansion on client assets, trading volumes, commission rates, or global access strategy.
- The Q3 bank heat map gives directional ratings for CRE/private-credit risk, but lacks a comparable table of CRE, private credit, NPA, or ACL/loans data. It is acceptable as a directional view, but the PM version should explicitly label it as a ranking heat map rather than a capital stress test.
- The stablecoin conclusion is reasonable, but the effect on `COIN`, `PYPL`, and `XYZ` remains somewhat conceptual and is not yet tied to specific revenue lines, deposit-substitution channels, or incentive-design mechanics.

## 4. Editorial Quality

- Label all market-performance tables consistently as either “ETF price return” or “cash index return.” The S&P 500/Nasdaq index levels in the plan and `SPY`/`QQQ` ETF prices in the research should not share a market-performance heading without a convention note.
- Keep the priority conclusions to the strongest 4-5 points for the PM version. The current six are informative but dense; OCC and stablecoins can be combined into one “regulation and deposit competition” point.
- The `PYPL` section should state the date or source convention for `50.44`, because “fell from roughly `50.44` to `45.89`” is less clear than a table explicitly framed as `2026-05-01` to `2026-05-08`.
- Add the time window to every chart title, for example “`2026-05-01` to `2026-05-08` ETF price returns,” so readers do not confuse the table with a calendar week, trading week, or seven calendar days.

## 5. Recommended Revisions

- High priority: Add a research paragraph on `IBKR` / Korea Exchange equities, covering at least 2-3 of client assets, trading volumes, commission rates, and global market access strategy, or explicitly state that evidence is insufficient and remove it from the week’s key developments.
- High priority: Standardize index and ETF conventions, especially for Nasdaq/S&P 500 cash indices versus `QQQ`/`SPY` ETF daily returns, weekly returns, and closing values.
- Medium priority: Resolve the `IYG` `-1.06%` versus `-1.05%` rounding difference and standardize `$B` versus `$ billion` unit style.
- Medium priority: Add a note to the bank risk heat map stating that it is a qualitative risk ranking, not a quantitative conclusion based on same-basis CRE/NPA/capital stress-model inputs.
- Low priority: Split stablecoin legislative impact into three columns: bank deposit beta, payments-network share, and fintech compliance cost, to make the investment implications more actionable.

## 6. Overall Rating

`needs-revision`: The research package is complete, coherent, and numerically consistent on the major points, so it is usable as an internal research draft; before PM presentation, it should fill the `IBKR` gap, standardize market-data labels, and correct minor numeric presentation inconsistencies.
