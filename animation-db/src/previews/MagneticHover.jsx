import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MagneticHover() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let inside = false

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const range = Math.max(r.width, r.height) / 2 + 60
      if (Math.hypot(dx, dy) < range) {
        inside = true
        gsap.to(el, { x: dx * 0.35, y: dy * 0.35, duration: 0.35, ease: 'power3.out', overwrite: 'auto' })
      } else if (inside) {
        inside = false
        gsap.to(el, { x: 0, y: 0, duration: 0.85, ease: 'elastic.out(1, 0.4)', overwrite: 'auto' })
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      gsap.killTweensOf(el)
    }
  }, [])

  return (
    <div className="pv-container pv-center">
      <div ref={ref} className="mag-demo">
        Hover near me
      </div>
    </div>
  )
}
