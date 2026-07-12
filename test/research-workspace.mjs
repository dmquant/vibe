#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const generated = JSON.parse(fs.readFileSync(path.join(root, "src/generated/investor/research-workspace.json"), "utf8"));
const publicCopy = JSON.parse(fs.readFileSync(path.join(root, "public/investor-data/research-workspace.json"), "utf8"));
const quality = JSON.parse(fs.readFileSync(path.join(root, "src/generated/investor/publication-quality.json"), "utf8"));
const page = fs.readFileSync(path.join(root, "src/pages/investor/workspace/index.astro"), "utf8");

assert.equal(generated.schema, "vibe.ai_institute.public_research_workspace.v1");
assert.equal(generated.sourceHash, publicCopy.sourceHash);
assert.equal(generated.focusItems.length, generated.selection.capacity);
assert.ok(generated.history.snapshots.length >= 1 && generated.history.snapshots.length <= 30);
assert.ok(["baseline", "changed", "no_change"].includes(generated.dailyDelta.status));
assert.equal(quality.counts.error, 0, "publication quality contains a blocking error");

for (const item of generated.focusItems) {
  assert.ok(item.sources.length >= 2, `${item.id} has thin provenance`);
  assert.ok(item.sources.every((source) => source.preview?.length >= 40), `${item.id} has an empty source preview`);
  assert.ok(item.contradiction?.status, `${item.id} lacks an evidence-split state`);
  assert.equal(item.portfolioBridge?.thesisId, item.thesisId);
  assert.equal(item.portfolioBridge?.laneId, item.lane.id);
}

for (const marker of [
  "vibe.researchWorkspace.savedViews.v1",
  "vibe.researchWorkspace.decisions.v1",
  "vibe.researchNetwork.portfolio.v2",
  "workspaceSourceDialog",
  "Analyst decision log",
]) {
  assert.ok(page.includes(marker), `workspace page is missing ${marker}`);
}

console.log(JSON.stringify({
  status: "ok",
  schema: generated.schema,
  focusItems: generated.focusItems.length,
  historySnapshots: generated.history.snapshots.length,
  qualityStatus: quality.status,
  qualityWarnings: quality.counts.warning,
}));
