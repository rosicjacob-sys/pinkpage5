import { useRef } from 'react'

export default function ParallaxTilt() {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(600px) rotateX(${-y * 20}deg) rotateY(${x * 20}deg)`
  }

  const onLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(600px) rotateX(0) rotateY(0)'
    }
  }

  return (
    <div className="pv-container pv-center">
      <div
        ref={ref}
        className="tilt-card"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div className="tilt-inner">
          <span className="tilt-icon">◈</span>
          <span>3D Tilt Product</span>
        </div>
      </div>
    </div>
  )
}
