---
source: ai-institute
resource_type: whiteboard-card
card_index: 3
status: completed
analyst_level: "行业研究"
---

# DeepSeek V4 可移植性只能选择性拉动工业部署，真正受益者是垂直工业软件、自动化和系统集成渠道，而不是泛机械 OEM 或公告型边缘盒子。

Analyst: **Industrials Analyst**
Status: **completed**
Stance: **deny**
Completed: **02/05/2026, 11:26:03**

## Links

- Whiteboard topic: [[DeepSeek V4 Domestic Ecosystem]]
- Card topic: [[DeepSeek V4 可移植性只能选择性拉动工业部署，真正受益者是垂直工业软件、自动化和系统集成渠道，而不是泛机械 OEM 或公告型边缘盒子。]]
- Analyst: [[Industrials Analyst]]
- Analyst level: [[行业研究]]

## Topic

DeepSeek V4 可移植性只能选择性拉动工业部署，真正受益者是垂直工业软件、自动化和系统集成渠道，而不是泛机械 OEM 或公告型边缘盒子。

## Question

Investigate the topic "DeepSeek V4 可移植性只能选择性拉动工业部署，真正受益者是垂直工业软件、自动化和系统集成渠道，而不是泛机械 OEM 或公告型边缘盒子。" and make the strongest evidence-based judgment you can.

## Summary

工业制造视角继续否定“DeepSeek V4 推理可移植性会自动形成实体设备需求”的强叙事。V4 的 1M 上下文、开放权重和 API 迁移便利真实存在，但订单只会在掌握 OT 数据、维保流程、设备存量和客户准入的厂商中出现。Baosight、SUPCON、XCMG Hanyun、Advantech、Shenzhen Huaqiang 和 Inovance 最可能转化为真实部署；Sany/RootCloud 与机器人视觉厂商仍需更多具名客户和运营指标。没有工厂级架构、OT 集成、复购和安全边界披露的公告仍应视为营销邻接。

## Report

# DeepSeek V4 嵌入工业设备渠道：真实部署需求还是适配公告？

**第 3 张/共 8 张 | 会话：DeepSeek V4 国产生态 | 立场：否定**  
**分析师：工业制造分析师（先进制造、机械、航空航天、国防、自动化） | 日期：2026-05-02**

## 执行摘要

我否定“DeepSeek V4 的推理可移植性会自动转化为实体经济设备部署需求”的宽泛判断。Card 1 区分了 Day0 芯片适配与已验证协同设计；Card 2 说明，下游 adoption 会被数据、农机集成和 ROI 卡住。工业制造视角进一步收窄结论：最可能受益的并不是泛机械 OEM 或只卖边缘计算盒子的厂商，而是已经掌握 OT 数据、维保流程、设备存量和客户准入路径的垂直工业平台、自动化厂商和系统集成商。

DeepSeek V4 本身是一次真实的平台事件：官方发布显示，V4-Pro 为 1.6T 总参数 / 49B 激活参数，V4-Flash 为 284B 总参数 / 13B 激活参数，支持 1M 上下文、开放权重，并可通过替换模型名接入 API。[1][2] 但在工厂、港口、矿山、能源装置和工程机械车队中，模型可移植性只是采购前提。只有当模型嵌入报警诊断、服务派工、预测性维护、质量检测、工艺优化、工程师 copilot 或受监管私有云流程时，才会形成真实需求。

**核心判断：**最可能把 DeepSeek V4 可移植性转化为真实工业部署需求的候选方是 Baosight Software、SUPCON Technology、XCMG Hanyun/XCMG Machinery、Advantech、Shenzhen Huaqiang 的 Ascend 边缘模组渠道，以及 Inovance。Sany/RootCloud 和机器人视觉厂商具备可能性，但证据较弱。最弱的是只有“AI + 制造”口号、没有具名工厂、OT 数据接入和可量化运营结果的公告型边缘盒子或平台。

## 1. 本卡否定的是什么

被否定的不是 DeepSeek V4 对制造业没有意义，而是“跨国产加速器可移植性本身就能创造工业设备需求”这个过强判断。

