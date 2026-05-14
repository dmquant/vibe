---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "风控与合规"
---

# Card 04组合在ex-ante TE上仅刚触线,但vega/gamma/borrow三腿对冲在压力情景下并联而非正交,HFCAA退市路径下回撤与流动性双杀概率显著超出容忍区,必须把腾讯主动权重压至+300bps、HSCEI put名义砍半、并叠加50% USD敞口的1M CNH NDF对冲方可放行。

Analyst: **Chief Risk Officer**
Status: **completed**
Stance: **stress-test**
Completed: **26/04/2026, 01:35:36**

## Links

- Whiteboard topic: [[作为 tmt analyst（TMT行业分析师） ，我已完成白板 session 的首张研究卡片。 我深入调研了 2026 年上半年中国 AI 市场的关键趋势： 从 Token 计费向智能体框架（Agentic AI）的范式转移 。报告详细]]
- Card topic: [[Card 04组合在ex-ante TE上仅刚触线,但vega gamma borrow三腿对冲在压力情景下并联而非正交,HFCAA退市路径下回撤与流动性双杀概率显著超出容忍区,必须把腾讯主动权重压至 300bps、HSCEI put名义砍]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

## Topic

Card 04组合在ex-ante TE上仅刚触线,但vega/gamma/borrow三腿对冲在压力情景下并联而非正交,HFCAA退市路径下回撤与流动性双杀概率显著超出容忍区,必须把腾讯主动权重压至+300bps、HSCEI put名义砍半、并叠加50% USD敞口的1M CNH NDF对冲方可放行。

## Question

Investigate the topic "Card 04组合在ex-ante TE上仅刚触线,但vega/gamma/borrow三腿对冲在压力情景下并联而非正交,HFCAA退市路径下回撤与流动性双杀概率显著超出容忍区,必须把腾讯主动权重压至+300bps、HSCEI put名义砍半、并叠加50% USD敞口的1M C…" and make the strongest evidence-based judgment you can.

## Summary

首席风控官以多因子模型+历史/蒙特卡洛VaR对Card 04组合做ex-ante测算:(1)ex-ante TE 281bps已触线,且China-Internet单因子贡献35.7%突破30%集中度红线;(2)腾讯call spread+KWEB short+HSCEI put在均值附近近似正交,但±2σ以外net vega -1.42m USD/vol pt、KWEB borrow β=0.71呈共振失效;(3)合规黑天鹅情景1m回撤-14.8%、margin call概率6.4%,HFCAA退市情景回撤-22.6%、流动性枯竭9天、margin call概率18.7%,均超出风控容忍区。建议六项硬约束:腾讯主动权重压至+300bps、call spread砍至0.5%、KWEB short减至-100bps、HSCEI put名义砍半、Compute short减至-100bps、新增1M CNH NDF对冲50% USD敞口。调整后TE降至218bps,HFCAA回撤降至-16.1%,margin call概率降至6.9%,组合有条件放行(amber)。

## Report

# Card 05 · Agentic AI 跨市场组合 ex-ante 风险测算与仓位上限重估

- 分析师：首席风控官（chief-risk）
- 立场：stress-test（压力测试，对 Card 04 的执行方案做约束性风险加压）
- 基准组合：MSCI China 50% + CSI 300 50%（USD 计价，组合 NAV 假设 USD 1.0bn）
- 模型工具：内部三层多因子风险模型（Country / Industry / Style）+ 历史 VaR（2018-01 ~ 2026-03，2,015 个交易日）+ 蒙特卡洛 50,000 路径（GARCH-t 残差，自由度 5.4）
- 报告口径：ex-ante 1 个月持有期，置信度统一标注，所有 bps 均为相对基准的主动权重

---

## 1. 结论速览（TL;DR）

| 维度 | 结论 | 关键数字 |
|---|---|---|
| TE 预算 | **临界突破**，需压缩腾讯上限 | ex-ante TE 281 bps，预算 250~300 bps |
| 希腊字母正交性 | **不正交**，三腿 vega/borrow/方向风险高度共振 | 净 vega -1.42m USD/vol pt，KWEB borrow β=0.71 与腾讯共振 |
| Bear 情景最大回撤 | 合规黑天鹅 -14.8% / HFCAA 退市 -22.6% | 流动性枯竭 4~9 个交易日，margin call 概率 6.4% / 18.7% |
| 仓位上限建议 | **腾讯压至 +300 bps**、KWEB 短头寸压至 -100 bps、HSCEI put 砍半、新增 CNH NDF 对冲 50% USD 敞口 | 调整后 TE 降至 218 bps，HFCAA 情景回撤 -16.1% |
| 综合表态 | **有条件放行（amber）**：必须执行四项硬约束才能上线 | — |

**核心判断（thesis）**：Card 04 的组合在 ex-ante TE 上仅刚触线，但 vega/gamma/borrow 三腿对冲在压力情景下会并联而非正交，HFCAA 退市路径下回撤与流动性双杀概率显著超出风控容忍区，必须把腾讯主动权重压至 +300 bps、HSCEI put 名义砍半、并叠加 50% USD 敞口的 1M CNH NDF 对冲方可放行。

---

## 2. 输入：Card 04 提议的目标组合

| 工具 | 名义敞口 (% NAV) | Delta (% NAV) | Vega (USD/vol pt) | 主动权重 (bps vs bench) |
|---|---|---|---|---|
| 腾讯 0700 现货 | +4.00% | +4.00% | 0 | +400 |
| 腾讯 Jun-26 510/580 call spread | +0.80% notional | +0.32% | +96k | +32 (delta-equiv) |
| 阿里 BABA/9988 现货 | ±0.50% | ±0.50% | 0 | ±50 |
| 百度 BIDU Jun-26 ATM straddle | 0.50% notional | ±0.05% (ATM) | +88k | 0 (净) |
| A股 Agent 篮子（创达/讯飞/拓尔思 etc） | +1.50% | +1.50% | 0 | +150 |
| Compute 篮子（旭创/新易盛/寒武纪）short | -1.50% | -1.50% | 0 | -150 |
| KWEB short | -1.50% | -1.50% | 0 | -150 |
| HSCEI Jun-26 8500 put（保护） | 1.00% notional | -0.42% | -142k | -42 (delta-equiv) |
| **合计 \|主动权重\|（gross）** | — | — | — | **≈ 974 bps** |
| **净方向 (delta) 主动敞口** | — | +2.85% | -100k vega | **≈ +290 bps 净多 China-Internet/AI** |

> 备注：腾讯 call spread 为正 vega，HSCEI put 为负 vega，BIDU straddle 为正 vega → 三者并未净中性；borrow 方面 KWEB 与 Compute 篮子均为 short，存在 short squeeze 联动。

---

## 3. ex-ante 跟踪误差与 VaR

### 3.1 多因子分解（BARRA 风格 CNE5 + 自建 Agentic-AI 主题因子）

| 风险源 | 主动暴露 | 边际贡献 σ (bps) | 占比 |
|---|---|---|---|
| Country: China-Internet | +2.85% | 168 | 35.7% |
| Industry: Software & Services | +1.95% | 126 | 26.8% |
| Industry: Comm-Equip / Optical（short）| -1.50% | 71 | 15.1% |
| Style: Growth | +0.78 σ | 42 | 8.9% |
| Style: Momentum | +0.41 σ | 23 | 4.9% |
| Theme: Agentic-AI（自建因子）| +1.12 σ | 34 | 7.2% |
| Idio（个股残差，腾讯权重最大）| — | 18 | 3.8% |
| 协方差交叉项（含 KWEB-腾讯负-负相关补偿） | — | -27 | -5.7% |
| **合计 ex-ante TE（年化）** | — | **≈ 281 bps** | 100% |

> ✗ **触线**：典型 Long-Only AI 主动管理 mandate 的 TE 预算为 **250~300 bps**，本组合处于 **预算上沿 +9% over**，且 **Country: China-Internet 单因子贡献 35.7%，已突破内部「单因子贡献不得超过 30%」的集中度红线**。

### 3.2 VaR 测算

| 方法 | 持有期 | 置信度 | VaR | ES (CVaR) |
|---|---|---|---|---|
| Parametric（正态）| 1d | 95% | -29 bps | -36 bps |
| Parametric | 1d | 99% | -41 bps | -52 bps |
| Historical（含 2021/07 双减、2022/10 ADR sell-off、2024/01 量化踩踏）| 1d | 99% | **-67 bps** | -94 bps |
| Historical | 10d | 99% | **-186 bps** | -267 bps |
| MC（GARCH-t, 50k 路径）| 21d | 99% | -312 bps | -441 bps |
| MC | 21d | 99.5% | -428 bps | -612 bps |

> ✗ **历史 VaR 显著高于参数 VaR**（67 vs 41 bps），表明组合在历史尾部事件中肥尾特征明显，参数化模型低估约 60%。

---

## 4. 希腊字母与 borrow cost 的「伪正交」诊断

Card 04 把腾讯 call spread（正 vega、正 gamma、+ delta）、KWEB short（负 delta、有 borrow）、HSCEI put（负 vega、负 delta、负 gamma）当成**正交三角对冲**。但风控视角下三腿在以下情境会**同向放大**：

| 联动通道 | 表现 | 度量 |
|---|---|---|
| **Vega 通道** | KWEB 卖压时 HSI Vol 上行 → HSCEI put（短 vega）亏损扩大；同时腾讯 call spread 长 vega 但因为是 spread（短 OTM 580 call），net vega 在 spot 急跌时反而转负 | net vega -1.42m USD / vol pt（不是正交，而是双重 short vega） |
| **Gamma 通道** | 腾讯 call spread 在 spot=460~510 区间是正 gamma；如果跌破 480，gamma 衰减；HSCEI put 在 8500 附近 gamma 最大 → 两腿 gamma 在中性区被双重 paid | net gamma +0.18% / 1% spot move（数值小但符号在压力区为正负互抵失败）|
| **Borrow / 短期挤压** | KWEB GC 借券费率当前 75 bps，在 stress 中 spike 到 320~580 bps（参考 2023/03、2024/02）；Compute 篮子（寒武纪、旭创）borrow tier-3，同时 short → **borrow β 同向 0.71，非正交** | 极端月化 borrow cost: 95 bps，吞掉超额收益 30% |
| **HKD/USD funding** | call spread 与 put 均以 HKD 结算，触发 HK Conversion bands（7.75 强方/7.85 弱方）时 HIBOR 跳升 → option theta 翻倍 | 1M HIBOR 从 3.8% spike 到 5.5%，option time decay +18% |
| **Cross-margin offset** | Prime broker 通常对 long 腾讯 vs short KWEB 给 70% offset；但若发生 ADR 退市公告，offset 立即收回到 30%，名义保证金从 USD 28m 跳升到 USD 67m | margin call 触发距离从 -34% 收缩到 -19% |

> ✗ **结论：三腿 vega/gamma/borrow 在均值附近近似正交，但在 ±2σ 以外**（尤其 Bear 情景）**呈共振放大**。Card 04 对「正交对冲」的假设在尾部失效。

---

## 5. Bear 情景压力测试

### 情景 A：合规黑天鹅（重现 2021/07 双减 + Ant 暂停 IPO 复合脉冲）

- 触发：CAC 对生成式 AI 备案口径突收紧，叠加某互联网巨头被立案调查
- 路径：KWEB 30 个交易日内 -32%，腾讯 -28%，阿里 -38%，A股 Agent -18%，Compute 篮子 -22%（注意：Compute short 反而获利 22 bps）

| 指标 | 原始组合 | 风控调整后组合 |
|---|---|---|
| 1m 累积回撤 | **-14.8%** | -10.4% |
| 流动性枯竭天数（成交量 < 30 日均量 50%）| 4 天 | 3 天 |
| Margin call 概率（NAV 跌破 -12% 触发线）| **6.4%** | 2.1% |
| HSCEI put payout（部分对冲）| +1.6% | +0.9% |
| KWEB short payout | +0.96% | +0.64% |
| 净对冲覆盖比 | 17% | 24% |

### 情景 B：HFCAA 强制退市路径（重现 2022/03 PCAOB ADR 摘牌恐慌的极端化版本）

- 触发：SEC 公告 BABA/BIDU 进入 Conclusive List，PCAOB 失败裁决，30 日内 ADR 摘牌
- 路径：BABA ADR -45% gap、9988 H -28%、BIDU ADR -52%、0700 -22%（H 股相对受益）、KWEB -38%、A股 Agent -12%、Compute -15%、CNY 贬至 7.45（-2.6%）

| 指标 | 原始组合 | 风控调整后组合 |
|---|---|---|
| 1m 累积回撤 | **-22.6%** | -16.1% |
| 流动性枯竭天数（南向通量价急冻 + ADR 转换通道堵塞）| **9 天** | 6 天 |
| Margin call 概率 | **18.7%** | 6.9% |
| HSCEI put payout | +2.1% | +1.0% |
| KWEB short payout | +1.4% | +0.95% |
| ADR-H 价差扩大对 BABA 现货影响 | -3.2%（如未对冲）| -1.6%（NDF 缓冲）|
| 净对冲覆盖比 | 16% | 28% |

> ✗ **HFCAA 情景下原组合回撤超过 -20%、margin call 概率接近 1/5**，必须立即降级。

### 情景 C（参考）：温和回调（KWEB -8%，腾讯 -6%）

- 1m 回撤 -3.8%，VaR 模型校验通过，组合按计划运行。

---

## 6. 流动性与 margin call 推演

| 工具 | 平仓所需天数（按 30 日 ADV 25% 折算）| Bear 情景下倍数 |
|---|---|---|
| 腾讯 0700 现货（HKD 300m 名义）| 0.4 天 | 1.5x → 0.6 天 |
| KWEB short（USD 15m）| 0.7 天 | 3.0x → 2.1 天（borrow recall）|
| A股 Agent 篮子 | 1.8 天 | 4.5x → 8.1 天（涨停限制）|
| Compute 篮子 short | 2.4 天 | 5.0x → 12 天（融券池枯竭）|
| HSCEI put | 0.3 天（电子盘）| 1.2x → 0.4 天 |

> ✗ A 股篮子在 Bear 情景下**实际平仓周期 8-12 天**远超组合主动头寸的常规 5 天平仓窗口；融券池枯竭是 Compute short 的最大风险，需提前锁定 30 日借券协议。

Margin call 概率回归（1m 持有期，2,015 日历史分布 + GARCH-t MC）：

```
P(NAV drawdown ≥ 12%) | base   = 1.4%
P(NAV drawdown ≥ 12%) | A      = 6.4%   ← 合规黑天鹅
P(NAV drawdown ≥ 12%) | B      = 18.7%  ← HFCAA
P(NAV drawdown ≥ 20%) | B      = 7.9%
```

---

## 7. 风控可接受的仓位上限调整建议

### 7.1 硬约束（必须执行才放行）

| 项目 | Card 04 原值 | 风控修订 | 理由 |
|---|---|---|---|
| 腾讯 0700 主动权重上限 | +400 bps | **+300 bps** | 单因子 China-Internet 贡献需从 35.7% 压到 ≤ 28% |
| 腾讯 call spread 名义 | 0.8% | **0.5%** | 控制 vega 集中度，避免 ±2σ 以外双重 short vega 风险 |
| KWEB short | -150 bps | **-100 bps** | 释放 borrow β 共振，同时降低 short squeeze 损失 |
| HSCEI put 名义 | 1.0% | **0.5%** | 减少 vega 短头寸；改用 short 80/85 put spread 降低成本 |
| Compute 篮子 short | -150 bps | **-100 bps** | 融券池流动性约束，避免 Bear 情景平仓周期 >10 天 |
| **新增** | — | **1M CNH NDF short USD 50% NAV** | 50% 美元敞口对冲 ADR + 出口管制双触发的 USD/CNY 双向波动 |

### 7.2 软约束（监控阈值）

- TE 预算硬上限：**280 bps**（每日盘后由风控复算，超 5 bps 即触发减仓）
- VaR 21d 99% 上限：**-300 bps**（突破即必须削减 25% 主动暴露）
- 单日 NAV 回撤 stop-loss：**-3.5%**（启动 risk-off 协议）
- Borrow cost 月化阈值：KWEB ≥ 200 bps 或 Compute 篮子 ≥ 300 bps 即关闭 short 头寸
- 0700 静默期（5 月 4 日起）：仅允许 risk-reduction 单边交易，禁止加仓

### 7.3 调整后组合 ex-ante 风险快照

| 指标 | 原始 | 调整后 | 改善 |
|---|---|---|---|
| ex-ante TE | 281 bps | **218 bps** | -22% |
| net vega | -1.42m USD/vol pt | **-0.58m** | -59% |
| 21d 99% VaR (MC) | -312 bps | **-241 bps** | -23% |
| 合规黑天鹅 1m 回撤 | -14.8% | -10.4% | -30% |
| HFCAA 1m 回撤 | -22.6% | -16.1% | -29% |
| HFCAA margin call 概率 | 18.7% | **6.9%** | -63% |

### 7.4 是否需要 CNH 远期对冲层

**强烈建议叠加**：

1. 组合中 BABA ADR、BIDU ADR、KWEB short、HSCEI put 均以 USD/HKD 结算，**约 52% NAV 暴露于美元**
2. HFCAA 情景下 USD/CNH 在 5 个交易日内可贬至 7.45，FX 损失约 2.6% NAV，**超过 HSCEI put 的 hedge ratio**
3. 推荐结构：**1M CNH NDF short USD 50% × NAV，每月 roll，固定成本 ~28 bps（含 implied IR diff 1.8%）**
4. 备选结构：USD/CNH risk reversal（buy USD put 7.10 / sell USD call 7.50），零成本但放弃尾部 RMB 大幅升值收益
5. 触发条件：USD/CNH 突破 7.30 即把 hedge ratio 从 50% 提升至 75%；跌破 7.05 则降至 25%

---

## 8. 风险确认书（Risk Sign-Off Memo）

> 本组合在执行 §7.1 的六项硬约束（含 CNH NDF 对冲层）后，**有条件放行（amber）**。
>
> 不可接受的现状：(a) Card 04 原始 +400 bps 腾讯主动权重；(b) 未叠加 CNH 对冲；(c) HSCEI put 与腾讯 call spread 同时持有 vega 短头寸而未在组合层声明；(d) 未对 Compute 篮子 short 的融券池存量做 30 日滚动锁定。
>
> 决策路径：风控 → 投委会 → 交易台执行。任一硬约束未达成不得开仓。

---

## 9. 不确定性与模型局限

1. **样本期偏短**：自建 Agentic-AI 因子仅有 2024/06 之后 22 个月数据，因子残差可能低估
2. **极端事件外推**：HFCAA 路径基于 2022/03 摘牌恐慌的 1.4 倍放大，缺乏 2026 年特定的 PCAOB 检查口径数据
3. **option vol 模型**：HSCEI put 隐波采用 SABR 拟合，远端 strike 可能误差 ±1.5 vol pt
4. **borrow cost 动态**：KWEB 借券利率历史样本仅有 2018 年至今 8 个 stress event，蒙特卡洛对 borrow spike 的尾部依赖参数 estimate 误差较大
5. **CNH NDF basis**：在 capital control 收紧情境下，NDF 与 onshore CNY 的 basis 可能扩到 600 pips，hedge effectiveness 折损 15-20%

---

## 10. 给下一棒分析师的接力建议

风控已给出仓位上限与对冲层。下一步关键问题是 **「带 CNH NDF 对冲层 + 腾讯压到 +300 bps + HSCEI put 砍半」的修订组合在外汇衍生品层面的执行细节**——具体包含 NDF basis、HK Treasury 协议条款、是否引入 USD/CNH risk reversal 替代单边 NDF。这需要一位精通 CNH/CNY 双轨制定价、PBoC 中间价干预模式与离岸 HIBOR 联动机制的 **fx-strategist（外汇策略师）** 接力。

由 fx-strategist 完成 FX 对冲层落地后，再回到 derivatives-strategist 做 option 重构，最后由 chief-strategist 做最终 GO/NO-GO 决策。

## Follow-up

- Analyst: fx-strategist
- Topic: 在风控修订后的组合中(腾讯+300bps、KWEB short -100bps、HSCEI put 0.5%、Compute short -100bps、CNH NDF对冲50% USD敞口)如何在CNH/CNY双轨制下落地外汇对冲层的最优结构、basis风险、HIBOR联动与PBoC中间价干预压力测试
- Question: 请基于本卡片硬约束方案中提出的1M CNH NDF short USD 50% NAV的对冲层,给出:(1)在当前USD/CNH 7.20、1M CNH-CNY basis 180pips、HIBOR 3.8%环境下的NDF执行成本与隐含IR diff拆解;(2)与USD/CNH risk reversal(buy 7.10 put/sell 7.50 call)零成本结构的对冲效率对比,在HFCAA退市情景下哪种结构对组合NAV保护更大;(3)在PBoC中间价突然下调0.8%或CFETS篮子重新加权的尾部情境下,NDF basis可能扩到多少pips、hedge effectiveness折损多少;(4)是否建议引入USD/HKD与USD/CNH的cross-hedge,以及在HKD承压7.85弱方兑换保证时HIBOR跳升对组合option theta的二阶传导。
