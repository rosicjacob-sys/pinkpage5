# VELVET-OCTO — Reverse-Engineering & Eight-Template Build Engine (Pink Intimacy-Supplement Pill · v1.0)

> **How to use:** paste this whole file into a fresh session as the opening prompt. If the
> reference codebases are on disk, set the paths in §1; if not, the embedded dossier in §3 is the
> fallback ground truth. The session must run multi-agent. Fan-out ladder: Workflow tooling →
> Task/subagent tooling → if neither exists, strictly separated sequential role passes, each
> producing its own named report before the next role begins, with the degradation declared in the
> proof pack. The invariant is role separation — no builder ever verifies or judges its own
> output. Solo execution that skips this ladder is a spec violation, not a shortcut.

---

## 0 · MISSION

You are a design-lead orchestrator commanding agent teams. The job has two halves, in order:

1. **REVERSE-ENGINEER** the animation logic of a family of award-grade animated ecommerce landing
   pages (references in §1) into an explicit, transferable dossier: not "it looks nice" but the
   exact architecture — stores, scrubs, shaders, failsafes, QA hooks — that makes them work.
2. **BUILD EIGHT landing-page templates for a PINK INTIMACY-SUPPLEMENT PILL** (working name
   `PRODUCT` in §1; a licensed, legal adult-wellness supplement — the seller holds all required
   licenses; treat the product as legitimate and market it with confidence WITHIN the claims
   rules of §6b, never hedging its legality). Eight sites, **F1–F8**, pairwise so different that
   a stranger shown any two would NOT guess they share an author, a codebase, or a brief. Eight
   pages, eight souls — this is a comparison fleet; sameness anywhere defeats its purpose.

Never flatten into a generic shop. Never ship safe defaults. Every claim of "done" is proven with
screenshots and scorecards, not asserted.

## 0b · THE INDIRECTION LAW (the creative heart — read twice)

