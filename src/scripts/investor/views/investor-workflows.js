import { directionLabel } from "../research-os.js";
import { esc, fmt, metric, sectionHead, tags } from "../utils.js";

const directionOptions = [
  ["", "全部方向"],
  ["strengthening", "强化"],
  ["stable", "稳定"],
  ["conflicting", "分歧"],
  ["weakening", "走弱"],
];

const stanceOptions = [
  ["", "全部口径"],
  ["cautious", "偏谨慎"],
  ["balanced", "均衡"],
  ["positive", "偏积极"],
];

function linkedTitle(item) {
  const title = esc(item.title || "");
  return item.href ? `<a href="${esc(item.href)}">${title}</a>` : title;
}

function compactSignalItem(item) {
  const meta = [
    item.date,
    item.analyst,
    item.chain,
    item.direction ? directionLabel(item.direction) : "",
    item.conviction ? `信念 ${fmt(item.conviction)}` : "",
  ].filter(Boolean);
  return `<article class="signal-item">
    <div class="mini-stats">${meta.map((value) => `<span>${esc(value)}</span>`).join("")}</div>
    <h3>${linkedTitle(item)}</h3>
    ${item.summary ? `<p>${esc(item.summary)}</p>` : ""}
    ${(item.tags || []).length ? tags(item.tags) : ""}
  </article>`;
}

function analystAvatar(item) {
  return item.avatar
    ? `<img class="avatar focus-avatar" src="${esc(item.avatar)}" alt="${esc(item.name || item.analyst || "")}">`
    : `<div class="avatar fallback focus-avatar" style="background:${esc(item.color || "var(--slate)")};">${esc((item.name || item.analyst || "?").slice(0, 1))}</div>`;
}

function miniBars(items = []) {
  const max = Math.max(1, ...items.map((item) => Number(item.value || 0)));
  return `<div class="mini-bar-list">${items.map((item, idx) => `
    <div class="mini-bar-row">
      <span>${esc(item.label)}</span>
      <i><b style="width:${Math.max(4, Number(item.value || 0) / max * 100)}%; background:${idx % 3 === 1 ? "var(--green)" : idx % 3 === 2 ? "var(--gold)" : "var(--blue)"}"></b></i>
      <strong>${fmt(item.value)}</strong>
    </div>`).join("") || `<div class="empty slim">暂无分布。</div>`}</div>`;
}

function stanceBadge(stance = {}) {
  return `<span class="stance-badge ${esc(stance.tone || "balanced")}">${esc(stance.label || "均衡")}</span>`;
}

function reportPills(items = [], limit = 3) {
  return `<div class="report-pill-list">${items.slice(0, limit).map((item) => `<a href="${esc(item.href)}">${esc(item.title || item.href || "")}</a>`).join("") || `<span class="muted-text">暂无报告链接</span>`}</div>`;
}

function analystChangeCard(item) {
  return `<article class="analyst-change-card">
    <div class="analyst-change-head">
      ${analystAvatar({ ...item, name: item.analyst })}
      <div>
        <div class="mini-stats"><span>${esc(item.category || "")}</span><span>新增证据 ${fmt(item.evidenceAdded || 0)}</span></div>
        <h3>${esc(item.analyst || item.analystId || "")}</h3>
        ${stanceBadge({ label: item.stance, tone: item.stance?.includes("积极") ? "positive" : item.stance?.includes("谨慎") ? "cautious" : "balanced" })}
      </div>
    </div>
    <p>${esc(item.changeZh || item.changeEn || "")}</p>
    ${reportPills(item.linkedReports || [], 4)}
  </article>`;
}

