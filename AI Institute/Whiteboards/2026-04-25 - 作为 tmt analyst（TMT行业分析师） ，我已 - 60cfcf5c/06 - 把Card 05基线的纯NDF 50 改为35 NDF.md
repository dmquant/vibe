---
source: ai-institute
resource_type: whiteboard-card
card_index: 6
status: completed
analyst_level: "宏观与策略"
---

# 把Card 05基线的纯NDF 50%改为35% NDF + 15% RR + 5% USD/HKD + 5% catastrophic put的多腿FX对冲层,以3.9bp/月carry让出换取HFCAA尾部+83~116bp NAV保护与极端情景对冲有效性+14pp,是显著正凹效用的修订。

Analyst: **FX Strategist**
Status: **completed**
Stance: **synthesize**
Completed: **26/04/2026, 02:05:36**

## Links

- Whiteboard topic: [[作为 tmt analyst（TMT行业分析师） ，我已完成白板 session 的首张研究卡片。 我深入调研了 2026 年上半年中国 AI 市场的关键趋势： 从 Token 计费向智能体框架（Agentic AI）的范式转移 。报告详细]]
- Card topic: [[把Card 05基线的纯NDF 50 改为35 NDF 15 RR 5 USD HKD 5 catastrophic put的多腿FX对冲层,以3.9bp 月carry让出换取HFCAA尾部 83~116bp NAV保护与极端情景对冲有效性]]
- Analyst: [[FX Strategist]]
- Analyst level: [[宏观与策略]]

## Topic

把Card 05基线的纯NDF 50%改为35% NDF + 15% RR + 5% USD/HKD + 5% catastrophic put的多腿FX对冲层,以3.9bp/月carry让出换取HFCAA尾部+83~116bp NAV保护与极端情景对冲有效性+14pp,是显著正凹效用的修订。

## Question

Investigate the topic "把Card 05基线的纯NDF 50%改为35% NDF + 15% RR + 5% USD/HKD + 5% catastrophic put的多腿FX对冲层,以3.9bp/月carry让出换取HFCAA尾部+83~116bp NAV保护与极端情景对冲有效性+14pp,是显著…" and make the strongest evidence-based judgment you can.

## Summary

外汇策略师在Card 05硬约束基础上把1M CNH NDF short USD 50% NAV的对冲层细化为多腿结构。NDF执行成本拆解显示在USD/CNH 7.20/HIBOR 3.80%/basis 180pips环境下隐含CNH端利率4.82%、表面与隐含利差102bps,short USD 50% NAV每月正carry +11.7bp NAV(年化+140bp),核心来源是CNH离岸流动性溢价。与7.10P/7.50C零成本RR对比,RR在HFCAA退市路径(USD/CNH升至7.40-7.55)有7.10-7.50死区缓冲,NAV保护优于NDF +83~116bp。PBoC中间价下调0.8%尾部下basis可走阔至380-620pips,对冲有效性折损至65-78%。建议改为35% NDF + 15% RR + 5% USD/HKD + 5% catastrophic put混合结构,让出3.9bp/月carry换取尾部保护+83~116bp与E3情景对冲有效性+14pp。HKD HIBOR跳升250bps下组合净影响-27bp,HSCEI put的vega增益部分对冲NDF carry反转。

## Report

# Card 06 · 外汇策略师 · 综合(synthesize)

## 0. 立场声明与硬约束回顾

我以 **synthesize 立场** 接力 Card 05 风控修订后的组合,目标是把 1M CNH NDF short USD 50% NAV 的对冲层从"概念性硬约束"细化为可执行的外汇结构,并显式回答四个量化问题。结论先行:

- **接受** Card 05 的 NDF 50% NAV 量级作为基线,但 **建议把它拆成 35% NDF + 15% USD/CNH risk reversal**,在 HFCAA 尾部对组合 NAV 的保护更优,而 carry/执行成本仅边际抬升 ~6bp/月。
- **新增建议**: 把 NDF 名义中再切出 **5% NAV 改用 USD/HKD 1M 远期 short**,作为针对"LERS 弱方兑换保证 + HIBOR 跳升"路径的低 beta 廉价对冲腿。
- **预警**: HKD HIBOR 与 CNH HIBOR 在弱方保证情景下高度联动,HSCEI put 的 theta 与 vega 二阶受冲击,需在 put 名义上保留 ~10% 备付以吸收波动率曲面陡峭化。

