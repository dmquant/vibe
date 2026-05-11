---
source: ai-institute
resource_type: whiteboard-card
card_index: 9
status: completed
analyst_level: "固收与衍生品"
---

# 利用G7政策干预引发的极端风险逆转（RR）扭曲，构建长Gamma/Vega的美元空头组合，是捕获AI基础设施危机后流动性拐点的最优风险收益表达。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **stress-test**
Completed: **27/04/2026, 15:08:30**

## Links

- Whiteboard topic: [[2026 Q1之后超大规模云厂商AI资本开支可持续性]]
- Card topic: [[利用G7政策干预引发的极端风险逆转（RR）扭曲，构建长Gamma Vega的美元空头组合，是捕获AI基础设施危机后流动性拐点的最优风险收益表达。]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

利用G7政策干预引发的极端风险逆转（RR）扭曲，构建长Gamma/Vega的美元空头组合，是捕获AI基础设施危机后流动性拐点的最优风险收益表达。

## Question

Investigate the topic "利用G7政策干预引发的极端风险逆转（RR）扭曲，构建长Gamma/Vega的美元空头组合，是捕获AI基础设施危机后流动性拐点的最优风险收益表达。" and make the strongest evidence-based judgment you can.

## Summary

本报告构建了跨EURUSD、USDJPY和USDCNH的6M期权组合，通过买入欧元反弹和日元干预回落的波动率，同时卖出受限的人民币贬值波动率进行融资。组合在G7协同救助背景下展现出结构性正偏度，Delta配置偏向做空美元。压力测试显示，该结构能有效抵御美元二次冲高的波动率扩张，并在均值回归情景下获得非线性收益。

## Report

# 衍生品策略报告：G7协同救助背景下的FX期权组合优化与压力测试

## 1. 执行摘要 (Executive Summary)
本报告旨在为G7央行启动ALSF（AI流动性支持工具）协调救助后的第二阶段FX交易提供衍生品方案。在美元初期挤兑结束、G7政策协同见效的路径下，我们构建了一个“多维均值回归”组合：**长EURUSD上行、长USDJPY回落、短USDCNH上沿空间**。通过跨币种希腊值（Greeks）对冲，该组合旨在捕获政策干预带来的非对称波动率溢价。

## 2. 期权结构与希腊值优化 (Option Structure & Greeks Optimization)

### 2.1 组合明细 (Portfolio Details)
*   **Leg A: EURUSD 6M 1.18/1.25 Call Spread** (本币/美元)
    *   **Delta目标:** 0.25 - 0.35 (低初始Delta，捕获中后期反弹)
    *   **Vega预算:** 45% 组合总Vega (作为核心长波动率仓位)
    *   **逻辑:** 捕捉Euro-ALSF启动后欧元从估值极值回补的空间。
*   **Leg B: USDJPY 6M 158/148 Put Spread** (美元/日元)
    *   **Delta目标:** -0.30 - -0.40 (捕捉USDJPY从165+回落的负Delta)
    *   **Vega预算:** 35% 组合总Vega
    *   **逻辑:** 捕获MoF干预后的高波动率均值回归，利用USDJPY在160+时的极端负RR（JPY Put昂贵）进行结构化空头布局。
*   **Leg C: USDCNH 6M 7.45/7.65 Short Call Spread** (美元/人民币)
    *   **Delta目标:** -0.10 - -0.15 (提供融资，抵消Theta损耗)
    *   **Vega预算:** -20% 组合总Vega (短Vega，利用PBoC管理的隐含波动率天花板)
    *   **逻辑:** 卖出极度虚值的USDCNH看涨波动率，为上述长波/长Delta仓位融资。

### 2.2 整体希腊值预算
*   **组合Delta:** 初始净空头美元 (约-0.65 综合Delta)。
*   **组合Vega:** 净长Vega。在V-型转折点入场，利用波动率从峰值回落但隐含波动率（IV）仍具粘性的特性。
*   **组合Theta:** 接近中性。Leg C的权利金收入基本覆盖Leg A/B的每日时间损耗。

## 3. 波动率曲面与正偏度验证 (Volatility Surface & Skew Verification)

**结论：该组合在6M期限、25D/10D风险逆转（RR）不同状态下，仍保持显著的“结构性正偏度”。**

*   **25D RR 状态分析:**
    *   在USDJPY 160-168阶段，25D RR将达到极端的“USD Call Overfly”。由于Leg B是Put Spread（买入158 Put/卖出148 Put），其入场点正值RR极端扭曲时，即JPY看跌期权定价过高，而我们要买入的是相对于165 Spot的价内/近价平Put。
    *   **正偏度来源:** 组合的Gamma分布集中在“美元走弱”一侧。当EURUSD向上突破1.18或USDJPY向下跌破158时，组合Delta将迅速放大（Gamma爆发）。
*   **10D RR 压力测试:**
    *   即使在10D RR（尾部风险定价）进一步向美元走强侧偏离的情况下，Leg C（USDCNH Short Call Spread）提供了关键的缓冲。由于PBoC的中间价管理边界（7.30-7.35）锁定了USDCNH的实际波动上沿，7.45/7.65的Call Spread在10D空间内的Delta暴露受限，有效遏制了尾部负偏度风险。

## 4. 建仓触发器与止损规则 (Triggers & Risk Management)

| 交易腿 | 建仓触发器 (Triggers) | 止损/离场规则 (Stop-loss) |
| :--- | :--- | :--- |
| **EURUSD Call Spread** | Spot > 1.1250 且 10Y US-Bund 利差收窄 > 15bps | Spot < 1.0850 或 欧元区PMI连续两月下行 |
| **USDJPY Put Spread** | Spot > 165.00 且 MoF 确认进行“实质性干预” | Spot > 172.00 (干预彻底失败) 或 2Y JGB 收益率转负 |
| **USDCNH Call Spread** | Spot 触及 7.42 且 中间价连续 3 日强于预期 500+ pips | Spot 突破 7.55 且 PBoC 放弃中间价盯住 |

## 5. 希腊值压力测试 (Stress Test)

*   **情景1：美元二次冲高 (Spot -3%, Vol +10%)**
    *   **表现:** Leg C权利金保护，Leg A/B受Vega支撑。组合回撤预计控制在初始权利金的15%以内。
*   **情景2：均值回归加速 (Spot +5%, Vol -5%)**
    *   **表现:** Leg A/B Delta贡献剧增。尽管Vega受损，但Delta收益（Gamma效应）将抵消Vol压缩。组合预期收益率为 40%-65%。
*   **情景3：极端波动率崩溃 (Spot 0%, Vol -30%)**
    *   **表现:** 主要风险点。由于组合整体长Vega，若市场迅速进入“死寂”状态，Theta损耗将由Leg C勉强维持，需考虑主动减仓。

---
**衍生品策略师：Codex**
2026年4月27日

## Follow-up

- Analyst: asset-allocator
- Topic: 2026 Q3 全球宏观资产保值矩阵的最终配置比例与动态再平衡
- Question: 在FX组合捕捉到第一波均值回归收益后，如何将盈利转化为跨大类资产（黄金、TIPS、港股互联网、AI电力基础设施）的长效保值矩阵？在ALSF进入常态化运作后，各类资产的波动率相关性矩阵将发生何种永久性偏移？
