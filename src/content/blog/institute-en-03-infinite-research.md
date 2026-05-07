---
title: "Infinite Research — The Application Layer"
description: "Part 3: How the whiteboard pipeline produces autonomous research."
pubDate: "2026-04-30"
category: "institute"
lang: "en"
---

# 3 · App Spotlight — Infinite Research

*Part 3 of 6 · ~7 min read*

---

If ChatGPT is a conversation with a smart friend, **Infinite Research** is
hiring a small team of researchers and asking them to chase down every
thread until they hit bedrock.

You type one question. The system asks it to one AI worker, gets back an
answer plus three follow-up questions, then spawns three new workers to
investigate each follow-up — each of which produces another three
questions, and so on. Within minutes you have a tree of analyses,
sources, and sub-questions, all connected, all browsable.

This article explains what the experience feels like, what it's actually
useful for, and where it's still rough.

---

## The basic shape

The interface is a single text box. You type a question. You watch a
visual tree grow.

```
                    [your question]
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
   [follow-up 1]    [follow-up 2]    [follow-up 3]
        │                 │                 │
   ┌────┼────┐       ┌────┼────┐       ┌────┼────┐
   ▼    ▼    ▼       ▼    ▼    ▼       ▼    ▼    ▼
  ...
```

By default it goes 4 layers deep. With 3 follow-ups per layer that's
3 + 9 + 27 + 81 = **120 sub-questions** answered for a single root
question.

That sounds like a lot. It is. Most root questions don't need that many
branches — the system has built-in deduplication so it doesn't research
near-identical questions twice, and many branches will hit "this is
already saturated, no new follow-ups worth pursuing" and stop on their
own.

In practice, a typical research run produces 30–80 sub-questions, takes
15–40 minutes, and costs somewhere between 10 cents and a dollar in
model fees.

---

## What it actually feels like

I'll walk through a real example. Yesterday I typed:

> "How will US-China trade tensions affect the semiconductor industry
> over the next 12 months?"

Within five seconds, the first AI worker started analyzing the question.
A node appeared on screen labeled with my question, with a status icon
showing "researching". A small live counter showed how many tasks were
queued, running, completed.

Two minutes later, the root node turned green. The AI had returned:

- A 4-paragraph analysis covering supply-chain risks, the CHIPS Act's
  relevance, Taiwan's strategic position, and likely policy responses
- 18 cited sources with real working URLs (I clicked a few to verify)
- 3 follow-up questions:
  1. "How are export controls on advanced lithography affecting Chinese
     fab buildouts in 2026?"
  2. "What second-order effects on automotive and consumer electronics
     supply chains have emerged in the past quarter?"
  3. "Which non-US semiconductor firms are best positioned to capture
     market share if the tensions escalate?"

Each of those questions immediately spawned its own research task.
Three new nodes appeared on the tree, all in "queued" status. Within
10 seconds they flipped to "running", and over the next 6–8 minutes
they each produced their own 4-paragraph analyses, sources, and 3
sub-questions.

The tree kept growing. Some branches went 4 levels deep, others
stopped at 2 because the AI judged further sub-questions weren't
substantive enough.

Total: 47 minutes. 76 sub-questions answered. 200+ unique sources
gathered. Total cost: $0.83.

I exported the whole thing to a single 38-page Markdown document, with
nested sections matching the tree structure. I read it over coffee the
next morning.

---

## What it's good at

Three classes of question I've found it genuinely valuable for:

### 1. "I want to understand a domain I'm new to"

Examples that worked well:

- "How do prediction markets actually function?"
- "What are the major schools of thought in modern monetary policy?"
- "What are the leading approaches to robotics in 2026?"

The tree structure mirrors how a human would learn — broad context
first, then drilling into specifics. By the end you have a mental map
plus a 30-page reference document with sources.

### 2. "I want to scan opportunities in a market"

Examples that worked well:

- "What are the investment opportunities in the AI industry chain?"
  (this one ran 1,000+ sub-tasks before I stopped it — turned out to
  be a richer topic than I expected)
- "Which sectors are likely to benefit from cheap robotics in the
  next 5 years?"
