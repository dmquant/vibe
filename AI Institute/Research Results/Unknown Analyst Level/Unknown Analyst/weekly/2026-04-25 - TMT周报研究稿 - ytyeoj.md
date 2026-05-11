---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# TMT周报研究稿

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# TMT周报研究稿

**报告日期：** 2026-04-26  
**覆盖窗口：** 2026-04-20 至 2026-04-24  
**上游计划文件：** `01_weekly_plan.md` 已读取

## 一、优先结论

1. **Intel 18A 的财务验证仍弱于技术叙事。** Intel Q1 2026 非GAAP EPS 为 `$0.29`、收入 `$13.6B`，但 Intel Foundry 仍亏损 `$2.437B`；18A 已进入自有产品，但外部客户规模化流片更可能是 **2026H2 小批量验证、2027 才体现收入弹性**。
2. **TXN 更像“U/L型底部修复”，不是强V。** Q1 2026 收入 `$4.825B`，同比 `+19%`、环比 `+9%`，但库存周转天数仍约 `208.6` 天，虽较 Q1 2025 的 `240.2` 天改善，绝对水平仍高。
3. **Tesla 毛利率确实修复，但叙事估值依赖 Robotaxi 可验证里程。** Q1 2026 剔除监管积分汽车毛利率约 `19.2%`，较 Q1 2025 的 `12.5%` 显著回升；同期公司披露 Dallas/Houston 于 2026年4月启动无监督 Robotaxi 乘车，但付费里程只披露“环比接近翻倍”，未给出精确数字。
4. **WFE 结构已向 AI/HBM/先进封装倾斜。** LRCX Q1 CY2026 收入 `$5.841B`、同比约 `+23.8%`，系统收入中 Memory 占比从前季 `34%` 升至 `39%`；AMAT 半导体系统 DRAM 占比达 `34%`，显示 HBM/DRAM 设备强于成熟逻辑。
5. **“AI资本开支超级周”的门槛远高于计划文件的 `$175B`。** Alphabet 单家公司 2026 CapEx 指引即为 `$175B-$185B`；MSFT/GOOGL/META 三家 2026E 合计按中值/运行率约 `$441B`，市场会重点追问收入增量/CapEx 是否继续下滑。

## 二、核心问题研究

### 问题1：Intel 18A 能否在 2026H2 实现外部客户规模化流片？

**方法**  
使用 Intel Q1 2026 财报、Intel Foundry 18A 技术页、TSMC 2nm/A16 技术页与公开路线图，对比技术参数、产品状态、Foundry 收入与亏损。判断标准为：技术可用性、客户设计生态、外部收入可见度、与 TSMC N2 的时间差。

**发现**

| 指标 | Intel 18A | TSMC N2 | 投资含义 |
|---|---:|---:|---|
| 晶体管结构 | RibbonFET GAA | 第一代 nanosheet GAA | 两者均进入 GAA 时代 |
| 背面供电 | PowerVia 已集成 | N2 无；A16/N2P 路线引入 SPR | Intel 在 BSPDN 上更早，但良率/客户仍需验证 |
| 量产状态 | Intel 自有 Core Series 3 已导入 18A | N2 已在 4Q25 开始量产 | TSMC 外部客户规模更确定 |
| 对上一代改善 | vs Intel 3：perf/watt up to `15%`、density up to `30%` | TSMC 披露 N2 为全节点 PPA 提升 | Intel 口径为内部对比，不等于对 N2 绝对领先 |
| Foundry Q1 2026收入 | `$5.421B` | 不适用 | Intel Foundry 收入多为内部/封装相关 |
| Foundry Q1 2026经营亏损 | `$(2.437B)` | 不适用 | 估值重构仍缺外部客户收入证据 |

**解释**  
结论是 **18A 技术置信度上升，但商业置信度仍不足**。Intel 已将 18A 放入自有产品组合，并强调 PowerVia、RibbonFET 与超过 35 家生态伙伴，这是外部客户启动设计的必要条件。问题在于 Intel Foundry 仍为大额亏损，且财报未披露来自外部 18A 客户的可量化收入或订单。与 TSMC N2 相比，Intel 的差异化在背面供电和北美制造，TSMC 的优势在客户覆盖、良率爬坡和量产节奏。基准情形为 2026H2 出现外部客户验证/小批量流片，真正规模收入更可能推迟到 2027。

