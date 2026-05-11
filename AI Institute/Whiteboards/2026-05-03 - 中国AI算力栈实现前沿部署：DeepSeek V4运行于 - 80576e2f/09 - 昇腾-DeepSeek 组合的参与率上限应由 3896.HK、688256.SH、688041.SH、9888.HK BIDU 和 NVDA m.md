---
source: ai-institute
resource_type: whiteboard-card
card_index: 9
status: completed
analyst_level: "权益策略"
---

# 昇腾-DeepSeek 组合的参与率上限应由 3896.HK、688256.SH、688041.SH、9888.HK/BIDU 和 NVDA margin risk 决定，而不是由最深的 HK/US/A 股 megacap 流动性决定。

Analyst: **HK/US Strategist**
Status: **completed**
Stance: **stress-test**
Completed: **05/05/2026, 09:50:55**

## Links

- Whiteboard topic: [[中国AI算力栈实现前沿部署：DeepSeek V4运行于华为昇腾950PR]]
- Card topic: [[昇腾-DeepSeek 组合的参与率上限应由 3896.HK、688256.SH、688041.SH、9888.HK BIDU 和 NVDA margin risk 决定，而不是由最深的 HK US A 股 megacap 流动性决定。]]
- Analyst: [[HK US Strategist]]
- Analyst level: [[权益策略]]

## Topic

昇腾-DeepSeek 组合的参与率上限应由 3896.HK、688256.SH、688041.SH、9888.HK/BIDU 和 NVDA margin risk 决定，而不是由最深的 HK/US/A 股 megacap 流动性决定。

## Question

Investigate the topic "昇腾-DeepSeek 组合的参与率上限应由 3896.HK、688256.SH、688041.SH、9888.HK/BIDU 和 NVDA margin risk 决定，而不是由最深的 HK/US/A 股 megacap 流动性决定。" and make the strongest evidence-based judgment you can.

## Summary

本卡对 Card 08 的执行瀑布做逐名压力测试。结论是：系统性 Stock Connect 额度不是 USD 100M 组合的一阶约束；最先使参与率上限失效的是 3896.HK/KC 的 borrow 与竞价深度、688256.SH 和 688041.SH 的北向 short 限制与估值拥挤、9888.HK/BIDU 的跨时区 hedge 失同步，以及 NVDA 的 event-gap 和 prime-broker margin 风险。700.HK、9988.HK、601138.SH 与 300308.SZ 应作为筹现金与降 beta 的流动性工具，而不是被迫后置处理。

## Report

# HK Connect、ADR 与 NVDA 腿的逐名执行监控

**分析师：** 港美股策略师 | HK Connect、ADR、美国科技板块  
**日期：** 2026年5月4日  
**立场：** stress-test — 主线仍可交易，但参与率上限必须由最弱的 borrow 与竞价深度标的决定，而不是由组合层面的 ADV 决定  
**卡片：** 9 / 10 | Board ID: 80576e2f-bc7f-4d1d-be1e-59d0a2703b4a

---

## 核心判断

我对 Card 08 做压力测试，而不是否定其执行瀑布。Card 08 的方向正确，但参与率上限最先会在几个窄口失效：

1. **Kingsoft Cloud 3896.HK / KC** 是 HK 腿中最先失效的标的：它同时具备 reportable short 拥挤、小市值高 beta、borrow 不确定和竞价深度脆弱四个问题。压力环境下应把上限降到**实时成交量的 1%**，并且**不依赖收盘竞价**。
2. **Cambricon 688256.SH 与 Hygon 688041.SH** 是 A 股腿中最先失效的标的：问题不是 Stock Connect 日度额度太小，而是科创板/半导体拥挤、北向 covered short 限制、20% 日涨跌幅限制和可用 borrow 薄弱。压力上限：**实时成交量的 1-2%**。
3. **Baidu 9888.HK / BIDU** 是最先失效的跨上市配对：港股线的 reportable short 比 Tencent 或 Alibaba 更高，而 ADR hedge 会在香港休市时跳价。配对仍可保留，但不能把 BIDU 当作无限额的当日 hedge。
4. **NVDA** 当前并不因显示流动性或 borrow 失效。它失效于事件跳空和融资机制：正常行情下 USD 15M 的 NVDA 仓位可成交，但如果触发条件是 +45% 政策挤压并伴随 prime-broker margin 加码，ADV 计算就失去意义。Card 07 的 **USD 4.0M 单名挤压亏损上限**仍是硬约束。
5. **Tencent 700.HK、Alibaba 9988.HK、FII 601138.SH 与 Zhongji Innolight 300308.SZ** 是流动性来源，不是最先堵住的瓶颈。压力中应先用它们筹现金，再处理 3896.HK 或 A 股短仓。

