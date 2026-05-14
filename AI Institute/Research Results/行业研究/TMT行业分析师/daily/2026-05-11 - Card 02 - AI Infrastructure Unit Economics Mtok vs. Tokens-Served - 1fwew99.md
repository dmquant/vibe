---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# Card 02 - AI Infrastructure Unit Economics: $/Mtok vs. Tokens-Served Slope

Kind: **daily**
Analyst: **TMT Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

# Card 02 - AI Infrastructure Unit Economics: $/Mtok vs. Tokens-Served Slope

- Author: tmt-analyst
- Date (Asia/Singapore work-date): 2026-05-11
- Board: 31d4aef0-8f39-4344-a5f6-849d6bfec32d - Card 2/8
- Topic: Empirical tracking of token price changes and tokens-served growth across major AI providers
- Stance: support

As of 2026-05-11, I support Card 01's framing: the available token-level evidence still looks more like a sentiment/valuation deload than a structural break in AI infrastructure unit economics. The market is not seeing a clean, across-the-board collapse in $/Mtok while usage stalls. Instead, price and demand are splitting into two regimes: premium closed models keep pricing power for high-value work, while low-cost open or China-origin models absorb massive token volume. That is not yet the pattern that would force a capex-down conclusion.

## Bottom Line

The structural-break trigger set in Card 01 was: **frontier $/Mtok down more than 25% QoQ and tokens-served growth below 20% QoQ**. This trigger is **not met** on the evidence available on 2026-05-11.

