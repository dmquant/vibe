---
source: ai-institute
resource_type: whiteboard-card
card_index: 8
status: completed
analyst_level: "综合编审"
---

# 物理 AI 篮子可保留为工作版建议，但在补足 Card 05 引用和 Card 07 压力测试桥表前不能作为 clean final 归档。

Analyst: **QA Manager**
Status: **completed**
Stance: **synthesize**
Completed: **29/04/2026, 19:30:53**

## Links

- Whiteboard topic: [[物理 AI 的生产要素变迁：从芯片到氦气与能源]]
- Card topic: [[物理 AI 篮子可保留为工作版建议，但在补足 Card 05 引用和 Card 07 压力测试桥表前不能作为 clean final 归档。]]
- Analyst: [[QA Manager]]
- Analyst level: [[综合编审]]

## Topic

物理 AI 篮子可保留为工作版建议，但在补足 Card 05 引用和 Card 07 压力测试桥表前不能作为 clean final 归档。

## Question

Investigate the topic "物理 AI 篮子可保留为工作版建议，但在补足 Card 05 引用和 Card 07 压力测试桥表前不能作为 clean final 归档。" and make the strongest evidence-based judgment you can.

## Summary

终审评级为 needs-revision。Cards 01-07 的主线和 GW 情景链条基本连贯：Card 02 的 18-25 GW、Card 03 的 14-20 GW / 9-13 GW、Card 04 的材料弹性可以衔接；最终组合方向也可保留。但 Card 05 的新宙邦 70%+ GM/订单能见度、菲利华 55% Rubin M9 份额、立讯 GB200 socket 等微观断言需要直接引用或降级；Card 07 必须修正 -10.1% 概率加权与 -26.5% Severe 情景的标签，并补组合压力测试桥表。

## Report

# Card 08 - 物理 AI 链条终审 QA

**分析师：**研究质量主管  
**立场：**synthesize  
**评级：****needs-revision**

## 核心判断

我支持 Cards 01-07 的研究方向，但不建议按当前版本直接归档为最终可交付建议。2026-2028 物理 AI 篮子可以保留为工作版配置，但需要一次短修订后再作为正式成果发布。

主要问题不是叙事断裂。核心链条是连贯的：AI 稀缺性从芯片可得性转向可部署电力、电网接入、液冷、特气/材料和已认证 socket。GW 情景链条从 Card 02 到 Cards 03-04 也基本连续。真正的问题更窄但重要：若干高置信度微观断言和一个风险数字标签不够严谨，不适合直接进入最终版本。

最终评级：**needs-revision**。不应判 fail，因为 thesis、情景结构和组合构建都可用；也不应判 pass，因为归档版本会留下 Card 05 的未充分支撑断言和 Card 07 的风险数字表述歧义。

## 工作区完整性检查

实时工作区没有包含 session snapshot 中列出的全部文件。实际可读文件为：

| 文件组 | 实时工作区状态 | QA 处理 |
|---|---|---|
| `card-03/report.en.md`、`card-03/report.zh.md`、`card-03/meta.json` | 存在 | 直接读取，用于 3x/10x 效率压力测试审计。 |
| `card-04/report.en.md`、`card-04/report.zh.md`、`card-04/meta.json` | 存在 | 直接读取，用于材料弹性连续性审计。 |
| `session-brief.md`、`analyst-catalog.json`、`card-01`、`card-02`、`card-05`、`card-06`、`card-07` 文件 | 本地缺失 | 根据用户提供的 session snapshot 重建上下文。 |

这是交付质量问题。当前卡片可以继续完成，但最终 whiteboard archive 在发布前应恢复或重建缺失的上游文件。

## 数字连续性审计

### 1. GW 账目：通过，但需补充方法说明

GW 逻辑内部可用。

| 链条节点 | 数字 | QA 结论 |
|---|---:|---|
| Card 02 西部枢纽 AI IT 负荷基线 | 2028 年 18-25 GW | 可作为锚点接受，依据 session snapshot。 |
| Card 03 3x 效率情景 | 14-20 GW，117k-167k 高密度机柜 | 与 Card 03 的需求回补假设一致，不是简单除以 3。 |
| Card 03 10x 效率情景 | 9-13 GW，75k-108k 高密度机柜 | 与同一框架一致；这是部署负荷下行情景，不是有效推理能力坍塌。 |
| Card 04 材料压力测试 | 沿用 18-25、14-20、9-13 GW | 与 Card 03 连续。 |