一句话结论：**组合参与率上限应由 3896.HK、688256.SH、688041.SH、9888.HK/BIDU 和 NVDA margin risk 决定，而不是由 700.HK、9988.HK、601138.SH、300308.SZ 或 SOXX 这些深度更好的工具决定。**

---

## 上游依赖说明

现场 workspace 缺失 `session-brief.md`、`card-08/` 和若干前序卡目录，尽管 session snapshot 中列出了它们。因此，本卡使用提示词中的 session snapshot 重建 Cards 02、04、05、06 与 08，并读取本地可用的 Card 03 与 Card 07 报告。本文件承接 Card 08 的执行瀑布：

| 上游输入 | 本卡使用的执行含义 |
|---|---|
| Card 03 | 离岸腿包括 Tencent、Alibaba、Baidu、Meituan、SMIC-H、NetEase 与 Kingsoft Cloud。 |
| Card 07 | NVDA 单名挤压亏损必须封顶在 USD 4.0M；未占用流动性应为 USD 12M。 |
| Card 08 snapshot | NAV -5%、-8%、-10%、-12% 的流动性瀑布；危机成交成本预算 220-300bp，450bp 为硬红线。 |

---

## 真正约束交易的市场结构规则

**Stock Connect 额度对本组合规模只是二阶约束。** HKEX 显示，北向每日额度为**沪股通 RMB 52B、深股通 RMB 52B**，南向每日额度为**沪港通下南向 RMB 42B、深港通下南向 RMB 42B**；额度按净买入计算并每日重置。[^hkex-quota] 对 USD 100M 组合而言，即使一次再平衡 USD 15M，也不构成系统性额度问题。真正的问题是所有资金都要同一批 AI 标的流动性时的单名深度。

**A 股外资持股阈值仍可能卡住买入。** Stock Connect 下，单一外资投资者不得超过 A 股公司总股本的 **10%**，全体外资不得超过 **30%**；当合计外资持股达到 **28%**，北向买单会暂停，直到降至 **26%** 以下。[^hkex-foreign] 这在本卡中主要是买入约束，不是强制卖出约束，但对拥挤的 AI 硬件股很重要。

**北向卖空空间窄且规则重。** 北向裸卖空被禁止；只有合资格的 Connect Securities 才可 short，订单必须标记，且受 tick rule 约束。[^hkex-nb-short] 对每只北向可卖空证券，short selling daily limit 为 HKSCC 持仓的 **1%**，任意连续 10 个 CSC 交易日的累计限制为 **5%**。[^hkex-nb-limits] 因此，危机中不能假设 A 股 short hedge 一定能扩张。

**香港卖空同样受 borrow 约束。** HKEX 要求 regulated short sale 必须是 covered short sale，只能用于 designated securities，并遵守 tick rule。[^hkex-hk-short] 实务上，“可卖空名单内”不等于“危机时一定有 borrow”。

---

## 逐名脆弱性表

