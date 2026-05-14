---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Real Estate Weekly QA Review (2026-04-27 to 2026-05-01)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Real Estate Weekly QA Review (2026-04-27 to 2026-05-01)

- **Reviewer:** QA Manager
- **Scope:** Real Estate sector team — Step 01 plan / Step 02 research / Step 03 visualization report
- **Review date:** 2026-05-04

## 1. File manifest

| Declared file | Exists in workspace | Note |
| --- | :---: | --- |
| `01_weekly_plan.md` | Yes | 3,491 bytes; coverage window, 4 core questions, data needs, viz plan, report outline all present. |
| `01_weekly_plan.en.md` | Yes | 3,768 bytes; English mirror of the plan. |
| `02_weekly_research.md` | Yes | 20,610 bytes; per-question answers + evidence tables + caveats + viz data tables. |
| `02_weekly_research.en.md` | Yes | 25,224 bytes; English research draft. |
| `03_weekly_report.html` | Yes | 36,981 bytes; self-contained final deliverable with embedded CSS and inline SVG charts. |
| `03_weekly_report.md` | Yes | 11,294 bytes; plain-text parallel of the HTML for proof-reading. |

No files are missing; all ≥ 200 bytes.

## 2. Cross-step consistency

Spot-check of key numbers / dates / tickers between Step 02 and Step 03:

| # | Metric | Step 02 value | Step 03 value | Result |
| --- | --- | --- | --- | :---: |
| 1 | CRIC TOP100 April managed sales / YoY / MoM | RMB 2,592.0bn; YoY -8.9%; MoM -3.9% | 2,592.0bn; -8.9%; -3.9% | ✅ Match |
| 2 | CRIC TOP100 Jan-Apr cumulative managed sales / YoY | RMB 8,178.0bn; -19.7% | 8,178.0bn; -19.7% | ✅ Match |
| 3 | Hangzhou Liangzhu East parcel (2026-04-28) premium / floor price | 43.33%; RMB 16,483/sqm | 43.33%; 16,483/sqm | ✅ Match |
| 4 | Top-20 cities April secondary-home transaction area / YoY | 17.93m sqm; +17% | 17.93m sqm; +17% | ✅ Match |
| 5 | CSI REITs Total Return Index W/W (4.25-5.1) / close | -1.3%; 1,011.1 | -1.3%; 1,011.1 | ✅ Match |
| 6 | C-REITs daily average turnover change | 6.6 → 4.5bn, MoM -31.9% | 4.5bn; MoM -31.9% | ✅ Match |
| 7 | April count of local property-stabilization policies | 74 | 74 | ✅ Match |
| 8 | Shenzhen household HPF max loan cap | RMB 3.51m | RMB 3.51m | ✅ Match |
| 9 | April official manufacturing PMI / non-manufacturing business activity | 50.3% / 49.4% | 50.3% / 49.4% | ✅ Match |
| 10 | National commercial-use land (through 4-25) YoY / avg premium | -41% / 7.5% | -41% / 7.5% | ✅ Match |

**Conclusion:** Every spot-checked figure aligns across the two steps in value, definition, and date. No contradictions found.

## 3. Narrative coherence

| Step 01 core question | Answered in Step 02 | Carried through Step 03 | Note |
| --- | :---: | :---: | --- |
| Q1 — Quality of sales recovery | ✅ Q1 (April single-month + Jan-Apr cumulative + hot project structure) | ✅ Q1 + Table 1 | Complete and well-layered. |
| Q2 — Uneven land market | ✅ Q2 (Hangzhou 5 parcels + national monthly background) | ✅ Q2 + Table 2 | Aligned. |
| Q3 — Policy transmission efficiency | ✅ Q3 (74 policies + Shenzhen/Wuhan + secondary/new-home transactions) | ✅ Q3 + Table 4 | Aligned. |
| Q4 — C-REITs yield stability | ✅ Q4 (index + turnover + spread) | ✅ Q4 + Table 3 | Aligned. |
| Plan called for "whitelist" financing progress | ⚠️ Partial — Step 02 notes "no national new-volume disclosure this week", only directional view | ⚠️ Mentioned only in macro background | Honestly flagged; methodologically acceptable. |
| Plan data need: PMI | ✅ Covered under "Macro & financing background" | ✅ Same | Aligned. |

