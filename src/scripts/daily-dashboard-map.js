import { mountSignalMap } from "./signal-map.js";

function readDailyDashboardMapData() {
  const source = document.getElementById("daily-dashboard-map-data");
  if (!source?.textContent) return [];
  try {
    return JSON.parse(source.textContent);
  } catch {
    return [];
  }
}

function renderDailyDashboardMap() {
  mountSignalMap(document.getElementById("dailyDashboardMap"), readDailyDashboardMapData(), { maxZoom: 3 });
}

renderDailyDashboardMap();
window.addEventListener("theme-change", renderDailyDashboardMap);
