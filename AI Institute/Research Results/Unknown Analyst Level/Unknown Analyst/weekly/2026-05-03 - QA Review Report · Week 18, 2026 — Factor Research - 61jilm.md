---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report · Week 18, 2026 — Factor Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report · Week 18, 2026 — Factor Research Package

**Reviewer:** QA Manager  
**Review Date:** 2026-05-04  
**Files Covered:** 01_weekly_plan.md / .en.md · 02_weekly_research.md / .en.md · 03_weekly_report.html / .md

---

## 1. File Manifest

| Declared File | Present in Workspace | Size | Notes |
|---|---|---|---|
| `01_weekly_plan.md` | Yes | 3,928 B | OK |
| `01_weekly_plan.en.md` | Yes | 3,859 B | OK |
| `02_weekly_research.md` | Yes | 19,457 B | OK |
| `02_weekly_research.en.md` | Yes | 21,890 B | OK |
| `03_weekly_report.html` | Yes | 34,365 B | OK |
| `03_weekly_report.md` | Yes | 12,500 B | OK (extra output) |
| `factor_weekly_returns.csv` | Yes | 1,417 B | OK |
| `factor_crowding.csv` | Yes | 1,175 B | OK |
| `earnings_surprise_sample.csv` | Yes | 527 B | OK |
| `style_rotation_4w.csv` | Yes | 4,187 B | OK |

All declared files are present with non-trivial sizes. No missing files.

---

## 2. Cross-Step Consistency

The following six data points were spot-checked across the raw CSV files, 02_weekly_research.md, and 03_weekly_report.md:

| Check Point | CSV Raw Value | 02 Research | 03 Report | Verdict |
|---|---|---|---|---|
| `VLUE` weekly return | 3.6839% | 3.684% | +3.684% | ✅ Consistent |
| `QUAL` excess vs `SPY` | -1.0580 pct | -1.058 pct | -1.058pct | ✅ Consistent |
| `300成长` volume percentile | 94.0% | 94.0% | 94.0% | ✅ Consistent |
| `MU` volume percentile | 84.6% | 84.6% | 84.6% | ✅ Consistent |
| Kweichow Moutai 2-day Alpha | -3.4335 pct | -3.433 pct | -3.433pct | ✅ Consistent |
| China Merchants Bank 2-day Alpha | -4.3905 pct | -4.390 pct | -4.390pct | ✅ Consistent |

**⚠️ One unit display error identified (medium severity):**

The CSV field `q1_net_profit_cny_bn` stores values in billions of CNY:
- Kweichow Moutai: 27.243 bn CNY = **272.43亿元 (CNY 27.243B)**
- China Merchants Bank: 37.852 bn CNY = **378.52亿元 (CNY 37.852B)**

The **narrative prose** in both 02_weekly_research.md and 03_weekly_report.md correctly cites 272.43亿元 and 378.52亿元. However, the **data tables** (Table 4 in both files) display the raw CSV values as "27.243亿元" and "37.852亿元" — a **10× unit error**. The table header uses "亿元" as the unit label but the stored values are in billions (10× larger). This error must be corrected before PM presentation.

---

## 3. Narrative Coherence

### Mapping: Planner Questions → Research Answers → Visualization Conclusions

| 01_plan Question | 02_research Answer | 03_report Presentation | Status |
|---|---|---|---|
| Q1: Quality factor premium | Quality underperformed in both markets; Moutai/CMB both negative 2-day Alpha | Section III Q1 + Table 4 | ✅ Fully covered |
| Q2: Value vs Growth balance | VLUE outperformed IVW by +3.052pct; CN 300成长 outperformed 300价值 | Section III Q2 + Table 1 | ✅ Fully covered |
| Q3: Momentum crash warning | Global AI/semiconductor below 90% threshold; CN 300成长 at 94th pct | Section III Q3 + Table 3 | ✅ Fully covered |
| Q4: Dividend factor stability | SCHD resilient (+1.176pct vs SPY); 300红利 lagged -0.847pct vs 沪深300 | Section III Q4 + Table 3 | ✅ Fully covered |

### Planned Data Requirements vs. Actual Availability

| Planned Data Source | Actual Outcome |
|---|---|
| MSCI World Factor Indices | ⚠️ Substituted with US ETF proxies (QUAL/VLUE/MTUM/USMV); limitation disclosed |
| Northbound (Stock Connect) net flows | ⚠️ Unavailable — exchange withholds data when daily quota utilization >30%; disclosed |
| Wind/FactSet consensus estimates | ⚠️ Unavailable; earnings surprise proxied by 2-day Alpha; disclosed |
| FRED macro series (DGS10/DGS2/PCEPILFE) | ✅ Obtained and cited with specific values |
| Individual A-share earnings sample | ✅ Kweichow Moutai and China Merchants Bank both covered |

All three data gaps are explicitly disclosed as limitations. No orphaned planner questions, no unsupported conclusions.

---

## 4. Editorial Quality

