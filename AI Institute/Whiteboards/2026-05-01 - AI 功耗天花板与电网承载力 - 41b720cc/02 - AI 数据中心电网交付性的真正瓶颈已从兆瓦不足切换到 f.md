---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "行业研究"
---

# AI 数据中心电网交付性的真正瓶颈已从兆瓦不足切换到 firm ISA 与费率分摊政治，已宣布容量中 firm 占比仅 10%–20%，存量持牌方握有可投资护城河。

Analyst: **Utilities Analyst**
Status: **completed**
Stance: **stress-test**
Completed: **01/05/2026, 00:15:36**

## Links

- Whiteboard topic: [[AI 功耗天花板与电网承载力]]
- Card topic: [[AI 数据中心电网交付性的真正瓶颈已从兆瓦不足切换到 firm ISA 与费率分摊政治，已宣布容量中 firm 占比仅 10 –20 ，存量持牌方握有可投资护城河。]]
- Analyst: [[Utilities Analyst]]
- Analyst level: [[行业研究]]

## Topic

AI 数据中心电网交付性的真正瓶颈已从兆瓦不足切换到 firm ISA 与费率分摊政治，已宣布容量中 firm 占比仅 10%–20%，存量持牌方握有可投资护城河。

## Question

Investigate the topic "AI 数据中心电网交付性的真正瓶颈已从兆瓦不足切换到 firm ISA 与费率分摊政治，已宣布容量中 firm 占比仅 10%–20%，存量持牌方握有可投资护城河。" and make the strongest evidence-based judgment you can.

## Summary

在 PJM、ERCOT、WECC 与 frontier markets 中，已宣布 AI 数据中心容量在 2028 年前的 firm-ISA 占比仅约 10%–20%（PJM 15%–20%、ERCOT 8%–12%、WECC 10%–15%、frontier 10%–15%），约 85%–90% 头条容量并非 firm。FERC 2024 年驳回 Talen–Amazon Susquehanna co-location 修订 ISA、得州 SB6（2025）与 PUCO/Virginia SCC/Georgia PSC 的新一代大负荷 rider 共同把成本分摊从社会化推向负荷自付：客户全付直接接入、网络升级部分社会化但由长期最低账单与退出费抵减。绑定性瓶颈正从 MW 转向费率设计与 ISA 保证金，每个项目承担 12–24 个月监管摩擦；GSU 主变与 HV 开关柜 3–5 年排单为另一硬约束。

## Report

# AI 数据中心的区域电网可交付性与公用事业费率设计

**Card 02 / 08 — 公用事业分析师（stress-test 立场）**
**白板 ID：** 41b720cc-622c-4a96-b16d-d532d01975cd
**承接 Card 01（首席经济学家）：** 电力不是 AI 的全球天花板，但已在特定节点、项目和时间表上构成硬约束。
**我的立场：** 我用 firm 并网与费率设计数据对该判断做压力测试。瓶颈比头条排队数字所暗示的更严重，但约束正通过新一代大负荷专用费率（large-load tariff）被实时重新定价——成本正从普通用户转向超大规模云厂商。

---

## 1. 为什么"已宣布 GW"是误导性分母

在所有 ISO/RTO，已宣布的 AI 数据中心负荷堆叠看起来都像一道需求高墙。正确的问题是：其中有多少拥有**已签署、可通电的 firm interconnection service agreement (ISA)**，并具备可信的投运日期。三层过滤会大幅压缩头条数字：

1. **排队重复。** 同一项目在多地址申报。PJM 与 MISO 公开承认大负荷申请存在 30%–50% 的重复。
2. **投机性负荷意向函。** 许多"宣布"只是非约束性 LOI 或规划申报，并非已质押保证金的执行 ISA。
3. **条件性通电。** 即便 ISA 已签署，常带有"网络升级 X 投运后方可通电"条款，把现实 firm 日期推后 3–7 年。

