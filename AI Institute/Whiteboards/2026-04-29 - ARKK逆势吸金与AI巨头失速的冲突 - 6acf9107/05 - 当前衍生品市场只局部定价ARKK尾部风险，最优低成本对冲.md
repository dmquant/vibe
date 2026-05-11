---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "固收与衍生品"
---

# 当前衍生品市场只局部定价ARKK尾部风险，最优低成本对冲是VIX 25/35 call spread为主、ARKK 70/60 put spread补基差、SKEW互换小仓位触发覆盖。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **stress-test**
Completed: **29/04/2026, 07:30:21**

## Links

- Whiteboard topic: [[ARKK逆势吸金与AI巨头失速的冲突]]
- Card topic: [[当前衍生品市场只局部定价ARKK尾部风险，最优低成本对冲是VIX 25 35 call spread为主、ARKK 70 60 put spread补基差、SKEW互换小仓位触发覆盖。]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

当前衍生品市场只局部定价ARKK尾部风险，最优低成本对冲是VIX 25/35 call spread为主、ARKK 70/60 put spread补基差、SKEW互换小仓位触发覆盖。

## Question

Investigate the topic "当前衍生品市场只局部定价ARKK尾部风险，最优低成本对冲是VIX 25/35 call spread为主、ARKK 70/60 put spread补基差、SKEW互换小仓位触发覆盖。" and make the strongest evidence-based judgment you can.

## Summary

本卡压力测试了VIX期权、SKEW与ARKK期权对应用端AI崩塌的尾部定价。结论是风险被局部识别但未被系统性定价：VIX期限结构仍在18-21附近且维持温和contango，SKEW从4月中旬156.93回落至约139.64，未稳定进入>150恐慌区；但VIX 25/35等尾部call和ARKK短端put成交显示保护需求已升温。推荐每100百万美元风险敞口配置约4,900组VIX 25/35 call spread、1,800组ARKK 70/60 put spread，并以小额long SKEW互换作条件凸性，总成本约56-62bp，严重情景覆盖约6.26百万美元。

## Report

# 卡片05 · 衍生品策略师研究报告

## 主题
VIX期权与SKEW指数对ARKK尾部风险的提前定价及对冲组合构建

## 立场
stress-test（压力测试）——支持卡片04关于“做市商Vega对冲反身性”是最危险放大器的判断，但对“市场是否已充分定价”给出更细的衍生品拆解：指数波动率没有完全定价，尾部期权局部定价，ARKK单名保护需求已明显升温。

## 核心判断
**当前VIX期限结构与SKEW指数尚未充分定价应用端AI崩塌的系统性尾部风险；最优低成本保护不是单买ARKK put，也不是押注SKEW互换，而是以VIX 25/35 call spread为主、ARKK 70/60 put spread补充基差风险，并仅把SKEW互换作为触发型小仓位凸性覆盖。**

---

## 一、市场是否已经定价尾部风险？

### 1.1 VIX期限结构：仍是“可买保险”的温和contango，不是危机前定价

Cboe页面显示，VIX现货约18附近，5月VIX期货约20，6月约21，曲线仍保持温和contango。若市场已经完整定价卡片04的严重情景，前端VIX不应停留在18-20区间，5月/6月期限结构也应更接近平坦或倒挂。

| 指标 | 当前读数 | 对尾部风险的含义 |
|---|---:|---|
| VIX现货 | 约18 | 仅反映正常偏高波动，不是清算状态 |
| 5月VIX期货 | 约20 | 前端有风险溢价，但未贴近VIX>28触发阈值 |
| 6月VIX期货 | 约21 | 中端保护有溢价，仍未反映系统性去杠杆 |
| 5月-现货价差 | 约+2点 | 说明市场仍愿意卖前端波动率，不像危机前倒挂 |

判断：VIX曲线对“普通宏观扰动”有定价，对“ARKK流动性踩踏传染至标普5.8% VaR冲击”的定价不足。

### 1.2 VIX期权曲面：尾部call拥挤，但call spread仍有性价比

ChartExchange的VIX 2026年5月19日到期期权链显示，25C、30C、35C等行权价的未平仓量非常高，其中25C与35C均超过35万张级别；同一链上25C最近价约0.83，35C约0.34，25/35 call spread净成本约0.49点。

这说明两个事实同时存在：

| 观察 | 解释 |
|---|---|
| 25-35区间call OI很大 | 市场知道VIX上行风险，保护需求集中在前端尾部 |
| 35C仍有可卖价值 | 通过卖出更高行权价可显著降低净保费 |
| 70C、95C、100C等极端行权价OI也很大 | 有彩票式灾难保护需求，但这部分更像低概率灾难票，不是主对冲 |
| 25/35 spread成本约0.49点 | 对冲VIX从25跳到34-35的反身性区间，成本仍低于直接买call |

判断：VIX期权曲面已经局部定价“VIX上冲”，但没有把卡片04的VIX>28触发链条完全反映到前端期货与SKEW中；用call spread而不是裸call，可以利用尾部call拥挤来补贴成本。

### 1.3 SKEW指数：从4月中旬高位回落，尾部保护没有进入全面恐慌

YCharts显示，Cboe SKEW指数在2026年4月13日曾升至156.93，4月27日回落至139.64。Cboe方法说明中，SKEW上升代表左尾风险上升；但当前139-141附近并未超过卡片04设定的150预警线。

| SKEW区间 | 含义 | 当前状态 |
|---|---|---|
| <135 | 尾部保护需求偏低 | 已高于该区间 |
| 135-150 | 有保护需求，但未恐慌 | 当前所在区间 |
| >150 | 左尾风险显著被重估 | 4月中旬触及，后回落 |
| >160 | 系统性左尾恐慌 | 尚未出现 |

判断：SKEW显示市场曾短暂买入尾部保护，但目前已经回落，说明“应用端AI崩塌”并未被稳定地计入SPX尾部风险。

### 1.4 ARKK期权：局部市场已转向防御，但不是系统性定价

TickerTools显示，ARKK期权截至2026年4月28日的30日IV为42.09%，IV Rank为23.42%，总未平仓量约56.0万张，未平仓put/call比为1.39；当日成交put/call比达到4.56，5月15日到期链的成交put/call比更高达25.63。

这组数据说明ARKK自身的下行保护需求已经显著升温，但30日IV Rank仍不高，意味着保护需求集中在短端与事件窗口，而不是把ARKK尾部风险完整扩散到全市场波动率曲面。

---

## 二、三类工具的对冲效率比较

以每100百万美元标普等价风险敞口为基准，严重情景需要覆盖约5.8百万美元损失。假设严重路径为：ARKK下跌15-18%，VIX冲至34-35，SKEW回到155-165。

| 工具 | 结构 | 估算成本 | 严重情景收益 | 优点 | 缺点 |
|---|---:|---:|---:|---|---|
| VIX call spread | 5月19日25/35 call spread | 约0.49点/张，即49美元/张 | VIX=34时约900美元/张，VIX>=35最高1000美元/张 | 成本最低、直接覆盖Vega反身性 | 与ARKK单基金崩塌存在基差风险 |
| ARKK put spread | 1个月70/60 put spread | 估算1.5-1.7美元/份 | ARKK<=60时最高1000美元/份 | 精准覆盖ARKK流动性踩踏 | 成本高于VIX spread，流动性和跳空滑点更差 |
| SKEW互换 | 3个月long SKEW，触发150以上支付 | OTC报价，实际成本和保证金不透明 | SKEW>150后才有效 | 覆盖SPX左尾重新定价 | 非线性弱、流动性差、难以精确抵消1日VaR |

结论：纯VIX call spread成本最低，但存在“ARKK跌、VIX未充分跳”的基差风险；纯ARKK put spread保护精准但保费更高；SKEW互换适合做信号与二阶凸性，不应承担主保护任务。

---

## 三、推荐组合：以低成本覆盖5.8%标普VaR冲击

### 3.1 基准组合（每100百万美元风险敞口）

| 模块 | 交易 | 张数/名义 | 估算成本 | 严重情景收益 |
|---|---|---:|---:|---:|
| 主保护 | 买入VIX 2026-05-19 25C，卖出35C | 4,900组 | 约240,100美元 | VIX=34时约4.41百万美元；VIX>=35时约4.90百万美元 |
| 基差保护 | 买入ARKK 1个月70P，卖出60P | 1,800组 | 约270,000-306,000美元 | ARKK=61时约1.62百万美元；ARKK<=60时约1.80百万美元 |
| 条件凸性 | 3个月long SKEW互换，150以上支付 | 15,000美元/点 | 约50,000-75,000美元预算 | SKEW=165时约225,000美元 |
| 合计 | VIX + ARKK + SKEW | - | 约560,000-621,000美元 | VIX=34、ARKK=61、SKEW=165时约6.26百万美元 |

该组合的总保费约为组合名义的56-62个基点，严重情景下预计覆盖5.8百万美元VaR冲击，并保留约0.4百万美元缓冲。

### 3.2 为什么不是纯VIX保护？

若只用VIX 25/35 call spread，在VIX=34时需要约6,450组才能覆盖5.8百万美元，保费约316,000美元，显著更便宜。但这个方案隐含一个强假设：ARKK崩塌会立刻把VIX推到34。如果危机先在ARKK及应用端AI中小盘内部扩散，而标普权重股短期未同步下跌，则VIX可能只到28-30，纯VIX方案只能覆盖约3.2百万美元，保护不足。

因此，推荐组合用ARKK put spread承担约25-30%的基差风险，用VIX spread承担约70-75%的系统性波动率风险。SKEW互换只做小仓位，因为它不适合做精确VaR对冲。

### 3.3 为什么不是纯ARKK put？

ARKK期权的put成交已经显著放大，短端put/call成交比很高；单买put容易买在拥挤处。用70/60 put spread而不是裸put，有三个好处：

1. 覆盖卡片03的6.8% Gamma翻转点和卡片04的严重情景下跌区间。
2. 卖出60P可回收高波动率保费，降低组合成本。
3. 若ARKK跌破60，风险已大概率传染到VIX，主保护应由VIX spread接力。

---

## 四、执行与风控触发器

| 信号 | 阈值 | 动作 |
|---|---:|---|
| ARKK单日跌幅 | >4.5% | 建立至少50%目标对冲 |
| ARKK相对现价跌幅 | 接近6.8% | 加满VIX 25/35 spread，因Gamma/Vega反身性重合 |
| VIX | >22且5月期货上行快于现货 | 增加VIX spread，不追买裸call |
| VIX | >28 | 保护进入盈利区，开始用30/40 spread滚动替代部分25/35 |
| SKEW | >150并连续2日 | 启用或加码SKEW互换；若SKEW回落至140以下则不加 |
| ARKK put/call成交比 | >5且IV Rank>50 | 避免追买ARKK裸put，优先用put spread |

执行建议：

- 分三档建仓：40%立即建立、30%在ARKK跌破6.8%触发点时加、30%在VIX突破22或SKEW重回150时加。
- VIX期权应以限价买入组合单，避免拆腿追价；25C与35C OI均很厚，适合做vertical spread。
- ARKK put spread要避免在开盘跳空后追买，优先在反弹或盘中IV回落时补。
- 若VIX已升至30以上，停止买入25/35，改用30/40或32.5/45以避免付出过高delta溢价。

---

## 五、对前序卡片的压力测试结论

我支持卡片04关于Vega对冲反身性是关键放大器的判断，但补充两点修正：

1. **市场并非完全忽视风险。** VIX 25-35区间call OI极高，ARKK短端put成交剧增，说明尾部保护需求已经在局部市场出现。
2. **市场仍未完整定价系统性传染。** VIX现货与期货仍在18-21附近，SKEW从4月中旬高位回落到约140，说明“应用端AI崩塌导致标普5.8% VaR冲击”尚未进入指数层面的稳定定价。

因此，本卡结论是：**尾部风险被局部识别，但没有被系统性定价；当前仍适合用VIX call spread为主的低成本凸性组合提前建仓。**

## 工作区完整性说明

本卡写作前已读取card-01至card-04报告与card-04元数据；工作区内未找到`session-brief.md`，因此使用提示中提供的Session Brief Snapshot补足共享简报信息。

## 资料来源

- Cboe，VIX Futures市场数据页：用于观察VIX现货与VIX期货期限结构。https://www.cboe.com/tradable-products/vix/vix-futures/
- ChartExchange，VIX 2026年5月19日期权链：用于估算25/35 call spread成本与未平仓量。https://chartexchange.com/symbol/index-vix/optionchain/?date=20260519
- YCharts，Cboe SKEW Index历史数据：用于判断SKEW是否处于尾部风险恐慌区。https://ycharts.com/indicators/skew_index
- Cboe，VIX方法文件：用于确认VIX以SPX/SPXW期权中间价计算，反映30天预期波动率。https://cdn.cboe.com/resources/indices/Volatility_Index_Methodology_Cboe_Volatility_Index.pdf
- Cboe，SKEW指数咨询文件：用于确认SKEW上升对应左尾风险上升的解释。https://cdn.cboe.com/api/global/us_indices/governance/Consultation-Regarding-Proposed-Changes-to-the-Cboe-SKEW-Index.pdf
- TickerTools，ARKK期权统计：用于观察ARKK 30日IV、put/call成交比与未平仓结构。https://tickertools.app/symbols/ARKK/options

## 交接建议

建议交由`tmt-analyst`继续：衍生品盘面显示“保险仍可买”，但最终触发需要应用端AI基本面催化。下一步应验证未来2-4周中，哪些AI应用公司财报、指引、客户流失或Capex回报不及预期最可能触发ARKK的6.8%下跌阈值。

## Follow-up

- Analyst: tmt-analyst
- Topic: 应用端AI基本面触发器与ARKK 6.8%下跌阈值验证
- Question: 未来2-4周哪些应用端AI公司财报、客户留存、Capex回报或收入指引最可能成为ARKK跌破6.8%Gamma/Vega反身性阈值的基本面催化剂？