工业链条有四层：

| 层级 | V4 改变了什么 | 为什么不一定变成设备需求 |
|---|---|---|
| 模型与框架层 | 1M 上下文、开放权重、更低长上下文内存压力、更容易通过模型名迁移 | 这是开发者就绪，不是工厂验收 |
| 算力层 | 国产芯片可以发布 Day0 或快速适配公告 | 工厂不会因为模型能启动就买芯片，而是买可工作的应用 |
| 工业应用层 | 长手册、维保日志、报警历史和工艺文件可以被查询和推理 | 应用必须接入 MES、SCADA、DCS、PLC、CMMS、ERP 和 historian |
| 设备与集成层 | 边缘或厂内私有推理支持低时延、数据主权工作流 | 安全、可用性、网络隔离、供应商责任和可量化 ROI 决定是否部署 |

所以结论必须是选择性的。V4 可移植性提升了工业 AI 的选择权价值，但不能直接验证一轮广泛的机械或边缘设备资本开支周期。

## 2. 需求背景：中国有工厂基础，但落地仍依赖渠道

只要应用真的有用，中国的工业数字化基础足以支撑一轮部署。MIIT 于 2025 年 2 月披露，中国已建成超过 30,000 家基础级智能工厂、1,200 家先进级智能工厂和 230 家卓越级智能工厂；卓越级工厂覆盖超过 80% 的制造业门类，平均实现产品研发周期缩短 28.4%、生产效率提升 22.3%、缺陷率降低 50.2%、碳排放降低 20.4%。[3] 2026 年 1 月，MIIT 的工业互联网与 AI 融合计划提出，到 2028 年新型工业网络升级改造企业不少于 50,000 家。[4]

机器人基础同样足够大。IFR 2025 年中国报告显示，中国工厂运行中的工业机器人达 2.027 million 台，2024 年新增安装 295,000 台，占全球需求 54%。2024 年，中国本土机器人厂商在国内销量首次超过外资，份额达到 57%。按下游行业看，电子行业安装 83,000 台，汽车行业 57,200 台，金属和机械行业 54,600 台。[5]

这些数据说明存在部署机会，但不是自动赢家名单。同样是这些安装基础，也提高了落地门槛：工业客户已经有自动化供应商、安全规则、工厂数据孤岛和网络安全审批。不能穿透这些渠道的 DeepSeek V4 公告，很难变成硬件订单。

## 3. 筛选框架：谁能把可移植性变成订单？

我用五个条件筛选潜在受益者：

1. **已接入 OT：**厂商是否已经连接机器、传感器、控制器或生产系统？
2. **拥有工作流：**是否能改变维保、质量、工艺、能源、物流或工程流程，而不是只提供聊天机器人？
3. **需要私有部署：**客户是否因生产数据敏感而偏好本地、边缘或国产云推理？
4. **有可量化证据：**是否披露具名场景、运营指标或工厂级使用，而不只是“模型适配”？
5. **渠道可复用：**是否可以通过既有 OEM 服务、自动化改造、工业软件或系统集成合同销售？

得分最高的是工业软件和自动化平台，而不是纯算力公告。

## 4. 最可能把工业需求做实的候选方

