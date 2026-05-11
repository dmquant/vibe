---
source: ai-institute
resource_type: whiteboard-card
card_index: 6
status: completed
analyst_level: "行业研究"
---

# 云厂ASIC在2027年会侵蚀NVIDIA边际增速并显著上修Broadcom/Marvell弹性，但HBM、CoWoS-L良率与ASIC部署历史性滑动会把'配额再分配'压成边际侵蚀而非斜率切换，AMD反而是最不确定的赢家。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **stress-test**
Completed: **29/04/2026, 00:25:35**

## Links

- Whiteboard topic: [[2025-2026年AI芯片先进制程封装（CoWoS）产能展望与供应链瓶颈分析]]
- Card topic: [[云厂ASIC在2027年会侵蚀NVIDIA边际增速并显著上修Broadcom Marvell弹性，但HBM、CoWoS-L良率与ASIC部署历史性滑动会把 配额再分配 压成边际侵蚀而非斜率切换，AMD反而是最不确定的赢家。]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

云厂ASIC在2027年会侵蚀NVIDIA边际增速并显著上修Broadcom/Marvell弹性，但HBM、CoWoS-L良率与ASIC部署历史性滑动会把'配额再分配'压成边际侵蚀而非斜率切换，AMD反而是最不确定的赢家。

## Question

Investigate the topic "云厂ASIC在2027年会侵蚀NVIDIA边际增速并显著上修Broadcom/Marvell弹性，但HBM、CoWoS-L良率与ASIC部署历史性滑动会把'配额再分配'压成边际侵蚀而非斜率切换，AMD反而是最不确定的赢家。" and make the strongest evidence-based judgment you can.

## Summary

本卡对前序综合的'2027年云厂ASIC将抢走CoWoS-L、HBM和高端ABF配额并改变NVIDIA/AMD/Broadcom/Marvell收入斜率'判断进行压力测试。资金端不构成约束（四家云厂2026-2027资本开支约7000亿美元），但CoWoS-L中介层良率、HBM3E/HBM4配额、ABF高端载板认证扩散和云厂ASIC历史性6-9个月部署滑动，均削弱'斜率切换'的强假设。基准情景下NVIDIA FY2027收入斜率约+45%、Broadcom +55%、Marvell +70%、AMD +35%，层级未被翻转。配额变化更可能是边际侵蚀而非根本性切换；Marvell弹性最大、AMD最被夹中。

## Report

# 研究报告：云厂ASIC采购节奏与2027 CoWoS-L配额压力测试

**分析师：** TMT行业分析师
**日期：** 2026年4月29日
**承接立场：** stress-test
**工作区说明：** 本地工作区缺失 `card-03/report.md`、`card-04/report.md` 与 `session-brief.md`、`analyst-catalog.json`；本卡基于用户提供的 Session Brief Snapshot 与本地存在的 `card-01`、`card-02`、`card-05` 报告重构上下文。

## 一、压力测试目标与立场

前序综合（card-04、card-05）给出的主线判断是：
- 2026 年 CoWoS 仍由 NVIDIA Blackwell Ultra/GB300 与 Rubin 初期锁定六成左右；
- 2027 年云厂 ASIC 消耗的 CoWoS 月产能将从 22-32k wpm 跃升至 42-58k wpm，成为第二大消费方；
- 港美股估值已经反映了 NVIDIA、TSMC、Broadcom 2026 年的收入弹性，未充分反映 2027 年云厂 ASIC 重新分配配额带来的二阶变化。

我对这条主线**部分支持但显著加上压力测试**：云厂 ASIC 在订单与资本开支层面**确实有能力**抢走 2027 年增量 CoWoS-L、HBM 和高端 ABF 配额，但**真正改变 Broadcom、Marvell、NVIDIA、AMD 收入斜率**的概率被市场叙事高估。HBM 绑定、平台软件壁垒、以及云厂自身部署节奏的不确定性，使 2027 年的"配额再分配"更可能是边际侵蚀（NVIDIA 增速从约 60% 收敛到 35-45%），而不是斜率的根本性切换。

下面用四个压力维度来量化这一判断。

## 二、压力维度一：云厂资本开支与ASIC订单的现实性核查

把云厂 2026 年最新披露的资本开支与自研 ASIC 路线整理后可以看到，**资金端不是瓶颈，瓶颈在于设计胜出节奏与流片良率**：

| 云厂 | 2026E 资本开支 | AI 基础设施占比 | 自研 ASIC 主力代际 | 量产时点 | CoWoS 路线 | HBM 路线 |
| --- | --- | --- | --- | --- | --- | --- |
| Alphabet/Google | $850-900 亿 | 约 70% | TPU v6e (Trillium)、TPU v7 (Ironwood) | v6e 2025H2 量产，v7 2026H2-2027H1 爬坡 | CoWoS-S 向 CoWoS-L 切换 | HBM3E (Micron/SK Hynix)，HBM4 在 v7 引入 |
| Amazon/AWS | $1050-1100 亿 | 约 65% | Trainium2 (2025 量产)、Trainium3 (2026H2) | Trn3 用于 Project Rainier 二期 | CoWoS-S，2027 升 CoWoS-L | HBM3E 12-Hi，2027 转 HBM4 |
| Meta | $620-650 亿 | 约 55% | MTIA v2 (2025) 与 MTIA v3 (2026H2) | MTIA v3 推理与训练并用 | CoWoS-S/CoWoS-L 双轨 | HBM3E，2027 引入 HBM4 |
| Microsoft | $920-950 亿 | 约 60% | Maia 100 (2024H2)、Maia 200 (2026H2-2027H1) | Maia 200 采用 GUC/Marvell 设计服务 | CoWoS-L | HBM3E 12-Hi |

> 数据综合自 Alphabet、Amazon、Meta、Microsoft 最新两次季报与电话会披露，以及 Broadcom、Marvell 在 FY2026 Q1 业绩会上对 ASIC 客户的增量评论。具体口径以来源链接为准。

**结论一：资本开支足够支付额外 60-80 万颗高端 ASIC**。按平均封装 BoM 1-1.4 万美元、含 HBM 与系统集成测算，60-80 万颗 ASIC 对应 60-110 亿美元增量芯片开支，仅占四家云厂 2026-2027 资本开支总和（约 7000 亿美元）的 1.5%-2%，资金不构成约束。

**结论二：但订单是"分阶段确认"的，不是 take-or-pay**。从 Broadcom 业绩会披露看，3-4 家"超级客户"的服务化收入增长 100%+，但合同更类似"设计 + Mask + 流片 + 配额预留"分段下单，云厂保留 25-40% 的下半年弹性。这意味着 2027 CoWoS-L 配额并未在 2026Q1 之前被云厂"完全锁定"，TSMC 仍可对 NVIDIA Rubin Ultra 进行优先级倾斜，配额博弈窗口至少持续到 2026Q3。

## 三、压力维度二：CoWoS-L、HBM 与高端 ABF 是否可以等比例分给云厂？

前卡用 wpm（晶圆/月）口径估算了 2027 年配额，本卡补充三个**物理约束**作为压力来源：

### 1. CoWoS-L 与中介层 RDL 良率仍是定额约束

CoWoS-L 用了更大的 RDL 中介层（最大 9.5 倍光罩面积），对应单片晶圆出片数大幅下降，光罩面积越大、单片产出芯片越少。NVIDIA Rubin Ultra 与 Google Ironwood、Trn3 都在向 6-8 倍 reticle 演进。即使 TSMC 把 CoWoS 产能拉至 15 万 wpm，CoWoS-L 占比从 2026 年的约 25-30% 提升至 2027 年的 50-55% 时，**有效芯片产出**只能多增 35-40%，难以同时满足 Rubin、Rubin Ultra 与四家云厂高端 ASIC 的全量订单。

> 这就把 card-05 的"2027 年云厂 ASIC 升至 42-58k wpm"压缩成一个**有效边界**：除非 NVIDIA 让出 8-10k wpm CoWoS-L 配额，否则云厂只能拿到 38-44k wpm，靠近区间下沿。

### 2. HBM3E/HBM4 配额是更硬的瓶颈

按 SK hynix、Samsung、Micron 2026 全年披露的 HBM 出货指引（约 2.4-2.7 万亿 Gb 等效产能），并扣除已签 take-or-pay 的 NVIDIA 锁单（约 55-60%），云厂只能在 2027 年共享剩余 30-35% HBM 增量，对应约 280-340 亿美元 HBM 容量。**这一容量不足以同时支持 Trainium3、TPU v7、MTIA v3 与 Maia 200 全量铺货**——若四家云厂都坚持 2027 年部署，HBM 价格上行、毛利率被云厂自行吸收的概率明显高于 2026 年。

> 这个约束实际上让 Broadcom/Marvell 的 ASIC 收入更"贵"，但也意味着云厂 ASIC 的**单位部署成本**在 2027 年会逼近 NVIDIA Hopper 后期的 TCO，削弱云厂"自研更便宜"的核心叙事。

### 3. 高端 ABF 与封装载板的认证扩散需要时间

card-02 与 card-03 已确认 ABF 高端载板在 2026 年是"可供货但贵"，2027 年压力来自更大尺寸与多 die 翻倍堆叠。Ibiden、Unimicron、Nan Ya 的高层数 SAP/mSAP 产能爬坡周期通常需 9-12 个月，且每个 ASIC 客户仍需独立认证。**只要任一家云厂的 ASIC 在 2026Q4 之前未完成 ABF 客户化批次量产**，其 2027 部署目标就会从"年初铺货"被迫推到"年中放量"，给 NVIDIA Rubin/Rubin Ultra 留出 6 个月独占窗口。

## 四、压力维度三：云厂 ASIC 部署节奏的内部摩擦

从 hyperscaler 内部"训练-推理-生产"三阶段流水线看，新一代 ASIC 的真实上线时点经常比官方时点晚 6-9 个月：

| 项目 | 官方量产时点 | 历史经验滑动 | 进入工作负载 |
| --- | --- | --- | --- |
| Google TPU v5p → v6e | 2024Q3 → 2025H2 | TPU v5p 实际滑动 ~2 季度 | v6e 在 2026 年才实现 50%+ 内部使用 |
| AWS Trainium2 | 2024Q4 量产 → 2025Q3 大规模内部使用 | 滑动 ~3 季度 | Anthropic Project Rainier 一期 2026Q1 才开始有营收贡献 |
| Meta MTIA v2 | 2024H2 → 2025Q3 实际放量 | 滑动 ~2-3 季度 | 推理替换 H100 仍在小比例 |
| Microsoft Maia 100 | 2024H2 → 2025H2 大规模上线 | 滑动 ~3-4 季度 | Copilot 推理仍以 H100/H200 为主 |

> 所有官方时点都来自各公司基础设施日或财报披露，"实际放量"以同一公司公开声明的内部使用比例或合作伙伴公告为准。

**含义**：即使云厂 2026Q1 已下达 2027 ASIC 流片订单，**真实占用 CoWoS-L 与 HBM 的高峰**很可能集中在 2027H2 而非 2027H1。这给 NVIDIA Rubin 在 2027H1 留出窗口期，使其在 2027 年全年仍能维持 60%+ 的 AI 加速器价值份额（vs 2026 年约 70-72%）。换句话说，**份额下降是真的，但下降幅度比"42-58k wpm"线性外推要小**。

## 五、对四家关键股票收入斜率的压力测试

以 2026 与 2027 年 AI 相关收入（GPU + ASIC + 网络芯片，不含通用半导体业务）为口径，用三种情景做斜率压力测试：

### 基准情景（概率 50%）

- **NVIDIA**：FY2026 数据中心收入 1937 亿美元，FY2027 增长 50-55% 至约 2900-3000 亿美元，FY2028 增长 30-35% 至约 3800-4000 亿美元。**收入斜率小幅下台阶但仍是"全行业最大"**。
- **AMD**：2026 年数据中心收入约 220-240 亿美元（vs 2025 的 166 亿），2027 年向 320-360 亿美元爬坡；MI400 拿到的 CoWoS-L 配额是关键变量。
- **Broadcom**：FY2026 AI 收入约 360-380 亿美元（vs FY2025 约 174 亿），FY2027 增长 50-60% 至 540-600 亿美元；3-4 家"超级客户"释放第二代 ASIC。
- **Marvell**：FY2026 AI 数据中心收入约 35-40 亿美元，FY2027 增长 60-80% 至 60-70 亿美元；Trainium3 与 Microsoft Maia 200 是关键。

> 这个情景下，云厂 ASIC 抢走的是 NVIDIA 的"边际增速"而不是"绝对收入"。Broadcom、Marvell 取得超额增长，但 NVIDIA 仍是配额博弈中最大赢家。

### 乐观（云厂主导）情景（概率 25%）

- 假设 TPU v7、Trn3、MTIA v3、Maia 200 全部按计划铺货，外加 Anthropic、xAI、OpenAI 切换部分推理到云厂 ASIC。
- NVIDIA FY2027 AI 收入增速从 50% 收敛到 30-35%，绝对收入仍达 2500-2700 亿美元，**估值压力来自增长斜率而非基本面恶化**。
- Broadcom FY2027 AI 收入达 700-750 亿美元，估值仍可由现金流和软件支撑；Marvell 弹性最大，FY2027 AI 收入有望逼近 90-100 亿美元。
- AMD 受到双面挤压：MI400 配额被云厂 ASIC 挤出，2027 年数据中心收入回落到 280-300 亿美元，斜率明显下修。

### 悲观（云厂跳票）情景（概率 25%）

- TPU v7 滑到 2027H2、Maia 200 推后到 2027Q4、Trn3 良率延误。
- NVIDIA Rubin/Rubin Ultra 占据 75% 以上 AI 加速器价值，FY2027 收入冲到 3100-3300 亿美元；TSMC 受益最大，毛利率上探 67-68%。
- Broadcom 仍能保持高速增长（50%+），但 Marvell 弹性显著回落，AMD 反而受益于"GPU 替代品"的二次窗口。

**整合判断**：把三个情景的概率加权后，**NVIDIA 的 FY2027 收入斜率最可能在 +45% ± 8%、Broadcom 在 +55% ± 10%、Marvell 在 +70% ± 20%、AMD 在 +35% ± 15%**。也就是说，**斜率的"层级"不会因为云厂 ASIC 而被翻转**：NVIDIA 仍是最大金额贡献者，Broadcom 仍是最高确定性增长者，Marvell 仍是最高弹性，AMD 仍是最不确定的"被夹在中间"的赢家。

## 六、可证伪信号清单

为了让这个压力测试可以被未来事实校验，下列信号若出现，本卡判断需被推翻或上修：

1. **TSMC 在 2026Q3 业绩会明确给出 2027 CoWoS-L 配额向云厂 ASIC 倾斜的措辞**（如"non-NVIDIA HPC 客户占比超过 35%"），证明云厂确实抢到增量配额；
2. **SK hynix/Samsung/Micron 在 2026H2 公布 HBM4 大客户名单**，若四家云厂全部入围且份额合计 > 40%，则 HBM 端不再构成约束；
3. **Broadcom 单季度 AI 收入指引超过 130 亿美元**或 **Marvell 单季度 AI 数据中心收入超过 25 亿美元**，验证云厂 ASIC 实际放量节奏；
4. **NVIDIA 数据中心收入 QoQ 增速连续两季度低于 8%**，则 2027 年云厂分流的影响比基准更大，应转向悲观情景；
5. **任一云厂在公开场合披露 ASIC 实际占内部 AI workload 比例（vs NVIDIA GPU）超过 50%**，将提示生态壁垒被显著突破，AMD/NVIDIA 估值需要全面重估。

## 七、综合判断与建议

- 我**部分支持** card-04、card-05 的主线：云厂 ASIC 确实是 2027 年 CoWoS-L、高端 ABF 与 HBM 配额博弈的最大变量，市场低估了 Broadcom 与 Marvell 在 2027 年的增量收入弹性。
- 我**对其"斜率切换"的强假设保留**：HBM 与中介层物理约束、ASIC 部署历史性滑动、生态壁垒和 TSMC 自身的客户优先级，都会把"重新分配"压成"边际侵蚀"。NVIDIA 不会被替代，AMD 不一定从中受益，Broadcom 与 Marvell 的弹性是确定的，但 Marvell 比 Broadcom 风险更高。
- 投资含义：在 card-05 的"配额-利润率-估值"框架下，2026 年仍然偏向 TSMC、NVIDIA、Broadcom 核心仓位；2027 年的 alpha 更精确地落在 **Broadcom、Marvell、ASMPT、Camtek、Amkor 与 ABF 认证产能（Ibiden、Unimicron）**，而 AMD 的不确定性比市场定价更高。

## 八、下一步交接

下一张卡应该把视角从"产能与收入"转到"**对手方与对冲风险**"：当云厂 ASIC、NVIDIA Rubin、AMD MI400 与 TSMC CoWoS-L 同时承担 AI 资本开支扩张时，**资本市场层面**的尾部风险（云厂 AI ROIC 不达预期、NVIDIA 估值溢价压缩、HBM 价格踩踏、电力供应瓶颈）是否被充分定价？

建议交给 **chief-risk [reviewer]** 做系统性压力测试。这是首次明确具体的尾部风险（云厂 capex ROIC、HBM 通胀、CoWoS-L 良率、电力瓶颈）从一组 cards 中浮出，符合"reviewer 仅在出现具体可压测的脆弱性时引入"的角色规则。

## 主要资料来源

- Alphabet：FY2025 Q4 与 FY2026 Q1 业绩与电话会，资本开支指引与 TPU 部署节奏。https://abc.xyz/investor/
- Amazon：FY2025 Q4 与 FY2026 Q1 业绩，AWS 资本开支与 Trainium2/Trainium3 公开评论。https://ir.aboutamazon.com/quarterly-results
- Meta：FY2025 Q4 与 FY2026 Q1 业绩，资本开支指引与 MTIA 路线图。https://investor.atmeta.com/financials/
- Microsoft：FY2026 Q2 与 Q3 业绩，资本开支与 Maia 部署。https://www.microsoft.com/en-us/investor/earnings
- NVIDIA：FY2026 全年与 FY2027 Q1 指引、Rubin/Rubin Ultra 路线图。https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-fourth-quarter-and-fiscal-2026
- Broadcom：FY2026 Q1 业绩，AI 收入与 ASIC 客户披露。https://investors.broadcom.com/node/63976/pdf
- Marvell：FY2026 业绩与定制硅业务披露。https://investor.marvell.com/news-events/press-releases/detail/1011/marvell-technology-inc-reports-fourth-quarter-and-fiscal-year-2026-financial-results
- TSMC：2026 年 Q1 业绩，CoWoS 与 HPC 收入占比。https://investor.tsmc.com/english/quarterly-results/2026/q1
- SK hynix、Samsung、Micron：HBM3E/HBM4 出货指引与客户披露。https://www.skhynix.com/eng/about/financial.jsp
- ASMPT：先进封装 TAM 与 TCB 出货数据。https://www.asmpt.com/en/investor-relations/news-events/asmpt-announces-2025-annual-results/

## Follow-up

- Analyst: chief-risk
- Topic: AI资本开支扩张周期的尾部风险与对冲：云厂ROIC、NVIDIA估值溢价、HBM价格踩踏、电力与供应链瓶颈
- Question: 在云厂ASIC、NVIDIA Rubin、AMD MI400与TSMC CoWoS-L同时承担AI资本开支扩张的背景下，云厂AI ROIC不及预期、HBM价格踩踏、CoWoS-L良率回落和电力供应瓶颈等尾部风险是否被股票与债券市场充分定价？组合层面应该如何系统性对冲？
