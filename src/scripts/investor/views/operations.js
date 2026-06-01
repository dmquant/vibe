import { esc, fmt, metric, sectionHead, tags } from "../utils.js";

const statusOptions = [
  ["", "全部状态"],
  ["running", "运行中"],
  ["completed", "已完成"],
  ["failed", "异常"],
];

function link(href, fallback = "#reports") {
  return esc(href || fallback);
}

function normalizeText(value) {
  return String(value || "").toLowerCase();
}

function statusLabel(status) {
  const labels = {
    running: "运行中",
    completed: "已完成",
    failed: "异常",
    parked: "已暂停",
  };
  return labels[status] || status || "未标注";
}

function firstReportHref(items = []) {
  return items.find((item) => item.href)?.href || "";
}

function filterByQuery(items, query, fields) {
  const q = normalizeText(query).trim();
  if (!q) return items;
  return items.filter((item) => fields(item).some((value) => normalizeText(value).includes(q)));
}

function threadCard(item) {
  const cards = item.cards || [];
  const href = firstReportHref(cards);
  return `<article class="ops-thread-card">
    <div class="ops-card-head">
      <div>
        <div class="mini-stats">
          <span>${esc(item.date || "未标注日期")}</span>
          <span>${esc(statusLabel(item.status))}</span>
          <span>${fmt(item.card_count)} 份研究记录</span>
        </div>
        <h3>${href ? `<a href="${link(href)}">${esc(item.root_topic || item.next_topic || item.id)}</a>` : esc(item.root_topic || item.next_topic || item.id)}</h3>
      </div>
      <span class="score-badge">${fmt(item.current_card_index || item.card_count || 0)}</span>
    </div>
    ${item.root_question ? `<p>${esc(item.root_question)}</p>` : ""}
    <div class="ops-flow-line">
      <span>${esc(item.root_analyst || "起始分析师")}</span>
      <i></i>
      <span>${esc(item.next_analyst || "下一位分析师")}</span>
    </div>
    <div class="ops-card-stack">
      ${cards.slice(0, 5).map((card) => `<a href="${link(card.href)}">
        <strong>${fmt(card.index)}</strong>
        <span>${esc(card.analyst || "")}</span>
        <em>${esc(card.topic || card.summary || "")}</em>
      </a>`).join("") || `<div class="empty slim">暂无可链接研究记录。</div>`}
    </div>
  </article>`;
}

function mailboxItem(item) {
  return `<article class="ops-mail-item">
    <div class="mini-stats">
      <span>${esc(statusLabel(item.status))}</span>
      <span>${fmt(item.messageCount)} 消息</span>
      <span>${esc(item.updatedAt ? item.updatedAt.slice(0, 10) : "")}</span>
    </div>
    <h3>${esc(item.subject || "未命名协作信箱")}</h3>
    <p>${esc(item.latest || "")}</p>
    <div class="ops-flow-line compact">
      <span>${esc(item.sender || "发送方")}</span>
      <i></i>
      <span>${esc(item.recipient || "接收方")}</span>
    </div>
  </article>`;
}

function dailyTaskRow(item) {
  return `<tr class="clickable-row" data-row-href="${link(item.href)}" tabindex="0" role="link">
    <td><a href="${link(item.href)}">${esc(item.title)}</a><div class="mini-stats">${tags(item.tags || [])}</div></td>
    <td>${esc(item.date || "")}</td>
    <td>${esc(item.analyst || "")}</td>
    <td><span class="status-pill">${esc(item.taskKey || "daily")}</span></td>
  </tr>`;
}

function filteredThreads(ops, state) {
  const status = state.operationsStatus || "";
  return filterByQuery(ops.threads || [], state.operationsQuery, (item) => [
    item.root_topic,
    item.root_question,
    item.root_analyst,
    item.next_analyst,
    ...(item.cards || []).map((card) => `${card.topic} ${card.summary} ${card.analyst}`),
  ]).filter((item) => !status || item.status === status);
}

function filteredMailbox(ops, state) {
  return filterByQuery(ops.mailbox || [], state.operationsQuery, (item) => [
    item.subject,
    item.sender,
    item.recipient,
    item.latest,
    item.status,
  ]);
}

