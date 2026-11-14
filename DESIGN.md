---
name: Frederick Akam, Product Engineer
description: A one-page portfolio that digs down through one real system, sheet by sheet, from bone paper to ink.
colors:
  oxide: "oklch(0.545 0.158 44)"
  oxide-deep: "oklch(0.425 0.132 42)"
  oxide-press: "oklch(0.37 0.12 42)"
  oxide-lit: "oklch(0.68 0.15 48)"
  oxide-wash: "oklch(0.935 0.030 66)"
  bone: "oklch(0.962 0.009 78)"
  bone-deep: "oklch(0.935 0.013 76)"
  sheet-white: "oklch(0.995 0.003 80)"
  ground-figures: "oklch(0.905 0.016 74)"
  ground-risk: "oklch(0.355 0.018 60)"
  ground-parcel: "oklch(0.285 0.016 62)"
  ink: "oklch(0.215 0.014 62)"
  ink-soft: "oklch(0.435 0.016 62)"
  rule: "oklch(0.855 0.014 74)"
  rule-dark: "oklch(0.42 0.016 62)"
  on-dark: "oklch(0.955 0.010 78)"
  on-dark-soft: "oklch(0.80 0.014 72)"
typography:
  display:
    fontFamily: 'Newsreader, "Iowan Old Style", Georgia, serif'
    fontSize: "clamp(3rem, 1.6rem + 6vw, 6rem)"
    fontWeight: 350
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: '"opsz" 72'
  statement:
    fontFamily: 'Newsreader, "Iowan Old Style", Georgia, serif'
    fontSize: "clamp(2.6rem, 1rem + 5.2vw, 5.75rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.035em"
    fontVariation: '"opsz" 60'
  section:
    fontFamily: 'Newsreader, "Iowan Old Style", Georgia, serif'
    fontSize: "clamp(2rem, 1.3rem + 2.6vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: '"opsz" 60'
  headline:
    fontFamily: 'Newsreader, "Iowan Old Style", Georgia, serif'
    fontSize: "clamp(1.875rem, 1.25rem + 2.1vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.022em"
    fontVariation: '"opsz" 60'
  title:
    fontFamily: 'Newsreader, "Iowan Old Style", Georgia, serif'
    fontSize: "clamp(1.5rem, 1.2rem + 1vw, 2.125rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.02em"
    fontVariation: '"opsz" 48'
  lede:
    fontFamily: '"IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif'
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: '"IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif'
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: '"IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif'
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.005em"
  label:
    fontFamily: '"IBM Plex Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.09em"
  caption:
    fontFamily: '"IBM Plex Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
  numeral:
    fontFamily: '"IBM Plex Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    fontSize: "clamp(1.5rem, 1.1rem + 1.6vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontFeature: '"tnum"'
rounded:
  pill: "999px"
  sheet: "18px"
  sheet-compact: "14px"
  shot: "8px"
  track: "2px"
spacing:
  gutter: "clamp(1rem, 4.6vw, 5rem)"
  bar: "4rem"
  layer: "clamp(4.5rem, 11vw, 8rem)"
  section: "clamp(4rem, 8vw, 6.5rem)"
  row: "clamp(1.75rem, 3vw, 2.5rem)"
components:
  button-mail:
    backgroundColor: "{colors.oxide-deep}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 1.15rem"
    height: "44px"
  button-mail-hover:
    backgroundColor: "{colors.oxide-press}"
  button-mail-ask:
    backgroundColor: "{colors.oxide-lit}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "56px"
  gauge-label:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    height: "44px"
  gauge-tick:
    size: "12px"
  gauge-tick-lit:
    backgroundColor: "{colors.oxide}"
    size: "12px"
  gauge-tick-lit-dark:
    backgroundColor: "{colors.oxide-lit}"
    size: "12px"
  data-sheet:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "clamp(1.25rem, 3vw, 2rem)"
    width: "min(100%, 40rem)"
  entry-shot:
    backgroundColor: "{colors.bone-deep}"
    rounded: "{rounded.shot}"
  chip-mark:
    backgroundColor: "{colors.bone-deep}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.6rem"
  bar:
    textColor: "{colors.ink}"
    height: "{spacing.bar}"
  ask-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    padding: "clamp(5rem, 11vw, 9rem) 0 2.5rem"
---

# Design System: Frederick Akam, Product Engineer

## Overview

**Creative North Star: "The Drawing Pile"**