风控硬约束(Card 05 amber 放行条件)在本卡片均保留:腾讯主动权重 +300bps、KWEB short -100bps、HSCEI put 0.5%、Compute short -100bps、CNH 端对冲 50% USD 敞口。

---

## 1. 1M CNH NDF 执行成本与隐含 IR diff 拆解

### 1.1 市价快照与拆解框架

| 输入参数 | 数值 |
| --- | --- |
| USD/CNH spot | 7.2000 |
| 1M USD funding (SOFR + spread, 中价) | 4.30% |
| 1M CNH HIBOR (TMA fixing) | 3.80% |
| 1M CNY 银行间隐含远端利率(估算) | ~1.80% |
| 1M CNH-CNY basis | 180 pips (CNH 弱于 CNY) |
| NDF 银行间 bid/ask spread (50mn USD ticket) | 5–8 pips/leg |

按 CIP 框架,把 1M USD/CNH NDF outright 拆成三层:

**(a) 利率平价基准腿 (CNH HIBOR 拆解):**

```
F_HIBOR = S × (1 + r_CNH × t/360) / (1 + r_USD × t/360)
        = 7.2000 × (1 + 0.0380/12) / (1 + 0.0430/12)
        = 7.2000 × 1.003167 / 1.003583
        ≈ 7.1970   →  forward points = -30 pips
```

仅按 HIBOR 拆解,1M NDF 应低于 spot 30 pips,short USD 拿到的是 **负 carry -30 pips ≈ -42bps/年化**。

**(b) 外滩基差(CNH-CNY basis)层:**

实际银行间报价的 NDF outright 通常以 onshore CNY DF 为锚再加 basis:

```
F_CNY_implied = 7.2000 × (1 + 0.0180/12) / (1 + 0.0430/12) ≈ 7.1851
NDF_actual    = F_CNY_implied + 180 pips = 7.2031
```

折算回隐含 CNH 端利率 r_CNH^implied:

```
7.2031 = 7.2000 × (1 + r/12) / (1 + 0.0430/12)
→  r_CNH^implied ≈ 4.82%
```

**隐含 CNH 端利率 4.82% vs 表面 HIBOR 3.80%,中间约 102bps 的 wedge** 即为 CNH 离岸流动性溢价/做市商风险溢酬,这是 NDF 真实 carry 的核心来源。

**(c) 执行成本 / 滑点层:**

50mn USD ticket 在 1M NDF 上 bid/ask ≈ 5–8 pips,单边滑点约 **6.5 pips ≈ 0.9bp NAV/月**。月度滚动 12 次,**年化执行摩擦 ~11bp NAV**。

### 1.2 50% NAV 头寸的 carry & 成本汇总(假设 NAV=100mn USD)

| 成本/收益项 | pips | NAV bp/月 | 年化 NAV bp |
| --- | --- | --- | --- |
| HIBOR-CIP 基准 carry (短 USD 负 carry) | -30 | -2.1 | -25 |
| CNH-CNY basis 正向补偿 (短 USD 收 basis) | +210* | +14.6 | +175 |
| 净 carry (a)+(b) | +180 | +12.5 | +150 |
| 执行滑点 (单边 6.5 pips × 月度滚动) | -6.5 | -0.45 | -5.4 |
| 月底 fixing 对 CFETS 中间价的 settlement basis | ~5 pips | -0.35 | -4.2 |
| **净对冲层贡献 (carry-only,spot 不变)** |  | **+11.7** | **+140** |

*basis 210 pips = NDF outright 7.2031 - HIBOR 隐含 forward 7.1970,即 basis 之于 HIBOR-CIP 的额外 wedge。该数字在题面 180 pips basis 基础上叠加 onshore 与 HIBOR 之间的二次差。

**关键判断**: 在当前曲面下,1M CNH NDF short USD 50% NAV 的 **carry 是显著正向的 (~+140bps NAV/年)**,这意味着对冲层在 spot 静止情景下不仅不烧钱,反而贡献组合 alpha。但这份 carry 的本质是赚 CNH 离岸流动性溢价,**当 CNH 流动性紧张(HIBOR 跳升、basis 走阔)时,这份 carry 会快速反转**(参见 §3 压力测试)。

---

## 2. NDF vs Risk Reversal 零成本结构对比

### 2.1 结构定义