| 标的 | 组合角色 | 流动性 / 拥挤度数据点 | 最先失效的约束 | 压力参与率上限 |
|---|---|---:|---|---:|
| **3896.HK / KC Kingsoft Cloud** | 云基础设施卫星多头；压力中可削减的 beta 来源 | StockAnalysis 显示 3896.HK 于 4月30日为 HKD 7.63，平均成交量 **91.13M**；统计页显示 **short ratio 4.80 days**。SFC/Webb 4月24日数据显示 reportable shorts 为 **173.38M shares**、**HKD 1.609B**、**3.826%** stake。[^kc][^sfc] | Borrow 与竞价深度。它按成交额看似有流动性，但 China cloud beta 卖压失序时深度会迅速消失。 | **实时成交量 1%；不依赖收盘竞价** |
| **688256.SH Cambricon** | A 股 AI 芯片期权敞口 | Marketlog 显示市值 **CNY 333.55B**、成交量 **17.88M**，并提示 **2026年5月8日 1:1 split**。[^cambricon] | 科创板拥挤、20% 涨跌幅限制、Connect short 限制、可用 borrow 薄。 | **实时成交量 1%；压力中不要通过 Connect 增加 short hedge** |
| **688041.SH Hygon** | 国产 CPU/GPU 替代敞口 | Trading Economics 显示价格 **CNY 253.00**、市值 **CNY 585.73B**、P/E **179.27**。[^hygon] | Borrow 可得性与拥挤估值回撤。 | **实时成交量 1-2%** |
| **9888.HK / BIDU Baidu** | 港股多头加 ADR hedge 配对 | SFC/Webb 4月24日：9888.HK reportable shorts **56.44M shares**、**HKD 6.852B**、**2.536%** stake。StockAnalysis 历史数据看，9888.HK 4月15日约 HKD 114.50，4月初日成交量约 **10-15M shares**。FinanceCharts 显示 BIDU 12个月平均成交量 **4.153M** shares。[^sfc][^bidu-hk][^bidu-adr] | 跨时区 hedge 滑点：港股先交易，ADR 后反应；borrow 与 ADR 流动性不对称。 | **港股：实时成交量 2%；ADR hedge：若未预先锁定 locate，每小时 USD 3-4M** |
| **981.HK SMIC-H** | 硬件代理与 AH 收敛交易 | SFC/Webb 4月24日：reportable shorts **54.02M shares**、**HKD 3.474B**、**0.674%** stake；公开报价页近期显示日成交量为数千万股。[^sfc][^smic] | 问题不是正常 ADV，而是半导体同步去风险与港股 short-sale tick rule。 | **实时成交量 2-3%；避免集中到 CAS** |
| **3690.HK Meituan** | AI 应用分散化；压力中的现金来源 | SFC/Webb 4月24日：reportable shorts **223.20M shares**、**HKD 19.307B**、**3.989%** stake；Roic AI 显示 **50.44M** 20日平均成交量。[^sfc][^meituan] | short base 拥挤，政策/新闻 beta 会使回补与买盘变得不平滑。 | **实时成交量 3%；若 bid/ask 翻倍则减半** |
| **700.HK Tencent** | 核心港股流动性来源 | SFC/Webb 4月24日：reportable shorts **51.89M shares**、**HKD 25.602B**，仅 **0.569%** stake；公开报价页显示成交深、价差紧。[^sfc][^tencent] | 不是最先失效标的；应用于筹现金。 | **实时成交量 5%；压力中 3%** |
| **9988.HK / BABA Alibaba** | 核心港股流动性来源；ADR parity 工具 | SFC/Webb 4月24日：reportable shorts **149.78M shares**、**HKD 19.740B**、**0.780%** stake；BABA ADR 流动性好，但若港股线可用，不需要作为主 hedge。[^sfc] | 不是最先失效标的；监控 ADR/HK 转换与隔夜跳价。 | **实时成交量 5%；压力中 3%** |
| **300308.SZ Zhongji Innolight** | A 股光模块赢家 | StockAnalysis 显示 4月15日成交量 **32.35M shares**，收盘约 **CNY 779.98**；高成交额使其成为最好的 A 股流动性来源之一。[^zhongji] | 价格限制与拥挤，而非普通成交量。 | **实时成交量 3-5%；若出现跌停风险降至 2%** |
| **601138.SH FII** | A 股服务器 / AI 制造流动性来源 | 公开数据显示价格约 **CNY 62.88**、市值超过 **CNY 1.1T**，报价数据中成交额接近 **CNY 8.58B**。[^fii] | 不是最先失效标的；用于降低 beta。 | **实时成交量 5%；压力中 3%** |
| **NVDA** | 美国 AI 算力空头 / 期权 alpha 腿 | NVDA 截至 2026年3月31日 short interest 为 **280.87M shares**、占 float **1.21%**、**1.51 days to cover**；5月4日 finance snapshot 显示价格约 USD 198。[^nvda-si] | 当前不是 borrow，而是事件跳空、options vol crush 与 prime-broker margin。 | **只在 USD 4.0M 挤压亏损预算内回补；不能只看 ADV** |
| **SOXX / SOX 工具** | 替代 hedge / 保险 | Nasdaq 1Q26 美国 equity options 成交量为 **1.150B contracts**，说明广义期权深度充足，但单名与 ETF bid/ask 在压力中仍会扩大。[^nasdaq-vol] | hedge 估值与 bid/ask，而不是完全不可得。 | **先定义 NVDA 风险，再作为替代 hedge** |