**证据**  
- Intel Q1 2026 财报：收入 `$13.6B`、非GAAP EPS `$0.29`、Intel Foundry 收入 `$5.421B`、经营亏损 `$(2.437B)`；来源：Intel IR，2026-04-23，https://www.intc.com/news-events/press-releases/detail/1767/intel-reports-first-quarter-2026-financial-results?cs=1  
- Intel 18A 技术页：RibbonFET、PowerVia、vs Intel 3 的 perf/watt/density 改善；来源：Intel Foundry，https://www.intel.com/content/www/us/en/foundry/process/18a.html  
- TSMC 2nm/A16 页面：N2 于 4Q25 开始量产；来源：TSMC，https://www.tsmc.com/english/dedicatedFoundry/technology/logic/l_A16

**限制**  
Intel 未披露 18A 外部客户名单、流片数量、良率曲线或单独外部 Foundry 收入；TSMC 与 Intel 的密度/性能口径非同一测试芯片，不能直接机械比较。

### 问题2：TXN 是 V 型反转还是 L 型磨底？

**方法**  
用 TI 官方 Q1-Q4 2025 与 Q1 2026 财报，计算库存周转天数：`期末库存 / 当季COR * 当季天数`。同时比较收入、指引和终端市场描述。

**发现**

| 季度 | 收入 `$M` | COR `$M` | 期末库存 `$M` | 估算DOI 天 | 收入环比 |
|---|---:|---:|---:|---:|---:|
| Q1 2025 | 4,069 | 1,756 | 4,687 | 240.2 | n/a |
| Q2 2025 | 4,448 | 1,873 | 4,812 | 233.8 | +9.3% |
| Q3 2025 | 4,742 | 2,019 | 4,829 | 220.0 | +6.6% |
| Q4 2025 | 4,423 | 1,951 | 4,804 | 226.5 | -6.7% |
| Q1 2026 | 4,825 | 2,026 | 4,695 | 208.6 | +9.1% |

**解释**  
TXN 的数据更支持 **库存去化接近尾声后的 U/L 型修复**。收入连续性好于 2024/2025 低点，Q1 2026 同比 `+19%`、环比 `+9%`，且 Q2 指引中点 `$5.20B` 高于 Q1。库存天数从 Q1 2025 的 `240.2` 天降至 Q1 2026 的 `208.6` 天，但仍高于正常模拟周期常见水平，说明渠道不是短缺式 V 型反转。工业和数据中心领先，汽车仍需观察 EV/ADAS/功率器件需求是否能抵消传统消费电子平庸。

**证据**  
- TI Q1 2026 财报：收入 `$4.825B`、EPS `$1.68`、Q2 收入指引 `$5.00B-$5.40B`；来源：Texas Instruments IR，2026-04-22，https://investor.ti.com/news-releases/news-release-details/ti-reports-first-quarter-2026-financial-results-and-shareholder  
- TI 2025 各季度财报库存与 COR：Q1/Q2/Q3/Q4 2025；来源：Texas Instruments IR。

**限制**  
DOI 使用期末库存而非平均库存，且 TI 未按工业、汽车、个人电子逐项披露库存；结果用于方向判断，不等同于审计口径。

### 问题3：Tesla Robotaxi 能否支撑科技股估值？

**方法**  
使用 Tesla Q1 2026 shareholder deck 的分季度汽车收入、监管积分、汽车成本，计算剔除监管积分汽车毛利率：`(Total automotive revenues - Total automotive cost of revenues - Automotive regulatory credits) / (Total automotive revenues - Automotive regulatory credits)`。叙事侧用公司披露的 Robotaxi 覆盖城市与付费里程表述替代 Google Trends。

**发现**

