---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Bond Research: Rates, Credit, Curve and Duration

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Bond Research: Rates, Credit, Curve and Duration

**Conclusions First**

| Topic | Numeric conclusion | Investment implication |
|---|---:|---|
| Treasury direction | 10Y UST was 4.39% on 2026-05-01, up 8 bp from 2026-04-24 and up 20 bp year to date | The week was a repricing of inflation and policy premia, not a recession trade |
| Curve shape | 2s10s was 51 bp, 2 bp flatter on the week; 5s30s was 95 bp, 4 bp flatter | Bear flattening shows the front end and belly are constrained by the Fed path, while long-end term premium remains high but not disorderly |
| Real rates / inflation compensation | 10Y TIPS real yield was 1.94% on 2026-04-30, up 5 bp from 2026-04-24; 10Y breakeven was 2.48% on 2026-05-01, up 6 bp from 2026-04-24 | Both real yields and inflation compensation pushed nominal yields higher; inflation risk is not just one noisy oil print |
| Credit spreads | HY OAS was 2.83% on 2026-04-30, 3 bp tighter than 2026-04-24; IG OAS was 0.81%, 1 bp wider | Credit did not confirm broad risk-off stress; carry still works, but valuation cushion is thin |
| Duration stance | Keep core accounts neutral to modestly short duration; add high-quality duration in clips if 10Y approaches 4.50% | The rate selloff looks more like risk-premium adjustment, and the risk/reward of chasing shorts in the long end has deteriorated |

**Upstream File Status**

`01_weekly_plan.md` was missing from the workspace, so the original plan could not be read line by line. This research reconstructs the questions from the prior-step summary: macro data, Fed path, yield-curve dynamics, real rates/inflation compensation, credit spreads, supply, and duration management.

## Question 1: What Happened to Rates This Week?

**Method**: I used the U.S. Department of the Treasury daily par yield curve and compared 2026-04-24, 2026-05-01 and 2026-01-02. Weekly changes are 2026-05-01 minus 2026-04-24; year-to-date changes are 2026-05-01 minus 2026-01-02.

| Maturity | 2026-01-02 | 2026-04-24 | 2026-05-01 | Weekly change (bp) | YTD change (bp) |
|---|---:|---:|---:|---:|---:|
| 1M | 3.72% | 3.69% | 3.71% | 2 | -1 |
| 3M | 3.65% | 3.69% | 3.68% | -1 | 3 |
| 6M | 3.58% | 3.71% | 3.71% | 0 | 13 |
| 1Y | 3.47% | 3.67% | 3.73% | 6 | 26 |
| 2Y | 3.47% | 3.78% | 3.88% | 10 | 41 |
| 3Y | 3.55% | 3.80% | 3.91% | 11 | 36 |
| 5Y | 3.74% | 3.92% | 4.02% | 10 | 28 |
| 7Y | 3.95% | 4.10% | 4.20% | 10 | 25 |
| 10Y | 4.19% | 4.31% | 4.39% | 8 | 20 |
| 20Y | 4.81% | 4.88% | 4.96% | 8 | 15 |
| 30Y | 4.86% | 4.91% | 4.97% | 6 | 11 |

**Findings**: The yield backup was concentrated in the 1Y-7Y sector, indicating a repricing of the Fed path and medium-term inflation risk. The 10Y rose 8 bp and the 30Y rose 6 bp, so the long end was under pressure but less than the front end and belly. The 2Y is up 41 bp year to date, the largest repricing point on the curve, which shows that markets are no longer willing to pay aggressively for near-term cuts. The 3M yield remained anchored near 3.68%, consistent with the 3.50%-3.75% Fed target range.

**Evidence**: U.S. Treasury Daily Treasury Par Yield Curve Rates, 2026 data, `https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2026`.

**Caveats**: The Treasury par curve is an end-of-day fitted curve, not the traded yield of a specific on-the-run security. FRED had not fully updated 2026-05-01 TIPS real-yield data, so the real-rate section uses 2026-04-30 for real yields.

## Question 2: Is the Curve Signaling Growth Risk or Policy Risk?

**Method**: I used 2s10s, 5s30s and 3M10Y spreads to measure curve shape. The comparison dates are 2026-01-02, 2026-04-24 and 2026-05-01.

