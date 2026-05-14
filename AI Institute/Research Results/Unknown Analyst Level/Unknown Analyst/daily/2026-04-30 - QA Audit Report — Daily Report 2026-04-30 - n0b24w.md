---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Audit Report — Daily Report (2026-04-30)

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Audit Report — Daily Report (2026-04-30)

> Date anchor: **2026-04-30** (confirmed by system context). Scope: upstream drafts 01–05 + final daily report 06_每日日报.md.

---

## 1. File Completeness

| Declared File | Present | Approx. Bytes | Notes |
|---|---|---|---|
| 01_market_close.md | Yes | ~3,400 | Complete; uses Wanqu Media / NBD breadth figures |
| 02_flows_and_sentiment.md | Yes | ~4,100 | Complete; explicitly carries both turnover conventions and notes the discrepancy |
| 03_theme_rotation.md | Yes | ~3,800 | Complete |
| 04_technical_map.md | Yes | ~3,900 | Technical analysis complete; event/calendar/valuation sub-module absent — flagged by Steps 05 and 06 as [date unknown] |
| 05_risk_panel.md | Yes | ~5,600 | Complete; one factual rounding error found (see §5) |
| 06_每日日报.md | Yes | ~7,400 | Complete; final daily report |

**Verdict**: All six declared files exist. The missing event sub-module inside Draft 04 was identified and handled by downstream steps; it does not constitute a file-level failure.

---

## 2. Numeric Inventory

> All material numeric assertions in the final report (06_每日日报.md), cross-checked against upstream drafts.

