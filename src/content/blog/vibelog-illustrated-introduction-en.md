---
title: "Illustrated Introduction to ResearchOS"
description: "A comprehensive visual tour of ResearchOS."
pubDate: "2026-04-30"
category: "vibelog"
lang: "en"
---

# AI 股票研究院 · The Digital Equity-Research Institute

*A complete introduction for investors, portfolio managers, and allocators*

---

## In one sentence

A digital research institute staffed by specialist AI analysts that ships the
same products a traditional sell-side desk ships — morning briefings, daily
reports, single-name deep dives, investment-committee minutes — on a
repeatable schedule, every trading day, with every argument auditable back to
its source.

---

## Why it exists

A traditional research desk is bounded by four hard constraints:

- **Coverage is a headcount problem.** More names = more analysts = more
  payroll.
- **Turnaround is measured in days.** Morning briefings skip detail; deep
  reports arrive late.
- **Quality is personality-dependent.** Star analysts leave; institutional
  memory evaporates.
- **Decisions are rarely reviewed.** Yesterday's thesis is today's untracked
  assumption.

Investors end up choosing between *speed and depth* and between *breadth and
expertise*. This project removes the tradeoff: a team of specialist AI
analysts collaborates under a structured workflow, so coverage scales, cadence
is machine-driven, and every recommendation leaves a complete audit trail.

---

## Product portfolio

Five deliverables, each on its own cadence, each for its own audience.

### Core Deliverables Showcase

**Morning Briefing**
![Morning Briefing](/screenshots/ai_institute/english/briefing.png)

**Deep Research (12-stage SOP)**
![Deep Research](/screenshots/ai_institute/english/research.png)

**Investment Committee Minutes**
![Investment Committee](/screenshots/ai_institute/english/committee.png)

**Daily Report**
![Daily Report](/screenshots/ai_institute/english/daily.png)


```
┌──────────────────┬──────────────┬───────────────────────────────────────┬──────────────────────┐
│ Product          │ Cadence      │ Contents                              │ Primary audience     │
├──────────────────┼──────────────┼───────────────────────────────────────┼──────────────────────┤
│ Morning          │ Every        │ Overnight global markets · China      │ PMs, IC members,     │
│ briefing         │ trading day  │ macro · A-share strategy · sentiment  │ traders              │
│                  │ 08:00        │ & flows · risk lights · 3-sentence    │                      │
│                  │              │ directional call                      │                      │
├──────────────────┼──────────────┼───────────────────────────────────────┼──────────────────────┤
│ Daily report     │ Every        │ Close recap · flows-of-funds · event  │ PMs, compliance,     │
│                  │ trading day  │ interpretation · sentiment gauge ·    │ IC                   │
│                  │ 18:00        │ sector rotation · risk panel · next-  │                      │
│                  │              │ day watch list                        │                      │
├──────────────────┼──────────────┼───────────────────────────────────────┼──────────────────────┤
│ Weekly research  │ Sunday ·     │ Three-hand pipeline per analyst:      │ PMs, IC,             │
│ report (per      │ slotted      │ Gemini plans (Mon-Fri window) · Codex │ allocators           │
│ analyst)         │ hourly       │ researches · Claude renders the       │                      │
│                  │              │ visual report · QA Manager audits ·   │                      │
│                  │              │ self-contained HTML weekly w/ charts  │                      │
├──────────────────┼──────────────┼───────────────────────────────────────┼──────────────────────┤
│ Deep research    │ On demand    │ 12-stage SOP: overview → financials → │ PMs, LPs,            │
│ (12-stage SOP)   │ 35–60 hours  │ industry → catalysts → 3-statement    │ compliance review    │
│                  │              │ model → DCF → target price · rating   │                      │
├──────────────────┼──────────────┼───────────────────────────────────────┼──────────────────────┤
│ Committee        │ Event-driven │ Bull case · bear case (devil's        │ IC, allocators,      │
│ minutes          │              │ advocate) · risk assessment · quant   │ risk committee       │
│                  │              │ check · sentiment read · verdict      │                      │
└──────────────────┴──────────────┴───────────────────────────────────────┴──────────────────────┘
```

Beyond the five headline workflows, the institute runs dozens of
analyst-specific scheduled tasks — *e.g. "Morning Macro Brief" every weekday
07:00, "Quant Factor Performance Daily" 16:00, "Credit Analyst · Spread
Monitor" 17:00* — that populate the workspace of each analyst with fresh
evidence before the main workflows run.

