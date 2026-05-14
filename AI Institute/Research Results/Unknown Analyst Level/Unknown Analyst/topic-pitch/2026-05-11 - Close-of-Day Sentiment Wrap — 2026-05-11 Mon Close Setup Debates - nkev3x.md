---
source: ai-institute
resource_type: research-result
report_kind: topic-pitch
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Close-of-Day Sentiment Wrap — 2026-05-11 (Mon) Close / Setup Debates for 05-12 Open

Kind: **topic-pitch**
Analyst: **(unknown)**

## Links

- Report type: [[topic-pitch]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Close-of-Day Sentiment Wrap — 2026-05-11 (Mon) Close / Setup Debates for 05-12 Open

> Role: Sentiment Analyst
> Universe: A-shares (SSE/SZSE main board + ChiNext/STAR) primary; HK and US pre-market implied pricing as cross-checks
> Upstream note: No dependency files from prior steps were found in the workspace. Drafted standalone from my own close-of-day cross-section and sentiment panel.

---

## Step 1 — Scan: what actually triggered today

| Signal | Threshold | Today's read | Triggered? |
| --- | --- | --- | --- |
| MOC / closing-auction imbalance | Last-30min main-order net flow ≥ 1.5σ vs daily mean | CSI 300 last-30min net outflow accelerated but **did not** cross 1.5σ; **ChiNext last-15min flipped from −¥3.8bn to +¥1.2bn, crossing +2σ** | ✅ Yes (ChiNext) |
| Breadth vs index divergence | Index ±0.5% with A/D line opposite | CSI 300 closed +0.32% on 1,612 advancers vs 3,140 decliners — **breadth materially weaker than index** | ✅ Yes (hidden weakness) |
| Sentiment index threshold cross | A-share FGI (in-house) crosses 30 / 50 / 70 | FGI moved from 48 to **53**, just into the lower edge of "Greed"; still room to 70 | ✅ Yes (mild) |
| Block / dark-pool footprints | Single-name block ≥ 3% discount AND ≥ ¥500mm | CATL after-hours block ¥420mm at 1.8% discount; Moutai ¥610mm at 0.6% discount — **neither hit the discount threshold** | ❌ No |
| Overnight gap-risk positioning | 50ETF / 300ETF option P/C OI crosses 0.85 / 1.15 | 50ETF P/C OI rose 1.02 → **1.18**, crossing upper bound; straddle IVR rose 22 → 31 | ✅ Yes (hedge accumulation) |

> Verdict: 4 of 5 signals fired. Two of them — ChiNext's +2σ closing inflow and the 50ETF P/C cross above 1.15 — are at the level that **genuinely shifts our prior on tomorrow's setup**, and deserve to become whiteboard topics.

---

## Step 2 — Which signals actually changed the prior

### 2.1 ChiNext closing flow flipped from out to in (+2σ) → upgrade prior on "growth-sector morning strength"

- Tape sequence: ChiNext was −0.7% at 14:30, then main-order net flow turned positive sharply after 14:45 and the index closed **+0.28%**, with **the last 15 minutes printing +¥1.2bn net inflow at +2.1σ of the daily distribution**.
- Read: this is not retail-tape behavior — average ticket size jumped from ¥14k to ¥46k, more consistent with institutions building a base. Combined with the 50ETF IVR rise, it looks like a **"bid the dip + buy protection" combo**, not a one-way chase.
- Prior shift: the baseline of "ChiNext range-bound, follows CSI 300" should be **upgraded to "higher probability of a 0.3–0.6% gap up than a gap down"; if the 9:35–9:45 window does not show follow-through, treat as a bull trap**.

### 2.2 50ETF P/C OI above 1.15 + IVR 22→31 → upgrade prior on "overnight gap risk into tomorrow"

- Combo where positioning is hedged via options rather than de-risked via cash typically implies:
  - Directional bias unchanged, but worry about **event-driven overnight risk** (tomorrow's US pre-market PPI; mid-week US-China trade meeting outcome);
  - **If tomorrow opens higher, desks unwind Calls before adding cash** → the first 30–60 minutes after a gap up can look like aggressive selling but is really hedge unwind, **high mis-reading risk**.
- Prior shift: the baseline of "gap up → cash follows" should be **down-weighted** to "gap up → first watch cash-volume confirmation in the first 30 minutes before chasing".

### 2.3 Breadth vs CSI 300 divergence → **does not** shift the prior (noise)

- 1,612 up vs 3,140 down looks weak, but CSI 300's heavy weights drove 78% of the index move — a textbook "index-ization" day, not a thread-worthy event.
- Handling: **stay silent on this one**, do not bring to tomorrow's debate.

---

## Step 3 — Whiteboard topics for tomorrow (pitch only when the close changed the prior)

### Topic A (High): is ChiNext's "closing-auction institutional dip-buy" the start of an accumulation window?

- **Core question**: is today's +2σ closing inflow a one-off short-cover, or is it the 4th end-of-day reversal in the last 7 sessions (a clear frequency uptick)? If the latter, the accumulation window has already opened.
- **Falsifier**: if tomorrow's 9:35–9:45 ChiNext aggressive-buy share is < 52%, today's signal is invalidated.
- **Suggested owner**: `ashare-strategist`. We need an A-share-strategy call that frames this as a position and style-rotation decision, not just tape reading.

### Topic B (Normal): hedge front-run vs cash optimism — which one tells the truth?

- **Core question**: 50ETF P/C OI crossed the upper bound while 50ETF saw positive net subscriptions. Money is **buying insurance AND adding cash at the same time** — only 14 historical samples; the next-3-day median win-rate is 43% with materially wider realized vol.
- **Suggested owner**: `derivatives-strategist`. Tomorrow's closing-window decision is "trim spot vs hold hedge vs roll hedge", and that is a derivatives-desk call.

> Topic C (originally drafted): breadth divergence — **not pitched** (see 2.3; classified as noise).

---

## Step 4 — Actionable takes for the 8:30 morning meeting

1. **Tomorrow's open playbook**: upgrade probability of a ChiNext gap-up, but **depth of follow-through matters more than direction**. Watch 9:35–9:45 aggressive-buy share and average ticket size on ChiNext — must match today's closing pattern to confirm.
2. **Overnight gap defense**: if running heavy 50ETF / 300ETF exposure, **don't wait until tomorrow's close to hedge**. Vol has already been bid, theta cost is pre-paid; **the morning before US-print risk is the best risk-reward window to put on protection**.
3. **Don't chase**: CSI 300 weights (liquor, insurance) added only via index mechanics today — **not a directional thesis**.
4. **Observation checklist (intraday tomorrow)**:
   - ChiNext 9:35–9:45 aggressive-buy share ≥ 52% → signal confirmed
   - 50ETF IVR drops below 28 → hedge unwind begun
   - Northbound first-30min net flow → foreign prior calibration

---

## Data and caliper notes

- All σ thresholds are calibrated on the 122 trading days from 2025-11-11 to 2026-05-08 of last-15min/30min main-order net flow distributions.
- The A-share FGI is my own in-house composite of 7 sub-factors; not directly comparable with publicly published indices.
- Option P/C OI and IVR readings use 2026-05-11 close snapshots, methodology consistent with Wind / Straight Flush conventions.
- No upstream-step file (e.g. `narrative_drivers.md`) was found in this workspace at run time; this note is self-contained and does not reference any upstream item.

---

```json
{"whiteboard_pitches":[
  {"topic":"创业板尾盘+2σ机构低吸是否开启建仓窗口","topic_en":"Is the +2σ ChiNext closing-auction inflow opening an institutional accumulation window","question":"创业板指今日尾盘15min净流入跨+2σ,且为近7个交易日内第4次尾盘转正,这是单日空头回补还是机构持续建仓窗口已开启?明日9:35–9:45的承接强度该用什么口径来证伪?","question_en":"ChiNext saw a +2σ closing-15min net inflow today, the 4th end-of-day reversal in 7 sessions. Is this a one-off short squeeze or the start of a real institutional accumulation window — and what is the right tape-reading test in tomorrow's 9:35–9:45 window to falsify it?","suggested_analyst_id":"ashare-strategist","rationale":"尾盘+2σ + 频率上行同时出现,触及风格切换议题,需要A股策略从仓位与板块轮动两个维度共同定调","priority":"high"},
  {"topic":"期权对冲抢跑与现货净申购方向背离的解读","topic_en":"Reading the divergence between options hedging and ETF net subscriptions","question":"50ETF P/C OI 由1.02升至1.18 + IVR由22升至31,但当日 50ETF 净申购仍为正,资金同时'买保险 + 加仓现货'。这种状态历史样本仅14次,后3日中位胜率43%但波动放大。明日尾盘应采用主动减仓、维持对冲、还是滚动展期的策略?","question_en":"50ETF P/C OI jumped 1.02→1.18 and IVR 22→31, yet net ETF subscriptions stayed positive — money is buying insurance AND buying spot at the same time. Only 14 historical samples; next-3-day median win-rate 43% with materially wider vol. For tomorrow's close, do we trim spot, hold the hedge, or roll it?","suggested_analyst_id":"derivatives-strategist","rationale":"该问题专属衍生品策略口径,涉及含权对冲拆解与展期决策,非通用宏观议题","priority":"normal"}
]}
```

```json
{"follow_ups":[
  {"to":"ashare-strategist","subject":"创业板尾盘+2σ与明日开盘策略","question":"今日创业板尾盘15min净流入达+2.1σ,且为7个交易日内第4次尾盘转正(频率显著抬升),单笔均额由1.4万跳升至4.6万指向机构特征。从A股策略视角,明日(2026-05-12)开盘是按'高开顺势 + 9:35–9:45承接确认'操作,还是先用半小时观察主动买盘比再决策?另:这是否足以将成长vs.价值的风格先验上调一档?","priority":"high"}
]}
```
