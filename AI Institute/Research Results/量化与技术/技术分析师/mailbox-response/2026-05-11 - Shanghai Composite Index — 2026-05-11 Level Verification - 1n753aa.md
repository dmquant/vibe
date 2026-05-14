---
source: ai-institute
resource_type: research-result
report_kind: mailbox-response
analyst_level: "量化与技术"
content_error: ""
---

# Shanghai Composite Index — 2026-05-11 Level Verification

Kind: **mailbox-response**
Analyst: **Technical Analyst**

## Links

- Report type: [[mailbox-response]]
- Analyst: [[Technical Analyst]]
- Analyst level: [[量化与技术]]

# Shanghai Composite Index — 2026-05-11 Level Verification

## Bottom line (read first)
- **Authoritative close: 4,205.09, +0.60%** (as of the 2026-05-11 cash close; source: Investing.com historical data).
- **Both conflicting prints in the draft report are wrong:**
  - **3,126.82 (-1.00%) is materially incorrect.** That level is far below the current index range (4,100–4,220) and the direction (down) is opposite to today's tape. Almost certainly a stale or cross-wired figure (looks like a historic SHCOMP value from 2023–2024 vintage, or a different index misrouted). **Delete / replace immediately.**
  - **4,219.13 (+0.94%) has the right direction but is not the close.** It is within a tick of today's intraday high (4,220.25); it appears to be an intra-session print, not the official settlement. **Replace with 4,205.09 / +0.60%.**

## Authoritative terminal reading

| Field | Value | Note |
|---|---|---|
| Close | **4,205.09** | 2026-05-11 |
| Change | **+0.60%** | +25.14 pts vs. prior close |
| Open | 4,201.35 | Gapped up |
| High | 4,220.25 | Intraday; near the 4,219.13 mis-used in draft |
| Low | 4,186.08 | — |
| Prior close | 4,179.95 | 2026-05-08 (Fri) |

Check: 4,205.09 / 4,179.95 − 1 = +0.6014%, consistent with the published change.

## Triage of the conflicting prints

| Reported value | Verdict | Likely origin |
|---|---|---|
| 3,126.82 (-1.00%) | Wrong on both magnitude and direction | Legacy archive value or cross-wired ticker (likely SZSE / sector / old-vintage SHCOMP) |
| 4,219.13 (+0.94%) | Close to truth, but it is an intraday tick | Mid-session high print (near today's 4,220.25 high), not the settle |
| 4,205.09 (+0.60%) | **Adopt this** | Official cash close |

## Recommended edits for the Research Editor
1. Replace every Shanghai Composite reference in body and tables with **4,205.09 (+0.60%)**.
2. Remove the 3,126.82 print and any derived metrics that depend on it (momentum, drawdown, valuation percentile, etc.).
3. If 4,219.13 must remain in a chart/paragraph, annotate it as "near intraday high (4,220.25)", and never label it as the close.
4. Add an as-of stamp: "Data as of 2026-05-11 15:00 cash close."

## Follow-ups
- Sanity-check the other indices in the report (SZSE Component, ChiNext, STAR 50, CSI 300, CSI 1000) for the same cross-wire pattern.
- Trace the upstream feed (Wind / iFinD / market-data API) to locate where 3,126.82 leaked in; review refresh and symbol-mapping logic.
- Where feasible, add a dual-source check: Wind / Bloomberg SHCOMP Last Price vs. SSE official end-of-day file.

## Sources
- [Shanghai Composite Historical Data — Investing.com](https://cn.investing.com/indices/shanghai-composite-historical-data)
- Cross-checks (adjacent-day consistency): [Sina Finance 2026-05-11 wrap](https://finance.sina.com.cn/headline/2026-05-11/doc-inhxnmvr2086138.shtml), [SSE Composite (000001.SS) on Yahoo Finance](https://finance.yahoo.com/quote/000001.SS/history/)

> Disclaimer: Verification is based on Investing.com public historical data; for publication, treat Wind / SSE official end-of-day file as the final authoritative source.
