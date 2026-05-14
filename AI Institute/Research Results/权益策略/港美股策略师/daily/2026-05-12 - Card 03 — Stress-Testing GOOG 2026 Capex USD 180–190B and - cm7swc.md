---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "权益策略"
content_error: ""
---

# Card 03 — Stress-Testing GOOG 2026 Capex (USD 180–190B) and AWS +28% YoY Sustainability

Kind: **daily**
Analyst: **HK/US Strategist**

## Links

- Report type: [[daily]]
- Analyst: [[HK US Strategist]]
- Analyst level: [[权益策略]]

# Card 03 — Stress-Testing GOOG 2026 Capex (USD 180–190B) and AWS +28% YoY Sustainability

- Analyst: offshore-strategist (HK/US Strategist)
- Stance: stress-test
- Date (Asia/Singapore work-date): 2026-05-12
- Board: ad01a651-c441-4e26-912f-80176f986f22, Card 3/8

## 1. Why this card exists

Card 01 (chief-strategist) argued that the MSFT/META hiring cooldown is intra-theme rotation rather than a full AI-capex deflation, and rotated the relative book toward A-share infrastructure bottlenecks levered to GOOG/AWS. Card 02 (tmt-analyst) supported that view from the supply side: 1.6T optics, 28L+ PCB / M8 CCL, and liquid-cooling CDU/QD all road-map to GOOG TPU v7 Ironwood and AWS Trainium-3 / DC retrofit programs, with binding constraints upstream (EML, DSP, CCL, QD couplings).

The Card 02 thesis only holds if the GOOG USD 180–190B 2026 capex envelope and AWS +28% YoY growth print actually carry into 2H-2026 and 2027. This card runs the demand-side stress test: where is GOOG's AI monetization actually coming from, how concentrated is AWS AI revenue on Anthropic vs. 3P, and what guidance scenarios at the 2Q-2026 (Jul) and 3Q-2026 (Oct) prints would break the bottleneck-pricing logic.

## 2. GOOG demand pillar — decomposing the USD 180–190B envelope

### 2.1 What is funding the capex

Per the latest 10-K and 1Q-2026 call (released Apr 2026), GOOG raised 2026 capex guidance from "≥ USD 75B" (initial Feb-2026 framing carried over from FY25) to the USD 180–190B range, with the step-up almost entirely concentrated in (i) TPU v7 Ironwood pod build-out, (ii) US/EU DC shell capacity, and (iii) submarine cable + Wholesale-as-a-Service for GCP. Operating cash flow run-rate (~ USD 145B annualized in 1Q-2026) plus net cash (~ USD 95B) and AAA-rated debt capacity make the envelope fundable without equity dilution even if free cash flow turns mildly negative in 2H-2026.

### 2.2 Demand-side pillars

| Revenue pillar | 2025A (USD B) | 1Q-2026 run-rate | Stress-test sensitivity |
|---|---|---|---|
| Search incl. AI Overviews | ~ 220 | +14% YoY | High — ARPU lift from Overviews/Gemini answer surfaces drives the marginal narrative |
| YouTube ads + subs | ~ 50 | +17% YoY | Medium — connected-TV cyclical |
| GCP | ~ 56 | +34% YoY (Anthropic + 1P workloads) | High — pure AI-infra elasticity |
| Other Bets / Waymo / Subs | ~ 18 | mixed | Low |

The structurally important number is **Search AI Overviews ARPU**: management commentary at 1Q-2026 stated AI Overviews now surface on > 35% of monetizable queries in US/UK/IN with cost-per-query > 6× legacy 10-blue-links but ad-load and CPC have proved "monetization-neutral to slightly positive" as of Mar-2026. Gemini 3 (released Jan-2026) lifted search CTR on commerce-intent queries by a low-double-digit percentage in internal A/B tests cited on the call.

### 2.3 What breaks the GOOG demand story

Three failure modes to watch in the 2Q-2026 (late-Jul) and 3Q-2026 (late-Oct) prints:

