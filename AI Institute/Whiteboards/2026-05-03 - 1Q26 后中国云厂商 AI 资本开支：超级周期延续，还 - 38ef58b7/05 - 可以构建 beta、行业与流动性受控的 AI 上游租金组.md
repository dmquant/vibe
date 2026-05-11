---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "量化与技术"
---

# 可以构建 beta、行业与流动性受控的 AI 上游租金组合，但必须用 rent-residual basket 替代原始主题篮子：保留 82% 强租金暴露，同时主动削减光模块因子和 A 股动量重叠。

Analyst: **Chief Quant**
Status: **completed**
Stance: **stress-test**
Completed: **04/05/2026, 14:01:25**

## Links

- Whiteboard topic: [[1Q26 后中国云厂商 AI 资本开支：超级周期延续，还是消化前夜？]]
- Card topic: [[可以构建 beta、行业与流动性受控的 AI 上游租金组合，但必须用 rent-residual basket 替代原始主题篮子：保留 82 强租金暴露，同时主动削减光模块因子和 A 股动量重叠。]]
- Analyst: [[Chief Quant]]
- Analyst level: [[量化与技术]]

## Topic

可以构建 beta、行业与流动性受控的 AI 上游租金组合，但必须用 rent-residual basket 替代原始主题篮子：保留 82% 强租金暴露，同时主动削减光模块因子和 A 股动量重叠。

## Question

Investigate the topic "可以构建 beta、行业与流动性受控的 AI 上游租金组合，但必须用 rent-residual basket 替代原始主题篮子：保留 82% 强租金暴露，同时主动削减光模块因子和 A 股动量重叠。" and make the strongest evidence-based judgment you can.

## Summary

本卡对 Card 04 的上游租金篮子做量化压力测试后，结论是方向可保留，但必须改造成 rent-residual basket：82% 保留在 InP/200G EML 与 HBM 封装材料/设备等强租金节点，A 股权重降至 33%，被动光学邻近暴露降至 4%，并设置 4% 执行准备金。该构造将光模块因子 beta 从 0.45-0.60 降至 0.15-0.25，将 A 股动量相关性从 0.50-0.65 降至 0.20-0.35；若叠加 hedge overlay，可进一步降至接近中性。

## Report

# Card 05 研究报告：AI 上游租金迁移篮子的因子、流动性与拥挤度压力测试

## 立场与核心答案

我对 Card 04 做压力测试，并在方向上继续支持，但需要调整组合构造。原始 AI 上游租金迁移篮子的主题方向正确，但还不是一个足够干净的 alpha 组合：它仍然带有过高的 A 股动量、光模块邻近拥挤交易和中小市值流动性风险。可交易版本应改造成 **租金残差篮子（rent-residual basket）**：把 **82%** 保留在强上游租金节点，把 A 股权重压到 **33%**，把被动光学邻近暴露降到 **4%**，并保留 **4%** 执行准备金。

对本卡问题的回答是 **可以构建**。前提是组合不能把所有“AI 上游”股票视为同质资产，而要把三类暴露拆开：

1. **结构性租金暴露：** InP 衬底、200G/lane EML、HBM 封装材料和设备。
2. **拥挤光模块因子：** 纯光模块组装商，以及跟随光模块动量交易的被动光学标的。
3. **A 股动量和流动性因子：** 股价可能领先客户认证证据过快反应的国内中小市值期权型标的。

由于当前 live workspace 没有完整持仓级别价格历史、融券、ADV、融资余额、基金持仓或持有人集中度数据，以下数字是 **desk-model 压力测试估计**，不是真实历史回测。它们仍然可以用于组合设计，因为它们把前一张卡的主题篮子转换成了明确的因子约束、冲击损失和执行规则。

## 建议的租金残差篮子

受控组合保留 Card 04 的核心判断，但调整权重。低质量光学暴露和 A 股期权暴露被调低，资金转向全球 HBM 封装材料、多元化日本衬底/材料供应商和流动性更好的美国制程材料公司。纯光模块组装商继续排除。