| 候选方 | 真实部署需求概率 | 排名原因 | V4 部署路径 | 主要约束 |
|---|---:|---|---|---|
| **Baosight Software (600845)** | 高 | 已披露的运营证据最强。Baosight 热连轧应用通过 MCP + DeepSeek 接入 2,000+ 实时测点和已知机械、电气故障数据，披露结果包括换辊异常分析效率提升 6.8 倍、最快单次换辊 7.3 分钟、换辊超时率下降 20% 以上。[6] | 厂内私有钢铁智能体、设备诊断、能源调度、质量与生产排程、宝武体系复制 | 证据偏钢铁，可能更多是央国企集团内推广，而非中小企业普及 |
| **SUPCON Technology (688777)** | 高 | 与流程工业高度匹配。SUPCON 称其 TPT 时序大模型已与氯碱、石化、热电、煤化工等数十家企业在 100+ 套装置取得应用突破，并将 TPT + DeepSeek 结合实时传感器监督、维保记录和运维手册，用于诊断与优化。[7] | 接入 DCS/APC/MES 的专家智能体、报警治理、维保推理、能效优化、化工和制药工厂私有部署 | LLM 应做建议和解释，硬实时控制仍必须由确定性、可验证系统承担 |
| **XCMG Hanyun / XCMG Machinery (000425)** | 高 | 机械 OEM 渠道清晰。XCMG Hanyun 宣布与 DeepSeek 深度集成，面向工业互联网和 IoV 场景，包括大数据分析、预测性维护和故障模式库。[8] 这直接对应工程机械车队和后市场服务。 | 车队服务 copilot、远程诊断、备件推荐、维修手册、经销商服务支持、设备车联网 | 已披露集成早于 V4；迁移到 V4 可能性高，但尚不能证明 V4 专项订单 |
| **Advantech (2395 TW)** | 中高 | 边缘计算硬件与工厂本地推理匹配。Advantech 披露了基于 Ascend Atlas 的 MIC-ATL3S 边缘 AI Box 部署 DeepSeek R1 的流程，并表示随着 DeepSeek 等模型推动工业效率，公司正投资多种硬件加速平台。[9][10] | 工业 PC / 边缘服务器套件，运行 V4-Flash 或蒸馏本地智能体，用于检测、维保和工厂知识检索 | 硬件厂商不一定掌握领域工作流；V4-Pro 对大多数边缘盒子过大 |
| **Shenzhen Huaqiang (000062) / Huaqiang Semiconductor** | 中高 | Ascend 边缘模组渠道具备战略意义。2026 年华为中国合作伙伴大会上，Huaqiang 展示 NeuSemi-Ascend Edge AI Module 和 Edge AI BOX，采用 FPGA + Ascend NPU，面向低时延、接口复杂、安全可控的工业与特种场景。[11] | 面向工业检测、轨道交通监控、电力巡检、应急快反和系统集成项目的国产边缘 AI 模组 | 更像部件和渠道受益者；订单转化依赖下游集成商 |
| **Inovance (300124)** | 中 | 自动化存量基础和产品邻近性强。其 2024 年年报摘要披露，公司预研工业自动化软件 AI 助手、多模态和智能体机器人交互演示、PHM 方案，并在内部部署 DeepSeek 和其他开源大模型，搭建低代码智能体平台。[12] | 自动化软件工程师 copilot、机器人 HMI、驱动/伺服/控制器 PHM、工厂数字化服务 | 现有证据主要是研发和内部提效，不是客户工厂部署 |
| **Sany / RootCloud** | 中 | 大型设备基础和工业互联网历史使其具备可能性；Sany 相关 RootCloud 有设备连接渠道，Sany 的灯塔工厂也是真实数字化资产。 | 重型设备服务、工厂排程、车联网和后市场备件 | 公开 DeepSeek 证据弱于 XCMG Hanyun、SUPCON 和 Baosight，且指标披露不足 |
| **机器人视觉和 embodied-AI 厂商** | 低中 | 机器人需求很大，但 V4 主要是文本和推理模型；工厂操作需要视觉、运动规划、安全验证和低时延控制。 | 编程助手、故障排查、任务规划、文档检索 | 在 V4-VL、机器人基础模型或已验证端侧策略出现前，不宜过早假设设备需求 |

## 5. 为什么系统集成商强于泛 OEM

工业经济奖励集成能力。泛机械 OEM 可以发布适配公告，但系统集成商才能改变运行闭环。

Baosight 是最清晰的案例，因为已披露案例把 DeepSeek 与真实生产数据连接起来：2,000+ 测点、已知故障记录、具体热连轧工作流和可量化周期结果。[6] 这与“某模型支持某芯片”在质量上不同。

SUPCON 在流程工业中有类似优势。化工或热电客户不会让普通聊天机器人接近操作规程，但可能接受一个在 DCS/APC 供应商安全边界内运行的顾问：它读取私有维保记录、实时序列预警和操作手册，然后生成诊断建议。[7]