- "What new business models are emerging around vertical AI?"

The breadth-first nature of the recursion surfaces angles you wouldn't
have thought to ask about.

### 3. "I want a fast first draft of a literature review"

Examples that worked well:

- "What's the current state of neuro-symbolic AI?"
- "How are central banks experimenting with CBDCs in 2026?"
- "Latest research on long-context LLM memory mechanisms"

You don't get a polished academic review, but you get a structured
landscape with citations, which is the hardest part of starting a real
review.

---

## What it's *not* good at

Honest accounting:

- **Real-time data**. The AI workers can search the web, but their
  answers reflect what they find at the moment they search. For
  fast-moving topics (live market prices, breaking news), use a
  dedicated tool.

- **Numerical analysis**. If you ask "calculate the IRR of this
  scenario" you'll get prose discussion of what IRR is, not a number
  derived from inputs. This is a research tool, not a calculator.

- **Original opinions**. The AI synthesizes existing material. It
  won't have a contrarian take you couldn't find elsewhere.

- **Verification**. The sources are real, but the AI's interpretation
  of them isn't always. For high-stakes decisions, treat the output
  as a curated reading list, not a citation-grade reference.

---

## The user experience details that matter

A few things that aren't obvious but make a big difference in actual use:

**Pause and resume.** A research session can run for hours. You don't
want to babysit it. The system runs in the background — you can close
the browser, come back tomorrow, and pick up exactly where it left off.
You can pause it mid-tree if you decide you've seen enough.

**Concurrency control.** A slider on the interface lets you set how
many AI workers run in parallel. More = faster but more expensive.
Default is 3.

**Live progress.** The tree updates in real time as workers finish.
You see green nodes appearing, queued counts dropping, the structure
filling in. It's oddly compelling to watch.

**Per-node drill-down.** Click any node to see its full answer, its
sources, its follow-up questions. Click a source URL to read the
original article.

**Export.** Download the entire tree as a Markdown file. Walks the
tree in order, generates a table of contents, includes every source.
Suitable for reading offline or feeding into another tool.

---

## Behind the scenes (one paragraph of "how")

Each research question is dispatched to whichever AI worker the load
balancer thinks is best for the job. The worker reads the question,
generates a structured answer following a fixed format, and the
platform parses out the answer + sources + follow-up questions. Each
follow-up becomes a new task, dispatched the same way. A small piece
of math (vector embeddings) runs over each new question to filter out
duplicates before they're spawned. The tree is stored in a database;
the answers and sources are stored in cloud object storage. The
interface polls the database every six seconds to update what you see.

That's it. There's no AI doing the orchestration — the orchestration
is plain code. The AI does the thinking; the platform does the
plumbing.

---

## What this changes about how I work

I used to do research the way most people do — Google, open 30 tabs,
read for hours, take notes, synthesize.

Now I type one question, walk away for half an hour, come back to a
structured tree. I read the parts that interest me; I ignore the
rest. I drill into specific sub-questions when I want to. The
synthesis is already done.

The change isn't speed (research still takes time). It's the
**reduction in friction at the start**. The blank-page problem mostly
goes away because by the time I sit down to think, I have a starting
point.

That's the unlock. Not "AI replaces research" — but "AI removes the
energy cost of beginning."

---

## Open questions I'm still working on

- **Quality calibration.** Some branches are deep and useful, others
  are shallow restatements. I'm still figuring out how to bias the
  system toward high-leverage sub-questions.

- **Cross-session memory.** Two research sessions on related topics
  don't currently know about each other. Building a knowledge graph
  that links them is on the roadmap.

- **Human-in-the-loop steering.** Right now the system runs
  autonomously. I want to be able to say "no, drop this branch, go
  deeper on that one" mid-flight, without restarting.

These are good problems to have. Solving them is the next year's work.

---

The next article is about a more focused application of the same
underlying platform — a dedicated AI investment-research operation
called **AI Institute**.

---

**Previous:** [How It Works](./02-how-it-works.md)  ·  **Next:** [App Spotlight — AI Institute](./04-ai-institute.md)
