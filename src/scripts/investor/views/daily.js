import { esc, fmt, sectionHead, truncate } from "../utils.js";
import { mountSignalMap } from "../../signal-map.js";

const link = (href, fallback = "#dailyReports") => esc(href || fallback);
const MAP_ACCENTS = ["#2f80ed", "#169b62", "#d64545", "#d7a316", "#e46f2e"];
const MAP_COORDINATES = {
  "宏观通胀传导": [39.5, -98.35],
  "AI 基础设施": [37.34, -121.89],
  "工业供给瓶颈": [31.23, 121.47],
  "电力与电网": [52.52, 13.4],
  "半导体与存储": [24.8, 120.99],
  "消费与生产率": [35.68, 139.76],
};
const FALLBACK_COORDINATES = [[51.5, -0.1], [1.35, 103.82], [19.07, 72.88], [-33.86, 151.21]];
let latestDailyMapBrief = null;

const MARKET_LABELS_ZH = {
  DOW: "道琼斯",
  SPX: "标普500",
  NDX: "纳斯达克100",
  NASDAQ: "纳斯达克综指",
  N225: "日经225",
  HSI: "恒生指数",
  VIX: "VIX",
  UST10Y: "美国10Y",
  WTI: "WTI原油",
  BRENT: "Brent原油",
  GOLD: "现货黄金",
  DXY: "DXY",
  EURUSD: "EUR/USD",
  USDJPY: "USD/JPY",
  USDCNY: "USD/CNY",
  USDCNH: "USD/CNH",
};

const BRIEFING_TILES = [
  { no: "01", title: "宏观脉冲", text: "隔夜风险地图", query: "宏观", href: "#dailyReports" },
  { no: "02", title: "中国政策", text: "政策与增长观察", query: "中国", href: "#dailyReports" },
  { no: "03", title: "A股策略", text: "宽幅震荡、缩量、去杠杆", query: "A股", href: "#dailyReports" },
  { no: "04", title: "资金情绪", text: "资金与仓位结构", href: "#dailyMomentum" },
  { no: "05", title: "风险监控", text: "下行触发因素", href: "#dailyRisks" },
  { no: "06", title: "全球概览", text: "海外市场速览", query: "全球", href: "#dailyReports" },
];

function dailyStat(label, value, color, href, detail = "") {
  return `<a class="daily-stat-card" href="${link(href)}" style="--accent:${esc(color)}">
    <span>${esc(label)}</span>
    <strong>${fmt(value)}</strong>
    ${detail ? `<em>${esc(detail)}</em>` : ""}
  </a>`;
}

function dailySignalHref(item, label) {
  if (item?.href) return item.href;
  if (/变化|动量|升温|降温/.test(label || item?.label || "")) return "#dailyMomentum";
  if (/风险/.test(label || item?.label || "")) return "#dailyRisks";
  if (/证据|链条/.test(label || item?.label || "")) return "#dailyChains";
  return "#dailyReports";
}

function parseMarketTapeLine(line) {
  const text = String(line || "").replace(/\s+/g, " ").trim();
  const match = text.match(/^(.+?)\s+([~]?[0-9][0-9,]*(?:\.[0-9]+)?(?:\s*(?:USD\/bbl|USD\/oz|%))?)(?:\s+\((.*)\))?$/);
  if (!match) return { label: text, value: "", change: "" };
  return {
    label: match[1],
    value: match[2],
    change: match[3] || "",
  };
}

function normalizedMarketRows(brief) {
  const tape = brief.marketTape?.zh || brief.synthesis?.marketTape?.zh || [];
  if (Array.isArray(tape) && tape.length) {
    return tape.slice(0, 15).map(parseMarketTapeLine);
  }
  const quotes = brief.marketQuotes || brief.synthesis?.marketQuotes || [];
  if (Array.isArray(quotes) && quotes.length) {
    return quotes.slice(0, 15).map((quote) => ({
      label: quote.labelZh || MARKET_LABELS_ZH[quote.key] || quote.key || "市场",
      value: quote.value || "",
      change: quote.change || "",
    }));
  }
  return [];
}

function dailyMapItems(brief) {
  return (brief.chainRadar || []).slice(0, 6).map((item, index) => ({
    label: item.label,
    heat: item.heat,
    latest: item.latest,
    recent: item.recent,
    risk: item.risk,
    href: item.evidence?.[0]?.href || "#dailyReports",
    evidenceTitle: item.evidence?.[0]?.title || "",
    coords: MAP_COORDINATES[item.label] || FALLBACK_COORDINATES[index % FALLBACK_COORDINATES.length],
    accent: MAP_ACCENTS[index % MAP_ACCENTS.length],
  }));
}

