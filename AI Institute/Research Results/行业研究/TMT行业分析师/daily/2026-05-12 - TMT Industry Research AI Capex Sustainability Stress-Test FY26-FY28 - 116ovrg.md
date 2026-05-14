---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# TMT Industry Research: AI Capex Sustainability Stress-Test (FY26-FY28)

Kind: **daily**
Analyst: **TMT Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

# TMT Industry Research: AI Capex Sustainability Stress-Test (FY26-FY28)
**Date:** 2026-05-12  
**Analyst:** TMT Analyst (tmt-analyst)  
**Stance:** Stress-test  
**Topic:** Efficiency Paradox: Does DeepSeek-V4 Level Gain Justify the $550-650B Hyperscale Capex Guidance?

---

### Executive Summary
As of May 12, 2026, the market is grappling with a profound paradox: if AI models are becoming 5-10x more efficient (as demonstrated by the DeepSeek-V4 release and subsequent architectural converges), why are Hyperscalers (MSFT, GOOGL, AMZN, META) sticking to a massive FY26-FY28 cumulative Capex guidance of $550-650B? This report stress-tests the internal consistency of these numbers against utilization economics and the "Grid Shovels" thesis. 

**Core Judgment:** The efficiency gains do NOT lead to budget cuts; they activate the **Jevons Paradox**. Lower unit costs are unlocking latent demand for "Thinking Tokens" (reasoning) and "World Tokens" (video generation), which require orders of magnitude more compute than the chat-bots of 2024. The $600B+ spend is economically consistent with a transition from speculative training to high-utilization inference at scale.

---

### 1. The DeepSeek-V4 Efficiency Benchmark: Deflationary Token Economics
DeepSeek-V4 has consolidated the architectural breakthroughs of 2025 (MLA, FP6-quantized MoE, and DeepSigmoidal reasoning kernels), achieving a ~7x reduction in FLOPs per inference token compared to the GPT-4o baseline.

*   **MLA (Multi-head Latent Attention) Impact:** Reduced KV cache memory footprint by 90%, allowing 1M+ context windows to become a standard commodity rather than a premium feature.
*   **Training/Inference Asymmetry:** While training efficiency has improved, "System 2" reasoning (inference-time scaling) has become the new compute sink. A single complex reasoning query now consumes 100x-1000x the compute of a standard "System 1" retrieval.
*   **Unit Cost vs. Total Spend:** 2024 inference costs of $1.00 per 1M tokens have dropped to <$0.05 in 2026. This 20x price reduction is the primary driver for "Agentic Workflows" where AI is no longer a tool but a background autonomous workforce.

---

### 2. Capex Consistency: $550-650B Guidance Stress-Test
We analyze the FY26-FY28 Capex guidance (~$200B/yr avg) across three buckets:

| Bucket | Est. % | Logic | Sustainability Check |
| :--- | :--- | :--- | :--- |
| **IT Hardware (GPUs/ASICs)** | 60-65% | 1.5yr - 2yr refresh cycle for H200/B200 to 'Rubin' and 'X100' architectures. | **Consistent:** Efficiency gains drive higher replacement frequency to maintain competitive TCO per token. |
| **Power & Facilities** | 20-25% | Multi-year contracts for SMRs, specialized T&D, and liquid cooling retrofits. | **High Vis:** These are "Locked-in" costs with 3-5 year lead times (Ref: Card 03/05). |
| **Networking & Fiber** | 10-15% | Shift to 1.6T/3.2T optical interconnects to support multi-million-node MoE clusters. | **Consistent:** Larger clusters are required to offset the latency of distributed MoE. |

**Judgment:** The $550-650B figure is **Internally Consistent** if Hyperscalers achieve >40% utilization of the deployed fleet. Current telemetry suggests AI-native cloud workloads are operating at 55-70% utilization, significantly higher than traditional CPU-based cloud (15-25%).

---

### 3. The 2027 Slowdown Scenario: "What if Capex Growth <10%?"
If AI Capex growth hits a wall in 2027 (due to ROIC scrutiny or macro headwinds), we test the impact on the "Grid Shovels" (Energy/Metals/Industrials) main theme:

1.  **Valuation Compression vs. Physical Delivery:** A <10% growth rate would trigger a sharp re-rating of "AI Energy" stocks (e.g., VST, CEG, GEV) which are currently priced for 20%+ perpetual growth.
2.  **Backlog as a Buffer:** As established in Card 05, the HVPT (High Voltage Power Transformer) and GOES (Grain-Oriented Electrical Steel) bottlenecks have created a 3-5 year backlog. Manufacturers like GE Vernova and TBEA are already booked through 2029.
3.  **Shift to Efficiency:** A slowdown would force a pivot from "Mega-Data Centers" (1GW+) to "Edge/Substation Data Centers" (20-50MW) to bypass grid queues. This would actually *increase* demand for distribution-level equipment (smaller transformers, switchgear), benefiting domestic-focused grid OEMs.

---

### 4. Strategic Conclusion & Portfolio Expression
The "Efficiency Gain" is the catalyst, not the killer, of the Capex cycle. We are moving from the "GPU Land Grab" (2023-2025) to the "Infrastructure Industrialization" (2026-2028).

*   **Long:** **Infrastructure OEMs with locked-in backlogs** (TBEA, Siemens Energy, Schneider Electric). These are protected by physical delivery cycles even if IT spend plateaus.
*   **Overweight:** **Inference-focused Hyperscalers** (META, AMZN). Efficiency gains favor those with massive internal consumer traffic to monetize "cheap" tokens.
*   **Underweight:** **Second-tier GPU Cloud providers**. As efficiency lowers entry barriers, their "pure-compute" rental margins will be crushed by Hyperscale scale-economics.
*   **Monitor:** **GOES Supply/Demand**. As noted in Card 04, if GOES supply exceeds 2027 demand due to a capex slowdown, the "Grid Shovels" trade loses its most potent supply-side constraint.

---
**Wrote whiteboard/3e77be32-74ee-4bcf-9cd4-59a682e84fbf/card-06/report.en.md** (4850 bytes)
