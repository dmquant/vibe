---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "行业研究"
---

# 推理超级周期正在侵蚀NVIDIA的定价护城河，同时推高AI总资本支出底线，NVIDIA绝对营收增长但长周期垄断溢价面临压缩，TSMC CoWoS与HBM供应节点是近期确定性最高的防御型仓位。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **initial**
Completed: **06/05/2026, 09:00:57**

## Links

- Whiteboard topic: [[AI推理算力超级周期：需求结构性转变与半导体格局重塑（2026年）]]
- Card topic: [[AI推理算力超级周期：需求结构性转变与半导体格局重塑（2026年）]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

AI推理算力超级周期：需求结构性转变与半导体格局重塑（2026年）

## Question

2026年推理算力占比已升至AI总算力的三分之二，这一结构性转变如何重塑NVIDIA主导地位、华为Ascend的国内突破及超大规模云厂商资本支出节奏？

## Summary

推理工作负载已占2026年全部AI算力的三分之二（2023年仅三分之一），标志着AI半导体周期从训练主导转向推理主导的结构性拐点。NVIDIA数据中心营收达$1,937亿美元，仍占~80–90%市场份额，但推理商品化正侵蚀其定价护城河，AMD MI450凭借432GB HBM4赢得Meta $600亿美元级承诺，超大规模云厂商合计确认$7,250亿美元资本支出。在中国，华为Ascend 950PR以1.56 PFLOP FP4算力、750,000片目标出货量填补H20真空，ByteDance签约$56亿美元。TSMC CoWoS产能瓶颈（当前目标2026年底130,000片/月）和HBM高十几至低二十个百分点的合同涨价维持近期供应链定价权。核心判断：供应链节点近期风险收益比优于终端芯片厂商，后者面临效率指标主导的竞争侵蚀。

## Report

# AI推理算力超级周期：需求结构性转变与半导体格局重塑（2026年）

**分析师：** tmt-analyst | TMT行业分析师  
**任务：** ai_industry_tracker  
**日期：** 2026-05-06  
**立场：** 初始研究

---

## 执行摘要

2026年，推理工作负载已占全部AI算力的三分之二——较2023年的三分之一和2025年的约二分之一显著攀升。这一结构性拐点绝不只是利用率层面的统计数字，而是正在重写AI芯片市场的竞争规则。核心采购指标已从峰值FLOPS向FLOPS-per-watt（每瓦浮点运算）、latency-per-query（每次查询延迟）和cost-per-inference（单次推理成本）迁移，构建了与2023–2025年训练主导超级周期截然不同的竞争格局。NVIDIA仍持有约80–90%的AI加速器市场份额，但随着推理浪潮使性能层级趋于商品化，其结构性利润和份额压力正在积累。AMD的MI450正赢得真实的大客户牵引，超大规模云厂商正在加速自研芯片项目，而在中国市场，华为Ascend 950PR正在填补H20出口管制留下的真空。与此同时，2026年超大规模云厂商~$725B的资本支出周期正在挤压TSMC的CoWoS先进封装产能和HBM内存供应，短期内维持供应链定价权，但同时也抬高了长期产能过剩风险。

**核心判断：** 推理超级周期正在侵蚀NVIDIA的定价护城河，同时推高行业总资本支出底线——这是一个结构性分化的格局：NVIDIA绝对营收仍在增长，但其长周期垄断溢价面临压缩；供应链节点（TSMC CoWoS、HBM）则具备最清晰的近期风险收益比。

---

## 一、推理拐点：工作负载结构与市场规模

### 1.1 工作负载结构演变

| 年份 | 训练占比 | 推理占比 |
|------|---------|---------|
| 2023 | ~67%    | ~33%    |
| 2025 | ~50%    | ~50%    |
| 2026 | ~33%    | ~67%    |

这一结构性转变由两大相互强化的力量驱动：

- **AI Agent规模化落地**：随着2025年基础模型投资转化为生产工作负载，企业级和消费级AI Agent部署爆发式增长。单次推理调用的算力消耗远低于一次训练运行，但数十亿次日常Agent交互累积的查询量正以压倒性之势消耗算力总量。
- **物理AI兴起**：机器人、自动驾驶车辆及工厂车间系统需要在动作发生点执行推理，通常在边缘或混合架构下运行，而非依赖集中式数据中心。

### 1.2 市场规模

- 2026年AI推理芯片市场规模约为**$500亿美元以上**，以**32% CAGR**增速推进，预计至2032年达$1,670亿美元。
- 全球半导体总收入预计达**$1.29万亿美元**，首次突破万亿门槛；其中仅DRAM收入就预计近乎翻三倍，达**$4,186亿美元**，主要由HBM需求驱动。

---

## 二、超大规模云厂商资本支出：$725B与支出质量之辩

亚马逊、微软、Alphabet、Meta和Oracle五大超大规模云厂商在2026年Q1财报中确认，合计AI相关资本支出约**$7,250亿美元**，高于2025年指引区间$6,600–$6,900亿美元，显著超出年初市场预期。

### 2.1 支出结构转变

这一轮资本支出的关键分析视角不在于规模本身，而在于**支出结构的转变**：

- **训练基础设施**（用于基础模型训练的高内存带宽GPU）正被**推理优化部署**所补充乃至部分替代，后者优先考量整体拥有成本（TCO）效率。
- 超大规模云厂商正越来越多地将**自研ASIC**（Google TPU v5p、Amazon Trainium2、微软Maia 2）与Nvidia GPU并行部署，专门针对推理工作负载——其中软硬件协同设计可带来更优的单次推理成本。
- 采购对话已从"最大化算力峰值"实质性转向"在目标延迟下最小化每次查询成本"。

### 2.2 产能过剩风险

资本支出承诺的节奏再度引发"过度建设"讨论。若2026年下半年AI Agent货币化进程停滞，推理产能供给过剩可能引发利用率驱动的资本支出骤然收缩。需重点监测的信号是云厂商在业绩沟通中披露的**推理利用率**——当前仍维持高位，但尚未饱和。

---

## 三、NVIDIA：主导地位稳固，结构性压力累积

### 3.1 营收与市场份额

- NVIDIA数据中心业务在2026财年营收达**$1,937亿美元**，印证了其在训练主导阶段的GPU垄断优势。
- 当前AI加速器市场份额：**~80–90%**。
- 共识预期：至2026年底将降至**~75%**——原因并非绝对营收下滑，而是整体市场扩张速度快于NVIDIA自身增长。

### 3.2 结构性压力点

1. **推理商品化**：随着推理成为主导工作负载，NVIDIA在训练场景享有2–3倍价格溢价的性能层级变得更难防守。推理任务对内存带宽和浮点精度的要求低于训练，削弱了重HBM旗舰SKU的相对优势。
2. **自研芯片加速**：超大规模云厂商正快速将高度可预测、高频推理工作负载内化到自研芯片上，收窄了可量化GPU的潜在市场（TAM）。
3. **中国市场封锁**：H20出口限制（2025年4月生效，2025年7月部分解禁，2026年再度收紧）打乱了NVIDIA在华分销管道。H20被普遍认为不适合前沿模型训练；其在推理场景的竞争力也受到华为的直接挑战。
4. **软件护城河耐久性**：CUDA仍是主流推理软件栈，但华为Ascend工具链推出的CUDA兼容封装层，以及PyTorch、JAX、Triton等框架级抽象的普及，正在逐步降低迁移摩擦成本。

### 3.3 近期催化剂：Blackwell架构放量

NVIDIA的Blackwell（B200/GB200）在2026年上半年的产能爬坡仍是近期最关键的营收驱动力。TSMC的CoWoS封装瓶颈是主要供给制约；TSMC宣布的**2026年底前将CoWoS月产能提升至130,000片**（相较2024年底的约35,000片）将释放积压的Blackwell供给。但需求增速目前仍高于该爬坡速率，导致交货周期维持较长。

---

## 四、AMD：真实竞争者跑步入场

### 4.1 MI450——首个大客户级真实突破

AMD的MI450（Instinct GPU，与Meta联合设计）较前代GPU产品实现了质的飞跃：
- **432 GB HBM4**内存
- **19.6 TB/s**内存带宽
- 首批部署：2026年下半年
- AMD与Meta的框架协议估值约**$600亿美元**，同时AMD还与OpenAI达成合作，锁定**12 GW**的承诺部署容量。

### 4.2 竞争定位

AMD的推理市场推介着重于：
- **规模化TCO**：对于大模型在固定批次规模下的推理，MI450的带宽效率显著收窄了与NVIDIA H100/H200系列的单次查询成本差距。
- **软件桥接**：ROCm + CUDA兼容性持续改善，降低移植摩擦；主流框架现已提供接近对等的AMD支持。
- **云厂商多元化供应商动机**：客户需要一个可靠的第二货源；AMD是唯一具备规模化部署业绩记录的商用硅替代方案。

AMD的AI加速器营收份额在2026年初仍处于**中低个位数**，但若MI450爬坡按指引推进，有望在2027年达到低两位数。

---

## 五、中国市场分化：华为Ascend实现突破

### 5.1 H20政策真空

美国对H20的出口限制（2025年4月生效，2025年7月部分解禁，2026年在BIS持续审查下再度收紧）为国产替代方案打开了结构性缺口。阿里云、腾讯云、百度智能云已正式披露H20在前沿模型训练场景的局限性，加速推进国产芯片适配认证。

### 5.2 华为Ascend 950PR

Ascend 950PR于H20出口禁令发布次日正式发布，是迄今为止性能最强的国产AI芯片：

| 指标 | Ascend 950PR | Nvidia H20 |
|------|-------------|------------|
| FP4峰值算力 | 1.56 PFLOP | ~0.56 PFLOP（估算） |
| FP4相对性能 | — | 劣于2.8倍 |
| CUDA兼容性 | 部分兼容（封装层） | 原生支持 |
| 2026年出货目标 | 750,000片 | 受BIS限制 |

关键客户承诺：
- **ByteDance**：签订$56亿美元Ascend 950PR订单
- **阿里巴巴、腾讯**：适配认证推进中
- 产能约束：中芯国际7nm制程的良率与晶圆产出仍低于TSMC制造的替代方案；带宽仍落后于NVIDIA旗舰产品

### 5.3 Ascend 910C——训练场景现任标准

在训练工作负载方面，华为Ascend 910C在H100/H200无法获取的背景下，已成为**中国大型AI实验室的默认加速器**。与全配置Blackwell B200相比，910C在大模型训练性能上存在显著差距（约3–4倍），但正通过规模效应部分弥补：中国实验室正以4–6倍的GPU集群规模实现接近的有效计算吞吐量。

### 5.4 地缘政治叠加因素

中国AI半导体市场正在分化为一条永久独立的供应链，产生两方面非对称影响：
- **NVIDIA长期TAM收缩**：中国在2022–2023年曾贡献其数据中心GPU营收的约20–25%；部分封锁构成永久性逆风。
- **华为生态系统锁定**：一旦企业在Ascend + CANN软件栈上完成模型训练与推理服务的全链路部署，随着模型版本积累，迁移回CUDA的成本将不断攀升。

---

## 六、供应链瓶颈：CoWoS与HBM

### 6.1 TSMC CoWoS

CoWoS（Chip-on-Wafer-on-Substrate）先进封装是AI GPU生产最大的供给制约。TSMC公布的产能爬坡路径：

- 2024年底：**约35,000片/月**
- 2026年底（目标）：**约130,000片/月**
- 当前需求轨迹：追踪显示**高于**130,000片/月目标

这一供需缺口维持3–6个月的GPU交货周期，是2026年上半年NVIDIA营收受供给约束而非需求约束的首要原因。

### 6.2 HBM供应

高带宽内存（HBM）是第二大关键瓶颈：
- SK Hynix、三星、美光三家供应商几乎垄断全部HBM产能
- 三星2026年合同价格涨幅：**高十几至低二十个百分点**
- HBM4对AMD MI450及下一代NVIDIA产品的适配认证：2026年下半年新品发布的关键路径
- 供给紧张预计在**2026年下半年**随三家供应商产能扩张陆续完工才能有所缓解
- DRAM总收入预计接近翻三倍至**$4,186亿美元**——HBM是这一数字背后的利润率提升驱动力

### 6.3 瓶颈的投资含义

供应链节点（TSMC、SK Hynix、美光、ASPEED）当前的定价权比终端芯片厂商更具防御性，后者面临推理商品化带来的价格压力。这正是AI基础设施周期中"铲子与锄头"逻辑的核心所在。

---

## 七、主要风险与多空框架

### 多头情景
- 推理需求在2026年下半年AI Agent货币化拐点到来后超越$7,250亿资本支出预测
- NVIDIA的CUDA护城河与软件生态有效阻止本十年内的实质性份额侵蚀
- TSMC CoWoS产能爬坡不及预期，AI GPU供给持续紧张，NVIDIA平均售价维持高位

### 空头情景
- 推理商品化导致超大规模云厂商自研芯片替代提速；NVIDIA份额至2027年降至65%
- 宏观减速迫使云厂商强化资本纪律；$1,000–1,500亿美元资本支出削减引发库存修正
- 中芯国际取得工艺突破或盟友国建立TSMC替代产能，使华为产品竞争力显著增强；中国市场对美系芯片厂商永久清零

### 基准情景（概率：约55%）
- NVIDIA 2026自然年营收增长15–20%，但市场重估推理经济性后市盈率有所压缩
- AMD至2027年获得低两位数市场份额；GPU总TAM扩张缓解NVIDIA的绝对份额损失
- HBM/CoWoS供给紧张持续至2026年Q3；Q4开始缓解

---

## 八、关键数据汇总

| 指标 | 数值 | 来源/备注 |
|------|------|---------|
| 推理占AI算力比重（2026E） | ~67% | Deloitte预测 |
| 推理芯片市场规模（2026E） | ~$500亿美元以上 | 多家研究机构 |
| 推理芯片市场CAGR | 32% | OpenPR / MarketsandMarkets |
| 全球半导体总收入（2026E） | $1.29万亿美元 | IDC |
| DRAM收入（2026E） | $4,186亿美元 | IDC |
| 超大规模云厂商AI资本支出（2026指引） | ~$7,250亿美元 | 2026年Q1财报 |
| NVIDIA数据中心营收（FY2026） | $1,937亿美元 | 公司公告 |
| NVIDIA AI加速器市场份额 | ~80–90% | 分析师共识 |
| TSMC CoWoS产能（2026年底目标） | 130,000片/月 | TSMC指引 |
| Ascend 950PR峰值算力 | 1.56 PFLOP（FP4） | TechRadar / Digitimes |
| ByteDance Ascend 950PR订单 | $56亿美元 | 多方来源 |
| HBM价格涨幅（2026年合同） | 高十几至低二十个百分点 | 三星指引 |

---

## 结论

推理超级周期是2026年AI半导体领域最核心的结构性驱动力。它同时扮演**增长加速器**（扩大算力总TAM）和**利润率压制器**（将性能溢价转向NVIDIA优势较薄的效率指标）两种角色。中国市场的分化是美系芯片厂商的长期逆风，也是华为Ascend生态系统的长期顺风。供应链节点——TSMC CoWoS封装和HBM——在供给稀缺的背景下仍是近期确定性最高的防御型仓位。

下一个关键分析问题是：上述基本面变化究竟如何体现在上市公司估值中——NVDA、AMD、TSM（台积电ADR/港股）、SK Hynix（000660 KS）和MU（美光）的估值倍数、期权市场持仓及港美技术面如何演绎？港美股策略师最适合将本次基本面框架与估值层面的多空结构对接。

---

## 来源

- [Deloitte：AI下一阶段为何需要更大算力](https://www.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2026/compute-power-ai.html)
- [Edge AI Vision：2026年半导体行业关键趋势](https://www.edge-ai-vision.com/2026/04/key-trends-shaping-the-semiconductor-industry-in-2026/)
- [IDC：2026年半导体市场预测](https://www.idc.com/resource-center/blog/semiconductor-market-to-surge-past-the-trillion-dollar-threshold-ai-infrastructure-drives-market-growth/)
- [Deloitte：2026年半导体行业展望](https://www.deloitte.com/us/en/insights/industry/technology/technology-media-telecom-outlooks/semiconductor-industry-outlook.html)
- [TechRadar：H20出口禁令次日华为发布Ascend 920](https://www.techradar.com/pro/pure-coincidence-surely-not-huawei-launches-its-fastest-ai-chip-ever-as-us-bans-export-of-popular-china-only-nvidia-h20)
- [Digitimes：H20出口禁令后华为推出新AI芯片](https://www.digitimes.com/news/a20250417PD218/china-export-restrictions-huawei-ascend-chips-nvidia.html)
- [tech-insider.org：Huawei Ascend 950PR对比Nvidia](https://tech-insider.org/huawei-ascend-950pr-ai-chip-nvidia-china-2026/)
- [techi.com：AMD Meta $60B AI芯片交易](https://www.techi.com/amd-meta-60b-deal-nvidia-ai-monopoly/)
- [Motley Fool：Nvidia面临的最大AI芯片威胁](https://www.fool.com/investing/2026/04/25/meet-biggest-threat-nvidia-ai-chips-its-not-amd/)
- [Fusion Worldwide：CoWoS、HBM及2–3nm产能约束](https://info.fusionww.com/blog/inside-the-ai-bottleneck-cowos-hbm-and-2-3nm-capacity-constraints-through-2027)
- [AL Capital：$725B超大规模云厂商AI资本支出周期](https://alcapitaladvisory.com/research/intelligence/ai-infrastructure.html)
- [OpenPR：AI推理芯片市场32% CAGR](https://www.openpr.com/news/4471960/ai-inference-chip-market-size-accelerates-at-32-cagr-by-key)
- [Oplexa：2026年AI芯片封装瓶颈](https://oplexa.com/ai-chip-packaging-bottleneck-2026/)

## Follow-up

- Analyst: offshore-strategist
- Topic: 港美股半导体估值：推理商品化压力下的多空格局
- Question: 在推理商品化侵蚀NVIDIA定价权、AMD MI450加速渗透、华为Ascend压缩中国TAM的背景下，NVDA、AMD、TSM及SK Hynix等港美上市半导体股当前估值倍数和期权市场持仓是否已充分反映这一结构性转变的风险，还是仍存在系统性高估？
