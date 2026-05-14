---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "权益策略"
content_error: ""
---

# Conclusions for the Derivatives Strategist

Kind: **daily**
Analyst: **HK/US Strategist**

## Links

- Report type: [[daily]]
- Analyst: [[HK US Strategist]]
- Analyst level: [[权益策略]]

# Conclusions for the Derivatives Strategist

Date anchor: the shell date for this run is 2026-05-11. All references to “today,” “this week,” and “previous trading day” are anchored to 2026-05-11; the latest fully verifiable market close used below is 2026-05-08.

## Prioritized Conclusions

1. **For the KWEB 1x2 ratio downside wing: set it only after the event-readout D column triggers simultaneously, not mechanically on a KWEB -3% gap day.**  
   Pre-map the execution levels today: the latest verifiable KWEB price is **$29.55**, so the -3% reference is **$28.66**. If the D column confirms, the short wing should not sit above the event-readout low; prioritize **$28.50 or lower**, and if the open is already near $28.66, shift the short wing down into the **$27.50-$28.00** area.

2. **For the HSCEI put-spread, I recommend locking the near strike at -2%, about 8,700, rather than -3.5%, about 8,600.**  
   HSCEI closed at **8,889.07** on 2026-05-08; -2% is **8,711**, which rounds to **8,700** using HKEX’s short-dated **100-point** strike interval, while -3.5% is **8,578**, which rounds to **8,600**. If this is a protective put-spread, 8,600 is too far away as the near strike and leaves the first 2%-3% drawdown under-hedged; 8,600 is better used as the far strike or as a low-budget tail version.

## Key Data and Execution Mapping

| Item | Latest verifiable base | Conversion | Suggested execution point |
| --- | ---: | ---: | --- |
| KWEB spot | $29.55 (2026-05-08 20:41 GMT) | -3% = $28.66 | Do not use $28.66 as a standalone trigger; if D column triggers simultaneously, choose $28.50 or lower for the short wing |
| HSCEI close | 8,889.07 (2026-05-08) | -2% = 8,711; -3.5% = 8,578 | Use 8,700 as the near strike; reserve 8,600 for the far strike or tail-budget version |
| HSCEI strike spacing | 100 points for short-dated options in the 5,000-20,000 range | 8,711 -> 8,700; 8,578 -> 8,600 | Directly quoteable strike mapping |

## Why the KWEB Wing Should Wait for D-Column Confirmation

- **This is an event cluster week for KWEB, not just a gap-price trade.** The official KWEB factsheet shows that, as of 2026-04-30, the six largest holdings were Tencent **9.62%**, Alibaba **9.33%**, PDD **8.58%**, Meituan **7.28%**, NetEase **6.12%**, and JD.com **4.98%**, for a combined **45.91%**. JD.com reports Q1 on **2026-05-12** before the U.S. open, while Alibaba and Tencent both report or host results events on **2026-05-13**. A -3% KWEB gap alone could reflect pre-event de-risking, ADR discounting, or overnight liquidity rather than a confirmed fundamental readout.  
- **The options market is already charging event premium.** The KWEB chain shows aggregate call IV of **51.6%**, put IV of **51.1%**, and **66.4%** IV for the 2026-05-15 expiry; the 2026-05-15 $30 put is around **0.75/1.05** with delta **-0.578**. Front-end volatility is not cheap. A 1x2 ratio sells one extra downside option, so setting the wing solely because KWEB gaps -3% risks selling into the steepest skew before the event has been validated.  
- **Practical handling: pre-set prices, not triggers.** Put KWEB’s -3% level, $28.66, into the execution sheet today; the true order condition should remain “D-column event readout plus synchronized weakness in KWEB, core ADRs, and Hong Kong internet weights.” If D does not trigger, even a -3% KWEB gap should only justify observation or a small delta hedge, not the full 1x2 short wing.

## HSCEI Put-Spread: Why -2% Should Be the Near Strike

- **The latest full HSCEI session was not a panic close.** On 2026-05-08, HSI fell **0.87%** to 26,393.71, HSCEI fell only **0.34%** to **8,889.07**, and HSTECH fell **0.36%** to 5,102.79. Using 8,600, or -3.5%, as the near strike means the hedge starts only after a material second leg lower.  
- **HKEX contract design makes 8,700 easy to execute.** HSCEI short-dated options have **100-point** strike spacing in the 5,000-20,000 range and trade in day and after-hours sessions; 8,700 is the natural near strike.  
- **The structure’s role is cleaner.** I would use **8,700** as the near strike, with the far strike set at **8,400/8,300** depending on budget. Only lift **8,600** into the near strike if the team explicitly wants low-cost tail convexity and labels it as “not first-leg protection.”

## Suggested Trading-Desk Wording

- KWEB: `Set the wing only after the D-column event readout triggers simultaneously; $28.66 is only the -3% reference, not a standalone trigger. If triggered, keep the short wing no higher than $28.50; if the open is already near $28.66, shift the short wing down to $27.50-$28.00.`
- HSCEI: `Lock the put-spread near strike at 8,700 (-2%); use 8,600 (-3.5%) only as the far strike or as the near strike for a tail-only version.`

## Follow-Ups

- 2026-05-12 20:00 HKT: update the D-column readout after the JD.com Q1 call.  
- 2026-05-13 19:30-20:00 HKT: reassess full KWEB 1x2 execution after Alibaba and Tencent readouts.  
- Before order entry, ask the vol desk for live KWEB 2026-05-15/05-22 put-wing skew and net premiums for HSCEI 8,700/8,400 and 8,700/8,300 put-spreads.

## Sources

- KWEB options chain and price: Investing.com, KWEB 2026-05-15 options, 2026-05-08 20:41 GMT, $29.55 price, $30 put quote and delta. https://www.investing.com/etfs/kraneshares-csi-china-internet-options  
- KWEB options IV: Quantisnow, KWEB options, aggregate call IV 51.6%, put IV 51.1%, 2026-05-15 IV 66.4%. https://www.quantisnow.com/options/KWEB  
- KWEB holdings and portfolio data: KraneShares KWEB factsheet, data as of 2026-04-30. https://kraneshares.com/resources/factsheet/kweb_factsheet.pdf  
- HSCEI/HSI/HSTECH close on 2026-05-08: Xinhua, HSCEI 8,889.07, HSI 26,393.71, HSTECH 5,102.79. https://english.news.cn/20260508/c1ef4b2b383e486686db3e6f67a45524/c.html  
- HSCEI options on futures contract and strike spacing: HKEX factsheet, 100-point short-dated strike spacing in the 5,000-20,000 range. https://www.hkex.com.hk/-/media/HKEX-Market/Products/Listed-Derivatives/Equity-Index/Hang-Seng-Index-%28HSI%29/oof/HKEX_HSCEI-OOF_factsheet_en.pdf  
- JD.com earnings date: JD.com IR, Q1 2026 release before the U.S. open on 2026-05-12, call at 20:00 HKT. https://ir.jd.com/zh-hant/news-releases/news-release-details/jdcom-report-first-quarter-2026-financial-results-may-12-2026  
- Alibaba earnings date: Alibaba IR, release before the U.S. open on 2026-05-13, call at 19:30 HKT. https://www.alibabagroup.com/en-US/document-1986236561993236480  
- Tencent earnings date: Tencent IR, 2026 Q1 results announcement at 20:00 HKT on 2026-05-13. https://www.tencent.com/en-us/investors
