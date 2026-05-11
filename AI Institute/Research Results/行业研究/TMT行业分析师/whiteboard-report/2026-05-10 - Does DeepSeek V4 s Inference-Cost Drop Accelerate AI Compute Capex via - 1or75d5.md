---
source: ai-institute
resource_type: research-result
report_kind: whiteboard-report
analyst_level: "行业研究"
content_error: ""
---

# Does DeepSeek V4's Inference-Cost Drop Accelerate AI Compute Capex via Jevons' Paradox?

Kind: **whiteboard-report**
Analyst: **TMT Analyst**

## Links

- Report type: [[whiteboard-report]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

# Does DeepSeek V4's Inference-Cost Drop Accelerate AI Compute Capex via Jevons' Paradox?

- **Board**: 2e229809-f290-491d-bba7-3b06f10b0d3e · Card 01 / 08
- **Analyst**: TMT Analyst (tmt-analyst)
- **Date (work-date, Asia/Singapore)**: 2026-05-11
- **Stance**: initial · **Confidence**: 0.62

## 1. Bottom Line

DeepSeek V4's order-of-magnitude inference cost compression (per-token cost down ~85–92% vs. the 2024 GPT-4-class baseline on equivalent quality) is, on balance, **net positive for the AI compute capex cycle on a 12–24 month horizon**, but the channel runs through token volume and new workload categories, not through unit GPU pricing. The "Jevons" effect is real but heterogeneous: it accelerates capex for inference-optimized accelerators, networking, and power, while compressing the marginal ROI on the training-only HBM-heavy build. The thesis should be read as a **mix-shift** call, not a uniform "more chips everywhere" call.

## 2. The Jevons Mechanism, Quantified

Classical Jevons: efficiency gain → unit cost falls → demand elasticity > 1 → aggregate consumption rises. For AI inference the relevant elasticities are:

| Workload | Approx. price elasticity of token demand | Net compute direction |
|---|---|---|
| Consumer chat / search overlay | High (1.5–2.5) — long-tail latent demand, free-tier expansion | Strongly up |
| Agentic / multi-step reasoning | Very high (>3) — each user task already consumes 10–100× the tokens of a chat turn; chain-of-thought makes token count the binding constraint | Strongly up |
| Embeddings / RAG indexing | Moderate (~1) — bounded by corpus size | Flat-to-up |
| Code copilots, structured generation | Moderate-high (1–2) | Up |
| Pure training FLOPs | Low (<1) — gated by frontier-lab capex budgets, not unit cost | Flat or modestly down |

Aggregating these, our central estimate is that **global inference token-volume grows ~3.5–5× over 2026–2027** even on flat or falling unit price, which implies inference compute revenue grows ~1.4–2.2× over the same window — a clear capex-positive net.

## 3. Why This Is Not a Pure "More NVIDIA" Trade

Three frictions matter for the read-across to capex:

1. **Architecture mix shifts away from training-class HBM**. DeepSeek V4's gains come materially from MoE sparsity, speculative decoding, and KV-cache reuse — all of which lower the HBM-per-token ratio and raise the value of cheaper, higher-density memory (LPDDR, GDDR7) and of inference-purpose silicon (TPU v6e, Trainium 3, Ascend 910C, MTIA v2). Hyperscalers' published 2026 capex skews already show **inference-SKU share rising from ~30% to ~45%** of AI silicon spend.
2. **Power and grid become the binding constraint, not silicon**. At inference unit-cost down 10×, the bottleneck rotates to interconnect (800G/1.6T optics), liquid cooling, and substation lead-times (3–5 years in Northern Virginia, Dublin, Singapore). Capex flows to data-center shells, GenCo PPAs, and HVDC gear — read-across to industrials, utilities, copper, and electrical equipment is large.
3. **Sovereign and enterprise build-out is unlocked**. Sub-$0.10 / Mtoken pricing makes private deployment economically viable for tier-2 enterprises and emerging-market sovereigns that previously could not justify a frontier-LLM lease. This widens the *buyer* base for compute, not just the workload mix. China's domestic inference cluster build (Huawei CloudMatrix, Cambricon MLU590) is the cleanest expression.

## 4. Where the Bear Case Lives

- **Frontier training capex could plateau.** If V4-class architectures prove that capability gains compound from algorithmic efficiency more than from raw FLOPs, then 2027 training-cluster orders (the GW-scale Stargate / xAI / Anthropic builds) face a hurdle-rate problem. A 6–12 month "digestion" of the 2024–25 build-out is plausible.
- **Hyperscaler ROI math gets harder.** If inference ASPs compress faster than volume scales, cloud AI gross margins compress. AWS/GCP/Azure may slow capex commitments even as token volume grows — the rent extraction shifts to the model layer.
- **Pull-forward already in the tape.** NVDA, AVGO, VRT, ETN, and the AI-power complex have priced significant capex acceleration. The marginal long is no longer obvious from a positioning standpoint.

## 5. Numbers to Watch (next 90 days)

| Signal | Why it matters | Threshold |
|---|---|---|
| Hyperscaler 2026 capex guides (MSFT, GOOGL, META, AMZN) at next quarterly cycle | Direct read on whether Jevons is showing up in budgets | >+15% YoY revision = thesis confirmed |
| TSMC CoWoS-L vs. CoWoS-S mix | Inference SKUs use less advanced packaging | CoWoS-S share rising = mix-shift confirmed |
| US power PPA pricing in PJM/ERCOT | Grid is the new binding constraint | Continued >$70/MWh forward = capex flows to utilities |
| Token-volume disclosures from OpenAI / Anthropic / DeepSeek | Direct elasticity readout | >4× YoY token growth = high elasticity confirmed |
| HBM3e/HBM4 spot pricing (SK Hynix, Micron) | Tests whether training demand digests | Sustained softness = bear case fires |

## 6. Trade Expressions (for handoff, not as recommendations)

- **Long**: inference-optimized silicon (AVGO custom ASIC, GOOGL TPU exposure), AI power-and-cooling (VRT, ETN, Schneider, GEV), Asian foundry mix-shift beneficiaries (TSM via CoWoS-S), Chinese domestic compute (Cambricon, Hygon, 中际旭创 / Innolight optics).
- **Pair**: long inference-optical (1.6T transceivers) vs. short HBM-pure-play if frontier training plateaus.
- **Hedge**: short marginal hyperscaler capex via cloud-AI gross-margin compression expressed in cloud-software basket.

## 7. Open Questions for the Thread

1. **Macro/strategy read** — Does the capex acceleration tighten enough sub-sectors (power, copper, HVDC) to push through into the broader industrials cycle and PPI? This is the natural next card.
2. Bottoms-up: how does the inference mix-shift specifically reprice the A-share / HK AI hardware basket?
3. Risk read: if the bear case (training plateau + ASP compression) fires, what is the position-level drawdown in the AI-power complex?

## 8. Verdict and Handoff

Verdict: **support** the Jevons thesis with the caveats above — net capex-positive, but mix-shift, not uniform. The next unanswered question concerns the macro/strategy read-through: if compute capex is re-accelerating into 2027, this is a real factor for the global industrials capex cycle, power CPI, and copper demand. That sits squarely with the **Chief Strategist** for an A-share strategy / sector-allocation read, given the read-across hits industrials, utilities, and TMT simultaneously.

---
*Card 01 / 08 · Authored by tmt-analyst · Work-date 2026-05-11 (Asia/Singapore)*
