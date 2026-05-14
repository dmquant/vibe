---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review — A-Share Strategy Weekly Report (2026-04-27 to 2026-04-30)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review — A-Share Strategy Weekly Report (2026-04-27 to 2026-04-30)

**Reviewer:** QA Manager
**Review Date:** 2026-05-03
**Steps Covered:** Step 01 (Research Plan), Step 02 (Research Draft), Step 03 (HTML Weekly Report)

> ⚠️ **Workspace Sync Note**: `03_weekly_report.html` was not synced to this node's workspace (Step 3 confirmed it was written at 50,823 bytes, but it does not appear in `ls` output). The HTML report is reviewed on the basis of the summary information disclosed in the Step 3 conversation context. All findings derived from that source are explicitly labeled "step context" rather than direct file read.

---

## 1. File Manifest

| Declared File | Exists in Workspace | Size | Note |
|---|---|---|---|
| `01_weekly_plan.md` | Yes | 3,672 bytes | Readable |
| `01_weekly_plan.en.md` | Yes | 3,931 bytes | Readable |
| `02_weekly_research.md` | Yes | 17,358 bytes | Readable |
| `02_weekly_research.en.md` | Yes | 20,701 bytes | Readable |
| `03_weekly_report.html` | **No** | Declared 50,823 bytes | Not synced; reviewed from step context |
| `sw_week_returns.csv` | Yes (supplementary) | 1,539 bytes | SW industry returns source; consistent with research tables |

**Conclusion:** 1 of 5 declared files (`03_weekly_report.html`) is absent from the workspace — partial file gap.

---

## 2. Cross-Step Consistency

Six key data points were spot-checked across steps.

### Check 1: Manufacturing PMI (April 2026)

| Source | Cited Value | Threshold Read |
|---|---|---|
| `02_weekly_research.md`, Question 1 | **50.3** | Expansion (second consecutive month) |
| `03_weekly_report.html` (step context) | **49.8** | Below threshold — "bust" |

**Result: ⚠️ Critical contradiction.** The HTML report characterizes April manufacturing PMI as "falling below the boom-bust line (49.8)," directly contradicting the research draft's core figure of 50.3 (expansion). This error fundamentally reverses the macro narrative: the research stages a "second month of expansion" story, while the HTML stages a "manufacturing contraction" story — two conclusions with opposite investment implications.

### Check 2: Computer Sector Q1 Net Profit Growth (YoY)

| Source | Cited Value |
|---|---|
| `02_weekly_research.md`, Question 3 | **+99.49%** |
| `03_weekly_report.html` (step context) | **+38.5%** |

**Result: ⚠️ Critical contradiction.** 99.49% vs. 38.5% is nearly a 2× gap that severely understates the strength of the EPS inflection for the computer sector and undermines the core thesis that AI compute earnings have materially landed.

### Check 3: SW Real Estate Weekly Return (801180.SI)

| Source | Cited Value | Level Change |
|---|---|---|
| `02_weekly_research.md`, Chart 1 | **+3.85%** | 2,093.30 → 2,173.89 |
| `sw_week_returns.csv` | **+3.85%** | 2,093.30 → 2,173.89 |

**Result: ✅ Consistent.** Research draft and source data match exactly.

### Check 4: Building Materials Weekly Return (801710.SI)

| Source | Cited Value | Level Change |
|---|---|---|
| `02_weekly_research.md`, Chart 1 | **+2.58%** | 6,242.43 → 6,403.33 |
| `sw_week_returns.csv` | **+2.58%** | 6,242.43 → 6,403.33 |

**Result: ✅ Consistent.** Values match exactly; these figures were correctly used in the policy analysis section to support the property-chain repair narrative.

### Check 5: STAR 50 PE Percentile vs. Weekly Return

| Metric | Value | Source |
|---|---|---|
| STAR 50 weekly return | **+8.08%** | `02_weekly_research.md`, Priority Conclusions |
| STAR 50 PE percentile | **72.62%** | `02_weekly_research.md`, Chart 4 |
| STAR 50 closing level (2026-04-30) | **1,571.07** | `02_weekly_research.md`, Chart 4 |

**Result: ✅ Internally consistent.** The +8.08% gain alongside an elevated 72.62% PE percentile are presented together, and the research draft's "declining short-term risk/reward for chasing" judgment follows logically from these figures.

### Check 6: Margin Balance Change

