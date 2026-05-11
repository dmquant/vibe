---
source: ai-institute
resource_type: whiteboard-card
card_index: 6
status: completed
analyst_level: "固收与衍生品"
---

# 最优对冲是阈值触发的三腿 overlay：VIX 捕捉流动性冲击，JPY puts 捕捉套息解杠杆主路径，SOFR/2Y UST 多头捕捉 Tier 2 后的 Fed 降息重定价。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **synthesize**
Completed: **26/04/2026, 21:00:38**

## Links

- Whiteboard topic: [[全球央行 超级周 与中东能源危机双重压力下的宏观展望]]
- Card topic: [[最优对冲是阈值触发的三腿 overlay：VIX 捕捉流动性冲击，JPY puts 捕捉套息解杠杆主路径，SOFR 2Y UST 多头捕捉 Tier 2 后的 Fed 降息重定价。]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

最优对冲是阈值触发的三腿 overlay：VIX 捕捉流动性冲击，JPY puts 捕捉套息解杠杆主路径，SOFR/2Y UST 多头捕捉 Tier 2 后的 Fed 降息重定价。

## Question

Investigate the topic "最优对冲是阈值触发的三腿 overlay：VIX 捕捉流动性冲击，JPY puts 捕捉套息解杠杆主路径，SOFR/2Y UST 多头捕捉 Tier 2 后的 Fed 降息重定价。" and make the strongest evidence-based judgment you can.

## Summary

本卡将 Card 3-5 的政策分化、JPY 套息解杠杆与跨资产 overlay 建议执行化：158 上方仅部署 45-60bp NAV 的低 bleed 核心保护，跌破 158 后提升 VIX 与 FX gamma，跌破 155 后进入 Tier 2 满预算，跌破 152 后不再追买昂贵尾部，而是兑现 VIX 与美国短端利率利润并滚动 USD/JPY、AUD/JPY 下行保护。推荐 VIX call spread、USD/JPY put spread、AUD/JPY put spread 与 SOFR/2Y UST 多头组合，年度权利金上限控制在 90-110bp NAV。

## Report

# Tier 2 套息解杠杆情景下的 VIX、JPY 与美国短端利率对冲结构优化

## 本卡立场

本卡对 Card 3-5 的主线采取“综合并执行化”的立场：若能源冲击在 6 个月内从通胀恐慌回到 85-92 美元油价中枢，而美联储降息预期与日央行加息预期在 Q3 同时前移，则真正需要防范的不是线性风险资产回撤，而是 USD/JPY 跌破 158、155、152 后触发的套息交易非线性解杠杆。

结论是：对冲组合应采用“JPY 方向性 + VIX 凸性 + 美国短端利率多头”的三腿结构，但不能一次性买满。最优做法是在 158 上方保留低 bleed 的核心保护，跌破 158 后提高 gamma，跌破 155 后进入完整 Tier 2 防线，跌破 152 后不再追买最贵的尾部，而是兑现 VIX 与利率腿利润、把保护滚到更低 USD/JPY 和 AUD/JPY 执行价。

## 情景阈值定义

| 阈值 | 市场含义 | 对冲目标 | 执行原则 |
|---|---|---|---|
| USD/JPY 158 | 预警阈值，套息交易盈亏缓冲被压缩 | 建立 40-50% 目标保护 | 以 2-4 个月期 put spread 与 45-75 天 VIX call spread 为主 |
| USD/JPY 155 | Tier 2 级联平仓阈值 | 提升至 80-100% 目标保护 | 增加短 gamma，买入更近执行价 USD/JPY 与 AUD/JPY puts |
| USD/JPY 152 | Tier 3 无序解杠杆阈值 | 保护组合流动性与尾部净值 | 兑现高 delta VIX/利率利润，滚动 FX 下行保护，不追逐已爆升的隐含波动率 |

## 核心组合建议

| 工具 | 建议期限 | 执行价框架 | 初始预算 | Tier 2 后预算 | 主要功能 |
|---|---:|---|---:|---:|---|
| VIX call spread | 45-75 天核心；14-28 天事件袖珍仓 | 买入对应 VIX 期货上方 10-15% call，卖出上方 50-70% call；常见结构为 20/30、22.5/35、25/40 | 15-25bp NAV | 35-50bp NAV | 对冲权益波动率跳升和流动性冲击 |
| USD/JPY put spread | 2-4 个月核心；1-2 个月触发仓 | 158 上方用 156/150 或 155/148；跌破 155 后改用 153/147 或 152/145 | 20-30bp NAV | 35-45bp NAV | 直接捕捉 JPY 升值与 USD/JPY 非线性下跌 |
| AUD/JPY put spread | 3-6 个月核心；1-2 个月触发仓 | 选择 5-7 delta OTM 买权保护，卖出更深 12-15% OTM put；Tier 2 后上移到 25-35 delta put | 15-25bp NAV | 30-40bp NAV | 对冲亚洲 carry、商品货币和风险平价去杠杆传染 |
| SOFR / 2Y UST 多头 | 6-12 个月政策腿；3-6 个月战术腿 | 做多 Dec26/Mar27 附近 SOFR futures 或 2Y UST futures；期权用 ATM 至 25bp OTM receiver/call | 期权 5-10bp；期货用 DV01 限额 | 期权 10-20bp；DV01 提升 | 对冲 Fed 降息重定价和增长冲击 |

总权利金预算建议以组合 NAV 的 60-90bp 为年度上限，触发 Tier 2 前实际投入不超过 45-60bp；只有 USD/JPY 有效跌破 155 且 AUD/JPY 同步转弱时，才允许提升至 90-110bp。若使用期货表达美国短端利率腿，预算不应按权利金计算，而应以 DV01 和保证金流动性限额约束。

## VIX call spread：买凸性，但不要买无限上行

VIX 腿的目的不是预测 VIX 绝对点位，而是在套息平仓冲击下取得“权益下跌、相关性上升、流动性折价扩大”的组合赔付。由于 VIX 期权定价受对应期限 VIX futures 影响，且 VIX 尖峰常常快速回落，直接买远月裸 call 容易出现方向判断正确但期权效率低的问题。

建议结构如下：

| 状态 | 结构 | 期限 | 仓位 |
|---|---|---:|---:|
| USD/JPY > 158 | 20/30 或 22.5/35 call spread | 45-75 天 | 1/3 目标仓 |
| 跌破 158 | 加 22.5/35 或 25/40 call spread | 30-60 天 | 提至 2/3 目标仓 |
| 跌破 155 | 加 14-28 天 25/40 事件仓 | 14-28 天 | 提至满仓 |
| 跌破 152 | 不追买；兑现 50-70% 高价值 spread | 保留剩余尾部 | 将利润转入 FX put 滚动 |

执行细节：

- 买入执行价应靠近对应 VIX futures 的 110-115%，而不是简单按 VIX spot 选价。
- 卖出执行价放在买入执行价上方 8-15 个 vol 点，目标是把 theta bleed 降到裸 call 的 35-55%。
- 当 call spread 市值达到最大收益的 65-75% 时，先兑现一半；若 VIX 期限结构转为明显 backwardation，则再兑现 25%。
- 剩余期限低于 14 天的事件仓必须滚动或关闭；核心仓低于 21 天时滚到下一月。
- 若 USD/JPY 回到 158.5 上方并连续 5 个交易日站稳，同时 VIX 回落至 20 以下，短期事件仓清零，仅保留核心 1/3。

VIX 期权工具属性方面，Cboe 规则显示 VIX/VIXW 期权为欧式行权，通常只能在到期日行权，结算价为 VRO，即基于 SPX 期权开盘价计算的 VIX 特殊开盘报价；这意味着持仓管理必须重视到期日前一天和 SOQ 结算风险，而不能把它当作普通股票期权处理。

## USD/JPY put：核心方向腿，应以 put spread 控制负 carry

USD/JPY put 是本组合最干净的方向性保护：若 Card 4 的 6 个月 148-153 中枢判断成立，直接做多 JPY 的期权结构比事后追逐现货更适合组合 overlay。问题在于 JPY 低利率属性使得长 JPY 期权天然带有利差与波动率成本，因此不宜长期持有高 delta 裸 put。

建议分三层：

| 阈值 | 结构 | 期限 | 目标 |
|---|---|---:|---|
| 158 上方 | USD/JPY 156/150 或 155/148 put spread | 3-4 个月 | 覆盖 Q3 政策重定价窗口 |
| 跌破 158 | 增加 155/149 或 154/148 put spread | 2-3 个月 | 提高 Tier 2 前 gamma |
| 跌破 155 | 增加 153/147 或 152/145 put spread | 1-2 个月 | 捕捉级联平仓的短期跳变 |

滚动规则：

- 若 spot 已跌破买入执行价且期权 delta 超过 60%，应卖出 30-50% 原仓，重新买入 spot 下方 2-3 个大点位的新 put spread。
- 若 USD/JPY 跌至 152 附近，不再加买高隐波近月裸 put；应把 155/149、153/147 等高价值价差兑现一半，并滚到 150/144 或 148/142。
- 若 USD/JPY 回到 158 上方且 10 日 realized volatility 低于 3 个月 implied volatility，应减少短期限结构，保留 3-4 个月核心仓。
- 单一到期日权利金不超过 NAV 的 20bp，避免所有 FX gamma 在同一周衰减。

推荐用 put spread 而非零成本风险反转。卖出 USD/JPY call 虽能降低权利金，但在日本政策失误或美元重新走强时会把组合暴露在不必要的上行亏损中；当前任务是买保险，不是重建方向性空美元杠杆。

## AUD/JPY put：传染腿比 USD/JPY 更便宜但更不稳定

AUD/JPY 是套息解杠杆的高 beta 表达。若 USD/JPY 跌破 155，AUD/JPY 往往同时承受三重压力：JPY 融资货币回补、商品货币风险溢价上升、亚洲权益和铜链条减仓。它的优点是 convexity 高，缺点是受中国数据、铁矿石和风险偏好噪音影响较大，因此应作为传染腿，而不是唯一主对冲。

建议：

- 在 158 上方，使用 3-6 个月 AUD/JPY put spread，买入 25-30 delta put，卖出更深 10-15 delta put。
- 跌破 158 后，把新增仓期限压到 2-3 个月，执行价上移至 30-35 delta。
- 跌破 155 后，允许加入 1-2 个月近月 put spread，但不得买入极端 OTM lottery puts，因为此时 AUD/JPY 隐波通常已经显著上升。
- 跌破 152 后，若 AUD/JPY 已经单周下跌 5-7%，应兑现至少一半，并用利润购买下一季度较低执行价保护。

预算上，AUD/JPY 腿应低于 USD/JPY 腿，建议初始 15-25bp NAV，Tier 2 后上限 30-40bp。若组合本身已经大量持有澳洲、日股出口商、铜或亚洲高 beta 资产，则 AUD/JPY 预算可上调 10bp；若组合以美债和美元现金为主，则应保持低配。

## SOFR / 2Y UST 多头：政策重定价腿，不是第一触发腿

美国短端利率多头的价值在 Tier 2 后更明显：当套息交易从 FX 事件扩散为权益去杠杆与增长下修时，市场会重新定价 Fed 9 月及之后的降息路径。它的弱点也清楚：若中东能源冲击短期重新推高通胀风险溢价，2Y UST 可能先承压，无法像 JPY put 那样第一时间赔付。

因此，美国短端利率腿应采用“期货 DV01 核心 + 少量期权凸性”的组合：

| 状态 | SOFR 表达 | 2Y UST 表达 | 风险限额 |
|---|---|---|---|
| 158 上方 | 做多 Dec26/Mar27 SOFR futures 小仓位 | 2Y UST futures DV01 约等于 NAV 的 50-75% 2 年久期 | 2Y 利率上行 25bp 亏损不超过 20-30bp NAV |
| 跌破 158 | 增加 Dec26/Mar27 SOFR，少量买入 SOFR call | 2Y DV01 提至 75-100% 2 年久期 | 亏损限额 35-45bp NAV |
| 跌破 155 | 做多 SOFR futures 至目标仓，增配 3-6 个月 2Y futures call | 2Y DV01 提至 100-125% 2 年久期 | 若油价再破 100 美元，减半期货、保留期权 |
| 跌破 152 | 兑现 30-50% 利率腿利润 | 保留 6-12 个月政策腿 | 将利润补充 FX 下行保护 |

SOFR 选择 Dec26/Mar27 附近合约，是因为 Card 3 的基准为 2026 年 9 月 Fed 首降、Q4 延续降息；若实际市场已经提前定价 75bp 以上降息，新增仓应后移至 2027 年上半年合约，避免追逐已兑现的政策路径。CME 的 SOFR 合约以 100 减去参考季度 SOFR 利率报价，三个月 SOFR 期权拥有从一周到四年的多期限上市结构，适合把政策重定价拆成季度化表达。

2Y UST 多头建议优先用 futures 或 futures call，而非直接买远期 receiver swaptions，原因是本组合需要在 FX 触发后快速加减仓，期货流动性和保证金透明度更适合 overlay。若使用期权，买入执行价应约等于 2Y 收益率下行 25-40bp 的 price call，而非极端虚值；这能在 Tier 2 中提供可兑现利润，而不是只在深度衰退中才赔付。

## 权利金与 carry bleed 控制

本组合的核心约束不是“买多少保险”，而是“在没有发生 Tier 2 时最多亏多少时间价值”。建议采用以下预算：

| 阶段 | VIX | USD/JPY | AUD/JPY | Rates options | 总权利金 |
|---|---:|---:|---:|---:|---:|
| 158 上方 | 15-25bp | 20-30bp | 15-25bp | 5-10bp | 55-80bp 上限，实际使用 45-60bp |
| 跌破 158 | 25-35bp | 30-40bp | 20-30bp | 10-15bp | 75-95bp |
| 跌破 155 | 35-50bp | 35-45bp | 30-40bp | 10-20bp | 90-110bp |
| 跌破 152 | 不新增净预算 | 利润再投入 | 利润再投入 | 利润再投入 | 总预算不再扩张 |

关键纪律：

- 单月 theta bleed 不应超过 NAV 的 12-18bp；超过后必须减少近月 VIX 或 FX gamma。
- 同一风险因子不得重复买满。例如 USD/JPY put 与 AUD/JPY put 同时满仓时，VIX 事件仓不应继续加码。
- 已进入 Tier 2 后，新增权利金必须来自部分止盈或削减裸 beta，而不是无限增加 overlay 成本。
- 若组合权益仓位已按 Card 5 降至 55% 以下，对冲预算应向 JPY 与 rates 倾斜；若权益仍高于 60%，VIX 权重应上调。

## 组合触发与滚动规则

| 条件 | 动作 |
|---|---|
| USD/JPY 日收盘低于 158，或盘中跌破 158 且 AUD/JPY 同日跌超 1.5% | 启动第二档：补齐 VIX 2/3 仓、增加 USD/JPY 与 AUD/JPY 2-3 个月 put spread |
| USD/JPY 日收盘低于 155，且 VIX 上破 24 或 AUD/JPY 跌破 50 日均线 2% 以上 | 启动 Tier 2 满仓：加入 14-28 天 VIX 事件仓和 1-2 个月 FX gamma |
| USD/JPY 盘中跌破 152，或两日累计跌幅超过 4 个大点位 | 启动 Tier 3：兑现 VIX 与利率腿 30-70%，滚动 FX 执行价下移 |
| USD/JPY 回到 158.5 上方连续 5 日，VIX 低于 20，AUD/JPY 企稳 | 撤掉短 gamma，只留 1/3 核心保护 |
| 任一期权剩余期限低于规则下限 | VIX 事件仓 14 天、VIX 核心仓 21 天、FX 核心仓 30 天前必须滚动 |
| 单腿利润达到最大收益 65-75% | 至少兑现一半，并把部分利润用于下一到期保护 |

## 最优组合配比

以 100bp 年度防护预算为上限，建议权重如下：

| 情景 | VIX | USD/JPY | AUD/JPY | SOFR/2Y UST |
|---|---:|---:|---:|---:|
| 基准未触发 | 25% | 35% | 25% | 15% |
| 跌破 158 | 30% | 35% | 25% | 10% |
| 跌破 155 | 35% | 30% | 25% | 10% |
| 跌破 152 | 20% | 40% | 25% | 15% |

原因是：158 上方最需要保留 JPY 方向性；155 附近 VIX 的边际赔付最高；152 以下 VIX 已经昂贵，继续追买效率下降，FX 执行价下移与 rates 利润保留更有价值。

## 主要风险与应对

第一，能源冲击若恶化为真实供给毁灭，2Y UST 多头可能短期失效，因为市场先交易通胀溢价而非增长衰退。应对方式是在布伦特重新上破 100 美元且美债 breakeven 同步走高时，降低期货 DV01，保留 SOFR/2Y 期权。

第二，日本政策沟通若失败，USD/JPY 可能重回 160 上方，FX put 的 theta bleed 会扩大。应对方式是坚持 put spread 和分批入场，不卖出无限亏损的 USD/JPY call 来补贴权利金。

第三，Tier 2 若发生在央行会议或美国 CPI 前后，VIX 和 FX 隐含波动率会同时抬升，后手买入保护成本陡增。应对方式是在 158 上方至少持有 40-50% 目标保护，而不是等 155 确认后才建仓。

第四，AUD/JPY 可能因中国政策刺激或商品反弹而阶段性抗跌。应对方式是把 AUD/JPY 定位为传染腿，预算低于 USD/JPY，并通过止盈和滚动避免把宏观对冲变成单一商品货币空头。

## 结论

最优对冲不是单纯买 VIX，也不是单纯做多 JPY，而是把三类赔付时间错开：VIX 负责最早的流动性冲击，USD/JPY 与 AUD/JPY put 负责套息解杠杆主路径，SOFR/2Y UST 多头负责 Tier 2 向增长与政策重定价扩散后的第二阶段收益。

执行上，158 上方应部署 45-60bp NAV 的低 bleed 核心保护；跌破 158 提高至约 75-95bp；跌破 155 才进入 90-110bp 满预算；跌破 152 后原则上不再扩大净权利金，而是用 VIX 与利率腿止盈资金滚动 FX 下行保护。这样能在控制 carry bleed 的同时，把组合赔付集中在 Card 4-5 所定义的 Tier 2/Tier 3 非线性下行区间。

## 资料来源

- Cboe，VIX Options Product Specifications：https://ww2.cboe.com/tradable_products/vix/vix_options/specifications/
- CME Group，Three-Month SOFR Options Contract Specs：https://www.cmegroup.com/markets/interest-rates/stirs/three-month-sofr.contractSpecs.options.html
- CME Group，SOFR Options listings and specifications：https://www.cmegroup.com/trading/interest-rates/secured-overnight-financing-rate-options.html
- CME Group，2-Year T-Note Options Contract Specs：https://www.cmegroup.com/markets/interest-rates/us-treasury/2-year-us-treasury-note.contractSpecs.options.html

## Follow-up

- Analyst: chief-risk
- Topic: JPY-VIX-短端利率 overlay 的组合级压力测试与失效情景
- Question: 在 USD/JPY 跌破 155 但油价重新上破 100 美元、2Y UST 不涨反跌、VIX 与 FX 隐波同步抬升的混合冲击下，本卡建议的对冲组合是否仍能把 60/40 或风险平价组合的最大回撤控制在可接受区间？哪些腿需要设定强制减仓或替代规则？