| 季度 | 汽车收入 `$M` | 监管积分 `$M` | 汽车成本 `$M` | 剔除积分汽车毛利率 | Robotaxi 证据 |
|---|---:|---:|---:|---:|---|
| Q1 2025 | 13,967 | 595 | 11,700 | 12.5% | 早期运营 |
| Q2 2025 | 16,661 | 439 | 13,795 | 15.0% | Austin ramp |
| Q3 2025 | 21,205 | 417 | 17,590 | 15.4% | 运营区域扩展 |
| Q4 2025 | 17,693 | 542 | 14,080 | 17.9% | 付费里程基数扩大 |
| Q1 2026 | 16,234 | 380 | 12,812 | 19.2% | Dallas/Houston 2026年4月无监督乘车启动；付费里程环比接近翻倍 |

**解释**  
Tesla 的短期汽车利润率不再是“跌破16%”的状态，Q1 2026 剔除积分口径已回到 `19.2%`。但估值是否维持科技股倍数，不取决于单季毛利，而取决于 Robotaxi 付费里程、事故率、监管许可和单位经济性的连续披露。公司披露 Dallas/Houston 的 2026年4月无监督乘车与 AI5 final chip design，叙事进度有实物抓手。问题是 Q1 交付 `358,023` 辆，较 Q4 2025 `418,227` 辆环比下滑，传统汽车销量波动仍会压制估值兑现。

**证据**  
- Tesla Q1 2026 shareholder deck：汽车收入、监管积分、汽车成本、交付、FSD、Robotaxi 城市；来源：Tesla IR，2026-04-22，https://ir.tesla.com/_flysystem/s3/sec/000162828026026551/tsla-20260422-gen.pdf  
- Tesla Q1 2026 production/deliveries：交付 `358,023`、生产 `408,386`；来源：Tesla IR，2026-04-02，https://ir.tesla.com/press-release/tesla-first-quarter-2026-production-deliveries-and-deployments

**限制**  
Tesla 未披露 Robotaxi 收入、单英里成本、精确付费里程数和事故率；本研究用公司运营里程/城市作为叙事强度替代，不等同于搜索热度。

### 问题4：WFE 是否不可逆转向 Advanced Packaging/HBM？

**方法**  
比较 LRCX、AMAT、ASML 最新季度收入、毛利率与应用构成。由于全球前五大设备商不再统一披露 book-to-bill，本研究使用收入增长、市场结构、递延收入和公司指引作为替代景气指标。

**发现**

| 公司 | 最新季度 | 收入 | 收入增长 | 毛利率 | 结构性信号 |
|---|---|---:|---:|---:|---|
| ASML | Q1 2026 | `€8.767B` | YoY约 +13% | 53.0% | 2026 收入指引上调至 `€36B-€40B`，AI相关产能扩张支撑订单 |
| LRCX | Mar-2026 quarter | `$5.841B` | YoY +23.8%，QoQ +9% | 49.8% | Memory 占比 `39%`，前季 `34%`；DRAM/NVM 均强化 |
| AMAT | Q1 FY2026 | `$7.012B` | YoY -2% | 49.0% | 半导体系统 DRAM 占比 `34%`，Foundry/logic/other `62%` |

**解释**  
设备景气并非全面复苏，而是 **AI链条主导的结构性复苏**。LRCX 最直接受益于 HBM/DRAM 与先进封装相关刻蚀、沉积、清洗需求，Memory 占比环比抬升。AMAT 指出 leading-edge logic、HBM、advanced packaging 是高增长方向，但总收入仍同比小幅下滑，说明非AI逻辑与成熟节点并未同步强复苏。ASML 上调全年收入指引，显示先进逻辑/存储的容量扩张仍在推进，但出口管制仍是波动源。结论不是“逻辑转向存储”的单向替换，而是资本开支从传统 WFE 周期转向 AI算力瓶颈：HBM、先进封装、EUV/DUV升级和数据中心相关先进节点。

