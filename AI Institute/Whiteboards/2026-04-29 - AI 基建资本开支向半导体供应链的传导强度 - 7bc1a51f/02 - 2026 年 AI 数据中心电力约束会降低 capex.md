---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "行业研究"
---

# 2026 年 AI 数据中心电力约束会降低 capex 向半导体出货的边际传导效率，但更可能造成部署节奏后移和客户分化，而非全面取消头部芯片订单。

Analyst: **Energy Analyst**
Status: **completed**
Stance: **stress-test**
Completed: **29/04/2026, 05:15:35**

## Links

- Whiteboard topic: [[AI 基建资本开支向半导体供应链的传导强度]]
- Card topic: [[2026 年 AI 数据中心电力约束会降低 capex 向半导体出货的边际传导效率，但更可能造成部署节奏后移和客户分化，而非全面取消头部芯片订单。]]
- Analyst: [[Energy Analyst]]
- Analyst level: [[行业研究]]

## Topic

2026 年 AI 数据中心电力约束会降低 capex 向半导体出货的边际传导效率，但更可能造成部署节奏后移和客户分化，而非全面取消头部芯片订单。

## Question

Investigate the topic "2026 年 AI 数据中心电力约束会降低 capex 向半导体出货的边际传导效率，但更可能造成部署节奏后移和客户分化，而非全面取消头部芯片订单。" and make the strongest evidence-based judgment you can.

## Summary

本卡对上一张卡的半导体景气判断作压力测试：AI capex 仍强，但 2026 年约束从芯片供应扩展到可上电兆瓦。IEA、PJM、Dominion、DOE、Wood Mackenzie 与 PPA 案例显示，核心 hyperscaler 项目因提前锁定电力和设备仍可推进，但公告型、非确定并网或未采购变压器/燃机的项目将明显后移。结论不是半导体需求消失，而是订单兑现分化：有电力认证的 GPU/HBM/封装需求可信度高， speculative campus 相关需求应打折。

## Report

# Card 02｜AI 数据中心电力约束对半导体需求兑现的影响

## 立场与结论

本卡对 Card 01 的“AI capex 仍足以支撑半导体链景气”作压力测试。结论是：电力约束不足以在 2026 年全面否定半导体需求，但足以改变需求兑现的节奏和可见度。2026 年最可能出现的不是 hyperscaler 取消核心 GPU/HBM/先进封装订单，而是把新增算力交付分化为两类：已提前锁定电力、变压器、开关柜、燃机或核电 PPA 的项目继续兑现；仍停留在公告、选址或非确定并网阶段的项目后移到 2027 年以后。

因此，对半导体链的判断应从“capex 总量是否上修”推进到“capex 是否对应可上电的兆瓦”。电力是 2026 年 AI 基建向半导体供应链传导的主要摩擦项，但不是总需求断崖项。

## 核心证据

