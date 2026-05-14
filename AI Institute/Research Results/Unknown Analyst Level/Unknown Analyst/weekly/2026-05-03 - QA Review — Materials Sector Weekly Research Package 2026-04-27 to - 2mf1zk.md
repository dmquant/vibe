---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review — Materials Sector Weekly Research Package (2026-04-27 to 2026-05-01)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review — Materials Sector Weekly Research Package (2026-04-27 to 2026-05-01)

**Reviewer**: QA Manager (Head of Research Quality)
**Review date**: 2026-05-03
**Scope**: Step 1 plan → Step 2 research → Step 3 weekly report (HTML + Markdown)
**Sources**: Workspace files plus upstream step summaries (used to fill in missing files)

---

## 1. File manifest

| Declared file | Present in workspace | Size | Note |
|---|---|---:|---|
| `01_weekly_plan.md` | No | — | Missing from workspace. Step 3 explicitly notes it "rebuilt the framework from the Step 1 summary plus `02_weekly_research.md` data." Step 1's own summary indicates the file was originally written at 3,622 bytes — likely a multi-node sync gap. |
| `01_weekly_plan.en.md` | No | — | Same as above. Step 1 summary indicates 4,063 bytes originally. |
| `02_weekly_research.md` | Yes | 15,220 B | Complete: 5 research questions plus 5 chart data tables and a follow-up addendum. |
| `02_weekly_research.en.md` | Yes | 17,157 B | Size matches the Chinese version proportionally. |
| `03_weekly_report.html` | Yes | 30,614 B | Self-contained HTML with embedded CSS, inline SVG charts, deep-dive Q&A, watchlist, and risk traffic-light panel. |
| `03_weekly_report.md` (companion) | Yes | 10,779 B | Mirrors the HTML structure. |

**Conclusion**: Step 1's bilingual plan is missing → "do the questions match the original plan?" cannot be closed inside the workspace, but Step 2 internally rebuilt the 5 questions and Step 3 lines up with them. **One medium-severity gap.**

---

## 2. Cross-step consistency

Six numerical / date / ticker mentions appearing in more than one step:

| Spot check | Step 2 (`02_weekly_research.md`) | Step 3 (`03_weekly_report.md`) | Consistent? |
|---|---|---|---|
| `HG=F` weekly 6.0235 → 5.9320, -1.52% | ✓ | ✓ | Match |
| `HG=F` April high 6.1200 USD/lb (2026-04-22) | ✓ | ✓ | Match |
| `TIO=F` 107.10 → 107.86, +0.71% | ✓ | ✓ | Match |
| Mysteel 5-product steel inventory 20.911 → 20.31 mt, -601,100 t (-2.9%) | ✓ | ✓ | Match |
| `LIT` weekly +5.88%, April +19.18% | ✓ | ✓ | Match |
| `CL=F` 94.40 → 101.94, +7.99% | ✓ | ✓ | Match |

**Additional checks**:

- April high/low markers (`HG=F` 5.5445 / 6.1200; `TIO=F` 106.27 / 108.32; `CL=F` 83.85 / 112.95) reconcile day-for-day across Step 2 and Step 3.
- Lithium spot anchors — EnergyTrend 156,700 RMB/t (+4.68%) and Trading Economics 155,550 RMB/t on 2026-04-10 — are quoted identically in both steps.
- The Step 3 watchlist thresholds (`HG=F` 6.1200; `TIO=F` 106.27 / 108.32; carbonate ≥ 150,000 RMB/t; `CL=F` ≥ USD 100/bbl) line up exactly with the trigger table in Step 2 question 5.

**Verdict**: No cross-step numeric contradictions found — **pass**.

---

## 3. Narrative coherence

| Plan question (rebuilt from Step 1 summary) | Answered in Step 2? | Carried into Step 3? | Assessment |
|---|---|---|---|
| Is the iron-ore rally confirmed? | Q1 ✓ | §3 Q1 + risk light 🟢 | Complete; "range repair" wording is conservative but the 🟢 lamp on the steel chain is slightly more bullish-sounding |
| Has copper made new highs or pulled back? | Q2 ✓ | §3 Q2 + risk light 🔴 | Complete and clean |
| Is lithium price stabilisation confirmed? | Q3 ✓ | §3 Q3 + risk lights 🟢 + 🟡 | Complete; the dual-lamp treatment (floor confirmed 🟢 / equity ahead of spot 🟡) reads as a layered conclusion, well handled |
| Sub-sector winners/losers? | Q4 ✓ | §3 Q4 + dashboard §2.2 | Complete |
| What to track next week? | Q5 ✓ | §4 watchlist | Thresholds map one-to-one |

**Orphan questions**: none. **Unsupported conclusions**: none. **Tension points**:

