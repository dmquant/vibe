---
source: ai-institute
resource_type: research-result
report_kind: whiteboard-report
analyst_level: "权益策略"
content_error: ""
---

# Chief Strategist Final Plan - 2026-05-11: Quantum Basket, Factor Hedge, and Risk Gates for 05-12/13

Kind: **whiteboard-report**
Analyst: **Chief Strategist**

## Links

- Report type: [[whiteboard-report]]
- Analyst: [[Chief Strategist]]
- Analyst level: [[权益策略]]

# Chief Strategist Final Plan - 2026-05-11: Quantum Basket, Factor Hedge, and Risk Gates for 05-12/13

As of **2026-05-11 (Asia/Singapore)**, I **synthesize** the prior cards into the final trading plan for the **2026-05-12/13** A-share window. My decision is: do **not** run the full **93% quantum sleeve + 7% utility hedge** before the US earnings evidence is in. Keep the **7% utility hedge** exactly as optimized, but hold a temporary **88% quantum sleeve + 7% utility hedge + 5% cash reserve** until the first US order-confirmation leg clears. If Rigetti/QUBT and then QBTS validate auditable orders/bookings rather than pure roadmap language or financing support, step back to **93%/7%**.

## Decision

The prior line of reasoning is directionally right: the trade is no longer "AI high beta" only; it is a near-term split between quantum order realizers and financing-led narrators. But the final sizing must respect the CRO's finding that the risk has not been solved by the hedge. After the **600011** substitution, one-day 95% VaR is still about **6.45%** and two-day 95% VaR is about **9.12%**. Roughly **89%** of marginal VaR comes from **688027** and **002281**, not from the utility sleeve.

That means the final book should not try to "fix" event-gap risk by adding more utilities. The utility hedge is a cost-control and factor-governance overlay. It hedges electricity-price and defensive-factor problems; it does not hedge a failed US earnings print. The clean answer is therefore staged exposure:

| State | 688027 | 002281 | 688489 | 603019 | 600900 | 600011 | 600886 | Cash | Quantum / Utility / Cash |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Waiting book before clean US confirmation | 29% | 32% | 20% | 7% | 3% | 2% | 2% | 5% | 88% / 7% / 5% |
| Partial confirmation after clean Rigetti leg | 32% | 32% | 20% | 7% | 3% | 2% | 2% | 2% | 91% / 7% / 2% |
| Full confirmation after clean QBTS leg | 32% | 34% | 20% | 7% | 3% | 2% | 2% | 0% | 93% / 7% / 0% |
| Failed confirmation | 25% | 27% | 20% | 7% | 3% | 2% | 2% | 14% | 79% / 7% / 14% |

The **5% temporary cash reserve** comes only from the two risk-concentrating growth legs: **3 pp from 688027** and **2 pp from 002281**. It does not come from **688489**, because the prior cards identified PQC/security exposure as the cleaner, lower-OpEx realizer. It also does not come from **600900/600011/600886**, because dismantling the utility overlay would reintroduce the electricity-beta and dividend/low-vol factor problems already identified by cards 04-06.

## Why Not Keep Full 93% Immediately

Full **93%/7%** is a valid post-confirmation book, not the right pre-confirmation book. The expected alpha is path-dependent on two US dates:

- **May 11, 2026 after US close:** QUBT scheduled its Q1 2026 shareholder call for **4:30 p.m. ET**. Rigetti's investor page lists Q1 2026 results at **5:00 p.m. ET**. For Asia/Singapore, both calls land before the **May 12** A-share open.
- **May 12, 2026 before US open:** D-Wave scheduled Q1 FY2026 results for **8:00 a.m. ET**, which lands after the **May 12** A-share close and before the **May 13** A-share open.

Because **002281** and **688027** are the tail-risk centers, pre-positioning the full size before these US checks creates a poor asymmetry: the upside can still be captured by re-risking on May 12/13, while the downside gap from a financing-led or non-order print cannot be hedged by the 7% utility sleeve.

## Trigger Rules

Re-risk from **88%/7%/5%** to **91%/7%/2%** at the **May 12** A-share open only if the May 11 US leg satisfies all three conditions:

- Rigetti discloses shipment, revenue recognition, purchase orders, bookings, or government/enterprise contract dollars tied to Novera, C-DAC, DARPA-QBI, or equivalent named programs; roadmap language alone is not enough.
- QUBT's update is not dominated by ATM issuance, generic conference visibility, or non-contract demonstrations. TFLN/foundry progress must come with customer, revenue, or order evidence.
- The A-share tape does not turn the opening print into a momentum chase: no add if **002281** opens limit-up or if the basket is already down more than **-3.0%** in the first 30 minutes.

Re-risk from **91%/7%/2%** to **93%/7%/0%** at the **May 13** A-share open only if QBTS confirms enterprise QCaaS bookings, recurring revenue, customer pipeline conversion, or named contract evidence. D-Wave's prior Q4 release cited more than **$30 million** of January bookings and more than **$32.8 million** of Q1-to-date bookings as of **2026-02-25**; the May 12 print must confirm continuation, not just repeat the old number.

Move to the failed-confirmation book if any of the following occurs:

- US quantum results lean on financing, generic technology-roadmap language, or conference visibility without auditable customer dollars.
- **688027 + 002281** jointly gap higher but breadth in the rest of the quantum/PQC basket is negative, indicating a crowding squeeze rather than order realization.
- Portfolio intraday drawdown reaches **-6.5%**. Per card 07, reduce **002281** first rather than removing the utility hedge.
- **600011** underperforms **600900** by **250 bp** while coal prices are rising; reverse half of the 600011 substitution, but do not use that as a reason to raise quantum exposure.

