---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "ESG与主题"
---

# 若 V4 x DCU-3 仅是 T2 协同，最大未定价弹性在模型微调与 Agent 应用层，HBM3 / 先进封装是最高确定性的制造业受益环节，而推理云和 OEM 的利润弹性更受限。

Analyst: **Thematic Researcher**
Status: **completed**
Stance: **synthesize**
Completed: **30/04/2026, 13:30:21**

## Links

- Whiteboard topic: [[DeepSeek V4 国产化生态链]]
- Card topic: [[若 V4 x DCU-3 仅是 T2 协同，最大未定价弹性在模型微调与 Agent 应用层，HBM3 先进封装是最高确定性的制造业受益环节，而推理云和 OEM 的利润弹性更受限。]]
- Analyst: [[Thematic Researcher]]
- Analyst level: [[ESG与主题]]

## Topic

若 V4 x DCU-3 仅是 T2 协同，最大未定价弹性在模型微调与 Agent 应用层，HBM3 / 先进封装是最高确定性的制造业受益环节，而推理云和 OEM 的利润弹性更受限。

## Question

Investigate the topic "若 V4 x DCU-3 仅是 T2 协同，最大未定价弹性在模型微调与 Agent 应用层，HBM3 / 先进封装是最高确定性的制造业受益环节，而推理云和 OEM 的利润弹性更受限。" and make the strongest evidence-based judgment you can.

## Summary

在承接卡片 01 的 T2 而非 T1 前提下，本卡认为 DeepSeek V4 国产化生态的最大受益不应简单归因于 DCU 芯片或整机。HBM3 / 先进封装仍是确定性最高的物理瓶颈，但估值定价最不充分、产业弹性最大的环节在模型微调与 Agent 应用层。建议权重为：模型微调 + Agent 应用层 45%，HBM3 / 先进封装 25%，DCU-3 整机 OEM 18%，推理云 12%。推理云用量会增长，但 DeepSeek 官方低价和 cache-hit 降价削弱其定价权。下一步应映射具体 A股与港股 TMT 公司能否捕获下游应用利润。

## Report

# 卡片 02 - DeepSeek V4 国产化生态链：T2 协同前提下的真实受益排序

**分析师：** 主题研究员  
**立场：** synthesize  
**日期：** 2026-04-30  
**卡片：** 2/8 - 根主题：DeepSeek V4 国产化生态链  

## 1. 核心判断

我支持卡片 01 的技术约束：V4 x DCU-3 应被视为 Tier-2 软件栈与模型形状协同优化，而不是架构级联合设计。这会改变投资答案。若它不是 T1 级硬件架构突破，最大受益者就不应简单等同于 DCU 芯片厂。确定性最高的物理瓶颈仍是 HBM3 / 先进封装，但估值定价最不充分、产业弹性最大的环节在下游：能够把 V4 低成本长上下文推理转化为新增用量的模型微调与 Agent 应用层。

**权重分布：** 模型微调 + Agent 应用层 45%，HBM3 / 先进封装 25%，DCU-3 整机 OEM 18%，推理云 12%。

这个区分很关键：HBM3 / 先进封装确定性更高，而应用层凸性更强、当前定价识别度更低。

## 2. 为什么 T2 前提会把受益重心推向下游

卡片 01 的结论是，V4 x DCU-3 大概率是强 T2 结果：模型与 kernel 选择围绕已固定的 DCU-3 硬件包络做优化，但现有证据不足以支持硅片级联合架构设计。这意味着三点：

1. DCU-3 需求可以上升，但应按国产推理份额提升来定价，而不是按完全替代 CUDA 的架构重估来定价。
2. 硬件稀缺仍然重要，因为 AI 加速器供给受 HBM 与先进封装约束，而不只是逻辑芯片约束。
3. V4 最有差异化的经济特征不是“能跑在国产芯片上”，而是“把长上下文、工具调用推理的成本降到足以扩展使用场景”。

DeepSeek 官方透明度页面显示 DeepSeek-V4 发布日期为 2026 年 4 月 24 日；Hugging Face 的模型集合显示 V4 有四个 checkpoint：V4-Pro、V4-Pro-Base、V4-Flash、V4-Flash-Base。Hugging Face 技术摘要将 V4-Pro 描述为 1.6T 总参数、49B 激活参数，将 V4-Flash 描述为 284B 总参数、13B 激活参数；同时称 V4-Pro 在 1M 上下文下的单 token 推理 FLOPs 仅为 V3.2 的 27%，KV cache 仅为 V3.2 的 10%。DeepSeek 官方价格页列明 1M 上下文长度、384K 最大输出；按当前价格表，V4-Flash 输出价格为每 1M tokens $0.28，V4-Pro 输出价格在 75% 促销期为 $0.87，常规 V4-Pro 输出价格为每 1M tokens $3.48。

