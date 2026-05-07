---
title: "The Build Story — Ten Days with AI"
description: "Part 5: The personal journey of building ResearchOS in 10 days."
pubDate: "2026-04-30"
category: "institute"
lang: "en"
---

# 5 · The Build Story — Ten Days with an AI Partner

*Part 5 of 6 · ~8 min read*

---

The platform behind everything described in the previous four articles
was built across **ten days** in April 2026 (April 18 through April 27),
by one person, in between other commitments.

It's not the largest software project ever made. It's also not nothing
— roughly 31,000 lines of code spread across six small applications,
deployed globally, running 24/7, supporting two production apps
(Infinite Research and AI Institute) plus an admin dashboard.

What's interesting isn't the code. What's interesting is **what it
felt like** to build it. Because the experience of writing software
in 2026 — at least with a serious AI coding partner — is genuinely
different from what it was 24 months ago, in ways that I think matter
beyond software.

This article is the personal story. If you don't write code, you
should still recognize the pattern — it's spreading quickly to other
domains.

---

## What "vibe coding" actually means

You may have seen the phrase "vibe coding" floating around. It's
shorthand for a style of building software where:

- You describe what you want in plain English
- An AI partner writes most of the code
- You read, edit, redirect, and steer
- You ship things you wouldn't have attempted alone

The phrase is half-joking — there's still real engineering happening,
the AI doesn't make architectural decisions for you, and somebody has
to debug when things break. But the half that's serious is genuinely
new: the typing-the-code part, which used to be 80% of the work, is
now 20%. The remaining 80% is taste, judgment, and steering.

It's less like writing and more like directing.

---

## The phases I went through

Ten days compressed into roughly four phases. Each one had a distinct
emotional shape.

### Days 1–2 — The "this is magic" phase

I described in plain English what I wanted to build. The AI generated
a working prototype within hours. I deployed it to the internet. I
watched real users (well, me) use it.

The dominant feeling was disbelief. *This shouldn't be working this
quickly.* I'd been a casual coder for years; I'd built small things
before, but always slowly, always painfully, always abandoning them
before they were useful. The first time I deployed something real,
end-to-end, in a single afternoon, I genuinely didn't believe what
I was seeing.

This phase is dangerous. You think you've discovered a cheat code.

### Days 3–4 — The "this is broken in subtle ways" phase

Then the bugs arrived. Not crashes — those are easy. The bugs were
subtle: things that *looked* right but produced subtly wrong results.

A counter that should be incrementing once per task was incrementing
three times. A status field said "running" when nothing was actually
running. A cache that I'd happily added on day two turned into a
booby trap on day four when I changed a prompt and got the old answer
back.

This is where the AI partnership actually mattered. Most of these
bugs would have taken me a day each to track down alone. With an AI
partner I could describe the symptom in plain English, paste in the
relevant logs, and get a usable hypothesis within seconds. We'd
iterate — *no, it can't be that, here's why* — and arrive at the
real cause in minutes instead of hours.

The dominant feeling in this phase: humility. The AI is a great
hands. It is *not* a great judge of what's important. That part
still belongs to you.

### Days 5–7 — The "I can build a real platform" phase

By the middle stretch, the prototype had grown. There were two real
applications running on it. There were 20+ bugs fixed, 15+ features
added, seven database migrations, a dashboard, an admin UI.

What changed in this phase wasn't the speed of development. It was
my **ambition**. I started attempting things I wouldn't have
attempted on day one. *Can I add a multi-tenant permission model?*
*Can I let users log in?* *Can I build a workbench that aggregates
five different data sources in one view?*

The answer, surprisingly often, was yes. With an AI partner you
operate at the abstraction level of "what should this do" rather
than "how do I make this work." That changes which problems feel
hard.

The dominant feeling: ambition compounding on itself.

### Days 8–10 — The "this is infrastructure now" phase

By the final stretch, the system had stopped being "a thing
I'm building" and started being "a thing I depend on." AI Institute
was running every morning, producing real briefings I read with
coffee. Infinite Research was answering real questions I needed
answers to. The admin dashboard let me monitor everything.

The work shifted from *building features* to *operating
infrastructure*. Watchdog processes for stuck tasks. Auto-recovery
when a node crashed. Permission scoping so different apps don't see
each other's data. Documentation for whoever might come build on
this next.

The dominant feeling: responsibility. *People (well, just me, but
still) are now using this. I can't break it.*

---

## The numbers, for the curious

If you're a numbers person, here's the honest accounting (live counts
pulled from the production database on April 27):

**Build artifacts**
- **10 days** from blank repository to two production applications (April 18 → April 27)
- **~31,000** lines of code across six small applications
- **~14,000** lines of documentation
- **6 packages** (backend, frontend, research-worker, infinite-research, edge-node, api_bridge)
- **3 edge nodes** (machines I own) part of the cluster
- **50+ deploys** to production over the period