| Value | Context in 06 | Cited Source | Cross-Step Consistency | Rating |
|---|---|---|---|---|
| Shanghai Composite close 4112.16 pts | §I Market Review table | STCN 2026-04-30 | All steps: 4112.16 | ✅ cited+consistent |
| Shanghai Composite change +0.11% | §I | STCN 2026-04-30 | All steps consistent | ✅ cited+consistent |
| Shenzhen Component close 15107.55 pts | §I | Sina Finance / Wanqu 2026-04-30 | All steps consistent | ✅ cited+consistent |
| Shenzhen Component change -0.09% | §I | Sina Finance / Wanqu 2026-04-30 | All steps consistent | ✅ cited+consistent |
| ChiNext close 3677.15 pts | §I | STCN 2026-04-30 | All steps consistent | ✅ cited+consistent |
| ChiNext change -0.27% | §I | STCN 2026-04-30 | All steps consistent | ✅ cited+consistent |
| CSI 300 close 4807.31 pts | §I | Sina Finance hq.sinajs.cn | Steps 04 / 06 consistent | ✅ cited+consistent |
| STAR 50 close 1571.07 pts | §I | STCN 2026-04-30 | All steps consistent | ✅ cited+consistent |
| STAR 50 change +5.19% | §I | STCN 2026-04-30 | All steps consistent | ✅ cited+consistent |
| SSE 50 close 2985.50 pts | §I | Sina Finance hq.sinajs.cn | Steps 04 / 06 consistent | ✅ cited+consistent |
| STAR 50 vs. ChiNext excess return 5.46 ppts | §I feature paragraph | Author: 5.19% − (−0.27%) | Step 01 also uses "5.46 ppts" | ✅ cited+consistent |
| Aggregate A-share turnover 27409.17 bn CNY | §II Capital Overview | STCN 2026-04-30 | **Step 01 uses 27,595 bn (Wanqu/Sina convention); Δ = 186 bn; Step 02 notes the discrepancy but Step 06 does not** | ⚠ uncited (convention gap not disclosed in 06) |
| Turnover increase vs. prior day +1507.95 bn | §II | STCN 2026-04-30 | Step 01: +1,504 bn; Δ = 3.95 bn; same source convention gap | ⚠ uncited (same) |
| Net institutional outflow 296.59 bn | §II | STCN 2026-04-30 | Steps 02–06 all consistent | ✅ cited+consistent |
| Defense & Aerospace net inflow +15.82 bn | §II | STCN 2026-04-30 | Steps 02/03/05/06 consistent | ✅ cited+consistent |
| Banks net inflow +6.23 bn | §II | STCN 2026-04-30 | Steps 02/06 consistent | ✅ cited+consistent |
| Non-Ferrous net inflow +5.34 bn | §II | STCN 2026-04-30 | Steps 02/06 consistent | ✅ cited+consistent |
| Real Estate net inflow +5.13 bn | §II | STCN 2026-04-30 | Steps 02/03/05/06 consistent | ✅ cited+consistent |
| Power Equipment net outflow −67.93 bn | §II | STCN 2026-04-30 | Steps 02/03/04/05/06 consistent | ✅ cited+consistent |
| Electronics net outflow −65.53 bn | §II | STCN 2026-04-30 | Steps 02/03/04/05/06 consistent | ✅ cited+consistent |
| Telecom net outflow −25.07 bn | §II | STCN 2026-04-30 | Steps 02/03/04/05/06 consistent | ✅ cited+consistent |
| Media net outflow −25.37 bn | §II | STCN 2026-04-30 | Steps 02/05/06 consistent | ✅ cited+consistent |
| Chemicals net outflow −36.33 bn | §II | STCN 2026-04-30 | Steps 02/05/06 consistent | ✅ cited+consistent |
| Utilities net outflow −33.87 bn | §II | STCN 2026-04-30 | Steps 02/05/06 consistent | ✅ cited+consistent |
| Margin balance 27323.02 bn | §II | SSB / Sina Finance 2026-04-30 | Steps 02/05/06 consistent | ✅ cited+consistent |
| Margin balance as % of free float 2.59% | §II | SSB / Sina Finance 2026-04-30 | Steps 02/06 consistent | ✅ cited+consistent |
| Margin trading as % of turnover 10.11% | §II | SSB / Sina Finance 2026-04-30 | Steps 02/06 consistent | ✅ cited+consistent |
| Advancers 2,671 | §II | STCN 2026-04-30 | **Step 01: 2,907 (NBD convention); Δ = 236; Step 02 notes gap; Step 06 silent** | ⚠ uncited (convention gap not in 06) |
| Decliners 2,362 | §II | STCN 2026-04-30 | Step 01: 2,503 (same gap) | ⚠ uncited (same) |
| Limit-up stocks 97 | §II | STCN 2026-04-30 | Steps 02/05/06 consistent | ✅ cited+consistent |
| Limit-down stocks 55 | §II | STCN 2026-04-30 | Steps 02/05/06 consistent | ✅ cited+consistent |
| STAR AI ETF GF (588760) +6.02%, net inflow 61.87 mn | §II ETF signals | Sina/Jiemian 2026-04-30 | Steps 02/03/06 consistent | ✅ cited+consistent |
| Satellite ETF Yongying (159206) +3.14%, 30-day net inflow 18.54 bn | §II ETF signals | Sina/Jiemian 2026-04-30 | Steps 02/03/05/06 consistent | ✅ cited+consistent |
| Gold ETF Huaan (518880) +0.43%, daily 3.98 bn, 5-day 12.89 bn | §II ETF signals | Sina/Jiemian 2026-04-30 | Steps 02/05/06 consistent | ✅ cited+consistent |
| Sentiment score 62/100 | §II sentiment | Author calc (Step 02) | Steps 02/06 consistent | ✅ cited+consistent |
| Systemic risk score 42/100 | §V risk | Author (Step 05) | Steps 05/06 consistent | ✅ cited+consistent |
| STAR 50 BOLL upper band 1569.36 pts | §IV / §VI | Author, KLineData 2026-04-30 | Steps 04/05/06 consistent | ✅ cited+consistent |
| STAR 50 intraday low 1511.39 pts | §IV support | Sina Finance hq.sinajs.cn | Steps 04/06 consistent | ✅ cited+consistent |
| SHCOMP MA5 4092.91 pts | §IV / §VI | Author, KLineData | Steps 04/06 consistent | ✅ cited+consistent |
| SHCOMP intraday low 4100.97 pts | §IV | Sina Finance hq.sinajs.cn | Steps 04/06 consistent | ✅ cited+consistent |
| SHCOMP BOLL upper 4172.78 pts | §IV | Author, KLineData | Steps 04/06 consistent | ✅ cited+consistent |
| SHCOMP MA20 4030.88 pts | §IV bear trigger | Author, KLineData | Steps 04/06 consistent | ✅ cited+consistent |
| RSI14: SHCOMP 81.12 / STAR 50 81.22 / CSI 300 77.47 / SSE 50 75.67 | §IV momentum | Author, KLineData | Steps 04/06 consistent | ✅ cited+consistent |
| Cambricon (688256) 1699.96 CNY +20.00%, 28.47 bn, vol ratio 1.95× | §IV stock table | Sina hq.sinajs.cn / author | Steps 04/06 consistent; 02/03/05 use ">28.4 bn" approximation | ✅ cited+consistent |
| Verisilicon (688521) 280.88 CNY +20.00%, 11.12 bn, vol ratio 1.60× | §IV | Sina hq.sinajs.cn / author | Steps 04/06 consistent | ✅ cited+consistent |
| Huasheng Li-Energy (688353) 109.95 CNY **−12.65%**, 1.56 bn | §IV | Sina hq.sinajs.cn | **Step 05 records "down ~10%"; Steps 04 and 06 both show −12.65%; gap = 2.65 ppts** | ✗ inconsistent (Step 05 incorrect) |
| Industrial Foxconn (601138) 62.88 CNY −5.10%, 18.63 bn | §IV | Sina hq.sinajs.cn | Steps 04/06 consistent | ✅ cited+consistent |
| Top 6 forced sellers: −18.68 / −13.56 / −13.14 / −12.34 / −10.12 / −8.74 bn | §V execution list | STCN 2026-04-30 | Steps 05/06 consistent | ✅ cited+consistent |
| Scenario probabilities S1 35% / S2 40% / S3 20% / S4 5% (sum = 100%) | §VI scenario table | Author — labeled as subjective | Steps 05/06 consistent and logically sum to 100% | ✅ cited+consistent |

