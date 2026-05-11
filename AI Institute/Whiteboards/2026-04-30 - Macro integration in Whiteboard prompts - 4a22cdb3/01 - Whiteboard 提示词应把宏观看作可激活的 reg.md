---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "宏观与策略"
---

# Whiteboard 提示词应把宏观看作可激活的 regime layer：在宏观会改变结论、排序、时点、风险或交接时强制启用，在低相关场景保持简洁。

Analyst: **Chief Economist**
Status: **completed**
Stance: **initial**
Completed: **30/04/2026, 03:05:54**

## Links

- Whiteboard topic: [[Macro integration in Whiteboard prompts]]
- Card topic: [[Whiteboard 提示词应把宏观看作可激活的 regime layer：在宏观会改变结论、排序、时点、风险或交接时强制启用，在低相关场景保持简洁。]]
- Analyst: [[Chief Economist]]
- Analyst level: [[宏观与策略]]

## Topic

Whiteboard 提示词应把宏观看作可激活的 regime layer：在宏观会改变结论、排序、时点、风险或交接时强制启用，在低相关场景保持简洁。

## Question

Investigate the topic "Whiteboard 提示词应把宏观看作可激活的 regime layer：在宏观会改变结论、排序、时点、风险或交接时强制启用，在低相关场景保持简洁。" and make the strongest evidence-based judgment you can.

## Summary

本卡片建立初始宏观判断：Whiteboard 提示词应纳入宏观，但应采用模块化 macro regime layer，而不是在每张卡片中强塞宏观叙事。该层应要求 macro_dependency、as_of_date、地区、增长和通胀 regime、政策倾向、流动性/信用、市场传导、情景触发条件和交接理由。结论是，宏观应作为决策环境和约束条件，用来区分结构性 alpha 与周期性 beta，并控制数据过期和角色污染风险。

## Report

# Whiteboard 提示词中的宏观集成

**角色：** 首席经济学家  
**卡片：** 1/8  
**立场：** 初始基准判断  
**截至日期：** 2026-04-30，Asia/Singapore  
**工作区说明：** 引用的实时工作区文件（`session-brief.md` 和 `analyst-catalog.json`）未在磁盘中找到，因此本卡片依据提示词快照重建起始简报。

## 核心判断

Whiteboard 提示词应当强制纳入宏观集成，但方式应是模块化，而不是要求每个回答都写一大段宏观叙事。最优设计是一个紧凑的宏观 regime layer：当研究问题对增长、通胀、政策利率、流动性、FX、信用、大宗商品、财政政策或地缘供给冲击有实质暴露时启用。该层必须要求时间戳、来源新鲜度、央行反应函数假设、情景区间和明确的交接触发条件。

我的核心判断是：**Whiteboard 提示词应把宏观看作决策环境和约束条件，而不是背景评论。** 如果一个提示词要求分析 AI、汽车、银行、地产、大宗商品或 A 股风格轮动，却不说明宏观环境，就容易把结构性 alpha 与周期性 beta 混在一起。反过来，如果每张卡片都强行写完整宏观短文，也会稀释专家研究，并放大数据过期风险。

## 为什么重要

1. **宏观是传导机制。** 增长、CPI、PMI、政策利率、信用、FX 和财政立场会改变贴现率、盈利修正、融资成本、行业领导力和跨资产风险偏好。它们不只是上下文。

2. **宏观事实衰减很快。** GDP 和 CPI 公布、央行会议、财政方案、制裁、关税、油价冲击和 PMI 发布，都可能在几天内改变一个市场主题的正确解读。任何使用宏观证据的 Whiteboard 提示词，都需要 `as_of_date`、来源层级和新鲜度检查。

3. **央行政策有规则性，但依赖状态。** Fed 的货币政策目标是最大就业和价格稳定 [2]。ECB 的策略围绕中期取向和对称的 2% 通胀目标 [3]。因此提示词应要求给出反应函数判断：什么数据会让央行降息、按兵不动或收紧？

4. **当前全球背景提高了情景分析价值。** IMF 2026 年 4 月 WEO 将全球经济描述为处在重大贸易扰动、政策不确定性和战争相关脆弱性之下 [4]。OECD 的研究也把贸易政策不确定性与商品贸易量走弱联系起来 [5]，BIS 则强调不确定性和碎片化下的宏观金融脆弱性 [6]。在这种环境中，区间情景比单点预测更稳健。

5. **提示工程证据支持显式结构。** OpenAI 的提示工程指南强调清晰指令、参考文本、拆分子任务、使用外部工具和系统化测试 [1]。对 Whiteboard 来说，宏观层正是这样的结构化子任务：它能减少隐含假设，并让下游卡片具备可比性。

## 建议的 Whiteboard 宏观层

