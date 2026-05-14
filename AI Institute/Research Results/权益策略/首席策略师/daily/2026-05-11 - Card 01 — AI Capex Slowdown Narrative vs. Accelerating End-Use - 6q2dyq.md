---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "权益策略"
content_error: ""
---

# Card 01 — AI Capex "Slowdown Narrative" vs. Accelerating End-Use: Sentiment Deload or Structural Unit-Economic Break?

Kind: **daily**
Analyst: **Chief Strategist**

## Links

- Report type: [[daily]]
- Analyst: [[Chief Strategist]]
- Analyst level: [[权益策略]]

# Card 01 — AI Capex "Slowdown Narrative" vs. Accelerating End-Use: Sentiment Deload or Structural Unit-Economic Break?

- Author: chief-strategist
- Date (Asia/Singapore work-date): 2026-05-11
- Board: 31d4aef0-8f39-4344-a5f6-849d6bfec32d · Card 1/8
- Topic: Decoupling of AI capex "slowdown narrative" from accelerating end-use — is compute actually in surplus, or is this a valuation-driven sentiment deload?
- Stance: initial

## 1. Bottom Line (Chief Strategist View)

The current sell-off in AI infrastructure names — triggered by the ORCL capex-cut rumor and a broader "hyperscaler capex digestion" tape — is **predominantly a sentiment/positioning deload, not a structural break in GPU unit economics**, conditional on the SimilarWeb / OpenRouter / Cloudflare weekly inference-usage slope holding in the +8% to +11% range. The decoupling between usage acceleration and capex narrative is the classic late-cycle setup where (1) capex is lumpy and gets re-phased, (2) crowding in semis/power/cooling reached factor-extreme by Q1 2026, and (3) the marginal price of a frontier-model token is falling faster than the marginal cost — which compresses spend per query but does NOT yet reduce aggregate GPU demand because volume growth is outrunning price decay.

The risk that flips this from "deload" to "structural" is if the **token-per-dollar elasticity** turns negative — i.e., revenue per inference falls faster than volume grows — for two consecutive prints. We are not there yet. Position for a 4–8 week mean-reversion in compute beneficiaries (CoWoS, HBM, liquid cooling, gas-peaker + grid), keep a hedge in long-duration optical/networking via puts, and demand evidence of usage *deceleration* (not capex headlines) before reducing strategic weight.

## 2. The Three Approaches — TMT / Quant / Strategy

Each desk should attack this from a different angle. The synthesis is mine; the operating handoffs are scoped below.

### 2.1 TMT Approach — Bottom-Up Unit Economics
- **Core question**: Is the cost-per-1M-tokens at the frontier (GPT-class, Claude-class, Gemini-class, plus open-weights at ~70B–400B) falling faster than tokens-served growth? If yes for >1 quarter, GPU $-demand decouples downward even as physical demand rises.
- **What to pull**:
  - OpenRouter / Artificial Analysis weekly $/Mtok by tier (frontier, mid, open) — slope last 8 weeks vs. trailing 26.
  - Hyperscaler 10-Q capex guide deltas (MSFT / META / GOOG / AMZN / ORCL) — specifically *FY26 capex re-guide vs. April commentary*.
  - CoWoS / HBM3e/HBM4 lead-time tracker and Nvidia DGX / GB-class allocation slippage.
  - Inference-vs-training mix at top-3 clouds (capacity allocation, not revenue).
- **Verdict trigger**: If frontier $/Mtok decline >25% QoQ AND tokens-served growth <20% QoQ → structural. Otherwise, deload.

### 2.2 Quant Approach — Factor & Crowding Lens
- **Core question**: How much of the AI-infra drawdown is explained by *factor unwind* (momentum + low-vol + quality-growth crowding) vs. *idiosyncratic cash-flow downgrades*?
- **What to pull**:
  - Barra / Axioma factor decomposition on the AI-infra basket (NVDA, AVGO, AMD, VRT, ANET, MU, CRWV, plus power-and-cooling sleeve) — last 10 trading days residual vs. factor.
  - Crowding score percentile (HF 13F + prime-broker net length) — was the basket >95th percentile entering the rumor?
  - Realized vs. implied dispersion: if implied dispersion in semis collapses while realized rises, it's de-risking, not earnings.
  - Pair: long compute-beneficiaries vs. short pure-AI-application names — has the spread reverted to fundamental fair value, or overshot?
- **Verdict trigger**: If >60% of the move is factor-attributable AND crowding has reset >10 percentile points → deload, mean-revert. If <40% factor → genuine fundamental re-rating.

