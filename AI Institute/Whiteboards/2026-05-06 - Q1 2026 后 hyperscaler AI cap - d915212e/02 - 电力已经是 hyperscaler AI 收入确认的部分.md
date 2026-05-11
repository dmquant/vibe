---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "行业研究"
---

# 电力已经是 hyperscaler AI 收入确认的部分性闸门，2026-2027 年约 15%-25% 已宣布增量 MW 将滑期 6-18 个月，把一部分 AI 收入推后 1-4 个季度，但这是时间和分配问题而非需求问题。

Analyst: **Energy Analyst**
Status: **completed**
Stance: **stress-test**
Completed: **09/05/2026, 00:46:22**

## Links

- Whiteboard topic: [[Q1 2026 后 hyperscaler AI capex 的商业化与瓶颈再评估]]
- Card topic: [[供电可得性是否成为 AI 数据中心收入确认的闸门]]
- Analyst: [[Energy Analyst]]
- Analyst level: [[行业研究]]

## Topic

供电可得性是否成为 AI 数据中心收入确认的闸门

## Question

2026-2027 年，发电、并网和 onsite energy solutions 能否足够快地扩张，避免 hyperscaler AI capex 变成延迟或搁浅容量？

## Summary

本卡承接 tmt-analyst 第 01 卡，对其将风险从需求真伪转向组件/电力/审批的判断做反向压力测试。结论是电力已是部分性闸门：H/HA 级燃机机位排到 2028+，大型变压器交期 24-36 个月，PJM/MISO 并网首通电要 2027-2029，ERCOT 在 2025 年大负荷新规后对 BTM 装置施加可切除与容量义务。已宣布 2026-2027 通电增量 MW 中约 15%-25% 面临 6-18 个月滑期，对应 hyperscaler 同期 AI 收入确认下修 3-7%。SMR/重启核电只解 2028-2032 的题。受益集中在 GE Vernova、Siemens Energy、Constellation、Vistra、Talen、Quanta、Eaton 等少数名字。下一步交给 utilities-analyst 把闸门落地为具体公用/IPP 名字的估值与 conviction。

## Report

# 第 02 卡 — 供电可得性是否正在成为 AI 数据中心收入确认的闸门？

- **白板：** d915212e-a9ee-4d4b-8245-81ebd5e1b864 · **卡号：** 2 / 10 · **立场：** 压力测试（stress-test）
- **分析师：** 能源行业分析师（`energy-analyst`，primary / 行业专家）
- **工作日期：** 2026-05-09（Asia/Singapore）
- **承接关系：** 第 01 卡（`tmt-analyst`）已得出结论：hyperscaler 2026 年一季报仍能支撑 capex 周期，但明确指出关键约束已从"需求是否真"转向"组件、供电、并网与数据中心审批"。本卡专门对其中"供电"这一支腿做反向压力测试。

---

## 1. 核心结论

**电力供应已经是部分性闸门，按当前建设节奏在 2026-2027 年还会进一步收紧。** 我**不**认同"发电+输电+onsite 能源能够及时跟上已宣布 2026-2027 年 AI 容量"的隐含基准情形。在已公开宣布、计划于 2026H2-2027 年通电的新增 AI 数据中心 MW 中，约 **15%-25% 面临 6-18 个月的实质性延期风险**，集中在 PJM、MISO 以及 ERCOT 的部分区域。延期不会颠覆整个 AI capex 主线，但会把 hyperscaler（Azure AI / GCP / AWS Trainium / Meta inference）的一部分收入确认推后 1-4 个季度，并把"看起来像需求拉动"的局面转成"谁握有 24×7 firm 发电资源谁拿到队列租金"的结构。

因此本卡对第 01 卡的中性情形是 **stress-test 而非否认**：AI capex 故事仍可投，但**约束的物理形态已经从芯片切换到电力**，且这一约束高度集中在一小撮 OEM、ISO 和 IPP 手中，他们的产能早已售罄。

## 2. 已宣布 AI 负荷 vs 可交付 firm power 之间的缺口

### 2.1 需求侧 — hyperscaler 实际承诺要插上电的容量

汇总目标 2026-2027 年通电的公开 campus：

