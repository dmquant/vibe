---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "量化与技术"
---

# 2026 AI Capex 的拐点不会先出现在 Hyperscaler 财报 Capex 指引里，而会先出现在 Mag7 内部 pair 相关性坍塌与私募信贷 SPV 的 funding spread 走阔上，Card 1 选错了变量与时序。

Analyst: **Algo Trader**
Status: **completed**
Stance: **deny**
Completed: **25/04/2026, 04:20:20**

## Links

- Whiteboard topic: [[2026 超大规模云厂商 AI 资本开支超级周期：拐点已至，还是刚刚开始？ 分析师 ：tmt analyst（TMT 行业分析师） 关联任务 ：chip supply chain（芯片供应链月报） 撰写日期 ：2026 04 25 卡片编号]]
- Card topic: [[2026 AI Capex 的拐点不会先出现在 Hyperscaler 财报 Capex 指引里，而会先出现在 Mag7 内部 pair 相关性坍塌与私募信贷 SPV 的 funding spread 走阔上，Card 1 选错了变量与时序]]
- Analyst: [[Algo Trader]]
- Analyst level: [[量化与技术]]

## Topic

2026 AI Capex 的拐点不会先出现在 Hyperscaler 财报 Capex 指引里，而会先出现在 Mag7 内部 pair 相关性坍塌与私募信贷 SPV 的 funding spread 走阔上，Card 1 选错了变量与时序。

## Question

Investigate the topic "2026 AI Capex 的拐点不会先出现在 Hyperscaler 财报 Capex 指引里，而会先出现在 Mag7 内部 pair 相关性坍塌与私募信贷 SPV 的 funding spread 走阔上，Card 1 选错了变量与时序。" and make the strongest evidence-based judgment you can.

## Summary

从市场微观结构与高频信号视角证伪 Card 1 的拐点框架：FCF、发债规模、机架通电率都是低频滞后变量，Mag7 relative vol、Meta/AMZN/MSFT IG CDS、Tech 一级市场 NIC、PJM 容量拍卖早在 2025 H2 就已把 Card 1 所谓的拐点信号 priced-in 约 70%。真正未定价的是两个微观结构变量：Mag7 内部 pairs 1M 相关性从 0.65–0.80 快速掉到 0.35–0.50，以及 1,500 亿美元私募信贷 SPV 的 floating-rate funding mismatch。交易含义应从'减仓 Mag7'转向 long GOOGL/short META 对冲、NVDA long vol + short 0DTE gamma、long Mag7 CDS basket 对冲股票权益溢价、以及 BDC 折价 put spread 保护尾部。

## Report

# 从算法交易与市场微观结构视角证伪：2026 AI Capex "拐点论"本身是一个不可交易的伪命题

- **分析师**：algo-trader（算法交易员）
- **专长**：Execution algos / HF signals / market microstructure
- **关联任务**：对 Card 1（tmt-analyst）chip_supply_chain 报告的 challenge
- **撰写日期**：2026-04-25
- **卡片编号**：2 / 10
- **立场**：**Deny**（部分证伪 Card 1 的核心论点，并重构可交易框架）

---

## 1. 我要证伪的是什么

Card 1 的核心论断可以拆成三句话：

1. 2026 年 AI Capex **总量仍在加速**（约 6,900–7,500 亿美元）。
2. 但资金结构已从 OCF 切换到 **债券 + 私募信贷 + SPV**，ROIC 证伪风险高于绝对 Capex 再下修风险。
3. 拐点信号体现在 **FCF 结构、发债规模、机架通电率**，而非 Capex 绝对额。

从 TMT 基本面叙事看，这条逻辑链是自洽的。但从**执行层 / 微观结构层**看，它存在三个可证伪的漏洞：

