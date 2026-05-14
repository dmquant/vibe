---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "行业研究"
---

# 最优utility rate design不是阻止数据中心，而是把可通电路径变成有抵押、有最低付款、有自筹升级和可审计负荷预测的金融承诺，从而保护居民并让真实项目继续接入。

Analyst: **Utilities Analyst**
Status: **completed**
Stance: **stress-test**
Completed: **13/05/2026, 12:36:28**

## Links

- Whiteboard topic: [[AI物理基础设施的‘社会性瓶颈’与估值重构]]
- Card topic: [[最优utility rate design不是阻止数据中心，而是把可通电路径变成有抵押、有最低付款、有自筹升级和可审计负荷预测的金融承诺，从而保护居民并让真实项目继续接入。]]
- Analyst: [[Utilities Analyst]]
- Analyst level: [[行业研究]]

## Topic

最优utility rate design不是阻止数据中心，而是把可通电路径变成有抵押、有最低付款、有自筹升级和可审计负荷预测的金融承诺，从而保护居民并让真实项目继续接入。

## Question

Investigate the topic "最优utility rate design不是阻止数据中心，而是把可通电路径变成有抵押、有最低付款、有自筹升级和可审计负荷预测的金融承诺，从而保护居民并让真实项目继续接入。" and make the strongest evidence-based judgment you can.

## Summary

截至2026-05-13，本卡压力测试上一张卡的“可通电场址溢价”：溢价成立，但只有当电网升级成本通过高负荷类别、take-or-pay最低收费、CIAC、抵押品、退出费、负荷预测审查和可中断/BYOG机制被清晰归因时才可融资。AEP Ohio、Dominion Virginia、Georgia PSC、Oregon POWER Act和PJM框架显示，居民保护与数据中心通电并不冲突，关键是把投机MW、低利用率、取消和发电/输电backstop风险从居民账单中隔离出来。投资者应把自筹升级资本化为更高前期capex和更低通电风险，把社会化升级按监管和社区风险折价。

## Report

# 数据中心电网成本风险的公用事业费率设计 - 2026-05-13

元数据：Board `9ca0b853-cce5-438d-b127-920167354f6a`；Card 2/8；分析师角色 `utilities-analyst`；立场 `stress-test`；工作日期 2026-05-13 Asia/Singapore。

截至2026-05-13，本卡对Card 1的“可通电场址稀缺性”结论做压力测试：数据中心场址溢价是真实的，但只有当费率机制把成本归因写清楚时，这个溢价才可融资。如果电网升级成本被摊给居民用户，同一个“可通电”场址就会带上更高的监管、诉讼与社区风险beta。若升级由数据中心自筹，或被清晰隔离给大负荷客户承担，通电能力仍能保留，同时居民用户受到更好保护。

## 核心判断

最能保护居民的费率设计，不是简单地“让数据中心多交钱”，而是一套筛选加承诺的tariff stack：

1. 对超大规模、高负荷率客户设立单独高负荷类别。
2. 在电网开工前，强制收取负荷研究费，要求场址控制权、最终负荷爬坡计划和队列分组。
3. 通过CIAC或等价报销义务，让客户为本地接入和专用设施出资。
4. 在爬坡期和稳定期设置按合同容量校准的take-or-pay最低需量收费。
5. 要求长期合同、抵押品、母公司或财务赞助方担保以及提前退出费。
6. 将发电和输电backstop优先落在数据中心或公用事业股东，而不是居民用户。
7. 提供可中断或“自带新增电源”服务选项，但必须有可执行的调度、备用服务和排放规则。
8. 引入独立负荷预测审查，防止投机性MW变成rate base投资。

这套设计能保留通电能力，因为它给hyperscalers一条可融资、可排队的接入路径；也能保护居民，因为可选择性、过度预测、项目取消、低利用率和备用服务的成本被定价给造成需求的客户。

## 为什么成本转嫁风险已经实质化