**证据**  
- LRCX 10-Q/财报：收入 `$5.841B`、毛利率 `49.8%`、Foundry/Memory/Logic `54%/39%/7%`；来源：Lam Research IR/SEC，2026-04-22，https://investor.lamresearch.com/ 和 SEC 10-Q。  
- AMAT Q1 FY2026：收入 `$7.012B`、毛利率 `49.0%`、半导体系统 DRAM `34%`；来源：Applied Materials IR，2026-02-12，https://ir.appliedmaterials.com/news-releases/news-release-details/applied-materials-announces-first-quarter-2026-results  
- ASML Q1 2026：收入 `€8.767B`、毛利率 `53.0%`、2026 指引 `€36B-€40B`；来源：ASML，2026-04-15，https://www.asml.com/en/news/press-releases/2026/q1-2026-financial-results

**限制**  
统一 book-to-bill 指标无法公开填满；KLA/TEL/ASM 等未全部在本周披露可比季度数据。本研究用三家关键设备商替代，不代表完整 WFE 总量。

### 问题5：如何衡量 MSFT/GOOGL 每 1 美元 CapEx 产生的增量收入？

**方法**  
口径一为公司年度收入增量/当年 CapEx；口径二为云/AI增量观察。2024/2025 使用公司实际披露，2026E 使用公司指引、Q1/Q2 已披露运行率和公开一致预期文本；MSFT 2026E 因未给全年绝对 CapEx 指引，采用 H1 FY2026 实际 `$72.4B` 加 H2 运行率估算。

**发现**

| 公司 | 2024 CapEx | 2025 CapEx | 2026E CapEx | 2025收入增量/2025 CapEx | 2026E收入增量/2026E CapEx | 备注 |
|---|---:|---:|---:|---:|---:|---|
| MSFT | `$44.477B` | `$64.551B` | `~$136B` | 0.57x | ~0.31x | FY口径；2026E为运行率估算 |
| GOOGL | `$52.535B` | `$91.447B` | `$180B` | 0.58x | ~0.40x | 2026 指引中值 |
| META | `$39.23B` | `$72.22B` | `$125B` | 0.51x | ~0.32x | 含 finance lease principal |
| 合计 | `$136.24B` | `$228.22B` | `~$441B` | 0.55x | ~0.35x | CapEx 增速快于收入增速 |

**解释**  
AI能效比的核心结论是：**CapEx 已从“增长投入”变成“估值约束变量”**。GOOGL 2026 指引中值 `$180B` 接近 2025 的 2 倍，单家公司已超过计划文件提到的 `$175B` 门槛。MSFT H1 FY2026 已披露 CapEx `$34.9B + $37.5B = $72.4B`，且公司称 FY26 增速将高于 FY25；这意味着全年现金/租赁资本开支显著高于 FY2025。若收入增量不能同步抬升，收入增量/CapEx 可能从 2025 年约 `0.55x` 降至 2026E 约 `0.35x`，这会使市场更关注 Azure AI Services、Google Cloud、Meta广告AI工具的可量化增量。

**证据**  
- Microsoft FY2025 cash flow：PP&E additions `$64.551B` vs FY2024 `$44.477B`；FY26 Q1/Q2 call：CapEx `$34.9B`、`$37.5B`；来源：Microsoft IR，https://www.microsoft.com/en-us/investor  
- Alphabet Q4/FY2025：2025 PP&E purchases `$91.447B`、2024 `$52.535B`、2026 CapEx `$175B-$185B`；来源：Alphabet IR，2026-02-04，https://s206.q4cdn.com/479360582/files/doc_financials/2025/q4/2025q4-alphabet-earnings-release.pdf  
- Meta FY2025：2025 CapEx含租赁本金 `$72.22B`、2024 `$39.23B`、2026 指引 `$115B-$135B`；来源：Meta IR，2026-01-28，https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Fourth-Quarter-and-Full-Year-2025-Results/  
- S&P Global/Visible Alpha：2026 hyperscaler CapEx 预期从 `$379B` 上调至 `$622B`；来源：S&P Global，2026-04-24，https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/04/microsoft-and-meta-earnings-previews

**限制**  
CapEx 与收入存在 2-8 个季度滞后；MSFT fiscal year 与 GOOGL/META calendar year 不完全可比；AI收入没有统一披露口径，收入增量/CapEx 是压力测试，不是精确 ROI。

## 三、可视化阶段数据表

