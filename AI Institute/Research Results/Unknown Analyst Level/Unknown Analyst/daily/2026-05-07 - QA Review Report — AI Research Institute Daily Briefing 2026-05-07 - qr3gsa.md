---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report — "AI Research Institute Daily Briefing" 2026-05-07

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report — "AI Research Institute Daily Briefing" 2026-05-07

**Reviewer:** QA Manager
**Review Date:** 2026-05-07 (shell anchor: `date +%Y-%m-%d` = 2026-05-07)
**Scope:** Upstream drafts 01–05 + synthesized daily report `06_每日日报.md`

---

## 1. File Completeness

| Declared File | Present | Size (bytes) | Notes |
|---|---|---:|---|
| `01_market_close.md` | Yes | 12,235 | Complete, content normal |
| `01_market_close.en.md` | Yes | 13,648 | Complete |
| `02_flows_and_sentiment.md` | Yes | 13,195 | Complete; note internal dual-row conflict (see §5) |
| `02_flows_and_sentiment.en.md` | Yes | 15,048 | Complete |
| `03_theme_rotation.md` | Yes | 14,227 | Complete |
| `03_theme_rotation.en.md` | Yes | 16,261 | Complete |
| `04_technical_map.md` | Yes | 18,333 | Complete |
| `04_technical_map.en.md` | Yes | 19,910 | Complete |
| `05_risk_panel.md` | Yes | 15,005 | Complete; contains a labeling error (see §5) |
| `05_risk_panel.en.md` | Yes | 16,227 | Complete |
| `06_每日日报.md` | Yes | 20,274 | Complete — primary output; one company-name typo |
| `06_每日日报.en.md` | Yes | 20,548 | Complete |

**Verdict:** All 12 files are present and exceed the 200-byte minimum threshold. File completeness **passes**.

---

## 2. Numeric Inventory

The table below covers all materially important numeric assertions in `06_每日日报.md`, cross-referenced against upstream drafts 01–05. Aggregate citation-compliance counts are in §4.

