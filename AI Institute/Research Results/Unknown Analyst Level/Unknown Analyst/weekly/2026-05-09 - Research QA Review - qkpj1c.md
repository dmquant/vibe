---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Research QA Review

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Research QA Review

**Date anchor: 2026-05-10, from shell command `date +%Y-%m-%d`**  
**Review scope: the Step 01-02 global macro weekly research package.**

## 1. File Manifest

| declared file | exists in workspace (yes / no) | note |
|---|---|---|
| `01_weekly_plan.md` | yes | 3992 bytes; complete Chinese plan covering 2026-05-04 to 2026-05-08, with report date 2026-05-10. |
| `01_weekly_plan.en.md` | yes | 4029 bytes; complete English version, broadly aligned with the Chinese plan. |
| `02_weekly_research.md` | yes | 18455 bytes; complete Chinese research note with data snapshot, four research questions, evidence tables, caveats, and next-week follow-ups. |
| `02_weekly_research.en.md` | yes | 20575 bytes; complete English version, with conclusions aligned to the Chinese research note. |

## 2. Cross-Step Consistency

| Check Item | Planning-Stage Value | Research-Stage Value | QA Judgment |
|---|---:|---:|---|
| Date anchor / report date | **2026-05-10** | **2026-05-10** | Consistent. The research note explicitly states the shell-derived date. |
| Coverage window | **2026-05-04 -> 2026-05-08**; China trade released on **2026-05-09** but included in the weekly wrap | **2026-05-04 to 2026-05-08**; China trade released on **2026-05-09** and included as a key post-close data point | Consistent, with the research note adding the rationale for including the May 9 data. |
| U.S. April NFP | Plan states actual payrolls of **62K**, prior **178K** | Research states official actual was **115K**, expectations roughly **55K-65K**; March revised to **185K** | Major plan-to-research inconsistency; the research note correctly reframes **62K** as an expectation/downside scenario rather than the official actual. BLS reported **115K**, unemployment at **4.3%**, and a March revision from **+178K** to **+185K** on 2026-05-08 (https://www.bls.gov/news.release/empsit.nr0.htm). |
| China April trade | Exports **+14.1%**, imports **+25.3%** | Exports **+14.1%**, imports **+25.3%**, surplus **$84.82bn** | Core values match. The research note adds forecasts of **+7.9% / +15.2%**, priors of **+2.5% / +27.8%**, and U.S.-bound exports of **+11.3%** (AP / Reuters / Trading Economics). |
| Euro area March retail sales | **-0.1% MoM**, better than **-0.3%** expected | **-0.1% MoM**, **+1.2% YoY**; food **-0.3% MoM**, non-food **+0.6% MoM**, automotive fuel **-1.6% MoM** | Consistent, with stronger sector detail in the research note. Eurostat’s 2026-05-07 release confirms euro area retail sales at **-0.1% MoM / +1.2% YoY** (https://ec.europa.eu/eurostat/en/web/products-euro-indicators/w/4-07052026-ap). |
| BoE policy description | **8-1** hawkish hold; Pill proposed a hike | Bank Rate **3.75%**; **8-1** hold; Huw Pill supported **4.00%** | Consistent, with better precision in the research note. The BoE’s 2026-04-30 decision confirms **3.75%**, **8-1**, and one member preferring a move to **4.00%** (https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2026/april-2026). |
| University of Michigan sentiment / inflation expectations | Sentiment **49.5**, inflation expectations **4.7%** | Sentiment **48.2**, one-year inflation expectations **4.5%**; **4.7%** identified as the prior-month reading | The plan treated an expectation/old value as the actual; the research note corrected it. University of Michigan preliminary May 2026 results show sentiment **48.2** and year-ahead inflation expectations easing from **4.7%** to **4.5%** (https://www.sca.isr.umich.edu/). |

## 3. Narrative Coherence

The four key questions in the plan each map to a corresponding research section: the U.S. labor market, the sustainability of China’s trade surge, low-growth risks in the euro area and ECB constraints, and U.S.-U.K. policy divergence with GBP carry implications. The mapping is clean, and no primary question is fully missing.

The main weakness is how the research note handles corrected planning assumptions. NFP moves from **62K** in the plan to an official **115K**, while University of Michigan sentiment and inflation expectations move from **49.5 / 4.7%** to **48.2 / 4.5%**. These changes matter for the policy narrative. The research note explains them in context, but a PM-facing version should surface a short “key corrections” section near the top so readers do not interpret the package as internally contradictory.

The China trade section gives a useful answer to the sustainability question, but the “front-loading plus restocking under cost stress” explanation relies mainly on Reuters/AP/Trading Economics narrative and total partner-trade data. The plan asked for China export detail by the U.S., EU, and ASEAN; the research note does not fully deliver that split. It acknowledges this in caveats, but the caveat should be elevated as a confidence constraint on the conclusion.

The U.S.-U.K. policy divergence section links BoE, Fed, GBPUSD, DXY, and EURUSD into a coherent framework. However, the carry discussion remains qualitative. It lacks direct measures such as rate-curve differentials, forward points, or carry-adjusted returns, so it should remain a tactical view rather than a firm trade recommendation.

## 4. Editorial Quality

- Add a “planning-value corrections” box at the top of the research note: **62K -> 115K**, **178K -> 185K revised**, **49.5 -> 48.2**, and **4.7% -> 4.5%**, with the reason for each correction.
- In the China trade section, keep the “front-loading plus restocking under cost stress” headline, but state in the first paragraph that this is an interpretive judgment rather than a directly observable customs-data field.
- Move the note that `CNY=X` substitutes for unavailable `CNH=X` data into the chart title or first footnote line; otherwise readers may conflate onshore and offshore yuan.
- Split “watch items” from “actionable views” in the market-strategy section. For GBP, list validation triggers first, such as U.K. wages, U.K. CPI, and U.S. CPI, then state the trading implication.

## 5. Recommended Revisions

- High priority: Add a “Key Corrections” section to `02_weekly_research.md` and `02_weekly_research.en.md`, explicitly stating that the research note corrects the planning-stage **62K** NFP, **49.5** UoM sentiment, and **4.7%** inflation-expectations assumptions.
- High priority: Label the China trade “front-loading/restocking” view as an inference based on Reuters/AP interpretation and trade structure, and state that incomplete partner export splits reduce confidence in the claim.
- Medium priority: Add verifiable source links for the ISM manufacturing and services data; the 12-month ISM table has values but the evidence table lacks specific URLs.
- Medium priority: In the FX chart, clearly mark `CNY=X` as a substitute for unavailable `CNH=X` data to avoid mixing onshore and offshore yuan conventions.
- Low priority: Standardize table headers and unit formatting for “PMI,” “NFP,” “Bank Rate,” and “Fed target range” across the Chinese and English files.

## 6. Overall Rating

**needs-revision**. The files are complete, and the research note answers the main planning questions while correcting several bad initial assumptions; before PM circulation, it needs explicit disclosure of key value corrections, stronger evidence labeling for China trade and ISM, and cleaner FX-basis footnotes.
