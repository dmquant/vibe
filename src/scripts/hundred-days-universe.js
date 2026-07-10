import * as THREE from "./vendor/three/three.module.js";
import { OrbitControls } from "./vendor/three/OrbitControls.js";

const POINT_VERTEX_SHADER = `
  attribute float activation;
  attribute float pointSize;
  varying vec3 vColor;
  varying float vAlpha;
  uniform float uDay;
  uniform float uTime;
  uniform float uPixelRatio;

  void main() {
    float activeState = smoothstep(activation - 0.65, activation + 0.2, uDay);
    vec3 displaced = position;
    float pulse = sin(uTime * 0.72 + position.x * 0.13 + position.z * 0.11) * 0.055;
    displaced += normalize(position + vec3(0.001)) * pulse * activeState;
    vec4 modelPosition = modelMatrix * vec4(displaced, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;
    float perspective = clamp(260.0 / max(18.0, -viewPosition.z), 1.0, 7.0);
    gl_PointSize = max(1.0, pointSize * perspective * uPixelRatio * (0.48 + activeState * 0.52));
    vColor = color;
    vAlpha = activeState * (0.58 + 0.24 * sin(uTime * 0.5 + activation * 0.17));
  }
`;

const POINT_FRAGMENT_SHADER = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 centered = gl_PointCoord - vec2(0.5);
    float distanceToCenter = length(centered);
    if (distanceToCenter > 0.5) discard;
    float core = 1.0 - smoothstep(0.08, 0.5, distanceToCenter);
    float alpha = max(core, 0.16) * vAlpha;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

const LINE_VERTEX_SHADER = `
  attribute float activation;
  varying float vAlpha;
  uniform float uDay;

  void main() {
    vAlpha = smoothstep(activation - 0.75, activation + 0.25, uDay) * 0.22;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const LINE_FRAGMENT_SHADER = `
  varying float vAlpha;
  uniform vec3 uColor;

  void main() {
    gl_FragColor = vec4(uColor, vAlpha);
  }
