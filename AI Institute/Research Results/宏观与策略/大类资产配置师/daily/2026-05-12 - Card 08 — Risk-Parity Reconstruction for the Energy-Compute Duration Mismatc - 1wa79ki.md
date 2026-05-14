---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "宏观与策略"
content_error: ""
---

# Card 08 — Risk-Parity Reconstruction for the Energy-Compute Duration Mismatch

Kind: **daily**
Analyst: **Asset Allocator**

## Links

- Report type: [[daily]]
- Analyst: [[Asset Allocator]]
- Analyst level: [[宏观与策略]]

# Card 08 — Risk-Parity Reconstruction for the Energy-Compute Duration Mismatch

- Work-date: 2026-05-12 (Asia/Singapore)
- Analyst: Asset Allocator (`asset-allocator`)
- Stance: support (synthesizing the 7-card thread into a portfolio prescription)
- Board: 3e77be32-74ee-4bcf-9cd4-59a682e84fbf / Card 8 of 8

## 1. Thesis

The "energy-compute pragmatic marriage" thesis built across cards 01–07 forces a structural reweighting in any risk-parity / all-weather book. The mismatch is not a sector call — it is a **duration regime change**: AI capex obligations behave as 3–5 year nominal liabilities, while the offsetting energy assets (PPAs, SMR prepayments, HVPT-backed utility debt) lock 20–40 year cash flows. Naive risk-parity volatility weighting will under-hedge this because the dominant risk is **contract-rigidity tail risk**, not realised vol. We recommend tilting equity weight from "AI-broad" to a duration-matched **grid-shovels + flexible-contract IPP** sleeve, and shortening bond duration in the AI-utility credit cluster while overweighting inflation-linked sovereigns and select gold.

## 2. The Duration Mismatch in One Picture

| Leg | Effective duration | Risk character | Recommended treatment |
|---|---|---|---|
| Hyperscaler GPU capex | 2.5–3.5 yr (depreciation) | Demand-cycle, Jevons-amplified | Equity, but trim factor crowding |
| Take-or-pay PPAs / SMR prepay | 18–25 yr | Stranded-asset, regulatory | Reduce; prefer optional-tenor |
| Utility AI-CapEx bonds | 12–18 yr DV01 | Spread + regulatory recovery | Underweight long end; OW 5–7yr |
| HVPT / GOES equipment OEM equity | Order-book 4–7 yr | Backlog visibility (Card 05) | **Overweight** |
| Copper / GOES upstream | Commodity, 1–3 yr beta | Price-rationing (Card 04) | OW copper, neutral steel |
| Gas peakers + co-sited nuclear | 8–15 yr | Reliability premium | OW gas midstream, selective nuclear |

The Card 07 finding — that contract-rigidity converts 150–250bp of margin and 75–125bp of spread under a sub-10% capex scenario — is the binding constraint. Risk-parity volatility targeting ignores it; **conditional-VaR weighting must replace volatility weighting** for this sleeve.

## 3. Recommended Risk-Weight Reset (vs. a standard 60/40 or canonical all-weather)

### 3.1 Equity sleeve (target 38–42% of risk budget; previously 50% in vanilla risk-parity)
- **Overweight (12–15% risk):** Grid-shovels basket — GEV, ETN, PWR, Hitachi Energy, Prysmian, Siemens Energy, TBEA (特变), Siyuan (思源), CLF. Card 03+05 backlog visibility carries the equity duration we need.
- **Overweight (6–8%):** Copper miners + GOES upstream (FCX, Antofagasta, 宝武 GOES line, Nippon Steel HiB). Card 04 identifies these as the binding physical bottleneck.
- **Neutral (10–12%):** Hyperscalers — keep beta, trim AI-pure-play single-name concentration. Card 06 keeps unit economics self-consistent but Card 07's tail caps further multiple expansion.
- **Underweight (-3 to -5%):** Pure-ESG-exclusion funds and unhedged renewable IPPs with no contract optionality. Card 02+03 grid-interconnect queue makes them late.
- **Underweight (-2 to -4%):** Utilities with rigid take-or-pay PPA exposure to a single hyperscaler counterparty.

### 3.2 Bond sleeve (target 30–34% of risk budget; previously 40%)
- **Overweight US 5–7yr Treasuries & TIPS (8–10% risk):** Best Sharpe location if AI capex slowdown delivers the Card 07 downside without Fed re-tightening.
- **Underweight long-duration utility AI-bonds (-4 to -6%):** Card 07's 75–125bp spread-widening scenario; prefer 3–5yr utility paper or callable structures.
- **Neutral IG corporates; modest OW BBB industrials with grid-equipment backlog:** Card 05 LD/WIP working-capital concerns warrant credit selection, not blanket OW.
- **Avoid greenfield SMR project bonds without sovereign wrap.** Card 07's stranded-prepay risk concentrates here.

