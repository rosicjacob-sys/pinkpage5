import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StaggeredList() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.sl-item'), {
        x: -24,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.09,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  const items = ['Research & Discovery', 'Design & Prototype', 'Build & Launch', 'Measure & Iterate']

  return (
    <div className="pv-container" ref={ref}>
      <ul className="sl-list">
        {items.map((item, i) => (
          <li key={i} className="sl-item">
            <span className="sl-num">{String(i + 1).padStart(2, '0')}</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="pv-hint">Scroll into view</p>
    </div>
  )
}
