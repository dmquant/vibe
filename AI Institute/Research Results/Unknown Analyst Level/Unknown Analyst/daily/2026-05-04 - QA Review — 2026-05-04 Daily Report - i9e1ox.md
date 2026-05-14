---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review — 2026-05-04 Daily Report

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review — 2026-05-04 Daily Report

> Anchor date: 2026-05-04 (verified via `date +%Y-%m-%d`).
> Scope: `01_market_close.md`, `02_flows_and_sentiment.md`, `03_theme_rotation.md`, `04_technical_map.md`, `05_risk_panel.md`, `06_每日日报.md`.

## 1. File Completeness

| Declared file | Present | Bytes | Note |
|---|---|---|---|
| 01_market_close.md | yes | 9,395 | CN strategy close |
| 01_market_close.en.md | yes | 11,249 | EN twin |
| 02_flows_and_sentiment.md | yes | 11,646 | CN flows / sentiment |
| 02_flows_and_sentiment.en.md | yes | 14,903 | EN twin |
| 03_theme_rotation.md | yes | 12,945 | CN theme rotation |
| 03_theme_rotation.en.md | yes | 16,298 | EN twin |
| 04_technical_map.md | yes | 20,439 | CN technical map |
| 04_technical_map.en.md | yes | 21,633 | EN twin |
| 05_risk_panel.md | yes | 21,257 | CN risk panel |
| 05_risk_panel.en.md | yes | 22,064 | EN twin |
| 06_每日日报.md | yes | 20,283 | CN integrated report |
| 06_每日日报.en.md | yes | 18,273 | EN twin |

Completeness dimension: **pass**. All 12 declared files present with non-trivial size (smallest 9,395 bytes ≫ 200-byte threshold).

## 2. Numeric Inventory

