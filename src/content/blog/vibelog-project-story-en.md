---
title: "The ResearchOS Project Story"
description: "The complete narrative behind building ResearchOS."
pubDate: "2026-04-30"
category: "vibelog"
lang: "en"
---

# Vibe Coding an AI Research Institute

*A project story for people who do not write code every day, but are curious about what happens when ideas, AI, and persistence start building together.*

## A Small Prompt That Turned Into an Institution

This project did not begin as a normal software product with a rigid specification, a six-month roadmap, and a neat engineering chart.

It began more like a conversation with ambition:

"What if an AI research institute could run like a real one?"

Not one chatbot. Not one report generator. An institute.

That meant analysts with different specialties. Shared workflows. Storage that remembers what happened. Sessions that can continue work. Messages between colleagues. A dashboard. Daily reports. A whiteboard for chained research. Authentication. Archiving. Deployment. And, importantly, a rule: the system should not call Gemini, Claude, or Codex directly. All model work should be routed through a central "agent route" brain so the whole organization behaves like one coordinated machine.

That is how this project evolved from "build me a tool" into "build me a living research workflow."

## What the Project Is, in Plain English

At a technical level, the system is a Cloudflare-native AI stock research platform.

At a human level, it feels more like a digital newsroom crossed with an investment research desk.

Here is the simple version:

- The **frontend** is the visible website where people open dashboards, review sessions, inspect reports, and use analyst portals.
- The **backend worker** is the traffic controller. It receives requests, starts workflows, verifies access, stores records, and talks to the agent orchestration layer.
- **Agent Route** is the model-handling center. It manages sessions, projects, workflows, and the choice of which "hand" should do the work.
- **D1** stores structured memory: sessions, workflow runs, metadata, mailboxes, indexes.
- **R2** stores generated files: reports, artifacts, archives, whiteboard outputs.
- **KV** acts like the system's short-term sticky notes and cache.
- **Vectorize** gives the project semantic memory, so stored research can later be searched by meaning instead of only by filename.

If you have never used cloud products before, think of it this way:

- The **Worker** is the front desk and operations manager.
- **D1** is the ledger.
- **R2** is the filing room.
- **KV** is the wall of sticky notes.
- **Vectorize** is the institutional memory that remembers ideas, not just documents.

## The Real Magic Was Not a Single Feature

The impressive part of this project is not any one screen or one API.

The impressive part is the shift in structure.

The system gradually moved from a simple app into a coordinated research environment with roles, memory, routines, and collaboration. That change happened through a series of design turns that feel very familiar to anyone experimenting with vibe coding:

1. You start with a clear goal.
2. The first version works just enough to reveal a bigger possibility.
3. Every new feature changes the architecture.
4. Every architecture change creates one or two new bugs.
5. Those bugs force the design to become more real.

That is not failure. That is the process.

## Timeline of the Build

Below is the clearest timeline of how the project structure evolved, based on the visible build history and current repository state.

### Phase 1: Cloudflare Rebuild

The project was rebuilt around **Cloudflare Workers** for the backend and **Cloudflare Pages** for the frontend. Storage responsibilities were moved into Cloudflare-native services so the system could behave like an online platform instead of a local prototype.

### Phase 2: Agent Route as the Only Brain

The architecture was tightened so that model calls were not made directly to Gemini, Claude, or Codex. Instead, **Agent Route** became the orchestration layer for sessions, workflows, and model-hand execution. This was a major design decision because it turned the system from a bundle of direct API calls into a managed operating model.

### Phase 3: Remote Deployment and Storage Binding

The backend worker and frontend page were deployed remotely, and Cloudflare storage bindings were attached so the application could persist structured data and generated files in the cloud.

### Phase 4: Workflow and Archive Expansion

Workflows were added to the Agent Route path, and the project began copying outputs and generated files into Cloudflare storage. This is where the institute stopped being just interactive and started becoming historical. It could remember what it produced.

### Phase 5: Authentication for the Frontend

The frontend gained login verification through the backend's `/api/auth/verify` flow. This was not glamorous work, but it was necessary. It moved the product one step away from demo mode and one step closer to a system that could be shared safely.

### Phase 6: Daily Report Layer

A daily work report was added with bilingual presentation requirements. That changed the project from being only a machine for internal orchestration into something that could also communicate outwardly, in a polished format.

### Phase 7: Analyst-Centered Structure

The idea of "analysts" became much richer. Each analyst gained a work folder, structured data, routines, and scheduled jobs. The system was no longer just running tasks; it was starting to simulate departments.

### Phase 8: Internal Mailbox and Message Coordination

This was one of the most interesting turning points. Analysts were no longer only producing reports. They could ask each other questions, send follow-ups, dispatch work, and reply with results and file links. That changed the project from a linear workflow engine into something closer to an internal economy of research.

### Phase 9: Dashboard Portals

