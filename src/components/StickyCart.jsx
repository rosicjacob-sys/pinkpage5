import { useEffect, useState } from 'react'
import { useCart } from '../lib/cart'

/** Mobile-only sticky add-to-cart bar. Appears once the hero has scrolled
 * past; safe-area padded; visibility-gated so it never traps focus while off
 * screen. Hidden entirely at >=800px via CSS. */
export default function StickyCart() {
  const { bundle, add } = useCart()
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero')
      const h = hero ? hero.offsetHeight : window.innerHeight
      setShow(window.scrollY > h * 0.85)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className={`sticky-cart ${show ? 'is-visible' : ''}`}>
      <div className="sticky-row">
        <div className="sticky-info">
          <span className="sticky-name">Pink Pill · {bundle.tag.toLowerCase()}</span>
          <span className="sticky-price">
            ${bundle.price}
            {bundle.id === 'sub' ? '/mo' : ''}
          </span>
        </div>
        <button className="btn sticky-btn" onClick={() => add(bundle.id === 'triple' ? 3 : 1)}>
          Add to cart
        </button>
      </div>
      <p className="sticky-trust mono-label">60-DAY GUARANTEE · SECURE CHECKOUT</p>
    </div>
  )
}
