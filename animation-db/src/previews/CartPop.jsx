import { useState } from 'react'

export default function CartPop() {
  const [count, setCount] = useState(0)
  const [popping, setPopping] = useState(false)

  const add = () => {
    setCount((c) => c + 1)
    setPopping(true)
    setTimeout(() => setPopping(false), 500)
  }

  return (
    <div className="pv-container pv-dark pv-center">
      <button className="cart-pop-btn" onClick={add}>
        <svg className={`cart-pop-icon ${popping ? 'pop-bounce' : ''}`} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <span className="cart-pop-count">{count}</span>
      </button>
      <p className="pv-hint">Click to add</p>
    </div>
  )
}