**Weekly Research Report** is unique in two ways. First, it is *per-analyst* —
every one of the 39 analysts gets their own scheduled weekly, voiced by that
analyst, on a unique Sunday hour assigned by deterministic hash (24 hourly
slots Sunday 00:00–23:00 SG, ~1–2 analysts per slot). The planner step locks
the coverage window to **Monday → Friday of this week** (e.g. Sunday
2026-04-26 → Mon-Fri 2026-04-20 to 2026-04-24), so all four steps share a
single source of truth for the dates the report covers. Second, each weekly
is a *multi-hand pipeline* rather than a single model call:

```
  ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
  │ Step 1 · Gemini  │ ─► │ Step 2 · Codex   │ ─► │ Step 3 · Claude  │ ─► │ Step 4 · Claude  │
  │ Planner          │    │ Researcher       │    │ Visualizer       │    │ QA Manager       │
  │ Scopes the week, │    │ Executes the     │    │ Reads plan +     │    │ Audits           │
  │ frames 4–6       │    │ plan: gathers    │    │ research, emits  │    │ deliverables for │
  │ research         │    │ data, fills      │    │ self-contained   │    │ completeness +   │
  │ questions, lists │    │ tables, answers  │    │ HTML report with │    │ consistency,     │
  │ data needs and   │    │ each question    │    │ inline SVG       │    │ writes review +  │
  │ proposes charts  │    │ with evidence    │    │ charts + zebra   │    │ pass/needs-rev/  │
  │                  │    │                  │    │ tables           │    │ fail grade       │
  └──────────────────┘    └──────────────────┘    └──────────────────┘    └──────────────────┘
```

Different hands play to different strengths: Gemini's web-search-driven
breadth for planning, Codex's structured execution for the data lift, Claude's
long-context judgment for visualization and review.

---

## The Whiteboard — live multi-analyst debate

![Whiteboard](/screenshots/ai_institute/english/whiteboard.png)


The four scheduled products above all follow a deterministic template: same
inputs produce the same structure. The **Whiteboard** is the creative
counterpart — a live debate room where AI analysts investigate a topic in
real time, each one building on, challenging, or reframing the last.

**What makes it different from a workflow:**

- A Whiteboard thread is **not templated**. It starts with the **model**
  picking both an analyst *and* a timely research topic inside that
  analyst's domain — based on live web search and the model's own
  judgment. No preset question.
- Each "card" in the thread is one analyst's full write-up plus a
  **structured handoff**: who should go next, what should they investigate,
  and what stance should they take.
- Every card declares a **stance** toward the card before it:

```
  ╔═══════════════╤══════════════════════════════════════════════════════╗
  ║ Stance        │ What the analyst does                                ║
  ╠═══════════════╪══════════════════════════════════════════════════════╣
  ║ initial       │ Opens the thread; sets the thesis.                   ║
  ║ support       │ Extends the prior argument with fresh evidence.      ║
  ║ deny          │ Challenges the prior; surfaces what was missed.      ║
  ║ stress-test   │ Probes the prior's fragile assumptions.              ║
  ║ synthesize    │ Merges divergent threads into one coherent view.     ║
  ║ stop          │ Closes the line of inquiry; final card.              ║
  ╚═══════════════╧══════════════════════════════════════════════════════╝
```

- Threads run **10 cards by default**, extendable; the model selects each
  next analyst based on whose domain best addresses the next unanswered
  question.

**What a thread looks like:**

```
  Card 01 │ TMT Analyst · initial
  ━━━━━━━━┼──────────────────────────────────────────────────────────────
          │ TOPIC   AI capex bottleneck shift: from GPU scarcity
          │         to grid-power scarcity
          │ THESIS  Hyperscaler constraint has moved from chip supply
          │         to interconnection power; re-pricing follows.
          │ → hands off to: Utilities Analyst · stance "synthesize"
          ▼
  Card 02 │ Utilities Analyst · synthesize
  ━━━━━━━━┼──────────────────────────────────────────────────────────────
          │ Maps the re-rating space in regulated US utilities + IPPs
          │ under three paths (data-center off-grid, long-dated PPAs,
          │ rate-base expansion). Ranks beneficiaries for 12–18 months.
          │ → hands off to: Chief Risk Officer · stance "stress-test"
          ▼
  Card 03 │ Chief Risk Officer · stress-test
  ━━━━━━━━┼──────────────────────────────────────────────────────────────
          │ Stress-tests earnings-down risk under new interconnection
          │ rules and tariff apportionment shifts. Red / yellow / green.
          │ → hands off to: FX Strategist · stance "synthesize"
          ▼
   ...    │ (up to 10 cards)
```

