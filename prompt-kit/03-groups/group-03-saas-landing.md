# GROUP ADDENDUM — saas-landing (paste after the master)

## Archetype — what you're probably holding
Next.js/React + Tailwind + Framer Motion (occasionally Astro/Vue), shadcn/Radix primitives, dark Linear-glow or white Stripe-clean. Near-universal spine: blur-nav → headline + framed dashboard-mockup hero → logo cloud → bento/feature grid → how-it-works → integrations/beams → stats counters → pricing table with billing toggle → testimonial wall → FAQ accordion → CTA band.
Big scroll choreography is rare here; the craft lives at card level — spotlight hovers, animated beams, live mini-demos inside bento cards, number tickers. You are measuring micro-interaction density, not set-piece scale.

## The soul — what must survive the adaptation
1. The framed product-mockup hero (browser/device chrome + glow) — the archetype's "here is the product, literally" honesty. Keep the frame; change what lives inside it.
2. The bento grid with living card interiors — cards that DEMO a claim instead of stating it. This is almost always the §2 signature: keep the mechanic, re-author every interior.
3. The pricing table's comparison theater — highlighted tier, billing toggle, feature checklist. It is the archetype's native buy box; treat it as load-bearing.
4. The claim → proof → claim → proof section rhythm and the tight-tracked sans typography attitude. Success test: "same SaaS template — but it sells a physical product now."

## Ecom mapping — the isomorphism
- Hero mockup frame → the product stage (staging below). Nav "Book a demo"/"Start free trial" → "Add to cart — $99". Wire or delete every email-capture form; dead forms never ship.
- Logo cloud → press/trust-marks marquee — §3.4 contract applies.
- Bento/feature grid → benefit grid: each card interior performs one product fact instead of a SaaS feature.
- How-it-works steps → the daily ritual: take one → absorption → 30-day timeline.
- Integrations/beams → the ingredient stack: beams connect actives to benefits.
- Stats counters → dosage numerals (750 MG, capsule counts) — mono, big, §3.3 counter contract.
- Pricing table → THE buy box, near-verbatim: $39 single / $99 3-pack in the highlighted center tier, "Most popular," pre-selected / $29/mo subscribe; the billing toggle becomes one-time ↔ subscribe with an animated price morph. This is the archetype's biggest gift — do not build a second buy box elsewhere.
- Testimonial wall → 6–8 concrete review quotes, initials only (§6); marquee columns become a static grid under `?rm=1`.
- FAQ accordion survives as-is (keep its height animation); CTA band → final add-to-cart with §4 trust context. The archetype has NO mobile sticky buy bar — build §5.5's, seeded from the highlighted tier.

## Pill-bench staging
Hero medium: these templates are almost never WebGL-capable — the mockup frame IS the medium. Stage the CSS gradient capsule (§7.1: two-tone `#F0148C`/pearl, soft floor shadow) inside the browser/device chrome as a "PP-01 · 750 MG" spec-sheet UI — the pill as the dashboard's hero datum, live stats orbiting it. Re-light every glow in `#F0148C` with a saturated core: pink at SaaS-typical 10–20% glow opacity reads nursery (§1) — soften only the falloff. On dark templates rim-light the pearl half or it vanishes; the pink half cannot carry the silhouette alone. If the template genuinely ships WebGL, use the 3D clearcoat capsule instead — never bolt Three.js onto a template that never had it.
**The capsule moment is the bento grid at maximum intensity:** every card interior re-choreographed around the pill and fired as one staggered cascade on scroll entry — the capsule splits into pink/white halves in one card, a ticker runs 0→750 in another, a mini release-curve chart draws itself, a capsule marquee streams, the spotlight hover exposes the formulation. Six-plus micro-interactions in concert IS this archetype's ceiling; one weak interior drags the whole moment, so author all of them.

## Keepers to hunt for
1. Bento cards with animated interiors (mini charts, typing/cursor simulations) — `components/features/`, `BentoGrid`, `cards/`.
2. Cursor-tracked spotlight / gradient-border hover (radial-gradient at `--mouse-x/--mouse-y`) — card wrappers, `useMousePosition` hooks.
3. Animated SVG beams/connecting lines with gradient-stroke motion — `AnimatedBeam`, integrations section.
4. Pricing toggle with spring/FLIP price morph + tier-highlight treatment — `Pricing`.
5. Browser/device mockup frames with glow treatment — `Hero`, `MockupFrame`, `Safari`/`Iphone` components.
6. Number tickers/animated counters — stats sections (retrofit the §3.3 contract).
7. Vertical testimonial marquee columns — `Testimonials`, `Marquee` (retrofit §3.4).

## Traps
- Do NOT rip out Framer Motion for GSAP — graft §3 contracts into its idiom. `whileInView` with `once:true` is a bare reveal: route it through the §3.2 failsafe or content WILL strand hidden.
- Tokenize the accent BEFORE recoloring: these templates hardcode `indigo-500`/`violet-600` across hundreds of class strings. Centralize to a CSS var/Tailwind token, then swap once — a missed class ships a wrong-color CTA.
- Template marquees are CSS-keyframe `translateX(-50%)` loops: seamed, unpausable, blind to `?rm=1`. Replace every one with the §3.4 engine.
- Bento interiors each running their own interval/rAF = N always-on loops. One ticker heartbeat; observers only gate per-card work; pause draw work on `document.hidden` (§4).
- Backdrop-blur stacks (nav + cards + overlay) jank mobile — maximum one backdrop-filter layer visible per viewport at 375px.
- SaaS templates carry ZERO commerce state: no cart, no variants, and a dozen "Get started" buttons that are lies until rewired. §4 interaction integrity applies to every CTA, including the nav and the CTA band.
- Purge pricing-table residue: "per user/month," free tier, "Contact sales." A $0 column or seat-based cadence surviving into the pill build is a §4 commercial-fact contradiction.
- Never overlay the pill onto the shipped dashboard-screenshot PNG, and a recolored factory default fails §9 outright — the card interiors must be re-authored around the pill, because "competent but generic" is exactly this archetype's known ceiling.
