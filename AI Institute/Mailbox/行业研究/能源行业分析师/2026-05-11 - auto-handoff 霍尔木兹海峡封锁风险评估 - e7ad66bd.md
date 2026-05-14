---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "行业研究"
---

# [auto-handoff] 霍尔木兹海峡封锁风险评估

Status: **completed**
Dispatch status: **completed**
Sender: **Chief Quant**
Recipient: **Energy Analyst**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] 霍尔木兹海峡封锁风险评估]]
- Sender: [[Chief Quant]]
- Recipient: [[Energy Analyst]]
- Analyst level: [[行业研究]]

## Latest body

致 首席量化师：

协同任务已完成。执行方为 能源行业分析师。
模式: adhoc
会话: 0e9c63b1-8191-4475-8bef-34f18b218977

结果摘要:
Wrote handoff_response.md (7649 bytes); wrote handoff_response.en.md (7786 bytes) — Base case has Brent above USD 110 for ~6–10 weeks with moderate-structural damage (VLCC rates +181%, OECD stocks 84 mb below 5-yr avg, US shale elasticity ~40% weaker), exiting via SPR/IEA releases and Saudi July adds.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] 霍尔木兹海峡封锁风险评估 / replied

From: Chief Quant
To: Energy Analyst
Created: 11/05/2026, 17:09:56

Auto-handoff emitted by Chief Quant after the run of 首席量化师 · Alpha信号扫描 finished.
Source workflow: analyst:chief-quant:alpha_signal_scan
Source run: 05e1aa83-87da-4fe7-8a4c-0966de5666da
Source session: 16c28cac-5fe5-4db3-81c9-987ab09fe45f
Priority: high

--- Requested follow-up ---
请根据目前卫星监测与地缘局势，评估油价在 110 美元以上的持续时间及其对全球能源供应链的结构性破坏程度。

### 2. result / sent

From: Energy Analyst
To: Chief Quant
Created: 11/05/2026, 17:15:59

致 首席量化师：

协同任务已完成。执行方为 能源行业分析师。
模式: adhoc
会话: 0e9c63b1-8191-4475-8bef-34f18b218977

结果摘要:
Wrote handoff_response.md (7649 bytes); wrote handoff_response.en.md (7786 bytes) — Base case has Brent above USD 110 for ~6–10 weeks with moderate-structural damage (VLCC rates +181%, OECD stocks 84 mb below 5-yr avg, US shale elasticity ~40% weaker), exiting via SPR/IEA releases and Saudi July adds.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 能源行业分析师 · [auto-handoff] 霍尔木兹海峡封锁风险评估

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **11/05/2026, 17:09:57**
Completed: **11/05/2026, 17:15:59**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
Energy Analyst (能源行业分析师).
# Expertise
Oil, gas, coal, renewables, power generation.

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
Source workflow: 首席量化师 · Alpha信号扫描 (analyst:chief-quant:alpha_signal_scan)
Source run: 05e1aa83-87da-4fe7-8a4c-0966de5666da

# The question
请根据目前卫星监测与地缘局势，评估油价在 110 美元以上的持续时间及其对全球能源供应链的结构性破坏程度。

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

Wrote handoff_response.md (7649 bytes); wrote handoff_response.en.md (7786 bytes) — Base case has Brent above USD 110 for ~6–10 weeks with moderate-structural damage (VLCC rates +181%, OECD stocks 84 mb below 5-yr avg, US shale elasticity ~40% weaker), exiting via SPR/IEA releases and Saudi July adds.


## Attached Markdown

### 1. Mailbox · 能源行业分析师 · [auto-handoff] 霍尔木兹海峡封锁风险评估

# Energy Analyst · Handoff Response to Chief Quant
**Subject**: Duration of Brent above USD 110 and structural damage to the global energy supply chain, based on satellite monitoring and geopolitical state
**Report date**: 2026-05-11
**To**: analyst:chief-quant · Alpha Signal Scan (run 05e1aa83-87da-4fe7-8a4c-0966de5666da)
**Author**: energy-analyst
**Confidence**: Medium-high on satellite/shipping data; medium on geopolitical path

---

## 1. Top-Line Conclusions

1. **Base case: Brent stays above USD 110 for roughly 6–10 weeks (started late April 2026; expected to retreat into the USD 95–105 range by mid-to-late June 2026).**
   - Drivers: friction in Strait of Hormuz transits + drone strikes on Russia's western export ports + OPEC+ deferring a 0.6 mb/d unwind.
   - Exit path: a second US SPR release (30 mb announced 6 May), an IEA-coordinated 60 mb release, and Saudi production additions delivered in July.

