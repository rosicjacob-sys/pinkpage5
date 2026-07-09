import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { v: 98, s: '%', l: 'Uptime' },
  { v: 12000, s: '+', l: 'Users' },
  { v: 45, s: 'ms', l: 'Latency' },
]

export default function DashboardCounters() {
  const scope = useRef(null)

  useEffect(() => {
    const el = scope.current
    if (!el) return
    const nums = el.querySelectorAll('.dash-num')

    const sts = []
    nums.forEach((c, idx) => {
      const target = STATS[idx].v
      const suffix = STATS[idx].s
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
      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            v: target,
            duration: 1.4,
            ease: 'power2.out',
            onUpdate: () => { if (!landed) c.textContent = `${Math.round(obj.v).toLocaleString()}${suffix}` },
            onComplete: land,
          })
          setTimeout(land, 1800)
        },
      })
      sts.push(st)
    })

    return () => sts.forEach((st) => st.kill())
  }, [])

  return (
    <div className="pv-container pv-dark" ref={scope}>
      <div className="dash-row">
        {STATS.map((s, i) => (
          <div key={s.l} className="dash-stat">
            <span className="dash-num">{s.v.toLocaleString()}{s.s}</span>
            <span className="dash-label">{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
