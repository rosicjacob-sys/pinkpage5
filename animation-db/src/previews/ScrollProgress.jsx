import { useEffect, useRef, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el
      const pct = scrollTop / (scrollHeight - clientHeight) || 0
      setProgress(pct)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pv-container pv-progress-wrap" ref={containerRef}>
      <div className="pv-progress-bar">
        <div className="pv-progress-fill" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <div className="pv-progress-content">
        <h4>Scroll Progress</h4>
        {Array.from({ length: 4 }).map((_, i) => (
          <p key={i} className="pv-progress-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        ))}
      </div>
    </div>
  )
}
