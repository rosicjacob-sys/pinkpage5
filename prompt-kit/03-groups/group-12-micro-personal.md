# GROUP ADDENDUM — micro-personal (paste after the master)

## Archetype — what you're probably holding
- Personal site / resume / link-in-bio / coming-soon one-pager. Often no framework at all: `index.html + style.css + script.js`, or a thin Astro/Vite/Next single route. No routing, no state, no data layer.
- Type-driven identity: one oversized display name, everything else tiny mono metadata. Personality lives in microcopy ("currently in Lisbon", local-time widgets, availability dots).
- ONE clever trick carries the whole page: cursor follower/distortion, ASCII-canvas background, kinetic split-char name, magnetic links, draggable sticker board, typewriter, hand-tuned theme toggle. Find it in the first 10 minutes — it is usually one file.
- Total surface: 1–3 screens. Commerce structure: zero. Expect to build all of §5.5 net-new.

## The soul — what must survive the adaptation
- The trick IS the template (§2: an existing signature wins). Preserve it byte-level and re-aim it at the product — reskin it away and nothing worth adopting remains.
- First-person intimacy: these pages speak as one human. The adaptation reads as a founder's page selling one thing — keep the voice, swap the subject.
- Scale contrast: one enormous display element against whisper-small metadata rows. The pill inherits the name's scale slot.
- Density restraint: the page stays SHORT. Ecom sections arrive in this template's compression (rows, chips, accordions), never as imported full-bleed sections.

## Ecom mapping — the isomorphism
- Oversized name → product identity: "PINK PILL" in the display slot, tagline where the personal one-liner sat, `PP-01 · 750 MG` in the metadata mono.
- Link-in-bio rows → the buy box: each row becomes a bundle ($39 single / $99 3-pack pre-selected / $29/mo, cadence stated), keeping the row hover mechanic; the primary link IS add-to-cart with the price in the label.
- "Now"/status widget → live commercial fact: stock count, batch number, "orders before 5pm ship today" driven by the same clock code.
- Bio paragraph → formulation story in the same voice; resume timeline → day-1/week-2/week-6 benefit timeline; skills chips → ingredient chips.
- Email capture (coming-soon) → subscribe option or restock-notify; socials footer → trust band + §6 verbatim legal block.

## Pill-bench staging
- These templates are almost never WebGL-capable — the hero medium is oversized typography plus the trick. Stage the CSS gradient capsule (§7.1 floor: two-tone `#F0148C`/pearl, soft shadow) at the exact scale the owner's name occupied. The pill replaces the person.
- The capsule moment = the trick at maximum intensity, aimed at the pill: cursor-distortion warps the capsule; ASCII canvas renders it in glyphs; a sticker board becomes a draggable pile of capsules; a kinetic name splits "PINK PILL" with the capsule as the counterweight glyph. Hero and capsule moment may be the SAME screen — small surface is legal, low intensity is not.
- Score honestly: scroll choreography and 3D will likely land 0–2. Expected verdict is HARVEST; do not inflate the page to fake range the template never had.

## Keepers to hunt for
1. The trick module itself — one self-contained file (`cursor.js`, `ascii.js`, a canvas-bg component); extract with its tuning constants.
2. Link-row hover treatment — underline reveals, arrow slides, row inversion (`style.css` / the Link component).
3. Kinetic display-type rig — split-char hero animation, SplitType or manual span-splitting.
4. Status/clock widget — grep `setInterval` / `new Date`; converts directly into shipping-cutoff logic.
5. Magnetic/spring pointer math — usually one small util with hand-tuned constants.
6. Theme toggle with two REAL palettes — CSS custom-prop blocks designed both ways.
7. Draggable/physics elements — grep `pointerdown`, matter.js, interact.js.
8. Signature easing/duration tokens — one-off cubic-beziers and CSS variables that give the page its feel.

## Traps
- No build tool means no excuse: graft the §3 contracts as vanilla modules. Do NOT rewrite `index.html` into React to get hooks.
- Small template, full spec: §5.5 minimum (buy box, trust, FAQ, legal footer, cart state, sticky bar) applies whole. "The template didn't have sections" is not a waiver.
- Inverse bloat: never stretch a one-screen page into a ten-section scroller — deliver the spec in the template's density or the soul dies.
- The trick binds to `mousemove`: on coarse pointers ship a composed static or touch pose, never a dead zone (§8).
- Sweep ALL first-person copy: grep for first-person pronouns (`\bI\b`, `I'm`, `my`). One surviving "I'm a designer based in…" invalidates the build.
- Sweep the head: personal `<title>`, og tags, favicon, and name-in-meta ship silently. Replace every one.
- Coming-soon countdowns: truthful (real restock logic) or deleted. Fake scarcity fails §6.
- Budget most of the time for §4/§5.5 commerce logic, not visuals — these builds fail on interaction integrity, not aesthetics.
- The trick was tuned for ONE element: multiplying it across bundle rows or product shots gets one delegated listener and one rAF loop, never per-element loops.
