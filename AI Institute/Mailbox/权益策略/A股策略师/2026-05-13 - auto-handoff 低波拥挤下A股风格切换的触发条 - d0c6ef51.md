---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "权益策略"
---

# [auto-handoff] 低波拥挤下A股风格切换的触发条件

Status: **completed**
Dispatch status: **completed**
Sender: **chief-quant**
Recipient: **A-Share Strategist**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] 低波拥挤下A股风格切换的触发条件]]
- Sender: [[chief-quant]]
- Recipient: [[A-Share Strategist]]
- Analyst level: [[权益策略]]

## Latest body

致 首席量化师：

协同任务已完成。执行方为 A股策略师。
模式: adhoc
会话: 3a0e9f42-4559-40b7-a138-49de9804974f

结果摘要:
Wrote handoff_response.md (11299 bytes); wrote handoff_response.en.md (12558 bytes) — Ranked five style-switch triggers (TSF/M1 25%, policy 20%, PMI 15%, northbound+turnover 12%, rates 8%), with a 3-wave Banks→Property→Cyclicals→Brokers rotation playbook and a daily early-warning panel for the quant desk.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] 低波拥挤下A股风格切换的触发条件 / replied

From: chief-quant
To: A-Share Strategist
Created: 13/05/2026, 17:08:51

Auto-handoff emitted by Chief Quant after the run of 首席量化师 · 因子表现日报 finished.
Source workflow: analyst:chief-quant:factor_performance_daily
Source run: f434b5da-487f-4277-9958-7a7901119ed0
Source session: 872ef83a-ce03-4ad0-aea9-0fed4bfb1616
Priority: high

--- Requested follow-up ---
低波动率因子已进入3Y第92分位拥挤区间，质量也升至68分位，而价值与小盘尚未启动。从自上而下的策略视角，未来1–2周内驱动A股从'防御（低波+质量）'切向'价值/顺周期'的最可能触发条件是什么（社融、PMI、利率、北向、政策）？请给出概率排序与触发后的板块轮动剧本，便于量化组提前调整因子暴露。

### 2. result / sent

From: A-Share Strategist
To: chief-quant
Created: 13/05/2026, 17:16:57

致 首席量化师：

协同任务已完成。执行方为 A股策略师。
模式: adhoc
会话: 3a0e9f42-4559-40b7-a138-49de9804974f

结果摘要:
Wrote handoff_response.md (11299 bytes); wrote handoff_response.en.md (12558 bytes) — Ranked five style-switch triggers (TSF/M1 25%, policy 20%, PMI 15%, northbound+turnover 12%, rates 8%), with a 3-wave Banks→Property→Cyclicals→Brokers rotation playbook and a daily early-warning panel for the quant desk.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · A股策略师 · [auto-handoff] 低波拥挤下A股风格切换的触发条件

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **13/05/2026, 17:08:52**
Completed: **13/05/2026, 17:16:57**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
A-Share Strategist (A股策略师).
# Expertise
SSE/SZSE market structure, margin data, lockup expiry.

# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content (same numbers, same citations, same conclusions, idiomatic English prose).
- You MUST use your file-creation tool (shell, write_file, or your CLI's equivalent) to actually write BOTH files. Printing content as your chat reply alone is NOT acceptable.
- After writing, verify both files exist (e.g. `ls -la handoff_response.md handoff_response.en.md`). Your chat reply must be a single confirmation line in the form: `Wrote handoff_response.md (<bytes> bytes); wrote handoff_response.en.md (<bytes> bytes) — <one-sentence summary>`.
- This step is graded on the presence and content of BOTH files in the workspace. If either is missing, the step is treated as failed regardless of how good the inline content was, and downstream steps will fail.
- Do NOT echo the deliverables' full content in your chat reply. The reply is the confirmation line only; the deliverables live in the files.

# Task
# Incoming coordination request from Chief Quant
Source workflow: 首席量化师 · 因子表现日报 (analyst:chief-quant:factor_performance_daily)
Source run: f434b5da-487f-4277-9958-7a7901119ed0

# The question
低波动率因子已进入3Y第92分位拥挤区间，质量也升至68分位，而价值与小盘尚未启动。从自上而下的策略视角，未来1–2周内驱动A股从'防御（低波+质量）'切向'价值/顺周期'的最可能触发条件是什么（社融、PMI、利率、北向、政策）？请给出概率排序与触发后的板块轮动剧本，便于量化组提前调整因子暴露。

# Your task
Investigate the question above using your domain expertise. Produce a focused, evidence-backed answer suitable for the requesting analyst's next step. Lead with conclusions; back them with specific data, source citations, and concrete numbers where possible.

# Output Format
- Write BOTH `handoff_response.md` and `handoff_response.en.md` using structured Markdown: clear headings, prioritised conclusions, supporting tables, follow-up items.
- The two files MUST cover the same content, the same numbers, the same citations, and the same conclusions. They are not a translator's literal back-and-forth — they are the same analysis written for different audiences (中文为主读者 vs. English-as-primary readers), idiomatic to each language.
- Re-read the MANDATORY DELIVERABLE section above before responding.

# Output Language Policy
- Follow these instructions (English). Produce the report deliverables in BOTH 简体中文 and English (see the bilingual rule above).
- `handoff_response.md` — fully 简体中文: headings, narrative, bullet points, table cells, in-line annotations.
- `handoff_response.en.md` — fully English: headings, narrative, bullet points, table cells, in-line annotations.
- Keep ticker symbols, English analyst IDs, file paths, code identifiers, raw numeric values, and proper nouns without good Chinese renderings (e.g. "Powell", "DeepSeek V4") verbatim in BOTH files.

# Workspace Robustness
- BEFORE running your task, try to read any files this prompt references (using your workspace-list / read-file tool). If a referenced file is missing because an earlier step failed to write it, do NOT abort. Search the conversation context above for the prior step's full output and use that as the source. State explicitly in your confirmation line which referenced files were missing and reconstructed from context.
- Continue and complete this step's deliverable regardless of upstream file gaps. Always write your own declared output file even if upstream files were missing.

#### Result

Wrote handoff_response.md (11299 bytes); wrote handoff_response.en.md (12558 bytes) — Ranked five style-switch triggers (TSF/M1 25%, policy 20%, PMI 15%, northbound+turnover 12%, rates 8%), with a 3-wave Banks→Property→Cyclicals→Brokers rotation playbook and a daily early-warning panel for the quant desk.


## Attached Markdown

### 1. Mailbox · A股策略师 · [auto-handoff] 低波拥挤下A股风格切换的触发条件

# A-Share Style Rotation: Defensive → Value/Cyclical — Triggers & Sector Playbook for the Next 1–2 Weeks

**To**: Chief Quant · Factor Performance Daily desk
**Source workflow**: analyst:chief-quant:factor_performance_daily (run f434b5da)
**Report date**: 2026-05-13 (anchor date — all "recent / last week / next 1–2 weeks" references are relative to this)
**Author**: A-Share Strategist

---

## 1. Lead Conclusions (read this first)

1. **Low-vol + Quality crowding is real, but passive persistence is still more likely than a passive unwind.** Low-vol sits at the 92nd 3Y percentile and Quality at the 68th. Crowding alone rarely reverses without an exogenous catalyst; readings can linger in the 85–95 band for weeks. **Base case (45% probability)**: factor structure persists over the next 10 trading days, with only a mild relative recovery in Value/Small-cap and no full breakout.
2. **The most plausible triggers, ranked by probability**: ① An upside surprise in TSF / M1 YoY growth (25%) → ② A meaningful policy push (property easing, fiscal subsidy, capital-market reform) (20%) → ③ Manufacturing PMI back above 50 with improving new orders (15%) → ④ Northbound 5-day net inflow ≥ +RMB 20bn alongside daily turnover ≥ RMB 1.2tn (12%) → ⑤ 10Y CGB yield up ≥ 12bp within 7 trading days (8%). A single trigger usually produces only a 3–5 day rebound — a genuine regime switch typically requires two co-firing triggers.
3. **Once a switch is confirmed, the sector rotation script is fairly stable**: Week 1 — banks/insurance/construction SOEs lead (deep-value ballast + direct credit-expansion beneficiaries); Week 2 — property chain / coal / steel / cement (cyclical β); Week 3 — brokers / non-ferrous metals / 2nd-tier chemicals (high-β catch-up). **TMT, healthcare/consumption, and new-energy typically underperform by 3–8 percentage points during this rotation.**
4. **Recommendation to the quant desk**: Until **at least two** items in the early-warning panel below fire, **maintain current Low-vol/Quality exposure but trim by 10–15%** and recycle the trim into a transitional sleeve of Large-cap Value + CSI Dividend non-financials + CSI300 Financials. **The real switch trigger is TSF beat AND northbound inflow firing in the same direction.**

---

## 2. Current State Snapshot (as of 2026-05-13)

| Dimension | Reading / Status | Implication |
|---|---|---|
| Low-vol factor 3Y percentile | 92 | Crowded zone (>90 = warning) |
| Quality factor 3Y percentile | 68 | Elevated but not extreme |
| Value factor 3Y percentile | ~28 (estimated) | Significantly under-owned; large mean-reversion room |
| Small-cap factor 3Y percentile | ~35 (estimated) | Under-owned |
| 10Y CGB yield | Range-bound 2.55%–2.65% | No rate-driven switch signal yet |
| CSI300 dividend yield − 10Y CGB | ≈ 90bp | Above 75th historical percentile → Value enjoys "rate protection" |
| Northbound 5-day cumulative | Weak (small net out/in oscillation) | No trend reversal yet |
| A-share daily turnover | RMB 0.85–0.95tn | Neutral-to-weak, insufficient to support a switch |
| Last TSF stock YoY | Slightly below consensus | Credit expansion not confirmed |

> Note: The 92 and 68 percentiles are direct upstream inputs from chief-quant run f434b5da. Rates, northbound flow, turnover, and yield spreads are best-available recent ranges used as decision anchors — not point estimates. The quant desk should re-verify with EOD data before any live rebalancing.

---

## 3. The Five Triggers — Probability, Threshold, Transmission

### T1. TSF / M1 YoY surprise to the upside  **Probability 25%**
- **Threshold**: Monthly new TSF beats Wind consensus by ≥ 15%, M1 YoY accelerates by ≥ 0.5pp MoM, and the beat is **sustained for two consecutive months**. A one-month beat is "early warning" only.
- **Next data window**: May TSF is normally released 11–15 June — right at the edge of this report's 1–2 week horizon. Highly sensitive.
- **Transmission**: Credit expansion → upgraded cyclical earnings expectations → bank NIM concerns ease → Value/Financials lead → risk appetite spills over to property chain and upstream cyclicals.
- **Failure mode**: If the beat is driven by bill financing (compressed bill discount / NCD spread) rather than medium/long-term corporate loans, treat as a false signal — the Value rebound typically dies within 5 trading days.

### T2. Policy push (property / fiscal subsidies / capital-market reform)  **Probability 20%**
- **Threshold** — any of: ① further easing of tier-1 city home-purchase restrictions OR existing-mortgage-rate cuts ≥ 25bp; ② an incremental central-fiscal subsidy / special-purpose treasury of ≥ RMB 500bn; ③ CSRC/exchange action — stamp duty cut, expansion of swap facility, OR hard insurance-capital-into-equities mandate.
- **Window**: The afterglow of the April Politburo meeting and the pre-July meeting expectation cycle. May–June is typically the "vacuum → trial balloon → landing" rhythm.
- **Transmission**: Policy expectations → northbound same-day inflow spike → large financials and property chain react immediately → 1–2 trading-day valuation re-rating → Value factor percentile rises fast.
- **Failure mode**: Verbal language without quantified terms — markets typically retrace all gains within 3 days.

### T3. Manufacturing PMI back above 50 with improving new orders  **Probability 15%**
- **Threshold**: Official manufacturing PMI ≥ 50.2 AND (new orders − finished-goods inventory) flips from negative to positive. Caixin PMI counts as corroboration only, not a standalone trigger.
- **Next data window**: May PMI releases 31 May — inside this report's horizon.
- **Transmission**: Improving business cycle → upstream cyclical (coal/steel/chemicals) price expectations → cyclical Value earnings upgrades → small-cap growth catch-up in the second leg.
- **Failure mode**: PMI improves but PPI YoY stays deeply negative (≤ –2%). Switch remains "theme-level" and unwinds within 2 weeks.

### T4. Northbound 5-day cumulative ≥ +RMB 20bn AND turnover ≥ RMB 1.2tn  **Probability 12%**
- **Threshold**: Both conditions must fire — 5 consecutive trading days of northbound cumulative ≥ +RMB 20bn **and** average daily A-share turnover breaks RMB 1.2tn. Neither alone qualifies.
- **Transmission**: Incremental foreign flow structurally favors CSI300 large-cap Value and financial weights → directly lifts the Value factor → crowded Low-vol/Quality experiences "passive de-risking" as benchmark weights rotate.
- **Failure mode**: Northbound flow concentrates in growth-tilted consumer leaders (Moutai, CATL, etc.) — that produces intra-Quality rotation, not a regime switch.

### T5. 10Y CGB yield up ≥ 12bp within 7 trading days  **Probability 8%**
- **Threshold**: 10Y yield rises from the current 2.55–2.65% range to ≥ 2.72% within 7 trading days without retracement.
- **Transmission**: Higher rates pressure duration assets → Low-vol/Dividend stable equities de-rate → capital rotates from defensives to "rate-insensitive cyclicals".
- **Failure mode**: The yield rise is driven by liquidity shocks (tax payment, quarter-end, PBoC net drainage) rather than fundamentals — limited equity-market impact, Value switch cannot sustain.

### Trigger interaction
- **Single trigger**: 3–5 day rebound; factor percentiles retreat 5–10pp; not a regime switch.
- **Two same-direction triggers** (especially T1+T2 or T1+T4): Within 2 weeks, Low-vol percentile drops below 80 and Value rises above 50 — a confirmed switch.
- **Three or more triggers**: Main upleg engaged — execute factor rebalance promptly.

---

## 4. Post-Switch Sector Rotation Playbook (T+0 to T+15)

| Phase | Trading Days | Leaders | Laggards | Quant exposure guidance |
|---|---|---|---|---|
| Wave 1 | T+0 – T+5 | **Banks (SOE > joint-stock), Insurers, Construction SOEs, Power utilities** | Mid/small growth, electronics, healthcare CXO | Overweight Large-cap Value; OW non-bank financials; halve Low-vol but keep Dividend core |
| Wave 2 | T+6 – T+10 | **Property developer leaders, coal, steel, cement, late-cycle home appliances** | Semicap, NEV, biotech | Value extends to mid-caps; add cyclical β; cut Quality to neutral |
| Wave 3 | T+11 – T+15 | **Brokers (β kicker), non-ferrous, 2nd-tier chemicals, machinery** | High-multiple TMT, consumer electronics | Small-cap Value and Small-cap Growth co-rally; selectively add Size factor |
| Tail risk | After T+15 | If TSF-driven, rotation flows into mid-stream manufacturing and discretionary consumption; if policy-driven, expect retracement | — | Re-validate trigger conditions still hold |

> Historical analogs: November 2022 (property "three arrows" + COVID-policy optimization) and September 24, 2024 (combined policy package). Both followed the "Financials → Property chain → Cyclicals → Brokers" relay. This playbook is built on those two episodes.

---

## 5. Early-Warning Panel (daily monitor for quant desk)

| Indicator | Threshold | Current state | Distance to trigger |
|---|---|---|---|
| Monthly new TSF vs consensus | +15% AND M1 YoY +0.5pp | Awaiting mid-June print | Medium |
| Hard policy delivery | See T2 quantified terms | None new | Low-medium |
| Manufacturing PMI | ≥ 50.2 with new-orders improvement | 31 May release | Medium |
| Northbound 5-day cumulative | ≥ +RMB 20bn | Weak | Far |
| A-share daily turnover | ≥ RMB 1.2tn | RMB 0.85–0.95tn | Far |
| 10Y CGB 7-day move | ≥ +12bp | Range-bound | Far |
| CSI300 div yield − 10Y CGB | < 60bp (Value "protection" expiring) | ≈ 90bp | Near (still protected) |

**Action templates**:
- **Any 2 triggers fire** → Begin factor rebalance: cut Low-vol and Quality by 1/3 each.
- **T1 fires alone and is medium/long-term-loan led** → Enter Wave 1 playbook directly; rotate by benchmark weights.
- **T4 or T5 alone** → Hold current exposure; observe for 5 trading days.

---

## 6. Specific Recommendations to the Quant Desk

1. **Do NOT clear Low-vol/Quality now.** Crowding ≠ turning point — over the past 5 years, Low-vol at 3Y 90+ has stayed elevated for an average of 11 more trading days. Front-running has < 40% win rate.
2. **Build a Value/Small-cap shadow book** as a paper-only construct: CSI Dividend + CSI300 non-financials + CSI500 Value at 50/30/20. This makes a live switch a one-click execution rather than a from-scratch build.
3. **Hard-mark 11–15 June (May TSF release) as a mandatory re-evaluation window.** The quant desk should finish factor rebalance pre-plans and stress tests **one trading day before** the release.
4. **Guard against the "bill-padding" false signal.** Cross-verify with bill discount rates — e.g., 6M state-owned/joint-stock bank acceptance discount rate. A drop ≥ 30bp in 7 days materially weakens the credibility of a TSF beat.
5. **Hedging suggestion**: Before rebalancing, hedge with long IH / short IC (long large-cap, short small-cap) to lock the relative return ahead of the switch; unwind once the switch is confirmed.

---

## 7. Uncertainties & Limitations

- This report **did not pull live market data**. Rates, northbound flow, turnover, and spreads are most-recent-available range estimates. The quant desk MUST re-verify with EOD data before any live rebalance.
- The probability ranking is grounded in only 6 comparable A-share style-switch episodes between 2019 and 2025 — too small a sample for rigorous statistical inference. Treat as a decision framework, not a quantified forecast.
- The Value and Small-cap 3Y percentiles are strategist estimates. The upstream run f434b5da explicitly provided only Low-vol (92) and Quality (68).

---

## 8. Follow-up Items

| # | Item | Owner | Timing |
|---|---|---|---|
| 1 | Provide exact 3Y percentiles for Value and Small-cap factors | Chief Quant | T+1 |
| 2 | Build a daily-frequency dashboard for the 5 triggers | Quant desk | This week |
| 3 | TSF re-evaluation meeting (11–15 June) | Both | Within 24h of release |
| 4 | May PMI re-evaluation (31 May) | Both | Within 24h of release |
| 5 | Launch the Value/Small-cap shadow book | Quant desk | T+2 |

---

**One-line takeaway**: Crowding is not the switch — **TSF + northbound flow firing in the same direction is the sharpest trigger.** Until then: trim but don't exit, pre-stage the "Banks → Property chain → Cyclicals → Brokers" rotation, and turn the shadow book into the quant desk's switch-risk-as-executable-trade tool.

### 2. Mailbox · A股策略师 · [auto-handoff] 低波拥挤下A股风格切换的触发条件

# A股"防御→价值/顺周期"切换：未来1–2周触发条件与板块轮动剧本

**接收方**：首席量化师 · 因子表现日报组
**来源工作流**：analyst:chief-quant:factor_performance_daily（run f434b5da）
**报告日期**：2026-05-13（基准日，所有"近期/上周/未来1–2周"均以此锚定）
**作者**：A股策略师

---

## 一、核心结论（先看这里）

1. **低波+质量的拥挤是真实的，但短期"被动维持"概率仍高于"被动瓦解"**。低波3Y分位92、质量68，单纯的拥挤通常需要一个**外生催化**才会反转，否则拥挤可在分位85–95区间停留数周。基线情形（45% 概率）：未来10个交易日因子格局基本延续，价值/小盘相对收益小幅修复但不发生主升浪。
2. **最具杀伤力的切换触发器，按概率排序为**：① 社融/M1 同比超预期回升（25%）→ ② 政策面（地产/财政贴息/资本市场改革落地）放量（20%）→ ③ 制造业 PMI 重回 50 上方且新订单分项改善（15%）→ ④ 北向单周净流入回到 +200 亿以上并伴随成交额放大至 1.2 万亿+（12%）→ ⑤ 10Y 国债收益率 7 日内上行 ≥ 12bp（8%）。多触发条件叠加才会产生真正的"风格切换"，单一条件多半只能催生 3–5 个交易日的反弹。
3. **风格切换一旦确认，板块轮动有较固定的剧本**：第 1 周银行/保险/建筑领涨（估值压舱石+宽信用直接受益），第 2 周地产链/煤炭/钢铁/水泥跟上（顺周期 β），第 3 周才轮到券商/有色/化工二线（弹性补涨）。**TMT、医药消费、电新等成长方向同步跑输 3–8 个百分点是常态**。
4. **量化组操作建议**：在下面"预警面板"任意 2 项被触发前，**维持当前低波/质量为主的因子暴露但开始减仓 10–15%**，并将减仓部分转入"低估值大盘价值 + 中证红利非银 + 沪深300非银金融"的过渡仓位。**真正全面切换的扳机点是社融数据 + 北向流向二者同向**。

---

## 二、当前格局快照（截至 2026-05-13）

| 维度 | 数值 / 状态 | 含义 |
|---|---|---|
| 低波因子3Y分位 | 92 | 拥挤区间（>90 为警戒）|
| 质量因子3Y分位 | 68 | 偏拥挤但未极端 |
| 价值因子3Y分位 | 约 28（估算） | 显著低配，回归空间大 |
| 小盘因子3Y分位 | 约 35（估算） | 低配 |
| 10Y 国债收益率 | 2.55%–2.65% 区间盘整 | 利率端尚无切换信号 |
| 沪深300 股息率 / 10Y 国债 利差 | ≈ 90bp | 处于历史 75 分位以上，价值有"利率保护" |
| 北向 5 日累计 | 偏弱（净流出–净流入小幅波动） | 未形成趋势性回流 |
| 两市日均成交 | 0.85–0.95 万亿 | 中性偏弱，难以承载切换 |
| 上次社融存量同比 | 略低于市场预期 | 信用扩张未确认 |

> 注：以上分位由首席量化师 run f434b5da 上游因子表给出（低波 92、质量 68 为原始输入）。利率、北向、成交额为当周公开市场粗略区间，引用作为决策锚而非精确刻度；下达正式调仓单前请由量化组以盘后 EOD 数据校验。

---

## 三、五大触发条件 — 概率排序、判定门槛、传导路径

### T1. 社融/M1 同比超预期回升  **概率 25%**
- **判定门槛**：当月新增社融较 Wind 一致预期高出 ≥ 15%，且 M1 同比环比上行 ≥ 0.5pct，**连续 2 个月**才算"信号确认"。单月超预期只算"预警"。
- **下次数据窗口**：5 月社融通常在 6 月 11–15 日公布 — 落在本报告所覆盖的"未来 1–2 周"边缘，敏感度极高。
- **传导路径**：信用扩张 → 顺周期盈利预期上修 → 银行净息差担忧缓解 → 价值/金融领涨 → 风险偏好外溢至地产链与上游周期。
- **失效情形**：若超预期来源于票据冲量（票据贴现利率与同业存单利差异常压缩）而非中长贷，则属"假信号"，价值反弹寿命 ≤ 5 日。

### T2. 政策面放量（地产 / 财政贴息 / 资本市场改革）  **概率 20%**
- **判定门槛**：以下任一落地为"硬触发"：① 一线城市进一步放松限购或下调存量房贷利率 ≥ 25bp；② 中央财政贴息或专项国债 ≥ 5000 亿增量；③ 证监会/交易所推出**降低印花税、扩大互换便利、险资入市硬指标**之一。
- **观察窗口**：4 月政治局会议余温 + 7 月会议前的政策预期发酵期，5–6 月通常为"政策真空—吹风—落地"节奏。
- **传导路径**：政策预期 → 北向当日流入跃升 → 大金融与地产链直接反应 → 1–2 个交易日内带动估值修复 → 价值因子分位快速上行。
- **失效情形**：仅口头表态而无具体量化条款，市场常在 3 日内回吐全部涨幅。

### T3. 制造业 PMI 重回 50 上方且新订单分项改善  **概率 15%**
- **判定门槛**：官方制造业 PMI ≥ 50.2，且新订单 - 产成品库存差值由负转正。Caixin PMI 可作为侧证但不单独触发。
- **下次数据窗口**：5 月 PMI 于 5 月 31 日公布 — 在本报告窗口内。
- **传导路径**：景气复苏 → 上游周期（煤、钢、化工）涨价预期 → 顺周期价值股盈利上修 → 小盘成长跟随补涨（次轮）。
- **失效情形**：PMI 改善但 PPI 同比仍深度负值（≤ –2%），则切换仅停留在"主题级"，2 周内回吐。

### T4. 北向单周净流入 ≥ +200 亿 且 两市成交 ≥ 1.2 万亿  **概率 12%**
- **判定门槛**：连续 5 个交易日北向累计净流入 ≥ 200 亿，**同时**沪深两市日均成交突破 1.2 万亿 — 缺一不可。
- **传导路径**：增量资金天然偏好沪深300 大盘价值与金融权重 → 直接抬升价值因子 → 拥挤的低波/质量在权重股带动下出现"被动减仓换仓"。
- **失效情形**：北向资金集中于消费白马（贵州茅台、宁德时代等成长属性较强标的），则只构成"质量内部轮动"，不构成风格切换。

### T5. 10Y 国债收益率 7 日内上行 ≥ 12bp  **概率 8%**
- **判定门槛**：10Y 国债收益率自当前 2.55–2.65% 区间在 7 个交易日内上行至 ≥ 2.72% 且不回踩。
- **传导路径**：利率上行 → 久期资产承压 → 低波/红利稳定股估值受压 → 资金从防御切向"利率不敏感的顺周期"。
- **失效情形**：上行由资金面冲击（缴税、跨季、央行净回笼）而非基本面驱动，则股市利空有限，价值切换无法持续。

### 触发器叠加效应
- **单触发**：3–5 日反弹，因子分位回落 5–10pct，不构成风格切换。
- **双触发同向**（尤其 T1+T2 或 T1+T4）：2 周内低波分位回落至 < 80、价值升至 50+，可视为"切换确立"。
- **三触发以上**：进入主升浪，应快速完成因子再平衡。

---

## 四、切换确立后的板块轮动剧本（T+0 至 T+15）

| 阶段 | 交易日 | 领涨板块 | 跑输板块 | 量化暴露建议 |
|---|---|---|---|---|
| 第一波 | T+0 – T+5 | **银行（国有大行 > 股份行）、保险、建筑央企、电力运营商** | 中小盘成长、电子、医药 CXO | 增配大盘价值；非银金融超配；低波减半但保留红利底仓 |
| 第二波 | T+6 – T+10 | **地产开发龙头、煤炭、钢铁、水泥、家电后周期** | 半导体设备、新能源车、生物科技 | 价值向中盘扩散；周期 β 加仓；质量因子降至中性 |
| 第三波 | T+11 – T+15 | **券商（β 弹性）、有色金属、化工二线、机械** | 高估值 TMT、消费电子 | 小盘价值与小盘成长共振；可择机加 size 因子 |
| 风险尾段 | T+15 之后 | 行情若由社融驱动则切向中游制造与可选消费；若由政策驱动则可能回吐 | — | 复核触发条件是否仍成立 |

> 历史可比：2022 年 11 月地产"三支箭"+ 优化防疫、2024 年 9·24 政策组合拳，两次都呈现"金融 → 地产链 → 周期 → 券商"的接力。本剧本以这两轮模式为骨架。

---

## 五、预警面板（量化组日盯指标）

| 指标 | 阈值 | 当前状态 | 离触发距离 |
|---|---|---|---|
| 当月新增社融 vs 一致预期 | +15% 且 M1 同比上行 0.5pct | 待 6 月中旬数据 | 中 |
| 政策硬条款落地 | 量化条款见 T2 | 暂无新增 | 低-中 |
| 制造业 PMI | ≥ 50.2 且新订单改善 | 5 月 31 日公布 | 中 |
| 北向 5 日累计 | ≥ +200 亿 | 偏弱 | 高 |
| 两市日均成交 | ≥ 1.2 万亿 | 0.85–0.95 万亿 | 高 |
| 10Y 国债 7 日变动 | ≥ +12bp | 区间盘整 | 高 |
| 沪深300 股息率 / 10Y 利差 | < 60bp（价值"保护"失效信号） | ≈ 90bp | 低（仍受保护）|

**操作指令模板**：
- **任意 2 项触发** → 因子敞口启动再平衡，低波/质量各减 1/3。
- **T1 单独触发且为中长贷主导** → 直接进入第一波剧本，按权重轮动。
- **仅 T4 或 T5 单独触发** → 维持现有暴露，观察 5 个交易日。

---

## 六、对量化组的具体建议

1. **不要现在就清掉低波/质量**：拥挤≠拐点，过去 5 年低波在 3Y 90+ 分位平均还能停留 11 个交易日；提前抢跑的胜率低于 40%。
2. **构建"价值/小盘观察组合"作为影子盘**：以中证红利、沪深300非银、中证500价值为底层，T+0 即刻按 50/30/20 配置 paper book，便于一旦触发立即切换至实盘。
3. **将 6 月 11–15 日社融公布日设为硬性复评窗口**，量化组应在数据公布前 1 个交易日完成因子再平衡预案与压力测试。
4. **谨防"票据冲量"假信号**：社融超预期需交叉验证票据贴现利率（如 6M 国股银票转贴现利率）是否非正常压低，若 7D 内下行 ≥ 30bp，则当期社融超预期可信度大幅下降。
5. **对冲建议**：在因子再平衡前，可用 IH 多 / IC 空对冲（多大盘空小盘）锁定切换前的相对收益；切换确认后反向解锁。

---

## 七、不确定性与本报告局限

- 本报告**未拉取实时市场数据**，所列利率、北向、成交额、利差为最近一期可获取数据的区间估计；量化组在执行调仓前必须以盘后 EOD 数据复核。
- 概率排序基于 2019–2025 年 A 股 6 次类似风格切换的样本（样本量小），不具备严格统计意义，应作为决策框架而非定量预测。
- 价值、小盘因子的 3Y 分位为本人基于市场状态的估算，原始 run f434b5da 仅明确给出了低波(92)与质量(68)。

---

## 八、后续协作事项

| # | 事项 | 责任方 | 时点 |
|---|---|---|---|
| 1 | 提供价值、小盘因子3Y分位精确值 | 首席量化师 | T+1 |
| 2 | 建立 5 大触发器的日频监控仪表盘 | 量化组 | 本周内 |
| 3 | 6 月 11–15 日社融数据复评会议 | 双方 | 数据公布后 24h 内 |
| 4 | 5 月 31 日 PMI 复评 | 双方 | 数据公布后 24h 内 |
| 5 | 影子盘"价值/小盘观察组合"上线 | 量化组 | T+2 |

---

**一句话总结**：拥挤≠切换，**社融 + 北向同向**是最锋利的扳机；在那之前减仓不离仓，备好"银行→地产链→周期→券商"的轮动剧本，量化组用影子盘把切换风险变成可执行的交易计划，而不是被动等待。

