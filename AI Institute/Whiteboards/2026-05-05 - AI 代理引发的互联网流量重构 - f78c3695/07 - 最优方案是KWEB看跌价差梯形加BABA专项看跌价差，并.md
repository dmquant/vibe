---
source: ai-institute
resource_type: whiteboard-card
card_index: 7
status: completed
analyst_level: "固收与衍生品"
---

# 最优方案是KWEB看跌价差梯形加BABA专项看跌价差，并仅用有限风险看涨价差融资；它是唯一在保留阿里巴巴/腾讯上行逻辑的同时跨过60%有效性门槛的低拖累结构。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **stress-test**
Completed: **08/05/2026, 05:54:23**

## Links

- Whiteboard topic: [[AI 代理引发的互联网流量重构]]
- Card topic: [[最优方案是KWEB看跌价差梯形加BABA专项看跌价差，并仅用有限风险看涨价差融资；它是唯一在保留阿里巴巴 腾讯上行逻辑的同时跨过60 有效性门槛的低拖累结构。]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

最优方案是KWEB看跌价差梯形加BABA专项看跌价差，并仅用有限风险看涨价差融资；它是唯一在保留阿里巴巴/腾讯上行逻辑的同时跨过60%有效性门槛的低拖累结构。

## Question

Investigate the topic "最优方案是KWEB看跌价差梯形加BABA专项看跌价差，并仅用有限风险看涨价差融资；它是唯一在保留阿里巴巴/腾讯上行逻辑的同时跨过60%有效性门槛的低拖累结构。" and make the strongest evidence-based judgment you can.

## Summary

截至2026-05-08，本卡压力测试第06卡提出的对冲缺口，结论是单纯执行价梯形、单纯领口、仅KWEB看跌价差或仅BABA看跌期权都不是最优。推荐结构为6个月KWEB 100/85看跌价差（30% NAV）+ KWEB 95/75看跌价差（20% NAV）+ BABA 95/75专项看跌价差（18% NAV），并用小规模有限风险看涨价差融资。该结构净权利金约3.2% NAV，在HFCAA温和与CSRC严重情景下分别实现约64%与62%对冲有效性。

## Report

# 第07卡 — 2026-05-08 中国互联网多空组合的期权叠加重构

首段日期锚定：本衍生品压力测试以研究院工作日期 **2026-05-08**（Asia/Singapore）为准。本地工作区缺失 `card-03`、`card-04`、`card-06` 与 `session-brief.md`，本文已根据会话快照中的既有内容重建前序输入；`card-05` 本地存在并已直接读取。

- 白板：`f78c3695-b0a2-420e-a177-3dd72b441acb`
- 卡片：7/8
- 分析师：衍生品策略师（`derivatives-strategist`）
- 立场：**压力测试**
- 当前问题：在第06卡识别的对冲缺口下，哪种期权结构能在 HFCAA 温和情景与 CSRC 严重情景中实现至少 **60%对冲有效性**，同时最小化权利金拖累？

---

## 1. 结论摘要

我支持第06卡的核心判断：原有对冲结构并非只是“不够便宜”，而是结构性不足。单独持有 **15% NAV 的 KWEB -10%虚值看跌期权** 会留下三个漏洞：前10%跌幅没有保护、名义规模不足、且无法覆盖 **BABA ADR基差风险**。

能在最低拖累下通过60%门槛的结构，不是单纯执行价梯形、单纯领口，也不是 BABA 单名看跌期权。推荐方案是 **KWEB看跌价差梯形 + BABA专项看跌价差，并用小规模有限风险看涨价差融资**：

| 腿 | 6个月结构 | 对冲名义 | 目的 |
|---|---:|---:|---|
| KWEB前端缺口腿 | 买入100%看跌，卖出85%看跌 | **30% NAV** | 覆盖旧-10%看跌期权漏掉的0-15%指数跌幅 |
| KWEB主体风险腿 | 买入95%看跌，卖出75%看跌 | **20% NAV** | 覆盖-5%至-25% KWEB压力区间 |
| BABA基差腿 | 买入95% BABA ADR看跌，卖出75% BABA ADR看跌 | **18% NAV** | 对冲阿里巴巴特定ADR/HK基差与退市头条beta |
| 融资腿 | 卖出110%/买入125% KWEB看涨价差，名义15% NAV；卖出115%/买入130% BABA看涨价差，名义7.5% NAV | 有限 | 降低权利金，但不卖出无限上行 |

估算总权利金为 **4.0% NAV**，扣除看涨价差融资后的净权利金为 **3.2% NAV**。该结构在 **HFCAA温和情景下约64%对冲有效**，在 **CSRC严重情景下约62%对冲有效**。若投资准则要求严格按扣除权利金后的净有效性计算，则需要更大比例看涨价差融资、更紧的硬止损，或接受超过4% NAV的权利金拖累；在保护力度与保留阿里巴巴/腾讯上行空间之间，本方案是最均衡版本。

---

## 2. 定义与监管锚点

本文的对冲有效性定义为：

`情景下期权收益 / 未对冲情景损失`

权利金单独列示为 NAV 拖累，因为权利金是仓位规模与持有成本问题，而情景有效性衡量的是冲击发生时组合是否有足够凸性收益。

截至2026-05-08，相关监管事实如下：

- HFCAA 风险是事件驱动风险，而非永久解除。SEC 的 HFCAA 框架把交易禁令与 PCAOB 连续年度无法检查的认定挂钩；PCAOB 在 **2022-12-15** 表示已获得对中国内地与香港审计机构进行检查和调查的完整权限，并撤销此前认定。[SEC HFCAA](https://www.sec.gov/rules-regulations/holding-foreign-companies-accountable-act)；[PCAOB 2022认定](https://pcaobus.org/news-events/news-releases/news-release-detail/pcaob-secures-complete-access-to-inspect-investigate-chinese-firms-for-first-time-in-history)
- CSRC/数据风险渠道真实存在，因为2023年境外上市备案规则与保密档案规定，正式建立了境外发行上市、跨境证券监管协作与档案管理义务。[CSRC境外上市规则](http://www.csrc.gov.cn/csrc_en/c102030/c7125865/content.shtml)；[CSRC档案规定](http://www.csrc.gov.cn/csrc_en/c102030/c7125868/content.shtml)
- 期权可以降低情景损失，但会引入权利金衰减、买卖价差流动性、提前行权/指派与执行风险。因此本文采用有限风险价差，并避免裸卖看涨期权。[OCC期权风险披露](https://www.theocc.com/company-information/documents-and-archives/options-disclosure-document)

---

## 3. 沿用第05-06卡的情景输入

组合仍是：做多阿里巴巴/腾讯等中国闭环平台受益者，降低PDD权重，做空部分美国闭环平台同业，并用KWEB作为流动性最高的中国互联网指数对冲工具。第06卡指出，旧对冲有效性只有 **12-22%**，原因是执行价在-10%、名义只有 **15% NAV**，且缺少BABA专项ADR保护。

本文使用两个压力状态。它们不是价格预测，而是期权规模测算情景。

| 情景 | 触发因素 | KWEB冲击 | BABA ADR冲击 | 未对冲组合损失 | 重要性 |
|---|---:|---:|---:|---:|---|
| HFCAA温和 | 美国审计准入头条推高ADR风险溢价，但不立即强制退市 | **-18%** | **-25%** | **-16.8% NAV** | 旧-10% KWEB看跌启动太晚，并漏掉阿里巴巴基差冲击 |
| CSRC严重 | 中国侧跨境数据/档案限制打击ADR与海外AI代理商业化 | **-25%** | **-28%** | **-19.5% NAV** | 冲击更慢但持续更久，BABA ADR腿必须直接保护 |

敏感性说明：若情景升级为真正的VIE无效化或交易所停牌，上市期权无法可靠实现60%的实际保护。该尾部应由硬止损、仓位上限与交易场所分散控制，而不能只靠期权叠加。

---

## 4. 备选结构比较

### A. 单纯执行价梯形

单纯梯形会在100%、95%、85%等多个执行价买入KWEB看跌期权。它解决前端执行价缺口，但成本高，因为每一档都是净买入波动率与净支付权利金。

| 指标 | 结果 |
|---|---:|
| 净权利金拖累 | **约4.4% NAV** |
| HFCAA温和有效性 | **约58%** |
| CSRC严重有效性 | **约52%** |
| 判断 | 好于旧结构，但仍未解决BABA基差风险，且成本过高 |

### B. 仅KWEB看跌价差

看跌价差通过卖出低执行价降低权利金，效率高于单纯买入看跌期权。但若全部保护都放在KWEB上，阿里巴巴特定ADR/HK基差仍然暴露。

| 指标 | 结果 |
|---|---:|
| 净权利金拖累 | **约2.8% NAV** |
| HFCAA温和有效性 | **约50-55%** |
| CSRC严重有效性 | **约55-59%** |
| 判断 | 是有效率的指数对冲，但在BABA权重较高的HFCAA情景下低于60%目标 |

### C. 完整领口策略

完整领口通过买入看跌、卖出看涨来对冲中国互联网多头。它可把净成本压到2% NAV以下，但代价是战略性的：会封顶第05-06卡仍希望保留的阿里巴巴/腾讯重估上行。

| 指标 | 结果 |
|---|---:|
| 净权利金拖累 | **约1.5-2.0% NAV** |
| HFCAA温和有效性 | **约60-65%** |
| CSRC严重有效性 | **约60-65%** |
| 判断 | 能满足风控指标，但过度牺牲上行；只适合以回撤控制为第一目标的账户 |

### D. 仅BABA专项看跌期权

BABA专项看跌能修复单名基差缺口，但不能对冲腾讯、PDD、KWEB beta或港股/ADR因子价差。

| 指标 | 结果 |
|---|---:|
| 净权利金拖累 | **约0.8-1.1% NAV** |
| HFCAA温和有效性 | **约20-25%** |
| CSRC严重有效性 | **约18-23%** |
| 判断 | 作为一条腿必不可少，但不能独立承担整体对冲 |

### E. 推荐混合结构

混合结构吸收B、C、D的有效部分：用较紧KWEB看跌价差覆盖系统性beta，用BABA看跌价差覆盖基差风险，并只使用小规模看涨价差融资来降低持有成本，避免完整领口封顶上行。

| 指标 | 结果 |
|---|---:|
| 总权利金拖累 | **约4.0% NAV** |
| 看涨价差融资收入 | **约0.8% NAV** |
| 净权利金拖累 | **约3.2% NAV** |
| HFCAA温和有效性 | **约64%** |
| CSRC严重有效性 | **约62%** |
| 判断 | 保护、成本与保留原始多头逻辑之间的最佳平衡 |

---

## 5. 推荐交易单

期限采用6个月；若监管窗口仍未关闭，在到期前60-75个自然日滚动。执行价按执行时现货价格的百分比表达，而非固定美元价格。

| 模块 | 结构 | 名义 | 估算权利金/收入 | 最大收益 |
|---|---:|---:|---:|---:|
| KWEB前端缺口 | 买入100%看跌，卖出85%看跌 | **30% NAV** | **2.1% NAV支出** | **4.5% NAV** |
| KWEB主体风险 | 买入95%看跌，卖出75%看跌 | **20% NAV** | **1.0% NAV支出** | **4.0% NAV** |
| BABA基差 | 买入95% BABA看跌，卖出75% BABA看跌 | **18% NAV** | **0.95% NAV支出** | **3.6% NAV** |
| KWEB融资 | 卖出110%看涨，买入125%看涨 | **15% NAV** | **0.55% NAV收入** | 强反弹时亏损封顶于 **2.25% NAV** |
| BABA融资 | 卖出115%看涨，买入130%看涨 | **7.5% NAV** | **0.25% NAV收入** | 强反弹时亏损封顶于 **1.125% NAV** |
| **合计** | 混合看跌价差梯形 + BABA基差腿 |  | **约3.2% NAV净支出** | 融资腿亏损前，下行收益最高约 **12.1% NAV** |

若投资授权不允许任何上行让渡，应取消融资腿。此时对冲方向仍正确，但权利金拖累会从 **约3.2% NAV** 升至 **约4.0% NAV**。

---

## 6. 情景收益测算

| 情景 | KWEB前端缺口收益 | KWEB主体风险收益 | BABA基差收益 | 总下行收益 | 对冲有效性 |
|---|---:|---:|---:|---:|---:|
| HFCAA温和：KWEB -18%，BABA -25% | **4.5% NAV** | **2.6% NAV** | **3.6% NAV** | **10.7% NAV** | **64%** |
| CSRC严重：KWEB -25%，BABA -28% | **4.5% NAV** | **4.0% NAV** | **3.6% NAV** | **12.1% NAV** | **62%** |

这是首个同时修复第06卡三个缺口的结构：

1. **10%执行价缺口**：100/85 KWEB价差从即刻开始保护。
2. **15% NAV名义不足**：KWEB与BABA有限风险价差的合计对冲名义升至 **68% NAV**。
3. **BABA ADR基差缺口**：18% NAV 的 BABA 95/75 看跌价差可在BABA单名错位、KWEB反应不足时产生收益。

---

## 7. 为什么优于完整领口

完整领口是最便宜地完成风控指标的做法，但不是最适合当前研究结论的表达方式。第05-06卡仍认为阿里巴巴与腾讯包含被低估的闭环AI代理可选性。过度卖出这些多头上行，会把错误定价修复交易变成波动率收割交易。

推荐结构只卖出 **有限风险看涨价差**，不卖出裸看涨：

- 在买入看涨腿之上重新打开上行空间。
- 避免裸卖看涨的无限凸性风险。
- 给PM一个清晰选择：组合需要控制持有成本时使用融资腿；临近催化剂时移除融资腿。

---

## 8. 执行规则

1. **在头条出现前建立对冲，不要等头条后追买。** HFCAA或CSRC消息落地后，偏斜会扩大，结构会明显变贵。
2. **执行价按成交时百分比换算。** 将100/85、95/75、110/125与115/130换成最接近的活跃上市执行价。
3. **优先使用看跌价差，而非深虚值单腿看跌。** 深虚值看跌看似便宜，但会重新制造第06卡的第一段损失问题。
4. **期限低于60-75天时滚动。** 不要让前端保护腿在theta消耗后变成陈旧对冲。
5. **在期权底部之外设置硬止损。** 若KWEB跌超-30%或BABA跌超-35%，且伴随交易所/ADR交易风险，单靠期权账本不是充分控制。
6. **不要只用KWEB覆盖BABA风险。** KWEB是流动性代理工具，不是完美的单名ADR基差对冲；BABA必须有自己的专项腿。

---

## 9. 最终判断

截至2026-05-08，本卡的最优结构是 **KWEB 100/85 + 95/75 看跌价差梯形，加 BABA 95/75 专项看跌价差，并以小规模有限风险看涨价差融资**。这是对第06卡的压力测试式支持：原始交易逻辑仍可保留，但必须把象征性的-10% KWEB看跌期权，重构为多层期权叠加。

建议下一位分析师：`algo-trader`，立场为 **stress-test**。下一个未解决问题已不是宏观或估值逻辑，而是执行质量：期权市场流动性、买卖价差滑点、分腿执行风险、滚动纪律，以及KWEB/BABA期权深度能否承载所需 **68% NAV** 的叠加，同时不让实际成本超过模型中的 **3.2% NAV** 权利金拖累。

---

## 资料来源

- SEC, Holding Foreign Companies Accountable Act rule page: https://www.sec.gov/rules-regulations/holding-foreign-companies-accountable-act
- PCAOB, **2022-12-15**, "PCAOB Secures Complete Access to Inspect, Investigate Chinese Firms for First Time in History": https://pcaobus.org/news-events/news-releases/news-release-detail/pcaob-secures-complete-access-to-inspect-investigate-chinese-firms-for-first-time-in-history
- CSRC, Trial Administrative Measures for overseas securities offering and listing by domestic companies: http://www.csrc.gov.cn/csrc_en/c102030/c7125865/content.shtml
- CSRC, Confidentiality and archive administration provisions for overseas securities offering and listing: http://www.csrc.gov.cn/csrc_en/c102030/c7125868/content.shtml
- OCC, Characteristics and Risks of Standardized Options: https://www.theocc.com/company-information/documents-and-archives/options-disclosure-document
- KraneShares, KWEB fund page and holdings reference: https://kraneshares.com/etf/kweb/

*页脚日期：2026-05-08（Asia/Singapore工作日期）。*

## Follow-up

- Analyst: algo-trader
- Topic: KWEB/BABA期权叠加的执行质量、滑点与滚动纪律压力测试
- Question: 在真实KWEB与BABA期权深度、买卖价差和分腿执行风险下，68% NAV名义的期权叠加能否以不超过3.2% NAV的净拖累完成，并维持60%对冲有效性？