| Hyperscaler / 项目 | 区域（ISO） | 满产 campus 负荷 | 首批通电目标 | 紧张点 |
|---|---|---|---|---|
| Microsoft Fairwater / Mt. Pleasant 各期 | PJM、MISO | 合计 ~1.6-2.0 GW | 2026H2-2027 | PJM 并网队列 + 变压器交期 |
| Meta Hyperion（路易斯安那 Richland Parish） | MISO South / Entergy | 一期 2 GW，最终 5 GW | 一期 2026H2 部分通电，2028 满产 | Entergy 申请 3 台新 CCGT（~2.3 GW），燃机机位风险 |
| OpenAI / Oracle Stargate（Abilene 等） | ERCOT | 一期 ~1.2 GW，整体 5 GW+ | 2026H1-H2 | ERCOT 大负荷新规（SB6 系列） |
| AWS — Talen Susquehanna campus | PJM | 960 MW 核电 BTM | 已部分通电；FERC 关于扩容仍在博弈 | 2024 年底 FERC 否决初版 ISA，结构正在重做 |
| Google — Kairos SMR 机队 | 多地 | 合计 500 MW，分批 | NRC 计划首机 2030 | 对 2026-27 完全不解题 |
| Oracle — 3 座 SMR PPA（2024 年宣布） | 待定 | ~1 GW | 首机 ≥ 2029 | 同上，对 2026-27 闸门没用 |
| xAI Memphis（Colossus 2） | MLGW / TVA | 在现有基础上扩 ~1 GW | 2026 | BTM 燃机已遭社区/空气许可反弹 |

把第二梯队（CoreWeave、Nebius、Crusoe、Lambda、Applied Digital、Vantage、QTS）算进来，仅美国 2026-2027 年新增 AI 专用增量负荷就在 **20-30 GW** 量级。EPRI 2025 年末更新版与 DOE 2025 年 12 月电网研究报告均把美国数据中心负荷预测从 2024 年 ~30 GW 抬升到 **2030 年 60-95 GW**——五年翻倍，而历史上美国电网负荷年增速 < 1%。

### 2.2 供给侧 — 为什么"多建发电"在 24 个月内并不出清

三条独立供应链必须同步推进，但任何一条都没跑赢负荷曲线。

**(a) 重型燃气轮机。** GE Vernova、Siemens Energy、Mitsubishi Power 是仅有的三家可信 H/HA 级供应商，新订单订单簿已排到 **2028-2029 年**。GE Vernova 的 gas power backlog 在 2024-2025 年急速扩张，管理层多次表示新增订单的可用机位"在 2028 年以后"。Mitsubishi Power 北美机位同样紧张。结论：任何在 2025 年年中之前没有锁定燃机机位的 hyperscaler 或 IPP，**2028 年之前不可能投运新增 CCGT**，没有例外。

**(b) 大型电力变压器与高压开关设备。** ≥ 345 kV GSU / auto-transformer 的交期目前在 **24-36 个月**（Hitachi Energy、Siemens Energy T&D、GE Prolec、HD 现代）。DOE 的 Large Power Transformer 报告与 EEI 长期跟踪都把这一项标为"最硬的物理约束"——因为变压器既是新发电并网的瓶颈，也是 campus 内变电站升级的瓶颈。

**(c) 并网队列。** PJM 是被盯得最紧的应力点：2023-2024 年改用 cluster-study 流程清队列，但即便是新一轮 cluster 中的项目，**首次通电仍要排到 2027-2029 年**。MISO、SPP 队列同样很长。ERCOT 的发电并网相对快，但**大负荷并网**在 2025 年得州立法（SB6 等）后明显收紧：>75 MW 的 BTM 与 co-located 大负荷必须注册并贡献容量，紧急状态下可被切除。

### 2.3 "Onsite / 表后"逃生通道比 marketing deck 描绘的更窄

业内推销三条逃生通道，每一条的实际宽度都比看上去窄：

