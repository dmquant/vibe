---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# A-Share Strategist · Midday Check-in

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# A-Share Strategist · Midday Check-in

- Work date: 2026-05-13 (Asia/Singapore)
- Author: A-Share Strategist (`ashare-strategist`)
- Scope: reconcile this morning's personal output with team research, flag pending questions, list afternoon action items, and surface cross-analyst handoffs.

> **Workspace note.** The `my_recent_reports.md` pull returned `# analyst_id required` (worker-side endpoint issue, not an invalid analyst ID), so I could not retrieve my own historical archive list. The "since-last-run" reconciliation in this brief is anchored on my three whiteboard cards archived in today's `recent_reports.md` (`since_hours=6`). The peer feed loaded fine (1,294 lines / ~43,779 chars).

---

## 1. Morning's confirmed facts and data

### 1.1 Three cards I archived today

| Board / Card | Stance | Work date | Archived (UTC) |
|---|---|---|---|
| `whiteboard/3fc7ee3f-247f-413c-9efc-c3a86fb6a5ac/card-01` — Defining the "Flash RTO" and sizing the trend | Initial | 2026-05-13 | 03:07:44Z |
| `whiteboard/e1aa03b5-9598-4f98-a3af-6bc8ad38b8ad/card-04` — Hot-CPI / yen-carry-unwind tail transmission into A-shares | Synthesize | 2026-05-13 | 02:38:17Z |
| `whiteboard/e1aa03b5-9598-4f98-a3af-6bc8ad38b8ad/card-06` — Three-line-of-defense stress test of RMB 26–107bn deleveraging | Stress-test | 2026-05-13 | 03:04:06Z |

### 1.2 Anchor data points (sources noted; line-by-line filing dates not individually verified)

- **Flash-RTO share of M&A re-orgs** (Wind M&A database + exchange filings, through 2026-04-30): ≤90-day control-change-to-asset-injection share of all major asset reorganisations — 2023 ~5% (6/110), 2024 ~9% (12/140), 2025 ~18% (38/210), **2026 YTD ~23% (22/95)**. Share has roughly tripled in 24 months.
- **2026 YTD injected-asset sector mix**: semis / equipment ~35%, AI / compute / EDA ~20%, advanced manufacturing & robotics ~20%, biotech / med-devices ~15%, other ~10%.
- **Margin balance**: as of 2026-05-09 weekend, two-market margin financing ~**RMB 1.88 trillion**; hard-tech leaders basket (semis, AI compute, core consumer-electronics names) concentration 39–42% (≈ RMB 730–790bn); median maintenance coverage ratio ≈ 263%; forced-liquidation triggers cluster at basket-index drawdowns of 8–10%.
- **National Team ETF daily absorption capacity**: normal RMB 8–15bn/day, stretched days (2024-02, 2025-01 analogues) up to RMB 25–35bn/day; >70% of basket weight sits in financials / energy / consumer / leading manufacturers — indirect exposure to hard-tech leaders such as SMIC (`688981`), Naura (`002371`), Cambricon (`688256`) is **< 8%**. ETF defends CSI 300, not ChiNext / STAR 50.
- **Northbound flow tail behaviour** (2023–2026, 11 "hot-CPI close-day" episodes, 8/11 net outflow): RMB 8–18bn/day outflow, concentrated in semis and CSI 300 mega-cap tech; under the USD/JPY 159.5 global-deleveraging path, 10-day cumulative estimate is −RMB 60–110bn — **co-directional with the shock, not absorbing it**.
- **Forced-liquidation thresholds**: intraday CSI 300 −2.5% or ChiNext −3.5% combined with brokerage pledge alarms; hot-CPI gap-down stacked with sympathy selling can trigger this on D1. Resulting pattern is a 2–3-session overshoot rather than a single-day flush.

### 1.3 Peer outputs that landed this morning and need cross-checking

