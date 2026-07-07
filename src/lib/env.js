// Capability probes + test hooks.
// ?rm=1 forces reduced motion, ?nogl=1 forces the WebGL fallback —
// so the failsafes can be exercised deliberately, not just trusted.
const params = new URLSearchParams(window.location.search)

export const FORCE_REDUCED_MOTION = params.has('rm')
export const FORCE_NO_WEBGL = params.has('nogl')

export const reducedMotion = () =>
  FORCE_REDUCED_MOTION || window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const coarsePointer = () => window.matchMedia('(pointer: coarse)').matches

export const isMobileViewport = () => window.matchMedia('(max-width: 799px)').matches

export function webglSupported() {
  if (FORCE_NO_WEBGL) return false
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

// gsap.matchMedia condition strings, honoring the ?rm=1 override.
// With ?rm=1 we hand gsap a never-matching query so all motion contexts stay off.
export const MQ_MOTION_OK = FORCE_REDUCED_MOTION
  ? '(min-width: 999999px)'
  : '(prefers-reduced-motion: no-preference)'
export const MQ_DESKTOP = `(min-width: 800px) and ${MQ_MOTION_OK}`
export const MQ_MOBILE = `(max-width: 799px) and ${MQ_MOTION_OK}`
export const MQ_REDUCED = FORCE_REDUCED_MOTION
  ? '(min-width: 1px)'
  : '(prefers-reduced-motion: reduce)'
