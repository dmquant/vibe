---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "宏观与策略"
content_error: ""
---

# Card 06 — Cross-Asset Protection Portfolio for the Semiconductor Liquidation Risk Under Conflicting Credit Data

Kind: **daily**
Analyst: **Asset Allocator**

## Links

- Report type: [[daily]]
- Analyst: [[Asset Allocator]]
- Analyst level: [[宏观与策略]]

# Card 06 — Cross-Asset Protection Portfolio for the Semiconductor Liquidation Risk Under Conflicting Credit Data

- Board: cc76892a-4fae-4a6e-8f81-ef42942b978e | Card 6/8 | Stance: synthesize
- Analyst: Asset Allocator (asset-allocator)
- Work-date: 2026-05-12 (Asia/Singapore)
- Topic: Cross-asset protection portfolio for the semiconductor liquidation risk under conflicting credit data
- Question: With the IG OAS 119 bp (card-03) vs. public FRED 0.79% (card-05) conflict unresolved, how should a multi-asset portfolio allocate risk budget across SOXX/SMH puts, TSM ADR shorts, HK Connect semiconductor hedges, USD/JPY downside, and credit hedges?

## 1. Synthesis of the prior thread

| Card | Channel | Status as of 2026-05-12 |
|---|---|---|
| 01 | A-share / SOX crowding (57% above 200DMA) | **Confirmed fragile** |
| 02 | Brent 110–115 → real-rate / duration | Necessary-but-insufficient catalyst |
| 03 | IG OAS +27bp to **119 bp** (internal print) | **Disputed** by card-05 |
| 04 | USD/JPY carry unwind from 160.23 → 156.64 | Short-squeeze, not yet confirmed global unwind |
| 05 | FRED public IG OAS **0.79%**, HY 2.81% | Suggests credit channel **not yet activated** |

The portfolio must therefore be built for **two coexisting regimes**:
- **Regime A (60% prior weight): "Crowded correction, credit benign."** FRED is right; card-03's 119 bp is a stale or mis-pulled print. Move is a -10% to -15% SOX drawdown contained inside equity volatility.
- **Regime B (40% prior weight): "Credit channel quietly activating."** Card-03 reflects dealer-runs that lead public FRED tape by 2–5 sessions. A move to global de-leveraging is on a 2–4 week clock.

The allocation below is designed to **outperform in Regime B without bleeding catastrophically in Regime A**, while the IG OAS discrepancy is resolved. Total protection budget: **80 bps of NAV per month** (carry cost), with **mark-to-market loss cap −150 bps** before the structure is unwound.

## 2. Risk budget allocation (total = 100 units, ≈ 80 bps NAV / month premium)

| Leg | Instrument | Risk units | Premium share | Rationale |
|---|---|---:|---:|---|
| L1 | SOXX / SMH 3-month 90% put spread (90/78) | **28** | 22 bps | Direct hedge on the crowded leg; spread vs. outright to bleed less if Regime A. |
| L2 | TSM ADR short (delta-1) | **12** | 0 bp (financing only) | Single-name carrier of the AI-capex thesis; high beta to both regimes, low borrow cost. Cap at 1.0% NAV gross short. |
| L3 | HSTECH / HSCEI semiconductor basket short via HK Connect futures | **10** | 6 bps | Captures SMIC / Hua Hong tape; card-05 noted Hua Hong already net-sold. Diversifies away from US single-name risk. |
| L4 | USD/JPY 3-month 150 put (delta ≈ 25) | **18** | 14 bps | Best vehicle for Regime B; cheap convexity, carry unwind is the cleanest signal channel. |
| L5 | CDX IG 5y payer / HYG put combo | **22** | 28 bps | The decisive Regime-B leg. If card-03's 119 bp is correct, this dominates P&L. If FRED's 0.79% is correct, it is the most expensive leg — hence capped at 22 units. |
| L6 | Long 5y UST / SOFR receiver | **10** | 10 bps | Duration tail hedge: in a deep risk-off, real rates fall; offsets card-02's "duration compression" path reversing. |

### Why this split and not a punchier credit tilt

The natural temptation is to overweight L5 because cards 02–04 nominated credit as the **decisive** systemic trigger. We resist this because:
1. Card-05's FRED reading (0.79%) is from a tier-1 public source and is not yet reconciled. Sizing L5 above ~25 units before reconciliation amounts to betting the dealer-quote feed against the official tape.
2. L1+L2+L3 deliver **~50% of the protection** through the equity-vol channel, which is **regime-agnostic** — both Regime A and Regime B reward the equity short. This is where conviction belongs.
3. L4 (USD/JPY put) is the **cleanest binary read** on Regime B at the lowest premium-to-payoff ratio; it earns its 18 units by convexity alone.

## 3. Trigger map and adjustment rules

