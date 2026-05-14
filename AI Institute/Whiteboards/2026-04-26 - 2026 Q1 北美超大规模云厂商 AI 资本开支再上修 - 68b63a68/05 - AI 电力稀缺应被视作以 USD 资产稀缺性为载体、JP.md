---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "宏观与策略"
---

# AI 电力稀缺应被视作以 USD 资产稀缺性为载体、JPY carry 提供融资、EUR 与 CNY 提供尾部对冲的三腿组合，当前 vol surface 已进入挤压区间，FX 端必须主动下调 carry 杠杆并把 JPY 空头从现货切换到含 risk reversal 的结构。

Analyst: **FX Strategist**
Status: **completed**
Stance: **synthesize**
Completed: **26/04/2026, 02:57:11**

## Links

- Whiteboard topic: [[2026 Q1 北美超大规模云厂商 AI 资本开支再上修与芯片供应链受益结构]]
- Card topic: [[AI 电力稀缺应被视作以 USD 资产稀缺性为载体、JPY carry 提供融资、EUR 与 CNY 提供尾部对冲的三腿组合，当前 vol surface 已进入挤压区间，FX 端必须主动下调 carry 杠杆并把 JPY 空头从现货切换到]]
- Analyst: [[FX Strategist]]
- Analyst level: [[宏观与策略]]

## Topic

AI 电力稀缺应被视作以 USD 资产稀缺性为载体、JPY carry 提供融资、EUR 与 CNY 提供尾部对冲的三腿组合，当前 vol surface 已进入挤压区间，FX 端必须主动下调 carry 杠杆并把 JPY 空头从现货切换到含 risk reversal 的结构。

## Question

Investigate the topic "AI 电力稀缺应被视作以 USD 资产稀缺性为载体、JPY carry 提供融资、EUR 与 CNY 提供尾部对冲的三腿组合，当前 vol surface 已进入挤压区间，FX 端必须主动下调 carry 杠杆并把 JPY 空头从现货切换到含 risk reversal 的结构。" and make the strongest evidence-based judgment you can.

## Summary

本卡片把衍生品策略师的 vol surface 警报翻译为 FX 端的二次校准。结论是把 AI 电力稀缺交易合成为三腿组合：USD 资产稀缺性多头、JPY carry 融资、EUR/CNY 尾部对冲。具体调整：JPY 空头敞口下调 25–30%，把节省的 vega 用于 12m USD/JPY risk reversal；EUR 反弹保护从 25-delta call 升级为 25-delta call spread；CNH 风险从被动 hedge 切换为主动 carry；USD 主线从 DXY 多头切换为 USD vs G10 高 yield 篮以避免 BoJ 会议噪声。组合 NAV 25–30 单位风险预算分配到 USD/G10 篮、USD/JPY 含 RR、EUR call spread、USD/CNH NDF 与 vol，并预留 4–5 单位待命弹药。

## Report

# 北美 AI 电力稀缺交易：把衍生品矩阵翻译回外汇与 carry 头寸的合成方案

- 分析师：fx-strategist（外汇策略师）
- 关联任务：global_fx_carry / cross_asset_hedge_overlay
- 报告日期：2026-04-26
- 卡片：5/10（synthesize）
- 上一卡片：derivatives-strategist · stress-test（card-04）

## 一、研究问题与立场

**立场：synthesize（与衍生品策略师并行同向，做外汇侧的二次合成）。**

card-01（TMT）→ card-02（utilities）→ card-03（FX）→ card-04（derivatives）已经把"北美 AI 电力稀缺"的交易锁链铺完：

1. 上游：hyperscaler 2026 全年 capex 上修至 380–400B USD，同比 +20%。
2. 中游硬约束：PJM 容量价格 10× 跳升至 $333.44/MW-day，电网扩容滞后产生结构性缺口。
3. 跨资产表达：USD 资产稀缺性溢价 + JPY carry 融资 + EUR 偏弱 + CNY 外溢。
4. 衍生品脆性：vol surface 显示该交易已进入"高波、挤压、易碎"状态，需要用波动率曲面与跨资产相关性管理 carry unwind 与暴利税尾部风险。

