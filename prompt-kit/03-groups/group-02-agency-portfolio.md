# GROUP ADDENDUM — agency-portfolio (paste after the master)

## Archetype — what you're probably holding
- Next/Nuxt/Astro or vanilla Vite; GSAP + ScrollTrigger + Lenis (or Locomotive); split-type/SplitText headlines; barba.js or Framer Motion `AnimatePresence` page transitions; sometimes curtains.js/ogl/three hover-distortion image planes.
- Expected inventory, in order: preloader with percentage counter → hero with 10–18vw display type → "selected work" list/grid with cursor-following image previews → a pinned horizontal-scroll case-study strip → studio manifesto → clients/awards marquee → oversized "let's talk" footer.
- A custom cursor is near-universal: lerped dot+ring follower with state labels ("view", "drag"), usually `mix-blend-mode: difference`.
- Commerce logic in the codebase: none. Assume zero cart, zero variants, zero price rendering — you graft all of §5.5 yourself.

## The soul — what must survive
- **Type is the imagery.** The viewport-filling display headline IS this archetype. Keep the scale, the tight leading, the masked line reveals — retarget the words to the product.
- The cursor system survives (fine pointers only); its labels become commerce states: "view" → "add — $39", "drag" → "explore".
- The **work-list hover preview** (mousemove-lerped floating image over list rows) and the **pinned horizontal strip** are what strangers screenshot — at least one must carry the product story.
- Page-transition choreography (wipe/curtain/shared-element) stays; it becomes the grid-tile → buy-box journey.
- Keep the editorial asymmetric grid rhythm. Do NOT normalize it into uniform product cards.

## Ecom mapping — the isomorphism
- Hero manifesto ("We build brands…") → product manifesto with the pill as the featured work; price visible and working add-to-cart in the hero (§5.5).
- "Selected work" list/grid → **benefit + bundle catalog**: each row/tile is a product chapter (Formulation · Absorption · Ritual) or a priced bundle; the hover preview swaps capsule renders per row.
- Case-study detail → the buy box / PDP; the template's page transition IS the tile→buy-box shared-element journey.
- Horizontal-scroll case-study strip → product-story timeline (ingredient → coating → 24h dosage arc); numerals oversized and mono per §1.
- Clients/awards marquee → press/certification marquee on the §3.4 engine · studio "about" → science/trust band · "let's talk" footer → final CTA with price in the label + the compliant legal block.

## Pill-bench staging
- **Hero medium = the display type itself.** Set "THE PINK PILL" at viewport scale and make the capsule a typographic citizen — it replaces a counter-form (an O, the dot of an I) or floats lerped between headline lines: 3D clearcoat capsule if the template already runs WebGL planes, otherwise a CSS-gradient capsule riding the same lerp as the cursor previews, soft shadow as the floor.
- **Capsule moment = the horizontal strip at maximum intensity:** the capsule is the persistent protagonist traveling across 4–5 pinned panels (PP-01 spec sheet → two-tone shell splits open → 750 MG numeral wall → bundle reveal), rotation and travel scrubbed through the one-store pattern (§4 state). No horizontal strip? Then the work-list is the moment: each benefit row morphs the floating preview capsule (rotation/scale/split per row), and the row click wipes into the buy box.
- The transition INTO the buy box is part of the bench: shared-element the capsule across the wipe; cart state must agree on both sides of it.

## Keepers to hunt for
1. Cursor system — `cursor.js` / `useCursor` / a `<Cursor>` component with lerp constants + state labels.
2. Page-transition layer — barba hooks, `AnimatePresence` wrappers, `transition/` or `curtain/` components.
3. Horizontal scroll rig — pinned ScrollTrigger driving `xPercent` on a flex track; record its `end` math, it encodes the panel count.
4. Work-list hover preview — the mousemove-lerped absolutely-positioned image that swaps per row.
5. SplitText/split-type reveal factory — its exact stagger/ease values are the template's fingerprint; keep them.
6. WebGL hover-distortion planes — curtains.js/ogl shaders under `shaders/` or `gl/`.
7. Preloader sequence — counter + curtain lift; retime to ≤2.5s and route its counter through the §3.3 contract.
8. FLIP/shared-element grid→detail transition.

## Traps
- **Buy path beats choreography:** any click on the purchase path completes its transition in ≤.6s — no buyer waits through a 2s curtain wipe. Cap it or bypass it; measure it.
- **Cart survives transitions:** cart/bundle state lives above the transition layer (root store), never inside a page component that barba/AnimatePresence destroys. The buy box must deep-link and render cold — no transition prerequisite.
- **Nothing commercial is hover-gated.** Work-list previews are hover-only by design; prices, bundle contents, and trust copy render inline without a pointer (coarse pointer = full info visible).
- **Cursor discipline:** kill the custom cursor on coarse pointers and under `?rm=1`; never hide the native cursor unless the replacement is mounted and painting; it must not swallow `:focus-visible`.
- **Oversized type is a 375px bomb:** every display headline gets `clamp()` with a tested floor — the pill's name plus price is longer than a studio wordmark. Verify no mid-word wraps and `scrollWidth === clientWidth`.
- **Horizontal strip on mobile:** unpin and convert to stacked vertical panels or native scroll-snap swipe — a pinned horizontal scrub on touch is jank, not spectacle (§8).
- **Image weight:** these templates ship 5–15MB of case-study photography. Replace it wholesale with light capsule renders/gradients — never stack the pill on top of it. The preloader must not be masking a 4s LCP.
- **Don't ship the factory look:** near-black + one acid accent with the accent swapped to pink fails §9 verbatim. Re-derive the palette so `#F0148C` is structural — type, rules, hover states — not a recolored theme variable.
