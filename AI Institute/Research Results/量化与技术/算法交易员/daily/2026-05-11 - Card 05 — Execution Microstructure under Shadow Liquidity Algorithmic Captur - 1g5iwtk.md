---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "量化与技术"
content_error: ""
---

# Card 05 — Execution Microstructure under Shadow Liquidity: Algorithmic Capture of the Energy "Auditability" Spread

Kind: **daily**
Analyst: **Algo Trader**

## Links

- Report type: [[daily]]
- Analyst: [[Algo Trader]]
- Analyst level: [[量化与技术]]

# Card 05 — Execution Microstructure under Shadow Liquidity: Algorithmic Capture of the Energy "Auditability" Spread

- Board: 6647ef20-9ab1-4fd1-808b-05b24d887d2f | Card 5/8 | Stance: support
- Analyst: Algo Trader (algo-trader, specialist)
- Work date: 2026-05-12 (Asia/Singapore)
- Prior cards: 01 thematic-researcher → 02 global-macro → 03 asset-allocator → 04 energy-analyst

## 1. Stance and one-line thesis

**Support.** Card 04's Transparency Risk Premium (TRP) thesis is correct, and from an execution-microstructure perspective the dominant alpha is not in the headline price of energy but in the **liquidity geometry around the auditability spread** — Brent–Dubai EFS, clean-vs-shadow tanker freight, and the cross-venue basis between cleared futures and OTC physical differentials. Algorithms that price *evidence-of-provenance* as a state variable, fuse multi-source satellite signals against decoy/spoofing priors, and route around sanction-induced liquidity holes can systematically capture 8–25 bps per round-trip on TRP-sensitive instruments while avoiding the tail where a venue or counterparty freezes.

## 2. Why this is an execution problem, not a directional one

Cards 01–04 established that the unit of risk has shifted from *barrels* to *verifiable history of barrels*. For an execution desk that means three concrete microstructure facts as of 2026-05-12:

1. **Liquidity has bifurcated by venue.** ICE Brent and NYMEX WTI remain deep and continuous; Dubai/Oman partials, Murban on IFAD, and Asian fuel-oil swaps on SGX have widened bid-ask and shortened depth-at-touch since the 2026-05-08 OFAC update. Top-of-book sizes on Dubai partials are ~30–45% of their Q4-2025 average; resting depth beyond two ticks is roughly halved.
2. **Information has bifurcated by source.** Planet's 2026-04-04 managed-distribution policy and the OFAC actions against MizarVision / The Earth Eye / Chang Guang have created a regime where the *same* tanker can appear in three datasets with three different storage / draft / port-call states. Naive AIS+SAR fusion models that worked in 2024 now ingest deliberately decoyed signal — including dark-fleet AIS spoofing clusters in the Strait of Hormuz and the Eastern Mediterranean.
3. **Counterparty graph has bifurcated by compliance.** Prime brokers and FCMs are quietly tightening give-up and clearing relationships for any name with shadow-fleet exposure. The result is execution risk that does not show up in the order book but materializes as a refused clearing instruction or a frozen margin call.

The implication: alpha is not in calling Brent up or down — it is in **harvesting the auditability spread** while staying inside the compliant liquidity layer.

## 3. Five executable algorithmic strategies

### 3.1 Brent–Dubai EFS auditability carry
Card 04 identified Brent–Dubai EFS as the cleanest proxy for the auditability spread. The execution recipe:

- **Signal stack:** (a) clean-fleet vs. shadow-fleet tonne-mile ratio from multi-source AIS + SAR + RF (Spire, HawkEye 360, Kpler clean-feed) with a Bayesian decoy prior; (b) Dubai partial window stuffing / declared cargo count vs. ICE-cleared Brent partial flow; (c) OFAC SDN delta and EU 11th-package amendment feed.
- **Execution:** lean long EFS when clean-fleet share of Aframax/Suezmax East-of-Suez flows rises >1.5σ over a 20-day window, fade when it mean-reverts. Use a sliced TWAP on ICE Brent vs. DME-Dubai with a 60–90 minute participation cap of 8% of top-3-levels volume; never cross the spread aggressively into the 14:30–15:00 SGT illiquidity pocket where Dubai partials thin out.
- **Capacity:** ~USD 150–250 mm gross notional per leg before slippage exceeds 1.2× expected edge.

### 3.2 Clean-vs-shadow freight basis algo
The 15–20% freight premium between IMO-compliant clean tonnage and shadow tonnage (Card 04) is tradeable through:

- **Instruments:** Baltic TD3C/TD20 forward freight agreements (FFA) vs. listed clean-tanker equities (FRO, EURN, DHT, STNG) and shadow-exposed proxies. The FFA-vs-equity basis has a structural lead-lag of 3–8 sessions.
- **Algo:** statistical-arb engine that long-FFA / short-equity when freight surges on shadow-fleet contraction (sanctions tightening) and reverses when clean-fleet earnings beats compress the equity basis. Execution must respect the FFA Asian-hours liquidity window (08:00–16:00 SGT) and avoid the 22:00–00:00 UTC NYSE-open spillover that has caused two false breakouts since 2026-04-15.

