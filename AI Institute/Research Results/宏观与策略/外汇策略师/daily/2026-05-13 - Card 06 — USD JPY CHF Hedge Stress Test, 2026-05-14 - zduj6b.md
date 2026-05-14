---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "宏观与策略"
content_error: ""
---

# Card 06 — USD/JPY/CHF Hedge Stress Test, 2026-05-14

Kind: **daily**
Analyst: **FX Strategist**

## Links

- Report type: [[daily]]
- Analyst: [[FX Strategist]]
- Analyst level: [[宏观与策略]]

# Card 06 — USD/JPY/CHF Hedge Stress Test, 2026-05-14

- Board: 7a26ac84-2a2d-4300-b4c2-1d79fed0bd60 · Card 6/8
- Analyst: FX Strategist (fx-strategist)
- Stance: stress-test
- Work date: **2026-05-14** (Asia/Singapore)
- Workspace note: `session-brief.md`, `card-05/`, and `card-06/` were not physically present in this live workspace when checked; upstream context is reconstructed from the provided session snapshot. Card-03 files were present.

## Mission

As of **2026-05-14**, stress-test Card 05's proposed hedge sleeve of long USD versus JPY/CHF during an IRP+TP-led move in 10y TIPS through 2.30%. The question is whether forced carry-trade liquidation would make that USD/JPY/CHF hedge fail exactly when global de-grossing starts.

## Bottom Line

**Partly yes.** A long USD/JPY/CHF basket is not a clean first-loss hedge in the TIPS 2.30% break scenario. It works only if the shock is dominated by USD funding demand and U.S. front-end yield resilience; it fails during the first 1-5 trading days if the dominant transmission is forced short-JPY/short-CHF covering. I would cut Card 05's proposed USD versus JPY/CHF sleeve from **15-25% to 8-12%**, shift the remainder into **USD cash/0-2y bills plus USD versus high-beta currencies**, and express any USD/JPY exposure with options rather than unprotected spot.

The ranking is:

| Leg | Stress-test judgment | First 1-5 trading days after TIPS >2.30% | 2-4 week state if vol settles |
|---|---|---:|---:|
| USD/JPY long | Fragile hedge | **-4% to -9%** possible on carry unwind | +1% to +4% if rate differential reasserts |
| USD/CHF long | Better but still not clean | **-2% to -5%** if CHF safe-haven squeeze dominates | 0% to +3% if SNB resistance and USD funding dominate |
| USD cash / 0-2y bills | Clean hedge anchor | Positive carry, no FX squeeze | Positive carry |
| USD vs high-beta FX | Cleaner de-grossing expression | +2% to +6% versus AUD/CNH/KRW/MXN-type beta | Depends on China/commodity beta |

## Data Anchors