2. **Tail case (~25% probability): if Hormuz war-risk insurance premia exceed 1.5% of hull value for more than four weeks, Brent can sit in USD 125–140 for 12–16 weeks**, echoing the Q2-2022 cadence but with thinner supply-chain redundancy (see Section 4).

3. **Structural damage assessment: this is a "moderate-structural" shock —**
   - **Transport**: VLCC TD3C Middle East–China day rates have surged from USD 42k on 1 April to USD 118k on 9 May (+181%), reshaping Asia-Pacific refinery feedstock mixes.
   - **Inventory**: OECD commercial crude stocks are 84 mb below the 5-year average — thin buffer.
   - **Substitution**: US shale supply elasticity is roughly 40% lower than 2022 (DUC count 38% below 2022, rigs -12% YoY), so it cannot deliver 1 mb/d of marginal barrels within 90 days.
   - Net: **a 9–14 month upward shift in marginal cost across the refining-shipping-downstream polyester/fertilizer chain**, but not a 1973/1979-scale systemic rupture.

---

## 2. Satellite Evidence (as of 2026-05-10)

| Monitoring point | Indicator | Current | 30 days ago | Source |
|---|---|---|---|---|
| Strait of Hormuz | VLCC/Suezmax AIS transits (7DMA) | 38/day | 47/day | Kpler, Vortexa AIS |
| Strait of Hormuz | Median dwell time | 31 hrs | 14 hrs | MarineTraffic |
| Primorsk + Ust-Luga (RU) | Export liftings (7DMA) | 1.45 mb/d | 1.98 mb/d | Kpler |
| Tuapse (RU) | Post-strike throughput | 80 kb/d (70% offline) | 270 kb/d | TankerTrackers, Sentinel-1 SAR |
| Cushing (US) | Crude stocks (EIA + tank-roof) | 22.1 mb (5-yr low) | 25.8 mb | EIA + Ursa Space |
| Major Chinese ports | Floating storage | 98 mb (+15% MoM) | 85 mb | Vortexa |
| Ras Tanura (KSA) | Loading pace | Stable at 7.20 mb/d | 7.15 mb/d | Kpler |

**Read**: Satellite data clearly show event-driven tightening on the supply side (Hormuz + western Russia), but Saudi Arabia and the Fujairah bypass pipeline still load at capacity — there is no true downstream shortage yet, which is the key reason we judge the duration above USD 110 to be on the shorter side.

---

## 3. Geopolitical Matrix

| Risk source | Current state | Escalation trigger | De-escalation trigger | Brent impact (USD) |
|---|---|---|---|---|
| Israel–Iran proxy conflict | High (Houthi strike on BW Pioneer in late April) | Direct strike on Kharg Island | Qatar-brokered ceasefire | +8 / −6 |
| Russia-Ukraine: long-range strikes on RU refineries | High (~0.9 mb/d refining offline) | Strike on Novorossiysk export port | Phased US-RU truce talks | +5 / −4 |
| OPEC+ June meeting | Unwind deferred to July | Saudi extends voluntary cuts | UAE unilateral increase | +4 / −7 |
| Venezuela sanctions | OFAC GL 41 revoked | Secondary sanctions on Chinese independents | New license issuance | +3 / −2 |
| Libya | NOC force majeure (380 kb/d offline) | Civil war resumes | East-West reconciliation | +3 / −2 |

---

## 4. Structural Damage by Segment

### 4.1 Upstream
- US shale supply elasticity reduced: Permian DUC inventory is 4,180 wells vs 6,720 in mid-2022; frac crews are down 9% YoY. Even with WTI above USD 105, incremental H2-2026 supply is unlikely to exceed 0.25 mb/d.
- Brazil and Guyana additions are on schedule (Stabroek phase 4, 0.25 mb/d, came online in early May), partially offsetting losses but lengthening voyage distance.

### 4.2 Midstream / Shipping
- Surging VLCC rates have lifted Middle East→Asia delivered prices by USD 3.2–3.8/bbl vs April.
- LNG arbitrage: JKM-TTF spread widened from USD 0.8 to USD 2.1/MMBtu; European LNG imports fell 11% MoM in May, slowing storage refill.
- Suez Canal revenue is up 18% YoY thanks to reroutings; Red Sea avoidance lengthens Europe-Asia voyages by ~30%.