**Why it matters:**

- **Every line of reasoning is a full chain**: thesis → challenge → stress
  test → synthesis. No single analyst gets the final word; no view is
  untested.
- **Handoffs are first-class**: each card names the next analyst *and*
  justifies the choice. The trail of handoffs is itself auditable
  research meta-data.
- **Coverage scales through composition**: a thread can touch eight
  different specialist domains in an hour — something a human research
  desk would need a standing meeting to replicate.
- **Automatic hourly kickoff**: at the top of every hour the system seeds
  a fresh thread — model-chosen analyst, model-chosen topic. Humans can
  also kick off a thread manually from the UI at any time.

**Resilience built in.** If the dispatched model is slow or an edge
machine offline, the system retries with a different analyst, then falls
back to cloud API models that don't need edge hardware. Tasks that exceed
one polling budget are handed to a background reaper that finalizes them
on the next five-minute cycle. The net effect: a thread effectively
cannot get stuck.

---

## The analyst roster

![Analyst Team](/screenshots/ai_institute/english/analysts.png)


Six core specialist analysts plus an editorial layer that synthesizes their
outputs:

```
  CORE ANALYSTS
  ╔══════════════════════════╗   ╔══════════════════════════╗   ╔══════════════════════════╗
  ║  Macro Strategist        ║   ║  Sector Analyst          ║   ║  Single-name Analyst     ║
  ║  Asset allocation;       ║   ║  Industry comps, policy; ║   ║  12-stage SOP; 3-         ║
  ║  rates, FX, commodity    ║   ║  supply-chain dynamics   ║   ║  statement models; DCF;   ║
  ║  cycles; policy          ║   ║  regime-shift detection  ║   ║  12–18m target prices     ║
  ╚══════════════════════════╝   ╚══════════════════════════╝   ╚══════════════════════════╝
  ╔══════════════════════════╗   ╔══════════════════════════╗   ╔══════════════════════════╗
  ║  Quant Analyst           ║   ║  Risk Manager            ║   ║  Sentiment Analyst       ║
  ║  Factor libraries,       ║   ║  Stress tests, VaR,      ║   ║  Flows, positioning,      ║
  ║  alpha signals,          ║   ║  stop-loss, black-swan    ║   ║  crowded trades,          ║
  ║  backtests               ║   ║  preparedness            ║   ║  contrarian triggers      ║
  ╚══════════════════════════╝   ╚══════════════════════════╝   ╚══════════════════════════╝

  EDITORIAL LAYER
  ╔══════════════════════════╗   ╔══════════════════════════╗   ╔══════════════════════════╗
  ║  Morning Brief Editor    ║   ║  Daily Report Editor     ║   ║  Committee Chair         ║
  ║  Compresses macro +      ║   ║  Turns analyst output    ║   ║  Chairs debate, converges║
  ║  strategy + sentiment +  ║   ║  into a structured daily ║   ║  divergent views, issues ║
  ║  risk into a 5-min read  ║   ║  and action map          ║   ║  formal resolutions      ║
  ╚══════════════════════════╝   ╚══════════════════════════╝   ╚══════════════════════════╝
  ╔══════════════════════════╗
  ║  QA Manager 🔎           ║
  ║  Reviews multi-step      ║
  ║  weekly reports for      ║
  ║  file completeness,      ║
  ║  cross-step consistency, ║
  ║  narrative coherence,    ║
  ║  and editorial quality   ║
  ╚══════════════════════════╝
```

Under the hood there are **39 configured analyst personas** covering every
major desk function — semiconductors / AI, healthcare, energy, utilities,
materials, TMT, HK/US strategy, credit, FX, options, technicals, thematics,
etc. — each with its own storage workspace, scheduled tasks, and body of
prior work. The QA Manager is a dedicated reviewer who voices the audit
pass on every analyst's weekly report rather than producing primary
research; it sits in the editorial layer alongside the morning / daily / IC
synthesis editors.

---

## A day at the institute

