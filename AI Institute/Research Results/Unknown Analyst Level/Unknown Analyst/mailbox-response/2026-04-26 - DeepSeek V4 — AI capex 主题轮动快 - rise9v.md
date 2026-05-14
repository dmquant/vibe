---
source: ai-institute
resource_type: research-result
report_kind: mailbox-response
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# DeepSeek V4 — AI capex 主题轮动快速重估

Kind: **mailbox-response**
Analyst: **(unknown)**

## Links

- Report type: [[mailbox-response]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# DeepSeek V4 — AI capex 主题轮动快速重估

**收件人：Chief Strategist（首席策略师）**  
**角色：Thematic Researcher（主题研究员）**  
**日期：2026-04-27（亚洲开盘前）**  

## 一句话结论

DeepSeek V4 的核心影响不是“AI capex 消失”，而是 AI capex 的叙事从“更大规模训练 GPU 集群”进一步轮动到“低成本推理、国产算力适配、边缘/应用扩散、液冷与电力配套”。短期相对受益的是中国推理芯片国产替代、云厂商与互联网应用层、Agent/办公/开发者工具、以及高密度推理带来的 IDC 制冷/供配电链；相对承压的是“高端训练 GPU 线性外推”的估值逻辑，尤其是中国市场相关的外资 GPU 暴露。

## 事件与证据

| 维度 | 已观察事实 | 投资含义 |
|---|---:|---|
| 模型发布 | DeepSeek 于 2026-04-24 发布并开源 V4 系列预览，包含 V4-Pro 与 V4-Flash | 开源前沿模型继续压低模型层稀缺性溢价，提升应用层与推理基础设施弹性 |
| 模型规格 | API 文档显示 `deepseek-v4-flash`、`deepseek-v4-pro` 均支持 1M context、最高 384K output | 长上下文 Agent 工作流更可用，推理侧 token 需求弹性可能上修 |
| 定价 | V4-Flash cache miss input/output 为 $0.14/$0.28 per 1M tokens；V4-Pro 为 $1.74/$3.48 per 1M tokens；cache hit 更低 | API 价格下探将刺激调用量，利好“用量型”云/应用/推理芯片，压制闭源模型 API 溢价 |
| 架构 | Hugging Face 资料显示 V4-Pro 为 1.6T total / 49B active，V4-Flash 为 284B total / 13B active | MoE + 低 active 参数强化“高效推理”叙事，边缘/专用推理硬件更有估值抓手 |
| 国产硬件 | 多家媒体报道 V4 与 Huawei Ascend/CANN 生态适配，Ascend SuperNode 产品线支持推理部署 | 中国 AI capex 更可能向国产 NPU/ASIC、软件栈、服务器整机与液冷迁移 |
| 生态资本 | Reuters 转述 The Information：Tencent 与 Alibaba 洽谈投资 DeepSeek，估值超过 $20 billion | 中国互联网龙头从“自研模型竞争”转向“模型能力外部化 + 应用/云分发”组合策略 |

## 1) 受益板块与标的方向

| 板块 | 相对受益逻辑 | 关注标的/映射 | 关键判断 |
|---|---|---|---|
| 国产推理芯片 / NPU / ASIC | V4 若在 Ascend/CANN 等国产栈上跑通，国产推理芯片从“政策替代”转为“前沿模型可用性验证” | Huawei Ascend（未上市）、Cambricon `688256.CN`、Hygon `688041.CN`、Baidu Kunlunxin（未上市） | 短期弹性最大，但需验证交付量、良率、软件兼容与真实 TCO |
| AI 服务器与国产软件栈 | 开源模型降低模型层门槛，企业更愿意私有化部署，带动服务器、互联、推理框架、CANN/vLLM/SGLang 适配需求 | Inspur 信息、工业富联、紫光股份、中科曙光等链条 | 受益前提是推理集群订单能落地，不只是主题交易 |
| 边缘部署 / 端侧 AI | V4-Flash 低 active 参数与低价推理强化“模型下沉”预期，利好端侧 SoC、AI PC、智能终端、IoT | Rockchip `603893.CN`、Allwinner `300458.CN`、Horizon Robotics `9660.HK` 等 | 端侧需要进一步蒸馏/量化，节奏慢于云端推理 |
| 云与 IDC | 低价模型刺激 token 调用量，训练 capex 占比下降但推理集群、存储、带宽、电力需求上升 | Alibaba Cloud / `BABA` / `9988.HK`、Tencent Cloud / `0700.HK`、Baidu AI Cloud / `BIDU` / `9888.HK`、Kingsoft Cloud `KC` / `3896.HK`、GDS `9698.HK`、VNET | 云厂商受益于“量”，但 API 价格战会压缩单 token 毛利 |
| 液冷 / 供配电 / 数据中心能耗管理 | 推理高并发与长上下文部署仍需要高密度机柜，液冷、CDU、冷板、UPS、变压器和电力管理需求延续 | 英维克、申菱环境、高澜股份、科华数据、Vertiv `VRT`、Schneider 等 | 不是“训练减少即制冷减少”；高利用率推理集群同样提高热密度 |
| 应用层 / Agent / 办公与开发者工具 | 开源前沿模型成熟使应用公司不必完全承担基础模型训练成本，产品迭代速度提升 | Kingsoft Office `688111.CN` / `3888.HK`、iFlytek `002230.CN`、Meitu `1357.HK`、BABA、Tencent、BIDU、NetEase `9999.HK` | 最大变量是付费转化，不是 demo 数量 |

## 2) 承压板块：训练 GPU 与 ASIC vs GPU

### 高性能 GPU 训练芯片需求是否下修？

需要**小幅下修中国相关的边际训练 GPU 需求曲线斜率**，但不应下修全球 AI 算力总需求。理由：

| 判断 | 解释 |
|---|---|
| 中国市场外资高端 GPU 叙事承压 | V4 强化“国产推理栈可用”与“模型效率提升”叙事，且出口管制本已限制 Nvidia/AMD 高端 GPU 在中国的可得性 |
| 训练需求不是消失 | 前沿模型迭代仍需要大规模训练，DeepSeek 自身也仍可能受训练算力约束；V4 更像是提升单位算力产出，而非否定算力需求 |
| capex 结构从训练向推理倾斜 | 开源低价模型提高调用量，新增 capex 更可能落在推理集群、网络、存储、能耗管理和应用部署 |
| 海外 GPU 龙头短期不应线性看空 | 美国 hyperscaler 的训练/推理 capex、Blackwell/Rubin 节奏、主权 AI 与企业 AI 仍是独立需求来源；V4 对中国暴露更敏感 |

### ASIC vs GPU 中长期份额预期

| 时间维度 | GPU | ASIC / NPU |
|---|---|---|
| 未来 6-12 个月 | 仍是训练、研究迭代、多模型开发的主力；海外需求韧性强 | 中国推理、政策替代、稳定批量 workload 中份额提升 |
| 未来 2-3 年 | 在 frontier training 和高灵活性推理中保留核心份额 | 在高并发推理、低成本 token、端侧/边缘、云厂商自用芯片中份额上修 |
| 核心分歧 | 是否出现“训练 scaling law 放缓 + 推理需求爆发”的组合 | 软件生态是否足够成熟，能否降低迁移成本并提供稳定供货 |

**结论：** ASIC/NPU 的份额预期应上修，尤其在中国推理和边缘部署；GPU 不会被线性替代，但估值叙事需要从“所有 AI capex 都是高端训练 GPU”修正为“训练 GPU + 推理 ASIC/NPU + 电力/制冷 + 应用变现”的组合。

## 3) 中国互联网与 AI 应用：BABA / 0700.HK / BIDU / 9999.HK

| 公司 | 相对受益逻辑 | 风险 / 约束 | 相对排序 |
|---|---|---|---|
| `BABA` / `9988.HK` | Alibaba Cloud、Qwen 生态、电商/商家工具、企业客户基础最直接受益；若参与 DeepSeek 投资，可获得外部模型能力与生态卡位 | 云价格战会压低单位毛利；Qwen 与 DeepSeek 的定位需避免内部竞争 | 高 |
| `0700.HK` | WeChat、广告、游戏、内容与企业服务具备最大应用分发场景；Hunyuan + DeepSeek 外部能力可降低基础模型投入压力 | 变现节奏取决于微信生态内 Agent 产品形态；监管和内容安全成本上升 | 高 |
| `BIDU` / `9888.HK` | ERNIE、搜索、广告、Apollo、Baidu AI Cloud 可把低成本模型能力转化为搜索/营销/企业智能体 | 自研闭源模型护城河被开源 V4 稀释；市场可能更关注其是否能在应用层证明 ROI | 中高，但分歧较大 |
| `9999.HK` | 游戏、音乐、教育、内容生产可受益于低成本生成式 AI；模型成本下降提升内容和客服自动化 ROI | 不是核心云基础设施玩家，主题弹性弱于 BABA/Tencent/BIDU | 中 |

**互联网龙头总体判断：** V4 对中国互联网是“模型成本下降 + 应用速度上升”的正面事件，但对自研基础模型的估值溢价是负面事件。市场更可能奖励拥有分发、云资源、数据闭环和付费场景的公司，而不是单纯拥有一个模型的公司。

## 4) 本周可观察的资金 / 价格信号

观察窗口建议设为 **2026-04-27 至 2026-05-01**。A/H 股需注意 2026-05-01 劳动节假期安排，实际交易窗口可能缩短。

| 信号 | 如何验证 | 支持本判断的表现 | 证伪信号 |
|---|---|---|---|
| 信号 1：国产 AI 芯片与推理链相对强弱 | 跟踪 `688256.CN`、`688041.CN`、Huawei Ascend 服务器/液冷链、A 股半导体 ETF 相对 `NVDA`、`AMD`、`SMH`、恒生科技指数 | 国产推理链放量上涨，且强于泛科技指数；液冷/供配电同步走强 | 仅模型/软件股上涨，硬件与液冷不跟；或 GPU 龙头大幅跑赢国产替代链 |
| 信号 2：港股互联网南向与 ADR 表现 | 跟踪 `9988.HK`、`0700.HK`、`9888.HK`、`9999.HK` 南向净买入、成交占比、ADR 溢价/折价变化 | BABA/Tencent/BIDU 成交放大并跑赢恒生科技，说明市场认可“模型成本下降利好应用/云” | 互联网龙头下跌或跑输，说明市场更担忧价格战和自研模型护城河下降 |
| 信号 3：推理价格与开发者采用 | 跟踪 DeepSeek API 排队/限流、价格是否调整、Hugging Face downloads/likes、OpenRouter/云平台接入、企业 Agent 框架默认模型变化 | V4-Flash/V4-Pro 接入速度快、价格稳定或继续下探，开发者采用扩散 | API 不稳定、价格上调、部署困难或 benchmark 口碑弱，低成本推理叙事降温 |

## 下周可执行关注清单

1. **建立三组相对收益篮子：**  
   - 国产推理芯片/服务器/液冷：`688256.CN`、`688041.CN`、Huawei Ascend 链、液冷与供配电标的。  
   - 中国互联网 AI 应用：`BABA` / `9988.HK`、`0700.HK`、`BIDU` / `9888.HK`、`9999.HK`、`KC` / `3896.HK`。  
   - 全球训练 GPU：`NVDA`、`AMD`、`AVGO`、`TSM`、`SMH`。
2. **每日收盘后做 3 个相对强弱检查：** 国产推理链 vs 恒生科技；BABA/Tencent/BIDU vs 恒生科技；NVDA/SMH vs Nasdaq 100。
3. **跟踪 DeepSeek V4 的真实可用性：** API 延迟、限流、价格、上下文缓存命中成本、开发者反馈、Hugging Face 下载与派生模型数量。
4. **核查云厂商动作：** Alibaba Cloud、Tencent Cloud、Baidu AI Cloud 是否上线 V4 托管/兼容服务，是否发布推理实例价格或 Ascend/CANN 方案。
5. **检查订单线索：** 国产 AI 服务器、液冷 CDU/冷板、IDC 供配电是否出现中标、扩产、排产或渠道涨价。
6. **风险监控：** 若 V4 benchmark 被证伪、API 大面积不稳定、或监管/数据安全问题升级，则应用层与国产推理链的估值扩张需要降温。

## 仍待确认的问题

| 问题 | 为什么重要 |
|---|---|
| V4 训练阶段使用的具体芯片构成 | 决定“国产训练替代”是否成立；目前更有把握的是国产推理适配叙事 |
| Ascend/CANN 上的真实吞吐、延迟、稳定性和 TCO | 这是国产推理芯片估值能否从主题交易变成订单交易的关键 |
| BABA/Tencent 投资 DeepSeek 是否落地 | 若落地，将强化互联网龙头“外部模型能力 + 自有分发”的组合逻辑 |
| API 低价是否可持续 | 若低价依赖补贴或供给紧张，云和应用层的利润弹性会弱于收入弹性 |

## 资料来源

- AP，2026-04-24：DeepSeek 发布 V4 预览，包含 Pro 与 Flash 版本，并强调知识、推理与 agentic capabilities 改进。https://apnews.com/article/d2ed33f2521917193616e061674d5f92  
- DeepSeek API Docs：V4-Pro/V4-Flash 模型名称、1M context、384K max output 与 API 定价。https://api-docs.deepseek.com/quick_start/pricing  
- Hugging Face Blog，2026-04-24：V4-Pro / V4-Flash 参数规模、active 参数与长上下文架构说明。https://huggingface.co/blog/deepseekv4  
- Hugging Face DeepSeek-V4 Collection：V4 模型集合与模型卡更新。https://huggingface.co/collections/deepseek-ai/deepseek-v4  
- Xinhua，2026-04-24：DeepSeek V4 开源，并给出中国 token calls 从 2024 年初 100 billion/day 增至 2026 年 3 月 140 trillion/day 的背景数据。https://english.news.cn/20260424/c3a0d88701b7484e8065b6fec55b5a7a/c.html  
- TechRepublic，2026-04-24：V4 与 Huawei Ascend / CANN 适配及推理支持报道。https://www.techrepublic.com/article/news-apac-deepseek-v4-ai-model-huawei-ascend-chips-support/  
- Reuters 转述 The Information，2026-04-22：Tencent 与 Alibaba 洽谈投资 DeepSeek，估值超过 $20 billion。https://www.thestar.com.my/tech/tech-news/2026/04/22/tencent-alibaba-in-talks-to-invest-in-deepseek-at-over-20-billion-valuation
