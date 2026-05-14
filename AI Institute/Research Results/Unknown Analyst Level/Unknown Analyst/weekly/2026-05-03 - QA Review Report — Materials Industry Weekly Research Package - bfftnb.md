---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report — Materials Industry Weekly Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report — Materials Industry Weekly Research Package
**Coverage period:** 2026-04-27 to 2026-05-01  
**Reviewer:** QA Manager  
**Review date:** 2026-05-04  

---

## 1. File Manifest

| Declared file | Present in workspace | Size (bytes) | Note |
|---|:---:|---:|---|
| `01_weekly_plan.md` | Yes | 4,265 | Chinese research plan; complete |
| `01_weekly_plan.en.md` | Yes | 4,510 | English research plan; complete |
| `02_weekly_research.md` | Yes | 22,929 | Chinese research draft; complete |
| `02_weekly_research.en.md` | Yes | 25,895 | English research draft; complete |
| `03_weekly_report.html` | Yes | 38,172 | Visualization report with 4 inline SVG charts |
| `03_weekly_report.md` | Yes | 11,994 | Markdown companion of the report; complete |

**Conclusion:** All 6 declared deliverable files are present and exceed 200 bytes. No gaps.

---

## 2. Cross-Step Consistency

Six numerical or date claims that appear in more than one step were spot-checked.

| Metric | Plan stage (01) | Research stage (02) | Report stage (03) | Consistent? |
|---|---|---|---|:---:|
| LME Copper Cash (04-30) | No specific price given | 13,015.50 USD/t, -1.62% | 13,015.50 USD/t, -1.62% | ✓ |
| LME Copper inventory (04-30) | No specific figure given | 399,725 t, +1.82% | 399,725 t, +1.82% | ✓ |
| Mysteel 5-product social inventory (04-30) | No absolute value; projected decline **-4.2%** | 20.31 Mt, **-2.9%** (–601,100 t) | 20.31 Mt, -2.9% | ⚠️ Destocking rate: plan -4.2% vs. actual -2.9%, ~31% deviation; research and report are internally consistent but diverge from the plan |
| SMM battery-grade lithium carbonate | "**breaks below 100,000 RMB/t**" | **177,000 RMB/t**, +1.43% | 177,000 RMB/t, +1.43% | ⚠️ Plan premise severely incorrect: actual price was ~1.77× the assumed threshold; research and report are internally consistent and have corrected the narrative |
| WTI crude (04-28) | "rises to **$88/bbl**" | 04-24 close **94.40**, 04-30 close **105.07** USD/bbl | WTI 105.07 USD/bbl, +11.30% | ⚠️ Plan estimate of $88/bbl falls below even the week-opening price (94.40), suggesting the plan was drafted using earlier data; research and report are internally consistent |
| Equipment renewal – 2nd tranche (04-30) | Not pre-estimated | 91.5 bn RMB, 6,700+ projects, ¥380 bn total investment | 91.5 bn RMB, same figures | ✓ |
| PE-oil cost-proxy spread | No figure given | 04-17: 4,584.55 RMB/t → 04-30: 3,458.42 RMB/t | 4,584.55 → 3,458.42 RMB/t | ✓ |

**Summary:** The research and report stages are fully internally consistent on all key figures. The plan stage contains three material deviations (steel destocking rate, lithium price level, WTI crude price) — all three were identified and corrected by the research analyst, and the report's narrative reflects those corrections.

---

## 3. Narrative Coherence

### 3.1 Plan question → research answer → report conclusion mapping

| Question # | Topic | Research answered? | Report conclusion present? | Notes |
|:---:|---|:---:|:---:|---|
| Q1 | Will copper supply tightness persist through Q2? | Yes | Yes | Conclusion: tightness persists at the mine/concentrate level, not in LME registered stocks; logic chain complete |
| Q2 | How solid is the steel destocking? | Yes | Yes | Conclusion: quantity confirmed, price response weak, pre-holiday rush; logic chain complete |
| Q3 | Is the lithium washout at midgame? | Yes | Yes | Research corrected "breaks 100k" premise to "high-plateau consolidation"; logic chain complete, but premise correction should be more prominent |
| Q4 | How does the chemicals sector escape the margin squeeze? | Yes | Yes | Conclusion: supply-constrained/by-product-driven products (sulfuric acid, aromatics) pass through cost; full cracking-spread data provided |
| Q5 | Progress on large-scale equipment renewal policy? | Yes | Yes | Conclusion: capital deployment underway; mid-term tailwind for special steel, electrical steel, heavy plate; logic chain complete |

### 3.2 Orphaned claims or unanswered items

1. **"LME copper at a two-year high" not verified (orphaned claim):** Plan §1 labels 04-27 as a "two-year high" for LME copper, but neither the research nor the report explicitly confirms or refutes whether 13,212.00 USD/t is indeed a 24-month peak. If it is not, the plan headline is misleading; the omission should be closed.
2. **Guangzhou Futures Exchange (GFEX) warrant count not covered:** The plan's data requirements listed GFEX lithium warrants, but these were skipped due to paywall access, with no figure appearing in either the research or the report. The limitation is noted in the research draft but the gap is not flagged in the report itself.
3. **Five-year seasonal steel inventory curve silently downgraded:** The plan called for a 2026-vs-five-year seasonal comparison. The research correctly notes that public data cannot support this, substituting two data points (04-23 and 04-30). The HTML chart renders as a straight line between two dots, with a disclaimer buried in small-font caption text — readers skimming the chart may mistake it for a genuine trend curve.

