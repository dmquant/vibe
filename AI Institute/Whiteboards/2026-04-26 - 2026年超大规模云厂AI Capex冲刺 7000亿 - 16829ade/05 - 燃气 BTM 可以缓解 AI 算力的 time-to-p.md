---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "ESG与主题"
---

# 燃气 BTM 可以缓解 AI 算力的 time-to-power 瓶颈，但会把约束转移到 Scope 1/2 披露、24/7 可交付清洁电力和高质量 CDR 供给，成为 2027 后云厂估值与声誉的非线性压力项。

Analyst: **ESG Analyst**
Status: **completed**
Stance: **stress-test**
Completed: **26/04/2026, 23:45:41**

## Links

- Whiteboard topic: [[2026年超大规模云厂AI Capex冲刺~ 7000亿的可持续性]]
- Card topic: [[燃气 BTM 可以缓解 AI 算力的 time-to-power 瓶颈，但会把约束转移到 Scope 1 2 披露、24 7 可交付清洁电力和高质量 CDR 供给，成为 2027 后云厂估值与声誉的非线性压力项。]]
- Analyst: [[ESG Analyst]]
- Analyst level: [[ESG与主题]]

## Topic

燃气 BTM 可以缓解 AI 算力的 time-to-power 瓶颈，但会把约束转移到 Scope 1/2 披露、24/7 可交付清洁电力和高质量 CDR 供给，成为 2027 后云厂估值与声誉的非线性压力项。

## Question

Investigate the topic "燃气 BTM 可以缓解 AI 算力的 time-to-power 瓶颈，但会把约束转移到 Scope 1/2 披露、24/7 可交付清洁电力和高质量 CDR 供给，成为 2027 后云厂估值与声誉的非线性压力项。" and make the strongest evidence-based judgment you can.

## Summary

本卡压测 Card 04：20-40 GW 燃气 BTM 满负荷将带来约 60-140 MtCO2e/年净零补偿需求，2026-2030 累计约 160-700 MtCO2e，远超 durable CDR 实际交付能力。按 $300/t 计，Big 4 年成本约 $18-42B；按 $600/t 升至 $36-84B，可吞噬早期 AI 云毛利 20% 以上。Microsoft 披露风险最高，Google 24/7 CFE 声誉风险最高。

## Report

# Card 05 · ESG分析师 · Stress-Test
## AI 数据中心燃气 BTM 对 Big 4 净零承诺、Scope 2 与高质量 CDR 的压力

> 立场：**stress-test**。我支持 Card 04 的核心判断：2030 年前燃气 BTM 是 AI 算力交付的可复制边际电源，核电/地热是稀缺清洁 firm power 期权。但我对其隐含假设做更严格压测：如果 Big 4 真以 20-40 GW 燃气 BTM 支撑 AI Capex，ESG 约束不是“买 REC 即可归零”，而是会转化为 **60-140 MtCO2e/年的高质量 CDR 或碳信用需求**、**每年 $18-84B 的潜在中高质量抵消成本**，并在 GHG Protocol 强化 Scope 2 口径后放大披露与绿色声誉风险。

---

## 一、会计口径先拆清：燃气 BTM 不一定是 Scope 2，但一定是净零压力

GHG Protocol 现行 Scope 2 Guidance 对 BTM 有一个关键区分：如果公司拥有/运营天然气发电资产并直接消耗其电力，排放应进入 Scope 1，而不是再重复进入 Scope 2；若由外部 IPP/公用事业持有机组并向数据中心售电，则云厂通常记录 Scope 2，发电商记录 Scope 1。也就是说，**BTM 的合同结构会改变 scope 分类，但不会改变物理排放或净零承诺压力**。

GHG Protocol 的 Scope 2 修订方向正在提高年度匹配模式的门槛。其 2025 年咨询文件和工作组说明提出：使用合同工具的组织可能需要按小时匹配用电，并来自可交付的电网区域；咨询还涉及 additionality、残余电力因子与避免双重计算。GHG Protocol 同时说明最终完整修订版计划在 2027 年底发布，部分关键 Scope 2 文本预计在 2026 年推进。对 Big 4 来说，这意味着：

