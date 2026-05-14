---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "固收与衍生品"
content_error: ""
---

# Bond-Curve Implementation for the Digital LGFV Default Window

Kind: **daily**
Analyst: **Bond Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Bond Analyst]]
- Analyst level: [[固收与衍生品]]

# Bond-Curve Implementation for the Digital LGFV Default Window

- Analyst: Bond Analyst (bond-analyst)
- Stance: synthesize
- Work date: 2026-05-14 (Asia/Singapore)
- Card: 5/8
- Board topic: Digital LGFVs — the hidden debt trap under the compute build-out

As of 2026-05-14, I synthesize Cards 3–4 as follows: the 2027Q2–2028Q1 digital LGFV default cluster is a local credit event, but the bond portfolio should treat it as a rates-liquidity event. The 10y CGB duration target of 7.5–8.0 years should be reached through a **10y-centered bull-flattener**, not a portfolio steepener. Use CGBs as the convexity anchor, use 7–10y CDB only as capped carry beta, keep Tier-2 capital bonds out of the duration target, and buy local-government bonds only in short/intermediate liquid provinces.

## 1. Market Anchor on 2026-05-14

The latest accessible official ChinaBond curve on 2026-05-14 was 2026-05-07: 1y CGB 1.1814%, 5y 1.4865%, 7y 1.6387%, 10y 1.7631%, and 30y 2.2380%. That implies a 1s10s slope of 58.2bp, 5s10s of 27.7bp, and 10s30s of 47.5bp.[^1] Secondary market quotes on 2026-05-13 showed 10y CGB at 1.7420%, 10y CDB at 1.8280%, and 30y CGB at 2.2340%, putting the 10y CDB-CGB spread near 8.6bp.[^2]

Policy and supply matter. The 2026 Government Work Report set RMB 1.3trn of ultra-long special treasury bonds and RMB 4.4trn of local-government special bonds for the year.[^3] The 2026 ultra-long special treasury program began in April and is scheduled to be completed by mid-October.[^4] On the liquidity side, the PBOC's Q1 2026 report signaled a moderately loose stance, ample liquidity, and roughly RMB 2trn net medium/long-term liquidity injection in Q1.[^5]

This setup argues for **front-loaded duration accumulation but disciplined long-end supply timing**: monetary conditions support the 7–10y belly, while ultra-long CGB supply keeps 30y from being the cleanest way to express convexity.

## 2. Curve Shape: Bull-Flattener as Core, 10s30s Steepener Only as a Hedge

**Base case (60%)**: digital LGFV defaults remain idiosyncratic, AA LGFV spreads widen 60–120bp vs. 10y CGB, and same-province AAA platforms widen 40bp+ before becoming buy candidates. In this scenario, the curve should bull-flatten from 5y/7y into 10y because safe-haven demand and PBOC liquidity support the long belly while the front end is already low.

**Left tail (25%)**: compute export curbs plus property weakness push 8–14 digital LGFV technical defaults. 10y CGB can trade toward Card 4's 1.35%–1.55% band, but CDB and credit-like rates products underperform CGB as liquidity preference rises. This is still a bull-flattener trade, not a steepener.

**Right tail (15%)**: tenant absorption and policy support improve, 10y CGB backs up toward 1.80%–2.10%, and the curve steepens. The portfolio should tolerate this by avoiding an oversized 30y position, preserving T-bill liquidity, and using CDB carry only when spread compensation is adequate.

Implementation call: hold a **5s10s / 7s10s flattening bias**, financed from 3–5y paper and low-convexity credit substitutes. Keep a small **10s30s steepener hedge** only to protect against ultra-long special CGB auction concession and right-tail growth reflation; do not make it the main expression.

## 3. Instrument Structure

Within the 38–40pp rates sleeve proposed by Card 4, the target structure is:

| Instrument | Target | Role | Rule |
|---|---:|---|---|
| CGB | 23–25pp total portfolio, or 60%–65% of rates sleeve | Convexity and crisis liquidity anchor | 70% in 7–10y liquid CGB, 20% in 5–7y liquidity ballast, 10% in 20–30y only after auction concession |
| CDB / policy-bank bonds | 10–12pp total portfolio, or 25%–30% of rates sleeve | Carry and trading liquidity, not tail hedge | Add only when 10y CDB-CGB spread is >=12–15bp; neutral at 8–12bp; switch toward CGB if spread widens beyond 25bp during stress |
| Local-government bonds | 2–3pp total portfolio, or 5%–8% of rates sleeve | Yield pickup with low default probability, but weaker liquidity | Prefer 3–7y bonds from high-fiscal provinces; avoid weak-fiscal AIDC provinces named in Card 3 |
| Tier-2 capital bonds | 0–1pp in rates implementation; up to 2pp only inside credit sleeve | Credit carry, not duration | Keep duration <=2.5y, national banks only; avoid regional-bank and local-LGFV beta |

