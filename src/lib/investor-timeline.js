const SOURCE_META = {
  "morning-brief": { label: "Morning Brief", labelZh: "晨会简报", accent: "blue", icon: "☀" },
  "editor-report": { label: "Editor Report", labelZh: "总编报告", accent: "orange", icon: "✦" },
  "mailbox-digest": { label: "Mailbox Digest", labelZh: "邮箱摘要", accent: "green", icon: "✉" },
  "daily-dashboard": { label: "Daily Dashboard", labelZh: "晨会看板", accent: "yellow", icon: "▣" },
  "reader-report": { label: "Reader Report", labelZh: "人类友好报告", accent: "blue", icon: "▤" },
  "deep-research": { label: "Deep Research", labelZh: "深度研究", accent: "red", icon: "◆" },
  recap: { label: "Recap", labelZh: "关键复盘", accent: "green", icon: "↺" },
  thesis: { label: "Living Thesis", labelZh: "动态论点", accent: "yellow", icon: "◇" },
  "change-radar": { label: "Change Radar", labelZh: "变化雷达", accent: "orange", icon: "⌁" },
  "analyst-change": { label: "Analyst Change", labelZh: "分析师动向", accent: "blue", icon: "◈" },
  "report-pack": { label: "Report Pack", labelZh: "报告入库", accent: "green", icon: "▥" },
};

const THEME_RULES = [
  { id: "ai-infra", label: "AI Infrastructure", labelZh: "AI 基础设施", keywords: ["AI 基础设施", "AI infrastructure", "算力", "GPU", "NVDA", "Nvidia", "数据中心", "data center"] },
  { id: "power-grid", label: "Power & Grid", labelZh: "电力与电网", keywords: ["电力", "电网", "power", "grid", "Eaton", "GE Vernova", "Vertiv", "变压器"] },
  { id: "semis-memory", label: "Semis & Memory", labelZh: "半导体与存储", keywords: ["半导体", "存储", "HBM", "memory", "Micron", "MU", "先进封装", "CPO", "光模块"] },
  { id: "macro", label: "Macro Transmission", labelZh: "宏观传导", keywords: ["通胀", "inflation", "利率", "yield", "债券", "Treasury", "CPI", "PCE", "宏观"] },
  { id: "china-a", label: "China A Shares", labelZh: "中国资产", keywords: ["科创50", "A股", "STAR50", "中国资产", "港股", "MSCI China"] },
  { id: "mag7", label: "Mag7", labelZh: "Mag7", keywords: ["Mag7", "Microsoft", "Apple", "Tesla", "Meta", "Amazon", "Google", "Alphabet", "七巨头"] },
  { id: "productivity", label: "Productivity", labelZh: "生产率", keywords: ["生产率", "productivity", "Office", "Windows", "Agent", "工作流"] },
  { id: "markets", label: "Market Tape", labelZh: "市场报价", keywords: ["市场", "market", "价格", "指数", "quotes", "risk", "风险"] },
];

const DEFAULT_THEME = { id: "research", label: "Research System", labelZh: "研究系统" };

function cleanDate(value) {
  if (!value) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  const raw = String(value);
  const match = raw.match(/\d{4}-\d{2}-\d{2}/);
  if (match) return match[0];
  const parsed = new Date(raw);
  return Number.isNaN(parsed.valueOf()) ? "" : parsed.toISOString().slice(0, 10);
}

function stripMd(value) {
  return String(value || "").replace(/\.mdx?$/i, "").replace(/\/index$/i, "");
}

