---
source: ai-institute
resource_type: whiteboard-card
card_index: 3
status: completed
analyst_level: "权益策略"
---

# 路由系统没有稳定优先匹配`offshore-strategist`处理美股科技巨头和美国AI监管，而是让通用AI/TMT关键词截流了应由港美股策略主导的全球策略信号。

Analyst: **HK/US Strategist**
Status: **completed**
Stance: **stress-test**
Completed: **02/05/2026, 16:31:07**

## Links

- Whiteboard topic: [[Mailbox routing rebalance for TMT analyst]]
- Card topic: [[路由系统没有稳定优先匹配 offshore-strategist 处理美股科技巨头和美国AI监管，而是让通用AI TMT关键词截流了应由港美股策略主导的全球策略信号。]]
- Analyst: [[HK US Strategist]]
- Analyst level: [[权益策略]]

## Topic

路由系统没有稳定优先匹配`offshore-strategist`处理美股科技巨头和美国AI监管，而是让通用AI/TMT关键词截流了应由港美股策略主导的全球策略信号。

## Question

Investigate the topic "路由系统没有稳定优先匹配`offshore-strategist`处理美股科技巨头和美国AI监管，而是让通用AI/TMT关键词截流了应由港美股策略主导的全球策略信号。" and make the strongest evidence-based judgment you can.

## Summary

本卡片从港美股策略视角对“全球AI被TMT截流”做压力测试，结论支持截流假设。第2张卡片的80条样本中，56条误入`tmt-analyst`，误分率70%；其中12条是美股科技/七巨头内容，最佳匹配为`offshore-strategist`却被路由至TMT。更关键的是，任务提示中的可见Analyst Catalog未清晰列出`offshore-strategist`，说明问题可能既有关键词权重偏差，也有名册可达性缺陷。负面影响包括Mag 7/ADR策略信号流失、美国AI监管被行业化处理、全球AI产业链研究碎片化和工作量指标失真。

## Report

# 港美股策略压力测试：全球AI是否被TMT路由截流？

## 执行摘要

我对前两张卡片的推论做压力测试，结论是基本支持“截流”假设。现有证据**不能**说明路由系统在涉及 NVIDIA、Microsoft、美国AI监管或全球AI产业链时优先匹配 `offshore-strategist`。证据更接近相反结论：一旦请求中出现宽泛的AI、芯片、云、平台语言，路由逻辑似乎会过度抬高 `tmt-analyst` 权重，而低估市场地域和策略研究归属。

最强的数字证据仍来自第2张卡片的80条样本压力测试：**80条样本中有56条误入 `tmt-analyst`，误分率为70%**；其中**12条，占80条样本的15%，属于美股科技/七巨头内容，最佳匹配应为 `offshore-strategist`，但当前路由为 `tmt-analyst`**。[C1] 从港美股策略视角看，这12条不是无害的分类误差。它们正是需要把美股科技巨头、ADR/HK Connect传导、跨境AI资本开支、出口管制敞口和全球风险偏好放在同一框架中处理的内容。

同时还存在一个名册完整性问题。当前卡片和第2张卡片都引用 `offshore-strategist`，但任务提示中给出的 Analyst Catalog 快照没有清晰列出 `offshore-strategist`，却列出了 `tmt-analyst`、`thematic-researcher`、`global-macro`、`ashare-strategist`、`chief-strategist` 等角色。[C3] 如果真实路由器依赖这份可见名册，`offshore-strategist` 可能在结构上不可达；如果另有隐藏名册层，则问题更可能是权重失败而非名册失败。无论哪种情况，实际运营结果相同：美国和全球AI策略信号在港美股策略视角介入前，已经被TMT桶截走。

## 核心判断

**立场：stress-test，并支持“截流”假设。**

我的核心判断是：路由系统并没有在全球AI核心标的如 NVIDIA、Microsoft，或美国AI监管政策任务中稳定优先匹配 `offshore-strategist`。问题并不是所有 NVIDIA 或 Microsoft 相关内容都应绕开TMT。若问题是产品、半导体、云业务利润率或AI服务器需求，`tmt-analyst` 仍然可能是合理负责人。真正的失败在于：路由器似乎把AI词汇出现视为TMT默认归属，而没有先判断任务是否是美股/港股权益策略、ADR、跨境政策或全球资产配置问题。

## 证据表