这些事实强化了下游判断：长上下文与 Agent 工作负载正是边际成本下降后 token 用量最容易扩张的地方。

## 3. 环节排序与权重

| 排名 | 环节 | 主题权重 | 受益确定性 | 业绩弹性 | 定价缺口 | 判断 |
|---:|---|---:|---|---|---|---|
| 1 | 模型微调 + Agent 应用层 | 45% | 中 | 高 | 高 | 定价最不充分、弹性最大 |
| 2 | HBM3 / 先进封装 | 25% | 高 | 中高 | 中 | 最确定的物理瓶颈 |
| 3 | DCU-3 整机 OEM | 18% | 中高 | 中 | 低到中 | 直接受益于出货，但利润率受限 |
| 4 | 推理云 | 12% | 中 | 低到中 | 低 | 用量增长，但定价权弱 |

### 3.1 模型微调 + Agent 应用层 - 45%

这是整条链中凸性最高的部分。V4 的经济性降低了长 Agent 轨迹、重复 system prompt、代码仓库级上下文、客服记忆、文档审阅、企业流程自动化的运行成本。微调与 adapter 也会受益，因为企业可以在强开源基座上部署更轻的行业层，而不是训练完整的自有基础模型。

市场当前仍主要讨论芯片、服务器和云算力，这使应用层定价更不充分，尤其是拥有工作流数据、垂直分发、合规能力和部署关系的厂商。真正的赢家不是泛泛的“AI 应用”公司，而是能证明三项能力的公司：专有任务数据、可量化工作流 ROI，以及与 Agent 运行次数挂钩的持续收入，而不是一次性项目收入。

风险在于分化。开源权重和低 API 价格降低进入门槛，价值不会自动流向所有模型套壳产品。投资边际优势在垂直深度，而不是表层 V4 接入。

### 3.2 HBM3 / 先进封装 - 25%

这是确定性最高的受益环节。Epoch AI 的供应链研究认为，2025 年 AI 芯片生产的主要瓶颈是先进封装与 HBM，而不是逻辑芯片；其估算 2025 年四大 AI 芯片设计商按价值口径消耗了全球 CoWoS 封装产能与 HBM 供给的 90% 以上，但只消耗了约 12% 的先进逻辑晶圆产量。TrendForce 预计 2026 年 AI 服务器出货量同比增长超过 20%，并强调 HBM、封装、带宽与光互连是关键约束。

对中国而言，国产 AI 加速器本土化仍会拉动 HBM3、2.5D 封装、基板、散热材料、测试和良率提升设备。即便 V4 的 KV-cache 压缩降低了每 token 内存需求，也不会取消加速器封装层面对高带宽内存的需求。相反，更便宜的推理会扩大全部 token 需求，使封装瓶颈继续存在。

该环节在“定价不充分的弹性”上排在 Agent 应用层之后，是因为 HBM / 先进封装主题在全球范围内已被广泛识别。国产化角度仍有空间，但公开市场预期已不算早期。

### 3.3 DCU-3 整机 OEM - 18%

如果 DCU-3 整机被用于 V4 推理部署，服务器 OEM 是最直接的受益环节。海光信息 2026 年一季度营收为人民币 40.34 亿元，同比增长 68.06%；归母净利润为人民币 6.87 亿元，同比增长 35.82%。同一报道显示，截至 2025 年末，海光 DCU 已在 20+ 个关键行业和 300+ 应用场景落地，并与 365 款主流模型完成适配或联合精调。

这支持真实需求，而不仅是概念交易。不过，OEM 环节通常把需求更快转化为收入，而不是利润。它面临组件成本传导、客户采购周期、价格竞争和营运资本压力。除非供应商掌握板卡设计、液冷、集群管理软件或长期运维，否则毛利率提升有限。

因此，OEM 应给正向权重，但不应是最高权重。

### 3.4 推理云 - 12%

推理云用量应会上升，但变现能力弱于流量叙事。DeepSeek 官方价格页显示 V4 定价激进，cache-hit 价格也被显著下调。这有利于采用率，却压制云厂商定价权。推理云只有在受限国产加速器上实现高利用率时才能真正受益，但其价格会被 DeepSeek 自身 API 与其他云平台锚定。

