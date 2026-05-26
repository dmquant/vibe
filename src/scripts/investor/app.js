import { createResearchAccess } from "./research-os.js";
import { renderDaily } from "./views/daily.js";
import { renderDelta, renderCockpit } from "./views/research-os.js";
import {
  renderAnalysts,
  renderDashboard,
  renderDeepResearch,
  renderThemes,
  renderViews,
} from "./views/dashboard.js";
import { renderAnalystTracker, renderChangeRadar, renderThesisTracker } from "./views/investor-workflows.js";
import { renderKnowledge } from "./views/knowledge.js";
import { renderReports } from "./views/reports.js";

const KNOWN_VIEWS = new Set([
  "dashboard",
  "daily",
  "radar",
  "theses",
  "analyst-tracker",
  "delta",
  "cockpit",
  "deep",
  "themes",
  "views",
  "knowledge",
  "reports",
  "analysts",
]);
const DAILY_SECTION_HASHES = new Set([
  "dailyOverview",
  "dailyReports",
  "dailyMomentum",
  "dailyChains",
  "dailyRisks",
  "dailyHeatmap",
  "dailyHighlights",
]);

function readSiteData() {
  const jsonScript = document.querySelector("#institute-site-data");
  if (jsonScript?.textContent?.trim()) {
    return JSON.parse(jsonScript.textContent);
  }
  return window.INSTITUTE_SITE_DATA;
}

export function mountInvestorConsole() {
  const data = readSiteData();
  const app = document.querySelector("#app");
  const navButtons = [...document.querySelectorAll("[data-view]")];
  const searchInput = document.querySelector("#globalSearch");

  if (!data || !app) {
    return;
  }

  function resolveHash(hashValue) {
    const hash = hashValue.replace("#", "");
    if (KNOWN_VIEWS.has(hash)) return { view: hash, anchor: "" };
    if (DAILY_SECTION_HASHES.has(hash)) return { view: "daily", anchor: hash };
    return { view: "dashboard", anchor: "" };
  }

  const initial = resolveHash(location.hash);
  let pendingAnchor = initial.anchor;
  const state = {
    view: initial.view,
    query: "",
    tag: "",
    analyst: "",
    dailyQuery: "",
    dailyChain: "",
    thesisQuery: "",
    thesisDirection: "",
    analystTrackerQuery: "",
    analystTrackerStance: "",
  };

  const context = {
    data,
    app,
    state,
    access: createResearchAccess(data),
    setView,
  };

  function syncNav() {
    navButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === state.view));
  }

  function setView(view) {
    state.view = view;
    if (KNOWN_VIEWS.has(view) && location.hash !== `#${view}`) {
      history.replaceState(null, "", `#${view}`);
    }
    render();
  }

  function render() {
    syncNav();
    const footerMeta = document.querySelector("#footerMeta");
    if (footerMeta) {
      footerMeta.textContent = `生成时间 ${data.generatedAt} · 数据刷新 ${data.sourceFetch || "未知"}`;
    }

    const renderers = {
      dashboard: renderDashboard,
      daily: renderDaily,
      radar: renderChangeRadar,
      theses: renderThesisTracker,
      "analyst-tracker": renderAnalystTracker,
      delta: renderDelta,
      cockpit: renderCockpit,
      deep: renderDeepResearch,
      themes: renderThemes,
      views: renderViews,
      knowledge: renderKnowledge,
      reports: renderReports,
      analysts: renderAnalysts,
    };

    (renderers[state.view] || renderDashboard)(context);
    if (pendingAnchor) {
      const anchor = pendingAnchor;
      pendingAnchor = "";
      requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
    document.querySelectorAll("#app [data-view]").forEach((button) => {
      button.addEventListener("click", () => setView(button.dataset.view));
    });
  }

  navButtons.forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
  searchInput?.addEventListener("input", (event) => {
    state.query = event.target.value;
    state.view = "reports";
    if (location.hash !== "#reports") history.replaceState(null, "", "#reports");
    render();
  });
  window.addEventListener("hashchange", () => {
    const next = resolveHash(location.hash);
    if (next.view !== state.view || next.anchor) {
      state.view = next.view;
      pendingAnchor = next.anchor;
      render();
    }
  });
  render();
}
