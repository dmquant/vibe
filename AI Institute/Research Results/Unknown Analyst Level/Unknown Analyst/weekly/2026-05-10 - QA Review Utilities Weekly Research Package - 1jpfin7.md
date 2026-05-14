---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review: Utilities Weekly Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review: Utilities Weekly Research Package

Date anchor: 2026-05-10  
Review scope: `01_weekly_plan.md`, `01_weekly_plan.en.md`, `02_weekly_research.md`, `02_weekly_research.en.md`

## 1. File Manifest

| declared file | exists in workspace (yes / no) | note |
|---|---|---|
| `01_weekly_plan.md` | yes | 12,865 bytes; read successfully, complete. |
| `01_weekly_plan.en.md` | yes | 14,376 bytes; read successfully, complete. |
| `02_weekly_research.md` | yes | 5,450 bytes; read successfully, complete. |
| `02_weekly_research.en.md` | yes | 6,108 bytes; read successfully, complete. |

## 2. Cross-Step Consistency

| Check item | Planning-stage value | Research-stage value | QA judgment |
|---|---|---|---|
| Coverage window and date anchor | 2026-05-04 to 2026-05-08; local date anchor 2026-05-10. | 2026-05-04 to 2026-05-08; anchor date 2026-05-10. | Consistent. |
| DUK data-center ESAs | DUK disclosed Electric Service Agreements totaling 7.6 GW; the 15.4 GW pipeline needs to be split out.[Source 2] | DUK disclosed 7.6 GW of ESAs; the table shows 7.6 + 7.8 = 15.4 and states that two-thirds is under construction. | 7.6 GW and 15.4 GW are consistent; “two-thirds under construction” is a new research-stage assertion and needs a source or removal. |
| XLU weekly performance | 46.55 → 44.72, about -3.93%.[Source 3] | 46.55 → 44.72, -3.93%. | Consistent; however, the research report attributes the move to employment data and +6.7% technology-stock flows, while the planning report does not provide a source for +6.7%. |
| NERC Level 3 alert date and deadlines | Disclosed on 2026-05-05; acknowledgment by 2026-05-11 and response by 2026-08-03.[Source 4] | The summary says NERC issued a Level 3 Alert; the evidence line says “NERC Alert issued 2026-05-04”; the table keeps 2026-05-11 and 2026-08-03. | Deadlines are consistent; the issuance/disclosure date is inconsistent between 2026-05-05 and 2026-05-04 and needs one verifiable convention. |
| WTRG and RSG operating results | WTRG revenue of $861.8 million, up 10%; RSG revenue +2.6%, Adjusted EPS $1.70, adjusted EBITDA margin +50 bps.[Source 5][Source 6] | WTRG revenue +10%, O&M +27.6%; RSG core price +5.7%, margin +50 bps. | WTRG +10% and RSG +50 bps are consistent; O&M +27.6% and RSG core price +5.7% are new figures that need citations. |
| Natural gas storage and Henry Hub | EIA injection of 63 Bcf versus 74 Bcf expected; surplus to the five-year average of 139 Bcf.[Source 8] | EIA 63 Bcf; Henry Hub $2.65 → $2.76, +4.15%. | 63 Bcf is consistent; the Henry Hub price series is new and needs a source plus spot/futures labeling. |
| Carbon-market prices | The plan requests official or exchange data for EUA Dec26, UKA, CCA, RGGI, CBAM, and related metrics.[Source 10][Source 11] | EUA €75.18, UKA £73.98, RGGI $37.00, CCA $29.15. | The research report has a useful draft table, but prices and weekly moves lack source, contract, delivery period, close time, and vendor details. |

## 3. Narrative Coherence

The research report answers five of the six planning questions to some degree: DUK load growth, NERC reliability risk, XLU rate pressure, natural gas storage, and water/environmental-services pricing all appear in the final research draft. The overall investment narrative is coherent: AI load is becoming contractual and supports long-term growth, while rates, financing costs, and reliability regulation weigh on near-term valuation.

The main gaps are:

- Planning question 6, on whether carbon prices and compliance costs are changing European power dispatch, U.S. environmental-services customer demand, or cross-border industrial costs, is only addressed through a price monitor. The transmission mechanism is not answered.
- The plan asked for a decomposition of XLU underperformance into rates, index rotation, volume, and ETF flows. The research report attributes the move to employment data and +6.7% technology-stock flows without showing the rate, flow, or volume evidence chain.
- The plan asked for a deliverability comparison across DUK, SO, NEE, and peers. The research report includes only DUK, SO (Est.), and Clearway, and places a 320-MW storage project inside a data-center load commitment matrix, which needs classification cleanup.

## 4. Editorial Quality

- The title and executive summary are clear, but “driven by stronger-than-expected employment data (+115,000)” should be softened to “aligned with post-employment-report rate pressure” unless market-rate and fund-flow evidence is added.
- Exhibit 1 should state whether all asset moves are price return or total return; Henry Hub should include units and spot/futures convention instead of being mixed with equity closing prices without labels.
- Exhibit 2 should be renamed from “Data Center Load Commitment Matrix” to “Data Center Load and Storage Project Tracker,” or Clearway should be removed, to avoid treating storage MW as data-center load.
- Exhibit 3 should add data source, contract month, close time, and currency units, and should avoid substituting labels such as “strong recovery” and “plunge” for auditable data.

## 5. Recommended Revisions

- High priority: Add sources for every new figure introduced in the research report, especially technology-stock flows of +6.7%, DUK two-thirds under construction, WTRG O&M +27.6%, RSG core price +5.7%, Henry Hub $2.65 → $2.76, and all carbon-market prices and weekly changes.
- High priority: Reconcile the NERC alert date convention and state whether 2026-05-04 is the original alert date, 2026-05-05 is the media disclosure date, or one of them is an error; the body, evidence notes, and tables should use one consistent convention.
- Medium priority: Complete the XLU -3.93% decomposition by putting 10Y/2Y Treasury moves, ETF flows, volume, and SPY/XLU relative returns into one validation table.
- Medium priority: Rewrite the carbon-market section so it answers whether carbon prices are affecting power dispatch, environmental-services customer demand, or cross-border industrial costs, not just where prices closed.
- Medium priority: Correct the classification of the Clearway 320-MW storage project; if kept, it belongs in a storage/resource-adequacy section rather than a data-center load matrix.

## 6. Overall Rating

needs-revision. The package is complete and the main thesis is coherent, with most anchor numbers aligned to the planning report, but the research report introduces several unsourced new figures and has NERC date-convention and table-classification issues that should be fixed before PM presentation.