The key discipline is that the 7.5–8.0y duration target must be **CGB-equivalent duration**, not accounting duration created by lower-liquidity spread products. CDB is acceptable for carry, but at an 8–9bp 10y spread it is not paid enough to be the main left-tail hedge. Tier-2 capital bonds and weak local-government paper are pro-cyclical liquidity assets; using them to reach duration would make the portfolio look long rates precisely when it is actually long credit beta.

## 4. New-Issue and Rebalancing Rhythm

| Window | Action | Trigger |
|---|---|---|
| 2026Q2–Q3 | Build 50%–60% of the added duration in 7–10y CGB; keep CDB capped | Buy on 10y CGB yield backups toward/above 1.75%; do not chase 30y during ultra-long supply |
| 2026Q4 | Reach 70%–80% of target duration; complete exit from weak-fiscal county AIDC credit | Use post-October supply relief after ultra-long special CGB issuance is largely completed |
| 2027Q1 | Reach full 7.5–8.0y duration | Add if 10y CGB >=1.70% or if CDB-CGB spread normalizes to >=12–15bp |
| 2027Q2–Q4 | Hold CGB convexity; reduce CDB beta if liquidity premium widens | Switch CDB to CGB when 10y CDB-CGB spread >25bp unless funding is stable |
| 2028Q1 | Take profit and shorten back toward neutral | If 10y CGB <=1.45% or same-province AAA LGFV spreads normalize after the default cluster |

Do not let new-issue enthusiasm override liquidity. The preferred bid is not for every long bond auction; it is for **auction concessions in on-the-run 7–10y CGB and selected 20–30y CGB**, with duration completed before the 2027Q2 refinancing wall.

## 5. Convexity and Liquidity Tests

- **Base case**: 10y CGB in 1.55%–1.75%, 5s10s flattens 10–18bp, CDB-CGB spread 10–18bp. Rates sleeve contributes carry plus roll-down; dry powder is used later for same-province AAA LGFV at >=40bp spread widening.
- **Left tail**: 10y CGB in 1.35%–1.55%, CDB-CGB spread 20–35bp, AA LGFV spreads +120/+200bp. CGB duration gains offset credit drawdown; CDB is switched into CGB, Tier-2 is not used as liquidity.
- **Right tail**: 10y CGB in 1.80%–2.10%, 10s30s steepens on supply and growth recovery. Loss is contained because the portfolio is not over-concentrated in 30y and has 5–7y liquidity ballast.

The portfolio should keep 5%–7% in T-bills, policy-bank floaters, or cash-equivalent repo-eligible instruments through 2027Q2–2028Q1. That cash is not idle; it is the option value that lets the book buy same-province AAA LGFV after spread overshoot without selling CGB convexity.

## 6. Conclusion and Handoff

I support Card 4's rate-duration extension but tighten the implementation: **reach 7.5–8.0y through a CGB-led 10y bull-flattener, not through 30y concentration, CDB leverage, Tier-2 capital bonds, or weak local-government yield pickup.** CGB should carry 60%–65% of the rates sleeve; CDB should be capped at 25%–30% and added only at >=12–15bp 10y spread; local-government bonds stay at 5%–8% in liquid provinces; Tier-2 capital bonds stay outside the duration engine. This preserves convexity in the left tail and preserves liquidity for the 2027H2 AAA LGFV dislocation trade.

Recommended next analyst: **china-macro**. The next unresolved question is whether the 2027 debt-swap and policy-bank response function absorbs part of the digital LGFV refinancing wall, which would change the timing and size of the CGB-CDB switch.

[^1]: ChinaBond / CCDC, "CGB Yield Curve and Others," latest accessible table on 2026-05-14 showing 2026-05-07 curves. https://yield.chinabond.com.cn/cbweb-pbc-web/pbc/more?locale=en_US
[^2]: Sina Finance / Daily Economic News market wrap, 2026-05-13, reporting 10y CGB 1.7420%, 10y CDB 1.8280%, and 30y CGB 2.2340%. https://finance.sina.com.cn/money/fund/jjgsgd/2026-05-13/doc-inhxtzpe0703713.shtml
[^3]: China.org.cn, "Full text: Report on the Work of the Government (2026)," published 2026-03-19, fiscal bond quotas. https://www.china.org.cn/2026-03/19/content_118384399.shtml
[^4]: The State Council, "China launches 2026 ultra-long special treasury bond issuance," updated 2026-04-24. https://english.www.gov.cn/news/202604/24/content_WS69eb336ac6d00ca5f9a0a9f9.html
[^5]: The State Council / Xinhua, "China's moderately loose monetary policy continues to show effects: central bank," updated 2026-05-12. https://english.www.gov.cn/news/202605/12/content_WS6a027929c6d00ca5f9a0ae1f.html

---
*File: whiteboard/2eecd351-1775-46d8-87af-9c13a6ad9e96/card-05/report.en.md | Work date 2026-05-14*
