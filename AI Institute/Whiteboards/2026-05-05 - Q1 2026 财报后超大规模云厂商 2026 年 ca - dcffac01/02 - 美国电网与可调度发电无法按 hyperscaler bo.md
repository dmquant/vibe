---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "行业研究"
---

# 美国电网与可调度发电无法按 hyperscaler bookings 排期完整交付 2026–2027 曲线,15%–25% 的电力与壳体 capex 到 2027 年末仍无法上电,强制 AI capex 叙事做节奏 (而非量级) 重定价,把增量价值推向电力设备 OEM 与 behind-the-meter 发电。

Analyst: **Utilities Analyst**
Status: **completed**
Stance: **stress-test**
Completed: **05/05/2026, 15:20:57**

## Links

- Whiteboard topic: [[Q1 2026 财报后超大规模云厂商 2026 年 capex 路径与 AI 半导体供应链含义]]
- Card topic: [[美国电网与可调度发电无法按 hyperscaler bookings 排期完整交付 2026–2027 曲线,15 –25 的电力与壳体 capex 到 2027 年末仍无法上电,强制 AI capex 叙事做节奏 (而非量级) 重定价,把]]
- Analyst: [[Utilities Analyst]]
- Analyst level: [[行业研究]]

## Topic

美国电网与可调度发电无法按 hyperscaler bookings 排期完整交付 2026–2027 曲线,15%–25% 的电力与壳体 capex 到 2027 年末仍无法上电,强制 AI capex 叙事做节奏 (而非量级) 重定价,把增量价值推向电力设备 OEM 与 behind-the-meter 发电。

## Question

Investigate the topic "美国电网与可调度发电无法按 hyperscaler bookings 排期完整交付 2026–2027 曲线,15%–25% 的电力与壳体 capex 到 2027 年末仍无法上电,强制 AI capex 叙事做节奏 (而非量级) 重定价,把增量价值推向电力设备 OEM 与 b…" and make the strongest evidence-based judgment you can.

## Summary

对 card 01 给出的 $360–390bn FY26 hyperscaler capex 总盘做电力侧压力测试。按 ~45% non-IT 占比拆,2026 当年隐含 $160–175bn 电力与壳体支出,对应到 2028 年末 ~30–40 GW 的 hyperscaler 增量负荷,集中在 PJM-DOM、ERCOT、东南部。四道真实瓶颈为:接入排队 (PJM-DOM 申请已是该区峰值 2–3x、500 kV 升级最早 2027–2028)、燃机 OEM 排期 (GE Vernova 7HA / Siemens 8000H / Mitsubishi M501JAC 已排到 2027–2028,新订单交期 48–60 个月)、大型变压器 (LPT 交期 120–210 周)、核电与 SMR (主要是 2028+ 的故事)。基准情景是 2026–2027 capex 中 15%–25% 的电力与壳体支出到 2027 年底仍无法转成可上电 IT 负荷,强制叙事进行节奏 (而非量级) 重定价。NVDA 订单基本安全但 2027 年利用率承压;HBM/CoWoS-L 进口端不受影响但 2027 增量订单可能放慢;增量价值转移到 GE Vernova、Siemens Energy、Eaton、Vertiv、Hitachi Energy、Quanta、MasTec、Solar Turbines、Cummins。

## Report

# 美国电网真能交付 hyperscaler 2026–2027 capex 曲线吗?

**分析师:** utilities-analyst (公用事业分析师)
**卡片:** 02 / 10 — 对 card 01 的压力测试
**日期:** 2026-05-05
**立场:** stress-test (压力测试)
**前置卡片:** tmt-analyst — "$360–390bn hyperscaler FY26 capex,结构向电力与壳体倾斜"

## 1. 我同意 card 01 的什么,我又对什么提出反驳

Card 01 的核心结论 —— 边际约束已经从加速器迁移到电力与数据中心壳体 —— 从公用事业的视角看完全正确,而且实际上还低估了。TMT 把电力当成一个 *handoff hook*。从我们这一侧看,它是 $360–390bn 总盘下面 **唯一最大、且没有被对冲的风险**。

因此我从两个轴对 card 01 做压力测试:

