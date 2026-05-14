---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "宏观与策略"
content_error: ""
---

# China ADRs: Portfolio-Level Hedge Budget for the 2026-05-12 to 2026-05-15 Event Window

Kind: **daily**
Analyst: **Asset Allocator**

## Links

- Report type: [[daily]]
- Analyst: [[Asset Allocator]]
- Analyst level: [[宏观与策略]]

# China ADRs: Portfolio-Level Hedge Budget for the 2026-05-12 to 2026-05-15 Event Window

- Work date: **2026-05-11** (Asia/Singapore, institute-canonical)
- Card: 7/8
- Analyst: asset-allocator
- Stance: synthesize
- Scope: China ADR exposure, A-shares, HK technology, U.S. technology, China credit, and CNH

## 1. Bottom Line

As of **2026-05-11**, I **synthesize and support** the prior chain: the China ADR setup is still a "halftime break," not a confirmed "all-clear." The portfolio should carry protection through the 2026-05-12 to 2026-05-15 event window, but it should not buy a direct 2x KWEB/HSTECH put upgrade into stressed liquidity.

My allocation answer is:

- **Rule B baseline roll:** cap total hedge spend / carry at **90 bps of portfolio NAV**. Expected use: **70-85 bps**.
- **Rule C alternative upgrade:** cap total hedge risk budget at **150 bps of portfolio NAV**, including execution reserve. Do not exceed this by chasing equity skew.
- **Single-leg cap:** no one hedge leg should use more than **60 bps NAV** or more than **40% of the total hedge budget**, whichever is tighter.
- **Portfolio downside budget:** pre-hedge 4-day event VaR is **220-260 bps NAV**; Rule C stress loss budget is **400-450 bps NAV** before hedges and **280-330 bps NAV** after the recommended hedge stack.

The hedge stack should be **KWEB 1x2 ratio put-spread + half-cup USDCNH ATM+1% call + HSCEI put-spread**. KWEB keeps the most direct ADR beta, USDCNH is the macro shock proxy, and HSCEI supplies a more liquid broad-China equity hedge. They should not all scale linearly: KWEB must give way first if put skew or option spreads gap wider.

## 2. Inputs Inherited From Cards 01-06

The live workspace is incomplete: `session-brief.md`, `analyst-catalog.json`, and the card-02 / card-03 report files were not present locally when this card was written. I used the supplied session snapshot for card-02 and card-03, and live local files for card-01, card-04, card-05, and card-06.

| Upstream item | Portfolio relevance |
|---|---|
| Card 01 | Soft sentiment is hot but hard positioning did not confirm; keep a small tactical hedge and do not short the 12-month rerating thesis. |
| Card 02, from session snapshot | KWEB short interest was 43.85M shares, about 19.6% of float; EPFR public proxy showed April active foreign selling of $0.7B; latest 5-session southbound net buying was +HK$8.05B, about 27% of the recent positive extreme. This supports small-cup, not large-cup, hedging. |
| Card 03, from session snapshot | 2026-05-08 tape: KWEB +0.10%, BABA ADR -0.67%, BABA-W -1.35%, HSI -0.9%, HSTECH -0.4%; southbound bought BABA-W +HK$2.0B but sold Tracker Fund / HSCEI ETF / CSOP HS TECH by -HK$21.2B combined; BABA ADR-H discount was about -1.37%. |
| Card 04 | Rule B is the modal branch, about 55%; joint probability of at least one of {D2 chips, D5 HFCAA/TikTok} was estimated near 23%. Rule C requires escalation, KWEB gap-down worse than -3% with southbound selling and BABA ADR-H discount wider than -2.5%, or a contradictory U.S. statement within 48h. |
| Card 05 | Direct 2x KWEB/HSTECH put upgrade is not execution-safe: liquidity slippage was estimated at 150-250 bps of nominal, put skew could jump +15-20 vol points, and margin buffer could compress from 25% to 8.5%. |
| Card 06 | China macro supports replacing direct 2x equity puts with KWEB 1x2 ratio + half-cup USDCNH ATM+1% call + HSCEI put-spread; A-share IF/IH shorts are not a reliable ADR hedge because of the onshore policy floor. |

## 3. Portfolio Risk Model

Because the actual portfolio book was not supplied, I express the budget per **100 of portfolio NAV** and use a representative China-risk sleeve. These are risk-budget weights, not a claim about the book's actual holdings.

| Risk block | Delta-equivalent risk weight | Rule B shock | Rule C stress shock | Rule C loss contribution |
|---|---:|---:|---:|---:|
| China ADR / KWEB | 12% NAV | -3.0% | -10.0% | -120 bps |
| HK technology / HSTECH / HSCEI beta | 8% NAV | -2.5% | -8.0% | -64 bps |
| A-shares | 10% NAV | -1.0% | -1.5% | -15 bps |
| U.S. technology | 18% NAV | -1.25% | -3.0% | -54 bps |
| China credit | 8% NAV | -0.5% | -1.8% | -14 bps |
| CNH translation / macro FX beta | 15% NAV | -0.8% | -2.5% | -38 bps |
| Liquidity, skew, and correlation add-on | n.a. | -60 to -80 bps | -90 to -145 bps | -90 to -145 bps |

This gives the following allocator budget:

- **Rule B 4-day downside VaR:** **220-260 bps NAV**. This is the loss budget for a mixed readout with no D2/D5 breakthrough and no disorderly liquidity shock.
- **Rule C pre-hedge stress loss:** **400-450 bps NAV**. This includes equity gap risk, CNH depreciation, China credit spread widening, U.S. technology correlation spillover, and execution/skew friction.
- **Rule C post-hedge residual stress:** **280-330 bps NAV**, assuming the hedge stack is put on before liquidity dries up and total hedge budget remains capped at 150 bps NAV.

