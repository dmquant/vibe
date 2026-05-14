---
source: ai-institute
resource_type: whiteboard-card
card_index: 8
status: completed
analyst_level: "风控与合规"
---

# 12% AI物理层sleeve合规可行，但前提是把期权、单券CDS、BB/HY和公用事业集中仓位纳入每日衍生品名义、发行人/交易对手聚合、受限名单和客户披露的硬控制。

Analyst: **Compliance Officer**
Status: **completed**
Stance: **synthesize**
Completed: **11/05/2026, 16:56:37**

## Links

- Whiteboard topic: [[AI物理层 vs 软件层：2026年的大决裂]]
- Card topic: [[12 AI物理层sleeve合规可行，但前提是把期权、单券CDS、BB HY和公用事业集中仓位纳入每日衍生品名义、发行人 交易对手聚合、受限名单和客户披露的硬控制。]]
- Analyst: [[Compliance Officer]]
- Analyst level: [[风控与合规]]

## Topic

12% AI物理层sleeve合规可行，但前提是把期权、单券CDS、BB/HY和公用事业集中仓位纳入每日衍生品名义、发行人/交易对手聚合、受限名单和客户披露的硬控制。

## Question

Investigate the topic "12% AI物理层sleeve合规可行，但前提是把期权、单券CDS、BB/HY和公用事业集中仓位纳入每日衍生品名义、发行人/交易对手聚合、受限名单和客户披露的硬控制。" and make the strongest evidence-based judgment you can.

## Summary

截至2026-05-11，本卡综合前序组合与风控修正：12% AI物理层sleeve可进入受监管账户，但只能作为受治理的授权sleeve。核心硬约束包括Rule 18f-4全基金衍生品敞口10%阈值、UCITS Article 52的5/10/40和OTC交易对手5%/10%限制、Article 51的global exposure、FINRA期权审批/沟通规则、Regulation SBSR对单券CDS的报告义务、MiFID II产品治理/适当性和受限名单/MNPI阻断。执行上应设置12%目标、15%硬上限、至少6%现金/抵押品储备、BB/HY 5%、单券CDS 2%保护名义，并以8%/9.5%衍生品敞口作为内部预警/硬停止。

## Report

# 合规综合：截至2026-05-11的12% AI物理层sleeve执行与治理边界

截至2026-05-11，我对第01-07卡进行综合，并有条件支持修正后的12% AI物理层sleeve进入受监管账户，但它必须被定义为受治理的授权sleeve，而不是一组可临机交易的证券清单。包含OEM 90/75 put spread、IPP指数put、2%单券CDS保护、5% BB/HY信用以及公用事业/IPP集中仓位的组合，只有在首笔订单前已固化衍生品敞口、发行人聚合、受限名单筛查、客户/产品披露和退出触发器时才可合规执行。

## 核心判断

该sleeve适合机构、专业客户或明确授权衍生品的账户，不适合作为普通零售模型组合分发。在SEC/FINRA和UCITS/MiFID II框架下，主要合规风险不是12%的主题权重本身，而是短期权腿、OTC单券CDS、受监管公用事业/IPP发行人集中度和高收益信用共同存在，导致经济对冲名义敞口可能比现金权重更快漂移。

我的执行规则是：sleeve维持12%目标、15%绝对上限；sleeve层面现金/抵押品储备至少6%；BB/HY现金信用维持5%；单券CDS只能作为有文件支持的保护性对冲；任何会突破全账户衍生品、发行人、交易对手、空头披露或受限名单限制的交易均不得执行。

## 本卡审查的组合对象

合规封套基于第07卡的风控修正：

| Sleeve组成 | 修正后角色 | 合规处理 |
|---|---:|---|
| OEM/电网设备权益 | sleeve的24% | 多头权益集中度，并叠加OEM put spread |
| IPP/固定MW权益 | sleeve的14% | 多头权益集中度，并叠加IPP指数put对冲 |
| 受监管公用事业 | sleeve的14% | 多头权益集中度，MNPI和费率案件敏感度较高 |
| IG信用 | sleeve的18% | 收益底仓；需与权益和CDS参考实体做发行人聚合 |
| BB/HY信用 | sleeve的5% | 高收益风险披露、流动性限制和CDS参考实体映射 |
| 铜/镍/GOES代理 | sleeve的15% | 商品相关敞口必须获得授权 |
| 现金/抵押品储备 | 至少sleeve的6% | 权利金、变动保证金和无序退出缓冲 |
| 单券CDS | 2%保护名义基准 | 证券型掉期/OTC衍生品，需交易对手和参考实体控制 |
| OEM 90/75 put spread、IPP指数put | 对冲叠加 | 衍生品敞口按名义/调整名义计入，而非按支付权利金计入 |

## 具体监管约束

### 1. 美国注册基金与投顾控制