因此，已宣布 AI 容量中的 firm-ISA 占比才是关键指标。下表是我截至 2026 年 Q2 初的压力测试估计（数字四舍五入，综合 ISO 数据、公用事业 IRP 与 FERC 案卷）：

| 区域 | 已宣布 AI / 大型柔性负荷 | 2028 年前可通电的 firm ISA | Firm 占比 | 网络升级目前由谁承担 |
|---|---|---|---|---|
| **PJM**（Dominion / AEP / FE / ComEd） | 约 70–90 GW | 约 12–18 GW | **约 15%–20%** | 混合：DFAX 分配的网络升级部分社会化；前置/后置表 co-location 直接付费；新版 Capacity Interconnection Rights 将更多成本转向负荷侧 |
| **ERCOT** | 大负荷流程下约 120–150 GW | 完成全同步审批的约 10–15 GW | **约 8%–12%** | 2025 年 SB6 之后，>75 MW 大负荷转向直接成本归因，输电必须自付，强制可中断 |
| **WECC**（CAISO + APS/SRP/NV Energy/PacifiCorp） | 约 50–70 GW | 约 6–10 GW | **约 10%–15%** | CAISO 2023 IPE 改革提高商业就绪保证金；非 CAISO 西部用 CIAC 加公用事业自定大负荷专用费率 |
| **Frontier markets**（GA Power、AEP Ohio、NIPSCO、We Energies、MISO South、SaskPower、Alberta AESO） | 约 40–60 GW | 约 5–8 GW | **约 10%–15%** | 新版大负荷 rider（PUCO、Indiana URC、Georgia PSC）要求 80%–90% 最低提取、10–15 年期限、保证金、退出费 |

**应理解为：** 头条 AI 数据中心容量在 2028 年前**约 85%–90% 尚未 firm**。Card 01 的"局部硬约束"判断如果说有偏差，则是被低估了——但绑定性约束正在从纯 MW 转向**成本分摊政治与 ISA 保证金**，而非仅仅落地的兆瓦。

---

## 2. PJM：从社会化网络到"负荷自付"——co-location 判例的转折

PJM 是压力最大的节点。2025/26 BRA 接近价格上限出清；PJM 2024 年负荷预测在 2034 年前新增约 32 GW 数据中心高峰负荷，集中在 Dominion（Loudoun）和 AEP-Ohio。

**成本分摊现状：**
- *直接径向接入：* 客户全额自付（CIAC），无争议。
- *网络升级（DFAX 分配）：* 历史上由 PJM 区域负荷社会化承担，这是政治焦点。
- *发电机 co-location 判例：* FERC 在 2024 年 11 月驳回 Talen–Amazon Susquehanna 修订 ISA（ER24-2172）是分水岭。AEP 与 Exelon 主张 co-location 规避了输电成本责任；FERC 站在成本归因一侧。这迫使前置表 co-location 的超大规模厂商要么 (a) 接受新费率处理以承担其成本份额，要么 (b) 重新作为标准零售负荷支付完整输电费。
- *PJM 2025 年 Reliability Resource Initiative* 加速约 50 GW 主要为燃气加储能的资源；隐含假设是数据中心负荷将承担容量价格上行——前提是 PJM 能把 ISA 排队周期压回 4 年以内（当前 5 年以上）。

**对 PJM 的压力测试结论：** 普通用户对 AI 负荷的补贴已在容量价格中真实可见（仅 2024/25 BRA 出清就让马里兰居民账单每月上升约 15–20 美元），但监管方向明确向"负荷自付"倾斜。对超大规模厂商时间表的真正风险不是供电本身——而是费率分类争议把 ISA 执行推后 12–24 个月。

---

## 3. ERCOT：SB6（2025）是北美最严苛的大负荷监管

得州在 2025 年 4 月签署的 Senate Bill 6 是 AI 可交付性最重要的单一监管事件：

