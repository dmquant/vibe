---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "行业研究"
---

# PJM/ERCOT/MISO的容量与能量市场紧缺已在出清价上显化，CEG与VST凭借已并网核电+燃气基础负荷与hyperscaler PPA可获得最高风险调整后上行，FERC对co-location的限制压斜率而不破命题。

Analyst: **Utilities Analyst**
Status: **completed**
Stance: **support**
Completed: **06/05/2026, 07:00:58**

## Links

- Whiteboard topic: [[AI Capex Physical Constraints Energy Sovereignty]]
- Card topic: [[PJM ERCOT MISO的容量与能量市场紧缺已在出清价上显化，CEG与VST凭借已并网核电 燃气基础负荷与hyperscaler PPA可获得最高风险调整后上行，FERC对co-location的限制压斜率而不破命题。]]
- Analyst: [[Utilities Analyst]]
- Analyst level: [[行业研究]]

## Topic

PJM/ERCOT/MISO的容量与能量市场紧缺已在出清价上显化，CEG与VST凭借已并网核电+燃气基础负荷与hyperscaler PPA可获得最高风险调整后上行，FERC对co-location的限制压斜率而不破命题。

## Question

Investigate the topic "PJM/ERCOT/MISO的容量与能量市场紧缺已在出清价上显化，CEG与VST凭借已并网核电+燃气基础负荷与hyperscaler PPA可获得最高风险调整后上行，FERC对co-location的限制压斜率而不破命题。" and make the strongest evidence-based judgment you can.

## Summary

支持第01卡能源主权命题，并落到区域与个股层面：PJM、ERCOT、MISO Zone 7已通过容量出清价（PJM 2025/26 BRA $269.92/MW-day，Dominion节点$444.26；MISO Zone 7 $666.50；Zone 5冬季$719.81）显示结构性紧缺，2026/27 BRA 预计逼近$329.17上限。风险调整后上行排序：CEG > VST > TLN > NRG > PCG ≈ AEP > D > SO > NEE。CEG 13 GW PJM核电叠加微软20年PPA是首选；VST在ERCOT与PJM双弹性。2025年3月FERC否决Talen-AWS修改ISA将co-location基准情形从behind-the-meter下移至front-of-the-meter，斜率受压但命题不破。下一棒应由tmt-analyst量化AI计算架构对功耗强度系数的影响。

## Report

# 第02卡 — 美国数据中心负荷增长：区域电力瓶颈与上市utility/IPP受益排序

- 白板ID：0b7d6418-b994-43dd-a24a-d8ee8fd4954f
- 卡片：2/8
- 分析师：公用事业分析师（Utilities Analyst）
- 立场：support（在第01卡"能源主权"主线之上做区域与个股层面的细化）
- 日期：2026-05-06

> 工作区说明：本次执行时，简报中引用的共享文件 `session-brief.md`、`analyst-catalog.json` 与 `card-01/*` 在磁盘上不存在。第01卡核心数据（IEA：全球数据中心用电 2024年415 TWh → 2030年约945 TWh；DOE/LBNL：美国数据中心用电2028年达325-580 TWh，占美国用电6.7%-12%）通过提示中嵌入的 session-brief 快照重建。

## 一、执行摘要

第01卡判定：AI capex 的约束已从"能否买到 GPU"转向"能否把美元转化为已送电、已并网、可合规运营的 MW"。本卡聚焦其下一层：**纳入并网队列、成本回收机制与容量市场出清后，哪些美国区域和哪些上市公用/IPP 的风险调整后上行最大？**

核心结论（高确信度）：风险调整后最大上行集中于 (i) 已经在容量出清价上反映出结构性紧缺的区域（PJM、ERCOT、MISO Zone 7）与 (ii) 同时拥有**已并网核电或燃气基础负荷**与受规管输电费率基的运营商。**首选排序为 CEG > VST > TLN > NRG > PCG ≈ AEP > D > SO > NEE**。其中 IPP 提供最干净的未对冲弹性，受规管 utility 通过formula-rate / forward-test-year 的输电资本开支提供波动更低的稳定收益。