| Trigger | Observation date / source | Action |
|---|---|---|
| FRED IG OAS prints ≥ 1.05% on consecutive sessions | next 5 sessions, FRED BAMLC0A0CM | **Confirm Regime B**: lift L5 from 22 → 35 units; trim L1 to 22 |
| FRED IG OAS stays < 0.85% for 10 sessions | by 2026-05-26 | **Confirm Regime A**: cut L5 to 10, redeploy 12 units into L1 (extend tenor, not size) |
| USD/JPY trades < 152 with realized 1m vol > 14 | spot tape | Take 50% profit on L4; reset strike lower |
| SOX index closes < 200DMA | daily | Take 50% profit on L1+L2+L3 in three steps |
| Single AI-capex IG name gaps > 50 bp | dealer runs / TRACE | Add 5 units to L5 (force-add, not discretionary) |
| Total structure MTM loss > 150 bps NAV | daily | Unwind L5 and L6 first (highest carry), retain equity shorts |

## 4. What the FRED vs. dealer-runs conflict means operationally

The conflict is itself **information**. Two plausible reconciliations:

- **Plausible (60%): card-03's 119 bp is a desk/dealer indicative on a wider-quality basket** (e.g., BBB-only or AI-capex sub-index) and was mis-labeled as "IG OAS." FRED's 0.79% on the broad IG basket is correct, and credit is **not yet** broken.
- **Plausible (40%): FRED is lagging dealer runs by 2–5 sessions** (not unprecedented at month-start data refresh), and the broad IG print will catch up to 95–110 bp by 2026-05-19 to 2026-05-26.

The 22-unit cap on L5 is calibrated so the portfolio:
- earns ~1.8× the premium back in Regime B (resolution toward 110+ bp),
- bleeds ~0.6× the premium in Regime A (FRED stays right),
giving an expected payoff of roughly +0.4× premium across regimes — positive but not euphoric. The euphoria, if it comes, must be earned by the trigger map, not assumed by sizing.

## 5. Position-level sizing on a $1bn NAV portfolio

| Leg | Notional or premium | Worst-case loss (carry) |
|---|---|---|
| L1 SOXX/SMH 90/78 put spread | $220m notional, $2.2m premium | $2.2m |
| L2 TSM ADR short | $10m gross short | financing only |
| L3 HK semis futures short | $60m notional | $0.6m |
| L4 USD/JPY 150 put | $300m notional, $1.4m premium | $1.4m |
| L5 CDX IG payer + HYG put | $200m notional CDX IG, $40m HYG puts | $2.8m |
| L6 5y UST receiver / long | $150m DV01-equivalent | $1.0m |
| **Total** | | **~$8.0m ≈ 80 bps NAV / month** |

## 6. Linkages back to prior cards

- **Card-01 (crowding):** L1+L2 directly short the crowded leg. We do not short the A-share semi tape directly — A-share margin tightening is a separate policy reflex and not the cleanest expression.
- **Card-02 (Brent / duration):** L6 (UST receiver) covers the **reverse** path — if duration compression unwinds violently into risk-off, L6 pays. We do not short duration here; the macro asymmetry is to the risk-off side.
- **Card-03 (IG OAS 119 bp):** L5 is the named bet on this thesis, but capped because the print is contested.
- **Card-04 (USD/JPY carry unwind):** L4 is the cleanest single-leg expression. We do NOT also short Nikkei here — that would double-count the JPY-strength channel and add domestic-policy risk we can't underwrite.
- **Card-05 (FRED conflict / port not confirmed):** the entire structure assumes the conflict is **unresolved**, hence the trigger map dominates static sizing.

## 7. What we did NOT do, and why

- We did **not** put on outright SOXX short stock — option spreads are required because the realized-vol cost of being early is high and the catalyst date is unknown.
- We did **not** add a CNY hedge. Card-02 explicitly judged USD/CNY contained inside PBoC's 7.30–7.35 band; the implicit-vol cost is too high for the residual conviction.
- We did **not** include gold. Gold's correlation to this specific liquidation path (semis crowding + carry unwind + credit) is unstable and would dilute the trigger discipline.
- We did **not** size by static VaR alone; in regime-conflict episodes, **trigger-conditional sizing** dominates VaR-targeting.

## 8. Bottom line

Allocate ~80 bps of monthly carry across six legs: **equity-vol shorts on the crowded semi complex (50 units), USD/JPY downside (18 units), capped credit hedges (22 units), and a duration tail (10 units).** The structure is built to be **regime-agnostic on conviction (equity legs) and regime-dependent on size (credit + FX)**, with a hard trigger map that resolves the FRED vs. dealer-quote conflict into actual position changes within 10 trading sessions. The decisive risk is L5 sizing; the discipline is to let the credit tape — not card-03's single indicative — earn the right to be larger.

## 9. Files referenced / reconstructed

All upstream card files (`card-01/...` through `card-05/...`) were present in the workspace and used as-is. No reconstruction was needed.
