---
title: "AI Institute — The Research Platform"
description: "Part 4: Deep dive into the 42-analyst autonomous research ecosystem."
pubDate: "2026-04-30"
category: "institute"
lang: "en"
---

# 4 · App Spotlight — AI Institute

*Part 4 of 6 · ~9 min read*

---

If Infinite Research is "ask one question, get a tree of answers," then
**AI Institute** is something quite different: a *standing team* of AI
analysts, each with a defined role, working to a shared schedule, on a
specific domain — investment research.

Think of it as a small research firm where every analyst is an AI, the
office runs 24 hours a day, and the whole operation costs roughly what
one junior human analyst's *health insurance* would cost — meaningfully
less than the analyst themselves.

This article walks through what AI Institute is, who's on the "team,"
what they produce, and what it actually feels like to operate.

---

## Why investment research is the perfect testbed

Investment research is interesting as a use case because it has all the
properties an AI orchestration platform is built for:

1. **It has clear roles.** A real investment shop has equity analysts,
   credit analysts, derivatives strategists, ESG specialists, compliance
   officers, an investment committee chair. Each has a defined job, a
   defined output, and a defined audience. AI workers can be assigned
   roles cleanly.

2. **It has clear cadence.** Daily morning briefings, weekly themed
   reports, ad-hoc deep dives. Most of it is scheduled work that happens
   on the same rhythm regardless of who's available.

3. **It has a clear quality bar.** A well-formatted report with
   sources, structured analysis, and a recommendation is unambiguously
   useful. A broken layout or fabricated source is unambiguously not.
   You can tell quality at a glance.

4. **It rewards integration.** A good morning briefing pulls together
   what the macro analyst saw overnight, what the equities team flagged,
   what the compliance officer's monitoring system caught. The value
   comes from **synthesis** — exactly what coordinated AI agents are
   good at.

5. **The marginal cost of an extra analyst is meaningful at human scale,
   nearly zero at AI scale.** Hiring an additional human ESG analyst costs
   $150K/year and three months. Adding an AI ESG analyst costs zero
   incremental dollars (the underlying Claude / ChatGPT / Gemini
   subscriptions are flat-rate and cover all the analysts together) and
   30 minutes of prompt design.

That last point is the unlock. AI Institute exists because once you've
paid for the AI subscriptions, adding the 6th, 7th, 8th specialized
analyst is free.

---

## The roster

AI Institute currently runs with these defined roles. Each is a
specific AI worker with a specific persona, expertise focus, output
format, and schedule.

| Role | Cadence | Output |
| --- | --- | --- |
| **首席量化师 (Chief Quant)** | weekly | Multi-factor models, alpha mining, portfolio construction notes |
| **能源行业分析师 (Energy Analyst)** | daily | Oil/gas/coal/renewables/electricity sector tracking |
| **公用事业分析师 (Utilities Analyst)** | daily | Power, water, environmental utilities sector |
| **房地产分析师 (Real Estate Analyst)** | daily | Property sales, land auctions, REIT tracking |
| **可转债分析师 (Convertible Bond Analyst)** | daily + alerts | Convertible valuation, premium compression, force-redemption alerts |
| **衍生品策略师 (Derivatives Strategist)** | daily + alerts | Basis trade monitoring, options flow |
| **ESG分析师 (ESG Analyst)** | daily + weekly | Carbon policy tracking, greenwashing scans, ESG score updates |
| **合规官 (Compliance Officer)** | daily stress test | Reads the day's outputs, flags anything that needs disclosure or escalation |
| **主题研究员 (Theme Researcher)** | weekly | Themed deep dives — current themes include AI value chain, semiconductor, low-altitude economy |
| **社交媒体分析师 (Social Media Analyst)** | daily | Sentiment from Xueqiu, Eastmoney, Weibo |
| **技术分析师 (Technical Analyst)** | daily | Chart patterns, MA systems, volume analysis |
| **投委会主席 (Investment Committee Chair)** | daily morning | Synthesizes all the above into a single prioritized briefing |
| **日报总编 (Daily Brief Editor)** | daily evening | Assembles the published version of the day's morning briefing |

That's 13 distinct analyst roles, each scheduled to run automatically.
A real investment shop with this much coverage would have 30+ humans.

---

## A typical day

Here's what actually happens in AI Institute on a normal weekday.

### 06:30 — Roles wake up

A scheduler triggers. The energy analyst, real-estate analyst, ESG
analyst, social-media analyst, and technical analyst all start their
morning runs in parallel. Each pulls overnight data, does its
specialized analysis, and writes a short brief into a shared workspace.

Each brief takes 5–10 minutes. They run on Claude or Codex CLI agents
distributed across a couple of Mac Studios.

### 07:30 — Specialized briefs land

Six or seven 1-page reports show up in the workspace. Each has the
analyst's name, the date, a tight summary, key data points, and any
recommendations.

The compliance officer wakes up next. It reads every brief produced so
far, looks for anything that's too speculative, anything that
references material non-public information, anything that needs a
disclaimer. It flags issues.

### 08:00 — The morning huddle

The investment committee chair (also an AI) reads everything: the
specialist briefs, the compliance flags, the social-media sentiment
report. It writes a 2-page coordination memo:

- Top 3 takeaways
- One actionable recommendation
- Open questions for the day

This is the document I read with my morning coffee.

### 09:00 — Themed reports

If it's Monday, the theme researcher kicks off a deeper investigation
on whatever weekly topic is queued: "AI infrastructure in China,"
"low-altitude economy in 2026," "convertible bond opportunities post-
rate cut." This produces a much longer report by end of day.

### Throughout the day — Alerts

The convertible-bond analyst and derivatives strategist run alert-mode
workflows. If a convertible bond hits a force-redemption threshold or
a basis trade opens up beyond a configured spread, an alert fires.