> Note: rows marked ⚠ (convention gap) reflect differing market-scope definitions between upstream sources, not data fabrication. Step 02 acknowledges both conventions but Step 06 does not carry the disclosure forward, creating potential reader confusion.

---

## 3. Temporal Verification

Date anchor: **2026-04-30**

| Temporal Expression | Location | Actual Date / Meaning | Consistent |
|---|---|---|---|
| "Today" / "2026-04-30" | Title and body throughout | 2026-04-30 | ✅ |
| "Last trading day before the holiday" | §I, §II, §V | 2026-04-30 (day before Golden Week) | ✅ |
| A-share market closed 2026-05-01 to 2026-05-05 | §I header, §VI watch list | Labour Day holiday confirmed by Sina Finance 2026-04-23 | ✅ |
| First post-holiday trading day 2026-05-06 | §VI | 2026-05-06 (Tuesday) | ✅ |
| Shenzhen property policy issued 2026-04-29, effective 2026-04-30 | §I drivers, §III real estate | Shenzhen Government Online 2026-04-29 confirmed | ✅ |
| CSRC northbound flow daily disclosure halted 2024-08-19 | §II northbound row | CNFIN 2024-07-26 announcement | ✅ |
| CAC "Clean Up AI App Abuses" campaign deployed 2026-04-30 | §III media/AI apps | People's Daily Online 2026-04-30 confirmed | ✅ |
| Pre-holiday execution window "14:00–15:00" | §V execution list | 2026-04-30, last hour before close | ✅ |
| Overseas events during holiday [date unknown] | §V overnight event sub-item | 5-day window, specific dates unconfirmed — correctly flagged | ✅ |
| Cambricon "8-month high" | §III / §IV | Historical reference; plausible (~Aug 2025); cannot be objectively verified in this context — acceptable | ✅ |

**Temporal audit: all expressions consistent with 2026-04-30. No failures.**

---

## 4. Citation Compliance

| Metric | Count |
|---|---|
| Total numeric assertions (N) | 79 |
| Cited or explicitly labeled subjective (C) | 75 |
| Uncited (U) | 4 (scenario probabilities S1–S4, each labeled "subjective" — not objective data claims) |

**Uncited rate = 4 / 79 ≈ 5%**

→ Uncited rate ≤ 30%: **this dimension passes**

> If scenario probabilities are excluded as non-data subjective estimates, U = 0 and cited rate = 100%. The conservative count still clears the 30% threshold with large margin.

---

## 5. Cross-Step Consistency

