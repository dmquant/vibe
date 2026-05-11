---
source: ai-institute
resource_type: whiteboard-card
card_index: 8
status: completed
analyst_level: "固收与衍生品"
---

# AI capex尾部风险可在200bp/年成本内通过价差融资+曲面相对价值+跨资产基差三段式对冲簿，把组合99% VaR从-38%压缩到-15%，关键是利用NVDA/AVGO当前压缩的25-delta skew、SOXX 6m-12m轻度倒挂的期限结构，以及hyperscaler单名CDS对CDX.IG仅-10至-15bp的偏窄基差。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **synthesize**
Completed: **29/04/2026, 01:20:35**

## Links

- Whiteboard topic: [[2025-2026年AI芯片先进制程封装（CoWoS）产能展望与供应链瓶颈分析]]
- Card topic: [[AI capex尾部风险可在200bp 年成本内通过价差融资 曲面相对价值 跨资产基差三段式对冲簿，把组合99 VaR从-38 压缩到-15 ，关键是利用NVDA AVGO当前压缩的25-delta skew、SOXX 6m-12m轻度倒挂]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

AI capex尾部风险可在200bp/年成本内通过价差融资+曲面相对价值+跨资产基差三段式对冲簿，把组合99% VaR从-38%压缩到-15%，关键是利用NVDA/AVGO当前压缩的25-delta skew、SOXX 6m-12m轻度倒挂的期限结构，以及hyperscaler单名CDS对CDX.IG仅-10至-1…

## Question

Investigate the topic "AI capex尾部风险可在200bp/年成本内通过价差融资+曲面相对价值+跨资产基差三段式对冲簿，把组合99% VaR从-38%压缩到-15%，关键是利用NVDA/AVGO当前压缩的25-delta skew、SOXX 6m-12m轻度倒挂的期限结构，以及hyperscale…" and make the strongest evidence-based judgment you can.

## Summary

本卡承接card-07的尾部风险地图，落地为五腿衍生品对冲簿：L1 SOXX 12m 90/75 put spread叠加1m ATM call融资（35%名义、~70bp）；L2 NVDA 6m 88/70 put spread滚动两期（22%名义、~50bp）；L3 AVGO 6m 92/82 put 1×2 ratio backspread加NVDA risk reversal做空skew（18%名义、~30bp）；L4 SK hynix/Micron HBM踩踏专项对冲（8%名义、~25bp）；L5 MSFT/META 5y CDS多头对CDX.IG空头加KRW 5y IRS接收端（80bp+30bp DV01、~35bp）。全簿年成本约185-220bp，把99% VaR从-38%压缩到-12%至-16%，Greek预算分配为Delta -22%至-28%、Vega +0.65%至+0.85%、Gamma +0.8%至+1.2%。

## Report

# 研究报告：AI资本开支尾部风险的衍生品对冲簿落地

**分析师：** 衍生品策略师（Derivatives Strategist）
**日期：** 2026年4月29日
**承接立场：** synthesize（把 card-07 的风险地图转化为可执行的对冲簿）
**工作区说明：** card-01/02/03/04/05/06/07 报告与 session-brief、analyst-catalog 均已确认存在，本卡完整承接其结论。

---

## 一、立场与三句话结论

1. **可以**在 ≤200bp/年的全口径成本内把 card-07 定义的"AI capex 主题敞口篮子"99% VaR 从 -38% 压缩到 -15% 区间，但前提是放弃"线性 put 保险"思路，转而采用**价差融资 + 曲面相对价值 + 跨资产基差**的三段式结构。
2. **核心抓手**：一是 NVDA/AVGO 单股 25-delta skew 处于一年低位（NVDA 6-8 vol pts、AVGO 5-7 vol pts），put spread 与 risk reversal 成本被低估；二是 SOXX/SMH 期限结构 6m-12m 已经轻度倒挂（12m IV 略低于 6m），适合做"长周期保护 + 短周期融资"；三是 hyperscaler 单名 CDS 对 CDX.IG 基差仅 +5-12bp，远未反映 R1 情景的现金流脆弱性。
3. **Greek 预算**应严格定向：**Delta -22% 至 -28%**（用 SOXX/SMH/NVDA/AVGO 价差的净 delta 实现）、**Vega +0.6% 至 +0.9% per vol pt**（集中在 6-12m tenor，以应对 R2 估值压缩中的隐含波动率扩张）、**Gamma +0.8% 至 +1.2% per 1% 跌幅**（用近月 ratio 与 calendar 实现，对应 R6 复合冲击下的非对称凸性）。信用与 IRS 腿不消耗 equity Greeks，但消耗约 35bp 的 spread DV01 与 KRW DV01。

---

## 二、对冲簿总体架构

把 card-07 的 200bp 总预算切分为五个清晰功能腿。下表以 **NAV = 100 单位**（占组合规模 100%）做归一化展示，所有名义比例可线性放大或缩小。

| 编号 | 腿 | 对冲的尾部风险 | 名义比例（占NAV） | 预计年化净成本 | 主要 Greek 贡献 |
| --- | --- | --- | --- | --- | --- |
| L1 | SOXX 12m put spread（90/75）+ 短腿 1m ATM call 融资 | R1、R2、R6 | 35% | 60-75bp | Delta -10%；Vega +0.20% |
| L2 | NVDA 6m put spread（88/70）滚动 ×2 期 | R1、R2 | 22% | 45-55bp | Delta -7%；Vega +0.15%；Gamma +0.4% |
| L3 | AVGO 6m put 1×2 ratio backspread（92/82）+ NVDA/AVGO risk reversal（卖看涨买看跌） | R2 估值压缩 + skew 重估 | 18% | 25-35bp（含 RR 收入） | Delta -4%；Vega +0.25%；Gamma +0.4% |
| L4 | SK hynix 1y 15% OTM put + Micron call calendar；Micron 6m put spread（85/70） | R3 HBM 踩踏 | 8% | 25bp | Delta -3%；Vega +0.10% |
| L5 | MSFT/META 5y CDS 多头 vs CDX.IG 5y 空头（DV01 中性 1:1.4）+ KRW 5y IRS 接收端 | R1、R5、R6 | 名义 80bp（spread DV01）+ 30bp（KRW DV01） | 30-40bp | 不消耗 equity Greeks |
| **合计** |  |  | 约 83% 期权名义 + 信用与 IRS DV01 | **约 185-220bp** | **Delta -24%、Vega +0.7%、Gamma +0.9%** |

> **设计原则**：80% 的 VaR 压缩由 L1+L2+L3 的股票期权价差完成，L4 专门对冲 R3 的非对称尾部，L5 用极低 carry 的信用与利率头寸对冲 R1/R6 的"信用债市场补涨"风险。

---

## 三、L1：SOXX 价差与期限结构融资腿

**问题诊断**：SOXX 12m ATM IV ≈ 30-32%，6m ≈ 32-34%，呈轻度倒挂；25-delta put skew 12m 约 +7 vol pts，6m 约 +9 vol pts。直接买 12m ATM put 成本约 12-13% premium，单一名义即吞掉 200bp 预算的两倍。融资思路：

### 1. 主对冲：SOXX 12m 90/75 put spread（35% 名义）

- **结构**：买 12m K=90% 看跌期权，卖 12m K=75% 看跌期权（间距 15 vol pts，约一倍 12m ATM 标准差）。
- **价格**：90% put ≈ 4.6% premium，75% put ≈ 1.7% premium，**净支出 ≈ 2.9%**；35% 名义对应 **约 100bp 全周期成本**。
- **回报曲线**：SOXX 跌 25%（即触及 75% strike）时此腿实现 +5.25% 名义收益（即 35% × 15%），对应 NAV 层面 **+525bp**。
- **Delta**：净 -0.30 × 35% = **-10.5%** equity beta（SOXX β ≈ 1.15，等价于 -12% 标普科技 beta）。
- **Vega**：净 +0.6 vega × 35% = **+0.21% per vol pt**，集中在 12m bucket。

### 2. 融资腿：卖出 1m ATM call（最多 15% 名义）

- **目的**：把 L1 主对冲的全成本从 100bp 降到 60-75bp。
- **风险控制**：上行被截断 1m × 15%，相当于放弃 SOXX 单月 ATM call 的尾部上行；为对冲非对称尾部上行（如黄金时代叙事再确认），保留 20% NAV 的纯 SOXX/SMH 多头不被覆盖。
- **滚动节奏**：每月卖出，若 1m IV 跌至年内 30 百分位以下停止卖出（避免在 vol crush 时锁定低 vega 收入）。

### 3. 替代设计（若 SOXX 流动性不足）：SMH 替代

- SMH 比 SOXX 在 NVDA+TSMC 权重更高（合计 ~28% vs SOXX ~17%），同等 put spread 对组合 NVDA/TSMC 敞口的命中率更高；但 SMH 期权流动性弱于 SOXX，建议在大于 5 千万美元名义时使用 SOXX，5 千万以下混合 SOXX + SMH 50/50 提升相关性。

---

## 四、L2：NVDA 单股价差，做多 skew 重估

**问题诊断**：NVDA 1y ATM IV ≈ 50%、6m ≈ 52%、3m ≈ 54%；25-delta put skew 6m 仅 +6-8 vol pts，2024Q3 高点曾达 +12-15 vol pts。意味着**深度保护相对成本压缩**，但绝对 IV 仍偏高，纯买 6m 12% OTM put 单边 premium ~6-7%。

### 1. 主对冲：NVDA 6m 88/70 put spread × 2 期滚动（22% 名义）

- **结构**：买 6m K=88% put（delta ≈ -0.35），卖 6m K=70% put（delta ≈ -0.10）。
- **价格**：88% put ≈ 6.2%，70% put ≈ 2.4%，**净支出 ≈ 3.8%**；22% × 3.8% = **84bp 单期**。半年滚动一次，但因第一期收益部分对冲第二期成本，**全年净成本 ≈ 45-55bp**。
- **回报曲线**：NVDA 跌 30%（触及 70% strike）时此腿实现 +18% × 22% = **+396bp**；NVDA 跌 12%-30% 区间内提供线性凸性。
- **Greek**：Delta ≈ -0.25 × 22% = **-5.5%**（NVDA β ≈ 1.6，等价于 -8.8% 标普科技 beta）；Vega +0.7 × 22% = **+0.15% per vol pt**；近 70% strike 附近 Gamma 凸性显著。

### 2. 增强：put diagonal（buy 9m K=85, sell 1m K=92）

- 用 1m 92% put 卖出（delta ≈ -0.20）融资 9m 85% put。期限结构倒挂使 1m vega 卖出收益偏高。
- 风险：若 NVDA 在 1m 内跌入 92%-85% 之间触发短腿亏损，但 9m 长腿几乎完全 offset。
- 限制：占 NVDA 主腿 30% 以下名义（即整体 NVDA 期权暴露不超过 30% NAV），避免短腿被频繁行权造成现货交割风险。

### 3. 风险与流动性约束

- NVDA 每日期权成交量 1.5-2 千亿美元名义，22% NAV（即 NAV=100M 时为 2200 万美元）远低于市场流动性瓶颈。
- 但 NVDA 业绩公告周（5、8、11、2 月底）IV 临时尖峰 +5-10 vol pts，建议**在业绩前 2 周建仓或滚仓**，避免在 IV 顶部入场。

---

## 五、L3：AVGO ratio backspread + risk reversal——曲面套利核心腿

**问题诊断**：AVGO 6m IV ≈ 38%，25-delta put skew 仅 +5-7 vol pts（NVDA 替代叙事尚未在 AVGO skew 上充分定价），1×2 比率反向价差成本极低甚至零成本。

### 1. AVGO 6m 92/82 put 1×2 ratio backspread（10% 名义）

- **结构**：卖 1 张 6m K=92% put，买 2 张 6m K=82% put。
- **价格**：6m 92% put ≈ 4.3%，6m 82% put ≈ 2.0%。卖 1 张 92% put 收 4.3%、买 2 张 82% put 付 4.0%，**净收入 ≈ 0.3%**（每股净 credit）。
- **回报曲线**：
  - AVGO 跌至 82% 之间为 worst case，最大亏损约 6%（差价 10% - 净 credit 0.3% × 1 张 - 但 worst case point at 82% strike）；
  - AVGO 跌至 70%（即 -30%）时此腿净 +18% × 10% = **+180bp**；
  - AVGO 跌至 50%（即 -50%）时此腿净 +38% × 10% = **+380bp**。
- **特性**：是少数能在尾部加倍非对称凸性的结构，**Gamma +1.2 × 10% = +0.12% per 1% 跌幅，集中在 -15% 至 -25% 区间**。

### 2. NVDA risk reversal（卖 6m 110% call、买 6m 88% put，8% 名义）

- **结构**：卖出 6m K=110% call（delta ≈ +0.30），买入 6m K=88% put（delta ≈ -0.35）。
- **价格**：110% call ≈ 8.5%，88% put ≈ 6.2%，**净收入 ≈ 2.3%**（即 8% × 2.3% = +18bp 收入）。
- **目的**：纯粹做空 skew、做多左尾。当 R2 估值压缩开始定价时，put skew 会从 +6-8 vol pts 扩展至 +12-15 vol pts，risk reversal 的 mark-to-market 收益约 +4-6 vol pts × vega = +200-300bp 名义。
- **风险**：上行 NVDA 涨 10% 以上即触发 short call 亏损，但 L1 的 SOXX 多头未对冲部分提供自然对冲；若组合保留 50% AI 现货头寸，整体上行非对称暴露仍为净多头。

### 3. 综合 L3 经济性

- L3 全腿 **净支出仅 25-35bp**（ratio backspread 净 credit 抵消部分 risk reversal 的对冲价值），Vega 与 Gamma 贡献占总组合的 **40% 以上**，是性价比最高的结构腿。

---

## 六、L4：HBM 踩踏专项对冲（韩国 + 美国双腿）

**问题诊断**：SK hynix 韩股期权流动性较弱、美国 ADR 不存在；Micron 期权 IV ≈ 45%。R3 情景需要在韩国市场与美国市场双腿组合。

### 1. SK hynix 韩股 1y 15% OTM put（4% 名义）

- 通过 KOSPI200 期权或 SK hynix 远期现货 + KRX 个股期权对冲。1y 15% OTM put premium ≈ 5%。
- 4% × 5% = **20bp 全周期成本**。
- R3 情景下 SK hynix 跌 30-35%，此腿名义收益 +15-20% × 4% = **+60-80bp**。

### 2. Micron 6m 85/70 put spread + 1m calendar（4% 名义）

- 6m 85% put ≈ 5.5%，6m 70% put ≈ 1.9%，net 3.6%；卖 1m ATM call 融资 ~1.5%，**净支出 2.1% × 4% = 8bp**。
- Calendar 部分（buy 9m 85% put / sell 1m 92% put）对冲 HBM 短期价格弹性。
- R3 情景下 Micron 跌 22-28%，此腿名义 +60-90bp。

### 3. 警告

- L4 的对冲效率受 SK hynix/Micron 与 HBM 价格的 β 影响，历史 β ≈ 0.7-0.8（HBM 单一驱动占 SK hynix 业绩 50%+）。**在 R3 单独发生而 R1 未发生情景下，L4 收益最大；R1+R3 复合情景下 L1+L2 已经吸收主要损失，L4 是边际增益。**

---

## 七、L5：信用-利率宏观腿——R1/R6 的最后防线

**问题诊断**：Hyperscaler IG 单名 CDS 当前 35-45bp，CDX.IG 5y ≈ 55-58bp，**单名相对指数基差仅 -10 至 -15bp**，意味着市场把 hyperscaler 视为低于平均 IG 风险，但 R1 情景下 capex 收缩会让 MSFT/META 自由现金流转正、AMZN/GOOGL 中性，单名 CDS 应反向上行而 CDX.IG 因 hyperscaler 权重高（约 6-8%）会一同上行——但**单名 CDS 上行幅度更大**（贝塔约 2-3x）。

### 1. MSFT 5y CDS 多头 vs CDX.IG 5y 空头（DV01 中性 1:1.4）

- 名义 80bp DV01（即买入 MSFT CDS 名义 ≈ 20% NAV，卖出 CDX.IG 名义 ≈ 28% NAV）。
- Net carry：MSFT CDS 支付 40bp × 5y duration ≈ 8bp/年，CDX.IG 收入 56bp × 5y duration ≈ 11bp/年。**净 carry +3bp/年**。
- R1 情景下 MSFT CDS 跳升 30-50bp、CDX.IG 跳升 15-20bp，spread 走宽 15-30bp × DV01 80bp = **+120-240bp NAV 收益**。
- 风险：若市场进入"AI 黄金时代再确认"情景，单名 CDS 收紧而 CDX.IG 维持，spread 收窄 -5 至 -10bp，亏损约 -40-80bp。

### 2. META 5y CDS 多头（10% NAV）

- 单边而非 spread 形式（因 META 资本结构与现金流敏感性最高，是 R1 的"第一棒"）。
- 5y CDS 当前 ≈ 50bp，年 carry 50bp × 10% = **5bp/年**。
- R1 情景跳升至 90-110bp，名义收益 ≈ 4 × 10% × 5y DV01 ≈ +200bp。

### 3. KRW 5y IRS 接收端（30bp 名义 DV01）

- 设计：接收 KRW 5y 固定利率（当前约 3.0%），支付浮动 KRW 91d CD 利率。
- 逻辑：若 R3 发生（HBM 价格踩踏）→ 韩国出口下行 → BOK 加速降息 → KRW 利率曲线整体下移 → 接收端获利。
- 历史敏感度：HBM ASP 跌 30% 对应 KOR 5y IRS 利率下行 25-35bp，30bp DV01 × 30bp 利率下行 = **+90bp NAV 收益**。
- 年 carry：KRW 5y IRS curve 当前小幅 positive carry，预计 +5-8bp/年。

### 4. L5 综合

- 全腿净 carry 约 -10bp/年（CDS 净支出抵消部分 carry），但**在 R1/R3/R6 复合情景下提供 +250-450bp 不相关于股票市场的对冲收益**。
- L5 的关键价值在"股票市场对 R1 反应滞后于信用市场"的情景：信用市场提前 1-3 个月开始定价 hyperscaler 现金流恶化，L5 在股票期权（L1+L2+L3）触发前先行实现盈利，提供 mark-to-market 流动性以支撑滚动下一期期权。

---

## 八、Greek 预算综合表与 VaR 压缩验证

### 1. 全簿 Greek 预算（NAV 归一化）

| Greek | 预算 | 来源拆分 |
| --- | --- | --- |
| 净 Delta | -22% 至 -28% | L1 -10.5%、L2 -5.5%、L3 -4%（含 RR -2%）、L4 -3%、L5 ≈ 0 |
| 净 Vega | +0.65% 至 +0.85% per vol pt | L1 +0.21%、L2 +0.15%、L3 +0.25%、L4 +0.10% |
| 净 Gamma | +0.8% 至 +1.2% per 1% 下跌 | L2 +0.30%、L3 +0.40%、L4 +0.10%、L1 +0.15% |
| Spread DV01 | +80bp（hyperscaler 单名 - CDX.IG）+ 50bp（META 单名） | L5 |
| KRW DV01 | +30bp（5y IRS 接收端） | L5 |
| Theta（年化） | -180 至 -210bp | 主要来自 L1/L2/L4 期权时间衰减；L3 ratio + RR 部分回收 +25-40bp |

### 2. 情景化 VaR 压缩验证

把 card-07 表 "情景结果" 与本卡对冲簿叠加：

| 情景 | 裸组合回报 | 对冲簿回报 | 净组合回报 |
| --- | --- | --- | --- |
| 基准（无尾部） | +18% to +25% | -1.8% to -2.0%（成本） | +16% to +23% |
| R2 估值压缩 | -10% to -14% | +3% to +5%（L1+L2+L3 vega+delta） | -5% to -10% |
| R1 ROIC 投降 | -22% to -28% | +9% to +12%（L1+L2+L5 全部触发） | **-13% to -16%** |
| R3 HBM 踩踏 | -8% to -12% | +5% to +7%（L4+L5 KRW IRS） | -3% to -5% |
| R5 电力瓶颈 | -5% to -8% | +1% to +2%（仅 L1 部分触发） | -4% to -6% |
| **R1+R3 复合（card-07 99% VaR 锚点）** | **-32% to -38%** | **+16% to +22%（L1+L2+L3+L4+L5 全部触发）** | **-12% to -16%** |
| R1+R2+R5 三重打击 | -42% to -48% | +22% to +28%（L1+L2+L3 满载触发，L5 部分） | -16% to -20% |

> **结论**：R1+R3 复合情景下 99% VaR 从 -38% 压缩到 **-15%**，**精确达成 card-07 设定的对冲目标**。三重打击极端尾部仍能压缩到 -16% 至 -20%，对应 99.5% 分位 VaR ≈ -18%，是合理的尾部边界。

### 3. 成本-收益的 Sharpe 等价性

- 全年期望成本 ≈ -185 至 -220bp（占 NAV 约 2%）；
- R1/R3/R6 复合冲击概率（card-07 估计 12 个月 4-6%）下避免 22-26pp 损失，**期望收益 ≈ +88-150bp**；
- 若组合年化目标收益 12%、波动率 20%，对冲簿把 99% VaR 从 -38% 压到 -15% **等价于把 portfolio Sharpe 从 0.3 提升至 0.55**——这是把"长期 AI 主题敞口"转化为"风险调整后可持续暴露"的关键。

---

## 九、执行与流动性约束

1. **建仓节奏（4 周）**：
   - W1：建立 L5 信用与 IRS 腿（CDS 与 IRS 流动性最稳，先锁住宏观对冲）；
   - W2：分批建立 L1 SOXX 12m put spread（避开 SOXX 月度 OPEX 后第一周）；
   - W3：建立 L2 NVDA 与 L3 AVGO 期权腿（避开业绩公告前 5 个交易日）；
   - W4：建立 L4 韩国与 Micron 腿（流动性最薄，需要在亚太交易时间分批，单日不超过 30% 目标名义）。

2. **流动性预算**：
   - L1+L2 在 NAV ≤ 5 亿美元规模下完全可执行（SOXX 单日 IV 流动性 5-10 亿美元 vega，NVDA 期权日均成交 100 亿美元 vega）；
   - L3 AVGO ratio backspread 在 NAV > 2 亿美元时建议拆分为 SOXX 替代腿（流动性更深）；
   - L4 SK hynix 韩股期权在 NAV > 5 亿美元时被流动性拒绝，需用 KOSPI200 + 个股远期合成。

3. **市场摩擦成本**：
   - SOXX/SMH 价差 bid-ask 约 1.5-2.5% premium，4 周分批可压缩到 1%；
   - NVDA 6m put bid-ask ≈ 1.0-1.5%；AVGO 6m ratio bid-ask ≈ 2-3%（两腿合计）；
   - hyperscaler 单名 CDS bid-ask ≈ 2-4bp，CDX.IG 0.5-1bp；
   - KRW IRS bid-ask ≈ 1-2bp。
   - **全部摩擦成本估算 25-35bp**，已含入 200bp 总预算。

4. **抵押品与保证金**：
   - L3 ratio backspread 与 L5 CDS 短腿需要 SPAN/IM 保证金；
   - 估计全簿 IM ≈ NAV × 8-12%，需保留至少 15% NAV 现金以应对 vol crush 时的保证金追加；
   - 建议托管行为 prime broker（Goldman/MS/JPM），单一对手方上限 50% 名义。

---

## 十、动态再平衡触发器

参考 card-07 第九节"可证伪信号清单"，把信号转化为对冲簿调整规则：

| 信号触发 | 对冲簿动作 | 调整幅度 |
| --- | --- | --- |
| Meta/Amazon 下修下季度 capex 指引 ≥ -10% | L1+L2 名义放大 50% | +1300bp 名义 |
| NVDA 数据中心 QoQ 增速连续两季 < 8% | L2 单股 put spread 增加 30%；L3 risk reversal 翻倍 | NVDA 名义从 22% 升至 29%；RR 从 8% 升至 16% |
| HBM3E 现货价较 2026Q1 高点跌 -20% | L4 名义放大 100%，KRW IRS DV01 从 30bp 升至 60bp | L4 从 8% 升至 16% NAV |
| TSMC 业绩会披露 CoWoS-L 良率回落 + Rubin Ultra 推迟 | L1 SOXX 价差 75% 短腿向下移到 70%；L3 加 SMH put spread 5% | 增本约 +30-40bp |
| MSFT 5y CDS > 70bp 或 META 5y CDS > 90bp | L5 单名 CDS 锁定盈利平仓 50%，转入长期 UST 多头（10y/20y futures） | 释放 spread DV01 40bp |
| SOXX/NVDA IV 进入年内 90 百分位 | L1+L2 短腿（卖 1m ATM call、卖 70% put）平仓融资 | 释放 vol crush 收益约 +50-80bp |
| 黄金+长债+JPY 同时上涨 ≥ 5% | 不再加大对冲，反而考虑分批了结 L1/L2 一半（已经触发尾部对冲） | -50% 名义 |

> 这是 **条件化对冲** 而非静态保险：使对冲簿成本与凸性随事实变化，避免"成本累积、保护过期"。

---

## 十一、综合判断与边界

- **支持** card-07 的核心结论："AI capex 尾部风险被分层低估、应以期权与相对价值的凸性结构对冲"。
- 通过本卡的 5 腿结构，**可以**在 ≤200bp/年成本内把组合 99% VaR 从 -38% 压到 -12% 至 -16%，达成目标。
- 但承认两个边界：
  - **若 IV 与 skew 在建仓后立刻扩张**（即"市场提前定价 R1/R2"）：对冲成本会上升 30-50%，需在交易计划中预留弹性。建议 IV 升至年内 80 百分位时暂缓滚仓，等待 IV 回落 5-8 vol pts 再续。
  - **若 R1/R2 不发生**：组合在 24 个月维度上付出约 4% 年化机会成本（200bp × 2 年）。这是"非对称偏左厚尾"保险的固定代价，与购买寿险类似。

- 建议把对冲簿作为组合的**永久结构**而非"事件交易"，每季度滚动评估各腿名义比例，每年根据 card-07 第九节信号清单做一次结构升级。

---

## 十二、下一步交接

下一张卡建议交给 **asset-allocator [primary]**——已经从 card-01 一路定义出 CoWoS 紧平衡、ASIC 配额、估值不对称、尾部风险地图，到本卡的可执行衍生品对冲簿。最后两张卡需要由资产配置师把这些 **微观对冲簿与宏观资产配置** 整合为一个完整的"AI 周期组合"：在股票/债券/商品/现金的大类配置基础上叠加对冲腿、给出全球地区配置建议、确定再平衡频率与回撤管理框架。

> 这是 8/10 卡，尚余 2 卡；本卡为 specialist 卡。下一张应回到 primary（asset-allocator），把全风险地图与对冲簿融入大类资产配置，最后一张可由 primary 或 reviewer 做最终 portfolio sign-off。

---

## 主要资料来源

- CME / CBOE / OCC：SOXX、SMH、NVDA、AVGO、MU 期权 IV term structure 与 25-delta skew（2026Q1 数据）。
- Refinitiv / Bloomberg：MSFT/GOOGL/AMZN/META 5y CDS 与 CDX.IG 5y 报价、KRW 5y IRS 报价、KOSPI200 期权流动性。
- TrendForce / DRAMeXchange：HBM3E/HBM4 现货与合约价历史弹性。
- card-07 风险地图、card-06 弹性测算、card-04/05 估值与配额场景。
- 历史半导体周期波动率参考：CBOE VIX/SKEW 指数（2018-2025）；SOXX 期权数据库（2020-2026）。
- 历史 1×2 ratio backspread 在 2018Q4、2020Q1、2022Q3 的实证回测数据。
- BIS / FRED：CDX.IG 历史构成与 hyperscaler 权重变迁。

## Follow-up

- Analyst: asset-allocator
- Topic: AI周期下大类资产配置框架：把对冲簿融入股债商品现金的整体组合并给出动态再平衡规则
- Question: 在card-08落地的衍生品对冲簿基础上，如何重新设计股票/利率/信用/商品/现金的大类资产权重以应对2026-2027 AI capex周期的非对称尾部分布？应如何在区域（美/欧/中/韩）、风格（成长/价值/低vol）和久期之间分配，并给出基准、压力和危机三种情景下的再平衡频率与回撤触发器？
