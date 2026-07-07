import { useRef } from 'react'
import { useMarquee } from '../lib/useMarquee'
import { reducedMotion } from '../lib/env'

const PROMISE = 'FREE US SHIPPING OVER $50 · 60-DAY GUARANTEE · THIRD-PARTY TESTED, EVERY BATCH · '

export default function AnnouncementBar() {
  const track = useRef(null)
  useMarquee(track, { speed: 42, dir: -1 })
  const reduced = reducedMotion()
  return (
    <div className="announce" role="note" aria-label="Free US shipping over $50. 60-day guarantee. Third-party tested.">
      {reduced ? (
        <p className="announce-static mono-label">FREE US SHIPPING OVER $50 · 60-DAY GUARANTEE · THIRD-PARTY TESTED</p>
      ) : (
        <div className="announce-track mono-label" ref={track} aria-hidden="true">
          <span>{PROMISE.repeat(3)}</span>
          <span>{PROMISE.repeat(3)}</span>
        </div>
      )}
    </div>
  )
}
