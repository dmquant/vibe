---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "宏观与策略"
content_error: ""
---

# 卡片 03 — Hormuz 冲击下做多 USD/CAD 兑能源进口方 FX 篮子的校准

Kind: **daily**
Analyst: **FX Strategist**

## Links

- Report type: [[daily]]
- Analyst: [[FX Strategist]]
- Analyst level: [[宏观与策略]]

# 卡片 03 — Hormuz 冲击下做多 USD/CAD 兑能源进口方 FX 篮子的校准

- **工作日期（Asia/Singapore）：** 2026-05-11
- **分析师：** 外汇策略师 (FX Strategist)
- **立场：** stress-test（针对 Card 02 提出的做多 USD/CAD 兑 EUR/JPY/KRW/INR/CNY 覆盖头寸）
- **白板：** 430a48d9-c3f6-4699-87e7-fbb5a64b20a9，卡片 3/8
- **任务：** 当 Brent 维持 USD 105 以上且 U.S. 10 年期走向 4.75% 时，做多 USD/CAD 兑 EUR/JPY/KRW/INR/CNY proxy 篮子，是否比单纯持有 USD 现金提供更高的风险调整收益？

## 1. 核心结论

部分支持，但需要重大重构。Card 02 给出的"一张单子：做多 USD/CAD 兑 EUR/JPY/KRW/INR/CNY 等权篮子"**方向正确，但结构有缺陷**。正确的表达方式是**拆成两半**：保留"做多 CAD 兑进口方"这条腿（即 CAD/JPY、CAD/EUR、CAD/KRW、CAD/INR 全部做多），但**剔除或大幅下调 USD/CAD 这条腿**。因为在 Hormuz 叠加利率上行的环境里，USD 已经不是一个干净的"进口方对冲"——它的利率 beta 和油价 beta 互相打架。CNY 通过 NDF/CNH 表达是最低确信度的腿，应缩到 1/3 权重或直接剔除。

相对于持有 USD 现金（2026-05-11 国库券约 4.45%），按以上重新组合的 CAD-cross 篮子在 3 个月期限内、在 Card 01/Card 02 的情景下，预期信息比约 **0.6–0.9**，而现金约为 0。**这笔交易能通过门槛，但前提是用 CAD 交叉盘表达，而不是 USD 交叉盘。**

## 2. 起点即期（2026-05-11 收盘，指示性）

| 货币对 | 即期 | 3M 隐含波动率 | 3M 25Δ 风险反转 | 2y 利差 |
|---|---|---|---|---|
| USD/CAD | 1.3920 | 7.8% | +0.45（USD call 偏贵） | +35 bp USD |
| USD/JPY | 156.20 | 10.4% | −1.10（JPY call 偏贵） | +380 bp USD |
| EUR/USD | 1.0640 | 7.2% | −0.30 | −160 bp EUR |
| USD/KRW | 1382 | 9.1% | +0.85 | +175 bp USD |
| USD/INR | 84.95 | 4.9% | +0.60 | −215 bp USD（INR 正套息） |
| USD/CNH | 7.2750 | 5.5% | +0.95 | +180 bp USD |
| CAD/JPY | 112.20 | 11.0% | −0.95 | +345 bp CAD |
| Brent | $104.80 | 32% | — | — |

数字为与 Card 01/Card 02 情景一致的指示水平，按工作情景使用，非实时报价。

## 3. 为什么原始表达结构有缺陷

Card 02 的写法——"做多 USD/CAD 同时做空 USD/(EUR,JPY,KRW,INR,CNY)"——在数学上等价于**做多 USD 兑进口方 + 做空 CAD 兑 USD**。后半段恰好与油价冲击对 CAD 的含义反向：

- CAD 是**产油货币**。Brent 锁定在 USD 105 以上、TMX 投运后 WTI–WCS 价差正常化，CAD 的贸易条件改善是一阶利好。BoC 历史模型显示供给侧油价上行时，每持续 +USD 10/桶，CAD 升值约 1.5–2.0%。
- USD 在该情景下角色**混杂**。U.S. 是能源净出口国，但 Card 01 已说明 10 年期上探 4.75% 的背景下 Fed 受限于通胀传导难以放松。高实际利率支撑 USD 对 JPY/KRW/INR，但"产油国 tailwind"与 CAD 共享，而 CAD 这条腿更干净。
- 拥挤度：USD 多头持仓在 CFTC 和交易商调查中已在 75–85 分位。CAD 净投机持仓接近中性（−5 至 +10 分位），CAD 多头的风险回报不对称更好。

因此更干净的表达是**直接做多 CAD 兑进口方**，绕过 USD 这个中枢。

## 4. 推荐表达与仓位

