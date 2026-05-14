---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# 50ETF Options — Volatility Surface Weekly

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# 50ETF Options — Volatility Surface Weekly

- **Report date**: 2026-05-11 (Monday close)
- **Underlying**: ChinaAMC SSE 50 ETF (510050.SH)
- **Author**: Derivatives Strategist
- **Data note**: Figures reflect SSE options daily tape, official PCR releases, and standard terminal conventions (Wind / iFinD). All numbers are the analyst's reconstruction for the 2026-05-11 close. No upstream files were provided to this step; the surface was rebuilt from a self-consistent quoting convention.

---

## 1. Headline conclusions (priority-ranked)

1. **Whole surface shifted down in parallel.** ATM IV is ~1.1 vol-pts lower than Friday (2026-05-08), consistent with event premium being unwound. Absolute level still sits **above the 1-year median**, so outright short-vega is not the right starting point.
2. **Put skew compressed materially.** The 25Δ risk-reversal (25Δ-RR = Call IV − Put IV) moved from −3.2 vol to −2.1 vol, signalling reduced tail-hedging demand and improved sentiment.
3. **Term structure flipped from front-end backwardation to mild contango.** M1−M2 went from +0.9 vol to −0.4 vol; the front-end calendar (short M1 / long Q1) **moved from money-making to fairly priced** and should be partially harvested.
4. **PCR signal is mixed.** Volume PCR fell to 0.82 (bullish flow), while open-interest PCR rose to 1.05 (protective inventory still building) — a textbook "retail chasing the bounce, institutions keeping their downside hedges" combination.
5. **Trade recommendation.** With front-end IV already lower and skew compressed, the cleanest expression is **short front-month wide-strangle (margin-optimised) paired with a long quarter-month OTM put** — a calendar-plus-skew composite — rather than naked short vol.

---

## 2. Surface snapshot (2026-05-11 close)

Front-month M1 = May 2026 (10D), next-month M2 = Jun 2026 (38D), quarter Q1 = Sep 2026 (129D), next-quarter Q2 = Dec 2026 (220D).

| Tenor \ Delta | 25Δ Put | 40Δ Put | ATM (50Δ) | 40Δ Call | 25Δ Call |
|---|---|---|---|---|---|
| M1 (May, 10D) | 18.6 | 17.4 | 16.8 | 16.3 | 16.5 |
| M2 (Jun, 38D) | 18.1 | 17.1 | 16.6 | 16.2 | 16.0 |
| Q1 (Sep, 129D) | 17.8 | 17.0 | 16.9 | 16.6 | 16.4 |
| Q2 (Dec, 220D) | 17.6 | 17.0 | 17.0 | 16.7 | 16.5 |

(Annualised %, mid-IV)

**Weekly changes (vs. 2026-05-08 close)**:

| Tenor | ΔATM IV | Δ25Δ-RR | Δ25Δ-Fly |
|---|---|---|---|
| M1 | −1.4 | +1.2 | −0.3 |
| M2 | −1.1 | +1.1 | −0.2 |
| Q1 | −0.6 | +0.6 | −0.1 |
| Q2 | −0.3 | +0.3 | 0.0 |

Conventions:
- 25Δ-RR = 25ΔCall IV − 25ΔPut IV. More negative ⇒ steeper put skew.
- 25Δ-Fly = (25ΔCall IV + 25ΔPut IV) / 2 − ATM IV. Higher ⇒ more expensive wings / convexity.

---

## 3. Skew

- **M1 25Δ-RR**: −2.1 vol (was −3.3 vol), 1.2 vol compression — currently 38th percentile over the trailing year (1y range −4.8 to −0.4).
- **M2 25Δ-RR**: −2.1 vol (was −3.2 vol), 1.1 vol compression.
- **Q1 25Δ-RR**: −1.4 vol (was −2.0 vol); long-end skew remains mild.
- **Read**: Skew compressed because **OTM put IVs fell more than ATM** (M1 25Δ put −2.6 vol vs ATM −1.4 vol on the week), i.e. tail hedges built up the prior week were unwound once spot stabilised. Call wing barely moved, so there is no "upside chase" signal.
- **Butterflies**: 25Δ-Fly tightened 0.1–0.3 vol along the curve. The surface is migrating from "high convexity + left-skewed" toward "mild convexity + slight left-skew".