function analystFocusCard(item) {
  const change = item.change;
  return `<article class="panel analyst-focus-card">
    <div class="analyst-focus-head">
      ${analystAvatar(item)}
      <div>
        <div class="mini-stats"><span>${esc(item.category || "")}</span><span>${esc(item.latestDate || "未标注")}</span></div>
        <h3>${esc(item.name || item.id || "")}</h3>
        <p>${esc(item.specialty || item.nameEn || "近期研究结果已纳入观点追踪。")}</p>
      </div>
      ${stanceBadge(item.stance)}
    </div>
    <div class="analyst-metric-strip">
      <span><strong>${fmt(item.reportsToday)}</strong> 今日报告</span>
      <span><strong>${fmt(item.recentReports)}</strong> 近七日</span>
      <span><strong>${fmt(item.reportCount)}</strong> 累计报告</span>
      <span><strong>${fmt(item.stance?.cautious || 0)}</strong> 谨慎词</span>
    </div>
    ${change ? `<div class="analyst-change-note"><strong>今日变化</strong><p>${esc(change.changeZh || "")}</p>${reportPills(change.linkedReports || [], 3)}</div>` : ""}
    <div class="analyst-focus-grid">
      <div>
        <h4>主题分布</h4>
        ${miniBars(item.themeCounts || [])}
      </div>
      <div>
        <h4>链条分布</h4>
        ${miniBars(item.chainCounts || [])}
      </div>
    </div>
    <div class="analyst-view-stack">
      <h4>近期观点</h4>
      ${(item.recentViews || []).slice(0, 3).map((view) => `<a class="analyst-view-item" href="${esc(view.href || "#analyst-tracker")}">
        <span>${esc(view.date || "")}</span>
        <strong>${esc(view.title || "")}</strong>
        <p>${esc(view.summary || "")}</p>
      </a>`).join("") || `<div class="empty slim">暂无近期观点。</div>`}
    </div>
    <div class="analyst-view-stack">
      <h4>源报告</h4>
      ${reportPills(item.latestReports || [], 4)}
    </div>
  </article>`;
}

function filteredAnalysts(tracker, state) {
  const q = (state.analystTrackerQuery || "").trim().toLowerCase();
  return (tracker.analysts || []).filter((item) => {
    const text = [
      item.name,
      item.nameEn,
      item.category,
      item.specialty,
      item.stance?.label,
      ...(item.themeCounts || []).map((entry) => entry.label),
      ...(item.chainCounts || []).map((entry) => entry.label),
      ...(item.recentViews || []).map((entry) => `${entry.title} ${entry.summary}`),
    ].join(" ").toLowerCase();
    if (q && !text.includes(q)) return false;
    if (state.analystTrackerStance && item.stance?.tone !== state.analystTrackerStance) return false;
    return true;
  });
}

export function renderAnalystTracker(context) {
  const { app, data, state } = context;
  const tracker = data.analystTracker || {};
  const visibleAnalysts = filteredAnalysts(tracker, state);
  const visibleIds = new Set(visibleAnalysts.map((item) => item.id));
  const changes = (tracker.changes || []).filter((item) => !visibleIds.size || visibleIds.has(item.analystId));
  app.innerHTML = `
    <section class="panel">
      <div class="daily-title">
        <div>
          <div class="eyebrow">Analyst View Tracker · ${esc(tracker.date || "")}</div>
          <h2>分析师动向</h2>
          <p>把每位分析师的最新报告、观点口径、主题集中度和可追溯源报告放到同一页，便于投资者查看观点如何变化。</p>
        </div>
        <div class="daily-date">${esc(tracker.date || "latest")}</div>
      </div>
      <div class="grid cols-4">
        ${metric("跟踪分析师", tracker.stats?.trackedAnalysts || 0)}
        ${metric("今日活跃", tracker.stats?.activeToday || 0, "var(--green)")}
        ${metric("今日报告", tracker.stats?.reportsToday || 0, "var(--gold)")}
        ${metric("观点变化", tracker.stats?.viewChanges || 0, "var(--red)")}
      </div>
      <div class="source-note">
        <strong>源数据：</strong>${esc(tracker.coverage?.source || "AI Institute report archive")}
        <span>近七日报告 ${fmt(tracker.stats?.recentReports || 0)}</span>
        <span>偏谨慎 ${fmt(tracker.stats?.cautious || 0)}</span>
        <span>偏积极 ${fmt(tracker.stats?.positive || 0)}</span>
      </div>
    </section>
    <section class="analyst-tracker-layout" style="margin-top:16px">
      <div class="panel">
        ${sectionHead("今日观点变化", "每条变化都链接到可阅读的源报告。")}
        <div class="analyst-change-grid">
          ${changes.slice(0, 12).map(analystChangeCard).join("") || `<div class="empty">暂无今日观点变化。</div>`}
        </div>
      </div>
      <aside class="panel">
        ${sectionHead("筛选分析师", `当前显示 ${fmt(visibleAnalysts.length)} 位。`)}
        <div class="tracker-toolbar">
          <input id="analystTrackerSearch" type="search" placeholder="搜索分析师、主题、链条、观点..." value="${esc(state.analystTrackerQuery || "")}">
          <select id="analystTrackerStance">${stanceOptions.map(([value, label]) => `<option value="${esc(value)}" ${state.analystTrackerStance === value ? "selected" : ""}>${esc(label)}</option>`).join("")}</select>
        </div>
        <div class="source-ledger">
          <span><strong>${fmt(tracker.stats?.trackedAnalysts || 0)}</strong> 跟踪对象</span>
          <span><strong>${fmt(changes.length)}</strong> 可见变化</span>
          <span><strong>${fmt(tracker.stats?.reportsToday || 0)}</strong> 今日源报告</span>
          <span>${esc((tracker.coverage?.recentDates || []).slice(-1)[0] || "")} 至 ${esc((tracker.coverage?.recentDates || [])[0] || tracker.date || "")}</span>
        </div>
      </aside>
    </section>
    <section class="analyst-focus-list" style="margin-top:16px">
      ${visibleAnalysts.map(analystFocusCard).join("") || `<div class="panel empty">暂无符合条件的分析师。</div>`}
    </section>`;
  document.querySelector("#analystTrackerSearch")?.addEventListener("input", (event) => {
    state.analystTrackerQuery = event.target.value;
    renderAnalystTracker(context);
  });
  document.querySelector("#analystTrackerStance")?.addEventListener("change", (event) => {
    state.analystTrackerStance = event.target.value;
    renderAnalystTracker(context);
  });
}

