# Critical Recaps Runbook

This Vibe repo is the publisher. Recap production stays in the parent
ResearchOS workspace.

## Purpose

Critical recaps are durable research retrospectives such as the STAR50 /
KC50 recap. They answer four questions:

- What did AI Institute believe across the timeline?
- How did market performance validate or reject those views?
- Which assumptions were corrected by QA, mailbox, whiteboard, or later data?
- What is the current decision framework?

## Source Contract

The local publisher reads these ResearchOS paths:

- `outputs/research-recaps/*.md`
- `outputs/*reconciliation-report-YYYY-MM-DD.{zh,en}.md`

Each markdown file should start with one H1 title and include a concrete date
in the filename or body. Tables, links, blockquotes, bullets, and ordered lists
are converted into investor-report HTML.

## Publish Routine

From the ResearchOS parent folder:

```bash
scripts/vibe_maintenance.sh recaps
```

To build and push Vibe:

```bash
scripts/vibe_maintenance.sh recaps --push
```

The routine:

1. Copies existing investor artifacts from the producer output.
2. Converts local recap markdown into `vibe/src/generated/investor/reports/recap-*.json`.
3. Prepends recap cards to `vibe/src/generated/investor/site-data.json`.
4. Updates investor report counters so the safety check remains valid.
5. Builds Vibe unless `--no-build` is supplied.
6. With `--push`, commits and pushes only the `vibe/` repo.

## Public Routes

Recaps appear in the investor report library:

- `/investor/#reports`
- `/investor/reports/recap-kc50-recap-2026-06-01/`

The route slug is derived from the markdown filename. For example,
`outputs/research-recaps/kc50-recap-2026-06-01.md` becomes
`/investor/reports/recap-kc50-recap-2026-06-01/`.

## Safety Boundary

Do not move API keys or `.env` files into Vibe. The Vibe repository remains a
static Astro publisher; recap production and AI Institute API access remain in
the parent ResearchOS workspace.
