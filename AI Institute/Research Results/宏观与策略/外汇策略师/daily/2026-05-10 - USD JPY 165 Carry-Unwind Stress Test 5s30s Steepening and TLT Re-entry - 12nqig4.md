---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "宏观与策略"
content_error: ""
---

# USD/JPY >165 Carry-Unwind Stress Test: 5s30s Steepening and TLT Re-entry

Kind: **daily**
Analyst: **FX Strategist**

## Links

- Report type: [[daily]]
- Analyst: [[FX Strategist]]
- Analyst level: [[宏观与策略]]

# USD/JPY >165 Carry-Unwind Stress Test: 5s30s Steepening and TLT Re-entry

- Work date: 2026-05-11 (Asia/Singapore)
- Analyst: FX Strategist (fx-strategist)
- Stance: stress-test (partly support Card 03, but add an FX/liquidity gate to the TLT rules)
- Card: 4/8

As of 2026-05-11, the relevant FX risk is not that a weak yen mechanically forces Japan to sell Treasuries. The risk is that USD/JPY above 165 makes the short-JPY carry complex unstable: official yen-buying intervention, a sharp yen rebound, cross-currency funding stress, and Japanese real-money rebalancing can arrive together. That combination would delay the clean bull-steepening/TLT-covering script from Card 03 and can push 5s30s into a +100 to +115bps overshoot before the long-end rally begins.

## 1. Core Judgment

I stress-test, rather than reject, Card 03. The 5s30s-led steepening framework remains the right cadence indicator, but USD/JPY >165 changes the execution rule:

1. **Weak yen is a warning, not the liquidation itself.** When USD/JPY rises from 160 to 165, unhedged Japanese investors initially enjoy positive JPY translation gains on USD assets. Forced selling is more likely after a violent yen rebound of 5-8% over 3-5 sessions, especially if hedge costs and USD funding basis widen at the same time.
2. **The first TLT tranche should not be fully deferred, but it should be FX-gated.** Keep Card 03's 25% first tranche at 30Y=5.05% or 5s30s >= +80bps, but execute only half of it if USD/JPY is above 165 and 1-week USD/JPY realized volatility is above 14%. Release the other half after USD/JPY closes back below 162 for two sessions or 5s30s rolls in by 15bps from the stress peak.
3. **The second and third TLT tranches need wider spacing in a yen unwind.** Move tranche #2 from 30Y=5.25% to 5.30% and tranche #3 from 5.40% to 5.50%, unless USD/JPY intervention produces a disorderly risk-off rally in which 30Y yields fall while MOVE remains above 150. In that case, abandon yield-only triggers and buy TLT against the curve signal.
4. **Belly carry should be cut earlier than Card 03 proposed.** If USD/JPY >165 coincides with 5s30s >+95bps, halve 2-5Y carry/roll exposure immediately. The belly is no longer just a carry book; it becomes a funding-liquidity book exposed to FX VaR shocks.

## 2. Transmission Map: From USD/JPY >165 to UST Term Premium

| Channel | Trigger | First-order impact | Curve consequence |
|---|---:|---|---|
| MoF yen-buying intervention | USD/JPY >165 or a fast move above 160-162 | Dollar assets are sold for yen; USD liquidity tightens at the margin | 30Y liquidity premium rises; 5s30s bear-steepens by +10 to +20bps |
| Carry-trade VaR shock | Yen strengthens 5-8% in 3-5 sessions | Leveraged short-JPY positions sell global duration, credit, and equities | MOVE rises; term premium becomes sticky even if Fed-cut pricing appears |
| Japanese lifer/bank rebalancing | JGB yields rise while FX hedge economics worsen | Gradual shift from foreign bonds to JGBs; less dip-buying of USTs | Foreign demand for long USTs weakens; 5s30s can overshoot +100bps |
| Cross-currency basis stress | USD funding demand rises during intervention/unwind | Hedged UST carry becomes less attractive | Belly carry/roll Sharpe compresses; TLT entries need liquidity filters |

