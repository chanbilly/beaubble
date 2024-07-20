import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import { LoopOnce } from 'three'

import m__wine from '/model/wines-transformed.glb?url'
import { useFrame, useThree } from '@react-three/fiber'

export default function Wines(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(m__wine)
  const { actions, mixer } = useAnimations(animations, group)
  const scroll = useScroll()
  const { width, height } = useThree().viewport 

  
  useEffect(() => {
    Object.values(actions).forEach(action => {
      action.setLoop(LoopOnce)
      action.clampWhenFinished = true
    })

    mixer.addEventListener('finished', onAnimFinished)
    return () => mixer.removeEventListener('finished', onAnimFinished)
  }, [actions, mixer])
  
  const onAnimFinished = (e) => {
    console.log('Animation finished', e)
  }
  
  useFrame((state, delta) => {
    const scrollOffset = scroll.offset * height 
    group.current.position.y = -scrollOffset

    const scrollProgress = scroll.offset

    Object.keys(actions).forEach(actionName => {
      const action = actions[actionName]
      const actionDuration = action.getClip().duration

      const newTime = scrollProgress * actionDuration

      action.time = newTime


      if (!action.isRunning()) {
        action.play()
      }
    })

    if (scrollOffset < 70) {
      state.camera.position.z = Math.max(20, Math.min(100, 100 - scrollOffset))
    } else {
      state.camera.position.z = 20
    }
    
  })
  
  return (
    <group ref={group} {...props} dispose={null} rotation={[Math.PI / 2, 0, 0]}>
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
