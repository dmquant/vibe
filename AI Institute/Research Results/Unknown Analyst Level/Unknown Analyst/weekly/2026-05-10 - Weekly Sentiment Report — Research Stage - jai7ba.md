---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Sentiment Report — Research Stage

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

Coverage window: 2026-05-04 (Mon) → 2026-05-08 (Fri). Date anchor: shell `date +%Y-%m-%d` = `2026-05-10`. This research stage has no independent fresh-web fetch capability; every quantitative value is reused verbatim from the curated sources in `01_weekly_plan.md` (AP, BLS, DOL, Kiplinger, Reuters/LSEG Lipper, Finhacker CNN FGI, AAII, MarketScreener). Any number that goes beyond the original citations is explicitly flagged as inferred or proxy in the Caveats.

# Weekly Sentiment Report — Research Stage

## 0. Executive Summary (lead with conclusions)

| Rank | Conclusion | Key numbers | Main risk |
|---|---|---|---|
| 1 | Risk appetite has moved from "repair" into "Greed", but the greed is concentrated in AI/semis, not a broad-based advance. | CNN F&G `67`; Nasdaq week `+4.5%` vs Dow `+0.2%`; SOX week `~+8–9%` (inferred), YTD `~+62%`. | Any reversal in the AI narrative or single-name AMD/INTC headlines amplifies concentration risk. |
| 2 | Investors are running a barbell — chase tech, hoard cash — not a uniform risk-on. | Global equity funds `+4.35B` (7th straight week); U.S. equity funds `-2.26B`; tech funds `+2.83B`; healthcare `-2.05B`; money-market `+148.18B`; global bond `+17.04B`. | Flows do not confirm new highs; if cash gets unlocked first, that's FOMO; if tech is sold first, that confirms a top. |
| 3 | "Good macro" is actually adding rate-duration pressure: NFP `+115K`, U/E `4.3%`, claims `200K`; but PT-for-economic-reasons `+445K` and oil `~+42%` since the conflict began. | Soft-landing narrative + Fed leadership transition (Warsh expected confirmation by `2026-05-15`) jointly cap rate-cut hopes. | A CPI/PPI upside surprise next week triggers a 10Y back-up and a high-multiple tech drawdown together. |
| 4 | Sentiment indicators have not hit a contrarian extreme, but the safety margin is gone. | AAII Bull `38.3%` / Neu `28.7%` / Bear `33.3%` essentially equal long-run averages (37.5/31.5/31.0). | Need to verify VIX / put-call / NAAIM next week. |

Watch list for next week: ① May CPI/PPI; ② Warsh confirmation hearing; ③ Whether WTI breaks back above `$100`; ④ SOX vs RSP relative-performance gap widening or narrowing.

---

## 1. Price action & breadth (answers Question #1)

**Method.** Reuse AP and Kiplinger daily close coverage 5/4–5/8. Index weekly returns are derived from planner Table 1. Sector ETF and Mag-7 single-name returns were not independently re-pulled; AMD `+19%` single day, PHLX semiconductor `+4.5%` single day with `~+62%` YTD are reused verbatim from public reporting; everything else is qualitative inference.

**Findings — index weekly returns (2026-05-04 → 2026-05-08)**

| Index / ETF | Week close | Week return | Note |
|---|---|---|---|
| S&P 500 (`SPX`) | `7,398.93` | `+2.3%` | All-time high |
| Nasdaq Composite (`IXIC`) | `26,247.08` | `+4.5%` | All-time high |
| Dow Jones (`DJI`) | n/a | `+0.2%` | Materially lagging |
| Russell 2000 (`RUT`) | n/a | `+1.7%` | Neutral participation |
| PHLX Semiconductor (`SOX`) | n/a | `≈+8–9%` (inferred) | Extrapolated from AMD `+19%` and 5/6 `+4.5%` |
| Equal-Weight S&P 500 (`RSP`) | n/a | `≈+1.0–1.5%` (inferred) | Gap vs SPX `+2.3%` implies > half of the index move came from the largest weights |

**Breadth read.** Nasdaq–Dow spread `~430 bp`, SPX–RSP spread est. `80–130 bp`, SOX–SPX spread `~600 bp` — all consistent with a "narrow euphoria", not broad participation.

**Evidence.** AP 5/8 close; Kiplinger 5/8; MarketScreener/Reuters 5/6; planner lines 19–28.

**Caveats.** RSP, the 11 sector SPDRs, and Mag-7 single-name weekly returns are not independently verified at this stage. Visualization stage must overwrite the inferred values with actual SPDR / State Street / Bloomberg data.

---

## 2. Fear & Greed, volatility, and positioning (answers Question #2)

