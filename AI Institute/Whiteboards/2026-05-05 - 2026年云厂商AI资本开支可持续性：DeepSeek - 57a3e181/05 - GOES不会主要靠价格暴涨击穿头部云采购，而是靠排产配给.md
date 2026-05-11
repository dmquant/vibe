---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "行业研究"
---

# GOES不会主要靠价格暴涨击穿头部云采购，而是靠排产配给和认证锁定拖慢通电；800VDC释放楼宇级铜约束，但铝在机柜和液冷高密度区存在明确技术临界点。

Analyst: **Materials Analyst**
Status: **completed**
Stance: **stress-test**
Completed: **08/05/2026, 12:16:26**

## Links

- Whiteboard topic: [[2026年云厂商AI资本开支可持续性：DeepSeek V4式效率冲击是否打破 算力即护城河 飞轮]]
- Card topic: [[GOES不会主要靠价格暴涨击穿头部云采购，而是靠排产配给和认证锁定拖慢通电；800VDC释放楼宇级铜约束，但铝在机柜和液冷高密度区存在明确技术临界点。]]
- Analyst: [[Materials Analyst]]
- Analyst level: [[行业研究]]

## Topic

GOES不会主要靠价格暴涨击穿头部云采购，而是靠排产配给和认证锁定拖慢通电；800VDC释放楼宇级铜约束，但铝在机柜和液冷高密度区存在明确技术临界点。

## Question

Investigate the topic "GOES不会主要靠价格暴涨击穿头部云采购，而是靠排产配给和认证锁定拖慢通电；800VDC释放楼宇级铜约束，但铝在机柜和液冷高密度区存在明确技术临界点。" and make the strongest evidence-based judgment you can.

## Summary

截至2026-05-08，本卡压力测试第04卡的材料瓶颈叙事：GOES短缺更可能通过交期配给、规格锁定和变压器排产造成云厂商延期，而不是单纯通过价格暴涨触发头部云采购违约；Section 232把钢、铝、铜及衍生品关税扩展到完整海关价值，放大EPC重定价和索赔风险。Hormuz冲击对铝交付升水和GCC原铝更直接，但铜仍是紧凑高电流节点的战略导体。800VDC显著降低铜耗，但铝替代在机柜内、行到机柜连接、power sidecar和液冷接口存在空间/热/接触可靠性临界点。估计2027年材料相关增量资本开支滑移150-350亿美元，尾部500亿美元以上。

## Report

# AI数据中心电力交付中的GOES、铜与铝压力测试
## 第05卡 — 材料行业分析师 | 立场：stress-test | 日期：2026-05-08

---

## 执行摘要

截至2026-05-08，本卡压力测试第04卡关于变压器、GOES与高压设备瓶颈会形成2026-2027年AI基础设施资本开支物理上限的判断。我的结论比第04卡更窄，但仍然偏负面：**GOES短缺更可能通过交期分配和规格锁定触发采购摩擦，而不是单纯通过现货价格暴涨触发违约**；Section 232与Hormuz冲击会把这种物理短缺转化为预算超支和合同争议。对头部云厂商而言，这通常是延期或重排项目，而不是直接采购违约；对neocloud、第三方数据中心开发商和固定总价EPC而言，违约或重新定价的概率明显更高。

铜铝替代也不是简单的“用铝替铜”。NVIDIA的800VDC架构相较54V机柜配电显著降低电流和铜耗，但铝只有在空间不紧的层级才好用。铝的电导率约为铜的**62%**，若要达到等效电气性能，需要显著更大的截面积；BEAMA指出，同等电流等级下铝母线槽通常比铜母线槽**大10-20%**，在约2,500A附近发生单排到双排母线切换时尺寸差异可达约**70%**，同等级下铜的电压降和功率损耗约低**25%**。因此技术临界点在**机柜内部、行到机柜馈电、母线接头和液冷接口**，而不在室外变电站。如果铜短缺迫使铝进入这些紧凑区域，液冷数据中心会因为导体、端子、热量和检修间距增加而损失可用算力密度。

