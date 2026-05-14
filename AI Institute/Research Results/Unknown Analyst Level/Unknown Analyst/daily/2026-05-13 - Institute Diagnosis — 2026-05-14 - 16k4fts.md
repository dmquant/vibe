---
source: ai-institute
resource_type: research-result
report_kind: daily
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Institute Diagnosis — 2026-05-14

Kind: **daily**
Analyst: **(unknown)**

## Links

- Report type: [[daily]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Institute Diagnosis — 2026-05-14

*Window: last 24h · Snapshot generated_at: 2026-05-13T16:00:46.913Z · Diagnostician: Institute L2 advisory*

---

## 1. One-sentence verdict

The institute is **healthy** today — all 54 workflow runs completed, the execution archive shows zero failures and zero salvage markers — but 13 whiteboard cards with no handoff recipient and two semantically dubious `auto_chain_attach` entries warrant operator review.

---

## 2. Key metrics

| Dimension | Value | Note |
|---|---:|---|
| Managed workflows | 224 | Overall |
| Workflow runs (window) | 54 | All completed |
| Pending runs (parked) | 4 | Within tolerance |
| Mailbox threads | 54 | 49 completed / 4 running / 1 failed |
| Auto-handoffs | 54 | 1:1 with threads — autonomous routing intact |
| Whiteboard cards | 147 | 143 completed / 3 running / 1 failed |
| Execution-archive failed / salvage | 0 / 0 | Healthy |
| Events | 286 | workflow.scheduled.completed = 118 |
| Chain nodes / edges / chains | 4837 / 6903 / 63 | auto_nodes=87, auto_memberships=18 |

---

## 3. Anomalies & patterns

1. **13 whiteboard cards have no handoff recipient** (~8.8% of today's 147 cards). Top recipients (tmt-analyst=16, chief-strategist=11, asset-allocator=11) do not look reviewer-skewed, but `(none)` ranking #2 indicates the card template or upstream prompt is failing to declare `handoff_to`. **Confidence: high.**

2. **Mailbox auto-handoff recipients are concentrated**: chief-strategist=12, global-macro=8, ashare-strategist=5. Pure reviewer roles (chief-risk / qa-manager / compliance-officer) **do not appear** today, so the over-routing-to-reviewer pathology is not visible. However, chief-strategist functioning as a steady "aggregation hub" warrants watching for bottleneck risk. **Confidence: medium.**

3. **sentiment-analyst is today's largest mailbox sender (10 messages = 18.5%)**, followed by ashare-strategist=7 and altdata-analyst=6. The high outbound rate suggests the four upstream `topic_pitch_*_sentiment` pipelines each auto-dispatch every artifact — the routing amplifier is high. **Confidence: medium.**

4. **2 failed entries across whiteboard + mailbox** (whiteboard.card.failed events = 5), failure rate ~3.4%. Low absolute count but worth sampling to see whether failures concentrate on a single task template. **Confidence: medium.**

5. **`workflow.scheduled.completed` events = 118 vs. 54 runs**: events ≈ 2.2× runs. Could be each run emitting multiple scheduled.completed events (routine + global secondary confirms), or reruns. Low risk noise, but the "runs in window=54 completed=54" claim should be cross-checked against D1 directly. **Confidence: low.**

6. **Zero execution-archive entries, zero salvage markers**: means no failed-but-archive-worthy runs today. If genuinely no failures, this is a positive signal; if it's a collection-pipeline gap, it would mask problems. Recommend a D1 cross-check. **Confidence: low.**

7. **Two semantically dubious `auto_chain_attach` entries in the chain graph** (see §6.2): `铀 (uranium) → 仪器仪表产业链(upstream)` and `AI电力 → 仪器仪表产业链(upstream)`. Both based on co-occurrence, but with `cooccurrence=4 / chain_total=4 / margin=1` — pure boundary judgments. **Confidence: high.**

8. **大健康/生命健康-style chains show 1.5%–1.8% activation rates** (see §6.1): 275 members with only 4 active. The institute has a structural coverage gap on healthcare/consumer staples chains. **Confidence: high.**

---

## 4. Recommended optimisations (ranked by expected impact)

### 4.1 Tighten `auto_chain_attach` acceptance when chain_margin = 1

- **Target**: `chain_graph_auto_actions` decision module (threshold constants)
- **Suggested change**: When `runner_up_chain_total >= chain_total` AND `chain_margin <= 1.0`, downgrade the candidate to "manual review" instead of executing the attach. Raise `chain_margin_ratio` from 1.5 to 2.0, OR require **both** `tier_dominance_ratio >= 2.0` and `chain_margin_ratio >= 1.5`.
- **Rationale**: The two dubious attachments in §3 #7 (uranium / AI电力 → 仪器仪表产业链) both occurred at chain_margin=1; the same candidate getting attached to 2+ chains simultaneously (e.g. IPP → 公用事业 & 能源设备与服务) is the same root cause.
- **Risk**: Recall drops, so a "pending human review" queue must exist or new nodes will float unattached for too long.

### 4.2 Make `handoff_to` mandatory in the whiteboard card template

- **Target**: Whiteboard card render template (QA-step prompt or the card-finalize prompt)
- **Suggested change**: Append to the card-generation prompt: "The `handoff_to` field MUST be set to an explicit analyst slug; if this card is a terminal conclusion, set it to `(terminal)` rather than leaving it null." Add a finalize-hook check that rejects `handoff_to=null` and forces a retry.
- **Rationale**: §3 #1 — 13 `(none)` cards (8.8%) are today's largest fixable waste: upstream doesn't know who to pass to, downstream can't continue.
- **Risk**: Likely adds 1–2% to short-term card retries, but finalize failures are observable so blast radius is bounded.

### 4.3 Assign explicit owners to four under-covered chains

- **Target**: chain ownership config (chain → primary_analyst mapping)
- **Suggested change**: Assign `大健康产业链` (275 members) and `生命健康和生物科技` (170 members) to healthcare-analyst; `纺织服装产业链` (86) to consumer-analyst; `新华财经-海洋经济产业链` (148) to a joint owner pair (industrials-analyst + materials-analyst) until a specialist appears.
- **Rationale**: §6.1 shows these four chains all have ≤2.7% 30-day activation. `needs_analyst_owner` is false (someone is listed) but `distinct_analysts` is only 2–8 — coverage breadth is too low. Today's mailbox shows healthcare-analyst sending only 2 messages and materials-analyst sending 2 — capacity exists, it just isn't being routed to these chains.
- **Risk**: A hard assignment may temporarily depress hit-rate for the assignees (forced low-SNR coverage); pair with weekly review.

---

## 5. Open questions for the operator

1. Are the 13 `(none)` whiteboard cards intentional "terminal-conclusion, no handoff needed" cases? If so, please surface that as an explicit `terminal` status rather than null; otherwise the card template needs the mandatory field added (§4.2).
2. chief-strategist is simultaneously the top mailbox recipient (12) and a top whiteboard recipient (11). Should we add routing backpressure or split out a chief-strategy-aux role?
3. For the cooccurrence-based boundary attachments like `铀 → 仪器仪表产业链 (upstream)`, do you want the diagnostician to **auto-generate** `operator_override` proposals (candidates only, not executed) into a pending-review queue?

---

## 6. Chain autonomy review

### 6.1 Coverage gaps — Top 5

| Chain | Total members | 30-day active | Activation | Owner missing? | Suggested analyst |
|---|---:|---:|---:|:---:|---|
| 大健康产业链 | 275 | 4 | **1.5%** | No | healthcare-analyst (primary) + consumer-analyst (secondary) |
| 生命健康和生物科技 | 170 | 3 | **1.8%** | No | healthcare-analyst |
| 纺织服装产业链 | 86 | 2 | **2.3%** | No | consumer-analyst |
| 新华财经-海洋经济产业链 | 148 | 4 | **2.7%** | No | industrials-analyst + materials-analyst |
| 新华财经-家装产业链 | 198 | 7 | **3.5%** | No | consumer-analyst |

All five chains have nominal owners but no real depth of coverage. Recommend the owner-reassignment in §4.3.

### 6.2 Recent auto-action audit (most recent 50 entries ≈ 16h window)

**Distribution**
- `auto_promote`: 14 (e.g. 国债, AI 芯片, AI 半导体, 消费信贷, 沪深300, 城投债, 专项债, 人民币, 绿电, 变电站, USD, PCB, CNH, 中概, 10Y 国债)
- `cluster_to_rep`: ~28 (synonym merges)
- `auto_chain_create`: 2 (外汇产业链 rep=USD/JPY; 电力产业链 rep=核电)
- `auto_chain_attach`: ~8
- `operator_override=1`: **0** (no human rollbacks within the sampled window)

**Items worth operator attention**

| # | action | Candidate | Target | Key params | Why flagged |
|---|---|---|---|---|---|
| 1 | auto_chain_attach (id=188) | 铀 (uranium) | 仪器仪表产业链 (upstream) | cooc=4, chain_total=4, runner_up=4, **margin=1** | Semantic mismatch — uranium is a nuclear fuel material, no industrial-chain link to instruments; likely cooccurrence coincidence |
| 2 | auto_chain_attach (id=182/181) | AI电力 | 仪器仪表产业链 / 专用设备制造 (upstream) | seed_cooccurrence=6 | "AI power" weakly related to instruments; short-text cooc trigger |
| 3 | auto_chain_attach (id=184/183) | IPP | 公用事业产业链 & 能源设备与服务产业链 | attached to both chains | margin=1.25; recommend choosing one to reduce noise |
| 4 | cluster_to_rep (id=209) | 商业银行消费贷款 | 消费信贷 | sim=**0.863** (near 0.86 threshold) | Boundary merge; sample to confirm no over-merging |
| 5 | cluster_to_rep (id=222) | 长期国债 | 国债 | sim=**0.862** | Same — long-duration vs. plain Treasuries duration distinction is flattened, which may affect downstream duration-sensitive analysis |

**No `operator_override` observed**: within the sampled window the operator triggered zero rollbacks. This means either (a) the auto-decisions are acceptable, or (b) the operator has not yet reviewed recent auto-actions. Given §3 #7 surfaces two semantically dubious attachments, interpretation (b) is more likely.

### 6.3 One-line verdict

**Chain autonomy module status today: stable but warrants attention.** The promotion/merge mainline behaviour is reasonable and the two `auto_chain_create` events (FX chain, electricity chain) are well-named. However, `auto_chain_attach` at `chain_margin=1` boundaries produced 2 semantically dubious attachments — recommend tightening the threshold (see §4.1).
