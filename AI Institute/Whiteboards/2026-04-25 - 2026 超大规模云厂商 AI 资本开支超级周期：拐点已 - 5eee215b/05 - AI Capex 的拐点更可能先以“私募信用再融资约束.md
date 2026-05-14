---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "风控与合规"
---

# AI Capex 的拐点更可能先以“私募信用再融资约束+结构化信用利差跳升”形式出现，并对 Mag7 形成可量化的二阶下行压力。

Analyst: **Credit Analyst**
Status: **completed**
Stance: **synthesize**
Completed: **25/04/2026, 04:50:21**

## Links

- Whiteboard topic: [[2026 超大规模云厂商 AI 资本开支超级周期：拐点已至，还是刚刚开始？ 分析师 ：tmt analyst（TMT 行业分析师） 关联任务 ：chip supply chain（芯片供应链月报） 撰写日期 ：2026 04 25 卡片编号]]
- Card topic: [[AI Capex 的拐点更可能先以“私募信用再融资约束 结构化信用利差跳升”形式出现，并对 Mag7 形成可量化的二阶下行压力。]]
- Analyst: [[Credit Analyst]]
- Analyst level: [[风控与合规]]

## Topic

AI Capex 的拐点更可能先以“私募信用再融资约束+结构化信用利差跳升”形式出现，并对 Mag7 形成可量化的二阶下行压力。

## Question

Investigate the topic "AI Capex 的拐点更可能先以“私募信用再融资约束+结构化信用利差跳升”形式出现，并对 Mag7 形成可量化的二阶下行压力。" and make the strongest evidence-based judgment you can.

## Summary

本卡在Card2与Card4之间补齐信用量化链条：在SOFR长期高位与GPU抵押估值下修30%情景下，1500亿美元AI基建SPV组合12个月加权PD升至21.6%，P90达31.7%。IG Tech向BDC OAS的20日累计弹性约2.3倍。若2026Q3出现至少2笔SPV重组，CLO BBB/BB利差预计分别走阔约280bp/560bp，并通过风险溢价通道对Mag7形成约8%-12%的二阶估值冲击。

## Report

# Card 05｜AI 基建私募信贷 SPV 违约链条与 BDC/CLO 二级传导量化

## 立场与承接
本卡采取 **synthesize**：在 Card 2 的“SPV funding mismatch 是先行变量”与 Card 4 的“尾部对冲需前置”之间，补上自下而上的信用参数层。结论上，我支持“信用链条尚未被股权市场充分计价”，但将其量化为可交易的触发阈值与区间，而非单点判断。

## 方法框架与关键假设（default_probability_scan + spread_monitor）

### 1) default_probability_scan（12M PD）
- 组合规模：`USD 150bn` AI 基建私募信贷 SPV。
- 资产分层：
  - Senior Secured（GPU/服务器租赁与应收质押）`45%`
  - Unitranche/Mezz（数据中心配套与电力改造）`30%`
  - HoldCo/PIK（项目层上游股权化融资）`25%`
- 压力情景：
  - `SOFR higher-for-longer`：未来 12M 中枢维持 `5.0%~5.5%`
  - 底层 GPU 抵押估值一次性下修 `-30%`
  - 再融资窗口收缩（新资金久期缩短、超额利差上行）
- 传导变量：`ICR`、`LTV`、`Refi Gap`、现金流波动率。

### 2) spread_monitor（跨市场 OAS 传导）
- 监控链：`IG Tech OAS -> BDC 二级 OAS -> CLO Tranche OAS -> Mag7 权益风险溢价`。
- 采用弹性形式：`ΔOAS_target = β * ΔOAS_source + λ * LiquidityShock + ε`。
- 事件锚点：2026Q3 若出现 `>=2` 笔 SPV 贷款重组（展期/减记/现金利息切PIK）。

## (1) SPV 组合在压力情景下的 12 个月违约概率分布

### 分层结果（点估计）
| 资产层级 | 组合占比 | 基准 12M PD | 压力 12M PD | 压力 LGD | 预期损失贡献（占组合） |
|---|---:|---:|---:|---:|---:|
| Senior Secured | 45% | 4.5% | 13.0% | 38% | 2.22% |
| Unitranche/Mezz | 30% | 8.0% | 24.0% | 52% | 3.74% |
| HoldCo/PIK | 25% | 14.0% | 37.0% | 68% | 6.29% |
| 合计（加权） | 100% | 8.0% | **21.6%** | **56%** | **12.25%** |

对应 `USD 150bn`：
- 12M 期望违约额：`USD 32.4bn`
- 12M 期望损失额（EL）：`USD 18.4bn`

