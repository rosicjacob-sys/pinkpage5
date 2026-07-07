import { DISCLAIMER } from '../lib/data'
import { CapsuleGlyph } from './Nav'
import { scrollToEl } from '../lib/scroll'

const PAYMENTS = ['VISA', 'MC', 'AMEX', 'APPLE PAY']

export default function Footer() {
  const go = (e, t) => {
    e.preventDefault()
    scrollToEl(t)
  }
  return (
    <footer id="site-footer" className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-logo">
            <CapsuleGlyph />
            <span>Pink&nbsp;Pill</span>
          </p>
          <p className="mono-label">PP-01 · 750 MG · 30 CAPSULES</p>
          <p className="footer-tag">One pink capsule. Calm, locked-in focus.</p>
        </div>
        <nav className="footer-col" aria-label="Shop">
          <p className="mono-label footer-head">SHOP</p>
          <a href="#offer" onClick={(e) => go(e, '#offer')}>Single bottle — $39</a>
          <a href="#offer" onClick={(e) => go(e, '#offer')}>3-pack — $99</a>
          <a href="#offer" onClick={(e) => go(e, '#offer')}>Subscribe — $29/mo</a>
        </nav>
        <nav className="footer-col" aria-label="Answers">
          <p className="mono-label footer-head">ANSWERS</p>
          <a href="#ingredients" onClick={(e) => go(e, '#ingredients')}>What’s inside</a>
          <a href="#science" onClick={(e) => go(e, '#science')}>The science</a>
          <a href="#faq" onClick={(e) => go(e, '#faq')}>FAQ + shipping</a>
        </nav>
        <div className="footer-col">
          <p className="mono-label footer-head">CONTACT</p>
          <a href="mailto:hello@pinkpill.co">hello@pinkpill.co</a>
          <p className="footer-pay" aria-label="Accepted payments: Visa, Mastercard, American Express, Apple Pay">
            {PAYMENTS.map((p) => (
              <span className="pay-chip mono-label" key={p}>
                {p}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="container footer-legal">
        <p className="footer-disclaimer">{DISCLAIMER}</p>
        <p className="footer-disclaimer">
          For adults 18+. If you are pregnant, nursing, or taking prescription medication, consult
          your physician before use. Keep out of reach of children.
        </p>
        <p className="mono-label footer-copy">© 2026 PINK PILL SUPPLY CO. · ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  )
}