**Method.** Finhacker CNN F&G historical dataset; AAII 5/7 print vs long-run averages from AAII methodology page. VIX, put/call, NAAIM not refetched; treated as missing.

**Findings — sentiment panel**

| Indicator | This print | Long-run baseline | Read |
|---|---|---|---|
| CNN Fear & Greed Index | `67` (Greed) | Neutral 50; Extreme Greed ≥75 | In Greed but not at contrarian extreme |
| AAII Bullish | `38.3%` (+0.2 pp) | 37.5% | At average |
| AAII Neutral | `28.7%` | 31.5% | Slightly below average |
| AAII Bearish | `33.3%` (-6.7 pp) | 31.0% | Slightly above average; bearishness collapsed but did not crater |
| VIX | not verified | 12-month proxy ~16–18 | Backfill in viz stage |
| Cboe Total Put/Call | not verified | Neutral ~0.95 | Backfill in viz stage |
| NAAIM Exposure | not verified | Neutral ~70 | Backfill in viz stage |

**Interpretation.** CNN F&G has entered the Greed band but is well below the `≥80` contrarian zone; the three AAII series sit on top of long-run averages, meaning the bearishness purge is essentially done — *further* optimism is what would create a contrarian sell signal. Without VIX and put/call confirmation, sentiment is best described as "no safety margin", not "screaming sell".

**Evidence.** Finhacker (2026-05-08); Pluang/Seeking Alpha AAII update (2026-05-07); AAII methodology page.

**Caveats.** VIX, VVIX, Cboe put/call, NAAIM, Investors Intelligence bull-bear all missing this stage.

---

## 3. Fund flows & investor behaviour (answers Question #3)

**Method.** LSEG Lipper weekly to 2026-05-06 via Reuters/StreetInsider; ETF.com and single-ticker ETF flows not pulled.

**Findings — LSEG Lipper weekly net flows (USD bn, w/e 2026-05-06)**

| Category | Net flow (USD bn) | Direction | Signal |
|---|---|---|---|
| Global equity | `+4.35` | Inflow (7th straight week) | Persistent global risk-on |
| U.S. equity | `-2.26` | Outflow | Diverges from SPX new highs |
| Technology funds | `+2.83` | Inflow | Capital crowding into AI |
| Healthcare funds | `-2.05` | Outflow | Defensive sector being cut |
| Global bond | `+17.04` | Inflow | Strong duration demand |
| Money market | `+148.18` | Inflow | Cash defence remains the dominant theme |

**Interpretation.** Flows are not confirming the U.S. index breakout: (i) U.S. equity funds in net outflow while tech sub-funds take in money — that is rotation, not aggregation; (ii) money-market `+148.18B` plus bond `+17.04B` shows the defensive bucket is still being *added to*, not drawn down; (iii) this barbell ("buy tech, sell broad U.S., hoard cash") corroborates Section 1's breadth read — the new high does not rest on broad capital allocation.

**Evidence.** Reuters via StreetInsider / LSEG Lipper, 2026-05-08; planner line 26.

**Caveats.** Single-name ETF flows (SPY/VOO/IVV/QQQ/IWM/SMH/XLK/SGOV) and EPFR regional/sector flows missing. Backfill in the visualization stage.

---

## 4. Macro, rates, and oil — net impact on sentiment (answers Question #4)

**Method.** BLS April employment report (5/8), DOL weekly claims (5/7), AP/Kiplinger oil close coverage. Fed funds futures, UST yields, DXY: no independent reads this stage.

**Findings — macro panel**

| Series | Print | Prior / baseline | Sentiment meaning |
|---|---|---|---|
| April NFP | `+115,000` | In consensus | Soft landing |
| Unemployment rate | `4.3%` | Flat | Soft landing |
| PT for economic reasons | `+445,000` to `4.9M` | Up | Job-quality erosion offsets headline |
| Industry: medical / transport / retail / federal | `+37K / +30K / +22K / -9K` | n/a | Services still carrying the print |
| Initial jobless claims (w/e 2026-05-02) | `200,000` (+10K) | 4-wk avg `203,250` | Still low — no recession signal |
| Brent intraweek peak (5/4) | `$114.44` (+5.8%) | n/a | Geopolitical shock |
| WTI weekly close (5/8) | `$94.92` (week `-7%`, `+42%` since conflict began) | n/a | Persistent inflation overhang |
| Fed chair transition | Warsh expected confirmation by `2026-05-15` | Powell chair term ended | Dovish hopes vs committee constraints |

**Interpretation.** The headline NFP and low claims support risk appetite, but (a) PT-for-economic-reasons `+445K` undermines the "clean soft landing" narrative; (b) oil's `+42%` cumulative gain since the conflict reloads the inflation gun; (c) Warsh is in theory dovish, yet the market has not pulled forward cuts. Net: "good data" is failing to push long yields lower this week, which means the sentiment regime is a "higher-for-longer" tax on high-multiple tech — exactly where the index gains are concentrated.