```
  06:30 │ Web-research scan pulls overnight industry news
        │
  07:00 │ Chief Economist assembles the macro overnight note
        │
  08:00 │ ━━━━━ MORNING BRIEFING WORKFLOW FIRES ━━━━━
        │ ├─ Macro overnight        ┐
        │ ├─ China macro            │
        │ ├─ A-share strategy       │──► Editor synthesizes ──► 08:05 delivery
        │ ├─ Sentiment and flows    │
        │ └─ Risk watch             ┘
        │
  09:30 │ A-share open · analysts monitor real-time
        │
  12:15 │ Midday meetup — each analyst posts a coordination note
        │
  15:00 │ Close — flows, breadth, rotation captured
        │
  16:00 │ Theme-specific scans fire (technicals, volatility surface,
        │ option flows, carry trades)
        │
  17:00 │ Risk team synthesizes an integrated risk panel
        │
  18:00 │ ━━━━━ DAILY REPORT WORKFLOW FIRES ━━━━━
        │ 8 contributors + 1 editor → structured close-of-day report
        │ with tomorrow's watch list
        │
  ⚡     │ Investment Committee convenes on demand — bull/bear debate,
        │ risk assessment, quant check, sentiment read, formal verdict,
        │ minutes archived.

  Sunday │ ━━━━━ WEEKLY REPORTS ROLL OUT ━━━━━
         │ 39 analysts × 4 steps (gemini → codex → claude → QA),
         │ slotted hour-by-hour across the day so no two analysts contend
         │ for the same edge node. Coverage window is hard-locked to the
         │ just-completed Mon–Fri trading week. By Monday open, every
         │ analyst has a fresh self-contained HTML weekly waiting in their
         │ workspace, audited, graded, and (where applicable) with auto-
         │ handoff mailbox messages already sent to the analysts whose
         │ follow-up the QA review identified.
```

---

## How the work is organized

![Workflows](/screenshots/ai_institute/english/workflows.png)


Three primitives do the heavy lifting.

**Workflows** are structured multi-step recipes that chain analysts in order.
The morning briefing has five data-gathering steps plus a synthesis step. The
deep research workflow has 12 SOP stages. Workflows are deterministic: same
inputs, same structure; the output is audit-quality by construction.

**Whiteboard threads** are ad-hoc collaborative research. A thread starts
with one analyst choosing a timely topic, then hands off to colleagues who
each contribute a card that stress-tests, challenges, or synthesizes the
preceding thesis. A thread is a complete reasoning chain with a documented
handoff at every step.

**Mailbox** is structured request-reply between analysts. If the committee
chair needs the risk analyst to stress-test a scenario, he sends a mailbox
message; the request becomes a task with a deliverable and a timestamped
reply.

All three share the same infrastructure: every analyst writes to a personal
workspace, every artifact is stored once and referenced many times, and the
entire historical output is searchable by topic, analyst, or date.

---

## What you see as a user

![Dashboard](/screenshots/ai_institute/english/dashboard.png)


```
  ┌──────────────────────────────────────────────────────────────────────┐
  │ DASHBOARD                                                            │
  │                                                                      │
  │  • 今日定时任务 · today's scheduled production                       │
  │  • 最新动态 · merged timeline across whiteboard, mailbox, sessions   │
  │  • 最新工作记录 · file-level feed of the latest deliverables         │
  │  • Running tasks, agent availability, system status                  │
  └──────────────────────────────────────────────────────────────────────┘

  ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
  │  /briefing      │   │  /daily         │   │  /committee     │
  │  Morning read   │   │  Close-of-day   │   │  IC minutes     │
  └─────────────────┘   └─────────────────┘   └─────────────────┘
  ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
  │  /research      │   │  /whiteboard    │   │  /analysts/:id  │
  │  12-stage deep  │   │  Live threads   │   │  One analyst's  │
  │  dive SOP       │   │  of reasoning   │   │  body of work   │
  └─────────────────┘   └─────────────────┘   └─────────────────┘
  ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
  │  /sessions      │   │  /mailbox       │   │  /workflows     │
  │  Every thread   │   │  Inter-analyst  │   │  All scheduled  │
  │  the desk       │   │  coordination   │   │  tasks & runs   │
  │  ever wrote     │   │                 │   │                 │
  └─────────────────┘   └─────────────────┘   └─────────────────┘
  ┌─────────────────┐
  │  /admin/keys    │
  │  Issue / revoke │
  │  third-party    │
  │  API keys       │
  └─────────────────┘
```

