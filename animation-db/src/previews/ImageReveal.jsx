import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ImageReveal() {
  const scope = useRef(null)

  useEffect(() => {
    const el = scope.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.ir-img'), {
        scale: 1.15,
        autoAlpha: 0,
        borderRadius: '50%',
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  const colors = ['#F0148C', '#C4126E', '#FFD3E7', '#6E5260']

  return (
    <div className="pv-container" ref={scope}>
      <div className="ir-grid">
        {colors.map((c, i) => (
          <div key={i} className="ir-img" style={{ background: c }}>
            <span className="ir-label">{i + 1}</span>
          </div>
        ))}
      </div>
      <p className="pv-hint">Scroll into view</p>
    </div>
  )
}
