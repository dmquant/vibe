---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Institute Diagnostics Report — 2026-05-03

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Institute Diagnostics Report — 2026-05-03

*Snapshot basis: Fleet Health Snapshot — 2026-05-02 (generated_at: 2026-05-01T16:00:27.644Z)*
*Author: institute-diagnostician · Advisory output only — no system state is mutated*

---

## 1. One-sentence verdict

The institute is **operational but carries two structural warnings**: whiteboard handoffs are over-routing to reviewer-class roles (chief-risk at #2 with 17 cards; qa-manager at 7), and roughly 10.5% of whiteboard cards are completing with no handoff recipient — both patterns call for prompt-layer correction.

---

## 2. Key metrics

| Metric | Value | Notes |
|---|---:|---|
| Managed workflows | 215 | — |
| Runs in window | 56 | All completed |
| Pending runs (parked) | 12 | Age unknown — needs confirmation |
| Mailbox threads (window) | 138 | All auto-handoffs |
| Mailbox completed / failed / running | 134 / 2 / 2 | Failure rate 1.4% |
| Whiteboard sessions / cards | 25 / 191 | — |
| Whiteboard cards completed / failed / running | 189 / 1 / 1 | Failure rate 0.5% |
| Whiteboard cards with no recipient | 20 | 10.5% of total cards |
| Execution-archive failures / salvage markers | 0 / 0 | No model-layer anomalies |

---

## 3. Anomalies & patterns

### A1 — Whiteboard handoffs over-routing to chief-risk (confidence: HIGH)

**Observed:** In the whiteboard handoff recipient distribution, chief-risk ranks #2 with 17 cards — second only to the "(none)" bucket of 20. qa-manager adds another 7 cards. Together, the two reviewer roles account for roughly 17% of visible whiteboard dispatches. Meanwhile, primary fundamental analysts — china-macro, materials-analyst, agri-analyst, equity-strategy — are entirely absent or negligible in the whiteboard recipient list.

**Why it matters:** chief-risk and qa-manager are reviewer-class roles; they should not be the dominant initial recipients of whiteboard cards. This distribution is the canonical signal described in the diagnostic framework: the QA-step prompt is over-triggering reviewer routing, likely causing backlog on the reviewer side and creating gaps in the primary-analyst research chain.

**Cross-reference:** In the mailbox auto-handoff table, chief-risk sits at rank #5 with 9 threads (~6.5% of mailbox dispatches). The whiteboard over-routing ratio is nearly double.

---

### A2 — 20 whiteboard cards completed with no handoff recipient (confidence: HIGH)

**Observed:** 20 out of 191 whiteboard cards (10.5%) have `(none)` in the handoff recipient field — this bucket sits at the very top of the whiteboard recipient distribution table.

**Why it matters:** Cards completed without a handoff recipient represent research whose conclusions are unlikely to be acted on. If this rate persists, the cumulative loss of research throughput compounds over time. It also makes it impossible to distinguish "deliberate no-handoff" from a prompt that simply forgot to populate the field.

---

### A3 — 2 mailbox thread failures; 2 threads still running (confidence: MEDIUM)

**Observed:** 2 of 138 mailbox threads are in `failed` status (1.4% failure rate); 2 more are in `running` status. The snapshot does not surface the thread IDs, sender identities, or error summaries for the failed threads.

**Why it matters:** A 1.4% failure rate is not alarming in isolation, but if both failures originate from the same sender it indicates a systematic prompt defect. The 2 running threads may be stuck if they have been active for more than ~2 hours; without timestamps the diagnostician cannot determine this.

---

### A4 — 12 pending workflow runs with unknown age (confidence: MEDIUM)

**Observed:** The snapshot reports 12 runs in a parked / awaiting-terminal state. No creation timestamps are included in the snapshot.

**Why it matters:** Any run parked for more than 2 hours without a terminal outcome is anomalous. These could be waiting for a manual trigger (expected) or genuinely stalled (a problem). The diagnostician cannot differentiate without age data.

---

### A5 — daily_meetup ran 9 times vs. 1 run for all other tasks (confidence: LOW / informational)

**Observed:** Of 56 workflow runs, daily_meetup accounts for 9 — every other task_key appears exactly once.

**Why it matters:** If daily_meetup is designed as a single-per-day workflow, 9 runs suggest duplicate trigger configurations. If it is designed as a multi-round session, this is expected. Operator confirmation is needed.

---

### A6 — 5 runs with no workflow_kind tag (confidence: LOW)

**Observed:** 5 of 56 runs carry a `(none)` workflow_kind; 1 is tagged `global`.

**Why it matters:** Missing kind tags reduce the precision of monitoring aggregations. These may be ad-hoc or misconfigured workflows. If unintended, the underlying workflow definitions should be audited for the `kind` field.

---

### A7 — Mailbox vs. whiteboard recipient distribution divergence (confidence: MEDIUM)

**Observed:** Mailbox auto-handoff recipients are dominated by primary analysts — tmt-analyst (25), china-macro (23), global-macro (20). Whiteboard handoff recipients show a strikingly different pattern: china-macro does not appear in the top-15 at all, global-macro has only 7 cards, yet chief-risk (17), chief-strategist (10), and qa-manager (7) are prominently placed.

**Why it matters:** The two dispatch mechanisms appear to be routing the same research topics to structurally different audiences. Mailbox signals are reaching front-line analysts; whiteboard follow-ups are leaking to the review layer. This risks breaking the research chain — insights generated by whiteboard sessions may not reach the analysts best positioned to act on them.

---

## 4. Recommended optimisations

### Optimisation 1 — Tighten routing criteria in the whiteboard QA step (addresses A1, A7)

**Target:** `whiteboard:qa_step`

**Suggested change:** Add an explicit routing decision rule to the whiteboard QA-step prompt. The rule should specify that chief-risk or qa-manager should be selected as the handoff recipient **only** when the card output involves risk-exposure quantification, compliance review, or cross-asset hedging decisions. For industry research, thematic tracking, and data interpretation cards, the default handoff should go to the appropriate primary analyst (e.g., tmt-analyst, china-macro, consumer-analyst, energy-analyst). Enumerate the triggering conditions for reviewer routing as a short list so the model cannot default to reviewer roles when uncertain.

**Rationale:** chief-risk receiving 17 whiteboard cards — nearly double its proportional mailbox share — is precisely the "QA-step over-routing" pattern the diagnostic framework flags. The fix belongs in the prompt, not in post-hoc filtering.

**Risk:** If the routing conditions are set too narrowly, cards that genuinely warrant risk review may miss chief-risk. Recommend validating against a batch of ~20 historical cards before full rollout.

---

### Optimisation 2 — Enforce a non-null handoff recipient at whiteboard card completion (addresses A2)

**Target:** `whiteboard:card_completion_step`

**Suggested change:** Add a mandatory instruction to the card completion step prompt: "Before marking a card `completed`, you must specify a `handoff_recipient`. If no follow-up routing is genuinely required, write `none-deliberate` (an explicit deliberate no-route). Do not leave the field blank." This disambiguates an intentional no-route from a forgotten field, enabling accurate monitoring of true null-handoff rates going forward.

**Rationale:** The current 20-card blank-recipient count (10.5%) conflates oversight with business intent. A non-null policy with a sentinel value (`none-deliberate`) gives the monitoring layer a reliable signal.

**Risk:** Some card types (e.g., pure data archival) may legitimately never need routing. Consider exempting specific card_type categories from the mandatory-field rule to avoid unnecessary friction.

---

### Optimisation 3 — Enrich snapshot output to surface failed thread identities (addresses A3)

**Target:** `mailbox:monitoring_alert` (snapshot generation layer)

**Suggested change:** Request that the next fleet-health snapshot generation include a supplementary table listing the thread_id, sender, and a brief error summary (≤50 chars) for each failed thread. This is a monitoring-output change, not a prompt change. In the short term, the operator should manually query the 2 failed threads to determine whether both failures share a common sender — if they do, that sender's prompt requires investigation.

**Rationale:** The current snapshot provides no actionable information about the 2 failures beyond their count. Without sender attribution, the diagnostician cannot rule out a systematic prompt defect.

**Risk:** If failures are random transient errors (e.g., API timeouts), this enrichment adds no operational risk and only improves observability.

---

## 5. Open questions for the operator

**Q1:** What is the age of the oldest of the 12 parked workflow runs? Are any of them more than 2 hours old without a terminal outcome? If so, are they waiting on a manual trigger, or have they genuinely stalled? *(relates to A4)*

**Q2:** Who are the senders of the 2 currently-running mailbox threads, and how long have they been in flight? Do their runtimes exceed normal processing windows for those senders' workflows? *(relates to A3)*

**Q3:** Is daily_meetup designed to run multiple rounds per day (e.g., multi-timezone or iterative), which would make 9 runs expected? Or is it intended as a once-per-day workflow, in which case a duplicate trigger configuration should be investigated? *(relates to A5)*
