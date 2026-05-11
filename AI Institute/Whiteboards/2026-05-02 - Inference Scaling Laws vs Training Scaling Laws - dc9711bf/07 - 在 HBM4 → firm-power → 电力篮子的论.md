---
source: ai-institute
resource_type: whiteboard-card
card_index: 7
status: completed
analyst_level: "权益策略"
---

# 在 HBM4 → firm-power → 电力篮子的论题中, 真正未被计价的 alpha 集中在 HBM 份额重构 + 测试复杂度 + 已签未追回大负荷电价的受监管公用事业, 而 merchant nuclear 与 VRT 应作为对冲腿持有, 催化排序优先于仓位扩张。

Analyst: **Chief Strategist**
Status: **completed**
Stance: **synthesize**
Completed: **02/05/2026, 15:16:05**

## Links

- Whiteboard topic: [[Inference Scaling Laws vs Training Scaling Laws]]
- Card topic: [[在 HBM4 → firm-power → 电力篮子的论题中, 真正未被计价的 alpha 集中在 HBM 份额重构 测试复杂度 已签未追回大负荷电价的受监管公用事业, 而 merchant nuclear 与 VRT 应作为对冲腿持有,]]
- Analyst: [[Chief Strategist]]
- Analyst level: [[权益策略]]

## Topic

在 HBM4 → firm-power → 电力篮子的论题中, 真正未被计价的 alpha 集中在 HBM 份额重构 + 测试复杂度 + 已签未追回大负荷电价的受监管公用事业, 而 merchant nuclear 与 VRT 应作为对冲腿持有, 催化排序优先于仓位扩张。

## Question

Investigate the topic "在 HBM4 → firm-power → 电力篮子的论题中, 真正未被计价的 alpha 集中在 HBM 份额重构 + 测试复杂度 + 已签未追回大负荷电价的受监管公用事业, 而 merchant nuclear 与 VRT 应作为对冲腿持有, 催化排序优先于仓位扩张。" and make the strongest evidence-based judgment you can.

## Summary

把 Card 01–06 综合为可执行的多腿组合: Sleeve A (40% 长仓) 多 HBM4 弹性 — MU 12%、TSM 10%、000660.KS 8%、6857.T 6%、005930.KS 4%; Sleeve B (30%) 多尚未充分计价的 firm power — AEP 8%、ETR 6%、ETN 6%、GEV 5%、PWR 5%; Sleeve C (8%) 持有 A 股 firm-power 设备与水电做合规与外溢敞口; Sleeve D 用空 VRT 多 ETN、空 TLN 多 AEP/ETR、CEG 与 VRT 25-delta put、SOXX put-spread 对冲拥挤与监管二元。催化按 2026 Q1 PJM RPM → 1H 2026 Rubin/HBM4 验证 → 2026 年中 FERC 共址通用命令 → 2H 2026–Q1 2027 Virginia SCC 与 LPSC → 2H 2027 已交付负荷比 排序。

## Report

# Card 07 — 综合: 从 HBM4 → firm power → AI 电力篮子压缩为可交易的多腿组合 (2026–2027)

**分析师:** 首席策略师 (primary)
**立场:** synthesize
**问题:** 结合 Card 01–06 的需求侧、瓶颈侧与风险侧判断, 应构建怎样的多空组合 (HBM4 链条多头 + 电力受益篮子的差异化仓位 + 拥挤度对冲), 并如何排序 2026–2027 年的关键二元催化?

---

## 1. 综合判断

前 6 张卡片汇聚到一个内部一致的论题, 但是**股票表达高度分化**:

