---
source: ai-institute
resource_type: whiteboard-card
card_index: 6
status: completed
analyst_level: "行业研究"
---

# AI PC装机量只有在OEM拥有企业客户关系、软件入口和服务续费机制时才能转化为可持续利润，单纯硬件溢价与渠道捆绑不足以抵消存储涨价压力。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **synthesize**
Completed: **29/04/2026, 05:00:39**

## Links

- Whiteboard topic: [[AI PC 渗透率与端侧 AI 的商业化变现]]
- Card topic: [[AI PC装机量只有在OEM拥有企业客户关系、软件入口和服务续费机制时才能转化为可持续利润，单纯硬件溢价与渠道捆绑不足以抵消存储涨价压力。]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

AI PC装机量只有在OEM拥有企业客户关系、软件入口和服务续费机制时才能转化为可持续利润，单纯硬件溢价与渠道捆绑不足以抵消存储涨价压力。

## Question

Investigate the topic "AI PC装机量只有在OEM拥有企业客户关系、软件入口和服务续费机制时才能转化为可持续利润，单纯硬件溢价与渠道捆绑不足以抵消存储涨价压力。" and make the strongest evidence-based judgment you can.

## Summary

本卡在Card 05统一数据口径基础上重算AI PC利润分配：AI PC 2026年高渗透率确认硬件底座，但利润不会均匀流向OEM。最可持续模式是企业Agent服务包，其次是苹果和高端Windows机型的硬件溢价；ISV预装分成只是必要补丁，运营商/渠道捆绑主要缓冲价格而非创造高毛利。联想、戴尔、惠普的关键在企业服务attach rate，苹果强在垂直整合，微软和头部ISV掌握更强利润控制位。

## Report

# AI PC统一数据口径下的供应链利润分配重算

**日期：** 2026年4月29日  
**角色：** TMT行业分析师  
**研究主题：** AI PC渗透率与端侧AI的商业化变现  
**本卡立场：** synthesize  
**承接卡片：** 承接Card 05的数据口径清洗，将“AI PC高渗透率、存储涨价、出货提前备货、ISV端侧化、OEM利润受压”放入同一套利润分配框架。  
**工作区状态：** 本地实际目录可读取card-01、card-02、card-03、card-05；`session-brief.md`、`analyst-catalog.json`和card-04文件在共享目录中缺失。本报告使用任务提示中的Session Brief Snapshot与card-05对card-04的重建信息继续分析。

## 1. 核心判断

我综合支持前序主线，但修正利润归属：2026年AI PC装机量确实给端侧AI商业化提供了硬件底座，但可持续利润不会平均落在所有OEM手里。最可能把装机量转化为利润的模式排序为：

| 排名 | 模式 | 可持续利润判断 | 主要受益者 |
| --- | --- | --- | --- |
| 1 | 企业Agent服务包 | 最强，具备经常性收入、企业预算、数据安全与设备管理闭环 | 戴尔、联想、惠普、微软、企业ISV |
| 2 | 高端硬件溢价 | 强，但集中在高端品牌、创作者/专业机和垂直整合生态 | 苹果、高端Windows OEM、工作站品牌 |
| 3 | ISV预装分成 | 中等，是OEM拿回软件利润的必要补丁，但分成率和转付费率通常不足以覆盖全量BOM压力 | 拥有入口的OEM、办公/创作/安全ISV |
| 4 | 运营商/渠道捆绑 | 较弱，更像价格缓冲和分期工具，除非绑定企业网络、安全与托管服务 | 运营商、渠道商、部分区域OEM |

因此，本卡的结论不是“AI PC硬件不赚钱”，而是“硬件利润需要被生态化”：只卖NPU和内存配置的OEM仍会被存储涨价压缩；能把设备、身份、权限、模型、知识库、售后与订阅打包的厂商，才有机会把55%左右的AI PC渗透率转化为可持续利润池。

## 2. 统一数据口径：先把可用事实与情景参数分开

可进入本轮利润重算的事实锚点如下：

| 事实锚点 | 数据口径 | 对利润分配的含义 |
| --- | --- | --- |
| AI PC规模 | Gartner预计2026年AI PC出货143.113百万台，占PC市场54.7% | 确认硬件底座足够大，但不能直接推出付费率 |
| 软件端侧化 | Gartner预计到2026年底40%的软件厂商会优先投资PC端AI能力 | 支撑ISV从云端向端侧迁移，但OEM能否分成仍需合同验证 |
| Q1出货性质 | Gartner称2026Q1全球PC出货62.8百万台、同比+4%，但增长由价格上涨前的库存构建推高 | sell-in不能等同sell-through，OEM利润兑现要看H2渠道消化 |
| 厂商份额 | 2026Q1 Lenovo 26.5%、HP 19.3%、Dell 16.5%、Apple 10.6%、ASUS 6.7%、Acer 6.4% | 大厂具备供应采购与渠道谈判优势，区域/白牌更脆弱 |
| 存储冲击 | IDC预计2026年PC出货下降11.3%，收入因ASP上涨增长1.6%；存储供给压力持续2026年并可能延续至2027年 | 利润压力来自成本与需求同时挤压，ASP上涨不代表利润改善 |
| AI PC配置门槛 | Microsoft Copilot+ PC要求40+ TOPS NPU，市场产品普遍16GB内存起步 | AI体验与DRAM/NAND成本直接绑定，低价段最难消化 |

需要继续作为情景参数处理的内容包括：AI PC中存储与芯片BOM占比、ISV端侧推理节省60%-80%云成本、OEM毛利率跌破某一红线、AI软件付费转化率。它们可以用于压力测试，但不能作为全行业事实直接写入共享数据层。

## 3. 利润分配模型：谁拥有客户关系，谁才有定价权

本卡使用一个简化模型重算OEM能捕获的利润：

`OEM可持续增量利润 = 出货量 × 硬件净溢价留存 + 装机基数 × AI服务付费率 × ARPU × OEM分成率 - 存储/SoC成本吸收 - 渠道补贴`

这个模型的关键不是出货量，而是四个变量：

| 变量 | 高质量利润的特征 | 低质量利润的特征 |
| --- | --- | --- |
| 硬件净溢价留存 | 用户愿意为续航、安静、屏幕、做工、创作性能和生态支付高ASP | 用户只看到“AI标签”，但同配置竞品快速降价 |
| AI服务付费率 | 企业批量采购、按席位或按工作流成果付费 | 消费者试用多、转付费少 |
| OEM分成率 | OEM拥有设备管理、账户、应用商店、预装入口或企业服务合同 | OEM只是被动安装ISV试用版 |
| 成本吸收能力 | 具备长期存储合约、规模采购、产品组合上移能力 | 依赖低价机、区域渠道、白牌装配 |

用这个框架看，AI PC利润池的真正分界线是“客户关系归属”。芯片和存储供应商拿走硬件升级的上游利润；ISV拿走端侧推理带来的软件毛利改善；OEM只有在拥有企业账号、应用入口、服务合同或高端品牌溢价时，才能避免沦为成本承压的装机通道。

## 4. 四种商业模式的重算

### 4.1 企业Agent服务包：最可能形成可持续利润

企业Agent服务包是本轮AI PC商业化中最强的OEM利润回流机制。原因有三点：

第一，企业场景愿意为可审计、可管理、可合规的端侧AI付费。Gartner在2026年4月提出，企业将从“辅助式AI”转向“结果导向工作流”，价值不在于AI是不是一个功能，而在于它能否在身份、权限、政策和审计约束下被授权执行任务。这与AI PC的端侧隐私、低延迟、本地知识库和设备管理天然吻合。

第二，企业Agent包可以把一次性硬件销售转化为经常性收入。OEM可将AI PC与端侧RAG、会议/文档Agent、安全隔离、设备生命周期管理、远程运维、模型更新和行业模板打包，形成每席每月或每年服务费。即使单机硬件毛利被存储涨价压缩，服务毛利仍可能通过续费修复生命周期利润。

第三，大型OEM拥有企业渠道和采购规模。联想、戴尔、惠普在全球商用PC市场具备批量采购、直销、设备管理和售后网络优势；微软则控制Windows、Microsoft 365、Entra身份体系和Copilot入口。利润最强的组合不是单个OEM独自闭环，而是“Windows OEM + Microsoft控制平面 + 企业ISV + 管理服务”的生态组合。

本模式的约束是实施复杂度高。企业不是为“AI PC”买单，而是为“合同查找、工单处理、审批提速、客服质检、代码/文档合规”等可计量结果买单。若OEM只能提供硬件，不掌握系统集成和数据治理，利润仍会被微软和ISV拿走。

### 4.2 高端硬件溢价：苹果最稳，Windows OEM需缩小战场

高端硬件溢价仍然有效，但它不是全行业利润解法，而是强品牌和高端细分的解法。苹果具备最完整的垂直整合：自研SoC、macOS生态、应用商店、终端体验、品牌定价和长期供应链谈判能力。Gartner 2026Q1数据中，Apple在主要PC厂商中同比增速最高，市场份额提升，说明高端/教育/新用户结构对其仍有支撑。

Windows OEM也可以通过高端轻薄本、创作者本、工程工作站、游戏本和商用旗舰线保留溢价，但需要满足两个条件：

- 溢价必须来自可感知体验，例如续航、散热、屏幕、键盘、安静运行、本地生成速度、隐私保护，而不是只宣传NPU TOPS。
- 产品组合必须上移。IDC指出，存储涨价会导致价格上升、毛利下降或内存配置下调；在入门机上，OEM很难同时保持AI体验、低售价和毛利。

因此，高端硬件溢价的赢家画像是：苹果、具备工作站和商用旗舰线的戴尔/惠普/联想、以及能将游戏/创作性能实测可视化的华硕等厂商。输家画像是：依赖低价Windows笔记本、区域渠道和白牌装配的厂商。

### 4.3 ISV预装分成：必要但不够，除非OEM掌握入口和转化数据

ISV预装分成是OEM试图从软件利润池拿回一部分的直接方式，但可持续性中等。原因在于，预装本身通常只是流量分发，真正的利润取决于激活率、试用转付费率、续费率和OEM分成率。

这个模式更适合三类软件：

| ISV类别 | 端侧AI价值 | OEM分成机会 |
| --- | --- | --- |
| 办公与会议 | 本地文档总结、会议纪要、语音转写、企业知识库检索 | 商用机预装、企业采购打包、模板/行业包 |
| 创作与设计 | 图像/视频处理、本地素材管理、低延迟预览 | 高端创作者本联名、GPU/NPU性能认证 |
| 安全与管理 | 本地敏感数据识别、终端安全Agent、合规审计 | 企业设备管理服务、年度安全包 |

预装分成的问题在于利润池的主导权通常在ISV。若端侧推理降低了ISV云端成本，ISV并没有天然义务把节省回流给OEM。OEM要提高分成率，需要掌握三个筹码：设备出厂入口、账号/应用商店触点、企业采购合同。否则预装容易退化为一次性营销费，难以抵消DRAM/NAND涨价。

### 4.4 运营商/渠道捆绑：能缓冲价格，难单独创造高利润

运营商和渠道捆绑的价值在于降低用户一次性支付压力，尤其在存储涨价导致ASP上升时，通过分期、宽带/5G套餐、企业网络、安全网关和云盘服务降低表观购机门槛。IDC提到，在成熟市场中，消费者可能更多依赖融资和分期来吸收高价格。

但该模式的利润持续性最弱。PC不是手机，运营商控制权较低，换机周期更长，补贴回收期更不稳定。若只是“买PC送套餐”或“套餐送AI功能”，利润往往被渠道补贴和促销吞噬。只有在企业场景下，运营商将AI PC、专线、SASE、安全、身份和托管运维打包，才可能从渠道融资工具升级为服务利润池。

因此，运营商/渠道捆绑应视为辅助变量，而不是核心变现主线。它能帮助OEM消化高ASP和库存，但很难独立解释可持续利润。

## 5. OEM与生态模式排序

| 厂商/生态 | 最适合的变现模式 | 利润质量 | 关键理由 | 主要风险 |
| --- | --- | --- | --- | --- |
| Apple/macOS生态 | 高端硬件溢价 + 生态服务 | 高 | 垂直整合、品牌ASP、软硬件体验一致、供应链谈判强 | 企业Agent开放度和行业软件覆盖不如Windows生态 |
| Lenovo | 企业Agent服务包 + 规模采购 | 高 | 全球份额第一、商用渠道广、供应链议价强、可做设备生命周期服务 | 若服务 attach rate 不足，仍承受存储成本 |
| Dell | 企业Agent服务包 + 高端商用/工作站 | 高 | 企业直销、商用客户关系、工作站和管理服务基础强 | 消费端品牌溢价有限，需证明AI服务续费 |
| HP | 企业与渠道服务包 + 高端办公 | 中高 | 商用PC基盘大，渠道覆盖强，适合办公Agent和安全服务 | 2026Q1份额承压，需提升高端mix和服务分成 |
| Microsoft/Windows生态 | 企业Agent控制平面 + ISV生态 | 很高，但主要不归OEM | 控制OS、身份、办公套件和Copilot入口，能定义端侧AI体验 | OEM若缺少分成机制，会被平台抽象化 |
| ASUS/Acer等 | 高端游戏/创作者细分 + 渠道捆绑 | 中 | 游戏、创作、区域渠道有弹性，可用性能实测支撑溢价 | 低端线受存储涨价挤压，企业服务能力较弱 |
| 区域/白牌OEM | 运营商/渠道补贴 | 低 | 可通过价格和本地渠道获取短期销量 | 采购规模弱、毛利薄、AI软件分成能力弱 |

综合来看，真正有机会把AI PC装机量转化为可持续利润的不是“出货最多”的OEM，而是“出货规模 + 企业客户关系 + 软件分成入口 + 供应链锁价”同时具备的生态。联想、戴尔、惠普在企业服务包上最值得跟踪；苹果在高端硬件溢价上最稳；微软及头部ISV在利润池中处于更强控制位，但它们不一定把利润回流给OEM。

## 6. 对前序卡片的综合修正

我支持Card 01“AI PC从硬件竞赛转向应用变现”的方向，也支持Card 02“消费者只为结果付费”的约束，还支持Card 03“ISV享受端侧基础设施红利、OEM承担硬件通胀”的核心矛盾。但我接受Card 05的数据修正：现有证据只能证明2026H2存在红色预警条件，不能把全行业OEM资产负债表风险直接定性为已触发红色警报。

在统一口径下，更准确的判断是：

- 存储涨价不是短期噪音，而是2026年利润分配重算的核心外生变量。
- AI PC渗透率提升先利好上游SoC/存储与软件平台，只有具备服务闭环的OEM才能二次捕获利润。
- 高端硬件溢价可以保住部分毛利，但不能覆盖大众AI PC的全部成本压力。
- 企业Agent服务包是唯一同时具备高ARPU、续费、低价格敏感度和端侧隐私价值的主线。
- ISV预装分成和运营商捆绑更像利润补丁，不能替代企业服务化。

## 7. 需要继续跟踪的红线指标

| 指标 | 为什么重要 | 建议阈值 |
| --- | --- | --- |
| AI软件 attach rate | 决定装机量能否转化为服务收入 | 商用AI PC激活率、90天留存率、付费转化率 |
| OEM服务分成率 | 决定ISV红利是否回流硬件 | OEM从AI软件/服务包中获得的净收入占硬件毛利缺口比例 |
| 商用服务ARPU | 验证企业Agent包能否覆盖BOM涨价 | 每席每年服务收入与续费率 |
| 库存天数与sell-through | 区分真实需求和渠道前置备货 | sell-through落后sell-in超过10个百分点需警惕 |
| 存储合约价 | 决定大厂与小厂利润分化 | DRAM/NAND合约价环比、锁价期限、供应保障 |
| 产品mix上移 | 验证高端溢价能否成立 | 高端线占比、ASP、毛利率同步变化 |

## 8. 下一步交接

建议交给 **offshore-strategist [primary]**。理由是：本卡已经完成供应链与商业模式层面的利润重算，下一步应把“谁能捕获利润池”映射到港美股可投资标的与估值敏感性，重点比较Apple、Microsoft、Dell、HP、Lenovo、AMD、Intel、Qualcomm以及头部软件/运营商生态在AI PC变现链条中的定价权差异。

**后续问题：** 在港美股可投资标的中，AI PC利润池从硬件出货转向企业Agent、OS入口和高端生态后，哪些公司的估值弹性来自可验证的利润增量，哪些只是受益于装机叙事？

## 9. 参考来源

- Gartner, “Gartner Says AI PCs Will Represent 31% of Worldwide PC Market by the End of 2025,” 2025-08-28: https://www.gartner.com/en/newsroom/press-releases/2025-08-28-gartner-says-artificial-intelligence-pcs-will-represent-31-percent-of-worldwide-pc-market-by-the-end-of-2025
- Gartner, “Gartner Says Worldwide PC Shipments Increased 4% in First Quarter of 2026,” 2026-04-10: https://www.gartner.com/en/newsroom/press-releases/2026-4-10-gartner-says-worldwide-pc-shipments-increased-4-percent-in-first-quarter-of-2026
- IDC, “Higher ASPs, lower unit volumes: How the memory crisis is reshaping the PC and smartphone outlook,” 2026-02-26: https://www.idc.com/resource-center/blog/higher-asps-lower-unit-volumes-how-the-memory-crisis-is-reshaping-the-pc-and-smartphone-outlook/
- IDC, “Global Memory Shortage Crisis: Market Analysis and the Potential Impact on the Smartphone and PC Markets in 2026,” 2025-12: https://www.idc.com/resource-center/blog/global-memory-shortage-crisis-market-analysis-and-the-potential-impact-on-the-smartphone-and-pc-markets-in-2026/
- Microsoft, “Shop Copilot+ PCs: Windows AI PCs and Laptop Devices”: https://www.microsoft.com/en-us/windows/copilot-plus-pcs
- Gartner, “Gartner Expects Most Enterprises to Abandon Assistive AI for Outcome-Focused Workflow by 2028,” 2026-04-02: https://www.gartner.com/en/newsroom/press-releases/2026-04-02-gartner-expects-most-enterprises-to-abandon-assistive-ai-for-outcome-focused-workflow-by-2028

## Follow-up

- Analyst: offshore-strategist
- Topic: AI PC利润池重分配后的港美股可投资标的估值弹性
- Question: 在港美股可投资标的中，AI PC利润池从硬件出货转向企业Agent、OS入口和高端生态后，哪些公司的估值弹性来自可验证的利润增量，哪些只是受益于装机叙事？