| 旧口径下的常见做法 | 强化口径下的压力点 | 对燃气 BTM 的含义 |
|---|---|---|
| 年度 REC/PPA 匹配全球用电 | 小时匹配要求更高 | 夜间/低风低光时段的燃气发电更难被远端年化 REC 覆盖 |
| 跨区域采购 EAC | deliverability 要求更严 | 德州燃气 BTM 不能轻易用其他不可交付区域的清洁属性抵消 |
| 以市场法 Scope 2 接近零排放 | 残余电力因子与化石默认因子更保守 | 未被合格合同覆盖的用电可能按更高化石因子入账 |
| 把碳信用用于“中和”叙事 | 抵消通常不能扣减 Scope 1/2 库存 | CDR 是净零/碳中和声明工具，不是 Scope 2 归零按钮 |

**结论**：本卡把 CDR 需求视为“维持净零/碳负承诺的补偿需求”，不是把 Scope 1/2 账面排放直接扣成零。这个差异会成为 2026-2030 年披露风险的核心。

---

## 二、20-40 GW 燃气 BTM 对应多少排放与 CDR 需求？

核心假设：

| 参数 | 基准假设 |
|---|---|
| 燃气 BTM 容量 | 20-40 GW |
| 利用小时 | 80% capacity factor，即 7,008 小时/年 |
| 排放因子 | EIA 2023 美国天然气发电平均 0.96 lb CO2/kWh，约 0.435 tCO2/MWh |
| 上游甲烷与燃料链 | 在烟囱 CO2 基础上加 5-15% CO2e 敏感性 |
| CDR/信用覆盖率 | 对净零承诺按 1:1 覆盖；Microsoft 碳负承诺理论上需要高于 1:1 |

### 年化 run-rate：2030 满负荷口径

| 燃气 BTM 容量 | 年发电量 | 烟囱 CO2 | 含上游甲烷 CO2e | 维持净零所需 CDR/信用 |
|---:|---:|---:|---:|---:|
| 20 GW | 140 TWh | 61 MtCO2/年 | 64-70 MtCO2e/年 | 约 60-70 Mt/年 |
| 30 GW | 210 TWh | 91 MtCO2/年 | 96-105 MtCO2e/年 | 约 90-105 Mt/年 |
| 40 GW | 280 TWh | 122 MtCO2/年 | 128-140 MtCO2e/年 | 约 120-140 Mt/年 |

### 2026-2030 累计口径

| 情景 | 假设 | 2026-2030 累计排放/抵消需求 |
|---|---|---:|
| 线性爬坡 | 2026 从低基数爬坡，2030 达 20-40 GW | 约 160-350 MtCO2e |
| 快速投运 | 2026-2027 即接近 20-40 GW run-rate | 约 320-700 MtCO2e |
| 碳负溢价 | 对 Microsoft 类“carbon negative”目标加 10-30% 额外净移除 | 可升至 350-900 MtCO2e 等效需求 |

**压测结论**：Card 04 的 52-65 MtCO2/年排放估算适合作为 20 GW 左右基准；若 Big 4 合计走到 40 GW，ESG 侧的年化缺口会接近 **120-140 MtCO2e/年**，相当于把当前新兴 CDR 市场一次性推到工业级采购规模。

---

## 三、CDR 市场供给不够：最大买家也只能证明“合同存在”，不能证明“交付充足”

高质量 CDR 的约束在于交付，不只是签约。CDR.fyi 统计显示，2024 年 durable CDR 采购接近 8 Mt，但实际交付仅 318.6 kt，交付/订购比约 4.4%；公开订单加权均价从 2023 年的约 $490/t 降到 2024 年的约 $320/t。2025 年 Q2 又出现 Microsoft 主导的巨量 BECCS 采购，单季 Microsoft 合同量 14.6 Mt，占公开 Q2 采购量约 94%，且许多 BECCS 项目交付窗口落在 2028-2039 年。

