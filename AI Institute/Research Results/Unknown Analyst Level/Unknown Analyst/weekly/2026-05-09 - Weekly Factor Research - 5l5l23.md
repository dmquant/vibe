---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Factor Research

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Factor Research

Anchor date: `2026-05-10`. Research window: `2026-05-04` to `2026-05-08`; price statistics use close-to-close returns from the `2026-05-01` close to the `2026-05-08` close. Main conclusion: this was not a clean “everything risk-on” week. It was led by AI/semiconductors and momentum, with higher index concentration, a resilient but internally uneven labor market, and oil risk still unresolved.

## One-Page Conclusions

1. Growth and momentum outperformed decisively, but breadth was thin: `QQQ +5.50%`, `MTUM +5.86%`, `SMH +11.13%`, `SOXX +11.71%`, versus `SPY +2.35%` and `RSP +0.63%`; equal weight lagged market cap weight by `1.72 pct`. AP’s index data shows the same pattern: Nasdaq `+4.5%` for the week versus S&P 500 `+2.3%`, Russell 2000 `+1.7%`, and Dow `+0.2%`.[AP indexes](https://apnews.com/article/wall-street-stocks-dow-nasdaq-b7ff696f0770489a60427121a6931ada)
2. Leadership looked more like “AI/semiconductors plus selected earnings revisions” than broad market participation: only `XLK +8.43%` rose more than `2%` among the 11 sector ETFs; semiconductor ETFs beat the equal-weighted Magnificent 7 sample average of roughly `+4.09%`.
3. Labor data supported the soft-landing narrative, but quality signals were mixed: BLS April payrolls were `+115,000`, unemployment was `4.3%`, participation was `61.8%`, and average hourly earnings rose `+3.6%` year over year; however, people working part time for economic reasons increased by `445,000` to `4.9 million`, and information employment fell `13,000`.[BLS](https://www.bls.gov/news.release/empsit.nr0.htm)
4. Oil risk shifted from an upside-price shock to a high-level volatility shock: Brent retreated from `>$115` early in the week to `100.06` on Thursday, then rebounded to `101.29` on Friday; Tuesday’s regular gasoline average was `4.48/gallon`, still a drag on consumers, transportation, and low-margin companies.[AP oil](https://apnews.com/article/stocks-markets-oil-iran-trump-28e493ba47e80517a743ecd54fb6acbc)
5. The quality factor did not beat the index directly: `QUAL +1.58%` lagged `SPY +2.35%`. But earnings quality was rewarded at the single-stock level, with `MNST +11.89%` and `AKAM +42.21%`; `PLTR -4.35%` shows that strong earnings were not enough where valuation and momentum were already crowded.
6. Value underperformance needs a two-layer read: broad value `VTV +0.53%` lagged `VUG +3.55%`, mainly because energy, financials, health care, and utilities were weak; however, `VLUE +8.48%` diverged from broad value, so attribution must verify constituents, weights, and price methodology.
7. Stable volatility does not mean tail risk disappeared: `VIX` moved only from `16.99` to `17.19`, while `SPY` 5-day realized volatility was about `12.26%` annualized; Brent stayed above `$100`, the 10Y yield remained above its pre-war `3.97%`, and low-volatility ETFs `USMV -0.58%` and `SPLV -2.06%` did not deliver positive returns.

## Question 1: Was Growth/Momentum Outperformance Concentrated or Broad-Based?

**Method**: I pulled `2026-05-01` and `2026-05-08` closes from Nasdaq’s historical quote API and computed ETF close-to-close returns. I used `RSP/SPY`, `VUG/VTV`, `QQQ/SPY`, sector ETFs, and semiconductor ETFs to test breadth and concentration. AP index returns were used as a cross-check.

**Findings**

| Metric | Value |
|---|---:|
| `QQQ` weekly return | `+5.50%` |
| `SPY` weekly return | `+2.35%` |
| `RSP` weekly return | `+0.63%` |
| `QQQ - SPY` | `+3.15 pct` |
| `SPY - RSP` | `+1.72 pct` |
| `MTUM` weekly return | `+5.86%` |
| `SMH` weekly return | `+11.13%` |
| Positive-return GICS ETFs | `7/11` |
| GICS ETFs up more than `2%` | `1/11` |

Interpretation: The answer is “concentrated, with limited pockets of breadth.” `RSP` materially lagged `SPY`, so market-cap leadership mattered more than broad equal-weight participation. Only `XLK` rose more than `2%`, so sector breadth was not strong. Semiconductor ETFs rose by double digits and outpaced the equal-weighted Magnificent 7 sample, showing that the AI infrastructure chain led more than mega-cap technology as a whole. Momentum worked, but low volatility and broad quality did not, so this was not a full-factor risk-on move.

**Evidence**: AP reported weekly gains of `2.3%` for the S&P 500, `4.5%` for Nasdaq, `1.7%` for Russell 2000, and `0.2%` for Dow. Nasdaq API historical closes were queried for `SPY/QQQ/RSP/MTUM/SMH/SOXX` on `2026-05-10`.

**Caveats**: ETF returns are close-to-close, not dividend-reinvested total returns. `VLUE` was unusually strong, so constituents and corporate actions need to be checked before treating it as a pure value factor result.

## Question 2: Did Labor Data Reinforce Soft Landing or Reveal Internal Weakness?

**Method**: I combined the BLS Employment Situation, ADP National Employment Report, BLS JOLTS, ISM Services PMI, and industry employment details. The analysis separates headline growth, wages, participation, involuntary part-time work, and sector composition.

**Findings**

| Indicator | Latest Value | Read |
|---|---:|---|
| BLS payrolls | `115,000` | Still positive; supports soft landing |
| Unemployment rate | `4.3%` | Unchanged |
| Labor force participation | `61.8%` | Little changed |
| Average hourly earnings YoY | `+3.6%` | Moderate wage pressure |
| Part time for economic reasons | `4.9 million`, up `445,000` | Weaker job quality |
| ADP private employment | `109,000` | Directionally consistent with BLS |
| JOLTS openings | `6.866 million` | Demand remains, but not hot |
| ISM Services Employment | `48.0` | Services employment contracted |

Interpretation: In headline terms, this strengthened the soft-landing case: BLS and ADP were both above recession-like readings, and `3.6%` wage growth does not imply runaway inflation. Internally, the picture was weaker: involuntary part-time work rose, information employment kept falling, and ADP professional/business services were `-8,000`. Health care, transportation/warehousing, and retail stabilized total employment, but that mix is not uniformly positive for cyclical value or lower-quality companies. For factors, quality screens should emphasize revenue durability and cash-flow visibility rather than the payroll headline alone.

**Evidence**: BLS April Employment Situation was released on `2026-05-08`; ADP April data were released on `2026-05-06`; latest JOLTS values are preliminary `2026-03`; ISM Services PMI covers `2026-04`.

**Caveats**: JOLTS lags by one month. BLS industry employment and ADP private payrolls use different universes. Payroll first estimates can be revised.

## Question 3: What Was the Marginal Impact of Oil and Gasoline?

**Method**: I used AP-reported Brent and gasoline prices to anchor the event path, then measured close-to-close returns for oil-sensitive industry ETFs: `XLE`, `XLY`, `XLP`, `IYT`, `JETS`, and low-volatility ETFs. I also compared 10Y yield moves.

**Findings**

| Asset/Variable | Weekly Return or Value |
|---|---:|
| Brent early-week high | `>$115` |
| Brent Tuesday close | `$109.87` |
| Brent Thursday close | `$100.06` |
| Brent Friday close | `$101.29` |
| U.S. regular gasoline average, Tuesday | `$4.48/gallon` |
| `XLE` weekly return | `-5.35%` |
| `XLY` weekly return | `+1.32%` |
| `IYT` weekly return | `-0.02%` |
| `JETS` weekly return | `+6.68%` |
| `USMV` / `SPLV` weekly return | `-0.58%` / `-2.06%` |

Interpretation: The marginal equity reaction shifted from “energy benefits” to “oil relief helps non-energy risk.” `XLE -5.35%` shows that energy stocks did not keep benefiting from high oil prices because Brent fell sharply from its early-week high. `JETS +6.68%` shows that fuel-cost-sensitive assets benefited from oil relief expectations. `XLY +1.32%` was only modestly positive, suggesting that `$4.48/gallon` gasoline still constrained consumer elasticity. Low-volatility ETFs fell, so high oil prices did not translate into a defensive factor premium.

**Evidence**: AP reported Brent at `$101.29` on Friday, `$100.06` on Thursday, `$109.87` on Tuesday, and regular gasoline at `$4.48/gallon`. Sector ETF closes came from the Nasdaq API.

**Caveats**: I could not verify a reliable free official RBOB daily series, so the report substitutes AP Brent, AAA gasoline, and sector ETF returns. Different oil contracts and timestamps can create basis differences.

## Question 4: Did Quality Benefit from Real Margin/Cash-Flow Resilience or Valuation Expansion?

**Method**: I combined FactSet S&P 500 earnings-season metrics, Nasdaq Index Insights, AP earnings coverage, and single-stock weekly returns. The focus was earnings surprises, revenue surprises, valuation, AI narrative, and price reaction.

**Findings**

| Indicator | Value |
|---|---:|
| S&P 500 companies reported for Q1 | `63%` |
| EPS beat rate | `84%` |
| Aggregate EPS surprise | `20.7%` |
| Revenue beat rate | `81%` |
| Q1 blended EPS growth | `27.1%` |
| Q1 blended revenue growth | `11.1%` |
| Forward 12M P/E | `20.9` |
| `QUAL` weekly return | `+1.58%` |
| `MNST` / `AKAM` weekly return | `+11.89%` / `+42.21%` |
| `PLTR` weekly return | `-4.35%` |

Interpretation: Quality’s support came from real earnings resilience, but the market was still willing to pay high multiples for AI and growth. FactSet showed both EPS and revenue beat rates running high, and Nasdaq noted Nasdaq-100 Q1 EPS growth tracking `51%`, or about `28%` excluding some private-investment valuation effects. Yet `QUAL` lagged `SPY`, so quality did not win mechanically at the ETF level. The stocks rewarded most were the intersection of earnings beats, credible growth narrative, and acceptable valuation; `PLTR` shows that good results were not enough where valuation and momentum were already crowded.

**Evidence**: FactSet `2026-05-01` Earnings Season Update; Nasdaq `May 2026` Investment Insights; AP coverage of DuPont, Pinterest, AB InBev, Monster, Akamai, and Palantir; Nasdaq API single-stock closes.

**Caveats**: FactSet data are as of `2026-05-01`, not the final Q1 season tally. Single-stock weekly returns mix earnings, macro, and positioning effects.

## Question 5: Why Did Value Lag Growth?

**Method**: I compared `VUG/VTV`, `QQQ/DIA`, `SPY/RSP`, sector ETFs, and rates/oil data. Value underperformance was decomposed into sector allocation, earnings revisions, and duration/valuation effects.

**Findings**

| Indicator | Value |
|---|---:|
| `VUG` weekly return | `+3.55%` |
| `VTV` weekly return | `+0.53%` |
| `VUG - VTV` | `+3.02 pct` |
| `QQQ - DIA` | `+5.28 pct` |
| `XLE` weekly return | `-5.35%` |
| `XLF` weekly return | `-1.31%` |
| `XLV` weekly return | `-1.15%` |
| `XLU` weekly return | `-3.93%` |
| 10Y Treasury Friday | `4.36%` |

Interpretation: Value lagged mainly because of sector allocation and weaker earnings-revision leadership, not simply because rates rose. Energy, financials, health care, and utilities were negative or weak, and these are important exposures in broad value and defensive portfolios. At the same time, FactSet said Alphabet, Amazon.com, and Meta Platforms were the largest contributors to earnings-growth upgrades among the Magnificent 7, while Nasdaq linked AI to technology and communication-services earnings growth. `VLUE +8.48%` was an exception, which means value ETFs cannot be treated interchangeably without constituent-level attribution.

**Evidence**: Nasdaq API style and sector ETF closes; FactSet earnings update; AP reporting that the 10Y yield was `4.36%` Friday versus `3.97%` before the war.

**Caveats**: Sector attribution and constituent-level EPS revision breadth are not yet complete. `VLUE` requires checking for price adjustment, holdings, or concentration effects.

## Question 6: Is Stable or Falling Volatility Trustworthy?

**Method**: I used ChartExchange `VIX` daily data, Nasdaq `SPY` daily returns, AP oil and 10Y yield reporting, and a MOVE reference value to compare implied volatility, realized volatility, and macro risk.

**Findings**

| Indicator | Value |
|---|---:|
| `VIX` close on 2026-05-01 | `16.99` |
| `VIX` close on 2026-05-08 | `17.19` |
| Highest `VIX` close during week | `18.29` on `2026-05-04` |
| `SPY` 5-day realized volatility | `12.26%` annualized |
| `SPY` weekly return | `+2.35%` |
| Brent Friday | `$101.29` |
| 10Y Treasury Friday | `4.36%` |
| MOVE reference value | `65.7` |

Interpretation: Stable volatility is “partly credible” because `VIX` did not rise materially despite oil volatility, and `SPY` realized volatility stayed below `VIX`. But the better explanation is that index concentration and a strong earnings season suppressed index volatility, not that tail risk vanished. Brent remained above `$100`, and the 10Y yield remained above its pre-war `3.97%`, so macro risk had not fully cleared. Negative low-volatility ETF returns also show that defensive factor pricing did not improve.

**Evidence**: ChartExchange `VIX` historical table; AP Brent and 10Y coverage; Convex MOVE reference value; Nasdaq API `SPY` closes.

**Caveats**: MOVE is not sourced directly from official ICE data, and the available value has a timestamp lag. Full option skew, put/call, and credit spread data were not available.

## Visualization-Ready Tables

### Chart 1: Style and Index Weekly Return Bar Chart

| Ticker | 2026-05-01 Close | 2026-05-08 Close | Weekly Return |
|---|---:|---:|---:|
| `QQQ` | `674.15` | `711.23` | `+5.50%` |
| `SPY` | `720.65` | `737.62` | `+2.35%` |
| `IWM` | `279.28` | `284.17` | `+1.75%` |
| `DIA` | `495.02` | `496.13` | `+0.22%` |
| `MTUM` | `285.09` | `301.80` | `+5.86%` |
| `VLUE` | `168.31` | `182.59` | `+8.48%` |
| `QUAL` | `207.16` | `210.43` | `+1.58%` |
| `USMV` | `94.58` | `94.03` | `-0.58%` |
| `SPLV` | `74.16` | `72.63` | `-2.06%` |
| `VUG` | `83.86` | `86.84` | `+3.55%` |
| `VTV` | `205.95` | `207.04` | `+0.53%` |
| `RSP` | `202.82` | `204.10` | `+0.63%` |

### Chart 2: 11 GICS Sector Daily Heatmap

| Sector ETF | 2026-05-04 | 2026-05-05 | 2026-05-06 | 2026-05-07 | 2026-05-08 | Weekly Return |
|---|---:|---:|---:|---:|---:|---:|
| `XLK` | `+0.11%` | `+2.21%` | `+2.66%` | `-0.20%` | `+3.44%` | `+8.43%` |
| `XLC` | `-0.53%` | `-0.40%` | `+1.49%` | `+0.03%` | `-0.37%` | `+0.19%` |
| `XLY` | `-0.77%` | `+0.30%` | `+1.52%` | `+0.01%` | `+0.27%` | `+1.32%` |
| `XLF` | `-0.65%` | `+0.02%` | `+0.48%` | `-0.56%` | `-0.60%` | `-1.31%` |
| `XLI` | `-1.14%` | `+0.84%` | `+2.59%` | `-1.62%` | `-0.46%` | `+0.14%` |
| `XLV` | `-0.30%` | `+0.39%` | `+0.07%` | `-0.47%` | `-0.85%` | `-1.15%` |
| `XLP` | `-0.75%` | `+0.62%` | `+0.21%` | `-0.31%` | `+0.24%` | `+0.01%` |
| `XLE` | `+0.92%` | `+0.10%` | `-4.12%` | `-1.84%` | `-0.45%` | `-5.35%` |
| `XLU` | `-0.39%` | `0.00%` | `-1.42%` | `-1.29%` | `-0.89%` | `-3.93%` |
| `XLB` | `-1.36%` | `+1.74%` | `+1.71%` | `-1.93%` | `+0.37%` | `+0.47%` |
| `XLRE` | `-0.54%` | `+0.20%` | `+1.29%` | `-0.76%` | `+0.02%` | `+0.20%` |

### Chart 3: Labor Quality Dashboard

| Module | Indicator | Date/Period | Value |
|---|---|---|---:|
| Headline | BLS payrolls | 2026-04 | `115,000` |
| Headline | ADP private payrolls | 2026-04 | `109,000` |
| Headline | JOLTS job openings | 2026-03 | `6.866 million` |
| Participation | Unemployment rate | 2026-04 | `4.3%` |
| Participation | Labor force participation | 2026-04 | `61.8%` |
| Wages | Average hourly earnings MoM | 2026-04 | `+0.2%` |
| Wages | Average hourly earnings YoY | 2026-04 | `+3.6%` |
| Quality | Part time for economic reasons | 2026-04 | `4.9 million` |
| Industry | Health care employment | 2026-04 | `+37,000` |
| Industry | Transportation/warehousing employment | 2026-04 | `+30,000` |
| Industry | Retail employment | 2026-04 | `+22,000` |
| Industry | Federal government employment | 2026-04 | `-9,000` |
| Industry | Information employment | 2026-04 | `-13,000` |
| ADP Industry | Education/health services | 2026-04 | `+61,000` |
| ADP Industry | Professional/business services | 2026-04 | `-8,000` |

### Chart 4: Oil-Rates-Volatility Substitute Table

The original plan requested full daily Brent, RBOB, 10Y, `VIX`, and S&P 500 lines. A reliable free official RBOB daily series could not be verified, so this substitutes an event-aligned macro risk table using Brent event prices, AAA gasoline, 10Y, `VIX`, and `SPY`.

| Date | Brent Marker | U.S. Regular Gasoline | 10Y Treasury | `VIX` Close | `SPY` Close | Note |
|---|---:|---:|---:|---:|---:|---|
| 2026-05-01 | `NA` | `NA` | `4.39%` | `16.99` | `720.65` | FRED 10Y; Nasdaq `SPY` |
| 2026-05-04 | `>$115`, AP early-week high | `NA` | `4.45%` | `18.29` | `718.01` | Oil shock day |
| 2026-05-05 | `$109.87` | `$4.48/gallon` | `4.43%` | `17.38` | `723.77` | Oil eased, equities rallied |
| 2026-05-06 | About `$101`, sources not uniform | `NA` | `4.36%` | `17.39` | `733.83` | Substitute directional value only |
| 2026-05-07 | `$100.06` | `NA` | `4.41%` | `17.08` | `731.58` | Large intraday oil swing |
| 2026-05-08 | `$101.29` | `NA` | `4.36%` | `17.19` | `737.62` | Stocks hit new high after jobs report |

### Chart 5: Earnings Quality Scatter Plot Data

| Ticker | Weekly Return | Earnings/Event Signal | Quality/Valuation Interpretation | Suggested Chart Color |
|---|---:|---|---|---|
| `DD` | `+7.61%` | AP: profit beat and higher full-year outlook; same-day `+8.4%` | Cyclical quality improvement | Materials |
| `PINS` | `+5.19%` | AP: sales and profit beat; monthly active users `631 million`, up `+11%` YoY | Growth delivery | Communication Services |
| `BUD` | `+5.73%` | AP: profit beat; U.S.-listed shares same-day `+8.7%` | Defensive consumer quality | Consumer Staples |
| `PLTR` | `-4.35%` | AP: strong results but same-day `-6.9%` | High-valuation momentum crowded | Information Technology |
| `MNST` | `+11.89%` | AP: profit and revenue beat; same-day `+13.6%` | High-margin consumer quality | Consumer Staples |
| `AKAM` | `+42.21%` | AP: slight beat plus `$1.8 billion` cloud infrastructure contract; same-day `+26.6%` | AI infrastructure repricing | Information Technology |
| `NVDA` | `+8.44%` | AI/semiconductor chain strength | High-growth momentum | Information Technology |
| `SMH` | `+11.13%` | Semiconductor basket | AI beta | Information Technology |
| `SOXX` | `+11.71%` | Semiconductor basket | AI beta | Information Technology |

## Next Week Research List

- Decompose `VLUE`, `VTV`, and `VUG` by constituents and sectors to verify whether the value conclusion is distorted by a single ETF.
- Fill RBOB, WTI, and Brent with the same contract and timezone to avoid mixing event prices and settlement prices.
- Build attribution waterfalls for `RSP/SPY`, `QQQ/SPY`, `SMH/SPY`, and sector contributions.
- Update the next FactSet Earnings Insight to test whether EPS beats, revenue beats, and forward P/E keep improving.
- Add option skew, put/call ratios, credit spreads, and ETF flows to verify whether stable volatility is masked by index concentration.

## Sources

- AP, “How major US stock indexes fared Friday 5/8/2026,” https://apnews.com/article/wall-street-stocks-dow-nasdaq-b7ff696f0770489a60427121a6931ada
- AP, “US stocks rise to records after a solid jobs report overshadows higher oil prices,” https://apnews.com/article/stocks-markets-oil-iran-trump-28e493ba47e80517a743ecd54fb6acbc
- AP, “Wall Street rallies to records after oil prices ease and corporate profits keep topping expectations,” https://apnews.com/article/stocks-markets-trump-oil-iran-e1c194b5266c4eb58dc993cc4a9f9b50
- AP, “US stocks fall from their records as oil prices yo-yo,” https://apnews.com/article/stocks-markets-rates-iran-trump-oil-44bac8b794519ae9169f968ddc9ea675
- AP, “Why gasoline prices fell but then started climbing again,” https://apnews.com/article/gasoline-oil-war-iran-strait-of-hormuz-0e5b61be4a4c8a8a077ed5ff6f84c0ce
- BLS, “The Employment Situation -- April 2026,” https://www.bls.gov/news.release/empsit.nr0.htm
- BLS, “JOLTS Latest Numbers,” https://www.bls.gov/jlt/latest-numbers.htm
- ADP Research, “ADP National Employment Report: April 2026,” https://adp-ri-nrip-static.adp.com/artifacts/us_ner/20260506/ADP_NATIONAL_EMPLOYMENT_REPORT_Press_Release_2026_04%20FINAL.pdf
- ISM, “April 2026 ISM Services PMI Report,” https://www.ismworld.org/globalassets/pub/research-and-surveys/rob/nmi/capdrob202604svcs.pdf
- U.S. Census Bureau, “Monthly Full Report on Manufacturers’ Shipments, Inventories, & Orders,” https://www.census.gov/manufacturing/m3/current/index.html
- FactSet, “S&P 500 Earnings Season Update: May 1, 2026,” https://insight.factset.com/sp-500-earnings-season-update-may-1-2026
- Nasdaq Global Indexes, “Biweekly Investment Insights: AI-led earnings & returns coupled with important portfolio dynamics,” https://www.nasdaq.com/docs/index/investment-insights-ai-earnings-equity-returns-portfolio-dynamics
- ChartExchange, “VIX Historical Prices,” https://chartexchange.com/symbol/index-vix/historical/
- FRED, “Market Yield on U.S. Treasury Securities at 10-Year Constant Maturity, DGS10,” https://fred.stlouisfed.org/series/DGS10
- Convex, “VIX vs MOVE Index,” https://convextrade.com/compare/vix-vs-move
- Nasdaq Historical Quote API, query pattern: `https://api.nasdaq.com/api/quote/{SYMBOL}/historical?assetclass={etf|stocks}&fromdate=2026-05-01&todate=2026-05-08&limit=9999`
