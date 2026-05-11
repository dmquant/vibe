---
source: ai-institute
resource_type: whiteboard-card
card_index: 3
status: completed
analyst_level: "行业研究"
---

# 车载边缘 AI SoC 是国产万亿级 Agent 执行效率的首个规模化验证点，但估值应支付给已装车的任务级 tokens/W 和经济性改善，而不是峰值 TOPS。

Analyst: **Auto Analyst**
Status: **completed**
Stance: **support**
Completed: **29/04/2026, 18:45:52**

## Links

- Whiteboard topic: [[边缘 AI 代理：从云端竞赛到终端革命]]
- Card topic: [[车载边缘 AI SoC 是国产万亿级 Agent 执行效率的首个规模化验证点，但估值应支付给已装车的任务级 tokens W 和经济性改善，而不是峰值 TOPS。]]
- Analyst: [[Auto Analyst]]
- Analyst level: [[行业研究]]

## Topic

车载边缘 AI SoC 是国产万亿级 Agent 执行效率的首个规模化验证点，但估值应支付给已装车的任务级 tokens/W 和经济性改善，而不是峰值 TOPS。

## Question

Investigate the topic "车载边缘 AI SoC 是国产万亿级 Agent 执行效率的首个规模化验证点，但估值应支付给已装车的任务级 tokens/W 和经济性改善，而不是峰值 TOPS。" and make the strongest evidence-based judgment you can.

## Summary

本卡支持前序“执行效率取代峰值算力成为估值锚”的判断，并把验证点落到车载边缘 AI。中国 2025 年 NEV 销量 16.49 million units、占总销量 47.9%，为 ADAS SoC、LiDAR、舱驾融合和域控制器提供规模化场景。最先变现的不是 L3/L4 订阅，而是已经装车的 L2+/NOA、传感器前端、座舱 AI 和电源/热管理/内存系统。投资者应要求任务级 watts、p99 延迟、热稳态、出货、ASP 和 BOM 证据，用广义 tokens/W 衡量每瓦有用感知、决策和交互工作，削弱单一 TOPS 营销权重。

## Report

# 车载边缘 AI SoC：国产 Agent 执行能力的首个规模化验证点

**分析师：** 汽车行业分析师  
**卡片：** 3/8  
**立场：** 支持，但需要估值纪律  
**问题：** 哪些 NEV 与 ADAS 产业链环节最先变现异构边缘 AI，投资者应如何区分真实 tokens/W 执行收益与 TOPS 营销？

## 核心判断

我支持前两张卡的主线：AI 硬件的估值锚正在从峰值算力稀缺转向执行效率。第一个规模化验证点不是手机常驻万亿参数模型，而是中国 NEV。车载场景已经把 ADAS、智能座舱、泊车、能量管理和 OTA 闭环放进同一套异构 SoC 约束之下，要求系统在热、延迟、安全和 BOM 成本边界内持续运行感知、预测、规划、语言、语音和人机交互。

但可投资结论要比营销叙事更窄。最先变现的环节是：

1. **ADAS SoC 与域控制器**：进入量产 L2+/NOA 车型，并通过功能结构升级提升 ASP。
2. **传感器前端链条，尤其是 LiDAR 与摄像头/毫米波雷达处理**：出货量和盈利能力已经开始显性化。
3. **舱驾融合计算平台**：把分散 ECU 收敛到集中式异构计算，并形成 OTA 软件附着点。
4. **电源、热管理、内存、安全中间件和验证工具链**：它们决定边缘 AI 负载能否在车内持续运行，而不是只在实验室跑出峰值。

短期最弱的变现层是完整 L3/L4 自动驾驶订阅收入。监管、责任、保险和用户信任都在推进，但尚不足以成为主估值锚。

## 为什么汽车链是第一验证场

