---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "风控与合规"
content_error: ""
---

# Portfolio Tail-Risk Stress Test - 2026-05-14

Kind: **daily**
Analyst: **Chief Risk Officer**

## Links

- Report type: [[daily]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

# Portfolio Tail-Risk Stress Test - 2026-05-14

- Card: 08 / 08 | Analyst: chief-risk (Chief Risk Officer)
- Work date: 2026-05-14 (Asia/Singapore)
- Stance: stress-test
- Question: Under a possible 2027Q3 FX-rate negative feedback loop and concentrated Northbound outflows, what are the all-weather portfolio's VaR behavior, liquidity gap, and extreme-drawdown controls?

As of 2026-05-14, I stress-test rather than reject the prior chain: Cards 3–7 are directionally coherent, but the all-weather portfolio can only keep the digital-LGFV thesis investable if it treats 2027Q3 as a liquidity regime shift, not just a rates view. The hard rule is that duration is allowed to work until the FX channel becomes binding; once USD/CNY tests 7.45–7.50 with Northbound outflows above RMB 200 billion per month, the portfolio must cut 10y duration, preserve cash, and use CGB convexity to fund liquidity rather than average down credit.

## 1. Risk Book Being Tested

The stress test is run on the post-Card-4/5 all-weather book, normalized to NAV 100:

| Sleeve | Pre-stress target | Risk role | Liquidity bucket |
|---|---:|---|---|
| Rates: CGB-led duration | 45% | Recession and LGFV-event hedge; target duration 7.5–8.0 years before FX stop | T+0/T+1 for on-the-run CGB; T+2/T+5 for policy-bank bonds |
| Credit: central SOE and provincial AAA only | 15% | Carry after county-level AIDC names are removed | T+3/T+10; event-liquidity haircut required |
| A-share and HK equity | 18% | Growth and policy beta, shifted away from regional banks/local infrastructure | T+1/T+3; Northbound crowding risk |
| Gold and USD proxy | 10% | FX and policy-error hedge | T+0/T+2 |
| Commodities / broad real assets | 6% | Inflation and supply shock hedge | T+1/T+3 |
| Cash / Treasury bills | 6% | Variation margin, redemptions, and credit-dislocation dry powder | Same day |

This allocation is consistent with the earlier recommendation to lengthen rates duration, compress and upgrade credit, hold 4–6pp of dry powder, add 2pp gold, and remove weak-fiscal county AIDC exposure. The risk question is no longer whether a few digital-LGFV defaults are systemic; it is whether a left-tail policy response forces the CNY, foreign flows, and long yields to move together.

## 2. Scenario Design

The 2027Q3 stress scenario has four linked shocks:

| Shock | Baseline | Stress trigger | Tail shock used in VaR and liquidity tests |
|---|---:|---:|---:|
| USD/CNY | Stable, managed two-way movement | 7.35–7.40 with CNH skew widening | 7.50 test; one-month CNY move of -4.5% to -6.0% |
| 10y CGB yield | Bull-flattening continuation | policy shifts from L2 to L3/L4 | +20–30bp parallel selloff; 10s30s steepens 10–15bp |
| Credit spread | AA LGFV +60–120bp vs 10y CGB in local events | weak AAA sympathy widening | provincial AAA +35–50bp; AA/AA+ +100–150bp; weak names no-bid |
| Northbound flow | Two-way flows | outflow above RMB 200 billion/month | RMB 250–350 billion one-month equity/bond combined outflow; 10 trading days carry 70% of selling |

The scenario is calibrated against three live reference points. First, SAFE reported China's FX reserves at USD 3.4105 trillion at end-April 2026, up USD 68.4 billion from March, so the macro buffer is large but not an excuse to ignore price-clearing pressure.[^safe_reserves] Second, HKEX's 2025 statistics show combined Shanghai and Shenzhen Northbound average daily trade value above RMB 212 billion, which makes a concentrated RMB 35–45 billion daily foreign sell program market-moving but operationally plausible.[^hkex_2025] Third, Bond Connect reported record Northbound Bond Connect turnover of RMB 1.2241 trillion in March 2026, with CGB and policy-bank bonds dominating turnover; this supports the view that foreign CGB selling can clear, but only after yield and bid-ask repricing.[^bond_connect]

## 3. VaR Behavior

Under normal conditions, the book's 99% 10-day VaR should sit near 2.1%–2.4% of NAV. In the FX-rate loop, correlations flip: CGB no longer hedges equities cleanly because the same foreign-flow shock sells duration and risk assets together.

| Metric | Normal regime | Digital-LGFV credit event only | FX-rate negative feedback loop |
|---|---:|---:|---:|
| 99% 1-day VaR | 0.75%–0.90% | 1.05%–1.25% | 1.55%–1.85% |
| 99% 10-day VaR | 2.1%–2.4% | 3.0%–3.4% | 4.8%–5.6% |
| Expected shortfall, 10-day 99% | 3.0%–3.5% | 4.4%–5.0% | 7.2%–8.5% |
| Peak-to-trough stress drawdown | -2.5% to -3.5% | -4.0% to -5.0% | -8.5% to -10.5% without controls; -5.5% to -6.5% with controls |

The VaR expansion is driven by three channels:

- **Duration convexity turns two-sided.** A 7.8-year duration book loses roughly 1.6%–2.3% of NAV if the rates sleeve faces a 20–30bp adverse move, before carry and convexity offsets.
- **Credit liquidity beta dominates rating beta.** Even if holdings are central SOE and provincial AAA, the tradable mark is pulled by redemption pressure and weak-LGFV headlines; use a 3%–5% price haircut for the credit sleeve, not just spread duration math.
- **Equity and FX hedges only partly diversify.** Gold and USD proxies cushion CNY depreciation, but A-share/HK equity beta, Northbound crowding, and rates repricing are positively correlated in the first 10 trading days.

Risk limit: if ex-ante 99% 10-day VaR exceeds 4.0% for three consecutive trading days, the portfolio exits "return optimization" mode and enters "capital preservation" mode. If stressed expected shortfall exceeds 7.5%, the risk committee must force a duration and credit-risk reduction regardless of valuation.

## 4. Liquidity Gap

The binding constraint is not headline solvency; it is the ability to meet redemptions, margin, and rebalance orders without selling illiquid credit into a no-bid tape.

| Liquidity need over 10 trading days | Base | Stress | Left-tail |
|---|---:|---:|---:|
| Client / mandate redemptions | 1.5% NAV | 3.0% NAV | 5.0% NAV |
| Derivatives margin and FX hedge variation | 0.4% | 1.0% | 1.8% |
| Rebalance cash to cut duration and equity beta | 0.6% | 1.2% | 1.7% |
| Credit-dislocation dry powder to preserve optionality | 1.0% | 1.5% | 2.0% |
| **Total liquidity demand** | **3.5%** | **6.7%** | **10.5%** |

Available liquidity under stress:

| Source | Usable in 10 days | Haircut | Net liquidity |
|---|---:|---:|---:|
| Cash / Treasury bills | 6.0% NAV | 0% | 6.0% |
| On-the-run CGB | 18% of NAV | 2% price / execution haircut | 17.6% |
| Gold / USD proxy | 10% | 1%–2% | 9.8% |
| Policy-bank bonds | 12% | 2%–4% | 11.5% |
| Credit bonds | 15% | 8%–15%; do not rely on first wave | 12.8%, but last-resort only |

The book has enough gross liquidity, but the usable waterfall matters. The first RMB of liquidity must come from cash, on-the-run CGB, and gold/USD hedges. Selling provincial AAA credit to meet redemptions is prohibited in the first five stress days unless the portfolio has already exhausted the liquid waterfall or the credit position breaches issuer-specific stop-loss rules.

## 5. Drawdown Control Playbook

The control plan is staged by observable triggers, not by committee discretion.

| Stage | Trigger | Mandatory action | Objective |
|---|---|---|---|
| Green | USD/CNY below 7.35; monthly Northbound outflow below RMB 100 billion; 10y CGB move within +10bp | Maintain 7.5–8.0y duration; keep cash 6%; no weak AIDC credit | Let rates hedge local LGFV stress |
| Amber | USD/CNY 7.35–7.45 or CNH vol jumps; Northbound outflow RMB 100–200 billion/month; 10y CGB +10–20bp | Cut portfolio duration by 0.8–1.2y; raise cash to 8%; halve policy-bank overweight; equity beta -20% | Prevent correlation flip from entering VaR |
| Red | USD/CNY tests 7.50, outflow above RMB 200 billion/month, or L3/L4 policy signal appears | Cut duration to 5.0–5.5y; cash 10%–12%; no new credit buys; hedge 50%–70% of equity beta; keep gold/USD hedge | Cap drawdown at -6.5% and preserve optionality |
| Black | 10y CGB +30bp in 10 sessions, credit bid-ask doubles, or redemption demand exceeds 5% NAV | Freeze discretionary credit purchases; liquidate most liquid CGB ladder; activate swing-pricing / anti-dilution terms where mandate permits | Avoid forced sale of illiquid credit |

The key difference from a conventional all-weather book is that the CGB sleeve is no longer treated as permanently defensive. In Red stage, CGB is a liquidity reserve first and a return asset second. This is consistent with PBOC policy language from the December 18, 2025 MPC meeting, which emphasized adequate liquidity, attention to long-term yields, and preventing exchange-rate overshooting.[^pboc_mpc]

## 6. Hedging and Position Limits

Required hedges and limits from 2026Q4 onward:

- **FX hedge:** maintain a minimum 30% hedge ratio on CNY risk when USD/CNY is above 7.35; lift to 50%–70% above 7.45. Use USD/CNH forwards or options; avoid turning the hedge into a leveraged carry trade.
- **Duration hedge:** hold liquid CGB futures / receive-pay swap capacity sufficient to reduce portfolio duration by 1.5 years within five trading days. If bond-futures basis becomes unstable, sell on-the-run CGB instead of using off-the-run bonds.
- **Credit concentration:** no single LGFV-related issuer above 35bp NAV; no province-level weak-fiscal bucket above 150bp NAV; zero exposure to issuers with undisclosed AIDC tenant contracts and 2027–2028 maturity walls.
- **Equity crowding:** cap Northbound-crowded A-share names at 6% NAV total. In Amber/Red stages, reduce high-beta technology and broker holdings before defensive utilities and high-dividend central SOEs.
- **Dry powder discipline:** the 4–6pp credit-dislocation sleeve from Card 4 is not deployable until USD/CNY stabilizes for 10 sessions and Northbound outflows fall below RMB 100 billion/month.

## 7. Final Judgment

I support the prior thesis that digital LGFV is a local-credit event rather than a systemic sovereign event, but I stress-test the portfolio implication: the left tail is not default contagion alone; it is a synchronized FX, rates, and foreign-flow shock. The all-weather book can survive the 2027Q3 loop if it imposes hard stops before USD/CNY 7.50, keeps 10%–12% stress liquidity in Red stage, cuts duration from 7.5–8.0y to 5.0–5.5y when the FX constraint binds, and refuses to deploy credit dry powder while Northbound outflows remain concentrated. Without these rules, 99% 10-day VaR can more than double to 4.8%–5.6% and stress drawdown can reach -8.5% to -10.5%; with them, the drawdown target is capped near -5.5% to -6.5%.

## Sources

[^safe_reserves]: State Administration of Foreign Exchange, "国家外汇管理局公布2026年4月末外汇储备规模数据," released 2026-05-07, reporting end-April 2026 FX reserves of USD 3.4105 trillion: https://www.safe.gov.cn/big5/big5/www.safe.gov.cn/safe/2026/0507/27431.html
[^hkex_2025]: HKEX, "Market Statistics 2025," showing 2025 Shanghai Northbound average daily trade value of RMB 101.003 billion and Shenzhen Northbound average daily trade value of RMB 111.373 billion: https://www.hkex.com.hk/-/media/HKEX-Market/Market-Data/Statistics/Consolidated-Reports/Annual-Market-Statistics/2025FY-Annual-Market-Stat_Eng.pdf
[^bond_connect]: Bond Connect Company, "Bond Connect Flash Report - March 2026," reporting Northbound Bond Connect monthly trading volume of RMB 1.2241 trillion and average daily turnover of RMB 55.6 billion: https://www.chinabondconnect.com/en/Resource/Flash-Report/Bond-Connect-Flash-Report---March-2026.html
[^pboc_mpc]: People's Bank of China, "PBOC Monetary Policy Committee Holds Q4 2025 Meeting," meeting held 2025-12-18, released 2025-12-29: https://www.pbc.gov.cn/en/3688110/3688172/5552468/2025122915520840185/index.html
[^safe_bop]: SAFE, "SAFE Releases China's Balance of Payments for the Fourth Quarter and for the Annual of 2025," released 2026-03-27, showing a 2025 capital and financial account deficit and negative portfolio-investment liabilities: https://www.safe.gov.cn/en/2026/0327/2406.html
[^imf_articleiv]: IMF, "IMF Executive Board Concludes 2025 Article IV Consultation with China," released 2026-02-18, projecting China 2026 GDP growth of 4.5% and noting downside risks from property, debt, weak demand, and trade tensions: https://www.imf.org/en/news/articles/2026/02/18/pr-26053-china-imf-executive-board-concludes-2025-article-iv-consultation

---

*Author: chief-risk | Submission date: 2026-05-14 | Card: 08/08 | Shared whiteboard: 2eecd351-1775-46d8-87af-9c13a6ad9e96*
