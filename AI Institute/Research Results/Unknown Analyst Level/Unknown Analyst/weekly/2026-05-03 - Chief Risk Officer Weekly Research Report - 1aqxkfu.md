---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Chief Risk Officer Weekly Research Report

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Chief Risk Officer Weekly Research Report

**Coverage window:** 2026-04-27 to 2026-05-01.  
**Bottom line:** This was not a credit-crash week; it was a combined rates, AI concentration, and yen tail-risk week. The 60/40 portfolio’s 30-day rolling 95% one-day VaR ended at **1.27%**, below the internal **1.50%** alert line but still elevated; the 10-year Treasury yield rose from **4.31%** to **4.40%**, and a break above **4.80%** would imply about **-1.17%** duration drag at the balanced-portfolio level, or **-3.4% to -4.1%** if equity valuation repricing occurs at the same time. Credit spreads did not show abnormal widening: HY OAS narrowed from **2.86%** to **2.83%**, while IG OAS widened only from **0.80%** to **0.81%**. The more important tail risks are Mag-7 concentration at **30.44%**, Top 10 weight at **35.59%**, and the USD/JPY intraday squeeze from **160.72 to 155.50**.

## Risk Dashboard

| Metric | 2026-04-24 | 2026-05-01/latest | Weekly change | Risk view |
|---|---:|---:|---:|---|
| 60/40 30-day rolling 95% VaR | 1.27% | 1.27% | 0.00 pp | Below the 1.50% alert line |
| 60/40 30-day rolling CVaR | 1.32% | 1.32% | 0.00 pp | Left tail remains elevated |
| S&P 500 | 7,165.08 | 7,230.12 | +0.91% | Index at a new high |
| Nasdaq 100 | 24,836.60 | 25,114.44 | +1.12% | Technology still leads |
| VIX | Sub-20 area | 16.98/16.99 | Low-volatility zone | Spot vol is low, futures curve is higher |
| 10Y UST | 4.31% | 4.40% | +9 bp | Duration pressure increased |
| 2Y-10Y spread | +53 bp | +52 bp | -1 bp | Bear flattening |
| 5Y breakeven | 2.61% | 2.69% | +8 bp | Inflation expectations rose |
| 10Y breakeven | 2.42% | 2.48% | +6 bp | Inflation risk remains |
| HY OAS | 2.86% | 2.83% | -3 bp | No credit squeeze |
| IG OAS | 0.80% | 0.81% | +1 bp | Mild credit differentiation |
| Mag-7 weight | n/a | 30.44% | n/a | High crowding |

## Question 1: Has Technology Volatility Spilled Over Into the Broad Market?

### Method

I used StatMuse daily closes for the S&P 500, Nasdaq 100, XLK, and IEF. The 60/40 portfolio is defined as **60% S&P 500 + 40% IEF**, with 95% VaR and CVaR calculated by historical simulation over the latest 30 trading days. The comparison basis is the internal one-day 95% VaR alert line of **1.50%**, supplemented by 30-day full-sample and downside-day correlations to measure technology spillover into the broad index.

### Findings

| Metric | Value |
|---|---:|
| 60/40 30-day rolling 95% VaR, 2026-05-01 | 1.27% |
| 60/40 30-day rolling CVaR, 2026-05-01 | 1.32% |
| Internal alert line | 1.50% |
| VaR buffer | 0.23 pp |
| NDX/S&P 500 30-day correlation | 0.98 |
| NDX/S&P 500 downside-day correlation | 0.97 |
| XLK/S&P 500 downside-day correlation | 0.90 |

VaR did not breach the hard alert line, but the risk structure is fragile: the NDX/S&P 500 downside-day correlation is **0.97**, which means technology volatility is almost fully transmitted to the broad market on down days. The S&P 500 rose **0.91%** this week, masking an XLK intraweek maximum drawdown of **-1.69%** and a KRE drawdown of **-1.90%**. Spot VIX was around **16.98/16.99**, but the Cboe May VIX futures settlement was near **19.6928**, so calm index volatility does not mean tail protection is cheap. The conclusion is not forced deleveraging, but AI/technology concentration and cross-asset correlation should receive a VaR add-on.

### Evidence

