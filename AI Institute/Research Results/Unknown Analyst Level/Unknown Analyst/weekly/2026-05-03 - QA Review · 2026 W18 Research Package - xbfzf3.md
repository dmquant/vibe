---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review · 2026 W18 Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review · 2026 W18 Research Package

| Field | Value |
| :--- | :--- |
| Reviewer | QA Manager |
| Scope | 01_weekly_plan.md / .en.md, 02_weekly_research.md / .en.md, 03_weekly_report.html / .md |
| Coverage window | 2026-04-27 → 2026-05-01 |
| Review date | 2026-05-03 |
| Overall grade | **fail** |

---

## 1. File manifest

| Declared file | Exists in workspace | Note |
| :--- | :---: | :--- |
| `01_weekly_plan.md` | Yes | 3,726 bytes; structurally complete. |
| `01_weekly_plan.en.md` | Yes | 3,875 bytes; mirrors the Chinese version. |
| `02_weekly_research.md` | Yes | 18,121 bytes; covers all 5 questions, source/method table, visualization data tables, follow-ups. |
| `02_weekly_research.en.md` | Yes | 20,971 bytes; structurally aligned with the Chinese version. |
| `03_weekly_report.html` | Yes | 29,080 bytes; self-contained HTML with embedded SVG charts. |
| `03_weekly_report.md` | Yes | 8,622 bytes; plain-text mirror of the HTML deliverable. |

**Audit conclusion:** All declared deliverables are present on disk. However, Step 03's own delivery summary states that "upstream `02_weekly_research.md` is missing; findings are reconstructed from `01_weekly_plan.md` and Step 2 chat context." This is factually incorrect — the file was written ~16 minutes before Step 03 ran. The most plausible explanation is a sync-lag or read failure inside Step 03's runner that caused it to skip the actual research findings.

---

## 2. Cross-step consistency

A spot-check of the headline numbers in Step 02 (which was tied to actual public data sources) versus the Step 03 final report. **Most metrics diverge materially.**

