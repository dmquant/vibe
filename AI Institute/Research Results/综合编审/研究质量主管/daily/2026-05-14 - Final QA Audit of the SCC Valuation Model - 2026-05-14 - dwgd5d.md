---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "综合编审"
content_error: ""
---

# Final QA Audit of the SCC Valuation Model - 2026-05-14

Kind: **daily**
Analyst: **QA Manager**

## Links

- Report type: [[daily]]
- Analyst: [[QA Manager]]
- Analyst level: [[综合编审]]

# Final QA Audit of the SCC Valuation Model - 2026-05-14

Metadata: Board `9ca0b853-cce5-438d-b127-920167354f6a`; Card 8/8; analyst role `qa-manager`; stance `synthesize`; work-date 2026-05-14 Asia/Singapore.

As of 2026-05-14, I synthesize and audit the seven-card research chain on AI physical infrastructure's social bottleneck. Shell date was confirmed as 2026-05-14. Live workspace storage is incomplete: only cards 01-03 are present locally, while `session-brief.md`, `analyst-catalog.json`, and cards 04-07 are missing from disk and were reconstructed from the prompt snapshot. This does not invalidate the thesis, but it lowers publication readiness.

## Final QA Verdict

**Grade: NEEDS REVISION before external publication; usable for internal debate after the corrections below.**

The SCC framework is directionally strong: it moves valuation from announced MW toward sites with bankable water, power, community acceptance, legal durability, and retroactive-risk buffers. That is consistent with the evidence base: IEA projects global data-center electricity demand near 945 TWh by 2030; LBNL/DOE projects U.S. data-center electricity use at roughly 325-580 TWh by 2028; Data Center Watch tracked $64B of blocked or delayed U.S. data-center projects from May 2024 to March 2025; Loudoun County's 2026 guidelines show a 2025 median data-center land sale value near $4.1M/acre; and PJM/FERC/EIA materials show large-load integration has become a ratepayer, reliability, and cost-allocation issue.

The report chain is not a clean pass because the model still has four publication defects: incomplete upstream file custody, a dimensional error in the SCC valuation formula, weak verification for several Card 04-07 claims, and insufficient treatment of energy-inflation convexity.

## File Completeness Audit

| Item | QA status | Finding |
|---|---|---|
| Mandatory Card 08 files | Pass after this write | `report.en.md`, `report.zh.md`, and `meta.json` are created in `card-08/`. |
| Prior live files | Needs revision | Only cards 01-03 are present locally. Cards 04-07 and shared session files are missing from disk despite being included in the prompt snapshot. |
| Bilingual continuity | Mixed | Cards 01-02 are source-backed and bilingual. Card 03 exists, but its prompt-level summary/handoff became corrupted into file-write text. Cards 04-07 cannot be audited against live files. |
| Source custody | Needs revision | Core public-source anchors are verifiable, but some later claims from cards 04-07 need explicit source links before publication. |

Publication rule: do not release the combined note until the live board contains all final reports and `meta.json` files for cards 01-08, or until the missing cards are marked as reconstructed appendices.

## Numeric Consistency Audit

The following numbers are internally usable:

| Number | Status | QA note |
|---:|---|---|
| 945 TWh global data-center electricity demand by 2030 | Supported | Matches IEA's 2025 Energy and AI base case. |
| 325-580 TWh U.S. data-center electricity use by 2028 | Supported | Matches LBNL/DOE 2024 report range cited in Card 01. |
| $64B blocked or delayed U.S. projects | Supported with scope note | Data Center Watch scope is May 2024-March 2025; do not generalize beyond that window without updating. |
| $196.25/kW/month primary wholesale asking rate | Plausible but needs source custody | Used in Card 01 for time-to-power math; retain only with the CBRE H2 2025 citation present. |
| $4.1M/acre Loudoun 2025 median data-center land value | Supported | Loudoun County 2026 guidelines show the median. |
| 15-22% DC REIT drawdown, VaR 185 bps to 525 bps | Scenario, not observed fact | Must be labeled as Card 05 stress-test output, not market evidence. |
| SCC weights: self-funded water 25%, self-funded power 20%, community premium 20%, legislative immunity 20%, retroactive-risk buffer 15% | Internally coherent | Useful as a baseline, but not robust as fixed weights under energy shocks. |
| 12-month 18-25% long-short spread | Unsupported forecast | Requires backtest, comps, or should be downgraded to a scenario target. |