function renderBriefingTiles() {
  return BRIEFING_TILES.map((tile) => `<a class="daily-brief-tile" href="${link(tile.href)}" ${tile.query ? `data-daily-query="${esc(tile.query)}"` : ""}>
    <span>${esc(tile.no)}</span>
    <strong>${esc(tile.title)}</strong>
    <em>${esc(tile.text)}</em>
  </a>`).join("");
}

function renderDailyBoardMap(brief) {
  const chains = (brief.chainRadar || []).slice(0, 5);
  return `<div class="daily-map-panel">
    <div class="daily-panel-title">全球风险地图（隔夜变动）</div>
    <div id="dailySignalMap" class="daily-leaflet-map" aria-label="全球研究链地图"></div>
    <div class="daily-map-tags">
      ${chains.map((item, index) => `<a href="#dailyReports" data-daily-chain="${esc(item.label)}" style="--accent:${MAP_ACCENTS[index % MAP_ACCENTS.length]}">${esc(item.label)}</a>`).join("")}
    </div>
  </div>`;
}

function renderDailyRiskPreview(brief) {
  const items = (brief.riskMatrix || []).slice(0, 9);
  return `<div class="daily-risk-preview" id="dailyRiskPreview">
    <div class="daily-panel-title">风险矩阵（概率 × 影响）</div>
    <div class="daily-risk-mini-grid">
      ${Array.from({ length: 9 }, (_, idx) => {
        const item = items[idx];
        const level = idx > 5 ? "high" : idx > 2 ? "mid" : "low";
        return item
          ? `<a class="${level}" href="${link(item.href)}" title="${esc(item.chain)} · ${esc(item.title)}">${idx + 1}</a>`
          : `<span class="${level}">${idx + 1}</span>`;
      }).join("")}
    </div>
  </div>`;
}

function renderDailyMarketTape(brief) {
  const rows = normalizedMarketRows(brief);
  return `<div class="daily-market-tape" id="dailyMarketTape">
    <div class="daily-panel-title">市场报价（隔夜收盘）</div>
    <div class="daily-quote-table">
      ${rows.length ? rows.map((row) => `<a class="daily-quote-row" href="#dailyReports" data-daily-query="${esc(row.label)}">
        <span>${esc(row.label)}</span>
        <strong>${esc(row.value)}</strong>
        <em>${esc(row.change)}</em>
      </a>`).join("") : `<div class="daily-quote-empty">暂无市场报价。</div>`}
    </div>
  </div>`;
}

