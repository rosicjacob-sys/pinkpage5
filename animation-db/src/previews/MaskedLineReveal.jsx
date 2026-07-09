import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function MaskedLineReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let split = null
    let tween = null

    const run = async () => {
      try {
        await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 800))])
      } catch {}
      split = new SplitType(el, { types: 'lines', lineClass: 'sh-line' })
      if (!split.lines?.length) return
      tween = gsap.from(split.lines, {
        yPercent: 112,
        duration: 0.85,
        stagger: 0.14,
        ease: 'power4.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onComplete: () => { split.revert(); split = null },
      })
    }
    run()
    return () => {
      if (tween) tween.kill()
      if (split) split.revert()
    }
  }, [])

  return (
    <div className="pv-container pv-dark">
      <h3 ref={ref} className="pv-heading pv-sm" style={{ lineHeight: 1.5 }}>
        Whole lines slide up.<br />Faster. Punchier.
      </h3>
      <p className="pv-hint">Scroll this card into view</p>
    </div>
  )
}
