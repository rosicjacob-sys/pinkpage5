import { useEffect, useRef, useState } from 'react'

export default function TerminalType() {
  const [text, setText] = useState('')
  const [cursor, setCursor] = useState(true)
  const fullText = '> npm install @mind/laser'

  useEffect(() => {
    const run = () => {
      let i = 0
      setText('')
      const interval = setInterval(() => {
        i++
        setText(fullText.slice(0, i))
        if (i >= fullText.length) clearInterval(interval)
      }, 70)
      return interval
    }

    let typeInterval = run()
    const cursorInterval = setInterval(() => setCursor((c) => !c), 530)
    const resetInterval = setInterval(() => {
      clearInterval(typeInterval)
      typeInterval = run()
    }, 5000)

    return () => {
      clearInterval(typeInterval)
      clearInterval(cursorInterval)
      clearInterval(resetInterval)
    }
  }, [])

  return (
    <div className="pv-container pv-dark pv-center">
      <div className="terminal-demo">
        <span className="terminal-text">{text}</span>
        <span className={`terminal-cursor ${cursor ? '' : 'cursor-off'}`}>▌</span>
      </div>
    </div>
  )
}
