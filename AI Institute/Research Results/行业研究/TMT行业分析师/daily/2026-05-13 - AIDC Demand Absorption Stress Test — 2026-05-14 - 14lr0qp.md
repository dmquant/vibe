---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# AIDC Demand Absorption Stress Test — 2026-05-14

Kind: **daily**
Analyst: **TMT Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

# AIDC Demand Absorption Stress Test — 2026-05-14

- Card: 02 / 08 | Analyst: tmt-analyst (TMT Analyst)
- Work-date: 2026-05-14 (Asia/Singapore)
- Stance: stress-test
- Question: Can hyperscaler capex and AI inference demand absorb ~2.2 million locally led AIDC standard racks and lift RMB450 billion of no-anchor projects to 55%–60% occupancy by 2027?

As of 2026-05-14, I **stress-test and mostly reject** the assumption that the no-anchor local AIDC portfolio can reach 55%–60% occupancy by end-2027 as a base case. China-level AI demand is real: public data show rapid growth in national compute capacity, AI IaaS revenue, consumer AI usage, and hyperscaler AI capex. The problem is **allocation and fit**. Alibaba, ByteDance, Tencent, and Baidu are buying AI-ready power, chips, network topology, liquid cooling, and operating reliability; they are not buying undifferentiated remote racks simply because local UIVs have built them. The likely 2027 outcome is a barbell: anchor-backed national-team and top-tier AIDC assets approach or exceed the 55%–60% threshold, while the RMB450 billion no-anchor local tail stalls closer to 45%–52% occupancy unless rents fall further or local governments subsidize demand.

## 1. Position Versus Card 01

Card 01 identified RMB680 billion of local-led AIDC capex, ~2.2 million standard racks, and roughly RMB450 billion of "build first, lease later" no-anchor projects. I support the framing that this is a **structural digital-LGFV risk rather than a national systemic crisis**, but I tighten the demand-side conclusion:

- The **national demand pool is large enough** to keep China AIDC investment structurally relevant. MIIT data show nationwide in-use compute-center standard racks exceeded 8.8 million at end-2024, while public digital-infrastructure reporting put the total around 12.5 million standard racks by September 2025 with intelligent compute at 1,053 EFLOPS FP16 and average PUE near 1.42.[^miit2024][^digitalchina2025]
- The **local no-anchor absorption pool is not large enough at current rent and quality assumptions**. Hyperscaler procurement is concentrated in self-built, carrier-backed, central-SOE, and proven third-party campuses, not in county-level or weak-province parks without chips, liquid cooling, low-latency network fabric, or operating track record.
- Therefore, I would lower Card 01's base-case local AIDC occupancy assumption from ~60% by end-2027 to **48%–52% for the no-anchor subset**, with 55%–60% treated as an upside case requiring both rent concessions and a favorable chip/power delivery cycle.

## 2. Demand Evidence: Strong, But Not Fully Transferable