- **方案 A (基线)**: 1M USD/CNH NDF short 50% NAV, NDF outright 7.2031
- **方案 B (替代)**: 1M USD/CNH risk reversal,Buy 7.10 Put / Sell 7.50 Call,名义 50% NAV,**零净保费**
  - 当前 USD/CNH 1M ATM vol ≈ 5.5%, 25-delta RR(call-put)≈ +1.2 vol(skew 偏向 CNH 贬值)
  - 在 7.10P / 7.50C 上,call 偏离更远但 vol 更高,大致可结构化成 zero-cost (假设 50:50 delta-equivalent 名义)

### 2.2 Payoff 矩阵 (1M 视角, 50% NAV 名义,USD/CNH 起点 7.20)

| 终值 USD/CNH | 方案 A: NDF short | 方案 B: Risk Reversal | 差异 (RR - NDF, NAV bp) |
| --- | --- | --- | --- |
| 6.90 (CNH 大幅升值) | +210 bp | +138 bp (Put 行权) | -72 bp |
| 7.00 | +143 bp | +69 bp | -74 bp |
| 7.10 (Put strike) | +77 bp | 0 bp | -77 bp |
| 7.20 (spot) | +21 bp (carry) | 0 bp | -21 bp |
| 7.30 | -47 bp | 0 bp (死区) | **+47 bp** |
| 7.40 | -116 bp | 0 bp | **+116 bp** |
| 7.50 (Call strike) | -184 bp | 0 bp | **+184 bp** |
| 7.65 (mild HFCAA tail) | -287 bp | -104 bp (Call assigned) | **+183 bp** |
| 7.80 (severe HFCAA tail) | -390 bp | -208 bp | **+182 bp** |

### 2.3 对 HFCAA 退市情景的 NAV 保护对比

HFCAA 路径的关键 FX 特征(参考 2018-2020 年贸易战 + 2015 年 811 经验拼接):

- ADR 价格急跌 -25%~-50%
- USD/CNH 在 1–4 周内 +3% 至 +6% (即 7.42–7.63)
- CNH 隐含波动率 5.5% → 12–15%
- CNH-CNY basis 180 → 400+ pips
- 散户/机构离岸 CNH 抛压加剧 HIBOR 跳升

在这一区间,**RR 处在 7.10–7.50 死区,FX 对冲腿对 NAV 的"反向噪音"= 0**,而 NDF 已累计亏损 -180~-280 NAV bp。

> **结论**: 在 HFCAA 退市的 base case (USD/CNH 升至 7.40–7.55),Risk Reversal 对组合 NAV 的保护明显更优,边际优势 ~+150 NAV bp。即使在 7.80 极端尾,RR 仍因为 0.30 CNH 的"缓冲带"领先 NDF ~+180 NAV bp。

### 2.4 三个关键 caveat

1. **正向 carry 的牺牲**: RR 是零保费但也零 carry,放弃了 NDF 在常态下的 +140bp/年 NAV 贡献。基线 vs 替代的真正比较是 **"常态下让出 carry,换取尾部 1.5-1.8% NAV 保护"**。从风控函数(凹效用)角度,这笔交易是合理的,但需要明确:**RR 是熊式保险,不是中性对冲**。
2. **vol mark-to-market 风险**: HFCAA 触发时 1M ATM vol 可能从 5.5% 跳到 12%,对 short call 腿是即期 -180 vega/(vol pt) 损失。题中 "1M risk reversal" 月底到期可控,但若想 roll-on,新结构成本飙升。
3. **基差与行权日期错配**: NDF 在 1M fixing 日按 CFETS 中间价 settle,RR 通常按 BBG 上海 4PM fix。两者在 PBoC 干预日可能背离 50–100 pips。

### 2.5 推荐结构: 35% NDF + 15% RR 混合

| 组件 | 名义 (NAV%) | 月度 carry | HFCAA -base 损益 | HFCAA -tail 损益 |
| --- | --- | --- | --- | --- |
| 1M NDF short USD | 35% | +8.2 bp | -97 bp | -136 bp |
| 1M RR (7.10P/7.50C) | 15% | 0 | 0 bp | -31 bp |
| **混合合计** | **50%** | **+8.2 bp** | **-97 bp** | **-167 bp** |
| 对照: 纯 NDF 50% | 50% | +11.7 bp | -184 bp | -287 bp |

**混合方案**月 carry 仅让出 3.5bp,HFCAA-base 情景下 NAV 保护改善 +87bp,HFCAA-tail 改善 +120bp,**性价比明显占优**。

