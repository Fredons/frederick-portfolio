import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/Frederick Akam/Desktop/access-audit/node_modules/playwright");

const url = process.argv[2];
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(2500);

const report = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const out = [];
  document.querySelectorAll("*").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    const right = r.right + window.scrollX;
    if (right > vw + 1) {
      out.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className && typeof el.className === "string" ? el.className : "").slice(0, 70),
        overhang: Math.round(right - vw),
        width: Math.round(r.width),
        text: (el.textContent || "").trim().slice(0, 40),
      });
    }
  });
  // Deepest offenders first: an element whose parent also overflows is usually
  // a symptom, so the widest overhang on the smallest box is the real culprit.
  return { vw, docWidth: document.documentElement.scrollWidth, items: out.sort((a, b) => b.overhang - a.overhang).slice(0, 12) };
});

console.log(`viewport ${report.vw}px, document ${report.docWidth}px, overflow ${report.docWidth - report.vw}px\n`);
for (const i of report.items) {
  console.log(`+${String(i.overhang).padStart(4)}px  ${i.tag.padEnd(6)} w=${String(i.width).padEnd(5)} ${i.cls.padEnd(50)} ${JSON.stringify(i.text)}`);
}
await browser.close();
