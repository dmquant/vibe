---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review: Weekly Factor Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review: Weekly Factor Research Package

Anchor date: shell `date +%Y-%m-%d` returned `2026-05-10`. This review covers `01_weekly_plan.md`, `01_weekly_plan.en.md`, `02_weekly_research.md`, and `02_weekly_research.en.md`; no upstream files were missing.

## 1. File Manifest

| declared file | exists in workspace (yes / no) | note |
|---|---|---|
| `01_weekly_plan.md` | yes | Present and readable, `12333` bytes; includes research scope, 6 core questions, data needs, proposed exhibits, and sources. |
| `01_weekly_plan.en.md` | yes | Present and readable, `13597` bytes; consistent with the Chinese plan. |
| `02_weekly_research.md` | yes | Present and readable, `18972` bytes; includes one-page conclusions, six question-level answers, visualization tables, and sources. |
| `02_weekly_research.en.md` | yes | Present and readable, `21306` bytes; consistent with the Chinese research draft. |

## 2. Cross-Step Consistency

| spot-check item | plan value | research value | QA judgment |
|---|---:|---:|---|
| Anchor date and research window | `2026-05-10`; `2026-05-04` to `2026-05-08` | `2026-05-10`; `2026-05-04` to `2026-05-08` | Matches. The research also states that price statistics use `2026-05-01` close to `2026-05-08` close, which is clear. |
| AP index weekly returns | Nasdaq `+4.5%`, S&P 500 `+2.3%`, Russell 2000 `+1.7%`, Dow `+0.2%` | Same AP figures; ETF close-to-close returns are `QQQ +5.50%`, `SPY +2.35%`, `IWM +1.75%`, `DIA +0.22%` | Matches. The ETF figures and index figures are not identical instruments, but direction and magnitude are consistent. Source: [AP indexes](https://apnews.com/article/wall-street-stocks-dow-nasdaq-b7ff696f0770489a60427121a6931ada). |
| Labor headline and quality metrics | BLS payrolls `115,000`, unemployment `4.3%`, average hourly earnings YoY `+3.6%`, part time for economic reasons up `445,000` to `4.9 million`, information `-13,000` | Preserves all of these values and adds participation `61.8%` and ISM Services Employment `48.0` | Matches. The labor conclusion naturally extends the plan's “soft landing but uneven quality” framing. Source: [BLS](https://www.bls.gov/news.release/empsit.nr0.htm). |
| ADP private employment | Private employment `109,000`, pay growth `4.4%`, education/health `+61,000`, professional/business services `-8,000` | Uses `109,000`, `+61,000`, and `-8,000`; the one-page conclusions do not retain pay growth `4.4%` | Mostly matches, but the `4.4%` pay-growth figure is underused in the research draft and should be restored to support the wage-pressure discussion. Source: [ADP](https://adp-ri-nrip-static.adp.com/artifacts/us_ner/20260506/ADP_NATIONAL_EMPLOYMENT_REPORT_Press_Release_2026_04%20FINAL.pdf). |
| Oil and gasoline | Brent `>$115`, `$109.87`, `$100.06`; gasoline `$4.48/gallon` | Same figures, plus Brent Friday `$101.29` | Matches. The research explicitly says RBOB daily data were not verified, so the oil exhibit remains a substitute table. Source: [AP oil](https://apnews.com/article/stocks-markets-oil-iran-trump-28e493ba47e80517a743ecd54fb6acbc). |
| Value and momentum relative performance | Plan asks for `VTV/VUG`, `VLUE/MTUM`, `IVE/IVW` | Research reports `VUG +3.55%`, `VTV +0.53%`, `VUG - VTV +3.02 pct`, `VLUE +8.48%`, `MTUM +5.86%` | Unresolved tension. Broad value lagged growth, but `VLUE +8.48%` outperformed `MTUM +5.86%`. The research flags this for attribution, but the current draft is not yet strong enough to support a simple “value lagged” statement. |

## 3. Narrative Coherence

The plan's 6 questions are mostly answered one by one in the research draft: question 1 maps to concentration and breadth, question 2 to labor quality, question 3 to oil shock effects, question 4 to earnings quality, question 5 to value underperformance, and question 6 to volatility and tail risk.

Key gaps:

- Question 1's “concentrated leadership” conclusion is well supported by `RSP/SPY`, `QQQ/SPY`, `SMH/SOXX`, and sector ETF evidence. However, the plan asked for a total-return convention, while the research uses close-to-close prices. The limitation is disclosed, but the return labels should explicitly say “price return” unless the methodology is changed.
- Question 2 covers BLS, ADP, JOLTS, and ISM, but factory orders of `+$9.1 billion`, `+1.5%` to `$630.4 billion` do not feed into the macro assessment. This weakens the link between industrial demand and cyclical value.
- Question 3 gives a reasonable market interpretation of oil risk, but the plan requested same-convention daily Brent, WTI, and RBOB lines. The current “Brent event prices + AAA gasoline + ETFs” substitute is acceptable for internal discussion, not for a PM-ready exhibit.
- Question 4 clearly separates “quality ETF did not outperform” from “single-stock earnings quality was rewarded.” However, FactSet data are as of `2026-05-01`, while the research window ends on `2026-05-08`; the draft should explain how this timing mismatch affects the conclusion.
- Question 5 needs tighter wording. `VTV +0.53%` versus `VUG +3.55%` supports broad value underperformance, but `VLUE +8.48%` is a strong counterexample. Until constituent attribution is complete, the draft should avoid treating “value factor” as one directional result.
- Question 6's “stable volatility is partly credible” conclusion is reasonable, but the plan asked for `VVIX`, put/call, skew, credit spreads, and ETF flows. The research currently covers only `VIX`, `SPY` realized volatility, Brent, 10Y, and a MOVE reference value, so the tail-risk evidence is incomplete.

## 4. Editorial Quality

- Rename all return tables to “close-to-close price return,” or update them to adjusted total returns. The current “weekly return” wording can be misread as total return.
- In one-page conclusion 6, change “value lagged” to “broad value lagged, while `VLUE` outperformance still needs attribution,” so readers do not miss the main counterexample.
- Rename Chart 4 to “Oil-Rates-Volatility Substitute Table (not full daily lines),” and state in the header that Brent values are event prices, not uniform settlement prices.
- Consolidate the per-question caveats into one “Data Limits and Checks Needed” box for the PM version, highlighting `RBOB`, `MOVE`, `FactSet 2026-05-01`, and `VLUE` attribution.

## 5. Recommended Revisions

- High priority: Complete constituent and sector attribution for `VLUE`, `VTV`, `VUG`, and `MTUM`; explain why `VLUE +8.48%` diverged from `VTV +0.53%`; avoid broad “value factor lagged” language until this is resolved.
- High priority: Standardize the return convention. If total return cannot be implemented in this version, every exhibit and conclusion must clearly state that returns are close-to-close price returns from `2026-05-01` close to `2026-05-08` close.
- Medium priority: Fill or replace the oil exhibit data, and at minimum specify whether Brent, WTI, and RBOB use the same contract, timezone, and settlement convention.
- Medium priority: Add data that were in the plan but not fully used in the research: factory orders, ADP pay growth `4.4%`, `VVIX`, put/call, skew, credit spreads, and ETF flows.
- Medium priority: Move the FactSet `2026-05-01` earnings timing mismatch into the main text, not only a caveat; update to a version closer to `2026-05-08` if available.

## 6. Overall Rating

`needs-revision`. The research package is complete, coherent, and mostly numerically consistent, but PM release still requires fixes to return methodology, value-factor attribution, oil/volatility data completeness, and coverage of several planned data points.

```json
{"follow_ups":[{"to":"factor-analyst","subject":"Decompose VLUE outperformance versus broad value","question":"For 2026-05-01 close to 2026-05-08 close, decompose `VLUE +8.48%` versus `VTV +0.53%`, `VUG +3.55%`, and `MTUM +5.86%` by constituents and GICS sectors; determine whether `VLUE` outperformance reflects true value alpha, sector concentration, price-adjustment/corporate-action effects, or methodology mismatch.","priority":"high"}]}
```
