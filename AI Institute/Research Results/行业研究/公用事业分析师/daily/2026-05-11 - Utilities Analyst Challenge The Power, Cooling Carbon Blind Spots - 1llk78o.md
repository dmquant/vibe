---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# Utilities Analyst Challenge: The Power, Cooling & Carbon Blind Spots in the Quantum Hardware Basket Thesis

Kind: **daily**
Analyst: **Utilities Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Utilities Analyst]]
- Analyst level: [[行业研究]]

# Utilities Analyst Challenge: The Power, Cooling & Carbon Blind Spots in the Quantum Hardware Basket Thesis

- Board: df93c179-ae75-49d8-8eab-a7054cde6386 · Card 04/08
- Analyst: Utilities Analyst (Power, water, environmental, carbon trading)
- Date: 2026-05-11 (Asia/Singapore)
- Stance: **Deny** (challenge the A-share strategist's microstructure-only audit)
- Prior thesis under challenge: the "executors vs. narrators" split inside the quantum hardware basket can be cleanly traded on order-book and liquidity microstructure within the 48-hour US earnings window, with the A-share hardware spine (688027 / 002281 / 603019) as the preferred vehicle.

> Note on workspace: card-03 report files were not present in the workspace at the time of writing; the challenge is reconstructed from the session brief and the Card-03 summary in conversation context.

## 1. Why a utilities lens belongs here

The prior three cards framed quantum hardware as an AI-beta derivative, scored on order-ARR and float / margin microstructure. None priced the **physical operating envelope** that determines whether "executor" status is durable:

- **Cryogenic power draw.** A single dilution refrigerator (Bluefors XLD-style) sustaining a 100+ qubit superconducting stack pulls **20–35 kW continuous** at the compressor, with PUE typically 1.8–2.4 once helium recovery, dry-air handling and class-1000 cleanrooms are included. A 1,000-qubit-class system is a **>150 kW year-round load** — closer to a small data-center pod than to a server rack.
- **Helium-3 and water dependency.** Closed-cycle dilution units still need make-up He-3 (DOE-allocated, supply-rationed) and chilled water at 6–12 °C. Inland Chinese sites (合肥, 武汉) carry summer chilled-water risk that east-coast US labs do not.
- **Photonic / TFLN paths (QUBT, 光迅) are not power-free.** They trade dilution-fridge load for **pump-laser + temperature-controlled optical bench** load (5–15 kW per rack) plus stringent humidity control. The "narrator vs. executor" axis collapses if you only score order-ARR and ignore the **$/qubit-hour delivered** that utilities cost actually drives.

The strategist's microstructure audit is correct that the **48-hour catalyst** is real. It is wrong to imply the basket can be held past that window without an opex-and-carbon overlay.

## 2. Three concrete challenges to the Card-03 thesis

### Challenge A — "Executor" status is not free; it is a power-bill commitment
RGTI's Novera ARR and QBTS's annealing-as-a-service revenue are **gross** revenue lines. Their cash-conversion is gated by:

1. **Electricity tariff exposure.** US sites (Berkeley, Burnaby BC) sit on industrial tariffs of **US$0.09–0.14/kWh** with demand charges; PJM/CAISO capacity prices have risen materially through 2025–26 as AI data-center load crowds the queue. A 200 kW always-on load is **US$160k–250k/yr** in raw energy plus ~30% in demand charges — non-trivial against sub-$50m ARR runs.
2. **A-share mirror is worse, not better.** 国盾量子 (合肥) and 光迅 (武汉) sit in provinces where **industrial 大工业电价** runs RMB 0.65–0.85/kWh peak after the 2025 时段电价 reform, and where 用水 quotas for chilled-water tower makeup are tightening under the 黄河流域 / 长江流域 取水许可 framework. The "spine" names carry a **structurally higher opex floor** than the US comp set the strategist mapped them against.
3. **The microstructure audit silently assumes opex parity.** It does not.

### Challenge B — Quantum-safe ≠ carbon-safe; the PQC + utility narrative is double-counted
Card-02 lifted 三未信安 (688489) into the "executor" camp on PQC ARR. From a utilities / ESG angle this is partially **double-counted with the green-finance allocator bid** already chasing 国网/南网 PQC retrofits:

- Grid operators (国网 / 南网 / 三大运营商) are the **largest single PQC buyer** in the 2026–2028 procurement cycle, but their CAPEX envelope is set by **NDRC 输配电价 monitoring period 3** caps. PQC spend competes with **特高压 + 新型储能 + 配电网数字化** in the same allowed-revenue pool.
- If you long the PQC "executor" leg AND assume the utilities sector pays for it, you are long both sides of a zero-sum capex allocation. The cleaner pair is **long PQC vendor / short utility-distributor capex beneficiary**, not basket-long both.

### Challenge C — Carbon disclosure asymmetry will bite the A-share spine first
- US peers (IBM, RGTI, QBTS) report Scope 2 under SEC climate rule (final, effective FY2026 large-filer) but quantum loads are buried in R&D.
- A-share spine names face **GB/T 32150 + 上交所自律监管指引第17号(2024修订)** mandatory CSRC ESG disclosure starting 2026 annual reports — meaning the first **forced disclosure of量子实验室能耗强度** lands during the strategist's holding window, not after it.
- This is a **one-way risk**: a clean disclosure is non-news; a high-intensity disclosure is a discrete de-rating event for the "spine."

## 3. What the basket trade should actually look like

The "executors vs. narrators" axis is sound, but it needs a **second axis: opex-and-carbon resilience**. A 2×2 mapping for 2026-05-12/13 holding:

| | Low opex/carbon risk | High opex/carbon risk |
|---|---|---|
| **Executor (orders booked)** | RGTI (Novera modular, lower kW/qubit); 三未信安 (software, near-zero physical load) | QBTS (annealing farm, BC hydro hedge ok but US listing carbon disclosure); 国盾量子 (合肥 chilled-water + 大工业电价) |
| **Narrator (financing-led)** | QUBT (TFLN photonic — *if* pump-laser load disclosed) | 光迅 in the quantum sub-segment only (TFLN line carved out of mature optics — opaque) |

**Recommended overlay vs. Card-03 trade:**
- Keep the long executor / short narrator pair, but **reduce 688027 (国盾量子) weight by ~30%** in the spine leg and rotate into **三未信安 (688489)** or a software-heavy proxy. The spine name carries the only mandatory ESG disclosure event in the window.
- Hedge the basket's residual power-cost beta with a small **long position in 长江电力 (600900) or 国投电力 (600886)** — clean baseload utilities whose 上网电价 captures the AI-and-quantum load build-out the basket is implicitly long. This is the rare case where the **utilities sector is the cleaner long** than the thematic it powers.
- Reject the strategist's implicit claim that 48-hour holding is "post-event safe." The CSRC ESG window is the real Q3 2026 risk, not the US earnings tape.

## 4. Carbon-trading angle (overlooked entirely in Cards 1–3)

- The 全国碳市场 (CEA) opened **2024 第二履约期** with电力行业 only, but **2026 expansion to 建材 + 钢铁 + 有色** is in MEE consultation (closing 2026-06). Data-center / quantum-lab indirect emissions are NOT yet under the cap, but the **Scope 2 disclosure** above creates a glide-path to inclusion by 2028.
- For the basket: this is a **slow-burn negative** for the A-share spine, neutral for software/PQC, and arguably **positive for hydro/nuclear utility pairs** as quantum/AI loads chase low-carbon PPAs (Three Gorges, CGN). Card-03's microstructure-only frame is silent on this entire vector.

## 5. Bottom line on the challenge

The microstructure audit is technically clean but operates on a **two-day horizon while the underlying assets carry quarterly-to-annual opex, water, and disclosure liabilities** the audit does not price. The "executor" tag is not free — it is paid for in megawatts, helium, and (from FY2026) mandatory carbon line-items. The basket is tradable but **only with an opex-and-carbon overlay and a hydro-utility hedge**; without that overlay, the trade is being sold as alpha but is partially a short opex-volatility position the desk did not consent to.

## 6. Handoff

Best next colleague: **energy-analyst** — to size the actual **kW-per-qubit and PPA exposure** for the named hardware spine vs. the US comp set, and stress-test whether the proposed long-utility hedge (长江电力 / 国投电力) is correctly calibrated against the basket's implicit power-cost beta. This sits squarely in the energy / power-generation domain and is the concrete next unanswered question raised by this challenge.

## Citations & data anchors (as of 2026-05-11)
- Bluefors XLD specs; DOE He-3 allocation framework
- NDRC 输配电价监管 monitoring period 3 framework; 工商业 时段电价 reform 2025
- CSRC / 上交所 ESG disclosure 指引第17号 (2024修订), effective 2026 annual report
- MEE 全国碳市场扩围 consultation, 建材/钢铁/有色 (closes 2026-06)
- PJM / CAISO 2026 capacity auction clears (AI data-center crowding) — [date 不明 for final clearing print]