The most important numeric correction is dimensional. Card 06 reportedly states:

`EV / energized-equivalent MW = announced MW x SCC x probability of commissioning`

That is not dimensionally valid. The correct two-step structure is:

`energized-equivalent MW = announced MW x SCC x probability of commissioning`

`valuation multiple = EV / energized-equivalent MW`

This correction is mandatory. Without it, the model confuses an asset quantity with a valuation ratio.

## SCC Robustness Under Energy Inflation

The five-factor SCC model is directionally robust under ordinary macro volatility because it rewards legally isolated water and power access. It is not robust enough under extreme energy inflation unless it adds an explicit energy-cost and rate-design overlay.

For a continuous 100 MW load, annual electricity use is about 876,000 MWh. A delivered power-cost shock of $20/MWh adds roughly $17.5M of annual cost. A $50/MWh shock adds roughly $43.8M. Capitalized at 7%, those shocks imply approximate value drags of $250M and $625M if not passed through to tenants or customers. These amounts are larger than the Card 01 six-month time-to-power value of about $64.8M and can overwhelm a weak SCC score.

| Energy shock | SCC model behavior | Failure mode | Required model fix |
|---|---|---|---|
| +20% delivered power/capacity-cost shock | Baseline SCC mostly holds | Projects with socialized grid upgrades face bill-backlash and rate-case risk | Add 0-10 point penalty for unhedged power exposure and socialized cost recovery. |
| +50% shock | Fixed SCC weights become stale | Self-funded power is still valuable, but only if fuel, PPA, standby, and capacity costs are contractually pass-through or hedged | Increase effective power/rate-design weight from 20% toward 30% through a dynamic overlay. |
| +100% tail shock | SCC becomes nonlinear | Low-SCC sites can move from delay risk to cancellation or retroactive-tax risk | Add a hard gate: no investment-grade SCC if cost pass-through, curtailment rights, and collateral are absent. |

The audit conclusion is that SCC should not be a static score. It should be a base score plus a macro overlay:

`Adjusted SCC = base SCC - energy inflation penalty - local bill-backlash penalty + contractual pass-through credit + curtailability/BYOG credit`

This keeps the original social-compliance logic intact while recognizing that energy inflation can turn a utility-cost allocation problem into a community and legislative problem.

## Narrative Coherence Audit

The research chain has a coherent arc:

1. Card 01 establishes that community resistance does not end data-center growth, but reprices generic land into permitted, powered, water-secure sites.
2. Card 02 correctly tightens that view by distinguishing self-funded, collateralized grid access from socialized rate-base exposure.
3. Card 03 translates the bottleneck into cross-asset positioning, but needs source cleanup and a non-corrupted handoff record.
4. Cards 04-05 add a useful social-risk stress test around agriculture, water, retroactive legislation, and drawdown risk, but their scenario numbers need clearer labels.
5. Card 06 converts the thesis into SCC, which is the right conceptual move, but the formula must be fixed.
6. Card 07 supports the legal-isolation value of self-funded power/water, but claims such as an "Ireland 2026 Private Lines Act" cannot be treated as publishable until directly sourced.

The main editorial issue is excess precision. Terms such as "MW value goes to zero," "social credit liability," and "18-25% spread" read like conclusions from a fully estimated model. The evidence supports a high-conviction direction, not that level of point precision.

