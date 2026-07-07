import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { pillStore } from './pillStore'
import { MQ_DESKTOP, MQ_MOBILE, MQ_REDUCED } from '../lib/env'

gsap.registerPlugin(ScrollTrigger)

/**
 * The pill's journey. Consecutive scrubbed waypoint tweens (immediateRender
 * off so each picks up where the previous left it), plus the one triggered
 * timeline: the drop into the bottle at the buy box.
 */
export function usePillChoreography() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    const wp = (trigger, vars, start = 'top bottom', end = 'top 25%') =>
      gsap.to(pillStore, {
        ...vars,
        ease: 'none',
        immediateRender: false,
        scrollTrigger: { trigger, start, end, scrub: 0.5, invalidateOnRefresh: true },
      })

    const intro = () =>
      gsap.to(pillStore, { intro: 1, duration: 1.5, ease: 'back.out(1.5)', delay: 0.2 })

    mm.add(MQ_DESKTOP, () => {
      gsap.set(pillStore, { x: 0.24, y: 0.01, scale: 1, dark: 0, pose: 0 })
      intro()
      wp('#benefits', { x: -0.37, y: -0.01, scale: 0.5 })
      wp('#ingredients', { x: 0.22, y: 0, scale: 0.78 })
      wp('#science', { x: 0.27, y: 0.03, scale: 0.85, dark: 1 }, 'top 85%', 'top 25%')
      wp('#reviews', { x: 0.31, y: 0.05, scale: 0.45, dark: 0 }, 'top 95%', 'top 45%')
      wp('#offer', { x: -0.31, y: 0.02, scale: 0.4 })
      wp('#final-cta', { x: 0.27, y: -0.03, scale: 0.6 }, 'top bottom', 'top 45%')
      wp('#site-footer', { y: -0.95 }, 'top bottom', 'top 60%')

      // The drop: arc into the bottle, squash, puff, tell the DOM.
      const drop = gsap
        .timeline({
          paused: true,
          onComplete: () => window.dispatchEvent(new CustomEvent('pill-landed')),
        })
        .to(pillStore, { dropY: -0.16, duration: 0.55, ease: 'power2.in' })
        .to(pillStore, { squash: 0.6, duration: 0.09, ease: 'power1.out' })
        .set(pillStore, { puff: 1 }, '<')
        .to(pillStore, { squash: 1, duration: 0.9, ease: 'elastic.out(1, 0.4)' })
        .to(pillStore, { puff: 0, duration: 0.8, ease: 'power2.out' }, '<0.05')
      const dropST = ScrollTrigger.create({
        trigger: '#offer',
        start: 'top 45%',
        once: true,
        onEnter: () => drop.play(),
      })
      return () => {
        drop.kill()
        dropST.kill()
      }
    })

    mm.add(MQ_MOBILE, () => {
      gsap.set(pillStore, { x: 0, y: -0.2, scale: 0.6, dark: 0, split: 0 })
      intro()
      // Small ornament in the upper right through the reading sections.
      wp('#benefits', { x: 0.3, y: 0.32, scale: 0.26 })
      // No pin on mobile: a short scrub between two poses instead of the split.
      wp('#ingredients', { x: 0.02, y: 0.24, scale: 0.5, pose: 1 }, 'top 80%', 'top 10%')
      wp('#science', { x: 0, y: 0.28, scale: 0.55, dark: 1, pose: 0 }, 'top 85%', 'top 25%')
      wp('#reviews', { x: 0.3, y: 0.32, scale: 0.26, dark: 0 }, 'top 95%', 'top 45%')
      wp('#offer', { x: 0.28, y: 0.3, scale: 0.3 })
      wp('#final-cta', { x: 0, y: -0.16, scale: 0.5 }, 'top bottom', 'top 45%')
      wp('#site-footer', { y: -0.95 }, 'top bottom', 'top 60%')
      const shineST = ScrollTrigger.create({
        trigger: '#offer',
        start: 'top 55%',
        once: true,
        onEnter: () => window.dispatchEvent(new CustomEvent('pill-landed')),
      })
      return () => shineST.kill()
    })

    mm.add(MQ_REDUCED, () => {
      // One dignified static pose; the scene renders a single frame.
      const mobile = window.innerWidth < 800
      gsap.set(pillStore, {
        x: mobile ? 0 : 0.24,
        y: mobile ? -0.2 : 0.01,
        scale: mobile ? 0.6 : 1,
        intro: 1,
        split: 0,
        dark: 0,
        dropY: 0,
        squash: 1,
        puff: 0,
      })
    })

    return () => mm.revert()
  }, [])
}
