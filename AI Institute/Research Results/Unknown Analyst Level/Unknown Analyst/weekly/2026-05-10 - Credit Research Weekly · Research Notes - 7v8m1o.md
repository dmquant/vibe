---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Credit Research Weekly · Research Notes

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Credit Research Weekly · Research Notes

**Anchor date: 2026-05-10, from shell `date +%Y-%m-%d`.**  
**Coverage window: 2026-05-04 to 2026-05-08; trading-day basis: 2026-05-06 to 2026-05-08.**  
**Upstream plan: `01_weekly_plan.md` was read.**

## Priority Conclusions

1. **The week reads as post-holiday supply restart, narrow spread dispersion, and no publicly confirmed new credit-risk shock.** May 4-5 were excluded under the Labor Day holiday calendar, leaving only three comparable trading sessions; publicly verifiable issuance-result samples total **CNY 47.437bn** for May 6-8, but full-market net financing and cancellations require Wind/DM/CCDC/SHCH data and could not be fully reconstructed from public web pages as of 2026-05-10.
2. **Secondary spreads did not compress across the board.** On May 8 versus Apr 30, the 1Y AAA CP&Note spread tightened **0.61bp**, the 3Y AAA CP&Note spread widened **1.18bp**, and the 5Y AAA CP&Note spread tightened **0.56bp**; 1Y LGFV AAA/AA+/AA(2) spreads each widened **0.23bp**.
3. **Funding-to-credit transmission was weak beyond the front end.** DR007 fell from **1.3699%** on May 6 to **1.3365%** on May 8, while 1Y AAA NCD moved from **1.4550%** to **1.4450%**; over the same window, the 3Y AAA CP&Note spread rose from **18.34bp** to **19.09bp**, so easier funding did not fully pass through to 3Y credit.
4. **LGFV remains a “debt-resolution floor plus regional dispersion” trade.** No publicly confirmed new public-bond default appeared in priority provinces this week; the 1Y AA(2) LGFV spread widened **0.23bp** versus pre-holiday, small in size but weaker than 1Y AAA industrial CP&Note.
5. **Property remains twin-track: financing access for benchmark names, restructuring milestones for distressed issuers.** A full onshore property-bond net-financing tape could not be verified publicly this week; Vanke, Poly Developments, COLI, Longfor, Seazen, Country Garden, Sunac and Sino-Ocean should remain on next week’s watch list.

## Data Basis And Evidence

| Module | Basis | Raw evidence |
|---|---|---|
| Trading days | Coverage window fixed at 2026-05-04 to 2026-05-08; May 4-5 excluded as Labor Day non-trading days | Shanghai Stock Exchange / CFETS Labor Day holiday searches; upstream plan holiday assumption |
| Yield curves | ChinaBond curves for 2026-04-30, 2026-05-06, 2026-05-07 and 2026-05-08; spread = credit curve minus same-tenor CDB curve | ChinaBond yield curve interface: `https://yield.chinabond.com.cn/cbweb-mn/yield_main?locale=zh_CN`, `/yc/ycDetail` |
| Funding | DR007 and open-market operations from Xinhua Finance money-market daily; 1Y AAA NCD from ChinaBond commercial-bank NCD curve | Xinhua Finance “Money Market Daily: May 8” `https://m.cnfin.com/hb-lb/zixun/20260508/4409911_1.html`; ChinaBond curves |
| Primary issuance | Public issuance-result samples, line-item amounts from fund daily reports; not full-market net financing | Sina Finance reposts of fund trading dailies and issuance-result lists |
| Ratings/defaults | Public rating-agency notices and news searches; Wind/DM unavailable in this workspace | CCXI, Lianhe, Dagong, Golden Credit, Fitch, Moody’s, S&P public-notice searches |

## Q1: Did Post-Holiday Credit-Bond Net Financing Turn Positive?

### Method