| Curve metric | 2026-01-02 | 2026-04-24 | 2026-05-01 | Weekly change (bp) | YTD change (bp) |
|---|---:|---:|---:|---:|---:|
| 2s10s | 72 bp | 53 bp | 51 bp | -2 | -21 |
| 5s30s | 112 bp | 99 bp | 95 bp | -4 | -17 |
| 3M10Y | 54 bp | 62 bp | 71 bp | 9 | 17 |

**Findings**: Both 2s10s and 5s30s flattened on the week, so the move was a bear flattening rather than an isolated long-end selloff. 3M10Y steepened because 10Y yields rose while 3M remained essentially anchored, which points to term premium and inflation compensation lifting intermediate and long maturities. The curve remains positively sloped, so it is not showing a classic recession inversion. For asset allocation, the belly is the most vulnerable duration sector, while the long end is more exposed to supply and term-premium risk.

**Evidence**: U.S. Treasury Daily Treasury Par Yield Curve Rates for 2026-01-02, 2026-04-24 and 2026-05-01.

**Caveats**: Curve spreads alone cannot identify term premium, rate-cut expectations and inflation expectations separately; they must be read together with TIPS, Fed communication and supply data.

## Question 3: Does the Fed Path Support Buying Duration?

**Method**: I used the Federal Reserve 2026-04-29 FOMC statement and implementation note, and cross-checked public reporting for vote details and market pricing. The comparison basis is target range, statement language, next meeting date and market-implied rate-cut expectations.

| Item | Latest reading / event | Bond-market implication |
|---|---:|---|
| Fed funds target range | 3.50%-3.75%, unchanged on 2026-04-29 | Front-end yields remain anchored by policy rates |
| IORB | 3.65%, effective 2026-04-30 | Reserve remuneration sits near the middle of the target range |
| Vote | 8-4; Stephen Miran favored a 25 bp cut, while Beth Hammack, Neel Kashkari and Lorie Logan did not support the easing bias in the statement | Internal division has risen, reducing confidence in a one-way rate-cut trade |
| Next FOMC | 2026-06-16 to 2026-06-17 | The May data window matters most for 2Y-5Y |
| Market-pricing clue | Kiplinger cited CME FedWatch showing an 86% probability that rates remain at 3.50%-3.75% through year-end | Markets have materially reduced expectations for 2026 cuts |

**Findings**: The Fed did not send an immediate easing signal, and the voting pattern shows disagreement in both directions: one member wanted a cut, while three objected to the easing bias. That lowers the probability of a rapid front-end rally. If growth slows only modestly while inflation remains high, 2Y-5Y yields will struggle to rally because Fed communication will cap the move. A better duration entry is a staged allocation if 10Y approaches 4.50% or if real yields rise again.

**Evidence**: Federal Reserve FOMC statement, 2026-04-29, `https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm`; Federal Reserve implementation note, 2026-04-29, `https://www.federalreserve.gov/monetarypolicy/files/monetary20260429a1.pdf`; Kiplinger Fed meeting live coverage, 2026-04-29, `https://www.kiplinger.com/news/live/fed-meeting-updates-and-commentary-april-2026`.

**Caveats**: CME FedWatch is a market-pricing snapshot that moves in real time. This report uses publicly available reporting as of 2026-05-03 and does not replace a trading-terminal snapshot.

## Question 4: Is the Macro Data Bond-Friendly or Bond-Negative?

**Method**: I collected the week’s and next week’s key macro inputs: BEA Q1 2026 GDP advance estimate, BLS March 2026 CPI, ISM April 2026 Manufacturing PMI, the BLS 2026 release calendar and the ADP release calendar. The goal is to classify the growth, inflation and labor-market signals for rates.

