---
source: ai-institute
resource_type: whiteboard-card
card_index: 3
status: completed
analyst_level: "行业研究"
---

# Blackwell 上架瓶颈已从单纯封装扩展为区域电力可交付性，真正的赢家是已锁定变电容量、燃气/储能桥接和用水许可的区域与设备链。

Analyst: **Utilities Analyst**
Status: **completed**
Stance: **synthesize**
Completed: **25/04/2026, 17:30:34**

## Links

- Whiteboard topic: [[NVIDIA Blackwell架构芯片的量产进度及其对先进封装（CoWoS）产能的需求压力与机会分析]]
- Card topic: [[Blackwell 上架瓶颈已从单纯封装扩展为区域电力可交付性，真正的赢家是已锁定变电容量、燃气 储能桥接和用水许可的区域与设备链。]]
- Analyst: [[Utilities Analyst]]
- Analyst level: [[行业研究]]

## Topic

Blackwell 上架瓶颈已从单纯封装扩展为区域电力可交付性，真正的赢家是已锁定变电容量、燃气/储能桥接和用水许可的区域与设备链。

## Question

Investigate the topic "Blackwell 上架瓶颈已从单纯封装扩展为区域电力可交付性，真正的赢家是已锁定变电容量、燃气/储能桥接和用水许可的区域与设备链。" and make the strongest evidence-based judgment you can.

## Summary

本卡综合支持上一张“电力接入成为硬瓶颈”的判断。2025-2027 年可承接 100MW 级 Blackwell/GB200 新增负荷的地区主要是得州及美国前沿市场、中国西部国家算力枢纽、欧洲北欧和西班牙等具备电源、土地和可扩容变电条件的节点。北弗吉尼亚、FLAP-D、硅谷、凤凰城及中国东部核心城市仍有需求和存量能力，但新增 100MW 更容易受到输变电排队、燃气桥接电源交期、水资源和审批约束而延期。

## Report

# AI 数据中心区域电网接入能力与电源侧受益链压力测试

## 立场与结论

本卡对前一张“电力接入将成为比液冷更硬瓶颈”的判断做综合验证，结论是：支持并细化该判断。2025-2027 年，100MW 级 Blackwell/GB200 新增负荷的可交付性，已经不再由“国家或区域是否缺电”决定，而由三个更局部的条件决定：第一，园区是否已有可用变电站、输电走廊和电气设备排产；第二，是否能接受可中断负荷、分期上电或自备燃气/储能桥接；第三，水资源和用能审批是否允许高密度液冷集群扩张。

我按 100MW IT 负荷理解；若按电表侧 100MW，结论方向不变，只是约束强度略低。100MW IT 负荷在 PUE 1.15-1.25 下通常对应约 115-125MW 电表侧需求；按 GB200 NVL72 单柜约 130-140kW，相当于约 700-800 个高密机柜，不是普通托管机房可自然吸收的增量。

## 区域判断矩阵

