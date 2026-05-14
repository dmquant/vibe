---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "权益策略"
content_error: ""
---

# A-Share Market-Structure Overlay for the AI Vertical Application Core Pool

Kind: **daily**
Analyst: **A-Share Strategist**

## Links

- Report type: [[daily]]
- Analyst: [[A-Share Strategist]]
- Analyst level: [[权益策略]]

# A-Share Market-Structure Overlay for the AI Vertical Application Core Pool

- Work date: 2026-05-11 (Asia/Singapore)
- Analyst: A-Share Strategist (ashare-strategist)
- Stance: synthesize
- Topic: margin balance, northbound positioning, ETF/fund crowding, and 2026H2 lock-up windows for the 10-name A-share AI vertical application pool

As of the canonical work date, 2026-05-11, I support Card-03's 10-name pool but tighten the implementation: keep the AI vertical-application sleeve at **11-13% of an A-share equity book now**, with a hard cap of **15% before Q2 results**. Within that sleeve, financial IT remains the anchor but is already the most crowded by margin and software ETFs; industrial machine vision should be built slowly because `300802` and `688400` have named 2026H2 unlocks; government IT is less crowded but should wait for cash-flow and procurement confirmation.

## 1. Data Cut and Constraints

- Margin data: SSE individual margin balances use 2026-05-08; SZSE individual margin balances use 2026-05-07 because the SZSE 2026-05-08 pull returned an empty table at run time. SSE aggregate margin financing balance was RMB 1,416.7bn on 2026-05-08, up 3.3% from 2026-04-30. SZSE aggregate margin financing balance was RMB 1,348.5bn on 2026-05-07, up 2.5% from 2026-04-30. Sources: [SSE margin data](https://www.sse.com.cn/market/othersdata/margin/sum/), [SZSE margin service page](https://www.szse.cn/marketServices/deal/finance/index.html), and Securities Times' May 8 note that total two-financing balance reached RMB 2,786.4bn as of May 7.
- Northbound data: HKEX has only published northbound shareholding information quarterly since 2024-08-19; therefore the valid latest anchor is **2026-03-31**, not daily May flow. Source: [HKEX Shanghai Connect shareholding](https://www3.hkexnews.hk/sdw/search/mutualmarket.aspx?t=sh) and [HKEX Shenzhen Connect shareholding](https://www3.hkexnews.hk/sdw/search/mutualmarket.aspx?t=sz).
- ETF/fund data: the Q1 2026 fund-heavy-stock file from CNINFO shows broad fund coverage, while the Harvest CSI Software Services ETF Q1 report shows passive crowding in `300033` and `600570`. Sources: CNINFO thematic fund statistics and the [Harvest CSI Software Services ETF 2026Q1 report](https://static.cninfo.com.cn/finalpage/2026-04-22/1225135714.PDF).
- Lock-up data: Eastmoney/Choice unlock data and public F10 pages show two material 2026H2 unlocks in this pool: `300802` on 2026-08-31 and `688400` on 2026-09-07. Sources: [Eastmoney lock-up data center](https://data.eastmoney.com/dxf/default.html), [10jqka `300802` equity page](https://basic.10jqka.com.cn/300802/equity.html), [Sohu `300802` lock-up table](https://q.stock.sohu.com/cn/300802/xsjj.shtml).

## 2. Positioning Read-Through

The market-level leverage backdrop is supportive but no longer clean. From 2026-04-30 to the latest available trading-day snapshots, both SSE and SZSE financing balances expanded by roughly 2-3%, which means the AI application trade is happening in a market where risk appetite is already rebuilding. The implication is not "avoid," but "do not pay for all of Q3 now."

Northbound positioning is moderate rather than excessive. `600570` is the only pool member with a near-4% HKEX-reported northbound shareholding, while the rest sit around 0.37-1.85% as of 2026-03-31. Because HKEX now reports northbound holdings quarterly, the correct use is as a stock-overhang/crowding marker, not a May trading signal.

ETF and fund crowding is highly uneven. `300033` and `600570` have meaningful software-ETF ownership: the Harvest CSI Software Services ETF held `300033` at 8.27% of NAV and `600570` at 4.98% of NAV in 2026Q1. CNINFO's Q1 fund-heavy-stock table also shows `300033` covered by 117 funds and `600570` by 40 funds. By contrast, `603383`, `300802`, `002777`, and `300212` have little or no broad fund-heavy-stock presence. That makes financial IT easier to buy institutionally, but also more vulnerable to ETF de-risking days.

## 3. Name-Level Market-Structure Table

| Vertical | Name | Margin balance | Northbound holding | Q1 fund / ETF signal | 2026H2 unlock | Strategy read |
|---|---:|---:|---:|---:|---:|---|
| Financial IT | Hundsun (`600570`) | RMB 3.234bn, +3.0% vs 2026-04-30 | 75.316m shares / 3.97% | 40 funds; Harvest Software ETF 4.98% NAV | None found in H2 detail | Core, but crowded; buy only on pullbacks |
| Financial IT | Hithink Flush (`300033`) | RMB 5.398bn, +1.6% vs 2026-04-30 | 9.990m / 1.85% | 117 funds; Harvest Software ETF 8.27% NAV | None found | Best beta to application sentiment, but highest crowding |
| Financial IT | Apex (`603383`) | RMB 0.330bn, +4.4% vs 2026-04-30 | 1.667m / 0.81% | 1 fund, very small | None found | Best uncrowded hard-core financial IT name |
| Financial IT | Yusys (`300674`) | RMB 0.946bn, -0.8% vs 2026-04-30 | 4.106m / 0.58% | 6 funds | None found | Watch-list add only after gross-margin confirmation |
| Machine vision | Thundersoft (`300496`) | RMB 1.866bn, +1.1% vs 2026-04-30 | 4.216m / 0.91% | 8 funds | None found | Liquid but margin-sensitive; cap below financial IT |
| Machine vision | Juzi (`300802`) | Not a SZSE margin target on 2026-05-07 | 3.077m / 1.08% | No CNINFO heavy-fund line | 2026-08-31, 29.372m shares, 15.08% of pre-unlock float | Fundamental core, but lock-up timing dominates |
| Machine vision | Lingyun Optics (`688400`) | RMB 0.709bn, +8.4% vs 2026-04-30 | 1.707m / 0.37% | 2 funds; robot/STAR passive ownership appears in shareholder list | 2026-09-07, 18.254m shares, 3.96% of pre-unlock float | Do not chase before September supply is digested |
| Government IT | Taiji (`002368`) | RMB 0.737bn, +0.5% vs 2026-04-30 | 5.562m / 0.89% | 1 fund | None found | Low crowding; wait for procurement and cash-flow evidence |
| Government IT | Jiuyuan Yinhai (`002777`) | Not a SZSE margin target on 2026-05-07 | 3.347m / 0.81% | 1 fund | None found | Cleanest government-IT candidate, but small-liquidity sizing |
| Government IT | E-Hualu (`300212`) | Not a SZSE margin target on 2026-05-07 | 4.233m / 0.58% | No CNINFO heavy-fund line | None found | Avoid until DSO and data-element monetization improve |

## 4. Sleeve Caps and Build Path

Recommended sleeve cap before Q2 results: **11-13%** of an A-share equity portfolio; hard cap **15%**. If Q2 contract liabilities remain positive and there is no major sell-down announcement, the sleeve can rise to **16-18%** in September, but not before the two machine-vision unlock windows are tested.

| Vertical | Sleeve cap now | Cap after Q2 confirmation | May-June action | July-September action |
|---|---:|---:|---|---|
| Financial IT | 6.0-7.0% | 8.0-9.0% | Build 60-70% of target on drawdowns; avoid chasing ETF-driven rallies | Add only if Q2 contract liabilities stay positive and margin balance does not jump another >10% |
| Machine vision | 2.5-3.0% | 4.0-5.0% | Starter only; keep `300802` and `688400` below half target | Pause `300802` from 2026-08-03 to 2026-09-04; pause `688400` from 2026-08-10 to 2026-09-11; re-open only after volume absorbs supply |
| Government IT | 2.0-2.5% | 3.5-4.0% | Keep small positions; do not average up on policy headlines | Add after Q2 cash-flow/DSO improves or procurement order visibility extends into Q4 |

Name-level working caps inside a 15% total sleeve:

- `600570`: 2.2-2.5%; `300033`: 1.8-2.2%; `603383`: 1.2-1.5%; `300674`: <=0.8%.
- `300496`: 1.0-1.2%; `300802`: <=0.6% before 2026-08-31, up to 1.2% only after the unlock is absorbed; `688400`: <=0.5% before 2026-09-07, up to 1.0% after absorption.
- `002368`: 0.7-0.9%; `002777`: 0.8-1.0%; `300212`: 0-0.4% until cash-flow improves.

## 5. Windows to Avoid

- `300802`: avoid new buying from **2026-08-03 to 2026-09-04**. The 2026-08-31 unlock is 29.372m shares, or 15.08% of pre-unlock float. This is large enough to change supply-demand even if the fundamental thesis is intact.
- `688400`: avoid new buying from **2026-08-10 to 2026-09-11**. The 2026-09-07 unlock is 18.254m shares, or 3.96% of pre-unlock float. The percentage is smaller than `300802`, but the latest margin balance rose 8.4% from 2026-04-30, so leverage plus unlock supply is the issue.
- `600570` and `300033`: no named 2026H2 lock-up was found in the pulled unlock table, but these should still be trimmed if software ETFs see two consecutive large redemption days or if margin balances rise another >10% without earnings upgrades.
- `300212`: no 2026H2 unlock was found, but the better risk control is fundamental: avoid until DSO and cash conversion are visible. Low ETF ownership is not enough to offset weak monetization visibility.

## 6. Handoff

I recommend handing the next card to **chief-strategist** with a **synthesize** stance. The open question is no longer stock selection inside the 10-name pool; it is how this AI application sleeve competes with the rest of A-share style rotation after margin leverage has rebuilt. This is a primary horizon strategy question, not a sector-only or reviewer trigger.

## Sources

- Shanghai Stock Exchange, margin trading data: https://www.sse.com.cn/market/othersdata/margin/sum/
- Shenzhen Stock Exchange, margin trading service page: https://www.szse.cn/marketServices/deal/finance/index.html
- Securities Times two-financing balance note, 2026-05-08: https://www.stcn.com/article/detail/3899274.html
- HKEX Stock Connect northbound shareholding search, Shanghai: https://www3.hkexnews.hk/sdw/search/mutualmarket.aspx?t=sh
- HKEX Stock Connect northbound shareholding search, Shenzhen: https://www3.hkexnews.hk/sdw/search/mutualmarket.aspx?t=sz
- CNINFO fund statistics and Harvest CSI Software Services ETF 2026Q1 report: https://static.cninfo.com.cn/finalpage/2026-04-22/1225135714.PDF
- Eastmoney lock-up data center: https://data.eastmoney.com/dxf/default.html
- 10jqka `300802` equity page: https://basic.10jqka.com.cn/300802/equity.html
- Sohu `300802` lock-up table: https://q.stock.sohu.com/cn/300802/xsjj.shtml

Footer: work-date 2026-05-11; this report synthesizes Card-01 through Card-03 and uses live files where present. `session-brief.md`, `analyst-catalog.json`, and `card-01` were missing from the live workspace and were reconstructed from the prompt snapshot.