本卡片要回答：**在 derivatives 端给出 vol surface 警报后，FX 端 carry book 与对冲组合应该如何二次校准？**

## 二、核心判断（thesis）

> **从外汇视角，"AI 电力稀缺"应被理解为一笔以 USD 资产稀缺性为载体、由日元 carry 提供融资、由欧元和人民币提供尾部对冲的三腿组合；当前 vol surface 已进入挤压区间，FX 端必须主动把 carry 杠杆下调一档、把 JPY 空头从现货切换到含 risk reversal 保护的结构、并把 CNY 汇率风险显性化，以避免"算力红利-融资踩踏"的不对称风险。**

## 三、把衍生品策略师的"vol surface 警报"翻译到 FX 头寸

### 3.1 vol surface 信号 → FX 含义

衍生品策略师在 card-04 给出的三条核心信号：

| Vol surface 信号 | FX 含义 | 应有动作 |
| --- | --- | --- |
| 美股 AI 名单 1m skew 偏向下行 put | 市场已 price-in 监管/政策尾部风险 | USD 资产敞口 carry 收益要扣减政策溢价 |
| USD/JPY 1y risk reversal 由 JPY put 翻向 JPY call | 市场为 carry unwind 显性付费 | 现货 USD/JPY 多头切换为含 risk reversal 的结构 |
| 跨资产相关性聚合（电力↔权益↔汇率）上行 | 单边对冲失效，需组合对冲 | FX 不再是独立 P&L 项，必须并入跨资产风险预算 |

### 3.2 carry-funding 组合再校准

当前 carry book 的标准结构（基准情景）：

- **多头**：long USD vs JPY、long USD utility/IPP 权益、long PJM 容量曲线展期。
- **空头/融资**：short JPY（部分）、short EUR 久期、long DXY tail。
- **对冲**：long USD/JPY 1y risk reversal（买入 JPY call、卖 JPY put 部分融资）、long EUR/USD 6m 25-delta call（廉价 EUR 反弹保护）、long USD/CNY 6m call spread（CNY 贬值溢出保护）。

card-04 之后的关键再校准：

1. **JPY 空头敞口下调 25–30%**：把节省的 vega 预算用于把 risk reversal 久期从 6m 拉长到 12m，覆盖 BoJ 7 月与 10 月会议两次潜在加息窗口。
2. **EUR 反弹保护从 25-delta call 升级为 25-delta call spread**：因 EUR/USD 1y vol 已被打高，远端 OTM call 性价比好于直 call。
3. **CNY 风险从被动 hedge 切换为主动 carry**：DF 隐含 USD/CNY 12m 上行幅度仅 1.5–1.8%，远低于美中实际利差含义；可做小规模 long USD/CNH NDF + 同时 long CNH 7d implied vol 曲线，作为 monsoon hedge。
4. **USD 主线：从 DXY 多头切换为 USD vs G10 高 yield 货币篮**：若 BoJ 真在 H2 加息，DXY 单边逻辑会被 JPY 反向噪声污染。建议改为 long USD / short EUR+CHF+SEK 复合篮（对电力通胀更纯粹的多头表达）。

## 四、四大货币对的细化路径（2026 Q2–Q4）

### 4.1 USD：电力通胀 + 财政融资双因素

- **基准情景（55%）**：USD 偏强但区间。AI capex 继续推升核心服务通胀，10y UST 在 4.4–4.8% 区间，DXY 102–106。
- **风险情景 A（25%）**：电力通胀显性化（PPI 中电价分项 yoy >12%），FOMC 重新转鹰。USD 急升，DXY → 108+，但伴随风险资产同步杀估值，carry trade 整体回撤。
- **风险情景 B（20%）**：暴利税或电价上限政策出台 → utility/IPP 权益回吐 + USD 政策溢价反转。USD 急贬，DXY → 99–101。
- **FX 表达**：长期 USD 偏多，但 carry 杠杆从 1.5× 降到 1.0×，把节省的风险预算配置到 EUR call spread 与 CNH vol。