The page is a desk with one job's drawings stacked on it. The ground is warm bone paper, the type is ink, and the product sheets are whiter than the desk so they read as paper resting on paper. Scrolling down is digging down: after the opening frame, each 100svh lifts the top sheet off the pile and the ground underneath falls one step toward ink, so depth reads twice, as position in the pile and as tone in the ground. The register is exact, calm and checkable: every claim sits next to a capture, a number or a URL.

Density changes on purpose. The pinned engine is sparse, one heading, one paragraph and one sheet per frame, with a five-tick gauge on the edge so the reader always knows how deep they are. Everything after the engine is a dense ledger on bone: hairline-ruled rows, mono spec lists, live URLs, and a closing ask on ink. The system prefers a rule to a box, a measured number to an adjective, and a real capture to an illustration.

Confirmed rejections: the project-card grid, the 3D-corridor showreel the previous page used, generated imagery of any kind, and a second accent colour.

**Key Characteristics:**
- Warm OKLCH neutrals (hue 60 to 80) running from bone to ink, with one burnt-oxide accent.
- Three type voices with fixed jobs: Newsreader for names and claims, IBM Plex Sans for explanation, IBM Plex Mono for anything measured.
- A pinned five-layer engine with a lit gauge, a falling ground and a sheet pile that lifts one sheet per scroll unit.
- Ledger rows separated by hairlines instead of cards.
- Soft, warm, downward paper shadows; radius only on pills, sheets and screenshots.
- Real captures only, each captioned with its source; data drawn in HTML.

## Colors

Warm paper neutrals that fall from bone to ink, with a single burnt-oxide accent kept for the two things a reader should track or act on.

### Primary
- **Burnt Oxide** (oxide, oklch(0.545 0.158 44)): the lit gauge tick while the ground is light. It appears nowhere else.
- **Kiln Oxide** (oxide-deep, oklch(0.425 0.132 42)): the fill of the pinned Email me button, and the focus ring and text caret on light grounds.
- **Fired Oxide** (oxide-press, oklch(0.37 0.12 42)): the bar button's hover fill.
- **Ember Oxide** (oxide-lit, oklch(0.68 0.15 48)): the dark-ground partner. Lit tick once the stage goes dark, the closing Email me button (with ink text), and the focus ring and selection on dark grounds.
- **Oxide Wash** (oxide-wash, oklch(0.935 0.030 66)): text selection on bone. Never a fill.

### Neutral
- **Bone** (bone, oklch(0.962 0.009 78)): the page ground, the first two engine states, and every section after the engine.
- **Deep Bone** (bone-deep, oklch(0.935 0.013 76)): the placeholder behind screenshots while they load, and the fill of the mark chip.
- **Sheet White** (sheet-white, oklch(0.995 0.003 80)): the drawn data sheet. It sits just above bone so it reads as a sheet lying on the desk.
- **Figures Ground** (ground-figures, oklch(0.905 0.016 74)): the stage at FIGURES, one shade under bone.
- **Risk Ground** (ground-risk, oklch(0.355 0.018 60)): the stage at RISK, where the page turns dark for the risk sentence.
- **Parcel Ground** (ground-parcel, oklch(0.285 0.016 62)): the stage at PARCEL.
- **Ink** (ink, oklch(0.215 0.014 62)): text on bone, the DATA ground, and the closing ask band.
- **Soft Ink** (ink-soft, oklch(0.435 0.016 62)): secondary text, gauge labels on light grounds, spec labels and dates.
- **Rule** (rule, oklch(0.855 0.014 74)): hairlines on bone.
- **Dark Rule** (rule-dark, oklch(0.42 0.016 62)): hairlines on ink.
- **Paper Light** (on-dark, oklch(0.955 0.010 78)): text on dark grounds and on the bar button.
- **Soft Paper Light** (on-dark-soft, oklch(0.80 0.014 72)): secondary text on dark grounds.

### Named Rules
**The Two Targets Rule.** Oxide marks the lit gauge tick and the Email me button, and nothing else. Its only other appearances are states: the focus ring, the caret and text selection. A decorative third use breaks the system.

**The Falling Ground Rule.** Through the engine the ground's lightness only falls: bone, bone, figures, risk, parcel, ink, interpolated in OKLCH as each sheet lifts. Never lighten mid-dig. When the engine ends the page cuts back to bone in one step, and only the closing ask returns to ink.

