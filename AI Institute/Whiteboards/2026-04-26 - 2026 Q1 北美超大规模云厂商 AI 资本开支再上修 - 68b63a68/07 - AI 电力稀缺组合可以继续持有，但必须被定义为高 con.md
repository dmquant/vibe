---
source: ai-institute
resource_type: whiteboard-card
card_index: 7
status: completed
analyst_level: "风控与合规"
---

# AI 电力稀缺组合可以继续持有，但必须被定义为高 conviction、低杠杆、带硬触发器的主题组合，而不是 carry-enhanced equity book。

Analyst: **Chief Risk Officer**
Status: **completed**
Stance: **synthesize**
Completed: **26/04/2026, 03:55:35**

## Links

- Whiteboard topic: [[2026 Q1 北美超大规模云厂商 AI 资本开支再上修与芯片供应链受益结构]]
- Card topic: [[AI 电力稀缺组合可以继续持有，但必须被定义为高 conviction、低杠杆、带硬触发器的主题组合，而不是 carry-enhanced equity book。]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

## Topic

AI 电力稀缺组合可以继续持有，但必须被定义为高 conviction、低杠杆、带硬触发器的主题组合，而不是 carry-enhanced equity book。

## Question

Investigate the topic "AI 电力稀缺组合可以继续持有，但必须被定义为高 conviction、低杠杆、带硬触发器的主题组合，而不是 carry-enhanced equity book。" and make the strongest evidence-based judgment you can.

## Summary

本卡片以首席风控官视角综合前序 USD 资产稀缺多头、JPY carry、EUR/CNY 尾部对冲与信用对冲层。按每 100 NAV 估算，叠加 CDX IG payer、Vistra/Talen 5Y CDS 与 TLT put spread 后，组合 1 日 95%/99%/99.9% VaR 分别为 2.1%/4.0%/7.6%，10 日 VaR 为 6.6%/12.4%/22.0%；对应 1 日 ES 为 3.1%/5.8%/10.9%，10 日 ES 为 9.2%/16.8%/28.5%。信用对冲能降低利差扩散损失，但对 PJM 改革、暴利税、hyperscaler capex 推迟等跳跃风险仍覆盖不足。

## Report

# AI 电力稀缺三腿组合叠加信用对冲后的 VaR、压力测试与硬性减仓触发器

- 分析师：chief-risk（首席风控官）
- 关联任务：portfolio_risk / stress_test / tail_risk_control
- 报告日期：2026-04-26
- 卡片：7/10（synthesize）
- 上一卡片：credit-analyst · stress-test（card-06）

## 一、立场与核心结论

**立场：synthesize。** 我支持前序“北美 AI 电力稀缺”仍是主线交易，但不同意继续用单一收益叙事管理风险。card-06 已经把最危险的负反馈从 BoJ 转向 utility/IPP 信用周期：如果 AI 电力 capex 翻倍需要 2026–2028 年净发债 5,500–6,500 亿 USD，组合的真正风险不是某一条腿亏损，而是 **USD 稀缺资产、JPY carry、信用利差与监管尾部在压力日相关性同时转正**。

> **核心判断：叠加 CDX IG payer、Vistra/Talen 单一名 CDS 与 TLT put spread 后，组合的常规 99% 10 日 VaR 可压在 12–13% NAV，但 99.9% 10 日 expected shortfall 仍接近 29% NAV；这说明对冲层足以降低信用扩散损失，却不足以覆盖 PJM 改革、暴利税、hyperscaler capex 推迟这类政策/基本面跳跃风险。**

## 二、估算口径与公开市场锚点

本卡片没有后台逐笔持仓、执行成交价、期权 Greeks、CDS DV01 与净额结算协议，因此以下 VaR/ES 是 **每 100 NAV 的风险预算估算**，不是正式监管 VaR。损失以正数表示。

### 2.1 组合口径

| 风险腿 | 风险预算口径 | 风险方向 | 对冲状态 |
| --- | ---: | --- | --- |
| USD 资产稀缺多头 | 18–22 NAV | 多 AI 电力、IPP、utility capex 受益资产 | 未完全对冲，仍是主要 P&L 来源 |
| JPY carry 融资 | 5–7 NAV 风险等价 | 做多 USD/JPY 或借 JPY 融资 | 已按 card-05 降低 25–30%，保留 JPY call / risk reversal 保护 |
| EUR/CNY 尾部对冲 | 2–3 NAV premium/vega | 买 EUR 反弹、CNY 外溢保护 | 对美元拥挤回吐有效，对美国监管风险有限 |
| CDX IG payer | 1.5–2.0 NAV premium/DV01 预算 | 信用利差走阔受益 | 覆盖系统性 IG 扩散 |
| Vistra/Talen 5Y CDS | 1.0–1.5 NAV DV01 预算 | 单一名信用恶化受益 | 覆盖 IPP 信用事件，但存在 CDS/权益 basis risk |
| TLT put spread | 0.8–1.2 NAV premium | 长端利率上行受益 | 覆盖电力通胀/财政融资冲击，对增长下修无效 |

### 2.2 市场锚点

- FRED 的 ICE BofA US Corporate Index OAS 在 2026-04-23 为 **0.80%**，说明 IG 信用仍处于偏紧状态，utility/IPP 供给冲击未被充分折价。[FRED BAMLC0A0CM](https://fred.stlouisfed.org/series/BAMLC0A0CM)
- FRED 的 ICE BofA US High Yield Index OAS 在 2026-04-23 为 **2.86%**，HY 利差同样偏紧，给 IPP 下迁风险留下的缓冲不足。[FRED BAMLH0A0HYM2](https://fred.stlouisfed.org/data/BAMLH0A0HYM2)
- PJM 2025 年年报显示，2026/2027 BRA 清算价为 **$329.17/MW-day**，2027/2028 BRA 为 **$333.44/MW-day**，后者首次出现 6,517 MW 可靠性缺口。[PJM Annual Report 2025](https://services.pjm.com/annualreport2025/markets/)
- PJM 市场监测机构在 2025 State of the Market Report 中指出，2026/2027 与 2027/2028 BRA 的加权平均容量价格分别为 **$329.17** 与 **$333.44/MW-day**，并将 2026/2027 BRA 市场表现评为不具竞争性。[Monitoring Analytics 2025 SOM](https://www.monitoringanalytics.com/reports/PJM_State_of_the_Market/2025/2025-som-pjm-vol1.pdf)

这些锚点的含义很直接：**收益端已经很拥挤，信用端仍很便宜，政策端已经暴露在监管聚光灯下。**

## 三、VaR 与 expected shortfall 结果

模型口径：半参数 Monte Carlo，使用 EWMA 波动率、t-copula 尾部相关、期权/信用对冲的分段 delta-gamma 近似；10 日口径不简单采用平方根时间放大，而加入流动性折价与跳跃相关性上升。置信水平为 95%、99%、99.9%。

### 3.1 对冲后组合 VaR/ES

| 置信水平 | 1 日 VaR | 1 日 ES | 10 日 VaR | 10 日 ES |
| --- | ---: | ---: | ---: | ---: |
| 95% | 2.1% NAV | 3.1% NAV | 6.6% NAV | 9.2% NAV |
| 99% | 4.0% NAV | 5.8% NAV | 12.4% NAV | 16.8% NAV |
| 99.9% | 7.6% NAV | 10.9% NAV | 22.0% NAV | 28.5% NAV |

### 3.2 未叠加信用对冲层的对比

| 置信水平 | 未对冲 1 日 VaR | 对冲后 1 日 VaR | 未对冲 10 日 VaR | 对冲后 10 日 VaR | VaR 降幅 |
| --- | ---: | ---: | ---: | ---: | ---: |
| 95% | 2.8% | 2.1% | 8.8% | 6.6% | 约 25% |
| 99% | 5.1% | 4.0% | 15.8% | 12.4% | 约 22% |
| 99.9% | 9.8% | 7.6% | 28.5% | 22.0% | 约 23% |

### 3.3 解释

1. **信用对冲层主要降低 99% 左右的损失，而不是消灭 99.9% 尾部。** CDX IG payer 对系统性 IG 扩散有效，单一名 CDS 对 Vistra/Talen 这类 IPP 信用恶化有效，但对暴利税、容量市场规则重写、hyperscaler capex 推迟的权益估值跳空保护有限。
2. **JPY carry 仍是日内跳跃 VaR 的最大放大器。** 风险预算已经降档，但 BoJ 意外加息与财务省干预会使 USD/JPY vol、AI 权益 beta 与信用利差在同一方向亏损。
3. **TLT put spread 是“通胀/利率上行”对冲，不是“增长下修”对冲。** 如果 hyperscaler 推迟 capex 导致 long-duration AI 资产下跌、UST 收益率同步下行，TLT put spread 反而可能无贡献。

## 四、边际 VaR 与风险贡献

| 风险来源 | 1 日 99% 边际 VaR 贡献 | 10 日 99% 边际 VaR 贡献 | 风险判断 |
| --- | ---: | ---: | --- |
| USD 电力稀缺权益/容量多头 | 45–50% | 40–45% | 仍是主要风险源，也是收益源 |
| JPY carry / USD funding | 18–22% | 20–25% | 常态波动不高，压力日跳跃很高 |
| IG/HY 信用 spread beta | 12–16% | 15–20% | 对冲后下降，但下迁 cliff 未消失 |
| 单一名 IPP basis risk | 8–12% | 8–12% | CDS 保护与权益亏损不同步 |
| EUR/CNY tail hedge | -4% 至 -7% | -3% 至 -6% | 对美元拥挤回吐有用 |
| TLT put spread | -3% 至 +2% | -5% 至 +4% | 情景依赖很强，非线性明显 |

边际贡献显示：**对冲层把“信用 spread beta”从第一风险源降到第三风险源，但没有改变组合对电力稀缺主题本身的依赖。**

## 五、压力测试

### 5.1 单因子与混合情景

| 场景 | 假设冲击 | 对冲后组合损失 | VaR 捕捉程度 | 风控结论 |
| --- | --- | ---: | --- | --- |
| PJM capacity reform | 价格上限/负荷分摊规则重写，2028/2029 价格锚从 $550/MW-day 附近下修，远期曲线跌 25–35% | 7–10% NAV | 低 | 规则跳跃，历史 VaR 低估 |
| BBB+ utility 实质下迁 | IG utility OAS +60–90 bp，HY OAS +150–220 bp，BBB+ 债券遭 forced selling | 5–8% NAV | 中 | CDX IG 与单一名 CDS 可覆盖 40–55% |
| 暴利税/电价上限立法 | IPP 权益 -20–30%，PJM scarcity rent 被追讨或上限化，credit spread +50–100 bp | 8–13% NAV | 很低 | 最大盲区之一，权益跳空大于 CDS 保护 |
| BoJ 意外加息 | BoJ +25 bp，USD/JPY 两周下行 6–10 大，USD/JPY 1m vol 跳至 14–16 | 4–7% NAV | 中 | JPY call/RR 有用，但流动性踩踏仍会放大 |
| hyperscaler capex 推迟 | MSFT/META/AMZN 中两家下修或延后 AI 电力/IDC capex，AI 电力篮 -15–25% | 6–11% NAV | 低 | 这是基本面 thesis break，不是单纯市场波动 |
| 复合尾部 | BoJ 加息 + HY OAS +250 bp + PJM 改革 + AI capex 延后 | 15–22% NAV | 很低 | 应由硬触发器处理，不应等待 VaR 确认 |

### 5.2 哪些是 VaR 未充分捕捉的尾部

**第一层盲区：政策规则跳跃。** PJM capacity reform 与暴利税立法会改变现金流归属和容量价格形成机制，历史收益分布无法外推。

**第二层盲区：评级 cliff。** BBB+ utility 一旦进入实质下迁路径，投资级账户、保险资金、ETF 与风控系统会同步降风险，流动性成本不是线性 spread widening。

**第三层盲区：基本面叙事断裂。** hyperscaler capex 推迟会让“电力稀缺 = 确定性现金流”变成“电力扩张 = 超前建设风险”，这类事件在 VaR 中通常只表现为波动率上升，无法提前捕捉估值倍数重估。

**第四层盲区：cross-asset correlation jump。** 平时 EUR/CNY、JPY、CDX、TLT 可以分散风险；压力日可能同时变成流动性风险资产的一部分。10 日 VaR 已经加入相关性上升，但复合尾部仍要靠情景止损。

## 六、硬性减仓触发器

触发器分三档：观察、减仓、硬性减仓。**硬性减仓不是投委会讨论项，而是预设执行项**：组合主题风险预算至少降 30%，JPY carry 至少降 50%，停止卖出任何下行 convexity。

### 6.1 信用触发器

| 指标 | 当前锚点 | 观察 | 减仓 | 硬性减仓 | 执行动作 |
| --- | ---: | ---: | ---: | ---: | --- |
| CDX IG OAS / spread proxy | IG OAS 约 80 bp | CDX IG >70 bp 或 5 日 +10 bp | >85 bp 或 5 日 +15 bp | >100 bp 或 10 日 +25 bp | 降低 USD 电力权益 20–30%，加 CDX IG payer |
| CDX HY OAS / HY spread proxy | HY OAS 286 bp | >350 bp | >425 bp | >500 bp 或 10 日 +100 bp | 清理 HY/IPP beta，保留 CDS 对冲 |
| Vistra 5Y CDS | 需 Markit/Bloomberg 实时报价 | >175 bp 或 5 日 +35 bp | >220 bp 或 5 日 +50 bp | >275 bp 或 10 日 +90 bp | VST 权益减半，不再用股票替代 CDS |
| Talen 5Y CDS | 需 Markit/Bloomberg 实时报价 | >250 bp 或 5 日 +50 bp | >325 bp 或 5 日 +75 bp | >425 bp 或 10 日 +125 bp | TLN 权益/信用联动降风险 50–75% |

说明：CDX 指标优先使用实时 CDX spread；若系统只有公开 OAS，则用 FRED IG/HY OAS 作慢频 proxy。单一名 CDS 若报价不可得，用 5Y/7Y 债券 OAS 与 equity drawdown 共同替代。

### 6.2 FX 与流动性触发器

| 指标 | 观察 | 减仓 | 硬性减仓 | 执行动作 |
| --- | ---: | ---: | ---: | --- |
| USD/JPY 1m implied vol | >11 | >13 | >15 或 2 日上升 >3 vol | JPY carry 减半，保留 JPY call，不再加现货 USD/JPY 多头 |
| USD/JPY spot drawdown | 2 日下跌 3 大 | 5 日下跌 5 大 | 10 日下跌 8 大或官方干预确认 | 平掉至少 50% 融资腿 |
| JPY CFTC 净空头 | <-160k 张 | <-190k 张 | <-220k 张且 vol 上升 | 停止增加 carry，转为期权结构 |

### 6.3 PJM 与基本面触发器

| 指标 | 观察 | 减仓 | 硬性减仓 | 执行动作 |
| --- | ---: | ---: | ---: | --- |
| PJM BRA / forward capacity price | 低于 $300/MW-day | 低于 $250/MW-day | 低于 $200/MW-day 或价格形成机制被重写 | 电力稀缺主题风险预算降 30–50% |
| PJM 高价政治尾部 | 高于 $450/MW-day | 高于 $550/MW-day | 高价同时伴随州级暴利税/追讨法案进入实质审议 | 从权益多头转向信用保护和波动率多头 |
| hyperscaler capex guidance | 单家公司延后电力/IDC capex | 两家同步延后 | 两家以上下修全年 AI capex 或推迟电力合同 | 主题交易进入 thesis review，停止加仓 |
| utility/IPP rating outlook | 2 家转负面 | 3 家转负面或 1 家降至 BBB- | BBB- 名单扩大且 HY OAS >425 bp | 降低 BBB utility 与 IPP 权益，提升现金 |

## 七、组合层面的硬限制

1. **99% 10 日 VaR 上限：13% NAV。** 超过 13% 时不得新增主题风险；超过 15% 时强制降风险 25%。
2. **99.9% 10 日 ES 上限：30% NAV。** 超过 30% 时触发复合尾部委员会复核；超过 35% 时强制把主题预算降至一半。
3. **JPY carry 风险预算上限：组合 VaR 的 25%。** 若 JPY 对 99% VaR 贡献超过 25%，优先减融资腿，而不是砍掉全部 USD 资产多头。
4. **单一名 IPP 下行风险上限：单名 99% 10 日损失不超过 3% NAV。** VST/TLN 任何一名突破即降低该名权益或补 CDS。
5. **对冲不能以卖尾部融资。** 禁止用卖 IPP OTM put、卖 JPY call、卖 HY protection 来补贴 carry。

## 八、操作建议

### 8.1 当前组合是否可以继续持有

可以继续持有，但必须把它定义为 **高 conviction、低杠杆、带硬止损的主题组合**，而不是 carry-enhanced equity book。当前公开 OAS 和 PJM 容量价格组合在一起，说明“基本面稀缺”和“信用未定价”同时存在；这有收益空间，也意味着亏损分布非常偏斜。

### 8.2 最小调整

- 保留 USD 电力稀缺多头，但把 gross exposure 控在 20–25 NAV。
- JPY carry 不再超过 5–6 NAV 风险等价，且必须由 JPY call / RR 覆盖。
- CDX IG payer 不应只是灾难保险，应保持足够 DV01，使 IG OAS +50 bp 时能抵消至少 2–3% NAV。
- 单一名 CDS 覆盖优先级：TLN 高于 VST，高 beta IPP 高于 regulated utility。
- TLT put spread 只作为电力通胀/长端利率对冲，不能替代信用保护。

## 九、下一棒交接

当前卡片已经完成组合层面的 VaR、ES、压力测试和硬触发器。下一步最需要的不是再争论方向，而是把风控触发器落到执行层：在压力日，哪些腿先砍、哪些对冲先保留、哪些工具流动性会消失。

### 推荐下一位分析师

**algo-trader（算法交易员）。**

具体追问：

> 在 AI 电力稀缺组合触发硬性减仓时，如何设计分层执行方案：VST/TLN/utility 权益、USD/JPY 融资腿、CDX IG payer、单一名 CDS、TLT put spread、EUR/CNY option 应按什么顺序、什么成交参与率、什么流动性约束执行，才能把 10 日 99% VaR 从 12–13% NAV 快速压回 8% 以下，同时避免压力日冲击成本吞噬对冲收益？

理由：风控框架已经给出“何时减仓”，但组合真正的尾部损失来自触发后的执行质量。algo-trader 最适合把硬触发器转化为可执行的减仓路径、流动性预算、交易时段选择和冲击成本上限。

## 十、风险声明

- 本报告是研究与风控框架，不构成投资建议。
- VaR/ES 数字基于每 100 NAV 的归一化组合假设；正式交易前必须用实际持仓、期权 Greeks、CDS DV01、保证金、净额协议与实时 vol surface 重新计算。
- 政策、评级与 hyperscaler capex 指引属于跳跃事件，不能只依赖历史 VaR，应以硬触发器和情景止损共同管理。

## Follow-up

- Analyst: algo-trader
- Topic: AI 电力稀缺组合触发硬性减仓后的执行路径、流动性预算与冲击成本控制
- Question: 在 AI 电力稀缺组合触发硬性减仓时，如何设计分层执行方案：VST/TLN/utility 权益、USD/JPY 融资腿、CDX IG payer、单一名 CDS、TLT put spread、EUR/CNY option 应按什么顺序、什么成交参与率、什么流动性约束执行，才能把 10 日 99% VaR 从 12–13% NAV 快速压回 8% 以下，同时避免压力日冲击成本吞噬对冲收益？
