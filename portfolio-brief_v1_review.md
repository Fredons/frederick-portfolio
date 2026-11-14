# Portfolio master brief, v1 (review)

Written 14 Nov 2026. Replaces PRODUCT.md as the brief the page is designed against. PRODUCT.md
targeted Mindrift reviewers; this one targets people hiring a builder.

```
Build me a fast, exact one-page portfolio for FREDERICK AKAM, a product engineer in Kaduna (UTC+1) with nine live production systems, written for founders and engineering leads hiring a builder, and centred on one system: PROPINFO, a multi-tenant SaaS for Australian buyer's agents.

ASSETS: real screenshots only, captured at 2x with tools/capture.mjs (AVIF plus WebP, 1600px), because engineers spot generated images and the page's whole claim is that everything on it is real. Capture PropInfo from the demo account on a sample property so no client's data appears, and name no agency behind it, because its owner asked to stay off public pages. Draw the data layer in HTML and SVG.

ASSEMBLY: one static HTML file, no build step, under 600 KB, so it opens fast on Nigerian mobile data. Lenis (lerp 0.1, touch native, not created under reduced motion). The engine is pinned for 500vh: scrolling down is digging down through PropInfo, and each 100vh lifts the top layer away (transform and opacity only, one rAF loop on scrollY):
1. REPORT: the white-label report a client opens on the agent's own domain, by link or PDF.
2. FIGURES: transfer duty by state on FY2026-27 rules, lenders mortgage insurance, thirty years of yield, cash flow and depreciation.
3. ASSESSMENT: the pre-purchase assessment the OpenAI API writes against comparable sales.
4. RISK: flood and bushfire graded to the lot. Missing data reads "not assessed", never "clear", because a false all-clear is the one error an agent cannot take back. This sentence is the money moment and gets the whole frame.
5. DATA: a Python ETL into PostGIS, 5.88 million records: 5.1 million G-NAF addresses, 239,895 NSW sales, 447,794 VIC crime records, 63,673 Census 2021 records.

INSTRUMENT: a fixed gauge on the left edge, five ticks (REPORT / FIGURES / ASSESSMENT / RISK / DATA), the active one lit. At DATA a counter runs once from 0 to 5,880,000.

SECTIONS: first frame is the name, "Product engineer, Kaduna, Nigeria, UTC+1" and "Ten years building software. The last four spent shipping production platforms end to end, from schema to interface." over the REPORT capture, with "Email me" pinned top right throughout > the engine > "Eight more, all live", each with capture, one line, stack, role and URL: ProForge, iventicks, Athelia (production build for an Australian trade advisory, founder-edited in Sanity), Winnie Home Of Fashion (client work, winniefashionhome.com), Strategic Buys, Asprey Lawyers, Nikunj, NVRGVP > In development (ChargeCore, JARVIS, marked private) and Public code (plan-gate, access-audit) > Record, unchanged > the ask: "Email me" (akamfrederick@gmail.com, subject "Hiring: product engineer"), the CV PDF beside it, and "UTC+1: the same working day as London and Berlin, and US East mornings."

DESIGN: the engine grades from bone at REPORT to ink at DATA, then cuts back to bone; oxide is the only accent, on the lit tick and the email button (existing tokens). Newsreader for names and the risk sentence, IBM Plex Sans for body, IBM Plex Mono for every number. Tone: exact, calm, checkable.

VERIFY on localhost before telling me it's done: tools/verify.mjs passes at four viewports with no horizontal overflow or console errors; every outbound link returns 200; every number matches PropInfo's PRODUCT.md; reduced motion shows the five layers stacked and readable; Lighthouse mobile performance is 95+; the CV PDF's title says "Product engineer", matching the page.
```

## Sources for every fact above (checked 14 Nov 2026)

- PropInfo layers, white-label reports, the "not assessed" rule, FY2026-27 duty, agency stays unnamed:
  `Fredons/propinfo` PRODUCT.md (positioning confirmed by Frederick 30 Sep and 5 Oct 2026).
- OpenAI API: `Fredons/propinfo` package.json (`openai` ^5.3.0, no Anthropic SDK).
- 5.88M records and the breakdown: the current PropInfo card in index.html.
- Athelia: athelia.com.au returns 200 and serves Next.js and Sanity from Vercel. Built by Frederick,
  not labelled paid (his answer, 14 Nov).
- Winnie: paid client work (his answer, 14 Nov). The new Next.js site is live at winniefashionhome.com
  (confirmed 14 Nov; an earlier note that the domain still ran WordPress was out of date).
- All nine live URLs returned 200 on 14 Nov.

## Deviations recorded during the build (14 Nov 2026)

- Layer order as built: REPORT, FIGURES, RISK, PARCEL, DATA. The ASSESSMENT layer was dropped because the PropInfo default branch has no AI step in the client report; PARCEL (address to parcel, lot area, overlays and zoning) replaced it.
- FIGURES shows comparable sales, price guide, transfer duty and the thirty-year projection, which is what the public sample panel on propinfo.com.au shows. Lenders mortgage insurance, cash flow and depreciation stay out of the page copy because no capture shows them.
- The engine captures come from propinfo.com.au's own sample property, not a demo-account login, so no password was needed and no client data appears.
