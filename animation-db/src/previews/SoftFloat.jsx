import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function SoftFloat() {
  const pillRef = useRef(null)
  const shadowRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: 'sine.inOut' })
    tl.to(pillRef.current, { y: -10, duration: 2.8 }, 0)
      .to(shadowRef.current, { scaleX: 0.85, opacity: 0.5, duration: 2.8 }, 0)
    return () => tl.kill()
  }, [])

  return (
    <div className="pv-container pv-dark pv-center" style={{ gap: 0 }}>
      <div ref={pillRef} className="sf-pill">
        <div className="sf-pill-top" />
        <div className="sf-pill-bottom" />
      </div>
      <div ref={shadowRef} className="sf-shadow" />
    </div>
  )
}
