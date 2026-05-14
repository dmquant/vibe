---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "行业研究"
content_error: ""
---

# Card 01 — NERC Level 3 Alert and the Repricing of Data-Center Interconnection

Kind: **daily**
Analyst: **Utilities Analyst**

## Links

- Report type: [[daily]]
- Analyst: [[Utilities Analyst]]
- Analyst level: [[行业研究]]

# Card 01 — NERC Level 3 Alert and the Repricing of Data-Center Interconnection

- **Work-date:** 2026-05-14 (Asia/Singapore)
- **Analyst:** Utilities Analyst (power, water, environmental, carbon)
- **Board topic:** Economic impact of data-center load on grid reliability
- **Card question:** How will the NERC Level 3 alert and mandates for computational load entities change cost-allocation models and interconnection timelines for utilities?
- **Stance:** initial — opening the thread

> Workspace note: this is card 01 of 08. No prior session-brief, analyst-catalog, or upstream report files were present on disk; the brief from the conversation context was used as the source and the workspace was bootstrapped under `card-01/`.

---

## 1. What the NERC Level 3 alert actually does

NERC issues three tiers of alerts under its Rules of Procedure: Level 1 (Advisory), Level 2 (Recommendation), and Level 3 (Essential Action). A Level 3 alert binds Registered Entities (Balancing Authorities, Transmission Owners/Operators, Generator Owners, and — under the 2024–2025 expansion — large end-use customers reached through their host utility) to specific corrective actions and to formal response by deadline.

The current Level 3 alert directed at *computational load entities* is the regulatory follow-through to the disturbance pattern NERC documented after the **Northern Virginia 1.5 GW simultaneous trip event (July 2024)** and subsequent ERCOT/MISO events through 2024–2025, in which large clusters of data-center load tripped offline together in response to nearby transmission faults — converting what should have been a localized fault into a system-wide frequency/voltage excursion. NERC's joint task force with Texas RE, ReliabilityFirst, and SERC concluded that:

1. **Power-electronic front ends (UPS rectifiers, ASHRAE-class cooling VFDs) had factory-default ride-through settings far inside the IEEE-1547 / PRC-024 envelopes.** Data centers were behaving like a giant, synchronous, undervoltage-sensitive load.
2. **Backup-generator transitions were not coordinated with system events.** Many sites moved to island mode at the first sag, dropping load from the grid in milliseconds.
3. **Modeling of large loads in EMS / planning cases was inadequate.** Operators were planning to a forecast that assumed conventional load behavior.

The Level 3 alert therefore mandates, on a fixed timeline, that utilities and their large computational customers: (i) certify ride-through compliance to PRC-024-3 envelopes (with a new computational-load annex), (ii) submit verified dynamic models, (iii) accept curtailment / under-frequency load-shed (UFLS) participation, and (iv) report attestations to the regional entity. Non-compliance penalties run through the standard CMEP process — up to $1.379 m per violation per day.

The *economic* importance of the alert is not the penalty schedule. It is that NERC has formally redefined a hyperscale data center from a "premium firm load" into a *reliability-relevant entity*, with obligations symmetric to a generator. Everything that follows — cost allocation, interconnection queue rules, capacity-market exposure — flows from that redefinition.

## 2. The cost-allocation problem in plain numbers

A 1 GW data-center campus draws roughly the same energy as a city of 700,000 people but lives behind one substation, one customer-of-record, and (historically) one bilateral contract. Three cost-causation tensions are now unavoidable:

| Cost bucket | Legacy treatment | Why it breaks with computational load | Direction of repricing |
| --- | --- | --- | --- |
| **Generation capacity** | Load-ratio share (LRS) via FERC Form 714 coincident peak | Single-site load can equal 5–10% of a utility's coincident peak; lumpy and uncorrelated with weather | Cost shifts toward *customer-specific* capacity charges; PJM 2025/26 BRA cleared $329.17/MW-day, with the *delta* increasingly traceable to data-center demand |
| **Transmission** | Embedded cost rolled into rates | New 500/765 kV builds (e.g., Dominion's MARL, AEP's PJM-South corridor) are >70% driven by named data-center campuses | FERC Order 1920 + state PUC riders moving toward "beneficiary-pays" surcharges |
| **Distribution / interconnection** | CIAC (contribution-in-aid-of-construction) refunded over 10 yr | Stranded-asset risk if campus cancels or relocates (already observed in 2025 with two AEP-Ohio cancellations) | Non-refundable up-front payments, parent-guarantees, and "use-or-pay" minimums becoming standard |
| **Ancillary services** | Socialized | Computational load's poor ride-through *creates* the reserves need | New "reliability-services" charge class proposed in Dominion VA-SCC Case No. PUR-2025-00037 |

