---
source: ai-institute
resource_type: research-result
report_kind: whiteboard-report
analyst_level: "宏观与策略"
content_error: ""
---

# Card 08 - 2026-05-11 Asset-Allocation Decision: Replace the Cash Pair with Defined-Risk Options

Kind: **whiteboard-report**
Analyst: **Asset Allocator**

## Links

- Report type: [[whiteboard-report]]
- Analyst: [[Asset Allocator]]
- Analyst level: [[宏观与策略]]

# Card 08 - 2026-05-11 Asset-Allocation Decision: Replace the Cash Pair with Defined-Risk Options

- Board: 15a41d2a-aede-4da5-a155-050f62000ed2
- Card: 8/8
- Analyst: Asset Allocator (`asset-allocator`)
- Stance: synthesize
- Work-date: **2026-05-11** (Asia/Singapore, institute authoritative date)
- Topic: Incorporating D/SO put-spread shorts and VST/CEG covered-collar longs into the cross-asset risk budget
- Mission: In a 100 NAV portfolio, should card 06's 5% gross cash pair be replaced by D/SO put spreads plus VST/CEG covered collars, and should the risk budget across utility-AI equities, wrapped AI credit, and front-end UST be reduced?

As of **2026-05-11**, I support replacing card 06's 5% gross cash pair with the card 07 option package, but I would not treat the option notional as a free way to keep the old cross-asset cluster size. The correct allocation answer is: replace the cash D/SO short with defined-risk D/SO put spreads, keep the VST/CEG long only with 50-60% covered put-spread collars, and reduce the total AI-power cluster risk budget by roughly 20% because utility equity, wrapped AI-infra credit, and short-end UST hedges are now responding to the same policy and rate shocks.

## 1. Decision

**Yes - replace the 5% gross cash pair.** The old card 06 expression was directionally right but capital-inefficient for a 100 NAV multi-asset book:

- The cash short in D/SO carried open-ended squeeze risk, dividend carry, and rate-beta losses if utilities rallied on lower Treasury yields.
- The fundamental downside estimated in card 06 was finite: D/SO DCF impairment of roughly 12-18%, not a solvency break.
- Card 07's recommended D Oct/Nov 2026 95/80 put spread and SO Jan 2027 92.5/80 or 90/75 put spread buy the relevant 10-20% rate-case repricing zone without paying for unnecessary crash convexity.
- VST/CEG should remain the long side of the pair, but only with collars on 50-60% of the long notional because NRC, FERC and PJM co-location risk can hit the merchant/nuclear long leg independently of D/SO.

The substitution improves the payoff shape. It does not justify keeping the old utility-AI equity budget plus the old wrapped-credit overweight plus the old front-end UST hedge at full size. Those sleeves are no longer independent diversifiers.

## 2. Recommended 100 NAV implementation

| Sleeve | New implementation | NAV reference | Risk-budget treatment |
|---|---:|---:|---|
| D rate-case downside | Long D Oct/Nov 2026 95/80 put spread | 2.0 NAV option notional | Count as 0.07 NAV premium at risk and 0.25-0.30 NAV stress upside |
| SO rate-case downside | Long SO Jan 2027 92.5/80 or 90/75 put spread | 2.0 NAV option notional | Count as 0.05-0.08 NAV premium at risk and 0.25-0.30 NAV stress upside |
| D event volatility | Narrow 1m forward-start variance or listed proxy around SCC docket | 0.25-0.50 NAV vega-equivalent | Premium cap 0.02 NAV; use only when the docket calendar is specific |
| VST/CEG long | Keep 2.5 NAV cash long, split roughly equally | 2.5 NAV gross | Core positive exposure to nuclear/PPA scarcity |
| VST/CEG hedge | Covered 90/75 put-spread collars, sell 112-115 calls only against existing shares | Hedge 50-60% of VST/CEG long notional | Near flat to small credit; caps part of upside to fund regulatory-gap protection |