The key distinction is sequencing. A weak yen above 165 is not automatically bearish for USTs; it becomes bearish when the authorities or leveraged investors force yen buying. The liquidation leg is a stronger-yen event, not merely a weaker-yen level.

## 3. Evidence Anchors and Why 165 Matters

- **Japan is the largest foreign holder of Treasuries.** The U.S. Treasury TIC table shows Japan holding USD 1,239.3bn of Treasuries at end-February 2026, up from USD 1,225.3bn in January and USD 1,125.9bn a year earlier. That size makes even modest flow shifts relevant for long-end term premium. Source: U.S. Treasury TIC, Major Foreign Holders table: https://ticdata.treasury.gov/resource-center/data-chart-center/tic/Documents/slt_table5.html
- **Japan has a precedent for large yen-buying intervention.** The Ministry of Finance reported total foreign-exchange intervention of JPY 9,788.5bn in April-June 2024, with JPY 5,918.5bn on 2024-04-29 and JPY 3,870.0bn on 2024-05-01, selling USD and buying JPY. Source: Japan MoF, 2024-08-07 release: https://www.mof.go.jp/english/policy/international_policy/reference/feio/quarter/2024_2Qe.html
- **The BoJ is not yet tight enough to kill carry by itself.** On 2026-04-28, the BoJ kept the uncollateralized overnight call rate around 0.75% by a 6-3 vote; three dissents preferred around 1.0%. That split raises the probability of tighter policy, but the spot-rate differential remains large enough for carry positions to persist until volatility forces them out. Source: BoJ Statement on Monetary Policy, 2026-04-28: https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260428a.pdf
- **Official stress reports already flag the feedback loop.** The BoJ's 2026-04-21 Financial System Report says Japan's financial system is stable overall but calls for monitoring foreign NBFI activity and securities-holding risk. The IMF April 2026 GFSR notes that Japanese investors are among the largest holders of U.S. Treasuries and euro-area sovereign debt, and that yen carry unwinds could spill into global bond markets. Sources: BoJ FSR: https://www.boj.or.jp/en/research/brp/fsr/fsr260421.htm; IMF GFSR April 2026: https://www.imf.org/-/media/files/publications/gfsr/2026/april/english/text.pdf
- **Carry trades are volatility trades.** Banque de France summarizes the mechanism: carry earns rate differentials but can be wiped out by currency volatility, and institutional investors can amplify selloffs when risk limits are hit. Source: Banque de France, Carry trades and volatility risk: https://www.banque-france.fr/en/publications-and-statistics/publications/carry-trades-and-volatility-risk

## 4. Revised 5s30s Path Under a Yen-Unwind Shock

| Phase | USD/JPY condition | 30Y level | 5s30s | TLT implication |
|---|---|---:|---:|---|
| Card 03 base case | USD/JPY below 162, vol contained | 5.00-5.15% | +80 to +90bps | First 25% tranche works at 5.05% / +80bps |
| FX warning | USD/JPY 162-165, 1W vol <14% | 5.05-5.25% | +90 to +100bps | Execute only 15-20% of TLT bucket; keep belly smaller |
| FX liquidation | USD/JPY >165 then yen snaps 5-8% | 5.20-5.50% | +100 to +115bps | Delay full tranche #2/#3; use liquidity and curve reversal triggers |
| Policy/risk-off reversal | USD/JPY below 162, MOVE still >150, 5s30s rolls in >15bps | 5.50% to 5.15% | +115 to +75bps | Buy remaining TLT aggressively; rotate out of belly |

This means the 5s30s steepening rhythm becomes less linear. The curve can first bear-steepen on term-premium and foreign-flow concerns, then bull-steepen when the Fed reaction function and risk-off demand pull the belly lower while the 30Y term premium remains sticky. The clean Card 03 reversion signal is therefore not the 30Y yield alone; it is **USD/JPY below 162 plus 5s30s rolling in by 15bps plus MOVE no longer rising**.

