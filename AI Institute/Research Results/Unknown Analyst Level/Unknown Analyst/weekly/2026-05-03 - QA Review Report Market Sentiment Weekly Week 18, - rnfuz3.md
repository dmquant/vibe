---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report | Market Sentiment Weekly | Week 18, 2026

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report | Market Sentiment Weekly | Week 18, 2026

- **Reviewer**: QA Manager
- **Review date**: 2026-05-03
- **Steps covered**: Step 01 Research Plan → Step 02 Sentiment Research → Step 03 Visualization Report (HTML + MD)

---

## 1. File Manifest

| Declared file | Present in workspace | Size (bytes) | Note |
|---|:---:|---:|---|
| `01_weekly_plan.md` | Yes | 3,173 | Complete; four research questions and data needs present |
| `01_weekly_plan.en.md` | Yes | 3,500 | One-to-one correspondence with the Chinese version; fluent English |
| `02_weekly_research.md` | Yes | 12,631 | All four questions answered; sources annotated |
| `02_weekly_research.en.md` | Yes | 14,268 | Numerically and analytically consistent with Chinese version |
| `03_weekly_report.html` | Yes | 36,608 | Self-contained HTML with embedded SVG charts; opens standalone |
| `03_weekly_report.md` | Yes | 10,504 | Plain-text version; structure complete, data matches HTML |

**Verdict**: All six declared files are present and non-trivial. No missing deliverables.

---

## 2. Cross-Step Numeric Consistency

Eight key figures spot-checked across all three steps:

| Value / Date / Ticker | Step 02 | Step 03 MD | Step 03 HTML | Status |
|---|---:|---:|---:|:---:|
| S&P 500 weekly close | 7,230.12 | 7,230.12 | 7,230.12 | ✅ Match |
| VIX close on 05-01 | 16.99 | 16.99 | 16.99 | ✅ Match |
| Core PCE YoY (March) | +3.2% | +3.2% | +3.2% | ✅ Match |
| Headline PCE YoY (March) | +3.5% | +3.5% | +3.5% | ✅ Match |
| AAII Bull-Bear Spread (04-30) | −1.6 pct | −1.6 pct | −1.6 pct | ✅ Match |
| AAII Bull-Bear week-over-week change | −13.2 pct | −13.2 pct | −13.2 pct | ✅ Match |
| CFTC Asset Manager S&P 500 net long | +998,208 contracts | +998,208 contracts | +998,208 contracts | ✅ Match |
| Communication Services weekly return | +4.42% | +4.42% | +4.42% | ✅ Match |

**Verdict**: All spot-checked figures are fully consistent across steps. No numerical contradictions detected.

---

## 3. Narrative Coherence

### 3.1 Research Question Coverage

| Step 01 Research Question | Step 02 Answer | Step 03 Coverage | Status |
|---|---|---|:---:|
| Inflation persistence vs. rate-cut expectations | Q1: PCE headline +3.5% YoY; core MoM eased to 0.3%, cushioning runaway-inflation pricing | §3 Q1, KPI cards, executive summary | ✅ |
| Liquidity vacuum risk (05-01 VIX) | Q2: VIX +0.10 only on 05-01; holiday liquidity risk did not materialize | §3 Q2, Table 1 VIX overlay | ✅ |
| Retail vs. institutional divergence | Q3: AAII bull-bear −1.6 vs. CFTC Asset Mgr +998k net long | §3 Q3, sentiment radar, risk table | ✅ |
| AI sector sentiment divergence | Q4: Communication Services +4.42% vs. IT +0.22%; internal rotation within AI complex | §3 Q4, sector heatmap | ✅ |
| 04-28 Conference Board Consumer Confidence | **Not independently analyzed** | **Absent** | ⚠️ Orphaned |
| 04-29 Treasury Quarterly Refunding | **Not independently analyzed** | **Absent** | ⚠️ Orphaned |

### 3.2 Orphaned Events

Step 01 explicitly flagged the April Conference Board Consumer Confidence release (04-28) and the Treasury Quarterly Refunding details (04-29) as key intraweek sentiment drivers. Step 02 attributed the 04-29 VIX spike (17.83 → 18.81) to "oil and rate anxiety" without separately decomposing the contribution from either data point. Step 03 does not mention them at all. These items are **logical orphans** — they were scoped in but never resolved. Because the four primary research questions are answered in full, this is a gap rather than a fatal flaw.

### 3.3 Research-to-Report Transfer

Step 02's four priority conclusions map cleanly onto Step 03's five key conclusions (the fifth adds the CNN Fear & Greed reading as a supplementary cross-check). The "follow-up items" section in Step 02 expands into the "next-week watch list" in Step 03, with one new entry (FOMC decision). This is normal elaboration and internally consistent.

---

## 4. Editorial Quality

### Issue A [High priority] — Risk-indicator traffic-light table has a logical flaw

In Step 03 §6 (both MD and HTML), the two **🟢 Green** rows list "Volatility structural expansion" and "Large-scale flight to safety" as the **risk names** — i.e., these describe adverse events. The "Current evidence" column shows these risks are **currently absent** (VIX fell on the week; long-term fund flows remained positive). Labeling an adverse risk event with a green indicator while the current state is benign creates an ambiguous reading: a PM could misread "green = this is happening and fine" rather than "green = this risk is currently dormant."

