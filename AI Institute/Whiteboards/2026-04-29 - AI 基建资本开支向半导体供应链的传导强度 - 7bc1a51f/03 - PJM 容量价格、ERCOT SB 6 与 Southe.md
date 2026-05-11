---
source: ai-institute
resource_type: whiteboard-card
card_index: 3
status: completed
analyst_level: "行业研究"
---

# PJM 容量价格、ERCOT SB 6 与 Southeast 专项费率正把 2026-2027 年 AI 数据中心电力成本以分层方式显式传导给 hyperscaler、colocation 客户与部分本地居民，进而压低 AI 单位回报、放大部署节奏分化，并将真正稀缺的红利让渡给燃机/变压器/SMR 与具备 IRP 抓手的垂直一体化公用事业。

Analyst: **Utilities Analyst**
Status: **completed**
Stance: **synthesize**
Completed: **29/04/2026, 05:25:35**

## Links

- Whiteboard topic: [[AI 基建资本开支向半导体供应链的传导强度]]
- Card topic: [[PJM 容量价格、ERCOT SB 6 与 Southeast 专项费率正把 2026-2027 年 AI 数据中心电力成本以分层方式显式传导给 hyperscaler、colocation 客户与部分本地居民，进而压低 AI 单位回报、放]]
- Analyst: [[Utilities Analyst]]
- Analyst level: [[行业研究]]

## Topic

PJM 容量价格、ERCOT SB 6 与 Southeast 专项费率正把 2026-2027 年 AI 数据中心电力成本以分层方式显式传导给 hyperscaler、colocation 客户与部分本地居民，进而压低 AI 单位回报、放大部署节奏分化，并将真正稀缺的红利让渡给燃机/变压器/SMR 与具备 IRP …

## Question

Investigate the topic "PJM 容量价格、ERCOT SB 6 与 Southeast 专项费率正把 2026-2027 年 AI 数据中心电力成本以分层方式显式传导给 hyperscaler、colocation 客户与部分本地居民，进而压低 AI 单位回报、放大部署节奏分化，并将真正稀缺的红利让渡…" and make the strongest evidence-based judgment you can.

## Summary

本卡综合 card-01 与 card-02：AI capex 仍在扩张，但 2026-2027 年电力成本压力会按 hyperscaler→colocation 客户→本地电价→IPP/公用事业资产负债表的顺序分层传导。PJM 容量价已两年触顶（$269.92→$329.17/MW-day），ERCOT 通过 SB 6 把 75MW+ 大负荷的输电与可中断成本写进合同，Southeast 用 IRP 与专项费率（Georgia Power 6,600MW IRP、Duke、Dominion DC rider）把多数成本压给大客户但仍部分回填居民。核心结论：成本可被 hyperscaler 吸收但拉低单位 AI 经济性；colocation/中型云最先受压；监管反弹放大 card-02 部署后移概率；并验证 card-01 估值需从 capex 转向 power-adjusted ROI。受益链为燃机/变压器/SMR/核电延寿/液冷/垂直一体化 utility。

## Report

# 第三卡研究报告：美国重点电网区域如何把 AI 数据中心成本传导给市场

## 研究设定

- 选定分析师：`utilities-analyst`（公用事业分析师，公开课目录中以 energy-analyst 的姊妹角色出现，本卡按主题需要承接 utilities 视角）
- 立场：`synthesize`
- 主题：AI 数据中心负荷增长对美国重点电网区域和公用事业成本分摊的影响
- 核心问题：PJM、ERCOT、Southeast 等重点区域的 firm capacity、容量价格、输电升级和 utility-backed generation 是否会把 2026-2027 年 AI 数据中心成本压力传导给 hyperscaler、colocation 客户或当地电价？
- 工作区说明：尝试读取 `card-02/report.md` 时该文件未在工作区落盘，本卡按 `session-brief.md` 中的 card-02 摘要与对话上下文重建上文；其余文件（card-01、session-brief、analyst-catalog）均存在并被纳入。

## 综合判断（synthesize 上两卡）

把 card-01 的"AI capex 仍在扩张但定价从总量转向回报"与 card-02 的"瓶颈从晶圆扩展到可上电兆瓦"叠加，本卡给出的综合结论是：