- **需求 (Card 01):** 推理算力已成为前沿推理能力的边际驱动。2027 年高端 AI 加速器移向 **260–300 GB HBM/GPU-equivalent**, 由 Rubin 的 288 GB / 22 TB·s 配置锚定。
- **瓶颈一 — 硅 (Card 02):** 2027 年的硬约束是**合格 HBM4** 与 **CoWoS / interposer / ABF 基板**的测试封装组合。液冷是部署瓶颈, 不是硅瓶颈。
- **盈利弹性 (Card 03):** 在硅栈中, 最未充分计入的 EPS 杠杆来自**份额重构 (MU)** 与**测试复杂度乘数 (6857.T、TSM)**, 而非纯产能扩张。
- **瓶颈二 — firm power (Card 04):** Rubin 级 100–120 kW 机柜让每 10,000 个机柜对应 ~1.15–1.38 GW 的公用事业侧需求。北弗吉尼亚、Dublin 与 Tokyo 已电力受限; Celtic Interconnector 推迟到 2028 年。
- **电力的股票表达 (Card 05):** 赢家从芯片扩展到存量可调度发电、监管认可的 rate base、电网设备与 EPC。无 firm interconnection 的项目应大幅折价。
- **风险定价 (Card 06):** 电力篮子按三个不同的钟在交易 — merchant nuclear 已计价 ~75–85% 但承担 FERC/PJM 二元风险; 受监管公用事业仅计价 40–55% 但承担 ratepayer backlash 期权; 设备/EPC 中等计价, 而 VRT 处于头寸极端。

**策略师的综合**: 构建一个**净多、beta 受控**的组合, 把风险**集中在尚未充分计价的腿** (HBM 份额重构、测试乘数、已签未追回的大负荷电价、订单可见的 EPC/电网设备) 上, 同时**对冲已计价/拥挤的腿** (merchant nuclear, VRT, TLN)。催化排序应**前置**那些能解决最大二元的事件, 再加仓主观风险。

---

## 2. 组合: 三个多头 sleeve + 一个对冲 sleeve

按**多头总额 100 美元名义**测算。净多 ≈ 78%, 总敞口 ≈ 122%。所有数字为区间, 不是点估计。

### 2.1 Sleeve A — HBM4 / 先进封装多头 (占多头总额 40%)

| 代码 | 角色 | sleeve 权重 | 为何尚未充分计价 | 减仓触发 |
|---|---|---|---|---|
| **MU** | HBM4 份额重构 | 12% | 2027 牛市 EPS $16–18.5 (Card 03); HBM 份额从 ~10% 升到 20–25% 仅部分进入一致预期 | 失去 >1 个 hyperscaler 验证名额; CY27 HBM ASP 指引下调 >15% |
| **TSM** | CoWoS / interposer 瓶颈、"代工 2.0" 底片 | 10% | 同时捕捉逻辑底片与封装毛利; 2027 CoWoS 产能比 2025 翻倍未充分入模 | CoWoS 定价纪律破裂; Intel 18A/14A 攫取 >5% AI 逻辑份额 |
| **000660.KS (SK Hynix)** | 在位 HBM 配额持有者 | 8% | 配额合同提供能见度, 但 DRAM 周期拖累上限多重扩张 | NAND 重新过剩; HBM4 良率与 MU 趋同 |
| **6857.T (Advantest)** | 16-Hi 堆叠测试复杂度乘数 | 6% | 单 HBM4 stack 测试时长 ~1.8–2.2× HBM3e; 经营杠杆 > 收入杠杆 | 通过工艺并行突破让单 stack KGD 测试时长下降 |
| **005930.KS (Samsung Electronics)** | NVDA HBM4 验证期权 | 4% | 估值便宜; 仅在验证事件兑付 | 负面验证消息 |

### 2.2 Sleeve B — 尚未充分计价的 AI 电力 (占多头总额 30%)

这一 sleeve 体现 Card 06 的判断: 在一致预期尚未把多年**已交付**负荷增长资本化为终值的地方捕捉收益。

