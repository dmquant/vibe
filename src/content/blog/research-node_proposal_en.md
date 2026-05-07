---
title: "Industry Chain + Knowledge Graph Proposal"
description: "A specification describing the full impact of introducing a chain/KG layer across every part of the AI Institute project."
pubDate: "2026-05-04"
category: "research"
lang: "en"
---

Proposal: Industry Chain + Knowledge Graph for the AI Institute
A spec describing the full impact of introducing a chain/KG layer across every part of the project. Written so you can decide what to keep, cut, or defer.

1. Premise
Today the institute has rich semantic memory (Vectorize) and rich rule-based dedup (content_hash, similarity gate). It has no structured representation of the world it researches — no concept of "TSMC is upstream of NVDA," no concept of "this whiteboard card mentions AAPL." Every reasoning chain has to be re-derived from prose by an LLM.

Introducing a graph turns the institute from a document-oriented research system into a document + entity + relationship system. That's a meaningful step up in what's queryable and what's automatable.

2. What changes conceptually
Today's primitives	After this proposal
Analyst, Workflow, Session, Card, Fact_card, Bilingual_pair, Topic_pool entry	All of the above plus Graph_node (entity), Graph_edge (relationship), Mention (typed link from artifact → node)
"What did the institute say?" → cosine search over Vectorize	"What did the institute say?" + "about which entities?" + "and what's adjacent?"
Analyst is a role	Analyst is a role + a default coverage scope (set of nodes / chains they own)
Coverage is implicit (whatever analysts pitched)	Coverage is explicit (gaps surface as low-priority pool entries)
This is conceptually the biggest shift. The graph is not "another data source" — it's a new primitive type that all existing primitives now refer to.

3. Data model changes
3.1 New D1 tables
-- 0017_graph.sql

CREATE TABLE chain_nodes (
  node_id              TEXT PRIMARY KEY,            -- stable id, e.g. "us:NVDA", "cn:600519", "concept:HBM"
  kind                 TEXT NOT NULL,               -- 'company' | 'product' | 'material' | 'segment' | 'category' | 'concept' | 'kpi'
  name                 TEXT NOT NULL,               -- canonical display
  name_en              TEXT,                        -- bilingual sibling
  symbol               TEXT,                        -- ticker if kind=company
  description          TEXT,                        -- 1-3 sentence blurb
  primary_chain        TEXT,                        -- e.g. "AI-infra" or "电子信息产业链"
  all_chains_json      TEXT,                        -- JSON array of all chains the node sits in
  segment              TEXT,                        -- 'upstream' | 'midstream' | 'downstream' | null
  source_dataset       TEXT NOT NULL,               -- 'us-watchlist' | 'us-aikg' | 'cn-graphrag' | 'institute-derived'
  vector_id            TEXT,                        -- Vectorize id once embedded
  created_at           INTEGER NOT NULL,
  updated_at           INTEGER NOT NULL
);

CREATE INDEX idx_chain_nodes_symbol ON chain_nodes (symbol) WHERE symbol IS NOT NULL;
CREATE INDEX idx_chain_nodes_kind   ON chain_nodes (kind, primary_chain);

CREATE TABLE chain_edges (
  edge_id              TEXT PRIMARY KEY,
  source_node_id       TEXT NOT NULL,
  target_node_id       TEXT NOT NULL,
  edge_type            TEXT,                        -- '产品' | '应用' | '原材料' | '包含' | '服务' | 'tmp' | null
  edge_type_certain    INTEGER NOT NULL DEFAULT 1,  -- 0 for 'tmp'/blank from the China-side raw
  description          TEXT,                        -- e.g. "MDA + 光气 -> 粗MDI"
  impact_weight        REAL,
  source_dataset       TEXT NOT NULL,
  created_at           INTEGER NOT NULL,
  UNIQUE (source_node_id, target_node_id, edge_type)
);

CREATE INDEX idx_chain_edges_source ON chain_edges (source_node_id);
CREATE INDEX idx_chain_edges_target ON chain_edges (target_node_id);