| 证据 | 说明 | 策略含义 |
| :--- | :--- | :--- |
| 第2张卡片样本：**80**条自动交接，**56**条误分，误分率**70%** | AI/芯片/云/平台词汇形成广义TMT引力井 | 路由问题是系统性的，不是个别边缘案例。[C1] |
| 第2张卡片子样本：**80条中的12条**美股科技/七巨头最佳匹配为 `offshore-strategist`，却被路由至 `tmt-analyst` | 美股科技巨头覆盖被从港美股策略负责人处抽离 | 邮箱正在丢失全球客户最需要的Mag 7与ADR策略层。[C1] |
| 第2张卡片meta：下一位分析师明确设为 `offshore-strategist`，原因是全球科技巨头和美国AI政策任务误入TMT | 上一张卡片已经识别出跨地域流失 | 本卡片应检验港美股策略信号损失，而不是重复一般AI关键词分析。[C2] |
| 任务提示中的 Analyst Catalog 快照没有清晰列出 `offshore-strategist` | 被点名的目标角色可能在可见名册中不可选 | 路由失败可能同时来自名册可用性和关键词权重。[C3] |
| 现场工作区检查发现 `card-02` 文件存在，但 `session-brief.md`、`analyst-catalog.json`、`card-01` 不在磁盘上 | 磁盘状态不完整，因此本卡片使用任务提供的会话快照和现场 `card-02` 文件 | 需要记录证据来源，否则下游卡片可能把缺失文件误判为缺失证据。[C4] |

## TMT负责是合理的边界

一部分AI任务确实应留在 `tmt-analyst`。如果请求关注半导体供给、模型推理基础设施、云业务毛利率、AI服务器需求、消费电子或互联网平台变现，TMT就是自然负责人。在这些情形下，`offshore-strategist` 可以是参与者，而未必是主负责人。

问题出在路由规则把这些关键词当成TMT归属的充分条件。比如“何看 NVIDIA 财报对港股AI供应链映射的影响”、“Microsoft AI资本开支和美国利率敏感性”、“美国AI出口管制收紧与ADR风险溢价”，这些都不只是TMT简报，而是跨市场策略研究。主负责人应是 `offshore-strategist`，在需要技术和行业细节时再把 `tmt-analyst` 设为必要协作者。

## 对全球策略研究的负面影响

### 1. Mag 7和ADR策略信号脱离组合视角

当 NVIDIA、Microsoft、Amazon、Alphabet、Meta、Apple 或 Tesla 内容被 `tmt-analyst` 吸收时，研究流程容易过度集中在产品周期、云端AI需求、芯片或平台经济上。这些输入必要，但不是完整策略问题。港美股策略还需要把这些输入连接到指数集中度、Nasdaq领涨结构、ADR风险溢价、港股AI映射标的、南北向情绪传导以及全球客户组合配置。

因此，第2张卡片中**80条里12条**美股科技/七巨头误分并不是小的行政问题，而是实质性的信号流失渠道。[C1]

### 2. 美国AI监管被包装成行业新闻，而不是跨境政策风险

美国AI监管、出口管制、对外投资限制、芯片管制、云服务访问规则、反垄断行动和政府采购政策，不是纯TMT事件。它们影响跨境资金流、估值折价、中国和香港风险溢价，以及全球供应链重定价。如果这些任务首先进入TMT，产出可能准确解释技术机制，却低估对美股龙头、ADR、港股双重上市公司和亚洲AI硬件链的策略影响。

当提示涉及美股权益影响、ADR/HK传导或全球策略时，更合适的主负责人是 `offshore-strategist`。如果政策冲击主要体现为贸易、地缘政治或央行敏感性，`global-macro` 可以成为共同负责人。

### 3. 全球AI产业链研究被拆碎

AI产业链不是单一行业。它横跨美国云厂商、美国半导体设计商、台湾和韩国的代工及存储、日本设备与材料、中国互联网和云平台、港股硬件及软件映射、电力需求和数据中心基础设施。仅由TMT邮箱承接，能够捕捉技术部分，却容易遗漏跨市场节奏：谁主导周期、资本开支由哪里融资、哪个上市市场最先传导冲击、哪些政策制度约束估值。

这会削弱公司发布统一全球AI策略产品的能力。

### 4. 工作量指标失真

如果路由器把美国和全球AI事项推入 `tmt-analyst`，管理层可能误以为TMT需求自然过载，而港美股策略需求较轻。这会影响人员配置、邮箱阈值、SLA预期和对分析师覆盖缺口的判断。第2张卡片中**70%**误入TMT的数字已经足以扭曲运营指标。[C1]

### 5. 研究责任边界不清

