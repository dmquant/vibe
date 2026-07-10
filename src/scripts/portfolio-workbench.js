const portfolioKey = "vibe.researchNetwork.portfolio.v2";
const legacyPortfolioKey = "vibe.researchNetwork.portfolio.v1";

function parseJson(value, fallback) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function number(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function isoNow() {
  return new Date().toISOString();
}

function defaultState() {
  return { version: 2, theses: [], stocks: [], settings: { baseCurrency: "USD" }, updatedAt: isoNow() };
}

function cleanText(value, max = 240) {
  return String(value ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

function normalizeState(value) {
  const state = defaultState();
  if (!value || typeof value !== "object") return state;
  state.settings.baseCurrency = ["USD", "CNY", "HKD", "EUR"].includes(value.settings?.baseCurrency)
    ? value.settings.baseCurrency
    : "USD";
  state.theses = (Array.isArray(value.theses) ? value.theses : []).slice(0, 300).map((item) => ({
    id: cleanText(item.id, 80), title: cleanText(item.title, 180), bucket: cleanText(item.bucket, 80),
    action: cleanText(item.action, 80), score: number(item.score), risk: cleanText(item.risk, 120),
    status: cleanText(item.status || "观察", 24), weight: number(item.weight),
    reviewDate: cleanText(item.reviewDate, 16), note: cleanText(item.note, 320), updatedAt: cleanText(item.updatedAt || isoNow(), 32),
  })).filter((item) => item.id);
  state.stocks = (Array.isArray(value.stocks) ? value.stocks : []).slice(0, 500).map((item) => {
    const ticker = cleanText(item.ticker, 32).toUpperCase();
    const catalog = stockCatalog.get(ticker);
    const fallbackLaneIds = (Array.isArray(item.laneIds) ? item.laneIds : [])
      .map((id) => cleanText(id, 80))
      .filter((id) => id && laneCatalog.has(id));
    return {
      ticker,
      name: cleanText(catalog?.name || item.name || ticker, 120),
      market: cleanText(catalog?.market || item.market, 40),
      href: catalog?.href || `/investor/stocks/${encodeURIComponent(ticker)}/`,
      laneIds: [...new Set(catalog?.laneIds || fallbackLaneIds)].slice(0, 12),
      side: ["long", "watch", "hedge", "avoid"].includes(item.side) ? item.side : "watch",
      shares: number(item.shares),
      avgCost: number(item.avgCost),
      price: number(item.price),
      currency: cleanText(item.currency || inferredCurrency(catalog?.market || item.market), 8),
      fxToBase: number(item.fxToBase),
      targetWeight: number(item.targetWeight),
      reviewDate: cleanText(item.reviewDate, 16),
      note: cleanText(item.note, 320),
      updatedAt: cleanText(item.updatedAt || isoNow(), 32),
    };
  }).filter((item) => item.ticker);
  state.updatedAt = cleanText(value.updatedAt || isoNow(), 32);
  return state;
}

function readState() {
  const current = parseJson(localStorage.getItem(portfolioKey), null);
  if (current?.version === 2) return normalizeState(current);
  const legacy = parseJson(localStorage.getItem(legacyPortfolioKey), []);
  const state = defaultState();
  if (Array.isArray(legacy)) state.theses = normalizeState({ theses: legacy }).theses;
  return state;
}

const dataNode = document.getElementById("portfolioData");
const publicData = parseJson(dataNode?.textContent || "{}", { stocks: [], lanes: [] });
const stockCatalog = new Map((publicData.stocks || []).map((stock) => [stock.ticker, stock]));
const laneCatalog = new Map((publicData.lanes || []).map((lane) => [lane.id, lane]));
let state = readState();

function writeState(next = state) {
  state = normalizeState({ ...next, updatedAt: isoNow() });
  localStorage.setItem(portfolioKey, JSON.stringify(state));
  renderAll();
}

function inferredCurrency(market) {
  if (/A-share/i.test(market)) return "CNY";
  if (/\bHK\b/i.test(market)) return "HKD";
  if (/Korea/i.test(market)) return "KRW";
  if (/Japan/i.test(market)) return "JPY";
  if (/Europe|EU/i.test(market)) return "EUR";
  return "USD";
}

function upsertThesis(item) {
  const index = state.theses.findIndex((entry) => entry.id === item.id);
  const next = {
    ...item, status: item.status || "观察", weight: number(item.weight), reviewDate: item.reviewDate || "",
    note: item.note || "", updatedAt: isoNow(),
  };
  if (index >= 0) state.theses[index] = { ...state.theses[index], ...next };
  else state.theses.unshift(next);
  writeState();
}

function upsertStock(ticker, patch = {}, persist = true) {
  const catalog = stockCatalog.get(ticker) || { ticker, name: ticker, market: "", href: `/investor/stocks/${ticker}/`, laneIds: [] };
  const index = state.stocks.findIndex((entry) => entry.ticker === ticker);
  const currency = inferredCurrency(catalog.market);
  const next = {
    ticker, name: catalog.name || ticker, market: catalog.market || "", href: catalog.href || `/investor/stocks/${ticker}/`,
    laneIds: catalog.laneIds || [], side: "watch", shares: 0, avgCost: 0, price: 0, currency,
    fxToBase: currency === state.settings.baseCurrency ? 1 : 0, targetWeight: 0, reviewDate: "", note: "", updatedAt: isoNow(),
    ...patch,
  };
  if (index >= 0) state.stocks[index] = { ...state.stocks[index], ...next, ...patch, updatedAt: isoNow() };
  else state.stocks.unshift(next);
  if (persist) writeState();
}

function formatMoney(value) {
  return new Intl.NumberFormat("zh-CN", { style: "currency", currency: state.settings.baseCurrency, maximumFractionDigits: 0 }).format(number(value));
}

function stockMetrics(item) {
  const converted = number(item.fxToBase) > 0;
  const value = converted ? number(item.shares) * number(item.price) * number(item.fxToBase) : 0;
  const cost = converted ? number(item.shares) * number(item.avgCost) * number(item.fxToBase) : 0;
  return { converted, value, cost, pnl: value - cost };
}

function option(value, current, label = value) {
  return `<option value="${escapeHtml(value)}" ${value === current ? "selected" : ""}>${escapeHtml(label)}</option>`;
}

function renderThesisBook() {
  const list = document.getElementById("thesisPortfolioList");
  const summary = document.getElementById("thesisPortfolioSummary");
  const allocation = document.getElementById("thesisAllocationBoard");
  const totalWeight = state.theses.reduce((sum, item) => sum + number(item.weight), 0);
  if (summary) summary.textContent = state.theses.length
    ? `${state.theses.length} 条主线 · 目标权重 ${totalWeight.toFixed(1)}% · 本地保存`
    : "当前 thesis book 为空。";
  const buckets = new Map();
  for (const item of state.theses) buckets.set(item.bucket || "主题机会", number(buckets.get(item.bucket || "主题机会")) + number(item.weight));
  if (allocation) allocation.innerHTML = [...buckets.entries()].map(([bucket, weight]) => `
    <div class="allocation-row"><span>${escapeHtml(bucket)}</span><strong>${weight.toFixed(1)}%</strong><i><b style="width:${Math.min(100, Math.max(3, weight))}%"></b></i></div>
  `).join("");
  if (!list) return;
  list.innerHTML = state.theses.map((item) => `
    <article class="portfolio-item thesis-ledger-row" data-thesis-id="${escapeHtml(item.id)}">
      <div><span>${escapeHtml(item.bucket)} · ${escapeHtml(item.action)} · ${item.score || ""}</span><strong><a href="/investor/theses/${escapeHtml(item.id)}/">${escapeHtml(item.title)}</a></strong><em>${escapeHtml(item.risk)}</em></div>
      <label>状态<select data-thesis-field="status">${["观察", "验证仓", "核心仓", "对冲", "退出"].map((value) => option(value, item.status)).join("")}</select></label>
      <label>目标权重<input data-thesis-field="weight" type="number" min="0" max="100" step="0.5" value="${number(item.weight)}" /></label>
      <label>复核日期<input data-thesis-field="reviewDate" type="date" value="${escapeHtml(item.reviewDate)}" /></label>
      <label>研究备注<input data-thesis-field="note" type="text" value="${escapeHtml(item.note)}" /></label>
      <button type="button" data-remove-thesis="${escapeHtml(item.id)}">移除</button>
    </article>
  `).join("");
}

function renderStockBook() {
  const list = document.getElementById("stockPortfolioList");
  const summary = document.getElementById("stockPortfolioSummary");
  const exposure = document.getElementById("laneExposureBoard");
  const metrics = state.stocks.map((item) => ({ item, ...stockMetrics(item) }));
  const value = metrics.reduce((sum, item) => sum + item.value, 0);
  const cost = metrics.reduce((sum, item) => sum + item.cost, 0);
  const pnl = value - cost;
  const targetWeight = state.stocks.reduce((sum, item) => sum + number(item.targetWeight), 0);
  const converted = metrics.filter((item) => item.converted && item.item.shares > 0).length;
  if (summary) summary.innerHTML = `
    <span><b>${state.stocks.length}</b> positions</span><span><b>${formatMoney(value)}</b> 市值</span>
    <span class="${pnl >= 0 ? "is-positive" : "is-negative"}"><b>${formatMoney(pnl)}</b> 未实现盈亏</span>
    <span><b>${targetWeight.toFixed(1)}%</b> 目标权重</span><span><b>${converted}</b> 已换算</span>
  `;
  const laneValues = new Map();
  for (const row of metrics) {
    const ids = row.item.laneIds.length ? row.item.laneIds : ["unmapped"];
    const basis = row.value > 0 ? row.value : number(row.item.targetWeight);
    for (const id of ids) laneValues.set(id, number(laneValues.get(id)) + basis / ids.length);
  }
  const maxLane = Math.max(1, ...laneValues.values());
  if (exposure) exposure.innerHTML = [...laneValues.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10).map(([id, amount]) => {
    const lane = laneCatalog.get(id);
    return `<a class="allocation-row" href="${escapeHtml(lane?.href || "#")}"><span>${escapeHtml(lane?.titleZh || "未映射")}</span><strong>${value > 0 ? formatMoney(amount) : `${amount.toFixed(1)}%`}</strong><i><b style="width:${Math.max(4, amount / maxLane * 100)}%"></b></i></a>`;
  }).join("");
  if (!list) return;
  list.innerHTML = state.stocks.map((item) => {
    const metric = stockMetrics(item);
    const actualWeight = value > 0 ? metric.value / value * 100 : 0;
    return `
      <article class="stock-ledger-row" data-stock-id="${escapeHtml(item.ticker)}">
        <div class="stock-ledger-identity"><span>${escapeHtml(item.market)} · ${escapeHtml(item.currency)}</span><strong><a href="${escapeHtml(item.href)}">${escapeHtml(item.ticker)} · ${escapeHtml(item.name)}</a></strong><em>实际 ${actualWeight.toFixed(1)}% · 目标 ${number(item.targetWeight).toFixed(1)}% · P&amp;L ${metric.converted ? formatMoney(metric.pnl) : "待换算"}</em></div>
        <div class="stock-ledger-fields">
          <label>角色<select data-stock-field="side">${option("long", item.side, "多头")} ${option("watch", item.side, "观察")} ${option("hedge", item.side, "对冲")} ${option("avoid", item.side, "回避")}</select></label>
          <label>数量<input data-stock-field="shares" type="number" min="0" step="0.01" value="${number(item.shares)}" /></label>
          <label>成本<input data-stock-field="avgCost" type="number" min="0" step="0.01" value="${number(item.avgCost)}" /></label>
          <label>现价<input data-stock-field="price" type="number" min="0" step="0.01" value="${number(item.price)}" /></label>
          <label>币种<input data-stock-field="currency" type="text" maxlength="8" value="${escapeHtml(item.currency)}" /></label>
          <label>FX → Base<input data-stock-field="fxToBase" type="number" min="0" step="0.0001" value="${number(item.fxToBase) || ""}" /></label>
          <label>目标 %<input data-stock-field="targetWeight" type="number" min="0" max="100" step="0.5" value="${number(item.targetWeight)}" /></label>
          <label>复核<input data-stock-field="reviewDate" type="date" value="${escapeHtml(item.reviewDate)}" /></label>
        </div>
        <div class="stock-ledger-note"><input data-stock-field="note" type="text" value="${escapeHtml(item.note)}" placeholder="催化剂、风险或执行备注" /><button type="button" data-remove-stock="${escapeHtml(item.ticker)}">移除</button></div>
      </article>`;
  }).join("");
}

function renderCounters() {
  document.querySelectorAll("[data-count-theses]").forEach((node) => { node.textContent = String(state.theses.length); });
  document.querySelectorAll("[data-count-stocks]").forEach((node) => { node.textContent = String(state.stocks.length); });
  const base = document.getElementById("portfolioBaseCurrency");
  if (base) base.value = state.settings.baseCurrency;
}

function renderAll() {
  renderCounters();
  renderThesisBook();
  renderStockBook();
}

function syncThesisFilters() {
  const query = String(document.getElementById("thesisSearch")?.value || "").toLowerCase().trim();
  const bucket = document.querySelector("[data-thesis-bucket].is-active")?.dataset.thesisBucket || "";
  const action = document.querySelector("[data-thesis-action].is-active")?.dataset.thesisAction || "";
  document.querySelectorAll(".candidate-row").forEach((row) => {
    const visible = (!query || String(row.dataset.search || "").toLowerCase().includes(query))
      && (!bucket || row.dataset.bucket === bucket) && (!action || row.dataset.action === action);
    row.classList.toggle("is-hidden", !visible);
  });
}

function syncStockFilters() {
  const query = String(document.getElementById("stockSearch")?.value || "").toLowerCase().trim();
  const market = document.getElementById("stockMarketFilter")?.value || "";
  document.querySelectorAll(".stock-candidate").forEach((row) => {
    const visible = (!query || String(row.dataset.search || "").toLowerCase().includes(query))
      && (!market || row.dataset.market === market);
    row.classList.toggle("is-hidden", !visible);
  });
}

function activateView(view) {
  document.querySelectorAll("[data-portfolio-view]").forEach((node) => { node.hidden = node.dataset.portfolioView !== view; });
  document.querySelectorAll("[data-view-target]").forEach((button) => {
    const active = button.dataset.viewTarget === view;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  history.replaceState(null, "", `#${view}`);
}

document.addEventListener("click", (event) => {
  const view = event.target.closest?.("[data-view-target]");
  if (view) activateView(view.dataset.viewTarget);
  const thesis = event.target.closest?.(".track-thesis");
  if (thesis) upsertThesis({ id: thesis.dataset.trackId, title: thesis.dataset.trackTitle, bucket: thesis.dataset.trackBucket, action: thesis.dataset.trackAction, score: thesis.dataset.trackScore, risk: thesis.dataset.trackRisk });
  const stock = event.target.closest?.("[data-add-stock]");
  if (stock) upsertStock(stock.dataset.addStock);
  const basket = event.target.closest?.("[data-add-basket]");
  if (basket) {
    const lane = (publicData.lanes || []).find((item) => item.id === basket.dataset.addBasket);
    for (const item of lane?.advice?.basket || []) {
      upsertStock(item.ticker, {
        side: item.role === "hedge" ? "hedge" : item.role === "core" ? "long" : "watch",
        targetWeight: item.suggestedWeightPct,
        note: `模型赛道篮子 · ${lane.titleZh}`,
      }, false);
    }
    if (lane?.advice?.basket?.length) writeState();
  }
  const removeThesis = event.target.closest?.("[data-remove-thesis]");
  if (removeThesis) writeState({ ...state, theses: state.theses.filter((item) => item.id !== removeThesis.dataset.removeThesis) });
  const removeStock = event.target.closest?.("[data-remove-stock]");
  if (removeStock) writeState({ ...state, stocks: state.stocks.filter((item) => item.ticker !== removeStock.dataset.removeStock) });
  const bucket = event.target.closest?.("[data-thesis-bucket]");
  if (bucket) {
    document.querySelectorAll("[data-thesis-bucket]").forEach((item) => item.classList.remove("is-active"));
    if (bucket.dataset.thesisBucket) bucket.classList.add("is-active");
    syncThesisFilters();
  }
  const action = event.target.closest?.("[data-thesis-action]");
  if (action) {
    document.querySelectorAll("[data-thesis-action]").forEach((item) => item.classList.remove("is-active"));
    if (action.dataset.thesisAction) action.classList.add("is-active");
    syncThesisFilters();
  }
});

document.addEventListener("change", (event) => {
  const thesisField = event.target.closest?.("[data-thesis-field]");
  const thesisRow = event.target.closest?.("[data-thesis-id]");
  if (thesisField && thesisRow) {
    const item = state.theses.find((entry) => entry.id === thesisRow.dataset.thesisId);
    if (item) { item[thesisField.dataset.thesisField] = thesisField.type === "number" ? number(thesisField.value) : cleanText(thesisField.value, 320); writeState(); }
  }
  const stockField = event.target.closest?.("[data-stock-field]");
  const stockRow = event.target.closest?.("[data-stock-id]");
  if (stockField && stockRow) {
    const item = state.stocks.find((entry) => entry.ticker === stockRow.dataset.stockId);
    if (item) { item[stockField.dataset.stockField] = stockField.type === "number" ? number(stockField.value) : cleanText(stockField.value, 320); writeState(); }
  }
});

document.getElementById("portfolioBaseCurrency")?.addEventListener("change", (event) => {
  state.settings.baseCurrency = event.target.value;
  for (const item of state.stocks) if (item.currency === state.settings.baseCurrency) item.fxToBase = 1;
  writeState();
});
document.getElementById("thesisSearch")?.addEventListener("input", syncThesisFilters);
document.getElementById("stockSearch")?.addEventListener("input", syncStockFilters);
document.getElementById("stockMarketFilter")?.addEventListener("change", syncStockFilters);

document.getElementById("exportPortfolio")?.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `vibe-research-portfolio-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
});
document.getElementById("importPortfolioButton")?.addEventListener("click", () => document.getElementById("importPortfolio")?.click());
document.getElementById("importPortfolio")?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const imported = parseJson(await file.text(), null);
  if (!imported || typeof imported !== "object") return;
  writeState(normalizeState(imported));
  event.target.value = "";
});
document.getElementById("clearPortfolio")?.addEventListener("click", () => {
  if (confirm("清空当前浏览器中的 thesis 与 stock book？")) writeState(defaultState());
});

const initialView = ["stocks", "theses", "advice"].includes(location.hash.slice(1)) ? location.hash.slice(1) : "stocks";
activateView(initialView);
renderAll();
