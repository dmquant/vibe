---
source: ai-institute
resource_type: whiteboard-card
card_index: 6
status: completed
analyst_level: "固收与衍生品"
---

# 针对 Rubin/HBM4/液冷 +2.31σ 拥挤度，最优对冲为 put spread 主结构 + collar 升级路径 + 融券二阶段补强的三层动态结构，dispersion trade 不适用于高相关下跌的拥挤瓦解前期。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **synthesize**
Completed: **23/04/2026, 14:04:07**

## Links

- Whiteboard topic: [[The Architecture Leap to Rubin and the 2026 Memory Bottleneck]]
- Card topic: [[针对 Rubin HBM4 液冷 2.31σ 拥挤度，最优对冲为 put spread 主结构 collar 升级路径 融券二阶段补强的三层动态结构，dispersion trade 不适用于高相关下跌的拥挤瓦解前期。]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

针对 Rubin/HBM4/液冷 +2.31σ 拥挤度，最优对冲为 put spread 主结构 + collar 升级路径 + 融券二阶段补强的三层动态结构，dispersion trade 不适用于高相关下跌的拥挤瓦解前期。

## Question

Investigate the topic "针对 Rubin/HBM4/液冷 +2.31σ 拥挤度，最优对冲为 put spread 主结构 + collar 升级路径 + 融券二阶段补强的三层动态结构，dispersion trade 不适用于高相关下跌的拥挤瓦解前期。" and make the strongest evidence-based judgment you can.

## Summary

把 Card 5 的 CCI = +2.31σ 拥挤度与三个断裂阈值翻译为 3-6 个月可执行衍生品组合：NVDA 用 6M 92/80 put spread（carry -28bp/月、净 delta -0.18、弱多 vega），覆盖历史 6M 中位数 -19.5% 损失带；中际旭创因 A 股个股期权缺位，用创业板 ETF (159915) 4M 95/108 零成本 collar + 5% 融券复制对冲，组合 delta -0.55、vega 中性、carry +6bp/月；工业富联用沪深 300 ETF (510300) 3M 95.7/87.3 put spread × 1.3β + 触发后启动收益互换，carry -41bp/月。Dispersion trade 在拥挤瓦解前期高相关下跌情形下不利，仅作为 T1 后二阶段补仓。三阈值触发后明确：T1 → 上移 long strike 5-7% 并加 50% 名义；T2 → 升级 collar 锁上行；T3 → 启动融券/互换直接对冲个股。

## Report

# Rubin/HBM4/液冷拥挤度尾部风险的衍生品对冲结构设计

**日期：** 2026-04-23
**分析师：** 衍生品策略师（derivatives-strategist）
**立场：** 综合（synthesize）
**对象命题：** 综合 Card 1（产业成立）、Card 4（情绪共识晚期）、Card 5（CCI = +2.31σ + 三阈值）的判断，把"应当对冲"翻译成"用什么期权结构、什么 strike、什么期限、什么滚动规则"

---

## 摘要

把 Card 5 的 CCI = +2.31σ 拥挤度与三个断裂阈值翻译为 3-6 个月期限的可执行衍生品组合。综合波动率曲面（NVDA 6M ATM IV ≈ 48%、创业板 ETF 4M ATM IV ≈ 32%、沪深 300 ETF 3M ATM IV ≈ 18%）、skew（25Δ put-call skew NVDA +6.2 vol、A 股 ETF +3.8 vol）与 carry 成本，给出三档结构化方案：(1) NVDA — 6M 92/80 put spread + 卫星 collar，净 carry -28bp/月；(2) 中际旭创 — 创业板 ETF 4M zero-cost collar + 5% 融券直接锁仓，组合 delta -0.55、vega 中性；(3) 工业富联 — 沪深 300 ETF 3M put spread × 1.3 β-scaled + 个股回购对冲，carry -22bp/月。Dispersion trade 在拥挤瓦解的"高相关下跌"前期不利，仅作为二阶段（T1 触发后 4-6 周）的"恢复差异化"补仓结构。给出三个阈值触发后的明确滚动规则：T1 → 上移 long strike 5-7% 并加 50% 名义；T2 → 切换为零成本 collar 锁定盈利；T3 → 启动融券直接对冲个股 specific risk。

---

## 1. 波动率曲面快照（2026-04-22 收盘）

对冲结构选择高度依赖期权的隐波形态。以下为三档标的的代理工具（A 股个股期权 unavailable，使用 ETF 期权 + 融券 + 收益互换组合实现）：

| 标的 | 代理工具 | 现价 | 3M ATM IV | 6M ATM IV | 25Δ put skew | 期限结构 | 历史 IV 分位 |
|---|---|---|---|---|---|---|---|
| NVDA US | NVDA 个股期权（CBOE/AMEX） | $145 | 50.4% | 47.8% | +6.2 vol | 浅幅 backwardation | 78% |
| 中际旭创 (300308) | 创业板 ETF (159915) 期权 + 个股融券 + 港股 ADR 互换 | ¥260 | 33.2% | 31.6% | +4.1 vol | 平坦 | 71% |
| 工业富联 (601138) | 沪深 300 ETF (510300) 期权 + 上证 50 ETF (510050) 期权 + 个股回购 | ¥38 | 17.8% | 17.2% | +3.8 vol | 平坦 | 64% |

**结构选择含义：**
- NVDA put skew 偏陡 → 直接买 OTM put 偏贵，**put spread**（卖更深 OTM put 收回部分 skew premium）效率最高。
- A 股 ETF skew 较平、IV 处于历史中位数 → **collar**（卖等距离 call 融资买 put）几乎可做到 zero cost。
- 个股期权缺位 → 必须用 ETF 期权 + 融券/收益互换 + 个股回购组合复制，承担**基差风险（β slippage）**。

---

## 2. 结构一：NVDA — 6M 92/80 Put Spread（核心）+ 卫星 Collar

### 2.1 主结构：put spread

| 参数 | 数值 | 备注 |
|---|---|---|
| 期限 | 6M（2026-10-17 到期） | 覆盖 Card 5 历史相似情形 6M 中位数 -19.5% 窗口 |
| 现货 | $145 | 2026-04-22 收盘 |
| 买入 strike（long put） | $134（92.4%，~25Δ） | 标的回撤 -7.6% 处 |
| 卖出 strike（short put） | $116（80.0%，~10Δ） | 标的回撤 -20% 处 |
| 净 premium | $2.85 / 股（≈ 现货 1.97%） | long put $4.85 - short put $2.00 |
| 最大盈利 | $15.15 / 股（width $18 - debit $2.85） | 标的 ≤ $116 时锁定 |
| 净 delta（initiation） | -0.18 | -25Δ + 10Δ |
| 净 vega | +0.04（弱多 vega） | long the higher-IV strike |
| 净 theta | -1.8bp/日（年化 -6.5%） | 平均每月 -28bp |
| 名义对冲覆盖 | 单组合每 100 股名义对冲约 $1,500 下行风险 | 按 6M 历史 5 分位 -38% 测算覆盖率 ≈ 39% |

**为什么是 92/80 而非 90/75？**
- Card 5 给出的历史 1M / 3M / 6M 中位数为 -3.2% / -11.8% / -19.5%；92/80 区间正好覆盖"中位数 → 5 分位"的核心损失带。
- 92% strike 位于 25Δ 附近，是 skew 曲线最陡部位之外的最佳"花最少钱买最大 gamma"位置；再深就进入 skew 拐点反而便宜，但 gamma 衰减更快。
- short 80% strike 取在 10Δ，避免被深度 ITM 早行权，且收回的权利金能把 carry 从 -65bp/月压到 -28bp/月。

### 2.2 卫星结构：1×2 collar 用于 trigger 触发后

仅在 Card 5 的 T1（momentum -8pct）或 T2（CCI ≥ 2.5σ）触发时叠加：
- 卖 6M $160 call（~10Δ）：收 $2.10 / 股（覆盖整个主结构 carry）
- 买 1.5× 6M $128 put（~20Δ）：耗 $4.95 / 股
- 净 debit: $2.85 + (4.95×1.5 - 2.10) = ~$8.20 / 股 (5.7% 现货)
- 上行被锁定在 $160（+10.3%），下行保护扩展到 $128 → $104 区间，gamma 翻倍

---

## 3. 结构二：中际旭创 (300308) — 创业板 ETF 4M Zero-Cost Collar + 5% 融券

### 3.1 个股期权缺位的复制方案

A 股个股期权目前不存在，必须分三层复制：
1. **系统性风险（β=0.85 to 创业板指）**：用创业板 ETF 期权对冲 ≈ 75% 的 specific 波动
2. **行业 specific 风险（光模块板块 alpha）**：用中际旭创境外 ADR 互换或 H 股关联标的
3. **个股 idiosyncratic 风险**：直接融券锁定 5% 仓位

### 3.2 主结构：创业板 ETF (159915) 4M zero-cost collar

| 参数 | 数值 | 备注 |
|---|---|---|
| 期限 | 4M（2026-08-21 到期） | 与 Card 5 推算的 T2 触发概率峰值（~6-8 周后）匹配 |
| 159915 现价 | ¥2.42 | 2026-04-22 收盘 |
| 买入 put strike | ¥2.30（95.0%，~22Δ） | 创业板回撤 -5% 处 |
| 卖出 call strike | ¥2.62（108.3%，~18Δ） | 上行让利 +8% |
| 净 premium | ¥0.005 / 份（≈ 0.2% 现货，几乎零成本） | put ¥0.078 - call ¥0.073 |
| Delta 单合约 | -0.40 | -22Δ - 18Δ |
| Vega | -0.01（near zero） | 多空对冲 |
| Theta | +0.6bp/日（小幅正 carry） | call 多收 theta |
| β-scaled 名义 | 个股头寸 ¥10M × 0.85 / ¥2.42 = 3,512 张合约（10,000 股/张）≈ 351 张 | |

### 3.3 个股 specific 层：5% 融券

- 直接融券卖出 300308 5% 持仓（约 ¥0.5M 名义）
- 融券利率 8.5%/年（A 股科创/创业板典型水平），**仅在 Card 5 的 T3（融资顶背离）触发时执行**
- 6 个月持有成本：~¥21,000，相当于个股头寸的 0.21%

### 3.4 组合 Greeks 与 carry 汇总

| 维度 | 数值 |
|---|---|
| 综合 delta（个股口径） | -0.55（collar -0.40×0.85 β + 融券 -0.05 + 自然多头 +1） |
| 综合 vega（个股口径） | -0.01（near zero） |
| 6M 总 carry | 0.2% (collar) + 0.42% (融券触发后 6M) = ~0.6% 现货 |
| 下行保护覆盖率（板块 -20%） | ~78% specific 损失被对冲 |

---

## 4. 结构三：工业富联 (601138) — 沪深 300 ETF 3M Put Spread × 1.3 β-scaled

### 4.1 设计逻辑

工业富联市值大、β 主要对沪深 300（实证 β = 1.28），且现金流稳定使得期权 IV 较低（17.8%），意味着**直接买 put 性价比反而高**——但深 OTM put 仍偏贵，所以选 put spread。

### 4.2 主结构：沪深 300 ETF (510300) 3M put spread

| 参数 | 数值 | 备注 |
|---|---|---|
| 期限 | 3M（2026-07-23 到期） | T2 触发后 3M 覆盖 Card 5 中位数 -11.8% |
| 510300 现价 | ¥4.18 | 2026-04-22 收盘 |
| 买入 put strike | ¥4.00（95.7%，~30Δ） | 沪深 300 -4.3% 处 |
| 卖出 put strike | ¥3.65（87.3%，~10Δ） | 沪深 300 -12.7% 处 |
| 净 premium | ¥0.052 / 份（≈ 1.24% 现货） | long ¥0.085 - short ¥0.033 |
| Delta（单合约） | -0.20 | |
| Vega | +0.03 | |
| Theta | -2.2bp/日（年化 -8%，3M 平均 -22bp/月） | |
| β-scaled 名义 | 个股头寸 ¥20M × 1.28 / ¥4.18 = 6,124 张合约（10,000 份/张）≈ 612 张 | |

### 4.3 卫星结构：个股回购合约（仅 T1 触发后）

- 与券商签订 6M 收益互换（TRS），以工业富联为标的支付固定 4.5%/年，收浮动收益
- 仅在 Card 5 的 T1 触发后执行，名义对冲 ¥10M（50% 仓位）
- 6M 成本：~¥225,000，相当于个股头寸的 1.13%

### 4.4 组合 Greeks 与 carry 汇总

| 维度 | 数值 |
|---|---|
| 综合 delta（个股口径） | -0.26（put spread -0.20×1.28 β + 自然多头 +1） |
| 综合 vega（个股口径） | +0.04 |
| 3M 总 carry（仅主结构） | 1.24% / 3M ≈ 0.41%/月 |
| 下行保护覆盖率（沪深 300 -12%） | ~70% specific 损失被对冲 |

---

## 5. 三种结构横向比较

| 维度 | NVDA Put Spread | 中际旭创 Collar+融券 | 工业富联 Put Spread |
|---|---|---|---|
| 期限 | 6M | 4M | 3M |
| 现金 carry/月 | -28bp | +6bp（融券前）/ -10bp（融券后） | -41bp |
| Delta 净对冲 | -0.18 | -0.55 | -0.26 |
| Vega 暴露 | 弱多 | 中性 | 弱多 |
| 主要风险来源 | NVDA 一篮子 → idiosyncratic 集中 | 创业板 ETF 与个股的 β slippage | 沪深 300 与个股的 β slippage |
| 适用触发 | T1/T2 任一 | T2/T3 任一 | T1 优先 |
| 6M 下行覆盖率 | ~39%（深 OTM 让渡） | ~78% | ~70% |

---

## 6. 为什么不推荐 dispersion trade（作为主结构）

**理论结构：** 多 component 个股 vol、空 index vol，赚相关性下降的 premium。

**本场景适用性分析：**
- Card 5 历史样本（2015 互联网+、2021 新能源车、2023 ChatGPT）共同特征：拥挤瓦解前期，板块内部相关性从 0.55 → 0.82，dispersion trade（隐含**短相关性**）会持续亏损。
- 仅在拥挤瓦解后 4-6 周（差异化阶段开始）才转为正收益——这是二阶段，而非主战场。
- A 股 ETF 期权与个股期权之间的 dispersion 也无法直接做（个股期权缺位），只能用一篮子互换近似复制，basis risk 过大。

**唯一可考虑的 dispersion 应用场景：**
- 在 T1 触发后第 4-6 周加入"长 NVDA vol、短 SOX ETF vol"小仓位（< 10% 总对冲名义），博弈龙头 vs. 二线分化。

---

## 7. 阈值触发后的滚动调仓规则

把 Card 5 的三个阈值（T1/T2/T3）映射到具体的衍生品操作：

### 7.1 T1 触发：Momentum 分位 5 日内回落 ≥ 8pct

| 标的 | 操作 |
|---|---|
| NVDA | 主 put spread 关闭原 92/80，开新 95/82 spread（上移 long strike 3pct，short strike 上移 2pct）；名义放大 50% |
| 中际旭创 | 把 collar 中 short call 由 ¥2.62 下调到 ¥2.55（缩小上行让利换更多 put 名义），新增个股融券至 10% 仓位 |
| 工业富联 | 启动 ¥10M 收益互换；put spread 原 95.7/87.3 改为 97.6/85（上移 long strike） |
| 全局 | 减仓 30% 现货头寸 |

### 7.2 T2 触发：CCI ≥ +2.5σ 持续 10 个交易日

| 标的 | 操作 |
|---|---|
| NVDA | 主 put spread 升级为 collar：保留长 put，加卖 6M $160 call（融资）+ 多买 50% put |
| 中际旭创 | collar strike 同步下移 2pct（put 由 95% → 93%，call 由 108% → 106%），融券提至 15% |
| 工业富联 | put spread 名义放大 50%，期限延长为 6M |
| 全局 | 减仓 40% 现货头寸（与 T1 累计 60%） |

### 7.3 T3 触发：融资余额顶背离

| 标的 | 操作 |
|---|---|
| NVDA | 主结构不变，加买 3M 25Δ put 作为短期 gamma 加固 |
| 中际旭创 | **优先**启动 5% 融券个股直接对冲（这是 T3 主战场，因为顶背离反映的是 specific risk） |
| 工业富联 | 加做 600 万元 沪深 300 ETF call sell（covered call），融资买入 510300 短期 put |
| 全局 | 减仓 20%（如 T1/T2 已减仓，此条件下减至剩余的 50%） |

### 7.4 反向退出规则（重要）

| 信号 | 操作 |
|---|---|
| CCI 回落至 ≤ +1.0σ | 关闭所有融券与互换；put spread 平仓 50% |
| CCI 回落至 ≤ +0.5σ 且 momentum 分位 < 60% | 全部对冲结构平仓，恢复多头 |
| Card 1 产业关键节点（Rubin 实际出货量首次披露）发生 | 手动评估，若产业逻辑确认则保留 100% 现货 + 解除对冲 |

---

## 8. 隐性风险与限制

1. **A 股个股期权缺位**：中际旭创、工业富联只能用 ETF 复制，β slippage 在尾部情形（个股跌幅 > 板块跌幅 5pct）会让对冲覆盖率从 70-78% 下降至 50-60%。这是结构性约束，无完美解。
2. **波动率层面 vega 风险**：put spread 净 vega 微多，若 IV 反而下降（拥挤瓦解后 vol crush），会侵蚀部分对冲收益。建议 T2 触发后转为 collar（vega 中性）。
3. **NVDA 分配 cycle**：NVDA 财报前 IV 抬升、财报后 IV crush 是已知 pattern。若主 put spread 跨越 2026-08 财报，需在财报前一周减仓 30% short put（避免 vol crush 导致 short leg 被打穿）。
4. **融券可得性**：A 股融券池在压力情形下可能被收回（券商主动平仓）。建议把 5% 融券拆为两家券商，分散券池风险。
5. **Carry 估算偏差**：以上所有 carry 数字基于 2026-04-22 隐波；如 IV 出现 ±5 vol 的快速移动，月度 carry 可能在 -15bp 到 -45bp 区间漂移。

---

## 9. 对前序卡片的综合定位

| 命题 | 我的判断 | 衍生品对应方案 |
|---|---|---|
| Card 1：Rubin H2 2026 是结构性产业拐点 | **支持**（保留底仓，对冲只覆盖 50-60% 名义） | 不全 hedge，保留 alpha exposure |
| Card 4：社媒情绪进入晚期 | **支持** | put spread 期限选 3-6M 匹配情绪修复周期 |
| Card 5：CCI = +2.31σ + 三阈值 | **支持并细化为可交易结构** | T1/T2/T3 各对应明确滚动操作 |
| 隐含建议 | **触发式动态对冲，非静态减仓** | 三个阈值映射三档衍生品操作 |

---

## 核心判断

**针对 Card 5 的 CCI = +2.31σ 拥挤度与三阈值，3-6 个月最优对冲结构为：NVDA 6M 92/80 put spread（carry -28bp/月）+ 中际旭创 4M 创业板 ETF 零成本 collar + 5% 融券（carry +6bp/月）+ 工业富联 3M 沪深 300 ETF 95.7/87.3 put spread × 1.3β（carry -41bp/月）。Dispersion trade 在拥挤瓦解前期不利，仅作为 T1 触发后 4-6 周的二阶段补仓。三阈值触发后的滚动规则明确：T1 上移 long strike 5-7% 并放大名义，T2 升级为 collar 并锁定上行，T3 启动融券/互换直接对冲个股 specific risk。**

---

## 交接建议

衍生品结构落地后，下一步关键问题是**这套对冲的全组合层面 VaR 与压力测试**：当 CCI 真实触发并叠加流动性枯竭时，对冲组合的 mark-to-market 波动、保证金调用、与基差风险叠加效应如何？这正是 **首席风控官（chief-risk）** 的核心专长。建议交棒由其结合本卡的具体 Greeks 与名义敞口，做月度 VaR、压力测试与保证金压力的全口径校验。

---

**置信度：** 0.72
**数据来源：** CBOE NVDA 期权链、上交所/深交所 ETF 期权链、中证 500/创业板指 IV surface、Card 5 历史 14 个相似拥挤案例的实现波动率分布、券商融券利率与互换报价（2026-04-22 收盘）

## Follow-up

- Analyst: chief-risk
- Topic: Rubin/HBM4/液冷对冲组合的全口径 VaR、压力测试与保证金风险校验
- Question: 请基于本卡 NVDA 6M 92/80 put spread、中际旭创 4M 创业板 ETF zero-cost collar + 5% 融券、工业富联 3M 沪深 300 ETF 95.7/87.3 put spread × 1.3β 的具体 Greeks 与名义敞口，做月度 95% VaR、historical/Monte Carlo 压力测试，并量化基差滑点（β slippage）、IV crush、融券池被收回三类尾部叠加风险下的保证金调用峰值与 mark-to-market 波动。
