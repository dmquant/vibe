import { analystCard, deepResearchCard, viewCard } from "../cards.js";
import { barRows, esc, fmt, metric, sectionHead } from "../utils.js";

function uniqueViews(items = []) {
  const seen = new Set();
  return items.filter((item) => {
    const href = (item.href || "").replace(/\.html$/, "");
    const title = String(item.title || "").replace(/\s+/g, " ").trim().toLowerCase();
    const keys = [href && `href:${href}`, title && `title:${title}`].filter(Boolean);
    if (!keys.length) {
      keys.push(`text:${[item.date, item.analyst, item.title, item.view].map((value) => String(value || "").trim().toLowerCase()).join("|")}`);
    }
    if (keys.some((key) => seen.has(key))) return false;
    keys.forEach((key) => seen.add(key));
    return true;
  });
}

export function renderDashboard({ app, data }) {
  const stats = data.stats;
  const graphStats = data.knowledgeGraph.stats;
  const topViews = uniqueViews(data.topViews);
  const recapDashboards = data.recapDashboards || [];
  app.innerHTML = `
    <section class="hero-layout">
      <div class="panel">
        ${sectionHead("今日研究总览", "从分析师、主题、观点与报告之间的关系中提炼投资者可读结果。")}
        <div class="grid cols-4">
          ${metric("分析师", stats.analysts)}
          ${metric("中文报告", stats.reports, "var(--green)")}
          ${metric("变化信号", stats.change_radar_signals || 0, "var(--gold)")}
          ${metric("跟踪主线", stats.tracked_theses || stats.derived_theses || 0, "var(--red)")}
        </div>
        <div class="mini-stats" style="margin-top:14px">
          <button data-view="radar">打开变化雷达</button>
          <button data-view="theses">打开主线追踪</button>
          <button data-view="analyst-tracker">打开分析师动向</button>
          <button data-view="operations">打开研究工作流</button>
        </div>
      </div>
      <div class="panel">
        ${sectionHead("研究热度", "高信号主题分布")}
        ${barRows(data.themes.slice(0, 7))}
      </div>
    </section>
    <section class="grid cols-3" style="margin-top:16px">
      ${topViews.slice(0, 6).map(viewCard).join("")}
    </section>
    ${
      recapDashboards.length
        ? `<section class="panel" style="margin-top:16px">
            ${sectionHead("关键复盘仪表盘", "把重要研究线索做成可点击时间线、信号清单和机制剖面。")}
            <div class="grid cols-4">${recapDashboards
              .map(
                (item) => `<article class="card thesis-card">
                  <div class="mini-stats"><span>${esc(item.date || "未标注日期")}</span><span>${esc(item.badge || "RECAP")}</span></div>
                  <h3><a href="${esc(item.href)}">${esc(item.title)}</a></h3>
                  <p>${esc(item.subtitle || "")}</p>
                  <div class="mini-stats">${(item.metrics || [])
                    .slice(0, 2)
                    .map((metricItem) => `<span><strong>${esc(metricItem.value)}</strong> ${esc(metricItem.label)}</span>`)
                    .join("")}</div>
                </article>`,
              )
              .join("")}</div>
          </section>`
        : ""
    }
    <section class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        ${sectionHead("证据图谱", "来自通胀与 AI 深度研究的核心图表")}
        <div class="grid cols-2">
          ${data.charts.slice(0, 4).map((chart) => `<a class="chart-frame" href="${esc(chart.href)}"><img src="${esc(chart.href)}" alt="${esc(chart.label)}"><span>${esc(chart.label)}</span></a>`).join("")}
        </div>
      </div>
      <div class="panel">
        ${sectionHead("知识图谱入口", "完整关系层覆盖所有已转换报告，可从主题、分析师和报告节点下钻。")}
        <div class="grid cols-2">
          ${metric("报告节点", graphStats.reports, "var(--green)")}
          ${metric("主题标签", graphStats.tags, "var(--blue)")}
        </div>
        <button style="margin-top:14px" data-view="knowledge">打开知识图谱</button>
      </div>
    </section>`;
}

export function renderThemes({ app, data }) {
  app.innerHTML = `
    <section class="panel">
      ${sectionHead("主题地图", "按高信号报告和关键词聚合，帮助投资者定位研究重心。")}
      ${barRows(data.themes)}
    </section>
    <section class="grid cols-2" style="margin-top:16px">
      ${data.charts.map((chart) => `<article class="panel chart-frame"><h3>${esc(chart.label)}</h3><img src="${esc(chart.href)}" alt="${esc(chart.label)}"></article>`).join("")}
    </section>`;
}

export function renderViews({ app, data }) {
  const topViews = uniqueViews(data.topViews);
  app.innerHTML = `
    <section class="panel">
      ${sectionHead("最新观点", "每条观点都保留分析师、日期、标签和原始报告入口。")}
      <div class="grid cols-2">${topViews.map(viewCard).join("")}</div>
    </section>`;
}

export function renderDeepResearch({ app, data }) {
  const items = data.deepResearch || [];
  const latest = items[0];
  const latestDownloads = latest?.slug
    ? [
        ["中文 PDF", `/investor-downloads/deep-research/${latest.slug}/report_zh.pdf`],
        ["English PDF", `/investor-downloads/deep-research/${latest.slug}/report_en.pdf`],
        ["中文 DOCX", `/investor-downloads/deep-research/${latest.slug}/report_zh.docx`],
        ["English DOCX", `/investor-downloads/deep-research/${latest.slug}/report_en.docx`],
      ]
    : [];
  app.innerHTML = `
    <section class="panel">
      ${sectionHead("深度研究", `已生成 ${fmt(items.length)} 篇双语深度报告，报告页包含中英文正文、证据表、图表和下载入口。`)}
      ${
        latest
          ? `<article class="deep-latest inline">
              <div>
                <div class="eyebrow">Latest Deep Research</div>
                <h2><a href="${esc(latest.href)}">${esc(latest.title_zh || latest.title_en)}</a></h2>
                <p>${esc(latest.summary_zh || latest.summary_en)}</p>
                <div class="mini-stats">
                  <span>${esc(latest.date || "未标注日期")}</span>
                  <span>${fmt(latest.evidence_count)} 证据</span>
                  <span>${fmt(latest.risk_count)} 风险</span>
                  <span>${fmt(latest.analyst_count)} 分析师</span>
                </div>
              </div>
              <div class="deep-latest-actions">
                <a class="download-button" href="${esc(latest.href)}">阅读网页报告</a>
                ${latestDownloads.map(([label, href]) => `<a class="deep-download-link" href="${esc(href)}">${esc(label)}</a>`).join("")}
              </div>
            </article>`
          : `<div class="empty">暂无深度研究报告。先运行候选题生成和报告构建流程。</div>`
      }
      <div class="section-head compact">
        <div>
          <h2>报告库</h2>
          <p>按生成时间排列，点击标题进入可阅读 HTML 版本。</p>
        </div>
      </div>
      <div class="grid cols-2">${items.length ? items.map(deepResearchCard).join("") : ""}</div>
    </section>`;
}

export function renderAnalysts({ app, data }) {
  app.innerHTML = `
    <section class="panel">
      ${sectionHead("分析师舰队", "按已转换中文报告数量排序，同时显示近期执行与文件规模。")}
      <div class="analyst-list">${data.analysts.map(analystCard).join("")}</div>
    </section>`;
}