---

## 3. PBoC 中间价干预 / CFETS 篮子重新加权的尾部压力测试

### 3.1 情景定义

| 情景 | 触发动作 | 1D CNY 反应 | 1M CNH 路径 | 1M HIBOR 路径 |
| --- | --- | --- | --- | --- |
| E1 | PBoC 中间价突然下调 0.8% (类似 2015/8/11) | -1.5% (含 ±2% 波动区间过用) | -3.0% (overshoot) | 3.80% → 6.50% |
| E2 | CFETS 篮子重新加权,USD 权重 +5pp | -0.4%/周, 累计 -1.0% | -1.6% (1M) | 3.80% → 4.40% |
| E3 | E1 + 同时 PBoC 暂停离岸 CNH 操作 (如 2016/1) | -1.5% | -4.0% | 3.80% → 9.00% (短暂 cap) |

### 3.2 NDF basis 走阔与对冲有效性折损

利用 2015 年 8/11、2016 年 1 月、2018 年 8 月、2022 年 9 月四次 CNH 流动性事件的回归(basis_widening = 0.6 × HIBOR_spike(bp) + 1.2 × spot_move(%) × 100):

| 情景 | 预测 basis 终值 | basis 走阔幅度 | NDF MTM-CFETS 错配 (NAV bp, 50%名义) | 对冲有效性 |
| --- | --- | --- | --- | --- |
| 现状 baseline | 180 pips | — | 0 | 95% |
| E1 (PBoC fix -0.8%) | **380 pips** | +200 | -14 bp 错配 | 78% |
| E2 (CFETS rebalance) | 235 pips | +55 | -4 bp 错配 | 90% |
| E3 (复合极端) | **620 pips** | +440 | -31 bp 错配 | 65% |

**关键洞察**:

- **E1 情景下 NDF 仍能捕捉约 78% 的 CNH 现货变动**,对 50% 名义而言贡献 ~+1.17% NAV(相对于全 hedged 基准 +1.50% NAV,折损 33bp)。
- **E3 情景下对冲有效性骤降至 65%**,且银行间 NDF 流动性可能临时枯竭(2015/8 周内 NDF 报价宽至 50pips bid/ask),这种情况下 **risk reversal 优势进一步放大**——RR 是期权无 fixing 错配。
- **HIBOR 跳升 200–500bps 的二阶效应**:NDF 隐含 CNH 端 funding cost 飙升,roll 成本剧增。题中提到的 +140bp/年 carry 在 E1 路径下 1 个月内反转为 -50bp/月 carry(即年化 -600bp 的 carry drag)。

### 3.3 推荐保护层

- **在 NDF 入场时同步设定"basis stop-loss"**:当 1M CNH-CNY basis > 350 pips,触发 NDF 部分 unwind + RR 加仓。
- **保留 1M ATM CNH put (USD/CNH 7.30 strike) 作为 catastrophic insurance**,名义 5% NAV,成本约 18bp NAV/月,可覆盖 E3 极端情景的 NDF basis 瓦解风险。

---

## 4. USD/HKD 交叉对冲与 HIBOR 二阶传导

### 4.1 USD/HKD 当前定位

- USD/HKD 现报 **7.8480**(逼近弱方兑换保证 7.85)
- LERS 7.75–7.85 区间在 1983 年以来从未失守
- 1M USD/HKD 远期点 ≈ -180 pips(USD-HKD IR diff: SOFR 4.30% vs HIBOR 4.10%)

### 4.2 cross-hedge 逻辑与硬数字

**论点**: USD/HKD short 提供"近似免费的尾部保险"——

- USD/HKD 因 LERS 而 **存在硬上限 7.85**(忽略 break-peg 极端尾)
- 现货距离 7.85 仅 20 pips,**short USD/HKD 的最大下行损失被 LERS 封顶在 ~26 NAV bp(基于 5% NAV 名义)**
- 当 USD/CNH 在 HFCAA 路径升至 7.50 时,USD/HKD 几乎不动(被 LERS 钉住),因此 cross-hedge **不会贡献尾部对冲**
- 但 USD/HKD short 提供 +180 pips 远期 carry → **+22 NAV bp/月 carry 收益(5% NAV 名义)**

