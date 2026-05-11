---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# TMT Weekly Research Draft

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# TMT Weekly Research Draft

Date anchor: shell `date +%Y-%m-%d` returned `2026-05-10`. In this report, “this week” means `2026-05-04` through `2026-05-08`; weekly returns are calculated from the `2026-05-01` close to the `2026-05-08` close.

## Priority Conclusions

1. This week’s TMT rally was not broad technology beta; it was an AI hardware repricing. `SMH` rose `11.13%`, outperforming `QQQ` by `5.63` percentage points and `SPY` by `8.78` percentage points; `SOXX` rose `11.71%`, confirming breadth inside semiconductors.[S1]
2. Semiconductor outperformance came from three forces together: AMD fundamental upgrades, the Intel-Apple event catalyst, and broader AI capex beta. The strongest signals were `AMD` `+26.25%`, `INTC` `+25.40%`, `MU` `+37.73%`, and `ASML` `+11.56%`.[S1][S2][S5][S7]
3. AMD’s Q1'26 is enough to raise 2026-2027 AI accelerator share assumptions, but not enough to rewrite `NVDA`’s margin and ecosystem advantage. AMD reported revenue of `$10.253B`, Data Center revenue of `$5.8B`, non-GAAP gross margin of `55%`, and Q2 revenue guidance of `$11.2B ± 300M`; Meta’s up to `6 GW` deployment improves order visibility, while customer concentration, HBM/advanced packaging, and software ecosystem remain the main constraints.[S2]
4. With 2026 hyperscaler capex revised up to as much as `$725B`, the direct beneficiaries remain GPU/CPU, HBM, advanced packaging, optical interconnect, and power infrastructure. Platform companies are more differentiated: Microsoft and Alphabet have stronger cloud growth and AI revenue support; Amazon’s TTM FCF fell to `$1.2B`; Meta carries the burden of proving that advertising growth can absorb AI depreciation.[S7][S8][S9][S10][S11]
5. Software and edge cloud did not rerate in lockstep because investors are shifting from “AI feature narrative” to “AI-driven revenue, RPO, margin, and operating efficiency.” `NET` fell `9.83%` even though Q1 revenue was `$639.8M`, up `34%` year over year, as the company also announced about `1,100` job cuts and `$140M-$150M` of restructuring charges.[S1][S3]

## Q1: What Drove Semiconductor Outperformance?

### Method

I pulled daily closes and volumes from the Yahoo Finance Chart API for `2026-05-01` through `2026-05-08`, calculated weekly returns for ETFs and key stocks, and compared average volume for `2026-05-04` through `2026-05-08` with the prior 20 trading days to test whether the move was only a low-liquidity squeeze.[S1]

### Findings

| Asset | `2026-05-01` Close | `2026-05-08` Close | Weekly Return |
|---|---:|---:|---:|
| `SMH` | `509.82` | `566.54` | `11.13%` |
| `SOXX` | `465.75` | `520.30` | `11.71%` |
| `QQQ` | `674.15` | `711.23` | `5.50%` |
| `IGV` | `86.63` | `91.15` | `5.22%` |
| `XLC` | `116.72` | `116.94` | `0.19%` |
| `SPY` | `720.65` | `737.62` | `2.35%` |
| `AMD` | `360.54` | `455.19` | `26.25%` |
| `INTC` | `99.62` | `124.92` | `25.40%` |
| `NVDA` | `198.45` | `215.20` | `8.44%` |
| `MU` | `542.21` | `746.81` | `37.73%` |
| `NET` | `217.50` | `196.13` | `-9.83%` |

Semiconductor outperformance was a combination of fundamental confirmation, event catalysts, and capex beta. `AMD` continued from `421.39` on May 6 to `455.19` on May 8, so the post-earnings bid was not limited to one session. `INTC` closed at `124.92` on May 8, matching the timing of the Apple foundry report. `MU` `+37.73%` and `ASML` `+11.56%` show that investors also bought HBM/memory and equipment bottlenecks, not only GPU designers. By contrast, `XLC` gained only `0.19%`, so advertising and communication services did not share the same uplift.

### Evidence

Raw inputs include Yahoo Finance Chart API closes and volumes; AMD’s official release reported Data Center growth of `+57%`; Reuters cited the WSJ report on Intel and Apple reaching a preliminary foundry agreement; Bloomberg reported that four large platforms may spend up to `$725B` in 2026 capex.[S1][S2][S5][S7]

