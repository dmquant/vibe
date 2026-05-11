---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly FX Research Report (2026-04-27 to 2026-05-01)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly FX Research Report (2026-04-27 to 2026-05-01)

> The upstream file `01_weekly_plan.md` was missing from the current workspace. This report reconstructs the FX plan from a matching adjacent workspace plan and covers FOMC, China PMI, the U.S. employment-data timing issue, CNH holiday liquidity, JPY intervention risk, EUR policy divergence, and carry trades.

## Prioritized Conclusions

| Conclusion | Numeric evidence | Strategy implication |
|---|---:|---|
| The dollar was not in a clean one-way rally; it was a split market shaped by high-rate support and the JPY intervention shock | DXY fell from 98.53 on 2026-04-24 to 98.16 on 2026-05-01, -0.38%; the 2026-04-29 FOMC held rates at 3.50%–3.75% | USD longs should avoid the JPY intervention window; range trades backed by rate differentials are cleaner than chasing upside |
| The renminbi had limited domestic support but a stable central-bank pricing anchor | China April manufacturing PMI was 50.3 and non-manufacturing PMI was 49.4; USD/CNY reference rate rose only +0.08% from 2026-04-27 to 2026-04-30 | CNY is behaving more like a low-volatility anchor; after the holiday, watch whether the fixing continues to cap depreciation expectations |
| JPY carry trades reached a risk threshold | USD/JPY fell from 159.21 on 2026-04-27 to 156.56 on 2026-04-30, -1.66%; Reuters/Investing reported a 2.1% intraday fall to 156.985 on 2026-04-30 | The 160 area has become a policy line, not just technical resistance; JPY funding legs need lower leverage or upside protection |
| EUR/USD pressure is no longer about a simple “ECB June cut” story; it is about an energy-driven stagflation shock | Eurostat April euro-area inflation was 3.0%, up from 2.6% in March; EUR/USD fell -0.40% from 2026-04-27 to 2026-04-30 | EUR should not be shorted mechanically: higher inflation may delay easing or create a hawkish tail risk |
| U.S. April NFP was not released on 2026-05-01 | BLS states that the April Employment Situation is scheduled for 2026-05-08; Investing.com shows consensus at +73K and prior at +178K | April NFP cannot be used as a realized signal this week; it is next week’s event risk |

## Data Sources And Method

| Data block | Method | Raw inputs |
|---|---|---|
| FX and G10 performance | Used Frankfurter/ECB USD reference rates to calculate local-currency performance versus USD from 2026-04-27 to 2026-04-30; used Investing.com historical closes for DXY | Frankfurter API; Investing.com DXY historical data |
| RMB fixing | Collected daily CFETS/PBoC-authorized fixing notices from 2026-04-27 to 2026-04-30 and compared them with USD/CNY reference rates | China Economic Net, China News, Frankfurter |
| Rate differentials | Used FRED for UST 2Y/10Y and MacroView for CGB 10Y; calculated UST10Y-CGB10Y in bps | FRED `DGS10`, `DGS2`; MacroView China 10-year government bond yield |
| Macro events | Used the official Fed statement and Powell press conference for FOMC; China government/NBS for PMI; Eurostat for inflation; BLS scheduling and Investing.com consensus for NFP | Federal Reserve, NBS, Eurostat, BLS, Investing.com |
| Carry trades | Used JPY-funded target-currency spot returns from 2026-04-27 to 2026-04-30 plus an approximate one-week policy-rate carry | BOJ 0.75%, Fed midpoint 3.625%, PBoC 7D repo 1.40%, Banxico 6.75%, BCB Selic 14.75% |

## Question 1: How Did The Fed’s Hawkish/Dovish Balance Reshape The Dollar?

### Method

I compared DXY, UST 2Y/10Y yields, and major FX pairs before and after the 2026-04-29 FOMC decision. The policy read uses the Federal Reserve’s official statement and Powell’s press conference. The price window is 2026-04-27 to 2026-05-01 for DXY, because DXY has a 2026-05-01 close, while ECB/Frankfurter reference FX rates are available through 2026-04-30.

### Findings