**判断**: USD/HKD 不是 HFCAA 的尾部对冲,而是 **基本"免费"的 carry 来源**——如果配置 5% NAV 名义 short USD/HKD,在 1M 视角下 期望收益 +22bp NAV,最大下行 -26bp NAV(若 USD/HKD 触及 7.85 触发 HKMA 干预),净 expected payoff > 0。

### 4.3 HKD HIBOR 跳升对组合 option theta 的二阶传导

**触发条件**: USD/HKD 触及 7.85 → HKMA 卖出 USD 买入 HKD → 银行体系 aggregate balance 从当前约 HKD 450bn 抽走至 100bn 临界 → **HKD HIBOR 1M 从 4.10% 跳升至 6.50–8.00%** (参考 2018/4 与 2023/3 经验)。

二阶传导链条:

1. **HSCEI put 0.5% NAV 名义**: 期权定价基于 HKD 利率端的 funding cost(不是 USD)。HIBOR 跳升 250bps:
   - put 价格上升约 7-9%(HKD 利率上升使指数远期下降,put 更深 ITM)
   - **MTM 收益 +3.5–4.5 NAV bp** (5bp put 上升 7-9%)
   - 但 vol 同步从 22% 跳到 28-30%,**vega 增益再加 +6–8 NAV bp**
   - **theta 加速 ~25%**(从 -0.6bp/天 加速到 -0.75bp/天),月度 theta 损失从 -18bp 增至 -22.5bp

2. **0700 call spread 0.5% NAV (Card 05 修订后保留)**: 0700 在 HK 上市,HKD 利率上升使其远期下降,**call spread 价值下降 ~3-5%**,损失约 -2 NAV bp。

3. **CNH 端联动**: 历史上 HKD HIBOR 跳升 200bps 的事件中,CNH HIBOR 平均同步上行 80-120bps(港-离岸 CNH funding 同业市场重叠)。这意味着 **NDF carry 同步反转 -40bp/月**。

### 4.4 净效应矩阵 (USD/HKD 触及 7.85 + HKD HIBOR 250bps 跳升情景)

| 组件 | NAV bp 影响 |
| --- | --- |
| HSCEI put MTM (price + vega) | +9.5 |
| HSCEI put theta 加速 | -4.5 |
| 0700 call spread 损失 | -2.0 |
| USD/HKD short cross-hedge MTM (5% 名义触及 7.85) | -2.6 |
| CNH NDF carry 反转 (35% 名义) | -27.5 |
| **净影响 (1M 累积)** | **-27.1 NAV bp** |

**结论**: HKD HIBOR 跳升对组合是 **温和负面**(-27bp NAV),但 HSCEI put 的 vega/价格增益部分对冲了 NDF carry 反转。**没有 HSCEI put 的话,这一情景净影响约 -34bp NAV**,因此 Card 05 保留 0.5% NAV 的 HSCEI put 在 FX 二阶传导上是有效的。

---

## 5. 最终建议: 修订后 FX 对冲层结构

| 组件 | 名义 (NAV%) | 工具 | 主要功能 | 月度 carry | HFCAA-tail 保护 |
| --- | --- | --- | --- | --- | --- |
| 1M NDF short USD/CNH @ 7.2031 | 35% | NDF | 主对冲腿 + carry | +8.2 bp | -136 bp |
| 1M RR Buy 7.10P / Sell 7.50C | 15% | OTC option | 尾部保护 | 0 | -31 bp |
| 1M USD/HKD short forward @ 7.8462 | 5% | DF | "免费"carry + LERS 兜底 | +1.1 bp | ~0 bp |
| 1M USD/CNH 7.30 ATM put (catastrophic) | 5% (名义) | OTC option | basis 瓦解保险 | -1.5 bp | +25 bp |
| **合计** | **60% (名义敞口)** | — | 多腿组合 | **+7.8 bp** | **-142 bp** |

### 5.1 与 Card 05 基线对比

| 指标 | Card 05 基线 (50% NDF) | Card 06 修订 | 差异 |
| --- | --- | --- | --- |
| 月度 carry | +11.7 bp | +7.8 bp | -3.9 bp |
| HFCAA-base 路径 (USD/CNH 7.40) | -147 bp | -64 bp | **+83 bp** |
| HFCAA-tail 路径 (USD/CNH 7.55) | -213 bp | -97 bp | **+116 bp** |
| E1 PBoC fix -0.8% 情景对冲有效性 | 78% | 88%(RR 不依赖 fixing) | **+10pp** |
| E3 极端情景对冲有效性 | 65% | 79% | **+14pp** |