Mailbox and message portals appeared in analyst dashboards. This made the system feel less like a backend experiment and more like a workplace.

### Phase 10: Whiteboard Portal

The whiteboard feature introduced a more creative, autonomous mode:

- a session starts on a scheduled cadence,
- one analyst begins a research topic,
- another analyst follows by supporting or challenging the earlier view,
- each contribution appears as a card on a shared canvas,
- the full chain is archived back into the analyst workspaces.

This is where the project became genuinely memorable. It did not just generate answers. It staged an evolving argument.

### Phase 11: Multi-Hand Randomization

Research tasks routed through Agent Route began randomly selecting hands such as Gemini, Claude, or Codex. That made the institute feel less monolithic and more like a team whose assignments could be carried by different specialists.

### Phase 12: Debugging Reality

Like every serious build, the later phases were defined by bugs that only appear once the system becomes real:

- a `405 Method Not Allowed` auth failure from the frontend,
- a `404 Not Found` error on the running tasks endpoint,
- generated whiteboard files that existed but could not be previewed,
- follow-up whiteboard tasks that should have executed automatically but did not continue after the first card.

These moments matter because they are the point where vibe coding stops feeling like magic and starts becoming engineering.

### Phase 13: A Public Surface — v1 API and Admin Keys

The institute had been a closed system: produce reports, read them in the browser. The next pivot was to make it composable. A small **v1 API** went up — three scope-gated endpoints (queue research for a watchlist of tickers, open a whiteboard thread on an externally-supplied topic, subscribe to a Stripe-style cursor event log) plus an admin key page where operators could mint `sk_ins_*` keys with hand-picked scopes. Keys are SHA-256-hashed at rest, revocable in one click, and stamp `last_used_at` on every call so unused ones are easy to retire. The institute could now be wired into other workflows — a portfolio monitor that auto-queues deep research, a news feed that opens a whiteboard thread, an external dashboard that tails the event stream.

### Phase 14: The Weekly Pipeline — Three Hands, One Report

Every analyst got their own per-week deliverable, but unlike the daily briefings, the weekly was designed as a **multi-hand pipeline**: Gemini plans the scope, Codex executes the data lift, Claude renders a self-contained HTML report with inline SVG charts. Different models played to their strengths, so a soft spot in any one hand only affected one stage instead of the whole product. Schedules were staggered by hash across forty-eight Saturday and Sunday hourly slots so 39 analysts never contend for the same edge node at once. By the time Monday markets open, every analyst has a finished, audited weekly waiting in their workspace.

### Phase 15: The QA Manager — A Reviewer in the Loop

Every weekly now ends with a fourth step: the **QA Manager**, a new analyst persona voiced by Claude, audits the deliverables for file completeness, cross-step numerical consistency, narrative coherence, and editorial quality. Output is a `QA_review.md` with a manifest table, prioritized revision suggestions, and a `pass / needs-revision / fail` grade. The reviewer is advisory — it does not rewrite the deliverable, which keeps the failure mode honest: a missing file shows up as a missing file, not as a hallucinated patch.

### Phase 16: Workspace Robustness — Two-Layer Defense

Models occasionally produce the right markdown content but forget to actually write it to a file, breaking downstream steps. Two layers were added. First, every prompt grew a *Workspace Robustness* clause that lets a downstream step fall back to the prior step's text from conversation context if the file is missing — so the in-run cascade is fixed. Second, the worker post-processes every finished workflow run, diffs declared output files against the session workspace, and back-fills any missing file from the corresponding step's response text. Working-records and weekly previews always see a complete artifact, even when the hand dropped a file mid-run.

### Phase 17: A Subtle Timing Bug — Queue Time Is Not Run Time

A real-world failure mode surfaced: tasks were timing out at 30 minutes, but most of that 30 minutes was spent **queued** behind a load balancer waiting for an edge node, not actually executing. The fix was the same on both sides of the wire — the agent-route backend was patched, and on the institute side the client-side staleness check was rewritten to track `running_since` (first observation of upstream `running` status) instead of `pending_since` (dispatch time). Queue time can stretch as long as it needs to, and the stale clock only starts counting once the model is actually doing work. Several stuck weekly runs got re-triggered after the fix; they drained cleanly.

### Phase 18: HTML Preview — Bringing the Visualization Inline

When weekly reports started shipping as polished HTML files with inline SVG charts and CSS, the file modal needed to evolve. A sandboxed `<iframe srcDoc>` with `sandbox=""` was added — no scripts, no network, no same-origin access, just a faithful render of the document. A `渲染 / 源码` toggle in the modal header lets the reader flip between the rendered view and the raw HTML. Suddenly the institute's own visualizations were viewable in the same UI that hosts the rest of the work — no need to download, no need to leave the dashboard.

### Phase 19: Sunday-Only Schedule + Date-Window Lock