| Indicator | Start | End | Change |
|---|---:|---:|---:|
| Fed funds target range | 3.50%–3.75% | 3.50%–3.75% | 0 bp |
| DXY | 98.53 (2026-04-24) | 98.16 (2026-05-01) | -0.38% |
| UST 10Y | 4.31% (2026-04-24) | 4.40% (2026-04-30) | +9 bp |
| UST 2Y | 3.78% (2026-04-24) | 3.88% (2026-04-30) | +10 bp |
| USD/JPY | 159.21 (2026-04-27) | 156.56 (2026-04-30) | -1.66% |
| EUR/USD | 1.1749 (2026-04-27) | 1.1702 (2026-04-30) | -0.40% |

The Fed did not pivot dovishly: the official statement kept the target range at 3.50%–3.75% and continued to emphasize elevated inflation and uncertainty. Rates still supported the dollar, with both UST 2Y and 10Y yields higher on the week, but DXY was dragged lower by the sharp JPY rally on April 30 and by some unwind of safe-haven dollar demand. The result is a decomposed dollar beta: the USD still has rate support against low-yield Asian currencies, but USD/JPY is constrained by intervention risk. April NFP was on the market’s radar, but BLS scheduling shows the actual release date is 2026-05-08, so it cannot be treated as a realized dollar catalyst this week.

### Evidence

- Federal Reserve, 2026-04-29 FOMC statement: https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm
- Powell press conference transcript PDF, 2026-04-29: https://www.federalreserve.gov/mediacenter/files/FOMCpresconf20260429.pdf
- FRED `DGS10`, `DGS2` CSV: https://fred.stlouisfed.org/graph/fredgraph.csv?id=DGS10,DGS2
- Investing.com DXY historical data: https://www.investing.com/indices/usdollar-historical-data
- BLS Employment Situation March 2026, including the 2026-05-08 schedule: https://www.bls.gov/news.release/empsit.nr0.htm?popup=false

### Caveats

DXY and ECB reference FX rates are not timestamp-aligned. FRED daily FX series had not updated beyond 2026-04-24, so the 2026-04-27 to 2026-04-30 cross rates use Frankfurter/ECB reference rates. The April 2026 NFP actual has not been released; NFP-related conclusions are event-risk framing only.

## Question 2: Did China’s April PMI Support RMB Stability?

### Method

I compared April NBS manufacturing and non-manufacturing PMI with the prior six-month trend, then checked USD/CNY reference rates, daily fixing levels, and the fixing gap. The gap is calculated as `(USD/CNY reference rate - fixing) * 10000`; a negative value means the reference rate is below the fixing, or that the RMB reference rate is stronger than the fixing.

### Findings

| Indicator | March | April | MoM |
|---|---:|---:|---:|
| NBS manufacturing PMI | 50.4 | 50.3 | -0.1 |
| NBS non-manufacturing PMI | 50.1 | 49.4 | -0.7 |
| USD/CNY reference rate | 6.8359 (2026-04-24, FRED) | 6.8287 (2026-04-30, Frankfurter) | -0.11% |
| USD/CNY fixing | 6.8579 (2026-04-27) | 6.8628 (2026-04-30) | +49 pips |

Manufacturing PMI stayed above 50 for a second month, but 50.3 is only a mild expansion and the non-manufacturing reading fell to 49.4, showing pressure in services and construction. The RMB did not get a strong trend-appreciation impulse from PMI; the signal was more about fixing stability and low volatility while the broad dollar softened. From April 27 to April 30, USD/CNY reference rates rose only 0.08%, while the fixing was weakened by 49 pips, suggesting the PBoC allowed a small and controlled adjustment in the central parity. The conclusion is that PMI supports RMB stability, not outright appreciation.

### Evidence

