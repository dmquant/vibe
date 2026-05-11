---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Investment Committee Chair — Weekly Research Plan (2026-W19)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Investment Committee Chair — Weekly Research Plan (2026-W19)

**Coverage window: 2026-05-04 (Mon) → 2026-05-08 (Fri)**
Plan authored: 2026-05-10 (Sunday, Asia/Singapore)
Analyst role: Investment Committee Chair — responsible for cross-asset, cross-sector synthesis, chairing committee debates, and converging on the final IC resolution.
Document scope: this is the execution blueprint for the downstream research and visualization stages. No deep analysis is performed in this step.

---

## 0. Holiday & trading-day check

The research stage must first reconcile the calendar. The U.S. Memorial Day holiday falls in late May and is **outside** this window. However, **China's Labour Day holiday typically runs 5/1–5/5, so A-share markets are closed 5/4 and 5/5 and reopen 5/6**. **Hong Kong is closed 5/4 (Labour Day public holiday substitution); 5/5 may also be closed if Buddha's Birthday falls there — verify against the HKEX calendar**. Any non-trading day inside the window must be flagged explicitly in the final weekly note, and any "trading-day-only" metric (turnover, advance/decline, realized vol) computed on actual trading days. Do **not** shift the window.

---

## 1. Scope — the 5–8 most material cross-asset developments (to be confirmed by research stage)

The research stage must, for each candidate category below, surface the **top 5–8 items** within 2026-05-04 → 2026-05-08, each with: date + one-line "what happened" + one-line "why it matters."

| # | Candidate category | What to capture | Materiality threshold |
|---|--------------------|----------------|-----------------------|
| S1 | Major central bank policy & official commentary | FOMC May meeting (if dated within the window), statement, dot plot, Powell press conference; ECB / BOE / BOJ / PBoC operations and official remarks | Triggers a single-day move ≥10 bp on 2y/10y UST or ≥0.5% on DXY |
| S2 | Key macro data | U.S. April nonfarm payrolls (released 5/2, spillover into the week); April CPI (typically 5/13 — verify whether in-window); ISM Services (5/5); JOLTS; initial claims; Eurozone GDP advance; China April PMI, exports, CPI/PPI (typical release 5/9–5/11 — verify timing) | Beats/misses Bloomberg consensus by ≥1σ, or drives meaningful repricing in rates/FX |
| S3 | Earnings-season standouts | Tail end of S&P 500 Q1 2026 reporting (~90% reported); names likely in-window: Disney, Uber, Airbnb, Shopify, Arm, Palantir, AMC, Wynn, Trade Desk; final wave of A/H share annual + Q1 reports | Single-stock post-earnings move ≥5% or driving a GICS sub-industry index ≥1.5% intraday |
| S4 | Price action & sector rotation | Weekly returns for S&P 500, Nasdaq 100, Russell 2000; weekly ranking of all 11 GICS sectors; Shanghai Composite, CSI 300, HSTECH, HSI; Stoxx 600; Nikkei 225; MSCI EM | Top-3 weekly range; head-to-tail sector dispersion ≥3 pp |
| S5 | Commodities & energy | WTI, Brent weekly; OPEC+ ministerial signals; Henry Hub gas; gold, silver, LME 3M copper; iron ore 62% Fe | ≥3% single-week move or cross-asset linkage (gold ↔ real yields) |
| S6 | Credit & funding | IG / HY spreads (CDX IG, CDX HY, iTraxx Main, iTraxx Crossover); 3-month SOFR; ON RRP usage; China sovereign curve; Asia USD credit (IG/HY) | Spread move ≥10 bp on the week; SOFR/repo dislocations |
| S7 | Geopolitics / policy / regulation | U.S. election-cycle tariff & industrial policy actions (semis, EV, biotech); CFIUS; SEC/PCAOB China-ADR developments; EU trade probes against China; Mideast geopolitics & oil; cross-Strait dynamics | Announcement-grade events; sector ETF reaction ≥2% |
| S8 | Flows & positioning | Weekly ETF flows for SPY, QQQ, IWM and sector ETFs; A-share northbound flows (where still disclosed); CFTC Commitments of Traders (Friday release reflecting Tuesday positioning) | Top-5 ETF inflow/outflow leaderboard; CFTC net positioning extremes |

**Deliverable: the research stage finalizes 5–8 events from the list above, ordered chronologically, each followed by a one-line "second-order implication for the IC."**

---

## 2. Questions — 4–6 analytical questions the weekly must answer

**Q1: Did risk appetite rise or fall on the week?**
Build the cross-asset evidence chain: index weekly returns, average VIX, UST curve shape change, gold/BTC, HY spreads, EM currency basket. Land on a clear Risk-On / Risk-Off / Mixed verdict.

