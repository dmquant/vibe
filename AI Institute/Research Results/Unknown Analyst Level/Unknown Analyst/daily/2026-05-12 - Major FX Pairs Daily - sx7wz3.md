---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Major FX Pairs Daily

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Major FX Pairs Daily

Report date: 2026-05-13, anchored to shell `date +%Y-%m-%d` and the Asia/Singapore workflow date.

## Executive Summary

The dollar is soft, but not in disorderly decline. DXY is 98.289, about 1.71% below 100, and EUR/USD at 1.17396 confirms broad USD softness versus Europe. USD/JPY at 157.593 is the exception: yen has not repaired in line with the weaker dollar because the carry channel is still powerful. For China FX, USD/CNY is 6.7915, materially stronger than the early-year 7-handle intuition, and this report prioritizes the internal API. USD/HKD is 7.828, still close to the weak side of the linked-rate band, showing that HKD funding pressure and CNY fixing management are not the same trade.

## 1. Major FX Table

| Pair | Current | Source |
|---|---:|---|
| EUR/USD | 1.17396 | Internal API: markets_overnight_us |
| USD/JPY | 157.593 | Internal API: markets_overnight_us |
| GBP/USD | 1.35397 | Internal API: fx_majors |
| AUD/USD | 0.72402 | Internal API: fx_majors |
| USD/CAD | 1.3695 | Internal API: fx_majors |
| USD/CHF | 0.78037 | Internal API: fx_majors |
| USD/CNY | 6.7915 | Internal API: fx_majors |
| USD/HKD | 7.828 | Internal API: fx_majors |
| DXY | 98.289 | Internal API: markets_overnight_us |

Internal API status: `fx_majors` confidence=high, is_stale=false; `markets_overnight_us` confidence=high, is_stale=false. No exchange-rate number was replaced with a web-sourced quote.

## 2. Dollar Composite and Carry View

- DXY at 98.289 is below 100, so the index signal is weak USD. EUR/USD at 1.17396 confirms that message. USD/JPY at 157.593 is the outlier because it is driven more by rate differentials and yen funding characteristics than by the dollar index alone.
- The U.S. 10Y yield is 4.46% (internal API: yield_curve_us / markets_overnight_us). On April 29, the Fed maintained the federal funds target range at 3.50%-3.75% and emphasized still-elevated inflation and uncertainty linked to the Middle East (Federal Reserve, 2026-04-29). In Japan, the BOJ homepage shows the interest rate applied to the complementary deposit facility at 0.75% and the guideline for the uncollateralized overnight call rate at around 0.75% (BOJ). Using the midpoint of the Fed target range, USD has roughly 287.5bp of positive carry versus JPY; using the U.S. 10Y versus the 0.75% BOJ policy anchor, the rough gap is 371bp. That carry is still the main support for high USD/JPY, not broad dollar strength.
- For commodity FX, Brent is 107.66 and WTI is 102.18 (internal API: oil_prices, confidence=medium). High oil prices normally support CAD, but USD/CAD is still 1.3695, suggesting that oil support is being partly offset by USD rate carry, global risk premia, or Canada-specific growth expectations. AUD/USD at 0.72402 is more directly sensitive to weak USD; however, `markets_overnight_us` did not return `gold_usd`, so this report does not assign a numerical gold-AUD synchronization signal.

## 3. CNY and Offshore Watch

