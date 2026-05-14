---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Major FX Pairs Daily — 2026-05-14

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Major FX Pairs Daily — 2026-05-14

## Executive Summary
The dollar is broadly soft today: DXY prints **98.453**, clearly below the 100 psychological level, reflecting the market's pricing of the Fed's forward easing path (UST10Y 4.46% vs UST2Y 3.98%, 2s10s at +48bp — the curve has dis-inverted). EUR/USD has anchored at **1.1717** on tighter US-EU rate differentials and a weaker dollar. USD/JPY, however, remains stretched at **157.80** — the yen is still the dominant carry funder. UST10Y 4.46% against a still-accommodative BOJ stance keeps the static carry intact, but price is now inside the MoF intervention sensitivity zone (150–158). The yuan is on the strong side: USD/CNY **6.7903** sits near the recent range lows, consistent with USD/HKD **7.8295** (neutral-to-strong half of the HKMA band) — pointing to easier offshore USD liquidity. Commodity currencies diverge despite Brent 105.75 and Gold 4700: AUD/USD 0.7260 holds firm, USD/CAD 1.3704 trades soft (CAD strong) — driven more by the weak-dollar tape than by oil.

## 1. FX Quote Table

| Pair    | Spot      | Source                  |
| ------- | --------- | ----------------------- |
| EUR/USD | 1.17174   | markets_overnight_us    |
| USD/JPY | 157.798   | markets_overnight_us    |
| GBP/USD | 1.35271   | fx_majors               |
| AUD/USD | 0.72595   | fx_majors               |
| USD/CAD | 1.37044   | fx_majors               |
| USD/CHF | 0.78152   | fx_majors               |
| USD/CNY | 6.7903    | fx_majors               |
| USD/HKD | 7.82945   | fx_majors               |
| DXY     | 98.453    | markets_overnight_us    |

Confidence: fx_majors=high, markets_overnight_us=high, is_stale=false.

## 2. Dollar Composite + Carry Lens

**DXY / cross consistency.** DXY 98.45 below 100 lines up with a firm EUR/USD 1.1717 and a strong CHF (USD/CHF 0.7815). The one cross that does not corroborate the "weak USD" narrative is USD/JPY 157.80 — that is not dollar strength but yen weakness driven by structural carry flows. USD/CAD 1.3704 trades on the soft side and is directionally consistent with the broader USD slide.

**USD/JPY carry structure.** UST10Y at 4.46% and UST2Y at 3.98% versus the BOJ's still-low policy rate keep the static carry materially positive: yen funding remains cheap; the USD asset leg yields 4–5%. This static spread is the structural support under USD/JPY. **The risk**: 157.80 is inside the Japanese MoF's historical intervention zone (verbal and actual operations have clustered around this area before). With positioning crowded and the intervention tail-risk rising, the risk/reward of being long USD/JPY here is poor — the overnight downside (multi-percent gap risk) far outweighs the incremental upside.

**Commodity currencies & oil/gold.** Brent 105.75 / WTI 100.81 sit at year-to-date highs, which would normally bid CAD, yet USD/CAD at 1.3704 has not fully priced the oil tail — likely because BoC is read as relatively dovish on the policy path while the weak-USD tape does most of the work for CAD. Gold at 4700 is at record-area; AUD/USD 0.7260 is steady but has not tracked gold to fresh highs, consistent with AUD being driven more by China demand / iron ore than by safe-haven metals correlation.

## 3. CNY and Offshore Lens

**USD/CNY vs USD/HKD relative moves.** USD/CNY 6.7903 sits on the strong-yuan side of the multi-month range. USD/HKD 7.8295 sits on the neutral-to-weak half of the 7.75–7.85 peg band, ~50pip of cushion above the weak-side convertibility trigger (no forced HKMA USD buying). The two are directionally consistent and tell us: (i) the yuan is pricing the US trade surplus dynamic plus PBOC's stabilising stance; (ii) offshore HKD has not forced HKMA action — i.e. USD liquidity is easy, again consistent with a softer DXY.

**China-US rate differential.** UST10Y 4.46%. China 10Y is broadly in the 1.6–1.8% area (needs web_search confirmation). That leaves the China-US 10Y spread inverted by roughly 260–280bp — in theory dollar-positive / yuan-negative. The fact that USD/CNY is nevertheless on the strong-yuan side tells us the differential is not the dominant pricing factor; the tape is being driven by: (a) the weak DXY pass-through, (b) exporter conversion + countercyclical adjustments, and (c) the PBOC mid-fix signal.

**Central bank tone.** Watch whether the PBOC mid-fix is being set systematically stronger than survey expectations — the cleanest tell on the stabilisation stance. Also watch for any rumours of countercyclical-factor reactivation or fresh offshore CNY bill issuance (CNH liquidity tool).

## 4. Risk Events + Policy Calendar

> Framework only — confirm exact dates and times via web_search before acting.

- **Fed minutes / FOMC speakers**: with the curve dis-inverted, market pricing of the easing path is contested — speaker tone will dominate near-term DXY direction this week.
- **BOJ communication**: USD/JPY at 157.80 sits inside the intervention zone; any MoF or BOJ Governor remark on "excess volatility" can trigger a 1–2% single-day reversal.
- **ECB / euro-area PMI / CPI**: durability of EUR/USD 1.17 depends on data confirming ECB can hold.
- **PBOC mid-fix + China trade data**: the downside in USD/CNY (sub-6.78) hinges on fix signalling and exporter flow.

## 5. Trade Conclusions

1. **Tactical short USD/JPY** in the 157–158 zone, stop 159.50, target 154 — the carry's risk/reward is broken by crowded positioning + intervention tail risk; weak DXY will eventually pass through to JPY.
2. **Tactical long EUR/USD** on pullbacks to 1.165, target 1.185, stop 1.158 — trend lower DXY + closing US-EU rate gap.
3. **USD/CNY short bias** within 6.78–6.82 — PBOC stabilisation mix plus the weak-DXY beta.
4. **AUD/USD neutral** — wait for a clean 0.730 breakout or a 0.720 pullback to add; the China iron-ore demand variable is the key swing factor.

## Data Sources

- **Internal API**: `fx_majors` (USDCNY/USDHKD/GBPUSD/AUDUSD/USDCAD/USDCHF, confidence=high), `markets_overnight_us` (EURUSD/USDJPY/DXY/UST10Y/Gold, confidence=high), `yield_curve_us` (UST2/5/10/30Y, confidence=high), `oil_prices` (Brent/WTI, confidence=medium); work_date=2026-05-14, is_stale=false.
- **web_search** (pending confirmation): latest China 10Y yield, this week's FOMC/BOJ/ECB/PBOC calendar, latest Japan MoF verbal intervention remarks.

```json
{"follow_ups":[
  {"to":"china-macro","subject":"China 10Y yield and PBOC mid-fix signal","question":"What is today's China 10Y government bond yield? Over the past week, has the PBOC USD/CNY mid-fix been set systematically stronger than survey expectations (i.e. a stronger-yuan bias)? Are there any signs of countercyclical-factor reactivation or fresh offshore CNY bill issuance? Do these signals support a further break of USD/CNY below 6.78?","priority":"high"},
  {"to":"global-macro","subject":"USD/JPY intervention risk and carry-trade crowding","question":"How close is USD/JPY at 157.80 to the MoF's historical intervention triggers? What is the latest CFTC speculative net-short JPY positioning vs its historical percentile? If the BOJ delivers a normalisation signal at its upcoming meeting, what is the 1-week downside tail in USD/JPY (please assign rough probabilities to a 1% / 3% / 5% drawdown)?","priority":"high"}
]}
```