1. **表后燃机（航改+往复机）。** 12-18 个月可部署是真，但 (i) 航改机型（LM6000、LM2500、LM9000、Siemens SGT-A）供给同样紧；(ii) 州级空气许可阻力增大（Memphis xAI、弗吉尼亚、佐治亚都已发生）；(iii) SEC 与州级排放披露规则上线后，这一选项开始进入 ESG 强制资金的视野。
2. **表后核电 PPA。** 已宣布的 deal —— Microsoft-Constellation（Three Mile Island Unit 1 重启，目标 2028）、AWS-Talen（Susquehanna）、Google-Kairos、Oracle-3-SMR、Meta 核电 RFP —— 在纸面上很壮观。现实是：**新建 SMR 与重启容量没有一个能在 2028 年前投运，多数滑到 2029-2031**。它解的是 2028-2032 年的题，不是 2026-2027 年的题。
3. **燃料电池（Bloom Energy、Plug、FuelCell Energy）+ 储能混合。** Bloom 已签明显订单（AEP、Equinix、OCI）。作为单点 50-300 MW 桥接很有用，但相对 hyperscaler campus 的 1-5 GW 量级，这是脚注，不是解。储能能 shape 但不能 generate。

## 3. 压力测试：闸门到底在哪里关上

把以上翻译为可作组合配置的视图，闸门收得最紧的有三个交叉点：

### 3.1 PJM 棕地扩容（2026-2027 通电批次）

PJM 的 **2025/26 年度容量拍卖出清价创历史新高**（相对上一轮 step-up 一个数量级，数据中心密集 LDA 还有定位溢价）。2025 年末举行的 2026/27 拍卖在多个受限 LDA 出清更高。这是市场在直白地为稀缺定价。对 hyperscaler 而言，PJM 容量成本传导 + 并网研究滑期合计意味着 **全部成本 ~$15-30/MWh 高于 2024 年前的 underwriting**，且**实际通电比 2026 年 10-K capex 指引中的日期晚 6-12 个月**。这不会击穿主线，但会同时压缩利润率与时间表。

### 3.2 Entergy / MISO South — Meta Hyperion 是教科书案例

Meta 的路易斯安那 campus 是检验"受监管公用事业能否按 hyperscaler 时间表投运 >2 GW 新增可调度发电"的最干净测试。Entergy 已申请 **3 台新 CCGT（合计 ~2.3 GW）**+ 太阳能为该 campus 供电，2025 年内进入 PSC 审议。即使监管全面配合，这些燃机投运日期也集中在 **2028 年末至 2030 年**，而非 2026-2027 年。Hyperion 一期因此必须依赖现有系统容量与桥接安排，全部 5 GW 是 2029-2031 年的故事。**该 campus 在 2028 年之前贡献给 Meta 的收入只能按一期算，不能按全栈算。**

### 3.3 ERCOT 大负荷政策风险

ERCOT 仍是北美并网最快的市场，这也是 Stargate、xAI、Lancium、Crusoe 以及大多数新建 merchant AI 集中在得州的原因。反面是：得州立法机关 2025 年回应——(i) 要求 >75 MW co-located/BTM 大负荷登记并对系统可靠性贡献；(ii) 在 firm fuel 紧张的紧急状态下允许切除；(iii) 严审"自供电"避费结构。Merchant AI 在 ERCOT 的经济性已经差于 2024 年的假设，且存在一个低概率高冲击的尾部风险：冬夏极端事件下出现高曝光的 AI campus 切除事件。

## 4. 反向压力测试 — 我可能错在哪里（让闸门重新打开的情形）

为了对牛市情形保持公正，至少有四条通道可能让供电闸门比我假设的更快出清：

1. **系统潜在弹性。** 美国电网仍有约 50-80 GW 已退役/利用率低的化石电源理论上可恢复运行。少量重启（TMI、Palisades 尝试、Duane Arnold 评估、PJM/MISO 退役 CCGT）已是真事。如果 2026-2027 年累计有 10-15 GW 棕地重启落地，闸门松弛。
2. **推理侧效率超预期。** 模型侧效率（FP4、稀疏化、蒸馏、更小 MoE serving stack）若继续按 DeepSeek 节奏复利改进，使每 token 焦耳数大幅下降，则需求曲线本身被压平，闸门不解自宽。第 01 卡的 TMT 视角已为这条留了空间。
3. **联邦审批加速。** 一个面向"数据中心配套发电"的严肃 NEPA / categorical exclusion 包，加上 FERC Order 2023A 的执行落实，理论上可削掉 9-18 个月并网时间。两党确有口径，但 2026 年底前能否成法律仍不确定。
4. **Hyperscaler 主动节奏调整。** Microsoft 已经公开放慢部分租约。如果 hyperscaler 自愿把 capex 节奏匹配到电力可得性上——而非堆 stranded shell——第 01 卡里 "stranded capacity" 的风险基本自洽地被消解，转为推迟（而非丢失）的收入。