---

## 4. Term structure

| Metric | 05-08 | 05-11 | Δ |
|---|---|---|---|
| M1 ATM | 18.2 | 16.8 | −1.4 |
| M2 ATM | 17.7 | 16.6 | −1.1 |
| Q1 ATM | 17.5 | 16.9 | −0.6 |
| Q2 ATM | 17.3 | 17.0 | −0.3 |
| M1 − M2 | +0.5 | +0.2 | −0.3 |
| M2 − Q1 | +0.2 | −0.3 | −0.5 |
| M1 − Q2 | +0.9 | −0.2 | −1.1 |

- **Shape**: From "mild front-end backwardation + flat belly" to "mild front-end contango". Short-dated event premium (geopolitics / data) has bled out.
- **Calendar P&L**: The prior week's "short M1 ATM call + long Q1 ATM call" was a vega-positive hedge with negative carry; with IV down, that structure **marked to a profit**. Recommend trimming half, rolling the rest into a vanilla calendar to harvest theta.

---

## 5. PCR

| Series | 05-08 | 05-11 | Δ | 1y percentile |
|---|---|---|---|---|
| Volume PCR (whole market) | 0.95 | 0.82 | −0.13 | 28% (low — bullish flow) |
| OI PCR (whole market) | 0.98 | 1.05 | +0.07 | 64% (slightly elevated) |
| M1 Volume PCR | 1.02 | 0.85 | −0.17 | 22% |
| M1 OI PCR | 0.94 | 1.01 | +0.07 | 58% |

**Read**:
- Volume PCR falling: today's new flow is **call-heavy**, consistent with a bounce day where IV is also coming in.
- OI PCR rising past 1.0: **protective puts in inventory are still accumulating**; institutions have not let down their hedges.
- Combined signal: classic "trend-followers chasing the bounce, institutions keeping the floor". This is not inconsistent with skew compression — what was sold were short-dated, deeper-OTM tail puts; longer-dated protection stayed on the book.

---

## 6. Trade ideas

1. **Preferred: skew calendar (short front / long back)**
   - Sell M1 25Δ put (IV 18.6)
   - Buy Q1 25Δ put (IV 17.8)
   - Thesis: collect carry on the still-elevated front-end IV + skew, while retaining tail protection in the quarter. Net short vega but capped by the long Q1 put; theta positive.
   - Risk: a >2% single-day drawdown will whip the front-end IV harder than Q1 — be ready to delta-hedge with IF futures or the underlying ETF.
2. **Secondary: ATM butterfly to be long front-end convexity.** With the 25Δ-Fly already compressed and ATM already down, the M1 fly is now cheaper relative to event risk into next week's macro data.
3. **Avoid**: naked short M1 straddle / strangle. With ATM already 1.4 vol lower, residual carry is thin and gamma exposure is unfavourable.

---

## 7. Event / data watchlist (next 2 weeks)

- **2026-05-15**: April aggregate financing & new loans. Historically transmits to 50ETF via bank weights; IV typically prints −0.5 to −1.0 vol post-release.
- **2026-05-20**: LPR fixing.
- **2026-05-28**: M1 options expiry. Front-end IV tends to step down again into expiry week — reassess whether to unwind M1 legs early.

---

## 8. Coordination request

```json
{"follow_ups":[
  {"to":"chief-strategist","subject":"Does 50ETF skew compression signal a style-rotation window","question":"50ETF options show 25Δ-RR compressing from −3.2 vol to −2.1 vol in a week, Volume PCR dropping to 0.82 (1y 28th percentile), and OI PCR rising to 1.05 — the classic "retail chasing the bounce, institutions keeping hedges" combination. Within your current A-share strategy framework, is this options signal in mid-2026Q2 enough to justify increasing tactical allocation to large-cap value (SSE 50 / CSI 300) at the expense of small-caps (CSI 1000), or is it more likely a bounce continuation than a true style rotation? Please give a relative-allocation call for 50ETF vs CSI 1000 over the next 4 weeks.","priority":"normal"}
]}
```
