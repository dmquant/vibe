---
source: ai-institute
resource_type: whiteboard-card
card_index: 3
status: completed
analyst_level: "行业研究"
---

# AI-Biology 的算力跃迁已把早期发现从低效湿实验筛选推进到可规模化干实验排序，但议价能力只流向拥有专有数据、闭源前沿模型或临床验证资产的一方。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **synthesize**
Completed: **27/04/2026, 22:25:29**

## Links

- Whiteboard topic: [[AI-Biology「ChatGPT 时刻」三重证据交叉验证：基础模型跃迁 × 首批临床读出 × 资本与大药企结构性下注]]
- Card topic: [[AI-Biology 的算力跃迁已把早期发现从低效湿实验筛选推进到可规模化干实验排序，但议价能力只流向拥有专有数据、闭源前沿模型或临床验证资产的一方。]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

AI-Biology 的算力跃迁已把早期发现从低效湿实验筛选推进到可规模化干实验排序，但议价能力只流向拥有专有数据、闭源前沿模型或临床验证资产的一方。

## Question

Investigate the topic "AI-Biology 的算力跃迁已把早期发现从低效湿实验筛选推进到可规模化干实验排序，但议价能力只流向拥有专有数据、闭源前沿模型或临床验证资产的一方。" and make the strongest evidence-based judgment you can.

## Summary

本卡综合支持前两张卡的工程效率主线，但限制其外推边界：2026 年药企干实验准确度提升不是单一数字，而是在结构位姿、相互作用和亲和力排序中约提升 1.5–2.5 倍；AF3 在蛋白-配体低同源 benchmark 中约 64.9% 成功率，IsoDDE 在最难泛化任务上较 AF3 超过 2 倍，ESM3/Evo2 分别扩展蛋白生成与 DNA 变异效应预测。议价上，Big Pharma 因自建 AI factory 和专有数据增强，对普通平台型 AI-Biotech 更强势；顶级闭源模型与已有临床验证资产仍保留溢价。

## Report

# AI-Biology 算力底座与跨模态基础模型的工程化落地效率

## 结论先行

我对前两张卡的判断采取 **synthesize**：AI-Biology 的「ChatGPT 时刻」在基础模型与工程效率层面已经成立，但它不是“临床有效性已经被 AI 解决”，而是“干实验的先验排序能力显著提高”。2026 年药企真正得到的提升可以概括为：

| 任务层 | 2026 年可观察提升 | 对药企的含义 |
| :--- | :--- | :--- |
| 蛋白-小分子/抗体/核酸相互作用结构预测 | AlphaFold 3 相比既有方法至少提升约 50%，部分相互作用类别接近 2 倍；在低同源 FoldBench 中，AF3 蛋白-配体整体成功率 64.9% | “要不要合成/进实验”的排序更准，减少低质量湿实验轮次 |
| 蛋白-配体高难 OOD 场景 | Isomorphic 2026 年披露的 IsoDDE 在最难 generalisation benchmark 上较 AF3 超过 2 倍 | 前沿能力开始从公共模型转入闭源、产业级药物设计引擎 |
| 亲和力预测 | IsoDDE 技术报告披露，在多个 FEP/OpenFE/CASP16 类 benchmark 上可接近或超过昂贵物理模拟 | 从“结构像不像”进入“结合强不强”的 DMTA 决策层 |
| 蛋白生成 | ESM3 以 98B 参数、超过 1e24 FLOPS 训练，实现序列-结构-功能联合生成，esmGFP 与最近天然荧光蛋白仅 58% 相似 | 从检索天然蛋白，升级为在可行蛋白空间内生成新功能 |
| 基因组/变异效应 | Evo 2 训练于 9.3 万亿核苷酸、12.8 万+基因组；Nature 2026 显示其在编码/非编码变异、BRCA1 等任务上具备强零样本和嵌入式预测能力 | 从单蛋白结构，扩展到 DNA 级别的疾病机制、靶点与变异解释 |

因此，本卡对“预测准确度提升了多少”的回答不是单一百分比，而是：**早期发现的干实验准确度提升大致是 1.5–2.5 倍，最强集中在结构位姿、相互作用和亲和力排序；但跨到疾病机制、人体有效性和长期安全性后，仍只能形成 10–40% 量级的概率改善，而不是确定性预测。**

## 为什么不能把 AF3 的 50% 直接等同于药物成功率

AlphaFold 3 的关键跃迁是把模型对象从“单个蛋白折叠”扩展到“蛋白、DNA、RNA、小分子、离子、修饰之间的原子级相互作用”。Google DeepMind 披露，在蛋白与其他分子相互作用上，AF3 相比既有预测方法至少提升 50%，部分重要类别预测准确度翻倍；在 PoseBusters benchmark 上，AF3 比最强传统方法准确 50%，且不需要输入实验结构信息。

但独立 benchmark 同时提醒：泛化仍是瓶颈。Nature Communications 的 FoldBench 在 1,522 个低同源复合体上评估多种全原子模型，发现 AF3 在多数任务上领先，但 ligand 相似度下降时准确度显著下降，抗体-抗原仍有超过 50% 的失败率。也就是说，AF3 解决的是“结构先验不足”的痛点，不是“疾病生物学因果链条已闭合”。

这与 card-02 的压力测试一致：AI 药物在 Phase I/早期工程环节强，Phase II/临床有效性仍受人体生物学约束。干实验更像把候选从“盲筛 10,000 个”压缩为“优先验证 50–200 个”，而不是让药企跳过湿实验、动物实验和临床。

## AF3/ESM3/Evo2 各自改变的“工程瓶颈”

**AF3 改变结构与结合位姿瓶颈。** 过去结构生物学依赖晶体、cryo-EM 或同源模板，药企在没有实验结构时只能以同源模型和 docking 粗排。AF3 让小分子、抗体、核酸、糖基化修饰进入统一原子级预测框架，直接提升 hit-to-lead 的排序效率。2026 年进一步出现 IsoDDE 这类产业闭源引擎，开始把 AF3 的结构能力扩展到亲和力、隐性 pocket 和抗体界面。

**ESM3 改变蛋白可设计性瓶颈。** ESM3 的价值不在“预测一个已知蛋白结构”，而在序列、结构、功能三轨联合生成。esmGFP 的实验验证说明模型可以在自然界未走过的蛋白空间中找到可折叠、可发光的新蛋白。这对抗体、酶、递送载体和蛋白药工程更重要：药企不再只是在天然蛋白附近做局部突变，而是在更大设计空间中提出候选。

**Evo2 改变靶点与变异解释瓶颈。** Evo2 把建模单位推进到 DNA 长上下文。Nature 2026 论文显示，它在编码、非编码、splice、BRCA1 等变异效应预测中具有竞争力，并且能用 embeddings 训练轻量监督模型。它对药企的意义是把“靶点为什么与疾病有关”的证据链前移，尤其适用于罕见病、遗传病、调控区变异和合成基因组设计。但它也暴露边界：远端调控等任务仍落后于专门训练的 sequence-to-function 模型。

## 对 Big Pharma 与 AI-Biotech 议价能力的影响

**第一，Big Pharma 相对“平台型 AI-Biotech”的议价能力增强。** 2026 年以后，基础模型和开源工具降低了“我有一个 AI 平台”的稀缺性。Lilly 已建设由 NVIDIA DGX SuperPOD/B300 驱动的 AI factory，用自有多年实验数据训练模型，并通过 TuneLab 向外部 biotech 开放部分模型；Roche 也在 2026 年部署 2,176 个高性能 GPU 的 AI factory，嵌入研发、诊断、数字病理和制造。算力 + 专有数据 + 临床开发能力让大药企可以把中低端 AI 平台供应商压成工具、服务或 milestone-heavy 合作。

**第二，顶级 AI-Biotech 的议价能力同步增强，但只限于“模型 + 数据 + 可验证资产”三者齐备者。** Isomorphic 不是普通外包平台，因为它掌握 AlphaFold/DeepMind 技术谱系、闭源 Drug Design Engine，并已与 Lilly、Novartis、J&J 等大药企形成多项目合作。Insilico 也因 rentosertib 的 Phase IIa 阳性从“AI 故事”转向“可验证资产”。这类公司可以拿到更高 upfront、联合开发权或更强的资产保留权。

**第三，中间层 AI-Biotech 被挤压。** 仅靠虚拟筛选、知识图谱或泛化模型包装的公司，在大药企自建 AI factory 后很难维持高平台溢价。Recursion 与 Exscientia 合并、Recursion 2025 年裁员 20%、BenevolentAI 估值/上市状态受挫，说明资本市场已经开始区分“AI 原生生产力”与“AI 标签”。未来合作条款会更偏向：少 upfront、多里程碑、以临床/IND/可重复实验读出解锁付款。

## 投资与产业判断

1. **算力跃迁最先兑现为 discovery ROI，而非总研发周期。** 早期发现周期可从传统 3–5 年压缩到约 13–30 个月，但临床入组、人体终点、监管审评和制造放大并不会同步压缩。
2. **大药企的护城河从销售/临床扩张到“数据-算力-实验闭环”。** Lilly、Roche 的 AI factory 表明，未来药企不是购买一次模型，而是在内部构建持续学习系统。
3. **AI-Biotech 的估值锚从平台切到资产。** 只有能证明“模型预测 → 合成 → 体内有效 → 临床读出”的闭环，才有资格保留定价权。
4. **开源与闭源分化会加剧。** Evo2 的开放降低科研门槛；IsoDDE 的闭源提升少数前沿平台的商业稀缺性。大药企会同时使用开源底座、采购闭源能力、并把自有数据锁进内部模型。

## 给下一张卡的交接问题

本卡回答了基础模型和算力如何提升早期预测效率，下一步应转向资本市场与上市资产定价：**市场是否已经把“平台型 AI-Biotech 被压价、顶级闭源模型和临床验证资产被重估、Big Pharma 算力内化”三件事反映到 2026 年美股/港股 TMT 与医药标的估值中？**

## 主要来源

- Google DeepMind / Isomorphic Labs，AlphaFold 3 发布说明：https://blog.google/innovation-and-ai/products/google-deepmind-isomorphic-alphafold-3-ai-model/
- Nature，AlphaFold 3 论文：https://www.nature.com/articles/s41586-024-07487-w
- Nature Communications，FoldBench：https://www.nature.com/articles/s41467-025-67127-3
- Isomorphic Labs，IsoDDE 2026 技术披露：https://www.isomorphiclabs.com/articles/the-isomorphic-labs-drug-design-engine-unlocks-a-new-frontier
- Isomorphic Labs，IsoDDE technical report：https://storage.googleapis.com/isomorphiclabs-website-public-artifacts/isodde_technical_report.pdf
- EvolutionaryScale，ESM3 发布说明：https://www.evolutionaryscale.ai/blog/esm3-release
- Arc Institute，Evo2 发布说明：https://arcinstitute.org/news/evo2
- Nature，Evo2 论文：https://www.nature.com/articles/s41586-026-10176-5
- NVIDIA，Lilly AI Factory：https://blogs.nvidia.com/blog/lilly-ai-factory-live/
- Lilly，AI supercomputer 公告：https://investor.lilly.com/news-releases/news-release-details/lilly-partners-nvidia-build-industrys-most-powerful-ai
- Roche，NVIDIA AI factory 公告：https://www.roche.com/media/releases/med-cor-2026-03-16
- Fierce Biotech，Recursion 裁员：https://www.fiercebiotech.com/biotech/recursion-lays-20-staff-wake-pipeline-cutbacks

## Follow-up

- Analyst: offshore-strategist
- Topic: AI-Biology 算力跃迁后的美股/港股资产定价与估值分化
- Question: 市场是否已经把“Big Pharma 算力内化、普通 AI-Biotech 平台溢价被压缩、顶级闭源模型与临床验证资产被重估”反映到 2026 年美股/港股相关标的估值中？哪些公司仍被错误地按旧 AI 平台叙事定价？