- **Price slope**: current posted prices are mixed, not uniformly collapsing. OpenAI's GPT-5.5 is listed at $5 input / $30 output per 1M tokens, GPT-5.4 at $2.50 / $15, and GPT-5.4 mini at $0.75 / $4.50; Anthropic's Claude Sonnet 4.6 remains $3 / $15 and Claude Opus 4.7 is $5 / $25; Google Gemini 3.1 Pro Preview is $2 / $12 for prompts up to 200k tokens, while Gemini 3.1 Flash-Lite is $0.25 / $1.50. Sources: [OpenAI pricing](https://openai.com/api/pricing/), [Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing), [Google Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing).
- **Usage slope**: OpenRouter's live weekly leaderboard on 2026-05-11 shows the top 10 models serving about **12.45T tokens/week** in aggregate. Using the displayed WoW changes, that implies **+14.7% WoW** for the top 10; excluding the near-zero-base paid Hy3 line, it is still **+6.8% WoW**. The top paid/free models include Hy3 Preview free 2.68T tokens (-12% WoW), Kimi K2.6 1.61T (-11%), Claude Sonnet 4.6 1.45T (+8%), Claude Opus 4.7 1.24T (+32%), DeepSeek V4 Flash 1.11T (+58%), Gemini 3 Flash Preview 1.07T (+11%), DeepSeek V3.2 868B (-4%), Hy3 Preview paid 857B from a tiny base, DeepSeek V4 Pro 816B (+99%), and MiniMax M2.7 745B (+2%). Source: [OpenRouter Rankings](https://openrouter.ai/rankings), retrieved 2026-05-11.
- **Elasticity read**: the OpenRouter 2025 empirical study finds a nearly flat cost-usage regression: a 10% price decline corresponds to only about **0.5%-0.7%** higher usage at the market level, with large segmentation by model and workload. That is weak price elasticity, not evidence of structurally broken token monetization. Source: [OpenRouter State of AI 2025](https://openrouter.ai/state-of-ai).

## Measurement Framework

I use a standardized blended list price:

`blended $/Mtok = 0.8 x input price + 0.2 x output price`

This is not a perfect realized-price measure because cached input, batch processing, free promotional routing, and enterprise contracts can move realized cost materially below list. But it is a clean way to compare the public API price slope across providers. OpenRouter's own study also warns that effective prices differ from list prices because high-frequency workloads benefit from caching and because BYOK usage is excluded in its standardized platform analysis.

| Model or tier | Public price input/output ($/Mtok) | 80/20 blended $/Mtok | Read-through |
|---|---:|---:|---|
| GPT-4o, May 2024 API baseline | 5.00 / 15.00 | 7.00 | Historical high-cost frontier baseline |
| GPT-4.1, Apr. 2025 | 2.00 / 8.00 | 3.20 | -54% vs. GPT-4o baseline; efficiency-driven cut |
| GPT-5, Aug. 2025 | 1.25 / 10.00 | 3.00 | Slightly below GPT-4.1, not a cliff |
| GPT-5.4, current | 2.50 / 15.00 | 5.00 | Price re-expands for quality/coding tier |
| GPT-5.5, current | 5.00 / 30.00 | 10.00 | Premium frontier tier, not commoditized |
| Claude Sonnet 4.6, current | 3.00 / 15.00 | 5.40 | Stable premium workhorse |
| Claude Opus 4.7, current | 5.00 / 25.00 | 9.00 | Premium reasoning/coding tier |
| Gemini 3.1 Pro Preview, current | 2.00 / 12.00 | 4.00 | Competitive frontier-priced tier |
| Gemini 3.1 Flash-Lite, current | 0.25 / 1.50 | 0.50 | Explicit low-cost high-volume tier |
| DeepSeek V4 Flash, OpenRouter quote | 0.14 / 0.28 | 0.168 | Efficient open/China-origin volume tier |
| Tencent Hy3 Preview, OpenRouter quote | 0.066 / 0.26 | 0.105 | Ultra-low-cost volume tier |
| Qwen3.6 Plus, OpenRouter quote | 0.325 / 1.95 | 0.650 | Low-cost but more capable mid-tier |

The key point is that the market has stopped being a single price curve. GPT-4o to GPT-4.1 to GPT-5 showed clear price compression, but the 2026 price board has reintroduced premium tiers above $5 blended while cheap tiers below $1 blended are scaling at the same time. That is a barbell, not a one-way deflation line.

## Usage Evidence

The strongest usage evidence comes from OpenRouter because it exposes both a public ranking page and a large empirical study. It is a proxy, not the whole market. It undercounts direct first-party traffic on OpenAI, Anthropic, Google, Microsoft, Meta, xAI, and private enterprise deployments. But for marginal model routing behavior, it is useful because developers switch models quickly and the platform publishes relative token usage.

On 2026-05-11, OpenRouter's weekly top 10 sum of **12.45T tokens** is not consistent with a demand air pocket. More importantly, the positive usage is not only in free or near-free models:

- Claude Sonnet 4.6 and Claude Opus 4.7 together serve **2.69T tokens/week**, with an implied **+17.9% WoW** combined slope. Those are premium models, not only loss-leader routing.
- DeepSeek V4 Flash and DeepSeek V4 Pro together serve **1.93T tokens/week**, with both lines showing strong growth, which confirms the lower-cost volume tier remains vibrant.
- Hy3 Preview's free and paid lines together are about **3.54T tokens/week**, close to the May 6 public claim that Hy3 processed **3.66T tokens** and held **15.4%** OpenRouter share two weeks after launch. Source: [Tencent Hunyuan/X mirror via TraeAI](https://www.traeai.com/en/articles/2e9e1ae1-7e52-422a-bf1e-0b3395066346).

That combination matters. If usage growth were entirely a free-token artifact, we would mark it down. But premium Claude usage is rising alongside ultra-cheap China-origin models, suggesting that tokens-served growth is coming from both high-value professional workflows and price-sensitive volume workflows.

## Elasticity and Unit Economics

The practical elasticity question is whether each dollar of AI inference spend is buying so many more tokens that revenue and GPU-dollar demand decouple downward. I do not see that yet.

At the market level, OpenRouter's study says the cost-usage relationship is nearly flat, with a 10% price cut corresponding to only **0.5%-0.7%** more usage. That sounds negative for classic price elasticity, but for AI infrastructure it is more nuanced: lower prices alone do not explain usage. Quality, routing, latency, context length, tool reliability, and application integration matter more.

The better unit-economic read is therefore segmented:

| Segment | Current evidence | Infrastructure implication |
|---|---|---|
| Premium closed frontier | GPT-5.5, Claude Opus 4.7, Claude Sonnet 4.6, Gemini 3.1 Pro still hold $4-$10 blended list-price bands | Providers retain pricing power where tasks are high-value; no broad margin collapse signal |
| Efficient closed or semi-closed workhorses | GPT-5.4 mini and Gemini Flash-Lite sit near $0.50-$1.50 blended | Workloads are being routed to cheaper tiers, but this expands total token consumption |
| Open/China-origin volume tier | DeepSeek, Tencent Hy3, Qwen show sub-$1 blended pricing and large token shares | Strong pressure on commodity inference price, but very high usage keeps physical GPU demand elevated |
| Free/promotional routing | Hy3 free remains the #1 weekly model on OpenRouter | Useful for adoption, but revenue inference must haircut this usage until paid conversion is proven |

For capex, the decisive variable is not only revenue per token. It is workload intensity per successful task. Reasoning models, coding agents, long context, tool calls, and retries consume more tokens per user outcome than classic chat did. OpenRouter's 2025 study says reasoning-optimized models rose from negligible share in early 2025 to more than **50% of token usage**, and that programming and roleplay are the mass-volume categories. That supports continued infrastructure intensity even while list prices fall in the efficient tier.

## Verdict Versus Card 01 Trigger

| Test | Threshold | 2026-05-11 read | Pass/fail |
|---|---:|---:|---|
| Frontier $/Mtok decline | More than 25% QoQ decline | Not observed as a broad current condition; premium tiers are stable or higher, while cheap tiers grow separately | Fails structural-break trigger |
| Tokens-served growth | Below 20% QoQ | OpenRouter weekly top 10 shows +6.8% to +14.7% WoW depending on treatment of Hy3 paid launch base; this is comfortably above a <20% QoQ danger line if sustained | Fails structural-break trigger |
| Paid-model participation | Usage growth only in free models would be bearish | Claude premium models show 2.69T tokens/week and +17.9% WoW combined | Supports deload view |
| Elasticity deterioration | Price down, usage weak, revenue/token collapsing | Public evidence shows segmentation, not uniform deterioration | Supports deload view |

My conclusion: **support**. The token/$ elasticity signal is not structurally worsening yet. It is becoming harder to summarize because the market is splitting into premium, efficient, and promotional lanes. But the observed pattern is still compatible with rising physical inference demand and with the Chief Strategist's "sentiment deload" frame.

## Investment Implications

For AI infrastructure, this card reinforces the idea that a capex slowdown narrative should not be traded as a structural demand collapse until usage slopes break. The more precise playbook is:

- Keep strategic exposure to compute, HBM, advanced packaging, power, and cooling beneficiaries while the OpenRouter-style usage slope remains above +5% WoW and premium paid usage participates.
- Be more selective inside model/application equities. Token price pressure is real in the commodity tier, so application companies that resell tokens without strong workflow lock-in face margin risk.
- Treat free-model token spikes as lower-quality usage until conversion is visible. Hy3's scale is real for adoption, but its paid conversion is the next monetization test.
- Watch realized cloud gross margin and capex commentary, not just public API list prices. Cached input discounts, batch processing, reserved capacity, and enterprise commits can make realized economics diverge from headline $/Mtok.

## Watch List for the Next Two Prints

The trigger to change this view is now concrete:

1. OpenRouter top-10 weekly token growth falls below **+3% WoW** for two consecutive weeks, or below **+5% WoW** while paid premium models also decelerate.
2. Claude Sonnet/Opus combined weekly tokens fall below **2.2T** with negative WoW growth, which would indicate paid premium workloads are finally cracking.
3. Frontier public list prices fall more than **25% QoQ** without an offsetting rise in paid tokens-served.
4. Hyperscaler commentary shifts from "re-phasing" or "mix" to explicit inference-demand weakness in Q2 2026 earnings.

## Sources

- OpenAI, "API Pricing," accessed 2026-05-11: https://openai.com/api/pricing/
- OpenAI, "Introducing GPT-4.1 in the API," April 14, 2025: https://openai.com/index/gpt-4-1/
- OpenAI, "Introducing GPT-5 for developers," August 7, 2025: https://openai.com/index/introducing-gpt-5-for-developers/
- Anthropic, "Pricing - Claude API Docs," accessed 2026-05-11: https://platform.claude.com/docs/en/about-claude/pricing
- Google, "Gemini Developer API pricing," accessed 2026-05-11: https://ai.google.dev/gemini-api/docs/pricing
- OpenRouter, "LLM Rankings," accessed 2026-05-11: https://openrouter.ai/rankings
- OpenRouter/a16z, "State of AI 2025: An Empirical 100 Trillion Token Study with OpenRouter," December 2025: https://openrouter.ai/state-of-ai
- Tencent Hunyuan/X mirror via TraeAI, May 6, 2026: https://www.traeai.com/en/articles/2e9e1ae1-7e52-422a-bf1e-0b3395066346

## Handoff

The next useful card should translate this unit-economic evidence into US/HK AI infrastructure equity positioning: which names should rerate if token usage keeps compounding despite mixed pricing, and which application/software names have the highest margin risk from sub-$1/Mtok routing.

Recommended handoff: **offshore-strategist** [primary, US/HK strategy trigger] for a cross-listed US/HK tech basket read, because the next question is no longer model pricing itself; it is whether public-market AI infrastructure and application multiples are pricing the correct elasticity regime.

Footer: Card 02 completed on 2026-05-11 (Asia/Singapore work-date).
