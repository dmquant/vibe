---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "固收与衍生品"
content_error: ""
---

# Card 07 — 2026-05-12 FY29-FY31 AI Capex Refinancing Wall: Redesigning Duration and Basis

Kind: **daily**
Analyst: **Bond Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Bond Analyst]]
- Analyst level: [[固收与衍生品]]

# Card 07 — 2026-05-12 FY29-FY31 AI Capex Refinancing Wall: Redesigning Duration and Basis

- Date (Asia/Singapore work-date): **2026-05-12**
- Analyst: Bond Analyst (specialist, rates/credit/yield-curve/duration)
- Stance: **synthesize** of Cards 01-06
- Board: a79d6fde-2059-4e42-a438-1693623b09e0 · Card 7/8
- Workspace note: live `session-brief.md`, `card-02`, and `card-06` files were missing and were reconstructed from the prompt snapshot; available `card-03`, `card-04`, and `card-05` files were read directly.

## 1. Core Judgment

As of **2026-05-12**, I support the prior chain of reasoning and synthesize it into one trade design: the FY29-FY31 AI capex refinancing wall should not be hedged by simply shortening all duration. The right structure is a **three-leg package**: **receive 5y / pay 30y rates as a 5s30s steepener**, **own 2029-2034 hyperscaler IG belly credit with a covered-call-style carry overlay**, and **force project-finance replacement into tenant-guaranteed, utility-backed, or portfolio-level debt before the mini-perm wall arrives**.

The reason is the same duration mismatch surfaced in the earlier cards. Hyperscaler balance sheets still have short-duration cash flow and flexible capex, while single-site project finance, data-center CMBS, and REIT equity are long-duration claims on physical assets whose power, lease, and refinancing clocks do not line up. A 75-125 bp cap-rate expansion and private hyperscale asset-package price discovery confirm that the market is no longer paying for generic data-center growth; it is paying for **who owns the power-delay option and who absorbs the FY29-FY31 refinancing basis**.

## 2. Market Anchor on 2026-05-12

The latest official U.S. rates data available before the Asia work-date close show a curve with high long-end term premium: the U.S. Treasury table for **2026-05-11** marks the 5y at **4.07%**, 10y at **4.42%**, and 30y at **4.98%**. The 5s30s curve is therefore about **+91 bp**. The Fed's **2026-04-29** FOMC statement maintained the target range at **3.50%-3.75%**, and the implementation note kept reserve balances at **3.65%** from **2026-04-30**. Broad IG credit is still tight: ALFRED/FRED shows ICE BofA U.S. Corporate Index OAS at **0.79%** on **2026-05-08**, updated **2026-05-11**.

Those anchors matter. A general IG spread of 79 bp means the market is not yet pricing a broad corporate credit accident. But the asset-level data-center stack is already showing structural stress: Morningstar DBRS's **BX Commercial Mortgage Trust 2026-VLT9** presale shows **USD 2.053bn** mortgage debt and a **90.8%** DBRS LTV, while prior cards identified DSCR and power-reserve fragility. Digital Realty's Q1 2026 commentary shows the equity-capital side of the same problem: **USD 910mn** of development capex in the quarter, **63 MW** delivered at **84%** preleased, **464 MW** started at nearly **50%** preleased, about **1.2 GW** under construction, **4.7x** debt/adjusted EBITDA, and a **64%** AFFO payout ratio.

## 3. Recommended Term-Structure Package

| Leg | Instrument | Entry Zone | Target | Stop / Falsifier | Purpose |
|---|---|---:|---:|---:|---|
| Rates hedge | DV01-neutral **receive 5y / pay 30y UST or SOFR swap** | 5s30s near **+85 to +95 bp** | **+120 to +135 bp** | Close below **+65 bp** with no project-finance spread widening | Hedge cap-rate and terminal-value duration without selling all IG belly credit |
| Credit carry | Long 2029-2034 hyperscaler IG belly, avoid 30y | Hyperscaler OAS **+55 to +85 bp** | Hold unless OAS widens beyond **+110 bp** without project-finance widening | IG-only widening > **75 bp** while CMBS/project basis is flat | Keep exposure to cash-flow-rich borrowers benefiting from capex deferral |
| Covered-call overlay | Sell 3-6m 10-15% OTM calls on defensive REIT/IG-credit proxies, or sell OTM receiver swaptions against part of the 5y receiver | Vol premium funds downside puts or project-finance protection | Harvest **50-90 bp annualized** option carry, but cap only one-third to one-half of upside | Implied vol cheapens below realized or REIT beta becomes the main hedge | Fund negative carry from project-finance shorts without surrendering convexity |
| Project-finance replacement | Move single-site mini-perms into tenant-guaranteed lease debt, utility tariff-backed debt, or portfolio-level ABS/CMBS | Replace SOFR + **425-650 bp** private debt | New debt at SOFR + **225-350 bp** if power and take-or-pay tests are met | No 15y take-or-pay, no PPA/BTM fuel pass-through, DSCR < **1.25x** | Lock **175-250 bp** gross refinancing basis before FY29-FY31 |