| 代码 | 角色 | sleeve 权重 | 为何尚未充分计价 | 减仓触发 |
|---|---|---|---|---|
| **AEP** | 已签大负荷电价的受监管公用事业 | 8% | 2027E EPS 上修仅 +8–12%; Ohio 数据中心 rider 已 85% 最低需求 / 10 年 — backlash 大体计价 | PUCO 推翻 Ohio rider; Indiana/Texas backlash 升级 |
| **ETR** | Gulf 数据中心建设 (Meta) | 6% | LPSC 部分否决是众数结果但未入 EPS; 上修仅 +6–10% | LPSC 完全否决; Meta capex 暂停 |
| **ETN** | 电气元件、数据中心混合广 | 6% | 2027 上修 +25–35%, 但仍以 pre-AI 16× EV/EBITDA 锚; 监管 beta 最低 | 连续 2 季度 book-to-bill < 1.1 |
| **GEV** | 燃机 + 电网周期 | 5% | 拆分后; 2028 年前的燃机 slot 预订未入 DCF 终值 | hyperscaler 燃机取消 >2 GW |
| **PWR** | T&D EPC 订单可见到 2028 | 5% | 多年收入能见度被低估; 2027 上修 +20–30% | 订单转化率跌破 0.85 |

### 2.3 Sleeve C — A 股 / 港股映射 (占多头总额 8%)

对 A 股策略师而言, 最干净的本地表达为:

| 代码 | 角色 | sleeve 权重 | 备注 |
|---|---|---|---|
| **2382.HK (舜宇光学) — 先进封装光学检测代理** 或 **300433.SZ (蓝思科技)** | 灵活 | 2% | 仅作期权; 不要过度计价本地 HBM 替代 |
| **300390.SZ (国产 ABF / EMC 封装代理, 因子筛选选取)** | ABF 基板国产化 | 2% | 多年故事, 即时 beta 低 |
| **600875.SH (东方电气) / 601727.SH (上海电气)** | 国产 firm-power 设备 | 2% | A 股直接读 firm-power 论题 |
| **600886.SH / 600900.SH (长江电力)** | 水电 / 可调度基荷, 低相关性 | 2% | 篮子内防御性 carry |

权重故意小 — 主导 alpha 在美股与韩台上市公司。A 股腿是为合规与捕捉**次级**外溢, 不是核心论题载体。

### 2.4 Sleeve D — 对冲与 pair trade (占总敞口 22%, 大多名义)

| 交易 | 规模 | 目的 |
|---|---|---|
| **空 VRT 多 ETN** (50:50 美元中性) | 各 6% gross | 中性化数据中心设备 beta 同时移除拥挤头寸尾部 (Card 06: VRT ~90% 计价, 成长 ETF 持仓十分位顶端) |
| **空 TLN 多 AEP 或 ETR** (美元中性) | 各 4% gross | 拿掉 FERC 共址二元同时保留已交付负荷敞口 |
| **多 6–9M 25-delta CEG put** | 1% 权利金预算 | 对 merchant-nuclear FERC 尾部的有限成本对冲; CEG IV 比 TLN 更可控 |
| **多 6M 25-delta VRT put** | 1% 权利金预算 | 对头寸的有限成本对冲; 比直接卖出更便宜 (考虑 M&A 期权) |
| **多 SOXX / SMH put-spread (3 个月)** | 0.5% 权利金 | 对全行业 AI 去风险事件的尾部对冲 |

美元中性 pair 在保留尚未计价腿的方向性 carry 同时, 把上一张风险卡所警示的二元尾部 bleed 掉。

---

## 3. 2026–2027 二元催化的排序

催化聚集在四个窗口。策略师的规则: **在向某腿加仓前先解决该腿的二元**, 并在可能上修或下修的二元前**对已计价的腿获利了结**。

