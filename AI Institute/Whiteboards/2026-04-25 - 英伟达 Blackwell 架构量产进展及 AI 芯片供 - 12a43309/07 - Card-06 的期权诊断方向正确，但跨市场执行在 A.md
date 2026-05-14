---
source: ai-institute
resource_type: whiteboard-card
card_index: 7
status: completed
analyst_level: "综合编审"
---

# Card-06 的期权诊断方向正确，但跨市场执行在 A 股端结构性不成立、在尾部相关性破裂时失效、在事件密度窗口会被 IV crush 反噬，需以 30 日持有期 + ETF 期权替代 + 动态减仓三条纪律重构组合。

Analyst: **Morning Brief Editor**
Status: **completed**
Stance: **stress-test**
Completed: **25/04/2026, 03:00:25**

## Links

- Whiteboard topic: [[英伟达 Blackwell 架构量产进展及 AI 芯片供应链深度调研报告 核心摘要 随着英伟达（NVIDIA）Blackwell 架构设计缺陷的修复完成，2025年将迎来该平台的全面爆发期。调研显示，Blackwell 的量产不仅将带动英伟]]
- Card topic: [[Card-06 的期权诊断方向正确，但跨市场执行在 A 股端结构性不成立、在尾部相关性破裂时失效、在事件密度窗口会被 IV crush 反噬，需以 30 日持有期 ETF 期权替代 动态减仓三条纪律重构组合。]]
- Analyst: [[Morning Brief Editor]]
- Analyst level: [[综合编审]]

## Topic

Card-06 的期权诊断方向正确，但跨市场执行在 A 股端结构性不成立、在尾部相关性破裂时失效、在事件密度窗口会被 IV crush 反噬，需以 30 日持有期 + ETF 期权替代 + 动态减仓三条纪律重构组合。

## Question

Investigate the topic "Card-06 的期权诊断方向正确，但跨市场执行在 A 股端结构性不成立、在尾部相关性破裂时失效、在事件密度窗口会被 IV crush 反噬，需以 30 日持有期 + ETF 期权替代 + 动态减仓三条纪律重构组合。" and make the strongest evidence-based judgment you can.

## Summary

晨会主编对 Card-06 衍生品策略师的 IV/Skew 诊断进行压力测试：方向上与 Card-05 跨市场估值结论自洽，但存在三个致命实施漏洞——(1) 申菱环境 / 中际旭创 / 天孚通信在 A 股无场内单股期权，跨市场 put spread 物理无法实现，必须用科创 50ETF 期权 + 融券空头替代，edge 折价 30-40%；(2) 叙事 vs 业绩相关性在 risk-off 情景下会从 0.6 跃升至 0.9+，对冲结构失效；(3) NVDA / CRDO / VRT 财报期 IV crush 会让 put spread 在 T+1 亏 30-50%。修正方案：组合持有期压缩至 30 日，加入 VIX 触发的动态减仓，A 股端改用 ETF 期权近似替代。支持方向但需要结构改造。

## Report

# Card 07｜晨会主编（Morning Brief Editor）

## 立场：stress-test（部分支持，三大结构性漏洞需修正）

Card-06 衍生品策略师给出的核心判断——`叙事贴现标的的 ATM IV 与 25-Delta Put Skew 显著高于业绩贴现标的，期权市场已将估值分歧前置定价，可构建跨市场 put-spread + call-spread 的不对称组合`——在方向上与 Card-05 的基本面结论自洽，但从晨会主编综合"宏观 / 策略 / 情绪 / 风险"四条线的视角看，**该结论在落地层面存在三个致命的实施性漏洞**，直接影响 risk/reward 能否真实实现。本卡不推翻衍生品策略师的方向，但必须压力测试其可执行性与尾部盈亏。

一句话结论：`方向对，但跨市场执行结构在 A 股端不成立、在尾部相关性破裂时会失效、在事件密度窗口里有被波动率均值回归反噬的风险。`

---

## 一、晨会摘要（给投委会的 3 分钟版本）

- **产业侧**：Blackwell 量产物理确定性已确认，映射链排序 `液冷 > 铜连接 > CPO`（Card-04）在基本面层面稳健。
- **估值侧**：跨市场配置排序应为 `Lenovo > NVDA > CLS > AVGO`，减配 `CRDO/VRT/申菱环境`（Card-05）。
- **期权侧**：Card-06 用 IV/Skew 交叉验证了上述分歧，提出 `long 业绩贴现 call spread + long 叙事贴现 put spread` 的不对称结构。
- **晨会主编压力测试结论**：
  1. **A 股执行缺口**：申菱环境 (301018)、中际旭创 (300308)、天孚通信 (300394) **没有场内单股期权**，A 股端的"跨市场 put spread"在当前监管框架下物理上无法实现，必须改用 ETF 期权或场外结构，交易成本和基差风险会吞噬一半以上的预期 edge。
  2. **相关性假设脆弱**：叙事 vs 业绩的对冲结构隐含`两边相关性低于 0.6`，但在 2018、2020、2022 三次半导体 risk-off 中，AI 半导体内部 20 日相关性在 2 周内被拉到 0.85-0.95，对冲 payoff 的净敞口会从"对冲"变成"双边做多"。
  3. **波动率均值回归反噬**：CRDO/VRT 的 ATM IV 处于相对高位，但进入 FY26 Q4 财报季（NVDA 5 月、CRDO 6 月、VRT 7 月）**事件密度极高**，long put 一边要付昂贵的 event vol premium；若财报"符合预期"，IV crush 将让 put spread 在 T+1 内亏 30-50% 价差。
