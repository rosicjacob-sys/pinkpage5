import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import Capsule from './Capsule'
import Particles from './Particles'
import { pillStore } from './pillStore'
import { coarsePointer } from '../lib/env'
import { radialTexture } from './textures'
import { easeInOutCubic } from './utils'

const SPIN = (Math.PI * 2) / 12 // ~12s per revolution
const _eul = new THREE.Euler()
const _qA = new THREE.Quaternion()
const _qB = new THREE.Quaternion()
const SPLIT_POSE = new THREE.Euler(0.18, -0.25, Math.PI / 2 - 0.1)

export default function PillScene({ reduced, mobile }) {
  const posRef = useRef(null)
  const spinRef = useRef(null)
  const keyRef = useRef(null)
  const rimRef = useRef(null)
  const ambRef = useRef(null)
  const glowRef = useRef(null)
  const shadowRef = useRef(null)
  const ptr = useRef({ x: 0, y: 0, tx: 0, ty: 0 })

  const shadowTex = useMemo(() => radialTexture('28,10,20', 0.55), [])
  const glowTex = useMemo(() => radialTexture('240,20,140', 0.6), [])

  useEffect(() => {
    if (reduced || coarsePointer()) return
    const onMove = (e) => {
      ptr.current.tx = (e.clientX / window.innerWidth) * 2 - 1
      ptr.current.ty = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduced])

  const apply = (state, t) => {
    if (!posRef.current || !spinRef.current) return
    const s = pillStore
    const vw = state.viewport.width
    const vh = state.viewport.height
    const p = ptr.current
    p.x += (p.tx - p.x) * 0.06
    p.y += (p.ty - p.y) * 0.06
    const sc = Math.max(vh * 0.276 * s.scale * s.intro, 0.0001)
    const floatY = reduced ? 0 : Math.sin(t * 0.8) * 0.045 * Math.min(sc, 1.2)
    const px = s.x * vw
    const py = (s.y + s.dropY) * vh + floatY
    posRef.current.position.set(px, py, 0)
    posRef.current.scale.set(sc * (1 + (1 - s.squash) * 0.55), sc * s.squash, sc)

    const eased = easeInOutCubic(Math.min(s.split, 1))
    _eul.set(
      t * SPIN + 0.35 + p.y * 0.105 + s.pose * 1.1,
      t * SPIN * 0.66 + p.x * 0.105 + s.pose * 0.7,
      -0.52
    )
    _qA.setFromEuler(_eul)
    _qB.setFromEuler(SPLIT_POSE)
    spinRef.current.quaternion.copy(_qA).slerp(_qB, eased)

    if (keyRef.current) keyRef.current.intensity = 2.4 - s.dark * 1.3
    if (ambRef.current) ambRef.current.intensity = 0.75 - s.dark * 0.45
    if (rimRef.current) rimRef.current.intensity = 0.7 + s.dark * 3.6
    if (glowRef.current) {
      glowRef.current.material.opacity = s.dark * 0.5 + eased * 0.14
      glowRef.current.scale.set(sc * 5.4, sc * 5.4, 1)
      glowRef.current.position.set(px, py, -1.5)
    }
    if (shadowRef.current) {
      shadowRef.current.material.opacity = 0.16 * (1 - s.dark) * (1 - eased * 0.65) * s.intro
      shadowRef.current.scale.set(sc * 2.3, sc * 0.55, 1)
      shadowRef.current.position.set(px, py - sc * 1.34, -0.4)
    }
  }

  useFrame((state) => {
    // rAF is frozen in background tabs anyway; this is the belt for OS-level
    // throttling — skip the draw work, the ticker itself is the heartbeat.
    // (__PILL_QA__ lets automated QA force-compose frames in a hidden tab.)
    if (document.hidden && !window.__PILL_QA__) return
    // Reduced motion: freeze the time source so every demand frame (resize,
    // re-render) composes the SAME pose — one static frame, guaranteed.
    apply(state, reduced ? 0.9 : state.clock.elapsedTime)
  })

  // Reduced motion: compose exactly one static frame (and again on resize —
  // frameloop is 'demand', so we must invalidate).
  const three = useThree()
  useEffect(() => {
    if (!reduced) return
    apply(three, 0.9)
    three.invalidate()
  })

  return (
    <>
      <ambientLight ref={ambRef} intensity={0.75} color="#fff5fa" />
      <directionalLight ref={keyRef} position={[3.5, 4, 5]} intensity={2.4} color="#ffffff" />
      <directionalLight position={[-4.5, 1.5, 3]} intensity={0.55} color="#ffe4f1" />
      <directionalLight ref={rimRef} position={[-2.5, 1.2, -4]} intensity={0.7} color="#FF5FA8" />
      <Environment resolution={128} frames={1}>
        <Lightformer intensity={1.1} position={[0, 3, 4]} scale={[6, 3, 1]} color="#ffffff" />
        <Lightformer intensity={0.8} position={[-4, 0, 2]} rotation-y={Math.PI / 3} scale={[3, 5, 1]} color="#fff0f7" />
        <Lightformer intensity={0.5} position={[4, -1, -2]} rotation-y={-Math.PI / 3} scale={[3, 4, 1]} color="#F0148C" />
      </Environment>
      <sprite ref={glowRef} renderOrder={-2}>
        <spriteMaterial map={glowTex} transparent opacity={0} depthWrite={false} />
      </sprite>
      <sprite ref={shadowRef} renderOrder={-1}>
        <spriteMaterial map={shadowTex} transparent opacity={0} depthWrite={false} />
      </sprite>
      <group ref={posRef}>
        <group ref={spinRef}>
          <Capsule />
        </group>
        {!mobile && <Particles count={600} />}
      </group>
    </>
  )
}
