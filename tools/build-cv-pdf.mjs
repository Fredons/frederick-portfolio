/**
 * Renders the CV to PDF from the shared data module.
 *
 * Text stays real text, so applicant tracking systems extract it cleanly. No
 * images, no columns, no absolute positioning. The layout is deliberately the
 * same reading order as the .docx.
 */

import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";
const require = createRequire(import.meta.url);
const cv = require("./cv-data.js");
const { chromium } = require("C:/Users/Frederick Akam/Desktop/access-audit/node_modules/playwright");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(cv.name)} CV</title>
<style>
@page { size: Letter; margin: 0.6in 0.7in; }
*{ box-sizing:border-box; }
/* Chrome substitutes ff/fi/fl ligatures, which store as single glyphs
   (U+FB01 and friends). An applicant tracking system searching for
   "workflow" or "Efficacy" then fails to match. Turn them off. */
html, body, *{ font-variant-ligatures:none; font-feature-settings:"liga" 0,"clig" 0,"dlig" 0,"hlig" 0; }
body{
  margin:0; color:#1a1a1a;
  font-family:"Calibri","Carlito",-apple-system,"Segoe UI",sans-serif;
  font-size:10.5pt; line-height:1.42;
}
h1{ font-size:22pt; font-weight:700; letter-spacing:.055em; margin:0 0 3pt; text-transform:uppercase; }
.title{ font-size:11pt; color:#444; margin:0 0 4pt; }
.meta{ font-size:10pt; color:#444; margin:0 0 2pt; }
.meta.dark{ color:#1a1a1a; }
h2{
  font-size:10.5pt; font-weight:700; letter-spacing:.11em; text-transform:uppercase;
  margin:14pt 0 6pt; padding-bottom:2pt; border-bottom:.75pt solid #999;
  break-after:avoid;
}
p{ margin:0 0 4pt; }
.role{ margin-top:7pt; break-inside:avoid; }
.role .r1{ font-size:11pt; }
.role .r1 b{ font-weight:700; }
.role .r2{ font-size:10pt; color:#444; font-style:italic; margin-bottom:3pt; }
ul{ margin:0 0 0 15pt; padding:0; }
li{ margin:0 0 3pt; break-inside:avoid; }
.skill b{ font-weight:700; }
.skill{ margin-bottom:3.5pt; }
.proj{ margin-bottom:4pt; }
.proj b{ font-weight:700; }
.proj a{ color:#1f5c8b; text-decoration:underline; font-size:10pt; }
.tight{ margin-top:6pt; }
</style></head><body>

<h1>${esc(cv.name)}</h1>
<p class="title">${esc(cv.title)}</p>
<p class="meta">${esc(cv.location)}</p>
<p class="meta dark">${esc(cv.contact)}</p>
<p class="meta dark">${esc(cv.links)}</p>

<h2>Professional Summary</h2>
<p>${esc(cv.summary)}</p>

<h2>Core Skills</h2>
${cv.skills.map(([k, v]) => `<p class="skill"><b>${esc(k)}:</b> ${esc(v)}</p>`).join("")}

<h2>Professional Experience</h2>
${cv.experience.map((r) => `
<div class="role">
  <p class="r1"><b>${esc(r.title)}</b>&nbsp;&nbsp;|&nbsp;&nbsp;${esc(r.org)}</p>
  <p class="r2">${esc(r.dates)}</p>
  <ul>${r.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
</div>`).join("")}

<h2>Selected Projects (all publicly live)</h2>
${cv.projects.map(([n, u, d]) =>
  `<p class="proj"><b>${esc(n)}</b> <a href="https://${esc(u)}">${esc(u)}</a> &ndash; ${esc(d)}</p>`).join("")}
${cv.internal.map(([n, d]) => `<p class="proj"><b>${esc(n)}</b> &ndash; ${esc(d)}</p>`).join("")}

<h2>Education</h2>
${cv.education.map(([d, s, y]) => `
<div class="role">
  <p class="r1"><b>${esc(d)}</b>&nbsp;&nbsp;|&nbsp;&nbsp;${esc(s)}</p>
  <p class="r2">${esc(y)}</p>
</div>`).join("")}

<h2>Certifications and Languages</h2>
<p>${esc(cv.certifications)}</p>
<p>${esc(cv.languages)}</p>

</body></html>`;

writeFileSync("_verify/cv.html", html);

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle" });
await page.pdf({
  path: process.argv[2] || "Frederick-Akam-CV.pdf",
  format: "Letter",
  printBackground: true,
  margin: { top: "0.6in", bottom: "0.6in", left: "0.7in", right: "0.7in" },
});
await browser.close();
console.log("wrote Frederick-Akam-CV.pdf");
