---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Institute Diagnosis — 2026-05-13

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Institute Diagnosis — 2026-05-13

*Snapshot generated at: 2026-05-12T16:00:13.629Z · Window: last 24h*

---

## 1. One-sentence verdict

The institute is **healthy** today — all 26 workflow runs completed with zero failures and zero salvage markers — but whiteboard and mailbox routing is skewing heavily toward reviewer/strategist roles, and 4 parked pending runs deserve watch-listing.

---

## 2. Key metrics

| Metric | Value |
|---|---:|
| Managed workflows | 224 |
| Runs in window | 26 (completed=26, failed=0) |
| Pending runs (parked) | **4** |
| Mailbox threads (auto-handoffs) | 25 (completed=24, running=1) |
| Pending adhoc dispatches | 0 |
| Whiteboard cards | 72 (completed=70, running=2) |
| Whiteboard sessions | 9 |
| Events | 106 |
| Execution-archive (failed / salvage) | 0 / 0 |

---

## 3. Anomalies & patterns

1. **Auto-handoff recipients heavily concentrated on the strategist tier** (confidence: **high**)
   - Evidence: of 25 auto-handoffs, `ashare-strategist` 7 + `chief-strategist` 7 = **56%** flow to two strategists; `tmt-analyst` and `global-macro` 4 each, so 88% lands on just 4 roles.
   - Why it matters: strategists risk becoming a bottleneck, and front-line analysts (macro/sector/equity-strategy) are not being treated as primary downstream consumers — the QA-step or routing rules appear to over-route to "synthesizers".

2. **Whiteboard handoffs lead with `(none)`** (confidence: **high**)
   - Evidence: in whiteboard handoff recipient distribution, `(none)` = 8 cards ranks first, ~11% of the 72 completed cards.
   - Why it matters: those cards close without declaring a downstream receiver, so information silently terminates at the whiteboard layer.

3. **Whiteboard handoffs also load `chief-risk` (4)** (confidence: **medium**)
   - Evidence: whiteboard recipients include `chief-risk` (4) and `chief-strategist` (4), mirroring the mailbox concentration.
   - Why it matters: reviewer roles (risk/strategist) are being loaded on both the whiteboard and the mailbox channels simultaneously. If the QA-step template default-cc's these roles, concentration is amplified.

4. **4 parked pending runs did not converge inside the window** (confidence: **medium**)
   - Evidence: `Pending runs (parked, awaiting terminal): 4`, while execution-archive shows zero failures / zero salvage.
   - Why it matters: these runs have completed their core step but not closed the terminal chain — likely held by the 1 running mailbox thread + 2 running whiteboard cards. Verify whether they self-resolve in the next window.

5. **`task_key` distribution is highly homogeneous — dominated by `topic_pitch_*`** (confidence: **medium**)
   - Evidence: at least 14 of 26 runs are `topic_pitch_*` (overnight / morning / premarket / midday / intraday / close / postclose), each appearing exactly once.
   - Why it matters: today's output is almost entirely pitch/newsflow-style; deeper task families (sector deep-dives, valuation, portfolio) are absent. This is a capacity-mix signal, not a fault.

6. **`salvage_marker_window = 0`, `failed = 0`** (confidence: **high**)
   - Evidence: execution-archive 0/0.
   - Why it matters: positive signal — no dropped declared output files or failures this window; prompt layer is currently stable.

---

## 4. Recommended optimisations (ranked by expected impact)

### 4.1 Tighten QA-step / mailbox routing to reduce over-concentration on strategists
- **Target**: `<system component: auto-handoff QA-step prompt>` and the mailbox routing rule.
- **Suggested change**: add a constraint to the QA-step template — "when the topic is a single industry / single sector, hand off by default to the corresponding front-line sector/industry analyst; escalate to `chief-strategist` / `ashare-strategist` / `chief-risk` only for cross-sector synthesis or risk topics." Cap the combined `chief-strategist + ashare-strategist` daily handoff share at ≤ 35%.
- **Rationale**: see §3.1 and §3.3 — two strategists absorb 56% of flow.
- **Risk**: if analyst coverage gaps or classifier errors occur, front-line analysts may be misrouted and synthesis topics may be missed. Keep a "fallback to strategist when unclassified" safety net.

### 4.2 Require whiteboard cards to declare a downstream recipient (eliminate `(none)`)
- **Target**: `<system component: whiteboard card schema / closing-step prompt>`.
- **Suggested change**: in the whiteboard closing-step, change `handoff_recipient` from optional to **required**; allow only `archive` (explicit no-downstream sentinel) or a named role. If the model fails to declare it, the closing step should fail loudly rather than silently pass.
- **Rationale**: §3.2 — `(none)` 8/72 = 11% silent breakage.
- **Risk**: short-term increase in closing-step failures and manual `archive` labelling. Ship as a soft warning for one window before enforcing.

### 4.3 Add a "parked > N hours" soft alert for pending runs
- **Target**: `<system component: pending-run watcher>`.
- **Suggested change**: for runs in parked state with `created_at` > 2h, list their IDs separately in the next fleet-health, along with the blocking sub-component (running mailbox thread / running whiteboard card), so the diagnostician can localise.
- **Rationale**: §3.4 — 4 parked runs + 1 running thread + 2 running cards, but IDs are not surfaced in the current snapshot.
- **Risk**: low noise risk; requires a worker-side schema change, not a prompt change.

---

## 5. Open questions for the operator

1. What are the IDs of the 4 parked pending runs? Do they correspond to the 1 still-running mailbox thread and 2 still-running whiteboard cards? Can the next fleet-health expose these IDs?
2. Do the current QA-step / auto-handoff templates have explicit rules for when to escalate to `chief-strategist` / `ashare-strategist`? If so, were they edited recently in a way that could explain the rising concentration?
3. Today's tasks are almost entirely `topic_pitch_*`. Does this reflect the scheduled plan itself, or are deeper task families (sector research, portfolio rebalancing) being silently skipped?