- S&P 500, Nasdaq 100, and ETF closes: StatMuse daily 2026 pages, including S&P 500 **7,165.08** on 2026-04-24 and **7,230.12** on 2026-05-01 (https://www.statmuse.com/money/ask/s-and-p-500-close-by-day-in-2026).
- AP 2026-04-30 market close: S&P 500 **7,209.01**, Nasdaq Composite **24,892.31**, Russell 2000 **2,799.90** (https://apnews.com/article/4e1442eeb72e72fc921e6804287d2b89).
- Cboe VIX futures page shows VIX **16.98** and May 2026 VX settlement **19.6928** (https://www.cboe.com/tradable-products/vix/vix-futures).
- Trading Economics/FRED VIX page shows the May 2026 updated VIX value of **16.89000** (https://tradingeconomics.com/united-states/cboe-volatility-index-vix-fed-data.html).

### Caveats

The VaR calculation uses public closing prices and excludes intraday gaps, option gamma, financing haircuts, and the actual portfolio holdings. IEF is used as a medium-duration bond proxy and does not fully represent actual Treasuries, MBS, or credit duration. Free bulk history for VIX, VVIX, and SKEW was limited, so the report uses reproducible public snapshots and the Cboe futures curve.

## Question 2: How Much Would a Balanced Portfolio Lose if the 10-Year Treasury Breaks 4.8%?

### Method

I compared the FRED DGS curve for 2026-04-24 and 2026-04-30. FRED did not publish DGS maturity points for 2026-05-01, only breakevens, so 2026-04-30 is used as the final available Treasury curve for the week. The stress test assumes the 10-year yield rises from **4.40%** to **4.80%**, uses an approximate IEF effective duration of **7.3 years**, and applies the impact to a 40% bond allocation. An additional equity repricing scenario applies an S&P 500 shock of **-4% to -5%**.

### Findings

| Stress item | Value |
|---|---:|
| 10Y UST, 2026-04-24 | 4.31% |
| 10Y UST, 2026-04-30 | 4.40% |
| Yield rise needed to reach 4.80% | +40 bp |
| First-order duration loss on 40% IEF sleeve | -1.17% at portfolio level |
| With S&P 500 -4% equity shock | -3.57% at portfolio level |
| With S&P 500 -5% equity shock | -4.17% at portfolio level |

The duration-only shock is manageable, but it would consume much of the risk budget earned from this week’s equity rally. More importantly, BEA reported March PCE prices up **0.7%** month over month, core PCE up **0.3%**, and core PCE up **3.2%** year over year, reinforcing the “higher for longer” tail. The 5-year breakeven rose from **2.61%** to **2.69%**, while the 10-year breakeven rose from **2.42%** to **2.48%**, so the move is not purely a real-rate shock; inflation risk premium is also rising. If the 10-year yield breaks **4.80%**, balanced-portfolio messaging should shift from “bonds hedge equities” to “bonds and growth equities can be pressured together.”

### Evidence

- FRED DGS10, DGS2, DGS5, DGS30, T5YIE, and T10YIE for 2026-04-24 to 2026-05-01 (https://fred.stlouisfed.org/series/DGS10; https://fred.stlouisfed.org/series/T5YIE; https://fred.stlouisfed.org/series/T10YIE).
- BEA Personal Income and Outlays, March 2026: PCE price index **+0.7%** month over month, core PCE **+0.3%**, PCE **+3.5%** year over year, core PCE **+3.2%** year over year; next release is 2026-05-28 (https://www.bea.gov/news/2026/personal-income-and-outlays-march-2026).

### Caveats

FRED had no DGS maturity points for 2026-05-01, so the curve comparison uses 2026-04-30. The duration estimate ignores convexity, non-parallel curve shifts, and credit-spread changes. The equity shock is a risk scenario, not a forecast.

## Question 3: Did Credit-Market Liquidity Abnormally Dry Up During Asian and European Market Holidays?

### Method

The plan requested CDX.NA.IG, CDX.NA.HY, and dealer bid-ask spreads. Those OTC series were not available as reproducible free raw data in this workspace. I therefore substituted FRED ICE BofA HY OAS and IG OAS, plus HYG and LQD closes and weekly maximum drawdowns, as public proxies for credit risk and secondary-market liquidity. The comparison window is 2026-04-24 to 2026-05-01.

### Findings

| Metric | 2026-04-24 | 2026-04-30/05-01 | Change |
|---|---:|---:|---:|
| HY OAS | 2.86% | 2.83% | -3 bp |
| IG OAS | 0.80% | 0.81% | +1 bp |
| HYG price | 80.06 | 80.06 | -0.00% |
| HYG weekly maximum drawdown | n/a | -0.47% | Mild |
| LQD price | 109.17 | 108.60 | -0.52% |
| LQD weekly maximum drawdown | n/a | -0.79% | Duration-led |

There is no public evidence of abnormal credit bid-ask widening. HY OAS narrowed **3 bp**, while IG OAS widened only **1 bp**. LQD’s decline is more consistent with the rise in Treasury yields and duration losses than with a classic credit selloff. HYG held around **80.06**, which also does not support a high-yield liquidity freeze. The better conclusion is that the May 1 holiday liquidity risk likely showed up more in FX, index futures, and single-name options than in system-wide cash credit spreads.

### Evidence

- FRED ICE BofA US High Yield OAS (BAMLH0A0HYM2) and US Corporate OAS (BAMLC0A0CM) (https://fred.stlouisfed.org/series/BAMLH0A0HYM2; https://fred.stlouisfed.org/series/BAMLC0A0CM).
- BusinessToday reported on 2026-04-29 that major exchanges across Asia, Europe, Africa, and Latin America would be closed for Labour Day on 2026-05-01 (https://www.businesstoday.com.my/2026/04/29/major-stock-exchanges-close-for-labour-day-across-the-globe/).
- ETF prices: StatMuse HYG and LQD daily 2026 close pages.

### Caveats

CDX, single-name CDS, TRACE trading costs, dealer inventories, and actual bid-ask spreads are not complete free public data. The liquidity conclusion is therefore based on substitute indicators. OAS data are lagged, and FRED credit OAS did not yet cover 2026-05-01.

## Question 4: Has AI Crowding Reached a Structural Reversal Point?

### Method

I used concentration metrics derived from SPY holdings: Top 10 weight, Top 5 weight, Mag-7 weight, HHI, and Effective N. I combined those with NDX/XLK downside correlations to the S&P 500, this week’s technology drawdown, and public AI concentration data to judge whether crowding has moved from vulnerability to forced reversal.

### Findings

| Metric | 2026-05-01 value |
|---|---:|
| S&P 500 Top 10 weight | 35.59% |
| Top 5 weight | 25.97% |
| Mag-7 weight | 30.44% |
| HHI | 185 |
| HHI 5-year average | 142 |
| Effective N | 54/503 |
| ACRI Score | 81/100, CRITICAL |
| XLK weekly maximum drawdown | -1.69% |
| NDX downside-day correlation | 0.97 |

Crowding has reached a structurally fragile zone, but it is not yet a standalone reversal trigger. The reason is mechanical: Top 10 weight of **35.59%** means a 10% drawdown in those names would drag the index by roughly **3.6%**, but the S&P 500 and NDX still rose **0.91%** and **1.12%** this week. The current risk is not that the trend has already reversed; it is that stop-loss thresholds are concentrated in the same names and factors. If earnings expectations or the AI capex narrative are challenged, correlations can rise quickly. The appropriate risk action is to reduce single AI-factor exposure and increase protective option coverage, not to liquidate mechanically.

### Evidence

- AhaSignals/SSGA SPY-holdings-derived concentration metrics: 2026-05-01 Top 10 **35.59%**, Top 5 **25.97%**, Mag-7 **30.44%**, HHI **185**, Effective N **54** (https://ahasignals.com/sp500-concentration-risk/).
- Forbes April 2026 background on Mag-7 concentration at more than one-third, or around **36%**, of the S&P 500 (https://www.forbes.com/sites/investor-hub/article/sp-500-weight-mag-7-stocks-diversification-risk/).
- StatMuse NDX, XLK, and S&P 500 daily closes.

### Caveats

SPY holdings are not the official S&P Global index file, and the treatment of Alphabet’s two share classes affects Top 10 and Mag-7 definitions. High concentration is a vulnerability condition, not a timing signal. AI capex and earnings revisions should be tracked with company reports and sell-side estimate revisions.

## Macro, CRE, and Yen Tail-Risk Addendum

| Theme | Key number | Risk meaning |
|---|---:|---|
| BEA March PCE year over year | 3.5% | Disinflation stalled |
| BEA March core PCE year over year | 3.2% | Fed easing room is limited |
| FDIC 2026 Risk Review: 2025 bank CRE loan growth | 3.1% | CRE still expanded on bank balance sheets |
| FDIC office vacancy rate | 14.0% | Office remains the weakest CRE segment |
| CRED iQ top-50-market CMBS distress rate | 12.2% | CRE stress is concentrated but not yet systemic |
| CRED iQ office distress rate | 17.0% | Office has the highest tail risk |
| USD/JPY intraday high to low | 160.72 to 155.50 | Carry-unwind risk increased |
| Fed-BoJ policy differential | About 275 bp | Carry incentive remains in place |

The FDIC 2026 Risk Review says bank CRE loans still grew **3.1%** in 2025, while office vacancy ended the year at **14.0%**. CRED iQ reported an April 2026 top-50 U.S. market CMBS distress rate of **12.2%**, with office at **17.0%**. This makes bank CRE stress a slow-moving balance-sheet risk, not this week’s acute credit-market shock. The yen is a faster tail channel: USD/JPY fell from **160.72** to roughly **155.50** on 2026-04-30, a move of about **500 pips**, showing that crowded short-yen positions can be squeezed. Because the Fed range of **3.50%-3.75%** still sits roughly **275 bp** above the BoJ policy rate of **0.75%**, intervention can create volatility but cannot by itself remove the carry motive.

**Evidence:** FDIC 2026 Risk Review (https://www.fdic.gov/analysis/2026-risk-review-full.pdf); CRED iQ 2026-05-01 CMBS distress report (https://cred-iq.com/blog/2026/05/01/office-distress-dominates-largest-u-s-cmbs-markets-in-april-2026/); FXStreet 2026-04-30 USD/JPY intervention report (https://www.fxstreet.com/news/usd-jpy-plunges-from-highs-as-yentervention-rocks-markets-202604302232); TradingNews USD/JPY report (https://www.tradingnews.com/news/usd-jpy-prie-forecast-160ceiling-as-tokyo-confirms-direct-intevention); Bank of Japan 2026 policy release index (https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/index.htm).

## Visualization-Stage Data Tables

### Chart 1: 30D Rolling VaR, 60/40 Portfolio

| Date | Portfolio daily return | 95% VaR | CVaR |
|---|---:|---:|---:|
| March 20 2026 | -1.27% | 1.04% | 1.16% |
| March 23 2026 | 0.81% | 1.04% | 1.16% |
| March 24 2026 | -0.36% | 1.04% | 1.16% |
| March 25 2026 | 0.54% | 1.04% | 1.16% |
| March 26 2026 | -1.37% | 1.27% | 1.32% |
| March 27 2026 | -1.00% | 1.27% | 1.32% |
| March 30 2026 | 0.05% | 1.27% | 1.32% |
| March 31 2026 | 1.82% | 1.27% | 1.32% |
| April 01 2026 | 0.40% | 1.27% | 1.32% |
| April 02 2026 | 0.16% | 1.27% | 1.32% |
| April 06 2026 | 0.16% | 1.27% | 1.32% |
| April 07 2026 | 0.15% | 1.27% | 1.32% |
| April 08 2026 | 1.59% | 1.27% | 1.32% |
| April 09 2026 | 0.36% | 1.27% | 1.32% |
| April 10 2026 | -0.14% | 1.27% | 1.32% |
| April 13 2026 | 0.70% | 1.27% | 1.32% |
| April 14 2026 | 0.84% | 1.27% | 1.32% |
| April 15 2026 | 0.39% | 1.27% | 1.32% |
| April 16 2026 | 0.09% | 1.27% | 1.32% |
| April 17 2026 | 0.94% | 1.27% | 1.32% |
| April 20 2026 | -0.18% | 1.27% | 1.32% |
| April 21 2026 | -0.56% | 1.27% | 1.32% |
| April 22 2026 | 0.67% | 1.27% | 1.32% |
| April 23 2026 | -0.31% | 1.27% | 1.32% |
| April 24 2026 | 0.56% | 1.27% | 1.32% |
| April 27 2026 | -0.02% | 1.27% | 1.32% |
| April 28 2026 | -0.33% | 1.27% | 1.32% |
| April 29 2026 | -0.21% | 1.27% | 1.32% |
| April 30 2026 | 0.69% | 1.27% | 1.32% |
| May 01 2026 | 0.21% | 1.27% | 1.32% |

### Chart 2: Yield Curve Shift

| Maturity | 2026-04-24 | 2026-04-30 | Change |
|---|---:|---:|---:|
| 1M | 3.69% | 3.72% | +3 bp |
| 3M | 3.69% | 3.68% | -1 bp |
| 6M | 3.71% | 3.71% | 0 bp |
| 1Y | 3.67% | 3.72% | +5 bp |
| 2Y | 3.78% | 3.88% | +10 bp |
| 5Y | 3.92% | 4.02% | +10 bp |
| 7Y | 4.10% | 4.20% | +10 bp |
| 10Y | 4.31% | 4.40% | +9 bp |
| 20Y | 4.88% | 4.97% | +9 bp |
| 30Y | 4.91% | 4.98% | +7 bp |
| 5Y breakeven | 2.61% | 2.67% | +6 bp |
| 10Y breakeven | 2.42% | 2.46% | +4 bp |
| 2026-05-01 5Y breakeven | n/a | 2.69% | +8 bp vs 04-24 |
| 2026-05-01 10Y breakeven | n/a | 2.48% | +6 bp vs 04-24 |

### Chart 3: Sector Tail Risk Heatmap

| Proxy | Weekly return | Weekly maximum drawdown | 30-day correlation with S&P 500 | Downside-day correlation with S&P 500 |
|---|---:|---:|---:|---:|
| NDX | 1.12% | -0.90% | 0.98 | 0.97 |
| XLK | 1.03% | -1.69% | 0.92 | 0.90 |
| XLF | 0.97% | -0.40% | 0.31 | -0.31 |
| KRE | 1.35% | -1.90% | 0.61 | 0.54 |
| HYG | -0.00% | -0.47% | 0.84 | 0.69 |
| LQD | -0.52% | -0.79% | 0.47 | 0.11 |
| TLT | -0.90% | -1.26% | 0.23 | 0.02 |

### Chart 4: CDS Spread Spikes Substitute

CDX.NA.IG, CDX.NA.HY, and bank/technology single-name CDS were not available as reproducible free data, so this chart substitutes FRED OAS and ETF prices.

| Date | HY OAS | IG OAS | HYG | LQD | KRE | XLK |
|---|---:|---:|---:|---:|---:|---:|
| 2026-04-24 | 2.86% | 0.80% | 80.06 | 109.17 | 68.89 | 160.22 |
| 2026-04-27 | 2.84% | 0.81% | 80.09 | 108.86 | 70.07 | 160.57 |
| 2026-04-28 | 2.85% | 0.81% | 79.98 | 108.91 | 70.37 | 157.85 |
| 2026-04-29 | 2.82% | 0.81% | 79.71 | 108.31 | 69.03 | 159.11 |
| 2026-04-30 | 2.83% | 0.81% | 79.96 | 108.42 | 69.85 | 159.50 |
| 2026-05-01 | n/a | n/a | 80.06 | 108.60 | 69.82 | 161.87 |

## Risk Management Recommendations

1. Keep the 60/40 one-day 95% VaR watch line at **1.50%**, but add risk budget charges for Mag-7 and AI hardware/cloud capex factor exposure.
2. Start reducing duration if the 10-year Treasury approaches **4.60%**; if it breaks **4.80%**, halve duration or replace cash-bond reduction with TY/TLT put spreads.
3. Do not rush into a systemic credit de-risking; shift focus from HY beta to single-name and structured risks in CRE, regional banks, and office CMBS.
4. Run a separate stress test for short-yen and dollar-funding exposures: USD/JPY one-day reverse shock of **3%**, VIX up **+5 vol points**, and NDX down **-3%**.
5. Next week, track inflation revisions ahead of the BEA 2026-05-28 release, whether FRED backfills the 2026-05-01 DGS curve, any accessible CDX data, and earnings-revision diffusion after Mag-7 reports.
