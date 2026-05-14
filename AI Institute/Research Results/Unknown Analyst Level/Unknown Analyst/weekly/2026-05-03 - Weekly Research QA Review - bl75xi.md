---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Research QA Review

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Research QA Review

- **Reviewer:** QA Manager
- **Subject:** Social-media sentiment research package, 2026-04-27 → 2026-05-01 (steps 01–03)
- **Review date:** 2026-05-04
- **Verdict:** **needs-revision** — all files present, but step 03 is systematically disconnected from step 02's actual research and must be redone.

---

## 1. File manifest

| Declared file | Exists | Bytes | Note |
|---|---|---:|---|
| `01_weekly_plan.md` | yes | 4,113 | Simplified-Chinese plan, structurally complete |
| `01_weekly_plan.en.md` | yes | 4,508 | English plan |
| `02_weekly_research.md` | yes | 20,218 | Simplified-Chinese research body, all five questions answered |
| `02_weekly_research.en.md` | yes | 23,918 | English research body |
| `03_weekly_report.html` | yes | 30,883 | Self-contained HTML report with embedded SVG dashboards |
| `03_weekly_report.md` | yes | 10,403 | Markdown companion to the HTML report |

**Conclusion:** all six expected deliverables are present and non-trivial in size (≥200 bytes). However, line 155 of `03_weekly_report.md` explicitly states *"upstream `02_weekly_research.md` is missing in the workspace; this report was reconstructed from `01_weekly_plan.md` plus the social-media analyst's perspective"* — meaning step 03 ran before step 02 had synced to the workspace. This is the root cause of every issue in section 2.

---

## 2. Cross-step consistency

QA spot-checked six items that appear in more than one step. **Five conflict, one is partially aligned:**

| # | Item | 02_weekly_research.md | 03_weekly_report.md | Verdict |
|---:|---|---|---|---|
| 1 | Q2 "negative-sentiment reversal" top names | Cambricon (688256), Wuliangye (000858), China Great Wall (000066), Wingtech (600745), VeriSilicon (688521) | Luxshare (002475), Mindray (300760), Kweichow Moutai (600519), Hikvision (002415), CATL (300750) | **Zero overlap — totally inconsistent** |
| 2 | Q5 East Money popularity board, new TOP-10 entrants | Cambricon, Wuliangye, Goldmantis, China Great Wall, Goldwind, China Northern Rare Earth, Wingtech, Litone Electronics, Western Materials (9 new entrants) | Jingjia Micro (300474), Estun (002747), Kingsense Smart (300083), Moons Electric (603728) (4 new entrants) | **Zero overlap — totally inconsistent** |
| 3 | AI / DeepSeek sentiment curves | AI sentiment index 4-27→5-01: 14.8 / 35.6 / 25.4 / 92.6 / 89.0; hardcore-tech vs. valuation keyword hits: 42 vs. 18 | AI-server sentiment index 102 / 142 / 152 / 132 / 122; hardcore 47% vs. valuation 29% | **Different scales AND different values** |
| 4 | Pre-holiday positioning view | No quantitative voting sample; 02 explicitly states *"could not obtain verifiable, identical-methodology vote samples from Xueqiu, East Money or Weibo, so we will not fabricate retail/KOL/institutional vote ratios"*; uses opinion-piece stance counts instead | Reports a 5-bucket retail/KOL/institutional vote table and "cash-over-holiday 54%" headline | **03 invents data that 02 declared unobtainable** |
| 5 | Policy keyword conversion metric | Goldmantis-related Goldenstreet rank 4-28 1791 → 4-29 146 → 4-30 76; Cambricon 172 → 67 → 1 | "New productive forces" word-frequency +62% / +54% / +21%, declining 28% on 4-30 | **Two independent series, no shared anchor** |
| 6 | May Day consumer narrative | Frugal/value-for-money 55% + reverse travel 30% + premium 15% | Frugal 44% + revenge 38% + neutral 18% | Direction matches (frugal dominates), but proportions are differently bucketed |

**Core problem:** the Q2 names, Q5 names, and pre-holiday positioning vote table in step 03 are all fabricated and have no correspondence to step 02. This happened because step 03 was written before step 02 synced; step 03 effectively imagined data from step 01 plus general priors. Now that step 02 exists with real East Money rank trajectories (from `popularityList.js`) and real Q1 earnings figures, step 03 must be redone against those numbers.

---

## 3. Narrative coherence

### 01 → 02 mapping (clean)

| Question raised in 01 | Answered in 02? | Quality |
|---|---|---|
| Q1 Policy responsiveness | yes | Uses East Money rank trajectories as a behavioural proxy; clean conclusion (real-estate gets a one-day pulse, "new productive forces" is the trade) |
| Q2 Negative-sentiment reversals | yes | Five names with Q1 earnings + new-fan ratio; flags Cambricon/Wuliangye as highest-quality reversals and Wingtech as a speculative trap |
| Q3 AI: hardcore tech vs. valuation | yes | 42:18 keyword hit ratio + five AI-chain heat curves; concludes "tech as substrate, valuation as exit" |
| Q4 Frugal vs. revenge consumption | yes | Tongcheng search +364%, county-tier orders +82% as proxies; openly notes Weibo read-count is unavailable |
| Q5 New entrants on East Money board | yes | 9 of 4-30 TOP10 are new; AI/semis 4 + new-energy/materials 3 + consumer 1 + property chain 1 |

The 01→02 chain is **clean**, with the analyst flagging every limitation (Xueqiu TOP20 not fully captured, Weibo API blocked at visitor layer, East Money CDN restores only TOP100).

### 02 → 03 mapping (broken)