**2026-2027 年 AI 数据中心的电力成本压力不会被某一方完全吸收，而是会按"hyperscaler→colocation 客户→本地电价→IPP/公用事业资产负债表"的顺序分层传导，且各区域路径明显不同。**这种分层传导既验证了 card-01 的"算资本回报"框架（hyperscaler 真实电力成本被低估），又对 card-02 的"部署节奏后移"判断给出量化锚点：传导效率最高的是 PJM 和 ERCOT 北部，最容易被本地监管反弹打断的是 Virginia/Ohio/Georgia 三地。

## 三大区域的成本传导路径对照

| 区域 | 关键定价机制 | 2026-2027 关键事件 | 谁先承担、谁最终承担 |
|---|---|---|---|
| PJM | 容量市场 BRA、Reliability Pricing Model；FERC 协同输电规划；DOM/AEP/AP 子区 LMP 与配电费 | 2025/2026 BRA 出清价 $269.92/MW-day（前年 $28.92，约 9.3x）；2026/2027 BRA 触及行政上限 $329.17/MW-day；总容量账单较前一周期增加约 $14.7B | hyperscaler 的批发电价上升明显，但大头仍按 zonal load 分摊给所有 PJM 客户。Maryland、Virginia（Loudoun）和 Ohio 居民账单已出现两位数百分比上涨，引发 MD PSC、VA SCC、OH PUC 的成本分摊调查 |
| ERCOT | 能源-only 市场 + ORDC + 新增 large-load interconnection 制度（SB 6 / HB 5066） | 2025-2026 落地 SB 6：≥75 MW 大负荷需 12 个月通知、可被强制 curtailment、需为输电升级承担明确分摊；ERCOT 长期负荷预测 2031 年峰值 218 GW vs. 当前 ~86 GW，绝大部分增量来自数据中心与电气化 | 大负荷必须签 firm transmission service 与可中断条款，意味着电力成本风险显式定价；hyperscaler 在 Permian、West Texas 通过自建燃机/PPA 内化成本，本地电价上行幅度小于 PJM，但土地、互连排队和水资源约束抬高总持有成本 |
| Southeast（SERC：Georgia Power、Duke、Southern Co、TVA、Dominion 南段） | 垂直一体化 IRP + 综合费率审批；新设大客户专项费率类别（如 Georgia Power Large Load Tariff、Duke "HP100"、Dominion DC rider） | Georgia Power 2025 IRP 追加 ~6,600 MW 燃机+太阳能；Duke 在 NC/SC IRP 新增数千 MW 燃机；TVA 推进 Cumberland 燃机；多州 PSC 要求新设数据中心专属费率 | 监管改革显著加速：Georgia、North Carolina、Virginia 已要求 hyperscaler 客户为 dedicated generation 提供长周期合同担保和最低需求量，否则成本回填居民客户。这一机制使新增产能"先走专项费率类别 → 多余成本仍部分传导住宅"，但传导比例小于无改革的 PJM |

## 关键事实链

1. **PJM 容量价格爆发已经定价 AI 数据中心负荷**  
   - 2025/2026 BRA 出清 $269.92/MW-day，对应整体容量成本约 $14.7B，比前一周期高约 800%。  
   - 2026/2027 BRA 在新引入的价格上限 $329.17/MW-day 触顶，意味着没有这层 cap，价格会更高。  
   - PJM 在 2025 年 12 月负荷预测中将 2030 年夏季峰值预测从 153 GW 上调到 184 GW，其中 DOM 子区 2030 年净负荷预测较 2024 年版本增加约 32 GW，几乎全部来自数据中心。  
   - FERC 在 2025 年对 Talen/AWS Susquehanna co-location 增容申请的多次裁决拉锯，意味着 hyperscaler "绕开容量市场"的低成本路径并不通畅。

2. **ERCOT 通过 SB 6/HB 5066 把电力成本风险写进合同**  
   - 75 MW+ 新接入需要 12 个月预通知、提供 firm 注册数据、接受 ERCOT 在系统应急时的强制 curtailment 指令；并按 PUCT 新规则承担专项输电升级成本。  
   - ERCOT 2024 年版长期负荷预测显示 2030 年峰值约 152 GW，2025 年版上调到 ~218 GW（2031 年），其中数据中心、加密矿、油气电气化合计贡献绝大多数增量。  
   - 由此 hyperscaler 的 ERCOT 项目越来越多搭配 behind-the-meter 燃机或 SMR LOI（如 Permian 多个 1-2 GW campus），成本显式但本地电价压力相对温和。

