---
source: ai-institute
resource_type: research-result
report_kind: whiteboard-report
analyst_level: "宏观与策略"
content_error: ""
---

# 2026-05-11 | USD/MYR/CNY FX Stress on Johor DC Receivables

Kind: **whiteboard-report**
Analyst: **FX Strategist**

## Links

- Report type: [[whiteboard-report]]
- Analyst: [[FX Strategist]]
- Analyst level: [[宏观与策略]]

# 2026-05-11 | USD/MYR/CNY FX Stress on Johor DC Receivables

- Card: 6/8
- Analyst: FX Strategist
- Stance: stress-test
- Work-date: 2026-05-11 (Asia/Singapore, institute canonical date)
- Topic: USD/MYR/CNY triangular shock on the actual CNY recovery value of A-share suppliers' USD-denominated receivables from Johor DC developers

As of 2026-05-11, I support card-05's S2 credit-stress direction but add one correction: a USD invoice is not a clean USD asset when the debtor earns or refinances in MYR and the creditor has sold USD/CNY forwards. The legal claim may be in USD, but the real CNY recovery depends on three gates: the Malaysian developer's ability to buy USD with weaker MYR, the A-share supplier's hedge rate and maturity, and whether settlement can pass through onshore MYR and China FX documentation without delay.

Workspace note: the live workspace was missing `session-brief.md`, `analyst-catalog.json`, `card-01`, and `card-04`; those references are reconstructed from the prompt snapshot. `card-02`, `card-03`, and `card-05` were present and read on disk.

## Core Call

Under S2, the Johor-linked A-share receivable face remains **CNY 22-26 bn** from card-05, with a credit-only recovery assumption of **50%**, or **CNY 11-13 bn**. Adding the FX overlay:

- If USD is actually collected and left unhedged, USD/CNY at **7.40-7.60** offsets much of the MYR hit. Incremental compression is only **2.4-2.9% of face**, or **CNY 0.5-0.8 bn**.
- If suppliers have already sold USD forward around a book hedge rate near **7.20**, they cannot capture most of the 7.40-7.60 translation upside, while the debtor still faces the MYR funding squeeze. Incremental compression rises to **3.7-5.4% of face**, or **CNY 0.8-1.4 bn**.
- If payment is delayed, hedge maturities expire, or partial non-payment creates an over-hedge unwind, the practical FX and settlement gap can widen to **6-8% of face**, or **CNY 1.3-2.1 bn**.

Existing cross-border settlement routes and forwards can absorb only **CNY 0.4-0.8 bn** of that gross gap. The residual uncovered hit is therefore **CNY 0.6-1.5 bn** in the central S2 FX case, and **CNY 1.3-2.4 bn** in the delayed-payment tail. This should be added to card-05's impairment budget, not treated as diversification.

## FX Starting Point

Malaysia's official open-data portal shows BNM exchange-rate data as of **2026-05-08 12:00**, the latest pre-work-date reference available in the feed at the time of review. The 1200 middle rates were **USD/MYR 3.9195** and **CNY/MYR 0.5760**, implying USD/CNY near **6.81** through the MYR cross. The user's **7.40-7.60** USD/CNY range is therefore a tail CNY depreciation scenario, not the spot starting point.

BNM also states in the same data catalogue that MYR is non-internationalised, can be traded and settled only in Malaysia under BNM regulation, and that offshore MYR NDF activity is indicative rather than deliverable. That matters because an A-share supplier can hedge USD/CNY onshore, but it cannot reliably hedge the developer's MYR-to-USD funding problem from China.

## Calculation Framework

I normalise card-05's CNY face at a **7.20 USD/CNY book rate**, because the prior card stated the exposure in CNY but not the invoice conversion rate. If the actual audited book rate differs, the percentages below are the more reliable output; the CNY amounts scale with the disclosed face value.

Formula:

`Real CNY recovery ratio = 50% S2 credit recovery x MYR funding factor x USD/CNY settlement factor`

Where:

- `MYR funding factor = 1 / (1 + MYR depreciation)`
- `USD/CNY settlement factor = actual USD/CNY / 7.20` if unhedged
- `USD/CNY settlement factor = hedge rate / 7.20` if USD receipts were sold forward

| Case | MYR move | USD/CNY | Hedge treatment | CNY recovery ratio | Incremental gap vs. 50% S2 | Gap on CNY 22-26 bn face |
|---|---:|---:|---|---:|---:|---:|
| S2 credit only | 0% | 7.20 book | No FX stress | 50.0% | 0.0% | CNY 0.0 bn |
| FX A, low stress | -8% MYR | 7.40 | Unhedged USD collected | 47.6% | 2.4% | CNY 0.5-0.6 bn |
| FX A, high stress | -12% MYR | 7.60 | Unhedged USD collected | 47.1% | 2.9% | CNY 0.6-0.8 bn |
| FX B, low stress | -8% MYR | Forward locked near 7.20 | USD/CNY upside capped | 46.3% | 3.7% | CNY 0.8-1.0 bn |
| FX B, high stress | -12% MYR | Forward locked near 7.20 | USD/CNY upside capped | 44.6% | 5.4% | CNY 1.2-1.4 bn |
| Settlement tail | -8% to -12% MYR | 7.40-7.60 | Delayed receipt, over-hedge unwind, bank line rationing | 42.0-44.0% | 6.0-8.0% | CNY 1.3-2.1 bn |

The important result is not that USD/CNY 7.60 is bad by itself. For an unhedged Chinese creditor, a weaker CNY is helpful once USD is received. The loss comes from the **MYR-funded debtor** and from **hedges that lock the creditor into an older USD/CNY rate before the credit event is resolved**.

## Settlement And Hedge Capacity