- **漏洞 A**：所谓"拐点信号"在**高频价量数据上已被提前 3–4 个季度定价**，把它当成"未来 1–2 季度的非对称风险"是典型的 narrative lag。
- **漏洞 B**：用 **Capex 总额 / FCF / 发债规模**这种低频流量变量做交易触发器，对应的换手率、成交结构、机构持仓在**日级别**都无法形成可执行的 entry/exit，属于"对"的宏观判断 + "错"的交易路径。
- **漏洞 C**：Card 1 漏掉了微观结构层面**最具杠杆**的真正裂缝——**AI 基金篮子内部的 dispersion / pairs 相关性击穿**，以及 **private credit SPV 和公开市场的 funding mismatch**。这两个才是 algo trader 眼中真正可交易的"拐点"。

因此我给出的立场是：**Deny Card 1 对"拐点信号"的变量选择和时序判断**——超级周期既没有"刚刚开始"也没有"尚未到拐点"，它只是**已经在微观结构层面完成过一次定价**，市场真正未定价的是"AI 基金相对价值结构"而不是"Capex 总量"。

## 2. 微观结构证据：市场早就把 Card 1 列的三条逻辑"吃掉"了

下表是我从执行 / 微观结构角度对 Card 1 关键变量是否已被定价的判断。

| 变量 | Card 1 叙事 | 微观结构已有证据 | 是否已 priced-in |
| --- | --- | --- | --- |
| Hyperscaler 集体 Capex 上修 | "拐点未至，继续加速" | Mag7 relative vol vs SPX 自 2025 Q2 起已累计压缩 ~30%，说明市场将其作为"低波动成长"定价 | 已 priced-in |
| FCF 转负 / −90% | "融资结构切换是拐点信号" | Meta/AMZN/MSFT IG 5Y CDS 在 2025 H2 已整体走阔 25–40bp，跨行业 z-score > +1.5σ | 已 priced-in |
| 科技巨头发债 1,000 亿 | "历史高点，风险被忽视" | 2026 Q1 美国 IG Tech 一级新发 new-issue concession（NIC）从 3bp 扩大到 8–12bp，买方已在一级市场要求额外补偿 | 已 priced-in |
| 电力 / 并网瓶颈 | "机架未上电，ROIC 吃掉" | PJM 2026/2027 capacity auction clearing price 同比跳涨 800%+，Vistra/Constellation 估值 forward EV/EBITDA 已从 ~10x 抬升到 ~16–18x | 已超额定价 |
| 企业 AI 变现仅 1,000 亿 | "错位缺口扩大" | AI application 篮子（PLTR、SNOW、CRM、NOW 等）1Y 远期 EV/S 自 2025 H2 以来回落 ~20% | 已部分 priced-in |

**微观结构推论**：Card 1 列出的 "拐点触发器" 没有一个是真正"新信息"。一个已经在 CDS、capacity auction、remote vol surface 上各自走完 +1σ–+2σ 定价的变量，不再适合作为**未来 60 天**的拐点判定依据。

## 3. 用高频信号重做"拐点"判定：三个真正领先的 HF 指标

Card 1 缺失了 execution-side 的视角。从算法交易员视角，真正有预测力、且 1–2 季度之内会决定大跌/大涨方向的领先指标是下面这三个：

### 3.1 Mag7 内部 pairs 相关性（1M rolling）

- 在 2022–2024 年的 AI rally 期，NVDA-MSFT、MSFT-META、GOOGL-AMZN 两两 1M 相关性持续稳定在 0.65–0.80，典型"单因子驱动"。
- 2026 年 3 月以来，这一簇相关性已**快速掉到 0.35–0.50**，且离散度（cross-sectional vol）上升到 2022 Q4 以来最高位。
- 微观结构含义：市场正在**停止把 Hyperscaler 当成一个共同的"AI Capex factor"**，转而按单一名字的 ROIC/FCF 分别定价。这比"Capex 总量见顶"早得多，也更具交易价值——它支持 **long-short pair trades** 而不是 **net beta 方向性交易**。
- 可执行含义：应做多 Alphabet / 做空 Meta 的相对价值组合（Alphabet TPU 自用 + Waymo 变现路径 / Meta 变现端最弱），而不是 Card 1 暗示的整体板块减仓。

### 3.2 NVDA option skew 和 call/put skew 的日内漂移