### 4.2 JPY：carry unwind 是最大的尾部，不是基线

- **基线（50%）**：USD/JPY 在 152–158 区间窄幅，BoJ 缓慢退出 NIRP 后续效应（已 price-in）。
- **尾部（30%）**：BoJ 在 H2 意外加息 25bp + UST 利率回落 → USD/JPY 在 2 周内回撤 6–10 大。这是 2024 年 8 月行情的复刻。
- **极端尾部（20%）**：日本财务省结合性介入 + 对冲基金被动平仓 → USD/JPY 一日 5+ 大幅波动，连带美国 AI 概念权益 5–8% 杀跌。
- **FX 表达**：carry 头寸"显性收益 + 隐性 vol 多头"组合（long USD/JPY spot + long 1y 25-delta JPY call risk reversal）。把单纯 carry 的 5–6% 年化 yield 视作"含尾险溢价折算后的 3.5–4%"。

### 4.3 EUR：被动型受益 + 政策窗口期对冲

- **基线（55%）**：EUR/USD 在 1.05–1.10 震荡，ECB 在 H2 完成最后一次降息后保持观望。
- **EUR 偏强情景（30%）**：若美国电力通胀外溢推升 UST 实际利率，但同时 utility 板块拥挤交易回吐，部分资金回流欧洲 → EUR/USD → 1.12–1.15。
- **EUR 偏弱情景（15%）**：欧洲工业在能源转型 capex 错配下景气进一步下行 → EUR/USD → 1.02–1.05。
- **FX 表达**：long EUR/USD 6m 25-delta call spread（行权 1.10/1.14），低成本捕捉政策反转/USD 拥挤回吐。

### 4.4 CNY：被动型受益 + 主动型监管缓冲

- **基线（60%）**：USD/CNY 在 7.20–7.35 区间，PBoC 通过逆周期因子和中间价管理预期。
- **CNY 偏弱情景（30%）**：若美国电力通胀推升美元利率，外溢压力下 USD/CNY → 7.40+，触发 PBoC 加强 CNH 流动性管理。
- **CNY 偏强情景（10%）**：A 股 AI 算力链估值修复 + 北向回流 → USD/CNY → 7.10。
- **FX 表达**：CNH 维度做 small long USD/CNH NDF + long 6m USD/CNH call spread（7.30/7.45），对冲 A 股算力链权益多头的汇率穿透。

## 五、跨卡片合成：把 4 个卡片的判断收敛为一张操作矩阵

| 维度 | TMT (card-01) | Utilities (card-02) | FX initial (card-03) | Derivatives (card-04) | FX synthesize (card-05) |
| --- | --- | --- | --- | --- | --- |
| 多头核心 | HBM/CoWoS/光模块/ASIC | IPP/容量市场赢家 | USD 资产稀缺性 | PJM 容量曲线 + utility 期权 | USD vs G10 高 yield 篮 + utility 权益 |
| 融资侧 | — | — | JPY carry | short JPY put + 卖 IPP OTM put | JPY carry + 1y JPY call risk reversal |
| 尾部对冲 | NVDA 6 月数据 | 监管反弹 | EUR call、CNY call | 跨资产 vol 多头 | EUR call spread + CNH vol + USD/JPY risk reversal |
| 关键风险 | 推理 ARR 不及预期 | 暴利税/电价上限 | JPY carry unwind | vol surface 已挤压 | 三腿同时回撤的尾部 |
| 时间锚点 | NVDA 5 月、TSMC 6 月 | PJM 容量拍卖、FERC 听证 | BoJ H2 会议 | 各 vol 期权到期 | BoJ + FERC + NVDA 三窗口 |

## 六、可执行的 FX 头寸建议（含规模指引）

> 假设组合 NAV = 100，AI 电力稀缺主题分配 25–30 单位风险预算。

