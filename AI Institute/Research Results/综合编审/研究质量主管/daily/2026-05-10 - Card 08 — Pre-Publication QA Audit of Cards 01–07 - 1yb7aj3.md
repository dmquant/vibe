---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "综合编审"
content_error: ""
---

# Card 08 — Pre-Publication QA Audit of Cards 01–07

Kind: **daily**
Analyst: **QA Manager**

## Links

- Report type: [[daily]]
- Analyst: [[QA Manager]]
- Analyst level: [[综合编审]]

# Card 08 — Pre-Publication QA Audit of Cards 01–07

- Work date: 2026-05-11 (Asia/Singapore)
- Analyst: qa-manager (Reviewer, trigger d — final pre-publication QA pass on a multi-step thesis)
- Stance: synthesize
- Root question audited: "Should the National Team simultaneously backstop, or selectively abandon — STAR50 = 1.48 vs ChiNext LFP RMB 120 bn?"

## 1. Final grade

**NEEDS REVISION (conditional pass).** The analytical thread (cards 01 → 07) is internally coherent, the numeric chain reconciles within tolerance, the triggers form a closed loop, and the final answer to the root question is clear and defensible. However, the workspace is missing four of seven prior card directories on disk (01, 02, 03, 07), even though `session-brief.md` lists them as live files. This is a publication-blocking deliverable defect even if the content of those cards is preserved in the brief.

## 2. File-completeness audit

| Card | Expected files | On disk | Status |
|------|---------------|---------|--------|
| 01 | report.en.md / report.zh.md / meta.json | **MISSING** | Reconstruct or fail |
| 02 | report.en.md / report.zh.md / meta.json | **MISSING** | Reconstruct or fail |
| 03 | report.en.md / report.zh.md / meta.json | **MISSING** | Reconstruct or fail |
| 04 | report.en.md / report.zh.md / meta.json | Present | OK |
| 05 | report.en.md / report.zh.md / meta.json | Present | OK |
| 06 | report.en.md / report.zh.md / meta.json | Present | OK |
| 07 | report.en.md / report.zh.md / meta.json | **MISSING** | Reconstruct or fail |

Action: BEFORE publication, cards 01/02/03/07 must be re-materialised to disk from their captured content in the session brief. Bilingual consistency for those four cannot be verified line-by-line until the physical files exist.

## 3. Numeric-consistency audit (size of the dual defence line)

| Quantity | Card 02 | Card 03 | Card 04 | Card 05 | Card 06 | Card 07 | Verdict |
|---|---|---|---|---|---|---|---|
| Total package | RMB 50–80 bn | RMB 50–80 bn (sleeve sizing conditional on upper end) | RMB 50–80 bn | Base RMB 50–65 bn / Escalate RMB 80–100 bn / Tighten | RMB 50–100 bn band | inherits | Reconciles |
| STAR50 1.48 defence | RMB 30–45 bn | RMB 30 bn floor, **RMB 35–45 bn preferred** | First-priority sleeve | inherits | inherits | inherits | Minor wording drift between c02 and c03 — flag for cleanup |
| ChiNext / LFP ETF circuit-breaker sleeve | RMB 15–25 bn | RMB 15–20 bn primary; RMB 25 bn only at upper-bound package | RMB 15–20 bn conditional; RMB 25 bn only at RMB 65–80 bn | Tighten path: **RMB 8–12 bn** | inherits | inherits | Closed |
| Tactical reserve | RMB 5–10 bn | RMB 5–10 bn | RMB 5–10 bn | inherits | inherits | inherits | Consistent |
| Redemption pressure being defended | RMB 120 bn (root) | RMB 40–50 bn first leg, sleeve covers 30–63% | inherits | inherits | inherits | inherits | Consistent |
| Gold weight | — | — | — | — | 12–15% baseline | **12–15% baseline / 15–18% stress** | Consistent |
| Long CGB weight | — | — | — | — | hedge sleeve | Cut to **20–25%** if 2-of-3 FX triggers fire | New constraint introduced cleanly |

