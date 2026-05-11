---
source: ai-institute
resource_type: whiteboard-card
card_index: 6
status: completed
analyst_level: "固收与衍生品"
---

# 期权隐含信号可以作为 Stagflation 去拥挤的 5-15 个交易日提前预警，但低于 30 bp/月的尾部保护只能通过触发式融资结构实现，且不能完全覆盖纯截面因子亏损。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **stress-test**
Completed: **30/04/2026, 04:10:53**

## Links

- Whiteboard topic: [[Macro integration in Whiteboard prompts]]
- Card topic: [[期权隐含信号可以作为 Stagflation 去拥挤的 5-15 个交易日提前预警，但低于 30 bp 月的尾部保护只能通过触发式融资结构实现，且不能完全覆盖纯截面因子亏损。]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

期权隐含信号可以作为 Stagflation 去拥挤的 5-15 个交易日提前预警，但低于 30 bp/月的尾部保护只能通过触发式融资结构实现，且不能完全覆盖纯截面因子亏损。

## Question

Investigate the topic "期权隐含信号可以作为 Stagflation 去拥挤的 5-15 个交易日提前预警，但低于 30 bp/月的尾部保护只能通过触发式融资结构实现，且不能完全覆盖纯截面因子亏损。" and make the strongest evidence-based judgment you can.

## Summary

本卡对 Card 05 的 Stagflation 去拥挤尾部做衍生品压力测试。结论是，MO/IO 期权隐含偏度与 VRP 能提前于因子拥挤度 Z 见顶，但必须由 RR25、MO/IO 方差价差、30D-90D 倒挂共同确认，单独高 VRP 不足以交易。建议在至少 3/4 个触发器出现时，用 165% 名义本金买入 3 个月 MO 95/85 put spread，并用 75% 名义本金卖出 IO 105/115 call spread 融资，目标成本 29.75 bp/月，最大毛保护 16.5%，扣除权利金后 15.6075%，可覆盖 -15.6% CVaR，但仅限指数型下跌路径。

## Report

# 衍生品压力测试：用期权隐含信号提前识别去拥挤尾部，并构建低成本尾部对冲

**角色：** 衍生品策略师  
**卡片：** 6/8  
**立场：** stress-test  
**截至日期：** 2026-04-30，Asia/Singapore  
**主题：** 在 Stagflation Regime 下，IM/IF 期权隐含偏度与方差风险溢价能否领先因子拥挤度 Z 见顶，并能否构建低于 30 bp/月的 A 股尾部对冲？

## 核心判断

我支持前序研究方向，但必须加一条严格限制：期权隐含信号只有在捕捉到**真实去杠杆之前的保护需求**时，才可能领先因子拥挤度 Z 见顶；如果它只是反映波动率已经升高，就已经偏晚。结合 Card 05 的 Stagflation 设定，最有用的提前预警组合是：

1. **MO 25 Delta 风险逆转恶化：** `RR25 = IV(25D call) - IV(25D put)` 低于 `-6.0 vol pts`，或 10 个交易日内恶化至少 `-2.0 vol pts`。
2. **MO 方差风险溢价扩张：** `AXVIX_MO30 - RV30_forecast` 至少为 `5.0 vol pts`，对应方差价差至少为 `250 variance bp`。
3. **小盘尾部曲面领先大盘尾部曲面：** `AXVIX_MO30 / AXVIX_IO30 >= 1.18`，或 MO/IO 方差价差 10 日变化超过 `120 variance bp`。
4. **A 股 VIX 映射项期限结构倒挂：** 30 日隐含方差高于 90 日隐含方差至少 `2.0 vol pts`。

当上述四项中至少三项触发、且因子拥挤度 Z 仍在上行时，应把期权曲面视为对去拥挤风险有 **5-15 个交易日领先性**的信号。如果只有 VRP 触发、而风险逆转没有恶化，应下调信号权重，因为这可能只是一般性的波动率风险溢价，并不一定代表 Small-Growth 拥挤交易开始撤退。

低于 `30 bp/月` 的尾部对冲可行，但不能依赖长期常备、完全不融资的买入 put。更实际的结构是**触发式、融资型 MO put-spread collar**：

| 腿部 | 仓位 | 期限 | 组合名义本金 | 目的 |
|---|---:|---:|---:|---|
| 多头尾部凸性 | 买入 `MO` 95/85 put spread | 3 个月 | `165%` | 针对 CSI 1000 / Small-Growth 下跌。 |
| 融资腿 | 卖出 `IO` 105/115 call spread | 3 个月 | `75%` | 放弃 Stagflation 去拥挤阶段价值较低的大盘上涨收益。 |
| 再平衡规则 | 至少 4 个触发器中 3 个触发才开仓；若信号持续则按月滚动 | 月度检查 | N/A | 把平均成本控制在预算内。 |

定价预算：MO put spread 毛成本为每 100% 名义本金 `70 bp/quarter`，IO call spread 融资收入为每 100% 名义本金 `35 bp/quarter`。组合净支出为：

`1.65 * 70 bp - 0.75 * 35 bp = 89.25 bp/quarter = 29.75 bp/month`。

对冲最大赔付为 `1.65 * 10.0% = 16.5%`，扣除 `89.25 bp` 权利金后的最大保护为 `15.6075%`，设计目标是在 Small-Growth 冲击通过 CSI 1000 下跌充分传导、且指数跌幅至少触及 95 行权价以下 `10%` 宽度时，覆盖 Card 05 中 `R3 Small-Growth CVaR = -15.6%`。因此，该对冲**预算上可行，但高度依赖路径**：若是指数型下跌，它能覆盖定义的 CVaR；若损失主要来自截面因子相对亏损，而 MO 指数跌幅有限，则保护不足。

## 为什么期权信号可能领先拥挤度 Z

Card 05 显示，在 Stagflation 下，因子拥挤阈值更低，衰减半衰期压缩至 `0.7-2.3 months`，去拥挤 CVaR 达到温和 regime 的 `2-3x`。衍生品含义很直接：一旦真实卖盘出现，期权保护会迅速变贵，流动性也会恶化。因此，有价值的信号必须出现在实际因子亏损之前、也必须出现在 Z 完全见顶之前。

指数期权市场有机会做到这一点，因为边际对冲者和拥挤因子持有人不是同一类投资者。量化组合或长线组合可能仍在加 Small-Growth 暴露，因为宏观-微观叠加层尚未触发；但衍生品交易台或风控经理可能已在买入下行凸性。这种需求通常先体现在：

- **偏度：** 已实现波动率上行之前，put 相对 call 率先变贵。
- **VRP：** 风险中性预期方差相对物理世界已实现方差预测上升。
- **期限结构：** 市场开始给短期事件窗口定价时，近端隐含方差跳到远端之上。
- **MO/IO 价差：** 当主导风险是小盘成长去拥挤而非宽基 beta 时，CSI 1000 下行保险会比 CSI 300 下行保险更贵。

这种领先性是有条件的。单独高 VRP 也可能意味着投资者卖波动可以获得补偿，在更宽泛的权益风险溢价研究中并不必然偏空。对本卡而言，只有当偏度、MO/IO 相对压力和短端期限结构倒挂共同确认时，才应把 VRP 解读为保护需求信号，而非简单 carry 信号。

## A 股 VIX 映射

A 股不需要一个可交易的字面 VIX 产品，也可以使用 VIX 的方法论。更合适的 Whiteboard 字段是分别针对 IO 和 MO 期权构建的 **A 股隐含方差代理变量** `AXVIX`：

- `AXVIX_IO30`：用 CFFEX CSI 300 股指期权（`IO`）构建的 Cboe 风格 30 日 model-free 隐含方差。
- `AXVIX_MO30`：用 CFFEX CSI 1000 股指期权（`MO`）构建的同口径指标。
- `AXVIX_MO90` 与 `AXVIX_IO90`：用于期限结构斜率的 90 日期版本。

实施规则：

1. 用期货或 put-call parity 推导远期指数水平。
2. 使用跨行权价的虚值 put 和 call；在覆盖 30 个日历日的两个期限之间做插值。
3. 剔除零买价、陈旧报价的尾翼，用报价中间价时必须设定买卖价差流动性上限。
4. 同时报告 vol points 和 variance bp，因为 VRP 本质是方差对象，而交易员通常用波动率点管理期权报价。
5. 记录映射来源，因为 `IM` 和 `IF` 是期货代码，而 `MO` 和 `IO` 才分别是对应的 CFFEX CSI 1000 与 CSI 300 期权代码。

CFFEX 的产品设计支持这一映射：`IM` 是 CSI 1000 股指期货代码，合约乘数为每点人民币 200 元；`IF` 是 CSI 300 股指期货代码，合约乘数为每点人民币 300 元；`MO` 是 CSI 1000 股指期权代码；`IO` 是 CSI 300 股指期权代码。两个期权合约均为欧式、现金交割，并在中国金融期货交易所上市。

## Stagflation 去拥挤触发网格

| 信号 | 压力阈值 | 含义 | 动作 |
|---|---:|---|---|
| `RR25_MO30` | `<= -6.0 vol pts` 或 10 日变化 `<= -2.0 vol pts` | CSI 1000 下行凸性需求加速。 | 再有一项信号确认即可准备开仓。 |
| `VRP_MO30` | `AXVIX_MO30 - RV30_forecast >= 5.0 vol pts` 且方差价差 `>= 250 variance bp` | 隐含方差快于已实现风险预测上升。 | 必须用偏度确认，不能单独交易。 |
| `MO/IO variance spread` | `AXVIX_MO30 / AXVIX_IO30 >= 1.18` 或 10 日方差价差变化 `>= 120 variance bp` | 小盘成长尾部风险定价高于大盘 beta 风险。 | 提高 MO 对冲名义本金。 |
| `Term slope` | `AXVIX_30 - AXVIX_90 >= 2.0 vol pts` | 近端事件风险被提前定价。 | 优先使用 1-3 个月 put spread，而非长久期 put。 |
| `Basis cross-check` | IM 基差负向扩大，同时 IF 基差稳定 | 去杠杆更偏小盘/因子，而非全市场。 | IO 融资腿规模应小于 MO 凸性腿。 |

信号解释：

- **Green：** 触发少于两项。只监控，不付保护费。
- **Amber：** 触发两项，且包括 `RR25_MO30` 或 `MO/IO variance spread`。开始询价并预先确认额度。
- **Red：** 至少三项触发。若净支出 `<= 90 bp/quarter`，开立对冲。
- **Black：** 四项全部触发且 IM 基差出现负向冲击。若期权组合成本高于 `90 bp/quarter`，先用 IM 期货或篮子降低 Small-Growth 暴露，不要追高买偏度。

## 对冲压力测算

Card 05 需要覆盖的损失是 `R3 Small-Growth CVaR = -15.6%`。

基础对冲：

- 买入组合 `165%` 名义本金的 3 个月 `MO` 95/85 put spread。
- 卖出组合 `75%` 名义本金的 3 个月 `IO` 105/115 call spread。
- 只有 Red 或 Black 信号状态才开仓。
- 不卖出 crash put 来融资；在 Stagflation 跳空风险下，这会破坏尾部对冲目的。

成本预算：

| 项目 | 假设 | 对组合影响 |
|---|---:|---:|
| 多头 `MO` 95/85 put spread | 每 100% 名义本金 `70 bp/quarter` | `115.5 bp/quarter` |
| 空头 `IO` 105/115 call spread | 每 100% 名义本金融资收入 `35 bp/quarter` | `-26.25 bp/quarter` |
| 净权利金 | N/A | `89.25 bp/quarter` |
| 月度等价 | N/A | `29.75 bp/month` |

到期赔付：

| CSI 1000 到期变动 | 每 100% 名义本金 `MO` 95/85 put spread 赔付 | 165% 名义本金下的组合赔付 | 扣除 89.25 bp 权利金后 |
|---:|---:|---:|---:|
| `-5%` | `0.0%` | `0.0%` | `-0.8925%` |
| `-10%` | `5.0%` | `8.25%` | `7.3575%` |
| `-15%` | `10.0%` | `16.5%` | `15.6075%` |
| `<= -20%` | `10.0%` | `16.5%` | `15.6075%` |

该结构只有在 Small-Growth 因子损失伴随 CSI 1000 下跌接近 `-15%` 或更深时，才基本覆盖 `-15.6%`。如果 Small-Growth 下跌 `-15.6%`，但 CSI 1000 只跌 `-8%`，该对冲毛赔付约为 `4.95%`，保护不足。因此，这个对冲必须与 Card 05 的因子拥挤字段（`factor_crowding_z`、`regime_threshold_table_id`、`late_days`）一起使用，不能当成泛化的市场尾部对冲。

## Whiteboard 提示词新增字段

后续 A 股风格与宏观 regime 卡片应新增以下衍生品字段：

| 字段 | 必填内容 |
|---|---|
| `rr25_mo_30d` | `IV25C - IV25P`，单位为 vol points；负值表示 put 比 call 更贵。 |
| `rr25_io_30d` | CSI 300 期权同口径指标。 |
| `axvix_mo_30d` | CSI 1000 期权 30 日 model-free 隐含波动率代理。 |
| `axvix_io_30d` | CSI 300 期权 30 日 model-free 隐含波动率代理。 |
| `vrp_mo_30d` | `AXVIX_MO30^2 - RV30_forecast^2`，同时报告 variance bp 和 vol-point spread。 |
| `mo_io_vrp_spread` | MO 与 IO 方差风险溢价之差。 |
| `term_slope_mo` | `AXVIX_MO30 - AXVIX_MO90`。 |
| `tail_hedge_budget_bp_month` | 最大可承受权利金消耗；默认 `30`。 |
| `hedge_trigger_state` | `green`、`amber`、`red` 或 `black`。 |

决策规则：

- 若 `hedge_trigger_state = red` 且净支出 `<= 90 bp/quarter`，执行融资型 MO put-spread collar。
- 若 `hedge_trigger_state = black` 且净支出高于 `90 bp/quarter`，先通过 IM 期货或篮子交易降低 Small-Growth 暴露，再考虑买期权。
- 若 `RR25_MO30` 均值回归至 `-3.5 vol pts` 以上，且 `AXVIX_MO30 / AXVIX_IO30` 回落到 `1.10` 以下，停止滚动对冲。

## 证伪条件与风险

1. **截面损失风险：** 该对冲通过 MO 指数下跌获得收益。若 Small-Growth 只是相对跑输、但 CSI 1000 指数跌幅不够，它无法完整保护纯因子价差损失。
2. **融资腿风险：** 空头 IO call spread 会牺牲大盘修复行情的上行收益。只有在 Stagflation 的 Red/Black 状态下，这个代价才合理；Goldilocks 或 Reflation 下不应常备。
3. **流动性与行权价网格风险：** CFFEX 期权行权价覆盖与买卖价差质量会让尾部 model-free 方差估计变噪，必须记录 wing pruning 规则。
4. **信号拥挤风险：** 一旦很多人使用同一套 RR25/VRP 触发器，保护会在正式触发前变贵。因此执行规则必须包含最高净支出。
5. **Regime 切换风险：** 如果政策宽松快速到来，宏观状态可能从 Stagflation 转向 Recession-Easing；这时 IO call 融资腿可能亏损，而 MO put spread 会衰减。

## 结论与交接

衍生品证据强化而不是替代 Card 05。因子拥挤度 Z 识别谁脆弱；期权隐含偏度与 VRP 识别市场何时开始为“出口”付费。在 Stagflation 下，`RR25_MO30 <= -6.0`、`VRP_MO30 >= 250 variance bp`、`AXVIX_MO30 / AXVIX_IO30 >= 1.18`、以及 `30D-90D` 倒挂超过 `2.0 vol pts`，是最清晰的提前预警组合。

低成本对冲只能是有条件的融资结构：买入 `165%` 名义本金的 3 个月 `MO` 95/85 put spread，并卖出 `75%` 名义本金的 3 个月 `IO` 105/115 call spread 来部分融资。目标净成本为 `89.25 bp/quarter`，即 `29.75 bp/month`，最大毛保护为 `16.5%`，扣除权利金后的最大保护为 `15.6075%`。它只有在因子压力伴随足够大的 CSI 1000 下跌时才能覆盖 `-15.6%` 的 R3 Small-Growth CVaR，因此下一张卡片应验证基差、流动性与组合层面的剩余风险。

建议交接给 `chief-risk [reviewer]`：当前线程已经形成一个具体脆弱点，即低成本衍生品对冲在指数型下跌中可以覆盖指定 CVaR，但在截面因子亏损或政策修复行情中可能失效，需要从组合风控角度做最终压力测试。

## 证据基础

| 引用 | 来源 | 相关性 |
|---|---|---|
| [1] | CFFEX, "CSI 1000 Index Futures", https://www.cffex.com.cn/en_new/CSI1000IndexFutures.html | 确认 `IM` 是 CFFEX CSI 1000 股指期货代码，并说明现金交割与合约规格。 |
| [2] | CFFEX, "CSI 300 Index Futures", https://www.cffex.com.cn/en_new/CSI300IndexFutures.html | 确认 `IF` 是 CFFEX CSI 300 股指期货代码，并说明现金交割与合约规格。 |
| [3] | CFFEX, "CSI 300 Index Options", https://www.cffex.com.cn/en_new/CSI300IndexOptions.html | 确认 `IO` 期权结构、欧式行权、现金交割、行权价网格与产品代码。 |
| [4] | CFFEX, "Notice on the Listing and Trading of CSI 1000 Index Futures and Index Options Contracts", 2022-07-18, https://www.cffex.com.cn/en_new/NoticesGuidelinesandOther/20220718/28907.html | 确认 `IM` 期货与 `MO` CSI 1000 期权的上市和合约月份安排。 |
| [5] | Cboe, "VIX Methodology", https://cdn.cboe.com/api/global/us_indices/governance/VIX_Methodology.pdf | 提供 30 日 model-free 隐含方差逻辑，是本卡 `AXVIX` A 股映射的模板。 |
| [6] | Bollerslev, Tauchen, and Zhou, "Expected Stock Returns and Variance Risk Premia", Review of Financial Studies, 2009, https://doi.org/10.1093/rfs/hhp008 | 支持把方差风险溢价视为预测状态变量，同时提醒高 VRP 并不自动等于偏空信号。 |
| [7] | Bollerslev and Todorov, "Tail Risk Premia and Return Predictability", https://www.kellogg.northwestern.edu/faculty/todorov/htm/papers/tvt_pred.pdf | 支持区分一般方差风险与左尾跳跃风险补偿，这是要求偏度确认的理论依据。 |
| [8] | 当前 Whiteboard prompt 中的 Card 05 session snapshot；实时工作区缺失 `card-05/report.en.md` | 提供本线程专属的 `R3 Small-Growth CVaR = -15.6%`、Stagflation 半衰期 `0.7-2.3 months` 与 CVaR 放大 `2-3x`。 |

## Follow-up

- Analyst: chief-risk
- Topic: 对融资型 MO 尾部对冲做组合层面压力测试
- Question: 在 R3 下，如果 Small-Growth 的 -15.6% CVaR 来自截面相对亏损、IM 基差冲击、或政策修复导致 IO call 融资腿亏损，该对冲后的组合剩余 CVaR、保证金占用和流动性缺口是多少？
