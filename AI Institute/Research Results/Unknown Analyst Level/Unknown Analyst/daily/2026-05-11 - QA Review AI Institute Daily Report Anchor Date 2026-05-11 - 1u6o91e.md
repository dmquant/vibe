---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review: AI Institute Daily Report (Anchor Date 2026-05-11)

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review: AI Institute Daily Report (Anchor Date 2026-05-11)

## 1. File Completeness

The anchor date was taken from `date +%Y-%m-%d`; the shell returned `2026-05-11`. All 12 expected upstream deliverables are present, readable, and larger than 200 bytes. The `## ⚠️ Upstream Gaps` recovery path was not triggered.

| Declared file | Present | Bytes | Notes |
|---|---:|---:|---|
| `01_market_close.md` | Yes | 7,625 | Readable; market close, turnover, and breadth input |
| `01_market_close.en.md` | Yes | 9,230 | Readable; English version complete |
| `02_flows_and_sentiment.md` | Yes | 5,291 | Readable; flows and sentiment input |
| `02_flows_and_sentiment.en.md` | Yes | 5,929 | Readable; English version complete |
| `03_theme_rotation.md` | Yes | 4,625 | Readable; theme rotation input |
| `03_theme_rotation.en.md` | Yes | 5,243 | Readable; English version complete |
| `04_technical_map.md` | Yes | 11,901 | Readable; technical map input |
| `04_technical_map.en.md` | Yes | 14,015 | Readable; English version complete |
| `05_risk_panel.md` | Yes | 4,301 | Readable; risk panel input |
| `05_risk_panel.en.md` | Yes | 4,309 | Readable; English version complete |
| `06_每日日报.md` | Yes | 11,204 | Readable; Chinese main report |
| `06_每日日报.en.md` | Yes | 10,998 | Readable; English main report, but with RMB unit-conversion errors |

Additional check: `my_recent_reports.md` is actually 21 bytes and contains one line, `# analyst_id required`, so the statement in `06_每日日报.md:4` / `06_每日日报.en.md:4` that it returned 0 lines / was empty is inconsistent with the workspace state.

## 2. Numeric Inventory

Scope note: this table covers the main specific numeric assertions in `06_每日日报.md` and `06_每日日报.en.md`, including index closes, percentage moves, turnover, flows, ETFs, technical indicators, stock prices, dated windows, and repeated key numbers in the core views. Counting individual numeric assertions, N = 128; C = 124; U = 4. Where the English version preserves the Chinese numeric string but changes the economic meaning through an RMB unit error, the rating is `✗ inconsistent`.

