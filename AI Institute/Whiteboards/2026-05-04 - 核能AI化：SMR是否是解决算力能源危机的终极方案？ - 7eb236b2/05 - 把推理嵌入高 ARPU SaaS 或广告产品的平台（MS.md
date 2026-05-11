---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "行业研究"
---

# 把推理嵌入高 ARPU SaaS 或广告产品的平台（MSFT、GOOGL、META）能用每 MW 毛利摊销新增能源账单；把 AI MW 当裸算力出租的平台（AMZN）则处于估值观察期，且电力越成为约束性成本，差距越拉开。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **synthesize**
Completed: **04/05/2026, 20:21:10**

## Links

- Whiteboard topic: [[核能AI化：SMR是否是解决算力能源危机的终极方案？]]
- Card topic: [[把推理嵌入高 ARPU SaaS 或广告产品的平台（MSFT、GOOGL、META）能用每 MW 毛利摊销新增能源账单；把 AI MW 当裸算力出租的平台（AMZN）则处于估值观察期，且电力越成为约束性成本，差距越拉开。]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

把推理嵌入高 ARPU SaaS 或广告产品的平台（MSFT、GOOGL、META）能用每 MW 毛利摊销新增能源账单；把 AI MW 当裸算力出租的平台（AMZN）则处于估值观察期，且电力越成为约束性成本，差距越拉开。

## Question

Investigate the topic "把推理嵌入高 ARPU SaaS 或广告产品的平台（MSFT、GOOGL、META）能用每 MW 毛利摊销新增能源账单；把 AI MW 当裸算力出租的平台（AMZN）则处于估值观察期，且电力越成为约束性成本，差距越拉开。" and make the strongest evidence-based judgment you can.

## Summary

AI MW 全成本约 $3.5–4.0M/MW/年（GPU/服务器折旧 + 厂房 + 含 PPA 溢价的电力 + 电网接入 + 运维）。按工作负载层划分：第 1 层 SaaS 嵌入推理（M365 Copilot、Workspace Gemini、GitHub Copilot Enterprise）每 MW 收入 $25–60M、毛利 60–75%；第 2 层广告增量推理（Search AI Overviews、Meta Advantage+/Reels 排序）隐含每 MW 收入 $15–40M、边际毛利 70–85%；第 3 层 Bedrock/Vertex/Azure-OpenAI 等高端 API $8–20M、30–55%；第 4 层裸 GPU 出租 $4–10M、20–40%；第 5 层前沿训练无直接收入。MSFT/GOOGL 第 1+2 层占比最高，能源 Capex 自洽；META 通过广告 ARPU 倍数兑现，但传导间接；AMZN 暴露最大——AWS 边际 AI MW 仍主要在第 3/4 层变现，与 Card 04 中 TTM FCF $1.2bn 的紧绷形成共振。

## Report

# Card 05 — TMT 视角：每 MW 收入决定 AI Capex 是否值得

**分析师：** tmt-analyst（TMT 行业分析师）
**立场：** synthesize — 接受 Card 01–04 的判断（SMR 是 2030 年之后选项；2025–2029 年缺口由燃气、核电重启与电网升级桥接；Capex 负担是 FCF 折价而非偿付危机），并回答下一层问题：哪些 AI 工作负载在每 MW 上能产生足够的收入与毛利，支撑当前估值。
**日期：** 2026-05-04

---

## 1. 核心判断

超大规模厂商的估值争论已经收敛到一个比率：**每 MW 数据中心每年的毛利**。AI MW 的全成本（GPU/服务器折旧 + 电力 + PPA 溢价 + 电网接入摊销 + 运维）在 2026 年合计约 **$3.0–4.0M/MW/年**，只有每年毛利大于约 **$6M/MW/年** 的工作负载才能明确支撑当前估值倍数。按这个标尺：

- **Microsoft 与 Alphabet** 拟合度最好。嵌入企业 SaaS 的推理（M365 Copilot、Workspace AI、Search 中的 Gemini 广告增量）让同一 MW 的变现倍数远高于裸 GPU 出租。
- **Meta** 没有外部云收入，但内部 MW 通过 Reels/Feed 排序的广告 ARPU 提升回收成本，公开 benchmark 困难，但在当前广告 CPM 下经济上仍站得住脚。
- **Amazon** 暴露最大：AWS 每 MW 收入主要来自 IaaS GPU 出租和 Bedrock token 推理，是最低毛利层。AWS 经营利润率仍然强劲（Q1 2026 约 37%），但边际 AI MW 的变现更接近商品化基础设施，而不是嵌入式 SaaS。

**一句话论点：** *将推理嵌入高 ARPU SaaS 或广告产品的平台（MSFT、GOOGL、META），AI Capex 是合理的；把 AI MW 当作裸算力出售的平台（AMZN）则处于观察期，且随着电力成为约束性成本，差距将进一步拉开。*

这是对 Card 04 "FCF 折价" 框架的综合：折价集中在那些 AI MW 还没有搭上 SaaS/广告倍数的公司。

## 2. 单位经济框架：每 MW 成本 vs 每 MW 收入

### 2.1 每 AI MW 每年成本（2026 年基准）

| 成本项 | $/MW/年 | 备注 |
|---|---:|---|
| GPU + 服务器 Capex 摊销（5 年寿命，H100/H200/B200 装机约 $10M/MW） | ~$2.0M | 训练级机柜上限；推理优化机群更低。 |
| 厂房 + 制冷 Capex 摊销（15 年，约 $10M/MW 厂壳） | ~$0.7M | 液冷 + 单机柜 100 kW+ 密度推高 greenfield 成本。 |
| 购电（24/7、约 85% 利用率，含 PPA 溢价后 $70–110/MWh） | ~$0.55–0.85M | Card 03 中 PJM 容量电价飙升、核电 PPA 溢价 $10–25/MWh 都进这一行。 |
| 电网贡献 / 接入费摊销 | ~$0.10–0.20M | Card 03 中 $20bn 765 kV 项目按多客户分摊。 |
| 运维（人力、维护、软件） | ~$0.20M | |
| **每 MW 每年全成本** | **~$3.5–4.0M** | 不含公司层面间接成本与 R&D 分摊。 |

这是每 MW 收入必须先跨过的下限，之后才谈得上对公司 FCF 的贡献。

### 2.2 每 AI MW 每年收入（按工作负载层级）

| 工作负载层 | 每 MW 实际收入/年 | 实际毛利率 | 主要执行方 |
|---|---:|---:|---|
| **第 1 层 — SaaS 嵌入式推理**（M365 Copilot $30/座/月；Workspace Gemini；GitHub Copilot Enterprise $39/座/月） | $25–60M | 60–75% | MSFT、GOOGL |
| **第 2 层 — 广告增量推理**（Search 中的 Gemini、Meta Advantage+、Reels 排序、YouTube 推荐） | $15–40M（通过广告 CPM 增量隐含） | 70–85%（边际贡献） | GOOGL、META |
| **第 3 层 — 高端 API / 模型访问**（Bedrock/Vertex 上的 Anthropic Claude、Azure 上的 OpenAI、Gemini API） | $8–20M | 30–55%（与模型实验室分成） | MSFT（Azure-OpenAI）、GOOGL（Vertex）、AMZN（Bedrock） |
| **第 4 层 — 商品化 GPU 出租**（H100/H200 按需、预留实例） | $4–10M | 20–40% | AMZN、MSFT、GOOGL、CoreWeave |
| **第 5 层 — 前沿训练（内部 R&D）** | 直接 $0；通过下游产品估值 | n/a | 四家全部；单一最大 MW 消费方 |

收入 benchmark 来源：Microsoft FY2025 年报（Copilot 定价、M365 商业收入、Azure AI 增长披露）[^1]；Alphabet FY2025 10-K 与 Q1 2026 release（Search/Cloud 分部、Gemini 整合披露）[^2][^3]；Amazon FY2025 10-K 与 Q1 2026 release（AWS 收入、分部经营利润率）[^4]；Meta FY2025 10-K（广告收入、AI 基础设施评论）[^5]；CoreWeave S-1 / 10-K 与按需定价页（用作 Tier 4 商品 GPU 经济性 benchmark）[^6]；SemiAnalysis 与 Dell'Oro 关于 AI 机柜 BoM、功率密度与每 MW Capex 的估算（用作 2.1 节成本栈交叉验证）[^7]。

算式很清晰：第 1 层变现把 $3.5–4M 成本下限超过一个数量级；第 4 层只在高利用率下才勉强跨过下限。

## 3. 逐家超大规模厂商解读

### 3.1 Microsoft — 第 1 层占比最优，能源 Capex 最易自洽

- **M365 Copilot ARR 路径：** Microsoft 在 E3/E5（约 $36–57/座/月）之上挂出 $30/座/月的 Copilot 列表价，并指引面向企业广泛推广。即便保守按约 4 亿付费 M365 商业席位中 20% 附着，毛 ARR 机会也在 $20–25bn；同时 Copilot 单次推理成本随着 Microsoft 在 GPT-4 级与小型蒸馏模型之间路由而显著下降。
- **Azure-OpenAI 收入：** Azure AI 服务披露增速与 OpenAI ChatGPT 企业版收入都流入 Microsoft 报告的 Azure 数据。毛利与 OpenAI 分成（Microsoft 保留基础设施经济性），但 Azure 算力层抓取的是第 3 层经济性。
- **GitHub Copilot Enterprise（$39/座/月）：** 每个开发者请求是短上下文，按 SaaS ARR 而非按 token API 价格变现，每 MW 推理收入非常高。
- **结论：** Microsoft 的 AI MW 集中在第 1 层与第 3 层，第 4 层暴露较小。Card 04 中 ~47% 的 Capex/经营现金流比，只要 Copilot ARR 持续放量就站得住——核心问题是 **Copilot 附着率与留存率**，不是能不能付电费。

### 3.2 Alphabet — 第 2 层广告增量是隐藏倍数

- **Search AI Overviews 与 Search 中的 Gemini：** 生成式回答让单次查询推理成本提升一个量级（满推理下约为传统搜索的 5–10×），但同时通过延长会话深度、扩大商业意图覆盖、抵御 ChatGPT/Perplexity 对查询份额的侵蚀，提升有效 CPM。在 Alphabet $300bn+ 广告收入基础上，即便整体查询库存 CPM 提升低个位数百分点，年化增量毛利就超过 $5–10bn——这是任何按 token 报价表都看不见的第 2 层变现。
- **Workspace Gemini 与 Vertex AI：** 第 1 层（Workspace Gemini 企业版 $20–30/座/月）与第 3 层（Vertex APIs，含 Anthropic Claude 转售）。当前规模小于 Microsoft，但在增长。
- **YouTube 推荐与广告定向：** GPU MW 的第 2 层用法，在 LLM 之前就已经有高 ROI。
- **结论：** Alphabet 每 MW 经济最好通过 **广告增量通道** 理解，结构性毛利率高于裸算力出租。Card 04 中 FY2025 的 $91bn Capex，只要 Search 广告份额守住、AI Overviews 变现兑现，就有合理性。

### 3.3 Meta — 仅自用 MW，但广告 ARPU 倍数真实存在

- Meta 不外销云算力。它建的每个 GW（Louisiana 的 Hyperion 园区、Mesa AZ 扩建、Ohio 园区）都喂给 Reels 排序、广告定向模型、Llama R&D 与早期 Meta AI 助手。
- **每 MW 隐含收入** = 每多一份模型服务/训练 FLOP 带来的边际广告收入提升。Meta 在 2025–2026 年多次评论将 Reels 互动度与广告价格提升归因于 AI 排序升级。
- **风险：** Meta 的每 MW 直接收入问责性最弱，因为传导链路是间接的。如果广告价格走弱或 AI 驱动的互动度饱和，MW 基础就比 MSFT/GOOGL 更难辩护。
- **结论：** Card 04 中 2026 年 $125–145bn 的 Capex 指引相对当前 FCF 基础最激进。需要广告收入连续多年以约 12–15%+ 增长，才能让每 MW 隐含收入持续高于成本下限。

### 3.4 Amazon — 暴露最大，因为 AWS 的 AI MW 主要在第 3/4 层

- **Bedrock 与 SageMaker** 按第 3 层经济变现基础模型 API 调用，与 Anthropic、Meta（Llama 托管）、Mistral 等分成。
- **EC2 GPU 实例（P5、P5e、Trn2）：** 第 4 层商品化出租。定价由与 CoreWeave、Microsoft、Google 的竞争决定，每 MW 毛利在四家中最低。
- **Anthropic 关系：** Amazon $4bn+ 投资与 Trainium2 合作锁定大体量定向负载，但收入按基础设施租赁毛利确认，而不是 Anthropic 下游 SaaS 毛利。
- **Amazon 内部使用（Rufus、广告、Alexa+）：** 相对规模小于 Meta 广告业务；Alexa+ 订阅（$19.99/月或 Prime 免费）尚处早期。
- **结论：** Amazon Q1 2026 TTM FCF 仅 $1.2bn（Card 04），需要边际 AI MW 从第 4 层向第 3/1 层迁移。在 Bedrock 工作负载放量与 AWS 原生 AI 应用规模化之前，AI Capex 与 AI 每 MW 收入之间的差距，在 Amazon 处最大。

## 4. 每 MW 收入要跨过多少才能支撑当前估值

简化估算：

- 四家公司 2026 年估值的 EV/经营现金流 倍数约在 18–28× 区间。
- 要在 2026–2028 年 AI MW 容量翻倍的同时维持当前倍数，增量 MW 必须产生与公司历史毛利率（MSFT/META 约 70%、GOOGL 约 57%、AWS 分部约 50%）一致的毛利。
- 这意味着所需每 MW 毛利约为：MSFT/GOOGL/META **$5–8M/MW/年**，AWS **$4–6M/MW/年**——只有当新增 MW 中第 1 层 + 第 2 层占主导时，才显著高于 $3.5–4M 成本下限。

**估值裂缝** 出现在 AI MW 扩张速度超过第 1/2 层变现速度的情形。此时超大规模厂商在边际上等于把高毛利软件现金流换成低毛利基础设施现金流——结构性倍数压缩。

## 5. 2H26 需要跟踪的工作负载层信号

1. **Microsoft 365 Copilot 付费座席数** — 若 2026 年底带 Copilot 的商业席位超过约 50M，第 1 层变现走在轨道上。
2. **Google Search AI Overviews 覆盖度与 CPM 披露** — 任何对生成式回答变现的直接量化。
3. **AWS Bedrock 收入年化** — Amazon 已开始定性披露 AI 服务增长；定量 Bedrock 披露将是第 3 层拐点信号。
4. **Meta Advantage+ 广告收入占比** — 在某些分部已超过 50%；进一步份额提升将验证隐含每 MW 经济。
5. **Token 价格压缩** — 每次 $/Mtoken 下降约 50%（模型效率、蒸馏、硬件成本），通过提升单位 MW 吞吐量，机械式抬高每 MW 收入。
6. **GPU 利用率披露**（罕见但在 CFO 评论中渐多）— 第 3/4 层机群利用率 >80% 是边际经济与超边际经济的分水岭。

## 6. 本卡片如何综合此前链条

- **Card 01（宏观）：** AI 近端受电力约束。**确认；本卡把约束计入每 MW 经济。**
- **Card 02（能源）：** SMR 在 2030 年之后——桥接靠燃气、核电重启、输电升级。**接受；桥接成本嵌入 2.1 节中 $0.55–0.85M/MW/年的电费行。**
- **Card 03（公用事业）：** $20bn 电网账单 + 核电重启大量由超大规模厂商通过大负荷关税承担。**接受；嵌入成本栈。**
- **Card 04（金融）：** 是 FCF 折价而非偿付危机；Amazon 暴露最大。**确认并强化：Amazon 的 FCF 敏感性恰恰对应 AI MW 在最低毛利层变现——这不是巧合。**
- **本卡（TMT）：** 估值防线建立在第 1 层（SaaS 嵌入推理）与第 2 层（广告增量推理）的每 MW 毛利上。第 4 层裸算力出租独自不足以在新能源成本栈下支撑超大规模厂商倍数。

## 7. 底线

SMR-AI 主线现在有了干净的收口：**电力不再免费、Capex 不再可选，唯一持久的防线是 AI 推理层能 *倍增* 而非仅 *出租* 的工作负载变现。** 已经预先建好 SaaS 分发与广告库存的超大规模厂商（MSFT、GOOGL、META），有可用的每 MW 收入路径来摊销新增能源账单。主要在卖 MW 本身的厂商（AMZN/AWS），安全边际最窄，最依赖 Bedrock 与 Anthropic 驱动的工作负载结构迁移。

下一步分析是把这些按工作负载的经济性翻译成美股大型科技板块的配置视角：在新成本下限既成事实之后，美股大科技、软件与 AI 基础设施的哪些子板块提供风险调整后最具吸引力的暴露。

## 来源

[^1]: Microsoft，FY2025 年报 — Productivity and Business Processes（M365 Commercial）、Intelligent Cloud（Azure）与 AI 评论：https://www.microsoft.com/investor/reports/ar25/index.html
[^2]: Alphabet，FY2025 Form 10-K — Search、Google Cloud 与 AI 整合披露：https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm
[^3]: Alphabet，Q1 2026 earnings release — 分部收入与 AI 评论：https://s206.q4cdn.com/479360582/files/doc_financials/2026/q1/2026q1-alphabet-earnings-release.pdf
[^4]: Amazon，FY2025 Form 10-K 与 Q1 2026 release — AWS 分部收入与经营利润率：https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm 与 https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-First-Quarter-Results/
[^5]: Meta，FY2025 Form 10-K 与 Q1 2026 release — Family of Apps 收入、AI Capex 评论：https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm
[^6]: CoreWeave，S-1 / FY2025 10-K 与公开按需 GPU 定价 — 用作 Tier 4 商品出租 benchmark：https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=coreweave
[^7]: SemiAnalysis 与 Dell'Oro Group 关于 AI 机柜 BoM、功率密度与每 MW Capex 的周期性 note（用作 2.1 节成本栈交叉验证）。

## Follow-up

- Analyst: offshore-strategist
- Topic: 美股大科技与 AI 基础设施的板块配置：在每 MW 经济分层之下的赢家与输家
- Question: 在 Card 05 给出的每 MW 成本下限（约 $3.5–4M/MW/年）与四层变现分布既成事实之后，美股投资者应如何在 MSFT/GOOGL/META/AMZN 与 AI 基础设施供应链（电力、半导体、数据中心 REIT、独立云如 CoreWeave、模型实验室）之间重新分配仓位，以获得风险调整后最佳的 AI 暴露？
