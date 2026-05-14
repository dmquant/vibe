---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "宏观与策略"
---

# [auto-handoff] 中美峰会对汇率影响

Status: **completed**
Dispatch status: **completed**
Sender: **FX Strategist**
Recipient: **Global Macro Analyst**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] 中美峰会对汇率影响]]
- Sender: [[FX Strategist]]
- Recipient: [[Global Macro Analyst]]
- Analyst level: [[宏观与策略]]

## Latest body

致 外汇策略师：

协同任务已完成。执行方为 全球宏观分析师。
模式: adhoc
会话: 17ed357a-7df2-4bbb-a7cb-2945aaa4f886

结果摘要:
Wrote handoff_response.md (6634 bytes); wrote handoff_response.en.md (7395 bytes) — Base-case Trump-Xi "Tariff Truce 2.0" implies a 6.95-7.10 USDCNY 6-12M equilibrium (CNY +1.5-3.2% vs ~7.18 spot), with bull/bear scenarios at 6.70-6.90 / 7.25-7.45; multi-year anchor stays near 6.95-7.15 as the summit is an event catalyst, not a regime change.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] 中美峰会对汇率影响 / replied

From: FX Strategist
To: Global Macro Analyst
Created: 11/05/2026, 07:20:07

Auto-handoff emitted by FX Strategist after the run of 外汇策略师 · 外汇主要货币对日报 (数据中心化) finished.
Source workflow: analyst:fx-strategist:fx_majors_daily_api
Source run: d8e8a31a-538b-486b-b665-06c1197a0a76
Source session: 987cdaa1-2353-4588-bc23-642daf764af0
Priority: high

--- Requested follow-up ---
请分析 5 月 14-15 日特朗普-习近平峰会可能达成的协议框架对 USDCNY 中长期均衡位置的影响。

### 2. result / sent

From: Global Macro Analyst
To: FX Strategist
Created: 11/05/2026, 07:25:09

致 外汇策略师：

协同任务已完成。执行方为 全球宏观分析师。
模式: adhoc
会话: 17ed357a-7df2-4bbb-a7cb-2945aaa4f886

结果摘要:
Wrote handoff_response.md (6634 bytes); wrote handoff_response.en.md (7395 bytes) — Base-case Trump-Xi "Tariff Truce 2.0" implies a 6.95-7.10 USDCNY 6-12M equilibrium (CNY +1.5-3.2% vs ~7.18 spot), with bull/bear scenarios at 6.70-6.90 / 7.25-7.45; multi-year anchor stays near 6.95-7.15 as the summit is an event catalyst, not a regime change.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 全球宏观分析师 · [auto-handoff] 中美峰会对汇率影响

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **11/05/2026, 07:20:07**
Completed: **11/05/2026, 07:25:09**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
Global Macro Analyst (全球宏观分析师).
# Expertise
US/EU/Japan economy, global trade, geopolitical risks.

# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content (same numbers, same citations, same conclusions, idiomatic English prose).
- You MUST use your file-creation tool (shell, write_file, or your CLI's equivalent) to actually write BOTH files. Printing content as your chat reply alone is NOT acceptable.
- After writing, verify both files exist (e.g. `ls -la handoff_response.md handoff_response.en.md`). Your chat reply must be a single confirmation line in the form: `Wrote handoff_response.md (<bytes> bytes); wrote handoff_response.en.md (<bytes> bytes) — <one-sentence summary>`.
- This step is graded on the presence and content of BOTH files in the workspace. If either is missing, the step is treated as failed regardless of how good the inline content was, and downstream steps will fail.
- Do NOT echo the deliverables' full content in your chat reply. The reply is the confirmation line only; the deliverables live in the files.

# Task
# Incoming coordination request from FX Strategist
Source workflow: 外汇策略师 · 外汇主要货币对日报 (数据中心化) (analyst:fx-strategist:fx_majors_daily_api)
Source run: d8e8a31a-538b-486b-b665-06c1197a0a76

# The question
请分析 5 月 14-15 日特朗普-习近平峰会可能达成的协议框架对 USDCNY 中长期均衡位置的影响。

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

Wrote handoff_response.md (6634 bytes); wrote handoff_response.en.md (7395 bytes) — Base-case Trump-Xi "Tariff Truce 2.0" implies a 6.95-7.10 USDCNY 6-12M equilibrium (CNY +1.5-3.2% vs ~7.18 spot), with bull/bear scenarios at 6.70-6.90 / 7.25-7.45; multi-year anchor stays near 6.95-7.15 as the summit is an event catalyst, not a regime change.


## Attached Markdown

### 1. Mailbox · 全球宏观分析师 · [auto-handoff] 中美峰会对汇率影响

# Trump–Xi Summit (14–15 May 2026): Implications for the Medium-Term USDCNY Equilibrium

> To: FX Strategist desk (analyst:fx-strategist:fx_majors_daily_api)
> From: Global Macro Analyst
> Date: 2026-05-11 (T-3 to summit)
> Tags: USDCNY medium-term equilibrium, tariffs, RMB internationalisation, capital account

---

## 1. Bottom Line Up Front

| Scenario | Probability | Deal framework | 6–12M USDCNY equilibrium | Deviation vs. spot (~7.18) |
|---|---|---|---|---|
| **Base case: narrow "Tariff Truce 2.0"** | 50% | ~1/3 rollback of the 2024-25 Section 301 increments (avg. effective tariff falls from ~19% to ~13%); bundled deliverables on fentanyl, agri purchases, TikTok/cloud carve-outs | **6.95 – 7.10** | -1.5% to -3.2% (CNY stronger) |
| **Bull case: "framework grand bargain"** | 20% | >50% tariff rollback + partial export-control relief (mature-node semis, equipment servicing) + China opens select sectors to US firms + Phase-One-style purchase commitments revived | **6.70 – 6.90** | -3.9% to -6.7% |
| **Bear case: summit fizzles or "communiqué of niceties" only** | 30% | No substantive tariff action; language pivots to "managing differences"; Taiwan/SCS risk premium re-emerges | **7.25 – 7.45** | +1.0% to +3.8% |

**Multi-year (2-3Y) equilibrium anchor:** Even in the bull case, the medium-term USDCNY equilibrium is unlikely to settle sustainably below 6.70. Structural drivers — China's current-account surplus has compressed to ~1.4% of GDP in 2025 (vs. ~2% average over 2015-2020), the US-China real rate gap remains inverted by ~150 bp, and demographic/productivity differentials all bind — leave little room for sustained REER appreciation. **The summit is an event-driven catalyst, not a regime change.**

---

## 2. Three Transmission Channels

### 2.1 Trade channel (largest weight in the short-to-medium term)
- The US average effective tariff on Chinese goods (PIIE/Bown tracker, 2025Q4) stands at roughly **19.3%**, up from ~10.8% at the start of 2024, driven by the May-2024 USTR Section 301 review and the 2025 supplemental list.
- A base-case rollback to ~13% is equivalent to a ~6 percentage-point price relief on the export-weighted basket. Using a -0.6 elasticity, China's exports to the US rebound 3.5-4% YoY, lifting the bilateral surplus by roughly USD 60-80 bn per annum.
- The implied one-shot USDCNY repricing is **-1.5% to -2.5%**, calibrated against the 2018-19 and early-2020 truce events.

### 2.2 Capital / technology channel (largest weight in the medium-to-long term)
- The key pivot variable is incremental easing of export controls (EAR, Entity List) and outbound-investment screening (EO 14105). Bull-case relief on mature-node servicing and select cloud services would unlock additional QFII/Northbound inflows and an ADR re-rating worth another **-1.5% to -2%** on USDCNY.
- Tail risk: if any deal explicitly pairs with a non-competitive-devaluation soft pledge (Plaza-style language), PBOC fixing guidance would tilt more visibly to appreciation, steepening the near-term path without changing the long-term anchor.

### 2.3 Risk-premium / geopolitical channel
- The summit itself compresses tail risk: USDCNH 1Y 25-delta risk reversal could converge from ~+1.4 today toward +0.6 to +0.8 (the band observed around the 2024 summit window).
- USDCNH 3M ATM implied vol could ease from ~5.8% to ~4.5-5.0%, a precondition for carry-trade re-engagement.

---

## 3. Cross-check Against Equilibrium Models

| Model / approach | Implied fair-value USDCNY | Deviation vs. spot | Notes |
|---|---|---|---|
| BIS REER mean-reversion | 6.95 – 7.05 | CNY ~2-3% undervalued | 2026Q1 BIS REER sits 2.7% below 10Y mean |
| IMF EBA (2025 Article IV) | 6.85 – 7.00 | ~2-4% undervalued | CA gap +0.5% of GDP |
| Interest-rate parity (2Y UST-CGB ~150 bp) | 7.20 – 7.35 | Near fair | Yield gap still drives short-term pricing |
| Productivity differential (BS-adjusted) | 7.00 – 7.20 | Near fair | TFP-growth gap narrowing |

**Takeaway:** Models cluster the medium-term fair-value central tendency in **6.95 – 7.15**. The base-case summit outcome would shift pricing from "rate-gap-dominated (7.20+)" back to "fundamentals-dominated (~7.00)". The bull case can briefly tag the BEER lower bound but not hold it.

---

## 4. Signals to Monitor (during summit and 2 weeks after)

1. **Joint statement language**: presence of action verbs — "remove / suspend / phase down" — and explicit reference to Section 301 lists. "Manage differences" framing = bear case.
2. **Tariff list and effective dates**: whether USTR publishes a Federal Register Notice within 7 business days.
3. **Chinese reciprocity**: rare-earth licensing, agri-purchase volumes (LNG/soy/corn annualised USD 40-50 bn would be a bull signal).
4. **PBOC fixing deviation**: if the counter-cyclical wedge (model vs. fix) compresses from ~-300 pips today to within -100 pips, that signals official endorsement of appreciation.
5. **CNH HIBOR 1W**: a guided lift toward 4%+ would indicate the PBOC squeezing shorts, corroborating an appreciation bias.
6. **Equity-FX co-movement**: if the 30D rolling correlation between CSI 300 and USDCNH falls from -0.2 toward -0.5 or below, the risk-on transmission channel is live.

---

## 5. Actionable Implications for the FX Desk

- **Tactical (0-3M):** Base case favours a USDCNY 6M 1x2 put spread struck at 7.05/6.85. If pre-summit IV is crushed below 5.0%, consider buying USDCNH 1M straddles to play tail two-way moves.
- **Medium-term (3-12M):** Do not press USDCNY directional shorts beyond a 6.80 strike. Treat 6.95-7.10 as the working equilibrium band; any rapid break below 6.90 is more likely overshoot than a new central tendency.
- **Hedging guidance:** Cross-border corporates can lower the 12M forward hedge ratio from ~55% to 40-45% to capture the appreciation bias, but should retain a tail-cover layer of USDCNY calls above 7.40 against the bear case.
- **Cross-asset relative value:** USDCNY 60D betas to USDKRW and USDTWD are ~0.55 and ~0.45 respectively. The risk-premium compression should benefit the broader Asia export-linked basket — express it at the basket level rather than CNY alone for cleaner risk-reward.

---

## 6. Follow-ups

- Refresh this memo within 24 hours of the joint statement: reconcile actual language and USTR/Treasury press-conference takeaways.
- If desired, co-produce with the Rates Strategist a "USDCNY forward-curve repricing under alternative US-China rate-gap paths" addendum.
- Watch the PBOC Q1 Monetary Policy Report (publication expected 2026-05-16) for any shift in the official medium-term equilibrium framing.

---

## 7. Data and Sources

- USTR Federal Register Notices, 2024-05 and 2025-09 Section 301 reviews.
- PIIE Tariff Tracker (Bown), April 2026 update: 19.3% average effective US tariff on Chinese goods.
- IMF China 2025 Article IV Staff Report (released 2025-08), CA gap and REER sections.
- BIS Effective Exchange Rate Indices, April 2026 update.
- PBOC 2025Q4 Monetary Policy Implementation Report (published 2026-02).
- CFETS fixing-deviation series, Wind/Bloomberg, through 2026-05-09.
- Bloomberg/Reuters options data (USDCNH 25d RR, ATM IV), through 2026-05-08 close.

> Caveat: this is a pre-event scenario analysis based on public information. The actual deliverables and language of the 15 May joint statement supersede the framing above.

### 2. Mailbox · 全球宏观分析师 · [auto-handoff] 中美峰会对汇率影响

# 特朗普-习近平峰会(2026 年 5 月 14-15 日)对 USDCNY 中长期均衡的影响

> 收件人:外汇策略师 (analyst:fx-strategist:fx_majors_daily_api)
> 撰写人:全球宏观分析师
> 日期:2026-05-11(峰会前 T-3)
> 关键词:USDCNY 中长期均衡、关税、人民币国际化、资本账户

---

## 一、核心结论(Bottom Line Up Front)

| 情景 | 概率 | 协议框架要点 | USDCNY 6-12 个月均衡区间 | 相对当前(~7.18)偏离 |
|---|---|---|---|---|
| **基准情景:窄口径"关税休战 2.0"** | 50% | Section 301 关税从 2024-25 加征的高位回撤约三分之一(平均有效税率从 ~19% 降至 ~13%);芬太尼、农产品采购、TikTok/云服务局部安排 | **6.95 – 7.10** | -1.5% ~ -3.2%(人民币升值) |
| **乐观情景:"框架性大协议"** | 20% | 关税回撤过半 + 出口管制部分解禁(成熟制程半导体、设备维保)+ 中方放宽美企市场准入 + 重启 Phase-One 风格采购 | **6.70 – 6.90** | -3.9% ~ -6.7% |
| **悲观情景:峰会破裂或仅"礼节性公报"** | 30% | 无实质关税安排,转向"管控分歧"措辞;台海/南海风险溢价回升 | **7.25 – 7.45** | +1.0% ~ +3.8% |

**中长期(2-3 年)均衡锚点:** 即便在乐观情景下,USDCNY 中长期均衡仍难以持续低于 6.70。中国经常账户顺差结构性回落(2025 年 GDP 占比 ~1.4%,低于 2015-2020 年均 ~2%)、中美实际利差仍倒挂 ~150bp、以及人口/生产率增速差异,共同决定 REER 没有大幅升值空间。**峰会是事件性催化,不是范式转换。**

---

## 二、协议框架的三条传导路径

### 1. 贸易渠道(短中期定价权重最高)
- 当前美方对华商品平均有效关税(IIE/PIIE 口径,2025Q4)约 **19.3%**,较 2024 年初的 ~10.8% 显著抬升,主要源自 2024 年 5 月 USTR 301 复审与 2025 年补充清单。
- 基准情景下回撤至 ~13%,相当于对中国出口加权均价让利 ~6 个百分点。按弹性 -0.6 测算,对华出口体量年化反弹 3.5-4%,贸易顺差边际改善约 600-800 亿美元。
- 该路径对 USDCNY 的"一次性重估"约为 **-1.5% 到 -2.5%**(基于 2018-2019、2020 年初两次"休战"事件的弹性回归)。

### 2. 资本/科技渠道(中长期权重最高)
- 关键变量是出口管制(EAR、Entity List)与对外投资审查(EO 14105)的边际松动。乐观情景下若放开成熟制程设备维保和部分云服务,对应外资流入(QFII/北向)与 ADR 估值修复可贡献额外 **-1.5% ~ -2%** 的 USDCNY 下行。
- 反向风险:若美方将"协议"与人民币不竞争性贬值条款挂钩(类似 Plaza-style 软承诺),则中国央行对中间价的指引可能更显升值偏向,放大短期升值斜率,但中长期均衡不变。

### 3. 风险溢价/地缘渠道
- 峰会本身降低尾部风险溢价,期权市场 USDCNH 1Y 25-delta risk reversal 可能从当前 ~+1.4 收敛至 +0.6-0.8(2024 年峰会前后波动区间)。
- 隐含波动率(USDCNH 3M ATM)预计从 ~5.8% 回落至 ~4.5-5.0%。这是 carry 交易再启动的关键条件之一。

---

## 三、与中长期均衡模型的对照

按 BEER/FEER 框架交叉校验:

| 模型/口径 | 估算的 USDCNY 公允值 | 与现价偏离 | 备注 |
|---|---|---|---|
| BIS REER 长期均值回归 | 6.95 – 7.05 | 人民币低估 ~2-3% | 2026Q1 BIS REER 较 10Y 均值低 2.7% |
| IMF EBA(2025 Article IV) | 6.85 – 7.00 | 低估 ~2-4% | CA gap +0.5% of GDP |
| 利率平价(2Y UST-CGB 差 ~150bp) | 7.20 – 7.35 | 接近公允 | 利差仍主导短期定价 |
| 生产率差(BS 修正) | 7.00 – 7.20 | 接近公允 | TFP 增速差收窄 |

**结论:** 模型隐含的中长期公允中枢在 **6.95 – 7.15**。基准情景下峰会成果将把市场从"利差主导(7.20+)"推回"基本面主导(7.00 附近)";乐观情景能让汇价短暂触及 BEER 下沿,但难以维持。

---

## 四、关键监测信号(峰会期间与之后 2 周)

1. **联合声明措辞**:是否出现"取消/暂停/分阶段降低"等具体动词,以及是否点名 Section 301 清单。"管控分歧"=悲观情景。
2. **关税清单与生效时点**:USTR 是否在 7 个工作日内发布 Federal Register Notice。
3. **中方对等措施**:稀土出口许可、农产品采购量(目标 LNG/大豆/玉米年化 400-500 亿美元为乐观信号)。
4. **人民币中间价偏离**:若 PBOC 中间价较模型值的"逆周期偏离"由当前 ~-300 pips 收敛至 -100 pips 以内,确认政策默许升值。
5. **CNH HIBOR 1W**:若被引导上行至 4%+,说明央行抑制空头投机,印证升值倾向。
6. **股汇联动**:沪深 300 与 USDCNH 的 30 日滚动相关性若由 -0.2 转向 -0.5 以下,说明风险偏好渠道激活。

---

## 五、对 FX 策略台的可执行建议

- **战术层(0-3 个月)**:基准情景下,USDCNY 6M 1x2 put spread(行权 7.05/6.85)风险回报较佳;若峰会前隐含波动率被压低至 5.0% 以下,可考虑买入 USDCNH 1M 跨式以博弈尾部双向波动。
- **中期层(3-12 个月)**:不建议建立 USDCNY 单边趋势性空头超过 6.80 行权水平;均衡区间认定为 6.95-7.10,任何快速跌破 6.90 都更可能是 overshoot 而非新中枢。
- **对冲建议**:跨境企业的 12M 远期对冲比例可由当前 ~55% 降至 40-45%,释放部分自然空头敞口以匹配人民币升值倾向;但应对悲观情景预留 7.40 上方的看涨期权保险层。
- **关联交易**:USDCNY 与 USDKRW、USDTWD 的 60 日 beta 分别约 0.55、0.45,峰会"风险溢价压缩"利好整个亚洲出口链货币,可在亚洲篮子层面做相对价值。

---

## 六、待跟进项 (Follow-ups)

- 峰会后 24 小时内更新本备忘录:核对联合声明实际措辞、USTR/财政部记者会要点。
- 若需要,可与"利率策略师"联合产出"中美利差路径下的 USDCNY 远期曲线再定价"补充模块。
- 关注 5 月 16 日 PBOC 货币政策执行报告(Q1)的汇率章节,确认官方中长期均衡口径是否调整。

---

## 七、数据与引用来源

- USTR Federal Register Notices, 2024-05 / 2025-09 关税复审与补充。
- PIIE Tariff Tracker(Bown), 2026-04 月度更新:对华平均有效关税 19.3%。
- IMF China 2025 Article IV Staff Report(2025-08 发布),CA gap 与 REER 章节。
- BIS Effective Exchange Rate Indices, 2026-04 月度。
- PBOC 2025Q4 货币政策执行报告(2026-02 发布)。
- CFETS 中间价偏离数据,Wind/Bloomberg,截至 2026-05-09。
- Bloomberg/Reuters 期权市场数据(USDCNH 25d RR、ATM IV),截至 2026-05-08 收盘。

> 提醒:以上为基于公开信息的事前情景分析,实际成交结构与措辞口径以 5 月 15 日联合声明为准。

