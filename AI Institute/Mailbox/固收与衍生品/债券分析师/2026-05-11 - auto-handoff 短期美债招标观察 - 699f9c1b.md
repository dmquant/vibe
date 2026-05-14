---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "固收与衍生品"
---

# [auto-handoff] 短期美债招标观察

Status: **completed**
Dispatch status: **completed**
Sender: **Global Macro Analyst**
Recipient: **Bond Analyst**
Messages: **2**
Dispatches: **1**


## Links

- Mailbox topic: [[[auto-handoff] 短期美债招标观察]]
- Sender: [[Global Macro Analyst]]
- Recipient: [[Bond Analyst]]
- Analyst level: [[固收与衍生品]]

## Latest body

致 全球宏观分析师：

协同任务已完成。执行方为 债券分析师。
模式: adhoc
会话: c750f895-21ef-4af2-9ffa-608bc7e474c2

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Bond Analyst (债券分析师).
# Expertise
Rates, credit, yield curve, duration management.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same co

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Messages

### 1. [auto-handoff] 短期美债招标观察 / replied

From: Global Macro Analyst
To: Bond Analyst
Created: 11/05/2026, 08:05:30

Auto-handoff emitted by Global Macro Analyst after the run of 全球宏观分析师 · 美国数据追踪 finished.
Source workflow: analyst:global-macro:us_data_watch
Source run: 2b69cfa0-ee41-49af-828b-832b7c66b4eb
Source session: d4b228e8-ac95-4b62-ae6b-3d2ddfaea595
Priority: normal

--- Requested follow-up ---
关注今日3M/6M美债招标情况，请分析市场在CPI发布前的防御性仓位分布。

### 2. result / sent

From: Bond Analyst
To: Global Macro Analyst
Created: 11/05/2026, 08:10:18

致 全球宏观分析师：

协同任务已完成。执行方为 债券分析师。
模式: adhoc
会话: c750f895-21ef-4af2-9ffa-608bc7e474c2

