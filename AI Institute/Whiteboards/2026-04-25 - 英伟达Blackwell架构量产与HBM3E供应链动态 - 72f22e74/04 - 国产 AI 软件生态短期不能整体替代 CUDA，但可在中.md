---
source: ai-institute
resource_type: whiteboard-card
card_index: 4
status: completed
analyst_level: "ESG与主题"
---

# 国产 AI 软件生态短期不能整体替代 CUDA，但可在中国主流开源模型推理和政企私有化部署中显著降低对 CUDA 的边际依赖。

Analyst: **Thematic Researcher**
Status: **completed**
Stance: **synthesize**
Completed: **25/04/2026, 19:00:36**

## Links

- Whiteboard topic: [[英伟达Blackwell架构量产与HBM3E供应链动态]]
- Card topic: [[国产 AI 软件生态短期不能整体替代 CUDA，但可在中国主流开源模型推理和政企私有化部署中显著降低对 CUDA 的边际依赖。]]
- Analyst: [[Thematic Researcher]]
- Analyst level: [[ESG与主题]]

## Topic

国产 AI 软件生态短期不能整体替代 CUDA，但可在中国主流开源模型推理和政企私有化部署中显著降低对 CUDA 的边际依赖。

## Question

Investigate the topic "国产 AI 软件生态短期不能整体替代 CUDA，但可在中国主流开源模型推理和政企私有化部署中显著降低对 CUDA 的边际依赖。" and make the strongest evidence-based judgment you can.

## Summary

本卡综合 Card 3 的软件生态短板判断，认为国产 AI 软件栈整体距离 CUDA 仍有 2-3 代差，但落后并不均匀。专利布局提供防御性护城河，却不能替代开源生态。Ascend/CANN 在 vLLM 推理、Qwen/DeepSeek/Llama 模型适配和 PyTorch 后端上领先；MUSA 的类 CUDA 迁移路线进步快但社区和装机量仍弱；DTK 适合 ROCm/类 CUDA 项目迁移但开源透明度不足；Neuware 在特定 MLU 推理部署可用。12-24 个月最可能追赶的是推理服务、固定模型族迁移、热点算子 DSL 和政企私有化部署，训练侧与通用开发者生态仍难追平 CUDA。

## Report

# 国产 AI 算力软件栈与开发者生态：距离 CUDA 的代差与可追赶方向

**研究员：** 主题研究员 (thematic-researcher)  
**日期：** 2026-04-25  
**Stance：** synthesize（综合 Card 3 的软件生态短板判断，并拆分“可用级追赶”与“生态级追赶”的差异）

## 0. 立场与结论

我支持 Card 3 的核心判断：国产算力链的下一道瓶颈已经从“有没有芯片/订单”转向“能不能把标称算力转化为有效算力”。但需要进一步细分：国产软件栈并非在所有层都落后同样多。**推理服务、固定模型族适配、PyTorch 外置后端、热点算子优化**已经进入可用级追赶窗口；**通用训练生态、跨厂商统一运行时、CUDA-X 级库矩阵、全球开发者自发贡献**仍至少落后 2-3 个软件世代。

一句话判断：**国产 AI 软件生态距离 CUDA 的“整体生态级”仍有 2-3 代差，但在 Ascend/CANN 推理服务、MUSA/DTK 的 CUDA/ROCm 迁移层、Neuware 的特定模型推理、以及 Triton/TileLang/Ascend C 热点算子层，12-24 个月内有机会追到“项目可用、厂商可维护、政企可部署”的水平。**

## 1. 评估框架：不能只看“能跑”，要看五层成熟度