**Findings:**
- The RMB 30–45 vs RMB 35–45 wording in card 03 is a presentational inconsistency, not a numeric contradiction (35–45 is a subset of 30–45). Recommend the published synthesis use a single canonical range — RMB 30–45 bn floor, with RMB 35–45 bn cited as the preferred sub-range under non-stress baseline.
- All other sleeve sizes reconcile across cards 02 → 06.
- Card 07 introduces the 5–8% notional USD/CNH explicit-hedge overlay; this is additive (not in conflict with cards 02–06's RMB-denominated sizing).

## 4. Trigger-closure audit

The trigger chain is closed end-to-end:
- **Card 05** defines two macro families: "macro bleed" (≥2 of: external-demand shock, export unemployment, second-leg property break, social-financing collapse, cross-border outflows, persistent ≥2 weeks) → escalate to RMB 80–100 bn; "deeper de-capacity" (≥2 of: LFP price war, PPI re-deepening, capacity utilisation <73%, top-tier capex counter-expansion, ChiNext EPS downgrades) → tighten LFP sleeve to RMB 8–12 bn.
- **Card 06** maps each branch to multi-asset rebalancing (rates+gold for bleed; dividend+SOE for de-capacity).
- **Card 07** stress-tests the rates+gold leg with FX triggers: USD/CNH > 7.05 AND CNH-CNY deviation > 600 pt AND 10Y CGB +15 bp over 5 days — any 2-of-3 cuts long-duration CGB to 20–25% and adds 5–8% USD/CNH overlay.
- Card 05's "both fire simultaneously" branch is preserved in card 06 (stabilisation priority) and not contradicted by card 07.

**Verdict:** Closed loop. No orphan triggers, no triggers without an action mapping.

## 5. Root-question recoverability

Cards 01–07 collectively answer the root question as: **NEITHER simultaneous full bailout NOR selective abandonment of ChiNext LFP — instead, an asymmetric dual defence line.** Specifically:
1. STAR50 = 1.48 holds first-priority sleeve (RMB 30–45 bn).
2. ChiNext / LFP gets a conditional circuit-breaker sleeve (RMB 15–20 bn baseline; up to RMB 25 bn only at total-package upper bound; tightened to RMB 8–12 bn under deeper de-capacity).
3. Tactical reserve RMB 5–10 bn.
4. Multi-asset overlay (rates + gold; gold 12–15% / 15–18%, long CGB conditional 20–25%) hedges the macro-bleed branch; FX overlay 5–8% USD/CNH covers the RMB-pressure failure mode.

This answer is recoverable, internally consistent, and directly responsive. The framing explicitly rejects both polar choices in the original prompt.

## 6. Bilingual consistency check

For cards with files on disk (04, 05, 06):
- Numeric tables, sleeve sizes, trigger thresholds, and analyst IDs match across `report.en.md` and `report.zh.md`.
- Tickers, code identifiers, and proper nouns (STAR50, LFP, CGB, USD/CNH, ChiNext) are kept verbatim in both files as required.
- For cards 01/02/03/07 the bilingual consistency check is **PENDING** until those files are re-materialised.

## 7. Editorial findings (non-blocking)

- Card 03 should harmonise the STAR50 floor wording (RMB 30 bn vs RMB 35–45 bn preferred) into a single sentence.
- Card 06's narrative summary in `meta.json` was captured as a copy of the full report header rather than a 120-word abstract — recommend tightening before any external archive export.
- Cards 01–02 meta-summary fields (per session brief) carry stub text echoing the deliverable confirmation line. Re-write to a true 120-word abstract before archival.

## 8. Recommended action before publication

1. **Re-materialise** card-01/02/03/07 files to disk (P0 — blocks publication).
2. **Harmonise** the STAR50 sleeve wording across cards 02 / 03 / 04 (P1 — narrative).
3. **Rewrite** stub `summary` fields in card-01/02/06 `meta.json` to true abstracts (P2 — archival hygiene).
4. After fixes, re-run a bilingual diff on cards 01/02/03/07 and confirm numeric tables match.

Once items 1–2 are complete, the thread is publication-ready and the conditional NEEDS-REVISION upgrades to PASS.
