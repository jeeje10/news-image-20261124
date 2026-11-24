// news-image-20261124 entry: ship the rendered front page to /output/entry.png.
// The image is a newspaper front page summing up Tuesday 24 November 2026:
// 36 verified stories across 9 regions, drawn as HTML and screenshotted
// at 1024x1024. Node 22, standard library only, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const png = readFileSync(join(here, "entry.png"));
// Guard: the bounty caps the image at 1 MiB; refuse to ship anything bigger.
if (png.length > 1048576) throw new Error("entry.png exceeds 1 MiB");
writeFileSync(join(outDir, "entry.png"), png);