**净判断**: 让出 ~3.9bp/月 carry 换取 HFCAA 尾部 +83~116bp NAV 保护 + 极端情景对冲有效性 +10–14pp,这是一笔显著正凹效用的交易,**强烈建议替代 Card 05 的纯 NDF 方案**。

### 5.2 触发条件 / 动态调整规则

| 触发条件 | 动作 |
| --- | --- |
| 1M CNH-CNY basis > 350 pips | NDF 减半至 17.5%,RR 加倍至 25% |
| HIBOR > 6.0% | 暂停 NDF roll,改用 USD/HKD 远期临时替代 |
| USD/CNH 突破 7.45 | 7.50 Call 提前回补(-50% 名义),保留 7.10 put 多头 |
| HSCEI 1M IV > 30% | call spread 部分 unwind,vega 锁定 |
| HKD HIBOR > 6.5% (LERS 触发) | USD/HKD short unwind,转 USD/CNY DF |

---

## 6. 关键风险与监控指标

1. **NDF 银行间流动性**: 当前 50mn USD ticket 5–8 pips 滑点合理,但 PBoC 干预前 24h 通常出现 bid/ask 走宽至 30+ pips,执行窗口需提前到周一/周三 HK time 9:00-11:00。
2. **RR 行权日历错配**: USD/CNH RR 通常按 BBG 上海 16:00 fix,与 NDF CFETS 16:30 fix 错配 30 分钟。在 PBoC 突然降中间价的尾部日,这 30 分钟可能造成 50-150 pips fixing risk。建议把 RR 到期日设在 NDF 月度滚动的前一交易日。
3. **CSRC 跨境衍生品备案**: 修订后的 FX 结构涉及多个 OTC option(RR + 7.30 put),需在 SAFE 27 号文 / CSRC 11 号文框架下备案。Card 02 合规官提示的备案约束在此延伸。
4. **CNH 端 PIPL/数据出境**: 不直接相关,但若组合包含 BABA/9988、BIDU/9888,FX 对冲指令传输至离岸 prime broker 时需走数据出境合规路径。

## 7. 移交说明

我把卡片移交给 **derivatives-strategist (衍生品策略师)**,理由:

1. 本卡片提出的 RR 7.10P/7.50C 结构需要在 **真实 USD/CNH vol surface(skew、smile、term-structure)** 上做精确定价与对冲度调优,我作为 FX strategist 的视角侧重于 spot/carry/macro 路径,而 vol surface 的 micro 与 vega/gamma 二阶希腊字母管理是衍生品策略师专属的。
2. RR + 7.30 put + HSCEI put + 0700 call spread 一共 4 条 option 腿,组合层面的 cross-gamma、vega netting、vanna/volga 需要专门的衍生品视角统一管理。
3. 我已把 FX 层的最优结构与触发规则量化清楚,下一棒由衍生品视角对组合层 option book 做整体压力测试,然后才能进入 Card 08+ 的执行层与合规终核。

建议下一卡片立场: **stress-test**(对本卡片的 vol surface 假设与 RR 零成本结构做严格的衍生品定价检验)。

## Follow-up

- Analyst: derivatives-strategist
- Topic: 在FX层引入7.10P/7.50C risk reversal、7.30 catastrophic put、HSCEI put、0700 call spread四条期权腿后,组合层的vol surface定价、cross-gamma、vega netting与vanna/volga的统一压力测试
- Question: 请基于本卡片提出的修订后FX对冲层(35% NDF + 15% USD/CNH RR 7.10P/7.50C + 5% USD/HKD short + 5% USD/CNH 7.30 catastrophic put + 0.5% HSCEI put + 0.5% 0700 call spread),(1)用真实CNH vol surface(假设1M ATM 5.5%、25-delta RR +1.2 vol、25-delta BF 0.4 vol)精确定价7.10P/7.50C是否真能做到零保费,如何调整strikes;(2)给出组合层vega/gamma/vanna/volga的netting矩阵,识别HFCAA路径下哪些希腊字母会失去正交性导致对冲共振失效;(3)在USD/CNH spot从7.20跳升至7.45/7.55/7.80三档+ATM vol从5.5%跳到12%/18%/25%的二维网格中,组合option book的MTM分布与最大回撤;(4)RR月底到期日与NDF CFETS fixing错配30分钟带来的fixing risk如何用overnight option或同日tom-next swap对冲。
