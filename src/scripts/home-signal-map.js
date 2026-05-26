import { mountSignalMap } from "./signal-map.js";

function readHomeMapData() {
  const source = document.getElementById("home-signal-map-data");
  if (!source?.textContent) return [];
  try {
    return JSON.parse(source.textContent);
  } catch {
    return [];
  }
}

function renderHomeSignalMap() {
  const container = document.getElementById("homeSignalMap");
  mountSignalMap(container, readHomeMapData(), { maxZoom: 3 });
}

renderHomeSignalMap();
window.addEventListener("theme-change", renderHomeSignalMap);
