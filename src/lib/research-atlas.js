const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const number = (value, fallback = 0) => Number.isFinite(Number(value)) ? Number(value) : fallback;

function hashUnit(value, salt = "") {
  const text = `${salt}:${value}`;
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) / 4294967295;
}

function addWeight(map, key, weight) {
  map.set(key, (map.get(key) || 0) + weight);
}

function edgeWeight(type, weight = 1) {
  const base = {
    tracks_stock: 3.2,
    tracks_term: 1.45,
    supported_by: 2.2,
    challenged_by: 2.35,
  }[type] || 1;
  return base * Math.max(1, number(weight, 1));
}

function featureWeight(type) {
  return {
    stock: 2.8,
    term: 1.25,
    event: 0.45,
  }[type] || 0.8;
}

function buildLaneCenters(lanes, similarities) {
  const count = Math.max(1, lanes.length);
  const centers = lanes.map((lane, index) => {
    const radius = Math.sqrt((index + 0.65) / count) * 0.43;
    const angle = index * GOLDEN_ANGLE - Math.PI / 2;
    return {
      id: lane.id,
      x: 0.5 + Math.cos(angle) * radius * 1.2,
      y: 0.5 + Math.sin(angle) * radius * 0.82,
      vx: 0,
      vy: 0,
      radius: clamp(0.025 + Math.sqrt(number(lane.thesisCount, 1)) * 0.008, 0.035, 0.07),
    };
  });
  const indexById = new Map(centers.map((center, index) => [center.id, index]));
  const strongest = Math.max(1, ...similarities.map((row) => row.weight));
  const links = similarities
    .map((row) => ({
      source: indexById.get(row.source),
      target: indexById.get(row.target),
      weight: row.weight / strongest,
    }))
    .filter((row) => row.source !== undefined && row.target !== undefined)
    .sort((a, b) => b.weight - a.weight)
    .slice(0, Math.max(80, lanes.length * 7));

  for (let iteration = 0; iteration < 360; iteration += 1) {
    const alpha = Math.pow(1 - iteration / 360, 1.35);
    const fx = new Array(centers.length).fill(0);
    const fy = new Array(centers.length).fill(0);

    for (let left = 0; left < centers.length; left += 1) {
      for (let right = left + 1; right < centers.length; right += 1) {
        const a = centers[left];
        const b = centers[right];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let distance = Math.hypot(dx, dy);
        if (distance < 0.0001) {
          const angle = hashUnit(`${a.id}:${b.id}`, "repel") * Math.PI * 2;
          dx = Math.cos(angle) * 0.001;
          dy = Math.sin(angle) * 0.001;
          distance = 0.001;
        }
        const minimum = a.radius + b.radius + 0.018;
        const pressure = distance < minimum
          ? (minimum - distance) * 0.085
          : 0.000018 / Math.max(0.0008, distance * distance);
        const ux = dx / distance;
        const uy = dy / distance;
        fx[left] -= ux * pressure;
        fy[left] -= uy * pressure;
        fx[right] += ux * pressure;
        fy[right] += uy * pressure;
      }
    }

    for (const link of links) {
      const source = centers[link.source];
      const target = centers[link.target];
      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const distance = Math.max(0.001, Math.hypot(dx, dy));
      const preferred = 0.105 + (1 - link.weight) * 0.11;
      const pull = (distance - preferred) * (0.007 + link.weight * 0.027);
      const ux = dx / distance;
      const uy = dy / distance;
      fx[link.source] += ux * pull;
      fy[link.source] += uy * pull;
      fx[link.target] -= ux * pull;
      fy[link.target] -= uy * pull;
    }

    centers.forEach((center, index) => {
      fx[index] += (0.5 - center.x) * 0.0025;
      fy[index] += (0.5 - center.y) * 0.0025;
      center.vx = (center.vx + fx[index] * alpha) * 0.78;
      center.vy = (center.vy + fy[index] * alpha) * 0.78;
      center.x += center.vx;
      center.y += center.vy;
    });
  }

  const minX = Math.min(...centers.map((center) => center.x - center.radius));
  const maxX = Math.max(...centers.map((center) => center.x + center.radius));
  const minY = Math.min(...centers.map((center) => center.y - center.radius));
  const maxY = Math.max(...centers.map((center) => center.y + center.radius));
  const spanX = Math.max(0.01, maxX - minX);
  const spanY = Math.max(0.01, maxY - minY);

  return new Map(centers.map((center) => [center.id, {
    x: 0.07 + ((center.x - minX) / spanX) * 0.86,
    y: 0.08 + ((center.y - minY) / spanY) * 0.84,
  }]));
}