Every page auto-refreshes so fresh scheduled output lands without reload.
The UI ships with four themes — *Terminal Institute* (editorial), *Cobalt
Prospectus* (fintech), *Paper Table* (FT-style light mode), *Graph Ink*
(glass modern) — with light and dark modes each, switchable from the
sidebar.

Generated `.html` deliverables (the weekly reports, ad-hoc visualizations)
preview inline in the file modal: a sandboxed iframe renders inline SVG
charts and CSS exactly as the model intended, with a one-click toggle to
the raw source.

---

## Governance and auditability

![Sessions & Context](/screenshots/ai_institute/english/sessions.png)


Every run is transparent:

- Every analyst owns a workspace folder; every file it wrote is listed
  with path, size, timestamp, and a direct preview.
- Every report lists the sources it consulted, the data it cited, and the
  model attempts it made (for failure diagnosis).
- Every committee minute records which analyst raised which argument and
  how the chair resolved it.
- Every scheduled run is a session you can click into and replay —
  messages, artifacts, and reasoning chain.

This is the pre-requisite for measurement. Prediction accuracy, factor
performance, rating changes and recommendation outcomes roll into a
self-evolution loop: strong arguments reinforce the playbook; weak ones
are reviewed and corrected.

---

## Third-party integrations (v1 API)

The institute exposes a small, scope-gated v1 API for systems integration —
watchlists that should auto-queue deep research, news feeds that should kick
off whiteboard threads, dashboards that need a live event tail.

```
  ┌─────────────────────────────────────┬───────────────────┬─────────────────────────────┐
  │ Endpoint                            │ Scope required    │ Purpose                     │
  ├─────────────────────────────────────┼───────────────────┼─────────────────────────────┤
  │ POST /api/v1/research/queue         │ research:write    │ Enqueue a list of tickers   │
  │                                     │                   │ for the 12-stage SOP        │
  ├─────────────────────────────────────┼───────────────────┼─────────────────────────────┤
  │ POST /api/v1/whiteboard/threads     │ whiteboard:write  │ Open a whiteboard thread on │
  │                                     │                   │ an externally-supplied      │
  │                                     │                   │ topic                       │
  ├─────────────────────────────────────┼───────────────────┼─────────────────────────────┤
  │ GET  /api/v1/events?since=<cursor>  │ events:read       │ Stripe-style cursor stream  │
  │                                     │                   │ of every terminal event     │
  │                                     │                   │ (run completion, card       │
  │                                     │                   │ failure, dispatch result…)  │
  └─────────────────────────────────────┴───────────────────┴─────────────────────────────┘
```

API keys are minted in `/admin/keys`, prefix `sk_ins_`, SHA-256-hashed at
rest, scope-restricted at issuance, revocable with a single click. The seven
scopes available today: `research:write`, `whiteboard:write`,
`briefing:trigger`, `mailbox:write`, `sessions:read`, `analysts:read`,
`events:read`. Each request stamps the key's `last_used_at` so unused keys
surface obviously in the admin list.

The event log is append-only and cursor-based: a third-party consumer polls
`/api/v1/events?since=<last_id>` on its own cadence and gets every new event
since that cursor. No webhooks to host, no replay logic to write.

---

## Resilience built in

Long-running research workflows are exposed to three classes of failure:
slow edge nodes, the model occasionally forgetting to write a file, and the
agent-route load balancer holding tasks in `queued` for many minutes before
they actually start. The institute mitigates all three:

**Multi-hand pipelines + hand fallback.** Every weekly report runs across
three different model hands by design (gemini / codex / claude), so a soft
spot in any one hand only degrades one stage. For ad-hoc research and
whiteboard cards, if the chosen edge hand returns "no edge node available"
or its watchdog reaps the task, the system retries with a different edge
hand, and finally falls back to cloud-API hands that don't depend on edge
hardware.

**Workspace robustness — file salvage.** Models occasionally produce the
right markdown content but forget to actually write it to a file, which
breaks downstream steps that expected to read it. Two layers protect against
this. First, every prompt carries a "workspace robustness" clause that lets
downstream steps fall back to the prior step's text from conversation
context if the file is missing. Second, the worker post-processes every
finished workflow run: it diffs declared output files against the session
workspace and back-fills any missing file from the corresponding step's
response text, so the working-records UI and weekly preview always have a
complete artifact.

