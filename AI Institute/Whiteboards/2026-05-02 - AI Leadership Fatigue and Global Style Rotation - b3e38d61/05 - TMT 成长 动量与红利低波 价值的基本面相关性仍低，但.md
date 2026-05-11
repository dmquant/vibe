---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "量化与技术"
---

# TMT 成长/动量与红利低波/价值的基本面相关性仍低，但资金流相关性正在上升；流动性冲击下红利端可能只降低跌幅而不能真正对冲 TMT。

Analyst: **Factor Analyst**
Status: **completed**
Stance: **synthesize**
Completed: **02/05/2026, 11:56:04**

## Links

- Whiteboard topic: [[AI Leadership Fatigue and Global Style Rotation]]
- Card topic: [[TMT 成长 动量与红利低波 价值的基本面相关性仍低，但资金流相关性正在上升；流动性冲击下红利端可能只降低跌幅而不能真正对冲 TMT。]]
- Analyst: [[Factor Analyst]]
- Analyst level: [[量化与技术]]

## Topic

TMT 成长/动量与红利低波/价值的基本面相关性仍低，但资金流相关性正在上升；流动性冲击下红利端可能只降低跌幅而不能真正对冲 TMT。

## Question

Investigate the topic "TMT 成长/动量与红利低波/价值的基本面相关性仍低，但资金流相关性正在上升；流动性冲击下红利端可能只降低跌幅而不能真正对冲 TMT。" and make the strongest evidence-based judgment you can.

## Summary

本卡支持“核心 TMT + 确定性股息 + 利率债/现金”杠铃，但两端并非无条件对冲。中证TMT 为 41.09 PE、0.82% 股息率、1年波动率约 29.54%；红利低波为 7.99 PE、4.90% 股息率、1年波动率约 12.00%。盈利相关性仍低，但资金流相关性上升：TMT 高成交且融资敏感，红利低波有 ETF/机构拥挤，2026 年 1 月成交约 RMB3.6 trillion 后保证金比例从 80% 上调至 100%。保留杠铃，但现金/利率债必须是真实 30% 风险仓位。

## Report

# Card 05 - 因子拥挤度与相关性压测

**主题：** AI Leadership Fatigue and Global Style Rotation  
**问题：** 在当前 A 股存量博弈环境下，TMT 的动量/成长因子与红利的低波/价值因子的相关性是否正在抬升？若发生流动性冲击，杠铃两端的防守性是否会因拥挤度过高而失效？  
**立场：** 综合判断，并进行因子风险压测  
**作者：** factor-analyst  
**日期：** 2026-05-02

---

## 1. 核心结论

我对前序杠铃逻辑做**综合判断**，但增加一个因子层面的风险提示。card-04 提出的 **35% 核心 TMT + 35% 确定性股息 + 30% 利率债/现金**结构仍然成立，但不应被理解成一个干净的双因子对冲。TMT 与红利低波的基本面驱动仍然不同，所以它们的**基本面相关性仍低**；真正抬升的是**资金与流动性相关性**：两端都已经成为 A 股稀缺性交易的拥挤表达，一端押注高成长 AI 基建，另一端押注高确定性现金分配。

我的判断如下：

| 问题 | 因子答案 |
|---|---|
| TMT 动量/成长与红利低波/价值的相关性是否在抬升？ | **资金流层面是，盈利层面暂时不是。** 平稳市场中两端仍能分散；但在去风险窗口中，两端对境内风险偏好、ETF/主动资金流与融资流动性的共同依赖会推高实际相关性。 |
| 杠铃是否已经失效？ | **没有。** 两端仍有明显差异：截至 2026 年 3 月 31 日中证指数单张，中证TMT 滚动市盈率 **41.09**、股息率 **0.82%**、1年年化波动率约 **29.54%**；中证红利低波动滚动市盈率 **7.99**、股息率 **4.90%**、1年年化波动率约 **12.00%**。[S1][S2] |
| 若发生流动性冲击，两端防守性会不会失效？ | **会部分失效。** TMT 大概率跌得更多，但若投资者卖出流动性好的赢家、ETF 赎回加速，或金融/能源央国企集中度从稳定器变成风险源，红利低波也可能不再对冲。 |
| 组合含义 | 保留杠铃，但把**利率债/现金视为真正分散器**，并加入相关性与拥挤度熔断线。没有 30% 利率债/现金的 70% 权益杠铃，风险显著高于表观。 |

---

## 2. 因子地图：两端并不对称

TMT 端是**动量/成长/成长质量**交易。红利端是**价值/低波/票息/分配质量**交易。估值和波动率看起来相反，但两端都在解决同一个 A 股问题：增量流动性稀缺，盈利确定性也稀缺。

