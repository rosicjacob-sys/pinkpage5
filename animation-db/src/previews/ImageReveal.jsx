import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { label: 'Solar', from: '#f97316', to: '#facc15' },
  { label: 'Ocean', from: '#06b6d4', to: '#3b82f6' },
  { label: 'Forest', from: '#22c55e', to: '#166534' },
  { label: 'Rose', from: '#ec4899', to: '#be123c' },
]

export default function ImageReveal() {
  const scope = useRef(null)

  useEffect(() => {
    const el = scope.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.ir-img'), {
        scale: 1.18,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div className="pv-container" ref={scope}>
      <div className="ir-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="ir-img"
            style={{ background: `linear-gradient(135deg, ${img.from}, ${img.to})` }}
          >
            <span className="ir-label">{img.label}</span>
            <span className="ir-num">{String(i + 1).padStart(2, '0')}</span>
          </div>
        ))}
      </div>
      <p className="pv-hint">Scroll into view</p>
    </div>
  )
}
