---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "固收与衍生品"
content_error: ""
---

# Card 03 — AI Capex Credit Term Structure and the Duration Trap

Kind: **daily**
Analyst: **Bond Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Bond Analyst]]
- Analyst level: [[固收与衍生品]]

# Card 03 — AI Capex Credit Term Structure and the Duration Trap

- Date (Asia/Singapore work-date): **2026-05-12**
- Analyst: Bond Analyst (specialist, rates/credit/duration)
- Stance: **stress-test** of Card 01's 75–125 bp signal and Card 02's 25–35% nameplate slippage
- Board: a79d6fde-2059-4e42-a438-1693623b09e0 · Card 3/8

## 1. Thesis

Given a confirmed 25–35% physical slippage in FY26–FY27 AI nameplate (Card 02) and rising behind-the-meter (BTM) gas-turbine dependence, the credit curve should bifurcate, not parallel-shift. **IG hyperscaler senior unsecured paper deserves only a modest 15–35 bp widening** (cash-flow cushion absorbs the utilisation hit), **while non-recourse project-finance term loans and merchant/commercial IDC notes warrant 150–400 bp of repricing**, driven by lease-tail risk, PPA gap risk, and ABS-style cash-trap covenants. Card 01's 75–125 bp signal is best read as a **blended index spread**: it confirms when the IG-vs-project-finance basis widens by ≥ 60 bp over a 4-week window; it falsifies if the basis stays inside 25 bp while IG alone moves.

## 2. Why bifurcation, not parallel shift

| Tranche | Typical tenor | Cash-flow source | Slippage exposure | Re-pricing range |
|---|---|---|---|---|
| Hyperscaler IG senior (MSFT/GOOG/META/AMZN/ORCL) | 5–30y | Diversified op CF, >USD 100bn liquidity each | Capex deferral *helps* FCF; nameplate slippage is a margin issue, not a solvency issue | **+15 to +35 bp** vs UST |
| BBB-/BB+ data-center REITs (EQIX, DLR, and the commercial IDC complex) | 7–12y | Contracted lease revenue, 60–80% IG tenants | Slippage compresses lease escalators; BTM gas exposure raises opex variance | **+60 to +150 bp** |
| Project-finance term loan B / private credit (single-site AI campuses) | 5–8y mini-perm | Single-tenant take-or-pay, often with PPA gap | Direct hit: a 25–35% nameplate miss = 25–35% revenue miss until cure | **+200 to +400 bp**, plus covenant repricing |
| Merchant / build-to-suit IDC notes (no anchor tenant or weak PPA) | 5–10y | Spot lease + uncontracted power pass-through | Worst case: stranded shell with BTM gas LCOE > contracted lease rate | **+300 to +600 bp** or refinancing failure |

The fundamental asymmetry: **hyperscaler balance sheets are short-duration cash machines funding long-duration physical assets via the public IG market**, while **project finance is long-duration cash claims on a single physical asset funded by mid-duration private debt**. Nameplate slippage transfers duration risk *from hyperscalers to their landlords and lenders* through capex deferral and lease re-negotiation — the classic duration trap.

## 3. Stress-testing Card 01's 75–125 bp signal

Card 01 nominated a 75–125 bp widening in "AI-linked credit spreads" as the confirming signal for the framework shift. Decomposed:

**Confirming pattern (signal is real):**
1. IG hyperscaler OAS widens 20–30 bp **and**
2. CMBS/data-center conduit AAA-AA widens 50–80 bp **and**
3. Single-B project-finance secondary marks (BWIC colour, where visible) widen 150–300 bp **and**
4. The IG–project-finance basis widens by ≥ 60 bp over 20 trading days.

If all four fire, the blended index moves into the 75–125 bp zone and Card 01's call is validated.

