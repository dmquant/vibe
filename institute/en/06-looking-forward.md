# 6 · Looking Forward — Where This Goes

*Part 6 of 6 · ~6 min read*

---

We've covered the idea, the architecture, the two running apps, and
the build story. The last question is the most interesting one: where
does this go?

Not in the science-fiction sense. In the very concrete next-12-months
sense. What's plausibly in the cards for ResearchOS, for AI
Institute, and for the broader pattern of orchestrated AI agents
running on cheap infrastructure?

Three concentric circles, smallest first.

---

## Circle 1 — What ResearchOS becomes next

Near-term, the platform itself has a clear set of next steps:

### A third application

Right now there are two apps. The main thing missing is a third —
ideally one that's **not research-shaped**. Maybe code review across
a private repository. Maybe automated journalism (sourcing, drafting,
fact-checking). Maybe legal-document review.

The reason a third app matters isn't capacity. It's **abstraction
testing**. The two existing apps share a lot of shape (both ask AI
workers to produce text grounded in sources). A genuinely different
third workload is what reveals which parts of the platform are well-
factored and which were accidentally specialized.

I have ideas for the third app. I haven't picked one yet.

### Per-tenant isolation

Today the platform supports multiple "client apps" with proper
ownership scoping (each app sees only its own workflows, sessions,
ideas). What's missing for genuine multi-tenancy is per-tenant rate
limits and quotas. Without those, one app can starve the others. With
them, the platform could plausibly host friendly third-party apps,
not just my own.

### Smarter recovery

The platform has a watchdog that catches stuck tasks and a node-
liveness check that catches dead workers. What's missing is *graceful
degradation* — a clean handoff when an entire model provider has an
outage. Right now I find out from manual monitoring; ideally the
system finds out and routes around the outage on its own.

### A workbench you'd actually want to use daily

The current workbench dashboard does the basics well — kanban for
ideas, summary tiles for projects and recent activity, deep-link to
research sessions. What it doesn't do yet is *delight*. Drag-and-drop
between lanes. Inline rendering of report previews. A "convert this
idea into a workflow" button. These are weekend-project features but
they'd make the workbench something I'd want to live in.

---

## Circle 2 — What AI Institute becomes next

If ResearchOS is the platform, AI Institute is the showcase
application. Three plausible directions for it:

### Memory across days

Right now each day's briefing starts fresh — the analysts don't
remember what they wrote yesterday. Adding a real persistent memory
(not just file storage; *narrative continuity*) would make the
briefings sharper. "The energy analyst noted yesterday that crude
broke $80; today's update should explicitly comment on whether that
held." That kind of cross-day reasoning is currently missing and is
the obvious next leverage point.

### Real-time data integration

Today the analysts work from whatever the underlying AI models can
search the web for. Wiring in proper data feeds — Bloomberg-style
market data, news APIs, regulatory filings — would dramatically
upgrade what's possible. The platform supports this; I haven't built
it yet because the data licensing is a separate problem.

### A small group of beta users

If the operation continues to feel useful for me personally, the
obvious next step is opening it to a small group (say, 10) of
investment professionals as a beta. Not as a commercial product —
as a way to find out which parts of the workflow generalize and
which are idiosyncratic to me. The platform's per-app isolation
makes this feasible technically; what's not yet figured out is the
licensing of the underlying AI usage and the legal posture of an
"AI investment research" service that's not registered investment
advice.

That's not a small project. It's the project I'd start if I were
to commit to AI Institute as a full-time thing rather than a side
exploration.

---

## Circle 3 — What this pattern means more broadly

The most interesting question isn't what happens to my project. It's
what happens to the broader pattern.

The pattern: **one person + AI partner + cheap edge infrastructure
+ a few specialized AI workers = a small but real production system
that does meaningful work.**

That pattern is reproducible. It's not a stunt. It's now within reach
of anyone willing to spend a couple of weeks learning the ropes. And it's
about to enable a class of small-scale software that didn't really
exist before.

A few predictions for the next 12-24 months that I'd put real money on:

### 1. Vertical AI orchestration platforms become a real category

Right now most "AI platforms" are horizontal — they let you run AI
on anything. The interesting layer is vertical: orchestration
platforms tuned for a specific industry. AI for investment research.
AI for clinical trial coordination. AI for supply-chain analysis. AI
for niche legal practice areas. Each one looks like AI Institute but
specialized. Each one is buildable by a small team, possibly even by
one person.

### 2. The "individual builder operating at SMB scale" becomes common

The tools have collapsed the cost of building SaaS-grade software to
near zero. The people who notice this first will build a generation
of small, specialized, profitable software businesses operated by
one to three people each. Not unicorns. Just businesses that work,
that didn't exist before because the build cost was too high.

The pattern was already happening with no-code tools. AI partnership
makes it happen with full software, not just glue layers.

### 3. The skill that compounds is "describe what you want clearly"

The bottleneck has moved from production to specification. The
people who can articulate what they want — in plain language, with
unusual precision, attentive to edge cases — will build dramatically
more than people who can't. This is a skill. It's trainable. It's
not exclusive to engineers.

If you read this whole series and your only takeaway is "I should
practice writing clearer requests," that's the most actionable thing
to take.

### 4. AI agents become a layer in everyday business operations

The way email and spreadsheets are layers everyone uses without
thinking, AI agents will become. Most people will never build their
own platform like ResearchOS. Most people will use platforms that
*someone else* built — for marketing, for finance, for HR, for sales.
The pattern in this series is the *generic shape* of those tools.

The interesting question for any business reader: **which of your
current human workflows are about to look like AI Institute** —
where a team of specialized AI workers, coordinated by a thin layer
of orchestration, produces 80% of what a human team produces, at 1%
of the cost?

If the answer is "none," I'd encourage you to look harder. If the
answer is "a lot," the next question is what role you want to play
in that transition.

---

## A more personal closing

When I started building this on April 18, I didn't have a grand
plan. I was curious about whether one person could plausibly stand up
a multi-agent AI platform without a team. I built a prototype to find
out. The prototype turned out to work. Then I built a second app on
top of it, and that worked too. Then I built the dashboard, the
documentation, the roadmap, this article series.

What I have at the end is not a product. It's a working system, a
small body of writing about what was possible to build in ten
days, and a strong sense that **the gap between "interested in AI"
and "actually building useful things with AI" has become much
smaller than people generally realize**.

That gap is what these six articles are trying to close, in a small
way, for you.

If the platform itself becomes more — a product, a service, a
business — that's a separate decision I haven't made. If the
articles are useful as a glimpse of what's now possible, that's
already the outcome I was hoping for.

Thanks for reading. The next move is yours.

---

**Previous:** [The Build Story](./05-the-build-story.md)

---

*If anything in this series resonated and you want to talk about it
— what you're building, what you're thinking about building, how this
applies to your domain — I'd love to hear from you.*

*The articles in this folder are released under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Share them.
Adapt them. Send them to a friend who's curious about AI but hasn't
seen what's now possible.*

*Singapore · April 2026*
