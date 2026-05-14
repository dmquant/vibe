---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "权益策略"
content_error: ""
---

# CSI 1000 Daily Market-Structure Dashboard and Execution Rules, 2026-05-12

Kind: **daily**
Analyst: **A-Share Strategist**

## Links

- Report type: [[daily]]
- Analyst: [[A-Share Strategist]]
- Analyst level: [[权益策略]]

# CSI 1000 Daily Market-Structure Dashboard and Execution Rules, 2026-05-12

As of the institute work-date **2026-05-12** (Asia/Singapore; shell date confirmed as 2026-05-12), I **synthesize and operationalize** the prior cards: **8,200** is the de-risking trigger, **8,000** is the forced-flow confirmation line, and **7,800** is the contagion line. The key change from a pure stress test is procedural: the desk should not trade the level alone. It should trade the level plus five daily market-structure fields: CSI 1000 spot, IM basis, margin financing repayment, CSI 1000 ETF discount/premium, and DMA margin-call notices.

## Executive Judgment

The correct rule is: **reduce risk into 8,200, stop adding naked downside at 8,000, and reverse only after forced-flow indicators stop deteriorating**. Card 04's stress estimates remain the operating budget: a decisive **8,000** break can create **CNY 45-80bn** of one-session cash-equity selling pressure and **CNY 15-30bn** of IM-equivalent futures pressure; a **7,800** close with a deeply negative basis can lift three-session cash pressure to **CNY 150-220bn** and IM pressure to **CNY 45-70bn**.

The dashboard therefore separates three decisions:

| Decision | Price zone | Required market-structure confirmation | Desk action |
|---|---:|---|---|
| De-risk | **8,450-8,200** | One or more of: IM annualized discount wider than **-10%**, financing net repayment above **CNY 12bn/day**, CSI 1000 ETF discount wider than **-0.30%**, or first DMA margin-tightening notice | Cut small-cap/high-beta net exposure by **20-30%**; replace naked beta with collars or put spreads. |
| Pause new shorts | **8,200-8,000** and especially any test of **8,000** | IM discount wider than **-15%**, ETF discount/premium unstable, or financing repayment above **CNY 30bn/day** | Do not add naked IM shorts; take partial profit on crowded short hedges; keep downside through defined-loss option structures. |
| Reverse position | Below **8,000** or failed break of **7,800** | At least two confirmations: IM discount narrows back inside **-12%**, financing repayment falls below **CNY 25bn/day**, CSI 1000 reclaims **8,050** intraday or closes back above **8,000**, ETF discount normalizes inside **-0.20%**, or DMA notices stop expanding | Start with **10-15%** of risk budget; add to **30-40%** only after a close back above **8,200** with basis improving. |

## Daily Monitoring Table

This table is designed for a pre-open, midday, and post-close desk check. "Today" and "previous session" are always relative to **2026-05-12** for this card.

| Field | Daily observation | Green | Yellow / de-risk | Red / forced-flow | Contagion | Execution rule |
|---|---|---:|---:|---:|---:|---|
| CSI 1000 spot | Last price, close, intraday low, reclaim/failure of **8,450 / 8,200 / 8,000 / 7,800** | Close above **8,450** after stress; no failed retest | Close below **8,200** or two intraday failures to reclaim it | Close below **8,000**, or two intraday breaks below 8,000 without reclaiming **8,050** | Close below **7,800** | Price defines the decision gate. Above 8,450, rebuild only if flows agree. At 8,200, cut risk. At 8,000, stop new naked shorts. At 7,800, preserve liquidity and wait for failed-break evidence. |
| IM basis | Front and main contract basis versus CSI 1000 spot; annualized discount; 1-day change in basis | Better than **-8%** annualized or narrowing for two sessions | Wider than **-10%**; **-12%** is de-risk confirmation | Wider than **-15%** after spot breaks 8,000 | Wider than **-18%** near 7,800 | A widening basis confirms forced futures flow. Pause new shorts when basis is already below -15%; reverse only when it narrows back inside -12% and spot stabilizes. |
| Margin financing repayment | SSE/SZSE daily financing buy, direct repayment, sell-to-repay, net financing purchase; focus on market-wide and CSI 1000-heavy names | Net financing purchase flat or positive; repayment below **CNY 12bn/day** | Net repayment above **CNY 12bn/day**; **CNY 18bn/day** confirms 8,200 pressure | Above **CNY 45bn/day**, or two sessions above **CNY 30bn/day** | Three-session cumulative repayment above **CNY 90bn** with spot below 7,800 | Treat repayment as cash selling. Do not reverse while repayment accelerates. First pilot reverse requires repayment below **CNY 25bn/day** or a positive net financing day. |
| CSI 1000 ETF discount/premium | Weighted discount/premium of major CSI 1000 ETFs versus IOPV/NAV; turnover versus 20-day average; creation/redemption quality | Discount inside **-0.20%** and/or small premium with stable creations | Discount wider than **-0.30%** or premium flips repeatedly with turnover above **2x** 20-day average | Discount wider than **-0.50%** at close, intraday discount wider than **-0.80%**, or premium fails while IM discount widens | Persistent discount wider than **-1.00%** plus poor depth | ETF stress shows whether futures pressure is spilling into cash baskets. A stable premium with creations is a support signal; discount instability blocks bottom-fishing. |
| DMA margin-call notices | Broker notices on margin ratio, gross exposure, haircut, concentration limits, and T+0/T+1 top-up deadlines | No margin increase; normal gross limits | One or two brokers lift stress buffer toward **30-35%** or cut single-strategy gross | Multiple major brokers demand top-ups, reduce DMA limits, or require same-day gross cuts | Client top-up failures, redemption-linked liquidation, or forced liquidation schedule | DMA converts mark-to-market losses into real selling. Red DMA signals override price-only dip-buy rules. Reverse only after notices stop broadening for at least one session. |

