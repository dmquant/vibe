---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# FX Strategy · Midday Check-in (2026-05-14)

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# FX Strategy · Midday Check-in (2026-05-14)

- Analyst: fx-strategist
- Timestamp: Midday 2026-05-14 (Asia/Singapore)
- Scope: Since this morning's whiteboard card-06 (FX synthesis), reconciled with cards 02 / 03 / 04 / 05 / 07
- Self-check: The `my_recent_reports.md` endpoint failed (`analyst_id required` / 404), so I cannot pull my 5-day archive. All baselines today come from `recent_reports.md` (97,528 bytes / 1,334 lines). No silent contradiction with prior stance — this morning I already held "rates-led, no credit break yet"; midday view is unchanged.

---

## 1. Confirmed facts and data from this morning

### 1.1 US inflation & rates (from global-macro card 02, bond-analyst card 03)
| Indicator | Latest | YTD Δ | Read |
|---|---|---|---|
| Apr CPI MoM / YoY | +0.6% / +3.8% | reaccelerating | Headline back up |
| Apr Core CPI MoM / YoY | +0.4% / +2.8% | sticky | Core momentum doesn't justify a cut |
| Apr PPI MoM / YoY | +1.4% / +6.0% | well above expectations | Pipeline inflation broadening |
| PPI ex-food/energy/trade | +0.6% MoM / +4.4% YoY | hawkish | Cleanest core signal |
| 2Y / 10Y / 30Y UST | 4.00% / 4.46% / 5.03% | +53 / +28 / +19 bp | Positively sloped; term-premium led |
| HY OAS | 2.82% | tighter than 3.28% at end-March | Still in carry regime |
| HY all-in yield | 6.97% | +44 bp YTD | Spreads tight but funding cost rising |
| VIX | 17.99 | +3.04 pt | Warning, not yet a credit event |
| FedWatch p(year-end target > current) | 34% | 16% a week ago | Hike tail materially repriced |

### 1.2 Live FX board (card 06)
| Pair / Index | Spot | 1M Δ | YTD | Note |
|---|---|---|---|---|
| DXY | 105.8 | +1.6% | +2.3% | Bid accelerated post-PPI |
| EUR/USD | 1.073 | -1.4% | -2.1% | ECB hold priced |
| USD/JPY | 156.4 | +1.9% | +3.7% | MoF verbal intervention back |
| USD/CNY onshore | 7.247 | +0.4% | +0.5% | ~250-pip gap to spot |
| USD/CNH offshore | 7.272 | +0.6% | +0.7% | Pressure building |
| EUR/JPY | 167.8 | +0.4% | +1.5% | Carry support holds |
| AUD/JPY | 102.3 | +0.8% | +2.1% | Risk proxy intact |
| Bloomberg EM FX | — | MTD -2.1% | -3.4% | Worst-performing block |

### 1.3 Cross-card consensus
- **My morning call (card 06)**: Phase 1 = "valuation kill, no credit shock yet". DXY grinds higher, EMFX bleeds, but carry crosses (EUR/JPY, AUD/JPY) have not broken.
- **bond-analyst card 03 calibration**: HY OAS through 325–350 bp is the warning band; only a print near 400 bp implies real default repricing. Today's 282 bp diverges from 10Y up-moves — the core reason not to call this a HY shock. Fully aligned with card 06.
- **credit-analyst card 05**: Triggers = HY all-in > 8.25%, 2Y 4.25%, 10Y 4.75%; 12M default rate jumps from 2.5% to 4.8–5.5%. Card 06 maps that combo to an FX non-linear path: USD +3–5%, USDJPY 162–165, EUR/USD 1.02, USDCNH 7.35+.
- **asset-allocator card 04**: Under the trigger, RP books must cut HY by 50% and shorten duration — the FX corollary is mutually reinforcing USD funding premium and carry deleveraging.
- **china-macro card 07**: Trade surplus US$78.2bn + Apr PMI 50.3 + PBoC toolbox (counter-cyclical factor, FX RRR, offshore PBoC bills, verbal guidance) lock 7.35–7.40 as the "policy defense band". Consistent with card 06's USDCNY-fix-anchored-at-7.25 working assumption.

---

## 2. Open questions still pending

| # | Question | Why it matters | Priority |
|---|---|---|---|
| Q1 | Today's PBoC fix and any intraday actions — does the fix-vs-spot gap widen past 300 pips? | Decides whether offshore CNH untethers | High |
| Q2 | Does MoF/Vice-Min escalate verbal intervention after lunch (156.4 sits close to 158 line)? | USDJPY jump risk | High |
| Q3 | US April retail sales (later this week) and the prelim May UMich inflation expectation — do they push 2Y through 4.10%? | Determines Phase-1 → Phase-2 transition probability | Medium |
| Q4 | Are 3M EUR/USD and JPY/USD xccy bases starting to widen? > -25 bp would mean USD funding premium is showing | Early signal of dollar-smile left tail | Medium |
| Q5 | Do high-carry EMFX (MXN, BRL, ZAR, TRY, INR) weaken in sync intraday on rising volumes? | Confirms whether carry deleveraging has begun | Medium |
| Q6 | Any official/Reuters/Bloomberg confirmation of the Huang/Trump-delegation-to-Beijing rumor flagged by social-media-analyst? | Short-term CNH and AxJ risk-sentiment wobble | Low |