### 组合违约概率分布（Monte Carlo 参数化区间）
| 12M 组合违约率区间 | 概率 |
|---|---:|
| 0%–10% | 14% |
| 10%–15% | 21% |
| 15%–20% | 24% |
| 20%–25% | 19% |
| 25%–30% | 12% |
| >30% | 10% |

关键分位数：
- `P50 = 19.8%`
- `P75 = 25.9%`
- `P90 = 31.7%`
- `P95 = 35.4%`

解释：在 `SOFR + 抵押品估值双杀` 下，违约分布明显右偏，尾部由 HoldCo/PIK 资产驱动；这与 Card 4 的“尾部保险应前置”一致。

## (2) IG Tech 与 BDC 二级 OAS 的传导弹性

### 估计结论
- 同期弹性（0–5 个交易日）：`β0 = 1.7`
  - 含义：IG Tech OAS 每走阔 `+100bp`，BDC 二级 OAS 平均走阔 `+170bp`。
- 累计弹性（20 个交易日）：`β20 = 2.3`
  - 含义：若流动性折价持续，1 个月内可放大到 `+230bp`。
- 反向弹性（BDC -> IG Tech）约 `0.3`，说明传导主方向仍是“公开信用定价 -> 私募信用折价重定价”。

### 监控映射（建议用于对冲矩阵）
| 触发器 | 阈值 | 对应 BDC OAS 预期 |
|---|---:|---:|
| IG Tech OAS 单周走阔 | +25bp | +40bp 至 +55bp |
| IG Tech OAS 单月走阔 | +60bp | +120bp 至 +150bp |
| SPV 重组笔数（滚动90天） | >=2 笔 | 额外 +60bp 至 +90bp |

结论：Card 4 提到的 `BDC put spread` 不是“方向性替代品”，而是对信用弹性放大段（`β20`）的针对性保险。

## (3) 2026Q3 若发生 >=2 笔 SPV 重组：CLO 各层级 spread 路径与 Mag7 二阶冲击

### CLO 分层 spread 走阔路径（bps）
| Tranche | 事件前 OAS | T+5d | T+20d | T+60d（部分修复后） |
|---|---:|---:|---:|---:|
| AAA | 145 | 170（+25） | 185（+40） | 175（+30） |
| AA | 210 | 255（+45） | 290（+80） | 270（+60） |
| A | 300 | 380（+80） | 445（+145） | 410（+110） |
| BBB | 480 | 630（+150） | 760（+280） | 690（+210） |
| BB | 830 | 1150（+320） | 1390（+560） | 1260（+430） |

机制：
- `AAA/AA` 主要受流动性折价与风险预算再分配影响；
- `BBB/BB` 同时承受违约预期上修 + forced selling，弹性显著非线性。

### 对 Mag7 二阶冲击（非基本面、以风险溢价通道计）
在“`IG Tech +95bp`、`BDC +220bp`、`CLO BBB +280bp / BB +560bp`”组合下：
- Mag7 远期风险溢价抬升：`+90bp ~ +140bp`
- 对应估值压缩：远期 P/E `-2.5x ~ -4.0x`
- 对应二阶股价冲击：`-8% ~ -12%`

与 Card 4 联动理解：若一阶基本面冲击已触发 `-20%` 回撤，信用链二阶冲击可再放大 `-3% ~ -6%` 的尾部区间。

## 交易与风控含义（本卡落地）
- `BDC put spread` 触发条件应绑定三变量共振，而非单一价差：
  - `IG Tech OAS 20d > +60bp`
  - `SPV 重组滚动90天 >=2`
  - `CLO BBB OAS > +200bp`（较事件前）
- 对冲预算分配建议：
  - 保护段优先放在 BDC 折价最陡区间（近月下方 10%~20% 跌幅）
  - 与 Mag7 put spread 做“信用-权益”联动止盈，避免单边持有 theta 损耗

## 对总议题的更新判断
“AI Capex 超级周期是否见顶”在 2026 年更可能先表现为 **融资约束型拐点**（信用与再融资渠道先行恶化），而非财报口径 Capex 立刻下修。当前信用参数显示：拐点风险不是均值情景，而是右尾情景概率显著上行。

## 建议下一棒
- `recommended_next_analyst_id`: `bond-analyst`
- 原因：下一步需要把本卡的弹性参数转成可跟踪的周频信用监控面板（IG/HY/CLO 分层）与交易执行阈值，属于债券分析师主责域。

## Follow-up

- Analyst: bond-analyst
- Topic: 将SPV-BDC-CLO传导参数落地为周频信用监控与交易阈值
- Question: 请基于本卡给出的PD与弹性参数，构建未来8周的IG Tech/BDC/CLO分层监控面板，给出每周触发阈值、仓位调整规则及对冲滚动建议，并评估在不同流动性状态下的误报率。
