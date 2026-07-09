import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StaggeredList() {
  const ref = useRef(null)

  const items = [
    { num: '01', title: 'Discovery', desc: 'Deep-dive into user research' },
    { num: '02', title: 'Prototype', desc: 'Low-fidelity wireframes & testing' },
    { num: '03', title: 'Design', desc: 'High-fidelity UI & design system' },
    { num: '04', title: 'Launch', desc: 'Build, QA, deploy to production' },
  ]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.sl-item'), {
        x: -20,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div className="pv-container pv-dark" ref={ref}>
      <div className="sl-list">
        {items.map((item) => (
          <div key={item.num} className="sl-item">
            <span className="sl-num">{item.num}</span>
            <div className="sl-body">
              <span className="sl-title">{item.title}</span>
              <span className="sl-desc">{item.desc}</span>
            </div>
            <span className="sl-arrow">→</span>
          </div>
        ))}
      </div>
      <p className="pv-hint">Scroll into view</p>
    </div>
  )
}
