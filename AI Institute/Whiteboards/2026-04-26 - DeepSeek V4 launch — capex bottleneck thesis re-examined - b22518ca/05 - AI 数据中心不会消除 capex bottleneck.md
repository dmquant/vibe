---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "行业研究"
---

# AI 数据中心不会消除 capex bottleneck，而会把瓶颈转化为变压器和输电设备、容量市场、费率监管与大客户信用承诺的组合约束。

Analyst: **Utilities Analyst**
Status: **completed**
Stance: **synthesize**
Completed: **27/04/2026, 03:20:59**

## Links

- Whiteboard topic: [[DeepSeek V4 launch — capex bottleneck thesis re-examined]]
- Card topic: [[AI 数据中心不会消除 capex bottleneck，而会把瓶颈转化为变压器和输电设备、容量市场、费率监管与大客户信用承诺的组合约束。]]
- Analyst: [[Utilities Analyst]]
- Analyst level: [[行业研究]]

## Topic

AI 数据中心不会消除 capex bottleneck，而会把瓶颈转化为变压器和输电设备、容量市场、费率监管与大客户信用承诺的组合约束。

## Question

Investigate the topic "AI 数据中心不会消除 capex bottleneck，而会把瓶颈转化为变压器和输电设备、容量市场、费率监管与大客户信用承诺的组合约束。" and make the strongest evidence-based judgment you can.

## Summary

本卡综合前序电力设备瓶颈判断，认为 AI 数据中心负荷会把公用事业推入更高资本开支周期，但监管机构正通过 PPA/ESA、自带电源、容量电价、专属大负荷费率、最低需求收费、抵押和退出费来防止普通用户补贴。PJM 北弗吉尼亚、BGE、AEP Ohio 与 Pennsylvania co-location 是最高摩擦区；Georgia、Carolinas、ERCOT、Arizona、Oregon/PNW 分别面临 rate base、燃气扩建、输电社摊、水电资源和清洁电力约束。

## Report

# 数据中心大负荷接入：公用事业资本开支、电价机制与并网摩擦

**立场：综合。** 我支持前序卡片的主线：DeepSeek V4 式效率提升不会直接推翻 AI capex bottleneck，而是把瓶颈从单一 GPU 采购进一步推向电力接入、变压器、输电、容量市场和监管成本分摊。对公用事业而言，数据中心负荷不是普通新增售电量，而是高负荷率、超大单点、建设节奏不确定、信用和退出风险集中的新型负荷。美国电力系统正在形成一个更严格的成本分摊框架：**谁占用容量、谁触发网架和发电投资，谁就通过长期合约、最低账单、抵押/担保、退出费、可中断服务或自带电源来承担成本。**

## 一、核心判断

数据中心大负荷将使公用事业资本开支继续上修，但监管机构不会允许全部成本无条件进入普通用户电价。最可能的路径是：

1. **PPA / 自带电源 / Energy Supply Agreement 成为入场券。** 大型数据中心需要证明新增负荷有对应新增电源、长期购电安排或可中断能力，而不是只向电网提交“占位式”负荷申请。
2. **容量电价把冲击最快传导到 PJM。** PJM 已经把数据中心负荷纳入远期容量需求，价格信号会先于实际投运进入账单和政治争议。
3. **特殊大负荷电价从例外变成主流。** AEP Ohio、Dominion Virginia、Georgia Power、Oregon PUC、Arizona Corporation Commission、PG&E 等案例显示，最低需求收费、10-12 年合约、抵押、退出费和专属费率类别正在扩散。
4. **备用电源从“可靠性配置”变成“并网谈判筹码”。** 电池、燃气机组、柴油备用、可中断服务和 co-location 会被用于缩短并网时间，但只有在可调度、可计量、可被系统运营商调用时，才真正降低系统容量成本。

**最可能出现电价和监管摩擦的区域排序：PJM 北弗吉尼亚 / 马里兰 / 俄亥俄最高，Georgia 和 Carolinas 次之，ERCOT 和 Arizona 是增长型摩擦，Oregon / Pacific Northwest 是清洁电力与成本分摊摩擦，California PG&E 区域相对可控但仍受高电价政治约束。**

## 二、负荷增速已经从“预测风险”变成“费率设计问题”

