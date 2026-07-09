import { useEffect, useRef, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight) || 0
      setProgress(pct)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const pct = Math.round(progress * 100)

  return (
    <div className="pv-container pv-progress-wrap" ref={containerRef}>
      <div className="pv-progress-bar">
        <div className="pv-progress-fill" style={{ transform: `scaleX(${progress})` }} />
        <span className="pv-progress-num">{pct}%</span>
      </div>
      <div className="pv-progress-content">
        <h4 className="sp-title">Scroll Progress</h4>
        <div className="sp-indicator">
          <span className="sp-dot" style={{ opacity: progress < 0.33 ? 1 : 0.3 }} />
          <span className="sp-line" style={{ opacity: progress < 0.33 ? 0.2 : progress < 0.66 ? 1 : 0.3 }} />
          <span className="sp-dot" style={{ opacity: progress < 0.33 ? 0.3 : progress < 0.66 ? 1 : 0.3 }} />
          <span className="sp-line" style={{ opacity: progress < 0.66 ? 0.2 : progress < 0.95 ? 1 : 0.3 }} />
          <span className="sp-dot" style={{ opacity: progress < 0.66 ? 0.3 : 1 }} />
        </div>
        <p className="sp-step" style={{ opacity: progress < 0.33 ? 1 : 0.3 }}>
          01. Discover — Understand the user, map the journey.
        </p>
        <p className="sp-step" style={{ opacity: progress < 0.33 ? 0.3 : progress < 0.66 ? 1 : 0.3 }}>
          02. Design — Wireframe, prototype, test with real users.
        </p>
        <p className="sp-step" style={{ opacity: progress < 0.66 ? 0.3 : 1 }}>
          03. Ship — Build, QA, deploy to production.
        </p>
      </div>
    </div>
  )
}