**Suggestion**: Rewrite the green rows so the "Risk" column describes the current positive baseline (e.g., "Volatility remains contained," "No flight-to-safety wave detected"), and use the "Trigger condition" column to specify what would turn the indicator yellow or red.

### Issue B [Medium priority] — Fund-flow data lag not prominently disclosed in the report narrative

Step 03 §4 and Table 4 present ICI mutual fund data (week ended 04-15) and money market data (week ended 04-22) directly alongside the reporting window (04-27 to 05-01). Step 02 noted the EPFR substitution in its methodology section, but Step 03 carries no visible staleness warning in its narrative or table titles. Readers may assume these are contemporaneous flows.

**Suggestion**: Add a footnote to Table 4 (and the corresponding narrative sentence): "*Note: ICI fund-flow data is approximately 1–2 weeks stale relative to this report's coverage window; figures do not reflect actual flows during the week of April 27.*"

### Issue C [Medium priority] — Sentiment radar standardization scores lack a stated methodology

The six-dimension sentiment radar in Step 03 §2 assigns scores of 70, 79, 72, 46, 65, and 80 on a 0–100 scale. No standardization formula or historical normalization baseline is described. Readers cannot verify whether a score of 46 (retail sentiment) correctly represents "below neutral," and the scores cannot be reproduced for future weeks.

**Suggestion**: Add a one-line footnote explaining the methodology (e.g., "Scores represent the current reading's percentile rank in the trailing 52-week distribution") or label the scores explicitly as qualitative/indicative.

### Issue D [Low priority] — HTML SVG dual-axis chart lacks Y-axis tick labels

The embedded VIX/S&P 500 dual-axis SVG (Chart 1 in HTML) uses hard-coded pixel coordinates. Neither axis carries visible scale labels, making it impossible for external readers to verify whether the visual ratio between the two series is undistorted.

**Suggestion**: Add at least three tick labels per axis (minimum, midpoint, maximum) to both the left (S&P 500) and right (VIX) axes.

---

## 5. Recommended Revisions

Ordered by priority:

- **[Must-fix / P1]** Rebuild §6 risk table: relabel green-light rows with current positive-state descriptions to eliminate the "green-flagged risk event" contradiction.
- **[Should-fix / P2]** Table 4 and the behavioral dashboard: insert a data-lag caveat next to ICI/money-market figures ("data through 04-15 / 04-22; not contemporaneous with the reporting week").
- **[Should-fix / P2]** Sentiment radar: attach a standardization methodology note or "qualitative estimate" label to the six numeric scores.
- **[Recommended / P3]** Add 2–3 sentences addressing the 04-28 CB Consumer Confidence and 04-29 Treasury Refunding data, or explicitly note why they were absorbed into the broader PCE/VIX narrative and require no separate treatment.
- **[Recommended / P3]** Add Y-axis tick labels to HTML SVG Chart 1.

---

## 6. Overall Grade

**`needs-revision`**

The report is analytically solid: all four primary research questions are answered, every key figure is internally consistent across the three steps, source citations are present and specific, and the week's narrative ("inflation anxiety, but earnings and AI capex dominate") is well-supported. Two issues require correction before PM presentation: the risk-traffic-light table's logical inconsistency (P1) and the under-disclosed data lag on fund flows (P2). The remaining items are editorial improvements that do not affect the core analytical conclusions.

---

```json
{"follow_ups":[
  {
    "to": "bond-analyst",
    "subject": "04-29 VIX spike: Treasury Quarterly Refunding term premium contribution",
    "question": "The Week 18 2026 sentiment research (covering 2026-04-27 to 2026-05-01) attributes the 04-29 intraweek VIX spike (17.83→18.81) to 'oil price and rate anxiety' without separately analyzing the US Treasury Quarterly Refunding announcement released that same day. Please assess: (1) what were the key supply decisions in the April 2026 Quarterly Refunding (size, duration tilt, buyback changes), and (2) whether the announcement materially contributed to term premium widening on 04-29, and (3) what the near-term term premium outlook implies for equity valuation sensitivity through the May FOMC.",
    "priority": "normal"
  },
  {
    "to": "global-macro",
    "subject": "CB Consumer Confidence April 2026: does it corroborate or contradict the AAII retail caution signal?",
    "question": "The Week 18 2026 sentiment research found that AAII retail bull-bear spread dropped sharply from +11.6 to -1.6, signaling a one-week shift to retail caution. The week's plan had specifically flagged the Conference Board Consumer Confidence Index for April 2026 (released 04-28) as a key check on whether personal consumption optimism was cracking under high interest rates — but this data point was not analyzed in the published research. Please provide: (1) the CB Consumer Confidence April 2026 headline and expectations sub-index readings vs. March, (2) whether the reading corroborates or contradicts the AAII caution signal, and (3) whether consumer confidence trajectory changes your macro outlook for the pace of goods vs. services disinflation into Q2 2026.",
    "priority": "normal"
  }
]}
```