| Number | Location (file:line or context) | Cited source | Cross-step consistency | Rating |
|---|---|---|---|---|
| 2026-05-11 | `06_每日日报.md:1,3`; `06_每日日报.en.md:1,3` | shell date | Matches this run's shell anchor date | ✅ cited+consistent |
| Last 7 days; returned 0 lines / empty | `06_每日日报.md:4`; `06_每日日报.en.md:4` | `my_recent_reports.md` | Inconsistent: local file is 21 bytes and 1 line | ✗ inconsistent |
| SSE Composite 4,225.02, +1.08%, 4,200 handle | `06_每日日报.md:12`; `06_每日日报.en.md:12` | Tencent Quotes; NBD | Matches `01_market_close.md:5,14` and `04_technical_map.md:6,14` | ✅ cited+consistent |
| SZSE Component 15,899.30, +2.16% | `06_每日日报.md:13`; `06_每日日报.en.md:13` | Tencent Quotes | Matches `01_market_close.md:5,15` and `04_technical_map.md:15` | ✅ cited+consistent |
| ChiNext 3,928.97, +3.50%, 3,900 handle | `06_每日日报.md:14`; `06_每日日报.en.md:14` | Tencent Quotes | Matches `01_market_close.md:5,16` and `04_technical_map.md:16` | ✅ cited+consistent |
| STAR50 1,716.69, +4.65%, intraday high 1,727.30 | `06_每日日报.md:15`; `06_每日日报.en.md:15` | Tencent daily-K; Sina Finance | Close and move match `01_market_close.md:8,17` and `04_technical_map.md:6,17`; high matches `04_technical_map.md:5` but conflicts with `03_theme_rotation.md:5` at 1,726.98 | ✗ inconsistent |
| CSI300 4,951.84, +1.64% | `06_每日日报.md:16`; `06_每日日报.en.md:16` | Tencent Quotes | Matches `01_market_close.md:8,27` and `04_technical_map.md:18` | ✅ cited+consistent |
| CSI500 8,839.74, +1.67% | `06_每日日报.md:17`; `06_每日日报.en.md:17` | Tencent Quotes | Matches `01_market_close.md:8,28` and `04_technical_map.md:19` | ✅ cited+consistent |
| CSI1000 8,866.78, +1.44% | `06_每日日报.md:18`; `06_每日日报.en.md:18` | Tencent Quotes | Matches `01_market_close.md:8,28` and `04_technical_map.md:20` | ✅ cited+consistent |
| BSE50 1,426.31, -0.70% | `06_每日日报.md:19,85,92`; `06_每日日报.en.md:19,85,92` | Tencent Quotes | Matches `01_market_close.md:7,18,42` | ✅ cited+consistent |
| SH+SZ turnover 35,388.61 亿元; SH 15,843.67 亿元; SZ 19,544.95 亿元 | `06_每日日报.md:21` | Tencent Quotes | Matches `01_market_close.md:6,19` and `04_technical_map.md:7` | ✅ cited+consistent |
| English turnover RMB 35,388.61 bn; SH 15,843.67; SZ 19,544.95 | `06_每日日报.en.md:21` | Tencent Quotes | Inconsistent: Chinese and upstream are in 亿元; English should be RMB 3,538.861 bn, so the current line is 10x too large | ✗ inconsistent |
| Eastmoney turnover 35,389 亿元, prior session 30,486 亿元, increase 4,903 亿元 | `06_每日日报.md:21,79` | Eastmoney | Matches `01_market_close.md:6,19,35,57` and `04_technical_map.md:7,49` | ✅ cited+consistent |
| English Eastmoney RMB 35,389 bn, RMB 30,486 bn, RMB 4,903 bn | `06_每日日报.en.md:21,79` | Eastmoney | Inconsistent: should be RMB 3,538.9 bn, RMB 3,048.6 bn, and RMB 490.3 bn | ✗ inconsistent |
| More than 3,100 advancers / 3,100+ advancers | `06_每日日报.md:22,92`; `06_每日日报.en.md:22,92` | NBD | Matches `01_market_close.md:7,20,42` and `02_flows_and_sentiment.md:38` | ✅ cited+consistent |
| Sentiment index 67; last month 34; late March 22 | `06_每日日报.md:26,94`; `06_每日日报.en.md:26,94` | substack.com | Matches `02_flows_and_sentiment.md:5,35` and `05_risk_panel.md:9` | ✅ cited+consistent |
| MM China sentiment indicator 59.79, 5/8 reading | `06_每日日报.md:26`; `06_每日日报.en.md:26` | macromicro.me | Matches `02_flows_and_sentiment.md:36` | ✅ cited+consistent |
| As of May 8 | `06_每日日报.md:27`; `06_每日日报.en.md:27` | stcn.com | Matches `02_flows_and_sentiment.md:6` | ✅ cited+consistent |
| Margin balance 28,025.01 亿元, weekly increase 872.93 亿元, 5 consecutive weeks, financing balance 27,823.22 亿元 | `06_每日日报.md:27` | stcn.com | Matches `02_flows_and_sentiment.md:6,25` | ✅ cited+consistent |
| English margin balance RMB 28,025.01 bn, +RMB 872.93 bn, financing balance RMB 27,823.22 bn | `06_每日日报.en.md:27` | stcn.com | Inconsistent: should be RMB 2,802.501 bn, +RMB 87.293 bn, and RMB 2,782.322 bn | ✗ inconsistent |
| Investors with margin debt exceed 195 万 / 1.95 mn | `06_每日日报.md:27`; `06_每日日报.en.md:27` | sina.com.cn | Matches `02_flows_and_sentiment.md:26` and `05_risk_panel.md:9` | ✅ cited+consistent |
| Zhongji Innolight +20.89 亿元 / +RMB 2.089 bn | `06_每日日报.md:28`; `06_每日日报.en.md:28` | sina.com.cn | Matches `02_flows_and_sentiment.md:7,18`; English conversion is correct | ✅ cited+consistent |
| Shanghai Electric +19.91 亿元 / +RMB 1.991 bn | `06_每日日报.md:28`; `06_每日日报.en.md:28` | sina.com.cn | Matches `02_flows_and_sentiment.md:7,19`; English conversion is correct | ✅ cited+consistent |
| JCET +17.40 亿元 / +RMB 1.740 bn | `06_每日日报.md:28`; `06_每日日报.en.md:28` | sina.com.cn | Matches `02_flows_and_sentiment.md:7,20`; English conversion is correct | ✅ cited+consistent |
| Eastmoney +16.47 亿元 / +RMB 1.647 bn | `06_每日日报.md:28`; `06_每日日报.en.md:28` | sina.com.cn | Matches `02_flows_and_sentiment.md:21`; English conversion is correct | ✅ cited+consistent |
| Victory Giant Tech +13.91 亿元 / +RMB 1.391 bn | `06_每日日报.md:28`; `06_每日日报.en.md:28` | sina.com.cn | Matches `02_flows_and_sentiment.md:22`; English conversion is correct | ✅ cited+consistent |
| Sino-Korea Semiconductor ETF 513310, 114.74 亿元 / RMB 11.474 bn | `06_每日日报.md:29`; `06_每日日报.en.md:29` | sina.com.cn | Matches `02_flows_and_sentiment.md:8,29`; English conversion is correct | ✅ cited+consistent |
| CSI500 ETF 510500, 97.23 亿元 / RMB 9.723 bn | `06_每日日报.md:29`; `06_每日日报.en.md:29` | sina.com.cn | Matches `02_flows_and_sentiment.md:8`; English conversion is correct | ✅ cited+consistent |
| CSI300 ETF 510300, 61.21 亿元 / RMB 6.121 bn | `06_每日日报.md:29`; `06_每日日报.en.md:29` | sina.com.cn | Matches `02_flows_and_sentiment.md:8`; English conversion is correct | ✅ cited+consistent |
| Memory / semiconductors about +4.73% | `06_每日日报.md:36`; `06_每日日报.en.md:36` | Sina Finance | Matches `03_theme_rotation.md:5,18` | ✅ cited+consistent |
| Q2 contract prices expected +58%–75% | `06_每日日报.md:36`; `06_每日日报.en.md:36` | Tiger Finance | Matches `03_theme_rotation.md:18` | ✅ cited+consistent |
| Tongyou and Puran +20% limit-up; Montage +18.52%; JCET +10.01% | `06_每日日报.md:36`; `06_每日日报.en.md:36` | Tiger Finance; Tencent daily-K | Matches `03_theme_rotation.md:6,18` and `04_technical_map.md:8,26-29` | ✅ cited+consistent |
| AI compute / CPO about +3.80% | `06_每日日报.md:37`; `06_每日日报.en.md:37` | 163.com | Matches `03_theme_rotation.md:19` | ✅ cited+consistent |
| Innolight 940.13, +6.11% | `06_每日日报.md:37,83`; `06_每日日报.en.md:37,83` | Tencent daily-K | Matches `04_technical_map.md:30,50` | ✅ cited+consistent |
| Tongding Interconnect 4 consecutive limit-ups | `06_每日日报.md:37`; `06_每日日报.en.md:37` | 163.com | Matches `03_theme_rotation.md:19` | ✅ cited+consistent |
| Machinery / liquid cooling about +3.20%; April exports +14.1% | `06_每日日报.md:38,72`; `06_每日日报.en.md:38,72` | STCN; home.saxo | Matches `03_theme_rotation.md:20`, `02_flows_and_sentiment.md:58`, and `05_risk_panel.md:20` | ✅ cited+consistent |
| Victory Giant Tech 378.24, +5.46% | `06_每日日报.md:39,83`; `06_每日日报.en.md:39,83` | Tencent daily-K | Matches `04_technical_map.md:31,50` | ✅ cited+consistent |
| Commercial aerospace / robotics about +2.50% | `06_每日日报.md:40`; `06_每日日报.en.md:40` | NBD | Matches `03_theme_rotation.md:21` | ✅ cited+consistent |
| Mid-to-late May launch window; Jin Mantis 11 limit-ups in 14 days; Bird Co 4 consecutive | `06_每日日报.md:40,87`; `06_每日日报.en.md:40,87` | NBD | Broadly matches `03_theme_rotation.md:21,43` | ✅ cited+consistent |
| CMES -5.75%; Shandong Gold -3.07% | `06_每日日报.md:41,73`; `06_每日日报.en.md:41,73` | Tencent daily-K | Matches `04_technical_map.md:8,32-33` and `05_risk_panel.md:26` | ✅ cited+consistent |
| China-US summit May 14–15 | `06_每日日报.md:72,95`; `06_每日日报.en.md:43,72,95` | investing.com | Matches `02_flows_and_sentiment.md:51` and `05_risk_panel.md:19`; conflicts with `03_theme_rotation.md:33,42` and `06_每日日报.md:86` at May 13–15 | ✗ inconsistent |
| China-US summit May 13–15 window | `06_每日日报.md:86`; `06_每日日报.en.md:86` | investing.com; NBD | Matches `03_theme_rotation.md:33,42`; conflicts with `02_flows_and_sentiment.md:51`, `05_risk_panel.md:19`, and the report's own `:72,:95` | ✗ inconsistent |
| SSE MA5 4,171.48 / MA10 4,130.30 / MA20 4,083.91 / MA60 4,056.67 | `06_每日日报.md:49`; `06_每日日报.en.md:49` | Tencent daily-K; computed MA | Matches `04_technical_map.md:39` | ✅ cited+consistent |
| STAR50 MA5 1,652.81 / MA10 1,564.09 / MA20 1,485.50 / MA60 1,416.29 | `06_每日日报.md:49`; `06_每日日报.en.md:49` | Tencent daily-K; computed MA | Matches `04_technical_map.md:39` | ✅ cited+consistent |
| SSE RSI14 84.43; SZSE 76.38; ChiNext 71.31; STAR50 79.71 | `06_每日日报.md:50,70,94`; `06_每日日报.en.md:50,70,94` | Tencent daily-K; computed RSI14 | Matches `04_technical_map.md:6,40,56` and `05_risk_panel.md:12` | ✅ cited+consistent |
| SSE MACD DIF 47.02 / DEA 31.22 / hist 31.60 | `06_每日日报.md:50`; `06_每日日报.en.md:50` | Tencent daily-K; computed MACD | Matches `04_technical_map.md:41` | ✅ cited+consistent |
| STAR50 DIF 78.94 / DEA 51.52 / hist 54.84 | `06_每日日报.md:50`; `06_每日日报.en.md:50` | Tencent daily-K; computed MACD | Matches `04_technical_map.md:41` | ✅ cited+consistent |
| SSE ATR14 32.48, 0.77% | `06_每日日报.md:51`; `06_每日日报.en.md:51` | Tencent daily-K; computed ATR14 | Matches `04_technical_map.md:42` | ✅ cited+consistent |
| ChiNext ATR14 84.84, 2.16% | `06_每日日报.md:51`; `06_每日日报.en.md:51` | Tencent daily-K; computed ATR14 | Matches `04_technical_map.md:42` | ✅ cited+consistent |
| STAR50 ATR14 55.42, 3.23% | `06_每日日报.md:51`; `06_每日日报.en.md:51` | Tencent daily-K; computed ATR14 | Matches `04_technical_map.md:42` | ✅ cited+consistent |
| Prior 5-day volume multiples: SSE 1.14, SZSE 1.15, ChiNext 1.14, STAR50 1.24, CSI300 1.21 | `06_每日日报.md:52`; `06_每日日报.en.md:52` | Tencent daily-K; computed | Matches `04_technical_map.md:7` | ✅ cited+consistent |
| SSE support 4,197.54 / 4,171.48; resistance 4,241.04 / 4,257.06 | `06_每日日报.md:58,80`; `06_每日日报.en.md:58,80` | Tencent daily-K; pivot / MA5 | Matches `04_technical_map.md:14,47-49` | ✅ cited+consistent |
| SZSE support 15,707.20 / 15,534.43; resistance 16,006.52 / 16,113.75 | `06_每日日报.md:59`; `06_每日日报.en.md:59` | Tencent daily-K; pivot / MA5 | Matches `04_technical_map.md:15,47-48` | ✅ cited+consistent |
| ChiNext support 3,838.36 / 3,802.69; resistance 3,978.73 / 4,028.48 | `06_每日日报.md:60,82`; `06_每日日报.en.md:60,82` | Tencent daily-K; pivot / MA5 | Matches `04_technical_map.md:16,47-48` | ✅ cited+consistent |
| STAR50 support 1,681.85 / 1,652.81; resistance 1,739.42 / 1,762.14 | `06_每日日报.md:61,81`; `06_每日日报.en.md:61,81` | Tencent daily-K; pivot / MA5 | Matches `04_technical_map.md:17,47-48` and `05_risk_panel.md:55` | ✅ cited+consistent |
| CSI300 support 4,907.47 / 4,881.73; resistance 4,978.30 / 5,004.77 | `06_每日日报.md:62`; `06_每日日报.en.md:62` | Tencent daily-K; pivot / MA5 | Matches `04_technical_map.md:18` | ✅ cited+consistent |
| Risk score 7.5/10, Yellow alert | `06_每日日报.md:68`; `06_每日日报.en.md:68` | `05_risk_panel.md` | Matches `05_risk_panel.md:4-5` | ✅ cited+consistent |
| RMB 3.57 trn turnover, RMB 2.80 trn margin balance, RMB 3 trn hold threshold | `06_每日日报.md:69,91,94`; `06_每日日报.en.md:69,91,94` | Securities Times; stcn.com | Matches `03_theme_rotation.md:7,50` and `05_risk_panel.md:10-11`; however exact turnover of 35,388.61 亿元 is about RMB 3.54 trn, so the report needs a source-basis note | ⚠ uncited |
| Tongyou RSI14 90.30; Montage 90.10; RSI > 80; key indices above 70 | `06_每日日报.md:70,94`; `06_每日日报.en.md:70,94` | Tencent daily-K; computed RSI14 | Matches `04_technical_map.md:56` and `05_risk_panel.md:23,33` | ✅ cited+consistent |
| CPI 1.0% | `06_每日日报.md:72`; `06_每日日报.en.md:72` | tpex.org.tw | Matches `02_flows_and_sentiment.md:58` and `05_risk_panel.md:20` | ✅ cited+consistent |
| Shandong Gold MA20 37.27; CMES MA5 18.51 | `06_每日日报.md:73,84`; `06_每日日报.en.md:73,84` | Tencent daily-K; MA computation | Matches `04_technical_map.md:32-33,51,57` and `05_risk_panel.md:34` | ✅ cited+consistent |
| Tomorrow's watch list 2026-05-12 | `06_每日日报.md:75`; `06_每日日报.en.md:75` | Inferred from shell date | Correct next calendar day from the 2026-05-11 anchor | ✅ cited+consistent |
| Montage 249.22, JCET 55.83, Innolight 940.13, Victory Giant 378.24 | `06_每日日报.md:83`; `06_每日日报.en.md:83` | Tencent daily-K | Matches `04_technical_map.md:28-31,50` | ✅ cited+consistent |
| Mid-to-late May Long March 10B, Zhishenxing-1, Zhuque-3 recovery validation | `06_每日日报.md:87` | NBD | Broadly matches `03_theme_rotation.md:43` | ✅ cited+consistent |
| English Long March 10B, Tianlong-3 recovery test in mid/late May | `06_每日日报.en.md:87` | NBD | Inconsistent: English drops Zhishenxing-1 and compresses the Zhuque-3 reference into a non-equivalent event list | ✗ inconsistent |
| Structural numbering 1-5, second leg up, five core views | `06_每日日报.md:89-95`; `06_每日日报.en.md:89-95` | Structural numbering | Not counted as market-fact numeric assertions | ✅ cited+consistent |