**Plan→viz structural deviations (self-disclosed, not hard issues):**
- Plan Chart 1 envisioned TOP10 / TOP50 / TOP100 monthly comparison; Step 02 noted that public sources do not disclose TOP10/TOP50 single-month figures, so Step 03 Table 1 shows only TOP100, supplemented by cumulative-tier text. Reasonable substitution, properly disclosed.
- Plan Chart 3 envisioned per-sub-sector REITs (rental housing / industrial parks / logistics) weekly returns; Step 02 noted that the 4.25-5.1 weekly print does not give all three, so Step 03 Table 3 switched to "ownership vs. operating-right + extreme sub-sectors". Reasonable substitution, properly disclosed.
- Plan referenced Suzhou land auctions (alongside Hangzhou); Step 02/03 only cover Hangzhou + Beijing / Chongqing / Dongguan (4 cities). The reduced coverage is not explicitly flagged in the report — recommend a one-line note.

**Support for headline conclusions:** All five headline takeaways and the six red/yellow/green risk signals trace back to Step 02 data tables or evidence chains; no "claim without evidence" was found.

## 4. Editorial quality

Targeted at `03_weekly_report.md` / `.html`:

1. **Executive summary is one over-long sentence.** It packs five numbers and four keywords into a single paragraph. Recommend breaking after "C-REITs secondary market correction widened to -1.3%" and surfacing the four keywords on their own line for above-the-fold scannability.
2. **Table 2 (land auctions) row order conflates levels.** It currently mixes "very high / high / mid-high / low / floor" and lists "Hangzhou Liangzhu East (43.33%)" above "Hangzhou 5-parcel average (15.49%)", which can read as if the average is a peer. Recommend tagging rows ("[Single parcel] Hangzhou Liangzhu East" / "[City aggregate] Hangzhou 5-parcel average") or indenting components beneath the aggregate.
3. **Table 3 "weak-sector extremes" row is not comparable.** It shows "Data Center -2.9%" last week and "Consumer -2.0%" this week — different sub-sectors, so the "change" column has no real meaning. Either keep one consistent sub-sector W/W, or pull this row out as a footnote labeled "weekly extremes".
4. **Watch list mixes date granularities** ("05-09" vs. "early May"). Recommend standardising on either specific dates or labelled ranges so readers don't mistake range items for fixed-date official events.
5. **HTML/MD parallel-delivery note missing.** In the closing "Methodology note", add one line: this report ships as both HTML and Markdown with identical numbers and conclusions; HTML is the visual deliverable, MD the copy-friendly text version.

## 5. Recommended revisions

In priority order:

- **P1 (recommended fix):** Table 3 "weak-sector extremes" row is not comparable — convert to a single consistent sub-sector or move to a footnote (this affects data credibility).
- **P2 (recommended fix):** Add row groupings/indentation in Table 2 to separate single-parcel rows from city-aggregate rows.
- **P2 (recommended add):** Explicitly state in the report that Suzhou land auctions, listed in the plan, did not surface this week / lacked sufficient public data, and have been moved to the watch list.
- **P3 (recommended fix):** Break the executive-summary long sentence and pull the four keywords onto their own line.
- **P3 (recommended add):** Add the HTML/MD parallel-delivery note in the closing methodology section.
- **P3 (recommended add):** In the conclusions / outlook, dedicate one line to the "whitelist" topic ("no national new-volume disclosure this week → tracked next week"), closing the loop on the plan's question.

The report is publishable as is (none of these change the headline numbers or conclusions); applying P1/P2 brings it closer to a polished PM-ready standard.

## 6. Overall rating

**`pass`** — All three deliverables exist, cross-step numbers match exactly, and the plan→research→report Q&A loop is clean. The remaining issues are editorial polish (table sorting, column comparability, sentence length) that do not undermine the headline conclusions or credibility. Recommend a final P1/P2 micro-revision before circulating to the PM.

```json
{"follow_ups":[]}
```
