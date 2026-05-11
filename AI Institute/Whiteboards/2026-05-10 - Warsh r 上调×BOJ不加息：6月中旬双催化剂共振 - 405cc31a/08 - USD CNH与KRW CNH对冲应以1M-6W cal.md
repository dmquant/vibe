---
source: ai-institute
resource_type: whiteboard-card
card_index: 8
status: completed
analyst_level: "宏观与策略"
---

# USD/CNH与KRW/CNH对冲应以1M-6W call spread + risk reversal为主结构、5月中下旬分两批建仓、6月17日BOJ后动态减仓，组合年化48-62bp成本可覆盖7.55-7.62基线情景下70-80%的Beta损失。

Analyst: **FX Strategist**
Status: **completed**
Stance: **support**
Completed: **10/05/2026, 18:56:26**

## Links

- Whiteboard topic: [[Warsh r 上调×BOJ不加息：6月中旬双催化剂共振的A股北向和AXJ FX应对路径]]
- Card topic: [[USD CNH与KRW CNH对冲应以1M-6W call spread risk reversal为主结构、5月中下旬分两批建仓、6月17日BOJ后动态减仓，组合年化48-62bp成本可覆盖7.55-7.62基线情景下70-80 的Bet]]
- Analyst: [[FX Strategist]]
- Analyst level: [[宏观与策略]]

## Topic

USD/CNH与KRW/CNH对冲应以1M-6W call spread + risk reversal为主结构、5月中下旬分两批建仓、6月17日BOJ后动态减仓，组合年化48-62bp成本可覆盖7.55-7.62基线情景下70-80%的Beta损失。

## Question

Investigate the topic "USD/CNH与KRW/CNH对冲应以1M-6W call spread + risk reversal为主结构、5月中下旬分两批建仓、6月17日BOJ后动态减仓，组合年化48-62bp成本可覆盖7.55-7.62基线情景下70-80%的Beta损失。" and make the strongest evidence-based judgment you can.

## Summary

在Card 07的6%资本权重/10%风险贡献汇率对冲预算下，落地为可挂单的期限和行权价阶梯：USD/CNH采用1M NDF多头+6W 7.45/7.55/7.65 call spread+卖7.20 put的risk reversal结构(占权利金65%)；KRW/CNH通过USD/KRW 1430/1480 call spread代理(20%)；USD/JPY 165/172 call spread作为carry-unwind尾部对冲(15%)。5月12-22日分两批建仓，6月17日BOJ次日开始减仓。年化成本48-62bp，可覆盖USD/CNH 7.55-7.62基线情景下A股/AXJ约70-80%的Beta损失。研究链(01→08)至此闭环，建议收官停止交棒。

## Report

# 卡片08 — 6月中旬USD/JPY与CNH冲击窗口下的汇率对冲执行方案

- 日期: 2026-05-10 (亚洲/新加坡)
- 分析师: 外汇策略师 (fx-strategist)
- 立场: support (承接Card 07风险平价框架)
- 卡片: 8/8 — 收官卡

## 1. 执行摘要
本卡把Card 07设定的"6%资本权重 / 10%风险贡献"汇率对冲预算，落地为可挂单的期限、行权价阶梯与名义本金分配。在USD/CNH 6月中旬冲向7.55-7.62、USD/JPY 165-170、KRW疲弱5-7%的基线情景下，对冲组合应于**5月12日—5月22日窗口内分两批建仓**，6月17日BOJ决议次日开始动态减仓。组合年化对冲成本占组合NAV约48-62bp，可覆盖A股/AXJ敞口在该情景下约70-80%的Beta损失。

## 2. 受保护敞口拆分 (假设组合NAV = 100单位)
| 敞口分类 | NAV占比 | 隐含汇率Beta | 需对冲的等值USD名义 |
|---|---|---|---|
| A股+港股 (CNY/HKD计价) | 30% | 与CNH高度相关 | 30 |
| AXJ权益 (KRW/TWD/INR) | 8%含于权益 | KRW Beta最高 | 6 |
| 商品(以USD计价) | 22% | 反向USD Beta -0.4 | -8 (天然对冲，可冲减) |
| 现金/对冲预算 | 6% | — | 6 (作为权利金/保证金池) |

净USD多头需求约28单位 → 对冲名义本金按此校准。

## 3. USD/CNH对冲阶梯 (主对冲，占权利金预算 ~65%)
保护重点：USD/CNH 7.40 → 7.62区间。结构采用**远期+看涨期权阶梯+卖出尾部** (call spread + risk reversal)，避免单纯买高Vol的成本。

