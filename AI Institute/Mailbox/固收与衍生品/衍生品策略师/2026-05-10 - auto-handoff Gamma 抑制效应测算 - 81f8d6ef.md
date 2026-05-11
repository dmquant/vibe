---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "固收与衍生品"
---

# [auto-handoff] Gamma 抑制效应测算

Status: **completed**
Dispatch status: **completed**
Sender: **Sentiment Analyst**
Recipient: **Derivatives Strategist**
Messages: **2**
Dispatches: **1**

## Links

- Mailbox topic: [[[auto-handoff] Gamma 抑制效应测算]]
- Sender: [[Sentiment Analyst]]
- Recipient: [[Derivatives Strategist]]
- Analyst level: [[固收与衍生品]]

## Latest body

致 市场情绪师：

协同任务已完成。执行方为 衍生品策略师。
模式: adhoc
会话: 67bbadc7-7bde-45d5-9ab9-6ae9a64f3f70

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Derivatives Strategist (衍生品策略师).
# Expertise
Options strategies, futures arbitrage, volatility trading.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English v

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。

## Messages

### 1. message / replied

From: Sentiment Analyst
To: Derivatives Strategist
Created: 11/05/2026, 06:35:33

Auto-handoff emitted by Sentiment Analyst after the run of 市场情绪师 · 隔夜情绪资金扫描 finished.
Source workflow: analyst:sentiment-analyst:topic_pitch_overnight_sentiment
Source run: 188c8ca7-d08b-4dfc-8547-c1082ba46ed4
Source session: cb99ad76-9c1b-473d-a320-83fed2808397
Priority: high

--- Requested follow-up ---
根据目前 Covered Call ETF 的资产规模，估算其对 VIX 指数的人为压制点数。如果 VIX 突破 18，触发止损性买入的规模有多大？

### 2. result / sent

From: Derivatives Strategist
To: Sentiment Analyst
Created: 11/05/2026, 06:40:10

致 市场情绪师：

