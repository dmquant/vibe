---
source: ai-institute
resource_type: whiteboard-card
card_index: 7
status: completed
analyst_level: "宏观与策略"
---

# 修订后的杠铃组合仍然做多AI capex，但不再做空流动性：FX名义本金、当日抵押品和期权变现机制必须成为仓位大小的输入。

Analyst: **Asset Allocator**
Status: **completed**
Stance: **synthesize**
Completed: **10/05/2026, 08:21:28**

## Links

- Whiteboard topic: [[AI 硬件 明斯基时刻 叙事 vs 结构性需求：立场何时收敛？]]
- Card topic: [[修订后的杠铃组合仍然做多AI capex，但不再做空流动性：FX名义本金、当日抵押品和期权变现机制必须成为仓位大小的输入。]]
- Analyst: [[Asset Allocator]]
- Analyst level: [[宏观与策略]]

## Topic

修订后的杠铃组合仍然做多AI capex，但不再做空流动性：FX名义本金、当日抵押品和期权变现机制必须成为仓位大小的输入。

## Question

Investigate the topic "修订后的杠铃组合仍然做多AI capex，但不再做空流动性：FX名义本金、当日抵押品和期权变现机制必须成为仓位大小的输入。" and make the strongest evidence-based judgment you can.

## Summary

截至2026-05-10，本卡片综合卡片04的杠铃组合与卡片06的流动性VaR约束：保留22% NAV的AI capex核心仓位，但把总现金/T-bill流动性提高到27% NAV，并拆分为8%当日合格抵押品、3%波动率保证金追加储备、16%可投资干火药。做空美元FX对冲名义本金常态控制在27-30% NAV，硬上限35% NAV；期权对冲按1.75x/2.5x premium、USD/JPY 170、AI篮子-12%、CDX HY +150/+250 bps、Brent $115/$125等触发器预先变现。

## Report

# 卡片 07 - 流动性 VaR 限额下的修订版跨资产配置

截至研究院工作日期 **2026-05-10（Asia/Singapore）**，本卡片综合卡片 04 的杠铃组合与卡片 06 的流动性 VaR 限额。结论是：AI capex 敞口可以保留，但组合不能再把现金视为泛化的“干火药”；必须把外汇对冲名义本金、当日抵押品和期权对冲变现机制硬编码进配置。

- **作者：** 大类资产配置师（`asset-allocator`）
- **白板：** f08eb528-7b4e-4552-8720-573cc311042f，卡片 07/08
- **立场：** synthesize
- **问题：** 基于卡片 06 识别的流动性 VaR 阈值，应如何重设卡片 04 的杠铃组合，使其既保留 AI capex 敞口，又把外汇对冲名义本金、当日抵押品和期权对冲变现机制硬编码进配置？
- **工作区说明：** 任务开始时，实时文件系统缺少 `session-brief.md` 与 `analyst-catalog.json`；共享上下文依据提示快照以及实时存在的卡片 04/卡片 06 文件重建。

## 1. 核心判断

我支持卡片 04 的杠铃结构，但它需要被流动性约束重新定尺。组合不应仅因为外汇保证金螺旋已经可见，就削减 **22% NAV 的 AI capex 核心仓位**。卡片 06 的压力测试表明，真正的约束不是预期收益，而是在 **USD/JPY 触及 170-172**、AI 硬件篮子下跌 **12-15%**、合格现金低于 **8% NAV** 时，组合能否满足当日现金调用。

修订后的设计应是一个 **抵押品化杠铃组合**：

- 保留 **22% NAV** 的 AI capex 核心仓位。
- 将总现金/T-bill 流动性提高到 **27% NAV**，但拆分为 **8% 当日合格抵押品**、**3% 波动率保证金追加储备**、**16% 可投资干火药**。
- 将做空美元的外汇对冲名义本金约束在针对美元折算 AI 资产的 **55-60% 工作对冲比例** 与 **70% 硬上限** 之内；组合层面，做空美元对冲名义本金通常应为 **27-30% NAV**，没有预融资抵押品时不得超过 **35% NAV**。
- 将期权对冲从账面估值转化为清算瀑布：在卖出核心 AI 持仓前，按预设触发器变现 HY、AI-vol 与能源凸性。

相较卡片 04，修订组合会牺牲部分中性情景收益，因为流动性从约十几个点提高到 **27% NAV**。这是正确的交换。卡片 06 显示，代表性 AI-hedged carry 组合在压力下的 1 日 99% P&L VaR 可从 **5.0-5.8%** 升至 **9.5-11.5%**；若现金低于 **10% NAV**，流动性突破概率为 **60-75%**。如果组合希望在该路径中持有 AI capex 主题，就必须在冲击发生前预先融资抵押品，而不是事后补救。