| Data | Date | Latest number | Bond-market direction |
|---|---:|---:|---|
| Q1 2026 real GDP advance | 2026-04-30 | 2.0% annualized | Resilient growth, duration-negative |
| March 2026 CPI-U m/m | 2026-04-10 | 0.9% | Inflation shock, duration-negative |
| March 2026 CPI-U y/y | 2026-04-10 | 3.3% | Above target, limiting Fed cuts |
| March 2026 core CPI y/y | 2026-04-10 | 2.6% | Core pressure is milder but still above 2% |
| April 2026 ISM Manufacturing PMI | 2026-05-01 | 52.7 | Manufacturing expansion, duration-negative |
| April 2026 ISM Prices Paid | 2026-05-01 | 84.6 | Strong cost pressure, duration-negative |
| April 2026 Employment Situation | 2026-05-08 | Not yet released | Main 2Y-5Y event risk next week |
| April 2026 CPI | 2026-05-12 | Not yet released | Key event for 10Y breakevens |

**Findings**: The macro mix is not friendly for bonds: GDP remains positive, CPI delivered a 0.9% monthly shock, and the ISM prices-paid index rose to 84.6. Labor is the one variable that could change the narrative, but the April employment report is not due until 2026-05-08, so it is premature to position for labor weakness. If payrolls miss and wages cool, 2Y-5Y yields can rally; if employment holds up and CPI remains firm, 10Y can test 4.50%. This explains why credit spreads stayed stable while rates sold off.

**Evidence**: BEA GDP advance estimate, 2026-04-30, `https://www.bea.gov/data/gdp/gross-domestic-product`; BLS CPI March 2026, `https://www.bls.gov/news.release/cpi.htm`; ISM April 2026 Manufacturing PMI, `https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/pmi/april/`; BLS release schedule, `https://www.bls.gov/schedule/news_release/current_year.asp`; ADP workforce release calendar, `https://mediacenter.adp.com/workforce-data-releases`.

**Caveats**: CPI and ISM prices paid are sensitive to energy and supply-chain shocks. April payrolls and April CPI have not been released, which is the main uncertainty around this conclusion.

## Question 5: Are Real Rates or Breakevens Driving 10Y?

**Method**: I used FRED series DGS10, DFII10 and T10YIE and cross-checked nominal 10Y against Treasury data. The latest complete real-yield date is 2026-04-30; breakevens have a 2026-05-01 value.

| Metric | 2026-04-24 | 2026-04-30 | 2026-05-01 | Weekly change |
|---|---:|---:|---:|---:|
| 10Y nominal Treasury | 4.31% | 4.40% | 4.39% | +8 bp to 2026-05-01 |
| 10Y TIPS real yield | 1.89% | 1.94% | Not updated | +5 bp to 2026-04-30 |
| 10Y breakeven inflation | 2.42% | 2.46% | 2.48% | +6 bp to 2026-05-01 |

**Findings**: The 10Y move was not a pure real-yield shock or a pure inflation-compensation shock; both contributed. A 1.94% real yield continues to offer long-horizon allocation value, but a 2.48% breakeven shows that inflation risk premium is also rising. If oil or supply-chain pressure fades, breakevens have room to retrace; if CPI surprises higher again, nominal 10Y is more likely to break 4.50%. TIPS look more useful than nominals for hedging the energy-driven inflation tail.

**Evidence**: FRED series DGS10, DFII10, T10YIE, `https://fred.stlouisfed.org/series/DGS10`, `https://fred.stlouisfed.org/series/DFII10`, `https://fred.stlouisfed.org/series/T10YIE`.

**Caveats**: Some FRED rates series update with a lag. Breakevens include liquidity and risk premia, so they are not a pure measure of inflation expectations.

## Question 6: Did Credit Spreads Confirm Deteriorating Risk Appetite?

**Method**: I used FRED/ICE BofA OAS series: High Yield Master II (`BAMLH0A0HYM2`), US Corporate Master (`BAMLC0A0CM`) and BBB Corporate (`BAMLC0A4CBBB`). I compared 2026-01-02, 2026-04-24 and 2026-04-30, and calculated 2026 ranges and percentiles.

| Metric | 2026-01-02 | 2026-04-24 | 2026-04-30 | Weekly change (bp) | YTD change (bp) | 2026 range | Latest percentile |
|---|---:|---:|---:|---:|---:|---:|---:|
| HY OAS `BAMLH0A0HYM2` | 2.83% | 2.86% | 2.83% | -3 | 0 | 2.64%-3.46% | 28.7% |
| IG OAS `BAMLC0A0CM` | 0.79% | 0.80% | 0.81% | 1 | 2 | 0.73%-0.94% | 60.9% |
| BBB OAS `BAMLC0A4CBBB` | 1.01% | 1.00% | 1.02% | 2 | 1 | 0.93%-1.16% | 60.9% |