宏观层应是可复用提示词模块，而不是自由发挥的段落。它要短到能放进每张宏观敏感卡片，但也要严格到足以约束分析纪律。

| 字段 | 必填内容 | 目的 |
|---|---|---|
| `macro_dependency` | `low`、`medium` 或 `high` | 避免在个体性主题中过度强调宏观，也避免在周期性主题中低估宏观。 |
| `as_of_date` | 日历日期和时区 | 防止过期宏观判断在卡片之间传递。 |
| `regions` | US、China、euro area、Japan、EM 或其他相关地区 | 避免全球宏观变成泛泛而谈的段落。 |
| `growth_regime` | 高于趋势、接近趋势、低于趋势、衰退、复苏或不确定 | 把 GDP/PMI/就业数据与盈利和风险偏好相连。 |
| `inflation_impulse` | 通胀回落、粘性通胀、再加速、供给冲击或不确定 | 把 CPI/PPI/工资/油价/FX 与政策和利润率相连。 |
| `policy_bias` | 宽松、观望、收紧、财政脉冲、监管脉冲或混合 | 把宏观数据转化为前瞻政策反应。 |
| `liquidity_credit` | 银行信用、影子信用、收益率曲线、利差、融资条件 | 捕捉政策利率之外的金融条件。 |
| `market_transmission` | 利率、FX、大宗商品、信用利差、盈利、估值、资金流 | 强制分析师说明宏观到资产价格的传导路径。 |
| `scenario_set` | 基准、上行情景、下行情景；各自带触发条件 | 避免只依赖单一脆弱预测。 |
| `handoff_trigger` | 下一位分析师及原因 | 推动白板进入下一个领域问题。 |

## 启用规则

当卡片涉及以下内容时，宏观集成应为 **high**：

- GDP、CPI、PPI、PMI、工资、失业、财政政策、央行、关税、制裁、能源冲击、FX、利率、信用利差、地产周期、银行、保险、大宗商品、工业、消费需求、出口或 A 股风格轮动。
- 任何短期盈利高度依赖销量、价格、融资成本、库存周期或海外需求的行业。
- 任何依赖贴现率敏感度、久期、流动性或风险偏好的建议。

当卡片涉及以下内容时，宏观集成应为 **medium**：

- AI、生物科技、半导体、机器人或空间经济等结构性主题；长期基本面占主导，但估值、capex、FX 和政策约束仍重要。
- 拥有重要海外收入、大宗商品投入成本或融资需求的公司或行业研究。

当卡片涉及以下内容时，宏观集成应为 **low**：

- 狭窄产品发布、专利扫描、纯技术实现工作，或市场周期依赖较低的个体公司事件。

low 并不等于没有宏观。它意味着除非分析师识别出宏观敏感渠道，否则一句话就足够。

## 必要提示词规则

1. **区分事实、预测和判断。** Whiteboard 卡片应分别标注官方数据、分析师预测和投资结论，以减少伪精确。

2. **所有宏观数据必须带时间戳。** 每个宏观判断都应包含发布日期或 `as_of_date`。没有日期的“近期”或“最新”是不合格表述。

3. **使用来源层级。** 在媒体摘要之前，优先使用官方统计机构、央行、IMF/OECD/BIS、交易所数据和公司公告。媒体可用于事件时间线，但不应作为宏观数字的唯一依据。

4. **说明央行反应函数。** 对 Fed，提示词应强制分析就业与通胀的权衡。对 ECB，应强制分析中期通胀和政策传导。对 PBOC，应强制分析增长、信用、FX 和金融稳定。

5. **使用情景而不是单点预测。** 至少包括基准、上行、下行，以及两个可观察触发条件，用来判断是否从一个情景切换到另一个情景。

6. **让宏观相关性可证伪。** 卡片应说明哪个指标会推翻宏观判断，例如 CPI 再加速、PMI 跌破 50、信用脉冲回落、油价冲击、信用利差走阔或央行沟通意外变化。

7. **控制交接质量。** 宏观敏感卡片不应交给 reviewer 或狭窄 specialist，除非已经识别出具体脆弱点。早期线程通常应从宏观交给 primary 策略、行业或大类资产配置分析师。

## 提示词模板

```text
Macro regime layer:
- macro_dependency: low | medium | high
- as_of_date: YYYY-MM-DD, time zone
- regions: [US / China / euro area / Japan / EM / other]
- growth_regime: [above trend / near trend / below trend / recession / recovery / uncertain]
- inflation_impulse: [disinflation / sticky / re-acceleration / supply shock / uncertain]
- policy_bias: [easing / hold / tightening / fiscal impulse / regulatory impulse / mixed]
- liquidity_credit: [bank credit / spreads / yield curve / funding / capital flows]
- market_transmission: [rates / FX / commodities / earnings / valuation / flows]
- scenario_set:
  - baseline:
  - upside trigger:
  - downside trigger:
- handoff_trigger: next analyst, role tag, and reason

Instruction:
Use macro only where it changes the conclusion, ranking, timing, risk, or handoff.
Separate facts, forecasts, and judgment. Cite source and release date for every macro number.
```