---

## 哪个约束最先使参与率上限失效？

**1. Borrow 最先失效：3896.HK、688256.SH、688041.SH，其次 BIDU。**  
如果组合需要 hedge 或削减中国云 / AI beta，3896.HK 是 HK 线中最弱的一环。它的 **4.80 days-to-cover** 与 **3.826%** reportable short stake 意味着增量 borrow 可能恰好在价格失序时消失。A 股方面，Stock Connect 的 formal short-sale ratio 足够紧，Cambricon 与 Hygon 应被视为 long-only liquidity，而不是可靠 hedge 工具。

**2. 竞价深度第二失效：3896.HK、9888.HK、981.HK。**  
香港收盘竞价对 Tencent 与 Alibaba 有用，但不应成为 3896.HK 或半导体冲击中 SMIC-H 的主要退出通道。Baidu 的问题还叠加了 HK/ADR 时区错位：香港可能先跳价，随后 BIDU 在美股盘前过度反应。

**3. 拥挤度第三失效：3690.HK、9888.HK、3896.HK、981.HK。**  
Meituan 的 reportable short stake 高于 Alibaba 与 Tencent；Baidu 的 short base 也明显比其他平台 megacap 更拥挤。这些标的仍可交易，但参与率上限应低于原始成交额显示的水平。

**4. Connect 额度最后失效。**  
RMB 52B 北向额度与 HKD/RMB 等值南向日度额度不是 USD 100M 组合的一阶问题。真正的 Connect 风险是个股 **28%** 合计外资持股触发买入暂停，以及北向 covered short 的操作限制，而不是系统额度耗尽。

**5. NVDA 是融资约束，不是成交量约束。**  
USD 15M 的 NVDA delta-equivalent short 相对于 NVDA 的 public float 和平均成交量很小。它危险只发生在跳空后被迫回补、期权凸性已经消失且 margin 上升时。因此，NVDA 的上限必须写成亏损和保证金预算，而不是 ADV 百分比。

---

## 对 Card 08 执行规则的修订

| 规则 | 落地方式 |
|---|---|
| **不要用 aggregate ADV 给全组合定尺寸。** | 危机参与率应由最弱的 live sleeve 决定：3896.HK 与 A 股半导体。 |
| **先锁 borrow，再等信号。** | BIDU、KC/3896-equivalent borrow 与任何 HK short hedge 需要 same-day locate confirmation。若 locate 不硬，改用 KWEB/SOXX/Nasdaq futures。 |
| **把 700.HK 与 9988.HK 当作现金阀门。** | NAV 到 -8% 时，先卖 Tencent/Alibaba 筹 USD 5-8M 流动性，不要强卖 3896.HK 或 Cambricon。 |
| **把 A 股 short 当作可选项，而不是保证项。** | 北向日度和 10日 covered-short 限制意味着 A 股 hedge 扩张可能被拒。应使用指数期货、ETF hedge 或离岸代理。 |
| **BIDU hedge 要小且分阶段。** | Long 9888.HK / short BIDU 仍有效，但 ADR short 只能用每小时 USD 3-4M 的 clip 扩张，并要求 borrow 已确认。 |
| **在 squeeze 前定义 NVDA 上行风险。** | 在线性 short 进入 +25% 至 +30% 压力区前，转为 capped-loss 结构；+45% 之后的回补是融资控制，不是 alpha 管理。 |

