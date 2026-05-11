---
source: ai-institute
resource_type: whiteboard-card
card_index: 7
status: completed
analyst_level: "固收与衍生品"
---

# 衍生品桥接应以“锁定 Delta、盈余 Gamma、修正基差”为核心，利用高流动性工具实现风控降仓与现货交易的时空分离。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **stress-test**
Completed: **28/04/2026, 20:30:18**

## Links

- Whiteboard topic: [[AI生产力工具的商业化临界点]]
- Card topic: [[衍生品桥接应以“锁定 Delta、盈余 Gamma、修正基差”为核心，利用高流动性工具实现风控降仓与现货交易的时空分离。]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

衍生品桥接应以“锁定 Delta、盈余 Gamma、修正基差”为核心，利用高流动性工具实现风控降仓与现货交易的时空分离。

## Question

Investigate the topic "衍生品桥接应以“锁定 Delta、盈余 Gamma、修正基差”为核心，利用高流动性工具实现风控降仓与现货交易的时空分离。" and make the strongest evidence-based judgment you can.

## Summary

针对 11% 仓位压降窗口，建议采用“三层对冲桥接结构”：HSTECH 期货空头锁定 70%-80% 的 Beta 敞口；5/10 OTM Put Spread 提供 Gamma 防护并降低权利金成本；9988.HK/9888.HK 个股 Long Put 动态对冲基差偏离。通过每日 Cash-Futures Swap 置换，确保有效敞口平滑向 16% 目标过渡，最小化保证金与冲击风险。

## Report

# China AI Cloud 仓位压降的衍生品桥接结构方案

## 1. 策略背景与执行约束
根据风控与交易决策，需在 D0–D8 窗口内将 China AI Cloud 仓位由 27% 压降至 16%。为最小化执行期间的风险敞口，本方案采用“衍生品先行桥接，现货分日置换”的思路。

**核心约束：**
*   **非净空头限制**：桥接头寸的总 Delta 不得超过拟卖出现货的总 Delta，确保组合始终维持净多头或 Delta 中性（针对压降部分）。
*   **Gamma 管理**：避免在波动率跳升时出现大幅 Delta 偏离。
*   **基差风险控制**：应对个股（9988.HK/9888.HK）相对于恒生科技指数（HSTECH）的超额回撤。
*   **保证金风险**：在指数意外上涨时，确保期货空头的保证金补缴不触发流动性压力。

## 2. 桥接结构设计：Delta-Gamma-Basis 三层防御

### 第一层：Delta 桥接（HSTECH 远期/期货）
*   **操作**：在 D0 开盘阶段，卖出对应约 7.7%（拟卖出量 11% 的 70%）组合 NAV 的 HSTECH 当月期货合约。
*   **目的**：利用期货的高流动性瞬间锁定大部分 Beta 敞口。
*   **动态调整**：随着现货卖出的完成，每日按比例平仓期货空头（Cash-Futures Swap），保持有效敞口稳定在 16% 的目标水平。

### 第二层：Gamma 与尾部防护（HSTECH Put Spread）
*   **操作**：买入 5% OTM（虚值）Put，同时卖出 10% OTM Put，构建 HSTECH 看跌价差组合。
*   **目的**：
    *   提供非线性保护：若市场在执行窗口内发生 5% 以上的跳空下跌，价差组合提供的正 Gamma 可抵消期货 Beta 对冲的滞后性。
    *   成本控制：通过卖出更深虚值 Put 降低权利金支出，最小化 Theta 损耗。

### 第三层：个股基差修正（9988.HK / 9888.HK / 0700.HK 个股期权）
*   **策略**：针对流动性相对较弱或波动率异常的 9988.HK 和 9888.HK，配置少量 1 周到期的 ATM/轻微 OTM Long Put。
*   **目的**：当个股因大额卖出产生“抛压折价”且指数相对抗跌时，个股期权可覆盖基差风险。0700.HK 作为流动性核心，主要依赖指数对冲，仅在波动率突破 2 标准差时进行单边补强。

## 3. 风险参数对照表

| 风险维度 | 对冲工具 | 管理逻辑 | 压力测试响应 |
| :--- | :--- | :--- | :--- |
| **Gamma 风险** | Put Spread | 保持轻微 Long Gamma 状态 | 波动率飙升时，期权增值对冲 Delta 缺口 |
| **基差风险** | 个股 Long Put | 覆盖个股相对于指数的 Alpha 下行 | 基差脱钩 > 2% 时触发个股期权增持 |
| **保证金风险** | 现货多头/现金 | 期货敞口限制在拟卖出量的 80% 以内 | 指数上涨 10% 时，现货端盈利覆盖期货保证金支出 |
| **流动性风险** | HSTECH 期货 | 优先在主连合约执行 | 冲击成本 > 50bps 时暂停现货卖出，保留期货桥接 |

## 4. 动态执行逻辑 (D0–D8)
1.  **D0 Morning**: 建立期货空头与 Put Spread 桥接。
2.  **D0–D8**: Algo 交易员按成交量上限（如 15% ADV）卖出现货。
3.  **D0–D8 Evening**: 衍生品台根据当日现货卖出金额，买回等 Delta 的期货，保持“有效 Beta”恒定。
4.  **D8**: 完成最后现货卖出，清空剩余期权残值与期货空头。

## 5. 结论
本桥接结构通过“期货锁定 Delta + 价差锁定 Gamma + 个股锁定基差”，在不改变长期投资逻辑的前提下，实现了压降窗口内的风险屏蔽。该方案有效防止了风控指令在执行过程中因市场波动导致的“二次伤害”。

## Follow-up

- Analyst: chief-strategist
- Topic: AI 生产力工具商业化投资框架的终局总结与行动路线图
- Question: 综合 TMT 基本面重估、宏观压力测试、风控降仓及衍生品对冲方案，请给出该 AI 软件组合在 2026 年下半年的最终投资建议与动态调整纪律清单。