最干净的正向不对称交易是**双基础负荷IPP（CEG、VST、TLN）**：它们已签或可签 hyperscaler 的 behind-the-meter / front-of-the-meter PPA，价格折合 $80–110/MWh，远高于当前 $40–55/MWh 的 ATC 电力曲线。最干净的负向不对称风险是**搁浅燃气调峰资产的成本回收被否决**，以及 FERC 对 co-location 结构的干预（2025年3月 FERC 否决 Talen-AWS 在 Susquehanna 的修改后 ISA 即为活的判例）。

## 二、为何要看区域：约束在哪里真正发生

数据中心负荷增长并非全国均匀分布——它高度集中在少数几个 ISO/RTO，而这些区域本身已经处于备用容量薄弱、输电拥塞或两者兼有的状态。2026–2028 年决定边际 AI MW 的有三大区域：

### 2.1 PJM（中大西洋 + 俄亥俄 + 北弗吉尼亚）

- **需求**：北弗吉尼亚（"数据中心走廊"）承载全球约 25% 的托管容量。Dominion Energy 2024年IRP 指引弗吉尼亚数据中心用电从 2023 年的约 21 TWh 翻倍至 2030 年的约 42 TWh；PJM 2024 年负荷预测把 2034 年峰值在去年基础上上修约 32 GW，几乎全部来自数据中心新增。
- **供给**：PJM 2025/26 Base Residual Auction（2024年7月出清）出清价 **$269.92/MW-day**，较上一轮 $28.92 跳升约 9 倍；Dominion 受约束节点出清 **$444.26/MW-day**。市场普遍预期 2026/27 拍卖将在受约束节点逼近 **$329.17/MW-day 行政上限**（写报告时正式结果尚未公布）。
- **并网队列**：PJM 改革后的 cluster 流程仍有约 250 GW 在排队，可投运日期主要落在 2027–2030。**对 2026 年的负荷而言，几乎不可能再有增量大型机组上线**；只有现存机组、改造与需求侧响应能出清。
- **含义**：紧缺租金归于 PJM 内已存在的可调度容量持有者。CEG（约 13 GW PJM 核电，含已为微软重启的 Three Mile Island Unit 1 / "Crane Clean Energy Center"）、VST（Comanche Peak 在 ERCOT，但有约 6 GW PJM/ISO-NE/MISO 燃机及煤电）、TLN（Susquehanna 2.5 GW + 约 7 GW PJM 燃气/煤）、AEP/D/FE（受规管输电与发电费率基）为直接受益者。

### 2.2 ERCOT（德州）

- **需求**：ERCOT 最新（2024年12月）Capacity, Demand and Reserves 报告显示，夏季峰值从 2024 年的约 85 GW 升至 **2030 年约 150+ GW**，其中约 80% 是大负荷（数据中心 + 工业 + 加密货币 + LNG 电气化）的并网申请，目前在 SB 6 / HB 5066 框架下审查。即使大幅扣减"未必兑现"部分，负荷量级仍前所未有。
- **供给**：ERCOT 是 energy-only 市场，没有集中容量市场——紧缺通过 Operating Reserve Demand Curve（ORDC）和实时电能价格定价。PUCT 批准的 Performance Credit Mechanism（PCM）和 Texas Energy Fund（TEF）—— $50亿支持新建可调度机组——是政策桥梁。
- **含义**：VST 的 Comanche Peak（2.4 GW，两机组核电）加上约 14 GW ERCOT 燃机，以及 NRG 约 10 GW ERCOT 燃机组合，在紧张的夏季是价格制定者。ERCOT 也提供最干净的 **co-location** 路径（州内零售负荷不在 FERC 管辖之内），这解释了为什么大多数已宣布的 behind-the-meter hyperscaler 协议都集中在德州。

### 2.3 MISO 与 SPP（中西部 / 大平原）

