import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cells = [
  { label: 'UI', color: '#5b5fef' },
  { label: 'UX', color: '#a855f7' },
  { label: 'Code', color: '#06b6d4' },
  { label: 'Brand', color: '#ec4899' },
  { label: '3D', color: '#f97316' },
  { label: 'Motion', color: '#22c55e' },
  { label: 'Sound', color: '#eab308' },
  { label: 'Data', color: '#14b8a6' },
  { label: 'AI', color: '#8b5cf6' },
]

export default function StaggeredGrid() {
  const scope = useRef(null)

  useEffect(() => {
    const el = scope.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.sg-cell'), {
        y: 26,
        scale: 0.92,
        autoAlpha: 0,
        duration: 0.5,
        stagger: { each: 0.04, from: 'start' },
        ease: 'back.out(1.4)',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div className="pv-container" ref={scope}>
      <div className="sg-grid">
        {cells.map((c) => (
          <div key={c.label} className="sg-cell" style={{ background: `${c.color}22`, borderColor: `${c.color}44` }}>
            <span className="sg-dot" style={{ background: c.color }} />
            <span className="sg-label">{c.label}</span>
          </div>
        ))}
      </div>
      <p className="pv-hint">Scroll into view</p>
    </div>
  )
}