中国汽车市场给边缘 AI 提供了其他终端品类很难具备的规模基础。China Daily 援引 CAAM 数据显示，2025 年中国汽车销量 **34.4 million units**，NEV 销量 **16.49 million units**，NEV 占总销量 **47.9%**，国内市场 NEV 占比 **50.8%**，NEV 出口 **2.62 million units**。[^1] 这很关键，因为车载边缘 AI 不是可选演示负载。每一个新增智能驾驶功能，都会带来摄像头、毫米波雷达、LiDAR、超声波、惯导、地图先验、驾驶员监测、座舱语音和云端反馈之间的实时工作负载。

2025 年的大众化拐点已经体现在 BYD 的推广中。Horizon Robotics 表示，搭载 Journey 6 系列的 BYD DiPilot 100 已在 2025 年 2 月进入大规模量产；Horizon 还表示其已为超过 **1 million BYD vehicles** 提供处理硬件。[^2] 另外，关于 Horizon 2025 年业绩的中文财经报道提到，公司 2025 年芯片方案出货量超过 **4 million** 套，支持 NOA 功能的芯片占出货 **45%**，约为 2024 年同期近 **5x**，ASP 较 2024 年提升超过 **75%**。[^3] 这正是“执行效率”最值得重视的证据：不是更大的 TOPS PPT，而是可部署 NOA 功能占比提升、ASP 上行和主流市场附着。

主 ADAS 处理器之外的供应链也已经商业化。Hesai 2025 年净收入 **RMB3.0276 billion**，LiDAR 总出货 **1,620,406 units**，ADAS LiDAR 出货 **1,381,133 units**，全年 GAAP 净利润 **RMB435.9 million**。[^4] RoboSense 2025 年收入约 **RMB1.94 billion**，LiDAR 总销量约 **912,000 units**，并在 2025Q4 实现成立以来首次季度盈利。[^5] 这些数据说明，边缘 AI 最先在已经装车、已经进入机器人平台、已经有生产规模的硬件环节变现，而不是在承诺完全自动驾驶的路线图上变现。

全球平台数据也强化了同一判断。Qualcomm FY2025 10-K 显示汽车业务收入 **$3.957 billion**，高于 FY2024 的 **$2.910 billion**，主要受 Snapdragon 数字座舱产品在新车型发布中的出货增长驱动。[^6] Qualcomm 还表示，截至 2025 年 6 月，集成 AI 的 Snapdragon Cockpit 平台已经覆盖超过 **75 million vehicles**，Ride Flex 已在 **eight global programs** 的量产车型中部署。[^7] NVIDIA FY2025 汽车业务收入增长 **55%** 至 **$1.7 billion**，由自动驾驶平台销售驱动。[^8] 换言之，车载边缘 AI 市场已经真实存在，但变现集中在量产项目，而不是抽象算力口号。

## 最先变现的产业链环节

| 排名 | 环节 | 为什么先变现 | 投资者应要求的证据 |
|---:|---|---|---|
| 1 | ADAS SoC 与域控制器 | OEM 需要把 L2+/NOA 下放到 RMB 100,000-200,000 主流车型；计算平台进入车型周期后具备多年收入可见度。 | 车型 SOP、出货量、ASP 趋势、NOA 占比、热稳态延迟、ASIL/安全认证、OTA 节奏。 |
| 2 | LiDAR、摄像头/毫米波雷达处理、传感器融合 | 传感器把 AI 从软件承诺变成感知冗余；LiDAR 供应商已经报告百万级年度出货。 | ADAS 出货增长、降价下毛利率、车型定点、自研 ASIC/SPAD/ISP 成本曲线、缺陷和质保数据。 |
| 3 | 舱驾融合 SoC | 座舱 AI、语音 Agent、泊车、驾驶员监测与 ADAS 共享数据和算力；集成可减少 ECU 数量和线束成本。 | ECU 收敛、BOM 降低、混合关键性隔离、OTA 附着、座舱 AI 使用率、单车软件收入。 |
| 4 | 电源、热管理、内存、PMIC、安全 OS、中间件 | 真实 tokens/W 取决于热和功耗约束下的持续运行；内存和热设计弱会让峰值 TOPS 失效。 | 路线任务中的系统功耗、内存带宽利用率、p99 延迟、热降频、安全分区、全系统验证。 |
| 5 | 数据闭环、仿真、标注、监管验证 | 没有数据迭代和安全论证，再好的 SoC 也会折价；验证会成为工具链和服务机会。 | 接管里程、场景覆盖、安全论证文档、OTA 回归速度、监管审批进展。 |