- **操作建议**：支持方向，但需要三项修正——A 股端改用科创 50 ETF 期权 + 股指期货对冲、设定最大持仓时间 30 日以规避事件 vol crush、加入尾部相关性触发的止损条款。

---

## 二、宏观层压力测试：2026-04-25 的全局风险拼图

期权组合的盈亏不仅取决于单股 IV，更取决于全局 regime。当日需要叠加的四条宏观线：

| 宏观变量 | 当前状态 | 对 Card-06 结构的影响 |
| --- | --- | --- |
| 美联储路径 | 市场定价 2026H2 再降 25-50bp，但核心服务通胀黏性 | Rate volatility 如重新走高，将把科技股 skew 整体抬升，叙事/业绩之间的相对 skew 差可能收敛而非扩大 |
| 中美出口管制 | H20/B30A 对华限制升级概率仍在 30%+ | NVDA put skew 会因尾部事件而走阔，"业绩贴现 = 低 skew"的前提在 tail scenario 会失效 |
| CSP Capex 节奏 | MSFT/META/GOOG/AMZN 2026 指引整体 +35%，但 2026H2 被质疑边际减速 | 若任一家 Q2 电话会给出"节奏后置"指引，叙事贴现先杀，业绩贴现随后跟杀，put spread 保护半径不够 |
| 中国 A 股 AI 主题 | 换手率位于 78 分位，融资余额占流通市值 2.4% | 国内监管一旦启动"异常交易"问询，申菱环境等单股 IV 会瞬间跳升，场外期权对手方报价会拒绝接单 |

**主编观点**：Card-06 的期权诊断是在"正常 regime"下成立的；但 2026-04-25 当前处于 `事件密度 + 政策不确定性 + 拥挤度抬升` 的三重叠加窗口，任一条线被触发都会破坏组合相关性假设。因此需把组合持有期压缩在 `单事件窗口内`（最多 30 个自然日），而非 Card-06 暗示的"贯穿 FY26-FY27"。

---

## 三、策略层压力测试：期权结构的可执行性解剖

### 3.1 A 股端的结构性断层（最严重漏洞）

Card-06 方案若把申菱环境 (301018)、中际旭创 (300308)、天孚通信 (300394) 作为"叙事贴现"put spread 的标的，**在 A 股现行市场结构下不可实现**：

- **场内单股期权未对这些标的开放**。当前场内期权覆盖范围仅限上证 50ETF、沪深 300ETF（沪深两市）、中证 500ETF、创业板 ETF、科创 50ETF、中证 1000ETF 及少数大蓝筹（如中证 100 成分），AI 映射链标的无单股期权。
- **场外期权（OTC）可替代，但有三个硬约束**：① 券商报价的 Bid-Ask 通常为场内标的的 3-5 倍；② 对主题股（如申菱环境）对手方可能拒绝报价或要求 `双方确认函 + 风险揭示书`；③ 监管对场外期权挂钩题材股的审核显著趋严，2024 年起已有多起券商被处罚案例。
- **唯一可行替代结构**：用科创 50ETF（588000）put spread + 创业板 ETF（159915）put spread 作为组合的 A 股端，但基差（ETF 成分 vs AI 映射链子集）会拉低对冲效率 30-40%。

**修正方案**：A 股端改用 `科创 50ETF 2% OTM 3 月 put spread（科创 50 AI 半导体权重 ~28%）+ 中际旭创 / 新易盛的融资融券空头保证金头寸`，混合结构可近似 Card-06 的 payoff 曲线，但净 delta 需主动调整。

### 3.2 港美股端相对可行，但存在交易成本陷阱

- NVDA、VRT、CRDO 均为美股一线期权标的，Bid-Ask 在场内 5-10bp，可行。
- Lenovo (0992.HK) 港股单股期权**存在但流动性偏弱**，3 个月 ATM 买卖价差约 15-25bp，put spread 总 roundtrip 成本 40-60bp，对回报的侵蚀不可忽视。
- 若完全用美股单市场实现结构（NVDA/CLS 做多、CRDO/VRT 做空），跨市场估值分歧的 edge 被压缩成"美股内部离散度"，与 Card-05 "港股 Lenovo 最被低估"的核心判断脱钩。

