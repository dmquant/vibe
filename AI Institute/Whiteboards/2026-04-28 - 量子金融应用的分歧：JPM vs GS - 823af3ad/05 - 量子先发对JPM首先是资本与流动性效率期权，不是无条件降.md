---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "风控与合规"
---

# 量子先发对JPM首先是资本与流动性效率期权，不是无条件降险工具；真正的风控重点在于防止VaR/RWA表面优化掩盖模型、CCP和量子安全尾部风险。

Analyst: **Chief Risk Officer**
Status: **completed**
Stance: **stress-test**
Completed: **28/04/2026, 15:50:17**

## Links

- Whiteboard topic: [[量子金融应用的分歧：JPM vs GS]]
- Card topic: [[量子先发对JPM首先是资本与流动性效率期权，不是无条件降险工具；真正的风控重点在于防止VaR RWA表面优化掩盖模型、CCP和量子安全尾部风险。]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

## Topic

量子先发对JPM首先是资本与流动性效率期权，不是无条件降险工具；真正的风控重点在于防止VaR/RWA表面优化掩盖模型、CCP和量子安全尾部风险。

## Question

Investigate the topic "量子先发对JPM首先是资本与流动性效率期权，不是无条件降险工具；真正的风控重点在于防止VaR/RWA表面优化掩盖模型、CCP和量子安全尾部风险。" and make the strongest evidence-based judgment you can.

## Summary

本卡压力测试JPM相对GS的量子先发情景。结论是：组合保证金/抵押品优化更可能改善单位客户流的流动性与RWA效率，而长尾exotic更可能改善定价、Greek和对冲能力；但这些收益不会在2026-2027直接反映为SCB下降，且会带来模型不确定性、CCP集中度、抵押品同质化和量子安全迁移失败等左尾风险。JPM应把量子节约的一部分转为模型风险储备和流动性缓冲；GS短期风险更可解释，但若2027-2028量子优势提前可用，将面临资本效率追赶压力。

## Report

# 量子先发情景下JPM与GS的VaR、SCB、RWA与尾部风险压力测试

## 结论先行：支持“穿透点”判断，但必须把量子优势当作模型风险而非只当效率红利

本卡采取 **stress-test** 立场。对前序卡片“量子优势最先穿透组合保证金/抵押品优化与长尾exotic”的判断，我总体支持，但需要补上一条风控约束：量子先发不会线性降低JPM的风险资本，反而会先把风险从“算不动”迁移到“模型依赖、集中度和操作韧性”。在2026-2028监测期，JPM相对GS的优势若出现，最可能表现为单位客户流和单位库存占用下更低的保证金、融资消耗与报价误差，而不是表内VaR即时下降。

本报告的核心判断是：**JPM的量子先发优势在组合保证金/抵押品优化上偏向降低流动性尾部和部分RWA密度，在长尾exotic上偏向提升定价与对冲能力，但同时提高模型不确定性、CCP集中度和量子安全迁移失败的尾部损失；GS短期更少承担模型前沿风险，但在硬件或算法提前突破时，会承受更高的资本效率追赶压力。**

需要说明：现场共享目录实际缺失 `session-brief.md`、`analyst-catalog.json`、`card-02/report.md`、`card-04/report.md` 和 `card-05/` 初始目录。本报告按用户消息中的 Session Brief Snapshot、已读到的 `card-03/report.md`、以及本卡补充的公开披露资料重建上下文。

## 1. 风控基线：两家银行的风险资本起点并不对称

| 指标 | JPMorgan Chase | Goldman Sachs | 风控含义 |
| :--- | :--- | :--- | :--- |
| 2025管理VaR | Total VaR均值 $40mn；CIB VaR均值 $37mn；CIB trading VaR均值 $34mn | 平均日VaR $90mn；期末VaR $79mn；高点 $116mn | GS交易账簿VaR强度更高；JPM集团更大但交易VaR相对更分散。 |
| 2025市场风险RWA | Standardized market risk RWA $92.283bn；Advanced market risk RWA $92.998bn | Market RWAs $84.519bn，其中Regulatory VaR $14.716bn、Stressed VaR $43.189bn | 两者市场风险RWA规模接近，量子若影响交易账簿资本，绝对空间都足够大。 |
| 2025总RWA | Standardized $1.982tn；Advanced $2.045tn | Standardized $727.338bn；Advanced $691.470bn | JPM集团RWA巨大，单一量子应用更难显著改变集团CET1；GS对交易资本效率改善更敏感。 |
| SCB与CET1要求 | SCB 2.5%，Standardized CET1要求11.5%，并延续至2027年9月30日 | SCB 3.4%，Standardized CET1要求10.9%，并延续至2027年9月30日 | GS的SCB较2024显著下降；JPM为SCB floor。量子优势短期更可能改变内部经济资本和业务约束，而非官方SCB。 |
| Fed 2026压力测试暴露 | JPM、GS均纳入global market shock和counterparty default | 同左 | 监管压力测试已经覆盖大交易账簿和最大交易对手违约，但不覆盖“量子模型迁移失败”这种新型技术-市场复合风险。 |

资料基线来自JPM 2025 Form 10-K、GS 2025 Form 10-K以及Fed 2026 stress-test公告。JPM披露其2025 Total VaR均值为 $40mn，2025年Standardized/Advanced总RWA分别为 $1.982tn/$2.045tn，市场风险RWA约 $92bn；GS披露2025平均日VaR为 $90mn，Market RWAs为 $84.519bn，Standardized总RWA为 $727.338bn。Fed在2026年2月4日确认2026压力测试包括严重全球衰退、房价约30%下跌、商业地产价格约39%下跌，并要求JPM和GS纳入global market shock和counterparty default。

## 2. 穿透点一：组合保证金/抵押品优化的风险传导

组合保证金与抵押品优化不是单纯的“降低VaR”工具。它的风控价值来自三层传导：更精细地识别净额抵消关系、更快地重配可交割抵押品、更有效地在CCP、双边CSA、PB融资和内部限额之间选择最优路径。量子或混合量子-经典算法如果在2027-2028年前后取得可验证优势，最可能先影响以下指标。

| 维度 | JPM量子先发的正向效应 | 需要压力测试的反向效应 |
| :--- | :--- | :--- |
| VaR | 对管理VaR的直接影响有限；如果算法支持更低库存、更高净额抵消和更快风险压缩，CIB trading VaR波动可能下降 | VaR可能被“优化后组合”短期压低，但极端相关性破裂时净额抵消失效，VaR低估跳跃损失 |
| SCB | 官方SCB在2026-2027已被Fed维持，不会因量子工具即时下降；长期若交易损失路径更稳定，才可能影响监管模型输入 | 更复杂的保证金策略可能在监管审查中被视为模型依赖增强，若压力亏损或操作事件上升，SCB收益被抵消 |
| RWA | 可能降低证券融资、衍生品替换成本、CVA和部分market risk RWA密度；对JPM这种总RWA接近 $2tn 的银行，集团层面影响会被稀释 | 若优化诱导更多客户流和更大名义规模，Credit RWA、SFT RWA和CCP默认基金贡献可能上升，抵消单位资本节约 |
| Tail risk | 降低常态下IM、VM与流动性缓冲占用，提升抵押品周转 | 增加共同拥挤交易、同质化抵押品选择和CCP集中度；在全市场去杠杆时形成“优化算法同向卖出” |

风控上应把组合保证金量子优势分成两类。第一类是 **真降险**：减少同一风险因子在多个账簿中的重复资本占用，降低错配抵押品和不必要的融资成本。第二类是 **风险搬家**：把显性保证金需求从当期报表移到极端压力下的流动性缺口、CCP集中度和模型假设风险。JPM如果领先，短期更可能赢在第一类；真正的尾部损失来自第二类。

对GS而言，等待策略的短期优势是模型治理更保守、被监管质疑的前沿算法风险更少。但如果JPM能用量子/混合算法持续降低PB、客户清算、结构化融资和跨资产组合的单位资本消耗，GS会面临两种压力：要么接受较低报价竞争力，要么用更多RWA和流动性缓冲支持同等客户流。

## 3. 穿透点二：长尾exotic的风险传导

长尾exotic的量子价值更接近“更高精度的尾部定价与Greek估计”，尤其是多资产、路径依赖、障碍、callable、auto-callable、相关性和局部/随机波动率组合产品。量子振幅估计在理论上能改善蒙特卡洛误差收敛，但实际价值受数据加载、状态制备、噪声、误差校正和payoff映射约束。AWS/Goldman Sachs对组合优化量子内点法的端到端资源估算提醒我们，理论加速与可生产应用之间可能差几个数量级。

| 维度 | JPM量子先发的正向效应 | 需要压力测试的反向效应 |
| :--- | :--- | :--- |
| VaR | 更快重估复杂路径和跨资产相关性，有助于日内风险刷新与对冲误差监控 | 长尾产品往往不服从VaR假设；95%或99% VaR可能看不到knock-in、gap、相关性断裂和流动性消失 |
| SCB | 若复杂产品损失路径在监管冲击中更可控，长期有助于降低交易损失尾部 | 模型透明度不足、验证样本稀缺、客户集中敞口上升，可能提高监管模型覆盖成本和资本附加 |
| RWA | 更精确的XVA、CVA和hedging simulation可能降低未充分对冲的市场风险RWA和CVA capital消耗 | 新模型如果无法通过独立验证或监管认可，内部经济资本可能下降但监管RWA不降，形成“前台收益、资本不认”的错配 |
| Tail risk | 更早识别稀有路径，可降低库存持有期和对冲滑点 | 报价优势可能吸引更多非标准长尾风险进入JPM账簿，形成模型驱动的复杂性集中 |

本质上，长尾exotic的风险不是“JPM算得更快所以风险更低”，而是“JPM可能更愿意承接别人不愿承接的长尾结构”。这会把JPM的业务边界推向更高模型复杂度。若模型治理跟不上，JPM的左尾会更厚；若模型治理领先，JPM则可能把GS挤到更标准化、低margin但资本效率更稳的产品线上。

## 4. 对VaR、SCB、RWA和tail profile的方向性判断

| 指标 | JPM在量子先发情景下 | GS在相对等待情景下 | 2026-2028监测重点 |
| :--- | :--- | :--- | :--- |
| 管理VaR | 常态可能小幅下降或更稳定，尤其是CIB trading VaR和日内风险刷新；但极端日最大VaR可能更跳跃 | 平均VaR可能不劣化，但复杂产品报价和库存周转劣势可能需要更高风险限额补偿 | 看平均VaR/收入、VaR/market RWA、VaR异常值、高低点差距，而不是只看总VaR |
| 监管VaR与stressed VaR | 只有当模型进入监管认可的风险框架，才影响market RWA；2026-2028更可能先影响内部限额 | 短期监管资本稳定；若客户流流失则market RWA可能下降但收入质量下降 | 看Pillar 3中Regulatory VaR、Stressed VaR、backtesting exception和model/data change |
| SCB | 2026-2027受Fed维持现有SCB影响，官方SCB不应被视为量子红利指标 | 3.4% SCB已较高点下降，短期不是量子分歧信号 | 2027后看global market shock损失、trading and counterparty losses、PPNR稳定性 |
| RWA | 组合保证金可能降低单位RWA密度，但业务扩张可能推高绝对RWA；集团总RWA太大，信号会被稀释 | 绝对RWA较小，对交易资本效率更敏感；等待策略若错失优化，会体现为RWA/GBM收入走高 | 看Market RWA、SFT RWA、Derivatives Credit RWA、CVA、default fund contribution |
| Tail profile | 右尾是资本效率与报价权；左尾是模型失效、抵押品错配、CCP集中和量子安全事件 | 左尾较少来自前沿模型，更多来自失去高margin客户流后被动追赶和外部供应商依赖 | 同时做技术、市场、流动性、操作、法律与声誉复合压力测试 |

我的压力测试结论是：**JPM的量子先发改善的是“单位风险的处理能力”，不是消除风险本身。若前台把这项能力用于扩张长尾账簿，JPM的VaR均值可能更漂亮，但尾部亏损分布会更肥。GS则相反，短期VaR/SCB/RWA更可解释，但若错过资本效率拐点，可能在2027-2028后被迫以更高RWA或更低报价margin保客户。**

## 5. 2026-2028必须纳入的定期stress-test场景

### 场景A：量子安全前置威胁与PQC迁移失败

触发条件：NIST后量子标准已在2024年发布，G7 Cyber Expert Group在2026年提出金融业协调迁移路线图；若2026-2028出现“harvest now, decrypt later”事件、关键供应商PQC迁移延迟、证书/密钥轮换失败或跨境监管要求不一致，金融机构会面临操作、声誉、法律和流动性复合冲击。

压力设定：

| 因子 | 压力冲击 |
| :--- | :--- |
| 操作风险 | 关键交易、清算、托管、客户门户或内部模型平台暂停24-72小时 |
| 市场风险 | 信用利差扩大、银行股下跌、波动率跳升，叠加客户提前终止和抵押品替换 |
| 流动性风险 | 客户提高现金抵押品偏好，非现金抵押品haircut扩大10-30个百分点 |
| 资本风险 | 操作风险损失、法律准备金、补救成本、客户赔偿与收入损失进入SCB叙事 |

JPM相对GS的测试重点：JPM若量子安全布局领先，应证明其PQC/QKD/crypto-agility不是单点实验，而是覆盖清算、支付、数据、模型、供应商和客户接口。GS若依赖外部供应商，应测试供应商不可用和标准切换失败。

### 场景B：量子/混合模型不确定性和模型漂移

触发条件：量子优化或QAE模块被嵌入保证金、抵押品分配、exotic定价、XVA或场景生成，但在极端行情中出现训练样本失效、量子噪声偏差、参数漂移或经典benchmark不可复现。

压力设定：

| 因子 | 压力冲击 |
| :--- | :--- |
| 模型误差 | exotic公允价值出现25-100bp系统性偏差；尾部Greek误估30%-50% |
| 相关性断裂 | 跨资产相关性从历史分位数反转到99%压力分位，净额抵消收益减少50%-80% |
| VaR backtest | 10个交易日内出现多次VaR exception，监管VaR multiplier或内部资本附加上升 |
| 对冲成本 | bid-ask扩大2-5倍，长尾对冲工具流动性消失，库存持有期延长 |

JPM相对GS的测试重点：JPM应对每个量子模块设置“经典shadow model”和kill switch，禁止前台只用量子模型降低保证金或扩大库存；GS应测试在追赶期引入第三方量子模型时的验证缺口、数据血缘和审计可解释性。

### 场景C：CCP集中度、初始保证金跳升和客户清算迁移失败

触发条件：Fed在2025金融稳定材料中强调CCP初始保证金和预先出资资源处于高位，同时客户抵押品高度集中于最大清算会员。若市场波动、国债基差交易去杠杆或信用/商品冲击导致多个CCP同步提高IM，JPM/GS作为大型清算会员会面临日内流动性压力。

压力设定：

| 因子 | 压力冲击 |
| :--- | :--- |
| IM/VM | 主要CCP初始保证金上调30%-75%，同时出现大额日内VM call |
| 客户集中 | 前五大客户占用IM集中度上升，1-2个客户无法及时补缴保证金 |
| 头寸迁移 | 某清算会员退出或违约，客户头寸转移失败，集中组合需要折价平仓 |
| 抵押品错配 | 可交割HQLA不足，非现金抵押品haircut上升，内部抵押品优化模型输出不可执行 |

JPM相对GS的测试重点：JPM量子优化若把大量业务导向少数最优CCP或抵押品篮子，必须测试“最优路径被关闭”的情形；GS若因资本效率落后而保留更多传统缓冲，应评估其缓冲是否足以抵消报价劣势。

### 场景D：长尾exotic拥挤和客户提前赎回/敲入冲击

触发条件：JPM凭更快定价和对冲能力拿到更大长尾结构化票据份额，但市场发生单边跳跃、vol-of-vol上升、相关性断裂、客户集中赎回或敲入事件。

压力设定：

| 因子 | 压力冲击 |
| :--- | :--- |
| 标的冲击 | 股票指数-25%、利率曲线非平行移动150-250bp、信用指数+150bp、FX跳空5%-10% |
| 波动率冲击 | 隐含波动率上升2-3倍，skew/tail bid急剧变陡 |
| 相关性冲击 | 多资产结构产品相关性从分散变为同跌，barrier集中触发 |
| 对冲约束 | 关键对冲工具交易容量下降50%-80%，客户提前终止请求集中出现 |

JPM相对GS的测试重点：JPM要证明报价优势没有变成“低估复杂性溢价”；GS要证明没有因失去高margin产品而在剩余标准化业务中加杠杆补收益。

### 场景E：量子优势反噬的市场结构冲击

触发条件：市场发现一家或数家银行在保证金/抵押品优化上具备明显优势，客户流向头部平台集中，弱势对手行被迫追赶，形成报价拥挤和流动性依赖。

压力设定：

| 因子 | 压力冲击 |
| :--- | :--- |
| 客户流 | 复杂衍生品和PB客户流向JPM集中，JPM内部限额快速占满 |
| 竞争行为 | GS及其他同业降价追赶，风险溢价被压低 |
| 资本反馈 | JPM绝对RWA上升但单位收入RWA下降；GS单位收入RWA上升或margin下降 |
| 系统性尾部 | 多家银行使用类似优化目标，压力日出现同向抵押品替换、同向减仓和同向CCP资源消耗 |

这一场景是本卡最需要强调的新增风险：量子优势如果被证明有效，行业不会静态接受JPM领先，而会通过客户流集中、供应商集中和模型同质化把单家技术优势转化为系统性拥挤风险。

## 6. 监测Dashboard：2026-2028季度更新

| 指标组 | JPM领先但风险可控的信号 | 风险恶化信号 |
| :--- | :--- | :--- |
| VaR与收入质量 | VaR/Markets收入下降，同时VaR exception不增加 | 平均VaR下降但max VaR、stress loss或backtesting exception上升 |
| RWA效率 | Market RWA/Markets收入、Derivatives Credit RWA/客户流下降 | 绝对RWA快速扩张，CVA或SFT RWA上升抵消优化收益 |
| 保证金与抵押品 | 单位客户流IM、VM流动性消耗下降，抵押品失败率低 | 抵押品集中于少数资产、少数CCP、少数客户，日内流动性缺口扩大 |
| Exotic模型 | 量子模型与经典shadow model误差稳定，独立验证通过率高 | 估值调整、模型储备、Day-1 P&L deferral或客户争议增加 |
| CCP集中度 | Top CCP和top client暴露受限，客户头寸可迁移 | 前五大客户IM集中度、default fund contribution、concentration add-on上升 |
| 量子安全 | PQC迁移覆盖率、密钥轮换、供应商证明材料按计划推进 | 关键系统仍依赖RSA/ECC legacy、供应商未能证明crypto-agility |

## 7. 对JPM与GS的风控建议

对JPM：允许量子先发进入组合保证金和长尾exotic试点，但必须设置三道硬约束。第一，所有量子或混合模型必须有经典shadow model、独立验证和回滚机制。第二，前台不能把量子节约的保证金全部再杠杆化，至少应把一部分节约转入流动性缓冲和模型风险储备。第三，CCP、抵押品资产、供应商和客户集中度要设独立限额，不能由同一个优化目标函数同时决定。

对GS：等待策略不等于无风险。GS应把2026-2028作为“可逆等待”窗口：保留经典基准优势，同时在组合保证金、XVA、exotic Greeks、PQC迁移和第三方量子模型验证上建立最低可切换能力。若JPM开始披露或市场观察到其单位RWA客户流优势，GS必须立即从观察转向并行生产测试。

## 8. 交接建议

下一张卡建议交给 `compliance-officer`。理由是本卡已经把量子先发的关键风险从交易损失扩展到监管认可、模型治理、客户披露、PQC迁移、供应商依赖和CCP集中度；这不是单纯的市场风险问题，而是需要合规和监管政策框架判断：在2026-2028期间，哪些量子模型应用应被纳入模型风险管理、客户披露、第三方风险管理、网络韧性和监管沟通清单。

## 主要资料来源

- JPMorgan Chase 2025 Form 10-K：https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf
- Goldman Sachs 2025 Form 10-K / Annual Report：https://d3cobg6h0snvt3.cloudfront.net/investor-relations/financials/current/annual-reports/2025/annual-report.pdf
- Federal Reserve 2025 Dodd-Frank stress-test results：https://www.federalreserve.gov/publications/2025-june-dodd-frank-act-stress-test-results.htm
- Federal Reserve 2026 stress-test scenario announcement：https://www.federalreserve.gov/newsevents/pressreleases/bcreg20260204a.htm
- Goldman Sachs statement on Stress Capital Buffer：https://www.goldmansachs.com/pressroom/press-releases/2025/goldman-sachs-statement-on-stress-capital-buffer
- NIST post-quantum cryptography standards announcement：https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards
- G7 Cyber Expert Group PQC roadmap for the financial sector：https://www.gov.uk/government/publications/advancing-a-coordinated-roadmap-for-the-transition-to-post-quantum-cryptography-in-the-financial-sector/g7-cyber-expert-group-statement-on-advancing-a-coordinated-roadmap-for-the-transition-to-post-quantum-cryptography-in-the-financial-sector-january-20
- AWS / Goldman Sachs quantum portfolio optimization resource estimate：https://aws.amazon.com/blogs/quantum-computing/a-detailed-end-to-end-assessment-of-a-quantum-algorithm-for-portfolio-optimization-released-by-goldman-sachs-and-aws/
- Federal Reserve November 2025 Financial Stability Report, funding risks and CCP margin concentration：https://www.federalreserve.gov/publications/november-2025-financial-stability-report-funding-risks.htm
- Bank of England 2025 CCP stress-test results：https://www.bankofengland.co.uk/stress-testing/2025/2025-ccp-stress-test-results-report
- CFA Institute Research Foundation, Quantum Computing for Finance：https://rpc.cfainstitute.org/research/foundation/2025/chapter-9-quantum-computing-for-finance

## Follow-up

- Analyst: compliance-officer
- Topic: 量子模型应用、PQC迁移与CCP集中度的监管合规框架
- Question: 在2026-2028监测期，JPM与GS若把量子/混合模型用于组合保证金、长尾exotic定价、XVA或抵押品优化，哪些环节应纳入模型风险管理、客户披露、第三方风险、PQC迁移和监管沟通清单？
