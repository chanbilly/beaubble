import { useEffect, useRef } from 'react'
import { Environment, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

import useAppStore from '../../store/useAppStore'
import Intro from '../UI/Intro'
import Wines from './Wines'

export default function Scene() {
  const { globalState } = useAppStore()
  
  return (
    <>
      <ScrollControls pages={2} damping={0.1}>
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
