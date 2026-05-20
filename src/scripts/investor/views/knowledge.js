import { filteredReports } from "./reports.js";
import { esc, fmt, sectionHead, tags, truncate } from "../utils.js";

function graphFilteredReports(context) {
  return filteredReports(context);
}

function renderKnowledgeGraphSvg(reports) {
  const shownReports = reports.slice(0, 90);
  const W = 920;
  const H = 560;
  const cx = W / 2;
  const cy = H / 2;
  const tagCounts = new Map();
  const analystCounts = new Map();
  shownReports.forEach((report) => {
    (report.tags || []).forEach((tag) => tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1));
    analystCounts.set(report.analyst_id, { label: report.analyst, count: ((analystCounts.get(report.analyst_id) || {}).count || 0) + 1 });
  });
  const topTags = [...tagCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10).map(([label, count]) => ({ id: `tag:${label}`, label, count, type: "tag" }));
  const topAnalysts = [...analystCounts.entries()].filter(([id]) => id).sort((a, b) => b[1].count - a[1].count).slice(0, 10).map(([id, item]) => ({ id: `analyst:${id}`, label: item.label, count: item.count, analyst_id: id, type: "analyst" }));
  const hubs = [...topTags, ...topAnalysts];
  const hubPos = new Map();
  const reportPos = new Map();
  hubs.forEach((hub, idx) => {
    const angle = (Math.PI * 2 * idx) / Math.max(1, hubs.length) - Math.PI / 2;
    hubPos.set(hub.id, { x: cx + Math.cos(angle) * 150, y: cy + Math.sin(angle) * 150 });
  });
  shownReports.forEach((report, idx) => {
    const angle = (Math.PI * 2 * idx) / Math.max(1, shownReports.length) - Math.PI / 2;
    const ring = 235 + (idx % 3) * 18;
    reportPos.set(report.id, { x: cx + Math.cos(angle) * ring, y: cy + Math.sin(angle) * ring });
  });
  const lines = [];
  hubs.forEach((hub) => {
    const pos = hubPos.get(hub.id);
    lines.push(`<line class="graph-edge" x1="${cx}" y1="${cy}" x2="${pos.x}" y2="${pos.y}" />`);
  });
  shownReports.forEach((report) => {
    const rp = reportPos.get(report.id);
    const analystHub = topAnalysts.find((hub) => hub.analyst_id === report.analyst_id);
    if (analystHub && hubPos.has(analystHub.id)) {
      const hp = hubPos.get(analystHub.id);
      lines.push(`<line class="graph-edge" x1="${hp.x}" y1="${hp.y}" x2="${rp.x}" y2="${rp.y}" />`);
    }
    (report.tags || []).forEach((tag) => {
      const hubId = `tag:${tag}`;
      if (hubPos.has(hubId)) {
        const hp = hubPos.get(hubId);
        lines.push(`<line class="graph-edge" x1="${hp.x}" y1="${hp.y}" x2="${rp.x}" y2="${rp.y}" />`);
      }
    });
  });
  const hubNodes = hubs.map((hub) => {
    const pos = hubPos.get(hub.id);
    const color = hub.type === "tag" ? "var(--blue)" : "var(--green)";
    const attrs = hub.type === "tag" ? `data-tag="${esc(hub.label)}"` : `data-analyst="${esc(hub.analyst_id)}"`;
    return `<g class="graph-node ${hub.type}" ${attrs} transform="translate(${pos.x},${pos.y})">
      <circle r="${12 + Math.min(12, hub.count)}" fill="${color}" />
      <text y="-20" text-anchor="middle">${esc(truncate(hub.label, 14))}</text>
    </g>`;
  }).join("");
  const reportNodes = shownReports.map((report, idx) => {
    const pos = reportPos.get(report.id);
    const r = 5 + Math.min(5, (report.tags || []).length);
    return `<a href="${esc(report.href)}"><g class="graph-node report" transform="translate(${pos.x},${pos.y})">
      <circle r="${r}" fill="${idx % 2 ? "var(--gold)" : "var(--red)"}" />
      <text y="${r + 14}" text-anchor="middle">${esc(truncate(report.title, 12))}</text>
    </g></a>`;
  }).join("");
  return `<svg class="graph-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="AI Institute 知识图谱">
    <g>${lines.join("")}</g>
    <g class="graph-node root" transform="translate(${cx},${cy})"><circle r="28" fill="var(--slate)" /><text y="4" text-anchor="middle" fill="#fff">研究院</text></g>
    ${hubNodes}
    ${reportNodes}
  </svg>`;
}