**Findings**: Credit did not confirm stress from higher rates; HY spreads tightened slightly. IG and BBB widened by only 1-2 bp, which is noise. The latest HY percentile is 28.7% within the 2026 sample, showing tight valuation and a return profile that depends more on carry than spread compression. Credit portfolios should keep short-to-intermediate IG carry and reduce lower-rated HY beta until spread compensation improves.

**Evidence**: FRED/ICE BofA OAS series, `https://fred.stlouisfed.org/series/BAMLH0A0HYM2`, `https://fred.stlouisfed.org/series/BAMLC0A0CM`, `https://fred.stlouisfed.org/series/BAMLC0A4CBBB`.

**Caveats**: ICE BofA OAS data on FRED keeps only three years of observations starting in April 2026. The latest credit data is through 2026-04-30 and does not include 2026-05-01.

## Question 7: Will Supply Pressure the Long End?

**Method**: I used the U.S. Treasury February 2026 Quarterly Refunding documents and the next refunding schedule. The focus is the provisional indications for May-July 2026.

| Item | 2026-05 plan | 2026-06 plan | 2026-07 plan | Implication |
|---|---:|---:|---:|---|
| 2Y note | $69bn | $69bn | $69bn | Front-end supply is stable |
| 3Y note | $58bn | $58bn | $58bn | Short-intermediate supply is stable |
| 5Y note | $70bn | $70bn | $70bn | Large 5Y supply weighs on the belly |
| 7Y note | $44bn | $44bn | $44bn | The belly still needs auction concession |
| 10Y note | $42bn | $39bn | $39bn | Long-end supply is larger in the May refunding month |
| 20Y bond | $16bn | $13bn | $13bn | 20Y supply rises in the refunding month |
| 30Y bond | $25bn | $22bn | $22bn | 30Y supply rises in the refunding month |
| Next quarterly refunding | 2026-05-06 | Not applicable | Not applicable | Key supply event next week |

**Findings**: May is a refunding month, and planned 10Y/20Y/30Y sizes are larger than in June and July, so the long end needs some concession. The 30Y is already at 4.97%, close to the 5% psychological level, which may improve demand, but it is too early to add aggressively before the supply announcement. If the 2026-05-06 refunding does not raise coupon auction sizes, long-end pressure can ease; if it does, 5s30s can steepen again. Supply risk mainly affects 10Y and longer maturities, distinct from the Fed-path risk in 2Y-5Y.

**Evidence**: U.S. Treasury Quarterly Refunding statement, `https://home.treasury.gov/news/press-releases/sb0384`; TBAC recommended financing table, `https://home.treasury.gov/system/files/221/TBACRecommendedFinancingTableByRefundingQuarter-02042026.pdf`.

**Caveats**: The May-July figures are provisional indications, not final auction announcements. The final result depends on the 2026-05-06 refunding.

## Duration and Curve Recommendations

| Account type | Recommendation | Trigger | Risk |
|---|---|---|---|
| Core total return | Keep duration neutral to modestly short, favor high-quality carry inside 5Y | Do not chase longs while 10Y is below 4.35% | CPI or refunding pushes 10Y toward 4.50% |
| Liability matching | Add 20Y-30Y duration gradually | 30Y near or above 5.00% | Upside supply surprise cheapens the long end further |
| Credit accounts | Prefer short-to-intermediate IG over HY beta | IG OAS near 0.80%, HY OAS below 3.00% | Credit valuation cushion is thin |
| Tactical trading | Buy small duration clips around 10Y 4.45%-4.50%; avoid heavy positions before payrolls | Payrolls are weak and wages cool | Payrolls are strong and CPI overshoots again |

## Chart-Ready Tables

### Chart 1: Treasury Yield Curve Snapshot

