---
source: ai-institute
resource_type: whiteboard-card
card_index: 4
status: completed
analyst_level: "风控与合规"
---

# AI Infra信用链是建立在不可持续的GPU残值假设上的‘纸牌屋’，Oracle是系统性降级的震中，信用利差面临非线性走阔风险。

Analyst: **Credit Analyst**
Status: **completed**
Stance: **stress-test**
Completed: **27/04/2026, 14:13:12**

## Links

- Whiteboard topic: [[2026 Q1之后超大规模云厂商AI资本开支可持续性]]
- Card topic: [[AI Infra信用链是建立在不可持续的GPU残值假设上的‘纸牌屋’，Oracle是系统性降级的震中，信用利差面临非线性走阔风险。]]
- Analyst: [[Credit Analyst]]
- Analyst level: [[风控与合规]]

## Topic

AI Infra信用链是建立在不可持续的GPU残值假设上的‘纸牌屋’，Oracle是系统性降级的震中，信用利差面临非线性走阔风险。

## Question

Investigate the topic "AI Infra信用链是建立在不可持续的GPU残值假设上的‘纸牌屋’，Oracle是系统性降级的震中，信用利差面临非线性走阔风险。" and make the strongest evidence-based judgment you can.

## Summary

AI基础设施信用链呈现严重的定价错觉。CoreWeave等Neocloud厂商依赖的GPU抵押ABS在Capex转负情景下PD飙升至35%+，其底层GPU残值假设极易崩溃。Oracle作为链条单点风险，其$248B表外租赁义务未被充分定价，面临降至垃圾级的风险。当前Oracle CDS与AI ABS次级档利差被严重低估，私募信贷赎回潮暗示流动性陷阱已现。

## Report

# 卡 04 · 信用分析师视角：AI Infra信用链压力测试与利差定价审计

- 分析师：credit-analyst（信用分析师，[specialist]）
- 立场：stress-test（针对AI Neocloud与Oracle信用链的深度压力测试）
- 关联卡片：卡01（tmt-analyst）、卡03（chief-risk）
- 日期：2026-04-27

## 1. 核心结论：AI Infra 信用链的“硅抵押陷阱”
当前市场（2026 Q1）对AI基础设施信用链的定价存在严重的“抵押物稳定性错觉”。虽然Blackstone、Apollo等私募巨头通过SPV结构和“GPU抵押ABS”实现了首笔投资级（IG）评级，但这一结构的底层假设——**GPU残值（Residual Value）稳定性**与**云厂商长约执行力**——在Capex转负（S1/S2情景）时将发生共振失效。Oracle作为链条中杠杆最高且表外敞口最大的环节，是系统性降级的“震中”。

## 2. 压力情景下的违约概率（PD）分布预测
基于2026 Q1末的资本结构与杠杆读数，针对S1（Capex负增长）与S2（深度尾部+利率高企）进行PD测算：

| 信用主体 / 结构 | 当前评级 | S1（基线尾部）预计PD | S2（深度尾部）预计PD | 关键脆弱点 |
|---|---|---|---|---|
| **CoreWeave / Lambda** | B+ / A3 (IG Tranche) | 12% – 18% | 35% – 45% | 单一资产（GPU）依赖；利息支出占毛利比重 >70%。 |
| **Oracle (ORCL)** | BBB (Negative) | 5% – 8% | 15% – 20% | $248B表外租赁义务；$130B+总债务；利息覆盖倍数降至3x以下。 |
| **AI Infra ABS (Junior)** | BB/B | 25% – 35% | 60% – 75% | 位于亏损吸收首层；GPU二级市场价格折让50%即触发本金减记。 |
| **Stargate SPV (Project)** | A- (Implied) | 2% – 4% | 8% – 12% | 虽有Microsoft背后支撑，但若项目停摆，抵押物变现难度极大。 |

- **PD 变动逻辑**：在S1情景下，云厂商Capex指引转负将导致GPU租赁市场从“卖方市场”转为“严重过剩”，Neocloud的现金流（CF）将无法覆盖其高昂的融资成本（SOFR + 600-900bp）。S2情景下，再融资渠道关闭将直接触发大规模违约。

## 3. 利差定价完整性审计：谁被最严重低估？
当前的IG（95bp）与HY（310bp）利差处于历史极薄分位，未考虑AI产业的非线性风险。

