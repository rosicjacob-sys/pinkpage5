import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function ElasticHover() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const enter = () => gsap.to(el, { scale: 1.12, duration: 0.3, ease: 'power3.out', overwrite: 'auto' })
    const leave = () => gsap.to(el, { scale: 1, duration: 0.7, ease: 'elastic.out(1, 0.4)', overwrite: 'auto' })
    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mouseenter', enter)
      el.removeEventListener('mouseleave', leave)
      gsap.killTweensOf(el)
    }
  }, [])

  return (
    <div className="pv-container pv-center">
      <div ref={ref} className="elastic-demo">
        Hover me
      </div>
    </div>
  )
}