---

## 4. Editorial Quality

The following four concrete suggestions apply to `03_weekly_report.html` / `03_weekly_report.md`.

**4.1 Executive summary buries the biggest correction**  
The executive summary currently contains the phrase "碳酸锂并未如计划假设跌破 100,000 元/吨" ("lithium did not break below the plan's assumed 100,000 RMB/t threshold"). PM-level readers with no visibility into the research plan will find this reference to a "planned assumption" confusing. Recommend rewriting as a direct statement: "Battery-grade lithium carbonate held above 177,000 RMB/t; the 'breaks 100k' thesis had no support in current market data."

**4.2 Chart 2 (steel inventory) needs a front-loaded demotion label**  
The chart renders as a single downward-sloping line between two estimated/observed data points (04-23 and 04-30). The disclaimer that this is not a five-year seasonal comparison is present, but in a small font below the chart. The chart title should read explicitly: "Steel Social Inventory — Spot Snapshot (2-point, not a seasonal curve)" to prevent misinterpretation at a glance.

**4.3 Chart 4 (petrochemical cracking spread) conflates two time windows**  
The crude-oil cost series runs daily from 04-17 to 04-30 while the LLDPE/PP product-price series is a flat line derived from the NBS 10-day average for 04-11 to 04-20. Visually, this creates the impression that product prices are tracking daily moves. Recommend adding a prominent annotation on the product-price line: "LLDPE/PP: NBS 10-day average (04-11–04-20 only; not daily)."

**4.4 Report headline theme diverges from plan without acknowledgment**  
The plan established the week's theme as "铜强、钢稳、锂弱" (copper strong, steel steady, lithium weak). The report correctly updates this to "铜震荡、钢去库、锂高位、油挤压" (copper consolidates, steel destocks, lithium at highs, oil squeezes margins). This is a data-driven improvement, but the report never explicitly tells the reader that the original framing required revision. A single bridging sentence at the top of Section I would close this gap: e.g., "This week's data required three material revisions to the plan's starting assumptions; see the corrections embedded in each section below."

---

## 5. Recommended Revisions

Listed in priority order (high → low):

- **[High] Make the lithium plan-premise failure explicit and prominent in the final HTML.** The current text buries it mid-sentence in the executive summary and in a footnote of the risk table. Add a dedicated "Plan Assumptions Corrected" callout box near the top of the report (or a red-highlight row in the risk table) that reads: "Lithium carbonate: plan assumed <100k RMB/t; actual SMM spot 177,000 RMB/t. All lithium conclusions reflect corrected data." This is critical for investor communication and post-mortem traceability.
- **[High] Front-load the demotion notice on Chart 2.** Move the "not a seasonal comparison curve" disclaimer from caption text to the chart title, as described in §4.2. Readers who only scan charts may misread a two-point line as a trend.
- **[Medium] Annotate the WTI plan-vs-actual gap in the chemicals section.** The research corrected the WTI figure but did not explicitly state that the plan's $88/bbl estimate fell $6–$17/bbl below actual readings for the entire week. Adding one line — "Crude oil impact was materially stronger than the plan estimated ($88 vs. $94–$105 actual range)" — helps readers calibrate the plan's oil-price forecasting accuracy.
- **[Medium] Fix Chart 4 product-price timestamp labeling,** as described in §4.3.
- **[Low] Close out the "two-year copper high" claim.** Verify whether 13,212.00 USD/t (04-27) constituted a 24-month high. Add one sentence to the copper section confirming or qualifying the plan's "two-year high" description. This is a minor precision issue but affects the credibility of plan-stage framing.

---

## 6. Overall Grade

**`needs-revision`**

The research package demonstrates high factual accuracy and self-correction discipline: the research analyst proactively identified and corrected three significant plan-stage assumption failures (lithium price level, steel destocking rate, WTI crude price), and the report correctly absorbed those corrections. Deductions are concentrated in two specific presentation issues — the lithium premise failure is not prominently flagged in the final HTML, and the steel inventory chart is effectively a two-dot line that could be mistaken for a seasonal trend chart. Both issues risk misjudgment by readers who skim rather than read in full. The package should not be presented to a PM until these two high-priority items are addressed.

---

```json
{"follow_ups":[
  {
    "to": "china-macro",
    "subject": "April PMI 50.3 and macro transmission to materials pricing",
    "question": "This week's materials report shows that steel destocking confirmed (-2.9% Mysteel 132-city, 7th consecutive week) but price response was weak (rebar NBS +0.30% only), while April official manufacturing PMI printed 50.3 (slightly lower than March). Please assess: historically, when PMI consolidates in the 50–51 range, how many quarters does it typically take for ferrous-metals price elasticity to recover? Do the current PMI production and new-orders sub-indices support an equity-valuation recovery in black metals during Q2 2026? Please cite publicly available data sources.",
    "priority": "high"
  },
  {
    "to": "global-macro",
    "subject": "WTI +11.30% single-week surge — drivers and persistence",
    "question": "This week's materials report records WTI crude rising +11.30% in a single week (04-24 to 04-30: $94.40 → $105.07/bbl, intraday high $110.92). Please assess: what are the primary drivers of this move — geopolitical risk premium vs. fundamental tightening? If WTI holds above $105/bbl for more than three weeks, what is the order-of-magnitude valuation pressure on the Chinese olefins cracking chain (PE/PP margins)? Please provide your crude-price path view and uncertainty range.",
    "priority": "high"
  }
]}
```