function renderDailyBriefBoard(brief) {
  const synthesis = brief.synthesis || {};
  const bullets = Array.isArray(synthesis.bullets) ? synthesis.bullets : [];
  const headline = synthesis.headline || "今日研究信号";
  const lead = synthesis.lead || "今日研究结果已归并为可点击的结论、变化、风险和证据入口。";
  const firstHighlight = (brief.highlights || [])[0];
  const watchItems = Array.isArray(synthesis.watchItems) ? synthesis.watchItems : [];
  return `<section class="daily-brief-board" id="dailyOverview">
    <div class="daily-board-terminal">
      <div class="daily-board-head">
        <div>
          <div class="eyebrow">AI Institute · Morning Signal Board</div>
          <h2>AI研究院晨会简报</h2>
          <p>每日研究信号图 - ${esc(brief.date)}</p>
        </div>
        <div class="daily-board-actions">
          <a class="daily-date" href="${link(brief.docxHref || brief.docxLatestHref, "#dailyReports")}" download>${esc(brief.date)}</a>
          <a class="download-button" href="${link(brief.docxHref || brief.docxLatestHref, "#dailyReports")}" download>下载 DOCX</a>
        </div>
      </div>
      <div class="daily-brief-tile-grid">${renderBriefingTiles()}</div>
      <div class="daily-stat-grid">
        ${dailyStat("今日报告", brief.stats.reports, "#f5f5f5", "#dailyReports", "打开证据表")}
        ${dailyStat("活跃分析师", brief.stats.analysts, "#d8d8d8", "#dailyHeatmap", "查看活跃度")}
        ${dailyStat("活跃链条", brief.stats.activeChains, "#bfbfbf", "#dailyChains", "查看雷达")}
        ${dailyStat("风险信号", brief.stats.riskItems, "#ffffff", "#dailyRisks", "查看矩阵")}
      </div>
      <div class="daily-board-layout">
        <div class="daily-key-panel">
          <div class="daily-panel-title">今日关键要点</div>
          <a class="daily-main-callout" href="${link(firstHighlight?.href || bullets[0]?.href)}">
            <strong>${esc(headline)}</strong>
            <span>${esc(lead)}</span>
          </a>
          <div class="daily-signal-grid">
            ${bullets.map((item) => {
              const href = dailySignalHref(item, item.label);
              return `<a class="daily-signal-card" href="${link(href)}">
                <strong>${esc(item.label || "要点")}</strong>
                <span>${esc(item.text || "")}</span>
              </a>`;
            }).join("") || (firstHighlight ? `<a class="daily-signal-card" href="${link(firstHighlight.href)}">
              <strong>主线判断</strong>
              <span>${esc(firstHighlight.title)}</span>
            </a>` : "")}
          </div>
        </div>
        ${renderDailyBoardMap(brief)}
        ${renderDailyRiskPreview(brief)}
        <div class="daily-flow-panel">
          <div class="daily-panel-title">资金与情绪概览</div>
          ${(brief.momentum || []).slice(0, 4).map((item) => `<a href="#dailyReports" data-daily-query="${esc(item.tag)}">
            <span>${esc(item.tag)}</span>
            <strong>${fmt(item.today)}</strong>
            <em class="${item.delta >= 0 ? "delta-up" : "delta-down"}">${item.delta >= 0 ? "+" : ""}${fmt(item.delta)}</em>
          </a>`).join("")}
        </div>
        ${renderDailyMarketTape(brief)}
      </div>
      ${watchItems.length ? `<div class="daily-watch-strip">
        ${watchItems.slice(0, 3).map((item) => `<a href="${link(item.href)}"><strong>${esc(item.title)}</strong><span>${esc(item.reason)}</span></a>`).join("")}
      </div>` : ""}
      ${synthesis.marketRead ? `<a class="daily-market-read" href="#dailyChains">
        <strong>投资解读：</strong>${esc(synthesis.marketRead)}
      </a>` : ""}
    </div>
  </section>`;
}

function renderDailyTrend(brief) {
  const dates = brief.trend.dates || [];
  const series = brief.trend.series || [];
  const W = 760;
  const H = 320;
  const pad = 42;
  const values = series.flatMap((item) => item.values || []);
  const max = Math.max(1, ...values);
  const colors = MAP_ACCENTS;
  const x = (idx) => pad + (dates.length <= 1 ? 0 : idx * (W - pad * 2) / (dates.length - 1));
  const y = (value) => H - pad - (Number(value || 0) / max) * (H - pad * 2);
  const grid = [0, .25, .5, .75, 1].map((ratio) => {
    const yy = H - pad - ratio * (H - pad * 2);
    return `<line class="axis-line" x1="${pad}" y1="${yy}" x2="${W - pad}" y2="${yy}" opacity=".5" />`;
  }).join("");
  const paths = series.map((item, idx) => {
    const points = (item.values || []).map((value, i) => `${x(i)},${y(value)}`);
    const path = points.length ? `M ${points.join(" L ")}` : "";
    const color = colors[idx % colors.length];
    const dots = (item.values || []).map((value, i) => `<a href="#dailyReports" data-daily-query="${esc(item.label)}" aria-label="${esc(item.label)} ${esc(dates[i])}: ${fmt(value)}">
      <circle class="trend-dot" cx="${x(i)}" cy="${y(value)}" r="4" fill="${color}" style="animation-delay:${i * 45}ms"><title>${esc(item.label)} ${esc(dates[i])}: ${fmt(value)}</title></circle>
    </a>`).join("");
    return `<path class="trend-line" d="${path}" stroke="${color}" style="animation-delay:${idx * 120}ms" />${dots}`;
  }).join("");
  const labels = dates.map((date, idx) => `<text class="axis-label" x="${x(idx)}" y="${H - 12}" text-anchor="middle">${esc(date.slice(5))}</text>`).join("");
  const legend = series.map((item, idx) => `<a href="#dailyReports" data-daily-query="${esc(item.label)}"><i class="legend-dot" style="background:${colors[idx % colors.length]}"></i>${esc(item.label)}</a>`).join("");
  return `<div class="graph-legend">${legend}</div><svg class="trend-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="主题热度趋势">
    ${grid}
    <line class="axis-line" x1="${pad}" y1="${H - pad}" x2="${W - pad}" y2="${H - pad}" />
    <line class="axis-line" x1="${pad}" y1="${pad}" x2="${pad}" y2="${H - pad}" />
    ${paths}
    ${labels}
  </svg>`;
}

