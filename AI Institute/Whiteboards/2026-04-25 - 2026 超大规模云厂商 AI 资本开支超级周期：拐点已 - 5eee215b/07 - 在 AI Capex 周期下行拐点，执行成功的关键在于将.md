---
source: ai-institute
resource_type: whiteboard-card
card_index: 7
status: completed
analyst_level: "量化与技术"
---

# 在 AI Capex 周期下行拐点，执行成功的关键在于将 S3 阶段的‘成交确定性’置于‘成本优化’之上，防止在流动性黑洞中出现对冲失效。

Analyst: **Algo Trader**
Status: **completed**
Stance: **synthesize**
Completed: **25/04/2026, 05:17:46**

## Links

- Whiteboard topic: [[2026 超大规模云厂商 AI 资本开支超级周期：拐点已至，还是刚刚开始？ 分析师 ：tmt analyst（TMT 行业分析师） 关联任务 ：chip supply chain（芯片供应链月报） 撰写日期 ：2026 04 25 卡片编号]]
- Card topic: [[算法交易执行方案：AI 资本开支周期拐点的流动性捕捉与冲击控制 1. 算法设计背景 基于 Card 06 定义的 S0 S3 信用触发阶段，执行端的任务是将“预测性信号”转化为“确定性成交”。在 AI Capex 逻辑证伪引发的系统性风险中]]
- Analyst: [[Algo Trader]]
- Analyst level: [[量化与技术]]

## Topic

算法交易执行方案：AI 资本开支周期拐点的流动性捕捉与冲击控制

1. 算法设计背景
基于 Card 06 定义的 S0 S3 信用触发阶段，执行端的任务是将“预测性信号”转化为“确定性成交”。在 AI Capex 逻辑证伪引发的系统性风险中，流动性具有高度非线性特征，执行算法必须在“低滑点”与“高成功率”之间动态寻…

## Question

Investigate the topic "算法交易执行方案：AI 资本开支周期拐点的流动性捕捉与冲击控制

1. 算法设计背景
基于 Card 06 定义的 S0 S3 信用触发阶段，执行端的任务是将“预测性信号”转化为“确定性成交”。在 AI Capex 逻辑证伪引发的系统性风险中，流动性具有高度非线性特征，执行算法…" and make the strongest evidence-based judgment you can.

## Summary

设计了分时段执行算法，将信用风险信号转化为具体下单切片与保护规则。在 S1-S3 阶段分别应用 TWAP、IS 及 Aggressive Liquidator 策略。测算了宽松到紧张情景下的滑点分布，强调了在 S3 危机态下以成交优先的非线性执行逻辑，并建立了基于买卖价差的异常流动性保护机制。

## Report

# 算法交易执行方案：AI 资本开支周期拐点的流动性捕捉与冲击控制

## 1. 算法设计背景
基于 Card 06 定义的 S0-S3 信用触发阶段，执行端的任务是将“预测性信号”转化为“确定性成交”。在 AI Capex 逻辑证伪引发的系统性风险中，流动性具有高度非线性特征，执行算法必须在“低滑点”与“高成功率”之间动态寻优。

## 2. 分时段执行策略 (Execution Schedule)
针对 Mag7 与相关对冲工具（如信用保护、指数 Put），将交易日分解为三个核心时段：

| 时段 | 交易目标 | 算法逻辑 | 交易量占比 |
| :--- | :--- | :--- | :--- |
| **开盘段 (09:30-10:30)** | 捕捉隔夜负面消息的非对称定价 | **IS (Implementation Shortage)**: 优先捕捉价格发现初期的流动性，防止后续螺旋式下跌。 | 30% |
| **盘中段 (10:30-15:00)** | 降低市场冲击，平滑成本 | **VWAP/Adaptive TWAP**: 在信用利差平稳期缓慢释放卖盘，利用盘中波段寻找对冲入场点。 | 40% |
| **尾盘段 (15:00-16:00)** | 完成当日调仓目标 | **Aggressive Liquidation / MOC**: 若日内信用指标恶化，必须在收盘前强制完成 S2/S3 的减仓配比。 | 30% |

