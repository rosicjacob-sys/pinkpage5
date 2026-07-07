import { useLayoutEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { pillStore } from './pillStore'
import { easeInOutCubic, mulberry32 } from './utils'

const PUFF_N = 42
const CLUSTER_RADII = [1.35, 1.7, 2.05, 2.4] // one orbital ring per active
const CLUSTER_TILTS = [
  [0.42, 0.2],
  [-0.55, -0.35],
  [0.85, 0.5],
  [-0.2, 0.95],
]
const CLUSTER_COLORS = ['#F0148C', '#1C0A14', '#C4126E', '#FF9CC8']
const WHITE = new THREE.Color('#FFFFFF')
const HOT = new THREE.Color('#FF2E9C')
const FADE = new THREE.Color('#FFD3E7')

/**
 * GPU-instanced micro-spheres. Two lives:
 *  - the split: spill out of the capsule and settle into four orbital rings
 *    (one per active ingredient); the active ring pulses and saturates;
 *  - the landing puff at the buy box (first PUFF_N instances).
 * All motion is matrix updates on one InstancedMesh — no per-frame allocation.
 */
export default function Particles({ count = 600 }) {
  const ref = useRef(null)
  const prevActive = useRef(-2)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const v = useMemo(() => new THREE.Vector3(), [])
  const v2 = useMemo(() => new THREE.Vector3(), [])
  const tmpColor = useMemo(() => new THREE.Color(), [])

  const data = useMemo(() => {
    const rnd = mulberry32(20260707)
    const cluster = new Uint8Array(count)
    const start = new Float32Array(count * 3)
    const dir = new Float32Array(count * 3)
    const angle0 = new Float32Array(count)
    const speed = new Float32Array(count)
    const radius = new Float32Array(count)
    const phase = new Float32Array(count)
    const size = new Float32Array(count)
    const colors = []
    for (let i = 0; i < count; i++) {
      const c = i % 4
      cluster[i] = c
      // random point inside the capsule interior
      const a = rnd() * Math.PI * 2
      const rr = Math.sqrt(rnd()) * 0.36
      start[i * 3] = Math.cos(a) * rr
      start[i * 3 + 1] = (rnd() * 2 - 1) * 0.85
      start[i * 3 + 2] = Math.sin(a) * rr
      // puff direction (unit-ish sphere)
      const th = rnd() * Math.PI * 2
      const ph = Math.acos(rnd() * 2 - 1)
      dir[i * 3] = Math.sin(ph) * Math.cos(th)
      dir[i * 3 + 1] = Math.abs(Math.cos(ph)) * 0.7 + 0.2
      dir[i * 3 + 2] = Math.sin(ph) * Math.sin(th)
      angle0[i] = rnd() * Math.PI * 2
      speed[i] = (0.22 + rnd() * 0.22) * (c % 2 ? -1 : 1)
      radius[i] = CLUSTER_RADII[c] + (rnd() * 2 - 1) * 0.17
      phase[i] = rnd() * Math.PI * 2
      size[i] = 0.55 + rnd() * 0.85
      const col = new THREE.Color(CLUSTER_COLORS[c])
      col.lerp(WHITE, rnd() * 0.5)
      colors.push(col)
    }
    const clusterQ = CLUSTER_TILTS.map(([x, z]) =>
      new THREE.Quaternion().setFromEuler(new THREE.Euler(x, 0, z))
    )
    return { cluster, start, dir, angle0, speed, radius, phase, size, colors, clusterQ }
  }, [count])

  const applyColors = (active) => {
    const mesh = ref.current
    if (!mesh) return
    for (let i = 0; i < count; i++) {
      tmpColor.copy(data.colors[i])
      if (active >= 0) {
        if (data.cluster[i] === active) tmpColor.lerp(HOT, 0.35)
        else tmpColor.lerp(FADE, 0.75)
      }
      mesh.setColorAt(i, tmpColor)
    }
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  }

  useLayoutEffect(() => {
    const mesh = ref.current
    if (!mesh) return
    // start invisible: zero every matrix before the first draw
    dummy.position.set(0, 0, 0)
    dummy.scale.setScalar(0)
    dummy.updateMatrix()
    for (let i = 0; i < count; i++) mesh.setMatrixAt(i, dummy.matrix)
    mesh.instanceMatrix.needsUpdate = true
    applyColors(-1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  useFrame((state) => {
    const mesh = ref.current
    if (!mesh) return
    const s = pillStore
    const cloud = s.split > 0.001
    const puffing = !cloud && s.puff > 0.001
    mesh.visible = cloud || puffing
    if (!mesh.visible) return
    if (prevActive.current !== s.activeCluster) {
      prevActive.current = s.activeCluster
      applyColors(cloud ? s.activeCluster : -1)
    }
    const t = state.clock.elapsedTime
    const e = easeInOutCubic(Math.min(s.split, 1))
    const reveal = Math.min(s.split / 0.14, 1)
    const { cluster, start, dir, angle0, speed, radius, phase, size, clusterQ } = data
    for (let i = 0; i < count; i++) {
      if (cloud) {
        const c = cluster[i]
        const a = angle0[i] + t * speed[i]
        const r = radius[i]
        v.set(Math.cos(a) * r, Math.sin(t * 1.6 + phase[i]) * 0.14, Math.sin(a) * r)
        v.applyQuaternion(clusterQ[c])
        v2.set(start[i * 3], start[i * 3 + 1], start[i * 3 + 2])
        v.multiplyScalar(e).addScaledVector(v2, 1 - e)
        let sc = size[i] * reveal * 0.05
        if (s.activeCluster === c) sc *= 1.35 + Math.sin(t * 6 + phase[i] * 4) * 0.38
        dummy.position.copy(v)
        dummy.scale.setScalar(sc)
      } else if (i < PUFF_N) {
        const k = 1 - s.puff
        v2.set(dir[i * 3], dir[i * 3 + 1], dir[i * 3 + 2]).multiplyScalar(0.35 + k * 1.7)
        v2.y -= k * k * 0.8
        dummy.position.copy(v2)
        dummy.scale.setScalar(size[i] * s.puff * 0.07)
      } else {
        dummy.position.set(0, 0, 0)
        dummy.scale.setScalar(0)
      }
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
    }
    mesh.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]} frustumCulled={false}>
      <sphereGeometry args={[1, 10, 10]} />
      <meshStandardMaterial roughness={0.4} metalness={0} color="#ffffff" />
    </instancedMesh>
  )
}
