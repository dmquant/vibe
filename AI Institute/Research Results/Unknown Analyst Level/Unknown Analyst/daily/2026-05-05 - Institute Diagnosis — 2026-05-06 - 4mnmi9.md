---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Institute Diagnosis — 2026-05-06

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Institute Diagnosis — 2026-05-06

*Source: `fleet_health.md` (generated_at: 2026-05-05T16:00:53.590Z, window: trailing 24h)*

---

## 1. One-sentence verdict

The institute is **healthy but watch-listed**: 38/38 workflow runs completed with zero failures, but three structural skews warrant attention — a backlog of 26 parked pending runs, tmt-analyst absorbing 26% of all auto-handoffs, and 38 whiteboard cards with no handoff recipient.

## 2. Key metrics

| Metric | Value | Note |
|---|---:|---|
| Managed workflows | 215 | Total managed surface |
| Runs in window | 38 (completed=38) | 100% completion |
| **Pending runs (parked)** | **26** | High vs. 38 completed |
| Mailbox threads | 102 (auto-handoffs=102) | 100% auto-handoff |
| Whiteboard cards | 165 (completed=136, running=29) | 3 failed (event layer) |
| Pending adhoc dispatches | 0 | Healthy |
| Execution-archive entries | 0 (failed=0, salvage=0) | No fault archiving |
| Events | 241 | `whiteboard.card.failed=3` |

---

## 3. Anomalies & patterns

1. **26 pending runs is high relative to the 38 completed today — confidence: medium**
   - Evidence: `At a glance` reports `Pending runs (parked, awaiting terminal): 26`, ~68% of the day's completed volume; concurrently 0 adhoc dispatches are parked.
   - Why it matters: parked runs not finalised within ~2h occupy whiteboard/mailbox cursors and can block the next scheduling cycle.
   - Caveat: the snapshot does not surface age distribution for the parked runs, so we cannot tell if these are fresh-today or carry-over. Operator confirmation needed.

2. **tmt-analyst is over-concentrated as auto-handoff recipient (27/102 ≈ 26.5%) — confidence: high**
   - Evidence: `Auto-handoff recipients` shows tmt-analyst=27, then global-macro=11 and china-macro=11; tmt-analyst is ~2.5× the runner-up.
   - Why it matters: single-point overload — if tmt-analyst stalls or fails, ~1/4 of institute traffic backs up on a single hand.
   - Companion observation: senders thematic-researcher (20) + altdata-analyst (16) + sentiment-analyst (9) = 45 — three pipelines all funnel into one TMT sink.

3. **38 whiteboard cards have no handoff recipient (38/165 ≈ 23%) — confidence: high**
   - Evidence: `Handoff recipient distribution` top row `(none) 38`.
   - Why it matters: those cards are either legitimate terminals or "dead-end" cards that failed to declare downstream. 23% of all cards being unrouted is a high share.
   - Implication: the whiteboard-emit prompt likely lacks a strong constraint requiring an explicit handoff or an explicit terminal marker.

4. **17 workflow runs have `workflow_kind=(none)` — confidence: high**
   - Evidence: `By workflow_kind` shows routine=20, (none)=17, global=1. ~45% of runs lack a kind.
   - Why it matters: missing taxonomy distorts downstream aggregations (e.g. routine vs. ad-hoc health comparisons).
   - Nature: data/schema hygiene, not capacity.

5. **Whiteboard reviewer handoffs (qa-manager 9 + chief-risk 8 = 17, ~10%) are within bounds — confidence: medium**
   - Evidence: `Handoff recipient distribution` lists qa-manager=9, chief-risk=8; compliance-officer absent.
   - Reading: reviewer share is ~10%, below the typical "over-routing" threshold (>20%). This is normal QA load and **does not warrant intervention now**, but should be tracked as a baseline.

6. **Salvage markers = 0 alongside 0 archived failures conflicts with `whiteboard.card.failed=3` — confidence: medium**
   - Evidence: `Execution-archive entries: 0 (failed: 0, salvage markers: 0)`, while the events layer reports `whiteboard.card.failed=3`.
   - Tension: the event layer captured 3 card failures but the archive layer recorded none. Either the archive pipeline is dropping events, or `card.failed` is by design not archived.
   - Implication: operator should clarify the contract between events and execution-archive.

7. **100% completion but 29 whiteboard cards still running at window close — confidence: low**
   - Evidence: cards completed=136, running=29; 17.6% still in flight at snapshot time.
   - Reading: could be legitimate long-running cards spanning the window; cannot disambiguate from a single snapshot.

## 4. Recommended optimisations (top 3 by expected impact)

### Recommendation 1 — Diversify TMT handoff destinations
- **Target**: mailbox auto-handoff routing prompt (handoff-decision section in chief-strategist / thematic-researcher / altdata-analyst).
- **Suggested change**: add to the handoff-decision prompt: "If the same hand has received ≥3 handoffs from this sender in the past 6h, prefer an equivalent secondary recipient (e.g. for TMT topics, fan out to thematic-researcher itself, sector-level analysts, or chief-strategist)." If recent-routing visibility is unavailable system-side, hardcode a 2–3-recipient pool for TMT-flavoured content.
- **Rationale**: tmt-analyst single-point concentration of 26.5% (§3.2); thematic / altdata / sentiment all converge there.
- **Risk**: diversion may land on less-prepared hands and degrade downstream quality; observe downstream completion rate for 1–2 windows after rollout.

### Recommendation 2 — Force explicit downstream declaration on whiteboard cards
- **Target**: `whiteboard.card_emit` template (system prompt at card-write time).
- **Suggested change**: make `handoff_recipient` a required field in the card schema and admit a sentinel value `__terminal__` for cards that genuinely close out a thread. Add to the prompt's tail: "If this card has no downstream, you MUST set `__terminal__` rather than leaving it empty."
- **Rationale**: 38/165 = 23% cards have no handoff (§3.3); the snapshot cannot distinguish dead-ends from terminals.
- **Risk**: small token-cost increase per card; legacy templates that legitimately had terminal cards need a one-off backfill.

### Recommendation 3 — Backfill and enforce `workflow_kind`
- **Target**: workflow registry / `workflow_kind` default-value logic.
- **Suggested change**: set `workflow_kind` default to `routine` at registration time (or fail the registration with an explicit validation error), and run a one-off backfill across the 17 currently-(none) task_keys. Add a non-null check on the D1 write path.
- **Rationale**: 17/38 = 45% of runs lack kind (§3.4); pure metadata hygiene that distorts future diagnosis dimensions.
- **Risk**: a wrong default (treating ad-hoc as routine) could distort future diagnoses; backfill first, then enable strict validation.

## 5. Open questions for the operator

1. What is the age distribution of the 26 pending runs? Are any >2h old and stuck, requiring manual intervention? The snapshot cannot tell us.
2. Are `card.failed=3` events meant to flow into the execution-archive, or is `card.failed` deliberately excluded from archiving? Need to clarify the contract.
3. Is the 26.5% tmt-analyst concentration today's true business mix ("a TMT-heavy day"), or is it a systemic prompt-routing bias? What is the historical baseline?
