---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review: Weekly Macro Report 2026-05-04 → 2026-05-08

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review: Weekly Macro Report 2026-05-04 → 2026-05-08

**Review date: 2026-05-10**
**QA Manager: Research Quality Lead**
**Scope: Step 01 plan + Step 02 research report (CN/EN pairs)**

---

## 1. File manifest

| Declared file | Present in workspace | Bytes | Note |
| :--- | :---: | ---: | :--- |
| `01_weekly_plan.md` | Yes | 3,512 | Simplified Chinese plan, well-structured |
| `01_weekly_plan.en.md` | Yes | 3,639 | English mirror, structurally identical |
| `02_weekly_research.md` | Yes | 5,699 | Simplified Chinese research report |
| `02_weekly_research.en.md` | Yes | 5,920 | English mirror, structurally identical |

All four upstream artifacts are present. No gaps.

---

## 2. Cross-step consistency

| Spot-check | Step 01 plan | Step 02 report | Match |
| :--- | :--- | :--- | :--- |
| US April NFP (actual / forecast / prior revised) | 115k / 70k / 185k | 115 / 70 / 185 (Table 1) | ✅ |
| Eurozone April CPI YoY | 3.0%, energy +10.9% | 3.0%, energy +10.9% (Table 4) | ✅ |
| Caixin Services PMI (April) | 52.6 (prior 52.1) | 52.6 (Table 2; March 52.1) | ✅ |
| RBA decision | +25bps to 4.10% | 4.10% (Table 3) | ✅ |
| FOMC dissent count vs. history | "4 dissents, unseen in 30 years" | "8-4, highest since 1992" | ✅ (1992 ≈ 34y) |
| China manufacturing PMI source | Plan lists only Caixin Services | Q3 mixes "Official Mfg 50.3%" with "Caixin Mfg 52.2%" (Table 2) | ⚠️ Two different surveys quoted side-by-side without disclosure |

**Key risk**: Section Q3 cites both an Official Mfg PMI (50.3) and a Caixin Mfg PMI (52.2) — a 1.9-point gap is wider than the typical Caixin-vs-NBS spread — without telling the reader these are two different surveys. The "New Export Orders 48.5%" reading is from the Official PMI but appears next to a Caixin-only Table 2, creating a cross-table mismatch risk.

---

## 3. Narrative coherence

The four planning questions map cleanly to Q1–Q4 of the research stage; no orphaned questions.

| Plan question | Research response | Assessment |
| :--- | :--- | :--- |
| Fed 4 dissents → neutral-rate path | Q1 dovish/hawkish split + CME FedWatch +25bps | ✅ Evidence chain complete |
| Eurozone stagflation → ECB May 21 cut | Q2 cites ECB cut probability collapsing 85% → 20% | ✅ but **probability source unattributed** (OIS? Reuters poll?) |
| China services-vs-exports divergence → structural shift | Q3 domestic recovery + EV anti-dumping headwind | ⚠️ "Long-term structural shift" is a strong claim from a single month |
| 115k NFP composition → recession risk | Q4 FT −142k / PT +257k / U-6 7.8% | ✅ Clear |

**Under-supported conclusions**:
1. Executive Summary's "recession risks becoming structural" — based on a single BLS Table A-9 print; needs ≥3-month trend.
2. Q2's "ECB cut probability collapsed from 85% to 20%" — no instrument or source cited.
3. Asset Allocation's "10Y yields back above 4.7%" — no rate-path data appears in the body of the report; conclusion is disconnected from evidence.

---

## 4. Editorial quality

1. **Table 3 column header "Dissents at Last Meeting" is ambiguous** — "last meeting" is a different date for each central bank. Add the actual meeting date per row, or note the convention in a footnote.
2. **Q3 mixes Caixin and Official PMI in one section without source tags** — split into two sub-tables or tag each row with `(Caixin)` / `(NBS)`.
3. **Q4 "Part-time +257,000, record high"** — "record high" is too absolute. Recast as "highest single-month increment since 20XX" with a baseline year.
4. **Executive Summary is overloaded** — "30-year fracture" + "rebound" + "painful transition" + "structural" all in three sentences. Move two of these down into the body sections; keep two anchor takeaways at the top.

---

## 5. Recommended revisions (prioritized)

- **P0 (must-fix)**: In Q3, explicitly distinguish Caixin vs. Official PMI; add a source row to Table 2. Without this a PM will read the two as one survey.
- **P0 (must-fix)**: Add a market-data citation to "ECB cut probability 85% → 20%" — recommend OIS implied probability with a snapshot date.
- **P1**: Soften Executive Summary's "recession risks becoming structural" with a conditional ("if the next 1–2 prints confirm…"), to avoid one-month-data-driven conviction.
- **P1**: Substantiate the 4.7% 10Y yield reference in Section 4 with a rate-path snapshot (in Q1 or a new sub-section).
- **P2**: Add a footnote to Table 3 specifying that dissent counts come from each central bank's most recent meeting, with the meeting date listed per row.
- **P2**: In Q4, replace "record high" with a verifiable formulation ("highest single-month increment since 2024").

---

## 6. Overall grade

**`needs-revision`** — Numerical accuracy and plan-to-research mapping both clear; however, the Caixin/Official PMI mixing in Q3 and the unsourced "85% → 20%" / "4.7%" anchor figures are hard blockers before this report is shown to a PM. Estimated rework: ≤30 minutes.

---

```json
{"follow_ups":[
  {"to":"global-macro","subject":"Source the ECB 5/21 cut-probability move from 85% to 20%","question":"The Q2 section claims market-implied probability of an ECB cut on May 21 collapsed from 85% to 20%, but cites no instrument or snapshot dates. Please pull OIS-implied probabilities (or a Reuters/Bloomberg consensus poll) for two snapshots — 2026-05-04 (pre-Eurozone CPI release) and 2026-05-08 (NFP day) — and identify which input drove the repricing the most: energy prices, the CPI sub-component mix, or ECB speaker commentary.","priority":"high"}
]}
```