**核心判断：**支持第04卡的物理瓶颈方向，但压力测试其传导机制。第一类失败并不是GOES现货涨价导致头部云厂商采购订单违约，而是变压器排产配给、衍生品关税成本传导和导体空间包络扩大，导致2027年通电节奏与白空间利用率低于计划。我在第02-04卡基础上额外加入**150-350亿美元**的2027年材料相关资本开支滑移风险，主要体现为进度后移，而非永久需求消灭。

---

## 1. GOES：价格是症状，配给才是机制

### 真正卡住的是什么

取向硅钢（GOES）不是普通钢材。它是大多数变压器设计的磁芯材料，若要替代，往往需要改磁芯设计、效率认证、供应商认证，有时还要重新获得公用事业公司认可。美国能源部大电力变压器报告指出，Cleveland-Cliffs是美国唯一仍活跃的本土GOES供应商，只能满足美国本土GOES需求的**12-20%**；进口GOES历史渗透率为**12-37%**，且很多制造商进口的是硅钢片或铁芯，而非原始GOES卷材。[^doe-lpt] 美国商务部的变压器Section 232报告也指出，美国变压器制造商高度依赖外国GOES、硅钢片和铁芯，这些关键部件的非自供需求中超过**75%**依赖进口。[^doc-transformers]

这个结构很重要，因为云厂商不能只靠支付更高钢价来解决2026-2027年的变压器短缺。变压器仍然要经过铁芯剪切、绕组、绝缘、油箱制造、注油、出厂试验、物流运输和公用事业并网审批。DOE还指出，配电变压器交期已从**2019年的3-6个月**拉长到**2023年的12-30个月**；大型电力变压器更专业，且更受工厂产能约束。[^doe-supply]

### Section 232如何改变商业失败模式

2026年4月2日的总统公告于2026年4月9日刊登在Federal Register，修改Section 232关税，使铝、钢、铜及其衍生品的关税适用于**完整海关价值**，不再只按金属含量计征。[^s232-official] 贸易律师摘要显示，新结构自2026年4月6日起生效，对许多覆盖金属产品征收**50%**附加关税，并对广泛的衍生产品征收**25%**附加关税，其中包括部分铜线缆。[^troutman]

这项政策不会创造GOES产能。它带来三点影响：

| 传导渠道 | 对云厂商采购的影响 | 违约风险 |
|---|---:|---:|
| GOES/硅钢片进口成本 | 提高变压器与铁芯到岸成本，利好本土和盟友供应商 | 头部云厂商低，固定价EPC中等 |
| 衍生品范围 | 把铜线缆、铝部件和变压器衍生品纳入关税计算 | 中等：合同重开和索赔增加 |
| 进口替代空间收窄 | 可用备用供应商集合变小 | 对进度高，对正式违约较低 |

因此，“价格暴涨”是二阶机制。一阶风险是Section 232提高了每条备用路径的成本，但物理变压器排产仍然被配给。云厂商可以吸收金属附加成本，却无法吸收缺失的变压器试验档期。

### 对GOES违约的压力测试结论

我不认为GOES短缺主要通过纯粹“价格爆炸”触发云厂商采购违约。更合理的概率树是：

| 2026-2027情景 | 概率 | GOES/变压器表现 | 云资本开支影响 |
|---|---:|---|---:|
| 基准 | 55% | 价格上行，配给紧张，变压器档期仍是硬门槛 | 100-200亿美元滑移 |
| 压力 | 35% | Section 232传导叠加进口瓶颈，迫使EPC重新定价并重排项目 | 200-450亿美元滑移 |
| 尾部 | 10% | 多家变压器供应商触发不可抗力或拒绝固定价交付条款 | 450-750亿美元滑移及选择性违约 |

对MSFT、GOOGL、AMZN和META而言，更可能出现的结果是通电延期、提高变压器预付款、增加供应商融资库存缓冲。对第三方数据中心开发商和neocloud GPU出租商而言，同样的成本冲击可能演变成契约或包销问题，因为电力基础设施预算占其可用流动性的比例更高。

