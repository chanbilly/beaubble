import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations, useCursor } from '@react-three/drei'
import { LoopOnce } from 'three'
import { useFrame} from '@react-three/fiber'
import { motion } from 'framer-motion-3d'

import m__wine from '/model/wines-transformed.glb?url'

import useAppStore from '../../store/useAppStore'

export default function Wines(props) {
  const setHoveredItem = useAppStore(state => state.setHoveredItem)
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(m__wine)
  const { actions, mixer } = useAnimations(animations, group)
  const size = props.scale.xy.min() * 0.001
  const prevProgressRef = useRef(props.scrollState.progress)
  const rotationRef = useRef([0, 0, 0])
  const [hovered, setHovered] = useState(false)
  useCursor(hovered, 'pointer', 'auto', document.body)

  const handlePointerOver = (bottleName) => {
    // console.log(bottleName)
    setHoveredItem(bottleName)
    setHovered(true)
  }

  const handlePointerOut = () => {
    // setHoveredItem(null)
    setHovered(false)
  }

  useEffect(() => {
    Object.values(actions).forEach(action => {
      action.setLoop(LoopOnce)
      action.clampWhenFinished = true
      action.paused = true
    })
  }, [actions, mixer])

  useFrame((state, delta) => {
    const progress = props.scrollState.progress

    if (prevProgressRef.current !== progress) {
      Object.keys(actions).forEach(actionName => {
        const action = actions[actionName]
        const actionDuration = action.getClip().duration

        const newTime = progress * actionDuration

        action.time = newTime

        if (!action.isRunning()) {
          action.play()
        }
        action.paused = true
      })

      if (progress < 0.5) {
        state.camera.position.z = 500 - (progress / 0.5) * 480
      } else {
        state.camera.position.z = 20
      }

      prevProgressRef.current = progress
    }

    if (progress >= 0.7) {
      const rotationSpeed = 0.001
      rotationRef.current[1] -= rotationSpeed
      group.current.rotation.y = rotationRef.current[1]
    } else {
      setHoveredItem(null)
    }
  })

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[Math.PI / 2, 0, 0]}
      scale={size}
    >
      <group name='Scene'>
        <motion.group
          name='Bottle1'
          whileHover={{ scale: 1.2 }}
          position={[0, 0, -8.078]}
          onPointerOver={() => handlePointerOver('Elysian Fields')}
          onPointerOut={handlePointerOut}
        >
          <mesh
            name='Vert004'
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name='Vert004_1'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name='Vert004_2'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </motion.group>
        <motion.group
          name='Bottle2'
          position={[7.315, 0, -3.953]}
          whileHover={{ scale: 1.2 }}
          onPointerOver={() => handlePointerOver('Lunar Bliss')}
          onPointerOut={handlePointerOut}
        >
          <mesh
            name='Vert004'
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name='Vert004_1'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name='Vert004_2'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </motion.group>
        <motion.group
          name='Bottle3'
          position={[4.227, 0, -6.99]}
          whileHover={{ scale: 1.1 }}
          onPointerOver={() => handlePointerOver('Celestial Reserve')}
          onPointerOut={handlePointerOut}
        >
          <mesh
            name='Vert004'
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name='Vert004_1'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name='Vert004_2'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </motion.group>
        <motion.group
          name='Bottle4'
          whileHover={{ scale: 1.2 }}
          position={[8.479, 0, 0.224]}
          onPointerOver={() => handlePointerOver('Golden Harvest')}
          onPointerOut={handlePointerOut}
        >
          <mesh
            name='Vert004'
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name='Vert004_1'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name='Vert004_2'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </motion.group>
        <motion.group
          name='Bottle5'
          whileHover={{ scale: 1.2 }}
          position={[7.239, 0, 4.4]}
          onPointerOver={() => handlePointerOver('Eclipse Noir')}
          onPointerOut={handlePointerOut}
        >
          <mesh
            name='Vert004'
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name='Vert004_1'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name='Vert004_2'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </motion.group>
        <motion.group
          name='Bottle6'
          whileHover={{ scale: 1.2 }}
          position={[4.201, 0, 7.437]}
          onPointerOver={() => handlePointerOver('Ruby Crest')}
          onPointerOut={handlePointerOut}
        >
          <mesh
            name='Vert004'
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name='Vert004_1'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name='Vert004_2'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </motion.group>
        <motion.group
          name='Bottle7'
          whileHover={{ scale: 1.2 }}
          position={[0.025, 0, 8.551]}
          onPointerOver={() => handlePointerOver('Crimson Nectar')}
          onPointerOut={handlePointerOut}
        >
          <mesh
            name='Vert004'
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name='Vert004_1'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name='Vert004_2'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </motion.group>
        <motion.group
          name='Bottle8'
          whileHover={{ scale: 1.2 }}
          position={[-4.1, 0, 7.412]}
          onPointerOver={() => handlePointerOver('Burgundy Grape')}
          onPointerOut={handlePointerOut}
        >
          <mesh
            name='Vert004'
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name='Vert004_1'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name='Vert004_2'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </motion.group>
        <motion.group
          name='Bottle9'
          whileHover={{ scale: 1.2 }}
          position={[-7.163, 0, 4.374]}
          rotation={[-Math.PI, 0, -Math.PI]}
          onPointerOver={() => handlePointerOver('Moonlight Mist')}
          onPointerOut={handlePointerOut}
        >
          <mesh
            name='Vert004'
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name='Vert004_1'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name='Vert004_2'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </motion.group>
        <motion.group
          name='Bottle10'
          whileHover={{ scale: 1.2 }}
          position={[-8.251, 0, 0.224]}
          onPointerOver={() => handlePointerOver('Eternal Flame')}
          onPointerOut={handlePointerOut}
        >
          <mesh
            name='Vert004'
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name='Vert004_1'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name='Vert004_2'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </motion.group>
        <motion.group
          name='Bottle11'
          whileHover={{ scale: 1.2 }}
          position={[-7.188, 0, -3.953]}
          onPointerOver={() => handlePointerOver('Vintage Rose')}
          onPointerOut={handlePointerOut}
        >
          <mesh
            name='Vert004'
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name='Vert004_1'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name='Vert004_2'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </motion.group>
        <motion.group
          name='Bottle12'
          whileHover={{ scale: 1.2 }}
          position={[-4.126, 0, -6.99]}
          rotation={[-Math.PI, 0, -Math.PI]}
          onPointerOver={() => handlePointerOver('Midnight Sun')}
          onPointerOut={handlePointerOut}
        >
          <mesh
            name='Vert004'
            castShadow
            receiveShadow
            geometry={nodes.Vert004.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name='Vert004_1'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name='Vert004_2'
            castShadow
            receiveShadow
            geometry={nodes.Vert004_2.geometry}
            material={materials['Material.001']}
          />
        </motion.group>
      </group>
    </group>
  )
}

useGLTF.preload(m__wine)
