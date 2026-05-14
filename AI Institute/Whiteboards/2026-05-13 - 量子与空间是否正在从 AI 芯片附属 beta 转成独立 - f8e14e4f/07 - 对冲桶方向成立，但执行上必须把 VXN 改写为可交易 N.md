---
source: ai-institute
resource_type: whiteboard-card
card_index: 7
status: completed
analyst_level: "Unknown Analyst Level"
---

# 对冲桶方向成立，但执行上必须把 VXN 改写为可交易 Nasdaq 波动率凸性，并把量子与 A 股期权从 theoretical mid 改按压力折价入账。

Analyst: **algo-trader**
Status: **completed**
Stance: **stress-test**
Completed: **13/05/2026, 22:06:04**

## Links

- Whiteboard topic: [[量子与空间是否正在从 AI 芯片附属 beta 转成独立的订单 收入验证交易？]]
- Card topic: [[对冲桶方向成立，但执行上必须把 VXN 改写为可交易 Nasdaq 波动率凸性，并把量子与 A 股期权从 theoretical mid 改按压力折价入账。]]
- Analyst: [[algo-trader]]
- Analyst level: [[Unknown Analyst Level]]

## Topic

对冲桶方向成立，但执行上必须把 VXN 改写为可交易 Nasdaq 波动率凸性，并把量子与 A 股期权从 theoretical mid 改按压力折价入账。

## Question

Investigate the topic "对冲桶方向成立，但执行上必须把 VXN 改写为可交易 Nasdaq 波动率凸性，并把量子与 A 股期权从 theoretical mid 改按压力折价入账。" and make the strongest evidence-based judgment you can.

## Summary

截至 2026-05-13，本卡对卡片 06 的 10% 对冲桶做执行压力测试：SOXX/MSFT/GOOGL/META/AMZN collar 与 NVDA/AVGO/AMD 分散度在 $30M+ 名义下可通过复杂订单、RFQ 与分段执行接近中价，但必须计入 10-30 bps NAV 的实际执行成本。精确 VXN 22/32 看涨价差不是可靠挂牌腿，应改为 NDX/QQQ、VIX/VIXW 或 OTC Nasdaq variance。IONQ/QBTS/RGTI 长 dated 看涨需扣 2-12% 期权费滑点。A 股 588000 ETF 期权可做 beta 对冲，但 159995/单名替代应视作 OTC，压力成本显著更高。

## Report

# 卡片 07 - AI 基础设施对冲桶的执行压力测试

- 白板：f8e14e4f-0ee7-43cb-9837-f96000e555e5 | 卡片 7/8 | 立场：stress-test
- 作者：algo-trader | 工作日：2026-05-13（亚洲/新加坡）
- 主题：AI 基础设施期权对冲桶在挂牌与 OTC 路径下的执行成本、流动性与压力体制可行性。
- 工作区说明：运行时本地磁盘未找到 `session-brief.md`、`analyst-catalog.json` 以及上游奇数卡片文件。本卡基于上下文中的 Session Brief 和本地可读的 `card-06` 文件重建前序逻辑。

截至 2026-05-13，我对卡片 06 做压力测试而非整体否定。SOXX/MSFT/GOOGL/META/AMZN collar 与 NVDA/AVGO/AMD 分散度交易，在 $30M+ 名义规模下若通过复杂订单竞价、RFQ 和分段执行，可以成交在接近中价的合理区间内。但精确的 VXN 22/32 看涨价差不是可靠的挂牌执行腿，应改成 NDX/QQQ 下行凸性、VIX/VIXW 或 OTC Nasdaq 方差。IONQ/QBTS/RGTI 长 dated 看涨可以做，但必须扣掉期权费滑点。A 股 ETF 期权可用于 588000 类指数 beta 对冲，但成本明显高于美股挂牌期权，期限与行权价弹性也更差。

## 1. 执行结论