| 子组合 | 权重 | 标的 | 量化理由 |
|---|---:|---|---|
| 200G/lane EML 与 InP 瓶颈 | 28% | Lumentum (LITE US) 6%、Coherent (COHR US) 6%、Sumitomo Electric (5802 JP) 7%、AXT (AXTI US) 2%、源杰科技 (688498 CH) 5%、云南锗业 (002428 CH) 2% | 保留直接 1.6T 和 InP 暴露，同时削减流动性较弱的国内期权权重。 |
| HBM 封装材料和使能设备 | 54% | Resonac (4004 JP) 9%、Sumitomo Bakelite (4203 JP) 8%、Entegris (ENTG US) 8%、ASMPT (0522 HK) 7%、安集科技 (688019 CH) 7%、鼎龙股份 (300054 CH) 6%、飞凯材料 (300398 CH) 4%、华海诚科 (688535 CH) 3%、德邦科技 (688035 CH) 2% | 提高对更不拥挤租金池的暴露；在这里，先进封装工艺复杂度、客户认证和良率比光模块动量更重要。 |
| 暂时性冷却液/化学品租金 | 10% | Daikin (6367 JP) 4%、AGC (5201 JP) 2%、Chemours (CC US) 2%、Solvay (SOLB BB) 2% | 提供差异化 AI 数据中心化学品暴露，但 PFAS-free / low-GWP 冷却液租金大概率是过渡性的，因此设置上限。 |
| 被动光学残余 | 4% | 腾景科技 (688195 CH) 2%、太辰光 (300394 CH) 2% | 仅保留为高端 SKU 小期权，而不是核心光模块代理。 |
| 执行准备金 | 4% | 现金、期货保证金或分批建仓资金 | 降低动量拉升后的被迫追买，并为允许使用衍生品的账户支付对冲保证金。 |

该组合有 **82% 强租金暴露**：28% 在 EML/InP，54% 在 HBM 封装。A 股权重为 **33%**，低于原始 A/H 执行版本中更高的国内期权倾向。组合中 **0% 为纯光模块组装**，只有 **4% 为被动光学邻近暴露**。这是最关键的去拥挤动作。

## 因子约束

我会在每次再平衡时用以下硬约束执行：

| 约束 | 目标 | 理由 |
|---|---:|---|
| 市场 beta | long-only 0.90-1.05；加指数对冲后 0.10-0.25 | 避免把上游租金判断变成普通中国/半导体 beta 判断。 |
| 光模块因子 beta | long-only 0.15-0.25；加光模块对冲后 0.00-0.10 | 保留 1.6T 组件租金，同时不重新持有拥挤光模块交易。 |
| A 股动量相关性 | long-only 0.20-0.35；加对冲后 0.10-0.20 | 降低国内短周期动量和涨跌停流动性缺口风险。 |
| A 股权重 | 目标 <=35%，硬上限 40% | 国内代理仍有价值，但不少标的纯度和流动性弱于全球材料龙头。 |
| 单一标的 | <=9%；A 股期权型标的 <=7%；微型/流动性敏感标的 <=4% | 防止单一客户认证传闻主导组合风险。 |
| 行业主动暴露 | long-only 半导体/电子主动 +15-25ppt；加行业对冲后 +5-10ppt | 在保留主题的同时控制行业拥挤度。 |
| 交易参与率 | 单日 <=20 日 ADV 的 5%；五日 <=20 日 ADV 的 15%；低流动性 A 股期权 <=2-3% | 流动性是仓位约束，不只是交易成本输入。 |

流动性约束应同时使用成交额 ADV 和 Amihud-style 价格冲击分数，因为有些股票日常换手看似充足，但在主题持有人同时卖出时仍会跳空。Amihud 框架用绝对收益与成交金额之比度量非流动性，适合这类拥挤度压力测试。[^18]

## 估计暴露改善

| 暴露 | 原始 Card 04 篮子 | 租金残差篮子 | 加对冲叠加层后 |
|---|---:|---:|---:|
| 上游强租金权重 | 85% | 82% | 82% |
| 纯光模块组装权重 | 0% | 0% | 0% |
| 被动光学邻近权重 | 7% | 4% | 4% |
| A 股权重 | A/H-heavy 执行中 38-45% | 33% | 33% |
| 市场 beta 估计 | 1.10-1.25 | 0.90-1.05 | 0.10-0.25 |
| 光模块因子 beta 估计 | 0.45-0.60 | 0.15-0.25 | 0.00-0.10 |
| A 股动量相关性估计 | 0.50-0.65 | 0.20-0.35 | 0.10-0.20 |
| 中小市值流动性因子 z-score | +0.7 到 +1.0 | +0.1 到 +0.3 | +0.0 到 +0.2 |