LBNL 的 2024 年美国数据中心用电报告显示，数据中心 2023 年约占美国用电 4.4%，到 2028 年可能升至 6.7%-12%。EPRI 2026 年更新进一步上修：到 2030 年数据中心可能消耗美国发电量的 9%-17%，其中 Virginia 当前数据中心用电约占全州用电 25%，到 2030 年可能升至 39%-57%；Arizona、Indiana、Iowa、Nebraska、Nevada、Oregon、Wyoming 等州也可能超过 20%。

这意味着对电网而言，问题不再是“数据中心会不会增加负荷”，而是：

| 问题 | 公用事业的处理方向 | 对数据中心的成本含义 |
|---|---|---|
| 负荷申请是否真实 | 要求土地控制、具体站址、分年爬坡计划、负荷研究费 | 占位成本上升，投机性排队被清洗 |
| 负荷是否会如期投运 | 最低需求收费、长期合约、抵押、退出费 | 未满负荷也要付容量预留费 |
| 是否需要新增发电 | PPA、ESA、自带电源、专属资源采购 | 从买电价转为买“电源+容量+输电路径” |
| 是否挤占其他用户 | 专属大负荷费率、成本直接分配、独立 rate class | 不能再依赖普通工商业或居民交叉补贴 |
| 是否可中断 | 非 firm 服务、需求响应、备用电源、BESS | 可中断负荷获得更快接入或较低网络成本 |

NERC 2025 Long-Term Reliability Assessment 也把数据中心和大型工商业负荷列为北美未来十年需求增长的主要来源，并指出 Texas、PJM 和 WECC 多个区域需求增长陡峭；同时 NERC 强调其负荷预测通常只计入已进入较成熟开发阶段的项目，因此可能低于科技行业或市场研究口径。

## 三、四类成本分摊工具

### 1. PPA、ESA 与“bring your own power”

大型数据中心会越来越多被要求带着电源方案进入并网谈判。这个方案可以是：

- 与独立发电商签长期 PPA，锁定新能源、核电或燃气发电量；
- 通过公用事业签 Energy Supply Agreement，由公用事业代建或代购增量资源；
- 自建或合建燃气、电池、燃料电池、核电 SMR 或可再生能源组合；
- 与既有电厂 co-location，但必须支付仍然使用电网的辅助服务、备用、输电和可靠性成本。

FERC 对 PJM co-location 的 2025 年 12 月命令是关键分水岭。FERC 要求 PJM 建立透明规则，允许 co-located data center 使用不同层级的输电服务，但也明确：如果负荷仍从电网获得黑启动、调频、备用或传统网络输电服务，就必须为这些服务付费；既有发电机组不能在维持系统可靠性的升级完成前把容量从电网抽走去服务单一数据中心，相关升级成本应由发电机或大负荷客户承担。这对 Amazon/Talen Susquehanna 式核电 co-location、Constellation 核电 PPA 以及后续燃气 co-location 都有约束意义。

结论是：PPA 不再只是 ESG 合同，而是容量和并网权利的证明文件。**没有可验证新增电源或可中断安排的数据中心，会在并网排序和电价上处于劣势。**

### 2. 容量电价：PJM 是压力最大的传导链

PJM 的容量市场已经把数据中心增长转化为全系统成本。2025/2026 容量拍卖中，RTO 大部分区域清算价为 $269.92/MW-day，BGE 和 Dominion 分别达到 $466.35/MW-day 与 $444.26/MW-day；2026/2027 拍卖进一步在 FERC 批准的价格上限 $329.17/MW-day 清算。PJM 2025 年年报还披露，2027/2028 交付年度容量采购相对可靠性要求一度出现约 6.5GW 缺口，显示新增需求超过可用供给的速度。

容量机制的政治敏感点在于，容量价格在数据中心真正投运前就会进入远期市场和用户账单。即使最后部分数据中心取消，短期内普通用户仍可能先承受更高容量成本。因此 PJM 董事会 2026 年 1 月提出的大负荷整合方案强调：

- 改进负荷预测并扩大州政府角色；
- 允许大型负荷自带新增发电或进入可中断的 connect-and-manage 框架；
- 为州支持的发电项目建立加速并网通道；
- 启动短期可靠性 backstop procurement；
- 评估容量市场和其他市场如何配合吸引投资。

这说明 PJM 正从“被动反映负荷预测”转向“要求新负荷证明资源充分性”。但在价格上限、老电厂延寿、清洁能源排队、燃气新建和居民账单之间，PJM 仍会是全国最大的监管摩擦点。

### 3. 特殊大负荷电价：最低账单、抵押、退出费

