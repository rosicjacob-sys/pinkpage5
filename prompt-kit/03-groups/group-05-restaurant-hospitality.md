# GROUP ADDENDUM — restaurant-hospitality (paste after the master)

## Archetype — what you're probably holding
Restaurant/cafe/hotel/spa template. Expect: full-bleed ambience photo or looping video hero with slow Ken Burns zoom; transparent nav that solidifies on scroll; serif display type (Canela/Ogg/Playfair class) with letter-spaced uppercase eyebrows; a MENU of dotted-leader price rows in tabs/accordions; a reservation/booking form or third-party embed (OpenTable/Resy/SevenRooms); clip-path/mask image wipes on scroll; hover cards (dishes/rooms/treatments) with image zoom + caption slide; press-logo marquee; hours/location/map footer. Stack is usually vanilla+GSAP or a Webflow/Framer export, sometimes Next/Nuxt with barba/swup page-curtain transitions. WebGL is rare — assume image-led until the inventory proves otherwise.

## The soul — what must survive the adaptation
This archetype's identity is CEREMONY: content is served course-by-course, never dumped. The defining mechanics — the dotted-leader menu row, the mask-wipe image reveal, the ambience layer (grain, vignette, candle/steam loops), the transparent→solid nav, the ritualized booking flow — are the soul. Keep the unhurried idle life and the plated-photography art direction. A stranger must still smell the dining room; it just sells a capsule now.

## Ecom mapping — the isomorphism
- Menu (dotted-leader rows) → the buy box. It is ALREADY a priced list: single $39 / 3-pack $99 (pre-selected, "most popular") / subscribe $29/mo rendered as three "courses," selection animated per §5.5.
- Reservation flow → add-to-cart ritual. Party-size stepper → quantity; date picker → subscription cadence; the persistent "Book a table" CTA → "Add to cart — $99" mutating real cart state (§4).
- Chef's story / About → product story: formulation as recipe, sourcing as ingredients.
- Room/treatment rate cards → bundle cards (rate → price, amenities → what's-inside).
- Gallery / ambience grid → product-in-context imagery; dish cards → ingredient/benefit cards.
- Press marquee + guest testimonials → trust band + 6–8 review quotes (initials, §6).
- Hours/location/map → shipping/FAQ/legal footer with the verbatim supplement block (§6).

## Pill-bench staging — plated hero, tasting-menu capsule moment
Hero medium: this archetype is image-led — PLATE the pill. CSS gradient capsule (3D clearcoat capsule only if WebGL already exists) presented as food photography: warm rim light, linen/marble/ceramic ground, shallow-DOF shadow, carried by the template's own hero treatment (Ken Burns/parallax + grain + vignette). Price and working add-to-cart visible in-hero (§5.5).
The capsule moment: a TASTING MENU OF PP-01 — the menu mechanic at maximum intensity. A pinned, scrubbed course-by-course sequence: each scroll step "serves" one ingredient of the 750 MG formulation — dotted-leader row types in (name ……… dose, mono numerals), a macro image mask-wipes in, the ambience layer breathes. Final course is the capsule itself, the chef's signature, landing on "The Pink Pill ……… $39" with the leader dots drawing themselves. Mobile: short non-pinned scrubs per §8.

## Keepers to hunt for
1. Dotted-leader menu row (grep `menu-item`, dotted `border-bottom`, `::after` dot fills) — becomes the buy box and the capsule-moment typographic engine.
2. Reservation stepper/modal (grep `reservation|booking|book`) — harvest the step choreography for bundle selection; discard its backend.
3. Clip-path/mask image wipe (grep `clip-path|inset(`, `.reveal`) — the section-reveal workhorse.
4. Ken Burns hero media rig + transparent→solid nav transform (scroll-position class swap).
5. Ambience layer: grain overlay, vignette, steam/candle particle canvas or CSS loop.
6. Hover dish/room card (image zoom + caption slide) — reskin as ingredient/benefit cards.
7. Hours/menu tabular typography (tabular figures) — reuse for the dosage/supplement-facts table.
8. Page-curtain transition (barba/swup) — strip the router; harvest the curtain as ONE section transition only if it's the signature.

## Traps
- The factory palette IS §9's reject list (cream+serif+terracotta). Keep the warmth machinery — grain, glow, vignette — but restate the palette around `#F0148C`; if the pink drifts toward rosé/salmon to "match the ambience," it's wrong (§1).
- Booking embeds are not carts: rip out OpenTable/Resy/Instagram scripts and calendar libraries entirely. The CTA must set real cart state at the exact promised price (§4) — a styled iframe shipped as "checkout" is an automatic fail.
- Luxury pacing lives in idle loops, not entrances: this archetype's 2–3s crossfade reveals will trip the 3.5s failsafe wall-clock constantly. Reveals ≤1.1s (§2); slowness belongs to ambience layers only.
- Full-bleed media is the LCP: compress the hero, `preload="metadata"` + poster on video, never autoplay hero video on mobile, gate all of it behind `?rm=1`.
- Ken Burns on every image is a paint storm: scale transforms on the hero only; every other image is static or mask-wiped; all motion dead under `?rm=1`.
- Menu prices here are decorative strings ("market price"): every rendered price must come from the single commercial source of truth (§4) — grep the dotted-leader rows for hardcoded numbers before shipping.
- Assume zero commerce plumbing: no cart, no variants, no forms beyond booking. Budget the full §5.5 spec as new work in the plan — do not "discover" it late.
- Dark ambience + thin serif fails contrast: scrim behind every text-on-image block, and verify at 375px where images crop tighter.
