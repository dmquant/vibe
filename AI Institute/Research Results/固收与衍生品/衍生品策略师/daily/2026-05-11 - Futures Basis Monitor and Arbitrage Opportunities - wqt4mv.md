---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "固收与衍生品"
content_error: ""
---

# Futures Basis Monitor and Arbitrage Opportunities

Kind: **daily**
Analyst: **Derivatives Strategist**

## Links

- Report type: [[daily]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

# Futures Basis Monitor and Arbitrage Opportunities

**Date anchor: 2026-05-11.** Every reference to today, the previous trading day, or this week is resolved against the shell date `2026-05-11`. Market quotes are timestamped 2026-05-11 15:00:00 and cover CFFEX equity-index futures IF, IH, IC, and IM across the current month, next month, and two quarterly contracts.

## Priority Conclusions

1. **The whole curve is in discount, with IM/IC much deeper than IF/IH.** For the 2606 contracts, the discounts are IF -39.24 points, IH -18.83 points, IC -101.14 points, and IM -143.78 points. Annualized, IM2606 is -15.2% and IC2606 is -10.7%, well wider than IF2606 at -7.4% and IH2606 at -5.8%.
2. **The front-month 2605 contracts have only 4 calendar days to last trading day, so annualized discounts are mechanically exaggerated.** IM2605 trades at a -46.58 point discount, or -47.9% annualized; IC2605 trades at -26.34 points, or -27.2% annualized. This is better read as expiry-window liquidity and hedging pressure, not as a rate to extrapolate.
3. **The executable opportunity is cash-equity replacement and roll yield, not risk-free arbitrage.** Accounts already holding CSI 1000 or CSI 500 beta can replace part of cash exposure with IM2606 or IC2606 and capture the discount buffer. A true reverse cash-and-carry trade, buying futures while selling cash or ETF baskets, first requires hard checks on securities lending, ETF tracking error, dividends, financing, margin, and market impact.
4. **The roll is favorable for long beta moving from 2605 into 2606.** The 2606-2605 spreads are IF -27.8 points, IH -14.4 points, IC -74.8 points, and IM -97.2 points. Long holders can buy the deferred contract cheaper than the expiring one; short hedgers pay this negative basis slope when rolling.
5. **Trade priority: IM2606 > IC2606 > IF2606/IH2606.** IM and IC offer wider discounts and better gross economics. IF and IH are closer to the transaction-cost zone and should not be used as primary arbitrage legs unless cash hedging and securities lending are unusually cheap and reliable.

## Data Methodology

| Item | Method |
|---|---|
| Basis | Futures close - spot index level |
| Basis bp | Basis / spot index level × 10,000 |
| Annualized basis | Basis / spot index level × 365 / calendar days to expiry |
| Daily change | Today's basis - (futures previous settlement - implied previous spot close) |
| Contract expiry | 2605 expires 2026-05-15; 2606 expires 2026-06-19; 2609 expires 2026-09-18; 2612 expires 2026-12-18 |
| Contract multiplier | IF/IH: CNY 300 per point; IC/IM: CNY 200 per point |

CFFEX equity-index futures list the current month, next month, and the next two quarterly months; the last trading day is the third Friday of the contract month. Trading, open interest, and settlement field definitions follow the CFFEX daily-statistics note. Quote values come from Sina Finance's public quote interface; CFFEX is used for contract specifications and field-methodology checks.

## Front-Month Monitor

| Underlying | Spot Index | 2605 Close | Basis | Basis bp | Annualized Basis | Daily Change | Discount Value per Lot |
|---|---:|---:|---:|---:|---:|---:|---:|
| IF/CSI 300 | 4,951.8366 | 4,940.4 | -11.44 | -23.1 | -21.1% | -7.12 | CNY 3,431 |
| IH/SSE 50 | 3,041.6333 | 3,037.2 | -4.43 | -14.6 | -13.3% | +1.55 | CNY 1,330 |
| IC/CSI 500 | 8,839.7415 | 8,813.4 | -26.34 | -29.8 | -27.2% | -19.37 | CNY 5,268 |
| IM/CSI 1000 | 8,866.7792 | 8,820.2 | -46.58 | -52.5 | -47.9% | -26.83 | CNY 9,316 |

**Read-through:** All front-month contracts trade below spot. IM2605 and IC2605 show the largest discount widening, but with only 4 calendar days left to expiry, market impact, the gap between close and final settlement, and ETF or basket tracking error can absorb much of the headline annualized return. If the portfolio already holds cash beta, 2605 can be used as a short-term replacement tool. For a new long-futures/short-cash package, the safety margin is thin outside IM2605.

## Term Structure

| Contract | Close | Basis | Basis bp | Annualized Basis | Daily Change | Discount Value per Lot |
|---|---:|---:|---:|---:|---:|---:|
| IF2605 | 4,940.4 | -11.44 | -23.1 | -21.1% | -7.12 | CNY 3,431 |
| IF2606 | 4,912.6 | -39.24 | -79.2 | -7.4% | -4.12 | CNY 11,771 |
| IF2609 | 4,840.8 | -111.04 | -224.2 | -6.3% | -5.92 | CNY 33,311 |
| IF2612 | 4,791.8 | -160.04 | -323.2 | -5.3% | -3.92 | CNY 48,011 |
| IH2605 | 3,037.2 | -4.43 | -14.6 | -13.3% | +1.55 | CNY 1,330 |
| IH2606 | 3,022.8 | -18.83 | -61.9 | -5.8% | +3.15 | CNY 5,650 |
| IH2609 | 2,989.0 | -52.63 | -173.0 | -4.9% | +4.95 | CNY 15,790 |
| IH2612 | 2,977.0 | -64.63 | -212.5 | -3.5% | +5.95 | CNY 19,390 |
| IC2605 | 8,813.4 | -26.34 | -29.8 | -27.2% | -19.37 | CNY 5,268 |
| IC2606 | 8,738.6 | -101.14 | -114.4 | -10.7% | -27.77 | CNY 20,228 |
| IC2609 | 8,599.4 | -240.34 | -271.9 | -7.6% | -36.57 | CNY 48,068 |
| IC2612 | 8,465.6 | -374.14 | -423.2 | -7.0% | -44.37 | CNY 74,828 |
| IM2605 | 8,820.2 | -46.58 | -52.5 | -47.9% | -26.83 | CNY 9,316 |
| IM2606 | 8,723.0 | -143.78 | -162.2 | -15.2% | -44.83 | CNY 28,756 |
| IM2609 | 8,514.6 | -352.18 | -397.2 | -11.2% | -51.23 | CNY 70,436 |
| IM2612 | 8,324.4 | -542.38 | -611.7 | -10.1% | -61.23 | CNY 108,476 |

## Calendar Spreads

| Underlying | 2606-2605 | 2609-2606 | 2612-2609 | Strategy Implication |
|---|---:|---:|---:|---|
| IF | -27.8 | -71.8 | -49.0 | Positive roll yield for long beta; moderate arbitrage value |
| IH | -14.4 | -33.8 | -12.0 | Shallowest discount and lowest priority |
| IC | -74.8 | -139.2 | -133.8 | Persistently deep mid-cap discount; usable for cash replacement |
| IM | -97.2 | -208.4 | -190.2 | Deepest small-cap discount and highest monitoring value |

## Executable Trade List

| Priority | Trade | Trigger | Expected Return Source | Main Risk |
|---|---|---|---|---|
| High | Replace part of CSI 1000 cash beta with IM2606 | The account already needs CSI 1000 beta and can tolerate futures margin volatility | 143.78 point discount, equal to roughly CNY 28,756 per lot of convergence buffer | Small caps remain under pressure and the discount widens; variation-margin calls |
| High | Replace part of CSI 500 cash beta with IC2606 | The account already needs CSI 500 beta and can reduce cash holdings | 101.14 point discount, equal to roughly CNY 20,228 per lot of convergence buffer | Tracking error versus cash exposure; further discount widening |
| Medium | IM calendar: long IM2606, short IM2605 | 2605 liquidity remains adequate and the 2606-2605 spread moves below -100 points before mean reversion | Front-month expiry convergence plus next-month discount repair | Final settlement volatility; two-leg slippage |
| Medium | IC calendar: long IC2606, short IC2605 | 2606-2605 trades below -80 points and open interest remains stable | Next-month deep-discount recovery | CSI 500 style risk and crowded roll flow |
| Low | IF/IH reverse cash-and-carry | Securities lending plus financing cost is materially below the annualized discount and the basket can be replicated accurately | Modest discount convergence | Discount is too shallow; net return after costs is unstable |

## Risk Controls

- **Basis-widening stop:** For IM2606/IC2606 cash-replacement trades, cut exposure by half or neutralize with cash if basis widens by another 40 points/30 points from entry.
- **Expiry window:** The 2605 contracts expire on 2026-05-15. After 2026-05-13, avoid opening new front-month arbitrage trades that require cash hedging.
- **Cost accounting:** All discount values per lot are gross values, excluding financing, securities lending, ETF premium or discount, creation/redemption fees, market impact, taxes and fees, and margin funding cost.
- **Execution method:** If ETFs are used instead of index baskets, separately estimate ETF premium or discount and tracking error. IM/IC-linked ETFs can generate larger execution slippage than IF/IH-linked instruments.

## Follow-Up Items

1. Update the full IF/IH/IC/IM curve after 15:05 each trading day, with a focus on whether IM2606 and IC2606 discounts narrow for two consecutive sessions.
2. From 2026-05-13 to 2026-05-15, monitor the 2605 expiry window separately for volume, open interest, and closing-auction impact.
3. If IM2606 annualized basis moves below -17% again or IC2606 below -12%, upgrade cash-replacement trades from watchlist to executable; if either moves back inside -8%, reduce new exposure.

## Citations and Data Sources

- [1] Date anchor: local shell command `date +%Y-%m-%d`, returned `2026-05-11`.
- [2] Sina Finance quote interface, IF/IH term structure: `https://hq.sinajs.cn/list=nf_IF2605,nf_IF2606,nf_IF2609,nf_IF2612,nf_IH2605,nf_IH2606,nf_IH2609,nf_IH2612`.
- [3] Sina Finance quote interface, IC/IM term structure: `https://hq.sinajs.cn/list=nf_IC2605,nf_IC2606,nf_IC2609,nf_IC2612,nf_IM2605,nf_IM2606,nf_IM2609,nf_IM2612`.
- [4] Sina Finance quote interface, spot indexes: `https://hq.sinajs.cn/list=s_sh000300,s_sh000016,s_sh000905,s_sh000852`.
- [5] CFFEX daily-statistics note: `https://www.cffex.com.cn/cn/rtj.html`.
- [6] CFFEX CSI 300 Index Futures contract: `https://www.cffex.com.cn/cn/hs300.html`.
- [7] CFFEX CSI 500 Index Futures contract: `https://www.cffex.com.cn/cn/zz500.html`.
- [8] CFFEX SSE 50 Index Futures contract: `https://www.cffex.com.cn/cn/sz50.html`.
- [9] CFFEX CSI 1000 Index Futures contract: `https://www.cffex.com.cn/cn/zz1000.html`.
