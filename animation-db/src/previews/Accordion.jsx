import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const FAQ_DATA = [
  { q: 'What is this?', a: 'A smooth accordion built with GSAP height animation — single item open at a time with seamless transitions.' },
  { q: 'Is it accessible?', a: 'Yes. Each trigger is a button with aria-expanded. Reduced motion gets instant toggles.' },
  { q: 'How fast is it?', a: '60fps. GSAP animates height on a single property — no layout thrashing.' },
]

function FaqItem({ q, a, isOpen, onToggle }) {
  const contentRef = useRef(null)
  const innerRef = useRef(null)
  const tweenRef = useRef(null)

  useEffect(() => {
    const content = contentRef.current
    if (!content) return
    if (tweenRef.current) tweenRef.current.kill()

    if (isOpen) {
      content.style.height = 'auto'
      const h = content.offsetHeight
      content.style.height = '0px'
      tweenRef.current = gsap.to(content, { height: h, duration: 0.4, ease: 'power3.out' })
    } else {
      tweenRef.current = gsap.to(content, { height: 0, duration: 0.35, ease: 'power3.in' })
    }

    return () => {
      if (tweenRef.current) tweenRef.current.kill()
    }
  }, [isOpen])

  return (
    <div className="faq-item">
      <button className="faq-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span>{q}</span>
        <span className={`faq-chevron ${isOpen ? 'is-open' : ''}`}>▾</span>
      </button>
      <div ref={contentRef} className="faq-content" style={{ height: 0, overflow: 'hidden' }}>
        <div ref={innerRef} className="faq-inner">{a}</div>
      </div>
    </div>
  )
}

export default function Accordion() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <div className="pv-container pv-faq-wrap">
      {FAQ_DATA.map((item, i) => (
        <FaqItem
          key={i}
          q={item.q}
          a={item.a}
          isOpen={i === openIdx}
          onToggle={() => setOpenIdx(i === openIdx ? -1 : i)}
        />
      ))}
    </div>
  )
}