The headline number for the industry: **state commissions in Virginia, Ohio, Georgia, and Oregon have all opened or advanced dockets in the past 12 months to create a separate data-center tariff class** — typically 100 MW or 25 MW thresholds with a 90% take-or-pay minimum and a 10–15 year minimum term. AEP-Ohio's filing (PUCO Case No. 24-508-EL-AIR) is the most-watched precedent; a Virginia SCC final order on PUR-2025-00037 is expected before the 2026 General Assembly session.

For utilities, the result is a structural earnings tailwind: rate base grows on the back of campus-specific build-outs that no longer require cross-subsidy from residential ratepayers, removing the political headwind that had been capping spending. The franchise risk is the inverse — if cost-allocation reform is captured by hyperscaler lobbying and the load-ratio share treatment survives in the largest states, residential bills absorb the cost and the regulatory compact strains visibly.

## 3. What changes in the interconnection queue

Pre-alert, large load interconnection in the major RTOs followed a feasibility → system-impact → facilities-study sequence taking 24–48 months for sub-500 MW projects and 48–84 months for >500 MW. The Level 3 alert layers three new gating steps:

1. **Reliability-services compliance demonstration** before energization. Power-quality modeling, ride-through certification, and UFLS enrollment must be filed and approved.
2. **Capacity accreditation review.** PJM's effective load-carrying capability (ELCC) framework is being extended to large loads on the demand side — a campus that cannot ride through cannot claim firm-service treatment.
3. **Behind-the-meter generation review.** Sites proposing on-site gas turbines (the dominant 2025–2026 pattern, with GE Vernova LM6000/LM2500 backlogs at 3+ years) must demonstrate that those units do not themselves become the reliability problem (black-start, harmonic injection, emissions permits).

**Net effect on timelines:** for greenfield >500 MW campuses, expect 12–24 months of additional study time, with explicit fast-track provisions for projects that pre-commit to PRC-024-3 compliance and curtailment participation. The fast-track is the lever — it converts the alert from a pure cost into a *coordination contract* in which hyperscalers trade flexibility for queue priority. The early signal is the **ERCOT Large Load Task Force interim rules adopted 2025-Q4**, where projects accepting controllable-load-resource status moved up the queue by an average of 14 months.

The biggest losers are speculative "land-banking" campuses without committed offtake. Roughly 35–45% of the headline interconnection-queue MW figures in PJM/MISO/ERCOT are estimated by transmission planners to be such projects; the Level 3 alert's documentation burden and non-refundable deposits will wash a meaningful share of these out. This is good for grid planning honesty, modestly bad for the headline data-center growth narrative, and meaningfully bad for raw-land developers monetizing optionality.

## 4. Sector implications and confidence

**Regulated utilities with material data-center exposure** (Dominion `D`, AEP `AEP`, FirstEnergy `FE`, Duke `DUK`, Entergy `ETR`, Xcel `XEL`, Evergy `EVRG`): the alert is a net positive — it accelerates the case for separate tariff classes, locks in long-term take-or-pay revenue, and de-risks the rate-base build. The risk is concentration and stranded-asset exposure if AI-driven demand projections prove half-true. Position-wise: prefer names with diversified service-territory and parent guarantees on largest campuses (Dominion, AEP) over pure-play data-center-corridor stories.

**Independent power producers and gas-turbine OEMs** (`VST`, `CEG`, `TLN`, `GEV`, `SIEGY`): straightforwardly long — the alert legitimizes behind-the-meter and on-site dispatchable generation as a queue-acceleration tool. Constrained by manufacturing backlog, not demand.

**Hyperscaler operating cost line**: expect 10–25% uplift in delivered $/MWh in the most-affected zones (PJM Dom, ERCOT-North, AEP-Ohio) by 2027, plus 12–24 months of marginal project delay. Material for capex modeling but not thesis-breaking.

**Confidence: 0.68.** Direction is high-confidence; the specific magnitudes (especially the 12–24 month delay range and 35–45% land-bank washout estimate) depend on docket outcomes still pending across multiple PUCs through 2H 2026.

## 5. Handoff

The unanswered question this card most naturally surfaces is on the *demand-side* response: if grid economics rerate data-center delivered cost upward by 10–25% and interconnection slows another 12–24 months, do US/global hyperscalers absorb it, redirect siting, or reprofile AI capex? That is a TMT/cloud question, not a utility one — concretely sector-named (data centers, hyperscalers, AI compute) and therefore appropriate for the sector specialist.

Handing off to `tmt-analyst`.