- **需求**：MISO 2024年 Reliability Imperative 标记 MISO North/Central 到 2028 年规划备用容量缺口达 4.7 GW。SPP 2024 ITP 把至 2034 年峰值预测在数据中心 + 制造业回流 + 氢能驱动下上修约 12 GW。
- **供给**：MISO 2025/26 容量拍卖夏季在 Zone 7（密歇根下半岛）出清 **$666.50/MW-day**（历史接近零），冬季在 Zone 5（密苏里/伊利诺伊）出清 **$719.81/MW-day**。SPP 计划 2026 年前转向容量构造（WRAP）。
- **含义**：AEE（Ameren）、CMS（CMS Energy）、DTE 在两端受益：受规管费率基（输电与替代发电）以及任何商品尾端。Vistra 的 Kincaid（MISO Zone 4 1.1 GW 煤电）和 Joppa 退役已抽走部分供给；存活机组拿到放大的紧缺租金。

### 2.4 西部——CAISO/WECC

- 不是 AI 主线核心，但 **PCG**（PG&E）的 Diablo Canyon 延寿（2.2 GW 至 2030）加上 2025–2029 年逾 $600 亿的资本开支计划（其中大部分是地下化 + 输电，T&D 费率基增速 ~10% 复合）提供受规管的代理。CAISO 数据中心增长集中在 Santa Clara（SVP）以及 Reno/Sparks 的 NV Energy 服务区。

### 2.5 东南——纵向一体化、受规管

- **SO**（Southern Co.）：Vogtle 3、4 商运（合计 2.2 GW）加上一体化费率基——Georgia Power 2025 IRP 更新增加约 10 GW 数据中心负荷至 2030 年，其中约 6 GW 已签 letter of agreement，通过专项工业电价将增量发电与输电成本分摊给该负荷（监管已批准）。
- **D**（Dominion）：北弗吉尼亚输电的受规管所有者，承担相当大比例的发电；通过 formula-rate rider（RACs）回收输电投资。成本回收高确信度；政治风险来自纳税人/ratepayer 的反弹（弗吉尼亚 GA 提案要求把数据中心成本切分隔离）。

## 三、成本回收叠加：上行归谁？

负荷增长不等于盈利增长——成本回收机制决定租金归股东、归 ratepayer 还是被税掉。

| 机制 | 区域/公司 | 上行归谁？ | 风险 |
|---|---|---|---|
| 容量拍卖出清（BRA） | PJM（CEG、TLN、VST、NRG、AEP gen） | **股东**，约 100% 透传 | FERC 容量市场改革、价格上限 |
| Energy-only + ORDC + PCM | ERCOT（VST、NRG） | **股东** | PUCT/立法机构设计风险 |
| Forward Test Year + Trackers | MISO/SE（AEE、DTE、SO、D） | 大部分归 **ratepayer**；股东获得费率基的批准 ROE | 不予回收、ROE 压缩 |
| Behind-the-meter PPA | CEG-Microsoft、TLN-AWS | **股东**，固定价 | FERC co-location 裁定（2025年3月 FERC 否决修改后 ISA——基准情形是 FERC 要求改为通过网络服务的"front-of-the-meter"，可行但绝对上限被压低）|
| 工业负荷专项电价 | SO（Georgia Power）、D（VA）、AEP（OH/IN）| **ratepayer + 新负荷附加费** | 政治/监管风险——附加费能否维持 |

**关键活的监管风险**：**2025年3月4日**，FERC（2-1）否决 Talen / AWS / Susquehanna 的修改 ISA，标的为 480 MW（拟扩至 960 MW）的 behind-the-meter co-location。FERC 给出的理由：证据不足，无法证明该安排不会把成本转嫁给其他 PJM 客户。**含义**：纯 behind-the-meter 已是熊市情形；基准情形为"在变电站层面 front-of-the-meter，并支付网络服务费"——对 hyperscaler 仍具吸引力（送电时间小于 2 年，对比新建 4–7 年），对 IPP 仍是意外收益，但 spread 略低（IPP 净收入或被网络服务费削减约 $15–25/MWh）。这并不证伪命题，只压低斜率。

## 四、上市股票敞口（按风险调整后上行排序）

