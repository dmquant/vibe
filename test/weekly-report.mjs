import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const generated = JSON.parse(fs.readFileSync(path.join(root, "src/generated/investor/weekly-report.json"), "utf8"));
const published = JSON.parse(fs.readFileSync(path.join(root, "public/investor-data/weekly-report.json"), "utf8"));
const index = JSON.parse(fs.readFileSync(path.join(root, "src/generated/investor/weekly-report-index.json"), "utf8"));
const page = fs.readFileSync(path.join(root, "src/pages/investor/panorama/index.astro"), "utf8");
const editionPage = fs.readFileSync(path.join(root, "src/pages/investor/panorama/[week].astro"), "utf8");
const adapter = fs.readFileSync(path.join(root, "src/lib/weekly-panorama.js"), "utf8");

assert.equal(generated.schema, "vibe.ai_institute.weekly_report.v2");
assert.deepEqual(generated, published, "generated and public weekly contracts must match");
assert.equal(index.latestWeek, generated.week);
assert.ok(index.editions.some((edition) => edition.week === generated.week));
assert.ok(generated.recommendations.calls.length >= 3);
assert.ok(generated.recommendations.calls.every((call) => call.sourceHrefs.length >= 2 && call.evidenceIds.length >= 2));
assert.ok(generated.sourceLedger.length >= 5);
assert.ok(generated.evidenceLedger.some((item) => item.direction === "challenge"));
assert.ok(generated.narrative.whatChanged.length >= 3);
assert.ok(generated.narrative.nextWeek.length >= 3);
assert.equal(generated.audit.blockers, 0);

assert.match(page, /id="calls"/);
assert.match(page, /id="changes"/);
assert.match(page, /id="tensions"/);
assert.match(page, /id="sources"/);
assert.match(page, /data-preview-href/);
assert.match(editionPage, /getStaticPaths/);
assert.match(adapter, /readWeeklyReport/);
assert.doesNotMatch(adapter, /readResearchNetwork|buildHouseTheses|new Date\(/);

const publicText = JSON.stringify(generated);
for (const pattern of [/\/Users\//i, /file:\/\//i, /workers\.dev/i, /X-API-Key/i, /sk_ins_/i, /sk-proj-/i]) {
  assert.doesNotMatch(publicText, pattern);
}

console.log(JSON.stringify({
  status: "ok",
  week: generated.week,
  sourceHash: generated.sourceHash,
  calls: generated.recommendations.calls.length,
  sources: generated.sourceLedger.length,
  evidence: generated.evidenceLedger.length,
}, null, 2));
