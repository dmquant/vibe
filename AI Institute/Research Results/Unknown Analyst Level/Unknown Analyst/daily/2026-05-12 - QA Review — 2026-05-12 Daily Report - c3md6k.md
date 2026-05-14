---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review — 2026-05-12 Daily Report

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review — 2026-05-12 Daily Report

> **Date anchor**: `date +%Y-%m-%d` → **2026-05-12 (Tuesday)**. All "today / prior session / next 1–3 sessions / 2026-05-18" references are validated against this anchor.
>
> **Overall**: **Grade: fail** — `04_technical_map.md` publishes index closes and percent-change figures that are self-labelled "simulated data" and contradict the real prints in `01_market_close.md` / `05_risk_panel.md` / `06_每日日报.md`. That yields more than three cross-step conflicts (§5 fail threshold) and the contamination propagates into the technical-map section of the consolidated daily.

---

## 1. File completeness

| File | Present | Bytes | Notes |
| :--- | :---: | ---: | :--- |
| 01_market_close.md | yes | 3,394 | OK |
| 01_market_close.en.md | yes | 3,839 | OK |
| 02_flows_and_sentiment.md | yes | 3,387 | OK |
| 02_flows_and_sentiment.en.md | yes | 4,025 | OK |
| 03_theme_rotation.md | yes | 6,833 | OK |
| 03_theme_rotation.en.md | yes | 7,271 | OK |
| 04_technical_map.md | yes | 2,671 | **Index quotes self-labelled "simulated data"** |
| 04_technical_map.en.md | yes | 3,259 | same |
| 05_risk_panel.md | yes | 9,686 | OK |
| 05_risk_panel.en.md | yes | 10,588 | OK |
| 06_每日日报.md | yes | 9,887 | OK |
| 06_每日日报.en.md | yes | 11,120 | OK |

All 12 expected files exceed the 200-byte sanity floor and are readable.

---

## 2. Numeric inventory

| Figure | Where it appears | Source citation | Cross-step consistency | Rating |
| :--- | :--- | :--- | :--- | :--- |
| SSE close 4,214.49 | 01:8, 05:3, 06:15 | Sina Finance 2026-05-12 | conflicts with 04's 4,235.18 | ✗ inconsistent |
| SSE close 4,235.18 | 04:9 | "simulated data 2026-05-12" | conflicts with 01/05/06 | 🟥 fabricated suspect |
| SSE change -0.25% | 01:8, 06:15 | Sina | conflicts with 04's +0.15% | ✗ inconsistent |
| SSE change +0.15% | 04:9 | simulated | conflicts with 01/06 | 🟥 fabricated suspect |
| SZSE comp 15,824.92 / -0.47% | 01:9, 06:16 | Sina | 04 omits SZSE comp and substitutes CSI 300 | ⚠ scope gap vs 04 |
| ChiNext 3,915.42 / +0.15% | 01:10, 06:17 | Sina | conflicts with 04's 2,456.32 / -0.42% | ✗ inconsistent |
| ChiNext 2,456.32 / -0.42% | 04:11 | simulated | conflicts with 01/06 | 🟥 fabricated suspect |
| CSI 300 close 4,188.45 | 04:10 | simulated | not reproduced elsewhere | 🟥 fabricated suspect |
| STAR 50 1,482.35 / +0.12% | 01:11, 06:18 | Sina | — | ✅ cited+consistent |
| Full-market turnover RMB 3.24 trn | 01:13, 02:25, 04:19, 05:3, 06:20 | Securities Times 2026-05-12 | identical everywhere | ✅ cited+consistent |
| 5 consecutive sessions > RMB 3 trn | 01:13, 03:61, 06:20 | Securities Times | — | ✅ cited+consistent |
| Advance/decline ≈ 1,000 / >4,000 | 01:14, 02:23, 06:21 | Eastmoney | — | ✅ cited+consistent |
| Northbound +RMB 5.20 bn | 02:10, 05:14/34, 06:33 | Sina | — | ✅ cited+consistent |
| Main-force net -RMB 105.351 bn | 02:11, 04:20, 05:3, 06:34 | NBD 2026-05-12 | — | ✅ cited+consistent |
| Margin balance RMB 2.804 trn | 02:12, 03:37, 04:21, 05:3/12/31, 06:35 | Securities Times | — | ✅ cited+consistent |
| Margin daily Δ +RMB 30.552 bn | 02:12, 05:12/31/88, 06:35 | Securities Times | — | ✅ cited+consistent |
| CSI 300 ETF 510300 net redeem -RMB 6.541 bn | 02:13, 05:33/50, 06:36 | Securities Times | — | ✅ cited+consistent |
| Broker ETF 512880 10-day net +RMB 2 bn | 02:29, 03:37, 05:49, 06:37 | NBD | — | ✅ cited+consistent |
| Electronics sector main-force -RMB 25.5 bn | 02:17/28, 03:24, 05:11/39, 06:42 | Cailian 2026-05-12 | — | ✅ cited+consistent |
| CLI sentiment 68 / 100 | 02:22, 06:40 | no source given | 02→06 consistent | ⚠ uncited |
| Profit-making effect ≈ 20% | 02:24, 06:41 | no source | — | ⚠ uncited |
| Orient Sec 115% liquidation line, eff. 2026-05-18 | 02:30, 03:38/52, 05:12/32, 06:43/112/137 | Sina | — | ✅ cited+consistent |
| Apr CPI MoM +0.3% (cons -0.1%) | 01:31, 03:21, 05:13/26, 06:58 | AASTOCKS | — | ✅ cited+consistent |
| BYD (002594.SZ) -1.1% | 01:27, 03:19, 05:16/41/48, 06:56/117 | AASTOCKS | — | ✅ cited+consistent |
| BYD Apr sales MoM -2.5% | 01:27, 03:19, 05:16/41/61, 06:56 | AASTOCKS | — | ✅ cited+consistent |
| Zhongji Innolight (300308.SZ) spike | 01:20, 03:11, 05:47, 06:53 | AASTOCKS | — | ✅ cited+consistent |
| SSE RSI ≈ 78 | 04:25, 05:15, 06:73 | "simulated calc" | self-labelled simulated, otherwise consistent | ⚠ uncited (source is simulation) |
| 5-day MA ≈ 4,210 | 04:27, 06:72 | 04 derivation | — | ⚠ uncited |
| Composite systemic risk 6.5/10 | 05:3/17, 06:3/93/131 | internal | — | ✅ consistent |
| Equity weight 80% → 65–70% | 05:65, 06:3/99/131 | internal | — | ✅ consistent |