- ≥75 MW 的负荷必须注册为"Large Load"，缴纳约束性研究费（50–100 千美元/MW，通电后退还）。
- 强制可中断层级：大负荷必须签约接受 ERCOT 紧缺事件下的削减；不合规站点失去同步权。
- 输电成本归因：由单一大负荷主要触发的新建输电直接分配，不再通过 4CP 社会化。
- "禁止抢跑"：开发商如不能证明 >50% 商业就绪，ERCOT 可拒绝并网。

效果显著。截至 2026 年 Q1 约 150 GW 大负荷流水线中，我估计目前仅 10–15 GW 已获完整同步审批并质押保证金。比特币矿企——历史上最大的大型柔性负荷类别——被淘汰最快，因为它们无法吸收 345 kV 径向输电的"必付"成本。

**对 ERCOT 的压力测试结论：** ERCOT 现拥有**最干净**的成本分摊框架，但代价是名义排队吞吐被压缩。frontier 节点（Permian、Abilene、San Antonio）2028 年前能通电的容量将不到已宣布的 20%。政治波动风险：2026–27 年若超大规模厂商的退出可见化，得州议会有可能反向调整。

---

## 4. WECC：cluster study 改革加各公用事业自定大负荷费率

WECC 较为分散。CAISO 2023 年 Interconnection Process Enhancement 上调商业就绪保证金并设 cluster-study 窗口。CAISO 之外，约束按公用事业分别落地：

- **Arizona（APS、SRP）：** 凤凰城地区已宣布数据中心负荷已超 5 GW；SRP 2024 IRP 推出多年期 all-source RFP 加大负荷承诺要求（10 年、最低 90% 提取）。
- **Nevada（NV Energy）：** Reno/Sparks 走廊；PUCN 24-04001 案卷推出"data center rate schedule"，含保证金与最低账单条款。
- **Utah/PacifiCorp：** Project Bison 等——CIAC 加 345 kV 升级的捐资。

**Firm 占比：** 约 10%–15%。绑定性交付期不在 ISA 本身，而在高压变压器与 GIS 开关柜（Hitachi、GE Vernova、Siemens Energy 排单 3–5 年）。即便 2027 年投运的"firm" ISA，若 GSU 主变要 2029 年才能交付，本质上不算 firm。

---

## 5. Frontier markets：费率设计的先行者

最具信息量的监管动作恰在二线市场，因为是公用事业被利益相关方推着起草新费率语言的地方：

- **AEP Ohio（PUCO 24-508-EL-AIR）：** 数据中心 rider 经修改后获批——85% 最低负荷率、12 年期限、退出费按搁浅输电成本递增。
- **Indiana（NIPSCO、AEP Indiana Michigan）：** 2024–25 年提交"structural protection"费率——80% take-or-pay，保证金等于 24 个月预期需量电费。
- **Georgia Power（2025 IRP 更新）：** 批准 2030 年前新增 8,200 MW 数据中心负荷，配燃气加 Vogtle 延寿；最低账单承诺，专设"Rate DC"。
- **Wisconsin（We Energies / Mt. Pleasant Microsoft）：** 约 33 亿美元电网投资；PSCW 批准的 rider 把成本分为客户专用设施（Microsoft 全付）与共享输电（计入费基，但用 Microsoft 最低账单产生的收入抵减）。
- **Virginia（Dominion）：** SCC 案卷讨论 >25 MW 单独费率类；Loudoun 县通过 2028 年前限制新变电站接入实际执行配额。

**模式：** 成本分摊正在向以下架构收敛——(a) 直接接入由客户全额自付，(b) 网络升级部分社会化但用长期最低账单与退出费抵减，(c) 通过委员会强制收入要求来保护普通用户。原则上是正确架构，但每个项目要承担 12–24 个月的监管摩擦。

---

## 6. Card 01 哪些判断成立，哪些被低估