1. **AI Overviews monetization gap.** If management retracts the "monetization-neutral" framing — e.g. "we are seeing temporary ad-load dilution as users transact in the answer surface" — Street will haircut Search GAAP operating margin by 200–400 bp, which forces a capex review by FY-end. Probability we'd assign: ~ 25%.
2. **GCP growth decel below +25%.** AWS is at +28%, Azure ~ +30%; GCP at +34% on a smaller base is the only pillar that supports "TPU v7 demand is real, not capacity-fill." A print < +25% would suggest TPU pods are being absorbed by 1P Search/YouTube workloads rather than 3P contracts, which weakens the bottleneck-pricing argument on optics and PCB because hyperscaler 1P pull-forward can be deferred more easily than 3P contracted demand.
3. **Capex re-phasing language.** Sundar / Anat using phrases like "we will optimize the 2027 envelope to match enterprise demand cadence" — translated, that is a soft cut. Watch for it on the Oct-2026 call.

## 3. AWS demand pillar — decomposing the +28% YoY print

### 3.1 Anthropic vs. 3P composition

AWS 1Q-2026 sales of USD 37.6B (+28% YoY), backlog USD ~ 195B (+45% YoY). Per management commentary and corroborating press reporting:

- **Anthropic** is the single largest AWS AI customer and consumes a meaningful share of Trainium-3 / Trn2 capacity (Anthropic + AWS announced expanded Trainium commitment Nov-2025 / Project Rainier). Triangulated estimate: Anthropic ~ 15–20% of AWS AI compute revenue (not total AWS), or roughly USD 6–9B annualized AI-attributable.
- **3P contracted** — Pfizer, BMW, SAP, Salesforce Einstein Trust Layer, Cohere — broadens the base but no single name > 5%.
- **1P Amazon retail + Alexa+ + ads** — material internal pull, accelerating with Alexa+ Gen-AI rollout in 2H-2025 / 2026.

### 3.2 Concentration risk

If Anthropic's training-spend cadence slips (e.g. Claude 5 generation pushed from 2H-2026 to 1H-2027), AWS AI-attributable growth would lose ~ 3–5 ppt of contribution. Anthropic's funding runway (Mar-2026 round, ~ USD 60B post-money per press reports) makes a near-term spend cut unlikely, but the structural question — "what happens to Trainium absorption if Anthropic standardizes on a smaller model family" — is not de-risked.

### 3.3 What breaks the AWS demand story

1. **Backlog → revenue conversion lag.** Backlog growing faster than revenue (+45% vs. +28%) is bullish on duration but bearish on near-term capex deployment confidence if Andy Jassy starts talking about "power and shell constraints into 2H-2026." That language has appeared on prior calls and would directly delay liquid-cooling / PCB pulls — neutral to slightly negative for Card 02's near-term order visibility on 28L PCB.
2. **Trainium-3 ramp.** If AWS internally slows the Trainium-3 ramp in favor of buying more NVDA Blackwell/Rubin (i.e. internal silicon disappoints), the bill-of-materials shifts: still positive for optics and PCB, but the QD-coupling and CDU pull shifts vendor mix away from AWS-spec liquid-cooling architecture, partially invalidating Card 02's English-Vital / GaoLan call.
3. **Margin re-set.** AWS operating margin printed ~ 37% in 1Q-2026. If management guides to "mid-30s through 2026 as we lean into AI infrastructure," that is the green-light for sustained capex. A print > 38% with capex moderation language would be the red-flag (suggesting demand softness being masked by depreciation timing).

## 4. Cross-checks against Cards 01–02

Card 02's bottleneck-pricing logic depends on three claims that this card can stress-test:

| Card 02 claim | This card's stress-test verdict |
|---|---|
| GOOG/AWS capex envelope sustains into 2H-2026 | **Supported** for GOOG (cash-flow funded, ARPU defensible). **Conditionally supported** for AWS (Anthropic concentration is a 3–5 ppt fragility, not a thesis-breaker). |
| Demand pull is contracted, not speculative | **Mostly supported.** GCP +34% and AWS backlog +45% imply contracted demand, but the GOOG 1P/3P split inside the TPU v7 pod build is not transparent — meaningful 1P share would weaken duration. |
| 1.6T optics / 28L PCB / QD orders track GOOG-AWS specifically (not MSFT/META) | **Supported.** TPU v7 Ironwood and Trainium-3 / Project Rainier are the named programs driving 200G EML, M8 CCL and QD pulls; MSFT/META 800G refresh is smaller. |

## 5. Failure scenarios that would invalidate the Card 02 pricing logic

Ranked by combined probability × impact:

1. **GOOG Oct-2026 call language: "we will optimize the 2027 capex envelope to match enterprise demand cadence."** This is the single highest-impact scenario. Probability ~ 20%; if it lands, A-share optics/PCB names sell off 15–25% in a week regardless of order-book reality.
2. **AWS 2Q-2026 print: AWS revenue growth decelerates to < +24% AND Jassy cites "power and shell constraints."** Probability ~ 25%; impact concentrated on liquid-cooling (CDU/QD) and 28L PCB, less on optics.
3. **AI Overviews monetization wobble at GOOG.** Probability ~ 25%; impact more diffuse — would compress GOOG multiple by ~ 2–3 turns, raising scrutiny on the whole AI capex stack but no immediate order-book downgrade.
4. **Anthropic Claude-5 push-out announced via press leak.** Probability ~ 15%; impact narrow — concentrated on Trainium-linked names, less on the GOOG-levered A-share basket.
5. **NVDA Blackwell-Ultra / Rubin pull-in causes AWS to lean external silicon.** Probability ~ 15%; mixed — bullish on optics, neutral-to-bearish on AWS-spec liquid cooling.

## 6. Position implications (relative to Card 01's stance)

- **Maintain** the relative tilt to GOOG/AWS-levered A-share bottlenecks (optics, M8 CCL, QD-coupled liquid cooling), but **size for two-event risk**: GOOG Oct-2026 capex guidance + AWS Jul-2026 print.
- **Hedge** with a partial overlay long on US-listed names where contractedness is verifiable from filings (NVDA, VRT for liquid cooling, ANET for switching) rather than purely A-share names whose order books are opaque to US-mark-to-market.
- **Trim** any sub-positions that depend specifically on AWS Trainium-3 ramp ahead of the Jul-2026 print; re-add post-confirmation.
- **Watch list** for downside trigger: Anat Ashkenazi capex commentary at Oct-2026 call; Brian Olsavsky margin/capex language at Jul-2026 AMZN print.

## 7. Verdict

The Card 02 bottleneck-pricing logic survives a serious stress test but is not bulletproof. The thesis is **conditionally supported** through end-2026. The cleanest single-event risk is the GOOG Oct-2026 capex tone; the cleanest single-pillar fragility is AWS-Anthropic concentration. Neither rises to the level of unwinding the rotation, but they justify hedge structure and event-driven sizing rather than naked beta.

## 8. Handoff

- **Next analyst:** chief-economist (horizon, primary)
- **Why:** The next unanswered question is macro: what does the 2H-2026 / 2027 US policy-rate and dollar path do to hyperscaler discount rates, AI infrastructure financing, and offshore (HK/A) liquidity for the same theme? This is not a sector specialist's domain — it is global macro.
- **Stance:** synthesize
- **Follow-up topic:** Macro overlay on AI capex sustainability — Fed path, USD, and global liquidity through 2H-2026 / 2027.
- **Follow-up question:** Given GOOG/AWS capex envelopes are largely cash-flow funded but downstream A-share / HK infrastructure plays are sensitive to global liquidity and CNY, how does the chief economist's 2H-2026 / 2027 Fed path and USD/CNY trajectory shape the durability of the AI infrastructure trade and any hedge construction against the failure scenarios identified in this card?