---

## 2. Hormuz冲击：铝比铜更直接暴露，但铜是更稀缺的战略导体

Hormuz海峡冲击不只是石油故事。EIA估计，2024年和2025Q1通过Hormuz的流量占全球海运石油贸易超过四分之一、占全球石油和成品油消费约五分之一；EIA还估计，2024年通过Hormuz的LNG中**83%**流向亚洲市场。[^eia-hormuz] IEA指出，除运往科威特的交付外，卡塔尔和阿联酋的LNG出口几乎全部经过Hormuz海峡。[^iea-hormuz]

从材料角度看，铝对Hormuz的直接暴露更高。CRU指出，GCC原铝出口和氧化铝进口物流都容易受到Hormuz扰动影响，冶炼厂氧化铝库存通常只有几周，替代路线有限。[^cru-al] Fastmarkets报道，Gulf冶炼厂2025年生产**6.159Mt**原铝，约占全球产量**8-9%**，但在海运出口中占比明显更高；危机中Qatalum和Alba均出现减产。[^fastmarkets-al] ING在2026年3月16日估算，约**560kt/年**Gulf铝产能已经受影响，在严重扰动情景下铝价可能超过**4,000美元/吨**。[^ing-al]

铜不同。成品铜并非主要通过Hormuz运输，但铜本身已经因为矿山和精矿供应响应缓慢而偏紧。S&P Global在2026年4月16日的铜展望中，将2026年LME铜均价预测放在略高于**12,100美元/吨**，原因是精矿短缺和新增矿山供应有限；2026年3月可见库存超过**1.3Mt**虽缓解近端压力，但没有解决结构性紧张。[^spg-copper] 世界银行2026年4月《Commodity Markets Outlook》指出，中东扰动、数据中心建设风险和新贸易限制共同推升铝和铜价格；预计2026年铝价同比上涨约**22%**，基本金属上涨**19%**。[^worldbank]

**含义：**Hormuz会首先推高铝的交付升水，而铜仍然是紧凑、高电流、高可靠性区域的战略瓶颈。两者叠加，恰好削弱了云厂商最需要的“轻松替代”叙事。

---

## 3. 800VDC中的铜铝替代：确实存在技术临界点

### 基础物理

在简单直流框架下：

| 机柜功率 | 母线电压 | 电流 |
|---:|---:|---:|
| 1MW | 54VDC | 18,519A |
| 1MW | 800VDC | 1,250A |

这就是800VDC的重要性。NVIDIA表示，800VDC相较54VDC和415/480VAC架构，可降低电流、铜耗、线缆体积、转换级数和配电损耗。[^nvidia-800] 其2025年技术博客称，1MW机柜若使用54V配电，可能需要最多**200kg**铜母线；800V母线槽可在相同导体尺寸下多传输**85%**功率，并减少**45%**铜需求。[^nvidia-blog] TI也指出，若用48V给1MW机柜配电，为维持配电损耗，需要接近**450lb**铜。[^ti-800]

但800VDC并不消灭导体工程。铝的电导率约为铜的**62%**；在考虑热、机械和接头设计前，要达到同等电导，截面积大约需要**1.6倍**。[^dcd-busbar] Copper Development Association的矩形铜母线表以**99% IACS**电导率为基础，说明载流量是热设计问题，不只是截面积问题。[^copper-org] BEAMA的母线技术公告提供了最有用的设计速记：同等电流等级下，铝母线槽平均**轻30%**，但截面积**大10-20%**；在约**2,500A**附近从单排切换到双排母线时，尺寸差异可跳升到约**70%**；同等电流等级下，铜的电压降和功率损耗约低**25%**。[^beama]

### 铝在哪里可用

铝可以接受，且常常更有经济性，主要在：

- 室外母线槽和大型开关室，尺寸不是核心约束；
- 行级或机房级800VDC配电，1MW机柜对应的1,250A馈电可拆分到多条导体；
- 低重量可减少支撑和安装复杂度的结构区域；
- 可在端子处使用铜包铝或镀层铝的设计。

