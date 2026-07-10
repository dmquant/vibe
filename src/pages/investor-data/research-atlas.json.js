import { readResearchNetwork } from "../../lib/investor-generated.js";
import { buildResearchAtlas } from "../../lib/research-atlas.js";

export async function GET() {
  const atlas = buildResearchAtlas(readResearchNetwork());
  return new Response(JSON.stringify(atlas), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}
