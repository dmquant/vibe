---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review: Weekly Bond Research Package (2026-04-24 to 2026-05-01)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review: Weekly Bond Research Package (2026-04-24 to 2026-05-01)

- **Reviewer**: QA Manager
- **Review date**: 2026-05-03
- **Files in scope**: `01_weekly_plan.md` / `01_weekly_plan.en.md` / `02_weekly_research.md` / `02_weekly_research.en.md` / `03_weekly_report.html` / `03_weekly_report.md`
- **Workflow under review**: Bond Analyst — Rates · Credit · Curve · Duration

---

## 1. File manifest

| Declared file | Exists in workspace | Note |
|---|---|---|
| `01_weekly_plan.md` | No | Step 1 (gemini) summary claims 3,975 bytes were written but the file is not visible on this node — likely an upstream sync gap. Steps 2/3 reconstructed the question list from the Step 1 summary in conversation context and stated this explicitly at the top of their own files. |
| `01_weekly_plan.en.md` | No | Same as above; 4,079 bytes are not visible on this node. Reconstructed in the same way. |
| `02_weekly_research.md` | Yes (16,266 bytes) | Complete: conclusions-first table + 7 research questions + 6 visualization data tables + follow-up tracker. |
| `02_weekly_research.en.md` | Yes (17,886 bytes) | Mirrors the Chinese version in structure; numbers and source URLs match. |
| `03_weekly_report.html` | Yes (43,386 bytes) | Includes executive summary, 6 dashboards, 7 deep-dive Q&As, next-week watch list, and red/amber/green risk lights. |
| `03_weekly_report.md` | Yes (15,677 bytes) | Markdown companion that mirrors the HTML report. |

**Conclusion**: 4 of 6 deliverables present, 2 (the planner files) missing on this node. Steps 2 and 3 both flag the upstream gap rather than papering over it. Review proceeds; the workflow runner should retry the upstream sync so downstream auditors can recover the original plan.

---

## 2. Cross-step consistency (spot checks)

| Item checked | 02 research | 03 report (md & html) | Consistency |
|---|---:|---:|---|
| 10Y UST on 2026-05-01 | 4.39%; +8 bp wk / +20 bp YTD | 4.39%; +8 bp / +20 bp | ✅ Match |
| 2s10s on 2026-05-01 | 51 bp; -2 bp wk / -21 bp YTD | 51 bp; -2 bp / -21 bp | ✅ Match |
| 10Y TIPS real (2026-04-30) | 1.94%; +5 bp | 1.94%; +5 bp | ✅ Match |
| 10Y breakeven 2026-05-01 | 2.48%; +6 bp | 2.48%; +6 bp | ✅ Match |
| HY OAS 2026-04-30 | 2.83%; -3 bp wk; 28.7th pctile within 2026 | 2.83%; -3 bp; pctile 28.7 | ✅ Match |
| Fed funds range / vote | 3.50%-3.75%; 8-4 with Miran dovish dissent, Hammack/Kashkari/Logan hawkish | 3.50%-3.75%; same 8-4 split, same names | ✅ Match |
| April ISM Prices Paid / PMI | 84.6 / 52.7 | 84.6 / 52.7 | ✅ Match |
| Key event dates | 5/6 refunding · 5/8 NFP · 5/12 CPI | Same | ✅ Match |

**Arithmetic spot checks**:
- 2s10s = 4.39% − 3.88% = **51 bp** ✓
- 5s30s = 4.97% − 4.02% = **95 bp** ✓
- 3M10Y = 4.39% − 3.68% = **71 bp** ✓
- 2Y YTD = 3.88% − 3.47% = **41 bp** ✓

**Conclusion**: All cross-step numbers, dates, vote names, and tickers (`BAMLH0A0HYM2` / `BAMLC0A0CM` / `BAMLC0A4CBBB` / DGS10 / DFII10 / T10YIE) are internally consistent. Arithmetic ties out. No contradictions found.

---

## 3. Narrative coherence

Because `01_weekly_plan.md` is missing, the planner's exact question list cannot be re-checked. Based on the Step 1 summary (scope: "this week's critical macro data and bond yield dynamics"), Step 2 reconstructed seven research questions:

1. Weekly rate moves (curve snapshot)
2. Curve shape: growth vs policy risk
3. Whether the Fed path supports adding duration
4. Macro data direction for bonds
5. Real yields vs breakevens — who is driving 10Y
6. Whether credit spreads confirm risk
7. Whether supply will pressure the long end

Step 3 (the 03 report) carries all seven through as deep-dive sections, preserving the method / data / interpretation / caveat structure for each, and rolling the numeric findings into the executive summary plus the six visualization tables. **No orphaned questions, no unsupported conclusions.**