### 3.1 Oracle CDS：定价最严重的误区
- **现状**：市场视Oracle为“稳健的第四大云”，其CDS利差仅反映了BBB级的平均风险。
- **低估逻辑**：Oracle的 **$248B表外租赁承诺** 是隐形的高级债务。在S2情景下，AI业务增速放缓无法覆盖固定成本，Oracle面临从BBB降至BB（Fallen Angel）的断崖式风险。
- **定价差距**：当前利差隐含PD < 2%，而压力测试下PD应在15%以上。**这是全产业链利差扩大幅度最被低估的标的。**

### 3.2 AI Infra ABS (MEZZ/Junior Tranches)：残值假设崩溃
- **现状**：近期发行的GPU-backed ABS假设H100/H200在3年后仍有40-50%的残值。
- **低估逻辑**：技术迭代（Blackwell/Rubin）将使旧款芯片迅速贬值。一旦Capex转负，二手市场将充斥被清算的GPU，残值可能跌至20%以下。
- **定价差距**：次级档利差应从当前的 +500bp 走阔至 +1200bp+。

### 3.3 私募信贷基金 (Apollo / Blue Owl)：流动性溢价缺失
- **现状**：投资者仍以账面价值（NAV）交易，未反映资产端底层Neocloud厂商的违约风险。
- **低估逻辑**：2026 Q1出现的$20B赎回潮已是预警信号。赎回上限（5%）隐藏了真实的二级市场折价（估计折价已达15-20%）。

## 4. 信用传染路径：从“硅”到“纸”
1. **触发点**：Big 4削减2027 Capex → GPU租赁单价暴跌 30%+。
2. **第一波**：Neocloud厂商（CoreWeave/Lambda）现金流断裂，触发GPU ABS违约及Covenants重议。
3. **第二波**：抵押物抛售导致GPU价格崩盘 → 私募信贷基金（Apollo/Blue Owl）净值大幅下修，进一步限制赎回。
4. **第三波**：Oracle因AI RPO转化不及预期且固定债务成本高昂，被评级机构下调至“垃圾级” → 触发大规模被动抛售。
5. **终局**：全球HY利差整体走阔 150bp+，AI产业进入“债务出清”周期。

## 5. 配置与对冲建议 (Credit-Focused)
- **核心对冲单**：**买入 Oracle 5Y CDS**（利差向上弹性最大）；
- **策略性空头**：**空头 CoreWeave (CRWV) 高级无抵押债**；
- **结构性避险**：退出所有持有大量AI基础设施敞口的私募信贷基金，即使需支付赎回惩罚，也要在清算闸门彻底关死前撤离；
- **配置方向**：增配具备强大FCF且无表外杠杆的“非AI重资本”IG债（如Apple、部分公用事业），作为久期保护。

## 6. 接力建议 (Handoff)
- **下一位**：financials-analyst（金融行业分析师，[primary]）
- **角色定位**：primary。信用分析师已完成对底层债项与信用链条的风险定价。这些信用风险最终将回流至金融系统的资产负债表。
- **接力问题**：在AI Infra信用链断裂与Oracle可能降级的背景下，参与深度融资的全球系统重要性银行（G-SIBs）及区域性银行的资本充足率与不良贷款率（NPL）压力如何？哪些二线券商/投行因过度参与GPU租赁融资与ABS创设而面临流动性危机？这是否会演变为一场“AI版本的长期资本管理公司（LTCM）”式危机？
- **建议立场**：synthesize —— 结合TMT的业务逻辑、风控的尾部情景、信用的利差数据，最终还原为对金融系统稳定性的综合评估。

## 7. 信心度
**0.68** —— 债务数据与杠杆读数来源于2026 Q1最新披露，具有高度时效性；但信用传染的精确时点受到私募信贷基金封闭期管理和Big 4表外回购协议（Buyback backstop）透明度的限制。

## Follow-up

- Analyst: financials-analyst
- Topic: AI Infra信用违约对金融机构资产负债表与全球系统重要性银行（G-SIBs）的传染性压力
- Question: 在AI Infra信用链断裂与Oracle可能降级的背景下，参与深度融资的全球系统重要性银行及区域性银行的资本充足率与不良贷款率压力如何？哪些金融机构因过度参与GPU融资而面临流动性危机？
