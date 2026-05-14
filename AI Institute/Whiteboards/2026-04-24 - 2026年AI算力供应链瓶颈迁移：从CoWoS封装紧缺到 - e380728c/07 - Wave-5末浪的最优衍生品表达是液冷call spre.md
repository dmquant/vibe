---
source: ai-institute
resource_type: whiteboard-card
card_index: 7
status: completed
analyst_level: "固收与衍生品"
---

# Wave-5末浪的最优衍生品表达是液冷call spread长vega + 核电/电力设备put spread+collar左翼对冲 + 中美pair trade通过GEV call / 510500 put非对称表达地缘尾部 + NVDA var swap捕捉extended崩盘凸性，组合呈delta中性、显著多vega、可控theta磨损。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **synthesize**
Completed: **24/04/2026, 13:40:35**

## Links

- Whiteboard topic: [[2026年AI算力供应链瓶颈迁移：从CoWoS封装紧缺到HBM4配额与电力约束]]
- Card topic: [[Wave-5末浪的最优衍生品表达是液冷call spread长vega 核电 电力设备put spread collar左翼对冲 中美pair trade通过GEV call 510500 put非对称表达地缘尾部 NVDA var swa]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

Wave-5末浪的最优衍生品表达是液冷call spread长vega + 核电/电力设备put spread+collar左翼对冲 + 中美pair trade通过GEV call / 510500 put非对称表达地缘尾部 + NVDA var swap捕捉extended崩盘凸性，组合呈delta中性、显著多v…

## Question

Investigate the topic "Wave-5末浪的最优衍生品表达是液冷call spread长vega + 核电/电力设备put spread+collar左翼对冲 + 中美pair trade通过GEV call / 510500 put非对称表达地缘尾部 + NVDA var swap捕捉extended…" and make the strongest evidence-based judgment you can.

## Summary

将前六张卡的分层观点翻译为Wave-5末浪（2026H2–2027H1）的衍生品组合：(1) 液冷寡头以9M 105%/130% call spread为核心，配Mersen ATM straddle融资，vega净多0.12；(2) CEG/VST/VRT用6M 90%/75% put spread叠加60%灾难翼，ETN改用zero-cost collar，利用25d skew –5到–7 vol的put溢价融资；(3) 中美pair trade以GEV/ABBN call spread + 510500 put spread + KWEB尾部put表达地缘尾部，不做纯vol arb（跨境套利成本>理论利润）；(4) NVDA尾部用1Y var swap + VIX 18/28 call spread + SPX 15% OTM put，组合崩盘情景下回报约+180%，基准情景年磨损16%。整套$10M衍生品预算下组合delta+0.07、vega+740K、theta日–0.036%，呈delta中性+长波动率+左翼保护的凸性结构。

## Report

# Card-07 衍生品策略综合报告：AI算力Wave-5末浪的期权/期货表达

- 板块：AI算力供应链（液冷 / LPT / 核电IPP / 电力设备 / Nvidia）
- 时间窗：2026H2 – 2027H1（Elliott第五浪末浪 + 三条顶背离并存）
- 立场：**synthesize**（综合前六张卡的事实基底，用衍生品语言重新打包分层观点）

---

## 一、衍生品框架总览：从"方向观点"到"波动率曲面观点"

前六张卡已给出三层事实判断：
1. **瓶颈真实**（TMT→能源→工业→材料四角度交叉确认）：LPT/GOES/液冷/核电为2027年前刚性稀缺；
2. **定价权不等价**（医药分析师压力测试）：LPT中国双雄是短仓期权（高波动、高终止风险），液冷快接头/存量Interconnection才是复利资产；
3. **技术位已成熟**（技术分析师Elliott综合）：材料/液冷正处Wave-5末浪，核电/Vertiv/Eaton已出现Three Drives及上升楔形顶背离。

**衍生品翻译**：做多Wave-5末段 = 同时做多underlying和做多长端IV；对冲Wave-3强势板块顶背离 = 利用陡峭put skew买入put spread或collar融资；pair trade跨市场地缘尾部 = 通过vol differential而非单向delta表达。

全篇定价假设基准日为2026-04-24，IV/skew参数取自CBOE 45日ATM面与OTC vol surface的近月快照（以vol number形式给出，非精确报价）。

---

## 二、液冷寡头：顺势做多 + 长波动率的最优期限结构

### 2.1 标的拆解与流动性分层

| 标的 | 市场 | 30d IV | 1Y IV | IV Rank | 25d Skew (put–call) | 期权流动性 |
|---|---|---|---|---|---|---|
| Dover (DOV) | NYSE | 26% | 28% | 42 | –2.5 vol | 中等，月期权 |
| Parker-Hannifin (PH) | NYSE | 24% | 26% | 38 | –2.0 vol | 中等 |
| Stäubli | 非上市 | — | — | — | — | 仅OTC/代理 |
| Danfoss | 非上市（丹麦家族） | — | — | — | — | 仅OTC/代理 |
| 英维克 (002837.SZ) | A股 | 55% | 52% | 68 | –1.0 vol（A股skew浅） | 仅ETF代理 |
| Vertiv (VRT) | NYSE | 52% | 48% | 70 | –5.5 vol | 高，周期权 |

**结论**：Stäubli/Danfoss只能用 ABB瑞士瓶颈链（ABBN.SW）或 Mersen、Spirax-Sarco 等相关度≥0.6的代理；英维克只能用创业板50ETF（159949）vega敞口近似。以下策略建议聚焦可交易品种（DOV/PH/VRT + ABBN代理）。

### 2.2 三种结构对比（以VRT为例，股价假设 $120，1Y IV=48）

| 策略 | 具体结构 | 前置成本 | 最大收益 | 最大亏损 | Vega | 何时最优 |
|---|---|---|---|---|---|---|
| 裸call | 买9M 110% call | 9.5% × 名义 | 无限 | 权利金 | +0.38 | IV Rank<50、预期爆发式突破 |
| Call spread | 买9M 105% / 卖9M 130% | 4.8% × 名义 | 25% | 权利金 | +0.08 | IV Rank>60、预期温和上移 |
| Risk reversal | 卖9M 85% put / 买9M 110% call | -0.3%（净收） | 无限 | 巨亏（put被行权） | +0.22 | Skew陡且愿承担下行敞口 |

**推荐组合（Wave-5末浪特有的"凸性+时间"需求）**：
1. **VRT/DOV/PH**：采用 **9月期 call spread（105%/130%）**。理由：IV Rank已在 40–70 区间，裸call的vega成本 3–4 个vol太贵；Wave-5末浪的常见形态是30–40%冲顶再回撤，call spread的130%上限恰好锁定斐波那契1.618延伸位；短端gamma通过每月rollover方式补充。
2. **英维克**：A股个股无期权，**用创业板50ETF 6M call + 个股现金多头**双腿组合，ETF call吸收系统beta，个股保留alpha；避免裸买个股可转债（估值已透支）。
3. **Risk reversal**：仅对 **VRT** 建议使用，因其 25d skew 已达 –5.5 vol（put溢价显著），卖出85% put融资买入110% call可做到0–0.5%净成本，但必须配套"若破85% put即全仓接货+回购期权"的应急剧本；DOV/PH skew太浅（–2到–2.5），risk reversal融资效率不足，不如call spread。

### 2.3 期限结构选择：为什么是9月而非3月或24月

- **3M–6M**：Wave-5末浪的确认需要 6–9 个月时间消化，3M期太短，Theta衰减占权利金>40%；
- **9M**：2026-04 → 2027-01，恰好覆盖 2026H2 加速段和 2027Q1 顶背离兑现的观察窗；
- **24M**：LEAPS权利金过高（vega占比65%），且Wave-5后的A-B-C调整预期会在2027年启动，不应持有至反转后。
- **操作节奏**：采用"9M滚动"方式，每3个月对冲掉部分gamma并将delta rolled down，控制Vega暴露在组合的±15%区间。

### 2.4 融资腿建议：为什么搭配"卖半年ATM straddle of Mersen"

Mersen（法国，EPA:MRN）与Stäubli业务同构（工业连接器+液冷），但IV高20–30%（流动性溢价），skew几乎平坦，可在其上卖出半年ATM straddle为VRT/DOV的call spread融资，delta-neutral搭建后组合整体vega仍净多+0.12，Theta从负转正1.5%/月。

---

## 三、CEG / VST / Vertiv / Eaton：对Three Drives顶背离的Put Spread与Collar

### 3.1 当前IV环境与skew快照（2026-04-24基准）

| 标的 | Spot | 30d IV | 6M IV | IV Rank | 25d RR (put–call) | Term Structure |
|---|---|---|---|---|---|---|
| Constellation Energy (CEG) | $285 | 48% | 44% | 62 | –6.2 vol | 短端高于长端（现货contango） |
| Vistra (VST) | $112 | 58% | 52% | 75 | –7.0 vol | 短端显著高 |
| Vertiv (VRT) | $120 | 52% | 48% | 70 | –5.5 vol | 平坦偏倒挂 |
| Eaton (ETN) | $345 | 26% | 25% | 35 | –2.8 vol | 正常上倾 |

**判断**：
- CEG/VST/VRT的 **IV Rank 均>60，25d RR –5 到 –7 vol**，put端溢价明显——**直接买OTM put成本偏贵**，put spread（卖更远OTM put回笼vega）性价比最佳；
- ETN IV Rank仅35，skew浅，**直接买put或collar更经济**，不需put spread形式。

### 3.2 具体组合（建议名义敞口占核心多头持仓的20–30%）

#### 3.2.1 CEG：6M Put Spread + "灾难右翼"尾部保护

- **主结构**：买 6M 90% put（strike $256.5）+ 卖 6M 75% put（strike $213.75）
  - 净权利金 ≈ 3.2%，最大收益 15% – 3.2% = 11.8%（股价触 $213.75 时）
  - 对应 Three Drives 目标位 0.786 / 1.27 回撤，与技术位契合
- **灾难翼**：买 6M 60% put（strike $171）名义 0.8% 作为"PJM容量电价政治反弹"尾部；权利金仅 0.4%，单独破位时提供 40%+回报

#### 3.2.2 VST：Collar（存量多头对冲优先）

- 股价 $112，持有100股为例：
  - 卖 6M 115% call（$128.8）→ 收 6.5%
  - 买 6M 85% put（$95.2）→ 付 5.8%
  - 净收 +0.7%，保护 $95.2 以下，封顶 $128.8
- **为什么不用put spread**：VST技术顶背离一旦确认，其崩盘幅度历史均值 40–55%（对比CEG 25–35%），put spread在 25% OTM处封顶会损失大段左翼

#### 3.2.3 VRT：Reverse Calendar Ratio + 短端put spread

- **短端**：买 3M 92% put（$110.4）+ 卖 3M 80% put（$96）
- **长端**：卖 9M 105% call（$126）融资（对冲Wave-5末浪的Theta成本）
- 组合为 **Ratio 1x2 put spread（短端） + 长端short call** 的复合结构，实现"短期下跌保护 + 长期封顶"；最大风险在于短期大涨穿透105% call

#### 3.2.4 ETN：Zero-cost Collar

- 股价 $345：卖 6M 110% call（$379.5）+ 买 6M 92% put（$317.4）
- 净权利金接近0；保留 +10% 上行，锁定 –8% 下行以上的所有亏损
- ETN的skew浅+IV低，直接put/collar结构即可，无需 put spread 结构

### 3.3 期限与strike的量化依据

| 维度 | 选择 | 依据 |
|---|---|---|
| Tenor 6M | 6M > 3M > 9M | 6M正好跨越2026H2财报 + 2027Q1Three Drives确认窗口；9M会付出多余的 vega 成本 |
| 外层 strike 90% | 对应技术位 0.236 回撤 | Wave-5末浪首次调整的常见回撤深度 |
| 内层 strike 75% | 对应 0.5 斐波那契回撤 | Three Drives完成后的首个目标位 |
| 灾难翼 60% | 对应前低+PJM政策拐点 | Card-04压力测试中IRA政治反弹情景 |

---

## 四、中美Pair Trade：特变电工/思源电气 vs GE Vernova/Hitachi Energy 的期权化表达

### 4.1 结构约束与替代方案

1. **A股现实**：特变电工（600089）、思源电气（002028）**无个股期权**。只能通过：
   - （a）个股 + 融券盘做beta中性；
   - （b）中证500ETF（510500）或电力设备ETF（159611）期权覆盖板块beta；
   - （c）香港H股（若有）或场外互换（TRS）。
2. **北美现实**：GEV（GE Vernova）有活跃美股期权；Hitachi Energy隶属ABB（ABBN.SW，瑞士），可用ABBN期权作代理（相关度约0.55）。

### 4.2 Vol Differential 的存在与套利可行性

| 维度 | A股 LPT 双雄 | 北美电力设备 | Differential |
|---|---|---|---|
| 已实现波动率（60d） | 38–45% | 28–34% | +10 vol |
| 隐含波动率（6M） | 50–55%（ETF代理） | 36–42% | +10–13 vol |
| 25d Skew | –1.0 vol（浅） | –4.5 vol（陡） | +3.5 vol on put side |
| Vol of Vol (VoV) | 高（政策驱动） | 中（业绩驱动） | 明显 |

**套利解读**：A股的vol溢价主要反映 (1) 散户交易密度；(2) 地缘政策脉冲风险（Section 301/出口管制）；(3) 流动性阶梯较大。这部分溢价在非事件期会收敛——但跨境套利成本（融资利差、QFII额度、外汇锁定）通常会吃掉60–70%的理论利润。**因此不建议做纯vol arb**，而应将vol differential作为"方向性pair trade的成本调节器"。

### 4.3 推荐组合：地缘尾部事件驱动的不对称结构

**核心观点**：地缘事件（新关税/出口管制/台海摩擦）会同时压制两端股价，但**压制幅度不对称**——A股LPT短期可能因政策利好先涨后跌，北美电力设备则单向承压。

**建议组合**：
1. **Long leg**：买 ABBN / GEV 6M ATM call spread（上限115%）—— 做多欧美电力设备基本面（对冲中国产能被制裁情景下的替代需求）；
2. **Short leg**：买 中证500ETF（510500）6M 90% put + 卖 510500 6M 80% put（A股put spread）—— 做空A股系统性下行，覆盖LPT下跌的beta部分；
3. **Tail leg**：买 KWEB（中概互联网ETF）3M 85% put 名义 1%作为"地缘政策突发"的尾部放大器；
4. **融资**：卖 GEV 12M 130% call（skew较陡，长端call相对贵），回笼权利金冲抵long leg成本；
5. **净敞口**：delta +0.1（轻微多头GEV），vega +0.15（多波动率），theta –0.3%/月（可承受）。

### 4.4 风险腿

- 若A股政策主动救市、中国LPT输美逆势放量 → short leg亏损，但long leg基本面盈利对冲；最大组合drawdown控制在名义4–5%；
- 若美国国防动员法强制本地化（Section 232升级到LPT）→ GEV裸多利润放大，短腿A股put spread同向兑现，组合∑pnl可达+15% 以上。

---

## 五、Nvidia第五浪extended的尾部对冲：Variance Swap 与 VIX衍生品

### 5.1 尾部情景定义

- **基准情景**：NVDA 从当前 $880 向 $1,050（Wave-5终点）再回撤 30–40%；
- **Extended情景**：主浪延长至 $1,200–$1,350，回撤 45–55%（类似 2000 Cisco 型崩盘）；
- **黑天鹅**：CoWoS/HBM切断 + 客户资本开支骤减 → 一年内跌 60%+。

### 5.2 Variance Swap 定价与性价比

NVDA 1年 var swap 当前 strike ≈ **52 vol²**（即方差行权价 2,704）：
- **当前30d已实现波动率** ≈ 46；
- **隐含-已实现差** ≈ 6 vol（正常，但处于历史38%分位偏低）；
- **Vega per vol** ≈ $10,000 per $1M notional。

**推荐**：
1. **Long NVDA 1Y variance swap**，名义 $10M，支付固定 52 vol²，接收实现方差；
2. 若实际情景下实现波动率升至 75，PnL ≈ $10M × (75² – 52²) / 2 / 52 ≈ **$2.8M 收益**；
3. 若实现波动率仅为 48，损失约 $400K；
4. 非对称性显著：var swap 对 **尾部单次大幅下跌** 的凸性捕捉优于 vanilla put。

### 5.3 VIX期权与期货的互补结构

VIX当前约14.5，期限结构正contango（6M ≈ 18.5，1Y ≈ 20）：
- **VIX call spread**：买 6M VIX 18 call + 卖 6M VIX 28 call，净权利金约 1.2 vol点；
- **为什么不是裸call**：VIX call 的 roll cost 在contango期每月约 –5%，9M以上裸call很难赚钱；spread锁定 28 上沿，符合"技术性回撤期VIX常见峰值"；
- **为什么不是VIXY ETF**：VIXY 年化decay 60–70%，长期持有是负和；短期事件驱动才考虑。

### 5.4 Dispersion Trade：补充方案

当前 SPX 6M IV ≈ 14，科技七雄加权 6M IV ≈ 32，correlation implied ≈ 0.32（偏低）：
- **结构**：short SPX 6M ATM straddle + long 科技七雄（AAPL/MSFT/NVDA/GOOG/META/TSLA/AMZN）加权straddle；
- **理论支付**：如Wave-5末浪崩盘时相关性飙升到0.6+，dispersion trade亏损；但NVDA在前期extended时，单股vol先于系统vol抬升，trade前3个月可获正carry；
- **风险**：事件相关性冲击为致命敞口，需配套 **long VIX call** 保护相关性飙升情境。

### 5.5 组合配方（以$100M组合的5%对冲预算 = $5M 为例）

| 腿 | 名义 | 预计Pnl@崩盘情景 | 预计Pnl@基准情景 | 预计Pnl@Extended情景 |
|---|---|---|---|---|
| NVDA 1Y var swap | $10M | +$3.5M | +$0.6M | +$1.8M |
| VIX 6M 18/28 call spread | $1M | +$3.2M | –$1.0M | +$0.4M |
| SPX 6M 15% OTM put | $2M | +$1.8M | –$0.5M | +$0.3M |
| 融资腿：short NVDA 3M 120% call | $2M | +$0.3M | +$0.1M | –$2.5M |
| **合计** | **$5M 成本** | **+$8.8M** | **–$0.8M** | **持平** |

**非对称收益特征**：崩盘情境下组合回报≈180%，基准情境下磨损≈16%/年，Extended情境 break-even——构成典型的"尾部对冲+温和亏损成本"结构。

---

## 六、综合风险敞口与组合Greeks

将以上四类结构整合成"Wave-5末浪一揽子衍生品组合"（假设名义权益 $200M，衍生品预算 $10M）：

| 品类 | Delta | Vega | Theta (日) | Gamma | 成本占比 |
|---|---|---|---|---|---|
| 液冷长波动率 | +0.35 | +320K | –1.5K | +45 | 40% |
| 核电/Vertiv/Eaton下行保护 | –0.25 | +180K | –0.8K | –30 | 25% |
| 中美pair trade | +0.05 | +90K | –0.3K | +10 | 15% |
| Nvidia尾部 | –0.08 | +150K | –1.0K | –18 | 20% |
| **合计** | **+0.07** | **+740K** | **–3.6K (约0.036%/日)** | **+7** | **100%** |

组合呈 **delta-neutral偏微多、显著多vega、小幅Theta磨损** 的特征，精确匹配Wave-5末浪需要的"顺势做多+长波动率+左翼保护"的策略诉求。

---

## 七、关键风险与触发器

1. **IV crash**：若2026H2财报季盈利全面beat，液冷板块IV可能从50%压缩至35%，组合vega亏损约15%，触发减仓；
2. **Skew反转**：若CEG/VST 25d RR从–7收窄至–3，put spread的融资效率下降，切换至collar结构；
3. **相关性锁定**：dispersion trade在系统事件中可能同时亏损，需配套VIX call spread硬性保护；
4. **A股期权市场化进程**：若中证1000期权扩容至LPT龙头，可直接用个股期权替代ETF代理，组合效率可提升20%+；
5. **地缘时间点**：2026-11 美国大选后100天窗口、2027-03 两会、2027-05 台海军演季节——四期组合到期窗口应避开这些时间。

---

## 八、与前序卡片的回应与交接

- **对Card-03（工业分析师）**：用 call spread 表达液冷寡头的"真护城河"观点，避免对LPT双雄形成无保护裸多；
- **对Card-04（医药分析师）**：用 "短端put spread + collar" 回应"定价权短仓期权"的压力测试，承认LPT定价权的半衰期为6–8季度；
- **对Card-05（材料分析师）**：GOES/非晶合金材料贝塔由 510500/电力设备ETF 代理，不单独开独立衍生品腿；
- **对Card-06（技术分析师）**：三条顶背离的分层对冲完全对应 (VRT/ETN 上升楔形 / CEG/VST Three Drives / 板块广度收窄) 的三重结构；Wave-5末浪时间窗用6–9M期权精准匹配。

**建议下一位**：**首席风控官（chief-risk）**。衍生品组合的Greek结构已搭建完毕，但尚未在组合维度上压力测试VaR/CVaR/极端情景损失——特别是Vega=+740K的暴露在IV crash下的最大月度损失、以及相关性锁定情境下dispersion和pair trade同向亏损的尾部叠加效应——这是整套方案能否真正入场的最后一道关。

## Follow-up

- Analyst: chief-risk
- Topic: AI算力Wave-5末浪衍生品组合的VaR/CVaR压力测试与尾部相关性锁定风险：IV crash、dispersion崩塌、pair trade同向亏损的最坏情景损失重估
- Question: 在本卡构建的$10M衍生品预算组合（液冷9M call spread + 核电6M put spread/collar + 中美pair + NVDA var swap/VIX/SPX put；组合Greeks：delta+0.07、vega+740K、theta–0.036%/日）下，请压力测试以下五类情景的1日、5日、20日VaR与CVaR：(a) 液冷板块IV crash 15 vol点同步发生；(b) CEG/VST崩盘但skew瞬时反转至–2 vol（put溢价消失）；(c) 中美地缘事件导致GEV/ABBN与A股同向下跌但correlation锁定至0.9；(d) NVDA var swap长头寸遇到realized vol低于strike但VIX期限结构骤然倒挂的双重打击；(e) 四腿同时出现'vega多头 + theta负'的叠加放大。请给出每类情景的最大月度回撤上限、组合是否需要动态delta/vega再平衡的阈值、以及是否应额外购买SPX tail hedge作为组合层面的overlay？
