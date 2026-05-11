---
source: ai-institute
resource_type: whiteboard-card
card_index: 6
status: completed
analyst_level: "权益策略"
---

# AI加A股杠杆、融券、解禁或流通供给语言不应默认归TMT；这类任务应按A股市场传导由`chief-strategist`主导。

Analyst: **A-Share Strategist**
Status: **completed**
Stance: **synthesize**
Completed: **02/05/2026, 17:08:17**

## Links

- Whiteboard topic: [[Mailbox routing rebalance for TMT analyst]]
- Card topic: [[AI加A股杠杆、融券、解禁或流通供给语言不应默认归TMT；这类任务应按A股市场传导由 chief-strategist 主导。]]
- Analyst: [[A-Share Strategist]]
- Analyst level: [[权益策略]]

## Topic

AI加A股杠杆、融券、解禁或流通供给语言不应默认归TMT；这类任务应按A股市场传导由`chief-strategist`主导。

## Question

Investigate the topic "AI加A股杠杆、融券、解禁或流通供给语言不应默认归TMT；这类任务应按A股市场传导由`chief-strategist`主导。" and make the strongest evidence-based judgment you can.

## Summary

本卡片支持“TMT语义兜底导致误路由”的主线，但补上A股市场结构层：若AI/半导体任务核心是上交所/深交所交易、融资融券、限售股解禁、自由流通盘、科创板/创业板流动性或A股风格轮动，应由`chief-strategist`主导，`tmt-analyst`只做行业机制协作。第2-3张卡片的80条样本、56条误分、70%误分率和12条美股科技/Mag 7误分仍是关键证据；第4张卡片的传导渠道规则应扩展到A股。

## Report

# A股策略综合：在TMT重平衡中加入上交所/深交所市场结构路由

## 执行摘要

我对前序研究做综合，并支持核心诊断：问题不是`tmt-analyst`天然应该高负荷，而是宽泛的AI/TMT语义正在充当默认兜底。第2张和第3张卡片显示，在**80**条抽样交接中，**56**条被误路由至`tmt-analyst`，误分率为**70%**，其中**12 of 80**属于更应由`offshore-strategist`处理的美股科技/Mag 7案例。[C1][C2] 第4张卡片进一步把美国AI监管和出口管制按传导渠道拆分：市场定价归`offshore-strategist`，政策制度归`global-macro`，两者同时触发时采用双负责人机制。[C3]

仍然缺失的是A股本土市场结构层。若AI、半导体、算力、云或平台类提示的核心问题是**上交所/深交所交易行为、融资余额、融券、限售股解禁、自由流通盘供给、科创板/创业板流动性、中国风格轮动或A股行业配置**，主责应为`chief-strategist`，`tmt-analyst`作为技术和行业机制协作者。A股微观结构是市场传导问题，不是TMT基本面问题。

工作区说明：现场检查发现`card-02`、`card-03`和`card-04`存在，但`session-brief.md`、`analyst-catalog.json`、`card-01`和`card-05`在文件系统中缺失。因此，我对缺失引用使用提示词提供的会话快照重建，对第2至第4张卡片使用本地文件。[C9]

## 判断

**立场：synthesize。**

我支持前序推理，但路由分类应从美国/全球拆分扩展为三类市场结构：

| 主要传导渠道 | 主责 | 协作者 | 路由规则 |
| :--- | :--- | :--- | :--- |
| 港美股上市市场定价、Mag 7、ADR、港股AI映射、美股科技周报 | `offshore-strategist` | `global-macro`、`tmt-analyst` | 按上市市场地域、估值和资金流意图主导。 |
| 美国政策制度、出口管制、对外投资、Entity List、盟友协调 | `global-macro` | `offshore-strategist`、`tmt-analyst`、窄口径`compliance-officer`审查 | 按政策传导意图主导。 |
| 上交所/深交所A股交易结构、融资余额、融券、限售股解禁、自由流通盘供给、科创板/创业板流动性、行业和风格轮动 | `chief-strategist` | `tmt-analyst`；仅当券商资产负债表或两融业务经济性成为核心时加入`financials-analyst` | 按本土市场微观结构和A股配置意图主导。 |
| 纯半导体、AI服务器、云收入、互联网变现、模型部署经济性 | `tmt-analyst` | 若提示中有明确价格、资金流、政策或解禁触发，再加入市场或宏观负责人 | 只有当交付物是行业基本面时，TMT才应主导。 |

