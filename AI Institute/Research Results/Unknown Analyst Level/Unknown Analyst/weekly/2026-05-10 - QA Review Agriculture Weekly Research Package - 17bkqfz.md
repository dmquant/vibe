---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review: Agriculture Weekly Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review: Agriculture Weekly Research Package

**Date anchor**: shell `date +%Y-%m-%d` = **2026-05-10**  
**Reviewed files**: `01_weekly_plan.md`, `01_weekly_plan.en.md`, `02_weekly_research.md`, `02_weekly_research.en.md`

## 1. File Manifest

| declared file | exists in workspace | note |
| --- | --- | --- |
| `01_weekly_plan.md` | Yes | Present, **10118 bytes**; Chinese research plan is complete and readable. |
| `01_weekly_plan.en.md` | Yes | Present, **10027 bytes**; English research plan is complete and readable. |
| `02_weekly_research.md` | Yes | Present, **23519 bytes**; Chinese research-stage deliverable is complete and readable. |
| `02_weekly_research.en.md` | Yes | Present, **26903 bytes**; English research-stage deliverable is complete and readable. |

## 2. Cross-Step Consistency

| Check item | Planning-stage statement | Research-stage statement | QA judgment |
| --- | --- | --- | --- |
| Date anchor | The plan date is **2026-05-10**. | The research file records shell `date +%Y-%m-%d` = **2026-05-10**. | Consistent. All “this week” references should resolve against **2026-05-10**. |
| A-share trading window | The plan says all five days from **2026-05-04 to 2026-05-08** were normal trading days, and **2026-05-04** was the first post-holiday session. | The research states that China A-shares were closed for Labor Day from **2026-05-01 to 2026-05-05**, so returns are calculated from the **2026-04-30 close to the 2026-05-08 close**; SSE source: https://www.sse.com.cn/disclosure/announcement/general/c/c_20251222_10802507.shtml | The plan contained an error, and the research corrected it. The final report must use the research-stage convention and remove any claim that A-shares traded normally on May 4. |
| WASDE release date | The plan says USDA May WASDE would be released on **2026-05-08**. | After checking USDA’s calendar, the research confirms the May WASDE is scheduled for **2026-05-12 12:00 ET**; this week can only be treated as pre-report expectations and positioning. Source: https://www.usda.gov/about-usda/general-information/staff-offices/office-chief-economist/commodity-markets/wasde-report | The plan contained an error, and the research handled it correctly. Any “post-WASDE reaction” language should be changed to “pre-WASDE expectations/positioning.” |
| Q1 sector-return benchmark | The plan asks for Shenwan Agriculture versus CSI 300. | The research reports a Shenwan agriculture constituent-weighted proxy return of **-0.88%**, CSI 300 at **+1.34%**, and excess return of **-2.22pct**, while disclosing that the official Shenwan endpoint timed out. | The direction and methodology are clear, but this is not the official published `801010.SI` return; it must be labeled as a proxy reconstruction. |
| Hog-cycle figures | The plan asks for hog spot, piglet, binary sow, self-farrowing profit, and purchased-piglet profit. | The research provides external three-way hog at **RMB9.75/kg**, 15kg piglet at **RMB351/head**, 50kg binary sow at **RMB1,407/head**, self-farrowing profit at **RMB-256/head**, and purchased-piglet profit at **RMB-203/head**. | The planned data points are covered, and the figures support “price bottom showing, profit bottom not confirmed.” |
| Planting progress | The plan asks for U.S. corn/soybean planting progress versus the 5-year average. | The research reports, through **2026-05-03**, corn at **38%** versus the 5-year average of **34%**, and soybeans at **33%** versus **23%**. Source: https://esmis.nal.usda.gov/sites/default/release-files/795893/prog1826.txt | Consistent and usable. The research correctly notes that Week 19 had not been published as of **2026-05-10**. |

## 3. Narrative Coherence

The overall logic holds. The research stage answers every planned Q1-Q6 section, and it improves the package by correcting the planning-stage errors on the A-share trading window and WASDE release date rather than carrying them forward.

Three links need strengthening:

- **Q3 WASDE**: The plan asks whether the actual May WASDE figures were bullish or bearish. Since the release is scheduled for **2026-05-12 12:00 ET**, the research can only provide Dow Jones survey averages, CFTC positioning, and CBOT price action. That is appropriate, but the final weekly must label the section as “pre-WASDE expectations,” not as a post-report interpretation.
- **Q4 agri-input cycle**: The research covers urea, MAP, MOP, compound fertilizer, glyphosate, and glufosinate quotes, but operating-rate data is still missing. The Q2 earnings-elasticity ranking is therefore based mainly on price and share-price linkage, without enough production, utilization, or order validation.
- **Q5 capacity and cash flow**: The financial table covers revenue, attributable net profit, operating cash flow, and leverage, but some full-year shipment guidance and Wind consensus checks remain incomplete. The “through-cycle survivor” conclusion is useful as a screen, but not yet strong enough for direct portfolio recommendations.

## 4. Editorial Quality

- Keep the “Priority Conclusions” section, but add an “investment implication / next validation point” to each bullet so it does not read as a fact list only.
- Put “Shenwan constituent-weighted proxy reconstruction” directly in the Q1 table title, not only in the method and caveat paragraphs, so readers do not mistake it for official Wind/Shenwan index performance.
- Rename Q3 from “WASDE and Global Grain Direction” to “Pre-WASDE Expectations and Global Grain Direction,” and mark every “May actual” column as “to be updated after **2026-05-12**.”
- Split Q4 into separate “fertilizer” and “agrochemical” tables, with a separate “data gaps: operating rates / transaction prices” row to keep prices, indices, and stock returns from blurring together.

## 5. Recommended Revisions

- **High priority**: Before final presentation, remove all planning-stage residual wording that says A-shares opened on **2026-05-04** or that WASDE was released on **2026-05-08**. The final report should use the **2026-04-30 to 2026-05-08** A-share return window and the **2026-05-12 12:00 ET** WASDE release time.
- **High priority**: Label Q1 industry returns as a “Shenwan constituent-weighted proxy reconstruction,” and replace them with official Wind/Shenwan `801010.SI` and level-2 weekly returns when available.
- **Medium priority**: After the **2026-05-12** WASDE release, update actual values, post-report CBOT reaction, and domestic soymeal/corn transmission.
- **Medium priority**: Fill operating-rate or production data for urea, compound fertilizer, glyphosate, and glufosinate. If that cannot be obtained, downgrade the “earnings-elasticity ranking” to a “price and equity-performance observation.”
- **Medium priority**: Add company-announcement or call-note support for full-year shipment guidance, cost targets, and Wind consensus deltas in Q5, so balance-sheet quality is not inferred only from summary financial tables.

## 6. Overall Rating

**needs-revision** — The files are complete, and the research stage correctly fixed the main date errors from the plan, with data-backed conclusions; however, the PM-ready version still needs official/proxy labeling for market returns, the **2026-05-12** WASDE actuals, and stronger validation of agri-input operating rates and company guidance.