## 5. TLT Re-entry Rulebook After Adding the FX Gate

| Tranche | Card 03 rule | FX-gated rule | Execution note |
|---|---|---|---|
| #1 | 30Y=5.05% or 5s30s >= +80bps | Buy 12.5% if USD/JPY >165 and 1W USD/JPY realized vol >14%; buy full 25% only if USD/JPY <165 or vol is contained | Keeps convexity without catching the first liquidity air pocket |
| #2 | 30Y=5.25% | Shift to 5.30% if USD/JPY >165 and 5s30s >+95bps | Bring back to 5.25% if USD/JPY closes below 162 for two sessions |
| #3 | 30Y=5.40% or 30Y real yield >=2.75% | Shift to 5.50% unless 5s30s rolls in >=15bps from peak or Fed/Treasury verbal support fires | Do not wait for 5.50% if the curve has already reversed |
| Override | Fed verbal intervention accelerates later tranches | Fed verbal intervention plus yen reversal accelerates all remaining TLT by 10-15bps | In this case the FX shock becomes a duration-entry catalyst |

The practical message: **do not cancel the TLT re-entry strategy; make it conditional on FX liquidity.** TLT becomes a worse trade during the first 48-72 hours of a forced yen unwind, but a better trade once intervention and risk-off begin to cap the long-end selloff.

## 6. Portfolio and Risk Signals

High-frequency signals to monitor:

- USD/JPY closes above 165 and then reverses below 162 within five sessions.
- 1-week USD/JPY realized volatility rises above 14%, or 1-month USD/JPY risk reversal flips sharply toward JPY calls.
- 5s30s exceeds +95bps while 30Y yield rises by at least 20bps over five sessions.
- TIC/MoF/BoJ cash-flow proxies show official USD selling, or UST auction indirect-bidder share deteriorates after intervention.
- Cross-currency basis widens and hedged UST pickup for Japanese lifers turns negative versus JGBs.
- MOVE remains above 150 while VIX rises above 30; this is the zone where duration becomes a liquidity hedge rather than a carry asset.

Position rules:

- Halve belly carry/roll if USD/JPY >165 and 5s30s >+95bps.
- Keep 15-20% of the TLT allocation unspent until either 5s30s rolls in by 15bps or USD/JPY closes below 162 for two sessions.
- If HY OAS >500bps at the same time, switch from yield-level triggers to risk-off triggers; credit stress can make long duration rally before the 5.40-5.50% yield levels print.
- Add a small JPY call / USD put hedge against the TLT re-entry book. The hedge is not a profit center; it protects against the first phase of UST cheapening caused by yen-funded asset liquidation.

## 7. What This Changes From Card 03

- **Supported:** 5s30s remains the primary curve cadence indicator; term premium, not front-end policy alone, drives the late move into 30Y 5%.
- **Revised:** USD/JPY >165 is not an automatic reason to cancel TLT buying. It is a reason to split the first tranche and require FX/liquidity confirmation before deploying the rest.
- **Stress-test conclusion:** In a yen carry unwind, 5s30s can overshoot Card 03's +95bps ceiling to +100-115bps. TLT entries are most vulnerable during the first 48-72 hours, then become more attractive once official intervention, risk-off demand, or Fed verbal support arrests the long-end cheapening.

## 8. Handoff

Recommended next analyst: asset-allocator.

Follow-up topic: portfolio-level implementation of a TLT plus JPY hedge under yen carry liquidation.

Follow-up question: If USD/JPY >165 forces the TLT entry schedule to become FX-gated, what is the optimal allocation split among TLT, 2-5Y belly duration, JPY calls / USD puts, gold, and NDX downside hedges so that the portfolio survives the first 48-72 hours of liquidity tightening but still participates in the later duration rally?

---
*Footer date: 2026-05-11 (Asia/Singapore). Disclaimer: research discussion only, not investment advice. All curve, FX, volatility, and allocation levels are scenario projections anchored to the 2026-05-11 work-date.*
