import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

export default function TextScramble() {
  const [display, setDisplay] = useState('SCRAMBLE')
  const target = 'UNLOCKED'
  const frameRef = useRef(null)
  const queueRef = useRef([])

  useEffect(() => {
    const step = () => {
      let complete = 0
      const next = queueRef.current.map((char, i) => {
        if (char === target[i]) { complete++; return char }
        return CHARS[Math.floor(Math.random() * CHARS.length)]
      })
      setDisplay(next.join(''))
      if (complete === target.length) return
      frameRef.current = setTimeout(() => {
        queueRef.current = next
        for (let i = 0; i < target.length; i++) {
          if (Math.random() < 0.12) queueRef.current[i] = target[i]
        }
        step()
      }, 60)
    }
    queueRef.current = target.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
    frameRef.current = setTimeout(step, 200)

    const interval = setInterval(() => {
      queueRef.current = target.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
      clearTimeout(frameRef.current)
      step()
    }, 4000)

    return () => {
      clearTimeout(frameRef.current)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="pv-container pv-dark pv-center">
      <div className="scramble-text">{display}</div>
    </div>
  )
}