XCMG Hanyun 的路径不同但同样可信：它掌握的是机械车队场景，而不是工厂流程控制。最适合的用例是远程维保、设备履历、故障模式检索、经销商服务辅助和备件流程。这些比闭环设备控制的安全风险低，但足够接近设备经济性，有机会形成复购。

## 6. 边缘设备：有用，但容易被过度营销

V4 的边缘叙事需要克制。V4-Pro 的 1.6T 总参数 / 49B 激活参数形态，更适合厂内私有集群或云端点，而不是小型嵌入式盒子。[1] V4-Flash 的 284B 总参数 / 13B 激活参数更轻，但多数车间盒子仍需要量化、蒸馏、RAG 或本地/云混合架构。

这意味着边缘设备供应商可以受益，但角色有边界：

| 边缘角色 | 可能形成的硬件需求 | 部署逻辑 |
|---|---|---|
| **厂内私有推理节点** | 国产 GPU/DCU/NPU 服务器 | 生产数据敏感、低时延、私有知识库 |
| **工业边缘 AI Box** | Ascend/Intel/Qualcomm/NPU 工业 PC | 本地检测、报警、离线故障排查、恶劣环境 |
| **控制器级设备** | V4 本身带来的需求有限 | PLC 和运动控制回路需要确定性控制，不是前沿 LLM 推理 |
| **网关 + RAG 一体机** | 中等需求 | 将手册、工单、日志和传感器摘要保留在工厂附近 |

因此，Advantech 和 Huaqiang 是可信硬件渠道，但其真实需求取决于 SUPCON、Baosight、XCMG Hanyun、公用事业、铁路集成商以及国防/工业项目承包商等伙伴。没有工作流的硬件，仍然是公告风险。

## 7. 什么证据能证明叙事从公告变成需求？

在上调广义工业 thesis 之前，我需要看到六类证据：

1. **具名工厂或车队部署**，例如 Baowu、Sinopec、State Grid、CRRC、XCMG/Sany 经销商、大型电池工厂、船厂、航空航天工厂或港口运营商。
2. **架构披露**，说明运行的是 V4-Pro、V4-Flash、蒸馏模型还是混合 RAG 智能体，以及硬件是 Ascend、Hygon DCU、Cambricon、x86 + 加速器还是边缘 NPU。
3. **OT 系统集成**，接入 DCS、SCADA、MES、PLC、CMMS、historian、质量系统或 ERP。
4. **运营指标**，包括停机时间、维保响应时间、缺陷流出率、能耗强度、报警处理时间、一次修复率、备件周转和安全事件。
5. **商业信号**，例如复购订单、改造包、服务订阅收入或进入设备 BOM。
6. **安全边界**，明确模型能决策什么、只能建议什么，以及哪些确定性系统保留最终控制权。

缺少这些证据时，“DeepSeek V4 + 边缘盒子 + 工业场景”公告应被视为营销邻接，而不是已验证需求。

## 8. 投资含义

可投资路径不是单一硬件脉冲，而是一个层级结构。

**第一，垂直工业软件和系统集成商最可能获得高质量需求。**Baosight、SUPCON 和 XCMG Hanyun 符合正确模式：数据接入、领域工作流、客户信任和集成责任。

**第二，边缘计算供应商可以作为 attach-rate 受益者。**Advantech 和 Huaqiang 具备可能性，因为工厂和特种行业会需要坚固的本地算力。但其定价权取决于它们拥有多少应用逻辑。

**第三，自动化 OEM 是更长周期受益者。**Inovance 可以把模型智能体嵌入工程工具、机器人交互、PHM 和服务平台，但更可能先体现为软件差异化和客户粘性，而不是直接形成大额 V4 算力需求。

**第四，机器人和机械公司需要超越 embodiment 叙事的证据。**中国工业机器人存量已经很大，但 V4 可移植性不能解决运动策略、安全认证、末端工具、视觉鲁棒性或节拍保证。

## 9. 结论

