---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report — Daily Briefing, 2026-05-05

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report — Daily Briefing, 2026-05-05

**Review Date:** 2026-05-05  
**Date Anchor:** `date +%Y-%m-%d` → `2026-05-05` (shell-confirmed)  
**Review Scope:** `06_每日日报.md` (synthesis report) and upstream files 01–05  
**Reviewer:** QA Manager

---

## 1. File Completeness

| Declared File | Present | Size (bytes) | Notes |
|---|---|---|---|
| `01_market_close.md` | ✅ Yes | 12,195 | Complete content with full citations |
| `01_market_close.en.md` | ✅ Yes | 14,168 | English version in sync |
| `02_flows_and_sentiment.md` | ✅ Yes | 12,591 | Complete content with full citations |
| `02_flows_and_sentiment.en.md` | ✅ Yes | 14,478 | English version in sync |
| `03_theme_rotation.md` | ✅ Yes | 9,865 | Complete content with full citations |
| `03_theme_rotation.en.md` | ✅ Yes | 11,676 | English version in sync |
| `04_technical_map.md` | ✅ Yes | 14,709 | Complete content with full citations |
| `04_technical_map.en.md` | ✅ Yes | 17,828 | English version in sync |
| `05_risk_panel.md` | ✅ Yes | 15,077 | Complete content with full citations |
| `05_risk_panel.en.md` | ✅ Yes | 17,221 | English version in sync |
| `06_每日日报.md` | ✅ Yes | 25,810 | Complete content with full citations |
| `06_每日日报.en.md` | ✅ Yes | 29,290 | English version in sync |

**Conclusion:** All 12 declared files are present, each well above the 200-byte minimum. No upstream gaps.

---

## 2. Numeric Inventory

The table below covers all material numeric claims in `06_每日日报.md` and cross-checks each against the upstream contributor files.

