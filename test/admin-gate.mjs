import assert from "node:assert/strict";
import middleware, { config, isProtectedPath } from "../middleware.js";

const previousToken = process.env.VIBE_ADMIN_TOKEN;
const token = "test-only-admin-token-7e1194";
const protectedUrl = "https://vibe.example/investor/odds/";

function request(headers = {}) {
  return new Request(protectedUrl, { headers });
}

try {
  delete process.env.VIBE_ADMIN_TOKEN;
  assert.equal(middleware(request()).status, 503, "missing token must fail closed");

  process.env.VIBE_ADMIN_TOKEN = token;
  const unauthorized = middleware(request());
  assert.equal(unauthorized.status, 401);
  assert.match(unauthorized.headers.get("www-authenticate") || "", /Basic/);
  assert.equal(unauthorized.headers.get("cache-control"), "private, no-store, max-age=0");

  const wrong = middleware(
    request({
      authorization: `Basic ${Buffer.from("admin:wrong").toString("base64")}`,
    }),
  );
  assert.equal(wrong.status, 401);

  const basic = middleware(
    request({
      authorization: `Basic ${Buffer.from(`admin:${token}`).toString("base64")}`,
    }),
  );
  assert.equal(basic, undefined, "valid Basic token should continue");

  const bearer = middleware(
    request({ authorization: `Bearer ${token}` }),
  );
  assert.equal(bearer, undefined, "valid Bearer token should continue");

  const customHeader = middleware(request({ "x-admin-token": token }));
  assert.equal(customHeader, undefined, "valid admin header should continue");

  assert.equal(
    middleware(new Request("https://vibe.example/investor/daily/")),
    undefined,
    "unprotected routes must continue",
  );

  for (const pathname of [
    "/investor/odds",
    "/investor/odds/",
    "/investor/workspace",
    "/investor/workspace/",
    "/investor-data/odds-board.json",
    "/investor-data/research-workspace.json",
  ]) {
    assert.equal(isProtectedPath(pathname), true, `${pathname} must be protected`);
  }
  assert.equal(isProtectedPath("/investor/daily/"), false);
  assert.equal(config.runtime, "edge");
  assert.equal(config.matcher.length, 4);

  console.log(
    JSON.stringify({
      status: "ok",
      protectedMatchers: config.matcher.length,
      browserAuth: "basic",
      apiAuth: ["bearer", "x-admin-token"],
      missingEnvironmentBehavior: 503,
    }),
  );
} finally {
  if (previousToken === undefined) {
    delete process.env.VIBE_ADMIN_TOKEN;
  } else {
    process.env.VIBE_ADMIN_TOKEN = previousToken;
  }
}