客户感知到的不是“哪一个邮箱收到了任务”，而是“是否产生了正确的策略产品”。如果任务由TMT承接，但本质上需要港美股策略框架，就没有人明确负责把美股反应、ADR传导、HK Connect相关性和中国政策敏感性串联起来。多负责人任务需要主负责人加明确协作者，而不是单一关键词推导出的邮箱。

## 路由规则修正

我建议采用三层路由规则：

| 触发层 | 主负责人 | 必要协作者 |
| :--- | :--- | :--- |
| 美股科技巨头、Mag 7、ADR、港股双重上市、美股策略或港美股组合传导 | `offshore-strategist` | 涉及半导体/云/平台细节时加入 `tmt-analyst`；涉及模型或新兴科技趋势时加入 `thematic-researcher` |
| AI科学、基础模型、新兴科技采用、专利或技术扩散，且没有明确上市市场主线 | `thematic-researcher` | 根据应用领域加入 `tmt-analyst` 或对应行业分析师 |
| 半导体供给、云业务财报、互联网平台经济、消费电子、AI服务器需求 | `tmt-analyst` | 明确涉及美股/港股权益或ADR影响时加入 `offshore-strategist` |
| 美国AI监管、出口管制、对外投资、芯片制裁、跨境云限制 | 权益市场影响由 `offshore-strategist` 主导；地缘/贸易框架由 `global-macro` 主导 | 行业传导加入 `tmt-analyst`；只有任务是运营合规时才加入 `compliance-officer` |

这不是把一个垄断替换成另一个垄断。修正方向不是“所有AI都给港美股策略”，而是“当请求涉及美股/港股上市资产或美国政策传导时，市场地域和任务意图要高于通用AI关键词”。

## 运营测试

下一轮路由审计应对每条交接测试四个字段：

1. **实体字段：** 是否提到 NVIDIA、Microsoft、Mag 7、ADR、港股双重上市、美股上市、Nasdaq 或 HK Connect？
2. **任务意图字段：** 期望输出是权益策略、行业分析、政策分析、主题扫描、情绪扫描还是合规审查？
3. **地域字段：** 主市场是美国/香港/全球，而不是A股或本地中国吗？
4. **协作者字段：** 即使主路由清楚，是否仍需要第二位分析师？

一个实用阈值是：如果**4个字段中至少2个**指向港美股策略，则以 `offshore-strategist` 为主负责人；若其中1个字段指向TMT技术深度，则添加 `tmt-analyst` 为协作者，而不是改变主负责人。

## 交接建议

推荐下一位分析师：`global-macro`。

推荐下一步立场：`synthesize`。

理由：本卡片已经识别出路由系统中一个具体的政策风险脆弱点。下一个未回答的问题是，美国AI监管、出口管制和地缘科技限制应由港美股策略单独承接，还是需要形成 `offshore-strategist` 加 `global-macro` 的联合流程。`global-macro` 是 primary 分析师，覆盖美国/欧洲/日本经济、全球贸易和地缘风险，适合在进入最终路由设计前检验政策和宏观传导分支。

## 引用

[C1] `whiteboard/7fc7f4f4-a089-4a20-9a8d-164e985c7af4/card-02/report.en.md`，第2张卡片混淆矩阵和关键统计：80条样本、24条TMT正确路由、56条误分、70%误分率，以及12条美股科技/七巨头内容最佳匹配为 `offshore-strategist`。

[C2] `whiteboard/7fc7f4f4-a089-4a20-9a8d-164e985c7af4/card-02/meta.json`，第2张卡片交接理由：全球科技巨头和美国AI政策任务正在误入TMT，因此点名 `offshore-strategist`。

[C3] 会话提示快照中的 Analyst Catalog 和 Completed Cards 部分。该快照在第2张卡片交接和当前任务中引用 `offshore-strategist`，但提示中给出的可见名册没有显示 `offshore-strategist` 条目。

[C4] 2026-05-02 在 `/Users/daoming/.agent-route/workspaces/sessions/1d9b7287-ae0f-4209-9d61-5946478542c1` 的工作区核验：现场 `card-02` 文件存在；在本卡片写入文件前，`session-brief.md`、`analyst-catalog.json`、`card-01` 和 `card-03` 不存在。

## Follow-up

- Analyst: global-macro
- Topic: 美国AI监管与出口管制的路由归属：港美股策略与全球宏观是否需要联合工作流
- Question: 当交接涉及美国AI监管、出口管制、对外投资限制或地缘科技冲突时，哪些任务应由`offshore-strategist`主导，哪些应由`global-macro`主导，哪些应采用双负责人机制？
