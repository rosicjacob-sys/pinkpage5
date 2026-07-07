import { useRef } from 'react'
import { useMarquee } from '../lib/useMarquee'
import { REVIEWS } from '../lib/data'
import { reducedMotion } from '../lib/env'
import SplitHeading from './SplitHeading'

function Card({ r }) {
  return (
    <figure className="review-card">
      <div className="review-stars" aria-hidden="true">
        ★★★★★
      </div>
      <blockquote>“{r.quote}”</blockquote>
      <figcaption>
        <span className="review-avatar" aria-hidden="true">
          {r.initials}
        </span>
        <span>{r.name}</span>
        <span className="mono-label review-verified">VERIFIED BUYER</span>
      </figcaption>
    </figure>
  )
}

function Row({ items, dir, speed }) {
  const track = useRef(null)
  useMarquee(track, { speed, dir, pauseOnHover: true })
  return (
    <div className="review-row">
      <div className="review-track" ref={track}>
        {items.map((r, i) => (
          <Card r={r} key={`a-${i}`} />
        ))}
        {items.map((r, i) => (
          <Card r={r} key={`b-${i}`} />
        ))}
      </div>
    </div>
  )
}

export default function Reviews() {
  const reduced = reducedMotion()
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <p className="eyebrow">4.8 / 5 ACROSS 2,140 ORDERS</p>
        <SplitHeading as="h2" className="section-title">
          People keep <em>reordering</em>.
        </SplitHeading>
      </div>
      {reduced ? (
        <div className="container review-grid-static">
          {REVIEWS.slice(0, 6).map((r) => (
            <Card r={r} key={r.name} />
          ))}
        </div>
      ) : (
        <>
          <Row items={REVIEWS.slice(0, 4)} dir={-1} speed={38} />
          <Row items={REVIEWS.slice(4)} dir={1} speed={26} />
        </>
      )}
    </section>
  )
}
