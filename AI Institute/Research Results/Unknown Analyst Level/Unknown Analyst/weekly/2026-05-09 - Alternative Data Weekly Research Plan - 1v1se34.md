---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Alternative Data Weekly Research Plan

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Alternative Data Weekly Research Plan

Coverage window: 2026-05-04 (Monday) → 2026-05-08 (Friday)

Date anchor: `date +%Y-%m-%d` returned `2026-05-10`. The primary market assumption is U.S. equities; there was no full NYSE/Nasdaq market holiday inside this window, and the next U.S. equity-market holiday in May 2026 is Memorial Day on 2026-05-25, so trading-day-only metrics should use 5 trading days.[NYSE](https://www.nyse.com/markets/hours-calendars?os=0); [Nasdaq](https://www.nasdaq.com/market-activity/stock-market-holiday-schedule?mod=article_inline)

## Priority Conclusions

1. Risk appetite was led by technology and AI-infrastructure narratives: Nasdaq rose +4.5% for the week, clearly ahead of the S&P 500 at +2.3% and the Dow at +0.2%.[AP](https://apnews.com/article/b7ff696f0770489a60427121a6931ada)
2. High-frequency consumer demand still looks firm, but the research must separate price, gasoline, essentials, and real transaction volume: Redbook same-store sales YoY rose from 7.7% to 7.8%.[Trading Economics](https://tradingeconomics.com/united-states/redbook-index)
3. Supply-chain pressure has not cleared: ISM Services Prices Index stayed at 70.7, Supplier Deliveries rose to 56.8, and Imports remained expansionary at 54.7, making fuel, delivery delays, and import restocking key alternative-data verification lines this week.[ISM](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/april/)

## 1. Scope: Most Important Developments This Week

| Priority | Date | What happened | Why it matters | Research implication |
|---:|---|---|---|---|
| 1 | 2026-05-08 | Major U.S. indexes hit records: S&P 500 closed at 7,398.93, up +2.3% for the week; Nasdaq closed at 26,247.08, up +4.5%; Dow rose +0.2%; Russell 2000 rose +1.7%.[AP](https://apnews.com/article/b7ff696f0770489a60427121a6931ada) | Technology and growth stocks became the marginal pricing engine again; alternative data needs to test whether AI and app-platform order strength supports the valuation move. | Map sector returns, volume, options skew, and app-usage/supply-chain indicators. |
| 2 | 2026-05-08 | BLS reported April nonfarm payrolls of +115,000, unemployment at 4.3%, average hourly earnings MoM +0.2% and YoY +3.6%; transportation and warehousing added +30,000, retail added +22,000, and federal government employment fell -9,000.[BLS](https://www.bls.gov/news.release/empsit.nr0.htm) | Labor income still supports consumption, while stronger transportation/warehousing and retail hiring affects fulfillment capacity, delivery speed, and wage cost. | Validate consumer resilience with card data, payroll deposits, job postings, and gig-platform supply data. |
| 3 | 2026-05-05 | ISM Services PMI slipped to 53.6; New Orders were 53.5; Employment 48.0; Supplier Deliveries 56.8; Prices 70.7; Imports 54.7.[ISM](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/april/) | Services demand is still expanding, but cost pressure remains sticky, with fuel and logistics costs likely to pressure low-margin retail, restaurant delivery, and transportation. | Track ports, AIS, freight rates, fuel surcharges, inventory sentiment, and supplier lead times. |
| 4 | 2026-05-06 | EIA weekly data showed U.S. commercial crude inventories down 2.3 million bbl to 457.2 million bbl for the week ended 2026-05-01; distillate inventories fell 1.3 million bbl to 102.3 million bbl; refinery inputs averaged 16.0 million bpd.[OGJ/EIA](https://www.ogj.com/general-interest/news/55375980/eia-us-crude-inventories-down-23-million-bbl) | Energy inventory and fuel-price pressure are central external variables for supply chains, airlines, delivery platforms, and consumer disposable income. | Cross-check with satellite oil tanks, AIS vessels, Kpler/Vortexa flows, and EIA weekly inventory data. |
| 5 | 2026-05-05 | Redbook same-store sales rose +7.8% YoY in the week ended 2026-05-02, versus +7.7% previously.[Trading Economics](https://tradingeconomics.com/united-states/redbook-index) | High-frequency retail sales remain strong, but nominal growth may blend price, gasoline, tax refunds, and pre-Mother’s Day pull-forward demand. | Split card spending, store traffic, nonstore retail, restaurants, grocery, and gasoline. |
| 6 | 2026-05-06 | Uber Q1 2026: Trips were 3.6 billion, YoY +20%; MAPCs grew YoY +17%; Gross Bookings were $53.7 billion, YoY +25%; Revenue was $13.2 billion, YoY +14%.[Uber IR](https://s23.q4cdn.com/407969754/files/doc_earnings/2026/q1/earnings-result/Uber-Q1-26-Earnings-Press-Release.pdf) | Mobility and delivery apps still show high-frequency usage momentum, providing real-time reads on consumer services demand and gig supply. | Compare Apptopia/Sensor Tower downloads, DAU/MAU, pricing, subsidies, driver supply, and airport/city mobility flows. |
| 7 | 2026-05-06 | DoorDash Q1 2026: Total Orders 933 million, YoY +27%; Marketplace GOV $31.6 billion, YoY +37%; Revenue $4.0 billion, YoY +33%; Adjusted EBITDA $754 million, YoY +28%.[DoorDash IR](https://ir.doordash.com/news/news-details/2026/DoorDash-Releases-First-Quarter-2026-Financial-Results/default.aspx) Instacart Q1 2026: GTV $10.288 billion, YoY +13%; Revenue $1.019 billion, YoY +14%; GAAP net income $144 million, YoY +36%; Adjusted EBITDA $300 million, YoY +23%.[Instacart](https://www.prnewswire.com/news-releases/instacart-announces-first-quarter-2026-financial-results-302763379.html) | Food delivery and grocery-delivery orders remain strong, indicating resilience in convenience-led consumption and retail-media advertising. | Verify whether growth comes from users, frequency, AOV, promotions, category migration, or acquisition accounting. |
| 8 | 2026-05-05 | Reuters reported that Anthropic committed to spend $200 billion on Google Cloud/TPUs over five years, with multi-gigawatt TPU capacity arrangements starting in 2027.[Reuters via Investing.com](https://www.investing.com/news/stock-market-news/anthropic-commits-to-spending-200-billion-on-googles-cloud-and-chips-the-information-reports-4661029) | AI compute has shifted from a software story into a supply-chain story about power, chips, servers, data-center construction, and cloud backlog. | Track satellite construction progress, grid-interconnection queues, GPU/TPU lead times, semiconductor-equipment orders, and cloud capex. |

## 2. Questions the Weekly Must Answer

1. Was this week’s rally in risk assets driven by genuine demand improvement, or mostly by AI/technology valuation and positioning re-expansion?
2. Is consumer resilience broad-based, or concentrated in gasoline, grocery, tax refunds, Mother’s Day pull-forward, and higher prices?
3. Can Uber, DoorDash, and Instacart order and user growth be validated by third-party app usage, transaction data, and offline traffic?
4. Are oil prices, inventories, and transport delays flowing through to retail, restaurant delivery, airlines, and industrial supply-chain costs?
5. Have AI data centers and the chip supply chain become this week’s most important alternative-data theme, and which indicators can verify capex execution early?
6. Which sectors or stocks moved against the direction of alternative data, creating the research watchlist for next week?

## 3. Data Needs

| Question | Data to collect | Specific tickers/indicators | Fresh web queries |
|---|---|---|---|
| 1 | Index, sector, and stock prices; volume; options skew; ETF flows | SPX, NDX, DJI, RUT, XLK, XLY, XLP, XLE, XLI, XRT, IYT, UBER, DASH, CART, GOOGL, AVGO, CRWV | `week ending May 8 2026 S&P 500 sector returns technology energy consumer discretionary`; `May 8 2026 ETF flows XLK XLE XRT IYT` |
| 2 | Credit/debit-card spending; Redbook; store traffic; online retail traffic; gasoline prices | BofA Consumer Checkpoint, JPMorgan/Chase spending, Redbook YoY, Placer.ai WMT/TGT/COST/HD/LOW, GasBuddy/AAA gasoline | `Bank of America Consumer Checkpoint May 2026 card spending April 2026`; `Placer.ai May 2026 Walmart Target Costco traffic`; `Redbook May 5 2026 7.8%` |
| 3 | App downloads, DAU/MAU, orders, GOV/GTV, AOV, promotions, driver supply | UBER MAPCs/trips/gross bookings, DASH orders/GOV, CART orders/GTV, Sensor Tower, Apptopia, Similarweb, Gridwise | `Sensor Tower Uber DoorDash Instacart downloads April 2026`; `Apptopia Uber DoorDash Instacart MAU May 2026`; `Gridwise driver earnings Q1 2026` |
| 4 | Energy inventories, tanker flows, freight rates, port throughput, delivery delays, fuel surcharges | EIA WPSR, API, WTI/Brent, Kpler, Vortexa, Kayrros, Freightos FBX, Drewry WCI, Descartes, NRF Global Port Tracker | `EIA weekly petroleum status report May 6 2026 crude inventories`; `Kpler Vortexa Hormuz tanker flows May 2026`; `Freightos weekly update May 2026 transpacific rates` |
| 5 | Data-center construction, cloud orders, chip/server supply, power demand, grid interconnection | GOOGL Cloud, AVGO TPU, NVDA, AMD, SMCI, VRT, ETN, PWR, CEG, CRWV backlog, building permits, satellite imagery | `Anthropic Google Cloud 200 billion TPU May 2026`; `CoreWeave Q1 2026 backlog power capacity May 7 2026`; `data center interconnection queue 2026 US power` |
| 6 | Cross-table of price reaction versus data surprise; sell-side revisions; short interest; event studies | Earnings surprise, revenue guide, app-data surprise, card-data surprise, sector weekly return, short interest, options IV | `May 2026 earnings surprise Uber DoorDash Instacart stock reaction`; `May 8 2026 Nasdaq record tech rally semiconductors` |

## 4. Recommended Charts and Tables

| Chart | Format | Axes and series | Intended takeaway |
|---|---|---|---|
| Weekly event-price timeline | Five-day event chart | X-axis from 2026-05-04 to 2026-05-08; mark ISM, Redbook, EIA, Uber, DoorDash, Instacart, and BLS; overlay daily SPX/NDX/RUT returns | Show which events the week’s price reaction clustered around. |
| Consumer resilience dashboard | Four-panel line/bar chart | Redbook YoY, total card spending and ex-gas spending, Placer store traffic, app order/download indexes | Test whether nominal consumer strength is supported by real transaction volume. |
| App-platform operating comparison | Matrix table | UBER Trips/MAPCs/Gross Bookings; DASH Orders/GOV; CART Orders/GTV; show YoY, QoQ, margin, and stock reaction | Identify whether platform growth came from users, frequency, ticket size, or acquisition/FX effects. |
| Supply-chain and energy stress chart | Combo chart | ISM Prices/Supplier Deliveries/Imports; EIA crude/distillate inventories; Freightos/Drewry rates; AIS port congestion | Show whether fuel and delivery pressure is re-accelerating. |
| Alternative-data surprise vs. market-return scatter | Scatter/bubble chart | X-axis: alternative-data surprise; Y-axis: weekly stock/sector return; bubble size: volume or market cap | Identify “data improved but stock lagged” and “price overreacted” opportunities for next week. |

## 5. Final Weekly Report Outline

1. **Executive Summary**: Answer the week’s demand, cost, and supply-chain story in 5-7 conclusions.
2. **Market and Positioning Backdrop**: Summarize indexes, sectors, ETFs, options, and volume to show whether the week was concentrated in technology.
3. **Consumer Alternative Data**: Integrate Redbook, card data, store traffic, online traffic, and gasoline prices to separate nominal from real demand.
4. **App Platforms and the Gig Economy**: Compare Uber, DoorDash, and Instacart on orders, users, AOV, subsidies, and driver supply.
5. **Supply Chain, Energy, and Satellite/AIS Verification**: Use EIA, tankers, ports, freight rates, and ISM subcomponents to evaluate cost pass-through.
6. **AI Infrastructure Supply Chain**: Track cloud/TPU/GPU orders, data-center construction, power constraints, and semiconductor-chain beneficiaries.
7. **Trading Implications and Next-Week Watchlist**: List data divergences, confirmation indicators, risk triggers, and follow-up research tasks.

## 6. Follow-Up Items

| Priority | Item | Assumed owner | Due |
|---:|---|---|---|
| 1 | Pull daily returns, volume, and IV for sector ETFs and core stocks from 2026-05-04 to 2026-05-08 | Market data | Before the research stage starts |
| 2 | Obtain the latest BofA/JPM/Redbook/Placer/Sensor Tower/Apptopia consumer and app datasets | Alternative data | Before the research stage starts |
| 3 | Build the supply-chain cross-check table using EIA, Freightos, Drewry, AIS, Kpler/Vortexa/Kayrros | Supply chain/satellite | Before visualization |
| 4 | Run event studies for UBER, DASH, CART, GOOGL, AVGO, and CRWV: one-day and weekly excess returns after releases | Equity research | Before visualization |
| 5 | Compile next week’s key releases: CPI, retail sales, WMT/TGT/COST traffic read-throughs, and port/freight updates | Weekly editor | Before final draft |