function renderChainRadar(brief) {
  const max = Math.max(1, ...brief.chainRadar.map((item) => Number(item.heat || 0)));
  return `<div class="chain-radar">${brief.chainRadar.slice(0, 6).map((item, index) => `
    <article class="chain-card">
      <div class="chain-card-head">
        <h3><a href="#dailyReports" data-daily-chain="${esc(item.label)}">${esc(item.label)}</a></h3>
        <span class="score-badge">${fmt(item.heat)}</span>
      </div>
      <a class="chain-meter" href="#dailyReports" data-daily-chain="${esc(item.label)}" aria-label="${esc(item.label)} 证据表筛选"><span style="width:${Math.max(4, item.heat / max * 100)}%; background:${MAP_ACCENTS[index % MAP_ACCENTS.length]}"></span></a>
      <div class="mini-stats" style="margin-top:8px">
        <a href="#dailyReports" data-daily-chain="${esc(item.label)}">今日 <strong>${fmt(item.latest)}</strong></a>
        <a href="#dailyReports" data-daily-chain="${esc(item.label)}">近七日 <strong>${fmt(item.recent)}</strong></a>
        <a href="#dailyRisks" data-daily-chain="${esc(item.label)}">风险 <strong>${fmt(item.risk)}</strong></a>
      </div>
      <div class="chain-links">
        ${(item.evidence || []).map((report) => `<a href="${link(report.href)}">${esc(report.title)}</a>`).join("")}
      </div>
    </article>`).join("")}</div>`;
}

function renderRiskMatrix(brief) {
  const items = brief.riskMatrix || [];
  const grouped = new Map();
  items.forEach((item) => {
    const impact = Math.min(5, Math.max(1, Number(item.impact || 1)));
    const probability = Math.min(5, Math.max(1, Number(item.probability || 1)));
    const key = `${probability}-${impact}`;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push({ ...item, impact, probability });
  });
  const rows = [5, 4, 3, 2, 1];
  const cols = [1, 2, 3, 4, 5];
  const severity = (impact, probability) => {
    const value = impact + probability;
    if (value >= 8) return "high";
    if (value >= 6) return "medium";
    return "low";
  };
  const renderCell = (probability, impact) => {
    const cellItems = grouped.get(`${probability}-${impact}`) || [];
    const visible = cellItems.slice(0, 2);
    return `<div class="risk-cell ${severity(impact, probability)} ${cellItems.length ? "has-items" : ""}" aria-label="概率 ${probability} 影响 ${impact}">
      ${visible.map((item, idx) => `<a class="risk-token" href="${link(item.href)}" style="--risk-delay:${idx * 45}ms" title="${esc(item.chain)} · ${esc(item.title)}">
        <strong>${esc(truncate(item.chain, 9))}</strong>
        <span>${esc(truncate(item.title, 34))}</span>
      </a>`).join("")}
      ${cellItems.length > visible.length ? `<a class="risk-more" href="#dailyReports" data-daily-chain="${esc(cellItems[0]?.chain || "")}">+${fmt(cellItems.length - visible.length)}</a>` : ""}
    </div>`;
  };
  return `<div class="risk-matrix-wrap" role="img" aria-label="风险矩阵：纵轴为发生概率，横轴为影响程度">
    <div class="risk-axis-y">发生概率</div>
    <div class="risk-matrix-grid">
      <div class="risk-corner"></div>
      ${cols.map((col) => `<div class="risk-col-label">${col}</div>`).join("")}
      ${rows.map((row) => `<div class="risk-row-label">${row}</div>${cols.map((col) => renderCell(row, col)).join("")}`).join("")}
    </div>
    <div class="risk-axis-x">影响程度</div>
  </div>`;
}