**Q2: What macro narrative is implied by sector rotation?**
Compare cyclicals vs. defensives, value vs. growth, large vs. small cap, AI compute vs. AI applications vs. non-AI tech. Anchor the rotation interpretation to the 10y TIPS real-yield move on the week.

**Q3: How much did macro data and central-bank commentary reprice the rate-cut path?**
Compare the 5/2 close vs. 5/8 close on OIS-implied cumulative Fed cuts to year-end 2026 and the timing of the first cut; do the same for ECB, BOE, BOJ.

**Q4: Earnings-season tail signals — upgrades or downgrades?**
Track the move in S&P 500 2026 EPS consensus from 5/4 to 5/8 (FactSet / Refinitiv), the EPS beat rate, the revenue beat rate; benchmark against the trailing 4-quarter average to assess whether the "earnings resilience" narrative holds.

**Q5: What changed at the margin for China / Hong Kong?**
A-share post-holiday reopen (from 5/6) liquidity and flows; northbound (where available); policy catalysts; HSTECH vs. HSI relative strength; Asia USD credit spreads; CNY/CNH and PBoC fix vs. market pricing.

**Q6: What are the 2–3 most important debates for the IC next week (W20: 5/11–5/15)?**
Based on the week's evidence chain, the Chair recommends the IC's debate agenda. For each item: bull case, bear case, key indicators to watch.

---

## 3. Data needs — exact series, tickers, and sources per question

### Q1
- Indices: `^GSPC` (S&P 500), `^NDX` (Nasdaq-100), `^RUT` (Russell 2000), `^VIX`, `^MOVE`, `^STOXX`, `^N225`, `000300.SS` (CSI 300), `^HSI`, `^HSTECH`
- Rates: U.S. Treasury 2y / 5y / 10y / 30y closing yields (Treasury.gov daily)
- Credit: CDX IG / HY, iTraxx Main / Xover (Bloomberg or Markit; fallback FRED `BAMLC0A0CM`, `BAMLH0A0HYM2`)
- Safe-haven: `GC=F` (Gold), `BTC-USD`
- EM FX: DXY (`DX-Y.NYB`), JPM EMCI if available, else basket of USDCNH / USDBRL / USDMXN / USDZAR
- Window: weekly return (5/2 close → 5/8 close) plus daily series
- Search keywords: "S&P 500 weekly performance May 4 2026", "VIX week ending May 8 2026", "Treasury yields week May 8 2026"

### Q2
- All 11 GICS sector ETFs: `XLK XLF XLE XLV XLY XLP XLI XLB XLU XLRE XLC` weekly return
- Style factors: `IWF` (growth) vs. `IWD` (value); `IWM` (small) vs. `IWB` (large)
- AI / semis: `SMH`, `SOXX`, `BOTZ`, `ARKK`; single names `NVDA AVGO AMD ASML TSM MSFT GOOGL META AAPL`
- Real yields: 10y TIPS (Treasury.gov or FRED `DFII10`)
- Search: "sector rotation week May 8 2026", "TIPS yields week"; cross-validate

### Q3
- OIS curve: CME FedWatch screenshots at 5/2 and 5/8 for June / July / Sept / Dec 2026 implied cut probabilities
- ECB / BOE / BOJ market expectations: Bloomberg WIRP (or OIS forwards / Reuters reporting)
- Speeches: Federal Reserve Speeches page, 5/4–5/8; ECB / BOE official calendars
- Data calendar: Trading Economics, Investing.com (confirm what actually printed in-window)
- Search: "FOMC May 2026 decision", "Fed funds futures pricing May 8 2026", "ISM Services May 5 2026"

### Q4
- FactSet Earnings Insight weekly PDF (compare 5/3 and 5/10 issues)
- Refinitiv I/B/E/S weekly earnings revisions
- Earnings calendar: earningswhispers.com, zacks.com (5/4–5/8)
- Likely names: Disney (~5/7), Uber, Airbnb, Shopify, Arm, Palantir, Wynn, Trade Desk (final list per calendar)
- Search: "FactSet Earnings Insight May 9 2026", "Q1 2026 earnings season blended growth rate"

### Q5
- A-shares: `000001.SS`, `399001.SZ`, `000300.SS`, `399006.SZ`, `000688.SS`; turnover (DCE/SSE)
- Hong Kong: `^HSI`, `^HSTECH`, `^HSCEI`; HSCI industry indices
- Northbound: HKEX Stock Connect daily report (post-2024-08 only end-of-day net amounts disclosed)
- China rates / Asia USD credit: Markit iBoxx ADBI / ADHY; China 10y govie (CFETS / chinabond)
- FX: `USDCNY=X`, `USDCNH=X`, PBoC daily fix (09:15 Beijing)
- Search: "China policy May 2026 stimulus", "Politburo meeting late April 2026 readout"