截至 2026 年 Q1，ClimeFi 基于 CDR.fyi 的口径显示 durable CDR 累计承诺约 44.2 MtCO2；Microsoft 自身披露 FY2025 签署了 45 MtCO2 的 CDR 协议。两组数字口径不完全一致，说明“durable、nature-based、near-term delivery、long-term offtake”之间边界仍然复杂。但即便采用最宽松理解，Big 4 的燃气 BTM 需求也会很快超过市场：

| 指标 | 规模 | 与 Big 4 燃气 BTM 需求对比 |
|---|---:|---|
| 2024 durable CDR 实际交付 | 0.319 Mt | 仅为 20 GW 年化需求的约 0.5% |
| Q1 2026 durable CDR 累计承诺 | 约 44.2 Mt | 不足 20 GW 一年需求 |
| Microsoft FY2025 官方 CDR 合同 | 45 Mt | 约等于 20 GW 燃气 BTM 8-9 个月排放 |
| 40 GW 燃气 BTM 年化需求 | 120-140 Mt/年 | 约为当前累计 durable 承诺的 3 倍，且每年重复发生 |

**这不是价格问题，而是交付曲线问题**：如果 Big 4 同时抢购高质量 durable CDR，市场会先表现为长期 offtake 合同膨胀，然后才可能在 2028 年以后看到 BECCS、生物炭、矿化、DACCS 的实物交付放量。2026-2027 年，真实可交付吨数不足会放大“买未来合同当今天净零证明”的质疑。

---

## 四、成本会吞噬多少 AI 云毛利？

CDR 成本按三档估算：

| 价格档 | 代表含义 |
|---:|---|
| $100/t | 低价高质量自然基/生物炭组合，永久性与 MRV 仍需筛选 |
| $300/t | 当前公开 durable CDR 加权均价附近，接近基准压力测试 |
| $600/t | DACCS/高永久性组合或供给紧张时的高质量组合 |

### 每 1 GW 燃气 BTM 的单位经济性

1 GW 燃气 BTM 在 80% 利用率下约排放 3.05 MtCO2/年；含上游甲烷后约 3.2-3.5 MtCO2e/年。

| CDR 价格 | 每 1 GW 年化 CDR 成本 | 对 AI 云毛利的含义 |
|---:|---:|---|
| $100/t | $0.3-0.35B/GW/年 | 可被电价/租金轻度传导，但会压缩边际项目 IRR |
| $300/t | $0.9-1.05B/GW/年 | 已相当于一个 GW 级 AI campus 的重大固定成本 |
| $600/t | $1.8-2.1B/GW/年 | 会迫使云厂在客户定价、碳声明和项目选址之间取舍 |

### Big 4 合计年化成本

| 燃气 BTM 容量 | $100/t | $300/t | $600/t |
|---:|---:|---:|---:|
| 20 GW | $6-7B/年 | $18-21B/年 | $36-42B/年 |
| 30 GW | $10-11B/年 | $29-32B/年 | $58-63B/年 |
| 40 GW | $13-14B/年 | $38-42B/年 | $77-84B/年 |

把它放进 AI 云毛利框架：

| AI 云收入/毛利情景 | 假设 | $300/t CDR 成本吞噬率 | $600/t CDR 成本吞噬率 |
|---|---|---:|---:|
| 早期兑现不足 | AI 云收入 $100-150B，毛利率 55-60% | 12-38% | 24-76% |
| 基准放量 | AI 云收入 $250-350B，毛利率 55-60% | 9-28% | 18-56% |
| 乐观成熟 | AI 云收入 $450-600B，毛利率 60-65% | 5-16% | 10-31% |

**核心判断**：如果 AI 云收入快速爬坡，$300/t 的 CDR 成本仍可被吸收，但它会吃掉成熟期 AI 云毛利的高个位数到二成；如果 2027 年 AI 收入兑现落后于 Capex 和折旧，$300/t 已足以吞噬早期 AI 云毛利的 20%+，$600/t 则可能使部分燃气 BTM 算力项目从“高毛利云服务”变成“带 ESG 负债的电力套利”。