**Falsifying pattern (signal is noise):**
- IG hyperscaler OAS widens 75–125 bp in isolation (i.e., rates beta or broad IG beta), while project-finance spreads are flat. This would mean the move is duration / macro, not AI-specific. Fade it.
- Or: project-finance widens but IG tightens (flight-to-quality within the AI complex). This is *intra-thesis rotation*, not framework breakage — re-position long IG / short project-finance, but do **not** treat it as a Card 01 macro signal.

**Threshold table (analyst dashboard):**

| Indicator | Confirm-level | Falsify-level | Source |
|---|---|---|---|
| MSFT 10y OAS vs UST | > +75 bp (now ~50 bp) | < +55 bp | TRACE / Bloomberg BVAL |
| EQIX/DLR 10y OAS | > +180 bp (now ~115 bp) | < +130 bp | TRACE |
| Data-center CMBS AAA-AA basis | > +90 bp | < +50 bp | JPM CMBS index |
| IG-vs-PF basis (synthetic) | > +200 bp | < +120 bp | analyst construct |
| Private credit BDC marks on AI campus loans | mark-down > 5 pts | flat | quarterly BDC 10-Q |

## 4. Duration trap mechanics

The duration trap arises from a **maturity mismatch between the asset (15–25y useful life, but technology half-life of 3–5 years for GPUs), the lease (7–15y), and the financing (5–8y mini-perm)**. Three failure modes:

1. **Refi wall in FY29–FY31.** A wave of 2024–2026 vintage project-finance term loans matures into a market that may have repriced AI infrastructure risk. If utilisation is 55–70% as Card 01 projects, refinancing happens at +200 to +400 bp wider — equity returns at the project SPV collapse.
2. **PPA gap → BTM gas → opex variance.** Card 02's BTM gas pivot means project SPVs absorb fuel price risk that was supposed to sit with the utility. Henry Hub volatility now flows into DSCR. A 2-sigma gas move can break a 1.25× DSCR covenant.
3. **GPU obsolescence vs lease tail.** If Blackwell-class GPUs are functionally obsolete by FY29 but the lease runs to FY36, the hyperscaler tenant has a strong incentive to re-trade the lease. This is a one-way option *against* the IDC landlord and its lenders.

## 5. Positioning recommendation

**Long:**
- Hyperscaler 5–10y IG senior at +50–75 bp. Spread cushion + capex-deferral optionality.
- A-share UHV equipment / domestic gas-turbine / regulated power names (carrying Card 02's view) — funded via short data-center REIT proxy where available.

**Short / underweight:**
- Single-tenant project-finance term loans without strong PPA + IG-tenant double-cover.
- Commercial IDC HY notes (2027–2030 maturities) trading inside +400 bp.
- Long-duration data-center REIT equity as a *proxy* for the long-duration IDC credit short (where bonds are illiquid).

**Curve:** within hyperscaler IG, prefer **belly (7y)** over long end (30y). The 30y carries unrewarded duration if BTM gas / regulatory pushback compresses growth assumptions over the next 18 months.

## 6. What would change the call

- Hyperscalers signing 15–20y take-or-pay leases with **on-balance-sheet** treatment → transfers duration risk to IG balance sheets, IG OAS widens *more* than 35 bp, project-finance tightens. Reverse the trade.
- PJM / ERCOT capacity-market reform that hard-caps BTM gas additions → project SPVs lose the BTM escape valve, project-finance widens further (good for the short), but utility-scale gen names re-rate (good for the long).
- A named hyperscaler announcing a > 20% FY27 capex cut → confirms Card 01 immediately; IG initially widens then tightens as FCF improves; project finance widens permanently.

## 7. Open questions for the next analyst

- Which named issuers in the BBB-/BB+ data-center REIT / commercial IDC complex carry the highest near-term refi risk and lowest covenant headroom? Map specific CUSIPs / issuers to the +200 to +400 bp scenario.
- What is the LGFV / China onshore analogue? Are东数西算 SPV bonds priced for the same physical-slippage risk, or is the implicit local-gov backstop masking it?

## Footer

Report date: **2026-05-12** (Asia/Singapore). Author: bond-analyst. Stance: stress-test. Confidence: 0.62.
