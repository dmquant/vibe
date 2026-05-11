---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "行业研究"
---

# DeepSeek V4 与海光 DCU 3：硬件软件协同设计突破，事实还是叙事？

  第 1 张/共 8 张 | 会话主题：DeepSeek V4 国产生态 | 立场：初步研判  
  分析师：TMT 行业分析师（半导体/AI） | 日期：2026 05 02  

   

执行摘要

DeepSeek V4（2026 年 4 月 24 日发布）在中国国产 AI 芯片生态建设方面取得了真实且可量化的进展——但"在海光 DCU 3 上实现硬件软件协同设计突破"这一说法需要精细拆解。以下三点属实：（1）海光 DCU 平台与华为昇腾、寒武纪、摩尔线程共同完成了"Day 0"推理适配；（2）DeepSeek 战略性地转向 TileLang——一种可编译至 NVIDIA CUDA 以外多种硬件后端的跨平台领域特定语…

Analyst: **TMT Analyst**
Status: **completed**
Stance: **initial**
Completed: **02/05/2026, 10:11:03**

## Links

- Whiteboard topic: [[DeepSeek V4 Domestic Ecosystem]]
- Card topic: [[DeepSeek V4 与海光 DCU 3：硬件软件协同设计突破，事实还是叙事？ 第 1 张 共 8 张 会话主题：DeepSeek V4 国产生态 立场：初步研判 分析师：TMT 行业分析师（半导体 AI） 日期：2026 05 02 执]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

DeepSeek V4 与海光 DCU 3：硬件软件协同设计突破，事实还是叙事？

  第 1 张/共 8 张 | 会话主题：DeepSeek V4 国产生态 | 立场：初步研判  
  分析师：TMT 行业分析师（半导体/AI） | 日期：2026 05 02  

   

执行摘要

DeepSeek V4（2…

## Question

Investigate the topic "DeepSeek V4 与海光 DCU 3：硬件软件协同设计突破，事实还是叙事？

  第 1 张/共 8 张 | 会话主题：DeepSeek V4 国产生态 | 立场：初步研判  
  分析师：TMT 行业分析师（半导体/AI） | 日期：2026 05 02  

   
…" and make the strongest evidence-based judgment you can.

## Summary

DeepSeek V4 与海光 DCU 3：硬件软件协同设计突破，事实还是叙事？

  第 1 张/共 8 张 | 会话主题：DeepSeek V4 国产生态 | 立场：初步研判  
  分析师：TMT 行业分析师（半导体/AI） | 日期：2026 05 02  

   

执行摘要

DeepSeek V4（2026 年 4 月 24 日发布）在中国国产 AI 芯片生态建设方面取得了真实且可量化的进展——但"在海光 DCU 3 上实现硬件软件协同设计突破"这一说法需要精细拆解。以下三点属实：（1）海光 DCU 平台与华为昇腾、寒武纪、摩尔线程共同完成了"Day 0"推理适配；（2）DeepSeek 战略性地转向 TileLang——一种可编译至 NVIDIA CUDA 以外多种硬件后端的跨平台领域特定语…

## Report

# DeepSeek V4 与海光 DCU-3：硬件软件协同设计突破，事实还是叙事？

**第 1 张/共 8 张 | 会话主题：DeepSeek V4 国产生态 | 立场：初步研判**
**分析师：TMT 行业分析师（半导体/AI） | 日期：2026-05-02**

---

## 执行摘要

DeepSeek V4（2026 年 4 月 24 日发布）在中国国产 AI 芯片生态建设方面取得了真实且可量化的进展——但"在海光 DCU-3 上实现硬件软件协同设计突破"这一说法需要精细拆解。以下三点属实：（1）海光 DCU 平台与华为昇腾、寒武纪、摩尔线程共同完成了"Day 0"推理适配；（2）DeepSeek 战略性地转向 TileLang——一种可编译至 NVIDIA CUDA 以外多种硬件后端的跨平台领域特定语言（DSL）；（3）V4 的架构设计（混合 CSA+HCA 注意力机制、FP4/FP8 精度方案、简化注意力路径）更契合国产硬件的能力约束。被夸大之处在于：训练层面的"协同设计"——V4 的主体预训练依然依赖 NVIDIA H800，部分阶段引入了华为昇腾 910C；海光的角色是推理侧适配，并非联合内核开发。DCU-3（深算三号）截至 2026 年一季度仍处于早期放量阶段，将具体成果归因于 DCU-3 的"突破"尚属言之过早。

**核心判断：** 海光的"Day 0"推理适配代表的是生态系统成熟度的提升，而非协同设计。真正的协同设计工作集中在 DeepSeek–华为昇腾轴心之上。对于海光信息（688041.SH）的投资信号是正面但滞后的：需要关注的关键拐点是 DCU-3 在 2026 下半年至 2027 年的量产爬坡，而非 V4 的发布事件本身。

---

## 一、DeepSeek V4 的真实面貌

### 1.1 模型架构

DeepSeek 于 2026 年 4 月 24 日发布 V4 系列，包含两款混合专家模型（MoE）变体：

| 指标 | V4-Pro | V4-Flash |
|---|---|---|
| 总参数量 | 1.6T | 284B |
| 单次推理激活参数 | 49B | 13B |
| 上下文窗口 | 100 万 Token | 100 万 Token |
| API 定价（输入） | $1.74 / 百万 Token | $0.14 / 百万 Token |
| 开源协议 | Apache 2.0 | Apache 2.0 |

关键架构创新：
- **混合注意力机制（CSA + HCA）：** 压缩稀疏注意力（CSA）处理近端稠密上下文；重度压缩注意力（HCA）处理远端稀疏上下文。此设计大幅降低 KV 缓存占用。
- **mHC（流形约束超连接）：** 取代标准残差连接，稳定 100B+ 激活参数路径中的信号传播，同时保留模型表达能力。
- **FP4/FP8 混合精度：** MoE 专家参数使用 FP4；绝大多数其他参数使用 FP8；在超过 32T token 上完成预训练。
- **相较 V3.2 的效率提升（100 万 token 上下文）：** V4-Pro 仅需 V3.2 单 Token 推理 FLOPs 的 27%、KV 缓存的 10%；V4-Flash 进一步降至 FLOPs 的 10%、KV 缓存的 7%。

### 1.2 TileLang 内核策略

对国产芯片兼容性影响最深远的单一架构决策：DeepSeek 以 **TileLang** 编写 V4 的内核库（TileKernels）并开源发布。TileLang 是一种 Python 层面的 DSL，可编译至多种硬件后端（NVIDIA CUDA、AMD ROCm/HIP 以及昇腾/DCU 自定义后端）。这一选择并非细枝末节——此前各代模型的性能关键内核直接用 CUDA PTX 或 Triton 编写，二者均与 NVIDIA 指令集深度耦合。TileLang 引入了硬件抽象层。针对大规模 MoE 训练中全对全通信瓶颈的 MegaMoE2 融合内核，已借助 TileLang 完成对华为昇腾架构的适配。

---

## 二、海光 DCU 产品代系

理解"DCU-3"这一说法，需要清晰掌握硬件当前所处的位置：

| 代际 | 研发代号 | 制程 | 核心规格 | 上市状态 |
|---|---|---|---|---|
| 第一代 | 深算一号 | 7nm | FP64 约 5.2 TFLOPS，32GB HBM2 | 量产（2021 年） |
| 第二代 | 深算二号 / Z100 | 7nm+ | FP32 90 TFLOPS，FP16 180 TFLOPS，32GB HBM2，350W | 量产（2023 年） |
| 第三代 | 深算三号 / DCU-3 | 5nm（目标） | FP32 >200 TFLOPS，DTK 3.0 | 早期放量 / 爬坡中（预计 2026 下半年） |

Z100（第二代）在半精度负载下的性能约为 NVIDIA A100 的 80%–90%，且功耗更低（350W 对比 A100 的 400W）。海光的 DTK（深度智算内核）软件栈覆盖了主流 GPGPU 超过 99% 的算子。多卡互联 xGMI 协议带宽为 184 GB/s。

DCU 的架构血缘源自 AMD CDNA（通过早期海光–AMD 合资公司），因此天然支持 ROCm 及 HIP 编程接口，具备相当程度的 CUDA 代码可移植性——这是海光相较于需要从零重写内核的国内竞争对手（如寒武纪 MLU）的核心软件护城河。正是这一 ROCm 兼容性，使海光能够实现"Day 0"适配：将 CUDA 风格代码迁移至海光平台的基础设施早已就绪，适配工作更多是验证与优化，而非重新构建内核。

**2025 年重大结构性变化：** 海光宣布与中国最大超算集成商曙光信息产业合并。此举将计算卡（海光 DCU）与系统组装、集群网络及采购渠道纵向整合于同一主体，在政府及国有企业采购市场打造出能与 NVIDIA DGX 生态相抗衡的国产替代方案。

---

## 三、"Day 0 适配"的真实含义

2026 年 4 月 24 日，DeepSeek 发布 V4 权重的同一天，四家国内芯片厂商宣布推理层面支持：

| 厂商 | 平台 | V4-Pro | V4-Flash | 备注 |
|---|---|---|---|---|
| 华为昇腾 | 910C / 950 系列 | 是 | 是 | 发布前深度合作；联合融合内核开发；承接 DeepSeek API 服务基础设施 |
| 海光信息 | DCU（Z100 / DCU-3 早期） | 是 | 是 | 通过"海光 DCU + 青云科技"方案形成闭环 |
| 寒武纪 | MLU 系列 | 是 | 是 | 基于 vLLM 推理框架；适配代码已在 GitHub 开源 |
| 摩尔线程 | MTT S4000 | 是 | 是 | 通过 OpenAI 兼容 API 完成软件适配 |

关键区分：华为昇腾获得了**发布前的深度合作**——TileLang 的 MegaMoE2 内核在 V4 正式发布前已针对昇腾架构完成适配。其余三家厂商（海光、寒武纪、摩尔线程）之所以能快速完成发布后适配，依赖于：（a）TileLang 的跨平台可移植性；（b）成熟的 ROCm/HIP 层（海光）；（c）vLLM 推理框架的广泛覆盖。

这是生态成熟，不是协同设计。二者的区别对投资分析至关重要：协同设计意味着持续的联合工程关系，即芯片架构决策受模型需求驱动，反之亦然。海光展示的是借助现有 ROCm 基础设施实现的快速软件适配。

---

## 四、训练层面的真相：协同设计叙事的破绽所在

DeepSeek 公开表示 V4 训练使用了 **NVIDIA H800 GPU** 以及**华为昇腾 910C 芯片**（部分阶段）。一名美国政府官员指控该模型在走私的 NVIDIA Blackwell 芯片上训练；DeepSeek 予以否认；NVIDIA 本身也将走私指控定性为"牵强"。最具说服力的学术评论来自清华大学计算机系教授刘知远（通过 MIT 技术评论）：DeepSeek"仅将 V4 训练过程的一部分适配至中国芯片"，该模型"主体仍可能在 NVIDIA 硬件上完成训练"。

这对海光的具体含义是：**海光 DCU 在 DeepSeek V4 的训练中未获证实的参与记录。** V4 的训练栈为 NVIDIA H800 + 华为昇腾 910C（部分训练后阶段，可能为指令微调或 RLHF）。DCU 的参与完全在推理侧，即便如此，DeepSeek 为其 API 服务基础设施承诺的主要国产芯片是华为昇腾 950，而非海光 DCU。

结构性原因：在 1.6T 参数规模下进行训练，需要极高的稳定性、高带宽的卡间互联（NVLink 或等效方案），以及成熟的 CUDA 计算图编译器。海光 xGMI 的 184 GB/s 带宽远低于 NVLink 4.0 约 900 GB/s 的单 GPU 带宽。DCU-3 的大规模分布式训练软件栈仍处于不成熟阶段，这将海光的角色限定在推理负载和较小规模的微调任务上。

---

## 五、真正的协同设计发生在哪里

DeepSeek–华为昇腾关系才是 V4 真实的硬件软件协同设计故事：

1. **架构选择契合昇腾硬件特性：** 昇腾芯片擅长"规整的大块矩阵计算"，对复杂小算子、频繁数据搬移和复杂注意力路径较为敏感。V4 的 CSA+HCA 混合注意力和简化 MoE 路由模式直接针对这些约束进行了优化。
2. **TileLang MegaMoE2 内核：** 在发布前已完成对昇腾硬件的适配，属于联合内核工程，而非发布后的代码移植。
3. **昇腾 950 推理部署承诺：** DeepSeek 表示，待昇腾 950 超节点于 2026 下半年大规模部署后，API 定价将进一步下降——这是资本配置层面的信号，而不仅仅是营销表态。
4. **CANN（计算架构神经网络）：** 华为的 CUDA 替代软件栈，TileLang 的昇腾后端以 CANN 而非原始 PTX 为目标。

对于海光而言，协同设计的传导路径更为间接：DeepSeek V4 在 TileLang 上运行良好 → TileLang 具备 ROCm 后端 → ROCm 运行于海光 DCU → 海光 DCU 客户可部署 DeepSeek V4 推理。这是一条软件可移植性链条，而非协同设计。

---

## 六、分析结论：部分认可，称不上突破

| 主张 | 判定 | 依据 |
|---|---|---|
| 海光 DCU 完成 Day 0 推理适配 | **属实** | 2026 年 4 月 29 日海光及 TrendForce 确认 |
| 训练层面的硬件软件协同设计 | **海光：不成立；昇腾：部分成立** | 训练栈 = NVIDIA H800 + 昇腾 910C（部分）；海光无记录参与 |
| TileLang 实现跨硬件内核可移植性 | **属实** | TileKernels 仓库已开源；MegaMoE2 在昇腾上获确认 |
| DCU-3 专项突破 | **未经证实** | DCU-3 处于早期放量/爬坡阶段；适配主要运行在 Z100 级硬件上 |
| 海光 DCU 在 V4 推理上达到 NVIDIA 水准 | **部分成立** | Z100 性能约为 A100 的 80%–90%；足以支撑推理；训练不行 |
| 训练到部署的全国产芯片闭环 | **不成立** | 主体预训练仍依赖 NVIDIA；完整闭环尚属愿景 |

---

## 七、海光信息（688041.SH）的投资含义

**短期（6–12 个月）：**
- "Day 0"叙事在出口管制限制 NVIDIA 采购的政府及国有企业市场中具有真实的品牌加成效果
- DCU + 曙光 HPC 全栈方案使海光转型为完整系统供应商，解决了客户的集成痛点
- 国内云厂商（阿里云、华为云等）的 V4 推理需求有望在 2026 年拉动 DCU Z100 的出货量

**中期（12–24 个月）：**
- DCU-3 的 5nm 量产爬坡是核心变量：若 SMIC 或合作晶圆厂能在 2026 下半年实现 5nm DCU-3 合格率，>200 TFLOPS 目标将使其在推理场景下接近 H100 量级
- DTK 3.0 软件栈的成熟程度将决定 DCU-3 能否在政府指令性采购以外吸引开发者生态
- 风险：若寒武纪或华为进一步将软件生态延伸至 ROCm 兼容层，海光现有的 ROCm 衍生软件优势将收窄

**核心风险：**
- 出口管制升级可能切断海光对台积电或三星先进制程的使用权（当前 DCU 依赖 7nm+ 代工）
- 华为昇腾才是 DeepSeek 协同设计关系的主要受益方；海光通过 TileLang 可移植性间接受益
- DCU-3 量产时间表存在不确定性；"早期放量"并不等同于 2026 年可大规模供货

---

## 八、本卡未解决的问题

本报告厘清了技术与协同设计的真实状况，但留下了下游的投资问题尚待回答：**在 DeepSeek V4 生态成熟的背景下，A 股半导体及 AI 基础设施供应链中（超越海光本身），哪些标的能够受益最大？芯片设计、封测和系统集成各环节的差异化投资逻辑如何构建？** 这需要对 A 股半导体和 AI 算力赛道进行全面的主题扫描，是本研究线索的自然延伸方向。

---

## 资料来源

- [TrendForce：华为昇腾、寒武纪、海光完成 DeepSeek-V4 Day 0 适配](https://www.trendforce.com/news/2026/04/29/news-huawei-ascend-cambricon-and-hygon-completed-day-0-adaptation-to-deepseek-v4/)
- [MIT Technology Review：DeepSeek V4 为何重要（三大原因）](https://www.technologyreview.com/2026/04/24/1136422/why-deepseeks-v4-matters/)
- [Tom's Hardware：DeepSeek 新模型支持华为 CANN](https://www.tomshardware.com/tech-industry/deepseek-new-model-supports-huawei-cann)
- [The China Academy：为什么 DeepSeek V4 尚未完全摆脱 NVIDIA](https://thechinaacademy.org/why-deepseek-v4-hasnt-fully-cut-ties-with-nvidia/)
- [TrendForce：解码 DeepSeek V4——昇腾 950PR 与打破 CUDA 依赖](https://www.trendforce.com/news/2026/04/07/news-huawei-ascend-cambricon-and-hygon-completed-day-0-adaptation-to-deepseek-v4/)
- [富途：海光信息 DCU 算子覆盖率超 99%，与国际主流 GPGPU 对齐](https://news.futunn.com/en/flash/19739741/hygon-info-hygon-dcu-matches-international-mainstream-gpgpu-with-operator)
- [DeepSeek X 帖子：TileKernels 开源发布](https://x.com/deepseek_ai/status/1972604780469239843)
- [Digitimes：海光深入 CPU-GPU 战略布局](https://www.digitimes.com/news/a20260413VL202/china-cpu-gpu-self-sufficiency-demand-it.html)
- [36 氪：DeepSeek 适配国产芯片——差异化表现，商用前景各异](https://36kr.com/p/3178756337177221)
- [新浪财经：海光 DCU 与 DeepSeek 完成国产化适配](https://finance.sina.com.cn/roll/2025-02-12/doc-inekfssx5832824.shtml)

## Follow-up

- Analyst: agri-analyst
- Topic: DeepSeek V4 与海光 DCU 3：硬件软件协同设计突破，事实还是叙事？

  第 1 张/共 8 张 | 会话主题：DeepSeek V4 国产生态 | 立场：初步研判  
  分析师：TMT 行业分析师（半导体/AI） | 日期：2026 05 02  

   

执行摘要

DeepSeek V4（2… · challenge
- Question: Using your Planting, livestock, agri-inputs, food security expertise, challenge the ongoing research on “DeepSeek V4 与海光 DCU 3：硬件软件协同设计突破，事实还是叙事？

  第 1 张/共 8 张 | 会话主题：DeepSeek V4 国产生态 | 立场：初步研判  
  分析师：TMT 行业分析师（半导体/AI） | 日期：2026 05 02  

   

执行摘要

DeepSeek V4（2… · challenge”, especially the thesis "DeepSeek V4 与海光 DCU 3：硬件软件协同设计突破，事实还是叙事？

  第 1 张/共 8 张 | 会话主题：DeepSeek V4 国产生态 | 立场：初步研判  
  分析师：TMT 行业分析师（半导体/AI） | 日…".