| 层级 | CUDA 基准 | 国产栈当前状态 | 判断 |
| --- | --- | --- | --- |
| PyTorch 后端 | 官方 CUDA wheel、默认 `torch.cuda` 语义、主线 CI 与海量算子覆盖 | CANN/torch_npu、MUSA/torch_musa、MLU/torch_mlu、DTK 兼容 PyTorch，但多为外置后端或厂商发行版 | 落后 1-2 代 |
| 推理服务 | vLLM、SGLang、TensorRT-LLM、Triton Inference Server、FlashInfer 等相互强化 | vLLM-Ascend 最活跃；vLLM-MLU 已进入官方安装矩阵；vLLM-MUSA 仍 Alpha；DTK 多依赖 ROCm/厂商镜像 | Ascend 追到 1 代内，其余 2 代左右 |
| 算子/编译器 | CUDA Toolkit、cuDNN、NCCL、CUTLASS、Triton、Nsight、TensorRT 完整闭环 | Ascend C/TBE、triton-ascend、triton_musa、TileLang-MUSA、BANG C、DTK/DAS；但文档、样例、性能剖析工具仍碎片化 | 落后 2-3 代 |
| 模型可移植性 | Llama/Qwen/DeepSeek 新模型通常先支持 CUDA/vLLM | Qwen/DeepSeek 在 Ascend 已接近 Day-0/Day-1；MUSA、MLU、DTK 对热点国产模型跟进快，但泛化模型族较弱 | 固定模型族可追，通用模型仍落后 |
| 社区生态 | PyTorch、vLLM、Triton、Hugging Face、NVIDIA 论坛与全球开发者网络 | 国产栈以厂商工程师贡献为主，开源仓库规模小，issue/PR 主要围绕适配与修 bug | 落后 3 代以上 |

这里的“代差”不是芯片制程代差，而是软件生态的版本迭代与开发者心智差距。CUDA 的优势不是某一个 API，而是 PyTorch、Triton、vLLM、TensorRT-LLM、NCCL、Nsight、NGC 容器、云厂商镜像和社区教程组成的复利网络。

## 2. 横向比较：CANN 领先，MUSA 进步快，DTK 偏迁移，Neuware 偏专用

| 软件栈 | PyTorch 后端 | 推理框架 | 主流模型可移植性 | 开源/社区活跃度 | 综合成熟度 |
| --- | --- | --- | --- | --- | --- |
| CANN / Ascend | `torch_npu` 已支持 CANN 8.5.0 与 PyTorch 2.9/2.8/2.7/2.6 多版本组合 | `vllm-project/vllm-ascend` 活跃，2026-04-25 仍有提交；支持 Qwen3、DeepSeek V3/R1/V3.2、Llama2/3 等 | Qwen/DeepSeek 适配最强，DeepSeek、Qwen3-MoE、Qwen3-VL 等已有矩阵 | vLLM-Ascend 约 1991 stars、1127 forks；生态明显领先其他国产栈 | 国内最接近可用级 CUDA 替代 |
| MUSA / Moore Threads | `torch_musa` 宣称 PyTorch 代码只需将后端字符串切到 `musa`；已支持 torch.compile、Inductor/Triton 后端、FP8、FSDP、MUSAGraph | `vllm-musa` 已在 PyPI 发布但状态为 Alpha；SGLang 对 MUSA 仍是 2026 年路线图 | Qwen/DeepSeek 等热点模型适配快，Qwen3.5 适配有新闻与分支支撑 | `torch_musa` 约 490 stars，工具链进步快但社区小 | 有“类 CUDA”路线潜力，但需要硬件装机和上游合并证明 |
| DTK / Hygon DCU | 以 ROCm/类 CUDA 迁移为核心，支持 PyTorch、TensorFlow、PaddlePaddle；更多体现在厂商镜像和行业项目 | vLLM/SGLang 支持多见于厂商发行版、容器与项目适配，主线上可见度弱 | Llama/Qwen/DeepSeek/GLM 等适配消息较多，但公开可复现材料不足 | 开源透明度弱于 Ascend/MUSA/MLU | 政企/HPC 项目可用，开发者生态证明不足 |
| Neuware / Cambricon MLU | `torch_mlu` 存在但 GitHub 活跃度较低；底层 BANG C/CNCC/MLU-OPS 更可见 | vLLM 官方安装矩阵列出 `vllm-mlu`，仓库 2026-04-24 标注 Day-0 支持 DeepSeek-V4 | MLU370 以上支持，适合特定推理服务；泛模型矩阵不如 Ascend | `vllm-mlu` 约 93 stars；`mlu-ops` 有 866 commits，但 SDK/镜像需官方渠道 | 可做专用推理栈，生态外溢有限 |

