# Vibe Maintenance Handover

This document is for future Codex sessions and maintainers working on the
ResearchOS workspace. Vibe is the static website publisher. Maintenance scripts
and secrets live outside the Vibe repository, one level up in the ResearchOS
workspace.

## Workspace Layout

Expected local layout:

```text
ResearchOS/
  .env
  scripts/
  vibe/
  ai-institute-working-paper/
    codex/
```

Key rule: keep `.env` only at `ResearchOS/.env`. Do not copy secrets into
`vibe/` or `ai-institute-working-paper/codex/`.

## Ownership Boundaries

`vibe/` is the static website repository. It owns Astro pages, static assets,
generated publish artifacts, and site navigation.

`ResearchOS/scripts/` is the maintenance control plane. It owns daily update
commands, encryption/decryption helpers, investor publishing wrappers, and
safety checks.

`ai-institute-working-paper/codex/` remains the investor data producer. It owns
API refresh logic, derived investor data generation, DOCX generation, and the
legacy/static investor output source used by Vibe.

## Main Commands

Run these from `ResearchOS/`.

```bash
# Build the whole Vibe static site.
scripts/vibe_maintenance.sh build

# Run the full Vibe safety suite.
scripts/vibe_maintenance.sh check

# Run daily blog/research generation without pushing.
scripts/vibe_maintenance.sh daily --date 2026-05-21 --no-push

# Run daily blog/research generation and let the pipeline commit/push.
scripts/vibe_maintenance.sh daily --date 2026-05-21

# Sync existing investor artifacts into Vibe and build.
scripts/vibe_maintenance.sh investor --skip-source

# Rebuild Codex investor producer outputs, sync into Vibe, and build.
scripts/vibe_maintenance.sh investor

# Fetch fresh investor source data, rebuild the daily DOCX, sync, and build.
scripts/vibe_maintenance.sh investor --refresh --docx
```

Equivalent Vibe npm aliases exist for local convenience:

```bash
npm --prefix vibe run build
npm --prefix vibe run daily:update -- --date 2026-05-21 --no-push
npm --prefix vibe run investor:sync
npm --prefix vibe run investor:update
npm --prefix vibe run maintain -- check
```

## Script Map

Workspace-level scripts:

```text
scripts/vibe_maintenance.sh       One command dispatcher for Vibe maintenance.
scripts/check_vibe_safety.sh      Build, route, secret, syntax, and stats checks.
scripts/update_vibe_investor.sh   Investor producer/sync/build wrapper.
scripts/sync_vibe_investor.mjs    Copies and rewrites Codex investor artifacts into Vibe.
scripts/run_daily_pipeline.py     Daily brief, editor report, mailbox digest pipeline.
scripts/sync_research.py          Older API-to-blog sync path.
scripts/encrypt_briefs.mjs        Encrypts generated private markdown before Git push.
scripts/decrypt_briefs.mjs        Restores generated private markdown for local/build use.
```

Codex producer scripts used by investor updates:

```text
ai-institute-working-paper/codex/backend/scripts/update_investor_research_os.sh
ai-institute-working-paper/codex/backend/scripts/build_investor_site.py
ai-institute-working-paper/codex/backend/scripts/build_derived_research_os.py
ai-institute-working-paper/codex/backend/scripts/build_daily_brief_docx.py
ai-institute-working-paper/codex/backend/scripts/fetch_live_data.mjs
ai-institute-working-paper/codex/backend/scripts/fetch_deep_data.mjs
ai-institute-working-paper/codex/backend/scripts/fetch_ai_inflation_search.mjs
```

The compatibility wrapper below is kept only so older callers do not break:

```text
ai-institute-working-paper/codex/backend/scripts/sync_to_vibe_investor.mjs
```

The canonical sync implementation is `ResearchOS/scripts/sync_vibe_investor.mjs`.

## Environment

Canonical env file:

```text
ResearchOS/.env
```

Expected variables include:

```text
INSTITUTE_API_BASE=...
INSTITUTE_API_KEY=...
DECRYPT_PASSWORD=...
RESEARCH_API_TOKEN=...
```

