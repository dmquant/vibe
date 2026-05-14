---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Research Package QA Review

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Research Package QA Review

Date anchor: `2026-05-10`

## 1. File manifest

| declared file | exists in workspace (yes / no) | note |
|---|---|---|
| `01_weekly_plan.md` | yes | 12,906 bytes; readable and complete. |
| `01_weekly_plan.en.md` | yes | 14,947 bytes; readable and complete. |
| `02_weekly_research.md` | yes | 7,097 bytes; readable and complete, but the source list for research-stage additions is missing. |
| `02_weekly_research.en.md` | yes | 7,018 bytes; readable and complete, but it has the same missing-source issue as the Chinese version. |

## 2. Cross-step consistency

| Check item | Planning-stage value/date | Research-stage value/date | QA conclusion |
|---|---:|---:|---|
| Coverage window and date anchor | `2026-05-04` to `2026-05-08`; date anchor `2026-05-10` | `2026-05-04` to `2026-05-08`; date anchor `2026-05-10` | Consistent. |
| SEC climate-rule rescission | On `2026-05-04`, the SEC submitted a proposal to OIRA to rescind the 2024 rule | On `2026-05-04`, the SEC submitted a proposal to OIRA to rescind the 2024 climate disclosure rule | Consistent. |
| ESRS simplification | Mandatory datapoints reduced by more than 60%; total datapoints reduced by more than 70%; expected reporting cost per company down more than 30%; value-chain information cap for companies with fewer than `1000` employees | Mandatory datapoints reduced by more than 60%; value-chain cap for entities below 1000 employees; cost reduction of about 30% appears in selected places | Mostly consistent, but the research report does not systematically retain the important “total datapoints reduced by more than 70%” figure. |
| Vestas Q1 2026 | Revenue of EUR 3,966m, +14.4% year over year; EBIT before special items of EUR 127m and 3.2% margin; orders of EUR 5.2bn; combined order backlog of EUR 76.1bn | Revenue of €3.97bn, +14.4%; EBIT margin of 3.2%; English evidence mentions €76.1bn backlog | Consistent after rounding, but the research table omits orders of EUR 5.2bn and combined order backlog of EUR 76.1bn, weakening the earnings-inflection evidence chain. |
| IFC Green Wonton bond | Three-year HKD 6bn, about USD 766m, 2.917% coupon; 90% placed with bank treasuries and local investors represented 87% of the order book | HK$6.0bn, 2.917%, oversubscribed | Size and coupon match; the research report omits about USD 766m, 90% bank treasury allocation, and 87% local-investor order book. |
| Hong Kong Government green and infrastructure bonds | About HK$27.6bn, denominated in HKD/RMB/USD/EUR, expected to settle on `2026-05-14` and list on HKEX and LSE | HK$27.6bn, multi-currency; adds 3.95% (HKD 30Y) and 8.6x | Core size is consistent; the added 3.95% and 8.6x figures need explicit sourcing before they can be used in a PM-ready version. |

## 3. Narrative coherence

The research report broadly follows the six planning questions: disclosure divergence, SFDR/ESRS, CBAM and carbon markets, clean-energy fundamentals, Hong Kong sustainable bonds, and portfolio mapping. The main storyline correctly moves from “U.S. regulatory retreat vs. EU recalibration” into carbon markets and Hong Kong green finance.

Main gaps:

- Q1 is mostly answered, but “the federal mandate is effectively nullified” is too strong. The plan framed this as a possible pullback; the research report should preserve the Notice-and-Comment process and the uncertainty around California/ISSB substitute baselines.
- Q2 is underdeveloped. The report discusses ESRS and California/ISSB, but does not adequately address SFDR reform, PRIIPs cross-effects, PAI disclosure, fund classification, and greenwashing risk.
- Q3 is directionally right and adds the CBAM certificate price of €75.36 and EUA price of €75.18, but it does not show the price series, calculation window, or source list. The claims of close linkage and price convergence need stronger quantitative support.
- Q4 is mostly answered, but the report combines Vestas, First Solar, Enphase, and ETF returns without explaining wind-versus-solar subsector differences, and it underuses the planned Vestas orders of EUR 5.2bn and backlog of EUR 76.1bn.
- Q5 is clear, but “successfully established a cross-currency offshore sustainable finance benchmark” is stronger than the evidence supports. A better phrasing would be that the deals provide evidence of benchmark-curve formation, with tenor, order book, investor split, listing venue, and greenium comparisons added.
- Q6 remains incomplete. The report provides fund-flow data and an event table, but it does not complete the planned portfolio mapping across clean energy, traditional energy, European exporters, financial institutions, ESG data providers, and assurance firms.

## 4. Editorial quality

- Add and standardize the source table. The research report cites [S10], [S13], and other new items, but no source list appears at the end; [S3] also shifts meaning from the EU Council CBAM meeting in the plan to ICE 2026-05-08 settlement data in the research report.
- Moderate the strongest wording in the key conclusions. For example, “formally initiated rescission,” “effectively nullified,” and “successfully established” should become “entered the rescission process,” “the federal baseline may weaken,” and “shows signs of benchmark-curve formation.”
- Tighten table labels. `Weekly Return` should specify `2026-05-04 to 2026-05-08 weekly return`, and `ETF Weekly` should state whether the figures are price return, total return, USD terms, or local-currency terms.
- Align the English version’s tone with the Chinese version. Phrases such as “Federal mandate nullified” and “dominant global standard” are more absolute than the evidence base supports.

## 5. Recommended revisions

- High priority: Add a complete source table for ICE settlement prices, CBAM certificate pricing, California SB 253/SB 261, ISSB 40 jurisdictions, First Solar, Enphase, fund flows, Hong Kong Government 8.6x subscription, and 3.95% (HKD 30Y).
- High priority: Fix citation-number conflicts, especially [S3] being used for both the EU Council CBAM meeting and ICE settlement data.
- High priority: Put all added market data into reproducible tables with retrieval date, price convention, currency, local/USD basis, return window, and dividend treatment.
- Medium priority: Expand the SFDR/PRIIPs/PAI/fund-classification section so that planning question Q2 is answered, rather than relying mainly on ESRS simplification.
- Medium priority: Complete the portfolio mapping across clean energy, traditional energy, European exporters, financial institutions, ESG data providers, and assurance firms.
- Medium priority: Restore high-information figures already captured in the plan, including Vestas orders of EUR 5.2bn, combined order backlog of EUR 76.1bn, IFC’s 90% bank treasury allocation, and 87% local-investor order book.

## 6. Overall rating

`needs-revision` — The research package has a clear storyline, complete files, and broad coverage of the core events, but research-stage data additions lack visible sourcing and citation consistency, while SFDR and portfolio-mapping answers remain incomplete for PM presentation.