## 3. 关键证据

### 3.0 专利布局：更像防御性护城河，不等同于开发者生态

国产厂商的专利与知识产权布局主要沿“纵向全栈”展开：华为从 CANN、Ascend C、GE、MindIE、MindStudio 到算子开放形成体系化布局；摩尔线程在 MUSA、MUSIFY、KUAE 集群和管理平台上强调自主知识产权，并公开披露 KUAE 获得高价值专利培育竞赛奖项；寒武纪围绕 BANG C、CNCC、CNRT、CNNL/MLU-OPS 构建 MLU 编程与算子体系；海光 DTK 则更偏 ROCm/类 CUDA 兼容和行业项目迁移。

这类专利布局有两层意义：一是避免在 CUDA 兼容、编译器、算子库、集群管理上被单点知识产权阻断；二是为政企客户提供“可控软件栈”叙事。但它不能直接替代开源生态。CUDA 的护城河不是专利数量本身，而是开发者默认路径、第三方库、问题搜索结果、预编译包和生产运维经验。因此本卡把专利布局视为**必要条件**，不视为成熟度的充分条件。

### 3.1 PyTorch 后端适配：国产栈正在受益于 PyTorch 外置后端机制

PyTorch 从 2.1 之后强化了新加速器接入路径，包括 `PrivateUse1` Dispatch Key、设备无关模块与 `torch.accelerator` 等机制。官方文档明确把外置加速器接入作为未来特性扩展的默认路径之一，这降低了国产厂商“改 PyTorch 主干”的成本。

但这只是入口，不等于生态成熟。PyTorch 官方文档同时指出内置算子超过 3500 个，而 MUSA release note 到 v2.0.0 时披露支持算子超过 760 个；这个数量级差距说明：**能作为 PyTorch 后端运行，不等于能覆盖任意模型、任意 dtype、任意分布式训练路径。**

### 3.2 CANN：最强证据来自 vLLM-Ascend，而不是 MindSpore

CANN 的重要变化是从“华为自有框架 MindSpore 生态”转向“拥抱 PyTorch/vLLM/Triton/verl”。华为 2025 年宣布成立 CANN 技术委员会，并计划开放 CANN 算子、GE、Ascend C、MindIE 等核心组件；同时明确与 Triton、PyTorch、vLLM、verl 等社区协作。

更关键的是模型矩阵。vLLM-Ascend 官方支持表已经列出 DeepSeek V3/3.1、DeepSeek V3.2、DeepSeek R1、Qwen3、Qwen3-Coder、Qwen3-MoE、Qwen3-Next、Qwen3-VL、Qwen3.5 等，并覆盖 BF16、W8A8、Chunked Prefill、Prefix Cache、LoRA、Speculative Decoding、Tensor Parallel、Expert Parallel、Prefill-decode Disaggregation 等推理特性。它已经不是“demo 能跑”，而是向生产推理服务靠拢。

但短板同样清楚：vLLM-Ascend release note 仍出现过长输入/输出精度、乱码、版本手工安装、Docker 镜像依赖不一致等已知问题；这类问题在生产中会转化为维护成本。CANN 最可能先追上的是**固定模型族推理服务**，不是任意训练脚本的无痛迁移。

### 3.3 MUSA：最像 CUDA 的路线，但还缺装机量和上游验证

