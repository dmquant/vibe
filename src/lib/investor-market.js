export function hashString(value, size = 8) {
  let hash = 2166136261;
  const text = String(value || "");
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(size, "0").slice(0, size);
}

export function slugify(value, fallback = "item") {
  const slug = String(value || "")
    .normalize("NFKD")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || `${fallback}-${hashString(value || fallback)}`;
}

export function stockSlug(ticker) {
  return String(ticker || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9.:-]+/g, "-")
    .replace(/^-+|-+$/g, "") || `STOCK-${hashString(ticker || "stock")}`;
}

export function thesisPath(thesis) {
  return thesis?.href || `/investor/theses/${thesis?.id || "unknown"}/`;
}

export function laneSlug(thesisOrLane) {
  if (typeof thesisOrLane === "string") return slugify(thesisOrLane, "lane");
  return slugify(thesisOrLane?.laneEn || thesisOrLane?.lane || thesisOrLane?.practical?.sectorLane, "lane");
}

export function lanePath(thesisOrLane) {
  return thesisOrLane?.laneHref || `/investor/lanes/${laneSlug(thesisOrLane)}/`;
}

export function stockPath(stockOrTicker) {
  if (stockOrTicker && typeof stockOrTicker === "object" && stockOrTicker.href) return stockOrTicker.href;
  const ticker = typeof stockOrTicker === "object" ? stockOrTicker?.ticker : stockOrTicker;
  return `/investor/stocks/${stockSlug(ticker)}/`;
}

export function formatDate(value) {
  return String(value || "").replace(/^2026-/, "");
}

export function pct(value) {
  return `${Math.max(6, Math.min(100, Number(value || 0)))}%`;
}

export function flatEvents(thesis) {
  return (thesis?.timeline || [])
    .flatMap((group) => (group.events || []).map((event) => ({ ...event, date: group.date })))
    .filter((event) => event.title || event.summary);
}

export function buildLaneTimeline(lane, limit = 18) {
  const dates = new Map();
  for (const thesis of lane?.theses || []) {
    for (const group of thesis.timeline || []) {
      const key = group.date || "undated";
      const row = dates.get(key) || {
        date: key,
        supports: 0,
        risks: 0,
        neutral: 0,
        eventCount: 0,
        value: 0,
        theses: new Set(),
        events: [],
      };
      const events = group.events || [];
      const supports = Number(group.supports ?? events.filter((event) => event.supportType === "support").length);
      const risks = Number(group.risks ?? events.filter((event) => event.supportType === "risk").length);
      const neutral = Number(group.neutral ?? Math.max(0, events.length - supports - risks));
      row.supports += supports;
      row.risks += risks;
      row.neutral += neutral;
      row.eventCount += events.length || supports + risks + neutral;
      row.value += supports * 2 + neutral + risks * 1.25;
      row.theses.add(thesis.id);
      for (const event of events.slice(0, 4)) {
        row.events.push({
          ...event,
          thesisId: thesis.id,
          thesisTitle: thesis.title,
          thesisHref: thesisPath(thesis),
        });
      }
      dates.set(key, row);
    }
  }
  const rows = [...dates.values()]
    .map((row) => ({
      ...row,
      theses: [...row.theses],
      value: Math.round(row.value * 10) / 10,
      events: row.events
        .sort((a, b) => Number(b.score || 0) - Number(a.score || 0))
        .slice(0, 6),
    }))
    .sort((a, b) => String(a.date).localeCompare(String(b.date)));
  const recent = rows.slice(-limit);
  const maxValue = Math.max(1, ...recent.map((row) => row.value));
  return recent.map((row) => ({
    ...row,
    pct: pct((row.value / maxValue) * 100),
    label: row.risks > row.supports ? "风险主导" : row.supports > row.risks ? "支持增强" : "观察",
  }));
}

export function buildLaneRecaps(lane, livingRecaps = []) {
  const thesisIds = new Set((lane?.theses || []).map((thesis) => thesis.id));
  const linked = livingRecaps.filter((recap) => {
    const href = recap.reportHref || "";
    return [...thesisIds].some((id) => href.includes(`/investor/theses/${id}/`));
  });
  if (linked.length) {
    return linked.slice(0, 8).map((recap) => ({
      title: recap.title,
      subtitle: recap.subtitle || recap.chartDescription || "",
      href: recap.reportHref || `/investor/recaps/#${recap.slug}`,
      date: recap.date || "",
      metrics: recap.metrics || [],
      conclusions: recap.conclusions || [],
      kind: recap.kind || "living_recap",
    }));
  }

  return (lane?.theses || []).slice(0, 6).map((thesis) => ({
    title: `${thesis.title}：赛道复盘`,
    subtitle: thesis.coreView || thesis.practical?.portfolioUse || "",
    href: thesisPath(thesis),
    date: thesis.lastSeen || "",
    metrics: [
      { label: "证据", value: String(thesis.eventCount || 0), accent: "blue" },
      { label: "风险", value: String(thesis.risks || 0), accent: "red" },
      { label: "强度", value: String(thesis.conviction || 0), accent: "green" },
    ],
    conclusions: [
      { title: "主线定义", text: thesis.coreView || "" },
      { title: "最新变化", text: (thesis.whatChanged || []).slice(0, 1).join("；") || "等待新的研究结果验证。" },
    ],
    kind: "lane_synthetic_recap",
  }));
}

