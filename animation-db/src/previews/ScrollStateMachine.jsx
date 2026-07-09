import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function ScrollStateMachine() {
  const [stage, setStage] = useState(0)
  const half1Ref = useRef(null)
  const half2Ref = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const p = el.scrollTop / (el.scrollHeight - el.clientHeight) || 0
      const newStage = p < 0.2 ? 0 : p < 0.5 ? 1 : p < 0.8 ? 2 : 3
      if (newStage !== stage) setStage(newStage)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [stage])

  useEffect(() => {
    const h1 = half1Ref.current
    const h2 = half2Ref.current
    if (!h1 || !h2) return
    const gap = stage === 0 ? 0 : stage === 3 ? 0 : 14
    const rot = stage === 2 ? 22 : 0
    gsap.to(h1, { x: -gap / 2, rotate: -rot, duration: 0.5, ease: 'power3.out' })
    gsap.to(h2, { x: gap / 2, rotate: rot, duration: 0.5, ease: 'power3.out' })
  }, [stage])

  const labels = ['Closed', 'Opening', 'Split Open', 'Closing']
  const colors = ['#64748b', '#5b5fef', '#22c55e', '#5b5fef']

  return (
    <div className="pv-container pv-dark pv-center pv-progress-wrap" ref={containerRef}>
      <div className="ssm-indicator" style={{ color: colors[stage] }}>
        <div className="ssm-dot" style={{ background: colors[stage] }} />
        <span>{labels[stage]}</span>
      </div>
      <div className="ssm-capsule-wrap">
        <div ref={half1Ref} className="ssm-half ssm-top" />
        <div className="ssm-sphere" />
        <div ref={half2Ref} className="ssm-half ssm-bottom" />
      </div>
      <div className="pv-progress-content" style={{ marginTop: 8 }}>
        {['Introduction', 'The capsule warms up', 'Contents revealed — four active ingredients', 'Everything seals back together'].map((t, i) => (
          <div key={i} className="ssm-phase" style={{ opacity: stage >= i ? 0.4 + i * 0.3 : 0.1, color: stage === i ? colors[stage] : '#94a3b8' }}>
            {t}
          </div>
        ))}
      </div>
    </div>
  )
}