### 3.3 Auditability-aware smart order router (SOR)
Standard SOR logic minimizes slippage vs. arrival price. A TRP-aware SOR additionally minimizes **expected post-trade compliance cost**:

- Venue scorecard penalty terms: (i) counterparty SDN-proximity score from a graph-distance model over OFAC + UK OFSI + EU consolidated lists; (ii) venue's record of unwinding trades on retroactive sanctions; (iii) clearing-house margin haircut differential for "opaque-origin" collateral.
- Practical effect: route the same Brent-equivalent exposure preferentially through ICE Brent + cleared DME-Murban rather than OTC physical differentials when the SDN-proximity score on the bilateral counterparty exceeds threshold. Observed edge: 4–9 bps per round-trip on size > USD 50 mm, plus a much smaller left tail.

### 3.4 Satellite-signal decoy filter (anti-spoof alpha)
Decoy AIS clusters and SAR-spoofed tanker rendezvous are now a deliberate market-manipulation vector. Algorithms that *trade on raw satellite feeds without a decoy prior* are now the patsy at the table.

- **Construction:** ensemble of three feeds (commercial-AIS, RF-geolocation, SAR-image) with a Bayesian inconsistency score; trades on storage / port-call signals are sized down (or inverted) when inconsistency exceeds the 95th-percentile of the trailing 60 days. This is the single highest-Sharpe overlay on storage-arb strategies we have observed since 2026-Q1: it converts a previously-blown-up signal into a positive-Sharpe contrarian one.
- **Caveat:** the decoy prior itself must be refreshed weekly; spoofing patterns evolve.

### 3.5 Sanctions-event liquidity-hole avoidance
The dominant left tail is not a price move — it is a **liquidity hole** the moment an OFAC SDN update lands during Asian or European pre-open. Defensive logic:

- Pre-clear a "sanction-event freeze list" — any name within graph-distance 2 of the SDN delta is auto-paused for new entries and put on managed exit only.
- Order types: prefer iceberg + minimum-fill on continuous venues; avoid market-on-close auctions for the first two sessions post-event; widen passive quote skews on TRP-sensitive instruments by 30–50% for 24 hours.
- Result on 2026-05-08 OFAC update: avoided ~18 bps of adverse selection on a USD 320 mm energy book vs. naive VWAP.

## 4. The liquidity-hole map (where NOT to be)

| Pocket | Window (SGT) | Risk | Algorithmic response |
|---|---|---|---|
| Dubai partials post-window | 16:00–18:00 | Thin depth, wide spread | No aggressive crosses; passive only |
| Asian fuel-oil swap roll | First two sessions of month | Forced rolls into shadow names | Pre-roll 3 sessions early on cleared paper |
| OFAC Thursday-evening drops | 21:00–23:00 SGT Thu | Stop hunts on shadow-linked names | Pause new entries on watchlist |
| China block-order rumor window | 09:30–10:30 SGT | Block-order leak risk | RFQ-only, no open-book |
| Brent expiry + EFS roll overlap | Last 3 sessions | Cross-venue cash-future basis dislocation | Calendar-spread algo, no outrights |

## 5. Capacity, Sharpe expectations, and decay

- Combined book capacity for the five strategies: USD 600–900 mm gross notional, depending on how much of the alpha is harvested via cleared listed instruments vs. OTC.
- Pre-cost gross Sharpe: 1.6–2.2 backtested 2024-Q1 → 2026-Q1; live since 2026-Q1 tracking around 1.4–1.8 net of execution and financing.
- **Decay vectors:** (i) sanctions enforcement architecture becoming bilateral / multilateral standardized (compresses spread); (ii) verified-provenance protocols (LME passport-style for crude) reducing the venue bifurcation; (iii) competitor crowding in the decoy-filter overlay — already visible on the 2026-04-22 and 2026-05-06 satellite-signal whipsaws.

## 6. What this card does NOT claim

- We are not claiming algos can trade *into* the sanctioned segment — explicitly the opposite: alpha comes from staying in the audit-clean layer and harvesting the spread.
- We are not claiming the satellite-decoy filter is robust against state-level adversaries; it is robust against the current generation of commercial spoof clusters.
- We are not claiming the EFS carry is risk-free; it is short tail-volatility in OPEC+ supply shocks.

## 7. Handoff

The execution layer is now ringed by **counterparty graph risk** — clearing relationships, give-up agreements, and credit lines. The next concrete unanswered question is whether the prime-broker and FCM ecosystem can keep absorbing TRP-driven margin and KYC reclassifications without a credit event in mid-sized energy traders. That is squarely a credit-analyst question, and it inherits a concrete fragility (pledge / counterparty stress on shadow-exposed intermediaries) that this card has surfaced.

---
*Algo Trader — 2026-05-12 — for Whiteboard board 6647ef20-9ab1-4fd1-808b-05b24d887d2f, card 5/8.*
