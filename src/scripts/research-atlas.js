const mounted = new WeakSet();
const WORLD_ASPECT = 1.52;
const TYPE_ORDER = { thesis: 0, stock: 1, term: 2, event: 3 };
const TYPE_LABEL = { thesis: "Thesis", stock: "Stock", term: "Term", event: "Evidence" };
const DIRECTION_LABEL = {
  strengthening: "增强",
  conflicting: "分歧",
  weakening: "减弱",
  stable: "稳定",
};

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function decodeRows(fields, rows) {
  return (rows || []).map((row) => Object.fromEntries(fields.map((field, index) => [field, row[index]])));
}

function truncate(value, length = 34) {
  const text = String(value || "");
  return text.length > length ? `${text.slice(0, Math.max(1, length - 1))}…` : text;
}

function mountOne(root) {
  if (mounted.has(root)) return;
  mounted.add(root);

  const endpoint = root.dataset.endpoint;
  const canvas = root.querySelector("#atlasCanvas");
  const minimap = root.querySelector("#atlasMinimap");
  const panel = root.querySelector("#atlasMapPanel");
  const inspector = root.querySelector("#atlasInspector");
  const tooltip = root.querySelector("#atlasTooltip");
  const loading = root.querySelector("#atlasLoading");
  const input = root.querySelector("#networkSearch");
  const results = root.querySelector("#atlasSearchResults");
  if (!endpoint || !canvas || !panel || !inspector) return;

  const ctx = canvas.getContext("2d");
  const miniCtx = minimap?.getContext("2d");
  const defaultInspector = inspector.innerHTML;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const state = {
    data: null,
    nodes: [],
    lanes: [],
    edges: [],
    nodeById: new Map(),
    laneById: new Map(),
    adjacency: new Map(),
    directionsByNode: new Map(),
    enabledTypes: new Set(["thesis", "stock", "term", "event"]),
    lane: "",
    direction: "",
    minScore: 0,
    query: "",
    searchMatches: new Set(),
    searchRelations: new Set(),
    selectedId: "",
    selectedLane: "",
    relatedIds: new Set(),
    brushedIds: new Set(),
    hoveredId: "",
    showLinks: false,
    mode: "navigate",
    zoom: 1,
    panX: 0,
    panY: 0,
    dragging: false,
    moved: false,
    pointerStart: null,
    lastPointer: null,
    brush: null,
    cssWidth: 0,
    cssHeight: 0,
    dpr: 1,
    baseScale: 1,
    drawQueued: false,
    colors: {},
  };

  function readColors() {
    const styles = getComputedStyle(root);
    const read = (name, fallback) => styles.getPropertyValue(name).trim() || fallback;
    state.colors = {
      bg: read("--atlas-surface", "#111111"),
      panel: read("--atlas-bg", "#080808"),
      ink: read("--atlas-ink", "#f4f4f4"),
      muted: read("--atlas-muted", "#9b9b9b"),
      line: read("--atlas-line", "#343434"),
      strong: read("--atlas-strong", "#666666"),
      blue: read("--atlas-blue", "#4d8cff"),
      green: read("--atlas-green", "#36b37e"),
      red: read("--atlas-red", "#ff5b57"),
      yellow: read("--atlas-yellow", "#f2c94c"),
      orange: read("--atlas-orange", "#f2994a"),
      font: read("--font-sans", "system-ui, sans-serif"),
      mono: read("--font-mono", "ui-monospace, monospace"),
    };
  }

  function metrics() {
    state.baseScale = Math.min(state.cssWidth / WORLD_ASPECT, state.cssHeight) * 0.92;
    return state.baseScale;
  }

  function worldToScreen(x, y) {
    const scale = metrics();
    return {
      x: state.cssWidth / 2 + (x - 0.5) * scale * WORLD_ASPECT * state.zoom + state.panX,
      y: state.cssHeight / 2 + (y - 0.5) * scale * state.zoom + state.panY,
    };
  }

  function screenToWorld(x, y) {
    const scale = metrics();
    return {
      x: 0.5 + (x - state.cssWidth / 2 - state.panX) / (scale * WORLD_ASPECT * state.zoom),
      y: 0.5 + (y - state.cssHeight / 2 - state.panY) / (scale * state.zoom),
    };
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));
    if (width === state.cssWidth && height === state.cssHeight && dpr === state.dpr) return;
    state.cssWidth = width;
    state.cssHeight = height;
    state.dpr = dpr;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    requestDraw();
  }

  function passesFilter(node) {
    if (!state.enabledTypes.has(node.type)) return false;
    if (state.lane && !(node.laneIds || []).includes(state.lane) && node.primaryLane !== state.lane) return false;
    if (state.direction && !(state.directionsByNode.get(node.id) || new Set()).has(state.direction)) return false;
    if (Number(node.score || 0) < state.minScore) return false;
    return true;
  }

  function visibleNodes() {
    return state.nodes.filter(passesFilter);
  }

  function isHighlighted(node) {
    if (state.brushedIds.size) return state.brushedIds.has(node.id);
    if (state.selectedId) return node.id === state.selectedId || state.relatedIds.has(node.id);
    if (state.query) return state.searchMatches.has(node.id) || state.searchRelations.has(node.id);
    return true;
  }

  function nodeColor(node) {
    if (node.type === "thesis") return state.colors.yellow;
    if (node.type === "stock") return state.colors.orange;
    if (node.type === "term") return state.colors.blue;
    return node.support === "risk" || node.support === "challenged_by" ? state.colors.red : state.colors.green;
  }

  function drawGrid() {
    ctx.save();
    ctx.strokeStyle = state.colors.line;
    ctx.globalAlpha = 0.22;
    ctx.lineWidth = 1;
    for (let index = 0; index <= 10; index += 1) {
      const a = worldToScreen(index / 10, 0);
      const b = worldToScreen(index / 10, 1);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
      const c = worldToScreen(0, index / 10);
      const d = worldToScreen(1, index / 10);
      ctx.beginPath();
      ctx.moveTo(c.x, c.y);
      ctx.lineTo(d.x, d.y);
      ctx.stroke();
    }
    ctx.restore();
  }

  function visibleLane(lane) {
    if (state.lane && state.lane !== lane.id) return false;
    return true;
  }

  function drawContours() {
    const ordered = state.lanes
      .filter(visibleLane)
      .sort((a, b) => Number(b.evidenceCount || 0) - Number(a.evidenceCount || 0));
    for (const lane of ordered) {
      const point = worldToScreen(lane.x, lane.y);
      const scale = metrics() * state.zoom;
      const rx = lane.rx * scale * WORLD_ASPECT;
      const ry = lane.ry * scale;
      const active = state.selectedLane === lane.id || state.lane === lane.id;
      ctx.save();
      ctx.translate(point.x, point.y);
      ctx.rotate(((lane.id.charCodeAt(lane.id.length - 1) || 0) % 7 - 3) * 0.035);
      ctx.strokeStyle = active ? state.colors.blue : state.colors.line;
      ctx.fillStyle = active ? state.colors.blue : state.colors.ink;
      for (const factor of [1, 0.72, 0.46]) {
        ctx.beginPath();
        ctx.ellipse(0, 0, Math.max(4, rx * factor), Math.max(3, ry * factor), 0, 0, Math.PI * 2);
        ctx.globalAlpha = active ? 0.06 : 0.018;
        if (factor === 1) ctx.fill();
        ctx.globalAlpha = active ? 0.34 : 0.13;
        ctx.lineWidth = active ? 1.4 : 0.8;
        ctx.stroke();
      }
      ctx.restore();
    }
  }

  function drawLaneLabels() {
    const maxLabels = state.zoom > 1.7 ? 42 : state.zoom > 1.15 ? 28 : 17;
    const labels = state.lanes
      .filter(visibleLane)
      .sort((a, b) => {
        if (a.id === state.selectedLane || a.id === state.lane) return -1;
        if (b.id === state.selectedLane || b.id === state.lane) return 1;
        return Number(b.evidenceCount || 0) - Number(a.evidenceCount || 0);
      })
      .slice(0, maxLabels);
    const boxes = [];
    ctx.save();
    ctx.font = `800 ${state.zoom > 1.4 ? 12 : 11}px ${state.colors.font}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (const lane of labels) {
      const point = worldToScreen(lane.x, lane.y);
      const label = truncate(lane.label, state.zoom > 1.5 ? 30 : 18);
      const width = ctx.measureText(label).width + 12;
      const box = { x: point.x - width / 2, y: point.y - 11, width, height: 22 };
      const active = lane.id === state.selectedLane || lane.id === state.lane;
      if (!active && boxes.some((other) => box.x < other.x + other.width && box.x + box.width > other.x && box.y < other.y + other.height && box.y + box.height > other.y)) continue;
      boxes.push(box);
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = state.colors.panel;
      ctx.fillRect(box.x, box.y, box.width, box.height);
      ctx.strokeStyle = active ? state.colors.blue : state.colors.line;
      ctx.globalAlpha = active ? 0.9 : 0.7;
      ctx.strokeRect(box.x + 0.5, box.y + 0.5, box.width - 1, box.height - 1);
      ctx.fillStyle = active ? state.colors.blue : state.colors.ink;
      ctx.globalAlpha = 1;
      ctx.fillText(label, point.x, point.y);
    }
    ctx.restore();
  }

  function drawEdge(edge, emphasized = false) {
    const source = state.nodeById.get(edge.source);
    const target = state.nodeById.get(edge.target);
    if (!source || !target || !passesFilter(source) || !passesFilter(target)) return;
    const a = worldToScreen(source.x, source.y);
    const b = worldToScreen(target.x, target.y);
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    if (edge.type === "challenged_by") ctx.strokeStyle = state.colors.red;
    else if (edge.type === "supported_by") ctx.strokeStyle = state.colors.green;
    else ctx.strokeStyle = emphasized ? state.colors.ink : state.colors.line;
    ctx.globalAlpha = emphasized ? 0.64 : 0.12;
    ctx.lineWidth = emphasized ? 1.35 : 0.65;
    ctx.stroke();
  }

  function drawEdges() {
    ctx.save();
    if (state.showLinks && !state.selectedId) {
      for (const edge of state.edges) drawEdge(edge, false);
    }
    if (state.selectedId) {
      for (const row of state.adjacency.get(state.selectedId) || []) drawEdge(row.edge, true);
    }
    ctx.restore();
  }

  function drawMark(node, point, highlighted) {
    const scoreScale = node.type === "thesis" ? clamp(Number(node.score || 0) / 100, 0.35, 1) : 0.6;
    const base = { thesis: 5.1 + scoreScale * 2.1, stock: 4.1, term: 3.1, event: 2.15 }[node.type] || 2.5;
    const radius = clamp(base * Math.sqrt(state.zoom), base * 0.82, base * 1.75);
    const selected = node.id === state.selectedId || state.brushedIds.has(node.id);
    const hovered = node.id === state.hoveredId;
    ctx.save();
    ctx.translate(point.x, point.y);
    ctx.fillStyle = nodeColor(node);
    ctx.globalAlpha = highlighted ? (node.type === "event" ? 0.78 : 0.94) : 0.09;
    ctx.beginPath();
    if (node.type === "thesis") {
      ctx.rect(-radius, -radius, radius * 2, radius * 2);
    } else if (node.type === "stock") {
      ctx.moveTo(0, -radius * 1.18);
      ctx.lineTo(radius * 1.05, 0);
      ctx.lineTo(0, radius * 1.18);
      ctx.lineTo(-radius * 1.05, 0);
      ctx.closePath();
    } else {
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
    }
    ctx.fill();
    if (selected || hovered) {
      ctx.globalAlpha = 1;
      ctx.strokeStyle = selected ? state.colors.ink : nodeColor(node);
      ctx.lineWidth = selected ? 2.2 : 1.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.strokeStyle = nodeColor(node);
      ctx.globalAlpha = selected ? 0.55 : 0.35;
      ctx.lineWidth = 1;
      ctx.arc(0, 0, radius + (selected ? 7 : 4), 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawNodes() {
    const rows = visibleNodes().sort((a, b) => (TYPE_ORDER[b.type] ?? 9) - (TYPE_ORDER[a.type] ?? 9));
    for (const node of rows) drawMark(node, worldToScreen(node.x, node.y), isHighlighted(node));
    const labeled = [state.selectedId, state.hoveredId]
      .filter(Boolean)
      .map((id) => state.nodeById.get(id))
      .filter(Boolean);
    ctx.save();
    ctx.font = `800 12px ${state.colors.font}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    for (const node of labeled) {
      const point = worldToScreen(node.x, node.y);
      const label = truncate(node.name ? `${node.label} · ${node.name}` : node.label, 34);
      const width = Math.min(300, ctx.measureText(label).width + 12);
      const x = clamp(point.x - width / 2, 4, Math.max(4, state.cssWidth - width - 4));
      const y = clamp(point.y - 31, 4, state.cssHeight - 26);
      ctx.globalAlpha = 0.96;
      ctx.fillStyle = state.colors.panel;
      ctx.fillRect(x, y, width, 22);
      ctx.strokeStyle = nodeColor(node);
      ctx.lineWidth = 1;
      ctx.strokeRect(x + 0.5, y + 0.5, width - 1, 21);
      ctx.fillStyle = state.colors.ink;
      ctx.fillText(label, x + width / 2, y + 17);
    }
    ctx.restore();
  }

  function drawBrush() {
    if (!state.brush) return;
    const x = Math.min(state.brush.x1, state.brush.x2);
    const y = Math.min(state.brush.y1, state.brush.y2);
    const width = Math.abs(state.brush.x2 - state.brush.x1);
    const height = Math.abs(state.brush.y2 - state.brush.y1);
    ctx.save();
    ctx.fillStyle = state.colors.blue;
    ctx.strokeStyle = state.colors.blue;
    ctx.globalAlpha = 0.1;
    ctx.fillRect(x, y, width, height);
    ctx.globalAlpha = 0.9;
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 4]);
    ctx.strokeRect(x + 0.5, y + 0.5, width - 1, height - 1);
    ctx.restore();
  }

  function drawMinimap() {
    if (!miniCtx || !minimap) return;
    const width = minimap.width;
    const height = minimap.height;
    miniCtx.clearRect(0, 0, width, height);
    miniCtx.fillStyle = state.colors.panel;
    miniCtx.fillRect(0, 0, width, height);
    for (const lane of state.lanes) {
      miniCtx.beginPath();
      miniCtx.fillStyle = lane.id === state.lane || lane.id === state.selectedLane ? state.colors.blue : state.colors.line;
      miniCtx.globalAlpha = lane.id === state.lane || lane.id === state.selectedLane ? 0.42 : 0.2;
      miniCtx.ellipse(lane.x * width, lane.y * height, Math.max(2, lane.rx * width), Math.max(2, lane.ry * height), 0, 0, Math.PI * 2);
      miniCtx.fill();
    }
    for (const node of state.nodes) {
      if (!passesFilter(node)) continue;
      miniCtx.fillStyle = nodeColor(node);
      miniCtx.globalAlpha = isHighlighted(node) ? 0.72 : 0.12;
      miniCtx.fillRect(node.x * width - 0.7, node.y * height - 0.7, 1.4, 1.4);
    }
    const topLeft = screenToWorld(0, 0);
    const bottomRight = screenToWorld(state.cssWidth, state.cssHeight);
    const x = clamp(topLeft.x, 0, 1) * width;
    const y = clamp(topLeft.y, 0, 1) * height;
    const rectWidth = (clamp(bottomRight.x, 0, 1) - clamp(topLeft.x, 0, 1)) * width;
    const rectHeight = (clamp(bottomRight.y, 0, 1) - clamp(topLeft.y, 0, 1)) * height;
    miniCtx.globalAlpha = 0.9;
    miniCtx.strokeStyle = state.colors.ink;
    miniCtx.lineWidth = 1;
    miniCtx.strokeRect(x + 0.5, y + 0.5, Math.max(2, rectWidth - 1), Math.max(2, rectHeight - 1));
    miniCtx.globalAlpha = 1;
  }

  function draw() {
    state.drawQueued = false;
    resize();
    if (!state.data || !state.cssWidth || !state.cssHeight) return;
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    ctx.clearRect(0, 0, state.cssWidth, state.cssHeight);
    ctx.fillStyle = state.colors.bg;
    ctx.fillRect(0, 0, state.cssWidth, state.cssHeight);
    drawGrid();
    drawContours();
    drawEdges();
    drawLaneLabels();
    drawNodes();
    drawBrush();
    drawMinimap();
  }

  function requestDraw() {
    if (state.drawQueued) return;
    state.drawQueued = true;
    requestAnimationFrame(draw);
  }

  function hitNode(x, y) {
    let winner = null;
    let best = 13;
    for (const node of state.nodes) {
      if (!passesFilter(node)) continue;
      const point = worldToScreen(node.x, node.y);
      const distance = Math.hypot(point.x - x, point.y - y);
      const threshold = node.type === "thesis" ? 13 : node.type === "stock" ? 10 : 8;
      if (distance <= threshold && distance < best) {
        winner = node;
        best = distance;
      }
    }
    return winner;
  }

  function hitLane(x, y) {
    let winner = null;
    let best = 30;
    for (const lane of state.lanes.filter(visibleLane)) {
      const point = worldToScreen(lane.x, lane.y);
      const distance = Math.hypot(point.x - x, point.y - y);
      if (distance < best) {
        winner = lane;
        best = distance;
      }
    }
    return winner;
  }

  function pointerPoint(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  function relationRows(node) {
    return (state.adjacency.get(node.id) || [])
      .map((row) => ({ ...row, node: state.nodeById.get(row.id) }))
      .filter((row) => row.node)
      .sort((a, b) => Number(b.edge.weight || 0) - Number(a.edge.weight || 0) || Number(b.node.degree || 0) - Number(a.node.degree || 0));
  }

  function setRelated(node) {
    state.relatedIds = new Set((state.adjacency.get(node.id) || []).map((row) => row.id));
  }

  function laneLabel(node) {
    return state.laneById.get(node.primaryLane)?.label || "未分类赛道";
  }

  function renderNodeInspector(node) {
    const relations = relationRows(node);
    const relatedTypes = relations.reduce((acc, row) => {
      acc[row.node.type] = (acc[row.node.type] || 0) + 1;
      return acc;
    }, {});
    const copy = node.role || node.source || node.action || node.bucket || (node.type === "term" ? "跨主线研究术语" : "公开研究节点");
    const tags = [TYPE_LABEL[node.type], laneLabel(node), node.direction ? DIRECTION_LABEL[node.direction] || node.direction : "", node.market, node.support === "risk" ? "Risk" : node.support ? "Support" : ""]
      .filter(Boolean)
      .map((tag) => `<span>${escapeHtml(tag)}</span>`)
      .join("");
    const metrics = [
      [node.score ? Math.round(node.score) : "—", "强度"],
      [node.degree || 0, "直接关系"],
      [relatedTypes.stock || 0, "关联标的"],
      [relatedTypes.event || 0, "证据事件"],
    ];
    inspector.innerHTML = `
      <section>
        <span class="atlas-detail-kicker">${escapeHtml(TYPE_LABEL[node.type] || node.type)} / ${escapeHtml(node.id)}</span>
        <h3>${escapeHtml(node.name ? `${node.label} · ${node.name}` : node.label)}</h3>
        <div class="atlas-detail-tags">${tags}</div>
        <div class="atlas-detail-metrics">${metrics.map(([value, label]) => `<div><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join("")}</div>
        <p class="atlas-detail-copy">${escapeHtml(copy)}</p>
        <div class="atlas-detail-actions">
          ${node.href ? `<a href="${escapeHtml(node.href)}">打开节点</a>` : ""}
          <button type="button" data-atlas-focus="${escapeHtml(node.id)}">聚焦</button>
        </div>
      </section>
      <section>
        <div class="atlas-panel-title"><span>Graph Neighbors</span><strong>${relations.length} 关联</strong></div>
        <div class="atlas-relation-list">
          ${relations.slice(0, 14).map((row) => `<button type="button" data-atlas-node="${escapeHtml(row.node.id)}"><span>${escapeHtml(TYPE_LABEL[row.node.type] || row.edge.type)}</span><strong>${escapeHtml(truncate(row.node.name ? `${row.node.label} · ${row.node.name}` : row.node.label, 56))}</strong></button>`).join("")}
        </div>
      </section>`;
  }

  function renderLaneInspector(lane) {
    const nodes = state.nodes
      .filter((node) => node.primaryLane === lane.id || (node.laneIds || []).includes(lane.id))
      .sort((a, b) => Number(b.score || 0) - Number(a.score || 0) || Number(b.degree || 0) - Number(a.degree || 0));
    inspector.innerHTML = `
      <section>
        <span class="atlas-detail-kicker">Dense Region / ${escapeHtml(lane.slug)}</span>
        <h3>${escapeHtml(lane.label)}</h3>
        <div class="atlas-detail-tags"><span>${escapeHtml(lane.labelEn || "Research lane")}</span><span>${escapeHtml(lane.lastSeen || "")}</span></div>
        <div class="atlas-detail-metrics">
          <div><strong>${lane.thesisCount}</strong><span>主线</span></div>
          <div><strong>${lane.stockCount}</strong><span>标的</span></div>
          <div><strong>${lane.nodeCount}</strong><span>图谱节点</span></div>
          <div><strong>${lane.evidenceCount}</strong><span>研究证据</span></div>
        </div>
        <div class="atlas-detail-actions">
          <a href="${escapeHtml(lane.href)}">打开赛道</a>
          <button type="button" data-atlas-lane-focus="${escapeHtml(lane.id)}">聚焦</button>
        </div>
      </section>
      <section>
        <div class="atlas-panel-title"><span>Region Leaders</span><strong>${nodes.length} nodes</strong></div>
        <div class="atlas-relation-list">
          ${nodes.slice(0, 14).map((node) => `<button type="button" data-atlas-node="${escapeHtml(node.id)}"><span>${escapeHtml(TYPE_LABEL[node.type])}</span><strong>${escapeHtml(truncate(node.name ? `${node.label} · ${node.name}` : node.label, 56))}</strong></button>`).join("")}
        </div>
      </section>`;
  }

  function renderBrushInspector() {
    const nodes = [...state.brushedIds].map((id) => state.nodeById.get(id)).filter(Boolean);
    const typeCounts = nodes.reduce((acc, node) => {
      acc[node.type] = (acc[node.type] || 0) + 1;
      return acc;
    }, {});
    const laneCounts = nodes.reduce((acc, node) => {
      if (node.primaryLane) acc.set(node.primaryLane, (acc.get(node.primaryLane) || 0) + 1);
      return acc;
    }, new Map());
    const topLanes = [...laneCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
    inspector.innerHTML = `
      <section>
        <span class="atlas-detail-kicker">Region Selection</span>
        <h3>${nodes.length} 个节点</h3>
        <div class="atlas-detail-metrics">
          <div><strong>${typeCounts.thesis || 0}</strong><span>主线</span></div>
          <div><strong>${typeCounts.stock || 0}</strong><span>标的</span></div>
          <div><strong>${typeCounts.term || 0}</strong><span>术语</span></div>
          <div><strong>${typeCounts.event || 0}</strong><span>证据</span></div>
        </div>
      </section>
      <section>
        <div class="atlas-panel-title"><span>Dominant Lanes</span><strong>${laneCounts.size} lanes</strong></div>
        <div class="atlas-relation-list">
          ${topLanes.map(([laneId, count]) => {
            const lane = state.laneById.get(laneId);
            return lane ? `<button type="button" data-atlas-lane="${escapeHtml(lane.id)}"><span>${count} nodes</span><strong>${escapeHtml(lane.label)}</strong></button>` : "";
          }).join("")}
        </div>
      </section>
      <section>
        <div class="atlas-panel-title"><span>Selected Nodes</span><strong>Top ${Math.min(12, nodes.length)}</strong></div>
        <div class="atlas-relation-list">
          ${nodes.sort((a, b) => Number(b.score || 0) - Number(a.score || 0) || Number(b.degree || 0) - Number(a.degree || 0)).slice(0, 12).map((node) => `<button type="button" data-atlas-node="${escapeHtml(node.id)}"><span>${escapeHtml(TYPE_LABEL[node.type])}</span><strong>${escapeHtml(truncate(node.name ? `${node.label} · ${node.name}` : node.label, 56))}</strong></button>`).join("")}
        </div>
      </section>`;
  }

  function updateSelectionText() {
    const label = root.querySelector("#atlasSelectionCount");
    if (!label) return;
    if (state.brushedIds.size) label.textContent = `${state.brushedIds.size} SELECTED`;
    else if (state.selectedId) label.textContent = "1 NODE / LOCAL GRAPH";
    else if (state.lane || state.selectedLane) label.textContent = `${state.laneById.get(state.lane || state.selectedLane)?.label || "LANE"}`;
    else label.textContent = "ALL NODES";
  }

  function selectNode(node, focus = false) {
    if (!node) return;
    state.selectedId = node.id;
    state.selectedLane = node.primaryLane || "";
    state.brushedIds.clear();
    setRelated(node);
    renderNodeInspector(node);
    updateSelectionText();
    if (focus) focusPoint(node.x, node.y, Math.max(2.2, state.zoom));
    requestDraw();
  }

  function selectLane(lane, filter = true, focus = false) {
    if (!lane) return;
    state.selectedLane = lane.id;
    state.selectedId = "";
    state.relatedIds.clear();
    state.brushedIds.clear();
    if (filter) {
      state.lane = lane.id;
      const select = root.querySelector("#atlasLaneFilter");
      if (select) select.value = state.lane;
    }
    renderLaneInspector(lane);
    updateFilters();
    if (focus) focusPoint(lane.x, lane.y, Math.max(1.75, state.zoom));
  }

  function clearSelection(restoreFilters = false) {
    state.selectedId = "";
    state.selectedLane = "";
    state.relatedIds.clear();
    state.brushedIds.clear();
    state.brush = null;
    if (restoreFilters) {
      state.lane = "";
      const laneSelect = root.querySelector("#atlasLaneFilter");
      if (laneSelect) laneSelect.value = "";
    }
    inspector.innerHTML = defaultInspector;
    populateOverview();
    updateSelectionText();
    updateLaneButtons();
    requestDraw();
  }

  function focusPoint(x, y, targetZoom = 2.4) {
    const start = { zoom: state.zoom, panX: state.panX, panY: state.panY };
    const scale = metrics();
    const end = {
      zoom: clamp(targetZoom, 0.7, 6),
      panX: -(x - 0.5) * scale * WORLD_ASPECT * clamp(targetZoom, 0.7, 6),
      panY: -(y - 0.5) * scale * clamp(targetZoom, 0.7, 6),
    };
    if (reducedMotion) {
      Object.assign(state, end);
      updateZoomLabel();
      requestDraw();
      return;
    }
    const started = performance.now();
    const duration = 360;
    const animate = (time) => {
      const progress = clamp((time - started) / duration, 0, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      state.zoom = start.zoom + (end.zoom - start.zoom) * eased;
      state.panX = start.panX + (end.panX - start.panX) * eased;
      state.panY = start.panY + (end.panY - start.panY) * eased;
      updateZoomLabel();
      requestDraw();
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  function fit() {
    state.zoom = 1;
    state.panX = 0;
    state.panY = 0;
    updateZoomLabel();
    requestDraw();
  }

  function updateZoomLabel() {
    const label = root.querySelector("#atlasZoomValue");
    if (label) label.textContent = `${Math.round(state.zoom * 100)}%`;
  }

  function updateLaneButtons() {
    root.querySelectorAll("[data-atlas-lane-rank]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.atlasLaneRank === state.lane || button.dataset.atlasLaneRank === state.selectedLane);
    });
  }

  function updateVisibleCount() {
    const count = visibleNodes().length;
    const label = root.querySelector("#atlasVisibleCount");
    if (label) label.textContent = count.toLocaleString();
    const context = root.querySelector("#atlasContext");
    if (context) {
      const query = state.query ? ` · QUERY ${state.searchMatches.size}` : "";
      context.textContent = `${count.toLocaleString()} / ${state.nodes.length.toLocaleString()} NODES · ${state.edges.length.toLocaleString()} EDGES${query}`;
    }
  }

  function updateFilters() {
    updateVisibleCount();
    updateLaneButtons();
    updateSelectionText();
    requestDraw();
  }

  function populateOverview() {
    if (!state.data) return;
    const stats = state.data.stats || {};
    const set = (selector, value) => {
      const element = root.querySelector(selector);
      if (element) element.textContent = value;
    };
    set("#atlasOverviewLanes", Number(stats.lanes || 0).toLocaleString());
    set("#atlasOverviewNodes", Number(stats.nodes || 0).toLocaleString());
    set("#atlasOverviewEdges", Number(stats.edges || 0).toLocaleString());
    const first = stats.dateRange?.first?.slice(0, 4) || "—";
    const last = stats.dateRange?.last?.slice(0, 4) || "—";
    set("#atlasOverviewDates", first === last ? first : `${first}–${last}`);
    const evidence = stats.evidenceCounts || {};
    const total = Math.max(1, Number(evidence.support || 0) + Number(evidence.risk || 0));
    const balance = root.querySelector("#atlasEvidenceBalance");
    if (balance) {
      balance.innerHTML = `
        <div class="atlas-balance-head"><span>支持 ${Number(evidence.support || 0).toLocaleString()}</span><span>风险 ${Number(evidence.risk || 0).toLocaleString()}</span></div>
        <div class="atlas-balance-bar"><i class="support" style="width:${(Number(evidence.support || 0) / total) * 100}%"></i><i class="risk" style="width:${(Number(evidence.risk || 0) / total) * 100}%"></i></div>`;
    }
    const list = root.querySelector("#atlasOverviewList");
    if (list) {
      list.innerHTML = state.lanes.slice(0, 8).map((lane) => `<button type="button" data-atlas-lane="${escapeHtml(lane.id)}"><span>${lane.evidenceCount} evidence</span><strong>${escapeHtml(lane.label)}</strong></button>`).join("");
    }
  }

  function populateControls() {
    const stats = state.data.stats || {};
    const counts = stats.nodeCounts || {};
    const ids = { thesis: "#atlasTypeThesis", stock: "#atlasTypeStock", term: "#atlasTypeTerm", event: "#atlasTypeEvent" };
    for (const [type, selector] of Object.entries(ids)) {
      const element = root.querySelector(selector);
      if (element) element.textContent = Number(counts[type] || 0).toLocaleString();
    }
    const laneSelect = root.querySelector("#atlasLaneFilter");
    if (laneSelect) {
      laneSelect.insertAdjacentHTML("beforeend", state.lanes.map((lane) => `<option value="${escapeHtml(lane.id)}">${escapeHtml(lane.label)} · ${lane.thesisCount}</option>`).join(""));
    }
    const laneList = root.querySelector("#atlasLaneList");
    if (laneList) {
      const maxEvidence = Math.max(1, ...state.lanes.map((lane) => Number(lane.evidenceCount || 0)));
      laneList.innerHTML = state.lanes.slice(0, 13).map((lane) => `<button type="button" data-atlas-lane-rank="${escapeHtml(lane.id)}" style="--lane-heat:${Math.max(4, Number(lane.evidenceCount || 0) / maxEvidence * 100)}%"><span>${escapeHtml(lane.label)}</span><strong>${lane.nodeCount}</strong></button>`).join("");
    }
  }

  function updateSearch() {
    state.query = String(input?.value || "").trim().toLowerCase();
    const matches = state.query
      ? state.nodes.filter((node) => {
        const lane = state.laneById.get(node.primaryLane)?.label || "";
        const haystack = `${node.label} ${node.name} ${node.market} ${node.role} ${node.bucket} ${node.action} ${node.source} ${lane}`.toLowerCase();
        return haystack.includes(state.query);
      })
      : [];
    state.searchMatches = new Set(matches.map((node) => node.id));
    state.searchRelations = new Set(matches.flatMap((node) => (state.adjacency.get(node.id) || []).map((row) => row.id)));
    if (results) {
      if (!state.query) {
        results.hidden = true;
        results.innerHTML = "";
      } else {
        const ordered = matches
          .sort((a, b) => (TYPE_ORDER[a.type] ?? 9) - (TYPE_ORDER[b.type] ?? 9) || Number(b.degree || 0) - Number(a.degree || 0))
          .slice(0, 10);
        results.innerHTML = ordered.length
          ? ordered.map((node) => `<button type="button" data-atlas-search-node="${escapeHtml(node.id)}"><span>${escapeHtml(TYPE_LABEL[node.type])}</span><strong>${escapeHtml(truncate(node.name ? `${node.label} · ${node.name}` : node.label, 64))}</strong></button>`).join("")
          : `<button type="button" disabled><span>0 results</span><strong>没有匹配的公开研究节点</strong></button>`;
        results.hidden = false;
      }
    }
    updateVisibleCount();
    requestDraw();
  }

  function selectBrushed() {
    if (!state.brush) return;
    const left = Math.min(state.brush.x1, state.brush.x2);
    const right = Math.max(state.brush.x1, state.brush.x2);
    const top = Math.min(state.brush.y1, state.brush.y2);
    const bottom = Math.max(state.brush.y1, state.brush.y2);
    state.brushedIds = new Set(state.nodes.filter((node) => {
      if (!passesFilter(node)) return false;
      const point = worldToScreen(node.x, node.y);
      return point.x >= left && point.x <= right && point.y >= top && point.y <= bottom;
    }).map((node) => node.id));
    state.selectedId = "";
    state.relatedIds.clear();
    state.selectedLane = "";
    state.brush = null;
    if (state.brushedIds.size) renderBrushInspector();
    else clearSelection(false);
    updateSelectionText();
    requestDraw();
  }

  function showTooltip(node, point) {
    if (!tooltip || !node) return;
    const lane = laneLabel(node);
    tooltip.innerHTML = `<span>${escapeHtml(TYPE_LABEL[node.type])} · ${escapeHtml(lane)}</span><strong>${escapeHtml(node.name ? `${node.label} · ${node.name}` : node.label)}</strong><em>${node.degree || 0} relations${node.date ? ` · ${escapeHtml(node.date)}` : ""}</em>`;
    tooltip.hidden = false;
    const width = 280;
    tooltip.style.left = `${clamp(point.x + 14, 8, Math.max(8, state.cssWidth - width - 8))}px`;
    tooltip.style.top = `${clamp(point.y + 14, 8, Math.max(8, state.cssHeight - 92))}px`;
  }

  function hideTooltip() {
    if (tooltip) tooltip.hidden = true;
  }

  function bindInteractions() {
    input?.addEventListener("input", updateSearch);
    input?.addEventListener("focus", () => { if (state.query && results) results.hidden = false; });
    root.querySelector("#atlasSearchClear")?.addEventListener("click", () => {
      if (input) {
        input.value = "";
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.focus();
      }
    });
    results?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-atlas-search-node]");
      if (!button) return;
      const node = state.nodeById.get(button.dataset.atlasSearchNode);
      if (node) selectNode(node, true);
      results.hidden = true;
    });
    document.addEventListener("pointerdown", (event) => {
      if (results && !results.hidden && !event.target.closest(".atlas-search-box")) results.hidden = true;
    });
    root.querySelectorAll("[data-atlas-type]").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) state.enabledTypes.add(checkbox.value);
        else state.enabledTypes.delete(checkbox.value);
        updateFilters();
      });
    });
    root.querySelector("#atlasLaneFilter")?.addEventListener("change", (event) => {
      state.lane = event.target.value;
      state.selectedLane = state.lane;
      state.selectedId = "";
      state.relatedIds.clear();
      state.brushedIds.clear();
      const lane = state.laneById.get(state.lane);
      if (lane) renderLaneInspector(lane);
      else clearSelection(false);
      updateFilters();
    });
    root.querySelector("#atlasDirectionFilter")?.addEventListener("change", (event) => {
      state.direction = event.target.value;
      updateFilters();
    });
    root.querySelector("#atlasScoreFilter")?.addEventListener("input", (event) => {
      state.minScore = Number(event.target.value || 0);
      const value = root.querySelector("#atlasScoreValue");
      if (value) value.textContent = state.minScore;
      updateFilters();
    });
    root.querySelector("#atlasLinksToggle")?.addEventListener("change", (event) => {
      state.showLinks = event.target.checked;
      requestDraw();
    });
    root.querySelector("#atlasLaneList")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-atlas-lane-rank]");
      if (!button) return;
      selectLane(state.laneById.get(button.dataset.atlasLaneRank), true, true);
    });
    root.querySelectorAll("[data-atlas-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        state.mode = button.dataset.atlasMode;
        root.querySelectorAll("[data-atlas-mode]").forEach((row) => row.classList.toggle("is-active", row === button));
        panel.classList.toggle("is-brush", state.mode === "brush");
        state.brush = null;
        requestDraw();
      });
    });
    root.querySelector("#atlasClearSelection")?.addEventListener("click", () => clearSelection(true));
    root.querySelector("#atlasZoomIn")?.addEventListener("click", () => {
      state.zoom = clamp(state.zoom * 1.22, 0.7, 6);
      updateZoomLabel();
      requestDraw();
    });
    root.querySelector("#atlasZoomOut")?.addEventListener("click", () => {
      state.zoom = clamp(state.zoom / 1.22, 0.7, 6);
      updateZoomLabel();
      requestDraw();
    });
    root.querySelector("#atlasFit")?.addEventListener("click", fit);
    root.querySelector("#atlasFullscreen")?.addEventListener("click", async () => {
      if (document.fullscreenElement === panel) await document.exitFullscreen?.();
      else await panel.requestFullscreen?.();
    });
    inspector.addEventListener("click", (event) => {
      const nodeButton = event.target.closest("[data-atlas-node]");
      const focusButton = event.target.closest("[data-atlas-focus]");
      const laneButton = event.target.closest("[data-atlas-lane]");
      const laneFocus = event.target.closest("[data-atlas-lane-focus]");
      if (nodeButton) selectNode(state.nodeById.get(nodeButton.dataset.atlasNode), false);
      if (focusButton) {
        const node = state.nodeById.get(focusButton.dataset.atlasFocus);
        if (node) focusPoint(node.x, node.y, Math.max(2.4, state.zoom));
      }
      if (laneButton) selectLane(state.laneById.get(laneButton.dataset.atlasLane), true, true);
      if (laneFocus) {
        const lane = state.laneById.get(laneFocus.dataset.atlasLaneFocus);
        if (lane) focusPoint(lane.x, lane.y, Math.max(1.8, state.zoom));
      }
    });
    canvas.addEventListener("wheel", (event) => {
      event.preventDefault();
      const point = pointerPoint(event);
      const world = screenToWorld(point.x, point.y);
      const previous = state.zoom;
      state.zoom = clamp(state.zoom * Math.exp(-event.deltaY * 0.0012), 0.7, 6);
      const scale = metrics();
      state.panX = point.x - state.cssWidth / 2 - (world.x - 0.5) * scale * WORLD_ASPECT * state.zoom;
      state.panY = point.y - state.cssHeight / 2 - (world.y - 0.5) * scale * state.zoom;
      if (previous !== state.zoom) updateZoomLabel();
      requestDraw();
    }, { passive: false });
    canvas.addEventListener("pointerdown", (event) => {
      const point = pointerPoint(event);
      state.dragging = true;
      state.moved = false;
      state.pointerStart = point;
      state.lastPointer = point;
      if (state.mode === "brush") state.brush = { x1: point.x, y1: point.y, x2: point.x, y2: point.y };
      panel.classList.add("is-dragging");
      canvas.setPointerCapture?.(event.pointerId);
    });
    canvas.addEventListener("pointermove", (event) => {
      const point = pointerPoint(event);
      if (state.dragging && state.lastPointer) {
        if (Math.hypot(point.x - state.pointerStart.x, point.y - state.pointerStart.y) > 3) state.moved = true;
        if (state.mode === "brush" && state.brush) {
          state.brush.x2 = point.x;
          state.brush.y2 = point.y;
        } else {
          state.panX += point.x - state.lastPointer.x;
          state.panY += point.y - state.lastPointer.y;
        }
        state.lastPointer = point;
        hideTooltip();
        requestDraw();
        return;
      }
      const node = hitNode(point.x, point.y);
      const next = node?.id || "";
      if (next !== state.hoveredId) {
        state.hoveredId = next;
        if (node) showTooltip(node, point);
        else hideTooltip();
        requestDraw();
      } else if (node) showTooltip(node, point);
    });
    canvas.addEventListener("pointerup", (event) => {
      const point = pointerPoint(event);
      panel.classList.remove("is-dragging");
      if (state.mode === "brush" && state.brush && state.moved) {
        selectBrushed();
      } else if (!state.moved) {
        const node = hitNode(point.x, point.y);
        if (node) selectNode(node, false);
        else {
          const lane = hitLane(point.x, point.y);
          if (lane) selectLane(lane, false, false);
          else clearSelection(false);
        }
      }
      state.dragging = false;
      state.pointerStart = null;
      state.lastPointer = null;
      state.brush = null;
      requestDraw();
    });
    canvas.addEventListener("pointercancel", () => {
      state.dragging = false;
      state.brush = null;
      panel.classList.remove("is-dragging");
      requestDraw();
    });
    canvas.addEventListener("pointerleave", () => {
      if (!state.dragging) {
        state.hoveredId = "";
        hideTooltip();
        requestDraw();
      }
    });
    canvas.addEventListener("dblclick", (event) => {
      const point = pointerPoint(event);
      const node = hitNode(point.x, point.y);
      if (node?.href) window.location.assign(node.href);
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") clearSelection(false);
    });
  }

  async function init() {
    readColors();
    resize();
    bindInteractions();
    try {
      const response = await fetch(endpoint, { headers: { accept: "application/json" } });
      if (!response.ok) throw new Error(`Atlas request failed: ${response.status}`);
      const data = await response.json();
      state.data = data;
      state.lanes = decodeRows(data.fields?.lane || [], data.lanes);
      state.nodes = decodeRows(data.fields?.node || [], data.nodes);
      state.edges = decodeRows(data.fields?.edge || [], data.edges);
      state.nodeById = new Map(state.nodes.map((node) => [node.id, node]));
      state.laneById = new Map(state.lanes.map((lane) => [lane.id, lane]));
      state.adjacency = new Map(state.nodes.map((node) => [node.id, []]));
      for (const edge of state.edges) {
        state.adjacency.get(edge.source)?.push({ id: edge.target, edge });
        state.adjacency.get(edge.target)?.push({ id: edge.source, edge });
      }
      const thesisDirections = new Map(state.nodes.filter((node) => node.type === "thesis").map((node) => [node.id, node.direction]));
      for (const node of state.nodes) {
        const directions = new Set();
        if (node.direction) directions.add(node.direction);
        for (const row of state.adjacency.get(node.id) || []) {
          const direction = thesisDirections.get(row.id);
          if (direction) directions.add(direction);
        }
        state.directionsByNode.set(node.id, directions);
      }
      populateControls();
      populateOverview();
      const initialQuery = new URLSearchParams(window.location.search).get("q") || "";
      if (initialQuery && input) input.value = initialQuery;
      updateSearch();
      updateFilters();
      loading?.classList.add("is-hidden");
      requestDraw();
    } catch (error) {
      if (loading) loading.innerHTML = `<strong>ATLAS UNAVAILABLE</strong><span>${escapeHtml(error.message)}</span>`;
      console.error(error);
    }
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(panel);
  const themeObserver = new MutationObserver(() => {
    readColors();
    requestDraw();
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-theme"] });
  init();
}

export function mountResearchAtlas() {
  document.querySelectorAll("[data-research-atlas]").forEach(mountOne);
}
