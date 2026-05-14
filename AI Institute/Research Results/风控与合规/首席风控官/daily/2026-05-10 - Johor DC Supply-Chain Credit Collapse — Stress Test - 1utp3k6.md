---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "风控与合规"
content_error: ""
---

# Johor DC Supply-Chain Credit Collapse — Stress Test

Kind: **daily**
Analyst: **Chief Risk Officer**

## Links

- Report type: [[daily]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

# Johor DC Supply-Chain Credit Collapse — Stress Test

- Card: 5/8 · Stance: stress-test · Analyst: Chief Risk Officer
- Date: 2026-05-11 (Asia/Singapore — institute work-date)
- Topic: Solvency impact on A-share AI infrastructure names from a default by major Malaysian DC developers
- Upstream: card-01 (TMT, gray-box conversion option) · card-02 (utilities, full-cost water/power) · card-03 (real estate, site revaluation matrix) · card-04 (A-share strategy, narrative-credit divergence)

## 1. The risk officer's core call

card-04 put the key facts on the table: A-share supplier receivables linked to Johor DC have ballooned to **>7x typical company net income**, Inspur (浪潮信息) margin financing balance exceeds **¥34 bn**, and actual Johor utilization is only **18.9%** (TNB Dec-2025 disclosure cited in card-02: 850 MW live load vs. 4.5 GW commissioned).

**Verdict**: in a moderate scenario where a core Malaysian developer (whether a local champion such as YTL Power or the Mah Sing-Bridge DC platform, or the largest single-site foreign-localized operator such as GDS-International / Princeton Digital / Bridge DC) suffers a **rating downgrade or refinancing failure**, the A-share AI infrastructure cluster faces not a 5–10% mark-down but a **15–25% one-shot equity write-down plus a second-order forced-deleveraging shock from margin balances**. This is the quantifiable realization path of the "credit-duration mismatch" trap flagged by card-04. **I support card-04's direction and upgrade it to a named exposure that should be wired into the risk budget.**

## 2. Three impact scenarios

Define the core A-share DC supplier basket as: Inspur (浪潮信息), Kehua Data (科华数据), Envicool (英维克), Runze Tech (润泽科技), Aofei Data (奥飞数据), Jialitu (佳力图). Combined free-float ≈ ¥280 bn; estimated Johor-linked receivables + contract assets ≈ ¥22–26 bn.

| Scenario | Trigger | Recovery rate | Cluster NI impact | Cluster equity impact | Margin-call risk |
|---|---|---|---|---|---|
| S1 baseline (30%) | One tier-2 developer extends payment terms | 75% | -12% | -3% | Low |
| **S2 moderate (45%)** | One tier-1 developer downgraded to B by Moody's/S&P, syndicated refi fails | 50% | -55% | -15% | Medium: Inspur, Kehua hit warning line |
| S3 extreme (25%) | Tier-1 + tier-2 simultaneous default, plus Malaysia DC license review (RP4/WUE tightening from card-02) | 25% | Cluster-wide accounting loss | -25% to -32% | High: cluster-wide forced selling |

**S2 is the base stress scenario** for the investment committee.

## 3. Transmission chain (six steps)

1. **Trigger event**: developer issues payment-deferral notice or unilaterally re-prices payment milestones to A-share suppliers (template: 2024 Bridge DC Indonesia handling).
2. **Accounting recognition**: under CAS 22 / IFRS 9, A-share companies must move the receivable from "no significant credit deterioration" to Stage 2 or Stage 3 within 30–60 days. Expected credit loss (ECL) coefficient jumps from ~2% to 25–60%.
3. **Quarterly disclosure**: Q2/Q3 reports show a sharp expansion in "asset impairment loss." Inspur worked example: Johor exposure ¥7.5 bn × 50% ECL = ¥3.75 bn one-shot impairment, **6–7x its 2025 net income** — flips directly to accounting loss.
4. **Rating and debt**: domestic credit outlook downgraded; outstanding corporate bond yields widen 80–150 bp; supply-chain ABS with cross-default clauses face accelerated redemption.
5. **Margin financing and pledges**: Inspur's ¥34 bn margin balance and Kehua's ~¥8 bn balance, at a 130% maintenance ratio, trigger broad margin calls on a 25–30% price drop. Major-shareholder pledges (industry avg pledge ratio 35–45%) hit close-out alerts.
6. **Cluster resonance**: passive ETFs (STAR 50, AI-themed ETFs) cut weights mechanically, triggering the narrative-credit divergence repricing card-04 described.

## 4. Risk budget and hedges

- **VaR adjustment**: for portfolios holding the six names, scale 1-day 99% VaR by 1.6x to capture the ECL jump; cap total AI-infra exposure at 8% (down from 12%).
- **Tail hedge**: 3-month STAR 50 ETF 90% straddle or bear spread; CSI 1000 futures short for beta hedge.
- **Credit substitution**: on the bond side, avoid Johor-tagged supply-chain ABS and Inspur/Kehua sub-1Y onshore corporate bonds. Retain Runze Tech equity (anchored hyperscaler tenant, no Johor exposure).
- **Early-warning indicators**: track daily (i) Malaysia 5Y CDS, (ii) YTL Power and Mah Sing offshore bond yields, (iii) Inspur/Kehua margin balance daily change >3%, (iv) receivables turnover days monthly change >15 days. Any two triggering simultaneously → activate S2 playbook.

## 5. Relation to upstream cards

- **Supports** card-04's "credit-duration mismatch" framework and provides the quantitative mapping (receivables → ECL → net income → margin financing).
- **Refines** card-02's water/power regulatory risk: translates "developer cost rising" into the chain "developer cash flow deteriorating → receivables uncollectible → A-share supplier impairment."
- **Corrects** an implicit feature of card-01's "conversion option" framing: from the supplier angle, the option value sits with the developer, but **the cash conversion cost is being financed by A-share suppliers via stretched receivables** — and that is where the real tail risk lives.

## 6. Limits and gaps

- Developer refinancing schedules and syndicate terms are not public; receivable details estimated from annual-report footnotes with a ±20% error band.
- Excludes potential policy backstops (e.g., Malaysia DIGITAL Nasional support); if invoked, S2 probability could fall by 10–15 pp.
- Does not quantify USD/MYR/CNY triangular FX impact on actual receivable recovery — recommended hand-off to fx-strategist later.

## 7. Regulatory / compliance flags

- Materiality trigger: under S2, Inspur and Kehua would owe earnings-revision and material-event disclosures per exchange rules; covering analysts must update risk ratings and target-price models pre-event.
- Information firewall: this card uses only public annual reports and regulatory disclosures.

---
*Chief Risk Officer · risk budget & stress testing · 2026-05-11*