## 2. 修订后的 100% NAV 配置

| 资产袖 | 修订权重 | 相对卡片 04 变化 | 角色 |
|---|---:|---:|---|
| AI capex 核心权益 | **22%** | 不变 | 保留 hyperscaler、算力、亚洲供应链与电网资本开支敞口 |
| 全球除美质量股 | **10%** | -3 pp | 多元化，但为流动性让出预算 |
| 投资级信用 | **8%** | -2 pp | 套息，同时降低融资渠道利差走阔风险 |
| 5-10 年 TIPS | **8%** | 不变 | 替代名义久期的通胀联动压舱石 |
| 黄金 | **6%** | +1 pp | 美联储信用与抵押品质量对冲 |
| 能源股 carry | **4%** | 从 Pillar A 重分类 | 有股息的能源敞口，可先于 AI 核心被减持 |
| 能源期权凸性 | **3%** | 属于 Pillar A | Brent/WTI 看涨价差；有限权利金、油价冲击凸性收益 |
| 曲线/期限溢价叠加 | **7%** | -1 pp | 2s10s 陡峭化、TLT 看跌价差、受控 DV01 |
| HY / AI-vol 凸性 | **5%** | 位于卡片 04 高端 | CDX HY payer spreads 与 AI 篮子 long vol |
| 当日合格抵押品 | **8%** | 新硬下限 | 可依法且可操作用于 FX 变动保证金的现金/T-bills |
| 波动率保证金追加储备 | **3%** | 新储备 | 专用于交易所/PB 保证金上调；不算干火药 |
| 可投资干火药 | **16%** | 明确拆分 | 仅在抵押品下限满足后才可再加风险的 3m T-bills |
| **合计** | **100%** |  |  |

核心调整不是看空 AI，而是融资结构调整。风险资产小幅下降，但 AI 核心仓位保持不变。削减来源于全球除美质量股、投资级信用，以及期限溢价叠加中相对不解决卡片 06 现金时点问题的部分。

## 3. 外汇对冲预算

外汇预算应以名义本金和抵押品表达，而不只是对冲比例。

| 规则 | 限额 | 组合含义 |
|---|---:|---|
| 做空美元工作对冲比例 | 美元折算 AI 资产的 **55-60%** | 常态运行区间，避免落入卡片 06 的过度对冲 carry 结构 |
| 硬性对冲上限 | 美元折算 AI 资产的 **70%** | 必须有预融资抵押品，且不能突破 8% 当日现金下限 |
| 组合层面做空美元名义本金 | 常态 **27-30% NAV**；硬上限 **35% NAV** | 若 USD/JPY 从 155 升至 170，FX 现金损失常态约 **2.6-2.9% NAV**，上限约 **3.4% NAV**，低于卡片 06 中 55% NAV 对冲导致的 **5.3% NAV** 压力损失 |
| 压力治理触发器 | USD/JPY **170** 或 AI 篮子回撤 **12%** | 不新增 AI 总敞口；启动期权变现 |
| 自动去风险触发器 | 当日抵押品低于 **8% NAV** | 先削减 FX 对冲，再卖低确信度 beta；不能从核心 AI 开始 |

实际组合指令很简单：本币投资人可以对冲美元资产，但对冲本身不能成为强制卖出的主因。若交易台希望超过 **60%** 工作对冲比例，必须预融资增量变动保证金，并说明哪个抵押品账户可当日满足调用。

## 4. 当日抵押品瀑布

卡片 06 的核心洞见是：一个长期正确的主题可能因短期抵押品问题被迫平仓。因此修订配置把流动性拆成三个明确账户：

1. **当日合格抵押品：8% NAV。** 这不是抄底资金，而是已经映射到 FX 与 prime broker 保证金账户的现金、Treasury bills 或 repo 合格抵押品。
2. **波动率保证金追加储备：3% NAV。** 当 AI 硬件波动率倍增时，用来覆盖 SPAN/PB 保证金的机械上调。不得用于新增多头。
3. **可投资干火药：16% NAV。** 只有在预测未来 48 小时保证金调用后，当日抵押品仍不低于 **8% NAV** 时，才可再部署。

操作规则：

- 当日抵押品低于 **9% NAV** 时，暂停主动加风险。
- 当日抵押品低于 **8% NAV** 时，先变现期权并降低 FX 对冲名义本金，再卖 AI 股票。
- 当日抵押品低于 **7% NAV** 时，降低总敞口，并停止把 VaR 视为充分风控指标；组合进入流动性治理。

