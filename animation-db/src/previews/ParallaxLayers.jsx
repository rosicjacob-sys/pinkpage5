import { useEffect, useRef, useState } from 'react'

export default function ParallaxLayers() {
  const [scroll, setScroll] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight) || 0
      setScroll(pct)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pv-container pv-parallax-wrap" ref={containerRef}>
      <div className="pl-scene">
        <div className="pl-layer-back" style={{ transform: `translateY(${scroll * -12}px)` }}>
          <div className="pl-circle pl-c1" />
          <div className="pl-circle pl-c2" />
        </div>
        <div className="pl-layer-mid" style={{ transform: `translateY(${scroll * -22}px)` }}>
          <div className="pl-rect pl-r1" />
          <div className="pl-rect pl-r2" />
        </div>
        <div className="pl-layer-front" style={{ transform: `translateY(${scroll * -34}px)` }}>
          <div className="pl-card">
            <span className="pl-card-title">Depth</span>
            <span className="pl-card-sub">3 layers</span>
          </div>
        </div>
      </div>
      <p className="pv-hint">Scroll this card ↓</p>
    </div>
  )
}
