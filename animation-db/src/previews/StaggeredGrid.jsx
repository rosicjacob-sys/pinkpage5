import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StaggeredGrid() {
  const scope = useRef(null)

  useEffect(() => {
    const el = scope.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.sg-cell'), {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
        stagger: { each: 0.06, from: 'start' },
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div className="pv-container" ref={scope}>
      <div className="sg-grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="sg-cell" />
        ))}
      </div>
      <p className="pv-hint">Scroll into view</p>
    </div>
  )
}
