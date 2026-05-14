---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# ESG Weekly Research Package — QA Review

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# ESG Weekly Research Package — QA Review

**Reviewer**: QA Manager (Research Quality Lead)
**Subject**: ESG Analyst weekly package, 2026-04-27 to 2026-05-01 (steps 01–03)
**Review date**: 2026-05-04

---

## 1. File manifest

| Declared file | Exists in workspace | Size (bytes) | Note |
|---|:---:|---:|---|
| `01_weekly_plan.md` | Yes | 3,925 | Simplified Chinese plan, structure complete |
| `01_weekly_plan.en.md` | Yes | 4,435 | English bilingual version, section-by-section parity with the Chinese plan |
| `02_weekly_research.md` | Yes | 21,783 | Simplified Chinese deep research with five questions, data tables, and limitations |
| `02_weekly_research.en.md` | Yes | 25,690 | English bilingual version (slightly longer — natural language expansion) |
| `03_weekly_report.html` | Yes | 34,891 | Self-contained visualised weekly report (inline SVG charts, tables, traffic-light risk panel) |
| `03_weekly_report.md` | Yes | 11,620 | Markdown twin of the HTML report (same numbers, same conclusions) |

**Verdict**: All six expected deliverables are present and non-empty. No upstream gaps.

---

## 2. Cross-step consistency

Spot-check of numerical / date / ticker mentions that appear in more than one step:

| # | Metric | Step 02 value | Step 03 value | Match | Note |
|---|---|---|---|:---:|---|
| 1 | CEA25 close on 2026-04-30 | RMB 79.50/ton | RMB 79.50/ton | ✅ | Identical |
| 2 | CEA25 premium vs 2025 average (62.36/ton) | +27.49% | +27.49% | ✅ | Identical |
| 3 | Total CEA volume for the week | 1,684,790 tons | 1,684,790 tons | ✅ | Identical |
| 4 | CATL Q1 net profit attributable to parent | RMB 20.738bn, +48.52% | RMB 20.738bn, +48.52% | ✅ | Identical |
| 5 | BYD Q1 weekly return / Q1 net profit YoY | +3.54% / -55.38% | +3.54% / -55.38% | ✅ | Identical |
| 6 | CBAM 2026 Q1 certificate price | EUR 75.36/tCO₂ | EUR 75.36/tCO₂ | ✅ | Identical |
| 7 | Coal-H₂ (high) carbon-cost share of EUR 4/kg sale price | 48.98% | 48.98% | ✅ | Identical |
| 8 | Q1 2026 onshore green bonds — size & count | RMB 122.621bn / 165 issues, -25.34% / +46.02% | Same | ✅ | Identical |
| 9 | Lowest identifiable blue-bond share of green-bond stock | ≈0.04% | ≈0.04% | ✅ | Identical |
| 10 | HKEX 2026 Q1 cash-market ADT | HK$276.7bn, +14% YoY | HK$276.7bn, +14% YoY | ✅ | Identical |
| 11 | CSI 300 ESG benchmark (931463) weekly return | +0.50% | +0.50% | ✅ | Identical |

**Verdict**: All 11 cross-step values are consistent. No contradictions in numbers, dates, or tickers. The visualisation step strictly preserves the research step's figures.

---

## 3. Narrative coherence

### 3.1 Plan → research → report mapping

| Plan question (step 01) | Research answer (step 02) | Report carry-through (step 03) | Status |
|---|---|---|:---:|
| Q1 — Will MEE bulletin trigger further CEA tightening? | §1: Bulletin not verifiable; factor DB expanded by 291 entries; tightening conditional on Q3 verification | §3-1: No direct evidence short-term; key gate at 2026-09-30 | ✅ Closed |
| Q2 — Has ESG-rating / valuation premium strengthened? | §2: CATL/BYD/Longi sample, ~-0.33 correlation, no clear premium | §3-2: Weekly evidence does not support a strengthening premium | ✅ Closed |
| Q3 — CBAM scope expansion impact on Chinese H₂ exports | §3: Hydrogen already inside CBAM (not "new addition"); coal-H₂ up to 48.98% of sale price | §3-3: Green-H₂ certification is the only low-cost export route | ✅ Closed |
| Q4 — Will HKEX ISSB shift trigger foreign ESG inflow inflection? | §4: Current activity driven by Connect, not ESG-specific; first FY2026 reports surface in 2027 | §3-4: No verifiable inflection yet | ✅ Closed |
| Q5 — Does rising blue-bond share signal a shift to biodiversity? | §5: Identifiable share only ~0.04%; green-bond size YoY -25.34% contradicts plan's "record-high" hypothesis | §3-5: Blue bonds = product innovation, not a style rotation | ✅ Closed |