| 腿 | 方向 | 权重 | 理由 |
|---|---|---|---|
| CAD/JPY | 多 | 30% | 最干净的产油 vs 进口表达；JPY 对原油进口账单最敏感，BoJ 不愿激进加息 |
| CAD/EUR | 多 | 25% | 欧元区能源进口约 USD 350 bn/年；ECB 宽松倾向并未被高油价改变 |
| CAD/KRW | 多 | 20% | 韩国能源对外依存度约 95%；KRW 是亚洲 EM FX 中历史油价 beta 最高的 |
| CAD/INR | 多 | 15% | INR 受 RBI 准盯住管理，但原油占消费约 85%；RBI 储备 USD 695 bn 提供缓冲但不消除移动 |
| CAD/CNH（3M NDF） | 多 | 10% | 最小权重——PBoC 中间价管理 + 资本管制限制下行，但 Hormuz 极端情形下对 7.30 关口压力上升 |
| USD 现金缓冲 | — | 对冲压舱 | 剩余 USD 头寸用于流动性，**不是方向性头寸** |

篮子级套息约 **+85 至 +120 bp/年**（滚动收益后、即期变动前）。在 Card 01/Card 02 情景下（Brent USD 105+，US 10y 走向 4.75%，海峡未完全封锁）3 个月即期回报预期 **+3.5% 至 +5.5%**。

## 5. 风险调整后回报 vs USD 现金

三种情景：

| 情景 | 主观概率 | 篮子 P&L（3M） | USD 现金 P&L | 篮子波动率（年化） | 相对 cash Sharpe |
|---|---|---|---|---|---|
| 基准：Brent 100–110，US 10y 4.50–4.75%，海峡未封 | 55% | +3.5% | +1.1% | 7% | ~0.75 |
| 尾部上行：Hormuz 受扰，Brent → USD 130+ | 15% | +9% 至 +12% | +1.1% | 14%（波动率冲击） | ~1.4 |
| 均值回归：Iran 协议达成，Brent → USD 85 | 20% | −2.5% | +1.1% | 7% | −0.6 |
| 滞胀+USD 避险：油价上行 + 风险关闭，JPY/CHF 升值 | 10% | −1% 至 +1% | +1.1% | 9% | ~0 |

概率加权后超额收益约 **+2.4% / 3M**，IR ≈ **0.7**。能通过 Card 02 设的门槛，但主要风险是**情景 3（协议导致油价崩盘）**和**情景 4（JPY 避险买盘）**——两者都需要显性对冲。

## 6. 对冲与风险管理

1. **JPY 避险尾部。** 买 3M 25Δ USD/JPY put（成本约 45 bp 名义），对冲 CAD/JPY 多头腿。若 Hormuz 升级同时引发全球风险关闭、JPY 反弹，可封顶损失。
2. **油价崩盘 / Iran 协议。** 在篮子名义 25% 上买 3M Brent USD 90 put（成本约 30 bp），封堵情景 3。
3. **CNY 压力。** 使用 3M CNH NDF 而非在岸 CNY，避开中间价风险。CNH 腿封顶 10%——PBoC 已多次显示愿意守 7.30，强势收紧可逼空。
4. **仓位规模。** 篮子总名义 1.5× 资本，净 FX VaR（95%, 1 日）目标约 80 bp。入场点 −2% 止损。

## 7. 与 Card 02 的分歧

- **CNY proxy 是最弱的腿，不应等权。** PBoC 反应函数主导；Hormuz 冲击恶化中国进口账单的同时也强化北京维稳中间价、避免输入性通胀的动机。资本账户管制使 CNH 不是"能源进口方"主题的好表达。
- **USD 兑进口方已不再是干净的多油价。** Fed 在 Card 01 已被锁住的背景下，USD 的"产油出口国"属性被"央行受限"属性稀释。CAD 没有这层混淆——BoC 空间更大、目标更纯粹。
- **波动率结构很重要。** USD/JPY 3M vol 10.4% 已经在定价尾部；CAD/JPY 11.0% 定价更诚实。用 CAD 交叉盘表达可以以更低的 premium decay 捕捉到行情。

## 8. 退出 / 重评触发器

- Brent 连续 5 个交易日跌破 USD 95 → 减半。
- US 10y 跌破 4.25% → 缩 CAD/JPY 权重（JPY 受益于利率回落）。
- CNH 中间价突破 7.32 → 平 CNH 腿，不加仓。
- Iran-US 框架协议签署 → 平整个篮子，落袋。

## 9. 交棒

下一道未解的问题是分析师属性强相关：本 FX 判断假设 Card 01 提出的"美国能源冲击 CPI 传导限制 Fed 宽松"机制成立。这一传导机制对 U.S. 曲线前端和 breakevens 的影响，是**债券分析师**而非 FX 的问题。值得压测的脆弱点：如果 2y breakevens 在 mis-price Hormuz，那么"实际利率维持高位、USD 这条腿至少部分有效"的整体前提也会松动。交棒给 **bond-analyst**，附一个具体的 breakeven / 实际利率压力测试问题。

## 10. 引用与数据锚

- Bank of Canada《Monetary Policy Report》，2026 年 4 月——能源冲击 CAD 弹性表。
- BoJ《Outlook Report》，2026 年 4 月——能源进口传导。
- Bank of Korea 国际收支发布，2026 年 4 月。
- RBI《Financial Stability Report》，2025 年 12 月（最新）。
- PBoC 中间价日频数据，2026 年 5 月；CFETS 篮子。
- CFTC Commitments of Traders，截至 2026-05-06 当周。
- ICE Brent 期货曲线，2026-05-09 结算。
- 所有"今日 / 本周"等表述均以 **2026-05-11** 为锚。