| Value | Location in 06 / Upstream | Source | Cross-step consistency | Rating |
|---|---|---|---|---|
| SSE close 4,180.09 | §1.1 / 01 / 04 | EASTMONEY push2 2026-05-07 | 01=04=06 ✓ | ✅ cited+consistent |
| SSE +0.48% | §1.1 / 01 | Same | Consistent | ✅ cited+consistent |
| SZSE close 15,641.89 | §1.1 / 01 / 04 | Same | Consistent | ✅ cited+consistent |
| SZSE +1.18% | §1.1 / 01 | Same | Consistent | ✅ cited+consistent |
| ChiNext close 3,833.06 | §1.1 / 01 / 04 | Same | Consistent | ✅ cited+consistent |
| ChiNext +1.45% | §1.1 / 01 | Same | Consistent | ✅ cited+consistent |
| STAR50 close 1,678.89 | §1.1 / 01 / 04 | Same | Consistent | ✅ cited+consistent |
| STAR50 +1.32% | §1.1 / 01 | Same | Consistent | ✅ cited+consistent |
| CSI300 close 4,900.51 | §1.1 / 01 / 04 | Same | Consistent | ✅ cited+consistent |
| CSI300 +0.48% | §1.1 / 01 | Same | Consistent | ✅ cited+consistent |
| SSE50 close 3,029.19 | §1.1 / 01 / 04 | Same | Consistent | ✅ cited+consistent |
| SSE50 +0.09% | §1.1 / 01 / 03 | Same | Consistent | ✅ cited+consistent |
| CSI500 close 8,696.80 | §1.1 / 01 / 04 | Same | Consistent | ✅ cited+consistent |
| CSI500 +1.26% | §1.1 / 01 | Same | Consistent | ✅ cited+consistent |
| CSI1000 close 8,714.51 | §1.1 / 01 / 03 / 04 | Same | Consistent | ✅ cited+consistent |
| CSI1000 +1.63% | §1.1 / 01 / 02 / 03 / 04 | Same | Consistent | ✅ cited+consistent |
| Total A-share turnover CNY 3.14 tn | §1.1 / 01 / 02 / 03 / 04 / 05 | Sina Finance doc-inhxahrf8305269 | Consistent | ✅ cited+consistent |
| Volume decline −CNY 82.879 bn | §1.1 / 01 / 02 / 03 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| Advances 3,520 | §1.2 / 01 / 02 / 03 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| Declines 1,832 | §1.2 / 01 / 02 | Same | Consistent | ✅ cited+consistent |
| Limit-up 127 | §1.2 / 01 / 02 / 03 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| Limit-down 54 | §1.2 / 01 / 02 / 03 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| Total A-share main-force net outflow −CNY 31.868 bn | §2.1 / 02 / 05 | EASTMONEY push2 money-flow | Consistent | ✅ cited+consistent |
| Super-large-lot net outflow −CNY 22.97 bn | §2.1 / 02 | Same | Consistent | ✅ cited+consistent |
| Margin balance CNY 2,756.713 bn | §2.1 / 02 / 05 | Sina Finance doc-inhwzrtk7801202 | Consistent | ✅ cited+consistent |
| Margin daily increase +CNY 41.504 bn | §2.1 / 02 / 05 | Same | Consistent | ✅ cited+consistent |
| Margin as % of A-share turnover 10.82% | §2.1 / 02 / 05 | Same | Consistent | ✅ cited+consistent |
| ETF main-force net inflow +CNY 4.040 bn | §2.1 / 02 / 03 / 05 | EASTMONEY push2 ETF money-flow | Consistent | ✅ cited+consistent |
| **"ETF margin balance" CNY 113.975 bn** | **§2.1 / 05** | Stockstar URL | **02 row 19 labels this "ETF two-way margin" = 113.975 bn; 02 row 44 labels "ETF margin (financing-only)" = 105.475 bn — 05 & 06 apply the financing-only label to the two-way total** | **✗ inconsistent** |
| **ETF balance daily change +CNY 3.176 bn** | **§2.1 / 05** | Stockstar URL | **02 row 44 records +3.241 bn for the financing-only balance** | **✗ inconsistent** |
| ETF coverage ratio ≈12.7% | §2.1 / 05 | Derived: 4.040/31.868=12.69%≈12.7% (verified) | Consistent | ✅ cited+consistent |
| 华夏 CSI300 ETF net inflow +CNY 754 mn | §5 prose / 02 | EASTMONEY push2 ETF | Consistent | ✅ cited+consistent |
| 华泰柏瑞 Hang Seng Tech ETF +CNY 516 mn | §5 / 02 | Same | Consistent | ✅ cited+consistent |
| 新易盛 +7.85% | §2.2 / 02 / 03 / 04 | EASTMONEY push2 | Consistent | ✅ cited+consistent |
| 新易盛 main-force net inflow +CNY 2.556 bn | §2.2 / 02 / 03 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| 新易盛 close 563.50 | §4.2 / 04 / 05 | EASTMONEY push2 stock ranking | Consistent | ✅ cited+consistent |
| 新易盛 turnover CNY 28.914 bn | §4.2 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| 新易盛 volume ratio 1.46 | §4.2 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| 中天科技 +10.00% | §2.2 / 02 / 03 | EASTMONEY push2 | Consistent | ✅ cited+consistent |
| 中天科技 net inflow +CNY 1.319 bn | §2.2 / 02 / 03 | Same | Consistent | ✅ cited+consistent |
| 天齐锂业 −3.24% | §2.2 / 02 / 03 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| 天齐锂业 net outflow −CNY 2.091 bn | §2.2 / 02 / 03 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| 江波龙 net outflow −CNY 1.660 bn | §5.3 / 02 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| 天赐材料 net outflow −CNY 1.577 bn | §5.3 / 02 / 05 | Same | Consistent | ✅ cited+consistent |
| Three-stock combined net outflow ~CNY 5.147 bn | §5.3 / 05 | Same (2.091+1.479+1.577=5.147, verified) | Consistent | ✅ cited+consistent |
| Sentiment index 82/100 | §2 / 02 | Draft 02 composite calculation | Consistent | ✅ cited+consistent |
| Fiber-optic concept +5.32% | §3.1 / 01 / 03 | EASTMONEY push2 | Consistent | ✅ cited+consistent |
| CPO concept +5.26% | §3.1 / 01 / 03 | Same | Consistent | ✅ cited+consistent |
| Optical comm modules +4.98% | §3.1 / 01 / 03 | Same | Consistent | ✅ cited+consistent |
| Comm cable +6.65% | §3.1 / 01 / 03 | Same | Consistent | ✅ cited+consistent |
| Machine tools +5.27% | §3.1 / 01 / 03 | Same | Consistent | ✅ cited+consistent |
| Laser equipment +5.27% | §3.1 / 01 / 03 | Same | Consistent | ✅ cited+consistent |
| F5G concept +4.51% | §3.1 / 01 | Same | Consistent | ✅ cited+consistent |
| Education sector −7.97% | §3.2 / 01 / 03 / 05 | Same | Consistent | ✅ cited+consistent |
| Spandex −5.54% | §3.2 / 01 | Same | Consistent | ✅ cited+consistent |
| Helium concept −4.44% | §3.2 / 01 / 03 | Same | Consistent | ✅ cited+consistent |
| Thermal coal −4.50% | §3.2 / 01 / 03 / 05 | Same | Consistent | ✅ cited+consistent |
| Coal mining −4.24% | §3.2 / 01 / 03 / 05 | Same | Consistent | ✅ cited+consistent |
| Lithium mining concept −1.34% | §3.2 / 01 / 03 | Same | Consistent | ✅ cited+consistent |
| SSE RSI14 83.4 | §4.1 / 04 / 05 | EASTMONEY push2 K-line (calculated) | Consistent | ✅ cited+consistent |
| STAR50 RSI14 84.4 | §4.1 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| CSI300 RSI14 79.4 | §4.1 / 04 | Same | Consistent | ✅ cited+consistent |
| SSE MA5 4,127.71 | §4.1 / 04 | Same | Consistent | ✅ cited+consistent |
| SSE MA10 4,108.94 | §4.1 / 04 | Same | Consistent | ✅ cited+consistent |
| SSE MA20 4,057.92 | §4.1 / 04 | Same | Consistent | ✅ cited+consistent |
| SSE MA60 4,052.15 | §4.1 / 04 | Same | Consistent | ✅ cited+consistent |
| SSE near-term resistance 4,180.21 | §4.1 / 04 | Same | Consistent | ✅ cited+consistent |
| ChiNext MA5 3,714.45 | §4.1 / 04 | Same | Consistent | ✅ cited+consistent |
| STAR50 prior high 1,715.08 | §4.1 / 04 | Same | Consistent | ✅ cited+consistent |
| CSI300 MA5 4,830.69 | §4.1 / 04 | Same | Consistent | ✅ cited+consistent |
| CSI300 resistance 4,901.86 | §4.1 / 04 | Same | Consistent | ✅ cited+consistent |
| CSI1000 MA5 8,448.16 | §4.1 / 04 | Same | Consistent | ✅ cited+consistent |
| CSI1000 resistance 8,716.86 | §4.1 / 04 | Same | Consistent | ✅ cited+consistent |
| 通富微电 volume ratio 2.32 | §4.2 / 04 | EASTMONEY push2 stock ranking | Consistent | ✅ cited+consistent |
| 佰维存储 close 299.85 | §4.2 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| 佰维存储 net outflow −CNY 925 mn | §4.2 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| 亿纬锂能 close 71.81 | §4.2 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| 亿纬锂能 −4.94% | §4.2 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| 亿纬锂能 net outflow −CNY 1.479 bn | §4.2 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| 香农芯创 close 189.18 | §4.2 / 04 / 05 | Same | Consistent (but §7 prose misspells name as "香南芯创") | ✅ cited+consistent (editorial note) |
| 香农芯创 net outflow −CNY 1.147 bn | §4.2 / 04 / 05 | Same | Consistent | ✅ cited+consistent |
| Systemic risk score 3.0/5.0 | §5.1 / 05 | Draft 05 composite | Consistent | ✅ cited+consistent |
| Technical overbought score 4 | §5.1 / 05 | Same | Consistent | ✅ cited+consistent |
| Leverage concentration score 4 | §5.1 / 05 | Same | Consistent | ✅ cited+consistent |
| Main-force vs. ETF divergence score 3 | §5.1 / 05 | Same | Consistent | ✅ cited+consistent |
| Sector concentration 44.8% (top-5% stocks) | §5.1 | factor-analyst crowding report (recent_reports.md) | Not in drafts 01–05; has external citation | ⚠ uncited (upstream-draft level) |
| Volume cooldown score 2 | §5.1 / 05 | Same | Consistent | ✅ cited+consistent |
| Market breadth score 3 | §5.1 / 05 | Same | Consistent | ✅ cited+consistent |
| Moving-average buffer score 1 | §5.1 / 05 | Same | Consistent | ✅ cited+consistent |
| US Mar Core PCE 3.2% | §5.2 | global-macro analyst report 2026-05-07 | Not in 01–05; cited to external analyst | ⚠ uncited (upstream-draft level) |
| Michigan 1-yr inflation expectation 4.8% (Apr) | §5.2 | Same | Same | ⚠ uncited (upstream-draft level) |
| CME FedWatch Dec hold probability ~51.3% | §5.2 | Same | Same | ⚠ uncited (upstream-draft level) |
| Powell term end 2026-05-15 | §5.2 / §7 | Same | Same | ⚠ uncited (upstream-draft level) |
| Brent year-high ~$126 | §5.2 | global-macro / fx-strategist reports | Same | ⚠ uncited (upstream-draft level) |
| Brent May-6 ~$106.52 | §5.2 | Same | Same; math check: 126×(1−0.16)=105.84≈106.52, consistent with "~16%" | ⚠ uncited (upstream-draft level) |
| May lock-up: 118 companies, CNY 205.84 bn | §5.4 | Eastmoney URL + A-share strategist report | Not in 01–05; URL cited | ⚠ uncited (upstream-draft level) |
| YoY lock-up increase 75.53% | §5.4 | Same | Same | ⚠ uncited (upstream-draft level) |
| 宏景科技 unlock CNY 21.07 bn (41.91% float) | §5.4 | A-share strategist + cnstock URL | Not in 01–05 | ⚠ uncited (upstream-draft level) |
| 芯联集成 unlock 1.44 bn shares (17.18% float) | §5.4 | Same | Same | ⚠ uncited (upstream-draft level) |
| Scenario 1 probability ~55% | §6 / 05 | Draft 05 | Consistent | ✅ cited+consistent |
| Scenario 2 probability ~30% | §6 / 05 | Draft 05 | Consistent | ✅ cited+consistent |
| Scenario 3 probability ~15% | §6 / 05 | Draft 05 | Consistent | ✅ cited+consistent |
| 天启 constellation 41 satellites in orbit | §3.3 / 03 | NBD article nbd.com | Consistent | ✅ cited+consistent |
| Quantum concept: 15 stocks net bought (3 > CNY 10 mn) | §3.3 / 03 | Stockstar | Consistent | ✅ cited+consistent |
| Nvidia Q1 FY2027 call 2026-05-20 | §7 / 03 / 05 | Nvidia IR calendar | Consistent | ✅ cited+consistent |
| Google I/O 2026-05-19–20 | §7 / 03 | io.google/2026/ | Consistent | ✅ cited+consistent |
| COMPUTEX 2026-06-02–05 | §7 / 03 | computextaipei.com | Consistent | ✅ cited+consistent |
| Apple WWDC 2026-06-08–12 | §7 / 03 | developer.apple.com | Consistent | ✅ cited+consistent |

