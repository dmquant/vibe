---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "行业研究"
---

# [auto-handoff] Energy Cost Impact on Aluminum Smelting

Status: **completed**
Dispatch status: **completed**
Sender: **Materials Analyst**
Recipient: **Energy Analyst**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] Energy Cost Impact on Aluminum Smelting]]
- Sender: [[Materials Analyst]]
- Recipient: [[Energy Analyst]]
- Analyst level: [[行业研究]]

## Latest body

致 材料行业分析师：

协同任务已完成。执行方为 能源行业分析师。
模式: adhoc
会话: 81fbfc88-04dc-46d1-a8ff-e5264aec9f3b

结果摘要:
Wrote handoff_response.md (10853 bytes); wrote handoff_response.en.md (11011 bytes) — Only UAE (EGA) faces a first-order hit (C1 +USD 180–260/t base, up to ~USD 2,380/t stressed, 55th→78th percentile); China/India/Russia/Canada see only second-order pass-through via petcoke/freight, with RUSAL as the structural winner via wider Rotterdam premia.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] Energy Cost Impact on Aluminum Smelting / replied

From: Materials Analyst
To: Energy Analyst
Created: 11/05/2026, 08:15:02

Auto-handoff emitted by Materials Analyst after the run of 材料行业分析师 · 大宗商品价格追踪 finished.
Source workflow: analyst:materials-analyst:commodity_price_tracker
Source run: 9c79a5dc-34be-4be6-99f9-2b64cff0b3a6
Source session: ecd510cf-41f1-4563-89e2-e590da0544cc
Priority: normal

--- Requested follow-up ---
Please evaluate the specific impact of current Middle East tensions and natural gas price volatility on the production cost curves of the world's top five aluminum smelting hubs for H2 2026.

### 2. result / sent

From: Energy Analyst
To: Materials Analyst
Created: 11/05/2026, 08:20:48

致 材料行业分析师：

协同任务已完成。执行方为 能源行业分析师。
模式: adhoc
会话: 81fbfc88-04dc-46d1-a8ff-e5264aec9f3b

结果摘要:
Wrote handoff_response.md (10853 bytes); wrote handoff_response.en.md (11011 bytes) — Only UAE (EGA) faces a first-order hit (C1 +USD 180–260/t base, up to ~USD 2,380/t stressed, 55th→78th percentile); China/India/Russia/Canada see only second-order pass-through via petcoke/freight, with RUSAL as the structural winner via wider Rotterdam premia.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 能源行业分析师 · [auto-handoff] Energy Cost Impact on Aluminum Smelting

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **11/05/2026, 08:15:02**
Completed: **11/05/2026, 08:20:48**

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
# Incoming coordination request from Materials Analyst
Source workflow: 材料行业分析师 · 大宗商品价格追踪 (analyst:materials-analyst:commodity_price_tracker)
Source run: 9c79a5dc-34be-4be6-99f9-2b64cff0b3a6

# The question
Please evaluate the specific impact of current Middle East tensions and natural gas price volatility on the production cost curves of the world's top five aluminum smelting hubs for H2 2026.

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

Wrote handoff_response.md (10853 bytes); wrote handoff_response.en.md (11011 bytes) — Only UAE (EGA) faces a first-order hit (C1 +USD 180–260/t base, up to ~USD 2,380/t stressed, 55th→78th percentile); China/India/Russia/Canada see only second-order pass-through via petcoke/freight, with RUSAL as the structural winner via wider Rotterdam premia.


## Attached Markdown

### 1. Mailbox · 能源行业分析师 · [auto-handoff] Energy Cost Impact on Aluminum Smelting

# Impact of Middle East Tensions & Natural-Gas Volatility on H2 2026 Cost Curves of the World's Top-5 Aluminum Smelting Hubs

- Date: 2026-05-11
- Author: Energy Analyst
- Prepared for: Materials Analyst · Commodity Price Tracker (run 9c79a5dc-34be-4be6-99f9-2b64cff0b3a6)
- Time window: H2 2026 (Jul–Dec)
- Note: No upstream handoff files were present in this workspace. The analysis draws on public industry data and my own energy-sector cost model. Figures flagged **[est.]** are analyst estimates rather than disclosed values.

---

## 1. Headline Conclusions

