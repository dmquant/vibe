---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Close-of-Day Risk Panel (2026-05-07 [source: shell `date +%Y-%m-%d` 2026-05-07])

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Close-of-Day Risk Panel (2026-05-07 [source: shell `date +%Y-%m-%d` 2026-05-07])

## Signal Summary

**🟡 YELLOW — Structural risk elevated; systemic crisis probability low**

The market looks superficially strong (all three major indices above MA5/MA20/MA60), but three internal fractures have emerged: ① RSI14 in extreme overbought territory (SSE Composite 83.4; STAR 50 84.4) [source: EastMoney push2 historical K-line API, 2026-05-07 calculation]; ② margin balance surged by +CNY 41.5 bn intraday [source: https://finance.sina.com.cn/roll/2026-05-07/doc-inhwzrtk7801202.shtml], a clear leverage-driven rally signature; ③ all-A main-force net outflow of CNY −31.9 bn [source: EastMoney push2 capital-flow API, 2026-05-07 query] diverges from index gains, implying that incremental risk appetite is borne by margin traders rather than broadly by active funds.

---

## I. Systemic Risk Score

| Risk Dimension | Key Reading | Weight | Score (1=low, 5=high) |
|---|---|---|---|
| Technical overbought | SSE Composite RSI14=83.4 [source: EastMoney push2 historical K-line API, 2026-05-07 calc]; STAR 50 RSI14=84.4 [source: same] | High | 4 |
| Leverage concentration | Margin balance CNY 27,567.13 bn [source: https://finance.sina.com.cn/roll/2026-05-07/doc-inhwzrtk7801202.shtml]; +CNY 41.5 bn in a single day [source: same]; margin turnover/A-share turnover ratio 10.82% [source: same] | High | 4 |
| Main-force vs. ETF structural divergence | All-A main-force net outflow CNY −31.9 bn [source: EastMoney push2 capital-flow API, 2026-05-07]; ETF main-force net inflow only CNY +4.0 bn as offset [source: EastMoney push2 ETF capital-flow API, 2026-05-07]; coverage ratio ~12.7% | Medium | 3 |
| Volume at margin | A-share turnover CNY 3.14 tn [source: https://finance.sina.com.cn/roll/2026-05-07/doc-inhxahrf8305269.shtml]; −CNY 82.9 bn vs. prior session [source: same] | Medium | 2 |
| Market breadth | 3,520 advancers [source: same]; 54 limit-down stocks [source: same]; both coexist at elevated levels | Medium | 3 |
| Sector concentration | AI hardware chain crowded; NYSING (新易盛) single-stock turnover CNY 28.9 bn [source: EastMoney push2 A-share ranking API, 2026-05-07 query] | High | 4 |
| Moving-average cushion | All three major indices above MA5/MA20/MA60 [source: EastMoney push2 historical K-line API, 2026-05-07 calc] | Low | 1 |

**Composite Systemic Risk Score: 3.0 / 5.0**
**Signal: 🟡 YELLOW** (core risks are short-term overbought and leverage concentration; systemic collapse probability low but tail-drawdown space has opened)

---

## II. Risk Breakdown

### 2.1 Macro Risk

- **FOMC rate path** [meeting date unknown — confirm in real time]: Fed policy is an exogenous driver of global risk appetite; unexpected hawkishness would widen discount rates for growth-oriented A-share sectors (AI hardware, CPO).
- **US–China trade friction**: Nvidia-concept stocks rose +3.79% today [source: EastMoney push2 market API, 2026-05-07 query], partly reflecting an overseas AI-capex mapping narrative. Any adverse development in consultations [specific consultation schedule unknown] could rapidly unwind the overseas-premium component in optical-communications and CPO names.
- **Northbound flow opacity**: Since 2024-08-19, daily net northbound flow data have ceased to be publicly disclosed [source: https://finance.sina.com.cn/roll/2024-08-26/doc-inckxptp8413796.shtml]. Foreign-capital flows are now an invisible background variable and cannot be quantified in real time.

### 2.2 Liquidity Risk (★ Highest Priority ★)

| Indicator | Today's Reading | Warning Threshold | Status |
|---|---|---|---|
| Margin balance | CNY 27,567.13 bn [source: https://finance.sina.com.cn/roll/2026-05-07/doc-inhwzrtk7801202.shtml] | Daily increase >CNY 30 bn = above-warning | ⚠️ +CNY 41.5 bn today — above-warning |
| Margin turnover/A-share ratio | 10.82% [source: same] | >12% = highly crowded | 🟡 Elevated but not triggered |
| All-A main-force net flow | −CNY 31.9 bn [source: EastMoney push2 capital-flow API, 2026-05-07] | ETF net inflow turning negative = no support | ⚠️ Leverage-borne bid; not sustainable |
| ETF main-force net inflow | +CNY 4.04 bn [source: EastMoney push2 ETF capital-flow API, 2026-05-07] | Turns negative = broad-base support gone | 🟡 Barely positive |
| ETF margin balance | CNY 113.975 bn, +CNY 3.176 bn [source: https://stock.stockstar.com/IG2026050700007530.shtml] | Co-directional with equity margin leverage | ⚠️ Confirms leverage build |
| Days of volume decline | 1 day (−CNY 82.9 bn today) [source: https://finance.sina.com.cn/roll/2026-05-07/doc-inhxahrf8305269.shtml] | Consecutive decline >3 days = trend fatigue | 🟢 Single day only; not a warning |

**Core Liquidity Contradiction**: A +CNY 41.5 bn surge in margin debt is driving the index higher while active main-force funds simultaneously net-sell CNY 31.9 bn and ETFs absorb only CNY 4.0 bn — a coverage ratio of ~12.7%. This "leverage-driven, main-force-distributing, ETF-buffering" structure will unwind significantly faster than ordinary selling if sentiment turns.

### 2.3 Sector Risk

| Sector | Risk Type | Today's Signal | Action |
|---|---|---|---|
| AI Hardware (optical comms / CPO / PCB) | Crowded + RSI overbought | STAR 50 RSI14=84.4 [source: EastMoney push2 K-line API, 2026-05-07 calc]; NYSING turnover CNY 28.9 bn, net inflow CNY 2.556 bn [source: EastMoney push2 A-share ranking API, 2026-05-07] | No chasing; wait for divergence-and-reload |
| New-energy resources (lithium / EV battery) | Main-force distribution | Tianqi Lithium −3.24% / net outflow CNY 2.091 bn [source: EastMoney push2 capital-flow API, 2026-05-07]; Eve Energy −4.94% [source: EastMoney push2 A-share ranking API, 2026-05-07] | Exit or compress to minimum |
| Coal / high-yield cyclicals | Style-rotation retreat | Thermal coal −4.50% [source: EastMoney push2 market API, 2026-05-07]; Coal mining −4.24% [source: same] | Retain only defensive buffer; no offensive allocation |
| NAND/storage (high-price) | High-altitude divergence on volume | Biwin Storage −3.62% / net outflow CNY 0.925 bn [source: EastMoney push2 A-share ranking API, 2026-05-07]; Longsys Electronics net outflow CNY 1.660 bn [source: EastMoney push2 capital-flow API, 2026-05-07] | Reduce exposure; await turnover confirmation |
| Education / event-driven micro-themes | No main-line backing | Education services −7.97% [source: EastMoney push2 market API, 2026-05-07]; Helium concept −4.44% [source: same] | Clear position at today's close |

### 2.4 Single-Name Risk (Key Names)

| Name | Direction | Risk Signal | Recommended Action |
|---|---|---|---|
| NYSING (新易盛) | Overweight / crowded | Close CNY 563.50 [source: EastMoney push2 A-share ranking API, 2026-05-07]; turnover CNY 28.9 bn, vol-ratio 1.46; main-force net inflow CNY 2.556 bn [source: same] | Trim on any gap-up open; maintain core position |
| Tianfu Comm (天孚通信) | Main-line strong but high | Close CNY 328.14 [source: same]; turnover CNY 18.6 bn, vol-ratio 1.68 [source: same] | Hold core; reduce on low-volume stall |
| Tongfu Micro (通富微电) | Vol-ratio 2.32 continuation | Close CNY 59.08 [source: same]; turnover CNY 14.8 bn [source: same] | Hold if tomorrow does not undercut today's up-candle midpoint |
| Tianqi Lithium (天齐锂业) | Reduce / exit | Close CNY 79.06 [source: same]; net outflow CNY 2.091 bn; −3.24% [source: same] | No adds; reassess only on clear stabilization signal |
| Biwin Storage (佰维存储) | Reduce / stop-loss | Close CNY 299.85 [source: same]; net outflow CNY 0.925 bn; −3.62%, vol-ratio 1.43 [source: same] | Stop-loss reference: below today's close CNY 299.85 |
| Eve Energy (亿纬锂能) | Reduce / exit | Close CNY 71.81 [source: same]; net outflow CNY 1.479 bn; −4.94%, vol-ratio 1.74 [source: same] | Systematic weakness in EV battery chain; wait for re-entry signal |
| Longsys (江波龙) | Reduce | Net outflow CNY 1.660 bn [source: EastMoney push2 capital-flow API, 2026-05-07]; high-price storage divergence | Reassess only when main-force flow turns positive |
| XnSemi (香农芯创) | Reduce | Close CNY 189.18 [source: EastMoney push2 A-share ranking API, 2026-05-07]; net outflow CNY 1.147 bn; −2.82% [source: same] | Wait for turnover to complete |

---

## III. Portfolio Directions Requiring De-Risking

### 🔴 High Priority (Execute Immediately)

1. **Overweight AI hardware single-name positions**
   - If AI hardware chain (optical comms / CPO / PCB) aggregate weight exceeds 30% of portfolio, trim to 15–20% on tomorrow's open or any gap-up.
   - Basis: SSE Composite RSI14=83.4 and STAR 50 RSI14=84.4 [source: EastMoney push2 K-line API, 2026-05-07 calc]; historically, RSI>80 regimes carry materially elevated 3–5-day drawdown probability.

2. **New-energy resource-side exposure**
   - Tianqi Lithium + Eve Energy + Tinci Materials combined main-force net outflow ≈ CNY 5.147 bn [source: EastMoney push2 capital-flow API, 2026-05-07; sum: 2.091+1.479+1.577 bn]
   - Distribution intent is unambiguous; compress to below 3% of portfolio.

### 🟠 Medium Priority (Today's Close or Pre-Open Tomorrow)

3. **High-volatility event-driven micro-themes**
   - Education services −7.97% [source: EastMoney push2 market API, 2026-05-07]; Helium concept −4.44% [source: same].
   - Clear any positions at today's close; do not carry overnight for a bounce.

4. **High-altitude storage divergence positions**
   - Biwin / XnSemi / Longsys have broken down on volume with main-force selling.
   - Exit on tomorrow's open; use today's respective closes as stop-loss references.

### 🟡 Low Priority (Monitor Closely)

5. **Coal / high-yield defensive buffer**
   - Not an offensive position, but useful as a shock absorber if the broad market sells off sharply.
   - Maintain no more than 10% defensive allocation; no active unwinding.

---

## IV. Defensive Scenarios for 2026-05-08 [source: shell `date +%Y-%m-%d` 2026-05-07 projection]

### Scenario 1 — Main-Line Turnover, Rally Continues (Base Case; ~55% probability) 🟡→🟢

**Trigger Conditions**
- A-share turnover stays in CNY 2.8–3.2 tn range (baseline: CNY 3.14 tn [source: https://finance.sina.com.cn/roll/2026-05-07/doc-inhxahrf8305269.shtml])
- Advancers stay above 3,000 names
- Core AI-hardware stocks (NYSING, Tianfu Comm) absorb turnover while maintaining positive main-force flow
- Limit-down count stays <60 (baseline: 54 [source: same])

**Risk Execution**
- Retain core AI-hardware holdings (≤25% portfolio weight); wait for divergence dips to add on rotation
- Rotation candidates: Advanced manufacturing, commercial aerospace (Guodian Hi-Tech received a 2-year commercial satellite-IoT trial approval [source: https://www.nbd.com.cn/articles/2026-05-07/4381576.html])
- Broad-based ETFs at 15–20% as a volatility buffer

---

### Scenario 2 — Gap-Up, Volume Fade, Reversal (~30% probability) 🟡→🔴

**Trigger Conditions**
- A-share turnover falls below CNY 2.5 tn
- Strong themes gap up then give back >2%
- Limit-down count expands to 70–80+
- SSE Composite drops back below MA5 at 4,127.71 [source: EastMoney push2 K-line API, 2026-05-07 calc]

**Risk Execution**
- Reduce AI hardware chain total exposure to <15% of portfolio
- Sell high-altitude storage stocks with continued main-force outflows (Biwin, Longsys)
- Rotate into broad-based ETFs (ChinaAMC SSE 300 ETF, E Fund SSE 300 ETF) to replace single-stock beta
- If SSE Composite breaks 4,163.14 [source: EastMoney push2 K-line API, 2026-05-07 query], trigger full defensive mode: raise cash to >25%

---

### Scenario 3 — External Macro Shock (Tail Risk; ~15% probability) 🔴

**Trigger Conditions**
- Unexpected FOMC hawkish signal [meeting date unknown — monitor in real time]
- Major negative US–China trade development
- Pre-earnings warning news ahead of Nvidia Q1 FY2027 call (2026-05-20 [source: https://investor.nvidia.com/events-and-presentations/events-and-presentations/event-details/2026/NVIDIA-1st-Quarter-FY2027-Financial-Results/default.aspx])
- Limit-down count spreads beyond 100 names

**Risk Execution**
- Initiate emergency de-risking: compress theme exposure to <10% of portfolio; halve AI-hardware long positions
- Buy or add SSE 300 ETFs (ChinaAMC net inflow CNY 0.754 bn [source: EastMoney push2 ETF capital-flow API, 2026-05-07]; E Fund net inflow CNY 0.606 bn [source: same]) as defensive anchor
- Set price stops on NYSING (close CNY 563.50 [source: EastMoney push2 A-share ranking API, 2026-05-07]) and Tianfu Comm (close CNY 328.14 [source: same]) — reference today's intraday lows
- Rebuild long positions only after two consecutive sessions of stabilizing breadth

---

## V. Execution Summary

| Direction | Action | Trigger | Position Guide |
|---|---|---|---|
| AI hardware core (NYSING / Tianfu Comm / Tongfu Micro) | Hold; no chasing | Core stocks maintain positive main-force inflow + volume absorption | Cap at 25% portfolio weight |
| AI hardware secondary (laggard gap-fill names) | Wait for dip after divergence | Core stocks stall on lower volume first | Single name ≤3% |
| New-energy resource side (lithium / EV battery) | Clear or compress to minimum | No stabilization signal | 0–3% |
| High-altitude storage (Biwin / Longsys / XnSemi) | Reduce / stop-loss | Main-force outflow continues | Exit |
| Coal / high-yield dividend | Maintain defensive buffer | Useful shock absorber on broad sell-off | ≤10% |
| Broad-based ETFs (CSI 300 / CSI 500) | Maintain or increase | ETF net inflow stays positive | 15–20% |
| HK tech ETF (HTEF by Huatai-PB) | Maintain | Today's net inflow CNY 0.516 bn [source: EastMoney push2 ETF capital-flow API, 2026-05-07] continues | 5–10% |
| Cash / defensive buffer | Increase | Volume fade + gap-up reversal triggers Scenario 2 | Minimum 20% floor |

---

## VI. Pre-Market Checklist for 2026-05-08 [source: shell `date +%Y-%m-%d` 2026-05-07 projection]

1. **Pre-open**: Check US overnight session (Nasdaq Composite / Philadelphia Semiconductor Index SOX) for AI-chain spillover risks.
2. **09:25 call auction**: Verify whether ChinaAMC/E Fund SSE 300 ETFs show large net subscriptions or net redemptions.
3. **10:00**: Compare first 30-minute annualised turnover vs. CNY 3.14 tn baseline [source: https://finance.sina.com.cn/roll/2026-05-07/doc-inhxahrf8305269.shtml]; if annualised run-rate drops below CNY 2.5 tn, execute Scenario 2 protocol.
4. **Intraday**: Monitor NYSING (close CNY 563.50 [source: EastMoney push2 A-share ranking API, 2026-05-07]) for gap-up fade, and track whether limit-down count tracks toward 70.
5. **Post-close (15:00)**: Check whether daily margin balance increment remains above the CNY 30 bn warning threshold (reference: today's +CNY 41.5 bn [source: https://finance.sina.com.cn/roll/2026-05-07/doc-inhwzrtk7801202.shtml]).
6. **Medium-term calendar**: Flag Nvidia Q1 FY2027 earnings call (2026-05-20 [source: https://investor.nvidia.com/events-and-presentations/events-and-presentations/event-details/2026/NVIDIA-1st-Quarter-FY2027-Financial-Results/default.aspx]) and Google I/O (2026-05-19–20 [source: https://io.google/2026/]) — both are direct valuation anchors for the AI hardware chain.

---

## Source Log

- EastMoney push2 market API, capital-flow API, ETF capital-flow API, A-share ranking API, historical K-line API — query date 2026-05-07 [source: shell `date +%Y-%m-%d` 2026-05-07]
- Sina Finance close review and breadth data: https://finance.sina.com.cn/roll/2026-05-07/doc-inhxahrf8305269.shtml
- Sina Finance margin data: https://finance.sina.com.cn/roll/2026-05-07/doc-inhwzrtk7801202.shtml
- Stockstar ETF margin data: https://stock.stockstar.com/IG2026050700007530.shtml
- Northbound disclosure mechanism change: https://finance.sina.com.cn/roll/2024-08-26/doc-inckxptp8413796.shtml
- NBD commercial aerospace report: https://www.nbd.com.cn/articles/2026-05-07/4381576.html
- Nvidia investor relations calendar: https://investor.nvidia.com/events-and-presentations/events-and-presentations/event-details/2026/NVIDIA-1st-Quarter-FY2027-Financial-Results/default.aspx
- Google I/O: https://io.google/2026/
