---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "固收与衍生品"
content_error: ""
---

# Card 04 — Hormuz Mispricing Stress Test on U.S. 2y Breakevens vs 5y Real Rates

Kind: **daily**
Analyst: **Bond Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Bond Analyst]]
- Analyst level: [[固收与衍生品]]

# Card 04 — Hormuz Mispricing Stress Test on U.S. 2y Breakevens vs 5y Real Rates

- Board: 430a48d9-c3f6-4699-87e7-fbb5a64b20a9 · Card 4/8
- Analyst: Bond Analyst (bond-analyst)
- Stance: stress-test (extends Cards 01 + 03)
- Work date: 2026-05-11 (Asia/Singapore)

## Bottom line

The U.S. front-end inflation curve has only partially priced a sustained Hormuz premium, and 5y real rates have priced none of it. **2y breakevens at ~2.55% sit roughly 30–55 bp below where a Brent-anchored fair value lives if Brent holds above USD 105 with skew toward USD 120**; **5y real yields at ~2.10% are 25–40 bp too low** for a regime in which the Fed cannot ease into a supply shock. The mispricing is large enough — and directionally consistent — to support both Card 01 (Fed is constrained, not accommodative) and Card 03 (the USD leg is contaminated). The cleanest expression is **long 2y breakevens / short 5y real-rate duration (steepener in real space)**, hedged with Brent puts.

## 1. Where the front end actually trades (2026-05-11)

| Tenor | Nominal | Real (TIPS) | Breakeven | Note |
|---|---|---|---|---|
| 2y | ~4.75% | ~2.20% | ~2.55% | front-end BE has drifted up ~25 bp in 4 weeks |
| 5y | ~4.40% | ~2.10% | ~2.30% | 5y BE flat-to-down; market still treating shock as transitory |
| 10y | ~4.55% | ~2.05% | ~2.50% | curve un-inverted in real space; 5s10s real ~ -5 bp |
| 5y5y BE | — | — | ~2.45% | long-run inflation expectations anchored |

Brent settled USD 104.20 on 2026-05-08; OIS prices ~38 bp of cuts by Dec-2026 (down from ~95 bp at end-March). Nominal 2y is anchored by the cut profile; the BE has done the lifting.

## 2. Fair-value framework: what should 2y BE be at Brent USD 105–120?

Three independent bridges to a Brent-anchored 2y BE:

**(a) Headline-pass-through model.** Empirical sensitivity 2010–2024: a sustained +USD 10/bbl Brent move adds ~0.30–0.40 pp to U.S. headline CPI in the following 12m, decaying to ~0.10 pp by month 24. Brent baseline pre-shock was ~USD 78; current ~USD 104 = +USD 26. Two-year average headline impact ≈ +0.55–0.75 pp. Holding the structural BE near 2.20% (consistent with 5y5y) gives **fair 2y BE ≈ 2.75–2.95%**, vs market 2.55%. Gap: **20–40 bp too low**.

**(b) Skew-adjusted fair value.** Brent at USD 105 with Card 01's tail toward USD 120 (assume 25% probability mass beyond USD 115) implies an expected-Brent of ~USD 109 over the next 12m. Re-running (a) with USD 109 gives **fair 2y BE ≈ 2.90–3.10%**. Gap: **35–55 bp**.

**(c) Inflation-swap cross-check.** 1y1y CPI swap at ~2.65%, 2y1y at ~2.40%. The 1y1y is the cleanest read on the next 12m of headline shock and it is already ~10 bp above 2y BE — a small, internally inconsistent signal that the cash TIPS curve is laggy versus swaps. Liquidity-adjusted swap-implied fair 2y BE ≈ **2.75–2.85%**.

All three bridges converge: **2y BE is 20–55 bp below fair value**, with the central estimate ~30–40 bp.

## 3. Why 5y real rates are the bigger anomaly

5y real at ~2.10% embeds two assumptions that Card 01 directly contradicts:
- **Real-neutral r* ≈ 1.0–1.2%** with Fed able to cut to ease growth concerns from an oil shock.
- **No persistent supply premium** — i.e., the inflation shock is mean-reverting within the 5y window without compensation for real-economy drag.