| 因子维度 | TMT 动量/成长代理 | 红利低波/价值代理 | 解读 |
|---|---:|---:|---|
| 指数代理 | 中证TMT (`000998`) | 中证红利低波动 (`H30269`) | 作为杠铃两端的公开因子代理足够可用。 |
| 最新中证单张日期 | 2026-03-31 | 2026-03-31 | 同一披露日期。 |
| 1年收益率 | **34.05%** | **3.78%** | TMT 承担动量溢价；红利低波承担稳定性与票息。 |
| 3个月收益率 | **-3.86%** | **1.94%** | 催化剂后市场已经出现部分再平衡。 |
| 2025 年收益率 | **44.48%** | **0.44%** | TMT 前一年强势导致持仓疲劳。 |
| 滚动市盈率 | **41.09** | **7.99** | 估值差仍大，并非同一个同质因子。 |
| 股息率 | **0.82%** | **4.90%** | 票息差继续支撑红利端。 |
| 1年年化波动率 | **29.54%** | **12.00%** | 正常市场中低波仍能降低组合实现波动率。 |
| 行业集中度 | 信息技术 **74.6%**、通信服务 **25.4%** | 金融 **51.7%**，另有能源、原材料、工业、公用事业等 | 红利端价格波动更低，但有明显行业与政策集中度。 |

来源：中证指数单张。[S1][S2]

关键点是：**低估值加低波动，并不自动等于低拥挤。** 拥挤可以体现在持有人结构、ETF 规模、成交额、融资余额以及缺少自然卖盘。TMT 的拥挤主要来自追涨资金、融资盘与主动基金持仓；红利的拥挤主要来自 ETF、保险、养老金、银行理财和“稳定收益”配置。

---

## 3. 当前拥挤度证据

### TMT：通过价格动量与融资敏感流动性拥挤

中证TMT 已经不是早期交易。最新官方单张显示，其 1年涨幅 **34.05%**、2025 年涨幅 **44.48%**，滚动市盈率 **41.09**，股息率只有 **0.82%**。[S1] 理杏仁的第三方指数聚合数据还显示，2026 年初该指数仍保持很高活跃度：页面显示成交额 **RMB389.65 billion**，融资余额 **RMB364.51 billion**，截至 2026 年 1 月 22 日融资融券余额占市值比例为 **2.21%**。[S3]

这不是单纯“成长太贵”的问题，而是**流动性敏感度**问题。当 TMT 持仓依据是盈利兑现、资本开支能见度和政策相关性时，它可以承受整理；当持仓依据变成“最流动的 AI beta”时，该因子会对融资收紧和获利了结更脆弱。

### 红利低波：杠杆更低，但共识持有度上升

红利低波端在客观上仍更便宜。中证红利低波动截至 2026 年 3 月 31 日滚动市盈率 **7.99**、股息率 **4.90%**、1年年化波动率 **12.00%**。[S2] 这也是它仍应作为杠铃稳定器的原因。

但拥挤度正在上升。理杏仁 H30269 页面显示，A 股场内基金资产规模 **RMB41.61 billion**，总基金资产规模 **RMB46.12 billion**，前十大权重约 **24.93%**，成交额 **RMB30.48 billion**，融资余额 **RMB109.92 billion**，截至 2026 年 4 月 23 日融资融券余额占市值比例为 **0.49%**。[S4] 融资比例明显低于 TMT，这是好事；但 ETF 和机构配置通道已经足够大，赎回或再平衡资金流也会影响价格。

### 全市场信号：监管层已看到杠杆热度

更宽的市场也说明这是存量博弈市场，而不是无限增量流动性市场。2026 年 1 月 12 日，沪深两市成交额约 **RMB3.6 trillion**，创历史新高，超过此前 **RMB3.46 trillion** 的高点。[S5] 另一份市场报道将同日成交额列为 **RMB3.64 trillion**，并把上涨与 AI 应用和商业航天联系起来。[S6] 随后，上海、深圳、北京三家交易所在 CSRC 批准后，将融资买入最低保证金比例从 **80%** 提高到 **100%**。[S7]

这一顺序对因子风险很重要：当监管在成交和杠杆高峰后收紧融资条件时，拥挤风格即使盈利暴露不同，也可能通过**去杠杆渠道**相关起来。

---

## 4. 相关性是否正在抬升？

简洁答案是：**是，但必须区分相关性的类型。**

