import React, {useRef, useState} from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

export default function ColorAnimation({position, color}) {
    const ref = useRef()
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.y += delta / 2))
    // const texture = useTexture('/images/glass.png')
  return (
    <mesh
      position = {position}
      ref={ref}
    //   scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[3, 3, 3]} />
      {/* <sphereGeometry args={[3, 64, 64]} /> */}
      <meshPhysicalMaterial color={color} reflectivity={.5} iridescence={1} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
      {/* <meshStandardMaterial color={hovered ? 'hotpink' : color} /> */}
    </mesh>
  )
}
