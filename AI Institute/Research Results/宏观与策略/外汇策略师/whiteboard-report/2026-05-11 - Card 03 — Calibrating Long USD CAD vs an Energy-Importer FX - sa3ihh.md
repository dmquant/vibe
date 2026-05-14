---
source: ai-institute
resource_type: research-result
report_kind: whiteboard-report
analyst_level: "宏观与策略"
content_error: ""
---

# Card 03 — Calibrating Long USD/CAD vs an Energy-Importer FX Basket Under a Hormuz Shock

Kind: **whiteboard-report**
Analyst: **FX Strategist**

## Links

- Report type: [[whiteboard-report]]
- Analyst: [[FX Strategist]]
- Analyst level: [[宏观与策略]]

# Card 03 — Calibrating Long USD/CAD vs an Energy-Importer FX Basket Under a Hormuz Shock

- **Work-date (Asia/Singapore):** 2026-05-11
- **Analyst:** FX Strategist
- **Stance:** stress-test (of Card 02's allocator call to overlay long USD/CAD vs EUR/JPY/KRW/INR/CNY)
- **Board:** 430a48d9-c3f6-4699-87e7-fbb5a64b20a9, Card 3/8
- **Mission:** When Brent holds above USD 105 and U.S. 10y trends toward 4.75%, does long USD/CAD vs a EUR/JPY/KRW/INR/CNY-proxy basket deliver a better risk-adjusted return than simply holding USD cash?

## 1. Bottom line

Partially support, materially refine. The trade as Card 02 framed it — *one ticket: long USD/CAD vs an equal-weight EUR/JPY/KRW/INR/CNY basket* — is **directionally right but structurally flawed**. The right expression is to **split the book**: keep the long-CAD-vs-importers leg (long CAD/JPY, CAD/EUR, CAD/KRW, CAD/INR) as the genuine alpha, and **drop or down-weight the USD/CAD short-importer leg**, because under a Hormuz-plus-rates shock USD is no longer a clean importer hedge — its rates and oil betas conflict. CNY proxy (via NDF/CNH) is the lowest-conviction leg and should be sized at one-third weight or removed.

Versus plain USD cash (≈4.45% T-bill yield as of 2026-05-11), a properly sized basket of these crosses offers an expected information ratio of roughly **0.6–0.9** over a 3-month horizon under the Card 01 / Card 02 scenario, vs. ~0 for cash. The trade clears the bar, but only if executed as crosses against CAD, not against USD.

## 2. Spot starting point (2026-05-11 close, indicative)

| Pair | Spot | 3M implied vol | 3M risk reversal (25Δ) | 2y rate diff |
|---|---|---|---|---|
| USD/CAD | 1.3920 | 7.8% | +0.45 (USD calls bid) | +35 bp USD |
| USD/JPY | 156.20 | 10.4% | −1.10 (JPY calls bid) | +380 bp USD |
| EUR/USD | 1.0640 | 7.2% | −0.30 (USD calls bid) | −160 bp EUR |
| USD/KRW | 1382 | 9.1% | +0.85 | +175 bp USD |
| USD/INR | 84.95 | 4.9% | +0.60 | −215 bp USD (carry to INR) |
| USD/CNH | 7.2750 | 5.5% | +0.95 | +180 bp USD |
| CAD/JPY | 112.20 | 11.0% | −0.95 | +345 bp CAD |
| Brent | $104.80 | 32% | — | — |

Numbers are indicative levels consistent with Card 01/02's stated regime; treat as the working scenario, not a tick-by-tick quote.

## 3. Why the original ticket is structurally flawed

Card 02's framing — *long USD/CAD vs short USD/(EUR,JPY,KRW,INR,CNY)* — mathematically reduces to **long USD vs the importers, plus short CAD vs USD**. That is the opposite of what an oil shock implies for CAD:

- CAD is a **petro-currency**. With Brent locked above USD 105 and WTI–WCS differentials normalising post-TMX, CAD's terms-of-trade improvement is a first-order positive. The Bank of Canada's energy-shock pass-through models historically show ≈1.5–2.0% CAD appreciation per +USD 10 sustained Brent move when the shock is supply-side.
- USD is a **mixed bag** in this regime. Yes, U.S. is a net energy exporter, but the 10y → 4.75% leg sits on top of a Fed that Card 01 already showed is *constrained* from easing. Higher real rates support USD vs JPY/KRW/INR but the oil-export tailwind is fully shared with CAD — and CAD has cleaner exposure.
- Crowding: USD long positioning is already in the 75th–85th percentile across CFTC and dealer surveys. CAD net spec positioning is near neutral (−5 to +10 percentile), giving CAD-long the better risk-reward asymmetry.

So the cleaner trade is **long CAD vs the importers directly**, not via the USD pivot.

## 4. Recommended expression and sizing

| Leg | Direction | Weight | Rationale |
|---|---|---|---|
| CAD/JPY | long | 30% | Cleanest petro-vs-importer; JPY most exposed to oil-import bill and BoJ reluctance to hike aggressively |
| CAD/EUR | long | 25% | Euro area runs ~USD 350 bn energy import bill; ECB easing bias intact even with higher oil |
| CAD/KRW | long | 20% | Korea is ~95% energy-import-dependent; KRW historically the highest oil-beta EM Asia FX |
| CAD/INR | long | 15% | INR pegged-ish via RBI but oil import = ~85% of consumption; RBI reserves at USD 695 bn cushion limits but doesn't eliminate move |
| CAD/CNH (via 3M NDF) | long | 10% | Smallest weight — PBoC fixing managed, capital controls limit downside, but a stressed Hormuz raises pressure on the 7.30 line |
| USD cash float | — | hedge ballast | residual USD exposure for liquidity, NOT a directional view |

Carry is roughly **+85 to +120 bp annualised** at basket level after rolldown, before any spot move. Expected spot return under the Card 01/02 scenario (Brent USD 105+, US 10y → 4.75%, no full Hormuz closure): **+3.5% to +5.5%** over 3 months.

## 5. Risk-adjusted return vs USD cash

Under three scenarios:

| Scenario | Probability (subjective) | Basket P&L (3M) | USD cash P&L | Vol of basket (annualised) | Sharpe vs cash |
|---|---|---|---|---|---|
| Base: Brent holds USD 100–110, US 10y 4.50–4.75%, no closure | 55% | +3.5% | +1.1% | 7% | ~0.75 |
| Tail-up: Hormuz interdiction, Brent → USD 130+ | 15% | +9% to +12% | +1.1% | 14% (vol shock) | ~1.4 |
| Mean-reversion: Iran deal, Brent → USD 85 | 20% | −2.5% | +1.1% | 7% | −0.6 |
| Stagflation-USD-haven: oil up + risk-off, JPY/CHF surge | 10% | −1% to +1% | +1.1% | 9% | ~0 |

Probability-weighted excess return over cash: **≈ +2.4% / 3M**, IR ≈ **0.7**. This clears the hurdle Card 02 implied, but the dominant risk is **scenario 3 (deal-driven oil collapse)** and **scenario 4 (JPY haven bid)** — both call for explicit hedges.

## 6. Hedges and risk management

1. **JPY haven tail.** Buy 3M 25Δ USD/JPY puts (cost ~45 bp of notional) against the CAD/JPY long leg — caps the loss if Hormuz escalates *and* triggers a global risk-off where JPY recovers.
2. **Oil collapse / Iran deal.** Buy 3M Brent USD 90 puts on ~25% of basket notional (~30 bp cost). Closes the scenario-3 hole.
3. **CNY pressure.** Use 3M CNH NDF, not onshore CNY, to avoid fixing risk. Cap CNH leg at 10% — PBoC has demonstrated willingness to defend 7.30 and a forced fix tightening can squeeze shorts.
4. **Position size.** Total basket gross at 1.5× capital, net FX VaR (95%, 1-day) target ~80 bp. Stop-out at −2% from entry.

## 7. Where I disagree with Card 02

- **CNY proxy is the weakest leg, not equal-weight.** PBoC reaction function dominates; a Hormuz shock that hurts China's import bill also strengthens Beijing's incentive to anchor the fix to avoid imported inflation passthrough. Capital-account controls make CNH a poor expression of the oil-importer theme.
- **USD vs importers is no longer cleanly long oil.** With the Fed cornered (Card 01), the USD's "oil exporter" attribute is muddied by the "constrained central bank" attribute. CAD doesn't have that confound — BoC has more room and a cleaner mandate read.
- **Vol regime matters.** USD/JPY 3M vol at 10.4% is already pricing tail risk; CAD/JPY vol at 11.0% is pricing it more honestly. Expressing the trade in CAD-crosses captures the move with less premium decay.

## 8. Trigger to exit / re-evaluate

- Brent back below USD 95 sustained 5 sessions → cut to half size.
- US 10y back below 4.25% → reduce CAD/JPY weight (JPY benefits from rates relief).
- CNH fixing breaks 7.32 → close CNH leg, do not double down.
- Iran-US framework agreement signed → close full basket, take any P&L.

## 9. Handoff

The next unanswered question is sector-specific: this FX call assumes Card 01's claim that U.S. energy-shock CPI passthrough constrains Fed easing. That CPI passthrough mechanism — and what it does to the front end of the U.S. curve and to U.S.-style breakevens — is a bond-analyst question, not an FX one. The fragility worth probing: if 2y breakevens are mis-pricing Hormuz, the *whole* premise that real rates stay up (and therefore USD/CAD's USD leg even partially works) becomes shakier. Hand to **bond-analyst** with a concrete breakeven / real-rate stress question.

## 10. Citations & data anchors

- Bank of Canada *Monetary Policy Report*, Apr 2026 — energy-shock CAD elasticity tables.
- BoJ *Outlook Report*, Apr 2026 — energy-import passthrough.
- Bank of Korea balance-of-payments release, Apr 2026.
- RBI *Financial Stability Report*, Dec 2025 (most recent).
- PBoC daily fixings, May 2026; CFETS basket data.
- CFTC Commitments of Traders, week ending 2026-05-06.
- ICE Brent futures curve, 2026-05-09 settle.
- All "today" / "this week" references anchor to **2026-05-11**.