| # | Value | Location (file:section) | Cited Source | Cross-Step Consistency | Rating |
|---|---|---|---|---|---|
| 1 | SSE Composite close 4,112.16, +0.11% | 06§1.1; 01§index-table; 04§support-resistance | 同花顺 2026-04-30 | Consistent across 01/04/05/06 | ✅ cited+consistent |
| 2 | SZSE Component close 15,107.55, −0.09% | 06§1.1; 01; 04 | 同花顺 2026-04-30 | Consistent: 01/04/06 | ✅ cited+consistent |
| 3 | ChiNext close 3,677.15, −0.27% | 06§1.1; 01; 04 | 同花顺 2026-04-30 | Consistent: 01/04/06 | ✅ cited+consistent |
| 4 | CSI 300 close 4,807.31, −0.06% | 06§1.1; 01; 04; 05 | 同花顺 2026-04-30 | Consistent: 01/04/05/06 | ✅ cited+consistent |
| 5 | SSE 50 close 2,985.50, +0.61% | 06§1.1; 01; 04; 05 | 同花顺 2026-04-30 | Consistent: 01/04/05/06 | ✅ cited+consistent |
| 6 | STAR 50 close 1,571.07, +5.19% | 06§1.1; 01; 02; 03; 04; 05 | 同花顺 2026-04-30 | Consistent across all six steps | ✅ cited+consistent |
| 7 | BSE 50 close 1,330.09, −0.12% | 06§1.1; 01; 04 | 同花顺 2026-04-30 | Consistent: 01/04/06 | ✅ cited+consistent |
| 8 | Shanghai + Shenzhen + Beijing three-market turnover RMB 27,595 bn | 06§1.2; 01; 02; 03; 04; 05 | Sina Finance/GBA Media 2026-04-30 | Consistent across all steps | ✅ cited+consistent |
| 9 | Volume increase of RMB 1,504 bn vs. prior session | 06§1.2; 01; 02 | Sina Finance/GBA Media 2026-04-30 | Consistent: 01/02/06 | ✅ cited+consistent |
| 10 | SH+SZ two-market turnover RMB 27,409 bn, up RMB 1,508 bn | 06§1.2; 01 | 澎湃新闻 2026-04-30 | Consistent: 01/06; arithmetic check: 27,409 − 25,901 = 1,508 ✅ | ✅ cited+consistent |
| 11 | Advance/decline: 2,871 up / 2,459 down / 173 unchanged | 06§1.2; 01; 03; 04; 05 | 澎湃新闻 2026-04-30 | Consistent (澎湃 count) across 01/03/04/05/06; see §5 for cross-source note | ✅ cited+consistent |
| 12 | Stocks up ≥9%: 125; stocks down ≥9%: 41 | 06§1.2; 01; 02 | 澎湃新闻 2026-04-30 | Consistent: 01/02/06 | ✅ cited+consistent |
| 13 | Limit-up: 98 stocks; limit-down: 52 stocks | 06§1.2; 02 | 金融界/搜狐 2026-04-30 | Consistent: 02/06 | ✅ cited+consistent |
| 14 | Total-market institutional net outflow RMB −384.07 bn | 06§2.1; 02; 03; 05 | 证券时报/数据宝 2026-04-30 | Consistent: 02/03/05/06 | ✅ cited+consistent |
| 15 | STAR Market net inflow RMB +78.39 bn | 06§2.1; 02; 03; 05 | 证券时报/数据宝 2026-04-30 | Consistent: 02/03/05/06 | ✅ cited+consistent |
| 16 | ChiNext net outflow RMB −100.63 bn | 06§2.1; 02 | 证券时报/数据宝 2026-04-30 | Consistent: 02/06 | ✅ cited+consistent |
| 17 | CSI 300 constituent stocks net outflow RMB −178.78 bn | 06§2.1; 02 | 证券时报/数据宝 2026-04-30 | Consistent: 02/06 | ✅ cited+consistent |
| 18 | Defence/military net inflow RMB +27.11 bn | 06§2.1; 02; 03; 05 | 证券时报/数据宝 2026-04-30 | Consistent: 02/03/05/06 | ✅ cited+consistent |
| 19 | Electronics sector net inflow RMB +15.28 bn | 06§2.1; 02; 03 | 证券时报/数据宝 2026-04-30 | Consistent: 02/03/06 | ✅ cited+consistent |
| 20 | Power equipment sector net outflow RMB −93.18 bn | 06§2.1; 02; 03; 05 | 证券时报/数据宝 2026-04-30 | Consistent: 02/03/05/06 | ✅ cited+consistent |
| 21 | Telecoms sector net outflow RMB −56.63 bn | 06§2.1; 02; 03; 05 | 证券时报/数据宝 2026-04-30 | Consistent: 02/03/05/06 | ✅ cited+consistent |
| 22 | Huatai-PineBridge CSI 300 ETF net redemption −RMB 23.45 bn (−4.89 bn shares) | 06§2.2; 02; 03; 05 | 每日经济新闻 2026-04-30 | Consistent: 02/03/05/06 | ✅ cited+consistent |
| 23 | ChinaAMC SSE 50 ETF net redemption −RMB 22.74 bn (−7.52 bn shares) | 06§2.2; 02; 03; 05 | 每日经济新闻 2026-04-30 | Consistent: 02/03/05/06 | ✅ cited+consistent |
| 24 | E Fund CSI 300 ETF net redemption −RMB 12.20 bn (−2.63 bn shares) | 06§2.2; 02; 05 | 每日经济新闻 2026-04-30 | Consistent: 02/05/06 | ✅ cited+consistent |
| 25 | GF CSI 500 ETF net subscription +RMB 19.06 bn (+2.28 bn shares) | 06§2.2; 02; 03 | 每日经济新闻 2026-04-30 | Consistent: 02/03/06 | ✅ cited+consistent |
| 26 | ChinaAMC CSI 1000 ETF net subscription +RMB 10.41 bn (+3.04 bn shares) | 06§2.2; 02; 03 | 每日经济新闻 2026-04-30 | Consistent: 02/03/06 | ✅ cited+consistent |
| 27 | HFT Short-term Bond ETF net subscription +RMB 39.69 bn (+0.35 bn shares) | 06§2.2; 02 | 每日经济新闻 2026-04-30 | Consistent: 02/06 | ✅ cited+consistent |
| 28 | SH+SZ margin balance RMB 27,038.92 bn (as of 2026-04-29), daily +RMB 36.64 bn | 06§2.3; 02; 05 | 新浪财经/上海证券报 2026-04-30 | Consistent: 02/05/06 | ✅ cited+consistent |
| 29 | Shanghai net margin buy RMB −75.26 bn (buy RMB 1,357 bn, repay RMB 1,433 bn) | 06§2.3; 02; 05 | 证券之星融资融券 2026-04-30 | Consistent: 02/05/06 | ✅ cited+consistent |
| 30 | ETF margin balance RMB 1,160.89 bn; ETF margin financing RMB 1,075.32 bn (+RMB 29.19 bn) | 06§2.3; 02; 05 | 凤凰网财经/证券时报 2026-04-30 | Consistent: 02/05/06 | ✅ cited+consistent |
| 31 | Minsheng Jiayin CSI 300 ETF premium/discount 0.26%, exceeding 98th historical percentile | 06§2.3; 02; 05 | 新浪财经/经济观察网 2026-05-05 | Consistent: 02/05/06 | ✅ cited+consistent |
| 32 | Northbound total turnover RMB 3,506.82 bn (Shanghai Connect 1,688.77 bn; Shenzhen Connect 1,818.06 bn) | 06§2.4; 02; 05 | 证券之星北向资金 2026-04-30 | Consistent: 02/05/06 | ✅ cited+consistent |
| 33 | STAR 50 MA20 = 1,408.10; close 11.57% above MA20 | 06§1.1/§4.1; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06 | ✅ cited+consistent |
| 34 | SSE Composite MA20 = 4,030.88 | 06§4.1; 04 | 东方财富 K-line API 2026-05-05 | Consistent: 04/06 | ✅ cited+consistent |
| 35 | SSE Composite 60-day high 4,197.23 | 06§1.1/§4.1; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06 | ✅ cited+consistent |
| 36 | CSI 300 20/60-day common high 4,829.27 | 06§4.1; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06 | ✅ cited+consistent |
| 37 | STAR 50 near-term resistance / breakout target 1,580.52 | 06§4.1; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06 | ✅ cited+consistent |
| 38 | STAR 50 ATR14-extended target 1,622.24 (= 1,580.52 + ATR14 41.72) | 06§4.1/§5.3; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06; arithmetic check: 1,580.52 + 41.72 = 1,622.24 ✅ | ✅ cited+consistent |
| 39 | STAR 50 breakout-day low (key support) 1,511.39 | 06§4.1; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06 | ✅ cited+consistent |
| 40 | BSE 50 MA20 = 1,336.32; MA60 = 1,398.51 | 06§4.1; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06 | ✅ cited+consistent |
| 41 | Cambricon-U close 1,699.96 (+20%), turnover RMB 284.66 bn, volume ratio 2.60× | 06§3.1/§4.2; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06 | ✅ cited+consistent |
| 42 | Cambricon-U 20-day prior high (stop-loss ref.) 1,420.00 | 06§4.2/§5.3; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06 | ✅ cited+consistent |
| 43 | VeriSilicon close 280.88 (+20%), turnover RMB 111.24 bn, volume ratio 1.88× | 06§3.1/§4.2; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06 | ✅ cited+consistent |
| 44 | VeriSilicon 20-day prior high (stop-loss ref.) 258.65 | 06§4.2/§5.3; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06 | ✅ cited+consistent |
| 45 | China Great Wall close 19.82 (+9.99%), turnover RMB 83.21 bn, volume ratio 3.83× | 06§4.2; 04 | 东方财富 K-line API 2026-05-05 | Consistent: 04/06 | ✅ cited+consistent |
| 46 | China Great Wall 20-day prior high (stop-loss ref.) 18.20 | 06§4.2/§5.3; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06 | ✅ cited+consistent |
| 47 | Oclaro close 144.28 (+8.59%), turnover RMB 113.27 bn, volume ratio 1.42× | 06§4.2; 04 | 东方财富 K-line API 2026-05-05 | Consistent: 04/06 | ✅ cited+consistent |
| 48 | China Northern Rare Earth close 53.04 (+4.10%), volume ratio 2.99×, turnover RMB 143.02 bn | 06§3.1; 04 | 东方财富 K-line API 2026-05-05 | Consistent: 04/06 | ✅ cited+consistent |
| 49 | Kweichow Moutai close 1,384.79 (−1.17%), turnover RMB 73.16 bn, vol ratio 1.46×; broke 20-day low 1,399.87 | 06§3.2/§4.2; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06 | ✅ cited+consistent |
| 50 | Foxconn Industrial Internet close 62.88 (−5.10%), turnover RMB 186.34 bn, vol ratio 1.49×; 20-day low 51.47 | 06§3.2/§4.2; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06 | ✅ cited+consistent |
| 51 | InnoLight Technology close 525.79 (−2.09%), vol ratio 0.77×; 20-day low 441.19 | 06§4.2; 04; 05 | 东方财富 K-line API 2026-05-05 | Consistent: 04/05/06 | ✅ cited+consistent |
| 52 | CATL close 436.00 (−2.02%), vol ratio 0.81× | 06§3.2; 04 | 东方财富 K-line API 2026-05-05 | Consistent: 04/06 | ✅ cited+consistent |
| 53 | April manufacturing PMI 50.3%; production 51.5%; new orders 50.6% | 06§3.3; 03; 05 | NBS/Xinhua 2026-04-30 | Consistent: 03/05/06 | ✅ cited+consistent |
| 54 | High-tech manufacturing PMI 52.2%; equipment manufacturing PMI 51.8% | 06§3.3; 03; 05 | NBS/Xinhua 2026-04-30 | Consistent: 03/05/06 | ✅ cited+consistent |
| 55 | Cambricon Q1 net profit +185% YoY | 06§3.1/§7; 01; 03; 05 | 财联社 2026-04-30 | Consistent: 01/03/05/06 | ✅ cited+consistent |
| 56 | GigaDevice Q1 net profit +523% YoY | 06§3.1/§7; 01; 03; 05 | 财联社 2026-04-30 | Consistent: 01/03/05/06 | ✅ cited+consistent |
| 57 | VeriSilicon: AI-compute orders >90% of new bookings | 06§3.1/§7; 01; 03; 05 | 财联社 2026-04-30 | Consistent: 01/03/05/06 | ✅ cited+consistent |
| 58 | State Grid plans ~8,500 embodied-AI units, total investment ~RMB 6.8 bn | 06§3.1; 03; 05 | Sina Finance 2026-04-27 | Consistent: 03/05/06 | ✅ cited+consistent |
| 59 | STAR 50 turnover RMB 1,433.69 bn, volume ratio 1.64× | 04§priority conclusions | 东方财富 K-line API 2026-05-05 | 04 internally consistent; 06 omits this granular detail (reasonable) | ✅ cited+consistent |
| 60 | Systemic risk composite score 5.2/10 (🟡 Yellow) | 06§5.1; 05§II | Derived from upstream composite | Consistent: 05/06 | ✅ cited+consistent |
| 61 | Sub-scores: Macro/policy 3; Liquidity 5; Sector concentration 7; Single-name 5; Holiday gap 6 | 06§5.1; 05§II | Sub-scores same-sourced | Consistent: 05/06 | ✅ cited+consistent |
| 62 | Scenario A probability 50–55%; B 30–35%; C 15–20% | 06§5.3; 05§V | 05 analyst estimates | Consistent: 05/06 | ✅ cited+consistent |
| 63 | Holiday gap / external-info risk score 6/10 | 06§5.1; 05§II | [来源不明] — explicitly flagged | Consistent: 05/06 (both flag as "source unknown") | ⚠ uncited (transparently disclosed) |
| 64 | Semiconductor sector net inflow RMB 69.31 bn (appears in 03 but not in 06) | 03§capital-flow | Sina Finance 2026-04-30 | 03 contains this figure; 06 reports only electronics-sector +15.28 bn — different industry classification granularity, not a contradiction | ⚠ uncited in 06 (reasonable simplification) |
| 65 | Component-level arithmetic: SSE 12,761.95 + SZSE 14,647.17 + BSE 186.28 = 27,595.40 ≈ 27,595 bn | 04§index support table | 东方财富 K-line API | 04 internally consistent; matches 01/02/06 three-market total | ✅ cited+consistent |

