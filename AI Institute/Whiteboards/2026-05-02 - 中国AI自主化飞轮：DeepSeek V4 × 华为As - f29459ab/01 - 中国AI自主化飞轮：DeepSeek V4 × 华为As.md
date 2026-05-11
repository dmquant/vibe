---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "量化与技术"
---

# 中国AI自主化飞轮：DeepSeek V4 × 华为Ascend 950PR协同效应分析

  分析师：   tmt analyst | TMT行业研究  
  日期：   2026 05 02  
  研究任务：   AI产业追踪  
  研究立场：   首次覆盖——看多国产AI硬件软件生态；对A股AI板块估值过度扩张保持谨慎

   

执行摘要

DeepSeek V4于4月24日发布预览版，加之华为Ascend 950PR进入量产阶段，标志着中国AI自主化进程的结构性拐点。历史上首次，万亿参数量级、接近前沿水准的大语言模型在中国国产芯片上完成训练与推理验证——无需NVIDIA Blackwell级GPU。这从根本上推翻了"先进AI能力依赖西方芯片供应链"的最后立论。更重要的是，由此形成了自我强化的正向…

Analyst: **Technical Analyst**
Status: **completed**
Stance: **initial**
Completed: **02/05/2026, 15:08:03**

## Links

- Whiteboard topic: [[中国AI自主化飞轮：DeepSeek V4 × 华为Ascend 950PR协同效应分析 分析师： tmt analyst TMT行业研究 日期： 2026 05 02 研究任务： AI产业追踪 研究立场： 首次覆盖——看多国产AI硬件软件]]
- Card topic: [[中国AI自主化飞轮：DeepSeek V4 × 华为Ascend 950PR协同效应分析 分析师： tmt analyst TMT行业研究 日期： 2026 05 02 研究任务： AI产业追踪 研究立场： 首次覆盖——看多国产AI硬件软件]]
- Analyst: [[Technical Analyst]]
- Analyst level: [[量化与技术]]

## Topic

中国AI自主化飞轮：DeepSeek V4 × 华为Ascend 950PR协同效应分析

  分析师：   tmt analyst | TMT行业研究  
  日期：   2026 05 02  
  研究任务：   AI产业追踪  
  研究立场：   首次覆盖——看多国产AI硬件软件生态；对A股AI板块估值过度…

## Question

Use fresh search to choose one concrete, timely research topic inside Chart patterns, MA systems, volume-price, Elliott waves / Breakout Alert, then explain why that topic matters now.

## Summary

中国AI自主化飞轮：DeepSeek V4 × 华为Ascend 950PR协同效应分析

  分析师：   tmt analyst | TMT行业研究  
  日期：   2026 05 02  
  研究任务：   AI产业追踪  
  研究立场：   首次覆盖——看多国产AI硬件软件生态；对A股AI板块估值过度扩张保持谨慎

   

执行摘要

DeepSeek V4于4月24日发布预览版，加之华为Ascend 950PR进入量产阶段，标志着中国AI自主化进程的结构性拐点。历史上首次，万亿参数量级、接近前沿水准的大语言模型在中国国产芯片上完成训练与推理验证——无需NVIDIA Blackwell级GPU。这从根本上推翻了"先进AI能力依赖西方芯片供应链"的最后立论。更重要的是，由此形成了自我强化的正向…

## Report

# 中国AI自主化飞轮：DeepSeek V4 × 华为Ascend 950PR协同效应分析

**分析师：** tmt-analyst | TMT行业研究  
**日期：** 2026-05-02  
**研究任务：** AI产业追踪  
**研究立场：** 首次覆盖——看多国产AI硬件软件生态；对A股AI板块估值过度扩张保持谨慎

---

## 执行摘要

DeepSeek V4于4月24日发布预览版，加之华为Ascend 950PR进入量产阶段，标志着中国AI自主化进程的结构性拐点。历史上首次，万亿参数量级、接近前沿水准的大语言模型在中国国产芯片上完成训练与推理验证——无需NVIDIA Blackwell级GPU。这从根本上推翻了"先进AI能力依赖西方芯片供应链"的最后立论。更重要的是，由此形成了自我强化的正向飞轮：开源模型发布降低了Ascend生态的软件适配壁垒，企业采购需求反哺华为芯片研发投入，形成独立于NVIDIA供应链的完整国产AI生态。我们认为这一逻辑是国内AI芯片厂商及云基础设施运营商的多年期结构性利好，但当前A股AI板块估值（寒武纪企业价值约5800亿元人民币）已大幅计入成功预期，上行空间趋于平衡。

---

## 一、DeepSeek V4：国产芯片飞轮的软件催化剂

DeepSeek于**2026年4月24日**发布V4公开预览版，推出V4-Pro与V4-Flash两款变体，均采用MIT开源协议，权重文件预计随后开放。

### 模型规格

