const ADMIN_TOKEN_ENV = "VIBE_ADMIN_TOKEN";

const PROTECTED_PATHS = [
  "/investor/odds",
  "/investor/workspace",
  "/investor-data/odds-board.json",
  "/investor-data/research-workspace.json",
];

function isProtectedPath(pathname) {
  return PROTECTED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

function constantTimeEqual(leftValue, rightValue) {
  const encoder = new TextEncoder();
  const left = encoder.encode(String(leftValue || ""));
  const right = encoder.encode(String(rightValue || ""));
  const length = Math.max(left.length, right.length);
  let mismatch = left.length ^ right.length;

  for (let index = 0; index < length; index += 1) {
    mismatch |= (left[index] || 0) ^ (right[index] || 0);
  }

  return mismatch === 0;
}

function decodeBasicToken(header) {
  if (!header.startsWith("Basic ")) return null;
  try {
    const decoded = atob(header.slice(6).trim());
    const separator = decoded.indexOf(":");
    if (separator < 0) return null;
    const username = decoded.slice(0, separator);
    const token = decoded.slice(separator + 1);
    return username === "admin" ? token : null;
  } catch {
    return null;
  }
}

function requestToken(request) {
  const authorization = request.headers.get("authorization") || "";
  if (authorization.startsWith("Bearer ")) {
    return authorization.slice(7).trim();
  }

  const basicToken = decodeBasicToken(authorization);
  if (basicToken !== null) return basicToken;

  return request.headers.get("x-admin-token") || "";
}

function denied(status, message, prompt = false) {
  const headers = new Headers({
    "cache-control": "private, no-store, max-age=0",
    "content-type": "text/plain; charset=utf-8",
    "referrer-policy": "no-referrer",
    vary: "Authorization, X-Admin-Token",
    "x-content-type-options": "nosniff",
    "x-robots-tag": "noindex, nofollow, noarchive, nosnippet",
  });
  if (prompt) {
    headers.set(
      "www-authenticate",
      'Basic realm="AI Institute Admin", charset="UTF-8"',
    );
  }
  return new Response(message, { status, headers });
}

export default function middleware(request) {
  const { pathname } = new URL(request.url);
  if (!isProtectedPath(pathname)) return;

  const configuredToken = process.env[ADMIN_TOKEN_ENV] || "";
  if (!configuredToken) {
    return denied(
      503,
      "Admin access is not configured. Set VIBE_ADMIN_TOKEN in Vercel and redeploy.",
    );
  }

  if (!constantTimeEqual(requestToken(request), configuredToken)) {
    return denied(401, "Admin token required.", true);
  }

  // Returning undefined continues to the requested static Astro route.
  return;
}

export const config = {
  matcher: [
    "/investor/odds/:path*",
    "/investor/workspace/:path*",
    "/investor-data/odds-board.json",
    "/investor-data/research-workspace.json",
  ],
  runtime: "edge",
};

export { isProtectedPath };
