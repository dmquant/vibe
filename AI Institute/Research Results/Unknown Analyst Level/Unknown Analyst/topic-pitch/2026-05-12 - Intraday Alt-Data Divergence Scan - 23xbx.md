---
source: ai-institute
resource_type: research-result
report_kind: topic-pitch
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Intraday Alt-Data Divergence Scan

Kind: **topic-pitch**
Analyst: **(unknown)**

## Links

- Report type: [[topic-pitch]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Intraday Alt-Data Divergence Scan

Date anchor: `date +%Y-%m-%d` returned `2026-05-12`. Every reference to “today,” “previous trading day,” or “this week” is resolved against `2026-05-12`.

## 1. Prioritized Conclusions

| Priority | Topic | Divergence | Question to resolve tomorrow | Action |
|---|---|---|---|---|
| High | Retail/consumer: high-frequency sales remain firm, but retail equities were sold hard | The latest confirmed Redbook weekly same-store sales print was `+7.8% YoY`, above the prior `+7.7%`, while the latest U.S. equity session showed `XRT -3.62%`, `TGT -5.43%`, `WMT -2.18%`, and `ONLN -2.28%` | Is this CPI, gasoline, tariff, and margin-risk de-rating, or will today’s new Redbook print weaken and validate the equity move? | Only formal pitch |
| Normal | Transport/supply chain: rates and rail volumes are firm, but transport equities did not confirm | Drewry WCI rose `+3%` to `$2,286/40ft`, Shanghai to New York rose `+7%` to `$3,721`, and Shanghai to Los Angeles rose `+5%` to `$3,062`; AAR weekly U.S. rail traffic rose `+3.9% YoY`. Yet `IYT -0.90%`, `UPS -0.72%`, and `FDX +0.07%` | Are higher freight rates a fuel-surcharge/capacity-management cost shock rather than a demand recovery? | Monitor, no standalone pitch |
| Low | Airlines/travel: airline stocks fell, but public TSA daily data are insufficient | `JETS -3.18%`, `AAL -4.05%`, `UAL -2.95%`, `DAL -2.86%`; public search showed TSA May 4-6 volumes of `2,540,806`, `2,040,845`, and `2,251,410`, but the May 11 national value could not be confirmed | There is not enough same-day passenger evidence to contradict the airline selloff | No pitch |
| None | Satellite/IoT mid-session updates | I did not find a verifiable same-day public satellite or IoT signal that maps cleanly to listed assets | Paid AIS, tank-level, mine-site, or geofence data would be needed to advance this | No pitch |

## 2. Data Scan

### Consumer and Retail

| Source | Available reading in today’s window | Price action | Read-through |
|---|---:|---:|---|
| Redbook weekly same-store sales | Week ended 2026-05-02 printed `+7.8% YoY`, versus `+7.7%` prior; the 2026-05-12 release was listed on calendars, but the actual value had not landed at scan time. [Trading Economics](https://tradingeconomics.com/united-states/redbook-index), [Investing.com](https://www.investing.com/economic-calendar/redbook-911) | `XRT -3.62%`, `RTH -1.66%`, `IBUY -1.75%`, `ONLN -2.28%` | High-frequency sales still look firm, while the tape sold retail beta. The divergence looks more like margin, fuel, tariff, or CPI risk than a confirmed demand break. |
| Consumer sentiment | University of Michigan preliminary May sentiment was `48.2`, down `3.21%` from April `49.8` and down `7.66%` YoY; RCM/TIPP May was `42.6`, below April `42.8`. [YCharts](https://ycharts.com/indicators/us_consumer_sentiment_index?source=content_type%3Areact%7Cfirst_level_url%3Aarticle%7Csection%3Amain_content%7Cbutton%3Abody_link), [Trading Economics](https://tradingeconomics.com/united-states/economic-optimism-index) | `XLY -0.69%`, `XLP -0.96%`; retail sold off much more | Sentiment and equity flows both lean weak, but they conflict with Redbook sales. The key is whether consumers are “spending but not worth paying for in equity multiples,” or whether sales are about to roll over. |
| Large retailers | `TGT -5.43%`, `WMT -2.18%`, `COST -0.96%`, `AMZN -1.38%` | The selloff was broad, but XRT was worse than the mega-cap retailers | Equal-weight retail underperformed the leaders, pointing to pressure on smaller retailers and discretionary margin sensitivity. |

### Transport, Freight, and Supply Chain

| Source | Available reading in today’s window | Price action | Read-through |
|---|---:|---:|---|
| Drewry World Container Index | On 2026-05-07, WCI rose `+3%` to `$2,286/40ft`; Shanghai to New York rose `+7%` to `$3,721/40ft`, and Shanghai to Los Angeles rose `+5%` to `$3,062/40ft`; Drewry expects transpacific rates to increase next week. [Drewry](https://www.drewry.co.uk/supply-chain-advisors/world-container-index-weekly-update/world-container-index-assessed-by-drewry) | `IYT -0.90%`, `UPS -0.72%`, `FDX +0.07%` | Higher rates did not translate into strong transport equities, likely because pricing is coming from fuel surcharges and PSS/EFS rather than demand elasticity. For retailers and industrial customers, this reads more like cost pressure. |
| AAR weekly rail | For the week ended 2026-05-02, total U.S. rail traffic was `518,773` carloads and intermodal units, `+3.9% YoY`; carloads were `235,049`, `+4.0%`; intermodal was `283,724`, `+3.9%`. [AAR](https://www.aar.org/news/aar-reports-weekly-rail-traffic-for-the-week-ending-may-2-2026/) | `XLI +1.07%`, `IYT -0.90%` | Industrials absorbed the message that physical flows are still alive; transports did not. That points more to cost/rate structure than macro freight volume. |
| DAT/truck spot rates | The latest public tracker showed late-April 2026 flatbed rates at a new year-to-date peak, with dry van and reefer flat week over week; earlier dry-van rates were still materially higher than a year earlier. [Trucking Dive / DAT](https://www.truckingdive.com/news/truck-freight-rates-changes-tracker/715709/) | `UPS -0.72%`, `FDX +0.07%` | Truck data do not support a freight-demand collapse, but they also do not prove transport margin expansion. |

### Travel and Store-Visit Proxies

The public TSA national daily page could not be directly fetched at scan time. A third-party page citing TSA data showed 2026-05-04 to 2026-05-06 volumes of `2,540,806`, `2,040,845`, and `2,251,410`, but no confirmed 2026-05-11 national value was available. [Octagon AI / TSA citation](https://octagonai.co/markets/economics/jobs-economy/tsa-avg-check-ins-from-may-4-to-10-2026/) Therefore the airline selloff cannot be cleanly contradicted by public passenger data.

## 3. Formal Pitch

### Are retail stocks over-discounting consumer weakness, or pricing a margin shock early?

**Why this needs discussion now:** The tape sold retail as a risk asset, but visible high-frequency consumer data have not deteriorated by the same magnitude. The latest confirmed Redbook print was `+7.8% YoY`, while XRT fell `3.62%`. If today’s later Redbook, CPI, and this week’s retail sales do not support the equity narrative, consumer/retail relative performance can snap back tomorrow; if Redbook rolls over, the selloff was early and correct.

**Core debate:**

| Question | Evidence for better retail relative performance | Evidence for weaker retail relative performance |
|---|---|---|
| Is demand actually breaking? | Redbook `+7.8% YoY` and BofA March credit/debit card spending per household `+4.3% YoY` do not point to a cliff in demand. [BofA Institute](https://institute.bankofamerica.com/content/dam/economic-insights/consumer-checkpoint-april-2026.pdf) | Michigan `48.2` and TIPP `42.6` show deeply pessimistic consumer expectations. |
| Is the tape trading margin risk? | Equal-weight retail underperformed the leaders, suggesting the market may be selling cost and financing sensitivity rather than all consumer revenue. | Gasoline, tariffs, freight, and wage pressure can keep sales growth from converting into profit growth. |
| What is tomorrow’s trigger? | If the 2026-05-12 Redbook print stays near `+7.8%`, or CPI is cooler than feared, the short thesis in XRT/TGT/WMT needs recalibration. | If Redbook falls materially, or CPI/PPI are hotter than expected, the retail selloff will be explained as early pricing of margin and real-income pressure. |

**Trading implication:** Do not make “consumer collapse” the base case yet. The cleaner frame is “nominal sales are still firm, but margins and multiples are under pressure.” Tomorrow, prioritize `XRT` relative to `SPY`, the `TGT/WMT/COST` split, and whether `XLY/XLP` continue to weaken together.

## 4. Follow-Up Checklist

| Timing | Action | Decision rule |
|---|---|---|
| After the 2026-05-12 Redbook release | Update the May/09 weekly Redbook actual | If it is materially below `7.8%`, the retail selloff is confirmed; if it is near or above `7.8%`, demand data and equity prices remain decoupled. |
| After 2026-05-13 PPI | Compare retailers, transports, and discretionary ETFs | If PPI/freight costs are high and retail keeps selling off, the market is trading margins, not sales. |
| Before this week’s retail sales release | Check `XRT/SPY`, `RTH/XRT`, and `TGT/WMT` relative strength | If equal-weight retail keeps underperforming the leaders, stress is concentrated in smaller retailers and lower-pricing-power companies. |

## Sources

- Redbook: Trading Economics and Investing.com economic calendars, latest confirmed weekly print `+7.8% YoY`, prior `+7.7%`.  
- Consumer sentiment: YCharts / University of Michigan `48.2`; Trading Economics / RCM-TIPP `42.6`.  
- Freight: Drewry WCI 2026-05-07; AAR 2026-05-06 weekly rail; Trucking Dive / DAT truck spot-rate tracker.  
- Price action: market snapshot as of the latest available trade time near `2026-05-12 00:15 UTC`, corresponding to the prior U.S. equity session.
