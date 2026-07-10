# GROUP ADDENDUM — crypto-fintech (paste after the master)

## Archetype — what you're probably holding
- Next/React (sometimes Vue/Nuxt) + GSAP or Framer Motion, frequently Three.js/R3F: a particle-field, globe, or 3D-coin hero, glow/bloom postprocessing, dark UI with glass cards and animated gradient borders.
- Signature furniture: coin-price ticker tapes, count-up dashboards (TVL / APY / users), self-drawing line or candlestick charts, a tokenomics donut, a roadmap timeline, "audited by" logo rows, and a waitlist/email form where commerce should be.
- Data is faked via mock arrays or a dead websocket stub; numerals are monospace; everything glows.

## The soul — what must survive
- **Data-as-spectacle**: live-feeling monospace numerals, tapes that never stop, charts that draw themselves. A version of this page without moving numbers is dead — this is the identity, keep it and re-aim it.
- **Luminous depth on dark**: particles/bloom implying a network in motion. The darkness survives; the tint does not (see Traps).
- Instrument-panel precision voice — the pill's playful-clinical `PP-01 · 750 MG` register is a native fit; lean in hard.

## Ecom mapping — the isomorphism
- Hero token/orb/coin → the pill as protagonist. Ticker tape → rotating review quotes + "GMP · third-party tested · ships in 24h" (never fake sales counts).
- Stats dashboard → product facts on the §3.3 counter contract: `750 MG · 60 capsules · 4.8★ / 2,140 reviews` — mono, big, exact landing.
- Tokenomics donut → formulation breakdown (the 750 mg split per ingredient, exact mg each). Price/growth chart → "your first 30 days" benefit curve, scroll-scrubbed draw-on, labeled illustrative (§6 claims law).
- Roadmap timeline → onboarding protocol (day 1 / week 1 / day 30). Staking-tier cards → the buy box: $39 / $99 3-pack pre-selected / $29-mo; the old APY slot becomes per-bottle savings.
- Audit/security section → trust band (lab COA · guarantee · payment marks). Whitepaper CTA dies. FAQ accordion usually exists — keep its mechanics, rewrite content per §6.
- Waitlist form → a REAL add-to-cart with cart state. These templates have no cart at all — building one is unbudgeted work; plan it in the inventory, don't restyle the form and call it commerce.

## Pill-bench staging
- Hero medium: the pill is the network's nucleus — 3D capsule (`clearcoat:1, clearcoatRoughness:.08`), pink half catching the key light, with the template's own particle field re-aimed to orbit it. No WebGL → gradient capsule inside the same glow treatment, particles as canvas/CSS dots, per §4 fallback laws.
- **Capsule moment**: the particle system at maximum intensity — the instanced "network" converges on scroll into the two-tone capsule silhouette, pink half / pearl half, locking as counters land on `750 MG` and `$99`. If the template's true signature is the chart instead, the curve draws to its peak and the peak resolves into the capsule. One moment, not both.

## Keepers to hunt for
1. Instanced particle field + its simulation/vertex shaders (`Particles*`, `*.vert/.frag`, GPGPU passes) — the capsule-moment engine.
2. Ticker/marquee tape component — replace its loop math with §3.4 verbatim (these ship seam bugs and observer-restarts almost universally).
3. Count-up stat components — rebind to the §3.3 counter contract before any reuse.
4. SVG/canvas chart draw-on (stroke-dashoffset or progressive canvas paint) — the benefit-curve engine.
5. Bloom/glow post pipeline + CSS glow tokens — retint to pink, keep the treatment.
6. Animated gradient-border glass cards (rotating conic-gradient) — buy-box and bundle-card chrome.
7. Donut/radial chart component — formulation breakdown.
8. Globe/orb shader material — harvest for the SCORECARD even if unused here.

## Traps — hard rules
- **Near-black + acid-green is the named AI-default look (§9). Banned outright** — including chart strokes, glows, focus rings, and hovers. Rebase: dark stays but warms toward ink-plum (≈`#16070F`–`#1E0A16`), the ONLY accent is royal pink `#F0148C`, glow is pink, numerals pearl white. Grep the build for surviving greens/cyans; any hit fails the audit.
- Pink is glow and accent, never body text — long copy and load-bearing numerals stay pearl white on the dark ground; verify contrast at real sizes.
- No fake liveness: rip out websocket stubs and `setInterval` price jitter; seed all decorative "data" with the deterministic PRNG (§4). The pill's prices are fixed commercial facts with one source of truth — never route them through a "live feed" component.
- Purge web3 residue by grep: "Connect Wallet", token addresses, chain badges, "DYOR", gas copy. A wallet button restyled as add-to-cart that doesn't mutate the cart violates §4 interaction integrity.
- Bloom + particles + `backdrop-filter` stacked is this archetype's perf killer: mobile gets DPR ≤1.5, no bloom, ≤150 particles or none (§8); profile long tasks on the capsule moment specifically, not the idle hero.
- Assume the template's tickers and counters are broken in hidden tabs until proven otherwise — they are exactly the §3.3/§3.4 hazard cases; port the contracts, don't trust the originals.
- The benefit curve is a health claim: axis labels stay structure/function-safe, "studied" never "proven", verbatim disclaimer block in the footer (§6).
