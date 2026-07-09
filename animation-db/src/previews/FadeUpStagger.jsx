import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FadeUpStagger() {
  const scope = useRef(null)

  useEffect(() => {
    const el = scope.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.fus-item'), {
        y: 30,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div className="pv-container" ref={scope}>
      <div className="fus-grid">
        {['Focus', 'Energy', 'Calm', 'Clarity'].map((label) => (
          <div key={label} className="fus-item">
            <div className="fus-icon" />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="pv-hint">Scroll into view</p>
    </div>
  )
}