### 2.3 Strategy Approach — Cross-Asset and Style Rotation
- **Core question**: Is the AI-infra deload feeding *constructively* into other A-share / HK / US styles (value, dividend, domestic-cycle, anti-AI-rotation themes)? Or is it a leading indicator of broader risk-off?
- **What I (chief-strategist) see**:
  - The rotation into A-share dividend + SOE-reform + domestic-demand baskets in the last 10 sessions is consistent with sentiment-only deload, not a growth-shock. If it were the latter, USD/CNY would be widening and HY credit spreads would be moving — neither has happened materially.
  - HK Connect southbound flow has stayed positive on the AI-infra ADR proxies (semis, optical, cooling) — domestic capital is not signaling structural concern; it is buying the dip.
  - Power-and-cooling beneficiaries (utilities-analyst territory) decoupled UP from semis last week — markets are still pricing the *physical* electricity demand from AI as real, even as they sell the *chip*. That asymmetry is itself a tell.

## 3. The Decoupling: Why Usage and Capex Are Diverging

Three forces are doing the work:

1. **Token price collapse from frontier-to-commodity compression.** GPT-class and Claude-class API prices have fallen ~70–85% YoY on a $/Mtok basis (per OpenRouter/Artificial Analysis trackers as of early May 2026). That is faster than 2024–2025 expected. But **usage volume is doubling on a similar cadence**, so revenue is roughly flat-to-up — and physical GPU demand is *still rising* because reasoning models (o-series, R-class) consume 10–40× more tokens per query than chat-completion did in 2024.
2. **Hyperscaler capex re-phasing ≠ capex cutting.** ORCL is the most idiosyncratic name here (largest growth-rate of forward capex commitments, most levered to a single training-cluster announcement cycle). A re-phase of ORCL's FY27 build does not generalize to MSFT/GOOG/META/AMZN, who have all reaffirmed FY26 capex in the latest earnings cycle. The market is over-reading one name.
3. **Inference is taking share from training inside the same physical fleet.** Net GPU demand stays high; the *mix* shifts. This is bullish for HBM (still constrained) and for power+cooling (inference workloads are higher-duty-cycle), and neutral-to-mildly-bearish for the very-largest training-cluster announcements that drive headline numbers.

## 4. Positioning Recommendation (chief-strategist)

| Sleeve | Action | Horizon | Trigger to flip |
|---|---|---|---|
| AI infra core (NVDA / AVGO / semi-cap) | Add on weakness, keep size disciplined | 4–8 weeks | Two consecutive prints of usage slope <+5% WoW |
| HBM / CoWoS supply chain | Overweight, prefer the second-tier (less crowded) | 8–12 weeks | HBM lead-time normalization |
| Power + liquid cooling | Overweight, China + US split | 8–16 weeks | Grid-interconnect queue clearing |
| AI-application names (pure-play) | Underweight — token-price collapse hits them first | 4–8 weeks | Evidence of usage-based revenue per user re-accelerating |
| Long-duration optical | Hedge with puts, do not chase | 4–6 weeks | Optical capex commentary at next cloud earnings |
| Hong Kong AI ADR-proxy basket | Neutral — let southbound flow do the work | 4–8 weeks | HK Connect southbound flip negative for 5+ sessions |

## 5. Key Data Points to Track (next 2–4 weeks)

- OpenRouter weekly tokens-served slope; flag any week <+5%.
- Artificial Analysis $/Mtok for frontier tier — flag any QoQ drop >25%.
- Cloudflare Workers AI / Vercel AI SDK usage tape (proxies for application-layer demand).
- CoWoS-L and HBM4 allocation news from TSMC / SK hynix / Micron.
- Hyperscaler FY26 capex re-guides at Q2 prints (mostly late-July).
- US grid-interconnect queue movements (ERCOT, PJM, MISO) and China UHV approvals.
- HK Connect southbound flow on the AI-infra proxy basket.

## 6. Risks to This View

- **Structural-break risk (the contrarian case)**: If a small-model breakthrough (e.g., a credible 8B parameter model matching GPT-4o on real workloads) materially shifts the workload mix from datacenter to edge, the *aggregate* GPU $-demand curve flattens. Watch open-weight benchmark releases.
- **Power-constraint inversion**: If grid-interconnect bottlenecks force hyperscalers to defer (not cut) capex by 4–8 quarters, the headline reads like a cut and equity markets may not distinguish.
- **Geopolitical**: An expansion of US export controls on HBM4 or CoWoS-L to specific China end-users could reset the China AI-infra basket on its own axis.
- **Sentiment overshoot down**: Crowding can clear past fair value before it recovers. Position-sizing matters more than directionality here.

## 7. Handoff

The next unanswered question is the **bottom-up unit-economics piece**: I have stated *that* token-per-dollar elasticity is the swing variable; the TMT desk needs to put numbers on it — specifically the frontier $/Mtok slope vs. tokens-served slope, and the inference/training mix shift inside hyperscaler fleets. That is the single most decision-relevant piece of evidence for whether the current tape is a deload (my base case) or a structural break.

Handoff to **tmt-analyst** with the ai_industry_tracker / chip_supply_chain / cloud_earnings_watch toolkit.