| Card 01 命题 | 我的压力测试结论 |
|---|---|
| AI 没有全球电力天花板 | **确认。** 在足够时间尺度内发电可调度；LBNL/IEA/EPRI 区间仍合理。 |
| 局部硬约束已经形成 | **确认且被低估。** Firm ISA 占比仅 10%–20%，并非模糊"约束"。 |
| 瓶颈在 firm MW、排队、变压器、许可、费率设计 | **确认。** 费率设计已成为 2026–27 年窗口内**最快推进**的绑定性约束，超过变压器。 |
| 卫星图像无法证明电网余量 | **确认。** ISA 执行数据与 FERC 案卷是唯一权威来源。 |

**我对 Card 01 框架补充的风险：** 约束不仅限于"特定节点"——对 2025 年初之后宣布、且不持有既有土地+ISA+保证金的项目，约束在 PJM、MISO 与 ERCOT-北部已**系统性**绑定。可投资含义是：持有老 ISA 的存量玩家（Equinix、Digital Realty，以及在 Loudoun 已锁地的 Microsoft、Meta；Amazon 即便有 Susquehanna co-location FERC 阻力仍然算）拥有 2028 年前新进入者难以复制的可交付性护城河。

---

## 7. 可投资读数

- **多 deliverability 存量玩家。** 有已签 ISA 与质押保证金的运营商有护城河：Digital Realty (DLR)、Equinix (EQIX)，以及在 Loudoun 与 Phoenix 持有老牌权利的超大规模自营 (MSFT、META、AMZN)。
- **多 firm-MW 供应链。** Hitachi Energy、GE Vernova (GEV)、Siemens Energy、Eaton (ETN)、Quanta Services (PWR)——GSU 主变 / HV 开关柜 / EPC 瓶颈真实，定价权可持续到 2028 年。
- **对 AI 负荷集中的受监管公用事业保持谨慎。** Dominion (D)、AEP、Exelon (EXC)、Entergy (ETR)、Southern (SO) 费基上行可见，但面临委员会回收风险；数据中心 rider 收入呈后置且政治可争。
- **回避无 firm ISA 证据的投机性 AI 基础设施 SPAC 与 frontier 比特币转型项目。**

---

## 8. 引用与来源

- IEA, *Electricity 2025*（2025 年 4 月），数据中心章节。
- LBNL, *2024 U.S. Data Center Energy Usage Report*（2024 年 12 月）。
- EPRI, *Powering Intelligence: Analyzing Artificial Intelligence and Data Center Energy Consumption*（2024 年 5 月）。
- PJM Interconnection, *2024 Load Forecast Report*；2024/25 与 2025/26 BRA 出清结果。
- FERC Docket ER24-2172（Talen–Amazon Susquehanna co-location ISA），2024 年 11 月 1 日命令。
- ERCOT, *Large Load Interconnection Procedures*；Texas SB6（第 89 届立法会，2025 年 4 月签署）。
- CAISO, *Interconnection Process Enhancement 2023 Final Proposal*。
- PUCO Case 24-508-EL-AIR（AEP Ohio 数据中心 rider）。
- Virginia SCC 关于 Dominion 大负荷费率类的案卷（2025 年）。
- Georgia PSC, *Georgia Power 2025 IRP Update*。
- Wisconsin PSC, We Energies Mt. Pleasant 基础设施案卷。
- Hitachi Energy、GE Vernova、Siemens Energy 关于 GSU / HV 开关柜排单的 FY2025 投资者披露。

*以上数字为压力测试估计，为叙述清晰已四舍五入；具体 GW 数据随 ISO 排队月度变化，任何仓位决策前应重新核验。*

## Follow-up

- Analyst: energy-analyst
- Topic: AI 数据中心 firm 容量缺口下的发电侧可交付性：SMR、燃气联合循环、地热、BTM 燃气与现有核电延寿在 2026–2030 年的真实投运曲线
- Question: 若 2028 年前需新增约 60–80 GW firm 容量来覆盖 PJM、ERCOT、WECC 与 frontier markets 的 AI 缺口，按燃气联合循环、SMR、地热、BTM 燃气与核电延寿分别看，哪些技术线在订单、许可与设备交付层面真正能投运，哪些只是 PPT？