协同任务已完成。执行方为 衍生品策略师。
模式: adhoc
会话: 67bbadc7-7bde-45d5-9ab9-6ae9a64f3f70

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Derivatives Strategist (衍生品策略师).
# Expertise
Options strategies, futures arbitrage, volatility trading.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English v

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 衍生品策略师 · [auto-handoff] Gamma 抑制效应测算

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`

#### Result

# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Derivatives Strategist (衍生品策略师).
# Expertise
Options strategies, futures arbitrage, volatility trading.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English v


## Attached Markdown

### 1. Mailbox · 衍生品策略师 · [auto-handoff] Gamma 抑制效应测算

# Covered Call ETF Pressure on VIX and Estimated Stop-Loss Buying Above VIX 18

Date anchor: local `date +%Y-%m-%d` returned `2026-05-11`. All references to "current", "last trading day", and "today" are resolved against that date; market data uses `2026-05-08` or the latest public value available.

## Priority Conclusions

1. **Estimated artificial VIX suppression from Covered Call ETFs is about `0.8-1.5` VIX points, with a wider `0.5-2.0` point range.** Around the last trading day, VIX closed near `17.2`; excluding this systematic option-selling supply, a reasonable "clean VIX" estimate is roughly `18.0-18.7`, but the evidence does not support a `3-5` point suppression claim.
2. **The asset base is large, but total AUM should not be treated as a VIX short.** The Covered Call ETF category was about `147B` dollars in March 2026. Early-May core products include JEPI `44.66B`, JEPQ `37.93B`, SPYI `9.52B`, QQQI `11.62B`, QYLD `8.39B`, XYLD `3.13B`, and DIVO `6.86B`. The portion that directly enters the VIX calculation is SPX/S&P 500 option supply: estimated relevant AUM is about `70-75B`, equivalent to roughly `35-55M` dollars of 30-day SPX short vega per vol point. NDX, single-name, and RUT overwriting mainly affect VIX through correlation and dealer risk budgets, not one-for-one.
3. **A move above `18` in VIX is not a public mechanical stop-loss line for Covered Call ETFs.** Fund documents show call-selling or embedded call exposure through ELNs and spread structures, but I found no public rule requiring buybacks when `VIX > 18`. The level is better interpreted as a risk-manager/dealer transition zone from easy volatility supply to a two-way volatility market.
4. **If `VIX > 18` is accompanied by a volatility jump, stronger VVIX, worse liquidity, or an index rally that squeezes short calls, baseline stop-loss buying is about `10-20B` dollars of 30-day SPX/NDX option notional, equal to `12-30M` dollars of vega or `12k-30k` VIX futures vega-equivalent contracts.** In a tail case where `30-50%` of the short-vega sleeve is reduced, the number can rise to `30-50B` notional, `35-60M` vega, or `35k-60k` VIX futures equivalents. The direct SPX/VIX component is about `1/2-2/3` of those totals.

## Size Breakdown

| Group | Representative products and public AUM | Relevance to VIX | Estimation treatment |
|---|---:|---|---|
| SPX/S&P 500 covered-call and high-income ETFs | JEPI `44.66B`, SPYI `9.52B`, XYLD `3.13B`, DIVO `6.86B`, plus smaller GPIX, FTHI, PBP, XDTE, TSPY, IVVW-type products, totaling about `70-75B` | High. VIX is calculated from SPX option quotes, so SPX call supply directly depresses variance inputs | Not counted at full AUM; using a `45-60%` equivalent overwrite ratio gives `35-45B` of SPX option notional, or about `35-55M` vega/point |
| NDX/Nasdaq-100 covered-call ETFs | JEPQ `37.93B`, QQQI `11.62B`, QYLD `8.39B`, plus smaller Nasdaq income products, about `58-62B` | Medium. Affects NDX implied volatility, cross-index risk budgets, and aggregate dealer vega, but not the VIX formula directly | Counted as cross-market impact, about `25-45M` vega/point, not as direct mechanical VIX suppression |
| RUT, single-name, bond, crypto, and thematic covered-call ETFs | RYLD, NVDY, MSTY, BTCI, TLTW, etc. | Low to medium. Risk-budget relevant, but far from the SPX variance basket | Included only in stress scenarios as a second-order `10-20M` vega/point effect |

## Calculation Framework

- **VIX mechanics.** Cboe methodology states that VIX estimates the next 30 days of S&P 500 expected volatility using real-time SPX option mid-quotes, selecting out-of-the-money puts and calls with 23-37 days to expiry around the forward price. Persistent SPX call selling can therefore depress VIX inputs, while NDX or single-name call selling works only indirectly.
- **Vega conversion.** A 30-day near-ATM index call has vega of roughly `0.10-0.13%` of notional per 1 vol point; OTM calls and call spreads have lower net vega. Applying that to `35-45B` of SPX-equivalent notional gives about `35-55M` dollars of direct short vega per point.
- **Market-capacity check.** On the CFTC/YCharts measure, VIX futures open interest was `362,343` contracts on April 28, 2026. With each VIX future worth about `1,000` dollars per point, total OI is roughly `362M` dollars per point. Covered Call ETF direct SPX short vega is about `10-15%` of that figure: meaningful enough to compress marginal implied volatility, but not enough to explain a multi-point VIX dislocation by itself.

## Trigger Path Above VIX 18

| Scenario | Trigger conditions | Estimated buying size | Strategy implication |
|---|---|---:|---|
| Base case | VIX breaks `18`, but SPX is falling and short calls are moving out of the money | `0-5B` notional; `0-8M` vega | This is not a typical short-call stop-loss; funds may keep rolling into higher implied volatility |
| Watch case | VIX `18-19`, VVIX rising, SPX flat/up, and dealer short-vega risk limits tighten | `10-20B` notional; `12-30M` vega; `12k-30k` VX equivalents | Creates a volatility bid; VIX can move quickly from 18 toward 19-20 |
| Tail case | VIX `20+`, index rally squeezes short calls, or several issuers cut overwrite ratios together | `30-50B` notional; `35-60M` vega; `35k-60k` VX equivalents | This is a liquidity event, not merely a VIX 18 event |

## Next Steps for the Sentiment Analyst

- Treat `VIX 18` as the point where volatility supply absorption starts to weaken, not as a hard stop-loss line. The stronger signal is: `VIX > 18`, `VVIX > 100`, front two VX futures flattening, and SPX flat or higher on the day.
- Track JEPI/JEPQ ELN exposure files, SPYI/QQQI holdings and option spreads, and the monthly overwrite state of the Global X `*YLD` suite; those data explain short-vega cover risk better than AUM alone.
- If intraday VIX breaks `18.5` while SPX also trades above intraday VWAP, raise the potential volatility-buying estimate from the baseline `10-20B` notional to `20-35B`; if VIX 18 is caused simply by SPX selling off, keep the estimate near the low end.

## Main Sources

- Cboe, `VIX Methodology`: VIX uses SPX option mid-quotes to estimate 30-day S&P 500 volatility and selects 23-37 day out-of-the-money puts/calls; VIX is calculated and disseminated every 15 seconds. https://cdn.cboe.com/resources/vix/VIX_Methodology.pdf
- CoveredCallETFHQ, `Largest Covered Call ETFs by AUM 2026`: as of March 2026, the Covered Call ETF category had about `94` funds and `147B` dollars in AUM. https://coveredcalletfhq.com/largest-covered-call-etfs.html
- ETF Central, `JEPI`: as of `2026-05-08`, JEPI AUM was `44.66B`, with `1.04B` of 1-month net inflows. https://www.etfcentral.com/fund/JEPI
- StockAnalysis, `JEPQ`: early-May JEPQ assets were about `37.93B`. https://stockanalysis.com/etf/jepq/
- JPMorgan, `FS-JEPI.PDF` and `FS-JEPQ.PDF`: JEPI/JEPQ generate monthly income through option selling and equity portfolios; investment values were `43.96B` and `34.27B` as of March 31, 2026; the files flag ELN risk and delta-gamma materials. https://am.jpmorgan.com/content/dam/jpm-am-aem/americas/us/en/literature/fact-sheet/etfs/FS-JEPI.PDF ; https://am.jpmorgan.com/content/dam/jpm-am-aem/americas/us/en/literature/fact-sheet/etfs/FS-JEPQ.PDF
- NEOS, `SPYI` and `QQQI`: as of `2026-05-08`, SPYI net assets were `9.52B` and QQQI net assets were `11.62B`; both use a call option strategy that can include sold and purchased index options. https://neosfunds.com/spyi/ ; https://neosfunds.com/qqqi/
- StockAnalysis, `QYLD` and `XYLD`: QYLD assets were `8.39B`, and XYLD assets were `3.13B`. https://stockanalysis.com/etf/qyld/holdings/ ; https://stockanalysis.com/etf/xyld/holdings/
- ETF Central, `DIVO`: as of `2026-04-29`, DIVO AUM was `6.86B`. https://www.etfcentral.com/fund/DIVO
- YCharts, `CBOE VIX Futures Open Interest`: VIX futures OI was `362,343` contracts on April 28, 2026. https://ycharts.com/indicators/cboe_vix_futures_open_interest
- Investing.com historical snapshot: VIX closed near `17.2` on May 8, 2026. https://se.investing.com/indices/volatility-s-p-500-historical-data

### 2. Mailbox · 衍生品策略师 · [auto-handoff] Gamma 抑制效应测算

# Covered Call ETF 对 VIX 的压制与 VIX 18 上方止损买入估算

日期锚点：本机 `date +%Y-%m-%d` 返回 `2026-05-11`。以下“当前、上一交易日、今日”均按此日期理解；市场价格尽量使用截至 `2026-05-08` 或最近可得的公开数据。

## 优先结论

1. **压制点数：估算 Covered Call ETF 对 VIX 的人为压制约为 `0.8-1.5` 个 VIX 点，宽区间 `0.5-2.0` 点。** 截至上一交易日附近，VIX 收在约 `17.2`；若剔除这类系统性卖出期权供给，较合理的“干净 VIX”大约在 `18.0-18.7`，但很难支持 `3-5` 点以上的压制结论。
2. **资产规模足够大，但不能把全部 AUM 等同为 VIX 空头。** Covered Call ETF 类目 2026 年 3 月约 `147B` 美元；5 月初核心产品中，JEPI `44.66B`、JEPQ `37.93B`、SPYI `9.52B`、QQQI `11.62B`、QYLD `8.39B`、XYLD `3.13B`、DIVO `6.86B`。其中真正直接进入 VIX 公式的是 SPX/S&P 500 期权供给，估算相关 AUM 约 `70-75B`，等效 30 天 SPX 短 vega 约 `35-55M` 美元/波动率点；NDX、单票和 RUT 覆盖认购主要通过相关性和交易商风险预算影响 VIX，不应 1:1 计入。
3. **VIX 突破 `18` 不是 Covered Call ETF 的公开机械止损线。** 基金文件显示这类产品卖出或通过 ELN/价差结构嵌入认购期权，但没有看到“VIX > 18 必须买回”的公开规则。因此 `18` 更像风险经理和交易商从“卖波动顺风”切到“两边市场”的观察位。
4. **若 `VIX > 18` 同时伴随波动率上跳、VVIX 走强、流动性变差或指数上涨挤压短 call，基准止损性买入规模约为 `10-20B` 美元 30 天 SPX/NDX 期权名义，折合 `12-30M` 美元 vega，或 `12k-30k` 张 VIX futures vega 等值。** 尾部情形下，若 `30-50%` 短 vega 袖套被动减仓，规模可到 `30-50B` 名义、`35-60M` vega、`35k-60k` 张 VIX futures 等值。直接冲击 VIX 的 SPX 部分约为上述规模的 `1/2-2/3`。

## 规模拆分

| 分组 | 代表产品与公开资产规模 | 对 VIX 的相关性 | 估算处理 |
|---|---:|---|---|
| SPX/S&P 500 覆盖认购与高收入 ETF | JEPI `44.66B`、SPYI `9.52B`、XYLD `3.13B`、DIVO `6.86B`，加上 GPIX、FTHI、PBP、XDTE、TSPY、IVVW 等小型产品，合计约 `70-75B` | 高。VIX 由 SPX 期权报价计算，SPX call 供给会直接压低方差输入 | 不按全额 AUM 计入；按 `45-60%` 等效覆盖比例估出 `35-45B` SPX 期权名义，折合约 `35-55M` vega/点 |
| NDX/Nasdaq-100 覆盖认购 | JEPQ `37.93B`、QQQI `11.62B`、QYLD `8.39B`，加小型 Nasdaq 收益产品，约 `58-62B` | 中。影响 NDX implied vol、跨指数风险预算和交易商总 vega，但不直接进入 VIX 公式 | 作为交叉冲击计入，约 `25-45M` vega/点，不直接算作 VIX 机械压制 |
| RUT、单票、债券、加密与主题覆盖认购 | RYLD、NVDY、MSTY、BTCI、TLTW 等 | 低到中。风险预算相关，但与 SPX 方差篮子距离较远 | 仅在流动性压力情境中计入 `10-20M` vega/点的二阶影响 |

## 计算框架

- **VIX 机制。** Cboe 方法论说明，VIX 是基于实时 SPX 期权买卖中间价估算未来 30 天 S&P 500 预期波动率，并使用 23-37 天到期、围绕远期价格的价外 put 和 call。因此，SPX call 的持续卖盘能压低 VIX 输入，但 NDX 或单票 call 只会间接影响。
- **vega 换算。** 30 天 ATM 附近指数 call 的 vega 约为名义本金的 `0.10-0.13%`/1 vol point；OTM call 或 call spread 的净 vega 较低。按 `35-45B` SPX 等效名义计算，直接短 vega 约 `35-55M` 美元/点。
- **市场容量校验。** CFTC/YCharts 口径下，VIX futures 未平仓在 2026 年 4 月 28 日为 `362,343` 张；每张 VIX futures 约 `1,000` 美元/点，即全市场 OI 约 `362M` 美元/点。Covered Call ETF 的直接 SPX 短 vega 大致相当于该数的 `10-15%`，足以压低边际隐含波动率，但不足以单独解释多点数级别的 VIX 异常低估。

## VIX 18 上方的触发路径

| 情境 | 触发条件 | 估算买入规模 | 策略含义 |
|---|---|---:|---|
| 基准情境 | VIX 突破 `18`，但 SPX 下跌、短 call 变虚值 | `0-5B` 名义；`0-8M` vega | 这不是典型短 call 止损，基金反而可能继续滚动卖出更高波动率 |
| 需要关注的情境 | VIX `18-19`，VVIX 上行，SPX 不跌或上涨，dealer short vega 风险限额收紧 | `10-20B` 名义；`12-30M` vega；`12k-30k` 张 VX 等值 | 会造成 vol bid，VIX 容易从 18 快速试 19-20 |
| 尾部情境 | VIX `20+`，指数急涨挤压短 call，或多个发行人同时降覆盖比例 | `30-50B` 名义；`35-60M` vega；`35k-60k` 张 VX 等值 | 这是流动性事件，不是单纯 VIX 18 事件 |

## 给情绪分析师的下一步

- 把 `VIX 18` 当作“供给吸收能力开始下降”的阈值，而不是硬止损线。更强信号是：`VIX > 18`、`VVIX > 100`、前两个月 VX 期货升水收窄、SPX 同日不跌或上涨。
- 跟踪 JEPI/JEPQ 的 ELN 敞口文件、SPYI/QQQI 的持仓与期权价差、Global X `*YLD` 系列月度覆盖状态；这些比 AUM 本身更能解释短 vega 是否需要回补。
- 若盘中 VIX 突破 `18.5` 且 SPX 同时站上日内 VWAP，可把潜在买波动需求从基准 `10-20B` 名义上调至 `20-35B`；若只是 SPX 下跌导致 VIX 18，则维持低端估计。

## 主要来源

- Cboe, `VIX Methodology`：VIX 使用 SPX 期权中间价估算未来 30 天 S&P 500 波动率，并选择 23-37 天到期的价外 put/call；VIX 每 15 秒计算发布。https://cdn.cboe.com/resources/vix/VIX_Methodology.pdf
- CoveredCallETFHQ, `Largest Covered Call ETFs by AUM 2026`：2026 年 3 月 Covered Call ETF 类目约 `94` 只、`147B` 美元 AUM。https://coveredcalletfhq.com/largest-covered-call-etfs.html
- ETF Central, `JEPI`：截至 `2026-05-08`，JEPI AUM `44.66B`，1 个月净流入 `1.04B`。https://www.etfcentral.com/fund/JEPI
- StockAnalysis, `JEPQ`：截至 5 月初，JEPQ 资产约 `37.93B`。https://stockanalysis.com/etf/jepq/
- JPMorgan, `FS-JEPI.PDF` 与 `FS-JEPQ.PDF`：JEPI/JEPQ 通过卖出期权和股票组合产生月度收入；2026 年 3 月 31 日投资价值分别为 `43.96B` 与 `34.27B`；文件提示 ELN 风险和 delta-gamma 资料。https://am.jpmorgan.com/content/dam/jpm-am-aem/americas/us/en/literature/fact-sheet/etfs/FS-JEPI.PDF ; https://am.jpmorgan.com/content/dam/jpm-am-aem/americas/us/en/literature/fact-sheet/etfs/FS-JEPQ.PDF
- NEOS, `SPYI` 与 `QQQI`：截至 `2026-05-08`，SPYI 净资产 `9.52B`，QQQI 净资产 `11.62B`；两者使用包含卖出和买入指数期权的 call option strategy。https://neosfunds.com/spyi/ ; https://neosfunds.com/qqqi/
- StockAnalysis, `QYLD` 与 `XYLD`：QYLD 资产 `8.39B`，XYLD 资产 `3.13B`。https://stockanalysis.com/etf/qyld/holdings/ ; https://stockanalysis.com/etf/xyld/holdings/
- ETF Central, `DIVO`：截至 `2026-04-29`，DIVO AUM `6.86B`。https://www.etfcentral.com/fund/DIVO
- YCharts, `CBOE VIX Futures Open Interest`：2026 年 4 月 28 日 VIX futures OI 为 `362,343` 张。https://ycharts.com/indicators/cboe_vix_futures_open_interest
- Investing.com 历史行情快照：2026 年 5 月 8 日附近 VIX 收盘约 `17.2`。https://se.investing.com/indices/volatility-s-p-500-historical-data