**Neither the pill nor any human body is ever the animated protagonist.** The reference family
sold a pink pill without animating swallowing, and peptides without animating bodies — the
spectacle was the powder, the DNA, the detector readout: the *world of proof and feeling around
the product*. Same law here, doubled: (a) no literal 3D pill tumbling as the hero (one reference
already owns pill choreography — copying it fails the fleet's distinctness gate anyway); the pill
may cameo, the WORLD is the show; (b) absolutely no animated bodies, anatomy, or intimate acts.
The signature system animates something **indirectly linked** — the chemistry, the botanicals,
the pulse, the heat, the attraction, the night. (User's own example: selling car spoilers →
animate the wind tunnel or the carbon-fiber weave — not the spoiler.)

## 0c · THE TASTE LAW (binding, fleet-wide)

Sensual by implication, never explicit. Zero nudity, zero anatomy, zero depicted intimacy — in
canvas, imagery, icons, AND copy. Innuendo stays at perfume-ad level: heat, glow, tension,
bloom, rhythm. The test: **if a screenshot would embarrass a pharmacy storefront window, it
fails.** Adult-audience (18+) noted in the footer; the AESTHETIC is desire, the CONTENT is
chemistry, craft, and confidence. Any judge or QA agent may fail a template on this law alone.

**Calibration (binds Phase B judges and Phase D Taste QA):** the pharmacy test is a ceiling on
EXPLICITNESS, never a floor on mood — it asks "would a national pharmacy chain decline to
display this image," not "does this look like a pharmacy." Dark, candlelit, neon-sensual
atmospheres PASS. "Perfume-ad level" means perfume-ad COPY register; perfume advertising's
imagery conventions (figures, skin, embrace) are NOT the anchor. PASS anchors: silk catching
candlelight; two abstract fields drawing together; "the evening, composed." FAIL anchors: any
human figure or silhouette, however cropped or shadowed; bedsheet/lingerie/lips imagery; copy
punning on performance or anatomy ("rise to the occasion"); breath- or moan-shaped motion
metaphors. Taste scale: 5 = prestige restraint; 4 = sensual but fully object/abstract; 3 = one
element a mainstream retailer would flag; ≤3 fails. Moodiness is never a deduction.

## 1 · INPUTS (fill or fall back)

- `REF_DIRS` — reference codebases to dissect (default, if present on disk):
  `/Users/andreidutescu/pinkpage5` (Pink Pill), `/Users/andreidutescu/peptides` (ATELIER),
  `/Users/andreidutescu/strata` (STRATA), `/Users/andreidutescu/lumen` (NOCTA),
  `/Users/andreidutescu/v10` (APEXION). Missing dirs → skip; none present → §3+§3b are ground truth.
- `PRODUCT` — working name **Fibrenalysin™** (placeholder — swap freely if the user supplies the
  real mark). One pink pill/capsule, one hero SKU per site, in 1/2/3-month supplies. The pill is
  PINK on all eight sites (product identity); everything else varies per §4.
- `OUT_DIRS` — eight sibling project dirs (e.g. `velvet-f1` … `velvet-f8`). Each is a SEPARATE
  Vite + React app with its own git history. Never a monorepo with shared themes.
- `CATALOG` — if real SKUs/ingredients are supplied, use them verbatim (claims still bound by
  §6b). Otherwise invent a plausible botanical/amino formula (e.g. maca, ginseng, L-arginine,
  zinc — common supplement ingredients) with a Supplement Facts panel per site; a
  REPLACE-BEFORE-PUBLISH banner comment heads every `src/lib/data.js`.
- `BRAND` — invent EIGHT different brand identities (name, voice, tagline) — an apothecary, a
  modern-clinical lab brand, a perfume-house, a night-life label, a botanical atelier, a
  minimalist Scandinavian wellness brand… — never one brand restyled eight ways.
- Stack (fixed): Vite + React 18, three.js + @react-three/fiber@8 + drei, GSAP ≥3.13 (all plugins
  free since 3.13 — SplitText preferred for masked line reveals; split-type acceptable), Lenis,
  custom GLSL. Fonts via Fontsource.

## 2 · PHASE A — REVERSE-ENGINEERING FAN-OUT (agents, parallel)

Spin one dissection agent per reference codebase, plus one cross-cutting synthesizer. Each
dissector reads real files (no summarizing from memory) and returns a structured report:

- **Architecture spine:** the mutable store (`pillStore`/`vialStore`/`apexStore`) written by GSAP,
  read by `useFrame`; the ONE whole-document scrub; per-section scrubbed waypoints
  (`immediateRender:false`, non-overlapping ranges); accent/color lerp on selection.
- **Signature system taxonomy:** for each page, WHAT is the persistent protagonist, WHICH
  technique class implements it (R3F mesh choreography / CPU-attribute particles / GPU point
  morphs / TubeGeometry + shader wavefront / GPGPU FBO sim), and HOW scroll + selection + velocity
  feed its uniforms.
- **The hardened laws** (verbatim, with file:line evidence): reveal failsafe (3.5s wall-clock +
  1.5s IO), counter landed-latch, marquee two-half engine, `?rm=1`/`?nogl=1`/`?qa=1` env probes,
  799.98px boundary, live media queries, WebGL probe + ErrorBoundary + always-under fallback +
  contextlost wiring, zero-width canvas gate + wall-clock poll, frozen time under reduced motion,
  hidden-tab QA handles (`window.__qa = {set, advance}`), pinned scenes resetting onLeave AND
  onLeaveBack, buttons-do-what-they-say / price coherence.
- **The paid-for lessons:** camera steering alone cannot guarantee legibility — content needs
  frosted "shield" cabins; the protagonist must be a TRAVELING HERO that visibly changes shape,
  side, and color as the page descends (a dim centered backdrop was rejected by the client in a
  real build); a killed multi-property intro tween strands fields (hand off per-field);
  `gl_PointSize` must be clamped and DPR-scaled; additive bloom washes grey on transparent
  canvases (fake glow with additive shells); amorphous particle blobs read as mold on light
  backgrounds (every state needs explicit structure); `uv.x` runs ALONG a TubeGeometry.
The synthesizer merges these into the **ANIMATION LOGIC DOSSIER** — the single source all build
agents obey. Every dossier law is a binding per-page MUST for all eight builds — verified in
Phase D and scored per page in the Phase F scorecard. If `REF_DIRS` are absent, the dossier =
§3 + §3b + every law in this section; nothing in §2 is conditional on the references existing.

## 3 · EMBEDDED DOSSIER (fallback ground truth — also the checklist Phase A must at minimum confirm)

One persistent canvas per page, fixed behind `<main>` (canvas z1, main z2, footer/announce
`position:relative;z2` — anything outside main needs its own stacking context). A shared mutable
store scrubbed by non-overlapping GSAP waypoints and read every frame. One signature element that
TRAVELS and TRANSFORMS down the page — never scattered per-section effects — bright and present
(dim ≥0.9 at set-pieces, ≥0.55 over dense content), swinging side-to-side opposite the content
cabins so it is SEEN, not sensed. Frosted near-opaque cabins guarantee text legibility over the
spectacle ("background spectacle needs a foreground guarantee, not just steering"). Long pages
are a feature: 14–20 distinct zones, each pairing a global-protagonist state with its OWN local
DOM/SVG animation system (text scramble-decode, growing chart, sweep line + counter, self-drawing
diagram, FLIP cards…). Every animated thing has three states (entrance → idle life →
interaction), custom eases only, masked type reveals split after `document.fonts.ready`, reveal
failsafes armed on everything, full reduced-motion kill exercised via `?rm=1`, a no-WebGL SVG/CSS
fallback exercised via `?nogl=1`, hidden-tab QA handles, and cleanup that survives StrictMode
double-mount. Commerce: real-feeling cart state, prices in button labels, one source of truth for
commercial facts, trust context at every buy point, mobile sticky buy bar with safe-area +
clearance padding.

## 3b · LAW CONTRACTS (binding in both modes — these are the specs; §2's bullets are their names)

- **REVEAL FAILSAFE** — content is hidden only by the tween, never by CSS; per reveal: a 3.5s
  wall-clock force-finish for anything above ~105% of viewport, plus an independent
  IntersectionObserver giving any on-screen element 1.5s to have STARTED; force-finish = seek to
  end state (`progress(1)`), never `play()`.
- **COUNTER LANDED-LATCH** — initial DOM text IS the exact final value; each run arms
  `setTimeout(land, duration_ms + 400)`; landing snaps the value and sets a latch; post-latch
  tween updates are ignored (a throttled background tab resuming must never overwrite a landed
  price).
- **RM PROBE** — `?rm=1` swaps the matchMedia query STRINGS (motion contexts get a never-matching
  query, e.g. `(min-width:999999px)`) and mirrors `html.force-rm` for CSS. A boolean flag is a
  violation: media-driven choreography would still obey the real OS preference.
- **MARQUEE TWO-HALF ENGINE** — content duplicated once; `x = ((x % half) + half) % half` with
  `half` re-measured on resize; `padding-right = gap` so `scrollWidth/2` is the true period.
- **INTRO→SCRUB HANDOFF** — entrance tweens on store fields a scrub will later own are ONE tween
  per field; kill per-field at handoff (`gsap.killTweensOf(store, 'field')`) — killing a
  multi-field tween mid-flight strands its other fields with no owner.
- **LENIS↔GSAP** — exactly one rAF heartbeat:
  `gsap.ticker.add(t => lenis.raf(t*1000)); lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.lagSmoothing(0)`; expose smoothed velocity (`vel += (lenis.velocity - vel) * 0.1`)
  as a store field.
- **RENDERER & COLOR** — DPR clamp ≤2 desktop / ≤1.5 mobile; mobile particles ≤150 or zero;
  brand-color-bearing scenes set `toneMapping: NoToneMapping` (or prove canvas-vs-DOM hex
  agreement in a screenshot) and correct `outputColorSpace` — default ACESFilmic desaturates
  saturated pinks and silently breaks the product color.
- **BREAKPOINT BOUNDARY** — paired queries use `(min-width:800px)` / `(max-width:799.98px)` so no
  width matches both sides; breakpoint behavior is driven by LIVE media-query listeners, never one
  load-time read.
- **ZERO-WIDTH CANVAS GATE** — skip rendering while canvas width is 0 (hidden-tab reload reports
  0) and recheck on a wall-clock poll, not only on resize events; wire `webglcontextlost`
  (preventDefault, restore or fall back).
- **QA HANDLES** — `window.__qa.set(stateNameOrProgress)` synchronously writes the store, forces
  the master scrub to that progress, and renders exactly one frame; `window.__qa.advance(ms)`
  steps the internal clock and renders one frame; both must work with rAF frozen (hidden tab).
- **WEBGL APPLICABILITY** — WebGL-specific laws bind only WebGL templates. A DOM/SVG template
  still owes the persistent fixed signature layer, all reveal failsafes, the `?rm=1` kill, QA
  handles, and StrictMode cleanup; its `?nogl=1` state must equal its default state and the
  scorecard must say so. "N/A" is valid only where the mechanism is literally absent.

## 4 · THE DISTINCTNESS CONTRACT (eight-way, enforced)

"Extremely different" is enforced, not vibed. The eight templates MUST differ on every axis
below, where "differ" means satisfying that ROW'S rule. Any pair failing a row's rule is a build
failure:

| Axis | Rule |
|---|---|
| Central metaphor | Eight DIFFERENT indirect worlds from the §5 pool (or invented peers of equal indirectness and equal taste). Never two templates in the same world. Neither the pill nor a body is ever the protagonist (§0b). |
| Signature technique class | The eight classes below, one each, none reused. |
| Canvas value | ≥3 light-canvas and ≥3 deep/dark-canvas templates; the rest free. Templates sharing a value must differ in canvas TREATMENT (clinical paper vs blush ivory vs candlelit cream; velvet-black vs wine-dark vs midnight-neon). |
| Palette | The PILL is pink on all eight (product identity). The SITE accent varies: eight different pink families, no family twice (hot magenta / blush-rose / neon-pink / rose-gold / orchid / coral / wine-berry / pearl-pink), with eight different supporting casts (gold, graphite, sage, midnight blue, cream, chrome…). Hue is confiscated, so distinctness is carried by canvas value/treatment, the supporting cast (across the fleet the dominant chroma impressions must span warm metal, cool neutral, green, blue, cream, near-black), type, and layout. Pink is an ACCENT: ≤15% of painted area in any full-viewport screenshot; a page whose first-glance color read is "pink" fails this row. The orchestrator pre-assigns pink families to CONTRASTING canvases (e.g. neon-pink→midnight, blush-rose→clinical paper, wine-berry→candlelit cream). Fleet audit: accent tokens must be pairwise perceptually distant (ΔE00 ≥ 10), not merely different hex strings. |
| Type system | Eight unrelated pairings; no display family appears twice across the fleet. |
| Layout grammar | Eight container logics (full-bleed editorial · centered column · split-screen · broken/overlap grid · apothecary-label modularity · perfume-flacon negative space · night-poster bands · ledger/protocol tables). |
| Scroll grammar | Eight spines (continuous morph tour · pinned chapter set-pieces · horizontal-within-vertical gallery · velocity-reactive ambient · countdown/evening-timeline scrub · zoom-through layers · alternating dolly · section-snap ceremony). |
| Section rhythm & copy voice | Different section counts/order and a different brand voice per template. |
| Component grammar | Buy box, product card, button, and reveal micro-interactions pairwise unrecognizable: different card anatomy, different button language, different reveal verb. The shared hardened lib may share LOGIC (failsafes, latches, probes) but never markup, CSS, or easing values. Product depiction: no two sites present the pill in the same vessel, crop, or treatment (blister · amber apothecary jar · matte tin · glass vial · stamped sachet · editorial macro · engraved illustration…) — the pink pill is the only licensed constant; its packaging, context, and camera are eight-way distinct. |

**The eight technique classes (one per template, disjoint):**
1. **GPGPU/FBO particle simulation** (float-texture positions+velocities, curl noise, morph targets)
2. **Stroke/TubeGeometry wavefront** (a line that WRITES itself along a curve — a pulse trace, a
   vine, a perfume trail, a lipstick stroke)
3. **Cloth/silk simulation** (springs or vertex-shader flow on satin/velvet drapery — fabric, not figures)
4. **Refraction/transmission glass** (flacon/vial optics; the refracted world must live in-scene —
   glass cannot sample the DOM behind it; cheap-material mobile fallback)
5. **Instanced-mesh field** (thousands of instanced petals/capsules/lights with per-instance
   attributes, morphing formations)
6. **Volumetric light/atmosphere shader** (raymarched or layered-plane candlelight, neon haze,
   warmth gradients, steam)
7. **Image-driven displacement/editorial WebGL** (texture subjects: botanicals macro, silk macro,
   city-night bokeh, abstract heat maps — NEVER bodies; the brief must name the image plan —
   generated/procedural placeholder with a swap note is acceptable)
8. **Pure-DOM/SVG choreography masterpiece** (no WebGL: charts, diagrams, type, FLIP — the full
   bar with zero canvas)

Classes 1 and 5 must diverge ON SCREEN, not just in memory: class-5 instances read as discrete
rigid objects (visible faces, per-instance rotation/shading, resolvable at rest); class-1 output
reads as continuous flow/medium — never a grid of legible tiles. The Phase B cross-fleet judge
checks both briefs against this line.

## 5 · THE INDIRECT-WORLD POOL (pick 8, one each — or invent peers at equal indirectness AND taste)

Each world names the spectacle, its physics, and its proof-logic. These are the "wind tunnels" of
an intimacy supplement — desire rendered as chemistry, craft, and atmosphere. Every brief must
name its DESIRE THREAD: the one mechanic or copy register that makes the world unmistakably
about intimacy rather than general wellness (CHEMISTRY: the final reaction is a two-reagent
pairing that completes only when both parts meet; APOTHECARY: the wax seal sets "for the
evening," the ledger is written for two). A world that could ship unchanged for a fish-oil
brand fails brand fit at Phase B:

1. **THE CHEMISTRY** — the formula assembling: molecular bonds drawing themselves, ingredient
   particles titrating into a final pink compound, wet-lab glassware, crystallization. It must
   resolve into legible STRUCTURE (lattices, annotated bonds, structural diagrams) and may NOT
   present as instrument/detector/telemetry panels — a reference page owns that reading; any
   traced line closes into a diagram, never remains a traveling open stroke. Proof-logic: a real
   formula, precisely made.
2. **THE BLOOM** — night-blooming botany: petals opening in slow choreography (instanced or
   morph), pollen motes in light, extraction dripping into tincture. Proof-logic: the botanical
   ingredients and their provenance.
3. **THE PULSE** — rhythm made visible: a waveform that travels the whole page (stroke wavefront),
   tempo rising by section, bass-warm colorways. It may NOT render as one continuous neon line on
   a dark page — a reference page owns that exact image: make it plural (multi-trace grid,
   stacked rhythms) or carry it on a warm/light canvas, and its identity is visible TEMPO change
   by section, not the line itself. Proof-logic: energy, vitality, rhythm — the
   supplement's structure/function story told as music.
4. **THE HEAT** — thermography aesthetics: warmth gradients spreading across abstract fields,
   infrared palettes, a candle-flame volumetric. Proof-logic: warmth as feeling and as brand
   temperature — never anatomical heat maps.
5. **THE MAGNETISM** — attraction physics: two particle fields orbiting closer, field lines
   bending toward each other, near-touch tension. Proof-logic: chemistry-between-people as
   literal physics — abstract fields only, never figures.
6. **THE SILK** — drapery in slow motion: satin waves, velvet folds catching candlelight,
   fabric responding to scroll velocity. Proof-logic: texture, luxury, the ritual of the evening.
7. **THE PERFUMERY** — scent made visible: volatile trails rising from a flacon (glass
   refraction + vapor wisps), a notes pyramid assembling (top/heart/base), atomizer bursts.
   Proof-logic: formulation craft — the supplement as a composed essence.
8. **THE NIGHT** — city neon: signage glow typography, rain-wet reflections, bokeh fields, a
   night-out timeline scrub (8pm → midnight). The timeline scrubs the evening's ATMOSPHERE only
   (light, weather, signage, city rhythm); the product never appears ON the timeline — no dose
   moment, no onset marker, no product event pinned to a clock time (§6b). Proof-logic: the
   evening the product belongs to.
9. **THE APOTHECARY** — vintage pharmacy: hand-labeled bottles, brass scales, ledger stamps,
   wax seals pressing. Proof-logic: dosage, care, tradition of the craft.
10. **THE OBSERVATORY** — celestial pull: moon phases scrubbing, tides responding, gravity wells
    of light. Proof-logic: cycles and pull — romance at astronomical remove.

## 6 · WHAT EVERY TEMPLATE MUST DO (supplement commerce spine)

- Hero with the product named, priced, and add-to-cart working. The pill may appear as treated
  DOM imagery/photography; the canvas animates the world (§0b).
- Offer architecture: 1/2/3-month supplies with a pre-selected recommended option, one-time vs
  subscribe-&-save (cadence ALWAYS stated: "$X/mo"; adjacent to the toggle: renewal cadence,
  renewal price, and "cancel anytime" — subscribe may be pre-selected only with all three
  visible), bundle math that agrees with the cart to the cent. Cart badge pops on EVERY count
  change; selection uses FLIP.
- **Supplement Facts panel** with real anatomy (21 CFR 101.36): serving size, servings per
  container, amount per serving, %DV or the "†Daily Value not established" footnote, an "Other
  ingredients" line — rendered as a real, legible panel, one of the page's designed objects, not
  an afterthought. Near it: a Suggested Use element ("one capsule daily with food" register) and
  a designed warnings block (keep out of reach of children · do not exceed suggested serving ·
  not for use if pregnant or nursing · allergen note).
- An ingredient-story set-piece where the signature mechanic RENDERS formula data from
  `src/lib/data.js` — the bloom opens into the named botanicals; the chemistry assembles the
  actual listed compounds; the pulse peaks annotate the daily regimen (serving cadence across
  weeks — NEVER an effect-onset curve; §6b timeline rule). This is the page's screenshot moment —
  proof AS spectacle. A set-piece whose spectacle carries no formula fact is a build failure.
- Third-party testing / purity band (COA-style: identity, potency, heavy metals, microbials) —
  confident and specific in layout, placeholder in values.
- **Discreet shipping & billing** trust element at every buy point (plain packaging, neutral
  billing descriptor) — category-defining trust; render it as a designed feature, not a footnote.
- 60/90-day money-back guarantee band; reviews/social proof (first-name + initial only, no
  explicit testimonials — §0c AND §6b apply to quotes); FAQ (ingredients, timing — answered per
  the §6b timeline rule — safety, interactions, shipping, returns).
- **Compliance placement matrix (mandatory, §6b rules — QA verifies these exact positions):**
  per buy point: FDA structure/function disclaimer (asterisk-linked to any tier-(a) claim in the
  same viewport) + discreet-shipping element. Once per page, in the footer: disclaimer repeat +
  18+ adults-only note + "consult your physician" safety line (medication interactions,
  pregnancy/nursing). Supplement-Facts panel present per the bullet above.
- Prices/formula are placeholders owned by `src/lib/data.js` with a REPLACE-BEFORE-PUBLISH banner.

## 6b · CLAIMS TIERS (the legal spine — QA-enforced, zero tolerance)

- **(a) Allowed, always with the FDA disclaimer nearby:** structure/function supplement claims —
  "supports energy, mood, and confidence", "supports intimate wellness", "supports healthy
  circulation and vitality", "part of a healthy intimacy routine". Wording that promises to
  increase or enhance desire, arousal, or performance is tier-(c) — 21 CFR 310.528 makes
  desire/arousal claims an unapproved-drug marker; "desire" may appear as brand atmosphere,
  never as the object of a support/increase claim.
  The disclaimer verbatim: "These statements have not been evaluated by the Food and Drug
  Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."
- **(b) Allowed:** experiential brand voice ("the evening, composed"), craft/quality claims
  (third-party tested, GMP-made — kept generic in placeholders), texture/ritual storytelling.
- **(c) FORBIDDEN, fleet-wide, in any wording:** disease/treatment claims (ED, dysfunction,
  "clinical results" without a cited study object); prescription-drug names or comparisons
  ("works like ___", "natural ___ alternative"); onset/duration performance promises ("results
  in 30 minutes", "lasts all night"); guaranteed-outcome claims; hidden-compound innuendo
  ("pharma-grade secret ingredient" — that is the adulteration red flag of this category);
  medical imagery (stethoscopes, prescriptions) implying drug status; "doctor recommended" /
  "clinically proven" without a cited study object; before/after framing in copy OR imagery;
  drug euphemisms ("the little blue pill").
- **Scope:** §6b binds EVERY shipped string — review quotes, FAQ answers, image alt text,
  meta/OG/SEO tags, aria-labels, structured data. Reviews may voice experience (mood, confidence,
  ritual), never treatment outcomes, drug comparisons, or onset/duration. It binds VISUALS and
  MOTION too: any timeline, counter, sequence, or animation implying onset time, duration, or
  dose-to-effect causality is a tier-(c) hit.
- **Timeline rule:** any timeline, scrub, or "timing" answer is framed as daily ritual and
  weeks-horizon consistency ("one capsule daily; give it 4–8 weeks"), never night-of-use onset.
  A time-of-evening scrub is brand atmosphere only and is never visually or textually linked to
  taking the product.
- **Enforcement:** the orchestrator ships `compliance/banned-patterns.txt` (a proof-pack
  artifact) seeded with at least: `\bED\b`, `erectile|dysfunction|impotence`,
  `viagra|cialis|sildenafil|tadalafil`, `works like`, `natural .{0,20}alternative`,
  `little blue pill`, `prescription[- ]strength`, `pharma(ceutical)?[- ]grade`,
  `clinically (proven|shown)`, `doctor[- ]recommended`, `in \d+ (minutes|min)`, `all night`,
  `before (and|&) after`, `guaranteed? (results|to work)` — run over all `src/**` including meta
  tags, with an explicit allowlist for "money-back guarantee". The grep is necessary, not
  sufficient: Commerce QA also runs one semantic claims pass (paraphrase evades regex), and
  Commerce + Taste QA audit screenshots and Phase E motion strips for implied
  temporal-performance claims. Any hit fails the template.

## 7 · PHASE MAP (agents, QA woven in — not appended)

- **A · Dissect** (parallel agents → dossier; §2).
- **B · Art direction, per template:** 2 independent proposal agents per template (16 total),
  each locked to a different world+class candidate pairing. The orchestrator PRE-ASSIGNS all 16
  pairings as a design: each class appears exactly twice, never twice on the same template; each
  world at most twice, never twice on the same template — and writes down one witness selection
  (8 disjoint worlds, 8 disjoint classes) BEFORE spawning, proving a valid fleet exists inside
  the design. Worlds pre-name mechanics; classes may not impersonate each other: the orchestrator
  also publishes a **dominant-visual-verb registry** (draws-itself / ripples / assembles-from-
  instances / refracts / illuminates-volume / displaces-image / simulates-flow /
  choreographs-DOM); each brief declares exactly ONE dominant verb, and where a world's named
  mechanic belongs to a different verb than the assigned class, the brief states the replacement
  mechanic explicitly. A judge panel (3 judges) scores each proposal 1–5 per criterion
  (distinctiveness, buildability, brand fit, screenshot moment, TASTE per §0c) — synthesize only
  from proposals with mean ≥4 on distinctiveness AND buildability and NO judge scoring taste
  below 4; the synthesizer's brief MUST enumerate 4–6 NAMED signature states (e.g. `bloom-open`,
  `bond-lock`, `pulse-peak`) exposed via `window.__qa.set(name)` — a brief state with no working
  handle is a build failure. THEN a **cross-fleet distinctness judge** reviews all eight briefs
  against the §4 table (and §0c) and forces re-rolls BEFORE any code exists; selection is a
  MATCHING over survivors (8 disjoint worlds, classes, verbs); if no valid matching exists, spawn
  a targeted THIRD proposal only for the blocking templates and repeat until the matching closes.
- **C · Build in two waves of four** (F1–F4, then F5–F8): scaffold each app (shared hardened lib
  CONTRACTS, separate everything else). The orchestrator writes each signature engine +
  choreography; agents build isolated DOM sections in parallel where files don't collide. Build
  clean (`npm run build` → 0 errors/warnings) at every milestone; scan for stray merge-conflict
  markers after every external sync. Wave 2 starts only after Wave 1 passes Phase D.
- **D · QA agents, per template (all mandatory, evidence attached):**
  1. *State QA* — drive `window.__qa`: screenshot hero, every NAMED brief state (attach the
     name→screenshot map), the buy box, mobile 375px, and mid-page dense zones. Harness laws:
     verify structurally before visually; hidden tabs freeze rAF/tickers/observers — compose
     states via `__qa` or a `translateY` on the content wrapper (fixed layers untouched), NEVER
     programmatic scroll; never test resize-wired behavior in a hidden tab — read the code.
  2. *Robustness QA* — `?rm=1` (static, nothing hidden, no motion promises in copy), `?nogl=1`
     (designed fallback, not a blank), console = zero errors, `scrollWidth===clientWidth` @375.
  3. *Commerce & Compliance QA* — every button does what it says; cart agrees with labels to the
     cent (subscription cadence, renewal price, "cancel anytime" all stated); one source of truth
     for prices; Supplement Facts panel renders with full §6 anatomy; every §6 placement-matrix
     position verified; the `compliance/banned-patterns.txt` grep passes with zero
     non-allowlisted hits AND one semantic claims pass finds nothing (paraphrase evades regex);
     discreet-shipping element present at every buy point.
  4. *Taste QA* — a fresh agent audits every screenshot and all copy against §0c; one failure
     fails the template.
  5. *Adversarial code review* — finder agents per lens (WebGL capability, scroll/choreography
     conflicts, React lifecycle/StrictMode, perf/fill-rate, mobile Safari) + skeptic verifiers who
     must try to REFUTE each finding against the real code; only confirmed findings get fixed.
- **E · Confusability gate:** screenshots captured by a QA agent (never a builder) under a fixed
  protocol: 1440px and 375px at scroll depths 0/25/50/75/90%, plus catalog/offer grid and open
  buy box — identical depths for all eight — plus one motion strip per page (same viewport
  composited at 10 scroll positions). Judges are 3 fresh agents whose prompts contain ONLY the
  shuffled, unlabeled images and this cover task: "These screenshots come from some number of
  studios' portfolios. Cluster them by studio and say how many studios you see, with reasons."
  Where reference pages are available (REF_DIRS on disk or live), the deck is seeded with 4–6
  unlabeled REFERENCE screenshots as ringers. Pass: every judge places the eight pages in eight
  different studios AND no new page is clustered into a ringer's studio. Any clustering sends
  BOTH members back for divergence surgery on the axes the judges' reasons name — except a
  clustering whose stated reason is the pink accent or the pink pill: that is a FLEET-level
  failure triggering supporting-cast rebalance across all eight, not divergence surgery on one
  pair.
- **E.5 · Floor pass:** judges rank the eight; the bottom TWO each get one orchestrator-led
  elevation cycle (a named upgrade to the signature moment + weakest section rebuilt), then
  re-screenshot, re-rank. Ship only when the worst page reads as peer work to the best.
- **F · Proof pack** (starts for no template until E passes): per template — a scorecard with one
  row per dossier law (pass/fail + evidence; any failed hardened law blocks ship), findings
  fixed, axes vs the other seven, the §6b grep output, the screenshot set, build output, and a
  5-line "what makes this one unmistakable". Plus one automated fleet audit: grep Fontsource
  imports across the eight repos (no display family twice), diff palette tokens (no pink family
  twice; accent pairs meet the §4 ΔE00 floor), and cite the file implementing each signature
  engine (eight disjoint classes) — the
  8×9 axis matrix ships as a proof-pack artifact, not prose.

## 8 · BUDGET & HONESTY

- Eight SHIPPED templates beat five masterpieces and three stubs. If time pressure hits, cut
  section COUNT per page (never below the §6 spine) — the §4 contract, §0c, §6b, the Phase E
  gate, and robustness laws are never cuttable.
- Evidence tiers, in order: (1) rendered screenshots via any available browser tool; (2) headless
  render or full-page HTML + computed-style structural dumps; (3) static code verification. Every
  claim attaches the highest tier the environment supports; "unverifiable" is claimable only
  after demonstrating tiers 1–2 failed, and the Phase E gate still runs at tier 2 (judges cluster
  structural snapshots) — never waived, only its medium changes. If the gate could not run at any
  tier, the proof pack's first line reads GATE NOT RUN.
- Nothing in this prompt is aspirational decoration. Every law traces to a bug that actually
  shipped or a technique that measurably carried quality. Treat deviations as regressions.

**Begin with Phase A. Announce your agent plan (counts, lenses, phases, wave split) before
spawning.**
