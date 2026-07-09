import { useState } from 'react'

export default function ShineSweep() {
  const [running, setRunning] = useState(false)

  const trigger = () => {
    setRunning(true)
    setTimeout(() => setRunning(false), 950)
  }

  return (
    <div className="pv-container pv-center">
      <button
        className={`shine-btn ${running ? 'shine-run' : ''}`}
        onClick={trigger}
      >
        <span className="shine-text">Add to cart — $39</span>
      </button>
      <p className="pv-hint">Click to trigger shine</p>
    </div>
  )
}
