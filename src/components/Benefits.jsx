import gsap from 'gsap'
import { useReveal } from '../lib/reveal'
import { BENEFITS } from '../lib/data'
import SplitHeading from './SplitHeading'

const ICONS = {
  target: (
    <>
      <circle cx="24" cy="24" r="15" pathLength="1" />
      <circle cx="24" cy="24" r="7.5" pathLength="1" />
      <circle cx="24" cy="24" r="1.4" pathLength="1" />
    </>
  ),
  bolt: <path d="M27 5 15 27h8l-2 16 12-22h-8l2-16Z" pathLength="1" strokeLinejoin="round" />,
  wave: (
    <path
      d="M5 24c5-11 11-11 16 0s11 11 16 0"
      pathLength="1"
      strokeLinecap="round"
    />
  ),
  shield: (
    <>
      <path d="M24 5.5 38 11.5v12c0 9-6 15.5-14 19-8-3.5-14-10-14-19v-12Z" pathLength="1" strokeLinejoin="round" />
      <path d="m17.5 24 5 5 8.5-10.5" pathLength="1" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
}

export default function Benefits() {
  const scope = useReveal((el) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: 'top 78%', once: true },
    })
    tl.from(el.querySelectorAll('.benefit-card'), {
      y: 46,
      autoAlpha: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.1,
    }).fromTo(
      el.querySelectorAll('.benefit-icon [pathLength]'),
      { strokeDasharray: 1, strokeDashoffset: 1 },
      { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut', stagger: 0.08 },
      '<0.25'
    )
    return tl
  })

  const onMove = (e) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - r.left}px`)
    card.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section id="benefits" className="benefits" ref={scope}>
      <div className="container">
        <p className="eyebrow">WHAT IT DOES — IN PLAIN VERBS</p>
        <SplitHeading as="h2" className="section-title">
          Small pill. <em>Specific</em> promises.
        </SplitHeading>
        <div className="benefit-grid">
          {BENEFITS.map((b) => (
            <article className="benefit-card" key={b.title} onMouseMove={onMove}>
              <svg
                className="benefit-icon"
                viewBox="0 0 48 48"
                width="44"
                height="44"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                {ICONS[b.icon]}
              </svg>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