关键区别在于，前三个环节已经有硬件附着、出货和收入指标。第四、第五个环节往往隐藏在平台毛利或供应商合同中，投资者需要更多推断和产业链验证。它们依然重要，因为它们决定平台标称算力能否转化为有用的车辆行为。

## 如何把 tokens/W 翻译到汽车场景

在汽车里，tokens/W 不应只理解为 LLM 输出 token。车载边缘 Agent 的负载包括感知语义 token、occupancy grid、目标轨迹、路线指令、座舱语音、驾驶员意图、泊车约束和安全状态决策。正确指标是**真实驾驶任务下每瓦完成的有用决策工作**，不是**未说明精度条件下的峰值 TOPS**。

一个可操作的投资者指标栈应包括：

1. **任务级能耗：** 高速 NOA、城区 NOA、自动泊车、语音 Agent 交互和座舱监测每小时消耗的 Wh，在域控制器或整车电气系统层面测量。
2. **有效输出速率：** 实际影响任务的帧处理数、目标跟踪数、occupancy 更新、规划周期、成功路线动作、语音/LLM token。
3. **延迟与稳定性：** p50/p95/p99 延迟、冷启动延迟、30-60 分钟热浸后的降频，以及夏季座舱温度下的表现。
4. **内存与数据搬运：** 片上 SRAM/cache 命中率、DRAM 带宽、传感器 I/O 饱和、KV-cache 或时序特征压缩、摄像头/LiDAR/毫米波雷达之间的同步成本。
5. **安全边界：** 功能安全分区、降级路径、ASIL 目标、信息安全合规和更新验证。
6. **经济性：** SoC ASP、域控制器 BOM、搭载率、软件付费率、质保成本，以及功能是否提升定价能力，还是只变成标准化成本负担。

MLCommons 的 MLPerf 功耗方法论提供了有用纪律：在边缘推理中，它强调测量系统功耗或每条 stream 能耗，并提示 TDP 等功耗说法如果没有跟随 benchmark 被测量，就不是经 MLCommons 验证的数据。[^9] 汽车投资者应采用同样纪律。不能披露持续系统功耗、p99 延迟和定义路线下任务成功率的供应商，卖的是营销数字，不是执行资产。

## 如何区分真实执行收益与 TOPS 营销

**高质量证据应当长这样：**

- 芯片进入具名量产车型，而不仅是定点幻灯片。
- 平台改善经济结构：ASP 上升、NOA-capable 占比提高、域控制器 BOM 下降，或同等功能下系统功耗下降。
- 供应商披露真实工作负载结果：高速 NOA、城区 NOA、泊车、多摄感知、驾驶员监测和语音 Agent 延迟。
- 平台能热稳态运行。一个会快速热降频的 560 TOPS 芯片，不如一个较低 TOPS 但能把 p99 延迟稳定压在安全预算内的设计。
- 软件栈支持稀疏激活、量化、传感器预处理，以及 CPU、GPU、NPU/BPU、ISP、DSP、MCU 之间的异构调度。
- OEM 采用从高端旗舰扩展到主流配置，因为可服务单车数量会大幅放大。

**低质量证据通常长这样：**

- 单一峰值 TOPS，没有说明精度、稀疏率、batch size、内存带宽或功耗条件。
- “万亿参数”说法不解释车端运行的是本地稠密模型、稀疏 MoE expert 路径、蒸馏模型，还是云端协同执行。
- 演示忽略 p99 延迟、热浸、夜间/雨天/施工场景和驾驶员接管率。
- 硬件路线图没有可见 SOP、没有安全认证路径、也没有车型周期匹配。
- 在 L3 责任、保险定价和用户信任解决之前，就宣称订阅收入大规模兑现。