## 3. Temporal Anchors

| Time expression | Location | Actual date | Consistent |
|---|---|---:|---|
| “今日” / Today | `06_每日日报.md:8,21,22,30,40`; `06_每日日报.en.md:8,21,22,30,40` | 2026-05-11 | Yes |
| “All relative time references anchored to shell date 2026-05-11” | `06_每日日报.md:3`; `06_每日日报.en.md:3` | 2026-05-11 | Yes |
| “Last 7 days returned 0 lines / archive empty” | `06_每日日报.md:4`; `06_每日日报.en.md:4` | Covers 2026-05-05 through 2026-05-11; local `my_recent_reports.md` has 1 line | No |
| “Last month 34” | `06_每日日报.md:26`; `06_每日日报.en.md:26` | Roughly 2026-04-11 relative to 2026-05-11 | Yes, cited as queried on 2026-05-11 |
| “Late March 22” | `06_每日日报.md:26`; `06_每日日报.en.md:26` | Late March 2026 | Yes |
| “As of May 8” | `06_每日日报.md:27`; `06_每日日报.en.md:27` | 2026-05-08, the latest disclosure before the anchor date | Yes |
| “Prior session” | `06_每日日报.md:21`; `06_每日日报.en.md:21` | 2026-05-08 | Yes, because 2026-05-11 is a Monday |
| “April exports +14.1%” | `06_每日日报.md:38,72`; `06_每日日报.en.md:38,72` | April 2026 data | Yes |
| “Tomorrow's Watch List (2026-05-12)” | `06_每日日报.md:75`; `06_每日日报.en.md:75` | 2026-05-12 | Yes |
| “May 14–15 China-US summit” | `06_每日日报.md:72,95`; `06_每日日报.en.md:43,72,95` | 2026-05-14 to 2026-05-15 | No: the report's own `:86` and the theme-rotation input use May 13–15 |
| “May 13–15 window” | `06_每日日报.md:86`; `06_每日日报.en.md:86` | 2026-05-13 to 2026-05-15 | No: the report's own `:72,:95` and the flows / risk inputs use May 14–15 |
| “Mid-to-late May launch window” | `06_每日日报.md:40,87`; `06_每日日报.en.md:40,87` | Mid-to-late May 2026 | Yes, but the English proper-noun list needs repair |