### Caveats

Free public sources did not provide stable weekly sell-side EPS revisions, target-price changes, or options implied volatility; this report substitutes price, relative volume, and event timing. ETF holdings and weights move during the week, so this is not a precise holdings-level contribution analysis.

## Q2: Does AMD Q1'26 Change the AI Accelerator Landscape?

### Method

I reviewed AMD’s `2026-05-05` official release, including segment revenue, non-GAAP metrics, Q2 guidance, and the Meta/MI450/Helios language; I then compared `AMD` and `NVDA` weekly returns to assess whether the market is treating AMD as a second AI platform.[S1][S2]

### Findings

| Metric | Q1'26 | Q1'25 | YoY | Q4'25 | QoQ |
|---|---:|---:|---:|---:|---:|
| AMD revenue | `$10.253B` | `$7.438B` | `+38%` | `$10.270B` | `Flat` |
| GAAP gross margin | `53%` | `50%` | `+3 ppts` | `54%` | `-1 ppt` |
| non-GAAP gross margin | `55%` | `54%` | `+1 ppt` | `57%` | `-2 ppts` |
| Data Center revenue | `$5.8B` | About `$3.7B` | `+57%` | Not listed in release summary | Not listed in release summary |
| Client and Gaming revenue | `$3.6B` | Not listed in release summary | `+23%` | Not listed in release summary | Not listed in release summary |
| Embedded revenue | `$873M` | Not listed in release summary | `+6%` | Not listed in release summary | Not listed in release summary |
| Q2'26 revenue guidance | `$11.2B ± 300M` | Not applicable | Midpoint about `+46%` YoY | Not applicable | Midpoint about `+9%` QoQ |
| Q2'26 non-GAAP gross margin guidance | About `56%` | Not applicable | Not applicable | Not applicable | Not applicable |
| Meta deployment plan | Up to `6 GW` of AMD Instinct GPUs; first `1 GW` uses custom MI450 | Not applicable | Not applicable | Not applicable | Not applicable |

The key change in AMD Q1'26 is that Data Center is now the main revenue and earnings growth engine, not the older “PC recovery plus gaming cycle” story. Meta’s up to `6 GW` plan and first `1 GW` custom MI450 deployment push AMD closer to a rack-scale platform supplier, not just an alternative GPU vendor. Still, non-GAAP gross margin moved from `57%` in Q4'25 to `55%` in Q1'26, suggesting that ramp costs, HBM, packaging, and customer customization cap the near-term margin upside. Versus `NVDA`, `AMD` `+26.25%` against `NVDA` `+8.44%` is a share-expectation rerating, not an ecosystem reversal. The reasonable 2026-2027 base case is higher AMD share and some compression in Nvidia’s valuation premium, while Nvidia’s software and system ecosystem remains a high barrier.

### Evidence

AMD’s release provides Q1 revenue, margins, Data Center, EPYC/Instinct, Meta `6 GW`, MI450, and Helios details; Yahoo Finance Chart API supports the weekly return comparison.[S1][S2]

### Caveats

AMD did not disclose AI accelerator revenue, Data Center backlog, MI450 ASPs, or customer concentration in the release summary; the call transcript, 10-Q details, supply-chain shipments, and sell-side models are needed for validation.

## Q3: What Would an Apple-Intel Preliminary Agreement Mean?

### Method

I treated the `2026-05-08` Reuters/WSJ report as an event study, observed `INTC` and `AAPL` weekly and event-day closes, and separated the impact paths for Intel Foundry, TSMC, and Apple supply-chain risk.[S1][S5][S6]

### Findings

| Item | Number or Fact | Interpretation |
|---|---:|---|
| `INTC` weekly return | `25.40%` | The report strengthened the anchor-customer case for Foundry |
| `INTC` May 8 close | `124.92` | Up `13.96%` from `109.62` on May 7 |
| `AAPL` weekly return | `4.70%` | Market viewed foundry diversification as positive supply-chain redundancy |
| Reuters/WSJ report | Preliminary agreement; products undisclosed; Intel and Apple declined comment | No hard information on node, volume, or timing |
| Apple supply-chain backdrop | Reports cite TSMC advanced-node pressure from AI chip demand; Apple also faces rising memory costs | Diversification need is real, but execution is uncertain |