MUSA 的路线最直接：提供 CUDA 兼容环境、MUSA Toolkit、Musify/torchada 迁移层，并在 `torch_musa` 中把 PyTorch 设备后端抽象成 `musa`。`torch_musa` release note 已披露 torch.compile + TorchInductor + triton_musa、MUSAGraph、FP8 matmul、FSDP、DeepSpeed、Megatron-LM 相关能力。这说明摩尔线程不是只做推理 demo，而是在补训练和编译器环节。

但从社区状态看，MUSA 仍处于早期扩张。`vllm-musa` 在 PyPI 上的开发状态是 Alpha；SGLang 对 MUSA 的支持仍以 2026-01-06 开启的 roadmap issue 形式推进；`torch_musa` 的 GitHub 规模远小于 vLLM/PyTorch/Triton 主线。MUSA 的 12-24 个月机会在**CUDA 扩展迁移、热点模型推理、本土开发者工具链**，而不在短期成为全球通用 CUDA 替代。

### 3.4 DTK：项目迁移成本低于自研 NPU 栈，但生态透明度不足

海光 DTK 的优势在于 GPGPU/ROCm 兼容路径。公开年报与投资者材料反复强调 DCU 软件栈包含 DTK、开发工具链、模型仓库，支持 TensorFlow、PyTorch、PaddlePaddle 等主流框架，并以类 CUDA/ROCm 兼容降低迁移成本。

这使 DTK 在金融、政企、HPC、科学计算等项目中较容易形成“可交付”能力，尤其是已有 ROCm/HIP 经验的团队。但从开发者生态看，DTK 缺少像 vLLM-Ascend 那样透明、持续、可外部跟踪的主线仓库和模型支持矩阵。对投资研究而言，DTK 的风险不是“不能用”，而是**外部可验证性弱，难以判断性能和维护成本是否已接近 CUDA。**

### 3.5 Neuware：底层工具链扎实，LLM 生态仍偏厂商驱动

寒武纪的底层工具链历史较早，BANG C/CNCC/MLU-OPS 提供了面向 MLU 的编程、编译和算子开发路径。`mlu-ops` 仓库有较多 commits，说明底层算子样例和开发材料并非空白。vLLM 官方安装页面也把 Cambricon MLU 列入加速器插件矩阵，`vllm-mlu` 仓库在 2026-04-24 标注 Day-0 支持 DeepSeek-V4。

但 `vllm-mlu` 使用说明仍要求获取 Cambricon SDK/镜像，并对 Ray 做 MLU 适配文件替换；这说明部署体验仍偏“厂商支持项目”，不是开源社区自助路径。Neuware 在 12-24 个月内最可能追上的是**特定 MLU370+ 服务器上的推理部署**，不是广泛开发者生态。

## 4. 与 CUDA 的真实差距：2-3 代，但不是均匀落后

CUDA 的领先来自四个复利：

1. **默认路径优势。** PyTorch 官方安装路径把 CUDA/ROCm 作为主流 GPU 选项；大多数开源训练脚本、Dockerfile、CI、issue 模板默认假设 `torch.cuda`。
2. **库矩阵优势。** CUDA Toolkit 包含编译器、runtime、调试/优化工具和多 GPU 扩展能力；CUDA-X 覆盖 cuDNN、TensorRT/TensorRT-LLM、CUTLASS、FlashInfer、CCCL、DALI、cuDF、cuML、cuGraph、GPUDirect Storage 等。
3. **模型首发优势。** Llama/Qwen/DeepSeek 等模型即便来自中国团队，开源社区的第一批生产级推理路径通常仍围绕 CUDA vLLM/SGLang/TensorRT-LLM。
4. **社区自发优势。** CUDA 的 bug 往往由全球云厂商、模型团队、推理框架团队、独立开发者共同暴露和修复；国产栈目前更多依赖厂商工程师集中攻关。

因此，“国产 CUDA 替代”的正确表述应是：