**Summary:**
- Total numeric assertions N ≈ 65
- Cited C ≈ 63
- Uncited U ≈ 2 (items 63–64)
- Item 63 is proactively marked `[来源不明]` ("source unknown") in both 05 and 06 — this counts as transparent disclosure, not concealment.

---

## 3. Temporal Anchor Checks

**Date anchor confirmed:** `2026-05-05`

| Temporal Claim | Location | Actual Date | Consistent |
|---|---|---|---|
| "Today" is a Labour Day non-trading holiday | 06 throughout; 01–05 | 2026-05-05, Labour Day ✅ | ✅ |
| A-share closure 2026-05-01 to 2026-05-05 | 06 anchor; 01–05 | SSE announcement 2026-04-23 confirms ✅ | ✅ |
| Normal trading resumes 2026-05-06 | 06 throughout; 01–05 | SSE/SZSE notices consistent ✅ | ✅ |
| Baseline trading day: 2026-04-30 | 06 cover; 01–05 | Last trading day before Labour Day ✅ | ✅ |
| Northbound closed all day 2026-05-05 | 06§2.4; 02; 05 | HKEX Stock Connect Calendar 2026 ✅ | ✅ |
| FOMC meeting 2026-04-28 to 2026-04-29 completed | 06§5.1; 03; 05 | Fed calendar ✅ | ✅ |
| Next FOMC meeting 2026-06-16 to 2026-06-17 | 06§5.1; 03; 05 | Fed calendar ✅ | ✅ |
| Politburo meeting on 2026-04-28 | 06§3.3/§5; 03; 05 | Correct; consistent across steps ✅ | ✅ |
| Beijing Auto Show 2026-04-24 to 2026-05-03 | 06§3.1; 03 | 2026-05-05 > 2026-05-03 — show already ended; correctly cited as past catalyst ✅ | ✅ |
| Margin balance data as of 2026-04-29 | 06§2.3; 02; 05 | Correctly labelled as T−1 data ✅ | ✅ |
| ETF margin data as of 2026-04-29 | 06§2.3; 02; 05 | Correctly labelled as T−1 data ✅ | ✅ |
| Northbound net-buy disclosure change effective 2024-08-19 | 06§2.4; 02; 05 | 第一财经 2024-07-26 reporting ✅ | ✅ |
| SZSE notice dated 2025-12-22 | 06 anchor; 01 | Advance holiday notice — plausible ✅ | ✅ |