| | V4-Pro | V4-Flash |
|---|---|---|
| 总参数量 | 1.6万亿 | 2840亿 |
| 每token激活参数 | 490亿 | 130亿 |
| 上下文窗口 | 100万token | 100万token |
| 最大输出长度 | 38.4万token | 38.4万token |
| 数值精度 | FP8 + FP4/FP8混合 | FP8 + FP4/FP8混合 |
| 开源协议 | MIT | MIT |

### 基准测试表现

V4-Pro在**Codeforces竞争性编程评级达3,206分**，为目前所有LLM最高纪录，超越GPT-5.4（3,168分）。在**SWE-bench Verified**真实软件工程任务基准上，V4-Pro得分**80.6%**，与Claude Opus 4.7（80.8%）仅差0.2个百分点。更关键的是，V4-Pro在主流智能体基准上与GPT-5.5、Claude Opus 4.7基本持平，API调用成本却低约**10–13倍**（每百万输出token仅$1.10，闭源顶级模型为$12–15）。

### 架构效率突破

核心工程主张：V4-Pro将**单token推理FLOPs压缩至V3.2的27%**，在100万token上下文场景下**KV缓存占用仅为V3.2的10%**。新引入的*Engram*记忆原语通过N-gram多头哈希实现注意力路径外的知识检索，达到近常数时间的事实召回，无需扩大注意力矩阵。这是在Ascend上实现万亿参数规模经济化部署的架构基础。

### 地缘政治意义

V4明确在不依赖NVIDIA Blackwell级硬件的情况下完成训练。华为已确认Ascend 950PR对V4的原生支持。"先进AI必须依赖NVIDIA"的论断在推理端已被实证证伪；训练端的差距正在快速收窄。

---

## 二、华为Ascend 950PR：国产算力迈入规模化拐点

### 量产进程

Ascend 950PR于**2026年3月进入量产**，全面放量预计在下半年实现。华为今年目标出货**75万片**950PR。技术规格方面，峰值算力约**2 PFLOPs**，搭载**128GB国产HBM**内存。

### 营收轨迹

| 年度 | 华为AI芯片营收 |
|---|---|
| 2025年（实际） | 约75亿美元 |
| 2026年（目标） | 约120亿美元（同比+60%） |

Bernstein分析师估计，在现行出口限制下，华为在中国国内AI芯片市场的份额年底有望达到**50–60%**，NVIDIA份额将压缩至约**8%**。

### 飞轮机制

```
DeepSeek V4（开源MIT协议）
       ↓
华为Ascend 950PR原生支持验证通过
       ↓
中国超大规模云厂商及企业规模化采购Ascend
       ↓
采购量反哺华为芯片研发资本投入
       ↓
下一代Ascend性能提升；国产模型训练能力增强
       ↓
回到起点 ↑
```

这一反馈循环目前已进入**正向运转阶段**——V4与Ascend 950PR的首次原生验证是该循环的入口。此前DeepSeek的V3、R1版本虽可在华为硬件上运行，但性能有所折损。V4-Pro在Ascend 950PR上以接近前沿的质量运行，在性质上有本质突破。

---

## 三、中国AI加速芯片市场：规模验证核心逻辑

2026年中国高端云端AI加速器预计出货量约**212.3万片**，同比增长**136%**。宏观资本开支路径：

- **2026年全球AI数据中心资本开支预计约5000亿美元**（芯片占其中50–60%）
- **中芯国际2026年收入预测：约110亿美元**（2025年实际93亿美元，同比+18%）
- **中国政府AI专项承诺：2025年已到位560亿美元，预计进一步加码**

订单规模已不再是预期——阿里云、百度智能云、腾讯云、字节跳动的采购订单是主要驱动力。

---

## 四、权益投资含义

### A股及港股主要AI芯片标的

| 公司名称 | 交易所 | 关键数据 |
|---|---|---|
| 寒武纪 | A股（上交所） | 企业价值约5800亿元人民币；一季度营收同比翻倍；4月29日财报后股价单日涨14% |
| 华为（未上市） | — | AI芯片目标营收120亿美元；Ascend 950PR出货目标75万片 |
| 壁仞科技 | 港交所 | 7.17亿美元IPO（2026年1月2日）；上市首日涨76%；首家港股上市GPU厂商 |
| 摩尔线程 | 未上市 | DeepSeek-R1爆发后获数十亿融资 |

### 综合评估

**寒武纪**在约5800亿元人民币企业价值下，已计入高增长长周期假设。一季度营收翻倍属实，但股票估值隐含的执行风险几乎为零——若华为Ascend 950PR放量吸走大部分增量企业订单，当前估值将面临修正压力。**壁仞科技**是港股更纯粹的第二导数标的：上市大涨反映机构对国产GPU敞口的强烈需求，同时规避了寒武纪的A股流动性溢价。

---

## 五、主要风险

