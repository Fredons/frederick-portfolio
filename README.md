# frederick-portfolio

A single-page portfolio for Frederick Akam. One static HTML file, no framework, no build step.

The hero is a corridor of live production sites in 3D space that you fly through on scroll.
Eight projects arrive out of the distance, grow, and sweep past the camera, then the page
resolves into a dense index of the work. Everything on it is a real shipped system with a
URL you can open.

## Why it is built this way

The alternative was a scroll-scrubbed video hero, which is the usual answer for this kind
of page. Six full-screen video legs weigh roughly 54 MB. This weighs **272 KB of AVIF plus
34 KB of HTML**, loads instantly on mobile data, and never softens, because compressed video
scaled across a high-density display is exactly where blur comes from.

The sharpness is arithmetic rather than a promise. Sources are captured at 2x and stored at
1600px wide. Plates render at 336px. The perspective cutoff sits at `z = 900`, where the
scale factor is 4.6, putting a plate at 1325px on screen. That is still under the 1600px
source, so no image is ever upscaled at any point in the flight.

## Structure

```
index.html            the whole page, inline CSS and JS
shots/                AVIF and WebP captures of each live site, 1600px wide
tools/capture.mjs     re-shoot every site at 2x and re-encode
tools/verify.mjs      four viewports, checks horizontal overflow and console errors
tools/flight.mjs      contact sheet of the corridor sampled across the scroll
tools/overflow.mjs    finds the exact element causing horizontal overflow on a URL
tools/anchors.mjs     checks whether anchor jumps land under a fixed header
CV-Frederick-Akam.md  CV, kept in step with the page
PRODUCT.md            the brief this was designed against
```

The tooling borrows Playwright and sharp from sibling projects on disk, so this folder has
no dependencies of its own and nothing to install.

## Working on it

```bash
python -m http.server 8899        # serve
node tools/capture.mjs            # re-shoot the sites after any of them change
node tools/verify.mjs             # 1920 / 1440 / 768 / 390, expects zero overflow
node tools/flight.mjs             # visual check of the corridor
```

`tools/overflow.mjs` and `tools/anchors.mjs` take a URL and work on any site, not just this
one. They exist because both defects are invisible until you measure for them.

## Accessibility and motion

Reduced-motion users get the composed page with no corridor at all, not a degraded version
of it. Every plate has real alt text. The page is server-rendered markup with no framework,
so all content exists before any JavaScript runs.

## Deploy

```bash
npx vercel --prod
```

`.vercelignore` keeps the verification screenshots and the tooling out of the deployment.
