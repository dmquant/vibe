---
source: ai-institute
resource_type: research-result
report_kind: whiteboard-report
analyst_level: "宏观与策略"
content_error: ""
---

# Card 07 — 2026-05-11 FX Stress Test of the Multi-Asset Rebalance Plan

Kind: **whiteboard-report**
Analyst: **FX Strategist**

## Links

- Report type: [[whiteboard-report]]
- Analyst: [[FX Strategist]]
- Analyst level: [[宏观与策略]]

# Card 07 — 2026-05-11 FX Stress Test of the Multi-Asset Rebalance Plan

Work date: 2026-05-11 (Asia/Singapore)  
Analyst: fx-strategist  
Stance: stress-test  
Upstream basis: Card 06 multi-asset plan from the Session Brief Snapshot; live workspace files for `session-brief.md` and card-06 were missing, so the upstream conclusion is reconstructed from the prompt context.

## Core Judgment

As of 2026-05-11, CNY volatility does not invalidate the Card 06 idea of using rates bonds plus gold to hedge a "macro blood-loss" shock, but it changes the hedge hierarchy. Gold remains the more reliable convex hedge for an RMB-based portfolio because CNY depreciation mechanically lifts the RMB value of USD-priced gold. Long-duration CGBs are the fragile leg: they hedge a domestic growth shock, but they can lose hedging power if the shock is primarily cross-border outflow, CNH weakness, and liquidity defense.

The right adjustment is not to abandon rates bonds or gold. It is to make the rates sleeve conditional on FX stability and add an explicit CNY hedge. In an upgraded policy-support scenario, hold gold unhedged in FX terms, keep part of the CGB allocation in shorter duration, and add USD/CNH calls or forwards sized at 5-8% of portfolio notional.

## Market Anchor on 2026-05-11

| Variable | Latest usable observation | FX-stress implication |
|---|---:|---|
| USD/CNY central parity | 6.8502 on 2026-05-08 09:15, latest CFETS live JSON observed on the work date | Fixing remains managed; spot stress should be judged against both fixing and CNH gap. |
| USD/CNH spot | 6.8081 as of 2026-05-07 21:05 UTC | Offshore CNY was not yet in disorderly depreciation at the latest market print. |
| USD/CNH 1M forward mid | 6.79380 versus 6.8081 spot | Forward points were negative; partial USD hedges were not carry-prohibitive. |
| CFETS RMB Index | 100.17 on 2026-04-30, down 0.69% from end-March | Basket pressure existed but was not yet a broad RMB break. |
| SAFE FX reserves | USD 3.4105tn at end-April 2026, up USD 68.4bn m/m | Reserve buffer argues against treating baseline CNY pressure as a devaluation spiral. |
| China 10Y government bond yield | 1.760% on 2026-05-07 | CGB yields are already low, so duration upside is real but asymmetric. |
| U.S. 10Y Treasury yield | 4.41% on 2026-05-07 | The U.S.-China 10Y gap is about 265 bp, keeping carry pressure on CNY. |
| Gold futures | USD 4,716.76/oz on 2026-05-07 | At USD/CNH 6.8081 this implies roughly RMB 1,033/g before local premium and fees. |

The important signal is the mix: reserves and the CFETS basket say "managed pressure", while the U.S.-China yield gap says "do not ignore capital-flow pressure." That is exactly the environment in which a multi-asset hedge can work, but only if the FX leg is explicit.

## Stress-Test Mechanics

For an RMB-based investor, gold and rates bonds react differently to a weaker CNY.

Gold has positive FX translation. A 3% CNY depreciation lifts the RMB value of a USD gold position by roughly 3% if XAU/USD is unchanged. Using the 2026-05-07 gold futures price of USD 4,716.76/oz and USD/CNH 6.8081, the implied RMB gold value is:

`4,716.76 * 6.8081 / 31.1035 = about RMB 1,033/g`

If XAU/USD rises 6% during macro stress and CNY weakens 3%, RMB gold gains about 9.2%. If XAU/USD falls 5% because U.S. real yields jump and CNY weakens 3%, RMB gold still loses about 2.2%. Therefore gold is robust against CNY depreciation, but not against a dollar-real-yield shock that pushes gold down faster than CNY weakens.

Long CGBs do not get that translation benefit. A 10Y CGB with duration near 8.5 gains about 1.7% when yield falls 20 bp, but loses about 2.1% when yield rises 25 bp. In a normal domestic slowdown, CGB yields can rally and hedge A-share drawdown. In a cross-border outflow shock, CNY weakness can force tighter liquidity, heavier FX smoothing, or a term-premium repricing; then CGBs can sell off at the same time as equities.

## Scenario Results

| Scenario | CNY path | CGB hedge | Gold hedge | Portfolio conclusion |
|---|---|---|---|---|
| Managed pressure | USD/CNH 6.80-6.95; CFETS RMB Index stays above 99 | 10Y yield 1.65-1.85%; duration still works | RMB gold +2-5% if XAU is stable to higher | Card 06 hedge survives; keep rates plus gold. |
| Macro blood-loss with outflows | USD/CNH 7.05-7.20; CNH-CNY gap above 600 pips for several sessions | 10Y yield +20-35 bp; long duration loses 1.7-3.0% | RMB gold +5-10% if XAU is risk-off bid | Gold carries the hedge; cut duration beta and add explicit USD hedge. |
| Disorderly liquidation | USD/CNH above 7.30; CFETS basket down more than 3% m/m; reserves fall materially after valuation effects | 10Y yield +40-60 bp; CGB hedge fails temporarily | Gold helps only if XAU/USD is not hit by real-rate liquidation | Rates and gold alone are insufficient; shift to USD cash, USD/CNH calls, short CGBs, and policy-beta equities only after FX stabilizes. |

