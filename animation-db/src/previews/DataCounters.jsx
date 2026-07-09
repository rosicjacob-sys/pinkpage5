import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DataCounters() {
  const scope = useRef(null)

  useEffect(() => {
    const el = scope.current
    if (!el) return
    const counters = el.querySelectorAll('.dc-num')

    const sts = []
    counters.forEach((c) => {
      const target = parseInt(c.dataset.value, 10)
      const suffix = c.dataset.suffix || ''
      const final = `${target.toLocaleString()}${suffix}`
      let landed = false

      const land = () => {
        if (landed) return
        landed = true
        c.textContent = final
        c.classList.add('tick-flash')
        setTimeout(() => c.classList.remove('tick-flash'), 160)
      }

      const obj = { v: 0 }
      let tween = null

      const st = ScrollTrigger.create({
        trigger: c,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          tween = gsap.to(obj, {
            v: target,
            duration: 1.3,
            ease: 'power2.out',
            onUpdate: () => { if (!landed) c.textContent = `${Math.round(obj.v).toLocaleString()}${suffix}` },
            onComplete: land,
          })
          setTimeout(land, 1700)
        },
      })
      sts.push({ st, tween: () => tween })
    })

    return () => {
      sts.forEach(({ st, tween }) => {
        st.kill()
        const t = tween()
        if (t) t.kill()
      })
    }
  }, [])

  return (
    <div className="pv-container pv-dark" ref={scope}>
      <div className="dc-row">
        {[
          { v: 200, s: 'mg', l: 'L-Theanine' },
          { v: 250, s: 'mg', l: 'Citicoline' },
          { v: 500, s: 'mcg', l: 'B12' },
        ].map((d) => (
          <div key={d.l} className="dc-item">
            <span className="dc-num" data-value={d.v} data-suffix={d.s}>
              {d.v.toLocaleString()}{d.s}
            </span>
            <span className="dc-label">{d.l}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
