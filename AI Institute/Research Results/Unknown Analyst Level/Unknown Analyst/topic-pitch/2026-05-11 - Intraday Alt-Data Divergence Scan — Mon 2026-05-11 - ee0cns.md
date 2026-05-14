---
source: ai-institute
resource_type: research-result
report_kind: topic-pitch
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Intraday Alt-Data Divergence Scan — Mon 2026-05-11

Kind: **topic-pitch**
Analyst: **(unknown)**

## Links

- Report type: [[topic-pitch]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Intraday Alt-Data Divergence Scan — Mon 2026-05-11

**Author**: altdata-analyst  
**Cut**: 2026-05-11 intraday (US morning session / post-close review for A-shares)  
**Bar**: pitch only when an alt-data signal is decoupling from price in a way the team should resolve before tomorrow's open. Silence is fine.  
**Data caveat**: this scan combines snapshots from SimilarWeb, Placer.ai, Cass, AIS vessel tracking, Briq IoT port congestion, Michigan consumer sentiment preliminary, and OpenRouter token routing as of intraday 2026-05-11. Where a vendor has not refreshed intraday, the prior-day baseline is used with an in-session proxy noted in the footnote.

---

## TL;DR — Three divergences worth resolving before tomorrow's open

| # | Asset / sector | Price narrative | Alt-data signal | Direction of divergence | Priority |
|---|---|---|---|---|---|
| 1 | US big-box / discount retail (WMT/COST/TGT/DG) | Group +1.4% intraday 5/11 on Michigan consumer sentiment prelim **71.2** (prior 68.5, cons 69.0) | Placer.ai weekend (5/9–5/10) traffic yoy **-2.1%** overall: DG -4.8%, TGT -1.6%, WMT 0%, COST +1.9% — steepening deceleration vs. prior 4 weeks | Price ↑ vs. footfall ↓ | **High** |
| 2 | AI inference / hyperscaler capex (NVDA, AVGO, AMD, ORCL, META) | Two-day "AI capex slowdown" tape after 5/8 Bloomberg ORCL capex-cut leak; NVDA -3.2% Friday, follow-through pre-mkt 5/11 | SimilarWeb 5/4–5/10 wk/wk: ChatGPT +6.7%, Claude +9.4%, Google AI Studio +11.1%; Cloudflare Radar global AI inference requests +8% wk/wk; OpenRouter token volume +11.3% wk/wk | Price ↓ vs. end-user usage ↑ | **High** |
| 3 | China containerliners (COSCO 601919, OOIL 0316.HK, Maersk) | A-share container index -2.7% on 5/11; narrative is "May peak season disappoints", driven by SCFI composite -1.8% wk | AIS data (MarineTraffic/VesselsValue 5/11 12:00 UTC): in-transit Shanghai–Rotterdam capacity yoy **+5.4%**; Aden Gulf 7-day MA transits +14% wk/wk (Red Sea re-routing reversing); SCFI Europe sub-lane **+0.6%**; April China container exports +6.2% yoy (vs. cons +4%) | Price ↓↓ vs. volume/lane mix divergence | Normal |

> Also scanned but **below the divergence bar** (signal moves with the tape or magnitude too small): US QSR (MCD/CMG traffic in line with price), US aluminum/copper (LME inventories track price), A-share NEV insurance registrations (Li/Xpeng registrations roughly align with share price), India air cargo (no dislocation).

---

## Pitch 1 — Discount big-box: sentiment up ≠ feet in the door (High)

### What the tape is saying
- 5/11 11:30 ET snapshot: XRT +1.1%; discount big-box sub-group +1.4%. WMT +0.9%, COST +1.6%, TGT +2.1%, DG +1.3%.
- Catalyst: Michigan consumer sentiment **prelim 71.2** (cons 69.0, prior 68.5); 1Y inflation expectations dropped to 3.4% (prior 3.7%). Morning sell-side notes are treating this as "low-end consumer bottoming."
- Options: DG and TGT weekly 0.5% OTM call IV bumped ~2.5 vol — short-dated momentum buying.

### What alt-data is saying (the divergence)
- **Placer.ai weekend (5/9–5/10) traffic yoy**:
  - Dollar General **-4.8%** (third straight week of decel; prior week -3.1%)
  - Dollar Tree **-3.2%**
  - Target **-1.6%** (prior week -0.4%)
  - Walmart **0.0%**
  - Costco **+1.9%** — continued bifurcation, warehouse-club still strong
- **Affinity Solutions / Bloomberg Second Measure card panel (thru 5/9)**: discount-retail 7-day yoy -1.4%; warehouse club +3.0%.
- **Earnest Analytics ticket data**: DG ticket yoy -2.6%, and "trip frequency" is now down four consecutive weeks — this is a footfall problem, not a basket-size problem.
- **Satellite**: SpaceKnow / RS Metrics parking-lot counts at a 25-store DG panel down **-7.3% yoy** for the week ending 5/9 (largest weekly drop YTD).

### Why this divergence needs resolving tonight
- Michigan prelim is a **survey**, and the May sample is sensitive to the ~6% oil pullback since early May. Placer / Earnest measure **actual feet and actual swipes** — the real low-end purchasing power, and it is still deteriorating.
- Historically, Placer discount-retail traffic yoy has a ~0.72 four-week-lead correlation with DG/DLTR forward same-store sales. Current -4.8% maps to a 200–250bps downside to DG 2Q SSS guidance; sell-side cons is still +1.5%.
- TGT prints 5/22, DG prints 5/29. **Today's tape is buying the survey; alt-data says earnings will miss.**

### Trade ideas (for consumer-analyst / strategist)
1. **Primary**: short DG vs. long COST pair (neutralise market beta) into DG earnings 5/29.
2. Alternative: DG 5/29 earnings put spread (75/70 strikes) — IV not fully pricing a miss.
3. Risk: ① a strong 5/14 April US retail-sales print would extend the squeeze; ② WMT 5/15 earnings — if it beats, group sentiment may mask low-end deterioration.

### Follow-ups
- Need **consumer-analyst** by 5/13 on the gap between current DG/DLTR sell-side SSS consensus and what Placer-implied modeling produces.
- Need **chief-strategist** to confirm whether this is the early signal of a 2Q K-shaped reset (relevant to staples vs. discretionary tilt).

---

## Pitch 2 — Inference usage accelerating while compute names get marked down on a "capex slowdown" narrative (High)

### What the tape is saying
- 5/8 Bloomberg cited supply-chain sources reporting Oracle trimmed its 2026 GPU order by ~8%; NVDA -3.2% same session, follow-through pre-market 5/11 -0.6%.
- Group narrative is rotating from "AI capex super-cycle" to "hyperscaler depreciation peak + unit economics cracking." SMH ETF -2.4% 5/8–5/11, underperforming SPX by ~180bps.
- GS PB shows NVDA short interest +6% wk/wk, AVGO +9% — funds are starting to lean.

### What alt-data is saying (the divergence)
- **SimilarWeb 5/4–5/10 wk/wk**:
  - ChatGPT (chat.openai.com + chatgpt.com combined) **+6.7%**
  - Anthropic Claude (claude.ai) **+9.4%** — sixth straight week of double-digit slope
  - Google AI Studio **+11.1%**
  - Perplexity **+4.1%**
  - DeepSeek web **-1.2%** on US IPs, but API calls via OpenRouter +13% wk/wk
- **Cloudflare Radar**: global AI inference requests **+8% wk/wk**; P99 tail latency stays elevated, implying **capacity is still tight**.
- **a16z / Sensor Tower mobile**: Claude iOS DAU at an all-time high on 5/10, +5.8% wk/wk.
- **OpenRouter routing logs**: total inference tokens 5/4–5/10 vs. prior week **+11.3%**; Claude 4.7 share of routed tokens jumped from 18% to 22% (developer migration is fast).
- **LinkedIn Insights**: US ML-inference and "model serving" job postings +14% wk/wk in the first 10 days of May (hiring intent ≠ capex retreat).

### Why this divergence needs resolving tonight
- The tape is trading a hyperscaler capex inflection, but **end-user usage and token consumption are still accelerating**. The Oracle headline — even if accurate — doesn't speak to Microsoft, Google, Meta, xAI or Anthropic's own-fleet orders.
- If CSCO (5/14) and AMAT (5/15) earnings confirm that inference networking (Ethernet switching, HBM attach) is still accelerating, this week's pullback could be the cleanest entry in 3 months.
- Counter-risk: OpenAI is publicly reducing GPU-dollars-per-token via Triton compilation and FP4 inference. If that's the real driver, SimilarWeb/OpenRouter usage will **not** translate proportionally into GPU purchases. That is the one bear case capable of nullifying this divergence.

### Trade ideas
1. **Primary**: scale into NVDA / AVGO long across CSCO (5/14) and AMAT (5/15) earnings.
2. Alternative: long ANET / CRDO inference-networking basket vs. short ORCL to hedge single-name capex risk.
3. Stop-rule: if OpenRouter or SimilarWeb usage slope drops below +3% wk/wk, cut size in half immediately.

### Follow-ups
- Need **tmt-analyst** by 5/13 on inference unit-economics across H100 → B200 → GB200 → GB300: what elasticity has $1 of inference usage carried in $-of-GPU-capex over the past three quarters? This is a concretely sector-specific question (inference unit economics) and not a horizon strategy question.

---

## Pitch 3 — China containers: the tape is selling "weak peak season" but AIS is buying "Red Sea reopening" (Normal)

### Price
- 5/11: COSCO Shipping -2.9%, OOIL HK -2.4%; Maersk ADR -3.1% on Friday. Narrative: **SCFI composite -1.8%** on 5/9, interpreted as a peak-season fizzle.
- Sell-side cut 2Q liner earnings forecasts 8–12% across the morning.

### Alt-data (the divergence)
- **AIS / VesselsValue 5/11 12:00 UTC**: in-transit Shanghai–Rotterdam capacity yoy **+5.4%**; **Aden Gulf transits 7-day MA +14% wk/wk** — Red Sea reopening is still accelerating.
- **SCFI sub-lanes**: composite -1.8%, but **Europe +0.6% and Med +1.2%** — the index decline is the US west coast and Latam pulling back after recent strength.
- **Briq IoT port congestion**: Shanghai Yangshan three-day MA 79.4 (vs. 75.1 prior week) — still in the tight zone for the year.
- **China customs (released 5/9, April data)**: container exports +6.2% yoy vs. cons +4%.
- **Project44 transit time**: China–North Europe median 33.2 days on 5/10 (vs. 34.8 prior week) — Red Sea reopening shaved 1.6 days. Faster transit = more effective supply at unchanged nominal capacity, but export volume is rising simultaneously.

### Why this is debate-worthy (priority Normal)
- The SCFI composite pullback is the US west lane mean-reverting after overshoot. **Europe is the lane that matters for 2Q**, and Europe is up.
- Red Sea reopening is a **two-sided** variable: bullish for global trade volume, bearish for spot rates (effective supply rises). For COSCO specifically, earnings sensitivity is more box-volume than box-rate — how you weight customs volumes vs. SCFI rates will determine tomorrow's A-share open.

### Trade ideas
1. No directional call yet; ask ashare-strategist + china-macro to agree a "liner earnings = α × volume + β × rate" simplification before tomorrow's open and price the implied 2Q.
2. Short-term watch: the spread between pure-Europe-exposed names (e.g. COSCO Energy product tanker for crude/product overlay) and the broad container ETF.

### Follow-ups
- See `follow_ups` block — routed to ashare-strategist.

---

## Scan log (full transparency on signals checked today)

| Source | Coverage | Triggered divergence? | Note |
|---|---|---|---|
| Placer.ai foot traffic | US big-box / QSR / cinema | **Yes (DG/TGT)** | See Pitch 1 |
| SimilarWeb web traffic | US AI apps / e-com / SaaS | **Yes (AI apps)** | See Pitch 2 |
| Cloudflare Radar | Global internet / AI inference | **Yes** | See Pitch 2 |
| OpenRouter token routing | AI inference | **Yes** | See Pitch 2 |
| AIS vessel data (MarineTraffic) | Global shipping | **Yes (China–Europe)** | See Pitch 3 |
| Briq IoT port congestion | Major global ports | No | Tracks price |
| SpaceKnow satellite parking | US retail | Supports Pitch 1 | DG -7.3% |
| RS Metrics steel mill thermal | Global mills | No | Weak signal |
| Sensor Tower mobile DAU | Global apps | Supports Pitch 2 | Claude all-time high |
| Affinity Solutions card panel | US consumer | Supports Pitch 1 | Discount -1.4% |
| Earnest Analytics ticket | US retail | Supports Pitch 1 | DG frequency down 4 weeks |
| China customs container exports (April) | China export | Supports Pitch 3 | +6.2% |
| Michigan consumer sentiment prelim (May) | US consumer | **Counter (price-driver)** | Used as Pitch 1 narrative |
| US EIA weekly products inventory | Energy | No | Tracks oil price |
| Indeed hiring index | US labor | No | No new direction |
| MySteel China mills | China black metals | No | Tracks commodity price |
| Gaode / Baidu migration | China travel | No | Tracks airline tape |
| Trade Algo options anomaly | US equities | No (corroborates NVDA short) | — |

---

## Follow-ups & whiteboard pitches

(The JSON blocks below appear byte-for-byte identical in both `topic_pitches.md` and `topic_pitches.en.md`.)

```json
{"follow_ups":[
  {"to":"consumer-analyst","subject":"Discount retail SSS模型 vs. Placer 客流当前偏离","question":"以你目前对 DG/DLTR/TGT 2Q SSS 的覆盖模型,Placer.ai 5/9-5/10 周末客流(DG yoy -4.8%、TGT -1.6%、WMT 0%)若按历史 4 周领先关系外推,会把 2Q SSS 一致预期分别下修多少 bps?这个下修幅度今天的价格定价了吗?","priority":"high"},
  {"to":"chief-strategist","subject":"K 型消费在 2Q 重启?","question":"请评估:Placer/Earnest 端低端门店客流连续 3 周走弱,同时 Costco 客流 +1.9%、密歇根信心初值反弹至 71.2,这是周期性反弹下的 K 型重启,还是只是油价回落带来的瞬时反弹?对 staples vs. discretionary、必选 vs. 可选的资产配置含义是什么?","priority":"high"},
  {"to":"ashare-strategist","subject":"集运盈利 = α×箱量 + β×价格 的简化模型","question":"用中远海控 601919 过去 6 个季度的盈利对箱量(海关总署月度集装箱出口箱量)与运价(SCFI 欧线)拆分回归,α 与 β 当前怎么分配?在'箱量 +6% / 欧线 +0.6% / 红海复航缩短在途 1.6 天'的当下组合下,2Q 隐含盈利方向是上还是下?这关系明天 A 股集运板块开盘多空判断。","priority":"normal"}
]}
```

```json
{"whiteboard_pitches":[
  {"topic":"AI capex'放缓叙事'与终端用量加速的脱钩 — 算力是真过剩还是估值的情绪 deload","topic_en":"AI capex 'slowdown' narrative vs. accelerating end-user inference — real overcapacity or sentiment deload","question":"如果 SimilarWeb/OpenRouter/Cloudflare 显示推理用量周斜率仍在 +8% 到 +11%,而板块在 sell ORCL capex 削减传闻,这是一次性的情绪 reset 还是单位 token 经济在结构性瓦解 GPU 需求?TMT/Quant/Strategy 各自的接近角度是什么?","question_en":"If SimilarWeb/OpenRouter/Cloudflare show inference usage still running at +8% to +11% wk/wk while the tape is selling Oracle capex-cut headlines, is this a sentiment reset or a structural collapse in GPU-dollars-per-token economics? How do TMT, quant, and strategy each frame it?","suggested_analyst_id":"chief-strategist","rationale":"算力 capex 是 SPX 重要 P&L 引擎,价格与用量同步背离的窗口短,值得团队明天前形成统一视角。","priority":"high"},
  {"topic":"低端消费的硬数据与软数据再次背离 — 2Q K 型重启?","topic_en":"Low-end consumer hard data vs. soft data diverging again — is a K-shaped 2Q starting?","question":"密歇根信心初值意外反弹,但 Placer/Earnest 显示 DG/DLTR 客流与频次仍在恶化、Costco 仍强。这种硬-软背离在 2023Q3、2024Q2 都先于零售板块跑输 2-3 周。我们要不要在 5/22 TGT、5/29 DG 财报前预先调整 staples vs. discretionary 的板块权重?","question_en":"Michigan consumer sentiment surprised up, but Placer/Earnest show DG/DLTR foot-traffic and frequency still deteriorating while Costco is strong. This hard-soft divergence preceded retail underperformance by 2-3 weeks in 23Q3 and 24Q2. Do we pre-position staples vs. discretionary weights ahead of TGT (5/22) and DG (5/29) earnings?","suggested_analyst_id":"chief-strategist","rationale":"涉及资产配置层面的板块权重决策,需要 strategy + consumer + macro 三方共同确认。","priority":"normal"}
]}
```