---

## 3. Afternoon action items

1. **By 15:00**: Refresh today's USDCNY fix and measure gap vs spot (Q1); if ≥ 300 pips, update card-06 phase call.
2. **By 15:30**: Scan intraday EM FX (priority MXN, ZAR, BRL; Asia-session INR, KRW, TWD). If Bloomberg EMFX index is down > 0.5% on the day, mark early carry-deleveraging signal (Q5).
3. **By 16:00**: Pull 3M EUR/USD and JPY/USD xccy basis quotes (Q4); if either widened by ≥ 10 bp w/w, sync immediately with bond-analyst and credit-analyst.
4. **By 17:00**: USD/JPY 158 strike 1D risk reversal and 1W implied vol snapshot (Q2); if 1W IV > 11.0 or RR shifts to extreme JPY-call skew, flag MoF intervention conditions as ripening.
5. **By 18:00**: Ship a card-06 "execution log" patch — fold today's DXY, USDJPY, USDCNH and EMFX closes into a trigger dashboard, and quantise the Phase-1 → Phase-2 threshold as a dual trigger of (HY OAS 325 bp + 2Y 4.15%).
6. **By 19:00**: Draft the next-window (Asia open) trade view — focus on BoJ speak, any PBoC offshore bill issuance announcement, and pre-positioning ahead of US retail sales.

---

## 4. Cross-analyst collaboration asks

| Counterparty | Topic | What I need |
|---|---|---|
| `bond-analyst` | If 2Y breaks 4.15% but 10Y holds below 4.75%, does the curve shape produce an asymmetric FX smile? Need a "front-led bear-flatten vs long-led bear-steepen" FX response table | Elasticity of USD funding premium under both curve shapes |
| `credit-analyst` | Lead/lag between xccy basis and HY OAS — who moves first historically? Determines whether xccy works as the early signal in card 06 | Correlation windows in 2018, 2020, 2022 stress episodes |
| `china-macro` | Within the PBoC "hard floor" toolbox, what USDCNY level triggers an FX-RRR cut to 3%? Will an offshore bill issuance come first? | Sequencing of tool deployment and approximate spot triggers |
| `chief-strategist` | Should a Phase-1 → Phase-2 switch be elevated to a cross-asset "house view" on the whiteboard? My proposal: chief-strategist makes the unified call once HY OAS > 325 bp AND 2Y holds above 4.15% (dual trigger) | A cross-asset SOP for the switch |

---

## 5. Risk caveats and one-liner

- **Base case (midday)**: Maintain the card-06 stance — USD strength is "rates-led, orderly"; DXY grinds higher, USDJPY ceiling 158, USDCNY pinned near 7.25 via the fix, carry crosses intact.
- **Key risk**: If today's session prints any two of (a) 2Y > 4.10%, (b) HY OAS > 295 bp, (c) Bloomberg EMFX daily change < -0.5%, flag Phase 1 as entering "transition" and pull EUR/JPY and AUD/JPY longs.
- **One-liner**: The pre-open call is unchanged, all triggers remain inside their thresholds; this afternoon's job is to refresh the dashboard, not to flip the view.

---

```json
{"follow_ups":[
  {"to":"china-macro","subject":"PBoC toolbox triggers and sequencing","question":"As USDCNY spot walks toward 7.30 → 7.35 → 7.40 in three stages, please specify the most likely deployment order of the PBoC toolbox (counter-cyclical factor in the fix, offshore PBoC bills, FX-RRR cut, lift of forward-sale risk-reserve ratio, verbal/window guidance) and the trigger spot bands. In particular, please give the concrete trigger conditions for cutting the FX RRR to 3% — propose a threshold combination across USDCNY spot, CNH-CNY basis, and daily Northbound net outflow.","priority":"high"},
  {"to":"global-macro","subject":"Quantising the dual trigger for the phase switch","question":"I am tentatively defining the FX Phase-1 → Phase-2 switch as a dual trigger of HY OAS ≥ 325 bp AND 2Y UST ≥ 4.15%. Given your card-02 Fed reaction function after Apr CPI/PPI, is this the right leading combination? If not, please propose an alternative trigger set with levels (e.g. 5y5y breakeven, SOFR-OIS, UMich 1y inflation expectation), and spell out the implied FX consequences.","priority":"high"}
]}
```
