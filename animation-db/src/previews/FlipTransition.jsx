import { useState, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

const PLANS = ['Starter', 'Pro', 'Enterprise']

export default function FlipTransition() {
  const [selected, setSelected] = useState(1)
  const containerRef = useRef(null)
  const flipState = useRef(null)

  const select = (idx) => {
    if (idx === selected) return
    if (containerRef.current) {
      flipState.current = Flip.getState(containerRef.current.querySelectorAll('.flip-ring'))
    }
    setSelected(idx)
  }

  useLayoutEffect(() => {
    if (!flipState.current) return
    Flip.from(flipState.current, { duration: 0.5, ease: 'power3.inOut' })
    flipState.current = null
  }, [selected])

  return (
    <div className="pv-container">
      <div className="flip-cards" ref={containerRef}>
        {PLANS.map((p, i) => (
          <button
            key={p}
            className={`flip-card ${i === selected ? 'flip-selected' : ''}`}
            onClick={() => select(i)}
          >
            <span className="flip-name">{p}</span>
            <span className="flip-price">${(i + 1) * 29}</span>
            {i === selected && <span className="flip-ring" />}
          </button>
        ))}
      </div>
    </div>
  )
}
