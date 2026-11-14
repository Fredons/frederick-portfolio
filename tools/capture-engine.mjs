/**
 * Captures the four PropInfo layers for the engine from propinfo.com.au's own
 * "How a report comes together" section. Those panels are rendered by the live
 * site on its labelled sample property (12 Quandong St, Paddington), so no
 * client's data and no login is involved.
 *
 * Everything outside the visible panel is set to visibility: hidden (which
 * stops it painting at all) and the shot is taken with omitBackground, so each
 * sheet ships with real alpha and sits on whatever ground the engine has
 * darkened to.
 *
 *   node tools/capture-engine.mjs
 */

import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("./deps.cjs");
const { sharp } = require("./deps.cjs");

const OUT = path.join(process.cwd(), "shots");
const MAX_WIDTH = 1600;

// Step order on propinfo.com.au, mapped to the engine's layer names.
const STEPS = ["parcel", "risk", "figures", "report"];

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 2, colorScheme: "light" });
  await page.goto("https://propinfo.com.au/", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);

  const sectionTop = await page.$eval("#how-it-works", (el) => el.getBoundingClientRect().top + scrollY);
  // The steps are not evenly spaced (the figures step is short), so these
  // offsets were read off the live page on 14 Nov 2026.
  const OFFSETS = [200, 960, 1720, 2480];

  for (let i = 0; i < STEPS.length; i++) {
    await page.evaluate((y) => scrollTo(0, y), Math.round(sectionTop + OFFSETS[i]));
    await page.waitForTimeout(3500); // the parcel outline and chart bars animate in

    const box = await page.evaluate(() => {
      const panes = [...document.querySelectorAll("#how-it-works [class*='col-span-7'] > div")];
      const pane = panes.find((p) => getComputedStyle(p).opacity === "1") || panes[0];
      const css = document.createElement("style");
      css.textContent = "html, body { background: transparent !important; } body * { visibility: hidden !important; } .engine-capture, .engine-capture * { visibility: visible !important; }";
      document.head.appendChild(css);
      pane.classList.add("engine-capture");
      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      for (const el of pane.querySelectorAll("*")) {
        const r = el.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) continue;
        x0 = Math.min(x0, r.left); y0 = Math.min(y0, r.top);
        x1 = Math.max(x1, r.right); y1 = Math.max(y1, r.bottom);
      }
      // Room for the sheet's full shadow: 36px clipped it to a hard line (found 14 Nov 2026).
      const pad = 120;
      return { x: Math.max(0, x0 - pad), y: Math.max(0, y0 - pad), width: Math.min(innerWidth, x1 + pad) - Math.max(0, x0 - pad), height: Math.min(innerHeight, y1 + pad) - Math.max(0, y0 - pad) };
    });

    const raw = await page.screenshot({ clip: box, omitBackground: true, type: "png" });
    // Trim the empty transparent margins the pane carries, then give the shadow
    // a little room back, so each sheet's visual centre is its real centre.
    const trimmed = await sharp(raw).trim({ threshold: 1 }).extend({ top: 24, bottom: 24, left: 24, right: 24, background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    const pipe = sharp(trimmed).resize({ width: MAX_WIDTH, withoutEnlargement: true });
    const id = `engine-${STEPS[i]}`;
    await pipe.clone().avif({ quality: 56, effort: 6 }).toFile(path.join(OUT, `${id}.avif`));
    await pipe.clone().webp({ quality: 84, alphaQuality: 90 }).toFile(path.join(OUT, `${id}.webp`));
    await page.evaluate(() => { document.querySelectorAll(".engine-capture").forEach((el) => el.classList.remove("engine-capture")); document.querySelectorAll("style").forEach((st) => { if (st.textContent.includes("engine-capture")) st.remove(); }); });
    const meta = await sharp(trimmed).metadata();
    console.log(`OK   ${id.padEnd(16)} ${meta.width}x${meta.height} alpha=${meta.hasAlpha}`);
  }

  await browser.close();
}

run().catch((e) => { console.error(e); process.exit(1); });