---

## 修订后的触发阶梯

| 触发 | Card 08 原动作 | 本卡逐名修订 |
|---|---|---|
| **NAV -5%** | 停止加风险并提高现金 | 冻结新的 3896.HK、688256.SH、688041.SH 与 BIDU short 订单，除非 borrow 已确认。 |
| **NAV -8%** | 通过高流动性工具降 gross USD 12-15M | 先用 700.HK、9988.HK、601138.SH、300308.SZ、KWEB 与 SOXX。不要把 3896.HK 或 Cambricon 当作第一现金来源。 |
| **NAV -10%** | 定义 NVDA short 风险 | 强制把剩余 NVDA short 转为 capped-loss exposure；不要等 borrow recall 或 margin notice。 |
| **NAV -12%** | 只做资本保护 | 除非能在实时成交量 1% 内 crossing，否则暂停 HK 小盘云 beta 交易。改为清理流动性更好的 megacap 与 ETF。 |

---

## 最先失效排序

| 排名 | Ticker | 失效原因 | 动作 |
|---:|---|---|---|
| 1 | **3896.HK / KC** | HK sleeve 中 borrow、short-ratio、beta 与竞价深度的综合脆弱性最高。 | 最高实时成交量 1%；不依赖 CAS；必须预先 borrow。 |
| 2 | **688256.SH** | 科创板 AI 芯片拥挤，叠加 Connect short 限制与涨跌幅风险。 | 视作 long-only；不要假设危机中能 short hedge。 |
| 3 | **688041.SH** | 国产芯片估值拥挤，可用 borrow 弱。 | 只能通过 cash equity 削减；用离岸半导体或指数工具 hedge。 |
| 4 | **9888.HK / BIDU** | 配对 hedge 会在 HK 与美股交易时段间失同步；HK short crowding 偏高。 | 分阶段加 ADR hedge；预先确认 borrow；港股参与率封顶 2%。 |
| 5 | **NVDA** | 流动性深，但跳空与 margin risk 覆盖 ADV 计算。 | 保持 USD 4.0M 挤压亏损上限；政策事件前定义风险。 |
| 6 | **981.HK** | AH 收敛交易可能变成半导体同步去风险；short-sale tick rule 重要。 | 实时成交量 2-3%；避免集中收盘竞价。 |
| 7 | **3690.HK** | short crowding 明显，但 turnover 好于 3896.HK。 | 仅在 Tencent/Alibaba 现金阀门之后使用；价差扩大时上限减半。 |
| 8 | **700.HK / 9988.HK / 601138.SH / 300308.SZ** | 组合中流动性最深的标的。 | 主要筹现金与降 beta 工具。 |

---

## 结论与交接

我支持昇腾-DeepSeek 跨市场主线，但对执行上限做压力测试。最先失效的不会是总量 Stock Connect 额度，而是 **3896.HK 的 borrow 与竞价深度、A 股半导体的卖空约束、Baidu HK/ADR hedge 失同步，以及 NVDA 的 margin-gap risk**。

最后一张卡应交回 primary analyst，而不是继续交给 reviewer。最佳交接对象是 **ashare-strategist [primary]**，将本卡的 A 股执行监控转化为北向 / A 股交易日历：哪些半导体与光模块标的是 buyable、sell-only、shortable 或在下一次指数调整、业绩窗口和北向持股更新附近存在涨跌幅脆弱性。

---

## 资料来源

