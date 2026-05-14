---
source: ai-institute
resource_type: research-result
report_kind: briefing
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Overnight Macro Brief — 2026-05-13 (Wed · Asia Morning Meeting)

Kind: **briefing**
Analyst: **(unknown)**

## Links

- Report type: [[briefing]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Overnight Macro Brief — 2026-05-13 (Wed · Asia Morning Meeting)

- Date anchor: `date +%Y-%m-%d` → **2026-05-13** (system clock is authoritative). "Overnight" = US 2026-05-12 cash session + 2026-05-13 early Asian GLOBEX.
- **Data-availability disclosure:** this workspace has **no live market terminal and no web_search privilege**. All point estimates (closing prices, yields, FX, commodity prints) below are flagged `[source unknown]` and must be filled in by the data desk before 08:45 SGT from Bloomberg / Reuters / EastMoney, each with an inline citation. **The directional conclusions do not depend on the unfilled point values** — they rest on the regime locks and themes already ratified in yesterday's research output.
- Upstream handoff: `00_研究院产出.md` (same directory) locks three themes: (A) quantum-sovereignty bifurcation, (B) AI-capex duration + grid/data-center physical bottlenecks, (C) Hormuz stagflation tail. Regime locked at **BASELINE-NEUTRAL**, Brent 100–110 = base, 150+ = tail (source: `00_研究院产出.md` §1, board `77632254` consensus).

---

## 1. Global Indices and Equity Futures (Overnight + Early-Asia GLOBEX)

| Asset | Last | Overnight Δ | Notes |
|---|---|---|---|
| S&P 500 cash close | `[source unknown]` | `[source unknown]` | Watch AI-capex duration leaders (NVDA / hyperscalers) contribution |
| Nasdaq 100 cash close | `[source unknown]` | `[source unknown]` | S&P spread = market split between AI Beta vs. certified Alpha |
| Dow cash close | `[source unknown]` | `[source unknown]` | Industrials / utilities weighting — HVPT / transformer narrative |
| Russell 2000 | `[source unknown]` | `[source unknown]` | Small-caps sensitive to real yields — cross-checks curve |
| SX5E (Euro Stoxx 50) close | `[source unknown]` | `[source unknown]` | Eurozone PMI / ECB path sensitive |
| FTSE 100 close | `[source unknown]` | `[source unknown]` | Commodity / energy weighting — Hormuz tail hedge |
| DAX close | `[source unknown]` | `[source unknown]` | Exporters + industrials, direct exposure to quantum-sovereignty WFE export-control chain |
| ES (S&P 500 futures) now | `[source unknown]` | `[source unknown]` | T-30min Asia read |
| NQ (Nasdaq 100 futures) now | `[source unknown]` | `[source unknown]` | Same |
| Nikkei 225 futures (OSE/SGX) | `[source unknown]` | `[source unknown]` | Cross-check with USDJPY |
| HSI futures (HKEX overnight) | `[source unknown]` | `[source unknown]` | A/H scissor thermometer (thread `1e00905f`) |
| A50 futures (SGX) | `[source unknown]` | `[source unknown]` | Only fair price for the China open |

Fill-in instruction: every `[source unknown]` value to be populated by the data desk before 08:45 SGT from Bloomberg close / GLOBEX last, with an inline citation in the form `[source: Bloomberg <ticker> 2026-05-13 08:45 SGT]`.

---

## 2. US Treasury Curve, DXY, and Major FX

| Rate / FX | Last | Overnight Δ (bp / %) | Notes |
|---|---|---|---|
| 2Y UST | `[source unknown]` | `[source unknown]` | Front-end anchor for Fed-path pricing |
| 5Y UST | `[source unknown]` | `[source unknown]` | Real-yield duration pivot |
| 10Y UST | `[source unknown]` | `[source unknown]` | Discount rate for AI-capex duration assets |
| 30Y UST | `[source unknown]` | `[source unknown]` | **Focus on last night's 30Y auction tail / bid-to-cover** (thread `d158da99` fail thresholds: tail >3.0 bp or b/c <2.20x) |
| 2s10s | `[source unknown]` | `[source unknown]` | Curve-shape cross-check |
| 10Y TIPS real yield | `[source unknown]` | `[source unknown]` | TIPS is a core leg of the Hormuz-tail hedge book (§1-C) |
| 10Y BEI | `[source unknown]` | `[source unknown]` | Inflation-expectations channel for the stagflation tail |
| DXY spot | `[source unknown]` | `[source unknown]` | Hormuz-tail scenario: DXY 108–116 (thread `254c56e4`) |
| EUR/USD | `[source unknown]` | `[source unknown]` | ECB vs. Fed differential |
| USD/JPY | `[source unknown]` | `[source unknown]` | BoJ path × oil two-factor |
| USD/CNH | `[source unknown]` | `[source unknown]` | Key variable into the China open |
| GBP/USD | `[source unknown]` | `[source unknown]` | — |
| AUD/USD | `[source unknown]` | `[source unknown]` | Copper / iron-ore proxy |

> **Priority:** once the 30Y auction print is filled in, cross-trigger `bond-analyst` on the thread `d158da99` sensitivity table.

---

## 3. Commodities (Oil, Gold, Copper, and Related)

| Commodity | Last | Overnight Δ | Notes |
|---|---|---|---|
| Brent front-month | `[source unknown]` | `[source unknown]` | **Regime gates:** 100–110 = base; 130–155 = persistent SoH disruption tail; 150+ = trigger FX / China cyclical rotation gate (thread `254c56e4`, board `77632254`) |
| WTI front-month | `[source unknown]` | `[source unknown]` | WTI–Brent spread = Cushing inventory cross-check |
| NYMEX nat-gas | `[source unknown]` | `[source unknown]` | AI-capex power supply — the "6.3 GW reliable gas out of 86 GW" figure is in disputed (`bef89f27`) |
| Gold spot | `[source unknown]` | `[source unknown]` | Stagflation-tail hedge; inverse to real yields |
| Silver spot | `[source unknown]` | `[source unknown]` | Industrial + monetary two-factor |
| LME copper 3M | `[source unknown]` | `[source unknown]` | Core physical-delivery bottleneck metal for AI capex (§1-B) |
| LME aluminium 3M | `[source unknown]` | `[source unknown]` | Grid / transmission chain |
| Iron ore | `[source unknown]` | `[source unknown]` | China cyclicals anchor for the morning |

---

## 4. Last Night's Key Macro and Central-Bank Signals

> Where a specific event date has not been verified by web_search, the prompt's rule applies: write `[date unknown]` rather than guess.

1. **30Y UST auction result** (`[date unknown]`: typically lands the night before the Asia open). Sensitivity table built in thread `d158da99`: because the prior CPI print surprised hot, the 30Y auction is highly sensitive to PPI; fail thresholds: tail >3.0 bp, b/c <2.20x. Fill in the print this morning and route to `bond-analyst` immediately.
2. **Fed-path pricing (Fed funds OIS implied cut count):** `[source unknown]`. Under the Hormuz-tail scenario thread `254c56e4` explicitly flags "Fed pauses cuts" — use today's real curve to measure distance to that tail.
3. **ECB / BoE / BoJ speeches:** `[date unknown] / [source unknown]` — read full transcript, not the headline.
4. **US PPI release today?** `[date unknown]` — official economic calendar is authoritative. PPI is the swing variable for the 30Y auction transmission (§5-3 of yesterday's research output).
5. **Geopolitics:** real-time SoH transit status. Any "disruption / congestion / vessel seizure" headline out of OPEC monthly, Lloyds List, or Tanker Trackers: `[source unknown]` — trigger Brent + DXY twin-gate evaluation immediately.
6. **Quantum sovereignty follow-through:** any overnight NIST PQC standard update, China SM / lattice progress, WFE export-control list change: `[source unknown]` — route into theme-A handling under `thematic-researcher`.
7. **Disputed numbers status:** UTXO discount 15–30%; 26k logical qubits to break 256-bit ECC; 6.3 GW reliable gas out of 86 GW. All flagged disputed yesterday — **do not use in pitch language this morning** until QA closes them out.

---

## 5. Core Implications for Today's Asia Session (≤5 conclusions)

1. **Regime lock holds: BASELINE-NEUTRAL.** Unless Brent prints >130 or DXY jumps above 108 this morning, **do not** change yesterday's ratified asset-allocation stance (source: board `77632254` consensus + `00_研究院产出.md` §1-C). Any Asia-session urge to "chase Brent long" or "short China tech" must clear that twin gate first.
2. **The thermometer for the AI-capex-duration theme in Asia today is the A/H tech scissor.** The first 30 minutes of Mainland-vs-HK tech flow is the most immediate verification of thread `1e00905f` ("certified Alpha vs. broad-capacity Beta"). If HK tech continues to compress its discount, the certified-Alpha main line is confirmed; otherwise the market is still betting on broad-capacity Beta — stay cautious on GOES / copper / HVPT pullback risk.
3. **The 30Y auction result is today's single most important all-asset variable.** Tail >3.0 bp or b/c <2.20x (thread `d158da99` fail thresholds) → immediate pressure on USDCNH >7.30, China growth / ChiNext −1.5% or worse, copper −1.0% or worse. A clean auction → preserve allocation. `bond-analyst` to refresh within 30 minutes of the print being filled in.
4. **DXY and Brent are the FX twin-gate for Asia.** DXY <105 or Brent <100 → USDJPY carry resumes, AUD / copper / China cyclicals friendly. DXY entering 108–116 or Brent breaking 130 → switch to Hormuz-tail book (XLE + gold + TIPS, the portfolio's 8% energy sleeve as the core defensive weight). **No directional FX bet until one gate trips.**
5. **Pre-open checklist for the China A-share open** (complete before 09:30 SGT/CST): ① fill in A50 overnight futures last + USDCNH fixing; ② cross-check overnight AI-leader closes vs. current NQ-futures spread to flag any overnight sentiment reversal; ③ check whether LME copper / aluminium broke last week's range — a break-out justifies upweighting the HVPT / transformer sub-theme today; ④ enter the 30Y auction result into the `d158da99` sensitivity table and broadcast to `bond-analyst` / `chief-strategist`; ⑤ if Brent gaps +3% or more overnight, trigger the Hormuz-tail playbook **immediately, do not wait for the morning meeting**.

---

## 6. Fill-in Ownership and Timing

| Item | Owner | Fill-in deadline (SGT) |
|---|---|---|
| §1 Indices & futures | Data desk | 08:45 |
| §2 Rates / FX | Data desk + `bond-analyst` | 08:45 |
| §3 Commodities | Data desk + `energy-analyst` / `materials-analyst` | 08:45 |
| §4 #1 30Y auction | `bond-analyst` | 08:30 (immediately after the result hits) |
| §4 #5 SoH status | `energy-analyst` | Continuous until the meeting |
| §4 #4 PPI calendar check | `chief-economist` desk | 09:00 |

> All filled-in values must satisfy the prompt's inline-citation rule: `[source: <data source + query date>]` or `[source: <URL>]`. **No uncited point estimate is acceptable.**

---

*Generated 2026-05-13 (system clock, authoritative). Window: overnight 2026-05-12 US cash through early Asia GLOBEX 2026-05-13. Framework and regime locks inherited from `00_研究院产出.md`; the specific market prints must be populated by the data desk with citations before 08:45 SGT.*