**AEP Ohio 是最清晰的模板。** 2025 年 7 月 PUCO 批准 AEP Ohio Data Center Tariff。其核心条款包括：

| 条款 | 内容 | 经济含义 |
|---|---|---|
| 适用门槛 | 大于 25MW 数据中心负荷 | 把普通 C&I 与 hyperscale 分开 |
| 负荷研究费 | $10,000-$100,000 | 减少投机性申请 |
| 爬坡期 | 不超过四年；第一年 50%、第二年 65%、第三年 80% 合约容量 | 防止长期占用容量但不投运 |
| 合约期 | 爬坡期加八年，通常最长约 12 年 | 覆盖变压器、输电和容量投资回收期 |
| 抵押 | 未满足信用和现金条件者需提供相当于全期最低费用 50% 的担保或抵押 | 把开发商信用风险前置 |
| 最低需求 | 通常不低于合约容量的 85%，超过 75MW 的增量更接近 100% | 未使用也要支付容量预留费 |
| 容量转让 | 最多可把 25% 合约容量转给其他 DCT 客户 | 给项目退出留出二级市场式缓冲 |

**Dominion Virginia 则是成熟数据中心市场的监管修补。** Virginia SCC 2026 年资料显示，SCC 已批准针对大型负荷客户的特殊费率条款，将 hyperscale 数据中心置入新的单独费率类别，并可能要求信用不足客户担保最高相当于合约期最低费用 60% 的资金。核心目标不是阻止数据中心，而是防止北弗吉尼亚输电和容量成本被社摊给居民与小商户。

**Georgia Power 是 integrated utility 模式下的对照组。** Georgia PSC 2026 年事实表显示，Georgia Power 对未来七年增量发电需求的估计从 2022 年的 400MW 上修到 2023 年的 6,600MW，再到 8,500MW；2025 年 12 月 PSC 批准约 9,985MW 新增发电认证，其中约 80% 预计服务数据中心。与此同时，Georgia Power 同意对相关成本作 financial backstop 至 2031 年，PSC 还冻结 Georgia Power 基本电价至 2028 年，试图把“数据中心带来增长”与“居民不补贴数据中心”绑定在同一监管叙事中。

**Oregon、Arizona 和 California 体现州层面制度化。** Oregon POWER Act 要求为数据中心这类 large energy use facilities 建立独立费率类别，合同期至少 10 年，并直接分配服务成本、缓解成本转移。Arizona Corporation Commission 2026 年 4 月 workshop 已讨论统一大负荷 tariff、ESA、bring-your-own-power 和 upfront financial support；APS 与 SRP 披露的潜在大负荷需求已经超过现有可服务能力。PG&E 的 Rule 30 则侧重让大型新负荷先行出资，项目投运后再按规则退款，目标是在利用既有网络余量的同时保护现有用户。

### 4. 备用电源与可中断接入

备用电源会变成三类资产：

- **可靠性资产：** 柴油机、电池、UPS、燃气机组用于保障数据中心自身 uptime。
- **并网加速资产：** 在输电升级完成前，以非 firm 或 interim service 接入，承诺在系统受限时降载或切到本地电源。
- **系统服务资产：** BESS、可控负荷、备用发电若能被 RTO/utility 调度，可提供调频、备用、需求响应或峰值削减。

但要注意：传统柴油备用不能自动等同于系统容量资源。只有当备用电源有许可、燃料保障、排放合规、遥测、并网保护、调度协议和性能罚则时，监管机构才会承认它降低系统成本。否则它只是数据中心私有可靠性成本，不能抵消公用事业为其预留的输电和容量投资。

这也是 FERC / PJM 规则中强调 firm、non-firm、interim service 和 co-located load 实际电网使用量的原因。AI 数据中心如果能把一部分训练、批处理、缓存刷新和非实时推理做成可迁移/可中断负荷，就能在电力侧获得更好的并网与电价待遇；如果其负荷必须 24/7 满负荷运行，就会被按近似 baseload 工业客户收取容量成本。

## 四、区域摩擦地图

