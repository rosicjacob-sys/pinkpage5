import { useState, useCallback } from 'react'

export default function RippleButton() {
  const [ripples, setRipples] = useState([])

  const onClick = useCallback((e) => {
    const btn = e.currentTarget
    const r = btn.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    const id = Date.now()
    setRipples((prev) => [...prev, { id, x, y }])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700)
  }, [])

  return (
    <div className="pv-container pv-dark pv-center">
      <button className="rb-main" onClick={onClick}>
        <span className="rb-text">Launch</span>
        <span className="rb-shortcut">⌘ K</span>
        {ripples.map((r) => (
          <span key={r.id} className="rb-ripple" style={{ left: r.x, top: r.y }} />
        ))}
      </button>
      <p className="pv-hint">Click anywhere on the button</p>
    </div>
  )
}