这改变了现金的含义。卡片 04 的干火药部分是机会储备；卡片 07 的前 **11% NAV** 流动性完全不是机会资金，而是持有 AI 核心穿越美元冲击所需支付的成本。

## 5. 期权变现规则

组合不应在压力窗口等待临场判断。对冲的目的就是在需要时转化为抵押品。

| 对冲 | 变现触发器 | 动作 |
|---|---|---|
| AI 篮子 long vol / variance | 期权价值达到 **1.75x premium**，或 USD/JPY >= **170** 且 AI 篮子回撤 >= **12%** | 变现 **25%**，收益转入当日抵押品 |
| AI 篮子 long vol / variance | 期权价值达到 **2.5x premium**，或当日抵押品 < **8% NAV** | 再变现 **50%**；保留 **25%** 作为尾部 runner |
| CDX HY payer spreads | CDX HY OAS 较 2026-04-30 现货走阔 **+150 bps** | 变现 **50%**，补充抵押品账户 |
| CDX HY payer spreads | CDX HY OAS 走阔 **+250 bps**，或 FX 对冲损失超过 **3% NAV** | 在卖出核心 AI 前，变现剩余可流动部分 |
| Brent / WTI 看涨价差 | Brent 在 2026-07-15 前收于 **$115/b** 以上，或价差价值达到 **2x premium** | 变现 **三分之一**，同时保留对冲 |
| Brent / WTI 看涨价差 | Brent 收于 **$125/b** 以上，或能源冲击与当日抵押品 < **8% NAV** 同时出现 | 再变现 **三分之一**；保留三分之一应对非线性尾部 |
| TLT 看跌价差/陡峭化收益 | 10y term premium > **+75 bps**，或 2s10s 达到 **100 bps** | 在增加方向性风险前，先把收益转入抵押品 |

清算顺序为：当日抵押品、期权变现、宽基指数/期货 beta 削减、低确信度能源或除美权益、最后才是核心 AI。这样才能避免卡片 06 所指出的失败模式：在第一轮波动缺口中卖出现金流质量最高的 AI 资产。

## 6. 调整后的压力特征

| 指标 | 卡片 06 代表性组合 | 卡片 07 修订预算 | 含义 |
|---|---:|---:|---|
| 压力下 1 日 99% P&L VaR | **9.5-11.5% NAV** | 目标 **7.0-8.5% NAV** | 更低的对冲名义本金与更高流动性降低强制卖出路径 |
| USD/JPY 155 -> 170 下的 FX 变动保证金 | **5.3% NAV** | **2.6-3.4% NAV** | 做空美元对冲名义本金在压力前被封顶 |
| 当日合格抵押品 | **12% 总现金中约 7-9% 可用** | **8% 硬下限 + 3% 保证金储备** | 抵押品事前指定，而不是从现金余额推断 |
| 压力触发后的流动性突破概率 | 现金 <10% 时 **60-75%** | 若规则被执行，目标低于 **30-40%** | 仍是压力组合，但在 USD/JPY 170 处不再机械化强制卖出 |
| AI 核心权重 | 非重点 | **22% NAV 不变** | 主题被保留，融资通道被修复 |

目标突破概率是治理估计，不是历史回测。它依赖于真实执行对冲上限、抵押品隔离和变现触发器。如果交易台在当日抵押品下降时仍把 **16% NAV** 可投资干火药当成自由资本，这个设计就会失效。

## 7. 再加风险决策规则

只有在流动性条件已经修复时，组合才应增加风险：

- 只有当 Q2 hyperscaler capex 指引再次上修至 **$725B annualized** 以上、HY 利差没有走阔、且压力预测后当日抵押品仍高于 **9% NAV** 时，才向 AI capex 核心增加 **2-3% NAV**。
- 若 Brent 在 2026-07-15 高于 **$115/b**，且期权账簿已变现足够收益使抵押品保持在 **8% NAV** 以上，才向能源期权凸性增加 **2% NAV**。
- 若 CDX HY 走阔 **+150 bps** 但 AI capex 预期保持完整，应增加 HY/AI-vol 对冲；这是融资渠道明斯基路径，而不是立即放弃 AI 核心的理由。
- 只有当卡片 04 的就业断裂触发器出现，即 3 个月平均 payrolls 低于 **+60k** 且 U-3 高于 **4.6%** 时，才削减 **5-7% NAV** 权益 beta。
- 若 USD/JPY 高于 **170** 且当日抵押品低于 **8% NAV**，将 FX 对冲比例降至 **40-50%**。若对冲正在导致强制卖出，它就不再是风险降低工具。