**Conclusion:** All temporal references are consistent with the shell-confirmed anchor date of 2026-05-05. Zero inconsistencies detected.

---

## 4. Citation Compliance

| Metric | Value |
|---|---|
| Total numeric assertions N | 65 |
| Cited C | 63 |
| Uncited U | 2 (both proactively disclosed) |
| Uncitation rate U/N | **3.1%** |

- **Verdict:** 3.1% ≤ 30% → **Pass on this dimension**
- **Note:** Both uncited items are disclosed transparently in the source documents (explicit `[来源不明]` tag for the holiday-gap risk score; the semiconductor RMB 69.31 bn figure is cited in 03 and the 06 synthesis simply uses a different level of industry granularity). Neither represents concealment.

---

## 5. Cross-Step Consistency

**All critical values are consistent across steps. The only divergences found are attributable to different data providers for the same date:**

| Value | Cross-Step Readings | Source Divergence | Judgment |
|---|---|---|---|
| Advancing stocks | 02: 2,877 (证券时报/数据宝); 01/03/04/05/06: 2,871 (澎湃新闻) | Same date, different data vendors; minor count-universe difference | ⚠ Cross-source divergence; 06 consistently uses 2,871 from 澎湃新闻 throughout — not an editorial error |
| Declining stocks | 02: 2,461 (证券时报/数据宝); 01/03/04/05/06: 2,459 (澎湃新闻) | Same as above | ⚠ Same — within normal vendor-difference range |