负荷背景已经从理论问题进入rate case。EIA在2026年3月12日的分析中指出，2020-2025年美国电力需求年均增长约1.7%，而2005-2019年仅为0.1%；EIA预测2026-2027年ERCOT和PJM负荷增速分别为10%和3%，这两个区域最暴露于近期数据中心需求。EIA在2026年5月对Virginia的分析显示，2019-2025年Virginia商业售电量增加近30.0 million MWh；PJM Dominion zone 2025年夏季峰值负荷为23,905 MW，较2019年上升23%，2025-2026年冬季峰值为25,413 MW，较2019-2020年上升45%。

批发容量价格已经反映稀缺。PJM在2025年7月22日发布的2026/2027 Base Residual Auction结果显示，UCAP出清价为$329.17/MW-day，而2025/2026 RTO拍卖为$269.92/MW-day；预测峰值负荷同比增加超过5,400 MW，主要由数据中心扩张、电气化和经济增长驱动。PJM估计，cap price可能使部分地区零售电费同比上升1.5%-5%，取决于州监管和LSE如何传导。这就是费率设计已经从技术脚注变成政治变量的原因。

Berkeley Lab/Brattle/DOE在2025年1月的技术简报准确界定了监管问题：大负荷tariff必须公平分摊成本、缓释搁浅资产风险、降低运行和资源充足性风险、分担新技术商业化风险，同时仍要兼容清洁电力和现场电源选项。该简报对投资者也有一个关键提示：美国尚无统一全国标准，因此数据中心场址价值取决于具体州的监管设计。

## 领先设计显示了什么

| 地区 / 公用事业 | 关键设计要素 | 居民保护力度 | 通电影响 | 投资含义 |
|---|---|---|---|---|
| AEP Ohio Schedule DCT | 适用于25,000 kW及以上的新数据中心或扩建；负荷研究费$10,000-$100,000；四年爬坡上限；初始期限为爬坡期加八年；若信用测试不达标，抵押品为全期限最低收费总额的50%；月度计费需量不低于85%ratchet或合同容量公式中较高者，且不超过合同容量85%；若客户在目标通电日前取消或延迟超过12个月，LOA要求报销100%建设成本。 | 对低利用率、取消和投机性排队有强保护。 | 更慢但更干净：AEP在2025年11月7日负荷研究信中称，全部13,022.7 MW被研究的新数据中心负荷都需要区域升级，按cluster不同，服务窗口为Q4 2031或2033。 | 高质量power rights应资本化；在ESA/LOA和抵押品签署前，投机性MW应大幅折价。 |
| Dominion Energy Virginia GS-5 | 为超过25 MW且月负荷率高于75%的客户设立新高负荷类别；14年合同；输电和配电合同需量最低收费85%，发电需量最低收费60%；配套退出费和抵押品。 | 对T&D成本回收保护较好，但发电侧60%弱于全口径85%标准，残余敞口更大。 | 自2027年1月1日起，为大负荷保留路径，同时更明确地定价爬坡和取消风险。 | 混合信号：获批类别降低成本转嫁风险，但发电成本分摊仍是2027年rate case观察点。 |
| Georgia Power / Georgia PSC | 2025年1月规则允许最低账单和更长期合同；大用户预付本地基础设施成本；基本费率冻结至2028年；2025年12月19日协议认证9,985 MW新增发电，其中约80%预计服务数据中心；若合同未兑现，Georgia Power到2031年前backstop相关成本。 | 若股东backstop被严格执行且之后不转为居民递延回收，保护力度较强。 | 因PSC创建backstop框架而不是简单阻断负荷，大规模发电建设更容易推进。 | 公用事业rate base增长有上行，但投资者必须区分客户背书项目和未来面临prudence review的项目。 |
| Oregon POWER Act / HB 3546 | 要求为数据中心和大能源用户设立单独费率类别，防止成本转嫁；PUC执行仍受到倡议组织和公用事业争议。 | 原则上强，但执行风险仍在。 | 可能放慢无法证明成本责任或清洁资源兼容性的项目。 | 可作为政策模板：只有tariff覆盖长寿命资产全生命周期，而不只是前几年成本，居民保护才稳固。 |
| PJM大负荷框架 | 2026年1-2月方案包括改进负荷预测、大负荷自带新增发电、connect-and-manage下更早中断、州支持资源的加速并网，以及backstop procurement成本分摊讨论。 | 若backstop成本分摊给不可中断或未BYOG的大负荷，潜在保护较强。 | 可通过有条件服务保留通电能力，而不是二元拒绝。 | 中断权和BYOG容量成为估值变量，不再只是运营细节。 |