| # | 窗口 | 催化 | 影响 | 事件前定位 | 事件后剧本 |
|---|---|---|---|---|---|
| 1 | **2026 Q1** | PJM 2026/27 RPM 拍卖参数与潜在价格上限设计 | CEG, VST, TLN 容量收入 | 通过 CEG put 持有对冲; 不向 merchant-nuclear 多头加仓 | 上限 > $300/MW-day 或无上限: 平对冲, 持有; 上限 ≤ $250: 兑付 pair 中的 TLN 空头腿 |
| 2 | **2026 上半年** | NVIDIA Rubin 出样 / 首批 GB300 级别出货 + HBM4 验证排期 (NVDA 上 MU、Samsung 重新验证) | Sleeve A (MU, 005930.KS) | MU 维持满仓; 005930.KS 维持小仓 | 验证确认时 MU 重估; 仅在 Samsung 正面消息时加大 005930.KS |
| 3 | **2026 年中** | FERC 对核电共址的通用命令 (跟进 ER24-2172 Talen 否决) | TLN, CEG (TMI 重启), VST (Comanche Peak 共址计划) | 维持 空 TLN / 多 AEP pair | 不利结果: 兑付 pair, 加仓 AEP/ETR; 宽松结果: 解除对冲, 建小仓 CEG 多头 |
| 4 | **2026 下半年 → 2027 Q1** | Virginia SCC 数据中心 cost-causation 裁决; LPSC 关于 Entergy–Meta 项目裁决; PJM/MISO 接入队列改革 | D, ETR, AEP; 通过 phantom-queue 影响 VRT/ETN | D 仓位为零; ETR 仓位能吸收部分否决; AEP 满仓 | 队列改革要求押金/里程碑: 增持 AEP/ETR (去 phantom-load 化), 进一步减 VRT |
| 5 | **2027 下半年** | 首批 Rubin 大规模商用; 申报与已通电数据中心负荷之差可见 | 整个篮子 | 在新闻中减仓, 而非提前 | 用已实现 vs 申报负荷比作为在 Sleeve A 与 B 间循环资本的触发 |

**Q1 2026 的 PJM 事件是第一主导二元**, 决定 merchant-nuclear 还有上行还是已见顶。**2026 年中 FERC 通用命令是第二主导二元**, 也可能是篮子里最大的单一重估事件。Sleeve A 的 HBM4 排序更**连续而非二元**, 这是它在个股波动较高的情况下仍占最大 sleeve 权重的原因。

---

## 4. 风险架构

### 4.1 接受的因子敞口

- 多大盘质量 (NVDA 邻近半导体、受监管公用事业)
- 多利率上行质量 (已签电价的公用事业、设备 EPC)
- 多 capex 超级周期 (工业、电气设备)

### 4.2 对冲的因子敞口

- **AI 主题拥挤度:** VRT 空头腿与 SOXX put-spread 是显式的拥挤度对冲, 不是方向性押注。
- **merchant 发电的监管二元:** TLN 空 vs AEP 多 pair 加 CEG put 保护。
- **Phantom-queue 回归:** 隐含通过低配设备、超配 EPS 上修仍低的受监管 rate base 实现。

### 4.3 止损 / 重置触发

| 触发 | 行动 |
|---|---|
| MU 失去 MS, META, GOOGL HBM4 验证中任一 | MU 减半; Sleeve A 整体下调 25% |
| PJM RPM 上限 ≤ $250/MW-day | 平 TLN 空头, 退出 CEG 对冲; 落袋, 不翻多 merchant |
| Virginia SCC 采纳严格 cost-causation | ETR 降到 3%; 不开 D; AEP 加 2% |
| hyperscaler 综合 capex 指引同比下调 >10% | Sleeve A 与 B 各减 20%; VRT 空头名义翻倍 |
| CNY < 6.95 vs USD (美元化供应链 FX 风险) | 对 Sleeve C 做 CNY 对冲 |

### 4.4 流动性与执行

- Sleeve A: MU/TSM 用 3–5 日 VWAP; 005930.KS 与 000660.KS 通过 KRX 直接执行; 6857.T 通过 TSE 主交易段。
- Sleeve B: 公用事业用 5 日 TWAP; ETN/PWR/GEV 流动性足以做机会型 block。
- Sleeve C: A 股代码用限价单; 满仓预期 1–2 日完成。
- Sleeve D: 期权腿在前一小时执行以捕捉早盘 IV; pair trade 与底层多头分层执行以维持 delta 中性。

---

## 5. 这次综合与"多 AI 电力篮子"的不同

三处刻意偏离一致预期:

