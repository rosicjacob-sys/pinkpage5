import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SvgStrokeReveal() {
  const scope = useRef(null)

  useEffect(() => {
    const el = scope.current
    if (!el) return
    const ctx = gsap.context(() => {
      const paths = el.querySelectorAll('[pathLength]')
      gsap.fromTo(
        paths,
        { strokeDasharray: 1, strokeDashoffset: 1 },
        {
          strokeDashoffset: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: el, start: 'top 80%', once: true },
        }
      )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div className="pv-container pv-dark pv-center" ref={scope}>
      <div className="svg-icons-grid">
        <div className="svg-icon-card">
          <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="var(--accent)" strokeWidth="1.8">
            <circle cx="24" cy="24" r="15" pathLength="1" />
            <circle cx="24" cy="24" r="7.5" pathLength="1" />
            <circle cx="24" cy="24" r="1.4" pathLength="1" />
          </svg>
          <span className="svg-icon-label">Target</span>
        </div>
        <div className="svg-icon-card">
          <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="var(--accent)" strokeWidth="1.8">
            <path d="M27 5 15 27h8l-2 16 12-22h-8l2-16Z" pathLength="1" strokeLinejoin="round" />
          </svg>
          <span className="svg-icon-label">Bolt</span>
        </div>
        <div className="svg-icon-card">
          <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="var(--accent)" strokeWidth="1.8">
            <path d="M5 24c5-11 11-11 16 0s11 11 16 0" pathLength="1" strokeLinecap="round" />
          </svg>
          <span className="svg-icon-label">Wave</span>
        </div>
        <div className="svg-icon-card">
          <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="var(--accent)" strokeWidth="1.8">
            <path d="M24 5.5 38 11.5v12c0 9-6 15.5-14 19-8-3.5-14-10-14-19v-12Z" pathLength="1" strokeLinejoin="round" />
            <path d="m17.5 24 5 5 8.5-10.5" pathLength="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="svg-icon-label">Shield</span>
        </div>
      </div>
      <p className="pv-hint">Scroll into view</p>
    </div>
  )
}
