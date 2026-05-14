---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report — Weekly Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report — Weekly Research Package
**Review window:** 2026-04-27 to 2026-05-01  
**Reviewer:** QA Manager  
**Review date:** 2026-05-03  

---

## ⚠️ Upstream File Gaps

The following files do not exist in this node's workspace. Step 3 (Claude visualization stage) reported writing them but they are not present on disk:

- `03_weekly_report.html` (Step 3 context claims 34,219 bytes written; not found on disk)
- `03_weekly_report.md` (Step 3 context claims 9,843 bytes written; not found on disk)

The QA review of the visualization stage (Step 3) relies solely on the Step 3 task-completion summary; no line-by-line inspection of the actual HTML or Markdown content was possible. All conclusions relating to Step 3 are marked as **inferred from summary**.

---

## 1. File Manifest

| Declared file | Present in workspace | Note |
|---|:---:|---|
| `01_weekly_plan.md` | Yes | 2,936 bytes; content complete |
| `01_weekly_plan.en.md` | Yes | 3,104 bytes; content complete |
| `02_weekly_research.md` | Yes | 15,689 bytes; content complete |
| `02_weekly_research.en.md` | Yes | 17,437 bytes; content complete |
| `03_weekly_report.html` | **No** | Step 3 claimed 34,219 bytes; not on disk; review based on summary |
| `03_weekly_report.md` | **No** | Step 3 claimed 9,843 bytes; not on disk; review based on summary |

---

## 2. Cross-Step Consistency

Six numerical or date-sensitive items that appear in more than one step were spot-checked:

| Item | Step 1 (plan) | Step 2 (research) | Step 3 (visualization — summary) | Verdict |
|---|---|---|---|---|
| 60/40 portfolio 95% VaR alert line | 1.50% (internal threshold) | 1.50% alert; actual 1.27% | Dashboard cites 1.27% (from summary) | **Consistent** |
| 10Y UST stress level | Break above 4.8% | 4.31%→4.40%; stress at 4.80% (+40 bp) | Rate volatility cited as core narrative (summary) | **Consistent** |
| Core PCE year over year | Planned for May 1 PCE release | 3.2% (BEA March release) | PCE cited as key narrative (summary) | **Consistent** |
| Mag-7 / Top 10 weight | "AI holding concentration" | **30.44%** Mag-7; **35.59%** Top 10 | Concentration analysis mentioned (summary) | **Consistent** |
| USD/JPY intraday range | Not a standalone question (within scope) | **160.72→155.50** (~500 pips) | Tail-risk section cited (summary) | **Consistent** (plan omitted formal question; see §3) |
| 5Y Breakeven | 5Y/10Y breakeven required | **2.61%→2.69%** (dashboard uses May 1 value); yield-curve table April 30 endpoint = 2.67% (+6 bp); additional row shows May 1 = 2.69% (+8 bp vs April 24) | Not cited in summary | **Minor inconsistency:** the dashboard's +8 bp figure and the yield-curve table's +6 bp figure are both arithmetically correct but use different date endpoints (May 1 vs April 30). The report does not clearly label which endpoint is used for which figure, creating confusion risk. |

**Summary:** 5 of 6 items are fully consistent; 1 item requires endpoint clarification.

---

## 3. Narrative Coherence

### Plan questions → Research answers → Visualization conclusions

| Step 1 question | Answered in Step 2? | Answer quality | Carried into Step 3 (summary)? |
|---|:---:|---|:---:|
| Q1: VaR volatility spillover | ✓ | Complete: downside-day correlation 0.97; buffer 0.23 pp; clear conclusion | ✓ |
| Q2: Duration stress test at 4.8% | ✓ | Complete: −1.17% duration-only; −3.57% to −4.17% with equity shock | ✓ |
| Q3: Liquidity exhaustion during holiday | ✓ (with method downgrade) | CDX unavailable; substituted FRED OAS + HYG/LQD; conclusion supported by proxies | ✓ |
| Q4: AI crowding reversal threshold | ✓ | Complete: ACRI 81/100 CRITICAL; HHI 185 vs. 5-year average 142 | ✓ |

### Orphaned questions and gaps

1. **BoJ / Carry Trade:** Step 1 Scope item 4 explicitly lists yen carry-trade unwind risk, but Step 2 did not assign it a standalone Question 5 structure. It appears only as a "Macro Addendum" section, without the Method → Findings → Evidence → Caveats format used for Q1–Q4. The ~500-pip USD/JPY squeeze and its cross-asset contagion pathway deserved a formally structured treatment given its significance.

2. **VVIX and SKEW data gaps:** Step 1 Data Requirements listed VVIX and SKEW explicitly, but Step 2 acknowledges these were unavailable for bulk download and provides no specific values. The limitation is noted only in buried caveats; it should be surfaced in the executive summary or a standalone data-availability section.