### 18:00 — Daily brief

The daily-brief editor compiles the morning huddle, intraday alerts,
and key follow-ups into a published version. It saves to the workspace
and (optionally) emails to a configured distribution list.

### Overnight — Recovery and prep

The system queues up tomorrow's morning runs. Any failed jobs from the
day get retried. The workspace gets cleaned up.

The next morning, the cycle repeats.

---

## What this looks like to me, the operator

I open my browser at 08:00. I see:

- A morning briefing from the investment committee chair (2 pages)
- Six or seven specialist briefs (1 page each)
- A compliance-officer note (often empty, occasionally interesting)
- Yesterday's themed report if there was one
- A handful of alerts since I last looked

I read the briefing. If something looks wrong or shallow, I drag the
underlying brief into the kanban and write a one-line note: *"this
needs a deeper take on the policy angle."* That triggers a re-run with
the additional context.

If a theme catches my eye, I click "research this idea" — that spawns
an Infinite Research session (the app from the previous article) on
the topic. Twenty minutes later I have a 30-page deep dive.

If I want to add a new analyst role — say, a "quantitative credit
analyst" — I create a workflow definition: specify the prompt, the
schedule, the model, the output format. Save. Tomorrow morning at
06:30, the new analyst starts producing.

That's the operator experience. It feels like running a small
research firm without the HR department.

---

## How much it actually costs

Honest accounting for one month of running AI Institute at this scale:

- **AI subscriptions** — the dominant line item. I run top-tier plans
  on Claude, ChatGPT, and Gemini, each ~$200/month. Roughly **$600/month**
  for the three combined. These are flat-rate plans that I'd be paying for
  anyway as a working professional; AI Institute just leverages them
  harder than a typical user would.
- **Hardware** — a couple of Mac Studios and a MacBook I already own.
  No new hardware was purchased for this. Marginal electricity cost is
  small (~$10/month).
- **Cloud orchestration** — under $5/month on Cloudflare (Workers, D1,
  R2, KV, Queues — all on the cheap tier).
- **Third-party APIs** — ~$20–40/month for various data and tooling
  endpoints (search, embeddings, occasional specialized model calls).

Total run-rate: roughly **$650/month all-in** for a 13-analyst, 24/7
research operation, dominated by AI subscriptions I'd carry regardless.

For comparison, a single Bloomberg terminal subscription is ~$2,500/month
and gives you data, not analysts. An equity analyst at a buy-side firm
in Singapore is $200K/year fully loaded — about $17,000/month. AI
Institute runs at ~4% of that cost.

The cost-per-output here is probably 100× lower than the human
equivalent for the categories of work AI is genuinely good at —
which is "first-pass synthesis, pattern recognition across published
sources, structured summarization." It is *not* better at original
contrarian thinking, primary research, or deal sourcing.

---

## What this is *not*

To set expectations clearly:

- **Not a trading system.** Nothing here places orders. The output is
  documents for a human to read.
- **Not a substitute for primary research.** Everything an AI analyst
  knows comes from published sources. It can't talk to management,
  attend conferences, or visit factories.
- **Not a guaranteed-correct system.** AI workers occasionally miss
  things, occasionally over-confidently state wrong things,
  occasionally just produce junk. The compliance officer catches some
  of this. The human reading the briefing catches the rest. Nobody
  should run capital based purely on the output without their own
  judgment layer.
- **Not a regulated investment-advice service.** It produces research
  for personal use. If anyone wanted to commercialize this, there
  would be a long compliance journey before public release.

What it *is* is a productivity multiplier for someone doing their own
research. It saves me 4–6 hours a day of routine "stay current on the
markets" work that I now have done for me before I wake up.

---

## What I learned building it

Three things I didn't expect:

### 1. Roles are more important than models

Early on I assumed "use the best model for everything." I was wrong.
The same model assigned to different *roles* with different prompts
produces wildly different output quality. A "compliance officer" persona
produces meaningfully better risk-flagging than the same model asked the
same question without the role framing. Persona engineering ended up
mattering more than model selection.

### 2. The hard part is the schedule, not the analysis

Building 13 analysts that each work well in isolation took maybe 20%
of the effort. The other 80% was orchestration: making sure they run
in the right order, that the synthesizer waits for the specialists,
that failures are caught, that the morning briefing actually shows up
at 8:00 every day. The "operating system" was the hard problem; the
analysts were the easy one.

### 3. Quality goes up dramatically when analysts read each other's work

The single biggest jump in usefulness came from having later-in-the-
sequence analysts read what earlier ones produced. The compliance
officer reading the energy analyst's draft is dramatically more useful
than the compliance officer working in isolation. Cross-pollination
between AI workers is where most of the leverage is.

---

## Where this goes

Three directions for AI Institute over the next few months:

1. **Memory across days.** Right now each day starts fresh. Adding a
   real persistent memory (the analyst remembers what they wrote
   yesterday) will make the briefings much sharper.

2. **External data sources.** Wiring in real-time market data feeds,
   news APIs, and SEC filings will move the operation from "smart
   summary of public knowledge" to "smart summary of fresh public
   knowledge."

3. **Human reviewer pipeline.** A queue where I can flag a brief as
   "needs revision" and the AI re-generates with my note attached.
   This is mostly UX work; the platform supports it already.

If those land, the operation becomes meaningfully more useful — and
plausibly something I'd consider opening up to a small group of
beta users.

---

The platform that AI Institute runs on isn't sophisticated, but it
took some doing to put together. The next article is the personal
story of building it — what it actually feels like to construct
infrastructure with an AI partner, in 10 days.

---

**Previous:** [App Spotlight — Infinite Research](./03-infinite-research.md)  ·  **Next:** [The Build Story](./05-the-build-story.md)