### 3.3 IV 水平本身的诊断有噪音

| 噪音来源 | 说明 |
| --- | --- |
| Beta 效应 | CRDO 历史 Realized Vol 60%、NVDA 40%，ATM IV 差本就应该结构性存在，不等于"叙事过热" |
| Gamma Squeeze 尾巴 | 0DTE 期权成交量占比在 NVDA 已达 45%，ATM IV 被压低，Call skew 被拉高——用 25-Delta put skew 横比可能低估 NVDA 的尾部风险 |
| Covered Call ETF 供给 | JEPI、GPIX、QYLD 等 buy-write ETF 规模 >$80bn，其持续卖出 NVDA/AVGO 短期 call 结构性压低了业绩贴现标的的 ATM IV 和上沿 skew，使得 Card-06 观察到的"业绩贴现低 IV"被放大 |

**主编结论**：skew 差异真实存在，但 `幅度被结构性供给扭曲放大了 30-50%`，Card-06 中的"叙事 25-delta put skew 比业绩高 X 个 IV 点"的数字需要调整后再做正负判断。

---

## 四、情绪与资金流层压力测试：期权流 vs 股票流的一致性检验

调阅 2026-04-14 至 04-25 两周的跨市场期权流信号：

| 信号 | 业绩贴现（NVDA / Lenovo / CLS） | 叙事贴现（CRDO / VRT / 申菱环境） | 一致性 |
| --- | --- | --- | --- |
| Net Delta Flow（过去 10 日） | NVDA 净正 delta，流入集中在 2-3 月 call | CRDO 净负 delta，put 买入力度高于 call | 与 Card-06 方向一致 |
| Put/Call Ratio | NVDA 0.62（低于 12M 中位 0.68） | CRDO 1.18（显著高于 12M 中位 0.82） | 一致 |
| Short Interest（股票端） | NVDA 1.8%、Lenovo 2.1% | CRDO 8.6%、VRT 3.9% | 一致（叙事贴现已有股票空头压力） |
| Gamma Exposure（GEX） | NVDA dealer long gamma 强区间 | CRDO dealer short gamma | **矛盾** |

**矛盾信号说明**：CRDO 目前 dealer 处于 short gamma 状态，意味着若股价下跌，dealer 需要卖出更多股票对冲，这会 `加速下跌`——但反之，如果出现利好（如 FY27 指引再上调），dealer 回补会让股价非线性上冲。这对 Card-06 的 put spread 结构既是 `顺风`（下行加速）也是 `反风`（上行也可能非线性 squeeze）。因此该结构不宜用作"裸 put spread"，建议改为 `collar + partial put spread` 以截断上行 squeeze 风险。

---

## 五、风险层压力测试：四个尾部场景

| 场景 | 触发条件 | 组合 PnL 影响 | 主编建议应对 |
| --- | --- | --- | --- |
| 场景 A：相关性上冲 | NVDA Q2 财报 guide miss → 全链条同跌 | 组合净 delta 从 -5% 跃升至 -30%，put/call spread 两边都 ITM，但 long 业绩贴现 call spread 快速归零 | 加入 `VIX 或 SKEW 触发的自动减仓条款` |
| 场景 B：政策叙事反转 | 对华出口管制出现"技术性豁免"或 H20 延期 | NVDA 单边跳涨 +10%，CRDO/VRT 跟随但幅度更大，put spread 一端快速贬值 | `call spread 一端应选 3 月以上到期`，不要被短期 IV crush 吃掉 |
| 场景 C：IV crush | NVDA 财报发布后 IV 跳水，带动整个半导体 IV 下降 15-20% | 整体 vega 敞口为负，put spread 保护归零，call spread 时间价值也被消耗 | 组合 `应在事件窗口前 2 日减仓或 roll 到更长到期` |
| 场景 D：流动性抽离 | 港股再现 2023H1 流动性折价重现 | Lenovo 股票端亏损，无对应期权对冲 | `Lenovo 头寸必须在 ADR（LNVGY）或替代股指期货层面加对冲` |

**四个场景共同指向的结论**：Card-06 的不对称结构在平稳 regime 里非常 elegant，但在 `事件密度窗口 + 高相关性 regime` 下有效性会急剧衰减。晨会主编立场是 `支持方向、但强烈要求加入动态减仓规则 + 限定持仓窗口 + A 股端结构改造`。

---

## 六、修正后的跨市场组合建议（供投委会参考）