function renderSignalRadar(points = []) {
  const width = 560;
  const height = 360;
  const left = 58;
  const right = 36;
  const top = 34;
  const bottom = 52;
  const plotW = width - left - right;
  const plotH = height - top - bottom;
  const x = (value) => left + (Number(value || 0) / 100) * plotW;
  const y = (value) => top + plotH - (Number(value || 0) / 100) * plotH;
  const grid = [0, 25, 50, 75, 100].map((value) => `
    <line class="axis-line" x1="${left}" y1="${y(value)}" x2="${width - right}" y2="${y(value)}" />
    <line class="axis-line" x1="${x(value)}" y1="${top}" x2="${x(value)}" y2="${height - bottom}" />
    <text class="axis-label" x="${left - 10}" y="${y(value) + 4}" text-anchor="end">${value}</text>
  `).join("");
  const circles = points.map((point, idx) => `
    <g class="radar-point" style="animation-delay:${idx * 55}ms">
      <circle cx="${x(point.x)}" cy="${y(point.y)}" r="${Number(point.size || 22) / 2}" fill="${esc(point.tone || "#285b9d")}" opacity=".78">
        <title>${esc(point.label)} · 热度 ${fmt(point.heat)} · 风险 ${fmt(point.risk)}</title>
      </circle>
      <text x="${x(point.x)}" y="${y(point.y) - Number(point.size || 22) / 2 - 7}" text-anchor="middle">${esc(point.label)}</text>
    </g>`).join("");
  return `<div class="radar-wrap">
    <svg class="radar-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="变化雷达：横轴为证据动量，纵轴为风险压力">
      ${grid}
      <line class="axis-line major" x1="${left}" y1="${height - bottom}" x2="${width - right}" y2="${height - bottom}" />
      <line class="axis-line major" x1="${left}" y1="${top}" x2="${left}" y2="${height - bottom}" />
      <text class="axis-title" x="${left + plotW / 2}" y="${height - 14}" text-anchor="middle">证据动量</text>
      <text class="axis-title" x="18" y="${top + plotH / 2}" text-anchor="middle" transform="rotate(-90 18 ${top + plotH / 2})">风险压力</text>
      ${circles}
    </svg>
  </div>`;
}

function renderLane(lane) {
  return `<article class="signal-lane" style="border-top-color:${esc(lane.tone || "var(--blue)")}">
    <div class="signal-lane-head">
      <div>
        <div class="eyebrow">Signal Lane</div>
        <h3>${esc(lane.label)}</h3>
      </div>
      <span class="score-badge">${fmt(lane.count)}</span>
    </div>
    <div class="signal-list">${(lane.items || []).map(compactSignalItem).join("") || `<div class="empty">暂无信号。</div>`}</div>
  </article>`;
}

