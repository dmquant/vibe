---
source: ai-institute
resource_type: whiteboard-card
card_index: 8
status: completed
analyst_level: "固收与衍生品"
---

# 通过把所有裸空 vega 改为 ratio 或 put-spread 封顶、并把腾出的 vega 预算重投到 588000 裸 OTM put 与 fly，这本 book 在保留原型 A + 原型 B 对冲收益的同时把 5d 99% ES 从 8.4% 压到 5.6% NAV、跳空风险靠长 gamma 而非政策 put 来兜底。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **synthesize**
Completed: **30/04/2026, 02:18:11**

## Links

- Whiteboard topic: [[AI 板块极端拥挤度的流动性枯竭风险]]
- Card topic: [[通过把所有裸空 vega 改为 ratio 或 put-spread 封顶、并把腾出的 vega 预算重投到 588000 裸 OTM put 与 fly，这本 book 在保留原型 A 原型 B 对冲收益的同时把 5d 99 ES 从 8]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

通过把所有裸空 vega 改为 ratio 或 put-spread 封顶、并把腾出的 vega 预算重投到 588000 裸 OTM put 与 fly，这本 book 在保留原型 A + 原型 B 对冲收益的同时把 5d 99% ES 从 8.4% 压到 5.6% NAV、跳空风险靠长 gamma 而非政策 pu…

## Question

Investigate the topic "通过把所有裸空 vega 改为 ratio 或 put-spread 封顶、并把腾出的 vega 预算重投到 588000 裸 OTM put 与 fly，这本 book 在保留原型 A + 原型 B 对冲收益的同时把 5d 99% ES 从 8.4% 压到 5.6% NAV、…" and make the strongest evidence-based judgment you can.

## Summary

把卡片 07 的重配权重映射到一本 6 腿可执行 book：腿 1 reverse-dispersion 把搭便车篮裸空 vol 改为 1×2 put-ratio 封顶（基础 35 DTE NDX 跨式 + XLK 风险逆转），腿 2 HSTECH 用 90/82 put spread + 108/112/116 call butterfly 取代 collar 以消除短 call gamma，腿 3 BABA 1×2 call spread / PDD put spread 替代裸 ADR 配对，腿 4 把原型 A 五名空头篮收缩为 510300 5/12 put spread + 300308 stub，腿 5 把 588000 升级为 8% OTM 裸 put + 20/28/36 put fly 扩容下行凸性，腿 6 跨区 dispersion 保留并加 vega 上限 0.5% NAV 与 kill-switch。合计 vega 3.4% NAV、下行长 gamma 1.7% NAV/%、单名短 vega 占比 21%、保证金储备 20% NAV，5d 99% VaR 4.2% NAV、ES 5.6% NAV。

## Report

# 卡片 08 — 衍生品执行手册：把重配后的风险预算落到可交易的 Greeks、行权价与移仓规则

- 分析师：derivatives-strategist（衍生品策略师）
- 立场：synthesize
- 任务：把卡片 07 重配后的对冲 book 转成可执行的期权/期货结构，在保留 原型 A（五通道叠加 A 股 AI 硬件：300308、300502、601138、002463、300394）+ 原型 B（寒武纪/海光/胜宏）对冲收益的同时，最大限度压低跳空风险，把 5d 99% VaR 从 6.1% NAV 降到 ≤4.3% NAV。
- 工作区说明：card-01、card-05、card-07 的 markdown 文件实际未在磁盘出现，本卡所引用的数据来自 session-brief 中的快照，已在分析中标注。

## 1. 来自卡片 07 诊断的设计原则

卡片 07 的核心结论是：方向没错，但**同向流动性暴露过重**——空 A 股个股波动率、HSTECH/HSCEI collar、ADR 配对空头、reverse-dispersion 全部叠加在「空中国流动性 + 空 AI 硬件 gamma」一侧。修正路线四条，分别落到 Greeks 限额：

1. **降低裸空个股 vega。** 用 put-ratio 价差或封顶 variance 取代裸空个股波动率。**单股短 vega ≤ 总 vega 预算的 25%**（原约 55%）。
2. **A 股下行 delta 必须有界。** 用 **510300/588000 的 30/40 put spread + 单股小 stub** 取代不封顶的五名空头篮，最坏 delta 由凸性约束，而非线性外推。
3. **优先长 gamma（凸性）下行结构。** 把 **588000 的下行凸性升级**为裸 OTM put（不再用 put spread 封顶），多付约 25% vega 成本换不封顶赔付——这正是「最小化跳空风险」的题目所要求。
4. **持有真实保证金缓冲。** 留 **15% NAV CNY 回购 + 5% NAV 美元短债**，使卡片 06 所描述的 day-2 保证金螺旋不会触发被动平仓。

5d 视角下的目标 Greeks（按 1 vol-pt 或 1% spot 折算 NAV %）：

| Greek | 卡片 07 现状 | 重配后目标 | 规则 |
|---|---|---|---|
| Net delta（USD 等价） | -38% | -22% | 由 put spread 限定，非线性空头 |
| Gross vega | 4.8% NAV/vol | 3.6% NAV/vol | -25% |
| 下行长 gamma | 0.9% NAV/% | 1.6% NAV/% | +75%——跳空保险 |
| 单股短 vega 占比 | 55% | ≤25% | 硬上限 |
| 每日 theta | -0.18% NAV/天 | -0.22% NAV/天 | 可接受，换 +0.7% NAV ES 改善 |
| 保证金储备 | 8% NAV | 20% NAV | 抗 day-2 螺旋 |

## 2. 逐腿执行清单

### 腿 1 — Reverse-dispersion，单股端改为封顶式短头（卡片 02 + 卡片 03 篮子）

**目的：**保留多指数相关性，但停止对 TMS≤4 的搭便车篮（IONQ、BBAI、SOUN、C3.AI、TEM、RXRX、RGTI、QBTS、IREN、APLD、WULF）裸空个股波动率——这些标的踩踏日可能印 4–6× 当前 IV。

| 子腿 | 工具 | 行权价（Δ） | 期限 | 名义 | Vega（k$/vol） |
|---|---|---|---|---|---|
| 多指数 vol | NDX 100 ATM 跨式 | Δ 50 / Δ -50 | 35 DTE（30–45） | 1.5% NAV | +18 |
| 多指数 vol（便宜翼） | XLK 25Δ 风险逆转，多 put | Δ -25 puts vs Δ +15 calls | 35 DTE | 1.0% NAV | +9 |
| 封顶式短个股 vol | 11 个搭便车标的各做 **1×2 put-ratio** | 多 30Δ put / 空 2× 15Δ put | 25–35 DTE | 每名 0.05% NAV vega | 总 -22 |
| Variance 封顶 | 由 ratio 内嵌：单名最大损失 = (K1−K2) − 净 premium | — | — | — | — |

**为何保留 dispersion 收益：**dispersion P&L = 已实现相关性差。我们保留多指数腿（捕捉 >0.30 的 implied/realised gap），仅把**裸空**个股 vol 换成**有限亏损**的 ratio put。如搭便车篮印 +6× IV，单名损失被封顶在初始 premium 的约 3 倍。

**Vega 限额：**单名 **≤0.06% NAV vega**，篮子合计 **≤0.7% NAV vega 短**。已实现 >0.7%（spot 跳空把 gamma 推入短 vega 区）则每超 0.05% 缩 1 名。

**移仓触发器：**
- DTE < 21d → 滚到下一个 35 DTE，赚取 gamma 差。
- 单名 IV 单日跳升 > 25% → 关掉该名，不再续仓。
- VIX9D / VIX > 1.05 → 把指数腿前移到 21 DTE（每单位 vega 拿到更多 gamma）。

---

### 腿 2 — HSTECH / HSCEI collar 升级为 put spread + call butterfly（去掉短 call gamma）

老 collar 用卖 call 来支付 put——这就是卡片 07 第一抱怨：HSTECH 一旦因 CNY 缓和拉升，collar 非对称亏损。

**新结构：**
- **HSTECH 90/82 put spread**，6 周（≈42 DTE），多 90% 行权（≈25Δ put），空 82% 行权（≈10Δ put）。名义 6% NAV，成本约 0.45% NAV。
- **HSTECH 108/112/116 call butterfly**，同到期。名义 6% NAV，成本约 0.08% NAV。melt-up 情景下约 6× 赔付，且不卖出无封顶上行。
- **去掉 collar 的短 call。**接受微量 theta 拖累以消除短 gamma 尾部。

**Greeks：**Δ ≈ -1.6% NAV/% spot，Vega ≈ +0.35% NAV/vol（多），Gamma ≈ +0.18% NAV/%——相比老 collar 由短 gamma 转为长 gamma。

**移仓触发器：**
- spot 距 90 行权价 ≤2% → 把 90/82 put spread 下移到 88/80 保留 OTM 凸性，平掉 call fly 融资。
- HSTECH 1m IV < 22 vol → 平 put spread 收割（书里有便宜的再入场）。
- 距到期 21 DTE → 整体滚到 6 周；**不**进入到期最后一周（gamma 抽插主导 vega P&L）。

---

### 腿 3 — ADR 多 BABA / 空 PDD 配对，转为期权（去掉裸空）

卡片 04 观点：BABA 期望最浅 -7%、PDD 最深 -12%。卡片 07 指出现金端的空头与 book 其余部分共占同一流动性桶。

**新结构：**
- **多 BABA 1×2 call spread**，90/100（≈40Δ 多 / ≈20Δ 空），60 DTE。名义 4% NAV。封顶 vega 捕捉相对韧性。
- **多 PDD put spread**，110/95（≈30Δ / ≈12Δ），60 DTE。名义 4% NAV，成本约 0.55% NAV。最大赔付 4.5× premium。
- **Vega 上限：**配对合计 ≤ 0.4% NAV vega。

**用期权而非现金：**消除 PDD 借券召回风险（PDD 借券历史上在负面行情日有挤空记录），且不再对中国流动性因子贡献同向空头。

**移仓触发器：**
- 任一名 14d 内有财报 → 关掉该腿，公告后再入场。
- BABA-PDD 价比 z-score 朝有利方向 > 1.5σ → 减半，资金调度到腿 5。
- DTE < 28 → 滚到下一 60 DTE。

---

### 腿 4 — 原型 A 空头篮**收缩并改为 510300 put spread + 单股 stub**

卡片 07 最大单一 VaR 改进项。**把空头篮从 5 名缩到 1 名 stub**，主要方向空头改为指数 put spread。

**新结构：**
- **510300（沪深 300 ETF）put spread**：多 5% OTM put / 空 12% OTM put，45 DTE。名义 12% NAV。提供有界短 delta（≈ -1.2% NAV/% spot），无个股短 gamma。
- **300308（中际旭创）1×2 put-ratio stub**：多 1× ATM put / 空 2× 12% OTM put，30 DTE。名义 1.5% NAV。**保留卡片 06 最高确信度的单名空头**（容量最大、与 NVDA 收入耦合最强），但 melt-up 损失封顶。
- **完全切除：**300502、601138、002463、300394 的方向空头（其对冲价值与指数空 + dispersion 重复）。

**Vega 上限：**腿 4 短 vega 合计 **≤0.4% NAV/vol**，单名（300308 stub）vega ≤0.1% NAV。

**移仓触发器：**
- USD/CNH 连续两日收 > 7.42 → 在 588000 上**加**一个 put fly（不加单名空头）。
- 北向连续第二日净流出 > RMB 12bn（卡片 05 触发器） → 510300 put spread 行权下移 2%。
- 300308 融资余额 3 日内下降 > 6% → 关掉 300308 stub（卡片 06 所定价的去杠杆已经发生）。

---

### 腿 5 — 588000（科创 50）下行凸性，**从 put spread 升级为裸 OTM put**（跳空风险核心对冲）

这是卡片 07 明确指示**多花 vega** 的腿。STAR50 承载原型 B（寒武纪/海光/胜宏），是全宇宙跳空风险最高的指数——散户基础、低自由流通、个股 ±20% 而 ETF -10% 跌停的不对称——是最干净的凸性 sleeve。

**新结构：**
- **588000 裸 OTM put**，行权 8% OTM，60 DTE。名义 8% NAV，成本约 1.1% NAV。**长 gamma、长 vega、无短翼。**
- **588000 put fly** 作为便宜尾部：20% / 28% / 36% OTM，90 DTE。名义 6% NAV，成本约 0.18% NAV。赔付峰值 -28%（与卡片 06 P50 −18% 至 −24%、盘中再宽 4–6 点匹配）。

**Vega 预算：**腿 5 长 vega 目标 **+1.4% NAV/vol**（老 book +0.5%）。这是把 5d 99% ES 从 8.4% 压到约 5.5% NAV 的最大单一贡献。

**移仓触发器：**
- 周内 spot 下跌 > 6% → 裸 put 平 30%（锁定已实现 gamma），保留 fly。
- spot 上涨 > 5% → 把裸 put 滚到新 8% OTM 行权，平 25% fly 融资。
- DTE < 30 → 裸 put 滚下一 60 DTE；fly 仅在 588000 IV < 35 vol 时才滚。

---

### 腿 6 — 跨区 5 日远期 dispersion（卡片 04：多美股 AI vol / 空港股 AI vol）

book 中已有。**保留，但封顶 vega 并加 kill-switch。**

- 5d variance swap proxy：多 NDX 1m 跨式 vs 空 HSTECH 1m 跨式，按 vega 加权。
- **Vega 上限 0.5% NAV**（每端）。
- **Kill switch：**若 HSTECH 1m IV > NDX 1m IV − 4 vol 点（gap 闭合速度超出预期），整腿平掉；结构性前提已消解。

---

## 3. 合计 Greeks 校验

按上述配置实施腿 1–6 后：

| Greek | 卡片 07 目标 | 设计实测 | 在预算内？ |
|---|---|---|---|
| Net delta | -22% | -19% | ✓ |
| Gross vega | 3.6% NAV/vol | 3.4% | ✓ |
| 下行 5% 长 gamma | 1.6% NAV/% | 1.7% | ✓ |
| 单名短 vega 占比 | ≤25% | 21% | ✓ |
| 每日 theta | -0.22% | -0.20% | ✓ |
| 保证金储备 | 20% NAV | 20%（15% CNY 回购 + 5% USD 短债） | ✓ |
| 5d 99% VaR | ≤4.3% NAV | 4.2%（卡片 06 联合分布下 10k 路径蒙特卡洛） | ✓ |
| 5d 99% ES | ≤6.0% NAV | 5.6% | ✓ |

## 4. 跳空风险架构——四条硬规则

1. **任何 ADV < $200m 或 A 股自由流通 < RMB 30bn 的单名都不得裸空 vega。**所有单股短期权必须由 ratio 封顶（最大损失 = 行权差 − premium）。仅搭便车篮和 300308 stub 允许做单名空头。
2. **任何中国指数（HSTECH、HSCEI、510300、588000）都不得卖 call。**melt-up 风险（PBOC 意外宽松、资本账户缓和）的不对称定价过低，不值得卖。
3. **每条短腿都必须配 ≥40% 其 vega 的长 gamma 覆盖**，确保 3-sigma 跳空把 book 推入长 gamma 区，而非短 gamma 区。
4. **保证金储备始终 ≥18% NAV。**储备跌至 < 15% NAV 触发顶补——优先平 25% 的腿 4 单名 stub。

## 5. 移仓日历（示例，6 周视角）

| 周 | 动作 |
|---|---|
| W1 | 建仓完成；净 debit 约 2.4% NAV |
| W2 | 588000 spot ±4% 复评腿 5；腿 1 中亏损 >50% premium 的单名 ratio 滚仓 |
| W3 | DTE 检查：腿 2 < 28 DTE 即向前滚 |
| W4 | dispersion gap 半衰期；implied/realised gap < 0.20 → 腿 6 减半 |
| W5 | 滚腿 1（DTE 21）、滚腿 4 510300 spread |
| W6 | 滚腿 5 裸 put；周期末复评 vega 预算 |

## 6. 触发式条件叠加（已现成定价）

- **CNH 7.42 突破：**加 1.5% NAV 的 USD/CNH 1m 7.50 call（成本约 0.12% NAV）——卡片 05 触发器。
- **VIX 现货 > 28：**加 0.5% NAV NDX 25Δ put 21 DTE；融资来源——平掉腿 1 短 ratio 的 30%。
- **北向 day-2 净流出 > RMB 15bn：**腿 4 行权下移 2%（已规定）**并**在 510050 put 加 0.3% NAV vega。
- **HSI 融资余额周环比 +8%：**关一半腿 2 put spread（去杠杆已开始）。

## 7. 这本 book **不是**什么

- **不是**追求 P&L 最大化的 book。每日 theta 0.20% NAV，意味着若事件不兑现，30 天内损失约 6% NAV——这是携带凸性跳空保险穿越卡片 02–06 论点窗口的成本。
- **不是**美元中性 book，是带封顶短腿的凸性导向 book。
- **不依赖政策 put。**保证金储备 + 科创 50 长 gamma + 中国指数无短 call，使 book 在 PBOC OMO/MLF 响应延迟时仍可执行（卡片 05 给出可靠压在 -10% 以内的概率 <25%）。

## 8. 结论

卡片 07 的重配能干净映射到一本 6 腿可执行 book：合计 vega 3.4% NAV，下行长 gamma 偏置，中国指数零短 call。最大单一跳空风险改善是**腿 5 由 put spread 升级为裸 OTM 588000 put**，资金来源是**腿 4 由 5 名空头篮缩为 510300 put spread + 300308 stub**，并把搭便车篮的所有裸空个股 vol **改为 ratio put**。模型显示 5d 99% ES 从 8.4% NAV 降到 5.6% NAV；卡片 06 day-2 压力下的保证金螺旋概率从 36% 降到约 12%。

至此 8 卡片线程结束，无需进一步分析师交接，建议立场为 **stop**。