Rule 18f-4是美国基金层面的硬门槛。注册基金只有在衍生品敞口不超过净资产10%并维持书面衍生品风险政策时，才可作为“limited derivatives user”；如果超过10%且5个工作日内未恢复合规，投顾必须向董事会报告，并在不超过30个日历日内降回限额内，或转入完整衍生品风险管理和VaR制度。[1] 对采用完整制度的基金，同一规则还要求每日VaR合规和董事会升级。[2]

本sleeve的内部限额应严于规则：

| 指标 | 内部触发 | 必要动作 |
|---|---:|---|
| 全基金Rule 18f-4衍生品敞口 | NAV的8.0% | 不新增衍生品；展期前合规复核 |
| 全基金衍生品敞口 | NAV的9.5% | 硬性禁止加仓；降低对冲名义或平掉卖出put腿 |
| 监管阈值 | NAV的10.0% | 董事会/CCO升级；整改时钟启动 |
| 完整制度下VaR违约 | 任一日违约 | 衍生品风险经理升级；5个工作日未整改则进入董事会流程 |

对独立管理账户，应通过投资管理协议、Form ADV/组合管理披露、最佳执行政策和投顾合规程序约束同样的经济风险。SEC投顾规则要求书面政策、年度复核和指定CCO；这些政策必须明确覆盖衍生品审批、受限名单、个人交易、分配、估值、并行账户管理和冲突处理。[3]

### 2. FINRA期权与沟通控制

OEM put spread含有75%执行价的卖出put腿。它相对裸put降低风险，但仍是期权仓位，需要账户期权审批、期权披露交付、持仓限额监控、行权限额监控，以及适用时的保证金/组合保证金授权。FINRA Rule 2360规定了期权持仓和行权限额，并要求账户获批后取得客户期权文件。[4] FINRA期权沟通和一般公众沟通规则要求期权材料具备使用前控制，并提供平衡、非误导的风险披露。[5][6]

执行含义是：除非经纪商已记录该账户的期权权限、按要求交付OCC/ODD、对价差和短期权腿进行策略级审批，并每日按共同控制账户聚合持仓限额，否则不得建立OEM put spread或IPP指数put。

### 3. 单券CDS与证券型掉期报告

在美国监管下，单券公司CDS属于证券型掉期敞口。Regulation SBSR规定，证券型掉期信息须向注册掉期数据存储库或SEC报告，并由数据存储库公开传播交易、成交量和价格信息。[7] 因此，本sleeve应把2% CDS叠加视为OTC衍生品，并设置四类控制：合格交易对手/开户、ISDA/CSA文件、独立估值，以及每日将参考实体与现金债和权益进行聚合。

合规偏好是只对实际持有的BB/HY或IPP名称，或经正式批准的相关性对冲名称买入保护。即便经济上有吸引力，也应禁止对受限公用事业、待融资发行人、被wall-cross的M&A目标或客户敏感名称建立裸单券CDS空头。

### 4. 美国空头披露与受益所有权报告

多头put和CDS保护不等同于股票卖空，但若与卖空股票、delta对冲或发行人控制性仓位结合，可能产生监管报告后果。SEC Rule 13f-2/Form SHO要求达到特定阈值的机构投资管理人按月报告空头仓位和空头活动数据。[8] Regulation SHO要求真实卖空具备记录化locate和强制平仓纪律；若交割失败持续存在，还会触发threshold security平仓义务。[9]

受益所有权也必须监控。如果sleeve及相关账户合计超过某一美国有投票权权益类别的5%，需要进行Schedule 13D/G分析，并复核引用该类别证券的衍生品安排是否需披露及是否存在规避风险。除非事前取得法律批准，集团层面对任何发行人投票权类别的运行上限应为4.5%。

### 5. UCITS集中度、交易对手与衍生品global exposure

对UCITS授权账户，Article 52决定发行人与交易对手框架。UCITS通常不得将超过资产5%投资于同一发行人的可转让证券或货币市场工具，但可提高至10%；所有高于5%的发行人仓位受40%篮子规则约束。OTC衍生品交易对手敞口对合格信用机构上限为资产10%，对其他交易对手上限为5%；同一主体的证券、存款和OTC衍生品合计敞口不得超过20%。[10]

UCITS Article 51还要求衍生品相关global exposure不得超过组合净值总额；除非适用指数化处理，衍生品底层敞口也必须纳入Article 52限额。[11] ESMA/CESR的UCITS风险计量框架是commitment/VaR计算的执行参考。[12]

本sleeve的UCITS实操限额如下：

