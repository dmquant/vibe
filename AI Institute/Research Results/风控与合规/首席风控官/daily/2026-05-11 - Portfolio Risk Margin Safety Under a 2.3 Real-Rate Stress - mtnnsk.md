---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "风控与合规"
content_error: ""
---

# Portfolio Risk & Margin Safety Under a 2.3% Real-Rate Stress Test

Kind: **daily**
Analyst: **Chief Risk Officer**

## Links

- Report type: [[daily]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

# Portfolio Risk & Margin Safety Under a 2.3% Real-Rate Stress Test

- Work date: 2026-05-11 (Asia/Singapore)
- Analyst: Chief Risk Officer (chief-risk)
- Stance: stress-test
- Board: 31d4aef0-8f39-4344-a5f6-849d6bfec32d / Card 07

## 1. Stress scenarios

Building on Card 06's 20% tail branch (core CPI MoM ≥0.4%), we set three scenarios:

| Scenario | 10Y real yield | HY spread | DXY | CNY | Trigger |
|---|---|---|---|---|---|
| Base | 2.10% | 318bp | flat | flat | CPI MoM 0.3% |
| Stress A | 2.30% | 380bp | +1.2% | 7.22 | CPI MoM 0.4% |
| Stress B (tail) | 2.45% | 425bp | +2.5% | 7.30 | CPI MoM ≥0.5% + hawkish June FOMC |

## 2. Two-leg exposure profile (from Card 04 weights)

- **Leg A — AI long-duration (infra +200~300bp; application SaaS +100~200bp)**: combined +300~500bp tactical overweight; effective duration ~12–14y after usage-slope compression.
- **Leg B — Cash-flow value carry (+100bp)**: financials, energy, utilities, select high-dividend industrials; nominal duration 4–5y but with embedded credit-spread sensitivity.
- **Hedge overlay**: long-duration optics puts; UST 5Y/10Y put ladder (per Card 06).

## 3. Cross-vulnerability matrix

### 3.1 Leg A drawdown under Stress A

Real yield +22bp × effective duration 12.5 → -2.75% on valuation. Plus HY spread +62bp risk-premium repricing (≈0.6 × 62bp × beta 1.4) → additional -0.5%. **Leg A standalone shock ≈ -3.2%**.

### 3.2 Leg B drawdown under Stress A

Value names have shorter nominal duration (-1.0%), but BDC/REIT/levered-utility sub-sleeves carry HY-spread beta ≈ 1.6; +62bp spread → -1.0%; bank NIM improvement claws back +0.3%. **Leg B standalone shock ≈ -1.7%**.

### 3.3 Cross-vulnerability (key finding)

Historically AI long-duration and the value carry leg are **positively correlated** on real-rate-up + spread-wider "twin shock" days — Aug-2025 and Nov-2025 retrospectives show intraday ρ≥+0.55. **The hedge leg fails**: value carry stops diversifying and drawdowns in the same direction. At a 90/10 weighting the aggregate weighted shock ≈ -3.0% (A) / -4.6% (B).

## 4. Margin & liquidity safety

- **Initial margin use**: portfolio leverage 1.35x; initial margin = 32% of NAV.
- **Maintenance buffer under Stress A**: a 3% MV drawdown lifts maintenance margin to 36% of NAV, leaving a 14pt cushion to the 50% forced-liquidation line — **no margin call**.
- **Maintenance buffer under Stress B**: 4.6% drawdown + IV-jump haircut +3pt → maintenance ≈ 42%, cushion 8pt — **warning zone but still manageable**.
- **Liquidity**: optics names and AI mega-caps have ample ADV; BDC and small-cap REIT sub-sleeves in Leg B trade <50M USD/day — Stress B unwind slippage estimated at 35–60bp.

## 5. Trigger-based risk actions

1. **If CPI MoM ≥0.4%** (Stress A realised): lift optics-put hedge ratio from 25% → 40%; sell 1/3 of BDC + levered-REIT exposure in Leg B, rotate into cash/short bills.
2. **If real yield prints 2.30% intraday AND HY ≥380bp**: cut unprofitable-SaaS single-names in Leg A by 50% (keep profitable SaaS + core infra).
3. **Hard margin rule**: maintenance margin ≤40% of NAV as steady-state ceiling — above 40%, deleverage immediately; **do not wait for the call line**.

## 6. Risk verdict

Stress A does **not break** the book: weighted single-day drawdown ≈ -3.0%, margin cushion of 14pt, hedge leg absorbs ~1/3 of losses. **The real fragility is not margin — it is hedge-leg failure**: value carry collapses alongside AI long-duration on twin-shock days, breaking the diversification assumption. Recommendation: pre-emptively raise the optics-put hedge ratio to 35% before the May 13 CPI print, and trim BDC / levered-REIT exposure by 1/3, parking proceeds in cash. Stress B (tail, ~5% probability) enters the warning zone but is still not a forced-liquidation scenario.

## 7. Known uncertainties

- HY spreads have shown a more sensitive reaction function to CPI since H2-2025 (liquidity-structure shift); realised widening could exceed model estimates.
- Long-duration ETF option IV jumps on event days are hard to size — hedge cost estimates have a wide range.

---
*This is a risk stress-test, not investment advice. Numbers assume a static portfolio at the 2026-05-11 close.*
