---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review: Weekly Risk Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review: Weekly Risk Research Package

Date anchor: local `date +%Y-%m-%d` returned `2026-05-10`. This QA review covers the upstream files `01_weekly_plan.md`, `01_weekly_plan.en.md`, `02_weekly_research.md`, and `02_weekly_research.en.md`, with a research window of `2026-05-04` to `2026-05-08`.

## 1. File Manifest

| Declared file | Exists in workspace (yes / no) | Note |
|---|---|---|
| `01_weekly_plan.md` | yes | Read successfully; size `11290` bytes; complete plan with research questions, data needs, proposed exhibits, and sources. |
| `01_weekly_plan.en.md` | yes | Read successfully; size `12561` bytes; English version matches the Chinese structure. |
| `02_weekly_research.md` | yes | Read successfully; size `27210` bytes; complete research deliverable with data methods, question-by-question answers, stress tests, and follow-up items. |
| `02_weekly_research.en.md` | yes | Read successfully; size `30408` bytes; English version matches the Chinese structure. |
| `QA_review.md` | yes | Chinese QA deliverable created in this step. |
| `QA_review.en.md` | yes | English QA deliverable created in this step. |

## 2. Cross-Step Consistency

| Check item | Planning-stage value | Research-stage value | QA judgment |
|---|---:|---:|---|
| Coverage window | `2026-05-04` to `2026-05-08` | `2026-05-04` to `2026-05-08` | Consistent. |
| Date anchor | `2026-05-10` | `2026-05-10` | Consistent. |
| Major index weekly returns and closes | `S&P 500` up `2.3%` to `7,398.93`; `Dow` up `0.2%` to `49,609.16`; `Nasdaq` up `4.5%` to `26,247.08`; `Russell 2000` up `1.7%` to `2,861.21` | Same AP figures; also adds ETF-return figures: `SPY 2.35%`, `QQQ 5.50%`, `IWM 1.75%`, `DIA 0.22%` | Consistent; when index and ETF figures are shown together, the report should state clearly that index levels and adjusted-close ETF returns are different measurement bases. |
| BLS employment data | Payrolls `115,000`; unemployment `4.3%`; average hourly earnings up `0.2%` MoM and `3.6%` YoY; February and March combined revision of `16,000` | Payrolls `115,000`; unemployment `4.3%`; average hourly earnings up `0.2%` MoM and `3.6%` YoY; combined revision of `16,000`, plus participation `61.8%` and part time for economic reasons `4.942 million` | Consistent, with useful additional detail in the research stage. |
| ADP data | Private payrolls `109,000`; job-stayer pay up `4.4%` YoY; job-changer pay up `6.6%` YoY | Same `109,000`, `4.4%`, and `6.6%` | Numerically consistent; however, the plan used the official ADP source, while the research cites an `ADP/PRNewswire` item via StockTitan. The official ADP link should be restored or the source substitution should be explained. |
| ISM Services | `Services PMI 53.6`, `New Orders 53.5`, `Employment 48.0`, `Prices 70.7` | Same `53.6`, `53.5`, `48.0`, and `70.7` | Consistent. |
| Oil data | `Brent 101.29`, up `1.23%`; `WTI 95.42`, up `0.64%`; both down more than `6%` for the week | `Brent 101.29`, down `6.36%` for the week; `WTI 95.42`, down `6.40%` for the week; adds `USO -6.45%` | Consistent; the research emphasizes weekly declines but omits the Friday rebound percentages, so the oil section should show both the Friday rebound and the weekly decline. |
| Apple-Intel event | Reuters/WHBL said `Intel` rose as much as about `15%`, while `Apple` rose about `1.7%` | Cites the same report and adds yfinance figures: `INTC` Friday `13.96%`, weekly `25.40%`; `AAPL` Friday `2.05%`, weekly `4.70%` | Directionally consistent; the report should state that reported intraday moves and closing returns are not the same basis. |

## 3. Narrative Coherence

The research stage answers all six core questions from the plan, and the mapping is generally clean:

| Planning question | Research-stage answer | QA assessment |
|---|---|---|
| Was the equity rally broad-based, or concentrated in technology, semiconductors, and a small number of heavyweights? | Question 1 uses `SPY 2.35%`, `QQQ 5.50%`, `RSP 0.63%`, `S&P 500` constituent advancers of `42.9%`, and top-ten `SPY` holding contribution of `1.535 pp`. | Substantive answer; however, the NYSE/Nasdaq official breadth data was not obtained, so the proxy basis should be disclosed earlier in the executive summary. |
| What do labor and wage data imply for the recession left tail and inflation right tail? | Question 2 uses BLS, ADP, and ISM to conclude that immediate hard-landing risk declined, but two-sided tail risk remains. | Coherent logic; the report should separate the point that `115,000` beat the `55,000` estimate from the point that it is still not a strong employment number. |
| Have `VIX`, rates volatility, the dollar, and credit spreads adequately priced oil and policy shocks? | Question 3 uses `VIX 17.19`, HY OAS `2.79%`, and 20-day `SPY`-`TLT` correlation of `0.70`. | Directionally supported; the plan requested `MOVE`, but the research only has a single `MOVE 65.7` reference and no main time series, so certainty around the rates-volatility conclusion should be reduced. |
| How do oil’s more-than-`6%` weekly decline and Friday rebound change tail exposures? | Question 4 uses `WTI -6.40%`, `Brent -6.36%`, `XLE -5.35%`, `JETS +6.68%`, and related indicators. | Sufficient answer; the EIA data only runs through `2026-05-01`, which is disclosed, but it should be elevated into the primary limitations section rather than left only in caveats. |
| Does the Apple-Intel policy catalyst increase semiconductor-chain event risk? | Question 5 uses `INTC 25.40%`, `AMD 26.25%`, `SMH 11.13%`, `SOXX 11.71%`, and related figures. | Reasonable conclusion; options implied volatility, skew, and gamma are missing, so event-risk capital recommendations remain an inference from spot-price behavior. |
| What is the most fragile next-week risk point? | Question 6 ranks technology/semiconductor concentration, correlation failure, rate repricing, two-way oil jumps, lagged credit repricing, and missing dollar/geopolitical hedges. | Clear structure; because live portfolio holdings are absent, VaR and scenario P&L are a proxy-portfolio framework, not account-level limit guidance. |