| 相关性层面 | 方向 | 证据 | 组合含义 |
|---|---|---|---|
| 盈利/基本面相关性 | 低，可能稳定 | TMT 依赖 AI capex、光模块、算力基建和半导体周期；红利低波依赖银行 NIM、能源现金流、公用事业、电信和 SOE 分红政策。 | 仍支持同时持有两端。 |
| 估值因子相关性 | 低到轻微负相关 | TMT 为 **41.09** PE、**0.82%** 股息率；红利低波为 **7.99** PE、**4.90%** 股息率。[S1][S2] | 杠铃仍是真实风格组合，不是伪装成两端的单一因子。 |
| 资金流相关性 | 上升 | TMT 有高成交和融资敏感度；红利低波有大规模 ETF/机构吸收；全市场成交与融资热度已经高到触发保证金比例上调。[S3][S4][S5][S7] | 当投资者需要现金时，两端可能一起下跌。 |
| 压力相关性 | 短窗口偏高 | 因子拥挤研究显示，拥挤策略在流动性冲击中容易跑输；价值与动量的波动溢出强度会在市场动荡期快速变化。[S8][S9][S10] | 若没有利率债/现金对冲，防守性可能正好在最需要时失效。 |

准确表述应是：**相关性在条件性上升，而非永久性上升。** 正常轮动中，红利低波仍能缓冲 TMT 回撤；但在流动性冲击中，两端都会变成由同一批资金持有的多头权益资产，相关性会跳升。

---

## 5. 流动性冲击压测

下表是情景估计，不是点位预测。目的在于测试 card-04 的配置，而不是预测下一次回撤。

| 情景 | 触发因素 | TMT 成长/动量反应 | 红利低波/价值反应 | 杠铃诊断 |
|---|---|---|---|---|
| 正常轮动 | TMT 盈利仍稳，但风险偏好降温 | 相对回撤 **-5% 至 -10%**；龙头强于概念尾部 | 依靠票息与低波，相对跑赢 **0% 至 +4%** | 杠铃有效，红利端能分散 TMT。 |
| 融资/流动性冲击 | 全市场融资余额在 **80% -> 100%** 保证金比例调整后回落；成交额从 1 月 **RMB3.6 trillion** 极值明显收缩 | 高 beta TMT 回撤 **-15% 至 -25%**；融资盘重的标的更弱 | 若 ETF 赎回和流动性赢家卖出占主导，回撤 **-6% 至 -10%** | 杠铃只部分有效，红利跌得更少但不再对冲。 |
| 汇率或利率冲击 | CNY 压力或利率波动引发风险预算削减 | 久期压缩导致 **-12% 至 -18%** | **-3% 至 -7%**，若银行受 NIM/信用担忧拖累则更差 | 红利有帮助，但仍需要利率债/现金。 |
| 政策宽松延续 | 流动性保持充裕且 AI capex 能见度改善 | TMT 反弹，质量龙头重新获得动量 | 红利落后但继续提供票息 | 杠铃有效，但上行弹性低于纯 TMT。 |

关键结论是：红利端**不是崩盘对冲**，而是低波动权益仓位。广义流动性收缩时，低波权益也会被卖，因为它们流动性好、有盈利、且被广泛持有。

---

## 6. 杠铃熔断线

card-04 已经提出四个宏观与行业触发器：`CNY/USD` 突破 **7.35**、社融-M2 低于 **-1.5%**、专项债化债占比超过 **60%**、光模块毛利率跌破 **28%**。我建议新增五个因子触发器：

| 因子触发器 | 预警阈值 | 动作 |
|---|---:|---|
| TMT-红利滚动相关性 | 20日实现相关性高于 **0.45**，且连续两周上行 | 将权益杠铃总仓位从 **70%** 降至 **55-60%**，增加利率债/现金。 |
| TMT 杠杆拥挤 | 中证TMT 融资余额/市值高于 **2.5%**，或全市场融资余额在保证金比例上调后仍接近/高于 **RMB2.7 trillion** | 优先减非核心 TMT 和高换手 AI beta。 |
| 红利 ETF 拥挤 | H30269 场内基金资产规模高于 **RMB50 billion**，同时指数成交额低于 **RMB20 billion** | 避免继续加最拥挤的红利 ETF；转向个股层面的 SOE 现金流质量与流动性筛选。 |
| 低波失效 | H30269 10日回撤超过 **5%**，或实现日波动率升至 **1.10%** 以上 | 把红利低波当作权益风险，而非防守资产；将部分红利仓位转入利率债/现金。 |
| 宽度恶化 | 中证TMT 与 H30269 同跌，且市场宽度连续五个交易日为负 | 暂停机械式逆向加仓，等待流动性稳定。 |

这些触发器刻意保持可执行。组合不应等到完整崩盘后，才发现两端权益已经变成同一个流动性交易。

---

## 7. 组合执行

我支持前序 **35% 核心 TMT + 35% 确定性股息 + 30% 利率债/现金**框架，但建议三点调整：