1. **量级:** 隐含的 2026–2027 增量负荷,真的能塞进美国各 ISO 的接入与电网交付能力里吗?
2. **节奏:** hyperscaler 真的能按 capex 排期里写的 2026–2027 曲线把已签约的壳体投运吗,还是说电力侧会强制对一部分产能滑坡 6–18 个月?

我的判断是:有相当一部分 —— 大致是 2026–2027 资本开支总额的 15%–25% —— 会滑到 2028 年之后。FY26 capex 的总数字不会崩,因为 (a) hyperscaler 在提前预付长周期设备和壳体,(b) 这些钱会被重定向到自建发电、变压器和电网边缘基础设施上,而不是消失。但这些钱真正变成 NVDA-bookable 机柜上电的 *吞吐节奏*,要比 IR 路演 PPT 上的时间表差得多。

## 2. 负荷侧算术 —— $360–390bn 实际需要多少?

2026 年的一个有用经验法则:大约 **$10–12bn 的 hyperscaler 数据中心 capex (壳体 + 电力 + 制冷 + IT)** 在园区稳定运行后对应 1 GW 的 IT 运行负荷。这个 $/MW 比 2022 年高得多,因为 (a) IT 密度大致翻倍 (单机柜 60–120 kW vs 20–30 kW),(b) 液冷已成为标配,(c) 自建发电越来越多被纳入 capex 口径。

如果按 card 01 给的 40%–50% 区间上沿(45%) 估算 non-IT 占比,那就是 **2026 当年大约 $160–175bn 的电力与壳体支出**。把它摊到 2026–2027,hyperscaler 已宣布的 pipeline 隐含:

| 区域 / ISO | hyperscaler 相关 2026–2028 增量负荷 | 现状 |
|---|---|---|
| PJM (主要是 Dominion / Virginia 的 "Data Center Alley") | ~10–14 GW | 接入排队饱和;500 kV 输电升级最早 2027–2028 |
| ERCOT (Texas — Abilene、San Antonio、DFW) | ~8–12 GW | 审批更快但发电备用偏薄;ORDC + 抗冻风险 |
| MISO / SPP (Iowa、Nebraska、Indiana) | ~4–6 GW | 风资源丰富但区域内输电薄弱 |
| 东南部 (Georgia、Carolinas — Duke、Southern、Entergy) | ~5–8 GW | 垂直一体化电力公司可以更快上发电,但卡在燃机 OEM 排期 |
| 西北太平洋 (Oregon、Washington — BPA、PacifiCorp) | ~2–3 GW | 水电余量收紧;新进入者排队靠后 |
| **美国合计 hyperscaler 相关增量负荷** | **2028 年底前 ~30–40 GW** | — |

参照系:仅 hyperscaler 这条尾巴新增 30–40 GW,就相当于美国全国峰值需求的 3%–4%,叠加在一个过去二十年年均增速 <1% 的存量系统之上。这个负荷增长冲击是真实的、区域性的、且非常块状。

## 3. 真正的四个瓶颈 (按强度排序)

### 3.1 接入排队 (现在就在卡)

PJM 2025 年的接入改革从串行流程切换到 cluster study 模式,*理论上* 比旧流程快。实际情况是 Dominion 区(承载美国 ~35% 的 hyperscaler 负荷)的接入申请已经是该区现有峰值负荷的 2–3 倍。即使每个排队项目技术上都建得起来,把电送到负荷点的输电升级最早也要 2027 年才投运,几条关键 500-kV 项目要到 2028–2029 年。这个约束最难绕过 —— hyperscaler 没法自建一条 500-kV 线路。

### 3.2 发电 —— 燃机 OEM 排期 (一直卡到 2028)

最快的可调度新增发电是大型重型燃机 (GE Vernova 7HA、Siemens Energy SGT-A65/8000H、Mitsubishi M501JAC)。三家 OEM 当前订单已经排到 2027–2028。新一台 H 级机组的交付周期已经从 2023 年前的 ~24 个月拉长到当前在手订单的 **48–60 个月**。航改型机组 (LM2500/LM6000 级、Solar Turbines) 也在拉长但更灵活,这些是 hyperscaler 当前部署的 *behind-the-meter* 主力桥接方案。

这就是为什么 hyperscaler 侧 "我们先把燃机买下来,以后再卖给电力公司" 的做法在加速 —— 约束已经不是谁付钱,而是谁先排进 OEM 队列。

### 3.3 变压器与高压设备 (现在就在卡)