The stress-test answer is therefore conditional: CNY volatility will not erode gold's RMB hedge unless the shock is a global real-rate squeeze; it can erode the rate-bond hedge quickly if the macro shock becomes a balance-of-payments confidence shock.

## Allocation Adjustment to Card 06

Keep the Card 06 direction, but change the trigger rules:

| Sleeve | Baseline / managed pressure | Macro blood-loss with FX pressure | Disorderly liquidation |
|---|---:|---:|---:|
| Long CGB / policy-bank duration | 30-35% | 20-25%; reduce 7-10Y exposure first | 10-15%; mostly 1-3Y liquidity instruments |
| Gold | 12-15% | 15-18%; keep USD/RMB translation unhedged | 18-22%, but avoid leverage |
| Explicit CNY hedge | 2-3% notional | 5-8% notional via USD/CNH calls, call spreads, or forwards | 8-12% notional, favor option convexity |
| Credit bonds | High-grade only | Reduce lower-rated credit beta | Liquidity first; avoid spread duration |
| A-share dual-defense budget | Maintain Card 06 policy logic | Upgrade only if two macro blood-loss triggers persist | Wait for FX stabilization before expanding equity beta |

The rates sleeve should be governed by FX thresholds, not only by growth thresholds. Keep long duration only while USD/CNH stays below 7.05, the CNH-CNY gap stays below 600 pips, and the 10Y CGB yield does not rise more than 15 bp over five sessions. If two of those three fail, cut duration before adding more equity support.

## Practical FX Triggers

The FX-strategy trigger set for the next committee discussion should be:

| Trigger | Action |
|---|---|
| USD/CNH closes above 7.05 for two sessions | Add 2-3 percentage points of USD/CNH option hedge and reduce long CGB beta. |
| CNH-CNY gap exceeds 600 pips for three sessions | Treat the shock as offshore funding stress, not just spot volatility. |
| CFETS RMB Index below 98.5 or down more than 1.5% m/m | Do not expand the A-share support package without FX hedge. |
| 1M USD/CNH implied volatility above 6.5% | Shift from forwards to option spreads to cap tail loss. |
| SAFE reserves fall more than USD 50bn m/m after valuation adjustment | Move from "managed pressure" to "macro blood-loss with FX pressure." |

## Implication for the Original A-Share Question

FX stress strengthens the case for targeted support rather than simultaneous blanket support. If CNY pressure is mild, the Card 06 rates-plus-gold hedge gives policymakers room to keep 科创50 first, 创业板/LFP conditional, and red-chip / SOE dividend exposure as ballast. If CNY pressure becomes outflow-driven, the policy package cannot rely on lower domestic rates alone; long CGBs may stop hedging exactly when equity support is needed. In that case, the ETF defense should remain conditional and the incremental hedge budget should go to gold and CNY options before broadening the equity rescue.

## Handoff

Recommended next analyst: `qa-manager`  
Recommended stance: `synthesize`  
Rationale: `qa-manager` [reviewer, trigger d] is appropriate because cards 01-07 now form a multi-step thesis with bilingual deliverables, scenario weights, and cross-asset triggers. The final card should audit numeric consistency, handoff completeness, and whether the conclusion still answers the root question before publication.

## Sources

1. CFETS, "CNY Central Parity Rate"; live JSON observed on 2026-05-11 showed latest `lastDate` 2026-05-08 09:15 and USD/CNY 6.8502: https://www.chinamoney.com.cn/english/bmkcpr/ and https://www.chinamoney.com.cn/r/cms/www/chinamoney/data/fx/ccpr.json
2. CFETS, "CFETS RMB Index by the end of April 2026", published 2026-05-06, with CFETS RMB Index 100.17, BIS basket 107.79, SDR basket 95.24: https://www.chinamoney.com.cn/english/bmkidxrud/20260506/3333002.html
3. SAFE / Xinhua, China FX reserves at USD 3.4105tn at end-April 2026, up USD 68.4bn: https://www.safe.gov.cn/big5/big5/www.safe.gov.cn/safe/2026/0507/27431.html and https://english.news.cn/20260507/802bb4e3b52545cca1e42f46dae7654a/c.html
4. FXEmpire, USD/CNH spot and forward table, 2026-05-07 21:05 UTC: https://www.fxempire.com/currencies/usd-cnh/forward-rates
5. Investing.com, China 10-Year Bond Yield historical data, latest observed 1.760% on 2026-05-07: https://www.investing.com/rates-bonds/china-10-year-bond-yield-historical-data
6. Federal Reserve, FOMC statement 2026-04-29 and H.15 release 2026-05-08: https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm and https://www.federalreserve.gov/releases/h15/default.htm
7. Investing.com, Gold Futures historical data, 2026-05-07 settlement around USD 4,716.76/oz: https://www.investing.com/commodities/gold-historical-data

Footer: Card 07 completed on 2026-05-11 (Asia/Singapore).
