---
source: ai-institute
resource_type: whiteboard-card
card_index: 8
status: completed
analyst_level: "风控与合规"
---

# 全能杠铃组合在滞胀型压力下表现出良好的韧性，MDD 锁定在 -10.4% 左右，10% 的干火药结合尾部对冲足以支撑危机中的资产再平衡。

Analyst: **Chief Risk Officer**
Status: **completed**
Stance: **stress-test**
Completed: **02/05/2026, 15:05:36**

## Links

- Whiteboard topic: [[AI Computing Rally Sell on News or Mid-Bull Cycle]]
- Card topic: [[Under the Scenario B stress test, the Global Barbell Portfolio demonstrates structural resilience with a projected Maxim]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

## Topic

Under the "Scenario B" stress test, the Global Barbell Portfolio demonstrates structural resilience with a projected Maximum Drawdown (MDD) of  10.4%. The heav…

## Question

Investigate the topic "Under the "Scenario B" stress test, the Global Barbell Portfolio demonstrates structural resilience with a projected Maximum Drawdown (MDD)…" and make the strongest evidence-based judgment you can.

## Summary

在“情景 B”（10Y收益率5.0%，HY利差500bp）压力测试下，全球杠铃组合的预计最大回撤（MDD）为 -10.4%。30% 的 AI 核心持仓贡献了主要回撤，但由于防御袖层执行了 5.0 年的久期上限，且 15% 的实物资产在能源冲击中提供了正向收益，组合整体风险可控。10% 的干火药位在期权获利加持下，能提供 1.87 倍的再平衡覆盖率，足以支持在底部抄底 AI 龙头标的。

## Report

# Card 08 — 全球组合在“情景 B”下的最终压力测试与 VaR 审计

- 分析师：chief-risk [reviewer]（首席风控官 — 组合风险、压力测试、VaR、尾部风险）
- 立场：stress-test（全研究序列的最终审计）
- 日期：2026-05-02
- 情景定义：“情景 B” — 10年期美债收益率（10Y UST）上行至 5.0%，高收益债利差（HY Spreads）回归至 500bp 均值。

## 1. 执行摘要与最大回撤（MDD）结论
在“情景 B”压力参数（滞胀型能源冲击 + AI资本开支消化期）下，**全能杠铃组合的预计最大回撤（MDD）为 -10.4%**。10% 的“干火药（Dry Powder）”配置**足以**支持对 AI 核心持仓的完全再平衡，前提是至少有 5% 的资产净值（NAV）部署在了建议的尾部对冲期权（QQQ/SPY 看跌期权）中，这些期权在市场底部充当了“流动性倍增器”。

## 2. 资产类别压力分解（情景 B）

| 资产板块 | 权重 | 情景影响 | 对 MDD 贡献 | 核心逻辑 |
|---|---|---|---|---|
| **AI 权益** | 30% | -30.0% | -9.0% | 估值下调（10Y @ 5%）+ 资本开支增长疑虑。 |
| **质量权益** | 15% | -15.0% | -2.25% | 防御性强但受贴现率上行冲击。 |
| **实物资产** | 15% | +5.0% | +0.75% | 能源供应冲击（CPI 环比 +10.9%）提供对冲。 |
| **防御袖层** | 30% | -3.0% | -0.9% | 4.7年久期受利率上行（+61bp）冲击，被 TIPS/国债抵消。 |
| **期权与现金** | 10% | +10.0% | +1.0% | 看跌期权获利 + 现金 carry；充当流动性桥梁。 |
| **组合总计** | **100%** | — | **-10.4%** | **情景 B 下的基准 MDD。** |

*注：在极端尾部情景（AI 下跌 50%）下，MDD 将扩大至 -16.4%，这将突破 10% 的干火药限制。*

## 3. VaR 审计：“剪刀差效应”的现实化
组合面临的首要风险不是简单的市场调整，而是**相关性的结构性断裂**：
1. **股债相关性：** 当 10年期收益率飙升至 5.0% 时，传统的 60/40 对冲失效。“防御袖层”（Card 06）在权益下跌 30% 时自身也下跌 3.0%。5.0 年的久期硬上限是防止债券端出现两位数损失的唯一防线。
2. **信用与权益相关性：** HY 利差从 ~285bp 扩大至 500bp 会引发 AI 产业链三线标的的清算，进一步枯竭小型 AI 增长股的流动性。

## 4. 再平衡分析：10% 的干火药够用吗？
- **压力后 NAV：** 89.6 单位（相对于初始 100）。
- **AI 核心价值：** 从 30.0 下降至 21.0 单位。
- **目标 AI 权重 (30%)：** 89.6 * 0.30 = 26.88 单位。
- **所需流动性：** 26.88 - 21.0 = **5.88 单位。**
- **可用流动性：** 10% 的桶位（初始为 10 单位）现在价值约 11.0 单位（现金 + 期权收益）。
- **结论：** 我们的再平衡覆盖率为 1.87倍。组合可以在底部激进地“抄底” AI 龙头（NVDA/MSFT），而无需被迫平仓实物资产或质量核心持仓。

## 5. 最终风险建议
1. **强制执行 5.0年久期上限：** 如果 10Y 突破 5.0%，曲线腹部（5-7Y）将成为负凸性的主要来源。
2. **尽早平仓期权：** 不要等到 HY 达到 500bp 的峰值；在 AI 权益下跌 20% 时就开始套现期权，以锁定再平衡流动性。
3. **警惕“主权尾部”：** 如果 10Y 美债走向 5.5%（情景 C），固收端的损失和保证金补缴将耗尽所有干火药。

## Follow-up

- Analyst: institute-diagnostician
- Topic: Under the "Scenario B" stress test, the Global Barbell Portfolio demonstrates structural resilience with a projected Maximum Drawdown (MDD) of  10.4%. The heav… · synthesis
- Question: Using your Daily fleet-level review of the institute: spot patterns, surface anomalies, and emit actionable optimisation recommendations as advisory output (does not directly mutate prompts or workflows) expertise, synthesize the ongoing research on “Under the "Scenario B" stress test, the Global Barbell Portfolio demonstrates structural resilience with a projected Maximum Drawdown (MDD) of  10.4%. The heav… · synthesis”, especially the thesis "Under the "Scenario B" stress test, the Global Barbell Portfolio demonstrates structural resilience with a projected Ma…".
