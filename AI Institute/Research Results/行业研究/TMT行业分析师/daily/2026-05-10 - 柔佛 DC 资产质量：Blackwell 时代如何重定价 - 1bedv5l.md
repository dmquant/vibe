---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# 柔佛 DC 资产质量：Blackwell 时代如何重定价已并网“灰盒子”，2026-05-11

Kind: **daily**
Analyst: **TMT Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

# 柔佛 DC 资产质量：Blackwell 时代如何重定价已并网“灰盒子”，2026-05-11

截至 2026-05-11，我支持此前研究所判断：柔佛算力基建正在从“容量短缺”转向“质量清洗”。但我会进一步收紧定价语言：一个已经并网、但技术规格过时的数据中心壳体，不再是已经完成的 hyperscale 资产，而是一个转换期权。它的价值取决于已连接 MW 能否在期权衰减前，转化为可液冷、可高密部署、有租户承诺、并且通过监管审查的 IT load。

## 核心判断

Blackwell 把估值单位从“已连接 MW”改成了“可液冷变现 MW”。NVIDIA 的 DGX GB rack-scale 系统说明了原因：NVL72 机架包含 72 个 GPU，使用液冷 manifold 和 cold plate，单机架功耗约 120kW。柔佛某些为传统风冷 colo 密度并网的站点，可能拥有有价值的土地、光纤、开关设备和 time-to-power，但除非其配电、散热、机房布局、CDU/二次回路、水资源方案、运维团队和租户合同都达到更高门槛，否则不能按 AI factory 估值。 [NVIDIA DGX GB Rack Scale Systems User Guide](https://docs.nvidia.com/dgx/dgxgb200-user-guide/hardware.html)

ESA 缺口说明这不是理论问题。ISEAS 引用 TNB 数据称，截至 2024 年 12 月，马来西亚 38 个数据中心项目已签署 ESA，最高需求合计 5.9GW，但实际负载利用率只有 405MW。Kenanga 2026 年 4 月 27 日公用事业报告引用 Tenaga 数据显示，爬坡仍在继续但缺口仍大：截至 2025 年 12 月，项目管线达到 56 个、名义需求 7.5GW；35 个已完工项目对应 4.5GW 已完工容量，但实际利用率为 850MW，约为已完工容量的 19%。[ISEAS](https://www.iseas.edu.sg/articles-commentaries/iseas-perspective/2025-43-data-centres-energy-demand-and-sustainability-can-malaysia-strike-the-right-balance-by-sara-loo); [Kenanga/Tenaga data](https://www.kenanga.com.my/wp-content/uploads/2026/04/Utilities-260427-SU-Kenanga.pdf)

## 重定价框架

我会把柔佛资产分成三类。

| 资产类型 | 应该付钱购买什么 | 估值立场 |
| --- | --- | --- |
| AI-ready boxes | 132kV 及以上供电路径、Tier III/IV 设计、60-150kW/rack 路线图、direct liquid cooling、CDU/散热空间、低 WUE 或再生水方案、光纤冗余、hyperscaler/sovereign-cloud 锚定租户 | 战略稀缺价值；如果租户和许可确定，相对峰值“AI DC”定价折让 0-20% |
| Convertible grey boxes | 已通电站点，具备土地、光纤、变电站接入和部分现代 M&E，但传统机房需要按 pod 改造 DLC 和高密供电 | 实物期权价值；折让 25-45%，付款应随液冷改造里程碑分阶段释放 |
| Stranded grey boxes | 已通电壳体或投机性 ESA，液冷路径弱，水压力高，靠近住宅，低机架密度配电设计，没有锚定租户 | 工业壳体加可回收设备价值；折让 50-75%，不给完整名义 MW 估值信用 |

实务估值公式应为：

`Value = AI-ready monetizable MW x AI multiple + legacy contracted MW x colo multiple - retrofit capex - grid/water mitigation - delay carry - regulatory risk reserve`

关键在于第一项应取四个数的最小值：已签 ESA MW、可液冷改造 MW、已获许可 MW、租户支持 MW。如果一个站点连接了 100MW，但未来 12-18 个月内只有 30MW 能完成冷却、许可并租给 Blackwell 级别机架，那么承销基数就是 30MW，而不是 100MW。

## 为什么折现率必须上升

第一，Blackwell 压缩了技术窗口。传统 8-20kW/rack 机房仍可服务企业、网络、存储或常规云工作负载，但高价值 AI 租金池正转向 rack-scale 系统，需要 direct-to-chip liquid cooling、重 busbar 配电和更强运维纪律。改造可行，但不是表面性的 capex 项目；它可能需要新的冷冻水或温水回路、CDU、漏液检测、rack manifold、地板和线缆改造、开关设备调整、调试停机，以及更严格的厂商保修条件。

第二，ESA 不等于收入。TNB Green Lane Pathway 把数据中心供电接入周期从 36-48 个月压缩到约 12 个月，这为早期柔佛开发商创造了 time-to-power 溢价。但当大量项目已经完工或在建后，稀缺变量从“我能否并网？”转向“我能否把机房装入合格 AI 机架并找到客户？” [TNB Green Lane Pathway](https://www.tnb.com.my/announcements/tnb-establishes-exclusive-green-lane-pathway)

第三，监管正在从招商型转向选择型。马来西亚可持续数据中心指南把 DESAC 激励资格与 PUE、WUE 和 CUE 纪律挂钩；对 21.25MW 以上 hyperscale 项目，设计 PUE 目标为 1.4 及以下，建议设计 WUE 为 2.2 m3/MWh 及以下。该指南还采用 Peninsular Malaysia 电网排放因子 0.758 GgCO2/GWh。柔佛也转向技术委员会模式：州政府信息显示，委员会审查用水用电、PUE/WUE、冷却技术和替代水源；2025 年底报道则称柔佛不再受理 Tier 1 和 Tier 2 申请，并已有 51 个获批项目，其中 17 个运营、11 个在建。[MIDA sustainable DC guideline](https://www.mida.gov.my/wp-content/uploads/2024/12/Guideline-for-Sustainable-Development-of-Data-Centre.pdf); [Bernama](https://bernama.com/en/news.php?id=2458034); [New Straits Times](https://www.nst.com.my/amp/news/nation/2025/11/1324188/johor-shuts-door-water-guzzling-data-centres-tightens-approval-rules)

## 投资含义

市场不应再把“ESA MW”按统一 hyperscale 倍数资本化。溢价应该只给同时证明四件事的站点：真实 TNB 交付、液冷就绪、低影响水源、以及已承诺 AI 租户。只有并网和壳体的站点，应按期权库存处理，而不是按稳定基础设施处理。

对运营商而言，最有价值的披露指标不是签约总 MW，而是 liquid-ready MW、平均 rack-density 能力、已完成 DLC 调试的机房比例、真实负载下 WUE、已签租户 take-up，以及从并网到收入负载的时间。对投资者而言，最危险的资产是“几乎就绪”的灰盒子：它需要足够多的改造来消耗现金，但又不足以赢得 Blackwell 时代客户。

对马来西亚公用事业和电网相关供应商而言，负载爬坡仍是结构性利好。Kenanga/Tenaga 序列中，数据中心实际利用率从 2024 年 1Q 的 148MW 升至 2025 年 4Q 的 850MW。风险在于成本分摊：如果电网增强、备用容量和水资源治理成本社会化，而投机开发商保留期权价值，政治反弹会加大。因此下一步应由公用事业分析师压力测试电价设计、电网 capex 回收和 ESA 全成本定价。

## 什么会改变我的看法

如果柔佛资产能提供经审计证据，证明 60kW+ per rack 部署、液冷调试、WUE 达到或低于 2.2 m3/MWh 指引、再生水来源、Tier III/IV 批准，以及已签云/AI 租户推动利用率在 2026 年底前超过已完工 MW 的 35-40%，我会降低灰盒子折让。反之，如果已完工容量继续快于实际负载增长，水资源审批延后到 2027-2028，或 Blackwell/Rubin 部署进一步集中到少数 purpose-built campus，我会提高折让。

结论：已连接电力仍是有价值的投入品，但不是充分的资产论据。截至 2026-05-11，已经并网但技术陈旧的柔佛灰盒子，应按衰减中的转换期权重定价。结构性机会在于液冷就绪、监管友好的 AI campus；监管陷阱则是以峰值 AI 倍数购买只拥有昨日电网预约权的壳体。

## 资料来源

- NVIDIA, DGX GB Rack Scale Systems User Guide, hardware section: https://docs.nvidia.com/dgx/dgxgb200-user-guide/hardware.html
- ISEAS Perspective 2025/43, “Data Centres, Energy Demand and Sustainability: Can Malaysia Strike the Right Balance?”: https://www.iseas.edu.sg/articles-commentaries/iseas-perspective/2025-43-data-centres-energy-demand-and-sustainability-can-malaysia-strike-the-right-balance-by-sara-loo
- Kenanga Research, Utilities thematic note, 27 April 2026: https://www.kenanga.com.my/wp-content/uploads/2026/04/Utilities-260427-SU-Kenanga.pdf
- TNB, Green Lane Pathway announcement, 9 August 2023: https://www.tnb.com.my/announcements/tnb-establishes-exclusive-green-lane-pathway
- MIDA/MITI, Guideline for Sustainable Development of Data Centre, December 2024: https://www.mida.gov.my/wp-content/uploads/2024/12/Guideline-for-Sustainable-Development-of-Data-Centre.pdf
- Bernama, Johor technical committee on data-centre projects and water use, 18 August 2025: https://bernama.com/en/news.php?id=2458034
- New Straits Times, Johor tightens approvals for data centres, 27 November 2025: https://www.nst.com.my/amp/news/nation/2025/11/1324188/johor-shuts-door-water-guzzling-data-centres-tightens-approval-rules

页脚：报告日期 2026-05-11；board cd39ee55-d78a-46ff-9e87-9d739c5e7ac2；card 01。
