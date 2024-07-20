import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { LoopOnce } from 'three'

import m__wine from '/model/wines-transformed.glb?url'

export default function Wines(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(m__wine)
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {
    actions['Bottle1Action'].setLoop(LoopOnce).clampWhenFinished = true
    actions['Bottle2Action'].setLoop(LoopOnce).clampWhenFinished = true
    actions['Bottle3Action'].setLoop(LoopOnce).clampWhenFinished = true
    actions['Bottle4Action'].setLoop(LoopOnce).clampWhenFinished = true
    actions['Bottle5Action'].setLoop(LoopOnce).clampWhenFinished = true
    actions['Bottle6Action'].setLoop(LoopOnce).clampWhenFinished = true
    actions['Bottle7Action'].setLoop(LoopOnce).clampWhenFinished = true
    actions['Bottle8Action'].setLoop(LoopOnce).clampWhenFinished = true
    actions['Bottle9Action'].setLoop(LoopOnce).clampWhenFinished = true
    actions['Bottle10Action'].setLoop(LoopOnce).clampWhenFinished = true
    actions['Bottle11Action'].setLoop(LoopOnce).clampWhenFinished = true
    actions['Bottle12Action'].setLoop(LoopOnce).clampWhenFinished = true

    mixer.addEventListener('finished', onAnimFinished)
    return () => mixer.removeEventListener('finished', onAnimFinished)
  }, [])

  const onAnimFinished = (e) => {
    console.log('Animation finished', e)
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Bottle1" position={[0, 0, -8.078]}>
          <mesh
            name="Vert004"
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Vert004_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Vert004_2"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </group>
        <group name="Bottle2" position={[7.315, 0, -3.953]}>
          <mesh
            name="Vert004"
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Vert004_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Vert004_2"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </group>
        <group name="Bottle3" position={[4.227, 0, -6.99]}>
          <mesh
            name="Vert004"
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Vert004_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Vert004_2"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </group>
        <group name="Bottle4" position={[8.479, 0, 0.224]}>
          <mesh
            name="Vert004"
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Vert004_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Vert004_2"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </group>
        <group name="Bottle5" position={[7.239, 0, 4.4]}>
          <mesh
            name="Vert004"
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Vert004_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Vert004_2"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </group>
        <group name="Bottle6" position={[4.201, 0, 7.437]}>
          <mesh
            name="Vert004"
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Vert004_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Vert004_2"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </group>
        <group name="Bottle7" position={[0.025, 0, 8.551]}>
          <mesh
            name="Vert004"
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Vert004_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Vert004_2"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </group>
        <group name="Bottle8" position={[-4.1, 0, 7.412]}>
          <mesh
            name="Vert004"
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Vert004_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Vert004_2"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </group>
        <group name="Bottle9" position={[-7.163, 0, 4.374]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            name="Vert004"
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Vert004_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Vert004_2"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </group>
        <group name="Bottle10" position={[-8.251, 0, 0.224]}>
          <mesh
            name="Vert004"
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Vert004_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Vert004_2"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </group>
        <group name="Bottle11" position={[-7.188, 0, -3.953]}>
          <mesh
            name="Vert004"
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Vert004_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Vert004_2"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </group>
        <group name="Bottle12" position={[-4.126, 0, -6.99]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            name="Vert004"
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Vert004_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Vert004_2"
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(m__wine)
