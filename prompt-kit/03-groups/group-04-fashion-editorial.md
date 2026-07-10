# GROUP ADDENDUM — fashion-editorial (paste after the master)

## Archetype — what you're probably holding
Lookbook/editorial/magazine template: Next/Nuxt/Astro or vanilla + GSAP/ScrollTrigger + Lenis; split-type serif display headlines (Canela/Ogg/Editorial-New class faces); full-bleed photography inside `overflow:hidden` frames with inner parallax; asymmetric 12-col grid with deliberate whitespace; hover zooms, clip-path image wipes, a lerped custom cursor ("View"/"Drag"); often a horizontal drag gallery, a page-transition curtain (barba/router hooks), sometimes a WebGL displacement-on-hover shader (curtains.js/three). Content model is "looks"/"stories"/"issues" with figure numbering (`01 — Look`). This is the closest cousin to luxury ecom — the isomorphism is nearly 1:1; your job is re-aiming, not rebuilding.

## The soul — what must survive
- The **grid rhythm**: asymmetric image placements, deliberately empty columns, captions hanging off frames. Do not regularize it into equal card rows — the moment every cell is the same size, the archetype is dead.
- The **serif display attitude**: huge tight-tracked headlines, italic accent word, type overlapping imagery. Keep the faces unless PRODUCT CONTEXT collides.
- The **image treatment stack**: full-bleed frames, inner-parallax masks, hover zoom with its exact ease, clip-path reveals. These ARE the signature unless a shader outranks them (§2 — adapt into it, never bolt on).
- The **editorial pacing**: chapters/looks, figure numbers, captions — commerce must arrive as an "issue" of the magazine, not a bolted-on shop.
- The cursor system and page-transition feel, if present — adapt, never delete.

## Ecom mapping — the isomorphism
- Cover/campaign hero → product hero: pill as cover subject, headline over image, **price as the kicker/dek line**, add-to-cart styled as the template's strongest CTA treatment.
- Lookbook grid → catalog: each cell = one art-directed capsule "plate" (macro, colorway field, shadow study); captions become `PP-01 · 750 MG` spec lines; hover reveals price.
- Feature/cover-story article → product story: formulation dossier with pull quotes and figure-numbered ingredient plates, running through the signature image mechanic.
- Designer/atelier "about" → formulation credo + founder note.
- Stockists/contact → buy box: bundles as "editions" ($39 single / $99 3-pack pre-selected "most popular" / $29/mo subscribe), FLIP selection per §5.5.
- Masthead/credits/colophon → trust band + compliant footer: guarantee · secure checkout · payment marks set in masthead typography.
- Press/journal strip → reviews: 6–8 quotes as pull-quote clippings with initials.

## Pill-bench staging
The medium here is **photography, and the pill has none — manufacture it.** Build 6–10 "editorial plates": CSS/SVG-staged capsule compositions (gradient capsule with clearcoat-style highlight and soft floor shadow; macro crops; pill on a `#F0148C` field; pearl-white still life) art-directed to fill every image slot the template expects. If the template carries a WebGL image shader, feed the plates through it. Hero = full-bleed cover plate, masked serif headline over it, price in the dek.
**Capsule moment** = the lookbook sequence at maximum intensity: a pinned, scrubbed spread — "One capsule, six looks" — full-bleed plates swapping via the template's own clip-path/wipe mechanic, figure counter ticking 01→06 (counter contract §3.3), captions re-splitting per look, palette alternating pink/pearl. If the signature is a drag gallery instead, the pill tumbles across it as sequential plates; if a hover shader, the capsule dissolves between its two tones. Screenshot moment: mid-sequence, wipe half-open, both plates visible.

## Keepers to hunt for
1. Clip-path/mask image reveal (`inset()`/scaleX curtain) — `components/*Image*`, `utils/reveal*`, `animations/*`.
2. Inner-parallax masked image (child at `scale:1.1–1.2` + `yPercent` scrub inside an `overflow:hidden` parent).
3. Lerped custom cursor with contextual label ("View"/"Drag") — usually a singleton in `cursor.*`.
4. Horizontal pinned/drag gallery rig (x-scrub or inertia drag) — prime buy-box carousel candidate.
5. Serif display type scale + italic accent utilities + the split-type headline reveal config.
6. Figure-number/caption micro-system (`01 — Look`) — reuse verbatim for specs and dosage steps.
7. Page-transition curtain (barba/router hooks) — harvest even if you disable routing.
8. WebGL displacement/RGB-shift hover shader, if present — instant capsule-moment upgrade.

## Traps
- NEVER ship an unfilled image slot or a stretched lone PNG — one gray placeholder kills this archetype; every frame gets an art-directed plate before anything else is styled.
- Image weight IS the perf budget: AVIF/WebP, explicit `aspect-ratio` boxes (zero CLS), lazy-load below the fold, preload ONLY the hero plate — full-bleed at DPR>1.5 is where 60fps dies.
- Buy CTAs are buttons, not underlined captions: ≥44px, visible without hover, price in the label — fashion templates habitually whisper their CTAs; commerce may not.
- Any hover-gated price/info gets an always-visible mobile twin (coarse pointer = no hover, master §8).
- Serif is display-only: prices, dosage, legal, UI chrome go mono/sans per master §1 — serif numerals at small sizes read as decoration, not facts.
- The palette will drift blush/beige toward the template's neutrals — the accent stays `#F0148C`, tested against the ivory ground, not white (master §1: nursery test).
- Pinned horizontal galleries degrade to native `overflow-x` + scroll-snap at ≤799.98px and must never leak body horizontal scroll at 375px.
- Page transitions must not eat cart state or strand ScrollTriggers — pin the build to one route or re-init triggers in the transition's afterEnter; verify the cart badge survives navigation.
- `?rm=1` kills parallax, zoom, wipes, and kinetic type — every masked plate must land fully visible via the §3.2 failsafe; a masked image with no failsafe is a blank magazine.
