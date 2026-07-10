# GROUP ADDENDUM — app-dashboard (paste after the master)

## Archetype — what you're probably holding
React/Next or Vue + Tailwind, a component library (shadcn/Radix, MUI, Ant, Tremor), a chart lib (Recharts/ApexCharts/Chart.js/ECharts), TanStack-style tables, a router with a dozen admin routes, and near-zero scroll motion — dashboards are viewport apps, not scroll stories. Expect: sidebar+topbar shell, KPI stat cards, line/area/donut charts, sortable tables, auth screens, toast system, command palette (cmdk), skeleton loaders, dark-mode tokens. Everything is stateful and componentized; almost nothing is choreographed. This is the weakest landing-page fit in the catalog — its value is data-viz and component polish, and your job is to weld a motion layer onto it without losing the "this is software" feel.

## The soul — what must survive the adaptation
- **App-chrome identity:** panel borders, mono numerals, status badges, dense information design. A stranger must say "they built a store inside an instrument panel," not "they deleted a dashboard."
- **Live-data credibility:** sparklines, gauges, tickers, counters — the sense that numbers are being *measured* right now. This IS the archetype's signature mechanic (§2): re-aim it at the product, never strip it.
- **Component-state discipline:** hover/focus/active/loading are already crafted — keep them, and keep the skeleton-shimmer language as your reveal texture.
- If the template is dark, stay dark: `#F0148C` on near-black instrument chrome is a gift. Do not lighten it.

## Ecom mapping — the isomorphism
- Sidebar/topbar shell → sticky section nav (Overview · Formula · Results · Reviews · Buy); every item scrolls to a real section or is deleted (§4 buttons law).
- KPI card row → product vitals band: `750 MG` · `PP-01` · absorption % · review count · ships-in-24h, all under the §3.3 counter contract.
- Charts → product evidence: 30-day efficacy curve, 24h absorption timeline, before/after area chart. Charts ARE the product-story section.
- Data table → bundle comparison ($39 single / $99 3-pack pre-selected / $29/mo subscribe) and an ingredient table (compound · dose · role).
- Auth/login screen → email capture or checkout entry; never ship a login wall on a landing page.
- Settings forms / segmented controls → the buy box variant selector (radio-card group with full ARIA per §4).
- Toast system → add-to-cart confirmation that agrees with the cart total; activity feed → live review stream; command palette → quick-buy easter egg (⌘K → "Buy 3-pack — $99").

## Pill-bench staging
No WebGL here — the hero medium is a **telemetry panel**: a large CSS gradient capsule (§7.1 fallback spec, soft shadow floor) mounted center-panel like a monitored asset, ringed by live instruments — mono readout `PP-01 · 750 MG`, absorption gauge, heartbeat sparkline, and a price module with a working add-to-cart. The **capsule moment** is "CAPSULE TELEMETRY — 24 HOURS": a pinned scrub (§2 pin spec) where ONE store value (hour 0→24, per §4 state law) drives every instrument at once — the energy line drawing itself, the focus gauge filling, the capsule cross-fading into a dissolve progress ring, a mono clock counting `00:00→24:00`, status badges flipping INGESTED → PEAK → SUSTAINED. Maximum intensity = the entire dashboard animating as one synchronized instrument reading the pill. That is this archetype's ceiling; measure it honestly in the scorecard.

## Keepers to hunt for
1. Chart wrappers (`components/charts/*`, `*Chart.tsx`) — the efficacy-curve engine.
2. KPI/stat cards with trend arrows — the vitals band skeleton.
3. Segmented control / radio-card group — the buy box selector.
4. Toast/notification system — cart feedback.
5. Sortable table with sticky header — bundle comparison.
6. Command palette (cmdk) — quick-buy.
7. Gauges, progress rings, sparklines — the capsule-moment instruments.
8. Skeleton shimmer + the dark-theme token file — reveal texture and palette base.

## Traps
- **The template gives you components, not motion.** Budget the entire §2/§3 scroll layer (Lenis, ScrollTrigger, reveal failsafes) as new work; if framer-motion is present, keep it for component micro-states and graft GSAP+ScrollTrigger alongside for choreography (§5.3 — graft, don't port).
- Never setState a chart per rAF frame — Recharts/Apex re-render whole SVGs. Scrub through the store, downsample to ≤15 data updates/sec, memoize everything else, or the capsule moment janks at exactly its climax.
- A ResponsiveContainer in a zero-width flex box renders nothing — same law as §4's zero-width canvas: gate chart mount on measured width.
- A re-skinned admin panel is the §9 factory-default fail: pink buttons on stock shadcn gray is a SKIP verdict on yourself. The accent must own charts, gauges, focus rings, and selection states.
- Delete every dead route and page (Analytics, Settings, Team); collapse the router to one scroll page — stranded admin routes ship as 404s.
- Invented telemetry is a claim: label every curve "simulated/illustrative," structure/function language only (§6). No fake "someone just bought" pressure toasts — ever.
- Tables and KPI grids at 375px: card-stack them below 640px or scroll them in their own `overflow-x:auto` container — §4's overflow clip is containment, not absolution.
- Kill the dark-mode toggle or fully theme both modes — a half-themed light mode is a shipped bug, not a feature.
- Tree-shake the component library and icon pack; admin bundles ship megabytes you won't use, and the hero chart must never be lazy-loaded behind them.
