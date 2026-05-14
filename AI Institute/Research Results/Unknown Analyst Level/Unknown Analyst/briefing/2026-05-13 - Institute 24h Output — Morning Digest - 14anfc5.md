---
source: ai-institute
resource_type: research-result
report_kind: briefing
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Institute 24h Output — Morning Digest

Kind: **briefing**
Analyst: **(unknown)**

## Links

- Report type: [[briefing]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Institute 24h Output — Morning Digest

- Window: `window_since_iso = 2026-05-12T00:28:36Z` → generated at `2026-05-13T00:28:36Z` (source: top-level fields in `digest.json`)
- Source: `https://ai-institute-worker.dmquant.workers.dev/api/morning-digest/raw.json` (24h rolling aggregate)

## 0. Data-pull summary

| Source | Records | Status |
|---|---|---|
| `whiteboard_cards` | 88 (all status=completed; 11 boards × 8 cards) | ok |
| `mailbox_threads` | 31 (all status=completed) | ok |
| `fact_cards_by_status` | 6 aggregate rows (completed: disputed 26 / uncertain 1 / unverifiable 48 / verified 8; reused-verified 1; running 1) | ok |
| `fact_cards_disputed` | 10 sample rows | ok |
| `chain_coverage_gaps` | 10 | ok |
| `research_queue` | 7 (completed 2 / running 1 / pending 4) | ok |

`digest.json` fetched at 201,143 bytes; curl returned cleanly.

## 1. Three team-wide focus themes

### Theme A — Quantum sovereignty bifurcation (NIST vs. China lattice) and the WFE-export-control chain split
- One-liner: A compressed FTQC timeline has shifted global financial security from "technology-neutral" to "sovereign-bifurcated"; China's WFE-precision gap pushes its FTQC commercialization 3–5 years behind the West, but its localization gap is narrower than for lithography and its retaliatory tooling is richer.
- Analysts involved: `global-macro`, `asset-allocator`, `tmt-analyst`, `industrials-analyst`, `thematic-researcher`, `china-macro` (board `e8dd0524`, 8 cards)
- Key evidence: card `8abdaad0` (sovereign dual-track), card `d3ba5eb2` (WFE gap / "redundancy tax"), card `510af781` (risk-parity reweighting under quantum sovereignty)
- Convergence: cross-domain consensus that the bifurcation is real and China's NISQ path remains investable; multiple disputed numbers (UTXO stock discount 15–30%, 26k logical qubits to break 256-bit ECC) need QA follow-up.

### Theme B — AI capex as duration + physical bottlenecks in grid and data centers
- One-liner: AI capex has shifted from a broad-beta trade to certification-alpha plus physical-delivery bottlenecks; GOES/copper/HVPT and power-delivery have become multi-year order-book anchors, and data-center REIT dividend coverage is being pressed toward 1.05–1.15x.
- Analysts: `asset-allocator`, `utilities-analyst`, `tmt-analyst`, `industrials-analyst`, `materials-analyst`, `bond-analyst`, `credit-analyst`, `realestate-analyst`, `chief-strategist`, `thematic-researcher` (boards `2bfc498f` / `c2a58361` / `a79d6fde` / `3e77be32` / `ad01a651`)
- Key evidence: thread `5838ea6f` (AI infra as new duration asset, thematic → chief-strategist); thread `48dae478` (does the AI-capex duration trap deserve to be the day's top story, daily-report-editor → chief-strategist); card `bef89f27` ("S-bucket" AI-capex beta 0.55–0.85, transmission delivery 4–8 years — disputed).
- Convergence: directional consensus (order-book visibility up, equity-side payout coverage down); position-sizing dispersion remains — QA already issued needs-revision on board `bdf518e1` (Card 07 staged-allocation language unclear, macro dates drifting).

### Theme C — Hormuz shock, stagflation tail, cross-asset transmission
- One-liner: Treat Brent as a demand-cycle victim carrying a stagflation tail-hedge; do not directionally long Brent — express the tail via XLE + gold + TIPS, and at the portfolio level use an 8% energy sleeve as the load-bearing piece of the 20% commodity defense weight.
- Analysts: `energy-analyst`, `global-macro`, `chief-economist`, `asset-allocator`, `bond-analyst`, `fx-strategist`, `chief-strategist` (boards `887ab6d2` / `8f8413a9` / `77632254`)
- Key evidence: thread `254c56e4` (Hormuz macro transmission, energy → global-macro: Brent 130–155, CPI +1.6–2.4 pp, DXY 108–116, Fed pauses cuts); board `887ab6d2` Card 06 (USD reflux chain); board `77632254` consensus — daily report should lock in BASELINE-NEUTRAL regime, Brent 100–110 as base, 150+ as tail.
- Convergence: consensus is "baseline-neutral, hedge the tail, do not chase Brent"; rotation in FX / A-shares / commodities is gated by a Brent + FX dual-trigger.

## 2. Highest-signal handoffs

| Sender → Recipient | Subject | thread_id | One-liner | Status |
|---|---|---|---|---|
| `thematic-researcher` → `chief-strategist` | AI infrastructure as a new duration asset (macro coupling) | `5838ea6f` | AI capex now carries duration properties tightly coupled to rates/credit; needs strategic-level anchoring | completed |
| `daily-report-editor` → `chief-strategist` | Should the AI-capex duration trap become today's headline | `48dae478` | Recommends elevating AI-capex duration to top story | completed |
| `ashare-strategist` → `chief-strategist` | A-share vs. HK-tech scissor-gap sustainability (bilingual pair) | `1e00905f` / `abcf1a02` | Scissor sustainable short-term, but only via NVIDIA/Google certification alpha — not broad capacity beta | completed |
| `thematic-researcher` → `chief-strategist` | SpaceX IPO premium spillovers (bilingual pair) | `fd7be278` / `1e85a406` | SpaceX IPO premium spills into satellite/space-chain names; needs investable shortlist | completed |
| `energy-analyst` → `global-macro` | Hormuz Strait disruption macro transmission | `254c56e4` | Persistent SoH disruption: Brent 130–155, headline CPI +1.6–2.4 pp, DXY 108–116, Fed pauses | completed |
| `global-macro` → `bond-analyst` | 30Y bond auction sensitivity | `d158da99` | After yesterday's CPI beat, 30Y auction highly sensitive to PPI; failed thresholds: tail >3.0 bp, bid-to-cover <2.20x | completed |
| `thematic-researcher` → `industrials-analyst` | Distribution-equipment order backlog | `92da41b0` | Distribution delivery queues extend to 2027–2028; HVPT/transformers are the binding bottleneck | completed |
| `thematic-researcher` → `utilities-analyst` | Nuclear + SMR data-center agreements | `c4a876df` | Nuclear/SMR PPAs with hyperscalers emerging as pure-defensive substitutes inside XLU | completed |

Recipient mix favors `chief-strategist` (6), `chief-economist` (3, via board consensus), and `asset-allocator` (at card level) — consistent with the intended strategic-layer funnel.

## 3. Deep-research output

Rows in `research_queue` with `status='completed'` inside the 24h window:

| Ticker | Market | Source | Completed (UTC) |
|---|---|---|---|
| `600570.SH` | A | operator-replay | 2026-05-12T15:35:12Z |
| `002410.SZ` | A | operator-replay | 2026-05-12T14:05:12Z |

Also: `688111.SH` (operator-replay) running; `688012.SH` / `002371.SZ` / `688027.SH` / `A` (US) pending, all triggered by whiteboard-mention.

## 4. Fact-check output

Verdict counts within `completed`:

| Verdict | n |
|---|---|
| disputed | 26 |
| unverifiable | 48 |
| verified | 8 |
| uncertain | 1 |

Plus reused-verified 1, running 1.

**Disputed share is elevated (26 / 83 ≈ 31%).** The three most consequential disputed claims:

1. "Un-migrated BTC UTXO already shows a 15–30% permanent stock discount" — parent `8abdaad0` (quantum-sovereignty card)
2. "By 2026, breaking 256-bit ECC needs only ~26k logical qubits or ~500k physical qubits" — parent `8abdaad0`
3. "Of the 86 GW added in 2026, only 6.3 GW is reliable gas-fired" — parent `bef89f27` (AI-capex power-supply card)

All three are load-bearing argument numbers and should be re-sourced or softened before the chief-strategist layer adopts them.

## 5. Follow-ups for tomorrow

1. **Close board `bdf518e1` needs-revision**: Card 07 staged-allocation language unclear, macro-date drift. Owners: `qa-manager` + `asset-allocator`.
2. **Re-verify quantum-sovereignty disputed numbers**: UTXO discount, ECC-break threshold, Card 05/06/07 RC splits. Owners: `thematic-researcher` (original) + `qa-manager`.
3. **30Y auction × PPI link**: thread `d158da99` already carries the sensitivity table; after tomorrow's PPI print, `bond-analyst` to check whether tail / bid-to-cover trip the failed thresholds.
4. **AI-capex duration trap as day-1 headline?** daily-report-editor has pinged chief-strategist (thread `48dae478`); awaiting editor-in-chief decision.
5. **SpaceX IPO spillover investable list**: thematic-researcher delivered to chief-strategist (bilingual threads); assign `tmt-analyst` to operationalize the stock universe.

## 6. Chain-coverage gaps (suggested whiteboard pitches)

All `chain_coverage_gaps` rows have `needs_analyst_owner=false`, but activation rates are very low. Three pitches worth bringing to the board:

1. **Textiles & apparel chain** — 86 members, 4 active, activation 1.2%, distinct_analysts=2. Pitch: "Has the tariff reset + Southeast-Asia capacity rebalancing already produced deep-value setups in A-share textiles?" Suggested owners: `consumer-analyst` (end demand) + `industrials-analyst` (capacity/supply chain).
2. **Health & wellness chain** — 275 members, 4 active, activation 1.5%, distinct_analysts=6. Pitch: "After DeepSeek-V4 dropped the inference-cost curve, is there a capex inflection in AI × medical diagnostics / drug discovery?" Suggested owners: `healthcare-analyst` + `tmt-analyst`.
3. **Life-sciences & biotech chain** — 170 members, 3 active, activation 1.8%, distinct_analysts=2. Pitch: "Second-order effects of PQC sovereignty bifurcation: cross-border medical-data compliance and the IP-encryption-migration cost in biotech." Suggested owners: `healthcare-analyst` + `thematic-researcher` (links to Theme A).

No explicit owner-gap (`needs_analyst_owner=true`); all three are low-activation chains that can be claimed by existing analysts.

---

*Generated locally: 2026-05-13; window anchored at `window_since_iso=2026-05-12T00:28:36Z`. All card_id / thread_id / ticker / numeric values are quoted verbatim from `digest.json`.*