If this becomes a formal production order, the largest benefit for Intel Foundry is a lower credibility discount. Apple is a high-quality customer, and even a non-flagship or lower-complexity chip would provide external validation. For TSMC, this is not a near-term advanced-node share threat because the report lacks product, node, and ramp timing detail; the medium-term impact is more likely on Apple’s negotiating leverage and U.S. capacity options. For Apple, the value is lower tail risk from TSMC/HBM/advanced packaging congestion, but foundry diversification also introduces execution risk if Intel’s yield, power, or delivery cadence disappoints.

### Evidence

Reuters reported that Intel reached a preliminary agreement with Apple and noted that products were unclear, both companies declined comment, the U.S. government pushed Intel support, and TSMC capacity was tight; TechCrunch/MacRumors/Guardian coverage points to Apple’s memory and chip supply pressure.[S5][S6]

### Caveats

WSJ details may sit behind a paywall, while the public Reuters summary has no node, product, wafer volume, production timing, or pricing terms. Therefore, `INTC`’s `25.40%` weekly gain cannot be fully attributed to fundamental order conversion.

## Q4: Who Benefits From Hyperscaler Capex, and Who Carries the Pressure?

### Method

I combined Bloomberg, company releases, and earnings-call disclosures for 2026 capex guidance, Q1 cloud growth, AI revenue or backlog, and FCF pressure, separating supplier benefits from platform-company cash-flow and depreciation pressure.[S7][S8][S9][S10][S11]

### Findings

| Company | 2026 Capex Guidance or High-End Estimate | Q1 Cloud/Related Growth | Q1 or TTM Cash-Flow Pressure | Conclusion |
|---|---:|---:|---:|---|
| `MSFT` | About `$190B` | Azure and other cloud services `+40%`; AI business ARR above `$37B`, up `+123%` YoY | Q3 capex `$31.9B`; FCF `$15.8B` | Strongest ROI evidence, but still constrained by GPU/CPU/storage supply |
| `GOOGL` | Up to about `$190B` | Google Cloud revenue about `$20.0B`, up `+63%` YoY | Q1 capex about `$35.7B` | Fastest cloud growth, making capex increases easier to defend |
| `AMZN` | About `$200B` | AWS revenue `$37.6B`, up `+28%` YoY | TTM FCF fell to `$1.2B`; TTM net PP&E purchases `$147.3B` | AWS demand is strong, but FCF pressure is highest |
| `META` | `$125B-$145B` | Q1 revenue `$56.3B`, up `+33%` YoY | Capex range increased; advertising ROI must keep proving out | Not a cloud resale model, so depreciation recovery depends more indirectly on ads and AI product efficiency |
| Big Four Total | Up to about `$725B` | Not applicable | 2025 was about `$410B` as comparison base | Hardware-chain visibility improved, but platform capital intensity rose sharply |

The first-order beneficiaries are GPU/CPU and custom ASIC suppliers, followed by HBM, advanced packaging, optical modules, switch silicon, liquid cooling, and power equipment; the cloud platforms themselves are only the third layer. Microsoft and Alphabet have clearer cloud growth, AI ARR, backlog, or search/cloud monetization evidence, so their capex looks more like revenue-linked investment. Amazon’s AWS remains strong, but TTM FCF fell from `$25.9B` to `$1.2B`, showing that AI investment has materially changed the cash-flow curve. Meta’s issue is not demand; it is that the payback path is less direct than cloud rental revenue.

### Evidence

Bloomberg reported that the big four could spend up to `$725B` in 2026 capex, with Microsoft and Alphabet around `$190B` and Amazon around `$200B`; Microsoft disclosed Q3 capex, AI ARR, and Azure growth; Amazon disclosed AWS growth, TTM FCF, and PP&E purchases; Meta disclosed the raised capex range.[S7][S8][S9][S10][S11]

### Caveats

Capex definitions differ across companies, especially around finance leases, data-center land, long-term power contracts, and lease payments. Adding high-end guidance can overstate headline capex, but it is useful for sizing the supply-chain demand ceiling.

## Q5: Why Did Software and Edge Cloud Not Rerate Together?

### Method

I used Cloudflare as the case study, comparing Q1 revenue, RPO, non-GAAP operating margin, FCF, FY2026 guidance, restructuring actions, and weekly return; then I compared same-week software peers to separate industry beta from company-specific factors.[S1][S3][S12]

### Findings