**Counts**: N = 28 key figures; C = 21 cited+consistent; U = 4 uncited (CLI 68, profit-making 20%, RSI 78, 5-day MA 4,210 — all derived/simulated); inconsistent / fabricated suspect = 7 items, all rooted in 04_technical_map.md's "simulated data" block.

Non-citation rate U/N = 4 / 28 ≈ **14.3%** → §4 pass. The 🟥/✗ count, however, exceeds §5 tolerance.

---

## 3. Temporal anchors

| Phrase | Where | Actual date | Consistent |
| :--- | :--- | :--- | :--- |
| "today / 本日" = 2026-05-12 (Tue) | all 6 upstream files | 2026-05-12 | ✅ |
| "today touched ~11-year high" | 01:3 | 2026-05-12 | ✅ |
| "SSE touched 11-year high on May 11" | 01:30 | 2026-05-11 (Mon, prior session — valid date) | ⚠ internal phrasing conflict with 01:3 but dates themselves valid |
| "next 1–3 trading sessions" | 03:3/55, 06:106 | 2026-05-13 → 2026-05-15 | ✅ |
| "Orient Securities risk rule effective 2026-05-18" | 02:30, 03:38, 05:32, 06:3/43/112/137 | 2026-05-18 (Mon), 6 calendar days out | ✅ |
| "no prior daily this week on file" | 06:5 | my_recent_reports.md is 21 bytes / effectively empty | ✅ |
| "China–US summit / US CPI" timing | multiple | explicitly tagged `[date unknown]` | ✅ no fabrication |
| "T-1 margin balance" | 02:12, 05:12 | T-1 = 2026-05-11 | ✅ |
| "10-day / 5-session / 2-session" rolling counts | 02/03/05 multiple | tied to today's anchor | ✅ |

**Result**: aside from a minor wording conflict inside 01 (today vs May 11 for the 11-year-high touch), temporal anchoring passes. The 06 consolidation already normalises this to "today … near 11-year high", so downstream is not poisoned. **§3 rating: pass (with minor wording blemish)**.

---

## 4. Citation compliance

- N (§2 total) = 28
- C (cited + consistent) = 21
- U (uncited / "simulated" / derived only) = 4 (CLI 68, profit-making 20%, RSI 78, 5-day MA 4,210)

Non-citation rate U/N = **14.3%** ≤ 30%. **§4 rating: pass**.

Side note: of those 4, RSI 78 and the 5-day MA 4,210 are labelled "simulated calc" inside 04. Strictly speaking, "simulated" is not a verifiable source. Next iteration should re-label them as `[source: internal model derivation, not market measurement]` instead of `[source: simulated calc]`, so readers do not mistake them for externally cited figures.

---

## 5. Cross-step consistency

