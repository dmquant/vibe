---
source: ai-institute
resource_type: whiteboard-card
card_index: 6
status: completed
analyst_level: "风控与合规"
---

# 燃气 BTM 的核心合规风险不是能否买到 REC/CDR，而是 Big 4 能否证明 Scope 分类、小时/区域可交付性和 CDR 交付期足以支撑其低碳云、24/7 CFE 与净零声明。

Analyst: **Compliance Officer**
Status: **completed**
Stance: **stress-test**
Completed: **27/04/2026, 00:10:43**

## Links

- Whiteboard topic: [[2026年超大规模云厂AI Capex冲刺~ 7000亿的可持续性]]
- Card topic: [[燃气 BTM 的核心合规风险不是能否买到 REC CDR，而是 Big 4 能否证明 Scope 分类、小时 区域可交付性和 CDR 交付期足以支撑其低碳云、24 7 CFE 与净零声明。]]
- Analyst: [[Compliance Officer]]
- Analyst level: [[风控与合规]]

## Topic

燃气 BTM 的核心合规风险不是能否买到 REC/CDR，而是 Big 4 能否证明 Scope 分类、小时/区域可交付性和 CDR 交付期足以支撑其低碳云、24/7 CFE 与净零声明。

## Question

Investigate the topic "燃气 BTM 的核心合规风险不是能否买到 REC/CDR，而是 Big 4 能否证明 Scope 分类、小时/区域可交付性和 CDR 交付期足以支撑其低碳云、24/7 CFE 与净零声明。" and make the strongest evidence-based judgment you can.

## Summary

本卡压测 Card 04-05：燃气 BTM 不能靠年度 REC 或远期 CDR 消除披露风险。Big 4 应分开披露 BTM 控制权和 Scope 分类、REC vintage/地理/退役、24/7 CFE 小时缺口、CDR 签约/交付/退役量。Microsoft 综合披露与客户合同风险最高，Google 绿色洗牌风险最高，Amazon AWS 客户合同风险最高，Meta 项目与社区风险更突出。

## Report

# Card 06 · 合规官 · Stress-Test
## 燃气 BTM、年度 REC 与远期 CDR 合同的气候披露和绿色洗牌风险

> 立场：**stress-test**。我支持 Card 04-05 的主线：燃气 BTM 可以绕过电网接入瓶颈，但不会绕过气候披露。合规层面的关键判断是：Big 4 不能再把“年度 REC 匹配”“远期 CDR 签约”和“24/7 CFE 愿景”混成一个净零叙事。2026-2028 年真正高风险的不是买不到证书，而是把不可交付、未退役、未交付或未逐小时匹配的工具用于当期低碳云、净零或碳负声明。

---

## 一、监管结论先行：SEC 不是主战场，Scope 2、ESRS、IFRS S2 和反洗牌规则才是硬约束

当前规则组合对 Big 4 的约束可以分成四层：

| 规则/执法线 | 当前状态与核心要求 | 对 AI 数据中心的直接含义 |
|---|---|---|
| GHG Protocol Scope 2 修订 | 2025 年公开咨询提出强化市场法，核心方向是小时匹配、可交付区域和更高透明度；最终文本仍待定 | 年度 REC 仍可披露，但很难支撑“24/7”“本地无碳”“化石电力已抵消”的强声明 |
| IFRS S2 | 已于 2024 年起生效，要求披露气候风险、Scope 1/2/3、计量方法、假设，以及净排放目标对碳信用的依赖 | 燃气 BTM、CDR 交付期和信用质量若影响现金流、融资或目标可信度，就应进入投资者披露 |
| CSRD/ESRS E1 | 要求披露 gross Scope 1、location-based 和 market-based Scope 2、重要 Scope 3；碳信用须与排放分开披露 | CDR/碳信用不能从 gross emissions 中扣除，不能掩盖燃气 BTM 的物理排放 |
| SEC/美国州法/FTC | SEC 2024 气候规则已被 SEC 于 2025 年停止抗辩且规则效力此前已暂停；但反欺诈、MD&A、加州 SB 253/261 和 FTC Green Guides 仍在 | 美国上市披露的气候规则压力下降，但误导性低碳云、可再生能源、碳中和声明仍有执法和诉讼风险 |
| EU 反绿色洗牌 | Directive (EU) 2024/825 已进入成员国转化期，禁止基于抵消声称产品/服务具有温室气体中性、降低或正面影响 | 面向欧盟客户销售“carbon neutral cloud”“net-zero compute”时，若主要依靠 offset/CDR，会是高风险措辞 |

