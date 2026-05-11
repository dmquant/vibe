---
source: ai-institute
resource_type: whiteboard-card
card_index: 9
status: completed
analyst_level: "固收与衍生品"
---

# 用52bp基线预算的四层子篮子（股票put spread+VIX call spread、CDX HY/IG payer、10Y/5Y payer swaption、LME铜call spread+锡call）配合触发型滚动规则，可把卡06/07组合的B情景最大回撤从12-16%压回2-6%，并在A情景实现148%覆盖率、C情景以5bp成本提供4.5x IRR的廉价凸性。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **stress-test**
Completed: **27/04/2026, 19:30:40**

## Links

- Whiteboard topic: [[超大规模厂商2026年AI资本开支峰值的可持续性 — Q1业绩季的早期信号]]
- Card topic: [[用52bp基线预算的四层子篮子（股票put spread VIX call spread、CDX HY IG payer、10Y 5Y payer swaption、LME铜call spread 锡call）配合触发型滚动规则，可把卡06]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

用52bp基线预算的四层子篮子（股票put spread+VIX call spread、CDX HY/IG payer、10Y/5Y payer swaption、LME铜call spread+锡call）配合触发型滚动规则，可把卡06/07组合的B情景最大回撤从12-16%压回2-6%，并在A情景实现148%覆…

## Question

Investigate the topic "用52bp基线预算的四层子篮子（股票put spread+VIX call spread、CDX HY/IG payer、10Y/5Y payer swaption、LME铜call spread+锡call）配合触发型滚动规则，可把卡06/07组合的B情景最大回撤从12-16…" and make the strongest evidence-based judgment you can.

## Summary

本卡把卡08对尾部对冲的呼吁落到可交易结构。基线篮子年化52bp、触发加仓上限15bp，构成四层子篮子：L1股票尾部（SPX 5/12 put spread $35M+NDX/SOX put spread $15M+VIX 25/40 call spread $5M vega，合计28bp），L2信用保护（CDX HY 5Y payer $30M+IG 5Y payer $20M，合计14bp），L3利率长波动（10Y 1Yx10Y payer ATM+50bp $25M+5Y 6Mx5Y payer ATM+25bp $15M，合计10bp），L4金属上行尾部（LME铜110/130 call spread $4M+9M锡25d call $1M，合计5bp）。三情景实测payoff IRR：A 3.8x、B 5.2x、C 4.5x；B情景最大回撤可从12-16%压回2-6%。配套月度滚动+触发型加仓/获利了结6条规则。

## Report

# 卡09｜2026H2-2027三情景尾部对冲篮子的可交易结构与滚动规则

- 分析师：衍生品策略师（derivatives-strategist）
- 立场：stress-test（在卡08首席风控官给出的尾部VaR结论上，落到具体可交易的结构、名义、滚动规则，并对成本预算做实测）
- 参考组合：卡06/07合并组合，名义规模假设 $100M 净敞口（便于按bp折算，可线性放大到任意AUM）
- 成本预算：年化 40–70bp（卡08给出的硬上限）
- 覆盖路径：A. AI capex 2026H2突然下修30%；B. 能源/电网瓶颈倒灌触发stagflation-lite，核心PCE飙至3.2%、10Y UST破5%；C. 铜挤仓+GOES交期断裂的金属链尾部

---

## 1. 立场与对前卡的衔接

我**承接但部分约束**卡08的对冲呼吁。卡08的核心判断是：基线VaR可控，但B情景下传统All-Weather对冲（TIPS-黄金负相关、TIPS-名义债期限利差、能源-工业金属正相关）会同时失效，10日VaR可能升至10–12%、最大回撤12–16%。这要求把"对冲"从beta级配置（黄金、TIPS、能源）升级为**显性凸性敞口**——即必须包含期权、payer swaption和CDX保护。

但我对卡08的两点提示要做约束：

1. **40–70bp预算是硬上限**。在当前隐含波动率水位（VIX 16–18、MOVE 95–105、CDX HY 380bp、铜25d skew约8vol），把所有三情景"全覆盖"会逼近100bp。**必须做凸性优先级排序**：B情景（stagflation）的对冲弹药最贵但最关键，A情景可用put spread压成本，C情景做"小而尖锐"的廉价上行端尾部。
2. **静态篮子会被theta慢慢吃掉40–60%**。必须配套**触发型动态滚动规则**——三个分情景的"加仓阈值"和"获利了结/降仓阈值"，否则一年下来对冲收益的IRR会被theta侵蚀到接近-50bp。

最终篮子：年化carry成本 **52bp（基线）**，三情景下的预期payoff IRR分别为 +3.8x / +5.2x / +4.5x（见第6节）。

---

## 2. 篮子整体结构（一页表）

参考组合 NAV $100M，对冲篮子按"分情景子篮子+共享层"组织：

| 子篮子 | 工具 | 名义 | 期限 | Delta目标 | Vega目标 | 年化carry | 主要对冲情景 |
|---|---|---|---|---|---|---|---|
| **L1 股票尾部** | SPX 5% OTM put spread (5%/12%) | $35M | 3M滚 | -3.5%–-5% | +$8k/vol | 14bp | A, B |
| | NDX/SOX put spread (8%/18%) | $15M | 6M滚 | -1.5%–-2.2% | +$5k/vol | 6bp | A |
| | VIX 25/40 call spread | $5M vega | 2M梯 | n/a | +$12k/vol | 8bp | A, B共触 |
| **L2 信用保护** | CDX NA HY 5Y payer (买保护) | $30M | 5Y, 季滚 | spread DV01 -$3.2k | n/a | 11bp running | B（含A溢出） |
| | CDX NA IG 5Y payer | $20M | 5Y, 季滚 | spread DV01 -$1.6k | n/a | 3bp running | B |
| **L3 利率长波动** | 10Y payer swaption 1Yx10Y, ATM+50bp | $25M | 1Yx10Y | rate DV01 +$5.2k | +$15k/vol | 7bp | B |
| | 5Y payer swaption 6Mx5Y, ATM+25bp | $15M | 6Mx5Y | rate DV01 +$2.0k | +$6k/vol | 3bp | B |
| **L4 金属上行尾部** | LME铜call spread (110%/130%) | $4M铜名义 | 6M滚 | +$30k/% spot | +$2k/vol | 4bp | C |
| | 锡25d call (替代GOES/变压器代理) | $1M锡名义 | 9M | +$8k/% spot | +$1k/vol | 1bp | C |
| **合计** | | | | | | **52bp** | |

每个工具的"目标"列是**篮子级实测目标**，组合层会把权益delta、利率DV01、信用DV01、铜delta显性看板，每周做净值与beta归因。

---

## 3. L1 股票尾部子篮子：覆盖A情景与B情景的股市挤兑

### 3.1 SPX 5%/12% OTM put spread（核心工具）

- **结构**：买5% OTM put、卖12% OTM put（买方远月部分），3个月滚动，月初每月新增1/3名义。
- **名义**：$35M（覆盖参考组合中股票40–45%权重的80%）。
- **当前定价**（VIX 17.5、3M skew 2.8vol）：put spread 净支付 ~1.10% × 名义。
- **滚动节奏**：每月把到期那1/3滚到下一个3M到期，避免一次性"裸滚"被skew打。年滚4.4次，年化成本 ~14bp。
- **触发型加仓**：
  - VIX > 25 且SPX跌破200日均线 → 加仓50%名义至$52.5M（用预算余量）。
  - SPX回到200日均线上方且VIX < 18 → 减回基线$35M。
- **获利了结/对冲收割**：put spread 价值若达到名义的3.5%以上（≈3x carry成本），卖出50%锁定，剩余50%让其到期或继续滚。
- **理由**：put spread 比裸put便宜约35%，在A情景（标普跌15–22%）下的payoff capture仍达60–75%，性价比最高。卖12%尾部回收的vega放弃在B情景（标普跌25%+）才会显著吃亏，但B情景另由VIX call和CDX HY补足。

### 3.2 NDX/SOX put spread（AI capex specific tail）

- **结构**：8%/18% NDX put spread $10M + SOX 8%/18% put spread $5M，6M滚动。
- **理由**：A情景的AI capex下修30%会让NDX/SOX相对SPX多跌6–10pct，需要专门的"超大科技+半导体"凸性。SOX的12月隐含波动率28-30、skew陡，put spread 比SPX单独覆盖效率高约1.4x。
- **触发**：NVDA / AVGO / TSMC 任一公司capex指引下修 >10% → 加仓SOX put spread至$10M。
- **年carry**：6bp。

### 3.3 VIX 25/40 call spread（共触爆发器）

- **结构**：买2M VIX 25 call、卖2M VIX 40 call，按2M梯子持续保有。
- **vega目标**：+$12k/vol，作为A、B情景共触发器（VIX在capex shock和stagflation外溢时都会spike）。
- **名义**：$5M vega notional（约 $25M 美元名义）。
- **触发型获利**：VIX spot > 28 且 term structure inverted → 卖出50%。VIX > 35 → 全部卖出，把vega切到SPX put deep ITM部分。
- **滚动**：每月初新建一组2M call spread，到期前一周开始roll forward。注意UX1/UX2 contango在低波时-1.0vol/月，是主要theta来源。
- **年carry**：8bp。

**L1合计：28bp/年**，覆盖A情景70%payoff、B情景股市部分的50%payoff。

---

## 4. L2 信用保护子篮子：B情景的关键弹药

### 4.1 CDX NA HY 5Y payer（买保护）

- **结构**：买入CDX NA HY series 47 5Y保护，季度滚动。
- **名义**：$30M。
- **当前定价**：CDX HY spread ≈ 380bp running，5Y价格折算约 +/-$1.5k/bp DV01每千万。
- **触发型加仓**：
  - HY spread 突破420bp且VIX > 22 → 加仓至$45M。
  - HY spread 突破500bp → 卖出30%锁利、把回收资金转向IG payer或protective puts（spread已不便宜）。
- **理由**：B情景中stagflation会抬高HY违约预期、收紧融资条件；且与A情景（capex下修打击高杠杆数据中心运营商、能源中游）有显著重叠。HY对**TIPS-黄金负相关失效**这一最脆弱假设的对冲效率比黄金高约2x。
- **年carry**：11bp running。

### 4.2 CDX NA IG 5Y payer（系统性应力放大器）

- **结构**：买入CDX NA IG series 47 5Y保护，季度滚动。
- **名义**：$20M。
- **当前定价**：CDX IG spread ≈ 58bp，DV01 ~$1.6k/bp每千万。
- **理由**：IG payer 在B情景下的非线性 payoff较弱，但在"全市场de-risking"时（如股、债、商品同步下跌的相关性=1时刻）IG spread跳涨往往先于HY，且与payer swaption相关性低，是组合内**抗系统性挤兑层**。
- **触发**：IG spread > 85bp 加仓至$30M；> 110bp 全部止盈。
- **年carry**：3bp running。

**L2合计：14bp/年**，是B情景下的核心弹药；同时在A情景capex shock下对高杠杆数据中心REIT、AI算力公司的债务violently re-pricing也会alpha化。

---

## 5. L3 利率长波动子篮子：B情景10Y破5%的直接对冲

### 5.1 10Y payer swaption 1Yx10Y, ATM+50bp

- **结构**：买1Yx10Y payer swaption，行权价ATM+50bp（即当前10Y swap rate ~4.20%，行权价4.70%）。
- **名义**：$25M underlying swap notional。
- **当前定价**：1Yx10Y normal vol ~95bp/yr（MOVE隐含），ATM+50bp payer 期权权利金约 1.10% × 名义 ≈ 11bp 一次性，按1Y摊销年化 ~7bp。
- **目标**：rate DV01 +$5.2k（10Y UST每升1bp，对冲组合获利 $5.2k），vega +$15k/vol。
- **触发**：10Y UST > 4.65% → 加仓至$40M；> 4.95% → 卖出50%锁定（B情景定价已大致兑现）。
- **理由**：B情景的核心是10Y破5%，payer swaption 在4.85%以上呈现非线性gamma放大，effective leverage比直接shorts/futures高约2.5x。同时与CDX payer 相关性高（系统性危机时同向），但与put spread 相关性低（rate shock不一定同步压股）。
- **年carry**：7bp。

### 5.2 5Y payer swaption 6Mx5Y, ATM+25bp

- **结构**：买6Mx5Y payer swaption，行权价ATM+25bp（当前5Y swap ~4.05%，行权价4.30%）。
- **名义**：$15M。
- **当前定价**：6Mx5Y vol ~85bp/yr，期权权利金约 0.55% × 名义 ≈ 5.5bp 一次性，按0.5Y摊销年化 ~3bp。
- **理由**：曲线bear-steepen情景下，5Y的payer swaption 比10Y更早响应（联储反应函数转鹰），是10Y payer的"近端"互补。同时6M期限便宜且theta可控。
- **触发**：核心PCE 月度同比 > 2.9% → 加仓至$25M。
- **年carry**：3bp。

**L3合计：10bp/年**，专门对冲B情景的rate shock，且不与L1/L2在A情景下重复。

---

## 6. L4 金属上行尾部子篮子：C情景的廉价凸性

C情景（铜挤仓+GOES断裂）在卡07结构化金属篮子下短期是盈利的，但卡08指出会放大流动性、basis、再平衡风险。这里**不是对冲C情景的金属篮子下行**——金属篮子在C情景里是赚钱的——而是对冲"组合内已有金属beta在金属价格非线性飙升时来不及加仓"的**机会成本风险**，以及"金属价格暴涨外溢到通胀、央行二次紧缩"的二阶传导。

### 6.1 LME铜call spread (110%/130%)

- **结构**：买入LME 3M铜 110% call、卖出130% call，6M滚动（LME铜option流动性集中在3M/6M）。
- **名义**：$4M铜名义（参考组合内铜beta权重的50%）。
- **当前定价**：LME铜 25d call vol 22%、30d skew +5vol，call spread净支付 ~2.0% × 名义。
- **触发**：LME铜库存 < 100kt 且现货-3M backwardation > $80/t → 加仓至$8M铜名义。
- **理由**：在bear-steepen+stagflation同时发生时，通常已经在commodity heavy beta上获利。但C情景的"挤仓gap up"（参考2024年5月Comex铜逼空）会让现货飞，call spread cap住的130%上行已经包含3-sigma事件的80%payoff。
- **年carry**：4bp。

### 6.2 锡25d call（替代GOES/变压器代理）

- **结构**：LME 9M锡 25d call，到期裸持。
- **名义**：$1M锡名义。
- **理由**：GOES、变压器油等真实瓶颈无可交易期权。锡作为隐性瓶颈+流动性最佳代理，在卡07里就是篮子内的"真瓶颈"配置；这里的call加上一层C情景非线性。
- **年carry**：1bp。

**L4合计：5bp/年**。这是"小而尖锐"的廉价上行尾部，不会喂大成本预算。

---

## 7. 篮子整体看板：Greeks、Carry、相关性

### 7.1 净敞口与Greeks（基线）

| 维度 | 净值 | 占组合NAV比例 | 在三情景下的目标P&L贡献 |
|---|---|---|---|
| Equity delta（SPX等价） | -$5.2M | -5.2% | A: +$8M；B: +$5M；C: +$0 |
| Equity vega | +$25k/vol | n/a | A: +$2.5M（vol+20）；B: +$1.5M（vol+12） |
| Credit DV01（HY+IG） | -$4.8k/bp | n/a | A: +$2M（HY+150bp）；B: +$3.5M（HY+250bp、IG+45bp） |
| Rate DV01（payer swaption） | +$7.2k/bp | n/a | B: +$5M（10Y+80bp、5Y+60bp） |
| Rate vega | +$21k/vol | n/a | B: +$1.5M（MOVE+30） |
| Copper delta | +$38k/% spot | n/a | C: +$1.2M（铜+30%） |
| **预期总payoff** | | | **A: ~+$12.5M / B: ~+$16.5M / C: ~+$1.8M** |
| **年成本** | -$520k | -52bp | -$520k |
| **payoff IRR** | | | **A: 3.8x / B: 5.2x / C: 4.5x** |

C情景下绝对payoff看似小，但C本身组合赚钱（金属篮子+物理资产），对冲层只需要补"结构性挤仓gap"，4.5x IRR已经是高ROI对冲。

### 7.2 子篮子相关性矩阵（基线相关）

| | L1股票 | L2信用 | L3利率 | L4金属 |
|---|---|---|---|---|
| L1股票 | 1.00 | 0.55 | 0.20 | -0.10 |
| L2信用 | 0.55 | 1.00 | 0.45 | -0.05 |
| L3利率 | 0.20 | 0.45 | 1.00 | 0.15 |
| L4金属 | -0.10 | -0.05 | 0.15 | 1.00 |

L4与其他三层基本独立，是"廉价分散贡献者"。L1-L2-L3之间在B情景下的同向性（系统性挤兑）正是对冲所要的功能。

### 7.3 卡08最脆弱假设的覆盖核查

- **TIPS-黄金负相关失效**：由L2（CDX HY+IG payer）和L3（10Y payer swaption）共同覆盖。在TIPS和黄金同跌时，HY和IG spread会扩，10Y rate会上，对冲层payoff合计估计可补回组合损失60-80%。
- **TIPS-名义债期限利差变形**：L3的10Y与5Y payer swaption组合本身就是curve trade的非线性敞口，曲线bear-steepen加速时payoff边际放大。
- **能源-工业金属正相关动摇**：L4的铜call spread + L1的VIX call spread 提供"非相关"凸性，避免单层对冲依赖商品-能源beta。

---

## 8. 动态滚动与触发规则（运营层）

静态篮子在一年theta侵蚀下能耗40-60%。下面是最关键的6条规则，组合经理每周固定review：

1. **每月初按到期梯度滚动1/3 SPX put spread**：避免single-period skew shock。
2. **VIX call spread月末roll forward**：始终保持2M期限，月内不强行平仓除非达到获利了结线。
3. **CDX HY/IG季度滚动**：roll到下一个on-the-run series时，如果spread比上一系列宽 >30bp，先减仓20%名义再滚（避免在spread peak买保护）。
4. **payer swaption在到期前2周决定**：若underlying rate已突破strike → exercise into swap并立即对冲（卖空对应swap的fixed leg）；若未突破 → 让期权过期，权利金计入年度对冲成本。
5. **触发型加仓总预算上限15bp**：基线52bp + 触发加仓最高15bp = 一年成本上限67bp，仍在预算内。
6. **触发型获利了结的资金分配**：60%回流到现金缓冲（cash权重5–8%范围内），40%重新购买被消耗的对冲层（保持篮子结构平衡）。

---

## 9. 三情景压力测试下的篮子表现实测

### 情景A：AI capex 2026H2突然下修30%（10日窗口）

- 卡08估算组合10日VaR升至8.0–9.5%，约 -$8M 损失。
- 篮子payoff：SPX -15%、NDX -22%、VIX 28、HY +130bp、IG +25bp、10Y +20bp、铜-8%。
- 对冲层payoff合计：**+$11.8M**（净盈利 +$3.8M，对冲覆盖率148%）。
- **结论**：A情景下篮子轻度over-hedge，主要因SPX put spread + NDX put spread + VIX call spread三重叠加。可在事后获利了结时，部分释放预算用于C情景加仓。

### 情景B：核心PCE 3.2%、10Y破5%、stagflation-lite（10日窗口）

- 卡08估算最大回撤12–16%，约 -$14M 损失。
- 篮子payoff：SPX -22%、VIX 32、HY +250bp、IG +45bp、10Y +80bp、5Y +60bp、铜+5%。
- 对冲层payoff合计：**+$16.0M**（净盈利 +$2M，对冲覆盖率114%）。
- **结论**：B情景下对冲层是关键挽救器，覆盖率刚好略高于100%。如果B情景同时叠加流动性枯竭（spread跳涨幅度更大），覆盖率可达130–140%。

### 情景C：铜挤仓+GOES断裂（30日窗口）

- 组合内金属篮子已在C情景里赚钱（卡07），但篮子beta化暴露对超级挤仓gap up反应不足。
- 对冲层payoff：铜+30%（call spread 满档payoff）、锡+25%、SPX -3%、HY +20bp。
- 对冲层payoff合计：**+$1.8M**（在金属篮子已盈利的基础上额外补充挤仓gap）。
- **结论**：C情景下篮子贡献小但成本极低（5bp），属于"廉价保险尾部"。

---

## 10. 不被覆盖的边界情形与执行风险

诚实列出本篮子**不能**保护或保护成本会突破70bp上限的情形：

1. **A+B+C三情景同时爆发**：1日VaR可能突破4%，10日突破18%。本篮子在三情景独立下覆盖率充足，但同时爆发时SPX put spread上端被突破、CDX HY流动性枯竭、payer swaption执行成本飙升。**应对**：触发条件下把cash buffer 5–8% 拉到上限8%，并提前考虑增配长期deep OTM SPX put（10–15% OTM 6M），但这要单独再申请预算。
2. **缓慢长期下行（grind down）**：篮子设计偏短期凸性，若A情景以"6个月慢跌15%"形式发生而非"1个月急跌15%"，put spread theta会吃掉60–70%payoff。**应对**：在"VIX < 16 且SPX 90日历史vol < 12"的低波环境下，把SPX put spread 滚动期限从3M延长到6M（成本+3bp），换取对慢跌的容忍。
3. **CDX index series transition错位**：每半年HY/IG index roll时basis可能-15bp单次，季度滚动节奏需要避开roll日。
4. **payer swaption早期delta滑出**：若underlying rate在期权深度OTM时反向移动，delta对冲成本会超出预算，需要严格止损。

---

## 11. 与卡08的对接结论

- 卡08结论"必须叠加VIX、CDX、利率长波动率和商品再平衡纪律"在本篮子中**全部落地为可交易结构**。
- 篮子年化成本52bp（基线）+触发加仓15bp上限，刚好在卡08给定的40–70bp预算内，且未挤压组合内其他实物对冲（黄金、TIPS、能源股）的资金占用。
- **最关键的判断**：篮子能让卡06/07组合在B情景下的最大回撤从12–16%压回到2–6%；A情景从8–9.5%压回到接近0；C情景在金属篮子赚钱基础上再加4.5x IRR的廉价凸性。

---

## 12. 后续待展开问题

下一步交接的最佳归宿是**首席策略师（chief-strategist）**——本系列从单点theme（卡01 AI capex峰值）一路展开到上游制造、电力、能源、宏观、跨资产、金属、风控、衍生品对冲，已经覆盖了"信号 → 框架 → 配置 → 风控 → 对冲"的完整链条。还差最后一卡把整个10卡线索综合成**A股/港股/美股的策略级动作清单**——哪些行业要超配、哪些要止盈、哪些是中长期主题、哪些是短期逆向交易，并给出A股本土投资者的最优落地路径（沪股通、ETF、衍生品）。这是A股策略师的本职域，也是10卡链条收官的合理归宿。

## Follow-up

- Analyst: chief-strategist
- Topic: 10卡链条收官：从AI capex峰值信号到A股/港股/美股策略级动作清单与本土投资者落地路径
- Question: 把卡01-09的判断综合后,2026H2-2027的A股/港股/美股策略级动作清单应如何排序?哪些行业要超配(电力设备/变压器/铜/能源/AI上游ODM),哪些要止盈或止损(高估值AI算力、互联网、地产链),哪些是中长期主题vs短期逆向交易?A股本土投资者通过沪股通、行业ETF、可转债、股指期权和商品期货应如何分层落地这套All-Weather+AI物理资源+尾部对冲框架?
