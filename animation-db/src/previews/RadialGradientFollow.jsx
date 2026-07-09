import { useRef } from 'react'

export default function RadialGradientFollow() {
  const ref = useRef(null)

  const onMove = (e) => {
    const card = ref.current
    if (!card) return
    const r = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - r.left}px`)
    card.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <div className="pv-container pv-center">
      <div ref={ref} className="radial-card" onMouseMove={onMove}>
        <span className="radial-card-icon">◎</span>
        <span>Hover to move the glow</span>
      </div>
    </div>
  )
}