export function buildLaneIndex(input = []) {
  const source = Array.isArray(input) ? { theses: input } : (input || {});
  const theses = source.theses || [];
  if ((source.lanes || []).length) {
    const thesisById = new Map(theses.map((thesis) => [thesis.id, thesis]));
    const stockByTicker = new Map((source.stocks || []).map((stock) => [stock.ticker, stock]));
    return source.lanes.map((lane) => {
      const linkedTheses = (lane.thesisIds || []).map((id) => thesisById.get(id)).filter(Boolean);
      const actions = new Map();
      for (const thesis of linkedTheses) {
        const label = thesis.practical?.actionLabel || "观察等待";
        actions.set(label, (actions.get(label) || 0) + 1);
      }
      const linkedStocks = (lane.stockTickers || []).map((ticker) => {
        const stock = stockByTicker.get(ticker) || { ticker, name: ticker, market: "", href: stockPath(ticker) };
        const mappings = linkedTheses
          .flatMap((thesis) => (thesis.stockUniverse || []).filter((item) => item.ticker === ticker));
        return {
          ...stock,
          role: mappings[0]?.role || stock.roles?.[0] || "研究跟踪标的",
          mappingSource: mappings[0]?.mappingSource || "",
          confidence: Math.max(Number(stock.confidence || 0), ...mappings.map((item) => Number(item.confidence || 0))),
          evidenceCount: Math.max(Number(stock.evidenceCount || 0), ...mappings.map((item) => Number(item.evidenceCount || 0))),
          thesisCount: mappings.length,
          href: stock.href || stockPath(ticker),
        };
      });
      return {
        ...lane,
        slug: lane.slug || lane.href?.split("/").filter(Boolean).at(-1) || slugify(lane.titleEn || lane.titleZh, "lane"),
        lane: lane.titleZh || lane.lane || "未分类赛道",
        laneEn: lane.titleEn || lane.laneEn || "",
        href: lane.href || `/investor/lanes/${lane.slug}/`,
        theses: linkedTheses,
        stocks: linkedStocks,
        actions: [...actions.entries()].sort((a, b) => b[1] - a[1]),
        avgScore: Math.round(linkedTheses.reduce((sum, thesis) => sum + Number(thesis.practical?.score || thesis.conviction || 0), 0) / Math.max(1, linkedTheses.length)),
      };
    }).sort((a, b) => Number(b.evidenceCount || 0) - Number(a.evidenceCount || 0) || b.theses.length - a.theses.length);
  }

  const lanes = new Map();
  for (const thesis of theses) {
    const slug = laneSlug(thesis);
    const row = lanes.get(slug) || {
      slug,
      lane: thesis.lane || thesis.practical?.sectorLane || "未分类赛道",
      laneEn: thesis.laneEn || "",
      href: lanePath(thesis),
      theses: [],
      stocks: new Map(),
      actions: new Map(),
      score: 0,
    };
    row.theses.push(thesis);
    row.score += Number(thesis.practical?.score || thesis.conviction || 0);
    row.actions.set(thesis.practical?.actionLabel || "观察等待", (row.actions.get(thesis.practical?.actionLabel || "观察等待") || 0) + 1);
    for (const stock of thesis.stockUniverse || []) {
      const key = stockSlug(stock.ticker);
      const existing = row.stocks.get(key) || { ...stock, href: stockPath(stock), thesisCount: 0 };
      existing.thesisCount += 1;
      row.stocks.set(key, existing);
    }
    lanes.set(slug, row);
  }
  return [...lanes.values()]
    .map((lane) => ({
      ...lane,
      stocks: [...lane.stocks.values()].sort((a, b) => b.thesisCount - a.thesisCount || a.ticker.localeCompare(b.ticker)),
      actions: [...lane.actions.entries()].sort((a, b) => b[1] - a[1]),
      avgScore: Math.round(lane.score / Math.max(1, lane.theses.length)),
    }))
    .sort((a, b) => b.theses.length - a.theses.length || b.avgScore - a.avgScore);
}