| Company | Weekly Stock Return | Latest Disclosed Revenue Growth | Profitability/Cash Flow | AI/Efficiency Action | Interpretation |
|---|---:|---:|---|---|---|
| `NET` | `-9.83%` | Q1 revenue `$639.8M`, up `+34%`; Current RPO up `+34%` | non-GAAP operating income `$73.1M`, margin `11.4%`; FCF `$84.1M`, margin `13%` | About `1,100` job cuts; restructuring charges `$140M-$150M`; agentic AI-first | Strong growth, but organizational change altered the risk premium |
| `DDOG` | `42.43%` | Q1 revenue `$1.006B`, up `+32%` | non-GAAP operating income `$223M`, margin `22%`; FCF `$289M` | AI workload monitoring demand | Market rewarded growth and margin together |
| `CRWD` | `15.83%` | Latest guidance points to platform and ARR re-acceleration | Strong non-GAAP profitability | agentic AI security narrative | Security platform resilience remains high |
| `SNOW` | `8.12%` | Recent product revenue growth around `+30%` | Consumption model improving | AI Data Cloud | Positive elasticity, but below DDOG |
| `PANW` | `14.80%` | Recent revenue growth `+15%`, NGS ARR around `+28%` | Platformization supports margin | AI security operations | Security budget priority is high |

Cloudflare shows that the valuation bar for software AI has moved higher: `+34%` revenue growth is not enough if investors are still judging sales efficiency, product attach, and long-term margin. `NET`’s drop does not mean edge-cloud demand deteriorated, because the same week had `DDOG` `+42.43%` and `PANW` `+14.80%`; the gap came from growth quality, guidance, and execution risk from restructuring. By tying agentic AI-first to layoffs, Cloudflare introduced short-term concerns about sales coverage, support, and product cadence. If Q2/Q3 show better operating margin and higher-quality RPO, this model could spread across SaaS and infrastructure software.

### Evidence

Cloudflare’s release provides Q1 revenue, RPO, operating income, FCF, FY2026 revenue guidance, and restructuring charges; Datadog disclosed Q1 revenue of `$1.006B`, `+32%` YoY growth, and `22%` non-GAAP operating margin; other peers are compared using recent public disclosures and this week’s price action.[S1][S3][S12]

### Caveats

`CRWD`, `SNOW`, and `PANW` are not on exactly the same reporting calendar or metric basis as Cloudflare. This section explains same-week stock-reaction dispersion; it is not a full fundamental ranking.

## Q6: How Does the April Jobs Report Affect TMT Valuation?

### Method

I reviewed the BLS `2026-05-08` Employment Situation release for payrolls, unemployment, labor-force participation, average hourly earnings, Information employment, and the computing infrastructure subcategory; I used Yahoo `^TNX` to measure the week’s 10Y yield move.[S1][S4]

### Findings

| Metric | Value | Implication for TMT Valuation |
|---|---:|---|
| April nonfarm payrolls | `115,000` | Growth did not collapse, supporting risk appetite |
| Unemployment rate | `4.3%` | Labor is slowing but not pricing recession |
| Average hourly earnings MoM | `+0.2%` | Wage inflation is moderate, helping software/internet cost expectations |
| Average hourly earnings YoY | `+3.6%` | Still above a low-inflation pre-pandemic band, limiting rapid rate-cut hopes |
| Information employment | `-13,000` | Technology, media, and communications employment kept contracting |
| Computing infrastructure, data processing, web hosting and related services | `-4,000` | Cloud and data-processing employment did not rise with capex expansion |
| 10Y yield `^TNX` | `4.378%` to `4.364%` | The 10Y yield fell only `1.4 bps`, so rates were not the main driver of TMT upside |

On the rates channel, `115,000` payroll additions and a `4.3%` unemployment rate support the soft-landing narrative, but `+3.6%` average hourly earnings growth limits aggressive rate-cut expectations. On the wage-cost channel, Information employment down `13,000` aligns with Cloudflare’s layoffs, suggesting software and cloud organizations are using AI and automation to offset labor costs. On the enterprise IT budget channel, the absence of a labor-market break supports stable budgets, but declining Information employment still flags pressure in traditional IT, media, and communications services. The conclusion is that macro was a mild tailwind; AI capex and semiconductor orders explain the week much better.

### Evidence

