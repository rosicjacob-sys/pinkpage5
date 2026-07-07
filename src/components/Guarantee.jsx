import gsap from 'gsap'
import { useReveal } from '../lib/reveal'

export default function Guarantee() {
  const scope = useReveal((el) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: 'top 80%', once: true },
    })
    tl.from(el.querySelector('.guarantee-text'), {
      y: 22,
      autoAlpha: 0,
      duration: 0.9,
      ease: 'power3.out',
    }).fromTo(
      el.querySelectorAll('.seal [pathLength]'),
      { strokeDasharray: 1, strokeDashoffset: 1 },
      { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut', stagger: 0.25 },
      '<'
    )
    return tl
  })
  return (
    <section className="guarantee" ref={scope}>
      <div className="container guarantee-inner">
        <svg
          className="seal"
          viewBox="0 0 64 64"
          width="72"
          height="72"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          aria-hidden="true"
        >
          <circle cx="32" cy="32" r="26" pathLength="1" />
          <path d="m21 33 7.5 7.5L43 24.5" pathLength="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="guarantee-text">
          If 60 days from now you don’t notice the difference, we refund every cent.{' '}
          <em>Keep the bottle.</em>
        </p>
      </div>
    </section>
  )
}