- China government / Xinhua, China manufacturing PMI at 50.3 in April and non-manufacturing PMI at 49.4: https://english.www.gov.cn/archive/statistics/202604/30/content_WS69f30998c6d00ca5f9a0ab95.html
- China Economic Net, 2026-04-27 RMB fixing notice: https://www.ce.cn/xwzx/gnsz/gdxw/202604/t20260427_2932520.shtml
- China Economic Net, 2026-04-28 RMB fixing notice: https://www.ce.cn/xwzx/gnsz/gdxw/202604/t20260428_2934841.shtml
- China Economic Net, 2026-04-29 RMB fixing notice: https://www.ce.cn/xwzx/gnsz/gdxw/202604/t20260429_2937765.shtml
- China News, 2026-04-30 fixing at 6.8628: https://www.chinanews.com.cn/cj/2026/04-30/10613486.shtml

### Caveats

Frankfurter CNY is an ECB reference rate, not the onshore interbank close. The fixing gap is therefore useful for direction, not for precise CFETS trading-desk deviation. There was no May 1 China fixing because mainland markets were closed for the Labor Day holiday.

## Question 3: How Large Was The CNH Holiday Effect?

### Method

The original plan asked for USD/CNH spot and implied volatility. A reliable public USD/CNH 1M implied-volatility series was not available without vendor access, so this report substitutes USD/CNY reference rates, public USD/CNH historical points, and fixing gaps, while explicitly preserving the vendor-data gap. The core window is 2026-04-27 to 2026-04-30 because mainland China was closed on 2026-05-01.

### Findings

| Indicator | Value | Meaning |
|---|---:|---|
| USD/CNH | 6.8312 (2026-04-30) | Public historical table shows no obvious offshore RMB dislocation |
| USD/CNY reference rate | 6.8287 (2026-04-30) | About 25 pips away from USD/CNH |
| USD/CNY fixing | 6.8628 (2026-04-30) | About 341 pips above the reference rate |
| 2026-05-01 China fixing | None | Labor Day holiday; no onshore anchor |
| USD/CNH 1M IV | Not publicly filled | Requires Bloomberg/Reuters/bank quotes |

CNH did not show a classic pre-holiday liquidity squeeze: public USD/CNH at 6.8312 was only about 25 pips away from the USD/CNY reference rate of 6.8287, below the level that would usually force a macro hedging upgrade. The more important risk lies after the holiday: the U.S. April employment report is actually due on 2026-05-08 and may coincide with the return of onshore liquidity. If the PBoC keeps the fixing around 6.86 while USD/CNH stays near 6.83, the market will read it as expectation management rather than looser depreciation tolerance. The conclusion is that this week’s holiday effect was mild, with the real risk window pushed to May 8.

### Evidence

- CurrencyConvert USD/CNH historical table: https://currencyconvert.online/usd/cnh/table
- China News 2026-04-30 fixing: https://www.chinanews.com.cn/cj/2026/04-30/10613486.shtml
- BLS Employment Situation March 2026, April report scheduled for 2026-05-08: https://www.bls.gov/news.release/empsit.nr0.htm?popup=false

### Caveats

USD/CNH 1M implied volatility, CNH forwards, and interbank depth are vendor/trading-desk data and could not be fully populated from public sources. With public historical spot points as a substitute, this report cannot infer true options skew or a holiday liquidity premium.

## Question 4: Did Yen Depreciation Reach The Carry-Trade Unwind Line?

### Method

I used USD/JPY and a JPY-funded carry basket. The spot leg is the target currency’s move versus JPY; the carry leg is approximated as one week of policy-rate differential: `(target policy rate - BOJ 0.75%) / 52`. The window is 2026-04-27 to 2026-04-30.

### Findings

| Trade | Spot return | Approx. one-week carry | Approx. total return |
|---|---:|---:|---:|
| Borrow JPY, buy MXN | -2.57% | +0.12% | -2.45% |
| Borrow JPY, buy BRL | -1.93% | +0.27% | -1.66% |
| Borrow JPY, buy USD | -1.66% | +0.06% | -1.61% |
| Borrow JPY, buy CNY | -1.75% | +0.01% | -1.73% |

The yen rally fully overwhelmed weekly carry returns. Even BRL, with an annualized policy-rate differential of about 14.0 percentage points over JPY, earned only about 0.27% of one-week carry, far too little to offset a 1.93% spot loss. Reuters/Investing reported that after Japan’s strongest intervention warning on April 30, USD/JPY fell 2.1% to 156.985, with markets suspecting or reporting official yen buying. The 160 area is now a policy line, not a normal technical resistance level. The conclusion is that JPY-funded carry still has positive rate differentials, but Sharpe has deteriorated and positioning should shift from “earn carry” to “protect gap risk.”