## 最能保护居民且保留数据中心接入的费率设计

**1. 单独高负荷类别加take-or-pay最低收费。**  
这是主干。触发门槛应清晰，例如25 MW，并应合并关联负荷，避免通过拆分地块规避规则。最低需量应足够高，使容量申请变成真实财务承诺。AEP Ohio的85%框架比低ratchet更能保护居民，因为它把纸面MW变成付款义务。Dominion的85% T&D加60%发电是有用折中，但留下更大的发电成本残余。

**2. 对本地和专用升级采用CIAC及取消报销。**  
居民最暴露的情形，是公用事业在数据中心实际达到负荷之前，就先建设场址专用变电站、馈线、变压器或输电接入。CIAC、LOA和建设成本报销把时间错配风险放回项目赞助方。AEP Ohio的LOA机制有参考价值：若客户在目标通电日前取消项目或延迟超过12个月，须100%报销建设成本。

**3. 长合同、抵押品、母公司担保和退出费。**  
数据中心资产和电网资产的折旧节奏并不一致。当电网资产寿命可达40-60年时，10-15年合同是底线，不是奢侈配置。抵押品应与合同期最低收费挂钩，而不是象征性押金。若客户是SPV，财务赞助方支持比SPV自身资产负债表更重要。

**4. 分阶段服务和负荷爬坡门槛。**  
公用事业不应仅因为客户想保留可选择性，就为一个300 MW园区一次性建设全部容量。类似四年内按合同容量50%、65%、80%、90%爬坡的安排，可以降低过度建设风险，同时让可信项目扩张。队列优先级应取决于场址控制、已付研究费、已签服务协议、已提交抵押品和输电可行性，而不是新闻稿。

**5. 把可中断服务和自带新增电源设计成有价格的选项。**  
在不增加居民负担的情况下保留通电能力，最快办法是让非firm服务更便宜、firm服务更贵。若数据中心可在应急需求响应前被中断，或能带来新增可交付发电和储能，就应获得credit。若数据中心依赖电网提供备用、辅助服务、黑启动支持或standby power，就应为这些服务付费。behind-the-meter燃气发电还必须显性计入排放、空气许可和碳政策成本，否则“自供电”会变成隐性社会成本。

**6. 隔离发电backstop。**  
最难的问题不是接到园区的馈线，而是为可能不兑现的预测负荷建设发电和主干输电。Georgia到2031年的股东backstop方向正确，因为它允许系统建设，同时把未兑现风险从既有客户身上移开。投资者关键问题是：backstop是否具有法律耐久性，还是只是一项未来rate case中可能被软化的承诺。

**7. 独立负荷预测和公开报告。**  
只有监管者同时审计用于PJM、ERCOT、IRP和rate case的负荷预测，tariff才能真正过滤投机项目。AEP Ohio的流程说明了这一点：在正式研究申请后，公司识别出36个场址合计13,022.7 MW，全部需要区域升级，服务日期被推至Q4 2031或2033。这不是近期可通电MW。投资者不应像现有容量一样资本化它。

## 如何资本化自筹电网升级与社会化电网升级

投资者应把每个数据中心供电方案拆成三类：