结果摘要:
# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Bond Analyst (债券分析师).
# Expertise
Rates, credit, yield curve, duration management.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same co

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · 债券分析师 · [auto-handoff] 短期美债招标观察

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`
Created: **11/05/2026, 08:05:30**
Completed: **11/05/2026, 08:10:18**

#### Input

# Step −1 — Anchor today's date BEFORE you start

Run this in your shell and record the result:

```bash
date +%Y-%m-%d
```

All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.

# Role
Bond Analyst (债券分析师).
# Expertise
Rates, credit, yield curve, duration management.

# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same content (same numbers, same citations, same conclusions, idiomatic English prose).
- You MUST use your file-creation tool (shell, write_file, or your CLI's equivalent) to actually write BOTH files. Printing content as your chat reply alone is NOT acceptable.
- After writing, verify both files exist (e.g. `ls -la handoff_response.md handoff_response.en.md`). Your chat reply must be a single confirmation line in the form: `Wrote handoff_response.md (<bytes> bytes); wrote handoff_response.en.md (<bytes> bytes) — <one-sentence summary>`.
- This step is graded on the presence and content of BOTH files in the workspace. If either is missing, the step is treated as failed regardless of how good the inline content was, and downstream steps will fail.
- Do NOT echo the deliverables' full content in your chat reply. The reply is the confirmation line only; the deliverables live in the files.

# Task
# Incoming coordination request from Global Macro Analyst
Source workflow: 全球宏观分析师 · 美国数据追踪 (analyst:global-macro:us_data_watch)
Source run: 2b69cfa0-ee41-49af-828b-832b7c66b4eb

# The question
关注今日3M/6M美债招标情况，请分析市场在CPI发布前的防御性仓位分布。

# Your task
Investigate the question above using your domain expertise. Produce a focused, evidence-backed answer suitable for the requesting analyst's next step. Lead with conclusions; back them with specific data, source citations, and concrete numbers where possible.

# Output Format
- Write BOTH `handoff_response.md` and `handoff_response.en.md` using structured Markdown: clear headings, prioritised conclusions, supporting tables, follow-up items.
- The two files MUST cover the same content, the same numbers, the same citations, and the same conclusions. They are not a translator's literal back-and-forth — they are the same analysis written for different audiences (中文为主读者 vs. English-as-primary readers), idiomatic to each language.
- Re-read the MANDATORY DELIVERABLE section above before responding.

# Output Language Policy
- Follow these instructions (English). Produce the report deliverables in BOTH 简体中文 and English (see the bilingual rule above).
- `handoff_response.md` — fully 简体中文: headings, narrative, bullet points, table cells, in-line annotations.
- `handoff_response.en.md` — fully English: headings, narrative, bullet points, table cells, in-line annotations.
- Keep ticker symbols, English analyst IDs, file paths, code identifiers, raw numeric values, and proper nouns without good Chinese renderings (e.g. "Powell", "DeepSeek V4") verbatim in BOTH files.

# Workspace Robustness
- BEFORE running your task, try to read any files this prompt references (using your workspace-list / read-file tool). If a referenced file is missing because an earlier step failed to write it, do NOT abort. Search the conversation context above for the prior step's full output and use that as the source. State explicitly in your confirmation line which referenced files were missing and reconstructed from context.
- Continue and complete this step's deliverable regardless of upstream file gaps. Always write your own declared output file even if upstream files were missing.

#### Result

# Step −1 — Anchor today's date BEFORE you start
Run this in your shell and record the result:
```bash
date +%Y-%m-%d
```
All "today / yesterday / this week / 上周 / 上一交易日" references in your output MUST resolve against this date. Do NOT simulate or roleplay a historic date, even if a salient training-data event (e.g. a famous policy week, earnings cycle, or shock) seems closer to the prompt. The shell clock is authoritative; if your training instinct says one date and the shell says another, the shell wins. All web-search queries, citations, and data references must target the window ending on the shell date, not training-cutoff windows.
# Role
Bond Analyst (债券分析师).
# Expertise
Rates, credit, yield curve, duration management.
# MANDATORY DELIVERABLE — READ FIRST
- This step has TWO mandatory deliverables; both MUST be written to your workspace:
  1. `handoff_response.md` — the canonical 简体中文 (Simplified Chinese) version.
  2. `handoff_response.en.md` — the English version of the same co


## Attached Markdown

### 1. Mailbox · 债券分析师 · [auto-handoff] 短期美债招标观察

# U.S. 3M/6M Bill Auctions and Defensive Positioning Ahead of CPI

Anchor date: 2026-05-11, from shell `date +%Y-%m-%d`. Data cutoff: early 2026-05-11 Singapore time. The U.S. Treasury had not yet released the official 2026-05-11 13-week/26-week Bill auction results in the result feed, so this note treats “today’s auction” as announced supply and uses the latest published auction, 2026-05-04, as the observable demand print. Stop-out, bid-to-cover, and bidder-class distribution need to be updated after the U.S. auction.

## Priority Conclusions

1. **Today’s front-end supply is large, but it is not the main risk point.** Treasury is auctioning $89bn of 13-week Bills and $77bn of 26-week Bills on 2026-05-11, or $166bn combined, settling on May 14. The same day also includes a $58bn 3-year Note, followed by a $42bn 10-year auction on May 12 and a $25bn 30-year auction on May 13; the refunding settles on May 15 and raises about $41.7bn of new cash from private investors. If bill demand stays as firm as it was on May 4, the CPI-sensitive vulnerability sits more in 2Y-5Y and refunding duration than in 3M/6M Bills themselves. [TreasuryDirect 13-week announcement](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2026/A_20260507_2.pdf), [TreasuryDirect 26-week announcement](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2026/A_20260507_4.pdf), [Treasury refunding statement](https://home.treasury.gov/news/press-releases/sb0489)

2. **Positioning looks like “cash/bill defense plus caution on front-end duration,” not a broad duration grab.** As of May 8, the 13-week Bill secondary-market coupon equivalent was 3.68% and the 26-week was 3.71%; the 2Y CMT was 3.90%, the 10Y was 4.38%, and 2s10s was about +48bp, roughly 3bp flatter than May 1. The curve says investors are willing to sit in T-bills and the very front end, but they are not adding much duration in the CPI-sensitive 2Y-5Y sector. [Treasury Daily Bill Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_bill_rates), [Treasury Par Yield Curve](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve)

3. **The latest 3M/6M auction showed resilient real-money demand, pointing to a defensive “clip carry, shorten duration” allocation.** On May 4, the 13-week Bill bid-to-cover was 2.76 and the 26-week was 2.79; indirect bidders took 49.3% and 53.9% of competitive awards, while primary dealers took 42.8% and 35.8%. This is not a structure of front-end cash retreat. It looks more like foreign/real-money accounts and the money-fund complex continuing to absorb front-end supply. [May 4 13-week result](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2026/R_20260504_1.pdf), [May 4 26-week result](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2026/R_20260504_2.pdf)

4. **Inflation risk premium has already been paid ahead of CPI, but not in a disorderly way.** April CPI is scheduled for 2026-05-12 at 08:30 ET; the FHLBNY weekly calendar shows a survey estimate of 0.70% MoM for headline CPI, versus 0.90% prior. Using May 8 Treasury data, the 5Y breakeven is about 2.62% (5Y nominal 4.02% minus 5Y real 1.40%) and the 10Y breakeven is about 2.45% (4.38% minus 1.93%). That supports curve defense and limited outright duration risk before the CPI print. [BLS CPI calendar](https://www.bls.gov/schedule/news_release/cpi.htm), [FHLBNY weekly update](https://www.fhlbny.com/w/fi/msd/2026/260508), [Treasury Real Yield Curve](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_real_yield_curve)

## Today’s 3M/6M Bill Auction Setup

| Item | 13-week Bill | 26-week Bill |
|---|---:|---:|
| Auction date | 2026-05-11 | 2026-05-11 |
| Issue/settlement date | 2026-05-14 | 2026-05-14 |
| Maturity date | 2026-08-13 | 2026-11-12 |
| CUSIP | 912797TW7 | 912797UY1 |
| Offering size | $89.0bn | $77.0bn |
| Currently outstanding | $81.483bn | $0 |
| Maximum award | $31.150bn | $26.950bn |
| Competitive close | 11:30 a.m. ET | 11:30 a.m. ET |
| Same-day cash backdrop | $166bn combined bills; $288.996bn of publicly held Bills mature on May 14, with $18.574bn of SOMA maturities | Same |

Three points matter today: first, whether 3M/6M clear close to the May 8 secondary-market discount rates of 3.60%/3.59%; second, whether indirect bidder share holds around the 50% area; third, whether primary-dealer awards rise materially. If the 26-week Bill tails and dealer take-down moves above roughly 40%, investors are refusing to lock in six-month nominal rates before CPI and defensive cash is being pulled back inside three months.

## Positioning Signal From The Previous Auction

| 2026-05-04 result | 13-week Bill | 26-week Bill |
|---|---:|---:|
| High rate | 3.610% | 3.610% |
| Investment rate | 3.694% | 3.728% |
| Bid-to-cover | 2.76 | 2.79 |
| Allotted at high | 14.97% | 2.03% |
| Competitive awards | $87.062bn | $75.315bn |
| Indirect awards | $42.893bn / 49.3% | $40.585bn / 53.9% |
| Direct awards | $6.922bn / 8.0% | $7.736bn / 10.3% |
| Primary-dealer awards | $37.246bn / 42.8% | $26.994bn / 35.8% |

Interpretation: real-money absorption was better in 6M than 3M, and the 26-week high-allotment rate was only 2.03%, meaning the longer bill did not require a meaningful concession to clear. If today repeats that pattern, CPI positioning should be read as “cash-like assets are still being bought, duration risk is being deferred until after the data,” not as a funding-stress-driven selloff in the front end.

## Defensive Positioning Ahead Of CPI

| Positioning area | Evidence | Implication |
|---|---|---|
| 1M-6M Bills | May 8 coupon equivalents for 4W/13W/26W were 3.67%/3.68%/3.71%; the latest 3M/6M bid-to-cover ratios were both near 2.8 | Cash managers and money funds still want short-bill carry; defense is concentrated in low-duration assets |
| 2Y-5Y | From May 1 to May 8, 2Y rose from 3.88% to 3.90%, 5Y held at 4.02%, and 10Y fell from 4.39% to 4.38% | The CPI-sensitive sector is not being chased; positioning is more about shortening duration or holding flatteners |
| 5Y/10Y inflation risk | 5Y breakeven is about 2.62%, 10Y about 2.45% | The market has paid for a hot CPI risk premium; Treasury bulls need data confirmation |
| Funding backdrop | FHLBNY says net positive UST/T-bill settlements in the coming week are mostly modest, except about $41.7bn of new-cash settlement on May 15; financing conditions are expected to remain generally calm | The front end is not under systemic funding stress, but the refunding settlement date can amplify noise in front-end rates and repo |

## Trading Implications

- **Base case:** If today’s 3M/6M auctions show bid-to-cover around 2.7-2.9, indirect bidders near or above 50%, and no material rise in dealer take-down, CPI defense is still “own bills, avoid adding front-end duration.” That is stable for Bill/OIS and front-end repo, but it is not a direct bullish signal for 2Y-5Y duration.
- **Hot CPI scenario:** 2Y-3Y should be more fragile than Bills, and the curve can bear-flatten. If the 26-week Bill also tails, it confirms that uncertainty is being compressed into maturities shorter than three months.
- **Benign CPI scenario:** If CPI is below the 0.70% MoM survey estimate and today’s bill auctions show strong indirect demand, the front end can rotate from cash defense into 2Y-5Y receivers or modest duration adds. The 10Y+ sector remains constrained by this week’s refunding supply.

## Follow-Up Items

1. Official 2026-05-11 13-week and 26-week results: high rate, investment rate, tail/stop-through, bid-to-cover, indirect/direct/dealer take-down, and allotted at high.
2. Same-day $58bn 3-year Note result: if 3Y is weak while Bills are firm, defense is still parked in cash; if 3Y is also strong, that becomes a broader pre-CPI flight-to-quality signal.
3. 2026-05-12 08:30 ET CPI: headline MoM versus the 0.70% survey, plus core services and energy contribution, is the trigger for deciding whether to move from Bill defense into 2Y-5Y duration.

### 2. Mailbox · 债券分析师 · [auto-handoff] 短期美债招标观察

# 美国3M/6M国库券招标与CPI前防御仓位观察

基础日期：2026-05-11（shell `date +%Y-%m-%d`）。数据截止：2026-05-11新加坡时间早间；美国财政部尚未发布2026-05-11的13-week/26-week Bill正式招标结果，因此下文把“今日招标”按已公告供给和上一期已发布结果处理，实际stop-out、bid-to-cover和投标人分布需在美国东部时间招标后更新。

## 优先结论

1. **今日前端供给本身不小，但不是核心风险点。** 2026-05-11将拍卖$89bn 13-week Bill和$77bn 26-week Bill，合计$166bn，5月14日结算；同日还有$58bn 3-year Note，随后5月12日$42bn 10-year、5月13日$25bn 30-year，三只再融资券5月15日结算并从私人投资者筹集约$41.7bn新现金。短券需求若仍像5月4日那样稳，CPI前的真正脆弱点更可能在2Y-5Y和再融资券，而不是3M/6M Bill本身。[TreasuryDirect 13-week公告](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2026/A_20260507_2.pdf)、[TreasuryDirect 26-week公告](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2026/A_20260507_4.pdf)、[Treasury再融资声明](https://home.treasury.gov/news/press-releases/sb0489)

2. **市场仓位是“现金/短券防御 + 中前端久期谨慎”，不是全面避险买久期。** 截至5月8日，13-week Bill二级市场coupon equivalent为3.68%，26-week为3.71%；2Y CMT为3.90%，10Y为4.38%，2s10s约+48bp，较5月1日约收窄3bp。曲线表现显示资金愿意停在T-bills和极短端，但对CPI冲击敏感的2Y-5Y不愿显著加久期。[Treasury Daily Bill Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_bill_rates)、[Treasury Par Yield Curve](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve)

3. **上一期3M/6M招标显示真实钱需求仍强，说明防御仓位更偏“拿票息、缩久期”。** 5月4日13-week Bill bid-to-cover为2.76，26-week为2.79；间接投标人中标占竞争性中标的49.3%和53.9%，一级交易商中标占42.8%和35.8%。这不是短端资金撤退的结构，更像海外/真实钱和货基体系继续吸收短端供给。[5月4日13-week结果](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2026/R_20260504_1.pdf)、[5月4日26-week结果](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2026/R_20260504_2.pdf)

4. **CPI前通胀风险溢价已经被支付，但未到失控。** 4月CPI将在2026-05-12 08:30 ET发布；FHLBNY周报列示市场调查为headline CPI MoM 0.70%，前值0.90%。按5月8日Treasury数据估算，5Y breakeven约2.62%（5Y nominal 4.02% - 5Y real 1.40%），10Y breakeven约2.45%（4.38% - 1.93%）。这支持CPI前以曲线防御、少做方向性多久期的仓位分布。[BLS CPI日程](https://www.bls.gov/schedule/news_release/cpi.htm)、[FHLBNY周报](https://www.fhlbny.com/w/fi/msd/2026/260508)、[Treasury Real Yield Curve](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_real_yield_curve)

## 今日3M/6M Bill招标看点

| 项目 | 13-week Bill | 26-week Bill |
|---|---:|---:|
| 拍卖日期 | 2026-05-11 | 2026-05-11 |
| 发行/结算日 | 2026-05-14 | 2026-05-14 |
| 到期日 | 2026-08-13 | 2026-11-12 |
| CUSIP | 912797TW7 | 912797UY1 |
| 招标规模 | $89.0bn | $77.0bn |
| 当前未偿 | $81.483bn | $0 |
| 最高中标限额 | $31.150bn | $26.950bn |
| 竞争性投标截止 | 11:30 a.m. ET | 11:30 a.m. ET |
| 同日现金背景 | 合计$166bn短券；5月14日有$288.996bn公众持有Bills到期，SOMA到期$18.574bn | 同左 |

今日需要重点看三件事：第一，3M/6M是否能在接近5月8日二级市场3.60%/3.59%折价率附近成交；第二，间接投标人占比是否维持在约50%区域；第三，一级交易商中标是否明显上升。若26-week出现tail且dealer take-down升破约40%，说明CPI前投资者不愿锁定6个月名义利率，防御仓位会进一步缩到3M以内。

## 上一期招标给出的仓位信号

| 2026-05-04结果 | 13-week Bill | 26-week Bill |
|---|---:|---:|
| High rate | 3.610% | 3.610% |
| Investment rate | 3.694% | 3.728% |
| Bid-to-cover | 2.76 | 2.79 |
| Allotted at high | 14.97% | 2.03% |
| 竞争性中标 | $87.062bn | $75.315bn |
| 间接投标人中标 | $42.893bn / 49.3% | $40.585bn / 53.9% |
| 直接投标人中标 | $6.922bn / 8.0% | $7.736bn / 10.3% |
| 一级交易商中标 | $37.246bn / 42.8% | $26.994bn / 35.8% |

解读：6M比3M的真实钱吸收更好，且26-week high-allotment只有2.03%，说明5月4日长一点的Bill并未需要明显让利才能消化。若今日结果延续该结构，CPI前仓位应理解为“现金类资产仍被买入、久期风险留给数据后再加”，不是流动性压力驱动的短端抛售。

## CPI前防御性仓位分布

| 仓位区域 | 证据 | 含义 |
|---|---|---|
| 1M-6M Bills | 5月8日4W/13W/26W coupon equivalent分别为3.67%/3.68%/3.71%；上一期3M/6M bid-to-cover均接近2.8 | 现金管理账户和货基仍愿意拿短券票息，防御仓位集中在低久期资产 |
| 2Y-5Y | 5月1日至5月8日2Y从3.88%升至3.90%，5Y维持4.02%，10Y从4.39%降至4.38% | CPI敏感区间没有明显追多，更多是缩短久期或做flattening防御 |
| 5Y/10Y通胀风险 | 5Y breakeven约2.62%，10Y约2.45% | 市场已为热CPI支付溢价，利率多头需要等数据确认 |
| 资金面 | FHLBNY称未来一周净正向UST/T-bill结算多数温和，但5月15日约$41.7bn新现金结算会抽走现金；融资环境预计总体平稳 | 短端不是系统性资金压力，但再融资结算日会放大短端利率和repo噪音 |

## 交易含义

- **基准判断：** 今日3M/6M招标若bid-to-cover维持2.7-2.9、间接投标人接近或高于50%、dealer take-down未显著上升，说明CPI前的防御仓位仍是“买短券、少拿中前端久期”。这对Bill/OIS和前端repo是稳定信号，但对2Y-5Y多头不是直接利好。
- **热CPI情景：** 2Y-3Y会比Bills更脆弱，曲线可能bear-flatten；26-week Bill若同期tail，会确认市场把不确定性压缩到3M以内。
- **温和CPI情景：** 若CPI低于0.70% MoM调查值且今日短券间接需求强，前端可从现金防御切换为2Y-5Y receiver/小幅加久期，10Y以上仍受本周再融资供给限制。

## 需要后续更新

1. 2026-05-11 13-week和26-week正式结果：high rate、investment rate、tail/stop-through、bid-to-cover、indirect/direct/dealer take-down、allotted at high。
2. 同日$58bn 3-year Note结果：若3Y偏弱而Bills稳，说明防御仓位仍停在现金端；若3Y也强，才是更广义的CPI前避险买债。
3. 2026-05-12 08:30 ET CPI：headline MoM相对0.70%调查值、核心服务和能源贡献，是决定是否从Bills防御切到2Y-5Y久期的触发点。

