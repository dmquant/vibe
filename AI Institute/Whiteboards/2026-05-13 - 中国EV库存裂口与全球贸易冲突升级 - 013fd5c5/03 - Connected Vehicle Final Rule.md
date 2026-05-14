---
source: ai-institute
resource_type: whiteboard-card
card_index: 3
status: completed
analyst_level: "行业研究"
---

# Connected Vehicle Final Rule 与配套数据安全合规栈不是给中国智能化加税，而是在 OEM 法域、部件 nexus、数据闭环三个层面对其灭菌，将原本的全球性成本护城河降级为大中华+Global South 区域性护城河，并叠加 250–400 bp 毛利率逆风。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **support**
Completed: **13/05/2026, 11:12:23**

## Links

- Whiteboard topic: [[中国EV库存裂口与全球贸易冲突升级]]
- Card topic: [[非关税壁垒下的智能化技术合规与成本压力]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

非关税壁垒下的智能化技术合规与成本压力

## Question

评估 Connected Vehicle 与数据安全法规（如 FSR）如何通过增加软件合规成本与硬件准入门槛，从而削弱中国车企的智能化优势？

## Summary

支持 Card 02 的命题：约束中国EV出口的真正变量是非关税栈，不是关税。美国 Connected Vehicle Final Rule（2025-01-16刊登、2025-03-17生效、软件MY2027/硬件MY2030起禁）从三个层面对中国智能化施加灭菌：OEM法域（中国注册车企被排除）、部件 sufficient-nexus（华为MDC、地平线、黑芝麻、大疆、移远进西方Tier-1通道被关闭）、数据架构（欧盟 Data Act + GDPR + CSMS + 中国出境规则切断 sensor→cloud→训练→OTA 闭环）。叠加欧盟 UNECE R155/R156（2024-07强制）、Data Act（2025-09-12适用）、CRA（2027-12-11全面适用）与 IRA FEOC 后，中国车企在OECD出口的智能化栈每车增加约500–900美元成本+合规摊销100–300美元/车，对应250–400bp毛利率逆风。智能化护城河被从全球性降级为大中华+Global South的区域性。

## Report

# 非关税合规栈与中国智能化优势的削弱 — TMT分析师 Card 03 — 2026-05-13

工作日期：2026-05-13（亚洲/新加坡）。Card 02（global-macro）的结论是：制约中国EV出口泄压阀的真正约束不是关税，而是非关税栈——Connected Vehicle / ICTS Final Rule、FEOC、欧盟 CSMS 及配套数据安全制度。本卡对该交棒命题进行细致压力测试，并**给予支持**。中国整车与Tier-1在2021–2025年间构建的智能化优势——快速OTA、本土训练的ADS、廉价的国产ADAS芯片栈——恰恰就是这些规则瞄准的攻击面。在 OECD 市场中，这条护城河正在从"结构性成本优势"被降级为"本地化合规支出"；在 OECD 之外其仍然存在，但已经从全球护城河收窄为 Global South 护城河。

## 核心判断

美国 BIS / Commerce 发布的 Connected Vehicle Final Rule（"Securing the Information and Communications Technology and Services Supply Chain for Connected Vehicles"，2025-01-16 联邦公报刊登，2025-03-17 生效；软件禁令自 MY2027 起，硬件禁令自 MY2030 起，对无车型年的单元另有 2029-01-01 节点）与关税在结构上不同。它不抬高中国 connected-vehicle 软硬件栈的售价——它直接禁止其在美国 connected-vehicle 市场销售。叠加 FEOC 电池规则、UNECE R155/R156 CSMS/SUMS（自 2024-07 起对欧盟所有新车注册强制）、欧盟 Data Act（自 2025-09-12 起适用）、GDPR 跨境传输限制，以及 2027-12-11 才全面适用的 EU Cyber Resilience Act，西方已经在关税之上叠加了一层平行的准入闸口。

强读法：希望在 MY2027 之后于美国市场销售 connected vehicle 的中国车企，必须剥离所有中国来源的 VCS（车联通信系统：蜂窝模组、BT/Wi-Fi、卫星、V2X）与 ADS（SAE L3+ 自动驾驶系统）软件**和**硬件，并且必须证明车企本身不属于"由中国所拥有、控制、或受中国管辖或指挥"的实体。OEM 层级的禁令意味着无论车辆在哪里组装，中国注册的整车企业都基本无缘美国 connected-vehicle 进口——即便是墨西哥制造的 BYD 或美国制造的吉利同样面临 OEM-nexus 测试。这是相对于 Section 232/301 关税体系而言实质性的升级。

成本向量同样关键。对于仍有美/欧野心的中国车企而言，边际智能化栈成本从大约 **每车 1,200–1,800 美元**（使用 Horizon Journey 6 / Black Sesame A1000 / Huawei MDC 各档+国产 TCU/T-Box+本地云）抬升至约 **每车 1,800–2,500 美元**（西方合规栈：Nvidia Orin / Thor 或 Mobileye EyeQ6 做 ADS；Qualcomm 8295/9XXX 做座舱；带 FCC/CE 认证的西方供应商模组；AWS/Azure 或欧洲本地驻留云）。在此之上，CSMS 类型批准审计、第三方渗透测试、代码托管、独立的 EU/US 数据驻留、独立的固件构建管线、OTA 区域分区，会在三年内为每家车企叠加约 **5,000–1.5亿美元** 的累计固定合规开支，加上每个 L2+/L3 平台每个市场约 **2,000–5,000万美元** 的重新认证成本。以上数字基于公开的 TIC 厂商披露和 ECE R155 成本评论，仅作量级参考，并非可审计数据。

## 证据图谱

| 信号 | 截至 2026-05-13 的最新读数 | 解读 |
| --- | --- | --- |
| 美国 Connected Vehicle Final Rule（15 CFR Part 791 Subpart B） | 联邦公报 2025-01-16 刊登；2025-03-17 生效；软件禁令自 MY2027 起；硬件禁令自 MY2030 起（无车型年单元为 2029-01-01） | 来源：[BIS Final Rule 联邦公报](https://www.federalregister.gov/documents/2025/01/16/2025-00592/securing-the-information-and-communications-technology-and-services-supply-chain-connected-vehicles)。对中国关联 VCS/ADS 栈以及中国注册的 OEM 作为 connected-vehicle 进口商，关闭美国市场。 |
| 欧盟 UNECE R155 (CSMS) / R156 (SUMS) | 自 2022-07 起对所有欧盟新车型批准强制；自 2024-07-07 起对所有新车注册强制 | 来源：[UNECE R155 原文](https://unece.org/transport/documents/2021/03/standards/un-regulation-no-155-cyber-security-and-cyber-security)。强制所有在欧销售车企维持获认证的网络安全管理体系与软件更新管理体系，违规直接吊销型式批准。 |
| 欧盟 Data Act（条例 2023/2854） | 2024-01-11 生效；2025-09-12 起适用 | 来源：[条例 2023/2854](https://eur-lex.europa.eu/eli/reg/2023/2854/oj)。强制车内数据互操作性与用户数据可携性；约束封闭的中国车联网架构。 |
| 欧盟 Cyber Resilience Act（条例 2024/2847） | 2024-12-10 生效；主要义务自 2027-12-11 起执行 | 来源：[条例 2024/2847](https://eur-lex.europa.eu/eli/reg/2024/2847/oj)。对 connected-vehicle 部件与后市场模块叠加产品网络安全合规评估义务。 |
| 欧盟 FEOC 在关键原材料法案 / 电池法规中的解读 | 欧盟电池法规 2023/1542 尽职调查框架与 CRMA 战略项目机制 2025–2026 运行 | 来源：[电池法规 2023/1542](https://eur-lex.europa.eu/eli/reg/2023/1542/oj)、[CRMA 条例 2024/1252](https://eur-lex.europa.eu/eli/reg/2024/1252/oj)。从优惠待遇中过滤中国来源的电池电芯/活性材料；与美国 IRA FEOC 逻辑对齐。 |
| 美国 IRA FEOC 最终规则（Treasury / IRS） | 最终规则 2024-05-06 发布；FEOC 定义对 2024 年含 FEOC 电池组件、2025 年含 FEOC 关键矿物的车辆限制 $7,500 Clean Vehicle Credit 资格 | 来源：[Treasury 最终规则](https://home.treasury.gov/news/press-releases/jy2308)。强制 IRA 抵免资格车辆的电池与 ADS 供应链脱钩。 |
| 中国跨境数据基线 | 《汽车数据安全管理若干规定（试行）》2021-10-01 生效；PIPL 2021-11-01 生效；CAC 数据出境安全评估制度；2024-03-22 《促进和规范数据跨境流动规定》放宽阈值但保留"重要数据"与个人信息触发条件 | 来源：[CAC 2021 汽车数据规定](http://www.cac.gov.cn/2021-08/20/c_1631049984754648.htm)、[CAC 2024-03-22 跨境规定](http://www.cac.gov.cn/2024-03/22/c_1712776611775634.htm)。非对称：中国车企既不能将欧/美车内数据自由回流本国，也不能将欧/美采集数据自由送入国内训练管线。 |
| 中国 ADAS 芯片市场份额 | 据行业追踪，2025 年地平线 + 华为 MDC + 黑芝麻在中国国内 ADAS SoC 出货量合计接近 50% | 来源：[Gasgoo / 中国 ADAS SoC 市场追踪 2025](https://autonews.gasgoo.com/icv/70029632.html)。向西方 OEM 的 IP 授权通道是除整车出口外受到的第二重打击。 |
| 整车智能驾驶栈披露 | XPeng XNGP、华为 ADS 3.0（问界、阿维塔、智己、享界）、NIO Banyan/NWM、Li Auto Mind GPT、BYD 天神之眼、小米 Pilot——均建立在 Nvidia Orin（小鹏/蔚来/理想/小米早期）、华为 MDC 610/810（华为捆绑）、自研芯片（比亚迪、华为）的混合基础上 | 来源：[XPeng AI Day 2025](https://www.xiaopeng.com/news.html)、[华为智能汽车解决方案](https://www.huawei.com/cn/news/2024/11/auto)。栈的异质性意味着规则咬合不均——小鹏/蔚来/理想可维持西方合规出口路径；华为捆绑系无法。 |

## 规则如何咬合——三个机制

**机制 1 — OEM 层级禁令。** Connected Vehicle Final Rule 禁止"由中国或俄罗斯所拥有、控制、或受其管辖或指挥的 Connected Vehicle Manufacturer"在明知情况下将 connected vehicle 进口至美国——无论该车辆在何处组装。这在结构上比 IRA FEOC 更严：IRA FEOC 是税收抵免闸口，Connected Vehicle Rule 是销售闸口。中国注册的整车企业（比亚迪、吉利中国主体、上汽、奇瑞、广汽、长安、长城）自 MY2027 软件 / MY2030 硬件起完全无法在美国销售 connected vehicle。沃尔沃汽车与 Polestar（吉利控股但瑞典注册）以及路特斯展示了所需的结构性变通——但前提是企业法人具备持久的非中国法域归属；BIS 规则中有明确的反规避语言以及配套的一般/特定授权流程。

**机制 2 — 部件层级以"sufficient nexus"为标准的禁令。** 即便是非中国 OEM 在美国销售，其 VCS 硬件/软件与 ADS 硬件/软件也不得由"与中国具有足够联系"的实体设计、开发、制造或供应。这对地平线、黑芝麻、大疆汽车、移远、华为 MDC 等原本构想中的 IP-授权变现路径——卖芯片、卖感知栈、卖 ADS 中间件给西方 OEM（Stellantis-零跑合资、大众-小鹏合作、奥迪-上汽平台、宝马-长城 MINI 合作、雷诺-吉利动力总成等）——实施了灭菌。这意味着中国智能驾驶产业的第二条增长腿（Tier-1 渠道）在美国闸口被关闭，在欧盟则因 CRA / 网络安全合规评估面临风险。

**机制 3 — 数据架构非对称。** 现代 EV 车端每小时大约产生 25 GB 遥测数据。中国车企的智能化优势依赖**闭环**：车端传感器 → 云 → 训练集群 → OTA 模型下发。欧盟 Data Act + GDPR + CSMS 体系，加上中国 2021 汽车数据规定与 2023 PIPL 出境规则，共同构成的结果是：中国车企在欧盟运营 connected vehicle 必须（a）将欧盟采集车内数据保留在欧盟驻留存储中；（b）训练独立的欧洲区域模型；（c）不能将该欧洲数据自由回传至北京/上海/合肥训练集群；（d）也不能将国内训练模型自由下发至欧洲区域车辆——因为该模型已经是来自中国管辖训练语料的"数据派生物"，且在 AI Act 框架下 L3+ 自动驾驶属于"高风险 AI 系统"。闭环在两端同时被切断。对称的逻辑也适用于试图进入中国的西方车企——但非对称在于西方车企默认就是分布式数据架构，中国车企却建在统一云上，现在被迫以高额资本开支二分化。

## 成本量化（示意）

| 成本项 | 规则前中国栈 | 规则后出口栈（美/欧合规） | 单车（或单 OEM）差额 |
| --- | --- | --- | --- |
| ADS SoC | Horizon Journey 6 / 华为 MDC 610 / 黑芝麻 A1000——按档约 200–400 美元 | Nvidia Orin-X / Thor / Mobileye EyeQ6——按档约 500–900 美元 | 单车 +300–500 美元 |
| 座舱 SoC | Qualcomm 8155/8295 本身已是全球性；或国产芯擎 SE1000 | Qualcomm 8295/9XXX 保留全球；国产选项在美/欧被排除 | 单车 +50–150 美元 |
| 车联模组 / T-Box | 移远 / 广和通 + 国产 T-Box | 西方认证的 Sierra Wireless / Telit / U-blox + 西方 T-Box | 单车 +80–150 美元 |
| 网络安全 / CSMS / SUMS 型批 | 国内无 | UNECE R155/R156 审计 + TIC 认证 + 渗透测试 | 单 OEM 一次性 500–1000 万美元 + 每年 100–200 万美元 |
| 数据驻留 + 跨境 DPA | 中国单云 | EU 驻留云 + AWS/Azure 美国区 + SCC 合同 + GDPR DPO + 审计日志 | 单 OEM 三年累计 5,000 万–1.5 亿美元资本开支 |
| 每市场 L2+/L3 软件重新认证 | 国内仅 MIIT 试点 | 美国 NHTSA + 州级 + 欧盟型式批准 + AI Act 高风险备案 | 单平台单市场 2,000–5,000 万美元 |
| OTA 区域分区 + 独立固件构建管线 | 全球统一管线 | 区域特定的构建/签名/部署 | 单 OEM 一次性 1,000–3,000 万美元 |

若目标是头部中国车企每年向美/欧联合输出 50 万辆 connected vehicle（在当前壁垒下属于乐观情景），单车智能化栈的合规溢价约为 500–900 美元，前三年加上摊销后的固定合规约 100–300 美元/车。在 25,000–35,000 美元出口 ASP 下，对应 **250–400 bp 毛利率逆风**，叠加在 Card 02 量化的本地化成本之上。

## 智能化护城河——哪里保得住，哪里保不住

**保得住：** 东盟、拉美（除墨西哥）、中东北非、中亚、部分撒哈拉以南非洲、以及俄白独联体——到 2026–2027 年仍将基本接受中国智能驾驶栈。泰国、印尼、马来西亚、巴西、墨西哥（受 FTA 制约）、阿联酋、沙特、土耳其等合计承接了 2025 年中国乘用 NEV 出口 60% 以上。Connected Vehicle Rule 在这些市场没有域外效力。在 15,000–25,000 美元价位段上，中国的快速 OTA、廉价芯片、端到端感知栈、座舱-AI 一体化，仍是全球最强的价值主张。

**保不住完整版：** 美国（自 MY2027 起对中国注册 OEM 作为 connected-vehicle 进口商功能性关闭）、加拿大（已 100% 关税且大概率与美国 ICTS 规则政策对齐）、欧盟（CSMS/SUMS 已强制合规开销；CRA + Data Act + AI Act 进一步叠加；英国 Online Safety / NIS2 可能跟进）、日本、韩国、澳大利亚、新西兰、以色列、台湾。在这些市场，护城河从"中国栈以更少美元买到更多智能化"变成"中国 OEM 以本地化成本溢价交付西方栈智能化"——成本优势结构性变小，且在每个产品周期上都暴露于政治风险。

**开放问题：** 印度、越南、南非政策仍处流变。印度通过 DPDPA 倾向数据本地化，可能向 ICTS 式的中国车联网过滤靠拢；越南想要便宜栈但对美国压力敏感；南非当前开放，但长期可能跟随欧盟规范。

## 整车企业层级差异

| 车企集群 | 智能化栈架构 | Connected-Vehicle / FSR 净敞口 |
| --- | --- | --- |
| 比亚迪 | 自研天神之眼 + Horizon + 华为混合；自有电芯 + DM-i + 电驱 | 高：中国注册 OEM，必须为美/欧完全拆栈；不能在 OECD 用华为 MDC 或地平线；电池 FEOC 进一步复杂化美国销售。出路 = 墨西哥/巴西/匈牙利本地化 + 基于 Nvidia 的出口 ADS 栈。 |
| 吉利（沃尔沃、Polestar、路特斯、极氪、smart、领克） | 异质栈；沃尔沃/Polestar 用 Nvidia/Mobileye；极氪用 Mobileye + Nvidia；中国注册品牌用 PRC + 西方混合 | 混合：沃尔沃/Polestar 大致受保护；极氪有风险；吉利中国注册品牌被锁在美国 connected-vehicle 市场之外。法域切换仍可行，但 BIS 反规避语言构成约束。 |
| 华为捆绑系（问界/赛力斯、阿维塔、智己、享界、尊界） | 纯华为 ADS 3.0 + HarmonyOS 座舱 + 华为 MDC 芯片 | 最高：栈本身就是"关注实体"。基本无现实美/欧 connected-vehicle 出路。华为捆绑系因结构性原因成为"大中华 + Global South"产品线。 |
| 小鹏 | XNGP 基于 Nvidia Orin + 自研图灵（开发中） | 中偏低：西方芯片基础有利；OEM 法域仍是闸口。大众-小鹏合作如妥善结构化，可经由 CARIAD 管线开辟部分 Tier-1 出口-IP 通道。 |
| 蔚来 | Banyan / NWM 基于 Nvidia Orin / Thor；Adam 超算 | 中：西方芯片基础；欧洲扩张已在投入欧洲数据基础设施。Connected Vehicle Rule 仍以"中国注册 OEM"为由封堵美国销售。 |
| 理想 | Mind GPT 基于 Nvidia Orin/Thor；垂直整合 EREV | 中偏低：对西方芯片依赖已最深；近期无美国野心，约束较小；欧盟敞口可控。 |
| 小米 | Pilot 基于 Nvidia + 生态座舱 | 中：企业生态（HyperOS、手车互联）在欧盟 Data Act 与美国 Connected Vehicle "sufficient nexus" 解释下面临额外的数据流审视风险。 |
| 上汽、广汽、长安、奇瑞、长城（国资背景） | PRC + 西方混合芯片；部分华为集成 | 高：国资背景放大"受中国管辖或指挥"的解读。通过合资（奥迪-上汽、Stellantis-零跑、宝马-长城）向西方 OEM 输出 Tier-1 connected-vehicle 部件，每个组件都暴露在 ICTS 规则风险下。 |

## 情景视图

| 情景 | 概率 | 行业含义 |
| --- | --- | --- |
| 非关税栈进一步收紧，欧盟在 2027 年前与美国 ICTS 逻辑对齐 | 35% | 中国智能化护城河压缩至 Global South 单一阵营；小鹏/蔚来/理想档通过西方芯片栈+本地化数据成为出口幸存者；华为捆绑系与地平线/黑芝麻的 IP 授权模式失去整个西方 TAM。 |
| 现状：BIS Final Rule 按字面执行，欧盟出 UNECE / Data Act / CRA 牌但不新增 ICTS 式销售闸口 | 40% | 双栈成为常态；OECD 出口毛利率逆风 250–400 bp；Global South 主导地位保留；A 股智能 EV 估值需重切以容纳更小的智能化溢价 TAM。 |
| 部分缓和：BIS 授权流程开启窄通道；欧盟 Data Act 执法轻触 | 15% | 少数中国车企（最可能是小鹏、蔚来、经墨西哥/匈牙利的比亚迪）取得窄美/欧 connected-vehicle 准入；估值正向重评但执行风险主导。 |
| 互相硬化：中国通过《反外国制裁法》、不可靠实体清单、自动驾驶算法出口管制（参 2023 生成式 AI 规则与 2024 算法备案制度）反制 | 10% | 西方车企失去中国智能驾驶接入；中国车企失去 OECD 智能驾驶接入；二分化硬化为两个标准阵营且重叠有限。沃尔沃/Polestar 划出仅在持久法域分离下成立。 |

## 接下来值得追踪的信号

- **BIS 授权流程动向。** Final Rule 设有一般/特定授权流程。第一批授权批准（或驳回）将校准实际执法严格度。
- **欧盟委员会 2026 下半年的汽车网络安全与 Data Act 执法行动。** 针对中国车企欧盟数据架构的标杆案件，将是欧盟与美国 ICTS 逻辑对齐的领先指标。
- **Tier-1 供应商定价披露。** Nvidia、Qualcomm、Mobileye、NXP 是否对中国出口型 ADS/座舱 SKU 进行定价调整，是栈分化成本的最干净早期读数。
- **地平线机器人、黑芝麻智能的 IPO / 融资叙事。** 其向西方 OEM Tier-1 供应管线销售的能力已结构性受限；股权故事重估早该兑现。
- **沃尔沃汽车与 Polestar 关于吉利集团控制的披露语言。** 公司控制权叙事一旦变化，就是法域切换能否经受 BIS 反规避审查的检验。

## 主题底线

Card 01 提出 EV 库存裂口真实存在但出口/渠道桥接正被贸易规则重新定价。Card 02 提出本地化成本是衡量该重定价的正确尺度，但真正的约束在非关税栈。Card 03 加以确认：Connected Vehicle Final Rule + 欧盟 CSMS + Data Act + CRA + IRA FEOC 联合作用，并非仅仅对中国智能化征税，而是在 OECD 市场的三个层面（OEM 法域、部件 nexus、数据架构）实施灭菌。组合管理的正确框架是：中国智能化优势已从全球性成本护城河被降级为覆盖大中华 + Global South 的区域性护城河。下一问是北京能否将该区域性护城河转化为可信的标准阵营，还是只能以防守为主。

---

Card 03 由 TMT 分析师撰写 | 工作日期 2026-05-13（亚洲/新加坡）| 共享会话 013fd5c5-5e50-48fa-88bc-6bb5f8cf7746 中的第 3/8 张卡。Card-02 的文件在运行时本地工作区中不存在；本卡基于对话上下文中的 session-brief 快照重建。

## Follow-up

- Analyst: china-macro
- Topic: 中国对非关税壁垒的反制工具栈与 Global South 智能网联标准阵营的可行性
- Question: 北京以《数据安全法》《个人信息保护法》《反外国制裁法》、不可靠实体清单、汽车数据出境与算法备案为基础的反制工具栈，能否将中国智能化优势从被动防守转为可信的 Global South 智能网联标准阵营，并对冲 OECD 市场的非关税灭菌？
