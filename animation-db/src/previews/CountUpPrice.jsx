import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CountUpPrice() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const target = 39
    const final = `$${target}`
    let landed = false

    const land = () => {
      if (landed) return
      landed = true
      el.textContent = final
      el.classList.add('tick-flash')
      setTimeout(() => el.classList.remove('tick-flash'), 160)
    }

    const obj = { v: 0 }
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: target,
          duration: 1.2,
          ease: 'power2.out',
          onUpdate: () => { if (!landed) el.textContent = `$${Math.round(obj.v)}` },
          onComplete: land,
        })
        setTimeout(land, 1600)
      },
    })

    return () => {
      st.kill()
    }
  }, [])

  return (
    <div className="pv-container pv-dark pv-center">
      <div className="price-demo">
        <span className="price-label">Starting at</span>
        <span ref={ref} className="price-value">$39</span>
      </div>
      <p className="pv-hint">Scroll into view</p>
    </div>
  )
}
