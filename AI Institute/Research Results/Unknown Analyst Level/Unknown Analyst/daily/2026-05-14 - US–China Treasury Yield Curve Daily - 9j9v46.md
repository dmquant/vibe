---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# US–China Treasury Yield Curve Daily

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# US–China Treasury Yield Curve Daily

**Date:** 2026-05-14
**Analyst role:** Bond analyst
**Data provenance:** US Treasury figures from the institute's internal data API (`/api/data/yield_curve_us`), fresh / high confidence. China CGB curve from public web_search sources (API does not yet cover CGB).

---

## Executive summary

UST10Y closes at **4.46%**, with 2s10s at **+48 bps** (positive slope, cleanly out of the 2022–2024 deep-inversion regime) and 5s30s at **+91 bps**, evidence that long-end term premium has continued to rebuild. CGB10Y prints around **1.74%**, putting the US–China 10Y spread at roughly **+272 bps** (US over China) — a structural tailwind for USDCNY. CME FedWatch implies a **95.9%** probability of an unchanged decision at the June 17 FOMC, and 2026 implied cuts have been pushed to essentially zero following hotter April CPI (3.8% YoY). On the PBoC side, the 1Y LPR is held at 3.00% and 5Y LPR at 3.50%, marking the 11th consecutive month of unchanged policy. Current setup: **US front end range-bound at high levels, US long end defending term premium / CGB curve hovering near historic lows / US–China spread sticky and wide**.

---

## 1. US Treasury curve (internal API `yield_curve_us`)

| Tenor | Yield (%) | Source |
|---|---|---|
| 2Y  | 3.98 | Internal API → financialmodelingprep.com/api/v4/treasury |
| 5Y  | 4.12 | Internal API → financialmodelingprep.com/api/v4/treasury |
| 10Y | 4.46 | Internal API → financialmodelingprep.com/api/v4/treasury |
| 30Y | 5.03 | Internal API → financialmodelingprep.com/api/v4/treasury |

- **2s10s spread: +48 bps** — re-steepened and stable in positive territory, fully out of the prior inversion cycle.
- **5s30s spread: +91 bps** — long-end convexity / term premium meaningfully restored.
- **Data status:** `is_stale=false`, `confidence=high`, `source_tier=B`, no warnings.
- **API vs. prior expectation check:** 10Y / 5Y / 2Y values are inside my plausible 1H26 range (10Y 4.3–4.8%); no ≥30 bp deviation warning triggered.

---

## 2. China government bond curve (web_search; API not yet covered)

