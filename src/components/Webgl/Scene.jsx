import { useEffect, useRef } from 'react'
import { Environment, ScrollControls, Scroll, useScroll, PerspectiveCamera } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

import useAppStore from '../../store/useAppStore'
import Bottles from './Bottles'
import Intro from '../UI/Intro'
import Wines from './Wines'

export default function Scene() {
  const { globalState } = useAppStore()
  const scroll = useScroll()
  const { width, height } = useThree((state) => state.viewport)

  return (
    <>
      <ScrollControls pages={3} damping={0.1}>
        <Scroll>
          <Wines />
        </Scroll>
        <Scroll html>
          <Intro />
        </Scroll>
      </ScrollControls>
      <Environment preset='warehouse' />
      {/* <color attach='background' args={['#ffffff']} /> */}
    </>
  )
}
