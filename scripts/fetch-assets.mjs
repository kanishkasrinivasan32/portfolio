// Downloads the ORIGINAL images + resume from the live Emergent preview into /public.
// Usage: npm run fetch-assets   (needs internet; Node 18+)
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.SITE_URL || "https://kanishka-ai-ml--75botezu.preview.emergentagent.com";
const FILES = [
  "images/hero-art.jpg",
  "images/portrait.jpg",
  "images/project-rag.jpg",
  "images/project-vgg19.jpg",
  "images/project-ids.jpg",
  "images/project-intellora.jpg",
  "images/contact-art.jpg",
  "kanishka-s-resume.pdf",
  "favicon.svg",
];

let failed = 0;
for (const f of FILES) {
  const url = `${BASE}/${f}`;
  try {
    const res = await fetch(url);
    const type = res.headers.get("content-type") || "";
    if (!res.ok || type.includes("text/html")) throw new Error(`HTTP ${res.status} (${type})`);
    const out = path.join("public", f);
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, Buffer.from(await res.arrayBuffer()));
    console.log("✔", f);
  } catch (e) {
    failed++;
    console.warn("✘", f, "-", e.message);
  }
}
if (failed) console.warn(`\n${failed} file(s) failed. Open the URL in your browser, save the file manually into public/.`);
