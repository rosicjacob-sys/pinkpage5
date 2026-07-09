import { useEffect, useRef, useState } from 'react'

export default function RotateOnScroll() {
  const [angle, setAngle] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setAngle((window.scrollY * 0.25) % 360)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pv-container pv-dark pv-center">
      <div className="ros-wrap">
        <div className="ros-satellite" style={{ transform: `rotate(${angle}deg)` }}>
          <div className="ros-orbit" />
          <div className="ros-planet" />
          <div className="ros-moon" style={{ transform: `rotate(${-angle * 2}deg) translateX(28px)` }} />
        </div>
      </div>
      <p className="pv-hint">Scroll the page</p>
    </div>
  )
}
