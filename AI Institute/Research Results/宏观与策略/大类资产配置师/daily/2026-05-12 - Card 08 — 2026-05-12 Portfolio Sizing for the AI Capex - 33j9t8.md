---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "宏观与策略"
content_error: ""
---

# Card 08 — 2026-05-12 Portfolio Sizing for the AI Capex Duration-Basis Package

Kind: **daily**
Analyst: **Asset Allocator**

## Links

- Report type: [[daily]]
- Analyst: [[Asset Allocator]]
- Analyst level: [[宏观与策略]]

# Card 08 — 2026-05-12 Portfolio Sizing for the AI Capex Duration-Basis Package

- Date (Asia/Singapore work-date): **2026-05-12**
- Analyst: Asset Allocator (primary, multi-asset allocation / risk parity / all-weather)
- Stance: **synthesize** of Cards 01-07
- Board: a79d6fde-2059-4e42-a438-1693623b09e0 · Card 8/8
- Workspace note: local `session-brief.md`, `card-02`, `card-06`, and the initial `card-08` directory were missing; the missing upstream context was reconstructed from the prompt snapshot, while available `card-03`, `card-04`, `card-05`, and `card-07` files were read directly.

## 1. Core Judgment

As of **2026-05-12**, I support and synthesize the prior line of reasoning. The proposed package — **long hyperscaler IG belly / short weak project-finance and REIT duration / 5s30s steepener** — should be sized as a **satellite relative-value risk sleeve**, not as a core all-weather holding. My base allocation is:

- **Risk budget:** **4.5% of total active-risk variance**, equivalent to roughly **60-75 bp of annualized active volatility** inside a 300 bp active-risk multi-asset book.
- **Capital footprint:** **8% of portfolio NAV gross capital**, with **1-2% net NAV** after liquid shorts and swaps; do not exceed **12% gross NAV** unless the confirmation dashboard fires.
- **Drawdown tolerance:** **100 bp of portfolio NAV** as the hard loss budget, with de-risking at **70 bp** and strategy stop/re-underwrite at **120 bp**.

This is enough to matter if the AI capex duration trap widens into the FY29-FY31 refinancing wall, but small enough that a broad bull-flattener or hyperscaler lease-risk transfer does not dominate the whole portfolio.

## 2. Market Anchor on 2026-05-12

The latest official U.S. rates anchor before this Asia work-date is the U.S. Treasury curve for **2026-05-11**: 5y **4.07%**, 10y **4.42%**, and 30y **4.98%**, leaving 5s30s near **+91 bp**. The Fed's **2026-04-29** FOMC statement held the target range at **3.50%-3.75%**, and the implementation note kept reserve balances at **3.65%** effective **2026-04-30**. Broad IG credit is still not stressed: ALFRED/FRED shows the ICE BofA U.S. Corporate Index OAS at **0.79%** on **2026-05-08**, updated **2026-05-11**.

The problem is therefore not broad IG credit. It is basis risk inside the AI infrastructure stack. Morningstar DBRS's **BX Commercial Mortgage Trust 2026-VLT9** presale shows approximately **USD 2.053bn** of mortgage debt and **90.8%** DBRS LTV, while Digital Realty's Q1 2026 materials show a large development pipeline, BBB/BBB+ style credit quality, and a business model that still depends on capital-market duration. That combination supports a relative-value sizing approach: own liquid hyperscaler belly credit, short the fragile duration claims, and hedge the long-end valuation channel.

## 3. Recommended Portfolio Sizing

| Sizing item | Base case | Add-risk zone | Cut-risk / stop zone | Rationale |
|---|---:|---:|---:|---|
| Active-risk budget | **4.5% of active-risk variance** | **6.0%** only after basis confirmation | **2.0%** if the falsifier fires | The thesis is strong but path-dependent and partly illiquid |
| Annualized active vol contribution | **60-75 bp** | Up to **90 bp** | Down to **30-40 bp** | Fits a 300 bp active-risk institutional multi-asset book |
| Gross capital | **8% NAV** | **10-12% NAV** | **4-5% NAV** | Gross exposure is needed because credit spread duration and DV01 are capital-light |
| Net capital | **1-2% NAV** | **2-3% NAV** | Flat to **1% NAV** | Long IG is mostly offset by shorts and swaps |
| Portfolio drawdown budget | **100 bp NAV** | Do not raise above **125 bp** | De-risk at **70 bp**, re-underwrite at **120 bp** | Keeps a thematic relative-value sleeve from becoming a macro bet |
| Holding horizon | **12-24 months** | Extend to FY29 only if refinancing basis is realized | Exit if confirmation does not arrive in 6 months | The catalyst is the FY29-FY31 refinancing wall, but marks arrive earlier |