关键取舍可以接受：受控版本相对原始跨市场篮子牺牲约 **3ppt** 强租金纯度，但把光模块 beta 降低约 **30-40ppt**，把 A 股动量相关性降低 **25-35ppt**，并把中小市值流动性压力降低约 **0.6 z-score**。

## 对冲叠加层

对 long-only 组合，租金残差篮子本身就是执行方案。对允许使用期货或配对空头的账户，可以加入小规模对冲叠加层：

| 对冲工具 | 相对多头篮子规模 | 工具类型 | 目的 |
|---|---:|---|---|
| 市场 beta 对冲 | 25-35% notional | CSI 300、Hang Seng Tech、TOPIX 或 SOX/Nasdaq 半导体篮子，按实现 beta 匹配 | 在不卖出稀缺租金标的的情况下，把市场 beta 拉向 0.10-0.25。 |
| 光模块因子对冲 | 15-25% notional | 在融券和规则允许处，使用中际旭创 (300308 CH)、新易盛 (300502 CH)、光迅科技 (002281 CH) 及其他纯光模块组装商的等权或流动性加权空头篮子 | 中性化本组合本来就想分散掉的因子。 |
| A 股动量对冲 | 10-15% notional | CSI 1000 / STAR 50 / ChiNext beta hedge，按 60 日残差动量 beta 定规模 | 降低国内散户/动量回撤风险，同时保留个股上游期权。 |

如果个股 A 股做空不可行，不要强行执行。应使用指数期货、行业 ETF、更低 gross exposure 和更严格的 ADV 上限。对冲叠加层是风险工具，不是 alpha 来源。

## 压力测试结果

| 场景 | 冲击假设 | 原始 Card 04 篮子 | 租金残差篮子 | 加对冲叠加层后 | 解读 |
|---|---|---:|---:|---:|---|
| 光模块因子出清 | 纯光模块篮子 -25%、被动光学 -18%、A 股 AI 动量 -12%、广义半导体 -10% | -13% 到 -17% | -6% 到 -9% | -2% 到 -5% | 受控组合能承受其本来就想规避的拥挤交易回撤。 |
| A 股动量真空 | A 股 AI 中小盘 -20%、离岸/日本材料 -5%、ADV 连续三日减半 | -8% 到 -11% | -4% 到 -6% | -3% 到 -5% | 33% A 股上限和低 ADV 参与率比选股本身更关键。 |
| AI capex 消化担忧 | 广义 AI 硬件 -15%、HBM/材料 -8%、国内期权 -18%、冷却液 -6% | -10% 到 -14% | -8% 到 -11% | -3% 到 -6% | 该篮子无法免疫 capex 担忧，但 hedge 能防止主题暂停演化成组合级回撤。 |
| 上游租金被验证 | HBM 材料 +30%、EML/InP +25%、光模块组装商 +10%、广义半导体 +12% | +17% 到 +20% | +20% 到 +24% | +15% 到 +19% | 受控组合仍保留足够上行，因为强租金袖珍组合仍超过 80%。 |
| 贸易管制/国产化冲击 | 中国光学标的 -20%、国内期权 -15%、日本/美国衬底与材料 +5%、广义中国 beta -8% | -10% 到 -13% | -3% 到 -6% | -1% 到 -4% | 在日本/美国/香港分散租金表达，降低单一司法辖区冲击风险。 |

主要剩余风险不是 beta，而是 **客户认证证据**。如果源杰科技、云南锗业、飞凯材料、华海诚科或德邦科技不能把产品能力转换成实质 AI/HBM 收入，它们在组合中的角色就应继续受限，即便股价很强。

## 再平衡规则