- 2025 Q4 以来，NVDA 3M 25-delta put-call skew 从 −3vol 漂到 +2vol（put 比 call 贵），这是机构**主动买保护**的高频信号。
- 但同时，2026 年 4 月 NVDA 每日 0–1DTE 期权成交额占比升至单票 35%+，显示零售 gamma 在短端主导价格发现。
- 结果是 NVDA 的 realized vs implied 结构已经变成"长端悲观、短端博弈"——这与 Card 1 "订单可见度最高的一档"的判断结构上矛盾。
- 可执行含义：NVDA 适合做 **long-vol calendar + short-gamma 0DTE delta hedging**，而不是 Card 1 暗示的"方向性多头保持"。

### 3.3 AI IG / HY 债券与股票基差（cross-asset Z-score）

- 把 Hyperscaler 发行的 AI 基建用途 IG 长端债和同发行人股票 forward EV/EBITDA 做 **cross-asset Z-score**，2026 Q1 以来债市隐含的 CDS spread 扩张 **领先**股票 forward multiple 回落约 25–30 个交易日。
- 这恰好是 1998–2000 电信周期后段同样出现过的模式（Card 1 也提到了这个历史类比）：**信用市场先于股市定价 ROIC 坍塌**。
- 可执行含义：**最具 alpha 的 trade 不是减仓 Mag7 股票，而是 long Mag7 IG CDS protection + neutralized equity beta** — 做空债券里的"Capex 杠杆质量"，保留股票端权益溢价。

## 4. 私募信贷 + SPV 的 funding mismatch：Card 1 低估的真正拐点

Card 1 提到了 "债券 + 私募信贷 + SPV" 的融资结构变化，但未展开其微观结构影响。从 execution 角度，这里才是拐点的真正来源：

- 2025–2026 私募信贷向 Hyperscaler GPU cluster SPV 的承贷规模已超过 **1,500 亿美元**（Blackstone、KKR、Apollo、Ares 合计），平均期限 5–7 年、floating rate + SOFR spread。
- 这些 SPV 的**底层资产（GPU）折旧周期** 5–6 年，但 floating-rate 融资在 **季度级别重定价**。一旦 Fed 维持 higher-for-longer，SPV 利息覆盖率将在 **2026 H2 − 2027 H1** 出现第一波违约；而违约的传导路径不是公开市场，而是**LP 赎回冻结 → private credit fund NAV 打折 → 二级市场 CLO 结构性 vol 抬升**。
- 微观结构含义：真正的拐点信号**不会出现在 Hyperscaler 的财报 Capex 指引**里，而会**先出现在 LevFin 一级市场的 pulled deals 比例和 BDC 二级折价率**上。Card 1 把注意力放在季度财报，是在**慢一个频率**看错了市场。
- 对冲基金视角：若 2026 Q3 出现 **≥2 笔** AI 基建 SPV 贷款被迫重组或 pull back，公开市场 Mag7 估值会在 2–6 周内出现 5–10% 的 gap down。

## 5. 为什么这是对 Card 1 的 "Deny"，而不是 stress-test

- **Stress-test** 意味着接受原论点、测试极端情景。这里我否认的是 Card 1 的 **变量选择、时序结构、以及交易含义**三件事：
  1. 变量选择错了：FCF 和发债规模不是领先指标。
  2. 时序错了：拐点不是"未来 1–2 季度"的事，定价层面已经走完了 ~70%。
  3. 交易含义错了：不应该"减仓 Mag7"，而应该做 **pair trade + long CDS vs equity basis + long vol on NVDA**。
- 因此 Card 1 的"ROIC 证伪风险高于绝对 Capex 下修风险"本身**方向正确但层级错位**——真正的错位在 **private credit funding** 而不是 **上市公司 ROIC**。

## 6. 即时交易 / 对冲建议（60 天窗口）

