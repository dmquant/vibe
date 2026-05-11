---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# 午间面对面 (Midday Check-in) - 外汇策略组

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# 午间面对面 (Midday Check-in) - 外汇策略组
**日期：** 2026-05-06 (周三)
**分析师：** FX Strategist (外汇策略师)
**立场：** 谨慎看多美元，关注套利交易回流风险

---

## 1. 晨间已确认事实与数据 (Morning Facts & Data)

*   **USD/CNH 波动区间：** 离岸人民币即期汇率维持在 **7.32–7.42** 区间。受 2025 年遗留贸易摩擦及美元走强影响，贬值压力持续存在。央行（PBOC）通过中间价机制维持 7.35–7.40 的“软性底部”。
*   **美元走强逻辑：** Warsh 就任美联储主席后，r*（长期中性利率）重定价至 **3.2%**，10 年期美债收益率突破 **4.70%**。美元指数（DXY）跳空上行 3-5%，非美货币普遍承压。
*   **日元（JPY）崩盘风险：** USD/JPY 报 **156.76**。市场定价 BOJ 不加息与美联储鹰派共振，目标区间上调至 **165–168**，可能诱发人民币被动破位。
*   **出口与材料压力：** 钢铁出口年化达 1.1 亿吨峰值，价格触及边际现金成本（3200-3500元/吨）。由于欧美贸易壁垒，出口通道收窄风险已传导至汇率预期。
*   **科技溢出效应：** DeepSeek V4 发布引发 API 流量激增（+400%），网宿科技（300017.SZ）边缘节点成为算力瓶颈下的关键支撑。

## 2. 待验证问题 (Questions Pending Verification)

*   **航运指数矛盾：** `altdata-analyst` 报告 Drewry WCI 综合指数单周上涨 **+10%**，而 `chief-strategist` 援引数据为 **-1%**。需核实最新 WCI 读数以确定下半年通胀路径。
*   **PBOC 干预力度：** 若 USD/JPY 突破 160 关口，需验证 PBOC 是否会主动调低中间价以释放贬值压力，或通过掉期点进行更强力干预。
*   **AI 电力税传导：** PJM 容量电价暴涨 833% 对科技巨头利润率的侵蚀是否会加速资金从美股科技向能源/Merchant Power 资产轮动，进而影响美元流动性。

## 3. 下午行动项 (Afternoon Action Items)

*   **监测 Mysteel 库存：** 重点关注周五前的钢铁社会库存高频数据，确认“断裂”信号是否前移至 Q3。
*   **跟踪北向资金：** 验证在 USD/JPY 压力下，北向资金单日流出是否触及 **1500-2000 亿人民币** 的极端修正阈值。
*   **汇率对冲校准：** 根据 `asset-allocator` 的建议，对港股/ADR 净名义敞口维持 **50–70%** 的 CNH 对冲（3M 远期），确保成本控制在 25 bp NAV 以内。

## 4. 协作请求 (Collaboration Requests)

```json
{"follow_ups":[
  {"to":"global-macro","subject":"日元贬值传染性评估","question":"若 USD/JPY 突破 160 并冲向 165，人民币（CNH）被动破位的触发系数是多少？是否会导致北向资金无差别撤离？","priority":"high"},
  {"to":"altdata-analyst","subject":"WCI 数据核实","question":"请核实截至 5 月 6 日当周 Drewry WCI 综合指数的真实读数。10% 的涨幅是综合指数还是仅为 SH-LA 单航线？","priority":"high"},
  {"to":"tmt-analyst","subject":"AI 推理成本与 FX 关联","question":"DeepSeek V4 极低推理成本是否会改变跨境算力租赁的支付币种结构？这对离岸人民币需求有何中长期影响？","priority":"normal"}
]}
```

---
**文件验证：**
- 历史报告读取：无矛盾（基准 CNH 观点与 `asset-allocator` 一致）。
- 参考文件：`recent_reports.md` (2026-05-06)。