1. **拒绝把 merchant nuclear 视为最高确信度多头。** Card 06 证明它最充分计价、最受监管二元约束。我们在空头侧或对冲下持有。
2. **超配已签未追回大负荷电价的受监管公用事业 (AEP, ETR)。** 这在**风险调整**基础上是 firm-power 论题最干净的表达, 因为 EPS 上修周期才刚刚开始。
3. **把 HBM 份额重构 (MU) 与测试复杂度 (6857.T) 视为芯片侧主导 alpha**, 而非纯产能扩张。这与 Card 03 关于 HBM4 经济学在份额上非线性、在产量上不线性的发现一致。

因此该组合是一个**"已交付负荷 + 份额重构 + 测试复杂度"** 的账本, 显式对冲一致预期低估的两个尾部 (监管与头寸)。

---

## 6. Card 08 (Reviewer) 的待审议问题

QA 审稿人应测试:

- **sleeve 权重**与所述因子敞口及风险调整后上行框架是否内部一致。
- **催化排序**是否留下任何二元未保护 (尤其是 FERC 通用命令与 Virginia SCC 裁决之间的空档)。
- **A 股 Sleeve C** 是否足够大以履行策略师授权, 是否应根据授权约束扩大。
- **对冲 sleeve** 权利金预算 (2.5% 名义) 在当前 IV 体制下是否足够。
- 与 cards 01–06 的数字一致性 (尤其是 Card 06 的已计价百分比与 Card 03 的 EPS 区间)。

---

## 7. 结论

HBM4 → firm power 论题真实、规模大、跨年度, 但二阶问题 — **哪些股票仍有未被识别的上行** — 集中在三个口袋: HBM 份额重构、测试复杂度乘数、以及多年已交付负荷增长尚未资本化的受监管公用事业。组合围绕这三个口袋构建, 并显式对冲两个主导下行的二元 (merchant-nuclear 监管与设备名拥挤度)。催化排序 — 2026 Q1 PJM、2026 上半年 NVIDIA/HBM、2026 年中 FERC、Virginia SCC 至 2027 Q1 — 定义每条腿何时加仓、减仓或重置。

---

## 8. 引用与输入

- 本白板会话的 Cards 01–06 (HBM4 需求、封装瓶颈、EPS 弹性、firm-power 约束、公用事业篮子、风险压力测试)。
- FERC Docket ER24-2172 (Talen/AWS Susquehanna ISA 否决, 2024 年 11 月)。
- PJM 2025/26 Base Residual Auction; PJM IMM 评论。
- Virginia SCC / JLARC 2024 年 12 月数据中心成本报告。
- AEP-Ohio 数据中心电价和解 (PUCO Case No. 24-508-EL-AIR)。
- Entergy Louisiana / Meta 申请 (LPSC Docket U-37425)。
- NVIDIA Rubin 平台披露 (288 GB HBM4, 22 TB·s)。
- MU, TSM, 000660.KS, 6857.T, AEP, ETR, ETN, GEV, PWR, VRT, CEG, VST, TLN 卖方一致 EPS 序列。

本文为投资综合, 不是价格目标。所有权重与区间均为带显式上下界与止损触发的中心情境。

## Follow-up

- Analyst: qa-manager
- Topic: 对 Card 01–07 整套 HBM4 → firm-power → 多腿组合论题做研究质量审查, 验证 sleeve 权重与因子声明的一致性、催化排序的覆盖完整性、跨卡数字一致性, 给出 pass / needs-revision / fail 评级与修订笔记。
- Question: Card 07 提出的 sleeve 权重 (Sleeve A 40%, B 30%, C 8%, D 22% gross) 与对冲预算 (2.5% 权利金) 是否与 cards 01–06 所述的因子敞口、风险评分与已计价百分比一致? 催化排序 (PJM → Rubin → FERC → SCC) 是否在每个事件之前都有匹配的对冲, 跨卡数字 (例如 MU 2027 EPS、Rubin 288 GB、Three Mile Island 重启、PJM $269.92/MW-day) 是否一致表述?
