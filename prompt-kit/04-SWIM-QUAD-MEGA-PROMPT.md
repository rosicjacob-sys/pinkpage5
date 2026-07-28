# SWIM-QUAD — Reverse-Engineering & Four-Variation Build Engine (Swimwear · v1.0)

> **How to use:** paste this whole file into a fresh session as the opening prompt. If the
> reference codebases are on disk, set the paths in §1; if not, the embedded dossier in §3 is the
> fallback ground truth. The session must run multi-agent. Fan-out ladder: Workflow tooling → Task/subagent
> tooling → if neither exists, strictly separated sequential role passes, each producing its own
> named report before the next role begins, with the degradation declared in the proof pack. The
> invariant is role separation — no builder ever verifies or judges its own output. Solo execution
> that skips this ladder is a spec violation, not a shortcut.

---

## 0 · MISSION

You are a design-lead orchestrator commanding agent teams. The job has two halves, in order:

1. **REVERSE-ENGINEER** the animation logic of a family of award-grade animated ecommerce landing
   pages (references in §1) into an explicit, transferable dossier: not "it looks nice" but the
   exact architecture — stores, scrubs, shaders, failsafes, QA hooks — that makes them work.
2. **BUILD FOUR swimwear-brand landing pages** from that logic:
   - **P1 · pink + white** and **P2 · pink + white** — two variations so different that a stranger
     shown both would NOT guess they share an author, a codebase, or a brief.
   - **V1 · purple + white** and **V2 · purple + white** — same rule.
   All four are ALSO pairwise unrecognizable across the pink/purple line. Four pages, four souls.

Never flatten into a generic shop. Never ship safe defaults. Every claim of "done" is proven with
screenshots and scorecards, not asserted.

## 1 · INPUTS (fill or fall back)

- `REF_DIRS` — reference codebases to dissect (default, if present on disk):
  `/Users/andreidutescu/pinkpage5` (Pink Pill), `/Users/andreidutescu/peptides` (ATELIER),
  `/Users/andreidutescu/strata` (STRATA), `/Users/andreidutescu/lumen` (NOCTA),
  `/Users/andreidutescu/v10` (APEXION). Missing dirs → skip; none present → §3 dossier is ground truth.
- `OUT_DIRS` — four sibling project dirs, one per variation (e.g. `swim-p1`, `swim-p2`,
  `swim-v1`, `swim-v2`). Each is a SEPARATE Vite + React app with its own git history.
- `BRAND` — the swimwear brand: if a name/logo/copy pack is supplied use it; otherwise invent
  four DIFFERENT brand identities (name, voice, tagline) — one per variation. Same company, four
  campaign identities, or four fictional labels — but never one brand look reused four times.
- Stack (fixed): Vite + React 18, three.js + @react-three/fiber@8 + drei, GSAP ≥3.13 (all plugins free since 3.13 —
  SplitText preferred for masked line reveals, it re-splits cleanly on resize; split-type
  acceptable), Lenis, custom GLSL. Fonts via Fontsource.

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
  frosted "shield" cabins; a killed multi-property intro tween strands fields (hand off per-field);
  `gl_PointSize` must be clamped and DPR-scaled; additive bloom washes grey on transparent
  canvases (fake glow with additive shells); amorphous particle blobs read as mold on light
  backgrounds (every state needs explicit structure); `uv.x` runs ALONG a TubeGeometry.
The synthesizer merges these into the **ANIMATION LOGIC DOSSIER** — the single source all build
agents obey. Every dossier law is a binding per-page MUST for all four builds — verified in Phase
D and scored as a per-page row in the Phase F scorecard, not a description of what the references
did. If `REF_DIRS` are absent, the dossier = §3 + §3b + every law and lesson enumerated in this
section's bullets; nothing in §2 is conditional on the references existing.

## 3 · EMBEDDED DOSSIER (fallback ground truth — also the checklist Phase A must at minimum confirm)