## 8. 与前序卡片的综合关系

本卡片是综合，而不是否定前序推理。

- **卡片 04 的宏观结构仍然正确：** AI 核心加 TIPS、黄金、能源凸性、曲线陡峭化与 HY/vol 对冲，在 higher-for-longer 能源冲击下优于传统 60/40。
- **卡片 06 改变的是操作系统：** 不能依赖未变现的账面对冲。当 USD/JPY 接近 170 时，流动性 VaR 成为真正约束。
- **本卡片的新贡献是执行纪律：** FX 名义本金、当日抵押品和期权变现机制现在是仓位大小的输入，而不是事后风险提示。

底线：修订后的杠铃组合仍然做多 AI capex，但不再做空流动性。这是在外汇抵押品冲击中持有结构性主题的最低条件。

## 9. 交接

建议下一位分析师：**chief-strategist**。

跟进主题：AI 硬件明斯基争论的最终收敛图与实施 dashboard。

跟进问题：基于卡片 01-07，哪三种 dashboard 状态应驱动最终组合立场 - 建设性收敛、流动性治理杠铃、悲观去风险 - 以及哪些精确信号组合会促使投委会从一种状态切换到另一种？

交接理由：`chief-strategist` [primary, horizon] 最适合下一步，因为剩余任务是把完整宏观/策略链条综合成最终 dashboard 与投委会立场。此处不应再次交接 reviewer：卡片 06 已经使用了持仓级亏损与保证金追加风险这一具体 reviewer 触发条件，而卡片 07 已把该风险转化为配置规则。

## 来源

- 内部前序卡片：`card-04/report.en.md` 提供原始杠铃配置；`card-06/report.en.md` 提供流动性 VaR 阈值、FX 对冲上限、抵押品下限和期权变现要求。
- 卡片 04 继承卡片 03 的数据锚：EIA STEO 4 月 7 日发布；BLS 3 月 CPI 4 月 10 日发布；BEA 3 月 PCE 4 月 30 日发布；BEA GDP advance estimate 4 月 30 日发布；BLS payrolls 4 月 8 日发布；FOMC 4 月 29 日 statement 与 implementation note；3 月 18 日 SEP。
- 卡片 04 也继承卡片 02 的锚点：Q1 2026 hyperscaler earnings；4 月 30 日 UST yield curve 与 IG/HY OAS prints。
- BIS, **OTC foreign exchange turnover in April 2022**：日均成交 $7.5 trillion，FX swaps 占 51%，USD 占 88%，JPY 占 17%。https://www.bis.org/statistics/rpfx22_fx.htm
- BIS Quarterly Review, **International finance through the lens of BIS statistics: the global reach of currencies**：美元挂钩 FX 衍生品义务与表外流动性风险。https://www.bis.org/publ/qtrpdf/r_qt2406b.htm
- CME Group, **SPAN Methodology Overview**：margin arrays、price scan ranges、volatility scan ranges 与组合压力测试。https://www.cmegroup.com/solutions/risk-management/performance-bonds-margins/span-methodology-overview.html
- Financial Stability Board, **Liquidity Preparedness for Margin and Collateral Calls**，2024 年 4 月 17 日咨询报告。https://www.fsb.org/2024/04/liquidity-preparedness-for-margin-and-collateral-calls-consultation-report/
- Federal Reserve, **Financial Stability Report**，2025 年 4 月概览，数据截至 2025 年 4 月 11 日，涉及 hedge fund leverage 与 margin-call unwinds。https://www.federalreserve.gov/publications/April-2025-financial-stability-report-Overview.htm
- IMF, **Global Financial Stability Report**，2025 年 4 月，涉及 elevated financial stability risk、leveraged institutions、margin calls 与 NBFI deleveraging。https://www.imf.org/en/publications/gfsr/issues/2025/04/22/global-financial-stability-report-april-2025

卡片 07 未引入新的外部数据；贡献在于把已经引用的卡片 04 与卡片 06 证据转译为配置。

---

**元数据页脚：** 卡片 07 完成于 **2026-05-10（Asia/Singapore）**。

## Follow-up

- Analyst: chief-strategist
- Topic: AI硬件明斯基争论的最终收敛图与实施dashboard
- Question: 基于卡片01-07，哪三种dashboard状态应驱动最终组合立场——建设性收敛、流动性治理杠铃、悲观去风险——以及哪些精确信号组合会促使投委会从一种状态切换到另一种？
