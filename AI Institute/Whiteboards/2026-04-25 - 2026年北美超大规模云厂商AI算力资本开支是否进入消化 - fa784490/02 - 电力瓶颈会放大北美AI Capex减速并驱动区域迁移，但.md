---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "行业研究"
---

# 电力瓶颈会放大北美AI Capex减速并驱动区域迁移，但只有在PJM等核心节点才构成独立物理硬约束，中国侧2026-2028年不是全国性缺电约束。

Analyst: **Energy Analyst**
Status: **completed**
Stance: **stress-test**
Completed: **25/04/2026, 18:25:33**

## Links

- Whiteboard topic: [[2026年北美超大规模云厂商AI算力资本开支是否进入消化期]]
- Card topic: [[电力瓶颈会放大北美AI Capex减速并驱动区域迁移，但只有在PJM等核心节点才构成独立物理硬约束，中国侧2026-2028年不是全国性缺电约束。]]
- Analyst: [[Energy Analyst]]
- Analyst level: [[行业研究]]

## Topic

电力瓶颈会放大北美AI Capex减速并驱动区域迁移，但只有在PJM等核心节点才构成独立物理硬约束，中国侧2026-2028年不是全国性缺电约束。

## Question

Investigate the topic "电力瓶颈会放大北美AI Capex减速并驱动区域迁移，但只有在PJM等核心节点才构成独立物理硬约束，中国侧2026-2028年不是全国性缺电约束。" and make the strongest evidence-based judgment you can.

## Summary

电力约束真实存在，但不是全美统一的36-48个月排队。PJM核心节点因输电、变电、许可和容量市场叠加，更接近独立物理硬约束；ERCOT弹性更高，但大型负荷请求暴增后需要通过保证金、可中断规则和输电建设筛选。美国2026-2028年核电重启、SMR、燃气联合循环和储能均只能部分缓解，难以彻底解除PJM约束。中国电力供给弹性显著强于美国，主要约束转向低时延区域错配、绿电核证、稳定电源和算力利用率。

## Report

# AI数据中心电力需求约束的真实性：PJM/ERCOT与中国供给弹性压力测试

> 分析师：energy-analyst（能源行业分析师） | 立场：stress-test | 日期：2026-04-25

## 核心判断

我对上一张 TMT 卡片的“电力瓶颈导致北美 AI Capex 进入消化期”做压力测试后的结论是：**电力约束真实存在，但不能简单理解为全美统一的 36-48 个月排队；它在 PJM/北弗吉尼亚更接近独立物理硬约束，在 ERCOT 更像高弹性但高不确定性的排队与筛选机制。对 hyperscaler 总 Capex 来说，它更可能放大减速、改变区域结构和电源结构，而不是单独决定全球 AI Capex 下行。中国侧电力供给弹性明显强于美国，2026-2028 年更可能面临的是东部低时延算力、电力质量、绿电真实性和利用率约束，而不是全国性缺电硬约束。**

## 1. 对“36-48个月并网排队”的核验

| 区域 | 压力测试结论 | 证据与解释 |
|---|---|---|
| PJM | **方向成立，数字偏保守；但应区分“研究周期”和“真正可用电周期”** | PJM 官方材料显示，改革后新发电项目取得并网协议的研究周期目标为 1-2 年，但实施阶段通常还需要 3 年以上；PJM 还提示已有约 46GW 签署并网协议的项目受许可、选址、供应链等非 PJM 因素阻碍。也就是说，若从大型负荷选址、输电升级、变电设备到可商业运行计算，36-48 个月并不夸张。 |
| ERCOT | **不是统一硬性排队时间，但 firm 级别大负荷接入已进入筛选期** | ERCOT 2025 年大型负荷请求暴增，公开报道援引 ERCOT 董事会材料称，2025 年底附近有超过 233GW 大型负荷并网请求，70% 以上来自数据中心，流程已“outgrown”。ERCOT 资源弹性高于 PJM，但这也意味着申请量虚高、落地率不确定，真正获得 firm service 的项目仍受输电、变压器、备用容量和可中断条款约束。 |
| 结论 | **“36-48个月”不应当作为精确官方统计引用，但可作为 100MW+ AI 数据中心从签约到稳定送电的现实工程周期假设** | TMT 侧若把它当成“全国平均排队”，会高估约束；若把它当成“PJM/北弗吉尼亚及部分 ERCOT 节点的可用电周期”，则基本合理。 |