**The Partner Tone Rule.** Every tone that sits on the ground has a dark partner, and the swap happens when ground lightness drops below 0.62: oxide to oxide-lit, ink-soft to on-dark-soft, rule to rule-dark, ink to on-dark.

## Typography

**Display Font:** Newsreader (with Iowan Old Style, Georgia, serif), variable, optical size 6 to 72
**Body Font:** IBM Plex Sans (with ui-sans-serif, system-ui, -apple-system, Segoe UI)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, SF Mono, Menlo, Consolas)

**Character:** A light, optically sized newspaper serif for names and claims, an engineering sans for explanation, and its mono sibling for anything that can be counted or checked. The serif carries the voice; the mono carries the evidence.

### Hierarchy
- **Display** (350, clamp(3rem, 1.6rem + 6vw, 6rem), 0.92): the name in the first viewport. The closing question uses the same weight, tracking and optical size one notch down (clamp(2.5rem, 1.2rem + 5vw, 5.75rem), 0.98) at a 14ch measure.
- **Statement** (400, clamp(2.6rem, 1rem + 5.2vw, 5.75rem), 0.96): the risk sentence alone, set on-dark. It is the only engine heading at this size.
- **Section** (400, clamp(2rem, 1.3rem + 2.6vw, 3.5rem), 1.02): section heads after the engine, each followed by a hairline that runs to the right edge.
- **Headline** (400, clamp(1.875rem, 1.25rem + 2.1vw, 3rem), 1.04): engine layer headings, one per frame.
- **Title** (400, clamp(1.5rem, 1.2rem + 1vw, 2.125rem), 1.08): project names in the ledger. The PropInfo summary is a notch larger (clamp(1.75rem, 1.3rem + 1.4vw, 2.5rem)); record rows a notch smaller (clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)).
- **Lede** (400, clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem), 1.55): engine paragraphs at a 38ch measure; the hero standfirst runs a touch larger at 34ch.
- **Body** (400, 1.0625rem, 1.6): ledger detail in soft ink at a 62ch measure; the one-line "what it is" sits above it at weight 500.
- **Label** (500, 0.75rem, 0.09em, uppercase): gauge labels; spec labels use the same face at 0.07em.
- **Caption** (400, 0.8125rem, 1.4): source captions, dates, footer. The engine's live caption runs at 0.75rem.
- **Numeral** (500, clamp(1.5rem, 1.1rem + 1.6vw, 2.25rem), 1, tabular): the records total. Every other number is mono at its context size.

### Named Rules
**The Measured Mono Rule.** IBM Plex Mono with tabular figures carries everything measured or labelled: numbers, URLs, dates, gauge and spec labels, source captions, status lines and the scroll cue. A sentence of argument is never set in mono.

**The Light Serif Rule.** Newsreader stays at weight 350 to 400 with negative tracking (-0.012em to -0.035em) and an optical size matched to its size (48 to 72). The serif is never bold; emphasis comes from size and from the frame it is given.

## Layout

A centred container (max 86rem) with a fluid side gutter (clamp(1rem, 4.6vw, 5rem)) under a fixed 4rem bar.

**The engine.** A 640svh section holds a sticky 100svh stage. One scroll unit is 100svh: a hero state, five layers, and a short hold at the end. From 1024px the gauge sits on the left edge, centred vertically; copy starts at the gutter plus 9.5rem in a column of min(29rem, 31vw) (the hero gets min(32rem, 34vw)); the sheet sits on the right at min(44vw, 46rem) by min(80svh, 44rem). Below 1024px the gauge becomes a row under the bar with labels beneath the ticks, the sheet sits at the top at min(40svh, 30rem) with its source caption under it, and the copy follows. Under 720px tall the sheet drops to 34svh. A band the colour of the ground sits behind the bar so the pile never shows through it.

**The fallback.** The engine pins only when motion is welcome and the screen is at least 560px tall, decided before first paint. Otherwise the layers stack as full-width bands, each painted in its own ground tone, and the name and the report share one opening grid (5fr and 7fr from 1024px).

**The ledger.** The PropInfo summary splits 4fr and 8fr from 900px. Project entries run one column, then 5fr and 7fr from 760px with the screenshot spanning both rows, then three columns (4.2fr, 5fr, 3.2fr) from 1180px. "In development" and "Public code" sit side by side from 900px. Record rows put title and organisation left and the date right.