The following are concrete edit suggestions for 03_weekly_report.md (the visualization-stage deliverable):

1. **Fix the Table 4 unit error first (blocking).** The Q1 net profit column must be corrected: "27.243亿元" → "272.43亿元" for Moutai; "37.852亿元" → "378.52亿元" for CMB. Narrative prose is already correct; only the table cells need updating. This is the single highest-priority editorial fix.

2. **Table 3 crowding-heat labels lack a threshold legend.** The "拥挤热度" column uses four descriptive tiers (警戒/偏热/中性/偏冷) without showing the percentile cut-offs in the table itself. Add a brief footnote below Table 3 (e.g., "≥90% = 警戒; 70–89% = 偏热; 40–69% = 中性; <40% = 偏冷") so readers can verify the classification without searching the body text.

3. **Risk-signal emoji have platform dependency.** Section V uses 🔴🟡🟢 traffic-light symbols, which render cleanly in HTML but may not display in PDF exports or plain-text environments. Retain them in the HTML version; in the .md version, add text fallbacks such as **[RED]** / **[YELLOW]** / **[GREEN]** alongside the emoji.

4. **Table 2 column header inconsistency.** The current-week column is labeled "W0（本周）" while prior-week columns use "W-3 / W-2 / W-1". Standardize to "W-0" (or keep "W0") and add a table caption stating the actual date window for W0 (2026-04-24 to 2026-04-30/05-01), so readers can anchor the rolling window without referring to the body text.

---

## 5. Recommended Revisions

Prioritized list for pre-PM-presentation completion:

- **[P1 · Must fix]** Correct the Q1 net profit unit display in Table 4 of both 02_weekly_research.md and 03_weekly_report.md: "27.243亿元" → "272.43亿元" (Moutai); "37.852亿元" → "378.52亿元" (CMB). Narrative text is already correct.
- **[P2 · Recommended]** Add a percentile threshold legend below Table 3 (crowding heatmap) to make the 警戒/偏热/中性/偏冷 tier labels self-explanatory.
- **[P3 · Recommended]** Add plain-text fallback labels for the 🔴🟡🟢 risk-signal icons in the .md version to ensure cross-platform readability.
- **[P4 · Next iteration]** Rebuild the earnings surprise scatter using true consensus estimates (Wind/FactSet/Choice) when available, replacing the current 2-day Alpha proxy.
- **[P4 · Next iteration]** Once Stock Connect net flow data becomes available (quota utilization below 30% threshold), add a sector-level decomposition of northbound flows into the dividend/quality/growth factor discussion.

---

## 6. Overall Grade

**needs-revision**

The research package is structurally complete, logically coherent from plan through research to visualization, and numerically consistent across steps with one exception. The 10× unit display error in the earnings tables (272.43亿元 shown as 27.243亿元) is a credibility risk if the report is presented to a PM without correction. All other gaps — ETF proxies for MSCI indices, missing northbound flows, proxy-based earnings surprise — are appropriately disclosed. The P1 revision is the sole blocker; P2–P3 are low-effort quality improvements.

---

```json
{"follow_ups":[
  {"to":"china-macro","subject":"Macro transmission risk from April non-manufacturing PMI contraction (49.4)","question":"China's official non-manufacturing PMI came in at 49.4 for April 2026 (down 0.7pt vs March), falling into contraction territory. This week's factor report observed that 300红利 (CSI 300 Dividend) and 300价值 (CSI 300 Value) both underperformed the CSI 300 benchmark, consistent with weak domestic-demand catalysts. Please assess: (1) whether the April services/construction weakness is a one-month aberration or the start of a more persistent down-leg in domestic consumption; (2) what the macro transmission path looks like for cyclical value factors (consumer/real estate/banks) and dividend factors in A-shares over the next 4–8 weeks; and (3) whether any upcoming data releases (e.g., April CPI/PPI on 2026-05-08, Q1 GDP revision) could reverse the picture. Please respond before the next weekly factor report cycle.","priority":"high"},
  {"to":"ashare-strategist","subject":"Sector-level drivers of A-share 300成长 crowding at 94th volume percentile","question":"The weekly factor report recorded CSI 300 Growth (000918) weekly average turnover at the 94th percentile of the past 52 weeks (Z-score +1.431) — the only factor proxy to breach the 90% crowding threshold this week. The narrative identifies sci-tech, advanced packaging, and Cambricon-type names as the incremental flow drivers on the last pre-holiday trading day (2026-04-30, total A-share turnover CNY 2.74 trillion). Please evaluate: (1) historically, when CSI 300 Growth volume-crowding reaches this level, what is the typical drawdown profile in the 2–4 weeks following a holiday; (2) if post-holiday turnover contracts, which sectors or factor tilts (value, dividend, large-cap low-vol) are most likely to absorb rotation; (3) whether the domestic AI self-sufficiency / advanced semiconductor theme still has fundamental support at current valuations, or whether near-term price action is already ahead of earnings revisions. Please respond before the next weekly cycle opens.","priority":"high"}
]}
```