| Metric | Start | Latest Available | Change |
|---|---|---|---|
| SSE margin balance | RMB 1,377.537 bn | RMB 1,383.829 bn (04-30) | **+RMB 6.292 bn** |
| SZSE margin balance | RMB 1,326.788 bn | RMB 1,332.283 bn (04-29) | **+RMB 5.495 bn** |
| Comparable total | — | — | **+RMB 11.787 bn** |

**Result: ✅ Arithmetic verified.** 6.292 + 5.495 = 11.787, matching the narrative text.

---

## 3. Narrative Coherence

### Plan Questions → Research Answers Mapping

| Plan Question | Answered | Research Conclusion | Assessment |
|---|---|---|---|
| Q1 PMI: Endogenous vs. infrastructure-led | ✅ Yes | PMI 50.3 in expansion but new orders fell 1.0 pt MoM; services/construction both below 50 — "mild, uneven recovery" | Thorough |
| Q2 Policy tone: Property "housing-land integration" surprise? | ✅ Yes | "Strive to stabilize + urban renewal," no "housing-land integration," floor-setting not new stimulus | Thorough |
| Q3 Earnings: Which sectors show EPS inflection? | ✅ Yes | Computers +99.49%, nonferrous metals +80%+, electronics ~+75%, defense +70%+; agriculture swung to a loss | Thorough |
| Q4 Flows: Did pre-holiday volume signal risk-off? | ✅ Yes | Turnover did not contract; margin +RMB 11.787 bn; overall risk appetite normal | Thorough |
| Q5 Valuation: CSI 300/CSI 500 historical percentiles | ✅ Yes | CSI 300 PE pct 43.19% (neutral), CSI 500 61.07% (neutral to high) | Thorough |

**Conclusion:** All 5 plan questions were fully answered in the research draft. No orphaned questions; no unanswered items.

### Research Conclusions → Investment Strategy Flow

- "Policy support + earnings-validated growth" research framing maps to "growth leadership, dividend base" strategy ✅
- Property chain: "valuation repair but not a medium-term main line" in research maps to "tactical only" in strategy ✅
- STAR 50 elevated valuation (72.62%) maps to "prune unverified growth, keep validated names" strategy ✅

### Data Substitution Transparency

| Original Planned Visualization | Actual Delivery | Reason Stated |
|---|---|---|
| Northbound cumulative net inflow chart | Replaced with northbound turnover + share | Yes — public interface returned blank for daily net buying |
| Analyst earnings upgrade/downgrade Top 5 | Replaced with Q1 reported profit growth by sector | Yes — no complete consensus revision matrix available |

**Conclusion:** Both substitutions are disclosed and explained, maintaining transparency. Whether the HTML report carries equivalent disclosure within its body text cannot be confirmed without direct file access.

### Potential Logic Gaps

- **Nonferrous metals contradiction:** The strategy recommends nonferrous metals as the "resource-cycle broadening" trade, yet the sector's weekly return was only **+0.15%** (21st out of 31). The justification rests on Q1 profit growth (+80%+), but the price/earnings divergence is not explicitly addressed in the strategy section.
- **Computer price/earnings divergence:** Computer sector weekly return was **-0.63%** (bottom tier), against +99.49% Q1 earnings growth. The "high earnings, falling price" dynamic is not explained in the research draft. Whether the HTML report addresses this is unknown.

---

## 4. Editorial Quality

> Recommendations are based on content described in the Step 3 conversation context and structural issues inferred from the research draft.

**Recommendation 1 (High priority): Correct the PMI headline**
The HTML report describes manufacturing PMI as "49.8, falling below the boom-bust line." This must be corrected to "50.3, staying in the expansion zone for a second consecutive month," with corresponding changes to the macro section narrative shifting from "manufacturing contraction" to "expansion, albeit uneven."

**Recommendation 2 (High priority): Correct the computer earnings figure**
"+38.5%" must be corrected to "+99.49%" (attributable net profit, YoY). The current figure nearly halves the actual earnings beat and substantially weakens the AI compute earnings validation story.

**Recommendation 3 (Medium priority): Make data substitution notes prominent within the report**
Both the northbound net buying absence and the earnings-revision-matrix absence should be flagged directly in the HTML report near each chart, not only in the research draft's caveats. Fund managers reading the report will otherwise misread turnover data as directional flow data.

**Recommendation 4 (Low priority): Explain the nonferrous metals price/earnings divergence**
In the sector allocation section, add one sentence acknowledging that nonferrous metals rose only +0.15% this week despite a +80%+ Q1 earnings beat, and attribute the lag to sector rotation toward technology ahead of the holiday, to prevent confusion when PMs compare the recommendation against recent price action.

---

## 5. Recommended Revisions

Prioritized revisions that should be applied before this report is presented to a PM:

- **[High] Correct manufacturing PMI in HTML report**: Change from "49.8 / below threshold" to "50.3 / second month of expansion." Revise the macro narrative from contraction-framing to expansion-but-uneven-framing throughout the HTML.

- **[High] Correct computer sector Q1 earnings in HTML report**: Change "+38.5%" to "+99.49%." Verify no other sector earnings figures were affected by the same reconstruction error.

- **[High] Fix workspace sync for Step 03 → Step 04**: The deployment environment must ensure that files written by Step 03 are visible to the Step 04 (QA) node before the QA step begins. The current sync failure prevented direct review of HTML layout, chart labeling, and structural elements.

- **[Medium] Embed data substitution disclosures in the HTML body**: Add chart-level footnotes indicating (a) northbound net buying is unavailable — turnover is used as a proxy, and (b) analyst consensus revision matrix is unavailable — Q1 reported profit growth is used instead.

- **[Low] Add price/earnings divergence explanation for computers and nonferrous metals**: In the sector commentary, note that weekly price underperformance does not negate the earnings inflection, and explain the likely driver (rotation, holiday effect, or valuation ceiling concern).

---

## 6. Overall Rating

**needs-revision**

The research draft (Step 02) is solid: all five core questions are answered, figures are internally consistent, data substitutions are transparently disclosed, and the logic chain from macro to strategy is coherent. However, the HTML weekly report (Step 03) contains two critical numeric errors — manufacturing PMI (49.8 vs. 50.3) and computer earnings growth (+38.5% vs. +99.49%) — both traceable to Step 03 being forced to reconstruct upstream data from conversation context when source files were absent from its workspace node. Once these two errors are corrected and the workspace sync issue is resolved, this week's package is suitable for PM distribution.

---

## Coordination Requests

```json
{"follow_ups":[
  {
    "to":"ashare-strategist",
    "subject":"Strategy framework re-check after PMI correction",
    "question":"The HTML strategy report incorrectly recorded April manufacturing PMI as 49.8 (below the boom-bust line); the correct figure is 50.3 (expansion for a second consecutive month). Please confirm: (1) whether the 'growth leadership, dividend base' allocation framework remains intact under the correct PMI of 50.3; (2) whether the post-holiday 'Red May' turnover threshold of RMB 2.5 trillion and the growth beta sizing call need any adjustment given that manufacturing is confirmed in expansion rather than contraction; (3) with nonferrous metals posting only +0.15% weekly return despite Q1 profits above +80% YoY, does the overweight recommendation on nonferrous metals still hold under the corrected macro backdrop. Please include a 1–2 week post-holiday sector priority ranking incorporating the STAR 50 valuation context (PE percentile 72.62%).",
    "priority":"high"
  },
  {
    "to":"tmt-analyst",
    "subject":"Computer and STAR 50 valuation digestion capacity",
    "question":"Q1 reports show the computer sector (SW 801750) posted attributable net profit growth of +99.49% YoY and electronics near +75%, yet the computer index fell -0.63% this week (29th out of 31 SW sectors). STAR 50 rose 8.08% and its PE percentile is now 72.62% (PB 69.76%). Please assess: (1) what is the current forward PE for STAR 50 and computers based on full-year 2026 Wind/Choice consensus, and whether analysts have already revised up FY2026 estimates post-Q1; (2) whether the computer sector's price decline despite a near-100% earnings beat reflects a 'sell the news' dynamic, a valuation ceiling, or simply holiday-related rotation; (3) whether post-holiday turnover above RMB 2.5 trillion creates sufficient conditions for a second round of EPS-driven multiple expansion in STAR 50, or whether the greater risk is a high-volume reversal.",
    "priority":"high"
  },
  {
    "to":"china-macro",
    "subject":"Manufacturing-services PMI divergence implications",
    "question":"April 2026 data show manufacturing PMI at 50.3 (expansion) while the non-manufacturing business activity index fell to 49.4 (contraction), with construction at 48.0 and services at 49.6; non-manufacturing new orders were only 44.3. Please assess: (1) whether the services PMI below 50 reflects a pre-May Day seasonal distortion that should partially reverse in May data, or genuine weakness in consumer-facing demand; (2) whether construction PMI remaining in the 48-49 range despite the Politburo's urban renewal signal suggests a material implementation lag, and whether fiscal funding deployment can realistically shift the construction reading in Q2; (3) how this manufacturing-expansion / services-contraction divergence should modify the 'broad-based recovery' macro narrative and what it implies for May CPI and PPI trajectories.",
    "priority":"normal"
  }
]}
```