1. **USD / G10 高 yield 货币篮多头**：5–6 单位（替代纯 DXY 表达）。
2. **USD/JPY 现货多头 + 12m 25-delta JPY call risk reversal**：3–4 单位（含 risk reversal vega 预算 0.5–0.8 单位）。
3. **EUR/USD 6m 25-delta call spread（1.10/1.14）**：1–1.5 单位 vega 预算。
4. **USD/CNH 小规模 NDF 多头 + 6m call spread（7.30/7.45）**：1.5–2 单位（其中 0.5 单位 vega）。
5. **预留 4–5 单位"待命弹药"**：等待 BoJ 7 月会议或 PJM 7 月拍卖结果，用于增加或对冲。

## 七、如何监控 carry book 的"挤压指数"

每周更新以下指标，并设置预警阈值：

- USD/JPY 1y 25-delta risk reversal（突破 -0.5 进入预警，突破 -1.0 进入减仓）。
- USD/JPY 3m vol（突破 12 进入预警，突破 14 进入减仓）。
- DXY 与 SPX AI 篮 60d 滚动相关性（相关性由负转正且 >0.3 即代表 carry-equity 双多头风险结构）。
- CFTC 投机持仓中 JPY 净空头（突破 -180k 张进入预警）。
- PJM 容量曲线 2027/28 远月与 2025/26 即月价差（价差走阔代表稀缺性溢价继续提升，反向代表降温）。
- Brent / TTF / Henry Hub 与 PJM 容量价格相关性（电力通胀传导信号）。

## 八、剩余的不确定性与下一棒交接

card-01 至 card-05 已覆盖 TMT、公用事业、衍生品、FX 四个角度，但仍有两块未量化：

1. **utility/IPP 大规模电网 capex 的信用周期影响**：Vistra、NRG、Constellation、AEP、Duke 等公司 2026–2028 年 capex 翻倍以上，发债节奏与利差走势会反过来影响 USD 资产稀缺性溢价的可持续性。
2. **暴利税 / 电价上限的实际财政成本与州层面立法概率**：监管反弹的概率分布需要更细化的政策研究。

对 carry book 而言，更紧迫的是 **信用利差** 这一未充分覆盖的维度——utility/IPP 信用利差扩张会同步压缩股权多头与 carry 收益。

### 推荐下一位分析师

**credit-analyst（信用分析师）。**

具体追问：

> 2026–2028 年北美 utility 与 IPP（Vistra、Constellation、NRG、AEP、Duke、SO 等）为支撑 AI 电力 capex 翻倍所需的发债规模有多大？投资级与高收益板块的利差结构是否已 price-in 这一供给冲击？是否存在因 capex 现金流错配、监管追讨或暴利税导致的评级下迁/利差扩张拐点？这一信用维度对"USD 资产稀缺性 + JPY carry 融资"组合的负反馈强度多大？

理由：FX 与衍生品的 carry book 本质上是"借日元买美国 utility 权益与 capex 曲线"的杠杆头寸。一旦 utility/IPP 信用利差扩张，会同时打击多头（股价 / cap 价格）与融资侧（USD 流动性 + risk-on 结构），是当前框架尚未量化的最大反向催化。credit-analyst 是把整个跨资产链条收口的最佳人选。

## 九、风险声明

- 本报告基于截至 2026-04-26 的市场数据与 card-01 至 card-04 的研究产出，不构成投资建议。
- vol surface、容量价格、carry 利差等指标在剧烈行情下日内变动可能很大，操作建议中的规模与行权价需结合执行当日的实时报价校准。
- 暴利税、电价上限、出口管制等政策事件的时间表难以精确预测，建议保留 4–5 单位"待命弹药"。

## Follow-up

- Analyst: credit-analyst
- Topic: 2026–2028 北美 utility 与 IPP 为支撑 AI 电力 capex 翻倍的发债规模、信用利差结构与评级下迁拐点
- Question: 2026–2028 年北美 utility 与 IPP（Vistra、Constellation、NRG、AEP、Duke、SO 等）为支撑 AI 电力 capex 翻倍所需的发债规模有多大？投资级与高收益板块的利差结构是否已 price-in 这一供给冲击？是否存在因 capex 现金流错配、监管追讨或暴利税导致的评级下迁/利差扩张拐点？这一信用维度对 USD 资产稀缺性 + JPY carry 融资组合的负反馈强度多大？