**Explanation:**
1. The two divergences above stem from different financial data aggregators (澎湃新闻 vs. 证券时报/数据宝) applying slightly different counts of eligible A-shares for the same session. Both figures are legitimate and cited. The final report (`06_每日日报.md`) adopts the 澎湃新闻 count (2,871 / 2,459) consistently throughout, with a clear source tag.
2. No same-source contradiction (✗ inconsistency) was found anywhere across the six contributor steps.
3. All index prices, fund-flow figures, ETF volumes, technical levels, individual stock prices, earnings growth rates, and PMI readings are identical across every step that cites them.

**Counts:**
- ✗ (same-source inconsistency): **0 items**
- ⚠ (cross-source minor divergence): **2 items** (vendor A/B count difference for breadth)

---

## 6. Overall Grade

| Review Dimension | Outcome |
|---|---|
| §3 Temporal anchor checks | ✅ Pass — zero inconsistencies |
| §4 Citation compliance | ✅ Pass — uncitation rate 3.1%, well below the 30% threshold |
| §5 Cross-step consistency | ✅ Pass — zero ✗ items; two ⚠ items are legitimate cross-vendor count differences |

**Grade: pass**

The report is structurally complete, numerically accurate, temporally anchored correctly, and highly consistent across contributor steps. The sole identifiable divergence — market breadth (2,871 vs 2,877 advancing stocks; 2,459 vs 2,461 declining stocks) — reflects a known difference between data aggregators (澎湃新闻 vs. 证券时报/数据宝) for the same session, not an analytical error. The synthesis report chose one provider and applied it consistently. The one `[来源不明]` marker (holiday-gap risk score) is proactively disclosed rather than concealed. No revision is required.

---

## Appendix: Arithmetic Spot Checks

| Formula | Result |
|---|---|
| Three-market turnover: SSE 12,761.95 + SZSE 14,647.17 + BSE 186.28 = 27,595.40 ≈ 27,595 bn | ✅ |
| SH+SZ two-market daily change: 27,409 − 25,901 = 1,508 bn | ✅ |
| STAR 50 ATR extension: 1,580.52 + 41.72 = 1,622.24 | ✅ |
| Scenario probability sum: (50–55%) + (30–35%) + (15–20%) = 95–110% (wide-interval overlap is standard practice) | ✅ |

---

*QA review completed on 2026-05-05 by QA Manager. Grade: pass. No revision workflow triggered; no follow-up mailbox dispatched.*
