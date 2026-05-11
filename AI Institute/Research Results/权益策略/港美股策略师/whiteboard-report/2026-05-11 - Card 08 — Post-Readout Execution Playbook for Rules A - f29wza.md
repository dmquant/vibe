---
source: ai-institute
resource_type: research-result
report_kind: whiteboard-report
analyst_level: "权益策略"
content_error: ""
---

# Card 08 — Post-Readout Execution Playbook for Rules A / B / C (HK/US Strategist · synthesize)

Kind: **whiteboard-report**
Analyst: **HK/US Strategist**

## Links

- Report type: [[whiteboard-report]]
- Analyst: [[HK US Strategist]]
- Analyst level: [[权益策略]]

# Card 08 — Post-Readout Execution Playbook for Rules A / B / C (HK/US Strategist · synthesize)

- Work-date (Asia/Singapore): **2026-05-11**
- Event window: **2026-05-12 → 2026-05-15** Seoul/Beijing summit + communiqué readout
- Role: HK/US Strategist (offshore-strategist)
- Stance: synthesize (collapsing cards 01–07 into an executable decision tree)
- Card: 8/8 (session close)

> This card is a **pre-execution playbook**. As of T+0 (2026-05-11) the communiqué has not landed, but card 04 has hard-coded the trigger conditions for Rules A / B / C, card 05/06 has fixed the substitute structure for Rule C, and card 07 has set a 150 bps NAV portfolio-level cap. The job of this card is to fuse the six observation variables (KWEB, BABA ADR-H discount, HSTECH/HSCEI tape, southbound ETF flow, USDCNH, option skew) into a **single decision table** and lay out the **T+0 → T+5 execution cadence** for every hedge leg, so the trading desk can read the table intraday on any session between 2026-05-12 and 2026-05-15 and execute without re-convening strategy.

---

## 1. Synthesised Thesis

**Baseline remains Rule B (roll the small-size hedge); the modal readout of this window is NOT a clean "bad news exhausted" but a duller "partial delivery + skew bleed" version of half-time — in that case neither Rule A take-profit nor Rule C upgrade should fire. Rule C may only be executed if card 04's full trigger stack lights up AND remains inside card 07's 150 bps NAV budget, AND only in the (KWEB 1×2 ratio + half-cup USDCNH ATM+1% call + HSCEI put-spread) form fixed by cards 05/06 — never as an outright 2× KWEB/HSTECH put.**

T+0 cross-asset tape (last full session, 2026-05-08):

| Variable | Latest | Distance to Rule A | Distance to Rule C |
|---|---|---|---|
| KWEB (2026-05-08) | +0.10% d/d | needs +4% gap | needs −3% gap |
| BABA ADR-H discount | ≈ −1.37% | needs ≤ −0.3% | needs > −2.5% |
| HSI / HSTECH (2026-05-08) | −0.9% / −0.4% | inconsistent with A | aligned with C, but undersized |
| Southbound HK tech ETF (5d) | net sell HK$21.2B (Tracker / HSCEI / HS TECH combined) | inconsistent with A | partial C sub-condition already met |
| USDCNH | range-bound (card 06 framing) | n/a | not through upper bound |
| KWEB 1m 25Δ put-call skew | near neutral, not extreme | weakly with A | no squeeze trigger |

→ At T+0, **no rule is active**. The default for the playbook is therefore: continue Rule B, carry the existing hedge through the window.

---

## 2. Decision Matrix (read intraday, T+1 ⋯ T+5)

Read the table twice each session: HK close and US pre-open. **All conditions of a rule must hold same-day** — a single variable crossing in isolation is noise and Rule B holds.

### 2.1 Rule A · Take Profit (unwind the existing small-cup hedge, monetise ≈ 35–50 bps NAV premium)

ALL of:

1. Communiqué carries **D1 tariff path lower** (a 90-day observation window counts) AND **D2 explicit chip-control easing OR D5 HFCAA/TikTok specifics** — i.e. at least 1 of {D2, D5} with D1 cooperation, matching card 04;
2. KWEB **gaps ≥ +4%** vs. prior close (readable from the pre-open / first 30 min, no need to wait for the close);
3. Southbound **net-buys HK tech ETFs for 2 consecutive sessions** (KTEC / 3033 / 2800 combined > 0);
4. **BABA ADR-H discount tightens to ≤ −0.3%** in absolute value (30-min VWAP confirmation in either Asia close or US open);
5. KWEB 1m 25Δ put skew **falls to < −2 vol** (call-dominated).