---

## 五、公司排序：谁最容易出现绿色声誉或披露风险？

### 1. Microsoft：最高披露风险，也是最高 CDR 市场挤出风险

Microsoft 的承诺最硬：2030 年 carbon negative，并到 2050 年移除历史排放。其 2025 年环境报告披露，FY24 已签约近 22 Mt CDR；2025 年又披露 FY2025 签署 45 Mt CDR 协议。但 Microsoft 同时承认，受 AI 和云扩张影响，总排放较 2020 基线增加 23.4%，Scope 3 较 2020 增加 26%，并表示正在从非额外性 EAC 转向把更多 CFE 带到运营电网。

风险点：

- 如果新增燃气 BTM 进入自有/控制边界，Scope 1 会抬升，CDR 不能直接抵扣库存排放。
- 如果通过第三方 BTM PPA 进入 Scope 2，小时匹配和 deliverability 会削弱年度 REC 的可用性。
- Microsoft 已经是 CDR 市场价格发现者；若继续加码，会被质疑“用未来 CDR 合同包装当期 AI 排放”。

**评级：披露风险最高，绿色声誉风险高，财务吸收能力中高。**

### 2. Google/Alphabet：24/7 CFE 承诺最容易被燃气 BTM 正面冲突

Google 的目标更直接指向电力质量：2030 年在每个运营电网实现 24/7 carbon-free energy。Google 2025 环境更新显示，2024 年数据中心用电需求增加 27%，数据中心能源排放下降 12%，小时 CFE 从 64% 升至 66%，但总排放同比仍增加 11%。这说明 Google 在清洁电力执行上领先，但也暴露一个事实：**距离 24/7、每个电网、100% CFE 仍有巨大缺口**。

风险点：

- 燃气 BTM 是对 24/7 CFE 目标最难解释的电源，除非配套 CCS、可交付清洁 firm power 或等量高质量 CDR。
- 若 Google 将目标叙事从“承诺”弱化为“moonshot”，资本市场与 NGO 会把它解读为 AI 能源压力下的目标退让。
- Google Cloud 客户本身也有 Scope 3/供应链披露压力，低碳云的品牌溢价会受到检验。

**评级：绿色声誉风险最高，披露风险高，财务吸收能力中等。**

### 3. Meta：项目型燃气暴露高，但云客户传导压力较低

Meta 的目标是 2030 年价值链净零，并持续披露 100% 电力匹配和新增可再生能源。其 2025 Sustainability Report 摘要称，2024 年通过全球项目匹配 100% 电力使用，并带来接近 29 GW 新清洁/可再生能源。但 Meta 的 AI 数据中心是内部广告/社交/模型能力投入，不像 AWS/Azure/GCP 那样直接面向企业云客户销售低碳算力。

风险点：

- 若超大规模 AI campus 使用专用燃气发电，本地社区、空气污染、用水和电价公平性会成为 ESG 争议焦点。
- 2030 价值链净零目标会受到 Scope 3 硬件、建筑材料和电力排放同时夹击。
- 但 Meta 广告现金流强，且没有大规模企业云客户要求其提供逐小时低碳云账单，商业传导压力低于 Microsoft/Google/Amazon。

**评级：项目声誉风险高，披露风险中高，财务吸收能力较强。**

### 4. Amazon：绝对排放最大，但 2040 目标给予时间缓冲

Amazon 2024 可持续发展摘要显示，总碳足迹从 2023 年 64.38 MtCO2e 升至 2024 年 68.25 MtCO2e；同时已连续两年以可再生能源匹配 100% 全球运营用电，并维持 2040 年净零承诺。Amazon 的风险在于 AWS 是企业客户 Scope 3 的核心基础设施供应商，而 Amazon 的“100% renewable matching”在小时匹配、deliverability 和 additionality 口径下会被重新审视。

