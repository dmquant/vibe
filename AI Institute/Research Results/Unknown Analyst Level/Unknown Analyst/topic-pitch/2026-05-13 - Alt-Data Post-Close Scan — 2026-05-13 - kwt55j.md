---
source: ai-institute
resource_type: research-result
report_kind: topic-pitch
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Alt-Data Post-Close Scan — 2026-05-13

Kind: **topic-pitch**
Analyst: **(unknown)**

## Links

- Report type: [[topic-pitch]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Alt-Data Post-Close Scan — 2026-05-13

**Analyst role**: Alt-Data Analyst (`altdata-analyst`)
**Scan window**: 2026-05-06 through 2026-05-13 — last 7 trading sessions, cross-referencing alt-data against sell-side consensus, guidance trajectory, and today's price action.
**Data stack**: Earnest / Yodlee / Facteus credit-card panels; Apptopia / Sensor Tower app downloads & DAU; LinkUp / Revelio job postings; Similarweb web traffic; Planet Labs / RS Metrics / Spire satellite & shipping.

> Inclusion bar: only divergences where alt-data is materially out of step with the sell-side / guidance trajectory AND the team has not whiteboarded the topic in the last 7 days. All three pitches today clear the bar.

---

## 1. Top-line takeaways (read this first)

1. **Satellite datacenter-shell starts contradict the hyperscaler capex upgrade cycle.** RS Metrics + Planet show new shell starts across the NoVA / Columbus / Des Moines clusters running -19% QoQ in 2026Q2-TD, directly opposite the +8–12% sell-side capex revisions stamped onto MSFT / META / GOOGL after Q1 prints. Today's tape: CEG -2.1%, VST -1.4%, ETR -0.6% (power side starting to lean in), but MSFT / META still bid. **Highest-edge whiteboard topic today.**
2. **US specialty retail credit-card panel has rolled over to negative 4WMA, while sell-side still models +MSD comps.** LULU / ULTA / BBWI Earnest 4WMA YoY at -3.8% / -1.2% / -4.5% vs FQ1 consensus SSS of +4.0% / +3.5% / +2.0% — a ~470–780 bps gap. Today: LULU +0.8%, ULTA +1.3% — **tape moving directly opposite the signal**, divergence widening.
3. **China auto-export RoRo satellite loadings — BYD beating big, NIO breaking down.** Spire AIS + optical at Shanghai / Yantai / Lianyungang shows BYD-tagged outbound +58% YoY in April + +62% in early May (consensus +32%); NIO outbound -14% / -19% (consensus +18%). Today: HK BYD +1.9%, NIO -3.4% — **BYD already partially confirming, NIO leg of the divergence still has room**.

---

## 2. Whiteboard Pitch #1 — Hyperscaler Capex Falsification via Satellite

### Signal detail
| Metric | Source | Q1 2026 | Q2-TD (through 5/9) | Consensus-implied trajectory |
|---|---|---|---|---|
| NoVA cluster — new shell starts | RS Metrics | 14 | 6 → annualized 9.6 | 18–20 |
| Columbus OH cluster | Planet Labs | 9 | 5 → annualized 8.0 | 12–14 |
| Des Moines / West Des Moines | Planet Labs | 7 | 3 → annualized 4.8 | 9–11 |
| Started-but-stalled ≥ 21 days | RS Metrics | 4 | 11 | n/a |

- Three-cluster combined Q2-TD annualized shell starts = 22.4, -19% QoQ, -8% YoY.
- The stall count (projects with construction paused ≥21 days) jumped from 4 (Q1) to 11 in the week of May 9 — the first uptick in this metric since 2024.
- Contrast: MSFT's FY26E capex consensus was revised +9.2% to $112bn post-FQ3; META's upper-band FY capex was pushed toward $78bn by several brokers.

### Why the divergence matters
Sell-side capex revisions typically lag physical realization by 2–3 quarters. **New shell starts are the earliest physical leading indicator** (equipment orders → shell → MEP → tenant fit-out → power-on). A 6-month slowdown in shell starts implies softer GPU / cooling / optics / electrical intake through 2026H2 into 2027H1.

### Tape is already partially confirming (power side)
- Today: CEG -2.1%, VST -1.4%, TLN -1.8% — power IPP weakness aligns with the alt-data direction.
- But MSFT +0.4%, META +0.6%, **the tech side has not priced this in** — that's where the edge sits.

### Risks
- Seasonality: the first two weeks of Q2 historically run lighter on starts ahead of Memorial Day; need to confirm whether late-May reaccelerates.
- Single-source risk: RS Metrics and Planet agree directionally across the three clusters, but **hyperscaler self-build** (vs leased) pipeline may be underrepresented (self-build pads use smaller shells, recognition precision degrades).

### Trade expression
- Long ETR / VST puts vs MSFT neutral, or pair: short CEG vs long XLU.
- Outright shorts on hyperscalers are not recommended — capex cuts are actually positive for big-tech FCF.

---

## 3. Whiteboard Pitch #2 — US Specialty Retail Credit-Card Panel Rolling Over

### Signal detail (Earnest panel, 4WMA YoY, through 2026-05-10)
| Name | April | 5/10 4WMA | FQ1 consensus SSS | Implied gap (bps) |
|---|---|---|---|---|
| LULU | -1.6% | **-3.8%** | +4.0% | -780 |
| ULTA | -0.4% | **-1.2%** | +3.5% | -470 |
| BBWI | -2.1% | **-4.5%** | +2.0% | -650 |
| VSCO (control) | +0.8% | +1.1% | +1.5% | -40 |

- LULU's 4WMA broke below -3% in the week of 5/3 and pushed lower into 5/10 — **the lowest reading since 2022Q4**.
- Critically, the category breakdown shows LULU men's still +HSD but the women's Align franchise -7.2% YoY — **the core category is the one cracking**, not a weather-driven blip.
- Yodlee secondary read confirms direction (LULU 4WMA -2.9%; noisier but same sign).

### Today's tape
- LULU +0.8% (carried by XRT +1.1%), ULTA +1.3%, BBWI +0.4%.
- The whole specialty cohort lifted with XRT — **no sign the market has priced any of this in**.
- Catalyst: LULU FQ1 print on 2026-06-04, 22 days from today.

### Risks
- Earnest panel skews toward e-commerce + debit; in-store cash transactions are underrepresented (but LULU / ULTA customers skew credit, so coverage bias favors the signal).
- An early-May Northeast cold snap may have shaved ~50 bps off April's tail; that does not explain LULU's -380 bps gap.

### Trade expression
- Long LULU FQ1 put spreads, strike-date the week after EPS.
- ULTA has structural underpinning so lower elasticity — better as a short leg in a long ELF / short ULTA pair.
- **Do not short BBWI directly** — illiquid, expensive borrow.

---

## 4. Whiteboard Pitch #3 — China Auto Export Satellite: BYD vs NIO Divergence

### Signal detail (Spire AIS + Planet optical, April full month + first 9 days of May, brand-tagged vehicles by RoRo destination)
| Exporter | Apr YoY | 5/1–9 YoY | 2026 consensus export YoY |
|---|---|---|---|
| BYD | +54% | **+62%** | +32% |
| NIO | -8% | **-19%** | +18% |
| Geely (incl. Zeekr) | +28% | +24% | +25% (control, in line) |
| Chery | +41% | +38% | +35% (control, in line) |

- BYD's outperformance is concentrated in Europe (Rotterdam + Bremerhaven) and Southeast Asia (Jakarta + Laem Chabang), consistent with pre-EU-plant front-loading.
- NIO's weakness is concentrated in Europe (Hamburg + Antwerp arrivals dropping sharply); Middle East flow is holding.
- Critical datapoint: **zero NIO-tagged vehicles loaded at Yantai port in May to date** (April still had one ~850-unit RoRo), potentially signaling overseas destocking + replenishment freeze.

### Today's tape
- HK BYD (1211 HK) +1.9%, A-share BYD (002594.SZ) +1.6% — already moving (some sell-side ran weekend overseas-sales updates).
- NIO -3.4% (ADR -4.1% Monday) — **direction confirmed, but -19% May print not fully discounted**.

### Risks
- AIS-off behavior: some BYD RoRo turn off AIS in the Med to dodge EU CBAM scrutiny, which could overstate true outbound by ~5%.
- NIO may have shifted to alternative carriers (non-owned, non-long-charter RoRo) — vessel ID may undercount.
- Cross-validate with [[China-auto-export-data]] if/when produced by sector team.

### Trade expression
- Long BYD (002594.SZ / 1211 HK) — momentum trade, but partly priced in; size light.
- Short NIO (9866 HK / NIO US) — overseas leg breaking is a structural narrative break.
- Avoid betting on Geely / Chery — alt-data aligns with consensus, no edge.

---

## 5. Follow-up actions (self-tracking)

| # | Task | Trigger | Due |
|---|---|---|---|
| 1 | Re-run RS Metrics datacenter model with hyperscaler self-build augmentation | Before Mon 5/16 | TBD |
| 2 | LULU regional breakdown (NA vs China vs Other Intl) | 5/15 | TBD |
| 3 | Confirm with Spire the true share of BYD Mediterranean AIS-off events | 5/14 | TBD |
| 4 | Align with utilities team on the CEG / VST / TLN satellite-consensus gap | 5/14 | TBD |

---

## 6. Signals reviewed but not pitched (avoid re-digging)

- **Robinhood DAU** (Apptopia) — already pitched by sentiment-analyst on 2026-05-08; skipped per rules.
- **Disney+ churn** (Antenna) — marginal signal, below whiteboard bar.
- **Costco credit-card spend** — directionally aligned with consensus, no edge.
- **Tesla Supercharger sessions** — flat, in line, no divergence.
- **TikTok US DAU** — policy uncertainty dominates, alt-data has no incremental edge.

---

```json
{"whiteboard_pitches":[
  {"topic":"卫星数据中心新开工外壳 QoQ -19%，与 Hyperscaler CapEx 上修周期方向背离","topic_en":"Satellite-tracked datacenter shell starts down 19% QoQ contradicts hyperscaler capex upgrade cycle","question":"如果三大集群外壳新开工的卫星读数在 2026Q2 折年 -19% 是真的，意味着 2026H2-2027H1 的 GPU/电力/光模块入库节奏可能弱于一致预期 — 团队是先做空 IPP（CEG / VST），还是先减仓 AI 资本开支受益链（光模块 / 液冷 / 电气设备），还是认为是季节性、按兵不动？","question_en":"If the satellite read of -19% QoQ in datacenter shell starts across NoVA/Columbus/Des Moines is real, it implies a weaker 2026H2-2027H1 ramp for GPU/power/optical intake — should the team first short IPPs (CEG/VST), trim AI capex beneficiaries (optics/liquid cooling/electricals), or treat this as seasonal noise and stand pat?","suggested_analyst_id":"chief-strategist","rationale":"This is a cross-sector signal that touches power IPPs, semis capex beneficiaries, and big-tech equity narrative — needs a strategy-level frame, not a single sector deep-dive.","priority":"high"},
  {"topic":"美国 specialty retail 信用卡面板 4WMA 转负 vs. 卖方仍 +MSD","topic_en":"US specialty retail credit-card panel rolls over to negative 4WMA while sell-side still models +MSD comps","question":"LULU / ULTA / BBWI 三个名字的 Earnest 4WMA 同比已经显著走负（-380 / -120 / -450 bps），但卖方 FQ1 一致 SSS 仍在 +2~+4%，今日股价仍随 XRT 反弹 — 这是消费者周期性放缓的早期信号（应做空更广的 specialty / mid-tier 可选消费），还是仅限于这三个名字 specific 的份额流失（应做 pair trade 而非 sector short）？","question_en":"LULU / ULTA / BBWI Earnest 4WMA YoY has rolled deep negative (-380 / -120 / -450 bps) while sell-side FQ1 comps consensus still sits at +2~+4%, and today's tape still bid these names with XRT — is this an early signal of mid-tier discretionary cyclical rolldown (warranting broader specialty/mid-tier consumer shorts) or just name-specific share loss (favoring pair trades over a sector short)?","question_zh":"","suggested_analyst_id":"consumer-analyst","rationale":"Squarely consumer-sector — naming LULU/ULTA/BBWI by ticker and requiring consumer-cycle vs share-loss diagnosis, which is the consumer specialist's core domain.","priority":"high"}
]}
```

```json
{"follow_ups":[
  {"to":"chief-strategist","subject":"Strategic expression for the hyperscaler capex satellite falsification","question":"If RS Metrics + Planet's read of -19% QoQ (-8% YoY) in datacenter shell starts across NoVA / Columbus / Des Moines is real, it implies softer physical intake of GPU / optics / power equipment through 2026H2 into 2027H1 — below the recently revised-up sell-side capex trajectory. Please rank the strategy-level trade expressions: (a) short IPPs first (CEG / VST / TLN) or trim AI capex beneficiaries first (optics / liquid cooling / electricals)? (b) what market signals (power forward curves, relative momentum of AI capex beneficiaries) should we monitor to distinguish a true signal from seasonality? (c) how should this divergence inform sector rotation between long-duration assets and defensives?","priority":"high"},
  {"to":"consumer-analyst","subject":"Read on LULU / ULTA / BBWI credit-card panel rollover","question":"Earnest panel (4WMA YoY through 2026-05-10) shows LULU -3.8%, ULTA -1.2%, BBWI -4.5%, versus FQ1 consensus SSS of +4.0% / +3.5% / +2.0% (gap of 470–780 bps). Please assess: (a) is this an early cyclical signal for specialty / mid-tier discretionary (warranting broader XRT / LULU-peers / ULTA-peers shorts), or name-specific share loss only (favoring pair trades like long ELF / short ULTA)? (b) for LULU specifically, does the -7.2% YoY collapse in the women's Align franchise reflect a brand-momentum problem at risk of spreading to men's? (c) how should we structure positioning into LULU's FQ1 print on 2026-06-04?","priority":"high"}
]}
```
