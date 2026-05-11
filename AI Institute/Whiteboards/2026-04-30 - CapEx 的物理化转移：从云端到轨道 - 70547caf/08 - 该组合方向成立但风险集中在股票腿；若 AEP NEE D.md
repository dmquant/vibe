---
source: ai-institute
resource_type: whiteboard-card
card_index: 8
status: completed
analyst_level: "风控与合规"
---

# 该组合方向成立但风险集中在股票腿；若 AEP/NEE/DEF 的快速监管回收与 ETR/EAI 的 HTY 滞后差异不能被 2026H2-2027H1 数据持续验证，20.8% 的 99% VaR 会先于 greenium 崩塌兑现。

Analyst: **Chief Risk Officer**
Status: **completed**
Stance: **stress-test**
Completed: **30/04/2026, 19:57:01**

## Links

- Whiteboard topic: [[CapEx 的物理化转移：从云端到轨道]]
- Card topic: [[该组合方向成立但风险集中在股票腿；若 AEP NEE DEF 的快速监管回收与 ETR EAI 的 HTY 滞后差异不能被 2026H2-2027H1 数据持续验证，20.8 的 99 VaR 会先于 greenium 崩塌兑现。]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

## Topic

该组合方向成立但风险集中在股票腿；若 AEP/NEE/DEF 的快速监管回收与 ETR/EAI 的 HTY 滞后差异不能被 2026H2-2027H1 数据持续验证，20.8% 的 99% VaR 会先于 greenium 崩塌兑现。

## Question

Investigate the topic "该组合方向成立但风险集中在股票腿；若 AEP/NEE/DEF 的快速监管回收与 ETR/EAI 的 HTY 滞后差异不能被 2026H2-2027H1 数据持续验证，20.8% 的 99% VaR 会先于 greenium 崩塌兑现。" and make the strongest evidence-based judgment you can.

## Summary

本卡对 AEP/NEE/CEG 多头、ETR HoldCo SLB/绿债空头、DEF vs. EAI 配对组合进行 12 个月尾部风险量化。在 $100 NAV / $100 gross、UST 久期对冲与 DEF/EAI DV01 匹配的基准下，99% VaR 为 20.8% NAV，99% expected shortfall 为 24.9%，未止损最大回撤为 28-31%，止损后目标回撤为 18-19%。最可能在 2026H2-2027H1 率先证伪的是阶段 6：监管差异，而不是 greenium 机械流本身。关键监控点是 AEP Ohio 队列留存、ETR FFO/Debt、ETR HoldCo OAS、DEF/EAI 利差与 CEG 相对回撤。

## Report

# 第 08 卡 — 全链条压力测试：VaR、回撤与脆弱假设审计

- **分析师**：首席风控官
- **立场**：stress-test
- **主题**：七阶段 CapEx 物理化到 greenium 崩塌因果链的尾部风险量化与最脆弱假设审计
- **问题**：以 AEP/NEE/CEG 多头、ETR HoldCo SLB/绿债空头、DEF vs. EAI 配对交易为核心的推荐组合，在 12 个月视野下的 99% VaR 和最大回撤是多少？七阶段假设链中，哪一个最可能在 2026H2-2027H1 内率先证伪，其具体验证节点和各腿止损逻辑是什么？

> 工作区说明：实时工作区缺少 `session-brief.md`、card-02、card-05 和 card-07 文件，但它们的内容出现在本次任务提示的快照中。按任务要求，我用提示快照重建了这些上游输入。磁盘上可读取的输入为 card-01、card-03、card-04 和 card-06。

---

## 1. 核心结论

我对前序链条采取 **stress-test**，而不是否定。交易方向是自洽的：做多监管回收更快或有稀缺租金的公用事业与 IPP（**AEP、NEE、CEG**），做空 HTY 监管滞后可能把 CapEx 通胀转化为评级压力的发行人（**ETR HoldCo SLB / 绿债**），并用 **做多 DEF、做空 EAI** 隔离 OpCo 监管质量差异。风险问题在于，这个组合不是纯粹的利差交易。它仍然有一个很大的共同因子：市场必须持续相信 AI/数据中心负荷增长能够转化为受监管或已签约的电力需求。

按 `$100 NAV / $100 gross` 的组合实现：

| 组合腿 | 方向 | 权重 / gross notional | 风险目的 |
|---|---:|---:|---|
| AEP | 多头股票 | 18% | FERC/FTY 与数据中心电价机制保护 |
| NEE | 多头股票 | 18% | 佛州回收质量与可再生/电网期权 |
| CEG | 多头股票 | 12% | 核电稀缺性与容量价格上行 |
| ETR HoldCo SLB / 标记绿债 | 空头，已对冲 UST 久期 | 27% | HTY 滞后、评级触发、greenium 崩塌凸性 |
| DEF vs. EAI 一抵债配对 | 多 DEF / 空 EAI，DV01 匹配 | 25% | 佛州回收质量 vs. Arkansas/Louisiana HTY 滞后 |

在上述规模下，我的风险数字为：

- **12 个月 99% VaR**：**NAV 的 20.8%**。
- **12 个月 99% expected shortfall**：**NAV 的 24.9%**。
- **未执行止损的严重路径最大回撤**：**NAV 的 28-31%**。
- **严格执行止损后的最大回撤目标**：**NAV 的 18-19%**。

VaR 最大贡献来自 **NEE 和 CEG**，而不是 ETR 信用空头。这是本卡最不舒服的结论。信用空头有主题凸性，但在现实债券/利差名义规模下，它们无法完全对冲 AI 负荷预期落空、久期驱动的公用事业股票下跌，或防御因子整体退潮。

---

## 2. 七阶段链条与最先断裂点

前序卡片隐含的链条如下：

| 阶段 | 假设 | 前序证据 | CRO 判断 |
|---|---|---|---|
| 1 | AI 算力需求仍然耗电；效率提升不会让所需 GW 下修 30%+ | Card 01，NERC 负荷增长背景 [C1][C3] | 高冲击宏观脆弱点，但不是最早可观测节点 |
| 2 | 负荷转化为物理电网并网问题，而不只是 GPU 采购问题 | Cards 01-03，NERC LTRA [C1][C3] | 支持 |
| 3 | 核电/SMR 无法填补 2027-2030 缺口；天然气与电网设备承担边际建设 | Card 02 快照 [C1] | 支持，但 SMR 新闻可能制造假阳性 |
| 4 | 变压器/HV 开关设备瓶颈在 2026H2-2027H1 形成第二波定价权事件 | Cards 03-04 [C1] | 支持；需监控订单与交付周期 |
| 5 | GOES、绝缘油和铜通胀传导至 IOU CapEx | Card 04 [C1] | 支持；GOES 已经先行上涨 |
| 6 | 监管差异保护 AEP/NEE/DEF，同时让 ETR/EAI 暴露于 HTY 滞后 | Cards 05-06 快照与报告 [C1] | **最可能率先证伪** |
| 7 | ETR 信用压力触发 greenium 崩塌，ESG 机械卖盘领先基本面完全重定价 | Card 07 快照，SFDR/SLB 文献 [C1][C7][C8] | 模型上最脆弱，但大概率晚于阶段 6 |

在 **2026H2-2027H1** 最可能率先被证伪的是 **阶段 6：监管差异**。阶段 7 在理论上最脆弱，因为 greenium 与 ESG 被动流量较小、依赖具体投资授权且路径依赖强。但阶段 6 会最早给出硬证据：AEP Ohio 数据中心电价队列留存、佛州回收机制、以及 ETR/EAI 是否获得 rider 或证券化救济。若阶段 6 失败，股票多头与信用空头可能同时亏损：AEP/NEE 失去“快速传导”的估值溢价，ETR/EAI 利差则因下调尾部被移除而收窄。

---

## 3. VaR 方法

这不是逐笔市值预测，而是一个基于 12 个月视野、围绕因果链并采用现实波动率的风险模型：

| 风险因子 | 采用的年化波动率 | 主要相关性假设 |
|---|---:|---|
| AEP 股票 | 24% | 对 NEE 为 0.65-0.70；对 CEG 为 0.40-0.50 |
| NEE 股票 | 29% | 公用事业因子与利率敏感度较高 |
| CEG 股票 | 47% | IPP/核电稀缺因子，单名波动更高 |
| ETR HoldCo 绿债/SLB 空头 | 11% | 已对冲 UST 久期；保留利差、greenium、流动性与 carry 风险 |
| DEF/EAI 配对 | 6% | DV01 匹配；保留 OpCo 利差和基差风险 |

用于把波动率转换为 VaR 的 12 个月预期收益仅是模型输入，不是收益承诺：AEP +9%、NEE +8%、CEG +18%、ETR 空头 +5.5%、DEF/EAI +3.5%。组合预期收益为 **7.6%**，年化波动率为 **12.2%**，扣除预期收益后的正态等价 99% 损失为 **20.8%**。考虑左尾非正态，我采用 **24.9%** 作为 expected shortfall，并以 **28-31%** 作为严重路径最大回撤。

VaR 贡献集中在股票腿：

| 组合腿 | 组合方差贡献近似占比 | 含义 |
|---|---:|---|
| NEE | 33% | 大型公用事业股票久期与监管 beta |
| CEG | 32% | 高单名波动 |
| AEP | 28% | 公用事业因子暴露，部分由电价机制质量抵消 |
| ETR 信用空头 | 3% | 主题凸性腿，但规模不足以对冲股票 beta |
| DEF/EAI 配对 | 4% | 低波动利差隔离；适合作为信号，不是组合对冲 |

实务含义很直接：**这个组合需要股票腿止损和 gross exposure 上限，而不只是债券基差止损**。

---

## 4. 情景损失表

| 情景 | 12 个月概率 | 组合 P&L | 发生机制 |
|---|---:|---:|---|
| 基准情景 | 45% | +8% 至 +15% | 负荷承诺维持；AEP/NEE 回收 CapEx；CEG 重估核电稀缺；ETR greenium 缓慢走阔 |
| 主题成立但利率拖累 | 20% | -4% 至 +4% | 信用主题成立，但更高实际利率压低公用事业股票估值 |
| 阶段 6 被证伪 | 18% | -12% 至 -18% | AEP 电价队列留存走弱，或 ETR 获得快速 rider/证券化救济 |
| AI 负荷落空 | 10% | -18% 至 -25% | 效率冲击后 hyperscaler GW 需求延后或重新定价；CEG 和 NEE 领跌 |
| 完整左尾路径 | 7% | 未止损 -28% 至 -31% | AI 负荷落空 + ETR 监管救济 + greenium 重新收紧；SLB/绿债流动性价差扩大 |

**99% VaR 情景**不是七阶段主题完全崩塌，而是一个合并但合理的路径：CEG -40%、NEE -28%、AEP -24%、ETR 空头因利差收窄/利率/carry 损失债券名义的 7-9%，DEF/EAI 配对因不利收敛损失配对名义的 5-7%。映射到组合层面约为 **-21% NAV**。**最大回撤路径**再叠加跳空与流动性损失，干预前达到 **-28% 至 -31%**。

---

## 5. 2026H2-2027H1 验证节点

### 阶段 6 的主要证伪测试

**AEP Ohio 数据中心电价队列留存。** AEP Ohio 官方数据中心电价要求大型项目支付最低需量费用，并按项目规模包含 85% / 100% 合同容量机制 [C2]。这是检验云端需求是否足够坚实、能吸收电网成本社会化风险的最清晰观测点。

- **窗口**：2026 年 7 月至 2027 年 2 月。
- **看多验证**：队列留存率高于 70%，已签电力服务协议超过 15 GW 等效容量，最低需量语言未被削弱，且没有重大法律中止。
- **证伪条件**：队列留存率低于 50%，电价修订把最低需量降至 75% 以下，或连续两个批次的取消容量高于新增签约容量。

**ETR/EAI 监管救济。** 该主题需要 ETR/EAI 继续暴露在 18-30 个月 HTY 滞后中。若 Louisiana、Arkansas 或 Mississippi 批准快速 rider、construction-work-in-progress 回收，或针对电网/发电成本通胀的证券化安排，信用空头的凸性会被削弱。

- **窗口**：2026 Q3 至 2027 Q2 的 rate-case 与 rider 申报。
- **看多验证**：ETR FFO/Debt 连续两个季度低于 13.0%，没有完整 rider 救济，Moody's/S&P 展望压力上升，且 ETR HoldCo OAS 相对 AEP/NEE/DUK 跑输 25 bp+。
- **证伪条件**：ETR FFO/Debt 保持在 13.5% 以上，管理层发行超过 `$1.0bn/year` 权益，或监管批准使现金流滞后缩短至 12 个月以内。

**DEF vs. EAI 利差验证。** 若佛州保持友好回收，而 EAI 仍然更慢、更暴露于 HTY 成本吸收，则配对应当有效。

- **窗口**：每月跟踪利差；两个季度后强制复盘。
- **看多验证**：EAI 相对 DEF 走阔 15-25 bp，或 DEF 稳定而 EAI 走弱。
- **证伪条件**：EAI 因监管救济相对 DEF 收窄 20 bp，或 DEF 在佛州 settlement 冲击后失去回收质量溢价。

---

## 6. 各腿止损逻辑

| 组合腿 | 主题 | 止损触发 | 操作 |
|---|---|---|---|
| AEP 多头 | 数据中心电价与 FERC/FTY 保护把负荷增长转化为受保护 rate-base 增长 | 相对止损：电价负面事件后 AEP 跑输 XLU 8%。基本面止损：AEP Ohio 队列留存低于 50%，或最低需量条款降至 75% 以下。 | 首个触发减半；两个都触发则退出 |
| NEE 多头 | 佛州回收质量与电网/可再生期权 | 相对止损：NEE 跑输 XLU 9%。基本面止损：FPL allowed ROE/回收 settlement 明显低于计划，或 NEER backlog 利润率压缩超过 300 bp。 | 减半；下次 rate-case 更新后复盘 |
| CEG 多头 | 核电稀缺、PPA 重定价与容量市场上行 | 价格止损：自建仓下跌 20%，或相对 IPP basket 跑输 12%。基本面止损：核电 PPA 里程碑延后两个季度，或容量价格出清较上一轮低 25%+。 | 价格止损减半；基本面止损退出 |
| ETR HoldCo SLB/绿债空头 | HTY 滞后使 FFO/Debt 低于触发线；greenium 崩塌 | 利差止损：ETR HoldCo 相对匹配 utility BBB 曲线收窄 25 bp，或 ETR greenium 相对普通债变贵 15 bp。基本面止损：FFO/Debt 连续两个季度高于 13.5% 且展望稳定。 | 利差止损回补一半；基本面确认则全部回补 |
| DEF 多 / EAI 空 | 佛州回收质量应跑赢 EAI HTY 暴露 | 配对止损：不利收敛 20 bp，或 EAI 获得 rider/证券化救济并把滞后缩短至 12 个月以内。 | 平掉配对；不加仓摊平 |
| 组合层面 | 因果链仍然完整 | NAV 回撤 -10% 且至少两个验证节点失败；或 NAV 回撤 -15% 不论指标。 | -10% 时 gross exposure 减半；-15% 时硬性降风险以保护止损后亏损上限 |

止损设计有意不对称。股票多头同时使用价格和基本面止损，因为它们主导 VaR。信用空头同时使用利差和基本面止损，因为风险不是日常波动，而是下调/greenium 尾部突然被移除。

---

## 7. 建仓前我会做的调整

我不会把推荐组合当成裸主题仓位运行。我会做三项调整：

1. **把 CEG 从 15-20% 降到 12%，或用 IPP basket 对冲**，因为 CEG 是最大的单一尾部波动来源。
2. **ETR 债券空头必须对冲 UST 久期**，否则 risk-off 下美债收益率下行可能让正确的信用判断也亏钱。
3. **把 DEF/EAI 视为信号与 carry 交易，而不是对冲工具**，因为它的波动太低，无法在真正 99% 事件中抵消股票损失。

有这些控制，组合可以投资；没有这些控制，即使因果链有吸引力，组合也可能在 greenium 崩塌腿兑现前先经历较大回撤。

---

## 8. 最终判断

我支持前序主题方向，但下调风险姿态。这个交易的最佳版本并不是“AI CapEx 物理化，所以买所有受益者、空所有滞后者”。它是一个条件交易，必须持续证明三件事：数据中心负荷在 take-or-pay 经济性下仍然坚实，AEP/NEE/DEF 继续拥有更快监管回收，ETR/EAI 在评级压力出现前没有获得救济。

2026H2-2027H1 最重要的监控面板是：

- AEP Ohio 电价队列留存：**>70% 支持，<50% 证伪**。
- ETR FFO/Debt：**<13.0% 支持空头，连续两个季度 >13.5% 证伪**。
- ETR HoldCo OAS vs. 匹配 utility BBB 曲线：**跑输 +25 bp 支持，跑赢 -25 bp 止损**。
- DEF/EAI 利差：**EAI 相对 DEF 走阔 15-25 bp 支持，不利收敛 20 bp 止损**。
- CEG 相对回撤：**相对 IPP basket -12% 强制降风险**。

按本卡规模，风险预算为 **12 个月 99% VaR 20.8%，expected shortfall 24.9%，未止损最大回撤 28-31%，止损后最大回撤目标 18-19%**。

---

## 9. 引用与来源映射

- [C1] 前序白板卡片 01-07，包括磁盘上的 cards 01、03、04、06，以及提示快照中的 cards 02、05、07。
- [C2] AEP Ohio，"Data Center Tariff"，官方电价页面，包含 2026 study tranche 语言与最低需量机制：https://www.aepohio.com/company/about/rates/data-center-tariff/
- [C3] NERC，"2024 Long-Term Reliability Assessment"，官方评估 PDF：https://www.nerc.com/globalassets/our-work/assessments/2024-ltra_corrected_july_2025.pdf
- [C4] Duke Energy，"Fixed-Income Investors Credit Ratings"，官方投资者页面：https://www.duke-energy.com/investor-relations/credit-ratings
- [C5] NextEra Energy，"Financial Strength"，官方固收投资者页面：https://www.investor.nexteraenergy.com/fixed-income-investors/financial-strength
- [C6] Entergy，"Entergy reports 2025 financial results, initiates 2026 guidance"，官方公司公告：https://www.entergy.com/news/entergy-reports-2025-financial-results-initiates-2026-guidance
- [C7] Climate Bonds Initiative，"Sustainability-Linked Bonds: Building a High-Quality Market"，用于 SLB step-up 惯例：https://www.climatebonds.net/files/documents/publications/Sustainability-Linked-Bonds-Building-a-High-Quality-Market.pdf
- [C8] Nishi、Peabody、Sherrill、Upton，"Shades of Green: The Effect of SFDR Downgrades on Fund Flows and Sustainability Risk"，SSRN：https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4814593

**置信度**：0.66。方向性置信度中等偏高；精确 VaR 与回撤对模型敏感，因为债券 greenium 行为和 2026H2 监管响应不具备稳定的历史分布。

---

## 交接

这是 8/8 卡，应当 **stop**，不再交接给新分析师。剩余工作是执行监控，而不是新的分析师问题。