| 约束项 | 最新观察 | 对 2026 年半导体兑现的含义 |
| --- | --- | --- |
| 数据中心电力需求 | IEA 2026 年 4 月称，五家大型科技公司 2025 年 capex 超过 4000 亿美元，2026 年还将增长 75%；2025 年数据中心用电增长 17%，AI 数据中心更快，同时电网接入、燃机和变压器供应链已成为近端瓶颈。[IEA](https://www.iea.org/news/data-centre-electricity-use-surged-in-2025-even-with-tightening-bottlenecks-driving-a-scramble-for-solutions) | capex 仍强，但约束从芯片短缺扩展到“电力与并网短缺”。订单仍会下，但交付到可运行集群的节奏更依赖项目成熟度。 |
| 美国区域集中 | IEA 2025 年报告显示，美国占 2024 年全球数据中心用电 45%，中国 25%，欧洲 15%；到 2030 年，美国数据中心将贡献其新增用电近一半。[IEA Energy and AI](https://www.iea.org/reports/energy-and-ai/executive-summary%C2%A0) | 美国核心数据中心州的电力可得性比全球平均更关键。半导体需求风险不是全球均匀发生，而集中在 Northern Virginia/PJM、Texas、Southeast 等集群。 |
| PJM 与 Virginia | Dominion 在 2025 年 9 月材料中披露 Virginia 是全球最大数据中心市场，2025 年数据中心 billing demand 预计 4.2GW，2026 年因输电工程投运会有高于正常的销售和需求增长。[Dominion/PJM](https://www.pjm.com/-/media/DotCom/committees-groups/subcommittees/las/2025/20250916/20250916-item-04ai---dominion-data-center-large-load-request.pdf) PJM 2026 长期负荷预测同时强调，近端大型负荷需要 firm commitments，非确定项目会被折减。[PJM](https://insidelines.pjm.com/pjms-updated-20-year-forecast-continues-to-see-significant-long-term-load-growth/) | 2026 年并非“无电可上”，但电网运营商已经开始区分确定项目和非确定项目。芯片需求会向最早锁电的 hyperscaler 与 colocation 项目集中。 |
| 变压器与输配电设备 | DOE 2024 年大型电力变压器报告指出，大型变压器疫情前可在一年内下单交付，现在最长可达并超过 36 个月，且受 GOES、铜线、运输和熟练工约束。[DOE](https://www.energy.gov/sites/default/files/2024-10/EXEC-2022-001242%20-%20Large%20Power%20Transformer%20Resilience%20Report%207-10-24.pdf) Wood Mackenzie 2025 供应链材料显示，GSU 平均 143 周、power transformer 平均 128 周。[Power/Wood Mackenzie](https://www.powermag.com/wp-content/uploads/2026/01/making-the-connection-executive-summary-september-2025.pdf) | 这比 AI 服务器和数据中心土建周期更长，是 2026 年项目延期的硬约束。没有提前采购电气设备的项目，很难用临时采购完全补救。 |
| 燃机与现场发电 | Wood Mackenzie 2026 年 4 月称，全球燃机订单 2025 年底达 110GW，而制造能力只有 60-70GW；燃机价格到 2027 年底预计达 600 美元/kW，较 2019 年上涨 195%，部分交付周期长达六年。[Wood Mackenzie](https://www.woodmac.com/press-releases/gas-turbine-prices-soar-195-as-market-faces-supply-demand-crisis/) | “自带电源”可以提高项目确定性，但不能无限扩容。现场燃气发电本身又需要燃机、互联、燃气管线、排放许可和冷却水，不能把所有 2026 年项目即时拉回。 |
| PPA 与核电/地热 | Microsoft 与 Constellation 的 Three Mile Island 835MW、20 年 PPA 预计 2028 年上线。[DCD](https://www.datacenterdynamics.com/en/news/three-mile-island-nuclear-power-plant-to-return-as-microsoft-signs-20-year-835mw-ai-data-center-ppa/) Amazon 与 Talen 的 Susquehanna 核电 PPA 最高 1,920MW，但按计划 2029 年达到 840-1,200MW，2032 年达到 1,680-1,920MW。[Talen](https://ir.talenenergy.com/news-releases/news-release-details/talen-energy-expands-nuclear-energy-relationship-amazon) Google、Ormat、NV Energy 的地热 PPA 最高 150MW，仍需监管批准。[Ormat](https://investor.ormat.com/news-events/news/news-details/2026/Ormat-Technologies-Announces-the-Signing-of-Geothermal-Portfolio-PPA-of-Up-to-150-MW-to-Support-Googles-Data-Center-Operations-Through-NV-Energy/default.aspx) | PPA 说明 hyperscaler 正在主动锁定长期清洁基荷，但大量新增电力在 2028-2032 年才贡献实物供给，对 2026 年新增 GPU 集群只能部分缓释。 |
| 项目延期迹象 | Axios 引述 Sightline Climate 称，2026 年原定上线的全球数据中心项目最多约一半可能延期，约 11GW 仍停留在公告阶段；但 2025 年新增容量创纪录，2026 年仍有望继续增长。[Axios/Sightline](https://www.axios.com/2026/02/24/ai-data-center-boom-projects-numbers) | 这支持“节奏后移”而非“需求消失”。成熟项目上量，公告型项目出清，半导体链订单质量的重要性上升。 |
| 全球重点区域 | 新加坡在 DC-CFA2 中仅释放至少 200MW 新数据中心容量，并要求绿色能源路径和效率约束。[IMDA/EDB](https://www.imda.gov.sg/proposal-submission/call-for-application-data-centre-2) 欧洲多个核心市场的电网连接、规划和土地仍是限制项；IEA 也强调电力瓶颈的本地冲击比全球占比更显著。 | 全球 AI 算力布局将从传统互联网枢纽向“电力先行”的区域迁移。对半导体需求不是负面总量冲击，但会改变出货目的地、客户组合和库存节奏。 |

## 对 2026 年 hyperscaler capex 的压力测试

第一，2026 年大厂 capex 计划大概率仍能执行其核心部分。理由是 hyperscaler 的高优先级项目通常提前数年锁定园区、变压器、PPA、输电升级和备份电源；Microsoft、Amazon、Google、Meta 等已经把采购从普通可再生能源 PPA 拓展到核电、地热、现场燃气、储能和电网增强。对最核心训练集群而言，电力约束更多体现为成本上升和选址迁移，而非马上停建。

第二，边际项目的兑现风险显著上升。AI 数据中心从传统 20-50MW 园区向 100MW、数百 MW 甚至 GW 级园区演进后，单个项目不再只是接入负荷，而是改变区域供需平衡。PJM 的做法已经说明，电网规划开始要求近端负荷具备 firm commitment；没有确定电力服务义务、建设承诺或设备采购凭证的项目，会在系统预测中被折减。这意味着“宣布 capex”与“可部署算力”之间的折扣率正在上升。

第三，现场发电不是万能解。燃气机组能够缩短对远端输电的依赖，但当前燃机供应、燃气管网、排放许可和建设成本本身已进入瓶颈。Wood Mackenzie 所称的订单与制造能力缺口意味着，2026 年以后自备电源会成为具备采购能力的头部客户优势，而不是全行业的即时解决方案。对小型 colocation、二线云厂和公告型 AI 园区，燃机反而可能成为新的排队项。

第四，PPA 的时间错配很重要。核电重启、SMR、增强型地热和大型清洁能源 PPA 对 2030 年前后的 AI 负荷很关键，但多数不能在 2026 年形成完整可用电力。Microsoft 的 Three Mile Island 重启目标是 2028 年；Amazon/Talen 的核电 PPA 也主要在 2029 年以后上量。由此看，2026 年最稀缺的是已经接近投运的变压器、开关柜、输电节点和可调度电源，而不是 2030 年以后的能源愿景。

## 对半导体供应链的传导

1. GPU、HBM、先进封装的总需求仍有支撑。只要 hyperscaler capex 仍在上修，且 2026 年已有项目具备电力锁定，头部芯片订单不会因为电力约束立即反转。电力瓶颈更可能推高客户对高能效 GPU、液冷系统、机架级电源和网络效率的重视。

2. 出货与部署的时间差会扩大。芯片可能先进入客户库存、集成商在制品或待上电园区，收入确认与实际算力上线之间的可见度下降。若后续云收入、训练需求或推理 monetization 不及预期，这部分时间差会放大市场对“订单是否真实消化”的质疑。

3. 半导体链的订单质量会分化。具备绑定电力项目的客户订单可信度更高；依赖 speculative campus、未获批 PPA 或未采购关键电气设备的订单，应打更高折扣。对投资组合而言，单纯看 GPU backlog 不够，需要追踪客户的 power-secured MW。

4. 供应链受益环节外溢。电力约束会把 AI 主题部分收益从芯片转向电气设备、输配电、燃机、备用电源、液冷、PDU、UPS、电缆和电网服务。半导体仍是主线，但估值溢价会更偏向“每瓦算力效率”和“可上电项目绑定”。

## 可跟踪指标

- Hyperscaler 披露的 capex 中，数据中心土建、服务器、租赁、能源与电网投资的拆分。
- 大型客户新增的 firm power、PPA、utility service agreement、interconnection agreement 和 construction commitment。
- PJM、ERCOT、MISO、Dominion、AEP、Entergy 等区域的负荷预测、容量拍卖价格、输电升级队列。
- 大型电力变压器、GSU、HV/MV switchgear、燃机的交付周期和订单价格。
- 数据中心在建容量与已公告容量的差距，特别是 2026 年仍未开工的 GW 级项目。
- GPU 出货客户是否匹配已上电或 12-18 个月内可上电的园区。

## 对上一张卡的修正

我不否定 Card 01 对半导体景气的基础判断，但将其强度下调为“有电力认证的景气”。2026 年 AI capex 向半导体链的传导仍然存在，但边际传导效率会下降：同样 1 美元 capex，对芯片的即时拉动低于 2024-2025 年，因为更多资本要先进入电力、输配电和现场能源系统。若市场仍按“capex 上修等于芯片出货全额兑现”定价，则存在节奏后移风险。

## 下一步交接

建议交给 `utilities-analyst [primary]`，继续把本卡的电力瓶颈转化为区域电网和公用事业层面的可量化判断：哪些区域 2026 年仍有可用 firm capacity，哪些区域需要通过更高电价、容量费用或 utility-backed generation 才能接纳 AI 数据中心，成本最终由 hyperscaler、colocation、utility ratepayer 还是半导体链吸收。

## Follow-up

- Analyst: utilities-analyst
- Topic: AI 数据中心负荷增长对美国重点电网区域和公用事业成本分摊的影响
- Question: PJM、ERCOT、Southeast 等重点区域的 firm capacity、容量价格、输电升级和 utility-backed generation 是否会把 2026-2027 年 AI 数据中心成本压力传导给 hyperscaler、colocation 客户或当地电价？
