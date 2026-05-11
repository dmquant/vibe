---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "行业研究"
---

# DeepSeek V4 缓释但没有推翻 AI capex bottleneck：它压低单位推理资本强度，却可能通过长上下文 agent 和私有化部署放大总算力需求。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **initial**
Completed: **27/04/2026, 00:45:42**

## Links

- Whiteboard topic: [[DeepSeek V4 launch — capex bottleneck thesis re-examined]]
- Card topic: [[DeepSeek V4 缓释但没有推翻 AI capex bottleneck：它压低单位推理资本强度，却可能通过长上下文 agent 和私有化部署放大总算力需求。]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

DeepSeek V4 缓释但没有推翻 AI capex bottleneck：它压低单位推理资本强度，却可能通过长上下文 agent 和私有化部署放大总算力需求。

## Question

Investigate the topic "DeepSeek V4 缓释但没有推翻 AI capex bottleneck：它压低单位推理资本强度，却可能通过长上下文 agent 和私有化部署放大总算力需求。" and make the strongest evidence-based judgment you can.

## Summary

DeepSeek V4 的核心冲击不是全面超越 GPT-5 / Claude Opus 4.7 / Gemini 3，而是把近前沿能力、开源权重、1M token 上下文和低推理价格放在同一条曲线上。推理端硬件需求差距明显收窄，尤其是长上下文 KV cache 和每 token FLOPs，但训练端、系统级服务化和最高 test-time compute 差距仍在。对资本开支叙事的影响是削弱“无限堆最贵 GPU”的单线故事，强化“低成本推理规模化、先进封装、HBM、网络和多供应商部署”的结构性需求。

## Report

# DeepSeek V4 发布：重新审视“资本开支瓶颈”假说

**结论先行：我支持“AI 算力瓶颈被缓释，但未被推翻”的初始判断。** DeepSeek V4 的真正冲击不在于绝对能力已经全面超过 GPT-5 / Claude Opus 4.7 / Gemini 3，而在于它把接近前沿的开源权重、百万 token 上下文、MoE 低激活参数和低 API 价格放在同一条曲线上。对硬件链的含义是：单位推理成本下降会削弱“只有无限买最贵 GPU 才能追前沿”的叙事，但同时会放大可部署场景、长上下文 agent 和私有化推理需求，资本开支从“单模型训练军备赛”转向“低成本推理规模化 + 长上下文内存/网络/封装瓶颈”。

## 一、V4 在性能曲线上的位置

DeepSeek 在 Hugging Face 模型卡中披露，V4 系列为 MoE 架构：V4-Pro 为 1.6T 总参数、49B 激活参数，V4-Flash 为 284B 总参数、13B 激活参数，均支持 1M token 上下文；权重采用 MIT License，并使用 FP4/FP8 混合精度。官方模型卡称 V4-Pro-Max 在 LiveCodeBench、Codeforces、SWE Verified、MCPAtlas 等任务上已进入闭源前沿模型附近，但在 GPQA Diamond、HLE、Apex、GDPval-AA 等高难推理/知识工作上仍落后于最强闭源模型组合。

| 维度 | DeepSeek V4-Pro-Max | 相对前沿模型的读法 |
|---|---:|---|
| LiveCodeBench | 93.5 | 高于 Gemini-3.1-Pro High 的 91.7，属于强项 |
| Codeforces | 3206 | 高于 GPT-5.4 xHigh 的 3168、Gemini-3.1-Pro High 的 3052 |
| SWE Verified | 80.6 | 与 Gemini-3.1-Pro High 80.6、Opus-4.6 Max 80.8 基本持平 |
| SWE Pro | 55.4 | 低于 GPT-5.4 xHigh 57.7、Opus-4.6 Max 57.3 |
| GPQA Diamond | 90.1 | 低于 GPT-5.4 xHigh 93.0、Gemini-3.1-Pro High 94.3 |
| HLE | 37.7 | 低于 Opus-4.6 Max 40.0、Gemini-3.1-Pro High 44.4 |
| MRCR 1M | 83.5 | 低于 Opus-4.6 Max 92.9，高于 Gemini-3.1-Pro High 76.3 |

我的解读：V4 不是“全面 SOTA”，而是“开源权重里的近前沿 agent/coding/长上下文模型”。它对闭源阵营的威胁主要来自成本和部署权，而不是所有 benchmark 的领先。

## 二、V4 在成本曲线上的位置

成本冲击更明确。DeepSeek API 当前列示 V4-Flash 为 $0.14/百万输入 token、$0.28/百万输出 token；V4-Pro 标准价为 $1.74/$3.48，但截至 2026-05-05 15:59 UTC 有 75% 限时折扣，即 $0.435/$0.87。相比之下，Anthropic 披露 Claude Opus 4.7 为 $5/$25；Google Vertex AI 披露 Gemini 3 Pro Preview 在 <=200K 输入时为 $2/$12，>200K 时为 $4/$18；OpenAI 当前旗舰 GPT-5.5 标准短上下文为 $5/$30，长上下文为 $10/$45。若按用户问题中的 GPT-5 旧款计，OpenAI API 页列示 GPT-5 为 $1.25/$10、400K 上下文。

| 模型 | 上下文 | 输入价 / 百万 token | 输出价 / 百万 token | 成本读法 |
|---|---:|---:|---:|---|
| DeepSeek V4-Flash | 1M | $0.14 | $0.28 | 极低成本工作马 |
| DeepSeek V4-Pro | 1M | $1.74 标准价；$0.435 限时价 | $3.48 标准价；$0.87 限时价 | 标准价也显著低于 Opus/GPT-5.5 |
| GPT-5 | 400K | $1.25 | $10.00 | 输出侧明显更贵，且上下文更短 |
| GPT-5.5 | 短/长上下文分层 | $5 / $10 | $30 / $45 | 当前 OpenAI 前沿价格带明显更高 |
| Claude Opus 4.7 | 1M | $5 | $25 | 高端 agent/coding 溢价仍存在 |
| Gemini 3 Pro Preview | 1M | $2 / $4 | $12 / $18 | 长上下文价格中位，强多模态 |

DeepSeek V4 的成本优势来自两层：一是 MoE 低激活参数降低每 token 计算；二是百万上下文下的 KV cache 和 attention 成本被压缩。Hugging Face 技术解读披露，在 1M 上下文下，V4-Pro 单 token 推理 FLOPs 仅为 V3.2 的 27%，KV cache 为 10%；V4-Flash 分别为 10% 和 7%。这比单纯降价更重要，因为它指向真实推理部署的硬件资本强度下降。

## 三、硬件需求差距：收窄，但不是归零

**相对闭源前沿模型，推理端硬件差距在收窄；训练端和最高质量 test-time compute 的差距仍大。**

收窄的证据：

- 1.6T 总参数但仅 49B 激活，V4-Pro 把“前沿级输出”对应的有效推理计算量压低。
- 1M 上下文下 KV cache 下降至 V3.2 的 10%，使长上下文 agent 的瓶颈从单纯 HBM 容量转向更细的缓存、调度、前缀复用和软件栈效率。
- 开源 MIT 权重意味着企业、云厂商和主权 AI 客户可在自有硬件上做定制部署，削弱单一闭源 API 对算力路径的绑定。

未归零的证据：

- V4-Pro 权重仍是 1.6T 总参数，存储、并行、带宽、通信、容错和服务化调度不是消费级 GPU 能轻松承担的任务。
- 最高质量的 Think Max 需要至少 384K 上下文窗口，复杂 agent 仍会消耗大量输出 token 和推理时间。
- GPT-5.5、Claude Opus 4.7、Gemini 3/3.1 仍可通过更高 test-time compute、专有工具链、检索/浏览/代码执行集成与安全系统维持质量和产品体验差距。

因此，V4 对“capex bottleneck thesis”的影响不是简单看空硬件，而是把瓶颈从“有没有足够 GPU 训练最大模型”转移到“谁能用最低单位成本服务海量长上下文推理”。

## 四、对 NVDA / TSM / ASML / AMD 的第一手影响判断

| 公司 | 初步判断 | 看多证据 | 看空证据 | 中性/约束证据 |
|---|---|---|---|---|
| NVDA | 中性偏空于叙事，基本面仍未逆转 | NVIDIA FY26 全年收入 $215.9B，Q4 数据中心收入 $62.3B、同比 +75%；公司继续强调 Blackwell/Rubin 推理 token 成本下降和客户投资 AI compute | V4 证明“近前沿能力 + 低价 + 开源部署”可压低闭源 API 价格带，并让非 CUDA/国产硬件有优化空间；若企业用 V4 替代高端闭源 agent，单位 GPU 需求和高毛利叙事承压 | 更低推理成本会扩大需求弹性，agent 长链路可能增加总 token 消耗；NVDA 仍控制高端网络、HBM 生态、CUDA 和系统级集成 |
| TSM | 中性偏多 | TSMC 1Q26 实际收入 $35.90B，2Q26 指引 $39.0-40.2B，毛利率指引 65.5%-67.5%；AI/HPC 客户扩产仍需要先进节点与先进封装 | 若 V4 式效率扩散，单模型算力强度下降，部分 hyperscaler 可能放缓最激进的 GPU 堆叠 | 需求从训练转向推理并不会离开 TSMC，反而要求 N3/N2、CoWoS/SoIC、HBM base die 与网络芯片持续供给 |
| ASML | 中性偏多 | ASML 1Q26 净销售额 €8.8B、净利润 €2.8B，并把 2026 年销售指引抬至 €36-40B，管理层明确称 AI 基础设施需求推动行业展望巩固 | 若效率路线压低客户远期晶圆需求预期，EUV 订单估值弹性会受影响；出口管制仍是主要非技术变量 | V4 对 lithography 的影响滞后且二阶；AI 逻辑、HBM、先进封装和更多存储层级仍会增加先进制程曝光和设备强度 |
| AMD | 中性偏多 | AMD 2025 数据中心收入 $16.6B、同比 +32%，官方称 MI350 Series GPUs 需求强；公司路线图推进 MI350/MI450/Helios，强调开放生态和 rack-scale | 如果 V4 部署生态优先适配特定国产硬件或 CUDA，AMD 需要靠 ROCm、系统交付和客户 wins 证明可用性 | V4 的开源权重天然利好“第二供应商/低成本推理集群”故事，AMD 比 NVDA 更需要开放模型作为生态牵引 |

我的排序：**TSM / ASML 受益弹性更稳，AMD 的叙事弹性最大但执行风险也最大，NVDA 从“唯一稀缺资产”向“仍是最强系统平台但单位经济受挑战”切换。**

## 五、三种市场解释框架

**看多硬件链：** V4 降低推理价格，释放长上下文 agent、代码仓库级开发、多文档研究、企业私有化部署需求。Jevons 效应可能让单位成本下降转化为更多 token、更多并发 agent、更多边缘/私有云部署。TSM/ASML/AMD 最受益，NVDA 也受益于总量扩张。

**看空硬件链：** 若 V4 证明接近前沿能力可用更少激活参数和更低 KV cache 达成，hyperscaler 的“无限 capex 换 SOTA”叙事会被重新定价。闭源模型价格带被迫下移，高端 GPU 投资回收期拉长，NVDA 溢价最敏感。

**中性综合：** 训练端扩张和推理端效率同时存在。V4 让资本开支结构变化，而不是让资本开支消失。未来 2-3 个季度应跟踪：闭源模型是否降价、云厂商 2026 capex 是否下修、V4 在企业私有部署中的吞吐/稳定性、AMD/华为/其他加速器对 V4 的实际优化速度。

## 六、后续需要验证的关键问题

1. DeepSeek V4 的社区独立 benchmark 是否复现官方结果，尤其是 SWE Pro、BrowseComp、MCPAtlas 和 1M 上下文检索。
2. DeepSeek 当前 75% 限时折扣结束后，V4-Pro 是否维持 $1.74/$3.48 标准价，还是继续参与价格战。
3. 云厂商是否把 2026 capex 从训练集群转向推理、网络、存储、HBM 和先进封装，而不是绝对削减。
4. AMD ROCm、华为 Ascend、国产 AI 芯片和云上定制 ASIC 是否能借 V4 开源权重形成可度量的推理性价比案例。

## 主要来源

- DeepSeek API Docs，《Models & Pricing》，2026-04-26 访问：https://api-docs.deepseek.com/quick_start/pricing
- Hugging Face，`deepseek-ai/DeepSeek-V4-Pro` 模型卡与技术摘要，2026-04-26 访问：https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro
- Hugging Face Blog，《DeepSeek-V4: a million-token context that agents can actually use》，2026-04-24：https://huggingface.co/blog/deepseekv4
- OpenAI API Pricing，2026-04-26 访问：https://developers.openai.com/api/docs/pricing
- Anthropic，《Introducing Claude Opus 4.7》，2026-04-16：https://www.anthropic.com/news/claude-opus-4-7
- Google Blog，《Gemini 3: Introducing the latest Gemini AI model from Google》，2025-11-18：https://blog.google/products-and-platforms/products/gemini/gemini-3/
- Google Cloud Vertex AI Pricing，2026-04-26 访问：https://cloud.google.com/vertex-ai/generative-ai/pricing
- NVIDIA，《NVIDIA Announces Financial Results for Fourth Quarter and Fiscal 2026》，2026-02-25：https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-fourth-quarter-and-fiscal-2026
- TSMC Investor Relations，2026 Q1 Quarterly Results，2026-04-26 访问：https://investor.tsmc.com/english/quarterly-results/2026/q1
- ASML，《ASML reports €8.8 billion total net sales and €2.8 billion net income in Q1 2026》，2026-04-15：https://www.asml.com/en/news/press-releases/2026/q1-2026-financial-results
- AMD，《AMD Reports Fourth Quarter and Full Year 2025 Financial Results》，2026-02-03：https://ir.amd.com/news-events/press-releases/detail/1276/amd-reports-fourth-quarter-and-full-year-2025-financial-results

## Follow-up

- Analyst: offshore-strategist
- Topic: DeepSeek V4 对美股云厂商与互联网平台 2026 capex 指引的压力测试
- Question: 在 MSFT / GOOGL / META / AMZN 最新 capex 指引和 AI 收入披露中，V4 式低成本开源模型更可能导致绝对 capex 下修，还是导致 capex 从训练 GPU 转向推理、网络、存储和自研 ASIC？
