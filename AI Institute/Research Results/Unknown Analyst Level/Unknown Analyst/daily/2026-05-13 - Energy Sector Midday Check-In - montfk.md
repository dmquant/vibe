---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Energy Sector Midday Check-In

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Energy Sector Midday Check-In

Date anchor: `2026-05-13`, confirmed with `date +%Y-%m-%d`. All references to “today,” “this morning,” “this afternoon,” and “previous trading day” resolve against this date.

## Priority Conclusions

- **The oil story is still supply risk, not a clean demand recovery.** EIA’s May STEO revised its 2026 global oil inventory change to `-2.6 million b/d` from last month’s `-0.3 million b/d`, and expects global inventories to fall by an average `8.5 million b/d` in `2Q26`, keeping Brent around `$106/b` in May and June.[S1]
- **The latest confirmed U.S. inventory window is still the week ending `2026-05-01`; the `2026-05-13` WPSR is pending.** Confirmed commercial crude inventories were `457.182 million barrels`, down `2.314 million barrels` week over week; SPR was `392.700 million barrels`, down `5.224 million barrels`.[S2]
- **U.S. natural gas is comparatively comfortable, but LNG and international spreads remain the external variable.** As of `2026-05-01`, U.S. working gas in underground storage was `2,205 Bcf`, up `63 Bcf` week over week and `139 Bcf` above the five-year average; EIA also estimates U.S. LNG export capacity rose by about `0.9 Bcf/d` in April, while global LNG prices remain elevated because of Hormuz-related disruptions.[S1][S3]
- **Power constraints are now the overlap between the energy desk and the thematic/strategy desks.** Other analysts’ morning reports framed data-center electricity access, grid connection, cooling, water, and local approvals as core AI infrastructure constraints; the team’s common numeric anchors remain IEA/LBNL: global data-center electricity demand near `945 TWh` by 2030, U.S. data-center use at `176 TWh` in 2023, and a possible `325-580 TWh` by 2028.[S4][S5][S6]
- **Relationship to my own recent reports: no usable history, so no contradiction check is possible.** The `my_recent_reports.md` pull returned `0` lines and the content `# analyst_id required`; it is not a usable energy-desk archive, so there are no comparable prior conclusions to affirm or contradict.[S7]

## Confirmed Facts And Data This Morning

| Topic | Confirmed reading | Midday read-through | Source |
| --- | ---: | --- | --- |
| EIA STEO release timing | `2026-05-12`; forecast completed `2026-05-07` | This is the latest official short-term energy outlook available at midday. | [S1] |
| Hormuz assumption | EIA assumes the Strait of Hormuz remains “effectively closed” until late May, with shipping beginning to recover in June | Oil-price work has to track shipping normalization first, not only OPEC+ quota headlines. | [S1] |
| Brent price path | April average `$117/b`; May and June around `$106/b`; `4Q26` average `$89/b`; 2027 `$79/b` | The curve says near-term supply premium remains high, but EIA’s base case still assumes a second-half decline. | [S1] |
| 2026 global inventory change | `-2.6 million b/d`, versus previous forecast of `-0.3 million b/d` | The supply deficit is materially larger than last month’s official baseline. | [S1] |
| U.S. commercial crude inventories | `457.182 million barrels`, down `2.314 million barrels` w/w, up `18.805 million barrels` y/y | Absolute stocks remain above last year, but the weekly direction is a draw. | [S2] |
| SPR | `392.700 million barrels`, down `5.224 million barrels` w/w | SPR releases remain a constraint on price elasticity; the afternoon task is to verify whether this changes the price response. | [S2] |
| U.S. crude production | `13.573 million b/d`, down `13 thousand b/d` w/w, up `206 thousand b/d` y/y | U.S. supply remains steady, but it is not large enough to offset a Middle East-scale disruption. | [S2] |
| Refinery utilization | `90.1%`, versus `89.6%` the previous week and `89.0%` a year earlier | Pre-summer refinery runs are firm, supporting crude demand but reducing maintenance slack. | [S2] |
| Total products supplied | `19.484 million b/d`, down `1.647 million b/d` w/w | The single-week demand reading is soft; the `2026-05-13` report is needed to separate noise from high-price demand destruction. | [S2] |
| Gasoline/distillate inventories | Gasoline `219.795 million barrels`, down `2.504 million barrels`; distillate `102.344 million barrels`, down `1.293 million barrels` | Product inventories are drawing together, so crack-spread resilience needs monitoring. | [S2] |
| U.S. natural gas inventories | `2,205 Bcf`, up `63 Bcf` w/w, up `75 Bcf` y/y, and `139 Bcf` above the five-year average | Domestic gas storage is comfortable; Henry Hub upside depends more on LNG exports and power-sector gas burn. | [S3] |
| Power demand | EIA expects U.S. electricity demand to rise `1.3%` in 2026 to almost `4,250 billion kWh`, then grow `3.1%` in 2027; residential electricity prices rise `5%` in 2026 | Utilities, grid equipment, and gas-fired generation need more cross-team tracking than any single coal/oil/gas price point. | [S1] |

## How Other Analysts’ Morning Work Affects The Energy Desk

