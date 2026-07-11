import fs from "node:fs";
import path from "node:path";

const generatedRoot = path.resolve(process.cwd(), "src/generated/investor");

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(generatedRoot, relativePath), "utf8"));
}

function listJsonFiles(relativeDir) {
  const dir = path.join(generatedRoot, relativeDir);
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .map((file) => readJson(path.join(relativeDir, file)));
}

function splitSuffix(value) {
  const match = String(value).match(/^([^?#]*)([?#].*)?$/);
  return {
    pathname: match?.[1] || "",
    suffix: match?.[2] || "",
  };
}

function cleanSlug(value) {
  return String(value || "")
    .replace(/\/index\.html$/i, "")
    .replace(/\.html$/i, "")
    .replace(/^\/+|\/+$/g, "");
}

export function normalizeInvestorPath(value) {
  if (typeof value !== "string") return value;
  if (!value || /^(?:[a-z][a-z0-9+.-]*:|#)/i.test(value)) return value;
  if (value === "/#deep") return "/investor/console/#deep";
  const legacyInvestorHash = value.match(/^\/investor\/#(.+)$/);
  if (legacyInvestorHash && !["reader", "research-map", "deep"].includes(legacyInvestorHash[1])) {
    return `/investor/console/#${legacyInvestorHash[1]}`;
  }

  const { pathname, suffix } = splitSuffix(value);
  const withoutLeadingSlash = pathname.replace(/^\/+/, "");

  if (pathname === "/" || pathname === "/index.html" || pathname === "index.html") {
    return `/investor/${suffix}`;
  }

  const deepDownload = withoutLeadingSlash.match(/^deep-research\/downloads\/(.+)$/);
  if (deepDownload) {
    return `/investor-downloads/deep-research/${deepDownload[1]}${suffix}`;
  }

  const deepOutput = withoutLeadingSlash.match(/^outputs\/deep-research\/reports\/([^/]+)\/(.+)$/);
  if (deepOutput) {
    return `/investor-downloads/deep-research/${deepOutput[1]}/${deepOutput[2]}${suffix}`;
  }

  const report = withoutLeadingSlash.match(/^reports\/(.+)$/);
  if (report) {
    const slug = cleanSlug(report[1]);
    return slug ? `/investor/reports/${slug}/${suffix}` : value;
  }

  const daily = withoutLeadingSlash.match(/^daily\/(.+)$/);
  if (daily) {
    const slug = cleanSlug(daily[1]);
    return slug ? `/investor/daily/${slug}/${suffix}` : value;
  }

  const deep = withoutLeadingSlash.match(/^deep-research\/(.+)$/);
  if (deep) {
    const slug = cleanSlug(deep[1]);
    return slug ? `/investor/deep-research/${slug}/${suffix}` : value;
  }

  const asset = withoutLeadingSlash.match(/^assets\/(.+)$/);
  if (asset) {
    return `/investor-assets/${asset[1]}${suffix}`;
  }

  const data = withoutLeadingSlash.match(/^data\/(.+)$/);
  if (data) {
    return `/investor-data/${data[1]}${suffix}`;
  }

  const download = withoutLeadingSlash.match(/^downloads\/(.+)$/);
  if (download) {
    return `/investor-downloads/${download[1]}${suffix}`;
  }

  return value;
}

export function rewriteInvestorPaths(value) {
  if (Array.isArray(value)) {
    return value.map(rewriteInvestorPaths);
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, rewriteInvestorPaths(item)]));
  }
  return normalizeInvestorPath(value);
}

export function readSiteData() {
  return rewriteInvestorPaths(readJson("site-data.json"));
}

export function readRecapDashboards() {
  return rewriteInvestorPaths(readJson("recap-dashboards.json"));
}

export function readDailyDashboard() {
  return rewriteInvestorPaths(readJson("daily-dashboard.json"));
}

export function readThesisTracker() {
  return rewriteInvestorPaths(readJson("thesis-tracker.json"));
}

export function readAnalystTracker() {
  return rewriteInvestorPaths(readJson("analyst-tracker.json"));
}

export function readResearchOperations() {
  return rewriteInvestorPaths(readJson("research-operations.json"));
}

export function readResearchNetwork() {
  return rewriteInvestorPaths(readJson("research-network.json"));
}

export function readMarketOntology() {
  return rewriteInvestorPaths(readJson("market-ontology.json"));
}

export function readOddsBoard() {
  return rewriteInvestorPaths(readJson("odds-board.json"));
}

export function readResearchWorkspace() {
  return rewriteInvestorPaths(readJson("research-workspace.json"));
}

export function readAnalystPersonaTimelines() {
  return rewriteInvestorPaths(readJson("analyst-persona-timelines.json"));
}

export function readDeepIndex() {
  return rewriteInvestorPaths(readJson("deep-research/index.json"));
}

export function listReports() {
  return listJsonFiles("reports").map(rewriteInvestorPaths);
}

export function listDeepPages() {
  return listJsonFiles("deep-research/pages").map(rewriteInvestorPaths);
}

export function listDailyBriefs() {
  const dir = path.join(generatedRoot, "daily");
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .map((file) => ({
      slug: file.replace(/\.json$/, ""),
      brief: rewriteInvestorPaths(readJson(path.join("daily", file))),
    }));
}
