# SWIM-QUAD — Reverse-Engineering & Four-Variation Build Engine (Swimwear · v1.0)

> **How to use:** paste this whole file into a fresh session as the opening prompt. If the
> reference codebases are on disk, set the paths in §1; if not, the embedded dossier in §3 is the
> fallback ground truth. The session must run multi-agent (workflows/subagents) — solo execution
> is a spec violation, not a shortcut.

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
- Stack (fixed): Vite + React 18, three.js + @react-three/fiber@8 + drei, GSAP 3.12 (free
  plugins only — NO SplitText/DrawSVG/Morph), Lenis, split-type, custom GLSL. Fonts via Fontsource.

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
agents cite. If `REF_DIRS` are absent, promote §3 to dossier status and continue.

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

## 4 · THE DISTINCTNESS CONTRACT (the heart of this brief)

"Unrecognizable" is enforced, not vibed. The four variations MUST differ on EVERY axis below —
a shared choice on any axis by any two variations is a build failure:

| Axis | Rule |
|---|---|
| Central metaphor | Four different answers to "what is this page, physically?" (e.g. water surface seen from below · an editorial print shoot · a sun-bleached postcard/archive · a fabric/cloth study · a poolside architecture piece · a tide chart/instrument). Never two water-surface pages. |
| Signature technique class | Four DISJOINT classes from: raymarched/shader fluid or caustics · cloth/softbody or flag sim · GPU particle field (morph or GPGPU) · refraction/transmission glass · image-driven displacement/editorial WebGL (distorted photography, kinetic slices) · pure-DOM/SVG choreography masterpiece (no WebGL). Pick per variation; no class reused. |
| Canvas value | At least one light-canvas and at least one deep/dark-canvas page per color pair. Pink-on-white and white-on-deep-pink are different worlds — use that. |
| Color treatment | Within the mandate (P* = pink+white, V* = purple+white): different hex families (hot/magenta vs blush/rose; violet/ultraviolet vs lilac/orchid), different jobs for the accent (fill vs light vs ink vs material), neutrals may shift warm/cool. The mandate is a constraint, not a look. |
| Type system | Four unrelated pairings (e.g. high-contrast serif + mono · expanded grotesk · condensed display + humanist · editorial slab). No font family appears twice. |
| Layout grammar | Different container logic: full-bleed editorial vs centered column vs split-screen vs broken/overlapping grid. |
| Scroll grammar | Different choreography spine: continuous morph tour vs pinned chapter set-pieces vs horizontal-within-vertical vs velocity-reactive ambient. |
| Section rhythm & copy voice | Different section counts/order and a different brand voice per variation. |

**Confusability gate (Phase E):** a judge panel that has NOT seen the builds is shown paired
screenshots (hero+mid-page per variation, shuffled, unlabeled) and asked "same designer/template?"
Any pair scoring "probably same" sends BOTH variations back for divergence surgery on the axes
that leaked. Passing score: all six pairs "different author" or "unrelated".

## 5 · SWIMWEAR ADAPTATION (what the pages must DO)

- Ecom spine per page: hero with visible price + working add-to-cart · collection/catalog of at
  least 6 SKUs (one-pieces, bikini sets, trunks — with sizes and colorways as real variant state)
  · a product-story set-piece using the signature mechanic · lookbook/editorial moment · fit &
  fabric section (materials, UPF, care) · reviews/social proof · size-guide access from every buy
  point · shipping/returns trust band · FAQ · compliant footer. Cart badge pops on EVERY count
  change; selection uses FLIP or equivalent.
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
  each locked to a different candidate metaphor+technique pairing from §4; a judge panel scores
  (distinctiveness, buildability, swim-brand fit, screenshot moment); a synthesizer writes each
  variation's buildable brief. THEN a **cross-variation distinctness judge** reviews the four
  briefs together against the §4 table and forces re-rolls BEFORE any code exists.
- **C · Build, per variation:** scaffold each app (shared hardened lib contracts, separate
  everything else). The orchestrator (you) writes the signature engine + choreography for each —
  agents may build isolated DOM sections/components in parallel where files don't collide. Build
  clean (`npm run build` → 0 errors/warnings) at every milestone; scan for stray merge-conflict
  markers after every external sync.
- **D · QA agents, per variation (all mandatory, evidence attached):**
  1. *State QA* — drive `window.__qa` in a controlled tab: screenshot hero, each signature state,
     the buy box, mobile 375px, and the mid-page zones where prior builds buried content.
  2. *Robustness QA* — `?rm=1` (static, nothing hidden, no motion promises in copy), `?nogl=1`
     (designed fallback, not a blank), console = zero errors, `scrollWidth===clientWidth` @375.
  3. *Commerce QA* — every button does what it says; cart total agrees with labels; one source of
     truth for prices; size guide reachable from every buy point.
  4. *Adversarial code review* — finder agents per lens (WebGL capability, scroll/choreography
     conflicts, React lifecycle/StrictMode, perf/fill-rate, mobile Safari) + skeptic verifiers who
     must try to REFUTE each finding against the real code; only confirmed findings get fixed.
- **E · Confusability gate** (§4) across the four finished pages; divergence surgery until pass.
- **F · Proof pack:** per variation — a scorecard (laws honored, findings fixed, axes vs the other
  three), the screenshot set, build output, and a 5-line "what makes this one unmistakable".

## 7 · BUDGET & HONESTY

- Depth over breadth is banned: four SHIPPED pages beat two masterpieces and two stubs. If time
  pressure hits, cut section COUNT per page (never below the §5 spine), not robustness laws.
- Report honestly: if a law is unverifiable in your environment (e.g. live-scroll feel in a
  headless tab), say so explicitly in the proof pack instead of claiming it.
- Nothing in this prompt is aspirational decoration. Every law traces to a bug that actually
  shipped or a technique that measurably carried quality. Treat deviations as regressions.

**Begin with Phase A. Announce your agent plan (counts, lenses, phases) before spawning.**