| 区域 | 摩擦等级 | 主要矛盾 | 最可能的成本分摊方式 |
|---|---:|---|---|
| PJM：Northern Virginia / Dominion、BGE、AEP Ohio、Pennsylvania | 最高 | 数据中心集中、容量价格暴涨、输电拥塞、co-location 争议 | PJM 容量价格 + 专属大负荷 tariff + co-location 输电服务费 + 退出费 |
| Ohio / Indiana / AEP 系统 | 最高 | 负荷申请远超可服务能力，变压器和输电投资有搁浅风险 | 85% 以上最低需求、12 年合约、抵押、负荷研究费 |
| Georgia / Southeast | 高 | integrated utility 扩建近 10GW 发电，若项目取消会留下 rate base 风险 | PSC 认证发电 + 长约 + minimum bill + utility backstop |
| Carolinas / Duke 区域 | 中高 | 数据中心与燃气新建、居民账单和减排目标冲突 | 大负荷最低账单、押金、需求响应、资源规划审查 |
| ERCOT / Texas | 高 | 负荷队列巨大、无集中容量市场、输电成本和稀缺电价波动 | 大负荷接入规则、4CP/输电成本、双边 PPA、可中断负荷 |
| Arizona / Nevada | 中高 | 低电价和土地吸引数据中心，但水、电源和峰值容量受限 | ESA、XHLF 费率、bring-your-own-power、hook-up fee、水资源审查 |
| Oregon / Pacific Northwest | 中高 | 清洁电力约束、Direct Access、居民电价压力、数据中心专属费率立法 | 独立数据中心 rate class、10 年以上合同、直接成本分配 |
| California / PG&E | 中 | 高电价下需要证明新增负荷能摊薄固定成本而非增加 wildfire / 输电负担 | Rule 30 先出资后退款、cluster study、CPUC 监管 |
| MISO / Upper Midwest | 中 | 数据中心、制造业和资源充足性并行压力，但负荷分布较分散 | 大负荷 tariff、容量认证改革、加速资源并网 |

我的判断是，**PJM 是价格摩擦，AEP Ohio 是合同摩擦，Georgia 是 rate base 摩擦，ERCOT 是市场波动与输电社摊摩擦，Oregon / Arizona 是州政策与资源约束摩擦。**

## 五、对公用事业与 AI capex 叙事的含义

第一，AI capex 会更多进入 regulated utility rate base、customer contribution in aid of construction、预付款和长期电力合约，而不只是云厂商资产负债表中的 GPU 与机房。前序卡片提到“6000 亿美元 capex 可能分批转化为可用 AI 容量”，电力侧正是分批释放的约束器。

第二，公用事业不是无差别受益。受益质量取决于监管能否把大客户成本与普通用户隔离：

- 有清晰 tariff、抵押、最低账单、退出费的区域，新增负荷更可能转化为可投资 rate base。
- 若监管把居民账单政治压力放在首位，公用事业即使有负荷增长，也可能面对 ROE 压缩、资本开支延迟或成本不予回收。
- Merchant generator、核电和燃气资产在 PJM 容量价格和 hyperscaler PPA 中受益更直接，但 co-location 规则会限制其把既有容量完全私有化。

第三，DeepSeek V4 的效率提升反而会加剧“可中断算力”的价值分化。低成本模型把推理任务推向更大规模和更多企业私有部署，但不是所有推理负荷都需要同等 uptime。能够把部分 AI 工作负荷设计为 flexible load 的云厂商，会比 24/7 刚性负荷获得更低电力接入摩擦。

第四，碳与水约束会成为下一轮电价争议的放大器。若新增电源主要由燃气满足，Virginia、Carolinas、Georgia、Arizona 等地会出现“AI 增长 vs. 减排目标 / 空气许可 / 水资源”的冲突；若坚持 24/7 carbon-free PPA，则可再生能源、储能、核电和输电建设速度必须同步提高，否则数据中心会在并网和碳声明之间出现错配。

## 六、结论

AI 数据中心不会简单“推高所有公用事业利润”。它会把公用事业推入一个更资本密集、监管更敏感、客户信用更重要的周期。未来 12-24 个月最重要的观察点不是数据中心公告的 GW 数，而是哪些 GW 已经转化为：

- 已签 ESA / PPA / utility service agreement；
- 已缴负荷研究费、CIAC、抵押或担保；
- 已接受最低账单和退出费；
- 已获得输电、变压器和发电资源路径；
- 已承诺可中断、备用电源或需求响应；
- 已被监管机构允许纳入资源规划和费率回收。

因此，我对前序“电力设备比芯片更可能成为实际投运节奏硬约束”的判断作进一步细化：**真正的硬约束是“变压器和输电设备 + 容量市场 + 费率监管 + 大客户信用承诺”的组合。AI capex 的资金瓶颈仍在，但 2026-2028 年更容易被电力侧的许可、并网排队和成本分摊机制切成多批投运。**