修订建议：最终版应在方法框中明确，3x/10x 情景是**需求回补后的部署负荷情景**，不是把电力负荷机械除以 3 或 10。这样可以避免读者误判为数字不一致。

### 2. 材料弹性：通过

Card 04 与 Card 03 数字一致。它把 18-25 GW、14-20 GW 和 9-13 GW 情景映射到材料指数，同时没有把所有材料都误写成直接 GW 乘数。

最值得肯定的是它区分了不同物理驱动：

| 板块 | 压力测试行为 | QA 结论 |
|---|---|---|
| 冷却材料 | 更接近负荷弹性；3x 指数 75-85，10x 指数 45-60 | 与机柜数量下降一致。 |
| 设施铜 | 按 27 t/MW，基线 486-675 kt，3x 为 378-540 kt，10x 为 243-351 kt | 算术连续。 |
| 工业气体 | 对西部枢纽 GW 的 beta 较低，更依赖半导体、光学和供应安全 | 正确避免了“AI GW 等于氦气需求”的线性叙事。 |
| 光学材料 | 3x 指数 90-105，10x 指数 75-95 | 合理，因为带宽强度可部分抵消机柜数量下降。 |

Card 03 到 Card 04 的桥接不需要重写。

### 3. Card 05 毛利率和份额断言：需要修订

以下断言不应在缺少直接引用或降级表述的情况下归档：

| 断言 | QA 状态 | 必要修订 |
|---|---|---|
| Capchem / 新宙邦在氟化液或冷却液替代品中有 70%+ 高毛利订单能见度 | 仅凭可见的 Card 04 证据无法支撑。Card 04 支撑的是 HFE/PFPE 产能和扩产，不支撑 70%+ GM 或客户订单能见度。 | 添加直接来源、调研附录，或降级为“披露 HFE/PFPE 产能的 A 股冷却液化学最佳代理”。 |
| Feilihua 在 Rubin M9 PCB 石英布中有 55% 份额 | 仅凭可见的 Card 04 证据无法支撑。Card 04 支撑的是高端石英/合成二氧化硅暴露，不支撑 Rubin M9 份额。 | 添加来源并定义分母，或降级为“高端石英/合成二氧化硅合格代理”。 |
| Luxshare 锁定 NVIDIA GB200 高速连接器核心 socket | 方向上可由 Card 04 对 224G copper、800G optics 和一体化数据中心解决方案的披露部分支持，但“锁定 NVIDIA GB200 核心 socket”强于本地可见证据。 | 引用具体客户/socket 来源，或改写为“A 股高速铜、光、电源和热管理 socket 最佳代理”。 |

这些不是单纯编辑问题。它们会决定最终组合是基于证据的研究，还是基于高置信外推。

### 4. Card 06 和 Card 07 EBIT 压力测试数字：需要修订

Card 06 的风险数字可以使用，但必须贴正确标签：

| Card 06 数字 | 正确解释 |
|---|---|
| -10.1% | 在 Base/Moderate/Severe 概率 45/35/20 下的概率加权 EBIT 折扣。 |
| -26.5% | 等权核心 socket 压力篮子的 Severe 情景 EBIT 损失。 |

Card 07 不应把 -26.5% 称为“probability-weighted severe”数字。它是 Severe 情景数字。Card 07 可以说新组合目标是把 Severe 情景损失压到约 -14% 至 -16%，但前提是展示同一套冲击矩阵如何作用于 Luxshare、Capchem、Feilihua、NARI、Invicool 和 Hangyang。否则就是拿三只等权压力篮子与新的五只股票组合做不完全可比的比较。

必要修订：增加一张简洁压力测试表：

| 持仓 | 权重 | Base EBIT 冲击 | Moderate EBIT 冲击 | Severe EBIT 冲击 | 对冲假设 |
|---|---:|---:|---:|---:|---|
| Luxshare | 25% | 待补充 | 待补充 | 待补充 | 无，或明确 FX/关税缓释。 |
| NARI | 22% | 待补充 | 待补充 | 待补充 | 国内电网设备需求抵消。 |
| Invicool | 18% | 待补充 | 待补充 | 待补充 | 机柜数量和价格风险敏感度。 |
| Hangyang | 15% | 待补充 | 待补充 | 待补充 | 工业气体多元化。 |
| Capchem，对冲后 | 12% | 待补充 | 待补充 | 待补充 | 25% 名义对冲：需定义工具和 beta。 |
| 预备金 | 8% | 待补充 | 待补充 | 待补充 | Feilihua / YOFC 启用规则。 |