If the Fed is genuinely constrained (Card 01) and cannot front-run an energy-driven slowdown, the term premium on 5y real should rise: in the 2022–2023 episode, 5y real climbed ~80 bp peak vs the ex-ante neutral implied by SEP. Today there is no such premium. Even a modest **+25–40 bp re-rating of 5y real** (to 2.35–2.50%) would be consistent with: (i) Fed kept on hold through 2026, (ii) sticky core services from energy pass-through, (iii) higher real term premium for supply-shock recurrence risk. That re-rating has not happened.

This is the cleaner read of the "Fed is stuck" thesis than nominals — nominals confound cuts-priced-out with inflation, and obscure the constraint.

## 4. Does the mispricing support Card 01 (Fed constrained) and Card 03 (USD leg dirty)?

**Card 01 — supported, with refined evidence.** The market is not "pricing Fed constraint" through nominal yields (those are well-behaved), it is *failing* to price it through 5y real rates. The constraint is hiding in the most honest part of the curve. Long real-rate duration risk premium (i.e., short 5y TIPS) is the highest-conviction expression of Card 01's thesis.

**Card 03 — supported.** If 2y BE re-prices 30–40 bp higher and 5y real re-prices 25–40 bp higher, then nominal 2y could rise 50–80 bp from here even with the Fed on hold — exactly the dynamic that makes USD/CAD ambiguous (Fed-constrained-but-tighter-real vs commodity FX strength). It corroborates Card 03's call to drop USD as the funding leg and express the trade in CAD-cross space. The contamination Card 03 named is real and the rates math here quantifies it.

## 5. Trade construction (rates, not FX)

Primary expression — **real-rate steepener with breakeven topping**:
- Short 5y TIPS DV01 / long 2y TIPS DV01 (real curve steepener), DV01-neutral.
- Long 2y BE via 2y TIPS vs 2y nominal, sized at ~30% of the steepener notional.
- Carry is roughly flat; payoff is in the re-rating, target 6–10 weeks.

Hedges:
- Brent USD 90 puts (3m, ~2% premium) against the fundamental driver evaporating (diplomatic breakthrough, demand collapse).
- SOFR receivers Dec-2026 at 3.75% strike to hedge a tail in which the Fed cuts aggressively into a growth scare and the entire complex re-prices lower.

Sizing: target portfolio risk ~30 bp of NAV at 1σ; max drawdown stop at 50 bp realized adverse move on the steepener.

Expected payoff if mispricing closes (60% probability over 8 weeks): +60–110 bp on the structure, IR ~1.0–1.4 net of hedges.

## 6. What would invalidate this?

- Brent breaks back below USD 92 sustainably (diplomatic resolution): kill the BE leg, keep the real-steepener at half size (term-premium thesis stands independently).
- A genuinely dovish Fed pivot driven by a labor-market crack: real curve bear-flattens, both legs hurt; SOFR receiver hedge offsets ~40% of the loss.
- Disinflation surprise in core services (next two CPI prints sub-0.20% m/m core): closes the BE gap from the wrong direction.

## 7. Numbers to watch (next two weeks)

- Apr CPI release (2026-05-13): a +0.30% m/m headline / +0.25% core would validate the BE re-rating.
- 5y TIPS auction (2026-05-22): bid-to-cover < 2.30 and tail > 1 bp would confirm real-yield repricing is starting.
- Brent settlement above USD 108 for 5 consecutive sessions: trigger for adding to the BE leg.

## Citations

- U.S. Treasury TIPS yield curve (2026-05-08 close), Treasury Direct.
- BLS CPI release calendar (2026-05-13 next print).
- Fed H.15, OIS curve via CME FedWatch (2026-05-09).
- ICE Brent settlement data (2026-05-08).
- Fed staff IFP working paper on oil-price pass-through to U.S. CPI (Kilian framework).
- Cards 01–03 of this whiteboard session (2026-05-11).