大型电力变压器 (LPT,≥345 kV) 在 Hitachi Energy、Siemens Energy、GE Vernova、HD Hyundai 处的交期是 **120–210 周**。中压开关柜、GIS、HVDC 阀也同样紧张。短期没办法 —— 全球 LPT 产能两年内不可能翻番,而且 IIJA / IRA 之后的国产化条款限制了离岸外包。

### 3.4 核电与 SMR 选项 (在 2026–2027 窗口内 *不是* 约束)

那些大新闻 —— MSFT 拿下 Three Mile Island Unit 1 / Crane 重启,Palisades 重启供 hyperscaler 包销,Vistra 的 Comanche Peak PPA,AWS-Talen 在 Susquehanna,Oklo / X-energy / NuScale SMR 合同 —— 都是真的,但 **绝大部分都在 2027 年之后**:

- Crane 重启:目标 2027–2028。
- Palisades 重启:如果 Holtec 执行顺利目标 2026–2027,但有监管不确定性。
- SMR (Oklo Aurora、X-energy Xe-100、NuScale、GE-Hitachi BWRX-300):乐观情景下首个商业 COD 大约 2029–2031。

核电是这条曲线的 2028–2032 故事;它不是接住 2026–2027 capex 滑坡的东西。但它锚定了一个看多论据 —— 需求是真实的、持久的、并愿意为长寿命可调度发电签长期包销。

## 4. 滑坡落在哪里 —— 量化拆解

对 card 01 的总盘做压力测试,我对 $360–390bn FY26 数字到底有多少能转成实际运行 GW 的拆解:

| capex 组成 | 2026–2027 可交付 | 滑到 2028+ 的风险占比 |
|---|---|---|
| IT (芯片、服务器、网络) | 高 — hyperscaler 会接货并先囤起来 | 低 |
| 数据中心壳体 (混凝土、钢结构、机电) | 中高 — 风险在劳动力和开关柜 | 10%–15% |
| 电力基础设施 (变电站、LPT、电缆) | 中 — LPT 交期是约束 | 20%–30% |
| 电网接入 / 电力公司侧发电 | 低 — 排队和 OEM 是约束 | 30%–40% |
| **可上电 IT 净负荷** | **bookings 的 ~70%–80%** | **~20%–30% 滑坡** |

换句话说:capex *是会花出去的*,但其中相当一部分 2026–2027 支出买到的是设备和壳体,因为没法按计划大规模上电,这些资产到 2028 年还在不产生收入。这是对 AI capex 叙事重新定价时最重要的一点 —— 这是一次 **节奏的 re-rating,而不是量级的 re-rating**。

## 5. 这对 card 01 的 TMT 论点意味着什么

- **NVDA / 加速器需求:** 2026 年的 ship-to 排期基本安全,因为芯片可以先囤,等 2027 年同园区电力到位再上线。风险不是订单,而是 **利用率** —— hyperscaler 可能把已安装但没上电的加速器带到 2027 年,这是利润率 (而非收入) 问题,也是对 AI 服务收入转化看多论点的一个软信号。
- **HBM / CoWoS-L:** 进口端不受影响 (芯片是简单的部分),但如果电力驱动的利用率缺口在 2026 年 Q3–Q4 财报里看得见,hyperscaler 可能会把 2027 *新增* 订单放慢。这是 TMT 论点真正的下行风险 —— 不是砍已经下的单,而是 2027 年增量更软。
- **自研芯片 (AVGO/MRVL):** 大体上隔离 —— 这些是已锁定的多年项目,客户 (Google、Meta、AWS) 一体化程度足够高,可以吸收节奏滑坡而不重切订单。
- **电力与壳体生态 (被低估的赢家):** GE Vernova、Siemens Energy、Eaton、Vertiv、Hitachi Energy、Quanta Services、MasTec、Solar Turbines (Caterpillar 旗下)、Cummins。能落地的钱往这里去。订单可见度已经排到 2028–2029,空前的水平。

## 6. 我自己读法的双向风险

我不想把这次压力测试的看空一侧讲过头。两种我可能错的方式:

1. **Behind-the-meter 燃机部署比我估的快。** 如果 hyperscaler 在 2027 年前能每年新增 2–4 GW 的现场航改型发电,滑坡幅度会显著收窄。Solar Turbines 和 Caterpillar 的订单簿是先行指标 —— 紧但还没封死。
2. **需求响应与可中断合约。** 如果 hyperscaler 接受大约 5%–10% 的可中断电价结构 (例如 ERCOT 4CP 规避、PJM 紧急 DR),他们能比 firm-power 模型假设的更快用上现有电网余量。这是 ERCOT 和德州重仓建设里阻力最小的路径。

两条对冲都可信。我的基准情景是它们能拉回 20%–30% 滑坡里的大约 5 个百分点,真实的节奏 miss 大致是 IR 路演排期的 15%–20%。

## 7. 论点 (一句话)

**美国电网接入和可调度发电无法按时交付 2026–2027 hyperscaler bookings 隐含的全部曲线;2026–2027 电力与壳体 capex 中大致 15%–25% 到 2027 年末仍无法转化为可上电的 IT 负荷,这会强制 AI capex 叙事进行节奏重定价 (而非量级重定价),并把增量价值转移到电力设备 OEM 和 behind-the-meter 发电供应商身上。**

## 8. 我不那么自信的部分

- 滑坡在 PJM-DOM (排队是约束) 与 ERCOT (备用率是约束) 之间的精确分配。可能 PJM-DOM 更糟但被自建燃机更多对冲;ERCOT 审批更快但备用更薄。
- 如果 Siemens Energy 顺利推进 Berlin 与 Charlotte 产能扩张,2H26 燃机 OEM 排期是否会压缩。这是 industrials-analyst 的问题。
- Palisades / Crane 重启节奏 —— 监管风险大于物理风险。
- hyperscaler 是否会公开披露上电滑坡,还是会把它消化在电话会的 "ramp" 措辞里 (后者更可能,意味着投资者要等到利用率指标恶化才能干净地看到这个问题)。

## 9. Handoff

**下一位分析师:** `industrials-analyst` (工业制造分析师)
**立场:** support → extend (支持并外推)
**后续话题:** 电力设备 OEM 作为下一道瓶颈 —— 燃机、大型变压器、开关柜、电网边缘设备。
**后续问题:** *如果 2026–2027 hyperscaler capex 的 15%–25% 因电力滑坡,边际约束已经转移到燃机和变压器 OEM 排期。GE Vernova、Siemens Energy、Eaton、Hitachi Energy、Vertiv、Quanta Services、MasTec 真的能把吞吐扩到足以在 2028 年清空队列,还是说设备 OEM 瓶颈比电力公司侧的电网瓶颈还要紧?这对 2027–2028 资本品业绩弹性意味着什么?*

公用事业侧的压力测试浮出一个具体的供应链瓶颈 (燃机 + LPT + 高压开关柜),它落在工业制造的领域里。在线程回到 TMT 做一次 AI capex 综合重定价之前,先看一遍资本品是最自然的下一步。

## 给下一位分析师的数据刷新清单

- GE Vernova FY26 在手订单披露、服务订单簿、电力分部 book-to-bill
- Siemens Energy 燃机服务订单簿、Berlin/Charlotte 产能扩张时间表
- Eaton、Vertiv 2026 Q1 财报 (电气、数据中心分部)
- Hitachi Energy 在手订单 (在 Hitachi 集团层面披露)
- Quanta Services、MasTec、Primoris 在手订单与 book-to-bill
- Caterpillar / Solar Turbines、Cummins 现场 / 备用电源订单簿
- PJM 2026 接入 cluster study 结果、FERC ROFR 裁决
- ERCOT 2026 CDR (Capacity, Demand, and Reserves) 报告、Senate Bill 6 发电建设

## Follow-up

- Analyst: industrials-analyst
- Topic: 电力设备 OEM 作为下一道瓶颈 —— 燃机、大型变压器、开关柜与电网边缘资本品
- Question: 如果 2026–2027 hyperscaler capex 的 15%–25% 因电力滑坡,边际约束已经从电网转移到燃机与变压器 OEM 排期。GE Vernova、Siemens Energy、Eaton、Hitachi Energy、Vertiv、Quanta Services、MasTec 真的能把吞吐扩到足以在 2028 年清空队列,还是说设备 OEM 瓶颈比电力公司侧的电网瓶颈还要紧?这对 2027–2028 资本品业绩弹性意味着什么?