## 七、下一张卡建议

建议交给 **energy-analyst [primary]** 做压力测试：如果数据中心被要求“自带电源”或签长期 PPA，新增电源结构会偏向燃气、核电延寿/重启、可再生能源+储能，还是燃料电池/SMR 等替代方案？关键问题是燃气轮机交付、管道容量、核电监管、储能并网与 24/7 CFE 目标能否支撑 2026-2028 年实际通电节奏。

## 主要来源

- Lawrence Berkeley National Laboratory，《2024 United States Data Center Energy Usage Report》，2024-12-19：https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report
- U.S. Department of Energy，《DOE Releases New Report Evaluating Increase in Electricity Demand from Data Centers》，2024-12-20：https://www.energy.gov/node/4847688
- EPRI，《Data Centers Could Consume Up to 17% of U.S. Electricity by 2030》，2026-02-26：https://www.globenewswire.com/news-release/2026/02/26/3245491/0/en/epri-data-centers-could-consume-up-to-17-of-u-s-electricity-by-2030.html
- NERC，《2025 Long-Term Reliability Assessment》，2026-01：https://www.nerc.com/globalassets/our-work/assessments/nerc_ltra_2025.pdf
- SEPA / NCCETC，《U.S. Data Center Gold Rush Drives Surge in New Utility Tariffs》，2026-04-21：https://sepapower.org/knowledge/u-s-data-center-gold-rush-drives-surge-in-new-utility-tariffs/
- AEP Ohio，《Data Center Tariff》，2026 年访问：https://www.aepohio.com/company/about/rates/data-center-tariff/
- Virginia State Corporation Commission，《SCC Data Center Initiatives》，2026-02：https://www.scc.virginia.gov/media/sccvirginiagov-home/about-the-scc/fact-sheets/scc-data-center-initiatives-02-2026.pdf
- Georgia Public Service Commission，《2025 Data Center Fact Sheet》，2026-03：https://psc.ga.gov/site/downloads/datacenterfactsheet.pdf
- PJM，《PJM Board Outlines Plans To Integrate Large Loads Reliably》，2026-01-16：https://www.pjm.com/-/media/DotCom/about-pjm/newsroom/2026-releases/20260116-pjm-board-outlines-plans-to-integrate-large-loads-reliably.pdf
- PJM，《2026 Long-Term Load Forecast Supplement》，2026-01：https://www.pjm.com/-/media/DotCom/planning/res-adeq/load-forecast/load-forecast-supplement-2026.pdf
- PJM，《Annual Report 2025 - Markets》，2026 年访问：https://services.pjm.com/annualreport2025/markets/
- FERC，《Fact Sheet: FERC Directs Nation's Largest Grid Operator to Create New Rules to Embrace Innovation and Protect Consumers》，2025-12-18：https://www.ferc.gov/news-events/news/fact-sheet-ferc-directs-nations-largest-grid-operator-create-new-rules-embrace
- FERC，《PJM Co-Location Order, EL25-49-000》，2025-12-18：https://www.ferc.gov/sites/default/files/2025-12/E-1%20EL25-49-000.pdf
- Oregon Public Utility Commission，《Large Customer Demand》，2026 年访问：https://www.oregon.gov/puc/utilities/pages/large-load.aspx
- Oregon PUC，《2025 Legislative Report》，2025：https://www.oregon.gov/puc/Documents/2025-Legislative-Report.pdf
- Arizona Corporation Commission，《ACC Data Center/Large Load Workshop Highlights》，2026-04-20：https://azcc.gov/news/home/2026/04/20/acc-large-load-data-center-workshop-highlights
- PG&E，《PG&E Accelerating Connection of New Data Centers throughout Northern and Central California》，2025-02-13：https://investor.pgecorp.com/news-events/press-releases/press-release-details/2025/PGE-Accelerating-Connection-of-New-Data-Centers-throughout-Northern-and-Central-California/default.aspx

## Follow-up

- Analyst: energy-analyst
- Topic: 数据中心自带电源与长期 PPA 对美国发电结构、燃气轮机、核电和储能供给的压力测试
- Question: 如果数据中心必须通过 PPA、ESA 或自带电源证明新增负荷可服务，2026-2028 年实际可落地的新增电源会偏向燃气、核电延寿/重启、可再生能源+储能，还是燃料电池/SMR 等替代路径？燃气轮机交付、管道容量和 24/7 CFE 目标能否支撑这些通电计划？