### Evidence

- Reuters via Investing.com, Japan yen surges 2%; officials issue strongest intervention warning yet: https://www.investing.com/news/economy-news/japan-yen-surges-2-officials-issue-strongest-intervention-warning-yet-4648869
- Bank of Japan homepage, uncollateralized overnight call rate around 0.75%: https://www.boj.or.jp/en/
- Banco Central do Brasil, Selic decision table: https://www.bcb.gov.br/en/monetarypolicy/interestrates
- Banco de México monetary policy statements: https://www.banxico.org.mx/publications-and-press/announcements-of-monetary-policy-decisions/monetary-policy-announcements.html
- Frankfurter API, USD/JPY, USD/MXN, USD/BRL: https://api.frankfurter.app/2026-04-27..2026-04-30?from=USD&to=JPY,MXN,BRL,CNY

### Caveats

Policy rates are not directly tradable funding rates. Cross-currency basis, margin costs, and holiday liquidity can materially change actual carry PnL. The final size of Japanese official intervention must be confirmed in the Ministry of Finance’s monthly intervention operations data.

## Question 5: Did Euro-Area Inflation Reinforce A June ECB Cut?

### Method

I compared Eurostat’s April flash HICP estimate with EUR/USD performance to assess ECB policy divergence. The price window uses the 2026-04-27 to 2026-04-30 EUR/USD reference rate.

### Findings

| Indicator | Previous | Latest | Change |
|---|---:|---:|---:|
| Euro-area HICP YoY | 2.6% (2026-03) | 3.0% (2026-04 flash) | +0.4 pct |
| Energy inflation YoY | n/a | 10.9% (2026-04 flash) | n/a |
| EUR/USD | 1.1749 (2026-04-27) | 1.1702 (2026-04-30) | -0.40% |

The data did not reinforce a June cut; it weakened the easing narrative. April inflation rose to 3.0%, with energy inflation at 10.9%. EUR/USD still fell 0.40%, meaning the euro did not receive enough support from higher inflation because the same energy shock also damaged growth expectations. For FX, this is not a classic “higher inflation supports the currency” mix; it is a stagflation shock. The conclusion is that EUR/USD downside is still exposed to growth drag, but a more hawkish ECB tail risk reduces the risk-reward of chasing shorts.

### Evidence

- Eurostat, Euro area annual inflation up to 3.0%, 2026-04 flash estimate: https://ec.europa.eu/eurostat/en/web/products-euro-indicators/w/2-30042026-ap
- Frankfurter API, EUR/USD reference rates: https://api.frankfurter.app/2026-04-27..2026-04-30?from=USD&to=EUR

### Caveats

The four-day EUR/USD window also includes FOMC, JPY intervention, energy prices, and month-end rebalancing, so it cannot be attributed solely to HICP. Eurostat’s flash estimate may be revised.

## Chart-Ready Data Tables

### Chart 1: RMB Path (Fixing vs USD/CNY Reference Rate)

| Date | USD/CNY fixing | USD/CNY reference rate | Reference-fixing gap (pips) | Reference deviation |
|---|---:|---:|---:|---:|
| 2026-04-27 | 6.8579 | 6.8231 | -348 | -0.507% |
| 2026-04-28 | 6.8589 | 6.8388 | -201 | -0.293% |
| 2026-04-29 | 6.8608 | 6.8335 | -273 | -0.398% |
| 2026-04-30 | 6.8628 | 6.8287 | -341 | -0.497% |

Note: the original plan requested a USD/CNH chart. Because public high-quality CNH daily closes and 1M IV were incomplete, this chart substitutes a verifiable fixing-vs-USD/CNY-reference table.

### Chart 2: G10 FX Performance Heatmap Versus USD