export function renderChangeRadar({ app, data }) {
  const radar = data.changeRadar || {};
  const source = radar.sourceSnapshot || {};
  app.innerHTML = `
    <section class="radar-hero">
      <div class="panel">
        <div class="daily-title">
          <div>
            <div class="eyebrow">Daily Change Radar · ${esc(radar.date || "")}</div>
            <h2>变化雷达</h2>
            <p>${esc(radar.headline || "把今日新增证据、主线变化、风险升温和必读报告压缩成一个信号面板。")}</p>
          </div>
          <div class="daily-date">${esc(radar.date || "latest")}</div>
        </div>
        <p class="synthesis-lead">${esc(radar.summary || "")}</p>
        <div class="grid cols-4" style="margin-top:16px">
          ${metric("源报告总数", source.archiveReports || 0)}
          ${metric("近七日报告", source.recentReports || 0, "var(--green)")}
          ${metric("最新日期报告", source.latestReports || 0, "var(--gold)")}
          ${metric("识别分析师", source.recognizedAnalysts || 0, "var(--red)")}
        </div>
        <div class="source-note">
          <strong>源数据窗口：</strong>${esc(source.coverageWindow || source.latestDate || "未标注")}
          <span>新增证据 ${fmt(radar.stats?.newEvidence || 0)}</span>
          <span>主线变化 ${fmt(radar.stats?.thesisShifts || 0)}</span>
          <span>风险升温 ${fmt(radar.stats?.risingRisks || 0)}</span>
        </div>
      </div>
      <div class="panel">
        ${sectionHead("信号定位", "横轴看证据动量，纵轴看风险压力，气泡大小表示热度。")}
        ${renderSignalRadar(radar.chainSignals || [])}
      </div>
    </section>
    <section class="grid cols-3" style="margin-top:16px">
      ${(radar.lanes || []).map(renderLane).join("")}
    </section>
    <section class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        ${sectionHead("源报告样本", "直接来自 AI Institute 报告档案，按近期性、链条相关度和风险信号排序。")}
        <div class="signal-list">
          ${(radar.sourceReports || []).slice(0, 8).map(compactSignalItem).join("") || `<div class="empty">暂无源报告样本。</div>`}
        </div>
      </div>
      <div class="panel">
        ${sectionHead("分析师活跃", "按近七日真实报告数量排序，并保留代表性报告入口。")}
        <div class="signal-list">
          ${(radar.analystActivity || []).map((item) => `<article class="signal-item">
            <div class="mini-stats"><span>${esc(item.category || "")}</span><span>报告 ${fmt(item.reports)}</span><span>${esc(item.latestDate || "")}</span></div>
            <h3>${esc(item.name || item.id || "")}</h3>
            ${item.topReport?.title ? `<p><a href="${esc(item.topReport.href)}">${esc(item.topReport.title)}</a></p>` : ""}
          </article>`).join("") || `<div class="empty">暂无可识别分析师活动。</div>`}
        </div>
      </div>
    </section>
    <section class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        ${sectionHead("风险警报", "优先阅读影响和概率同时较高的风险证据。")}
        <div class="signal-list">
          ${(radar.riskAlerts || []).map((item) => `<article class="risk-alert">
            <div class="mini-stats"><span>${esc(item.chain)}</span><span>影响 ${fmt(item.impact)}</span><span>概率 ${fmt(item.probability)}</span><span>${esc(item.trend)}</span></div>
            <h3>${linkedTitle(item)}</h3>
            <p>${esc(item.summary || "")}</p>
          </article>`).join("") || `<div class="empty">暂无风险警报。</div>`}
        </div>
      </div>
      <div class="panel">
        ${sectionHead("必读与分析师信号", "先看可追溯报告，再看分析师口径变化。")}
        <div class="read-stack">
          ${(radar.mustRead || []).slice(0, 5).map((item) => `<a class="read-item" href="${esc(item.href || "#radar")}">
            <strong>${esc(item.title || "")}</strong>
            <span>${esc([item.analyst, item.reason].filter(Boolean).join(" · "))}</span>
          </a>`).join("") || `<div class="empty">暂无必读报告。</div>`}
        </div>
        <div class="signal-list" style="margin-top:14px">
          ${(radar.analystSignals || []).slice(0, 5).map((item) => `<article class="signal-item">
            <div class="mini-stats"><span>${esc(item.date || "")}</span><span>${esc(item.stance || "")}</span></div>
            <h3>${item.href ? `<a href="${esc(item.href)}">${esc(item.analyst || "")}</a>` : esc(item.analyst || "")}</h3>
            <p>${esc(item.change || "")}</p>
          </article>`).join("")}
        </div>
      </div>
    </section>
    <section class="panel" style="margin-top:16px">
      ${sectionHead("开放问题", "用于下一轮研究、投委会讨论或深度报告选题。")}
      <ul class="question-list">${(radar.openQuestions || []).slice(0, 10).map((item) => `<li>${esc(item)}</li>`).join("") || `<li>暂无开放问题。</li>`}</ul>
    </section>`;
}