Do not add real values to this document. Do not commit `.env`, `.env.production`,
or copied env files under `vibe/`.

The investor wrapper exports `RESEARCHOS_ENV_FILE=ResearchOS/.env` before
calling producer scripts. Codex producer fetch scripts also fall back to
`ResearchOS/.env`, then to the old local Codex `.env` path for compatibility.

## Investor Publishing Flow

The investor section is a migration, not a rewrite. Codex remains producer;
Vibe is publisher.

1. Optional producer refresh:
   `scripts/update_vibe_investor.sh --refresh --docx`
2. Codex writes source output under:
   `ai-institute-working-paper/codex/frontend/generated`
   and `ai-institute-working-paper/codex/outputs/investor-site`
3. `scripts/sync_vibe_investor.mjs` copies and rewrites artifacts into Vibe.
4. Vibe builds native static routes under `/investor/`.

Generated Vibe investor targets:

```text
vibe/src/generated/investor/
vibe/public/investor-assets/
vibe/public/investor-data/
vibe/public/investor-downloads/
vibe/src/pages/investor/
```

Native Vibe investor routes:

```text
/investor/
/investor/reports/[slug]/
/investor/daily/[slug]/
/investor/deep-research/[slug]/
/investor/#deep
```

Do not wholesale copy `outputs/investor-site/` into Vibe. Use
`scripts/sync_vibe_investor.mjs` so routes, assets, downloads, and JSON links are
rewritten into Vibe-safe paths.

Expected duplicate-handling counters after sync:

```text
reports: 1814
raw_reports: 2119
report_duplicates_removed: 305
report_unknown_duplicates_handled: 296
```

The safety check verifies these counters and the retained sample duplicate
record containing `堡垒轴成本溢价`.

## Daily Blog/Research Flow

Daily public/private content uses the workspace scripts, not scripts inside
Vibe.

```bash
scripts/vibe_maintenance.sh daily --date YYYY-MM-DD --no-push
```

This delegates to:

```text
scripts/gen_daily_brief.py
scripts/gen_editor_report.py
scripts/gen_mailbox_digest.py
```

Private generated markdown is encrypted to `.md.enc` before Git push. During
build, `scripts/decrypt_briefs.mjs` restores local plaintext markdown so Astro
can render pages. Plaintext generated private markdown paths are ignored by
Vibe's `.gitignore`.

Before pushing daily generated content, verify:

```bash
node scripts/encrypt_briefs.mjs
git -C vibe status --short
```

No forbidden private plaintext paths should appear as tracked or staged files.

## Release Checklist

Run this from `ResearchOS/` before pushing Vibe:

```bash
scripts/vibe_maintenance.sh check
```

The check currently verifies:

1. No `.env*` files exist under Vibe.
2. No tracked env files or private plaintext generated markdown paths exist.
3. Investor JavaScript and generated path helper syntax is valid.
4. `npm --prefix vibe run build` completes.
5. Built `/investor/` files do not leak old Codex-root route or asset paths.
6. Generated investor JSON/markdown does not leak local `/Users/...` paths.
7. Investor duplicate-handling counters still match expected values.

Then inspect Git state:

```bash
git -C vibe status --short
git -C vibe diff --stat
```

Commit and push only after the safety suite passes.

## Troubleshooting

If `--refresh` fails with a missing env error, check that `ResearchOS/.env`
exists. Do not solve this by copying `.env` into Vibe.

If the Astro dev server cannot bind to port `4321`, use another port:

```bash
npm --prefix vibe run dev -- --host 127.0.0.1 --port 4322
```

If investor detail links point to `/reports/...`, `/daily/...`,
`/deep-research/...`, `/assets/...`, or `assets/...`, rerun:

```bash
scripts/vibe_maintenance.sh investor --skip-source
```

If private generated `.md` files appear in Git status, run:

```bash
node scripts/encrypt_briefs.mjs
git -C vibe status --short --ignored
```

Only `.md.enc` files should be tracked for private generated briefings.

If Codex producer output changes unexpectedly, do not edit generated Vibe JSON
by hand. Fix or rerun the producer, then rerun the investor sync.