function publicHref(value, fallback = "/investor/") {
  const href = String(value || "").trim();
  if (!href) return fallback;
  if (/^(?:https?:|mailto:|#)/i.test(href)) return href;
  return href.startsWith("/") ? href : `/${href.replace(/^\/+/, "")}`;
}

function shortText(value, limit = 150) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (text.length <= limit) return text;
  return `${text.slice(0, limit - 1).trim()}…`;
}

function inferTheme(parts) {
  const text = parts.filter(Boolean).join(" ").toLowerCase();
  const found = THEME_RULES.find((theme) =>
    theme.keywords.some((keyword) => text.includes(String(keyword).toLowerCase())),
  );
  return found || DEFAULT_THEME;
}

function classifyPost(id) {
  if (id.includes("editor-daily")) return "editor-report";
  if (id.includes("mailbox-digest")) return "mailbox-digest";
  if (id.includes("brief-daily")) return "morning-brief";
  return "";
}

function addEvent(events, seen, event) {
  const date = cleanDate(event.date);
  if (!date) return;
  const id = event.id || `${event.source}:${date}:${event.title}`;
  if (seen.has(id)) return;
  const source = SOURCE_META[event.source] ? event.source : "report-pack";
  const theme = event.theme || inferTheme([event.title, event.summary, ...(event.tags || [])]);
  seen.add(id);
  events.push({
    ...event,
    id,
    date,
    source,
    sourceLabel: SOURCE_META[source].label,
    sourceLabelZh: SOURCE_META[source].labelZh,
    icon: SOURCE_META[source].icon,
    accent: event.accent || SOURCE_META[source].accent,
    theme,
    href: publicHref(event.href, "/investor/"),
    summary: shortText(event.summary, 180),
    links: Array.isArray(event.links)
      ? event.links.slice(0, 4).map((link) => ({
          title: shortText(link.title || link.label || "Source", 48),
          href: publicHref(link.href, "/investor/"),
        }))
      : [],
    priority: Number(event.priority || 0),
  });
}

function postTitle(post) {
  if (post?.data?.private) return post.data.lang === "zh" ? "加密研究简报" : "Classified Brief";
  return post?.data?.title || stripMd(post?.id) || "Research brief";
}

function postSummary(post) {
  if (post?.data?.private) return post.data.lang === "zh" ? "授权内容已归档，公开站点仅展示可读入口。" : "Authorized content is archived with a public reading entry.";
  return post?.data?.description || "";
}

function buildPostEvents(events, seen, posts) {
  for (const post of posts || []) {
    const id = stripMd(post.id || post.slug || "");
    const source = classifyPost(id);
    if (!source) continue;
    const title = postTitle(post);
    const summary = postSummary(post);
    addEvent(events, seen, {
      id: `post:${id}`,
      date: post.data?.pubDate,
      source,
      title,
      summary,
      href: `/blog/${id}/`,
      tags: [post.data?.category, post.data?.lang],
      priority: source === "morning-brief" ? 90 : 72,
    });
  }
}

function buildReaderEvents(events, seen, siteData) {
  for (const report of siteData.readerReports || []) {
    addEvent(events, seen, {
      id: `reader:${report.id || report.href}`,
      date: report.date,
      source: "reader-report",
      title: report.title || "人类友好研究报告",
      summary: report.summary,
      href: report.href || "/investor/console/#reader-reports",
      links: (report.priorityViews || []).slice(0, 2).map((view) => ({ title: view.title || view, href: report.href })),
      priority: 84,
    });
  }
}

function buildCoreEvents(events, seen, siteData) {
  const dashboard = siteData.dailyDashboard || {};
  if (dashboard.date) {
    addEvent(events, seen, {
      id: `daily-dashboard:${dashboard.date}`,
      date: dashboard.date,
      source: "daily-dashboard",
      title: dashboard.headline || `${dashboard.date} 晨会信号看板`,
      summary: dashboard.lead || "整合晨会简报、市场报价、研究链地图和深度研究交接。",
      href: "/investor/daily/",
      priority: 100,
    });
  }

  for (const item of siteData.deepResearch || []) {
    addEvent(events, seen, {
      id: `deep:${item.slug || item.id}`,
      date: item.date,
      source: "deep-research",
      title: item.title_zh || item.title || item.title_en || "深度研究",
      summary: item.summary_zh || item.summary || item.summary_en,
      href: item.href || `/investor/deep-research/${item.slug}/`,
      priority: 88,
    });
  }

  for (const item of siteData.recapDashboards || []) {
    addEvent(events, seen, {
      id: `recap:${item.slug}`,
      date: item.date,
      source: "recap",
      title: item.title || "关键复盘",
      summary: item.subtitle,
      href: item.href || `/investor/recaps/${item.slug}/`,
      links: item.reportHref ? [{ title: "复盘报告", href: item.reportHref }] : [],
      priority: 78,
    });
  }
}

function buildTrackerEvents(events, seen, siteData) {
  const tracker = siteData.thesisTracker || {};
  for (const thesis of tracker.theses || []) {
    const firstReport = thesis.linkedReports?.[0] || {};
    addEvent(events, seen, {
      id: `thesis:${thesis.id}`,
      date: thesis.lastUpdated || tracker.date,
      source: "thesis",
      title: thesis.title || thesis.titleEn || "动态论点更新",
      summary: thesis.coreView || `${thesis.direction || ""} · ${thesis.status || ""}`,
      href: firstReport.href || "/investor/console/#theses",
      links: (thesis.linkedReports || []).slice(0, 3).map((report) => ({
        title: report.title || "Source report",
        href: report.href || "/investor/console/#reports",
      })),
      tags: [thesis.direction, thesis.status],
      priority: Number(thesis.priority || 0) + 55,
      conviction: thesis.conviction,
      status: thesis.status,
      direction: thesis.direction,
    });
  }

  const analystTracker = siteData.analystTracker || {};
  for (const change of analystTracker.changes || []) {
    const firstReport = change.linkedReports?.[0] || {};
    addEvent(events, seen, {
      id: `analyst:${analystTracker.date}:${change.analystId}:${change.category}`,
      date: analystTracker.date,
      source: "analyst-change",
      title: `${change.analyst || "分析师"}：${change.category || "观点更新"}`,
      summary: change.changeZh || change.changeEn,
      href: firstReport.href || "/investor/console/#analyst-tracker",
      links: (change.linkedReports || []).slice(0, 2).map((report) => ({
        title: report.title || "Linked report",
        href: report.href || "/investor/console/#reports",
      })),
      tags: [change.category, change.stance],
      priority: 62,
    });
  }

  const radar = siteData.changeRadar || {};
  for (const signal of (radar.chainSignals || []).slice(0, 12)) {
    const evidence = signal.evidence?.[0] || {};
    addEvent(events, seen, {
      id: `radar:${radar.date}:${signal.label}`,
      date: radar.date,
      source: "change-radar",
      title: `${signal.label || "研究链"} 变化雷达`,
      summary: signal.latest || signal.summary || radar.summary,
      href: signal.href || evidence.href || "/investor/console/#radar",
      links: (signal.evidence || []).slice(0, 3).map((item) => ({
        title: item.title || "Evidence",
        href: item.href || "/investor/console/#reports",
      })),
      priority: Number(signal.heat || 0) + 58,
    });
  }
}

function buildReportPackEvents(events, seen, siteData) {
  const reportsByDate = new Map();
  for (const report of siteData.reports || []) {
    const date = cleanDate(report.date);
    if (!date) continue;
    if (!reportsByDate.has(date)) reportsByDate.set(date, []);
    reportsByDate.get(date).push(report);
  }

  const dates = [...reportsByDate.keys()].sort((a, b) => b.localeCompare(a)).slice(0, 35);
  for (const date of dates) {
    const reports = reportsByDate.get(date) || [];
    const analysts = [...new Set(reports.map((report) => report.analyst).filter(Boolean))].slice(0, 4);
    const categories = [...new Set(reports.map((report) => report.category).filter(Boolean))].slice(0, 4);
    addEvent(events, seen, {
      id: `report-pack:${date}`,
      date,
      source: "report-pack",
      title: `${date} · ${reports.length} 篇研究报告入库`,
      summary: `${analysts.join(" / ") || "AI Institute"} 覆盖 ${categories.join("、") || "多主题研究"}。`,
      href: "/investor/console/#reports",
      links: reports.slice(0, 4).map((report) => ({
        title: report.title || report.id,
        href: report.href || "/investor/console/#reports",
      })),
      tags: categories,
      priority: Math.min(68, 40 + reports.length / 8),
    });
  }
}

function groupEvents(events) {
  const groups = new Map();
  for (const event of events) {
    if (!groups.has(event.date)) groups.set(event.date, []);
    groups.get(event.date).push(event);
  }
  return [...groups.entries()]
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([date, items]) => ({
      date,
      items: items.sort((a, b) => b.priority - a.priority || a.title.localeCompare(b.title)),
      sources: [...new Set(items.map((item) => item.sourceLabelZh))],
      themes: [...new Set(items.map((item) => item.theme.labelZh))],
    }));
}