**合规判断**：SEC 气候规则停摆不等于 Big 4 可以降低披露标准。最硬的触发器来自三处：一是 GHG Protocol 口径变化会改变 Scope 2 市场法可信度；二是 IFRS S2/ESRS 要求把 gross emissions、碳信用和目标进度拆开；三是 EU/FTC 会把不精确的产品级低碳声明转化为绿色洗牌执法或客户索赔。

---

## 二、Big 4 应如何披露：四类工具必须拆账

### 1. 燃气 BTM：先披露控制权，再披露排放，不能用 REC/CDR 直接冲减

燃气 BTM 的合规边界取决于谁拥有或控制机组：

| 合同/资产结构 | 推荐披露口径 | 风险点 |
|---|---|---|
| 云厂拥有或实质运营燃气机组 | 进入 Scope 1；同时披露燃料用量、发电量、排放因子、甲烷/燃料链 Scope 3 category 3 | 若仍宣传“数据中心 100% 可再生电力”，容易被认为用 REC 掩盖自有化石燃烧 |
| 第三方 IPP 持有 BTM，云厂签 PPA 或专线购电 | 云厂通常进入 Scope 2；发电商记录 Scope 1；云厂还需披露合同电力的 emission factor | 如果电力是专属燃气供给，却用无关区域年度 REC 做市场法归零，风险上升 |
| 混合模式：云厂融资、保底、容量付款或调度控制 | 应解释 operational control、财务控制和合同安排；必要时披露判断依据 | “法律上第三方、经济上自用”的结构若被用来规避 Scope 1，会有审计和监管质疑 |

披露应包含至少七项：容量 MW/GW、年发电量 MWh、燃料来源、排放因子、Scope 分类依据、location-based 与 market-based 影响、是否纳入净零/碳负目标进度。若 Card 05 的 20-40 GW 燃气 BTM 假设成立，年化 60-140 MtCO2e 已足以成为投资者重大转型风险，不宜只放在自愿 ESG 附录。

### 2. 24/7 CFE：只能作为补充绩效指标，不能替代 Scope 2 库存

24/7 CFE 的披露应与 GHG inventory 分开：

| 应披露项目 | 合规含义 |
|---|---|
| 每个电网区域的小时 CFE 百分比 | 证明不是全球年度平均值 |
| 未匹配小时、技术类型和缺口原因 | 让用户知道低风低光或负荷峰值时段是否由燃气支撑 |
| 清洁电力是否可交付至负荷所在区域 | 避免用远端 REC 支撑本地 24/7 声明 |
| 是否使用核电、地热、长时储能、带 CCS 的燃气或 CDR | 区分“零碳电力”“低碳电力”和“事后补偿” |

合规底线是：**可以说“我们正在提升 24/7 CFE 覆盖率”，但不能把年度 REC 匹配后的市场法 Scope 2 接近零，表述成每小时、每个区域、每项云服务都无碳。**

### 3. 年度 REC：可以用于 market-based Scope 2，但不得过度外推

年度 REC 的风险不在于不能用，而在于声明范围过宽。Big 4 应披露：

| 披露维度 | 建议 |
|---|---|
| vintage | REC 产生年份是否与用电年份一致 |
| 地理范围 | 是否在同一电网或可交付区域，是否跨洲/跨市场 |
| bundled/unbundled | 是 bundled PPA、绿色电价，还是单独购买的 unbundled REC |
| 退役/注销 | 哪个 registry，何时 retired/cancelled，是否存在双重主张 |
| residual mix | 未被合同工具覆盖的用电如何使用残余排放因子 |
| 声明限制 | 明确 annual matching 不等于 24/7 CFE，不等于本地新增清洁电力 |

FTC Green Guides 对 renewable energy claims 的逻辑很直接：如果企业声称使用可再生能源，需要有相应 REC 或证书支撑；反过来，如果把自己产生的可再生属性卖掉，就不能再声称自己使用该可再生能源。对云厂来说，这意味着客户低碳云证书必须能追溯到未被重复出售或重复主张的属性。

### 4. 远期 CDR 合同：签约量、交付量、退役量必须分开

CDR 最大合规雷区是“合同存在”被包装成“当期已中和”。建议披露三张表：

