---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "风控与合规"
content_error: ""
---

# CRO Risk Report - 2026-05-11: Full-Portfolio VaR and Style-Switch Stress Test

Kind: **daily**
Analyst: **Chief Risk Officer**

## Links

- Report type: [[daily]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

# CRO Risk Report - 2026-05-11: Full-Portfolio VaR and Style-Switch Stress Test

As of **2026-05-11 (Asia/Singapore)**, I **stress-test** the optimized quantum basket after replacing 2% of **600900** with **600011**. The conclusion is narrow: the swap improves factor hygiene, but it does **not** materially lower 95% VaR for the **2026-05-12/13** event window. One-day 95% VaR moves from **6.43%** to **6.45%** of portfolio notional; two-day 95% VaR moves from **9.10%** to **9.12%**. The residual tail is not the utility hedge; it is the growth-heavy concentration in **688027** and **002281**.

## Portfolio Tested

The live workspace is missing `session-brief.md`, `analyst-catalog.json`, card-01, card-03, and card-05 files; I reconstructed those inputs from the supplied session snapshot and used live card-02/card-04/card-06 files.

| Sleeve | Baseline before swap | Optimized after swap |
|---|---:|---:|
| 688027 | 32% | 32% |
| 002281 | 34% | 34% |
| 688489 | 20% | 20% |
| 603019 | 7% | 7% |
| 600900 | 5% | 3% |
| 600011 | 0% | 2% |
| 600886 | 2% | 2% |

This keeps the prior 93% quantum sleeve and 7% utility overlay intact. The only tested change is **600900 5% / 600886 2%** becoming **600900 3% / 600011 2% / 600886 2%**.

## VaR Result

| Metric | Baseline | Optimized | Change |
|---|---:|---:|---:|
| Model daily volatility | 3.91% | 3.92% | +0.01 pp |
| 1-day 95% VaR | 6.43% | 6.45% | +0.01 pp |
| 2-day 95% VaR | 9.10% | 9.12% | +0.02 pp |
| Utility sleeve risk contribution | ~0.0% | ~0.0% | immaterial |

The swap is therefore **VaR-neutral to slightly VaR-additive**. This is expected: **600011** has lower dividend/low-vol crowding than **600900**, but it is more cyclical and has a higher positive correlation to a growth-led tape. The risk model gives **688027** and **002281** roughly **89%** of total marginal VaR contribution after the swap; utilities contribute approximately zero because their small weights and partial defensive behavior offset their own volatility.

## Tail-Risk Scenarios

| Scenario for 2026-05-12/13 | Baseline P&L | Optimized P&L | Incremental effect of swap |
|---|---:|---:|---:|
| Growth melt-up, value/defensive unwind | +6.51% | +6.58% | +0.07 pp |
| Growth-to-value reversal | -7.59% | -7.66% | -0.06 pp |
| US quantum earnings disappointment | -7.43% | -7.48% | -0.05 pp |
| Thermal-power coal squeeze | -2.91% | -3.00% | -0.09 pp |

The feared **growth vs. value** style switch exists, but it is not introduced by the **600011** substitution. The substitution slightly helps in a growth melt-up because less **600900** is being liquidated as a defensive funding source. It slightly hurts in a growth-to-value reversal because **600011** does not rally like a pure defensive hydro name. The magnitude is only **5-9 bp** of notional, far below the quantum sleeve's own event gap risk.

## Risk Decision

I approve the factor analyst's **Beta-for-Beta** swap for factor governance, but I deny any claim that it materially de-risks the book. The desk should treat optimized VaR as unchanged at roughly **6.45% one-day / 9.12% two-day** and size the book against the larger of model VaR and the discrete earnings-gap stress.

Risk controls for the **2026-05-12/13** window:

- Keep the utility overlay at **7%**; do not raise it to solve quantum-event risk.
- Cap **002281** at **34%** and **688027** at **32%** until the US earnings leg confirms auditable order dollars.
- If intraday portfolio drawdown reaches **-6.5%**, reduce **002281** first, not the utility hedge.
- If **600011** underperforms **600900** by **250 bp** while coal prices rise, reverse half of the 600011 substitution.
- Do not add to limit-up **002281** purely to chase the A-share lag; that converts the thesis from order-realization alpha into momentum crash exposure.

## Sources

- Internal: `whiteboard/df93c179-ae75-49d8-8eab-a7054cde6386/card-02/report.en.md`, `card-04/report.en.md`, `card-06/report.en.md`.
- Market-history snapshots: StockAnalysis pages for [600900](https://stockanalysis.com/quote/sha/600900/history/), [600011](https://stockanalysis.com/quote/sha/600011/history/), [600886](https://stockanalysis.com/quote/sha/600886/history/), [688027](https://stockanalysis.com/quote/sha/688027/history/), [002281](https://stockanalysis.com/quote/she/002281/history/), [688489](https://stockanalysis.com/quote/sha/688489/history/), [603019](https://stockanalysis.com/quote/sha/603019/history/), [RGTI](https://stockanalysis.com/stocks/rgti/history/), [QBTS](https://stockanalysis.com/stocks/qbts/history/), and [QUBT](https://stockanalysis.com/stocks/qubt/history/).

---
**Chief Risk Officer**  
Work-date: **2026-05-11**  
Footer date: **2026-05-11**
