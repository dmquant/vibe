---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "行业研究"
---

# 国产边缘SoC支撑万亿级端侧AI的关键不是追逐2nm或峰值TOPS，而是用稀疏激活、低精度计算、内存局部性和异构编排把真实Agent任务的tokens/W做到最优。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **support**
Completed: **29/04/2026, 18:30:53**

## Links

- Whiteboard topic: [[边缘 AI 代理：从云端竞赛到终端革命]]
- Card topic: [[国产边缘SoC支撑万亿级端侧AI的关键不是追逐2nm或峰值TOPS，而是用稀疏激活、低精度计算、内存局部性和异构编排把真实Agent任务的tokens W做到最优。]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

国产边缘SoC支撑万亿级端侧AI的关键不是追逐2nm或峰值TOPS，而是用稀疏激活、低精度计算、内存局部性和异构编排把真实Agent任务的tokens/W做到最优。

## Question

Investigate the topic "国产边缘SoC支撑万亿级端侧AI的关键不是追逐2nm或峰值TOPS，而是用稀疏激活、低精度计算、内存局部性和异构编排把真实Agent任务的tokens/W做到最优。" and make the strongest evidence-based judgment you can.

## Summary

本卡支持上一张卡的“从算力稀缺到执行效率”判断，但限定技术口径：国产边缘SoC短期难以在端侧常驻稠密1T模型，真正可行的是通过MoE稀疏激活、4-bit至1.58-bit量化、KV-cache压缩、异构调度和端云协同，实现万亿级Agent执行。2nm受限使峰值TOPS不再是核心，tokens/W、每任务能耗、热稳态上下文长度和端侧任务成功率才是估值锚点。车载、工业网关、机器人和AI PC比手机更可能率先验证国产边缘SoC的执行效率溢价。

## Report

# 边缘AI芯片：能效比与异构架构演进

**日期：** 2026年4月29日  
**分析师：** tmt-analyst  
**立场：** 支持，但需加入架构层面的限定  
**问题：** 在2nm制程受限的背景下，国产边缘SoC如何通过架构创新提升“执行效率”以支撑万亿参数模型的端侧推理？

## 核心判断

我支持Card 1关于AI硬件估值锚点从算力稀缺转向执行效率的判断。但技术路径不是“把一个稠密1T参数模型完整塞进手机”。稠密1T模型仅FP16权重就约2 TB，还不包括激活、KV cache、运行时开销和安全模块。即使使用4-bit权重量化，单权重文件也约500 GB，仍超出手机、PC、机器人和大多数车载SoC的持续内存、散热与成本边界。

可行路径是**万亿级执行**，而不是稠密万亿参数常驻。国产边缘SoC若要缩小2nm制程差距，指标必须从峰值TOPS转向**真实Agent工作负载下的tokens/W**。架构栈应包括：稀疏/MoE路由、4-bit至1.58-bit量化、KV-cache压缩、NPU加GPU加CPU调度、减少近存数据搬运，以及端云协同推理。这支持Card 1的“执行最后一公里”逻辑，因为价值会流向能在终端功耗预算内稳定完成任务的厂商。

## 为什么2nm受限会改变设计目标

先进制程很重要，但它已不是边缘AI竞争力的唯一决定因素。TSMC表示其N2技术已在2025年第四季度进入量产，而美国出口管制仍在限制向中国转移先进半导体制造能力（[TSMC N2](https://www.tsmc.com/english/dedicatedFoundry/technology/logic/l_2nm)，[BIS rule updates](https://www.bis.gov/press-release/commerce-strengthens-restrictions-advanced-computing-semiconductors-semiconductor)）。这意味着国产边缘SoC短期不能假设拥有顺畅的2nm迁移路径。

这一限制改变了优化问题。如果厂商无法获得同样的制程曲线，就必须减少**无效执行**：

| 层级 | 旧竞争指标 | 执行效率指标 | 架构应对 |
| --- | --- | --- | --- |
| 硅片 | 峰值TOPS | 持续tokens/W | NPU数据流、低精度MAC、时钟/电源岛 |
| 内存 | DRAM带宽 | 每token搬运字节数 | SRAM分块、KV-cache压缩、权重流式加载 |
| 模型 | 参数规模 | 每任务激活参数量 | MoE、稀疏化、蒸馏、本地专家路由 |
| 运行时 | 基准延迟 | 每焦耳任务成功率 | 算子融合、编译器调度、推测解码 |
| 系统 | 纯端侧噱头 | 端到端任务成本 | 本地-云端拆分、隐私保护回退、边缘缓存 |

这也是为什么“执行效率”比TOPS竞赛更有解释力。Qualcomm公布Snapdragon X Elite搭载45 TOPS Hexagon NPU，Apple称M4 Neural Engine每秒可执行38万亿次操作，Microsoft将40 TOPS设为Copilot+ PC的NPU门槛（[Qualcomm](https://www.qualcomm.com/products/mobile/snapdragon/pcs-and-tablets/snapdragon-x-elite)，[Apple](https://www.apple.com/newsroom/2024/05/apple-introduces-m4-chip/)，[Microsoft](https://blogs.microsoft.com/blog/2024/05/20/introducing-copilot-pcs/)）。这些是有用的准入指标，但Agent推理真正受限于内存搬运、上下文长度、算子覆盖率和散热。一个40-60 TOPS NPU若在attention和采样阶段频繁溢出到低效算子，可能输给峰值更低但编译器与运行时整合更好的芯片。

## 国产边缘SoC基线：差距真实，但并非致命

中国国产边缘AI栈并不均衡。手机旗舰SoC仍最依赖先进制程，但工业、车载、IPC和机器人平台拥有更大的架构差异化空间，因为功耗包络更宽、产品迭代更贴近具体应用。

代表性公开基线如下：

| 厂商/平台 | 公开边缘AI指标 | 相关含义 |
| --- | ---: | --- |
| Rockchip RK3588 | 6 TOPS NPU | 低成本边缘视觉与轻量LLM网关；适合本地感知、唤醒词、OCR和小型助手负载（[Rockchip RK3588](https://www.rock-chips.com/a/en/products/RK35_Series/2022/0926/1660.html)） |
| Cambricon MLU220 | 最高16 TOPS，定位低功耗边缘模块 | 工业与视频边缘推理，确定性加速比绝对制程领先更重要（[Cambricon MLU220](https://www.cambricon.com/index.php?m=content&c=index&a=show&catid=32&id=20)） |
| Horizon Robotics Journey 6 | Journey 6系列最高560 TOPS | 车载边缘SoC展示了面向Transformer的感知、规划和座舱AI如何支撑更高功耗与内存预算（[Horizon Journey](https://en.horizon.auto/horizon-journey-series/)） |
| Black Sesame Huashan A2000 | 公开定位约250 TOPS级 | 另一条车载路径，异构计算和安全工作负载共同形成国产替代需求（[Black Sesame](https://www.blacksesame.com.cn/en/technology/huashan)） |

结论不是国产芯片在晶体管层面已对标领先2nm产品。结论是，**最具投资可行性的国产边缘AI机会大概率会先出现在功耗容忍度更高的边缘节点**，尤其是汽车、工业网关、机器人、智能摄像头和通过ODM共设计落地的AI PC。这些产品比手机更容易通过封装、内存布局和软硬协同弥补制程差距。

## 架构路径一：用稀疏激活替代稠密常驻

DeepSeek-V3是一个有价值的模板，因为它总参数量为671B，但通过MoE路由每个token仅激活37B参数（[DeepSeek-V3 paper](https://arxiv.org/abs/2412.19437)）。对边缘SoC的启示不是把整个DeepSeek-V3放到本地，而是**激活参数量**才是真正的工作量单位。

对万亿级边缘Agent，本地SoC应承载：

- 小型常开规划器或路由器；
- 以4-bit或更低精度部署的高频领域专家；
- 本地embedding、RAG缓存和隐私敏感用户状态；
- 当任务超出本地预算时，调用云端或邻近边缘服务器的回退接口。

这会把“1T模型”转化为分布式专家系统。终端在本地执行高频、隐私敏感、低延迟子任务，少见或重推理请求再上行。对投资而言，差异化会从谁公布更大的NPU数字，转向谁掌握模型路由、内存层级和应用遥测。

## 架构路径二：将量化变成一等硅特性

量化不是软件补丁，而是决定MAC阵列、SRAM bank、内存控制器和编译器目标的基础设计。AWQ显示，activation-aware weight quantization可以在降低权重精度的同时维持LLM质量，便于高效部署（[AWQ](https://arxiv.org/abs/2306.00978)）。BitNet b1.58则推动行业走向1-bit/三值权重LLM设计；若模型质量与工具链成熟，这将显著降低内存带宽和能耗（[BitNet b1.58](https://arxiv.org/abs/2402.17764)）。

因此，国产SoC设计应优先考虑：

- 原生支持INT4/INT2/三值计算，而不仅是INT8峰值TOPS；
- 为attention和采样稳定性提供混合精度累加路径；
- 稀疏感知MAC调度，避免对零值做无效乘法；
- 编译器可见的SRAM分块，避免量化权重优势被DRAM搬运吞噬；
- 模型加载器支持per-channel scale、group-wise quantization和快速反量化。

投资含义很直接：赢家不是理论INT8 TOPS最高的芯片，而是其工具链能让OEM无需数月手工调优就用好低精度模型的平台。

## 架构路径三：异构计算与内存感知调度

边缘AI Agent不是单一kernel。它混合了音频唤醒、视觉编码、OCR、语音识别、工具调用、小LLM规划、RAG、安全分类、UI渲染，有时还包括机器人控制。这些负载无法整齐映射到单个加速器。

因此，国产边缘SoC路线图应从“CPU加GPU加NPU”升级为**任务织物**：

- DSP/ISP负责常开传感器预处理；
- NPU负责Transformer block、矩阵密集推理和embedding检索；
- GPU负责动态shape、多模态前后处理和UI耦合负载；
- CPU负责控制流、工具编排和不可向量化逻辑；
- 安全 enclave负责私人用户记忆以及支付/身份动作；
- 内存织物让KV cache、embedding和高频专家尽可能靠近计算单元。

制程落后恰恰可以在这里被部分抵消。一个软件调度较弱的2nm芯片可能把能量浪费在内存搬运上；一个5-7nm级别但具备更好数据局部性、算子融合和电源门控的边缘SoC，可能在受限Agent任务上交付更优tokens/W。市场应更重视**实测持续推理**：tokens/s/W、每个完成任务的焦耳数、热稳态上下文长度，以及端侧任务成功率。

## 架构路径四：本地-云端协同推理

“端侧万亿参数推理”应被理解为系统级主张。对消费和企业终端，更持久的设计是：

1. 本地感知与意图识别；
2. 隐私、重复或低延迟任务本地执行；
3. 难题推理时压缩状态上传；
4. 云端或边缘服务器扩展；
5. 本地校验、UI动作和记忆更新。

这很重要，因为它让国产SoC即使不拥有前沿云训练的每一层，也能实现变现。终端厂商可通过保证隐私保护路由、低延迟本地动作和可预测能耗获胜。在这一模型中，“万亿参数”分布在本地专家、本地缓存、邻近服务器和云端模型之间，而终端SoC仍是执行控制器。

## 权益与产业含义

对Card 1最强的支持在于：边缘AI估值应附着在**执行控制点**上，而不仅仅是硅片稀缺性。对A股及中国相关硬件敞口，观察名单应分层：

- **车载边缘SoC：** Horizon Robotics、Black Sesame、SemiDrive类生态。汽车能容忍更高功耗和内存预算，ADAS/座舱Agent也更容易展示tokens/W与任务成功率收益。
- **工业与视觉边缘：** Rockchip、Cambricon边缘模块、智能摄像头与网关厂商。这些平台可能早于开放式聊天Agent实现确定性本地推理变现。
- **ODM与终端整合：** Huaqin、Luxshare类公司。它们的护城河不只是芯片设计，而是散热结构、NPU算子覆盖、固件与应用工作负载的共设计。
- **内存与封装供应商：** LPDDR、NAND、模组、先进基板和散热厂商。对边缘LLM而言，每token搬运字节数可能比峰值TOPS更关键。

否定风险也很明确：若国产厂商把“1T on device”宣传为稠密本地推理，该说法技术上很脆弱。可被支持的说法是“通过稀疏激活和异构编排实现万亿级Agent执行”。

## 交接

下一位最合适的分析师是**auto-analyst [primary]**。汽车是近期最具体的应用场景：国产边缘SoC可以承载更高功耗、内存和安全预算，并通过ADAS、座舱助手和车辆控制接口验证Agent工作负载。

**后续主题：** 车载边缘AI SoC作为国产万亿级Agent执行的首个规模化验证点。  
**后续问题：** 哪些NEV与ADAS产业链环节最先变现异构边缘AI，投资者应如何区分真实tokens/W执行收益与TOPS营销？

## Follow-up

- Analyst: auto-analyst
- Topic: 车载边缘AI SoC作为国产万亿级Agent执行的首个规模化验证点
- Question: 哪些NEV与ADAS产业链环节最先变现异构边缘AI，投资者应如何区分真实tokens/W执行收益与TOPS营销？