function filteredDailyReports(ops, state) {
  return filterByQuery(ops.dailyTaskReports || [], state.operationsQuery, (item) => [
    item.title,
    item.excerpt,
    item.analyst,
    item.category,
    item.taskKey,
    ...(item.tags || []),
  ]);
}

export function renderOperations(context) {
  const { app, data, state } = context;
  const ops = data.researchOperations || {};
  const stats = ops.stats || {};
  const threads = filteredThreads(ops, state);
  const mailbox = filteredMailbox(ops, state);
  const dailyReports = filteredDailyReports(ops, state);
  app.innerHTML = `
    <section class="ops-hero">
      <div class="panel">
        <div class="daily-title">
          <div>
            <div class="eyebrow">Research Operations · ${esc((ops.generatedAt || "").slice(0, 10))}</div>
            <h2>研究工作流</h2>
            <p>把研究线程、协作信箱和每日任务报告放到同一张操作图里，所有可读成果都链接回报告库。</p>
          </div>
          <div class="daily-date">${fmt(stats.threads || 0)} 线程</div>
        </div>
        <div class="grid cols-4">
          ${metric("研究线程", stats.threads || 0)}
          ${metric("运行中", stats.runningThreads || 0, "var(--green)")}
          ${metric("协作信箱", stats.mailboxThreads || 0, "var(--gold)")}
          ${metric("每日任务报告", stats.dailyTaskReports || 0, "var(--red)")}
        </div>
        <div class="toolbar ops-toolbar">
          <input id="operationsSearch" type="search" placeholder="搜索线程、信箱、任务、分析师..." value="${esc(state.operationsQuery || "")}">
          <select id="operationsStatus">${statusOptions.map(([value, label]) => `<option value="${esc(value)}" ${state.operationsStatus === value ? "selected" : ""}>${esc(label)}</option>`).join("")}</select>
        </div>
      </div>
      <div class="panel">
        ${sectionHead("运行状态", "当前研究系统的协作负载。")}
        <div class="ops-status-grid">
          <span><strong>${fmt(stats.completedThreads || 0)}</strong> 已完成线程</span>
          <span><strong>${fmt(stats.openMailboxThreads || 0)}</strong> 待处理信箱</span>
          <span><strong>${fmt((ops.dailyTaskReports || []).filter((item) => item.date === data.dailyBrief?.date).length)}</strong> 今日任务报告</span>
        </div>
      </div>
    </section>
    <section class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        ${sectionHead("研究线程", `显示 ${fmt(threads.slice(0, 12).length)} / ${fmt(threads.length)} 条。`)}
        <div class="ops-thread-list">${threads.slice(0, 12).map(threadCard).join("") || `<div class="empty">暂无匹配研究线程。</div>`}</div>
      </div>
      <div class="panel">
        ${sectionHead("协作信箱", `显示 ${fmt(mailbox.slice(0, 14).length)} / ${fmt(mailbox.length)} 条。`)}
        <div class="ops-mail-list">${mailbox.slice(0, 14).map(mailboxItem).join("") || `<div class="empty">暂无匹配信箱。</div>`}</div>
      </div>
    </section>
    <section class="panel" style="margin-top:16px">
      ${sectionHead("每日任务报告", `显示 ${fmt(Math.min(80, dailyReports.length))} / ${fmt(dailyReports.length)} 篇，可直接打开对应报告。`)}
      <div class="data-table-wrap">
        <table class="data-table">
          <thead><tr><th>报告</th><th>日期</th><th>分析师</th><th>任务</th></tr></thead>
          <tbody>${dailyReports.slice(0, 80).map(dailyTaskRow).join("") || `<tr><td colspan="4">暂无匹配任务报告。</td></tr>`}</tbody>
        </table>
      </div>
    </section>`;
  document.querySelector("#operationsSearch")?.addEventListener("input", (event) => {
    state.operationsQuery = event.target.value;
    renderOperations(context);
  });
  document.querySelector("#operationsStatus")?.addEventListener("change", (event) => {
    state.operationsStatus = event.target.value;
    renderOperations(context);
  });
  app.querySelectorAll(".clickable-row").forEach((row) => {
    row.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      const href = row.dataset.rowHref;
      if (href) location.href = href;
    });
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter") row.click();
    });
  });
}
