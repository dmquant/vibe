---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "行业研究"
---

# DeepSeek V4 将华为 Ascend 生态从制裁倒逼的次优选择转变为国产优先平台，SMIC 和华虹半导体超配，HBM 良率改善是2026年下半年盈利修正的最大摆动因子。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **initial**
Completed: **06/05/2026, 08:40:56**

## Links

- Whiteboard topic: [[DeepSeek V4 原生适配华为 Ascend 950PR 对中国 AI 芯片供应链的结构性影响]]
- Card topic: [[DeepSeek V4 原生适配华为 Ascend 950PR 对中国 AI 芯片供应链的结构性影响]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

DeepSeek V4 原生适配华为 Ascend 950PR 对中国 AI 芯片供应链的结构性影响

## Question

DeepSeek V4 与华为 Ascend 950PR 的深度协同，是否标志着中国 AI 软硬件闭环的形成？中芯国际和华虹半导体等本土晶圆厂将如何从中受益，核心制约因素是什么？

## Summary

2026年4月24日，DeepSeek 发布1.6万亿参数 V4 模型，原生运行于华为 Ascend 950PR，中国 AI 软硬件形成自我强化闭环。字节跳动、腾讯、阿里巴巴争相下单，华为 AI 芯片2026年营收预计达120亿美元（同比+60%）。中芯国际（0981.HK）和华虹半导体（1347.HK）股价当日分别涨10%和15%，为直接受益晶圆厂。核心瓶颈不在逻辑芯片产能，而在 HBM 国产化良率，这将压制2026年上半年出货规模，并延迟下半年盈利释放。中国 AI 芯片市场至2029年预计达1.34万亿元（54% CAGR）。超配中芯/华虹，置信度0.74。

## Report

# DeepSeek V4 × 华为 Ascend：中国 AI 硬件闭环正式形成

**分析师：** TMT行业分析师 (tmt-analyst)
**日期：** 2026-05-06
**主题：** DeepSeek V4 原生适配华为 Ascend 950PR——对中国 AI 芯片供应链的结构性影响
**覆盖标的：** 0981.HK（中芯国际）、1347.HK（华虹半导体）、华为（未上市）、寒武纪（688256.SH）

---

## 执行摘要

2026年4月24日，DeepSeek 发布万众期待的 V4 模型——参数量1.6万亿的混合专家架构，分 "pro" 和 "flash" 两个版本——最具结构性意义的特征是：该模型原生且最优地运行于华为 Ascend 950PR 芯片，而非英伟达硬件。这不是一个营销注脚，而是中国 AI 软硬件生态形成自我强化闭环的历史节点：最具竞争力的国内前沿大模型，与最先进的国产 AI 加速器实现深度协同演进。

投资信号方向明确，但供给瓶颈制约了收益幅度。中芯国际（0981.HK）和华虹半导体（1347.HK）是直接受益的晶圆厂——消息当天股价分别上涨10%和15%——但制约2026年下半年的核心瓶颈是HBM（高带宽内存）国产化进度，而非逻辑芯片产能。理解这一区别的投资者可以实现更精准的持仓布局。

**核心判断：** DeepSeek V4 将华为 Ascend 生态系统从"制裁倒逼的次优选择"转变为"结构性优选的国产平台"。中芯国际和华虹半导体维持超配，但华为 HiSilicon 关联供应链的 HBM 良率改善节奏，是影响2026年下半年盈利预测修正的关键摆动因子。

---

## 一、DeepSeek V4 事件梳理

| 参数 | 详情 |
|------|------|
| 发布日期 | 2026年4月24日（预览版）；完整版待定 |
| 模型架构 | 混合专家（MoE），1.6万亿参数 |
| 版本 | V4-Pro（完整规模）、V4-Flash（蒸馏版） |
| 主要硬件目标 | 华为 Ascend 950PR |
| 开源状态 | 是——权重可下载、可修改 |
| 基准测试声明 | 在 Agent 任务、知识处理、推理方面优于国内同类模型 |
| 美方知识产权指控 | 美国政府指控 DeepSeek 存在 IP 盗窃行为；训练数据来源受到质疑 |

此前 DeepSeek R1/V3 模型依赖英伟达 H800 GPU 进行训练。V4 代表了蓄意的重新架构：华为表示"与 DeepSeek 密切合作，使 V4 模型能在其整个 Ascend 高性能系统产品线上运行"，华为 SuperNode 集群原生支持 V4。这一联合研发信号意味着持续合作，而非一次性的移植适配。

预览版发布数日内，字节跳动、腾讯、阿里巴巴纷纷紧急下单 Ascend 950PR。据报道，仅字节跳动就承诺了56亿美元的采购订单。软硬件锁定效应已经形成，直接利好为 SMIC 供应晶圆的国内晶圆厂。

---

## 二、结构性意义：为何这次不同

此前中国 AI 芯片的国内替代主要由制裁驱动：科技企业购买华为 Ascend 是因为买不到英伟达。这是一种负向筛选——次优结果。DeepSeek V4 颠覆了这一逻辑：

1. **模型层面的性能收敛。** V4 在 Ascend 950PR 上运行，实现了具有竞争力的前沿模型能力。在英伟达 Blackwell 上经 CUDA 优化的模型与 Ascend 方案之间的性能差距，已收窄到绝大多数商业应用均可接受的程度。

2. **打破 CUDA 依赖。** V4 原生运行的 Ascend 运行时——CANN（计算架构神经网络）——降低了国内 AI 开发者对 CUDA（英伟达专有软件护城河）的依赖。一旦开发者将工作流切换为 CANN，转换成本将对英伟达不利，而非有利。

3. **政策保障。** 北京"2027年市政采购实现100% AI 芯片自给"的目标，叠加国家大基金三期475亿美元对国产半导体产能的承诺，确保了持续的国家主导需求，即便商业经济性有所恶化也不例外。

4. **开源飞轮效应。** DeepSeek V4 开源发布，意味着数以千计的国内开发者将在 Ascend 硬件上微调和部署，形成有机生态，吸引更多软件优化投入——构成正向强化循环。

---

## 三、供应链受益方梳理

### 3.1 中芯国际（0981.HK）——核心逻辑芯片晶圆厂

中芯国际在 N+2 工艺节点上为华为 Ascend 芯片代工，业界普遍评估其功能等效于7nm（落后台积电3nm约两到三代）。关键指标：

| 指标 | 2025E | 2026E | 2027E |
|------|-------|-------|-------|
| 先进节点产能（万片/月） | 4.5 | 6.0 | 8.0 |
| Ascend 950PR 占先进产能比 | ~15% | ~20–25% | 待定 |
| 良率（N+2，业界估算） | 30–60% | 40–65% | 50–70% |
| 大基金三期支持 | 进行中 | 进行中 | 进行中 |

中芯国际2026年将7nm产能翻倍，先进节点扩产获250亿美元资本开支支撑，同时受益于国家大基金三期。良率区间（30–60%）较宽，因独立估算分歧较大；中值约50%，与台积电同类节点80–90%良率相比仍有显著差距，意味着单位芯片成本溢价，部分由华为通过一体化采购模式吸收。

**分析师一致预期：** 12个月平均目标价 HKD 74.99（17家买入 / 5家卖出）。目标价区间宽泛（HKD 25–134）反映了良率/产能不确定性溢价。

### 3.2 华虹半导体（1347.HK）——特色工艺与成熟节点

华虹不生产 Ascend 950PR 前道逻辑芯片，但通过以下途径间接受益：
- Ascend 服务器节点中使用的电源管理 IC 和模拟芯片
- 华为更广泛的云计算与电信硬件中的成熟节点元器件
- 溢出需求：随着中芯国际先进产能被 Ascend 订单填满，其他成熟节点逻辑需求客户将转移至华虹

V4 公告当日华虹涨幅15%，超过中芯国际的10%，反映其流通盘较小、对中国 AI 硬件情绪具有更高弹性。

**分析师一致预期：** 12个月平均目标价 HKD 93.94（13家买入 / 3家卖出）。

### 3.3 寒武纪（688256.SH）——GPU 替代路线

寒武纪目标2026年出货50万颗 AI 芯片（MLU 系列）。若实现，将验证中芯国际 N+2 工艺可支撑华为专属之外更广泛的 AI 芯片量产规模。关注2026年二季度出货数据，作为先行指标。

### 3.4 华为（未上市）——系统集成商与最大受益方

华为预测2026年 AI 芯片收入约120亿美元，同比增长60%。Ascend 950PR 目标出货量约75万片（2026年4月启动量产，下半年进入全面出货）。仅字节跳动一份56亿美元订单即部分支撑了这一轨迹。

---

## 四、HBM 瓶颈——关键制约因素

制约因素并非逻辑芯片（由中芯国际制造），而是高带宽内存（HBM）——大规模 AI 模型推理所需的堆叠式 DRAM。

核心事实：
- Ascend 950PR 需要 HBM3/HBM3E 以实现完整性能；华为目前使用关联供应链研发的国产 HBM，但良率和性能落后于 SK Hynix/三星的 HBM3E
- 美国出口管制限制韩国、日本 HBM 供应商向华为出售特定性能等级以上的产品
- 华为2028年 Ascend 芯片路线图包含自研 HBM，目标带宽1.6 TB/s，但截至2026年中仍处于预量产阶段
- 供给约束将压制2026年上半年 V4-Pro 的部署规模；随着供给扩张，下半年定价预计大幅下降

**投资含义：** Ascend 需求浪潮带来的短期盈利弹性是真实的，但部分将被 HBM 良率损耗和单位成本超支所抵消。中芯国际2026年下半年盈利预测修正，更多取决于 HBM 供给正常化，而非晶圆投片量。

---

## 五、市场背景与中国 AI 芯片规模预测

| 指标 | 数值 |
|------|------|
| 中国 AI 芯片市场规模（2024） | 1425亿元（约197亿美元） |
| 中国 AI 芯片市场规模（2029E，国泰海通证券） | 1.34万亿元（约1850亿美元） |
| 隐含复合增速（2024–2029） | ~54% |
| 中国 AI 芯片自给率目标 | 2027年市政采购70–100% |
| 大基金三期总承诺额 | 475亿美元 |
| 华为 Ascend 950PR 2026年出货目标 | ~75万片 |
| 华为 AI 芯片2026年收入预测 | ~120亿美元（同比+60%） |

国泰海通证券1.34万亿元2029年预测，意味着相较2024年市场规模约9倍扩张。即便打六折考虑执行风险，可寻址市场的扩张幅度也远超现有晶圆厂产能规划，表明结构性供不应求将至少持续至2027年。

---

## 六、风险矩阵

| 风险 | 概率 | 影响 | 应对 |
|------|------|------|------|
| 中芯国际良率未能改善，Ascend 950PR 芯片成本居高不下 | 中 | 高——压缩华为和中芯利润率 | 跟踪季度 ASP 及毛利率趋势 |
| HBM 国产化推迟，供给约束延续至2027年 | 中高 | 中——部署规模受限，营收确认推迟 | 追踪华为 HBM 路线图里程碑 |
| 美国升级出口管制，针对中芯国际 DUV 设备 | 低中 | 极高——可能损害 N+2 产能扩张 | 地缘政治监测；估值纳入政治风险溢价 |
| DeepSeek V4 美方 IP 盗窃案导致制裁 | 低 | 中——软件生态受挫，但华为芯片需求持续 | 将硬件需求逻辑与 DeepSeek 主体风险分离 |
| 国内科技巨头转向其他芯片偏好 | 低 | 低——字节/阿里/腾讯订单已落地 | 订单已锁定，转换成本持续上升 |
| 全球宏观恶化，中国企业 AI 资本开支收缩 | 中 | 中——政府强制采购提供底部支撑 | 监测私营部门 AI 基础设施支出数据 |

---

## 七、投资结论

**超配中芯国际（0981.HK）和华虹半导体（1347.HK）**，12个月视角。DeepSeek V4 × 华为 Ascend 950PR 联合研发是结构性事件，而非情绪性脉冲。需依次关注的关键催化剂：

1. **2026年二季度业绩（8月）：** 中芯国际营收向 AI 逻辑芯片转移——关注先进节点营收占比是否超过25%
2. **华为 Ascend 950PR 月度出货数据：** 追踪年末是否实现>60万片（对比75万片目标）
3. **HBM 国产化进展：** 华为 HBM 进入量产的任何公告，将触发整个 AI 芯片供应链正向重估
4. **寒武纪二季度出货数据：** 验证中芯国际 N+2 供给可用性是否超越华为独家范畴

即便在中美贸易正常化（关税降低）的乐观情景下，投资逻辑依然成立，因为国内 AI 芯片偏好现已由软件生态锁定驱动，而非仅靠制裁。若制裁升级，逻辑将进一步强化。

**置信度：0.74**——方向明确；幅度取决于 HBM 良率改善，目前可见性较低。

---

## 数据来源

- [DeepSeek V4 发布 — CNBC](https://www.cnbc.com/2026/04/24/deepseek-v4-llm-preview-open-source-ai-competition-china.html)
- [DeepSeek V4 受益方 — 南华早报](https://www.scmp.com/business/china-business/article/3352126/who-could-gain-deepseeks-v4-china-chips-poised-stronger-demand)
- [投资者转向国产芯片 — 南华早报](https://www.scmp.com/business/china-business/article/3351328/investors-rotate-chinas-chipmakers-deepseek-intensifies-ai-competition)
- [DeepSeek V4 适配华为芯片 — BNN Bloomberg](https://www.bnnbloomberg.ca/business/artificial-intelligence/2026/04/24/deepseek-previews-new-ai-model-adapted-to-run-on-huawei-chips/)
- [华为 Ascend 950 需求激增 — Invezz](https://invezz.com/news/2026/04/29/huawei-ascend-950-chip-demand-surges-after-deepseek-v4-launch/)
- [华为 AI 芯片营收目标120亿美元 — The Deep Dive](https://thedeepdive.ca/huawei-eyes-12-billion-in-ai-chip-revenue-as-deepseek-v4-drives-orders-away-from-nvidia/)
- [DeepSeek V4 引发争夺 — Capacity Global](https://capacityglobal.com/news/deepseek-v4-triggers-scramble/)
- [字节跳动56亿美元订单 — abhishek gautam](https://www.abhs.in/blog/huawei-ascend-950pr-bytedance-alibaba-cuda-compatible-nvidia-china-2026/)
- [中芯国际 AI 芯片战略2026 — Enkiai](https://enkiai.com/ai-market-intelligence/smic-ai-chip-strategy-2026-inside-chinas-5nm-power-play/)
- [寒武纪50万颗目标 — Tom's Hardware](https://www.tomshardware.com/tech-industry/semiconductors/cambricon-targets-500000-ai-chips-in-2026-as-china-accelerates-domestic-hardware-push)
- [DeepSeek V4 1.6万亿参数 — Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/deepseek-launches-1-6-trillion-parameter-v4-on-huawei-chips-as-us-escalates-ai-theft-accusations)
- [华为 Ascend 路线图 — Tom's Hardware](https://www.tomshardware.com/tech-industry/semiconductors/huawei-unveils-ascend-roadmap-backed-by-in-house-hbm)
- [华为 Ascend 产能爬坡与 HBM 瓶颈 — SemiAnalysis](https://newsletter.semianalysis.com/p/huawei-ascend-production-ramp)
- [DeepSeek V4 与 Ascend 950PR 解析 — TrendForce](https://www.trendforce.com/news/2026/04/07/news-decoding-deepseek-v4-how-huaweis-ascend-950-pr-is-powering-chinas-push-to-break-cuda-dependence/)

## Follow-up

- Analyst: offshore-strategist
- Topic: 港股资金流向：北向资金与机构持仓对中芯国际、华虹半导体的定价影响
- Question: 在 DeepSeek V4 发布后，港股通北向资金和国际机构投资者的持仓变动，是否已充分反映了中芯国际（0981.HK）和华虹半导体（1347.HK）的 AI 供应链受益逻辑？当前估值是否存在错误定价机会？
