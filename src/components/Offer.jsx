import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { useCart } from '../lib/cart'
import { BUNDLES } from '../lib/data'
import { reducedMotion } from '../lib/env'
import { useReveal } from '../lib/reveal'
import SplitHeading from './SplitHeading'
import Counter from './Counter'

gsap.registerPlugin(Flip)

function Bottle() {
  return (
    <svg className="bottle" viewBox="0 0 200 320" aria-hidden="true">
      <rect x="57" y="8" width="86" height="46" rx="10" fill="#F0148C" />
      <rect x="57" y="40" width="86" height="8" fill="#C4126E" />
      <rect x="72" y="54" width="56" height="16" fill="#FFE9F3" />
      <rect x="40" y="68" width="120" height="240" rx="26" fill="#FFFFFF" stroke="rgba(28,10,20,0.14)" />
      <rect x="53" y="112" width="94" height="128" rx="8" fill="#FFF3F8" stroke="rgba(28,10,20,0.1)" />
      <g transform="rotate(36 100 138)">
        <rect x="93" y="124" width="14" height="28" rx="7" fill="#FFD3E7" />
        <path d="M93 138h14v7a7 7 0 0 1-14 0z" fill="#F0148C" />
      </g>
      <text x="100" y="176" textAnchor="middle" fontFamily="'Space Mono', monospace" fontSize="13" fontWeight="700" fill="#1C0A14">
        PINK PILL
      </text>
      <text x="100" y="193" textAnchor="middle" fontFamily="'Space Mono', monospace" fontSize="8.5" fill="#6E5260">
        DAILY NOOTROPIC · PP-01
      </text>
      <text x="100" y="215" textAnchor="middle" fontFamily="'Space Mono', monospace" fontSize="8.5" fill="#6E5260">
        30 CAPSULES · 750 MG
      </text>
      <text x="100" y="230" textAnchor="middle" fontFamily="'Space Mono', monospace" fontSize="8.5" fill="#F0148C">
        ZERO CAFFEINE
      </text>
    </svg>
  )
}

export default function Offer() {
  const { bundleId, setBundleId, bundle, add } = useCart()
  const cardsRef = useRef(null)
  const buyRef = useRef(null)
  const flipState = useRef(null)

  const scope = useReveal((el) =>
    gsap.from(el.querySelectorAll('.bundle-card, .offer-left'), {
      y: 40,
      autoAlpha: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.09,
      scrollTrigger: { trigger: el, start: 'top 75%', once: true },
    })
  )

  const select = (id) => {
    if (id === bundleId) return
    if (!reducedMotion() && cardsRef.current) {
      flipState.current = Flip.getState(cardsRef.current.querySelectorAll('.select-ring'))
    }
    setBundleId(id)
  }

  // Real radio-group keyboard semantics: arrows move selection, one tab stop.
  const onGroupKeyDown = (e) => {
    const idx = BUNDLES.findIndex((b) => b.id === bundleId)
    let next = -1
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (idx + 1) % BUNDLES.length
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (idx + BUNDLES.length - 1) % BUNDLES.length
    if (next < 0) return
    e.preventDefault()
    select(BUNDLES[next].id)
    const btns = cardsRef.current?.querySelectorAll('.bundle-card')
    if (btns && btns[next]) btns[next].focus()
  }

  useLayoutEffect(() => {
    if (!flipState.current) return
    Flip.from(flipState.current, { duration: 0.5, ease: 'power3.inOut' })
    flipState.current = null
  }, [bundleId])

  // The pill lands beside the buy box -> the button flashes its shine sweep.
  useEffect(() => {
    const onLand = () => {
      const btn = buyRef.current
      if (!btn) return
      btn.classList.add('shine-run')
      setTimeout(() => btn.classList.remove('shine-run'), 950)
    }
    window.addEventListener('pill-landed', onLand)
    return () => window.removeEventListener('pill-landed', onLand)
  }, [])

  return (
    <section id="offer" className="offer" ref={scope}>
      <div className="container">
        <p className="eyebrow">CHOOSE YOUR CADENCE</p>
        <SplitHeading as="h2" className="section-title">
          One pill a day. <em>Three</em> ways to start.
        </SplitHeading>
        <div className="offer-grid">
          <div className="offer-left" aria-hidden="true">
            <Bottle />
            <p className="mono-label offer-left-note">SHIPS IN 24H · FREE OVER $50</p>
          </div>
          <div className="offer-right">
            <div
              className="bundle-cards"
              ref={cardsRef}
              role="radiogroup"
              aria-label="Choose a bundle"
              onKeyDown={onGroupKeyDown}
            >
              {BUNDLES.map((b) => {
                const selected = b.id === bundleId
                return (
                  <button
                    key={b.id}
                    className={`bundle-card ${selected ? 'is-selected' : ''}`}
                    role="radio"
                    aria-checked={selected}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => select(b.id)}
                  >
                    {b.popular && <span className="bundle-sash mono-label">MOST POPULAR</span>}
                    <span className="bundle-tag mono-label">{b.tag}</span>
                    <span className="bundle-name">{b.name}</span>
                    <span className="bundle-price">
                      <Counter value={b.price} prefix="$" />
                      {b.id === 'sub' && <span className="bundle-mo">/mo</span>}
                    </span>
                    <span className="bundle-per mono-label">{b.per.toUpperCase()}</span>
                    <span className="bundle-note">
                      {b.note}
                      {b.note2 ? <>. {b.note2}</> : null}
                    </span>
                    {selected && <span className="select-ring" data-flip-id="ring" aria-hidden="true" />}
                  </button>
                )
              })}
            </div>
            <button
              className="btn btn-lg btn-buy"
              ref={buyRef}
              onClick={() => add(bundle.id === 'triple' ? 3 : 1)}
            >
              Add to cart — ${bundle.price}
              {bundle.id === 'sub' ? '/mo' : ''}
            </button>
            <p className="mono-label offer-trust">
              60-DAY GUARANTEE · SECURE CHECKOUT · VISA / MC / AMEX / APPLE PAY
            </p>
            <p className="offer-sub-note">
              Subscription renews monthly. Skip, pause, or cancel anytime — one click, no phone
              calls.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