function thesisRows(items) {
  return items.map((item) => `<tr>
    <td><strong>${esc(item.title)}</strong><div class="mini-stats"><span>${esc(item.lastUpdated || "")}</span><span class="direction-pill ${esc(item.direction)}">${directionLabel(item.direction)}</span></div></td>
    <td><span class="status-pill">${esc(item.status)}</span></td>
    <td><span class="score-badge">${fmt(item.conviction)}</span></td>
    <td>${fmt(item.evidenceQuality)}</td>
    <td>${fmt(item.riskPressure)}</td>
    <td>${fmt(item.supportBalance)}</td>
  </tr>`).join("");
}

function thesisCard(item) {
  return `<article class="panel tracker-card">
    <div class="tracker-card-head">
      <div>
        <div class="mini-stats"><span class="direction-pill ${esc(item.direction)}">${directionLabel(item.direction)}</span><span>${esc(item.status)}</span><span>${esc(item.lastUpdated || "")}</span></div>
        <h3>${esc(item.title)}</h3>
      </div>
      <div class="tracker-score"><strong>${fmt(item.conviction)}</strong><span>信念</span></div>
    </div>
    <p>${esc(item.coreView || "")}</p>
    <div class="tracker-meters">
      <div><span>证据质量</span><div class="conviction-meter"><i style="width:${Math.max(4, Math.min(100, Number(item.evidenceQuality || 0)))}%; background:var(--green)"></i></div></div>
      <div><span>风险压力</span><div class="conviction-meter"><i style="width:${Math.max(4, Math.min(100, Number(item.riskPressure || 0)))}%; background:var(--red)"></i></div></div>
    </div>
    <div class="thesis-score">
      <div class="score-chip"><strong>${fmt(item.score?.for)}</strong><span>支持证据</span></div>
      <div class="score-chip"><strong>${fmt(item.score?.against)}</strong><span>反向证据</span></div>
      <div class="score-chip"><strong>${fmt(item.score?.analysts)}</strong><span>分析师</span></div>
      <div class="score-chip"><strong>${fmt(item.score?.recent)}</strong><span>新增证据</span></div>
      <div class="score-chip"><strong>${fmt(item.score?.risks)}</strong><span>风险</span></div>
    </div>
    <div class="tracker-detail">
      <div>
        <h4>支持证据</h4>
        <div class="signal-list">${(item.evidenceFor || []).map(compactSignalItem).join("") || `<div class="empty">暂无支持证据。</div>`}</div>
        <h4>反向证据</h4>
        <div class="signal-list">${(item.evidenceAgainst || []).map(compactSignalItem).join("") || `<div class="empty">暂无反向证据。</div>`}</div>
      </div>
      <aside>
        <h4>源报告账本</h4>
        <div class="source-ledger">
          <span><strong>${fmt(item.sourceLedger?.evidence)}</strong> 条证据</span>
          <span><strong>${fmt(item.sourceLedger?.reports)}</strong> 个报告链接</span>
          <span><strong>${fmt(item.sourceLedger?.analysts)}</strong> 位分析师</span>
          <span>最新 ${esc(item.sourceLedger?.latestDate || "未标注")}</span>
        </div>
        <div class="signal-list" style="margin-top:10px">${(item.sourceLedger?.topReports || []).map(compactSignalItem).join("") || `<div class="empty">暂无源报告。</div>`}</div>
        <h4>风险与证伪</h4>
        <div class="signal-list">${(item.risks || []).map(compactSignalItem).join("") || `<div class="empty">暂无关联风险。</div>`}</div>
        ${(item.falsifiers || []).length ? `<h4>证伪指标</h4><ul class="question-list">${item.falsifiers.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>` : ""}
        ${(item.monitors || []).length ? `<h4>跟踪指标</h4>${tags(item.monitors)}` : ""}
        ${(item.linkedReports || []).length ? `<h4>深度报告</h4><div class="read-stack">${item.linkedReports.map((ref) => `<a class="read-item" href="${esc(ref.href)}"><strong>${esc(ref.label)}</strong><span>${esc(ref.id)}</span></a>`).join("")}</div>` : ""}
      </aside>
    </div>
  </article>`;
}

function filteredTheses(data, state) {
  const tracker = data.thesisTracker || {};
  const q = (state.thesisQuery || "").trim().toLowerCase();
  return (tracker.theses || []).filter((item) => {
    const text = `${item.title} ${item.coreView} ${item.status} ${item.direction} ${(item.monitors || []).join(" ")}`.toLowerCase();
    if (q && !text.includes(q)) return false;
    if (state.thesisDirection && item.direction !== state.thesisDirection) return false;
    return true;
  });
}

export function renderThesisTracker(context) {
  const { app, data, state } = context;
  const tracker = data.thesisTracker || {};
  const rows = filteredTheses(data, state);
  app.innerHTML = `
    <section class="panel">
      <div class="daily-title">
        <div>
          <div class="eyebrow">Living Thesis Tracker</div>
          <h2>投资主线追踪器</h2>
          <p>把研究结论升级为可持续跟踪的投资假设：信念、证据质量、风险压力、证伪指标和报告入口都在同一页。</p>
        </div>
        <div class="daily-date">${fmt(tracker.stats?.total || 0)} 条主线</div>
      </div>
      <div class="grid cols-4">
        ${metric("跟踪主线", tracker.stats?.total || 0)}
        ${metric("源证据", tracker.stats?.sourceEvidence || 0, "var(--green)")}
        ${metric("真实报告链接", tracker.stats?.sourceReports || 0, "var(--gold)")}
        ${metric("风险承压", tracker.stats?.riskPressure || 0, "var(--red)")}
      </div>
    </section>
    <section class="tracker-layout" style="margin-top:16px">
      <div class="panel">
        ${sectionHead("主线筛选", `当前显示 ${fmt(rows.length)} 条。`)}
        <div class="tracker-toolbar">
          <input id="thesisSearch" type="search" placeholder="搜索主线、证据、风险、指标..." value="${esc(state.thesisQuery || "")}">
          <select id="thesisDirection">${directionOptions.map(([value, label]) => `<option value="${esc(value)}" ${state.thesisDirection === value ? "selected" : ""}>${esc(label)}</option>`).join("")}</select>
        </div>
        <div class="data-table-wrap">
          <table class="data-table thesis-table">
            <thead><tr><th>主线</th><th>状态</th><th>信念</th><th>证据</th><th>风险</th><th>净支持</th></tr></thead>
            <tbody>${thesisRows(rows)}</tbody>
          </table>
        </div>
      </div>
      <aside class="panel">
        ${sectionHead("投委会问题", "把低信念、分歧和高风险主线转化为下一步研究任务。")}
        <ul class="question-list">${(tracker.committeeQuestions || []).slice(0, 8).map((item) => `<li>${esc(item)}</li>`).join("") || `<li>暂无投委会问题。</li>`}</ul>
      </aside>
    </section>
    <section class="thesis-list" style="margin-top:16px">
      ${rows.map(thesisCard).join("") || `<div class="panel empty">暂无符合条件的投资主线。</div>`}
    </section>`;
  document.querySelector("#thesisSearch")?.addEventListener("input", (event) => {
    state.thesisQuery = event.target.value;
    renderThesisTracker(context);
  });
  document.querySelector("#thesisDirection")?.addEventListener("change", (event) => {
    state.thesisDirection = event.target.value;
    renderThesisTracker(context);
  });
}
