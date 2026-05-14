---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review · Financials Weekly (2026-W18, coverage 2026-04-27 to 2026-05-01)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review · Financials Weekly (2026-W18, coverage 2026-04-27 to 2026-05-01)

- Reviewer: QA Manager
- Scope: Step 01 (research plan) / Step 02 (zh + en research drafts) / Step 03 (HTML + Markdown weekly report)
- Audit lens: upstream artifact presence, cross-step numeric consistency, question-to-answer closure, editorial quality

---

## 1. File manifest

| Declared file | Exists | Size | Note |
|---|---|---:|---|
| `01_weekly_plan.md` | yes | 3,660 B | Plan complete: scope, 5 questions, 4 chart suggestions, deliverable outline. |
| `01_weekly_plan.en.md` | yes | 4,024 B | English version mirrors zh structurally. |
| `02_weekly_research.md` | yes | 18,333 B | **Important caveat**: file mtime 01:19, **after** `03_weekly_report.md` (01:18) and `03_weekly_report.html` (01:17). Step 03 wrote the report before this zh draft landed, hence the now-stale footnote in the report claiming the zh research file was missing. Needs to be reconciled (see §5). |
| `02_weekly_research.en.md` | yes | 20,808 B | English research draft: 6 questions + data tables + limitations, complete. |
| `03_weekly_report.html` | yes | 36,475 B | HTML weekly report with inline SVG charts, traffic-light risks, watch list. |
| `03_weekly_report.md` | yes | 11,874 B | Markdown report mirroring the HTML; trailing footnote is stale. |

> Bottom line: **all 6 files present, none missing**. The ordering glitch (zh research draft landing after the report) explains the report's stale footnote, which is a structural defect to fix before PM hand-off.

---

## 2. Cross-step consistency

Six numerical / date / ticker spot-checks:

| # | Item | Plan (01) | Research (02 zh) | Report (03 md/html) | Consistent? |
|---|---|---|---|---|---|
| 1 | Big-5 Q1 NPAT YoY (ICBC / CCB / ABC / BOC / PSBC) | not specified | +3.31% / +3.53% / +4.52% / +2.80% / +1.90% | +3.31% / +3.53% / +4.52% / +2.80% / +1.90% | ✓ |
| 2 | Ping An Q1 NBV amount / YoY | not specified | RMB 22.389bn / +39.8% (rendered as 223.89 亿元) | RMB 22.389bn / +39.8% (rendered as 22.389 十亿) | values consistent; unit base differs (亿 vs 十亿) — same number, different reading granularity. |
| 3 | UST 10Y / CGB 10Y (04-27 → 04-30) | listed only as data need | 4.35% → 4.40% / 1.7697% → 1.7829%; CN-US 10Y spread −261.71bp | 4.35% → 4.40% / 1.7697% → 1.7829%; spread −261.71bp | ✓ |
| 4 | A-share 4-day average daily turnover | listed only as data need | ~ RMB 26,144.5 bn | ~ RMB 26,144.50 bn ≈ 2.61tn | ✓ |
| 5 | Sub-sector weekly returns (Banks / Insurance / Brokers / FinTech / HSF) | not specified | −0.48% / +1.32% / +1.70% / +0.83% / +0.19% | −0.48% / +1.32% / +1.70% / +0.83% / +0.19% | ✓ |
| 6 | Single-name weekly returns (601398 / 601318 / 600036 / 3988.HK / 2318.HK / 0388.HK) | tickers only | −1.72% / +2.75% / −2.82% / −1.75% / +3.36% / +0.19% | −1.72% / +2.75% / −2.82% / −1.75% / +3.36% / +0.19% | ✓ |

> Numeric consistency is solid; no contradictions. **The one cosmetic issue** is unit base: the research draft uses 亿元 (100M-RMB) while the report tables use 十亿 (bn). When the two are read side by side a reader has to do the conversion themselves. Recommend showing both at first occurrence in the report ("RMB 86.941bn ≈ 869.41 亿元").

---

## 3. Narrative coherence

### 3.1 Plan's 5 core questions vs. downstream coverage

| Planner question | Answered in research? | Carried into report conclusion? | Verdict |
|---|---|---|---|
| Q1 Has NIM bottomed? | yes (§ Question 1) | yes ("bottoming, not yet reversed") | closed ✓ |
| Q2 Insurance liability inflection? | yes (§ Question 2) | yes ("inflection clearer") | closed ✓ |
| Q3 Asset-quality fears overdone? | yes (§ Question 3) | yes ("manageable, not gone") | closed ✓ |
| Q4 Fed-policy financial premium? | yes (§ Question 4) | yes ("compresses valuations, not yields") | closed ✓ |
| Q5 Wealth-management resilience? | yes (§ Question 5) | yes ("broker chain stronger than banks") | closed ✓ |

### 3.2 Topics raised in the plan but dropped downstream

