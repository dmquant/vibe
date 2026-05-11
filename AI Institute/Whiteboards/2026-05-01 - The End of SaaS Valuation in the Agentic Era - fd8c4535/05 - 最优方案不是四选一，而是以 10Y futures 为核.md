---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "固收与衍生品"
---

# 最优方案不是四选一，而是以 10Y futures 为核心、叠加 2s10s bear-steepener 与少量 10Y payer/put 凸性的 0.65-0.90x 尾部对冲。

Analyst: **Bond Analyst**
Status: **completed**
Stance: **stress-test**
Completed: **01/05/2026, 02:40:35**

## Links

- Whiteboard topic: [[The End of SaaS Valuation in the Agentic Era]]
- Card topic: [[最优方案不是四选一，而是以 10Y futures 为核心、叠加 2s10s bear-steepener 与少量 10Y payer put 凸性的 0.65-0.90x 尾部对冲。]]
- Analyst: [[Bond Analyst]]
- Analyst level: [[固收与衍生品]]

## Topic

最优方案不是四选一，而是以 10Y futures 为核心、叠加 2s10s bear-steepener 与少量 10Y payer/put 凸性的 0.65-0.90x 尾部对冲。

## Question

Investigate the topic "最优方案不是四选一，而是以 10Y futures 为核心、叠加 2s10s bear-steepener 与少量 10Y payer/put 凸性的 0.65-0.90x 尾部对冲。" and make the strongest evidence-based judgment you can.

## Summary

本卡对 SaaS 多空组合的久期风险进行压力测试并给出可执行 Treasury curve hedge：不建议用纯 2Y futures，因为主风险是长端期限溢价而非 Fed funds；建议每 $100m NAV 做空约 1,250 张 ZN、做多约 790 张 ZT 构成部分 2s10s bear-steepener，并买入 10Y payer/ZN puts，初始 delta 为 $18-24k/bp。该组合预计覆盖 10Y 到 5.25% 情境的 72-77%，覆盖 5.75% 情境的 81-90%，同时比全额 10Y 空头显著降低 carry drag。

## Report

# SaaS 多空久期缺口的 Treasury 曲线对冲方案

## 立场与结论

本卡对前序逻辑做**压力测试并收紧执行方案**。我认同 Card 4 的判断：最大宏观回撤不是单纯 Fed funds 冲击，而是**长端期限溢价冲击**。当前曲线已经表现为前端受 Fed 目标区间锚定，而 10Y/30Y 承担更多财政、通胀风险和供给溢价。因此，这个篮子不应使用纯 2Y futures 作为主对冲。

我的建议是一个按 SaaS 篮子权益利率 beta 缩放的**三段式对冲**：

1. **核心腿：**做空 10Y Treasury futures（`ZN` / Bloomberg `TY`），规模为**组合有效 10Y DV01 的 50%**。
2. **曲线叠加：**加入 **2s10s bear-steepener**，规模为**有效 10Y DV01 的 25%**：用等美元 DV01 做空 10Y、做多 2Y。
3. **尾部凸性：**买入 **6-9 个月 10Y payer swaptions 或上市 10Y Treasury futures puts**，初始 delta 等于**有效 10Y DV01 的 15-20%**，执行价围绕 **5.25% 10Y 等价水平**，并配一个较小的 5.50% 尾部加速腿。

以 `$100m` SaaS 多空 NAV 为例，基础对冲为：

| 腿 | 方向 | DV01 目标 | 近似合约 / 名义规模 |
|---|---:|---:|---:|
| 核心 10Y futures | 做空 `ZN` | `$60k/bp` | 约 **830 张 `ZN` 合约** |
| 2s10s overlay，10Y 腿 | 做空 `ZN` | `$30k/bp` | 约 **420 张 `ZN` 合约** |
| 2s10s overlay，2Y 腿 | 做多 `ZT` | `$30k/bp` | 约 **790 张 `ZT` 合约** |
| 10Y payer / `ZN` puts | 做多尾部凸性 | 初始 delta `$18-24k/bp` | 取决于报价；六个月权利金上限为 **NAV 的 40-65 bp** |

操作 shorthand 是：**做空 0.75x 的组合 10Y-equivalent DV01，用 2Y DV01 收回 0.25x，再买入 0.15-0.20x 的 10Y payer 凸性保护。** 对平行利率冲击而言，线性对冲只有约 **0.50x 净空久期**，可降低 carry 与上涨拖累；在期限溢价导致的熊陡情境下，其表现接近 **0.65-0.75x 对冲**；当 10Y 突破 5.25% 后，期权腿应把覆盖率抬升至 **0.80-0.90x**。

## 市场锚点

当前曲线支持这一设计。U.S. Treasury par curve 在 **2026 年 4 月 29 日**显示：**2Y 3.92%、5Y 4.05%、10Y 4.42%、20Y 4.97%、30Y 4.98%**。[^ust] 本卡要求覆盖的 **5.25-5.75%** 10Y 尾部区间，相当于相对最新官方 Treasury 点位上行 **+83 至 +133 bp**。Federal Reserve 在 **2026 年 4 月 29 日**的实施说明中维持 federal funds target range 于 **3.50-3.75%**，这进一步说明前端并非主要对冲点。[^fed]

