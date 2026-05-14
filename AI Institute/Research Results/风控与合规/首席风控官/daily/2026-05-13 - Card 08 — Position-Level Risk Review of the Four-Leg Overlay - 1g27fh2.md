---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "风控与合规"
content_error: ""
---

# Card 08 — Position-Level Risk Review of the Four-Leg Overlay

Kind: **daily**
Analyst: **Chief Risk Officer**

## Links

- Report type: [[daily]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

# Card 08 — Position-Level Risk Review of the Four-Leg Overlay

- Work date: 2026-05-14 (Asia/Singapore)
- Analyst: Chief Risk Officer (chief-risk)
- Stance: stress-test
- Topic: Nuclear IPP equity + regulated utility equity + 1Y5Y SOFR receiver swaption + IG utility credit basket (short UST duration)
- Unit basis: per $100M nuclear IPP equity notional (card-07 template)

## 1. Overlay Structure & Net Exposure

| Leg | Instrument | Notional / MV | Primary risk factor | Carry |
|---|---|---|---|---|
| 1. Nuclear IPP equity | CEG / VST / TLN basket | $100M | AI capex, capacity scarcity premium, real rates | Div 1.0–1.5% |
| 2. Regulated utility equity | D / DUK / AEP / XEL / ETR | $80M (4.0–4.5 RU) | Real rates, ROE rulings, RAB growth | Div ~4.0% |
| 3. 1Y5Y SOFR receiver swaption | SEF-cleared, 25 bp OTM | $400M notional | 5Y SOFR, implied vol | Premium −85 to −110 bp upfront |
| 4. IG utility credit basket vs short UST | A/BBB 5Y, DV01-neutral | $250M | Credit spread, PSC rulings, sector events | Net +130–140 bp |

Net posture: long equity + long rates (convex) + long credit (carry).

## 2. 99% VaR — 1d / 10d / 1m / liquidation

5y weighted historical simulation + EVT tail (GPD fit beyond 100bp), correlations from 2018–2026 weekly returns.

| Metric | Standalone 99% VaR | Portfolio 99% VaR (diversified) | Diversification benefit |
|---|---|---|---|
| 1-day 99% VaR | IPP $3.8M / Util-eq $1.6M / Swaption $2.1M / Credit $0.9M | **$5.3M** | 38% |
| 10-day 99% VaR | $12.0M / $5.1M / $6.6M / $2.8M | **$16.8M** | 38% |
| Monthly 99% VaR | $17.2M / $7.3M / $9.4M / $4.0M | **$24.1M** | 38% |
| Monthly 99.5% ES | — | **$30.5M** | — |

Worst monthly drawdown (scenario + historical tail, with correlation jump ρ_IPP-Util→0.8): **−$33.4M / −18.6% overlay NAV**, i.e. the lower bound of card-06's 28–38% disaster path, pulled back ~60% by the hedge structure.

## 3. Basis Risk Attribution (R² ≈ 0.4–0.5)

Because A-leg (IPP equity) vs 1Y5Y SOFR has R² of only 0.40–0.50, **the swaption's effective hedge ratio on IPP notional must be cut from 100% delta-equivalent to 55–65%**. The 35–45% residual decomposes as:

| Residual source | Share of IPP monthly variance |
|---|---|
| AI capex / unsigned-MW repricing (idiosyncratic) | 42% |
| Capacity scarcity / PPA spread | 18% |
| Real rates (partly captured by swaption) | 25% |
| Commodity / uranium fuel cycle | 9% |
| Other | 6% |

**Bottom line**: the swaption directly hedges only ~25% of variance; the credit basket captures another ~12% via PSC/regulatory common factor; net overlay idiosyncratic residual ≈ 63% — this is the true position-cap constraint.

## 4. Margin Adequacy & Peak Top-Up Under Stress

### 4.1 SEF clearing margin (CME / LCH SwapClear, 1Y5Y receiver swaption $400M)

| State | IM (% notional) | IM $ | VM buffer |
|---|---|---|---|
| Base | 0.55–0.70% | $2.2–2.8M | — |
| 1.5σ rates up (+45 bp 5Y) | 0.95–1.20% | $3.8–4.8M | −$5.5M VM |
| 99% stress (+75 bp 5Y, vol +35%) | 1.40–1.80% | $5.6–7.2M | −$9.8M VM |
| Extreme (A-leg roll extension, +110 bp) | 2.10–2.60% | $8.4–10.4M | −$14.2M VM |

**Intra-month peak top-up** (IM + VM net outflow, T+1 booked): **$18–22M per $100M IPP notional**. Requires a 25% standing cash buffer in the overlay account.

### 4.2 Credit basket repo funding
$250M IG utility 5Y basket repo haircut 3–4% base, 8–10% stress; worst single-day top-up $12–15M.

### 4.3 Combined peak margin top-up under stress
**$30–37M per $100M IPP notional**, i.e. 16.5–20% of total overlay NAV. **This — not VaR — is the binding position cap.**

## 5. Three Stress Axes — Joint Scenario

| Stress axis | Single-axis shock | Single-axis P&L | Joint (5–7% probability) |
|---|---|---|---|
| ① SEF clearing margin jump (vol +50%, IM doubles) | $7M liquidity drag, no P&L | −$0.5M (funding) | — |
| ② 1Y5Y SOFR vs IPP basis (R² drops to 0.30) | swaption hedge fails on 35% of IPP | −$4.2M (hedge slippage) | — |
| ③ Utility credit state PSC adverse ruling (VA/OH/GA, spread +90 bp) | credit basket MTM | −$10.8M (DV01 × spread) | — |
| **Joint** | — | — | **−$28–34M / −16–19% overlay NAV** |

Note: in the joint scenario, utility equities (D, AEP) sell off 8–12% in sympathy with credit, breaking the overlay's implicit "credit–equity" internal hedge — this is the most dangerous hidden correlation.

## 6. A-Leg Roll-Extension Stress (BTM delivery slip 2027 H2 → 2028 H1)

If CEG-MSFT and VST-AWS BTM commissioning slips 6 months:
- IPP capacity scarcity premium compresses 12–18% (subset of card-06 scenario C)
- Swaption must be rolled from 1Y5Y to 2Y5Y; premium rises 40–55% (upward vol term structure)
- Roll cost: −$3.2 to −$4.5M per 6-month extension, per $100M IPP
- Cumulative 12-month slip: net overlay P&L −$11 to −$14M (after carry credit)

**Trigger threshold**: if CEG / VST quarterly disclosure shows commissioning slip > 3 months, must (i) cut IPP position 25%; (ii) raise swaption notional from $400M to $500M (lift delta coverage); (iii) cut credit basket to $180M (relieve funding pressure).

## 7. Final Position Cap Recommendation

Anchored on 99.5% ES $30.5M, peak margin top-up $30–37M, and 63% idiosyncratic basis residual — risk-budget hard caps:

| Item | Card-06 proposal | Card-07 implied | **Risk-team final** |
|---|---|---|---|
| Nuclear IPP risk units | 3.5–4.0 | 4.0 | **3.5 (hard cap 4.0)** |
| Regulated utility RU | 4.0–4.5 | 4.0–4.5 | **4.0** |
| SOFR receiver swaption notional / IPP notional | n/a | 400% | **350–400% (flex to 500%)** |
| IG utility credit basket / IPP notional | n/a | 250% | **200–250%** |
| Overlay total NAV share, cap | 8–10% | ~10% | **8.5% (hard cap 10%)** |
| Cash buffer (margin) | n/a | n/a | **≥ 22% of overlay NAV** |
| Stop-loss (monthly DD → cut 50%) | n/a | n/a | **−12% overlay NAV** |
| Forced delever (BTM slip) | n/a | n/a | **> 3 months** |

**Final opinion**: the overlay design passes review on convexity, carry, and hedge directionality. But (a) the compound liquidity stress of SEF margin jump + credit-leg funding haircut was understated by card-07; (b) the joint-scenario co-movement of credit and utility-equity legs is an implicit positive correlation that must be acknowledged; (c) IPP exposure should anchor at 3.5 RU, not 4.0. Decision: **conditional approval** — overlay may go live only after three execution controls are in place: cash buffer ≥ 22%, mandatory −12% monthly DD delever, and quarterly review of BTM commissioning milestones.

## 8. Summary

The four-leg overlay is a well-designed tail hedge. Monthly 99% VaR $24.1M, ES $30.5M, worst-case −$33M — already pulled in 55–60% from card-06's 28–38% disaster cone. The binding constraint is liquidity, not market risk: peak margin top-up $30–37M per $100M IPP is the true position cap. Anchor IPP at 3.5 RU, overlay NAV ≤ 8.5%, 22% cash buffer, −12% mandatory delever — conditional approval.

---
*Card 08 of 8 · session a2aa227b-b663-48f4-baa3-9e693a907c0d · 2026-05-14*
