---
source: ai-institute
resource_type: whiteboard-card
card_index: 7
status: completed
analyst_level: "风控与合规"
---

# FERC等效T&D分摊会压缩IPP的BTM监管套利而非消灭24/7电力稀缺价值，最脆弱的是TLN，其次VST，CEG相对防御；SMR是2030年代期权，不是2026-2030年替代方案。

Analyst: **Chief Risk Officer**
Status: **completed**
Stance: **stress-test**
Completed: **08/05/2026, 02:26:53**

## Links

- Whiteboard topic: [[TMT板块：从“大模型训练”到“物理AI推理”的范式转移]]
- Card topic: [[FERC等效T D分摊会压缩IPP的BTM监管套利而非消灭24 7电力稀缺价值，最脆弱的是TLN，其次VST，CEG相对防御；SMR是2030年代期权，不是2026-2030年替代方案。]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

## Topic

FERC等效T&D分摊会压缩IPP的BTM监管套利而非消灭24/7电力稀缺价值，最脆弱的是TLN，其次VST，CEG相对防御；SMR是2030年代期权，不是2026-2030年替代方案。

## Question

Investigate the topic "FERC等效T&D分摊会压缩IPP的BTM监管套利而非消灭24/7电力稀缺价值，最脆弱的是TLN，其次VST，CEG相对防御；SMR是2030年代期权，不是2026-2030年替代方案。" and make the strongest evidence-based judgment you can.

## Summary

截至2026-05-08，FERC并未禁止co-location，但已把PJM推向“可接入、必须付费、防止成本转嫁”的规则框架。若强制等效T&D费用分摊且IPP不能完全转嫁，BTM溢价将显著回撤：TLN整股基准回撤-18%至-24%，VST -8%至-12%，CEG -4%至-7%；BTM溢价本身分别约回撤55-75%、45-65%、35-55%。监管压力会加速SMR期权，但2026-2030年不会倒逼AI巨头真正自建SMR，更可能采用FTM PPA、SMR股权投资、take-or-pay和公用事业/IPP运营伙伴的合成式垂直整合。

## Report

# BTM监管红线：CEG、VST与TLN压力测试
**工作日期：** 2026-05-08（Asia/Singapore）  
**分析师：** chief-risk | 首席风控官  
**立场：** 压力测试  
**主题：** FERC co-location裁决、等效T&D费用分摊与IPP的BTM溢价压缩

截至2026-05-08，我对card-06采取压力测试而非否定。前序方向是对的：稀缺的24/7电力对AI负荷仍有战略价值。真正脆弱的不是基本负荷电力本身，而是独立发电运营商（IPP）估值中被给予最高倍数的表后（BTM）co-location监管套利。如果FERC和PJM强制co-located数据中心支付等效输配电（T&D）成本，BTM溢价中约40-70%会被重定价，但对整家公司股权的冲击差异很大：TLN最敏感，VST中高敏感，CEG较低，因为它与Microsoft/Crane的合同已经是向电网投入电量的PPA，而不是Talen-AWS式BTM结构。

## 1. 监管基线

当前事实比“批准/否决”二元判断更复杂：

| 日期 | 事件 | 风险含义 |
|---|---:|---|
| 2024-11-01 | FERC否决PJM修订后的Susquehanna ISA，该协议原计划把Susquehanna-AWS co-located负荷从300 MW提高到480 MW；Exelon和AEP曾抗议该负荷会规避网络输电费。 | 首次明确证明BTM套利可能受到联邦层面的挑战。 |
| 2025-02-20 | FERC启动PJM show-cause审查，覆盖AI数据中心co-location、可靠性与公平成本分摊。 | 该问题从TLN单一案卷上升为通用关税风险。 |
| 2025-06-11 | Talen与Amazon重组为17年、最高1,920 MW、至2042年的front-of-the-meter PPA，计划在2026年春季输电重构后切换；双方还同意探索SMR和Susquehanna增容。 | TLN降低了直接BTM法律尾部风险，但也验证了原BTM模式在规模化后不够稳固。 |
| 2025-12-18 | FERC认定PJM关税在co-located load的费率、条款与条件上缺乏清晰度，属于不公正且不合理，并要求PJM建立四种输电服务路径。 | co-location得以保留，但“免费”使用电网服务的逻辑没有保留。 |
| 2026-04-16 | FERC部分接受、部分驳回PJM合规申报，并要求30天内继续提交合规文件。 | 规则清晰度在提高，但截至2026-05-08，费率下限和成本分摊仍是开放风险。 |

关键点是，真实政策路径并不是“禁止BTM”，而是“BTM可以存在，但同步接入电网的co-located load必须为其从电网获得的利益付费”。Chang委员的协同意见最清晰地表达了尾部风险：需要设定最低收费，以避免co-located load依赖PJM系统，却只支付black-start和regulation等很小费用。

## 2. 压力测试使用的成本栈

PJM 2026年1月NITS费率表给出了硬锚。Susquehanna所在的PPL区域，Network Integration Transmission Service费率为**$112,373/MW-year**，按95%负荷率折算约为**$13.5/MWh**。AEP为**$138,848.55/MW-year**，约**$16.7/MWh**；PSEG为**$183,352.99/MW-year**，约**$22.0/MWh**。这些只是输电费。完整的“等效T&D”压力还应包括辅助服务、本地配送、备用服务、计量、特殊保护系统和网络升级成本摊销。

风险测算采用三档等效T&D费用：

| 压力情景 | 等效T&D费用 | 1 GW、95%负荷率对应的年度EBITDA拖累 |
|---|---:|---:|
| 低档 | $20/MWh | $166 million |
| 基准 | $30/MWh | $250 million |
| 尾部 | $40/MWh | $333 million |

公式为：`1 GW x 8,760小时 x 95% x 费用`。这有意采用EBITDA敏感性，而不是最终EPS测算，因为费用由谁承担取决于合同条款。若无法充分转嫁给超算巨头，市场冲击最大。

## 3. 各股票BTM溢价回撤

本卡使用的市场参照点为：截至2026-05-08工作日前后，CEG市值约**$98.2 billion**，VST约**$54.9 billion**，TLN约**$18.6 billion**。2024年的FERC冲击提供了经验警示：2024-11-04 Susquehanna被否后，早盘指示显示CEG下跌**12.6%**、TLN下跌**8.0%**、VST下跌**6.3%**。

| 股票代码 | 压测使用的BTM/AI可选性敞口 | $30/MWh基准EBITDA拖累 | VaR估值方法 | 基准情景整股回撤 | BTM溢价回撤 |
|---|---:|---:|---|---:|---:|
| **TLN** | AWS PPA成熟期1.92 GW敞口；过渡期残留300 MW BTM | $479 million | 暴露经济性按8x EBITDA，扣除部分front-of-meter切换带来的降险 | **-18%至-24%** | **55%至75%** |
| **VST** | PJM/SERC核电与燃气co-location可选性2.5 GW | $624 million | 数据中心可选性按8x EBITDA | **-8%至-12%** | **45%至65%** |
| **CEG** | 核电co-location可选性2.0 GW；Microsoft/Crane本身视作低风险PPA | $499 million | 高质量核电可选性按10x EBITDA | **-4%至-7%** | **35%至55%** |

解释如下：

* **TLN：** 名义敞口最大，因为Talen创造了最早的标杆交易。但2025年AWS重组非常关键。计划在2026年春季切换到FTM后，旧BTM结构的直接法律风险明显下降；剩余风险主要是利润率稀释、未来复制价值下降以及投资者是否继续给稀缺性高倍数。若出现“等效T&D无法转嫁”的真正尾部情景，TLN可下跌**25-35%**，因为其市值相对1.92 GW合同叙事较小。
* **VST：** Vistra拥有更广泛的机组可选性和更强的燃气灵活性，因此不是单一案卷风险。但下行仍然实质存在，因为其AI估值提升部分依赖棕地项目的快速上线经济性。基准强制T&D费用会抹去约**$5.0 billion**的期权价值（8x EBITDA），约等于股权价值的**9%**。
* **CEG：** Constellation韧性更强。Crane Clean Energy Center与Microsoft的协议是在20年PPA下向电网新增约**835 MW**电量，不是Susquehanna-AWS BTM同类法律结构。CEG风险是二阶的：未来核电co-location价值下降、买方支付BTM稀缺溢价意愿下降，以及在部分核电资产已获得政策支持的州遭遇州层面阻力。

## 4. 组合风险视角

若使用**40% CEG / 35% VST / 25% TLN**的篮子，压力测试结果为：

| 情景 | 假设 | 篮子回撤 | 评论 |
|---|---|---:|---|
| 有序规则清晰化 | 仅最低收费，多数成本转嫁给超算巨头 | **-3%至-6%** | co-location保留，估值倍数温和压缩。 |
| 基准监管折价 | $30/MWh等效T&D由IPP部分承担 | **-9%至-13%** | 这是风险账本的工作VaR情景。 |
| 尾部法律冲击 | $40/MWh叠加网络升级，转嫁存在争议，并引发单日因子抛售 | **-18%至-25%** | 类似2024年FERC冲击，但TLN更脆弱，因为当前投资者预期更高。 |

VaR信息很直接：IPP敞口不能只用普通公用事业股对冲。这个监管因子本质上是做多核电稀缺、做多商用容量、做空成本分摊清晰化。更合适的对冲是部分持有具备数据中心关税机制的受监管IOU、输配电OEM，以及战术性买入拥挤IPP标的的put spread。

## 5. 这会倒逼AI巨头自建SMR吗？

不会在2026-2030年投资窗口内发生。监管压力会加速SMR可选性，但不会让自建SMR成为IPP PPA的近期替代品。

现有证据已经指向这个结论：

* Amazon与X-energy的目标是在**2039年**前推动超过**5 GW**新核电项目，Talen/Amazon也同意在Talen的宾夕法尼亚资产范围内探索SMR。
* Google与Kairos的目标是在**2035年**前部署最高**500 MW**，首个部署路径指向**2030年**。
* 这些时间表解决不了2026-2029年的AI推理电力需求。它们是2030年代的战略看涨期权。

更可能的路径是**合成式垂直整合**，而不是超算巨头亲自成为核电业主与运营商：入股SMR供应商、提供场址开发资金、签署take-or-pay购电协议、让公用事业或IPP承担运营，并使用front-of-meter合同证明家庭和小商业用户没有补贴数据中心。Talen-AWS重组就是模板：使用电网、支付配送费用、保留核电稀缺价值，并把SMR作为扩张期权。

## 6. 风控结论

我对card-06的压力测试结论是：“IPP ROIC超过IOU ROE”的逻辑只有在被表述为**稀缺24/7电力加上线速度**时才成立，不能被表述为长期免缴T&D成本。如果FERC强制等效T&D成本分摊，我的基准整股回撤估计为**TLN -18%至-24%**、**VST -8%至-12%**、**CEG -4%至-7%**。BTM溢价本身的风险大于整股风险，因为CEG和VST拥有更多元化的盈利基础。

下一个未回答的问题不应再是泛泛风险提示，而是TMT采购问题：哪些超算巨头能够承受更高的到场电力成本而不损害AI推理单位经济性？哪些会放慢部署或把工作负载转向低电力成本区域？

## 资料来源

1. FERC，**Docket ER24-2172**，否决PJM Susquehanna修订ISA的裁决，发布于2024-11-01：https://www.ferc.gov/sites/default/files/2024-11/20241101-3061_ER24-2172-000.pdf  
2. FERC，**FERC Orders Action on Co-Location Issues Related to Data Centers Running AI**，2025-02-20：https://ferc.gov/news-events/news/ferc-orders-action-co-location-issues-related-data-centers-running-ai  
3. FERC，**PJM co-location order Fact Sheet**，2025-12-18：https://www.ferc.gov/news-events/news/fact-sheet-ferc-directs-nations-largest-grid-operator-create-new-rules-embrace  
4. FERC，**Chang委员关于PJM co-location的协同意见**，2025-12-18：https://www.ferc.gov/news-events/news/e-1-commissioner-changs-concurrence-pjm-co-location  
5. FERC，**Rosner委员关于PJM co-location的协同意见**，2025-12-18：https://www.ferc.gov/news-events/news/e-1-commissioner-rosners-concurrence-pjm-co-location  
6. FERC，**2026年4月委员会会议摘要**，2026-04-16：https://www.ferc.gov/news-events/news/summaries-april-2026-commission-meeting  
7. PJM，**2026年1月NITS费率**，截至2026-01-01：https://www.pjm.com/-/media/DotCom/markets-ops/settlements/network-integration-trans-service-january-2026.pdf  
8. Talen Energy，**Form 8-K / AWS expanded nuclear energy relationship**，2025-06-11：https://ir.talenenergy.com/static-files/90cce90c-e281-42c6-b686-ed6010dd8699  
9. Talen Energy，**Form 10-Q中关于AWS切换至front-of-meter的披露**，2025-Q2：https://www.sec.gov/Archives/edgar/data/1622536/000162828025038626/tln-20250630.htm  
10. Constellation，**Crane Clean Energy Center / Microsoft 20年PPA**，2024-09-20：https://investors.constellationenergy.com/news-releases/news-release-details/constellation-launch-crane-clean-energy-center-restoring-jobs/  
11. Utility Dive，**FERC否决Talen-Amazon interconnection pact及市场反应**，2024-11-04：https://www.utilitydive.com/news/ferc-interconnection-isa-talen-amazon-data-center-susquehanna-exelon/731841/  
12. X-energy，**Amazon投资及2039年前5 GW SMR目标**，2024-10-16：https://x-energy.com/amazon-expanding-zero-carbon-power  
13. Google，**Kairos Power先进核能协议**，2024-10-14：https://blog.google/outreach-initiatives/sustainability/google-kairos-power-nuclear-energy-agreement/  

---
**元数据页脚：** chief-risk压力测试，card-07，工作日期2026-05-08，Board 2674a223-fe9c-4da5-829b-a39a70fe45a7。

## Follow-up

- Analyst: tmt-analyst
- Topic: AI推理数据中心的到场电力成本敏感性：更高T&D费用如何影响超算巨头部署节奏与区域选择
- Question: 在$20/$30/$40每MWh等效T&D费用情景下，AMZN、MSFT、GOOGL等超算巨头的AI推理单位经济性、数据中心IRR和区域迁移策略会如何变化？