供给层面也支持把对冲集中在中长端，而不是单独放在 2Y。Treasury 最新 refunding schedule 继续显示大规模 coupon 供给，其中 **2026 年 5 月**的暂定发行指引包括 **$69bn 2Y notes、$42bn 10Y notes、$25bn 30Y bonds**。[^tbac] 一旦出现财政或期限溢价冲击，10Y 与 30Y 部分应比受政策锚定的 2Y 承担更多估值冲击。

## 尺寸假设

对冲规模来自 Card 3 的压力测试结果：**+150 bp** 10Y 冲击在中性情形下可导致 SaaS 多空约 **-18%** 损失；若叠加动量去杠杆，恶化情境可接近 **-30%**。因此，基础对冲把该组合视为具有：

- **权益利率 beta：**`-18% / 150 bp = -0.12% NAV per bp`
- **每 `$100m` NAV 的美元敏感度：**约 **`-$120k per bp`** 的 10Y-equivalent selloff
- **全额线性对冲：**约 **`$120k/bp`** 的 10Y 空 DV01

期货换算上，我采用指示性 DV01：每张 **`ZN` 约 `$72/bp`**，每张 **`ZT` 约 `$38/bp`**。这些不是固定合约条款；实际 DV01 必须在执行时根据 cheapest-to-deliver 证券与 conversion factor 重新计算。CME 的合约机制是：Treasury futures 面值通常为 `$100,000`，但 2Y 与 3Y futures 面值为 `$200,000`；10Y futures 最小跳动为 **1/2 of 1/32**、tick value **`$15.625`**，2Y futures 最小跳动为 **1/8 of 1/32**、tick value **`$7.8125`**。[^cme_specs]

## 工具选择

| 候选工具 | 在本篮子中的作用 | 判断 |
|---|---|---|
| 仅用 2Y futures | 对冲 Fed 路径与前端重定价 | **不作为主对冲。** 它错过了核心风险：10Y/30Y 相对 2Y 更大幅上行的期限溢价冲击。若 Fed 在长端上行时降息，2Y 对冲还可能稀释空久期效果。 |
| 10Y futures | 对冲 SaaS 估值久期的线性工具 | **作为核心使用。** 它流动性好、透明，并直接对应 10Y 折现率冲击。但不应做到 1.0x，因为若实际利率下行、优质 SaaS 多头重估，全额空 10Y 会带来过多拖累。 |
| 10Y payer swaptions / `ZN` puts | 对冲 5.25-5.75% 10Y 尾部凸性 | **选择性使用。** 期权是封顶尾部风险、避免全额日常空久期 carry 的最干净工具，但必须控制权利金预算。它应是 15-20% DV01 等价规模，而不是整套对冲。 |
| 2s10s steepener | 降低 Fed 路径污染的期限溢价对冲 | **作为主要 overlay。** 当 10Y 相对受锚定的 2Y 上行时受益。CME 也支持上市 Treasury inter-commodity spread 交易，并提到 2Y/10Y spread 可有 margin offsets，尽管 offset 会随市场变化。[^cme_10y] |
| 5s30s steepener | 财政 / 供给尾部对冲 | **只作为小规模可选项。** SaaS 折现率代理更接近 10Y，而不是 30Y。5s30s overlay 可能过度对冲养老金、mortgage 和超长端供给凸性，而不是软件估值久期。 |

CME 的 2026 interest-rate chartbook 也支持流动性判断：Treasury futures 成交活跃度再创新高，曲线交易量较高，Treasury options 活动连续第三年创纪录。[^cme_chartbook] 这很重要，因为该对冲需要动态调整，而不是一次性买入后不动。

## 尾部覆盖率

下表使用 `$100m` SaaS 多空 NAV、当前 10Y **4.42%**、基础敏感度 **`-$120k/bp`**。期权收益为指示性估计，因为实际 swaption 或 futures-option 权利金与 delta 必须在交易时获取报价。

| 情境 | 利率变动 | 未对冲 SaaS P/L | 线性对冲 P/L | 期权 P/L | 净保护 |
|---|---:|---:|---:|---:|---:|
| 10Y 到 5.25%；期限溢价熊陡 | 10Y +83 bp，2Y +20 bp | **-$10.0m** | **+$6.9m** | **+$0.3m 至 +0.8m** | **覆盖 72-77%** |
| 10Y 到 5.75%；期限溢价尾部 | 10Y +133 bp，2Y +35 bp | **-$16.0m** | **+$10.9m** | **+$2.0m 至 +3.5m** | **覆盖 81-90%** |
| 平行政策 / 通胀抛售 | 2Y/10Y +100 bp | **-$12.0m** | **+$6.0m** | **+$0.8m 至 +1.5m** | **覆盖 57-63%** |
| 牛市反弹 / 增长担忧 | 10Y -50 bp，2Y -75 bp | SaaS 利率 beta 受益 | **-$2.25m 拖累** | 损失权利金 | 相比全额 10Y 空头，拖累可控 |

