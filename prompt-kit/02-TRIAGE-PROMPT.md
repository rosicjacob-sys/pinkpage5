# TRIAGE PROMPT — classify the template library (run ONCE, before any adaptation)

You are triaging a directory containing ~135 subfolders, each an independent template codebase. Your output drives which adaptation prompt each template gets. Do not modify any code. Be fast per folder — this is classification, not review.

## Per folder, capture:

1. **Stack** — framework (React/Next/Vue/Nuxt/Svelte/Astro/vanilla/Webflow-export/HTML-template), build tool, animation libs (gsap/framer-motion/lenis/locomotive/three/r3f/anime/css-only), CSS approach.
2. **Archetype** — exactly one of:
   `hero-3d` · `agency-portfolio` · `saas-landing` · `fashion-editorial` · `restaurant-hospitality` · `realestate-architecture` · `music-event` · `photography-gallery` · `content-magazine` · `app-dashboard` · `crypto-fintech` · `micro-personal`
   (If torn between two, pick by the SIGNATURE MECHANIC, not the industry theme — a restaurant site whose whole identity is a WebGL smoke shader is `hero-3d`.)
3. **Signature mechanic** — one line: the single most impressive thing this template does (with the file path where it lives). If nothing stands out, write "none — commodity template."
4. **Animation ceiling guess** — 0–5. (5 = custom shaders/physics/scroll rigs; 3 = solid GSAP choreography; 1 = fade-ins only; 0 = static.)
5. **Commerce bones** — none / partial (has CTAs, pricing sections) / full (cart, product pages).
6. **Health flags** — abandoned deps, won't-build risk, licenses, missing assets.

## Output: `TRIAGE.md` at the library root

- A table: `folder · stack · archetype · signature mechanic · ceiling · commerce bones · flags`.
- **Run order:** sort by (ceiling DESC, health ASC) within each archetype — highest-ceiling healthy templates first; they're the likeliest ADOPT/HARVEST candidates, so failures on them matter most.
- **Skip list:** templates scoring ceiling ≤1 AND "none" signature — mark `SKIP-TRIAGE` (don't spend a pill-bench run on commodity templates unless the library thins out).
- Group counts, so batches can be planned per archetype.

Each subsequent session then takes ONE folder and gets pasted: the MASTER GOLDEN PROMPT + the matching group addendum + the PILL-BENCH product context (master §7 defaults). The scorecards accumulate next to `TRIAGE.md` as `SCORECARDS/<folder>.md` — keep them in one place; they are the dataset the whole exercise exists to produce.
