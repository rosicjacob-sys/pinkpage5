import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function PulseBreathe() {
  const r1Ref = useRef(null)
  const r2Ref = useRef(null)
  const r3Ref = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: 'sine.inOut' })
    tl.to(r1Ref.current, { scale: 2.2, opacity: 0, duration: 2, ease: 'sine.out' }, 0)
      .to(r2Ref.current, { scale: 1.6, opacity: 0.15, duration: 2, ease: 'sine.out' }, 0.2)
      .to(r3Ref.current, { scale: 1.3, opacity: 0.3, duration: 2, ease: 'sine.out' }, 0.4)
    return () => tl.kill()
  }, [])

  return (
    <div className="pv-container pv-dark pv-center">
      <div className="pb-wrap">
        <div ref={r1Ref} className="pb-ring" />
        <div ref={r2Ref} className="pb-ring" />
        <div ref={r3Ref} className="pb-ring" />
        <div className="pb-core" />
        <span className="pb-label">Breathe</span>
      </div>
    </div>
  )
}