- The real-rate trigger has not fired yet: FRED shows 10y TIPS at **1.99% on 2026-05-12**, updated 2026-05-13, so the 2.30% threshold is still **31 bp** away. [FRED DFII10](https://fred.stlouisfed.org/series/DFII10)
- The Fed still provides a large carry cushion: on **2026-04-29**, the FOMC maintained the federal funds target range at **3.50%-3.75%**. [Federal Reserve](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm)
- The BoJ is no longer a zero-rate anchor: on **2026-04-28**, the BoJ kept the overnight call rate around **0.75%**, but the vote was **6-3** and three members preferred **1.0%**. [Bank of Japan](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260428a.pdf)
- The SNB makes CHF less one-way than JPY: on **2026-03-19**, the SNB kept the policy rate at **0%** and said willingness to intervene in FX had increased to counter rapid and excessive CHF appreciation. [SNB](https://www.snb.ch/en/publications/communication/press-releases-restricted/pre_20260319)
- Spot levels are already in the danger zone: Fed H.10 last showed USD/JPY at **156.64 on 2026-05-08** after **160.23 on 2026-04-29**; USD/CHF was **0.7773 on 2026-05-08** after **0.7902 on 2026-04-29**. [Fed H.10 JPY](https://www.federalreserve.gov/releases/h10/hist/dat00_ja.htm), [Fed H.10 CHF](https://www.federalreserve.gov/releases/h10/hist/dat00_sz.htm)
- Positioning is less crowded than late April but still short funding currencies: CFTC futures-only data for **2026-05-05** show non-commercial JPY longs of **109,035** and shorts of **170,773**, a net **-61,738** contracts; shorts fell by **37,816** contracts from 2026-04-28. For CHF, non-commercial longs were **7,145** versus shorts of **41,666**, net **-34,521** contracts. [CFTC CME futures-only](https://www.cftc.gov/dea/futures/deacmesf.htm)
- The historical template is explicit: BIS estimated the August 2024 carry-trade episode at a rough middle ballpark of **JPY 40 trillion / USD 250 billion** and emphasized procyclical deleveraging and margin increases. [BIS Bulletin No. 90](https://www.bis.org/publ/bisbull90.htm)

## Mechanism

Card 05 is right that an IRP+TP TIPS shock should initially favor USD cash over duration. The problem is that **long USD/JPY and long USD/CHF are also short funding currencies**, not just long USD. In a carry unwind, the P&L identity changes:

1. Investors sell risky assets and buy back the funding currency.
2. JPY and CHF strengthen because leverage is closed, even if U.S. yields are still higher.
3. USD can rise against high-beta currencies and still fall against JPY/CHF.
4. The hedge therefore becomes correlated with the unwind it was meant to cushion.

This is why the hedge is state-dependent. Interest-rate parity favors USD over JPY/CHF in normal volatility. Tail deleveraging favors the funding currencies during the liquidation window.

## Scenario Matrix

| Scenario | Trigger | USD/JPY | USD/CHF | Hedge verdict |
|---|---|---:|---:|---|
| Controlled TIPS break | 10y TIPS closes above 2.30%, VIX below 28, CFTC JPY net short less negative than -50k | -2% to +2% | 0% to +2% | Works only as a modest USD carry sleeve |
| Forced carry unwind | TIPS >2.30%, USD/JPY breaks 154.5, JPY shorts cover >25k in a week, cross-asset vol jumps | **-4% to -9%** | **-2% to -5%** | Fails as first-loss hedge |
| USD funding squeeze | TIPS >2.30%, FRA/OIS or cross-currency basis stress, high-beta FX sells off faster than JPY/CHF | 0% to +3% | +1% to +4% | Works, but mostly because it is USD liquidity |
| BoJ/MoF shock | USD/JPY near 160 plus hawkish BoJ or intervention signal | **-6% to -10%** | -1% to -3% | USD/JPY leg fails independently of TIPS |
| SNB resistance | CHF rallies too fast and SNB leans against appreciation | -2% to +1% | 0% to +3% | USD/CHF is the more defensible leg |

## Portfolio Implication

The Card 05 hedge architecture should be revised, not abandoned:

- Keep **35-45% cash/0-2y bills** as the true hedge anchor.
- Keep commodity/IRP sleeve at **25-30%** as Card 05 proposed.
- Reduce USD versus JPY/CHF from **15-25% to 8-12%**.
- Within that 8-12%, allocate roughly **30% USD/JPY, 50% USD/CHF, 20% USD calls funded by JPY/CHF put spreads**.
- Move the freed **7-13%** into USD versus higher-beta FX or plain USD cash. The cleanest liquidation hedge is not "USD against funding currencies"; it is "USD liquidity against assets and currencies that need balance sheet."

Risk rules:

- If USD/JPY closes below **154.5** while TIPS is above **2.30%**, halve spot USD/JPY exposure.
- If CFTC JPY net short moves from **-61.7k** to flat in two reports, stop treating USD/JPY as a hedge and treat it as a mean-reversion trade.
- If USD/CHF breaks **0.7700** without SNB pushback, cut the CHF leg by one-third.
- Re-add USD/JPY only after realized/implied JPY volatility compresses and spot stabilizes above the 20-day moving average for at least three sessions.

## Verdict

I **stress-test and partially deny** Card 05's USD/JPY/CHF hedge sleeve as written. The USD thesis is sound; the chosen counterparties are the weak link. In an IRP+TP shock, USD is the right cash asset, but JPY and CHF are the wrong shorts during the forced liquidation window. USD/CHF is more defensible than USD/JPY because the SNB is explicitly resisting excessive CHF appreciation, while BoJ normalization and MoF intervention risk make USD/JPY vulnerable around 156-160.

The correct conclusion is: **do not use spot long USD/JPY/CHF as the main deleveraging hedge. Use USD cash as the anchor, use USD versus high-beta FX for the de-grossing leg, and keep only a smaller, option-defined USD/JPY/CHF sleeve for the post-shock carry recovery.**

## Handoff

Route next to **asset-allocator [primary, allocation trigger: hedge sleeve sizing after FX hedge fragility]**. The remaining question is no longer whether USD/JPY/CHF can fail; it can. The next card should translate this into a revised multi-asset hedge budget: how much goes to USD cash, high-beta FX shorts, commodities, gold convexity, and residual option-defined USD/JPY/CHF exposure.

---

Footer: Card 06 written on **2026-05-14** (Asia/Singapore). Sources accessed for this report include FRED DFII10, Federal Reserve FOMC and H.10 releases, BoJ policy statement, SNB monetary policy assessment, CFTC CME futures-only COT data, and BIS Bulletin No. 90.
