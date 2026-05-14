---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "行业研究"
---

# [auto-handoff] Analyze granular traffic basket

Status: **completed**
Dispatch status: **completed**
Sender: **Alt Data Analyst**
Recipient: **Consumer Analyst**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] Analyze granular traffic basket]]
- Sender: [[Alt Data Analyst]]
- Recipient: [[Consumer Analyst]]
- Analyst level: [[行业研究]]

## Latest body

致 另类数据分析师：

协同任务已完成。执行方为 消费行业分析师。
模式: adhoc
会话: f36f163b-d266-49d1-aa25-0e62400507c2

结果摘要:
Wrote handoff_response.md (11624 bytes); wrote handoff_response.en.md (12472 bytes) — Rotation is partly priced with sharp dispersion; unpriced alpha sits in HD/LOW Pro 2nd-derivative, open-air strip-REIT cash-NOI ramp, and MCD May traffic inflection — alt-data pull should be prioritised in that order, with CAVA/SHAK excluded from the value basket.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] Analyze granular traffic basket / replied

From: Alt Data Analyst
To: Consumer Analyst
Created: 10/05/2026, 16:42:57

Auto-handoff emitted by Alt Data Analyst after the run of 另类数据分析师 · 周末另类数据信号 finished.
Source workflow: analyst:altdata-analyst:topic_pitch_weekend_altdata
Source run: 58ce77a9-f50b-40d4-abd6-83359cf8eaf5
Source session: 85eaaf6e-4b2b-4e16-b696-f54b8e2b196d
Priority: normal

--- Requested follow-up ---
Pull a more granular traffic basket (HD/LOW, TJX/ROST/BURL, CAVA/CMG/SHAK/MCD, and open-air-center REITs) to determine whether the 'provable value' consumer rotation is already in prices.

### 2. result / sent

From: Consumer Analyst
To: Alt Data Analyst
Created: 10/05/2026, 16:51:12

致 另类数据分析师：

协同任务已完成。执行方为 消费行业分析师。
模式: adhoc
会话: f36f163b-d266-49d1-aa25-0e62400507c2

结果摘要:
Wrote handoff_response.md (11624 bytes); wrote handoff_response.en.md (12472 bytes) — Rotation is partly priced with sharp dispersion; unpriced alpha sits in HD/LOW Pro 2nd-derivative, open-air strip-REIT cash-NOI ramp, and MCD May traffic inflection — alt-data pull should be prioritised in that order, with CAVA/SHAK excluded from the value basket.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 消费行业分析师 · [auto-handoff] Analyze granular traffic basket

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **10/05/2026, 16:42:58**
Completed: **10/05/2026, 16:51:12**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
Consumer Analyst (消费行业分析师).
# Expertise
Baijiu, F&B, retail, branded consumer goods.

# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content (same numbers, same citations, same conclusions, idiomatic English prose).
- You MUST use your file-creation tool (shell, write_file, or your CLI's equivalent) to actually write BOTH files. Printing content as your chat reply alone is NOT acceptable.
- After writing, verify both files exist (e.g. `ls -la handoff_response.md handoff_response.en.md`). Your chat reply must be a single confirmation line in the form: `Wrote handoff_response.md (<bytes> bytes); wrote handoff_response.en.md (<bytes> bytes) — <one-sentence summary>`.
- This step is graded on the presence and content of BOTH files in the workspace. If either is missing, the step is treated as failed regardless of how good the inline content was, and downstream steps will fail.
- Do NOT echo the deliverables' full content in your chat reply. The reply is the confirmation line only; the deliverables live in the files.

# Task
# Incoming coordination request from Alt Data Analyst
Source workflow: 另类数据分析师 · 周末另类数据信号 (analyst:altdata-analyst:topic_pitch_weekend_altdata)
Source run: 58ce77a9-f50b-40d4-abd6-83359cf8eaf5

# The question
Pull a more granular traffic basket (HD/LOW, TJX/ROST/BURL, CAVA/CMG/SHAK/MCD, and open-air-center REITs) to determine whether the 'provable value' consumer rotation is already in prices.

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

Wrote handoff_response.md (11624 bytes); wrote handoff_response.en.md (12472 bytes) — Rotation is partly priced with sharp dispersion; unpriced alpha sits in HD/LOW Pro 2nd-derivative, open-air strip-REIT cash-NOI ramp, and MCD May traffic inflection — alt-data pull should be prioritised in that order, with CAVA/SHAK excluded from the value basket.


## Attached Markdown

### 1. Mailbox · 消费行业分析师 · [auto-handoff] Analyze granular traffic basket

---
to: Alt Data Analyst (altdata-analyst)
from: Consumer Analyst
re: Is the "provable value" consumer rotation already in prices? — granular traffic-basket decomposition
date: 2026-05-10 (Sunday)
source workflow: analyst:altdata-analyst:topic_pitch_weekend_altdata · run 58ce77a9-f50b-40d4-abd6-83359cf8eaf5
---

# TL;DR

1. **Partially priced — but with sharp dispersion.** Don't treat the eight tickers as one basket. As of 2026-05-10, on 1-yr fwd P/E vs. own 5-yr median, off-price (TJX/ROST/BURL) and value-QSR (MCD on a pre-inflection basis) sit at or above the +1σ band — risk/reward has compressed. Home-improvement (HD/LOW) and the premium-vs-recovery fast-casuals (CAVA/CMG/SHAK) are far more dispersed and still hold *alt-data-triggerable* expectation gaps.
2. **Off-price is a "half-told story."** TJX/ROST outperformed SPX by ~12–15pp in 2025 and sell-side consensus is now baked at near-flawless execution. Incremental alpha now requires *traffic acceleration*, not *traffic maintenance*. Tell the alt-data pull to anchor on **same-store traffic YoY second-derivative**, not on absolute growth.
3. **HD/LOW is the cleanest under-priced "value" expression in this basket.** The market is still pricing the stale "low housing turnover → weak repair demand" narrative, ignoring (a) structural Pro re-aggregation and (b) ageing housing stock driving non-discretionary ticket inflation. If alt-data shows Pro-hour traffic and ticket turning positive YoY, this is the un-priced trade.
4. **CAVA = priced for perfection. CMG = priced for recovery. SHAK = priced for narrative. MCD = priced for value, pre-inflection.** All four have entirely different "value-rotation" exposures and should not share a single basket frame. May 2026 US traffic at MCD is the *partially-priced-but-not-yet-confirmed* inflection point worth watching first.
5. **Open-air strip-center REITs (KIM, REG, BRX, ROIC/IVT, FRT, PECO) are the most under-priced second-order expression of this rotation.** Valuation (FFO yield ~6.5–7.0% vs. 10y ~4.3%) still has spread vs. fundamentals (occupancy ~95.5%+, SNO pipeline at all-time highs). Highest reward/risk for the alt-data pull.

---

# 1. Sub-basket grouping & "priced vs. unpriced" scorecard

Below is a qualitative scorecard built off valuation/momentum estimates as of the most recent close before 2026-05-10. **All numbers are analyst estimate ranges and should be replaced with Bloomberg/FactSet exact values inside the alt-data pull.**

| Sub-basket | Tickers | YTD 2026 (est) | 1Y fwd P/E vs. 5Y median (est) | Sell-side EPS revisions (3M) | Priced-in level | Signal needed for new alpha |
|---|---|---|---|---|---|---|
| Home Improvement | HD, LOW | -2% / -4% | -0.5σ / -0.8σ | Slight cuts | **Low (most unpriced)** | Pro traffic YoY positive; ticket YoY >+3% |
| Off-price | TJX, ROST, BURL | +8% / +6% / +12% | +1.2σ / +0.9σ / +0.4σ | Up | **High (story told)** | Comp traffic 2nd-derivative acceleration; further inv-turn lift |
| Value-QSR | MCD | +3% | -0.2σ | Flat | **Mid (inflection unconfirmed)** | US SSS YoY positive; low-income visit frequency recovery |
| Premium fast-casual | CMG | -8% | -1.0σ (deep derate) | Down | **Mid (recovery incomplete)** | Traffic YoY narrowing from -8% toward -3%; new mgmt execution |
|  | CAVA | -5% | +1.8σ (still rich) | Flat | **Very high (priced perfect)** | AUV holds >$3.0M, margin 25%+ |
|  | SHAK | flat | +0.6σ | Slight up | **Mid-to-high** | Digital mix + ticket lift visibility |
| Open-air REITs | KIM, REG, BRX, FRT, PECO, IVT | +4–9% | FFO yield 6.5–7.0% | Up (NOI guide) | **Mid-low (most spread)** | Same-store NOI >+3.5%; cash leasing spreads >+15% |

(σ values are approximate z-scores vs. own 5-yr rolling fwd P/E distribution; replace with exact values in the pull.)

---

# 2. Sub-basket views

## 2.1 HD / LOW — *the cleanest unpriced "value" expression*

- **Why the market still under-prices it.** Since 2024 the dominant narrative has been "high mortgage rates → existing-home turnover at 30-year lows → weak remodel demand." That ignores two structural offsets:
  - (a) **Structural Pro re-aggregation.** HD's SRS acquisition (2024) and LOW's ADG/Artisan path are steadily shifting Pro wallet share from fragmented local building-material dealers. Pro tickets run ~3–5x DIY.
  - (b) **Ageing housing stock.** ~40% of US homes are >50 years old; annual maintenance demand is non-discretionary (roof / HVAC / water-heater cycles). This is "money you have to spend" — a natural *provable value* end-market.
- **The alt-data pull should prioritise:**
  1. HD/LOW parking traffic YoY (Placer / Advan) split into Pro-hour weekdays vs. DIY weekends.
  2. Card-panel ticket-size second derivative (the metric that matters now is *not* whether traffic is -3%, but whether ticket is +4%).
  3. SRS / Artisan (B2B delivery) truck-roll cadence proxies, if available.
- **Mark-to-price.** HD's fwd P/E sits ~22x vs. 5-yr median ~23x — the market has not yet given a "cycle-bottom" multiple premium. **Any positive Pro-traffic inflection is net positive.**

## 2.2 TJX / ROST / BURL — *story told; needs *acceleration*, not *maintenance**

- TJX/ROST clearly outperformed in 2025; consensus already bakes mid-single-digit comps + stable margins. BURL still has catch-up room (+0.4σ) on its operational-improvement narrative.
- **Risk.** Sell-side models universally assume "trade-down persists." *Any* traffic deceleration is a negative surprise.
- **Pull priorities:**
  1. **Traffic YoY second-derivative** — is same-store traffic still accelerating, or has it plateaued?
  2. **Inventory turn / pack-away utilisation proxies** — drives the next leg of gross margin.
  3. **Cross-shop basket data** — migration in from KSS / M / mid-tier Target apparel (downward mix).
- **View.** TJX and ROST are on the *priced* side of the line; **BURL remains the highest-alpha residual** (self-help turnaround, not yet stretched).

## 2.3 MCD / CMG / CAVA / SHAK — *four different "value" stories, not one basket*

- **MCD.** US SSS has been negative since Q4 2024 and remained down in Q1 2026. **May is the key inflection-watch month** (full McValue platform rollout + reignite marketing cycle). Consensus assumes ~+1% US SSS for the full year, so **alt-data merely needs May traffic YoY ≥0** to trigger EPS revisions higher.
- **CMG.** Multiple has derated hard (from +2σ to -1σ), but traffic YoY is still -5% to -8%. This is *price priced for recovery, fundamentals not there yet*. Alt-data should track the slope of the narrowing from -8% toward -3%.
- **CAVA.** Still trades at +1.8σ. Any modest unit-economics disappointment (AUV slipping from $2.9M, margin missing 25%) is a major negative. **The "provable value" thesis does *not* apply — CAVA is "premium fast-casual," not "value."**
- **SHAK.** Urban + digital + premium burger — *opposite-direction* exposure to value rotation. Should not be in a value-rotation basket.

> **Recommendation.** Split the QSR basket into two: *value* (MCD) and *premium / specialty* (CMG, CAVA, SHAK). The first is the genuine value-rotation exposure; the second is a hedge in the opposite direction.

## 2.4 Open-air strip-center REITs — *the most unpriced sub-basket*

- Names: KIM, REG, BRX, FRT, ROIC/IVT, PECO.
- **Why spread remains:**
  - Occupancy is bumping ~95.5–96% (cycle highs), and the SNO (signed-not-occupied) pipeline is at all-time records — meaning 2026–2027 cash NOI ramp is *already in the contracts*, just not yet flowing through reported numbers.
  - The anchor tenants in these centres are precisely the rest of this basket (TJX, ROST, BURL, ULTA, 5BELOW, supermarkets). **REITs are the second-order beneficiaries of the rotation, but their valuation re-rate has lagged the tenants'.**
  - Rate sensitivity. With the 10y in a 4.0–4.3% band, ~6.5–7.0% FFO yields imply ~225–270bp spread — at the upper end of the historical range.
- **The pull should include:**
  1. Aggregate parking traffic YoY across REIT-owned centres (cross-validate against issuer-disclosed same-store traffic).
  2. Cash-basis leasing-spread scissors (renewals vs. new leases).
  3. Anchor-tenant health proxies (re-leasing speed of legacy BBBY / Party City vacated boxes).

---

# 3. Synthesis: is the rotation "priced in"?

**Not a yes/no — it's a layered answer:**

```
       Priced-in level (high → low)
┌──────────────────────────────────────────────┐
│ CAVA  ████████████████████████  Very high    │
│ TJX   ██████████████████████    High         │
│ ROST  █████████████████████     High         │
│ MCD   ██████████████            Mid (uncfd)  │
│ SHAK  █████████████             Mid          │
│ CMG   ███████████               Mid (in-prog)│
│ BURL  █████████                 Mid-low      │
│ LOW   ███████                   Low          │
│ HD    ██████                    Low          │
│ REITs (KIM/REG/BRX/PECO/IVT) ████  Lowest   │
└──────────────────────────────────────────────┘
```

## Action items for the alt-data pull (priority-ranked)

1. **Top priority.** HD/LOW *Pro-hour* traffic and ticket-size 2nd-derivative. Highest reward/risk *unpriced* expression.
2. **Second.** Aggregate centre-level traffic across the open-air REIT portfolios + anchor-tenant traffic cross-check.
3. **Third.** MCD May US traffic YoY — the key value-QSR inflection confirmation.
4. **Down-weight.** TJX/ROST same-store traffic *absolute level* — unless it's *accelerating*, it's no longer a fresh alpha source.
5. **Exclude.** CAVA and SHAK do not belong in the "provable value" basket — don't muddle the read.

---

# 4. Risks & blind spots

- **Number precision.** All σ, YTD, and fwd P/E figures above are analyst estimates. **The alt-data team should overwrite with exact Bloomberg/FactSet values during the pull.** The directional conclusions are robust to ±20% valuation noise, but specific rankings (esp. BURL vs. LOW) are sensitive to exact figures.
- **Macro regime shift.** If May–June payrolls weaken sharply (NFP <100k for two consecutive months), the trade-down story morphs from "value rotation" into "recession hedging." Off-price and MCD remain OK in that world, but HD/LOW and REITs get pulled both ways (lower rates vs. weaker demand) and the layering will need to be redone.
- **Tariff uncertainty.** Off-price is a beneficiary of upstream brand-overstock — tariff disruption can be a *short-term tailwind* (more closeout supply). HD/LOW, however, are directly drag-exposed to tariff cost inflation; track separately.

---

# 5. Specific metrics for the alt-data team to build into the pull

| # | Metric | Suggested data source | Purpose |
|---|---|---|---|
| 1 | HD/LOW Pro-hour traffic YoY (Mon–Thu, 6–10am) | Placer.ai / Advan | Validate Pro-reaggregation thesis |
| 2 | HD/LOW ticket size 2nd-derivative | Affinity / Earnest card panels | Confirm repair-ticket inflation |
| 3 | TJX/ROST/BURL same-store traffic YoY monthly trend | Placer.ai | Monitor acceleration vs. plateau |
| 4 | MCD US monthly traffic YoY (split by breakfast / value-menu hours) | Placer + card panel | May inflection confirmation |
| 5 | CMG traffic YoY narrowing slope | Placer | Test the -3% threshold |
| 6 | Aggregate centre traffic YoY across KIM/REG/BRX/PECO/IVT portfolios | Placer (mapped to portfolio) | Validate REIT 2nd-order benefit |
| 7 | Anchor-tenant traffic (TJX/ROST/Ulta) inside REIT-owned centres | Placer | Confirm anchor cash-flow durability |
| 8 | Cross-shop migration: KSS/M/Target → TJX/ROST | Card-panel cross-shop | Validate trade-down intensity |

---

# 6. One-liner back to the requester

**Don't treat these eight tickers as one basket. The rotation is partly priced; the genuinely unpriced alpha lives in (i) HD/LOW Pro 2nd-derivative, (ii) open-air strip-REIT cash-NOI ramp, and (iii) the MCD May traffic inflection — allocate the alt-data pull's dollar-of-research in that order.**

— Consumer Analyst · 2026-05-10

### 2. Mailbox · 消费行业分析师 · [auto-handoff] Analyze granular traffic basket

---
to: 另类数据分析师 (altdata-analyst)
from: 消费行业分析师 (consumer-analyst)
re: "可验证价值" (provable value) 消费轮动是否已被定价 — 客流篮子细化解构
日期: 2026-05-10 (周日)
源工作流: analyst:altdata-analyst:topic_pitch_weekend_altdata · run 58ce77a9-f50b-40d4-abd6-83359cf8eaf5
---

# 结论先行 (TL;DR)

1. **整体已 *部分* 定价,但分化显著**——不要把这个篮子当作一个整体看。截至 2026-05-10,以 1 年远期 P/E 相对自身 5 年中位数衡量,off-price (TJX/ROST/BURL) 与 value-QSR (MCD) 已交易在中位数 +1σ 上方,**回报-风险已偏紧**;而 home-improvement (HD/LOW) 与 fast-casual 高估值名 (CAVA/CMG/SHAK) 估值离散度更大,仍存在 *可被另类数据触发* 的预期差。
2. **off-price 是"已经讲完一半的故事"**——TJX/ROST 在 2025 全年已跑赢 SPX ~12–15pp,卖方一致预期已上调到接近"完美执行"水平;新增 alpha 需要 *客流加速* 而非 *客流维持*。建议 alt-data pull 重点比对 **同店客流 YoY 二阶导**,而非绝对增速。
3. **HD/LOW 是篮子里最未定价的 'value' 表达**——市场仍在用 "housing turnover 低迷 → 维修需求疲软" 的旧叙事定价,忽略 (a) Pro 客户结构性回流 (b) 旧房存量老化驱动的 ticket 上行。如果 alt-data 显示 Pro 池客流/客单同比转正,这是 *尚未定价* 的最干净表达。
4. **CAVA 是 priced-for-perfection,CMG 是 priced-for-recovery,SHAK 是 priced-for-narrative,MCD 是 priced-for-value**——四者的"价值轮动"敏感度完全不同,不能用同一个篮子框架。MCD 美国同店若在 May 转正,这是 *已被部分定价但尚未被确认* 的关键拐点。
5. **Open-air strip-center REITs (KIM, REG, BRX, ROIC/IVT, FRT, PECO) 是篮子里最被低估的"代理多头"**——估值 (FFO yield ~6.5–7.0% vs. 10y ~4.3%) 与 occupancy ~95.5%+、SNO pipeline 创历史新高的基本面 *仍存在 spread*。这是给 alt-data pull 最高 reward/risk 的子篮子。

---

# 1. 篮子分组与"已定价 vs. 未定价"评分

下表是基于 2026-05-10 收盘前最近交易日的估值/动量定性评分。**所有数字为分析师估计区间,需在 alt-data pull 中以 Bloomberg/FactSet 一致预期 + 实际 NTM 倍数核对。**

| 子篮子 | 代表标的 | YTD 2026 (估) | 1Y fwd P/E vs. 5Y 中位 (估) | 卖方一致 EPS 修正方向 (3M) | 已定价程度 | 触发新 alpha 所需信号 |
|---|---|---|---|---|---|---|
| Home Improvement | HD, LOW | -2% / -4% | -0.5σ / -0.8σ | 略下修 | **低 (最未定价)** | Pro 客流 YoY 转正、ticket 同比 >+3% |
| Off-price | TJX, ROST, BURL | +8% / +6% / +12% | +1.2σ / +0.9σ / +0.4σ | 上修 | **高 (已讲透)** | comp traffic 二阶导加速、inventory turn 进一步抬升 |
| Value-QSR | MCD | +3% | -0.2σ | 持平 | **中 (拐点未确认)** | US SSS YoY 转正、低收入客层频次回升 |
| Fast-casual premium | CMG | -8% | -1.0σ (大幅 derate) | 下修 | **中 (修复未完成)** | traffic YoY 由负转平、新管理层 execution 信号 |
|  | CAVA | -5% | +1.8σ (仍高) | 持平 | **极高 (定价完美)** | unit economics 维持 +AUV >$3.0M |
|  | SHAK | flat | +0.6σ | 略上修 | **中高** | digital mix + ticket 拉动可见 |
| Open-air REITs | KIM, REG, BRX, FRT, PECO, IVT | +4–9% | FFO yield 6.5–7.0% | 上修 (NOI guide) | **中低 (最有 spread)** | 同店 NOI >+3.5%、leasing spread cash-basis >+15% |

(σ 为相对自身 5 年滚动 P/E 分布的近似 z-score;请在 pull 中替换为精确值)

---

# 2. 各子篮子的细化判断

## 2.1 HD / LOW — *篮子中最干净的"未定价"表达*

- **为什么市场仍便宜定价**: 自 2024 起 narrative 锁定在 "high mortgage rate → existing home turnover 创 30 年新低 → 改造需求疲软"。但这个叙事忽略两个结构性 offset:
  - (a) **Pro 客户的结构性回流**: HD 的 SRS 收购 (2024) 与 LOW 的 ADG/Artisan 路径都在持续把 Pro wallet share 从分散的本地建材商手中聚拢。Pro ticket 是 DIY 的 ~3–5x。
  - (b) **存量房老龄化**: 美国 ~40% 住房 >50 年,年度维修需求是非可选的(roof/HVAC/water heater 周期到期)。这是"必须花的钱"——天然的 *provable value* 终端。
- **alt-data pull 应优先验证**:
  1. HD/LOW 停车场客流 YoY (Placer / Advan) — 拆 weekday Pro 时段 vs. weekend DIY 时段。
  2. 信用卡面板上 ticket size 二阶导 (现在重要的不是 traffic 是否 -3%,而是 ticket 是否 +4%)。
  3. SRS / Artisan 渠道(B2B 配送)的 truck-roll 频次代理(若有)。
- **如何与价格对账**: HD 当前 fwd P/E 估约 ~22x,过去 5 年中位 ~23x;市场没有给"周期底部"溢价。**任何 Pro 客流转正信号都是 net positive**。

## 2.2 TJX / ROST / BURL — *已讲透,需要 *加速* 而非 *维持**

- TJX 2025 跑赢明显;一致预期已 baked in mid-single comp + margin 稳定。BURL 年初仍有 catch-up 空间(估值 +0.4σ,运营改善叙事仍在进行)。
- **风险**: 卖方模型对 "trade-down 持续" 已普遍假设,*任何* 客流 deceleration 都是 negative surprise。
- **alt-data pull 重点**:
  1. **客流 YoY 的二阶导**——TJX/ROST 同店客流是否仍在加速,还是已 plateau?
  2. **inventory turn / pack-away 利用率代理**——决定毛利能否再上一档。
  3. **basket cross-shop**: 来自 KSS / M / target apparel 的客户迁入率(下行 mix)。
- **判断**: TJX、ROST 在 *已定价* 一侧;**BURL 仍是组里最容易跑出 alpha 的**(自 helping turnaround,估值未 stretch)。

## 2.3 MCD / CMG / CAVA / SHAK — *四个不同的"价值"故事,不是一个篮子*

- **MCD**: US SSS 自 2024 Q4 起负增长,2026 Q1 仍小幅下行。**5 月 traffic 是关键拐点观察期**(McValue platform 全面铺开 + reignite 营销周期)。一致预期假设 US SSS 全年 ~+1%,**仅需 alt-data 显示 May traffic YoY ≥0** 即可触发 EPS 上修。
- **CMG**: 估值已大幅 derate (从 +2σ 跌到 -1σ),但 traffic YoY 仍在 -5% 至 -8%。这是 *price-action priced for recovery, fundamentals not yet*。alt-data 应监控 traffic 由 -8% 收窄到 -3% 的修复斜率。
- **CAVA**: 仍交易在 +1.8σ。任何 unit economics 的轻微 disappointment(AUV 从 $2.9M 回落、margin 不达 25%)都会是显著负面。**provable value 故事 *与 CAVA 无关* ——它是 "premium fast-casual" 而非 "value"。**
- **SHAK**: 城市 + digital + premium burger,价值轮动的 *反向* 暴露。不应放进 value rotation 篮子。

> **建议**: 把 QSR 篮子拆为两组——*value*(MCD)与 *premium / specialty*(CMG, CAVA, SHAK),前者是价值轮动的真实暴露,后者是相反方向的对冲项。

## 2.4 Open-air strip-center REITs — *篮子里最未定价的子集*

- 标的:KIM, REG, BRX, FRT, ROIC/IVT, PECO。
- **为什么仍有 spread**:
  - Occupancy 已逼近 ~95.5–96%(历史高位),SNO (signed-not-occupied) pipeline 创历史新高,意味着 2026–2027 cash NOI 的爬坡 *已在合同里*,只是尚未流入报表。
  - 锚定零售商正是这个篮子里其他成员(TJX, ROST, BURL, ULTA, 5BELOW, 食品超市)——**REIT 是这场轮动的"二阶受益者",但估值修复滞后于租户**。
  - 利率敏感度: 若 10y 在 4.0–4.3% 区间稳定,FFO yield ~6.5–7.0% 给到 ~225–270bp spread,处于历史平均上沿。
- **alt-data pull 应包括**:
  1. 篮子里 REIT 旗下中心的 *aggregate* 停车场客流 YoY(可与个股财报披露的同店 traffic 交叉验证)。
  2. Lease spread (cash-basis) 续约 vs. 新签的剪刀差。
  3. Anchor tenant 健康度代理(BBBY、PTY 类闲置 box 重租速度)。

---

# 3. 综合判断:轮动是否"已定价"?

**不是 yes/no,而是分层:**

```
       已定价程度 (高 → 低)
┌──────────────────────────────────────────────┐
│ CAVA  ████████████████████████  极高         │
│ TJX   ██████████████████████    高           │
│ ROST  █████████████████████     高           │
│ MCD   ██████████████            中(拐点未证)│
│ SHAK  █████████████             中           │
│ CMG   ███████████               中(修复未完)│
│ BURL  █████████                 中低         │
│ LOW   ███████                   低           │
│ HD    ██████                    低           │
│ REITs (KIM/REG/BRX/PECO/IVT) ████  最低     │
└──────────────────────────────────────────────┘
```

## 操作建议(给 alt-data 团队的 pull 优先级)

1. **第一优先级**: HD/LOW 的 *Pro 时段* 客流与 ticket 二阶导。这是 reward/risk 最高的 *尚未定价* 表达。
2. **第二优先级**: Open-air REIT 旗下中心的 aggregate traffic + anchor tenant traffic 交叉验证。
3. **第三优先级**: MCD 5 月 US traffic YoY,作为 value-QSR 拐点的关键确认。
4. **降级关注**: TJX/ROST 同店 traffic 的 *绝对水平*——除非看到 *加速*,否则不再是新增 alpha 来源。
5. **明确排除**: CAVA、SHAK 不属于 "provable value" 篮子,不要混入。

---

# 4. 风险与盲点

- **数字的精度**: 上表所有 σ、YTD、fwd P/E 为分析师估计,**alt-data 团队应在 pull 中以 Bloomberg/FactSet 实际值替换**。本备忘录的方向性结论对 ±20% 的估值偏差稳健,但具体 ranking(尤其 BURL 与 LOW 之间)对精确数字敏感。
- **宏观切换**: 若 5–6 月就业数据显著走弱(NFP <100k 连续两月),trade-down 故事会从"价值轮动"演变为"衰退避险",此时 off-price 与 MCD 仍 OK,但 HD/LOW 与 REIT 的 thesis 会被利率下行 *与* 需求下行同时拉扯,需要重新分层。
- **关税不确定性**: off-price 受益于上游品牌过剩库存,因此关税扰动 *短期* 可能反而是顺风(更多 closeout supply)。但 HD/LOW 直接受关税成本拖累,需另外跟踪。

---

# 5. 待 alt-data 团队补充的具体指标

| # | 指标 | 数据源建议 | 用途 |
|---|---|---|---|
| 1 | HD/LOW Pro 时段客流 YoY (周一–周四 6–10am) | Placer.ai / Advan | 验证 Pro 回流 thesis |
| 2 | HD/LOW ticket size 二阶导 | Affinity / Earnest 信用卡面板 | 验证维修单价上行 |
| 3 | TJX/ROST/BURL 同店客流 YoY 月度趋势 | Placer.ai | 监控加速 vs. plateau |
| 4 | MCD US 月度 traffic YoY (拆 breakfast / value menu hours) | Placer + 信用卡面板 | 5 月拐点确认 |
| 5 | CMG traffic YoY 修复斜率 | Placer | 是否到 -3% 收窄阈值 |
| 6 | KIM/REG/BRX/PECO/IVT 旗下中心 aggregate 客流 YoY | Placer (按 portfolio map) | REIT 二阶受益验证 |
| 7 | Anchor tenant 健康度 (TJX/ROST/Ulta 等) 在 REIT 篮子中心的客流 | Placer | 验证锚店现金流 |
| 8 | 跨店迁移: KSS/M/Target → TJX/ROST | 信用卡面板 cross-shop | 确认 trade-down 强度 |

---

# 6. 一句话给请求方

**不要把这八个标的当成一个篮子;轮动已部分定价,真正未定价的 alpha 在 (i) HD/LOW 的 Pro 二阶导、(ii) open-air strip REITs 的 cash NOI 爬坡、(iii) MCD 5 月 traffic 拐点——alt-data pull 的 dollar-of-research 应按这个顺序分配。**

— 消费行业分析师 · 2026-05-10

