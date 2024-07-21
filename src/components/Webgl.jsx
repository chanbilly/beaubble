import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'
import { Environment } from '@react-three/drei' 
import { Suspense, lazy, useEffect, useState, ACESFilmicToneMapping, useRef } from 'react'

import Loader from './UI/Loader'
import Scene from './Webgl/Scene'
import Camera from './Webgl/Camera'

export default function Webgl() {
  const [isLoading, setIsLoading] = useState(true)
  const eventSource = useRef()

  // const HandleLoading = ({ load }) => {
  //   useEffect(() => {
  //     load(true)
  //     return () => load(false)
  //   }, [])
  // }

  return (
    <div className='glContainer' ref={eventSource}>
      <GlobalCanvas
        eventSource={eventSource}
        eventPrefix="client"
        scaleMultiplier={0.01}
        gl={{ alpha: true, toneMappingExposure: 1.0, toneMapping: ACESFilmicToneMapping }}
        style={{ pointerEvents: 'none' }}>
          {/* <Suspense fallback={<HandleLoading load={setIsLoading} />}> */}
            <Camera />
            <Environment preset='warehouse' />
          {/* </Suspense> */}
      </GlobalCanvas>

      {/* <Loader load={isLoading} /> */}
    </div>
  )
}