function countBy(items, getter) {
  const counts = new Map();
  for (const item of items) {
    const key = getter(item);
    if (!key) continue;
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([label, count]) => ({ label, count }));
}

function buildThesisTracks(siteData, events) {
  const byTheme = new Map();
  for (const event of events) {
    const key = event.theme.id;
    if (!byTheme.has(key)) {
      byTheme.set(key, {
        id: key,
        label: event.theme.label,
        labelZh: event.theme.labelZh,
        accent: event.accent,
        events: [],
        theses: [],
      });
    }
    byTheme.get(key).events.push(event);
  }

  for (const thesis of siteData.thesisTracker?.theses || []) {
    const theme = inferTheme([thesis.title, thesis.titleEn, thesis.coreView, thesis.direction]);
    if (!byTheme.has(theme.id)) {
      byTheme.set(theme.id, {
        id: theme.id,
        label: theme.label,
        labelZh: theme.labelZh,
        accent: "yellow",
        events: [],
        theses: [],
      });
    }
    byTheme.get(theme.id).theses.push(thesis);
  }

  return [...byTheme.values()]
    .map((track) => ({
      ...track,
      latestDate: track.events[0]?.date || track.theses[0]?.lastUpdated || "",
      events: track.events.slice(0, 5),
      theses: track.theses
        .sort((a, b) => Number(b.priority || 0) - Number(a.priority || 0))
        .slice(0, 4),
      eventCount: track.events.length,
    }))
    .sort((a, b) => b.eventCount - a.eventCount || b.latestDate.localeCompare(a.latestDate))
    .slice(0, 8);
}