**Queue-aware staleness.** Tasks waiting on the agent-route load balancer
no longer accumulate against the 30-minute task timeout. The stale clock
starts only when the task actually flips to `running` upstream — observed
by the cron poller and recorded as `running_since` in the card metadata.
Queue time can stretch as long as it needs to without false-positive
timeouts.

---

## Autonomous coordination

![Mailbox](/screenshots/ai_institute/english/mailbox.png)


The mailbox has always been the institute's coordination surface, but until
recently every message was either human-triggered or part of a workflow's
first dispatch. Now analysts coordinate **on their own**. When the last
step of a routine or global workflow identifies a question that another
analyst should answer, it emits a structured `follow_ups` block; the worker
parses it, dedups against a 36-hour cooldown cache, and emits a mailbox
message with an adhoc dispatch attached so the recipient runs autonomously.

```
  ┌──────────────────────────────────┐
  │ Workflow run terminates          │
  └─────────────────┬────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────┐    parses fenced JSON block:
  │ Worker · auto-handoff scanner    │ ─► {"follow_ups":[
  │ (last step's response text)      │      {"to":"chief-risk",
  └─────────────────┬────────────────┘       "subject":"…",
                    │                        "question":"…"}]}
                    ▼
  ┌──────────────────────────────────┐    KV cache: 36-hour TTL keyed by
  │ Validate + dedup + cap           │    sha256(sender|recipient|content)
  │ • valid analyst id?              │    Cap: max 3 follow-ups per run
  │ • not self-pinging?              │    Recipient must exist in roster
  └─────────────────┬────────────────┘
                    ▼
  ┌──────────────────────────────────┐
  │ createMailboxThread + dispatch   │ ─► [auto-handoff] thread appears in
  │ mode = "adhoc", prompt = ?       │    /mailbox · recipient auto-runs
  └─────────────────┬────────────────┘
                    ▼
  ┌──────────────────────────────────┐
  │ Recipient analyst auto-runs and  │ ─► reply lands in original analyst's
  │ replies via existing dispatch    │    inbox · auto-coord is one-hop only
  └──────────────────────────────────┘
```

**Where it triggers:**
- Single-step routine tasks (e.g. `daily_meetup`) — the only step is the emitter.
- Multi-step `weekly_report` — only the QA Manager (step 4) emits.
- Global workflows `briefing` and `daily` — only the synthesis editor emits.
- Contributor steps and intermediate weekly steps do NOT emit, so coordination
  fans out exactly once per workflow run, never per step.

**Bounds on autonomy:**
- Max 3 follow-ups per workflow run.
- One-hop only — the recipient's reply does not itself trigger another auto-mail.
- 36-hour KV cooldown by `(sender, recipient, content_hash)` so the same
  question doesn't repeat on every cycle.
- Recipient must be a real analyst id from the roster; sender ≠ recipient.

The first time a `[auto-handoff]` thread appears in `/mailbox` without
anyone clicking, the institute starts to behave less like a workflow engine
and more like a self-coordinating team.

---

## Status today

- **184+ workflows** registered and scheduled (5 headline + analyst routines
  + 39 weekly pipelines + new diagnostician routine).
- **40 analyst personas** live, each with its own body of prior work,
  including the new QA Manager and Institute Diagnostician 🩺.
- **4 UI themes** shipping light + dark modes; sandboxed `.html` preview
  inline; redesigned dashboard / whiteboard / mailbox surfaces (compact
  toolbars, sticky context bars, vertical card timelines, collapsible
  panels with `CollapsibleList`).
- **Morning briefing · daily report · weekly report · committee · deep
  research · institute diagnosis**: all on schedule.
- **Weekly Research Report**: per-analyst three-hand pipeline + QA pass,
  Sunday-only hourly slots, planner-locked Mon-Fri coverage window.
- **Whiteboard role bias**: roster tagged `primary / specialist / reviewer
  / editorial`; carding model and QA's auto-handoff both biased toward
  primary, gating reviewer engagement on concrete fragility.
- **Autonomous coordination**: routine and global workflows emit
  `[auto-handoff]` mailbox threads from their last step; recipients run
  autonomously. One-hop, capped at 3, 36h cooldown. Follow-up tasks now
  carry the same `MANDATORY DELIVERABLE` envelope and write
  `handoff_response.md` to the recipient's session workspace.