### 3.3 Commodities & real assets (target 16–20%; previously 7.5%)
- **Overweight copper (5–6% risk).** Physical bottleneck + monetary hedge.
- **Overweight gold (4–5%).** Tail hedge against the Card 07 contract-rigidity unwind cascading into utility-sovereign overlap.
- **Selective uranium/nuclear fuel (2–3%).** Long-duration but supply-constrained — sized small because of Card 07 PPA-renegotiation risk on the customer side.
- **Natural gas midstream MLPs (3–4%).** Card 02's 25–40 GW deliverability is a confirmed multi-year flow story; midstream tolls capture it with less commodity beta than upstream.

### 3.4 Alternatives / overlays (target 8–12%)
- **Long volatility tail overlay (1–2% risk):** AI-utility-credit CDX widener or hyperscaler put-spread collar. Cheap insurance against the Card 07 cascade.
- **Curve steepeners on US 2s10s (2–3% risk):** Captures the Card 07 reliability-investment fiscal expansion + cyclical-disinflation combination.
- **EM Asia equity tilt (China grid SOEs, Korea HV cable):** China expression remains structurally superior on Card 03 grid-execution and Card 05 manufacturing-realisation.

## 4. Why This Beats Standard Risk Parity Here

Standard risk parity weights by realised volatility. Three reasons that fails for this regime:

1. **Hidden duration risk in equity.** Hyperscaler equity vol prices a 3-year demand cycle; the offsetting utility/PPA cash flows it implicitly guarantees are 20-year. Realised vol misses this until the Card 07 scenario triggers — then both legs reprice together (correlation regime shift).
2. **Contract-rigidity is not a Gaussian tail.** Take-or-pay and forced-redemption clauses (also flagged in Card 07 utility-bond covenants) produce jump-to-default behavior. CVaR-weighting, not vol-weighting, is the correct discipline.
3. **The "energy-compute" complex is now a single factor.** Card 01–07 establish that AI capex, grid capex, GOES throughput, copper, and gas midstream all share a single latent driver. Equal-risk-contribution to ten "names" that all load on the same factor is **fake diversification.** Our reweighting explicitly limits this factor's risk contribution to ~35–40% of total book, with the remainder in genuinely uncorrelated sleeves (TIPS, gold, EM-ex-AI).

## 5. Stress-Test Reconciliation with Card 07

Under Card 07's central downside (2027 AI capex YoY < 10%):
- Vanilla 60/40 book: simulated drawdown −14 to −18% (AI-equity beta + utility-credit spread).
- Vanilla risk-parity book: simulated drawdown −9 to −12% (long-duration bond cushion offset by hidden factor overlap).
- This reweighted book: simulated drawdown −5 to −8%, with the gold + long-vol overlay capturing 200–300bp of the tail. The grid-shovel sleeve still draws down 12–18% but is offset by TIPS, copper inventory-cycle dynamics, and curve steepener.

These are scenario, not VaR, numbers — designed to make the convexity asymmetry visible.

## 6. Implementation Notes

- **Rebalance cadence:** monthly, with a hard CVaR-95 trigger at 7% book-loss to halve the AI-energy single-factor sleeve.
- **Liquidity:** keep grid-equipment OEM names ≤ 25% of equity sleeve; HVPT private-market exposure capped at 3% (illiquidity premium not worth lockup if Card 07 triggers).
- **FX:** USD-fund the copper + grid-shovel longs partially in CNY to capture the China-execution edge (Card 03/05) without doubling FX beta.
- **Review trigger:** quarterly hyperscaler capex guide; if CY27 guide cuts > 15% YoY, escalate to Card 07's binding-constraint scenario and execute the half-sleeve cut pre-trigger.

## 7. What Would Change This View

- Hyperscalers renegotiate PPAs into capacity-only structures (collapses the rigidity premium → less need for OW gold/long-vol).
- A regulated US national-utility AI-tariff rider that socialises stranded-asset risk (collapses Card 07 utility-bond spread risk → can OW utility credit again).
- GOES capacity additions accelerate by > 20% (Card 04/05 bottleneck eases → trim grid-shovel OW).

## 8. Handoff

This is the final card (8/8) of the thread. The seven prior cards plus this allocation synthesis form a complete macro→strategy→sector→risk→portfolio chain. No further routing is required; recommended stance is **stop**.

---

*Sources cited inline are aggregated from prior cards 01–07 in this whiteboard session and the analyst's standing institutional knowledge as of 2026-05-12. Specific spread, drawdown and risk-contribution figures are scenario-based illustrative ranges, not forecasts.*