CREATE TABLE node_aliases (
  alias_id             TEXT PRIMARY KEY,
  node_id              TEXT NOT NULL,
  alias                TEXT NOT NULL,               -- "TSMC", "台积电", "Taiwan Semi" all → us:TSM
  alias_lang           TEXT,                        -- 'en' | 'zh' | null
  alias_kind           TEXT,                        -- 'name' | 'ticker' | 'shortname' | 'colloquial'
  UNIQUE (alias, node_id)
);

CREATE INDEX idx_node_aliases_alias ON node_aliases (alias);

CREATE TABLE artifact_mentions (
  mention_id           TEXT PRIMARY KEY,
  artifact_kind        TEXT NOT NULL,               -- 'whiteboard-card' | 'fact-card' | 'report-summary' | 'mailbox-message'
  artifact_id          TEXT NOT NULL,               -- card_id / fact_card_id / etc.
  node_id              TEXT NOT NULL,
  mention_kind         TEXT NOT NULL,               -- 'primary' | 'secondary' | 'glancing'
  confidence           REAL NOT NULL,
  evidence_excerpt     TEXT,                        -- short quote
  created_at           INTEGER NOT NULL,
  UNIQUE (artifact_kind, artifact_id, node_id)
);

CREATE INDEX idx_artifact_mentions_node    ON artifact_mentions (node_id, created_at DESC);
CREATE INDEX idx_artifact_mentions_artifact ON artifact_mentions (artifact_kind, artifact_id);
Why a separate artifact_mentions table rather than mentions_json columns: it's a many-to-many relationship and we want to scan it from both ends ("what did the institute say about NVDA?" and "what entities does this card touch?"). A column would force a JSON scan on every coverage query.

3.2 New Vectorize record kinds
kind	What	Volume
chain-node	One per graph node, embedding of name + name_en + description	~5K
company-research-seed	Per-ticker research markdown chunked into ~1.5K-token chunks	~600 vectors
Existing kinds (session-file, whiteboard-card, mailbox-message, topic-pool, report-summary) untouched.

3.3 R2 layout addition
Prefix	What
kg-research/{node_id}.md	Per-node research markdown (US side has 203 ready; China-side will be sparse initially)
kg-snapshots/{date}/graph.json	Daily graph snapshot for diffing / audit
Existing prefixes (session workspaces, execution artifacts) untouched.

4. Pipeline changes
For each existing pipeline, what changes:

4.1 Whiteboard kickoff (worker/src/index.ts:4322)
Today: pickDiverseKickoffTopic(env) → createWhiteboardThread(env, …) with the topic + question as the analyst's only context.

After: Insert a graph-resolution step between picker and creator:

pickDiverseKickoffTopic(env)
   ↓ candidate (topic, question, suggested_analyst_id)
resolveCandidateNodes(env, candidate)  ← NEW
   ↓ candidate + matched_node_ids[] + neighbor_node_ids[]
buildContextPrefix(env, matched, neighbors)  ← NEW
   ↓ markdown block with research excerpt + 1-hop chain context
createWhiteboardThread(env, { ..., contextPrefix })
createWhiteboardThread takes a new optional contextPrefix and prepends it to the kickoff prompt. Legacy callers (admin promote, ad-hoc creation) pass null and behave identically to today.

4.2 Card completion (worker/src/whiteboard.ts:markCardCompleted area)
Today: Card text gets bilingual-paired, embedded into Vectorize, archived to R2.

After: Same, plus a fire-and-forget tagger pass:

markCardCompleted(...)
   ↓ existing bilingual + Vectorize + archive
executionCtx.waitUntil(tagArtifactMentions(env, "whiteboard-card", card_id, text))
   ↓ writes rows into artifact_mentions
Tagger uses gemini-flash-lite via brain model override (same pattern as Fact-Check v2). On failure: log + skip, no card-side impact.

4.3 Fact-card extraction (worker/src/fact-cards.ts)
Same tagger pass. Plus a new graph-walk verification step in Stage 2 (Phase C):