The key conclusion is that the portfolio can tolerate Rule B with a rolling hedge, but Rule C cannot be managed by simply buying more of the same KWEB/HSTECH puts after the shock. The budget has to be pre-allocated across equity, FX, and broad-index substitutes.

## 4. Hedge-Leg Budget

| Hedge leg | Role | Rule B budget | Rule C cap | Implementation guardrail |
|---|---|---:|---:|---|
| **KWEB 1x2 ratio put-spread** | Direct ADR downside beta; best match for KWEB/BABA selloff | 30-35 bps NAV | **55 bps NAV** | Long put around -5%, sell two lower puts around -12%, 2-3m tenor. Do not add if KWEB put skew jumps more than +15 vol points or quoted spread exceeds 150 bps of option premium. |
| **USDCNH ATM+1% call, half-cup** | Macro shock and CNH depreciation proxy | 15-20 bps NAV | **25 bps NAV** | Use half-cup only. It earns its budget only if CNH depreciation is part of the shock. Cut or pause if PBoC stabilisation language pins USDCNH near the fix. |
| **HSCEI put-spread** | Broad offshore-China equity hedge with better liquidity than single ADR optionality | 20-30 bps NAV | **40 bps NAV** | Preferred marginal add after KWEB reaches its cap. Keep strikes wide enough to avoid paying peak front-end skew. |
| **Execution reserve** | Slippage, roll cost, and bid-ask reserve | 5-10 bps NAV | **20-30 bps NAV** | Must be preserved; do not spend the reserve on extra delta before the readout. |

Total budget:

- **Rule B:** expected 70-85 bps NAV; hard cap **90 bps NAV**.
- **Rule C:** expected 125-145 bps NAV; hard cap **150 bps NAV**.

## 5. Do the Legs Need to Give Way to Each Other?

Yes, but only in a defined order.

1. **KWEB gives way first.** It is the best beta match but the worst leg to chase after skew is bid. Once the KWEB ratio package reaches **55 bps NAV** or its short lower strike is threatened, incremental hedge budget moves to HSCEI, not to more KWEB puts.
2. **USDCNH does not replace equity hedges unless CNH confirms the shock.** The half-cup call is useful if Rule C comes with USDCNH through the event band. If PBoC leans against depreciation, the leg becomes premium decay and should stop at **25 bps NAV**.
3. **HSCEI is the marginal shock absorber.** It is less precise than KWEB for ADR idiosyncratic risk, but it is the cleanest substitute when HK equity liquidity is still tradable and KWEB skew is already expensive.

This hierarchy avoids the card-05 failure mode: spending all incremental budget on direct equity puts exactly when their liquidity and implied volatility are most hostile.

## 6. Rule B vs. Rule C Allocation

Under **Rule B**, keep the book alive and avoid over-hedging:

- Keep the original China ADR / HK technology hedge on.
- Roll 1m structures into 2-3m where possible.
- Spend no more than **90 bps NAV** total.
- Prefer KWEB ratio first, then HSCEI, then the CNH half-cup only if USDCNH is already leaning weaker.

Under **Rule C**, upgrade through substitutes, not direct 2x:

- Raise total hedge risk budget to **150 bps NAV**, not higher.
- Allocate approximately **55 bps KWEB**, **25 bps USDCNH**, **40 bps HSCEI**, and **20-30 bps reserve**.
- Do not allow any one leg to exceed **60 bps NAV**.
- If equity skew gaps immediately, skip the KWEB add and allocate the marginal 20-25 bps to HSCEI plus reserve.

## 7. Final Allocator Judgment

The recommended whole-portfolio setting for **2026-05-11** is:

- **Support the prior "halftime break" thesis.**
- **Carry protection through the 2026-05-12 to 2026-05-15 event window.**
- **Do not pre-authorize direct 2x KWEB/HSTECH puts.**
- **Set the total hedge budget ceiling at 90 bps NAV under Rule B and 150 bps NAV under Rule C.**
- **Keep post-hedge Rule C residual stress inside 280-330 bps NAV; if modeled residual loss rises above 350 bps, reduce gross China beta instead of buying more options.**

That last point matters: once the hedge stack costs more than 150 bps NAV, the portfolio is no longer buying insurance efficiently. It is paying a liquidity tax. At that point, the right allocator action is to reduce exposure, not keep adding convexity.

## 8. Handoff

Recommended next analyst: **offshore-strategist** [primary, horizon / HK-US strategy].

Follow-up topic: post-readout execution of the Rule A/B/C hedge decision after the 2026-05-12 to 2026-05-15 event window.

Follow-up question: once the readout lands, use KWEB, BABA ADR-H discount, HSTECH / HSCEI tape, southbound ETF flow, USDCNH, and option-skew changes to decide whether the portfolio should keep Rule B rolling, switch to Rule A take-profit, or implement the Rule C alternative upgrade within the 150 bps NAV cap.

## 9. Sources and Internal Citations

- Card 01 live file: `whiteboard/81003435-d9dc-451e-a010-16745c28039e/card-01/report.en.md`.
- Card 02 session snapshot supplied to card-07 prompt; live file missing in workspace at write time.
- Card 03 session snapshot supplied to card-07 prompt; live file missing in workspace at write time.
- Card 04 live file: `whiteboard/81003435-d9dc-451e-a010-16745c28039e/card-04/report.en.md`.
- Card 05 live file: `whiteboard/81003435-d9dc-451e-a010-16745c28039e/card-05/report.en.md`.
- Card 06 live file: `whiteboard/81003435-d9dc-451e-a010-16745c28039e/card-06/report.en.md`.

---

*Footer: Whiteboard 81003435-d9dc-451e-a010-16745c28039e · Card 07/08 · asset-allocator · work date 2026-05-11.*