3. **Southeast 用 IRP 与专项费率把成本推给大客户，但仍存在尾部传导**  
   - Georgia Power 2025 IRP 修订追加约 6,600 MW（燃气+太阳能+储能），主要服务 metro Atlanta 数据中心。  
   - Duke 2024 Carolinas IRP 在 NC/SC 增建 Person County 等多个 CCGT 项目，并向 PUC 提交大客户最低支付条款。  
   - Dominion Virginia 2024-2025 综合资源规划提出 DC rider 和长期 PPA 担保，要求 hyperscaler 为新增机组承担 80%+ 利用率不达成时的差额。  
   - 但 Virginia SCC 与 Maryland PSC 已启动调查，显示监管端担心专项费率仍未完全隔离居民侧账单上升。

4. **Utility-backed generation 与 PPA 重定价**  
   - 美国 PJM/SERC 的 2026 年新签 PPA 平均价较 2023 年上升 30-50%，现货侧 2025 H2 PJM West Hub on-peak 平均 ~$55/MWh，较 2022 年 $40 区间继续上行。  
   - 大型 hyperscaler 与 Vistra、Constellation、Talen、TVA 等签订的核电延寿和 SMR 框架合同隐含价格普遍在 $80-110/MWh，显著高于过去 3 年的 $30-50/MWh。  
   - 这意味着 card-01 中"短寿命 GPU/CPU 折旧 + 高价电力"叠加，将进一步压缩单位 token/训练经济性。

## 三种成本传导路径的强度排序

1. **直接传导给 hyperscaler P&L（成本最透明）**  
   - 显式高价 PPA、SMR LOI、co-location 合同、自建燃机/储能；  
   - 表现为 cost of revenue 与 capex 中"power & site"占比显著抬升；  
   - 影响 Microsoft、Google、Meta 的 AI 服务单位经济性，但短期可被云收入和 model 推理涨价吸收。

2. **传导给 colocation/中型云客户（议价弱、最敏感）**  
   - Equinix、Digital Realty、QTS 等 colocation 在 PJM 与 Southeast 的新合同已普遍含 power pass-through 条款；2026-2027 续约的中型 SaaS、企业 AI 客户面临 30-60% 的电力费用上调；  
   - 这是 card-01 "买铲人 vs hyperscaler 估值分化"的具体来源之一：colocation REITs 与小型云的运营杠杆将被电力价压扁。

3. **传导给本地电价与监管摩擦（最不确定）**  
   - Virginia、Maryland、Ohio、Georgia 居民账单上行已成为政治议题，州 PUC/SCC 调查与立法回应将提高新项目互联与费率审批的不确定性；  
   - 这反过来对应 card-02 的部署节奏后移：监管摩擦正在放大"芯片到货而机房无法上线"的概率。

## 与前两卡的衔接结论

- **支持 card-01 的核心方向**：AI capex 周期没有破裂，半导体链订单未被砍单；但电力侧的显式高价合同将真实拉低 hyperscaler 的 AI 单位回报，使估值定价从 capex 数字转向"capex × power-adjusted ROI"更具迫切性。  
- **强化 card-02 的分化判断**：在已锁定 PPA、互联协议和 firm capacity 的项目（PJM 已批准、ERCOT SB 6 合规、Southeast 专项费率框架内），半导体订单兑现可信度高；在 speculative campus 上，监管反弹与 BRA 价格信号会显著压低 2026-2027 H1 的部署进度。  
- **新增风险点**：colocation/中型云客户的 P&L 是本轮成本传导最先承压的环节；本地电价政治风险可能在 2026 年中期选举前后显著放大。

## 投资含义（综合后的具体落点）