export function renderKnowledge(context) {
  const { app, data, state } = context;
  const tagOptions = [...new Set(data.reports.flatMap((report) => report.tags || []))].sort();
  const analystOptions = data.analysts.filter((a) => a.reports > 0).sort((a, b) => b.reports - a.reports);
  const reports = graphFilteredReports(context);
  const graphStats = data.knowledgeGraph.stats;
  app.innerHTML = `
    <section class="panel">
      ${sectionHead("知识图谱", `完整图谱包含 ${fmt(graphStats.nodes)} 个节点、${fmt(graphStats.edges)} 条关系边，覆盖 ${fmt(graphStats.reports)} 篇报告。当前视图显示前 ${fmt(Math.min(90, reports.length))} 个报告节点。`)}
      <div class="graph-toolbar">
        <input id="graphSearch" type="search" placeholder="搜索主题、分析师、报告..." value="${esc(state.query)}">
        <select id="graphTag"><option value="">全部主题</option>${tagOptions.map((tag) => `<option value="${esc(tag)}" ${state.tag === tag ? "selected" : ""}>${esc(tag)}</option>`).join("")}</select>
        <select id="graphAnalyst"><option value="">全部分析师</option>${analystOptions.map((a) => `<option value="${esc(a.id)}" ${state.analyst === a.id ? "selected" : ""}>${esc(a.name)} (${fmt(a.reports)})</option>`).join("")}</select>
      </div>
      <div class="graph-layout">
        <div>
          <div class="graph-legend">
            <span><i class="legend-dot" style="background:var(--slate)"></i>研究院</span>
            <span><i class="legend-dot" style="background:var(--blue)"></i>主题</span>
            <span><i class="legend-dot" style="background:var(--green)"></i>分析师</span>
            <span><i class="legend-dot" style="background:var(--red)"></i>报告</span>
          </div>
          <div class="graph-stage">${reports.length ? renderKnowledgeGraphSvg(reports) : `<div class="empty">没有匹配的图谱节点。</div>`}</div>
        </div>
        <aside class="graph-side">
          ${sectionHead("关联报告", `匹配 ${fmt(reports.length)} 篇，点击标题打开报告结果。`)}
          <div class="graph-report-list">
            ${reports.slice(0, 140).map((report) => `<article class="graph-report">
              <div class="mini-stats"><span>${esc(report.date || "未标注日期")}</span><span>${esc(report.analyst)}</span></div>
              <h3><a href="${esc(report.href)}">${esc(report.title)}</a></h3>
              <p>${esc(report.excerpt)}</p>
              ${tags(report.tags)}
            </article>`).join("") || `<div class="empty">没有匹配的报告。</div>`}
          </div>
        </aside>
      </div>
    </section>`;
  document.querySelector("#graphSearch").addEventListener("input", (event) => { state.query = event.target.value; renderKnowledge(context); });
  document.querySelector("#graphTag").addEventListener("change", (event) => { state.tag = event.target.value; renderKnowledge(context); });
  document.querySelector("#graphAnalyst").addEventListener("change", (event) => { state.analyst = event.target.value; renderKnowledge(context); });
  document.querySelectorAll(".graph-node.tag[data-tag]").forEach((node) => node.addEventListener("click", () => { state.tag = node.dataset.tag; renderKnowledge(context); }));
  document.querySelectorAll(".graph-node.analyst[data-analyst]").forEach((node) => node.addEventListener("click", () => { state.analyst = node.dataset.analyst; renderKnowledge(context); }));
}