- §3 Q1 says "range repair, limited momentum," yet §5 marks the steel chain 🟢 ("signals aligned"). They are not contradictory, but the 🟢 cell should add a tag like "signals aligned but momentum modest" so a reader doesn't read green as "add risk."
- Both the HTML and Markdown report take the missing Step 1 file as a known fact, but the executive summary doesn't flag it — only the small-print "Data & Method" section does. Recommend adding a line at the end of the executive summary or just before the risk panel: "Upstream plan file was not readable in the workspace; the report's framework was rebuilt from the Step 1 summary."

**Verdict**: Logic chain is clean, no orphan questions; tension is in presentation rather than in data.

---

## 4. Editorial quality

Four concrete edit suggestions for the Step 3 weekly report (HTML + MD):

1. **Re-verify the `ZN=F` label**. Step 2's "Chart 1" and Step 3 §2.1 label `ZN=F` as "Zinc / USD/ton proxy" with values around 110–111. Physical zinc trades at roughly USD 2,000–3,500/t, so **110 cannot be reconciled with LME or SHFE zinc**. On Yahoo Finance, `ZN=F` is the CBOT 10-Year T-Note Futures (typically 100–115), which matches the printed values. Before publication, confirm whether `ZN=F` is intentionally being used as some kind of zinc proxy (and if so document the conversion) or whether it is a ticker mix-up; if it is a mix-up, swap to a correct zinc ticker (e.g. `ZNC=F` Yahoo LME-zinc symbol or an SHFE proxy). **This is the single most material defect QA found.**
2. **Split the executive summary into "thesis + action."** It currently stacks six data points and one positioning recommendation in a single paragraph, which is dense for a PM. Keep the rotation thesis + key numbers in the first paragraph and break out the portfolio actions (cut copper miners, hold lithium, add steel selectively, stay cautious on naphtha-based chemicals) in a second paragraph.
3. **Standardise units in chart labels**. Step 3 §2.1 mixes "USD/t" and "USD/t proxy"; the monthly table in §3 omits units for `ALI=F` and `ZN=F`. Pin units in the table headers and add a one-time footnote explaining what "proxy" means (financial futures close, not a spot index).
4. **Time-stamp the watchlist**. §4's first column already says "ongoing / 2026-05-08," but five "ongoing" rows stack together and don't align with the Friday Mysteel cadence. Either group rows into "intraday monitor" and "weekly cadence," or label each row with its expected refresh frequency (daily / weekly).

---

## 5. Recommended revisions

In priority order:

- **P0 — must fix**: re-verify `ZN=F`. If it really is the 10-Year T-Note rather than zinc, the Chart 1 and §2.1 labels in both the Chinese and English deliverables **must** be corrected (the narrative also contains one "weekly zinc dip" mention that needs to be removed or rewritten). Otherwise this datum ships as an outright error.
- **P1 — strongly recommended**: above the risk panel (in addition to the executive summary and "Data & Method"), add a transparency line stating that `01_weekly_plan.md` / `01_weekly_plan.en.md` were missing at QA time and the framework was rebuilt from the Step 1 summary, so a downstream PM doesn't treat the Q-list as an independently traceable plan.
- **P1 — strongly recommended**: refile Step 1. If multi-node sync can be retried, trigger a re-write of Step 1; if not, promote Step 2's question list to top-level and explicitly state that it is the de facto research plan.
- **P2 — suggested**: split the executive summary (see editorial point 2); harmonise unit labels (point 3); group the watchlist (point 4).
- **P2 — suggested**: in the HTML SVG charts, attach April high/low date stamps as hover/tooltip text so a reader doesn't have to cross-reference a separate table for dates.

---

## 6. Overall grade

**Grade**: `needs-revision`

**One-line justification**: Cross-step numbers and the question-to-conclusion chain are clean, but (a) the Step 1 plan files are missing and (b) the `ZN=F` ticker / "zinc" label appears to be a mismatch — both must be addressed before the report goes to a PM.

---

```json
{"follow_ups":[
  {"to":"materials-analyst","subject":"Is `ZN=F` really a zinc proxy?","question":"In `02_weekly_research.md` and `03_weekly_report.md/.html`, Chart 1 / §2.1 label `ZN=F` as zinc (USD/ton proxy) but quote values in the 110–111 range, which lines up with Yahoo Finance's `ZN=F` = CBOT 10-Year T-Note Futures (typical 100–115) rather than LME zinc spot (USD 2,000–3,500/t). Please confirm whether `ZN=F` was intentionally used as a zinc proxy (if so, document the conversion logic) or whether the ticker is a mix-up. If it is a mix-up, swap to the correct zinc symbol (e.g. `ZNC=F` or an SHFE-zinc proxy) and refresh the numbers and prose in Chart 1, §2.1 / §2.3, the 'aluminium pullback' adjacent paragraph in the risk panel, and the matching sections in the English version.","priority":"high"}
]}
```
