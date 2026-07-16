const FLOW_COPY = [
  {
    code: "01 / SIGNAL",
    zhTitle: "信号进入研究议程",
    enTitle: "Signals enter the research agenda",
    zh: "市场变化、研究缺口和既有 thesis 的证伪条件决定下一步由谁研究，而不是让模型随机生成内容。",
    en: "Market changes, evidence gaps, and thesis falsifiers determine what is researched next.",
  },
  {
    code: "02 / SPECIALISTS",
    zhTitle: "专业角色拆解同一个问题",
    enTitle: "Specialists decompose the same problem",
    zh: "宏观、产业、策略、数据和风险角色在自己的覆盖边界内形成独立判断。",
    en: "Macro, industry, strategy, data, and risk roles form independent views within explicit coverage boundaries.",
  },
  {
    code: "03 / DEBATE",
    zhTitle: "协作不是简单赞同",
    enTitle: "Collaboration is not automatic agreement",
    zh: "后续研究可以支持、反驳、压力测试或要求补充证据，分歧被保存为研究资产。",
    en: "Follow-up work can support, dispute, stress-test, or request evidence. Dissent remains part of the record.",
  },
  {
    code: "04 / EVIDENCE + QA",
    zhTitle: "证据质量独立于文字流畅度",
    enTitle: "Evidence quality is separate from fluent prose",
    zh: "引用、日期、跨步骤一致性和可交付文件被独立检查；失败不会被一段漂亮的总结掩盖。",
    en: "Sources, dates, cross-step consistency, and deliverables are checked independently of prose quality.",
  },
  {
    code: "05 / READER LAYER",
    zhTitle: "图结构研究被重组成人类判断顺序",
    enTitle: "Graph-shaped research becomes a human decision sequence",
    zh: "结论、变化、为什么重要、证伪条件和来源先被重组，再交给投资者阅读。",
    en: "Conclusions, changes, decision relevance, falsifiers, and sources are recomposed before publication.",
  },
  {
    code: "06 / THESIS + PORTFOLIO",
    zhTitle: "研究映射到赛道、股票与风险预算",
    enTitle: "Research maps to lanes, stocks, and risk budgets",
    zh: "股票节点始终保留所属 thesis、赛道、证据和风险条件，不成为脱离研究的推荐清单。",
    en: "Every stock remains attached to a thesis, lane, evidence trail, and risk condition.",
  },
  {
    code: "07 / RECAP",
    zhTitle: "复盘把结果重新送回研究起点",
    enTitle: "Recap returns outcomes to the beginning",
    zh: "市场表现、人类反馈和后续证据会强化、削弱或证伪既有观点，形成机构记忆。",
    en: "Market outcomes, human feedback, and new evidence strengthen, weaken, or falsify prior views.",
  },
];

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeHref(value, fallback = "/investor/") {
  const href = String(value || "").trim();
  if (!href) return fallback;
  if (/^(?:https?:\/\/|\/|#)/i.test(href)) return href;
  return fallback;
}

function language() {
  return document.documentElement.dataset.lang === "en" ? "en" : "zh";
}

function number(value) {
  return new Intl.NumberFormat("en-US").format(Number(value || 0));
}

function metricLabel(key, lang) {
  const labels = {
    reports: ["报告", "reports"],
    researchThreads: ["研究讨论", "threads"],
    researchNotes: ["研究节点", "notes"],
    thesisEvents: ["Thesis 证据", "thesis evidence"],
    personaEvents: ["Persona 变化", "persona changes"],
    readerMemos: ["读者报告", "reader memos"],
  };
  return labels[key]?.[lang === "en" ? 1 : 0] || key;
}

function detailSection(title, count, body) {
  return `
    <section class="century-detail-section">
      <header><strong>${escapeHtml(title)}</strong><span>${number(count)}</span></header>
      ${body}
    </section>
  `;
}

function detailRow({ label, title, text, href, meta }) {
  return `
    <a class="century-detail-row" href="${escapeHtml(safeHref(href))}">
      <span>${escapeHtml(label)}</span>
      <div><strong>${escapeHtml(title)}</strong>${text ? `<p>${escapeHtml(text)}</p>` : ""}</div>
      <em>${escapeHtml(meta || "↗")}</em>
    </a>
  `;
}

function emptyState(text) {
  return `<div class="century-inspector-loading"><span>${escapeHtml(text)}</span></div>`;
}

function renderOverview(day, lang) {
  const sections = [];
  if (day.milestones?.length) {
    sections.push(detailSection(
      lang === "en" ? "Institution milestones" : "机构里程碑",
      day.milestones.length,
      `<div class="century-detail-list">${day.milestones.map((item) => detailRow({
        label: "MILESTONE",
        title: lang === "en" ? item.titleEn : item.titleZh,
        text: lang === "en" ? item.summaryEn || item.summaryZh : item.summaryZh,
        href: item.href,
        meta: item.date,
      })).join("")}</div>`,
    ));
  }
  if (day.episodes?.length) {
    sections.push(detailSection(
      lang === "en" ? "Published episodes" : "当日可读成果",
      day.episodes.length,
      `<div class="century-detail-list">${day.episodes.map((item) => detailRow({
        label: item.badge,
        title: item.title,
        text: item.summary,
        href: item.href,
        meta: item.date,
      })).join("")}</div>`,
    ));
  }
  if (day.lanes?.length) {
    sections.push(detailSection(
      lang === "en" ? "Active lanes" : "活跃赛道",
      day.lanes.length,
      `<div class="century-detail-list">${day.lanes.slice(0, 12).map((lane) => detailRow({
        label: `${lane.thesisCount} THESES`,
        title: lane.title,
        text: `${lane.stockTickers.slice(0, 8).join(" · ")} · ${lane.eventCount} evidence events`,
        href: lane.href,
        meta: `SCORE ${lane.avgConviction}`,
      })).join("")}</div>`,
    ));
  }
  if (day.stocks?.length) {
    sections.push(detailSection(
      lang === "en" ? "Linked stock nodes" : "关联股票节点",
      day.stocks.length,
      `<div class="century-detail-tags">${day.stocks.slice(0, 30).map((stock) => `<a href="${escapeHtml(safeHref(stock.href))}" title="${escapeHtml(stock.name || stock.ticker)}">${escapeHtml(stock.ticker)}</a>`).join("")}</div>`,
    ));
  }
  if (day.reports?.length) {
    sections.push(detailSection(
      lang === "en" ? "Leading reports" : "当日代表报告",
      day.reports.length,
      `<div class="century-detail-list">${day.reports.slice(0, 8).map((report) => detailRow({
        label: report.category,
        title: report.title,
        text: report.excerpt,
        href: report.href,
        meta: report.analyst,
      })).join("")}</div>`,
    ));
  }
  return sections.join("") || emptyState(lang === "en" ? "No public research objects for this day." : "当日暂无可公开展示的研究对象。");
}

function renderReports(day, lang) {
  if (!day.reports?.length) return emptyState(lang === "en" ? "No reports recorded for this day." : "当日没有已记录的公开报告。");
  return detailSection(
    lang === "en" ? "All public reports" : "全部公开报告",
    day.reports.length,
    `<div class="century-detail-list">${day.reports.map((report) => detailRow({
      label: report.category,
      title: report.title,
      text: report.excerpt,
      href: report.href,
      meta: report.analyst,
    })).join("")}</div>`,
  );
}

function renderTheses(day, lang) {
  if (!day.thesisEvents?.length) return emptyState(lang === "en" ? "No dated thesis evidence for this day." : "当日没有已映射的 thesis 证据事件。");
  return detailSection(
    lang === "en" ? "Thesis-level evidence" : "Thesis 级证据",
    day.thesisEvents.length,
    `<div class="century-detail-list">${day.thesisEvents.map((thesis) => detailRow({
      label: thesis.directionLabel || thesis.direction || "THESIS",
      title: thesis.title,
      text: `${thesis.lane || "Research lane"} · support ${thesis.supports} / risk ${thesis.risks} · ${thesis.stockTickers.slice(0, 7).join(" · ")}`,
      href: thesis.href,
      meta: `${thesis.conviction}`,
    })).join("")}</div>`,
  );
}

function renderPersonas(day, lang) {
  if (!day.personas?.length) return emptyState(lang === "en" ? "No persona changes mapped to this date." : "当日没有已映射的分析师观点变化。");
  return detailSection(
    lang === "en" ? "Analyst persona changes" : "分析师画像变化",
    day.personas.length,
    `<div class="century-detail-list">${day.personas.map((persona) => detailRow({
      label: `${persona.eventCount} EVENTS`,
      title: lang === "en" ? persona.nameEn || persona.name : persona.name,
      text: persona.latestEvent?.title || persona.currentView || persona.topTheses.join(" · "),
      href: persona.latestEvent?.href || persona.href,
      meta: `${persona.supports}+ / ${persona.risks}-`,
    })).join("")}</div>`,
  );
}

function renderDiscussions(day, lang) {
  if (!day.discussions?.length) return emptyState(lang === "en" ? "No public discussion metadata for this day." : "当日没有可公开展示的研究讨论元数据。");
  return detailSection(
    lang === "en" ? "Research discussions" : "研究讨论链",
    day.discussions.length,
    `<div class="century-detail-list">${day.discussions.map((thread) => detailRow({
      label: `${thread.noteCount} NOTES`,
      title: thread.title,
      text: thread.question,
      href: thread.href,
      meta: thread.analyst,
    })).join("")}</div>`,
  );
}

function renderDayTab(day, tab, lang) {
  if (tab === "reports") return renderReports(day, lang);
  if (tab === "theses") return renderTheses(day, lang);
  if (tab === "personas") return renderPersonas(day, lang);
  if (tab === "discussions") return renderDiscussions(day, lang);
  return renderOverview(day, lang);
}

function colorValue(name) {
  const values = {
    blue: getComputedStyle(document.documentElement).getPropertyValue("--accent-blue").trim() || "#2f80ed",
    green: getComputedStyle(document.documentElement).getPropertyValue("--accent-green").trim() || "#169b62",
    yellow: getComputedStyle(document.documentElement).getPropertyValue("--accent-yellow").trim() || "#d7a316",
    orange: getComputedStyle(document.documentElement).getPropertyValue("--accent-orange").trim() || "#e46f2e",
    red: getComputedStyle(document.documentElement).getPropertyValue("--accent-red").trim() || "#d64545",
    ink: getComputedStyle(document.documentElement).getPropertyValue("--text-primary").trim() || "#f5f5f5",
    muted: getComputedStyle(document.documentElement).getPropertyValue("--text-muted").trim() || "#747474",
    line: getComputedStyle(document.documentElement).getPropertyValue("--border").trim() || "#2d2d2d",
    surface: getComputedStyle(document.documentElement).getPropertyValue("--bg-surface").trim() || "#0b0b0b",
  };
  return values[name] || values.ink;
}

function resizeCanvas(canvas, maxRatio = 2) {
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, maxRatio);
  const width = Math.max(1, Math.round(rect.width * ratio));
  const height = Math.max(1, Math.round(rect.height * ratio));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  const context = canvas.getContext("2d");
  context?.setTransform(ratio, 0, 0, ratio, 0, 0);
  return { context, width: rect.width, height: rect.height, ratio };
}

function mountResearchRiver(canvas, days, initialDay, onSelect) {
  if (!canvas) return { setDay() {}, redraw() {} };
  const tooltip = document.getElementById("centuryRiverTooltip");
  const cursor = document.getElementById("centuryRiverCursor");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const padding = { top: 32, right: 18, bottom: 34, left: 54 };
  const series = [
    { key: "reports", label: "REPORTS", color: "blue" },
    { key: "researchThreads", label: "THREADS", color: "green" },
    { key: "thesisEvents", label: "THESIS", color: "yellow" },
    { key: "personaEvents", label: "PERSONA", color: "orange" },
  ];
  let activeDay = initialDay;
  let reveal = reduced ? 1 : 0;
  let frame = 0;

  function draw() {
    const { context, width, height } = resizeCanvas(canvas, 1.75);
    if (!context || width < 20 || height < 20) return;
    context.clearRect(0, 0, width, height);
    context.fillStyle = colorValue("surface");
    context.fillRect(0, 0, width, height);
    const plotWidth = width - padding.left - padding.right;
    const plotHeight = height - padding.top - padding.bottom;
    const bandHeight = plotHeight / series.length;

    context.strokeStyle = colorValue("line");
    context.lineWidth = 1;
    context.fillStyle = colorValue("muted");
    context.font = "9px JetBrains Mono, monospace";
    context.textBaseline = "middle";
    for (let index = 0; index <= 10; index += 1) {
      const x = padding.left + (plotWidth * index) / 10;
      context.globalAlpha = 0.7;
      context.beginPath();
      context.moveTo(x, padding.top);
      context.lineTo(x, height - padding.bottom);
      context.stroke();
      if (index < 10) {
        const day = days[Math.min(days.length - 1, index * 10)];
        context.globalAlpha = 1;
        context.fillText(`D${String(day.dayNumber).padStart(2, "0")}`, x + 3, height - 16);
      }
    }

    series.forEach((item, seriesIndex) => {
      const values = days.map((day) => Number(day.metrics?.[item.key] || 0));
      const max = Math.max(1, ...values);
      const yBottom = padding.top + bandHeight * (seriesIndex + 1) - 8;
      const yTop = padding.top + bandHeight * seriesIndex + 10;
      context.globalAlpha = 1;
      context.fillStyle = colorValue(item.color);
      context.fillText(item.label, 8, yTop + 3);
      context.fillStyle = colorValue("muted");
      context.fillText(number(max), 8, yTop + 17);
      context.strokeStyle = colorValue("line");
      context.beginPath();
      context.moveTo(padding.left, yBottom);
      context.lineTo(width - padding.right, yBottom);
      context.stroke();

      context.beginPath();
      context.moveTo(padding.left, yBottom);
      values.forEach((value, index) => {
        const x = padding.left + (plotWidth * index) / Math.max(1, days.length - 1);
        const normalized = Math.sqrt(value / max) * reveal;
        const y = yBottom - normalized * Math.max(8, bandHeight - 30);
        context.lineTo(x, y);
      });
      context.lineTo(width - padding.right, yBottom);
      context.closePath();
      context.globalAlpha = 0.14;
      context.fillStyle = colorValue(item.color);
      context.fill();

      context.beginPath();
      values.forEach((value, index) => {
        const x = padding.left + (plotWidth * index) / Math.max(1, days.length - 1);
        const normalized = Math.sqrt(value / max) * reveal;
        const y = yBottom - normalized * Math.max(8, bandHeight - 30);
        if (index === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      });
      context.globalAlpha = 0.9;
      context.strokeStyle = colorValue(item.color);
      context.lineWidth = 1.5;
      context.stroke();
    });
    context.globalAlpha = 1;
    const cursorX = padding.left + (plotWidth * (activeDay - 1)) / Math.max(1, days.length - 1);
    if (cursor) cursor.style.left = `${cursorX}px`;
  }

  function dayAtEvent(event) {
    const rect = canvas.getBoundingClientRect();
    const plotWidth = rect.width - padding.left - padding.right;
    const relative = Math.max(0, Math.min(plotWidth, event.clientX - rect.left - padding.left));
    return Math.max(1, Math.min(days.length, Math.round((relative / plotWidth) * (days.length - 1)) + 1));
  }

  function handleMove(event) {
    const targetDay = dayAtEvent(event);
    const day = days[targetDay - 1];
    if (!tooltip || !day) return;
    tooltip.hidden = false;
    tooltip.innerHTML = `<strong>DAY ${String(day.dayNumber).padStart(3, "0")} · ${escapeHtml(day.date)}</strong>${escapeHtml(day.headline)}<br>reports ${number(day.metrics.reports)} · threads ${number(day.metrics.researchThreads)} · thesis ${number(day.metrics.thesisEvents)}`;
    const rect = canvas.parentElement.getBoundingClientRect();
    tooltip.style.left = `${Math.min(rect.width - 200, Math.max(8, event.clientX - rect.left + 14))}px`;
    tooltip.style.top = `${Math.min(rect.height - 72, Math.max(8, event.clientY - rect.top + 14))}px`;
  }

  canvas.addEventListener("pointermove", handleMove);
  canvas.addEventListener("pointerleave", () => { if (tooltip) tooltip.hidden = true; });
  canvas.addEventListener("click", (event) => onSelect(dayAtEvent(event)));
  const resizeObserver = new ResizeObserver(draw);
  resizeObserver.observe(canvas);

  function revealFrame() {
    reveal = Math.min(1, reveal + 0.035);
    draw();
    if (reveal < 1) frame = requestAnimationFrame(revealFrame);
  }
  if (reduced) draw();
  else revealFrame();

  return {
    setDay(value) {
      activeDay = Number(value || 1);
      draw();
    },
    redraw: draw,
    destroy() {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    },
  };
}

function drawSparkline(canvas) {
  const values = String(canvas.dataset.values || "").split(",").map(Number).filter(Number.isFinite);
  if (values.length < 2) return;
  const { context, width, height } = resizeCanvas(canvas, 1.5);
  if (!context) return;
  const card = canvas.closest(".century-episode-card");
  const tone = [...(card?.classList || [])].find((name) => name.startsWith("tone-"))?.replace("tone-", "") || "blue";
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(1, max - min);
  context.clearRect(0, 0, width, height);
  context.strokeStyle = colorValue("line");
  context.beginPath();
  context.moveTo(0, height - 8);
  context.lineTo(width, height - 8);
  context.stroke();
  context.strokeStyle = colorValue(tone);
  context.lineWidth = 1.5;
  context.beginPath();
  values.forEach((value, index) => {
    const x = 2 + ((width - 4) * index) / (values.length - 1);
    const y = height - 9 - ((value - min) / range) * (height - 18);
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  });
  context.stroke();
  values.forEach((value, index) => {
    const x = 2 + ((width - 4) * index) / (values.length - 1);
    const y = height - 9 - ((value - min) / range) * (height - 18);
    context.fillStyle = colorValue(tone);
    context.fillRect(x - 1.5, y - 1.5, 3, 3);
  });
}

function mountEpisodeLibrary() {
  const cards = [...document.querySelectorAll(".century-episode-card")];
  const buttons = [...document.querySelectorAll("[data-episode-filter]")];
  const search = document.getElementById("centuryEpisodeSearch");
  const count = document.getElementById("centuryEpisodeCount");
  const more = document.getElementById("centuryShowMoreEpisodes");
  let filter = "all";
  let limit = 12;

  function apply() {
    const query = String(search?.value || "").toLowerCase().trim();
    const matching = cards.filter((card) => {
      const typeOk = filter === "all" || card.dataset.episodeType === filter;
      const textOk = !query || String(card.dataset.episodeSearch || "").includes(query);
      return typeOk && textOk;
    });
    cards.forEach((card) => {
      const index = matching.indexOf(card);
      card.classList.toggle("is-hidden", index < 0);
      card.classList.toggle("is-collapsed", index >= limit);
    });
    if (count) count.textContent = `${matching.length} episodes`;
    if (more) more.hidden = matching.length <= limit;
  }

  buttons.forEach((button) => button.addEventListener("click", () => {
    filter = button.dataset.episodeFilter || "all";
    limit = 12;
    buttons.forEach((item) => item.classList.toggle("is-active", item === button));
    apply();
  }));
  search?.addEventListener("input", () => { limit = 24; apply(); });
  more?.addEventListener("click", () => { limit += 12; apply(); });
  apply();
  requestAnimationFrame(() => document.querySelectorAll(".century-episode-spark").forEach(drawSparkline));
  return { redraw: () => document.querySelectorAll(".century-episode-spark").forEach(drawSparkline) };
}

function mountInstitutionFlow(canvas) {
  const stage = canvas?.closest("[data-flow-stage]");
  const buttons = [...(stage?.querySelectorAll("[data-flow-index]") || [])];
  const inspector = document.getElementById("centuryFlowInspector");
  if (!canvas || !stage || !buttons.length) return { redraw() {} };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let points = [];
  let frame = 0;
  let startTime = performance.now();

  function setInspector(index) {
    const item = FLOW_COPY[index] || FLOW_COPY[0];
    const lang = language();
    buttons.forEach((button, buttonIndex) => button.classList.toggle("is-active", buttonIndex === index));
    if (!inspector) return;
    inspector.innerHTML = `
      <span>${escapeHtml(item.code)}</span>
      <strong>${escapeHtml(lang === "en" ? item.enTitle : item.zhTitle)}</strong>
      <p>${escapeHtml(lang === "en" ? item.en : item.zh)}</p>
    `;
  }

  buttons.forEach((button, index) => button.addEventListener("click", () => setInspector(index)));

  function layout() {
    const rect = stage.getBoundingClientRect();
    const mobile = rect.width < 620;
    points = buttons.map((button, index) => {
      let x;
      let y;
      if (mobile) {
        x = index % 2 === 0 ? rect.width * 0.25 : rect.width * 0.72;
        y = 70 + Math.floor(index / 2) * 105;
      } else {
        const angle = -Math.PI * 0.95 + (index / buttons.length) * Math.PI * 2;
        x = rect.width * 0.47 + Math.cos(angle) * rect.width * 0.34;
        y = rect.height * 0.42 + Math.sin(angle) * Math.min(165, rect.height * 0.28);
      }
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
      button.style.transform = "translate(-50%, -50%)";
      return { x, y };
    });
    draw(performance.now());
  }

  function draw(time) {
    const { context, width, height } = resizeCanvas(canvas, 1.5);
    if (!context || !points.length) return;
    context.clearRect(0, 0, width, height);
    context.fillStyle = colorValue("surface");
    context.fillRect(0, 0, width, height);
    context.strokeStyle = colorValue("line");
    context.lineWidth = 1;
    context.globalAlpha = 0.45;
    for (let x = 24; x < width; x += 48) {
      context.beginPath(); context.moveTo(x, 0); context.lineTo(x, height); context.stroke();
    }
    for (let y = 24; y < height; y += 48) {
      context.beginPath(); context.moveTo(0, y); context.lineTo(width, y); context.stroke();
    }
    context.globalAlpha = 0.9;
    context.strokeStyle = colorValue("muted");
    context.setLineDash([4, 5]);
    points.forEach((point, index) => {
      const target = points[(index + 1) % points.length];
      context.beginPath();
      context.moveTo(point.x, point.y);
      context.lineTo(target.x, target.y);
      context.stroke();
    });
    context.setLineDash([]);
    const elapsed = (time - startTime) / 1000;
    const flowColors = ["blue", "yellow", "orange", "red", "green", "blue", "orange"];
    points.forEach((point, index) => {
      const target = points[(index + 1) % points.length];
      const t = reduced ? 0.55 : (elapsed * 0.18 + index / points.length) % 1;
      const x = point.x + (target.x - point.x) * t;
      const y = point.y + (target.y - point.y) * t;
      context.fillStyle = colorValue(flowColors[index]);
      context.fillRect(x - 3, y - 3, 6, 6);
    });
  }

  function animate(time) {
    draw(time);
    if (!reduced) frame = requestAnimationFrame(animate);
  }

  const resizeObserver = new ResizeObserver(layout);
  resizeObserver.observe(stage);
  layout();
  if (reduced) draw(performance.now());
  else frame = requestAnimationFrame(animate);
  setInspector(0);

  return {
    redraw() { setInspector(buttons.findIndex((button) => button.classList.contains("is-active"))); layout(); },
    destroy() { cancelAnimationFrame(frame); resizeObserver.disconnect(); },
  };
}

export function mountHundredDaysPortal() {
  const root = document.querySelector("[data-hundred-days-root]");
  const payloadNode = document.getElementById("hundredDaysPayload");
  if (!root || !payloadNode || root.dataset.mounted === "true") return;
  root.dataset.mounted = "true";

  let data;
  try {
    data = JSON.parse(payloadNode.textContent || "{}");
  } catch {
    return;
  }

  const dayCache = new Map();
  const dayCells = [...document.querySelectorAll("[data-century-day]")];
  const range = document.getElementById("centuryDayRange");
  const dayReadout = document.getElementById("centurySelectedDay");
  const dateReadout = document.getElementById("centurySelectedDate");
  const statusReadout = document.getElementById("centurySelectedStatus");
  const universeStatus = document.getElementById("centuryUniverseStatus");
  const inspector = document.querySelector(".century-day-inspector");
  const inspectorTopic = document.getElementById("centuryInspectorTopic");
  const inspectorHeadline = document.getElementById("centuryInspectorHeadline");
  const inspectorSummary = document.getElementById("centuryInspectorSummary");
  const inspectorMetrics = document.getElementById("centuryInspectorMetrics");
  const inspectorBody = document.getElementById("centuryInspectorBody");
  const contractLink = document.getElementById("centuryDayContractLink");
  const tabButtons = [...document.querySelectorAll("[data-day-tab]")];
  const playButton = document.getElementById("centuryPlay");
  const universeTooltip = document.getElementById("centuryUniverseTooltip");
  let activeDay = Number(root.dataset.initialDay || data.latestDataDay || 1);
  let activeTab = "overview";
  let activeDetail = null;
  let playback = 0;
  let requestToken = 0;

  const universeCanvas = document.getElementById("centuryUniverse");
  let pendingUniverseDay = activeDay;
  let universePromise = null;
  let universe = {
    setDay(value) { pendingUniverseDay = Number(value || 1); },
    destroy() {},
  };

  function ensureUniverse() {
    if (!universeCanvas || universePromise) return universePromise;
    universePromise = import("./hundred-days-universe.js")
      .then(({ mountHundredDaysUniverse }) => {
        universe = mountHundredDaysUniverse({
          canvas: universeCanvas,
          atlas: data.atlas,
          initialDay: pendingUniverseDay,
          onHover(node, event) {
            if (!universeTooltip || !node || !event) {
              if (universeTooltip) universeTooltip.hidden = true;
              return;
            }
            universeTooltip.hidden = false;
            universeTooltip.innerHTML = `<span>${escapeHtml(node.type)} · DAY ${String(node.activation).padStart(3, "0")}</span><strong>${escapeHtml(node.label)}</strong><em>${escapeHtml(node.meta || "Click to inspect")}</em>`;
            universeTooltip.style.left = `${Math.min(window.innerWidth - 274, Math.max(12, event.clientX + 14))}px`;
            universeTooltip.style.top = `${Math.min(window.innerHeight - 110, Math.max(12, event.clientY + 14))}px`;
          },
          onSelect(node) {
            if (node?.href) window.location.assign(safeHref(node.href));
          },
        });
        universe.setDay(pendingUniverseDay);
        return universe;
      })
      .catch(() => null);
    return universePromise;
  }

  universeCanvas?.addEventListener("pointerenter", ensureUniverse, { once: true });
  universeCanvas?.addEventListener("focus", ensureUniverse, { once: true });
  if ("requestIdleCallback" in window) window.requestIdleCallback(ensureUniverse, { timeout: 1800 });
  else window.setTimeout(ensureUniverse, 700);

  const river = mountResearchRiver(document.getElementById("centuryResearchRiver"), data.days, activeDay, (day) => selectDay(day, { history: true }));
  const episodes = mountEpisodeLibrary();
  const flow = mountInstitutionFlow(document.getElementById("centuryInstitutionFlow"));

  function overview(dayNumber) {
    return data.days[Math.max(0, Math.min(data.days.length - 1, dayNumber - 1))];
  }

  function updateMetrics(metrics) {
    if (!inspectorMetrics) return;
    const keys = ["reports", "researchThreads", "researchNotes", "thesisEvents", "personaEvents", "readerMemos"];
    const lang = language();
    inspectorMetrics.innerHTML = keys.map((key) => `<div><strong>${number(metrics?.[key])}</strong><span>${escapeHtml(metricLabel(key, lang))}</span></div>`).join("");
  }

  function updateInspectorHeader(day) {
    if (!day) return;
    if (inspectorTopic) inspectorTopic.textContent = language() === "en" ? day.dominantTopic?.labelEn || "Integrated research" : day.dominantTopic?.labelZh || "综合研究";
    if (inspectorHeadline) inspectorHeadline.textContent = day.headline;
    if (inspectorSummary) inspectorSummary.textContent = day.summary;
    if (contractLink) contractLink.href = `/100-days/day/${day.date}/`;
    updateMetrics(day.metrics);
  }

  function renderActiveDetail() {
    if (!inspectorBody) return;
    if (!activeDetail) {
      inspectorBody.innerHTML = `<div class="century-inspector-loading"><i></i><span>Loading public day contract…</span></div>`;
      return;
    }
    inspectorBody.innerHTML = renderDayTab(activeDetail, activeTab, language());
  }

  async function loadDay(day) {
    const token = ++requestToken;
    activeDetail = null;
    inspector?.setAttribute("aria-busy", "true");
    renderActiveDetail();
    try {
      if (!dayCache.has(day.date)) {
        const response = await fetch(day.detailHref, { headers: { Accept: "application/json" } });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        dayCache.set(day.date, await response.json());
      }
      if (token !== requestToken) return;
      activeDetail = dayCache.get(day.date);
      renderActiveDetail();
    } catch {
      if (token !== requestToken || !inspectorBody) return;
      inspectorBody.innerHTML = emptyState(language() === "en" ? "The public day contract could not be loaded." : "当天的公开数据契约暂时无法读取。");
    } finally {
      if (token === requestToken) inspector?.setAttribute("aria-busy", "false");
    }
  }

  function updateUrl(day, useHistory) {
    const url = new URL(window.location.href);
    url.searchParams.set("day", day.date);
    const method = useHistory ? "pushState" : "replaceState";
    window.history[method]({ day: day.dayNumber }, "", url);
  }

  function selectDay(value, options = {}) {
    const next = Math.max(1, Math.min(data.dayCount, Number(value || 1)));
    const day = overview(next);
    if (!day) return;
    activeDay = next;
    dayCells.forEach((cell) => {
      const selected = Number(cell.dataset.centuryDay) === activeDay;
      cell.classList.toggle("is-selected", selected);
      cell.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    if (range) range.value = String(activeDay);
    if (dayReadout) dayReadout.textContent = `DAY ${String(activeDay).padStart(3, "0")}`;
    if (dateReadout) dateReadout.textContent = day.date;
    if (statusReadout) statusReadout.textContent = day.status;
    if (universeStatus) universeStatus.textContent = `DAY ${String(activeDay).padStart(3, "0")} · ${day.date}`;
    updateInspectorHeader(day);
    universe.setDay(activeDay);
    river.setDay(activeDay);
    loadDay(day);
    if (options.history !== false) updateUrl(day, Boolean(options.history));
  }

  const guide = document.getElementById("centuryGuide");
  const guideOpen = document.querySelector("[data-guide-open]");
  const guideClose = document.querySelector("[data-guide-close]");
  const guideExplore = document.querySelector("[data-guide-explore]");
  const guideSteps = [...document.querySelectorAll("[data-guide-step]")];
  const guideChapters = [...document.querySelectorAll("[data-guide-chapter]")];
  const guideProgress = document.getElementById("centuryGuideProgress");
  const guidePlay = document.getElementById("centuryGuidePlay");
  let guideIndex = 0;
  let guideTimer = 0;

  function stopGuidePlayback() {
    window.clearInterval(guideTimer);
    guideTimer = 0;
    guidePlay?.classList.remove("is-playing");
    guidePlay?.setAttribute("aria-label", "Play guided replay");
    if (guidePlay) guidePlay.textContent = "▶";
  }

  function setGuideChapter(value, syncDay = true) {
    guideIndex = Math.max(0, Math.min(guideChapters.length - 1, Number(value || 0)));
    guideSteps.forEach((step, index) => step.classList.toggle("is-active", index === guideIndex));
    guideChapters.forEach((chapter, index) => chapter.classList.toggle("is-active", index === guideIndex));
    if (guideProgress) guideProgress.style.width = `${((guideIndex + 1) / Math.max(1, guideChapters.length)) * 100}%`;
    const day = Number(guideSteps[guideIndex]?.dataset.guideDay || 1);
    if (syncDay) selectDay(day, { history: false });
  }

  function openGuide() {
    if (!guide) return;
    ensureUniverse();
    setGuideChapter(0);
    if (typeof guide.showModal === "function") guide.showModal();
    else guide.setAttribute("open", "");
  }

  function closeGuide() {
    stopGuidePlayback();
    if (!guide) return;
    if (typeof guide.close === "function") guide.close();
    else guide.removeAttribute("open");
  }

  guideOpen?.addEventListener("click", openGuide);
  guideClose?.addEventListener("click", closeGuide);
  guideExplore?.addEventListener("click", closeGuide);
  guide?.addEventListener("click", (event) => { if (event.target === guide) closeGuide(); });
  guide?.addEventListener("close", stopGuidePlayback);
  guideSteps.forEach((step, index) => step.addEventListener("click", () => {
    stopGuidePlayback();
    setGuideChapter(index);
  }));
  document.getElementById("centuryGuidePrev")?.addEventListener("click", () => {
    stopGuidePlayback();
    setGuideChapter(guideIndex - 1);
  });
  document.getElementById("centuryGuideNext")?.addEventListener("click", () => {
    stopGuidePlayback();
    setGuideChapter(guideIndex + 1);
  });
  guidePlay?.addEventListener("click", () => {
    if (guideTimer) {
      stopGuidePlayback();
      return;
    }
    if (guideIndex >= guideChapters.length - 1) setGuideChapter(0);
    guidePlay.classList.add("is-playing");
    guidePlay.setAttribute("aria-label", "Pause guided replay");
    guidePlay.textContent = "Ⅱ";
    guideTimer = window.setInterval(() => {
      if (guideIndex >= guideChapters.length - 1) {
        stopGuidePlayback();
        return;
      }
      setGuideChapter(guideIndex + 1);
    }, 5200);
  });

  dayCells.forEach((cell) => cell.addEventListener("click", () => selectDay(Number(cell.dataset.centuryDay), { history: true })));
  range?.addEventListener("input", () => selectDay(Number(range.value), { history: false }));
  document.getElementById("centuryPrevDay")?.addEventListener("click", () => selectDay(activeDay - 1, { history: false }));
  document.getElementById("centuryNextDay")?.addEventListener("click", () => selectDay(activeDay + 1, { history: false }));
  document.getElementById("centuryLatest")?.addEventListener("click", () => selectDay(data.latestDataDay, { history: true }));

  function stopPlayback() {
    window.clearInterval(playback);
    playback = 0;
    playButton?.classList.remove("is-playing");
    playButton?.setAttribute("aria-label", "Play timeline");
    if (playButton) playButton.innerHTML = "<span aria-hidden=\"true\">▶</span>";
  }

  playButton?.addEventListener("click", () => {
    if (playback) {
      stopPlayback();
      return;
    }
    if (activeDay >= data.currentDay || activeDay >= data.dayCount) selectDay(1, { history: false });
    playButton.classList.add("is-playing");
    playButton.setAttribute("aria-label", "Pause timeline");
    playButton.innerHTML = "<span aria-hidden=\"true\">Ⅱ</span>";
    playback = window.setInterval(() => {
      const limit = Math.min(data.currentDay, data.dayCount);
      if (activeDay >= limit) {
        stopPlayback();
        return;
      }
      selectDay(activeDay + 1, { history: false });
    }, 650);
  });

  tabButtons.forEach((button) => button.addEventListener("click", () => {
    activeTab = button.dataset.dayTab || "overview";
    tabButtons.forEach((item) => item.setAttribute("aria-selected", item === button ? "true" : "false"));
    renderActiveDetail();
  }));

  window.addEventListener("popstate", () => {
    const requested = new URL(window.location.href).searchParams.get("day");
    const day = data.days.find((item) => item.date === requested);
    if (day) selectDay(day.dayNumber, { history: false });
  });

  window.addEventListener("lang-change", () => {
    updateInspectorHeader(overview(activeDay));
    renderActiveDetail();
    flow.redraw();
  });
  window.addEventListener("theme-change", () => {
    river.redraw();
    episodes.redraw();
    flow.redraw();
  });

  const requestedDate = new URL(window.location.href).searchParams.get("day");
  const requestedDay = data.days.find((day) => day.date === requestedDate)?.dayNumber;
  selectDay(requestedDay || activeDay, { history: false });
}
