---
source: ai-institute
resource_type: whiteboard-card
card_index: 6
status: completed
analyst_level: "固收与衍生品"
---

# IONQ 40/65六个月collar是唯一兼顾低拖累与30%损失上限的核心结构，FXY或QQQ只能作为辅助覆盖而非主对冲。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **stress-test**
Completed: **09/05/2026, 06:26:28**

## Links

- Whiteboard topic: [[量子计算进入‘实用化’阶段的估值重构]]
- Card topic: [[IONQ 40 65六个月collar是唯一兼顾低拖累与30 损失上限的核心结构，FXY或QQQ只能作为辅助覆盖而非主对冲。]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

IONQ 40/65六个月collar是唯一兼顾低拖累与30%损失上限的核心结构，FXY或QQQ只能作为辅助覆盖而非主对冲。

## Question

Investigate the topic "IONQ 40/65六个月collar是唯一兼顾低拖累与30%损失上限的核心结构，FXY或QQQ只能作为辅助覆盖而非主对冲。" and make the strongest evidence-based judgment you can.

## Summary

截至2026-05-09，本卡片对卡片05的1.0% NAV、IONQ主导量子仓位进行期权与外汇对冲压力测试。未对冲悲观情景损失约为48.0%主题仓位。单买IONQ put成本过高且不达标；最优核心方案是对IONQ持股买入2026-11-20 40 put、卖出65 call，按保守bid/ask几乎零成本，并把悲观损失压至约29.4%。若需覆盖JPY套息平仓风险，可额外用0.015-0.020% NAV买入FXY 2026-12-18 60 call；QQQ 675/600 put spread只适合作为IONQ期权不可用时的宏观替代。

## Report

# 卡片 06 — 量子主题仓位的期权与外汇对冲压力测试

工作日期：2026-05-09（Asia/Singapore）  
看板：4f64804a-3929-476b-a4c1-6f85b7c93eb3  
分析师：derivatives-strategist  
立场：压力测试  
主题：1.0% NAV、IONQ 主导量子仓位下的 IONQ/QQQ listed-option 行权价、期限与 USD/JPY 或 FXY 覆盖组合

截至本卡片的权威工作日期 2026-05-09，我支持卡片 05 的 1.0% NAV、IONQ 主导量子卫星仓位，但前提是 IONQ 主仓必须用 collar 锁定下行。若不对冲，该仓位在 6 个月悲观情景下可能损失约 48% 的主题袖珍仓位价值。按保守可成交口径，IONQ 2026-11-20 40 put / 65 call collar 可将损失压到约 29.4%，且几乎没有现金权利金拖累。若还需要显式覆盖 JPY 套息平仓风险，可额外用 0.015-0.020% NAV 买入 FXY 2026-12-18 60 call，但它只能做辅助，不能替代 IONQ collar。

## 核心结论

6 个月期望对冲拖累最低的方案不是单纯买 put。IONQ put 太贵：在 2026-05-08 美股收盘的期权链中，30-45 行权价附近的 6 个月下行隐含波动率约为 92-98%。更有效的结构是备兑 collar：

1. 沿用卡片 05 的 1.0% NAV 量子仓位：IONQ 70%、QBTS 15%、RGTI 10%、QUBT 5%。
2. 对 IONQ 70% 仓位，按持股数量买入 IONQ 2026-11-20 40 put，并一比一卖出 IONQ 2026-11-20 65 call。
3. 若投资授权要求显式覆盖 JPY 套息平仓风险，可用 0.015-0.020% NAV 的权利金上限买入 FXY 2026-12-18 60 call。
4. 只有在 IONQ 期权流动性不可用时，才用 QQQ 2026-12-18 675/600 put spread 作为宏观替代；它有明显基差风险。

该组合把悲观情景损失控制在 30% 的主题仓位损失上限以内，同时把现金权利金拖累压到接近零。代价是 IONQ 在约 $65 以上的上行被截断，相当于以 2026-05-08 收盘价 $49.24 计算，上行约 +32% 后被卖出 call 吸收。

## 市场快照与输入

定价快照采用 2026-05-08 美股收盘，即 2026-05-09 新加坡工作日期之前的上一美股交易日。期权价格采用保守可成交口径：买入按 ask，卖出按 bid。

| 标的 / 期权 | 快照输入 | 作用 |
|---|---:|---|
| IONQ 收盘价 | $49.24 | 1.0% NAV 仓位中的 70% |
| QQQ 收盘价 | $711.23 | 宏观和大型科技对冲代理 |
| FXY 收盘价 | $58.60 | long JPY / short USD 的 listed proxy |
| USD/JPY 近期即期参考 | 约 156.66-156.8 | 外汇套息平仓锚点 |
| IONQ 2026-11-20 40 put | bid $7.15 / ask $8.25，IV 91.9% | 核心下行行权价 |
| IONQ 2026-11-20 65 call | bid $8.40 / ask $9.90，IV 97.0% | collar 融资腿 |
| IONQ 2026-11-20 70 call | bid $7.40 / ask $9.45，IV 99.3% | 更高上行封顶替代 |
| QQQ 2026-12-18 675 put | bid $31.76 / ask $33.04，IV 22.6% | put spread 买入腿 |
| QQQ 2026-12-18 600 put | bid $15.82 / ask $16.67，IV 27.1% | put spread 卖出腿 |
| FXY 2026-12-18 60 call | bid $1.20 / ask $2.10，IV 14.8% | listed JPY 凸性 |

资料来源：Yahoo Finance 的 [IONQ](https://finance.yahoo.com/quote/IONQ/options/?date=1795132800)、[QQQ](https://finance.yahoo.com/quote/QQQ/options/?date=1797552000)、[FXY](https://finance.yahoo.com/quote/FXY/options/?date=1797552000) 报价和期权链页面；USD/JPY 参考来自 [Exchange-Rates.org](https://www.exchange-rates.org/converter/usd-jpy) 与 [Wise](https://wise.com/us/currency-converter/usd-to-jpy-rate/history)。交易前必须重新核价，因为 IONQ 与 FXY 的期权买卖价差偏宽。

## 压力情景设定

6 个月悲观情景刻意与卡片 03-05 保持一致：

| 风险因子 | 悲观假设 | 理由 |
|---|---:|---|
| IONQ | -45%，至 $27.08 | 倍数压缩叠加里程碑不及预期 |
| QBTS/RGTI/QUBT 组合 | -55% | beta 更高，基本面支撑更薄 |
| QQQ | -15% | 长久期科技股再定价 |
| FXY | +8.7% | 近似对应 USD/JPY 下跌 8%；FXY 与 USD/JPY 方向相反 |
| 对冲前主题仓位损失 | -48.0% | 0.70 x -45% 加 0.30 x -55% |
| 损失控制目标 | 不差于 -30.0% | 本任务给定的最大回撤预算 |

因此，48.0% 的未对冲损失是本卡片需要解决的核心数字。若要达到 30.0% 的损失上限，对冲组合在扣除权利金拖累后需要贡献约 18.0% 的主题仓位收益。

## 结构比较

| 对冲组合 | 初始权利金拖累 | 悲观情景下主题仓位损失 | 判断 |
|---|---:|---:|---|
| 不对冲 | 0.0% 主题仓位 | -48.0% | 不满足回撤预算 |
| 只买 IONQ 40 put | 11.7% 主题仓位 | -41.3% | 太贵且仍不达标 |
| IONQ 40/65 collar | 约 -0.2% 主题仓位，即小幅权利金收入 | -29.4% | 最优核心结构 |
| IONQ 40/65 collar + 0.015% NAV FXY 60 call 预算 | 加入 FXY 后净借方 1.3% 主题仓位 | -28.3% | 若必须覆盖 JPY 风险，这是最优全组合 |
| IONQ 40/70 collar + 0.020% NAV FXY 60 call 预算 | 净借方 3.2% 主题仓位 | -29.3% | 上行空间更大，但拖累更高 |
| QQQ 675/600 put spread，按同一压力缺口配比 | 约 5.8% 主题仓位权利金 | 若 QQQ 下跌 15%，损失约 -29.5% | 可做替代，但基差风险高 |
| 只用 FXY call | 需要约 23.6% 主题仓位权利金 | 只有 JPY 大幅升值时才勉强达标 | 不适合作为主对冲 |

关键结论是：IONQ 40/65 collar 是唯一既能满足给定回撤约束、又不需要大额现金权利金预算的结构。若把卖出 call 提高到 70 行权价，则必须搭配 FXY call 或其他小额凸性对冲；单独使用时模型损失约为 30.8%，略高于上限。

## 建议组合

每 1.0% NAV 量子主题仓位采用以下执行方式：

| 仓位组成 | 头寸 |
|---|---|
| 量子多头组合 | 0.70% NAV IONQ、0.15% NAV QBTS、0.10% NAV RGTI、0.05% NAV QUBT |
| 核心对冲 | 对 IONQ 持股买入 IONQ 2026-11-20 40 put |
| 融资腿 | 对相同 IONQ 持股卖出 IONQ 2026-11-20 65 call |
| 外汇覆盖 | 买入 FXY 2026-12-18 60 call，权利金上限 0.015-0.020% NAV |
| 执行规则 | 只有在保守 bid/ask 下 collar 可平价或小幅收取权利金时建立；否则降低 IONQ 名义本金，直到 collar 可自融资 |
| 再对冲规则 | 若 IONQ 收于 $40 以下、IONQ 升至 $62-63 且短 call delta 风险上升，或 IONQ 期权距离到期不足 45 个自然日，则滚动对冲 |

这是一项对卡片 05 的压力测试式支持，而不是无条件背书。collar 把 IONQ 仓位从未封顶的长久期股票期权，改造成一个 6 个月定义风险区间。代价是，如果商业化里程碑超预期并推动 IONQ 突破 $65，超额收益大部分会被卖出的 call 货币化；PM 应把这个上行封顶视为在宏观回撤环境中持有主题仓位所支付的价格。

## QQQ 与 USD/JPY / FXY 的用法

从波动率角度看，QQQ put 比 IONQ put 便宜，但它不是更干净的对冲。在模型中，QQQ 2026-12-18 675/600 put spread 按 ask/bid 成本为 $17.22。若 QQQ 下跌 15% 至约 $604.55，该 spread 价值约 $70.45，因此约 0.058% NAV 的权利金即可弥补 18% 的主题仓位损失缺口。但这个结果要求 QQQ 与量子标的同步下跌且跌幅足够。如果 IONQ 因单一里程碑失误下跌而 QQQ 持平，QQQ 对冲会失效。

FXY 对卡片 03-04 提出的具体失败模式有用：JPY 融资套息平仓。FXY 2026-12-18 60 call 的买卖价差偏宽，但相对 IONQ 的隐含波动率较低。以 FXY $58.60 计算，若 FXY 上涨 8.7% 至约 $63.70，该 60 call 的内在价值约为 $3.70，而 ask 为 $2.10。0.020% NAV 的权利金预算在该情景下可贡献约 0.015% NAV 的净收益。这有帮助，但远不足以替代 IONQ collar。

若授权允许 OTC FX options，更干净的等价结构是 6 个月 USD/JPY put / JPY call，行权价约 148-150，名义本金不超过 IONQ 市值的 0.25-0.35 倍。当授权限制为交易所挂牌工具时，FXY call 是可执行的替代品。

## 应避免的结构

不建议把单纯买入 IONQ 保护性 put 作为主方案。单独买入 40 put 的成本约为主题仓位的 11.7%，但悲观情景损失仍接近 41.3%。不建议只用 FXY call 达成回撤目标；除非团队本身就在做方向性 long JPY 交易，否则所需权利金预算过高。不建议过度依赖 QQQ 对冲，除非 PM 明确接受它是宏观因子对冲，而非 IONQ 单名里程碑对冲。

## 交接

建议下一位分析师：technical-analyst。  
建议立场：压力测试。  
后续主题：IONQ collar 与 FXY 覆盖的入场、滚动和减仓触发条件。  
后续问题：基于 IONQ、QQQ、FXY 与 USD/JPY 的价格和成交量水平，PM 应在什么位置建立 collar、滚动 short call、增加 FXY 覆盖，或在对冲比例无法守住 30% 损失预算时机械减仓？

元数据页脚：工作日期 2026-05-09；卡片 06/8；derivatives-strategist；压力测试；报告与 meta 写入 `whiteboard/4f64804a-3929-476b-a4c1-6f85b7c93eb3/card-06/`。

## Follow-up

- Analyst: technical-analyst
- Topic: IONQ collar与FXY覆盖的入场、滚动和机械减仓触发条件
- Question: 基于IONQ、QQQ、FXY与USD/JPY的价格和成交量水平，PM应在什么位置建立collar、滚动short call、增加FXY覆盖，或在对冲比例无法守住30%损失预算时机械减仓？