The first run of weekly reports staggered 39 analysts across forty-eight Sat–Sun hourly slots. After watching one cycle, two changes consolidated the schedule. First, the weekend was tightened to **Sunday only** — twenty-four hourly slots, deterministic hash assignment per analyst, so every weekly fires on a single dedicated Sunday hour and Saturday is freed for ad-hoc work. Second, the planner prompt was given an explicit **date-window resolution**: today is Sunday in Asia/Singapore, the coverage window is Monday → Friday of this week (the just-completed trading week), and the plan must open with `本周覆盖范围: YYYY-MM-DD (周一) → YYYY-MM-DD (周五)`. Holidays inside the window are noted but the window does not shift. Downstream steps now have a single source of truth for the dates the report covers.

### Phase 20: Autonomous Coordination — Mail That Triggers Itself

The mailbox had been the institute's coordination layer for some time, but every message was either human-triggered or part of a workflow's first dispatch. The next move was to make analysts coordinate **on their own**: when a deliverable identifies a follow-up question that a different analyst should answer, the system emits a mailbox message (with an adhoc dispatch attached) without asking. A new `# Coordination Requests` section was added at the bottom of the prompts on the **last step of every routine and global workflow** (single-step routines like `daily_meetup`; the QA Manager step of `weekly_report`; the synthesis editors of `briefing` and `daily`). The instruction is precise: emit a fenced JSON `{"follow_ups":[...]}` block with real analyst ids, max 3 per response, no self-pings, no padding.

A new worker module — `auto-handoff.ts` — runs after every terminal-success workflow run, parses the JSON block out of the step's response text, validates each follow-up against the analyst roster, dedups via KV (36-hour TTL keyed by `(sender, recipient, content_hash)`), and emits a mailbox thread with `dispatch.mode = "adhoc"` set so the recipient runs autonomously. The recipient's reply lands in the original analyst's inbox; auto-coordination is **one-hop only** — the reply does not itself trigger another auto-mail. The bound on autonomy (max 3, sender ≠ recipient, recipient must exist in the roster, dedup window) keeps this from turning into a chain reaction. The first time a `[auto-handoff]` thread appears in `/mailbox` without anyone clicking, the institute genuinely starts to feel like a self-coordinating team.

### Phase 21: Whiteboard Role Bias — Telling the Model Who Plays Which Part

Watching the first few days of whiteboard threads in production exposed a recurring problem: the model would call in `chief-risk` as the second card, before any concrete fragility had even been articulated, and threads kept dragging in derivative / credit / factor specialists for general perspective rather than concrete domain matches. The carding model had been told "pick whoever best fits the next question" with all 39 analysts visible — and it over-explored. The fix was a soft constraint baked into the analyst roster: each analyst now carries a `whiteboard_role` tag (`primary`, `specialist`, `reviewer`, or `editorial`). The carding prompt explicitly biases toward primary analysts (macro / strategy / sector / equity-strategy), gates specialist engagement to "the next question concretely sits in their narrow domain", and forbids reviewer engagement until "a CONCRETE fragility worth stress-testing" has emerged. The same role guidance also went into the QA Manager's `follow_ups` recipient pick, so auto-coordination handoffs stop over-routing to reviewers. Threads got noticeably more focused after the change.

### Phase 22: Mailbox's Own Cursor Bug — Three Diagnostic Layers

The auto-handoff feature had been quietly producing zero output. Investigation peeled back three distinct layers stacked on top of each other. *Cause 1*: the completed runs we were inspecting had been dispatched before the prompt-strengthening shipped, so the model was never asked to emit follow_ups in the first place. *Cause 2*: the `syncManagedScheduledRuns` cron advanced its cursor on the FIRST sync after a schedule firing — typically while the run was still `running` — so the terminal-state branch (salvage + auto-handoff + archive) never re-ran for runs that finalised later. *Cause 3*: even when the parser was invoked, it was reading `parsedResult.stepResults[i].output`, but agent-route doesn't inline output text there; the actual deliverable lives in the workspace file or in `task.result_summary` fetched separately. The fix was three-part: a new `pending_run_id` column on `institute_workflows` so terminal hooks revisit parked runs, a parser rewrite to read the workspace file (`QA_review.md`) as the primary source, and a one-time cleanup to mark the in-flight runs whose cursor had already moved past them. Two minutes after deploy, three real `[auto-handoff]` mailbox threads emitted from runs whose QA reviews had been waiting hours for the worker to notice them.

### Phase 23: The Operator Question — A Roadmap, Not a Build

Around this point the conversation pivoted. Rather than continuing to fix individual bugs, the question became: should the institute have a meta-layer? An "operator" role that audits fleet health, diagnoses chronic patterns, suggests prompt updates, and supervises cross-workflow coordination? After thinking through the seven sub-functions, the answer crystallised as a **four-layer decomposition**: L1 fleet health observer (deterministic, no LLM), L2 institute diagnostician (LLM, advisory only), L3 cross-workflow handoff supervisor (deferred), L4 prompt curator with a trust gradient (deferred). The whole proposal landed as `vibelog/operator-role-proposal.md` so it could be reviewed and re-opened later.

