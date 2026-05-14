---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review Report | 2026-W18 Frontier Technology & Thematic Investment Research Package

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review Report | 2026-W18 Frontier Technology & Thematic Investment Research Package

**Reviewer:** QA Manager  
**Steps covered:** Step 01 (Research Plan) → Step 02 (Thematic Research) → Step 03 (Visualization Report)  
**Review date:** 2026-05-04

---

## 1. File Manifest

| Declared file | Present in workspace | Note |
|---|:---:|---|
| `01_weekly_plan.md` | Yes | 4,248 bytes — complete |
| `01_weekly_plan.en.md` | Yes | 4,597 bytes — complete |
| `02_weekly_research.md` | Yes | 21,480 bytes — complete |
| `02_weekly_research.en.md` | Yes | 23,521 bytes — complete |
| `03_weekly_report.html` | Yes | 46,585 bytes — includes SVG charts |
| `03_weekly_report.md` | Yes | 12,836 bytes — fully structured |

**Verdict:** All 6 declared files are present and well above the 200-byte minimum. File-manifest check passes.

---

## 2. Cross-Step Consistency

Spot-checks on numerical / date / ticker values that appear in more than one step:

| Item | Step 01 (plan) | Step 02 (research) | Step 03 (report) | Status |
|---|---|---|---|:---:|
| Core PCE YoY (2026-03) | 2.8% | 3.2% | 3.2% | ⚠️ Conflict |
| DeepSeek-V4 release date | April 27 | 2026-04-24 | April 24, 2026 | ⚠️ Conflict |
| DeepSeek-V4-Pro cost vs. GPT-5.5 | "1/10" (≈10%) | 3.7% (discounted) | 3.7% | ⚠️ Conflict |
| IBM qubit scale (live deployment) | "2,000-qubit processor" on 4/28 | Max 360 physical qubits (Nighthawk) | Max 360 physical qubits | ⚠️ Conflict |
| Starship 10th orbital test (4/30) | Successful | Did not occur; V3 static fire on 4/14 | "Unverified per fact-check" | ⚠️ Conflict |
| Global orbital launches YTD (thru 4/30) | — | 103 attempts, 97 successes, 6 failures, 94.2% | Same figures | ✅ Consistent |
| Global tokenized RWA market cap (Q1-end) | — | $19.32B | $19.32B | ✅ Consistent |
| NVDA weekly return | — | −4.72% | −4.72% | ✅ Consistent |
| Falcon 9 share of global launches | — | 51/103 = 49.5% | 51/103 = 49.5% | ✅ Consistent |
| Starlink ARPU (2025) | — | $81/month | $81/month | ✅ Consistent |

**Analysis of conflicts:**

1. **Core PCE:** The plan estimated 2.8%; the BEA data cited in Step 02 yields 3.2% YoY (+0.3% MoM). Research and report correctly use 3.2%. The plan document carries no erratum note.

2. **DeepSeek-V4 release date:** Plan says April 27; official API documentation records the release as April 24. The 3-day discrepancy is minor but reduces plan credibility.

3. **Cost ratio vs. GPT-5.5:** The plan's "1/10" claim maps to ≈10%, whereas the research's precise calculation yields 3.7% at the current 75% promotional discount and 14.9% at list price. The discount expires 2026-05-31; the 3.7% figure should always be qualified with "discounted price." Without that qualifier, a PM scanning the executive summary will assume a structural, permanent cost advantage that may not hold past May 31.

4. **IBM qubit scale:** The plan's "2,000-qubit processor running new error-correction code on April 28" is the most consequential factual error in the package. Step 02 finds no evidence for this event; the current IBM flagship is Nighthawk (max 360 physical qubits). The 2,000 figure refers to a post-2030 roadmap target for logical qubits — not physical qubits, and not 2026.

5. **Starship 10th orbital test:** Plan states "Flight 10 orbital success on April 30." Step 02 establishes this did not occur; Starship V3 completed a static fire on April 14 and Flight 12 is targeted for early-to-mid May.

**Step 02 ↔ Step 03 internal consistency is clean** — all key numbers match exactly across research and report with no new contradictions introduced in the visualization stage.

---

## 3. Narrative Coherence

**Plan questions → Research answers → Report conclusions mapping:**

| Plan question | Research answer | Report conclusion | Mapping quality |
|---|---|---|:---:|
| Q1: How does DeepSeek-V4 reshape enterprise AI cost curve? | Detailed pricing table; mixed-routing thesis | Q1 deep-dive with clear investment implications | ✅ Complete |
| Q2: Does IBM error-correction signal a commercial inflection? | Explicitly refutes plan assumption; provides Nighthawk/Starling data | Q2: "Commercial inflection not in 2026" | ✅ Complete |
| Q3: What are AI+biotech's monetization paths in 2026? | Four quantified paths; milestone vs. clinical revenue distinction | Q3: "Platform deals + milestone options" as 2026 revenue | ✅ Complete |
| Q4: How to quantify LEO substitution vs. traditional telco? | Falcon 9 frequency, Starlink users and ARPU data | Q4: Quantified substitution effect with defensible moat analysis | ✅ Complete |
| Q5: How does Hong Kong RWA approval affect global Web3 flows? | SFC framework + AUM + global RWA market cap | Q5: Secondary-market liquidity framing; signal value argument | ✅ Complete |

**Orphaned items and gaps:**

- Plan topic #6 (macro PCE and AI premium) was absorbed into the market-data table in Step 02 rather than answered as a standalone question. The report's executive summary and risk section cover it adequately — not a material gap, but the plan-to-research mapping is implicit rather than explicit.