Overall, the narrative chain is readable and there are no obvious orphaned planning questions. The main issue is not unanswered questions, but the fact that several key answers rely on proxies: `S&P 500` constituent breadth instead of NYSE/Nasdaq breadth, a proxy portfolio instead of live holdings, spot jumps instead of options event-risk metrics, and a single `MOVE` point instead of a rates-volatility time series. These limits are disclosed in the research, but too late in the document; a PM reader may absorb the strong conclusions before reaching the qualifiers.

## 4. Editorial Quality

- The executive summary should disclose in the first or second bullet that breadth, VaR, and stress testing use proxy bases, so readers do not assume the conclusions come from live holdings and full-market breadth.
- The headline “Market volatility has not fully priced event risk” could be revised to “Volatility and credit spreads have not meaningfully compensated for concentration and policy-event risk,” which better covers `VIX`, HY OAS, and the semiconductor event.
- Table labels should consistently distinguish “index,” “ETF,” “futures,” and “proxy portfolio.” For example, when `S&P 500` index gains of `2.3%` are shown next to `SPY` gains of `2.35%`, the measurement bases should be clear in the heading or note.
- The references section should add a downloadable script or data snapshot path, especially for yfinance, Wikipedia constituents, ETF holdings, and the correlation/VaR calculations; otherwise QA and PM readers cannot reproduce key figures such as `1.535 pp`, `65.2%`, and `95%` daily VaR of `1.08%`.

## 5. Recommended Revisions

- High priority: Replace the proxy portfolio with live holdings and recalculate `95%` daily VaR `1.08%`, `99%` daily VaR `1.59%`, maximum drawdown `-7.84%`, and the five scenario P&L results; if live holdings are unavailable, label all portfolio-level guidance explicitly as a “proxy portfolio illustration.”
- High priority: Add or replace with official NYSE/Nasdaq breadth, volume, and new-high/new-low data; if the report continues using the `S&P 500` constituent proxy, disclose it in the executive summary and Chart 2 title.
- High priority: Add options implied volatility, skew, gamma, or at least 1-week and 1-month ATM IV for `INTC`, `AAPL`, `SMH`, `SOXX`, and `QQQ`; otherwise mark event-risk capital recommendations as “pending options-data validation.”
- Medium priority: Restore the official ADP source link and explain why the research evidence currently comes from an `ADP/PRNewswire` item via StockTitan; also standardize the ISM Manufacturing source path.
- Medium priority: Move the missing `MOVE` data from caveats into the data-limitations summary, and avoid phrasing the rates-volatility pricing conclusion more strongly than the evidence supports.
- Medium priority: Add reproducibility details, including download timestamp, price field, holdings snapshot date, correlation window, and VaR formula.

## 6. Overall Rating

`needs-revision`. The research package is structurally complete, answers the core questions, and maintains numerical consistency with the plan, but key PM-facing conclusions still rely on proxy breadth, a proxy portfolio, missing options data, and an incomplete `MOVE` series; the evidence chain should be strengthened and some claims should be qualified before formal presentation.

```json
{"follow_ups":[
  {"to":"chief-quant","subject":"Recalculate VaR and stress tests with live holdings","question":"Please replace the research report's proxy portfolio `SPY 40%`, `QQQ 20%`, `IWM 10%`, `TLT 10%`, `HYG 10%`, `LQD 5%`, `GLD 5%` with actual portfolio holdings and recalculate, as of `2026-05-08`, the `95%` daily VaR, `99%` daily VaR, maximum drawdown, and portfolio P&L for five scenarios: oil down another `10%`, oil rebound of `10%`, `10Y` up `50 bp`, `VIX` to `25`, and technology down `8%`.","priority":"high"},
  {"to":"derivatives-strategist","subject":"Validate semiconductor event risk in options pricing","question":"Please pull 1-week and 1-month ATM IV, 25-delta skew, and major gamma exposure for `INTC`, `AAPL`, `SMH`, `SOXX`, and `QQQ` as of `2026-05-08`, and assess whether the Apple-Intel policy catalyst has already been priced by the options market.","priority":"high"},
  {"to":"altdata-analyst","subject":"Add official breadth and liquidity data","question":"Please add official NYSE/Nasdaq advancers/decliners, 52-week highs/lows, volume, and available dark-pool or intraday liquidity indicators for `2026-05-04` to `2026-05-08`, to validate the research report's `S&P 500` constituent proxy result of `42.9%` weekly advancers and the resulting concentration conclusion.","priority":"normal"}
]}
```
