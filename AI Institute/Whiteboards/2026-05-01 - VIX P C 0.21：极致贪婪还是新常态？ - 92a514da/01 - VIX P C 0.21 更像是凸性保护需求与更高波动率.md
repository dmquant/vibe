---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "权益策略"
---

# VIX P/C 0.21 更像是凸性保护需求与更高波动率稳态并存，而不是市场完全忘记 2025 年波动率中枢回归。

Analyst: **Chief Strategist**
Status: **completed**
Stance: **initial**
Completed: **01/05/2026, 09:10:35**

## Links

- Whiteboard topic: [[VIX P C 0.21：极致贪婪还是新常态？]]
- Card topic: [[VIX P C 0.21 更像是凸性保护需求与更高波动率稳态并存，而不是市场完全忘记 2025 年波动率中枢回归。]]
- Analyst: [[Chief Strategist]]
- Analyst level: [[权益策略]]

## Topic

VIX P/C 0.21 更像是凸性保护需求与更高波动率稳态并存，而不是市场完全忘记 2025 年波动率中枢回归。

## Question

Investigate the topic "VIX P/C 0.21 更像是凸性保护需求与更高波动率稳态并存，而不是市场完全忘记 2025 年波动率中枢回归。" and make the strongest evidence-based judgment you can.

## Summary

本卡否定“VIX 认沽/认购比率 0.21 等于市场完全忽视 2025 年波动率中枢回归”的简单解读。0.21 确实代表约 4.76 张 call 对 1 张 put，但 VIX call 常是上行波动率保护。FRED 计算显示 2025 年 VIX 均值 18.93、区间 13.47-52.33；2026 年截至 2026-04-29 均值 20.32，最新 18.81，并未回到 2024 年 15.55 的低波动中枢。A 股策略上维持高股息/质量压舱石与选择性成长的杠铃配置。

## Report

# VIX 认沽/认购比率 0.21：极致贪婪还是新的波动率常态？

## 核心判断

我**否定**“VIX 认沽/认购比率跌到 **0.21** 就证明市场完全忽视 2025 年波动率中枢回归”这一简单解读。这个读数确实极端偏向认购，但 VIX 期权与个股或股指期权的含义不同：**VIX call 往往是上行波动率保护**，不只是权益市场贪婪的表达。更合理的判断是，投资者可能一边为尾部波动保护付费，一边把即期波动率定价在 2025 年后的稳态区间附近。

真正值得追问的不是“投资者是否亢奋”，而是“这种 call-heavy flow 是直接尾部对冲、call spread 降成本、做市商库存转移，还是单一期限未平仓口径造成的扭曲？”在把 **0.21** 转化为权益风险信号之前，需要先做期权流分解。

## 证据面板

| 信号 | 最新值 / 参考值 | 解读 |
|---|---:|---|
| 本卡输入：VIX 认沽/认购比率 | **0.21** | 等于每 **1** 张 call 对应 **0.21** 张 put，或约每 **1** 张 put 对应 **4.76** 张 call。它说明交易偏向 call，但在 VIX 上可能代表更强的上行波动率保护需求。 |
| Cboe/YCharts 交叉核验 | **2026-04-28**，VIX call 成交量为 **286,319**，put 成交量为 **170,873**，按该口径计算的认沽/认购比率为 **0.60**。 | **0.21** 需要确认是成交量还是未平仓口径、全期限还是单一期限、盘中还是收盘口径。 |
| 即期 VIX 收盘 | **2026-04-29** 为 **18.81**。 | 即期 VIX 并未明显低于 2025 年中枢，而是接近稳态区间。 |
| 2025 年 VIX 状态 | 基于 FRED 日收盘计算：均值 **18.93**，区间 **13.47-52.33**。Cboe 2026 展望同样指出，2025 年 VIX 均值为 **18.9**，较 2024 年上升 **3.3 pts**，运行区间为 **13-52**。 | 2025 年波动率中枢已经较 2024 年上移。若市场把 VIX 定价在 18-19 附近，并不明显是在忽视这一变化。 |
| 2026 年以来状态 | 基于 FRED 日收盘计算，截至 **2026-04-29** 的年内均值为 **20.32**，区间 **14.49-31.05**。 | 2026 年并没有回到 2024 年的超低波动环境。 |
| 2025 年 4 月压力记忆 | Cboe 将 2025 年 4 月描述为近期最波动的阶段之一：**2025-04-02** 关税公告后，SPX 两个交易日内下跌近 **10%**；VIX 升至 **50 多**；一个月已实现波动率升至近 **43%**。 | 投资者对波动率跳升风险仍有近期记忆。低 VIX 认沽/认购比率可能反映对冲需求，而非否认风险。 |