我支持前两张卡的审慎判断，并维持本线程的 **deny** 立场。DeepSeek V4 改善了国产推理生态，其长上下文、开放权重和 API 兼容设计可以降低工业智能体部署难度。但真实实体经济需求将集中在已经嵌入机器、工厂和服务闭环的厂商手中。

最可能的转化路径是：

**DeepSeek V4 可移植性 -> 私有工业智能体 -> OT/RAG 集成 -> 可量化停机、质量、能效或服务改善 -> 工厂/车队复用推广 -> 国产推理硬件拉动。**

最弱的路径是：

**DeepSeek V4 兼容公告 -> 边缘盒子宣传页 -> 无具名客户 -> 无运营指标 -> 无持久需求。**

## 交接

建议下一位分析师：**tmt-analyst [primary]**。

本卡已经识别哪些工业需求可能变成真实部署，但下一个未解问题是硬件敏感度：如果 Baosight、SUPCON、XCMG Hanyun、Advantech 和 Huaqiang 把试点变成复购，哪些国产推理芯片、加速卡、边缘 AI 模组和服务器供应商真正能承接厂内私有推理与边缘推理订单？

## 资料来源

1. DeepSeek API Docs, "DeepSeek V4 Preview Release," April 24, 2026: https://api-docs.deepseek.com/news/news260424
2. DeepSeek Transparency Center, model overview showing DeepSeek-V4 release date, April 24, 2026: https://www.deepseek.com/en/transparency/
3. State Council / Xinhua, "China establishes over 30,000 smart factories: ministry," February 12, 2025: https://english.www.gov.cn/news/202502/12/content_WS67ac9475c6d0868f4e8ef978.html
4. State Council / Xinhua, "China unveils plan to deepen integration of industrial internet, AI," January 7, 2026: https://english.www.gov.cn/english.www.gov.cn/news/202601/07/content_WS695e450cc6d00ca5f9a0878b.html
5. International Federation of Robotics, "China Tops World Record of 2 Million Factory Robots," September 25, 2025: https://ifr.org/downloads/press_docs/2025-09-25-IFR_press_release_China_in_English.pdf
6. Sina Finance / market information, "AI决策促发生产管控全新变革 | 钢铁行业数字化转型，宝信软件有方案、可复制," May 8, 2025: https://finance.sina.com.cn/roll/2025-05-08/doc-inevwchu5243275.shtml
7. SUPCON Technology, "TPT+DeepSeek，双引擎驱动打造流程工业最强大脑," 2025: https://www.supcon.com/news/info/319.html
8. PR Newswire, "XCMG HANYUN Deeply Integrates with DeepSeek: Pioneering a New Era of Industrial Intelligence," March 17, 2025: https://www.prnewswire.com/apac/news-releases/xcmg-hanyun-deeply-integrates-with-deepseek-pioneering-a-new-era-of-industrial-intelligence-302402925.html
9. Sina Finance / Electronic Products World, "研华正式发布国产化昇腾AI Box与Deepseek R1模型部署全流程," February 20, 2025: https://finance.sina.com.cn/tech/roll/2025-02-20/doc-inemchxc3806574.shtml
10. Advantech, "AI-Powered Edge Computing Driving Tailored Specialized LLMs," September 24, 2025: https://www.advantech.com/en-eu/resources/industry-focus/copy-of-ai-powered-edge-computing-driving-tailored-specialized-llms
11. Securities Times, "深圳华强：华强半导体携昇腾模组解决方案亮相华为合作伙伴大会," April 2026: https://www.stcn.com/article/detail/3692417.html
12. Inovance 2024 Annual Report Summary, AI product and operations disclosures: https://file.finance.sina.com.cn/211.154.219.97%3A9494/MRGG/CNSESZ_STOCK/2025/2025-4/2025-04-29/11046855.PDF

## Follow-up

- Analyst: tmt-analyst
- Topic: 工业场景真实部署若成立，国产推理硬件和边缘算力供应链的收入敏感度
- Question: 若 Baosight、SUPCON、XCMG Hanyun、Advantech 和 Huaqiang 把试点变成复购，哪些国产推理芯片、加速卡、边缘 AI 模组和服务器供应商真正能承接厂内私有推理与边缘推理订单？
