---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Utilities Weekly Report — QA Review

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Utilities Weekly Report — QA Review
**Coverage week:** W18 2026 (2026-04-27 to 2026-05-01)
**Reviewer:** QA Manager
**Review date:** 2026-05-03

---

## 1. File Manifest

| Declared file | Exists in workspace | Notes |
|---|:---:|---|
| `01_weekly_plan.md` | Yes | 3,626 bytes, content complete |
| `01_weekly_plan.en.md` | Yes | 4,030 bytes, content complete |
| `02_weekly_research.md` | Yes | 22,835 bytes, all four analytical questions fully answered |
| `02_weekly_research.en.md` | Yes | 26,631 bytes, symmetric with the Chinese version |
| `03_weekly_report.html` | Yes | 39,131 bytes, self-contained HTML with embedded SVG charts |
| `03_weekly_report.md` | Yes | 14,412 bytes, plain-text companion version |

**All six expected files are present. No gaps.**

---

## 2. Cross-Step Consistency

Six key numbers/claims that appear in more than one step were spot-checked:

| Data Point | 02_weekly_research.md | 03_weekly_report.md | Status |
|---|---|---|:---:|
| China Yangtze Power 600900 Q1 recurring net profit | RMB 62.37bn, +19.20% YoY | RMB 62.37bn, +19.20% YoY | ✓ Match |
| March 2026 total observable GEC trades | 62.55mn certificates, 2.018mn/day equivalent | 62.55mn certificates, 2.018mn/day equivalent | ✓ Match |
| Guangdong spot price theoretical spread | Floor -50 RMB/MWh, cap 1,800 RMB/MWh, spread 1,850 RMB/MWh | 1,800 / -50 RMB/MWh, theoretical spread 1,850 RMB/MWh | ✓ Match |
| Shenzhen comprehensive water-tariff increase | RMB 3.45/m³ → RMB 3.90/m³, about +13.05% | +13.05% comprehensive water tariff | ✓ Match |
| CEA25 weekly performance | RMB 77.59/t → RMB 79.50/t, +2.46%; volume down about -61.9% | +2.46%, volume -61.9% | ✓ Match |
| Huaneng Power 600011 proxy gross profit per kWh | Approx. RMB 0.067/kWh | RMB 0.067/kWh | ✓ Match |

**All six data points are consistent across steps. No contradictions found.**

**Additional note (disclosure quality, not a contradiction):** Both the research draft and the final report explicitly flag that the "5 million GEC certificates traded on April 28" figure could not be verified through official NEA or national GEC platform sources. This is proactive data-quality disclosure, not an inconsistency.

---

## 3. Narrative Coherence

### 3.1 Planner questions → Research answers → Report conclusions

| Planning question (01_weekly_plan.md) | Research-stage answer (02) | Report conclusion (03) | Status |
|---|---|---|:---:|
| Q1: Which power companies have the most stable gross profit per kWh? | Hydro/integrated > nuclear > thermal > gas/water design | Section III-Q1: full table and analysis | ✓ Complete |
| Q2: Is active GEC trading a short-term policy rush or stable industrial demand? | Demand has formed; trading rhythm still affected by policy deadlines | Section III-Q2: conclusion and supporting data match | ✓ Complete |
| Q3: Which provincial spot markets offer better VPP spread revenue? | Guangdong > Shandong > Shanxi/Gansu > Yangtze River Delta/Shanghai | Section III-Q3: full provincial comparison table | ✓ Complete |
| Q4: How much valuation upside if water-tariff linkage is rolled out? | EBITDA +4%–+9%; EV/EBITDA midpoint +0.5–1.0x | Section III-Q4: type-by-type valuation table | ✓ Complete |

### 3.2 Planning-stage declared special topic versus actual report content

**Finding 1 (Orphaned topic):** `01_weekly_plan.md` Section 5 (Report Outline) explicitly stated:
> "Section 4: Special Topic — Evaluate the prospects of public REITs for water assets based on annual/Q1 reports."

`03_weekly_report.html` / `03_weekly_report.md` **do not contain a water-utility REITs section.** Instead, the coverage shifted to a water-tariff linkage valuation analysis. The substitution is substantively reasonable (REIT viability is downstream of tariff-reform progress), but the report **contains no disclosure that the planned topic was changed.** Readers have no way to know the plan was amended.

**Finding 2 (Nuclear earnings decline absent from summary-level narrative):** China National Nuclear Power 601985 posted recurring net profit YoY of -34.99%, the largest absolute decline among major players in the 20-company sample (exceeded only by China Three Gorges Renewables at -50.12%). The planning-stage earnings quality ranking explicitly placed nuclear in second place ("hydro/integrated > **nuclear** > thermal"), and the research draft preserved this ranking. However, `03_weekly_report.md` — both the one-line investment view and the six key conclusions — **makes no mention of the nuclear earnings decline.** The omission creates a logical gap between the stated earnings quality ranking and the headline narrative.

---

## 4. Editorial Quality

The following four concrete edit suggestions apply to `03_weekly_report.html` / `03_weekly_report.md`:

**Suggestion 1 (Executive summary is one overloaded sentence)**
The "one-line weekly view" at the top of the report is approximately 120 Chinese characters containing four parallel clauses, each carrying distinct information. Reading burden is high. Recommend converting to three executive-summary bullet points, each capped at around 30 characters, so portfolio managers can absorb the key messages at a glance.