This is not a pure "risk-off" trade. It is a **duration transfer** trade. The portfolio wants to own the curve segment where cash-flow resilience is strongest, while being short the assets whose financing duration is too short relative to their physical and lease duration.

## 4. Why 5s30s Steepener Beats a Generic Duration Cut

The FY29-FY31 wall is a belly problem in credit and a long-end problem in equity valuation. Project loans written in 2024-2026 will refinance around the 3-5y point from today, but REIT NAV and private-asset cap rates discount 15-25y asset lives. Cutting all duration would also give up the part of the AI complex that should improve when capex is deferred: hyperscaler FCF.

The cleaner hedge is therefore:

- **Receive 5y** because the Fed path and capex deferral should support the belly if AI capex is delayed rather than cancelled.
- **Pay 30y** because cap-rate expansion, fiscal term premium, and power-infrastructure duration all sit in the long end.
- Keep the steepener **DV01-neutral**. A practical starting ratio is roughly **1.0 unit of 5y DV01 received against 1.0 unit of 30y DV01 paid**, implemented by notional weights rather than equal face amount.

The trade should work in the core stress scenario: project spreads widen, REIT NAVs derate, the long end retains term premium, and hyperscaler belly credit does not suffer a solvency spread shock. It fails if the move is a broad deflationary bull-flattener in which 30y rates collapse and project-finance spreads remain contained.

## 5. Covered Call: Use It as Carry Funding, Not as the Thesis

The covered-call leg should be modest. It is a carry tool, not the source of alpha.

The right implementation is to overwrite only liquid, defensive exposure: one-third to one-half of an EQIX-style defensive REIT long, a liquid IG-credit ETF sleeve, or the 5y receiver position via out-of-the-money receiver swaptions. The premium should fund put spreads on high-beta data-center REIT equity, CMBS BBB-B protection where available, or private-credit mark-to-market reserves.

Do **not** overwrite the project-finance short. The asymmetry there is in the tail: when DSCR falls below **1.25x**, BBnB reserves are depleted, or take-or-pay lease conversion slips, spread widening can gap faster than the option premium earned.

## 6. Project-Finance Replacement Path for FY29-FY31

For sponsors and lenders, the refinancing wall should be redesigned before FY29. Waiting until the mini-perm maturity date leaves the borrower negotiating after the market has already repriced power-delay risk.

1. **2026-H2 to 2027: amend, reserve, and rank.** Split projects into green, amber, and red buckets by power delivery, tenant status, and DSCR. Green means energized MW and contractual pass-through are intact; amber means power is late but tenant commitment is still enforceable; red means weak PPA, uncertain tenant ramp, and DSCR below **1.25x**. Amber projects need 24-36 months of debt-service and power-delay reserves.
2. **2027-2028: convert the good collateral.** Move green and stronger amber sites from single-site private credit into portfolio-level debt with cross-collateralization, cash sweeps, and power-step-up covenants. The target spread is SOFR + **225-350 bp**, not SOFR + **425-650 bp**.
3. **2028-2029: transfer duration to the party that owns the option.** If the hyperscaler wants dedicated capacity, refinance through a tenant-guaranteed lease, prepaid capacity agreement, or on-balance-sheet build-to-suit obligation. If the utility controls energization, use tariff-backed or regulated-asset-base-like recovery where the jurisdiction allows it.
4. **2029-2031: refinance only stabilized cash flow.** Sites that still rely on BTM gas, temporary rent reserves, or optimistic occupancy should not be rolled at par. They need equity write-downs, preferred rescue capital, or sale into private asset packages at cap rates consistent with the new **5.75%-6.75%** range.

