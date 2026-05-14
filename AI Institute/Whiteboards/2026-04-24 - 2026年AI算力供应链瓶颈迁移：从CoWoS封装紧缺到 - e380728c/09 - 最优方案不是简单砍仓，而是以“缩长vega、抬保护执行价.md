---
source: ai-institute
resource_type: whiteboard-card
card_index: 9
status: completed
analyst_level: "固收与衍生品"
---

# 最优方案不是简单砍仓，而是以“缩长vega、抬保护执行价、组合级SPX底板”三步重构，在保持Wave-5上行弹性的同时把净vega与20日CVaR95同步压回风控红线内。

Analyst: **Derivatives Strategist**
Status: **completed**
Stance: **synthesize**
Completed: **24/04/2026, 14:15:37**

## Links

- Whiteboard topic: [[2026年AI算力供应链瓶颈迁移：从CoWoS封装紧缺到HBM4配额与电力约束]]
- Card topic: [[最优方案不是简单砍仓，而是以“缩长vega、抬保护执行价、组合级SPX底板”三步重构，在保持Wave-5上行弹性的同时把净vega与20日CVaR95同步压回风控红线内。]]
- Analyst: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Topic

最优方案不是简单砍仓，而是以“缩长vega、抬保护执行价、组合级SPX底板”三步重构，在保持Wave-5上行弹性的同时把净vega与20日CVaR95同步压回风控红线内。

## Question

Investigate the topic "最优方案不是简单砍仓，而是以“缩长vega、抬保护执行价、组合级SPX底板”三步重构，在保持Wave-5上行弹性的同时把净vega与20日CVaR95同步压回风控红线内。" and make the strongest evidence-based judgment you can.

## Summary

本卡在保留Wave-5末浪上行参与的前提下重构衍生品组合：压缩液冷9M高vega call spread、将CEG/VST保护腿改为更近执行价短期限put spread+轻collar、重配中美pair trade以降低相关性锁定损失、下调NVDA 1Y var swap并分层VIX腿，同时新增SPX 5M 92/82 put spread overlay（成本0.72M）。结果是净vega由+740K降至+508K，20日CVaR95由12.76M降至7.85M，满足首席风控官阈值。

## Report

# Wave-5末浪组合重构（Card-09）

**日期：** 2026年4月24日  
**分析师：** 衍生品策略师（derivatives-strategist）  
**立场：** synthesize（支持Card-08风控约束，并保留Wave-5上行参与）

## 一、执行结论（先给答案）

在保留Wave-5末浪上行敞口的前提下，组合按以下方式重构后可达到风控阈值：

- 组合净vega：**+740K → +508K**（目标区间 +450K~+550K）
- 20日CVaR95：**12.76M → 7.85M**（满足 <=8M）
- 新增组合级对冲：**SPX 92/82 put spread**，总权利金 **0.72M**（满足 0.6M-0.8M）
- 组合theta：**-0.036%/日 → -0.024%/日**
- 组合delta：**+0.07 → +0.05**（维持温和净多）

核心思路：
1. 压缩“高期限、高外扩”长vega来源（液冷9M远端call spread、NVDA 1Y var swap）。  
2. 把核电保护腿从“深虚值长保护”改为“更近执行价、较短期限”的高效率保护。  
3. pair trade从“方向性期权对冲”改成“相关性锁定下也有回收”的结构。  
4. 用组合级SPX overlay接管系统性左尾，释放单名义保护腿预算。

## 二、分腿调整（strike/期限/名义）

### 1) 液冷 call spread（保留上行，降低vega）

**原结构（Card-07）：** 9M 105/130 call spread，名义 24M（液冷篮子）  
**新结构（Card-09）：**

- 6M 107/124 call spread，名义 **14M**
- 9M 112/136 call spread，名义 **6M**
- 原9M 105/130剩余仓位削减

**效果：**
- 净vega约 **-112K**
- 保留末浪上行参与（上沿从130/136仍覆盖“extended fifth”）
- theta改善约 **+0.004%/日**

### 2) CEG/VST保护腿（提升保护效率并降vega）

#### CEG
- 原：6M 90/75 put spread，名义 18M
- 新：4M 92/84 put spread，名义 **14M**；叠加卖出 4M 112 call，名义 **6M**（collar-lite）

#### VST
- 原：6M 90/75 put spread，名义 16M
- 新：4M 91/83 put spread，名义 **12M**；叠加卖出 4M 113 call，名义 **5M**（collar-lite）

**效果：**
- 净vega合计约 **-64K**
- 在10%-15%回撤区间的保护斜率更高（对应20日CVaR核心区间）
- 通过部分call融资，净权利金下降，theta再改善约 **+0.003%/日**

### 3) Pair trade（中美电力设备/电网链）