风险点：

- 2040 目标比 2030 目标缓和，但 AWS 客户可能更早要求 24/7 CFE 与区域可交付数据。
- 年度匹配口径若被市场折价，Amazon 的“100% renewable”叙事会从领先指标变成最低门槛。
- Amazon 总排放基数大，新增燃气 BTM 的边际争议容易被零售物流排放掩盖，反而形成复杂披露风险。

**评级：披露风险中高，绿色声誉风险中高，财务吸收能力强。**

---

## 六、对前序主线的修正

| 前序判断 | 本卡 stress-test 修正 |
|---|---|
| 电网瓶颈迫使云厂转向燃气 BTM | 同意，但燃气 BTM 把瓶颈从“接入排队”转移到“碳核算与 CDR 供给” |
| 燃气 BTM 到电价值可覆盖中等碳成本 | 只在 $100-300/t 成本、AI 收入如期放量时成立；$600/t 高质量 CDR 会显著侵蚀毛利 |
| 高质量 CDR 将形成结构性挤压 | 强化：20-40 GW 年化需求 60-140 MtCO2e，已经超过当前 durable CDR 市场可交付能力两个数量级 |
| 核电是长期清洁 firm power 期权 | 同意；核电/地热/长时储能的价值不只在电价，而在避免 CDR 采购和绿色声誉折价 |

---

## 七、投资与监控信号

### ESG 红线信号

| 信号 | 解释 |
|---|---|
| 云厂披露“market-based Scope 2 仍为零”，但新增燃气 BTM 不披露小时/区域匹配 | 高风险；可能被视为年度 REC 掩盖化石电力 |
| 2030 目标措辞从 commitment 转向 ambition/moonshot | 表明内部已承认目标不可达，估值应加入声誉折价 |
| 大额 CDR 合同交付期集中在 2030 年后 | 可支持长期市场培育，但不能完全支撑 2026-2028 当期净零声明 |
| AWS/Azure/GCP 开始向客户单列“24/7 CFE premium” | 表明 ESG 成本开始商业化传导，云价格体系进入新阶段 |
| GHG Protocol 最终文本保留小时匹配 + deliverability | 年度 REC 模式重估，Google/Microsoft 风险最大 |

### 受益与受损资产映射

| 方向 | 受益/受损逻辑 |
|---|---|
| 高质量 CDR 开发商 | BECCS、生物炭、矿化、DACCS 获得长期 offtake，但项目交付风险高 |
| 24/7 清洁 firm power | 核电延寿、地热、长时储能、可交付区域 PPA 溢价上升 |
| 燃气 BTM 设备 | 短期受益于 time-to-power，但若碳成本内生化，估值需要折价 |
| 云厂下游 | Microsoft/Google ESG 溢价最易被重估；Amazon/Meta 更多体现为披露与社区争议 |

---

## 八、给下一卡的明确移交

本卡已经把 ESG 约束量化为可检验的成本与披露风险。下一步不应再泛泛讨论“绿色风险”，而应进入法规和披露文本层面：GHG Protocol、IFRS S2、CSRD/ESRS、SEC 气候披露及反绿色洗牌执法，哪些会真正迫使 Big 4 把燃气 BTM、年度 REC、CDR 合同交付期和客户低碳云声明讲清楚？

**handoff 至 compliance-officer [reviewer]**：现在调用 reviewer 是因为 Card 04-05 已经形成具体脆弱点，即燃气 BTM 与 2030/2040 净零承诺、Scope 2 小时匹配、CDR 交付不足之间的披露冲突；合规官最适合判断这些冲突会如何转化为监管、诉讼、绿色洗牌和客户合同风险。

---

## 主要资料来源

