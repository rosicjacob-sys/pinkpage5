import gsap from 'gsap'
import { useReveal } from '../lib/reveal'
import SplitHeading from './SplitHeading'
import Counter from './Counter'

const STATS = [
  { value: 200, suffix: ' MG', label: 'L-THEANINE PER CAPSULE' },
  { value: 30, prefix: '~', suffix: ' MIN', label: 'TYPICAL ONSET' },
  { value: 27, suffix: '', label: 'HUMAN TRIALS ACROSS OUR ACTIVES†' },
]

export default function Science() {
  const scope = useReveal((el) =>
    gsap.from(el.querySelectorAll('[data-reveal]'), {
      y: 24,
      autoAlpha: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: { trigger: el, start: 'top 70%', once: true },
    })
  )
  return (
    <section id="science" className="science" ref={scope}>
      <div className="container">
        <p className="eyebrow eyebrow-onink" data-reveal>
          THE SCIENCE — WHY IT WORKS
        </p>
        <SplitHeading as="h2" className="science-quote" types="lines">
          Calm isn’t the <em>absence</em> of energy. It’s energy with somewhere to go.
        </SplitHeading>
        <p className="science-body" data-reveal>
          Each capsule pairs L-theanine’s wakeful calm with citicoline’s attention support — a
          pairing studied in randomized, placebo-controlled trials.† No caffeine means there’s no
          crash to schedule around.
        </p>
        <div className="science-stats">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <Counter value={s.value} prefix={s.prefix || ''} suffix={s.suffix} className="stat-num" />
              <span className="stat-label mono-label">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="science-foot mono-label" data-reveal>
          † INCL. HIDESE 2019 (L-THEANINE), MCGLADE 2012 (CITICOLINE), OLSSON 2009 (RHODIOLA).
          STUDIED FOR STRUCTURE/FUNCTION SUPPORT — NOT DISEASE CLAIMS.
        </p>
      </div>
    </section>
  )
}