## Execution Rules by Line

### 1. The 8,200 line: reduce before liquidity becomes scarce

At **8,200**, the desk should assume the market is no longer just marking down valuation; it is entering the upper edge of the snowball/DMA/margin financing stress band identified in Cards 02-04. The action is not to call a crash. The action is to **reduce balance-sheet consumption before the cash market demands it**.

Required actions:

| Portfolio sleeve | Action at 8,200 | Rationale |
|---|---|---|
| CSI 1000 / CSI 2000 high beta | Cut net exposure by **20-30%**; reduce names with high margin-financing ownership first | This is where financing repayment can start before formal liquidation. |
| Crowded themes | Trim robotics, small-cap AI, military electronics, innovative-drug small caps, and high-beta manufacturing | These overlap with CSI 1000 sector concentration and DMA long baskets. |
| Existing hedges | Keep hedges but convert incremental downside into put spreads/collars | Basis may become unstable; defined-loss structures protect against squeeze and policy bids. |
| Large-cap ballast | Keep or add liquid HS300/SSE50/A50 ETF overlays rather than shorting more IM | The stress is small-cap liquidity, not broad China beta alone. |

Trigger condition: **one price trigger plus one flow trigger**. A close below **8,200** is enough by itself for the first cut; an intraday break needs confirmation from IM basis wider than **-10%**, financing net repayment above **CNY 12bn**, ETF discount wider than **-0.30%**, or a DMA notice.

### 2. The 8,000 line: pause new shorts and switch to forced-flow confirmation

At **8,000**, the expected distribution becomes two-sided. Downside convexity is larger, but the risk/reward of fresh naked shorts deteriorates because the market is near the center of the estimated snowball band, public-stabilization demand becomes more plausible, ETF flows can suddenly turn, and IM basis can gap then mean-revert.

Pause new naked shorts when any two of these are true:

| Confirmation | Threshold |
|---|---:|
| CSI 1000 price | Spot trades **7,950-8,050** or closes below **8,000** |
| IM basis | Annualized discount wider than **-15%** |
| Financing repayment | Above **CNY 30bn/day**, or prior day above **CNY 45bn** |
| ETF discount/premium | Closing discount wider than **-0.50%** or intraday swings exceed **0.80%** |
| DMA notices | Multiple brokers cut limits or require T/T+1 top-up |

Execution: cover **25-50%** of discretionary IM shorts if they were opened above 8,200 and the basis is already wider than **-15%**. Keep crash protection through **7,800/7,400 put spreads**, not through fresh naked futures shorts. Do not buy the cash market yet unless reversal confirmations have started.

### 3. The 7,800 line: treat it as contagion unless it fails quickly

A close below **7,800** is the line where Card 04's tail path becomes active: multi-day margin repayment, snowball post-knock-in hedge reduction, DMA gross cuts, and ETF/basis spillover can reinforce each other. The desk should not "average down" simply because price is low.

Contagion rule: if CSI 1000 closes below **7,800** and IM annualized discount is wider than **-18%**, set the book to capital-preservation mode. New cash buying is blocked unless at least **three** of the five dashboard fields improve on the same day or the next session.

Failed-break reversal rule:

| Reversal evidence | Minimum condition |
|---|---:|
| Spot reclaim | Intraday low below **7,800** but close back above **8,000**, or close above **8,050** after an 8,000 break |
| Basis repair | IM annualized discount narrows by at least **300bp** from the stress low and finishes inside **-12%** |
| Financing flow | Net repayment below **CNY 25bn/day**, or net financing purchase turns positive |
| ETF support | CSI 1000 ETF discount closes inside **-0.20%**, or a small premium holds with creation activity |
| DMA stabilization | No new broad margin tightening notices for one full session |

