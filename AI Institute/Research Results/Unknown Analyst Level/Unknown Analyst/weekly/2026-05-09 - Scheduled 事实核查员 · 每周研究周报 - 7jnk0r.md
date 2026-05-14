---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Scheduled: 事实核查员 · 每周研究周报

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

## 1. 文件完整性

锚定日期：shell `date +%Y-%m-%d` 返回 `2026-05-10`。上游文件均在工作区内，且大小均超过 200 bytes；未触发上游缺口恢复流程。

| 声明文件 | 工作区是否存在（是/否） | 备注 |
|---|---|---|
| `01_weekly_plan.md` | 是 | 11,561 bytes；已读取。 |
| `01_weekly_plan.en.md` | 是 | 12,009 bytes；已读取，用于双语一致性参照。 |
| `02_weekly_research.md` | 是 | 4,919 bytes；已读取。 |
| `02_weekly_research.en.md` | 是 | 5,277 bytes；已读取，用于双语一致性参照。 |

## 2. 数据一致性

| 抽查项 | 计划阶段表述 | 研究阶段表述 | QA 判断 |
|---|---|---|---|
| 覆盖窗口 | `2026-05-04` 至 `2026-05-08` | `2026-05-04 — 2026-05-08` | 一致。 |
| 运行/锚定日期 | `2026-05-10` | `2026-05-10 (Sunday)` | 一致。 |
| FOMC 时间 | S1 预设 `5/06–5/07`，并要求核对官方日历 | 研究稿称“本周无 FOMC 议息会议” | 方向上可接受：计划为待核验假设，研究稿完成了纠偏。需补链接；官方 Fed 2026 日历显示 `April 28-29` 后下一次常规会议为 `June 16-17`，5 月仅有 `FOMC Minutes` 于 `May 20` 发布。来源：[Federal Reserve FOMC calendar](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm)、[Federal Reserve May 2026 calendar](https://www.federalreserve.gov/newsevents/2026-may.htm)。 |
| Powell 任期 / Warsh 接任 | 计划仅要求跟踪 Fed 路径和 Powell 记者会 | 研究稿写 `May 15` Powell -> Warsh 交接 | 需要更严谨表述。Powell 主席任期于 `May 15, 2026` 结束有官方来源；Warsh 是参议院流程中的被提名人/待确认接任人，研究稿不应写成已无条件完成的事实。来源：[Federal Reserve Powell term notice](https://www.federalreserve.gov/newsevents/pressreleases/other20220523e.htm)、[Senate Banking nomination hearing](https://www.banking.senate.gov/hearings/04/14/2026/nomination-hearing)。 |
| 陆股通口径 | Q2 要求 `5 日净流入`，且节假日需列明 | 研究稿写 `5/6-5/8` 三个交易日北向净流入 `> 400 亿元` | 口径未对齐。若 5/4-5/5 因内地假期无交易，应在开篇节假日表中披露，并明确这是“三个实际交易日”而非五日序列。 |
| 恒生指数 | 计划要求核验 `Hang Seng Index weekly close 2026-05-08` | 研究稿列 `恒生指数 +2.39% / 26,393.71` | 研究稿给出数字但未给交易所或数据源链接；可进入后续稿，但必须补来源和取数时间戳。 |
| 可视化数量 | 计划建议 V1-V5，共 `3–5` 张候选图 | 研究稿只给 V1、V3、V4 三张底表，且 V2 行业图、V5 跨资产热力表缺失 | 数量下限勉强满足，但未覆盖计划中对 A 股行业归因最关键的 V2。 |

## 3. 逻辑链条

计划阶段的 6 个分析问题没有被研究稿均衡回答。Q1、Q2、Q3 有初步答案，但证据链偏薄；Q4 仅给出“Alphabet, Amazon 超预期 10% 以上”和 Nvidia、AMD 上调指引，没有公司级 EPS / revenue 表，也没有披露样本范围；Q5 将“科创再贷款”定为最重要政策，但缺少政策原文、实施日期、额度和受影响行业的同步行情；Q6 给出 3 个下周关注项，但未映射到具体数据发布日期、央行讲话日程或公司财报日历。

研究阶段实际只展开 S1-S3。S4 美股财报、S5 原油地缘在摘要和问答中出现，但没有独立议题小节；S6 外汇利率仅有 V3 底表，没有完整解释；S7 中国监管/产业政策和 S8 AI/半导体供应链没有按计划核查。由于计划要求最终确认至少 5 项、不超过 7 项主线，当前研究稿的议题覆盖不足。

叙事上，“AI 盈利释放 + 劳动力市场韧性”被定为全球风险资产主线，但研究稿没有把非农 `11.5万`、Big Tech 财报、DXY `97.91`、10Y `4.364%` 与指数涨幅放在同一证据链中。大中华部分也缺少行业贡献拆分，导致“科技股/科创再贷款驱动 A 股”的结论仍属于未充分支持的判断。

## 4. 表达与可读性

- 在研究稿开头增加“市场日历与休市说明”表，明确 5/4、5/5 是否为 A 股/港股休市日，并说明所有周度指标按几个实际交易日计算。
- 将“证据：Federalreserve.gov 公告；Investing 收益率监测”这类笼统来源改成可点击链接，并为每个关键数字标注来源、时间戳和币种/单位。
- 市场表现表中 `CSI300 --`、`SSE + (2-month high)` 不适合作为周涨跌幅字段；应统一填数值、缺失原因或删除该列。
- “美股再创新高”“布伦特冲破 126 美元/桶”“日均 > 3万亿”等标题级结论需要在正文紧随底表或引用，否则读者难以判断是事实、估算还是市场评论。

## 5. 修订建议

- 高优先级：补齐所有关键数字的来源链接和取数时间戳，尤其是 S&P 500 `+2.3%`、纳指 `+4.5%`、HSI `26,393.71`、北向 `> 400 亿元`、DXY `97.91`、10Y `4.364%`、布伦特 `126` / `110` 美元。
- 高优先级：按计划补充节假日核对，并把北向/南向资金流统一为“实际交易日”口径，避免“五日”和“三日”混用。
- 高优先级：补写 S4-S7 的独立小节，至少覆盖美股财报、外汇利率、大宗商品、中国政策四条主线；若 S8 无材料，应明确剔除理由。
- 中优先级：补充 A 股申万一级行业周涨跌与成交占比，完成 V2 底表，以支撑“科技/硬科技主线”的归因。
- 中优先级：重写 Fed 交接表述：区分“Powell 主席任期于 `May 15, 2026` 到期”“Warsh 提名/确认进度”和“政策路径预期”，不要把人事事件直接等同于政策方向变化。
- 中优先级：将下周前瞻扩展为日期化日历，列出美国 CPI/PPI、中国零售与工业增加值、Fed 官员讲话、重点财报的具体日期和待观察信号。

## 6. 总体评级

`needs-revision`。研究稿完成了基本日期窗口、部分数据抓取和初步叙事，但来源链、议题覆盖、行业归因和若干口径说明不足，尚不适合直接呈交 PM。

```json
{"follow_ups":[
  {"to":"global-macro","subject":"Fed transition and rates path verification","question":"For the 2026-05-04 to 2026-05-08 weekly package, verify the correct Fed event calendar, Powell chair-term end date, Kevin Warsh nomination/confirmation status as of 2026-05-10, and whether these facts changed market-implied 2026 rate-cut expectations. Please provide primary or high-quality source links and 3-5 key data points.","priority":"high"},
  {"to":"ashare-strategist","subject":"A-share attribution and Stock Connect flow reconciliation","question":"For 2026-05-04 to 2026-05-08, reconcile A-share trading holidays, CSI 300/SSE Composite weekly returns, SW Level-1 industry weekly returns, turnover concentration, and Northbound net inflow for the actual trading days. Please explain whether the 'Sci-Tech Re-lending' thesis is supported by sector and flow data.","priority":"high"}
]}
```