### 替代在哪里失效

当空间、接触电阻和热循环成为主导时，铝替代会变得危险：

- 800V到54V/12V/6V转换后的机柜内母线；
- 行到机柜连接器和盲插接口；
- 与冷板、分液歧管和漏液检测硬件争夺空间的电源sidecar；
- 氧化膜、蠕变和热膨胀带来可靠性风险的高振动或高维护接头；
- 固定母线包络的既有数据大厅改造项目。

技术临界点不是单一金属价格，而是空间包络条件：

> 当额外导体和端子空间低于未使用的电气/机械余量时，铝替代可行；当它挤占计算U位、检修间距、冷却歧管或sidecar体积时，铝替代会破坏容量。

对800VDC AI机房，我采用如下经验规则：

| 区域 | 铝替代弹性 | 对空间利用率的影响 |
|---|---:|---:|
| 变电站/室外场地/变压器引出线 | 高 | 很小 |
| 电力室和机房母线槽 | 中高 | 绿地设计中可管理 |
| 行母线到机柜 | 中等 | 在约1-2MW/机柜等效负荷或改造项目中敏感 |
| 机柜内/电源架/sidecar | 低 | 算力密度损失风险高 |
| GPU板级/托盘级供电 | 很低 | 铜、镀铜或先进导体占优 |

---

## 4. 对AI资本开支主线的影响

本卡支持前序卡片的“物理瓶颈”主线，但改变近期失败标签：

- **GOES：**主要不是价格违约，而是交期配给、进口范围摩擦和变压器供应商议价能力。
- **铜：**是紧凑高电流节点的战略导体；价格可以对冲，物理形态和纯度在最高密度区域很难便宜替代。
- **铝：**在机柜外可用，但新近暴露于Hormuz物流风险，且在800VDC本来要节省空间的区域不是免费的铜替代品。
- **云资本开支：**头部云厂商延期和重排；低层级开发商违约、重新谈判或出售项目。

我估计2027年材料相关的增量资本开支滑移为**150-350亿美元**，若Hormuz相关铝扰动持续到2026H2且Section 232衍生品分类继续扩张，尾部风险为**500亿美元以上**。与第02-04卡叠加后，2027年整体下修风险应偏向此前**10-25%**资本开支修正区间的中部，而不是机械上调到区间以上，因为变压器、开关设备和能源基础设施风险存在重叠。

---

## 5. 交接

**建议下一位分析师：**`utilities-analyst`  
**建议立场：**`stress-test`

**后续主题：**GOES与导体短缺下的公用事业并网设计弹性。

**后续问题：**如果GOES受限的变压器和铜受限的紧凑电力系统，迫使云厂商从高密度800VDC液冷机房转向更依赖铝、更分散的电力室设计，那么在PJM、ERCOT和欧洲走廊中，需要增加多少变电站用地、馈线长度、无功设备和并网研究时间？

**交接理由：**`utilities-analyst`是primary分析师，其领域直接覆盖电网并网、变电站设计和公用事业侧可交付性。这不是reviewer触发条件；下一步未解问题是材料瓶颈是否改变并网几何和通电时点，而不是组合层面的泛化风险复核。

---

## 来源说明

