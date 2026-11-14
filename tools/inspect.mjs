/**
 * Captures the page the way a reader meets it: every engine state at desktop
 * and phone width, the rest of the page below the engine, and the reduced
 * motion fallback. Serves the folder itself, so nothing else needs running.
 *
 *   node tools/inspect.mjs            -> .impeccable/review/
 */

import { createRequire } from "node:module";
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("./deps.cjs");

const ROOT = process.cwd();
const OUT = path.join(ROOT, ".impeccable", "review");
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".avif": "image/avif", ".webp": "image/webp", ".jpg": "image/jpeg", ".pdf": "application/pdf", ".css": "text/css" };

const server = createServer(async (req, res) => {
  const p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const file = path.join(ROOT, p === "/" ? "index.html" : p);
  if (!file.startsWith(ROOT)) { res.writeHead(403).end(); return; }
  try {
    const body = await readFile(file);
    res.writeHead(200, { "content-type": TYPES[path.extname(file)] || "application/octet-stream" }).end(body);
  } catch { res.writeHead(404).end(); }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const URL_ = `http://127.0.0.1:${server.address().port}/`;

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();
const report = [];

async function shoot(name, viewport, opts = {}) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1, reducedMotion: opts.reduced ? "reduce" : "no-preference", isMobile: viewport.width < 600, hasTouch: viewport.width < 600 });
  const page = await ctx.newPage();
  const errors = [], failed = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("requestfailed", (r) => failed.push(r.url()));
  page.on("response", (r) => { if (r.status() >= 400) failed.push(`${r.status()} ${r.url()}`); });
  await page.goto(URL_, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);

  const geo = await page.evaluate(() => {
    const e = document.getElementById("propinfo");
    return { top: e.getBoundingClientRect().top + scrollY, h: e.offsetHeight, on: document.documentElement.classList.contains("engine-on"), docH: document.documentElement.scrollHeight };
  });
  // Walk the page so lazy images load, then wait until every image has decoded.
  const settle = async () => {
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += 600) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      await Promise.all([...document.images].map((i) => i.complete ? (i.decode ? i.decode().catch(() => {}) : 0) : new Promise((r) => { i.onload = i.onerror = r; })));
    });
  };
  const go = (y) => page.evaluate((v) => { if (window.__lenis) window.__lenis.scrollTo(v, { immediate: true }); else scrollTo(0, v); }, y);

  if (geo.on) {
    const unit = geo.h / 6.4;
    for (let s = 0; s <= 5; s++) {
      await go(Math.round(geo.top + s * unit));
      await page.waitForTimeout(s === 5 ? 1900 : 500);
      await page.screenshot({ path: path.join(OUT, `${name}-s${s}.png`) });
    }
    // One mid-transition frame, so the lift itself gets looked at.
    await go(Math.round(geo.top + 2.5 * unit)); await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(OUT, `${name}-s2.5.png`) });
    await settle();
    await go(Math.round(geo.top + geo.h)); await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(OUT, `${name}-rest.png`), fullPage: true, clip: { x: 0, y: geo.top + geo.h, width: viewport.width, height: geo.docH - (geo.top + geo.h) } });
  } else {
    await settle();
    await go(0); await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: true });
    await page.screenshot({ path: path.join(OUT, `${name}-first-viewport.png`) });
  }

  const overflow = await page.evaluate(() => {
    const W = document.documentElement.clientWidth, bad = [];
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.right > W + 1 && getComputedStyle(el).position !== "fixed" && !el.closest(".engine__stage")) bad.push(el.tagName + "." + el.className);
    }
    return { scrollW: document.documentElement.scrollWidth, W, bad: bad.slice(0, 5) };
  });
  const broken = await page.evaluate(() => [...document.images].filter((i) => !i.naturalWidth).map((i) => i.currentSrc || i.src));
  report.push({ name, engineOn: geo.on, errors, failed, overflow, broken });
  await ctx.close();
}

await shoot("desktop", { width: 1440, height: 900 });
await shoot("mobile", { width: 390, height: 844 });
await shoot("reduced", { width: 1440, height: 900 }, { reduced: true });

await browser.close();
server.close();
console.log(JSON.stringify(report, null, 1));
