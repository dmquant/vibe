---
source: ai-institute
resource_type: research-result
report_kind: briefing
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# AI Institute Morning Brief

Kind: **briefing**
Analyst: **(unknown)**

## Links

- Report type: [[briefing]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# AI Institute Morning Brief

Date anchor: 2026-05-13 [source: shell `date +%Y-%m-%d` 2026-05-13]. Relative-date convention: previous trading day = 2026-05-12 [source: 02_china_macro.md date anchor 2026-05-13]; last week = 2026-05-04 to 2026-05-10 [source: 02_china_macro.md date anchor 2026-05-13].

Data note: `my_recent_reports.md` was fetched successfully but is empty, so there is no prior 7-day Morning Brief Editor archive to compare against; no identifiable contradiction with my own recent reports [source: `my_recent_reports.md` 0 lines 2026-05-13]. The 24h cross-analyst archive `recent_reports.md` was fetched successfully and includes 25 of 25 candidate(s), 1145 lines [source: recent_reports.md header 2026-05-13]. Local drafts 00-05 are present; however, `05_risk_watch.md` incorrectly says `04_sentiment_flows.md` was missing, while this run did read the Chinese `04_sentiment_flows.md` [source: workspace `rg --files` 2026-05-13].

## 1. Institute Output Recap

| Module | Editor Summary |
|---|---|
| Focus themes | Yesterday’s institute work converged on three lines: quantum-sovereignty divergence, AI capex duration + grid/data-center physical bottlenecks, and the Hormuz stagflation tail [source: 00_研究院产出.md §1 2026-05-13]. |
| Output scale | The 24h window completed 88 whiteboard cards across 11 boards; 31 automated handoffs; 2 completed deep dives; fact checks included 26 disputed, 48 unverifiable, 8 verified, and 1 uncertain item [source: 00_研究院产出.md §0/§3/§4 2026-05-13]. |
| Key handoffs | The most informative handoffs covered AI infrastructure as duration, the A/H tech valuation gap, Hormuz macro transmission, 30Y Treasury auction sensitivity, distribution-equipment backlog, and nuclear/SMR data-center agreements [source: 00_研究院产出.md §2 2026-05-13]. |
| Deep research | `600570.SH` and `002410.SZ` are completed deep dives, finished at 2026-05-12T15:35:12Z and 2026-05-12T14:05:12Z respectively; `688111.SH` is running, while `688012.SH` / `002371.SZ` / `688027.SH` / `A`(US) are pending [source: 00_研究院产出.md §3 2026-05-13]. |
| Next follow-ups | Close board `bdf518e1` needs-revision, re-check disputed quantum-sovereignty figures, update the 30Y auction/PPI linkage, decide whether AI capex becomes the daily headline, and build the SpaceX IPO spillover investable list [source: 00_研究院产出.md §5 2026-05-13]. |

Structural coverage gaps remain in textiles/apparel, broad health, and life sciences/biotech, with activation rates of 1.2%, 1.5%, and 1.8% respectively [source: 00_研究院产出.md §6 2026-05-13]. These are not today’s trading core, but they should enter the research queue so the institute does not keep recycling only tech and energy narratives.

## 2. Overnight And Pre-Open Snapshot

| Asset / Variable | Latest Available Reading | Editor Read |
|---|---:|---|
| Brent | 107.28 USD/bbl [source: energy-analyst oil_monitor_api.md internal API/stooq cb.f 2026-05-13] | Inside the local 100–110 baseline range; do not chase Brent. A 130–155 move is the sustained SoH disruption tail [source: 01_macro_overnight.md §3 2026-05-13]. |
| WTI | 101.78 USD/bbl [source: energy-analyst oil_monitor_api.md internal API/stooq cl.f 2026-05-13] | The spread is about 5.50 USD/bbl, consistent with a live supply shock but not the extreme tail [source: energy-analyst oil_monitor_api.md 2026-05-13]. |
| DXY | 98.289 [source: fx-strategist fx_majors_api.md internal API 2026-05-13] | Still far from the DXY 108–116 Hormuz-tail band; directional USD positioning is not the base case [source: 01_macro_overnight.md §5-4 2026-05-13]. |
| EUR/USD | 1.17396 [source: fx-strategist fx_majors_api.md internal API 2026-05-13] | Confirms the weak-dollar message from DXY. |
| USD/JPY | 157.593 [source: fx-strategist fx_majors_api.md internal API 2026-05-13] | Carry is still powerful, but the 155–160 zone should be treated as an event-risk band, not a clean carry-add zone [source: fx-strategist whiteboard card-08 2026-05-13]. |
| USD/CNY | 6.7915 [source: fx-strategist fx_majors_api.md internal API 2026-05-13] | Well below the 7.30 risk gate; A-share trading still needs the 09:15 fixing [source: 02_china_macro.md §3.1 2026-05-13]. |
| S&P 500 | 7,400.96, down 11.88 points / 0.2% on 2026-05-12 [source: AP/WTOP via derivatives-strategist handoff 2026-05-13] | 7,350–7,360 is the negative-gamma confirmation band, about 40.96 points / 0.55% below the close [source: derivatives-strategist handoff 2026-05-13]. |
| VIX / PCCI | VIX 18.25, PCCI 1.154, Skew 140.21, MOVE 67.25 [source: sentiment-analyst topic_pitches.md 2026-05-13] | Sentiment is neutral-defensive, not crisis-level; institutions are buying index protection while single-stock risk appetite persists. |

US macro: April CPI was 3.8% YoY and 0.6% MoM; core CPI was 2.8% YoY and 0.4% MoM [source: BLS CPI via chief-economist morning_macro_brief.md 2026-05-13]. On April 29, the FOMC kept the fed funds target range at 3.50%–3.75% [source: Fed statement via chief-economist morning_macro_brief.md 2026-05-13]. Today’s largest external variable is the PPI and 30Y Treasury auction linkage; a 30Y tail > 3.0 bp or bid-to-cover < 2.20x should be treated as a failed auction [source: bond-analyst handoff_response.md 2026-05-13].

## 3. China Macro And Policy Calendar

The China baseline remains “easing bias, neutral timing”: do not bet on a May rate cut, and do not bet on unchanged policy either [source: 02_china_macro.md §5 2026-05-13]. Actual release dates for April TSF / M2 / RMB loans, industrial production / retail sales / fixed-asset investment / real-estate investment remain `[date unknown]`; do not quote point estimates before data-team backfill [source: 02_china_macro.md §2 2026-05-13].

| Watch Item | Use Today |
|---|---|
| 09:15 USD/CNY fixing | Around 7.25 means wait; above 7.30 together with Brent above 130 shifts the portfolio into the tail-risk playbook [source: 02_china_macro.md §3.1 2026-05-13]. |
| OMO, DR007, Shibor | If DR007 minus OMO 7D widens, do not chase small caps or tech; only renewed liquidity injection reopens growth exposure review [source: 05_risk_watch.md §2 2026-05-13]. |
| May MLF / LPR | Dates remain `[date unknown]`; change the narrative only after PBoC announcements [source: 02_china_macro.md §2/§5 2026-05-13]. |
| High-frequency consumption/property | May Day domestic trips were 325 million, total spending was RMB 185.492 billion, per-capita spending was about RMB 570.7, down about 0.6% YoY; 30-city new-home transaction area was +9.6% YoY through 2026-05-09 in May, and 18-city second-hand home transaction area was +18.1% YoY [source: china-macro handoff_response.md 2026-05-13]. |

Policy read-through: consumption is not collapsing, but “higher volume, weaker ticket size” is clear; property is improving at the margin but does not yet confirm a national-scale stimulus. The more likely mix is targeted support for services consumption, trade-ins, local housing policy, provident-fund rules, destocking via purchase programs, and urban renewal [source: china-macro handoff_response.md 2026-05-13].

## 4. A-Share Strategy And Watch List

Do not change the asset-allocation regime today: BASELINE-NEUTRAL remains in force. Only a 30Y failed auction, Brent above 130, or DXY entering 108–116 changes the regime [source: 03_ashare_strategy.md §6 2026-05-13].

| Theme | Stance | Intraday Check |
|---|---|---|
| Domestic AI compute | Overweight | Watch the A/H tech gap in the first 30 minutes; continued convergence confirms “certified Alpha” [source: 03_ashare_strategy.md §2/§6 2026-05-13]. |
| Grid / UHV / transformers / GOES / utilities | Overweight | Cross-check with LME copper/aluminum and distribution backlog; delivery queues extend into 2027–2028 [source: 03_ashare_strategy.md §2; industrials-analyst handoff_response.md 2026-05-13]. |
| Dividend: banks / expressways / power / telecoms | Benchmark to modest overweight | Raise only if the 10Y CGB breaks below its range; otherwise do not chase [source: 03_ashare_strategy.md §2 2026-05-13]. |
| Quantum tech / infosec / domestic substitution chips | Tactical overweight | Use the sovereign-divergence and substitution direction only; do not use disputed UTXO-discount or ECC-cracking thresholds [source: 03_ashare_strategy.md §3.5 2026-05-13]. |
| Export chains, solar/lithium/consumer-electronics contract manufacturing | Benchmark-underweight / underweight | Cut exposure on DXY strength, tariff shocks, or oil-cost pressure; generic capacity Beta needs NVIDIA / Google-level certification to be re-rated [source: 03_ashare_strategy.md §2 2026-05-13]. |

Stock watch: `600570.SH` and `002410.SZ` are first-tier completed deep dives; `688111.SH` is running; `688012.SH`, `002371.SZ`, `688027.SH`, and `A`(US) are pending, so do not price them one-sided before completion [source: 03_ashare_strategy.md §3.1/§3.2 2026-05-13]. Keep 5%–10% liquidity for tail hedging or Alpha adds after A/H tech-gap validation; do not spend it chasing strength [source: 03_ashare_strategy.md §5.1 2026-05-13].

## 5. Sentiment And Flows Dashboard

The local sentiment report does not provide verified northbound, southbound, ETF, margin-financing, limit-up/down, or block-trade/Dragon-Tiger-list point estimates; these must be backfilled by 09:15 SGT [source: 04_sentiment_flows.md §11 2026-05-13]. Use thresholds before the live numbers arrive:

| Gauge | Threshold | Action |
|---|---:|---|
| Northbound T-1 | Net inflow > RMB 5.0 billion plus buying in power/AI compute is supportive; net outflow > RMB -5.0 billion while the index rises is defensive [source: 04_sentiment_flows.md §2 2026-05-13] | Confirms whether foreign capital supports the themes. |
| Southbound | 5-day net inflow > HKD 20.0 billion and AH premium < 125 implies A-share tech beta should shift to alpha [source: 04_sentiment_flows.md §3 2026-05-13] | Avoid ignoring the Hong Kong valuation anchor. |
| Margin financing | Financing purchases / turnover > 9.5% is warm; > 11% is overheated [source: 04_sentiment_flows.md §5 2026-05-13] | Cut small-cap and thematic leverage when overheated. |
| Limit-up/down | Limit-up > 80 is warm, > 120 is overheated; more than 25 names with at least 3 limit-up boards signals a late stage [source: 04_sentiment_flows.md §6 2026-05-13] | Rotate from theme beta into Alpha + dividend defense. |
| Tail hedge | Gold ETF and oil ETF inflows both expand while VIX > 22 [source: 04_sentiment_flows.md §10 2026-05-13] | Trigger the Hormuz/stagflation-tail checklist. |

## 6. Risk Alerts And Meeting Actions

Current risk light: yellow [source: 05_risk_watch.md §0 2026-05-13]. The portfolio does not need full-system de-risking, but it must respect three gates: 30Y Treasuries, Brent/DXY/USDCNH, and margin/limit-up heat.

| Risk | Trigger | Action |
|---|---|---|
| Long-end rates shock | 30Y tail > 3.0 bp or bid-to-cover < 2.20x [source: 01_macro_overnight.md §5-3 2026-05-13] | Cut small caps, generic growth, copper-chain risk, and cash-flow-light duration assets. |
| Hormuz stagflation tail | Brent > 130 together with DXY 108–116 / USDCNH > 7.30 [source: 05_risk_watch.md §5 2026-05-13] | Rotate to upstream energy, coal, tankers, gold equities, and staples; cut airlines, export chains, and cost-sensitive chemicals. |
| Sentiment overheating | Limit-up > 120, > 25 names with at least 3 boards, and financing purchases / turnover > 11% all trigger [source: 05_risk_watch.md §5 2026-05-13] | Lower total beta and preserve the 5%–10% liquidity reserve. |
| Internal research quality | 26 disputed out of 83 completed fact cards, about 31% [source: 05_risk_watch.md §4.1 2026-05-13] | Ban disputed figures such as UTXO 15–30%, ECC 26k / 500k, and reliable gas-power 6.3 GW from investment arguments [source: 05_risk_watch.md §4.1 2026-05-13]. |

P0 meeting actions: backfill 30Y auction tail, bid-to-cover, UST curve, DXY, Brent, and USDCNH; freeze disputed figures; reserve the 5%–10% liquidity sleeve for tail hedges; complete northbound, southbound, ETF, margin, limit-up/down, and Dragon-Tiger-list backfills by 09:15 SGT [source: 05_risk_watch.md §6 2026-05-13].

## 7. Research Assignments For Today

| Priority | Task | Suggested Owner | Reason |
|---|---|---|---|
| P0 | Re-check quantum-sovereignty numbers: UTXO discount, ECC cracking threshold, FTQC lag | `thematic-researcher` + `qa-manager` | Disputed numbers have entered the core narrative and cannot keep flowing into position arguments [source: 00_研究院产出.md §4/§5 2026-05-13]. |
| P0 | Real-time 30Y auction + PPI review | `bond-analyst` | This is today’s largest cross-asset external variable, and the failed-auction threshold is already defined [source: bond-analyst handoff_response.md 2026-05-13]. |
| P1 | Decide whether AI capex duration trap becomes the lead theme | `chief-strategist` + `asset-allocator` | Upstream has already pinged this, but it should not become a portfolio-level risk-budget anchor until decided [source: 05_risk_watch.md §4.2 2026-05-13]. |
| P1 | Map the 45GW nuclear MOU into A/H investable names | `utilities-analyst` + `ashare-strategist` | The assumptions of China National Nuclear at 18–22 GW with >85% certainty and CGN at 14–17 GW with 70–80% certainty need formal-source support [source: utilities-analyst handoff_response.md 2026-05-13]. |
| P1 | Verify FPS Q3 backlog / bookings | `industrials-analyst` | FY2026 Q3 call is scheduled for 2026-05-14 11:00 ET and will test grid-equipment order quality [source: industrials-analyst handoff_response.md 2026-05-13]. |
| P2 | Coverage-gap whiteboards: textiles/apparel, broad health, life sciences/biotech | `consumer-analyst` + `healthcare-analyst` + `thematic-researcher` | The three chains have activation rates of only 1.2%, 1.5%, and 1.8% [source: 00_研究院产出.md §6 2026-05-13]. |

## 8. Three-Sentence Summary

Today is not a systemic de-risking day; it is a yellow-light discipline day, with BASELINE-NEUTRAL intact and exposure balanced across dividends, certified AI Alpha, grid bottlenecks, and necessary stagflation-tail hedges.  
The most important external variable is the 30Y Treasury auction/PPI linkage, followed by the Brent-DXY-USDCNH gate set; unbackfilled market and flow numbers must not become trading conclusions.  
The institute’s largest internal risk is not a lack of views, but too many disputed numbers, so today’s workflow must first repair the evidence chain before translating quantum sovereignty, AI capex, and nuclear/grid narratives into tradable lists.
