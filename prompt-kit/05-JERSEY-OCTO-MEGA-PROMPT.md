# JERSEY-OCTO — Reverse-Engineering & Eight-Template Build Engine (Signed Soccer Jerseys · v1.0)

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
2. **BUILD EIGHT landing-page templates for AUTHENTICATED, SIGNED SOCCER JERSEYS** (fully licensed
   memorabilia — the seller holds all licenses; treat the product as legitimate and say so with
   confidence, never hedge its legality). Eight sites, **J1–J8**, pairwise so different
   that a stranger shown any two would NOT guess they share an author, a codebase, or a brief.
   Eight pages, eight souls — this is a comparison fleet; sameness anywhere defeats its purpose.

Never flatten into a generic shop. Never ship safe defaults. Every claim of "done" is proven with
screenshots and scorecards, not asserted.

## 0b · THE INDIRECTION LAW (the creative heart — read twice)

**The jersey is NEVER the animated protagonist.** The reference family sold pills without
animating pills swallowed, and peptides without animating bodies — the spectacle was the powder,
the DNA, the detector readout: the *world of proof around the product*. Same law here. The
signature WebGL/DOM system animates something **indirectly linked** to a signed jersey — the
signing, the proving, the stadium, the moment, the craft — never a 3D jersey tumbling in space,
never a shirt on a mannequin. (User's own example: selling car spoilers → animate the wind
tunnel, or the carbon-fiber weave — not the spoiler.) Jersey photography lives in the DOM as
treated imagery; the canvas tells the story AROUND it. A literal jersey as the hero object is an
automatic build failure for that template.

## 1 · INPUTS (fill or fall back)

- `REF_DIRS` — reference codebases to dissect (default, if present on disk):
  `/Users/andreidutescu/pinkpage5` (Pink Pill), `/Users/andreidutescu/peptides` (ATELIER),
  `/Users/andreidutescu/strata` (STRATA), `/Users/andreidutescu/lumen` (NOCTA),
  `/Users/andreidutescu/v10` (APEXION). Missing dirs → skip; none present → §3+§3b are ground truth.
- `OUT_DIRS` — eight sibling project dirs (e.g. `jersey-j1` … `jersey-j8`). Each is a SEPARATE
  Vite + React app with its own git history. Never a monorepo with shared themes.
- `CATALOG` — if the session (or user) supplies real SKUs, use them verbatim. Otherwise invent a
  realistic licensed-memorabilia catalog per site: signed jerseys across eras and leagues, each
  with player, club, season, competition context, signing details (private signing / match-worn /
  team-issued), edition size or 1-of-1, COA + hologram ID, condition, framing options, price.
  Different players/eras per site so no two catalogs read as the same shop.
- `BRAND` — invent EIGHT different memorabilia-house identities (name, voice, tagline) — a vault,
  an auction house, an archive, a fan-culture label, a broadcast brand… — never one brand
  restyled eight ways. Licensing language is confident but TIERED (rules in §6): "officially licensed" /
  "authenticated" — always; "official partner of" / "licensed by [real club]" — never; never
  invented league/club logos beyond text lockups.
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
  saturated club colors and silently breaks palette coherence.
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
| Central metaphor | Eight DIFFERENT indirect worlds from the §5 pool (or invented peers of equal indirectness). Never two templates in the same world. The jersey itself is never the protagonist (§0b). |
| Signature technique class | The eight classes below, one each, none reused. |
| Canvas value | ≥3 light-canvas and ≥3 deep/dark-canvas templates; the rest free. Templates sharing a value must differ in canvas TREATMENT (paper vs concrete; near-black vs pitch-green-black vs archival sepia-dark). |
| Palette | Eight unrelated palettes (memorabilia is club-colored — let ONE club-plausible accent lead per site, different hue family each: green pitch / gold trophy / red terrace / broadcast blue / ink navy / chalk white-on-slate / sepia archive / UV violet). No accent hue family twice. |
| Type system | Eight unrelated pairings; no display family appears twice across the fleet. |
| Layout grammar | Eight container logics (full-bleed editorial · centered column · split-screen · broken/overlap grid · museum-plinth spacing · ticket-stub modularity · broadcast lower-third bands · ledger/table-first). |
| Scroll grammar | Eight spines (continuous morph tour · pinned chapter set-pieces · horizontal-within-vertical gallery · velocity-reactive ambient · countdown/timeline scrub · zoom-through layers · alternating dolly · section-snap ceremony). |
| Section rhythm & copy voice | Different section counts/order and a different brand voice per template. |
| Component grammar | Buy box, product card, button, and reveal micro-interactions pairwise unrecognizable: different card anatomy, different button language, different reveal verb. The shared hardened lib may share LOGIC (failsafes, latches, probes) but never markup, CSS, or easing values. |

