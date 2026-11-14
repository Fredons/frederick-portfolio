# frederick-portfolio

**Live: [frederickakam.vercel.app](https://frederickakam.vercel.app/)**

A single-page portfolio for Frederick Akam. One static HTML file, no framework, no build step.

Written for founders and engineering leads hiring a product engineer. Instead of a grid of
project cards, the page takes one real system apart: scrolling down is digging down through
PropInfo, from the report a client reads, to the figures, the risk rule, the parcel, and the
5.88 million records underneath. Each scroll step lifts the top sheet off a pile while the
ground darkens one step. Eight more live systems follow as a dense index, then the record and
one action: email.

The brief it was built against is `portfolio-brief_v1_review.md` (14 Nov 2026), which replaced
the earlier PRODUCT.md written for Mindrift reviewers.

## Why it is built this way

Every engine sheet is a real capture of propinfo.com.au's own sample property (12 Quandong St,
Paddington), with its background stripped so it sits on whatever ground the engine has reached.
No generated imagery and no client data. The data layer is drawn in HTML from the pipeline's
load counts.

It stays one static file: about 515 KB of HTML, Lenis and AVIF in total, so it opens on mobile
data. Motion is one rAF loop writing transform, opacity and one background colour. Readers who
prefer reduced motion, and screens shorter than 560px, get the same layers stacked as a plain
page with no pinning and no smooth scroll.

## Structure

```
index.html                  the whole page, inline CSS and JS
vendor/lenis-1.3.26.min.js  smooth scroll, self-hosted (MIT)
shots/engine-*.avif|webp    the four PropInfo layers, with alpha
shots/*.avif|webp           captures of each live site, 1600px wide
tools/capture-engine.mjs    re-shoot the PropInfo layers from propinfo.com.au
tools/capture.mjs           re-shoot the sites (pass ids to shoot only some)
tools/inspect.mjs           every engine state at 1440 and 390, the rest of the page, the
                            reduced-motion fallback, plus console, network, image and overflow checks
tools/verify.mjs            four viewports, checks horizontal overflow and console errors
tools/overflow.mjs          finds the exact element causing horizontal overflow on a URL
tools/anchors.mjs           checks whether anchor jumps land under a fixed header
tools/deps.cjs              where Playwright and sharp are borrowed from
CV-Frederick-Akam.md        CV, kept in step with the page
```

The tooling borrows Playwright and sharp from sibling projects on disk (the list is in
`tools/deps.cjs`), so this folder has no dependencies of its own and nothing to install.

## Working on it

```bash
python -m http.server 8899        # serve
node tools/capture.mjs            # re-shoot the sites after any of them change
node tools/capture-engine.mjs     # re-shoot the PropInfo layers
node tools/inspect.mjs            # every engine state plus checks, into .impeccable/review/
node tools/verify.mjs             # 1920 / 1440 / 768 / 390, expects zero overflow
```

`tools/overflow.mjs` and `tools/anchors.mjs` take a URL and work on any site, not just this
one. They exist because both defects are invisible until you measure for them.

## Accessibility and motion

Reduced-motion users get every layer as a composed, stacked page, not a degraded version of
the engine. Every capture has real alt text, and the gauge is a list of real buttons that
jump to each layer. The page is server-rendered markup with no framework,
so all content exists before any JavaScript runs.

## Deploy

```bash
npx vercel --prod
```

`.vercelignore` keeps the verification screenshots, the tooling, the briefs and `.impeccable/`
out of the deployment.

## CV

`tools/cv-data.js` is the single source. Three builders read it so the outputs cannot drift:

```bash
node tools/build-cv.js       # Frederick-Akam-CV.docx
node tools/build-cv-pdf.mjs  # Frederick-Akam-CV.pdf
node tools/build-cv-md.js    # CV-Frederick-Akam.md
```

Both document formats are built for applicant tracking systems: single column, no tables
used for layout, no graphics, no content in headers or footers, standard font, conventional
section names. The PDF disables ligatures on purpose, because Chrome otherwise stores "ffi"
as one glyph and a keyword search for "Efficacy" or "workflow" then fails to match.