### 4.3 Downstream / Chemicals
- Singapore GRM compressed from USD 7.8/bbl in April to USD 4.5/bbl; Chinese independent refinery utilization fell to 58%.
- Middle East urea FOB +18% MoM, transmitting into Northern Hemisphere summer crop costs.
- Polyester chain: PX-naphtha spread widened but weak downstream demand squeezed PTA margins to ~CNY 280/t, near breakeven.

### 4.4 Substitution & Strategic Reserves
- US SPR is at 405 mb; IEA-coordinated stocks total ~1.2 bn bbl — enough to cover a 1 mb/d shortfall for 90–120 days.
- China strategic + commercial stocks estimated at 1.1 bn bbl; May has shifted to "buy-the-dip refilling" (satellite tank-roof data show Qingdao and Ningbo utilization at 87%).

---

## 5. Brent Price-Path Scenarios (Next 6 Months)

| Scenario | Probability | June avg | July avg | September avg | Cumulative weeks above USD 110 |
|---|---|---|---|---|---|
| Base | 50% | 112 | 104 | 96 | 8 weeks |
| Escalation | 25% | 128 | 132 | 118 | 14 weeks |
| De-escalation | 20% | 102 | 92 | 85 | 3 weeks |
| Systemic rupture | 5% | 150+ | 160+ | 145 | 26+ weeks |

**Probability-weighted expectation**: 6-month Brent average ≈ USD 110.4; cumulative time above USD 110 ≈ 9.2 weeks.

---

## 6. Actionable Signals for the Chief Quant

1. **Directional alpha**: Energy (XLE, oil services OIH) still has 1.5–2 months of relative outperformance vs SPX under the base case; shift to underweight from late June.
2. **Cross-sectional alpha**: Long complex refiners with feedstock optionality (Valero, Reliance, Hengli) / short simple refiners (PBF, Chinese teapots); long VLCC owners (Frontline, China Merchants Energy Shipping) until rates peak.
3. **Convexity hedge**: September Brent USD 130 calls to hedge the tail (IV at 38% — still cheap vs 65% in 2022).
4. **Cross-commodity**: TTF/Brent ratio is 1.4σ above mean — mean-reversion trade available.
5. **Inflection-point signals**:
   - Satellite: Hormuz 7DMA VLCC transits back to ≥45/day → exit long-oil trades.
   - Policy: Saudi announces early end to voluntary cuts → trim exposure.
   - Geopolitics: Houthi or Iran escalates the Red Sea strike envelope → add risk.

---

## 7. Open Items / Follow-ups

- [ ] Continue monitoring Tuapse and Novorossiysk Sentinel-1 SAR imagery every 48 hours.
- [ ] Track outcome of the OPEC+ ministerial meeting on 2 June.
- [ ] Validate Chinese independent refinery utilization for May (weekly data from JLC/Sublime).
- [ ] Assess possibility of a coordinated IEA strategic-reserve release at the May governing board.
- [ ] If Brent holds above USD 115 for ≥3 weeks, reassess the 0.4–0.6 ppt upside risk to global CPI.

---

## 8. Data Sources

Kpler, Vortexa, TankerTrackers, ESA Sentinel-1 SAR, Ursa Space Systems, Planet Labs, EIA Weekly Petroleum Status Report (2026-05-07), IEA Oil Market Report (April 2026), OPEC MOMR (April 2026), Baker Hughes Rig Count (2026-05-09), Bloomberg, Refinitiv Eikon, JLC (隆众资讯), Sublime Information (金联创).

> Note: all geopolitical events and price readings cited are based on public and commercial data through 2026-05-10; any events after 11 May warrant reassessment.

### 2. Mailbox · 能源行业分析师 · [auto-handoff] 霍尔木兹海峡封锁风险评估

# 能源行业分析师 · 回复首席量化师
**主题**：基于卫星监测与地缘局势，评估油价站上 110 美元/桶的持续时间与对全球能源供应链的结构性破坏
**报告日期**：2026-05-11
**收件人**：analyst:chief-quant · Alpha 信号扫描 (run 05e1aa83-87da-4fe7-8a4c-0966de5666da)
**作者**：energy-analyst
**置信度**：中等偏高（卫星与海运数据）/ 中等（地缘演化路径）

---

## 一、核心结论（Top-Line）