| 表 | 必填信息 |
|---|---|
| 已交付/已退役 CDR | 项目、吨数、registry、retirement date、是否 reduction/removal、是否 nature-based/technological、永久性年限 |
| 已签约未交付 CDR | 交付年份、项目开发阶段、履约条件、价格/价格区间、违约或替代条款 |
| 目标依赖度 | 净零/碳负目标中多少比例依靠 CDR，多少依靠实际减排，是否有 gross target |

IFRS S2 要求企业披露净排放目标对碳信用的依赖、第三方认证、碳信用类型以及信用可靠性和完整性的关键因素。ESRS E1 更严格：碳信用要与 GHG emissions 分开披露，不能作为 Scope 1/2/3 排放的抵减项，也不能作为达成 gross emission reduction target 的手段。Big 4 若把 2030 后 BECCS/DACCS offtake 用于解释 2026-2028 年 AI 排放，会成为最容易被攻击的披露点。

---

## 三、风险排序：Microsoft 监管披露风险最高，Google 绿色洗牌风险最高，Amazon 客户合同风险最高

| 公司 | 监管/披露风险 | 绿色洗牌风险 | 客户合同风险 | 总体判断 |
|---|---:|---:|---:|---|
| Microsoft | 很高 | 高 | 很高 | **综合风险最高**：2030 carbon negative 承诺最硬，Azure 企业客户最多，CDR 远期交付缺口最容易被放大 |
| Google/Alphabet | 高 | 很高 | 高 | **24/7 CFE 声誉风险最高**：目标最先进，也最容易被燃气 BTM 与年度 REC 冲突反噬 |
| Amazon | 中高 | 高 | 很高 | **客户合同风险最高**：AWS 客户会要求云服务碳足迹、可再生匹配和 Scope 3 数据可审计 |
| Meta | 中高 | 中高 | 中 | **项目与社区风险高，但合同传导较低**：AI 算力主要服务内部广告/模型体系，企业云低碳 SLA 压力小于前三家 |

### Microsoft：最高综合风险

Microsoft 已披露 AI 和云扩张推高总排放，并持续签署大规模 CDR 合同。问题不在于其透明度低，而在于承诺过硬：2030 carbon negative、2050 移除历史排放、Azure 企业客户供应链披露要求，都会使燃气 BTM 成为投资者和客户的高敏感项目。

主要触发器：

- 若自有或实质控制 BTM 机组，Scope 1 会抬升，CDR 不能从 gross Scope 1 扣除。
- 若通过第三方燃气 PPA 进入 Scope 2，年度 REC 对 24/7 和 deliverability 的支撑力会下降。
- 大额 CDR offtake 若交付期集中在 2030 年后，不能充分支撑 2026-2028 年的当期“中和”叙事。
- Azure 客户可能把低碳云数据写入采购、审计、赔偿或终止条款；碳数据错误会从声誉风险变成合同风险。

### Google/Alphabet：24/7 CFE 的绿色洗牌风险最高

Google 的 24/7 carbon-free energy 目标是行业最高标准之一，因此合规风险也最高。燃气 BTM 可以解决 time-to-power，但它天然与“每小时、每个运营电网无碳”的目标相冲突。Google 可以披露燃气作为过渡电源，但如果同时维持强 24/7 叙事，就必须说明哪些小时、哪些电网、哪些负荷仍由化石电力支撑。

主要触发器：

- 24/7 CFE 百分比改善慢于数据中心用电增长。
- 把年度 REC 或远端 PPA 的 market-based 减排效果表述成区域/小时级清洁供电。
- 面向 Google Cloud 客户销售低碳算力时，未区分 location-based、market-based 与 24/7 指标。
- 2030 目标措辞若从承诺弱化为 aspiration/moonshot，可能触发投资者对目标可信度的质疑。

### Amazon：AWS 客户合同风险最高

Amazon 的 2040 净零时间表比 Microsoft/Google 的 2030 压力小，但 AWS 是企业客户 Scope 3 与数字基础设施碳足迹的核心供应商。Amazon 已披露 2024 年碳足迹 68.25 MtCO2e，且 Scope 2/3 采用 market-based 方法。若年度 renewable matching 在 GHG Protocol 修订后被市场折价，AWS 的“低碳云”客户价值主张会面临合同层面再证明。

主要触发器：

- AWS 客户要求区域、小时、workload 级碳数据，而 Amazon 只能提供年度/全球匹配口径。
- 营销材料强调云迁移可显著降低碳足迹，但未充分限定假设、区域电网和工作负载边界。
- EU 客户依据 Directive 2024/825 或本地消费者/竞争法挑战 offset-based product/service neutrality claims。
- 大客户采购合同加入 sustainability representations、audit rights、service credit 或 indemnity 条款。