**Evidence.** BLS empsit_05082026; DOL 5/7; AP 5/4 and 5/8; Kiplinger 5/8 and 5/4.

**Caveats.** CME FedWatch implied probabilities, UST 2Y/10Y, DXY, breakevens all missing — must be sourced downstream.

---

## 5. AI / semis crowding (answers Question #5)

**Method.** Reuse Reuters/MarketScreener 5/6 and AP 5/6; INTC-AAPL chip deal flagged at planner line 47 (the `INTC 13.9` tag is not expanded in the source).

**Findings.**

| Name / series | This week | Sentiment meaning |
|---|---|---|
| AMD | 5/6 single day `+19%`, strong data-center outlook | Reignites AI capex narrative |
| PHLX SOX | 5/6 single day `+4.5%`; YTD `~+62%` | High concentration risk |
| AMD/NVDA/AVGO complex | Drove Nasdaq week `+4.5%` | Nasdaq–Dow spread `~430 bp` |
| INTC-AAPL chip deal | Reported 5/8 (details not independently verified) | Reinforces U.S. chip-sovereignty story |
| Q1 2026 S&P 500 beat rate | Not pulled | Planner to-do |

**Interpretation.** This week's "Greed" reading is ≥ 50% driven by a single semiconductor story; ex-SOX, the SPX week likely compresses from `+2.3%` to `+1.0–1.3%` (inferred). The largest tail risk is therefore not recession or geopolitics, it is "AI-narrative crack + duration pressure happening simultaneously".

**Caveats.** AMD data-center revenue print, INTC-AAPL deal size, SOX weekly return, and AMD options open interest were not pulled.

---

## 6. What investors actually fear — risk ranking (also answers Q5)

| Rank | Risk | Probability (qualitative) | Sentiment hit if it triggers |
|---|---|---|---|
| 1 | AI/semis crowding unwind | Medium | High (largest index contributor; VIX spikes) |
| 2 | CPI/PPI upside → "higher-for-longer" | Medium | High (high-multiple growth re-rates) |
| 3 | Middle-East oil re-shock (WTI > `$100` sustained) | Medium | Medium (sticky inflation, central banks boxed) |
| 4 | Fed leadership-transition policy uncertainty | High (event known, not fully priced) | Medium |
| 5 | Recession / labour-market crack | Low (U/E 4.3%, claims 200K) | High but no near-term signal |

---

## 7. Next-week sentiment risk radar (answers Question #6)

| Watch item | Trigger threshold | Implication |
|---|---|---|
| May CPI / PPI | Headline / Core YoY ≥10 bp upside | Duration pressure → tech drawdown |
| Warsh confirmation (by `2026-05-15`) | Hearing tone (dove/hawk) | USD, long-end, growth multiples |
| WTI / Brent | WTI close ≥`$100` two consecutive sessions | Inflation-fear reignition |
| VIX | Break of 18, or single-day `+15%` | Greed → defence rotation |
| AAII Bull | ≥45% or Bear ≤22% | Contrarian sell signal forms |
| Money-market inflow | Weekly inflow `<+50B` or net outflow | Cash unlock → FOMO arrival |
| SOX vs SPX spread | 5-day cumulative > 600 bp | Crowding deepens |

---

## 8. Visualization-ready tables (one per planned chart)

### Table V1 · Sentiment thermometer (CNN F&G + VIX + AAII)

> Coverage `2026-04-01` → `2026-05-08`. This stage anchors only the week-end print (`2026-05-08`); intra-period series flagged `n/a` to be backfilled by the visualization stage from Finhacker, Cboe, AAII downloads.

| Date | CNN F&G | VIX | AAII Bull | AAII Neu | AAII Bear |
|---|---|---|---|---|---|
| 2026-04-03 | n/a | n/a | n/a | n/a | n/a |
| 2026-04-10 | n/a | n/a | n/a | n/a | n/a |
| 2026-04-17 | n/a | n/a | n/a | n/a | n/a |
| 2026-04-24 | n/a | n/a | n/a | n/a | n/a |
| 2026-05-01 | n/a | n/a | n/a | n/a | n/a |
| 2026-05-07 | n/a | n/a | `38.3%` | `28.7%` | `33.3%` |
| 2026-05-08 | `67` | n/a | – | – | – |

### Table V2 · Index & sector weekly-return bar chart