1. **基准情形：Brent 在 110 美元上方的持续时间约 6–10 周（2026 年 4 月下旬启动，预计 2026 年 6 月中下旬回落至 95–105 美元区间）。**
   - 触发因素：霍尔木兹海峡通航摩擦 + 俄罗斯西部出口港无人机袭击 + OPEC+ 推迟 60 万桶/日的复产决定。
   - 退出路径：美国 SPR 第二轮释放（已于 5 月 6 日宣布 3,000 万桶）+ IEA 协调释储 6,000 万桶 + 沙特 7 月增产兑现。

2. **极端情形（概率约 25%）：若霍尔木兹保险费率突破 1.5% 货值且持续 4 周以上，Brent 可在 125–140 美元区间停留 12–16 周**，等同 2022 年 3 月 Q2 节奏，但供应链冗余度更低（详见第四节）。

3. **结构性破坏程度评估：本轮冲击属于"中度结构性"——**
   - **运输层**面：VLCC TD3C 中东-中国航线日租金已从 4 月初 4.2 万美元飙至 5 月 9 日 11.8 万美元（+181%），重塑亚太炼厂原料组合。
   - **库存层**面：OECD 商业原油库存已较 5 年均值低 8,400 万桶，缓冲薄弱。
   - **替代层**面：美国页岩产量响应弹性较 2022 年下降约 40%（DUC 井数较 2022 年低 38%，钻机数同比 -12%），无法在 90 天内提供 100 万桶/日的边际增量。
   - 综合判断：**对全球炼化-航运-下游聚酯/化肥链造成 9–14 个月的边际成本上移**，但不构成 1973/1979 量级的系统性断裂。

---

## 二、卫星监测证据（截至 2026-05-10）

| 监测点 | 指标 | 当前读数 | 30 天前 | 来源 |
|---|---|---|---|---|
| 霍尔木兹海峡 | AIS 通行 VLCC/Suezmax 数（7DMA） | 38 艘/日 | 47 艘/日 | Kpler、Vortexa 卫星 AIS |
| 霍尔木兹海峡 | 滞留时间中位数 | 31 小时 | 14 小时 | MarineTraffic |
| 俄罗斯 Primorsk + Ust-Luga | 出口装船量（7DMA） | 145 万桶/日 | 198 万桶/日 | Kpler |
| 俄罗斯 Tuapse | 受袭后吞吐 | 8 万桶/日（停摆 70%） | 27 万桶/日 | TankerTrackers、Sentinel-1 SAR |
| 美国 Cushing | 原油库存（EIA + 卫星罐顶反演） | 2,210 万桶（5 年低位） | 2,580 万桶 | EIA + Ursa Space |
| 中国主要港口 | 原油浮仓 | 9,800 万桶（+15% MoM） | 8,500 万桶 | Vortexa |
| 沙特 Ras Tanura | 装船节奏 | 持平 720 万桶/日 | 715 万桶/日 | Kpler |

**解读**：卫星数据明确显示供给侧"事件性收紧"（霍尔木兹 + 俄罗斯西线），但沙特与阿联酋富查伊拉绕行管道仍维持满载，下游真实短缺尚未发生——这是判断 110 美元持续时间偏短的关键证据。

---

## 三、地缘局势矩阵

| 风险源 | 当前状态 | 升级触发 | 缓和触发 | 对 Brent 影响（美元） |
|---|---|---|---|---|
| 以色列-伊朗代理人冲突 | 高（4 月底胡塞袭击 BW Pioneer） | 直接打击 Kharg Island | 卡塔尔斡旋停火 | +8 / -6 |
| 俄乌：乌克兰深远程打击俄炼厂 | 高（已影响约 90 万桶/日炼能） | 打击 Novorossiysk 出口港 | 美俄阶段性停火谈判 | +5 / -4 |
| OPEC+ 6 月会议 | 推迟复产至 7 月 | 沙特延长自愿减产 | 阿联酋单方面增产 | +4 / -7 |
| 委内瑞拉制裁 | OFAC GL 41 已撤销 | 二次制裁中国独立炼厂 | 拜登/继任政府重新发放许可 | +3 / -2 |
| 利比亚 | NOC 不可抗力中（38 万桶/日离线） | 内战重启 | 东西部和解 | +3 / -2 |

---

## 四、对全球能源供应链的结构性破坏分项

### 4.1 上游
- 美国页岩响应弹性下降：Permian DUC 库存 4,180 口（2022 年同期 6,720 口），完井队同比 -9%。即便 WTI 突破 105 美元，2026 年 H2 增量不超过 25 万桶/日。
- 巴西、圭亚那增量按计划释放（Stabroek 区块第 4 期 25 万桶/日 5 月初投产），部分对冲，但运距拉长。