| Buyer / demand pool | Evidence as of 2026-05-14 | Read-through for local no-anchor AIDC |
|---|---:|---|
| Alibaba | Announced at least RMB380 billion over three years for AI and cloud infrastructure; separately disclosed ~RMB120 billion capex deployed over the past four quarters for AI and cloud, with Alibaba Cloud revenue up 34% YoY in the September 2025 quarter and AI-related product revenue still growing triple digit.[^alibaba380][^alibabaq2] | Positive for national AI-ready supply, but Alibaba has strong preference for its own cloud architecture and strategic campuses. Only a minority should be assumed to flow into no-anchor local UIV parks. |
| ByteDance | Reuters-sourced reports put 2025 capex above RMB150 billion, mostly AI-related, with about half abroad; later FT/Reuters-sourced reporting indicated preliminary 2026 AI-infrastructure capex of RMB160 billion.[^bytedance2025][^bytedance2026] | Largest marginal demand source, but much of the spend is chips, overseas cloud access, networking, and high-density deployments. ByteDance can absorb selected campuses, not the long tail. |
| Tencent | 1Q2026 capex was RMB31.9 billion, up 16% YoY; Business Services revenue rose 20% YoY on cloud demand including AI services and a more favorable pricing environment. Tencent also said 2025 new-AI-product costs and expenses were RMB18 billion and expected to more than double in 2026.[^tencent1q26][^tencentfy25] | Helps core AI-ready data centers and carrier/cloud partners. Tencent's procurement bar is high; it does not solve county-level vacancy. |
| Baidu | FY2025 AI Cloud Infra revenue was RMB19.8 billion, up 34% YoY; subscription-based AI accelerator infrastructure revenue rose 143% YoY in 4Q2025. ERNIE Assistant MAU reached 202 million in December 2025.[^baidu2025] | Real demand, but smaller absolute capex pool than Alibaba/ByteDance/Tencent. Baidu is more likely to use integrated cloud/accelerator pools than commodity racks. |
| AI application demand | CNNIC reported 602 million generative-AI users by December 2025, up 141.7% from end-2024. QuestMobile/NBD reported 446 million China AI-app users by March 2026, with Doubao at 345 million MAU, Qwen at 166 million, and DeepSeek at 127 million.[^cnnic2025][^questmobile2026] | Supports inference growth, but consumer MAU does not translate one-for-one into rack leasing. Model efficiency gains and API price competition reduce revenue per token. |
| AI IaaS market | IDC tracker coverage cited China AI IaaS at RMB19.87 billion in 1H2025, up 122.4% YoY; GenAI IaaS was RMB16.68 billion, up 219.3% YoY, and compute-resource pricing was described as broadly stable with slight fluctuations.[^idcaiiaas] | Confirms demand, but the revenue base is still small relative to a RMB450 billion unanchored capex stock. |
| Real estate / data-center market | CBRE expects Tencent, Alibaba, and Baidu combined 2025 capex to exceed RMB230 billion, 1.5x 2024; it also warns APAC can face shortages of AI-ready data centers even while total supply doubles.[^cbrechina][^cbreapac] | The bottleneck is AI-ready capacity, not generic space. This supports a quality premium and a long-tail discount. |

## 3. Threshold Math

Card 01's local-led supply shock implies:

| Item | Estimate |
|---|---:|
| Local-led AIDC pipeline | ~2.2 million standard racks |
| Local-led capex | ~RMB680 billion |
| Projects with anchor tenants | ~31% |
| No-anchor capex | ~RMB450 billion |
| Implied no-anchor standard racks | ~1.46 million |

There are two ways to read the 55%–60% threshold:

1. **Whole local portfolio threshold**: 55%–60% occupancy on 2.2 million standard racks requires 1.21 million–1.32 million occupied racks. If 31% is genuinely anchored, roughly 0.68 million racks are pre-committed, leaving ~0.53 million–0.64 million incremental racks to be absorbed by 2027. This is hard but possible if the anchored contracts are real and the unanchored projects cut rents.
2. **No-anchor subset threshold**: 55%–60% occupancy on the RMB450 billion no-anchor subset implies ~0.80 million–0.88 million occupied racks from a weak starting point. This is the critical stress point. It requires the local tail to win a large share of 2026–2027 hyperscaler incremental demand despite inferior tenant certainty, network location, chip availability, and operating history.

My base case is that **the whole local portfolio can approach 55% only because anchor-backed assets pull up the average**, but the no-anchor subset does not reach the threshold without policy support.

## 4. Rent And Cash-Flow Stress

For the no-anchor subset, the inferred capex is about RMB308,000 per standard rack (RMB450 billion / 1.46 million racks). The financial threshold is not occupancy alone; it is occupancy multiplied by rent.

| Scenario | End-2027 occupancy | Monthly rent per standard rack | Annual revenue | EBITDA at 43%–47% margin | Interest burden proxy | Judgment |
|---|---:|---:|---:|---:|---:|---|
| Upside absorption | 60% | RMB3,100–3,300 | RMB32.6–34.7 billion | RMB14.0–16.3 billion | RMB9.5–11.5 billion | Barely serviceable before principal; requires AI-ready quality and limited rent cuts. |
| Base case | 48%–52% | RMB2,600–3,000 | RMB21.8–27.3 billion | RMB9.4–12.8 billion | RMB9.5–11.5 billion | Interest cover thin; principal refinancing depends on implicit support. |
| Left tail | 40%–45% | RMB2,100–2,500 | RMB14.7–19.7 billion | RMB6.3–9.3 billion | RMB9.5–11.5 billion | Cash-flow gap; debt extension or restructuring likely. |

