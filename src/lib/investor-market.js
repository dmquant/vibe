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

export function buildLaneIndex(theses = []) {
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

export function buildStockIndex(theses = []) {
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