- **推理服务层：** Ascend/CANN 对 Qwen/DeepSeek 已落到 1 代以内；MUSA/MLU 在热点模型上约落后 1.5-2 代；DTK 取决于 ROCm 兼容与厂商镜像。
- **训练框架层：** 普遍落后 2-3 代，尤其是 FSDP/DeepSpeed/Megatron、MoE 专家并行、故障恢复、长稳训练、集群通信与 profiler 组合。
- **通用开发生态层：** 仍落后 3 代以上，短期很难追平 CUDA 的教程、StackOverflow/GitHub issue、预编译 wheel、容器、云市场镜像和第三方扩展。

## 5. 12-24 个月最可能实现可用级追赶的方向

| 方向 | 追赶概率 | 原因 | 需要跟踪的验证信号 |
| --- | --- | --- | --- |
| Ascend vLLM/SGLang 推理服务 | 高 | vLLM-Ascend 模型矩阵完整、repo 活跃、华为开放 CANN/Ascend C/MindIE | Qwen/DeepSeek 新版本 Day-0/Day-1 支持；长上下文/MoE 吞吐接近 H20/H100 可比配置；生产 issue 收敛 |
| Qwen/DeepSeek/Llama 固定模型族迁移 | 高 | 国产模型团队有适配国产算力的现实动机，模型族结构稳定后可重复优化 | 官方 recipe、Docker 镜像、量化权重、benchmark 同步发布 |
| 热点算子与 kernel DSL | 中高 | Triton-Ascend、triton_musa、TileLang-MUSA、Ascend C、BANG C 可集中优化 Attention、MoE、RoPE、RMSNorm、GEMM/AllReduce | 算子进入上游或厂商主线；性能结果可复现；不再依赖手工 patch |
| CUDA/HIP 扩展迁移层 | 中高 | MUSA 的 torchada/Musify、DTK 的 ROCm 兼容能降低迁移门槛 | 常见 CUDAExtension 项目可自动构建；FlashAttention/FlashMLA/DeepGEMM 类项目稳定迁移 |
| 政企私有化推理一体机 | 中高 | 模型族、硬件、镜像、运维环境可被厂商锁定，适合 CANN/DTK/Neuware 项目制交付 | 金融、运营商、政务批量部署；推理 SLA 和故障恢复数据披露 |
| 通用大模型训练生态 | 低到中 | 万卡通信、checkpoint、MFU、编译器、profiler、算子库同时受限 | 公开万卡训练报告、MFU 指标、故障率、与 CUDA 集群 token 成本对比 |
| 跨厂商统一国产运行时 | 低 | CANN/MUSA/DTK/Neuware 架构目标不同，厂商有生态锁定动机 | 统一 device API、统一调度、跨后端 checkpoint/serving 接口进入主流框架 |

## 6. 投资与产业含义

第一，国产算力软件栈的可用级追赶会先兑现为**推理侧有效算力提升**，而不是训练侧全面替代。对应用公司而言，最现实的路径是用 CANN/DTK/MUSA/Neuware 承接 Qwen、DeepSeek、Llama 衍生模型的推理、RAG、智能体、行业私有化部署。

第二，生态差距将提高“软件适配服务”和“模型工程团队”的价值。未来 12-24 个月，真正稀缺的不是会调用 API 的应用开发者，而是能写 Ascend C/BANG C/Triton-MUSA、能改 vLLM/SGLang、能定位 dtype/通信/显存碎片问题的系统工程师。

第三，国产硬件厂商的竞争会从 TOPS 参数转向**开源主线可见度**。能把改动合入 PyTorch/vLLM/SGLang/Triton 主线、能让社区自然复用的厂商，会比只发布“完成适配”新闻稿的厂商更可能形成长期生态。

第四，对 Card 3 的“万卡集群有效算力比”判断应进一步拆分：如果目标是推理服务，软件栈短板正在被快速压缩；如果目标是从零训练下一代基础模型，软件栈仍是与 HBM、互联、封装同等级别的硬约束。