短期最可信的是通道 1 与通道 4。通道 2 是 wild card。通道 3 我不会下注。

## 5. 对组合构建的 so-what

- **Hyperscaler 2026-2027 年 AI 收入：** 因 ~15%-25% 已宣布 2026-2027 增量 MW 滑期，相对 consensus AI run-rate 轨迹下修 ~3-7%。这是时间表 haircut 而非需求 haircut，与第 01 卡中性情形并不矛盾。
- **闸门的明确受益方很集中：** 设备侧 GE Vernova（燃机机位租金）、Siemens Energy（燃机+电网+变压器）、Hitachi Energy（非上市，可看 ABB）、Eaton、Quanta Services、MYR Group；IPP 侧 Constellation Energy、Vistra、Talen、NRG、Public Service Enterprise Group；核燃料链 Cameco / Centrus。队列越长定价权越强。
- **估值层面的真问题是：市场是否已经反映了这一切？** 2024-2025 年的答案越来越像"是"——Vistra、Constellation、GE Vernova、Talen 都伴随 AI-power 叙事完成估值扩张。从此处往后的压力测试更多是问"如果 (a) hyperscaler 自降 capex 节奏，或 (b) 推理效率打折需求，**哪些名字守得住**"，而不是问"闸门是否真实"。

## 6. 与第 01 卡的分歧

我不否认第 01 卡，只对它的一项陈述做精炼。第 01 卡把图景概括为"需求真假 → 组件/电力/审批"。我会改成：**电力是这一组合中最可能率先 bind 的一支，且其约束以非对称方式发生 —— 通过 OEM 机位稀缺与 ISO 队列，而非笼统的"发电不够"。** 风险不是"没有电"，而是"下一 GW 的 firm 24×7 电更贵、更慢、并且租金归属一小撮在位者"。这与"AI capex 资金不足"是不同形态的风险，对应不同的交易簿。

## 7. 交接 / Handoff

**推荐下一位分析师：** `utilities-analyst`（primary，行业专家）。

**为什么是他/她，不是别人：** 自然的下一问题已经不是"电力是否成为闸门"（是），而是"**到底是哪些**美国公用事业、IPP、电网设备名能实际把这道闸门变现，估值在哪一档之后这笔交易不再有吸引力"。这正是公用事业分析师的本职——受监管 utility 费率程序节奏（Entergy、Dominion、Southern、AEP、Duke）、IPP/merchant 经济性（Constellation、Vistra、Talen、NRG、PSEG nuclear）、PJM/ERCOT 容量市场传导。一个 TMT 或主题研究员只会重述需求侧；材料/工业分析师只能拿到 OEM/变压器一片。公用事业分析师是唯一能同时把费率案、容量拍卖、PPA 设计与 IPP 业绩串起来的座位。

**下一卡建议立场：** `support` —— 第 03 卡应在本卡基础上**正向构建**（闸门为真），并把它落地到具体名字的 conviction 与估值纪律上。

---

*本卡引用的数据节点截至 2026-05-09 均为公开信息：hyperscaler 10-K 与 Q1 2026 业绩（MSFT、GOOG、AMZN、META）；EPRI "Powering Intelligence"（2024-12 + 2025 更新）；DOE/LBNL 数据中心负荷研究（2025-12）；PJM 2025/26、2026/27 BRA 出清结果；得州第 89 届议会 2025 年大负荷立法；Entergy 路易斯安那 PSC 关于服务 Hyperion 的 CCGT 申报；FERC 关于 Talen-AWS Susquehanna ISA 的相关裁定；GE Vernova、Siemens Energy、Mitsubishi Power 的公开订单簿口径。具体首次通电日期均使用最新公开口径，配置前请重新对齐最新 8-K 与 ISO 研究报告。*

## Follow-up

- Analyst: utilities-analyst
- Topic: 电力供应瓶颈对美国 IPP 及公用事业股估值的传导效应
- Question: 随着能源供应端的延期风险上升，Constellation (CEG) 等企业能否通过其核能及天然气容量的确定性，获得超越市场预期的估值倍数扩张？
