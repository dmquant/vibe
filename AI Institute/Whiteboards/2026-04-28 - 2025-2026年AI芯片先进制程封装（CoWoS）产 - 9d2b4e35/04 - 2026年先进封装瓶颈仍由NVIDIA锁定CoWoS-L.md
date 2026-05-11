---
source: ai-institute
resource_type: whiteboard-card
card_index: 4
status: completed
analyst_level: "行业研究"
---

# 2026年先进封装瓶颈仍由NVIDIA锁定CoWoS-L和高端ABF主导，2027年真正的增量压力来自云厂ASIC与Rubin/Rubin Ultra同时抢占更大封装面积。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **synthesize**
Completed: **28/04/2026, 23:35:35**

## Links

- Whiteboard topic: [[2025-2026年AI芯片先进制程封装（CoWoS）产能展望与供应链瓶颈分析]]
- Card topic: [[2026年先进封装瓶颈仍由NVIDIA锁定CoWoS-L和高端ABF主导，2027年真正的增量压力来自云厂ASIC与Rubin Rubin Ultra同时抢占更大封装面积。]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

2026年先进封装瓶颈仍由NVIDIA锁定CoWoS-L和高端ABF主导，2027年真正的增量压力来自云厂ASIC与Rubin/Rubin Ultra同时抢占更大封装面积。

## Question

Investigate the topic "2026年先进封装瓶颈仍由NVIDIA锁定CoWoS-L和高端ABF主导，2027年真正的增量压力来自云厂ASIC与Rubin/Rubin Ultra同时抢占更大封装面积。" and make the strongest evidence-based judgment you can.

## Summary

本卡综合前三张卡并把瓶颈映射到平台：2026年CoWoS仍由NVIDIA Blackwell Ultra/GB300和Rubin初期消耗约65k-78k wpm，占可用供给约六成；AMD约9k-15k wpm，云厂ASIC约22k-32k wpm。2027年NVIDIA Rubin/Rubin Ultra仍是最大需求源，但云厂ASIC会升至约42k-58k wpm，成为第二大CoWoS和高端ABF消耗者。Intel EMIB-T、Samsung I-CubeE和TSMC CoPoS/玻璃路线更多是桥接/小批量替代变量，2027年前难以大规模缓解TSMC CoWoS紧平衡。

## Report

# AI芯片平台路线与先进封装需求映射

**立场：综合并细化前序判断。** 我支持前三张卡“2026年CoWoS仍紧、ABF高端有效产能受认证和设备约束、玻璃/TGV/PLP到2027年仍偏导入变量”的主线，但需要把“瓶颈”落到具体平台：2026年的硬需求仍由NVIDIA Blackwell Ultra/GB300和Rubin初期拉动；2027年增量压力从单一NVIDIA转向“NVIDIA Rubin/Rubin Ultra + AMD MI455X/MI500预备 + Google/AWS/Microsoft/Broadcom/Marvell自研ASIC”的多买方竞争。结论是：2026年TSMC CoWoS可出货供给大概率仍被NVIDIA锁走约六成；到2027年，云厂ASIC会成为第二大CoWoS与高端ABF消耗者，并显著挤压AMD和非NVIDIA客户配额。

## 估算口径

本卡使用“300mm CoWoS晶圆当量/月”衡量TSMC类硅中介层、RDL和CoWoS-L/CoWoS-S产线负荷；使用“高端ABF载板片/月”衡量每颗GPU/ASIC封装和配套交换/网络芯片的大尺寸低翘曲载板需求；使用“桥接tile或EMIB/LSI bridge放置量/月”衡量CoWoS-L、I-CubeE、EMIB-T等桥接资源；玻璃TGV和PLP用“AI级验证/小批量封装片或面板当量/月”表达，因为2026-2027尚未形成统一可比口径。

关键换算假设：Blackwell Ultra/Rubin基础GPU每颗约消耗0.14-0.22片CoWoS晶圆当量；Rubin Ultra若按更大多chiplet和更高HBM容量推进，单颗可能升至0.30-0.45片；AMD MI350约0.11-0.16片，MI450/MI455X因12颗HBM4和3.5D封装升至0.18-0.28片；主流云厂ASIC按4-8颗HBM的形态约0.07-0.16片。所有平台每颗加速器至少消耗1片高端ABF载板，机架级NVLink/UALink/Ethernet交换芯片还会额外消耗约15%-35%的高端载板面积。

## 2026-2027封装资源消耗基准情景

| 平台/客户群 | 2026年CoWoS晶圆当量/月 | 2027年CoWoS晶圆当量/月 | 2026年高端ABF载板/月 | 2027年高端ABF载板/月 | 桥接/EMIB/玻璃/PLP判断 |
| --- | ---: | ---: | ---: | ---: | --- |
| NVIDIA Blackwell Ultra/GB300、Rubin初期、Rubin Ultra预备 | 65k-78k | 78k-98k | 43万-56万片 | 45万-60万片 | 2026以CoWoS-L/LSI bridge为主，桥接tile约60万-120万个/月；2027 Rubin Ultra若放量，桥接tile可升至100万-180万个/月，玻璃仍非主线 |
| AMD Instinct MI350、MI450/MI455X、Helios | 9k-15k | 18k-28k | 7万-12.5万片 | 12万-19万片 | MI350仍偏传统2.5D CoWoS；MI455X公开指向12颗HBM4和3.5D封装，2027会消耗更多桥接/混合键合/高端ABF面积 |
| 云厂ASIC：Google TPU/Ironwood、AWS Trainium、Microsoft Maia、Broadcom/Marvell XPU | 22k-32k | 42k-58k | 23万-35万片 | 38万-56万片 | 2026主要仍走TSMC CoWoS-S/R/L和少量扇出/桥接路线；2027成为CoWoS第二大需求源，部分项目会试用EMIB-T、I-CubeE、Marvell桥接封装或面板级路线 |
| Intel Foundry/Samsung先进封装外供与自用 | 低于5k等效CoWoS，但EMIB/桥接包约2万-6万片 | 8万-18万片EMIB/桥接包，不完全等同CoWoS | 3万-8万片 | 10万-22万片 | Intel EMIB-T/3.5D、Samsung I-CubeE/X-Cube更像CoWoS替代产能；2026为客户验证，2027可能承接部分云厂ASIC和自有AI/HPC包 |
| 玻璃TGV/PLP | AI主芯片低于1%-2%渗透 | 3%-8%渗透，仍以验证和小批量为主 | 载板替代量有限 | 可能替代约5万-15万片有机载板需求 | 2026消耗的是样品线和可靠性验证产能；2027若Intel/Samsung/TSMC CoPoS或玻璃芯基板提前导入，瓶颈先在TGV成孔、金属化、检测和面板搬运 |

按TSMC CoWoS供给口径，市场公开预期指向2026年底约120k-150k wpm、2027年底约170k-210k wpm的能力区间；但全年平均可用产能低于年底能力。因此上表不是“需求天花板”，而是供给约束后的基准消耗。若按客户真实需求排队，2027云厂ASIC和NVIDIA合计需求很可能超过TSMC当年可释放的CoWoS增量，AMD和二线ASIC客户的排产弹性仍受限。

## NVIDIA：面积代际扩张抵消产能扩张

NVIDIA是2026年最确定的CoWoS消耗者。GB300/Blackwell Ultra维持72 GPU机架形态，公开系统资料显示每颗Blackwell Ultra GPU约279GB HBM3E，单机架约20TB HBM3E；Rubin NVL72公开资料显示每颗Rubin GPU为288GB HBM4、22TB/s HBM带宽，NVL72机架为72颗GPU、20.7TB HBM4。Micron已在2026年第一季度开始出货面向Vera Rubin的36GB 12-Hi HBM4，说明Rubin供应链不是远期概念，而是进入量产配套窗口。

封装含义是：2026年NVIDIA仍以Blackwell Ultra和Rubin基础版消耗CoWoS-L/CoWoS-S；2027年若Rubin Ultra或更大chiplet封装进入爬坡，即使GPU颗数没有同比大幅增加，单颗封装面积、桥接tile和ABF面积也会显著上升。也就是说，NVIDIA对CoWoS的“片数需求”未必随出货颗数线性下降，反而可能因更大封装从每片CoWoS晶圆约5-7颗封装下降到约3-5颗封装。

## AMD：2026是配额竞争者，2027才是结构性增量

AMD MI355X已公开采用TSMC 3nm/6nm、288GB HBM3E和8TB/s带宽；MI350平台以8卡UBB为主，对CoWoS和ABF的压力低于NVIDIA rack-scale方案。真正改变AMD封装资源消耗的是MI450/MI455X和Helios。AMD公开资料称Helios围绕MI450/MI455X系列，单GPU最高432GB HBM4、约20TB/s带宽，72 GPU机架约31TB HBM4；AMD还披露MI455X将采用12颗HBM4和3.5D封装。

因此，2026年AMD更像CoWoS产能的“第二梯队稳定需求”，月均约9k-15k wpm；2027年若Helios被HPE、Oracle、Meta/OpenAI等客户放量，月均会升至18k-28k wpm。由于MI455X单颗封装面积更大，AMD的ABF面积需求增速会高于封装颗数增速；但软件生态和客户规模仍决定它难以在2027年抢到NVIDIA级别的CoWoS份额。

## 云厂ASIC：2027年的最大变量

Google Ironwood公开为每颗TPU 8颗HBM3E、192GiB容量和7.4TB/s带宽，单Superpod可达9,216颗芯片；AWS Trainium2每颗96GiB HBM，Trn2 UltraServer为64颗Trainium2和6TB HBM，Trainium3则走3nm、更高内存容量和144芯片UltraServer形态；Microsoft Maia 200公开采用TSMC 3nm、216GB HBM3E、7TB/s带宽。Broadcom公开AI半导体收入高速增长并由custom AI accelerators和Ethernet AI switches驱动，Marvell则推出面向custom AI accelerator的先进封装平台，强调custom HBM、die-to-die互连和2.5D/3D/3.5D+能力。

这些平台的共同点不是单颗芯片都比NVIDIA更大，而是客户数量多、机架规模大、HBM ASIC从4颗堆栈上移到6-8颗堆栈，且多数仍依赖TSMC先进节点和先进封装。2026年云厂ASIC实际消耗约22k-32k wpm；到2027年，若Google、AWS、Microsoft、OpenAI/Anthropic/Meta的自研项目同步排产，云厂ASIC可能消耗42k-58k wpm，成为NVIDIA之后的第二大CoWoS需求池。对应高端ABF载板需求会从2026年的约23万-35万片/月升至2027年的约38万-56万片/月。

## Intel/Samsung/TSMC路线：不是马上替代CoWoS，而是创造“桥接产能”新口径

Intel的差异化在EMIB和Foveros。Intel Foundry资料显示，EMIB 2.5D用于logic-logic和logic-HBM连接，EMIB-T在bridge中加入TSV；其AI/HPC平台资料给出的扩展路径为2026年支持超过8倍reticle、约120x120mm封装、12颗HBM和超过20个EMIB，2028年走向超过12倍reticle、超过24颗HBM和超过38个EMIB。这意味着Intel在2026-2027更可能以“桥接封装产能”分流部分CoWoS需求，而不是直接提供TSMC CoWoS同口径产能。

Samsung的I-CubeS/I-CubeE/H-Cube/X-Cube路线也类似。Samsung资料显示I-CubeE使用嵌入式硅桥和FO-PLP结构，H-Cube结合精细ABF与HDI以支持大尺寸2.5D封装，X-Cube推进混合铜键合。SEMCO同时展示面向AI/服务器的玻璃芯基板和2.1D载板。2026年这些路线仍以客户认证和小批量为主；2027年若获得云厂ASIC或AMD/网络芯片订单，可能消耗8万-18万片/月的桥接/EMIB类封装能力，但它们短期不会显著降低TSMC CoWoS紧平衡。

TSMC自身的CoWoS-S/L/R和SoIC仍是主线，CoPoS/面板级封装更可能是2028年以后的规模解法。2027年若有提前导入，也应视为“解决超大封装成本和面积”的研发/小批量产能，而非NVIDIA/AMD主力GPU的确定替代。

## 投资和供应链含义

第一，2026年最硬的瓶颈仍是NVIDIA主导下的CoWoS-L有效产能、HBM配套和大尺寸ABF载板认证产能。新增CoWoS wpm不能简单等同新增GPU颗数，因为Rubin/Rubin Ultra会降低每片CoWoS晶圆可切出的封装数。

第二，2027年ABF的紧张更偏“面积”和“高阶规格”而非普通片数。即使CoWoS月产能提升，GPU/ASIC平均封装面积、层数、低翘曲要求、交换芯片高端载板同步上升，会使高端ABF、T-glass、SAP/mSAP设备继续处于高利用率。

第三，EMIB/LSI bridge会成为新的观察指标。若Intel EMIB-T、Samsung I-CubeE、Marvell桥接封装在2027年拿到云厂ASIC项目，市场会把一部分“CoWoS短缺”重新定价为“桥接tile、混合键合、先进载板和测试能力短缺”。

第四，玻璃TGV/PLP在2026不应作为主线替代投资逻辑。更合理的判断是：2026年看样品和客户验证，2027年看小批量可靠性数据，2028年以后才看是否能改变CoWoS/ABF成本曲线。

## 主要反证风险

如果Rubin Ultra推迟、Blackwell Ultra生命周期延长，2027年单颗封装面积压力会低于本卡估计，CoWoS紧张更多表现为出货颗数竞争。若云厂ASIC软件适配或良率低于预期，2027年自研ASIC对CoWoS的抢占会后移，AMD和NVIDIA可获得更高配额。相反，若Google/AWS/Microsoft/Broadcom/Marvell项目同步放量，2027年TSMC CoWoS和高端ABF供需缺口会大于本卡基准情景，Intel/Samsung桥接产能也会提前被重新估值。

## 交接建议

下一张卡建议交给`offshore-strategist [primary]`，从港美股和全球科技链视角评估上述产能分配如何影响TSMC、NVIDIA、AMD、Broadcom、Marvell、Intel、Samsung及ABF/设备供应商的收入弹性、订单可见度和估值分歧。本卡已经把“平台路线到封装资源”的数量级拆出，下一步应检验市场是否已经充分定价2027年云厂ASIC对CoWoS和高端ABF的挤占。

## 主要参考来源

- NVIDIA Technical Blog，Vera Rubin平台与Rubin GPU规格：https://developer.nvidia.com/blog/inside-the-nvidia-rubin-platform-six-new-chips-one-ai-supercomputer/
- GIGABYTE/NVIDIA Vera Rubin NVL72与GB300 NVL72系统资料：https://www.gigabyte.com/FileUpload/Global/WebPage/1052/NVIDIA_2026_1H_V2.pdf
- Micron，HBM4 for NVIDIA Vera Rubin量产公告：https://investors.micron.com/node/50236/pdf
- AMD，MI355X规格：https://www.amd.com/en/products/accelerators/instinct/mi350/mi355x.html
- AMD，Advancing AI 2025与Helios/MI400路线：https://www.amd.com/en/newsroom/press-releases/2025-6-12-amd-unveils-vision-for-an-open-ai-ecosystem-detai.html
- AMD，Helios与MI450/MI455X HBM4机架资料：https://www.amd.com/en/blogs/2025/amd-helios-ai-rack-built-on-metas-2025-ocp-design.html
- Google Cloud，Ironwood TPU架构与HBM规格：https://cloud.google.com/blog/products/compute/inside-the-ironwood-tpu-codesigned-ai-stack/
- AWS，Trn2/Trainium2实例与UltraServer规格：https://aws.amazon.com/ec2/instance-types/trn2/
- Microsoft，Maia 200规格：https://blogs.microsoft.com/blog/2026/01/26/maia-200-the-ai-accelerator-built-for-inference/
- Broadcom，FY2025 Q4业绩与AI半导体收入说明：https://investors.broadcom.com/node/63716/pdf
- Marvell，custom AI accelerator先进封装平台：https://www.marvell.com/company/newsroom/marvell-delivers-advanced-packaging-platform-custom-ai-accelerators.html
- TSMC，3DFabric/CoWoS-S/L/R官方说明：https://www.tsmc.com/english/dedicatedFoundry/technology/platform_HPC_tech_WLSI
- TrendForce，TSMC CoWoS扩产至2026年信息：https://www.trendforce.com/news/2024/12/13/news-tsmc-ramps-up-cowos-capacity-across-taiwan-projected-to-nearly-triple-by-2026/
- Intel Foundry，先进封装与EMIB/Foveros路线：https://www.intel.com/content/www/us/en/foundry/packaging.html
- Intel Foundry，AI/HPC先进封装平台brief：https://www.intel.com/content/dam/www/central-libraries/us/en/documents/2025-11/intel-foundry-hpc-ai-brief.pdf
- Samsung Foundry，I-Cube/H-Cube/X-Cube先进异构集成：https://semiconductor.samsung.com/foundry/advanced-package/advanced-heterogeneous-integration/
- Samsung Electro-Mechanics，AI/服务器载板与玻璃芯基板展示：https://www.sem.samsung.com/global/newsroom/news/view.do?id=9622

## Follow-up

- Analyst: offshore-strategist
- Topic: 先进封装产能分配对港美股科技链盈利与估值的影响
- Question: TSMC、NVIDIA、AMD、Broadcom、Marvell、Intel、Samsung以及ABF/封装设备供应商的2026-2027收入弹性和估值预期是否已经充分反映CoWoS、桥接和高端ABF配额变化？
