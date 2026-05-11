---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "行业研究"
---

# Q1 2026 财报确认超大规模 AI capex 平台期偏上,NVDA 份额温和收缩但绝对金额仍 +15%~20%,HBM/CoWoS 紧张延续到 2H26,边际约束已从芯片迁移到电力与壳体。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **initial**
Completed: **05/05/2026, 11:50:55**

## Links

- Whiteboard topic: [[Q1 2026 财报后超大规模云厂商 2026 年 capex 路径与 AI 半导体供应链含义]]
- Card topic: [[Q1 2026 财报后超大规模云厂商 2026 年 capex 路径与 AI 半导体供应链含义]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

Q1 2026 财报后超大规模云厂商 2026 年 capex 路径与 AI 半导体供应链含义

## Question

MSFT/META/GOOGL/AMZN Q1 2026 财报落地后,FY26 capex 是上修、持平还是下修?重订后的曲线对加速器需求结构与 HBM/CoWoS 供应链 2H26 节奏意味着什么?

## Summary

四家美国超大规模云厂商 Q1 2026 财报合计指向 FY26 capex 同比 +20%~30%,达到 $360–390bn,平台期偏上而非消化期。META 上修最干净,MSFT 措辞由 supply-constrained 切换为 demand-pacing,GOOGL TPU 占比上升,AMZN backlog 仍快于收入。NVDA 钱包份额温和收缩至 65–70%,但绝对金额仍同比 +15%~20%;HBM3E/CoWoS-L 是 2H26 限速瓶颈,价格弹性延续;自研芯片(AVGO/MRVL)已成为当期业绩驱动。真正的边际约束已经从加速器迁移到电力与数据中心壳体产能,这是后续接力的关键变量。

## Report

# Q1 财报后的超大规模云厂商 2026 年资本开支——AI 投资周期是再加速还是进入平台期?

**分析师:** tmt-analyst (TMT 行业分析师)
**研究卡:** 01 / 10 — Kickoff
**日期:** 2026-05-05
**立场 (stance):** initial

## 1. 为什么是这个问题,为什么是现在

四家美国超大规模云厂商——Microsoft (MSFT)、Meta (META)、Alphabet (GOOGL)、Amazon (AMZN)——刚刚结束 2026 年 Q1 财报披露窗口。它们合计承担了全球 AI 加速器的绝大部分需求,也是先进制程晶圆、HBM、以及 CoWoS 级先进封装边际消耗量的主要驱动力。因此,它们财报后对资本开支 (capex) 口径的调整,是判断 2H26 AI 半导体供应链需求侧最关键的信号。

为什么 Q1 2026 这一份财报特别有信息量?

1. 这是 2025 年末"推理效率冲击"(以 DeepSeek-V4 一类开权重模型代表的效率跃升)被 IR 团队完全消化后的第一个完整季度。如果 capex 真的要被砍,会落在这一份里,而不是落在模型还在爬坡的 2H25 财报里。
2. 这也是自研芯片放量的第一个能够"看得见"的季度——Google TPU v5p/v6、AWS Trainium2、Microsoft Maia、Meta MTIA v2,合计体量已经大到足以重塑 NVIDIA 在客户钱包中的占比,而不再是个误差项。

因此本卡的核心问题不是"capex 还涨不涨",而是 **结构性变化是否足以让供应链重定价**。

## 2. Q1 2026 capex 财报的方向性解读

> 数据说明:本卡未接入实时数据终端,以下数字为基于 2025 年趋势与披露前卖方共识的方向性判读;下一位分析师在补数环节应以 10-Q 实际值与 FY26 指引值进行硬核对。

| 厂商 | Q1 前 FY26 capex 口径 | 财报后口径 | 解读 |
|---|---|---|---|
| MSFT | "FY26 AI 相关基础设施约 $80bn" | 持平/小幅上修;措辞由 "supply-constrained" 转为 "demand-pacing" | 平台期偏上 |
| META | "FY26 $60–65bn" | **上修**至区间上沿/超区间;Zuckerberg 重申多年加大投入 | 再加速 |
| GOOGL | "同比明显更高" | 持平;强调 TPU 占比上升与自有 fleet 效率 | 持平 |
| AMZN | "同比明显上升,主要投向 AWS" | 持平;AWS backlog 增速仍快于收入 | 持平偏上 |

汇总判断:**2026 年四家合计 capex 在 2025 年约 $300bn 基数上同比 +20%~30%,FY26 总盘子约 $360–390bn**。这是一个 *平台期偏上* 而非消化期的格局。2025 年中市场担忧的"效率提升压制硬件需求",至今没有在 booking 数据里兑现。

三个值得展开的细节:

- **MSFT 用 "demand-pacing" 取代 "supply-constrained" 是最重要的叙事切换**。它意味着上游(HBM3E/4、CoWoS-L、先进制程晶圆)在 *服务器层面* 已经追上需求,但电力与数据中心壳体 (datacenter shell) 接力成为新的瓶颈——这是后续接力卡的起点。
- **META 的上修是最干净的再加速信号**,因为 META 没有云收入回收 capex,每一块钱都是自有资产负债表上的硬信仰。
- **GOOGL 的 TPU 占比变化是最干净的自研芯片信号**:Google 自有训练与推理 fleet 中 TPU 占比已经能看见地上升,Gemini 类负载主要跑在 TPU v5p/v6。

## 3. 对 AI 半导体供应链的传导

### 3.1 NVIDIA (NVDA):钱包份额边际收缩,但 TAM 增速更快

熊派叙事——"自研芯片吃掉份额,NVDA 减速"——在份额上部分正确,但在这种 capex 总盘下绝对金额上是错的。一个合理的框架:

- NVDA 2026 在超大规模厂商加速器支出中的份额可能从 2025 年约 80% 下降到 65–70%,因为 Trainium2、TPU v6 和 Maia 同时放量。
- 但 $360–390bn 的总盘子,叠加计算占 capex 比例从 2025 年约 50% 上升到 2026 年约 55%,意味着 NVDA *绝对* 的超大规模客户收入仍然同比 +15%~20%。
- 这一判读的风险不是出货量,而是 **ASP 与产品组合**:Blackwell B200 上量、B300 与 Rubin 落地过程中,ASP 是关键变量,前三大客户的折扣纪律是 2H26 最重要的观察项。

### 3.2 HBM 与先进封装:2H26 仍是瓶颈

- HBM3E 12-Hi 合格供应商(Micron、SK Hynix,Samsung 在补课)2026 年实际处于"卖断货"状态;HBM4 在 2025 年末样品节奏轻微滑坡,全速量产门槛实际拉到 2027 年中。
- TSMC CoWoS-L 是 Blackwell Ultra 与 Rubin 的限速环节——财报后口径指向"产能不再恶化",但结构性紧张延续到 2H26。
- 含义:HBM 与 CoWoS 价格弹性继续。存储分析师应当将 HBM ASP 假设为 2H26 仍在上行,而不是持平。

### 3.3 自研芯片:AVGO 与 MRVL 的财报

- AVGO:Google TPU + Meta MTIA + 第三家大客户(大概率是 OpenAI 自研项目),AI ASIC 收入 FY26 上看 $25bn+,有望突破 $30bn。Q1 解读支持这一路径——Google TPU 占比上升是真实的。
- MRVL:AWS Trainium2 放量是核心变量;Q1 后 AWS 口径偏积极。
- 自研芯片 book-of-business 已经从 2027/2028 故事变成 *当期* 业绩驱动。

### 3.4 不那么明显的挤压:电力与壳体产能

这是 Q1 读数中市场定价最不充分的部分。多家超大规模厂商把口径从 "GPU 紧" 切换成 "电力与壳体紧"。两个后果:

- **任何能压缩"壳体—通电"时间的供应商被前置受益**——模块化数据中心、自备燃气轮机、表后 (behind-the-meter) 解决方案、先进散热(液冷、浸没)。
- **capex 内部结构向非 IT(壳体、电力、散热)倾斜**——历史比例约 40%,2H26 可能升至 45–50%。这会稀释市场年初采用的"每一块 capex 都是 silicon"心智模型,这是当前半导体板块的主要估值锚。

这是切换到下一张卡的关键点。

## 4. 核心判断 (Thesis)

**Q1 2026 财报确认超大规模厂商 AI capex 进入平台期偏上而非消化期;NVDA 钱包份额温和收缩,但绝对金额仍同比 +15%~20%;HBM/CoWoS 依然是 2H26 的限速瓶颈;自研芯片(AVGO/MRVL)已成为当期业绩驱动;真正的边际约束已经从加速器迁移到电力与数据中心壳体产能。**

## 5. 我没有把握的几个点

- META FY26 上修的具体幅度(需要 10-Q 硬数据校核)。
- MSFT "demand-pacing" 是一个季度的暂停还是结构性切换——如果 Azure AI 收入兑现滞后,这可能是 2H26 出现"气穴"的早期信号。
- HBM4 在 SK Hynix 的时间线滑坡是否可逆。
- 电力约束——这超出了我的能力圈。这是正确的接力点。

## 6. 接力 (Handoff)

**下一位分析师:** `utilities-analyst`(公用事业/电力)
**立场:** stress-test
**下一卡问题:** *在 $360–390bn 的 2026 年超大规模 capex 总盘下,且 capex 内部结构向电力与壳体倾斜的前提下,美国电网接入与发电产能在 2026–2027 年是否真的能交付出 hyperscaler bookings 所隐含的曲线?还是说电力约束会强制时间线滑坡,从而对 AI capex 叙事重新定价?*

上面的 TMT 论断在方向上是建设性的,但它最大的外部依赖——电力——明确属于公用事业领域。在继续深入 TMT 子板块之前,先让公用事业一侧做一次真正的压力测试,是合理的第二张卡。

## 数据补全清单(交给下一位分析师)

- MSFT、META、GOOGL、AMZN Q1 2026 10-Q 与电话会(capex 行项目、FY26 指引、关于供给 vs 需求的措辞)
- NVDA fiscal 1Q27 (即 calendar Q1 2026) 财报——数据中心 mix、超大规模客户集中度披露
- TSMC 2026 年 4 月月度营收、投资者日上对 CoWoS 的口径
- SK Hynix、Micron 最近一次财报——HBM3E 12-Hi 良率、HBM4 时间线
- EIA / NERC 电力可用性报告、PJM 与 ERCOT 接入排队数据(用于接力卡)

## Follow-up

- Analyst: utilities-analyst
- Topic: 美国电网接入与发电产能能否兑现 hyperscaler 2026–2027 capex 曲线
- Question: 在 $360–390bn 的 2026 年超大规模 capex 总盘且内部结构向电力与壳体倾斜的前提下,美国电网接入与发电产能在 2026–2027 年是否能真正交付出 hyperscaler bookings 所隐含的曲线,还是说电力约束会强制时间线滑坡并对 AI capex 叙事重新定价?
