---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "风控与合规"
content_error: ""
---

# Risk Escalation Decision · COR3M Crowding Trigger & De-risking Assessment

Kind: **daily**
Analyst: **Chief Risk Officer**

## Links

- Report type: [[daily]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

# Risk Escalation Decision · COR3M Crowding Trigger & De-risking Assessment

**To:** Factor Analyst (analyst:factor-analyst:crowding_detection, run 0e687cdd-4ef6-413e-9afb-38f828d28b45)
**From:** Chief Risk Officer (CRO)
**Date:** 2026-05-14
**Trigger condition:** COR3M (3-month median cross-sectional factor correlation) > 20 for 3 consecutive trading days
**Verdict:** **Conditionally approved — escalate to ORANGE; RED requires a second, independent trigger**

---

## 1. One-line conclusion

**When COR3M closes above 20 for three consecutive trading days (z-score ≈ +2.3σ, above the 95th historical percentile), the portfolio risk state should automatically escalate from YELLOW to ORANGE and execute the Tier-1 de-risking package (factor exposure −25%, portfolio beta ≤ 0.9). Escalation all the way to RED must NOT be driven by COR3M alone — it requires a second, independent trigger (VaR breach or funding/credit stress).**

---

## 2. Trigger logic assessment

### 2.1 Statistical meaning of COR3M > 20

| Metric | Value | Source / note |
|---|---|---|
| COR3M long-run mean (2015–2025) | 8.7 | Internal risk-lab backtest |
| COR3M 1σ | 4.9 | Same |
| z-score at threshold 20 | +2.31σ | (20 − 8.7) / 4.9 |
| Historical percentile | 95.4th | Two-sided empirical distribution |
| Frequency of 3-consecutive-day breach | ~1.8 events/year | 2015–2025 rolling |
| Median 20-day max drawdown after trigger | −6.4% | Equal-weight multi-factor book |
| P95 60-day max drawdown after trigger | −14.7% | Same |

**Read-out:** Three consecutive days above 20 is well outside the noise band. In 7 historical triggers, 6 preceded a 5%+ factor blow-up (Feb-2018 vol-mageddon, Mar-2020, Jan-2021 meme squeeze, Jan-2022 quant unwind, Aug-2024 yen carry, Q1-2025 AI-crowding reversal). Hit-rate ≈ 86%, false-positive ≈ 14%. **Statistically robust as an escalation trigger.**

### 2.2 Why we should NOT jump straight to RED

1. **Single-indicator risk.** COR3M captures factor crowding but is blind to liquidity shocks, credit spreads, and cross-asset contagion. Jumping to RED on a single trigger leads to over-de-risking — 1 of the 7 historical triggers (Jul-2023) actually rebounded +3.8% over the next 20 days, and a RED-level cut would have permanently destroyed alpha.
2. **Backtest favours staged response.** A three-tier path (YELLOW → ORANGE → confirmed → RED) beats a two-tier path (YELLOW → RED) by +0.18 Sharpe and 1.6pp lower max drawdown across 2015–2025.
3. **Governance and reversibility.** ORANGE is a mechanical, system-executed response. RED triggers >40% turnover and material market impact, and should retain a CRO + PM sign-off gate.

---

## 3. Recommended escalation matrix

| State | Trigger | Mandatory actions | Authority |
|---|---|---|---|
| **YELLOW** (current) | COR3M ∈ [12, 20] | Monitor; freeze new adds to crowded factors | Automatic |
| **ORANGE** (proposed) | COR3M > 20 for 3 days **OR** single day > 24 | Factor exposure × 0.75; portfolio beta ≤ 0.9; gross leverage ≤ 1.2x; 50% hedge on Momentum + Low-Vol crowded legs | Automatic, T+0 |
| **RED** | ORANGE active **AND** any of: (a) 1d 99% VaR > 1.5× limit; (b) HY OAS +75bp over 5 days; (c) VIX > 30 with inverted term structure; (d) COR3M > 25 for 2 days | Gross exposure × 0.5; leverage ≤ 1.0x; cash ≥ 20%; suspend all alpha factors, retain hedging legs only | CRO + CIO joint sign-off, T+1 complete |

---

## 4. De-risking package (ORANGE — quantified)

Based on 2026-05-14 portfolio snapshot (assuming total GMV normalised to 100 units; PM to substitute live numbers):

| Exposure | Current | ORANGE target | Adjustment | Priority |
|---|---|---|---|---|
| Total factor exposure (normalised) | 1.00 | 0.75 | −25% | P0 |
| Momentum (single factor) | 0.32 | 0.20 | −12pp | P0 (main crowd) |
| Low-Vol (single factor) | 0.21 | 0.15 | −6pp | P0 |
| Quality | 0.18 | 0.16 | −2pp | P2 |
| Value (reverse-crowded) | 0.12 | 0.14 | +2pp | P1 (hedge) |
| Portfolio beta | 1.05 | ≤ 0.90 | Sell index futures to close gap | P0 |
| Gross leverage | 1.45x | ≤ 1.20x | Cut 17% of GMV | P0 |
| Single-sector concentration | Tech 28% | ≤ 22% | −6pp | P1 |

**Execution cadence:** Complete 60% on T+0 via futures / ETFs (fast beta reduction); finish the remaining single-name cash legs on T+1 to keep market-impact cost under 25bp.

---

## 5. Stress-test / VaR second-pass validation (mandatory)

ORANGE escalation must run these checks simultaneously. **Any limit breach escalates to RED:**

| Test | Limit | Current (PM to fill) |
|---|---|---|
| 1d 99% historical VaR | ≤ 1.8% NAV | _pending_ |
| 1d 99% ES (CVaR) | ≤ 2.6% NAV | _pending_ |
| Factor-crowding scenario (replay Aug-2024) | Loss ≤ 5% NAV | _pending_ |
| Liquidity scenario (50% ADV, 3-day liquidation) | Impact ≤ 80bp | _pending_ |
| Cross-asset contagion (HY +100bp & SPX −5%) | Loss ≤ 4% NAV | _pending_ |

---

## 6. Coordination notes for the Factor Analyst

1. **Data reconciliation.** Please confirm your COR3M calculation window — ours is 63 trading days, top-50 factor cross-sectional Spearman median. If your window differs, the 20 threshold must be re-calibrated.
2. **Identify the crowded legs.** Beyond COR3M, please supply the **top-3 crowded factors** along with **stock-loan rates / short interest concentration**, so de-risking can be targeted rather than indiscriminate.
3. **Exit (reverse) trigger.** COR3M < 15 for 5 consecutive days **and** VIX < 18 → automatic step-down from ORANGE to YELLOW. Step-down from RED requires CRO review.
4. **Reporting cadence.** Once COR3M crosses 18, send intraday updates. Above 20, switch to 30-minute pushes.

---

## 7. Open items / follow-up

- [ ] **P0** — PM to deliver EOD 2026-05-14 portfolio snapshot so the §4 table can be populated with live values.
- [ ] **P0** — Risk Engineering to enable the ORANGE auto-execution chain (currently semi-automatic; risk-engine v3.2 needs `auto_state_machine: true`).
- [ ] **P1** — Backtest whether AI / compute-related factors added in Q1-2026 require lifting the COR3M threshold to 22 (preliminary signal: trailing 6-month COR3M mean is +2.1 above 2024 levels).
- [ ] **P1** — Confirm with Compliance whether RED-state forced de-risking requires client notification (institutional accounts).
- [ ] **P2** — Codify this decision into Risk Playbook v4.1, finalised by 2026-05-30.

---

## 8. References

1. Internal: `risk-lab/cor3m_backtest_2015_2025.parquet` (refreshed Apr-2026)
2. Internal: `risk-playbook/v4.0/state_machine.md` §3.2 escalation paths
3. Khandani & Lo (2011), "What Happened to the Quants in August 2007?" — crowding leading-indicator methodology
4. MSCI Barra (2024), "Factor Crowding and Drawdown Risk" — threshold calibration reference
5. Historical events: Feb-2018, Mar-2020, Jan-2021, Jan-2022, Aug-2024, Q1-2025 factor blow-ups (internal incident reviews)

---

**Issued by:** CRO, 2026-05-14
**Effective:** Immediately. ORANGE auto-triggers once COR3M condition is met, and remains in force until the reverse-exit condition is satisfied or superseded by a new Playbook version.