I first fixed the trading window at May 6-8, 2026. I then collected publicly available issuance-result lists and summed them by date, issuer and amount into a “confirmed public sample.” Because this workspace does not include Wind/DM/CCDC/SHCH full redemption and cancellation feeds, sample issuance cannot be treated as full-market net financing. The comparison basis remains the plan’s framework: Apr 30 as the last pre-holiday session and Apr 21-25 as the pre-holiday week.

### Findings

| Metric | Value | Conclusion |
|---|---:|---|
| Full-market issuance | Not fully reconstructable publicly | Requires Wind/DM/CCDC/SHCH |
| Full-market redemptions | Not fully reconstructable publicly | Requires maturity/put/early-redemption tape |
| Full-market net financing | Not fully reconstructable publicly | **Cannot rigorously confirm a positive turn** |
| Public issuance-result sample | **CNY 47.437bn** | Supply restart is clear |
| Sample deal count | **53 deals** | Concentrated restart across three sessions |
| Publicly verifiable cancellations | No cluster found | Needs Wind cancellation/deferment fields |

The public sample shows a clear post-holiday catch-up in issuance. May 8 sample issuance was **CNY 31.770bn**, materially above **CNY 5.947bn** on May 6 and **CNY 9.720bn** on May 7. But net financing is issuance minus redemptions, and public pages allow only partial reconstruction of issuance results, not full redemption, put or cancellation data. The correct research conclusion is therefore: **supply restarted, but a full-market positive net-financing turn cannot be confirmed from public samples alone**. Downstream writing should not describe CNY 47.437bn as full-market net financing.

### Evidence

| Date | Public sample issuance (CNY bn) | Sample deal count | Main source |
|---|---:|---:|---|
| 2026-05-06 | 5.947 | 9 | Sina Finance reposted fund trading daily issuance results |
| 2026-05-07 | 9.720 | 16 | Sina Finance reposted fund trading daily issuance results |
| 2026-05-08 | 31.770 | 28 | Sina Finance reposted fund trading daily issuance results |
| Total | **47.437** | **53** | Public issuance-result sample |

### Caveats

The sample is not a Wind/DM full-market tape. Sector, rating and regional contributions are sample splits only and should not be extrapolated. Redemptions, cancellations, deferments and subscription multiples are missing, so “whether net financing turned positive” remains a data item to be verified.

## Q2: How Did Credit, Rating And LGFV Spreads Move?

### Method

I pulled ChinaBond curves for Apr 30 and May 8, 2026. Spreads use same-tenor ChinaBond CDB yields as the benchmark. Rating spread is AA minus AAA; because the public interface returned only 1Y standard tenors for some AA+/AA CP&Note and LGFV curves in this pull, 3Y/5Y rating spreads are marked as not publicly reconstructable and replaced with AAA term-structure observations.

### Findings

| Curve | Tenor | 2026-04-30 yield % | 2026-05-08 yield % | Yield change bp | 2026-04-30 spread bp | 2026-05-08 spread bp | Spread change bp |
|---|---:|---:|---:|---:|---:|---:|---:|
| AAA CP&Note | 1Y | 1.5107 | 1.5096 | -0.11 | 14.16 | 13.55 | -0.61 |
| AAA CP&Note | 3Y | 1.7197 | 1.7263 | 0.66 | 17.91 | 19.09 | 1.18 |
| AAA CP&Note | 5Y | 1.8772 | 1.8731 | -0.41 | 24.04 | 23.48 | -0.56 |
| AA+ CP&Note | 1Y | 1.5407 | 1.5396 | -0.11 | 17.16 | 16.55 | -0.61 |
| AA CP&Note | 1Y | 1.5607 | 1.5596 | -0.11 | 19.16 | 18.55 | -0.61 |
| AAA LGFV | 1Y | 1.5138 | 1.5211 | 0.73 | 14.47 | 14.70 | 0.23 |
| AA+ LGFV | 1Y | 1.5407 | 1.5480 | 0.73 | 17.16 | 17.39 | 0.23 |
| AA(2) LGFV | 1Y | 1.5907 | 1.5980 | 0.73 | 22.16 | 22.39 | 0.23 |