| UCITS控制 | Sleeve规则 |
|---|---|
| 单一发行人 | 入场上限4.5% NAV；5.0%禁止加仓；使用10%前需法律复核 |
| 5/10/40篮子 | 每日跟踪所有高于5%的发行人；本sleeve消耗40%篮子的比例不应超过15个百分点 |
| OTC交易对手 | 非银行交易对手内部上限3%，合格信用机构内部上限8%；在5%/10%法定上限前硬停止 |
| 同一主体合并敞口 | 现金证券+存款+OTC敞口内部上限18%，20%硬停止 |
| Global exposure | 期权/CDS的commitment敞口内部上限80% NAV，100%前硬停止 |
| 指数put | 只使用分散化、UCITS合格指数；否则拆解到底层发行人敞口 |

### 6. MiFID II、PRIIPs与欧盟空头控制

MiFID II要求投资公司诚实、公平、专业并以客户最佳利益行事；同时要求产品治理、识别目标市场、公平清晰沟通、风险警示和成本费用披露。[13] ESMA产品治理指引强调目标市场界定、复杂产品分销策略和定期产品复核。[14] 对投顾或全权委托账户，适当性/合适性文件必须证明客户理解期权、CDS、高收益信用、回撤、流动性和交易对手风险。[15]

若向欧盟零售客户提供，类似打包或衍生品化产品需要进行PRIIPs/KID分析。若无适当KID和零售目标市场批准，本sleeve应限制于专业客户和合格交易对手。

若对冲计划形成欧盟股票净空头，EU Short Selling Regulation同样相关。ESMA说明，股票卖空必须有覆盖，裸主权CDS被禁止；股票净空头达到已发行股本0.1%及其后每0.1%需向主管机关报告，达到0.5%及其后每0.1%需公开披露。[16] 这必须是交易前控制，而不是事后补报。

## 受限名单与MNPI边界

该sleeve特别容易发生受限名单失误，因为主题涉及资本募集、M&A、并网争议、费率案件、税收抵免决定和项目融资谈判。受限名单流程应覆盖：

| 触发 | 交易规则 |
|---|---|
| 发行人在受限名单 | 不得交易权益、债券、期权、CDS，若其为指数篮子重要成分也不得交易 |
| Watch list名称存在MNPI风险 | 必须合规预清；不得新建单券CDS |
| 公用事业/IPP融资、M&A或费率和解被wall-cross | 冻结该发行人及经济等价衍生品，直至合规解除 |
| 研究/PM从开发商、OEM、银行或咨询方获得项目级非公开数据 | 交易相关发行人前升级至法律/合规 |
| 关联方存在承销、贷款、顾问或项目融资角色 | 按冲突敏感处理；需要信息隔离认证 |

指数put只有在受限发行人不是公司政策下的重大指数成分时才可交易。若IPP窄基指数仅含10-20个名称，应在受限名单上按一篮子单名证券处理。

## 入场、再平衡与退出纪律

### 入场清单

1. 确认授权：衍生品、期权价差、OTC CDS、HY信用、商品代理和公用事业集中度必须明确允许。
2. 确认客户分类：美国零售需Reg BI/FINRA suitability和期权审批；欧盟零售需MiFID适当性/合适性和PRIIPs/KID可用；否则限制于专业/机构账户。
3. 对每只权益、债券、期权底层、CDS参考实体、超过政策重要性的指数成分和交易对手进行交易前受限名单扫描。
4. 交易前按Rule 18f-4或UCITS commitment/VaR计算全账户衍生品敞口，使用名义/调整名义而非已付权利金。
5. 跨权益、信用、CDS参考敞口、期权delta、可转债和关联账户检查发行人集中度。
6. 检查OTC交易对手敞口、抵押条款、独立价格来源和争议流程。
7. 准备披露包：投资论点、下行情景、杠杆/名义敞口、流动性、HY违约风险、CDS交易对手风险、期权指派风险、成本费用、冲突和税务提示。

### 再平衡触发器

| 触发 | 动作 |
|---|---|
| Sleeve超过13.5% NAV | 冻结新增；除非客户授权另有规定，5个交易日内回到12%附近 |
| Sleeve达到15% NAV | 强制减仓；无合规签字不得由投委会自由裁量 |
| 任一发行人达到4.5% NAV | 禁止加仓；准备5%/10%法律分析 |
| UCITS 5/10/40篮子使用超过30% | 停止增加高于5%的发行人；分散或减仓 |
| BB/HY sleeve超过5.5% | 降回5%；CDS对冲不能为现金HY漂移背书 |
| 单券CDS参考名义超过现金债敞口25%以上 | 除非获批为宏观对冲，否则降低CDS |
| 全基金衍生品敞口超过8% NAV | 不新增衍生品；优先降低卖出期权腿 |
| 全基金衍生品敞口超过9.5% NAV | 硬停止；CCO复核并制定降敞口计划 |
| OTC交易对手达到内部上限的80% | 更换交易对手、转让、可清算则清算，或降低敞口 |
| 接近欧盟净空头阈值 | 预先准备申报；无报告流程不得跨越0.1%股本阈值 |
| 任一covered security进入受限名单 | 冻结；若无文件化grandfathering，则按合规指令退出 |

