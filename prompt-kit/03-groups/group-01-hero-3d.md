# GROUP ADDENDUM — hero-3d (paste after the master)

## Archetype — what you're probably holding
React + Vite + @react-three/fiber + drei is the usual skeleton (sometimes vanilla Three + GSAP, occasionally Vue/TresJS or Svelte/Threlte — respect it, §5.3). One full-viewport `<Canvas>`, fixed or sticky behind the DOM, holding a single hero object: a product model, transmission blob, instanced particle field, or shader plane. Scroll drives the camera or object through waypoints — a GSAP scrub writing a store, or drei `ScrollControls`/`useScroll`. Expect GLSL in `/shaders` or `shaderMaterial` calls, an EffectComposer chain (bloom/DoF/grain), an HDRI `Environment`, leva debug panels, a `useProgress` loader. Expect ZERO commerce: no cart, no variants, often barely any DOM copy. Highest animation ceiling of all archetypes; also the highest GPU bill.

## The soul — what must survive the adaptation
- The **scroll→scene coupling** — the exact mapping of scroll progress to camera path / object transform, including its lag and easing. This IS the signature (§2). Re-aim it at the product; never replace it.
- The **material recipe** (transmission/clearcoat/iridescence values) + lighting rig + post chain — this trio is the template's "look." Swap the mesh, keep the light.
- **One persistent protagonist**: the object travels across sections while DOM scrolls over it. Do not fragment it into per-section canvases.
- The DOM copy is disposable. The render pipeline is not.

## Ecom mapping — the isomorphism
- Hero scene → hero: pill in-canvas, price + working add-to-cart as DOM overlay (§5.5). Commercial text NEVER lives inside the canvas.
- Scroll chapters / camera waypoints → product story: one waypoint = one claim (formulation, dosage, ritual), copy reveal synced to camera arrival.
- Configurator / material switcher → buy box: bundle selection swaps the scene state (1 capsule / 3 clustered / subscription glow), 3-pack pre-selected.
- Tech-specs / about panel → ingredients + dosage table (mono numerals, big — §1).
- Contact / credits → trust band, FAQ, compliant footer — pure DOM, after the canvas has released the viewport.
- Cart state, sticky buy bar, variant logic: MISSING from these templates. Budget them as new DOM builds up front; do not discover this at hour six.

## Pill-bench staging
- Medium: a modeled two-tone capsule mesh — royal pink `#F0148C` half + pearl-white half, visible seam ring, `clearcoat:1, clearcoatRoughness:.08`, `PP-01 · 750 MG` as decal/texture — dropped INTO the template's existing rig. Keep its camera path, lights, environment, and post chain: the pill inherits the template's look, not a generic studio render.
- Capsule moment: the template's signature mechanic at maximum intensity on one scrubbed pinned scene — the capsule splits along its seam, dissolves through the template's own shader, multiplies into instanced granules, or takes a camera dive-orbit. Push the mechanic the template owns; never import a foreign one (§2).
- All choreography writes one store (§4); the moment's end-state is reconciled by a later waypoint; expose `window.__qa = { set, advance }` so QA can compose frames in hidden tabs.
- Build the `?nogl=1` CSS-gradient capsule FIRST and keep it rendered underneath the canvas at all times (§4).

## Keepers to hunt for
1. Camera path / scroll rig — `Experience`, `CameraRig`, `useScroll` consumers, GSAP-scrubbed store writers.
2. Material recipes — `MeshTransmissionMaterial` configs, custom PBR setups, iridescence/clearcoat constants.
3. GLSL shaders — dissolve/noise/gradient passes in `/shaders/*.glsl` or inline `shaderMaterial`.
4. Postprocessing chain — the EffectComposer / `@react-three/postprocessing` settings that define the grade.
5. Lighting + Environment — HDRI choice, rim/key placement; this is most of "expensive-looking."
6. Instanced particle systems (verify: instanced, seeded PRNG, zero per-frame allocation — §4).
7. DOM↔canvas sync pattern — the store/overlay mechanism binding scroll copy to scene state.
8. Loader choreography — the `useProgress` entrance sequence, reusable as the page's reveal.

## Traps — archetype-specific failure modes, each a hard rule
- **GPU budget is a spec, not a vibe**: clamp DPR ≤2 desktop / ≤1.5 mobile; never stack fullscreen transmission + bloom + DoF without profiling; if the heavy scene can't hold 60fps (no long tasks >50ms, §10), cut post effects before cutting the mechanic.
- If the template uses drei `ScrollControls`, it owns page scroll and will strangle your DOM sections — dismantle it, keep its curve, let Lenis/native scroll own the page and the canvas read a store (§2, §4).
- Strip leva panels, `OrbitControls`, stats.js, and every debug GUI from the production build — one shipped panel voids the audit.
- GLB/HDRI assets: draco/meshopt-compress, preload, and never show a blank hero while loading — the CSS fallback covers the wait; hide it only after a REAL first frame (double-rAF gate, §4).
- No commerce bones exist here: reserve explicit hours for buy box, cart, sticky bar, FAQ, footer BEFORE polishing the scene — 3D polish expands to consume any unbudgeted time.
- `?rm=1`: `frameloop='demand'` + frozen time source (§4) — one identical static pose, proven by two screenshots seconds apart (§10).
- StrictMode: dispose geometries/materials in cleanup, NEVER `loseContext()` (§4); exactly one canvas instance after double-mount; never boot into a zero-width box (wall-clock gate, §4).
- Mobile: simplified or static scene, particles ≤150, DPR ≤1.5 (§8) — a phone that thermal-throttles on the hero fails the definition of done.