关键点在于，AI 数据中心买的是“可稳定运行的电”，不是纸面装机容量。PJM 的瓶颈不是单一并网申请表，而是容量市场、输电扩建、变电站、主变压器、地方许可、天然气管线、负荷预测可信度的叠加。ERCOT 的瓶颈则更市场化：能更快接入，但需要接受更高价格波动、更强可中断义务或更重的自备电源成本。

## 2. 美国 2026-2028 年边际电源能否显著缓解

### 核电重启：有信号意义，量级不足

Constellation 与 Microsoft 的 Three Mile Island Unit 1 重启目标是 2028 年，单机组约 800MW 级别；AWS 与 Talen/Susquehanna 的交易也证明核电适合数据中心的 24/7 负荷曲线。EIA 指出，核电单机通常在 800MW 以上，且与数据中心稳定用电特征匹配。

但这类项目的本质更多是**把既有或重启基荷电源锁定给数据中心**，不是在 2026-2028 年快速复制 10GW 级新增可靠容量。它缓解的是少数 anchor tenant 的碳约束与供电确定性，无法解决 PJM 系统层面到 2030 年约 30GW 数据中心负荷增量。

### SMR：2028年前基本不能作为供给变量

SMR 对 AI 数据中心叙事很强，但 2026-2028 年对北美实际可用电量贡献接近零。问题不在单一技术路线，而在许可、首堆工程、供应链、燃料、责任分摊和并网规则。把 SMR 纳入 3 年缓解方案，会高估供给弹性。

### 燃气联合循环：最现实，但也不是“即插即用”

EIA 2025 年材料显示，美国开发商计划到 2028 年新增 18.7GW 燃气联合循环容量，其中 4.3GW 已在建。相较核电和 SMR，CCGT 是最能在 3-5 年内形成稳定电量的技术路线。

但三点会限制其对 AI 负荷的即时缓解：

1. 燃机、主变和高压设备交付周期拉长，项目排队从电网侧延伸到设备侧。
2. PJM 许多项目即便拿到协议，也还要过许可、融资、燃气管线和输电升级。
3. 数据中心需要的是高可用容量；单纯新增燃机若缺少管网、容量市场收入和输电送出，并不能直接变成可接入负荷。

### 太阳能与储能：能压低电量成本，但不能单独提供 24/7 AI 电力

EIA 预计 2026 年美国新增公用事业级发电容量可达 86GW，创纪录，其中太阳能占 51%、电池储能占 28%、风电占 14%。这对 ERCOT 尤其重要，因为 Texas 的太阳能和电池建设速度快，能缓解夏季峰值和日内价格波动。

但对 AI 数据中心，太阳能和 2-4 小时储能主要解决“电量”和“峰段调节”，不能单独解决 24/7 firm capacity。它们必须与燃气、核电、需求响应、可中断负荷和更强输电配套使用。

## 3. PJM 与 ERCOT 的差异：一个偏硬约束，一个偏弹性筛选

**PJM：物理硬约束更强。** PJM 2025 年回顾材料称，数据中心负荷增长预计 2025-2030 年最高约 30GW，且 PJM 夏季峰值未来 15 年可能增加约 70GW 至 220GW。PJM 还在通过 Critical Issue Fast Path、RTEP 输电规划、共同选址和负荷灵活性规则应对大型负荷。FERC 2026 年材料也要求 PJM 建立共同选址、非 firm 输电服务和负荷灵活性安排，说明监管层承认原有规则无法顺畅吸收 AI 大负荷。

我的判断：**PJM 尤其是 Northern Virginia、Ohio、Pennsylvania 部分节点，对 2026-2028 年新增 AI 数据中心是独立物理硬约束。** 这不是多花钱就能立刻解决的问题。Transmission、substation、transformer 和 local permitting 的长周期会把服务器采购节奏拖慢。

**ERCOT：弹性更强，但不等于无限供电。** ERCOT 有更快的新能源和储能部署、更市场化的价格信号、较宽松的工业选址条件，也有 765kV 输电骨干项目推进。但 233GW 级大型负荷请求与 432GW 级发电并网请求本身说明：排队已经含有大量期权式申请，未来会通过保证金、可中断条款、负荷预测标准化和用电合同严肃性来筛选。

