import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function KineticMarquee() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let x = 0
    let half = 0

    const measure = () => { half = track.scrollWidth / 2 }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track)

    const tick = () => {
      if (!half || document.hidden) return
      const dt = gsap.ticker.deltaRatio(60) / 60
      x += 60 * dt
      const y = ((x % half) + half) % half
      track.style.transform = `translate3d(${-y}px,0,0)`
    }
    gsap.ticker.add(tick)

    return () => {
      gsap.ticker.remove(tick)
      ro.disconnect()
      track.style.transform = ''
    }
  }, [])

  const words = ['CALM FOCUS', 'ZERO CAFFEINE', 'NO JITTERS', 'THIRD-PARTY TESTED', 'ONE PINK PILL']

  return (
    <div className="pv-container pv-marquee-wrap">
      <div className="pv-marquee" ref={trackRef}>
        {[...words, ...words].map((w, i) => (
          <span key={i} className="marquee-word">{w}</span>
        ))}
      </div>
    </div>
  )
}