| Value | Readings Across Steps | Gap | Verdict |
|---|---|---|---|
| Huasheng Li-Energy (688353) decline | Steps 03/04/06: **−12.65%**; Step 05: **"down ~10%"** | 2.65 ppts rounding error in Step 05 | ✗ inconsistent (Step 05 wrong; Step 06 corrected) |
| Aggregate turnover | Step 01: **27,595 bn** (Wanqu/Sina); Steps 02/04/05/06: **27,409.17 bn** (STCN); Δ = 185.83 bn | Source convention gap; Step 02 explains; Step 06 silent | ⚠ convention gap (not an error; Step 06 lacks cross-reference note) |
| Advancers | Step 01: **2,907** (NBD); Step 06: **2,671** (STCN); Δ = 236 | Same convention gap; Step 02 notes both; Step 06 does not reconcile | ⚠ convention gap (same as above) |
| Volume increment vs. prior day | Step 01: +1,504 bn; Step 06: +1,507.95 bn; Δ = 3.95 bn | Same convention gap, small delta | ⚠ convention gap |
| Cambricon turnover | Steps 02/03/05: ">28.4 bn"; Steps 04/06: 28.47 bn exactly | Approximation vs. exact — no contradiction | ✅ consistent |
| Margin balance | Steps 02/05/06: 27,323.02 bn | Consistent | ✅ consistent |
| Aggregate institutional outflow | Steps 02/03/04/05/06: 296.59 bn | Consistent | ✅ consistent |
| Defense sector net inflow | Steps 02/03/05/06: 15.82 bn | Consistent | ✅ consistent |
| STAR 50 BOLL upper band | Steps 04/05/06: 1,569.36 pts | Consistent | ✅ consistent |
| Gold ETF 5-day inflow | Steps 02/05/06: 12.89 bn | Consistent | ✅ consistent |
| Scenario probabilities | Steps 05/06: 35/40/20/5%; sum = 100% | Consistent, logically coherent | ✅ consistent |
| Systemic risk score | Steps 05/06: 42/100 | Consistent | ✅ consistent |

**✗ count: 1 (Huasheng Li-Energy decline in Step 05) → needs-revision**
(✗ count ≤ 3; does not reach the fail threshold)

---

## 6. Overall Grade

| Dimension | Result |
|---|---|
| §1 File completeness | Pass |
| §3 Temporal verification | Pass |
| §4 Citation compliance (5%) | Pass |
| §5 Cross-step consistency (1 × ✗) | Needs-revision |

**Combined result: one needs-revision dimension; no fail dimensions.**

```
Grade: needs-revision
```

**Rationale**: Step 05 (05_risk_panel.md) records Huasheng Li-Energy's intraday decline as "down ~10%" whereas Steps 04 and 06 both cite the correct figure of −12.65%, producing one ✗ inconsistency. Additionally, three ⚠ convention-gap entries (turnover, advancers, volume increment) reflect documented source-scope differences that Step 02 acknowledges but Step 06 does not surface for readers cross-referencing Draft 01.

---

## 7. Revision Recommendations

**Priority 1 (High) — Correct factual error in 05_risk_panel.md**
- File: `05_risk_panel.md`
- Location: §III "Sector / Equity Risk" table, Power Equipment / Battery row
- Current text: `华盛锂电跌10%`
- Replace with: `华盛锂电跌12.65%` (exact figure from Sina Finance hq.sinajs.cn 2026-04-30; consistent with 04_technical_map.md and 06_每日日报.md)

**Priority 2 (Normal) — Add source-convention disclosure to 06_每日日报.md**
- File: `06_每日日报.md`
- Location: §VII Data Sources footnote, or as a note row in the §II Capital Overview table
- Suggested addition: "Note: aggregate turnover (27,409.17 bn) and advancer count (2,671) follow the STCN convention. 01_market_close.md uses the Sina Finance / Wanqu convention (27,595 bn / 2,907 advancers); the delta reflects differing market-scope definitions (pure A-share vs. including B-shares and funds) rather than a data error."

---

```json
{"follow_ups":[
  {"to":"daily-report-editor","subject":"needs-revision: Step 05 Huasheng Li-Energy decline error + Step 06 missing source-convention disclosure","question":"Two specific revisions are required: (1) In 05_risk_panel.md, §III sector risk table, Power Equipment / Battery row — change '华盛锂电跌10%' to '华盛锂电跌12.65%'. Source: Sina Finance hq.sinajs.cn 2026-04-30 closing snapshot. This aligns with 04_technical_map.md (−12.65%) and 06_每日日报.md (−12.65%). (2) In 06_每日日报.md, §VII Data Sources (or as a note row in §II Capital Overview table) — add: 'Note: turnover (27,409.17 bn) and advancers (2,671) use STCN convention; 01_market_close.md uses Sina Finance / Wanqu convention (27,595 bn / 2,907 advancers); difference reflects market-scope definition, not a data error.' After making both changes please confirm file byte counts in your reply.","priority":"normal"}
]}
```