| Series | Week return | Status |
|---|---|---|
| SPX | `+2.3%` | Confirmed |
| IXIC | `+4.5%` | Confirmed |
| DJI | `+0.2%` | Confirmed |
| RUT | `+1.7%` | Confirmed |
| RSP | `≈+1.0–1.5%` | Inferred |
| SOX | `≈+8–9%` | Inferred (5/6 +4.5% + AMD lift) |
| XLK | n/a | Backfill |
| XLC | n/a | Backfill |
| XLY | n/a | Backfill |
| XLF | n/a | Backfill |
| XLI | n/a | Backfill |
| XLE | n/a (likely negative — WTI week `-7%`) | Inferred |
| XLB | n/a | Backfill |
| XLV | n/a (likely negative — healthcare funds `-2.05B`) | Inferred |
| XLP | n/a | Backfill |
| XLU | n/a | Backfill |
| XLRE | n/a | Backfill |

### Table V3 · Fund-flow waterfall (USD bn, w/e 2026-05-06)

| Category | Net flow | Suggested colour |
|---|---|---|
| Global Equity | `+4.35` | Green |
| U.S. Equity | `-2.26` | Red |
| Technology Funds | `+2.83` | Dark green |
| Healthcare Funds | `-2.05` | Red |
| Global Bond | `+17.04` | Blue |
| Money Market | `+148.18` | Dark blue |

### Table V4 · Market-breadth heatmap (placeholder)

| Row (Sector / Group) | Week return | Adv/Decl | 52w highs | 52w lows | % > 50DMA | % > 200DMA | vs SPX |
|---|---|---|---|---|---|---|---|
| Mag 7 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| RSP (Equal-weight) | `~+1.0–1.5%` | n/a | n/a | n/a | n/a | n/a | `-80 to -130 bp` |
| XLK | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| XLE | likely negative | n/a | n/a | n/a | n/a | n/a | n/a |
| XLV | likely negative | n/a | n/a | n/a | n/a | n/a | n/a |
| (other 8 sectors) | n/a | n/a | n/a | n/a | n/a | n/a | n/a |

> Visualization stage must source actuals from S&P Dow Jones / Bloomberg / FactSet.

### Table V5 · Catalyst timeline

| Date | Catalyst | Tape reaction |
|---|---|---|
| 2026-05-04 | Middle-East escalation / Brent `+5.8%` to `$114.44` | SPX `-0.4%`, DJI `-1.1%`, IXIC `-0.2%` |
| 2026-05-04 | Warsh-replaces-Powell coverage | USD, long-end (to be quantified) |
| 2026-05-05 | Oil pulls back | SPX `+0.8%`, IXIC `+1.0%` |
| 2026-05-06 | AMD print / SOX `+4.5%` | SPX `+1.5%`, IXIC `+2.0%` |
| 2026-05-07 | Claims `200K`; AAII print | SPX `-0.4%`, IXIC `-0.1%` |
| 2026-05-08 | April NFP `+115K` / U/E `4.3%` | SPX `+0.8%`, IXIC `+1.7%`, weekly highs |
| 2026-05-08 | LSEG Lipper / CNN F&G `67` / WTI `$94.92` | Confirms barbell flow read |

---

## 9. Follow-ups & unverified items

| Item | Status | Next step |
|---|---|---|
| Sector SPDR / RSP / SOX / Mag 7 single-name weekly returns | Not independently pulled | Visualization stage must overwrite "inferred" |
| VIX, VVIX, Cboe put/call, NAAIM, II bull-bear | Missing | Source from Cboe / NAAIM / Yardeni |
| Single ETF flows (SPY/QQQ/IWM/SMH/XLK/SGOV…) | Missing | ETF.com / issuer pages |
| CME FedWatch, UST 2Y/10Y, DXY, breakevens | Missing | CME / FRED / Treasury |
| AMD Q1 data-center revenue, INTC-AAPL deal size, Q1 beat rate | Missing | Company filings / LSEG I/B/E/S |
| AAII third-party vs official reconciliation | To-do | AAII official CSV |

---

## 10. Sources (matches the planner stage)

- AP, 2026-05-04 / 05-05 / 05-06 / 05-07 / 05-08 (URLs at planner lines 83–87).
- BLS Employment Situation, 2026-05-08.
- U.S. DOL ETA weekly claims, 2026-05-07.
- Pluang/Seeking Alpha AAII update, 2026-05-07; AAII methodology.
- Finhacker CNN F&G dataset, 2026-05-08.
- Reuters via MarketScreener, AMD/AI rally, 2026-05-06.
- Reuters via StreetInsider/LSEG Lipper fund flows, 2026-05-08.
- Kiplinger market close, 2026-05-08; Kiplinger Fed leadership, 2026-05-04.
- NYSE Holidays & Trading Hours.

> All numbers, tickers and URLs match the planner verbatim; no new independent number has been introduced without an `n/a / inferred / to-be-verified` flag.