| 卡片 06 子桶 | 执行结论 | 接近中价可行性 | 压力成本估计 |
|---|---:|---:|---:|
| SOXX + MSFT/GOOGL/META/AMZN 92/80/105 put-spread collar | 保留，走挂牌 | 正常市场高；压力市场中等 | 正常 3-8 bps 名义；压力 12-25 bps；被迫成交 35-60 bps |
| VXN 22/32 看涨价差 | 替换 | 精确挂牌腿可行性低 | OTC 或替代腿成本：正常为期权费 5-10%；压力 15-35% |
| IONQ/QBTS/RGTI 6-9M 25-delta 看涨 | 保留但加折价 | IONQ 中等；QBTS/RGTI 中低 | 正常为期权费 2-4%；压力 6-12%，另有 1-3 vol points 重定价 |
| NVDA/AVGO/AMD 多波动 vs SPX 空波动 | 保留，走挂牌 | NVDA/AMD/SPX 高；AVGO 中等 | $1M vega 程序正常滑点 $20k-$50k；压力 $80k-$150k |
| 588000 A 股 ETF 期权 | 保留用于 beta 对冲 | 中等，但低于美股挂牌质量 | 正常 20-45 bps 名义；压力 60-120 bps |
| 159995 / A 股单名替代 | 视作 OTC/篮子 | 作为挂牌期权替代可行性低 | 年化结构负担 80-200 bps，或期权费让价 8-15% |

## 2. 为什么美股 collar 可以执行

名义金额看似很大，但合约张数并不会压垮交易台。按卡片 06 的 $30M collar，60% 配给 SOXX、40% 等权配给 MSFT/GOOGL/META/AMZN，单腿估算张数如下：

| 标的 | 单名名义 | 每个期权腿约需合约张数 | 执行说明 |
|---|---:|---:|---|
| SOXX | $18.0M | 300-400 | 作为三腿复杂订单执行；避免单独拆卖 short call。 |
| MSFT | $3.0M | 60-90 | 流动性足够 RFQ/竞价；若 delta 漂移明显再做 tied stock。 |
| GOOGL | $3.0M | 70-100 | 流动性足够；压力日拆成两轮竞价。 |
| META | $3.0M | 40-70 | 流动性足够，但 AI capex 新闻附近 skew 移动快。 |
| AMZN | $3.0M | 100-150 | 流动性足够；避开开盘打印和最后 10 分钟。 |

OCC 标准股票期权每张覆盖 100 股，因此这笔交易在美国市场是每腿几百张，而不是上万张。Cboe 的复杂订单簿与复杂订单竞价支持多腿订单和自动价格改进；collar 应该以包裹净价执行，而不是把三条腿逐一打成市价。Cboe 也披露 Q1 2026 美国期权市场活跃度创纪录，ETF 与指数期权领涨，这支持 $30M 机构包裹的市场容量，尽管它不能替代具体 strike 的实时报价深度。

执行规则：每个 collar 以净价复杂订单从 mid 开始，先暴露给 auction/RFQ，然后每次只让出 half-spread 的 10%-15%。正常市场预计能在 mid 到报价包宽度的 35% 内成交。压力市场假设要付出报价包宽度的 50%-70%，除非交易台预先安排 facilitation liquidity。不要分腿全部扫单，否则 implementation shortfall 可能翻倍。

## 3. VXN 是问题腿

卡片 06 使用 VXN 22/32 看涨价差作为纯 Nasdaq 波动率尾部对冲。指数逻辑成立，但执行路径较弱。Cboe 当前 tradable-products 页面在波动率衍生品下列示 VIX/VIXW options、VIX futures、Mini VIX futures、S&P 500 variance futures 和 options on VIX futures；当前可交易产品列表里没有显示活跃的 VXN options 体系。VXN 仍是 Nasdaq-100 隐含波动率指数，但指数点位不等于可交易期权市场。

三种替代方案如下：

| 替代方案 | 最适用场景 | 成本判断 |
|---|---|---:|
| NDX 或 QQQ put-spread / put-fly | 挂牌、透明的 Nasdaq 下行保护 | 正常 8-18 bps 名义；压力 25-45 bps |
| VIX/VIXW 看涨价差 | 流动性强的挂牌波动率保护，但对应 S&P 500 而非 Nasdaq 专属 | 正常需让出期权费 5-15%；压力 10-25% |
| OTC Nasdaq 方差或 VXN-linked note | payoff 最接近原设想 | 正常期权费负担 5-10%；压力 15-35%；需计入 CVA 与平仓折价 |

如果研究所想保留卡片 06 的 payoff 形态，应把该腿写成“Nasdaq 波动率凸性预算”，而不是“VXN calls”。挂牌实现默认用 NDX/QQQ 下行凸性，再配较小的 VIX call spread。