function renderHeatmap(brief) {
  const heatmap = brief.heatmap || { dates: [], analysts: [] };
  const max = Math.max(1, ...heatmap.analysts.flatMap((item) => item.values || []));
  return `<table class="heatmap">
    <thead><tr><th>分析师</th>${heatmap.dates.map((date) => `<th>${esc(date.slice(5))}</th>`).join("")}</tr></thead>
    <tbody>
      ${heatmap.analysts.map((analyst) => `<tr>
        <th><a href="#dailyReports" data-daily-query="${esc(analyst.name)}">${esc(analyst.name)}</a></th>
        ${(analyst.values || []).map((value, idx) => {
          const alpha = .12 + (Number(value || 0) / max) * .72;
          return `<td><a class="heat-cell" href="#dailyReports" data-daily-query="${esc(analyst.name)}" style="background:rgba(40,91,157,${alpha}); animation-delay:${idx * 25}ms" aria-label="${esc(analyst.name)} ${esc(heatmap.dates[idx] || "")} ${fmt(value)}">${value ? fmt(value) : ""}</a></td>`;
        }).join("")}
      </tr>`).join("")}
    </tbody>
  </table>`;
}

function dailyFilteredReports({ data, state }) {
  const brief = data.dailyBrief;
  const q = state.dailyQuery.trim().toLowerCase();
  return (brief.tableReports || []).filter((report) => {
    const text = `${report.title} ${report.summary} ${report.analyst} ${report.chain} ${(report.tags || []).join(" ")}`.toLowerCase();
    if (q && !text.includes(q)) return false;
    if (state.dailyChain && report.chain !== state.dailyChain) return false;
    return true;
  });
}

function renderDailyTableRows(reports) {
  return reports.map((report) => `<tr class="clickable-row" data-row-href="${link(report.href)}" tabindex="0" role="link">
    <td><a href="${link(report.href)}">${esc(report.title)}</a><div class="mini-stats"><div class="tags">${(report.tags || []).map((tag) => `<a class="tag" href="#dailyReports" data-daily-query="${esc(tag)}">${esc(tag)}</a>`).join("")}</div></div></td>
    <td><a href="#dailyReports" data-daily-query="${esc(report.analyst)}">${esc(report.analyst)}</a></td>
    <td><a href="#dailyReports" data-daily-chain="${esc(report.chain)}">${esc(report.chain)}</a></td>
    <td><a class="score-badge" href="${link(report.href)}">${fmt(report.score)}</a></td>
    <td>${report.risk ? `<a class="status-pill" href="#dailyRisks" data-daily-chain="${esc(report.chain)}">风险 ${fmt(report.risk)}</a>` : `<a class="status-pill" href="${link(report.href)}">常规</a>`}</td>
  </tr>`).join("");
}