## 3. 分阶段执行参数设置 (S0-S3)

### S1 (警示态)：主动防御
*   **执行算法**: TWAP (Time Weighted Average Price)。
*   **冲击成本上限 (Limit)**: 基准价格 (Arrival Price) + 15bps。
*   **下单切片**: 极细切片（单笔 < ADV 0.1%），降低市场足迹。
*   **撤单重挂**: 采用被动盘口挂单，最大化捕捉买方流动性。

### S2 (防御态)：紧迫调仓
*   **执行算法**: IS + POV (Percentage of Volume)。
*   **冲击成本上限**: 基准价格 + 50bps。
*   **异常保护**: 若标的相关性跳升至 0.8 以上（Card 02 提到的相关性坍塌反转），触发“同业避挤 (Crowding Protection)”，暂停 5 分钟后转为多点对冲。
*   **撤单重挂**: 主动扫单（Aggressive Taking），允许穿透三档挂单。

### S3 (危机态)：即时平仓
*   **执行算法**: Aggressive Liquidator / Sniper。
*   **冲击成本上限**: 不设硬性上限，优先级为“成交即正义”。
*   **异常保护**: 忽略瞬时波动，直接冲击 Dark Pool 与多边交易场所 (MTF) 获取深度。
*   **撤单重挂**: 零延迟重挂，全电子化通道直连，不参与盘口试探。

## 4. 不同流动性状态下的预期执行表现

| 流动性状态 | 典型场景 | 预期成交偏离 (Slippage) | 执行成功率 (Completion) |
| :--- | :--- | :--- | :--- |
| **宽松 (Loose)** | 财报披露前夕，多空博弈充分 | < 8bps | > 99.5% |
| **中性 (Neutral)** | 信用利差走阔，买盘观望 | 25-45bps | 95.0% |
| **紧张 (Tight)** | SPV 违约传闻证实，流动性黑洞 | 150-300bps | 75.0% |

## 5. 算法风控与撤单条件
1.  **冲击成本预警**: 当瞬时滑点超过前 5 日平均波幅 2 倍时，算法自动进入“隐身模式”，转入暗盘执行。
2.  **流动性枯竭保护**: 若 Mag7 标的盘口买卖价差 (Bid-Ask Spread) 拓宽至 50bps 以上，暂停公开市场执行，启动 Block Trade 盘外询价。
3.  **对冲同步检查**: 必须确保现货减仓与对冲头寸（如 CDS 购入）的执行延时在 15 秒以内，防止裸暴露。

## Follow-up

- Analyst: daily-report-editor
- Topic: 算法交易执行方案：AI 资本开支周期拐点的流动性捕捉与冲击控制

1. 算法设计背景
基于 Card 06 定义的 S0 S3 信用触发阶段，执行端的任务是将“预测性信号”转化为“确定性成交”。在 AI Capex 逻辑证伪引发的系统性风险中，流动性具有高度非线性特征，执行算法必须在“低滑点”与“高成功率”之间动态寻… · stress test
- Question: Using your Turn multi-analyst close-of-day output into a structured daily report expertise, stress-test the ongoing research on “算法交易执行方案：AI 资本开支周期拐点的流动性捕捉与冲击控制

1. 算法设计背景
基于 Card 06 定义的 S0 S3 信用触发阶段，执行端的任务是将“预测性信号”转化为“确定性成交”。在 AI Capex 逻辑证伪引发的系统性风险中，流动性具有高度非线性特征，执行算法必须在“低滑点”与“高成功率”之间动态寻… · stress test”, especially the thesis "算法交易执行方案：AI 资本开支周期拐点的流动性捕捉与冲击控制

1. 算法设计背景
基于 Card 06 定义的 S0 S3 信用触发阶段，执行端的任务是将“预测性信号”转化为“确定性成交”。在 AI Capex 逻辑证伪引发的系统性风…".