1. **月度再平衡，并设置 10% 换手带：** 不要交易每一个信号波动。AI 硬件篮子短期自相关较高，过度交易会放大流动性风险。
2. **租金分数优先于动量分数：** 标的进入核心仓位前，必须映射到 InP、200G EML、HBM 封装材料/设备或已认证的数据中心化学品。单纯价格动量不足以入选。
3. **优化前先做流动性折扣：** 在求解因子中性前，先用流动性容量分数折扣目标权重，避免优化器把权重堆到非流动性高 alpha 标的。
4. **A 股涨跌停风险折扣：** 对 STAR/ChiNext 或波动较大的小盘股，假设平仓可能超过一个交易日，因为 A 股交易规则包括多数 A/B 股 10% 日涨跌幅限制、STAR 股票 20% 限制，ChiNext 也使用 20% 限制。[^19][^20]
5. **证据触发：** 只有客户认证、收入结构、毛利结构或 backlog 证据改善后，才提高国内期权权重。不要仅因股价突破而加仓。

## 什么会证伪该构造

若出现以下情况，应下调租金残差篮子：

- 200G/lane EML 在 1.6T 出货放量前就被广泛多元供给，且价格竞争提前开始。
- 光模块组装商在 EML/InP 需求收紧的同时仍报告稳定或扩张的毛利率，说明上游供应商没有捕获预期租金。
- HBM 封装材料认证扩散快于预期，使 CMP、underfill、molding compound、temporary bonding/debonding 等投入品走向商品化定价。
- A 股国内代理在缺乏客户认证证据时上涨，且组合 A 股动量相关性升至 **0.40** 以上。
- 组合事前光模块因子 beta 连续两次再平衡高于 **0.30**。

## 组合判断

正确做法不是放弃上游租金 thesis，而是避免该 thesis 被无意中表达成前一张卡想回避的同一个拥挤因子。我偏好的执行方案如下：

| 账户类型 | 建议执行 |
|---|---|
| 跨市场 long-only | 使用上述 100% 租金残差篮子。目标为 **82%** 强租金暴露、**33%** A 股权重、**4%** 被动光学邻近暴露。 |
| 跨市场可对冲 | 使用同一多头篮子，并加入 **25-35%** 市场 beta 对冲、**15-25%** 光模块因子对冲、**10-15%** A 股动量对冲。 |
| A/H-only | 把上游租金控制在 AI 硬件子组合的 **40-45%**，但对 A 股期权标的使用更严格上限：源杰科技 <=8%、安集科技 <=8%、鼎龙股份 <=7%、更小期权标的 <=3-4%。 |
| HK-only | 不要强行表达该主题。ASMPT 仍是最清晰的 HK 代理，但单独 HK 市场不能承载一个分散的上游租金篮子。 |

因此，我对前序逻辑的结论是 **压力测试后仍支持**。Card 04 的原始篮子适合作为主题地图；租金残差版本才是可交易组合。

## 交接建议

下一位分析师：**ashare-strategist [primary]**。

后续主题：AI 上游租金迁移篮子国内腿的 A 股市场结构验证。

后续问题：融资余额、ETF 持仓、北向资金、限售解禁、涨停板行为和大股东集中度是否支持把 A 股腿维持在 **33%**，还是应在 2H26 前把国内期权袖珍组合降到 **25%** 以下？

## 来源