在补充前，-14% 至 -16% 的 Severe 损失结论只能作为组合经理估算，而不是已审计数字。

## 叙事一致性审计

整体叙事弧线是连贯的：

1. Card 01 把 AI 稀缺从“计算 IP”重构为“可部署算力”。
2. Card 02 把瓶颈落到西部枢纽 GW、电网接入和液冷。
3. Card 03 用 DeepSeek V4 级效率跃迁压力测试负荷斜率，并通过需求回补保留主线。
4. Card 04 按物理驱动区分材料，而不是把所有材料都视为线性机柜衍生品。
5. Card 05 从材料推进到已认证制造 socket。
6. Card 06 加入地缘尾部风险折扣。
7. Card 07 把链条转换为组合配置。

最弱的叙事连接点是 Card 05。它从“披露产能和产品暴露”跳到“具体客户/socket/份额/毛利率确定性”的速度快于当前工作区可见引用所能支撑。只要 Card 05 降级表述或补足脚注，Card 07 对 Luxshare 的超配和对冲后保留 Capchem 暴露就仍然连贯。

## 引用纪律

引用纪律参差不齐：

| 区域 | QA 评级 | 原因 |
|---|---|---|
| Card 03 | Pass | 对国家数据中心锚点、DeepSeek V4 假设、H100/GB200 归一化和 TMT 公司披露都有明确引用。 |
| Card 04 | Pass | 引用了 USGS、ASML、公司公告、Uptime、Vertiv、BHP、WEF 和光学材料公司披露。 |
| Card 05 | Needs revision | snapshot 中最重要的 70%+ GM/订单能见度和 55% Rubin M9 份额，无法从本地可见文件核验。 |
| Card 06 | Conditional pass | snapshot 中情景标签和公司压力区间清楚，但模型需要保留在归档文件中。 |
| Card 07 | Needs revision | 组合权重清楚，但 Severe 损失对比需要显式桥接表，并修正措辞。 |

## 最终组合判断

最终组合应保留为**准最终工作版建议**，但不应作为 clean final 直接归档。

| 持仓 | 权重 | QA 决策 |
|---|---:|---|
| Luxshare Precision (002475) | 25% | 保留。它是跨情景的连接器、铜互连、光、电源和热管理最佳代理，但除非补足来源，否则避免使用“锁定 GB200 socket”措辞。 |
| NARI Technology (600406) | 22% | 保留。10x 效率情景下仍具韧性，因为电网接入和控制仍稀缺。 |
| Invicool (002837) | 18% | 保留，但需表述为高密度机柜部署的高 beta 标的；10x 情景是显性风险。 |
| Hangyang Group (002430) | 15% | 保留。作为防御性工业气体和设备锚合理；不要把它写成纯“每 GW 氦气乘数”。 |
| Capchem (300037)，对冲后 | 12% | 有条件保留。持仓逻辑合理，但 70%+ GM/订单能见度必须补来源或删除。 |
| 预备金 | 8% | 保留，但要明确 Feilihua / YOFC 的启用规则：来源验证或估值重置后再部署。 |

## Pass 前必须完成的修订

1. 恢复或重建 `session-brief.md`、`analyst-catalog.json` 以及 Cards 01、02、05、06、07 的本地文件。
2. 为 Capchem 70%+ GM/订单能见度和 Feilihua 55% Rubin M9 份额添加直接引用；若无法补足，则降级表述。
3. 修正 Card 07 措辞：-10.1% 是概率加权；-26.5% 是 Severe 情景。不要把 -26.5% 称为概率加权。
4. 增加组合层面的 Base/Moderate/Severe 压力测试表，证明最终权重和对冲下 -14% 至 -16% 的 Severe 损失估算。
5. 添加一段方法说明，解释为什么 3x 和 10x 推理效率对应 14-20 GW 和 9-13 GW 部署情景，而不是机械除法得到的 6.0-8.3 GW 和 1.8-2.5 GW。

## 最终评级

**Needs revision。** 这条研究线值得保留，最终组合也是一个合理的 2026-2028 物理 AI 工作版配置。但它还不是干净的归档级可交付成果，因为 Card 05 的若干微观断言强于当前可见引用链，Card 07 也需要修正压力测试数字标签并补充透明的组合压力测试桥。

## 交接

不建议继续交给新的分析师。下一步应由原卡片负责人做编辑和模型控制修订，而不是新增研究卡。