1. **把利率债/现金维持为真实 30% 风险仓位。** 不要用现金去加 TMT；若要加 TMT，应从投机 TMT 尾部或最拥挤的红利 ETF 中腾挪。
2. **收窄两端权益定义。** TMT 端保留订单验证的 AI 基建、国产算力、光模块、电力/冷却和高利用率 AIDC；红利端保留具备分红能力的央国企银行、电信、能源、水电、电网及其他自由现金流资产。
3. **避免隐性重叠。** 一些“防守”红利股和一些“成长”TMT 股共享央国资、大市值流动性和政策支持买盘。当相关性触发器启动时，应减少超大市值流动性热门股的重叠，而不是同时加两端。

杠铃仍有价值，因为它结合了盈利增长和现金分配。但它的防守属性应从**“TMT 对冲”**下调为**“TMT 波动缓冲器，除非流动性压力成为主导变量”**。

---

## 8. 交接建议

下一步问题不再是因子风险是否存在。它确实存在。下一步应判断拟议的 **70% 权益 / 30% 利率债-现金**杠铃，能否在真实的多日流动性冲击中不突破回撤或 VaR 约束。

我建议交给 **chief-risk [reviewer]**。现在调用 reviewer 是合适的，因为 cards 01-04 已经建立杠铃逻辑，而本卡提出了一个具体脆弱点：TMT 成长/动量与红利低波/价值之间的资金流相关性抬升。chief-risk 应压测同时发生 TMT 估值下修与红利低波赎回时的组合回撤、VaR、流动性折价和对冲规则。

---

## 9. 来源

- [S1] China Securities Index Co., "CSI TMT Industries Index (`000998`) Factsheet," March 31, 2026: https://oss-ch.csindex.com.cn/static/html/csindex/public/uploads/indices/detail/files/zh_CN/000998factsheet.pdf
- [S2] China Securities Index Co., "CSI Dividend Low Volatility Index (`H30269`) Factsheet," March 31, 2026: https://oss-ch.csindex.com.cn/static/html/csindex/public/uploads/indices/detail/files/zh_CN/H30269factsheet.pdf
- [S3] Lixinger, "CSI TMT (`000998`) index valuation, turnover and margin-financing indicators," accessed May 2, 2026: https://www.lixinger.com/equity/index/detail/sh/000998/998/exchange-traded-fund-shares-list
- [S4] Lixinger, "CSI Dividend Low Volatility (`H30269`) index valuation, fund assets, turnover and margin-financing indicators," accessed May 2, 2026: https://www.lixinger.com/equity/index/detail/csi/H30269/1730269/fund-list
- [S5] The Edge CEO Morning Brief / I3investor, "China Onshore Stock Turnover Jumps to a Record US$516 Bil," January 13, 2026: https://klse.i3investor.com/web/blog/detail/ceomorningbrief/2026-01-13-story-h500640957-China_Onshore_Stock_Turnover_Jumps_to_a_Record_US_516_Bil
- [S6] China Stock Info, "January 12, 2026 - China Stock Market Closing Review: Record Turnover of 3.64 Trillion," January 12, 2026: https://www.chinastockinfo.com/en/news/20260112_150454
- [S7] Shanghai Stock Exchange, "Shanghai, Shenzhen and Beijing Stock Exchanges Raise Minimum Margin Requirement for Leveraged Trading," January 15, 2026: https://english.sse.com.cn/news/newsrelease/c/c_20260115_10805262.shtml
- [S8] Volpati, Benzaquen, Eisler, Mastromatteo, Toth and Bouchaud, "Zooming In on Equity Factor Crowding," arXiv, January 2020: https://arxiv.org/abs/2001.04185
- [S9] Chan and Tan, "Crowding and Liquidity Shocks," SSRN, revised December 27, 2021: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3655131
- [S10] Grobys and Sapkota, "Another look at value and momentum: volatility spillovers," Review of Quantitative Finance and Accounting, 2020: https://link.springer.com/article/10.1007/s11156-020-00880-2
- [S11] PBOC, "Implementation Plan on Promoting the Entry of Medium to Long-Term Funds into the Market," January 22, 2025: https://www.pbc.gov.cn/en/3688110/3688172/5552468/2025092319411440391/index.html
- [S12] Card 04 supplied session snapshot, "Barbell portfolio risk budget and rebalancing triggers," local target path: whiteboard/b3e38d61-cba3-4708-88da-ae4689513d61/card-04/report.en.md

## Follow-up

- Analyst: chief-risk
- Topic: 杠铃组合尾部风险与流动性折价压测
- Question: 在 TMT 估值下修与红利低波 ETF 赎回同时发生的情景下，70% 权益 / 30% 利率债-现金杠铃会触发多大回撤、VaR 和流动性折价？应如何设定降仓与对冲规则？
