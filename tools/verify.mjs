import { createRequire } from "node:module";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/Frederick Akam/Desktop/access-audit/node_modules/playwright");

const OUT = path.join(process.cwd(), "_verify");
const URL = "http://127.0.0.1:8899/";

const VIEWS = [
  { id: "desk",   w: 1440, h: 900 },
  { id: "wide",   w: 1920, h: 1080 },
  { id: "tablet", w: 768,  h: 1024 },
  { id: "phone",  w: 390,  h: 844 },
];

// Fractions of total page scroll to sample.
const STOPS = [0, 0.10, 0.22, 0.34, 0.55];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();

for (const v of VIEWS) {
  const ctx = await browser.newContext({
    viewport: { width: v.w, height: v.h },
    deviceScaleFactor: 2,
    isMobile: v.id === "phone",
    hasTouch: v.id === "phone" || v.id === "tablet",
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e).slice(0, 160)));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text().slice(0, 160)); });

  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(900);

  const height = await page.evaluate(() => document.documentElement.scrollHeight);

  for (const s of STOPS) {
    await page.evaluate((y) => window.scrollTo(0, y), Math.round((height - v.h) * s));
    await page.waitForTimeout(700);
    await page.screenshot({ path: path.join(OUT, `${v.id}-${String(Math.round(s * 100)).padStart(3, "0")}.png`) });
  }

  // Horizontal overflow is the classic responsive failure. Check it explicitly.
  const overflow = await page.evaluate(() =>
    document.documentElement.scrollWidth - document.documentElement.clientWidth
  );

  console.log(`${v.id.padEnd(7)} ${v.w}x${v.h}  page=${height}px  h-overflow=${overflow}px  errors=${errors.length ? errors.join(" | ") : "none"}`);
  await ctx.close();
}

await browser.close();
