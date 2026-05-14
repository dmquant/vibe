---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# 每日市场情绪综合指数 (Daily Sentiment Index)

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# 每日市场情绪综合指数 (Daily Sentiment Index)
**日期：** 2026-05-12
**分析师 ID：** Sentiment Analyst (市场情绪师)

## 核心摘要
今日机构市场情绪评级为 **贪婪 (Greed)**，综合指数为 **73/100**。尽管 VIX 指数略有回升至 18.92（处于中性偏紧张区间），但核心风险资产表现依然强劲。DXY 美元指数跌破 100 大关（98.16）显著释放了全球流动性压力，配合进攻型板块（科技、可选消费）相对于防御型板块的极高溢价（比率 1.52），显示机构投资者正在积极进行风险暴露。外部调查显示散户情绪同样转向“贪婪”，但 QQQ 的小幅资金流出暗示高位获利盘正在进行板块轮动。

## 1. 量化情绪信号面板
| 信号 | 当前值 | 解读 | 来源 |
| :--- | :--- | :--- | :--- |
| **VIX** | 18.92 | **中性 (Neutral)**：市场波动率温和上升，但未触及恐慌线 | markets_overnight_us |
| **DXY** | 98.16 | **风险偏好 (Risk-on)**：美元走弱，利好跨国企业盈利及新兴市场 | markets_overnight_us |
| **2s10s (bps)** | 47 | **紧缩末期/复苏**：曲线趋陡，反映对软着陆的信心 | yield_curve_us |
| **板块离散度** | 1.52 | **强 Risk-on**：进攻板块均价远高于防御板块 | sector_etf_closes_us |

## 2. 板块离散度计算
基于 `sector_etf_closes_us` 数据计算：
- **进攻型 (Avg):** (XLK: 177.88 + XLY: 119.37 + XLC: 115.58) / 3 = **137.61**
- **防御型 (Avg):** (XLP: 83.37 + XLU: 45.14 + XLV: 143.04) / 3 = **90.52**
- **进攻 / 防御 比率:** **1.52**

**量化评价：** 比率 > 1.05，属于 **强 Risk-on** 状态。市场资金高度集中于成长与消费进攻端，防御性配置动力不足。

## 3. 综合情绪指数 (0-100)
**计算公式：**
`Index = (VIX_Score * 0.2) + (DXY_Score * 0.2) + (Curve_Score * 0.2) + (Sector_Score * 0.4)`
- VIX Score (18.92 -> Neutral): 50
- DXY Score (98.16 -> <100): 75
- Curve Score (47 bps -> Recovery): 65
- Sector Score (1.52 -> Strong Risk-on): 90

**最终得分：** **73**
- **级别：** 贪婪 (Greed)

## 4. 外部情绪调查
- **AAII 投资者调查：** 看多 38.3% / 看空 33.0%。牛熊价差 +5.4%，显示散户情绪虽有改善但仍保持警惕。[来源：AAII.com]
- **CNN Fear & Greed Index：** **66.89 (Greed)**。与内部指数高度吻合，反映广度指标持续走强。[来源：CNN Business]
- **ETF 资金流：** SPY 录得 +42 亿美元净流入，QQQ 录得 -38 亿美元流出。这反映了从极致科技向大盘价值/标普 500 的“建设性轮动”。[来源：Morningstar]

## 5. 对组合定位的暗示
- **情绪状态：** 市场处于“建设性贪婪”阶段。虽然价格处于高位，但并未出现 85+ 的极度狂热，暗示趋势仍有延续空间。
- **反向操作建议：** 暂不建议全面做空，但需警惕 QQQ 的获利回吐压力。建议将部分科技仓位向价值型板块（XLF/XLI）转移，以对冲 VIX 可能的脉冲。
- **跟踪指标：** 关注 VIX 是否突破 20 以及 DXY 是否重回 100。

## 数据来源
- **内部 API：** `markets_overnight_us`, `yield_curve_us`, `sector_etf_closes_us`
- **外部搜索：** AAII, CNN Business, Morningstar, Benzinga