Black Sesame A1000 是一个合适的比较案例。TechInsights 报告 A1000 为 **58 TOPS (INT8)**，功耗 **18W**。[^10] 重点不是 58 TOPS 本身。投资问题是，58 TOPS/18W 结合 ISP、安全 MCU、内存和软件后，能否以更低 BOM、更好持续延迟满足目标 L2+/泊车域。反过来，高 TOPS 平台也不必然更优，除非它的全系统功耗、内存搬运和路线级任务成功率更好。

## OEM 与供应商含义

对 OEM 来说，智能驾驶在中国正在变成标配。BYD 的动作降低了高速 NOA 和泊车辅助的价格门槛；这会压缩单纯功能营销的差异化，但扩大高效 SoC 的可服务市场。胜出的 OEM 将是那些能把边缘 AI 转化为更低事故风险、更顺滑驾驶、更便利泊车、更个性化座舱交互和更快 OTA 改进，同时不显著破坏毛利率的公司。

对芯片供应商来说，可投资信号是三件事的闭环：**出货、结构和实测效率**。Horizon 2025 年被报道的出货和结构改善，比单独 TOPS 更强，因为它把下游采用和 ASP 提升联系起来。[^3] Qualcomm 的汽车收入基础说明，座舱和连接可以先于完全自动驾驶规模化。[^6] NVIDIA 体现了高端自动驾驶平台需求，但其汽车收入相对于数据中心仍很小；投资者不应仅因为公司整体 AI 品牌强，就过度支付汽车敞口估值。[^8]

对 LiDAR 和传感器供应商来说，2025 年是验证年。Hesai 全年 GAAP 盈利和百万级 ADAS 出货显示，传感器 AI 在标准化和规模制造后可以变现。[^4] RoboSense 首次季度盈利也指向同一方向，同时提示第二条主线：机器人需求可能在下一阶段与汽车一样重要。[^5] 因此投资者要区分“车载 LiDAR 搭载率赢家”和“多垂直场景感知部件平台”。

对 Tier 1 和模块厂来说，边缘 AI 变现从简单组装转向系统集成。域控制器是热管理、安全、内存、电源和软件问题。能把异构计算、电源管理、散热、安全 OS、中间件和验证打包成 OEM 合格平台的公司，应比普通 PCB 组装获得更持久的利润率。

## 监管现实

中国正在推进 L3 试点，但这支持的是长期逻辑，而不是短期收入基准。2025 年 12 月，Deepal SL03 和 Arcfox Alpha S 获得国家级批准，可在重庆和北京指定高速路段开展限定条件 L3 试点。[^11] 同一报道也指出，中国监管部门加强了对 L2 系统营销用语的约束，限制“autonomous driving”“hands-free driving”等误导性表述。[^11]

这对估值很重要。L2+/NOA 可以通过硬件搭载和一次性功能定价规模化。L3 变现需要责任框架、保险定价、驾驶员与车辆责任边界以及监管接受。投资者应把 L3 作为上行情景，而不是基准情景。

## 投资框架

我会把车载边缘 AI 链条分为三类：

**A 类：当前可见变现。** ADAS SoC、LiDAR、智能座舱 SoC、域控制器、电源管理芯片和热管理模块，且已经有量产车型敞口。当收入增长同时伴随毛利率稳定和 ASP/结构改善时，应给予最高估值权重。

**B 类：战略基础设施。** 安全 OS、中间件、工具链、仿真、数据闭环、标注、场景库和验证平台。它们可能形成高质量类软件收入，但披露通常较弱；需要检查客户集中度，并证明产品嵌入 OEM 工作流。

**C 类：期权价值。** L3/L4 订阅、robotaxi 栈和完整车载 Agent 操作系统。空间可能很大，但模型中应假设采用延后、责任成本更高、监管里程碑更严格。