我的判断：**ERCOT 可以吸收更多 AI 负荷，但代价是电价波动、可中断风险和自备燃气/储能 Capex 上升。** 它更像“可迁移 Capex 的承接地”，不是完全解除电力约束的避风港。

## 4. 中国智算电力供给弹性

中国侧与美国的核心差别不只是装机规模，而是规划体制、输电投资、煤电兜底和“东数西算”的空间调度能力。

截至 2025 年底，中国累计发电装机容量 38.9 亿千瓦，同比增长 16.1%；其中太阳能 12.0 亿千瓦、风电 6.4 亿千瓦，风光合计 18.4 亿千瓦。这个新增供给斜率远高于中国智算中心负荷增量本身。2024 年《数据中心绿色低碳发展专项行动计划》还要求到 2025 年底全国数据中心平均 PUE 降至 1.5 以下、可再生能源利用率年均增长 10%。

因此，中国 2026-2028 年的约束更可能表现为：

- **区域错配**：东部 AI 应用和推理需求强，但电力、土地、环评和低成本绿电不如西部宽松；西部电力强但本地需求、网络时延和算力利用率较弱。
- **稳定电源与绿电匹配**：风光资源充足，但高负载训练和连续推理仍需要煤电、气电、水电、核电或储能提供稳定支撑。
- **利用率约束**：如果模型应用、行业需求和芯片供给跟不上，电力不是第一瓶颈，算力闲置反而会成为更大风险。
- **政策效率约束**：绿证、绿电交易、源网荷储、增量配网可以改善供给弹性，但“证电合一”和物理绿电匹配仍在推进中。

中国信通院《绿色算力发展研究报告（2025）》指出，数据中心超过 80% 的绿电消费通过市场化采购实现，自发自用清洁能源占比普遍不足 2%；同时储能可替代部分柴油备用并参与调峰调频。这说明中国的供给弹性强，但绿色算力的瓶颈正在从“有没有电”转向“电是否低碳、稳定、可核证、可调度”。

## 5. 对 TMT Capex 消化期判断的修正

我不建议把电力约束写成“AI Capex 下行的唯一因果”。更稳健的因果链是：

1. **ROI 与折旧压力决定 Capex 意愿**：模型价格下降、折旧年限缩短、推理收入验证，会让 hyperscalers 主动筛选项目。
2. **电力约束决定 Capex 可落地速度**：PJM 等核心区域的送电周期会让部分项目延期、改址或改成共同选址/自备电源。
3. **区域与电源结构决定 Capex 分流**：北美从 Northern Virginia 向 Texas、MISO、Southeast、behind-the-meter gas 与核电 PPA 分流；中国从东部低时延资源向西部绿电集群分流。

因此，本卡对上一张卡的修正是：**支持“电力瓶颈放大北美 Capex 减速”，但否认“电力瓶颈单独导致全球 AI Capex 消化期”。在 PJM 核心节点，它是硬约束；在北美总量层面，它是放大器和结构迁移器；在中国侧，它不是 2026-2028 年的主要硬约束。**

## 6. 投资含义

| 方向 | 判断 |
|---|---|
| 美国电力设备 | 变压器、高压开关、GIS、配电自动化、备用电源和燃机服务景气度更扎实，因为瓶颈已经从发电量延伸到送出和接入。 |
| 美国燃气链 | CCGT、燃机、燃气管线和现场发电具备 3 年内兑现性，但估值需警惕设备交付和环保许可不确定性。 |
| 储能 | ERCOT 受益更直接；PJM 储能对峰值和辅助服务有价值，但不能单独解决 AI 数据中心的 24/7 可靠电源。 |
| 核电 | 现役核电 PPA 和重启项目具备稀缺溢价；SMR 在 2026-2028 年更多是期权，不应计入可用产能。 |
| 中国电力设备与绿电 | 特高压、配网、源网荷储、液冷、绿电交易和西部算力集群更受益；但应关注智算中心利用率与地方重复建设风险。 |

## 7. 未来 60-90 天观察指标

1. **PJM 2028/29 与 2029/30 容量拍卖价格区间**：若价格仍维持高位，说明系统对 AI 负荷的容量成本尚未消化。
2. **PJM expedited interconnection track 是否获批及首批项目清单**：关注是否真能在 3 年内形成可用容量，而不只是缩短研究流程。
3. **ERCOT SB 6 细则与大型负荷保证金/可中断规则**：这是判断 233GW 请求中真实负荷占比的关键。
4. **美国燃机订单交付期与主变价格**：若交付期继续拉长，电力设备会成为比发电项目更硬的瓶颈。
5. **中国运营商智算中心上架率与 PUE/绿电比例**：若上架率低于预期，说明中国侧瓶颈不是电而是需求兑现和资源调度。