这形成一个实操规则：**AI加A股杠杆或流通供给语言，并不默认等于TMT。** 除非提示明确询问公司或产业基本面，否则它是A股策略任务。

## 为什么A股市场结构会改变路由

上交所/深交所融资融券数据是市场状态变量。它们刻画杠杆、购买力、卖空可得性、强平风险压力和流动性参与度。上交所公布融资融券汇总数据，并将融资融券余额定义为融资余额加融券余量金额，其中融资余额与前日融资余额、本日融资买入额和本日融资偿还额直接相关。[C6] 深交所规则要求会员在每个交易日**22:00**前报送当日融资融券业务数据，包括融资买入额、融资偿还额、融资余额、融券卖出量、偿还量和融券余量等。[C7]

这些数据应影响路由归属。例如，“AI硬件A股上涨，同时融资余额扩张、融券下降”并不主要是在问芯片供给，而是在问杠杆资金是否拥挤进入主题，以及流动性风险是否上升。此时应由`chief-strategist`主导，`tmt-analyst`负责确认哪些股票是真实半导体/AI基础设施敞口。

交易制度变化也同理。**2026年1月14日**，上交所、深交所和北交所宣布将融资买入证券的最低融资保证金比例从**80%**提高至**100%**，适用于新开仓合约，存量合约及展期仍按原规定执行。[C8] 若提示问“这是否降低A股AI主题杠杆”，这是A股策略问题；若提示问“这是否改变券商两融业务经济性”，可能需要`financials-analyst`；不应只因提到AI股票就被TMT吸收。

## 限售股解禁也是策略触发器

限售股解禁和受限股份释放重要，是因为它们改变可交易供给、事件压力，以及创始人、创投、战略股东和IPO前股东的行为。对科创板和创业板科技股尤其如此，因为市场常把事件整体贴上“半导体”或“AI”标签，但真正的研究问题是自由流通盘扩张和供给压力。

上交所科创板材料明确讨论了锁定期以及锁定期届满后的减持安排，包括非公开转让和配售机制。[C4] 深交所材料也显示了上市和转板场景中的锁定安排，例如特定转板案例中，控股股东、实际控制人、董事、监事和高级管理人员所持股份有**12个月**的限制期。[C5] 具体解禁日历因发行人而异，但路由含义稳定：只要任务询问解禁规模、流通比例、供给压力、大宗转让或解禁后减持压力，就应由`chief-strategist`主导。

TMT应在归属明确后协作。例如，它可以区分真正的AI加速器供应链公司和宽泛“AI概念”公司。但某只人民币计价A股能否消化限售股释放，是A股流动性和配置判断。

## 本土路由规则

路由器应在第4张卡片提出的评分体系上加入A股策略层：

- **`chief-strategist` +3**：出现上交所、深交所、A股、科创板、创业板、沪深300、中证500、中证1000、融资余额、融资买入、融券、卖空余额、限售股解禁、受限股份释放、流通盘供给、大宗交易、换手率、涨停、北向A股配置、风格轮动、行业配置或本土风险偏好。
- **`offshore-strategist` +3**：出现Mag 7、美股上市、Nasdaq、ADR、港股双重上市、港股通映射、估值、离岸资金流或US Tech Weekly语言。
- **`global-macro` +3**：出现BIS、Treasury、出口管制、对外投资、Entity List、制裁、盟友协调、日本/EU协同、中美科技冲突、全球贸易或资本流限制。
- **`tmt-analyst` +2**：出现半导体供给、云收入、AI服务器、互联网平台变现、消费电子、AI模型部署或技术产品机制。
- **双负责人规则：** 如果`chief-strategist`和`tmt-analyst`同时得分，主责取决于用户要的交付物。价格/资金流/杠杆/解禁输出归`chief-strategist`；供应链或盈利输出归`tmt-analyst`。
- **合规规则：** `compliance-officer`审查限制清单、制裁筛查、披露和客户可操作性事项，但不应成为市场或政策分析的默认主责。

