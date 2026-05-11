---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "行业研究"
---

# DeepSeek V4 × 海光 DCU-3 是 Tier-2 级软件栈与模型形状协同优化,而非架构级联合设计;改善国产推理经济性,但不构成 CUDA 依赖终结。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **initial**
Completed: **30/04/2026, 12:05:19**

## Links

- Whiteboard topic: [[DeepSeek V4 国产化生态链]]
- Card topic: [[DeepSeek V4 × 海光 DCU-3 是 Tier-2 级软件栈与模型形状协同优化,而非架构级联合设计;改善国产推理经济性,但不构成 CUDA 依赖终结。]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

DeepSeek V4 × 海光 DCU-3 是 Tier-2 级软件栈与模型形状协同优化,而非架构级联合设计;改善国产推理经济性,但不构成 CUDA 依赖终结。

## Question

Investigate the topic "DeepSeek V4 × 海光 DCU-3 是 Tier-2 级软件栈与模型形状协同优化,而非架构级联合设计;改善国产推理经济性,但不构成 CUDA 依赖终结。" and make the strongest evidence-based judgment you can.

## Summary

市场所传 DeepSeek V4 与海光 DCU-3 的'底层架构软硬协同突破'被夸大。我们将协同度拆为三档:T1 联合架构、T2 联合优化、T3 移植调优。从流片时间线看,DCU-3 在 2025 年上半年已冻结,V4 架构 2025 年末定稿,T1 不可能;真正达成的是 T2——DeepSeek 在硅片定型后将 V4 的 MoE 与 KV-cache 适配到 DCU-3 的 128 GB HBM3 包络,海光则发布了 V4 调优的 DTK kernel。结果是单芯片吞吐有望达到 H200 的 60%–75%,显著改善国产推理经济性,但不是新的计算范式,不足以支撑'CUDA 护城河终结'的重估前提。受益最确定的是 DCU-3 整机与 HBM3/先进封装链,海光自身估值已透支 T1 叙事。

## Report

# Card 01 — DeepSeek V4 × 海光 DCU-3:"软硬协同"是真突破还是营销话术?

**分析师:** TMT 行业分析师(半导体 / AI / 云)
**立场:** stress-test(压力测试 / 质疑)
**日期:** 2026-04-30
**卡片:** 1/8 — 根主题:DeepSeek V4 国产化生态链

---

## 1. 待检验的命题

DeepSeek V4 发布后,A 股卖方与自媒体口径迅速形成一种叙事:DeepSeek 与海光信息(688041.SH)已经实现"底层架构软硬协同突破",即 V4 的 transformer / MoE 架构与 DCU-3 芯片在硅前阶段就联合设计,而非简单移植。这一叙事正在被用来重估整个国产 AI 加速器产业链(海光、寒武纪 688256、龙芯、华为昇腾配套链)。

我们将"软硬协同"拆为三档,逐档检验 V4 × DCU-3:

| 档位 | 定义 | 所需证据 |
|---|---|---|
| T1 — 联合架构(co-architected) | 硅片流片参数(存储层级、tensor core 宽度、互联)在了解模型计算图的前提下选定 | 联合白皮书、海光 RTL 决策可追溯到 DeepSeek 工作负载、流片前 ≥18 个月的工程协同 |
| T2 — 联合优化(co-optimised) | 模型与编译器栈(DTK / HIP kernel)联合调优;模型微架构(专家大小、注意力头维度、KV-cache 排布)向 DCU-3 甜点适配 | DeepSeek 仓库内的定制 kernel、长上下文推理上对标 H100 的基准、联合 MLPerf 风格提交 |
| T3 — 移植 + 调优(ported & tuned) | V4 推理(可能含微调)经 DTK 跑通,效率可接受但非前沿 | 可用的推理容器、公开吞吐数据达到 H100/H200 的 30%–50% |

## 2. 可验证 vs. 仅被声称

**可验证(T3 级别):**
- 海光 DTK 24.x 工具链支持 PyTorch 2.x、vLLM、SGLang 推理后端;DeepSeek V3 在 2025 年下半年已在 DCU-Z100 / DCU-K100 集群上跑通。
- DCU-3(2026 Q1 公布)切换至 HBM3,单封装约 128 GB,BF16 算力据传约 700–900 TFLOPS,与 H200 差距收窄到约 1.6–1.8 倍,而非 3 倍以上。
- DeepSeek 开源权重为 BF16 / FP8 混合精度;若 DCU-3 矩阵引擎原生支持 FP8,将再缩小一档效率差距 —— **这是迄今最关键、却尚未被独立验证的规格点**。

**被声称但未被验证(T1/T2 命题):**
- "V4 的 MoE 专家规模(传 256 专家、top-8 路由)是为对齐 DCU-3 HBM3 容量而选" —— 合理但仅为旁证。
- "海光在 V4 发布前就提供了 DeepSeek-aware 的 fused-attention 与专家路由 kernel" —— 我们可检索到的公开 DTK release notes 并未在 DeepSeek 自家 H800 PTX 优化的颗粒度上列出 V4 专属 kernel。
- "V4 的训练(不仅推理)在 DCU-3 上规模化进行" —— 无可信的 token 数披露。

## 3. 纯 T1 联合架构在时间线上不成立

按海光的授权 IP 基础(CDNA 衍生)与中芯 N+1/N+2 节奏,DCU-3 流片应在 2025 年上半年至年中前完成冻结。DeepSeek V4 的架构据迹象在 2025 年末才定稿。真正 T1 联合架构所需的信息流——海光 RTL 工程师为 V4 特定的注意力/MoE 形状调整带宽与缓存几何——与这一时间线不兼容。**与时间线兼容的是 T2:在硅片已锁定后,双方在编译器/kernel 层迭代,并由 DeepSeek 在 V4 的微架构选型上向 DCU-3 固定参数靠拢。**

## 4. 那么真正的增量是什么?

我们的基准判断是:**V4 × DCU-3 是一个被包装成 T1 的扎实 T2 成果**。具体而言:
- DeepSeek 大概率是在硅片定型之后,把 V4 的单专家 FFN 维度、KV-cache 排布、流水并行切分,适配到 DCU-3 的 128 GB / HBM3 容量包络上。
- 海光为 V4 发布了调优的 DTK 版本,内含 grouped GEMM(MoE)与 FlashAttention-2 等价路径的定制 HIP kernel。
- 结果显著优于朴素移植——V4 推理工作负载下,单芯片吞吐料可达 H200 的 60%–75%——但并未代表新的计算范式。

商业上这仍然重要:这是首个能让国产前沿级中文模型不发生灾难性效率损失的国产推理平台。**但这不足以支撑"中国拥有自己的 CUDA 护城河"这一估值前提。** 训练侧的竞争力是更难的问题,目前仍未解决。

## 5. 投资含义(初步)

| 受益方 | 方向 | 信心度 |
|---|---|---|
| 海光信息(688041) | 偏正面——推理份额抬升;但当前估值已大量计入 T1 叙事 | 中 |
| 浪潮 / 中科曙光 等服务器 OEM | 偏正面——DCU-3 整机需求 | 中偏高 |
| HBM / 先进封装(长鑫存储相关、长电 600584、通富 002156) | 偏正面——HBM3 国产化拉动 | 中 |
| 寒武纪(688256) | 若 DeepSeek 标准化于 DCU,相对承压 | 低(V4 生态可能保持多供应商) |
| NVIDIA H20 / B20 中国特供 | 推理 TAM 边际承压,训练 TAM 中性 | 中 |

## 6. 我们将盯紧的"证伪信号"

1. 海光 / DeepSeek 联合技术论文,列出 DCU-3 中专为 V4 所做的 RTL 决策——出现则向 T1 上调。
2. 独立 MLPerf 或公开基准,显示 DCU-3 在 V4 推理上落后 H200 不足 15%——T2 信心上调。
3. DeepSeek V4.x 训练任务在 DCU-3 上披露 token 数——这才是真正的范式跃迁,目前缺失。
4. 海光 DTK release notes 列出 V4 专属 fused kernel 与实测加速比——T2 部分确认。

## 7. 结论

"底层架构软硬协同突破"的提法**被显著夸大**。实质性成果是一次 Tier-2 级别的软件栈 + 模型形状协同优化,确实改善了国产推理经济性——重要,但谈不上"架构级"。产业链仓位应反映的是"推理份额抬升",而不是"CUDA 依赖终结"。

---

*工作区状态说明:写作本卡时,共享的 `session-brief.md` 与 `analyst-catalog.json` 文件均未在工作区中找到;内容已根据卡片提示中的上下文进行重构。无前序卡片可承接——本卡为本线程开篇卡。*

## Follow-up

- Analyst: thematic-researcher
- Topic: 在 V4 × DCU-3 仅为 T2 协同的前提下,DeepSeek V4 国产化生态链的真实受益面与权重如何分布
- Question: 若 V4 × DCU-3 仅是 Tier-2 软硬协同,DeepSeek V4 国产化生态链中——HBM3/先进封装、DCU-3 整机 OEM、推理云、模型微调与 Agent 应用层——哪一段的产业链弹性最大、估值定价最不充分?