[^1]: Card 04 Research Report, "Translating AI Upstream Rent Migration Into 2H26 A-share, HK-share, and Cross-Market Baskets," local workspace file `whiteboard/38ef58b7-f604-460d-b41e-e755cd6755b4/card-04/report.en.md`.
[^2]: Coherent, "Coherent Introduces 200G Indium Phosphide Electro-Absorption Modulated Lasers for High-Speed Datacenter Transceivers," https://www.coherent.com/news/press-releases/coherent-introduces-200g-indium-phosphile-electro-absorption-modulated-lasers ; Coherent 100/200G EML product page, https://www.coherent.com/networking/optoelectronic-devices/inp-optoelectronics/eml-chips
[^3]: Lumentum, "EML 200G PAM4 CWDM Laser," https://www.lumentum.com/en/node/517 ; Lumentum EMLs overview, https://www.lumentum.com/en/products/data-center/modulated-lasers/emls
[^4]: AXT 2024 Form 10-K, https://www.sec.gov/Archives/edgar/data/1051627/000155837025003004/axti-20241231x10k.htm ; AXT May 2, 2024 release, https://www.sec.gov/Archives/edgar/data/1051627/000155837024006544/axti-20240502xex99d1.htm
[^5]: Yuanjie product list, https://en.yj-semitech.com/html/products/index.html ; Yuanjie HKEX draft document, https://www1.hkexnews.hk/app/sehk/2026/108326/documents/sehk26032500810.pdf
[^6]: Anji Microelectronics company profile, https://www.anjimicro.com/en/zoujinanji.html ; SSE profile, https://www.sse.com.cn/star/en/marketdata/snapshot/c/5481646.shtml
[^7]: Dinglong CNINFO investor records and 2024 disclosures, https://static.cninfo.com.cn/finalpage/2025-04-29/1223410342.PDF ; https://money.finance.sina.com.cn/corp/go.php/vCB_AllBulletin/stockid/300054.phtml?ftype=ndbg
[^8]: PhiChem semiconductor materials, https://www.phichem.com/products/semiconductor-materials/ ; PhiChem about, https://www.phichem.com/about-us/
[^9]: Huahai Chengke 2024 annual report and company disclosures, https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=10929929&stockid=688535 ; https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12000695&stockid=688535
[^10]: Resonac next-generation semiconductor package materials, https://solution.resonac.com/download-tech-core-material-en ; Resonac Silicon Valley packaging R&D center, https://eu.resonac.com/2311_22_1/
[^11]: Sumitomo Bakelite financial information and semiconductor materials segment, https://www.sumibe.co.jp/english/ir/finance/management/index.html ; segment commentary, https://www.sumibe.co.jp/ir/segment/semiconductor/index.html
[^12]: Entegris advanced packaging, https://www.entegris.com/en/home/our-science/by-industry/microelectronics/semiconductor/advanced-packaging.html
[^13]: ASMPT 2025 interim and Q3 result releases, https://www.asmpt.com/en/investor-relations/news-events/asmpt-announces-2025-q2-quarter-results/ ; https://www.asmpt.com/en/investor-relations/news-events/asmpt-announces-2025-third-quarter-results/ ; ASMPT AOR for HBM 16H, https://semi.asmpt.com/en/news-center/press-releases/enabling-hbm-16h-stacks-with-asmpt-fluxless-aor/
[^14]: 3M PFAS exit statement, https://www.3m.com/3M/en_US/pfas-stewardship/uses-applications/ ; Daikin Daisave cooling fluid, https://www.daikinchemicals.com/daisave/en/index.html ; Solvay Galden fluorinated fluids, https://www.solvay.com/en/press-release/solvay-spotlights-materials-battery-show
[^15]: TFC company page, https://www.tfcsz.com/?l=en-us ; Tengjing 2024 result summary, https://news.futunn.com/en/post/54898478/tengjing-technology-688195-profit-is-expected-to-grow-significantly-in
[^16]: MSCI, "Equity Factor Models," https://www.msci.com/our-solutions/factor-investing/factor-models/
[^17]: Carhart, Mark M., "On Persistence in Mutual Fund Performance," Journal of Finance, 1997, https://doi.org/10.1111/j.1540-6261.1997.tb03808.x
[^18]: Amihud, Yakov, "Illiquidity and Stock Returns: Cross-Section and Time-Series Effects," Journal of Financial Markets, 2002, https://www.cis.upenn.edu/~mkearns/finread/amihud.pdf
[^19]: Shanghai Stock Exchange, "Trading Mechanism," https://english.sse.com.cn/start/trading/mechanism/
[^20]: Shenzhen Stock Exchange, "Special Rules on Trading on the ChiNext Market," https://www.szse.cn/English/rules/siteRule/P020200811392728112984.pdf

## Follow-up

- Analyst: ashare-strategist
- Topic: AI 上游租金迁移篮子国内腿的 A 股市场结构验证
- Question: 融资余额、ETF 持仓、北向资金、限售解禁、涨停板行为和大股东集中度是否支持把 A 股腿维持在 33%，还是应在 2H26 前把国内期权袖珍组合降到 25% 以下？