This was not a broad risk-on compression week. Front-end CP&Note benefited from funding and tightened, but 3Y AAA CP&Note widened **1.18bp**, showing more caution around duration. 1Y LGFV spreads widened **0.23bp** across ratings, moving opposite to 1Y AAA industrial CP&Note. The 1Y AA-AAA CP&Note rating spread stayed at **5.00bp**, and the 1Y AA(2)-AAA LGFV spread stayed at **7.69bp**, so rating dispersion did not meaningfully blow out.

### Evidence

ChinaBond curve pulls covered CP&Note AAA/AA+/AA, LGFV AAA/AA+/AA(2), CDB, with valuation dates 2026-04-30 and 2026-05-08.

### Caveats

The public interface returned only 1Y standard tenors for several AA+/AA curves in this pull, so 3Y/5Y rating-spread heatmap cells require Wind or the ChinaBond terminal. The V2 table below therefore substitutes with available official curve points.

## Q3: Were There New Defaults, Extensions Or Downgrades?

### Method

I searched public news, rating-agency notices and bond-event keywords for May 4-8, 2026, filtering for first-time default, extension, put default, downgrade and watch-list placement. Wind/DM event databases were not available, so the conclusion is limited to publicly verifiable web evidence.

### Findings

| Date | Issuer | Sector | Region | Ownership | Action | Rating from→to | Public-bond balance | Conclusion |
|---|---|---|---|---|---|---|---:|---|
| 2026-05-04 to 2026-05-08 | No publicly double-sourced new issuer found | - | - | - | New public-bond default/extension | - | - | No internal new-default trigger |
| 2026-05-04 to 2026-05-08 | No publicly double-sourced downgrade cluster found | - | - | - | Issuer downgrade | - | - | No downgrade-migration cluster found |

Public sources did not show a new public-bond default or a concentrated downgrade cluster this week. That does not mean risk has disappeared, especially after a three-session holiday-shortened week when rating notices can lag. Property issuers, weak-region LGFVs, county-level platforms with non-standard financing stress and highly leveraged private industrial names remain the watch list.

### Evidence

Search scope included CCXI, Lianhe, Dagong, Golden Credit, Fitch, Moody’s, S&P websites and keywords such as “2026-05-06/05-07/05-08 downgrade / bond default / extension.”

### Caveats

Without DM/Wind event databases, private-placement bonds, non-standard financing events, technical defaults and late-day notices cannot be fully ruled out. Downstream writing should say “no publicly verifiable new event,” not “no new event at all.”

## Q4: LGFV Debt Resolution And Priority Provinces

### Method

For Guizhou, Yunnan, Guangxi, Tianjin, Liaoning, Shandong-Weifang, Chongqing and Gansu, I searched for special refinancing bonds, ordinary refinancing bonds, hidden-debt swaps and “platform exit” reports. Market pricing uses the 1Y LGFV curve versus CDB as a substitute because the 3Y AA(2) public curve point could not be fully returned.

### Findings

| Province/region | Public debt-resolution event this week | Sample net financing | 1Y LGFV spread substitute | Conclusion |
|---|---|---:|---:|---|
| Guizhou | No verifiable new special refinancing issuance found | Not publicly reconstructable | AA(2) LGFV 1Y spread +0.23bp | Debt-resolution expectations help, but indiscriminate beta is not warranted |
| Yunnan | No verifiable new special refinancing issuance found | Not publicly reconstructable | AA(2) LGFV 1Y spread +0.23bp | Separate provincial platforms from weaker prefectures |
| Guangxi | No verifiable new special refinancing issuance found | Not publicly reconstructable | AA(2) LGFV 1Y spread +0.23bp | Cash-flow screening still matters |
| Tianjin | No verifiable new special refinancing issuance found | Not publicly reconstructable | AA(2) LGFV 1Y spread +0.23bp | Prefer core platforms |
| Liaoning | No verifiable new special refinancing issuance found | Not publicly reconstructable | AA(2) LGFV 1Y spread +0.23bp | Avoid weak county long duration |
| Shandong-Weifang | No verifiable new special refinancing issuance found | Not publicly reconstructable | AA(2) LGFV 1Y spread +0.23bp | Valuation dispersion should persist |
| Chongqing | No verifiable new special refinancing issuance found | Not publicly reconstructable | AA(2) LGFV 1Y spread +0.23bp | Watch platform consolidation and exit lists |
| Gansu | No verifiable new special refinancing issuance found | Not publicly reconstructable | AA(2) LGFV 1Y spread +0.23bp | Keep exposure high-tier and short-duration |