### Phase 24: L1 Fleet Health Observer

The substrate everything else needs. A pure-SQL aggregator that runs daily at midnight Singapore time — adds another cron entry to wrangler.jsonc — and walks every D1 table the institute owns: `institute_workflows`, `workflow_runs`, `mailbox_threads`, `mailbox_dispatches`, `institute_events`, `execution_outputs`, `whiteboard_sessions`, `whiteboard_cards`. Output is a structured JSON metrics blob plus a human-readable markdown summary, both written to R2. The compact summary lands in a new `fleet_health_snapshots` D1 table keyed on date. A new `/api/fleet-health/latest.md` endpoint serves the markdown so the next layer can fetch it without auth.

### Phase 25: L2 Institute Diagnostician

A new analyst persona — `institute-diagnostician` (🩺) — added to the synthesis category, with `whiteboard_role: editorial` so it stays out of whiteboard threads. Its routine task fires daily at 01:30 SG, 90 minutes after L1's snapshot. The prompt instructs it to `curl` the `/api/fleet-health/latest.md` endpoint into its workspace, then write `diagnosis.md` with sections: 一句话总览 / 关键指标 / 异常与模式 / 推荐优化 / 给操作员的开放问题. Critically, the prompt sets `enable_handoff: false` on the template — a new flag added to `TaskTemplate` — so the diagnostician's prompt doesn't carry the Coordination Requests block. The diagnostician advises only; it cannot mutate prompts, schedules, or any system state. That property is what makes it safe to add early.

### Phase 26: Mailbox UI + Mailbox Pre-Fix Recovery

The mailbox UI had been a side panel: half-screen composer always visible, message and dispatch cards stacked separately, no sticky context bar, no way to retry a failed dispatch. A redesign turned the composer into a collapsible drawer (closed by default), introduced a sticky thread context bar, unified messages and dispatches into a single time-ordered timeline, added filter pills for `自动协作` and `失败` threads, and gave each failed dispatch a `重新派发` button. Then a dedicated `salvageFailedDispatch()` worker function recovered 4 dispatches that had been marked `failed` before the park-and-revisit machinery shipped — agent-route had completed those tasks 6–11 minutes after our 5-minute inline poll budget gave up, but the underlying `result_summary` was still recoverable. The salvager pulled it, rewrote the existing reply message body in place, and flipped the dispatches to `completed`. Zero re-runs needed.

### Phase 27: Mandatory Markdown for Follow-up Tasks

Auto-handoff dispatches were being executed but the recipient analyst was just streaming text into `result_summary` — no archived markdown deliverable, no `handoff_response.md` file. The fix was to wrap the bare follow-up question in the same `MANDATORY DELIVERABLE` envelope used by routine workflows: full analyst voice, declared output file (`handoff_response.md`), workspace robustness clause, output language policy. The `enable_handoff: false` flag enforces the one-hop rule (recipient may not emit a fresh `follow_ups` JSON block of its own). Handoff replies now arrive as a one-line confirmation in the mailbox and a structured markdown file in the session workspace.

### Phase 28: Multi-Tenant Session Filtering

Agent-route is multi-tenant. A sibling client called "infinite research" was creating sessions on the same agent-route instance, untagged with our project_id, and they were leaking into the institute's session list because the worker's lenient policy (`project_id === ours OR project_id === null`) admitted every unscoped session. The fix moved the filter from the frontend to the worker and made it positive: a session belongs to this app if it carries our project_id OR its `id` appears in any of our managed D1 tables (`workflow_runs`, `mailbox_dispatches`, `whiteboard_cards`, whiteboard board sessions). Foreign sessions drop at the proxy boundary and the institute's `sessions_cache` stops accumulating other clients' rows over time. Working in the browser feels noticeably cleaner — research history shows only research the institute initiated, the dashboard's activity timeline carries only this app's runs.

### Phase 29: Three Production Bugs in One Tangle

