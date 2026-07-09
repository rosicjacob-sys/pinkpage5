export default function GlitchText() {
  return (
    <div className="pv-container pv-dark pv-center">
      <div className="glitch-wrap">
        <div className="glitch-layer" data-text="OVERCLOCK">OVERCLOCK</div>
        <div className="glitch-layer glitch-shift" data-text="OVERCLOCK">OVERCLOCK</div>
        <div className="glitch-layer glitch-shift2" data-text="OVERCLOCK">OVERCLOCK</div>
        <span className="glitch-sub">Hover to corrupt the signal</span>
      </div>
    </div>
  )
}
