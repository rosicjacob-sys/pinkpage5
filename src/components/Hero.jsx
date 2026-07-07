import gsap from 'gsap'
import SplitHeading from './SplitHeading'
import Magnetic from './Magnetic'
import { useReveal } from '../lib/reveal'
import { useCart } from '../lib/cart'
import { scrollToEl } from '../lib/scroll'

export default function Hero() {
  const { add } = useCart()
  const scope = useReveal((el) =>
    gsap.from(el.querySelectorAll('[data-reveal]'), {
      y: 26,
      autoAlpha: 0,
      duration: 0.95,
      ease: 'power3.out',
      stagger: 0.09,
      delay: 0.45,
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    })
  )

  return (
    <section id="hero" className="hero" ref={scope}>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow" data-reveal>
            DAILY NOOTROPIC — PP-01 — 750 MG
          </p>
          <SplitHeading as="h1" className="hero-title">
            Take the <em>pink</em> pill.
          </SplitHeading>
          <p className="hero-sub" data-reveal>
            200&nbsp;mg L-theanine + 250&nbsp;mg citicoline, zero caffeine. Calm, locked-in focus
            about 30 minutes after you take it.
          </p>
          <div className="hero-ctas" data-reveal>
            <Magnetic>
              <button className="btn" onClick={() => add(1)}>
                Add to cart — $39
              </button>
            </Magnetic>
            <Magnetic strength={0.22}>
              <a
                className="btn-ghost"
                href="#science"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToEl('#science')
                }}
              >
                See the science
              </a>
            </Magnetic>
          </div>
          <ul className="trust-row mono-label" data-reveal>
            <li>60-DAY GUARANTEE</li>
            <li>THIRD-PARTY TESTED</li>
            <li>VEGAN, NON-GMO</li>
          </ul>
        </div>
        <div className="hero-stage" aria-hidden="true" />
      </div>
    </section>
  )
}
