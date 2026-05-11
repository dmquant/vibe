---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "固收与衍生品"
---

# ASTS 当前期权链处于‘Gamma 极化’状态，5 月 11 日事件若能突破 $15 关键阻力位，结构性逼空风险将达到峰值；但 Rakuten 的供给释放与高昂的做多成本极大提高了回补的摩擦系数。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **stress-test**
Completed: **08/05/2026, 21:14:37**

## Links

- Whiteboard topic: [[空间经济的社交溢价与估值泡沫]]
- Card topic: [[Wrote whiteboard 072536b3 0257 4572 9772 f73ed5ddab3c card 05 report.en.md (4642 bytes); wrote whiteboard 072536b3 0257]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

Wrote whiteboard/072536b3 0257 4572 9772 f73ed5ddab3c/card 05/report.en.md (4642 bytes); wrote whiteboard/072536b3 0257 4572 9772 f73ed5ddab3c/card 05/report.z…

## Question

Investigate the topic "Wrote whiteboard/072536b3 0257 4572 9772 f73ed5ddab3c/card 05/report.en.md (4642 bytes); wrote whiteboard/072536b3 0257 4572 9772 f73ed5dda…" and make the strongest evidence-based judgment you can.

## Summary

截至 2026-05-08，ASTS 展现出典型的‘Gamma 陷阱’结构。48.63M 股空头头寸（占流通盘约 25%+）与三位数隐含波动率（IV）共同构成了一个极其敏感的动力学环境。5 月 11 日的业务更新是核心催化剂：若利好触发价格突破关键 Gamma 墙（预估在 $12.5-$15 区间），做市商的被迫补仓将产生自我强化的逼空效应。然而，Rakuten 的潜在减持供给与极高的期权时间价值衰减（Theta）是多头的核心阻力。压力测试显示，逼空具备结构可行性，但属于高弹性的‘瞬时博弈’而非持续性行情。

> [!warning]
> The list payload for this card looked like execution-log text. This note uses meta/report file fallback when available.

## Report

# 衍生品策略报告：ASTS 结构性空头挤压（Short Squeeze）可行性分析
**日期：** 2026-05-08
**分析师：** 衍生品策略师 (Derivatives Strategist)
**立场：** 压力测试 (结构性风险评估)

## 执行摘要
截至 2026 年 5 月 8 日，AST SpaceMobile (ASTS) 已进入极端的战术脆弱状态。在 BlueBird 7 (BB7) 技术受挫以及 Starlink Direct to Cell (D2C) 竞争压力的背景下，该股累积了高达 **4863 万股** 的空头头寸。由于市场预期 5 月 11 日将发布关键业务更新，衍生品市场已定价了“波动性爆发”，隐含波动率 (IV) 超过 100%。本报告对空头挤压的结构性可行性进行了压力测试，识别了可能触发自我强化买入螺旋的“Gamma 墙”，以及可能抑制行情发展的对抗力量（Rakuten 供给）。

---

## 1. 空头头寸格局：火药桶
截至 2026 年 5 月初的空头数据显示，这已是一场高度拥挤的交易：
- **总空头股数：** 48.63 Million。
- **预估流通盘占用率：** ~25% 至 30%（取决于对活跃流通盘的定义）。
- **回补天数 (DTC)：** 约为 **4.8 天**（基于 1000 万股的日均成交量）。一旦 DTC 超过 3.0，在利好消息出现时通常被视为空头的“高危”区间。
- **空头构成：** 高度集中在将 ASTS 作为“二元技术失败”对冲工具的机构对冲基金中。这种集中性增加了在触发行权价保证金追缴时出现“被迫离场”多米诺效应的风险。

---

## 2. 期权市场结构：“Gamma 陷阱”
5 月 15 日到期的 ASTS 期权链展现了极端的“Gamma 极化”特征。在 100%+ 的 IV 下，期权权利金被严重高估，这意味着做市商 (MM) 承担着巨大的方向性风险。

### 关键行权价 (Gamma 墙)：
- **$10.00 行权价：** 当前的心理支撑位。高看跌期权 (Put) 未平仓合约 (OI) 提供了“Delta 缓冲”，但若跌破此位可能导致加速抛售。
- **$12.50 行权价：** “Gamma 触发位”。突破此水平将迫使做市商买入股票以对冲其空头看涨期权 (Call) 敞口，产生第一波买盘。
- **$15.00 行权价：** “Gamma 墙”。此处集中了大量的看涨期权 OI。如果 ASTS 在 5 月 11 日向 15 美元靠拢，Delta 变化率 (Gamma) 将达到峰值，要求做市商买入数百万股以保持 Delta 中性。

**机制：** 如果 5 月 11 日的业务更新哪怕只是“温和利好”，初始的价格飙升都将强制触发 Gamma 对冲。做市商的“被迫买入”将为空头回补 48.63M 股提供所需的流动性缺口，从而引发挤压。

---

## 3. 催化剂压力测试：5 月 11 日业务更新
挤压的结构可行性完全取决于 5 月 11 日叙事逻辑的转变：
- **看涨挤压触发点：** 宣布与一级移动网络运营商 (MNO，如 AT&T) 达成涉及非稀释性预付款的战略合作，或 BB7 部署的明确修复路径。
- **看跌挤压僵局：** 宣布股权融资（稀释）或 45 颗卫星部署目标的进一步延迟。

---

## 4. 对抗力量与摩擦系数
尽管结构已为挤压做好准备，但存在两个主要的摩擦点：
1. **Rakuten 的供给：** 前序报告指出 Rakuten 可能有减持意图。在 12-15 美元水平进入市场的大型机构大宗交易将为空头回补提供必要的流动性，从而阻止股价冲向极端高点（20 美元以上）。
2. **IV 崩坍 (Theta 风险)：** 在 IV > 100% 的情况下，任何延迟或“符合预期”的消息都将导致 IV 的剧烈萎缩。大量的散户看涨期权持有者即使在股价小幅上涨时也会看到其仓位价值蒸发，这可能引发“逢高抛售”行为。

---

## 5. 战略判断
ASTS 在 5 月 11 日发生结构性空头挤压的可行性为 **高 (High)**，但其持续性为 **低 (Low)**。
- **风险评估：** “Gamma 陷阱”已设好。突破 15 美元是做市商的临界点，可能迫使股价出现抛物线式飙升。
- **压力测试结论：** 48.63M 股空头头寸在利好消息下创造了“供给真空”。然而，我们预计机构供给 (Rakuten) 将充当天花板，可能将任何挤压驱动的涨幅限制在 18-22 美元区间。

**建议：** 重点监控 5 月 11 日开盘前 30 分钟的 12.50 美元行权价。若股价持续站稳该水平并伴随高成交量，则确认 Gamma 挤压轨迹。

---
*本文件为 Card-05 交付物。经认证的工作日期：2026-05-08。*

## Follow-up

- Analyst: offshore-strategist
- Topic: Wrote whiteboard/072536b3 0257 4572 9772 f73ed5ddab3c/card 05/report.en.md (4642 bytes); wrote whiteboard/072536b3 0257 4572 9772 f73ed5ddab3c/card 05/report.z… · synthesis
- Question: Using your HK Connect, ADRs, US tech sector expertise, synthesize the ongoing research on “Wrote whiteboard/072536b3 0257 4572 9772 f73ed5ddab3c/card 05/report.en.md (4642 bytes); wrote whiteboard/072536b3 0257 4572 9772 f73ed5ddab3c/card 05/report.z… · synthesis”, especially the thesis "Wrote whiteboard/072536b3 0257 4572 9772 f73ed5ddab3c/card 05/report.en.md (4642 bytes); wrote whiteboard/072536b3 0257…".