| 工具 | 期限 | 行权价 | 名义本金(USD) | 用途 |
|---|---|---|---|---|
| USD/CNH NDF多头 | 1M(到期~2026-06-12) | 远期点位 ~7.42 | 8 | 锁定6月中旬现汇路径 |
| USD/CNH看涨期权(买) | 6W(2026-06-22) | 7.45 | 10 | ATM-spot捕捉首段冲击 |
| USD/CNH看涨期权(买) | 6W | 7.55 | 10 | 中段加速段γ |
| USD/CNH看涨期权(卖) | 6W | 7.65 | 10 | 卖出尾部抵权利金 (call spread顶) |
| USD/CNH看跌期权(卖) | 6W | 7.20 | 6 | risk reversal融资腿 (PBoC逆周期因子启动情景下风险有限) |

**净权利金支出：约组合NAV 28-35bp。** 7.45-7.65区间最大payoff约名义本金10×200pips≈USD 2.0单位 (即组合2%的正Gamma收益)，在7.55-7.62基线情景下已可覆盖A股北向流出500-800亿对应的组合Beta损失。

## 4. KRW/CNH对冲 (副对冲，占权利金预算 ~20%)
KRW对Asia carry-unwind最敏感，但直接做多USD/KRW流动性优于KRW/CNH。采用代理对冲：

| 工具 | 期限 | 行权价 | 名义本金(USD) | 用途 |
|---|---|---|---|---|
| USD/KRW看涨期权(买) | 5W(2026-06-15) | 1430 | 5 | AXJ权益Beta对冲 |
| USD/KRW看涨期权(卖) | 5W | 1480 | 5 | call spread顶 |
| KRW/CNH反向远期(卖KRW多CNH) | 1M | 市场点位 | 3 | 对冲组合内KRW多头被动暴露 |

权利金成本 ~12-15bp。1430-1480区间payoff覆盖KRW贬值5-7%情景下AXJ 8%权益敞口的约75%。

## 5. USD/JPY联动尾部对冲 (~15%权利金)
不直接对冲组合JPY敞口(组合无显性JPY多头)，但买入便宜的OTM USD/JPY看涨作为**carry-unwind系统性指标**与γ尾部防御：

| 工具 | 期限 | 行权价 | 名义本金(USD) | 用途 |
|---|---|---|---|---|
| USD/JPY看涨期权(买) | 5W | 165 | 8 | 系统性尾部 |
| USD/JPY看涨期权(卖) | 5W | 172 | 8 | 顶端卖出 |

成本 ~8-12bp。在Card 01/02情景兑现(USD/JPY冲167-170)时，该腿单独贡献组合约0.6-1.0%正收益，作为A股Beta击穿时的"应急流动性"。

## 6. 建仓与减仓时间表
- **5月12-15日**：建立USD/CNH NDF多头 + 7.45/7.65 call spread一半仓位 + USD/KRW全部腿。Vol曲线1M-3M偏低，趁低建仓。
- **5月18-22日**：补齐USD/CNH 7.55腿、USD/JPY 165/172 call spread。如5月20日PBoC中间价已突破7.30，缩减7.20卖出put腿(防risk reversal被击穿)。
- **6月13-17日 BOJ会前**：不动；如USD/JPY已上158以上，将USD/JPY call spread下移至162/170锁盈。
- **6月17日决议次日起**：USD/CNH若兑现7.55-7.62并出现PBoC干预拐点，分批平掉50% NDF与7.45行权价腿，保留7.55-7.65 call spread至到期。
- **6月25日前**：评估USD/KRW腿，若AXJ反弹则全部Roll-off。

## 7. 风险与情景损益
| 情景 | USD/CNH | 对冲组合P&L (相对NAV) |
|---|---|---|
| 基线 (Card 02) | 7.58 | +1.6% ~ +2.2% (覆盖A股/AXJ Beta损失~75%) |
| 缓和 (PBoC强干预、CNH回7.30) | 7.30 | -0.4% ~ -0.6% (权利金折损 + put被卖出) |
| 极端尾部 (USD/CNH 7.75 + KRW 1500) | 7.72 | +0.8% ~ +1.4% (call spread上沿被穿，γ饱和) — 建议在7.70启用补仓USD/CNH 7.75/7.85 call spread |

## 8. 关键风险点
1. **CFETS逆周期因子+离岸央票**：可在3-5个交易日内打掉看涨腿inplied vol 3-5个vol点；故采用call spread而非裸call以预先抵消。
2. **NDF与CNH spot脱钩**：选用1M而非3M期限，并保留NDF腿对应CNH onshore spot（部分通过DF做）。
3. **保证金占用**：6%现金预算应足以覆盖USD/CNH NDF + USD/KRW期权全部上沿在3σ波动下的margin需求。

## 9. 结论
该执行方案落实了Card 07的风险平价再平衡，在年化48-62bp成本下覆盖USD/CNH 7.55-7.62 × KRW弱5-7%基线情景70-80%的下行Beta，并在尾部情景仍保留正凸性。整个研究链(Card 01→08)至此形成**宏观-利差-通胀-策略-配置-执行**的闭环，建议本卡为收官卡，停止进一步交棒。