| Source analyst | Relevant conclusion | Energy-desk use |
| --- | --- | --- |
| `qa-manager` | The hot-CPI/A-share work lacked a Brent/WTI sensitivity; if oil stays above `$95`, the margin hit to cyclicals may be understated.[S4] | Build a Brent `$95/$106/$115` sensitivity for A-share style, airlines/chemicals/transport, and coal/utilities this afternoon. |
| `thematic-researcher` | AI data-center constraints are shifting from GPUs to whether sites can get power, cooling, permits, and community acceptance; the report cites IEA `945 TWh` and LBNL/DOE `176 TWh`, `325-580 TWh`.[S4][S5][S6] | Feed grid access, gas-fired generation, storage, and water constraints into the energy side of AI infrastructure valuation discounts/premia. |
| `chief-strategist` | A-share allocation work recommends overweighting utilities, grid equipment, power equipment, industrial automation, and energy-saving hardware by `+3-4 pp`.[S4] | Split the energy work into oil/gas supply shock as a cost shock and power-equipment demand as structural capex. |
| `asset-allocator` | The portfolio note favors high-dividend/defensive equities, gold, and tail hedges, while keeping “energy/metals” neutral.[S4] | Today’s data suggest that “energy neutral” needs conditions: if Brent holds near `$106/b` and WPSR draws continue, a neutral energy weight may understate upstream cash flow. |
| `auto-analyst` / `global-macro` | In the China EV localization cost stack, European/U.S. local labor, energy, and compliance erode `10%-15%`; smart-vehicle compliance erodes another `5%-8% / 250-400bp`.[S4] | Follow European power, gas, and local factory procurement costs this afternoon so EV cost pressure is not attributed only to tariffs. |

## Questions Still Pending Verification

- `2026-05-13` EIA WPSR: whether commercial crude, gasoline, distillate, SPR, and products supplied extend the drawdown pattern; this is the most important energy data release for the evening Asia window.
- Hormuz shipping recovery: EIA assumes flows start recovering after late May, but actual vessel traffic, insurance rates, and port queues still need confirmation.
- OPEC+/UAE changes: EIA now incorporates UAE’s OPEC exit and cut its 2027 OPEC spare-capacity forecast to `2.5 million b/d`; the afternoon task is to check whether the market has fully priced that definition change.[S1]
- Product demand: total products supplied fell `1.647 million b/d` in the week ending `2026-05-01`; the next weekly report is needed to determine whether that was holiday/statistical noise or early high-price demand destruction.
- Gas and power: U.S. gas storage is loose, but LNG export growth and data-center load can still create regional power/gas-price divergence from national Henry Hub.

## Afternoon Action Items

- Build a three-scenario `Brent $95/$106/$115` framework covering upstream cash flow, refining cracks, airlines/transport fuel costs, chemicals feedstock costs, and the relative appeal of coal and utilities.
- Update the WPSR after `2026-05-13 10:30 a.m. ET`: focus on commercial crude, SPR, gasoline, distillate, refinery utilization, and products supplied.
- Track three non-price Hormuz indicators: AIS vessel flow, tanker insurance/freight, and Asian buyer nominations.
- Refresh the natural-gas page by putting `2,205 Bcf` storage, the `63 Bcf` injection, LNG capacity `+0.9 Bcf/d`, and summer power-sector gas burn in one table.
- Send the strategy desk a one-page energy-shock memo addressing the `qa-manager` gap on oil prices above `$95`.

## Collaboration Items

- With `chief-strategist`: confirm whether a Brent `$106/b` baseline changes the A-share “May defense, June growth re-entry” path, especially across airlines, chemicals, transport, coal, and utilities.
- With `thematic-researcher` and `utilities-analyst`: translate the data-center `945 TWh` / `325-580 TWh` electricity framework into ERCOT/PJM gas generation, interconnection queues, and power-price sensitivity.
- With `asset-allocator`: review whether “energy/metals neutral” should become “tactical overweight upstream energy, neutral industrial metals,” with triggers defined as Brent holding near `$106/b` and continued WPSR draws.

## Sources

- [S1] EIA, Short-Term Energy Outlook, released `2026-05-12`: https://www.eia.gov/outlooks/steo/
- [S2] EIA, Weekly Petroleum Status Report, data for week ending `2026-05-01`, released `2026-05-06`: https://www.eia.gov/petroleum/supply/weekly/
- [S3] EIA, Weekly Natural Gas Storage Report, data for week ending `2026-05-01`, released `2026-05-07`: https://ir.eia.gov/ngs/ngs.html
- [S4] Workspace `recent_reports.md`, pulled with `since_hours=6`, `1308` lines, used as the authoritative source for other analysts’ morning work.
- [S5] IEA, Energy and AI, data-center electricity demand around `945 TWh` by 2030: https://www.iea.org/reports/energy-and-ai
- [S6] DOE/LBNL, 2024 United States Data Center Energy Usage Report, `176 TWh` in 2023 and `325-580 TWh` by 2028: https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers
- [S7] Workspace `my_recent_reports.md`, pull result `0` lines with content `# analyst_id required`; not usable as my own historical report archive.