即时选股原则很简单：**为已经装车的边缘 AI 执行付费，不为宣传中的边缘 AI 能力付费**。最可能估值重塑的公司，是那些证明了更低单任务系统成本、更低每次有用决策功耗、更高单车搭载率，同时保持安全和可靠性的公司。

## 结论

车载边缘 AI 是当前国产异构 SoC 最强的验证点，因为它同时具备巨大 NEV 单车规模、实时多模态负载，以及从计算效率到 OEM 功能经济性的直接路径。最先变现的是 ADAS 计算、传感器前端 AI、舱驾融合，以及系统级电源/热管理/内存设计。TOPS 仍是有用输入参数，但已经不是单独可投资指标。估值锚应是广义汽车场景下的 **tokens/W：在量产车中持续完成的每瓦有用感知、决策和交互工作，并且具备经济性 BOM**。

## 交接

建议下一位分析师：**industrials-analyst [primary]**。下一步问题应从车辆采用转向制造和部件扩产：随着异构车载计算从高端域控制器下沉到大众化集中式架构，哪些电源、热管理、内存、连接器、PCB 和模块集成供应商能够获得可持续利润率？

## 资料来源

[^1]: China Daily, "Automotive industry in China holds No 1 spot," Jan. 19, 2026. https://global.chinadaily.com.cn/a/202601/19/WS696d89eba310d6866eb34725.html
[^2]: Horizon Robotics, "BYD Launches DiPilot 100 with Horizon's Journey 6 Series," 2025. https://en.horizon.auto/byd-launches-dipilot-100-with-horizons-journey-6-series/
[^3]: Sina Finance, "地平线年营收37.6亿：同比增57.7% 年芯片方案出货量超400万套," Mar. 20, 2026. https://finance.sina.com.cn/wm/2026-03-20/doc-inhrrrex6786082.shtml
[^4]: Hesai Group, "Hesai Group Reports Fourth Quarter and Full Year 2025 Unaudited Financial Results," Mar. 24, 2026. https://investor.hesaitech.com/news-releases/news-release-details/hesai-group-reports-fourth-quarter-and-full-year-2025-unaudited
[^5]: RoboSense, "RoboSense Beats Expectations, Achieves First-Ever Quarterly Profit on Strong Robotics Growth," Mar. 25, 2026. https://www.robosense.ai/en/news-show-1976
[^6]: Qualcomm FY2025 Form 10-K, QCT segment results. https://www.sec.gov/Archives/edgar/data/804328/000080432825000085/qcom-20250928.htm
[^7]: Qualcomm, "Qualcomm Drives the Future of Mobility with Strong Snapdragon Digital Chassis Momentum and Agentic AI for Major Global Automakers Worldwide," Jan. 2026. https://www.qualcomm.com/news/releases/2026/01/qualcomm-drives-the-future-of-mobility-with-strong-snapdragon-di
[^8]: NVIDIA FY2025 Form 10-K and annual review. https://www.sec.gov/Archives/edgar/data/1045810/000104581025000023/nvda-20250126.htm
[^9]: MLCommons, "Benchmark MLPerf Inference: Edge," power-measurement guidance. https://mlcommons.org/benchmarks/inference-edge/
[^10]: TechInsights, "Black Sesame HuaShan-2 AI A1000 Digital Floorplan Analysis." https://www.techinsights.com/blog/black-sesame-huashan-2-ai-a1000-digital-floorplan-analysis
[^11]: ECNS / China Daily, "China pilots L3 vehicles on roads," Dec. 29, 2025. https://www.ecns.cn/news/sci-tech/2025-12-29/detail-iheyfqph6162206.shtml

## Follow-up

- Analyst: industrials-analyst
- Topic: 异构车载计算下沉后的电源、热管理、内存与模块集成供应链
- Question: 随着 ADAS SoC 和舱驾融合从高端车型进入主流 NEV，哪些电源、热管理、内存、连接器、PCB 和域控制器模块供应商最可能获得可持续利润率，而不是被整车厂压成低毛利代工？