**Rhythm.** Sections breathe at clamp(4rem, 8vw, 6.5rem), ledger rows at clamp(1.75rem, 3vw, 2.5rem), fallback engine bands at clamp(4.5rem, 11vw, 8rem).

### Named Rules
**The One Frame Rule.** In the engine one frame holds one heading, one paragraph and one sheet. Copy crossfades with an 18px drift as the top sheet clears, so a heading is always on screen and two layers' copy never share it.

## Elevation & Depth

A hybrid. Depth comes first from tone (the falling ground) and from position (the pile). Objects that rest on the desk, the buttons, the screenshots and the drawn data sheet, carry soft warm shadows. The captured product sheets bring their source's own shadow inside the raster. Text, rows and bands are flat. Past the engine the bar becomes glass: 90% bone with a 12px backdrop blur, saturation 1.2, and a rule hairline beneath.

### Shadow Vocabulary
- **Button** (`box-shadow: 0 1px 2px oklch(0.2 0.01 60 / .25), 0 8px 18px -10px oklch(0.2 0.01 60 / .45)`): the pinned Email me button at rest. On hover the drop lengthens to `0 12px 24px -12px` at .55.
- **Ask button** (`box-shadow: 0 1px 2px oklch(0 0 0 / .35), 0 10px 22px -12px oklch(0 0 0 / .6)`): the closing Email me button on ink.
- **Sheet** (`box-shadow: 0 1px 2px oklch(0.1 0.01 60 / .25), 0 24px 44px -26px oklch(0.05 0.01 60 / .7)`): the drawn data sheet on a dark ground.
- **Shot** (`box-shadow: 0 1px 2px oklch(0.3 0.02 60 / .14), 0 18px 34px -20px oklch(0.3 0.02 60 / .45)`): ledger screenshots at rest; on hover `0 2px 4px oklch(0.3 0.02 60 / .16), 0 26px 44px -22px oklch(0.3 0.02 60 / .55)` with a 3px rise.

### Named Rules
**The Paper Shadow Rule.** Every shadow is a pair: a 1 to 2px contact line plus a long, soft, negative-spread drop, tinted warm (hue 60) on bone. Only the ask button, on ink, uses neutral black. No hard offsets, no glows, no text shadows.

**The Pile Rule.** In the engine, depth is position. Each sheet under the top one sits 16px lower and 4% smaller with its own resting tilt (1.6, -1.2 and 1 degrees), and at most three show beneath. A sheet leaves by rising 108% of the viewport while turning -5 degrees, fading over the last 30% of its lift.

## Shapes

Rows, bands and sections are square. Radius belongs to objects that sit on the desk: pills (999px) for the Email me buttons and the mark chip, gently rounded sheets (18px, 14px below 1024px) for the drawn data sheet, softly rounded screenshots (8px), and 2px ends on the data sheet's bars. Gauge ticks are 12px circles on a 1px thread. Lines are 1px hairlines; a 1px ink rule opens a group (the summary row, the data sheet's caption), and a 3px double ink rule closes a total, like a ledger. The focus ring is a 2px outline with a 3px offset and 3px corners.

## Components

### Buttons
Tactile pills, the only filled controls on the page.
- **Shape:** full pill (999px), inline mail icon in stroke 1.6 at 1.05em.
- **Email me (bar):** Kiln Oxide fill, Paper Light text, 600 weight at 0.9375rem, 0 1.15rem padding, 44px minimum height. Pinned top right on every screen.
- **Hover / Focus:** hover deepens to Fired Oxide and lengthens the shadow (0.2s colour, 0.25s exp); press drops 1px. Focus is a 2px Kiln Oxide ring, Ember Oxide over dark.
- **Email me (ask):** the same pill at 56px with 0 1.6rem padding and 1.0625rem text, Ember Oxide fill with ink text, on the ink band. Hover brightens it.
- **CV link:** a text link with a download icon, Paper Light, 44px tall, beside the ask button.

### Links
- **Style:** 1px underline at 0.22em offset, drawn at 38% of the text colour, going solid on hover (0.2s). URLs are mono 500 at 0.875rem and wrap mid-word rather than overflow.

### Chips
- **Mark:** pill, 1px rule border, Deep Bone fill, Soft Ink text in sans 500 at 0.8125rem. Used to flag client work; no interactive state.

### Cards / Containers
There are no cards. Containers are ledger rows.
- **Ledger row:** a 1px rule on top, no fill, no radius, no shadow. Screenshot, body and side panel share the row (see Layout).
- **Screenshot:** 16:10, 8px radius, cropped from the top, Deep Bone behind it while loading, the Shot shadow, and a 3px lift on hover (0.5s exp) only on devices that hover. The image link duplicates the title link and is hidden from assistive tech.
- **Spec list:** a two-column definition list, mono uppercase labels (0.75rem, 0.07em, Soft Ink) against sans values (0.9375rem).

### Navigation
- **Bar:** fixed, 4rem, transparent and click-through except for its children until the reader passes the engine, then bone glass with a rule hairline. The name fades in, serif at 1.1875rem with a 6px rise (0.45s exp), once the hero is 60% scrolled; the bar text turns Paper Light over dark stages. A "Skip to the work" link appears on focus as an ink lozenge with 6px corners.

### Gauge (signature)
The depth instrument for the engine.
- **Form:** five buttons, REPORT, FIGURES, RISK, PARCEL and DATA, each 44px tall with a 12px ring tick and a mono uppercase label, threaded by a 1px line at 28% of the text colour.
- **Active:** marked as the current step; the tick fills Burnt Oxide (Ember Oxide once dark) and scales to 1.25 (0.4s exp). The lit tick changes at the same moment the copy hands over.
- **Behaviour:** clicking a tick glides to that layer through Lenis in 1.4s. Vertical on the left edge from 1024px, a horizontal row under the bar below it, absent in the fallback.

### Engine Stage (signature)
- **Ground:** one stage colour, interpolated in OKLCH between ground tones with a smoothstep curve after a 0.3 dwell, written once per frame from a single rAF loop on scrollY.
- **Sheets:** real captures (AVIF with WebP fallback) or the drawn data sheet, stacked per the Pile Rule. During the risk sentence the map steps back, to 88% scale and 62% brightness, and nothing beneath it shows.
- **Caption:** the active layer's own source line, mono at 0.75rem, bottom right on desktop and under the sheet on phones.
- **Count:** on reaching DATA the total runs once from 0 to 5,880,000 over 1.5s on an exponential ease-out.

### Data Sheet (signature)
A ledger drawn in HTML, the last sheet in the pile.
- Sheet White, 18px radius, the Sheet shadow, ink text.
- A caption row underlined in 1px ink, rows of label and right-aligned mono figure, each over a 4px track (2px ends) with a Soft Ink fill sized to proportion (never under 3px).
- A total closed by a 3px double ink rule and set in the numeral style.

### Closing Ask
- Ink band, the display serif question at a 14ch measure, a Soft Paper Light lede at 40ch, the action row, the address in mono, and a mono footer row over a Dark Rule hairline.

## Do's and Don'ts

### Do:
- **Do** keep oxide to the lit gauge tick and the Email me button, and borrow it only for the focus ring, caret and selection.
- **Do** set every number, URL, date and label in IBM Plex Mono with tabular figures.
- **Do** swap to the partner tone (oxide-lit, on-dark-soft, rule-dark, on-dark) whenever ground lightness drops below 0.62.
- **Do** use real captures (AVIF with a WebP fallback, at 2x) for product imagery, caption each with where it was captured, and draw data in HTML or SVG.
- **Do** separate rows with 1px hairlines, open a group with a 1px ink rule, and close a total with a 3px double ink rule.
- **Do** drive scroll motion with transform, opacity, filter and the one stage colour only, from a single rAF loop on scrollY, and use the exp curve (cubic-bezier(0.16, 1, 0.3, 1)) for state transitions.
- **Do** keep every interactive target at least 44px tall.
- **Do** give reduced motion and screens under 560px tall the stacked fallback: every layer in order, each band in its own ground tone.

### Don't:
- **Don't** add a second accent colour or use oxide as decoration on borders, icons, headings or backgrounds.
- **Don't** lighten the ground while digging down; the only lightening is the single cut back to bone after the engine.
- **Don't** box projects in cards or tile them in a grid; in a ledger row the screenshot is the only object with radius and shadow.
- **Don't** use generated or AI imagery anywhere; if it cannot be captured, draw it in HTML.
- **Don't** set Newsreader bold or set prose in mono.
- **Don't** use hard offset shadows, glows or text shadows.
- **Don't** put an eyebrow or kicker above a heading; labels belong to the gauge, the spec lists and the captions.
- **Don't** round rows, bands or sections; radius belongs to pills (999px), sheets (18px) and screenshots (8px).