| 成本类别 | 谁出资 | 如何资本化 | 估值含义 |
|---|---|---|---|
| 客户出资的专用资产 | 数据中心支付CIAC、LOA报销或直接变电站/接入资本开支 | 计入场址成本或租户改良经济；按服务合同或可用寿命摊销；若CIAC抵减rate base，不应按公用事业rate base估值 | 提高前期资本强度，但降低通电和政治风险；powered-site premium更可融资 |
| 合同背书的公用事业投资 | 公用事业建设，但客户签署take-or-pay ESA、抵押品、退出费和最低账单 | 对公用事业股票，视为搁浅资产风险较低的受监管rate base增长；对数据中心业主，最低账单是固定占用成本 | 若审慎获批，对公用事业盈利质量正面；除非可转嫁给租户，否则对数据中心ROIC中性至负面 |
| 社会化系统升级 | 在大负荷收入承诺前，成本广泛进入基本费率或rider | 对公用事业盈利要加入监管风险折价；对数据中心开发商，要因moratorium、诉讼和追溯性tariff风险折价公告MW | 短期公用事业EPS可能上升，但allowed ROE、disallowance和政治反弹风险也上升；场址溢价应被打折 |

一个实用评分规则是：

`Power-bankability score = 0.30 x 已签服务协议 + 0.20 x 客户出资本地升级 + 0.15 x 抵押品/退出覆盖 + 0.15 x take-or-pay固定成本覆盖 + 0.10 x 发电/容量backstop + 0.10 x 可中断性或新增可交付电源`。

80分以上可视为可融资powered capacity；50-80分为混合状态：已签本地基础设施可以资本化，但发电和主干输电假设需要折价；50分以下应按开发期option估值，而不是近期MW。权益模型中，对电网升级仍明显社会化且政治争议较高的项目，我会增加100-300 bp折现率，或对项目概率施加25%-50% haircut。相反，完全自筹或有合同背书的power rights虽然名义capex更高，却可以支持更低的开发风险溢价。

对受监管公用事业而言，这一区分同样重要。客户出资CIAC可以加快接入并保护居民，但未必像公用事业自有资产那样创造rate base收益。社会化升级可以抬升rate base和EPS，但会带来allowed ROE下调、prudence challenge、消费者干预和立法反应。最高质量的公用事业敞口不是“最大数据中心负荷”，而是“有可执行客户承诺且获监管认可成本归因的负荷增长”。

## 投资含义

对数据中心开发商和REITs而言，已签电力比便宜土地更有价值。一个已支付CIAC、已签ESA、已提交抵押品、有现实爬坡计划且具备非firm或BYOG方案的场址，即使表面电价更高，也应享有溢价。依赖广泛社会化升级的场址应折价，因为其期权价值可能通过最低账单、退出费、未来费率类别或地方反对被重新分配。

对hyperscalers而言，经济问题从“最低平均电价”转为“最低风险调整后全口径交付电力成本”。预先支付电网升级看似增加capex，但可能比两年通电延迟、不利rate case结果或GPU部署计划搁浅更便宜。

对公用事业而言，负荷增长不自动利好。只有当大负荷收入具备耐久性、有抵押品支持，并与rate base投资匹配时，增长才是利好；当投机性预测在客户签约前驱动资本开支时，增长质量较低。Georgia和AEP展示了两条不同路径：Georgia用股东/发电backstop维持容量建设；AEP用更严格的队列和tariff流程揭示哪些负荷真正可融资，以及通电可能多么遥远。

对电网设备和服务供应商而言，tariff转向总体正面。即使数据中心自筹升级，变压器、变电站、开关设备、导线、计量、保护系统、储能和需求响应软件的物理需求仍在。风险在于节奏：保护居民的tariff会延迟投机项目，但会提高通过筛选项目的信用质量。

## 对上一张卡的压力测试

我支持Card 1关于社区抵制不会终结数据中心建设的结论，但收紧条件：powered-site scarcity只有在成本分摊机制可投资时才有价值。“可通电”现在不只是拿到公用事业意向函，而是项目已签署覆盖其造成基础设施需求的义务，具备可信发电/容量路径，并处于监管者可向居民解释的tariff框架内。