**The eight technique classes (one per template, disjoint):**
1. **GPGPU/FBO particle simulation** (float-texture positions+velocities, curl noise, morph targets)
2. **Stroke/TubeGeometry wavefront** (a line that WRITES itself along a curve — ink, chalk, thread)
3. **Cloth/flag simulation** (springs or vertex-shader wind on banner/tifo geometry — NOT the product jersey)
4. **Refraction/transmission glass** (vitrine/case optics; the refracted world must live in-scene — glass cannot sample the DOM behind it; cheap-material mobile fallback)
5. **Instanced-mesh crowd/mosaic field** (thousands of instanced cards/seats/pixels with per-instance attributes, morphing formations)
6. **Volumetric light/atmosphere shader** (raymarched or layered-plane floodlight cones, fog, dust, rain in beams)
7. **Image-driven displacement/editorial WebGL** (photography as texture: ripple, halftone, freeze-frame slice — subjects: signing hands, stadium architecture, crowd texture, abstract macro detail, NEVER a recognizable full-jersey silhouette in motion per §0b; the brief must name the image plan — generated/procedural placeholder with a swap note is acceptable, real match or player photography is not: image rights are separate from memorabilia licensing)
8. **Pure-DOM/SVG choreography masterpiece** (no WebGL: charts, diagrams, type, FLIP — the full bar with zero canvas)

Classes 1 and 5 must diverge ON SCREEN, not just in memory: class-5 instances read as discrete
rigid objects (visible faces, per-instance rotation/shading, resolvable at rest); class-1 output
reads as continuous flow/medium — never a grid of legible tiles. The Phase B cross-fleet judge
checks both briefs against this line.

## 5 · THE INDIRECT-WORLD POOL (pick 8, one each — or invent peers at equal indirectness)

Each world names the spectacle, its physics, and its proof-logic. These are the "wind tunnels" of
signed jerseys:

1. **THE SIGNING** — ink physics: a pen stroke that writes itself across the page (wavefront down
   a curve), pressure/speed variation, ink bleed; sections read like a signing session's protocol.
   Proof-logic: the autograph as an EVENT with witnesses, photo-matching, pen lot.
2. **THE AUTHENTICATION LAB** — forensic verification: UV sweep passes, hologram shimmer,
   signature spectral comparison overlays, serial ticker; APEXION-adjacent but football-native
   (COA numbers, tamper seals). Proof-logic: every signature is examined, matched, archived.
3. **STADIUM NIGHT** — floodlight cones through haze, rain in beams, distant crowd as particle
   field, the roar as a velocity-reactive amplitude; kickoff countdown scrub. Proof-logic: the
   jersey belongs to a NIGHT — match, date, scoreline.
4. **THE VAULT / MUSEUM** — vitrine glass refraction, climate readouts (temp/RH counters),
   spotlight choreography, dust motes in beams, plinth typography. Proof-logic: conservation-grade
   custody, insured, catalogued.
5. **THE BROADCAST** — replay grammar: freeze-frame, scanlines, slow-mo ramps, VAR grid overlays,
   lower-third titles typing on, tactical telestrator strokes. Proof-logic: the moment it was
   worn, replayed frame by frame.
6. **THE TERRACE / TIFO** — cloth in wind: banners and flags rippling, a stadium-end mosaic of
   instanced cards assembling images/numbers, chant-cadence type. Proof-logic: fan culture as
   provenance — this shirt mattered to a hundred thousand people.
7. **THE NUMBERS** — the player's data made monumental: animated heatmaps, xG charts drawing,
   pass-network graphs assembling, radar charts blooming, season counters. Proof-logic: the
   career the signature summarizes.
