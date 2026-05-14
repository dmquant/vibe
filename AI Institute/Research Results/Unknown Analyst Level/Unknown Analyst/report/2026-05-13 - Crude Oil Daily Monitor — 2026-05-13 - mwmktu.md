---
source: ai-institute
resource_type: research-result
report_kind: report
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Crude Oil Daily Monitor — 2026-05-13

Kind: **report**
Analyst: **(unknown)**

## Links

- Report type: [[report]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Crude Oil Daily Monitor — 2026-05-13

## Executive Summary
Per the institute's vetted internal data API (`oil_prices` topic, confidence=medium, is_stale=false, source_tier=B), Brent closed at 107.28 USD/bbl and WTI at 101.78 USD/bbl on 2026-05-13, with a Brent–WTI spread of roughly 5.5 USD. On the supply side, the OPEC+ "seven" agreed on May 3 to a symbolic 188 kbpd quota hike for June, but the Strait of Hormuz has been effectively obstructed since late February amid the US–Israel–Iran conflict, and Saudi Aramco CEO Amin Nasser estimates the market is losing ~100 mb of supply per week. On the demand side, EIA commercial crude stocks drew 2.314 mb for the week ending May 1 to 457.2 mb — a smaller draw than the 3.3 mb consensus — alongside a small dip in refinery runs. Net-net, the supply shock remains the dominant driver and Brent looks anchored in a 100–110 USD high-range trading regime.

## 1. Price Action

| Metric | Close (USD/bbl) | Daily Change % | Source |
|--------|-----------------|----------------|--------|
| Brent (front-month) | 107.28 | N/A (field not returned by API) | Internal API → [stooq cb.f](https://stooq.com/q/l/?s=cb.f&i=d&f=sd2t2ohlc) |
| WTI (CL front-month) | 101.78 | N/A (field not returned by API) | Internal API → [stooq cl.f](https://stooq.com/q/l/?s=cl.f&i=d&f=sd2t2ohlc) |
| Brent–WTI spread | 5.50 | — | Derived from the two rows above |

Note: the internal API payload currently exposes only `brent_close_usd` and `wti_close_usd`, not `brent_change_pct` / `wti_change_pct`, so daily-change cells are marked N/A. API `fetched_at=1778630456827`, `is_stale=false` — directly usable, no refresh needed.

External cross-check: tradingeconomics reports Brent at 104.97 USD/bbl on May 12 ([source](https://tradingeconomics.com/commodity/brent-crude-oil)). The +2.2% gap vs. the API is well below the 10% plausibility threshold; per the data-discipline rule we adopt the API value. Difference is plausibly explained by contract month and settlement timing.

## 2. OPEC+ and Supply-side Dynamics
- **OPEC+ seven-nation ministerial, May 3**: Saudi Arabia, Russia, Iraq, Kuwait, Kazakhstan, Algeria and Oman agreed to a collective 188 kbpd output increase for June. The UAE announced its withdrawal from OPEC/OPEC+ on April 28, so the meeting proceeded as a "seven", not eight. The hike is widely read as symbolic, since Iran and parts of Gulf capacity cannot physically deliver under wartime constraints. [Source: Bloomberg](https://www.bloomberg.com/news/articles/2026-05-03/opec-agrees-to-symbolic-june-quota-increase-delegates-say); [Moscow Times](https://www.themoscowtimes.com/2026/05/03/opec-hikes-oil-production-quotas-without-mentioning-uae-exit-a92668).
- **Next ministerial** is scheduled for 2026-06-07; OPEC+ has shifted to a monthly cadence to monitor market conditions and compliance. [Source: EBC](https://www.ebc.com/forex/when-is-the-next-opec-meeting-2026-schedule-and-impact)
- **Strait of Hormuz** has been functionally obstructed since late February 2026. The US–Israel strike campaign against Iran continues; President Trump said the US–Iran ceasefire is on "massive life support", while Tehran has demanded the US end its naval blockade. Saudi Aramco CEO Amin Nasser estimates a ~100 mb/week supply loss, warning that rebalancing could slip into next year if disruption persists. [Source: tradingeconomics commentary](https://tradingeconomics.com/commodity/brent-crude-oil); [CNBC](https://www.cnbc.com/2026/03/01/opec-to-raise-oil-output-slightly-even-as-iran-war-disrupts-shipments.html)

## 3. Inventories and Demand
- **EIA Weekly (week ending 2026-05-01, released May 6)**: Commercial crude stocks drew 2.314 mb to 457.2 mb vs. consensus -3.3 mb; Cushing hub -0.648 mb. Refinery crude runs fell 42 kbpd, utilization down 0.5 ppt. Gasoline -2.504 mb to 219.8 mb (beat -2.1 mb consensus); distillates -1.294 mb to 102.3 mb (missed -2.4 mb). Next WPSR is due 2026-05-13. [Source: EIA WPSR](https://www.eia.gov/petroleum/supply/weekly/)
- Read: smaller-than-expected crude draw plus easing refinery runs suggests US demand is softening at the margin under high prices. Absolute crude stocks remain below the five-year average, however, and the driving-season build window should partially offset.

## 4. Conclusions and Watch Items
1. **Core view**: Hormuz disruption plus a nominal-but-undeliverable OPEC+ hike keeps physical supply tight; Brent is most likely to oscillate in the 100–110 USD high range, with upside breakout conditional on any second-round escalation against Iranian oil infrastructure.
2. **Watch US demand for marginal softening**: with crude draws missing and refinery runs slipping, another weak EIA print on May 13 could create a genuine tug-of-war between supply shock and demand destruction.
3. **UAE's OPEC/OPEC+ exit is underpriced**: ~4 mbpd of UAE spare capacity will sit outside the quota framework. The June 7 ministerial is the next material checkpoint.

Watch list:
- 2026-05-13 EIA WPSR (tonight)
- 2026-06-07 OPEC+ ministerial
- Strait of Hormuz transit status / US–Iran ceasefire negotiations

## Data Sources
**Internal API**
- `GET /api/data/oil_prices/2026-05-13` — confidence=medium, is_stale=false, source_tier=B
  - Upstream: [stooq cb.f](https://stooq.com/q/l/?s=cb.f&i=d&f=sd2t2ohlc), [stooq cl.f](https://stooq.com/q/l/?s=cl.f&i=d&f=sd2t2ohlc)

**web_search fallback (fields not covered by API)**
- [Bloomberg — OPEC Agrees to Symbolic June Quota Increase (2026-05-03)](https://www.bloomberg.com/news/articles/2026-05-03/opec-agrees-to-symbolic-june-quota-increase-delegates-say)
- [Moscow Times — OPEC+ Hikes Production Quotas (2026-05-03)](https://www.themoscowtimes.com/2026/05/03/opec-hikes-oil-production-quotas-without-mentioning-uae-exit-a92668)
- [EBC — OPEC 2026 Meeting Schedule](https://www.ebc.com/forex/when-is-the-next-opec-meeting-2026-schedule-and-impact)
- [CNBC — OPEC+ to Raise Output Even as Iran War Disrupts Shipments](https://www.cnbc.com/2026/03/01/opec-to-raise-oil-output-slightly-even-as-iran-war-disrupts-shipments.html)
- [tradingeconomics Brent commentary](https://tradingeconomics.com/commodity/brent-crude-oil)
- [EIA Weekly Petroleum Status Report](https://www.eia.gov/petroleum/supply/weekly/)

## Data Discovery
The `oil_prices` topic does not currently expose the following fields. Suggested additions for the data-science catalog review:
- `brent_change_pct`, `wti_change_pct` (daily percentage change)
- `opec_target_kbpd` (OPEC+ target output)
- `eia_inventory_change_kb` (EIA weekly inventory change)
- `cushing_stock_kb` (Cushing inventory)
- `refinery_utilization_pct` (refinery utilization rate)

```json
{"follow_ups":[
  {"to":"global-macro","subject":"Macro transmission of a sustained Hormuz disruption","question":"If the Strait of Hormuz remains effectively obstructed through Q3 2026 (baseline supply loss ~100 mb/week), please assess the transmission path and timeline to global CPI, the DXY, and the policy paths of the Fed, ECB and BoE, and provide probability-weighted core macro scenarios at the 3-month and 6-month horizons.","priority":"high"}
]}
```