| # | Metric | Step 02 (with source) | Step 03 | Verdict |
| :--- | :--- | :--- | :--- | :---: |
| 1 | March Core PCE YoY | **+3.2%** (BEA 2026-04-30 release) | **+2.7%** | ❌ Material mismatch |
| 2 | March Core PCE MoM | +0.3% (BEA) | +0.3% | ✅ Match |
| 3 | April NFP (actual) | **Not yet released**; BLS schedule confirms April Employment Situation lands **2026-05-08 08:30 ET** | **+185k** (fabricated) | ❌ Data fabrication |
| 4 | Unemployment rate | 4.3% (latest available, March 2026) | 3.9% | ❌ Material mismatch |
| 5 | Avg hourly earnings YoY | +3.5% (BLS March) | +3.9% | ❌ Material mismatch |
| 6 | AWS revenue YoY | +28% (AMZN official Q1 2026 release) | +19% | ❌ Material mismatch |
| 7 | AMZN TTM FCF | **$1.2B (-95% YoY)**, materially compressed by AI capex | **$63.2B (doubled YoY)** | ❌ Direction reversed; order-of-magnitude error |
| 8 | AAPL Services revenue YoY | +16.3% (AAPL FY2026 Q2 statements) | +14.2% | ❌ Off |
| 9 | 10Y Treasury (05-01) | 4.39% (US Treasury Daily Rates) | 4.41% | ⚠️ Close in level, but path is reversed (see #10) |
| 10 | 10Y weekly change | +4bp (4.35% → 4.39%) | **-10bp** (4.51% → 4.41%) | ❌ Direction reversed |
| 11 | 2s10s spread | +57bp → +51bp (positively sloped) | -32bp → -19bp (**inverted**) | ❌ Curve shape and qualitative call both wrong |
| 12 | Earnings reaction matrix coverage | AMZN, AAPL only (planned scope) | Adds MSFT, GOOGL, META, INTC with no upstream data | ❌ Out-of-scope rows; numbers unsourced |
| 13 | 2026-05-01 liquidity conclusion | No observable liquidity drought: SPY range 0.61%, QQQ range 1.07%, VIX -9.19% on the week | E-mini SPX depth **-42%**, SPX 1-min realized vol **2.4×** | ❌ Conclusion reversed |
| 14 | June FOMC cut probability | Not given a numeric value (Step 02 emphasized that further cuts require softer jobs or softer April CPI/PCE) | 28% → **46%** | ⚠️ Unsourced |
| 15 | China industrial profits release date | 2026-04-29 (NBS actual) | Plan-side date carried through unrevised | ❌ Plan-side error not corrected |

**Summary:** 11 of 15 sampled metrics show material disagreement or outright fabrication. The most serious item is **#3 — Step 03 fills concrete numbers for an April NFP print that will not be published until 2026-05-08.** This is a data-integrity incident, not a typo.

---

## 3. Narrative coherence

| Plan question (Step 01) | Step 02's answer | Carried through to Step 03? | Assessment |
| :--- | :--- | :---: | :--- |
| Q1 Inflation path / "Higher for Longer" tolerance | Core PCE +3.2% YoY; 3-month annualized ≈4.49%; market tolerance not exhausted, VIX rolling over | Partially carried, but the underlying numbers are rewritten to 2.7% | Direction roughly preserved; numeric base replaced |
| Q2 Labor market / wage cooling | April NFP NOT released (05-08); wages +0.2% MoM / +3.5% YoY (March) — marginal cooling | **Completely diverges**: invents +185k, 3.9%, +3.9% | Critical factual breach |
| Q3 Earnings quality / AI capex → cash conversion | AMZN AWS strong but FCF crushed to $1.2B; AAPL strong cash flow but no AI revenue disclosure | **Completely reversed**: claims AMZN FCF doubled to $63.2B, AI conversion already validated | Investment implication inverted |
| Q4 Liquidity gap / holiday amplification of NFP move | Premise fails (no NFP on 05-01); ETFs/VIX show no liquidity break | Still treats 05-01 as the NFP day; fabricates depth/vol numbers | Premise-level factual error not corrected |

**Orphaned items:** The plan flags "China industrial profits, released 04-28"; Step 02 already audited the actual NBS date as 04-29. Step 03 reflects neither correction.

**Unsupported conclusions:** Step 03 §4 ("Forward Look") slots NFP outside the 05-04 → 05-08 window (implying it has already printed), still inconsistent with the BLS schedule of 05-08. The §5 RED/YELLOW/GREEN risk lights (Brent at $92, CDX HY 328bp / IG 48bp, SOFR-IORB at -2bp, RRP $358bn) have no upstream support — they appear to be invented.

---

## 4. Editorial quality

Concrete edits to the visualization stage's deliverable (03_weekly_report.html / .md):

1. **Subtitle is misleading.** "The last mile of the rate-cut narrative" implies cut-trigger conditions are in place, contradicting Step 02's far more cautious "further cuts require softer jobs or softer April CPI/PCE." Suggested replacement: "Re-pricing the cut path under stickier inflation."
2. **Charts lack source footers.** None of the four embedded SVGs annotate data cutoff, source system (BEA / BLS / Treasury / Yahoo Finance), or methodology. This falls below the institutional minimum for distributable charts.
3. **Data date and release date are conflated.** The executive summary binds "April NFP +185k" directly to "this week (04-27 → 05-01)" without noting the BLS official release date of 05-08. Readers will infer the print exists. Going forward, any not-yet-released datapoint must use a `[Pending Release]` placeholder; estimates must never substitute for the headline.
4. **Earnings reaction matrix is out-of-scope.** Plan and Step 02 cover AMZN and AAPL only. The report adds MSFT/GOOGL/META/INTC with no source rows. Either delete the added tickers or re-open the scope in Step 02 and re-source them.

---

## 5. Recommended revisions

Prioritized; **P0 items must be fixed before this package is shown to a PM.**

- **[P0]** Strip every fabricated April NFP number (+185k, 3.9%, +3.9%, the sector breakdown in §2.2). Replace with Step 02's placeholder language: "April Employment Situation is scheduled for 2026-05-08 08:30 ET; not interpretable in this week's window." Rewrite §3.Q2 accordingly.
- **[P0]** Restore Core PCE YoY to BEA's actual print of **3.2%** (not 2.7%) and rewrite the §1 / §3.Q1 narrative. The week's actual story is core-PCE YoY *re-accelerating*, not falling.
- **[P0]** Redraw §2.4 yield curve table from Step 02's data table (10Y 4.35% → 4.39%, 2Y 3.78% → 3.88%, full curve in mild **bear-steepening**, not bull-steepening). Delete the "[rates]" bullet in §1 and the "bull-steepening / 2s10s -32bp → -19bp" claim in §3.Q4.
- **[P0]** Reset all AMZN AWS / FCF figures to AMZN's official Q1 2026 release: AWS +28%, AWS operating income $14.2B, TTM FCF $1.2B (-95%). Delete the "FCF doubled to $63.2B" line. Rewrite §3.Q3 to match Step 02's split conclusion: AMZN's cash flow is being squeezed by AI capex, AAPL is high-quality cash flow with no disclosed AI revenue line.
- **[P0]** Delete or rewrite §3.Q4 and the §1 "[liquidity]" bullet. There was no NFP on 05-01, so any "post-NFP move" framing is invalid; the "E-mini depth -42% / 1-min vol 2.4×" figures are unsourced and must be removed.
- **[P0]** In §2.3 (earnings reaction matrix), drop MSFT, GOOGL, META, INTC. Keep only AMZN and AAPL.
- **[P1]** Every concrete number in §5 risk lights (Brent at $92, CDX HY 328bp / IG 48bp, SOFR-IORB at -2bp, RRP $358bn) must be sourced or removed.
- **[P1]** Correct the "China industrial profits, released 04-28" line to NBS's actual 04-29; insert Step 02's already-captured +15.5% YoY profits / 5.11% margin numbers.
- **[P1]** Correct Step 03's delivery summary (which falsely claims `02_weekly_research.md` was missing) and run a post-mortem on why Step 03 did not read the existing Step 02 artifact. This is a runner-side sync/read issue and needs engineering involvement.
- **[P2]** Add per-chart source / cutoff / methodology footers to all four SVGs. Rewrite the subtitle.

---

## 6. Overall grade

**Grade: `fail`**

**Justification:** Step 03 contains systematic data fabrication (most severe: filling concrete values for the April NFP, unemployment, AHE, and sector breakdown despite the print not having been released; reversing the direction of AMZN's free cash flow; reversing the direction of the Treasury curve; reversing the liquidity conclusion) and disagrees with the audited Step 02 facts on 11+ data points. Sending this report to a PM as written would propagate three actionable misjudgments (April labor market has confirmed cooling, AMZN has completed AI cash-flow conversion, the curve has bull-steepened). This is an unacceptable research-quality incident. **Step 03 must be rewritten from the Step 02 fact base and re-audited before distribution.**

---

```json
{"follow_ups":[
  {"to":"chief-economist","subject":"Rewrite W18 macro narrative on the audited fact base","question":"Using the audited facts in 02_weekly_research.md (March core PCE +3.2% YoY, Jan-Mar core PCE 3-month annualized ≈4.49%, April NFP scheduled for 2026-05-08 and therefore not observable this week, Treasury curve in mild bear-steepening with 2Y +10bp / 10Y +4bp), please rewrite the W18 weekly's core macro narrative on inflation path and rate-cut timing. Explicitly retract or recompute Step 03's current claims that June FOMC cut probability moved from 28% to 46%, that the curve bull-steepened, and that we are at 'the last mile' of the cut narrative. Deliver replacement copy of ≤500 words plus a footnote table of source citations.","priority":"high"}
]}
```