资料来源：FRED/Cboe VIXCLS 日收盘；Cboe VIX 产品页和 2026 波动率展望；Cboe 2025 年 4 月市场回顾；YCharts 页面，底层来源为 CBOE Daily Market Statistics。[^fred][^cboe-vix][^cboe-april][^ycharts-call][^ycharts-put][^cboe-outlook][^barchart]

## 为什么 0.21 不是直接的“贪婪”信号

在普通权益期权中，低认沽/认购比率通常表示投资者更偏好 call 而非 put，因此容易被理解为风险偏好较强。但在 VIX 期权中，这个映射会改变。Cboe 明确将 VIX 期权和期货定义为管理组合波动率风险、表达未来波动率观点、以及利用波动率均值回归特征的工具。[^cboe-vix] 由于 VIX 与 S&P 500 历史上存在较强反向关系，买入 VIX call 往往是在对冲权益回撤。

因此，**0.21** 的 VIX 认沽/认购比率至少有三种可能含义：

1. **波动率对冲：** 投资者买入 VIX call，以获得下一次波动率跳升的凸性保护。
2. **波动率 carry 与结构交易：** 投资者卖出 VIX put、买入 call spread，或滚动上行保护，因为期货曲线和期权偏斜使这种表达比直接买权益 put 更有效。
3. **数据构成问题：** 单一期限、未平仓口径或盘中大宗交易，都可能机械性压低头寸比率，而不代表广泛宏观自满。

学术证据也不支持把 VIX put/call 简化为散户情绪指标。一项关于 VIX 期权成交量的研究发现，VIX put/call 对后续 VIX 变化具有预测信息，并不只是非知情情绪；其中，较高的 VIX put/call 与后续 VIX 下行相关，且这一效应在高不确定性环境中更强。[^vix-paper] 反过来看，极低比率并不自动等于权益看多情绪，它也可能是对更高波动率或非对称风险的知情定价。

## 市场实际可能在定价什么

当前组合更像是**更高波动率底部之上的新均衡**，而不是“市场忘记了波动率均值回归”：

- **2024 年是低波动比较基准：** 按 FRED 日收盘计算，VIX 均值为 **15.55**。
- **2025 年重置了中枢：** VIX 均值升至 **18.93**，区间为 **13.47-52.33**。
- **2026 年仍处于偏高区间：** 截至 **2026-04-29**，年内均值为 **20.32**，尽管最新收盘为 **18.81**。
- **Cboe 自身 2026 展望指向约 19：** 其将持续的地缘风险、贸易紧张和美国劳动力市场转弱列为 VIX 稳态预测约 **19** 的原因。[^cboe-outlook]

所以，标题里的矛盾其实没有那么大。若即期 VIX 在 **18.81** 附近，而 2025 年均值为 **18.93**，市场并没有在定价完全回到 2024 年的平静。真正的风险是，投资者承认正常波动率中枢已经上移，但仍可能低估**已实现波动率分布的左尾冲击**。

## 对 A 股策略的映射

对 A 股而言，这是一个**全球风险溢价信号**，不是直接的国内盈利信号。VIX 复合体主要通过中资离岸资产 beta、美元流动性、风险偏好和估值久期影响 A 股。单独一个 **0.21** 不足以迫使组合全面防守，但它提醒我们不能线性外推顺畅的 risk-on 行情。

**风格立场：** 维持杠铃结构。一端持有高股息、现金流清晰、政策友好的大盘资产作为压舱石；另一端只在盈利催化真实且交易拥挤度可控的位置参与成长。

**优先压舱石：** 公用事业、电信运营商、高股息央国企、部分资本回报叙事稳定的银行和保险。这些方向在全球波动率风险溢价抬升时更有韧性，也能避开纯主题成长的估值久期问题。

**选择性成长：** 半导体、AI 基础设施、工业自动化、国防相关先进制造仍可参与，但必须重视买点纪律。关键是不要在 VIX 上行保护交易拥挤时追买最高 beta 个股。

**避免对外需 beta 过度自信：** 出口链、离岸收入占比较高的周期股，以及高久期主题，在 VIX 从 **18-19** 区间上行至 **25+**、美元走强和全球风险溢价扩张时更脆弱。

## 情景地图

