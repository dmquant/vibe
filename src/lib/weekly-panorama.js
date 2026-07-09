import {
  readAnalystTracker,
  readAnalystPersonaTimelines,
  readDailyDashboard,
  readResearchNetwork,
  readResearchOperations,
  readRecapDashboards,
  readThesisTracker,
} from "./investor-generated.js";

const DAY_MS = 24 * 60 * 60 * 1000;

function toDate(value) {
  if (!value) return null;
  const date = new Date(`${String(value).slice(0, 10)}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function isoDate(date) {
  return date?.toISOString?.().slice(0, 10) || "";
}

function addDays(date, days) {
  return new Date(date.getTime() + days * DAY_MS);
}

function isoWeek(value) {
  const source = toDate(value) || new Date();
  const date = new Date(Date.UTC(source.getUTCFullYear(), source.getUTCMonth(), source.getUTCDate()));
  const day = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((date - yearStart) / DAY_MS + 1) / 7);
  return `${date.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

function sanitizeText(value, maxLength = 280) {
  const text = String(value || "")
    .replace(/\[auto-handoff\]\s*/gi, "")
    .replace(/auto[-_\s]?handoff/gi, "协作记录")
    .replace(/whiteboard(?:\s+(?:thread|card|board))?/gi, "研究线程")
    .replace(/mailbox(?:\s+(?:thread|message))?/gi, "协作记录")
    .replace(/session[s]?:?\s*[0-9a-f-]{20,}/gi, "公开研究记录")
    .replace(/会话[:：]\s*[0-9a-f-]{20,}/gi, "")
    .replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}

function number(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function inWindow(date, from, to) {
  const parsed = toDate(date);
  if (!parsed) return false;
  return parsed >= from && parsed <= to;
}

function thesisScore(thesis, weeklyEvents = []) {
  return Math.round(
    number(thesis.practical?.score || thesis.conviction) +
      weeklyEvents.length * 5 +
      number(thesis.supports) * 0.6 -
      number(thesis.risks) * 0.12,
  );
}

function collectThesisEvents(thesis, from, to) {
  const eventMap = new Map();
  const add = (event = {}, fallbackDate = "") => {
    const date = event.date || fallbackDate;
    if (!inWindow(date, from, to)) return;
    const title = sanitizeText(event.title, 150);
    const summary = sanitizeText(event.summary, 260);
    if (!title && !summary) return;
    const key = `${date}:${title}:${summary}`;
    if (eventMap.has(key)) return;
    eventMap.set(key, {
      date,
      title,
      summary,
      sourceLabel: sanitizeText(event.sourceLabel || "公开研究", 40),
      supportType: event.supportType || "neutral",
      supportLabel: event.supportLabel || "观察",
      href: event.href || thesis.href || `/investor/theses/${thesis.id}/`,
    });
  };

  for (const event of thesis.events || []) add(event, event.date);
  for (const group of thesis.timeline || []) {
    for (const event of group.events || []) add(event, group.date);
  }

  return [...eventMap.values()].sort((a, b) => String(b.date).localeCompare(String(a.date))).slice(0, 8);
}

function buildHouseTheses(theses, from, to) {
  return theses
    .map((thesis) => {
      const weeklyEvents = collectThesisEvents(thesis, from, to);
      const score = thesisScore(thesis, weeklyEvents);
      const supports = weeklyEvents.filter((event) => event.supportType === "supports" || event.supportType === "support").length;
      const risks = weeklyEvents.filter((event) => event.supportType === "risk").length;
      return {
        id: thesis.id,
        title: sanitizeText(thesis.title, 120),
        lane: sanitizeText(thesis.lane || thesis.practical?.sectorLane || "未分类赛道", 80),
        href: thesis.href || `/investor/theses/${thesis.id}/`,
        score,
        conviction: number(thesis.conviction),
        weeklyEvents: weeklyEvents.length,
        weeklySupports: supports,
        weeklyRisks: risks,
        riskRatio: Math.round((risks / Math.max(1, weeklyEvents.length)) * 100),
        coreView: sanitizeText(thesis.coreView || thesis.practical?.portfolioUse, 220),
        actionLabel: sanitizeText(thesis.practical?.actionLabel || thesis.directionLabel || "观察", 60),
        stockTickers: (thesis.stockTickers || thesis.practical?.stockTickers || []).slice(0, 8),
        topTerms: (thesis.topTerms || []).slice(0, 8).map((term) => sanitizeText(term, 28)),
        events: weeklyEvents.slice(0, 3),
      };
    })
    .filter((thesis) => thesis.weeklyEvents > 0 || thesis.score >= 70)
    .sort((a, b) => b.score - a.score || b.weeklyEvents - a.weeklyEvents)
    .slice(0, 8);
}

function buildLaneMap(theses, houseThesesById, from, to) {
  const lanes = new Map();
  for (const thesis of theses) {
    const weeklyEvents = collectThesisEvents(thesis, from, to);
    if (!weeklyEvents.length && !houseThesesById.has(thesis.id)) continue;
    const lane = sanitizeText(thesis.lane || thesis.practical?.sectorLane || "未分类赛道", 80);
    const row = lanes.get(lane) || {
      lane,
      href: thesis.laneHref || `/investor/lanes/${lane.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/`,
      thesisCount: 0,
      weeklyEvents: 0,
      supports: 0,
      risks: 0,
      score: 0,
      stocks: new Map(),
      theses: [],
      latestEvent: "",
    };
    row.thesisCount += 1;
    row.weeklyEvents += weeklyEvents.length;
    row.supports += weeklyEvents.filter((event) => event.supportType === "supports" || event.supportType === "support").length;
    row.risks += weeklyEvents.filter((event) => event.supportType === "risk").length;
    row.score += thesisScore(thesis, weeklyEvents);
    row.latestEvent = [row.latestEvent, ...weeklyEvents.map((event) => event.date)].filter(Boolean).sort().at(-1) || row.latestEvent;
    row.theses.push({
      id: thesis.id,
      title: sanitizeText(thesis.title, 80),
      href: thesis.href || `/investor/theses/${thesis.id}/`,
      score: thesisScore(thesis, weeklyEvents),
    });
    for (const stock of thesis.stockUniverse || []) {
      const ticker = sanitizeText(stock.ticker, 24);
      if (!ticker) continue;
      const item = row.stocks.get(ticker) || {
        ticker,
        name: sanitizeText(stock.name, 60),
        href: stock.href || `/investor/stocks/${ticker}/`,
        mentions: 0,
      };
      item.mentions += 1;
      row.stocks.set(ticker, item);
    }
    lanes.set(lane, row);
  }

  return [...lanes.values()]
    .map((lane) => ({
      ...lane,
      avgScore: Math.round(lane.score / Math.max(1, lane.thesisCount)),
      stocks: [...lane.stocks.values()].sort((a, b) => b.mentions - a.mentions).slice(0, 10),
      theses: lane.theses.sort((a, b) => b.score - a.score).slice(0, 5),
      riskShare: Math.round((lane.risks / Math.max(1, lane.weeklyEvents)) * 100),
    }))
    .sort((a, b) => b.weeklyEvents - a.weeklyEvents || b.avgScore - a.avgScore)
    .slice(0, 12);
}

function buildStockSignals(lanes) {
  const stocks = new Map();
  for (const lane of lanes) {
    for (const stock of lane.stocks || []) {
      const row = stocks.get(stock.ticker) || {
        ...stock,
        lanes: [],
        mentions: 0,
        weeklyEvents: 0,
        score: 0,
      };
      row.mentions += stock.mentions || 1;
      row.weeklyEvents += lane.weeklyEvents || 0;
      row.score += lane.avgScore || 0;
      row.lanes.push({ lane: lane.lane, href: lane.href });
      stocks.set(stock.ticker, row);
    }
  }
  return [...stocks.values()]
    .map((stock) => ({
      ...stock,
      lanes: stock.lanes.slice(0, 4),
      score: Math.round(stock.score / Math.max(1, stock.lanes.length)),
    }))
    .sort((a, b) => b.mentions - a.mentions || b.weeklyEvents - a.weeklyEvents || b.score - a.score)
    .slice(0, 18);
}

function buildThemeClusters(theses, from, to) {
  const terms = new Map();
  for (const thesis of theses) {
    const weeklyEvents = collectThesisEvents(thesis, from, to);
    const weight = Math.max(1, weeklyEvents.length);
    for (const term of thesis.topTerms || []) {
      const label = sanitizeText(term, 34);
      if (!label || label.length < 2) continue;
      const row = terms.get(label) || { label, weight: 0, theses: new Map(), events: 0, stocks: new Set() };
      row.weight += weight + number(thesis.conviction) / 35;
      row.events += weeklyEvents.length;
      row.theses.set(thesis.id, {
        id: thesis.id,
        title: sanitizeText(thesis.title, 80),
        href: thesis.href || `/investor/theses/${thesis.id}/`,
      });
      for (const ticker of thesis.stockTickers || []) row.stocks.add(ticker);
      terms.set(label, row);
    }
  }
  const rows = [...terms.values()].sort((a, b) => b.weight - a.weight).slice(0, 16);
  const max = Math.max(1, ...rows.map((row) => row.weight));
  return rows.map((row, index) => ({
    id: `cluster-proxy-${index + 1}`,
    label: row.label,
    share: Math.round((row.weight / max) * 100),
    eventCount: row.events,
    thesisCount: row.theses.size,
    stockTickers: [...row.stocks].slice(0, 8),
    linkedTheses: [...row.theses.values()].slice(0, 4),
  }));
}

function buildAnalystTerritory(personas, from, to) {
  return (personas || [])
    .map((persona) => {
      const weeklyGroups = (persona.timeline || []).filter((group) => inWindow(group.date, from, to));
      const weeklyEvents = weeklyGroups.reduce((sum, group) => sum + number(group.eventCount || group.events?.length), 0);
      const supports = weeklyGroups.reduce((sum, group) => sum + number(group.supports), 0);
      const risks = weeklyGroups.reduce((sum, group) => sum + number(group.risks), 0);
      return {
        id: persona.id,
        name: sanitizeText(persona.name, 48),
        category: sanitizeText(persona.category, 48),
        href: persona.href || "/investor/personas/",
        weeklyEvents,
        supports,
        risks,
        riskShare: Math.round((risks / Math.max(1, supports + risks)) * 100),
        thesisCount: number(persona.thesisCount),
        topTerms: (persona.topTerms || []).slice(0, 6).map((term) => sanitizeText(term, 26)),
        currentView: sanitizeText(persona.currentView, 180),
        latestEvents: (persona.latestEvents || [])
          .filter((event) => inWindow(event.date, from, to))
          .slice(0, 2)
          .map((event) => ({
            date: event.date,
            title: sanitizeText(event.title, 120),
            href: event.href || persona.href || "/investor/personas/",
          })),
      };
    })
    .filter((persona) => persona.weeklyEvents > 0)
    .sort((a, b) => b.weeklyEvents - a.weeklyEvents || b.riskShare - a.riskShare)
    .slice(0, 12);
}

function buildContradictions(thesisTracker) {
  return (thesisTracker.theses || [])
    .map((thesis) => ({
      id: thesis.id,
      title: sanitizeText(thesis.title, 100),
      href: thesis.linkedReports?.[0]?.href || `/investor/research-network/?q=${encodeURIComponent(thesis.title || thesis.id)}`,
      status: sanitizeText(thesis.status || "跟踪中", 40),
      riskPressure: number(thesis.riskPressure),
      supportFor: number(thesis.score?.for),
      supportAgainst: number(thesis.score?.against),
      analysts: number(thesis.score?.analysts),
      lastUpdated: thesis.lastUpdated || "",
      forEvidence: (thesis.evidenceFor || []).slice(0, 1).map((item) => ({
        title: sanitizeText(item.title, 100),
        href: item.href,
      })),
      againstEvidence: (thesis.evidenceAgainst || []).slice(0, 1).map((item) => ({
        title: sanitizeText(item.title, 100),
        href: item.href,
      })),
    }))
    .filter((item) => item.supportFor > 0 && item.supportAgainst > 0)
    .sort((a, b) => b.riskPressure - a.riskPressure || b.supportAgainst - a.supportAgainst)
    .slice(0, 8);
}

function buildRiskBoard(dailyDashboard, thesisTracker) {
  const dailyRisks = (dailyDashboard.riskMatrix || []).slice(0, 6).map((risk) => ({
    chain: sanitizeText(risk.chain, 60),
    title: sanitizeText(risk.title, 110),
    impact: number(risk.impact),
    probability: number(risk.probability),
    href: risk.href || "/investor/daily/",
    source: "daily",
  }));
  const thesisRisks = (thesisTracker.theses || [])
    .flatMap((thesis) => (thesis.risks || []).map((risk) => ({ ...risk, thesisTitle: thesis.title })))
    .sort((a, b) => number(b.impact) * number(b.probability) - number(a.impact) * number(a.probability))
    .slice(0, 6)
    .map((risk) => ({
      chain: sanitizeText(risk.chain || risk.thesisTitle, 60),
      title: sanitizeText(risk.title, 110),
      impact: number(risk.impact),
      probability: number(risk.probability),
      href: risk.href || "/investor/research-network/",
      source: "thesis",
    }));
  return [...dailyRisks, ...thesisRisks].slice(0, 10);
}

function buildProcessCards() {
  return [
    {
      step: "Pull",
      title: "读取公开合约",
      text: "Vibe 只消费已发布的 thesis、lane、stock、persona、daily dashboard 和 reader report 合约，不读取私有运行数据。",
    },
    {
      step: "Cluster",
      title: "主题簇代理",
      text: "当前端点用公开 top terms、weekly events 和 thesis links 构建 cluster proxy；完整 UMAP/HDBSCAN 聚类留给独立 Panorama App。",
    },
    {
      step: "Synthesize",
      title: "先合约后叙事",
      text: "页面先生成 bundle，再从 bundle 渲染人类可读界面；每个主结论保留可点击的主线、报告或 persona 链接。",
    },
    {
      step: "Publish",
      title: "独立应用边界",
      text: "周度全景未来可以作为独立 app 发布 HTML/PDF/JSON，Vibe 负责展示公开版本和入口。",
    },
  ];
}

export function buildWeeklyPanoramaBundle() {
  const network = readResearchNetwork();
  const dailyDashboard = readDailyDashboard();
  const thesisTracker = readThesisTracker();
  const recapDashboards = readRecapDashboards();
  const personaData = readAnalystPersonaTimelines();
  const analystTracker = readAnalystTracker();
  const operations = readResearchOperations();

  const anchor = dailyDashboard.date || network.stats?.dateRange?.last || isoDate(new Date());
  const to = toDate(anchor) || new Date();
  const from = addDays(to, -6);
  const theses = network.theses || [];
  const houseTheses = buildHouseTheses(theses, from, to);
  const houseThesesById = new Set(houseTheses.map((thesis) => thesis.id));
  const lanes = buildLaneMap(theses, houseThesesById, from, to);
  const stocks = buildStockSignals(lanes);
  const clusters = buildThemeClusters(theses, from, to);
  const analystTerritory = buildAnalystTerritory(personaData.personas || [], from, to);
  const contradictions = buildContradictions(thesisTracker);
  const riskBoard = buildRiskBoard(dailyDashboard, thesisTracker);
  const recaps = (recapDashboards.dashboards || []).slice(0, 8).map((recap) => ({
    title: sanitizeText(recap.title, 90),
    subtitle: sanitizeText(recap.subtitle || recap.chartDescription, 150),
    href: `/investor/recaps/${recap.slug}/`,
    reportHref: recap.reportHref,
    date: recap.date || "",
    badge: recap.badge || "recap",
  }));

  const stats = {
    reports: number(analystTracker.stats?.recentReports) || number(network.stats?.fullGraphNodes),
    readerReports: number(dailyDashboard.relatedCounts?.readerReports, dailyDashboard.readerReport ? 1 : 0),
    theses: number(network.stats?.thesisCount || theses.length),
    lanes: number(network.stats?.laneCount || lanes.length),
    stocks: number(network.stats?.stockCount || stocks.length),
    publicGraphNodes: number(network.stats?.publicGraphNodes),
    publicGraphEdges: number(network.stats?.publicGraphEdges),
    analystViewChanges: number(analystTracker.stats?.viewChanges),
    activeAnalysts: number(analystTracker.stats?.activeToday),
    researchThreads: number(operations.stats?.threads),
    dailyTaskReports: number(operations.stats?.dailyTaskReports),
    weeklyThesisEvents: houseTheses.reduce((sum, thesis) => sum + thesis.weeklyEvents, 0),
  };

  return {
    schema: "vibe.weekly_panorama.public_bundle.v1",
    generatedAt: new Date().toISOString(),
    week: isoWeek(anchor),
    mode: "public-contract-weekly",
    window: { from: isoDate(from), to: isoDate(to) },
    source: {
      dailyDashboardDate: dailyDashboard.date,
      networkGeneratedAt: network.generatedAt,
      thesisTrackerGeneratedAt: thesisTracker.generatedAt,
      personaGeneratedAt: personaData.generatedAt,
    },
    headline: `周度全景：${houseTheses[0]?.lane || "AI Institute"} 与 ${lanes[0]?.lane || "研究主线"} 是本周公开合约的核心交汇。`,
    lead:
      dailyDashboard.readerReport?.summary ||
      dailyDashboard.summary?.lead ||
      "本端点把公开研究合约压缩为周度视角：主线、赛道、标的、分析师 territory、风险和矛盾一屏对齐。",
    stats,
    houseTheses,
    lanes,
    stocks,
    clusters,
    analystTerritory,
    contradictions,
    riskBoard,
    recaps,
    scorecard: {
      label: "Public contract coverage",
      note: "完整 forecast hit-rate / Brier scorecard 需要独立 Panorama App 读取 settled forecast 合约；当前 Vibe 版本先展示公开覆盖度与分歧压力。",
      rows: [
        { label: "Reader reports", value: stats.readerReports, href: "/investor/archive/" },
        { label: "Analyst view changes", value: stats.analystViewChanges, href: "/investor/personas/" },
        { label: "Weekly thesis events", value: stats.weeklyThesisEvents, href: "/investor/timeline/" },
        { label: "Public graph edges", value: stats.publicGraphEdges, href: "/investor/research-network/" },
      ],
    },
    process: buildProcessCards(),
    artifacts: {
      bundle: "/investor/panorama/weekly.json",
      daily: "/investor/daily/",
      network: "/investor/research-network/",
      timeline: "/investor/timeline/",
      portfolio: "/investor/portfolio/",
    },
  };
}