One persistent canvas per page, fixed behind `<main>` (canvas z1, main z2, footer/announce
`position:relative;z2` — anything outside main needs its own stacking context). A shared mutable
store scrubbed by non-overlapping GSAP waypoints and read every frame. One signature element that
TRAVELS and TRANSFORMS down the page — never scattered per-section effects. Frosted near-opaque
cabins guarantee text legibility over the spectacle ("background spectacle needs a foreground
guarantee, not just steering"). Every animated thing has three states (entrance → idle life →
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
  saturated pink/violet and silently fails the §4 color axis.
- **BREAKPOINT BOUNDARY** — paired queries use `(min-width:800px)` / `(max-width:799.98px)` so no
  width matches both sides; breakpoint behavior is driven by LIVE media-query listeners, never one
  load-time read.
- **ZERO-WIDTH CANVAS GATE** — skip rendering while canvas width is 0 (hidden-tab reload reports
  0) and recheck on a wall-clock poll, not only on resize events; wire `webglcontextlost`
  (preventDefault, restore or fall back).
- **QA HANDLES** — `window.__qa.set(stateNameOrProgress)` synchronously writes the store, forces
  the master scrub to that progress, and renders exactly one frame; `window.__qa.advance(ms)`
  steps the internal clock and renders one frame; both must work with rAF frozen (hidden tab).
- **WEBGL APPLICABILITY** — WebGL-specific laws (probe, contextlost, zero-width gate, `?nogl=1`
  fallback scene) bind only WebGL variations. A DOM/SVG variation still owes the persistent fixed
  signature layer, all reveal failsafes, the `?rm=1` kill, QA handles, and StrictMode cleanup; its
  `?nogl=1` state must equal its default state and the scorecard must say so. "N/A" is valid only
  where the mechanism (a WebGL context) is literally absent.

## 4 · THE DISTINCTNESS CONTRACT (the heart of this brief)

"Unrecognizable" is enforced, not vibed. The four variations MUST differ on every axis below,
where "differ" means satisfying that ROW'S rule — the row's rule is the test, not naive pairwise
inequality. Any pair failing a row's rule is a build failure:

| Axis | Rule |
|---|---|
| Central metaphor | Four different answers to "what is this page, physically?" (e.g. water surface seen from below · an editorial print shoot · a sun-bleached postcard/archive · a fabric/cloth study · a poolside architecture piece · a tide chart/instrument). Never two water-surface pages. |
| Signature technique class | Four DISJOINT classes from: raymarched/shader fluid or caustics · cloth/softbody or flag sim · GPU particle field (morph or GPGPU) · refraction/transmission glass · image-driven displacement/editorial WebGL (distorted photography, kinetic slices) · pure-DOM/SVG choreography masterpiece (no WebGL). Pick per variation; no class reused. Traps: transmission/glass refracts only what lives INSIDE the canvas — it cannot sample the DOM behind it, so the refracted world (color fields, texture planes) must be in-scene, with a cheap-material mobile fallback. The image-displacement class may only be picked when real imagery exists or the variation commits to generated texture of hero quality — displaced gradients read as a broken shader. |
| Canvas value | Within each color pair, one light and one deep page. The two pages that share a value across pairs must still differ in canvas TREATMENT (paper-white vs warm ivory; near-black vs deep saturated pigment). Pink-on-white and white-on-deep-pink are different worlds — use that. |
| Color treatment | Within the mandate (P* = pink+white, V* = purple+white): different hex families (hot/magenta vs blush/rose; violet/ultraviolet vs lilac/orchid), different jobs for the accent (fill vs light vs ink vs material), neutrals may shift warm/cool. The mandate is a constraint, not a look. |
| Type system | Four unrelated pairings (e.g. high-contrast serif + mono · expanded grotesk · condensed display + humanist · editorial slab). No font family appears twice. |
| Layout grammar | Different container logic: full-bleed editorial vs centered column vs split-screen vs broken/overlapping grid. |
| Scroll grammar | Different choreography spine: continuous morph tour vs pinned chapter set-pieces vs horizontal-within-vertical vs velocity-reactive ambient. |
| Section rhythm & copy voice | Different section counts/order and a different brand voice per variation. |
| Component grammar | Buy box, product card, button, and reveal micro-interactions pairwise unrecognizable: different card anatomy (radius/border/hover physics), different button language, different reveal verb (mask-wipe vs blur-in vs slide vs typographic). The shared hardened lib may share LOGIC (failsafes, latches, probes) but never markup, CSS, or easing values. |

**Confusability gate (Phase E):** screenshots are captured by a QA agent (never a builder) under a
fixed protocol: 1440px and 375px viewports at scroll depths 0/25/50/75/90%, plus the catalog grid
and an open buy box — identical depths for all four pages — plus one motion strip per page (the
same viewport composited at 10 evenly spaced scroll positions, so choreography is judged, not just
stills). Judges are 3 fresh agents whose prompts contain ONLY the shuffled, unlabeled images and
this cover task: "These screenshots come from some number of studios' portfolios. Cluster them by
studio and say how many studios you see, with reasons." Never reveal the build goal or the desired
answer. Pass: every judge places the four pages in four different studios. Any two clustered
together sends BOTH back for divergence surgery on the axes the judges' reasons name.

## 5 · SWIMWEAR ADAPTATION (what the pages must DO)

- Ecom spine per page: hero with visible price + working add-to-cart · collection/catalog of at
  least 6 SKUs (one-pieces, bikini sets, trunks — with sizes and colorways as real variant state)
  · a product-story set-piece using the signature mechanic · lookbook/editorial moment · fit &
  fabric section (materials, UPF, care) · reviews/social proof · size-guide access from every buy
  point · shipping/returns trust band · FAQ · compliant footer. Cart badge pops on EVERY count
  change; selection uses FLIP or equivalent. Variant state includes availability: at least one SKU
  renders a sold-out size as disabled with a notify affordance. The size guide is a real
  per-category cm/in measurement table with a how-to-measure note, not a stub. Bikini sets declare
  their sizing model (set-sized, or independent top/bottom sizes) and the buy box and cart honor it.
- Swim-native motion vocabulary — draw from (but don't exhaust in one page): water caustics,
  buoyancy/bob, ripple/refraction, wet-fabric cling and flow, sun flare/heat shimmer, chlorine-blue
  depth fog, tide/foam edges, droplet condensation, poolside shadow play, editorial photo
  displacement. The chosen metaphor dictates which 2–3 belong; the rest are banned for that page.
- Photography: if brand imagery is provided, it is the hero material — build WebGL/DOM treatments
  AROUND it. If not, build with abstract/generated texture + color fields and typographic heroes;
  never ship obvious stock or placeholder-labeled boxes.
- Copy: confident, sensory, short. No fake medical/performance claims; sizes and prices are
  placeholders clearly owned by one data module per app (`src/lib/data.js`) for later Shopify swap.

## 6 · PHASE MAP (agents, with QA woven in — not appended)

- **A · Dissect** (parallel agents → dossier; §2).
- **B · Art direction, per variation:** 3 independent proposal agents per variation (12 total),
  each locked to a different candidate metaphor+technique pairing from §4; a judge panel (3 judges) scores
  each proposal 1–5 per criterion (distinctiveness, buildability, swim-brand fit, screenshot
  moment) — synthesize only from a proposal with mean ≥4 on distinctiveness AND buildability; a
  synthesizer writes each variation's buildable brief, which MUST enumerate 4–6 NAMED signature
  states (e.g. `submerged`, `surface-break`, `colorway-shift`) that the build exposes via
  `window.__qa.set(name)` — a brief state with no working handle is a build failure. THEN a **cross-variation distinctness judge** reviews the four
  briefs together against the §4 table and forces re-rolls BEFORE any code exists.
- **C · Build, per variation:** scaffold each app (shared hardened lib contracts, separate
  everything else). The orchestrator (you) writes the signature engine + choreography for each —
  agents may build isolated DOM sections/components in parallel where files don't collide. Build
  clean (`npm run build` → 0 errors/warnings) at every milestone; scan for stray merge-conflict
  markers after every external sync.
- **D · QA agents, per variation (all mandatory, evidence attached):**
  1. *State QA* — drive `window.__qa` in a controlled tab: screenshot hero, every NAMED brief
     state (attach the name→screenshot map), the buy box, mobile 375px, and the mid-page zones
     where prior builds buried content. Harness laws: verify structurally (DOM/state/geometry)
     before visually; hidden tabs freeze rAF/tickers/observers, so compose states via `__qa` or a
     `translateY` on the content wrapper (fixed layers untouched) — NEVER via programmatic scroll
     (screenshots at `scrollY>0` render blank); never test resize-event-wired behavior in a hidden
     tab — read the code instead.
  2. *Robustness QA* — `?rm=1` (static, nothing hidden, no motion promises in copy), `?nogl=1`
     (designed fallback, not a blank), console = zero errors, `scrollWidth===clientWidth` @375.
  3. *Commerce QA* — every button does what it says; cart total agrees with labels; one source of
     truth for prices; size guide reachable from every buy point.
  4. *Adversarial code review* — finder agents per lens (WebGL capability, scroll/choreography
     conflicts, React lifecycle/StrictMode, perf/fill-rate, mobile Safari) + skeptic verifiers who
     must try to REFUTE each finding against the real code; only confirmed findings get fixed.
- **E · Confusability gate** (§4) across the four finished pages; divergence surgery until pass.
- **E.5 · Floor pass:** judges rank the four passed pages; the lowest-ranked gets one
  orchestrator-led elevation cycle — a named upgrade to its signature moment plus its weakest
  section rebuilt — then re-screenshot, re-rank. Ship only when judges call the worst page peer
  work to the best.
- **F · Proof pack** (starts for no variation until all six pairs pass E): per variation — a
  scorecard with one row per dossier law (per-page pass/fail + evidence; any failed hardened law
  blocks ship), findings fixed, axes vs the other three, the screenshot set, build output, and a
  5-line "what makes this one unmistakable". Plus one automated axis audit across the four repos:
  grep Fontsource imports (no family appears twice), diff palette tokens (no shared accent hex
  family), and cite the file implementing each signature engine (four disjoint classes).

## 7 · BUDGET & HONESTY

- Depth over breadth is banned: four SHIPPED pages beat two masterpieces and two stubs. If time
  pressure hits, cut section COUNT per page (never below the §5 spine) — the §4 contract, the
  Phase E gate, and robustness laws are never cuttable.
- Evidence tiers, in order: (1) rendered screenshots via any available browser tool; (2) headless
  render or full-page HTML + computed-style structural dumps; (3) static code verification. Every
  claim attaches the highest tier the environment supports; "unverifiable" is claimable only after
  demonstrating tiers 1–2 failed, and the Phase E gate still runs at tier 2 (judges cluster
  structural snapshots) — never waived, only its medium changes. If the gate could not run at any
  tier, the proof pack's first line reads GATE NOT RUN.
- Nothing in this prompt is aspirational decoration. Every law traces to a bug that actually
  shipped or a technique that measurably carried quality. Treat deviations as regressions.

**Begin with Phase A. Announce your agent plan (counts, lenses, phases) before spawning.**
