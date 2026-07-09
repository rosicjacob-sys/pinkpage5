import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const DATA = [
  { label: 'Mon', value: 65 },
  { label: 'Tue', value: 80 },
  { label: 'Wed', value: 45 },
  { label: 'Thu', value: 90 },
  { label: 'Fri', value: 72 },
]

export default function ChartBars() {
  const scope = useRef(null)

  useEffect(() => {
    const el = scope.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.bar-fill'), {
        height: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'back.out(1.2)',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div className="pv-container" ref={scope}>
      <div className="chart-bars">
        {DATA.map((d) => (
          <div key={d.label} className="bar-col">
            <div className="bar-track">
              <div className="bar-fill" style={{ height: `${d.value}%` }} />
            </div>
            <span className="bar-label">{d.label}</span>
          </div>
        ))}
      </div>
      <p className="pv-hint">Scroll into view</p>
    </div>
  )
}
