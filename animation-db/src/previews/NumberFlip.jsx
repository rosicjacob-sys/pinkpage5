import { useEffect, useRef, useState } from 'react'

function FlipDigit({ digit }) {
  const [prev, setPrev] = useState(digit)
  const [flipping, setFlipping] = useState(false)

  useEffect(() => {
    if (prev !== digit) {
      setFlipping(true)
      const t = setTimeout(() => {
        setPrev(digit)
        setFlipping(false)
      }, 300)
      return () => clearTimeout(t)
    }
  }, [digit, prev])

  return (
    <span className="nf-digit-wrap">
      <span className={`nf-digit ${flipping ? 'nf-flip' : ''}`}>{prev}</span>
    </span>
  )
}

export default function NumberFlip() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => (c + 1) % 100)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const digits = String(count).padStart(2, '0').split('')

  return (
    <div className="pv-container pv-dark pv-center">
      <div className="nf-display">
        {digits.map((d, i) => (
          <FlipDigit key={i} digit={d} />
        ))}
      </div>
    </div>
  )
}