## 7. 结论

国产 AI 软件生态不是没有进展，而是进展高度集中在“模型可控、硬件可控、镜像可控、厂商可维护”的场景。CANN 已经在国产栈中领先一档，MUSA 是最像 CUDA 的路线，DTK 适合 ROCm/类 CUDA 迁移和政企项目，Neuware 适合特定 MLU 推理部署。真正距离 CUDA 还远的是开放世界里的随机开发者体验：任意模型、任意 CUDA 扩展、任意 Python 环境、任意容器、任意分布式训练脚本都能高概率跑通。

因此，本卡综合判断：**未来 12-24 个月，国产栈最可期待的不是“替代 CUDA”，而是“在中国主流开源模型推理和政企私有化部署中降低对 CUDA 的边际依赖”。这足以改善国产算力的有效利用率，但还不足以解除训练侧软件生态对 CUDA 的结构性依赖。**

## 8. 下一张卡建议

建议交给 **offshore-strategist（港美股策略师）**，从美国出口管制、H20/H200/Blackwell 供应、华为昇腾生态、云厂商资本开支和港美股 AI 基础设施估值联动角度，评估“CUDA 依赖下降但不消失”对 NVIDIA、AMD、台积电、光模块、国产算力链的相对定价影响。

**建议问题：** 如果国产软件栈在 12-24 个月内只在推理侧实现可用级追赶，而训练侧仍依赖 CUDA/HBM/先进封装，港美股市场应如何重估 NVIDIA CUDA 护城河、H20/H200 中国需求、以及中国本土 AI 算力链的估值弹性？

## 9. 主要来源

- Huawei, “Huawei Releases Full-Stack Ascend AI Software,” 2020-08-10: https://www.huawei.com/en/news/2020/8/huawei-hai-ascend/
- Huawei, “Ascend: Open for All to Build a Vibrant Ecosystem,” 2025-09-20: https://www.huawei.com/en/news/2025/9/hc-shengten-opensource
- Ascend PyTorch adapter (`torch_npu`): https://github.com/Ascend/pytorch
- vLLM-Ascend supported models: https://docs.vllm.ai/projects/ascend/en/latest/user_guide/support_matrix/supported_models.html
- vLLM-Ascend release notes: https://github.com/vllm-project/vllm-ascend/blob/main/docs/source/user_guide/release_notes.md
- Moore Threads `torch_musa`: https://github.com/MooreThreads/torch_musa
- `vllm-musa` PyPI: https://pypi.org/project/vllm-musa/
- SGLang MUSA roadmap issue: https://github.com/sgl-project/sglang/issues/16565
- Moore Threads company milestones: https://en.mthreads.com/about
- Cambricon `vllm-mlu`: https://github.com/Cambricon/vllm-mlu
- Cambricon `mlu-ops`: https://github.com/Cambricon/mlu-ops
- vLLM installation accelerator matrix: https://docs.vllm.ai/en/v0.12.0/getting_started/installation/
- PyTorch accelerator integration: https://docs.pytorch.org/docs/main/accelerator/index.html
- PyTorch PrivateUse1 backend tutorial: https://docs.pytorch.org/tutorials/advanced/privateuseone.html
- NVIDIA CUDA Toolkit documentation: https://docs.nvidia.cn/cuda/
- NVIDIA CUDA-X libraries: https://developer.nvidia.com/cuda/cuda-x-libraries

## Follow-up

- Analyst: offshore-strategist
- Topic: CUDA 护城河变化对 NVIDIA、H20/H200 中国需求与港美股 AI 基础设施估值的影响
- Question: 如果国产软件栈在 12-24 个月内只在推理侧实现可用级追赶，而训练侧仍依赖 CUDA/HBM/先进封装，港美股市场应如何重估 NVIDIA CUDA 护城河、H20/H200 中国需求、以及中国本土 AI 算力链的估值弹性？