---

## 3. Temporal Anchor Validation

Date anchor: 2026-05-07 (confirmed via shell `date +%Y-%m-%d`).

| Time expression | Location | Maps to | Consistent |
|---|---|---|---|
| "Today" / report date | 06 header / throughout | 2026-05-07 | ✅ |
| "Previous trading day" (baseline for −CNY 82.879 bn) | 01 / 02 / 05 / 06 | 2026-05-06 (confirmed by margin timestamp) | ✅ |
| "Tomorrow / next trading day 2026-05-08" | 01 / 02 / 03 / 04 / 05 / 06 | 2026-05-08 (next session after 2026-05-07) | ✅ |
| "Next 1–3 trading days" | 03 / 06 | 2026-05-08 to 2026-05-12 | ✅ |
| "May 11" (宏景科技 lock-up) | 06§5.4 | 2026-05-11 (4 natural days ahead) | ✅ |
| "US CPI May-12 / PPI May-13" | 06§5.2 / 06§7 | 2026-05-12 / 2026-05-13 | ✅ (from A-share strategist report, no calendar conflict) |
| "Powell term end 2026-05-15" | 06§5.2 / 06§7 | 2026-05-15 (8 natural days ahead) | ✅ |
| Nvidia earnings call 2026-05-20 | 06§7 / 03 / 05 | 2026-05-20 (Nvidia IR official calendar) | ✅ |
| Google I/O 2026-05-19–20 | 06§7 / 03 | 2026-05-19–20 | ✅ |
| COMPUTEX 2026-06-02–05 | 06§7 / 03 | 2026-06-02–05 | ✅ |
| Apple WWDC 2026-06-08–12 | 06§7 / 03 | 2026-06-08–12 | ✅ |
| Satellite IoT approval reported 2026-05-07 | 03 / 06 | 2026-05-07 (same-day news) | ✅ |
| Northbound disclosure change from 2024-08-19 | 02 / 05 / 06 | 2024-08-19 (historical fact) | ✅ |
| 05 draft: "FOMC date unknown" vs. 06: Powell term May-15 | 05§2.1 vs. 06§5.2 | Different subject: FOMC meeting date vs. Fed Chair tenure; not a contradiction | ✅ |