| Plan-listed topic | Picked up in research/report? | Impact |
|---|---|---|
| China April official manufacturing / non-manufacturing PMI (released 04-30) | **No.** Neither the research draft nor the report shows the actual PMI prints; the report only mentions the Caixin services PMI under "next-week watch". | Low-to-medium. The plan explicitly listed this under "macro data needs"; one data line confirming or refuting "credit demand recovering" is owed. |
| Hong Kong e-HKD cross-border pilot update | **No.** Neither research nor report mentions it. | Low. Event density is high this week and the topic is tangential, but the research draft's "limitations" section should at least acknowledge the deliberate skip. |
| Regional broker M&A speculation | **Partial.** No standalone subsection in research, but the report's "next-week watch" tracks it. | Low. Acceptable; could be tightened with 1–2 lines in research summarising scope and regulatory window. |

### 3.3 Visualization mapping

| Planned chart | Research data table | Report HTML | Verdict |
|---|---|---|---|
| Sector heatmap | Fig 1 table | ✓ | complete |
| Q1 results radar | Fig 2 table | ✓ | complete |
| US-CN yield curve | Fig 3 table | ✓ | complete |
| NBV decomposition bar chart | Fig 4 table | ✓ | complete; only Ping An has the volume-vs-mix split, others show YoY only — consistent with research's stated limitation. |

### 3.4 Unsupported claims

- Report §IV Question 4: "3988.HK dividend yield ~4.9%, 2318.HK ~4.7%". This is a **rough estimate** based on FY2025 dividend and the 04-30 close, and the research draft's "limitations" section calls it out — **but the report body does not**. Add a parenthetical "(rough estimate based on FY2025 dividend, ex-tax, ex-FX)".
- Report §III Question 5 cites "PSBC fee & commission income +16.83%, Ping An Bank wealth-management fee income +55.1%". The research draft provides source links; the report drops them. Add the citations to the report's "data sources" footer.

---

## 4. Editorial quality

Concrete edits for `03_weekly_report.md` / `03_weekly_report.html`:

1. **Remove / update the stale footnote.** Line 167 of `03_weekly_report.md` claims the simplified-Chinese `02_weekly_research.md` was missing. The workspace shows it exists (18,333 B, mtime 01:19). **Action**: delete or rewrite to "the zh research draft was iterated alongside this report; figures are reconciled".
2. **Unify units.** Report §III Question 1 tables use "Revenue (bn) / NPAT (bn)", while the research draft uses 亿元. Pick one primary base and either declare it in the table header or include both in a footer; recommend keeping 亿元 to match exchange filings.
3. **Standardise sector index labels.** Plan and research use "证券Ⅱ" (Roman II); the report mixes "券商II" (Latin II). Use the SW-Industry official label "证券Ⅱ" throughout to avoid the impression of two different indices.
4. **Add an as-of date stamp on every chart.** None of the four HTML charts (heatmap, radar, yield curve, NBV) carries an "as-of 2026-04-30" stamp. PM forwards strip context; without the stamp readers may assume the visuals are still updating. Add it to each chart title or top-right corner.

---

## 5. Recommended revisions (priority-ranked)

1. **High**: in `03_weekly_report.md`, line 167, delete or rewrite the stale "zh research draft missing" footnote. The zh draft exists — leaving the footnote in place misleads PMs about pipeline integrity.
2. **High**: insert one paragraph on the actual China April official manufacturing / non-manufacturing PMI prints (NBS, 04-30 release) and tie 2 sentences of interpretation back to either Question 1 (NIM / credit demand) or Question 5 (wealth-management). The plan explicitly listed this data point; both downstream artifacts skipped it.
3. **Medium**: annotate the two H-share dividend-yield estimates in §IV Question 4 (3988.HK ≈ 4.9%, 2318.HK ≈ 4.7%) with "(rough estimate based on FY2025 dividend and 04-30 close, pre-tax, pre-FX)".
4. **Medium**: in the "data sources" footer of `03_weekly_report.md`, add citations for PSBC and Ping An Bank wealth-management fee income (the links exist in the research draft).
5. **Low**: standardise sector index labels to "证券Ⅱ / 保险Ⅱ / 银行Ⅱ / 互联网金融"; add as-of date stamps to all four HTML charts; show both 亿 and 十亿 at first occurrence in the report.
6. **Low**: extend the research draft's "limitations" with one line: April official PMI and the e-HKD cross-border pilot are not covered this week — to be picked up in next week's report or as a thematic piece.

---

## 6. Overall grade

**needs-revision**

Justification: cross-step numeric consistency is strong, all five planner questions are closed, and the visualization layer maps cleanly to the plan; but the report's stale footnote about the zh research draft and the missed April-PMI data point listed in the plan are structural defects that must be fixed before the PM read-through. The remaining edits are readability and traceability polish, not blockers.

---

```json
{"follow_ups":[
  {"to":"china-macro","subject":"April official PMI vs. financials credit-demand thesis","question":"Using the China April official manufacturing PMI and non-manufacturing PMI prints released by NBS on 2026-04-30 (with key sub-indices: new orders, new export orders, production, employment, prices), please provide: (1) the data points themselves vs. consensus and vs. the prior month, (2) what the PMI implies for effective credit demand, and whether it supports or challenges this week's two core financials calls — 'bank NIM is bottoming, not yet reversing' and 'wealth-management resilience is in the broker chain rather than the banks', and (3) if the upcoming Caixin services PMI (May release) diverges from the official April non-manufacturing PMI, what that divergence would mean for non-bank financials. Self-contained, cite specific values and sources.","priority":"high"}
]}
```