The key LGFV question this week was less new policy and more whether valuations continued to price debt-resolution expectations. The 1Y AA(2) LGFV spread widened **0.23bp**, while 1Y AAA CP&Note tightened, so the market still demands incremental compensation for weaker LGFV quality. Platform-exit repricing should be tiered by administrative level, fiscal strength, swap certainty and public-service role, not by province label alone.

### Evidence

Public searches covered “2026 May special refinancing bond issuance,” “LGFV debt resolution platform exit May 2026,” and “priority provinces hidden-debt swap.” Market pricing comes from ChinaBond LGFV curves.

### Caveats

Province-level LGFV net financing requires Wind province-level classification. This report can only provide public event status and ChinaBond curve substitutes. V3 is therefore changed to a “priority-province event status plus common curve-spread substitute” table.

## Q5: Did Property Maintain The Twin-Track Pattern?

### Method

I searched May 4-8, 2026 for onshore/offshore issuance by benchmark developers, restructuring/winding-up/hearing milestones for distressed developers, and spread news for surviving private developers. The sector is segmented into central/local SOEs, benchmark private names and distressed issuers.

### Findings

| Group | Issuers | Public financing/restructuring signal this week | Sample amount | Credit implication |
|---|---|---|---:|---|
| Central/local SOE developers | Poly Developments, COLI, China Resources Land, Yuexiu, China Merchants Shekou | No full new-issuance list could be verified from public pages | Not publicly reconstructable | Financing channels should remain better than private peers |
| Benchmark/surviving private developers | Longfor, Seazen, Binjiang, Midea Real Estate | No public sample showed a large fresh spread compression | Not publicly reconstructable | Stay with short-duration exposure backed by high-tier city inventory |
| Distressed issuers | Country Garden, Sunac, Sino-Ocean, R&F, Logan, Agile | Offshore restructuring, winding-up petitions and extension terms remain the main drivers | Not publicly reconstructable | Do not buy sector beta indiscriminately |

Property did not show a publicly verifiable broad repair signal. Quality SOEs and a small set of benchmark private developers may still access financing windows, while distressed issuers remain driven by restructuring milestones. Whether private-developer spreads tightened further requires bond-level valuation or trading data; public news alone is insufficient for a precise bp conclusion.

### Evidence

Search keywords included “Vanke / Poly / COLI / Longfor / Seazen issuance May 2026,” “Country Garden / Sunac / Sino-Ocean offshore bond restructuring May 2026,” and “China property bond restructuring May 2026.”

### Caveats

Property credit spreads require bond-level transactions and ChinaBond valuation-deviation data. Public headlines provide event timing but cannot replace traded spread data.

## Q6: Funding And Credit-Spread Lead/Lag

### Method

I compared 1Y AAA NCD and 3Y AAA CP&Note spread across Apr 30, May 6, May 7 and May 8, 2026. DR007 is compared with the same credit spread for May 6-8. Correlations are descriptive only, not statistically significant.

### Findings