After a few days running live, three independent bugs surfaced together: (1) a deep-research run dispatched on AAPL came back with a report on INTC, then on retry on TGT — the model was clearly not anchoring on the requested ticker; (2) whiteboard cards run on the gemini hand were frequently failing to write `card_response.md`, just streaming the deliverable into chat; (3) DeepSeek mailbox dispatches were getting stuck in `running` forever even after the upstream workflow had finished. Root causes, peeled one at a time: bug #1 — agent-route's `/api/workflows/:id/run` does **not** propagate `input_prompt` into per-step `step.prompt`; each step gets the static text registered with the workflow definition. Fix: stop reusing the canonical `research` workflow and pass the ticker through `input_prompt`. Instead, `/api/v1/research/queue` now **registers a fresh per-ticker scoped workflow** on agent-route with the ticker baked into the front of every step prompt, then runs that workflow id. Bug #2 — promote the `# MANDATORY DELIVERABLES — READ BEFORE ANYTHING ELSE` block to the top of card prompts (instead of mid-prompt) and add an explicit "verify with `ls`" step; gemini stops cutting the corner. Bug #3 — the inline mailbox poll budget (120 × 2.5 s = 5 min) was overrunning the worker wall clock, so the dispatch row was never finalised. Cut to 8 × 3 s = 24 s, always park early and let the cron finish. Same investigation also caught `dispatchMailboxMessage` short-circuiting on retry of failed rows (the "重新派发" button was a silent no-op); fix: mark failed/cancelled rows `superseded`, then create a fresh dispatch.

### Phase 30: The opencode Hand — Specialising "Just Write the File"

Agent-route shipped a new hand: **opencode** (default model, no web_search, optimised for local edit/tool/file work). Two long-running pain points fit it naturally: (a) the primary model occasionally streams a full markdown deliverable into chat but forgets the actual `Wrote ...md` step, which cascades into downstream step failures; (b) auto-handoff recipients sometimes did the same — answer in chat, never write `handoff_response.md`. Instead of reinforcing the primary model's prompt yet again, the worker grew a `formatFileViaOpencode()` helper that, when the salvage step or the auto-handoff sync step detects a declared output file missing from the workspace, dispatches a tiny opencode task into the same session: "format this text and write it to `<filename>`, then ls to verify." 20 polls × 3 s budget, returns `{ok, reason, task_id}`. Two call sites: `salvageMissingWorkflowOutputs()` (after terminal workflow runs, scanning declared outputs) and `syncMailboxAdhocDispatches()` (after auto-handoff completion if `handoff_response.md` is absent). The result is a structurally tolerated division of labor — primary model reasons; opencode persists.

### Phase 31: Whiteboard Topic-Seed Pool — Where the First Card Comes From

The whiteboard's first card had been the model picking the day's topic itself, which failed in two predictable ways: it would either re-pick a topic the team had debated last week (redundancy), or pick a low-signal edge topic nobody cared about (attention waste). The rewrite introduces an explicit topic-seed layer. New D1 table `whiteboard_topic_pool` (migration `0011`), one candidate seed per row: `topic` / `question` / `suggested_analyst_id` / `source_kind` / `source_run_id` / `score` / `status`, with `UNIQUE(content_hash)` to dedup the same idea across multiple submissions. Two ingestion sources: (a) any routine workflow that opts into `enable_whiteboard_pitch: true` gets a `# Whiteboard Pitches (Optional, max 3)` section appended to its step-0 prompt by `buildAnalystPrompt`, encouraging the analyst to optionally emit a `whiteboard_pitches` JSON block at the end of its deliverable; and (b) six **dedicated topic-pitch routine tasks** added for five "scent-driven" analysts: `sentiment-analyst` weekday 09:00 pre-market sentiment, `social-media-analyst` weekday 13:00 midday social momentum, `altdata-analyst` weekday 16:30 post-close alt-data divergence, `thematic-researcher` weekday 21:00 overnight thematic rotation + weekend 10:00 deep thematic scan, `daily-report-editor` weekend 18:00 weekly retrospective agenda. Each pitch task's prompt is uncompromising: scan → filter through the three "thread-worthy" gates (cross-analyst, time-sensitive, genuinely uncertain) → write `topic_pitches.md` → emit `whiteboard_pitches` JSON only if a topic clears the bar (silence is fine). The hourly whiteboard cron now calls `pickKickoffTopic()` which atomically claims the highest-scored candidate (ranking by `SOURCE_PRIORITY`: QA-leftover = 10, high-priority pitch = 9, normal pitch = 6, low pitch = 4, tail follow-up = 4), flips its row to `promoted`, and attaches the `promoted_board_id`; if the pool is empty, falls back to the legacy random seed. `data.ts`'s `withCommonTasks` was extended to merge `analyst_overrides[id].extra_task_keys`, so adding new routine tasks to specific analysts no longer requires touching the canonical `profiles.json` (the validation script got the same merge — confirmed `routine_task_refs` 181 → 187, exactly +6).

### Phase 32: Filling the 5 Scent-Driven Analysts Out Across the Week + opencode-Backed Coordination Extraction