3. **CDX proxy substitution visibility:** Step 2 clearly explains the CDX-to-OAS substitution in Q3's Method section. However, the visualization stage (per summary) does not appear to have prominently re-labeled Chart 4 to reflect the substitution. A PM reading the final report may mistakenly assume CDX data was used directly.

---

## 4. Editorial Quality

The following four suggestions apply to the Step 3 visualization deliverable (based on summary; to be re-verified once the file is present on disk):

1. **Chart 4 title mismatch:** The plan labeled this chart "CDS Spread Spikes" but the actual data is FRED OAS and ETF prices. The chart title or subtitle should explicitly read: "Credit Spread Proxy (HY OAS / IG OAS / HYG / LQD — CDX unavailable)." A title that implies CDS when the data is OAS will invite credibility questions from any reader who checks the methodology.

2. **Breakeven date-endpoint labeling:** The Risk Dashboard and the Yield Curve table each use breakeven figures, but the reference endpoints differ (April 30 vs. May 1). The dashboard header should explicitly state "as of 2026-05-01" for the 5Y/10Y breakeven columns, and the Yield Curve chart should note that the final breakeven data point is May 1 rather than April 30. This prevents readers from computing the wrong delta.

3. **Risk traffic-light thresholds:** The summary mentions a red/yellow/green indicator system. For PM-level presentation, each color tier must be anchored to a specific numeric threshold (e.g., VaR buffer < 0.10 pp = red; 0.10–0.25 pp = yellow; > 0.25 pp = green). Without explicit thresholds, the color bands appear subjective and lose their communication value.

4. **Forward calendar sourcing:** The summary mentions "8 events to watch next week." Each event should be annotated with a source (BEA release calendar, FOMC communications, BoJ policy schedule, etc.) so a PM can confirm the dates independently.

---

## 5. Recommended Revisions

Prioritized for pre-PM presentation:

- **P1 (Required) — Confirm or regenerate Step 3 files:** `03_weekly_report.html` and `03_weekly_report.md` are absent from this workspace node. If they reside on another node, they must be synced and verified (`wc -c` ≥ 200 bytes) before this QA can be marked complete. If they were never written, Step 3 must be re-run.
- **P1 (Required) — Fix the 5Y Breakeven endpoint ambiguity:** Annotate both the Risk Dashboard and the Yield Curve table with explicit date endpoints (April 30 vs. May 1) to prevent readers from computing the wrong weekly change (−2 bp arithmetic error).
- **P2 (Recommended) — Elevate BoJ/carry trade to a structured section:** Either add a formal Q5 (Method/Findings/Evidence/Caveats) for the USD/JPY carry-unwind risk, or include a sentence in the executive summary explicitly classifying it as a "planned supplemental topic, not a formal structured question."
- **P2 (Recommended) — Relabel Chart 4:** Rename the chart title from "CDS Spread Spikes" to "Credit Spread Proxy — OAS + ETF Substitutes (CDX Unavailable)" to align the title with the actual data used.
- **P3 (Minor) — Surface VVIX/SKEW data gaps explicitly:** Add a brief data-limitations sidebar in the executive summary noting that VVIX and SKEW historical bulk data were unavailable and that the VaR tail estimate may therefore be conservative (left-tail risk could be higher than the 1.27% figure suggests).

---

## 6. Overall Grade

**`needs-revision`**

**Justification:** Step 2 research quality is strong — all four planned questions are answered with reproducible data, transparent methodology, and well-sourced evidence. However, the key visualization output files (`03_weekly_report.html` and `03_weekly_report.md`) are absent from this node's workspace, making a complete QA pass impossible. Two additional issues — the 5Y Breakeven endpoint ambiguity and the Chart 4 title/data mismatch — are fast fixes that must be resolved before PM presentation. The report can reach `pass` once the visualization files are confirmed present and the P1 items are addressed.

---

```json
{"follow_ups":[
  {"to":"fx-strategist","subject":"USD/JPY carry-unwind contagion threshold into US credit markets","question":"This week's report documents a ~500-pip intraday USD/JPY squeeze on 2026-04-30 (160.72→155.50) as a tail-risk signal. Please assess: (1) historically, when USD/JPY has rallied 5–10 points in under two sessions, how quickly and by how much have US IG and HY credit spreads widened; (2) given the current Fed-BoJ policy differential of approximately 275 bp, what specific cross-asset conditions (e.g., VIX level, NDX drawdown threshold, IG OAS trigger) would cause this week's carry squeeze to enter a self-reinforcing unwind phase? Please provide quantitative reference levels rather than a qualitative description.","priority":"high"}
]}
```
