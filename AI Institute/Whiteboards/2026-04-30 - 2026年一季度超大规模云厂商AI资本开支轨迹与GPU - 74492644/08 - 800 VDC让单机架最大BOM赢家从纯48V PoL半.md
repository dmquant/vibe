---
source: ai-institute
resource_type: whiteboard-card
card_index: 8
status: completed
analyst_level: "行业研究"
---

# 800 VDC让单机架最大BOM赢家从纯48V/PoL半导体转向Flex/Delta式电源柜平台，同时把最强半导体锁定留给TI、Infineon和少数赢下VPD插槽的Vicor。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **synthesize**
Completed: **30/04/2026, 07:35:17**

## Links

- Whiteboard topic: [[2026年一季度超大规模云厂商AI资本开支轨迹与GPU ASIC供应链含义]]
- Card topic: [[800 VDC让单机架最大BOM赢家从纯48V PoL半导体转向Flex Delta式电源柜平台，同时把最强半导体锁定留给TI、Infineon和少数赢下VPD插槽的Vicor。]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

800 VDC让单机架最大BOM赢家从纯48V/PoL半导体转向Flex/Delta式电源柜平台，同时把最强半导体锁定留给TI、Infineon和少数赢下VPD插槽的Vicor。

## Question

Investigate the topic "800 VDC让单机架最大BOM赢家从纯48V/PoL半导体转向Flex/Delta式电源柜平台，同时把最强半导体锁定留给TI、Infineon和少数赢下VPD插槽的Vicor。" and make the strongest evidence-based judgment you can.

## Summary

本卡综合前序48V/PoL瓶颈判断，认为800 VDC迁移会把最大单机架美元BOM从48V板级模块转移到sidecar/in-row电源柜、BBU/CBU、800V保护和高变比转换。Flex、Delta、LITEON拿到最大硬件BOM，其中Flex与Delta最强；TI和Infineon在安全关键半导体、热插拔、保护和800V-to-low-voltage转换上锁定更好；MPS是广谱PoL受益者但不是最高锁定；Vicor在VPD赢下插槽时锁定最强，但也是架构跳迁和替代认证风险最高的名字。

## Report

# 卡片08 - AI电源管理BOM迁移：从48V/54V Blackwell到800 VDC Rubin/Kyber

## 立场

我对卡片07做综合并把供应商排序进一步收敛。48V/54V层在GB200/GB300以及近期定制ASIC主板上仍然重要，但NVIDIA公开的800 VDC路线图改变了价值池：最大增量机架BOM从机架内54V电源架和铜排，迁移到sidecar或in-row电源柜、800V保护、储能以及高变比DC/DC转换。因此，不能只按“功率半导体纯度”给所有供应商排序。

## 核心判断

单AI计算机架的最高增量美元BOM应由**Flex、Delta和LITEON**获得，因为800 VDC把电源从IT机架内解耦出来，把电源架、BBU/CBU、DC配电和机械集成变成平台级子系统。在半导体供应商中，风险调整后的最佳设计锁定是**TI和Infineon**，因为800V迁移创造了热插拔、保护、Si/SiC/GaN转换、遥测以及800V到低压参考设计等强制新插槽。**Vicor**在其vertical power delivery进入高电流处理器设计时锁定最强，但跳迁风险也最高，因为Kyber原生800V架构和NVIDIA多供应商生态，可能把更多价值导向800V-to-12V/6V转换加传统多相PoL。**MPS**是高质量48V与PoL受益者，但更偏逐插槽收益而非平台控制。**LiteOn**在GB300 PSU和储能中位置强，但在完整电源柜架构层面的可替代性高于Flex或Delta。

## 为什么架构变化会重排供应商

物理约束很直接。一个142 kW GB300 NVL72机架在50V输出母线上，意味着冗余和瞬态裕量之前约有**2,840 A**机架DC电流。未来880 kW或1 MW Kyber级机架若仍用50V，则对应**17,600-20,000 A**，这已不是单机架铜排和连接器可以经济处理的区间。NVIDIA指出，当机架超过200 kW时54 VDC配电会成为瓶颈；现有GB200/GB300系统最多可用八个电源架；若Kyber规模继续使用54V，电源架可能占用最多64U机架空间，而1 MW机架可能需要最多200 kg铜排（[NVIDIA 800 VDC技术博客](https://developer.nvidia.com/blog/nvidia-800-v-hvdc-architecture-will-power-the-next-generation-of-ai-factories/)）。

800 VDC方案不只是提高电压。NVIDIA架构把AC-to-800 VDC转换集中化，在数据大厅内分配800 VDC，再在计算机架附近转换。NVIDIA称，800V busway在同等导体尺寸下可传输**85%更多功率**，铜用量减少**45%**，端到端效率最多提升**5%**，并且全规模800 VDC数据中心将与**2027年NVIDIA Kyber机架级系统**同步（[NVIDIA 800 VDC技术博客](https://developer.nvidia.com/blog/nvidia-800-v-hvdc-architecture-will-power-the-next-generation-of-ai-factories/)）。后续生态博客称Kyber采用800 VDC，高压电直接分配到计算节点，再由靠近GPU的高变比**64:1 LLC converter**降至12 VDC（[NVIDIA生态博客](https://developer.nvidia.com/blog/building-the-800-vdc-ecosystem-for-efficient-scalable-ai-factories/)）。

这带来两层投资结论：

| 层级 | 主要价值创造 | 最有利供应商 | 设计锁定质量 |
|---|---|---|---|
| 机架/sidecar电源硬件 | 最大美元BOM：电源柜、电源架、BBU/CBU、DC配电、机械件、认证、制造 | Flex、Delta、LITEON | NVIDIA认证电源柜SKU锁定高，但长期会多供应商化 |
| 800V保护和转换半导体 | 强制新半导体插槽：热插拔、eFuse/保护、SiC/GaN器件、隔离母线转换、遥测 | TI、Infineon、MPS、Vicor | 板级锁定高，但NVIDIA列出很多生态伙伴，垄断价值较低 |
| 最终PoL / vertical power delivery | 性能敏感度最高，赢下插槽时锁定最强 | Vicor、MPS、TI、Infineon | 单个加速器主板锁定很高，但面临架构和认证变化 |

## 供应商排序

| 排名 | 供应商 | 单计算机架增量BOM | 设计锁定 | 主要上行 | 主要风险 |
|---:|---|---:|---|---|---|
| 1 | **Flex** | 很高：按sidecar支持的计算机架数量分摊，估算每计算机架**$40k-90k**的800V电源柜硬件 | 高 | Flex推出与NVIDIA合作开发、支持Vera Rubin的**800 VDC Power Rack**；它把电源移出IT机架，包含Flex电源架，支持BBU/CBU选项，并称每机架可用计算功率可从约**125 kW提升至最高880 kW**（[Flex公告](https://investors.flex.com/news/news-details/2026/Flex-Launches-800-VDC-Power-Rack-for-Next-Generation-NVIDIA-AI-Infrastructure/default.aspx)） | 来自Delta、LiteOn、ODM和云厂商直接设计的多供应商风险；硬件利润率低于专有半导体 |
| 2 | **Delta** | 很高：若包含电源、BBU和热管理邻近系统，估算每计算机架分摊**$45k-100k** | 高 | Delta展示**800 VDC in-row 660 kW电源柜**、六个**110 kW**电源架、**480 kW**嵌入式BBU、最高**98%**效率的**18.5 kW** AC/DC PSU，以及**2.4 MW** CDU（[Delta公告](https://www.delta-americas.com/en-US/news/40116)） | BOM大但排他性较低；云厂商可能按区域和ODM关系拆分订单 |
| 3 | **LITEON** | 高：每计算机架分摊**$30k-80k**，在GB300式PSU和储能中最高 | 中高 | LITEON与NVIDIA GB300功率平滑明确相关：NVIDIA称LITEON优化了GB300 PSU电力电子，方案采用**65 joules/GPU**储能（[NVIDIA GB300电源博客](https://developer.nvidia.com/blog/how-new-gb300-nvl72-features-provide-steady-power-for-ai)）。LITEON也在GTC 2026展示面向Vera Rubin的**800 VDC Power Rack**、**110 kW Power Shelf**和**2.1 MW** in-row CDU（[LITEON公告](https://www.prnewswire.com/news-releases/liteon-showcases-next-generation-800-vdc-and-nvidia-vera-rubin-platform-solutions-at-nvidia-gtc-2026-302715737.html)） | 当代产品锁定强，但若Flex/Delta赢得sidecar架构，份额可能被挤出；PSU/电源架内容比控制器/保护半导体更容易商品化 |
| 4 | **TI** | 中等：若赢得800V热插拔、800V-to-6V和最终buck插槽，估算每计算机架**$2k-8k**半导体/模块内容 | 高 | TI宣布与NVIDIA合作的完整800 VDC架构，只需两级转换即可从**800V到GPU core power**：**800V-to-6V**隔离母线转换器，峰值效率**97.6%**且功率密度**>2000 W/in³**，再由**6V-to-<1V**多相buck转换（[TI公告](https://www.ti.com/about-ti/newsroom/news-releases/2026/2026-03-16-ti-unveils-complete-800-vdc-power-architecture-for-future-generation-ai-data-centers-with-nvidia.html?HQS=multi-tech-data-gridtogate_dce_nvidiagtc-bhp-pr-null-wwe)） | 参考设计转化为广泛量产插槽仍有执行风险；TI体量大，公司层面收入弹性被稀释 |
| 5 | **Infineon** | 中等：热插拔、保护、Si/SiC/GaN功率器件、TLVR/PoL合计每机架约**$1.5k-6k** | 高 | Infineon支持NVIDIA 800 VDC架构，强调热插拔、可维护性、SiC/GaN/Si转换和降低损耗（[Infineon公告](https://www.infineon.com/press-release/2025/INFXX202510-003)）。其AI电源页面还列出数字多相PWM控制器、PMBus PoL、48V smart eFuse，以及400/800V热插拔参考板（[Infineon AI页面](https://www.infineon.com/technology/ai/we-power-ai)） | “安全税”暴露强，但未必是最高单机架美元BOM；SiC/GaN器件面临STMicroelectronics、Renesas、Navitas、onsemi等竞争 |
| 6 | **MPS** | 中等：每机架约**$1.5k-6k**，若在多托盘中赢得高密度PoL和48V-to-intermediate-bus模块则更高 | 中高 | MPS提供48V数据中心方案、10:1 LLC模块、eFuse、数字多相控制器，Intelli-Phase/Intelli-Module连续电流额定值最高**90A/170A**，并支持NVIDIA PWM-VID（[MPS 48V页面](https://www.monolithicpower.com/en/products/power-management/48v-data-center.html)）。MPS还披露2025年Enterprise Data收入**$701.8 million**，Q4 Enterprise Data收入**$233.5 million**，并正在为数据中心采样**800V power solution**（[MPS 2025业绩说明](https://www.globenewswire.com/news-release/2026/02/05/3233414/0/en/Monolithic-Power-Systems-Provides-Earnings-Commentary-for-the-Quarter-and-Year-Ended-December-31-2025.html)） | 48V模块领先不能自动映射到Kyber原生800V；最终PoL可多供应商化，且受控制器认证变化影响 |
| 7 | **Vicor** | 双峰分布：取决于VPD是否进入设计，每机架**$0-10k+**；在赢得加速器主板时美元内容很高 | 赢下时很高，绕开时很低 | Vicor的FPA/VPD架构把current multiplication放在高电流处理器附近或下方；Vicor称VPD可显著降低PDN损耗，单个处理器可能需要**600-1000 A**（[Vicor VPD文章](https://www.vicorpower.com/resource-library/articles/high-performance-computing/powering-clustered-ai-processors)）。Vicor 2025年backlog为**$176.9 million**，product revenue为**$350.3 million**，royalty revenue为**$57.4 million**，管理层计划第二座ChiP fab，并探索高电流密度Gen 2 VPD模块的替代来源（[Vicor 2025业绩公告](https://vicorcorporation.gcs-web.com/news-releases/news-release-details/vicor-corporation-reports-results-fourth-quarter-and-year-8)） | 最高架构跳迁风险：若NVIDIA和云厂商标准化为800V-to-12V/6V加传统多相PoL，Vicor的48V direct-to-load优势会收窄；替代来源计划也削弱单一供应商锁定 |

## 谁获得最佳单机架经济性？

按**绝对BOM美元**，排序是**Delta/Flex/LITEON第一梯队**，之后才是半导体供应商。原因不是利润率质量，而是物理范围。660-880 kW电源柜、BBU/CBU、电源架、风扇或无风扇机械结构、隔离、监控、连接器、安全互锁和制造测试，本身就是比控制器IC和功率级更大的账单。因此Flex和Delta是单机架美元增量最高的赢家。我把**Flex略放第一**，因为其Vera Rubin指向更明确且披露了125 kW到880 kW的计算机架功率提升；把**Delta几乎并列**，因为其660 kW in-row电源柜、480 kW BBU和2.4 MW CDU给了它更宽的电源加热管理边界。

按**设计锁定**，答案分裂：

- **最强平台锁定：**Flex和Delta，前提是其800V电源柜成为某个云厂商区域或NVIDIA MGX部署的认证sidecar。
- **最强半导体锁定：**TI和Infineon，因为800V热插拔/保护和高变比转换是安全关键、认证负担很重的插槽。
- **最强板级性能锁定：**Vicor，但仅限其VPD/FPA进入处理器封装或主板设计时。这是最高锁定、最高波动的敞口。
- **最佳广谱PoL敞口：**MPS，因为它拥有高密度模块、NVIDIA PWM-VID支持以及较大的Enterprise Data收入基础，但控制整个架构的概率较低。

## 替代认证与跳迁风险图

| 风险类别 | 最暴露供应商 | 原因 |
|---|---|---|
| 从54V/48V跳到800V的架构风险 | Vicor、MPS、LITEON | 48V电源架、48V-to-load模块和GB300 PSU内容，可能在Kyber中被重新设计为800V-to-12V/6V加新最终PoL |
| 替代认证 / 多供应商 | Vicor、LITEON、Delta、Flex | NVIDIA生态名单已包含许多半导体和电源系统伙伴；云厂商不会让兆瓦级机架单一来源 |
| 商品化 | LITEON、Delta、Flex | 电源架和机架机械BOM更大，但若不绑定固件、BBU、安全认证和区域制造，结构性利润率低于专有半导体 |
| 半导体替代 | MPS、TI、Infineon | 若效率、热密度或遥测未达NVIDIA/云厂商目标，参考设计插槽可能迁移 |
| 标准与安全延迟 | TI、Infineon、Delta、Flex、LITEON | 800V DC引入热插拔、电弧、技术人员安全和故障隔离复杂性；NVIDIA称安全、标准和员工培训仍是活跃挑战（[NVIDIA 800 VDC技术博客](https://developer.nvidia.com/blog/nvidia-800-v-hvdc-architecture-will-power-the-next-generation-of-ai-factories/)） |

## 投资含义

1. **不能把48V赢家自动视为800V赢家。** 卡片07判断48V/PoL是液冷之后的第二层瓶颈是正确的，但800V迁移是架构断点。它为系统级Flex/Delta/LITEON，以及保护/转换层TI/Infineon创造了更多空间。

2. **最干净的增量BOM在解耦式电源柜。** Flex和Delta应获得最大的单机架美元提升，因为架构把电源硬件实际移出计算机架。这也是云厂商为锁定产能最容易提前采购的项目。

3. **最干净的锁定在安全关键半导体。** Infineon和TI未必拿到最大美元BOM，但热插拔、过流保护、高压隔离、遥测和最终稳压认证难度高。一旦通过认证，替换成本有意义。

4. **Vicor是期权型敞口，不是线性800V赢家。** 其VPD技术对超高电流GPU和ASIC仍高度相关，但NVIDIA公开800V参考路径降低了“每个Rubin/Kyber机架都维持同等相对内容”的置信度。风险不是Vicor技术弱，而是NVIDIA平台策略重视多供应商、标准化800V生态。

5. **MPS仍是高质量广谱敞口，但不是最高锁定标的。** Enterprise Data修复和800V采样支持AI电源逻辑，但从48V中间母线到800V原生设计的迁移，可能压缩部分现有插槽，同时打开新插槽。

## 结论

针对本卡问题，排序如下：

**最高单机架增量BOM：****Flex ≈ Delta > LITEON > TI ≈ Infineon ≈ MPS > Vicor**，按概率加权口径。

**赢下插槽后的最强设计锁定：****Vicor > TI ≈ Infineon > Flex ≈ Delta > MPS > LITEON**。

**48V-to-800V迁移的最佳风险调整受益者：****Flex、Delta、TI和Infineon**。

**最面临替代认证或架构跳迁风险：****Vicor和LITEON第一，MPS第二**；Flex/Delta更多是竞争性分单风险，而不是架构失效风险。

## 来源

- [NVIDIA, 800 VDC Architecture Will Power the Next Generation of AI Factories](https://developer.nvidia.com/blog/nvidia-800-v-hvdc-architecture-will-power-the-next-generation-of-ai-factories/)
- [NVIDIA, Building the 800 VDC Ecosystem for Efficient, Scalable AI Factories](https://developer.nvidia.com/blog/building-the-800-vdc-ecosystem-for-efficient-scalable-ai-factories/)
- [NVIDIA, How New GB300 NVL72 Features Provide Steady Power for AI](https://developer.nvidia.com/blog/how-new-gb300-nvl72-features-provide-steady-power-for-ai)
- [NVIDIA, Vera Rubin POD technical blog](https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/)
- [Vertiv, GB300 NVL72 142 kW cooling and power reference architecture](https://www.vertiv.com/en-anz/about/news-and-insights/news-releases/vertiv-develops-energy-efficient-cooling-and-power-reference-architecture-for-the-nvidia-gb300-nvl72/)
- [Lenovo, GB300 NVL72 technical specifications](https://pubs.lenovo.com/gb300-nvl72/server_specifications_technical)
- [Flex, 800 VDC Power Rack for NVIDIA Vera Rubin](https://investors.flex.com/news/news-details/2026/Flex-Launches-800-VDC-Power-Rack-for-Next-Generation-NVIDIA-AI-Infrastructure/default.aspx)
- [Delta, 800 VDC power, cooling and microgrid solutions at NVIDIA GTC](https://www.delta-americas.com/en-US/news/40116)
- [LITEON, 800 VDC and NVIDIA Vera Rubin platform solutions](https://www.prnewswire.com/news-releases/liteon-showcases-next-generation-800-vdc-and-nvidia-vera-rubin-platform-solutions-at-nvidia-gtc-2026-302715737.html)
- [TI, complete 800 VDC power architecture with NVIDIA](https://www.ti.com/about-ti/newsroom/news-releases/2026/2026-03-16-ti-unveils-complete-800-vdc-power-architecture-for-future-generation-ai-data-centers-with-nvidia.html?HQS=multi-tech-data-gridtogate_dce_nvidiagtc-bhp-pr-null-wwe)
- [Infineon, 800 Volt AI data center power architecture](https://www.infineon.com/press-release/2025/INFXX202510-003)
- [Infineon, We power AI](https://www.infineon.com/technology/ai/we-power-ai)
- [MPS, 48V data center power management](https://www.monolithicpower.com/en/products/power-management/48v-data-center.html)
- [MPS, 2025 earnings commentary](https://www.globenewswire.com/news-release/2026/02/05/3233414/0/en/Monolithic-Power-Systems-Provides-Earnings-Commentary-for-the-Quarter-and-Year-Ended-December-31-2025.html)
- [Vicor, Powering clustered AI processors](https://www.vicorpower.com/resource-library/articles/high-performance-computing/powering-clustered-ai-processors)
- [Vicor, 2025 results release](https://vicorcorporation.gcs-web.com/news-releases/news-release-details/vicor-corporation-reports-results-fourth-quarter-and-year-8)
- [Open Compute Project, Open Rack V3 IT Gear 48V Input Connector](https://ocpprodweb3.opencompute.org/documents/ocp-open-rack-v3-it-gear-input-connector-rev01-6-220929-pdf)

## 工作区来源说明

实时工作区读取到了`card-02`、`card-05`和`card-06`，但`session-brief.md`、`analyst-catalog.json`、`card-01`、`card-03`、`card-04`和`card-07`不在实时文件系统中。我根据用户提供的session snapshot重建缺失上游上下文，并用实时一手网页证据完成本卡供应商排序。

## Follow-up

- Analyst: industrials-analyst
- Topic: 800 VDC电源柜、BBU/CBU与高压配电硬件的量产产能和交付周期
- Question: 在Flex、Delta、LITEON、Vertiv、Schneider、Eaton等供应商中，谁在2026-2027年真正拥有可交付的800 VDC电源柜、BBU/CBU和高压配电产能？云厂商提前锁产能后，哪一类硬件会成为Rubin/Kyber落地的下一道交付瓶颈？