| Mitigant | What it can do | What it cannot do | Effective S2 absorption |
|---|---|---|---:|
| Onshore USD/CNY forwards by A-share suppliers | Reduce accounting volatility for scheduled USD receipts; policy cost improved after PBOC cut the forward-sale FX risk reserve rate from 20% to 0% effective 2026-03-02. | Does not hedge the Malaysian debtor's MYR cash-flow shortfall; creates over-hedge risk if USD receipt is delayed or impaired. | CNY 0.2-0.4 bn |
| Trade FCA / offshore USD settlement | Allows received USD to be held, netted, or converted with documentation; useful for clean payments. | Useless if developer cannot access USD funding or banks cut credit lines; documentation delays can exceed hedge maturities. | CNY 0.1-0.2 bn |
| Malaysian onshore MYR/USD hedging | Developer-side hedge can convert some MYR cash flow into USD if backed by underlying exposure. | Chinese supplier has limited control; MYR is non-internationalised and offshore NDF is not deliverable MYR settlement. | CNY 0.1-0.2 bn |
| RMB settlement via Hong Kong/offshore RMB | Deeper offshore RMB liquidity helps working-capital refinancing and may reduce conversion friction. | Does not solve a USD legal invoice unless contracts are amended; amendment may trigger discount requests. | CNY 0.0-0.1 bn |

Total practical absorption is **CNY 0.4-0.8 bn**. In percentage terms, that is only **25-40%** of the central S2 FX/settlement gap and less than **25%** in the delayed-payment tail.

## Why The Hedge Looks Better Than It Is

The hedge problem is asymmetric:

1. If the developer pays in full and on time, a USD/CNY forward works, but it also caps the benefit from USD/CNY moving to 7.40-7.60.
2. If the developer pays late, the supplier must roll the forward. Roll cost rises when credit spreads widen and bank limits tighten.
3. If the developer pays partially, the supplier may be over-hedged: it has sold more USD forward than it receives, so it must buy USD back at a worse spot rate or close the derivative at a loss.
4. If the developer asks to settle in MYR or CNY instead of USD, the supplier faces a contract amendment, a discount negotiation, or a new basis risk.

This is why a disclosed "hedging ratio" is not enough. The investment committee needs the hedge-by-invoice ladder: invoice currency, debtor cash currency, maturity bucket, hedge rate, hedge maturity, bank counterparty, and whether hedge accounting remains valid if the receivable moves to Stage 2 or Stage 3.

## Investment Implication

For the six-name A-share AI-infra basket in card-05, S2 should be upgraded from a pure receivable impairment test to a **credit plus FX liquidity test**.

Required model changes:

- Add **CNY 0.6-1.5 bn** residual FX/settlement loss to the central S2 impairment case.
- Add **CNY 1.3-2.4 bn** residual tail loss if payment delays exceed hedge maturities or bank USD lines are rationed.
- Treat USD/CNY weakness as a partial offset only for unhedged and actually collected USD, not for delayed, impaired, or forward-sold receivables.
- Demand invoice-level disclosure for Johor exposure: USD face, MYR cash-flow link, hedge coverage, hedge maturity, and collection days.
- Keep card-05's 8% AI-infra exposure cap and VaR x1.6, but add a stop-loss trigger: if USD/MYR closes above **4.30** while USD/CNY trades above **7.40** and any named developer misses a payment milestone, move the basket to S2 FX tail.

## Relation To Prior Cards

- **Supports card-05**: the credit impairment chain is still the main loss driver.
- **Stress-tests card-05**: the 50% recovery assumption is too clean unless it includes MYR funding, USD liquidity, and hedge timing.
- **Connects card-02/card-03**: utility repricing and site-level stranding weaken developers' MYR cash flow, which is exactly the cash source needed to buy USD for supplier payments.
- **Corrects a simple FX reading**: USD/CNY depreciation is not automatically bearish for a USD receivable; it becomes bearish when the USD receipt is uncertain or already forward-sold.

## Sources

1. Prior card 05 on disk: `whiteboard/cd39ee55-d78a-46ff-9e87-9d739c5e7ac2/card-05/report.en.md` and `meta.json`.
2. Malaysia official open data, Daily Exchange Rates (1200), data as of 2026-05-08 12:00, data source Central Bank of Malaysia: https://data.gov.my/data-catalogue/exchangerates_daily_1200
3. Malaysia official open data, Daily Exchange Rates methodology, MYR non-internationalisation and offshore NDF caveat: https://data.gov.my/data-catalogue/exchangerates_daily_0900
4. BNM Foreign Exchange Policy Notices, Notice 7 export-proceeds timing, deductions, write-off and 24-month delayed receipt provisions: https://www.investmalaysia.gov.my/media/rzzjreei/bnm-foreign-exchange-policy-notices.pdf
5. State Administration of Foreign Exchange, Data and Statistics index and 2026 FX market transaction data dispatches: https://www.safe.gov.cn/en/DataandStatistics/index.html
6. PBOC policy report via Economic Observer, 2026-02-27: forward-sale FX risk reserve ratio cut from 20% to 0% effective 2026-03-02: https://www.eeo.com.cn/2026/0227/802176.shtml
7. Standard Chartered, 2026-04-13 RMB market update: offshore RMB liquidity, HKMA RMB Business Facility quota expansion, and PBOC forward-cost change: https://www.sc.com/en/news/corporate-investment-banking/renminbi-market-updates-q2-2026/
8. China government / Xinhua, 2026-01-06: PBOC objective to keep RMB broadly stable and guard against overshooting risk: https://english.www.gov.cn/news/202601/06/content_WS695d0feec6d00ca5f9a08734.html

Footer: FX Strategist card 06, stress-test stance, work-date 2026-05-11.
