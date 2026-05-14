---
source: ai-institute
resource_type: research-result
report_kind: briefing
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Pre-Open Risk Watch | 2026-05-14 [source: local shell `date +%Y-%m-%d` 2026-05-14]

Kind: **briefing**
Analyst: **(unknown)**

## Links

- Report type: [[briefing]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Pre-Open Risk Watch | 2026-05-14 [source: local shell `date +%Y-%m-%d` 2026-05-14]

Reference date: 2026-05-14; prior trading day: 2026-05-13. Sources: workspace drafts `00_研究院产出.md` through `04_sentiment_flows.md`, plus the underlying data sources they cite.

## Headline Conclusions (Red / Yellow / Green dashboard)

| Risk dimension | Level | One-line view |
|---|---|---|
| US long-end yields & duration | Red | 30Y UST at 5.03% [source: U.S. Treasury 2026-05-13]; any move above 5.10% directly compresses valuations. |
| Leverage & crowding | Red | Margin balance up 5 sessions in a row, +RMB 1,355.36 bn; electronics-only margin +RMB 470.08 bn [source: Securities Times Databao 2026-05-13]; top-5% turnover concentration MA5 at 45.63% [source: Peakstone Labs 2026-05-13]. |
| Trump-Xi summit rhetoric | Yellow→Red | Two-day talks underway, Jensen Huang traveling with Trump [source: Reuters/Investing.com 2026-05-13]; any tariff or export-control escalation flips to red. |
| Oil & imported inflation | Yellow | WTI 66.42, +1.37%; Brent 69.77, +1.38% [source: COMEX Live 2026-05-14]; a Brent break above 70 will erode the rate-cut narrative. |
| JPY intervention | Yellow | USD/JPY 157.78 [source: DowFutures.org 2026-05-14], already inside the verbal-intervention zone. |
| RMB & foreign-investor flows | Green→Yellow | USD/CNY 6.7908, -0.02% [source: DowFutures.org 2026-05-14]; DXY 98.524 [source: DowFutures.org 2026-05-14] — dollar resilience caps incremental foreign inflow. |
| Onshore liquidity | Green | DR007 1.4416%, R007 1.5331% [source: chinamoney.com.cn 2026-05-13]; 10Y CGB 1.665%, 30Y 1.9195% [source: chinamoney.com.cn 2026-05-13]. |
| Lock-up unlocks & convertible-bond redemption | Yellow | 2026-05-13 unlocked market cap RMB 14.043 bn [source: NBD/Wind 2026-05-13]; the convertible-bond forced-redemption impact on small-cap liquidity is still running [source: morning-digest raw.json 2026-05-14; thread f9c8f170]. |
| Internal research divergence | Yellow | 38 disputed fact-cards uncleared [source: morning-digest raw.json 2026-05-14], concentrated in AI infrastructure, rates, and weather claims. |

---

## 1. Today's Systemic Risk Factors

| Factor | Key data | Trigger / action |
|---|---|---|
| US long-end stickiness | 10Y 4.46%, 30Y 5.03%, 30Y-2Y +105bp [source: U.S. Treasury 2026-05-13] | If 30Y breaches 5.10%, cut duration in dividend financials immediately; only allow duration assets to broaden if 10Y falls below 4.40% [source: this report's strategy threshold; baseline from 01_macro_overnight.md]. |
| Dollar resilience | DXY 98.524, +0.16% [source: DowFutures.org 2026-05-14] | Dollar has not weakened; foreign inflow elasticity is weaker than US equity gains suggest; downgrade HK beta credibility. |
| Trump-Xi summit rhetoric | Trump in Beijing, two-day talks; Nvidia CEO Jensen Huang in the delegation [source: Reuters/Investing.com 2026-05-13] | Tariff / export-control escalation = immediate cut on AI hardware, semis, exporters; conciliatory language = maintain AI hardware priority. |
| Oil rebound | WTI 66.42, +1.37%; Brent 69.77, +1.38% [source: COMEX Live 2026-05-14] | A single-day Brent break above 70 lifts imported inflation; rescore chemicals / airlines / shipping. |
| JPY carry-unwind risk | USD/JPY 157.78, -0.04% [source: DowFutures.org 2026-05-14] | Once verbal intervention hits, Japan exporters and global carry trades whip together, transmitting to A-share high-beta growth. |
| AI capex social licence | Digest §1 Theme 1 marks the valuation anchor shifting from "announced MW" to water rights / grid / community permitting, confirmed across multiple cards [source: morning-digest raw.json 2026-05-14; cards d34cfac1, 68a8063a, cca07e9e] | Short timing on AI infrastructure is not yet defined, but stop adding new IPP longs until PJM / water / permitting filings show negative language. |

## 2. Macro / Policy / Liquidity Risks

- **Onshore credit downside risk**: M2, TSF and new RMB loans for April release today at 09:00 [source: Myfxbook 2026-05-14 calendar]. Consensus: TSF 1,500.0B, new loans 700.0B [source: Myfxbook 2026-05-14 calendar]. A material miss requires growth-stock de-leveraging first; prior prints were M2 YoY 8.5%, TSF 5,230.0B, new loans 3,860.0B [source: Myfxbook 2026-05-14 calendar].
- **Risk of over-extrapolating policy**: PBOC Q1 report keyed on "appropriately accommodative, counter-cyclical" [source: PBOC 2026-05-09]; 2026-05-13 7-day reverse repo was just RMB 0.5 bn, net withdrawal RMB 25.5 bn [source: chinamoney.com.cn 2026-05-13]. Baseline is "stabilise liquidity, wait for data". The market reading this as "strong stimulus imminent" is a major give-back risk.
- **Structural property drag**: Q1 property-development investment YoY -11.2% [source: NBS 2026-04-16]; property and insurance led declines yesterday [source: Securities Times Databao 2026-05-13]. Regional-credit / mortgage-exposure thread 46ccbdd3 still running [source: morning-digest raw.json 2026-05-14], i.e. city-commercial bank NPL stress is not priced.
- **CNY fix & intraday deviation**: Today's 09:15 fix is the next liquidity-conditions read [source: Federal Reserve Bank of New York 2026-05-14 lookup]; an unusually strong counter-cyclical adjustment would signal the PBOC already perceives depreciation pressure — at which point the "low-vol crowded" dividend/financials trade must reset.
- **One-off effects in US service PPI**: US April final-demand PPI -1.4%, services -3.6% [source: BLS PPI 2026-05-14 lookup]; some service-line moves may be one-off and cannot be mechanically extrapolated as disinflation.

## 3. Crowded / Fragile Trades to Avoid or Trim at the Open

| Crowded position | Evidence | Risk trigger |
|---|---|---|
| AI hardware / CPO / memory (Foxconn Industrial Internet 601138, Innolight 300308, Eoptolink 300502, Montage 688008, Cambricon 688256) | Foxconn turnover RMB 28.051 bn, 23.5% of total turnover, main-money inflow RMB 6.591 bn [source: Sina Finance 2026-05-13]; Montage 5-day margin +RMB 4.538 bn, +56.07% [source: Securities Times Databao 2026-05-13]; Innolight Shenzhen-Connect turnover RMB 5.323 bn [source: EastMoney Choice 2026-05-13]. | A consensus gap-up without follow-through volume = trim immediately; if limit-up count slides from 124 to <80 [source: Peakstone Labs 2026-05-13], cut all high-beta. |
| Power / green-electricity direct-supply limit-up names (Datang Power 601991 6 consecutive limits, GCL Energy Technology 002015, CECEP Wind Power 601016) | GCL Energy Technology limit-up order RMB 0.377 bn; CECEP Wind RMB 0.300 bn [source: Sohu/limit-up analysis 2026-05-13]. | After Datang's 6th limit, "sentiment value exceeds odds" [source: 03_ashare_strategy.md]; rotate to lower-positioned grid-equipment and earnings-backed names on a fail. |
| Low-vol / dividend crowding | Digest §1 Theme 2 flags "low-vol crowding, Southbound re-allocation, hard-tech overheating monitoring" [source: morning-digest raw.json 2026-05-14; card 2a4f20c4]; chief-quant thread f4bcdce9 interprets simultaneous Low-Vol & Quality failure as the start of a quarterly style switch [source: morning-digest raw.json 2026-05-14]. | Dividend financials carry high tail risk on a 30Y back-up; if 30Y breaks 5.10%, trim dividend duration first. |
| High-unlock-ratio names with high turnover | 2026-05-13: 16 issuers unlocked 0.438 bn shares, market cap RMB 14.043 bn [source: NBD/Wind 2026-05-13]; Haoshanghao 001298 39.01%, Tiangong 834549 16.93%, Hongjing 301396 14.79% [source: NBD/Wind 2026-05-13]. | High unlock + high turnover combos: do not participate; today's 2026-05-14 full-market unlock list could not be reliably sourced [source unknown]. |
| HK tech / internet (Southbound already exiting) | 2026-05-13 Southbound net sold HKD 6.772 bn (Shanghai net bought HKD 0.498 bn, Shenzhen net sold HKD 7.270 bn) [source: Securities Times Databao 2026-05-13]. | Onshore investors are taking profits in growth HK names; A/H risk appetite is diverging — do not extrapolate A-share AI sentiment to HK tech. |
| ETF top-of-range rebalancing | 2026-05-12 equity ETFs net outflow RMB 27.103 bn, MTD net outflow >RMB 120 bn [source: China Fund News / Securities Times 2026-05-13]. | Margin money is absorbing institutional supply; if margin reverses, both the index and themes drop together. |
| Convertible-bond forced redemption → small-cap liquidity | Thread f9c8f170 still running [source: morning-digest raw.json 2026-05-14]. | Sell-pressure / liquidity-shock mapping incomplete — avoid concentrated positions in low-liquidity small-cap growth today. |
| Ag / weather punts (Stanley, Denghai Seeds, COFCO Engineering) | Northeast-Western drought claim flagged disputed [source: morning-digest raw.json 2026-05-14; card 2477387f] | Event-sleeve tracking only; do not add until 6/10-6/25 satellite window. |

## 4. Institute-Internal Risks (from §4 of `00_研究院产出.md` and the handoff log)

### 4.1 Disputed fact-cards (require QA + CRO sign-off)

| parent_id | Disputed claim | Portfolio implication |
|---|---|---|
| 68a8063a-ee68-48fc-b5ab-fe0de1eb0fe6 | "Retroactive surcharge" causes 95% 1-day VaR for major data-center REITs to surge 340bp [source: morning-digest raw.json 2026-05-14] | If falsified, the AI-infrastructure short thesis weakens; if confirmed, IPPs and DC REITs require immediate trimming. |
| 3a57b1fd-d04f-4219-aa03-d96cd778bd4c | USD/CNY breaking 7.35 and US 10Y approaching 5.0% — both flagged disputed [source: morning-digest raw.json 2026-05-14] | Materially off vs verified data (USD/CNY 6.7908 [source: DowFutures.org 2026-05-14]; 10Y 4.46% [source: U.S. Treasury 2026-05-13]); do not use this FX/rates narrative as today's trading basis. |
| 2477387f-5bda-4331-9037-61426e110b9a | Northeast-Western 6/15-7/10 high-heat / low-rain probability 55-60%, affected corn acreage 4-6%, flagged disputed [source: morning-digest raw.json 2026-05-14] | No additions on ag-weather plays today; observation only. |

Disputed total = 38 cards (completed 36 + reused 2) [source: morning-digest raw.json 2026-05-14] — a high share of completed cards, representing portfolio-level static uncertainty.

### 4.2 Analyst handoffs that did not converge or are still running

| Thread | Status | Risk implication |
|---|---|---|
| AI-infrastructure valuation anchor switch (digest §1 Theme 1) | Risk direction confirmed across multiple cards, but valuation expression, short timing, and A-share mapping still need strategy-desk unification [source: morning-digest raw.json 2026-05-14] | Do not give a concrete short timing until the strategy desk agrees; stop adding longs first. |
| Cross-asset tails (high rates / re-inflation / oil / JPY-CNY) (digest §1 Theme 3) | High-rate direction clear; CPI, oil, FX intervention, and China hedge path unresolved [source: morning-digest raw.json 2026-05-14] | No one-sided macro punt (strong cuts or stagflation) allowed to add risk today. |
| f9c8f170-32c0-4ec2-93b4-29528281fc8d Convertible-bond forced redemption → small-cap liquidity | Running [source: morning-digest raw.json 2026-05-14] | Do not add small-cap growth proactively. |
| 46ccbdd3-0637-4a4d-9c5a-aa64fb200ddf Regional credit / mortgage exposure | Running [source: morning-digest raw.json 2026-05-14] | Do not add city-commercial banks or property dev loans. |
| 5c127868-aa48-42ff-a965-75d1e51fef1d Northeast-Western drought | Parallel to 2477387f; claim disputed [source: morning-digest raw.json 2026-05-14] | Event tracking only. |

### 4.3 Deep-research outputs flagging downside

- 0981.HK (SMIC): listed in the whiteboard-mention deep-research outputs [source: morning-digest raw.json 2026-05-14]; highly tied to summit / export-control rhetoric — if language hardens, cut semis exposure immediately.
- 1347.HK (Hua Hong Semiconductor): same [source: morning-digest raw.json 2026-05-14].
- A (US, Agilent) / EM (US, ETF): in deep-research outputs [source: morning-digest raw.json 2026-05-14]; EM ETF signal is a side-read on foreign appetite, but not a basis for adding risk today.

## 5. Risk Lights (synthesis)

- 🔴 **Red** (monitor in real time, ready to trim): 30Y UST > 5.10%; Trump-Xi summit produces tariff / export-control escalation language; AI hardware leaders (Foxconn, Innolight, Eoptolink) gap up together but fail to absorb volume; limit-up count falls back below 80 [source: Peakstone Labs 2026-05-13; Reuters/Investing.com 2026-05-13; U.S. Treasury 2026-05-13].
- 🟡 **Yellow** (raise observation frequency): USD/JPY breaks 158, triggering verbal intervention; Brent breaks 70 in a single session; April TSF / new loans materially below consensus (TSF < 1,000B or new loans < 500B) [source: DowFutures.org 2026-05-14; COMEX Live 2026-05-14; Myfxbook 2026-05-14 calendar].
- 🟢 **Green** (neutral-overweight allowed for now): DR007 around 1.45%, 10Y CGB 1.665%, CNY fix stable [source: chinamoney.com.cn 2026-05-13; DowFutures.org 2026-05-14].

## 6. Team SOP If Risk Escalates

| Priority | Trigger | Immediate action | Owning desk |
|---|---|---|---|
| P0 | Summit produces tariff / export-control escalation language [source: Reuters/Investing.com 2026-05-13] | 1) Trim AI hardware / semis / exporters by 30–50% uniformly; 2) Do not catch HK tech; 3) Use dividend financials and utilities as defensive anchor. | chief-strategist, ashare-strategist, offshore-strategist |
| P0 | 30Y UST > 5.10% or 10Y > 4.55% | 1) Cut duration in dividend financials and high-dividend names; 2) Trim REITs / utilities; 3) Mirror in HK duration assets. | chief-risk, bond-analyst, financials-analyst |
| P1 | AI hardware leaders stall on heavy volume / limit-up count falls back below 80 [source: Peakstone Labs 2026-05-13] | 1) Cut high-beta growth by 1/3; 2) Keep core names with order / earnings confirmation; 3) Leveraged accounts trim margin first. | chief-quant, ashare-strategist |
| P1 | TSF < 1,000B or new loans < 500B [source: Myfxbook 2026-05-14 calendar prior + consensus] | 1) Growth stocks de-leverage first; 2) Maintain priority on equipment-upgrade and infra chains; 3) Strong-stimulus trade may not chase. | china-macro, ashare-strategist |
| P2 | USD/JPY breaks 158 / Brent breaks 70 [source: DowFutures.org 2026-05-14; COMEX Live 2026-05-14] | 1) Warn on Japan exporters and global carry trades; 2) Rescore chemicals / shipping / airlines; 3) If oil holds, lift energy from hedge to low-weight long. | fx-strategist, energy-analyst, derivatives-strategist |
| P2 | City-commercial bank NPL or mortgage-exposure negative disclosure [source: morning-digest raw.json 2026-05-14; thread 46ccbdd3] | 1) Trim regional banks; 2) Close event-driven property positions; 3) Keep major-bank dividend financials. | realestate-analyst, credit-analyst, financials-analyst |
| P3 | 38 disputed fact-cards not cleared by T+1 [source: morning-digest raw.json 2026-05-14] | 1) chief-risk + QA Manager convene targeted verification on three categories (AI infra, rates, weather); 2) Uncleared items may not enter today's trading notes. | chief-risk, QA Manager |

## 7. Watchlist

| Time | Item | Pre-set response |
|---|---|---|
| 09:00 | M2 / TSF / new loans [source: Myfxbook 2026-05-14 calendar] | See P1 trigger. |
| 09:15 | CNY fix [source: Federal Reserve Bank of New York 2026-05-14] | If counter-cyclical adjustment is unusually strong, cut duration in dividend financials. |
| 09:30 | NBS ten-day basic-materials price report [source: NBS 2026-05-14 calendar] | Ferrous / non-ferrous / chemicals prices confirm PPI; pace cyclicals accordingly. |
| Pre-open & intraday | Trump-Xi summit language [source: Reuters/Investing.com 2026-05-13] | See P0 trigger. |
| Post-close | Margin and ETF flow direction [source: Securities Times Databao 2026-05-13; China Fund News 2026-05-13] | If margin keeps rising while ETFs keep redeeming, cap single-theme concentration 5pp lower tomorrow. |