The rent assumption is where the hidden fragility sits. Global and APAC evidence says AI-ready capacity can command pricing power when power and high-density fit are scarce.[^cbretrends][^cbreapac] But that is not the same as pricing power for every local project. A county-level park without GPU availability, liquid cooling acceptance, low-latency routes to eastern workloads, and hyperscaler operating certification will clear by price, not by scarcity.

## 5. Can BAT, ByteDance, And AI Labs Fill The Gap?

**Short answer: only for the top half of the local AIDC curve.**

The top-tier local supply that can get to 55%–60% by 2027 has three features: power quota already secured, liquid-cooling-ready design, and a credible operator such as a carrier, central SOE, GDS/Chindata-like platform, or a hyperscaler JV. These projects can capture ByteDance inference, Alibaba Cloud training/inference expansion, Tencent Yuanbao/agent workloads, and Baidu AI Cloud accelerator subscriptions.

The weak tail has a different problem. It is trying to lease standard-rack financial capacity into a market where the buyer is purchasing **tokens per watt, latency, chip stack, interconnect, and operational SLA**. The rent is becoming a derivative of compute efficiency, not a simple real-estate lease. This means:

- AI-app MAU growth supports inference demand, but model compression and lower API prices reduce the amount of revenue that can be paid to landlords.
- Chip access and domestic accelerator fragmentation create project-specific compatibility risks. A rack with power is not necessarily a rack that can host the tenant's required GPU/NPU cluster.
- Hyperscalers increasingly use procurement leverage: they can ask for two-year ramp schedules, higher power density, and lower effective rent because local governments are competing for the same logos.
- "Computing voucher" policies can fill some short-term utilization, but subsidized SME demand is too fragmented and price-sensitive to underwrite RMB450 billion of no-anchor capex.

## 6. Revised 2027 Occupancy Distribution

| Asset type | End-2027 occupancy estimate | Rent trend | Credit implication |
|---|---:|---|---|
| National-team / carrier / central-SOE AI-ready campuses | 65%–78% | Stable to modestly higher per kW | Financeable; likely REIT or platform-acquisition candidates. |
| Local projects with signed hyperscaler or carrier anchors | 58%–68% | Stable, with ramp concessions | Manageable, provided anchor contracts convert into actual power-on usage. |
| Local no-anchor projects in strong nodes | 50%–58% | Down 5%–12% from initial underwriting | Survivable if refinancing remains open. |
| County-level or weak-province no-anchor tail | 35%–48% | Down 15%–25%; more free-rent / fit-out concessions | Main digital-LGFV stress pocket for 2027–2028. |

The weighted outcome for the RMB450 billion no-anchor subset is **48%–52% occupancy by end-2027**, not 55%–60%. A 55%–60% print is possible only if three conditions coincide: ByteDance's 2026 procurement lands smoothly despite export-control uncertainty, Alibaba and Tencent keep capex at or above the recent run rate, and local parks accept rent cuts large enough to make remote inference economical.

## 7. Investment And Macro Implications

- **For local debt**: Demand-side failure is more likely to appear as DSCR weakness and technical extensions than as immediate hard default. The first red flags should be delayed power-on milestones, extended free-rent periods, and conversion of "framework agreements" into smaller actual orders.
- **For TMT equities**: Prefer operators with proven high-density AIDC delivery, power access, liquid-cooling capability, and anchor contracts. Avoid treating all "AI data center" capex as equal.
- **For policy**: The central policy tool that matters is not simply more rack construction. It is compute scheduling, unified capacity certification, chip-stack standardization, and demand aggregation for government/industrial inference workloads.
- **For the board thesis**: The digital-LGFV risk is real because the no-anchor portfolio needs demand that is both large and specifically compatible. China has the first; the weak local tail lacks the second.