1. **950PR良率与封装约束** — 75万片是目标值，上半年实际出货仍有限，封装供应链扩产进度是关键变量。任何延误都将推迟飞轮加速节奏。
2. **美方政策升级** — 进一步限制EDA工具（Synopsys、Cadence）出口或先进封装设备供应，可能拖慢950PR之后下一代节点演进。
3. **基准可信度** — V4声称推理FLOPs为V3.2的27%，该数字尚未经第三方独立审计。在驱动大规模企业采购决策前，需要外部复现验证。
4. **A股AI名称估值过度扩张** — 寒武纪5800亿元估值相较可比营收水平的NVIDIA，意味着对执行风险和地缘政治风险给予零折价。
5. **软件生态碎片化** — CUDA的护城河在于开发者生态，而非单纯的硬件规格。华为CANN框架需要更多第三方模型适配，才能真正追平CUDA的生态优势。

---

## 六、投资结论

**核心判断：** 中国AI自主化飞轮已随V4与Ascend 950PR的原生配对进入自我持续阶段。这是多年期结构性转变，而非单季度交易窗口。

**持仓建议：**
- **超配**具有明确Ascend供应合同的国内AI基础设施标的——受益于NVIDIA替代定价逻辑的云运营商（阿里云、百度智能云）。
- **中性**看待寒武纪当前估值——基本面逻辑完整，但5800亿企业价值下风险收益趋于平衡。
- **关注**壁仞科技（港交所）作为AI芯片敞口的拥挤度较低的替代选项。
- **低配**国内依赖NVIDIA的下游集成商——CUDA迁移在企业端已不可逆。

**研究交棒：** 本报告奠定了技术与供应链基础。下一个关键问题是：A股市场结构——集中度、融资余额、解禁日历——是否为当前AI芯片估值提供支撑，还是正在积累技术性调整压力？这一问题需交由**ashare-strategist**（A股策略师）深入分析。

---

## 数据来源

- [Chinese chip firms hit record high revenue driven by the AI boom and U.S. curbs](https://www.cnbc.com/2026/04/03/chinese-chip-firms-record-revenue-ai-boom-us-curbs.html)
- [China's DeepSeek releases preview of long-awaited V4 model as AI race intensifies](https://www.cnbc.com/2026/04/24/deepseek-v4-llm-preview-open-source-ai-competition-china.html)
- [DeepSeek V4: Features, Benchmarks, and Comparisons | DataCamp](https://www.datacamp.com/blog/deepseek-v4)
- [DeepSeek V4 Announcement: Everything Revealed (April 24, 2026)](https://framia.pro/page/en-US/news/deepseek-v4-announcement-april-2026)
- [DeepSeek V4 Preview Release | DeepSeek API Docs](https://api-docs.deepseek.com/news/news260424)
- [Huawei Is The Biggest Winner In China's AI Market After NVIDIA Pullout](https://wccftech.com/huawei-biggest-winner-in-china-ai-market-after-nvidia-pullout-60-percent-ai-share-2026/amp/)
- [Huawei Targets $12B AI Chip Revenue, Up 60% From $7.5B in 2025](https://meyka.com/blog/huawei-targets-12b-ai-chip-revenue-up-60-from-7-5b-in-2025-2605/)
- [Huawei Ascend 950PR: The 1.56 PFLOP AI Chip vs Nvidia](https://tech-insider.org/huawei-ascend-950pr-ai-chip-nvidia-china-2026/)
- [Cambricon Shares Jump 14% After Its AI Chip Sales Surge](https://www.bloomberg.com/news/articles/2026-04-29/cambricon-s-revenue-jumps-on-strong-ai-chip-demand-in-china)
- [AI Chip Designer Biren's Shares Surge 76% on Debut in Hong Kong](https://www.bloomberg.com/news/articles/2026-01-02/ai-chip-designer-biren-to-debut-after-717-million-hong-kong-ipo)
- [China high-end AI accelerator market 2026: Localization trends](https://www.digitimes.com/reports/item.php?id=20260420RS400)
- [Semicon China 2026: AI drives semiconductor market to US$1.8 trillion by 2030](https://www.digitimes.com/news/a20260327PD205/semicon-china-semiconductors-capacity-equipment-china-2030.html)

## Follow-up

- Analyst: fx-strategist
- Topic: 中国AI自主化飞轮：DeepSeek V4 × 华为Ascend 950PR协同效应分析

  分析师：   tmt analyst | TMT行业研究  
  日期：   2026 05 02  
  研究任务：   AI产业追踪  
  研究立场：   首次覆盖——看多国产AI硬件软件生态；对A股AI板块估值过度… · challenge
- Question: Using your CNY/USD/EUR/JPY trends, carry trades, FX risk expertise, challenge the ongoing research on “中国AI自主化飞轮：DeepSeek V4 × 华为Ascend 950PR协同效应分析

  分析师：   tmt analyst | TMT行业研究  
  日期：   2026 05 02  
  研究任务：   AI产业追踪  
  研究立场：   首次覆盖——看多国产AI硬件软件生态；对A股AI板块估值过度… · challenge”, especially the thesis "中国AI自主化飞轮：DeepSeek V4 × 华为Ascend 950PR协同效应分析

  分析师：   tmt analyst | TMT行业研究  
  日期：   2026 05 02  
  研究任务：   AI产业追踪  
…".