export function buildResearchAtlas(network = {}) {
  const graph = network.graph || { nodes: [], edges: [] };
  const graphNodes = graph.nodes || [];
  const graphEdges = graph.edges || [];
  const nodeById = new Map(graphNodes.map((node) => [node.id, node]));
  const thesisIds = new Set(graphNodes.filter((node) => node.type === "thesis").map((node) => node.id));
  const lanes = (network.lanes || [])
    .map((lane) => ({
      ...lane,
      id: lane.id || `lane-${lane.slug}`,
      titleZh: lane.titleZh || lane.lane || "未分类赛道",
      thesisIds: lane.thesisIds || [],
    }))
    .sort((a, b) => number(b.evidenceCount) - number(a.evidenceCount) || number(b.thesisCount) - number(a.thesisCount));
  const laneByTitle = new Map(lanes.flatMap((lane) => [lane.titleZh, lane.titleEn].filter(Boolean).map((title) => [title, lane])));
  const laneById = new Map(lanes.map((lane) => [lane.id, lane]));
  const thesisLane = new Map();

  for (const lane of lanes) {
    for (const thesisId of lane.thesisIds) thesisLane.set(thesisId, lane.id);
  }
  for (const node of graphNodes) {
    if (node.type !== "thesis" || thesisLane.has(node.id)) continue;
    const lane = laneByTitle.get(node.lane);
    if (lane) thesisLane.set(node.id, lane.id);
  }

  const adjacency = new Map(graphNodes.map((node) => [node.id, []]));
  const laneWeightsByNode = new Map();
  const scoreByNode = new Map();
  for (const node of graphNodes) {
    if (node.type === "thesis") {
      const laneId = thesisLane.get(node.id);
      if (laneId) laneWeightsByNode.set(node.id, new Map([[laneId, 12]]));
      scoreByNode.set(node.id, number(node.practicalScore || node.conviction));
    }
  }

  for (const edge of graphEdges) {
    if (!nodeById.has(edge.source) || !nodeById.has(edge.target)) continue;
    adjacency.get(edge.source)?.push({ id: edge.target, edge });
    adjacency.get(edge.target)?.push({ id: edge.source, edge });
    const thesisId = thesisIds.has(edge.source) ? edge.source : thesisIds.has(edge.target) ? edge.target : null;
    const relatedId = thesisId === edge.source ? edge.target : edge.source;
    const laneId = thesisId ? thesisLane.get(thesisId) : null;
    if (!thesisId || !relatedId || !laneId) continue;
    const weights = laneWeightsByNode.get(relatedId) || new Map();
    addWeight(weights, laneId, edgeWeight(edge.type, edge.weight));
    laneWeightsByNode.set(relatedId, weights);
    scoreByNode.set(relatedId, Math.max(scoreByNode.get(relatedId) || 0, scoreByNode.get(thesisId) || 0));
  }

  const similarityMap = new Map();
  for (const node of graphNodes) {
    if (node.type === "thesis") continue;
    const weights = [...(laneWeightsByNode.get(node.id) || new Map()).entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 7);
    if (weights.length < 2) continue;
    for (let left = 0; left < weights.length; left += 1) {
      for (let right = left + 1; right < weights.length; right += 1) {
        const source = weights[left][0] < weights[right][0] ? weights[left][0] : weights[right][0];
        const target = source === weights[left][0] ? weights[right][0] : weights[left][0];
        const key = `${source}|${target}`;
        const contribution = Math.min(weights[left][1], weights[right][1]) * featureWeight(node.type) / Math.sqrt(weights.length);
        similarityMap.set(key, (similarityMap.get(key) || 0) + contribution);
      }
    }
  }
  const similarities = [...similarityMap.entries()].map(([key, weight]) => {
    const [source, target] = key.split("|");
    return { source, target, weight };
  });
  const laneCenters = buildLaneCenters(lanes, similarities);

  const positionById = new Map();
  const thesisOrderByLane = new Map();
  for (const node of graphNodes.filter((item) => item.type === "thesis")) {
    const laneId = thesisLane.get(node.id);
    const rows = thesisOrderByLane.get(laneId) || [];
    rows.push(node);
    thesisOrderByLane.set(laneId, rows);
  }
  for (const [laneId, rows] of thesisOrderByLane) {
    const center = laneCenters.get(laneId) || { x: 0.5, y: 0.5 };
    rows.sort((a, b) => number(b.practicalScore || b.conviction) - number(a.practicalScore || a.conviction));
    rows.forEach((node, index) => {
      const angle = index * GOLDEN_ANGLE + hashUnit(node.id, "thesis-angle") * 0.55;
      const radius = 0.007 + Math.sqrt(index + 0.35) * 0.009;
      positionById.set(node.id, {
        x: clamp(center.x + Math.cos(angle) * radius, 0.025, 0.975),
        y: clamp(center.y + Math.sin(angle) * radius * 0.72, 0.025, 0.975),
      });
    });
  }

  const grouped = new Map();
  for (const node of graphNodes.filter((item) => item.type !== "thesis")) {
    const weights = [...(laneWeightsByNode.get(node.id) || new Map()).entries()].sort((a, b) => b[1] - a[1]);
    const primaryLane = weights[0]?.[0] || lanes[0]?.id || "";
    const key = `${primaryLane}:${node.type}`;
    const rows = grouped.get(key) || [];
    rows.push({ node, weights, primaryLane });
    grouped.set(key, rows);
  }
  for (const rows of grouped.values()) {
    rows.sort((a, b) => (adjacency.get(b.node.id)?.length || 0) - (adjacency.get(a.node.id)?.length || 0) || a.node.id.localeCompare(b.node.id));
    rows.forEach((row, index) => {
      const connectedTheses = (adjacency.get(row.node.id) || [])
        .map((item) => positionById.get(item.id))
        .filter(Boolean);
      const topWeights = row.weights.slice(0, 4);
      const totalWeight = Math.max(1, topWeights.reduce((sum, item) => sum + item[1], 0));
      let x = topWeights.reduce((sum, [laneId, weight]) => sum + (laneCenters.get(laneId)?.x || 0.5) * weight, 0) / totalWeight;
      let y = topWeights.reduce((sum, [laneId, weight]) => sum + (laneCenters.get(laneId)?.y || 0.5) * weight, 0) / totalWeight;
      if (connectedTheses.length && row.node.type === "event") {
        x = connectedTheses.reduce((sum, point) => sum + point.x, 0) / connectedTheses.length;
        y = connectedTheses.reduce((sum, point) => sum + point.y, 0) / connectedTheses.length;
      }
      const typeBase = { stock: 0.021, term: 0.039, event: 0.018 }[row.node.type] || 0.03;
      const typeStep = { stock: 0.0085, term: 0.0075, event: 0.0055 }[row.node.type] || 0.007;
      const angle = index * GOLDEN_ANGLE + hashUnit(row.node.id, "node-angle") * 0.7;
      const radius = typeBase + Math.sqrt(index + 0.5) * typeStep;
      positionById.set(row.node.id, {
        x: clamp(x + Math.cos(angle) * radius, 0.018, 0.982),
        y: clamp(y + Math.sin(angle) * radius * 0.72, 0.018, 0.982),
      });
    });
  }

  const primaryCounts = new Map(lanes.map((lane) => [lane.id, { total: 0, thesis: 0, stock: 0, term: 0, event: 0 }]));
  const nodeRows = graphNodes.map((node) => {
    const weights = [...(laneWeightsByNode.get(node.id) || new Map()).entries()].sort((a, b) => b[1] - a[1]);
    const primaryLane = weights[0]?.[0] || thesisLane.get(node.id) || "";
    const laneIds = weights.slice(0, 6).map(([laneId]) => laneId);
    const position = positionById.get(node.id) || { x: hashUnit(node.id, "x"), y: hashUnit(node.id, "y") };
    const counts = primaryCounts.get(primaryLane);
    if (counts) {
      counts.total += 1;
      counts[node.type] = (counts[node.type] || 0) + 1;
    }
    return [
      node.id,
      node.type,
      node.label || "",
      node.href || "",
      Number(position.x.toFixed(6)),
      Number(position.y.toFixed(6)),
      primaryLane,
      laneIds,
      node.name || "",
      node.market || "",
      node.role || "",
      node.bucket || "",
      node.actionLabel || "",
      node.direction || "",
      number(scoreByNode.get(node.id) || node.practicalScore || node.conviction),
      node.date || "",
      node.supportType || "",
      node.sourceLabel || "",
      adjacency.get(node.id)?.length || 0,
    ];
  });

  const laneRows = lanes.map((lane) => {
    const center = laneCenters.get(lane.id) || { x: 0.5, y: 0.5 };
    const counts = primaryCounts.get(lane.id) || { total: 0 };
    const radius = clamp(0.038 + Math.sqrt(Math.max(1, counts.total)) * 0.0065, 0.05, 0.14);
    return [
      lane.id,
      lane.slug || "",
      lane.titleZh,
      lane.titleEn || "",
      lane.href || "",
      Number(center.x.toFixed(6)),
      Number(center.y.toFixed(6)),
      Number((radius * 1.2).toFixed(6)),
      Number((radius * 0.82).toFixed(6)),
      counts.total,
      number(lane.thesisCount || counts.thesis),
      number(lane.stockCount || counts.stock),
      number(lane.evidenceCount),
      lane.lastSeen || "",
    ];
  });

  const edgeRows = graphEdges
    .filter((edge) => nodeById.has(edge.source) && nodeById.has(edge.target))
    .map((edge) => [edge.source, edge.target, edge.type || "related", number(edge.weight, 1)]);
  const nodeCounts = graphNodes.reduce((acc, node) => {
    acc[node.type] = (acc[node.type] || 0) + 1;
    return acc;
  }, {});
  const evidenceCounts = graphNodes.filter((node) => node.type === "event").reduce((acc, node) => {
    const key = node.supportType === "risk" || node.supportType === "challenged_by" ? "risk" : node.supportType === "supports" || node.supportType === "support" ? "support" : "neutral";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, { support: 0, risk: 0, neutral: 0 });

  return {
    schema: "vibe-research-atlas/v1",
    generatedAt: network.generatedAt || new Date().toISOString(),
    projection: {
      method: "deterministic weighted topology projection",
      dimensions: 2,
      coordinates: "normalized",
    },
    stats: {
      nodes: nodeRows.length,
      edges: edgeRows.length,
      lanes: laneRows.length,
      nodeCounts,
      evidenceCounts,
      dateRange: network.stats?.dateRange || {},
    },
    fields: {
      lane: ["id", "slug", "label", "labelEn", "href", "x", "y", "rx", "ry", "nodeCount", "thesisCount", "stockCount", "evidenceCount", "lastSeen"],
      node: ["id", "type", "label", "href", "x", "y", "primaryLane", "laneIds", "name", "market", "role", "bucket", "action", "direction", "score", "date", "support", "source", "degree"],
      edge: ["source", "target", "type", "weight"],
    },
    lanes: laneRows,
    nodes: nodeRows,
    edges: edgeRows,
  };
}