Execution by leg:

- **KWEB / HSTECH existing put / put-spread**: unwind in two slices — 60% in the first 30–45 min after open, 40% in the European session or US open, to soften impact.
- **USDCNH ATM+1% call half-cup**: keep ½ notional as residual hedge against D4 absence (the PBoC reaction function only crystallises 5–10 sessions after the communiqué); sell the other ½ back; net premium recoup ≈ 20–25 bps.
- **HSCEI put-spread**: fully close if HSCEI also prints +2% same-day; otherwise close 50% and leave the lower half as a tail in case the A-share policy floor cracks.

Expected outcome: portfolio hedge spend goes from ≈ 70–90 bps used to ≈ 25–35 bps, freeing **50–60 bps to re-anchor core KWEB / BABA spot** (no re-leveraging — only restoring the pre-event baseline weight).

### 2.2 Rule B · Roll (baseline, ≈ 55% probability)

If Rules A and C are not both fully satisfied, Rule B holds by default:

- Roll KWEB 1–3m put-spread 5 sessions before expiry to the next 1–3m slice;
- USDCNH ATM+1% call half-cup left untouched;
- HSCEI put-spread untouched;
- Card 07 cap: total hedge spend ≤ **90 bps NAV**; any single-day slippage / rebalance cost > 8 bps counts as an execution anomaly and goes back to strategy.

In-window minor adjustment: if the communiqué delivers only D3 (procurement) with D1/D2/D5 vague — the "**dull partial delivery**" path — raise the lower strike of the KWEB put-spread from −5% to −3% (shorten delta distance, save ≈ 10 bps premium). **Do not** widen notional.

### 2.3 Rule C · Substitute Upgrade (per card 05/06; outright 2× put is banned)

ALL of:

1. Communiqué **escalates** (card 04 definition: new named tariff increase, broadened export controls, HFCAA delisting initiated, forced TikTok divestment), **OR**
2. KWEB **gaps ≤ −3%** AND southbound **net-sells HK tech ETFs ≥ HK$15B over 2 consecutive sessions** AND BABA ADR-H discount **widens past −2.5%**;

AND 3. Remaining hedge budget under card 07 ≥ **150 bps NAV** is available (i.e. on top of the 50–60 bps already used in Rule B, room for another 70–90 bps).

Execution structure (**strictly per cards 05/06, no deviation**):

| Leg | Instrument | Notional / Budget | Notes |
|---|---|---|---|
| 1 | **KWEB 1×2 put ratio** (long 1× ATM−3%, short 2× ATM−8%) | premium cap 55 bps | exploits skew, avoids buying rich vol; downside capped near KWEB −13%, consistent with card 04 stress |
| 2 | **USDCNH ATM+1% call** (1–2m) | upgrade from half-cup to **full-cup**, additional ≈ 25 bps | substitute for outright CNH NDF short — avoids PBoC fix slippage |
| 3 | **HSCEI 1–2m put-spread** (−4% / −9%) | cap 40 bps | backstop for A-share policy-floor break → HK beta spillover; avoids unstable IF/IH short proxy (card 06) |
| 4 | Execution reserve | retain 20–30 bps | for D+1/D+2 liquidity drought, slice/TWAP execution |
| **Total** | | **≤ 150 bps NAV** | card 07 hard cap; if breached, **cut exposure** (sell 5–8% of KWEB/BABA spot) instead of buying more options |

**Banned actions** (from card 05 stress test):

- Do not simply double existing KWEB/HSTECH puts to 2× — margin buffer collapses from 25% to 8.5%;
- Do not chase single-leg vol on the escalation day (25Δ put IV will already be bid 6–10 vol pts) — use the 1×2 ratio to harvest skew instead;
- Do not use IF/IH shorts as a China-internet proxy (A-share policy floor → unstable beta, card 06);
- Do not add non-linear OTC structures during the event window (liquidity / counterparty premium is prohibitive).

