// Single mutable store for the persistent pill. GSAP writes it (scrubbed
// waypoints + triggered timelines), the R3F scene reads it every frame.
// x/y are viewport-fraction offsets from center (+x right, +y up);
// scale 1 = designed hero size.
export const pillStore = {
  x: 0.24,
  y: 0.01,
  scale: 1,
  intro: 0, // 0 -> 1 entrance pop
  split: 0, // 0 -> 1 capsule open + particle cloud
  activeCluster: -1, // highlighted ingredient cluster (-1 = none)
  dark: 0, // 0 -> 1 dark-scene lighting
  pose: 0, // mobile two-pose rotation scrub
  dropY: 0, // additive y for the buy-box drop
  squash: 1, // squash-and-stretch on landing
  puff: 0, // 1 -> 0 landing particle puff
}