### Meta：相对低的客户合同风险，但项目审批和本地争议更高

Meta 的风险更像“项目合规 + 目标可信度”，不是企业云合同。其 AI 数据中心主要支撑内部产品，客户不会像采购 Azure/AWS/GCP 那样逐项索取云算力碳账单。但大型燃气 BTM 项目仍可能触发地方空气质量、用水、电价公平、社区许可和 2030 value-chain net zero 进度压力。

主要触发器：

- 新建 campus 配套燃气 BTM 但披露只强调 100% renewable matching。
- Scope 1/2 目标与 Scope 3 建筑、服务器和能源排放同时承压。
- 社区和 NGO 将本地空气污染与 AI 数据中心用电绑定，形成许可和诉讼阻力。

---

## 四、最可能引发执法、诉讼或客户索赔的五类表述

| 高风险表述 | 为什么危险 | 可接受替代表述 |
|---|---|---|
| “AI cloud is carbon neutral” | 若依赖 offset/CDR，EU 2024/825 对产品/服务层面的温室气体中性声明高度敏感 | “按年度 market-based Scope 2 方法匹配可再生电力；另披露未匹配小时和 CDR 使用” |
| “100% renewable powered data centers” | 若燃气 BTM 实际供电或 REC 不可交付，容易误导 | “全球年度用电以可再生属性匹配；各区域实际 CFE 覆盖率另行披露” |
| “24/7 carbon-free” | 如果只有部分区域或部分小时达成，属于范围夸大 | “2024 年在 X 个电网达到 Y% 小时 CFE，剩余缺口为 Z” |
| “CDR contracts offset AI emissions” | 远期合同未交付、未退役，不能证明当期中和 | “已签约 X Mt，其中 Y Mt 已交付/退役，Z Mt 计划于 2030 年后交付” |
| “gas BTM is clean/low-carbon power” | 未配 CCS 或低泄漏燃料链时，燃气仍是化石排放 | “燃气 BTM 是可靠性/交付期措施，相关排放进入 Scope 1/2 并单独披露” |

---

## 五、对前序主线的修正

| 前序判断 | 本卡合规压测 |
|---|---|
| 燃气 BTM 是 2026-2030 年可复制边际供给 | 同意，但燃气 BTM 的合同结构会决定 Scope 1/2 分类，且两种分类都不能被 CDR 直接冲减 |
| 年度 REC 可帮助维持 market-based Scope 2 低排放 | 只在披露边界明确时成立；在小时匹配、deliverability 和反洗牌规则下，年度 REC 不能支撑强 24/7 或产品级无碳声明 |
| 高质量 CDR 供给不足会成为成本压力 | 强化：合规压力不只来自价格，还来自交付期、退役证明、permanence、MRV 和是否能用于当期声明 |
| Microsoft/Google 风险最高 | 细化：Microsoft 是综合披露和客户合同风险最高，Google 是 24/7 CFE 绿色洗牌风险最高，Amazon 是 AWS 客户合同风险最高 |

---

## 六、投资者应监控的合规红线

| 红线信号 | 含义 |
|---|---|
| 披露新增燃气 BTM 容量，但不说明 Scope 1/2 分类和控制权判断 | 审计与监管质疑风险上升 |
| market-based Scope 2 继续接近零，但 location-based Scope 2 和燃气相关排放大幅上升 | 年度 REC 模式可能正在掩盖真实电力结构 |
| CDR 公告只披露签约量，不披露交付年、退役量和项目风险 | 当期净零/碳负声明支撑不足 |
| 云产品开始承诺 carbon neutral、net zero、100% renewable 或 24/7 CFE，但合同附录没有计量方法 | 客户索赔和审计争议概率上升 |
| GHG Protocol 最终 Scope 2 文本保留小时匹配和可交付区域要求 | 年度 REC 资产和低碳云叙事需要整体重估 |

---

## 七、给下一卡的明确移交

本卡已经把 Card 05 的 ESG 压力转化为可执行的披露和合规风险排序。下一步应回到 TMT/云业务层面：如果 Microsoft、Google 和 Amazon 被迫把低碳云声明从年度 REC 改为区域/小时/交付期可审计口径，客户合同、云定价和 AI 云毛利会如何变化？

