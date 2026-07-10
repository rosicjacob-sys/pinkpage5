# GROUP ADDENDUM — content-magazine (paste after the master)

## Archetype — what you're probably holding
Blog/magazine/publication template: Next/Astro/Gatsby/Nuxt, often static-first with client islands; content from MDX/markdown collections or a headless CMS (Sanity/Contentful); Tailwind `prose` or a hand-rolled type scale. Mechanics: feature-story cover hero, article-card grid with category filters, long-form article layout (drop caps, pull quotes, inline figures, footnotes), reading-progress bar, sticky TOC/scrollspy, bylines + reading-time metadata, related-posts rail, newsletter capture, dark-mode toggle, cmd-k search. Motion is usually modest — type reveals, image parallax, hover underlines — so YOUR craft supplies the motion ceiling; expect no pre-built shader to lean on.

## The soul — what must survive
- The typographic hierarchy IS the template: kicker → headline → deck → byline → body → footnote. Every ecom section must speak this grammar (a benefit is a kicker, a price is a deck, the disclaimer is a footnote).
- Editorial rhythm: measure-width prose alternating with full-bleed figures. Keep the reading cadence; sell inside it, never around it.
- The category/taxonomy system and its filter interaction — this is the template's information architecture.
- The reading-progress mechanic (bar, circle, or percentage) — it survives as the page's continuity device and the pill-bench's engine.
- Its grid discipline, rules, and hairlines — restyle them, never randomize them.

## Ecom mapping — the isomorphism
- Masthead/nav → brand nav + cart badge; the issue-number/date slot becomes `PP-01 · 750 MG`.
- Cover/feature-story hero → product hero: pill as cover star, headline in the display face, price in the deck slot, working add-to-cart where "Read the story" sat.
- Category chips/tags → shop-by-benefit taxonomy (Focus · Energy · Recovery); the existing filter transition becomes bundle/variant filtering.
- Article-card grid → catalog / ingredient dossiers — each card is one ingredient's "story," image treatment intact.
- Long-form article layout → the product story: drop cap opens it, pull quotes carry the structure/function claims, inline figures are capsule renders, footnotes hold the "studied, not proven" citations.
- Sticky TOC/sidebar → sticky buy box (3-pack pre-selected, "most popular") that scrollspies the story sections.
- Author bio → formulator credibility block; related-posts rail → cross-sell/bundle rail; comments → 6–8 review quotes as letters-to-the-editor; newsletter form → $29/mo subscribe ONLY if wired to real cart state — otherwise it stays honest email capture.

## Pill-bench staging
- Hero medium: this archetype is almost never WebGL-capable — stage the master §7 CSS gradient capsule as a magazine COVER SHOOT: full-bleed two-tone capsule behind/threaded through broadsheet-scale masthead type, `750 MG` set as a mono cover line, barcode/issue-furniture reskinned as SKU. If the template genuinely has a canvas/shader hero, the capsule takes it per §7.1 instead.
- Capsule moment (the screenshot): a pinned "Anatomy of the Capsule" long-form chapter where the reading-progress mechanic DRIVES the spectacle — scroll progress splits the capsule (royal-pink half / pearl half drifting apart), staggered pull quotes annotate ingredients as they pass, dosage numerals land at display scale, and the progress indicator itself renders AS a capsule filling pink→white. Reading progress + typographic hierarchy at maximum intensity is this archetype's ceiling; measure it there, failsafed per §3.2.

## Keepers to hunt for
1. Reading-progress component — grep `progress`, `useScrollProgress`, scroll observers/hooks.
2. The type scale / prose stylesheet — `typography.css`, `prose` config, fluid `clamp()` scales.
3. Category/tag filter with its transition (FLIP/crossfade) — grep `tags`, `categories`, `filter`.
4. Article-card grid hover treatment — image zoom/reveal, animated underlines.
5. Sticky TOC/scrollspy (`IntersectionObserver` on headings) — becomes the buy-box spine.
6. Pull quote / drop cap / figure MDX components — the claim-delivery system.
7. cmd-k search overlay + dark-mode toggle — both harvest cleanly.
8. Newsletter form states (focus, validation, success toast) — reuse for subscribe capture.

## Traps
- If content loads from a live CMS demo API, snapshot everything to local files FIRST — a build that depends on someone else's Contentful space is dead on arrival.
- Static-first frameworks: cart state, counters, and the sticky bar need client islands — verify hydration actually executes (interact, don't assume) before trusting any §3 contract.
- Commerce UI must ESCAPE the prose measure: never cram a buy box into a 65ch column — use the template's own full-bleed breakout pattern.
- Purge every article artifact: reading time, publish dates, share buttons, comment counts, "5 min read" — one stray byline makes the page read as a blog post, not a store.
- Magazine CTAs whisper (text links, arrow hovers). Buy actions must be real buttons with the price in the label per §4; demote the link-underline language to secondary interactions.
- Kill or cap pagination/infinite scroll — the footer legal block and sticky-bar clearance must be reachable per §4, and an infinite feed makes both unreachable.
- Font budget: these templates ship 5+ serif weights — subset to the weights actually used and preload the display face; the masthead is the LCP.
- §9 applies double here: broadsheet-hairline-grid-with-swapped-colors is a NAMED generic failure. Royal pink `#F0148C` at full editorial confidence — never burgundy-tasteful, never pastel.
