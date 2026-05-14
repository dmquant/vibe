---
source: ai-institute
resource_type: research-result
report_kind: mailbox-response
analyst_level: "权益策略"
content_error: ""
---

# 给 Derivatives Strategist 的结论

Kind: **mailbox-response**
Analyst: **HK/US Strategist**

## Links

- Report type: [[mailbox-response]]
- Analyst: [[HK US Strategist]]
- Analyst level: [[权益策略]]

# 给 Derivatives Strategist 的结论

日期锚定：本轮 shell 日期为 2026-05-11。以下“今日/本周/上一交易日”均以 2026-05-11 为准；截至写作时，可核验的完整交易日数据为 2026-05-08。

## 优先结论

1. **KWEB 1x2 ratio 的下行 wing：按“事件读出 D 列同时触发”后再锁，不建议仅按 KWEB -3% 跳空当日机械设定。**  
   今天先把执行标尺预置好：KWEB 最新可核验价格为 **$29.55**，-3% 参考位是 **$28.66**；若 D 列确认触发，短 wing 不应放在事件读出低点之上，优先看 **$28.50 或更低**，若开盘已接近 $28.66，则把短 wing 下移到 **$27.50-$28.00** 区间。

2. **HSCEI put-spread 的近端行权价建议锁定 -2%，即约 8,700 点，而不是 -3.5% 的 8,600 点。**  
   HSCEI 2026-05-08 收于 **8,889.07**，-2% 为 **8,711**，按 HKEX 短期期权 **100 点**行权价间距，落到 **8,700**；-3.5% 为 **8,578**，落到 **8,600**。如果这是保护性 put-spread，8,600 作为近端太远，会漏掉第一段 2%-3% 的下跌；8,600 更适合作为价差远端或低预算尾部版本。

## 关键数据与执行换算

| 项目 | 最新可核验基准 | 换算 | 建议执行点 |
| --- | ---: | ---: | --- |
| KWEB spot | $29.55（2026-05-08 20:41 GMT） | -3% = $28.66 | 不用 $28.66 当唯一触发；D 列同时触发后，短 wing 选 $28.50 或更低 |
| HSCEI close | 8,889.07（2026-05-08） | -2% = 8,711；-3.5% = 8,578 | 近端选 8,700；8,600 留给远端或尾部预算 |
| HSCEI 行权价间距 | 5,000-20,000 点区间短期期权为 100 点 | 8,711 -> 8,700；8,578 -> 8,600 | 便于直接报价 |

## 为什么 KWEB wing 要等 D 列确认

- **KWEB 这周是事件密集而不是单纯价格缺口交易。** KWEB 官方 factsheet 显示，截至 2026-04-30，前六大持仓为 Tencent **9.62%**、Alibaba **9.33%**、PDD **8.58%**、Meituan **7.28%**、NetEase **6.12%**、JD.com **4.98%**，合计 **45.91%**；其中 JD.com 将于 **2026-05-12** 美股盘前发布 Q1，Alibaba 和 Tencent 都在 **2026-05-13** 发布/举行业绩会。仅看 -3% 跳空，容易把“事件前降杠杆/ADR 折价/隔夜流动性”误判为基本面读出。  
- **期权市场已经在给事件溢价。** KWEB 期权链显示整体 call IV **51.6%**、put IV **51.1%**，2026-05-15 到期 IV **66.4%**；2026-05-15 的 $30 put 报价约 **0.75/1.05**、delta **-0.578**，说明前端波动已不便宜。1x2 ratio 多卖一份下行期权，若只因 -3% gap 追着设 wing，风险是卖在 skew 最陡、事件尚未证伪的位置。  
- **实务处理：预设价格，不预设触发。** 今天可把 KWEB -3% 的 $28.66 写入执行表；真正下单条件仍应是“D 列事件读出 + KWEB/核心 ADR/HK 互联网权重同步走弱”。若 D 列未触发，即便 KWEB gap -3%，也只保留观察或小尺寸 delta hedge，不建议完整挂出 1x2 的短 wing。

## HSCEI put-spread：锁 -2% 的理由

- **HSCEI 上一完整交易日没有进入恐慌状态。** 2026-05-08，HSI 跌 **0.87%** 至 26,393.71，HSCEI 只跌 **0.34%** 至 **8,889.07**，HSTECH 跌 **0.36%** 至 5,102.79。用 -3.5% 的 8,600 做近端，等于把保护起点放在已发生显著二次下跌之后。  
- **HKEX 产品结构支持 8,700 直接执行。** HSCEI 短期期权在 5,000-20,000 点区间行权价间距为 **100 点**，且有日盘和夜盘交易时段；8,700 是自然近端。  
- **组合角色更清楚。** 我建议把 **8,700** 做 near strike，远端视预算放 **8,400/8,300**；若团队只需要低成本尾部凸性，才把 **8,600** 提升为近端，并在备注中明确“不是第一段保护”。

## 建议给交易台的口径

- KWEB：`D列事件读出同步触发后设 wing；$28.66 只是 -3% 参考位，不是单独触发。若触发，短 wing 不高于 $28.50；若开盘已在 $28.66 附近，短 wing 下移到 $27.50-$28.00。`
- HSCEI：`put-spread near strike 锁 8,700（-2%），8,600（-3.5%）仅作为远端或尾部版近端。`

## 需要跟进

- 2026-05-12 20:00 HKT：JD.com Q1 call 后更新 D 列读出。  
- 2026-05-13 19:30-20:00 HKT：Alibaba、Tencent 读出后再确认 KWEB 1x2 是否完整执行。  
- 下单前向 vol desk 要一次 KWEB 2026-05-15/05-22 put wing 的 live skew，以及 HSCEI 8,700/8,400 与 8,700/8,300 的净 premium。

## 来源

- KWEB 期权链与价格：Investing.com，KWEB 2026-05-15 options，2026-05-08 20:41 GMT，价格 $29.55，$30 put 报价和 delta。https://www.investing.com/etfs/kraneshares-csi-china-internet-options  
- KWEB 期权 IV：Quantisnow，KWEB options，整体 call IV 51.6%、put IV 51.1%、2026-05-15 IV 66.4%。https://www.quantisnow.com/options/KWEB  
- KWEB 持仓与组合数据：KraneShares KWEB factsheet，数据截至 2026-04-30。https://kraneshares.com/resources/factsheet/kweb_factsheet.pdf  
- HSCEI/HSI/HSTECH 2026-05-08 收盘：Xinhua，HSCEI 8,889.07，HSI 26,393.71，HSTECH 5,102.79。https://english.news.cn/20260508/c1ef4b2b383e486686db3e6f67a45524/c.html  
- HSCEI options on futures 合约与行权价间距：HKEX factsheet，5,000-20,000 点短期期权行权价间距 100 点。https://www.hkex.com.hk/-/media/HKEX-Market/Products/Listed-Derivatives/Equity-Index/Hang-Seng-Index-%28HSI%29/oof/HKEX_HSCEI-OOF_factsheet_en.pdf  
- JD.com 业绩日：JD.com IR，Q1 2026 于 2026-05-12 美股盘前发布，20:00 HKT 电话会。https://ir.jd.com/zh-hant/news-releases/news-release-details/jdcom-report-first-quarter-2026-financial-results-may-12-2026  
- Alibaba 业绩日：Alibaba IR，2026-05-13 美股盘前发布，19:30 HKT 电话会。https://www.alibabagroup.com/en-US/document-1986236561993236480  
- Tencent 业绩日：Tencent IR，2026-05-13 20:00 HKT 2026 Q1 results announcement。https://www.tencent.com/en-us/investors
