import { esc, fmt, tags } from "./utils.js";

function linkedCard(href, className, innerHtml, label) {
  const safeClass = esc(className);
  if (!href) {
    return `<article class="${safeClass}">${innerHtml}</article>`;
  }
  return `<a class="${safeClass} card-link" href="${esc(href)}" aria-label="${esc(label || "打开研究报告")}">${innerHtml}</a>`;
}

export function viewCard(item) {
  const title = item.title || "未命名观点";
  return linkedCard(item.href, "card thesis-card", `
    <div class="mini-stats"><span>${esc(item.date || "未标注日期")}</span><span>${esc(item.analyst || "")}</span></div>
    <h3>${esc(title)}</h3>
    <p>${esc(item.view)}</p>
    ${tags(item.tags)}
  `, title);
}

export function reportCard(report) {
  const title = report.title || "未命名报告";
  return linkedCard(report.href, "card report-card", `
    <div>
      <h3>${esc(title)}</h3>
      <p>${esc(report.excerpt)}</p>
      ${tags(report.tags)}
    </div>
    <div class="report-meta">
      <span>${esc(report.date || "未标注日期")}</span>
      <span>${esc(report.analyst)}</span>
      <span>${esc(report.category)}</span>
    </div>
  `, title);
}

export function analystCard(analyst) {
  const avatar = analyst.avatar
    ? `<img class="avatar" src="${esc(analyst.avatar)}" alt="${esc(analyst.name)}">`
    : `<div class="avatar fallback" style="background:${esc(analyst.color)}">${esc((analyst.name || "?").slice(0, 1))}</div>`;
  return `<article class="card analyst-card">
    ${avatar}
    <div>
      <h3>${esc(analyst.name)} <span class="tag">${esc(analyst.agent)}</span></h3>
      <p>${esc(analyst.specialty)}</p>
      <div class="mini-stats">
        <span><strong>${fmt(analyst.reports)}</strong> 报告</span>
        <span><strong>${fmt(analyst.executions)}</strong> 执行</span>
        <span><strong>${fmt(analyst.files)}</strong> 文件</span>
        <span>${esc(analyst.category)}</span>
      </div>
    </div>
  </article>`;
}

export function deepResearchCard(item) {
  const title = item.title_zh || item.title_en || "未命名深度研究";
  return linkedCard(item.href, "card thesis-card", `
    <div class="mini-stats"><span>${esc(item.date || "未标注日期")}</span><span>${esc(item.topic_id || "")}</span><span>${fmt(item.evidence_count)} 证据</span><span>${fmt(item.risk_count)} 风险</span></div>
    <h3>${esc(title)}</h3>
    <p>${esc(item.summary_zh || item.summary_en)}</p>
    ${tags(item.chains || [])}
  `, title);
}
