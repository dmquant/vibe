---
source: ai-institute
resource_type: whiteboard-card
card_index: 5
status: completed
analyst_level: "风控与合规"
---

# 该 sleeve 可以纳入大组合，但只能作为带有明确 crash budget 的高置信 thematic equity sleeve：未对冲 drawdown 预算 -31%，hedge 后目标 -20% 至 -23%，10-day 99% VaR 需控制在 12.4% 或更低。

Analyst: **Chief Risk Officer**
Status: **completed**
Stance: **stress-test**
Completed: **02/05/2026, 07:35:29**

## Links

- Whiteboard topic: [[The Inference Collapse Deflation or Volume Expansion]]
- Card topic: [[该 sleeve 可以纳入大组合，但只能作为带有明确 crash budget 的高置信 thematic equity sleeve：未对冲 drawdown 预算 -31 ，hedge 后目标 -20 至 -23 ，10-day 99]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

## Topic

该 sleeve 可以纳入大组合，但只能作为带有明确 crash budget 的高置信 thematic equity sleeve：未对冲 drawdown 预算 -31%，hedge 后目标 -20% 至 -23%，10-day 99% VaR 需控制在 12.4% 或更低。

## Question

Investigate the topic "该 sleeve 可以纳入大组合，但只能作为带有明确 crash budget 的高置信 thematic equity sleeve：未对冲 drawdown 预算 -31%，hedge 后目标 -20% 至 -23%，10-day 99% VaR 需控制在 12.4% 或更…" and make the strongest evidence-based judgment you can.

## Summary

本卡对 Card 4 的 factor-adjusted MSFT/Tencent/GOOGL/CRM/SAP/NOW/BABA/SNOW/PLTR sleeve 进行风控压力测试。结论是 thesis 可保留，但只有在 5%-6% 初始仓位、8% 战术上限、1.1%-1.6% sleeve NAV 年度 hedge budget 下才可纳入大组合。模型年化波动率为 26.7%，未对冲 10-day 99% VaR 为 12.4%，基准联合压力 drawdown 为 -30.8%；hedge 后目标为 -20% 至 -23%。严重 breach case 为 -41% 至 -42%，应触发强制降风险而非被视为可承受经营回撤。

## Report

# Card 05 — Factor-Adjusted AI Workflow/Data Control-Plane Sleeve 的风险预算

**角色：** 首席风控官  
**立场：** stress-test  
**问题：** 在 AI multiple compression、利率上行和中国政策冲击同时发生的情景下，factor-adjusted `MSFT`/Tencent/`GOOGL`/`CRM`/`SAP`/`NOW`/`BABA`/`SNOW`/`PLTR` sleeve 应被赋予怎样的 drawdown、VaR 和 hedge budget，才能纳入更大组合？

## 执行结论

我支持前序的 control-plane thesis，但前提是必须给出明确亏损上限和常设 hedge。Card 4 已经把权重从更拥挤的标的转向 `SAP`、`CRM`、`GOOGL`，改善了因子结构；但这个 sleeve 本质上仍是集中度较高的长久期科技风险组合。在真正的联合冲击中，三个风险因子不会互相分散：AI multiple compression 会打击整个主题，利率上行会压缩 software duration，中国政策风险会让 Tencent/`BABA` 从分散项变成相关下行来源。

该 sleeve 可以纳入更大组合，但必须遵守以下约束：

| 风险项目 | 未对冲 sleeve 预算 | 对冲后目标 | sleeve 权重 6% 时的组合含义 | sleeve 权重 8% 时的组合含义 |
|---|---:|---:|---:|---:|
| 模型年化波动率 | 26.7% | 22%-24% | 分散前贡献 1.60% | 分散前贡献 2.14% |
| 1-day 99% VaR | 3.9% | 3.0%-3.4% | 23 bps | 31 bps |
| 10-day 99% VaR | 12.4% | 8.5%-10.0% | 未对冲 74 bps；对冲后 51-60 bps | 未对冲 99 bps；对冲后 68-80 bps |
| 21-day 99% VaR | 18.0% | 12.5%-15.0% | 未对冲 108 bps；对冲后 75-90 bps | 未对冲 144 bps；对冲后 100-120 bps |
| 基准联合压力 drawdown | -30.8% | -20% 至 -23% | 未对冲 -185 bps；对冲后 -120 至 -138 bps | 未对冲 -246 bps；对冲后 -160 至 -184 bps |
| 严重 breach-case 压力 drawdown | -41% 至 -42% | -27% 至 -30% | 不是经营预算；触发强制降风险 | 不是经营预算；触发强制降风险 |
| 正常 hedge premium 预算 | 每年 1.1%-1.6% sleeve NAV | 相同 | 总 NAV 的 7-10 bps | 总 NAV 的 9-13 bps |
| 危机 hedge premium 预算 | 每年 2.5%-3.5% sleeve NAV | 仅临时使用 | 总 NAV 的 15-21 bps | 总 NAV 的 20-28 bps |

实际建议是：在平衡型多资产组合中，初始配置 5%-6%；战术上限 8%；为正常 hedge 预留每年 1.1%-1.6% sleeve NAV。如果投资组合无法承受 sleeve 权重 6% 时 -185 bps 的未对冲压力损失，就不应纳入该 sleeve。若 hedge 已生效，合格目标是 6% 权重下压力损失降至 -120 至 -138 bps，且 10-day 99% VaR 贡献低于 60 bps。

## Card 4 的起点

本压力测试使用 Card 4 的 factor-adjusted 权重：

| Ticker / 经济敞口 | 权重 | 风险角色 |
|---|---:|---|
| `MSFT` | 15% | mega-cap platform、AI workflow 分发、对利率敏感的 quality growth |
| Tencent / `TCEHY` / `0700.HK` | 11% | 中国 platform beta、社交/data control plane、政策敏感现金流 |
| `GOOGL` | 15% | mega-cap platform、搜索/云 AI workflow、广告周期性 |
| `CRM` | 17% | workflow control plane、software duration、quality/value ballast |
| `SAP` | 20% | 企业 system-of-record ballast，multiple-duration 风险较低 |
| `NOW` | 6% | premium workflow software duration |
| `BABA` | 8% | 中国云/platform beta、政策与消费周期性 |
| `SNOW` | 5% | 高久期 data platform、高 multiple beta |
| `PLTR` | 3% | 拥挤度较高的 AI outcome platform、高波动 |
| **合计** | **100%** |  |

Card 4 将 mega-cap/platform beta 降至 49%，premium software duration 降至 14%，China policy beta 降至 19%，同时将 quality/value ballast 提升到 52%。这比前一个版本更好，但不是低风险配置。它是一个 factor-adjusted thematic sleeve，而不是防御型权益资产。

## 外部风险锚

风险预算基于五个可观察事实：

1. 核心 thesis 真实存在，但也有通缩属性：Stanford HAI 报告称，达到 GPT-3.5 等效 MMLU 水平的查询成本，从 2022 年 11 月每百万 token `$20.00` 降至 2024 年 10 月 `$0.07`，降幅超过 280 倍。这支持 inference collapse 逻辑，但也意味着任何不能证明 workflow ownership 的 AI 收入都面临估值压缩风险。[^1]
2. 利率环境不是零利率 software duration。Federal Reserve 在 2026 年 3 月 18 日的 FOMC statement 中将 federal funds target range 维持在 `3-1/2 to 3-3/4 percent`，如果通胀或期限溢价重新上行，长久期软件仍会承压。[^2]
3. 市场 hedge 工具存在，但必须付费。Cboe 将 `VIX` 定义为由实时 `SPX` 期权报价推导的 30 天预期波动率，因此 equity-index option hedges 是应对突发 beta 和 correlation shock 的合适工具。[^3]
4. VaR 有用，但不完整。SEC Rule 18f-4 将 VaR 定义为在指定期限和置信度下的潜在亏损估计；SEC 的最终规则说明也明确指出，VaR 不是最大亏损估计，也不描述超过置信阈值后的亏损规模。[^4][^5]
5. 中国政策风险是实际因子，不是事后叙事。中国自 2025 年 1 月 1 日生效的网络数据安全管理条例覆盖数据处理、个人信息保护、重要数据管理、跨境数据规则和互联网平台服务提供者义务；同时，国务院关于 AI 安全治理和平台反垄断指引的发布，也显示 AI 与算法平台活动仍处在持续政策监管中。[^6][^7][^8]

## VaR 模型

我使用 sleeve-level covariance model，而不是单一指数 beta 模型，因为该 sleeve 同时包含美国 mega-cap platform、欧洲企业软件、中国互联网 ADR/HK 风险和高波动软件。模型假设刻意保守：

| Ticker | 权重 | 年化波动率假设 | 相关性处理 |
|---|---:|---:|---|
| `MSFT` | 15% | 26% | 与 platform 和 software 因子相关 |
| Tencent / `TCEHY` | 11% | 36% | 与中国互联网和 platform 因子相关 |
| `GOOGL` | 15% | 29% | 与 platform 和广告 beta 相关 |
| `CRM` | 17% | 33% | 与 enterprise software duration 相关 |
| `SAP` | 20% | 25% | 低波动 ballast，但仍有 equity beta |
| `NOW` | 6% | 38% | premium software duration |
| `BABA` | 8% | 42% | 中国互联网和 policy beta |
| `SNOW` | 5% | 60% | 高久期 data-platform beta |
| `PLTR` | 3% | 75% | 高拥挤 AI beta |

得到的 sleeve 年化波动率为 26.7%。Normal-distribution VaR 不是最终风险上限，但提供共同的经营语言：

| 期限 | 95% VaR | 99% VaR | 99% expected shortfall proxy |
|---|---:|---:|---:|
| 1 day | 2.8% | 3.9% | 4.5% |
| 10 days | 8.8% | 12.4% | 14.2% |
| 21 days | 12.7% | 18.0% | 20.6% |

10-day 99% VaR 的 12.4% 是准入核心指标。如果该 sleeve 占更大组合 6%，分散前 gross VaR 贡献为 74 bps；如果 sleeve 占 8%，贡献升至 99 bps。只有在更大组合有流动性和 duration hedge 抵消时，这些数字才可接受；对 risk-parity 或 capital-preservation mandate 来说，未对冲的 satellite 风险过高。

## 联合压力测试

基准压力假设三个冲击同时发生：

| 冲击腿 | 压力假设 | 对 sleeve 的传导 |
|---|---|---|
| AI multiple compression | Workflow/data winners 仍有战略价值，但市场下调 AI 终值 multiple，不再为 generic token volume 付费 | 九个标的全部 de-rate；`SNOW`、`PLTR`、`NOW`、`CRM` 受冲击最大 |
| 利率冲击 | 10-year yield / real-rate proxy 上行 100 bps，曲线 bear-steepen，equity risk premium 扩张 | premium software duration 和高 free-cash-flow-duration 标的下跌 |
| 中国政策冲击 | platform governance、data security、cross-border data、antitrust 或 industrial-security enforcement 令投资者意外 | Tencent 与 `BABA` 跑输；全球平台出现二阶 risk-premium 压力 |
| 相关性/流动性缺口 | hedge fund 降低拥挤 AI/software 敞口，ETF 流动性主导价格发现 | 对 sleeve NAV 额外扣减 -3.0 个百分点 |

Ticker 层面的压力损失：

| Ticker / 敞口 | 权重 | 基准压力收益率 | 对 sleeve drawdown 的贡献 |
|---|---:|---:|---:|
| `MSFT` | 15% | -24% | -3.6% |
| Tencent / `TCEHY` / `0700.HK` | 11% | -35% | -3.9% |
| `GOOGL` | 15% | -23% | -3.5% |
| `CRM` | 17% | -28% | -4.8% |
| `SAP` | 20% | -18% | -3.6% |
| `NOW` | 6% | -34% | -2.0% |
| `BABA` | 8% | -38% | -3.0% |
| `SNOW` | 5% | -45% | -2.3% |
| `PLTR` | 3% | -40% | -1.2% |
| **单名加权小计** | **100%** |  | **-27.8%** |
| **相关性/流动性缺口** |  |  | **-3.0%** |
| **基准联合压力 drawdown** |  |  | **-30.8%** |

这就是准入时应采用的未对冲 drawdown 预算：sleeve 层面 -31%。严重 breach case 为 -41% 至 -42%，使用更深的中国和高久期软件冲击。严重情景不应被视为可容忍经营回撤，而应触发强制降风险。

## Hedge 设计

Hedge 不应试图中性化 thesis，而应中性化三个失败模式：拥挤 AI beta、software duration 和 China policy beta。

| Hedge sleeve | 工具示例 | 占 sleeve NAV 的名义预算 | 正常角色 | 基准压力 payout 目标 |
|---|---|---:|---|---:|
| 全球 AI/platform beta | 3-6 个月 `QQQ`/`NDX` 7% OTM / 22% OTM put spreads | 30% | 保护 `MSFT`、`GOOGL`、`CRM`、`NOW`、`SNOW`、`PLTR` beta | +3.5 至 +4.5 pts |
| Premium software duration | 3-6 个月 `IGV`/software-basket 10% OTM / 30% OTM put spreads，或在流动性足够时使用 futures overlay | 15% | 保护 `CRM`、`NOW`、`SNOW`、`PLTR` multiple compression | +1.8 至 +2.5 pts |
| 中国互联网政策 beta | 3-6 个月 `KWEB`/`FXI`/Hang Seng Tech put spreads；执行条件更好时使用港股期货 | 15% | 保护 Tencent 与 `BABA` 政策冲击 | +2.2 至 +3.2 pts |
| 利率 convexity | payer swaptions、`TLT`/`IEF` put spreads，或按 DV01 sizing 的 Treasury futures shorts | 8% 名义等效 | 保护软件久期免受再度利率上行引发的 de-rating | +0.5 至 +0.8 pts |
| **合计** |  | **约 68% gross hedge notional** |  | **+8 至 +11 pts** |

目标结果：基准压力从未对冲 -30.8% 降至对冲后约 -20% 至 -23%。在严重 breach case 中，hedge 应贡献 +13 至 +15 个百分点，将 -41% 至 -42% 的亏损降至约 -27% 至 -30%。这仍然很痛，这正是重点：hedge budget 管理准入风险，但不会把集中主题 sleeve 变成 capital-preservation asset。

## Hedge 预算与触发条件

正常 hedge budget：每年 1.1%-1.6% sleeve NAV。这个预算足以滚动 3-6 个月指数和行业 put spreads，同时不会吞噬 sleeve 的预期 alpha。在组合权重 6% 时，相当于每年总组合 NAV 的 7-10 bps；权重 8% 时为 9-13 bps。

危机 hedge budget：每年 2.5%-3.5% sleeve NAV，仅在至少两个触发条件同时出现时使用：

| 触发条件 | 升级动作 |
|---|---|
| 10-day 99% VaR 升至 14% 以上 | 将 `QQQ`/`NDX` hedge notional 从 30% 提高至 40% |
| Tencent + `BABA` 合计 sleeve 权重因漂移或 rebalance 升至 20% 以上 | 给 `KWEB`/`FXI`/Hang Seng Tech hedge notional 增加 5 个百分点 |
| `SNOW` + `PLTR` + `NOW` 合计权重升至 16% 以上 | 给 software-duration hedge notional 增加 5 个百分点 |
| sleeve 与 `QQQ` 的 20 日 realized correlation 超过 0.80，且 sleeve 低于 50 日均线 | 缩短 hedge tenor，并将 put spreads 移近 spot |
| 10-year yield proxy 在 20 个交易日上行 50 bps | 增加 rates convexity，或优先降低 `NOW`/`SNOW`/`PLTR` |
| 中国监管意外导致 `KWEB`/Hang Seng Tech 一个月内相对 `QQQ` 跑输超过 10 个百分点 | 增加中国 hedge，并暂停新增 Tencent/`BABA` 买入 |

不要主要通过卖出核心持仓的 upside calls 来支付 hedge。Collar 看似便宜，但当 inference-cost deflation 真正转化为 volume expansion 时，它会让组合失去 thesis convexity。如果使用 call-spread sales，应当是战术性的、价外的，并集中在估值最敏感敞口，而不是 `MSFT`、`GOOGL` 或 `SAP`。

## 纳入更大组合的规则

我只会在以下组合规则下批准该 sleeve：

| 规则 | 限制 |
|---|---|
| 初始配置 | 总组合 NAV 的 5%-6% |
| 战术上限 | 总组合 NAV 的 8% |
| 10-day 99% VaR 贡献 | hedge 后低于 60 bps；未对冲仅在执行窗口内可短暂低于 75 bps |
| 基准压力贡献 | 6% 配置下 hedge 后低于 140 bps；未对冲低于 185 bps |
| 严重 breach 动作 | 如果模型严重压力超过 -42% sleeve NAV，或按实际权重超过总 NAV -250 bps，则削减三分之一 gross sleeve |
| 单名上限 | `SAP` 22%，`CRM` 18%，`MSFT` 17%，`GOOGL` 17%，Tencent 12%，`BABA` 8%，`NOW` 7%，`SNOW` 5%，`PLTR` 3%，除非重新审批 |
| China policy beta | Tencent + `BABA` 合计硬上限为 20% sleeve NAV |
| 高久期/拥挤 beta | `NOW` + `SNOW` + `PLTR` 合计硬上限为 15% sleeve NAV |
| Rebalance 纪律 | 任一风险桶突破限制时修剪赢家；不要在实时政策冲击中机械加仓 |

因此，该 sleeve 可以纳入组合，但必须被视为具有明确 crash budget 的高置信 thematic equity sleeve。它不应以简单波动率与宽基全球权益做 naive benchmark，因为其真实亏损分布由少数相关主题冲击主导。

## 风控判断

本卡是 stress-test，而不是否定前序逻辑。投资 thesis 仍有吸引力：inference cost collapse 可以扩大 AI 使用量，并把价值迁移到 data/workflow control planes。风险在于，公开市场可能先压缩 AI multiple，而 enterprise workflows 证明 monetization 的速度较慢。在这个窗口中，即使长期 thesis 正确，未对冲 sleeve 也可能损失约三分之一。

我的批准是有条件的：

1. 使用 Card 4 的 factor-adjusted 权重作为最大风险基线，而不是进一步增加 `SNOW`/`PLTR` beta 的起点。
2. 以总组合 NAV 的 5%-6% 纳入 sleeve；只有在总组合 VaR 低于预算且 hedge 已生效时，才允许 8%。
3. 将 -31% 设为未对冲基准压力 drawdown 预算，将 -20% 至 -23% 设为对冲后目标。
4. 将 12.4% 作为未对冲 10-day 99% VaR 限制；若升至 14% 以上，则减仓或加 hedge。
5. 每年花费 1.1%-1.6% sleeve NAV 进行正常 hedge，危机预算临时上限为 3.5%。

## 交接

建议下一位分析师：`asset-allocator`。

后续主题：将已对冲的 AI workflow/data control-plane sleeve 纳入 total-portfolio allocation。

后续问题：在 5%-8% 的 sleeve 权重下，总组合应从 U.S. equities、global equities、cash 还是 duration 中为该风险提供资金？哪种 cross-asset hedge mix 最能抵消 sleeve 剩余的 AI、利率和中国政策 beta？

交接理由：`asset-allocator` [primary] 是最合适的下一位分析师，因为本卡已经把主题转化为明确的 drawdown、VaR 和 hedge budget。下一个未解决问题不是单名选择，而是该风险应放在总组合的哪个位置，以及应由哪些其他资产提供资金或对冲。

## 资料来源

[^1]: Stanford HAI, *AI Index Report 2025, Chapter 1*, inference price section: https://hai.stanford.edu/assets/files/hai_ai-index-report-2025_chapter1_final.pdf
[^2]: Federal Reserve, FOMC statement, March 18, 2026: https://www.federalreserve.gov/newsevents/pressreleases/monetary20260318a.htm
[^3]: Cboe, *VIX Methodology*: https://res-certification.cboe.com/resources/vix/VIX_Methodology.pdf
[^4]: 17 CFR § 270.18f-4, VaR definition and relative VaR test: https://www.law.cornell.edu/cfr/text/17/270.18f-4
[^5]: SEC, *Use of Derivatives by Registered Investment Companies and Business Development Companies*, final rule release, VaR discussion: https://sec.gov/rules/final/2020/ic-34084.pdf
[^6]: State Council / Xinhua, China network data security regulations summary, September 30, 2024: https://english.www.gov.cn/policies/latestreleases/202409/30/content_WS66fab6c8c6d0868f4e8eb720.html
[^7]: State Council / Xinhua, China AI security governance framework, September 10, 2024: https://english.www.gov.cn/news/202409/10/content_WS66df9f30c6d0868f4e8eac91.html
[^8]: State Council / China Daily, SAMR draft antitrust guideline for internet firms, November 18, 2025: https://english.www.gov.cn/news/202511/18/content_WS691be124c6d00ca5f9a07a26.html

## Follow-up

- Analyst: asset-allocator
- Topic: 将已对冲的 AI workflow/data control-plane sleeve 纳入 total-portfolio allocation
- Question: 在 5%-8% 的 sleeve 权重下，总组合应从 U.S. equities、global equities、cash 还是 duration 中为该风险提供资金？哪种 cross-asset hedge mix 最能抵消 sleeve 剩余的 AI、利率和中国政策 beta？