| Maturity | 2026-01-02 | 2026-04-24 | 2026-05-01 |
|---|---:|---:|---:|
| 1M | 3.72 | 3.69 | 3.71 |
| 3M | 3.65 | 3.69 | 3.68 |
| 6M | 3.58 | 3.71 | 3.71 |
| 1Y | 3.47 | 3.67 | 3.73 |
| 2Y | 3.47 | 3.78 | 3.88 |
| 3Y | 3.55 | 3.80 | 3.91 |
| 5Y | 3.74 | 3.92 | 4.02 |
| 7Y | 3.95 | 4.10 | 4.20 |
| 10Y | 4.19 | 4.31 | 4.39 |
| 20Y | 4.81 | 4.88 | 4.96 |
| 30Y | 4.86 | 4.91 | 4.97 |

### Chart 2: Weekly Yield Change by Maturity

| Maturity | Weekly change (bp) | YTD change (bp) |
|---|---:|---:|
| 1M | 2 | -1 |
| 3M | -1 | 3 |
| 6M | 0 | 13 |
| 1Y | 6 | 26 |
| 2Y | 10 | 41 |
| 3Y | 11 | 36 |
| 5Y | 10 | 28 |
| 7Y | 10 | 25 |
| 10Y | 8 | 20 |
| 20Y | 8 | 15 |
| 30Y | 6 | 11 |

### Chart 3: Curve Spread Dashboard

| Date | 2s10s (bp) | 5s30s (bp) | 3M10Y (bp) |
|---|---:|---:|---:|
| 2026-01-02 | 72 | 112 | 54 |
| 2026-04-24 | 53 | 99 | 62 |
| 2026-05-01 | 51 | 95 | 71 |

### Chart 4: 10Y Nominal, Real Yield and Breakeven

| Date | 10Y nominal Treasury | 10Y TIPS real yield | 10Y breakeven |
|---|---:|---:|---:|
| 2026-04-24 | 4.31 | 1.89 | 2.42 |
| 2026-04-27 | 4.35 | 1.91 | 2.44 |
| 2026-04-28 | 4.36 | 1.92 | 2.44 |
| 2026-04-29 | 4.42 | 1.96 | 2.46 |
| 2026-04-30 | 4.40 | 1.94 | 2.46 |
| 2026-05-01 | 4.39 | Not updated | 2.48 |

### Chart 5: Credit OAS

| Date | HY OAS `BAMLH0A0HYM2` | IG OAS `BAMLC0A0CM` | BBB OAS `BAMLC0A4CBBB` |
|---|---:|---:|---:|
| 2026-01-02 | 2.83 | 0.79 | 1.01 |
| 2026-04-24 | 2.86 | 0.80 | 1.00 |
| 2026-04-27 | 2.84 | 0.81 | 1.01 |
| 2026-04-28 | 2.85 | 0.81 | 1.02 |
| 2026-04-29 | 2.82 | 0.81 | 1.01 |
| 2026-04-30 | 2.83 | 0.81 | 1.02 |

### Chart 6: Macro Event Risk Calendar

| Date | Event | Known / pending | Bond sensitivity |
|---|---|---|---|
| 2026-04-29 | FOMC decision | Held at 3.50%-3.75% | Fed path, 2Y-5Y |
| 2026-04-30 | Q1 GDP advance | 2.0% annualized | Growth resilience, 10Y |
| 2026-05-01 | ISM Manufacturing PMI | 52.7; Prices Paid 84.6 | Inflation compensation, 5Y-10Y |
| 2026-05-06 | Treasury quarterly refunding | Pending | 10Y-30Y supply |
| 2026-05-06 | ADP April report | Pending | Payroll expectations |
| 2026-05-08 | BLS Employment Situation April | Pending | Fed path, 2Y |
| 2026-05-12 | BLS CPI April | Pending | Breakevens, 10Y |

## Follow-Up Items

| Priority | Item | Decision rule |
|---|---|---|
| High | 2026-05-06 Treasury refunding | Whether coupon sizes exceed the February provisional indications |
| High | 2026-05-08 payrolls | Whether payrolls, unemployment rate and average hourly earnings cool together |
| High | 2026-05-12 CPI | Whether headline inflation falls and core returns to an acceptable path |
| Medium | 10Y at 4.45%-4.50% | If credit is stable and real yields rise, consider adding duration |
| Medium | HY OAS below 2.80% | Reduce lower-rated credit beta and keep IG carry |