For a USD 1bn reference portfolio, the base case is roughly **USD 80mn gross exposure**, **USD 10-20mn net capital**, **USD 6-7.5mn annualized active-vol budget**, and **USD 10mn maximum tolerated portfolio drawdown** before hard governance review.

## 4. Cross-Asset Risk Weights Inside the Sleeve

The sleeve should be sized by **risk contribution**, not by equal dollars:

| Sleeve leg | Risk weight | Capital / notional guide per 100 NAV | Target payoff | Key stop |
|---|---:|---:|---|---|
| Long hyperscaler IG belly, 2029-2034 | **30%** | **7-9 NAV** cash bonds or CDS index/name exposure; avoid 30y | Earn carry and benefit if capex deferral supports FCF | Hyperscaler 5-10y OAS widens beyond **+110 bp** while project-finance basis is flat |
| Short project-finance / CMBS / weak IDC credit | **25%** | **2-3 NAV** liquid CDS/CMBS proxy plus private-credit mark reserve | Capture **+200 to +400 bp** repricing in fragile asset-level debt | Cover if DSCR stays above **1.25x** and BBnB conversion is on schedule |
| Short REIT duration / cap-rate beta | **15%** | **2-3 NAV** REIT equity short or put-spread delta; focus weak PPA / single-tenant beta | Benefit from **75-125 bp** cap-rate expansion and NAV cuts | Cover if AFFO coverage holds above **1.25x** and cap rates tighten |
| 5s30s steepener | **25%** | DV01-neutral receive 5y / pay 30y; about **0.015-0.020% NAV per bp** of 5s30s move | Hedge long-end term premium and REIT terminal-value risk | Stop if 5s30s closes below **+65 bp** without project-finance widening |
| Options, cash, and carry reserve | **5%** | Use premium from modest overwrites to fund puts and liquidity | Keep convexity for gap moves | Stop overwriting if implied vol falls below realized vol |

The package should not be implemented as a large outright REIT short with a small credit overlay. That would turn the thesis into an equity beta trade. The risk center is the **credit-duration basis**: hyperscaler balance sheets should absorb slippage; single-site collateral and long-duration REIT cash flows should not.

## 5. Funding Across a Multi-Asset Portfolio

For a balanced or all-weather portfolio, the **8% gross NAV** base case should be funded as follows:

| Funding source | Portfolio move | Why |
|---|---:|---|
| Generic IG credit | Rotate **4% NAV** from broad IG into hyperscaler 2029-2034 belly | Broad IG OAS at **0.79%** is tight; the relative-value view is better than generic beta |
| Listed real estate / infrastructure | Reduce **2% NAV** of long-duration REIT and infrastructure beta | The short leg belongs against cap-rate-sensitive assets, not against cash |
| Long-duration Treasuries | Reduce **1% NAV** of 20-30y duration and replace with DV01-neutral 5s30s steepener | Keep rate diversification but remove unrewarded long-end exposure |
| Cash / T-bills / overlay collateral | Use **1% NAV** for margin, option premium, and drawdown reserve | The sleeve needs liquidity for gap moves and private-credit marks |

Do **not** fund the package by cutting inflation hedges or broad commodity exposure. BTM gas, grid bottlenecks, and long-end term premium are part of the risk channel; removing energy/inflation hedges would make the portfolio more fragile in the adverse scenario.

## 6. Scaling Rules

Start at **half-size** if the IG-project-finance basis has not yet widened by **>=60 bp** over 20 trading days. Move to the base **4.5% risk budget** only when two of the following three signals are present:

1. Data-center CMBS BBB-B or comparable private marks widen by **>=175 bp** over 20 trading days.
2. Data-center REIT cap rates expand by **>=75 bp** from the **5.0%-5.5%** base toward **5.75%-6.75%**.
3. 5s30s remains above **+85 bp** while broad IG OAS is below **1.10%**, showing long-end term premium rather than a broad credit accident.

Increase to the **6.0% active-risk variance cap** only if private hyperscale asset packages clear above **6.5%** cap rates or if a named 2024-2026 vintage AI campus loan needs amend-and-extend before stabilized occupancy.