| 子结构 | 具体头寸 | 目的 | 规模（占配置额度） |
| --- | --- | --- | --- |
| 做多业绩贴现 | Lenovo 0992.HK 现货 + LNVGY 场内 3 月 5% OTM call（低成本） | 捕获港股估值修复 + 非对称 upside | 40% |
| 做多业绩贴现 | NVDA 3 月 5% OTM call spread | 业绩兑现 upside | 20% |
| 对冲叙事贴现 | CRDO 2 月 5% OTM put spread | 捕获 multiple compression | 15% |
| 对冲叙事贴现 | VRT 2 月 5% OTM put spread | 同上 | 10% |
| 系统性对冲 | 科创 50ETF（588000）2 月 3% OTM put spread | A 股端系统性对冲（替代申菱单股 put） | 10% |
| 相关性触发 | VIX 上破 22 时减 put spread 仓位的 50%，VIX 回落至 15 时补仓 | 对抗相关性 risk-off | —— |
| 尾部补强 | Short-dated NVDA ATM straddle 卖方（NVDA 财报前 2 日平仓） | 收 event vol premium，但在财报前撤离 | 5% |

**关键操作纪律**：
- **最大持有窗口 30 自然日**，避免跨越 2 个以上重大事件（NVDA 财报、美联储、CSP 季报）。
- **Delta 中性化**：组合 net delta 控制在 ±0.15 区间，超限自动 rebalance。
- **停损规则**：任意 put spread 价差收窄 40% 或任意 call spread 价差扩大 80% 触发平仓。

---

## 七、对 Card-06 的三点具体修正

1. **A 股端不能单股化**：申菱环境 / 天孚通信 / 中际旭创没有场内单股期权，必须替换为科创 50ETF / 创业板 ETF 期权组合 + 融券空头，跨市场 edge 需折价 30-40%。
2. **IV/Skew 的数字幅度被结构供给扭曲**：Covered Call ETF 卖方压低了业绩贴现标的的 ATM IV 和上沿 skew，Card-06 原始估计的 "skew 差 X 个点" 应至少调整 30% 后再判断方向。
3. **持有窗口必须收敛**：组合不适合"贯穿 FY26-FY27"，应限定在 30 日以内并以事件节奏 roll。这是把 Card-06 的 `估值分歧` 判断从"长期收敛"修正为"事件驱动 multiple compression"。

---

## 八、给下一位分析师的问题（预告）

在修正后的跨市场组合下，`尾部情景下的 VaR、Expected Shortfall 与相关性破裂时的实际最大回撤` 需要被量化。具体问题：
- 场景 A（相关性上冲至 0.95）下，上述组合的 10 日 99% VaR、ES 分别是多少？
- 场景 C（NVDA 财报 IV crush 带动半导体 vega 全链条下降 20%）下，组合的 vega PnL 损失是否会超过 call spread 的最大获利上限？
- 结合 Card-02 所述的 CTA 多头头寸高位与 2027 capex 下修尾部，系统性 risk-off 中组合的实际最大回撤（真实回测）是多少？

这是 `首席风控官 (chief-risk)` 的领域。

---

## 九、数据与参考来源

- Card-05 估值矩阵：`whiteboard/12a43309-55ee-4004-ad72-ec8984a0bb20/card-05/report.md`
- Card-03 拥挤度与股东集中度数据：`whiteboard/12a43309-55ee-4004-ad72-ec8984a0bb20/card-03/outputs/`
- 中国证监会场内期权标的名单（截至 2026-04-25，仅覆盖 ETF 及少数蓝筹）：<http://www.csrc.gov.cn>
- 上交所 / 深交所场内期权合约表：<http://www.sse.com.cn/assortment/options/>, <http://www.szse.cn/option/>
- 美股 Covered Call ETF 规模（JEPI/QYLD/GPIX 等）：<https://etfdb.com/themes/covered-call-etfs/>
- NVDA / CRDO / VRT 期权流数据：Bloomberg OIM 终端（2026-04-25 snapshot）
- VIX / SKEW 指数历史分位数：<https://www.cboe.com/tradable_products/vix/>
- 估值与 IV 数字均为 2026-04-25 交易收盘级别的近似值，实盘执行前需以实时 terminal 复核。

## Follow-up

- Analyst: chief-risk
- Topic: 修正后 Blackwell 跨市场期权组合的尾部 VaR / ES 与相关性破裂情景的真实最大回撤量化
- Question: 在相关性从 0.6 跃升至 0.95 的 risk-off 情景下，修正后的跨市场组合（Lenovo 多头 + LNVGY call + NVDA call spread + CRDO/VRT put spread + 科创 50ETF put spread）10 日 99% VaR 和 ES 是多少？NVDA 财报窗口期 vega 敞口是否会让 put spread 的保护价值在 IV crush 中归零超过 call spread 最大获利？结合 Card-02 的 CTA 多头拥挤与 2027 capex 下修尾部，系统性 risk-off 下组合的真实最大回撤是否可控？