Positioning after a failed break should be incremental: **10-15%** risk budget first, **30-40%** only after a close back above **8,200**, and normal risk only after two closes above **8,450** with IM basis better than **-8%**.

## Dashboard Scoring

The five fields should be scored daily as 0/1/2/3:

| Score | Meaning | Portfolio state |
|---:|---|---|
| 0 | Green | Normal hedge discipline; no forced de-risking. |
| 1 | Yellow | De-risking preparation; avoid adding small-cap beta. |
| 2 | Red | Forced-flow confirmation; cut gross and pause new naked shorts. |
| 3 | Contagion | Capital preservation; only failed-break reversals allowed. |

Aggregate rule:

| Aggregate state | Definition | Action |
|---|---|---|
| Green | No red fields and fewer than two yellow fields | Normal sizing; keep 8,450 as de-pin confirmation. |
| Yellow | Two or more yellow fields, or CSI 1000 below 8,200 | Cut high-beta exposure by **20-30%**. |
| Red | Any two red fields, or CSI 1000 below 8,000 with one red flow field | Pause new naked shorts; reduce gross; keep option-defined protection. |
| Contagion | CSI 1000 below 7,800 plus either IM basis below **-18%** or DMA red | Block discretionary dip-buying; require three reversal confirmations. |

## Practical Data Sources and Checks

| Field | Primary source | Backup / validation | Notes |
|---|---|---|---|
| CSI 1000 spot | Exchange/vendor index feed; Card 02 used Tencent index quote for **8,866.78** on 2026-05-11 | CSI index vendor pages and broker OMS | Use close, intraday low, and reclaim levels, not close alone. |
| IM basis | CFFEX IM futures quote and CSI 1000 spot | Broker futures desk; basis monitor | CFFEX rules define IM as cash-settled CSI 1000 futures with **CNY 200/point** multiplier and **8%** minimum margin. |
| Margin repayment | SSE and SZSE margin trading summary | Broker financing book and Wind/Choice | SSE defines financing balance, financing repayment, sell-to-repay, and forced liquidation reporting. |
| ETF discount/premium | SSE ETF IOPV/NAV and major CSI 1000 ETF quotes | Fund company PCF and broker ETF desk | SSE's ETF framework links secondary price, IOPV, creation/redemption basket, and premium/discount arbitrage. |
| DMA margin notices | Prime broker / broker swap desk notices | Product administrator, custodian, and margin operations | This is not a public data series; require same-day internal confirmation. |

## Conclusion

I support Card 04's warning that **8,000** is a forced-flow red line, not a blind buy level, and I convert it into a daily execution rulebook. The desk should **reduce at 8,200**, **pause fresh naked shorts at 8,000**, and **reverse only when flows repair**, not when price alone looks cheap. A **7,800** close with IM basis wider than **-18%** is contagion mode; a failed break of 7,800 with basis, financing, ETF, and DMA improvement is the first actionable contrarian setup.

## Sources and Method Notes

- Card 02, `whiteboard/ab835415-ad81-4612-8bf1-82b766942307/card-02/report.en.md`: CSI 1000 close **8,866.78** on 2026-05-11, estimated snowball watch band **7,800-8,200**, center **8,000**, de-pin confirmation **8,450**, and MO skew/gamma context.
- Card 04, `whiteboard/ab835415-ad81-4612-8bf1-82b766942307/card-04/report.en.md`: stress estimates of **CNY 45-80bn** one-session cash pressure and **CNY 15-30bn** IM pressure at 8,000, and **CNY 150-220bn** three-session cash pressure plus **CNY 45-70bn** IM pressure at 7,800.
- Shanghai Stock Exchange, [margin trading summary methodology](https://www.sse.com.cn/market/othersdata/margin/sum/): exchange definitions for margin financing balance, financing repayment, sell-to-repay, and broker summary reporting.
- China Financial Futures Exchange, [CSI 1000 index futures trading rules](https://www.cffex.com.cn/cn/ssxz/20220718/43093.html) and [contract specification](https://www.cffex.com.cn/u/cms/www/202207/18190308vxpv.pdf): IM futures multiplier **CNY 200 per point**, **8%** minimum trading margin, **+/-10%** daily price limit, and cash settlement.
- Shanghai Stock Exchange, [ETF creation/redemption list disclosure](https://www.sse.com.cn/disclosure/fund/etflist/) and [ETF premium/discount arbitrage explanation](https://etf.sse.com.cn/fund/learning/strategy/c/5704303.shtml): ETF secondary-market price, IOPV, basket creation/redemption, and premium/discount arbitrage framework.

Footer: A-Share Strategist Card 05, Board ab835415-ad81-4612-8bf1-82b766942307, work-date **2026-05-12**.