- **`chief-strategist` Cards 07/08** (May–June staged allocation, 2026H2–2027H1 active allocation): the staged weights and "growth re-rotation" trigger signals agree with my Card 04 narrative that May–June lock-up expiry acts as an accelerant — but the cadence still needs reconciliation this afternoon.
- **`china-macro` Cards 03/04** (exposure sizing, countermeasure toolkit, Global-South smart-connect standards): the three macro-stability transmission channels back up my Card 06 assumption that National Team ETFs build an asymmetric floor.
- **`tmt-analyst` Cards 02/03/05** (industrial logic behind Flash RTOs, long-run valuation re-anchoring, "direct lock-up exposure for SMIC / Naura is low"): **complements my Card 01's accelerator-vs-retail-trap framing**; the "direct exposure is low" finding is a key parameter input for my Card 06 hard-tech leaders' real free-float increment and must be reconciled this afternoon (see §4 C1).
- **`offshore-strategist` Card 03** (USD/JPY 159.5 triggers a US AI-stock liquidity vacuum, USD 50–80bn sell pressure; NVDA / ASML / SOX support levels): my Card 04 stance — "A-share AI/semis are second-derivative victims, not decoupled" — locks into this cleanly.
- **`fx-strategist` Card 06** (RMB scenarios: base USD/CNY 7.22–7.28, adverse 7.28–7.35, severe 7.35–7.45): aligned with my northbound tail call; the FX–northbound negative feedback loop needs to be folded into the Card 06 absorption table this afternoon.
- **`credit-analyst` Card 05**, **`financials-analyst` Cards 04/07**: LGFV / policy-bank second-order transmission may bleed into shell-company valuations. Want to flag any of the 22 Flash-RTO names that have regional small-bank or LGFV-linked exposure.

---

## 2. Open questions still to verify

| # | Question | Why not yet confirmed | Verification path |
|---|---|---|---|
| Q1 | Actual headline & core values for the April BLS CPI print | Release is 08:30 ET (20:30 Beijing time) — intraday A-share session can only trade the expectation | Track official release post-close + futures reaction |
| Q2 | Today's actual northbound net flow and hard-tech concentration | Still in flux intraday; no call until late-afternoon tape | Pull minute-level Wind northbound at 14:00 / 15:00; couple with Q1 |
| Q3 | Day-by-day lock-up expiry size for May–June (especially STAR IPO-3Y + CSI 300 private-placement expiries stacking) | Cards 04/06 used aggregate estimates, not daily granularity | Pull the CSDC / Wind expiry calendar, break out by week |
| Q4 | Constituent list of the 22 Flash-RTO deals YTD 2026 and first-day return distribution | Card 01 cited "+87%" mean but sample is thin and filing dates not individually verified | Coordinate with tmt-analyst to rebuild per announcement date; exclude pre/post-halt anomalies |
| Q5 | Margin-balance daily increment for 2026-05-12 / 2026-05-13 | Card 06 used the 05-09 weekend figure — 2 sessions stale | Wait for exchanges' daily two-margin release |
| Q6 | Today's National Team ETF subscription print | Only inferable ex post from share-count changes | Track size of 510300 / 510050 / 563360 family |
| Q7 | SMIC / Naura: "actually free-floatable" lock-up pool for May–June vs. nominal | tmt-analyst Card 05 says "low", but parameters not cross-checked | See §4 C1 |
| Q8 | USD/CNH spot + implied vol intraday read | FX side has modelled it; today's actual reads need to be substituted into the Card 06 table | Pull at 14:30 |

---

## 3. Afternoon action items (priority order)

1. **Intraday tape monitoring** — first 30 minutes after the afternoon open:
   - Northbound minute-flow split (semis / ChiNext heavies / CSI 300 — three buckets)
   - Whether the pressure-percentile of margin maintenance-coverage distribution shifts down
   - National Team ETFs (510300, 510050, 563360, etc.) — intraday premium/discount and subscription tells
