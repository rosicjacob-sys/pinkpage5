import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { pillStore } from '../three/pillStore'
import { INGREDIENTS } from '../lib/data'
import { MQ_DESKTOP } from '../lib/env'
import { useReveal } from '../lib/reveal'
import SplitHeading from './SplitHeading'
import Counter from './Counter'

gsap.registerPlugin(ScrollTrigger)

/**
 * The screenshot moment. Desktop: the section pins for ~180vh while the
 * capsule (on the persistent canvas) splits into orbital ingredient rings;
 * each rail row highlights as its ring pulses. Mobile/reduced: no pin — a
 * plain ledger (the pill does a two-pose scrub via the choreography instead).
 */
export default function Ingredients() {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add(MQ_DESKTOP, () => {
      const rows = gsap.utils.toArray('.ing-row', sectionRef.current)
      const reset = () => {
        pillStore.split = 0
        pillStore.activeCluster = -1
        rows.forEach((r) => r.classList.remove('is-active'))
      }
      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=180%',
        pin: pinRef.current,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress
          let split
          let active = -1
          if (p < 0.2) {
            split = p / 0.2
          } else if (p < 0.88) {
            split = 1
            active = Math.min(3, Math.floor((p - 0.2) / (0.68 / 4)))
          } else {
            split = 1 - (p - 0.88) / 0.12
          }
          pillStore.split = split
          pillStore.activeCluster = active
          rows.forEach((r, i) => r.classList.toggle('is-active', i === active))
        },
        onLeave: reset,
        onLeaveBack: reset,
      })
      return () => {
        st.kill()
        reset()
      }
    })
    return () => mm.revert()
  }, [])

  const scope = useReveal((el) =>
    gsap.from(el.querySelectorAll('.ing-row'), {
      y: 30,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: { trigger: el, start: 'top 70%', once: true },
    })
  )

  return (
    <section id="ingredients" className="ingredients" ref={sectionRef}>
      <div className="ing-pin" ref={pinRef}>
        <div className="container ing-grid" ref={scope}>
          <div className="ing-rail">
            <p className="eyebrow">INSIDE EVERY CAPSULE</p>
            <SplitHeading as="h2" className="section-title">
              Four actives. <em>Zero</em> filler.
            </SplitHeading>
            <ol className="ing-list">
              {INGREDIENTS.map((ing) => (
                <li className="ing-row" key={ing.name}>
                  <div className="ing-dose">
                    <Counter value={ing.dose} className="ing-num" />
                    <span className="ing-unit mono-label">{ing.unit}</span>
                  </div>
                  <div className="ing-info">
                    <h3>{ing.name}</h3>
                    <p>{ing.note}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="ing-hint mono-label" aria-hidden="true">
              KEEP SCROLLING — THE CAPSULE OPENS
            </p>
          </div>
          <div className="ing-space" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