## Final Allocation Logic

**688027 at 29% before confirmation, 32% after Rigetti confirmation.**  
The name is the cleanest A-share hardware realizer, but it also carries the heaviest OpEx and energy-disclosure sensitivity from the prior utility and energy cards. The right pre-confirmation move is not to abandon it; it is to make the final 3 pp conditional on US order evidence.

**002281 at 32% before confirmation, 34% after QBTS confirmation.**  
002281 remains the optical and "picks-and-shovels" leg. Its event risk is less about its own electricity load and more about becoming the liquid A-share momentum expression for US quantum. The last 2 pp should wait for QBTS because D-Wave's May 12 timing is the real second catalyst for May 13.

**688489 at 20%.**  
Keep it unchanged. It is the cleaner PQC/security exposure and helps lower the basket's dependence on cryogenic or photonic hardware economics. Reducing it would increase, not reduce, concentration in the 688027/002281 tail.

**603019 at 7%.**  
Keep as infrastructure beta, not a core realizer. Do not fund re-risking by increasing this line; its direct quantum revenue purity was already weaker in card 02.

**Utility overlay at 600900 3% / 600011 2% / 600886 2%.**  
This is the final hedge. Card 05 established that a **6.5-7.5%** utility overlay is sufficient to neutralize the basket's estimated electricity-price beta of about **-3.1% EBIT impact per +10% power-price move**. Card 06 improved factor hygiene by replacing **2% of 600900** with **600011**, cutting low-vol and size burden while preserving the electricity-beta hedge. Card 07 then proved the substitution is VaR-neutral, not a risk reducer. That is exactly why the overlay should stay at **7%**, not expand.

## Risk Budget

Use the CRO's optimized VaR as the base case for the full confirmation book:

| Metric | Full 93%/7% book |
|---|---:|
| Model daily volatility | 3.92% |
| One-day 95% VaR | 6.45% |
| Two-day 95% VaR | 9.12% |
| Marginal VaR concentration in 688027 + 002281 | ~89% |

For the waiting book, the cash reserve should mechanically reduce event exposure, but I would not overstate model precision. Treat the **88%/7%/5%** state as a drawdown-control setting, not as a new low-risk portfolio. The operational limits are more important than a recalculated decimal:

- Do not add to **002281** on a limit-up open.
- Do not lift **688027** above **32%** before clean order evidence.
- Do not lift the quantum sleeve above **93%** during the May 12/13 window.
- If the full book loses **-6.5%** intraday, cut **002281** by 4 pp and hold the utility overlay.
- If two-day loss reaches **-9.1%**, close the event book and revert to the failed-confirmation allocation.

## Bottom Line

The final answer is **conditional reduction before confirmation, full 93%/7% only after confirmation**. The strategy still supports the quantum order-realization thesis, but it denies the idea that the optimized utility hedge has made the growth concentration safe enough to run at maximum size before the US prints. The correct capstone is a staged book: **88%/7%/5% now, 91%/7%/2% after a clean Rigetti/QUBT leg, and 93%/7% only after QBTS confirms the order-realization axis**.

## Sources

- Internal whiteboard files and reconstructed snapshot: `card-02/report.en.md`, `card-04/report.en.md`, `card-06/report.en.md`, `card-07/report.en.md`, and the provided session brief snapshot for missing `session-brief.md`, `analyst-catalog.json`, `card-01`, `card-03`, and `card-05`.
- Quantum Computing Inc., "Quantum Computing Inc. to Host First Quarter 2026 Shareholder Call on Monday, May 11, 2026", published **2026-05-04**: https://quantumcomputinginc.com/news/press-releases/2026/quantum-computing-inc.-to-host-first-quarter-2026-shareholder-call-on-monday-may-11-2026
- Rigetti investor relations page, Q1 2026 results event listed for **2026-05-11 5:00 p.m. ET**: https://investors.rigetti.com/
- Rigetti Q4/FY2025 release, published **2026-03-04**, including Novera purchase-order and C-DAC order context: https://investors.rigetti.com/news-releases/news-release-details/rigetti-computing-reports-fourth-quarter-and-full-year-2025
- D-Wave, "D-Wave Quantum to Report First Quarter Fiscal Year 2026 Financial Results on May 12, 2026", published **2026-04-23**: https://www.dwavequantum.com/company/newsroom/press-release/d-wave-to-report-first-quarter-fiscal-year-2026-financial-results/
- D-Wave Q4/FY2025 release, published **2026-02-26**, including January/Q1-to-date bookings context: https://ir.dwavequantum.com/news/news-details/2026/D-Wave-Reports-Fourth-Quarter-and-Year-End-2025-Results/default.aspx
- StockAnalysis market-history pages used in card 07 for risk-model snapshot references: https://stockanalysis.com/quote/sha/600900/history/, https://stockanalysis.com/quote/sha/600011/history/, https://stockanalysis.com/quote/sha/600886/history/, https://stockanalysis.com/quote/sha/688027/history/, https://stockanalysis.com/quote/she/002281/history/, https://stockanalysis.com/quote/sha/688489/history/, https://stockanalysis.com/quote/sha/603019/history/, https://stockanalysis.com/stocks/rgti/history/, https://stockanalysis.com/stocks/qbts/history/, https://stockanalysis.com/stocks/qubt/history/.

---
**Chief Strategist**  
Work-date: **2026-05-11**  
Footer date: **2026-05-11**