After the seed pool went live, the next obvious bottleneck was *throughput*: each of the five scent-driven analysts had only one weekday slot, so the pool could absorb at most five new candidates per day. Bumped each analyst to **4 weekday slots + 1 weekend slot** (the same cron fires Sat and Sun, so the weekend slot fires twice per week — 2 weekend tasks total). Across five analysts that's 110 routine pitch firings per week. **19 new task templates** added in total: sentiment got overnight / midday / close / weekend; social-media got overnight / morning retail / post-close echo / weekend viral; altdata got overnight / morning indicator / intraday divergence / weekend; thematic-researcher got morning rotation / pre-market structure / intraday flow; daily-report-editor got morning headlines / pre-market cross-pulse / intraday alignment / post-close contradiction sweep. `routine_task_refs` jumped 187 → 206.

The deeper bottleneck though was *extraction*: `auto-handoff.ts` and `topic-seed-pool.parseWhiteboardPitches` both rely on regex matching of ` ```json ``` ` blocks. The instant a model returned its follow-ups as prose (`"chief-economist should look at the rates implication"`) or wrapped the JSON in non-standard fences, the request was silently lost. With the workspace-bound opencode path now working end-to-end, a new module `opencode-extractor.ts` runs as a post-step: after every terminal-success routine / global workflow run, dispatch opencode (cwd = the same session workspace) with the full 40-analyst roster baked into the prompt and a precise extraction contract — read every `.md` / `.html` / `.json` file in cwd, surface both fenced-JSON `follow_ups` / `whiteboard_pitches` AND latent prose requests, validate every analyst id against the roster (drop unknowns, never invent), and write `_coordination_extraction.json` (relative path). The worker reads that JSON and feeds it through the **same emit paths** the regex parser uses: a refactored `emitFollowUps()` (extracted from `auto-handoff.ts`) for the auto-handoff dispatch, and `ingestCandidate()` for the topic pool. Both downstream paths carry their own atomic dedup (`auto_handoff_dedup INSERT OR IGNORE`, `whiteboard_topic_pool UNIQUE(content_hash)`), so emitting both regex-extracted and opencode-extracted sets is safe — duplicates collapse. New source kind `opencode-extracted` (base score 5, high 8, low 3) slots between regular pitches and QA-open in the priority table.

Smoke test: a model-written `topic_pitches.md` (1110 bytes) handed to opencode produces a clean `_coordination_extraction.json` in 44 s with `follow_ups[0].to == "fx-strategist"` and `whiteboard_pitches[0].suggested_analyst_id == "chief-economist"`, both validated against the roster. The institute is now meaningfully more "self-runnable" — even if a model wraps its coordination requests in prose, opencode digs them back out and feeds them into the same emit pipeline.

### Phase 33: First Diagnosis Lands — L2 as Input, Not Conclusion

The L2 diagnostician produced its first real `diagnosis.md` at 01:30 SG, verdict "watch-listed": zero failures, but auto-handoff "82% to reviewers", whiteboard `chief-risk` receiving 24 cards, in-flight backlog 21 + 12 = 33 — three concerning signals. Treating that as a starting point rather than a conclusion and re-querying D1 + agent-route over a 7-day window completely reshaped the picture.

**Distortion #1**: the 82%-to-reviewers number was 24h × 11 threads, and the diagnostician miscategorised `chief-strategist` (which is `primary` in our whiteboard-role taxonomy) as a reviewer. Reclassifying 7 days of 131 auto-handoffs against the actual roster: 68% to primaries, 24% to specialists, 8% to chief-risk. Routing is healthy. The diagnostician was inferring categories instead of consulting the roster, because the roster wasn't injected into its prompt. One-line fix: bake the `whiteboard_role → analyst_id` mapping table directly into `institute_diagnosis.input_prompt`.

**Distortion #2** (good news, attenuated): whiteboard `chief-risk` over-attraction is real but smaller. Across 7 days × 852 whiteboard handoffs, chief-risk gets 95 = 11%. Next single recipient (derivatives-strategist) is 64. Genuine over-attraction, not a "system-out-of-control" pattern. Fix is prompt-side: add an **anti-default clause** to the card prompt ("before writing `chief-risk`, write the specific stress test in one sentence — if you can't, pick the primary analyst whose domain owns the next question") plus a tweak to the opencode extractor that demotes any `chief-risk` whiteboard pitch whose rationale lacks specific stress-test vocabulary (`stress`, `sensitivity`, `tail`, `concentration`).

**Distortion #3** is the one the diagnostician **drastically undersold**: the in-flight backlog. Diagnostician saw 21 + 12 = 33 in-flight rows on day-of and proposed a 2-hour long-tail scanner. Querying 7 days of `workflow_runs`: **105 rows stuck in `running`**, oldest from 2026-04-21. Sampled 8 at random and asked agent-route: **8/8 are `completed` upstream**. This isn't a "long-tail" — the mirror DB has been silently desyncing for nearly a week. Reading `syncManagedScheduledRuns` exposes the cause: `institute_workflows.pending_run_id` is a single column. When `weekly_report` fans out on Sunday and 3 runs of the same `workflow_key` are concurrently non-terminal, only the newest occupies the pending slot; the older ones become **orphans** that the cursor-advance pass doesn't revisit. The damage propagates: salvage, auto-handoff, topic-pool harvest, opencode-extractor — none of the post-terminal hooks fire for orphaned runs. Every follow-up and whiteboard pitch in those workspaces silently lost.