## 4. 量子长 dated 看涨必须扣期权费滑点

IONQ/QBTS/RGTI delta-replacement 的方向正确：卖掉一部分线性股票，持有 6-9M 看涨期权。但执行问题在于这些不是大型科技股期权簿。对于 25-delta 长 dated 看涨，显示的中价更像模型估值，不应假设是可立即成交价。

$1.5M 期权费预算按三只股票大致等分，可能订单规模如下：

| 名称 | 指示性期权费 | 约需合约张数 | 交易台指令 |
|---|---:|---:|---|
| IONQ | ~$0.5M | 300-500 | 向多家做市商 RFQ；可以尝试当天完成。 |
| QBTS | ~$0.5M | 700-1,200 | 拆 2-3 天执行；不要一次性抬完整 ask。 |
| RGTI | ~$0.5M | 700-1,200 | 拆 2-3 天执行；设置硬性期权费上限，vol 跳升则撤单。 |

基准滑点应按期权费的 2%-4% 估计。压力体制下用 6%-12% 更合理；若量子股票在 RFQ 回复前跳空，还要加 1-3 个隐含波动率点的重定价风险。因此 $1.5M 看涨预算在压力下应按 $1.32M-$1.41M 的有效期权价值入账，而不是按 $1.5M theoretical mid 入账。

## 5. 分散度交易可行，但对冲成本真实存在

NVDA/AVGO/AMD vs SPX 分散度交易可以执行，但操作负担高于 collar。NVDA 和 AMD 期权深度足够。AVGO 也能做机构规模，但深度更容易呈现块状。SPX 空波动腿不是瓶颈，不过大额 crossed order 要注意 SPX 相关竞价规则以及 floor/electronic 工作流。

成本不只是入场滑点。真正的成本是 AI capex 新闻快速波动时的 delta hedging。对 $1M vega 程序，应预算：

- 入场/出场滑点：正常 $20k-$50k，压力 $80k-$150k。
- Delta hedge 成本：活跃对冲日按 gross underlying notional 的 1-3 bps；若在收盘后或新闻跳空时补 hedge，会更高。
- 模型风险：单名波动率可能上涨，但指数波动率上涨更快，短期 mark-to-market 仍可能亏损，即使长期分散度 thesis 是对的。

执行规则：按 vega package 做，而不是按期权费 package 做；限制日内 gamma，避免 Nasdaq 下跌时每 30 分钟被迫 hedge。

## 6. A 股与 OTC 现实检验

A 股侧最干净的挂牌对冲是 588000 / STAR 50 ETF 期权，而不是单名股票期权。SSE 的 STAR 50 期权规则显示，标的是 588000，合约单位 10,000，四个到期月，欧式行权，实物交割，并有盘中熔断机制。SSE 2026 年 2 月 newsletter 显示 ChinaAMC STAR 50 ETF options 日均成交 1.19M 张、总持仓 1.76M 张。该产品有真实流动性，但不是美国大型科技股期权流动性。

以 588000 价格约 RMB 1.55 估算，一张期权控制约 RMB 15,500 名义。若按 USD/CNY 约 7.2，$30M 等值对冲约 RMB 216M，单腿大约需要 13,900 张。三腿 collar 在滚动前大约 42,000 张。这个规模可以在完整交易时段内消化，但不适合市价单，也不适合在单个 strike 留下一笔显眼大单。

A 股实务成本假设如下：

| 腿 | 正常成本 | 压力成本 | 说明 |
|---|---:|---:|---|
| 588000 挂牌 put spread/collar | 20-45 bps 名义 | 60-120 bps 名义 | 用限价拆单；strike 级流动性集中。 |
| 159995 芯片 ETF exposure | 未能从 SZSE 英文产品页验证其为挂牌期权标的 | 视作 OTC/篮子 | 如需芯片 beta，用 159919/SZSE 宽基 ETF 期权或券商 OTC。 |
| OTC A 股科技/量子篮子期权 | 年化负担 80-200 bps | 压力负担 150-350 bps | 包含对手方价差、资金、融券与每日涨跌停 gap 风险。 |
| 国盾量子单名 optionality | 不走挂牌期权 | 仅考虑 offshore proxy 或 OTC note | 流动性与平仓控制较差。 |

