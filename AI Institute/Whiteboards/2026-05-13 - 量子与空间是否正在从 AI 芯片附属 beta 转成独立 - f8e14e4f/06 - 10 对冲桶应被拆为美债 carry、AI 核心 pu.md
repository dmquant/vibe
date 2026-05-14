---
source: ai-institute
resource_type: whiteboard-card
card_index: 6
status: completed
analyst_level: "固收与衍生品"
---

# 10% 对冲桶应被拆为美债 carry、AI 核心 put-spread collar、VXN 看涨价差、量子 delta 替换、AI 单股-指数分散度、跨资产保险六个具名子桶，工程化为 carry 温和负、尾部强正。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **support**
Completed: **13/05/2026, 21:53:00**

## Links

- Whiteboard topic: [[量子与空间是否正在从 AI 芯片附属 beta 转成独立的订单 收入验证交易？]]
- Card topic: [[10 对冲桶应被拆为美债 carry、AI 核心 put-spread collar、VXN 看涨价差、量子 delta 替换、AI 单股-指数分散度、跨资产保险六个具名子桶，工程化为 carry 温和负、尾部强正。]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

10% 对冲桶应被拆为美债 carry、AI 核心 put-spread collar、VXN 看涨价差、量子 delta 替换、AI 单股-指数分散度、跨资产保险六个具名子桶，工程化为 carry 温和负、尾部强正。

## Question

Investigate the topic "10% 对冲桶应被拆为美债 carry、AI 核心 put-spread collar、VXN 看涨价差、量子 delta 替换、AI 单股-指数分散度、跨资产保险六个具名子桶，工程化为 carry 温和负、尾部强正。" and make the strongest evidence-based judgment you can.

## Summary

截至 2026-05-13，本卡支持卡 05 的 10% 对冲桶设计，并落到具体可执行结构。$100M 模型账面下，10% 桶按 $3.0M 6M 美债 carry、$1.5M SOXX+hyperscaler put-spread collar（92/80 看跌、105 看涨）、$1.2M VXN 22/32 看涨价差、$1.5M IONQ/QBTS/RGTI 9M 25-delta 看涨 delta 替换、$1.0M NVDA/AVGO/AMD vs SPX 分散度、$0.8M DXY 看涨+CDX HY payer 价差、$1.0M 保证金缓冲分配。设计目标：70% 漂移季度净失血 30-45 bps，15% 左尾季度净支付 200-400 bps。三条对齐卡 05 触发的操作规则给出。A 股侧用 588000/159995 ETF 期权 + 两家券商 OTC 近似。下一步交给 algo-trader 评估在压力体制下的执行可行性。

## Report

# 卡片 06 — 10% 对冲桶的可执行结构设计：波动率管理与期权策略

- 白板：f8e14e4f-0ee7-43cb-9837-f96000e555e5 ｜ 卡 6/8 ｜ 立场：support
- 作者：derivatives-strategist ｜ 工作日：2026-05-13（亚洲/新加坡）
- 主题：如何针对 AI 基础设施相关的挤出型波动，设计具体的期权协议或波动率策略来落地 10% 的对冲桶。
- 工作区说明：运行时上游 card-01、card-03、card-05 的 report/meta 文件 未 在磁盘上找到；本卡基于上下文 Session Brief 重建依赖叙述，并仅写入本卡的三份交付物。

## 1. 框架

卡 05 已经把模型组合固定为五个具名桶：

| 桶 | 权重 | 角色 |
|---|---|---|
| AI 半导体（NVDA、AVGO、AMD、TSM、ASML） | 40% | 现金流核心 |
| Hyperscalers（MSFT、GOOGL、META、AMZN） | 30% | 变现 beta |
| 空间制造（RKLB、MDA、RDW） | 15% | 已验证订单 beta |
| 量子硬件（IONQ、QBTS、RGTI） | 5% | 凸性可选性 |
| 现金 + 期权对冲 | 10% | 挤出型波动管理者 |

卡 04 记录了脆弱性：2026 年 hyperscaler Capex（Microsoft 约 $190B 年化、Meta 指引 $125-145B、Alphabet/Amazon 数百亿美元 PPE 增长）正在吸收风险预算和流动性。主要尾部不是"AI 跌 5%"，而是 **情绪体制切换：AI 半导体和量子与 hyperscalers 脱相关、共同 de-rate 同时偏度陡峭化**。对称地，右尾是 Capex 再加速。

因此对冲桶必须：(a) 在 70% 漂移行情中不流血到不可承受；(b) 左尾凸性；(c) 保留量子的右尾凸性；(d) 可在卡 05 的三条触发规则下操作，而不强迫现货腿调仓。

## 2. 10% 桶的资本分配

以 $100M 模型账面计，$10M 分配如下。

| 子桶 | 资金 / 权利金 | 工具 | 用途 |
|---|---|---|---|
| 6M 美债 carry | $3.0M | 6M 美债（2026-05-13 假设收益率 ~4.30%） | 触发再平衡和保证金的干火药 |
| AI 核心 collar | $1.5M 净权利金支出 | SOXX + 自定义 hyperscaler 篮子 put-spread collar | 给 70% AI 桶设地板 |
| 指数尾部 | $1.2M 权利金 | VXN / SPX 看涨价差 | 体制切换的左尾凸性 |
| 量子 delta 替换 | $1.5M 权利金 | IONQ / QBTS / RGTI 长 dated 25-delta 看涨期权，替换部分股票 delta | 锁定量子下行，保留右尾 |
| 分散度 overlay | $1.0M vega | 多 AI 核心单股波动率，空 SPX 波动率 | 在 AI 分散度 > 指数波动率时盈利 |
| 跨资产保险 | $0.8M 权利金 | DXY 25-delta 看涨 + CDX HY payer 价差 | 美元上行 / 信用走阔体制下盈利 |
| 保证金 / 缓冲 | $1.0M | 现金 | 留作空波动率腿和偏度调整 |

设计目标：安静漂移季度 **净桶失血 ~30–45 bps NAV**（权利金减美债 carry 减 collar/分散度 theta 收割）；左尾季度（AI 半导体 −20%、VXN +15 点）**期望支付 +250 至 +450 bps NAV**。

## 3. 结构细节

### 3.1 AI 核心 collar（桶 1 — 主防御）

- **标的：** SOXX 60% / 自定义 hyperscaler 篮子 40%（MSFT、GOOGL、META、AMZN 等权），通过 SOXX、MSFT、GOOGL、META、AMZN 的挂牌期权复制。覆盖名义 ~$30M，即 70% AI 桶的 ~43%。
- **结构：** Put-spread collar。
  - 多 92% strike 3M 看跌。
  - 空 80% strike 3M 看跌。
  - 空 105% strike 3M 看涨（现货覆盖）。
- **为何用 put-spread 而非 outright put：** SOXX outright 92% 看跌权利金运行在 ~2.6%（示意，当前期限结构平坦）；空 80% 腿回收 ~80 bps，残余 −8% 至 −20% 区间是最高确信防御区。我们接受 >−20% 的 gap 不被该桶覆盖 — 由指数尾部桶（桶 2）覆盖。
- **滚动节奏：** 季度滚。当 SOXX 跌穿 92% strike 且距到期 >40 天时，monetize put-spread，按新现货重置至 92%/80%（"垂直重置"）。不日内追 delta。
- **为何看涨腿设在 105%（紧）：** 卡 05 触发 3（AI Capex 顶部）告诉我们不应追 AI 半导体最后 5% 的上行 — 应用其融资左尾。紧 call strike 最大化 collar 融资。
- **偏度纪律：** 仅在 SPX/SOXX 90/110 25-delta 偏度低于 12M 第 75 百分位时开仓。若偏度已贵，推迟 put-spread 腿，改用 1×2 put 比率（多 1× 95%、空 2× 85% — 必须现货覆盖，capped delta）。

### 3.2 指数尾部（桶 2 — 体制切换凸性）

- **工具：** VXN 看涨价差（纳斯达克 100 波动率），因组合 beta 集中在纳 100 成分。
  - 多 VXN 22 calls / 空 VXN 32 calls，3 个月期限。
  - 滚动日历：3M / 1M（40% / 60% 权利金预算）。
- **规模：** $1.2M 权利金预算 = 每 $1M NAV 约 0.5–0.6 vega。VXN 从 18 → 30 时，赔付 ~5–7× 权利金 = $6–8.5M，即毛 NAV +600–850 bps。
- **变现规则：** VXN 上行突破 28 时滚出 / 获利了结，或 VXN 远期 1M–3M 曲线压平至 <0.5 点时。不持 VIX/VXN 看涨进入均值回归。
- **为何不用 SPX 看跌：** SPX 看跌在漂移市场稳定流失 theta，且只受益于价格而非体制。卡 04 的挤出尾部是 vol 体制而非价格 gap；VXN 看涨价差是匹配更好的工具。

### 3.3 量子 delta 替换（桶 3 — 保凸性、削线性损失）

量子桶为 5% NAV 在 IONQ / QBTS / RGTI。这些名字隐含波动率 90–120%，9M 期限结构降至 70%。在 −50% 左尾情景下持有线性 delta = $2.5M 损失。但二元右尾（如 IONQ 一个美国国家实验室采购升级头条）正是我们应该拥有的可选性。

- **动作：** 将 40% 的量子线性 delta 替换为长期 6–9M 25-delta 看涨。
  - 卖出 ~$2.0M 名义 IONQ / QBTS / RGTI（按比例）。
  - 部署 $1.5M 进入 9M 25-delta 看涨（权利金 ≈ 股价 30–40%，给定 IV 体制）。
  - 回收 ~$0.5M 至现金桶。
- **净效应：**
  - 量子桶最大损失从 −5% NAV（灾难，股票 −100%）降至约 −2.5% NAV（$1.5M call 权利金 + 残余 60% 股票 delta 在腰斩）。
  - 右尾 call 支付方向不变；>50% 上涨参与率下降 ~30–35%（看涨 delta 调整斜率低于裸股），我们接受。
- **纪律：** 量子桶绝不卖出上行。IONQ / QBTS / RGTI 不做 covered call — 右尾是持有它们的全部理由。

### 3.4 分散度 overlay（桶 4 — 利用挤出）

卡 04 机制是分散度：AI 半导体挤出一切，然后特异性 de-rate，同时 hyperscalers 维持。自然支付是 **多单股波动率、空指数波动率**。

- **结构：** 用挂牌期权近似 3M variance-style 交易。
  - 多 1M 跨式于 NVDA、AVGO、AMD（等 vega，月度滚动）。
  - 空 1M SPX 跨式，按总 vega 匹配。
- **规模：** $1.0M vega 总量，平衡；起始 gamma 中性；每日 delta 对冲，单腿净 ±0.05 内。
- **carry：** 分散度在平静体制下纳斯达克名字历史上略负 carry（本规模下季度 -15 至 -25 bps），作为对冲成本接受。
- **加仓触发：** SPX 1M 隐含波动率 < 12 且单股 AI 1M 隐含波动率 > 35 时加倍。指数波动率 > 18 时减半。

### 3.5 跨资产保险（桶 5 — 次级尾部）

- **DXY 25-delta 看涨，6M：** $0.4M 权利金。在"Capex 顶部 → 风险关 → 美元买入"情景下支付，这正是卡 05 触发 3。
- **CDX HY 6M payer 价差（多 350bps payer，空 500bps payer）：** $0.4M 权利金。在 AI 相关私募信用和 hyperscaler 债务发行开始走阔时支付；这是挤出的信用通道传导，前 100 bps 走阔与股票 collars 不相关。
- **为何两者并行：** 它们覆盖卡 04 体制切换的两个非股票传导通道，而不重复股票波动率。

## 4. 操作手册

### 4.1 每日

- 所有桶按中价标记；计算组合净 delta、vega、gamma、偏度暴露。
- 桶 4（分散度）仅在净 delta 超过 ±$1.5M 时日内重新对冲。
- 监控 SPX/SOXX 25-delta 偏度百分位、VXN 现货、VXN 1M–3M 曲线。

### 4.2 每周

- 若 SOXX 从 strike 锚 漂移 >5%，重置桶 1 put-spread strike。
- 比较 NVDA / AVGO / AMD 篮子 1M 实现 vs 隐含；据此轮动分散度桶权重。

### 4.3 触发对齐（同步卡 05 规则）

| 卡 05 触发 | 对冲桶动作 |
|---|---|
| 触发 1：量子被动 de-rate（IONQ / QBTS / RGTI 1M 内下跌 >30%，无订单新闻） | 桶 3 看涨下移至 ATM；不再削减 delta。用 $1M 美债 carry 加凸性。 |
| 触发 2：空间订单再加速（RKLB / MDA / RDW backlog QoQ +>20%） | 桶 1 collar 保持；用 $0.5M 美债 carry 配置空间桶 6M 看涨。不为空间桶加 collar — backlog 加速是非对称上行。 |
| 触发 3：AI Capex 周期顶部（任一：hyperscaler Capex 指引下调、ASML book-to-bill <1.0 持续 2Q、NVDA 数据中心营收 QoQ 持平） | 桶 1 看涨 strike 从 105% 收紧至 102%；桶 2 VXN 价差加倍；DXY 看涨和 CDX HY payer 满仓激活。按卡 05 规则开始系统性减仓 AI 半导体现货。 |

## 5. 成本与赔付包络

| 情景（3M 视野） | 桶 P&L 近似 | 备注 |
|---|---|---|
| 漂移上行：AI 桶 +6%、VXN 持平 | −35 至 −50 bps NAV | Collar 在 105% 以上 capped；分散度 theta；美债抵消 ~40% 失血。 |
| 漂移持平：±2% | −15 至 −25 bps NAV | 空波动率腿最佳；失血最小。 |
| 挤出尾部：AI 半导体 −15%、VXN +8 点 | +160 至 +240 bps NAV | Collar 赔付、VXN 价差赔付、分散度赔付。 |
| 体制切换：AI 半导体 −25%、VXN +15 点、USD +4% | +320 至 +460 bps NAV | 五桶全部点火；量子桶损失封顶在权利金。 |
| 右尾上涨：AI +12%、量子 +60% | −60 至 −80 bps NAV | Collar 上限掉部分上行；量子 call 桶部分参与。可接受。 |

净期望拖累：70% 季度约 30–45 bps NAV。净期望赔付：15% 左尾季度约 200–400 bps NAV。该桶被工程化为 **carry 温和负、尾部强正**，这是对冲唯一诚实的定义。

## 6. A 股映射说明

对于 70% 加权的 A 股镜像账面（SMIC / 北方华创 / 中国卫星 / 国盾量子，按卡 05），挂牌期权稀薄。研究所应近似为：
- 用 588000（SSE STAR 50）或 159995（芯片 ETF）ETF 期权代替桶 1 和桶 4。
- 与两家境内券商定制 OTC 结构化产品代替桶 2 和桶 3 — 接受基差风险和交易对手成本（额外 ~20–30 bps 拖累）。
- 不要 尝试国盾量子单股期权 — 流动性差、价差大，若需要通过离岸代理在美元侧结算。

## 7. 本卡未覆盖

- 该桶假设现货账面按卡 05 持有。任何偏离会使 strike 锚失效。
- OTC 腿（CDX HY、DXY 结构化）的交易对手风险在此未做压力测试 — 那是 chief-risk 的任务。
- 量子名字的融券可得性（桶 3 通过卖股票而非融券实现，因此 moot）— 已 flagged 但不重要。

## 8. 交接

卡 04 把挤出型波动文档化为核心脆弱性。卡 05 建立 10% 桶来吸收它。本卡把该桶转换为五个具体、可操作的期权子桶，含规模、strike、期限、滚动规则和触发对齐动作。下一个未解问题是这些结构的 **执行路径** — 挂牌 vs OTC、美股 vs A 股市场、我们所选 strike 的流动性 — 在研究所交易台的规模下是否可行，以及日内执行能否在压力体制下接近中价成交而不必支付全部买卖价差锥。这是微观结构 / 执行成本问题，属于 `algo-trader`。

## Follow-up

- Analyst: algo-trader
- Topic: AI 基础设施期权对冲桶在压力体制下的挂牌 vs OTC 执行成本与流动性可行性
- Question: 本卡指定的 SOXX/MSFT/GOOGL/META/AMZN put-spread collar、VXN 看涨价差、IONQ/QBTS/RGTI 长 dated 看涨、NVDA/AVGO/AMD 分散度，能否在 $30M+ 名义和压力体制下贴近中价执行？A 股 ETF 期权和 OTC 替代腿的现实成本和滑点是多少？