市场不应继续把公告MW视为可互换资产。一个拥有客户出资本地升级、抵押品和take-or-pay ESA的100 MW园区，与一个把输电和发电需求塞进一般rate case的100 MW园区，是两种完全不同的资产。前者应享有powered-site premium，后者应承担social-license haircut。

## 交接建议

推荐下一位分析师：`asset-allocator`。跟进主题：在公用事业、数据中心房东、电网设备和hyperscalers之间，资本化AI物理基础设施瓶颈的组合框架。跟进问题：跨资产投资者应如何把自筹与社会化电网升级敞口转化为因子倾斜、折现率和AI基础设施交易的仓位规模？

## 资料来源

- Berkeley Lab / Brattle / U.S. DOE, "Electricity Rate Designs for Large Loads: Evolving Practices and Opportunities," January 2025: https://eta-publications.lbl.gov/publications/electricity-rate-designs-large-loads
- AEP Ohio, "Data Center Tariff," effective July 23, 2025: https://www.aepohio.com/company/about/rates/data-center-tariff/
- AEP Ohio, "DCT Load Study Letter," November 7, 2025: https://www.aepohio.com/lib/docs/ratesandtariffs/ohio/AEP-Ohio_DCT_Load_Study_Letter_25.11.7.pdf
- Virginia State Corporation Commission, "SCC Issues Order on DEV Biennial Review 2025," PUR-2025-00058: https://www.scc.virginia.gov/about-the-scc/newsreleases/release/scc-issues-order-on-dev-biennial-review-2025/scc-rules-in-dev-biennial-review-case.html
- Data Center Dynamics, "Virginia regulators approve new rate class for data centers and other large loads," November 27, 2025: https://www.datacenterdynamics.com/en/news/virginia-regulators-approve-new-rate-class-for-data-centers-and-other-large-loads/
- Georgia Public Service Commission, "Data Center Fact Sheet," March 2026: https://psc.ga.gov/site/downloads/datacenterfactsheet.pdf
- Georgia Power, "Data Centers & Your Georgia Power Bill": https://www.georgiapower.com/data-centers.html
- Oregon Public Utility Commission, "2025 Legislative Report," HB 3546 / POWER Act: https://www.oregon.gov/puc/Documents/2025-Legislative-Report.pdf
- PJM, "PJM Board Outlines Plans To Integrate Large Loads Reliably," January 16, 2026: https://insidelines.pjm.com/pjm-board-outlines-plans-to-integrate-large-loads-reliably/
- PJM, "PJM, Stakeholders Begin Work on Board's Plan To Reliably Integrate Large Loads," February 25, 2026: https://insidelines.pjm.com/pjm-stakeholders-begin-work-on-boards-plan-to-reliably-integrate-large-loads/
- PJM, "PJM Auction Procures 134,311 MW of Generation Resources; Supply Responds to Price Signal," July 22, 2025: https://www.pjm.com/-/media/DotCom/about-pjm/newsroom/2025-releases/20250722-pjm-auction-procures-134311-mw-of-generation-resources-supply-responds-to-price-signal.pdf
- U.S. Energy Information Administration, "Fossil generation could rise with faster-than-expected growth in data center power demand," March 12, 2026: https://www.eia.gov/todayinenergy/detail.php?id=67344
- U.S. Energy Information Administration, "Commercial electricity sales have soared in Virginia, driven by data centers," May 2026: https://www.eia.gov/todayinenergy/detail.php?id=67664
- Federal Energy Regulatory Commission, "FERC to Act on Large Load Interconnection Docket by June 2026," April 16, 2026: https://www.ferc.gov/news-events/news/ferc-act-large-load-interconnection-docket-june-2026

页脚：工作日期 2026-05-13 Asia/Singapore；文件 `whiteboard/9ca0b853-cce5-438d-b127-920167354f6a/card-02/report.zh.md`。

## Follow-up

- Analyst: asset-allocator
- Topic: AI物理基础设施瓶颈的跨资产资本化框架
- Question: 跨资产投资者应如何把自筹与社会化电网升级敞口转化为因子倾斜、折现率和AI基础设施交易的仓位规模？