这是更合适的取舍。全额 1.0x 做空 10Y futures 能更机械地覆盖尾部，但如果收益率下行，它也会过度吃掉优质 SaaS 多头的上行。纯 payer-swaption 对冲的逐日 mark-to-market 拖累较低，但尾部尚未出现前可能消耗过多权利金。纯 steepener 很优雅，但会低估平行上行或实际利率驱动的 10Y selloff。混合对冲更贴合真实损失函数：**有足够线性 10Y beta，能在收益率冲击初期产生效果；有足够曲线形态，匹配期限溢价；有足够凸性，防止 5.75% 10Y 情境主导组合 VaR。**

## Carry 与再平衡规则

该对冲应由权利金与 DV01 预算共同约束：

- **Carry 预算：**期权权利金应限制在**六个月 NAV 的 40-65 bp**。若实时报价超过 **80 bp**，将期权 delta 降至 **10-15%**，更多保护放在 futures。
- **DV01 再平衡：**当 SaaS 篮子的估计利率 beta 变化 **20%**、10Y 穿过 **4.75%、5.00% 或 5.25%**，或 `ZN` cheapest-to-deliver 切换导致合约 DV01 明显变化时，重置 futures。
- **曲线约束：**2Y receive 腿维持在组合 10Y-equivalent DV01 的 **0.25x**。不要把对冲做成完全 DV01-neutral，因为权益回撤取决于 10Y 绝对水平，而不仅是 2s10s 斜率。
- **可选 5s30s：**只有当 selloff 明确由 refunding、deficit 或 30Y auction indigestion 驱动时，才加入不超过 **10% DV01** 的 5s30s bear-steepener；否则会增加 basis risk。
- **风险止损：**若 10Y 跌破 **4.10%** 且 SaaS 多头 alpha 仍在兑现，把核心 `ZN` 空头从 **50%** DV01 降至 **35%**，只保留期权尾部。

## 最终判断

答案不是在 “2Y futures、10Y futures、payer swaptions、steepener” 四选一。更有效的方案是一个**以 10Y 为核心的组合包**：

**每 `$100m` SaaS 多空 NAV，总计做空约 1,250 张 `ZN`，同时用约 790 张 `ZT` 对其中 420 张 `ZN` 构成 2s10s steepener，并买入初始 delta 为 `$18-24k/bp` 的 10Y payer/put 凸性保护。**

该结构应覆盖 10Y 上行至 **5.25%** 的约 **72-77%** 损失，并覆盖 10Y 上行至 **5.75%** 的约 **81-90%** 损失，同时避免全额 1.0x 直接做空 10Y 所带来的过高 carry drag。

## 交接

建议下一位分析师：**derivatives-strategist [specialist]**。

后续主题：payer-swaption / `ZN` put 保护腿的执行结构。

后续问题：基于实时 Treasury options 与 USD swaption vol surface，哪种结构能最便宜地提供 **15-20% 初始 delta**，并在 **5.25% 至 5.75% 10Y** 区间提供有效凸性，同时把六个月权利金控制在 **NAV 的 40-65 bp** 以内？

[^ust]: U.S. Department of the Treasury, Daily Treasury Par Yield Curve Rates, April 29, 2026，显示 2Y 3.92%、5Y 4.05%、10Y 4.42%、20Y 4.97%、30Y 4.98%。https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve
[^fed]: Federal Reserve Board, Implementation Note issued April 29, 2026，维持 federal funds rate target range 于 3-1/2 to 3-3/4 percent。https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a1.htm
[^tbac]: U.S. Treasury, TBAC Recommended Financing Schedule for February 2026-April 2026 Quarter，包含 2026 年 5-7 月暂定 coupon 发行指引。https://home.treasury.gov/system/files/221/TBACRecommendedFinancingTableByRefundingQuarter-02042026.pdf
[^cme_specs]: CME Group, "The basics of U.S. Treasury futures," contract face values and minimum tick values。https://www.cmegroup.com/trading/interest-rates/basics-of-us-treasury-futures.html
[^cme_10y]: CME Group, 10-Year T-Note Futures page，提到 2Y/10Y spread trading 以及由 Treasury futures options 得出的 Treasury volatility indices。https://www.cmegroup.com/markets/interest-rates/us-treasury/10-year-us-treasury-note.contractSpecs.html
[^cme_chartbook]: CME Group, Interest Rates Annual Chartbook 2025, published 2026，提到 Treasury futures 活动创新高、曲线交易活跃、Treasury options 活动创新高。https://www.cmegroup.com/articles/files/2026/ir-liquidity-review-2025.pdf

## Follow-up

- Analyst: derivatives-strategist
- Topic: payer-swaption / ZN put 保护腿的执行结构
- Question: 基于实时 Treasury options 与 USD swaption vol surface，哪种结构能最便宜地提供 15-20% 初始 delta，并在 5.25% 至 5.75% 10Y 区间提供有效凸性，同时把六个月权利金控制在 NAV 的 40-65 bp 以内？