### Q6
- Synthesize Q1–Q5 + W20 calendar: U.S. CPI (typical 5/13), PPI, retail sales; China April activity data, TSF, CPI/PPI; earnings: Walmart, Home Depot
- Search: "economic calendar week May 11 2026", "Walmart earnings date Q1 2026"

---

## 4. Visualizations — 3–5 core charts / tables

| # | Form | X-axis / Rows | Y-axis / Columns / Values | Takeaway |
|---|------|--------------|---------------------------|----------|
| V1 | Horizontal bar | Asset classes (S&P 500, NDX, RUT, Stoxx 600, Nikkei 225, CSI 300, HSI, 10y UST yield Δbp, DXY, Brent, Gold, CDX HY OAS Δbp) | Weekly change (% or bp) | One-glance map of risk appetite & cross-asset dispersion |
| V2 | Vertical bar + overlay | 11 GICS sectors + style buckets (Growth/Value/SmallCap/LargeCap) | Weekly return (%); right-axis annotation: 10y TIPS Δbp | Reveals whether rotation is driven by real-rate sensitivity or by cyclical/growth themes |
| V3 | Dual-line | Date (5/2 → 5/8 daily close) | Left axis: CME FedWatch implied Dec 2026 fed funds rate (bp); right axis: U.S. 10y nominal yield | Direction & velocity of rate-path repricing |
| V4 | Table | Macro releases in-window (rows) | Actual / consensus / prior / surprise direction / 5-min market reaction (S&P, 10y, DXY) | Tabular one-liner per data point |
| V5 | Heatmap | Rows: 11 S&P sectors; Columns: 5/4 / 5/5 / 5/6 / 5/7 / 5/8 | Cell: daily sector return (%), green-red shading | Daily rotation rhythm; spots concentrated bursts or defensive days |

Optional **V6 — IC W20 Debate Agenda Table**: 4 columns — topic / bull case / bear case / key indicator (with release timing).

---

## 5. Deliverable outline — final weekly report structure

| Section | One-line goal |
|--------|---------------|
| Executive Summary | ≤ 5 lines on cross-asset risk verdict, top events, and directional view for the portfolio |
| 1. Top 5–8 events of the week | Chronological recap, ≤ 3 lines each (What / Why / Implication) |
| 2. Cross-asset risk appetite (Q1) | V1 + short verdict: Risk-On / Off / Mixed plus dominant driver |
| 3. Sector & style rotation (Q2) | V2 + V5 heatmap + interpretation of the rotation's macro narrative |
| 4. Central banks & rate-cut repricing (Q3) | V3 + V4: cumulative impact of in-window data and speeches on the curve |
| 5. Earnings-season signals (Q4) | Text + chart (beat-rate and consensus-revision dual indicators); test "earnings resilience" narrative |
| 6. China / HK deep dive (Q5) | A-share post-holiday open, HK relative strength, FX & USD credit; standalone takeaway |
| 7. IC debate agenda for next week (Q6) | V6 table — 2–3 core debates with bull/bear/indicator triplet |
| 8. Risks & watch list | W20 calendar: data, earnings, central bank speakers; flag residual uncertainty from this week |
| Appendix | Data sources, calculation conventions, glossary |

---

## 6. Execution notes for the research stage (Chair's perspective)

- **Unified return convention**: all "weekly returns" are computed Friday-close to Friday-close (2026-05-01 close → 2026-05-08 close), noted in the appendix. If a market was closed on 5/1 (e.g. China A-shares), use the most recent prior trading-day close (e.g. 4/30).
- **Timing**: data extraction for the research stage should be complete no later than 2026-05-10 (Sunday) so that all closes are final.
- **Conflict resolution**: if data sources disagree by ≥0.2% (price) or ≥5 bp (yield), priority order is exchange/official > Bloomberg/Refinitiv > Yahoo/Stooq; footnote the source used.
- **Do not** issue investment recommendations during the research stage. The final view is delivered through Section 7's debate agenda (topic + arguments) and adjudicated in the IC meeting.
- **Cross-analyst coordination**: this plan assumes downstream sub-analysts (rates, credit, equities, FX, commodities, EM) will each deliver vertical notes. The Chair's role is synthesis and adjudication, not depth in any single asset class.

---

*This file is a plan, not the weekly note. The research stage will gather data per this plan and produce `02_weekly_research.md`; the visualization stage will deliver `03_charts/`.*