**Temporal validation verdict:** All time expressions are consistent with the 2026-05-07 anchor. **Passes.**

---

## 4. Citation Compliance

| Category | Count |
|---|---:|
| Total specific numeric assertions (N) | ~155 |
| Cited (C): inline source attributed — push2 API, Sina Finance URLs, recent_reports analyst sub-reports | ~143 |
| Uncited (U): no source from upstream drafts 01–05 (includes macro data and unlock data cited only from external analysts in recent_reports.md) | ~12 |
| **Uncited rate U/N** | **~7.7%** |

**Note:** Macro figures in §5.2 (Core PCE, Michigan expectations, CME FedWatch) and lock-up data in §5.4 originate from analyst sub-reports in `recent_reports.md` (global-macro, ashare-strategist, fx-strategist). They carry explicit source labels and are not fabricated; however, they do not appear in the 01–05 upstream draft chain and therefore count as "uncited at the upstream-draft level."

Uncited rate 7.7% is well below the 30% pass threshold. **Citation compliance: Pass.**

---

## 5. Cross-Step Consistency

| Data point | 02_flows reading | 05_risk_panel / 06 reading | Delta | Status |
|---|---|---|---|---|
| **ETF balance (label + value)** | Row 19: ETF **two-way** margin balance = CNY 113.975 bn / +3.176 bn; Row 44: ETF **financing-only** balance = CNY 105.475 bn / +3.241 bn (both citing the same Stockstar URL) | 05 & 06: labeled "ETF financing balance" but value = CNY 113.975 bn / +3.176 bn (i.e., the two-way total pasted under the financing-only label) | 05/06 mislabel the two-way total as financing-only; true ETF financing balance (CNY 105.475 bn) disappears from the daily report | ✗ inconsistent |

