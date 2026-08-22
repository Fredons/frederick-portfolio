import { createRequire } from "node:module";
import { mkdir } from "node:fs/promises";
const require = createRequire(import.meta.url);
const DESK = "C:/Users/Frederick Akam/Desktop";
const { chromium } = require(`${DESK}/access-audit/node_modules/playwright`);
const sharp = require(`${DESK}/strategicbuys-app/node_modules/sharp`);

const SITES = [
  { id: "nash",      url: "https://nash-site-nine.vercel.app/" },
  { id: "oppenheim", url: "https://oppenheim-demo.vercel.app/" },
];

await mkdir("_samples", { recursive: true });
const browser = await chromium.launch();

for (const s of SITES) {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  const bad = [];
  page.on("console", (m) => { if (m.type() === "error") bad.push(m.text().slice(0, 120)); });

  await page.goto(s.url, { waitUntil: "networkidle", timeout: 45000 });
  await page.waitForTimeout(2500);

  const doc = await page.evaluate(() => document.documentElement.scrollHeight);
  const cells = [];
  for (const f of [0, 0.18, 0.42, 0.7]) {
    await page.evaluate((y) => window.scrollTo(0, y), Math.round((doc - 900) * f));
    await page.waitForTimeout(900);
    cells.push(await sharp(await page.screenshot({ type: "png" })).resize({ width: 760 }).toBuffer());
  }

  // Mobile check on the same page.
  await ctx.close();
  const mctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, reducedMotion: "reduce" });
  const mp = await mctx.newPage();
  await mp.goto(s.url, { waitUntil: "networkidle" });
  await mp.waitForTimeout(2000);
  const overflow = await mp.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  await mp.screenshot({ path: `_samples/${s.id}-phone.png` });
  await mctx.close();

  const h = (await sharp(cells[0]).metadata()).height;
  await sharp({ create: { width: 760 * 2, height: h * 2, channels: 3, background: "#e8e4dc" } })
    .composite(cells.map((input, i) => ({ input, left: (i % 2) * 760, top: Math.floor(i / 2) * h })))
    .jpeg({ quality: 88 })
    .toFile(`_samples/${s.id}.jpg`);

  console.log(`${s.id.padEnd(10)} page=${doc}px  phone-overflow=${overflow}px  console-errors=${bad.length ? bad.join(" | ") : "none"}`);
}

await browser.close();
