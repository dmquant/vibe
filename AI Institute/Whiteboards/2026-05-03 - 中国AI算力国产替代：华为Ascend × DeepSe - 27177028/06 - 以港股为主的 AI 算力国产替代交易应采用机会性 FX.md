---
source: ai-institute
resource_type: whiteboard-card
card_index: 6
status: completed
analyst_level: "宏观与策略"
---

# 以港股为主的 AI 算力国产替代交易应采用机会性 FX 对冲：HKD 大多不对冲，CNH 保留多数中国 beta，同时用规则化 USD/CNH 覆盖控制宏观回撤。

Analyst: **FX Strategist**
Status: **completed**
Stance: **synthesize**
Completed: **04/05/2026, 12:11:05**

## Links

- Whiteboard topic: [[中国AI算力国产替代：华为Ascend × DeepSeek V4的结构性拐点]]
- Card topic: [[以港股为主的 AI 算力国产替代交易应采用机会性 FX 对冲：HKD 大多不对冲，CNH 保留多数中国 beta，同时用规则化 USD CNH 覆盖控制宏观回撤。]]
- Analyst: [[FX Strategist]]
- Analyst level: [[宏观与策略]]

## Topic

以港股为主的 AI 算力国产替代交易应采用机会性 FX 对冲：HKD 大多不对冲，CNH 保留多数中国 beta，同时用规则化 USD/CNH 覆盖控制宏观回撤。

## Question

Investigate the topic "以港股为主的 AI 算力国产替代交易应采用机会性 FX 对冲：HKD 大多不对冲，CNH 保留多数中国 beta，同时用规则化 USD/CNH 覆盖控制宏观回撤。" and make the strongest evidence-based judgment you can.

## Summary

本卡综合前序港股执行结论：全球机构不应机械全额对冲，而应采用规则化机会性 FX 覆盖。HKD/USD 因 HK$7.75-7.85 LERS 区间和 HKMA US$430.8 billion 储备支撑，主要是融资/流动性风险，正常只对冲 0-25%。CNH/CNY 是中国盈利与政策 beta 的一部分，应保留 50-65% 不对冲，同时用 35-50% USD/CNH futures、NDF 或期权覆盖回撤；若 USD/CNH 突破 7.00、basis 扩大或 PBOC 中间价偏弱，则提高至 60-70%。HKD 股票建议 60-70% HKD 匹配融资、30-40% USD 备用流动性。

## Report

# 港股主导 AI 算力国产替代交易的 FX 覆盖方案

**分析师:** FX Strategist (fx-strategist)  
**日期:** 2026年5月4日  
**立场:** 综合  
**覆盖:** CNY/CNH · HKD/USD · 融资与对冲设计  
**核心标的:** 0981.HK, 1347.HK, 9988.HK/BABA, 0700.HK  
**工作区说明:** 本地 `session-brief.md` 与 cards 02-05 在工作区缺失；本报告使用用户提供的 session snapshot 重建上游背景。

## 核心判断

支持 card-05 将核心执行账本迁移到港股，但不赞成机械式全额对冲货币敞口。正确的 FX 设计是**规则化的机会性覆盖**：HKD/USD 敞口大多不对冲，因为 HKD 联系汇率把折算风险压得很窄；CNH/CNY 敞口保留一部分作为有意的中国 beta；当美元走强或政策压力压过股票主线时，再战术性提高 CNH 对冲。

对 USD 本位的全球机构，基准方案如下：

| 敞口 | 默认对冲比例 | 理由 |
|---|---:|---|
| 0981.HK, 1347.HK, 9988.HK, 0700.HK 的 HKD 折算敞口 | 0-25% | HKD 受 HK$7.75-7.85 联系汇率区间约束；当前主要风险是融资波动，而不是即期 FX 损失。 |
| 中国收入、利润率与政策资金流中内嵌的 CNH/CNY 经济 beta | 35-50% | 保留 50-65% 不对冲，让人民币升值仍然成为中国 beta 的一部分；同时用部分对冲保护回撤预算。 |
| HKD 资产的 HKD 融资 | 60-70% HKD 匹配融资，30-40% USD 备用流动性 | 1M HIBOR 为 2.44238%，低于 Fed 目标区间，但 HKD 流动性池可能突然重定价。 |
| BABA ADR 腿 | 使用 USD 融资；若 9988.HK 流动性更好再切换上市地 | 通过 BABA 执行时，不应制造不必要的 HKD 换汇。 |