**handoff 至 tmt-analyst [primary]**：选择 primary 分析师，是因为现在的问题已从合规红线转向云服务商业模式和客户合同定价。TMT 分析师最适合判断 Azure/AWS/GCP 是否能把 24/7 CFE premium、CDR 成本和更严格披露成本转嫁给企业客户，以及这会如何改变 AI Capex 的收入兑现路径。

---

## 主要资料来源

- GHG Protocol，《Upcoming Scope 2 Public Consultation: Hourly Matching and Deliverability》，关于 Scope 2 市场法修订、小时匹配和可交付性的咨询方向：https://ghgprotocol.org/blog/upcoming-scope-2-public-consultation-hourly-matching-and-deliverability
- GHG Protocol，《Public Consultation - Scope 2》，关于小时数据、load profile、transition tool 和披露机制的咨询文本：https://ghgprotocol.org/sites/default/files/2025-10/GHG-Protocol-Scope2-Public-Consultation.pdf
- GHG Protocol，《Scope 2 Guidance》，关于 Scope 2 定义、合同工具、避免 Scope 1/2 双重计算的现行指导：https://ghgprotocol.org/scope_2_guidance
- IFRS Foundation，《IFRS S2 Climate-related Disclosures》，关于 IFRS S2 生效日期和气候相关披露目标：https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ifrs-s2-climate-related-disclosures.html/
- IFRS Foundation，《IFRS S2 Climate-related Disclosures》正式文本，关于 GHG Protocol、计量方法、碳信用依赖和目标披露：https://www.ifrs.org/content/dam/ifrs/publications/pdf-standards-issb/english/2023/issued/part-a/issb-2023-a-ifrs-s2-climate-related-disclosures.pdf?bypass=on
- EFRAG Knowledge Hub，《ESRS E1 Climate Change》，关于 gross Scope 1/2/3、location-based 与 market-based Scope 2、碳信用分开披露和不得抵减 GHG emissions：https://knowledgehub.efrag.org/eng/interactive/esrs-set-1/esrs-e1-climate-change/2023-07-31-da
- SEC，《SEC Votes to End Defense of Climate Disclosure Rules》，关于 SEC 2024 气候披露规则诉讼和 SEC 停止抗辩：https://www.sec.gov/newsroom/press-releases/2025-58
- CARB，《CARB approves climate transparency regulation》，关于 SB 253/SB 261、2026 年 Scope 1/2 和 2027 年 Scope 3 披露时间线：https://ww2.arb.ca.gov/news/carb-approves-climate-transparency-regulation-entities-doing-business-california
- FTC，《Environmental Claims: Summary of the Green Guides》，关于 renewable energy claims、RECs 和 carbon offset claims 的营销声明边界：https://www.ftc.gov/business-guidance/resources/environmental-claims-summary-green-guides
- EUR-Lex，《Directive (EU) 2024/825》，关于禁止基于温室气体抵消声称产品/服务具有中性、降低或正面气候影响：https://eur-lex.europa.eu/eli/dir/2024/825/oj
- Microsoft，《2025 Environmental Sustainability Report》与 Microsoft On the Issues，关于 AI/云扩张下排放上升和 CDR 采购：https://www.microsoft.com/en-us/corporate-responsibility/sustainability/report ；https://blogs.microsoft.com/on-the-issues/2025/05/29/environmental-sustainability-report/
- Google，《2025 Environmental Report》，关于 24/7 CFE、AI、数据中心和 2024 年环境数据：https://sustainability.google/reports/google-2025-environmental-report/
- Amazon，《2024 Sustainability Report》，关于 2024 年碳足迹、Scope 1/2/3 和可再生能源项目：https://sustainability.aboutamazon.com/content/dam/sustainability-marketing-site/pdfs/reports-docs/2024-amazon-sustainability-report.pdf
- Meta，《2025 Sustainability Report》，关于 2030 净零、Scope 1/2 目标和可再生能源匹配：https://sustainability.atmeta.com/2025-sustainability-report/

## Follow-up

- Analyst: tmt-analyst
- Topic: 更严格低碳云披露口径对 Azure/AWS/GCP 客户合同、定价和 AI 云毛利的影响
- Question: 如果 GHG Protocol 和客户采购条款迫使 Azure/AWS/GCP 从年度 REC 匹配转向区域/小时/交付期可审计口径，Big 3 云厂能否把 24/7 CFE premium、CDR 成本和披露审计成本转嫁给企业客户，还是会压低 AI 云毛利和收入兑现速度？