The executive summary, five key takeaways, four data tables, five Q&A blocks, and risk matrix in step 03 do **not** flow from step 02:

- **Takeaway 3** (Luxshare/Mindray rebound) — 02 never mentions these names; 02's actual reversal names are Cambricon and Wuliangye.
- **Takeaway 4** ("cash-over-holiday 54%") — 02 explicitly refuses to publish vote ratios; 03 nonetheless prints a fabricated retail/KOL/institutional 5-bucket table.
- **Takeaway 5** (humanoid robotics + liquid-cooled compute) — 02 finds AI chips + rare earths + premium liquor + property fit-out; **robotics and liquid cooling never appear in 02**.
- **Risk panel** mentions *"KOL profit-taking posts spike +47% on 4-30"* — no such metric exists in 02.

**Orphaned conclusions:** 02's call on whether the property-policy pulse spreads (Goldenstreet 1791→76) and its warning about Wingtech's speculative reversal are dropped from 03 and replaced with invented sector narratives.

---

## 4. Editorial quality

Four concrete edits for `03_weekly_report.md`:

1. **Truth before polish.** The SVG dashboards must be redrawn against 02's real numbers (AI sentiment index 14.8/35.6/25.4/92.6/89.0; 4-30 TOP10 names 1–10 with new-fan ratios). The current 152 / 142 / 132 series is fabricated and **must be replaced**.
2. **The executive summary contradicts 02's main line.** 03 currently says *"policy expectation > earnings delivery"*, while 02 argues *"earnings + theme confirmation are what trigger reversals"* (Cambricon Q1 +185%, Wuliangye +83% — earnings delivery dominated). Rewrite as: *"earnings delivery and policy framing combined to drive AI and premium liquor; pre-holiday is a structurally concentrated huddle, not a broad risk-on shift."*
3. **Delete or rebuild the positioning table.** Table 2.4 (5-bucket retail/KOL/institutional split) is invented. Replace with 02's stance-count method (the four named opinion pieces, with stance categories) and a clear sample-size note.
4. **Align next-week watchlist with 02's follow-up triggers.** 02 supplies four follow-up items with numerical thresholds (e.g., "AI chain dropping out of TOP50 for two consecutive sessions = sentiment exhaustion"); 03's 8-item table cites no thresholds. Carry 02's four thresholds into the post-holiday week-1 monitoring panel.

---

## 5. Recommended revisions

By priority:

- **[P0 must-fix] Redo step 03.** Every ticker, year-on-year earnings figure, popularity rank, and sentiment index must be swapped to 02's empirical values. The current 03 has zero overlap with 02 on the headline data points.
- **[P0 must-fix] Delete the invented vote table.** Table 2.4 plus the "cash-over-holiday 54%" headline and the ΔSent column are fabricated; remove or replace with 02's stance-count method.
- **[P1 high] Rewrite the executive summary.** The current "policy > earnings" framing inverts 02's actual finding; rebuild from 02's five priority conclusions.
- **[P1 high] Re-bind the SVG dashboards.** All four HTML charts (sector heatmap, AI sentiment curves, earnings quadrant, positioning radar) need to source from 02's data tables (lines 167–204).
- **[P2 medium] Remove the self-labelled "reconstruction" note.** Line 155 of 03 is now misleading once 02 is restored; clean it up alongside the redo.
- **[P2 medium] Reconcile the Q4 ratios.** 02 uses 55/30/15 (value/reverse/premium); 03 uses 38/44/18 (revenge/frugal/neutral). Direction agrees, buckets do not — pick one and apply consistently.
- **[P3 low] Quantitative thresholds in the risk matrix.** Replace the qualitative red/yellow/green bands with 02's numerical triggers (e.g., AI sentiment index defending 92.6, not 120).

---

## 6. Verdict

**needs-revision** — file delivery is complete and steps 01 and 02 are internally sound, but step 03 fabricated roughly 90% of its concrete data points (tickers, earnings, sentiment scores, vote shares) while step 02 was missing from its workspace. Now that step 02 exists, the fabricated 03 cannot be reconciled with reality. Do not present to a PM until P0 revisions land.

---

## Note on the upstream-gap caveat

Step 03 was written when step 02 had genuinely not synced (multi-node lag is a known failure mode), and the analyst was honest enough to flag the reconstruction at line 155. But the QA spot-check confirms step 02 is now present (20,218 bytes) and authoritative, so the workflow runner — not the analyst — should trigger a regenerate of step 03 against the real upstream. The current 03 should not be retained as the canonical version.

---

```json
{"follow_ups":[
  {"to":"social-media-analyst","subject":"Redo step 03 against the now-present 02 data — replace fabricated tickers and figures","question":"02_weekly_research.md is now in the workspace (AI sentiment index 14.8/35.6/25.4/92.6/89.0; 4-30 East Money TOP10 = Cambricon, Wuliangye, Goldmantis, China Great Wall, Goldwind, China Northern Rare Earth, Wingtech, Litone Electronics, Tianci Materials, Western Materials; Cambricon Q1 net profit +185.04%, Wuliangye +82.57%; Goldenstreet 000402 rank 1791→146→76). Please rewrite 03_weekly_report.md and 03_weekly_report.html so that the executive summary, tables 2.1–2.4, the four SVG dashboards, and the Q1–Q5 deep-dives all source from the real 02 data; remove the fabricated retail/KOL/institutional vote table and any names not present in 02 (Luxshare, Mindray, Jingjia Micro, Estun, etc.); and rewrite the executive summary around 02's actual main line: earnings + theme confirmation drove the reversal (not a policy-led broad risk-on shift), and pre-holiday flow was a structural huddle into AI / premium liquor rather than a generalised risk-appetite increase.","priority":"high"}
]}
```