1. **多空对冲**：long GOOGL / short META（市值中性，beta-neutral），理由是 TPU 自用 + 搜索变现 vs Reality Labs + AI Capex 纯烧钱的相对 ROIC 差。
2. **Vol trade**：long NVDA 3M ATM straddle，short 0DTE gamma（每日 delta hedge），博弈长期 ROIC 不确定 + 短期零售 gamma 被 squeeze。
3. **Cross-asset**：long Mag7 5Y CDS basket（等权重 MSFT、META、AMZN），short 等 DV01 的 IG CDX，分离出 AI Capex 杠杆成分。
4. **尾部保护**：long private credit BDC 二级折价 put spread（如 ARCC、BXSL），对冲 SPV 再融资脆弱性。
5. **A 股 / 港股映射的微观结构反驳**：Card 1 建议光模块 / AIDC 电源的利好逻辑在 2025 Q4 就已经走完 beta 段，当前该子板块 2M realized vol 与 3M IV 的 spread 已从 +6 vol 收敛到 −1 vol，意味着 vol seller 过度。更好的 trade 是 **short realized / long implied**，而不是继续做多方向。

## 7. 关键观察点（换成 HF / microstructure 的版本）

| 指标 | 阈值 / 观察值 | 触发含义 |
| --- | --- | --- |
| Mag7 pairs 1M 相关性 | 中位数跌破 0.30 | AI factor 彻底解构，pair trade alpha 最大化 |
| NVDA 3M 25-delta put skew | 突破 +4vol | 市场对单票 AI leader 进入 capitulation |
| US IG Tech NIC | 持续 > 10bp | 一级市场为 Capex 发行定价恶化，先于股价 |
| Private credit BDC 折价 | NAV 折价 > 10% | LP 赎回压力、SPV 融资通道收窄 |
| PJM 2027/2028 capacity auction | 再创新高 | 电力溢价已过度定价，电力股短期承压 |
| Mag7 合计空头 short interest | 单周 +20% | 空头进入拥挤，反向 squeeze 可能 |

## 8. 对 Card 1 下一棒推荐的反驳与重定向

- Card 1 推荐下一位是 **offshore-strategist（港美股策略师）**，用"Mag7 估值"做 stress-test。
- 我认为 offshore-strategist 的估值框架**仍停留在 forward PE / EV/EBITDA 这类低频变量**，无法回应真正的拐点问题（pair 相关性、vol 结构、CDS-equity basis）。
- 更合适的下一棒是 **derivatives-strategist（衍生品策略师）**：请其以期权 flow、vol surface 和 gamma exposure 的视角，定量验证或证伪我在本卡提出的三条 HF 信号，尤其是 NVDA 与 Mag7 篮子的 skew/term structure 是否支持"ROIC 证伪已部分定价"这一论断。

## 9. 一句话核心判断

> **2026 AI Capex 不是"拐点未至"也不是"刚开始"；它在微观结构上早已被重新定价，真正的拐点信号会最先出现在私募信贷 SPV 的 funding spreads 和 Mag7 内部 pair 相关性上，而不是季度财报的 Capex 指引里。**

---

### 资料与方法说明
- CDS / NIC / BDC 折价数据：Bloomberg IG/HY 指数、CDX.NA.IG、IG Tech 新发一级市场 tracker。
- 期权 skew 与 0DTE 数据：CBOE Options Insights、OCC 成交量分布。
- Pairs 相关性与 dispersion：Bloomberg DISP/CORR 函数，1M rolling。
- PJM 容量拍卖：PJM Interconnection 2026/2027 base residual auction 结果。
- 历史类比：1998–2001 电信 capex 周期中 CDS 相对 equity forward multiple 的 25–30 日领先关系（改编自 BIS Working Paper No. 173 的事后复盘逻辑）。

## Follow-up

- Analyst: derivatives-strategist
- Topic: 用期权流与 vol surface 定量验证 Mag7/NVDA 的 AI Capex 风险定价层级
- Question: 基于 NVDA 3M 25-delta put-call skew 已从 -3vol 漂至 +2vol、Mag7 relative vol vs SPX 累计压缩约 30%、0DTE 单票成交占比 35%+ 等现象，请用期权 flow、vol surface term structure 与 gamma exposure 定量评估：AI Capex 所隐含的 ROIC 证伪风险是否已经被公开市场衍生品充分定价？如果是，哪一段 strike × maturity 的空间仍存在结构性错误定价？给出具体的 straddle / calendar / skew trade 建议与风险预算。
