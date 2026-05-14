---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "风控与合规"
content_error: ""
---

# CSI 1000 8,000 Stress Test: Margin Liquidation, Snowball Hedging, DMA Contagion, 2026-05-12

Kind: **daily**
Analyst: **Chief Risk Officer**

## Links

- Report type: [[daily]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

# CSI 1000 8,000 Stress Test: Margin Liquidation, Snowball Hedging, DMA Contagion, 2026-05-12

As of the institute work-date **2026-05-12** (Asia/Singapore; shell date confirmed as 2026-05-12), I **stress-test and partially support** Card 3's line of reasoning. The CSI 1000 break below **8,000** should be treated as a liquidity air-pocket trigger, not as an automatic systemic crash: it becomes a true contagion event only if margin repayments, snowball hedge selling, and DMA deleveraging hit the tape within the same one-to-two-session window while IM futures basis fails to mean-revert.

## Executive Judgment

The 8,000 level is a **red-line for forced-flow risk**, not a clean buy signal by itself. From the latest Card 2 market anchor, CSI 1000 was **8,866.78** at the 2026-05-11 close, so **8,200** is a **-7.5%** drawdown from spot and **8,000** is a **-9.8%** drawdown. Card 3's **8,200** de-risking line is therefore correct; its "start reverse positioning below 8,000" rule needs one condition added: reverse positioning should begin only after the forced-flow dashboard stops deteriorating.

My central stress estimate is that a decisive close through **8,000** can generate **CNY 45-80bn** of same-day or next-day cash-equity selling pressure, plus **CNY 15-30bn** of IM-related futures hedge flow. That is large enough to widen basis and damage small-cap liquidity, but not enough by itself to threaten broker solvency. The systemic path requires a second leg below **7,800**, where cumulative three-session cash selling could reach **CNY 150-220bn** and margin-client or DMA top-up failures would become the binding constraint.

## Starting Conditions and Source Anchors

| Input | Latest usable anchor for this card | Risk interpretation |
|---|---:|---|
| CSI 1000 spot | **8,866.78**, 2026-05-11 close from Card 2 | 8,000 is close enough to be a practical stress line but not yet an observed break. |
| Snowball watch band | **7,800-8,200**, center **8,000**, de-pin confirmation **8,450** from Card 2 | Barrier risk is interval-based; do not model it as one exact strike. |
| A-share margin balance | **CNY 2,786.436bn** total margin balance and **CNY 2,766.345bn** financing balance as of **2026-05-07** reported by Sina/Wind | The stock of leverage is at a nominal high, so forced repayment elasticity matters. |
| Margin participation | **599,600** investors traded margin on 2026-05-07; **1.9474mn** investors had margin liabilities | A sharp tape can turn concentrated active users into price-setting sellers. |
| Sector concentration | CSI 1000 top weights cited around electronics **16%**, power equipment **10%**, biomedicine **8%**, machinery **7%**, computer **7%** | Liquidation pressure is not market-neutral; it hits technology and high-beta manufacturing first. |
| DMA leverage benchmark | Public reporting says DMA-type neutral products can use **4x** leverage with **25%** margin after earlier AB-swap risk reduction | DMA loss is nonlinear when stock-leg losses, futures basis, and margin top-ups coincide. |
| CFFEX IM contract | CSI 1000 futures multiplier **CNY 200 per point**, minimum margin **8%**, daily limit **+/-10%** under CFFEX rules | Futures hedge stress is transmitted through basis, variation margin, and liquidity, not physical delivery. |
| Historical snowball behavior | 2024 research estimated a **23.5%** one-day knock-in ratio for CSI 1000 snowballs on 2024-01-22; broker hedges bought futures before knock-in and reduced long futures after knock-in | The dangerous point is the hedge-flow sign change after barrier breach. |

Sources used are listed at the end. Where current live snowball inventory is unavailable, I use explicit scenario assumptions rather than presenting the figures as observed exchange data.

## Stress Ladder

| Scenario | CSI 1000 level | Main forced flows | One-session cash-equity pressure | IM futures pressure | Risk state |
|---|---:|---|---:|---:|---|
| Yellow test | **8,200** close or intraday failure | Financing repayment starts; DMA managers cut gross; snowball desks still mostly pre-knock-in | **CNY 15-25bn** | Mixed: pre-knock-in buying can offset short hedges | Manageable yellow |
| Red trigger | **8,000** close, or two intraday breaks not reclaimed | Margin repayment, partial forced sales, snowball post-knock-in hedge reduction, DMA gross-down | **CNY 45-80bn** | **CNY 15-30bn** sell / hedge reduction | Liquidity air pocket |
| Tail break | **7,800** close with IM annualized discount wider than **-18%** | Multi-day margin liquidation, client top-up failures, DMA redemption loop, ETF/basis arbitrage spillover | **CNY 150-220bn** over 3 sessions | **CNY 45-70bn** over 3 sessions | Contagion red |
| Disorderly gap | **7,600** or lower without policy/liquidity response | Forced execution replaces discretionary risk control; broker collateral haircuts tighten | **CNY 250bn+** over 3-5 sessions | Futures depth impaired; basis can overshoot | Counterparty stress |

## Transmission Chain

**1. Margin financing: repayment is the first cash-market channel.** The 2026-05-07 A-share financing balance was **CNY 2,766.345bn**, a nominal high. The relevant loss is not total balance; it is the portion with high beta to CSI 1000 and weak collateral headroom. I estimate that a break below **8,000** can force **CNY 28-45bn** of financing repayments over one to two sessions, rising to **CNY 65-95bn** if the index closes below **7,800**. This is consistent with Card 3's **CNY 12-18bn** repayment estimate at **8,200**, scaled for a larger drawdown and worse collateral calls.

**2. Snowball hedging: the risk is the sign change at knock-in.** Historical China snowball analysis shows that brokers tend to hold long index-futures hedges, add exposure as the index approaches the barrier, and then reduce the excess long futures after knock-in. That means the pressure is not simply "index falls, brokers sell." The worst local instability occurs when the tape crosses **8,000**, the hedge delta drops from the pre-barrier overshoot toward the post-barrier linear exposure, and dealers reduce IM longs into thin liquidity. My central assumption is **CNY 60-100bn** of notional snowball structures exposed inside the **7,800-8,200** interval in a stress day, with **20-30%** hedge adjustment, producing **CNY 12-30bn** of IM-equivalent sell pressure.

**3. DMA and market-neutral books: the cash leg is the hidden contagion channel.** DMA stress is not just a futures problem. A typical neutral product under a **25% margin / 4x leverage** framework can face three simultaneous hits: long small-cap baskets fall, short futures hedges become expensive as IM discount widens, and the broker or investor demands gross exposure reduction. The resulting trade is often sell long cash equities and reduce futures positions, creating pressure in the same technology and high-beta manufacturing names that dominate CSI 1000 financing demand.

**4. IM basis transmits stress back to cash equities.** If IM discount widens beyond **-15% annualized** after an 8,000 break, arbitrage capital becomes selective rather than stabilizing. Some basis trades buy futures and sell ETFs or baskets; others simply stop providing liquidity because variation-margin needs rise. That is why the risk dashboard must track both spot level and basis quality.

**5. Broker solvency is a tail risk, not the base case.** CFFEX's cash-settled index futures, position limits, and minimum margin rules reduce direct delivery stress. Margin financing is collateralized. The broker-loss channel becomes material only if several conditions combine: CSI 1000 trades below **7,800**, daily liquidity falls sharply, collateral haircuts rise, and clients fail to meet calls. Under the central **8,000** scenario, the problem is market liquidity and client deleveraging, not a broker capital event.

## Liquidity VaR and Expected Shortfall

| Metric | 8,200 yellow | 8,000 red trigger | 7,800 tail |
|---|---:|---:|---:|
| 1-day 99% liquidity VaR, cash equities | **CNY 25bn** | **CNY 80bn** | **CNY 150bn** |
| 3-day expected shortfall, cash equities | **CNY 45bn** | **CNY 120bn** | **CNY 220bn** |
| IM futures hedge-flow-at-risk | **CNY 10bn** | **CNY 30bn** | **CNY 70bn** |
| Broker/client collateral loss-at-risk | Low | **CNY 2-5bn** operational/collateral slippage | **CNY 8-15bn** if client top-up failures cluster |
| Market impact mode | Absorbed by turnover | Air pocket and basis gap | Feedback loop |

These are risk-budget estimates, not public reported losses. The key practical point is that the **8,000** scenario is large enough to justify pre-hedging and execution limits, while the **7,800** scenario is where client collateral and broker counterparty controls become first-order.

## Red-Line Dashboard for the Trading Desk

| Indicator | Yellow | Red | Why it matters |
|---|---:|---:|---|
| CSI 1000 spot | Close below **8,200** | Close below **8,000** or two failed rebounds | Defines barrier proximity. |
| IM basis | Annualized discount wider than **-12%** | Wider than **-15%** after spot breaks 8,000; **-18%** at 7,800 | Measures forced hedge and arbitrage capacity. |
| Financing repayment | Net repayment above **CNY 18bn/day** | Above **CNY 45bn/day** or two sessions above **CNY 30bn/day** | Confirms forced cash selling. |
| DMA margin calls | Brokers raise margin or cut DMA limits | Concentrated redemption/top-up notices across multiple brokers | Converts mark-to-market stress into flow. |
| MO skew / put IV | ATM put IV above **35%** or 90P-call skew above **12 vol pts** | Put skew widens while spot sells off and liquidity falls | Shows hedging demand is no longer orderly. |
| ETF/basis flow | Large CSI 1000 ETF turnover without premium stabilization | ETF discount/premium instability plus IM discount widening | Shows futures stress leaking into cash baskets. |

## Risk Actions

1. **Before 8,200:** keep Card 3's high-beta reduction plan. Cut crowded small-cap technology, robotics, military electronics, innovative-drug small caps, and other financing-heavy positions. Replace outright small-cap beta with defined-loss structures.

2. **8,200 to 8,000:** stop adding directional IM shorts. The risk/reward of fresh shorts deteriorates because snowball pre-knock-in hedging can temporarily support futures and because policy/ETF stabilization probability rises. Use put spreads or collars rather than naked futures.

3. **Below 8,000:** do not automatically "buy the dip." Start reverse positioning only if at least two of the following improve: IM annualized discount narrows back inside **-12%**, financing repayment falls below **CNY 25bn/day**, CSI 1000 reclaims **8,050** intraday with turnover support, or ETF premiums normalize. Without those confirmations, keep liquidity reserves.

4. **Counterparty controls:** require DMA managers to pre-fund margin to a **35%** stress buffer, cap same-broker exposure, and pre-agree liquidation schedules. For snowball counterparties, monitor knock-in notional by barrier interval rather than by aggregate product size.

5. **Portfolio hedge:** prefer liquid large-cap hedges through IH/IF collars and HS300/SSE50 ETF overlays. Do not rely on VIX-like spot-vol readings or broad index beta alone; the stress lives in small-cap cash liquidity, IM basis, and snowball/DMA flows.

## Conclusion

I support the prior conclusion that **8,200** is the de-risking line and **8,000** is the key stress line. I deny the stronger interpretation that an 8,000 break must become a systemic crash. The most likely outcome is a violent but containable liquidity air pocket if policy/ETF demand and futures arbitrage absorb the first wave. The true crash path requires a **7,800** follow-through plus concurrent margin repayment, DMA deleveraging, and post-knock-in IM hedge selling. Therefore, 8,000 is not a blind buy point; it is a point where the desk shifts from price-level rules to forced-flow confirmation.

## Sources and Method Notes

- Shanghai Stock Exchange, [Margin trading summary methodology](https://www.sse.com.cn/market/othersdata/margin/sum/): exchange definitions of financing balance, financing repayment, forced liquidation, and broker-reported summary data.
- Sina Finance, [A-share margin balance and financing balance reached record highs](https://finance.sina.com.cn/roll/2026-05-10/doc-inhxmeai7672492.shtml), published 2026-05-10: reports **CNY 2,786.436bn** margin balance, **CNY 2,766.345bn** financing balance, **2.42%** margin balance / free-float market-cap ratio, and investor participation data as of **2026-05-07**.
- Caijing / Securities Times, [A-share financing balance reached a record high](https://stock.caijing.com.cn/20260507/5158022.shtml), published 2026-05-07: reports **CNY 2,736.745bn** financing balance as of **2026-05-06**, up **CNY 41.165bn** from the prior session.
- CFFEX, [CSI 1000 index futures contract](https://www.cffex.com.cn/zz1000/) and [trading rules](https://www.cffex.com.cn/cn/ssxz/20220718/43093.html): IM multiplier **CNY 200 per point**, minimum margin **8%**, daily price limit **+/-10%**, cash settlement, and position-limit framework.
- Economic Observer, [DMA business mechanics](https://www.eeo.com.cn/2024/0229/640552.shtml), published 2024-02-29: describes DMA-type neutral products, **4x** leverage, and **25%** margin after earlier risk reduction from AB swaps.
- Sina / Securities Times, [Snowball structure market impact](https://finance.sina.cn/2024-01-23/detail-inaenmae4244304.d.html), published 2024-01-23: describes broker futures hedging, approximate **2,000-3,000bn CNY** stock of snowball products at that time, and the post-knock-in futures selling concern.
- Xinhua Finance, [Snowball knock-in mechanism](https://www.cnfin.com/gs-lb/detail/20240124/4004742_1.html), published 2024-01-24: explains that brokers may add futures hedges before knock-in and sell excess futures after the barrier is breached.
- Caijing / Sina, [Snowball and DMA transmission](https://finance.sina.com.cn/roll/2024-02-06/doc-inahazxz9448053.shtml), published 2024-02-06: cites delta moving above **1.2-1.5** near knock-in and returning toward **1** after knock-in, plus the DMA transmission through wider futures discount.
- CMS Futures via China Futures Association, [Snowball product knock-in comparison](https://www.cfachina.org/servicesupport/analygarden/jrl/fxszh6/202401/P020240129522282261187.pdf), published 2024-01-26: estimates **23.5%** one-day CSI 1000 snowball knock-in ratio on **2024-01-22** and explains the four-step hedge/basis transmission path.
- NBD, [CSI 1000 sector and index context](https://www.nbd.com.cn/articles/2026-05-07/4382360.html), published 2026-05-07: reports CSI 1000 May 2026 sample adjustment and top sector weights around electronics **16%**, power equipment **10%**, biomedicine **8%**, machinery **7%**, and computer **7%**.

Footer: Chief Risk Officer card 04, Board ab835415-ad81-4612-8bf1-82b766942307, work-date **2026-05-12**.