export function renderDaily(context) {
  const { app, data, state } = context;
  const brief = data.dailyBrief;
  const rows = dailyFilteredReports(context);
  const chains = [...new Set((brief.tableReports || []).map((report) => report.chain).filter(Boolean))].sort();
  app.innerHTML = `
    ${renderDailyBriefBoard(brief)}
    <section class="daily-hero">
      <div class="panel" id="dailyHighlights">
        <div>
          ${sectionHead("今日核心结论", "按重要性、行业链关联、风险信号和证据密度排序。")}
          <div class="highlight-list">
            ${brief.highlights.map((item, idx) => `<a class="highlight-item" href="${link(item.href)}">
              <div class="highlight-rank">${idx + 1}</div>
              <div>
                <h3>${esc(item.title)}</h3>
                <p>${esc(item.summary)}</p>
                <div class="mini-stats" style="margin-top:8px">
                  <span>${esc(item.analyst)}</span>
                  <span>${esc(item.primary_chain)}</span>
                  <span>评分 <strong>${fmt(item.score)}</strong></span>
                  <span>${esc(item.reason)}</span>
                </div>
              </div>
            </a>`).join("") || `<div class="empty">暂无可用结论。</div>`}
          </div>
        </div>
      </div>
      <aside class="panel" id="dailyMomentum">
        ${sectionHead("重大变化", brief.previousDate ? `对比 ${brief.previousDate}` : "暂无前一交易日对比")}
        <div class="momentum-list">
          ${brief.momentum.slice(0, 8).map((item) => `<a class="momentum-row" href="#dailyReports" data-daily-query="${esc(item.tag)}">
            <strong>${esc(item.tag)}</strong>
            <span>${fmt(item.today)}</span>
            <span>${fmt(item.previous)}</span>
            <span class="${item.delta >= 0 ? "delta-up" : "delta-down"}">${item.delta >= 0 ? "+" : ""}${fmt(item.delta)}</span>
          </a>`).join("") || `<div class="empty">暂无变化数据。</div>`}
        </div>
        <div style="margin-top:18px" id="dailyChains">
          ${sectionHead("行业链雷达", "今日热度 = 当日提及、近七日证据和风险信号的组合。")}
          ${renderChainRadar(brief)}
        </div>
      </aside>
    </section>
    <section class="grid cols-2" style="margin-top:16px">
      <div class="panel chart-panel">
        ${sectionHead("主题热度趋势", "近七日高频主题变化。")}
        ${renderDailyTrend(brief)}
      </div>
      <div class="panel chart-panel" id="dailyRisks">
        ${sectionHead("风险矩阵", "按发生概率与影响程度分格展示；点击单元格中的报告进入证据。")}
        ${renderRiskMatrix(brief)}
      </div>
    </section>
    <section class="grid cols-2" style="margin-top:16px">
      <div class="panel" id="dailyHeatmap">
        ${sectionHead("分析师活跃度", "按近七日报告数量选择前 12 位分析师。")}
        ${renderHeatmap(brief)}
      </div>
      <div class="panel">
        ${sectionHead("简报数据", "为例行同步保留机器可读出口。")}
        <div class="grid cols-2">
          ${dailyStat("近七日报告", brief.stats.recentReports, "var(--blue)", "#dailyReports", "打开证据表")}
          ${dailyStat("表格证据", brief.tableReports.length, "var(--green)", "#dailyReports", "查看当前列表")}
        </div>
        <p style="color:var(--muted);line-height:1.6">本页数据已同步输出为 daily JSON，可用于后续自动发布、邮件摘要或投研工作台嵌入。</p>
      </div>
    </section>
    <section class="panel" style="margin-top:16px" id="dailyReports">
      ${sectionHead("重点报告表", `当前显示 ${fmt(rows.length)} 条，可搜索并按行业链筛选。`)}
      <div class="daily-controls">
        <input id="dailySearch" type="search" placeholder="搜索结论、分析师、链条、标签..." value="${esc(state.dailyQuery)}">
        <select id="dailyChain"><option value="">全部行业链</option>${chains.map((chain) => `<option value="${esc(chain)}" ${state.dailyChain === chain ? "selected" : ""}>${esc(chain)}</option>`).join("")}</select>
      </div>
      <div class="data-table-wrap">
        <table class="data-table">
          <thead><tr><th>报告与标签</th><th>分析师</th><th>行业链</th><th>评分</th><th>风险</th></tr></thead>
          <tbody>${renderDailyTableRows(rows)}</tbody>
        </table>
      </div>
    </section>`;
  latestDailyMapBrief = brief;
  mountSignalMap(app.querySelector("#dailySignalMap"), dailyMapItems(brief), { maxZoom: 3 });
  document.querySelector("#dailySearch").addEventListener("input", (event) => { state.dailyQuery = event.target.value; renderDaily(context); });
  document.querySelector("#dailyChain").addEventListener("change", (event) => { state.dailyChain = event.target.value; renderDaily(context); });
  app.querySelectorAll("[data-daily-query]").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      state.dailyQuery = item.dataset.dailyQuery || "";
      if (!item.dataset.dailyChain) state.dailyChain = "";
      renderDaily(context);
      requestAnimationFrame(() => document.querySelector("#dailyReports")?.scrollIntoView({ behavior: "smooth", block: "start" }));
    });
  });
  app.querySelectorAll("[data-daily-chain]").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      state.dailyChain = item.dataset.dailyChain || "";
      state.dailyQuery = item.dataset.dailyQuery || "";
      renderDaily(context);
      const target = item.getAttribute("href") === "#dailyRisks" ? "#dailyRisks" : "#dailyReports";
      requestAnimationFrame(() => document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    });
  });
  app.querySelectorAll(".clickable-row").forEach((row) => {
    row.addEventListener("click", (event) => {
      if (event.target.closest("a,button,input,select")) return;
      window.location.href = row.dataset.rowHref;
    });
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter") window.location.href = row.dataset.rowHref;
    });
  });
}

if (typeof window !== "undefined") {
  window.addEventListener("theme-change", () => {
    if (!latestDailyMapBrief) return;
    mountSignalMap(document.querySelector("#dailySignalMap"), dailyMapItems(latestDailyMapBrief), { maxZoom: 3 });
  });
}