| Tenor | Yield (%) | As-of | Source |
|---|---|---|---|
| 2Y  | 1.28 | 2026-05-12 | [tradingeconomics — China 2Y](https://tradingeconomics.com/china/2-year-note-yield) |
| 5Y  | ~1.55 | 2026-04-10 (latest available) | [CEIC — China Treasury Bond 5Y](https://www.ceicdata.com/en/china/pbc--ccdc-treasury-bond-and-other-bond-yield-daily/bond-yield-treasury-bond-5-year) |
| 10Y | 1.74 | 2026-05-13 | [tradingeconomics — China 10Y](https://tradingeconomics.com/china/government-bond-yield) |

- Implied CGB **2s10s ≈ +46 bps**, similar shape to USTs but the entire curve sits 250–270 bps lower in absolute terms.
- CGB10Y rallied ~7 bp the prior session: strong April export prints (+14.1% YoY, record monthly USD value) initially looked hawkish for PBoC, but loose funding conditions dominated and the curve drifted lower.
- The 5Y figure is the latest available datapoint (April 10). For authoritative real-time data, see [ChinaBond yield curves](https://yield.chinabond.com.cn/cbweb-czb-web/czb/moreInfo?locale=en_US&nameType=1) or [China Foreign Exchange Trade System](https://www.chinamoney.com.cn/chinese/bkcurvrty/).

---

## 3. US–China spread and implied policy

### 3.1 US–China 10Y spread

- UST 10Y 4.46% − CGB 10Y 1.74% = **+272 bps** (US over China).
- Read-through: still near the 2-year highs; provides a structural bid under USDCNY. Hedged yield pickup on CGB for global investors is essentially exhausted, keeping reserve / real-money allocators biased toward USTs.

### 3.2 Fed funds futures implied path (CME FedWatch)

| Horizon | Implied path | Source |
|---|---|---|
| 2026-06-17 FOMC | Hold probability **95.9%** | [CME FedWatch Tool](https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html) / [growbeansprout fedwatch](https://growbeansprout.com/tools/fedwatch) |
| Next 6 months (through Nov 2026) | Year-end cut probability driven to ~0%; swap markets imply 0 cuts in 2026 | [Cointelegraph citing swaps markets](https://www.facebook.com/cointelegraph/posts/-now-theres-a-0-probability-of-fed-rate-cuts-in-2026-according-to-swaps-markets-/1249075507399275/) |
| 9–12 months | Symmetric small odds of a cut vs. a hike; the modal path is a hawkish hold | [centralbank.watch FOMC odds](https://centralbank.watch/federal-reserve/) |

- Catalyst: April CPI **+3.8% YoY** (vs. 3.3% prior) and **+0.6% MoM** has compressed near-term cut pricing materially.

### 3.3 LPR / MLF policy stance

| Tool | Rate | Status | Source |
|---|---|---|---|
| 1Y LPR | 3.00% | Unchanged 11 months | [tradingeconomics — China LPR](https://tradingeconomics.com/china/interest-rate) / [CNBC 2026-04-20](https://www.cnbc.com/2026/04/20/china-keeps-benchmark-lending-rates-unchanged-as-economic-growth-revs-up-amid-mounting-middle-east-risk-mount-.html) |
| 5Y LPR (mortgage benchmark) | 3.50% | Unchanged 11 months | Same |
| 1Y MLF | 2.00% | Unchanged since January (latest available) | [tradingeconomics — China 1Y MLF](https://tradingeconomics.com/china/1-year-mlf-rate) |

---

## 4. Conclusions and tracking signals

### Conclusions (≤ 3)

1. **No trend-long window on the US long end yet.** UST10Y at 4.46% with a positive 2s10s, sticky CPI, and ~0 implied cuts in 2026 does not offer a directional rally setup. Express duration via 5Y–7Y, where carry/roll has improved and the curve is steepest, rather than adding 10Y+ duration outright.
2. **CGB curve structurally low, with limited remaining upside.** CGB10Y at 1.74% already prices substantial easing; further rallies require fresh QE, a property cliff, or an export shock. Steepener trades are more attractive than outright duration here.
3. **272 bp US–China 10Y spread is a structural RMB headwind.** Under our base case of Fed-on-hold and PBoC-on-hold, the spread does not compress quickly. FX-hedged CGB allocations remain unattractive — be cautious about pricing in EM-led inflows.

### Tracking signals (2)

- **2026-05-30 — US April PCE.** A core PCE print > 0.35% MoM reinforces 0-cuts-in-2026 and lifts the whole UST curve; 2s10s should steepen further.
- **2026-06-17 — FOMC + SEP (dot plot).** Watch the gap between the dot plot and market pricing (~0 cuts). If the dots show one cut while the market holds at zero, the 10Y is biased to rally.

---

## Data sources

### Internal API
- `yield_curve_us` (fresh / high / tier-B) — upstream: `https://financialmodelingprep.com/api/v4/treasury`

### web_search
- [tradingeconomics — China 10-Year Government Bond Yield](https://tradingeconomics.com/china/government-bond-yield)
- [tradingeconomics — China 2-Year Note Yield](https://tradingeconomics.com/china/2-year-note-yield)
- [CEIC — China Treasury Bond 5Y](https://www.ceicdata.com/en/china/pbc--ccdc-treasury-bond-and-other-bond-yield-daily/bond-yield-treasury-bond-5-year)
- [ChinaBond yield curves](https://yield.chinabond.com.cn/cbweb-czb-web/czb/moreInfo?locale=en_US&nameType=1)
- [China Foreign Exchange Trade System — real-time curves](https://www.chinamoney.com.cn/chinese/bkcurvrty/)
- [CME FedWatch Tool](https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html)
- [growbeansprout — FedWatch latest](https://growbeansprout.com/tools/fedwatch)
- [centralbank.watch — Fed Rate Probability 2026](https://centralbank.watch/federal-reserve/)
- [tradingeconomics — China LPR](https://tradingeconomics.com/china/interest-rate)
- [tradingeconomics — China 1Y MLF Rate](https://tradingeconomics.com/china/1-year-mlf-rate)
- [CNBC — China keeps benchmark lending rates unchanged (2026-04-20)](https://www.cnbc.com/2026/04/20/china-keeps-benchmark-lending-rates-unchanged-as-economic-growth-revs-up-amid-mounting-middle-east-risk-mount-.html)

---

```json
{"follow_ups":[
  {"to":"global-macro","subject":"USDCNY path under Fed-zero-cuts + 272 bp US–China 10Y spread base case","question":"Assuming Fed delivers 0 cuts in 2026, CGB10Y stays in 1.7–1.8%, and the US–China 10Y spread holds at 250–280 bps, what are your base / bull / bear case USDCNY midpoints by 2026-12-31? Which non-rates variables (exports, capital account, property) are most likely to break the base case?","priority":"high"}
]}
```