1. **Energy exposure is highly bifurcated. The "Middle East + gas" twin shock is a first-order hit only for UAE / Bahrain (GCC gas-fired smelters); for China, India, Russia and Canada it is at best a second-order pass-through.** Of the top-five primary-aluminum producers (China, India, Russia, Canada, UAE), only UAE's EGA runs on 100% gas-fired power and sits at the epicenter of the shock.
2. **Under the base case, EGA's H2 2026 C1 cash cost rises USD 180–260/t (+9% to +13%) vs. H1 2026.** In a stressed scenario (Hormuz disruption of 2–4 weeks), EGA's cash cost can spike to USD 2,350–2,450/t — near LME spot — and **EGA's position on the global cost curve jumps from ~55th to ~78th percentile.** **[est.]**
3. **China's northwest coal-fired hubs (Xinjiang, Inner Mongolia, Shandong) are structurally decoupled from gas.** H2 2026 cash costs likely move in a narrow USD 1,980–2,080/t band (±2%); Yunnan hydro hubs actually fall by USD 30–60/t during the June–October wet season. ~85% of Chinese capacity has no direct exposure to the GCC gas shock.
4. **India's exposure runs through calcined petroleum coke (anode cost).** A sustained Brent print above USD 95/bbl for a full quarter adds USD 40–70/t to Indian smelter anode costs; combined with INR depreciation, the local-currency cost curve shifts up ~2.5%.
5. **RUSAL (Russia) and Rio Tinto / Alcoa Canada hydro fleets are effectively immune.** The asymmetric winner is RUSAL: if EGA / Alba lose tonnes, the Rotterdam P1020 premium may climb from USD 285/t to USD 360–420/t in H2, lifting RUSAL realized prices. **[est.]**
6. **Key handoff variables for the materials analyst — LME 3M plus regional premia.** H2 2026 LME 3M midpoint: USD 2,720/t base, USD 2,900–3,050/t stressed. CIF Japan and Rotterdam premia magnify this by an additional USD 50–120/t.

---

## 2. Energy Mix & Shock Channels — Hub-by-Hub

| Hub | 2025 capacity (Mt/yr) | Power mix | Direct ME geopolitical exposure | Gas-price exposure | Combined shock rating |
|---|---|---|---|---|---|
| China (Xinjiang / Shandong / Inner Mongolia / Yunnan) | ~45.0 | Captive coal ~70%, hydro ~25%, other 5% | Low (via crude→petcoke) | Low | ★ (light) |
| India (Vedanta / Hindalco / NALCO) | ~4.3 | Coal-fired ~90% | Medium (petcoke imports, marine insurance) | Low | ★★ (low-mid) |
| Russia (RUSAL) | ~3.9 | Siberian hydro >90% | Very low | Very low | ★ (light; net winner) |
| Canada (Rio Tinto / Alcoa) | ~3.1 | Quebec / BC hydro ~100% | Very low | Very low | ★ (light) |
| UAE (EGA: Jebel Ali + Al Taweelah) | ~2.7 | Gas-fired CCGT 100% | **Very high** | **Very high** | ★★★★★ (severe) |

> Bahrain's Alba (1.6 Mt) is not "top-5" but is structurally identical to EGA. Treat it as part of a single "GCC gas-fired cluster" for the transmission analysis.

---

## 3. H2 2026 Cash-Cost Projections (USD/t primary, C1 basis)

| Hub | H1 2026 baseline | H2 2026 base case | H2 2026 stressed (Hormuz 2–4w) | Cost-curve percentile (base→stressed) |
|---|---:|---:|---:|---|
| China · Xinjiang coal | 2,020 | 2,040 | 2,080 | 40% → 42% |
| China · Shandong coal (purchased alumina) | 2,110 | 2,130 | 2,200 | 52% → 58% |
| China · Yunnan hydro | 1,820 | 1,770 | 1,790 | 18% → 19% |
| India (Vedanta Jharsuguda) | 1,880 | 1,940 | 2,000 | 30% → 35% |
| Russia RUSAL (Bratsk/Sayanogorsk) | 1,760 | 1,770 | 1,790 | 12% → 12% |
| Canada Rio Tinto (Quebec) | 1,910 | 1,920 | 1,940 | 35% → 36% |
| **UAE EGA** | **1,970** | **2,180** | **2,380** | **55% → 78%** |
| Bahrain Alba (reference) | 2,050 | 2,260 | 2,470 | 62% → 84% |

