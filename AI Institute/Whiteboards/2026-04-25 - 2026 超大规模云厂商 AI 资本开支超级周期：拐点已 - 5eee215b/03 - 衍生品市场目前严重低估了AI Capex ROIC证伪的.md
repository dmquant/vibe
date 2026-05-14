---
source: ai-institute
resource_type: whiteboard-card
card_index: 3
status: completed
analyst_level: "固收与衍生品"
---

# 衍生品市场目前严重低估了AI Capex ROIC证伪的非线性断层风险，3M-6M 15至25-delta的虚值看跌期权存在结构性错误定价。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **stress-test**
Completed: **25/04/2026, 04:30:21**

## Links

- Whiteboard topic: [[2026 超大规模云厂商 AI 资本开支超级周期：拐点已至，还是刚刚开始？ 分析师 ：tmt analyst（TMT 行业分析师） 关联任务 ：chip supply chain（芯片供应链月报） 撰写日期 ：2026 04 25 卡片编号]]
- Card topic: [[衍生品市场目前严重低估了AI Capex ROIC证伪的非线性断层风险，3M-6M 15至25-delta的虚值看跌期权存在结构性错误定价。]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

衍生品市场目前严重低估了AI Capex ROIC证伪的非线性断层风险，3M-6M 15至25-delta的虚值看跌期权存在结构性错误定价。

## Question

Investigate the topic "衍生品市场目前严重低估了AI Capex ROIC证伪的非线性断层风险，3M-6M 15至25-delta的虚值看跌期权存在结构性错误定价。" and make the strongest evidence-based judgment you can.

## Summary

通过分析表明，NVDA Skew的微幅反转（+2vol）与Mag7波动率压缩仅计价了“软着陆”，远未对AI Capex隐含的ROIC证伪风险进行充分尾部定价。0DTE巨量交易带来的Gamma Pinning扭曲了期限结构，导致3M-6M的远端OTM Put存在显著低估。建议通过日历价差、偏度交易和相对波动率策略捕捉此错配。

## Report

# 2026 AI Capex 衍生品风险定价：从 Vol Surface 与 Gamma 寻找错配

分析师  ：derivatives-strategist（衍生品策略师）
关联任务  ：options_strategy_monthly
撰写日期  ：2026 04 25
卡片编号  ：3 / 10

## 1. 核心判断：ROIC 证伪的尾部风险（Tail Risk）尚未被充分定价

基于 Card 2 对微观结构相关性的敏锐捕捉，我们从期权曲面（Vol Surface）的视角进行压力测试。结论是：**公开市场的衍生品仅计价了“动能衰减”与“软着陆”，但严重低估了 AI Capex 无法转化为 ROIC 时所引发的非线性断层风险（Tail Falsification Risk）。**

## 2. 三大数据现象的定量评估

### A. Skew 翻转：从 Call FOMO 到浅层的 Put Hedging
*   **现象：** NVDA 3M 25-delta Skew 从 -3vol（看涨极度昂贵）漂移至 +2vol（看跌微幅昂贵）。
*   **评估：** Skew 的翻转确实表明市场从“无脑追高”转向了“防御下行”。然而，对于 NVDA 这样高 Beta、强周期属性的标的，在宏观拐点或资本开支缩减的压力下，其下行风险定价通常应达到 **+8 到 +12vol**。当前的 +2vol 说明对冲需求仅仅是预防性的（如财报轻微不及预期），远未达到对 ROIC 逻辑崩塌的恐慌级别定价。

### B. Vol Compression：拥挤的“伪安全资产”
*   **现象：** Mag7 相对 SPX 的波动率（Relative Vol）累计压缩了约 30%。
*   **评估：** 这种压缩反映了机构将 Mag7 视作指数的“压舱石”或类现金替代物。然而，当隐含波动率（IV）被过度挤压至历史低位，一旦 Card 2 提及的内部相关性彻底坍塌，将引发空前的波动率扩张（Vol Shock）。市场将 Mag7 定价为 Low Vol，这本质上是对 AI 资本开支确定性的过度自信。

### C. Gamma Exposure (GEX)：0DTE 带来的期限结构扭曲
*   **现象：** 0DTE 单票成交占比超过 35%。
*   **评估：** 巨量的 0DTE 交易导致前端聚集了大量 Gamma，做市商的 Delta 动态对冲将股价“钉死”在窄幅区间（Gamma Pinning）。这种高频的日内流动性抽干了中远期的关注度，导致 IV 期限结构（Term Structure）出现扭曲：前端因 Gamma 溢价而高耸，而中远端（3-6个月）则异常平坦，掩盖了中期的基本面风险。

## 3. 结构性错误定价空间 (Strike × Maturity)

综合上述分析，真正的错误定价位于 **3M 至 6M（中期）、15-delta 到 25-delta 的虚值看跌期权（OTM Puts）区间**。
在这个 maturity 维度，AI 资本开支的指引下调与 ROIC 不达预期的现实将真实反映在未来两季财报中；而在 strike 维度，现有的 +2vol 远无法覆盖由于 0DTE Gamma 翻转（从做市商 Positive Gamma 瞬间跌入 Negative Gamma 负反馈螺旋）所带来的深度回撤风险。

## 4. 具体交易策略与风险预算

为了利用上述错配，我们建议构建以下三种交易组合：

*   **Calendar Trade (日历价差)：前端补贴远端尾部**
    *   **操作：** 持续卖出 0DTE/1W ATM Straddle 获取高昂的短期 Gamma/Theta 溢价，以此资金买入 3M-6M 25-delta 的 NVDA Put。
    *   **逻辑：** 利用前端的高波和 Pinning 效应，补贴真正的基本面看跌期权成本。
    *   **风险预算：** 1.5% AUM，严格控制前端卖空的爆仓风险（需带保护）。
*   **Skew Trade (偏度交易)：零成本看跌期权组合**
    *   **操作：** 卖出 3M ATM Call (利用依然存在的动能惯性)，买入 3M 15-delta Put (利用被低估的 +2vol)。构建 Bearish Risk Reversal。
    *   **逻辑：** 对冲 ROIC 证伪带来的尾部下跌，同时在 +2vol 的极佳赔率下获得下行 Gamma 敞口。
    *   **风险预算：** 1.0% AUM。
*   **Relative Volatility Straddle (相对波动率多头)**
    *   **操作：** 做多 Mag7 篮子的 6M Straddle，同时做空等权重 SPX 的 6M Straddle。
    *   **逻辑：** 押注 Mag7 与 SPX 波动率压缩（-30%）的均值回归。一旦 AI Capex 逻辑松动，Mag7 的波动率将剧烈放大，脱离大盘。
    *   **风险预算：** 2.0% AUM。

## Follow-up

- Analyst: chief-risk
- Topic: AI Capex 周期见顶引发的 Mag7 断崖式下跌对投资组合 VaR 及系统性流动性的冲击测算
- Question: 基于期权市场积聚的巨量 Gamma 及未定价的尾部风险，请 from 压力测试视角测算：若 AI Capex ROIC 逻辑证伪导致 Mag7 出现 20% 回撤，叠加 0DTE 引起的负 Gamma 螺旋，组合的 VaR 会受何种冲击？应如何部署尾部对冲工具？
