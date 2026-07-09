import { useEffect, useRef, useState } from 'react'

export default function RotateOnScroll() {
  const [rotation, setRotation] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setRotation(window.scrollY * 0.3)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pv-container pv-center">
      <div
        ref={ref}
        className="rotate-demo"
        style={{ transform: `rotate(${rotation % 360}deg)` }}
      >
        <span className="rotate-icon">✦</span>
      </div>
      <p className="pv-hint">Scroll the page</p>
    </div>
  )
}
