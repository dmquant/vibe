---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "行业研究"
---

# hyperscaler AI 负荷以 firm 为主，non-firm 灵活性窗口只有 15-25%，PJM 灵活电价带来的节省被高估约 4-6 倍，真正的投资倾斜应回到 firm 可调度供给侧。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **stress-test**
Completed: **04/05/2026, 14:21:06**

## Links

- Whiteboard topic: [[美国 AI 数据中心负荷增长与公用事业电网灵活性]]
- Card topic: [[hyperscaler AI 负荷以 firm 为主，non-firm 灵活性窗口只有 15-25 ，PJM 灵活电价带来的节省被高估约 4-6 倍，真正的投资倾斜应回到 firm 可调度供给侧。]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

hyperscaler AI 负荷以 firm 为主，non-firm 灵活性窗口只有 15-25%，PJM 灵活电价带来的节省被高估约 4-6 倍，真正的投资倾斜应回到 firm 可调度供给侧。

## Question

Investigate the topic "hyperscaler AI 负荷以 firm 为主，non-firm 灵活性窗口只有 15-25%，PJM 灵活电价带来的节省被高估约 4-6 倍，真正的投资倾斜应回到 firm 可调度供给侧。" and make the strongest evidence-based judgment you can.

## Summary

对 Card-01 援引的 Johns Hopkins $15-16 B 节省进行压力测试。拆解 hyperscaler AI 负荷构成：在线 inference 占 45-55% 且持续上升、基础模型训练 25-35%、fine-tuning/RLHF/eval 5-10%、内部批处理 10-15%、附属负荷 10-15%。真正可 non-firm 的窗口仅 15-25%，对应 PJM 年节省约 $2-4 B 而非 $15-16 B。Microsoft 三里岛、Amazon-Talen、Meta-Clinton、Google-Kairos 全部签的是 firm 长期 PPA；xAI Colossus 则用 35 台自备燃气轮机绕过电网，是 hyperscaler 选择 firm 的'用脚投票'。结论：75-85% 新增 AI 负荷仍为 firm，投资侧重应转向核电（CEG/VST/TLN）、燃气轮机（GEV）、输电（PWR/ETN），而非纯 flex-tariff。

## Report

# Hyperscaler 的 AI 负荷以 firm 为主：non-firm 灵活性被高估

**选定分析师：** tmt-analyst
**立场：** stress-test（对 Johns Hopkins / utilities-analyst 的 non-firm 框架进行压力测试）
**研究问题：** hyperscaler 的 AI 工作负载真的能够提供 PJM 电网成本情景中假设的 non-firm 灵活性，还是 latency、模型训练排期与客户 SLA 会迫使大部分数据中心负荷保持 firm？

## 核心判断

Johns Hopkins 在 PJM 模型中给出年节省 $15-16 B 的关键假设是：数据中心负荷可被全面按 "full non-firm" 处理。[^1] 但是，从 AWS、Microsoft Azure、Google Cloud、Meta、Oracle 以及 CoreWeave、Lambda、Crusoe 等 GPU 云的实际工作负载结构，以及 hyperscaler 实际签订的电力合同看，我的判断是：**2026-2030 年新增 AI 负荷中，真正属于 non-firm 的部分大约只有 10-20%**。延迟敏感的 inference、企业级 SLA、同步训练的经济性，再加上 hyperscaler 大量签署 firm 24/7 核电 PPA 的"用脚投票"，都指向同一个方向——负荷以 firm 为主。Card-01 的公用事业结论需要修正：投资侧重应回到 **firm 可调度供给**（核电、燃气调峰、输电、自备燃气），而灵活电价层只是较小的辅助。

## 拆解 hyperscaler AI 负荷构成

要判断灵活性，必须先拆解真正消耗兆瓦的工作负载块。

| 工作负载类别 | 占新增 AI MW 比例（约） | 灵活性属性 | 原因 |
| --- | ---: | --- | --- |
| 在线 inference（ChatGPT、Copilot、Gemini、Meta AI、Bedrock 上的 Claude、广告/搜索排序） | 45-55%，且占比仍在上升 | **Firm。** 亚秒级 latency，99.9-99.99% SLA。 | 直接面向用户；Jensen Huang 在 GTC 2025 反复表态 inference 算力将超过 training。[^2] |
| 基础模型预训练（GPT 级、Gemini、Llama、Claude、DeepSeek 后续版本） | 25-35% | **名义上灵活，实际接近 firm。** | 30K-100K GPU 集群同步 all-reduce；checkpoint 暂停-恢复损耗 5-10% 利用率。按内部成本约 $3-4/H100 小时或 $8-12/Blackwell 小时计，10 万张 GPU 集群闲置 1 小时损失 $300K-$1M，远高于任何省下的电费。[^3] |
| Fine-tuning、RLHF、合成数据生成、eval | 5-10% | **真正可延迟数小时到数天。** | 集群规模较小，可重启，没有发布日历压力。 |
| 内部批处理（搜索索引重建、广告模型再训练、推荐系统） | 10-15% | **可调度但不可实时切断。** | 已经放在低谷时段运行，对电网而言没有多少额外灵活性。 |
| 存储、网络、冷却附属负荷 | 占设施负荷 ~10-15% | **Firm。** | 不可压缩；AI 机柜冷却热惯性只有几分钟。 |

把真正可灵活调度的桶加总，大约 15-25% 的设施负荷可以在宽松假设下接受切除、调度迁移或 non-firm 接入条款。Johns Hopkins 的 "full non-firm" 情景把整个数据中心几乎全部当作可灵活，与实际工作负载结构存在根本错配。

## hyperscaler 实际买的是什么

显示性偏好（revealed preference）是最干净的数据。2024-2025 年间，hyperscaler 的电力合同绝大多数是 **firm、基荷、长期**：

- **Microsoft - Constellation 三里岛 1 号机组重启：** 20 年 PPA 锁定 835 MW firm 核电，目标 2028 年重启；据报价格远高于商业基荷电价（约 $110-115/MWh）。[^4]
- **Amazon - Talen / Susquehanna 核电厂园区：** 最高 960 MW behind-the-meter firm 核电；2024-2025 年 FERC 审查使得 AWS 想要 firm capacity 而非可中断服务的意图非常清楚。[^5]
- **Meta - Constellation Clinton 核电：** 2025 年 6 月宣布 20 年 firm PPA，使该 Illinois 电厂运行至 2027 年以后。[^6]
- **Google - Kairos Power 小堆订单：** 至 2035 年最高 500 MW SMR 容量，加上 Google 与 TVA 的 Hermes-2 购电协议——均为 firm 基荷结构。[^7]
- **xAI Colossus（Memphis）：** 2024-2025 年自建约 35 台天然气燃气轮机，原因是 MLGW 电网无法按 xAI 要求的时间表交付 firm 容量——这是 hyperscaler **宁选 firm 燃气绕过电网，也不愿等待电网灵活性方案**的最清晰案例。[^8]
- **Stargate（OpenAI / Oracle / SoftBank，Texas）：** 4 年内最高 $500 B，Abilene 园区设计围绕 firm power，自备燃气作为过渡供应。[^9]

这里没有一个是 non-firm 可中断电价。如果 hyperscaler 真心相信自己的 AI 负荷能承受 Johns Hopkins 假设的每年 9.7 M MWh 切除，他们就不会为 20 年 firm 核电支付溢价、也不会自建燃气电厂。

## 工作负载经济学为何偏向 firm

三股结构性力量把新增 AI 负荷推向 firm：

1. **GPU capex 远高于电力 opex。** 一台 Blackwell GB200 NVL72 机柜定价约 $3-4 M、功率约 120 kW；按 4-5 年折旧，每 MWh 输出对应的 GPU 资本成本是批发电价的数倍。为省 $30-80/MWh 电费而切除一台 $3 M 资产，除非 non-firm 电价补偿能覆盖损失的算力收入（事实上做不到），否则就是价值毁灭。[^3]
2. **Inference 占比持续上升。** 当前沿模型（Claude、GPT 级、Gemini、DeepSeek-V4 级）走向 agentic、多步、长上下文使用时，inference token 量增速会超过 training。NVIDIA 管理层多次将 inference 定义为下一阶段需求增长的主要来源。[^2] Inference 是最不灵活的桶。
3. **企业 SLA 与受监管行业把负荷锚定在 firm。** AWS Bedrock、Azure OpenAI、Vertex AI 与金融、医疗、联邦客户签订的合同都有可用性承诺，部分还带数据驻留条款，限制跨地域调度迁移。真正可灵活的 ~10-20%（训练、eval、批处理）通常并不集中在与电网阻塞相同的节点上，进一步压缩了 PJM 层面可获得的实际灵活性。

## 对 Card-01 论点的修正

我支持 Card-01 关于 "AI 负荷不是单纯刚性增长信号" 的整体框架，但 **对 non-firm 节省的数量级进行压力测试**。Johns Hopkins 结果更诚实的拆解是：

- **现实可达的灵活窗口：** 在乐观假设下，约 15-25% 的数据中心负荷可被 non-firm 处理。
- **PJM 在部分灵活电价设计下可实现的年系统成本节省：** 约 $2-4 B/年，而不是 $15-16 B。
- **剩余 firm 负荷：** 约 75-85% 的 AI 需求堆栈仍需 firm 容量服务，落在燃气调峰、核电重启/延寿、输电升级与自备燃气头上。

这改变了投资倾斜度。最大受益者是已经签下 hyperscaler 合同的 firm 容量持有者：核电方面 **Constellation Energy (CEG)、Vistra (VST)、Talen (TLN)**；重型燃气轮机方面 **GE Vernova (GEV)、Mitsubishi Heavy**（2026-2028 交付窗口已订满）；输电与变电方面 **Quanta Services (PWR)、Eaton (ETN)** 等 T&D 与开关设备厂。纯 flex-tariff 或 behind-the-meter 太阳能+电池服务 hyperscaler 的标的，不应按 $15-16 B 的口径定价。

hyperscaler 自身——**Microsoft (MSFT)、Alphabet (GOOGL)、Amazon (AMZN)、Meta (META)、Oracle (ORCL)**——则要承担比此前看多情景更高的全口径电价，AI 工作负载云毛利率会被压缩，除非定价跟得上。考虑当前 AI 收入轨迹，这是一个真实但不致命的逆风。

## 我可能错在哪里

- 如果算法效率（真正可中断的 test-time compute、DiLoCo 等异步训练架构、端侧 inference 卸载）显著改变工作负载结构，灵活窗口可能升至 30-40%。
- 如果公用事业与 PJM 设计出 "shaped firm" 电价、为分钟到小时级（与燃气调峰可调度性匹配）短时切除付费，hyperscaler 也许愿意为边际容量加入，即便核心负荷保持 firm。
- 如果 GPU 出现供过于求（若 training scaling 在 2027 年放缓，这是真实可能），闲置 GPU 小时变得便宜，切除的机会成本下降，灵活性在经济上变得可接受。

## 交接

**推荐下一位分析师：** energy-analyst（primary）
**后续话题：** AI 数据中心 firm 电源供给瓶颈——核电重启、燃气轮机交付窗口稀缺、自备燃气
**后续问题：** 如果 75-85% 的新增 AI 数据中心负荷必须按 firm 容量服务，美国 firm 电源供应链（核电重启与扩容、GE Vernova / Mitsubishi 重型燃气轮机、自备往复式燃气、输电）能否在 hyperscaler 要求的 2026-2030 时间表内交付？真正的瓶颈在哪里？

energy-analyst 是合适的下一张 primary 卡片，因为 firm 负荷的结论将可投资问题转向物理供给：核电重启时间表（Three Mile Island 2028、Palisades、Duane Arnold）、燃气轮机订单簿（据报 GE Vernova 2026-2027 重型轮机已售罄）、Henry Hub 与各产气盆地的气价反馈、以及 LNG 出口与国内发电对天然气分子的争夺。这些都属 energy-analyst 主场，是本压力测试线索的自然 Card-03。

## 来源

[^1]: Johns Hopkins Ralph O'Connor Sustainable Energy Institute, "Data Center Flexibility & PJM Grid," 2026 年 3 月 20 日, https://energyinstitute.jhu.edu/wp-content/uploads/2026/03/Data_Center_Analysis_PJM-March-20-2026.pdf （Card-01 已引用）。
[^2]: NVIDIA, GTC 2025 主题演讲与 FY2026 财报有关 inference 需求超过 training 的表述；NVIDIA 投资者关系, https://investor.nvidia.com。
[^3]: NVIDIA Blackwell GB200 NVL72 平台规格（每机柜约 120 kW，72 张 GPU）；NVIDIA 产品简介, https://www.nvidia.com/en-us/data-center/gb200-nvl72/。集群经济性根据公开 H100/B200 云租用价格（CoreWeave、Lambda、AWS P5 实例）测算。
[^4]: Constellation Energy 新闻稿, "Constellation to Launch Crane Clean Energy Center, Restoring Jobs and Carbon-Free Power," 2024 年 9 月 20 日, https://www.constellationenergy.com/newsroom.html。
[^5]: Talen Energy 与 Amazon Web Services 数据中心园区披露；FERC 关于 AWS-Talen 修订 ISA 的案卷（2024-2025）, https://www.ferc.gov。
[^6]: Constellation Energy, Meta Platforms 与 Clinton Clean Energy Center 的 20 年 PPA, 2025 年 6 月；公司新闻稿。
[^7]: Google 与 Kairos Power, "Google signs world's first corporate agreement to purchase nuclear energy from multiple small modular reactors," 2024 年 10 月 14 日, https://blog.google/outreach-initiatives/sustainability/google-kairos-power-nuclear-energy-agreement/。
[^8]: 关于 xAI Colossus（Memphis）自备天然气轮机的报道, Memphis Light Gas & Water 申报文件以及 Bloomberg/Reuters 2024-2025 年报道。
[^9]: OpenAI / Oracle / SoftBank "Stargate" 公告, 2025 年 1 月；Abilene, Texas 现场报道。

## Follow-up

- Analyst: energy-analyst
- Topic: AI 数据中心 firm 电源供给瓶颈：核电重启、燃气轮机交付窗口与自备燃气
- Question: 如果 75-85% 的新增 AI 数据中心负荷必须按 firm 容量服务，美国 firm 电源供应链（核电重启与扩容、GE Vernova / Mitsubishi 重型燃气轮机、自备往复式燃气、输电）能否在 hyperscaler 要求的 2026-2030 时间表内交付？真正的瓶颈在哪里？