export function buildStockIndex(input = []) {
  const source = Array.isArray(input) ? { theses: input } : (input || {});
  const theses = source.theses || [];
  if ((source.stocks || []).length) {
    const thesisById = new Map(theses.map((thesis) => [thesis.id, thesis]));
    const laneById = new Map((source.lanes || []).map((lane) => [lane.id, lane]));
    return source.stocks.map((stock) => {
      const linkedTheses = (stock.thesisIds || []).map((id) => thesisById.get(id)).filter(Boolean);
      const mappings = linkedTheses.flatMap((thesis) => (thesis.stockUniverse || [])
        .filter((item) => item.ticker === stock.ticker)
        .map((item) => ({ ...item, thesisId: thesis.id, thesisTitle: thesis.title, thesisHref: thesisPath(thesis) })));
      const events = linkedTheses
        .flatMap((thesis) => flatEvents(thesis).slice(0, 3).map((event) => ({ ...event, thesis })))
        .sort((a, b) => String(b.date).localeCompare(String(a.date)))
        .slice(0, 14);
      return {
        ...stock,
        slug: stock.slug || stockSlug(stock.ticker),
        href: stock.href || stockPath(stock.ticker),
        role: mappings[0]?.role || stock.roles?.[0] || "研究跟踪标的",
        mappingSource: mappings[0]?.mappingSource || "",
        theses: linkedTheses,
        lanes: (stock.laneIds || []).map((id) => {
          const lane = laneById.get(id);
          return lane ? { id, lane: lane.titleZh, laneEn: lane.titleEn, href: lane.href } : null;
        }).filter(Boolean),
        roles: stock.roles || [...new Set(mappings.map((item) => item.role).filter(Boolean))].slice(0, 8),
        mappings,
        events,
      };
    }).sort((a, b) => Number(b.evidenceCount || 0) - Number(a.evidenceCount || 0) || b.theses.length - a.theses.length || a.ticker.localeCompare(b.ticker));
  }

  const stocks = new Map();
  for (const thesis of theses) {
    for (const stock of thesis.stockUniverse || []) {
      const slug = stockSlug(stock.ticker);
      const row = stocks.get(slug) || {
        ...stock,
        slug,
        href: stockPath(stock),
        theses: [],
        lanes: new Map(),
        roles: new Map(),
        events: [],
      };
      row.theses.push(thesis);
      row.lanes.set(laneSlug(thesis), {
        lane: thesis.lane || thesis.practical?.sectorLane || "未分类赛道",
        href: lanePath(thesis),
      });
      if (stock.role) row.roles.set(`${thesis.id}:${stock.role}`, stock.role);
      row.events.push(...flatEvents(thesis).slice(0, 3).map((event) => ({ ...event, thesis })));
      stocks.set(slug, row);
    }
  }
  return [...stocks.values()]
    .map((stock) => ({
      ...stock,
      lanes: [...stock.lanes.values()],
      roles: [...stock.roles.values()].slice(0, 8),
      events: stock.events.sort((a, b) => String(b.date).localeCompare(String(a.date))).slice(0, 14),
    }))
    .sort((a, b) => b.theses.length - a.theses.length || a.ticker.localeCompare(b.ticker));
}

const marketContextIndexCache = new WeakMap();

export function resolveMarketContext(ontology, reportSlug) {
  const raw = ontology?.reportContexts?.[reportSlug];
  if (!raw) return { lanes: [], stocks: [], theses: [] };
  let indexes = marketContextIndexCache.get(ontology);
  if (!indexes) {
    indexes = {
      laneById: new Map((ontology.lanes || []).map((lane) => [lane.id, lane])),
      stockByTicker: new Map((ontology.stocks || []).map((stock) => [stock.ticker, stock])),
      thesisById: new Map((ontology.theses || []).map((thesis) => [thesis.id, thesis])),
    };
    marketContextIndexCache.set(ontology, indexes);
  }
  return {
    date: raw.date || "",
    lanes: (raw.laneIds || []).map((id) => indexes.laneById.get(id)).filter(Boolean),
    stocks: (raw.stockMappings || []).map((mapping) => {
      const stock = indexes.stockByTicker.get(mapping.ticker);
      return stock ? { ...stock, confidence: Math.max(Number(stock.confidence || 0), Number(mapping.confidence || 0)) } : null;
    }).filter(Boolean),
    theses: (raw.thesisIds || []).map((id) => indexes.thesisById.get(id)).filter(Boolean),
  };
}

export function mappingSourceLabel(value) {
  const labels = {
    curated_and_report: "种子 + 报告证据",
    report_evidence: "报告证据",
    curated_seed: "研究种子",
    lane_proxy: "赛道代理",
  };
  return labels[value] || "研究映射";
}