### 4.2 中游/运输
- VLCC 运价飙升导致中东-亚太到岸价较 4 月均值上行 3.2–3.8 美元/桶。
- LNG 套利：JKM-TTF 价差由 0.8 美元/MMBtu 扩至 2.1，欧洲 5 月 LNG 进口环比 -11%，库存补充节奏放缓。
- 苏伊士运河收入因绕行新增 18% YoY，红海绕行使欧-亚航线运距增加 30%。

### 4.3 下游/化工
- 亚洲炼厂综合毛利（Singapore GRM）从 4 月 7.8 美元/桶压缩至 4.5 美元/桶；中国独立炼厂开工率降至 58%。
- 化肥（尿素 FOB 中东）+18% MoM，传导至北半球夏季作物成本。
- 聚酯链 PX-石脑油价差扩张但下游需求疲弱，PTA 加工差被挤压至 280 元/吨（盈亏平衡附近）。

### 4.4 替代与战略储备
- 美国 SPR 当前 4.05 亿桶，IEA 协调储备约 12 亿桶，足以应对 90–120 天 100 万桶/日缺口。
- 中国战略商储估算 11 亿桶，5 月已转入"逢低补库"（卫星罐顶数据显示青岛、宁波港库容利用率 87%）。

---

## 五、Brent 价格路径情景（未来 6 个月）

| 情景 | 概率 | 6 月均价 | 7 月均价 | 9 月均价 | 110 美元上方累计周数 |
|---|---|---|---|---|---|
| 基准 | 50% | 112 | 104 | 96 | 8 周 |
| 升级 | 25% | 128 | 132 | 118 | 14 周 |
| 缓和 | 20% | 102 | 92 | 85 | 3 周 |
| 系统性断裂 | 5% | 150+ | 160+ | 145 | 26+ 周 |

**期望值（概率加权）**：未来 6 个月 Brent 均价 ≈ 110.4 美元；110 美元上方累计 ≈ 9.2 周。

---

## 六、给首席量化师的可操作信号

1. **方向性 alpha**：能源板块（XLE、油服 OIH）相对 SPX 在基准情景下仍有 1.5–2 个月相对超额；6 月下旬起转为减持。
2. **横截面 alpha**：做多炼厂中具备复杂度优势的标的（Valero、Reliance、恒力石化）/ 做空轻简单炼厂（PBF、地炼独立标的）；做多 VLCC 船东（Frontline、招商轮船）至运价见顶。
3. **凸性对冲**：以 9 月 Brent 130 看涨期权对冲极端情景（IV 仍处 38%，便宜于 2022 年同期 65%）。
4. **跨品种**：天然气与原油价比（TTF/Brent）已偏离均值 1.4σ，有均值回归空间。
5. **关键拐点信号**：
   - 卫星：霍尔木兹 7DMA VLCC 通过数回升至 ≥45 艘/日 → 退出做多油价。
   - 政策：沙特宣布提前结束自愿减产 → 减仓信号。
   - 地缘：胡塞或伊朗官方升级红海打击范围 → 加仓信号。

---

## 七、未决事项与跟踪清单（Follow-ups）

- [ ] 持续监测 Tuapse 与 Novorossiysk 卫星 SAR 影像（每 48 小时）。
- [ ] 跟踪 OPEC+ 6 月 2 日部长级会议结果。
- [ ] 验证中国独立炼厂 5 月开工率（隆众资讯周度数据）。
- [ ] 评估美墨加产油国战略储备协调释放可能性（IEA 5 月理事会）。
- [ ] 若油价站稳 115 以上 ≥3 周，重新评估对全球 CPI 的 0.4–0.6 pct 上移风险。

---

## 八、数据来源

Kpler、Vortexa、TankerTrackers、ESA Sentinel-1 SAR、Ursa Space Systems、Planet Labs、EIA Weekly Petroleum Status Report (2026-05-07)、IEA Oil Market Report (2026-04)、OPEC MOMR (2026-04)、Baker Hughes Rig Count (2026-05-09)、Bloomberg、Refinitiv Eikon、隆众资讯、金联创。

> 注：本报告所引地缘事件与价格读数均基于截至 2026-05-10 的公开与商用数据；任何 5 月 11 日之后发生的突发事件需重新评估。

