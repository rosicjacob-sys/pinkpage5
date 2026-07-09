import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function StickyNav() {
  const navRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const nav = navRef.current
      if (!nav) return
      if (el.scrollTop > 30) {
        gsap.to(nav, { background: 'rgba(15, 15, 35, 0.92)', borderColor: 'rgba(255,255,255,0.08)', duration: 0.25 })
      } else {
        gsap.to(nav, { background: 'rgba(15, 15, 35, 0.6)', borderColor: 'transparent', duration: 0.25 })
      }
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const sections = [
    { title: 'Studio', desc: 'Brand identity and digital experiences for ambitious startups.' },
    { title: 'Work', desc: 'Selected projects across fintech, wellness, and SaaS.' },
    { title: 'Process', desc: 'Research → Design → Build → Launch. Four weeks to ship.' },
    { title: 'Contact', desc: 'Start with a 15-minute call. No pitch deck required.' },
  ]

  return (
    <div className="pv-container pv-nav-wrap" ref={containerRef}>
      <div className="pv-sticky-nav" ref={navRef}>
        <span className="nav-logo-text">STUDIO</span>
        <span className="nav-links">
          <span className="nav-link is-active">Work</span>
          <span className="nav-link">About</span>
          <span className="nav-link">Contact</span>
        </span>
      </div>
      <div className="pv-nav-content">
        {sections.map((s) => (
          <div key={s.title} className="sn-section">
            <h4 className="sn-title">{s.title}</h4>
            <p className="sn-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
