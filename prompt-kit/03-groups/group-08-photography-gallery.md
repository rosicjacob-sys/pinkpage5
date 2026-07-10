# GROUP ADDENDUM — photography-gallery (paste after the master)

## Archetype — what you're probably holding
Static-first or light-SPA (Next/Astro/Vite, sometimes plain HTML+GSAP). Imagery IS the interface: a masonry or CSS-columns grid, a lightbox engine (PhotoSwipe/lightGallery/Fancybox or a custom FLIP expand), a fullscreen slideshow (Swiper or bespoke crossfade/Ken Burns), category filter chips with animated reflow, IntersectionObserver lazy-load with blur-up placeholders, an asset preloader with a % counter, hover = scale-inside-clipped-frame + caption reveal, chrome reduced to a hairline nav and mono EXIF-style captions. WebGL is rare; when present it's an image-distortion hover shader (curtains.js-style) — if you find one, it outranks everything and becomes the signature.

## The soul — what must survive the adaptation
1. **Image-first hierarchy** — chrome whispers, full-bleed imagery talks. Keep the negative space and hairline nav; never bolt card UI on top.
2. **Grid rhythm** — mixed aspect ratios flowing in masonry, stagger-revealed on scroll. The scroll IS the experience.
3. **Continuity of expansion** — thumbnail → lightbox as one unbroken FLIP movement, never a modal popping over. This is the signature mechanic unless a hover shader exists.
4. **Mono EXIF caption typography** — the archetype's voice; reuse it verbatim for dosage/price numerals per master §1.
5. The preloader counter, if present — repurpose it, never delete it.

## Ecom mapping — the isomorphism
- Preloader → brand boot: counter runs 0→100 then snaps to `PP-01 · 750 MG` (counter contract, master §3.3).
- Hero slideshow / full-bleed shot → hero product still with price and WORKING add-to-cart in the minimal chrome overlay; price visible without hover, non-negotiable.
- Portfolio masonry → catalog-as-lookbook: each cell a "shot" of the product (macro, texture, in-context); filter chips become bundle/benefit filters — never let a filter empty the grid.
- Project/case-study lightbox → the buy box: the expanded view carries variant selection (3-pack pre-selected), exact price, add-to-cart. An image-only dead-end lightbox is a failed adaptation.
- Captions/EXIF strips → spec lines: dosage, formulation, price set in the template's mono caption style.
- About/bio → formulation story · press/client logo strip → trust band · contact → CTA + FAQ + compliant footer (master §6).

## Pill-bench staging
Hero medium: the full-bleed "photograph." No WebGL here means you build the capsule as an art-directed CSS still — two-tone gradient capsule (`#F0148C` + pearl) on a seamless studio sweep with soft contact shadow — then treat it exactly like the template treats a hero photo: same crop behavior, same reveal, same slideshow slot. If a hover-distortion shader exists, the capsule runs through it (and `?nogl=1` must degrade to the plain still).
**Capsule moment** (master §7.2: "in a gallery template the pill multiplies across the grid"): a full-viewport masonry contact-sheet — 20–30 cells of capsule variations (macro, exploded powder, duotone, negative) stagger-revealing at the grid's maximum density, then ONE cell FLIP-expands into the lightbox-buy-box. Multiplication → expansion → purchase as a single unbroken sequence; that expansion frame is the screenshot moment.

## Keepers to hunt for
1. The lightbox/FLIP-expand engine (`lightbox.*`, `Modal*`, PhotoSwipe/lightGallery config plus its open/close transitions).
2. Masonry/packing logic + animated filter reflow (Isotope/Masonry init, custom packers, FLIP filter code).
3. Preloader with progress counter and its asset-manifest preloading system (`preloader.*`, `loader.*`).
4. The hover treatment: clipped-frame image scale + caption reveal — usually a CSS/GSAP pair worth lifting verbatim.
5. Slideshow/Ken Burns crossfade engine (Swiper config or bespoke autoplay + easing).
6. Custom cursor follower ("view"/"drag" badge).
7. Lazy-load system with LQIP/blur-up placeholders.
8. Page-transition system (barba.js/swup curtain wipes) — adaptation-expensive; usually HARVEST, not ADOPT.

## Traps — archetype-specific failure modes
- **Image weight kills these templates.** Responsive `srcset` on every grid image, lazy-load everything below the fold, preload ONLY the hero. A 40-image full-res masonry scores 0 on performance discipline.
- The preloader gets the §3.2 wall-clock escape: 3.5s force-finish. One stalled asset must never gate the page.
- The lightbox must stop/start Lenis explicitly — `overflow:hidden` hacks fight smooth scroll and leak scroll position — and it closes on breakpoint crossings (master §4).
- Any commercial fact (price, claim, CTA) living in a hover caption must ALSO exist statically — hover captions are invisible to coarse pointers. Gallery minimalism never gets to hide the buy box.
- Masonry libraries measure once on load: re-layout after `document.fonts.ready` AND images loaded, plus a wall-clock re-measure — observers are hints, wall-clocks are guarantees (master §4).
- Ken Burns / image-scale motion is transform-only, no per-frame layout; under `?rm=1` the slideshow renders ONE static frame and grid reveals show final state.
- CSS-columns masonry scrambles DOM order — verify tab order, and the lightbox keeps full keyboard nav (arrows, ESC, focus trap) after it becomes a buy box.
- These templates ship with ZERO commerce state. Build the cart store + sticky buy bar (master §5.5) on day one — it is the bulk of the adaptation cost, not a garnish.