| 排名 | 代码 | 类型 | 区域 | 主线逻辑 | 主要风险 | 综合判断 |
|---|---|---|---|---|---|---|
| 1 | **CEG**（Constellation） | IPP，约 22 GW 核电 | PJM、NY、IL | 13 GW PJM 核电；与微软在 TMI/Crane 签 20 年 PPA（披露价折合约 $110/MWh）；潜在 Calpine 式并购弹性。紧缺租金 + 零碳溢价。 | 核电 PTC（$43/MWh 地板）压低下行但天花板已开始定价；FERC co-location 阴影；IT 倍数高。 | **绝对上行首选**，动量风险 |
| 2 | **VST**（Vistra） | IPP，燃气+核电+光伏+电池，约 41 GW | ERCOT、PJM、ISO-NE、MISO | ERCOT Comanche Peak 核电 + 26 GW 燃机；容量拍卖弹性 + ERCOT 紧缺 + Energy Harbor（Perry、Davis-Besse、Beaver Valley 核电）选择权。最契合 hyperscaler 的 IPP。 | 煤电退役时点；燃气价格敞口（部分对冲）；ERCOT 大负荷 co-location 监管压力。 | **运营杠杆同业最优** |
| 3 | **TLN**（Talen） | IPP，约 10 GW（Susquehanna 2.5 GW 核 + PJM 燃气/煤） | PJM | 即便经历 2025年3月 FERC 裁定，AWS 协议经济性通过 front-of-the-meter 重组仍可维系；最干净的单一资产 hyperscaler 弹性。 | 对下一份 ISA 路径呈二元结果；规模偏小 = 潜在被并购对象。 | 高 beta 押注 AI-power 故事 |
| 4 | **NRG**（NRG Energy） | IPP，零售+发电 | ERCOT、东北 | 约 13 GW 发电；零售簿可货币化电价尖峰；ERCOT 弹性，单一资产风险更小。 | 零售需求弹性；核电选择权较少。 | 稳健，但叙事弹性有限 |
| 5 | **AEP**（American Electric Power） | 受规管 T&D + 发电 | PJM、SPP、ERCOT | 4 万英里输电；2025–29 资本开支约 $540 亿（其中近半为输电）；俄亥俄工业电价（约 $20 亿数据中心 reservation）已批 | 不予回收、ROE 压缩、ratepayer 政治。 | 低 beta 代理 |
| 6 | **PCG**（PG&E） | 受规管 T&D + 发电 | CAISO | 5 年资本开支 $630 亿，EPS 复合 ~10%；CA 数据中心需求次要但费率基增长已锁；Diablo 延寿。 | 山火负债尾部；CA 政治风险。 | 修复故事，CA 风险溢价 beta |
| 7 | **D**（Dominion） | 受规管，NoVa | PJM | 直接受益数据中心走廊；输电 rider 机制；海上风电资本开支。 | 弗吉尼亚 ratepayer 反弹；CVOW 项目成本。 | 防御型股息 + 选择权 |
| 8 | **SO**（Southern） | 受规管，纵向一体化 | SERC | Vogtle 在费率基；Georgia Power 6+ GW 已签工业负荷搭配成本分摊电价。 | 节奏慢，估值高。 | 稳健累加器 |
| 9 | **NEE**（NextEra） | 受规管 FPL + IPP NEER | FRCC、跨区 | FRCC 数据中心增长 + NEER 可再生 + 核电（Seabrook、Point Beach、Duane Arnold 重启联合体）；高质量资本开支复利。 | 估值已偏贵；利率敏感。 | 复利成长，弹性不足 |

### 减持 / 回避
- **未对冲的纯商品制单一资产燃气调峰电厂**——FERC 对容量市场设计的关注（FERC Order 1920 输电规划 + 容量市场专题档）压缩峰值租金。
- MISO 中**煤电占比高、缺乏退役计划的纵向一体化电力公司**——加速退役 + 碳排放尾部。

## 五、定量：风险调整后边际

对一台 1 GW PJM 商品制核电机组的容量拍卖上行做粗算：

- 2024/25 BRA 出清：$28.92/MW-day → 年容量收入约 $1100 万/GW
- 2025/26 BRA 出清（Dominion 节点）：$444.26/MW-day → 年收入约 $1.62 亿/GW
- **差额**：约 $1.5 亿/GW/年，且不计能量边际抬升

