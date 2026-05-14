---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# FX Weekly QA Review

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# FX Weekly QA Review
**Scope:** Weekly FX research package, 2026-04-27 to 2026-05-01 (steps 01–03)
**Review date:** 2026-05-03
**Reviewer:** QA Manager

---

## 1. File manifest

| Declared file | Exists in workspace | Bytes | Note |
|---|---|---:|---|
| `01_weekly_plan.md` | Yes | 3,343 | Chinese research plan; complete five-section structure (scope / questions / data / visuals / outline). |
| `01_weekly_plan.en.md` | Yes | 3,282 | English plan, mirrors the Chinese version. |
| `02_weekly_research.md` | Yes | 16,588 | Chinese research draft with method / findings / evidence / limitations for all 5 questions. |
| `02_weekly_research.en.md` | Yes | 18,354 | English research draft, in sync with Chinese version. |
| `03_weekly_report.md` | Yes | 9,316 | Chinese final report: 5 data tables, per-question deep dive, risk dashboard. |
| `03_weekly_report.html` | Yes | 38,988 | HTML version with inline SVG charts. |

**Verdict:** Manifest is complete; nothing missing.

---

## 2. Cross-step consistency

Spot-checked key figures appearing in both Step 02 and Step 03:

| Item | Step 02 value | Step 03 value | Match |
|---|---|---|---|
| Fed target range (4/29) | 3.50%–3.75% | 3.50%–3.75% | ✅ |
| DXY 4/29 peak / 4/30 close | 99.20 / 98.37 | 99.20 / 98.37 | ✅ |
| USD/JPY 4/30 intraday high | 160.725 | 160.725 | ✅ |
| USD/JPY weekly change | -1.45% | -1.45% | ✅ |
| 10Y UST 4/29 peak | 4.42% | 4.42% | ✅ |
| China April Manufacturing PMI | 50.3 | 50.3 | ✅ |
| China April Non-Mfg PMI | 49.4 | 49.4 | ✅ |
| USD/CNY mid-rate 4/30 | 6.8628 | 6.8628 | ✅ |
| CNH-CNY spread 4/30 | -20 pips | -20 pips | ✅ |
| Euro area April HICP | 3.0% y/y | 3.0% y/y | ✅ |
| Energy HICP component | 10.9% y/y | 10.9% y/y | ✅ |
| USD/CNY ATM 1W IV start/end of month | 5.4000% / 4.1500% | 5.40% / 4.15% | ✅ |

Math recheck:
- DXY weekly: (98.49 − 98.75)/98.75 = −0.263% ≈ −0.26% ✅
- USD/JPY weekly: (157.065 − 159.370)/159.370 = −1.446% ≈ −1.45% ✅
- CNH-CNY 4/30 = 6.8312 − 6.8332 = −0.0020 = −20 pips ✅

**Verdict:** Numbers reconcile across steps; no contradictions.

---

## 3. Narrative coherence

| Plan question (Step 01) | Research section (Step 02) | Report section (Step 03) | Status |
|---|---|---|---|
| Q1 Fed hawk/dove → USD | Question 1 | Section III · Q1 | ✅ Closed loop |
| Q2 China PMI → CNY stability | Question 2 | Section III · Q2 | ✅ Closed loop |
| Q3 Holiday effect on CNH | Question 3 | Section III · Q3 | ✅ Closed loop |
| Q4 JPY carry-trade red line | Question 4 | Section III · Q4 | ✅ Closed loop |
| Q5 Euro CPI → June cut | Question 5 | Section III · Q5 | ✅ Closed loop |

**Positives:**
- The plan stage incorrectly listed US April NFP for 5/1; the research stage correctly noted BLS scheduled it for 5/8, and the final report places NFP in next week's watchlist rather than this week's recap. The error correction loop closed cleanly.
- All four planned visuals (CNY tracker, G10 heatmap, yield-spread vs FX, PMI matrix) materialise as data tables in the report; the HTML version adds SVG charts.

**Minor gaps:**
- Plan item #4 ("cross-border capital flows / carry-trade rebalancing") is addressed in research Q4 only via price/spread proxies; there is no direct read from CFTC IMM positioning or EPFR flows. Acceptable, and explicitly disclosed under "Limitations".
- Plan item #1 asks for a Powell press-conference keyword log; the research links the transcript but does not extract a keyword list (e.g., counts of "data dependent", "premature", language on cut timing). Report Q1 paraphrases as "explicit caution" — could be reinforced with direct citations.

---

## 4. Editorial quality

Four concrete edits to `03_weekly_report.md`:

1. **Tighten the Q3 phrasing.** The line "节后低流动性放大双向波动" can mislead — 5/1 is mid-holiday (onshore closed), not post-holiday. Replace with "holiday-period low liquidity" or "while onshore is closed" to avoid reading it as post 5/4.
2. **Tag DXY consistently.** Table 1 marks DXY as "estimated", but the executive summary cites "DXY one once hit 99.20" without that tag. Add "(estimated, calibrated)" the first time DXY appears in the summary so readers don't assume it is the ICE settlement value.
3. **Pre-define the risk-light scale.** The 6-row dashboard uses icons + current state but no scale legend. Add one line above the table: "Red = dominant risk this week; Yellow = latent, awaiting confirmation; Green = low probability / already mitigated." Helps a PM scan-read.
4. **Add range/median to the G10 heatmap.** Table 2 lists each currency's weekly change; appending a "G10 range" row (JPY +1.45% vs SEK −0.97%, range 2.42 pp) would visually reinforce the "JPY broke ranks alone" story.

---

## 5. Recommended revisions

Prioritised:

- **P1 (fix before delivery):**
  - Reword "节后低流动性" in Q3 to clarify it refers to onshore closure on 5/1.
  - Tag DXY as "estimated" on its first mention in the executive summary, mirroring the data-note caveat at the end.

- **P2 (nice to have):**
  - Add a colour-scale legend above the risk dashboard.
  - Add a "range" row to the G10 weekly performance table to highlight JPY's outlier move.

- **P3 (next iteration):**
  - Build a Powell press-conference keyword frequency table ("data-dependent" / "premature" / "patient") to harden Q1's hawk/dove call with textual evidence.
  - Bring in CFTC IMM JPY positioning data as a hard read on carry-trade unwinds, in place of today's price-only proxies.

---

## 6. Overall grade

**`pass`**

Justification: Manifest is complete, numbers reconcile across all three stages with zero contradictions, the planner's question list maps cleanly through research and into the final report, and the one factual error in the plan (NFP date) was caught and corrected downstream. Remaining issues are wording- and labelling-level (two P1 items) and do not affect the core conclusions or credibility — fix them in a quick polish pass before sending to the PM, or roll into next week.

---

```json
{"follow_ups":[]}
```