Temporal conclusion: there are two clear inconsistencies. Under the prompt rule, any temporal inconsistency causes a fail.

## 4. Citation Compliance

N = 128, C = 124, U = 4.

Uncited rate = U / N = 4 / 128 = 3.125%.

Dimension rating: pass. Most numeric assertions either cite a direct source or are traceable to an upstream contributor file. The uncited or under-explained cases are concentrated in the archive line-count statement, the unexplained source-basis difference between RMB 3.57 trn and the exact RMB 3.5389 trn turnover tally, and several English translation / unit-conversion checks. This pass does not offset the factual failures in §3 and §5.

## 5. Cross-Step Consistency

| Number | Values across steps | Difference | Finding |
|---|---|---|---|
| SH+SZ turnover | `01_market_close.md` / `04_technical_map.md`: 35,388.61 亿元; Eastmoney: 35,389 亿元; `03_theme_rotation.md` / `05_risk_panel.md`: RMB 3.57 trn; `06_每日日报.md`: uses 35,388.61 亿元, 35,389 亿元, and RMB 3.57 trn | Exact tally is about RMB 3.5389 trn; RMB 3.57 trn is higher by about RMB 31.1 bn. This may be a source-basis issue, but the final report does not explain it | ⚠ needs-revision |
| English turnover unit | `06_每日日报.md`: 35,388.61 亿元; `06_每日日报.en.md`: RMB 35,388.61 bn | English should be RMB 3,538.861 bn; current value is 10x too large | ✗ inconsistent |
| English Eastmoney turnover, prior value, and increase | Chinese: 35,389 / 30,486 / 4,903 亿元; English: RMB 35,389 / 30,486 / 4,903 bn | English should be RMB 3,538.9 / 3,048.6 / 490.3 bn | ✗ inconsistent |
| English margin units | Chinese: 28,025.01 / 872.93 / 27,823.22 亿元; English: RMB 28,025.01 / 872.93 / 27,823.22 bn | English should be RMB 2,802.501 / 87.293 / 2,782.322 bn | ✗ inconsistent |
| China-US summit date | `02_flows_and_sentiment.md`: May 14-15; `03_theme_rotation.md`: May 13-15; `05_risk_panel.md`: May 14-15; `06_每日日报.md`: contains both May 14–15 and May 13–15 | Same event is inconsistent across inputs and within the final report | ✗ inconsistent |
| STAR50 intraday high / stage high | `03_theme_rotation.md`: 1,726.98; `04_technical_map.md`: 1,727.30; `06_每日日报.md`: 1,727.30 while also citing Sina Finance | Difference of 0.32 points; final should pick one quote source and not mix the Sina and Tencent readings | ✗ inconsistent |
| English commercial-aerospace proper nouns | `03_theme_rotation.md` / `06_每日日报.md`: Long March 10B, Zhishenxing-1, Zhuque-3 recovery validation; `06_每日日报.en.md`: Long March 10B, Tianlong-3 recovery test | English omits Zhishenxing-1 and compresses the event list into a non-equivalent statement | ✗ inconsistent |
| Historical archive line count | `06_每日日报.md`: `my_recent_reports.md` returned 0 lines; local check: 21 bytes, 1 line | Historical check statement does not match local file state | ✗ inconsistent |