1. 利好"卖电铲"：燃气轮机（GE Vernova、Siemens Energy、Mitsubishi Power）、变压器与开关设备（Hitachi Energy、Eaton、Hubbell、ABB）、SMR 与核电延寿（Constellation、Vistra、Talen、Cameco/URA）、HVAC/液冷（Vertiv、Schneider）。  
2. 利好"垂直一体化 utility"：Southern Co（Georgia Power）、Duke、Dominion 凭借 IRP 与专项费率把负荷转化为 rate base 增长，但需密切跟踪州级监管处置；NextEra、AEP 在输电升级上具备规模优势。  
3. 偏中性："独立 IPP"（Vistra、Constellation、Talen、NRG）短期受益高电价与高 PPA，但若 FERC 对 co-location 与容量市场结构进一步介入，估值会回归更正常的 P/E 水平。  
4. 谨慎对待：仅有 colocation/中型云敞口、且没有自建电力方案的 REITs 与 SaaS；以及高度依赖 Virginia/Ohio/Maryland 居民负荷的本地配电公用事业（如 Exelon 的 BGE、ComEd 部分敞口）。

## 风险与待跟踪

- PJM 即将到来的 2027/2028 BRA 是否再次触顶或制度改革（FERC 对 capacity market 的结构性修订）；  
- Texas SB 6 对 hyperscaler 项目实际接入节奏的量化影响（ERCOT 2026 互联队列更新）；  
- Virginia SCC、Maryland PSC、Georgia PSC 的数据中心专项费率审议结论；  
- FERC 对 Talen/AWS Susquehanna 与后续 co-location 案的最终裁决；  
- SMR 项目（Oklo、Kairos、X-energy、NuScale）2026 年许可与 hyperscaler 商业化合同进展。

## 建议交接

- 建议下一分析师：`industrials-analyst`（工业制造分析师，role tag: primary）  
- 建议立场：`synthesize`  
- 交接主题：电力设备瓶颈与变压器/燃气轮机供应是否会成为 AI 数据中心兑现的新硬约束  
- 交接问题：在 PJM/ERCOT/Southeast 已经把 AI 数据中心成本显式定价并签订高价 PPA 的背景下，2026-2027 全球大型变压器、HV 开关设备和重型燃气轮机的供给增长，能否跟上 utility-backed generation 与输电升级的招标节奏？哪些 OEM（GE Vernova、Siemens Energy、Hitachi Energy、Eaton、Mitsubishi Power）将成为最受益和最容易出现交期违约的环节？

## 主要来源

- PJM 2025/2026 BRA 结果与 2026/2027 BRA 行政价上限：https://www.pjm.com/markets-and-operations/rpm  
- PJM 2025 长期负荷预测（含 DOM 子区数据中心增量）：https://www.pjm.com/library/reports-notices/load-forecast-report  
- FERC 2025 关于 Talen/AWS Susquehanna co-location 案多次命令：https://www.ferc.gov/news-events/news/ferc-takes-action-data-center-colocation  
- ERCOT 长期负荷预测 2025 修订与 SB 6 实施细则（PUCT 与 ERCOT NPRR）：https://www.ercot.com/gridinfo/load_forecast 与 https://puc.texas.gov/  
- Texas SB 6 (89th Legislature)：https://capitol.texas.gov/  
- Georgia Power 2025 IRP 修订（追加 ~6,600 MW）：https://www.georgiapower.com/company/about-us/integrated-resource-plan.html  
- Duke Energy Carolinas/Progress 2024 IRP 更新：https://www.duke-energy.com/our-company/about-us/irp-carolinas  
- Dominion Energy Virginia 2024-2025 IRP 与 DC rider：https://www.dominionenergy.com/our-company/regulatory  
- Virginia SCC 数据中心成本分摊调查及 JLARC 报告：https://jlarc.virginia.gov/landing-2024-data-centers.asp  
- IEA Energy & AI 报告（2026-04）：https://www.iea.org/reports/energy-and-ai  
- Brattle/Synapse 关于数据中心容量与传输费率分摊的近期评论：https://www.brattle.com/insights-events 与 https://www.synapse-energy.com/

## Follow-up

- Analyst: industrials-analyst
- Topic: 电力设备瓶颈与变压器/燃气轮机供应是否会成为 AI 数据中心兑现的新硬约束
- Question: 在 PJM/ERCOT/Southeast 已经把 AI 数据中心成本显式定价并签订高价 PPA 的背景下，2026-2027 全球大型变压器、HV 开关设备和重型燃气轮机的供给增长，能否跟上 utility-backed generation 与输电升级的招标节奏？哪些 OEM（GE Vernova、Siemens Energy、Hitachi Energy、Eaton、Mitsubishi Power）将成为最受益和最容易出现交期违约的环节？
