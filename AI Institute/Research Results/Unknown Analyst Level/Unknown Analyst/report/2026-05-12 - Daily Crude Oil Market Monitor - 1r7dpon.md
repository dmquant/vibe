---
source: ai-institute
resource_type: research-result
report_kind: report
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Daily Crude Oil Market Monitor

Kind: **report**
Analyst: **(unknown)**

## Links

- Report type: [[report]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Daily Crude Oil Market Monitor

**Date**: 2026-05-12 (Asia/Singapore)
**Author**: Energy Sector Analyst
**Sourcing discipline**: Prices come from the institute's internal `oil_prices` API (is_stale=false, confidence=medium, source_tier=B); no web re-verification was performed for those numbers. OPEC+, inventory, and geopolitics sections use web_search as a fallback because the topic is not yet covered by the API.

---

## Executive Summary

As of 2026-05-12, Brent closed at **USD 104.45/bbl** and WTI at **USD 98.34/bbl**, leaving a spread near USD 6.1/bbl and keeping prices inside the elevated range that has prevailed since Iran's March 2026 closure of the Strait of Hormuz. The IEA has labelled the closure the "largest supply disruption in the history of the global oil market", with weekly losses estimated near 100 million barrels ([source](https://cryptobriefing.com/strait-of-hormuz-closure-disrupts-20-of-global-oil-supply-amid-us-iran-conflict/)). At its first meeting after the UAE's exit, OPEC+ on 3 May raised the June quota by 188 kb/d — a symbolic gesture, since most Gulf spare capacity is trapped behind the blockade ([source](https://www.cnbc.com/2026/05/03/opec-announces-188000-barrels-per-day-output-increase-.html)). U.S. EIA weekly stocks for the week ending 1 May fell 2.3 mb to 457.2 mb, still about 1% above the five-year average ([source](https://ir.eia.gov/wpsr/wpsrsummary.pdf)).

---

## 1. Price Action

| Metric | Close (USD/bbl) | Day change % | Source |
|---|---|---|---|
| Brent (cb.f) | 104.45 | Not returned by API | [stooq cb.f](https://stooq.com/q/l/?s=cb.f&i=d&f=sd2t2ohlc) |
| WTI (cl.f) | 98.34 | Not returned by API | [stooq cl.f](https://stooq.com/q/l/?s=cl.f&i=d&f=sd2t2ohlc) |
| Brent–WTI spread | 6.11 | — | Derived |

**Note**: The API returns close only; `brent_change_pct` / `wti_change_pct` were absent. We deliberately did NOT patch day-change via web_search to avoid pulling un-vetted feeds (logged in "Data Discovery" below). Brent diverges from a training-era intuition (~USD 75–80/bbl in late 2024) by more than 30%; per the hard rule, **the API number is adopted** — intuition vs. data conflict, data wins. The gap is consistent with the 2026 Hormuz crisis backdrop.

---

## 2. OPEC+ and Supply-Side Dynamics

- **3 May OPEC+ meeting**: After the UAE's formal exit, the remaining 7 members (Saudi Arabia, Russia, Iraq, Kuwait, Kazakhstan, Algeria, Oman) agreed a **188 kb/d** collective hike for June, with no mention of the UAE in the communiqué — a signal of alliance continuity ([CNBC](https://www.cnbc.com/2026/05/03/opec-announces-188000-barrels-per-day-output-increase-.html); [Moscow Times](https://www.themoscowtimes.com/2026/05/03/opec-hikes-oil-production-quotas-without-mentioning-uae-exit-a92668)).
- **Limited pass-through to actual barrels**: Most Gulf spare capacity sits inside the Strait of Hormuz and is choked by the blockade — paper hikes do not translate into deliverable volumes ([Al Jazeera](https://www.aljazeera.com/news/2026/4/5/opec-agrees-to-hike-oil-output-warns-of-slow-recovery-after-attacks)).
- **Saudi Aramco CEO (11 May)**: If the Hormuz disruption extends past mid-June, the oil market may not normalize until **2027**; even an immediate re-opening would require months to rebalance ([CNBC](https://www.cnbc.com/2026/05/11/saudi-aramco-oil-iran-war-strait-hormuz.html); [Newsmax](https://www.newsmax.com/world/globaltalk/iran-strait-of-hormuz-oil-prices/2026/05/11/id/1255870/)).
- **Geopolitical escalation**: 4 May reports of an Iranian strike on the UAE while the U.S. presses to re-open the Strait; the U.S.–Iran ceasefire is "on life support" ([CNBC](https://www.cnbc.com/2026/05/04/oil-prices-today-wti-brent-trump-iran-us-hormuz.html)).

---

## 3. Inventories and Demand

EIA Weekly Petroleum Status Report (week ending 2026-05-01, released 6 May; next release scheduled 13 May):

| Item | Value | Change | Source |
|---|---|---|---|
| U.S. commercial crude stocks | 457.2 mb | −2.3 mb w/w; +1% vs 5-yr avg | [EIA WPSR](https://ir.eia.gov/wpsr/wpsrsummary.pdf) |
| Refinery inputs | 16.0 mb/d | — | [EIA WPSR](https://ir.eia.gov/wpsr/wpsrsummary.pdf) |
| Refinery utilization | 90.1% | — | [EIA WPSR](https://ir.eia.gov/wpsr/wpsrsummary.pdf) |
| Gasoline stocks | 219.8 mb | −2.504 mb w/w | [EIA WPSR](https://ir.eia.gov/wpsr/wpsrsummary.pdf) |
| Distillate stocks | 102.3 mb | −1.294 mb w/w | [EIA WPSR](https://ir.eia.gov/wpsr/wpsrsummary.pdf) |

Sequential stock draws alongside high refinery runs suggest product demand is holding up under the geopolitical shock; absolute stocks remain above the 5-year average, leaving some buffer. Wednesday's (13 May) EIA print is the next focal data point.

---

## 4. Conclusions and Watch List

**Calls**:
1. **The price floor is propped up by Hormuz risk premium.** The IEA's "largest supply disruption in history" framing means OPEC+ paper hikes cannot offset ~100 mb/week of lost supply. Brent above USD 100 has near-term resilience.
2. **OPEC+'s 188 kb/d hike is largely a political signal** to manage the optics of the UAE exit — actual delivery is constrained by the blockade.
3. **U.S. fundamentals are tightening but not extreme.** Stocks remain 1% above the 5-yr average, providing a short buffer; 90.1% utilization shows demand has not cracked.

**Watch list**:
- 13 May EIA print — continuing draws and gasoline build into the U.S. driving season.
- Any U.S.–Iran ceasefire progress or signs of Hormuz re-opening — the single "cliff-edge bearish" trigger.
- UAE's independent production policy and export routing post-exit (its crude largely transits Hormuz).

---

## Data Discovery

Fields needed for this report that are NOT covered by the `oil_prices` API and required a web_search fallback — please consider adding in the next data-catalog review:

- `brent_change_pct` / `wti_change_pct` (daily % change; API returns close only)
- `opec_target_kbpd` (OPEC+ published collective monthly target)
- `eia_inventory_change_kb` (EIA weekly commercial crude inventory delta)
- `eia_refinery_utilization_pct` (EIA refinery utilization rate)
- `geopolitical_risk_flag` (enum for Hormuz / Suez / Red Sea status)

---

## Sources

**Internal API (institute-vetted)**
- `oil_prices/2026-05-12`: Brent 104.45, WTI 98.34; confidence=medium; is_stale=false; fetched_at=1778544054926
  - <https://stooq.com/q/l/?s=cb.f&i=d&f=sd2t2ohlc>
  - <https://stooq.com/q/l/?s=cl.f&i=d&f=sd2t2ohlc>

**web_search fallback**
- OPEC+ 3 May decision: <https://www.cnbc.com/2026/05/03/opec-announces-188000-barrels-per-day-output-increase-.html>
- Moscow Times (OPEC+ silent on UAE exit): <https://www.themoscowtimes.com/2026/05/03/opec-hikes-oil-production-quotas-without-mentioning-uae-exit-a92668>
- Al Jazeera (OPEC+ hike and post-attack recovery): <https://www.aljazeera.com/news/2026/4/5/opec-agrees-to-hike-oil-output-warns-of-slow-recovery-after-attacks>
- Saudi Aramco CEO remarks (11 May): <https://www.cnbc.com/2026/05/11/saudi-aramco-oil-iran-war-strait-hormuz.html>
- Newsmax, same topic: <https://www.newsmax.com/world/globaltalk/iran-strait-of-hormuz-oil-prices/2026/05/11/id/1255870/>
- Iran strike on UAE / U.S. push to re-open Hormuz: <https://www.cnbc.com/2026/05/04/oil-prices-today-wti-brent-trump-iran-us-hormuz.html>
- Hormuz closure disrupts 20% of global supply: <https://cryptobriefing.com/strait-of-hormuz-closure-disrupts-20-of-global-oil-supply-amid-us-iran-conflict/>
- EIA Weekly Petroleum Status Report (week ending 2026-05-01): <https://ir.eia.gov/wpsr/wpsrsummary.pdf>

---

```json
{"follow_ups":[
  {"to":"global-macro","subject":"Pass-through of a sustained Hormuz closure to global inflation and central-bank paths","question":"Assume the Strait of Hormuz remains closed through July 2026 and Brent stays in a USD 100–110/bbl range. Please assess the pass-through to G7 core inflation (especially the U.S. and the euro area) and the most likely shift in the Fed's and ECB's reaction functions in 2026 H2. Provide explicit magnitudes for the inflation shock at 0/1/3/6 months and the corresponding policy-rate path assumptions.","priority":"high"}
]}
```