### 3.2 How the research step handled flawed plan assumptions

In its dedicated "Data verification note" the research step explicitly flagged **four** plan assumptions that did not survive verification:

1. The 2025 GHG bulletin allegedly published on 04-27 was not findable on the MEE site.
2. The "CATL Q1 ESG-specific disclosure" on 04-28 was actually the routine 2026-04-16 Q1 financial report.
3. The 04-30 EU action did not "newly add" hydrogen to CBAM — hydrogen was already among the six covered sectors.
4. The plan's claim that Q1 green-bond issuance hit a record high is contradicted by the actual -25.34% YoY decline.

The research step replaced these with verifiable substitutes and disclosed the substitutions in writing — this is methodologically correct.

### 3.3 Orphan questions or unsupported conclusions?

- No orphan questions: every plan question is taken up in research and again in the report.
- The 2026-05-04 "post-holiday A-share open" appears in the next-week watch list as a forward-looking item; this is fine but should be marked as forecast rather than confirmed-fact.

**Verdict**: The narrative chain closes cleanly. Treating the failed plan assumptions transparently rather than papering over them is a positive signal.

---

## 4. Editorial quality

Four concrete edits for the visualisation deliverable (`03_weekly_report.md` / `.html`):

1. **Redundant title** — the Markdown title "ESG每周研究周报" doubles up "每周" (weekly) and "周报" (weekly report). Trim to "ESG每周研究简报" or "ESG周度研究报告".

2. **Speculative dates in the next-week watch list** — "CATL 2025 ESG report expected on 2026-05-06" is a forecast, not an announced calendar event. The Markdown already says "expected"; mirror this in the HTML and add a small footnote stating the date is not yet confirmed by the company.

3. **Order of CBAM scenario columns** — Table 3 lists 50 → 75.36 → 100 EUR price points; 75.36 (the actual Q1 certificate price) sits in the middle and risks being read as a "baseline assumption". Add a footnote: "EUR 75.36/tCO₂ is the verified 2026 Q1 certificate price; 50 and 100 are sensitivity points only."

4. **Soften absolutist phrasing** — the executive summary's "coal-H₂ export economic viability is essentially zero" is more categorical than the underlying analysis. Align with the body text by saying "unabated coal-H₂ exports to the EU face severe profit compression" — the same conclusion, calibrated to the supporting evidence.

---

## 5. Recommended revisions

Prioritised:

- **P1 (fix before sending to PM)**: Soften the "coal-H₂ viability essentially zero" line in the executive summary; replicate the change in the HTML version.
- **P2**: Add an "unconfirmed by issuer" footnote to the 2026-05-06 CATL ESG-report watch-list entry.
- **P2**: Add a footnote to the CBAM scenario table clarifying which price column is the verified 2026 Q1 value vs. sensitivity scenarios.
- **P3 (nice-to-have)**: Trim the redundant "weekly … weekly" doubling in the Markdown report title.
- **P3**: Tag the next-week watch list entries by status (confirmed event vs analyst forecast) so readers don't read forecasts as scheduled.

No data corrections required; all numbers carry through cleanly between research and report stages.

---

## 6. Overall grade

**`pass`**

Justification: All six expected deliverables are present, all 11 spot-checked cross-step values match, all five plan questions close fully through to the report, and the research stage transparently handled plan assumptions that failed verification; the remaining edits are wording refinements that the analyst can make in a light pass before circulation.

---

```json
{"follow_ups":[]}
```
