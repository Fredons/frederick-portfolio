import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/Frederick Akam/Desktop/access-audit/node_modules/playwright");

const url = process.argv[2];
const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(1500);

const headerH = await page.evaluate(() => {
  const fixed = [...document.querySelectorAll("header, nav, div")].filter((e) => {
    const cs = getComputedStyle(e);
    return (cs.position === "fixed" || cs.position === "sticky") && e.getBoundingClientRect().top <= 2 && e.getBoundingClientRect().height > 30;
  });
  return fixed.length ? Math.round(Math.max(...fixed.map((e) => e.getBoundingClientRect().height))) : 0;
});

const hrefs = await page.evaluate(() =>
  [...document.querySelectorAll('a[href^="#"]')].map((a) => a.getAttribute("href")).filter((h) => h && h.length > 1)
);

console.log(`fixed header height: ${headerH}px`);
console.log(`in-page anchors: ${hrefs.length ? hrefs.join(", ") : "none"}\n`);

for (const h of [...new Set(hrefs)]) {
  const ok = await page.evaluate((hash) => {
    const el = document.querySelector(hash);
    if (!el) return null;
    return true;
  }, h);
  if (!ok) { console.log(`${h.padEnd(18)} target missing`); continue; }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.evaluate((hash) => { window.location.hash = hash; }, h);
  await page.waitForTimeout(1200);

  const top = await page.evaluate((hash) => Math.round(document.querySelector(hash).getBoundingClientRect().top), h);
  const verdict = top < headerH - 2 ? `HIDDEN under header (top=${top}px, header=${headerH}px)` : `clear (top=${top}px)`;
  console.log(`${h.padEnd(18)} ${verdict}`);
}

await browser.close();