Cut to **2.0%** or close the sleeve if the falsifier occurs: hyperscalers take explicit 15-20y take-or-pay lease risk on balance sheet, utilities deliver binding energization and cost-recovery schedules, and project-finance spreads tighten while hyperscaler IG widens. That would mean the duration risk has moved back to the balance sheets we are long.

## 7. Stress Matrix

| Scenario | Probability judgment | Sleeve P&L | Portfolio action |
|---|---:|---:|---|
| Base thesis: basis widens, cap rates expand, 5s30s steepens | Medium-high | **+120 to +180 bp NAV** over 12-24 months | Hold base size; harvest into spread widening |
| Slow grind: carry works, basis widens only modestly | Medium | **+25 to +60 bp NAV** | Keep half to base size; avoid adding illiquid shorts |
| Broad risk-off bull-flattener: 30y rallies, REIT shorts help only partly | Medium | **-60 to -100 bp NAV** | De-risk at **70 bp** loss; protect stop at **120 bp** |
| Thesis reversal: lease risk moves to hyperscaler balance sheets | Low-medium | **-100 to -140 bp NAV** | Close long IG belly first; keep only confirmed shorts |
| Liquidity squeeze: private-credit marks stale, public hedges gap | Low | **-80 to -125 bp NAV** | Use cash reserve; reduce gross, not just net exposure |

The largest practical risk is not that every leg loses at once; it is that the liquid hedges move before the private project-finance marks. That is why the sleeve needs a **5% cash/options reserve** and a hard **100 bp NAV** drawdown budget.

## 8. Risk-Parity Interpretation

In risk-parity language, this is a **basis sleeve with negative correlation to long-duration real estate and positive carry from IG credit**, but it is not a clean macro diversifier. It should sit in the portfolio as:

- A **credit relative-value allocation**, not an equity thematic allocation.
- A partial hedge against **long-end term premium** and **cap-rate expansion**, not a replacement for all Treasury duration.
- A controlled short to **fragile private infrastructure duration**, not a blanket short on AI or cloud demand.

The right sizing is therefore closer to a merger-arbitrage or structured-credit satellite than to a strategic asset class. A 4.5% active-risk variance budget is deliberately below a normal equity sector overweight but above a watch-list hedge.

## 9. Investment Conclusion

The final portfolio answer is: allocate **4.5% of active-risk variance**, tolerate **100 bp of portfolio NAV drawdown**, and implement the package with risk weights of **30% long hyperscaler IG belly, 25% short project-finance/CMBS credit, 15% short REIT duration, 25% 5s30s steepener, and 5% options/cash reserve**. Start at half-size until the IG-project-finance basis confirms with **>=60 bp** widening over 20 trading days; raise toward **6.0%** only after cap-rate and CMBS stress are visible; cut toward **2.0%** if the duration risk transfers back to hyperscaler balance sheets.

This supports the Card 07 trade design but disciplines it: the trade is investable, yet it belongs in the **satellite risk budget**, not the strategic core.

## 10. Sources

- Federal Reserve, FOMC statement dated 2026-04-29, target range **3.50%-3.75%**: https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm
- Federal Reserve, implementation note dated 2026-04-29, reserve balances **3.65%** effective 2026-04-30: https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a1.htm
- U.S. Department of the Treasury, Daily Treasury Rates, **2026-05-11** curve used for 5y/10y/30y anchors: https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve
- ALFRED / St. Louis Fed, ICE BofA U.S. Corporate Index OAS, **0.79%** on 2026-05-08, updated 2026-05-11: https://alfred.stlouisfed.org/series?seid=BAMLC0A0CM
- Morningstar DBRS, BX Commercial Mortgage Trust 2026-VLT9 presale, **USD 2.053bn** mortgage loan and **90.8%** DBRS LTV: https://f.tlcollect.com/fr2/726/81988/2026_CMBS_for_QTS.pdf
- Digital Realty Q1 2026 financial supplement and SEC filing context: https://www.sec.gov/Archives/edgar/data/1297996/000110465926047702/dlr-20260423xex99d1.htm

## 11. Handoff

Recommended next analyst: **none**.

Follow-up topic: **none**.

Follow-up question: **none**.

Handoff rationale: This is **Card 8/8** and completes the sequence by translating the prior macro, utility, credit, real-estate, and bond work into a portfolio risk budget. No reviewer trigger is needed because the report already sets position-level drawdown and stop rules, and there is no new unresolved compliance or counterparty-exposure event requiring escalation.

## Footer

Report date: **2026-05-12** (Asia/Singapore). Author: asset-allocator. Stance: synthesize / stop. Confidence: 0.72.
