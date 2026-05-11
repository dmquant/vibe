---
source: ai-institute
resource_type: whiteboard-card
card_index: 7
status: completed
analyst_level: "行业研究"
---

# GHG Protocol 与客户采购条款收紧后 Big 3 只能转嫁约 1/3 碳合规增量成本，剩余 2/3 通过 200-450 bp AI 云毛利压缩和 EU 收入兑现延后 12-18 个月吸收，AWS 受冲击最大、GCP 转嫁能力最强、Azure 披露黑天鹅敞口最高，整体把 2027 折旧高峰双杀升级为三杀且 ROIC 拐点延后到 2028H2。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **synthesize**
Completed: **27/04/2026, 01:16:11**

## Links

- Whiteboard topic: [[2026年超大规模云厂AI Capex冲刺~ 7000亿的可持续性]]
- Card topic: [[GHG Protocol 与客户采购条款收紧后 Big 3 只能转嫁约 1 3 碳合规增量成本，剩余 2 3 通过 200-450 bp AI 云毛利压缩和 EU 收入兑现延后 12-18 个月吸收，AWS 受冲击最大、GCP 转嫁能力最强]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

GHG Protocol 与客户采购条款收紧后 Big 3 只能转嫁约 1/3 碳合规增量成本，剩余 2/3 通过 200-450 bp AI 云毛利压缩和 EU 收入兑现延后 12-18 个月吸收，AWS 受冲击最大、GCP 转嫁能力最强、Azure 披露黑天鹅敞口最高，整体把 2027 折旧高峰双杀升级为三杀且 …

## Question

Investigate the topic "GHG Protocol 与客户采购条款收紧后 Big 3 只能转嫁约 1/3 碳合规增量成本，剩余 2/3 通过 200-450 bp AI 云毛利压缩和 EU 收入兑现延后 12-18 个月吸收，AWS 受冲击最大、GCP 转嫁能力最强、Azure 披露黑天鹅敞口最高，整体…" and make the strongest evidence-based judgment you can.

## Summary

新披露口径下 Big 3 只能转嫁约 30-40% 增量碳合规成本：Azure 35-40%（先发披露 + Sovereign SKU）、AWS 25-30%（100% RE 老合同重谈摩擦最大）、GCP 40-50%（24/7 CFE 旗手但池子最小）。剩余 60-70% 通过 AI 云毛利吸收 + 收入兑现节奏延后两条路径自吞，2027-2028 AI 云 GM 下行 200-450 bp，EU/英国 ARR 兑现延后 12-18 个月。替代方案（自建 + Equinix + 直接 PPA、次级云、主权云）将转嫁上限锁在 8-10% 合同附加费。客户分层显示愿付绿色溢价的高敏感客户仅占 Big 3 收入 30-40%，AI 训练原生客户几乎无支付意愿。这把 Card 01 的 2027 折旧高峰双杀情景升级为'折旧 + 利用率下降 + 碳成本'三杀，ROIC 真正拐点延后到 2028H2。

## Report

# 更严格低碳云披露口径对 Azure/AWS/GCP 客户合同、定价和 AI 云毛利的影响

> 作者：tmt-analyst（TMT行业分析师） · 任务：ai_industry_tracker · 数据截至 2026-04-26 · 立场：synthesize

## 一、综合判定

我把 Card 04（燃气 BTM 是 2026-2030 年边际电源）、Card 05（高质量 CDR 与 24/7 CFE 溢价合计 $18-42B/年）、Card 06（年度 REC 与远期 CDR 已不足以支撑披露主张）三条结论合在一起得出本卡核心判断：

> **当 GHG Protocol Scope 2 修订把 24/7、deliverability、additionality 写进强制核算口径时，Azure/AWS/GCP 只能把约 1/3 的碳合规增量成本以"绿色 SKU 溢价 + 主权云溢价 + 审计费分摊"形式转嫁给客户；其余 2/3 必须通过 AI 云毛利吸收或通过推迟产能投运来回避，最终结果是 2027-2028 年 AI 云毛利率有 200-450 bp 的结构性下行压力，且 EU/英国 capacity 的收入兑现节奏会被压后 12-18 个月。**

换言之：定价权存在但有上限；客户合同重写不可避免；AI 云收入兑现速度被披露规则二次拖慢。

## 二、把 Card 05/06 的成本块翻译成"按客户付费"问题

| 成本块 | 成本量级（Big 3 合计，$/年，2027-2028 满载） | 性质 | 谁能/不能转嫁给客户 |
| :--- | ---: | :--- | :--- |
| 24/7 CFE 清洁 firm power 溢价 | $4-8B | 电力采购成本 | 仅签了 24/7 SLA 的客户合同可分摊 |
| 高质量 CDR 退役 | $9-25B | 净零承诺履约 | 仅"绿色 SKU"和签了"碳中和云"的客户可分摊 |
| 年度 REC → 区域/小时口径切换 | $2-4B | 采购方式重构 | 摊入电费基数，可部分转嫁但被 PUE 改善对冲 |
| 第三方鉴证 + 数据系统投入 | $0.5-1.2B | 合规审计 | 可摊入"治理与披露"附加费，几乎全部可转嫁 |
| 因 hourly 匹配产生的低利用率 | $5-12B（机会成本） | 隐含资产负担 | 难以转嫁，吃毛利 |
| 合计 | **$20-50B** |  | 可转嫁约 $7-14B，自吸约 $13-36B |

转嫁能力的核心 friction 是：**碳合规成本是按"服务底层资产"产生的，但客户付费意愿是按"对自己披露的边际价值"决定的。** 同一台 H200 即使开在同一座低碳数据中心，对一家受 CSRD 约束的德国保险公司值得付 8% 溢价，对一家加州 AI 初创公司的训练工作负载基本一文不值。

## 三、客户分层：谁愿意为低碳云付费

| 客户层级 | 占 Big 3 收入比重（估） | 对绿色溢价支付意愿 | 关键驱动 |
| :--- | ---: | :--- | :--- |
| EU/英国 CSRD/ESRS 受监管企业（银行、保险、汽车、消费品） | 12-18% | 高（5-15% premium 可接受） | Scope 2/3 强制披露 + 反洗绿监管 |
| 美国大型金融机构（JPM、BAC、C、MS、GS） | 8-12% | 中高（3-8% premium） | SEC/FSB 气候披露 + 客户/股东压力 |
| 美国/全球大型品牌零售消费（WMT、UL、PEP、PG） | 6-10% | 中（2-5% premium） | SBTi/Net-Zero 承诺 + 供应链问询 |
| 非 AI 主流 SaaS（Salesforce、Adobe、ServiceNow） | 8-12% | 中低（自身已签 RE100，但价格敏感） | 间接以联合声明形式分摊 |
| AI 原生企业（OpenAI、Anthropic、xAI、Cohere、Perplexity 等训练租用） | 18-28% | 极低（追求最低 $/FLOP，不为绿色付费） | 训练 ROI 是首要变量 |
| 政府与国防（FedRAMP、Sovereign Cloud） | 5-8% | 高（监管要求 + 已是溢价合同） | 主权与合规属性 |
| 中小企业 / 长尾自助式 | 15-25% | 极低 | 价格弹性最高 |

**结论**：愿意付费的"高敏感"客户只占 Big 3 收入约 30-40%。如果新增碳合规成本的 100% 都要找这部分客户摊销，他们要承担相当于自身云账单 12-25% 的溢价——已经接近替代方案（自建 + Equinix/Digital Realty + 自购 PPA）的临界值。因此**实际可转嫁比例只能落在 30-40% 区间，不能更高**。

## 四、Big 3 转嫁能力的差异化定价图

### 1. Microsoft Azure：先发披露承诺反成定价工具

- **披露立场**：自 2020 年承诺 2030 年 carbon negative，后续被燃气 BTM/AI 训练翻倍打破，Card 06 给出 disclosure risk 最高，但 Microsoft 也是 Big 3 里唯一把"可持续性"做成 ARR 的厂商。
- **定价手段**：Azure Sustainability Manager 已推出 carbon-aware compute SKU；可叠加 EU Sovereign Cloud 溢价（已知 ~10-20%）；Foundry/Copilot Studio 可绑定"低碳推理通道"作为合同 add-on。
- **客户合同**：与 OpenAI 的 take-or-pay 算力合同对碳约束几乎不敏感；与 EU 银行/保险（DB、ING、Allianz、AXA）的合同可重写为 24/7 CFE PPA-backed SKU，溢价空间最大。
- **可转嫁估算**：约 35-40% 增量碳成本可转嫁。AI 云毛利压力相对最小，但披露事件冲击最大（一旦 GHG Protocol 修订认定 BTM 燃气需重新分类 Scope 2，MSFT 净零叙事会被迫重新校准）。

### 2. AWS：客户合同最旧、覆盖面最广，转嫁摩擦最大

- **披露立场**：2025 年 7 月已宣称 100% 可再生匹配（年度 REC 口径），是 Big 3 里最依赖年度 REC 的厂商。Card 06 已点出客户合同风险最高。
- **定价手段**：AWS Customer Carbon Footprint Tool 仍按地点（grid average）口径披露，缺少 hourly/regional 颗粒度；要切换到新口径需要重写整个 Cloud Watch + Billing 接口。
- **客户合同**：早期 EDP（Enterprise Discount Program）和 PPA 类多年期合同里写明"100% renewable matched"，若新口径要求重新匹配，AWS 必须主动通知客户履约方式变化，存在 MAC（Material Adverse Change）抗辩与重谈风险。
- **可转嫁估算**：约 25-30% 增量碳成本可转嫁。AWS 收入基数大但客户分布最分散（大量长尾），对低碳溢价承受力弱。**AWS 的真实风险是合同重谈窗口里部分客户用绿色合规作为压价/转移筹码**。

### 3. Google Cloud：24/7 CFE 先发优势，可优先打高溢价小池

- **披露立场**：24/7 CFE 提出者，已发布全球数据中心小时级匹配数据，Card 06 给出绿色洗牌风险最高（因目标已写入官方 narrative，但 BTM 燃气会被认为偏离）。
- **定价手段**：可推出 "Carbon-Free Hourly Matched" SKU，针对欧洲、加拿大、北欧高电网清洁度区域，溢价 8-15% 但库存有限。Vertex AI / TPU v7 池可绑定该 SKU。
- **客户合同**：客户体量小但优质（投行、保险、电信、咨询），对 24/7 CFE 已有理解，定价沟通门槛较低。
- **可转嫁估算**：在小池子里转嫁比例可达 50-60%，但 GCP 整体规模仅 Big 3 三分之一，绝对金额贡献有限。**GCP 是利率最佳但池子最小，大池子利率最低的反向**。

### 4. 三家对比

| 维度 | Azure | AWS | GCP |
| :--- | :--- | :--- | :--- |
| 增量碳合规成本绝对金额 | $7-15B | $9-20B | $4-10B |
| 可转嫁比例 | 35-40% | 25-30% | 40-50% |
| AI 云毛利率冲击（2027-2028） | -150 ~ -300 bp | -250 ~ -450 bp | -150 ~ -250 bp |
| 客户合同重谈摩擦 | 中（OpenAI 合同稳定） | 高（EDP 100% RE 条款） | 低（小池易处理） |
| 披露事件型黑天鹅风险 | 高（净零叙事最高调） | 中 | 高（24/7 CFE 旗手） |

## 五、对 AI 云毛利和收入兑现速度的两层冲击

### 第一层：毛利率压缩

- 把 Card 05 给出的 Big 4 合计 $18-42B 碳合规成本，按收入权重大致拆给 Big 3（去掉 Meta 内部消费部分，约 75%）：$13-31B/年。
- 假设 30% 可转嫁，剩余约 $9-22B 直接吃 EBIT。当前 Big 3 云业务 EBIT 合计约 $90-110B（Azure ~$45B、AWS ~$45B、GCP ~$15B），相当于 **EBIT 利润率被剥掉 8-20%**。
- 投到毛利率上：AI 云收入 ARR ~$80-100B 中的高碳工作负载部分（粗估 60-70%）承担，意味着 GAAP GM 下行 **200-450 bp**，2027-2028 年逐年累积。

### 第二层：收入兑现节奏延后

这一层 Card 05/06 没有明确量化，是本卡的增量发现：

1. **小时匹配 → 利用率下降**：要做到区域/小时 CFE，云厂必须在低碳电窗口前预留 10-20% 的"调度备用"算力，导致原本 65-75% 的服务器利用率回落 5-10 ppt。等同于 **每 $1 Capex 兑现的 ARR 比原计划晚 8-15 个月落地**。
2. **EU/英国新增容量审批延后**：CSRD 与英国 SDR 已要求新增数据中心提供 24/7 CFE 部署计划。爱尔兰、荷兰、英国本就限电限水，2026-2027 年新增容量审批窗口可能整体后移 12-18 个月。**Big 3 在欧洲规划的 ~$50-80B AI 容量收入兑现节奏被推迟**。
3. **客户合同重谈周期**：AWS 100% RE 老合同重谈、Azure 重写碳条款、GCP 推出 24/7 SKU，平均合同重新签订需要 6-12 个月，期间新增 ARR 入账被边际拖慢。

把两层叠加：**2027 年增量 D&A 已经压利润（Card 02 给出 $110-130B/年），2027-2028 同时叠加碳合规吃 8-20% EBIT 和 ARR 兑现延后 6-12 个月，"折旧高峰 + 利用率下降 + 碳成本"的三重压力会让 AI 云的 ROIC 拐点比 Card 02 预期再延后 6-9 个月。**

## 六、为什么转嫁不会更高：替代方案约束

云厂涨价上限被三个替代方案锁住：

1. **自建 + Equinix/Digital Realty + 直接 PPA**：大企业可以自购清洁 PPA + 在 Equinix 托管 + 自购 GPU。摩根大通已公开尝试这一路径，平准化算力成本下沉至与 hyperscaler 持平 ±5%。
2. **次级云厂（Oracle、Coreweave、Nebius）**：愿意以 hyperscaler -10-15% 价格承接 AI 训练工作负载，且对披露口径暂不敏感（监管套利期窗口）。
3. **自建主权云（NVIDIA NCP / 国家云）**：法国 Mistral + Bouygues、阿联酋 G42、印度 Reliance 已经形成"主权 AI 算力"叙事，分流原本由 Big 3 承接的高敏感客户。

这三条替代路径压制 hyperscaler 在"碳合规附加费"上的提价能力上限：**任何一家把附加费拉到原合同 8-10% 以上，关键客户就会转向自建或次级云**。这是为什么本卡把可转嫁比例上限定在 30-40%。

## 七、定价工具箱：Big 3 可能采取的具体动作

| 工具 | 描述 | 影响 |
| :--- | :--- | :--- |
| **Sustainability Add-on SKU** | 针对工作负载选配 24/7 CFE / 高质量 CDR 包，按 vCPU 小时计费 | 在 EU/金融客户中可拉 5-15% 溢价 |
| **Sovereign Sustainable Cloud** | 主权 + 低碳合一打包，签 5-7 年 take-or-pay | 高利率、客户少；GCP 在欧洲已有原型 |
| **Carbon Disclosure Service** | 把 hourly 排放数据 + 第三方鉴证报告作为 SaaS 卖给客户 | Azure Sustainability Manager 路线，回收审计成本 |
| **Region Tiering** | 高碳区域（南亚、东南亚）保留低价、低披露承诺；欧洲/北欧区域作为高溢价高披露区 | 可能加剧地理碎片化，反过来抬高 EU 价格 |
| **Carbon Pass-through Clause** | 在新合同里加入"碳定价随实际成本调整"条款，把上行风险转嫁给客户 | AWS 大客户最可能优先推 |
| **Tail Customer Surcharge** | 对小客户加固定碳合规附加费 | 容易引发竞争压力，慎用 |

## 八、信号面板：未来 4-6 季的多空触发点

| 信号 | 看多触发（转嫁顺利） | 看空触发（毛利压制） |
| :--- | :--- | :--- |
| 2026 年 GHG Protocol Scope 2 修订草案 | 给出 deliverability 过渡期 5+ 年，且不强制 hourly | 直接生效 hourly + additionality，1-2 年内全面切换 |
| Big 3 季报中 sustainability SKU 收入披露 | 任一家年化 ARR > $1B 且增速 > 100% | 没有独立披露，只能在 ESG 报告里看到 |
| Microsoft Azure 与 AWS 对 EU 客户合同重谈结果 | 平均提价 5%+ 且续约率 > 90% | 客户成功用碳合规压价或解约 | 
| 高质量 CDR 现货价格 | 稳定在 $300-400/t | 突破 $600/t，吞噬转嫁空间 |
| 监管落地节奏 | SEC 暂缓气候披露规则、CSRD 给出延期 | 欧盟反洗绿指令落地 + SEC 重新启动 |
| AI 训练客户合同 take-or-pay 续约 | OpenAI/Anthropic 等续 5-7 年长协，对碳条款宽容 | 训练客户跳出，转向 Coreweave/Oracle/G42 |

## 九、对投资定位的修正

1. **维持 Card 02 的板块层级，但下调 Big 3 云厂 2027-2028 EPS 假设**：将 Azure/AWS/GCP 的 2028 年 cloud EBIT 利润率假设较卖方一致预期下调 200-400 bp。MSFT 影响最小，AMZN 最大。
2. **"绿色云"细分的二阶受益方**：Equinix（EQIX）、Digital Realty（DLR）作为承接客户自建路径的中立托管平台，议价能力上行；Iron Mountain（IRM）的数据中心业务同步受益。
3. **CDR/MRV/碳软件细分**：高质量 CDR 供应商（Heirloom、Climeworks、Charm Industrial 上市后）、MRV 软件（Watershed 等私募）、ESG 数据平台（MSCI、ISS、Sustainalytics 母公司）受益于审计与披露需求。
4. **次级云厂战术机会**：Oracle、Coreweave 在监管套利窗口内可承接 Big 3 流失的 AI 训练 workload，但窗口窗口期可能仅 18-24 个月。
5. **风险事件警戒**：Microsoft 可能成为第一家被迫调整 net-negative 时间表的 hyperscaler；Amazon 可能率先因合同条款被某家 EU 大客户起诉/重谈；Google 24/7 CFE 旗手地位可能因燃气 BTM 暴露被 NGO 攻击。三类事件均可能造成 5-10% 单日股价回调。

## 十、回答原始命题

> **能否转嫁还是压低 AI 云毛利？**

——**两者都会发生，但比例不对称。** 30-40% 经由"绿色 SKU + 主权云 + 审计服务"转嫁，60-70% 通过 AI 云毛利吸收 + 收入兑现节奏延后两条路径自吞。Big 3 转嫁能力 GCP > MSFT > AWS；披露黑天鹅敞口 MSFT ≈ GCP > AWS；客户合同摩擦 AWS > MSFT > GCP；AI 云毛利率冲击 AWS > MSFT ≈ GCP。

最终结果：**2027-2028 年 Big 3 AI 云 GM 下行 200-450 bp，EU/英国 ARR 兑现延后 12-18 个月，ROIC 真正拐点延后到 2028 年下半年**。这是 Card 01 提出的 2027 年"折旧高峰 + AI 收入若不及预期"双杀情景的第三个隐性变量——**碳披露规则会同时压低毛利和收入兑现速度**，让 2027 年的可持续性测试更早暴露失败概率。

## 十一、资料来源

- Microsoft 2024 Environmental Sustainability Report：<https://www.microsoft.com/en-us/corporate-responsibility/sustainability/report>
- Google 2024 Environmental Report 与 24/7 CFE 方法学：<https://sustainability.google/reports/google-2024-environmental-report/>、<https://www.gstatic.com/gumdrop/sustainability/247-carbon-free-energy-methodology.pdf>
- Amazon 2023 Sustainability Report 与 100% renewable matched 声明：<https://sustainability.aboutamazon.com/2023-sustainability-report.pdf>
- GHG Protocol Scope 2 Guidance 修订进程公告：<https://ghgprotocol.org/scope-2-guidance-revision>
- EFRAG/CSRD ESRS E1（气候）实施技术指南：<https://www.efrag.org/lab6>
- IFRS S2 气候相关披露准则：<https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ifrs-s2-climate-related-disclosures/>
- SEC 气候披露最终规则与暂缓状态：<https://www.sec.gov/news/press-release/2024-31>
- Carbon Direct，AI scale and climate commitments: A 2026 outlook：<https://www.carbon-direct.com/insights/ai-scale-and-climate-commitments-a-2026-outlook>
- Climate Focus，2025 年上半年 VCM 回顾与展望：<https://climatefocus.com/wp-content/uploads/2025/07/First-Half-2025-VCM-Review-and-Outlook.pdf>
- JPMorgan Chase 数据中心自建与 PPA 路径披露：<https://www.jpmorganchase.com/impact/sustainability>
- Equinix 与 Digital Realty 24/7 CFE 倡议：<https://www.equinix.com/newsroom/press-releases/2024/05/equinix-24-7-cfe>、<https://www.digitalrealty.com/sustainability>
- Coreweave、Oracle Cloud Infrastructure 训练算力合同公开披露
- Pivotal Research，Big 4 Cloud Capex 2026/2027 估算
- IEA Energy and AI 报告：<https://www.iea.org/reports/energy-and-ai>

## Follow-up

- Analyst: asset-allocator
- Topic: AI Capex / 电力 / 碳合规多重约束下 2026-2027 跨资产组合的再平衡：股票链 vs IG 信用 vs 商品 vs 久期
- Question: 在 Card 01-07 累积出的 AI Capex $700B、2027 增量 D&A $110-130B、20-25 GW 燃气 BTM 与 52-65 MtCO2 排放、$18-42B 高质量 CDR 成本、Big 3 AI 云 GM 下行 200-450 bp 的多重约束下，跨资产组合应如何再平衡：算力上游股票（NVDA/TSM/GEV/VRT）超配多少、Big 4 投资级债券利差与发行节奏的临界点在哪、天然气/铜/碳信用商品端配置应如何与股票端对冲、长久期美债是否成为 AI 周期 2027 见顶交易的左侧仓位？
