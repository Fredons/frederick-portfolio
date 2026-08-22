import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const DESK = "C:/Users/Frederick Akam/Desktop";
const { chromium } = require(`${DESK}/access-audit/node_modules/playwright`);
const sharp = require(`${DESK}/strategicbuys-app/node_modules/sharp`);

const P = [0, 0.16, 0.32, 0.48, 0.64, 0.82];
const W = 1440, H = 900;

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
await page.goto("http://127.0.0.1:8899/", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

const span = await page.evaluate(() => {
  const f = document.getElementById("film");
  return f.offsetHeight - window.innerHeight;
});

const shots = [];
for (const p of P) {
  await page.evaluate((y) => window.scrollTo(0, y), Math.round(span * p));
  await page.waitForTimeout(650);
  shots.push(await page.screenshot({ type: "png" }));
}
await browser.close();

const cw = 620;
const cells = await Promise.all(shots.map((b) => sharp(b).resize({ width: cw }).toBuffer()));
const ch = (await sharp(cells[0]).metadata()).height;

await sharp({ create: { width: cw * 3, height: ch * 2, channels: 3, background: "#e8e4dc" } })
  .composite(cells.map((input, i) => ({ input, left: (i % 3) * cw, top: Math.floor(i / 3) * ch })))
  .jpeg({ quality: 90 })
  .toFile("_verify/flight.jpg");

console.log(`flight sheet, p = ${P.join(", ")} across ${span}px of corridor`);