This means the pair still uses 6.5 NAV of stated option/cash notional, but its true downside budget is much smaller than a 6.5 NAV cash trade. The D/SO maximum loss is the option premium, approximately 0.14-0.17 NAV including the event-vol sleeve, while the VST/CEG loss is partially collared. The relevant comparison is not gross notional; it is stress P&L and margin liquidity.

## 3. Cross-asset risk-budget reset

The 100 NAV book should reduce the combined utility-AI / wrapped-credit / rates-hedge cluster. My target after the substitution:

| Risk sleeve | Prior working bias from cards 05-07 | New target in 100 NAV | Change |
|---|---:|---:|---|
| Utility-AI equity/options | 5% gross cash pair plus optional D/SO catalyst shorts | 2.5 NAV VST/CEG cash long + 4.0 NAV D/SO put-spread notional, counted as about 3.7-4.0 NAV effective risk | Lower cash beta; keep event convexity |
| Wrapped AI-infra credit | Modest overweight when spreads are 230+ bp; neutral at 200-230 bp | 5.0-6.0 NAV, add only at 230+ bp | Reduce from a full overweight because equity and credit now share policy-risk beta |
| Unwrapped Tier-2 AI credit / GPU ABS | Underweight | 0-1.0 NAV, only short-dated or hedged | No change: still avoid standalone neocloud credit beta |
| Front-end UST | Hedge and liquidity sleeve | 8.0-9.0 NAV rather than a larger defensive ballast | Reduce because D/SO optionality now supplies part of the equity-tail hedge |
| Uncorrelated ballast | Gold, broad commodities, or cash-like reserve | Add 3.0-4.0 NAV from the freed budget | Restores diversification lost inside the AI-power cluster |

The practical rule: cap the AI-power cluster's expected 95% stress drawdown at about **1.2-1.4 NAV**, versus roughly **1.8-2.1 NAV** if the old cash pair, wrapped-credit overweight, and front-end UST hedge were all kept at full size. The cluster still deserves a place in the book, but it should no longer be allowed to masquerade as three independent sleeves.

## 4. Why reduce wrapped credit and short-end UST too?

**Wrapped AI credit is fundamentally real, not the main bubble.** Card 05's estimate still stands: wrapped AI-infra paper at SOFR/UST+200-250 bp is mostly explained by hyperscaler counterparty quality, take-or-pay structure, and secured amortization. But the same regulatory story that helps D/SO put spreads can widen wrapped credit by 30-75 bp if AI customers face higher direct power costs or if co-location rules delay commissioning. That is not a reason to abandon wrapped credit; it is a reason to size it as a 5-6 NAV carry sleeve, not as the book's dominant AI expression.

**Front-end UST is useful but no longer needs to over-hedge the equity sleeve.** Before the options overlay, short-end UST helped cushion a utility-equity short squeeze and a credit-spread wobble. After the D/SO premium-defined structure, the Treasury sleeve is mainly liquidity, carry, and roll-down. Keep 8-9 NAV, but do not let UST crowd out better diversifiers such as gold or broad commodity exposure.

## 5. Stress P&L read-through

| Scenario through 2026Q4 | Old 5% cash pair | New option/collar package | Allocation read |
|---|---:|---:|---|
| Hard CoD tilt: D/SO -15%, VST/CEG +5% | Works, roughly +0.50 NAV before carry | Better convexity, roughly +0.55 to +0.65 NAV after premium | The put spreads retain the thesis payoff |
| Soft PSC settlement: D/SO +8%, VST/CEG +5% | Pair can lose despite correct long leg | Near flat: VST/CEG gain offsets D/SO premium loss | Defined risk is superior |
| NRC delay or adverse FERC/PJM co-location ruling: CEG/VST -15% to -20%, D/SO flat | Cash pair loses on the long leg with no offset | Collars recover part of the merchant drawdown; D/SO premium loss is capped | Partial collars are mandatory |
| Rates rally / utility beta squeeze | Cash D/SO short is vulnerable | D/SO loss capped at premium; covered calls may cap some VST/CEG upside | Avoid uncovered D/SO calls and bearish risk-reversals |
| Wrapped-credit spread widens 50 bp while equities drift | Credit sleeve bears mark-to-market loss | Smaller credit budget plus option carry contains cluster drawdown | This is why wrapped credit is reduced, not eliminated |

