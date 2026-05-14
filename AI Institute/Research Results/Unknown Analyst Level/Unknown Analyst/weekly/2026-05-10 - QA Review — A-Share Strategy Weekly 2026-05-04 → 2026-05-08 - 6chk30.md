---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review — A-Share Strategy Weekly (2026-05-04 → 2026-05-08)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review — A-Share Strategy Weekly (2026-05-04 → 2026-05-08)

**Reviewer:** QA Manager  **Review date:** 2026-05-10  **Scope:** Step 01 weekly plan + Step 02 weekly research

## 1. File manifest

| Declared file | Present in workspace | Bytes | Note |
| :--- | :--- | :--- | :--- |
| 01_weekly_plan.md | Yes | 3984 | Chinese plan, structurally complete |
| 01_weekly_plan.en.md | Yes | 4230 | English mirror |
| 02_weekly_research.md | Yes | 5462 | Chinese research, with Q&A and 4 data tables |
| 02_weekly_research.en.md | Yes | 5747 | English mirror |

All four upstream deliverables are present. No gaps.

## 2. Cross-step consistency

| Item | 01 Plan | 02 Research | Match |
| :--- | :--- | :--- | :--- |
| April exports YoY | +14.1% | +14.1% (consensus +4.5%) | ✅ |
| April imports YoY | +25.3% | +25.3% (consensus +10.2%) | ✅ |
| End-April FX reserves | USD 3.41T / +USD 68.4B | 3.41T / +68.4B | ✅ |
| Xi-Trump summit date | May 14, Beijing | Q1/Q3 cite May 14 | ✅ |
| STAR50 May-6 single-day | "surged 8%" | Table 1: +8.12% | ✅ |
| SSE Composite +1.65% definition | **Weekly** return (plan is explicit) | Table 1 labels it as **May-6 single-day** return | ⚠️ **Conflict**: same number is "weekly" in the plan and "single-day" in research Table 1. Must pick one. |
| STAR50 range performance | Single-day +8% | Q1 table 920.5 → 1005.2 = +9.2% (cumulative 5/6→5/8), but the prose still talks about "large single-day move" | ⚠️ **Mislabeled**: the Q1 table is a 3-day cumulative move presented as if comparing a pre/post-day snapshot. |

## 3. Narrative coherence

- All five Q1–Q5 questions from the plan are answered in the research stage. Mapping is clean.
- **Q1**: Valuation expansion is correctly attributed to the 60% upward revision of Huawei's 2026E AI-chip revenue, but the consensus 2026E EPS jump from 35% → 52% (+17pt) is not sourced (no broker survey snapshot or coverage count).
- **Q2**: The export-chain inflection thesis is well argued, but the research newly nominates "machinery, grid equipment, light industry" as preferred export-chain industries. The plan's data-needs list only mentioned semis, AI hardware, power equipment, coal, and oil & petrochem. The new industry list should be justified explicitly in the allocation section.
- **Q3**: The 4180 resistance call is internally consistent with the 5/8 turnover (RMB 1.2T) and the 15% decline in turnover ratio.
- **Q4**: The shift in implied probability of an MLF cut from 30% → 65% is the single most quantitative claim in the report but has no source (OIS-implied? sell-side survey?). Weakest piece of evidence in the document.
- **Q5**: Qualitative only — **no data table**, breaking the "method + table + interpretation + limitations" pattern used in the other four questions. The "quarter-scale persistence" claim lacks crowding-metric anchors.
- **Items in plan that never reached research**: northbound flows, margin-balance changes, April CPI/PPI forecast. Allocation advice introduces "high-end manufacturing" as an overweight without prior Q&A support.

## 4. Editorial quality

1. **Reconcile "weekly vs. single-day" labels.** Table 1 is titled "May-6 opening-day index performance," but +1.65% for the SSE Composite is the weekly figure per the plan. Either split into two columns (5/6 alone / full week) or correct the figures.
2. **Relabel Q1 table rows** "pre-May-6 / current May-8" to "pre-holiday close (4/30) / week close (5/8)" so the +9.2% is unambiguously cumulative, separate from the 5/6 single-day +8.12%.
3. **Add a small Q5 table** (tech vs. dividend crowding / fund flows) so it matches the template of Q1–Q4 and ties the persistence claim to a numeric threshold.
4. **The Executive Summary should give explicit index trigger levels** (e.g., trim above SSE 4180, add below 4050). Current advice is qualitative; a PM cannot directly act on it.
5. **Table 3's "20-day rolling correlation" cannot move from −0.45 to −0.62 in three sessions** mechanically. Rename to "daily returns" with rolling correlation shown as a single reference value.

## 5. Recommended revisions

In priority order (High → Low):

1. **[High] Fix the SSE +1.65% caliber** (weekly vs. single-day) and audit Table 1's other index figures for the same error.
2. **[High] Source the 30% → 65% MLF-cut probability in Q4**, or downgrade to a qualitative statement ("market repricing higher the odds of a May rate cut").
3. **[High] Add a quantitative Q5 table** (tech vs. dividend crowding / flows) so the recommendation to "gradually trim coal and energy" is properly supported.
4. **[Medium] Clarify Q1 table labels** as 4/30 close → 5/8 close, and split the prose into "5/6 single-day +8.12%, weekly cumulative +9.2%."
5. **[Medium] Justify "high-end manufacturing"** in the allocation block, either inside Q2's export-chain answer or via a new bullet — currently an unsupported call.
6. **[Low] Backfill the plan-flagged datasets** (northbound flows, margin balance, CPI/PPI forecast). At minimum acknowledge their absence under "limitations / to-track."
7. **[Low] Add a standalone risk section** (summit failure, export base-effect roll-off, AI-earnings disappointment). Currently absent throughout.

## 6. Overall rating

**needs-revision** — Framework is complete, Q&A mapping is clean, and the headline data points cross-check across steps; however, two real caliber conflicts (weekly/daily, Q1 table labeling), an unsourced MLF probability in Q4, and a Q5 lacking any data table will all draw immediate PM pushback and must be reworked before distribution.

```json
{"follow_ups":[
  {"to":"ashare-strategist","subject":"Export-chain vs. AI leadership through May","question":"Given April exports at +14.1% YoY and the 122-clause tariff being struck down, how persistent is the 'export chain' (machinery, grid equipment, light industry) outperformance versus 'AI hardware / semis' across the May 14 Xi-Trump summit window? Please give a 2–4 week relative-weight recommendation and quantify the export-chain downside if the summit produces no substantive deliverable.","priority":"high"}
]}
```