**Live runtime traffic (10 days, all production)**
- **416,324** API requests served by agent-route
- **3,442** AI tasks executed end-to-end
- **736** sessions created
- **365** workflow definitions, **366** scheduled workflow runs
- **3,365** conversation messages persisted
- **12** Infinite Research sessions producing **126** sub-task investigations
- **2 production apps** running continuously

**Process**
- **20+ bugs** found and fixed (the embarrassing ones documented in detail)
- **30–50** chat turns per day on average with my AI partner
- **~$600/month** in AI subscriptions (Claude + ChatGPT + Gemini, top tier each), plus trivial Cloudflare spend, plus a few third-party APIs — hardware (Mac Studios, MacBook) was already owned
- **0 hours** of pair programming with another human
- **0 hours** of formal engineering work (it was a side project alongside other things)

The "31,000 lines" might sound like a lot. It is and it isn't. A
real company would consider this a single sprint. But for one
person, on the side, in ten days — it would have been
unattainable two years ago.

---

## What I genuinely learned (not platitudes)

If I had to compress what changed in my own thinking over those 10
days into a few honest observations:

### 1. The bottleneck is now your taste, not your typing

When you can describe what you want in English and have it built in
minutes, the limiter becomes: *do you actually know what you want?*
Most of my failures weren't "the AI couldn't build it" — they were
"I built the wrong thing because I hadn't thought hard enough about
what I needed."

### 2. Documentation is where the thinking happens

I wrote three significant developer docs over the ten days. Each
one made me discover at least three inconsistencies in my own design
that I went back and fixed. The doc forces you to imagine a reader,
and the reader catches the things you were hiding from yourself.

### 3. Small, weird-looking numbers are usually the fingerprint of a real bug

A counter showing 3 when the answer should be 1. A timestamp that's
22 minutes ago when nothing's been running for hours. A status that
says "running" but no process is actually running. These look like
display issues. They almost always reveal a race condition, a retry
loop, or a process crash. Chasing the weird number pays off every
time.

### 4. AI is a great hands, a terrible judge of importance

The AI will happily implement whatever you ask for, including the
wrong thing, including the dumb thing, including the thing that's
going to bite you next week. *You* are the only judge of which
features are worth having. *You* are the one who has to decide what
gets deleted when complexity creeps in. The AI doesn't have skin in
the game; you do.

### 5. Delete more than you write

The most important lines I wrote during the ten days were the ones
I deleted. A clever caching layer that turned into a bug source —
deleted on day five. A complex retry policy that obscured bugs
rather than solving them — deleted on day seven. A "smart" feature
that nobody used and was actively confusing — deleted on day nine.

In a normal codebase, deletion is hard because you don't trust
yourself to put it back. With an AI partner, you can always put it
back. The cost of deletion drops, which means the right answer to
"is this still earning its keep?" tilts toward "no, remove it" much
more often.

---

## What it felt like, more honestly

A few less-tidy observations:

**Some hours were genuinely intoxicating.** I'd describe a UI in
plain English, and twenty seconds later the UI was on the screen,
styled, functional, deployed. I'd iterate three times in five
minutes. The feedback loop was so tight that it didn't feel like
work; it felt like playing.

**Other hours were exhausting.** When a subtle bug fought me for
half a day, the AI partner couldn't lift it from me. The AI made the
typing faster but the *thinking* part was still mine, and the
thinking part is what burns calories. By the end of a long
debugging day I was as tired as I'd be after any other long working
day.

**The mood swung more than expected.** From "I'm a god, I can build
anything" at noon to "this whole thing is held together with chewing
gum" at 5 PM was a normal day. Both are true. The platform is real
and it works. The platform is also fragile and full of compromises.
Both things at once.

**I stopped feeling like an outsider in my own project.** Before I
worked with an AI partner, when I tried to build software, I always
felt like I was visiting a foreign country where I half-spoke the
language. With the AI partner I felt fluent for the first time. Not
because the AI did the speaking — but because the AI removed the
*friction* of speaking, so I could focus on what to say.

That last shift might be the most underrated effect of AI on
software. Not that more software gets built. That more *kinds of
people* feel allowed to build it.

---

## Why I think this matters beyond software

The pattern I just described — describe what you want, AI does the
mechanical work, you steer with judgment — is now happening in:

- **Legal** (drafting contracts from natural-language descriptions)
- **Finance** (pulling together research briefings, modeling
  scenarios)
- **Marketing** (campaign planning, copy generation, A/B test design)
- **Design** (UI mockups, brand systems)
- **Operations** (workflow automation, scheduling, exception
  handling)

In each case the same shift happens. The bottleneck moves from
*production capacity* to *taste and judgment*. The number of people
who can plausibly build something useful expands by an order of
magnitude. The cost per output collapses.

If you're a business reader watching this from outside engineering,
the takeaway is: the same forces are coming for whatever domain you
work in, and probably faster than you think. The right preparation
isn't to learn AI — it's to **practice describing what you want with
unusual precision**, because that's the new bottleneck.

---

The final article is about where all this goes from here.

---

**Previous:** [App Spotlight — AI Institute](./04-ai-institute.md)  ·  **Next:** [Looking Forward](./06-looking-forward.md)