- GHG Protocol，《Upcoming Scope 2 Public Consultation: Hourly Matching and Deliverability》，说明拟要求合同工具按小时匹配并来自可交付电网区域：https://ghgprotocol.org/blog/upcoming-scope-2-public-consultation-hourly-matching-and-deliverability
- GHG Protocol，《Scope 2 Standard Advances》，说明 Scope 2 修订时间表与 additionality 等咨询议题：https://ghgprotocol.org/blog/scope-2-standard-advances-isb-approves-consultation-market-and-location-based-revisions
- GHG Protocol，《Scope 2 Public Consultation》，关于小时数据、残余 mix、化石默认因子和双重计算的咨询文本：https://ghgprotocol.org/sites/default/files/2025-10/GHG-Protocol-Scope2-Public-Consultation.pdf
- GHG Protocol，《Scope 2 Guidance》，关于自有天然气发电直接用电应进入 Scope 1、避免 Scope 1/2 重复计算的现行指导：https://ghgprotocol.org/sites/default/files/2023-03/Scope%202%20Guidance.pdf
- EIA，美国天然气发电平均排放因子 0.96 lb CO2/kWh：https://www.eia.gov/tools/faqs/faq.php?id=74&t=11
- IEA，《Energy and AI》，数据中心用电到 2030 年约 945 TWh，美国增量约 240 TWh：https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai
- Global Energy Monitor，美国 2025 年在开发燃气发电约 252 GW，超过三分之一拟直接为数据中心提供 on-site/BTM 电力：https://globalenergymonitor.org/report/betting-big-on-data-centers-u-s-now-leads-world-for-new-gas-power-development/
- Microsoft 2025 Environmental Sustainability Report，FY24 CDR 与 CFE 合同数据：https://www.microsoft.com/en-us/corporate-responsibility/sustainability/report/
- Microsoft On the Issues，FY24 总排放较 2020 基线上升 23.4%，Scope 3 上升 26%，并转向更高质量 CFE：https://blogs.microsoft.com/on-the-issues/2025/05/29/environmental-sustainability-report/
- Microsoft Source，FY2025 签署 45 MtCO2 CDR 协议：https://news.microsoft.com/source/features/sustainability/from-farms-to-oceans-how-microsoft-is-working-to-scale-carbon-dioxide-removal/
- Google 2025 Environmental Report 更新，数据中心用电 +27%、能源排放 -12%、小时 CFE 66%、总排放同比 +11%：https://blog.google/company-news/outreach-and-initiatives/sustainability/environmental-report-2025/
- Amazon 2024 Sustainability Executive Summary，总碳足迹 68.25 MtCO2e、100% 可再生能源匹配：https://sustainability.aboutamazon.com/2024-sustainability-executive-summary.pdf
- Meta 2025 Sustainability Report 摘要，2024 年匹配 100% 电力并带来接近 29 GW 清洁/可再生能源：https://sustainability.atmeta.com/blog/2025/09/12/meta-launches-2025-sustainability-report/
- CDR.fyi，2024 durable CDR 市场回顾，采购、交付和价格：https://www.cdr.fyi/blog/2024-year-in-review
- CDR.fyi，2025 Q2 durable CDR 市场更新，Microsoft 采购集中度与 BECCS 交付窗口：https://www.cdr.fyi/blog/2025-q2-durable-cdr-market-update-biggest-quarter-ever
- CDR.fyi/OPIS，《Durable CDR Market Pricing Survey》，2025/2030 CDR 价格预期：https://www.cdr.fyi/reports/pricing-survey-jan-2025.pdf
- ClimeFi，2026 Q1 durable CDR 市场回顾，累计承诺与非 Microsoft 需求：https://www.climefi.com/blog-posts/q1-2026-cdr-market-review

## Follow-up

- Analyst: compliance-officer
- Topic: 燃气 BTM、年度 REC 与 CDR 合同交付期在气候披露和绿色洗牌监管下的合规风险
- Question: 在 GHG Protocol Scope 2 修订、IFRS S2、CSRD/ESRS、SEC 气候披露及反绿色洗牌执法背景下，Big 4 对燃气 BTM、24/7 CFE、年度 REC 和远期 CDR 合同应如何披露，哪些公司最可能面临监管、诉讼或客户合同风险？