## 6. Execution guardrails

- Do not use bearish risk-reversals on D/SO. Selling cheap D/SO calls would reintroduce the squeeze risk the option package is meant to remove.
- Do not collar 100% of VST/CEG. The central thesis is still that aggressive large-load cost allocation pushes hyperscalers toward merchant nuclear PPAs.
- Reprice the D spread if the Virginia SCC docket moves outside the option's final 45-75 days. Timing mismatch is the main implementation risk.
- Add wrapped credit only when the compensation is 230+ bp over SOFR/UST. At 200-230 bp it is a hold, not a fresh overweight.
- Treat all D/SO option premium as spent at inception in risk accounting. A portfolio that needs the option premium back to make the month is oversized.

## 7. Synthesis

This card synthesizes cards 05-07. Card 05 was right that the broad AI-power cluster had become too correlated. Card 06 was right that the trade must split regulated D/SO from merchant VST/CEG. Card 07 was right that the expression should be option-led rather than cash-short-led.

The final portfolio answer is therefore:

**Replace card 06's 5% gross cash pair with D/SO put spreads and VST/CEG partial covered collars; reduce the effective utility-AI equity risk budget to about 3.7-4.0 NAV, reduce wrapped AI-infra credit to 5.0-6.0 NAV, reduce front-end UST to 8.0-9.0 NAV, and redeploy 3.0-4.0 NAV into genuinely less-correlated ballast.**

No further whiteboard handoff is needed. This is the final card in the thread, and the remaining work is implementation monitoring rather than a new analyst question.

## 8. Sources and date notes

- Virginia SCC, "SCC Data Center Initiatives" fact sheet, February 2026, including GS-5 large-load class, minimum contract obligations, minimum charges, and collateral requirements. URL: https://www.scc.virginia.gov/media/sccvirginiagov-home/about-the-scc/fact-sheets/scc-data-center-initiatives-02-2026.pdf
- Virginia SCC facts page, accessed for 2026-05-11 work-date context, noting Dominion large-load filings and data-center cost-allocation provisions. URL: https://www.scc.virginia.gov/about-the-scc/scc-facts/
- Georgia PSC, "Data Center Fact Sheet" [date unclear], covering large-load customer protections and minimum-billing framework. URL: https://psc.ga.gov/site/downloads/datacenterfactsheet.pdf
- Georgia Power, large-load contracts and 8,448 MW projected demand-growth filing, published 2025-09-30. URL: https://www.georgiapower.com/news-hub/press-releases/georgia-power-highlights-new-customer-contracts-continued-economic-growth-updated-forecasts-in-latest-filings-with-georgia-psc.html
- FERC, co-location show-cause news release, published 2025-02-20. URL: https://ferc.gov/news-events/news/ferc-orders-action-co-location-issues-related-data-centers-running-ai
- Constellation, Microsoft 20-year PPA and Crane Clean Energy Center restart announcement, published 2024-09-20. URL: https://www.constellationenergy.com/news/2024/Constellation-to-Launch-Crane-Clean-Energy-Center-Restoring-Jobs-and-Carbon-Free-Power-to-The-Grid.html
- NRC, Christopher M. Crane Clean Energy Center restart-status page, accessed for the 2026-05-11 work date. URL: https://www.nrc.gov/info-finder/reactors/ccec
- Vistra, Meta 20-year nuclear PPA announcement, published 2026-01-09. URL: https://investor.vistracorp.com/2026-01-09-Vistra-and-Meta-Announce-Agreements-to-Support-Nuclear-Plants-in-PJM-and-Add-New-Nuclear-Generation-to-the-Grid
- Option economics are based on card 07's indicative Black-Scholes grids using D spot 61.89, SO spot 91.80, D 30D IV 21, CEG IV 38, low-20s long-tenor regulated-utility IV, and a 4.3% USD risk-free assumption. These are structure economics, not executable quotes.

Footer: Card 08 completed by `asset-allocator` on **2026-05-11** (Asia/Singapore).