## 7. Trade Rules and Signal Dashboard

| Signal | Confirming Reading | Portfolio Action |
|---|---:|---|
| Data-center REIT cap-rate expansion | **+75 to +125 bp** from prior **5.0%-5.5%** base to **5.75%-6.75%** | Keep REIT equity short and pay 30y leg |
| Broad IG OAS | Around **0.79%** on latest ALFRED/FRED read | Broad IG is not the short; stay in hyperscaler belly |
| Hyperscaler 5-10y OAS | **+55 to +85 bp** | Add long if project-finance basis widens faster |
| IG vs project-finance basis | Widening by **>=60 bp** over 20 trading days | Confirm AI-specific stress; increase basis package |
| Project-finance replacement saving | Debt cost reduced by **175-250 bp** | Lock economics before FY29-FY31 wall |
| DSCR | Below **1.25x** or reserve coverage below 12 months | Move from hedge to impairment/default framework |

## 8. What Would Change the Call

The structure should be reduced or reversed if three things happen together: hyperscalers accept explicit on-balance-sheet treatment for 15-20y take-or-pay leases, utilities provide binding energization and cost-recovery schedules, and project-finance spreads tighten while IG spreads widen. That would mean duration risk has moved back to the IG balance sheet, invalidating the long-IG/short-project-finance basis trade.

The structure should be increased if private hyperscale asset packages clear at cap rates above **6.5%**, if data-center CMBS BBB-B spreads widen by more than **175 bp** in 20 trading days, or if any large 2024-2026 vintage AI campus loan needs an amend-and-extend before reaching stabilized occupancy.

## 9. Investment Conclusion

The FY29-FY31 refinancing wall is best handled by **redesigning who bears duration**, not by trying to forecast one terminal AI capex number. Own the 5-10y IG belly of hyperscalers because capex deferral supports cash flow. Hedge the valuation tail with a 5s30s steepener because cap-rate expansion lives in the long end. Use covered calls only to fund protection. Force project debt into tenant-guaranteed or utility-backed form before FY29, and require **175-250 bp** of gross basis saving to justify the replacement.

The net view is: **long hyperscaler IG belly, short weak project-finance/REIT duration, pay long-end duration, and only refinance stabilized power-backed collateral at par**.

## 10. Sources

- Federal Reserve, FOMC statement dated 2026-04-29, target range **3.50%-3.75%**: https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm
- Federal Reserve, implementation note dated 2026-04-29, reserve balances **3.65%** effective 2026-04-30: https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a1.htm
- U.S. Department of the Treasury, Daily Treasury Rates, **2026-05-11** curve used for 5y/10y/30y anchors: https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve
- ALFRED / St. Louis Fed, ICE BofA U.S. Corporate Index OAS, **0.79%** on 2026-05-08, updated 2026-05-11: https://alfred.stlouisfed.org/series?seid=BAMLC0A0CM
- Morningstar DBRS, BX Commercial Mortgage Trust 2026-VLT9 presale, **USD 2.053bn** mortgage loan and **90.8%** DBRS LTV: https://f.tlcollect.com/fr2/726/81988/2026_CMBS_for_QTS.pdf
- Digital Realty Q1 2026 earnings exhibit and SEC filing context: https://www.sec.gov/Archives/edgar/data/1297996/000110465926047702/dlr-20260423xex99d1.htm
- Digital Realty Q1 2026 earnings transcript, development capex, MW delivery/start data, leverage, payout, and private-capital platform: https://www.fool.com/earnings/call-transcripts/2026/04/23/digital-realty-dlr-q1-2026-earnings-transcript/

## 11. Handoff

Recommended next analyst: **asset-allocator**.

Follow-up topic: portfolio sizing for the AI capex duration-basis package.

Follow-up question: Given the proposed long hyperscaler IG belly / short project-finance and REIT duration / 5s30s steepener package, what risk budget, drawdown tolerance, and cross-asset allocation weights should be assigned in a multi-asset portfolio?

Handoff rationale: **asset-allocator [primary, horizon]** is the right next analyst because this card has converted the credit and rates thesis into an implementable package; the remaining question is portfolio sizing, correlation, and risk-budget allocation rather than another sector screen or reviewer-trigger stress test.

## Footer

Report date: **2026-05-12** (Asia/Singapore). Author: bond-analyst. Stance: synthesize. Confidence: 0.70.