Cross-step conclusion: more than three items are `✗ inconsistent`, so this dimension fails.

## 6. Overall Grade

Combined decision:

- §3 Temporal anchors: fail, because the same summit window appears as both May 13–15 and May 14–15, and the archive “0 lines” statement conflicts with the local file.
- §4 Citation compliance: pass, with a 3.125% uncited rate.
- §5 Cross-step consistency: fail, due to English RMB unit-conversion errors, the summit-date conflict, the STAR50 high mismatch, and the commercial-aerospace proper-noun omission.

Grade: fail — The report's market direction is usable, but the date-window conflict and English unit-conversion errors can directly mislead readers and must be fixed before publication.

## 7. Revision Recommendations

1. `06_每日日报.en.md:21,79`: change `RMB 35,388.61 bn` to `RMB 3,538.861 bn`, `RMB 35,389 bn` to `RMB 3,538.9 bn`, `RMB 30,486 bn` to `RMB 3,048.6 bn`, and `RMB 4,903 bn` to `RMB 490.3 bn`.
2. `06_每日日报.en.md:27`: change `RMB 28,025.01 bn` to `RMB 2,802.501 bn`, `+RMB 872.93 bn` to `+RMB 87.293 bn`, and `RMB 27,823.22 bn` to `RMB 2,782.322 bn`.
3. `06_每日日报.md:72,86,95` and `06_每日日报.en.md:43,72,86,95`: standardize the China-US summit window. If using the flows / risk inputs, use 2026-05-14 to 2026-05-15 throughout; if using the theme input, use 2026-05-13 to 2026-05-15 throughout and identify the source basis.
4. `06_每日日报.md:15` / `06_每日日报.en.md:15`: standardize the STAR50 high source. Prefer retaining the Tencent daily-K 1,727.30 value and removing or rewriting the parallel Sina Finance reference; if using Sina's 1,726.98, label it as a different quote basis.
5. `06_每日日报.md:69,91` / `06_每日日报.en.md:69,91`: add a note reconciling 35,388.61 亿元, 35,389 亿元, and RMB 3.57 trn as different source bases or rounding conventions.
6. `06_每日日报.en.md:87`: restore the commercial-aerospace proper nouns so the line includes `Long March 10B`, `Zhishenxing-1`, and `Zhuque-3 recovery validation`, matching the Chinese report and upstream input.
7. `06_每日日报.md:4` / `06_每日日报.en.md:4`: rewrite the historical-check sentence. Suggested meaning: "`my_recent_reports.md` contained no parseable daily-report history, only a placeholder / error line, so no effective historical stance comparison was possible."

```json
{"follow_ups":[{"to":"daily-report-editor","subject":"QA fail: English unit conversions and summit-date conflict","question":"Please revise `06_每日日报.md` and `06_每日日报.en.md`: standardize the China-US summit window, which currently appears as both May 13–15 and May 14–15; fix English RMB unit conversions by writing 35,388.61 亿元 as RMB 3,538.861 bn, 35,389 亿元 as RMB 3,538.9 bn, 30,486 亿元 as RMB 3,048.6 bn, 4,903 亿元 as RMB 490.3 bn, and margin values 28,025.01 / 872.93 / 27,823.22 亿元 as RMB 2,802.501 / 87.293 / 2,782.322 bn; also standardize the STAR50 high source and restore the missing English commercial-aerospace proper nouns.","priority":"high"}]}
```
