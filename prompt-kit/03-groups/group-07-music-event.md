# GROUP ADDENDUM — music-event (paste after the master)

## Archetype — what you're probably holding
- Artist/festival/tour template: React/Next or vanilla+GSAP, occasionally Nuxt. Expect: video-loop hero (`<video muted loop playsinline>` + poster), oversized condensed uppercase display type (variable font and/or stroke-outline styles), countdown timer, lineup/artist grid with image-zoom hover, ticket-tier pricing table, tour-date list or day/stage schedule tabs, artist-name marquee, sponsor logo row, merch strip, Spotify/embed players, sometimes a Web Audio visualizer (`AnalyserNode`, howler, wavesurfer), a persistent "GET TICKETS" button.
- Its native psychology is hype + scarcity + one action. That IS ecommerce — your job is redirection of the funnel, not conversion of genre.

## The soul — what must survive the adaptation
- **The loudness.** Poster-bill typography — top-billed name, support lines, tight leading, all-caps — is the identity. Keep the type scale and hierarchy exactly; only the words change.
- **The single-CTA funnel.** Everything on these pages drives one button. Preserve that pressure; aim it at the buy box.
- **The rhythm mechanic** — whichever it has: countdown, marquee velocity, audio-reactive pulse, beat-synced reveals. Per §2 one of these is the signature; name it in the inventory and adapt the pill INTO it. Do not bolt on a new one.
- The lineup grid's hover choreography and the ticket table's tier/badge pattern survive nearly verbatim.

## Ecom mapping — the isomorphism
- **Ticket tiers → buy box, 1:1.** GA/VIP/Platinum becomes $39 single / $99 3-pack ("MOST POPULAR" — the table already has that badge, pre-select it) / $29/mo subscribe. Keep tier-card layout, selected state, price-in-button; wire real variant→cart per §4.
- **Lineup grid → formulation lineup.** Each artist card = one ingredient: name top-billed, mg in the set-time slot, hover reveal = what it does. Headliner slot = hero ingredient.
- **Tour dates / day schedule → protocol timeline** ("Day 1 · Day 7 · Day 30 — what you feel when"), same row/tab mechanic. **Countdown → a real dated event only** (batch drop, restock, billing date); no real date = delete the countdown.
- **Merch strip → bundle strip. Sponsor row → press + payment-mark trust band. Festival FAQ → product FAQ, same accordion. Artist bio → brand story. Floating "GET TICKETS" → the §8 sticky buy bar** — it's already built; give it price + cart write.

## Pill-bench staging — the pill is the headliner
- **Hero:** the video-hero slot carries the capsule. WebGL-capable → 3D capsule per §7 over a dark animated backdrop; otherwise CSS gradient capsule under the poster block. Billing block set in the template's own poster type: `THE PINK PILL` top-billed, `PP-01 · 750 MG` as the support-act line, the date line becomes the price line with working add-to-cart. Never keep the template's stock footage.
- **Capsule moment = the drop.** Take the template's peak-intensity mechanic — visualizer, beat-synced type slams, accelerating marquee, countdown-hits-zero reveal — and stage ONE pinned, scroll-driven beat drop (`scrub:0.5`, §2 laws) with the capsule as the payload: bars form/orbit the capsule, `750 MG` slams in like a title card, the marquee whips to full velocity then locks. Drive any "audio-reactive" motion from a synthetic scroll/time beat by default — audio is opt-in garnish, never the dependency. This is the screenshot.

## Keepers to hunt for
1. Video hero rig — poster-first lazy load, mute/pause control (`Hero`, `VideoBg`, `*.mp4` refs).
2. Countdown component + date-diff util (grep `setInterval`, `getTime()`).
3. Lineup grid hover choreography — image zoom + masked name reveal + stagger (`Lineup`, `ArtistCard`).
4. Visualizer/waveform code — `AnalyserNode`/wavesurfer/howler; a free animation driver worth harvesting even if audio is cut.
5. Ticket-tier table with badge + selection state — a near-finished buy box.
6. Artist-name marquee (retrofit the §3.4 engine before reuse).
7. The display type system — condensed/variable font files, stroke-text styles, kinetic title reveals.
8. Day/stage schedule tabs — a clean tabbed-content primitive.

## Traps
- **No autoplay audio, ever; Web Audio requires a user gesture.** Any audio-reactive animation runs from a synthetic time driver until the user opts in, or the page is dead for every non-clicking visitor. `?rm=1` kills audio-reactivity to one static pose.
- Countdowns compute from `Date.now()` each tick, never decrement — background tabs strand interval-decremented timers (§3.3 applies). A countdown to nothing is a commercial-fact lie under §4: real date or delete.
- Replace stock video; keep the poster frame — the hero must never be black while buffering, and `?rm=1` pauses video at poster.
- Stroke/outline text goes illegible below ~640px — solid fill on mobile. Condensed uppercase headlines overflow 375px — `clamp()` every display size, then assert `scrollWidth === clientWidth`.
- These templates ship 5–8 display weights (~800KB woff2) — subset to the 2–3 actually used; metric-compatible fallback so the poster block doesn't reflow on font swap.
- Strobe/flash moments: ≤3 flashes/sec hard cap, dead under `?rm=1`.
- Hype copy collides with §6: keep the loudness in type SCALE, keep the claims structure/function — "sustained focus," never "EXPLOSIVE ENERGY GUARANTEED."
- The ticket CTA usually links out (Eventbrite/DICE). It must become a real cart write — a loud button that doesn't mutate cart state violates §4 interaction integrity.
