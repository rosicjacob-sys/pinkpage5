import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function MaskedCharReveal() {
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
      split = new SplitType(el, { types: 'chars', charClass: 'sh-char' })
      if (!split.chars?.length) return
      tween = gsap.from(split.chars, {
        yPercent: 112,
        duration: 0.7,
        stagger: 0.028,
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
      <h3 ref={ref} className="pv-heading">
        Every word emerges letter by letter.
      </h3>
      <p className="pv-hint">Scroll this card into view</p>
    </div>
  )
}
