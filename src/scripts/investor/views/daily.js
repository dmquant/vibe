import { esc, fmt, metric, sectionHead, tags, truncate } from "../utils.js";

function renderDailyTrend(brief) {
  const dates = brief.trend.dates || [];
  const series = brief.trend.series || [];
  const W = 760;
  const H = 320;
  const pad = 42;
  const values = series.flatMap((item) => item.values || []);
  const max = Math.max(1, ...values);
  const colors = ["#285b9d", "#237a5b", "#b43d49", "#a8731b", "#6856c6"];
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
    const dots = (item.values || []).map((value, i) => `<circle class="trend-dot" cx="${x(i)}" cy="${y(value)}" r="4" fill="${color}" style="animation-delay:${i * 45}ms"><title>${esc(item.label)} ${esc(dates[i])}: ${fmt(value)}</title></circle>`).join("");
    return `<path class="trend-line" d="${path}" stroke="${color}" style="animation-delay:${idx * 120}ms" />${dots}`;
  }).join("");
  const labels = dates.map((date, idx) => `<text class="axis-label" x="${x(idx)}" y="${H - 12}" text-anchor="middle">${esc(date.slice(5))}</text>`).join("");
  const legend = series.map((item, idx) => `<span><i class="legend-dot" style="background:${colors[idx % colors.length]}"></i>${esc(item.label)}</span>`).join("");
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
  return `<div class="chain-radar">${brief.chainRadar.slice(0, 6).map((item) => `
    <article class="chain-card">
      <div class="chain-card-head">
        <h3>${esc(item.label)}</h3>
        <span class="score-badge">${fmt(item.heat)}</span>
      </div>
      <div class="chain-meter"><span style="width:${Math.max(4, item.heat / max * 100)}%; background:${esc(item.color)}"></span></div>
      <div class="mini-stats" style="margin-top:8px">
        <span>今日 <strong>${fmt(item.latest)}</strong></span>
        <span>近七日 <strong>${fmt(item.recent)}</strong></span>
        <span>风险 <strong>${fmt(item.risk)}</strong></span>
      </div>
      <div class="chain-links">
        ${(item.evidence || []).map((report) => `<a href="${esc(report.href)}">${esc(report.title)}</a>`).join("")}
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
      ${visible.map((item, idx) => `<a class="risk-token" href="${esc(item.href)}" style="--risk-delay:${idx * 45}ms" title="${esc(item.chain)} · ${esc(item.title)}">
        <strong>${esc(truncate(item.chain, 9))}</strong>
        <span>${esc(truncate(item.title, 34))}</span>
      </a>`).join("")}
      ${cellItems.length > visible.length ? `<span class="risk-more">+${fmt(cellItems.length - visible.length)}</span>` : ""}
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
        <th>${esc(analyst.name)}</th>
        ${(analyst.values || []).map((value, idx) => {
          const alpha = .12 + (Number(value || 0) / max) * .72;
          return `<td><div class="heat-cell" style="background:rgba(40,91,157,${alpha}); animation-delay:${idx * 25}ms">${value ? fmt(value) : ""}</div></td>`;
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
  return reports.map((report) => `<tr>
    <td><a href="${esc(report.href)}">${esc(report.title)}</a><div class="mini-stats">${tags(report.tags || [])}</div></td>
    <td>${esc(report.analyst)}</td>
    <td>${esc(report.chain)}</td>
    <td><span class="score-badge">${fmt(report.score)}</span></td>
    <td>${report.risk ? `<span class="status-pill">风险 ${fmt(report.risk)}</span>` : `<span class="status-pill">常规</span>`}</td>
  </tr>`).join("");
}

function renderSynthesis(brief) {
  const synthesis = brief.synthesis || {};
  const bullets = Array.isArray(synthesis.bullets) ? synthesis.bullets : [];
  const watchItems = Array.isArray(synthesis.watchItems) ? synthesis.watchItems : [];
  if (!synthesis.headline && !synthesis.lead) return "";
  return `<section class="synthesis-card">
    <div class="eyebrow">Research Synthesis · ${synthesis.source === "skill_override" ? "Skill Override" : "Auto Draft"}</div>
    <h3>${esc(synthesis.headline || "今日研究综述")}</h3>
    <p class="synthesis-lead">${esc(synthesis.lead || "")}</p>
    <div class="synthesis-grid">
      ${bullets.map((item) => `<article class="synthesis-point">
        <strong>${esc(item.label || "要点")}</strong>
        <p>${item.href ? `<a href="${esc(item.href)}">${esc(item.text || "")}</a>` : esc(item.text || "")}</p>
      </article>`).join("")}
    </div>
    ${synthesis.marketRead ? `<div class="synthesis-read"><strong>投资解读：</strong>${esc(synthesis.marketRead)}</div>` : ""}
    ${watchItems.length ? `<div class="watch-list">
      ${watchItems.map((item) => `<a class="watch-item" href="${esc(item.href || "#daily")}">
        <strong>${esc(item.title || "")}</strong>
        <span>${esc(item.reason || "")}</span>
      </a>`).join("")}
    </div>` : ""}
  </section>`;
}

export function renderDaily(context) {
  const { app, data, state } = context;
  const brief = data.dailyBrief;
  const rows = dailyFilteredReports(context);
  const chains = [...new Set((brief.tableReports || []).map((report) => report.chain).filter(Boolean))].sort();
  app.innerHTML = `
    <section class="daily-hero">
      <div class="panel">
        <div class="daily-title">
          <div>
            <div class="eyebrow">Daily Investor Brief</div>
            <h2>每日研究简报</h2>
            <p>把当天研究结果压缩成可扫描的结论、变化、风险和证据入口。</p>
          </div>
          <div class="daily-actions">
            <div class="daily-date">${esc(brief.date)}</div>
            <a class="download-button" href="${esc(brief.docxHref || brief.docxLatestHref || "#daily")}" download>下载 DOCX</a>
          </div>
        </div>
        ${renderSynthesis(brief)}
        <div class="grid cols-4">
          ${metric("今日报告", brief.stats.reports)}
          ${metric("活跃分析师", brief.stats.analysts, "var(--green)")}
          ${metric("活跃链条", brief.stats.activeChains, "var(--gold)")}
          ${metric("风险信号", brief.stats.riskItems, "var(--red)")}
        </div>
        <div style="margin-top:16px">
          ${sectionHead("今日核心结论", "按重要性、行业链关联、风险信号和证据密度排序。")}
          <div class="highlight-list">
            ${brief.highlights.map((item, idx) => `<article class="highlight-item">
              <div class="highlight-rank">${idx + 1}</div>
              <div>
                <h3><a href="${esc(item.href)}">${esc(item.title)}</a></h3>
                <p>${esc(item.summary)}</p>
                <div class="mini-stats" style="margin-top:8px">
                  <span>${esc(item.analyst)}</span>
                  <span>${esc(item.primary_chain)}</span>
                  <span>评分 <strong>${fmt(item.score)}</strong></span>
                  <span>${esc(item.reason)}</span>
                </div>
              </div>
            </article>`).join("") || `<div class="empty">暂无可用结论。</div>`}
          </div>
        </div>
      </div>
      <aside class="panel">
        ${sectionHead("重大变化", brief.previousDate ? `对比 ${brief.previousDate}` : "暂无前一交易日对比")}
        <div class="momentum-list">
          ${brief.momentum.slice(0, 8).map((item) => `<div class="momentum-row">
            <strong>${esc(item.tag)}</strong>
            <span>${fmt(item.today)}</span>
            <span>${fmt(item.previous)}</span>
            <span class="${item.delta >= 0 ? "delta-up" : "delta-down"}">${item.delta >= 0 ? "+" : ""}${fmt(item.delta)}</span>
          </div>`).join("") || `<div class="empty">暂无变化数据。</div>`}
        </div>
        <div style="margin-top:18px">
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
      <div class="panel chart-panel">
        ${sectionHead("风险矩阵", "按发生概率与影响程度分格展示；点击单元格中的报告进入证据。")}
        ${renderRiskMatrix(brief)}
      </div>
    </section>
    <section class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        ${sectionHead("分析师活跃度", "按近七日报告数量选择前 12 位分析师。")}
        ${renderHeatmap(brief)}
      </div>
      <div class="panel">
        ${sectionHead("简报数据", "为例行同步保留机器可读出口。")}
        <div class="grid cols-2">
          ${metric("近七日报告", brief.stats.recentReports, "var(--blue)")}
          ${metric("表格证据", brief.tableReports.length, "var(--green)")}
        </div>
        <p style="color:var(--muted);line-height:1.6">本页数据已同步输出为 daily JSON，可用于后续自动发布、邮件摘要或投研工作台嵌入。</p>
      </div>
    </section>
    <section class="panel" style="margin-top:16px">
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
  document.querySelector("#dailySearch").addEventListener("input", (event) => { state.dailyQuery = event.target.value; renderDaily(context); });
  document.querySelector("#dailyChain").addEventListener("change", (event) => { state.dailyChain = event.target.value; renderDaily(context); });
}
