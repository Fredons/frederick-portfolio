/**
 * Playwright and sharp are borrowed from sibling projects on disk, so this folder installs
 * nothing. The first location that resolves wins. When a sibling's node_modules is cleaned
 * up, add another path here instead of editing every tool.
 */
const path = require("path");
const DESK = "C:/Users/Frederick Akam/Desktop";
const DIRS = [
  path.resolve(__dirname, ".."),
  `${DESK}/trader/AI Trader/leadfinder`,
  `${DESK}/access-audit`,
  `${DESK}/strategicbuys-app`,
];

function borrow(name) {
  for (const d of DIRS) {
    try { return require(`${d}/node_modules/${name}`); } catch { /* try the next one */ }
  }
  throw new Error(`${name} not found in any of: ${DIRS.join(", ")}. Add a path to tools/deps.cjs.`);
}

module.exports = {
  get chromium() { return borrow("playwright").chromium; },
  get sharp() { return borrow("sharp"); },
};
