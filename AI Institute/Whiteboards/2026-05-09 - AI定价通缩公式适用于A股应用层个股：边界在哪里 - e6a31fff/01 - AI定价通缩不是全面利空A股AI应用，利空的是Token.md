---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "行业研究"
---

# AI定价通缩不是全面利空A股AI应用，利空的是Token转售型，利好或中性的是工作流嵌入型，因此Card06必须按收入单位和工作流锁定重新筛选。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **initial**
Completed: **09/05/2026, 09:11:28**

## Links

- Whiteboard topic: [[AI定价通缩公式适用于A股应用层个股：边界在哪里]]
- Card topic: [[AI定价通缩不是全面利空A股AI应用，利空的是Token转售型，利好或中性的是工作流嵌入型，因此Card06必须按收入单位和工作流锁定重新筛选。]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

AI定价通缩不是全面利空A股AI应用，利空的是Token转售型，利好或中性的是工作流嵌入型，因此Card06必须按收入单位和工作流锁定重新筛选。

## Question

Investigate the topic "AI定价通缩不是全面利空A股AI应用，利空的是Token转售型，利好或中性的是工作流嵌入型，因此Card06必须按收入单位和工作流锁定重新筛选。" and make the strongest evidence-based judgment you can.

## Summary

截至2026-05-09，结论是Card06在触发前必须重筛。DeepSeek V4价格显示推理成本已进入显著通缩区间，但影响分化：销售AI搜索答案、生成额度、通用内容或模型API的标的属于Token转售型，收入端会被降价传导侵蚀；嵌入办公、金融IT、建筑、ERP/OA、教育硬件和安全运营工作流的标的更能把低推理成本转化为毛利和使用量扩张。临时核心候选为688111、600570、002410；002230和300624需证明业务结构；601360的C端AI、300418、300364/603533类内容AI应剔出核心或限于战术仓位。

## Report

# AI定价通缩与A股AI应用篮子筛选 - 工作日期 2026-05-09

截至2026-05-09（Asia/Singapore），我支持在Card06触发执行前重新筛选AI应用篮子。当前工作区没有可读取的 `session-brief.md`、`analyst-catalog.json`、前序卡片报告或Card06成分文件，因此本卡根据提示中的会话快照重建背景，并对可能进入A股AI应用篮子的标的做临时筛选。核心结论很明确：推理成本18个月下降70-80%会改善所有应用公司的成本端，但如果公司主要是在转售模型输出、token额度、AI搜索答案或通用生成内容，收入端会被同步腐蚀；只有当AI嵌入客户工作流，收费单位是席位、流程、合规系统、专有数据层或任务完成结果时，毛利才更有防守性。

## 锚定证据

DeepSeek官方V4价格表已经体现了通缩状态。`deepseek-v4-flash` 的价格为每1M cache-miss输入token $0.14、每1M cache-hit输入token $0.0028、每1M输出token $0.28；`deepseek-v4-pro` 在2026-05-31 15:59 UTC前享受75%促销价，cache-miss输入为 $0.435、输出为 $0.87，而划线原价分别为 $1.74 和 $3.48。同一页面还说明，cache-hit输入价格自2026-04-26 12:15 UTC起降至发布价格的十分之一，并提示价格可能变化。DeepSeek缓存文档同时说明，缓存是best-effort，通常数小时到数天后清理，并且只匹配可复用前缀。来源：[DeepSeek Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing)、[DeepSeek Context Caching](https://api-docs.deepseek.com/guides/kv_cache)。

这改变了应用层定价公式：

`可持续AI毛利 = 工作流支付意愿 + 专有数据/流程锁定 - 通用推理成本传导 - 获客成本`

如果公司卖的是“AI答案”或“AI额度”，token成本下降会被客户和竞争对手同时看到；如果公司卖的是办公、ERP、金融IT、法律/政务、建筑、安防运营或教育硬件中的工作完成，便宜推理反而是毛利改善和使用量扩张的抓手。

## 临时分类

| 代码 | 公司 / AI暴露 | 分类 | 判断依据 | Card06动作 |
| --- | --- | --- | --- | --- |
| 601360 | 三六零 - C端 `Nano AI` 搜索、AI办公、浏览器/搜索流量 | C端AI属于Token转售暴露；B端数字安全属于工作流嵌入 | 2025年度行动方案披露，大模型服务覆盖浏览器、搜索、`Nano AI`、办公、文库、智能硬件和数字安全等场景。C端AI搜索更接近模型路由和流量业务，答案本身难以收费；安全运营侧有数据和流程壁垒。来源：[三六零2025年度行动方案披露](https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12277641&stockid=601360)。 | 不应作为纯AI应用代理买入；只有Card06主题明确为 `AI+security` 时才保留。 |
| 300418 | 昆仑万维 - Skywork/Tiangong、AI软件、AI短剧、Opera AI-agent浏览器 | Token转售型 | 2025年收入同比增长44.78%至RMB8.20bn，但归母净亏损RMB1.59bn；AI Software Technology收入RMB204.83mn，AI/内容商业化仍依赖生成输出、订阅、流量和投放。子公司公告显示天工智力2025年1-9M收入RMB96.34mn、净亏损RMB384.15mn。来源：[StockAnalysis 300418分部数据](https://stockanalysis.com/quote/she/300418/financials/metrics/)、[巨潮天工智力担保公告](https://static.cninfo.com.cn/finalpage/2025-12-09/1224859212.PDF)。 | 退出核心篮子，除非触发条件是短线AI beta；仓位上限应明显下调。 |
| 300624 | 万兴科技 - AIGC创意软件、视频/文档/图像工具 | 混合型，偏Token转售暴露 | 2025H1收入RMB760.00mn、净亏损RMB52.81mn，视频创意类和实用工具类毛利率仍高达91.74%和93.88%，但核心品类成本增速快于收入增速。AI生成额度和通用创意输出容易被低价模型替代；编辑器工作流提供部分防守。来源：[万兴科技2025年半年度报告](https://static.cninfo.com.cn/finalpage/2025-08-29/1224612504.PDF)。 | 只有当篮子逻辑是创作者工作流软件时保留；不能按单纯AIGC输出逻辑配置。 |
| 300364 / 603533 | 中文在线 / 掌阅科技一类数字内容与阅读AI，如在Card06中出现 | Token转售型 | 如果AI故事主要是内容生成、阅读助手或IP重组，产品单位接近生成文本/媒体。推理成本下降会扩大供给并削弱价格，除非公司具备独家IP或强付费分发。 | 在收入证据显示付费工作流留存前，剔出核心篮子。 |
| 002230 | 科大讯飞 - Spark大模型、教育硬件、开发者生态、企业解决方案 | 混合型 | 2025H1业绩预告预计收入和毛利同比增长15-20%，H1归母净亏损RMB200-280mn，研发投入约占收入20%；基于讯飞星火的AI硬件618销售额同比增长42%，Spark开发者超过1.52mn。模型/API层会商品化，但教育硬件、语音数据、课程和企业交付更具嵌入性。来源：[科大讯飞2025年半年度业绩预告](https://static.cninfo.com.cn/finalpage/2025-07-11/1224131420.PDF)。 | 可保留但必须做收入结构折扣；要求证明硬件/行业方案毛利不被模型降价稀释。 |
| 688111 | 金山办公 - WPS AI、WPS 365、办公智能体 | 工作流嵌入型 | WPS AI嵌入文档、表格、演示、协作和WPS 365。金山集团2025年办公软件及服务收入RMB5.9287bn，同比增长16%；688111相关公开报道显示2025年WPS 365收入同比增长64.93%，WPS AI国内月活超过80.13mn，同比增长307%。来源：[金山软件2025年报](https://ir.kingsoft.com/static-files/999c2fb6-9739-4c00-a3d7-ec00dc5430b6)、[金山办公2025年业绩报道](https://finance.sina.com.cn/roll/2026-03-26/doc-inhshxnu0278008.shtml)。 | 核心候选。若商业化仍按席位/工作流收费，推理降本应转化为毛利和功能使用量提升。 |
| 600570 | 恒生电子 - 金融IT、券商/基金/银行流程 | 工作流嵌入型 | 2025年收入预告同比下降12.08%至约RMB5.786bn，但归母净利润预计同比增长17.83%至约RMB1.229bn，经营现金流同比增长22.91%，体现业务结构优化和成本纪律。金融IT高度合规、强数据/流程属性，客户买的是系统可靠性，不是token。来源：[恒生电子2025年业绩预告](https://static.cninfo.com.cn/finalpage/2026-01-27/1224950640.PDF)。 | 若估值和流动性通过Card06规则，可作为核心或防守型AI应用持仓。 |
| 002410 | 广联达 - 建筑造价、设计、项目管理、行业AI平台 | 工作流嵌入型 | 2025年报报道显示收入约RMB6.068bn，同比下降2.17%，净利润RMB405mn，同比增长61.77%。2025H1披露AI服务调用量超过40mn次，行业AI平台模型服务消费达14.3bn tokens。建筑造价/项目数据和SaaS流程让token成本成为投入项，而不是出售品。来源：[广联达2025年报报道](https://cj.sina.com.cn/articles/view/7935425109/1d8fcfa5502001eda8?froms=ggmp)、[广联达2025年半年度报告](https://static.cninfo.com.cn/finalpage/2025-08-26/1224565561.PDF)。 | 核心候选，但下游模型必须使用RMB6.068bn收入，不能误写为RMB60.68bn。 |
| 600588 / 688369 / 603039 | 用友网络 / 致远互联 / 泛微网络等企业软件，如进入篮子 | 工作流嵌入型，但有执行风险 | ERP/OA/协同智能体天然嵌入企业数据和审批流。用友2025年收入报道为RMB9.182bn，净亏损收窄至RMB1.389bn；致远互联2025年AI相关订单报道超过RMB200mn。风险主要是交付周期和亏损修复，而非token价格腐蚀。来源：[用友网络2025年业绩报道](https://finance.sina.com.cn/roll/2026-04-18/doc-inhuwssn0435104.shtml)、[致远互联2025年报报道](https://caijing.chinadaily.com.cn/a/202604/21/WS69e71462a310942cc49a89c9.html)。 | 只有通过盈利和回款过滤后才纳入；不能因为“企业软件”标签就高配亏损品种。 |

## Card06执行前的重筛规则

Card06在触发前需要重筛。我建议设置六个硬门槛：

1. 收入单位：优先席位、模块、流程、项目、设备或托管服务收费；惩罚token、点数、答案、生成图/视频或纯API收费。
2. 客户锁定：要求有专有文档、企业数据、合规流程、已安装软件、硬件渠道或运营工作流。
3. 毛利证据：管理层需要证明AI使用量放大没有造成毛利率明显稀释。如果推理成本下降70-80%后毛利仍走弱，大概率是在补贴流量或补贴输出。
4. 缓存和架构：重复提示、可复用文档上下文、本地/行业RAG、稳定工具链的产品能吃到缓存经济；一次性创意生成受益较少。
5. 分发质量：付费企业席位和已安装生产力入口优于广告流量、app下载和社交热度。
6. 财务纪律：AI子公司仍亏损、且对外融资或担保披露显示单元经济未验证的标的，应剔除或大幅限仓。

建议Card06结构：工作流嵌入型至少60%，混合型不超过30%，Token转售型只保留0-10%的短线beta仓位。如果真实Card06篮子主要由601360/300418/300624/300364这类暴露构成，应在执行前重建。

## 投资结论

“AI定价通缩公式”并不等于看空所有A股AI应用。它看空的是销售同质化模型输出的公司；对在粘性工作流中销售工作完成的公司则偏中性到利好。我的临时优先级如下：

- 核心工作流嵌入型：688111、600570、002410，以及通过盈利过滤后的600588/688369/603039。
- 混合型、需要证据：002230、300624。
- Token转售暴露或仅适合战术仓位：601360的C端AI搜索、300418、300364/603533一类内容AI标的。

下一张卡最适合交给 `ashare-strategist`：把本卡的TMT质量筛选转化为可执行的A股篮子权重、流动性约束、估值和拥挤度过滤，再决定Card06是否允许触发。

## 来源登记

- DeepSeek Models & Pricing: https://api-docs.deepseek.com/quick_start/pricing
- DeepSeek Context Caching: https://api-docs.deepseek.com/guides/kv_cache
- Kingsoft 2025 annual report: https://ir.kingsoft.com/static-files/999c2fb6-9739-4c00-a3d7-ec00dc5430b6
- Kingsoft Office 2025 results coverage: https://finance.sina.com.cn/roll/2026-03-26/doc-inhshxnu0278008.shtml
- iFLYTEK 2025 H1 pre-announcement: https://static.cninfo.com.cn/finalpage/2025-07-11/1224131420.PDF
- Hundsun 2025 performance pre-announcement: https://static.cninfo.com.cn/finalpage/2026-01-27/1224950640.PDF
- Wondershare 2025 semiannual report: https://static.cninfo.com.cn/finalpage/2025-08-29/1224612504.PDF
- Kunlun Tech segment data: https://stockanalysis.com/quote/she/300418/financials/metrics/
- Kunlun TianGong guarantee disclosure: https://static.cninfo.com.cn/finalpage/2025-12-09/1224859212.PDF
- 360 2025 action plan disclosure: https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12277641&stockid=601360
- Glodon 2025 annual report coverage: https://cj.sina.com.cn/articles/view/7935425109/1d8fcfa5502001eda8?froms=ggmp
- Glodon 2025 H1 report: https://static.cninfo.com.cn/finalpage/2025-08-26/1224565561.PDF
- Yonyou 2025 results coverage: https://finance.sina.com.cn/roll/2026-04-18/doc-inhuwssn0435104.shtml
- Seeyon 2025 report coverage: https://caijing.chinadaily.com.cn/a/202604/21/WS69e71462a310942cc49a89c9.html

元数据页脚：工作日期 2026-05-09 Asia/Singapore；卡片路径 `whiteboard/e6a31fff-769f-4626-95f5-22068a60931d/card-01/report.zh.md`；上游工作区文件缺失，已根据提示快照重建。

## Follow-up

- Analyst: ashare-strategist
- Topic: 将TMT质量筛选转化为Card06可执行A股篮子
- Question: 在剔除或限仓Token转售型标的后，Card06应如何设置权重、流动性门槛、估值上限和拥挤度过滤，才能在触发时避免买入定价腐蚀风险？
