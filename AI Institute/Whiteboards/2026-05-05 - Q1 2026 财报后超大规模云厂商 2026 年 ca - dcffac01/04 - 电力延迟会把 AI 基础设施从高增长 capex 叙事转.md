---
source: ai-institute
resource_type: whiteboard-card
card_index: 4
status: completed
analyst_level: "风控与合规"
---

# 电力延迟会把 AI 基础设施从高增长 capex 叙事转化为资产负债久期错配：hyperscaler 承受 ROI 减值，弱资质 GPU 抵押借款人承受信用事件。

Analyst: **Chief Risk Officer**
Status: **completed**
Stance: **stress-test**
Completed: **06/05/2026, 06:10:57**

## Links

- Whiteboard topic: [[Q1 2026 财报后超大规模云厂商 2026 年 capex 路径与 AI 半导体供应链含义]]
- Card topic: [[电力延迟会把 AI 基础设施从高增长 capex 叙事转化为资产负债久期错配：hyperscaler 承受 ROI 减值，弱资质 GPU 抵押借款人承受信用事件。]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

## Topic

电力延迟会把 AI 基础设施从高增长 capex 叙事转化为资产负债久期错配：hyperscaler 承受 ROI 减值，弱资质 GPU 抵押借款人承受信用事件。

## Question

Investigate the topic "电力延迟会把 AI 基础设施从高增长 capex 叙事转化为资产负债久期错配：hyperscaler 承受 ROI 减值，弱资质 GPU 抵押借款人承受信用事件。" and make the strongest evidence-based judgment you can.

## Summary

本卡以首席风控官视角压力测试 card 01-03 的电力瓶颈结论：若 2027 年 $500B+ GPU 集群因变压器、开关柜和并网延迟无法按时上电，hyperscaler 面临的是 ROI 减值和自由现金流拖累，而非偿付能力危机。6-12 个月延迟会消耗约 $42B-$100B 经济使用寿命，并叠加 $22.5B-$60B 年化债务持有成本。真正的尾部风险集中在使用 GPU 抵押债务、缺乏 AAA take-or-pay 承购、且依赖按需利用率的二线云和 AI 初创公司；若利用率低于 60% 且电力延迟超过 6 个月，利差暴涨和重组/违约概率显著上升。

## Report

# AI 基础设施闲置资产与 GPU 抵押债务压力测试
**日期：** 2026 年 5 月 6 日  
**分析师：** Chief Risk Officer  
**立场：** 对 card 01-03 的压力测试

## 核心风险判断

我支持前序卡片的主线判断：约束已经从加速器供给迁移到电力交付。但财务结论需要更精确：如果 2027 年出现 **$500B+ 已交付 GPU 集群无法按时上电** 的情景，这会是重大的 ROI 减值事件，但不是 hyperscaler 的偿付能力事件。对 MSFT、GOOGL、AMZN、META 来说，一阶冲击是时间损耗、闲置持有成本和收入转化延后；它们的资产负债表可以吸收。对用资产抵押债务采购 GPU 的高杠杆 neocloud 和 AI 基础设施初创公司来说，同样的物理延迟可能变成信用事件，因为抵押品在老化，而现金流发动机尚未启动。

风险具有非线性。3 个月电力延迟主要是节奏问题。若 $500B GPU 延迟 6-12 个月，在商业化之前就会消耗 **$42B-$100B** 的经济使用寿命，且这还不包括融资成本和客户补偿。若债务融资成本为 9%-12%，同一资产池的持有成本年化约为 **$22.5B-$60B**。Hyperscaler 可以把这类损失吸收到经营现金流中，弱资质借款人则不能。

## 压力测试设定

本卡片压力测试 card 02-03 的结论：由于变压器、开关柜和燃机延迟，**FY26/FY27 增量 IT 负载中 15%-25% 可能滑坡**。DOE/LBNL 估计，美国数据中心用电量可能从 **2023 年 176 TWh** 上升至 **2028 年 325-580 TWh**，即美国电力需求的 **6.7%-12%**；因此电力约束足以影响部署节奏，而不只是边际选址问题。[S1] 变压器证据仍与前序卡片一致：NASEO/NEMA 材料显示配电变压器交期为 **115-130 周**，大型/GSU 变压器交期为 **120-210 周**，并明确指出数据中心建设会受到进一步延迟影响。[S2]

CoreWeave 是公开市场中最清晰的 neocloud 融资模式代理。其 2025 Form 10-K 表示，电力可得性受限会损害扩张与运营；同时披露技术设备与在建工程推动净 PP&E 增至 **$30.557B**，其中 **$9.376B** 仍为在建工程，2025 年 PP&E 折旧及摊销为 **$2.4B**。[S3][S4] 2025 年末其债务本金总额达到 **$21.615B**，包括 DDTL、高级票据、可转债、循环贷款、OEM 融资和软件融资；DDTL 额度与 GPU 服务器资产购买价格挂钩，并由相关子公司的股权以及几乎全部资产设立担保权益。[S5] Lambda 2024 年 **$500M GPU-backed facility** 说明这不是单一公司结构：该融资被描述为由 GPU 担保，并由其现金流生成能力支撑。[S6]

## $500B 闲置 GPU 的损失桥

CRO 模型把会计损失和经济损失分开。资产尚未投入使用时，会计折旧可能递延；例如 CoreWeave 的会计政策将尚未按预定用途投入服务的资产列为在建工程，并在投入使用后按估计寿命折旧，其中技术设备为 **6 年**。[S7] Meta 自 2025 年 1 月 1 日起将大多数服务器和网络资产使用寿命延长至 **5.5 年**；Microsoft 披露 FY2025 净 PP&E 为 **$204.966B**，折旧费用为 **$22.0B**。[S8][S9] 这些政策可以平滑报表利润，但不能阻止经济性技术老化。

| 延迟情景 | $500B GPU 基础上的经济折旧 | 9%-12% 年化债务成本下的持有成本 | 损失的商业化窗口 | CRO 解读 |
|---|---:|---:|---:|---|
| 3 个月 | $20.8B-$25.0B | 对应期间 $11.3B-$15.0B 年化等值 | 若需求仍紧张，大多可追回 | 节奏风险；利差走阔但再融资仍可行 |
| 6 个月 | $41.7B-$50.0B | 对应期间 $22.5B-$30.0B 年化等值 | 损失半个产品周期台阶 | ROI 减值开始；弱借款人需要豁免或股权补充 |
| 12 个月 | $83.3B-$100.0B | 对应期间 $45.0B-$60.0B 年化等值 | 损失完整一年使用寿命 | 真实减值触发；抵押品放款率应重设 |

敏感性很直接：在 6 年至 5 年经济寿命下，**$500B GPU 池每延迟 1 个月就消耗约 $6.9B-$8.3B 的使用寿命**。这还未计入电力预留费、数据中心租金、客户服务补偿、维护、安保、仓储，以及无法在推理需求旺盛期间服务客户的机会成本。SemiAnalysis 报告称，H100 1 年期租赁价格从 **2025 年 10 月 $1.70/GPU-hour** 上升至 **2026 年 3 月 $2.35/GPU-hour**，并且按需容量普遍售罄。[S10]

## Hyperscaler ROI：减值风险，而非资产负债表风险

对 hyperscaler 而言，市场容易犯的错误是只寻找 GAAP 减值。若资产仍在在建工程中，或尚未达到预定可使用状态，延迟未必立即体现为折旧。真正的冲击是 ROI 压缩：

| Hyperscaler 风险渠道 | 2027 压力影响 | 为什么重要 |
|---|---:|---|
| 时间损耗 | $500B 延迟资产基础若延迟 6-12 个月，损失 $42B-$100B 使用寿命 | 即使会计折旧递延，GPU 仍在老化 |
| 利用率短缺 | 15%-25% 计划增量 IT 负载无法按期商业化 | AI 收入爬坡跟不上 card 01-03 确立的 capex 曲线 |
| 收入延迟 | 云 AI、内部产品 AI、模型训练吞吐均延后 | 资产先融资，产品经济性后显现 |
| 客户替代 | 工作负载转向有电力的站点、已有在线容量的 neocloud 或自研芯片 | 延迟 GPU 集群会损失稀缺性价值 |
| 会计滞后 | GAAP 减值可能较晚出现 | 在利用率或使用寿命假设被修正前，报表利润可能低估经济压力 |

我的基准结论是，MSFT/META/GOOGL/AMZN 在这一情景下**没有**违约风险。Meta 披露 **$81.59B** 现金、现金等价物和可交易证券，2025 年经营现金流为 **$115.80B**，同时仍指引 2026 年 capex 为 **$115B-$135B**。[S8] Microsoft 披露净 PP&E 为 **$204.966B**，折旧为 **$22.0B**，且长期债务大多仍是高级无抵押债，期限容量充足。[S9] 最大的 hyperscaler 可以把 $50B-$100B 的经济性延迟吸收为投资资本回报率下降、自由现金流转化放慢和股权估值倍数下修，而不是流动性危机。

对那些基于高利用率和快速模型收入假设资本化 AI 基础设施的公司，减值门槛更紧。如果 2027 年利用率被迫低于 **60%** 并持续超过两个季度，同时租赁价格或每 GPU 内部 AI 收入下降，可收回性测试会变得困难。若电力到位后利用率保持在 **75%** 以上，资产仍可能覆盖资本成本。这两种结果的差异不在芯片供给，而在变压器与并网时间。

## GPU 抵押债务：尾部风险所在

信用渠道比 hyperscaler 股权渠道更脆弱。GPU-backed debt 只有在三个假设同时成立时才有效：

1. GPU 能够按期上电并冷却。
2. GPU 能够在高利用率下出租，或被承诺合同吸收。
3. 抵押品价值不会比本金摊还更快衰减。

CoreWeave 的 10-K 同时展示了保护和脆弱性。承诺合同通常是 take-or-pay，初始期限为 **1 至 6 年**，无论利用率如何都要求付款。[S11] 当承购方是 MSFT、OpenAI 或 META 时，这对贷款人形成保护。但集中度很高：CoreWeave 披露 2025 年收入 **67%** 来自 Microsoft，并提到 OpenAI 至 2030 年 10 月承诺最高 **$11.9B**，Meta 至 2031 年 12 月承诺最高 **$14.2B**。[S12] 同一文件也表示，公司计划增加客户数量，其中可能包括信用风险更高的早期和私营公司，且信用程序无法完全消除不付款或不履约风险。[S13]

这意味着压力并不平均分布：

| 借款人类型 | GPU 延迟 6-12 个月时的信用结果 | CRO 利差/违约判断 |
|---|---|---|
| Hyperscaler 自有 GPU 资产 | ROIC 下降、使用寿命争议可能升温，但无违约 | 股权倍数压缩；信用基本安全 |
| 有 AAA/hyperscaler take-or-pay 承购的 neocloud | 契约压力上升，但合同现金流支持债务 | 利差走阔 **150-300 bps**，再融资仍可行 |
| 有 AI lab/私营承购且上电延迟的 neocloud | 合同启动日争议、客户补偿、抵押品放款率下降 | 利差走阔 **400-800 bps**，大概率需要股权补充 |
| 依赖按需需求且用 GPU 抵押借款的二线云/初创公司 | 利用率缺口、无承诺现金流、抵押品下调估值 | 利差走阔 **800-1,500 bps**；重组/违约概率高 |

最强的违约触发器不是租赁价格下跌；当前证据反而显示租赁容量紧张、H100 合同价格上升。[S10] 真正的违约触发器是**现金流无法启动**：借款人已提款买入 GPU，客户合同或现货需求依赖在线容量，但数据中心无法上电。在这种情况下，GPU 既是收入发动机又是抵押品，二者会同时失效。

## 风控措施与市场信号

从组合风险角度，我不会因为这一情景做空整个 AI capex 链条。我会降低未签约、高杠杆 GPU 持有人的敞口，并在 GPU 抵押融资中要求更强的电力证明。

关键控制：

- 要求看到已承诺电力交付证据，而不只是土地、壳体或 GPU allocation。
- 若上电时间较融资计划落后超过 **90 天**，下调 GPU 抵押品放款率。
- 将连续两个季度 **<60% 利用率** 作为观察名单触发器，将 **<50% 利用率叠加电力延迟** 作为重组触发器。
- 在信用模型中区分 AAA-backed take-or-pay 收入与 AI-startup-backed 收入。
- 贷款价值比按折旧成本、转售价值、折现合同现金流三者孰低重算。
- 除非借款人有绑定承购或首个合同期后的可信再部署选项，否则不要按 5-6 年 GPU 使用寿命承保。

2H26-2027 需要跟踪的市场信号：

- 数据中心租赁开始日期滑坡，以及计划 MW 电力未按期交付。
- DDTL 使用额相对于限制性现金、短债到期和修订条款的变化。
- 与可用性或交付延迟相关的客户补偿或递延收入变化。
- GPU 租赁利用率，而不只是挂牌价格。
- 二级市场 GPU 交易价格和贷款人放款率重设。
- Neocloud 高级票据、OEM 融资工具和私募资产抵押贷款的信用利差。

## 结论与交接

正确结论不是“AI capex 泡沫立即破裂”。更窄、更可执行的结论是：**电力延迟风险会把 AI 基础设施从高增长 capex 故事转化为资产负债久期错配问题**。Hyperscaler 承受 ROI 减值和自由现金流拖累；承购质量弱的高杠杆 GPU 持有人可能遭遇利差暴涨和违约。2027 年广泛违约潮不是我的基准情景，因为高质量 take-or-pay 合同和仍然紧张的租赁市场提供现金流支撑。但如果电力延迟超过 **6 个月**、利用率持续低于 **60%**、并且贷款人同时下调抵押品放款率，二线 GPU 云和 AI 初创公司出现一轮违约潮是合理的尾部情景。

**建议下一位分析师：** `credit-analyst` [specialist, trigger: 具体 GPU 抵押品与交易对手信用利差脆弱性]。下一个未回答问题是：梳理哪些上市和私有 neocloud 借款人、数据中心出租方、OEM 融资提供方与贷款人，对“电力交付尚未验证”的 GPU 抵押贷款暴露最大。

## 来源

[S1] U.S. Department of Energy, "DOE Releases New Report Evaluating Increase in Electricity Demand from Data Centers," Dec. 20, 2024: https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers  
[S2] NASEO/NEMA presentation, transformer lead-time and GOES bottleneck summary, Oct. 21, 2025: https://www.naseo.org/Data/Sites/1/media/kmnaseo/wg/economic-development-wg-10-21-2025-slides.pdf  
[S3] CoreWeave 2025 Form 10-K, power and supplier risk factors: https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm  
[S4] CoreWeave 2025 Form 10-K, PP&E and depreciation disclosure: https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm  
[S5] CoreWeave 2025 Form 10-K, total debt and DDTL collateral terms: https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm  
[S6] Lambda, "$500M GPU-Backed Facility to Expand Cloud for AI," Business Wire, Apr. 2, 2024: https://www.businesswire.com/news/home/20240402148086/en/Lambda-Announces-%24500M-GPU-Backed-Facility-to-Expand-Cloud-for-AI  
[S7] CoreWeave 2025 Form 10-K, construction-in-progress and useful-life policy: https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm  
[S8] Meta Platforms 2025 Form 10-K, server useful lives, liquidity, operating cash flow, and 2026 capex guide: https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm  
[S9] Microsoft FY2025 Annual Report, PP&E, depreciation, and debt disclosures: https://www.microsoft.com/investor/reports/ar25/index.html  
[S10] SemiAnalysis, "The Great GPU Shortage - Rental Capacity - Launching our H100 1 Year Rental Price Index," Apr. 2, 2026: https://newsletter.semianalysis.com/p/the-great-gpu-shortage-rental-capacity  
[S11] CoreWeave 2025 Form 10-K, committed contract revenue recognition and take-or-pay terms: https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm  
[S12] CoreWeave 2025 Form 10-K, customer concentration and OpenAI/Meta commitments: https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm  
[S13] CoreWeave 2025 Form 10-K, customer credit and non-performance risk: https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm

## Follow-up

- Analyst: credit-analyst
- Topic: GPU 抵押融资、neocloud 债务与数据中心租赁信用利差图谱
- Question: 哪些上市和私有 neocloud 借款人、数据中心出租方、OEM 融资提供方与贷款人，对“电力交付尚未验证”的 GPU 抵押贷款暴露最大？哪些信用工具最可能在 2H26-2027 先出现利差重定价、契约修订或重组？