This all goes into `vibelog/diagnostician-optimization-proposal.md` — a phased proposal ordered by impact:

- **R1** (high, ~80 LoC): add a third phase to `syncManagedScheduledRuns` — an age-bucket reaper that scans `running` rows older than 30 minutes, polls each upstream, and runs the full post-terminal pipeline on any that are actually `completed`. One-time backfill of the 105-row backlog plus an ongoing safety net.
- **R2** (medium, ~25 LoC): the chief-risk anti-default + opencode demotion described above.
- **R3.1** (free, prompt only): inject the role-mapping table into the diagnostician prompt.
- **R3.2** (~50 LoC): new `/api/fleet-health/snapshots?last=N` endpoint + the diagnostician must cite a prior-day snapshot before claiming `high` confidence on any anomaly.
- **R4** (free): diagnostician must call out which weekday the snapshot covers and scope conclusions to whichever workflow type dominated that day.
- **Deferred**: the diagnostician's own first recommendation (gate the QA-step routing). 7-day data shows auto-handoff is fine; that change would over-correct.

The shape of the lesson: **L2 is for surfacing direction, not magnitude**. With a 24-hour sample, the diagnostician will routinely over-call severity and miss week-scale latent failures. The proposal explicitly preserves the diagnostician's most valuable trait — its instinct to propose the LEAST aggressive intervention first ("just record the reason in prompt, don't yet tighten the threshold") — while building the human (or future-L3) workflow that takes its outputs as *inputs to investigate*, not decisions to enact.

### Phase 34: Letting Pitch Tasks Light Up the Mailbox Too

A day after the pool went live, a sharp observation: the scent-driven analysts' pitch tasks were running and producing files, but only the whiteboard side lit up downstream (4 seeds promoted into 8-card threads). Mailbox produced **zero** `[auto-handoff]` messages from any pitch run. Pulling sentiment-analyst's 06:30 pitch session and reading its `_coordination_extraction.json`: `follow_ups: []`. Root cause was honest and small: when the 25 pitch templates were defined the previous day, `enable_handoff: false` was set on all of them, which makes `buildAnalystPrompt` strip the Coordination Requests section out of the prompt entirely. The analyst was never told that emitting `follow_ups` was an option, so the model didn't — and the opencode-extractor, scanning the workspace afterward for both fenced-JSON and prose-form requests, correctly returned an empty array because there genuinely was nothing to extract. One-line fix: flip `enable_handoff: true` on all 25 pitch templates (kept `institute_diagnosis` at `false` — it's an advisory-only persona that doesn't coordinate). From the next cron tick onward, pitch tasks emit BOTH a whiteboard pitch (cross-analyst debate, goes into the pool) AND, when warranted, a follow-up (single-analyst targeted question, goes into mailbox auto-handoff) from the same scan. One workspace, two coordination channels.

### Phase 35: Bumping the Whiteboard Cadence from Hourly to Every 15 Minutes

Right after the `enable_handoff` flip, the next bottleneck was obvious: pool inflow had jumped (25 daily pitch tasks + briefing/daily synthesis pitches all feeding the pool), but kickoff was still capped at 24 boards per day — pitches were piling up faster than they could drain. Replaced the wrangler cron `0 * * * *` with `*/15 * * * *` to give 4× the kickoff rate. Subtle design pitfall avoided in passing: the existing kickoff handler had a fallback that called `createSeedWhiteboardSession` (model picks a topic randomly via web_search) whenever the pool was empty. At 4× frequency that fallback would have flooded the day with random-seed boards, completely defeating the pool's "replace the random method" purpose. The fix added a minimum guardrail: every 15 minutes, try `pickKickoffTopic` — **promote if the pool has a candidate**; on minute 0 only, if the pool is empty, fall back to the random seed (still ≤ 1×/hour, the old cadence's safety net); on minutes 15/30/45, an empty pool is a no-op. Net effect: a healthy pool drains at 4× the old cadence, a genuinely-empty-for-an-hour pool still produces one fallback board, and the random method is never the dominant kickoff source. The `*/5` cron continues to advance cards on existing boards, so the 8-card thread completes in about 12 minutes — the cadence lines up.

## Snapshot Statistics

These figures combine exact repository counts and labeled approximations from the build sessions through **April 28, 2026**.

### Exact Repo Snapshot (current)