export function buildInvestorTimeline(siteData = {}, posts = []) {
  const events = [];
  const seen = new Set();

  buildPostEvents(events, seen, posts);
  buildCoreEvents(events, seen, siteData);
  buildReaderEvents(events, seen, siteData);
  buildTrackerEvents(events, seen, siteData);
  buildReportPackEvents(events, seen, siteData);

  const sortedEvents = events.sort((a, b) => b.date.localeCompare(a.date) || b.priority - a.priority);
  const groups = groupEvents(sortedEvents);
  const sourceMix = countBy(sortedEvents, (event) => event.sourceLabelZh);
  const themeMix = countBy(sortedEvents, (event) => event.theme.labelZh);
  const dates = groups.map((group) => group.date);

  return {
    generatedAt: siteData.generatedAt || new Date().toISOString(),
    latestDate: dates[0] || "",
    startDate: dates[dates.length - 1] || "",
    events: sortedEvents,
    latestEvents: sortedEvents.slice(0, 14),
    groups: groups.slice(0, 45),
    sourceMix,
    themeMix,
    thesisTracks: buildThesisTracks(siteData, sortedEvents),
    stats: {
      events: sortedEvents.length,
      days: groups.length,
      trackedReports: siteData.stats?.reports || (siteData.reports || []).length,
      activeTheses: siteData.thesisTracker?.stats?.total || (siteData.thesisTracker?.theses || []).length,
      sources: sourceMix.length,
      themes: themeMix.length,
    },
    sourceMeta: SOURCE_META,
  };
}
