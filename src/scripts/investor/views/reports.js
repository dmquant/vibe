import { reportCard } from "../cards.js";
import { esc, fmt, sectionHead } from "../utils.js";

export function filteredReports({ data, state }) {
  const q = state.query.trim().toLowerCase();
  return data.reports.filter((report) => {
    const text = `${report.title} ${report.excerpt} ${report.analyst} ${report.category} ${(report.tags || []).join(" ")}`.toLowerCase();
    if (q && !text.includes(q)) return false;
    if (state.tag && !(report.tags || []).includes(state.tag)) return false;
    if (state.analyst && report.analyst_id !== state.analyst) return false;
    return true;
  });
}

export function renderReports(context) {
  const { app, data, state } = context;
  const tagOptions = [...new Set(data.reports.flatMap((report) => report.tags || []))].sort();
  const analystOptions = data.analysts.filter((a) => a.reports > 0).sort((a, b) => b.reports - a.reports);
  const reports = filteredReports(context).slice(0, 120);
  app.innerHTML = `
    <section class="panel">
      ${sectionHead("研究报告库", `已转换 ${fmt(data.reports.length)} 篇中文报告，当前显示 ${fmt(reports.length)} 篇。`)}
      <div class="toolbar">
        <input id="reportSearch" type="search" placeholder="搜索报告标题、摘要、标签..." value="${esc(state.query)}">
        <select id="tagFilter"><option value="">全部标签</option>${tagOptions.map((tag) => `<option value="${esc(tag)}" ${state.tag === tag ? "selected" : ""}>${esc(tag)}</option>`).join("")}</select>
        <select id="analystFilter"><option value="">全部分析师</option>${analystOptions.map((a) => `<option value="${esc(a.id)}" ${state.analyst === a.id ? "selected" : ""}>${esc(a.name)} (${fmt(a.reports)})</option>`).join("")}</select>
      </div>
      <div class="report-list">${reports.length ? reports.map(reportCard).join("") : `<div class="empty">没有匹配的报告。</div>`}</div>
    </section>`;
  document.querySelector("#reportSearch").addEventListener("input", (event) => { state.query = event.target.value; renderReports(context); });
  document.querySelector("#tagFilter").addEventListener("change", (event) => { state.tag = event.target.value; renderReports(context); });
  document.querySelector("#analystFilter").addEventListener("change", (event) => { state.analyst = event.target.value; renderReports(context); });
}