## 8. Handoff

Recommended next analyst: **credit-analyst**. The next question should move from TMT demand to bond-level credit transmission: which local UIV issuers have AIDC capex, low anchor-tenant disclosure, refinancing concentration in 2027–2028, and exposure to weak local fiscal capacity?

## Sources

[^miit2024]: MIIT, "2024 digital industry operating situation", published 2025-03-17: https://www.miit.gov.cn/jgsj/yxj/xxfb/art/2025/art_49031440236d4650823b131173a1794d.html
[^digitalchina2025]: Digital China / People's Posts and Telecommunications News, "Compute infrastructure high-quality development", published 2025-12-24: https://www.digitalchina.gov.cn/2025/xwzx/szkx/202512/t20251224_5261132.htm
[^alibaba380]: Alibaba Group, "Alibaba to Invest RMB380 billion in AI and Cloud Infrastructure Over Next Three Years", published 2025-02-24: https://www.alibabagroup.com/en-US/document-1830678592242057216
[^alibabaq2]: Alibaba Group, "Alibaba's Investments in AI and Comprehensive Consumption Underpin Solid Q2 Results", published 2025-11-25: https://www.alibabagroup.com/en-US/document-1930116148192346112
[^bytedance2025]: Reuters via TradingView, "ByteDance plans $20 billion capex in 2025, mostly on AI, sources say", published 2025-01-23: https://www.tradingview.com/news/reuters.com%2C2025%3Anewsml_L1N3ND085%3A0-bytedance-plans-20-billion-capex-in-2025-mostly-on-ai-sources-say/
[^bytedance2026]: Reuters via The Star, "ByteDance plans to spend $23 billion towards AI infrastructure in 2026, FT reports", published 2025-12-23: https://www.thestar.com.my/tech/tech-news/2025/12/23/bytedance-plans-to-spend-23-billion-towards-ai-infrastructure-in-2026-ft-reports
[^tencent1q26]: Tencent / PRNewswire, "Tencent Announces 2026 First Quarter Results", published 2026-05-13: https://en.prnasia.com/releases/apac/tencent-announces-2026-first-quarter-results-532860.shtml
[^tencentfy25]: Tencent, FY2025 / 4Q2025 results presentation, published 2026-03-18: https://static.www.tencent.com/uploads/2026/03/18/2804dbdae364ca25b82d21bc8304f1d3.pdf
[^baidu2025]: Baidu, "Baidu Announces Fourth Quarter and Fiscal Year 2025 Results", published 2026-02-26: https://ir.baidu.com/news-releases/news-release-details/baidu-announces-fourth-quarter-and-fiscal-year-2025-results/
[^cnnic2025]: China government portal / CNNIC, "China's internet user base hits 1.125 billion as AI adoption surges", published 2026-02-05: https://english.www.gov.cn/archive/statistics/202602/05/content_WS698442cac6d00ca5f9a08edc.html
[^questmobile2026]: National Business Daily / QuestMobile, "2026 Q1 AI application value list", published 2026-04-21: https://www.nbd.com.cn/articles/2026-04-21/4350446.html
[^idcaiiaas]: IDC tracker coverage via Webull/Zhitong, "China's AI IaaS market reached RMB19.87 billion in 1H2025", published 2025-11: https://www.webull.com/news/13717464966303744
[^cbrechina]: CBRE, "Navigating Cycles: The Rationale for Data Centre Investment", 2025: https://www.cbre.com/insights/reports/navigating-cycles-the-rationale-for-data-centre-investment
[^cbreapac]: CBRE China, "AI Boom Drives Data Centre Demand Amid Supply and Power Challenges", published 2025-05-29: https://www.cbre.com.cn/en/press-releases/ai-boom-drives-data-centre-demand-amid-supply-and-power-challenges-cbre
[^cbretrends]: CBRE, "Global Data Center Trends 2025", published 2025: https://www.cbre.com/insights/reports/global-data-center-trends-2025

---

*Author: tmt-analyst | Submitted: 2026-05-14 | Card: 02/08 | Shared board: 2eecd351-1775-46d8-87af-9c13a6ad9e96*