`;

function cssColor(variable, fallback) {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim() || fallback;
}

function palette() {
  return {
    blue: cssColor("--accent-blue", "#2f80ed"),
    green: cssColor("--accent-green", "#169b62"),
    red: cssColor("--accent-red", "#d64545"),
    yellow: cssColor("--accent-yellow", "#d7a316"),
    orange: cssColor("--accent-orange", "#e46f2e"),
    ink: cssColor("--text-primary", "#f5f5f5"),
    line: cssColor("--border", "#2d2d2d"),
  };
}

function buildFallback(canvas, atlas, day) {
  const context = canvas.getContext("2d");
  if (!context) return { setDay() {}, destroy() {} };
  const draw = (activeDay = day) => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, rect.width, rect.height);
    const colors = palette();
    const active = atlas.nodes.filter((node) => node.activation <= activeDay);
    for (const node of active) {
      const x = rect.width * (0.5 + node.x / 90);
      const y = rect.height * (0.5 + node.y / 58);
      context.globalAlpha = 0.35 + Math.min(0.55, node.size / 5);
      context.fillStyle = colors[node.color] || colors.ink;
      context.fillRect(x, y, Math.max(2, node.size * 1.8), Math.max(2, node.size * 1.8));
    }
    context.globalAlpha = 1;
  };
  draw(day);
  const resize = () => draw(day);
  window.addEventListener("resize", resize);
  return {
    setDay(value) {
      day = value;
      draw(value);
    },
    destroy() {
      window.removeEventListener("resize", resize);
    },
  };
}

export function mountHundredDaysUniverse({ canvas, atlas, initialDay, onHover, onSelect }) {
  if (!canvas || !atlas?.nodes?.length) return { setDay() {}, destroy() {} };

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
  } catch {
    return buildFallback(canvas, atlas, initialDay);
  }

  const colors = palette();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 220);
  camera.position.set(2, 7, 61);

  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.055;
  controls.enablePan = false;
  controls.minDistance = 28;
  controls.maxDistance = 96;
  controls.autoRotate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  controls.autoRotateSpeed = 0.16;
  controls.target.set(0, 0, 0);

  const universe = new THREE.Group();
  universe.rotation.set(-0.08, -0.24, 0.03);
  scene.add(universe);

  const nodeById = new Map(atlas.nodes.map((node, index) => [node.id, { node, index }]));
  const positions = new Float32Array(atlas.nodes.length * 3);
  const pointColors = new Float32Array(atlas.nodes.length * 3);
  const activations = new Float32Array(atlas.nodes.length);
  const sizes = new Float32Array(atlas.nodes.length);

  atlas.nodes.forEach((node, index) => {
    positions[index * 3] = Number(node.x || 0);
    positions[index * 3 + 1] = Number(node.y || 0);
    positions[index * 3 + 2] = Number(node.z || 0);
    const color = new THREE.Color(colors[node.color] || colors.ink);
    pointColors[index * 3] = color.r;
    pointColors[index * 3 + 1] = color.g;
    pointColors[index * 3 + 2] = color.b;
    activations[index] = Number(node.activation || 1);
    sizes[index] = Math.max(1, Number(node.size || 1));
  });

  const pointGeometry = new THREE.BufferGeometry();
  pointGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  pointGeometry.setAttribute("color", new THREE.BufferAttribute(pointColors, 3));
  pointGeometry.setAttribute("activation", new THREE.BufferAttribute(activations, 1));
  pointGeometry.setAttribute("pointSize", new THREE.BufferAttribute(sizes, 1));
  pointGeometry.computeBoundingSphere();

  const pointMaterial = new THREE.ShaderMaterial({
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uDay: { value: initialDay },
      uTime: { value: 0 },
      uPixelRatio: { value: renderer.getPixelRatio() },
    },
    vertexShader: POINT_VERTEX_SHADER,
    fragmentShader: POINT_FRAGMENT_SHADER,
  });
  const points = new THREE.Points(pointGeometry, pointMaterial);
  universe.add(points);

  const edgePositions = [];
  const edgeActivations = [];
  for (const edge of atlas.edges || []) {
    const source = nodeById.get(edge.source)?.node;
    const target = nodeById.get(edge.target)?.node;
    if (!source || !target) continue;
    edgePositions.push(source.x, source.y, source.z, target.x, target.y, target.z);
    edgeActivations.push(edge.activation || 1, edge.activation || 1);
  }
  const edgeGeometry = new THREE.BufferGeometry();
  edgeGeometry.setAttribute("position", new THREE.Float32BufferAttribute(edgePositions, 3));
  edgeGeometry.setAttribute("activation", new THREE.Float32BufferAttribute(edgeActivations, 1));
  const edgeMaterial = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uDay: { value: initialDay },
      uColor: { value: new THREE.Color(colors.ink) },
    },
    vertexShader: LINE_VERTEX_SHADER,
    fragmentShader: LINE_FRAGMENT_SHADER,
  });
  universe.add(new THREE.LineSegments(edgeGeometry, edgeMaterial));

  const grid = new THREE.GridHelper(100, 28, colors.line, colors.line);
  grid.position.y = -17;
  grid.material.transparent = true;
  grid.material.opacity = 0.18;
  scene.add(grid);

  const ringGroup = new THREE.Group();
  for (const radius of [13, 24, 36]) {
    const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, Math.PI * 2);
    const ringGeometry = new THREE.BufferGeometry().setFromPoints(
      curve.getPoints(160).map((point) => new THREE.Vector3(point.x, 0, point.y)),
    );
    const ringMaterial = new THREE.LineBasicMaterial({
      color: colors.line,
      transparent: true,
      opacity: 0.14,
    });
    ringGroup.add(new THREE.Line(ringGeometry, ringMaterial));
  }
  ringGroup.position.y = -16.8;
  scene.add(ringGroup);

  const raycaster = new THREE.Raycaster();
  raycaster.params.Points.threshold = 1.35;
  const pointer = new THREE.Vector2(9, 9);
  let activeDay = initialDay;
  let hovered = null;
  let pointerDown = null;
  let animationFrame = 0;
  let destroyed = false;
  let visible = !document.hidden;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, rect.width < 640 ? 1.25 : 1.75));
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
    pointMaterial.uniforms.uPixelRatio.value = renderer.getPixelRatio();
  }

  function nodeFromPointer(event) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObject(points, false).find((intersection) => {
      const node = atlas.nodes[intersection.index];
      return node && Number(node.activation || 1) <= activeDay;
    });
    return hit ? atlas.nodes[hit.index] : null;
  }

  function handlePointerMove(event) {
    const node = nodeFromPointer(event);
    if (node?.id !== hovered?.id) {
      hovered = node;
      canvas.style.cursor = node ? "pointer" : "grab";
    }
    onHover?.(node, event);
  }

  function handlePointerLeave() {
    hovered = null;
    pointer.set(9, 9);
    canvas.style.cursor = "grab";
    onHover?.(null, null);
  }

  function handlePointerDown(event) {
    pointerDown = { x: event.clientX, y: event.clientY };
  }

  function handlePointerUp(event) {
    if (!pointerDown) return;
    const distance = Math.hypot(event.clientX - pointerDown.x, event.clientY - pointerDown.y);
    pointerDown = null;
    if (distance > 6) return;
    const node = nodeFromPointer(event);
    if (node) onSelect?.(node);
  }

  function handleVisibility() {
    visible = !document.hidden;
    if (visible && !animationFrame) animate();
  }

  const clock = new THREE.Clock();
  function animate() {
    if (destroyed || !visible) {
      animationFrame = 0;
      return;
    }
    animationFrame = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();
    pointMaterial.uniforms.uTime.value = elapsed;
    universe.rotation.z = Math.sin(elapsed * 0.09) * 0.025;
    controls.update();
    renderer.render(scene, camera);
  }

  canvas.addEventListener("pointermove", handlePointerMove);
  canvas.addEventListener("pointerleave", handlePointerLeave);
  canvas.addEventListener("pointerdown", handlePointerDown);
  canvas.addEventListener("pointerup", handlePointerUp);
  document.addEventListener("visibilitychange", handleVisibility);
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  resize();
  animate();

  return {
    setDay(value) {
      activeDay = Number(value || 1);
      pointMaterial.uniforms.uDay.value = activeDay;
      edgeMaterial.uniforms.uDay.value = activeDay;
    },
    destroy() {
      destroyed = true;
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("visibilitychange", handleVisibility);
      controls.dispose();
      pointGeometry.dispose();
      pointMaterial.dispose();
      edgeGeometry.dispose();
      edgeMaterial.dispose();
      ringGroup.children.forEach((ring) => {
        ring.geometry.dispose();
        ring.material.dispose();
      });
      grid.geometry.dispose();
      grid.material.dispose();
      renderer.dispose();
    },
  };
}