---

## 3. Cards 01–07 in One Page

| Card | Key contribution | Where it sits in this playbook |
|---|---|---|
| 01 | Posed "half-time", recommended small-cup hedge | Root of Rule B default |
| 02 | KWEB SI 19.6%, southbound only 27% of peak, skew not extreme → hard positioning not crowded | Explains why Rule A is not the modal path |
| 03 | T-1 tape was rally-then-fade — confirms roll | Locks Rule B as the mode |
| 04 | Rule A / B / C triggers + D1–D5 probability buckets | Section 2 of this playbook inherits directly |
| 05 | Outright 2× put is unsafe (150–250 bps slippage, margin 25→8.5%) | Forces Rule C into substitute structure |
| 06 | Substitute = KWEB 1×2 + USDCNH half/full + HSCEI ps | Rule C execution table |
| 07 | Budget caps: Rule B 90 bps / Rule C 150 bps NAV | Section 2.3 hard cap |
| **08 (this card)** | Fuses all of the above into an intraday-readable decision matrix | — |

---

## 4. Probabilities and Expected Action (as of 2026-05-11)

| Scenario | Probability | Rule fired | Expected portfolio P&L (post-hedge residual) |
|---|---|---|---|
| Full delivery (D1 + {D2∪D5} + D3 + southbound follow-through) | ≈ 12% | A | KWEB +6 ~ +10%, portfolio +180 ~ +260 bps |
| Partial delivery (D3 alone + vague D1) | ≈ 43% | B (with sub-adjustment) | KWEB ±1.5%, portfolio ±20 ~ 40 bps |
| Noise / communiqué dilution | ≈ 22% | B | KWEB −1 ~ −3%, portfolio −30 ~ −60 bps |
| Escalation (new tariff / broadened export controls / HFCAA initiation) | ≈ 18% | C | KWEB −5 ~ −12%, post-hedge residual ≈ −280 ~ −330 bps (card 07) |
| Tail (geopolitical / FX accident) | ≈ 5% | C + exposure cut | Residual −350 ~ −450 bps; triggers card 07 exposure-cut clause |

→ Expected action: **Rule B (mode) PLUS pre-built OMS templates for Rule C legs ready in standby** (KWEB 1×2 ratio strikes, USDCNH call strikes, HSCEI ps strikes pre-generated as three ±0.5σ candidates from T+0 spot), so any intraday decision in the window takes < 15 minutes.

---

## 5. SLA for the Trading Desk

1. **T+0 (2026-05-11) post-close**: pre-fill OMS cards for all three Rule C legs in "await-trigger" state; do not place orders.
2. **T+1 ~ T+4 (2026-05-12 ~ 2026-05-15) every regional open +30 min**: read table, declare A / B / C, get written sign-off, execute.
3. Any leg with slippage > 20% of its card-07 budget → stop, escalate.
4. On a Rule C trigger day, the KWEB 1×2 ratio must trade **long leg first (buy ATM−3% put), short leg second (sell 2× ATM−8% put)** — no naked short put overnight.
5. T+5 (pre-open 2026-05-18): regardless of outcome, mark portfolio to market, reconcile against card 07 budget, **close this playbook** and revert to the baseline strategy framework.

---

## 6. Close-out Signals and Session Wrap

- If Rule A fires and executes any time during 2026-05-12 ~ 05-15 → the session's "half-time" thesis is falsified into "bad news exhausted"; spin up a new session at T+10 to assess the second leg of valuation repair.
- If Rule C fires and executes → "half-time" is confirmed; a new session needs to evaluate a **structural shift down** (no reverse short; rotate core weight from China internet partially into A-share large-cap + HK high-dividend).
- If Rule B rolls all the way through the window → the playbook expires naturally per SLA item 5; **no new session needed**, and this 8-card thread closes.

This being card 8/8, no further analyst is recommended — `recommended_next_analyst_id = null`, `recommended_stance = stop`, session closed.

---

*Footer · Asia/Singapore work-date 2026-05-11 · offshore-strategist · card 08/08 · synthesize · session 81003435-d9dc-451e-a010-16745c28039e*
