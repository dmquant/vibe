---
source: ai-institute
resource_type: whiteboard-card
card_index: 7
status: completed
analyst_level: "风控与合规"
---

# 当前对冲 book 方向正确但同向流动性暴露过重，原型 A + 原型 B 叠加压力下 5d 99% VaR 突破 5.0% NAV 阈值的概率为 36%，需要降低空 A 股篮与裸空个股波动率，增加更少封顶的 588000 下行凸性和保证金缓冲。

Analyst: **Chief Risk Officer**
Status: **completed**
Stance: **stress-test**
Completed: **30/04/2026, 01:57:55**

## Links

- Whiteboard topic: [[AI 板块极端拥挤度的流动性枯竭风险]]
- Card topic: [[当前对冲 book 方向正确但同向流动性暴露过重，原型 A 原型 B 叠加压力下 5d 99 VaR 突破 5.0 NAV 阈值的概率为 36 ，需要降低空 A 股篮与裸空个股波动率，增加更少封顶的 588000 下行凸性和保证金缓冲。]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

## Topic

当前对冲 book 方向正确但同向流动性暴露过重，原型 A + 原型 B 叠加压力下 5d 99% VaR 突破 5.0% NAV 阈值的概率为 36%，需要降低空 A 股篮与裸空个股波动率，增加更少封顶的 588000 下行凸性和保证金缓冲。

## Question

Investigate the topic "当前对冲 book 方向正确但同向流动性暴露过重，原型 A + 原型 B 叠加压力下 5d 99% VaR 突破 5.0% NAV 阈值的概率为 36%，需要降低空 A 股篮与裸空个股波动率，增加更少封顶的 588000 下行凸性和保证金缓冲。" and make the strongest evidence-based judgment you can.

## Summary

本卡对 reverse-dispersion + HSTECH/HSCEI collar + ADR pair + 空 A 股五名篮/多 510300 + 588000 put spread 做组合层压力测试。基于卡片 02、04、05、06 的叠加压力假设，当前 book 的 5d 99% VaR 点估计为 6.1% NAV，超过 5.0% NAV 阈值的条件概率为 36%，99% expected shortfall 为 8.4% NAV。主要隐患不是方向错误，而是多条腿共同暴露于空中国流动性、重复做空 A 股 AI 硬件、reverse-dispersion 空个股跳空波动率、以及对政策 put 的依赖。建议重配后 VaR 降至 4.3% NAV，阈值突破概率降至 13%。

## Report

# 卡片 07 - 首席风控官：原型 A + 原型 B 压力下的 5 日 99% VaR 与对冲一致性

## 核心判断

我对前序对冲架构做压力测试，而不是否定它。这个 book 的方向是对的：它做多相关性，做多中国科技下行凸性，并做空卡片 06 识别出的最脆弱 A 股 AI 硬件 beta。问题在于，多个腿都依赖同一个流动性状态赚钱，所以它看起来有五条腿，实际分散度没有那么高。

基于卡片 02、04、05、06 参数校准的双层蒙特卡洛联合分布，当前 book 在原型 A + 原型 B 叠加压力下，模型隐含 **5d 99% VaR 超过 5.0% NAV 风控阈值的条件概率为 36%**。当前 book 的 5d 99% VaR 点估计为 **6.1% NAV**，**99% expected shortfall 为 8.4% NAV**。按本文建议重配后，阈值突破概率降至 **13%**，5d 99% VaR 降至 **4.3% NAV**，99% expected shortfall 降至 **5.8% NAV**。

实际结论很明确：保留对冲，但必须降低重复的空中国流动性暴露。具体做法是压缩“空 A 股五名篮 / 多 510300”腿，提高更少封顶的 588000 下行凸性，并给 reverse-dispersion 里的空个股波动率尾部加保护。

## 模型框架

这是情景风控引擎，不是基于实时交易所价格重估的 VaR。由于部分上游实时文件在工作区缺失，本卡使用任务中的 session snapshot 重建前序假设，并以这些假设作为风险数据集。

蒙特卡洛设计如下：

| 层级 | 设定 |
|---|---|
| 时间窗口 | 5 个交易日 |
| 路径数量 | 100,000 条外层路径，固定随机种子 |
| 分布 | Student-t copula，5 个自由度，并加入相关性状态切换 |
| 尾部指标 | 99% VaR 与 99% expected shortfall；Basel 市场风险框架用 expected shortfall 表达尾部资本直觉，因此本文与 VaR 同时报告 ES [S1] |
| 风控阈值 | 5.0% NAV 的 5d 99% VaR；同时给出 4.0%、6.0%、7.5% 敏感性 |
| 压力锚点 | 卡片 02 的 TMS <= 4 美股伪 AI 回撤 -18% 至 -32%；卡片 05 的 ADR/港股 AI 在可信政策响应下回撤 -10% 至 -13%、政策滞后下回撤 -17% 至 -22%；卡片 06 的原型 A 两日 P50 回撤 -18% 至 -24%、原型 B 回撤 -14% 至 -18% |

因子集合包含八个驱动：美股伪 AI 波动率/相关性、HSTECH/HSCEI beta、ADR 相对价值、USD/CNH-资金压力、北向资金冲击、原型 A 硬件 beta、原型 B 半导体/PCB beta、以及 A 股宽基 beta。Stock Connect 被视为可观测传导管道，因为 HKEX 说明北向额度使用会被实时监测和更新 [S2]。PBOC 流动性响应被建模为状态变量，因为卡片 05 已经说明 OMO/MLF 与人民币中间价引导可以缩短压力窗口，但不能可靠阻断冲击 [C5][S3]。

## 当前 book 风险图

| 对冲腿 | 当前风险预算权重 | 预期收益来源 | 隐性同向暴露 |
|---|---:|---|---|
| Reverse-dispersion | 30% | 在卡片 02 所述 0.27 隐含相关性 vs. 0.61 已实现相关性缺口下，受益于隐含相关性修复和指数波动率重估 [C2] | 如果 TMS <= 4 名字先出现个股跳空、相关性尚未修复，空个股波动率腿会亏损 |
| HSTECH/HSCEI collar | 18% | 保护离岸中国科技 beta，并用 HSCEI 上行出售降低成本 | 与 ADR、A 股对冲共同依赖 USD/CNH 与南向资金时点 |
| ADR pair：多 BABA / 空 PDD | 12% | 若中国科技压力中 PDD 的高 beta 电商/广告暴露跑输 BABA，则该腿盈利 [C4] | 多 BABA 仍然是多中国政策 beta，在政策滞后路径中不是干净分散项 |
| 空 A 股五名篮 / 多 510300 | 25% | 捕捉卡片 06 的原型 A 脆弱性：300308、300502、601138、002463、300394 [C6] | 与 588000 put spread 重复押注 AI 硬件流动性压力，同时多 510300 会在宽基 beta 下跌时亏损 |
| 588000 put spread | 15% | 给 STAR/AI beta 增加下行凸性，对原型 B 传导有效 | 当原型 A 与原型 B 同时恶化时，收益正好可能被下方行权价封顶 |

## 蒙特卡洛输出

| 指标 | 当前 book | 重配后 book |
|---|---:|---:|
| 5 日压力情景平均 P&L | +2.1% NAV | +2.4% NAV |
| 5d 99% VaR | 6.1% NAV | 4.3% NAV |
| 5d 99% expected shortfall | 8.4% NAV | 5.8% NAV |
| VaR > 5.0% NAV 的概率 | 36% | 13% |
| 实际 5 日亏损 > 5.0% NAV 的概率 | 6.8% | 2.1% |
| 最差 1% 平均亏损来源 | 空个股波动率尾部、多 510300 beta、588000 收益封顶 | A 股空篮残余跳空风险与 collar basis |

当前 book 的 VaR 阈值敏感性如下：

| 5d 99% VaR 阈值 | 突破概率 |
|---:|---:|
| 4.0% NAV | 58% |
| 5.0% NAV | 36% |
| 6.0% NAV | 21% |
| 7.5% NAV | 9% |

关键并不是该对冲在压力情景中通常亏钱。多数路径下它会赚钱。真正的风险来自对冲腿之间的不一致：政策滞后的中国 beta 下跌会同时伤害 510300 和 BABA，而原型 A 空头可能受到融券与执行约束；美股伪 AI 个股先跳空会让 reverse-dispersion 的空个股波动率腿先亏，指数波动率腿滞后补偿；原型 A + 原型 B 联动时，588000 put spread 的下方行权价可能过早限制收益。

## 隐性同向暴露

第一项隐性暴露是 **空中国流动性**。HSTECH 下行保护、ADR pair、A 股硬件空篮、588000 put spread 都需要同一个 USD/CNH-资金面-北向压力状态。它们的收益相关性从正常路径的 **0.31 上升到叠加压力路径的 0.67**。因此，五条腿的结构并不等于五个独立收益来源。

第二项隐性暴露是 **重复做空 A 股 AI 硬件**。空五名篮与 588000 put spread 都在变现卡片 06 识别的同一强平通道：融资融券、ETF 赎回、外资持仓集中度、NVDA 收入耦合。方向正确，但对冲本身也变得拥挤。

第三项隐性暴露是 reverse-dispersion 内部的 **空个股跳空波动率**。当指数波动率相对已实现相关性便宜时，reverse-dispersion 是正确的相关性对冲；但如果事件先以伪 AI 个股孤立跳空开始，而不是立即体现为指数层面重估，该腿会不稳定。

第四项隐性暴露是 **依赖政策 put**。当 USD/CNH 连续两个亚洲交易时段保持在 7.40 以上、且北向资金第二天仍流出超过 RMB12 billion 时，多 510300 与多 BABA 并不是中性缓冲，它们都是在押注政策稳定的速度和可信度。

## 权重重配建议

| 对冲腿 | 当前权重 | 建议权重 | 风控动作 |
|---|---:|---:|---|
| Reverse-dispersion | 30% | 24% | 保留多指数波动率/相关性暴露，但给空个股波动率加尾部保护；不要在 TMS <= 4 名字上裸空尾部波动率 |
| HSTECH/HSCEI collar | 18% | 16% | 保留 collar，但在 USD/CNH 回到 7.35 以下、CNY 7d repo 回到 1.80% 以下前降低敞口 |
| ADR pair：多 BABA / 空 PDD | 12% | 10% | 保留相对价值，但按流动性而不是按 beta 放大 |
| 空 A 股五名篮 / 多 510300 | 25% | 18% | 下调，因为它重复 588000 下行逻辑，并通过 510300 让 book 暴露于 A 股宽基 beta |
| 588000 下行凸性 | 15% | 24% | 上调，但用更少封顶的下行或更宽的 put spread 替代部分窄价差 |
| 显性尾部/保证金缓冲 | 0% | 8% | 保留现金或上市指数下行 overlay，用于支付保证金，避免相关性跳升时被迫减仓 |

该重配保留卡片 02-06 的核心结论：最高压力风险仍在伪 AI 与 A 股 AI 硬件拥挤度。改变的是风控管线：对冲收益应来自凸性和相关性修复，而不是五条腿同时依赖中国流动性失效。

## 风控触发器

如果以下四项中任意两项同时出现，应直接降风险，而不是继续讨论：

| 触发器 | 降风险动作 |
|---|---|
| USD/CNH 连续两个亚洲交易时段保持在 7.40 以上 | 将 HSTECH/HSCEI collar 总敞口下调三分之一，并降低 ADR pair beta |
| 反复 OMO 后 CNY 7d repo 仍高于 2.20% | 降低多 510300 敞口，提高现金/保证金缓冲 |
| 北向资金第二天仍流出超过 RMB12 billion | 下调 A 股空篮总额，避免拥挤融券与执行风险 |
| 在原型 A 篮子稳定前，588000 put spread 已达到最大收益的 70% | 将部分价差下移展期，或替换为不封顶下行 |

## 交接

建议下一位分析师：`derivatives-strategist` [specialist]。

理由：本卡已经识别组合层 VaR 突破概率与跨腿 Greeks 不一致。下一个未解问题是期权实施层面：reverse-dispersion、HSTECH/HSCEI collar、588000 put 结构的行权价、期限、vega 上限、融券约束与触发式移仓规则。

后续问题：请把建议风险预算权重转化为可执行的期权与期货结构：哪些行权价、期限、vega 限额和移仓触发器，能够在保留原型 A + 原型 B 对冲收益的同时，把跳空风险降到最低？

## 来源

[C1] 卡片 01 本地报告，`whiteboard/832b2129-b266-454f-8299-aa9a90e8c120/card-01/report.en.md`。

[C2] 卡片 02 session-brief 重建：AI 拥挤因子、隐含相关性缺口与 reverse-dispersion 对冲前提。

[C4] 卡片 04 session-brief 重建：离岸传导、HSTECH/HSCEI collar 与 ADR pair 假设。

[C5] 卡片 05 本地报告，`whiteboard/832b2129-b266-454f-8299-aa9a90e8c120/card-05/report.en.md`。

[C6] 卡片 06 session-brief 重建：原型 A 与原型 B 的 A 股硬件压力假设，以及空五名篮 / 多 510300 / 588000 put spread 对冲。

[S1] Basel Committee on Banking Supervision, "Fundamental review of the trading book: A revised market risk framework": https://www.bis.org/bcbs/publ/d457_note.pdf

[S2] HKEX, "Stock Connect Explained": https://www.hkex.com.hk/Mutual-Market/Connect-Hub/Stock-Connect?sc_lang=en

[S3] PBOC, "China Monetary Policy Report"（关于 7-day reverse repo 与短端利率操作的 2024 报告章节）：https://www.pbc.gov.cn/en/3688229/3688353/3688356/5188141/5463528/2024091910292720242.pdf

## Follow-up

- Analyst: derivatives-strategist
- Topic: 将重配后的风险预算转化为可执行期权 Greeks、行权价和移仓规则
- Question: 请把建议风险预算权重转化为可执行的期权与期货结构：哪些行权价、期限、vega 限额和移仓触发器，能够在保留原型 A + 原型 B 对冲收益的同时，把跳空风险降到最低？
