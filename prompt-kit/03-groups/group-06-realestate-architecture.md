# GROUP ADDENDUM — realestate-architecture (paste after the master)

## Archetype — what you're probably holding
- Photography-led editorial minimalism: full-bleed 4000px property shots, serif/hairline-grotesk pairing, greige-charcoal palette, huge whitespace, thin rules. Motion is usually parallax + Ken Burns + fades — the ceiling lives in the *components*, not shaders.
- Expect most of: filterable listing grid (Isotope/MixItUp or framework state), before/after comparison slider (clip-path + drag handle), floor-plan hotspot explorer (SVG pins over a plan), Mapbox/Leaflet/Google map with custom markers, Matterport/Kuula 360-tour iframe, PhotoSwipe/lightGallery lightbox, specs tables (BD · BA · SQFT), inquiry form posting to a dead PHP endpoint, multi-page listing→detail routing, sometimes jQuery under a modern coat.

## The soul — what must survive
- The page IS a property tour: arrival (exterior hero) → walkthrough (rooms) → specifications → location → inquiry. Keep that spatial narrative order — the adaptation must still read as *touring* something.
- Data-as-design is this archetype's native voice: mono numerals, dimension lines, hairline spec tables ("4 BD · 3 BA · 2,450 SQFT"). This is exactly §1's numerals-as-feature — lean into it hard.
- The tactile survey mechanics — before/after drag, floor-plan hotspots, map pins, lightbox zoom — ARE the signature (§2). Whichever one this template executes best is THE mechanic; never replace it with a generic scroll effect.
- Editorial restraint: one image per viewport, whitespace intact. Do not densify it into a shop grid.

## Ecom mapping — the isomorphism
- Listing grid → catalog: each bundle is a "listing" card — status badge (Most Popular where Available was), price in the list-price slot, sqft-style spec line = dose · count · days' supply.
- Single-property hero → product hero: the capsule staged as architectural photography; "PP-01 · 750 MG" set like a lot number in the masthead; $39 in the listing-price position; working add-to-cart where "Schedule a viewing" sat.
- Floor plan → capsule anatomy: cross-section with room-style hotspots (master suite → active compound), dimension arrows, mono area labels.
- Before/after slider → the transformation: shell/core cutaway or Day 0 → Day 30, same drag handle, same physics.
- Virtual-tour embed → product orbit: replace the iframe with an owned scroll/drag sequence around the capsule.
- Specs table → supplement-facts panel in the verbatim table styling; amenities list → benefits; neighborhood/testimonials → 6–8 "resident" review quotes, initials only.
- Map section → ingredient-sourcing map reusing the custom-marker styling; inquiry/agent form → buy box (3 bundles as "units," 3-pack pre-selected per §7).

## Pill-bench staging
- Hero medium: this archetype is almost never WebGL-capable — use its full-bleed architectural-photo pattern reskinned: CSS gradient capsule lit like an award building shot (hard key, soft floor shadow, greige backdrop), the template's own parallax/Ken Burns intact, title block as listing masthead. If the template genuinely runs three.js (rare — some archviz studios), §7.1's clearcoat 3D capsule overrides this.
- Capsule moment — **THE CUTAWAY**: a pinned full-viewport sequence where the photoreal capsule wipes into an architectural blueprint of itself through the template's comparison/plan mechanic at max intensity — the drag handle (or scrub) sweeps photo → linework cross-section: hairline dimension arrows ("24.5 MM"), hatching, room-labeled ingredient hotspots opening spec panels, `750 MG` set as the area figure. `#F0148C` is the only ink accent on the blueprint. If the template's best mechanic is the map instead, fall back to a `flyTo` tour across ingredient-origin pins — but the cutaway wins whenever both exist.

## Keepers to hunt for
1. Before/after slider — grep `clip-path`/`inset(` + `pointerdown` on a handle; components named Compare/BeforeAfter/ImageCompare.
2. Floor-plan hotspot explorer — SVG or absolutely-positioned pins with a detail panel; files named FloorPlan, Hotspot, tour.*.
3. Filter grid with FLIP relayout — Isotope/MixItUp init or animated state-filtered grid + category chips.
4. Custom map treatment — Mapbox/Leaflet init, marker/popup CSS, scroll-linked `flyTo` choreography.
5. Lightbox with thumbnail→fullscreen FLIP zoom — PhotoSwipe/lightGallery config and its easing.
6. Specs/amenities table system — dt/dd or grid with hairline rules and mono numerals; reuse verbatim for supplement facts.
7. Pinned walkthrough scrub — image-sequence or room-by-room panel choreography.
8. Availability/units table with status badges — direct reuse for bundle and stock states.

## Traps
- Image weight kills this archetype before anything else: templates ship 4000px JPEGs. Resize/recompress every asset (hero ≤250KB, WebP/AVIF), lazy-load below the fold — or LCP fails before any animation matters.
- Live maps need API keys and megabytes of JS: no key → replace with a styled static/SVG map; NEVER ship gray tiles. If a live map stays, `scrollZoom.disable()` — a map that captures wheel events breaks Lenis and traps the scroll.
- Matterport/Kuula iframes are third-party dead weight you cannot reskin: cut them and rebuild the tour with owned mechanics. Never leave an empty iframe shell as a placeholder.
- Before/after handles fight touch scroll: `touch-action: pan-y` on the container, drag initiates only from the handle, arrow keys move it (§4 ARIA in full or not at all).
- Dead plumbing everywhere: inquiry forms POST to defunct PHP mailers and nav links point at detail pages you deleted. Collapse to one landing page; every button becomes a real cart action per §4 — no mailto, no dead POST, no 404 nav.
- Grep data files for leftover listings — "$1,250,000", fake addresses, "SOLD" badges — before declaring one source of commercial truth (§4).
- jQuery/Isotope grids grafted into a framework fight its renderer: if the fight exceeds §5.6's ~1-day budget, mark HARVEST and rebuild the grid natively.
- The greige palette will try to swallow the pink: do not "tastefully" mute `#F0148C` toward dusty rose to match the interiors. The pink is the ink; the neutrals are the paper.
- Ken Burns and parallax heroes must fully die under `?rm=1` — a slowly zooming "static" hero is still motion, and this archetype hides it in CSS animations GSAP kills won't reach.
