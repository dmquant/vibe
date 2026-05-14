---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# CEA Spot Price Check: 80.06 vs 114.6

Kind: **daily**
Analyst: **Utilities Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Utilities Analyst]]
- Analyst level: [[行业研究]]

# CEA Spot Price Check: 80.06 vs 114.6

## Priority Conclusions

1. **Downstream cost calculations should use CNY 80.06/tCO2e, not CNY 114.6/tCO2e.** As of the shell-anchored date **2026-05-11**, the latest verifiable completed trading day is **2026-05-08**; the China national carbon market CEA composite closing price was **CNY 80.06/t**.
2. **CNY 114.6/t should not be used as the 2026-05-08 national CEA spot close.** I could not reconcile 114.6 to the daily national CEA market bulletin, third-party daily line data, or exchange-republished market data. If 114.6 appears in a model or table, tag it as “source unverified / wrong basis” until proven otherwise.
3. **Using 114.6 would overstate cost by CNY 34.54/t, or 43.14% above 80.06.** At an illustrative emissions intensity of 0.85 tCO2/MWh, carbon cost would rise from **CNY 68.05/MWh** to **CNY 97.41/MWh**, an overstatement of **CNY 29.36/MWh**.

## Evidence Table

| Item | Verified Value | Note | Source |
|---|---:|---|---|
| Date anchor | 2026-05-11 | Anchored by shell `date +%Y-%m-%d`; all “today / previous trading day” references are resolved against this date | Local shell |
| Latest completed CEA trading day | 2026-05-08 | 2026-05-09 to 2026-05-10 were weekend days; no 2026-05-11 close was found during this check | National carbon market daily data search |
| CEA composite closing price | CNY 80.06/t | Open 79.90, high 80.80, low 79.90, close 80.06; closing price up 0.08% from the previous trading day | Xinhua Finance citing “全国碳交易”: https://finance.sina.com.cn/money/bond/2026-05-08/doc-inhxerwc2160367.shtml |
| Listed agreement trading | 81,400 t; CNY 6,517,170.00 | Disclosed for the same day as the 80.06 close | Same source; CarbonMarket.cn daily table: https://www.tanshichang.cn/ets/cets/ |
| Block agreement trading | 600,000 t; CNY 46,380,000.00; average CNY 77.30/t | The block average is below the close and should not replace “spot close” as the market price; it can be used for block-purchase scenarios | Same source; CarbonMarket.cn block table: https://www.tanshichang.cn/ets/cets/ |
| Total daily trading | 681,400 t; CNY 52,897,170.00 | Total value divided by total volume gives **CNY 77.63/t**, a traded average rather than a closing price | Same source |
| Price methodology | Composite market closing price | The 2026 methodology states that the composite market data include open, latest, close, high and low prices; the close is the composite price of each CEA vintage’s closing price | National Carbon Emissions Trading Market Composite Price Methodology, 2026 edition: https://editan.oss-cn-shanghai.aliyuncs.com/other/20251230/1767067263438385.pdf |

## Basis Assessment

**Recommended base case:** For power, industrial compliance shortfalls, shadow carbon cost, and tariff sensitivity work, use the **national carbon market composite closing price of CNY 80.06/tCO2e**.

Rationale:

- 80.06 is the official daily composite closing price for national CEA and aligns with the usual research basis for “spot close / CEA spot price.”
- The 2026 methodology explicitly defines the composite market data set as including a closing price, and that close is computed from the closing prices of CEA vintages. It is therefore the most appropriate common cost basis versus a single trade, a block average, or a third-party estimate.
- CNY 77.30/t is the 2026-05-08 block agreement average; CNY 77.63/t is the all-day value-weighted average calculated from total value divided by total volume. These can be used for specific execution scenarios but should not replace the base spot close.
- 114.6 does not match that day’s CEA listed trading, block trading, or total traded average. Unless a traceable source provides the instrument, currency, date, tax/fee treatment, and market basis, it should be treated as a wrong-basis input.

## Downstream Cost Basis

| Use Case | Recommended Formula | Price Input |
|---|---|---:|
| Compliance shortfall cost | Shortfall tCO2e × CEA price | CNY 80.06/t |
| Power carbon cost | Emissions intensity tCO2/MWh × CEA price | CNY 80.06/t |
| Sensitivity analysis | Base case 80.06; optional block scenario 77.30; do not use 114.6 as the base case | CNY 80.06/t |

Example: if coal-fired generation emissions intensity is **0.85 tCO2/MWh**, the base carbon cost is:

`0.85 × 80.06 = CNY 68.05/MWh`

If 114.6 is used incorrectly:

`0.85 × 114.6 = CNY 97.41/MWh`

Overstatement:

`97.41 - 68.05 = CNY 29.36/MWh`

## Follow-Up Items

- Trace the raw source field for **114.6**: check whether it came from an old date, a local pilot market, CCER, an overseas carbon price, an index level, currency conversion, OCR error, or unit mismatch.
- Split model fields explicitly: `CEA_spot_close_CNY_per_tCO2e = 80.06`, `CEA_block_avg_CNY_per_tCO2e = 77.30`, so that closing prices, traded averages, and block averages are not mixed.
- If an end-of-day update is needed after the 2026-05-11 close, update using the same basis: the latest “national carbon market composite closing price,” while keeping the 2026-05-08 version record.

## Handoff Conclusion

Use **CNY 80.06/tCO2e** as the CEA spot base cost price as of **2026-05-11**. **CNY 114.6/tCO2e is not verifiably supported and should not be used for downstream cost calculations.**