**Editorial note (does not count as numeric inconsistency):**
`06_每日日报.md` §7 observation 2 contains the typo "**香南**芯创" — the correct company name throughout all other source files is "**香农**芯创". This affects readability only; no numbers are affected.

**Cross-step consistency verdict:**
- Numeric inconsistencies: **1** (ETF balance label/value conflict between 02 row 44 and 05/06)
- Per grading rules: any ✗ triggers needs-revision; ≤ 3 items does not escalate to fail.

---

## 6. Overall Grade

| Dimension | Result |
|---|---|
| §1 File completeness | ✅ pass — all 12 files present and substantive |
| §3 Temporal anchor validation | ✅ pass — all time expressions consistent with 2026-05-07 |
| §4 Citation compliance | ✅ pass — uncited rate ~7.7%, well under 30% threshold |
| §5 Cross-step consistency | ⚠ needs-revision — 1 numeric discrepancy (ETF balance label/value mismatch) |

**Grading logic:** One dimension at needs-revision, zero dimensions at fail, no multiple needs-revision accumulation.

`Grade: needs-revision`

**One-line rationale:** The report is citation-complete and temporally consistent, but the ETF two-way margin balance (CNY 113.975 bn) was mislabeled as "ETF financing balance" in the 05→06 step, inadvertently erasing the distinct ETF financing-only figure (CNY 105.475 bn) that 02 reported in its detail table; this label-plus-value mix-up must be corrected in both 05 and 06 before the report can be cleared.