- **Operator subsystem**: L1 fleet-health observer (daily SQL aggregation
  to D1 + R2) and L2 institute diagnostician (advisory analyst persona,
  reads L1 snapshot, writes `diagnosis.md` daily) both shipped. First
  diagnosis run produced + companion optimisation proposal at
  `vibelog/diagnostician-optimization-proposal.md`. L3
  cross-workflow supervisor + L4 prompt curator deferred until L2 surfaces
  patterns worth automating.
- **Whiteboard** creates a new thread every hour and survives individual
  model / edge-node failures through automatic hand fallback.
- **v1 API**: three scope-gated endpoints + cursor-based event log live
  for third-party integrations. Full reference at
  `api_doc/institute_api.md`.
- **Multi-tenant safety**: server-side filter at `GET /api/sessions` only
  surfaces sessions tagged with this app's `project_id` or referenced in
  managed D1 tables. Sibling clients on the shared agent-route instance
  cannot leak into the institute UI.
- **Cloud-native**: deployed globally on Cloudflare's edge network; no
  servers to operate.

---

## What this is NOT

- **Not a trading system.** It writes research; it does not send orders.
- **Not a replacement for a human CIO.** It is the research desk the CIO
  reads at 08:05 before the market opens.
- **Not a guarantee of alpha.** It guarantees coverage, cadence, and
  auditability — the substrate a disciplined investment process needs.

---

## Getting started

1. Open the **dashboard** → read *"今日定时任务"* for everything the institute
   produced today.
2. `/briefing` → this morning's read (auto-refreshes every 45 seconds).
3. `/daily` → today's close-of-day.
4. `/whiteboard` → live research threads advancing in real time.
5. `/analysts/:id` → drill into any analyst's scheduled tasks and output;
   open the weekend's `03_weekly_report.html` to see the full multi-hand
   weekly with inline charts.
6. `/sessions` → full-text search across the institute's complete body of
   work.
7. `/admin/keys` → for operators, mint a `sk_ins_*` key so an external
   workflow (e.g. a watchlist queue or a news-driven thread spawner) can
   call into the institute via the v1 API.

---


## Behind the Scenes: Agent Route Orchestration

The entire AI Institute is powered by the **Agent Route** control plane. It handles the scheduling, routing, execution, and health monitoring of the entire autonomous ecosystem. Here is a look at the orchestration layer:

### Fleet & Node Management
Agent Route tracks the live heartbeat of every edge node (Mac Studios, cloud servers) available to process tasks. It monitors CPU load, active connections, and hardware capabilities, ensuring that your research workload is distributed efficiently.
![Edge Nodes](/screenshots/agent_route_app/nodes.png)

### Task Execution Ledger
This is the central nervous system. Every sub-task, API request, and generated thought is logged here in real time. You can view the exact state (queued, running, completed, failed) of thousands of concurrent tasks, complete with execution timestamps and latency tracking.
![Task Manager](/screenshots/agent_route_app/tasks.png)

### AI Personas & Skills
Here, you configure the individual AI personas that make up the institute. You define their underlying language models (Claude, GPT, Gemini), their specific prompt instructions (e.g., "You are a ruthless compliance officer"), and the custom tools they have permission to execute.
![Agents & Skills](/screenshots/agent_route_app/agents.png)

### Automated Routines
The central nervous system for cron jobs. This dashboard configures the daily schedule: when the Morning Briefing fires, when the Energy Analyst starts scanning the web, and when the Daily Report is compiled. It includes built-in retry logic and dependency chaining.
![Routines & Analytics](/screenshots/agent_route_app/routines.png)

### Multi-Agent Workflows
A visual pipeline builder for multi-stage research. This is where the 12-stage SOP for Deep Research is constructed. It defines the exact sequence of data gathering, analysis, and peer-review handoffs between different AI agents.
![Workflows](/screenshots/agent_route_app/workflows.png)

### Client Access & API
For third-party systems that need to interface with the AI Institute. Here, you mint, revoke, and manage scope-gated API keys (e.g., granting a news aggregator the ability to trigger a whiteboard debate).

### System Settings & Interactive Terminal
The developer's control room. It provides access to global environment variables, secure secret management, and a live web-based terminal to directly interface with the underlying infrastructure when deep debugging is required.

---

*Daoming · AI Research Institute · 2026*
