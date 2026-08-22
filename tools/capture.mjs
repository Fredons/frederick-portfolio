/**
 * Captures the live sites at 2x device pixel ratio, then emits AVIF and WebP
 * at the exact width the hero renders them. Nothing is ever upscaled, so
 * nothing is ever soft.
 *
 * Borrows playwright from access-audit and sharp from strategicbuys-app so
 * this folder stays dependency free.
 */

import { createRequire } from "node:module";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const require = createRequire(import.meta.url);
const DESK = "C:/Users/Frederick Akam/Desktop";

const { chromium } = require(`${DESK}/access-audit/node_modules/playwright`);
const sharp = require(`${DESK}/strategicbuys-app/node_modules/sharp`);

const OUT = path.join(process.cwd(), "shots");

// Rendered slot is 800px wide at most, so 1600px native is exactly 2x.
const RENDER_WIDTH = 1600;

const SITES = [
  { id: "propinfo",     url: "https://propinfo.com.au/" },
  { id: "proforge",     url: "https://www.proforge.com.au/" },
  { id: "asprey",       url: "https://www.aspreylawyers.com/" },
  { id: "strategic",    url: "https://strategicbuys.com.au/" },
  { id: "nikunj",       url: "https://www.nikunj.com.au/" },
  { id: "iventicks",    url: "https://eventicket-psi.vercel.app/" },
  { id: "nvrgvp",       url: "https://www.nvrgvp.org/" },
  { id: "propinfodemo", url: "https://demo.propinfo.com.au/" },
];

async function run() {
  await mkdir(OUT, { recursive: true });

  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    // Their own reveal code short circuits under reduced motion, which means
    // above-the-fold content is painted rather than sitting at opacity 0.
    reducedMotion: "reduce",
    colorScheme: "light",
  });

  const results = [];

  for (const site of SITES) {
    const page = await ctx.newPage();
    try {
      await page.goto(site.url, { waitUntil: "networkidle", timeout: 45000 });
      await page.waitForTimeout(2500);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(400);

      const raw = await page.screenshot({ type: "png" }); // 2880x1800

      const pipe = sharp(raw).resize({ width: RENDER_WIDTH, withoutEnlargement: true });

      await pipe.clone().avif({ quality: 52, effort: 6 }).toFile(path.join(OUT, `${site.id}.avif`));
      await pipe.clone().webp({ quality: 82 }).toFile(path.join(OUT, `${site.id}.webp`));

      const meta = await sharp(raw).metadata();
      results.push({ id: site.id, ok: true, source: `${meta.width}x${meta.height}` });
    } catch (err) {
      results.push({ id: site.id, ok: false, error: String(err).slice(0, 120) });
    } finally {
      await page.close();
    }
  }

  await browser.close();

  for (const r of results) {
    console.log(r.ok ? `OK   ${r.id.padEnd(14)} from ${r.source}` : `FAIL ${r.id.padEnd(14)} ${r.error}`);
  }
}

run().catch((e) => { console.error(e); process.exit(1); });