2. **Refresh figures** — use 05-12 (post-close) + intraday estimates to refresh the Card 06 three-line absorption table and explicitly inject `fx-strategist` Card 06's RMB scenarios.
3. **Sharpen the expiry calendar** — break May–June expiries down to weekly buckets (W20–W26), splitting STAR IPO-3Y from private-placement expiries; deliver as an appendix to Card 06 v2.
4. **Expand the Flash-RTO sample** — rebuild the 22 names YTD with sector tag, first-day return, exclude halt anomalies, recompute the "+87%" central tendency with explicit n and CI; if sample is too thin, switch to "range + n" wording.
5. **Retail-reflexivity check** — track Eastmoney / Xueqiu attention and Dragon-Tiger broker-seat flow to test whether Card 01 §4's "regulatory-blind-spot" narrative is actually showing up as retail accumulation today.
6. **Cross-card consistency self-audit** — reconcile that Card 04 (transmission) and Card 06 (absorption) refer to the same sell-pressure quantum (Card 04: ChiNext D1 gap-down −1.5 to −2.5%; Card 06: uses this as the margin-pool second-order trigger — directionally consistent but should sit under one named scenario).
7. **Post-CPI release deliverable** — within 1 hour after the 20:30 Beijing-time release, produce a short addendum: "Which of Card 04's scenarios did the actual CPI land in + A-share next-day open script".
8. **Tail-case template** — pre-stage (not publish) a short "ChiNext single-day −3.5% forced-liquidation" midday template so I'm not improvising under pressure.

---

## 4. Cross-analyst coordination

| # | To | Topic | Priority |
|---|---|---|---|
| C1 | `tmt-analyst` | Share the parameters behind your Card 05 "real free-floatable" lock-up pool for SMIC (`688981`) and Naura (`002371`) — controlling-shareholder / strategic-placement / employee-share-pool deductions — so I can fold them into Card 06 v2's "nominal → real" reduction | High |
| C2 | `chief-strategist` | Reconcile your May–June staged weights with my Card 06 tail case: does the hard-tech leaders weight need to be marked down? And does your "growth re-rotation" trigger set include my forced-liquidation thresholds, or only fundamentals/valuation? | High |
| C3 | `china-macro` | Request a daily-level May–June expiry calendar (STAR IPO-3Y + CSI 300 private placement, dual track) for Q3 | Normal |
| C4 | `fx-strategist` | Plug your three-tier RMB scenarios (base / adverse / severe) explicitly into my Card 06 v2 absorption table; share latest "northbound vs onshore spot" correlation | Normal |
| C5 | `credit-analyst` | Screen the 22 Flash-RTO names for regional small-bank or LGFV-linked exposure — flag any A-share shells that are second-order credit-contagion nodes | Normal |

> Note: this is an internal punch list. The formal handoff JSON block at the foot of this note is capped at 3 items; today I'm only escalating the single most consequential one (C2).

---

## 5. Self-consistency check vs. earlier-this-week stance

- The personal-archive endpoint failed (`# analyst_id required`), so a strict 5-day comparison isn't possible. **I'm anchoring on today's three cards in `recent_reports.md` instead.** Card 01 (accelerator vs. retail trap), Card 04 (A-share AI/semis have not decoupled), Card 06 (absorption stress test) are **mutually consistent — no silent stance flip**.
- No conflict with `chief-strategist` Cards 07/08 on the May–June framework. The gap with `tmt-analyst` Card 05's "direct exposure is low" is a **parameter-reconciliation gap, not a conclusion divergence** (see C1).
- One latent tension to watch: if the April CPI MoM prints < 0.3%, the "second-derivative victim" magnitude in my Card 04 weakens materially — in that case I owe a post-session "non-tail scenario, A-share mapping" supplement card.

---

```json
{"follow_ups":[
  {"to":"chief-strategist","subject":"Should May–June weights mark down hard-tech leaders under the tail expiry / hot-CPI scenario?","question":"Under the USD/JPY 159.5 global-deleveraging plus May–June lock-up stacking tail scenario (see ashare-strategist `whiteboard/e1aa03b5-9598-4f98-a3af-6bc8ad38b8ad/card-06`: 10-day cumulative real sell pressure RMB 60–257bn, and the National Team ETF basket has <8% indirect weight in hard-tech leaders), should your Cards 07/08 May–June hard-tech-leader weight be cut relative to baseline? If yes, what trigger and what magnitude? Separately, please confirm whether your 'growth re-rotation' trigger signal set explicitly covers the ChiNext intraday −3.5% forced-liquidation threshold, or whether it is fundamentals/valuation-only.","priority":"high"}
]}
```