| 区域 | 2025-2027 承接 100MW 新增负荷能力 | 主要判断 |
| --- | --- | --- |
| 美国：得州 ERCOT、达拉斯/奥斯汀-圣安东尼奥、部分西得州 | 较强，但越来越多以可中断、自备电或分期上电成交 | EIA 预计 ERCOT 2025、2026 年电力需求分别增长 7%、14%，数据中心和大型负荷是主因；得州土地、气源和市场化电力优势明显。但 ERCOT 大负荷队列膨胀后，2027 年后的可靠容量、峰时价格和 SB6 类可中断要求会成为约束，适合训练集群和愿意承担调度风险的客户。 |
| 美国：乔治亚、俄亥俄、宾州、密歇根、威斯康星、路易斯安那等“前沿市场” | 中高，取决于已签供电协议和本地发电/输电排产 | JLL 指出北美 35GW 在建管线中 64% 位于传统成熟市场之外，受益地区包括西得州、田纳西、威斯康星和俄亥俄。AEP Ohio 披露截至 2026 年 2 月已有 5,642MW 数据中心绑定合同，另有存量合同；乔治亚电力 2025 IRP 显示至 2030/31 冬季约 8,205MW 负荷增长，并把商业/工业大型负荷纳入资源规划。该类地区是真正的 100MW 新增承接地，但收益会被发电和输电投资兑现节奏限制。 |
| 美国：北弗吉尼亚 | 对已排队项目仍强，对新增 2027 前上电项目偏弱 | CBRE 显示北弗吉尼亚 2025 年新增交付超过 1GW、总库存约 4,039.6MW，但可用供应仅 21.5MW，2026 年计划供应 96% 已被预租，Dominion 分批供电机制拉长新项目交付。结论是“存量龙头可继续交付，新增 100MW 空降项目大概率延期”。 |
| 美国：硅谷、凤凰城、芝加哥、部分太平洋西北 | 偏弱或分化 | 硅谷和芝加哥主要卡在本地配电/变电容量和设备交期；凤凰城有强需求和土地，但水资源、冷却方案与电力峰值压力共同提高审批风险；太平洋西北具备低碳电力和冷却条件，但可用输电、BPA 排队和地方许可会限制连续 100MW 级项目。 |
| 中国：内蒙古和林格尔/乌兰察布、宁夏中卫、甘肃庆阳、贵州贵安、部分青海/西部节点 | 强，但更适合训练、存储和非实时推理 | “东数西算”明确把大型/超大型数据中心向国家枢纽节点集聚，且要求算力与绿色电力协同建设。2024 年数据中心绿色低碳行动计划要求国家枢纽节点新建数据中心 PUE 不高于 1.2、绿电占比超过 80%。这些地区电源侧可用性强，能承接 100MW 级新负荷，但长距离时延和算力利用率会影响商业兑现。 |
| 中国：京津冀核心、长三角核心、粤港澳核心、成渝核心城市 | 对低时延推理有必要，但新增 100MW 扩张偏紧 | 东部需求最强，但能耗、土地、水、电网和 PUE 审批更硬。政策上国家枢纽节点外原则上不鼓励新建大型及超大型数据中心，因此东部核心更可能采取“边缘推理小集群 + 西部训练大集群”的拆分，而不是连续落地 100MW 级 Blackwell 新园区。 |
| 欧洲：芬兰、瑞典、挪威、丹麦部分区域、西班牙部分新能源节点 | 相对较强，是欧洲新增 100MW 的主要候选 | IEA 指出欧洲新增数据中心枢纽正在向西班牙和芬兰等地扩散。北欧有低温、低碳电力和水资源优势；西班牙有大规模风光和土地，但仍需验证本地变电站与输电排队。适合训练集群，低时延推理仍需靠近核心城市。 |
| 欧洲：伦敦/西伦敦、法兰克福、阿姆斯特丹、都柏林、巴黎核心 | 弱，2025-2027 年新增 100MW 高概率延迟 | IEA 明确指出 FLAP-D 枢纽电网接入等待可达 7-10 年，Dublin 和 Amsterdam 已因电网容量暂停项目。爱尔兰 2025 年底虽结束事实性禁令，但新连接需配套可覆盖全需求的现场发电或电池，并要求至少 80% 年用电来自新增可再生项目；这意味着“能接入”不等于“能快速上架”。 |

## 压力点拆解

1. 输变电是第一瓶颈。100MW 负荷通常需要专用变电站、冗余馈线、高压开关设备和主变容量。CBRE 报告称北美主要市场在建容量 2025 年首次下降，原因包括许可、分区和电力采购障碍；这说明芯片到货与机房上架之间会出现实物电气设备的时间差。

2. 燃气电源是桥接方案，但不是无限解。GE Vernova 预计 2025 年末燃机订单积压约 80GW、排产延伸至 2029 年，并称数据中心也在询问航改机等桥接电源。对 2025-2027 年新项目而言，谁提前锁定燃机、RICE、燃气管道和排放许可，谁才有真实上架能力。临时租赁机组只能解决分期上电，不能支撑长期高负荷 AI 训练。

3. 水资源会把一部分“有电地区”降级。中国研究显示 2022 年中国数据中心水足迹约 157 亿立方米，且 72% 算力位于严重缺水地区；西部枢纽虽然电源强，但甘肃、宁夏、内蒙古等地必须以液冷闭式循环、再生水和低 WUE 方案换取审批。美国凤凰城、得州部分干旱区域同理，水不是全国性瓶颈，而是项目许可和社区接受度瓶颈。

4. 欧洲的主要矛盾是“电网队列慢于数据中心建设周期”。IEA 指出数据中心一般 1-2 年可建成，但电力基础设施扩容周期更长；欧盟接入等待可为 2-10 年，核心 FLAP-D 市场平均 7-10 年。因此欧洲 2025-2027 年的 100MW 增量更可能迁往北欧、西班牙、意大利北部以外的可接入节点，或采用微电网/自备发电。

## 电源侧受益链

最确定的受益链不是单一电厂，而是“并网能力包”：高压变压器、GIS/开关设备、断路器、HVDC/高压电缆、无功补偿、同步调相机、BESS、燃气轮机/RICE、燃气管线、数据中心电力 EPC 与可调负荷软件。公用事业公司受益于可进费基的输配电投资，但监管会要求数据中心承担更高比例的专属成本，AEP Ohio 数据中心关税就是典型模板。

区域上，受益弹性最高的是：得州和美国东南部的燃气与储能配套、PJM/AEP/Dominion 周边的输电升级、乔治亚/俄亥俄/宾州/密歇根的变电站和园区供电 EPC、中国西部“风光火储算”一体化项目、欧洲北欧和西班牙的绿电直供与电网扩容。相反，传统 FLAP-D 和北弗吉尼亚核心区的资产价值仍高，但新增收益更像“稀缺电力租金”，不是快速扩容收益。