[^doe-lpt]: U.S. Department of Energy, "Large Power Transformer Resilience," July 2024, especially pages 19-21 on GOES supply and Cleveland-Cliffs' domestic role: https://www.energy.gov/sites/default/files/2024-10/EXEC-2022-001242%20-%20Large%20Power%20Transformer%20Resilience%20Report%207-10-24.pdf
[^doc-transformers]: U.S. Department of Commerce Section 232 transformer report, Federal Register publication, November 18, 2021: https://regulations.justia.com/regulations/fedreg/2021/11/18/2021-24958.html
[^doe-supply]: U.S. DOE Office of Electricity, "Supply Chain and Market Analysis": https://www.energy.gov/oe/supply-chain-and-market-analysis
[^s232-official]: Federal Register, Proclamation 11021 of April 2, 2026, "Strengthening Actions Taken To Adjust Imports of Aluminum, Steel, and Copper Into the United States": https://regulations.justia.com/regulations/fedreg/2026/04/09/2026-06960.html
[^troutman]: Troutman Pepper Locke, "Metals Market Shake-Up: Higher Section 232 Tariffs, Broader Coverage, Narrower Relief," April 6, 2026: https://www.troutman.com/insights/metals-market-shake-up-higher-section-232-tariffs-broader-coverage-narrower-relief/
[^eia-hormuz]: U.S. EIA, "Amid regional conflict, the Strait of Hormuz remains critical oil chokepoint," 2025: https://www.eia.gov/todayinenergy/detail.php?id=65504
[^iea-hormuz]: IEA, "Strait of Hormuz": https://www.iea.org/about/oil-security-and-emergency-reserve/strait-of-hormuz
[^cru-al]: CRU, "Conflict in the Middle East clouds aluminium and alumina trade," March 2026: https://www.crugroup.com/en/communities/thought-leadership/2026/Conflict-in-the-Middle-East-threatens-aluminium-and-alumina-trade-flows/
[^fastmarkets-al]: Fastmarkets, "Hormuz crisis: Middle East aluminium supply disruption," 2026: https://www.fastmarkets.com/insights/aluminium-supply-disruption-andrea-hotter/
[^ing-al]: ING Think, "Gulf smelter cuts tighten aluminium outlook," March 16, 2026: https://think.ing.com/downloads/pdf/article/gulf-smelter-cuts-tighten-aluminium-outlook
[^spg-copper]: S&P Global Market Intelligence, "Copper and Gold Market Outlook 2026," April 16, 2026: https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/04/copper-gold-market-outlook-2026-prices-supply-mining-costs
[^worldbank]: World Bank, "Commodity Markets Outlook," April 2026: https://thedocs.worldbank.org/en/doc/f3138644a1e8e2bb631399ae11d6c408-0050012026/original/CMO-April-2026.pdf
[^nvidia-800]: NVIDIA, "800 VDC Architecture for AI Data Centers": https://www.nvidia.com/en-us/data-center/technologies/800-vdc-architecture/
[^nvidia-blog]: NVIDIA Technical Blog, "NVIDIA 800 VDC Architecture Will Power the Next Generation of AI Factories," May 20, 2025: https://developer.nvidia.com/blog/nvidia-800-v-hvdc-architecture-will-power-the-next-generation-of-ai-factories/
[^ti-800]: Texas Instruments, "Addressing challenges in data-center power delivery with 800V high-voltage DC architectures," revised November 2025: https://www.ti.com/lit/SSZTD83
[^dcd-busbar]: Data Center Dynamics, "Busbars: copper versus aluminum": https://www.datacenterdynamics.com/en/opinions/busbars-copper-versus-aluminum/
[^copper-org]: Copper Development Association, "Ampacities and Mechanical Properties of Rectangular Copper Busbars": https://www.copper.org/applications/electrical/busbar/
[^beama]: BEAMA, "Busbar Trunking Systems - A Material Choice: Aluminium or Copper?": https://www.beama.org.uk/asset/E18DAEC9-79AC-4D71-A1CE894CAE99A0F3/

---

元数据页脚：第05卡材料压力测试完成于2026-05-08 Asia/Singapore。本地工作区缺少引用文件`session-brief.md`和`card-04/*`，已依据用户提供的会话上下文重建。

## Follow-up

- Analyst: utilities-analyst
- Topic: GOES与导体短缺下的公用事业并网设计弹性
- Question: 如果GOES受限的变压器和铜受限的紧凑电力系统，迫使云厂商从高密度800VDC液冷机房转向更依赖铝、更分散的电力室设计，那么在PJM、ERCOT和欧洲走廊中，需要增加多少变电站用地、馈线长度、无功设备和并网研究时间？
