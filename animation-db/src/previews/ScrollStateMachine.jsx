import { useEffect, useRef, useState } from 'react'

export default function ScrollStateMachine() {
  const [stage, setStage] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el
      const p = scrollTop / (scrollHeight - clientHeight) || 0
      if (p < 0.25) setStage(0)
      else if (p < 0.5) setStage(1)
      else if (p < 0.75) setStage(2)
      else setStage(3)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const stages = ['Closed', 'Opening', 'Open', 'Closing']
  const colors = ['var(--ink-soft)', 'var(--accent)', '#22c55e', 'var(--accent)']

  return (
    <div className="pv-container pv-progress-wrap" ref={containerRef}>
      <div className="ssm-indicator" style={{ color: colors[stage] }}>
        <span className="ssm-dot" style={{ background: colors[stage] }} />
        <span>{stages[stage]}</span>
      </div>
      <div className="pv-progress-content">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="ssm-phase" style={{ opacity: stage >= i ? 0.3 + i * 0.23 : 0.15 }}>
            Stage {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