### 退出纪律

出现以下任一条件时，退出是强制而非自由裁量：

1. Rule 18f-4的10% limited-user阈值被突破，且无法在5个工作日内修复，除非转入完整衍生品风险制度。
2. UCITS global exposure、发行人、交易对手或同一主体合并限额已突破，或按结算日预计会突破。
3. 参考发行人、期权底层或重大指数成分进入受限名单，且无法根据文件化grandfathering继续持有。
4. OTC CDS估值争议超过5个工作日，或抵押争议在基金/账户层面超过1% NAV。
5. 相关头寸将触发欧盟/英国/美国空头或受益所有权报告，而管理人缺少数据、授权或操作准备。
6. 原始风险论点失效：AI资本开支下修20-30%、容量市场重定价被规则变化重置、OEM订单积压出现取消证据，或HY利差走阔超过220 bp且对冲收益未能抵消。

退出顺序应优先降低监管和流动性风险：先停止新增衍生品，再降低卖出期权腿和多余CDS，再减持BB/HY以及最集中的IPP/公用事业名称；在所有OTC估值和保证金最终确定前保留现金/抵押品。

## 合规结论

有条件批准。该sleeve只有在被编码为受治理的衍生品与信用sleeve，并具备每日敞口计算、受限名单硬阻断、发行人/交易对手聚合和文件化客户/产品披露时，才适合受监管账户。它不适合作为普通零售分发的模型组合。对UCITS，硬约束是Article 52集中度/交易对手限额和Article 51 global exposure；对美国注册基金，硬约束是Rule 18f-4衍生品敞口和董事会升级；对MiFID II/FINRA分发，硬约束是适当性/产品治理以及公平、平衡披露。

## 来源

[1] 17 CFR §270.18f-4，limited derivatives users、10%衍生品敞口和整改/董事会报告：https://www.law.cornell.edu/cfr/text/17/270.18f-4  
[2] 17 CFR §270.18f-4，VaR测试、衍生品风险经理升级和董事会报告：https://www.law.cornell.edu/cfr/text/17/270.18f-4  
[3] 17 CFR §275.206(4)-7及SEC Investment Adviser Codes of Ethics release：https://www.law.cornell.edu/cfr/text/17/275.206%284%29-7 和 https://www.sec.gov/rules-regulations/2004/07/investment-adviser-codes-ethics  
[4] FINRA Rule 2360，期权审批、持仓/行权限额和期权文件：https://www.finra.org/rules-guidance/rulebooks/finra-rules/2360  
[5] FINRA Rule 2220，期权沟通：https://www.finra.org/rules-guidance/rulebooks/finra-rules/2220  
[6] FINRA Rule 2210，公众沟通：https://www.finra.org/rules-guidance/rulebooks/finra-rules/2210  
[7] SEC Regulation SBSR，证券型掉期报告与公开传播：https://www.sec.gov/rules-regulations/2015/02/regulation-sbsr-reporting-dissemination-security-based-swap-information  
[8] SEC Rule 13f-2/Form SHO采纳规则页面：https://www.sec.gov/rules-regulations/2023/10/s7-08-22  
[9] SEC Regulation SHO投资者指引：https://www.sec.gov/investor/pubs/regsho.htm  
[10] UCITS Article 52，发行人、OTC交易对手和合并敞口限额：https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/ucits/article-52  
[11] UCITS Directive 2009/65/EC Article 51，global exposure和衍生品底层敞口：https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32009L0065  
[12] ESMA/CESR UCITS风险计量和global exposure指引：https://www.esma.europa.eu/document/guidelines-risk-measurement-and-calculation-global-exposure-and-counterparty-risk-ucits  
[13] MiFID II Directive 2014/65/EU，Article 16和Article 24投资者保护/产品治理要求：https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32014L0065  
[14] ESMA MiFID II产品治理指引更新及ESMA35-43-3448：https://www.esma.europa.eu/press-news/esma-news/esma-updates-its-guidance-product-governance 和 https://www.esma.europa.eu/document/guidelines-mifid-ii-product-governance-requirements-0  
[15] ESMA MiFID II suitability指引ESMA35-43-3172：https://www.esma.europa.eu/document/guidelines-certain-aspects-mifid-ii-suitability-requirements-1  
[16] ESMA Short Selling Regulation概览和Article 5阈值页面：https://www.esma.europa.eu/esmas-activities/markets-and-infrastructure/short-selling 和 https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/ssr/article-5-notification-competent-authorities

元数据页脚：board adce793b-a1e3-49bb-bed0-afabc6c719c9；card 08/08；role compliance-officer；stance synthesize；work-date 2026-05-11；由于live workspace缺少card-03至card-07文件，来源上下文按提示中的session snapshot重建。