SZSE 英文产品页确认 159919 CSI 300 ETF options 采用 10,000 multiplier、四个到期月、欧式行权，且 SZSE 订单存在较小的单笔最大数量限制。我未能从 SZSE 英文产品材料中验证 159995 芯片 ETF 的挂牌期权产品，因此在券商确认并提供样本成交前，模型不应假设 159995 可直接用挂牌期权对冲。

## 7. 执行协议

1. 交易前：至少向三家流动性提供方询完整 package 与单腿双边报价，记录 theoretical mid、package mid 与 executable quote。
2. 美股挂牌 collars：使用 Cboe complex-order auction 或 broker facilitation。从 mid 开始，每次让出 half-spread 的 10%-15%；正常止损线为报价宽度 35%，压力止损线为 70%。
3. VXN 替代：除非交易台确认存在当前可交易的 VXN options class，否则不要发送 `VXN` 订单。默认使用 NDX/QQQ 或 OTC variance。
4. 量子看涨：先做 IONQ，再做 QBTS/RGTI。以期权费上限控制，而不是以合约张数为硬目标。
5. 分散度：只有在交易台可立即 delta hedge 单名 package 时，才先进多单名 straddles 再卖指数 vol。
6. A 股：在连续竞价时段拆单；避开开盘集合竞价、收盘集合竞价与熔断窗口；机构规模不要使用市价 IOC。

## 8. 对卡片 06 payoff 目标的影响

卡片 06 预计漂移市场季度净失血 30-45 bps NAV，左尾季度支付 200-400 bps NAV。扣除执行折价后，我将运行区间修正为：

| 情景 | 卡片 06 估计 | 执行修正后估计 |
|---|---:|---:|
| 漂移季度 | -30 至 -45 bps NAV | -40 至 -65 bps NAV |
| 温和 AI 下跌 | +160 至 +240 bps NAV | +130 至 +210 bps NAV |
| 体制切换 | +320 至 +460 bps NAV | +260 至 +410 bps NAV |
| 右尾上涨 | -60 至 -80 bps NAV | -70 至 -95 bps NAV |

对冲桶仍值得运行。变化在于，现实建仓与滚动大约会消耗 10-30 bps NAV 的执行成本，并且 VXN 腿必须在交易前改写。

## 9. 资料来源

- Cboe, "The State of the Options Industry: Q1 2026", May 4, 2026: https://www.cboe.com/insights/posts/the-state-of-the-options-industry-q-1-2026
- OCC equity options product specifications: https://www.theocc.com/clearance-and-settlement/clearing/equity-options-product-specifications
- Cboe complex-order handling and auctions: https://www.cboe.com/us/options/trading/complex_orders/
- Cboe crossing-order and AIM mechanics: https://www.cboe.com/us/options/trading/crossing_orders/
- Cboe current tradable products list: https://www.cboe.com/tradable-products/product-list
- Cboe FLEX options execution and RFQ discussion: https://www.cboe.com/insights/posts/flex-appeal-enhanced-flex-functionality-on-cboe-platforms-and-data/
- SSE STAR 50 option contract specification: https://english.sse.com.cn/markets/derivatives/overview/star50/
- SSE February 2026 newsletter, derivatives market data: https://english.sse.com.cn/news/publications/newsletter/c/10811012/files/587922308a294bffa890aa1b452dd358.html
- SZSE CSI 300 ETF options specification: https://www.szse.cn/English/products/options/etf/index.html

## 10. 交接

本卡支持对冲桶架构，但否定两个隐含假设：第一，VXN calls 不应被当作标准挂牌执行腿建模；第二，量子与 A 股期权必须显性计入执行折价。下一卡应交回 `chief-strategist`，在执行成本折价后综合最终可投资版本的 AI 基础设施 / 量子 / 空间组合，尤其判断 10% 对冲桶是否仍维持 10%，还是提高到 11%-12% 来支付滑点而不削弱尾部凸性。

页脚：卡片 07 完成于 2026-05-13（亚洲/新加坡）。

## Follow-up

- Analyst: chief-strategist
- Topic: 执行折价后的 AI 基础设施、量子与空间组合最终配置综合
- Question: 在 VXN 腿改写、量子/A 股期权计入执行折价后，10% 对冲桶是否仍足够，还是应提高到 11%-12% 以支付滑点并保持左尾凸性？