[^hkex-quota]: HKEX, "Stock Connect Explained"，每日额度部分：北向沪股通与深股通各 RMB 52B，南向沪港通与深港通各 RMB 42B，额度每日重置并按净买入计算。https://www.hkex.com.hk/Mutual-Market/Connect-Hub/Stock-Connect?sc_lang=en
[^hkex-foreign]: HKEX Stock Connect FAQ，外资持股限制：单一投资者 10%，合计 30%，28% 暂停买入，26% 以下恢复。https://www.hkex.com.hk/-/media/HKEX-Market/Mutual-Market/Stock-Connect/Getting-Started/Information-Booklet-and-FAQ/FAQ/FAQ_En.pdf
[^hkex-nb-short]: HKEX Stock Connect FAQ，北向卖空规则：禁止裸卖空，仅合资格证券，订单需标记，适用 tick rule。https://www.hkex.com.hk/-/media/HKEX-Market/Mutual-Market/Stock-Connect/Getting-Started/Information-Booklet-and-FAQ/FAQ/FAQ_En.pdf
[^hkex-nb-limits]: HKEX Stock Connect FAQ，北向卖空比例限制：基于 HKSCC 持仓的每日 1% 与任意连续 10 个 CSC 交易日 5%。https://www.hkex.com.hk/-/media/HKEX-Market/Mutual-Market/Stock-Connect/Getting-Started/Information-Booklet-and-FAQ/FAQ/FAQ_En.pdf
[^hkex-hk-short]: HKEX, "Regulated Short Selling"，covered short sale、designated securities 与 tick-rule 要求。https://www.hkex.com.hk/Services/Trading/Securities/Overview/Regulated-Short-Selling?sc_lang=en
[^sfc]: Webb-site database，SFC aggregated reportable short positions as of Apr. 24, 2026，覆盖 700.HK、9988.HK、9888.HK、981.HK、3690.HK、3896.HK 与 9999.HK。https://webb-database.com/dbpub/shortdate.asp
[^kc]: StockAnalysis，Kingsoft Cloud 3896.HK overview 与 statistics 页面，包含价格、平均成交量与 short ratio。https://stockanalysis.com/quote/hkg/3896/ 与 https://stockanalysis.com/quote/hkg/3896/statistics/
[^cambricon]: Marketlog，Cambricon 688256 市值、成交量与拆股提示。https://www.marketlog.com/symbol/688256-xshg
[^hygon]: Trading Economics，Hygon Information Technology 688041 价格、市值与估值数据。https://zh.tradingeconomics.com/688041:ch
[^bidu-hk]: StockAnalysis，Baidu 9888.HK 历史价格与成交量表。https://stockanalysis.com/quote/hkg/9888/history/
[^bidu-adr]: FinanceCharts，BIDU 平均成交量。https://www.financecharts.com/stocks/BIDU/summary/volume-averages
[^smic]: SMIC 0981.HK 公开报价页显示近期日成交量为数千万股；拥挤度使用 SFC/Webb short-position data。https://www.stockmoo.com/stock/hkex-0981_14963314/
[^meituan]: Roic AI，Meituan 3690.HK statistics，20日平均成交量。https://www.roic.ai/quote/3690.HK/statistics
[^tencent]: Tencent 0700.HK 公开报价页与 SFC/Webb reportable short data。https://0700.hk/
[^zhongji]: StockAnalysis，Zhongji Innolight 300308.SZ 历史价格与成交量表。https://stockanalysis.com/quote/she/300308/history/
[^fii]: FII 601138.SH 公开报价与财务数据，包括近期价格、市值与成交额。https://stockanalysis.com/quote/sha/601138/revenue/ 与 https://www.futunn.com/en/stock/601138-SH/financial-statement
[^nvda-si]: ShortInterestHistory 与 MarketBeat，NVDA 截至 2026年3月31日 short interest：280.87M shares、1.21% of float、约 1.51 days to cover。https://www.shortinteresthistory.com/symbol/nvda/ 与 https://www.marketbeat.com/stocks/NASDAQ/NVDA/short-interest/
[^nasdaq-vol]: Nasdaq monthly volumes release，1Q26 美国 equity-options quarterly volume 为 1.150B contracts。https://ir.nasdaq.com/static-files/465d2157-c476-4546-a9f7-8d7ad0c9be77

## Follow-up

- Analyst: ashare-strategist
- Topic: 北向与 A 股 AI 硬件腿的交易日历、可卖空状态、涨跌幅脆弱性和外资持股阈值监控
- Question: 在 688256.SH、688041.SH、300308.SZ、601138.SH 等 A 股 AI 硬件标的中，哪些会在下一次指数调整、业绩窗口和北向持股更新附近转为 buyable、sell-only、shortable 或 price-limit vulnerable，从而需要提前调整 Card 08 的执行瀑布？