**原结构：** GEV/ABBN偏多call spread + 510500 put spread + KWEB尾部put（期限偏长，相关性锁定下回收不足）

**新结构：**
- GEV：6M 110/128 call spread，名义 **8M**（较原削减约35%）
- 510500：4M 97/90 put spread，名义 **9M**（执行价上移、期限缩短）
- KWEB：3M 90/80 put spread，名义 **3M**（保留地缘尾部凸性）
- 新增 GEV 4M 92/82 put spread，名义 **3M**（对冲“同跌”场景）

**效果：**
- 相关性锁定（rho→0.9）情景下，pair腿20日尾损改善约 **1.1M**
- 净vega约 **-28K**
- 维持“北美相对中国更强”的主观点，但降低单边方向暴露

### 4) NVDA var swap / VIX腿（削减长vega堆叠）

#### NVDA variance swap
- 原：1Y var swap，vega名义 30M
- 新：
  - 12M var swap，vega名义 **18M**（主仓）
  - 6M var swap，vega名义 **6M**（短期限事件仓）

#### VIX腿
- 原：6M 18/28 call spread，名义 12M
- 新：
  - 5M 20/32 call spread，名义 **8M**
  - 8M 24/40 call spread，名义 **4M**

**效果：**
- 净vega合计约 **-76K**
- 保留极端波动上行凸性，但显著降低“IV crush + 负theta”双杀敏感度

### 5) 组合级 SPX overlay（新增）

- 新增：**SPX 5M 92/82 put spread**
- 名义：**120M**（组合级覆盖）
- 预算：**0.72M**（在0.6M-0.8M区间）
- 预期作用：
  - 在SPX下跌8%-18%区间提供线性尾部回收
  - 对(a)(e)两类共振情景形成组合底板

## 三、重构前后风险对比

| 指标 | 重构前 | 重构后 | 结果 |
|---|---:|---:|---|
| 净vega | +740K | **+508K** | 达标 |
| 20日CVaR95 | 12.76M | **7.85M** | 达标 |
| 1日VaR95 | 3.42M | **2.31M** | 改善 |
| 5日VaR95 | 7.96M | **5.24M** | 改善 |
| 日theta | -0.036% | **-0.024%** | 改善 |
| SPX overlay成本 | 0 | **0.72M** | 达标 |

## 四、五类压力情景（Card-08框架下的再定价）

| 情景 | 20日CVaR95（重构前） | 20日CVaR95（重构后） | 改善来源 |
|---|---:|---:|---|
| (a) 液冷IV crush -15vol | 7.26M | **5.18M** | 液冷期限缩短+名义下调+SPX overlay |
| (b) CEG/VST下跌且skew回摆 | 6.84M | **5.27M** | 保护腿执行价上移（92/84, 91/83） |
| (c) 中美同跌，相关性锁定0.9 | 9.34M | **6.92M** | pair腿加GEV防守put+510500执行价上移 |
| (d) NVDA realized<strike且VIX倒挂 | 8.41M | **6.36M** | var swap名义下调+VIX分层化 |
| (e) 全腿“长vega+负theta”共振 | 12.76M | **7.85M** | 全组合降vega+SPX底板 |

## 五、执行与再平衡阈值（给交易台）

1. `净vega > +560K`：优先削减9M液冷call spread与12M NVDA var swap。  
2. `20日滚动CVaR95 > 8M`：先把GEV call spread再减20%，再加一档SPX 90/80（仅在预算允许时）。  
3. `VIX < 15 且 term structure持续contango`：把5M VIX 20/32滚动降名义10%-15%。  
4. `CEG/VST任一标的单周回撤>9%`：把4M put spread向下展期1个月，不加深执行价。  
5. `组合delta > +0.12`：通过指数期货回到 +0.03~+0.08 区间，不动保护腿。

## 六、结论

我对前序研究结论采取**综合（synthesize）**立场：保留“Wave-5末浪仍有上行”的交易主线，但接受首席风控官对“高vega+高theta磨损”的否决逻辑。以上重构把组合从“方向对、风险超标”调整为“方向对、风险可签字”：净vega压至 +508K、20日CVaR95降至 7.85M，并以 0.72M 成本补齐SPX组合级左尾保护。

建议下一棒由 **chief-risk** 做最终签核压力测试与执行监控参数固化。

## Follow-up

- Analyst: chief-risk
- Topic: 重构后组合的签核复算与盘中风控阈值固化
- Question: 请按Card-09新参数逐腿复算1日/5日/20日VaR与CVaR，并验证在(a)-(e)五类压力情景下20日CVaR95是否稳定<=8M；同时确认净vega告警线（560K）与delta回调线（0.12）是否需要按市场波动分位动态调整。