## 示例应用

对于 `tmt-analyst` 的 AI 基础设施卡片：

- `macro_dependency`：medium。
- 宏观渠道：利率影响长久期估值；电价和电网约束影响数据中心经济性；USD/CNY 影响进口芯片和海外收入折算；capex 周期影响云需求。
- 必要输出：不需要完整宏观短文，但需要两个利率/流动性敏感性情景，以及当电力瓶颈成为主导问题时交接给 `utilities-analyst` 的触发条件。

对于 `financials-analyst` 的银行 NIM 卡片：

- `macro_dependency`：high。
- 宏观渠道：政策利率、存款竞争、信贷需求、收益率曲线、地产信用质量和监管指引，直接决定净息差和资产质量。
- 必要输出：明确央行倾向、曲线情景、信用脉冲和下行压力测试。

对于 `consumer-analyst` 的零售需求卡片：

- `macro_dependency`：medium 到 high。
- 宏观渠道：工资增长、就业、CPI 篮子压力、居民信心、按揭负担和财政转移支付共同塑造消费。
- 必要输出：把结构性品牌优势与周期性居民购买力分开。

## 集成不当的风险

主要实施风险不是分析师忘记宏观，而是把宏观写成泛泛而谈的文字，却没有改变结论。这会制造严谨的错觉，但实际投资判断并未被宏观检验。

第二个风险是过期权威。围绕政策会议、关税公告、油价冲击或财政方案时，两周前的央行讲话或 PMI 发布都可能误导。Whiteboard 提示词应当比起简洁但有日期的判断，更严厉地惩罚没有日期的宏观判断。

第三个风险是角色污染。如果每位 specialist 都被要求充当宏观策略师，行业细节会下降。正确分工是：宏观定义 regime 和传导渠道；行业与策略分析师判断这些渠道是否改变排序、时点和风险。

## 证据基础

| 引用 | 来源 | 与本判断的关系 |
|---|---|---|
| [1] | OpenAI, "Prompt engineering", https://platform.openai.com/docs/guides/prompt-engineering | 支持把清晰指令、参考文本、任务拆分、工具使用和测试作为可复用宏观层的设计逻辑。 |
| [2] | Federal Reserve, "Principles for the Conduct of Monetary Policy", https://www.federalreserve.gov/monetarypolicy/principles-for-the-conduct-of-monetary-policy.htm | 支持把 Fed 双重使命嵌入 US 宏观提示字段。 |
| [3] | ECB, "The ECB's monetary policy strategy statement", https://www.ecb.europa.eu/mopo/strategy/strategy-review/ecb.strategyreview202506_strategy_statement.en.pdf | 支持把中期通胀目标和政策传导评估嵌入 euro area 提示词。 |
| [4] | IMF, "World Economic Outlook, April 2026: Global Economy in the Shadow of War", https://www.imf.org/-/media/files/publications/weo/2026/april/english/text.pdf | 支持在贸易扰动、政策不确定性和战争相关脆弱性下使用情景分析。 |
| [5] | OECD, "General assessment of the macroeconomic situation: Economic Outlook, Volume 2025 Issue 2", https://www.oecd.org/en/publications/2025/12/oecd-economic-outlook-volume-2025-issue-2_413f7d0a/full-report/general-assessment-of-the-macroeconomic-situation_981ac2bf.html | 支持把贸易政策不确定性视为可量化的增长和贸易量风险。 |
| [6] | BIS, "Annual Economic Report 2025: Sustaining stability amid uncertainty and fragmentation", https://www.bis.org/publ/arpdf/ar2025e1.htm | 支持把宏观金融脆弱性和碎片化风险纳入研究提示词。 |

## 结论

我支持把宏观集成进 Whiteboard 提示词，但必须采用带启用规则的结构化 regime layer。白板不应要求每位分析师都写完整宏观章节，而应要求每位分析师说明宏观是否重要、如何传导、哪些数据会改变判断，以及下一步应由哪位同事承接具体领域问题。

最佳下一步是交给 `chief-strategist [primary]`，把宏观 regime layer 转化为 A 股与跨市场策略提示词中的风格、行业和配置映射规则。

## Follow-up

- Analyst: chief-strategist
- Topic: 把宏观 regime layer 转化为策略提示词中的风格、行业和配置映射规则
- Question: 在 A 股与跨市场策略 Whiteboard 卡片中，哪些宏观字段应直接映射到成长/价值、周期/防御、金融/科技/消费/资源等配置倾向？