**Logical loop closure**: Q4 + Q5 ("macro is unfriendly + real yields and breakevens both pushing higher") directly support the duration call ("neutral to modestly short, scale in near 10Y 4.50%"). Q6 ("credit not confirming risk + HY tight valuation") maps to the credit account guidance ("trim HY beta, keep IG carry"). Q7 ("5/6 refunding is the key supply event") maps to the next-week watch list and the red-light risk callout. The chain is intact.

**One soft spot**: because the actual planner doc is unavailable, we cannot confirm whether Step 2/3 covered every sub-question the plan required. Common bond-weekly extras — IG/HY sector breakdowns, MOVE / rates volatility, foreign-CB linkages, foreign holdings of USTs — are absent here. They may have been out of scope, or they may have been dropped during reconstruction. Worth resolving once the plan file is recovered.

---

## 4. Editorial quality (visualization stage)

1. **Executive summary is ambiguous on the real-yield asof date**: the line "real yield (+5 bp to 1.94%)" does not flag that this value is **as of 2026-04-30** (FRED had not updated 5/1). Recommend rewording to "10Y TIPS real yield +5 bp to 1.94% (as of 2026-04-30; FRED 5/1 not yet posted)" so a reader does not mistake it for an end-of-week print.
2. **Q3 deep dive omits the FedWatch URL**: the 02 research lists Kiplinger / FOMC statement / implementation note URLs in full; the 03 report deep dive drops them. Recommend restoring at least the Kiplinger link as a footnote (or in the "Sources" section) so a PM can verify the rate-cut probability snapshot independently.
3. **Risk-light table lacks escalation / de-escalation thresholds**: each risk has a trigger but no explicit "what makes it move up or down a tier." Recommend a small added column — e.g., for the HY red light: escalates if HY OAS breaks 3.20%; downgrades if it falls back below 2.95%. That converts the table into a rolling intraday dashboard a PM can use mid-week.
4. **Trade-recommendation table only shows downside triggers**: the "risk" column lists what hurts each stance, but offers no stop-loss or risk-budget. Recommend adding a "stop / exit" column (e.g., core book: cut new long-duration adds in half if 10Y breaks 4.55%; tactical: take profit / cut losses if April CPI prints ≥ 0.2 ppt above consensus).

---

## 5. Recommended revisions (prioritized)

1. **[High]** In both 03 reports, annotate the executive summary so the 1.94% real yield is clearly labeled as a 2026-04-30 print. This is the most likely misread by a quick PM scan.
2. **[High]** Have the workflow runner retry the upstream sync to deliver `01_weekly_plan.md` / `.en.md` to this node, so the audit trail is restored. If the sync fails, ask the Bond Analyst to file a short "plan reconstruction note" by end of week to close the loop.
3. **[Medium]** Restore the Kiplinger / FOMC URL footnotes in the 03 report Q3 deep dive — the source list already exists in 02, so no fresh research is needed.
4. **[Medium]** Add escalation / de-escalation thresholds to the risk-light table; add stop-loss / exit triggers to the trade-recommendation table.
5. **[Low]** Append a one-line scope statement to the executive summary — "covers US Treasuries and USD credit; does not cover non-US rate linkages, MOVE / rates vol, or foreign holdings of USTs" — so the report is not misused as a global rates weekly.
6. **[Low]** The 03 reports already note "all numbers and dates match `02_weekly_research.md`"; consider adding "if any number conflicts with the underlying source, the source link in the Data Sources section is authoritative."

---

## 6. Overall grade

**`pass`** — internally consistent, logically closed, and 4-of-6 deliverables present with the 2 missing files explicitly flagged and reconstructed. The recommended revisions are polish, not blockers. Apply the executive-summary date annotation before circulating to the PM.

---

```json
{"follow_ups":[
  {"to":"chief-economist","subject":"Probability distribution of weak NFP vs sticky CPI across the 5/8 and 5/12 data windows","question":"The bond research treats the 10Y UST 4.45%–4.50% zone as the scale-in trigger for adding duration, but that call is highly conditional on (a) the 2026-05-08 BLS Employment Situation (whether payrolls / UR / AHE soften together) and (b) the 2026-05-12 BLS CPI (whether headline retreats and core stays on an acceptable path). Could you provide a nowcast range (median ± 1σ) for April NFP and April CPI, plus the conditional probability of weak payrolls combined with sticky CPI, so the bond desk can calibrate the optimal scale-in cadence and hedge ratio between 5/8 and 5/12?","priority":"high"}
]}
```