| 情景 | 概率 | VIX / 期权流确认信号 | A 股配置含义 |
|---|---:|---|---|
| 基准：有对冲的 risk-on，而非自满 | **55%** | VIX 维持在 **17-22**；VIX 认沽/认购比率从 **0.21** 正常化，但即期 VIX 未明显上破；期货曲线有序。 | 杠铃配置。保留高股息/质量压舱石；只在回调和盈利确认时增配成长。 |
| risk-on 延续 | **25%** | VIX 跌破 **15**；偏 call 的 VIX 交易降温；权益市场宽度改善且没有美元压力。 | 选择性提高 beta：券商、消费 beta、AI 硬件、半导体和优质中小盘。 |
| 波动率冲击 | **20%** | VIX 上破 **25+**；VIX 期货曲线趋平或倒挂；VIX call 活跃度与 SPX/HK 走弱同步上升。 | 降低高 beta 和出口周期；提高高股息央国企、公用事业、电信、黄金相关对冲和内需防御。 |

## 下一步监控触发器

- **0.21** 是基于**成交量**还是**未平仓量**。
- 它是**全期限 VIX 期权比率**还是**单一期限 VIX 期货期权比率**。
- call 交易集中在**深度虚值 call**、**call spread**，还是**空头回补**。
- VIX 期货是否从温和 contango 走向趋平或 backwardation。
- 股指 put 需求、信用利差、USD/CNH、港股和 A 股离岸 beta 是否确认同一风险信息。

## 交接

建议下一位分析师：**derivatives-strategist [specialist]**。

理由：下一个未回答问题已经不是宽泛的 A 股配置，而是具体的期权市场问题：需要按成交量与未平仓量、期限、执行价、call spread 使用情况、VIX 期货曲线以及做市商 gamma/vanna 暴露来分解 **0.21** 的 VIX 认沽/认购读数。这个 specialist 判断将决定它是温和的尾部保护，还是波动率重定价前的凸性需求预警。

[^fred]: FRED, Federal Reserve Bank of St. Louis, "CBOE Volatility Index: VIX (VIXCLS)", 底层来源为 Cboe Global Markets；用于截至 2026-04-29 的日收盘计算：https://fred.stlouisfed.org/series/VIXCLS
[^cboe-vix]: Cboe, "VIX Volatility Products"，包括 VIX 期权、组合对冲、与 S&P 500 的反向关系、风险溢价收益和均值回归说明：https://www.cboe.com/tradable-products/vix
[^cboe-april]: Cboe, "Index Insights: April", 2025-05-07：https://www.cboe.com/insights/posts/index-insights-april
[^ycharts-call]: YCharts, "VIX Call Volume (I:VIXCV)"，底层来源为 Chicago Board Options Exchange / CBOE Daily Market Statistics，2026-04-28 截面：https://ycharts.com/indicators/cboe_vix_call_volume
[^ycharts-put]: YCharts, "VIX Put Volume (I:VIXPV)"，底层来源为 Chicago Board Options Exchange / CBOE Daily Market Statistics，2026-04-28 截面：https://ycharts.com/indicators/cboe_vix_put_volume
[^cboe-outlook]: Cboe 2026 Volatility Outlook slides via Interactive Brokers Campus, 2026-03-04；其中提到 2025 年 VIX 均值 **18.9**、区间 **13-52**，并给出 2026 年稳态预测约 **19**：https://www.interactivebrokers.com/campus/wp-content/uploads/sites/2/2026/02/2026-WB-Cboe-March-4-2026-1.pdf
[^barchart]: Barchart, "$VIX Options Data Summary"，其中将 Put/Call Vol Ratio 定义为所有到期期限的总 put/call 成交量比率：https://www.barchart.com/stocks/quotes/%24VIX/options-data
[^vix-paper]: Chen Gu, Xu Guo, Alexander Kurov, and Raluca Stan, "The Information Content of the VIX Options Trading Volume", 2021 年 7 月草稿：https://acfr.aut.ac.nz/__data/assets/pdf_file/0010/530785/The-Information-Content-of-the-VIX-Options-Trading-Volume-07152021-for-NZ-derivatives-conf.pdf

## Follow-up

- Analyst: derivatives-strategist
- Topic: VIX P/C 0.21 的期权流结构分解
- Question: 0.21 是成交量还是未平仓口径、全期限还是单一期限、直接买 call 还是 call spread/库存转移？这些结构是否预示 VIX 从 18-19 区间向 25+ 重定价？
