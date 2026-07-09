import { buildWeeklyPanoramaBundle } from "../../../lib/weekly-panorama.js";

export async function GET() {
  return new Response(JSON.stringify(buildWeeklyPanoramaBundle(), null, 2), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}
