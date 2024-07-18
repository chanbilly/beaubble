import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export function Model(props) {
  const { nodes, materials } = useGLTF("/wine.glb")
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Vert001.geometry} material={materials["Material.003"]} position={[0, 7.759, 0]} scale={3.401} />
      <mesh geometry={nodes.Vert.geometry} material={materials["Material.001"]} />
      {/* <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} scale={80.214} /> */}
      <mesh geometry={nodes.Cylinder.geometry} material={materials["Material.002"]} position={[0, 1.949, 0]} scale={1.038} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials["Material.002"]} position={[-0.078, 6.473, -0.006]} scale={1.038} />
    </group>
  )
}

useGLTF.preload("/wine.glb")