8. **THE THREAD** — textile craft at macro scale: embroidery paths stitching themselves (stroke
   wavefront through eyelets), badge relief, fabric weave shader, thread-tension diagrams.
   Proof-logic: what makes an authentic shirt physically authentic. (Craft-of-material is
   indirect — the user's carbon-fiber example — the shirt as OBJECT never animates.)
9. **THE ARCHIVE** — sepia/newsprint era-travel: halftone photo treatments, date-stamp scrubs, a
   timeline spine descending decades, typewriter/press type. Proof-logic: lineage — eras, kits,
   legends, documented.
10. **THE PITCH** — groundskeeping geometry: chalk lines drawing themselves, mowing-stripe
    gradients, rain/irrigation, divots; tactics-board chalk strokes plotting plays.
    Proof-logic: the geometry the player owned.

## 6 · WHAT EVERY TEMPLATE MUST DO (memorabilia commerce spine)

- Hero with a hero SKU: player, club, season, price, working add-to-cart.
- Catalog of ≥6 signed jerseys with real variant state where applicable (framing: unframed /
  framed / museum case; NOT clothing sizes — these are collectibles). Each SKU carries: signing
  provenance (private signing / match-worn / team-issued), COA + hologram/serial ID, edition size
  or 1-of-1, condition note. At least one SKU is SOLD OUT and renders as such with a
  waitlist/notify affordance; at least one is 1-of-1 with "1 available" urgency. Scarcity ethics:
  urgency derives ONLY from edition facts in `data.js` — no countdown timers, no viewer counts,
  no low-stock claims the data doesn't state.
- Price anchoring at every buy box: edition size vs price, a comparable-sale or appraisal line,
  or insured-value framing — ONE per site, sourced from `data.js`.
- A serial/COA verification affordance (enter hologram ID → animated confirmation) in the trust
  band; may share the signature mechanic.
- 1-of-1 SKUs additionally expose an enquiry/"speak to a specialist" CTA beside add-to-cart —
  five-figure items don't sell through a naked buy button.
- A provenance/authentication set-piece where the signature mechanic RENDERS SKU-specific
  provenance data from `src/lib/data.js` — the chalk plots the exact match the shirt was worn
  in; the chart lands on the stat line the COA cites; the floodlight scrub ends on the scoreline
  and date (this is the page's screenshot moment — proof AS spectacle). Each Phase B brief states
  in one sentence which provenance fields its mechanic displays; Commerce QA verifies those
  fields on screen against the data module. A set-piece whose spectacle carries no SKU fact is a
  build failure.
- An editorial/story zone (the player, the match, the era — whichever the world dictates).
- Authenticity trust band at EVERY buy point: COA, hologram ID, photo-proof language,
  money-back authenticity guarantee, secure checkout, insured shipping.
- Framing/display section (dimensions, materials, glazing/UV protection).
- Reviews/collector proof; FAQ (authenticity, shipping, insurance, returns, licensing); footer
  with confident licensing line. Cart badge pops on EVERY count change; selection uses FLIP.
- Prices/players are placeholders owned by one data module (`src/lib/data.js`) per app for later
  Shopify swap; `data.js` opens with a REPLACE-BEFORE-PUBLISH banner comment. Copy tiers: (a)
  authenticity claims (COA, witnessed signing, hologram) — always confident; (b) nominative use —
  real player/club names DESCRIBE the item ("shirt signed by X"), never imply endorsement or
  partnership; (c) affiliation claims naming a real club/league as licensor ("official partner
  of", "licensed by [club]") and crest imagery — forbidden in placeholder catalogs; the footer
  licensing line stays generic-confident ("officially licensed — licensing held by seller;
  details populated at catalog swap"). Rendered signatures, hologram brands, and authenticators
  are FICTIONAL or generic ("independent third-party authentication") — never PSA/Beckett, never
  a real player's actual autograph shape.

## 7 · PHASE MAP (agents, QA woven in — not appended)

- **A · Dissect** (parallel agents → dossier; §2).
- **B · Art direction, per template:** 2 independent proposal agents per template (16 total),
  each locked to a different world+class candidate pairing. The orchestrator PRE-ASSIGNS all 16
  pairings as a design: each class appears exactly twice, never twice on the same template; each
  world at most twice, never twice on the same template — and writes down one witness selection
  (8 disjoint worlds, 8 disjoint classes) BEFORE spawning, proving a valid fleet exists inside
  the design. Worlds pre-name mechanics; classes may not impersonate each other: the orchestrator
  also publishes a **dominant-visual-verb registry** (draws-itself / ripples /
  assembles-from-instances / refracts / illuminates-volume / displaces-image / simulates-flow /
  choreographs-DOM); each brief declares exactly ONE dominant verb, and where a world's named
  mechanic belongs to a different verb than the assigned class (e.g. THREAD without class 2), the
  brief states the replacement mechanic explicitly — "stitching rendered as strokes" under any
  other class is a rejection. A judge panel (3 judges) scores each proposal 1–5 per criterion
  (distinctiveness, buildability, memorabilia-brand fit, screenshot moment) — synthesize only
  from proposals with mean ≥4 on distinctiveness AND buildability, chosen by the orchestrator as
  a MATCHING over the ≥4 survivors: 8 disjoint worlds, 8 disjoint classes, 8 disjoint verbs. If
  no valid matching exists, spawn a targeted THIRD proposal only for the blocking templates —
  pairing drawn from still-uncovered classes/worlds, judges' criticisms attached — and repeat
  until the matching closes. Never resolve a collision by editing a synthesized brief's world or
  class in place. The synthesizer's brief MUST enumerate 4–6 NAMED signature states (e.g.
  `ink-dry`, `uv-sweep`, `mosaic-raise`) exposed via `window.__qa.set(name)` — a brief state with
  no working handle is a build failure. THEN a **cross-fleet distinctness judge** reviews all
  eight briefs against the §4 table — rejecting any two briefs sharing a dominant verb regardless
  of class label — and forces re-rolls BEFORE any code exists.
- **C · Build in two waves of four** (J1–J4, then J5–J8): scaffold each app (shared hardened lib
  CONTRACTS, separate everything else). The orchestrator writes each signature engine +
  choreography; agents build isolated DOM sections in parallel where files don't collide. Build
  clean (`npm run build` → 0 errors/warnings) at every milestone; scan for stray merge-conflict
  markers after every external sync. Wave 2 starts only after Wave 1 passes Phase D. Any §8
  section-count cut must be declared fleet-wide BEFORE Wave 2 starts and applied to both waves
  symmetrically; per-page zone counts go in the Phase F scorecard. If E.5's ranking places three
  or more Wave-2 pages in the bottom four, that is a wave-parity failure — the orchestrator must
  diagnose it as such (not as three unlucky pages) before any elevation cycle is spent.
- **D · QA agents, per template (all mandatory, evidence attached):**
  1. *State QA* — drive `window.__qa`: screenshot hero, every NAMED brief state (attach the
     name→screenshot map), the buy box, mobile 375px, and mid-page dense zones. Harness laws:
     verify structurally before visually; hidden tabs freeze rAF/tickers/observers — compose
     states via `__qa` or a `translateY` on the content wrapper (fixed layers untouched), NEVER
     programmatic scroll; never test resize-wired behavior in a hidden tab — read the code.
  2. *Robustness QA* — `?rm=1` (static, nothing hidden, no motion promises in copy), `?nogl=1`
     (designed fallback, not a blank), console = zero errors, `scrollWidth===clientWidth` @375.
  3. *Commerce QA* — every button does what it says; cart agrees with labels; one source of truth
     for prices; COA/edition/provenance fields render for every SKU; sold-out and 1-of-1 states
     behave.
  4. *Adversarial code review* — finder agents per lens (WebGL capability, scroll/choreography
     conflicts, React lifecycle/StrictMode, perf/fill-rate, mobile Safari) + skeptic verifiers who
     must try to REFUTE each finding against the real code; only confirmed findings get fixed.
- **E · Confusability gate (two-stage):** screenshots captured by a QA agent (never a builder)
  under a fixed protocol: 1440px and 375px at scroll depths 0/25/50/75/90%, plus catalog grid and
  open buy box — identical depths for all eight — plus one motion strip per page (same viewport
  composited at 10 scroll positions). **Stage 1:** the QA agent composites each page's captures
  into ONE contact sheet, labeled A–H in random order with no other metadata — eight sheets
  total, so no judge ever holds more than eight images. Judges are 3 fresh agents whose prompts
  contain ONLY the shuffled sheets and this cover task: "These sheets come from some number of
  studios' portfolios. Group the sheets by studio and say how many studios you see, with
  reasons." Pass: every judge returns eight singleton groups. **Stage 2:** any pair grouped
  together by any judge gets a dedicated pairwise deep-compare (that pair's full capture sets
  only) naming the shared axes; BOTH members then get divergence surgery on those axes.
  Overlapping flagged pairs resolve as ONE surgery plan per page (union of named axes, one pass).
  Re-gating after surgery is Stage-2 pairwise for the flagged pairs only; Stage 1 re-runs once,
  after ALL surgeries in the batch land.
- **E.5 · Floor pass:** judges rank the eight AND score each page 1–5 on craft; the bottom TWO
  get one orchestrator-led elevation cycle (a named upgrade to the signature moment + weakest
  section rebuilt), then re-screenshot, re-rank, re-score. Ship when max−min ≤ 1. Budget: at
  most TWO elevation rounds fleet-wide, always targeting the current bottom two; if the gap
  survives round two, ship anyway and the proof pack's first page records the residual gap as a
  named deficit with the specific axes still lagging.
- **F · Proof pack** (starts for no template until E passes): per template — a scorecard with one
  row per dossier law (pass/fail + evidence; any failed hardened law blocks ship), findings
  fixed, axes vs the other seven, the screenshot set, build output, and a 5-line "what makes this
  one unmistakable". Plus one automated fleet audit: (1) grep ALL font ingress — Fontsource
  imports, `@font-face`, `<link>` fonts — no display family twice; (2) extract each site's lead
  accent token, convert to HSL — fail if any two accents sit within 30° of hue; (3) cite the file
  implementing each signature engine — eight disjoint classes; (4) every proof pack declares its
  page's value for all nine §4 rows in a fixed one-line-per-axis format, and a dedicated audit
  agent assembles the 8×9 matrix and checks all 28 pairs against each row's rule — the matrix
  ships as a proof-pack artifact, not prose.

## 8 · BUDGET & HONESTY

- Eight SHIPPED templates beat five masterpieces and three stubs. If time pressure hits, cut
  section COUNT per page (never below the §6 spine) — the §4 contract, the Phase E gate, and
  robustness laws are never cuttable.
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
