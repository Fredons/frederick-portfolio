/**
 * Renders the social preview card at 1200x630.
 *
 * Without this, LinkedIn, X, WhatsApp and Slack all show a blank tile when the
 * portfolio is shared, and LinkedIn's Featured section rejected the link
 * outright until a trailing slash was added.
 */

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const DESK = "C:/Users/Frederick Akam/Desktop";
const { chromium } = require(`${DESK}/access-audit/node_modules/playwright`);

const html = `<!doctype html><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box;margin:0}
  body{
    width:1200px;height:630px;overflow:hidden;
    background:oklch(0.962 0.009 78);
    color:oklch(0.215 0.014 62);
    font-family:"IBM Plex Mono",monospace;
    padding:84px 90px;
    display:flex;flex-direction:column;justify-content:space-between;
  }
  .eyebrow{
    font-size:19px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;
    color:oklch(0.425 0.132 42);
    display:flex;align-items:center;gap:22px;
  }
  .eyebrow::after{content:"";flex:1;height:1px;background:oklch(0.855 0.014 74)}
  h1{
    font-family:"Newsreader",Georgia,serif;font-weight:400;
    font-size:150px;line-height:.9;letter-spacing:-.025em;
    font-variation-settings:"opsz" 72;
  }
  h1 em{font-style:italic;color:oklch(0.545 0.158 44)}
  p{
    font-family:"Newsreader",Georgia,serif;font-weight:300;
    font-size:35px;line-height:1.35;max-width:24ch;
    font-variation-settings:"opsz" 32;
  }
  .foot{
    display:flex;justify-content:space-between;align-items:flex-end;
    font-size:17px;color:oklch(0.435 0.016 62);
    border-top:1px solid oklch(0.855 0.014 74);padding-top:20px;
  }
</style>
<div class="eyebrow">Software engineer &middot; Kaduna, Nigeria</div>
<div>
  <h1>Frederick A<em>k</em>am</h1>
  <p style="margin-top:34px">Eight live production systems. Open one and check it.</p>
</div>
<div class="foot">
  <span>frederickakam.vercel.app</span>
  <span>Next.js &middot; TypeScript &middot; Node &middot; Claude API</span>
</div>`;

const browser = await chromium.launch();
const page = await (await browser.newContext({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
})).newPage();
await page.setContent(html, { waitUntil: "networkidle" });
await page.waitForTimeout(1200);
await page.screenshot({ path: "og.jpg", type: "jpeg", quality: 92 });
await browser.close();
console.log("wrote og.jpg (1200x630)");
