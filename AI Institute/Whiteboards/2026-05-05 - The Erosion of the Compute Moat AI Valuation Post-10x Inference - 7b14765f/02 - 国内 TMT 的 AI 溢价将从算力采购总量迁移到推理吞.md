---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "行业研究"
---

# 国内 TMT 的 AI 溢价将从算力采购总量迁移到推理吞吐、毛利留存和工作流变现能力。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **support**
Completed: **06/05/2026, 06:15:57**

## Links

- Whiteboard topic: [[The Erosion of the Compute Moat AI Valuation Post-10x Inference Efficiency]]
- Card topic: [[国内 TMT 的 AI 溢价将从算力采购总量迁移到推理吞吐、毛利留存和工作流变现能力。]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

国内 TMT 的 AI 溢价将从算力采购总量迁移到推理吞吐、毛利留存和工作流变现能力。

## Question

Investigate the topic "国内 TMT 的 AI 溢价将从算力采购总量迁移到推理吞吐、毛利留存和工作流变现能力。" and make the strongest evidence-based judgment you can.

## Summary

本卡支持上一卡结论，但把估值重构落到财务指标：10x 以上推理效率提升不会终结 AI capex，而是把估值单位从 purchased FLOPS 转向 monetized decisions。硬件环节应从订单和交付量转向利用率、折旧和软件生态；云服务在低价 token 与稀缺 AI 容量之间分化，MaaS/PaaS 的毛利质量优于纯算力租赁；垂直应用的核心是 AI 付费 attach rate、工作流续费和交易转化，而不是 chatbot MAU。

## Report

# AI 产业链的估值重构：从“算力为王”到“推理经济学”

**立场：支持。** 本卡支持 card-01 的核心判断：AI 护城河正在从原始算力稀缺转向智能性价比。但本卡把问题落到国内 TMT 企业的财务重估：硬件采购从“有卡就买”转向利用率纪律，云服务定价在低价 token 与稀缺 AI 托管容量之间分化，垂直应用的估值基础从“拥有模型”转向工作流变现。

## 核心判断

市场不应再把国内 AI 敞口简单视作同一个资本开支周期。推理效率已经把智能单价压到足够低，稀缺资产不再是“谁囤了最多 GPU”，而是谁能把更低单位成本转化为高频使用、付费工作流渗透和可防御的数据闭环。Stanford HAI 的 2025 AI Index 显示，达到 GPT-3.5 水平的推理成本在 2022 年 11 月至 2024 年 10 月期间下降超过 280 倍，硬件成本年降幅为 30%，能效年提升为 40%（[Stanford HAI 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report?sf225800101=1)）。DeepSeek-V3 则给出了更具中国语境的样本：671B 参数的 MoE 模型每个 token 只激活 37B 参数，完整训练仅需要 2.788M H800 GPU 小时（[DeepSeek-V3 technical report](https://arxiv.org/abs/2412.19437)）。

这并不意味着 AI 资本开支消失，而是估值溢价从“资本开支总量”转向“吞吐经济学”。Alibaba Cloud 可以披露 Cloud Intelligence 收入同比增长 36%，AI 相关产品收入连续十个季度三位数增长，但投资结论取决于 MaaS、PaaS 和智能体流量能否让分部 EBITA 增长快于折旧和硬件通胀（[Alibaba December-quarter 2025 results](https://data.alibabagroup.com/ecms-files/1532295521/e48e70a1-e5c8-40ac-bdd2-951ebcb36946/Alibaba%20Group%20Announces%20December%20Quarter%202025%20Results.pdf)）。Baidu 的 2025 年 AI Cloud Infra 收入约 RMB20 billion，同比增长 34%，AI Applications 收入超过 RMB10 billion，说明收入结构正在向正确方向移动（[Baidu FY2025 results](https://ir.baidu.com/news-releases/news-release-details/baidu-announces-fourth-quarter-and-fiscal-year-2025-results/)）。Tencent 2025 年 Business Services 收入高双位数增长，反映云服务和 AI 相关需求，同时 AI 也改善了广告定向和游戏参与度（[Tencent FY2025 results](https://www.prnewswire.com/apac/news-releases/tencent-announces-2025-annual-and-fourth-quarter-results-302717280.html)）。

## 三项财务重估

### 1. 硬件采购：估值指标从出货量转向利用率

对服务器 OEM、国产加速器、光模块、存储和数据中心集成商而言，一阶收入拉动仍然真实存在。中国云厂商在生产级推理上仍受容量约束，Alibaba Cloud 在 2026 年 4 月 18 日生效的 AI compute 和 CPFS 调价通知中，明确提到全球 AI 需求激增和供应链成本上升推高核心硬件采购成本（[Alibaba Cloud notice](https://www.alibabacloud.com/en/notice/notice_price_adjustment_for_ai_compute_and_storage_services_6ef?_p_lc=1)）。Kingsoft Cloud 是观察中型 AI 云平台的更直接样本：2025 年 Q4 收入同比增长 23.7% 至 RMB2.761 billion，AI gross billing 达 RMB926 million，但与 AI 服务器和网络设备相关的折旧摊销从 RMB343.1 million 升至 RMB741.4 million，毛利率同比降至 16.9%（[Kingsoft Cloud FY2025 results](https://www.sec.gov/Archives/edgar/data/1795589/000110465926034141/tm269536d1_ex99-1.htm)）。

因此，重估是双向的：

| 环节 | 旧估值视角 | 新推理经济学视角 | 需要跟踪的财务指标 |
|---|---|---|---|
| AI 服务器和加速器 | 订单和交付量 | 集群利用率、内存带宽、软件栈兼容性、每个生成 token 的电力成本 | 扣除组件通胀后的毛利率、存货周转天数、客户集中度 |
| 数据中心和存储 | 机柜数量和 capex 增长 | 推理调度、上下文缓存存储、低延迟网络 | 折旧压力相对于经常性服务收入的比例 |
| 国产芯片生态 | 国产替代溢价 | 性能功耗比和开发者采用度 | 云厂商和央国企工作负载的复购 |

这意味着，主要依赖一次性交付的硬件公司应给更低或受限的估值倍数；而嵌入经常性推理负载的供应商可以获得更高质量的倍数。关键负面意外不是“AI 需求结束”，而是 10x 效率提升让客户推迟恐慌式采购，并迫使供应商证明利用率经济账。

### 2. 云服务定价：token 通缩与稀缺 AI 容量涨价并存

模型 API 价格体现通缩一面。DeepSeek 当前价格显示，`deepseek-v4-flash` 的 cache miss 输入价格为 $0.14/1M tokens，输出价格为 $0.28/1M tokens；`deepseek-v4-pro` 在 2026 年 5 月 31 日前 75% 折扣期内为输入 $0.435、输出 $0.87（[DeepSeek pricing](https://api-docs.deepseek.com/quick_start/pricing/)）。Alibaba Cloud Model Studio 显示，中国大陆部署的 `qwen-turbo` 输入价格为 $0.044/1M tokens，非思考输出为 $0.087/1M tokens，思考输出为 $0.431/1M tokens；更大的开源 `qwen3.5-397b-a17b` 在中国大陆 0-128K tokens 区间为输入 $0.172、输出 $1.032（[Alibaba Cloud Model Studio pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing)）。

但云账单并不只有 token。Alibaba Cloud 2026 年 4 月通知指向核心硬件采购成本上升，并对部分 AI compute 和 CPFS 产品调价。由此形成云估值的主要分化：

| 云收入类型 | 价格方向 | 利润率含义 | 估值含义 |
|---|---|---|---|
| 原始 GPU 和 AI 算力租赁 | 稀缺容量涨价，续约时波动 | 利好收入，但折旧和电力成本构成压力 | 只有利用率高、合同期限改善时 EV/sales 才能扩张 |
| 基础模型 API token | 结构性下行 | 若作为商品售卖，毛利承压 | 若不能绑定工具、安全、数据库和部署能力，倍数应下调 |
| MaaS 和智能体平台 | 随工作流价值稳定或上行 | token COGS 下降时利润率更好 | 留存和付费转化可见时享受更高倍数 |
| 私有云 AI 部署 | 前置项目收入加经常性运维 | 可扩展性低于公有云，但粘性更强 | 按订单质量估值，而不是只看 AI 标签 |

一个简单敏感性可以说明市场为何从“AI 收入”转向“AI 毛利”。若某负载每月生成 1T output tokens，按照 DeepSeek-R1 发布时 $2.19/1M tokens 的输出价格，月账单为 $2.19 million；按当前 `deepseek-v4-flash` 输出价格 $0.28/1M tokens，月账单为 $0.28 million。每月 $1.91 million 的差额可能由应用厂商获取、让利给客户，也可能被竞争消耗。云厂商只有把这部分差额转化为托管容量、上下文缓存、安全、数据治理和工作流编排，才能获得可持续溢价。

### 3. 垂直应用：重估付费工作流，而不是 chatbot MAU

推理成本下降会把 AI 从演示推入高频工作流。最受益的是拥有数据、分发和交易闭环的国内软件和互联网平台：

| 垂直场景 | 10x 推理成本下降后的变现模式 | 需要评估的公司 | 核心 KPI |
|---|---|---|---|
| 办公和生产力 | AI seats、文档额度、企业套件、知识库检索 | Kingsoft Office/WPS、DingTalk、WeCom | AI 付费 attach rate、续费提升、每付费用户处理文档数 |
| 金融和企业软件 | 工作流自动化、合规审核、RPA 加智能体执行 | Hundsun、Yonyou、Kingdee | 合同 ACV 提升、gross retention、实施毛利率 |
| 消费互联网和本地生活 | 智能体驱动下单转化、广告定向、从搜索到交易 | Alibaba、Tencent、Baidu、Meituan-style platforms | 每次 AI 交互带来的 GMV 或广告 take-rate 提升 |
| 教育、医疗、工业 | 结果型订阅、行业 copilot、私有模型部署 | iFlytek、垂直 SaaS 厂商 | 受监管数据访问、复用频次、线下服务替代 |

Kingsoft 2025 年年报显示，office software and services 收入为 RMB5.929 billion，分部业绩为 RMB1.532 billion，WPS Office、WPS 365 和 WPS AI 属于核心 office software and services 业务（[Kingsoft 2025 annual report](https://ir.kingsoft.com/static-files/999c2fb6-9739-4c00-a3d7-ec00dc5430b6)）。这正是投资者更应偏好的财务形态：经常性软件收入中，token COGS 下降既可抬升毛利，也可支持更多使用量。Alibaba 的 Qwen app 在 2026 年 2 月超过 300 million MAU，约 140 million 用户完成首次 AI 驱动购物体验，但估值问题不是 MAU 本身，而是智能体执行能否提升广告效率、商家服务、即时零售 take rate 和用户留存（[Alibaba December-quarter 2025 results](https://data.alibabagroup.com/ecms-files/1532295521/e48e70a1-e5c8-40ac-bdd2-951ebcb36946/Alibaba%20Group%20Announces%20December%20Quarter%202025%20Results.pdf)）。

## 投资结论

最强的支持性结论是杠铃结构。一端配置能把稀缺 AI 基础设施成本传导进企业合约、同时把 token COGS 下降内化到打包服务中的云和平台龙头；另一端配置 AI 能提高付费使用、转化率或留存的垂直软件和互联网应用。对硬件和纯算力租赁要更挑剔：收入可以快速增长，但自由现金流、毛利率和折旧可能持续低于市场预期。

估值框架应这样调整：

| 商业模式 | 重估方向 | 原因 |
|---|---|---|
| 缺乏软件锁定的 AI 硬件交付 | 下调或封顶 | 10x 推理效率削弱“囤算力”逻辑，并提高订单周期性 |
| 高利用率 AI 云基础设施 | 选择性上调 | 稀缺容量和企业需求支撑定价，但必须监控折旧 |
| 与数据和安全集成的 MaaS/PaaS | 上调 | token 通缩变成 COGS 顺风，而不是收入通缩 |
| 垂直工作流软件 | 最可持续上调 | 私有数据、权限和流程集成比模型更难商品化 |
| 没有交易闭环的消费 AI chatbot | 下调 | MAU 容易补贴，变现难度高 |

一句话总结：10x 推理效率之后，中国 AI capex 故事没有结束，但估值单位从 purchased FLOPS 变成 monetized decisions。胜者不只披露 AI 收入增长，还要披露每项任务成本下降、付费转化提升、续费改善，以及可见的 EBIT 或自由现金流转化。

## 来源

- Stanford HAI, 2025 AI Index Report: https://hai.stanford.edu/ai-index/2025-ai-index-report?sf225800101=1
- Stanford HAI, 2026 AI Index Report: https://hai.stanford.edu/ai-index/2026-ai-index-report
- DeepSeek-V3 Technical Report: https://arxiv.org/abs/2412.19437
- DeepSeek API Models & Pricing: https://api-docs.deepseek.com/quick_start/pricing/
- Alibaba Cloud Model Studio Pricing: https://www.alibabacloud.com/help/en/model-studio/model-pricing
- Alibaba Cloud AI Compute & Storage Price Adjustment Notice: https://www.alibabacloud.com/en/notice/notice_price_adjustment_for_ai_compute_and_storage_services_6ef?_p_lc=1
- Alibaba Group December Quarter 2025 Results: https://data.alibabagroup.com/ecms-files/1532295521/e48e70a1-e5c8-40ac-bdd2-951ebcb36946/Alibaba%20Group%20Announces%20December%20Quarter%202025%20Results.pdf
- Tencent 2025 Annual and Q4 Results: https://www.prnewswire.com/apac/news-releases/tencent-announces-2025-annual-and-fourth-quarter-results-302717280.html
- Baidu Q4 and FY2025 Results: https://ir.baidu.com/news-releases/news-release-details/baidu-announces-fourth-quarter-and-fiscal-year-2025-results/
- Kingsoft Cloud Q4 and FY2025 Results: https://www.sec.gov/Archives/edgar/data/1795589/000110465926034141/tm269536d1_ex99-1.htm
- Kingsoft Corporation 2025 Annual Report: https://ir.kingsoft.com/static-files/999c2fb6-9739-4c00-a3d7-ec00dc5430b6

## Follow-up

- Analyst: offshore-strategist
- Topic: 港美股中国科技龙头的 AI 重估与资金流验证
- Question: 在 Alibaba、Tencent、Baidu、Kingsoft Cloud 等港美股标的中，市场是否已经把推理经济学带来的毛利分化和 capex 风险重新定价？南向资金、ADR 折价和相对美股云厂商的估值差是否支持继续看多？