- USD/CNY at 6.7915 and USD/HKD at 7.828 tell different stories. CNY is firm against USD, while HKD remains close to the weak side of its linked-rate range. CNY is more influenced by the fixing, settlement flows, and cross-border capital management; HKD reacts more directly to USD rates, HKD liquidity, and carry pressure.
- The China-U.S. yield spread is still structurally negative for CNY carry. The U.S. 10Y is 4.46% (internal API: yield_curve_us), while AsianBondsOnline shows China 10Y at 1.756% as of the May 11, 2026 close. That implies a China-U.S. 10Y spread of about -270.4bp, with China below the U.S. CNY strength is therefore not rate-led; it is more likely explained by broad USD softness, trade surplus and conversion flows, policy management, and repricing of yuan appreciation expectations.
- On central bank communication, the People's Bank of China decided on February 27, 2026 that, effective March 2, 2026, the FX risk reserve ratio for forward FX sales would be cut from 20% to 0. The notice also said the PBOC would improve FX hedging services for corporates and keep the RMB exchange rate basically stable at a reasonable and balanced level (Xinhua republication of the PBOC website). This is not a one-way appreciation signal; it is a signal to slow excessive one-sided appreciation and encourage risk-neutral hedging.

## 4. Risk Events and Policy Calendar

| Window | Event | FX Implication | Source |
|---|---|---|---|
| 2026-05-13 08:30 ET / 20:30 SGT | U.S. April PPI release | Another firm producer inflation print would reinforce Fed hold or hawkish repricing, supporting DXY and USD/JPY. A softer print would help EUR/USD, GBP/USD, and AUD/USD extend rebounds. | BLS PPI schedule |
| 2026-05-14 | Two speeches by ECB President Lagarde | EUR/USD risk is around how the ECB frames the energy shock and second-round inflation effects. On April 30, the ECB kept all three key rates unchanged, with the deposit facility at 2.00%, main refinancing operations at 2.15%, and the marginal lending facility at 2.40%, while stressing stronger upside inflation risks and downside growth risks. | Trading Economics calendar; ECB decision |
| 2026-05-14 | BOJ April money stock data and Board Member MASU speech | Whether yen carry cools depends on whether the BOJ keeps signaling gradual normalization. The BOJ homepage lists the next monetary policy meeting for June 15-16, 2026. | BOJ release schedule; BOJ homepage |

## Data Integrity and Degradation

There was no downgrade for exchange rates: `fx_majors` and `markets_overnight_us` both returned successfully with confidence=high. There is a supplementary commodity-data gap: `markets_overnight_us.payload.gold_usd` was absent, and adjacent internal endpoints `gold_prices`, `precious_metals`, `commodity_prices`, `commodities`, `metals`, and `markets_commodities` returned 404 or unknown topic. As a result, this report uses only the internal API Brent 107.66 and WTI 102.18 for commodity-FX discussion and does not substitute a web price for gold.

## Data Sources

Internal API:

- `fx_majors/2026-05-13`: USD/CNY 6.7915, USD/HKD 7.828, GBP/USD 1.35397, AUD/USD 0.72402, USD/CAD 1.3695, USD/CHF 0.78037.
- `markets_overnight_us/2026-05-13`: EUR/USD 1.17396, USD/JPY 157.593, DXY 98.289, UST10Y 4.46.
- `yield_curve_us/2026-05-13`: UST2Y 4.00, UST5Y 4.12, UST10Y 4.46, UST30Y 5.03.
- `oil_prices/2026-05-13`: Brent 107.66, WTI 102.18.

Web search:

- Federal Reserve, FOMC statement, 2026-04-29: https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm
- Federal Reserve, FOMC calendar: https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm
- European Central Bank, Monetary policy decisions, 2026-04-30: https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260430~81b7179e6f.en.html
- Bank of Japan, homepage and policy/operations indicators: https://www.boj.or.jp/en/
- Bank of Japan, release schedule: https://www.boj.or.jp/en/about/calendar/index.htm
- AsianBondsOnline, People's Republic of China market watch: https://asianbondsonline.adb.org/china/
- Xinhua / PBOC notice on FX risk reserve ratio, 2026-02-27: https://www.news.cn/fortune/20260227/f9a854aca2c24dd3beac4c2831f19853/c.html
- U.S. Bureau of Labor Statistics, Producer Price Index schedule: https://www.bls.gov/ppi/
- Trading Economics, Euro Area calendar: https://tradingeconomics.com/euro-area/calendar
