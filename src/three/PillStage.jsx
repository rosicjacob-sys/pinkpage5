import { Component, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import PillScene from './PillScene'
import { usePillChoreography } from './choreography'
import { pillStore } from './pillStore'
import { isMobileViewport, reducedMotion, webglSupported } from '../lib/env'

/**
 * ErrorBoundary around the R3F tree: any scene/shader failure falls through
 * silently to the CSS fallback. We never call loseContext() in cleanup —
 * StrictMode double-mounts would hand the remount a dead canvas.
 */
class GLErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(err) {
    console.warn('[pill] WebGL scene failed — static fallback shown.', err)
    if (this.props.onFail) this.props.onFail()
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

/** Beautiful static fallback: CSS gradient capsule + soft shadow, anchored to
 * the hero and fading out as the hero scrolls away. Rendered underneath the
 * canvas at all times — the page never shows a blank hole. */
function FallbackPill({ show }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const f = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.7))
      el.style.opacity = String(f)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div ref={ref} className="pill-fallback" aria-hidden="true">
      <div className={`pf-inner ${show ? '' : 'pf-hidden'}`}>
        <div className="pf-capsule" />
        <div className="pf-shadow" />
      </div>
    </div>
  )
}

export default function PillStage() {
  const [glOk] = useState(() => webglSupported())
  const [failed, setFailed] = useState(false)
  const [ready, setReady] = useState(false)
  const [sized, setSized] = useState(false)
  const stageRef = useRef(null)
  const reduced = reducedMotion()
  const mobile = isMobileViewport()

  usePillChoreography()

  // Sizing belt: never boot the canvas into a zero-width box (mount-time
  // layout can be 0 and a one-shot resize leaves a 300x150 canvas).
  // ResizeObserver callbacks are paint-driven and never fire in hidden tabs,
  // so a wall-clock poll backs it up — observers alone are not trusted.
  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    if (el.clientWidth > 0) {
      setSized(true)
      return
    }
    let ro = null
    let timer = null
    const check = () => {
      if (el.clientWidth > 0) {
        setSized(true)
        if (ro) ro.disconnect()
        clearInterval(timer)
        return true
      }
      return false
    }
    ro = new ResizeObserver(check)
    ro.observe(el)
    timer = setInterval(check, 700)
    return () => {
      ro.disconnect()
      clearInterval(timer)
    }
  }, [])

  const showGL = glOk && !failed
  return (
    <>
      <FallbackPill show={!showGL || !ready} />
      <div ref={stageRef} className="pill-stage" aria-hidden="true">
        {showGL && sized && (
          <GLErrorBoundary onFail={() => setFailed(true)}>
            <Canvas
              dpr={mobile ? [1, 1.5] : [1, 2]}
              frameloop={reduced ? 'demand' : 'always'}
              camera={{ fov: 35, position: [0, 0, 7] }}
              gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
              onCreated={(state) => {
                state.gl.domElement.addEventListener('webglcontextlost', (e) => {
                  e.preventDefault()
                  setFailed(true)
                })
                // QA handle: set pill state + force one composed frame from a
                // hidden tab (rAF frozen). Inert unless explicitly driven.
                window.__pill = {
                  set: (vals) => Object.assign(pillStore, vals),
                  advance: () => state.advance(performance.now() / 1000),
                }
                // "ready" only after a real frame has been painted
                requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)))
              }}
            >
              <PillScene reduced={reduced} mobile={mobile} />
            </Canvas>
          </GLErrorBoundary>
        )}
      </div>
    </>
  )
}
