---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "量化与技术"
content_error: ""
---

# Card 03 Factor Validation Report - 2026-05-14

Kind: **daily**
Analyst: **Factor Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Factor Analyst]]
- Analyst level: [[量化与技术]]

# Card 03 Factor Validation Report - 2026-05-14

As of the institute work-date 2026-05-14, using completed A-share daily bars through 2026-05-13, I stress-test Card 02's claim that domestic AI-compute pricing is shifting from "small-cap growth / theme rotation" toward "mid-to-large-cap core / earnings delivery." The factor evidence supports the direction of the switch after Q1, but only partially: it is clean in computer/software, less clean in semiconductors because several smaller semiconductor beta names still lead YTD.

## Verdict

The factor layer confirms an inflection, not a fully completed regime change.

- Size and quality are starting to matter again: the core basket recovered much faster after Q1 and carried lower volatility and shallower drawdowns.
- The best evidence is in computer/software: small-growth software names show negative YTD return, weak April-May momentum, low volume follow-through, and deep distance from YTD highs.
- Semiconductors are different: large equipment/AI-compute leaders are catching up fast, but smaller memory/equipment beta names still retain strong YTD momentum. Therefore the right conclusion is "from small computer-theme growth toward core compute/semiconductor leaders," not "all small caps are dead."
- The crowding warning has moved from the old small-computer theme to selected core AI-compute winners: names such as Cambricon, Montage, Hygon, and GigaDevice are near YTD highs after sharp April-May rallies. The risk is no longer only valuation; it is momentum exhaustion after a crowded catch-up leg.

## Test Design

I used a 24-stock paired basket across computer and semiconductor stocks:

- Core basket: `002371`, `688012`, `688981`, `603986`, `688041`, `688256`, `600584`, `688008`, `000977`, `002230`, `688111`, `603019`.
- Small-growth basket: `300339`, `300366`, `300212`, `300290`, `300520`, `300663`, `688525`, `688627`, `688720`, `688595`, `688498`, `688072`.
- Return windows: start close on 2026-01-05, Q1 close on 2026-03-31, post-Q1 through 2026-05-13, and near-term momentum from 2026-04-13 to 2026-05-13.
- Factors: size bucket, price momentum, realized volatility, drawdown, volume/turnover proxy, distance from YTD high, and quality/growth proxy from official index factsheets.

Data note: daily bars came from Tencent Finance through AkShare `stock_zh_a_hist_tx`, pulled on 2026-05-14. Static benchmark checks use official CSI and SSE documents listed below.

## Cross-Section Results

| Factor metric, equal-weight mean | Core basket | Small-growth basket | Signal |
|---|---:|---:|---|
| YTD return, 2026-01-05 to 2026-05-13 | +29.2% | +24.1% | Slight core lead |
| Q1 return, to 2026-03-31 | -11.8% | -4.5% | Small-growth led in Q1 |
| Post-Q1 return, 2026-03-31 to 2026-05-13 | +46.0% | +21.9% | Core turn confirmed |
| Near-term return, 2026-04-13 to 2026-05-13 | +30.1% | +11.9% | Core momentum stronger |
| Annualized daily volatility | 51.5% | 66.4% | Core lower risk |
| Max drawdown in 2026 sample | -27.6% | -36.0% | Core higher quality profile |
| Last 20-day amount / first 20-day amount | 1.05x | 0.77x | Core has better follow-through |
| Distance from YTD high | -5.1% | -21.2% | Small-growth has weaker recovery |

The time profile is the key. Small-growth did less badly in Q1, but after 2026-03-31 the spread reversed sharply: core outperformed by 24.1 percentage points post-Q1 and by 18.2 percentage points in the 2026-04-13 to 2026-05-13 near-term window.

Median returns tell the same story and reduce the risk that one outlier is driving the conclusion: core median YTD return was +26.4% versus small-growth +7.3%; post-Q1 median was +35.2% versus +25.5%; near-term median was +25.5% versus +14.8%.

## Sector Split

| Sector split | Core | Small-growth | Interpretation |
|---|---:|---:|---|
| Computer YTD return | +0.3% | -28.8% | Clear small-growth decay |
| Computer post-Q1 return | +21.5% | -4.5% | Rotation already visible |
| Computer near-term return | +10.7% | -2.4% | Small computer momentum failed |
| Computer volatility | 41.4% | 63.1% | Small computer risk not paid |
| Computer max drawdown | -27.6% | -48.0% | Quality/financing penalty visible |
| Semiconductor YTD return | +43.7% | +76.9% | Small semiconductor beta still alive |
| Semiconductor post-Q1 return | +58.2% | +48.2% | Large/core catching up |
| Semiconductor near-term return | +39.8% | +26.3% | Core momentum now stronger |
| Semiconductor volatility | 56.5% | 69.7% | Smaller names remain higher beta |

This split is the most important stress-test result. Card 02 is too broad if read as "small growth has fully rolled over everywhere." The cleaner statement is: computer/software small-growth has already decayed, while semiconductor small-growth remains high beta but is no longer the only source of momentum. Large semiconductor equipment, AI-compute, and advanced-process names have taken leadership since early April.

## Quality And Growth Check

Official CSI factsheets confirm the quality divide between broad computer/core proxies and more speculative software proxies:

- CSI Computer Theme Index (`930651`) had 50 constituents as of 2026-03-31, YTD return of -4.81%, trailing P/E of 41.66, P/B of 4.61, dividend yield of 0.73%, total constituent market cap of RMB 2,587.0bn, average constituent market cap of RMB 51.7bn, maximum RMB 278.8bn, and minimum RMB 15.4bn. This is not cheap value, but it is earnings-positive and institutional-size.[^1]
- CSI All Share Software Index (`H30202`) had 50 constituents as of 2026-03-31, YTD return of -12.01%, one-month return of -16.28%, average constituent market cap of RMB 27.9bn, minimum RMB 6.9bn, and dividend yield of only 0.42%; the factsheet leaves trailing P/E and P/B blank, which is consistent with weaker aggregate earnings visibility.[^2]
- The semiconductor ETF benchmark had a Q1 2026 benchmark return of -3.25% and daily standard deviation of 2.39%, while the ETF itself returned -3.38% with 2.38% standard deviation. That Q1 weakness is important: the strong semiconductor basket signal in April-May is a post-Q1 recovery rather than a smooth YTD trend.[^3]

Factor interpretation: the switch is not a classic value rotation. Core names are still expensive. The switch is a quality-adjusted momentum rotation: investors are paying up for scale, earnings visibility, order validation, domestic AI-compute capacity, and supply-chain bottleneck positions.

## Crowding And Decay Signals

I would set two warning bands:

| Signal | Warning level | Interpretation |
|---|---:|---|
| Volume/amount acceleration | Last 20-day amount / first 20-day amount above 1.5x | Crowding in the active rally leg |
| Price extension | 20-trading-day return above +30% and price within 2% of YTD high | Momentum squeeze; trim beta, keep core only |
| Failed follow-through | Amount ratio below 0.8x and price more than 15% below YTD high | Theme decay / capital withdrawal |
| Risk not paid | Annualized volatility above 60% with negative post-Q1 return | Avoid small-growth rebound traps |

Current basket read:

- Core crowding is rising, not yet universally extreme. The core basket amount ratio is 1.05x, but several winners are already stretched. `688256` rose +61.1% from 2026-04-13 to 2026-05-13, with a 1.52x amount ratio and close at the YTD high. `688008`, `688041`, and `603986` also closed at or very near YTD highs after post-Q1 gains of +106.6%, +65.6%, and +53.3%, respectively.
- Small computer theme has already tripped decay rather than crowding. The small computer subgroup had -28.8% YTD return, -4.5% post-Q1 return, -2.4% near-term return, 0.67x amount ratio, and an average close 40.8% below its YTD high. This is no longer a crowded long; it is a failed theme.
- Small semiconductor is a live but crowded beta sleeve. `688525` and `688498` still had YTD gains of +164.7% and +157.2%, respectively. They are not evidence against semiconductor momentum; they are evidence that the "small-growth unwind" is selective and will likely appear first in software/computer, then in non-validated semiconductor names.

## Answer To The Mission Question

Can the switch be confirmed at factor level? Yes, with qualifications.

The evidence confirms a post-Q1 inflection from small computer/software growth toward mid-to-large core AI-compute and semiconductor leaders. The factor signature is visible in higher post-Q1 core returns, stronger near-term momentum, lower volatility, shallower drawdown, and better volume follow-through. However, the evidence does not confirm a blanket A-share shift out of every small-cap semiconductor growth name. Semiconductor still has high-beta small-cap leaders, especially in memory and equipment supply-chain names, so the correct portfolio action is not indiscriminate size rotation. It is to upgrade the quality threshold inside the theme.

Practical allocation implication for Card 02:

- Overweight: scaled semiconductor equipment, domestic AI-compute chips, advanced-process foundry/packaging, and core server/AI-infrastructure names with order evidence.
- Market weight: high-quality software/cloud names where earnings delivery is visible but valuation is not yet de-risked.
- Underweight: small computer/software theme names with weak post-Q1 momentum, high volatility, falling volume follow-through, and deep distance from YTD highs.
- Tactical risk: after the April-May catch-up, the next drawdown risk is in crowded core winners, not only in small caps. A pullback that preserves volume leadership would be healthy; a pullback with volume collapse would be a factor-decay warning.

## Handoff

Recommended next analyst: `ashare-strategist` [primary]. Trigger: factor analysis surfaced a market-structure question rather than a sector-technology question. The next check should use margin financing, ETF creation/redemption, northbound/domestic institutional flow proxies, and lockup/pledge calendars to decide whether the factor rotation has real money sponsorship or is only a price-momentum catch-up.

## Sources

[^1]: CSI Index, "CSI Computer Theme Index (`930651`) factsheet, 2026-03-31," https://oss-ch.csindex.com.cn/static/html/csindex/public/uploads/indices/detail/files/zh_CN/930651factsheet.pdf
[^2]: CSI Index, "CSI All Share Software Index (`H30202`) factsheet, 2026-03-31," https://oss-ch.csindex.com.cn/static/html/csindex/public/uploads/indices/detail/files/zh_CN/H30202factsheet.pdf
[^3]: Shanghai Stock Exchange fund disclosure, "Guolian'an CSI All Share Semiconductor Products and Equipment ETF 2026 Q1 Report, published 2026-04-22," https://www.sse.com.cn/disclosure/fund/announcement/c/new/2026-04-22/512480_20260422_SY82.pdf
[^4]: Tencent Finance daily A-share bars accessed through AkShare `stock_zh_a_hist_tx`, pulled 2026-05-14; factor calculations by analyst using completed bars through 2026-05-13.

Footer: Card 03 factor validation completed on 2026-05-14, Asia/Singapore work-date.