| Metric | Value |
|---|---:|
| Backend routes in the worker | 50+ (added v1 admin/research/whiteboard/events, fleet-health endpoints, salvage endpoint) |
| Database migrations | 11 (added `0011`: whiteboard_topic_pool) |
| Cron triggers | 3 (`*/5` advances live boards + sync / `*/15` pool-driven kickoff / daily 16:00 UTC L1 snapshot) |
| Workflow templates shipped | 5 + diagnostician routine + 25 topic-pitch routines (5 scent-driven analysts × (4 weekday + 1 weekend) = 25 `topic_pitch_*`) |
| Managed workflows registered | 329+ (25 routine pitch tasks + per-ticker scoped deep-research workflows) |
| Coordination extraction layer | regex-based parsers + opencode roster-validated extractor (dual path, atomically deduped at emit) |
| Analyst personas | 40 |
| Model hands | claude / codex / gemini / opencode (opencode specialises in file-write salvage and auto-handoff post-processing) |
| Weekly schedule slots | Sunday-only, 24 hourly slots, 39 occupied via deterministic hash |
| Frontend themes | 4 themes × 2 modes; HTML preview via sandboxed iframe |
| Operator subsystem layers shipped | L1 (fleet observer) + L2 (diagnostician — first diagnosis run + companion proposal in `vibelog/diagnostician-optimization-proposal.md`); L3 + L4 deferred per design decision |
| Whiteboard topic seed pool | D1 `whiteboard_topic_pool` + content-hash dedup; hourly cron `pickKickoffTopic()` prefers pool, falls back to random seed |

### Approximate Build-Session Metrics

| Metric | Value |
|---|---:|
| Major user prompts / pivots in the visible build conversation | 35+ |
| Clearly visible bug classes reported during the build | 8 (auth 405, running-tasks 404, whiteboard preview, follow-up loop, queue timeout, parser empty field, dedup race, multi-tenant session bleed) |
| Public cloud layers actively described in the architecture | Worker, Pages, D1, R2, KV, Vectorize, Workers AI |

### Important Note

These are **snapshot numbers**, not full lifetime telemetry. The workspace currently does not provide a complete commit history for historical counting, so "conversations" and "bugs" are measured from the visible project-building thread rather than from every moment the project ever existed.

## What It Felt Like to Build

This may be the most important part of the story.

From the outside, vibe coding can look like effortless creation: ask for a feature, receive a feature, repeat until you have a product.

From the inside, it feels different.

It feels like standing in a room where the walls keep moving outward.

At the beginning, the dominant feeling is **surprise**. You can describe an ambitious system in plain language and watch a meaningful structure appear quickly. That part feels almost illegal.

Then comes **momentum**. Once the Worker is deployed, the UI loads, storage binds correctly, and the architecture starts holding together, the project begins to feel bigger than the sum of its files.

Then comes **friction**. Real systems do not politely stay inside the dream. An auth route rejects the wrong method. A dashboard polls an endpoint that does not exist yet. A file is generated but preview logic points to the wrong path. A follow-up task waits forever because the orchestration loop is one step short of autonomy.

That is when the emotional tone changes.

The builder stops feeling like someone "playing with AI" and starts feeling like a conductor, editor, product owner, systems designer, and debugger all at once.

And then, if the project survives that phase, something more satisfying arrives: **trust**.

Not blind trust in AI. Trust in the process. Trust that you can keep shaping a vague idea into a working institution if you stay honest about the details.

## Why This Project Is a Good Example of Vibe Coding

For people curious about vibe coding, this project is a strong example because it shows both the glamour and the grind.

The glamour:

- large architecture decisions can be expressed conversationally,
- features can be stacked quickly,
- UI, backend, storage, workflow logic, and deployment can all move in the same creative session.

The grind:

- naming and routing decisions still matter,
- storage paths still break,
- polling loops still need design,
- system boundaries still have to be enforced,
- "automatic" only works after someone defines the exact conditions for automation.

In other words: vibe coding does not remove engineering. It compresses the distance between idea and engineering.

That compression is powerful, but it also means the builder experiences more of the product's complexity sooner.

## Why the Project Feels Bigger Than an App

Most software tools solve one task. This project is trying to model a behavior:

how a research institution thinks.

That is why the final shape is interesting even to non-programmers. It is not merely a webpage with AI attached. It is an attempt to create:

- specialist roles,
- recurring routines,
- internal communication,
- memory,
- archives,
- collaborative disagreement,
- public-facing outputs,
- and a way for all of those parts to keep feeding one another.

That makes the project feel less like software and more like organizational design expressed in code.

## Closing Thought

If someone asked what this project really demonstrates, I would put it simply:

It shows that vibe coding is not only about generating code faster.

It is about turning conversation into structure.

A prompt became a worker. The worker became a platform. The platform became a team. The team became a workflow. The workflow became an institution with memory.

And somewhere in that process, the builder's feelings changed too:

from curiosity,
to excitement,
to frustration,
to obsession,
to the quiet satisfaction of seeing a complicated thing begin to act alive.

That may be the most honest definition of modern AI-assisted building I know.
