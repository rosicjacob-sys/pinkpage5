import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { pillStore } from './pillStore'
import { easeInOutCubic } from './utils'

/**
 * The two-tone capsule: royal-pink half + pearl-white half, gel discs at the
 * open ends so the split never shows a hollow shell. Halves separate along the
 * capsule's local axis as pillStore.split rises.
 */
export default function Capsule() {
  const topRef = useRef(null)
  const botRef = useRef(null)

  const geo = useMemo(
    () => ({
      cyl: new THREE.CylinderGeometry(0.5, 0.5, 0.55, 64, 1, true),
      hemi: new THREE.SphereGeometry(0.5, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2),
      disc: new THREE.CircleGeometry(0.5, 64),
    }),
    []
  )
  const mats = useMemo(
    () => ({
      pink: new THREE.MeshPhysicalMaterial({
        color: '#F0148C',
        roughness: 0.24,
        metalness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
      }),
      pearl: new THREE.MeshPhysicalMaterial({
        color: '#FFF7FB',
        roughness: 0.13,
        metalness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
        iridescence: 0.3,
        iridescenceIOR: 1.32,
        sheen: 0.5,
        sheenColor: new THREE.Color('#FFD3E7'),
      }),
      gel: new THREE.MeshStandardMaterial({ color: '#FF9CC8', roughness: 0.55 }),
    }),
    []
  )

  useFrame(() => {
    const e = easeInOutCubic(Math.min(pillStore.split, 1))
    const off = e * 1.02
    if (topRef.current) {
      topRef.current.position.y = off
      topRef.current.rotation.z = e * 0.22
    }
    if (botRef.current) {
      botRef.current.position.y = -off
      botRef.current.rotation.z = -e * 0.16
    }
  })

  return (
    <group>
      <group ref={topRef}>
        <mesh geometry={geo.cyl} material={mats.pink} position={[0, 0.275, 0]} />
        <mesh geometry={geo.hemi} material={mats.pink} position={[0, 0.55, 0]} />
        <mesh geometry={geo.disc} material={mats.gel} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} />
      </group>
      <group ref={botRef}>
        <mesh geometry={geo.cyl} material={mats.pearl} position={[0, -0.275, 0]} />
        <mesh geometry={geo.hemi} material={mats.pearl} position={[0, -0.55, 0]} rotation={[Math.PI, 0, 0]} />
        <mesh geometry={geo.disc} material={mats.gel} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} />
      </group>
    </group>
  )
}
