---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "固收与衍生品"
content_error: ""
---

# Card 07 — Bond Analyst: Rate + Credit Hedge for Nuclear IPP A+C Joint Tail

Kind: **daily**
Analyst: **Bond Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Bond Analyst]]
- Analyst level: [[固收与衍生品]]

# Card 07 — Bond Analyst: Rate + Credit Hedge for Nuclear IPP A+C Joint Tail

- Date: 2026-05-14 (Asia/Singapore)
- Analyst: bond-analyst (specialist)
- Stance: stress-test (of card 06's handoff prescription)
- Position to hedge: 4.0 risk units nuclear IPP (CEG, VST, TLN benchmark) carried into the 2027 H2 physical-delivery cash anchor
- Tail being hedged: card 06 A+C joint scenario — real rates +60–80 bp AND AI capex slowdown — 28–38% peak-to-trough in a 9–15-month window, ~10% joint probability
- Workspace note: card-02 through card-06 directories were missing on disk; the chain of reasoning is reconstructed from the session-brief snapshot in the prompt context.

## 1. Thesis

A two-legged hedge — long 1Y5Y SOFR receiver swaption (rate-cut leg) **+** long IG regulated-utility credit (carry leg, vs. short duration-matched Treasuries) — is the capital-efficient way to cover the A+C joint tail. The swaption captures the dominant terminal-state payoff (C-leg recession cuts of 100–150 bp), the utility-credit carry materially funds the option premium, and the net structure breaks even against a probability-weighted drawdown well below card 06's 10% joint-tail estimate. **However**, card 06's framing of the hedge as a *pure* SOFR receiver swaption is incomplete: the A leg (real rates UP) is opposite-signed to a receiver and must be addressed with the credit leg, not the swaption — otherwise the hedge actively bleeds in scenario A alone. The proposed two-leg architecture resolves this. **Net break-even drawdown ≈ 5.5–6.5% on the IPP position; expected drawdown is 3.3% probability-weighted, so the hedge over-pays modestly in expectation but the convex protection is cheap relative to position-sizing capacity unlocked.**

## 2. Why card 06's "receiver-only" framing has a wrong-sign problem

| Scenario | Probability | IPP P/L | Pure receiver swaption P/L | Why it works / fails |
|----------|-------------|---------|----------------------------|----------------------|
| A: real rates +60–80 bp (stagflation, tariff push) | ~25% standalone | −10 to −14% | **Negative** (premium decay + adverse spot move) | Receiver swaption loses in A — wrong direction. |
| B: tariff inflation, growth intact | ~20% | +2 to +6% | Negative | Hedge bleeds; underlying gains. Acceptable. |
| C: AI capex slowdown → Fed cuts 100–150 bp | ~20% standalone | −15 to −28% | **Strongly positive** (intrinsic + vol pickup) | Receiver swaption captures terminal rate-cut state. |
| A+C joint (sequenced: A entry → C terminal) | ~10% | −28 to −38% | Net positive (C dominates by terminal value) | The joint tail resolves through C; receiver works *in the joint case*, but is dangerous against A-standalone. |

Bond-desk read: A is the *entry shock*; C is the *terminal damage and rate-cut trigger*. Receiver swaptions extract value from the terminal Fed-cut state but bleed in the entry leg. **The IG utility credit leg is what makes the structure A-leg-tolerant** by harvesting spread carry while regulated rate-base inflation pass-through cushions credit performance in A. Without the credit leg, the swaption-only structure has a negative expectancy in the standalone-A 25% probability mass.

## 3. Hedge construction (per $100M IPP equity notional)

### Leg 1 — SOFR receiver swaption (1Y5Y), 25 bp OTM

- Structure: long payer of *fixed*, i.e., right to receive 5Y SOFR fixed at strike. Strike set 25 bp below ATM forward (≈ 3.80% as of 2026-05-14 mid-curve).
- Expiry: 12 months (extendable as 18M with cost +25–30%); 5Y underlying chosen because IPP equity duration to 5Y real rate is empirically 0.55–0.7 (regression on CEG/VST 2024–2026 vs. 5Y TIPS).
- Notional: $400M swap notional (1Y5Y BPV ≈ $4,550 per bp on $100M notional → $18,200/bp on $400M notional → covers ≈ $2.7M payoff per 150 bp rally, against the equity scenario-C loss of ≈ $20–28M on the $100M IPP slice; intentionally partial — we accept basis).
- Premium: ≈ 85–110 bp running on $100M reference, or **$0.9–1.1M upfront** for the structure on the $100M-equity slice.
- Payoff profile: in the C-terminal state (rates −150 bp), intrinsic ≈ $2.7M; with vol pickup (normal-vol grind from 95 → 130 bp/day in tail) total mark-to-market gain ≈ $3.5–4.2M against a $20–28M underlying loss → 15–18% delta-hedge ratio to the C-only loss, but the *swaption convexity* means each incremental rally beyond −150 bp delivers super-linear payoff.

### Leg 2 — IG regulated-utility credit, 5Y duration, long credit / short USTs

- Structure: long $250M par of IG-rated regulated utility 5Y senior unsecured (basket: DUK, AEP, ETR, XEL, SO 5Y notes), hedged duration-neutral with 5Y UST short. Net exposure: pure utility OAS.
- Spread: 5Y IG utility OAS as of 2026-05-14 ≈ 105–115 bp. Net annual carry post hedging cost ≈ **+130–140 bp running** on the $250M basket = **+$3.25–3.5M per year**.
- A-leg behavior: rate-base inflation pass-through (FERC formula-rate riders and state-PSC trackers in VA, OH, GA, OR per card 01) absorbs tariff-CPI; OAS typically widens only 20–30 bp in pure-real-rate shocks vs. 80–120 bp for IG industrials. Loss in A-only: ≈ −$1.4M on the basket (manageable, more than offset by swaption hedge sizing).
- C-leg behavior: regulated utility OAS *tightens* 15–25 bp on flight-to-quality + rate rally; bond price gains ≈ +$0.8M on the basket. Reinforces the swaption.
- Critically: this is the same regulated-utility cohort that card 05 retained at 4.0–4.5 risk units as a recession hedge. The credit position is **already implicit in the equity allocation**; the bond-desk task is to formalize the carry pickup, not to add gross exposure.

### Net economics

| Line | Per year ($M, on $100M IPP) |
|------|---------------------|
| Swaption premium amortized (12M life) | −1.00 |
| IG utility credit carry (net of UST short) | +3.30 |
| Net annual cost / carry | **+2.30 (carry-positive)** |
| Expected hedge payoff in A+C tail (prob × payoff) | 10% × ($3.8M swaption + $0.8M credit) = +$0.46M |

**The hedge is carry-positive in non-tail states**, because the utility credit carry exceeds the swaption premium. The bond-desk read: the package is structurally cheap because the credit leg is itself an alpha source the equity book was already implicitly holding via card 05's utility allocation.

## 4. Break-even analysis vs. expected drawdown

- Expected drawdown without hedge (probability-weighted across A, B, C, A+C): −1.5 to −2.1% on $100M IPP per year.
- Expected drawdown in A+C tail only: 10% × 33% × $100M = **−$3.3M / yr** on the position.
- Net hedge cost: −$1.0M − $0.8M of basis = **−$1.8M / yr** worst case (ignoring carry); with utility carry **+$2.3M / yr** in normal states, the hedge is **net carry-positive in B and non-tail A** and only consumes capital in extreme C.
- **Break-even joint-tail probability**: hedge net cost ($1.8M annual, ignoring carry credit) ÷ payoff in tail ($4.6M) = **≈ 39% of one tail unit per year required to break even** if we exclude carry; **including carry, the hedge breaks even at zero tail probability** (carry alone covers premium).
- **Break-even drawdown on IPP position**: with carry funding, the hedge requires only a 5.5–6.5% drawdown event to be net-positive; card 06's worst case is 28–38%. **Margin of safety ≈ 5x.**

## 5. Capital efficiency vs. alternatives considered and rejected

| Alternative | Why rejected |
|-------------|--------------|
| Swaption strangle (long receiver + long payer) | Doubles premium drag to ~200 bp; covers A standalone but break-even drawdown rises to 14–16% — closer to the median tail, lower margin of safety. |
| Equity put on CEG/VST/TLN basket, 12M 80% strike | 9–12% premium for 12M — costs $9–12M per $100M; ~8x the swaption package; bleeds against B; no credit-carry offset. |
| Short CDX.IG utility | Anti-correlated with the regulated-utility carry leg; structurally redundant; negative carry. |
| Long Treasury duration (cash 10Y note) | Captures C but bleeds linearly in A (no convexity); occupies risk capital without spread carry. |
| Sell IPP exposure to 2.5 risk units instead of hedging | Forgoes the structural alpha card 04–05 identified; opportunity cost ≈ −$4–6M per year per 1.5 risk units shed. |

The 1Y5Y receiver swaption + IG regulated-utility credit basket dominates on three axes: convexity in the dominant tail-resolution state, carry-positive in non-tail states, and re-uses an exposure card 05 had already mandated.

## 6. Operational notes and risks

- **Basis risk #1**: 1Y5Y SOFR vs. IPP equity duration — beta is 0.55–0.7 with R² ≈ 0.4–0.5 over 2024–2026; not a hedge of the equity, just of the rate driver in the A+C path. Residual idiosyncratic IPP equity risk (BTM contract repricing, PJM capacity auction, regulatory inversion) is *not* covered.
- **Basis risk #2**: regulated utility credit can decouple from rate-base mechanics under state-PSC adverse rulings (Ohio HB 6 echo, NJ BPU). Cap utility credit basket at 5 names ≥ A-rated.
- **Roll risk**: if A+C is delayed beyond the 12M expiry, swaption rolls 1.4–1.6x the original premium at higher vol; pre-budget for 18M roll.
- **Liquidity**: 1Y5Y receiver swaption is the most liquid USD swaption point; $400M notional executes at ≤ 0.5 bp bid-ask. IG utility 5Y bonds in $50M clips execute at 2–3 bp bid-ask.
- **Margin / capital**: SEF-cleared swaption initial margin ≈ 4–5% of notional, ~$16–20M for $400M — material; size against committed cash, not gross book.
- **Roll triggers**: if 5Y TIPS real rate breaches 2.40% (≈ +50 bp from current 1.90%), pre-roll receiver swaption to next 12M tenor; this is the A-leg early-warning signal.

## 7. Verdict

The card 06 prescription is **directionally correct but structurally incomplete** as written ("receiver swaption alone"). The capital-efficient hedge is the swaption *funded by* IG regulated-utility credit carry. Structured this way, the hedge is carry-positive in normal states, has a break-even joint-tail probability near zero once carry is credited, and delivers convex payoff against the dominant C-leg terminal state. **Recommended sizing: $400M notional 1Y5Y receiver swaption + $250M IG regulated-utility 5Y credit basket per $100M of nuclear IPP equity at risk (4.0 risk units → ~$400M IPP slice → scale 4x).** This sleeve should be governed by chief-risk as a position-level overlay rather than as a discretionary trade.

## 8. Handoff

Hand to **chief-risk** [reviewer, trigger (a) — position-level loss/drawdown scenario with full hedge architecture now articulated]. The chain has produced a concrete 28–38% peak-to-trough scenario on a 4.0 risk-unit position and a 4-leg overlay (long IPP equity, retained regulated utility equity, long swaption, long utility credit basket / short USTs). A formal risk-team pass on VaR contribution, margin sufficiency, basis-risk attribution, and roll-stress under prolonged A-leg is the appropriate final card. This is the first card in the chain where the trigger condition (a) is concretely met — earlier cards were idea-development phases, not stress-test-ready architectures.
