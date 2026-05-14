---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review: Weekly Derivatives Strategy Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review: Weekly Derivatives Strategy Research Package

Date anchor: local `date +%Y-%m-%d` returned `2026-05-10`. This QA review covers `01_weekly_plan.md`, `01_weekly_plan.en.md`, `02_weekly_research.md`, and `02_weekly_research.en.md` in the workspace.

## 1. File Manifest

| declared file | exists in workspace (yes / no) | note |
|---|---|---|
| `01_weekly_plan.md` | yes | `11,591` bytes; readable and complete. |
| `01_weekly_plan.en.md` | yes | `12,349` bytes; readable and complete. |
| `02_weekly_research.md` | yes | `19,331` bytes; readable and complete. |
| `02_weekly_research.en.md` | yes | `21,578` bytes; readable and complete. |

## 2. Cross-Step Consistency

| Check | Planning-stage value | Research-stage value | QA assessment |
|---|---:|---:|---|
| Date anchor and coverage window | `2026-05-10`; `2026-05-04` to `2026-05-08` | `2026-05-10`; `2026-05-04` to `2026-05-08` | Matches. |
| April labor data | Payrolls `115,000`; unemployment `4.3%`; average hourly earnings `+0.2% m/m`, `+3.6% y/y`; revision `-16,000` | Same numbers; adds June/July/September FOMC probabilities of `86.3%`, `68.6%`, and `39.4%` | Matches, and the research-stage expansion is useful.[2][4] |
| Index weekly returns | S&P 500 `+2.3%` to `7,398.93`; Nasdaq Composite `+4.5%` to `26,247.08` | SPX `+2.75%` to `7,398.93`; NDX `+5.73%` to `29,234.99` | The change in convention is not labeled clearly enough. The plan uses AP weekly S&P 500/Nasdaq Composite figures; the research uses Yahoo close-to-close SPX/NDX. The conclusion is usable, but the summary must state that these are not the same index pair or the same weekly calculation.[1][3] |
| AMD earnings and event volatility | Q1 revenue `10.3 billion`, `+38%` y/y; Data Center `5.8 billion`, `+57%` y/y; Q2 `11.2 billion ± 300 million`; implied move `±8.4%` | Same company fundamentals; AMD realized move `+18.61%`, realized - implied `+10.21 pts` | Matches, and the research adds a useful implied-versus-realized calculation.[6][9] |
| Long-end rates and Treasury refunding | 10Y `4.36%`; 30Y `4.94%`; 2Y `69 billion`, 3Y `58 billion`, 5Y `70 billion`, 7Y `44 billion`, 10Y `42 billion`, 20Y `16 billion`, 30Y `25 billion`, FRN `28 billion` | 10Y `4.364%`; 30Y `4.947%`; same issuance sizes | Matches; the research uses higher precision. |
| Commodity weekly performance | Crude Oil `101.94` to `95.87`; Gold `4,644.50` to `4,723.70` | CL `-10.34%`; USO `-9.50%`; GC `+4.45%`; GLD `+4.60%` | Needs revision. The planning-stage price change implies roughly `-5.95%` for Crude Oil and `+1.70%` for Gold, which does not match the research-stage Yahoo futures calculations of `-10.34%` and `+4.45%`. The report must state whether it changed contracts, price source, settlement convention, or start/end dates.[3][5] |
| AKAM event move | AKAM rose `16.5%` | AKAM realized move `+26.58%` | Needs a window label. If `16.5%` is a news-day or intraday convention and `+26.58%` is a pre/post close-to-close convention, the research table should say so to avoid an apparent contradiction.[1][8] |

## 3. Narrative Coherence

All six questions from the plan map to sections in the research draft: Q1 maps to indexes and volatility, Q2 to labor data and FOMC probabilities, Q3 to single-name earnings dispersion, Q4 to Treasury refunding and the 30Y trigger, Q5 to the oil/gold cross-asset signal, and Q6 to next-week option structures.

The main issue is not whether the questions were answered, but whether the evidence is strong enough for the conclusions. Q1 originally requested 0DTE volume, put/call ratios, dealer gamma, and major-strike OI; the research acknowledges the public-data gap, but the summary still uses front-end volatility and gamma language. That language should be softened to “price and VIX proxies suggest,” so readers do not assume 0DTE/dealer gamma was verified. Q2 originally asked for Fed funds futures, SOFR, OIS, MOVE, and option surfaces; the research mainly uses Investing.com Fed Rate Monitor and `^TNX`/`^TYX` proxies, so the proxy caveat should remain prominent. Q3 is strong on AMD, includes PLTR as a counterexample, and correctly avoids claiming systematic underpricing for the full sample because AKAM/MNST/DIS lack implied moves.

Q5 is the section most in need of repair. The crude/gold prices in the plan do not reconcile with the CL/GC weekly returns in the research, yet the research uses that block to support the cross-asset conclusion that inflation risk was not simply unwound. The conclusion may be directionally reasonable, but the underlying commodity convention must be unified before PM presentation. Q6 is complete as a trade-structure watchlist, but every structure should remain labeled as a research watchlist, not as an execution recommendation.

## 4. Editorial Quality

- In the first priority conclusion, explicitly state the convention difference between `S&P 500/Nasdaq Composite` and `SPX/NDX`, so readers do not mix AP’s `+2.3%`/`+4.5%` with Yahoo close-to-close `+2.75%`/`+5.73%`.
- Add four fields to the commodity table: price source, contract month, close/settlement convention, and start/end dates. `Crude Oil 101.94 -> 95.87` and `CL -10.34%` should not appear side by side without explanation.
- Split the earnings implied-versus-realized table into two tables: one for verifiable implied-move samples such as AMD and PLTR, and one for AKAM, MNST, and DIS realized moves with a clear note that they lack implied moves and cannot enter the win/loss tally.
- Source numbering changes between the plan and research; for example, `[7]` is Market Chameleon in the plan but Monster Beverage in the research. Each file is internally coherent, but the final compiled report should use one source list to avoid cross-file citation errors.

## 5. Recommended Revisions

- High priority: unify the index convention. The summary should state that the plan’s `S&P 500 +2.3%` and `Nasdaq Composite +4.5%` are AP weekly figures, while the research’s `SPX +2.75%` and `NDX +5.73%` are Yahoo close-to-close calculations; they are not interchangeable.
- High priority: recalculate or explain the commodity section. Reconcile Crude Oil `101.94` to `95.87`, Gold `4,644.50` to `4,723.70`, CL `-10.34%`, and GC `+4.45%`, and identify whether the report uses continuous futures, a specific contract, or a different settlement time.
- Medium priority: add a window note for AKAM `16.5%` versus `+26.58%`, distinguishing news-day, intraday, and close-to-close event-move conventions.
- Medium priority: move missing 0DTE/dealer gamma, SOFR/OIS/MOVE, and option-surface data into one “Gaps and Next Steps” box instead of scattering the caveats across sections.
- Low priority: in the PM-facing version, standardize bilingual heading hierarchy and source numbering, and reduce repeated `Not publicly verifiable` / `公开不可复核` phrasing so the report reads more smoothly.

## 6. Overall Rating

`needs-revision` — The research package is complete, the question mapping is clear, and the core conclusions are broadly traceable, but the index, commodity, and AKAM event-window conventions need to be fixed before PM presentation.