| Number | Where it appears (file:context) | Source cited | Cross-step consistency | Rating |
|---|---|---|---|---|
| SSE Composite 4112.16 / +0.11% | 01 idx table; 02 idx sentiment; 04 conclusion; 06 §1 | 10jqka; EastMoney (04) | identical across files | ✅ cited+consistent |
| SZSE Component 15107.55 / -0.09% | 01; 02; 04; 06 | 10jqka; EastMoney | identical | ✅ cited+consistent |
| ChiNext 3677.15 / -0.27% | 01; 02; 04; 06 | 10jqka; EastMoney | identical | ✅ cited+consistent |
| CSI 300 4807.31 / -0.06% | 01; 04; 06 | 10jqka; EastMoney | identical | ✅ cited+consistent |
| STAR 50 1571.07 / +5.19% | 01; 02; 04; 06 | 10jqka; EastMoney | identical | ✅ cited+consistent |
| SSE 50 2985.50 / +0.61% | 01; 04; 06 | 10jqka; EastMoney | identical | ✅ cited+consistent |
| BSE 50 1330.09 / -0.12% | 01; 04; 06 | 10jqka; EastMoney | identical | ✅ cited+consistent |
| Combined SH+SZ+BJ turnover 27,595 bn / +1,504 bn | 01 idx tbl; 05 liquidity; 06 §1 | Sina Finance | conflicts with 02/03's 27,409 bn — see §5 | ✗ inconsistent |
| Two-market turnover 27,409 bn / +1,508 bn | 02 turnover heat; 03 conclusion | The Paper | conflicts with 01/05/06's 27,595 bn — see §5 | ✗ inconsistent |
| SSE-only turnover 12,761.95 bn / 1.25× 20-day avg | 04; 06 | EastMoney, computed | identical | ✅ cited+consistent |
| Semis sector turnover 3,407.14 bn / +3.3668% | 01; 02; 03; 04; 05; 06 | 10jqka | identical | ✅ cited+consistent |
| Semis main-money inflow +6.931 bn | 01; 02; 03; 04; 05; 06 | JRJ | identical | ✅ cited+consistent |
| Defence main inflow +2.890 bn; IC manufacturing +2.329 bn | 02; 03; 05; 06 | JRJ | identical | ✅ cited+consistent |
| Aggregate main-money outflow -52.029 bn | 02; 05; 06 | JRJ | identical | ✅ cited+consistent |
| DataBao main outflow -29.659 bn / ChiNext -10.673 bn / CSI300 -12.468 bn | 02; 05; 06 | DataBao / Stockstar | identical | ✅ cited+consistent |
| Margin balance 2,732.302 bn (2026-04-29); +3.866 bn; 2.59% of float | 02; 05; 06 | SH Sec News / Sina | identical | ✅ cited+consistent |
| Margin trading 264.013 bn; 10.11% of A-share turnover | 02; 05; 06 | SH Sec News / Sina | identical | ✅ cited+consistent |
| Margin net buys: Cambricon 1.938 bn; Hygon 0.841 bn; Ping An 0.552 bn | 02; 05; 06 | Stockstar margin | identical | ✅ cited+consistent |
| Equity ETF AUM RMB 3.48 trn / 1,073 funds; 2026-04-30 net outflow -5.106 bn | 02; 05; 06 | Sina News | identical | ✅ cited+consistent |
| Broad-base index ETF outflow -33.464 bn (1d) / -80.729 bn (5d) | 02; 05; 06 | Stockstar ETF | identical | ✅ cited+consistent |
| SSE 50 ETF inflow +0.726 bn | 02 | Sina News | single-pt | ✅ cited+consistent |
| Stock Connect turnover 350.682 bn (SH 168.877 / SZ 181.806) | 02; 05; 06 | CLS / A³ | identical | ✅ cited+consistent |
| Cambricon SZ-Connect buys 1.681 bn; Guotai Haitong HQ 1.042 bn | 02; 05 | CLS / A³ | identical | ✅ cited+consistent |
| Sector moves: Energy Metals +4.678/4.68% | 01; 03; 04; 05; 06 | 10jqka | identical (rounding) | ✅ cited+consistent |
| Automation Equipment +2.109/2.11% | 01; 03; 04; 06 | 10jqka | identical | ✅ cited+consistent |
| Gaming -1.6735%; Steel -1.4109%; Power -1.4077% | 01; 03; 05; 06 | 10jqka | identical | ✅ cited+consistent |
| Telecom Equip turnover 154.801 bn / -0.06%; Battery 150.226 bn / -1.05% | 04; 05; 06 | 10jqka | identical | ✅ cited+consistent |
| Energy Metals turnover 42.877 bn | 04; 05; 06 | 10jqka | identical | ✅ cited+consistent |
| Sector breadth: 54 up / 36 down | 01; 03; 06 | 10jqka | identical | ✅ cited+consistent |
| Market breadth 2,871 up / 2,459 dn / 173 flat | 01; 02; 06 | The Paper | conflicts with 04's 2,845/2,423/119 (10jqka) — see §5 | ✗ inconsistent |
| Pre-holiday baseline 2,845/2,423/119; 87 LU / 35 LD | 04 reopen-checklist | 10jqka | 04 uses different baseline than 01/02/06 without inline disclosure — see §5 | ⚠ uncited (rationale undisclosed) |
| Extreme moves: 125 up ≥9% / 41 down ≥9% | 01; 02; 05; 06 | The Paper | identical | ✅ cited+consistent |
| Limit-up structure (CLS): 79 LU / 14 broken / 85% seal / 36.36% promo | 02; 03; 05; 06 | CLS / Sina | identical | ✅ cited+consistent |
| Limit-up structure (Jiemian): 98 LU / 52 LD | 02; 05; 06 | Jiemian / Sina | identical | ✅ cited+consistent |
| Yuejian Smart 4 boards; Baoguang & Yongshan Lithium 3 boards | 02; 03; 06 | CLS / Sina | identical | ✅ cited+consistent |
| China Great Wall LHB seat net buy 0.645 bn; institutions +67.0529m; Fang Xinxia +0.108 bn | 02; 05 | DataBao / Stockstar | identical | ✅ cited+consistent |
| Mfg PMI 50.3% / -0.1pp | 01; 03; 05; 06 | NBS | identical | ✅ cited+consistent |
| Non-mfg 49.4% / -0.7pp; composite 50.1% / -0.4pp | 01; 05; 06 | NBS | identical | ✅ cited+consistent |
| Q1 disclosed 5,503 firms / revenue RMB 17.65 trn / +4.9% / NP 1.59 trn / +6.7% | 01; 05; 06 | Sina Finance | identical | ✅ cited+consistent |
| 2026-05 lithium-cell production schedule ≈249 GWh / +6.0% MoM | 03; 05; 06 | CLS | identical | ✅ cited+consistent |
| Beijing Yizhuang humanoid half-marathon: 21.0975 km / 300+ robots / 100+ teams | 03; 06 | China News | identical | ✅ cited+consistent |
| Autonomous-navigation teams ~40% share | 03; 06 | Beijing Gov | identical | ✅ cited+consistent |
| Cambricon close 1,699.96 / +20.00% / turnover-rate 4.241% | 04; 05; 06 | 10jqka | identical | ✅ cited+consistent |
| AccoTEST +13.22% / 8.305%; Rilian Tech 120.60 / +20.00% / 21.011% | 04; 05; 06 | 10jqka | identical | ✅ cited+consistent |
| Zhuoran 6.48 / -16.06% / 22.070%; Jinhong Gas -13.10% / 15.94% | 04; 05; 06 | 10jqka | identical | ✅ cited+consistent |
| SSE Comp MAs 4092.91 / 4088.27 / 4030.88 / 4051.63; 20-d high 4118.76; 60-d high 4197.23 | 04; 06 | EastMoney, computed | identical | ✅ cited+consistent |
| SZSE Comp MAs 14999.00 / 15005.00 / 14549.06 / 14233.34; 20-d high 15248.43 | 04; 06 | EastMoney | identical | ✅ cited+consistent |
| ChiNext MAs 3655.52 / 3679.54 / 3528.72 / 3368.92; 20-d high 3785.23 | 04; 06 | EastMoney | identical | ✅ cited+consistent |
| CSI 300 MAs 4783.24 / 4775.63 / 4684.21 / 4653.37; 20-d high 4829.27 | 04; 06 | EastMoney | identical | ✅ cited+consistent |
| STAR 50 MAs 1503.06 / 1469.96 / 1408.10 / 1405.12; intraday low 1511.39; 20-d high 1580.52; range 4.63%; turnover 143.369 bn / 1.64× avg | 04; 06 | EastMoney | identical | ✅ cited+consistent |
| SSE 50 MAs 2957.50 / 2942.26 / 2916.31 / 2959.12; 20-d high 2989.05; turnover 215.538 bn / 1.59× avg | 04; 06 | EastMoney | identical | ✅ cited+consistent |
| BSE 50 MAs 1343.78 / 1374.24 / 1336.32 / 1398.51; 20-d low 1247.60; 60-d low 1239.81 | 04; 06 | EastMoney | identical | ✅ cited+consistent |
| Range ranking (STAR 4.63 / ChiNext 1.58 / SZSE 0.93 / BSE 0.88 / CSI300 0.66 / SSE50 0.60 / SSE 0.43%) | 04 | EastMoney | single-pt | ✅ cited+consistent |
| Overseas calendar / cross-border premium | 05 macro; VaR scenarios | [date unknown] / [source unknown] | explicitly disclosed unknown | ⚠ uncited (explicitly disclosed) |
| Composite mood "neutral-greedy" | 02; 06 | [no source — report's own composite] | explicitly disclosed | ⚠ uncited (explicitly disclosed) |
| Overseas / cross-border yellow signal | 05; 06 §5 | [no source] | explicitly disclosed | ⚠ uncited (explicitly disclosed) |
| Scenario A "overseas calm" | 05 scenarios | [no source] | explicitly disclosed | ⚠ uncited (explicitly disclosed) |

Totals: N ≈ 56; cited+consistent ≈ 49; uncited (incl. explicitly disclosed unknown) ≈ 5; inconsistent ≈ 3; no fabricated suspects.

## 3. Temporal Anchors

| Time claim | Where | Actual date | Match |
|---|---|---|---|
| "2026-05-04 falls in the May Day holiday window" | 01–06 leads | 2026-05-04 = anchor | ✓ |
| "A-shares closed 2026-05-01 to 2026-05-05" | all six files | SSE notice | ✓ |
| "Trading resumes 2026-05-06" | all six | SSE notice | ✓ |
| "Latest trading day 2026-04-30" | all six | last pre-holiday session | ✓ |
| "2026-04-29 margin balance" | 02; 05; 06 | T+1 disclosure for margin | ✓ (lag disclosed) |
| "Tomorrow 2026-05-05 is still closed" | 01; 02; 04; 06 | anchor 2026-05-04 → next-day 2026-05-05 | ✓ |
| "9th Digital China Summit, Fuzhou, 2026-04-29 to 2026-04-30" | 03; 05 | already concluded | ✓ |
| "China Space Day 2026, Chengdu, 2026-04-24" | 03 | already held | ✓ |
| "2026-04-19 Beijing Yizhuang humanoid half-marathon" | 03; 06 | already held | ✓ |
| "2026-05 lithium-cell production schedule ≈249 GWh" | 03; 05; 06 | forward-looking | ✓ |
| "Reopening day 2026-05-06" | 04; 05; 06 | matches SSE calendar | ✓ |

Temporal dimension: **pass**. No "today / tomorrow / last session / reopen" claim conflicts with the 2026-05-04 anchor; the 2026-04-30 close-of-day baseline is disclosed throughout.

## 4. Citation Compliance

- N (numeric assertions) = 56
- C (cited) = 49
- U (uncited or explicitly disclosed unknown) = 5
- Inconsistent ✗ = 3 (not counted in the uncited rate)
- Uncited rate = 5 / 56 ≈ 8.9%

Verdict: 8.9% << 30% threshold → **pass**.
Note: every "[no source]" tag is accompanied by an inline disclosure (composite mood, overseas calendar, cross-border premium scenario). None are silent.

## 5. Cross-Step Consistency

| Inconsistency | Per-step values | Gap | Rating |
|---|---|---|---|
| Combined / two-market turnover | 01/05/06: 27,595 bn (Sina); 02/03: 27,409 bn (The Paper) | 186 bn ≈ 0.67% | ✗ same metric, different sources, no inline reconciliation in 06 |
| Pre-holiday volume add-on | 01/05/06: +1,504 bn; 02/03: +1,508 bn | 4 bn — coupled with row above | ✗ same |
| Market breadth (up / dn / flat) | 01/02/06: 2,871 / 2,459 / 173 (The Paper); 04 reopen-checklist: 2,845 / 2,423 / 119 (10jqka) | 26 / 36 / 54 names | ✗ 04 imports a different source than the integrated report uses, without inline note |
| Pre-holiday limit-up baseline | 04 reopen-checklist: 87 LU / 35 LD (10jqka); 02/05/06: CLS 79 LU / 14 broken; Jiemian 98 LU / 52 LD | 04 introduces a third reading absent from 06 | ⚠ each source labeled, but 06 omits 04's 10jqka reading |

Total: **3 ✗ + 1 ⚠**. Per the rule (any ✗ → needs-revision; >3 ✗ → fail), three ✗ sits at the boundary; given each value is fully cited and reflects genuine source divergence (not fabrication or contradictory conclusions), this dimension lands at **needs-revision** rather than fail.

## 6. Overall Grade

- §3 temporal: pass
- §4 citation: pass
- §5 cross-step consistency: needs-revision

Roll-up: no fail; one needs-revision; doesn't reach the "multiple needs-revision = fail" floor.

**Grade: needs-revision** — every number and date is properly cited, but the same concept (combined turnover, volume add-on, market breadth, limit-up baseline) is sourced differently across steps without 06 surfacing the discrepancy. The fix is one annotation line per concept, not a re-run.

## 7. Revision Asks (priority-ordered)

**P1 — `06_每日日报.md` §1 and §6**
- After "Combined SH+SZ+BJ turnover 27,595 bn" add a footnote: "The Paper reports 27,409 bn / +1,508 bn for the same session; this report uses Sina Finance."
- In §1 market-breadth row add: "10jqka pre-holiday baseline alternative: 2,845 up / 2,423 dn / 119 flat."
- In §6 watch-list row add: confirmation can be either The Paper's 2,871/2,459 or 10jqka's 2,845/2,423.

**P2 — `04_technical_map.md` reopen-checklist & execution-priority sections**
- Rewrite "pre-holiday baseline 2,845/2,423/119" and "87 LU / 35 LD" lines as "10jqka pre-holiday baseline … (compare with The Paper / CLS / Jiemian readings used in 02/06)" so readers don't take 04's baseline as the unique reference.

**P3 — `02_flows_and_sentiment.md` turnover-heat row**
- "Two-market turnover 27,409 bn" — append: "Sina Finance reports 27,595 bn for combined SH+SZ+BJ on the same session; this row uses The Paper's two-market scope."

**P4 (advisory)**
- 06 §5 risk-light table marks systemic as "yellow→red" while 05 says "yellow leaning yellow→red". Same meaning, different wording — harmonise to "yellow→red" or add a parenthetical.

> follow_ups dispatched to daily-report-editor at priority=normal.

---

```json
{"follow_ups":[
  {"to":"daily-report-editor","subject":"qa needs-revision: three cross-step source inconsistencies not surfaced in 06 (turnover / volume add / breadth / limit-up baseline)","question":"Please add a single inline annotation in 06_每日日报.md under §1 table and inside §6 watch-list to expose the dual-source readings on (1) combined turnover — Sina Finance 27,595 bn + 1,504 bn vs The Paper 27,409 bn + 1,508 bn; (2) market breadth — The Paper 2,871/2,459/173 vs 10jqka 2,845/2,423/119; (3) pre-holiday limit-up baseline — CLS 79/14, Jiemian 98/52, 10jqka 87/35 (suggest folding the 10jqka pair into §2 sentiment row). Also append a one-line 'sourced from X; differs from Y used in 06' note to 02_flows_and_sentiment.md turnover-heat row and to 04_technical_map.md reopen-checklist. After the edits, please ack so QA can run a clean pass review.","priority":"normal"}
]}
```
