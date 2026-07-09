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
    <div className="pv-container pv-center">
      <button className="cart-pop-btn" onClick={add}>
        <span className={`cart-pop-icon ${popping ? 'pop-bounce' : ''}`}>🛒</span>
        <span className="cart-pop-count">{count}</span>
      </button>
      <p className="pv-hint">Click to add</p>
    </div>
  )
}