## Required Revision Notes

Before publication, make these revisions:

1. Restore or reconstruct live files for cards 04-07 and the shared `session-brief.md` / `analyst-catalog.json`, or explicitly label those sections as reconstructed from prompt context.
2. Correct the SCC formula to separate `energized-equivalent MW` from `EV / energized-equivalent MW`.
3. Add an energy-inflation overlay to SCC, with at least three scenarios: +20%, +50%, and +100% delivered power/capacity-cost shock.
4. Label Card 05's 15-22% drawdown and 185 bps to 525 bps VaR move as stress-test outputs, not observed market data.
5. Downgrade the 12-month 18-25% long-short spread to an illustrative scenario unless a backtest or comparable basket is provided.
6. Source-check Card 07's legal claims, especially the Ireland private-line assertion. If no primary source is available, replace it with a general "private-wire / co-located supply regimes" discussion.
7. Keep all release dates anchored to 2026-05-14. Do not let 2026-05-13 footers from prior cards migrate into the final combined report.

## Final Publication Decision

The SCC thesis should be retained, but the package should receive **NEEDS REVISION**, not pass. The core conclusion is investable: AI infrastructure valuation should migrate from announced MW to socially compliant, legally isolated, energizable MW. The publication risk is that the current version overstates precision and relies on incomplete file custody for the later cards.

No further whiteboard analyst handoff is recommended because this is Card 8/8 and the reviewer trigger was final pre-publication QA pass, trigger (d). The next step is editorial remediation by the originating research owner, most likely the strategy lead, not a new analytical card.

## Sources Checked Or Relied On

- IEA, "Energy demand from AI," Energy and AI, 2025: https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai
- Lawrence Berkeley National Laboratory / U.S. DOE, "2024 United States Data Center Energy Usage Report," 2024-12-19: https://buildings.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report
- Berkeley Lab / Brattle / U.S. DOE, "Electricity Rate Designs for Large Loads: Evolving Practices and Opportunities," January 2025: https://emp.lbl.gov/publications/electricity-rate-designs-large-loads
- Data Center Watch, "$64 billion of data center projects have been blocked or delayed amid local opposition": https://www.datacenterwatch.org/report
- Loudoun County, "2026 Data Center Guidelines": https://www.loudoun.gov/DocumentCenter/View/219238/462-Data-Center-2026-Guidelines-PDF
- U.S. Energy Information Administration, "Fossil generation could rise with faster-than-expected growth in data center power demand," 2026-03-12: https://www.eia.gov/todayinenergy/detail.php?id=67344
- U.S. Energy Information Administration, "Commercial electricity sales have soared in Virginia, driven by data centers," May 2026: https://www.eia.gov/todayinenergy/detail.php?id=67664
- PJM, "PJM Board Outlines Plans To Integrate Large Loads Reliably," 2026-01-16: https://insidelines.pjm.com/pjm-board-outlines-plans-to-integrate-large-loads-reliably/
- PJM, "PJM Auction Procures 134,311 MW of Generation Resources; Supply Responds to Price Signal," 2025-07-22: https://www.pjm.com/-/media/DotCom/about-pjm/newsroom/2025-releases/20250722-pjm-auction-procures-134311-mw-of-generation-resources-supply-responds-to-price-signal.pdf
- Federal Energy Regulatory Commission, "FERC to Act on Large Load Interconnection Docket by June 2026," 2026-04-16: https://www.ferc.gov/news-events/news/ferc-act-large-load-interconnection-docket-june-2026
- Oregon Public Utility Commission, "2025 Legislative Report," HB 3546 / POWER Act: https://www.oregon.gov/puc/Documents/2025-Legislative-Report.pdf

Footer: work-date 2026-05-14 Asia/Singapore; final QA grade `NEEDS REVISION`; file `whiteboard/9ca0b853-cce5-438d-b127-920167354f6a/card-08/report.en.md`.
