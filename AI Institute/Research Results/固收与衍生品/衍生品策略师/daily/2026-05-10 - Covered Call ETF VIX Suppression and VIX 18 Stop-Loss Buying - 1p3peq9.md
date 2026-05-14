---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "固收与衍生品"
content_error: ""
---

# Covered Call ETF VIX Suppression and VIX 18 Stop-Loss Buying Estimate

Kind: **daily**
Analyst: **Derivatives Strategist**

## Links

- Report type: [[daily]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

# Covered Call ETF VIX Suppression and VIX 18 Stop-Loss Buying Estimate

## Conclusions First

- Date anchor: local `date +%Y-%m-%d` returned `2026-05-11`. This report's “current” window ends on 2026-05-11; because 2026-05-09/10 were weekend days, most market prices and ETF disclosures stop at 2026-05-08.
- My estimate for the “artificial suppression” of VIX from covered call / option-income ETFs is **80-150 bps, or roughly 0.8-1.5 VIX points**. A high-confidence range should be stated as **50-200 bps**, because public AUM does not reveal embedded ELN option notional, OTC hedging, or dealer net vega.
- This is not a “VIX is suppressed by 4-5 points” setup. Option-income ETF AUM is large, but VIX is determined only by 30-day SPX option prices; Cboe also stresses that only a fraction of option-income AUM directly lands in 1-month SPX options, while dispersion by underlying, tenor, and strike dilutes the effect.
- If spot VIX breaks **18**, I estimate the first wave of stop-loss / chase buying at **20k-40k VX futures contracts, about $0.4-0.8bn of VIX futures notional**. If a break above 18 extends toward 19.5-20 and forces broader short-vol accounts to reduce leverage, the stress case can expand to **50k-70k contracts, about $1.0-1.4bn notional**.
- Pure ETF mechanical rebalancing is smaller than the market narrative: if the short-term VX basket rises 5% in one day, mechanical buyback from public short-vol ETPs such as SVIX/SVXY/SVOL is about **$40mn**; if those products cut their short VIX exposure to zero, the total is **roughly $0.45-0.50bn**.

## Key Data

| Item | Current reading | Interpretation | Source |
|---|---:|---|---|
| U.S. option ETF total AUM | Around $250bn | Nasdaq’s April 2026 report says the U.S. option ETF universe has around 800 funds, over $250bn AUM, and about $127bn in the top 10 | [Nasdaq, All About ETFs with Options 2026](https://www.nasdaq.com/docs/index/all-about-etfs-with-options-2026) |
| Covered call ETF universe | Around $147bn | Third-party covered-call ETF monitor: about 94 funds and $147bn AUM as of March 2026 | [CoveredCallETFHQ](https://coveredcalletfhq.com/largest-covered-call-etfs.html) |
| JEPI | $44.66bn | Largest derivative-income ETF; holdings page classifies it as Derivative Income | [StockAnalysis JEPI holdings](https://stockanalysis.com/etf/jepi/holdings/) |
| JEPQ | $37.93bn | Nasdaq-100 derivative-income ETF | [StockAnalysis JEPQ holdings](https://stockanalysis.com/etf/jepq/holdings/) |
| SPYI | $9.52bn | S&P 500 High Income ETF; discloses use of SPX index options | [NEOS SPYI](https://neosfunds.com/spyi/) |
| QQQI | $11.62bn | Nasdaq-100 High Income ETF | [NEOS fund overview](https://neosfunds.com/) |
| QYLD | $8.39bn; short NDX call notional $9.15bn | Global X disclosed a short NASDAQ call as of 2026-05-08 | [Global X QYLD](https://www.globalxetfs.com/funds/QYLD) |
| XYLD | $3.12bn; short SPX call notional $3.18bn | Global X disclosed a short S&P 500 call as of 2026-05-05 | [Global X XYLD](https://www.globalxetfs.com/funds/XYLD) |
| DIVO | $6.89bn | More active single-name overwrite exposure, not a pure SPX 1M overwrite | [StockAnalysis DIVO holdings](https://stockanalysis.com/etf/divo/holdings/) |
| SPX option liquidity | 4.49mn contracts volume and 23.21mn contracts OI on 2026-05-08 | At an SPX level near 7,300, this implies roughly $3.3tn of single-day notional volume | [Cboe SPX options](https://www.cboe.com/tradable-products/sp-500/spx-options/) |
| Q1 2026 SPX ADV | 4.9mn contracts | Cboe says Q1 2026 SPX ADV reached a record | [Cboe Q1 2026 options review](https://www.cboe.com/insights/posts/the-state-of-the-options-industry-q-1-2026) |
| Latest spot VIX | Around 17.10 close on 2026-05-08 | VIX is below but close to the 18 trigger | [Investing.com historical VIX](https://za.investing.com/indices/volatility-s-p-500-historical-data?cid=1096487) |
| CFTC VIX futures positioning | OI 362,343 contracts; Asset Manager short 63,482, Leveraged Funds short 100,608 | 2026-04-28 COT; main non-dealer net short is about 46k contracts | [CFTC financial futures short report](https://www.cftc.gov/dea/futures/financial_lf.htm) |
| SVXY | AUM $231.6mn; short VX exposure about -$116mn | -0.5x VIX short-term futures product; holdings are short May/Jun VX | [ProShares SVXY](https://www.proshares.com/our-etfs/strategic/svxy) |
| SVIX | AUM around $217-227mn; short VX exposure about 91% of NAV | -1x short VIX futures ETF | [ETF Central SVIX](https://www.etfcentral.com/fund/SVIX), [StockAnalysis SVIX](https://stockanalysis.com/etf/svix/) |
| SVOL | AUM $594.8mn; target -0.2x to -0.3x VIX short-term futures | Short-vol income ETF with VIX call hedges | [Simplify SVOL](https://www.simplify.us/etfs/svol-simplify-volatility-premium-etf) |

## Suppression Estimate Framework

I split “artificial suppression” into two components:

1. **Option supply effect**: covered call ETFs systematically sell index calls / call spreads / ELN-embedded options, directly lowering implied vol in the relevant tenor and moneyness. The most direct input to VIX is 30-day SPX OTM/ATM options; NDX, Russell, single-name, and sub-30-day option selling only affects VIX indirectly.
2. **Dealer gamma effect**: ETFs sell calls, dealers often buy calls and delta hedge. In a positive-gamma zone, dealers tend to sell rallies and buy dips, suppressing realized volatility and indirectly lowering VIX. BIS describes how yield-enhancing structured products can dampen underlying price movements through dealer dynamic hedging and may depress VIX; T. Rowe Price also argues that call-overwriting ETFs increase the supply of OTM calls used in the VIX calculation and can suppress market moves through dealer long gamma.

But the mechanism should not be extrapolated linearly. Cboe’s counterpoint matters: option-income fund AUM rose from about $20bn in 2019 to over $120bn in 2024, but only a fraction directly affects VIX; if buy-write flows were the dominant force depressing call vol, call skew should be extremely low, while Cboe observed SPX call skew near historical highs. I therefore do not recommend using a large “artificial suppression” number.

## Order-of-Magnitude Derivation

| Step | Assumption | Result |
|---|---|---:|
| 1. Current covered-call / income ETF AUM | Category about $147bn; largest funds sum to about $125bn | The pool is large, but it does not all hit VIX |
| 2. Direct VIX-relevant supply | SPX 1M / near-1M overwrite around $55-75bn; NDX / single-name / other around $55-70bn | The directly VIX-relevant share is about 40%-55% |
| 3. Relative to SPX market depth | SPX options traded 4.49mn contracts on 2026-05-08; with SPX near 7,300 and a 100 multiplier, notional was about $3.3tn | Covered-call monthly rolls amortize to only about $2.5-4.0bn per day; on roll days they can rise to $20-40bn |
| 4. Transmission to VIX | Assume call supply lowers relevant call vol by 1-3 vol pts, passing through about 0.2-0.8 VIX points; dealer gamma / realized-vol feedback adds another 0.3-0.7 point | Total about 0.8-1.5 VIX points |
| 5. Sensitivity | If effective JEPI/JEPQ ELN coverage is cut to 40%-50%, suppression is closer to 0.5-1.0 point; if rolls are concentrated and market-maker inventory is hard to absorb, short-term impact can reach 1.5-2.0 points | Best phrasing: 50-200 bps range, with an 80-150 bps center |

## Stop-Loss Buying if VIX Breaks 18

### Public Short-Vol ETP Mechanical Component

The estimate uses AUM around 2026-05-08:

| Product | Exposure multiple | AUM | Estimated short VX exposure | Mechanical buyback if VX basket rises 5% | Buyback if exposure is cut to zero |
|---|---:|---:|---:|---:|---:|
| SVIX | -1.0x | $217-227mn | $200-210mn | About $22mn | $200-210mn |
| SVXY | -0.5x | $231.6mn | $116mn | About $9mn | $116mn |
| SVOL | -0.25x midpoint | $594.8mn | $149mn | About $9mn | $149mn |
| Other smaller short-vol products | Mixed | About $50-150mn | $25-75mn | About $1-5mn | $25-75mn |
| **Total** |  |  | **About $0.45-0.55bn** | **About $40mn** | **About $0.45-0.50bn** |

Explanation: an intraday break of 18 does not automatically force ETFs to fully flatten. The mechanical rebalancing formula is approximately `2 * AUM * index move` for -1x products, `0.75 * AUM * index move` for -0.5x, and `0.3125 * AUM * index move` for -0.25x. The true forced flow comes from stop-loss / risk controls, not daily rebalancing itself.

### CFTC / Discretionary Short-Vol Stop Component

The 2026-04-28 CFTC VIX futures data show:

- Asset Manager short: 63,482 contracts; long: 57,703 contracts; net short about 5,779 contracts.
- Leveraged Funds short: 100,608 contracts; long: 60,287 contracts; net short about 40,321 contracts.
- The main non-dealer net short is about **46k VX contracts**, or about **$0.9bn** notional using a 19-20 VX price and $1,000 multiplier.

If VIX 18 is the first spot trigger, I would not assume full covering. A more practical breakdown is:

| Scenario | Trigger | Buying estimate |
|---|---|---:|
| Mild break | VIX above 18 but VX rises only 3%-5%, with no clear SPX breakdown | **10k-20k VX contracts**, about **$0.2-0.4bn** |
| Base case | VIX holds above 18 and short-end VX rises with it; CTA/vol-control/short-vol pods cut risk by roughly half | **20k-40k VX contracts**, about **$0.4-0.8bn** |
| Stress case | VIX breaks 18 and quickly runs toward 19.5-20; SPX breaks key moving averages; short-vol risk controls turn forced | **50k-70k VX contracts**, about **$1.0-1.4bn** |

## Suggested Language for the Sentiment Analyst

- “Covered call ETF AUM is large enough to create structural vol supply, but in VIX terms the suppression is closer to **around 1 VIX point**, not several points.”
- “VIX 18 is a light trigger. The real risk is whether VIX can hold above 18 and pull the first two VX futures months higher. If it is only a spot VIX poke, mechanical buying is about $40mn; if it trips short-vol risk controls, flow can expand to $0.4-0.8bn.”
- “If VIX approaches 20, shift the framing from ‘covered calls suppress VIX’ to ‘short-vol stop-loss accounts chase VIX futures.’ At that point dealer gamma can move from volatility dampening to liquidity consumption, and sentiment can deteriorate nonlinearly.”

## Follow-Up Items

- Check the latest full JEPI/JEPQ holdings for embedded ELN notional, strikes, and expiries; public pages give AUM and stock holdings but do not fully reconstruct embedded short-option exposure.
- Track the 2026-05-06/13 CFTC VIX futures COT updates to confirm whether leveraged funds keep expanding net shorts.
- Monitor synchronization across VIX 18, 19.5, and 20 versus VX1/VX2; if spot VIX crosses but VX futures do not follow, stop-loss buying is likely below the base case.