## 示例

| 示例交接 | 正确路由 |
| :--- | :--- |
| “AI服务器A股上涨且融资买入扩张，杠杆资金是否拥挤进入主题？” | `chief-strategist`主导；`tmt-analyst`协作 |
| “科创板半导体股票下月有大规模限售股解禁，供给压力如何？” | `chief-strategist`主导；`tmt-analyst`协作 |
| “2026年1月14日融资保证金比例从80%上调至100%，是否降低A股AI概念换手？” | `chief-strategist`主导 |
| “哪些国内芯片设备公司订单能见度改善？” | `tmt-analyst`主导 |
| “BIS HBM出口管制与A股半导体情绪：政策冲击加本土风险偏好” | 双负责人：`global-macro`负责政策制度，`chief-strategist`负责A股传导，`tmt-analyst`协作 |
| “某A股供应商存在Entity List敞口且涉及客户交易建议” | `global-macro`和`chief-strategist`负责研究；`compliance-officer`窄口径审查 |

## 交接建议

建议下一位分析师：`chief-quant`。

建议立场：`stress-test`。

理由：`chief-quant` [specialist] 现在适合介入，因为这条线索已经从定性路由诊断进入具体评分问题。我们已有80条样本测试的数字证据（**56**条误分、**70%**误分率、**12**条美股科技/Mag 7案例）、第4张卡片的传导渠道分类、第5张卡片提示快照中的合规边界，以及本卡片新增的融资融券和解禁类A股触发器。下一步应检验这些权重和双负责人阈值能否降低TMT误路由，同时不制造过多多负责人噪音。

## 引用

[C1] [第2张卡片报告，本地工作区](../card-02/report.en.md)：80条样本测试，56条误路由至`tmt-analyst`，误分率70%。

[C2] [第3张卡片报告，本地工作区](../card-03/report.en.md)：港美股策略压力测试，识别出12 of 80条美股科技/Mag 7项目更适合`offshore-strategist`。

[C3] [第4张卡片报告，本地工作区](../card-04/report.en.md)：针对`offshore-strategist`、`global-macro`和双负责人机制的传导渠道路由规则。

[C4] 上交所，[Q&A on SSE Releasing "SSE Detailed Implementation Rules for Shareholding Lessening by Shareholders of Companies Listed on SSE STAR Market through Non-public Transfer and Allotment (Draft)"](https://www.sse.com.cn/star/en/infodisclosure/newsrelease/c/c_20200414_5036765.shtml)，2020年4月14日。

[C5] 深交所，[Measures of Shenzhen Stock Exchange for Transferring the Listing of Companies on National Equities Exchange and Quotations to the ChiNext Board (Provisional)](https://www.szse.cn/English/about/news/szse/t20210301_584891.html)，2021年2月26日。

[C6] 上交所，[融资融券汇总数据](https://www.sse.com.cn/market/othersdata/margin/sum/)，访问日期2026年5月2日。

[C7] 深交所，[Margin Trading and Securities Lending](https://www.szse.cn/English/services/trading/marginTrading/)和[深圳证券交易所融资融券交易试点会员业务指南](https://www.szse.cn/disclosure/notice/general/t20060818_499669.html)，访问日期2026年5月2日。

[C8] 深交所，[Shanghai, Shenzhen, and Beijing Stock Exchanges Raise Minimum Margin Requirement for Securities Financing](https://www.szse.cn/English/about/news/szse/t20260127_618763.html)，2026年1月14日。

[C9] 2026年5月2日在`/Users/daoming/.agent-route/workspaces/sessions/1d9b7287-ae0f-4209-9d61-5946478542c1`进行的工作区检查：`card-02`、`card-03`和`card-04`存在；`session-brief.md`、`analyst-catalog.json`、`card-01`和`card-05`缺失，并根据提示词提供的会话快照重建。

## Follow-up

- Analyst: chief-quant
- Topic: TMT重平衡路由权重和双负责人阈值的量化压力测试
- Question: 在80条样本及新增A股融资融券、解禁触发器上，拟议的`chief-strategist`、`offshore-strategist`、`global-macro`、`tmt-analyst`权重能否显著降低TMT误分率，同时避免过度触发双负责人？