CEG 约 13 GW PJM 核电中，即便仅一半出清在受约束价位，容量栈差额已是约 $10 亿 EBITDA/年——该 tailwind 部分被市场计入，但 2026/27 + 2027/28 BRA 滚动尚未充分定价。

VST 约 14 GW ERCOT 燃机 + 2.4 GW Comanche Peak，ATC 平均价每抬升 $5/MWh 即对应 EBITDA 约 $7 亿——而 ERCOT 2024 年 ATC 均价约 $45/MWh，对比 2020–2022 年均值约 $30/MWh，夏季峰值时段更高。

## 六、风险调整后排序——最终视角

- **第一象限风险调整上行**：CEG、VST。它们处在容量市场弹性、behind-/front-of-meter PPA 选择权与零碳溢价的交叉点。两者已经重新估值，但 2026–2028 年共识 EBITDA 仍未充分定价 BRA 滚动与 ERCOT 紧缺。
- **第二象限**：TLN（FERC 路径上呈二元）、NRG、AEP、PCG。AEP 与 PCG 是受规管最佳代理——节奏更慢但事件风险更低。
- **防御 / 低 beta**：D、SO、NEE——高质量成本回收的费率基增长，弹性较弱。
- **回避**：缺乏长期 PPA 的小型 merchant 调峰；缺乏明确退役-替代规划的高煤占比 IOU。

## 七、什么会证伪命题

1. **FERC 进一步收紧** co-location，例如要求所有 hyperscaler 接入采用完整 network-integration 服务 → IPP spread 收窄约 $15–25/MWh；熊市情形下命题仍然成立，只是斜率下移。
2. **DeepSeek 式效率冲击**实质性降低 AI 推理功耗强度 → 负荷增长曲线趋平。第01卡框架已暗示这是核心下行风险，我们判断概率约 25%。
3. **PJM 容量市场改革**（FERC 档案、MD/IL 州干预）封顶出清价 → 纯容量租金 IPP 失去弹性。
4. **Hyperscaler 自建核电/燃气** 规模化（如 SMR 联合体在 2030 前商运）→ 自取租金而非支付。考虑供应链现实，2030 前概率较低（<15%）。

## 八、交接

下一个未解的关键问题是：**GPU/设备供给侧与 AI 计算架构（如 DeepSeek-V4 效率、定制 ASIC 占比）是否会真正改变驱动负荷预测的功耗强度系数**。这正是 TMT / 芯片供应链分析师的领域——是合适的下一棒，且属 primary 角色。

推荐下一棒：`tmt-analyst`，primary 角色。

## 引用与数据来源（关键）

- IEA《Electricity 2024》/《Energy and AI》展望（全球数据中心用电 2024 年 415 TWh → 2030 年约 945 TWh）。
- 美国能源部 / LBNL《2024 United States Data Center Energy Usage Report》（美国数据中心 2023 年占电力 4.4% → 2028 年 6.7–12%；325–580 TWh）。
- PJM 2025/26 Base Residual Auction 报告（2024年7月30日出清）；2024 Load Forecast。
- ERCOT《Capacity, Demand and Reserves Report》，2024年12月。
- MISO 2025/26 Planning Resource Auction 结果，2025年4月。
- FERC，Talen-Susquehanna ISA Order，2025年3月4日（Docket ER24-2172）。
- Dominion Energy，弗吉尼亚 IRP 申报，2024年。
- 佐治亚 PSC，Georgia Power 2025 IRP 更新。
- 公司公告：CEG、VST、TLN、NRG、AEP、PCG、D、SO、NEE 最新 10-K / 投资者日材料。

## Follow-up

- Analyst: tmt-analyst
- Topic: AI计算架构与GPU供给对数据中心功耗强度系数的传导
- Question: 在DeepSeek-V4/定制ASIC/液冷/推理-训练比变化等架构演进下，2026-2028年数据中心单位算力功耗强度（W/TFLOP或PUE-adjusted W/AI-token）将如何演进？这会把美国数据中心负荷预测从DOE/LBNL中性情形（~580 TWh）下修至何种区间，进而对PJM/ERCOT容量出清价与CEG/VST/TLN的EBITDA敏感度产生多大幅度的折让？
