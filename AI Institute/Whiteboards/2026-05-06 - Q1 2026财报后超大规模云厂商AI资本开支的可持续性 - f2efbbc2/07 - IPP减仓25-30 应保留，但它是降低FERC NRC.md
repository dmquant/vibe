---
source: ai-institute
resource_type: whiteboard-card
card_index: 7
status: completed
analyst_level: "风控与合规"
---

# IPP减仓25-30%应保留，但它是降低FERC/NRC跳跃风险而非退出AI电力稀缺主线；组合还需要事件限额和CEG/VST边际VaR上限。

Analyst: **Chief Risk Officer**
Status: **completed**
Stance: **stress-test**
Completed: **09/05/2026, 13:40:29**

## Links

- Whiteboard topic: [[Q1 2026财报后超大规模云厂商AI资本开支的可持续性与瓶颈迁移]]
- Card topic: [[IPP减仓25-30 应保留，但它是降低FERC NRC跳跃风险而非退出AI电力稀缺主线；组合还需要事件限额和CEG VST边际VaR上限。]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

## Topic

IPP减仓25-30%应保留，但它是降低FERC/NRC跳跃风险而非退出AI电力稀缺主线；组合还需要事件限额和CEG/VST边际VaR上限。

## Question

Investigate the topic "IPP减仓25-30%应保留，但它是降低FERC/NRC跳跃风险而非退出AI电力稀缺主线；组合还需要事件限额和CEG/VST边际VaR上限。" and make the strongest evidence-based judgment you can.

## Summary

截至2026-05-09，本卡片压力测试卡片06的IPP减仓建议。按每100单位NAV的单位组合测算，CEG/VST从6.00%降至4.35%后，一日99% VaR从0.76% NAV降至0.68% NAV；若资金完全留作现金，可降至0.62% NAV。监管不利情景下损失从1.29% NAV降至1.05% NAV，CEG+VST方差贡献从66.8%降至48.3%。结论是减仓有效但不彻底，因为再配置到HWM/CLF仍保留AI电力因子风险。

## Report

# 2026-05-09 风险报告：IPP减仓与FERC/NRC不确定性下的组合VaR

截至2026-05-09（Asia/Singapore），我对卡片06进行压力测试而非否定：IPP减仓25-30%是正确动作，但它降低的是监管跳跃风险，并不等于退出AI电力稀缺主线。组合风险已经从设备交付风险进一步右移到CEG/VST的货币化风险：FERC共址规则与NRC重启/增容审批时点，可能把2027年EBITDA下修放大成相关性上升的因子回撤。

## 核心判断

IPP减仓后，AI电力组合的一日99%参数VaR从**0.76% NAV降至0.68% NAV**，监管不利情景下的模型压力损失从**1.29% NAV降至1.05% NAV**。改善是有效的，但并不彻底，因为部分风险预算被再配置到HWM/CLF，而它们仍然与同一条数据中心电力周期相关。如果25-30%的减仓资金完全转为现金而非上游瓶颈资产，一日99% VaR可进一步降至**0.62% NAV**。

## 单位组合假设

为便于横向比较，以下数字均按**每100单位组合NAV**计算。实际落地时应替换为风险系统中的真实持仓；小幅冲击下敏感性可线性放大或缩小。

| 持仓 | 减仓前权重 | 减仓后权重 | 风险角色 |
|---|---:|---:|---|
| CEG多头 | 3.50% | 2.55% | 核电/数据中心PPA稀缺性，NRC敏感度最高 |
| VST多头 | 2.50% | 1.80% | 燃气/核电稀缺性，PJM/ERCOT容量与套保账簿 |
| HWM多头 | 3.00% | 3.80% | HA级燃机铸件瓶颈 |
| CLF多头 | 1.50% | 2.00% | 高端GOES/变压器材料瓶颈 |
| GOOGL多头 | 2.00% | 2.00% | 超大规模云厂商交付韧性 |
| AMZN多头 | 2.00% | 2.00% | 超大规模云厂商交付韧性 |
| META空头/低配 | -2.00% | -2.00% | 交付错配对冲 |
| 现金/风险缓冲 | 0.00% | 0.35% | 未使用的减仓容量 |

减仓后IPP名义敞口为**4.35%**，较减仓前**6.00%**下降**27.5%**，对应卡片06建议25-30%减仓区间的中点。

## VaR与尾部指标

模型输入：日波动率假设为CEG 3.8%、VST 5.0%、HWM 2.6%、CLF 4.5%、GOOGL 2.3%、AMZN 2.6%、META 3.0%；CEG/VST相关性0.75；IPP与上游瓶颈资产相关性0.22-0.30；大型科技股相关性0.55-0.65。这些是本卡片的风险测算假设，并非已审计的持仓系统估计。

| 指标 | 减仓前 | 减仓后且再配置到HWM/CLF | 减仓后且资金留作现金 |
|---|---:|---:|---:|
| 一日组合sigma | 0.325% | 0.294% | 0.267% |
| 一日99% VaR | 0.76% NAV | 0.68% NAV | 0.62% NAV |
| 一日99% expected shortfall | 0.87% NAV | 0.78% NAV | 0.71% NAV |
| 十日99% VaR，平方根时间缩放 | 2.39% NAV | 2.16% NAV | 1.96% NAV |
| CEG+VST占组合方差比例 | 66.8% | 48.3% | 55.9% |

解释：减仓使IPP集中度风险下降近三分之一，但总VaR只下降**9.8%**，因为组合有意通过HWM/CLF保留同一AI电力稀缺因子。若目标是主题收益延续，这可以接受；若CIO目标是纯粹回撤保护，则不够。

## EBITDA到股价冲击映射

卡片06给出的2027E EBITDA下修为**CEG 8-12%**、**VST 5-8%**。我通过两个渠道映射到权益压力：

| 渠道 | CEG | VST | 组合含义 |
|---|---:|---:|---|
| EBITDA敏感性 | -10%中点 x 1.3权益beta = -13% | -6.5%中点 x 1.2权益beta = -8% | CEG更暴露，因为重启/增容时点久期更长 |
| 估值/监管溢价压缩 | -5%至-8% | -4%至-7% | FERC/NRC不确定性提高未来稀缺租金的折现率 |
| 监管不利综合股价冲击 | -18%至-22% | -12%至-16% | 基准尾部压力采用CEG -20%、VST -15% |

这一压力来自可观察的政策不确定性。FERC在2024年11月1日驳回PJM关于Susquehanna ISA的修订，该修订原本会把共址负荷从**300 MW提高到480 MW**；FERC共址技术会议议程也明确把成本分摊、备用服务、可靠性、资源充足性和市场价格影响列为核心问题。NRC关于Crane Clean Energy Center的材料显示，Constellation仍需获得NRC批准以恢复运行许可基础，且正式受理重启修订并不代表批准。因此CEG/VST风险是跳跃过程，而不只是高beta公用事业因子。

## 情景损益

| 情景 | 冲击定义 | 减仓前P/L | 减仓后P/L | 风险解读 |
|---|---|---:|---:|---|
| 渐进右移 | CEG -10%、VST -7%、HWM +4%、CLF +2%、GOOGL/AMZN +1%、META -2% | -0.30% NAV | -0.11% NAV | 基准情景：利润上移到上游，IPP回撤大体被吸收 |
| 监管不利 | CEG -20%、VST -15%、HWM -4%、CLF -6%、GOOGL/AMZN +1%、META +2% | -1.29% NAV | -1.05% NAV | 主要尾部：EBITDA下修与估值压缩同时发生 |
| 双重冲击 | CEG -30%、VST -25%、HWM -12%、CLF -18%、GOOGL -8%、AMZN -9%、META -10% | -2.45% NAV | -2.17% NAV | 系统性risk-off：上游再配置的缓冲下降，因为AI电力敞口同跌 |
| 政策利好反转 | CEG +16%、VST +13%、HWM +2%、CLF +3%、GOOGL/AMZN +1%、META -1% | +1.05% NAV | +0.84% NAV | 减仓的机会成本约为该单位组合0.21% NAV |

关键风控数字不是VaR下降本身，而是损失的上行与规避的下行之比。按中点减仓，政策利好反转情景下牺牲约**0.21% NAV**上行，同时在监管不利情景中规避约**0.24% NAV**损失，在双重冲击中规避约**0.27% NAV**损失。这个风险收益交换幅度不大但为正，尤其是释放出的风险预算仍通过HWM/CLF保留结构性瓶颈主线。

## 风控动作

1. 维持25-30%的IPP减仓，直到FERC给出可复制的共址电价/并网路径，或NRC重启与增容审批从二元事件变成更连续的流程。
2. 将CEG+VST合计边际VaR贡献控制在AI电力组合**50%**以下；减仓后为**48.3%**，刚好低于阈值。
3. 2026 H2战术上VST优于CEG，因为VST有更多近端已实现能源/容量价格支持，且单一NRC重启久期较低；但不应把CEG空头做成结构性空头，因为Crane审批路径一旦明朗可能导致股价跳升。
4. 如果CIO目标是回撤保护而非主题延续，应把IPP减仓资金留在现金或指数对冲中；再配置到HWM/CLF能保留alpha，但仍暴露于AI基础设施因子整体抛售。
5. 除VaR外设置事件限额：对冲后，单个FERC/NRC负面标题在该单位组合中的损失不应超过**1.1% NAV**。

## 信息来源

- FERC，**Order Rejecting Amendments to Interconnection Service Agreement**，Docket ER24-2172-000/001，2024年11月1日发布：https://www.ferc.gov/sites/default/files/2024-11/20241101-3061_ER24-2172-000.pdf
- FERC，**Commissioner-led Technical Conference Regarding Large Loads Co-Located at Generating Facilities**，2024年11月1日议程：https://ferc.gov/news-events/events/commissioner-led-technical-conference-regarding-large-loads-co-located
- NRC，**Christopher M. Crane Clean Energy Center**重启信息页：https://www.nrc.gov/info-finder/reactors/ccec
- NRC，**No. 26-021**，2026年2月24日，CCEC重启许可修订听证机会：https://www.nrc.gov/sites/default/files/cdn/doc-collection-news/2026/26-021.pdf
- PJM，**2025 Long-Term Load Forecast Report**，2025年1月：https://www.pjm.com/-/media/DotCom/library/reports-notices/load-forecast/2025-load-report.pdf
- PJM，**2026/2027 Base Residual Auction Report**，2025年7月：https://www.pjm.com/-/media/DotCom/markets-ops/rpm/rpm-auction-info/2026-2027/2026-2027-bra-report.pdf
- Vistra，**First Quarter 2026 Results**，2026年5月7日：https://www.prnewswire.com/news-releases/vistra-reports-first-quarter-2026-results-302765015.html
- Constellation Energy，**Fourth Quarter and Full Year 2025 Results**，2026年2月24日：https://investors.constellationenergy.com/news-releases/news-release-details/constellation-reports-fourth-quarter-and-full-year-2025-results

**元数据页脚：** 数据与情景假设截至2026-05-09（Asia/Singapore）。由于实时目录中不存在card-02、card-03、card-04和card-06文件，本卡片根据任务提示中的会话摘要重建上游内容。

## Follow-up

- Analyst: asset-allocator
- Topic: 将风险预算转化为AI电力主题组合的目标权重、现金缓冲与对冲结构
- Question: 在CEG+VST边际VaR贡献不超过50%、单一FERC/NRC负面事件损失不超过1.1% NAV的约束下，AI电力主题组合应如何在GOOGL/AMZN、META对冲、HWM/CLF和CEG/VST之间重新分配风险预算？