**Suggestion 2 (Chart 3 title is inconsistent with its content)**
Chart 3 is titled "Q1 Unit Profit Comparison for Typical Thermal-Power Companies," but the first row in the table is Huaneng Hydropower 600025 (a hydro company, proxy gross profit RMB 0.083/kWh). Presenting it as a reference benchmark is analytically sound, but the headline title does not signal this. Recommend changing the title to "Q1 Gross Profit per kWh — Thermal Power Companies (with Hydro Reference)" and adding a first-row chart note: "Huaneng Hydropower (hydro) shown as reference benchmark; all other rows are thermal-power companies."

**Suggestion 3 (Chart 4 substitution explanation is buried)**
The research draft correctly replaced the originally planned Chart 4 (GEC weekly volume historical percentile distribution) with a March 2026 monthly structure chart, because daily data could not be verified. The substitution is disclosed in the research draft and in the chart footnote, but Key Conclusion #4 in the report describes GEC data without any hint that the planned chart was changed. Readers who skim only the conclusions will be unaware. Recommend adding a short footnote after Key Conclusion #4: "Note: Chart 4 has been replaced with a March 2026 monthly trading-structure chart because official daily GEC data for the target week were not publicly verifiable."

**Suggestion 4 (Chart 2 EUA interpolation labelling should match the risk-disclosure language)**
The risk section explicitly states that EUA daily settlement prices were not fully verifiable and that the chart uses interpolated/reference prices. In `03_weekly_report.md` Chart 2, the asterisk notation (`*`) identifies interpolated data points but there is no plain-language footnote explaining what the asterisk means. Recommend adding below Chart 2: `*: Public reference/interpolated price — not trading-grade data; do not use for valuation or hedging.` This aligns the in-chart label with the risk-section language.

---

## 5. Recommended Revisions

Ordered by priority:

- **[High]** Add a short paragraph to `03_weekly_report` disclosing that the planned water-utility REITs special topic was replaced by a water-tariff linkage valuation analysis, and briefly explaining the rationale (the tariff-reform framework provides the direct observable input; REITs viability depends on that reform progressing first).
- **[High]** Retitle Chart 3 to "Q1 Gross Profit per kWh — Thermal Power (Hydro Reference Included)" and add a first-row chart note identifying Huaneng Hydropower's reference role.
- **[Medium]** Add one bullet to the Key Conclusions section covering nuclear Q1 earnings pressure: e.g., "Nuclear: CNNP 601985 recurring profit -34.99% YoY; watch utilization-hour trends and scheduled maintenance."
- **[Medium]** Rewrite the "one-line weekly view" as three executive-summary bullet points (≤ 30 characters each).
- **[Low]** Add the Chart 4 substitution footnote after Key Conclusion #4.
- **[Low]** Add a plain-text EUA interpolation footnote below Chart 2 consistent with the risk section wording.

---

## 6. Overall Rating

**`needs-revision`**

Numerical consistency across all six spot-checked data points is clean, and all four analytical questions from the planning stage have complete, well-supported answers in both the research and visualization stages. However, two structural shortcomings prevent a pass: (1) the planned REITs special topic was silently replaced with a tariff-linkage analysis, creating undisclosed scope drift; and (2) the nuclear sector's substantial earnings decline (-34.99% for CNNP) is absent from all summary-level conclusions despite featuring in the stated earnings quality ranking. Both issues are editorial and structural, not factual errors. The report can reach pass status after the revisions listed above are applied.

---

## Appendix: Coordination Requests

```json
{"follow_ups":[
  {
    "to": "thematic-researcher",
    "subject": "Water utility public REIT viability: does the tariff-reform framework now support asset securitisation?",
    "question": "The W18 2026 utilities weekly plan designated 'water utility public REIT issuance prospects' as this week's special topic, but the delivered report replaced it with a water-tariff linkage valuation analysis. Please assess before next week's report: (1) If Shenzhen's 2025 water-tariff hearing proposal (comprehensive tariff from RMB 3.45/m3 to RMB 3.90/m3, +13.05%) is implemented, how does it affect the underlying-asset yield for water operators such as Xingrong Environment 000598 and Chongqing Water 601158 seeking public REIT issuance? (2) Does the current 'allowed cost plus reasonable return' pricing framework already meet the stable-cash-flow requirement for REIT approval, or are there remaining gaps? Please cite specific policy references so the findings can support a special-topic section in next week's utilities weekly.",
    "priority": "normal"
  },
  {
    "to": "ashare-strategist",
    "subject": "Nuclear Q1 earnings slump: structural or one-off, and implications for utilities sector allocation",
    "question": "Q1 2026 results show China National Nuclear Power 601985 with recurring net profit YoY -34.99% and CGN Power 003816 at -9.21%, while hydro (China Yangtze Power +19.20%) and gas utilities (Guizhou Gas +48.56%) performed significantly better. Please assess: (1) Are the nuclear Q1 declines driven primarily by lower utilization hours, concentrated maintenance schedules, or tariff pass-through issues? (2) If the nuclear earnings pressure is seasonal or one-time, does it change the current sector allocation framework (overweight hydro and adjustable-resource operators, underweight thermal)? Please base the answer on the latest public generation-volume and tariff disclosures so the conclusion can be incorporated into the revised W18 report.",
    "priority": "normal"
  }
]}
```
