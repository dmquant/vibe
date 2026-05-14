---
source: ai-institute
resource_type: research-result
report_kind: briefing
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review — Morning Brief, 2026-05-13

Kind: **briefing**
Analyst: **(unknown)**

## Links

- Report type: [[briefing]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review — Morning Brief, 2026-05-13

Audit date anchor: `date +%Y-%m-%d` → **2026-05-13**. I read all 14 upstream deliverables in the workspace and also checked `recent_reports.md` and `my_recent_reports.md` for the archived sources cited by the Morning Brief. External spot checks used WTOP/AP, BLS, and the Federal Reserve to verify the S&P 500, CPI, and FOMC figures.

## 1. File Completeness

| Declared file | Exists | Bytes | Notes |
|---|---:|---:|---|
| `00_研究院产出.md` | Yes | 9356 | Readable, above 200 bytes |
| `00_研究院产出.en.md` | Yes | 9754 | Readable, above 200 bytes |
| `01_macro_overnight.md` | Yes | 9660 | Readable, above 200 bytes |
| `01_macro_overnight.en.md` | Yes | 10482 | Readable, above 200 bytes |
| `02_china_macro.md` | Yes | 19006 | Readable, above 200 bytes |
| `02_china_macro.en.md` | Yes | 20719 | Readable, above 200 bytes |
| `03_ashare_strategy.md` | Yes | 24096 | Readable, above 200 bytes |
| `03_ashare_strategy.en.md` | Yes | 25560 | Readable, above 200 bytes |
| `04_sentiment_flows.md` | Yes | 14734 | Readable, above 200 bytes |
| `04_sentiment_flows.en.md` | Yes | 15613 | Readable, above 200 bytes |
| `05_risk_watch.md` | Yes | 13436 | Readable, above 200 bytes; line 3 incorrectly says `04_sentiment_flows.md` was missing |
| `05_risk_watch.en.md` | Yes | 14841 | Readable, above 200 bytes; same incorrect missing-file statement |
| `06_晨会简报.md` | Yes | 12917 | Readable, above 200 bytes |
| `06_晨会简报.en.md` | Yes | 14626 | Readable, above 200 bytes |

Conclusion: file presence itself is **pass**. However, `05_risk_watch.md` / `.en.md` contains an incorrect source-integrity statement, handled under §5 cross-step consistency.

## 2. Numeric Inventory

Note: numeric combinations that form one inseparable assertion are grouped in one row. `[source unknown]` placeholders are not counted as point estimates, but thresholds, dates, completion timestamps, percentages, and trigger levels are counted.

| Number | Location (file:line or context) | Cited source | Cross-step consistency | Rating |
|---|---|---|---|---|
| 2026-05-13 | `06_晨会简报.md:3` date anchor | shell `date +%Y-%m-%d` | Matches this audit shell output | ✅ cited+consistent |
| 2026-05-12 | `06_晨会简报.md:3` prior trading day | `02_china_macro.md` date anchor | Correct Tuesday trading day | ✅ cited+consistent |
| 2026-05-04 to 2026-05-10 | `06_晨会简报.md:3` last week | `02_china_macro.md` date anchor | Correct for the 2026-05-13 anchor | ✅ cited+consistent |
| Past 7 days, 0 lines | `06_晨会简报.md:5` my_recent_reports | `my_recent_reports.md` | `wc -l` is 0; the file contains a no-newline error string, so the note is acceptable but should be clearer | ✅ cited+consistent |
| 25 of 25 candidate(s), 1145 lines | `06_晨会简报.md:5` recent_reports | `recent_reports.md` header | Matches archive header | ✅ cited+consistent |
| Drafts 00-05 present | `06_晨会简报.md:5` local drafts | workspace `rg --files` | Matches `ls -la` | ✅ cited+consistent |
| 88 whiteboard cards, 11 boards, 31 handoffs, 2 deep dives | `06_晨会简报.md:12` | `00_研究院产出.md:10-15` | Consistent | ✅ cited+consistent |
| disputed 26, unverifiable 48, verified 8, uncertain 1 | `06_晨会简报.md:12` | `00_研究院产出.md:67-76` | Consistent | ✅ cited+consistent |
| `600570.SH` 2026-05-12T15:35:12Z; `002410.SZ` 2026-05-12T14:05:12Z | `06_晨会简报.md:14` | `00_研究院产出.md:58-63` | Consistent | ✅ cited+consistent |
| `688111.SH` running; `688012.SH` / `002371.SZ` / `688027.SH` / `A` pending | `06_晨会简报.md:14` | `00_研究院产出.md:63` | Consistent | ✅ cited+consistent |
| 1.2%, 1.5%, 1.8% | `06_晨会简报.md:17` activation rates | `00_研究院产出.md:98-100` | Consistent | ✅ cited+consistent |
| Brent 107.28 USD/bbl | `06_晨会简报.md:23` | `recent_reports.md:130/136`, internal API; external TradingEconomics divergence noted in archive | Consistent with archive; contract convention should remain explicit | ✅ cited+consistent |
| Brent 100–110; 130–155 | `06_晨会简报.md:23` | `01_macro_overnight.md:56` | Consistent | ✅ cited+consistent |
| WTI 101.78 USD/bbl | `06_晨会简报.md:24` | `recent_reports.md:130/137`, internal API | Consistent | ✅ cited+consistent |
| Brent-WTI spread about 5.50 USD/bbl | `06_晨会简报.md:24` | `recent_reports.md:130` | Derived from 107.28-101.78 | ✅ cited+consistent |
| DXY 98.289 | `06_晨会简报.md:25` | `recent_reports.md:674/688` | Consistent | ✅ cited+consistent |
| DXY 108–116 | `06_晨会简报.md:25` | `01_macro_overnight.md:41/86` | Consistent | ✅ cited+consistent |
| EUR/USD 1.17396 | `06_晨会简报.md:26` | `recent_reports.md:674/680` | Consistent | ✅ cited+consistent |
| USD/JPY 157.593; 155–160 | `06_晨会简报.md:27` | `recent_reports.md:674/681`; fx-strategist card | Spot is consistent; 155–160 is a strategy band | ✅ cited+consistent |
| USD/CNY 6.7915; 7.30 gate; 09:15 fixing | `06_晨会简报.md:28` | `recent_reports.md:674/686`; `02_china_macro.md:72` | Consistent with archive; external FX conventions differ, so internal API convention should be retained | ✅ cited+consistent |
| S&P 500 7,400.96, -11.88 points, -0.2% | `06_晨会简报.md:29` | AP/WTOP; `recent_reports.md:919`; external WTOP/AP spot check | Consistent | ✅ cited+consistent |
| 7,350–7,360; 40.96 points; 0.55% | `06_晨会简报.md:29` | derivatives-strategist handoff; `recent_reports.md:919` | Approximately consistent with 7,400.96 | ✅ cited+consistent |
| VIX 18.25, PCCI 1.154, Skew 140.21, MOVE 67.25 | `06_晨会简报.md:30` | sentiment-analyst `topic_pitches.md` | Source chain exists though the clipped archive does not expose every value | ✅ cited+consistent |
| CPI 3.8% YoY, 0.6% MoM; core CPI 2.8% YoY, 0.4% MoM | `06_晨会简报.md:32` | `recent_reports.md:280-283/815`; BLS external check | Consistent | ✅ cited+consistent |
| 2026-04-29 FOMC; 3.50%–3.75% | `06_晨会简报.md:32` | Fed statement; `recent_reports.md:817` | Consistent | ✅ cited+consistent |
| 30Y tail > 3.0 bp; bid-to-cover < 2.20x | `06_晨会简报.md:32` | bond-analyst handoff; `01_macro_overnight.md:37/85` | Consistent | ✅ cited+consistent |
| April TSF / M2 / RMB loans / IP / retail / FAI / property investment dates unknown | `06_晨会简报.md:36` | `02_china_macro.md:52-55` | Consistent; no pseudo-precise date | ✅ cited+consistent |
| 09:15; 7.25; 7.30; Brent 130 | `06_晨会简报.md:40` | `02_china_macro.md:48/72/130` | Consistent | ✅ cited+consistent |
| May MLF / LPR dates unknown | `06_晨会简报.md:42` | `02_china_macro.md:52-55/80` | Consistent | ✅ cited+consistent |
| May Day trips 325 million; RMB 185.492 billion; RMB 570.7 per capita; -0.6% YoY | `06_晨会简报.md:43` | `recent_reports.md:762`, Ministry of Culture and Tourism link | Consistent | ✅ cited+consistent |
| 2026-05-09; 30-city +9.6%; 18-city +18.1% | `06_晨会简报.md:43` | `recent_reports.md:753` | Consistent | ✅ cited+consistent |
| 30Y failed, Brent 130, DXY 108–116 | `06_晨会简报.md:49` | `03_ashare_strategy.md:217` | Consistent | ✅ cited+consistent |
| First 30 minutes | `06_晨会简报.md:53` | `03_ashare_strategy.md:199/218` | Consistent | ✅ cited+consistent |
| Distribution backlog 2027–2028 | `06_晨会简报.md:54` | `03_ashare_strategy.md:96/138`; industrials handoff | Consistent | ✅ cited+consistent |
| 10Y CGB | `06_晨会简报.md:55` | `03_ashare_strategy.md:85/97` | Consistent | ✅ cited+consistent |
| NVIDIA / Google-grade certification | `06_晨会简报.md:57` | `03_ashare_strategy.md:90` | Not a numeric value, but cited as a condition | ✅ cited+consistent |
| 5%–10% liquidity sleeve | `06_晨会简报.md:59` | `03_ashare_strategy.md:191-192` | Consistent | ✅ cited+consistent |
| Backfill by 09:15 SGT | `06_晨会简报.md:63/84` | `04_sentiment_flows.md:185`; `05_risk_watch.md:95` | Consistent | ✅ cited+consistent |
| Northbound > +RMB 5.0bn / > -RMB 5.0bn | `06_晨会简报.md:67` | `04_sentiment_flows.md:35-36` | Consistent | ✅ cited+consistent |
| Southbound 5 days > HKD 20.0bn; AH premium < 125 | `06_晨会简报.md:68` | `04_sentiment_flows.md:51` | Consistent | ✅ cited+consistent |
| Financing-buy share > 9.5%, > 11% | `06_晨会简报.md:69` | `04_sentiment_flows.md:83` | Consistent | ✅ cited+consistent |
| Limit-ups > 80, > 120; > 25 names with at least 3 boards | `06_晨会简报.md:70` | `04_sentiment_flows.md:97/100` | Consistent | ✅ cited+consistent |
| Gold ETF + oil ETF inflows; VIX > 22 | `06_晨会简报.md:71` | `04_sentiment_flows.md:120/176` | Consistent | ✅ cited+consistent |
| Current risk light: yellow | `06_晨会简报.md:75` | `05_risk_watch.md:7` | Consistent | ✅ cited+consistent |
| 30Y tail > 3.0 bp; bid-to-cover < 2.20x | `06_晨会简报.md:79` | `01_macro_overnight.md:85`; `05_risk_watch.md:19` | Consistent | ✅ cited+consistent |
| Brent > 130; DXY 108–116; USDCNH > 7.30 | `06_晨会简报.md:80` | `05_risk_watch.md:84` | Consistent | ✅ cited+consistent |
| Limit-ups > 120, ≥3-board > 25, financing-buy share > 11% | `06_晨会简报.md:81` | `05_risk_watch.md:84` | Consistent | ✅ cited+consistent |
| disputed 26 / completed fact cards 83, about 31% | `06_晨会简报.md:82` | `05_risk_watch.md:53-54`; `00_研究院产出.md:78` | Consistent | ✅ cited+consistent |
| UTXO 15–30%; ECC 26k / 500k; reliable gas power 6.3 GW | `06_晨会简报.md:82` | `05_risk_watch.md:61-63`; `00_研究院产出.md:80-82` | Consistent and explicitly banned | ✅ cited+consistent |
| P0, 09:15 SGT | `06_晨会简报.md:84` | `05_risk_watch.md:92-95` | Consistent | ✅ cited+consistent |
| P0/P1/P2 | `06_晨会简报.md:90-95` | upstream task tables | Consistent | ✅ cited+consistent |
| 45GW nuclear MOU | `06_晨会简报.md:93` | utilities-analyst handoff; `recent_reports.md:467-487` | Internal source exists, but formal source support is still missing; should not enter tradable conclusions | ⚠ uncited |
| China National Nuclear 18–22 GW, >85%; CGN 14–17 GW, 70–80% | `06_晨会简报.md:93` | utilities-analyst handoff; `recent_reports.md:481-482` | The brief itself says formal sources are still needed | ⚠ uncited |
| FY2026 Q3; 2026-05-14 11:00 ET | `06_晨会简报.md:94` | industrials handoff; `recent_reports.md:438` | Archive cites FPS IR, but no original IR file is local | ✅ cited+consistent |
| Coverage gaps 1.2%, 1.5%, 1.8% | `06_晨会简报.md:95` | `00_研究院产出.md:98-100` | Consistent | ✅ cited+consistent |
| 2026-05-13 to 2026-05-16 as “rest of this week’s trading days” | `03_ashare_strategy.md:3`; affects the weekly-task context in `06_晨会简报.md` | `date -j -f %Y-%m-%d 2026-05-16 +%A` → Saturday | Temporal anchor error: 2026-05-16 is Saturday, not a trading day | ✗ inconsistent |
| `04_sentiment_flows.md` missing | `05_risk_watch.md:3` | `ls -la` shows the file exists and is 14734 bytes | Conflicts with workspace reality; `06_晨会简报.md:5` identifies the issue but 05 remains unrevised | ✗ inconsistent |

## 3. Temporal Anchors

| Time phrase | Location | Actual date | Consistent |
|---|---|---|---|
| “Today” anchored to 2026-05-13 | `06_晨会简报.md:3` | shell output 2026-05-13 | Yes |
| “Previous trading day = 2026-05-12” | `06_晨会简报.md:3`, `02_china_macro.md:3`, `03_ashare_strategy.md:3` | 2026-05-12 was Tuesday | Yes |
| “Last week = 2026-05-04 to 2026-05-10” | `06_晨会简报.md:3` | Correct on a Monday-Sunday convention | Yes |
| “Rest of this week = 2026-05-13 to 2026-05-16” | `02_china_macro.md:3` | If calendar days, it should run through 2026-05-17; if trading days, it should end 2026-05-15 | No |
| “Rest of this week’s trading days = 2026-05-13 to 2026-05-16 (Wed-Fri, including 5/15 and 5/16)” | `03_ashare_strategy.md:3` | 2026-05-16 is Saturday; trading-day window should end 2026-05-15 | No |
| 09:15 USD/CNY fixing | `06_晨会简报.md:40` | Intraday event on 2026-05-13 | Yes |
| Sentiment and flows backfill by 09:15 SGT | `06_晨会简报.md:63/84` | Same-day pre-open task | Yes |
| 2026-05-12T15:35:12Z and 2026-05-12T14:05:12Z deep-dive completions | `06_晨会简报.md:14` | Inside the 24h window | Yes |
| 2026-05-14 11:00 ET FPS Q3 call | `06_晨会简报.md:94` | Next-day event with absolute date | Yes |

Finding: there are temporal-anchor inconsistencies. Per the task rule, any inconsistency is a fail.

## 4. Citation Compliance

Using the grouped numeric assertions in §2 as the counting basis: N = 52, C = 50, U = 2.

Uncited rate = U / N = **3.8%**.

Dimension rating: **pass**. The main incomplete-source items are the 45GW nuclear MOU and the issuer-level allocation assumptions in `06_晨会简报.md:93`; the brief says formal sources are still needed, so these are not treated as fabricated, but they must not be used as trading conclusions.

## 5. Cross-Step Consistency

| Number / fact | Values across steps | Difference | Rating |
|---|---|---|---|
| Whether `04_sentiment_flows.md` exists | The file exists at 14734 bytes; `05_risk_watch.md:3` / `.en.md:3` says it was missing; `06_晨会简报.md:5` says that statement is wrong | Risk Watch source-integrity note is wrong | ✗ |
| Remaining trading days this week | `03_ashare_strategy.md:3` says 2026-05-13 to 2026-05-16; shell check says 2026-05-16 is Saturday | Trading-day window should end 2026-05-15 | ✗ |
| 45GW nuclear allocation assumptions | `06_晨会简报.md:93` imports 18–22 GW / >85% and 14–17 GW / 70–80%; `recent_reports.md` also says formal sources are still needed | Traceable to archive, but evidence grade is insufficient | ⚠ |
| S&P 500 7,400.96 / -11.88 / -0.2% | `06_晨会简报.md:29`, `recent_reports.md:919`, and WTOP/AP match | No difference | ✅ |
| CPI and FOMC | `06_晨会简报.md:32`, `recent_reports.md:815/817`, and external BLS/Fed checks match | No difference | ✅ |

Finding: there are 2 ✗ items, so this dimension is at least **needs-revision**. The temporal-anchor failure in §3 makes the overall grade fail.

## 6. Overall Grade

**Grade: fail** — all required files are present and most market figures are sourced, but `03_ashare_strategy.md` treats Saturday `2026-05-16` as part of the remaining trading-day window, causing a hard temporal-anchor failure. In addition, `05_risk_watch.md` incorrectly says `04_sentiment_flows.md` was missing, revealing an unrevised upstream source-integrity error.

## 7. Revision Recommendations

1. P0: revise `03_ashare_strategy.md:3` and `03_ashare_strategy.en.md:3`; replace “rest of this week’s trading days = 2026-05-13 to 2026-05-16” with “2026-05-13 to 2026-05-15”. If a calendar-day convention is intended, write “rest of this calendar week = 2026-05-13 to 2026-05-17”.
2. P0: revise `02_china_macro.md:3` and `.en.md:3` to clearly distinguish “calendar days” from “trading days” and avoid the mixed endpoint `2026-05-16`.
3. P1: revise `05_risk_watch.md:3` and `.en.md:3`; remove the incorrect statement that `04_sentiment_flows.md` was missing and replace it with “read both `04_sentiment_flows.md` and `.en.md`”.
4. P1: revise `06_晨会简报.md:93` and `.en.md:93`; keep the 45GW nuclear MOU, `18–22 GW`, `>85%`, `14–17 GW`, and `70–80%` as “research tasks pending verification” until formal sources are added.
5. P2: add a note in the Morning Brief data statement that the `05_risk_watch.md` missing-file statement has been corrected by the editor, but the upstream risk file still needs to be patched to avoid downstream misreads.

```json
{"follow_ups":[{"to":"morning-brief-editor","subject":"Grade fail: trading-day anchor error and Risk Watch falsely says sentiment file was missing","question":"Please revise today’s Morning Brief and related upstream references: 1) change `03_ashare_strategy.md` / `.en.md` from “rest of this week’s trading days = 2026-05-13 to 2026-05-16” to “2026-05-13 to 2026-05-15”, and check `02_china_macro.md` for the same calendar-day/trading-day convention issue; 2) require `05_risk_watch.md` / `.en.md` to remove the false statement that `04_sentiment_flows.md` was missing; 3) downgrade the 45GW nuclear MOU and the China National Nuclear / CGN allocation assumptions to pending-verification research tasks until formal sources are provided.","priority":"high"}]}
```

## External Spot-Check Sources

- WTOP/AP: https://wtop.com/asia/2026/05/how-major-us-stock-indexes-fared-tuesday-5-12-2026/
- BLS CPI: https://www.bls.gov/news.release/archives/cpi_05122026.htm
- Federal Reserve FOMC statement: https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm
