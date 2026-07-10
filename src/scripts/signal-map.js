import L from "leaflet";
import "leaflet/dist/leaflet.css";

const TILE_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';
const TILES = {
  dark: "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
  light: "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
};

const ACCENTS = ["#2f80ed", "#169b62", "#d64545", "#d7a316", "#e46f2e"];

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function popupHtml(item) {
  const link = item.href || "/investor/daily/";
  return `<div class="signal-map-popup">
    <strong>${item.label || "Research chain"}</strong>
    <span>Heat ${item.heat ?? "-"} · Today ${item.latest ?? "-"} · Risk ${item.risk ?? "-"}</span>
    ${item.evidenceTitle ? `<em>${item.evidenceTitle}</em>` : ""}
    <a href="${link}">Open evidence</a>
  </div>`;
}

function markerRadius(item, maxHeat) {
  const heat = Number(item.heat || item.latest || 1);
  const ratio = maxHeat > 0 ? heat / maxHeat : 0.25;
  return Math.max(7, Math.min(18, 7 + ratio * 13));
}

export function mountSignalMap(container, items = [], options = {}) {
  if (!container) return null;
  if (container.__signalMap) {
    container.__signalMap.remove();
    container.__signalMap = null;
  }

  const theme = currentTheme();
  const map = L.map(container, {
    attributionControl: false,
    zoomControl: false,
    scrollWheelZoom: false,
    dragging: true,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: true,
    worldCopyJump: true,
  });

  L.tileLayer(TILES[theme], {
    attribution: TILE_ATTRIBUTION,
    subdomains: "abcd",
    maxZoom: 8,
  }).addTo(map);

  if (options.controls !== false) {
    L.control.zoom({ position: "bottomright" }).addTo(map);
    L.control.attribution({ position: "bottomleft", prefix: false }).addTo(map);
  }

  const validItems = items.filter((item) => Array.isArray(item.coords) && item.coords.length === 2);
  const maxHeat = Math.max(1, ...validItems.map((item) => Number(item.heat || item.latest || 0)));
  const markers = validItems.map((item, index) => {
    const accent = item.accent || ACCENTS[index % ACCENTS.length];
    const marker = L.circleMarker(item.coords, {
      radius: markerRadius(item, maxHeat),
      color: accent,
      weight: 2,
      opacity: 0.95,
      fillColor: accent,
      fillOpacity: theme === "light" ? 0.22 : 0.34,
      pane: "markerPane",
    });
    marker.bindPopup(popupHtml(item), {
      closeButton: false,
      autoPanPadding: [16, 16],
      className: "signal-map-popup-shell",
    });
    marker.addTo(map);
    marker.on("click", () => {
      if (item.href) {
        marker.openPopup();
      }
    });
    return marker;
  });

  if (markers.length) {
    const bounds = L.featureGroup(markers).getBounds().pad(0.35);
    map.fitBounds(bounds, { maxZoom: options.maxZoom || 3 });
  } else {
    map.setView([25, 0], 2);
  }

  setTimeout(() => map.invalidateSize(), 80);
  container.__signalMap = map;
  return map;
}