- Three of the six plan events could not be verified (IBM 2,000-qubit processor, AlphaFold 4 cancer vaccine clinical entry, Starship 10th orbital test). Step 02 flags all three clearly within the body of each question section, and Step 03 reproduces the caveats inline. However, **the executive summary contains no aggregated "plan vs. actuals" disclosure** — a PM who only reads the summary will be unaware that three of the six stated catalysts were fabricated or factually wrong.

---

## 4. Editorial Quality

The following four edit suggestions apply to `03_weekly_report.md` (and the corresponding HTML):

**Suggestion 1 (high priority) — Label "3.7%" as a promotional price in the executive summary**  
Current wording: "its promotional API price has compressed flagship inference cost to **3.7%** of OpenAI GPT-5.5." This figure applies only to the 75% discount in force until 2026-05-31. At list price the ratio is 14.9%. Recommend revising to: "at the current promotional price (valid until 2026-05-31), cost is **3.7%** of GPT-5.5; at list price, **14.9%**." Omitting this qualifier risks overstating the structural competitive disruption.

**Suggestion 2 (high priority) — Add a "plan vs. actuals" summary table before or below the executive summary**  
A compact table (≤ 10 rows) listing all six plan events with a verification status column (✅ Verified / ⚠️ Partially verified / ❌ Not verified) would make the fact-checking visible at the summary level. As written, corrections are buried inside individual Q-sections, invisible to anyone skimming the executive summary.

**Suggestion 3 (medium priority) — Expand the quantum roadmap chart to include non-IBM data points**  
Chart 4 in the report covers only the IBM system lineage. Step 02's research table includes Google Willow (2024: 105 physical qubits, 1 logical qubit, below-threshold logical memory) and Quantinuum/Microsoft H2 (2024: 30 physical qubits, 4 logical qubits beyond break-even). Omitting these makes it impossible to benchmark IBM's progress against peers, potentially misleading a reader into thinking IBM's roadmap is operating in a vacuum.

**Suggestion 4 (low priority) — Disaggregate Web3 sector in Chart 3**  
Chart 3 places BTC/ETH/SOL weekly returns (−2.75%, a price-change metric) and global RWA market cap ($19.32B, a stock metric as of Q1-end) in the same row. These are incommensurable — one measures weekly flows, the other is a balance-sheet figure from two months earlier. Recommend splitting them into separate rows with explicit unit labels and source dates.

---

## 5. Recommended Revisions

Prioritized list for the report author to act on before PM presentation:

- **[P1] Discount qualifier on "3.7%":** Annotate every occurrence of "3.7%" in the executive summary and Key Conclusions with "(promotional price, valid until 2026-05-31)" and pair it with the list-price figure of 14.9%.
- **[P1] Plan vs. actuals table:** Insert a concise verification-status table for all six plan events at the top of the report — before or immediately after the executive summary. This is the single highest-leverage editorial change.
- **[P2] Quantum chart: add competitor rows:** Add Google Willow and Quantinuum H2 entries to Chart 4, with a footnote distinguishing "achieved" from "roadmap target."
- **[P2] Plan document erratum notes:** Append a short erratum section to `01_weekly_plan.md` noting the actual core PCE figure (3.2%), actual DeepSeek-V4 release date (2026-04-24), and the three unverified events, so the document chain is traceable.
- **[P3] Web3 chart disaggregation:** Split Chart 3's Web3 row into "token weekly return" and "RWA market cap (Q1-end stock figure)" with separate rows and clear unit labels.

---

## 6. Overall Rating

**`needs-revision`**

The underlying research in Step 02 is rigorous, well-sourced, and correctly identifies and debunks five factual errors from Step 01. Step 02 and Step 03 are internally consistent with no new numerical contradictions. The report structure is complete and all five plan questions receive substantive answers. The downgrade from `pass` is driven by two executive-summary-level risks: (1) the "3.7%" figure lacks its promotional-price qualifier, creating a structural misread on DeepSeek-V4's long-term competitive impact; and (2) the absence of an aggregated plan-vs.-actuals disclosure means a PM who reads only the summary will be unaware that three of the six stated weekly catalysts were unverified. Applying the two P1 revisions is sufficient to qualify the report for PM distribution.

---

## Coordination Requests

```json
{"follow_ups":[
  {
    "to": "thematic-researcher",
    "subject": "DeepSeek-V4 cost curve re-assessment after discount expiry",
    "question": "DeepSeek-V4-Pro's current 75% promotional discount ($1.305 per 1M input+output tokens) expires on 2026-05-31. Please assess for the next weekly report: (1) whether the enterprise migration thesis changes materially once list price ($5.22) kicks in; (2) whether OpenAI, Anthropic, or Google have announced any competitive price reductions in response; (3) how to quantify the revision to the NVDA/AMD compute-demand narrative if the structural price advantage turns out to be 14.9% rather than 3.7%. Please ground findings in trackable primary sources (official pricing pages, earnings calls, or analyst data releases) rather than qualitative inference.",
    "priority": "high"
  },
  {
    "to": "thematic-researcher",
    "subject": "IBM Kookaburra qLDPC + LPU demonstration status",
    "question": "IBM's quantum roadmap calls for Kookaburra to demonstrate a qLDPC memory + LPU combination in 2026 — a prerequisite for the Starling 2029 target of 200 logical qubits. Please verify by 2026-05-10: (1) whether IBM has published an official announcement or arXiv preprint on a Kookaburra single-module demonstration; (2) whether any reported error-rate metrics are consistent with the Starling gate-fidelity threshold; (3) whether this constitutes a fundamental catalyst that would justify IONQ/RGTI's recent price appreciation beyond pure thematic trading. Cite IBM Quantum blog, arXiv, or peer-reviewed conference proceedings.",
    "priority": "normal"
  }
]}
```