verifyClaim(claim)
   ↓ existing source-citation check
graphWalkVerify(env, claim, mentioned_node_ids)  ← NEW
   ↓ pulls 1-hop neighbors' recent fact_cards, surfaces contradictions
Output of graph-walk attaches to the fact_card as cross_check_json.

4.4 Search (worker/src/index.ts /api/search + worker/src/v1/index.ts POST /search)
Today: cosine over Vectorize → top-k, filtered by analyst/session.

After: hybrid:

/api/search { query, ... }
   ↓ existing cosine
   ↓ resolve query → candidate node_ids (via node_aliases + chain-node Vectorize)
   ↓ graph diffusion: for each cosine seed, expand 2 hops, score by impact_weight × hop-decay
   ↓ blended rerank: α·cosine + β·graph_proximity + γ·recency
   ↓ same response shape (clients don't change)
α/β/γ configurable via runtime-overlays.json. Default: 0.6/0.3/0.1.

4.5 Archive pipeline (worker/src/archive.ts)
No structural change. The TEXT_FILE_PATTERN embed step still runs as today. We just added new kinds in Vectorize, written by a separate tagger path. The archive pipeline stays oblivious.

4.6 Daily / weekly synthesis editor
No code change required immediately, but the editor's prompt CAN reference the graph:

"Before writing the daily, query /api/v1/companies/{symbol}/coverage for each ticker mentioned in today's whiteboard cards. Reconcile contradictions across the supply chain (e.g. an upbeat NVDA card vs. a guarded TSMC card → flag for the editor)."

This is a prompt update, not a code change. Land it after Phase C endpoints exist.

4.7 Topic pool (worker/src/topic-seed-pool.ts)
Adds a new source kind:

SOURCE_PRIORITY = {
  ...existing,
  "coverage-gap": 4,           // low priority — fills idle slots
  "coverage-gap-strategic": 6, // when a node hasn't been touched in 30+ days
}
A new cron tick (riding on the existing */5) runs seedCoverageGapPitches(env) that walks chain_nodes left-anti-join artifact_mentions since N days, emits low-priority pool entries with the node_id pre-resolved as suggested_analyst_id (mapped via the analyst's coverage scope).

4.8 Diversity-aware picker (this morning's deploy)
Extends naturally. The diversity penalty can now incorporate graph-distance, not just cosine:

adjustedScore = score
              - λ_cosine · max_cosine_to_recent_launches
              - λ_graph  · graph_proximity_to_recent_launches  ← NEW
              - λ_chain  · same_primary_chain_as_recent_launches  ← NEW
Better surface coverage without adding any new endpoint.

5. Analyst-facing changes
This is the part that often gets missed in proposals. Do the analysts need to know the graph exists?

5.1 What analysts don't need to know
The chain_nodes table.
The mentions tagger.
The diffusion algorithm.
The cron source kinds.
These are infrastructure. Analyst prompts stay the same.

5.2 What analysts get for free
Pre-seeded context at kickoff (the prompt arrives with a "what we already know about TSMC" block — analyst doesn't have to know it came from a graph).
Better follow-up questions when the auto-generator can see chain neighbors.
Sharper fact-check because the verifier now cross-checks supply-chain partners.
5.3 What analysts MAY need updated prompts for (optional, later)
Chief Strategist / Sector analysts: prompt update to "when concluding about ticker X, run a one-line gut-check: do the institute's recent takes on X's named upstream / downstream support or contradict your conclusion?" The graph + mentions table makes this query 1-line.
QA Manager: prompt update to flag any "claim-without-mentions" case as a quality issue (can't audit a claim that doesn't link to entities).
Daily Editor: prompt update to use the coverage endpoint.
These are post-MVP. Phase A and B don't require any analyst prompt changes.

6. Frontend changes
6.1 Phase A and most of Phase B
Zero frontend changes required. All existing pages keep working unchanged. Hybrid retrieval improves ranking but the response shape is identical. mentions_json is invisible to the UI until we surface it.

6.2 Phase C — optional new surfaces
Page	New element
frontend/app/whiteboard/page.tsx	Card detail panel adds a "Mentions" chip-bar (linkable to coverage page)
frontend/app/page.tsx (dashboard)	Optional "Coverage map" tile showing 7-day mention density per chain
New: frontend/app/coverage/page.tsx	Per-ticker / per-node coverage page — every artifact that mentions this entity
New: frontend/app/chain/page.tsx	Browse the graph: chain → segment → category → company drill-down
These are feature additions, not refactors.

6.3 frontend-readonly
Same pattern — additive. New Coverage route can ship after the API endpoints land.

7. API surface
7.1 Existing endpoints (no change)
/api/analysts, /api/whiteboard/*, /api/mailbox/*, /api/sessions/*, /api/search, /execute, /execute/stream, every /api/v1/* from this morning's API scaffold.

7.2 New endpoints under /api/v1/
Method	Path	Purpose
GET	/api/v1/nodes/{id}	Node detail + 1-hop neighbors
GET	/api/v1/nodes/{id}/coverage	All artifacts mentioning this node
GET	/api/v1/companies/{symbol}/coverage	Same, ticker-keyed convenience
GET	/api/v1/companies/{symbol}/research	Pre-prepared research markdown (when present)
GET	/api/v1/chains/{chainKey}	Browse a chain (e.g. "AI-infra", "电子信息产业链")
GET	/api/v1/coverage/gaps?since=14d	Tickers / nodes with no recent mentions
POST	/api/v1/search	Existing endpoint, response shape unchanged, ranking is hybrid
New scopes in worker/src/api-keys.ts:

graph:read — node / edge / chain access
coverage:read — mention / coverage queries
7.3 OpenAPI / Scalar /docs page auto-updates
Already wired (this morning's /docs page reads from worker/src/v1/index.ts). New endpoints surface automatically.

8. Cost and capacity
8.1 Storage
Resource	Today	After
D1 rows (graph)	0	~5K nodes + ~7K edges + ~10K aliases ≈ 22K rows
D1 rows (mentions, steady-state)	0	~50 cards/day × 5 mentions ≈ 250/day → 90K/year. Trim with a TTL or just live with it (D1 handles millions).
Vectorize	~current	+ ~5K chain-node + ~600 research-seed = ~5.6K new vectors
R2	~current	+ 1 MB research markdowns + ~100 KB/day graph snapshots
All trivial relative to limits.

8.2 Compute
Step	Frequency	Model	Approx cost / day
Tagger on whiteboard cards	~50 cards/day	gemini-flash-lite	$0.005
Tagger on fact cards	~100 fact_cards/day	gemini-flash-lite	$0.010
Graph diffusion on /api/search	bounded by request rate	none (D1 BFS)	~0
Coverage-gap seeder	every 5 min	none	~0
Net incremental cost: roughly $0.50/month at current institute throughput. Below the noise floor of existing fact-check v2 spend.

8.3 Latency
Path	Today	After
/api/search p50	~80ms	~110ms (BFS adds ~30ms)
/api/search p99	~250ms	~350ms
Card completion (user-perceived)	unchanged (tagger is fire-and-forget via waitUntil)	unchanged
Whiteboard kickoff	~5s (similarity assessments dominate)	+~50ms for graph resolution
9. Operational changes
9.1 Cron
*/5 * * * * gets one new task: seedCoverageGapPitches(env). Hourly and 30-min ticks unchanged.

9.2 Monitoring
New surfaces to watch:

chain_nodes count stable (loader is one-shot; spikes mean something re-ran).
artifact_mentions insert rate matches card finalize rate × ~5.
Hybrid retrieval blended-rerank score distribution (drift means tagger quality slipping).
Graph diffusion p99 latency (alarm at 100ms).
Best place: extend the existing fleet-health snapshot (worker/src/fleet-health.ts — runs daily on the 0 16 * * * cron) to include graph + tagger health.

9.3 Deploy / rollback
Phase A loader is idempotent — re-running re-loads with INSERT OR IGNORE. Safe to re-run.

Phase B changes are guarded by feature flags:

GRAPH_TAGGER_ENABLED = "true" | "false" | "shadow"   // shadow = run, write, but don't display
GRAPH_HYBRID_RETRIEVAL_ENABLED = "true" | "false"
GRAPH_KICKOFF_PRESEED_ENABLED = "true" | "false"
Each lever can be flipped independently. Roll back any one with an env var change, no redeploy required.

10. Backwards compatibility
Existing data	Status
Pre-graph whiteboard cards	NULL mentions_json / no rows in artifact_mentions. They show up in search via cosine alone (no graph boost). Fully usable.
Pre-graph fact_cards	Same.
Pre-graph topic_pool entries	Unchanged. New entries from coverage-gap source are ADDITIVE; the existing pitch / qa-open / tail-followup sources continue.
Pre-graph search responses	Same shape. Old clients keep working.
Pre-graph admin endpoints	Unchanged.
Optional backfill: a one-shot script can run the tagger across the last N days of cards and fact_cards. Safe to skip — only matters for retrospective coverage queries.

11. Risk surface
Risk	Severity	Mitigation
Tagger hallucinates entity links	Medium	Confidence threshold (drop < 0.6); QA Manager pass spot-checks; mention_kind="glancing" gets diffusion downweight
China-side edges with tmp/blank type produce noisy retrieval	Medium	edge_type_certain=false in schema; diffusion weights uncertain edges 0.3×
Cross-language alias collision ("Apple" vs "苹果")	Low	node_aliases.alias_kind discriminator + node description matching at tag time
Graph data drifts (stale relationships, M&A)	Medium	Monthly re-load from upstream sources; institute-derived edges (Phase C+) get an evidence_count so confident ones survive
Loader race during deploy	Low	One-shot script, runs out-of-band, idempotent
Tagger cost spirals	Very low	gemini-flash-lite is sub-cent per call; observable
Hybrid retrieval ranks worse than flat cosine in some queries	Low	A/B via env var; rerank weights configurable; can disable per-request via ?hybrid=false
artifact_mentions table growth unbounded	Low	TTL not strictly needed (millions of rows are fine in D1); add monthly partition rotation only if size becomes an issue
Reversibility: every Phase B change is feature-flagged. Phase A creates new tables that an unwound rollback could DROP. No destructive migrations.

12. Phasing — concrete deliverables
Phase A — Foundations (1.5 days)
Migration 0017_graph.sql (3 new tables).
worker/src/graph.ts — query helpers (getNodeById, findAliases, getNeighbors, bfsKHop, computeDiffusion).
worker/scripts/load-graph.mjs — one-shot loader merging:
temp/graph_analysis/.../merged_nodes.csv → ~4,750 China-side nodes
temp/graph_analysis/.../cleaned_relations.csv → ~6,900 edges
temp/us_stock/src/data/aiKgData.json → AI-infra hierarchy (115 companies + segments + categories)
temp/us_stock/src/data/watchlist.ts → 244 US tickers as kind=company nodes (or backfill the aiKgData ones)
temp/us_stock/src/data/research/*.md → R2 + Vectorize (kind="company-research-seed")
Vectorize embed all chain_nodes (kind="chain-node").
Verify counts via D1 query + Vectorize describe.
Deliverable: graph queryable via SQL + Vectorize, no code in the hot path uses it yet.

Phase B — Hot loops (3 days, behind feature flags)
Tagger (worker/src/graph-tagger.ts new + hooks in whiteboard.ts and fact-cards.ts). Run in shadow mode for 48h, inspect quality, then flip to live.
Hybrid retrieval (/api/search + /api/v1/search modify). A/B compare with hybrid on/off via env var.
Kickoff pre-seed (createWhiteboardThread accepts contextPrefix; cron handler resolves nodes and builds prefix). Live behind GRAPH_KICKOFF_PRESEED_ENABLED.
Migration 0018_card_mentions.sql — mentions_json column for legacy compatibility.
Deliverable: every existing pipeline silently better — search ranks better, kickoff threads start with context, cards / fact_cards self-tag.

Phase C — New capabilities (2-3 days)
Coverage-gap pool source (seedCoverageGapPitches + cron hook).
New endpoints: /api/v1/nodes/{id}, /api/v1/companies/{symbol}/coverage, /api/v1/coverage/gaps, /api/v1/chains/{chainKey}.
Chain-walk fact-check verifier (Stage 2 of fact-check v2 gets a graph-walk pass).
frontend/app/coverage/page.tsx and chip-bars in whiteboard card detail.
Deliverable: institute exposes coverage as a first-class concept; analysts and third-party clients can query it.

Phase D — Analyst prompt updates (optional, post-Phase C)
QA Manager flags claims-without-mentions; Daily editor uses coverage endpoint; Strategy analysts add chain gut-check. All prompt-only.

13. Open design decisions
These need an operator call before we start coding. Each has a recommended default.

Decision	Options	Recommended
Node ID scheme	URL-style (us:NVDA, cn:600519) vs UUID	URL-style — debuggable, joinable with external ticker data
How to merge US AI-infra KG with China graph?	Union (one big graph) vs federated (cross-graph edges only at company nodes)	Union — bge-m3 is multilingual; downstream queries don't have to know which dataset a node came from
Tagger model	gemini-flash-lite vs claude-haiku	gemini-flash-lite — already proven in Fact-Check v2
Backfill legacy cards / fact_cards?	Yes (one-shot, ~6K artifacts) vs no	Defer — tagger runs forward-only initially; backfill if Phase C coverage queries feel sparse
Whose names canonical?	English / Chinese / both per node	Both, store both in name/name_en; canonical = whichever the source dataset emitted
tmp and blank edge_types in China data	Drop / keep with low weight / re-classify via LLM	Keep with edge_type_certain=0, weight 0.3× in diffusion. Re-classify lazily in Phase D.
Coverage-gap seeder window	7 / 14 / 30 days	14 days — short enough to recover from drift, long enough not to spam
Surface mentions in readonly UI?	Yes / No / Phase C	Phase C — let the data accumulate first
Per-analyst coverage scope	Implicit (auto-derived from past mentions) vs explicit (curated)	Implicit V1 — derive from each analyst's last 90 days of card mentions; let operator override per analyst later
14. Success criteria
How we'd know this worked, in measurable terms:

Coverage: ≥ 70% of whiteboard cards have ≥ 1 mention with confidence ≥ 0.7 within two weeks of tagger live.
Surface area: distinct node_id count in artifact_mentions ≥ 200 within 30 days (vs. today's effective ~30 implicit covered names).
Retrieval quality: side-by-side eval on 20 hand-picked queries — hybrid wins or ties on ≥ 75%.
Topic-pool diversity: Gini coefficient on whiteboard_sessions.root_analyst_id over rolling 30 days drops by ≥ 0.1 (more even rotation across analysts driven by gap seeding).
Operator value: at least one operator-reported case per week of "the chain-walk fact-check caught something I wouldn't have."
No regressions: existing fact-check pass rate, daily-report generation success, whiteboard tick latency unchanged within ±5%.
15. What I'd do today vs. defer
Today, if you say go: Phase A loader. Lowest uncertainty, blocks everything else, ships in a half-day.

Defer until Phase A is verified: Phase B (hot loops). This is where most of the value is, but it's also where the risk is. Doing Phase A first lets us inspect the graph before committing to retrieval / tagger paths that depend on its quality.

Defer until Phase B is humming: Phase C (new endpoints + frontend). These benefit from accumulated data — shipping them on day 1 with empty mention rows would be lipstick.

Don't do unless explicitly requested: prompt updates to the existing analyst roster (Phase D). They don't need it; the institute already produces fine work without graph awareness in the analyst's head.