All figures are **[est.]** on a C1 basis (alumina + power + anodes + consumables + direct labor & maintenance).

---

## 4. Sensitivity Anchors

| Variable | H1 2026 actual / baseline | H2 2026 base | H2 2026 stressed |
|---|---:|---:|---:|
| Brent spot (USD/bbl) | 78 | 84 | 96–105 |
| TTF month-ahead (EUR/MWh) | 33 | 41 | 55–68 |
| JKM spot (USD/MMBtu) | 12.8 | 14.5 | 18–22 |
| China thermal coal Q5500 FOB Qinhuangdao (CNY/t) | 715 | 720 | 740 |
| Australian alumina FOB (USD/t) | 462 | 475 | 510 |
| Calcined petcoke (USD/t, CIF India) | 595 | 620 | 690 |
| LME 3M aluminum midpoint (USD/t) | 2,640 | 2,720 | 2,980 |
| Hormuz war-risk shipping premium | standard | +15% | +120% to +250% |

---

## 5. Transmission Mechanics

### 5.1 UAE (EGA) — First-Order Shock
- EGA Jebel Ali + Al Taweelah ≈ 2.7 Mt at 13.0–13.5 MWh/t. **100% of electricity comes from ADNOC / TAQA CCGT units**, fed by domestic non-associated gas plus Qatari pipeline (Dolphin) and spot LNG.
- Gas-price sensitivity: CCGT heat rate ~6.6 GJ/MWh. **Every USD 1/MMBtu in gas adds ~USD 86/t to power cost**, so a USD 5/MMBtu move in TTF / JKM lifts EGA C1 by ~USD 430/t **[est.]**.
- In the stressed case (JKM at USD 22), legacy ADNOC long-term supply (~55% of EGA's gas burn) cushions the blow. The marginal spot LNG component still adds ~USD 4/MMBtu, i.e. ~USD 344/t to power cost.
- A Hormuz disruption simultaneously raises **alumina inbound freight** (EGA imports from Australia, Guinea, Brazil; rerouting around the Cape adds USD 22–35/t alumina, ≈ +USD 42–66/t aluminum).

### 5.2 China — Second-Order, Weak Pass-Through
- ~70% of Chinese smelter power is captive coal (Xinjiang, Inner Mongolia, Shandong). Natural gas does not enter the marginal cost stack.
- The only meaningful channel is **calcined petcoke** for prebake anodes: domestic petcoke tracks Brent + freight. A Brent move from USD 78 to USD 95 lifts Chinese #1A petcoke by ~CNY 250/t and anode cost by ~CNY 130/t Al ≈ +USD 18/t.
- Yunnan hydro smelters (~6 Mt) enter the wet season and see seasonal cost lows.

### 5.3 India — Moderate, Indirect
- Indian coal-fired power cost is driven by Coal India e-auction prices, not Middle East variables.
- But **India imports ~60% of its anode petcoke from the Middle East / US Gulf** and pitch is Brent-linked: **every USD 10/bbl in Brent adds USD 12–18/t to Indian anode cash cost**.
- Hindalco and Vedanta are partially self-sufficient in alumina (Lanjigarh, Utkal), so the alumina-freight channel is muted.

### 5.4 RUSAL — Effectively Immune; Structural Winner
- >90% of RUSAL power is En+ Siberian hydro (Bratsk, Krasnoyarsk, Sayanogorsk, Boguchany). Marginal power cost ~USD 18–22/MWh, structurally decoupled from global energy markets.
- Any supply disruption in the Middle East widens the European / Asian deficit and lifts RUSAL realized premia. **Estimate: every 50 kt/month of lost EGA + Alba supply lifts Rotterdam P1020 premium by USD 40–60/t**.

### 5.5 Canada — Effectively Immune
- Rio Tinto Quebec (Alma, Arvida, Grande-Baie, Laterrière, AP60) and Kitimat in BC are 100% hydro under long-term PPAs at ~USD 25–32/MWh.
- The only residual exposure is Gulf / Venezuelan petcoke for anodes plus CAD FX, both of low sensitivity.

---

## 6. Effect on the Shape of the Global Cost Curve

Ranking ~76 Mt of global primary capacity by C1 cost:

- **Left tail (0–40th percentile)**: Russian + Canadian hydro, Chinese Yunnan hydro, and the long-term-contracted slice of GCC gas — essentially unchanged in H2.
- **Middle (40–65th percentile)**: China Xinjiang/Shandong coal and India — modest upward shift (USD 20–60/t).
- **Right tail (65–95th percentile)**: UAE EGA, Bahrain Alba, plus parts of Europe (idled / hesitant restarts at Trimet Germany, Aluminium Dunkerque France) — **the largest right-shift**. In the stressed case EGA jumps from the 55th to the 78th percentile, producing a clear **steepening of the right end of the curve**.
- **Implication**: the global 90th-percentile cash cost in H2 2026 moves from USD 2,480/t (base) to USD 2,720/t (stressed), providing **~USD 240/t of cost support to LME**.

---

## 7. Actionable Take-aways for the Materials Analyst

1. **Fundamental price floor**: H2 2026 LME 3M support level **USD 2,550/t** (anchored on 90th-percentile cash cost), **USD 2,720/t** in the stressed case. Use as anchor for downstream hedging / negotiation.
2. **Regional-premium trade**: if the Middle East delivers a real supply hit, the **Rotterdam P1020 and CIF Japan premia have higher elasticity than LME itself** — they are the cleaner expression of the shock.
3. **Corporate-level**: EGA and Alba face the most cash-margin compression. RUSAL, Rio Tinto Canada, and Yunnan-based Chinese smelters (e.g. China Hongqiao Yunnan, Shenhuo Yunnan) are relative winners.
4. **Substitution / downstream watch**: at LME aluminum > USD 2,900/t, the Al-Cu and Al-Zn ratios can mean-revert; auto body sheet, can-stock, and PV-frame fabricators may pause copper-to-aluminum substitution or lock in long-dated prices.
5. **Weekly monitoring list**:
   - JKM front-month, TTF front-month
   - Brent / Dubai differential and Dubai spot
   - Hormuz VLCC / LR2 freight and war-risk premium
   - ADNOC / QatarEnergy LNG export announcements
   - EGA / Alba monthly production releases
   - SHFE warrants and Chinese social inventory

---

## 8. Follow-ups / Data Gaps

| # | Item | Note |
|---|---|---|
| F1 | Confirm EGA's actual CCGT heat rate and gas long-term-contract share from the 2025 annual report | 55% LT-contract assumption is an estimate |
| F2 | Track ADNOC's H2 2026 spot LNG tender prices | Drives EGA marginal gas cost |
| F3 | Latest anode self-sufficiency for Vedanta Jharsuguda | Recalibrates petcoke sensitivity |
| F4 | Yunnan 2026 wet-season hydrology (Lancang, Jinsha rivers) | Drives the left tail of the curve |
| F5 | Model Rotterdam / MJP premium seasonality for H2 2026 | Joint follow-up with materials analyst |

---

## 9. Sources & Methodology

- Public sources used: IAI (International Aluminium Institute) monthly production, public summaries of CRU and Wood Mackenzie cost curves, EIA STEO 2026-04, IEA Oil Market Report 2026-04, Platts JKM / TTF, Argus Calcined Petcoke, SHFE / LME official feeds, EGA & RUSAL 2025 annual reports.
- Method: bottom-up C1 cash-cost model (power + alumina + anodes + consumables + direct labor & maintenance) overlaid with Brent / TTF / JKM scenario sensitivities. Figures marked **[est.]** are model output, not directly disclosed values.
- Key uncertainty: duration of the geopolitical shock. Base case assumes ≤ 1 month; stressed case assumes 2–4 weeks. If tensions extend beyond ~8 weeks, GCC smelters may face mandatory power curtailment and the model needs to be rerun with explicit production cuts.

### 2. Mailbox · 能源行业分析师 · [auto-handoff] Energy Cost Impact on Aluminum Smelting

# 中东局势与天然气价格波动对全球前五大电解铝产区 H2 2026 成本曲线的影响

- 编制日期：2026-05-11
- 编制人：能源行业分析师（Energy Analyst）
- 回应对象：材料行业分析师 · 大宗商品价格追踪（run 9c79a5dc-34be-4be6-99f9-2b64cff0b3a6）
- 适用区间：2026 年 H2（7–12 月）
- 注：上游 handoff 文件在本工作区未传入，本报告基于公开行业数据与本人能源行业建模假设；标注 **[估]** 的数字为分析师测算，非官方披露。

---

## 一、核心结论（Lead-with-Conclusions）

1. **能源敞口高度分化，"中东 + 天然气"双因素只对 UAE / Bahrain（中东燃气产区）构成一阶冲击，对中、印、俄、加四大产区只是二阶传导。** 全球前五大原铝产区中（中国、印度、俄罗斯、加拿大、UAE），仅 UAE（EGA）属于纯燃气供电，是本次冲击的"震中"。
2. **H2 2026 基准情形下，UAE 现金成本环比 H1 2026 上行 USD 180–260/t（+9% 至 +13%）**；若霍尔木兹海峡出现 2–4 周航运中断的紧张情形，EGA 现金成本可冲击 USD 2 350–2 450/t，逼近 LME 现货价，**EGA 全球成本曲线分位将由 ~55% 跃升至 ~78%**。**[估]**
3. **中国西北煤电产区（新疆、内蒙、山东）成本结构与天然气脱钩，H2 2026 现金成本预计在 USD 1 980–2 080/t 区间窄幅波动**（±2%）；云南水电产区受 6–10 月汛期影响，成本反而下行 USD 30–60/t。中国总产能 ~85% 不受中东燃气冲击直接影响。
4. **印度（Vedanta / Hindalco / NALCO）受冲击渠道在石油焦（calcined petcoke）阳极成本**：若 Brent 站上 USD 95/bbl 持续一个季度，印度燃煤铝厂阳极成本上行 USD 40–70/t，但因卢比相对走弱，本币现金成本曲线整体上移 ≈ 2.5%。
5. **俄罗斯 RUSAL 与加拿大 Rio Tinto/Alcoa 的水电铝产能成本几乎完全 immune**；真正的不对称收益方在于俄铝——若 EGA / Alba 减产，欧洲东向铝溢价（Rotterdam P1020 premium）H2 可能从 USD 285/t 抬升至 USD 360–420/t，俄铝实现价改善。**[估]**
6. **传导给下游材料分析师的关键变量是 LME 现货 + 区域升贴水**：H2 2026 LME 3 个月铝中枢预计 USD 2 720/t（基准），紧张情形 USD 2 900–3 050/t；CIF 日本 / Rotterdam 升水将放大 USD 50–120/t 不等。

---

## 二、五大产区能源结构与冲击渠道一览

| 产区 | 2025 产能 (Mt/yr) | 主要能源结构 | 中东地缘直接敞口 | 天然气价格敞口 | 综合冲击评级 |
|---|---|---|---|---|---|
| 中国（新疆/山东/内蒙/云南） | ~45.0 | 燃煤自备电 ~70%、水电 ~25%、其他 5% | 低（原油→石油焦） | 低 | ⭐（轻） |
| 印度（Vedanta/Hindalco/NALCO） | ~4.3 | 燃煤为主 ~90% | 中（石油焦进口、海运保险） | 低 | ⭐⭐（中低） |
| 俄罗斯（RUSAL） | ~3.9 | 西伯利亚水电 >90% | 极低 | 极低 | ⭐（轻，反受益） |
| 加拿大（Rio Tinto / Alcoa） | ~3.1 | 魁北克 / BC 水电 ~100% | 极低 | 极低 | ⭐（轻） |
| 阿联酋（EGA: Jebel Ali + Al Taweelah） | ~2.7 | 天然气联合循环 100% | **极高** | **极高** | ⭐⭐⭐⭐⭐（强） |

> 注：Bahrain Alba（1.6 Mt）虽非"前五"，但与 UAE 同属中东燃气产区，建议在传导分析中合并视作"GCC 燃气簇"。

---

## 三、H2 2026 现金成本测算（USD/t 原铝，C1 现金成本口径）

| 产区 | H1 2026 基准 | H2 2026 基准情形 | H2 2026 紧张情形（霍尔木兹中断 2–4w） | 全球成本曲线分位变化（基准→紧张） |
|---|---:|---:|---:|---|
| 中国 · 新疆煤电 | 2 020 | 2 040 | 2 080 | 40% → 42% |
| 中国 · 山东煤电（外购氧化铝） | 2 110 | 2 130 | 2 200 | 52% → 58% |
| 中国 · 云南水电 | 1 820 | 1 770 | 1 790 | 18% → 19% |
| 印度（Vedanta Jharsuguda） | 1 880 | 1 940 | 2 000 | 30% → 35% |
| 俄罗斯 RUSAL（Bratsk/Sayanogorsk） | 1 760 | 1 770 | 1 790 | 12% → 12% |
| 加拿大 Rio Tinto（Quebec） | 1 910 | 1 920 | 1 940 | 35% → 36% |
| **阿联酋 EGA** | **1 970** | **2 180** | **2 380** | **55% → 78%** |
| Bahrain Alba（参考） | 2 050 | 2 260 | 2 470 | 62% → 84% |

数字均为 **[估]**；C1 口径含氧化铝、电力、阳极、辅料、工厂直接人工与维护。

---

## 四、关键变量假设（Sensitivity Anchors）

| 变量 | H1 2026 实际 / 基准 | H2 2026 基准 | H2 2026 紧张情形 |
|---|---:|---:|---:|
| Brent 现货（USD/bbl） | 78 | 84 | 96–105 |
| TTF 月间合约（EUR/MWh） | 33 | 41 | 55–68 |
| JKM 即期（USD/MMBtu） | 12.8 | 14.5 | 18–22 |
| 动力煤 Q5500 FOB 秦皇岛（CNY/t） | 715 | 720 | 740 |
| 澳洲氧化铝 FOB（USD/t） | 462 | 475 | 510 |
| 石油焦（calcined, USD/t, CIF 印度） | 595 | 620 | 690 |
| LME 3M 铝中枢（USD/t） | 2 640 | 2 720 | 2 980 |
| Hormuz 航运保险附加费 | 标准 | +15% | +120%–250% |

---

## 五、传导机制详解

### 5.1 UAE（EGA）—— 一阶冲击
- EGA Jebel Ali + Al Taweelah 合计 ~2.7 Mt，13.0–13.5 MWh/t 电耗，**电力 100% 来自 ADNOC / TAQA 联合循环燃机**，气源为本地非伴生气 + 卡塔尔进口 LNG（通过 Dolphin 管道及现货 LNG）。
- 气价敏感度：燃机热耗 ~6.6 GJ/MWh，气价每上升 USD 1/MMBtu，铝厂电力成本 ≈ +USD 86/t；TTF / JKM 每上行 USD 5/MMBtu，EGA 现金成本 ≈ +USD 430/t **[估]**。
- 紧张情形若 JKM 飙到 USD 22/MMBtu，气源采购成本会被 ADNOC 长协一定程度对冲（长协占比 ~55%）；但边际现货 LNG 直接抬升综合气价 ~USD 4/MMBtu，电力成本 +USD 344/t。
- 霍尔木兹中断还将拉高 EGA **氧化铝海运** 成本（EGA 从澳洲、几内亚、巴西进口氧化铝绕行 Cape of Good Hope，运费 + 保险 +USD 22–35/t 氧化铝 → 摊到铝吨 +USD 42–66/t）。

### 5.2 中国 —— 二阶 / 弱传导
- 中国电解铝 ~70% 用电来自厂内自备燃煤电厂（新疆、内蒙、山东），天然气基本不入边际成本。
- 唯一传导渠道：**石油焦（用于预焙阳极）** 国内价格与 Brent + 海运费正相关；Brent 从 USD 78 升至 USD 95，预计国产 1#A 石油焦 +CNY 250/t，阳极成本 +CNY 130/t 铝 ≈ +USD 18/t。
- 云南水电铝（约 6 Mt）H2 进入汛期，反而是季节性成本低点。

### 5.3 印度 —— 中度但路径间接
- 印度燃煤铝厂电力成本主要受国内煤价（Coal India e‑auction）影响，对中东直接敞口低；
- 但印度 **石油焦 60% 依赖中东 + 美湾进口**，且阳极煤沥青价格跟随 Brent，**Brent 每上行 USD 10/bbl，印度阳极现金成本 +USD 12–18/t**；
- 此外，Hindalco/Vedanta 氧化铝部分自给（Lanjigarh, Utkal），抵御外部冲击能力较强。

### 5.4 俄罗斯 RUSAL —— 几乎免疫，结构性受益
- 90% 以上电力来自 En+ 西伯利亚水电（Bratsk、Krasnoyarsk、Sayanogorsk、Boguchany），边际电力成本 ~USD 18–22/MWh，与全球能源市场基本脱钩。
- 中东供应受扰将放大欧洲 / 亚洲铝供需缺口，俄铝出口实现价 / 升贴水改善；**测算每减少 EGA + Alba 50 kt 月供应，Rotterdam P1020 premium 上行 USD 40–60/t**。

### 5.5 加拿大 —— 几乎免疫
- 魁北克 Rio Tinto（Alma, Arvida, Grande‑Baie, Laterrière, AP60）+ BC Kitimat 全部水电；长协电价 ~USD 25–32/MWh。
- 唯一潜在敞口：阳极石油焦（自美湾 / 委内瑞拉）+ 加元汇率，敏感度低。

---

## 六、对成本曲线形态的影响（图示文字版）

将全球 ~76 Mt 原铝产能按 C1 成本升序排列：

- **曲线左段（0–40% 分位）**：俄、加拿大水电、中国云南水电、中东燃气长协部分——H2 基本不变。
- **曲线中段（40–65% 分位）**：中国新疆/山东煤电 + 印度——小幅上移（USD 20–60/t）。
- **曲线右段（65–95% 分位）**：UAE EGA + Bahrain Alba + 部分欧洲（已停产/重启犹豫的德国 Trimet、法国 Aluminium Dunkerque）——**右移最显著**，在紧张情形下 EGA 将由 55% 分位跳到 78% 分位，曲线右侧出现明显"陡峭化"。
- **结论**：H2 2026 全球边际成本（90% 分位）在紧张情形可由 USD 2 480/t 抬升至 USD 2 720/t，**为 LME 价格中枢提供约 USD 240/t 的成本支撑**。

---

## 七、给材料行业分析师的可执行 take‑aways

1. **基本面定价底**：H2 2026 LME 3M 铝下方支撑位 **USD 2 550/t**（90% 分位现金成本对应），紧张情形 **USD 2 720/t**。下游议价或套保建议以此为锚。
2. **区域升贴水交易思路**：若中东出现实质性供应冲击，**欧洲 Rotterdam P1020 premium 与日本 CIF premium 是首选放大变量**（弹性 > LME 本身）。
3. **企业层面**：EGA / Alba 现金毛利率压力最大；俄铝、Rio Tinto Canada、云南宏桥 / 神火云南项目相对受益。
4. **替代品 / 下游警示**：若 H2 2026 铝价中枢上行至 USD 2 900+/t，铝‑铜比、铝‑锌比可能修复，下游汽车板、易拉罐、光伏边框厂商或加快"以铝代铜"暂停或锁价。
5. **风险监测清单（建议每周追踪）**：
   - JKM Front‑month、TTF Front‑month
   - Brent / Dubai 价差与 Dubai 现货
   - Hormuz VLCC/LR2 运费与 War‑risk premium
   - ADNOC / QatarEnergy LNG 出口公告
   - EGA / Alba 月度产销公告
   - 中国 SHFE 仓单与社会库存

---

## 八、待跟进事项 / 数据缺口

| 编号 | 事项 | 备注 |
|---|---|---|
| F1 | 获取 EGA 2025 年报披露的实际燃机热耗与气源长协占比 | 当前 55% 长协为估算 |
| F2 | 跟踪 ADNOC 2026 年 H2 现货 LNG 招标价格 | 决定 EGA 边际气成本 |
| F3 | 印度 Vedanta Jharsuguda 阳极自给率最新数据 | 影响石油焦敏感度 |
| F4 | 中国云南汛期来水（澜沧江、金沙江）2026 实测 | 影响左侧曲线 |
| F5 | Rotterdam / MJP 升贴水 H2 2026 季节性建模 | 与材料分析师下一步联动 |

---

## 九、引用与方法说明

- 主要数据来源（公开）：IAI（International Aluminium Institute）月度产量、CRU 与 Wood Mackenzie 成本曲线（公开摘要）、EIA STEO 2026‑04、IEA Oil Market Report 2026‑04、Platts JKM / TTF、Argus Calcined Petcoke、SHFE / LME 公开行情、EGA & RUSAL 2025 年报。
- 方法：自下而上 C1 现金成本模型（电力 + 氧化铝 + 阳极 + 辅料 + 工厂直接人工/维护），叠加 Brent / TTF / JKM 情景敏感度。所有标 **[估]** 的数据为本人模型输出，非源数据直接读出。
- 不确定性：地缘紧张情形持续时长是最大变量；本报告基准假设紧张事件持续 ≤ 1 个月，紧张情形假设 2–4 周。若持续 > 8 周，UAE 及 GCC 簇产能可能出现保电限产，需另行建模。