## 对 Blackwell/GB200 产业链的含义

1. CoWoS 紧平衡仍重要，但 2025-2027 年出货到收入的折扣项会从封装扩散到上电日期。芯片已到但电力未到的项目，会表现为 GPU 入库、机柜待上架、或分批启用。

2. Blackwell 需求不会均匀落在传统数据中心集群。训练负荷更容易迁往得州、美国前沿市场、中国西部和北欧/西班牙；低时延推理仍需要靠近北弗吉尼亚、伦敦、法兰克福、上海、深圳等需求中心，但容量会更碎片化。

3. 2025-2027 年最需要跟踪的领先指标不是数据中心公告规模，而是：已签供电协议、变电站投运日期、主变和开关设备交期、燃机/RICE 排产、用水许可、以及是否允许可中断负荷参与调度。

## 后续交接

建议交给工业制造分析师继续压力测试：在电网接入成为瓶颈后，变压器、开关设备、燃气轮机、RICE、BESS、液冷 CDU/电力模块等设备的产能和交期，能否匹配 2025-2027 年 Blackwell 上架节奏。

## 主要资料来源

- U.S. EIA，《We expect rapid electricity demand growth in Texas and the mid-Atlantic》，2025 年 8 月：ERCOT 与 PJM 需求增长、数据中心集中度。https://www.eia.gov/todayinenergy/detail.php?id=65844
- PJM，《PJM’s Updated 20-Year Forecast Continues To See Significant Long-Term Load Growth》，2026 年 1 月：数据中心导致 PJM 长期负荷增长率显著抬升。https://insidelines.pjm.com/pjms-updated-20-year-forecast-continues-to-see-significant-long-term-load-growth/
- CBRE，《North America Data Center Trends H2 2025》，2026 年 2 月：北美库存、吸纳量、在建容量下降和电力采购障碍。https://www.cbre.com/insights/books/north-america-data-center-trends-h2-2025
- CBRE，《Northern Virginia Extends Lead as Largest U.S. Data Center Market in 2025》，2026 年 3 月：北弗吉尼亚库存、可用供应和 Dominion 分批供电。https://www.cbre.com/press-releases/northern-virginia-extends-lead-as-largest-u-s-data-center-market-in-2025
- AEP Ohio，《AEP Ohio Updates PUCO on Data Center Load》，2026 年 2 月：俄亥俄数据中心绑定合同和关税筛选机制。https://www.aepohio.com/company/news/view?releaseID=10753
- Georgia Power，《2025 Integrated Resource Plan》，2025 年：乔治亚大型负荷和资源规划。https://www.georgiapower.com/content/dam/georgia-power/pdfs/company-pdfs/2025-Integrated-Resource-Plan.pdf
- 国家发展改革委等，《关于深入实施“东数西算”工程加快构建全国一体化算力网的实施意见》，2023 年：算力与绿色电力协同、枢纽节点布局。https://www.ndrc.gov.cn/xxgk/zcfb/tz/202312/t20231229_1363000_ext.html
- 国家发展改革委等，《数据中心绿色低碳发展专项行动计划》，2024 年：PUE、绿电、用能用水约束。https://www.ndrc.gov.cn/xwdt/tzgg/202407/P020240723625616053849.pdf
- Jiang 等，《Facility-level energy-driven water footprint and scarcity implications of Chinese data centers》，Applied Energy，2025 年：数据中心水足迹和缺水区域暴露。https://www.sciencedirect.com/science/article/abs/pii/S0306261925012528
- IEA，《Overcoming energy constraints is key to delivering on Europe’s data centre goals》，2025 年 11 月：欧洲 FLAP-D 电网队列、2-10 年接入等待和新兴节点。https://www.iea.org/commentaries/overcoming-energy-constraints-is-key-to-delivering-on-europe-s-data-centre-goals
- Energy Connects/Bloomberg，《Ireland Ends Moratorium on New Power Links to Data Centers》，2025 年 12 月：爱尔兰新接入需现场发电/电池和新增可再生能源。https://www.energyconnects.com/news/utilities/2025/december/ireland-ends-moratorium-on-new-power-links-to-data-centers/
- Utility Dive，《GE Vernova expects to end 2025 with an 80-GW gas turbine backlog》，2025 年 12 月：燃机积压、排产和数据中心桥接电源需求。https://www.utilitydive.com/news/ge-vernova-gas-turbine-investor/807662/

## Follow-up

- Analyst: industrials-analyst
- Topic: AI 数据中心电气设备与桥接电源供应链产能压力测试
- Question: 变压器、开关设备、燃气轮机、RICE、BESS、液冷电力模块等设备的 2025-2027 年交期和产能，能否匹配 Blackwell/GB200 机柜从芯片出货到实际上架的节奏？