因此，云层是规模与利用率交易，不是高倍数稀缺交易。最好的情况是同时具备低电价、高利用率、稳定企业合同和一方模型工具链。单纯 token 转售是最弱模式。

## 4. 哪一段最被低估？

答案取决于定义：

- **受益最确定：** HBM3 / 先进封装。
- **收入最直接：** DCU-3 整机 OEM。
- **用量弹性最大：** 模型微调 + Agent 应用层。
- **风险收益最弱：** 商品化推理云。

我的综合答案是：**模型微调 + Agent 应用层拥有最大的定价不充分弹性，而 HBM3 / 先进封装是确定性最高的制造业受益环节。**

市场的错误在于把 V4 x DCU-3 叙事当作硬件重估事件。在 T2 前提下，更好的框架是“硬件建立国产推理底座；更便宜的长上下文推理解锁下游工作流需求”。因此，组合构建应采用稀缺物理瓶颈与低持仓应用变现的杠铃结构，同时避免为低毛利率的产能传导环节支付过高估值。

## 5. 后续观察点

1. **DCU-3 独立 V4 benchmark：** 若 DCU-3 在 V4 推理上达到卡片 01 预期的 H200 吞吐 60%-75%，OEM 与 HBM 权重应上调；若低于 50%，下游应用仍可能通过其他国产硬件推进，但 DCU 专属链条会变弱。
2. **国产 HBM3 良率与封装认证：** 一旦确认规模供应，HBM / 先进封装将从“主题”进入“业绩”。
3. **企业 Agent 留存：** 关键指标不是 demo 数量，而是月度 recurring agent runs、tool-call 成功率和工作流级 ROI。
4. **DeepSeek 定价下的云毛利率：** 若 token 价格下降快于利用率提升，推理云仍应低配。

## 6. 交棒建议

下一个未解问题不是继续做技术架构复核，而是判断 A股与港股软件、云和 IT 服务公司能否真正捕获下游 Agent / 微调经济性，还是价值会回流到模型厂和云平台。我建议交棒给 `tmt-analyst` [primary]，因为下一步需要把上面的主题权重映射到具体上市 TMT 公司、收入科目和利润率结构。

## 来源

[C1] 内部前序卡片：`whiteboard/4fda6ecb-6d81-4542-a7eb-ef41303308e6/card-01/report.en.md` - T2 而非 T1 前提，以及 H200 推理吞吐 60%-75% 的基准假设。  
[C2] DeepSeek Transparency Center, "DeepSeek-V4", release date April 24, 2026: https://www.deepseek.com/en/transparency/  
[C3] DeepSeek API Docs, "Models & Pricing", current V4 context length, max output, cache-hit and output pricing: https://api-docs.deepseek.com/quick_start/pricing  
[C4] Hugging Face Blog, "DeepSeek-V4: a million-token context that agents can actually use", V4-Pro / V4-Flash parameters, 1M context, FLOP and KV-cache reductions, agent benchmarks: https://huggingface.co/blog/deepseekv4  
[C5] Epoch AI, "Advanced packaging and HBM, not logic dies, were the bottlenecks on AI chip production in 2025": https://epoch.ai/data-insights/ai-chip-supply-chain-constraints  
[C6] TrendForce, "AI to Reshape the Global Technology Landscape in 2026", AI server shipment growth and HBM / bandwidth constraints: https://www.trendforce.com/presscenter/news/20251127-12805.html  
[C7] DIGITIMES Asia, citing IDC, "Chinese companies capture nearly 41% of domestic AI accelerator server market", April 2, 2026: https://apps.digitimes.com/news/a20260402VL207/china-ai-server-accelerator-chips-nvidia.html  
[C8] CLS / STAR Market Daily, "AI算力需求爆发 海光信息Q1营收同比增68% DCU全面适配主流大模型", April 7, 2026: https://api3.cls.cn/share/article/2337024?app=&os=ios&sv=844

## Follow-up

- Analyst: tmt-analyst
- Topic: A股与港股 TMT 公司中，谁能真正捕获 DeepSeek V4 下游 Agent / 微调经济性
- Question: 在模型微调 + Agent 应用层权重最高的判断下，哪些上市软件、云、IT 服务或行业数字化公司具备专有数据、工作流 ROI 和 recurring agent runs，从而能把 V4 低成本推理转化为利润而不只是概念流量？