The BLS release provides April payrolls, Information employment, and average hourly earnings; Yahoo Finance Chart API provides the weekly move in `^TNX`.[S1][S4]

### Caveats

Payroll data are revised, and BLS already revised February and March down by a combined `16,000`. The Information sector includes telecom, motion pictures, data processing, and other categories, so it should not be read as a direct proxy for software engineering employment.

## Visualization-Ready Data Tables

### Chart 1: TMT Weekly Return Horizontal Bar Chart

| Series | Weekly Return |
|---|---:|
| `SMH` | `11.13%` |
| `QQQ` | `5.50%` |
| `IGV` | `5.22%` |
| `XLC` | `0.19%` |
| `SPY` | `2.35%` |
| `AMD` | `26.25%` |
| `INTC` | `25.40%` |
| `NVDA` | `8.44%` |
| `NET` | `-9.83%` |

### Chart 2: Semiconductor Stock Heatmap (Substitute Table)

The plan asked for EV/Sales or P/E changes and FY2026 EPS revisions; consistent weekly public data were not available from free sources. I substituted weekly return, 5-day average volume versus prior 20-day average volume, and weekly close range to separate fundamental buying from event-driven squeeze behavior.

| Stock | Weekly Return | Current 5-Day Avg Volume (M shares) | Prior 20-Day Avg Volume (M shares) | Volume Multiple | Weekly Close Range |
|---|---:|---:|---:|---:|---:|
| `AMD` | `26.25%` | `59.32` | `39.74` | `1.49x` | `341.54-455.19` |
| `INTC` | `25.40%` | `164.79` | `139.42` | `1.18x` | `95.78-124.92` |
| `NVDA` | `8.44%` | `146.31` | `147.35` | `0.99x` | `196.50-215.20` |
| `AVGO` | `2.07%` | `20.47` | `21.83` | `0.94x` | `412.56-430.00` |
| `MRVL` | `3.14%` | `20.86` | `28.44` | `0.73x` | `160.01-172.15` |
| `TSM` | `3.52%` | `14.84` | `13.48` | `1.10x` | `394.41-419.50` |
| `ASML` | `11.56%` | `1.94` | `1.78` | `1.09x` | `1386.21-1592.02` |
| `MU` | `37.73%` | `55.60` | `39.29` | `1.42x` | `576.45-746.81` |

### Chart 3: Hyperscaler Capex and Cloud Growth Matrix

| Company | X-Axis: 2026 Capex High End or Estimate | Y-Axis: Cloud/Related Revenue Growth | Bubble Size: FCF Pressure Score (1 Low-5 High) | Label |
|---|---:|---:|---:|---|
| `MSFT` | `$190B` | `40%` | `3` | Azure growth strong; AI ARR `$37B+` |
| `GOOGL` | `$190B` | `63%` | `3` | Fastest cloud growth; Q1 capex about `$35.7B` |
| `AMZN` | `$200B` | `28%` | `5` | AWS strong, but TTM FCF `$1.2B` |
| `META` | `$145B` | `33%` | `4` | Ad revenue strong, but AI capex recovery is more indirect |

### Chart 4: AMD Data Center Bridge

| Bridge Node | Amount or Metric | Incremental Note |
|---|---:|---|
| Q1'25 Data Center revenue | About `$3.7B` | Implied from Q1'26 `$5.8B` and `+57%` YoY |
| EPYC CPU demand | Not separately disclosed | AMD cited strong EPYC processor demand |
| Instinct GPU ramp | Not separately disclosed | AMD cited continued ramp in Instinct GPU shipments |
| Meta deployment | Up to `6 GW`, first `1 GW` MI450 | Supports 2026-2027 order visibility |
| Q1'26 Data Center revenue | `$5.8B` | `+57%` YoY |
| Q2'26 company revenue guidance | `$11.2B ± 300M` | Midpoint about `+46%` YoY |

### Chart 5: Software and Edge Cloud Comparison Table