| Currency | Quote convention | 2026-04-27 | 2026-04-30 | Currency performance vs USD |
|---|---|---:|---:|---:|
| JPY | USD/JPY | 159.21 | 156.56 | +1.69% |
| CHF | USD/CHF | 0.7839 | 0.7853 | -0.18% |
| EUR | EUR/USD | 1.1749 | 1.1702 | -0.40% |
| GBP | GBP/USD | 1.3570 | 1.3509 | -0.45% |
| CAD | USD/CAD | 1.3600 | 1.3668 | -0.50% |
| AUD | AUD/USD | 0.7192 | 0.7148 | -0.61% |
| NOK | USD/NOK | 9.2629 | 9.3252 | -0.67% |
| NZD | NZD/USD | 0.5919 | 0.5864 | -0.93% |
| SEK | USD/SEK | 9.1825 | 9.2766 | -1.01% |

### Chart 3: U.S.-China 10Y Spread And USD/CNY

| Date | UST 10Y | CGB 10Y | UST-CGB spread | USD/CNY reference rate |
|---|---:|---:|---:|---:|
| 2026-04-24 | 4.31% | 1.7601% | 255.0 bps | 6.8359 |
| 2026-04-27 | 4.35% | 1.7697% | 258.0 bps | 6.8231 |
| 2026-04-28 | 4.36% | 1.7654% | 259.5 bps | 6.8388 |
| 2026-04-29 | 4.42% | 1.7444% | 267.6 bps | 6.8335 |
| 2026-04-30 | 4.40% | 1.7473% | 265.3 bps | 6.8287 |

### Chart 4: PMI Trend Matrix

| Month | Manufacturing PMI | Non-manufacturing PMI | Interpretation |
|---|---:|---:|---|
| 2025-11 | 49.2 | 49.5 | Both contracted |
| 2025-12 | 50.1 | 50.2 | Brief return to expansion |
| 2026-01 | 49.3 | 49.4 | Weaker around the Lunar New Year period |
| 2026-02 | 49.0 | 49.5 | Manufacturing at a four-month low |
| 2026-03 | 50.4 | 50.1 | Production recovery |
| 2026-04 | 50.3 | 49.4 | Mild manufacturing expansion; services/construction drag |

### Chart 5: DXY And Event Path

| Date | DXY close | Daily change | Event note |
|---|---:|---:|---|
| 2026-04-24 | 98.53 | -0.24% | Pre-FOMC weekly baseline |
| 2026-04-27 | 98.50 | -0.04% | Stable risk tone at the start of the week |
| 2026-04-28 | 98.64 | +0.15% | Mild pre-FOMC dollar strength |
| 2026-04-29 | 98.96 | +0.33% | FOMC held 3.50%–3.75% |
| 2026-04-30 | 98.06 | -0.91% | JPY rally dragged DXY lower |
| 2026-05-01 | 98.16 | +0.10% | China holiday; modest DXY repair |

### Chart 6: JPY-Funded Carry Trade Return Matrix

| Trade | Target policy rate | JPY policy rate | Annualized rate differential | Spot return | One-week carry | Approx. total return |
|---|---:|---:|---:|---:|---:|---:|
| Borrow JPY, buy MXN | 6.75% | 0.75% | 6.00 pct | -2.57% | +0.12% | -2.45% |
| Borrow JPY, buy BRL | 14.75% | 0.75% | 14.00 pct | -1.93% | +0.27% | -1.66% |
| Borrow JPY, buy USD | 3.625% | 0.75% | 2.875 pct | -1.66% | +0.06% | -1.61% |
| Borrow JPY, buy CNY | 1.40% | 0.75% | 0.65 pct | -1.75% | +0.01% | -1.73% |

## Follow-Up Items

| Date | Item | Question to verify |
|---|---|---|
| From 2026-05-05 | China post-holiday fixing resumes | Whether the PBoC keeps the USD/CNY fixing near 6.86 |
| 2026-05-08 | U.S. April Employment Situation | Whether NFP lands near the +73K consensus and whether wages revive USD rate support |
| Late May 2026 | Japan MoF intervention operations | Whether 2026-04-30 is formally recorded as yen-buying, dollar-selling intervention |
| 2026-06-11 | ECB meeting | Whether 3.0% HICP shifts the ECB from a cut narrative to hikes or delayed easing |
