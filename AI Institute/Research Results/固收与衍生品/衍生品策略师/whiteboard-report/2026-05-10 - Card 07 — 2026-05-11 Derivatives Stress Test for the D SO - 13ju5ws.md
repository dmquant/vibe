---
source: ai-institute
resource_type: research-result
report_kind: whiteboard-report
analyst_level: "固收与衍生品"
content_error: ""
---

# Card 07 — 2026-05-11 Derivatives Stress Test for the D/SO Rate-Case Short

Kind: **whiteboard-report**
Analyst: **Derivatives Strategist**

## Links

- Report type: [[whiteboard-report]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

# Card 07 — 2026-05-11 Derivatives Stress Test for the D/SO Rate-Case Short

- Work date: 2026-05-11 (Asia/Singapore — institute's authoritative work date)
- Author: derivatives-strategist
- Stance: stress-test
- Topic: Expressing the D/SO rate-case catalyst short with options and variance, while hedging VST/CEG NRC/FERC tail risk

## 0. One-line conclusion
As of 2026-05-11, I support card 06's split between regulated D/SO shorts and merchant VST/CEG longs, but I would not implement the D/SO leg as a cash short or as a naked bearish risk-reversal. The best structure is a 6–9 month **put-spread package** on D and SO, with a small event-vol/variance sleeve around the docket windows, plus **covered put-spread collars** on the VST/CEG long leg. This keeps the D/SO rate-case downside convex, avoids selling cheap regulated-utility upside volatility, and hedges the expensive CEG/VST nuclear-regulatory tail without buying high-IV outright puts.

## 1. What changed from card 06
Card 06 made the correct equity call: the utility-AI trade is not one basket. D/SO are regulated rate-base stories exposed to state cost-allocation repricing; VST/CEG are scarce nuclear/PPA stories that may benefit when hyperscalers bypass retail tariffs. The derivatives layer changes the expression:

| Question | Cash equity answer | Derivatives answer |
|---|---:|---:|
| D/SO downside target | -12% to -18% DCF impairment | Own the 95/80 or 92.5/80 put spread; do not pay for tail below -20% |
| Catalyst timing | D 2026Q3, SO 2026Q4 | D Oct/Nov 2026 expiry; SO Jan 2027 expiry |
| D vol surface | D 30D IV 21, near one-year low | Buy optionality; do not finance it by selling cheap calls |
| CEG/VST tail | NRC/FERC adverse rulings can gap the long leg | Hedge with put-spread collars because CEG IV 38 is already expensive |
| Portfolio risk | Direct short has margin and squeeze risk | Premium-at-risk is known; call-sale risk is only covered against long VST/CEG |

## 2. Structure comparison

### 2.1 Outright OTM puts: clean but wasteful
Outright 6–9 month D/SO OTM puts are tempting because D IV is depressed. They are still less efficient than put spreads because the fundamental downside case from card 06 is finite: EPS -3.5% to -7%, DCF -12% to -18%, not a balance-sheet break. Paying for protection below roughly -20% consumes premium without matching the thesis.

Indicative Black-Scholes grid using 2026-05-11 spot references of D 61.89 and SO 91.80, D IV 22–23, SO IV 22, USD risk-free 4.3%, and ordinary dividend yields:

| Underlying | Tenor | Outright 95% put | 95/80 put spread | 90/75 put spread | Read-through |
|---|---:|---:|---:|---:|---|
| D | 6m | ~3.8% of spot | ~3.3% of spot, max ~15% | ~2.0% of spot, max ~15% | 95/80 is the better catalyst strike; 90/75 is cheaper but may miss a -10% repricing |
| D | 9m | ~5.3% of spot | ~4.2% of spot, max ~15% | ~2.9% of spot, max ~15% | Use only if docket timing slips beyond Q3 |
| SO | 8m | ~4.4% of spot | ~3.7% of spot, max ~15% | ~2.4% of spot, max ~15% | 92.5/80 or 90/75 works better than a full put because the Q4 catalyst is slower |

### 2.2 Put spreads: best fit
The put-spread is the most economical expression because it buys the underpriced D/SO event move while selling the deep downside that the thesis does not need.

Recommended D leg:
- Buy D Oct/Nov 2026 95/80 put spread.
- Use 95/80 if the rate-case order or testimony calendar is inside the option's final 45–75 days.
- Roll to 9m only if the Virginia SCC schedule slips; do not own long-dated vega passively after the key filing.

Recommended SO leg:
- Buy SO Jan 2027 92.5/80 or 90/75 put spread.
- Prefer 92.5/80 if implied vol remains in the low 20s; use 90/75 only if the package must fit a strict premium budget.
- The SO catalyst is later and politically slower, so the spread should own more time but slightly less near-the-money delta than D.

Portfolio sizing against card 06:
- Replace each 1.5% gross single-name catalyst cash short with roughly 2.0% notional of put spreads.
- Expected premium cost is about 5–8 bp of NAV per name for D/SO at the indicative vols above.
- Maximum payout is about 25–30 bp of NAV per name if the stock finishes through the lower strike.
- This gives a 3.5–5.0x premium-to-max-payout profile while avoiding borrow, dividend carry, and squeeze losses.

### 2.3 Bearish risk-reversals: cheap upfront, wrong risk
A D 90% put financed by selling a 110–112% call can be near zero-cost on a model grid, but the structure is not free. It sells precisely the upside gap that would occur if regulators choose a softer settlement, rates rally, or the AI load-growth narrative re-accelerates.

The risk-reversal is especially unattractive because D IV is already low. Selling cheap calls to buy cheap puts is not a good trade-off when the core edge is that the market underprices the event. Use risk-reversals only if the portfolio has a hard zero-premium constraint and can tolerate short-call margin. My base case rejects them for D/SO.

## 3. Variance and event-vol sleeve
The clean listed-option expression is the put spread. A variance expression can add value only if it is narrowly tied to the docket window:

- Buy a small D forward-start 1m variance or listed proxy beginning 10–15 trading days before the expected SCC decision/testimony cluster.
- Cap the variance sleeve at 20–25% of the total D/SO option premium budget.
- Do not buy broad 6–9m variance on SO unless the Q4 calendar is confirmed; otherwise theta dominates.
- Do not buy CEG/VST variance outright at CEG IV 38. The long merchant leg already owns upside convexity through scarce-asset repricing; buying high-IV variance duplicates risk at bad carry.

Translation: use variance as a timing tool, not as the main position. The main position is directional put-spread convexity.

## 4. VST/CEG tail hedge
Card 06's long VST/CEG leg is correct, but it carries two named tails:

- CEG: NRC restart process for the Christopher M. Crane Clean Energy Center, formerly Three Mile Island Unit 1. The NRC page shows NEPA review, inspection activity, license-amendment work, and restart-related requests still in process as of 2026-05-11.
- VST/CEG/TLN merchant complex: FERC co-location and PJM tariff risk. FERC rejected the amended Susquehanna ISA expansion in 2024 and sustained the matter on rehearing in 2025; it also opened a broader PJM co-location show-cause process in February 2025.

Because CEG IV is 38 and VST vol is also elevated, the hedge should not be outright long puts. Use covered put-spread collars on the long holdings:

| Long leg | Hedge | Indicative cost logic | Purpose |
|---|---|---:|---|
| CEG | Buy 6–7m 90/75 put spread; sell 112–115 call against existing long | Put spread costs ~4.0% of spot; covered call can turn package near flat to small credit | Covers a -15% to -25% NRC/FERC gap while keeping ordinary upside |
| VST | Buy 6–7m 90/75 put spread; sell 112–115 call against existing long | Put spread costs ~4.5% of spot; covered call mostly funds it | Covers broad merchant/nuclear de-rating |

Implementation rule: cover only 50–60% of the VST/CEG long notional. Full collars over-hedge the thesis because the central case is still that CoD reallocation pushes hyperscalers toward merchant PPAs.

## 5. Recommended package
For a 100 NAV portfolio implementing card 06's expression:

| Sleeve | Position | Notional | Premium / carry | Role |
|---|---:|---:|---:|---|
| D catalyst | Long D Oct/Nov 2026 95/80 put spread | 2.0 NAV | ~0.07 NAV premium | Primary Virginia SCC downside |
| SO catalyst | Long SO Jan 2027 92.5/80 or 90/75 put spread | 2.0 NAV | ~0.05–0.08 NAV premium | Georgia PSC Q4 downside |
| Event vol | D forward-start 1m variance or listed proxy around docket | 0.25–0.50 NAV vega equivalent | capped at 0.02 NAV premium | Monetizes IV pop if the docket gets contentious |
| CEG tail hedge | 50–60% notional covered 90/75 put-spread collar | on long CEG | near flat to small credit | NRC/FERC gap protection |
| VST tail hedge | 50–60% notional covered 90/75 put-spread collar | on long VST | near flat to small credit | Merchant co-location/PJM risk protection |

Net result: the D/SO short becomes premium-defined, the VST/CEG long keeps most upside, and the book avoids the two errors that would break the trade: shorting VST/CEG naked into scarce nuclear PPAs, or selling cheap D/SO calls to force a zero-cost short.

## 6. Stress table
| Scenario through 2026Q4 | D/SO cash short | D/SO put spread | D/SO risk-reversal | VST/CEG collar overlay | Preferred exposure |
|---|---:|---:|---:|---:|---|
| Hard CoD tilt: D/SO -15%, VST/CEG +5% | Works, but borrow/dividend drag | Best: spread near max payout | Works, but unnecessary call risk | Call cap only partly binds | Put spread + partial collars |
| Soft PSC settlement: D/SO +8%, VST/CEG +5% | Loses mark-to-market and may squeeze | Loses only premium | Loses on short call | Covered call caps some VST/CEG upside | Put spread |
| NRC delay: CEG -18%, D/SO flat | Cash D/SO short does not hedge | D/SO spread may expire worthless | Same plus call risk | CEG put spread pays | Partial collar |
| FERC co-location adverse: VST/CEG -12%, D/SO +3% | Pair loses both sides | D/SO premium loss limited | Short calls lose if D/SO rally | VST/CEG hedge offsets drawdown | Collar is mandatory |
| Rates rally / utility beta squeeze | Worst | Premium-defined | Worst because short calls gap | Covered calls may cap merchant upside | Avoid D/SO RR |

## 7. Decision
The answer to the mission question is **put spreads**, not outright OTM puts and not bearish risk-reversals.

- Use D Oct/Nov 2026 95/80 put spreads and SO Jan 2027 92.5/80 or 90/75 put spreads for the D/SO rate-case short.
- Add a small D event-vol sleeve only if the docket calendar becomes specific enough to localize the volatility.
- Hedge VST/CEG with 50–60% notional covered 90/75 put-spread collars, not outright high-IV puts.
- Keep all short-call exposure covered by the existing long VST/CEG shares. Do not sell uncovered D/SO calls.

This stress-tests and refines card 06: the underlying equity thesis is intact, but the implementation should be defined-risk and volatility-aware.

## 8. Sources and date notes
- Virginia SCC, Dominion Energy Virginia biennial review / GS-5 large-load order: new GS-5 class for customers demanding 25 MW or more and minimum demand charge mechanics reported by SCC, published 2025-11-26. URL: https://www.scc.virginia.gov/about-the-scc/newsreleases/release/scc-issues-order-on-dev-biennial-review-2025/scc-rules-in-dev-biennial-review-case.html
- Virginia SCC, "SCC Data Center Initiatives" fact sheet, February 2026. URL: https://www.scc.virginia.gov/media/sccvirginiagov-home/about-the-scc/fact-sheets/scc-data-center-initiatives-02-2026.pdf
- Georgia PSC, "Data Center Fact Sheet," March 2026: minimum billing, longer contract terms, 9,985 MW generation certification, and ratepayer protection language. URL: https://psc.ga.gov/site/downloads/datacenterfactsheet.pdf
- Georgia Power, large-load contracts and 8,448 MW projected demand growth filing, published 2025-09-30. URL: https://www.georgiapower.com/news-hub/press-releases/georgia-power-highlights-new-customer-contracts-continued-economic-growth-updated-forecasts-in-latest-filings-with-georgia-psc.html
- Constellation, Microsoft 20-year PPA and Crane Clean Energy Center restart announcement, 2024-09-20. URL: https://investors.constellationenergy.com/news-releases/news-release-details/constellation-launch-crane-clean-energy-center-restoring-jobs/
- NRC, Christopher M. Crane Clean Energy Center restart-status page, accessed for 2026-05-11 work date. URL: https://www.nrc.gov/info-finder/reactors/ccec
- FERC, Susquehanna Nuclear LLC v. FERC case page: order rejecting amended ISA to increase co-located load and rehearing order. URL: https://www.ferc.gov/enforcement-legal/legal/court-cases/susquehanna-nuclear-llc-v-ferc
- FERC, co-location show-cause news release, 2025-02-20. URL: https://ferc.gov/news-events/news/ferc-orders-action-co-location-issues-related-data-centers-running-ai
- Vistra, Meta 20-year nuclear PPA announcement, 2026-01-09. URL: https://investor.vistracorp.com/2026-01-09-Vistra-and-Meta-Announce-Agreements-to-Support-Nuclear-Plants-in-PJM-and-Add-New-Nuclear-Generation-to-the-Grid
- Option premium figures are indicative Black-Scholes grids using user-provided IV anchors D 30D IV 21 and CEG IV 38, with D/SO long-tenor regulated-utility IV assumed in the low 20s. They are structure economics, not executable quotes.

## 9. Handoff
Recommended next analyst: asset-allocator [primary]. Trigger: this card converts card 06's equity view into a defined-risk option package; the remaining question is portfolio implementation and risk-budget substitution across cash equity, credit, and rate hedges, which is asset allocation rather than another derivatives design problem.

Footer: Card 07 completed on 2026-05-11 (Asia/Singapore).
