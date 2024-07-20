import { Suspense, lazy, useEffect, useState, ACESFilmicToneMapping } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from './UI/Loader'
import Scene from './Webgl/Scene'
import Camera from './Webgl/Camera'

export default function Webgl() {
  const [isLoading, setIsLoading] = useState(true)

  const HandleLoading = ({ load }) => {
    useEffect(() => {
      load(true)
      return () => load(false)
    }, [])
  }

  return (
    <div className='glContainer'>
      <Canvas dpr={[1, 1.5]} gl={{ alpha: true, toneMappingExposure: 1.0, toneMapping: ACESFilmicToneMapping }} shadows>
        <Suspense fallback={<HandleLoading load={setIsLoading} />}>
          <Camera />
          {/* <Perf/> */}
          <Scene />
        </Suspense>
      </Canvas>
      <Loader load={isLoading} />
    </div>
  )
}