| Company | Weekly Return | Revenue Growth | RPO/ARR Metric | Margin/Cash Flow | Layoff/AI Efficiency Action |
|---|---:|---:|---|---|---|
| `NET` | `-9.83%` | `+34%` | Current RPO `+34%` | non-GAAP op margin `11.4%`; FCF margin `13%` | About `1,100` job cuts; restructuring charges `$140M-$150M` |
| `DDOG` | `42.43%` | `+32%` | Strong large-customer and AI workload demand | non-GAAP op margin `22%`; FCF `$289M` | AI workload monitoring |
| `CRWD` | `15.83%` | Latest disclosure points to ARR re-acceleration | Falcon Flex/ARR | Strong non-GAAP profitability | agentic AI security platform |
| `SNOW` | `8.12%` | Recent product revenue around `+30%` | RPO/consumption model | Consumption improving | AI Data Cloud |
| `PANW` | `14.80%` | Recent revenue `+15%` | NGS ARR about `+28%` | Platformization margin | AI security operations and platformization |

## Follow-Up Items

| Priority | Item | Purpose |
|---:|---|---|
| P0 | Add AMD call and 10-Q details on MI450, Helios, HBM supply, and customer concentration | Assess whether Data Center growth can translate into higher gross margin |
| P0 | Track confirmation or denial from Intel, Apple, or supply-chain checks on the WSJ report | Distinguish a real order from a policy or negotiation signal |
| P1 | Add sell-side EPS revisions, target-price changes, and options IV data | Test whether semiconductor upside is backed by earnings revisions |
| P1 | Update hyperscaler capex definitions by GPU/CPU/HBM/land/power/leasing | Avoid equating headline capex with chip orders |
| P2 | Track Cloudflare Q2 execution, sales coverage, and RPO quality | Judge whether agentic AI-first becomes a software template |

## Sources

- [S1] Yahoo Finance Chart API, `SMH`, `SOXX`, `QQQ`, `IGV`, `XLC`, `SPY`, `AMD`, `NVDA`, `INTC`, `AVGO`, `MRVL`, `TSM`, `ASML`, `MU`, `NET`, `AAPL`, `MSFT`, `GOOGL`, `META`, `AMZN`, `ORCL`, `DDOG`, `CRWD`, `SNOW`, `PANW`, `^TNX`, query window `2026-04-01` to `2026-05-08`, https://query1.finance.yahoo.com/v8/finance/chart/SMH
- [S2] AMD Investor Relations, “AMD Reports First Quarter 2026 Financial Results,” `2026-05-05`, https://ir.amd.com/news-events/press-releases/detail/1284/amd-reports-first-quarter-2026-financial-results
- [S3] Cloudflare, “Cloudflare Announces First Quarter 2026 Financial Results,” `2026-05-07`, https://www.cloudflare.com/en-au/press/press-releases/2026/cloudflare-announces-first-quarter-2026-financial-results/
- [S4] U.S. Bureau of Labor Statistics, “Employment Situation Summary - 2026 M04 Results,” `2026-05-08`, https://www.bls.gov/news.release/empsit.nr0.htm
- [S5] Thomson Reuters via WIN 98.5, “Apple, Intel reach preliminary chip-making deal, WSJ reports,” `2026-05-08`, https://wincountry.com/2026/05/08/apple-intel-have-reached-preliminary-chip-making-deal-wsj-reports/
- [S6] TechCrunch, “As Tim Cook steps down, Apple hit record sales — but a chip shortage looms,” `2026-04-30`, https://techcrunch.com/2026/04/30/as-tim-cook-steps-down-apple-hit-record-sales-but-a-chip-shortage-looms/
- [S7] Bloomberg, “US Big Tech Ratchets Up AI Spending Past $700 Billion This Year,” `2026-04-30`, https://www.bloomberg.com/news/articles/2026-04-30/us-big-tech-ratchets-up-ai-spending-past-700-billion-this-year
- [S8] Microsoft Investor Relations, FY26 Q3 press release and earnings call, `2026-04-29`, https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast and https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3
- [S9] Amazon Investor Relations, “Amazon.com Announces First Quarter Results,” `2026-04-29`, https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-First-Quarter-Results/
- [S10] Meta Platforms, “Meta Reports First Quarter 2026 Results,” `2026-04-29`, https://cdn.prod.nntech.io/company-events/reports/94d9d870-3bd0-3b60-9d91-14fccf809ebc/report.pdf
- [S11] Alphabet SEC Exhibit 99.1, “Alphabet Announces First Quarter 2026 Results,” `2026-04-29`, https://www.sec.gov/Archives/edgar/data/1652044/000165204426000043/googexhibit991q12026.htm
- [S12] Datadog Investor Relations, “Datadog Announces First Quarter 2026 Financial Results,” `2026-05-07`, https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-first-quarter-2026-financial-results/