## 为什么 HKD 不应机械对冲

HKD 不是普通自由浮动的亚洲货币腿。HKMA 的 LERS 在 HK$7.75 与 HK$7.85 每 USD 设有强方与弱方兑换保证，货币基础由美元资产支持，并通过自动利率调节机制维持汇率稳定。HKMA 每日数据还显示，最新页面中的基本利率为 4.00%，隔夜 HIBOR 为 2.78%，1个月 HIBOR 为 2.44238%，总结余为 HK$53,862 million。[HKMA LERS](https://www.hkma.gov.hk/eng/key-functions/money/linked-exchange-rate-system/how-does-the-lers-work/) [HKMA daily monetary statistics](https://www.hkma.gov.hk/eng/data-publications-and-research/data-and-statistics/daily-monetary-statistics/)

这意味着在联系汇率正常运行下，USD 投资者的 HKD 即期损失有明确边界。Bloomberg 2026年5月1日市场页面显示 USD/HKD 约 7.8347，从该位置到 7.85 的剩余贬值空间只有约 0.2%；即便从强方 7.75 回到弱方 7.85，也约为 1.3%。这低于 0981.HK、1347.HK、9988.HK 或 0700.HK 的普通单日波动。[Bloomberg Markets currencies](https://www.bloomberg.com/markets/currencies)

因此 HKD 的主要风险是**融资与流动性**，不是即期汇率。HKMA 在回应 2026年4月29日 FOMC 决议时指出，HKD 银行同业利率通常跟随 USD 利率，但短端也受本地 HKD 融资供需、季节性因素和资本市场活动影响。HKMA 最新外汇储备发布显示，2026年3月底官方外汇储备为 US$430.8 billion，超过流通货币五倍，约为 HKD M3 的 38%，因此组合成本不应围绕“联系汇率破裂对冲”来设计。[HKMA Fed response](https://www.hkma.gov.hk/eng/news-and-media/press-releases/2026/04/20260430-3/) [HKMA reserves](https://www.hkma.gov.hk/eng/news-and-media/press-releases/2026/04/20260409-3/)

## CNH/CNY 是主线的一部分，但不是免费期权

AI 算力国产替代交易本质上是中国盈利、政策与资本流交易。0981.HK 与 1347.HK 在港币上市，但产业经济与人民币相关。9988.HK/BABA 和 0700.HK 同时带有人民币收入、中国政策 beta 与全球风险溢价 beta。若全额对冲 CNH，就会剥离一个预期收益来源。

但人民币是有管理的货币，不是完全自由浮动。PBOC 授权 CFETS 每个工作日 9:15 公布人民币中间价，境内 USD/CNY 即期可在当日中间价上下 +/-2% 区间内交易。CFETS 说明，中间价由做市商报价加权形成，HKD 等交叉汇率也按规则计算。[PBOC trading-price notice](https://www.pbc.gov.cn/english/130721/2025080815062373819/index.html) [CFETS fixing mechanism](https://www.chinamoney.org.cn/english/cfxerw/)

利率环境仍不支持把整条货币腿裸露。Fed 在 2026年4月29日维持 3.50-3.75% 目标区间；中国 2026年4月20日 LPR 为 1年期 3.0%、5年期以上 3.5%。中美利差收窄降低但没有消除美元融资冲击的压力。[Federal Reserve FOMC](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm) [China Economic Net on LPR](https://www.ce.cn/xwzx/gnsz/gdxw/202604/t20260420_2916835.shtml)

CNH 流动性足以承载覆盖方案。HKMA 报告 2026年3月底香港人民币存款为 RMB1,035.2 billion，3月跨境贸易结算人民币汇款总额为 RMB1,290.0 billion。SAFE 报告 2026年3月中国外汇市场交易额为 RMB30.09 trillion，其中衍生品为 RMB18.91 trillion；Q1 合计为 RMB75.78 trillion。HKEX 的可交割 USD/CNH futures 于 2012 年推出，合约规模为 USD100,000，以人民币报价，期限最长可达 22 个月。[HKMA monetary statistics](https://www.hkma.gov.hk/eng/news-and-media/press-releases/2026/04/20260430-10/) [SAFE FX transactions](https://www.safe.gov.cn/en/2026/0424/2411.html) [HKEX USD/CNH futures](https://www.hkex.com.hk/Products/Listed-Derivatives/Foreign-Exchange/USD-CNH-Futures?sc_lang=en)

## 建议操作规则

1. **HKD 股票用 HKD 匹配融资，但要设上限。** 只要 1M HIBOR 相对 USD 融资仍低至少 75 bp，就用 HKD 覆盖 60-70% 的港股现金股票敞口。保留 30-40% USD 备用额度或未质押现金，因为总结余收缩时 HKD 融资利率可能跳升。

2. **不要机械对冲 HKD。** 正常环境下 HKD 折算对冲维持 0-25%。只有当 USD/HKD 走强到 7.75-7.78，且组合有严格月度 USD NAV 回撤限制时，才把对冲提高到 25-40%。当 USD/HKD 位于 7.83-7.85 附近时，对冲 HKD 的性价比很差，因为剩余即期下行空间有限。

3. **把 CNH 作为部分中国 beta 保留。** 默认 CNH/CNY 对冲应覆盖估算人民币经济敞口的 35-50%，保留 50-65% 不对冲。专门的中国 beta mandate 可用 25-35% 对冲；有硬性 USD 波动率约束的全球多资产 mandate 应用 50-60%。

4. **只有宏观压力压过股票主线时才增加 CNH 保护。** 若 USD/CNH 持续突破 7.00，CNH-CNY basis 超过 300-400 pips 并持续五个交易日以上，或 PBOC 中间价显示对更快贬值的容忍度提高，则把 CNH 对冲升至 60-70%。若 USD/CNH 跌破 6.80，同时南向/外资流入改善且 HSTECH 广度增强，则把对冲降回 25-35%。

5. **把上市地选择与 FX 对冲分开。** 如果 9988.HK 的流动性和融券条件更好，就持有港股线并单独对冲 CNH。如果 USD 流动性更好或 mandate 只能持有美股，就用 BABA 并避免不必要的 HKD 转换。上市地决策应由执行深度、融券、税务和结算决定，而不是把 HKD 误判为独立宏观押注。

## 压力测试

| 场景 | FX 变动 | 组合动作 | 解读 |
|---|---:|---|---|
| 中国 beta 有效 | CNH 对 USD 升值 3-5%；HKD 稳定或靠近强方 | CNH 对冲仅保留 25-35%；不对冲 HKD | 未对冲人民币敞口贡献股票主线收益。 |
| 美元冲击 | CNH 贬值 5%；USD/HKD 接近 7.85；HIBOR +100 bp | CNH 对冲升至 60-70%；缩短 HKD 融资期限 | FX 覆盖部分抵消股票回撤，但不放弃港股标的。 |
| HK 融资挤压 | HKD 即期稳定但总结余收缩 | 降低 HKD 杠杆；更多使用现金持仓 | 将其视为流动性风险，而非联系汇率破裂风险。 |
| 政策降风险 | PBOC 中间价偏弱且 Treasury 表态升温 | CNH 对冲升至 60%，HKD 保持不对冲 | 人民币政策风险比 HKD 折算更重要。 |

## 与前序卡片的衔接

本卡综合 cards 04-05，而不是推翻它们。如果交易已经从 A 股单票稀缺迁移到港股执行账本，FX 覆盖应让这一迁移更耐久：HKD 主要应被视为 USD 现金市场管道；CNH 则应被视为带有回撤护栏的中国 beta。

对当前任务问题的回答是：**机会性对冲，而不是机械对冲，也不是完整保留全部 FX beta。** HKD 大多敞开；基准情形下保留多数 CNH 敞口；当宏观信号变化时，用 USD/CNH futures、NDF 或期权调整人民币对冲比例。

## 下一步交接

**建议下一位分析师:** derivatives-strategist [specialist]  
**后续主题:** 港股 AI 算力国产替代组合的 CNH 对冲执行  
**后续问题:** 对 0981.HK、1347.HK、9988.HK/BABA 和 0700.HK 组合而言，如何使用 HKEX futures、NDF 与期权构建最干净的 3-6 个月 USD/CNH 覆盖？在不同 CNH skew 与波动率 regime 下，对冲比例应如何调整？

## Follow-up

- Analyst: derivatives-strategist
- Topic: 港股 AI 算力国产替代组合的 CNH 对冲执行
- Question: 对 0981.HK、1347.HK、9988.HK/BABA 和 0700.HK 组合而言，如何使用 HKEX futures、NDF 与期权构建最干净的 3-6 个月 USD/CNH 覆盖？在不同 CNH skew 与波动率 regime 下，对冲比例应如何调整？