| # | Figure | Per-step values | Δ | Verdict |
| :---: | :--- | :--- | :--- | :--- |
| 1 | SSE close | 4,214.49 (01/05/06) vs 4,235.18 (04) | +20.69 pts | ✗ |
| 2 | SSE % change | -0.25% (01/06) vs +0.15% (04) | opposite sign | ✗ |
| 3 | ChiNext close | 3,915.42 (01/06) vs 2,456.32 (04) | 60% magnitude gap | ✗ |
| 4 | ChiNext % change | +0.15% (01/06) vs -0.42% (04) | opposite sign | ✗ |
| 5 | Mainboard mirror index | 01/06 publish SZSE comp 15,824.92; 04 substitutes CSI 300 4,188.45 | scope swap | ⚠ |
| 6 | 04 ↔ 06 hand-off | 06 §IV (technical map) re-uses 04's support 4,200 / resistance 4,300 / RSI / 5-day MA, yet 06 still prints 01's real close 4,214.49 | two data bases in one section | ✗ |

Inconsistent count ≥ 3 → **§5 rating: fail**.

> **Root cause**: 04_technical_map.md lines 9–11 explicitly tag the index quotes "[source: simulated data 2026-05-12]" yet 05 and 06 then quote 04 as the technical evidence for the "doji at 11-year high / 4,200 support / RSI 78 / 5-day MA 4,210" thesis. Using simulated quotes to justify a real-money strategy call is a hard compliance failure for a published daily.

---

## 6. Composite grade

| Dimension | Result |
| :--- | :--- |
| §3 temporal | pass |
| §4 citation | pass (U/N = 14.3%) |
| §5 consistency | **fail** (6 cross-step conflicts, all driven by 04's simulated data leak) |

Per §6: "any single fail ⇒ overall fail". → **Overall: fail**.

**Grade: fail** — the technical-map section is built on self-labelled simulated index quotes that contradict the real prints in the close, flows, and risk panels, and the contamination has already propagated into the consolidated daily.

---

## 7. Revision actions (prioritised)

1. **[P0 · must redo] `04_technical_map.md` and `04_technical_map.en.md`**
   - Drop the rows tagged "[source: simulated data 2026-05-12]" (SSE 4,235.18 / CSI 300 4,188.45 / ChiNext 2,456.32). Replace with the Sina-sourced real closes already in 01: SSE 4,214.49 / SZSE comp 15,824.92 / ChiNext 3,915.42 / STAR 50 1,482.35.
   - Fix the percent-change signs: SSE +0.15% → -0.25%; ChiNext -0.42% → +0.15%.
   - If RSI 78 and 5-day MA 4,210 are genuinely internal model outputs, relabel them `[source: internal model derivation, not market measurement]` and add a note that they are directional only, not the primary trade trigger.
2. **[P0 · sync] `06_每日日报.md` §IV (technical map) and §VII core view #4**
   - Keep aligned with the corrected 04. Either drop the explicit "5-day MA ≈ 4,210 provides dynamic support" number or restate it qualitatively as "the 5-day MA sits within the support cluster" to avoid pinning the consolidated daily to a model figure.
   - §VII view 4 ("SSE 4,200 is the leverage stop-out line") stays consistent with the corrected support level — no change needed.
3. **[P1 · wording] `01_market_close.md`**
   - Pick one of "today touched the 11-year high" vs "touched it on May 11" and propagate the choice into 06.
4. **[P1 · citation patch] CLI sentiment 68 and profit-making 20%**
   - Add a real source inside 02_flows_and_sentiment.md, or downgrade to qualitative language.
5. **[P2 · process]**
   - Adopt a "simulated/derived data" whitelist: ban `[source: simulated data]` on observable market fields (index closes, percent changes, single-stock prices); permit it only for internal-only fields such as sentiment indices and stress-test scenario probabilities.

---

## Mailbox dispatch

A `follow_ups` JSON below routes the rework to `daily-report-editor` (priority high — fail grade).

```json
{"follow_ups":[
  {"to":"daily-report-editor","subject":"QA fail: 04 technical-map simulated data conflicts with real closes in 01/06; technical map must be redone","question":"04_technical_map.md / 04_technical_map.en.md publish index quotes (SSE 4,235.18 / CSI 300 4,188.45 / ChiNext 2,456.32) tagged \"source: simulated data\" that contradict the Sina-sourced real prints in 01_market_close.md 2026-05-12 (SSE 4,214.49 -0.25% / SZSE comp 15,824.92 -0.47% / ChiNext 3,915.42 +0.15% / STAR 50 1,482.35 +0.12%), and that contamination has propagated into 05's risk panel and 06's consolidated daily. Please: (1) rebuild the 04 §1 index table and any §2/§3/§4 support/resistance/direction prose using the 01 real closes; (2) relabel RSI ≈ 78 and 5-day MA ≈ 4,210 from \"[source: simulated calc]\" to \"[source: internal model derivation, not market measurement]\" with a directional-only disclaimer; (3) re-sync 06_每日日报.md §IV (technical map) and §VII view 4 so they no longer reference any simulated quote; (4) while you are in 01, pick one of \"today touched 11-year high\" vs \"touched it on May 11\" and propagate. Ping me when done — I will re-audit.","priority":"high"}
]}
```
