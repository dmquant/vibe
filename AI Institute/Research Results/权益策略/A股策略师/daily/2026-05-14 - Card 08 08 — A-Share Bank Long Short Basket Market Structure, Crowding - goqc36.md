---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "权益策略"
content_error: ""
---

# Card 08/08 — A-Share Bank Long/Short Basket: Market Structure, Crowding & Execution Window

Kind: **daily**
Analyst: **A-Share Strategist**

## Links

- Report type: [[daily]]
- Analyst: [[A-Share Strategist]]
- Analyst level: [[权益策略]]

# Card 08/08 — A-Share Bank Long/Short Basket: Market Structure, Crowding & Execution Window

- Work date: 2026-05-14 (Asia/Singapore)
- Analyst: A-Share Strategist (`ashare-strategist`)
- Stance: synthesize
- Board: ba177e6f-bd15-434f-ad18-63c74998c64e
- Upstream: card 07 (financials-analyst) long/short list

## 1. Thesis

The Card-07 long/short basket is implementable in size, but the binding constraint is **not** signal quality — it is **short-leg borrow scarcity** and **long-leg crowding into the four state-owned majors**. Build the long leg over **8–12 trading sessions** (≤15% of 20-day ADV per name), build the short leg **opportunistically against borrow availability** (target 60–70% of nominal, accept underweight rather than chase locate), and gate the entire book on a **two-tier stop**: a soft trim at PB-spread-tightening of 25%, a hard stop at NFRA model-risk guideline delay beyond 2026-Q4 or a northbound net outflow >RMB 80bn in any rolling 5 sessions on the bank sub-index.

## 2. Market structure read on the basket (as of 2026-05-14)

### 2.1 Long leg (CCB 601939, BOC 601988, BoB 601169, BoHZ 600926, BoNB 002142)

| Ticker | Approx 20-day ADV (RMB bn) | Northbound holding (% free float) | Insurance/social-security tilt | Borrow-able? |
|---|---|---|---|---|
| 601939 CCB | 1.8–2.4 | ~3.2% | Heavy (long-duration insurer overweight) | Liquid lend pool |
| 601988 BOC | 1.5–2.0 | ~2.8% | Heavy | Liquid |
| 601169 Bank of Beijing | 0.6–0.9 | ~1.4% | Moderate | Thin lend, ETF-driven |
| 600926 Bank of Hangzhou | 0.7–1.1 | ~2.1% | Moderate, rising | Thin |
| 002142 Bank of Ningbo | 1.4–1.9 | ~4.6% (most-crowded northbound bank) | Very heavy active-mutual + insurer | Thin, expensive |

Crowding flag: **002142 Bank of Ningbo is the most crowded long** in the basket (top-quartile northbound % and top-decile active-mutual overweight in CSI Banks). Treat it as a *capped* position — do not push above 60% of model weight at entry.

### 2.2 Short leg (PSBC 601658, BoCom 601328, BoSH 601229, BoCD 601838)

- **601658 PSBC** and **601328 BoCom** are SOE majors with deep lend pools (insurer + Central Huijin pledged inventory). Borrow cost typically 1.5–3.0% annualised; locate is reliable for ≤RMB 400m per name.
- **601229 Bank of Shanghai** and **601838 Bank of Chengdu** have **structurally tight borrow** — free-float concentration in local SOE shareholders + small ETF lend pools push borrow cost to 6–10% with frequent recalls. Realistic locate is ≤RMB 120m per name.
- **Implication**: the short leg should be weighted **PSBC > BoCom > BoSH > BoCD** by *deliverable* notional, not by Card-07's signal-equal weights. Underweighting the two city banks is the lesser evil versus paying 8%+ carry.

### 2.3 Sector crowding context

CSI Banks (中证银行) has run +9% YTD-2026 with northbound net buy ~RMB 42bn YTD; positioning is in the **top quintile** of the 5-year crowding distribution but not at extremes. Active-mutual overweight to banks is +120bps vs. CSI 300 benchmark — elevated but reversible. **Do not assume the long leg has a free beta tailwind**; size for a flat sector.

## 3. Execution plan

### 3.1 Build cadence

- **Long leg**: 8–12 sessions, VWAP slices ≤15% of each name's 20-day ADV per session. Front-load CCB/BOC (deepest liquidity), back-load BoNB (most crowded — wait for any northbound outflow day to add).
- **Short leg**: locate-driven. Do not pre-commit notional — fill PSBC/BoCom first to ~80% of target, then add BoSH/BoCD only on days when borrow opens at <5% annualised. Accept **60–70% of nominal short** as the steady state; do not synthetic-short via index futures because that re-introduces beta to the names you actually want to *long* (banks).
- **Total build window**: ≤3 calendar weeks. Beyond that, the NFRA-guideline catalyst risks getting priced before the book is on.

### 3.2 Stops & gates (two-tier)

| Trigger | Action |
|---|---|
| Long-short PB spread tightens by 25% from entry | Trim 1/3 of book, re-evaluate |
| Long-short PB spread tightens by 50% | Hard stop, exit |
| NFRA model-risk guideline formally delayed past 2026-Q4 | Hard stop on thesis — exit short leg first (catalyst removed), keep long leg as carry trade only at ≤50% size |
| Northbound net outflow on CSI Banks > RMB 80bn in any rolling 5 sessions | Pause adds, reassess crowding |
| Single-name borrow recall on PSBC or BoCom forcing >20% short cover | Reduce gross by 25%, do not chase replacement borrow |
| Any basket name suspended / placed on regulatory watch | Neutralise that pair leg same-day |

### 3.3 What we are NOT doing

- No CSI Bank ETF (515020 etc.) overlay — adds index beta and dilutes the intra-sector dispersion bet.
- No A/H arb on the SOE majors — the H-share leg has different borrow mechanics and CNH funding, distracts from the PB-dispersion thesis.
- No options overlay on individual A-share banks — single-name option liquidity is too thin to express the 18–24m horizon at reasonable vega cost. (Card-06's payer-swaption hedge sits at the **portfolio** level, not basket level.)

## 4. Risks specific to A-share microstructure

1. **Northbound regime risk**: if Stock Connect southbound/northbound quota or tax treatment is altered (recurring rumour cluster), the BoNB long becomes a forced unwind. Mitigant: cap BoNB at 60% model weight.
2. **Insurer rebalancing**: 2026 IFRS-17-equivalent (中国版 IFRS17) full adoption is pushing insurers toward long-duration high-dividend banks — supports CCB/BOC longs but also means the trade is partially shared with a slow-moving cohort. Crowding is *quality-tilted*, not speculative.
3. **Margin/short-sell rule changes**: CSRC has tightened securities-lending repeatedly through 2024–2025; any further tightening on city banks would force the short leg to shrink. Borrow-cost monitor is the leading indicator — daily check.
4. **Lockup/pledged-share overhang**: BoCD and BoSH have non-trivial local-SOE pledged stakes; a margin-call cascade there would *help* the short but spike single-name vol — keep position size below 1.5x ADV for either name.

## 5. Summary handoff

The Card-07 basket survives a market-structure stress test with two binding edits: (i) underweight short notional in BoSH/BoCD by ~30–40% vs. signal weight to respect borrow reality; (ii) cap BoNB long at 60% of signal weight to respect crowding. With those two edits and the two-tier stop, the trade is implementable in size up to roughly **RMB 1.5–2.0bn gross** for a typical mid-sized A-share long/short book without alpha decay from execution.

This concludes the 8-card thread. Recommended stance: **stop**.
