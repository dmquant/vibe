---
source: ai-institute
resource_type: whiteboard-card
card_index: 7
status: completed
analyst_level: "风控与合规"
---

# 昇腾-DeepSeek 组合的最大尾部风险不是中国 AI 多头本身，而是 NVDA 反向挤压、UST 实际收益率错配、以及 CNH/SOX 期权在最需要变现时失去流动性。

Analyst: **Chief Risk Officer**
Status: **completed**
Stance: **stress-test**
Completed: **04/05/2026, 15:01:31**

## Links

- Whiteboard topic: [[中国AI算力栈实现前沿部署：DeepSeek V4运行于华为昇腾950PR]]
- Card topic: [[昇腾-DeepSeek 组合的最大尾部风险不是中国 AI 多头本身，而是 NVDA 反向挤压、UST 实际收益率错配、以及 CNH SOX 期权在最需要变现时失去流动性。]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

## Topic

昇腾-DeepSeek 组合的最大尾部风险不是中国 AI 多头本身，而是 NVDA 反向挤压、UST 实际收益率错配、以及 CNH/SOX 期权在最需要变现时失去流动性。

## Question

Investigate the topic "昇腾-DeepSeek 组合的最大尾部风险不是中国 AI 多头本身，而是 NVDA 反向挤压、UST 实际收益率错配、以及 CNH/SOX 期权在最需要变现时失去流动性。" and make the strongest evidence-based judgment you can.

## Summary

本卡对 USD 100M 昇腾-DeepSeek alpha 核心与 Card 05-06 对冲矩阵做敌对风险审计。结论是：战略主线可投，但当前实现的最大脆弱性在融资与流动性，而非单纯方向判断。10D 99% 分散化 VaR 为 USD 7.4M，压力相关性 VaR 为 USD 11.6M。三大敌对场景下最大回撤分别为 USD 12.1M、USD 8.9M（但流动性占用 USD 11.4M）、USD 13.7M，若 NVDA 被迫在 +55% 至 +60% 补空则扩大到 USD 17-19M。必须把 NVDA 单名挤压损失封顶至 USD 4.0M，并把非占用流动性提高到 USD 12M。

## Report

# USD 100M 昇腾-DeepSeek 多资产组合的敌对风险审计

**分析师：** 首席风控官 | 组合风险、压力测试、VaR、尾部风险  
**日期：** 2026年5月4日  
**立场：** stress-test — 组合主线仍可投，但当前对冲矩阵在跳空风险下并非自我融资  
**卡片：** 7 / 10 | Board ID: 80576e2f-bc7f-4d1d-be1e-59d0a2703b4a

---

## 核心判断

我对 Card 01-06 的主线做压力测试，而不是否定。昇腾-DeepSeek alpha 逻辑可以承受正常波动，但当前 USD 100M 组合最脆弱的地方，是对冲簿在极端行情中不再像保险，而是变成保证金需求。最大经济损失不在 CNH 或 SOX 对冲本身，而在拥挤的 alpha 表达与 NVDA 空头/期权层；最快的现金消耗则来自 UST 变动保证金和期权保证金附加要求。

在我的中心敌对校准下：

| 场景 | 最大盯市回撤 | 同周最大现金 / 保证金调用 | 强制平仓触发 | 最先击穿 NAV 5% | 最先击穿 NAV 10% | 最先击穿 NAV 15% |
|---|---:|---:|---|---|---|---|
| (i) 中美科技政策升级 + 实际收益率上行 | **USD 12.1M / 12.1%** | **USD 4.8M** | 若有 USD 8M 流动性缓冲，不会自动强平；T+2 必须降风险 | Alpha | Alpha + UST 合计 | 组合总额，而非单一层 |
| (ii) CNH + SOX 期权流动性冻结 | **USD 8.9M / 8.9%** 经济回撤，但流动性占用达 **USD 11.4M** | **USD 6.8M** | 若 SOX put-spread 买价低于理论值 40%、且 CNH 抵押品被追加，则 T+1/T+2 触发 | CNH/SOX 流动性层 | 现金缓冲，而非会计 NAV | 只有强制卖出后组合总额触发 |
| (iii) NVDA 政策利好反向挤压 | 强制补空前 **USD 13.7M / 13.7%**；若在 NVDA +55% 至 +60% 补空则 **USD 17-19M** | **USD 10.6M** | NVDA 上涨 >45% 且 prime broker 提高空头保证金时 T+0/T+1 触发 | NVDA 空头/期权 | NVDA 层 + alpha 基差 | 强制补空后组合总额触发 |

**硬性风控线：** 若继续以 USD 100M NAV 运行，下一版组合应把 NVDA 单名挤压损失限制在 **USD 4.0M**，并持有 **USD 12M 非占用流动性**，而不是 USD 8M。否则组合失败的原因不是长期 alpha 判断错误，而是三天抵押品需求足以迫使组合在错误价格上退出。

---

## 依赖说明

当前 live workspace 只包含 `card-01` 和 `card-03`。任务说明中列出的 `session-brief.md`、`card-05`、`card-06` 文件在本地缺失，因此我根据本轮 prompt 中的 session snapshot 重建 Card 05-06 对冲矩阵。报告仍引用可读取的本地前序卡片与外部保证金/流动性资料。

沿用的关键上游假设如下：

| 来源 | 本卡使用的假设 |
|---|---|
| Card 01 | DeepSeek V4 / Ascend 950PR 是中国 AI 算力结构性主线。 |
| Card 03 | 中国科技敞口包括 A-share 硬件/软件与离岸 HK/ADR 平台 AI 敞口。 |
| Card 04 snapshot | USD 100M 框架：中国 AI 多头 USD 45M、NVDA / 美国半导体空头 USD 13-17M、日韩内存多头 USD 8M。 |
| Card 05 snapshot | 多资产防火墙：UST 久期 USD 25-45M、黄金 USD 10-18M、油价尾部、CNH/JPY 对冲、SOX 保护。 |
| Card 06 snapshot | 可执行对冲矩阵：3M SOXX 5%/10% put spread 覆盖 USD 25M 保护名义；6M USD/CNH 零成本 collar 覆盖 40-50% CNY 敞口；receiver swaption / UST 久期；NVDA 6-9M put-spread alpha 表达；年化 carry 约 2.70% NAV，硬封顶 3.00%。 |

---

## 组合风险地图

为便于审计，我把已落实组合标准化如下。这不是新的收益建议，而是把 Card 01-06 转换为压力测试账本所需的风险口径。

| 层级 | 风险名义 | 压力情景中的角色 | 基础流动性处理 |
|---|---:|---|---|
| 中国 AI alpha 多头 | USD 45M | 做多昇腾-DeepSeek 采用：A-share 硬件、HK 平台 AI、国产软件、Four Dragons 封顶仓位 | 现金股票；A-share/HK 科技下跌时流动性显著下降 |
| 日韩内存多头 | USD 8M | 保留全球 AI capex 正 beta | 流动性较好，但压力下与 SOX 相关性上升 |
| NVDA / 美国 semicap 空头 | USD 15M delta-equivalent | 表达 NVIDIA 垄断倍数压缩 | prime-broker 保证金；反向挤压风险主导 |
| UST 久期 / receiver overlay | USD 35M 10Y duration equivalent | 对冲增长冲击 | DV01 约 USD 30k / bp；期货/掉期会产生变动保证金 |
| 黄金 | USD 14M | 地缘政治对冲 | 流动性好，但实际收益率上行时可与 UST 同跌 |
| SOX / SOXX put spread | USD 25M 保护名义，5 个百分点价差 | 半导体下行保险 | 扣除买卖价差和变现成本前，最大收益约 USD 1.25M |
| USD/CNH collar | USD 20M 名义，+/-1.5% collar | CNY 贬值对冲 | OTC 抵押品与跳空基差风险 |
| WTI call spread 与 JPY 对冲 | 小规模 | 尾部分散 | 在三个压力场景中不是决定项 |
| 流动性缓冲 | 假设 USD 8M | 支付变动保证金和期权抵押品 | 在 NVDA 挤压和流动性冻结中偏小 |

第一个不舒服的发现是算术问题：SOX put spread 因为保护名义是 USD 25M，看起来很大，但 5%/10% 价差的最大内在价值只有约 **USD 1.25M**。它是有用的保险，但不是能拯救组合的尾部保护。

---

## VaR 分解

以下为 10 个交易日、99% VaR 估算，采用压力相关性而非温和历史协方差矩阵。口径有意保守，因为该主题拥挤、跨市场上市、且依赖期权。

| 层级 | 单独 10D 99% VaR | 分散化后贡献 | 压力相关性贡献 |
|---|---:|---:|---:|
| 中国 AI alpha 多头 | USD 6.8M | USD 4.9M | USD 6.1M |
| 日韩内存多头 | USD 1.1M | USD 0.6M | USD 0.8M |
| NVDA / 美国 semicap 空头与 NVDA 期权 | USD 4.2M | USD 2.0M | USD 3.5M |
| UST 久期 / receiver overlay | USD 1.4M | USD 0.8M | USD 1.2M |
| 黄金 | USD 1.0M | USD 0.4M | USD 0.7M |
| CNH collar 基差与抵押品 | USD 0.9M | USD 0.4M | USD 0.8M |
| SOX put-spread 流动性 / 估值 | USD 0.8M | USD 0.3M | USD 0.7M |
| 油价 / JPY 剩余项 | USD 0.5M | USD 0.2M | USD 0.3M |
| **组合总额** | **不可相加** | **USD 7.4M** | **USD 11.6M** |

解读：

- 正常分散化 VaR 约 **7.4% NAV**，已经高于常见 5% 软止损线。
- 相关性击穿时，VaR 升至 **11.6% NAV**，因为中国 AI 多头、日韩内存、UST、黄金和 NVDA 期权可能同时亏损。
- 最大 VaR 贡献来自 alpha 层；最大凸性现金调用贡献来自 NVDA 空头/期权层。

---

## 场景 (i)：中美科技政策升级 + 实际收益率上行

**冲击设计：** 美国限制扩大，中国通过采购和市场准入措施反制，全球投资者降低中国科技风险，同时美国 10Y 实际收益率上行 100bp。这是对 Card 05 “UST 与黄金隔离宏观因子”思路最危险的场景，因为对冲资产也会亏损。

| 冲击输入 | 校准 |
|---|---:|
| 中国 AI alpha 多头 | 综合 -27%；Four Dragons -40%；HK 平台 AI -18% |
| 日韩内存 | -10% |
| NVDA / 美国 semicap 空头 | 半导体下跌带来 +USD 2.4M 收益 |
| NVDA put-spread alpha | +USD 1.2M |
| UST 久期 | 约等价 +110bp 名义/实际利率冲击，损失 USD 3.3M |
| 黄金 | -7%，即 -USD 1.0M |
| USD/CNH | CNH -4%；collar 在 1.5% 后提供保护，扣除基差后净 +USD 0.4M |
| SOX put spread | 接近最大内在价值，但扣除流动性成本后变现 USD 1.1M |

**估算 P&L 路径**

| 日期 | P&L 与流动性路径 |
|---|---|
| T+0 | 中国 AI 跳空在对冲反应前造成 USD 8-9M 亏损。UST 期货/掉期开始支付变动保证金。 |
| T+1 | 最大回撤达到 **USD 12.1M**。SOX/NVDA 期权收益仅抵消约 USD 2.3M。 |
| T+2 | 若流动性缓冲为 USD 8M，不会机械强平，但风险限额应强制降仓。 |

**保证金与强制卖出判断**

- 最大现金 / 保证金调用：**USD 4.8M**，主要来自 UST 变动保证金与 FX 期权抵押品。
- 若 prime broker 提高 haircut，第一条强制卖出路径是：削减 USD 10M UST 久期，再卖出 USD 8-10M 流动性较好的 HK 平台仓位，最后才处理 Four Dragons，因为其流动性差且容易跳空。
- 本场景先由 alpha 击穿 NAV 5%，再由 alpha + UST 组合击穿 NAV 10%。没有单个非 alpha 对冲层独立击穿 NAV 10%。

**风控判断：** 如果流动性确实未被占用，组合可以存活，但对冲架构未完成其声称功能。UST 与黄金不能隔离实际收益率冲击；它们会放大该冲击。

---

## 场景 (ii)：CNH 与 SOX 期权流动性冻结

**冲击设计：** CNH 跳贬，SOX 下跌，但真正压力不是方向性敞口，而是原本计划变现或滚动的两组期权同时失去流动性。组合拥有理论凸性，却无法从中拿到足够现金。

| 冲击输入 | 校准 |
|---|---:|
| 中国 AI alpha 多头 | -15% |
| 日韩内存 | -10% |
| 美国 semicap 空头 | +USD 1.5M |
| UST 久期 | 避险收益 +USD 0.6M |
| 黄金 | +USD 0.4M |
| USD/CNH | CNH -5%；collar 理论价值 +USD 0.7M，可执行价值仅 +USD 0.2M |
| SOX put spread | 理论接近最大值 +USD 1.25M，可执行买价 +USD 0.45M |
| 期权保证金 | CNH 与股票期权附加保证金同时上升 |

**估算 P&L 路径**

| 日期 | P&L 与流动性路径 |
|---|---|
| T+0 | 会计回撤尚可控，但 CNH 与 SOX 估值变得不可执行。 |
| T+1 | 按可执行买价折扣后，经济回撤达到 **USD 8.9M**；计入抵押品后现金占用达到 **USD 11.4M**。 |
| T+2/T+3 | 若 30 DTE 滚动无法执行，组合必须用线性对冲替代期权，或直接削减总敞口。 |

**保证金与强制卖出判断**

- 最大现金 / 保证金调用：**USD 6.8M**，主要来自 OTC FX 抵押品、期权保证金附加要求、以及变现时不利买卖价差。
- 在会计 NAV 到达 -10% 前，流动性缓冲已经被消耗。这是最隐蔽的弱点。
- 强制路径：先卖 USD 5M 黄金/UST，临时买入 USD/CNH 线性对冲；只有在融券与基差可接受时，用 short SOX/SMH futures 替代 SOX put spread；随后削减 USD 8-12M 中国 AI beta。

**风控判断：** 这是组合“方向正确但无法变现”的场景。最先击穿的是 CNH/SOX 流动性层，而不是方向性 alpha。会计 NAV 可能显示 -8.9%，但运营流动性表现得像 -11% 至 -12% 事件。

---

## 场景 (iii)：NVDA 政策利好反向挤压

**冲击设计：** 美国政策包或对华许可缓和被市场解读为 NVDA 利好。NVDA 跳涨 45%，SOX 上涨 22%，long put spreads 的隐含波动率坍塌，同时中国 AI 多头因国产替代叙事被重新定价而跑输。

| 冲击输入 | 校准 |
|---|---:|
| NVDA | 峰值 +45%；压力延伸 +55% 至 +60% |
| 美国 semicap 篮子 | +18% |
| 中国 AI alpha 多头 | 国产替代叙事反转，-10% |
| 日韩内存 | +6% |
| NVDA put-spread alpha | 估值损失 -USD 1.4M |
| SOX put spread | 权利金 / 估值损失 -USD 0.6M |
| UST 久期 | 收益率 +25bp，损失 -USD 0.8M |
| CNH collar | 小幅亏损 / 无有效抵消 |

**估算 P&L 路径**

| 日期 | P&L 与流动性路径 |
|---|---|
| T+0 | NVDA 空头损失与期权波动率坍塌同时发生。日内回撤达到 USD 9-10M。 |
| T+1 | 强制补空前最大回撤达到 **USD 13.7M**。prime-broker 保证金调用达到 **USD 10.6M**。 |
| T+1/T+2 | 若 NVDA 延伸至 +55% 至 +60%，强制补空会把损失放大至 **USD 17-19M**，因为组合在凸性已经消失后才被迫补空。 |

**保证金与强制卖出判断**

- 最大现金 / 保证金调用：**USD 10.6M**，由空头股票/掉期变动保证金、维护保证金提高、以及期权抵押价值消失共同构成。
- 若现金只有 USD 8M，同日就必须行动：补回三分之一 NVDA，削减 USD 5M semicap 空头，卖出 USD 5-8M UST/黄金，再降低中国 AI 多头以恢复总敞口。
- NVDA 层最先击穿 NAV 5%。计入保证金后，它可以在组合整体到 NAV -15% 前先击穿 NAV 10%。组合整体只有在强制补空与 alpha 基差亏损叠加后才击穿 NAV 15%。

**风控判断：** 这是组合最危险的单一路径，因为它同时攻击 P&L 逻辑和融资机制。它也是 Card 06 对冲最不足的路径，因为 long put spreads 不能保护空头免受剧烈上行挤压。

---

## 击穿顺序

| 触发线 | 最先击穿条件 | 实务控制 |
|---|---|---|
| NAV -5% | 场景 (i) 为 alpha；场景 (ii) 为 CNH/SOX 流动性；场景 (iii) 为 NVDA | 每日同时看压力 P&L 和流动性仪表盘，而不是只看 Greeks |
| NAV -10% | 场景 (i) 为 alpha + UST；场景 (ii) 为现金缓冲；场景 (iii) 为计入保证金的 NVDA 层 | 强制降低 15-20% 总敞口，并暂停新增期权滚动 |
| NAV -15% | 场景 (i) 只有组合总额；场景 (ii) 为强制卖出后的组合总额；场景 (iii) 为 NVDA 强制补空 | 危机账本：先关闭易挤压空头，再卖流动性对冲，最后降低中国 beta |

顺序很重要。简单的回撤规则会因为中国 AI 多头是最大 VaR 来源而优先砍它。在场景 (iii)，这是错误动作：最先该砍的是 NVDA 上行敞口，因为它是从亏损转向类似偿付危机的最快路径。

---

## 必须修改的风控设置

1. **把 NVDA 单名挤压损失限制在 USD 4.0M。** 用定义风险的 put spreads 或 call-spread overlays 替代部分线性空头。空头 thesis 不应制造开放式上行保证金调用。

2. **把非占用流动性从 USD 8M 提高到 USD 12M。** 场景 (ii) 和 (iii) 的现金调用分别是 USD 6.8M 与 USD 10.6M，且尚未计入运营滑点。USD 8M 不足。

3. **把 SOX put spreads 视为 USD 1.25M 最大收益保险，而不是 USD 25M 保护。** 报告对冲规模时应使用最大收益和可执行买价，而不是只报保护名义。

4. **当实际收益率是压力变量时，降低 UST 久期。** 在场景 (i)，UST 不是对冲。receiver swaption 优于线性久期，因为权利金有限，变动保证金更低。

5. **预先确定流动性瀑布。** 先用现金，其次变现交易所期权，第三卖 UST/黄金，第四削减 NVDA/semicap 挤压敞口，第五降低中国 AI beta。除非组合已超过 NAV -15%，不要在跳空中卖出缺乏流动性的 Four Dragons。

6. **单独运行 liquidity VaR。** USD 7.4M 会计 VaR 低估运营风险。Liquidity VaR 必须包含买卖价差折扣、OTC 抵押品调用、滚动失败与 prime-broker 保证金变化。

---

## 结论与交接

我支持昇腾-DeepSeek 的战略主线，但对当前执行形态做压力测试。组合最严重的弱点不是表面的中国 AI 多头，而是：(a) 期权保护名义与可变现收益之间不匹配，(b) 实际收益率上行时 UST 亏损，(c) NVDA 空头层的开放式融资风险。

下一张卡应从风险诊断转向执行设计。最合适的交接对象是 **algo-trader [specialist]**，因为现在未解决的问题是市场微观结构与执行：在 HK/A-share、CNH、SOX、NVDA 同时承压时，如何清算或再平衡该组合，避免把 12% 盯市损失变成 18% 已实现回撤。

---

## 资料来源

- 前序本地研究：[card-01/report.en.md](../card-01/report.en.md)；[card-03/report.en.md](../card-03/report.en.md)。
- 本轮任务 prompt 中关于本地缺失 Cards 04-06 的 session snapshot，尤其是 USD 100M 组合规模与 Card 06 对冲矩阵。
- FINRA, [Rule 4210 Margin Requirements](https://www.finra.org/rules-guidance/rulebooks/finra-rules/4210).
- Cboe, [Strategy-Based Margin](https://www.cboe.com/en/markets/us/options/margin/strategy-based-margin/).
- OCC, [Characteristics and Risks of Standardized Options](https://www.theocc.com/company-information/documents-and-archives/options-disclosure-document).
- BIS / BCBS-CPMI-IOSCO, [Review of margining practices](https://www.bis.org/bcbs/publ/d537.pdf).
- Federal Reserve, [Financial Stability Report, November 2025](https://www.federalreserve.gov/publications/november-2025-financial-stability-report-overview.htm).
- FSB, [The role of margin requirements and haircuts in procyclicality](https://www.fsb.org/2010/03/cos_100301/).

## Follow-up

- Analyst: algo-trader
- Topic: USD 100M 昇腾-DeepSeek 组合在 HK/A-share、CNH、SOX 与 NVDA 压力环境下的执行清算与再平衡路径
- Question: 在本卡识别的三类压力路径下，应如何设计交易执行顺序、订单规模、替代对冲和成交成本预算，才能避免把 12% 盯市损失放大为 18% 已实现回撤？