| Date | DR007 % | 1Y AAA NCD % | 3Y AAA CP&Note spread bp | Comment |
|---|---:|---:|---:|---|
| 2026-04-30 | Not included | 1.4450 | 17.91 | Pre-holiday base |
| 2026-05-06 | 1.3699 | 1.4550 | 18.34 | NCD rose slightly on reopening; 3Y spread widened |
| 2026-05-07 | 1.3724 | 1.4500 | 19.23 | Funding stable, credit spread widened further |
| 2026-05-08 | 1.3365 | 1.4450 | 19.09 | DR007 fell, 3Y spread only edged down |
| Sample correlation | -0.31 (DR007 vs 3Y spread, 3 days) | -0.01 (NCD vs 3Y spread, 4 points) | - | Too short for statistical inference |

Funding easing worked better for front-end credit than for 3Y credit. 1Y AAA NCD returned to the pre-holiday **1.4450%** on May 8, but the 3Y AAA CP&Note spread was still **1.18bp** wider than Apr 30. Next week, the positioning bias should be: **short-duration high-grade as the core, selective 3Y AAA/AA+ only where liquidity and valuation cushion are adequate, and no proactive reach into weak-region LGFV or private property beta**.

### Evidence

DR007 comes from Xinhua Finance money-market daily. 1Y AAA NCD, 3Y AAA CP&Note and CDB curves come from ChinaBond yield curves.

### Caveats

The plan asked for a rolling 20-day correlation, but this research window has only three post-holiday trading sessions and the public pages did not provide a complete 20-day DR007 batch series. A short-sample substitute is used here; a formal weekly should recalculate the 20-day rolling correlation once Wind is available.

## Visualization-Ready Data Tables

### V1 Substitute: Post-Holiday Public Sample Issuance By Sector

The original chart asked for sector net financing. Because full redemptions and cancellations could not be publicly reconstructed, this table substitutes **public issuance-result sample by sector**.

| Sector | Sample issuance (CNY bn) | Sample redemptions (CNY bn) | Sample net financing (CNY bn) | Notes |
|---|---:|---:|---:|---|
| LGFV | 17.017 | Not publicly reconstructable | Not publicly reconstructable | Mostly district/county and rail-transit platforms |
| Industrial | 18.480 | Not publicly reconstructable | Not publicly reconstructable | Includes large BYD sample deals |
| Utilities/energy | 8.000 | Not publicly reconstructable | Not publicly reconstructable | Power, nuclear and utilities |
| Financial/leasing | 3.940 | Not publicly reconstructable | Not publicly reconstructable | Leasing and financial platforms |
| Total | **47.437** | Not publicly reconstructable | Not publicly reconstructable | Public issuance-result sample |

### V2 Substitute: Credit-Spread Weekly-Change Heatmap Input

| Product | Rating | Tenor | 2026-04-30 spread bp | 2026-05-08 spread bp | Change bp |
|---|---|---:|---:|---:|---:|
| CP&Note | AAA | 1Y | 14.16 | 13.55 | -0.61 |
| CP&Note | AAA | 3Y | 17.91 | 19.09 | 1.18 |
| CP&Note | AAA | 5Y | 24.04 | 23.48 | -0.56 |
| CP&Note | AA+ | 1Y | 17.16 | 16.55 | -0.61 |
| CP&Note | AA | 1Y | 19.16 | 18.55 | -0.61 |
| LGFV | AAA | 1Y | 14.47 | 14.70 | 0.23 |
| LGFV | AA+ | 1Y | 17.16 | 17.39 | 0.23 |
| LGFV | AA(2) | 1Y | 22.16 | 22.39 | 0.23 |

### V3 Substitute: Priority-Province Event Status Plus Curve-Spread Proxy

| Province/region | Public debt-resolution event this week | Sample net financing (CNY bn) | Proxy curve | Spread change bp |
|---|---|---:|---|---:|
| Guizhou | No verifiable new event | Not publicly reconstructable | 1Y AA(2) LGFV | 0.23 |
| Yunnan | No verifiable new event | Not publicly reconstructable | 1Y AA(2) LGFV | 0.23 |
| Guangxi | No verifiable new event | Not publicly reconstructable | 1Y AA(2) LGFV | 0.23 |
| Tianjin | No verifiable new event | Not publicly reconstructable | 1Y AA(2) LGFV | 0.23 |
| Liaoning | No verifiable new event | Not publicly reconstructable | 1Y AA(2) LGFV | 0.23 |
| Shandong-Weifang | No verifiable new event | Not publicly reconstructable | 1Y AA(2) LGFV | 0.23 |
| Chongqing | No verifiable new event | Not publicly reconstructable | 1Y AA(2) LGFV | 0.23 |
| Gansu | No verifiable new event | Not publicly reconstructable | 1Y AA(2) LGFV | 0.23 |

