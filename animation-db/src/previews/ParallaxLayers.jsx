import { useEffect, useRef, useState } from 'react'

export default function ParallaxLayers() {
  const [scroll, setScroll] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pv-container pv-parallax-wrap" ref={ref}>
      <div className="pl-layer pl-back" style={{ transform: `translateY(${scroll * 0.02}px)` }}>
        <div className="pl-bg-shape" />
      </div>
      <div className="pl-layer pl-mid" style={{ transform: `translateY(${scroll * 0.05}px)` }}>
        <div className="pl-mid-shape" />
      </div>
      <div className="pl-layer pl-front" style={{ transform: `translateY(${scroll * 0.08}px)` }}>
        <span className="pl-text">Depth</span>
      </div>
      <p className="pv-hint">Scroll the page</p>
    </div>
  )
}