## 8. 主要参考资料

- PJM：《[2025 Year in Review: Planning Prepares for Burgeoning Electricity Demand](https://insidelines.pjm.com/2025-year-in-review-planning-prepares-for-burgeoning-electricity-demand/)》，披露数据中心负荷 2025-2030 年最高约 30GW、长期峰值增长和 RTEP/大负荷规划进展。
- PJM：《[Generation Interconnection Reform Progress Fact Sheet](https://www.pjm.com/-/media/DotCom/about-pjm/newsroom/fact-sheets/interconnection-reform-progress-fact-sheet.pdf)》，披露改革后 1-2 年研究周期、46GW 已签约未建、63GW 转换队列等。
- PJM：《[Commercial Deployment of New Generation](https://www.pjm.com/-/media/DotCom/committees-groups/committees/mrc/2024/20240925/20240925-item-09---pjm-interconnection-queue---presentation.ashx)》，披露 2 年研究周期、3 年以上实施阶段与项目状态。
- FERC：《[Energized for 2026](https://www.ferc.gov/news-events/news/energized-2026)》与《[PJM co-location fact sheet](https://www.ferc.gov/news-events/news/fact-sheet-ferc-directs-nations-largest-grid-operator-create-new-rules-embrace)》，说明共同选址、负荷灵活性和快速接入路径的监管方向。
- EIA：《[New U.S. electric generating capacity expected to reach a record high in 2026](https://www.eia.gov/todayinenergy/detail.php?id=67205)》，披露 2026 年美国计划新增 86GW 公用事业级容量及结构。
- EIA：《[Electric generators plan more natural gas-fired capacity after few additions in 2024](https://www.eia.gov/todayinenergy/detail.php?id=65464)》，披露 2028 年前计划新增 18.7GW CCGT。
- EIA：《[Data center owners turn to nuclear as potential electricity source](https://www.eia.gov/todayinenergy/detail.php?id=63304)》，说明核电与数据中心 24/7 稳定负荷的匹配性。
- Utility Dive：《[ERCOT’s large load queue jumped almost 300% last year](https://www.utilitydive.com/news/ercots-large-load-queue-jumped-almost-300-last-year-official/808820/)》，援引 ERCOT 材料披露大型负荷请求、数据中心占比、发电并网请求和 765kV 项目进度。
- 国家能源局：《[2025年全国电力统计数据](https://nnsa.mee.gov.cn/ywdt/hyzx/202601/t20260129_1142949.html)》，披露中国总装机、太阳能和风电装机。
- 中国政府网：《[数据中心绿色低碳发展专项行动计划](https://www.gov.cn/lianbo/bumen/202407/content_6964334.htm)》，披露 PUE、上架率和可再生能源利用率目标。
- 中国信通院：《[绿色算力发展研究报告（2025年）](https://www.caict.ac.cn/english/research/whitepapers/202509/P020250903609386521052.pdf)》，披露绿电绿证、储能、源网荷储与算力调度趋势。

## 9. 交接建议

下一张卡建议交给 **utilities-analyst（公用事业分析师）**，从电价、容量市场、输配电投资和公用事业监管角度继续拆解：如果电力瓶颈不是伪命题，那么哪些环节能把 AI 负荷增长转化为确定收入，哪些只是订单叙事。

建议问题：**PJM/ERCOT 的容量价格、输电投资与大负荷接入规则变化，能否在 2026-2028 年形成公用事业和电力设备公司的可验证盈利弹性？**

**置信度自评**：0.74。PJM 与 EIA 官方材料对方向支持较强；ERCOT 大型负荷的真实落地率仍高度不确定；中国侧公开数据证明供给弹性强，但智算利用率和绿电物理匹配仍需后续验证。

## Follow-up

- Analyst: utilities-analyst
- Topic: AI数据中心负荷增长对PJM/ERCOT容量价格、输配电投资和公用事业盈利弹性的传导
- Question: PJM/ERCOT的容量价格、输电投资与大负荷接入规则变化，能否在2026-2028年形成公用事业和电力设备公司的可验证盈利弹性？
