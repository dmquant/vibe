---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "固收与衍生品"
---

# VIX P/C 0.21 是成交量层面的凸性保护信号，而不是未平仓库存或 VIX 25+ 中枢重定价的充分证据。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **stress-test**
Completed: **01/05/2026, 09:35:37**

## Links

- Whiteboard topic: [[VIX P C 0.21：极致贪婪还是新常态？]]
- Card topic: [[VIX P C 0.21 是成交量层面的凸性保护信号，而不是未平仓库存或 VIX 25 中枢重定价的充分证据。]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

VIX P/C 0.21 是成交量层面的凸性保护信号，而不是未平仓库存或 VIX 25+ 中枢重定价的充分证据。

## Question

Investigate the topic "VIX P/C 0.21 是成交量层面的凸性保护信号，而不是未平仓库存或 VIX 25+ 中枢重定价的充分证据。" and make the strongest evidence-based judgment you can.

## Summary

本卡压力测试了 VIX P/C 0.21 的结构含义：它更像单日成交量口径，而不是未平仓口径。2026-04-29 Cboe/YCharts 为 0.18，OptionsAnalysisSuite 显示 call 493.2K、put 92.5K、P/C 0.19；但 AlphaQuery 60-Day OI P/C 为 0.4057，2026-04-30 Cboe 延迟全链汇总 OI P/C 为 0.4026。Apr 30 期权流还显示 Jul 60C/100C、Jun 40C/50C、May 23.5C/25C 等疑似 spread/换仓簇。结论：这是右尾凸性需求升温，不足以单独证明 VIX 已向 25+ 中枢重定价。

## Report

# VIX P/C 0.21：期权流结构分解

**分析师：** derivatives-strategist  
**本卡立场：** stress-test  
**工作区说明：** 当前 checkout 中未找到 `whiteboard/92a514da-5156-4cff-a082-d04d58cac53c/session-brief.md`、`analyst-catalog.json` 以及 card-01 文件。本报告根据提示中的快照重建上张卡的结论，并在其基础上继续推进。

## 核心判断

VIX 认沽/认购比率接近 `0.21`，最应被理解为**单日成交量**信号，而不是未平仓口径。与该观察日期最接近的官方/市场数据是：YCharts/Cboe 在 2026-04-29 给出的 VIX Put/Call Ratio 为 `0.18`；另一份 2026-04-29 快照显示 call 成交 `493.2K`、put 成交 `92.5K`，P/C 为 `0.19`。这确认当天 call 成交显著占优，但不等于整个 VIX 期权仓位按股票方向意义上达到每 1 张 put 对应 4.8 张 call。

本卡的压力测试结论是：**该流向支持“VIX 上行凸性需求升温”，但不足以单独证明 VIX 已从 18-19 区间向 25+ 重新定价为基准情形。** 未平仓 P/C 明显没有那么极端，2026-04-29 的 VIX 期货曲线从 2026 年 5 月到 2027 年 1 月大多落在 `20.2515-23.05`，而 2026-04-30 的 Cboe 延迟链路数据显示全链成交量 P/C 已回升到 `0.4347`。市场在为右尾分布付费，但还没有把 25+ 当成中枢价格。

## `0.21` 到底是什么口径

| 问题 | 结论 | 含义 |
| --- | --- | --- |
| 成交量还是未平仓？ | 成交量。YCharts 显示 2026-04-29 的 VIX Put/Call Ratio 为 `0.18`，来源为 Cboe Daily Market Statistics；OptionsAnalysisSuite 显示同日 call 成交 `493.2K`、put 成交 `92.5K`、总量 `585.7K`、P/C `0.19`。 | 该指标衡量的是当天换手，而不是存量仓位。 |
| 全期限还是单一期限？ | Cboe/YCharts 的日度序列应理解为 VIX 日度 put/call 比率；2026-04-29 的全量成交估计低于 AlphaQuery `60-Day` 成交量 P/C `0.2586`。 | 极低的 headline 很可能包含较长期限 call 成交流；短端/60 天内仍偏 call，但没有 headline 那么极端。 |
| 未平仓是否确认？ | 不确认。AlphaQuery 的 2026-04-29 `60-Day` 未平仓 P/C 为 `0.4057`；我们汇总 2026-04-30 Cboe 延迟全链快照得到未平仓 P/C `0.4026`。 | VIX 期权存量仍然偏 call，但远没有 `0.21` 那么极端。 |
| 是直接买 call，还是 call spread/换仓？ | 公开日度成交无法识别主动买卖方向，也无法识别开仓/平仓。2026-04-30 链上同期限、同日成交簇更像价差或换仓：Jul 22 `60C` 成交 `40,336`、`100C` 成交 `33,785`；May 19 `23.5C` `20,940`、`25C` `16,830`；Jun 17 `40C` `13,349`、`50C` `12,791`。 | 应把 headline 视为凸性需求，而不是纯粹的裸买 call 证据。 |

## 期权流拆解

**1. 低 P/C 在成交量口径上是真的，但时间稳定性不足。**  
YCharts 显示 2026-04-29 为 `0.18`，但此前序列波动很大：Apr 28 `0.60`、Apr 27 `0.61`、Apr 24 `0.42`、Apr 23 `0.54`、Apr 22 `0.66`、Apr 21 `0.42`、Apr 20 `0.84`、Apr 17 `0.35`、Apr 16 `0.26`、Apr 14 `0.29`。因此，`0.18-0.21` 是一个很强的单日 call 成交倾斜，但不能单独证明已经进入持续数周的新制度。

**2. 2026-04-29 的全量成交 call 需求强于短窗口口径。**  
OptionsAnalysisSuite 的 2026-04-29 快照显示 call `493.2K`、put `92.5K`，P/C 为 `0.19`。AlphaQuery 的 2026-04-29 `60-Day` 期权统计页显示成交量 P/C `0.2586`。`0.19` 与 `0.2586` 的差异说明，较长期限或全链成交使 headline 比 60 天内子集更偏 call。

**3. 未平仓结构远没有日度成交那么“亢奋”。**  
AlphaQuery 的 2026-04-29 `60-Day` 未平仓 P/C 为 `0.4057`；2026-04-30 Cboe 延迟全链快照汇总得到 call OI `9,150,489`、put OI `3,684,436`、OI P/C `0.4026`。这仍说明 VIX 期权库存偏 call，这对波动率对冲产品并不异常，但库存比率大约是 headline 成交量比率的两倍。

**4. 2026-04-30 的后续数据更均衡，也更像价差/换仓。**  
我们汇总 2026-04-30 Cboe 延迟链路，得到 call 成交 `423,935`、put 成交 `184,282`、全链成交量 P/C `0.4347`、总成交 `608,217`。最大期限桶如下：

| 到期日 | Call 成交 | Put 成交 | 成交 P/C | Call OI | Put OI | OI P/C | 解读 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 2026-05-19 | `176,673` | `128,356` | `0.727` | `3,756,404` | `1,849,379` | `0.492` | 近月月度合约双边都活跃；Apr 29 之后 put 成交显著抬升。 |
| 2026-06-17 | `98,956` | `48,245` | `0.488` | `2,595,887` | `912,628` | `0.352` | 上行波动率保护仍然活跃。 |
| 2026-07-22 | `112,771` | `1,746` | `0.015` | `883,183` | `433,297` | `0.491` | 极度偏 call，主要集中在深度上行执行价。 |
| 2026-08-19 | `4,343` | `1,123` | `0.259` | `984,239` | `228,070` | `0.232` | 存量 call OI 较大，但当日换手较轻。 |
| 2026-09-16 | `10,892` | `1,910` | `0.175` | `262,273` | `174,711` | `0.666` | 有一定 call 成交流，但库存结构没那么极端。 |

2026-04-30 的最大成交合约也反驳了“所有人都在裸买 call”的简单叙事：Jul 22 `60C` 成交 `40,336`、May 19 `16.5P` `38,422`、May 19 `17P` `35,779`、Jul 22 `100C` `33,785`、May 19 `18P` `22,259`、May 19 `23.5C` `20,940`、Jun 17 `22C` `19,673`、Jun 17 `17.5P` `18,062`。VIX 上行 call 与低执行价 VIX put 同时出现，更符合尾部对冲、call spread 构建、旧对冲获利了结以及库存转移的混合解释。

## 是否预示 VIX 25+？

还不能把它作为基准情形。需要看三个检验：

**期货曲线检验。** 2026-04-29 Cboe VX 结算价为：May `20.2515`、Jun `21.1753`、Jul `21.9442`、Aug `22.1941`、Sep `22.534`、Oct `22.925`、Nov `22.9354`、Dec `22.8498`、2027 Jan `23.05`。如果市场已经把 VIX 中枢重新定价到 25+，曲线通常也需要更接近该水平，尤其是前端事件窗口之外的期限。当前曲线定价了相对现货的风险溢价，但还没有定价 25+ 中枢。

**现货确认检验。** 上张卡把 VIX 置于 `18-19` 区间；YCharts 在 Apr 29 的 P/C 数据旁列示 VIX `18.81`。2026-04-30 Cboe 延迟快照显示 VIX current price `16.89`，意味着极端 call 成交量读数之后的即时跟随并不是现货波动率确认上跳，而是回落。

**结构检验。** Jul `60C/100C`、Jun `40C/50C`、May `23.5C/25C` 这类同期限成交簇，更像**凸性尾部覆盖**，而不是 VIX 应该结算在 25 以上的干净方向性押注。May `25C` 的存量 OI 很大（`365,161`），2026-04-30 成交 `16,830`，说明 25 确实是关键执行价；但相对 May VX 结算价 `20.2515`，它仍然是上行执行价，而不是中央远期价格。

## 交易含义

对组合风险台而言，正确解读既不是“极致贪婪”，也不是“恐慌必然发生”。更合适的表达是：

1. VIX call 需求已经高到需要被尊重，它是对冲流的信号。
2. `0.21` 的 headline 需要打折，因为它是单日成交量比率，且很可能包含多腿和换仓活动。
3. 未平仓 P/C 约 `0.40`、期货曲线到 2027 年 1 月仍低于 `23.05`，不支持“市场已经完成 VIX 25+ 重定价”的判断。
4. 如果宏观或权益市场催化剂出现，VIX `25+` 仍是合理压力情形，但仅凭期权成交无法证明。

落实到策略上，我会把含义表述为：**右尾波动率保险已经拥挤，但尚未耗尽。** 在 call 成交量尖峰之后追买 May/Jun VIX 裸 call，成本和路径依赖都较高。更合理的风险收益通常来自有限风险结构：围绕 `22-30` 的 call spread、受益于前端事件重定价但不过度支付深度价外翼的 calendar，或者如果真实风险敞口是权益回撤而非纯波动率凸性，则使用股指 put spread。

## 什么会改变判断

如果以下三点同时出现，我会把信号从“凸性需求”上调为“25+ 重定价风险”：

- VX 前两个月结算价升至 `23` 以上，且 Sep-Dec strip 抬升到 `24-25` 附近。
- VIX call OI 在 `25-35` 执行价成交尖峰之后继续增加，而不是只在 `40-100` 翼端轮动。
- SPX 下行 skew、VVIX 与宏观事件溢价同步上行，确认 VIX call flow 不是单纯库存腾挪。

在这些条件出现之前，更稳健的结论是：VIX P/C 接近 `0.21` 是**非对称对冲需求的警示灯**，不是独立预测。

## 资料来源

- YCharts，"VIX Put/Call Ratio (I:VIXPCR)"，2026-04-29 数值 `0.18`、来源 Cboe Daily Market Statistics、历史序列及 VIX `18.81`：https://ycharts.com/indicators/cboe_vix_putcall_ratio
- OptionsAnalysisSuite，"Cboe Volatility Index (VIX) Put/Call Volume History"，2026-04-29 快照，call 成交 `493.2K`、put 成交 `92.5K`、P/C `0.19`：https://www.optionsanalysissuite.com/index/vix/volume-history
- AlphaQuery，"VOLATILITY INDX (VIX) - Put-Call Ratio (Open Interest) (60-Day)"，2026-04-29 成交量 P/C `0.2586`、未平仓 P/C `0.4057`：https://www.alphaquery.com/stock/VIX/volatility-option-statistics/60-day/put-call-ratio-oi
- Cboe，"Cboe Options Exchange Symbol Data"，2026-04-30 更新及活跃 VIX 合约成交：https://www.cboe.com/us/options/market_statistics/symbol_data/?mkt=cone
- Cboe，`_VIX` 延迟报价快照，访问时间 2026-05-01 `01:27:51`，用于按到期日汇总 2026-04-30 链上成交与 OI：https://cdn.cboe.com/api/global/delayed_quotes/options/_VIX.json
- Cboe，"U.S. Futures Settlement Prices"，2026-04-29 VX 结算曲线：https://www.cboe.com/markets/us/futures/market-statistics/settlement/futures/daily
- Cboe，"VIX Options" 与 "VIX Options Product Specifications"，结算与到期机制：https://www.cboe.com/tradable-products/vix/vix-options 和 https://www.cboe.com/tradable-products/vix/vix-options/specifications
- Chen Gu, Xu Guo, Alexander Kurov, Raluca Stan，"The Information Content of the VIX Options Trading Volume"，2021 年 7 月，关于买方开仓流相较原始成交量的重要性：https://acfr.aut.ac.nz/__data/assets/pdf_file/0010/530785/The-Information-Content-of-the-VIX-Options-Trading-Volume-07152021-for-NZ-derivatives-conf.pdf

## Follow-up

- Analyst: global-macro
- Topic: VIX 25+ 的宏观催化剂与事件窗口验证
- Question: FOMC、增长数据、通胀与地缘事件是否足以把 VX 前端从 20-22 推向 23+，并进一步让 Sep-Dec strip 接近 24-25？
