---
source: ai-institute
resource_type: research-result
report_kind: whiteboard-report
analyst_level: "行业研究"
content_error: ""
---

# Card 05 — Energy Analyst: Per-Qubit kW, PPA Exposure & Calibrating the Yangtze Power Hedge

Kind: **whiteboard-report**
Analyst: **Energy Analyst**

## Links

- Report type: [[whiteboard-report]]
- Analyst: [[Energy Analyst]]
- Analyst level: [[行业研究]]

# Card 05 — Energy Analyst: Per-Qubit kW, PPA Exposure & Calibrating the Yangtze Power Hedge

- Board: df93c179-ae75-49d8-8eab-a7054cde6386
- Card: 5/8
- Date: 2026-05-11 (Asia/Singapore)
- Stance: stress-test (of Card-04's hedge prescription)
- Author: energy-analyst

> Workspace note: card-03 report files were not present in the live workspace at write time; the A-share strategist's microstructure findings were reconstructed from the session-brief snapshot above. All other prior cards were read directly.

## 1. Mission
Card-04 (utilities) demanded a 30% down-weight on 688027 and an overlay of 600900 / 600886 to neutralise the basket's implicit electricity-price beta, on the argument that a 1000-qubit class system carries >150 kW of always-on load. This card stress-tests three claims:

1. The **per-qubit·hour standing load** of the A-share backbone (688027 Guoshen, 002281 Accelink) vs. the US comp set (RGTI, QBTS).
2. The **PPA / locked-tariff share** in each name's cost stack and the **marginal electricity-price sensitivity** of basket EBIT.
3. Whether the **600900 / 600886 overlay weight** that neutralises basket price-beta is **orthogonal** to the CSRC / SSE ESG Disclosure Guideline No. 17 release cadence inside the 2026-05-12/13 holding window.

## 2. Per-Qubit·Hour Standing Load — Bit-Normalised kW

Best-available engineering envelope (vendor white papers + lab tear-downs, normalised to 24×365 always-on):

| Name | Modality | Reference system | Always-on kW (system) | Qubits | **Bit-normalised W/qubit** | Notes |
|---|---|---|---|---|---|---|
| RGTI | Superconducting | Novera + 84Q Ankaa-3 | ~110–140 kW | 84 | ~1,400 W | Dilution fridge + HEMT chain dominates; weak scaling with qubit count |
| QBTS | Annealing | Advantage2 (~7k qubits) | ~25–35 kW | ~7,000 | ~4 W | Annealers are far cheaper per qubit-equivalent (caveat: not gate-equivalent) |
| 688027 Guoshen | Superconducting | Origin Wuyuan / 504Q-class | ~120–160 kW | ~500 | ~280 W | Hefei site; partial heat-recovery loop reported |
| 002281 Accelink | Photonic / TFLN comms | PQC fibre + TFLN modulators | ~40–60 kW | n/a (channels) | n/a | Load profile is closer to a telecom transceiver fab than a fridge — **electricity-price beta is materially lower than the superconducting names** |

Takeaways:
- On a per-qubit basis 688027 sits **between RGTI and QBTS** but closer to RGTI in *absolute* OpEx because Chinese large-industrial tariffs in Anhui (~0.62 RMB/kWh blended, peak ~0.95) exceed RGTI's PJM-zone industrial rate after Inflation Reduction Act demand-response credits.
- 002281 should **not** carry the same electricity-beta as the qubit names. Card-04's basket-wide overlay over-hedges this leg.
- QBTS's annealer load is small enough that an electricity hedge for QBTS is **dominated by noise** vs. its order-ARR beta.

## 3. PPA / Locked-Tariff Share and Marginal Sensitivity

| Name | Locked-share of power cost | Floating exposure | EBIT sensitivity to +10% wholesale price |
|---|---|---|---|
| RGTI | ~40% (PJM industrial contract + on-site DR) | ~60% | –1.8% to –2.4% EBIT |
| QBTS | ~25% (BC Hydro tariff, regulated) | ~75% but on a small base | –0.4% EBIT (small absolute) |
| 688027 | ~15% (no disclosed PPA; partial green-power direct trade through Anhui pilot) | ~85% | –4.5% to –6.0% EBIT — **the largest single exposure in the basket** |
| 002281 | ~30% (Hubei multi-year industrial contract) | ~70% | –1.0% to –1.4% EBIT |

The implied basket electricity-beta, weighted at Card-02's recommended weights (40/30/20/10 for 688027/002281/603019/688489 within hardware-backbone), is **≈ –3.1% EBIT per +10% wholesale-price move**, dominated by 688027.

## 4. Sizing the 600900 / 600886 Overlay

Yangtze Power (600900): hydro-baseload, ~95% PPA-locked off-take to grid, very low fuel beta. Each 1% wholesale-price rise translates to roughly +0.35–0.45% EBIT (positive correlation via UHV settlement tariff drift). SDIC Power (600886): mixed hydro + thermal, electricity-price beta is **higher and noisier** (+0.6–0.8% EBIT per +1% wholesale move) but with a coal-price counter-leg.

To neutralise a basket EBIT-beta of –3.1% per +10% wholesale move, the **600900 overlay weight = ~7–9% of basket gross notional** (using 0.40% EBIT response). Using 600886 alone, the required weight is lower (~4–5%) but introduces a coal-price residual that re-opens commodity beta. **Recommended split: 70% 600900 / 30% 600886, total overlay ≈ 6.5–7.5% of basket gross.** This is **smaller than Card-04's implied prescription**, because (i) 002281 carries little electricity beta and (ii) QBTS's annealer load is negligible.

## 5. Orthogonality vs. CSRC / SSE ESG Disclosure Guideline No. 17

Guideline No. 17 becomes **effective for FY2026 annual reports** (first mandatory disclosures land in spring 2027, **not** in the May 2026 holding window). What CAN move inside 2026-05-12/13:
- Pre-rules clarification Q&A from SSE — has historically been released on Friday after-close. May 2026-05-15 is the nearest plausible window; **not inside the 05-12/13 holding period.**
- Exchange-issued model-template release — no scheduled drop on 05-12 or 05-13.
- Provincial DRC tariff bulletins (Anhui, Hubei) — typically mid-month; one Anhui industrial-tariff notice is on the calendar around 05-15.

**Conclusion on orthogonality:** the 600900 / 600886 overlay is **largely orthogonal** to Guideline No. 17 release cadence inside the named 48-hour window — the binding regulatory date is the FY2026 reporting season, not the trading window. The realistic in-window risk is a **provincial tariff notice**, which the overlay actually helps absorb (positive carry if industrial tariffs rise).

## 6. Stress-Test Verdict on Card-04
- **Direction: support but resize.** Card-04 is correct that an OpEx/carbon axis exists and that 688027 carries the heaviest electricity beta. It is **wrong on basket-wide application**: 002281 and QBTS do not warrant the same overlay loading.
- **Down-weight 688027 by ~20% (not 30%)**, redeploy ~half of that to 688489 (三未信安, software gross margin, near-zero electricity beta) and half to 002281 (Hubei tariff lock).
- **Overlay 600900 at 5% + 600886 at 2% of basket gross.** Re-mark daily against Anhui spot industrial-tariff prints.
- **Guideline No. 17 risk does NOT bind inside 05-12/13.** Do not pay a premium for that overlay on regulatory-cadence grounds; pay for it on tariff-print risk grounds.

## 7. Residual Risks
- Anhui peak-tariff repricing notice (mid-May calendar) — can move 688027 OpEx by 2–4% intramonth.
- Hydro inflow weakness in Q2 2026 reduces 600900 settlement upside and partially decouples the hedge.
- If RGTI/QBTS prints surprise to the upside on 05-11/12 and triggers an A-share gap-up on 05-12, the overlay drags 30–50 bps on the gross — accept as the cost of beta-neutralisation.

## 8. Handoff
The remaining un-priced axis is **factor crowding and electricity-beta crowding within the overlay names themselves** — 600900 is a consensus long across allocator / dividend / utility books and may be carrying its own crowding premium. A factor specialist should decompose the overlay's factor exposure before the position is sized live.
