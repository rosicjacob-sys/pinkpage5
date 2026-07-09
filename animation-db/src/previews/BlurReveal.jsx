import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BlurReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el, {
        filter: 'blur(12px)',
        autoAlpha: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div className="pv-container pv-dark pv-center">
      <h3 ref={ref} className="blur-text">
        Soft un-blur reveal
      </h3>
      <p className="pv-hint">Scroll into view</p>
    </div>
  )
}