### 图表1：半导体设备景气度雷达图

| 维度 | ASML | LRCX | AMAT |
|---|---:|---:|---:|
| 最新季度收入 | `€8.767B` | `$5.841B` | `$7.012B` |
| 收入增长 | YoY约 `+13%` | YoY `+23.8%` | YoY `-2.1%` |
| 毛利率 | `53.0%` | `49.8%` | `49.0%` |
| AI/HBM/先进封装暴露 | 高：EUV/DUV与产能扩张 | 高：etch/deposition/advanced packaging | 高：GAA/HBM/advanced packaging |
| 结构性强项 | 光刻 | 刻蚀/沉积/清洗 | 薄膜/材料工程 |
| 数据来源日期 | 2026-04-15 | 2026-04-22 | 2026-02-12 |

### 图表2：Intel 工艺节点路线图

| 节点 | 核心技术 | 关键状态 | 量产/客户时间点 | 风险 |
|---|---|---|---|---|
| Intel 20A | RibbonFET + PowerVia 学习节点 | Intel 后续重心转向 18A | 商业化弱化 | 路线切换造成外部客户信任成本 |
| Intel 18A | RibbonFET + PowerVia | Core Series 3 已导入，客户项目可启动 | 2026H2 外部客户验证；2027 收入弹性 | 外部客户良率、PDK成熟度、成本 |
| Intel 18A-P/PT | 18A增强版、3DIC/HBI | 面向 AI/HPC 与先进封装 | 2026-2027 | 需要封装产能和生态配合 |
| Intel 14A | 下一代外部 Foundry 重点 | 处于开发/PDK阶段 | 2027以后 | High-NA EUV、客户迁移与资本强度 |

### 图表3：Tesla 盈利 vs Robotaxi 叙事估值图

| 季度 | 剔除积分汽车毛利率 | 总交付量 | FSD订阅数 `M` | Robotaxi状态替代指标 |
|---|---:|---:|---:|---|
| Q1 2025 | 12.5% | 336,681 | 0.85 | 早期运营 |
| Q2 2025 | 15.0% | 384,122 | 0.95 | Austin ramp |
| Q3 2025 | 15.4% | 497,099 | 1.04 | 运营区域扩展 |
| Q4 2025 | 17.9% | 418,227 | 1.10 | 付费里程基数扩大 |
| Q1 2026 | 19.2% | 358,023 | 1.28 | Dallas/Houston 2026年4月无监督启动；付费里程环比接近翻倍 |

**替代说明：** 原计划的 Google Trends/专利公告数无法在本工作区稳定复现，改用 Tesla 官方披露的 Robotaxi 覆盖城市、付费里程描述与 FSD 订阅数。

### 图表4：Big Tech AI 资本开支堆叠图

| 年份 | MSFT | GOOGL | META | 三家合计 | 口径 |
|---|---:|---:|---:|---:|---|
| 2024A | `$44.477B` | `$52.535B` | `$39.23B` | `$136.24B` | MSFT为FY；GOOGL/META为CY |
| 2025A | `$64.551B` | `$91.447B` | `$72.22B` | `$228.22B` | MSFT PP&E additions；META含finance lease principal |
| 2026E | `~$136B` | `$180B` | `$125B` | `~$441B` | GOOGL/META用公司指引中值；MSFT用H1实际+H2运行率估算 |

## 四、跟进事项

- 下周 2026-04-29 MSFT/GOOGL/META 财报后，立即更新：实际 Q1 CY2026/Q3 FY2026 CapEx、云收入、AI产品披露和管理层对 2026 指引的修订。
- 若可接入 Bloomberg/Visible Alpha，补充 MSFT/GOOGL/META 2026/2027 共识 CapEx、收入和云分部 EBIT，替代当前运行率估算。
- 对 Intel 18A 后续重点跟踪：外部客户 tape-out 公告、14A PDK 客户数、18A 良率、Foundry 外部收入占比。
- 对 Tesla 后续重点跟踪：Robotaxi 精确付费里程、城市许可数量、事故率、Cybercab 量产时间和 AI5/Research Fab 资本开支。