---

## 7. Revision Actions (needs-revision items only)

### Priority 1 — ETF balance label and value correction (files 05 and 06)

**Root cause:** `02_flows_and_sentiment.md` records two distinct ETF leverage figures from the same Stockstar URL:
- Row 19 (summary table): **ETF two-way margin balance** = CNY 113.975 bn / +3.176 bn (financing + short-selling combined)
- Row 44 (detail table): **ETF financing-only balance** = CNY 105.475 bn / +3.241 bn (long/financing side only)

The gap of ~CNY 8.5 bn represents the ETF short-selling (융券) balance, making both figures internally self-consistent. Drafts 05 and 06 picked up the two-way total (113.975 bn) but applied the financing-only label, producing a factual labeling error and suppressing the financing-only data point.

**`05_risk_panel.md` — row 44 of the liquidity risk table:**
- Current: `ETF margin (financing) balance | CNY 113.975 bn, +3.176 bn`
- Change to: `ETF two-way margin balance | CNY 113.975 bn, +3.176 bn` *(relabel "financing" → "two-way")*
- Add new row: `ETF financing-only balance | CNY 105.475 bn, +3.241 bn`

**`06_每日日报.md` — §2.1 core fund-flow table, ETF row:**
- Current: `ETF margin balance | CNY 1,139.75 bn | +31.76 bn` *(incorrect label and missing complement)*
- Change to: `ETF two-way margin balance | CNY 1,139.75 bn | +31.76 bn` *(relabel)*
- Add sub-row or note: `Of which ETF financing-only balance | CNY 1,054.75 bn | +32.41 bn`

---

### Priority 2 — Company-name typo correction (file 06 only)

**`06_每日日报.md` §7 observation 2 (original line ~210):**
- Current: `……storage chain (Biwei, Jangbolong, **Xiangnán** Xinchuang)……`
- Correct to: `……storage chain (Biwei, Jangbolong, **Xiangn**óng Xinchuang)……`
- Chinese: `香**南**芯创` → `香**农**芯创`

---

```json
{"follow_ups":[
  {
    "to":"ashare-strategist",
    "subject":"ETF two-way vs. financing-only margin balance mislabeling in daily report — please standardize for future issues",
    "question":"The 2026-05-07 daily report (06_每日日报.md §2.1) labeled the ETF two-way margin balance (CNY 113.975 bn / +3.176 bn, from Stockstar) as 'ETF financing balance', which conflicts with 02_flows row 44 that records the actual ETF financing-only balance at CNY 105.475 bn / +3.241 bn from the same source. For the next daily report, please: (1) present both metrics as separate rows — 'ETF two-way margin balance' (financing + short-selling combined) and 'ETF financing-only balance' (long side only); (2) verify from the Stockstar source which figure is the two-way total and which is the financing-only side so the label is definitively correct going forward.",
    "priority":"normal"
  }
]}
```