### V4: Weekly Rating / Default / Extension Event Table

| Date | Issuer | Sector | Action | Rating from→to | Bonds outstanding | Trigger |
|---|---|---|---|---|---:|---|
| 2026-05-04 to 2026-05-08 | No publicly double-sourced new event | - | New default / extension / concentrated downgrade | - | - | No public match found; verify with DM/Wind |

### V5: Funding Versus Credit-Spread Linkage

| Date | DR007 % | 1Y AAA NCD % | 3Y AAA CP&Note yield % | 3Y CDB yield % | 3Y AAA CP&Note spread bp |
|---|---:|---:|---:|---:|---:|
| 2026-04-30 | Not included | 1.4450 | 1.7197 | 1.5406 | 17.91 |
| 2026-05-06 | 1.3699 | 1.4550 | 1.7315 | 1.5481 | 18.34 |
| 2026-05-07 | 1.3724 | 1.4500 | 1.7309 | 1.5386 | 19.23 |
| 2026-05-08 | 1.3365 | 1.4450 | 1.7263 | 1.5354 | 19.09 |

### V6 Optional: Property Issuer Tracker

| Issuer | Type | Public event this week | Quantified amount | Research action |
|---|---|---|---:|---|
| Vanke | Benchmark / mixed ownership | No full new issuance verified this week | Not publicly reconstructable | Keep on priority watch |
| Poly Developments | SOE | No full new issuance verified this week | Not publicly reconstructable | High-grade property benchmark |
| COLI | Central SOE | No full new issuance verified this week | Not publicly reconstructable | High-grade property benchmark |
| Longfor | Benchmark private | Watch whether spreads continue tightening | Not publicly reconstructable | Short duration only |
| Seazen | Private | Watch sales and refinancing window | Not publicly reconstructable | Control position size |
| Country Garden | Distressed | Continue tracking offshore restructuring | Not publicly reconstructable | Do not buy sector beta |
| Sunac | Distressed | Continue tracking restructuring/court milestones | Not publicly reconstructable | Event-driven only |
| Sino-Ocean | Distressed | Continue tracking restructuring progress | Not publicly reconstructable | Event-driven only |

## Look-Ahead

| Date/window | Event | Credit implication |
|---|---|---|
| 2026-05-11 to 2026-05-15 | Second post-holiday week issuance and redemptions | Verify whether net financing actually turns positive |
| 2026-05-11 to 2026-05-15 | Whether 1Y AAA NCD holds near 1.45% | Test support for front-end credit |
| 2026-05-11 to 2026-05-15 | Whether 3Y AAA CP&Note spread returns below 18bp | Decide whether widening was only a supply disturbance |
| 2026-05-11 to 2026-05-15 | Priority-province LGFV notices and early redemptions | Gauge debt-resolution follow-through |
| 2026-05-11 to 2026-05-15 | Property issuer issuance and restructuring milestones | Distinguish quality-issuer financing from distressed event trades |
| 2026-05-11 to 2026-05-15 | Post-holiday rating-agency notices | Watch delayed rating migration |

## Appendix: Calculations

| Metric | Formula |
|---|---|
| Credit spread | Same-tenor credit curve yield minus same-tenor ChinaBond CDB yield |
| Yield change | 2026-05-08 yield minus 2026-04-30 yield, in bp |
| Rating spread | AA curve yield minus AAA curve yield |
| Sample issuance | Sum of public issuance-result line-item amounts |
| Short-sample correlation | Pearson correlation; descriptive only, not a significance test |
