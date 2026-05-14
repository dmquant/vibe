---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "行业研究"
---

# AI算力供应链的硬约束已从CoWoS封装阶段性缓解，并同时向上游HBM4配额和下游GW级电力两端迁移，利润池正在被重新分配。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **initial**
Completed: **24/04/2026, 10:05:33**

## Links

- Whiteboard topic: [[2026年AI算力供应链瓶颈迁移：从CoWoS封装紧缺到HBM4配额与电力约束]]
- Card topic: [[2026年AI算力供应链瓶颈迁移：从CoWoS封装紧缺到HBM4配额与电力约束]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

2026年AI算力供应链瓶颈迁移：从CoWoS封装紧缺到HBM4配额与电力约束

## Question

在SK Hynix已卖空2026年HBM产能、TSMC把CoWoS从约35K扩至130K wpm、Nvidia Vera Rubin下半年放量的背景下，AI硬件供应链的真瓶颈究竟已迁移到哪里？二级市场应如何重新定价上游封装、内存与电力运营商？

## Summary

CoWoS两年3.7倍扩产阶段性缓解封装瓶颈，但新增产能被Nvidia独占（>60%），Google TPU 2026产量已被迫从4M下修至3M。瓶颈同时向上游迁移——SK Hynix和Micron的2026年HBM产能已全部售罄，HBM3E合约价同比+20%，23%的DRAM晶圆被HBM吞噬导致常规DRAM反向紧缺，Samsung HBM4资质或滑至2026H2。Vera Rubin 5x推理性能、10x每token成本下降反而强化需求弹性。下游则出现电力约束，微软Q1 2026财报已承认compute capacity shortage，产业协同部署5GW级AI算力。利润池应从GPU向HBM龙头（SK Hynix/Micron）与电力运营商迁移，Samsung和Google相对承压。

## Report

# 2026年AI算力供应链瓶颈迁移：从CoWoS紧缺到HBM4配额与电力约束

> 分析师：tmt-analyst（TMT行业分析师）
> 任务类型：chip_supply_chain（AI芯片供应链月度追踪）
> 时间戳：2026-04-24
> 卡片：1/10 · 立场：initial

## 1. 核心判断（Thesis）

**2026年上半年，AI算力供应链的"硬约束"正从封装（CoWoS）加速迁移至HBM4配额与电力接入两个环节**；这意味着市场此前定价的"只要TSMC扩产，算力就够用"的叙事需要被推翻——真正稀缺的资源，正在往产业链的最上游（HBM内存）和最下游（GW级电力）两端转移，利润池随之重分配。

## 2. 本卡研究问题

在SK Hynix已预售完2026年HBM全部产能、TSMC将CoWoS月产能从2024年的约35K wpm扩至2026年底约130K wpm、英伟达Vera Rubin NVL72下半年放量的背景下：
**AI硬件供应链到底是从"紧缺周期"转入"产能过剩前夜"，还是瓶颈环节已经完成一次代际迁移？A/港/美股定价逻辑该如何调整？**

## 3. 关键数据点（来自近期产业与财报口径）

| 环节 | 2024基准 | 2025出口/当前 | 2026指引 | 约束是否缓解 |
|------|----------|---------------|----------|---------------|
| TSMC CoWoS月产能 | ~35K wpm | ~75K wpm（2025年末已near doubled）| ~130K wpm（年底目标）| **部分缓解**，但Nvidia仍锁定>60% |
| HBM市场份额（Q3 2025）| — | SK Hynix 53% / Samsung 35% / Micron 11% | SK Hynix 2026 HBM **全部售罄**，Samsung HBM4资质可能延至2026下半年 | **未缓解**，SK Hynix对Nvidia供货占比约90% |
| HBM3E价格（2026合约）| 基准 | — | **同比+20%** 涨价已谈定 | 价格反映供不应求 |
| 先进DRAM晶圆向HBM切换比例 | — | 约23% DRAM晶圆被HBM吞噬 | 最高可达40% | 常规DRAM反向紧缺 |
| Google TPU 2026产量目标 | — | 原计划4M颗 | **下调至3M颗**（CoWoS分配不足）| 非Nvidia阵营受挤压 |
| Vera Rubin NVL72推理性能 | Blackwell基准 | — | **5x推理性能 / 10x每token成本下降** | 需求弹性被重新放大 |
| 全球AI数据中心协同部署规模 | — | — | **5GW级**（截至本10年末） | 电力成为新瓶颈 |

## 4. 三条子结论

### 4.1 CoWoS瓶颈阶段性缓解，但释放出来的产能被Nvidia独占

TSMC CoWoS产能两年间3.7倍扩张，但英伟达以"锚定租户（anchor tenant）"身份锁定超过60%的2025-2026产能。**这意味着封装扩产对非Nvidia阵营（Google TPU、AMD MI、华为昇腾代工路径、Meta MTIA）的边际利好远低于帐面扩产幅度。** Google被迫把2026 TPU下修25%就是直接证据。

### 4.2 瓶颈向上游迁移：HBM4成为新的真·稀缺资源

- SK Hynix CFO官方口径"已卖空2026年全部HBM供应"；Micron CEO确认2025和2026年HBM产能"全部预定"。
- Samsung在HBM3E阶段失去时间窗口，HBM4全面通过Nvidia资质可能滑到2026下半年，本轮供应弹性贡献者的身份被削弱。
- HBM每吃掉1片晶圆，需要占用约3倍于标准DDR5的晶圆面积，导致**主流DRAM反向紧缺**——消费电子、服务器通用DRAM价格2026全年都将继续承压。

### 4.3 瓶颈也向下游迁移：电力是下一个"CoWoS"

微软在2026年Q1财报会上已明确承认"compute capacity shortage"；产业协同部署的5GW AI算力，约等于一个中等国家的用电量。**上游芯片扩完之后，数据中心选址、并网时间、就近配套电源（核电PPA、燃气调峰、特高压外送）将成为2026下半年至2027年算力释放的真正bottleneck。**

## 5. 资产定价含义

1. **SK Hynix（062660 KS）、Micron（MU）**：2026年HBM价格+20%、产能全售罄的组合是**结构性利润中枢上移**，而非简单周期高点，应按"AI基础设施供应商"而非"内存周期股"重新估值。
2. **Samsung Electronics（005930 KS）**：HBM4掉队让其在本轮AI超级周期中只能扮演"跟随者"，存储业务估值溢价难以修复，应相对低配。
3. **TSMC（2330 TT / TSM）**：CoWoS几乎是AI硬件唯一的通关文牒，Nvidia锚定、Google让路都是溢价护城河；维持核心持仓地位。
4. **Nvidia（NVDA）**：Rubin 5x推理/10x每token成本下降会反向**唤起新一轮需求弹性**，"硬件足够了"的担忧过早。
5. **Google（GOOGL）/ AMD**：CoWoS分配劣势+HBM次优分配，将压制TPU、MI系列的市场份额扩张节奏。
6. **A股与港股映射**：
   - 先进封装与HBM概念（通富微电、长电科技、甬矽电子、华海诚科）：TSMC CoWoS并非所有工序都闭环，OSAT中测+基板+部分再分配环节仍有溢出订单。
   - 国产HBM路线（长鑫存储非上市、相关设备股如北方华创、中微公司）：差距仍以"代"计，短期难替代。
   - **A股最大的二阶受益方是电力运营商+特高压**，详见下一张卡。

## 6. 风险提示（反向论据）

- **Vera Rubin推理效率5x**可能使"单位算力通胀"被需求弹性完全消化甚至反向不足，2026H2出现"推理通缩"风险较低，但不可忽视。
- **三星HBM4追赶**：若2026Q3前完成Nvidia全资质，会短期打掉SK Hynix溢价。
- **美国对华HBM出口管制升级**：可能一次性改变HBM分配逻辑，反而让非中国客户获得阶段性喘息。
- **电力接入和气候目标冲突**：如果美国PJM/ERCOT因AI数据中心扩张推迟煤电退役，可能引来ESG层面的反弹。

## 7. 移交说明

下一位自然的合作对象是 **energy-analyst（能源行业分析师）**：本卡已论证瓶颈从封装迁移到HBM与电力两端，其中电力环节直接对应其专业领域。需要能源分析师拿出具体数据（美国PJM/ERCOT排队时长、中国特高压西电东送新增容量、核电PPA定价），验证或反驳"电力是2026下半年真正的AI bottleneck"这一推论，并提出具备投资价值的电力运营与绿电资产候选名单。

## 信息来源

- [TSMC doubling CoWoS capacity through 2026 — FinancialContent/TokenRing](https://markets.financialcontent.com/wral/article/tokenring-2026-1-1-the-great-packaging-pivot-how-tsmc-is-doubling-cowos-capacity-to-break-the-ai-supply-bottleneck-through-2026)
- [TSMC CoWoS capacity, Nvidia booking over half — DigiTimes](https://www.digitimes.com/news/a20251210PD218/tsmc-cowos-capacity-nvidia-equipment.html)
- [Inside the AI Bottleneck: CoWoS, HBM, and 2–3nm Constraints Through 2027 — FusionWW](https://www.fusionww.com/insights/blog/inside-the-ai-bottleneck-cowos-hbm-and-2-3nm-capacity-constraints-through-2027)
- [Samsung, SK hynix ~20% HBM3E Price Hike for 2026 — TrendForce](https://www.trendforce.com/news/2025/12/24/news-samsung-sk-hynix-reportedly-plan-20-hbm3e-price-hike-for-2026-as-nvidia-h200-asic-demand-rises/)
- [AI-Driven DRAM Shortage Intensifies — FinancialContent/TokenRing](https://markets.financialcontent.com/wral/article/tokenring-2025-12-26-ai-driven-dram-shortage-intensifies-as-sk-hynix-and-samsung-pivot-to-hbm4-production)
- [AI Memory Supercycle — Introl](https://introl.com/blog/ai-memory-supercycle-hbm-2026)
- [Memory Chip Shortage 2026: HBM Takes 23% of DRAM Wafers — Tech-Insider](https://tech-insider.org/memory-chip-shortage-2026-ai-consumer-electronics/)
- [Nvidia Vera Rubin NVL72 — 5x inference, 10x lower cost per token — Tom's Hardware](https://www.tomshardware.com/pc-components/gpus/nvidia-launches-vera-rubin-nvl72-ai-supercomputer-at-ces-promises-up-to-5x-greater-inference-performance-and-10x-lower-cost-per-token-than-blackwell-coming-2h-2026)
- [Inside the NVIDIA Vera Rubin Platform — NVIDIA Developer Blog](https://developer.nvidia.com/blog/inside-the-nvidia-rubin-platform-six-new-chips-one-ai-supercomputer/)

## Follow-up

- Analyst: energy-analyst
- Topic: 5GW级AI数据中心对美国PJM/ERCOT排队时长、中国特高压与核电PPA的结构性冲击
- Question: 如果2026下半年AI的真·bottleneck已从HBM延伸到电力接入，美国东北部电网排队时长、德州ERCOT的互联等待、中国特高压与核电PPA新增容量能否在2027年前支撑已规划的AI算力投产？哪些电力运营与绿电资产应被重新定价？
