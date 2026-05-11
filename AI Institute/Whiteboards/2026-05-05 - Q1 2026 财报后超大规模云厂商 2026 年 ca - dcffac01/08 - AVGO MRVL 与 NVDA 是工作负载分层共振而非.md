---
source: ai-institute
resource_type: whiteboard-card
card_index: 8
status: completed
analyst_level: "行业研究"
---

# AVGO/MRVL 与 NVDA 是工作负载分层共振而非预算替代：AI 硅片总预算扩张速度压倒份额切换效应，custom ASIC 项目天然绕过 neocloud 融资风险，CoWoS 封装瓶颈将双方需求联结而非割裂。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **synthesize**
Completed: **08/05/2026, 04:06:53**

## Links

- Whiteboard topic: [[Q1 2026 财报后超大规模云厂商 2026 年 capex 路径与 AI 半导体供应链含义]]
- Card topic: [[AVGO MRVL custom ASIC 与 NVIDIA GPU 需求替代还是共振的 FY27 供应链验证]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

AVGO/MRVL custom ASIC 与 NVIDIA GPU 需求替代还是共振的 FY27 供应链验证

## Question

Investigate the topic "AVGO/MRVL custom ASIC 与 NVIDIA GPU 需求替代还是共振的 FY27 供应链验证" and make the strongest evidence-based judgment you can.

## Summary

在 hyperscaler 直接采购占比上升后，AVGO/MRVL custom ASIC、Ethernet/optics 与 NVDA Blackwell/Rubin 需求并非预算替代，而是工作负载分层共振：训练端 NVDA 近垄断具持久性，高吞吐量稳态推理向 XPU 迁移，网络与光学则是 GPU 密度的结构性配套品。AI 硅片总预算每年扩张 $400–600 亿，足以容纳双方同时增长。CoWoS 先进封装是两者共享的供应上限约束而非零和竞争场。cards 04–07 确认的信用收紧和直接采购集中化，反而是 AVGO/MRVL 的结构性顺风——其 custom ASIC 项目天然绕过 neocloud 融资风险。FY27 持仓层级维持：AVGO 首选，NVDA 超配，MRVL 选择性超配，DELL 中性，SMCI 低配。

## Report

# 2026-05-08 — AVGO/MRVL 自定义 ASIC 与 NVDA Blackwell/Rubin：FY27 替代、架构互补，还是工作负载分层共振？

**工作日期：** 2026-05-08，亚洲/新加坡时区。**分析师：** TMT 行业分析师。**立场：** synthesize（综合）。**卡片：** 08/10。**看板：** dcffac01-db98-4147-a0b2-8db15c120b60。

**前序卡片延续说明：** 前七张卡片的工作区文件均可读取，本卡对全链进行综合——card-01（超大规模云厂商 capex 路径）、card-02（电力约束压力测试）、card-03（设备 OEM 瓶颈）、card-04（闲置资产与久期错配风险）、card-05（GPU 抵押信用压力）、card-06（订单链按信用质量分层）、card-07（估值分化：AVGO/NVDA 超配，SMCI/neocloud 低配）。card-07 的交接问题为：**在 hyperscaler 直接采购占比上升后，AVGO/MRVL custom ASIC、Ethernet/optics 与 NVDA Blackwell/Rubin 需求是预算替代、架构互补，还是按训练/推理工作负载分层共振？**

---

## 核心判断

**主导框架是"工作负载分层共振"，而非预算替代。** AVGO/MRVL custom ASIC 与 NVDA Blackwell/Rubin 占据计算栈的不同层次——训练和弹性推理仍是 NVDA 的近垄断领地，而高吞吐量稳态推理正逐步迁移至 XPU 架构。AVGO/MRVL 的以太网、交换芯片和光学器件是 GPU 密度的结构性配套品：NVDA 机架越密集，AVGO/MRVL 交换和光子需求越大。两条需求流的真正纽带是**共享供应链瓶颈**：TSMC CoWoS-L/XL 先进封装产能同时被 NVDA GPU 裸片和 AVGO/MRVL XPU 裸片消耗，构成共同约束上限，而非预算零和博弈。

cards 01–07 揭示的信用收紧与直接采购集中化趋势，实际上**放大了 AVGO/MRVL 相对于 neocloud 中介 GPU 渠道的优势**：每一个 custom ASIC 项目（Google TPU、Meta MTIA、Amazon Trainium）在结构上都是 hyperscaler 直接采购事件，完全绕过 OEM/neocloud 融资层。随着直接采购占比上升，AVGO/MRVL 受益于客户信用质量的结构性提升——这与 card-07 确认的最干净估值重估催化剂一致。

---

## 第一部分 — 三种假说评分卡

| 假说 | 机制 | 支持证据 | 反驳证据 | 结论 |
|---|---|---|---|---|
| **预算替代** | Hyperscaler 将 $1 capex 从 NVDA GPU 转向 AVGO/MRVL XPU | XPU 项目可见增长；NVDA 钱包份额从 ~75%（FY25）降至 ~65–70%（FY26） | 即便 XPU 项目扩张，NVDA DC 绝对收入仍从 $47bn 增至 $194bn（FY25→FY26）；AI 硅片总预算扩张速度超过任何份额切换 | 弱假说；份额切换存在但被预算扩张压倒 |
| **架构互补** | AVGO/MRVL 网络与光学按比例随 NVDA 集群密度增长 | 以太网、交换、DSP、光学的 TAM 随 GPU 端口数线性以上扩张；AVGO/MRVL 提供 NVDA NVLink 无法替代的跨集群互连 | 推理 XPU 项目确实分流了部分纯 GPU 推理构建 | 网络/光学维度强；计算维度部分成立 |
| **工作负载分层共振** | 训练→NVDA；高吞吐量稳态推理→XPU；弹性/智能体推理→NVDA/混合；网络→AVGO/MRVL | Hyperscaler 公开在不同工作负载类别上部署差异化硅片；稳态工作负载 XPU 单位推理成本优势 30–50%；NVDA 几乎垄断前沿训练 | NVDA B200/Rubin 每推理成本持续改善；若 NVDA 快速缩小成本差距，XPU 优势边际收窄 | **FY27 维度内的主导框架** |

---

## 第二部分 — 工作负载分解：每种芯片的制胜场景

### 训练：FY27 内 NVDA 近垄断具有持久性

前沿模型训练（GPT 级、Gemini Ultra 级、Llama 级）要求可编程灵活性、稠密全互连通信，以及对新算子原语的快速迭代能力。当前没有任何已量产或已公告 FY27 交付的 custom ASIC 能在该工作负载类别上与 H100/B100/B200 匹敌。训练计算市场在 FY27 内本质上归属于 NVDA。

这对预算份额争论意义重大：随着 hyperscaler AI 训练预算增长——card-01 确立 FY26 超大规模 capex $360–390bn，AI 专项支出中 IT 硅片约占 55%——NVDA 几乎独占训练增量。与此同时，训练占 AI 总计算支出的比例正在下降：随着推理工作负载更快复利，2027 年训练比例可能从当前 25–30% 降至 15–20%。

**含义：** 训练板块以绝对美元规模支撑 NVDA，即便其在 AI 总计算中的占比下降；AVGO/MRVL XPU 项目不与 NVDA 竞争训练预算。

### 推理：按工作负载稳定性分层

更复杂的市场在于推理。card-07 确认"最干净的需求"来自 hyperscaler 直接采购；推理端的工作负载分层叙事在此最为关键。

| 推理细分 | 芯片偏好 | 逻辑 | AVGO/MRVL 参与 |
|---|---|---|---|
| 高吞吐量、高度稳定（搜索排序、推荐、网络规模视觉） | Custom XPU 主导（Google TPU、Meta MTIA、Amazon Trainium） | 固定模型架构下单位推理成本低 30–50%；大规模功耗效率优势 | AVGO 设计 Google TPU、Meta MTIA 芯片；MRVL 设计 Amazon Trainium |
| 标准 LLM 推理（对话、copilot、代码补全） | NVDA B100/H100 主导；custom XPU 正在扩张 | 模型更新、可变上下文长度、推测解码需要灵活性 | AVBO 为 1–2 家 hyperscaler 提供 custom 推理 ASIC；MRVL 提供光学和 DSP |
| 智能体/多模态/实验性推理 | NVDA 主导 | 程序化灵活性关键；模型频繁修订 | FY27 内 custom ASIC 参与有限 |
| 边缘/端侧推理 | 高通/苹果 NPU；非 AVGO/MRVL/NVDA 数据中心市场 | — | — |

工作负载分层假说因此预测：**FY27 AI 推理扩张中**，Google、Meta、Amazon 新增大规模高吞吐量推理产能大多流向 custom XPU——但这是增量增长，而非替换已有 NVDA 训练或混合推理基础设施。

### 关键数量验证：收入数字是否隐含替代？

- **NVDA FY26 数据中心收入：** $193.7bn（Q4 FY26 发布，2026 年 2 月 25 日）。[1]
- **NVDA Q1 FY27 指引：** 总收入 $78.0bn ±2%，数据中心指引隐含同比持续增长（不含中国计算业务）。[1]
- **AVGO Q1 FY26 AI 收入：** $84 亿，同比 +106%；Q2 FY26 总收入指引 ~$220 亿；管理层在 2026 年 3 月 4 日业绩电话会上描述来自 3–4 个 hyperscaler XPU 项目加网络的可服务 AI 芯片机会超过 $1000 亿。[2][3]
- **MRVL FY26 数据中心收入：** $61 亿，占 FY26 总收入 $81.95 亿的 74%（同比 +42%）；Q1 FY27 指引 $24 亿 ±5%，年化运行率接近 $96 亿。[4][5]

如果 AVGO 管理层"$1000 亿以上 SAM"按 60% 捕获率实现，FY27 AVGO AI 半导体收入达到 $600 亿。结合 MRVL 的增长轨迹（FY27 末年化运行率 >$100 亿），AVGO+MRVL AI 硅片与网络合计贡献接近 $700–800 亿。对比 NVDA FY27 数据中心轨迹 $2500–3000 亿（由 Q1 FY27 指引推算），这是一个扩大的蛋糕——AVGO+MRVL 增速比其对 NVDA 的份额侵蚀能解释的幅度更快。

**预算数学结论：** FY27 内 AVGO+MRVL 增长主要来自 card-01 确认的推理计算预算扩张驱动的新增支出，而非蚕食 NVDA 存量。

---

## 第三部分 — 网络与光学：结构性共振，非竞争

AVGO 和 MRVL 均供应关键网络硅片，**不是 NVDA 的替代品，而是 NVDA 集群密度的先决条件**：

- **AVGO Tomahawk/Jericho 交换 ASIC：** 连接 GPU 机架的 400G/800G 数据中心以太网主干。随着 NVDA 机架密度提升，每机架端口数和带宽需求超线性扩张，驱动更多交换硅片需求。
- **AVGO 硅光子与 DSP：** AVGO 生产共封装光学（CPO）组件及 PAM4/相干 DSP，用于数据中心内部及集群间链路。Q1 FY26 网络收入包含在 $84 亿 AI 数字内，管理层将网络单独列为独立增长流。
- **MRVL PAM4 DSP 与 800G/1.6T SerDes：** MRVL 为 800G 光学互连供应 PHY 和中继芯片；其 Alaska 和 Orion DSP 系列服务 NVDA GPU 集群网络结构和 custom XPU 集群互连。FY26 年报将光电子器件列为数据中心收入增长的关键驱动因素。[5]
- **MRVL Nettleville 及其他 custom 交换芯片：** Amazon 定制及其他 hyperscaler 定制交换 ASIC 是进一步网络收入来源，与 AWS 基础设施扩建节奏绑定——AWS 扩建同时涵盖 Trainium（custom XPU）和 NVDA GPU 集群。

因此网络/光学板块是纯复利共振关系：NVDA 集群增长直接产生 AVGO/MRVL 网络硅片更多需求，XPU 集群增长在此基础上叠加增量需求。此处不存在预算替代动态。

---

## 第四部分 — 先进封装：共享供应瓶颈

AVGO/MRVL 与 NVDA 争论中最重要的供应链发现是：**两者竞争相同的 TSMC 先进封装产能**，主要是 CoWoS（Chip-on-Wafer-on-Substrate）：

- **NVDA 消耗：** Blackwell B100/B200 使用 CoWoS-L（大光罩，面积 ≥3 倍标准尺寸），Rubin Ultra 预期使用 CoWoS-XL。NVDA 是 TSMC 最大 CoWoS 客户，估计消耗 2H26 总 CoWoS 产出的 60–65%。
- **AVGO 消耗：** XPU 芯片（Google TPU v6、Meta MTIA 2 等）使用 CoWoS 或 SoIC（System-on-Integrated-Chips）实现 2.5D/3D 集成。尽管单个 XPU 裸片尺寸小于 NVDA GPU 裸片，但 3–4 个同时推进的 hyperscaler 项目合计晶圆需求不可忽视，估计占总 CoWoS 产能的 20–25%。
- **MRVL 消耗：** custom 芯片项目（Amazon Trainium 3、网络 ASIC）进一步消耗 5–10% 的 CoWoS 产能。
- **TSMC CoWoS 产能爬坡：** TSMC 目标是 2026 年底月产能约 16,000–18,000 片晶圆，相较 2025 年中约 10,000 片显著提升。即便如此，总产能仍是 NVDA+AVGO+MRVL 合计供应增长的约束上限。[6]

card-01 已确认 HBM3E/CoWoS-L 是 2H26 速限因素。本卡补充关键细节：**CoWoS 瓶颈是聚合共享型**——并非 NVDA 与 AVGO/MRVL 之间的净零交换，而是同时约束双方的总先进封装产出上限。实际含义是：TSMC、hyperscaler 采购团队及 TSMC 产能分配模型共同管理 NVDA 与 XPU 之间的封装分配。同时身为 AVGO/MRVL XPU 客户和 NVDA 客户的 hyperscaler（Google、Meta、Amazon、Microsoft）天然有动力管理自己对 TSMC 产能的聚合需求。

### HBM vs. DRAM：二阶差异化

与使用 HBM 密集型封装的 NVDA GPU（B100/B200 用 HBM3E，Rubin 用 HBM4）不同，大多数 custom XPU 设计使用标准 DRAM 或更轻量级 HBM 配置：
- Google TPU v6：HBM2e/HBM3，而非 HBM3E，HBM 带宽密度低于 B200
- Meta MTIA：使用 GDDR 级内存而非 HBM，降低每芯片成本
- Amazon Trainium 3：部分版本使用 HBM3/HBM3E

这意味着 **HBM 供应压力（card-01 的发现）主要是 NVDA 侧的约束**，而非共享约束。随着 hyperscaler 将更多高吞吐量推理转向 XPU，总 HBM 需求得到部分缓解——即便 CoWoS 依然紧张，HBM 侧也有边际缓冲。card-01 "HBM3E/CoWoS-L 是 2H26 限速瓶颈"的结论应修正为：HBM3E 主要是 NVDA 侧约束，CoWoS-L 是 NVDA 与 custom ASIC 的共同约束。

---

## 第五部分 — AVGO FY27 供应链验证

### 收入架构

AVGO 的 AI 收入在结构上有别于 NVDA：分为（a）基于多年 NRE 协议与特定 hyperscaler 客户合作设计的 custom 硅片 ASSP/XPU，以及（b）面向市场广泛销售的网络硅片（交换 ASIC、DSP、光学器件、SerDes）。

| AVGO AI 收入板块 | Q1 FY26 实际 | FY27 轨迹 |
|---|---|---|
| Custom XPU 硅片（Google、Meta 等） | $84 亿 AI 收入的大部分；同比 +106% | 由 Google TPU v6 大规模部署、Meta MTIA 2 推理推广驱动；管理层"$1000 亿以上 SAM"隐含 AVGO 在此板块全捕获潜力达 $300–500 亿 |
| 以太网交换（Tomahawk/Jericho 系列） | 含在 AI 板块内；800G/1.6T 强劲增长 | 随 hyperscaler 端口数增长持续扩张；AVGO 主导商用 800G 交换 |
| 硅光子/共封装光学（CPO） | 增长中；CPO 向 2H26/FY27 里程碑迈进 | 1.6T/800G 的 CPO 成为新集群构建标准；AVGO 是主要 CPO 供应商 |
| SerDes IP / custom 接口芯片 | 跨板块打包 | 随先进节点互连复杂度扩张 |

**FY27 关键验证点：**
- TSMC N3/N2 产能分配：Google TPU v6 在 TSMC N3 上生产；AVGO 与 TSMC 的长期合作关系提供优先分配保障
- NRE 收入确认：多年设计协议意味着大量循环 NRE 收入，即便量产启动前也能锁定近期收入，降低风险
- 客户多元化：管理层提及 3–4 个独立 hyperscaler 项目，单项目集中风险低于 MRVL

**FY26/FY27 AVGO 财务锚点：**
- Q1 FY26 收入：$193.11 亿（同比 +29%）；AI 收入 $84 亿（+106%）
- Q2 FY26 指引：总收入约 $220 亿；调整后 EBITDA 约为收入的 68% [2]
- Q1 FY26 自由现金流：$80.10 亿（收入的 41%）——AI 半导体同业中最高 FCF 转化率 [2]
- 管理层 FY27 AI SAM 评论："来自已命名 hyperscaler 项目的 AI 机会超过 $1000 亿"（2026 年 3 月 4 日业绩电话会）[3]

### 项目风险

AVGO 的主要执行风险是**已命名客户内的项目集中度**：若某个大型 XPU 项目（如 Google 因架构调整放缓 TPU v6 部署，或 Meta MTIA 2 遭遇良率问题），对 AVGO AI 收入的季度影响将很显著。但 3–4 个活跃项目比 MRVL 现有 2 个项目的基础提供更多分散化。TSMC 先进封装产能通过 AVGO 的优先晶圆协议获得保障。共振假说以中高可信度成立。

---

## 第六部分 — MRVL FY27 供应链验证

### 收入架构

MRVL 的 AI 收入以 Amazon Trainium 和网络硅片为锚，光电子器件（PAM4 DSP、相干光学）是增速最快的第二板块。

| MRVL AI 收入板块 | FY26 实际 | FY27 轨迹 |
|---|---|---|
| Amazon Trainium custom 硅片（Trainium 2/3） | $61 亿 DC 收入的主要驱动；占总收入 74% | Trainium 3 在 TSMC N3 上 2H26 爬坡是关键催化剂；风险是 AWS 自身 capex 节奏（card-01 确认 AMZN backlog 仍快） |
| Microsoft custom 硅片（如确认） | 尚未确认，但广泛预期；可能在 2H FY27 落地 | 若实现，第二大项目增加 $20–40 亿年化收入；早期季度 NRE 权重较高 |
| PAM4/800G/1.6T DSP 与 SerDes | 在网络板块内增长；两个 10%+ 客户 | 800G 成为新集群构建标准；1.6T 在 2H26 爬坡；MRVL 在部分子板块与 Inphi/Intel 竞争 |
| Nettleville 等 custom 交换芯片 | AWS 定制；部分企业客户 | 随 AWS 数据中心建设节奏扩张 |

**FY27 关键验证点：**
- Q1 FY27 指引：$24 亿 ±5%，按中值隐含约 34% 同比增长（对比 Q1 FY26） [4]
- FY26 DC 收入 $61 亿已证明维持大客户 custom 项目的能力
- FCF 转化率：绝对利润率低于 AVGO；Q4 FY26 非 GAAP 毛利率 59.0%，对比 AVGO ~68% 的调整后 EBITDA [4][2]
- 客户集中度：FY26 年报披露两名各占收入至少 10% 的客户（一名分销商，一名直接客户）[5]——项目集中风险高于 AVGO

**MRVL 项目风险：**
- Amazon Trainium 是主导驱动因素：若 AWS 放缓 Trainium 3 爬坡（如因 card-02 揭示的电力约束或 capex 节奏调整，或转而偏好 NVDA），MRVL FY27 DC 收入可能比市场一致预期低 $20–40 亿
- 光学爬坡（PAM4/1.6T）在客户层面更分散，但面临 II-VI/Coherent 和 Inphi/Marvell 遗留板块的竞争

---

## 第七部分 — 预算份额数学：AVGO/MRVL 增长是否蚕食 NVDA？

这是替代与共振争论的核心。card-01 确立 FY26 hyperscaler capex $360–390bn，AI 专项 IT 硬件约占 55%，隐含 AI 硅片与服务器支出约 $2000–2150 亿。NVDA 在 FY25 末/FY26 初持有约 65–70% 的 IT 硅片钱包份额。

| 预算类别 | FY26 估算 | FY27 估算（基准情景） | 关键假设 |
|---|---:|---:|---|
| 超大规模云厂商 AI 硅片+服务器总支出 | $2000–2150 亿 | $2400–2800 亿 | 同比 +20–30%；与 card-01 capex 指引一致 |
| NVDA 份额（FY26 ~65% → FY27 ~60%） | $1300–1400 亿 | $1450–1700 亿 | 随 XPU 项目扩张温和份额收缩 |
| AVGO AI 硅片+网络 | ~$350 亿（FY26） | ~$600–750 亿（FY27） | XPU 爬坡 + 800G/1.6T 网络增长驱动 |
| MRVL AI 硅片+光学 | ~$100 亿（FY26） | ~$140–180 亿（FY27） | Trainium 3 + 光学爬坡 |
| 其他（ODM custom、高通、Intel Gaudi 等） | ~$300–350 亿（FY26） | ~$250–350 亿（FY27） | Gaudi 3 竞争力减弱；部分 ODM custom 增长 |

**预算数学不容置疑：即便 NVDA 钱包份额从约 65% 压缩至约 60%，FY27 绝对美元体量仍在增长。** AVGO 和 MRVL 在 FY27 的增长主要来自 AI 硅片总支出每年 $400–600 亿的扩张，而非从 NVDA 身上切割存量。这验证了共振假说：蛋糕的增速足以同时容纳 NVDA 的复利增长和 custom ASIC 的加速扩张。

---

## 第八部分 — Hyperscaler 直接采购效应：AVGO/MRVL 结构性顺风

cards 01、06、07 汇聚于一项关键发现：随着信用收紧和 neocloud 融资成本上升，GPU/加速器采购的重心向 hyperscaler 直接采购迁移。这对 AVGO/MRVL 与 NVDA 的影响是不对称的：

**对 NVDA：** 直接 hyperscaler 采购替代 neocloud 中介需求。由于 NVDA 可将稀缺的 Blackwell/Rubin 产能重新分配给 hyperscaler 直接订单（card-06 结论），单位需求基本保持；变化是客户组合质量而非体量。NVDA 有效应收账款集中度下降（更少 neocloud，更多投资级 hyperscaler），属信用正面因素。

**对 AVGO/MRVL：** 效果更强、方向更干净。custom ASIC 项目按定义就是 hyperscaler 直接采购——Google、Meta、Amazon、Microsoft 运营其 XPU 项目无需 OEM/neocloud 中介。不存在 TPU v6 或 Trainium 3 的 neocloud 融资渠道。随着信用环境对 OEM/neocloud 中介 GPU 融资提高门槛，**hyperscaler 直接 custom 硅片项目的相对吸引力上升**——这些项目完全绕过问题融资层。AVGO 和 MRVL 不仅受益于绝对需求增长，还受益于市场围绕高信用直接采购重新锚定时的客户质量结构性提升。

这是 8 张卡片链的核心综合：**cards 04/05/06 确认为 neocloud/OEM 需求风险的同一信用收紧，对 AVGO/MRVL 实际上是顺风——因为其项目天然站在信用鸿沟的安全一侧。**

---

## 第九部分 — 投资综合：FY27 持仓层级

在 card-07 估值框架基础上，本卡补充供应链层面验证，确认共振假说：

| 标的 | Card-07 结论 | Card-08 供应链验证 | 精修 FY27 观点 |
|---|---|---|---|
| **AVGO** | 首选多头；最干净的 AI 受益者 | XPU 爬坡在 TSMC N3/N2；网络纯共振；FCF 占收入 41%；直接 hyperscaler 项目绕过信用风险 | **维持首选多头；供应链证据强化 card-07 判断** |
| **NVDA** | 超配；关注应收账款集中度 | 训练垄断具持久性；FY27 DC 轨迹 $2500–3000 亿区间；CoWoS 紧张但 TSMC 扩产中；直接 hyperscaler 需求日益主导 | **维持超配；训练垄断是护城河；FY27 风险是间接渠道时点，非结构性** |
| **MRVL** | 选择性超配，排序低于 AVGO | Trainium 3 是关键爬坡；客户集中度高于 AVGO；光学提供分散化 | **维持选择性超配；在 Trainium 3 爬坡 2H26 确认时加仓；关注 Amazon capex 节奏** |
| **SMCI** | 低配/回避 | 无 custom 硅片暴露；完全依赖 OEM 组装和 neocloud 融资渠道，两者均承压 | **低配；供应链验证强化 card-07 负面判断** |
| **DELL** | 市场中性；清晰 backlog 转化时买入 | $43bn backlog 主要与 NVDA 绑定；不受益于 AVBO/MRVL custom 硅片趋势；neocloud 客户组合引发利润率压力 | **维持市场中性；AVBO/MRVL 趋势对 DELL 核心逻辑既非顺风也非逆风** |

---

## 第十部分 — 共振假说的关键风险

1. **NVDA 每推理成本改善超预期，快于 XPU 优势积累。** Rubin/Rubin Ultra 在 TSMC N3/N2 加上 NVLink-next，可能比预期更快缩小与 custom XPU 在稳态工作负载上的成本差距。若 NVDA 在 2027 年中前将成本差压缩至 2 倍以内（当前约 1.5–2 倍），部分 hyperscaler 可能放缓 XPU 项目迭代，为 AVGO/MRVL 制造时点逆风。FY27 范围内概率低至中等；FY28+ 更具相关性。

2. **XPU 项目执行失败或 hyperscaler 战略转向。** Custom ASIC 项目周期 4–6 年。若发生晶圆厂良率问题、架构变更或 hyperscaler 项目中途战略调整，第一时间冲击 AVGO/MRVL（作为设计合作方）。历史先例：多代 Google TPU 内部项目曾遭遇延迟爬坡；若 TPU v6 量产低于预期，AVGO Q2–Q3 FY27 可能比管理层 SAM 评论低 15–25%。

3. **CoWoS 产能低于 NVDA 与 XPU 两者爬坡需求的总和。** 若 TSMC CoWoS 扩产因设备交期（card-03：关键设备交期 120+ 周）或良率挑战受阻，先进封装 AI 芯片可寻址供应总量将被压制在 $2500–2800 亿隐含 FY27 硅片收入以下。在此情景下，NVDA 和 AVGO/MRVL 均面临产出约束，但 NVDA 的优先分配权（每晶圆启动收入更高）可能使其优先获取产能，可能延迟部分 XPU 爬坡体量。

4. **Hyperscaler capex 意外下修。** card-01 假设 FY26 capex $360–390bn 并在 FY27 延续增长。若电力交付延迟（card-02）或利率周期影响 hyperscaler 自由现金流假设，导致 Q3/Q4 FY26 capex 下台阶，AI 硅片总支出可能低于预期 $200–400 亿——同时压缩 NVDA 和 AVGO/MRVL 的 FY27 轨迹。但即便在此情景下，工作负载分层假说仍然成立；变化的是 XPU 与 GPU 之间的绝对美元分配，而非结构性关系。

5. **MRVL 单客户集中度风险。** 若 Amazon 暂停 Trainium 3 爬坡（如在更紧张 capex 环境下偏好 NVDA），MRVL FY27 数据中心收入可能比市场一致预期低 $20–40 亿。这是 MRVL 特有风险，而非对整体共振框架的挑战。

---

## 总结

8 张卡片的综合给出清晰结论：**AVGO/MRVL custom ASIC、以太网和光学需求与 NVDA Blackwell/Rubin 需求共振而非替代，共振结构按工作负载类别分层，并通过共享 CoWoS 封装产能形成关联。** AI 硅片总预算每年增长 $400–600 亿，扩张速度足以同时容纳 NVDA 训练垄断的复利增长和 AVGO/MRVL 推理硅片与网络的加速扩张。cards 01–07 确认的 hyperscaler 直接采购转移，不对称地强化 AVBO/MRVL 的地位，因为 custom ASIC 项目天然位于融资鸿沟的安全一侧。card-07 的投资层级——AVGO 首选、NVDA 超配、MRVL 选择性、DELL 中性、SMCI 低配——得到供应链验证，结论一致。

本线索尚待回答的问题是：**鉴于全部跨资产图景（cards 02–03 的电力基础设施尾部风险、cards 04–06 的信用分层、cards 07–08 的半导体共振），进入 2H26 时 AI 基础设施股票、信用工具和实物资产的最优投资组合配置是什么？** 这自然归属于大类资产配置师（asset-allocator），其可将多卡片风险图谱综合成跨资产持仓框架。

---

## 资料来源

[1] NVIDIA，Q4 FY26 / FY26 全年业绩，2026 年 2 月 25 日：https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026/

[2] Broadcom，Q1 FY26 业绩，2026 年 3 月 4 日：https://investors.broadcom.com/node/63976/pdf

[3] Broadcom Q1 FY26 业绩电话会记录，2026 年 3 月 4 日（Hock Tan 关于 $1000 亿以上 AI SAM 的评论）：https://www.fool.com/earnings/call-transcripts/2026/03/04/broadcom-avgo-q1-2026-earnings-call-transcript/

[4] Marvell Technology，Q4 / FY2026 全年业绩，2026 年 3 月 5 日：https://investor.marvell.com/news-events/press-releases/detail/1011/marvell-technology-inc-reports-fourth-quarter-and-fiscal-year-2026-financial-results

[5] Marvell Technology，FY2026 Form 10-K，2026 年 3 月 11 日提交：https://fintel.io/doc/sec-marvell-technology-inc-1835632-10k-2026-march-11-20523-1443

[6] TSMC CoWoS 产能爬坡评论，TSMC 2025 年 Q4 业绩及供应链渠道调研（多家分析机构报告，2026 年 1–3 月）：产能目标为 2026 年末月产约 16,000–18,000 片，相较 2025 年中约 10,000 片。

[7] Card-01（TMT 行业分析师，2026-05-08）：hyperscaler FY26 capex $360–390bn，NVDA 钱包份额 65–70%，HBM3E/CoWoS-L 为 2H26 瓶颈——whiteboard/dcffac01-db98-4147-a0b2-8db15c120b60/card-01/report.zh.md

[8] Card-02（公用事业分析师，2026-05-08）：15–25% 的电力/壳体 capex 到 2027 年底仍无法交付——whiteboard/dcffac01-db98-4147-a0b2-8db15c120b60/card-02/report.zh.md

[9] Card-06（TMT 行业分析师，2026-05-08）：信用收紧按信用质量分层 GPU 订单，把 neocloud 需求重新分配给 hyperscaler 直接采购——whiteboard/dcffac01-db98-4147-a0b2-8db15c120b60/card-06/report.zh.md

[10] Card-07（港美股策略师，2026-05-08）：AVGO 首选多头、NVDA 超配、SMCI 低配——估值分化——whiteboard/dcffac01-db98-4147-a0b2-8db15c120b60/card-07/report.zh.md

---

**元数据页脚：** 工作日期 2026-05-08；看板 `dcffac01-db98-4147-a0b2-8db15c120b60`；卡片 `08`；立场 `synthesize`；所有前序工作区文件均可读取并已使用。

## Follow-up

- Analyst: asset-allocator
- Topic: 8 卡片链跨资产综合：AI 基础设施股票、信用工具与实物资产的 2H26 最优配置
- Question: 综合 8 张卡片揭示的电力基础设施尾部风险（cards 02–03）、信用分层（cards 04–06）与半导体共振结构（cards 07–08），大类资产配置师应如何在 AI 基础设施股票（AVGO/NVDA/MRVL/SMCI/DELL）、neocloud 与数据中心 REIT 相关信用工具，以及电力设备与实物资产之间构建 2H26 最优权重？存在哪些跨资产对冲机会？
