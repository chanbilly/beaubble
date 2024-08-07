import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'
import { Environment } from '@react-three/drei' 
import { useState, useRef, ACESFilmicToneMapping } from 'react'

import Intro from "../components/UI/Intro"
import WineList from "../components/UI/WineList"
import Loader from '../components/UI/Loader'

import Camera from '../components/Webgl/Camera'
import Scene from '../components/Webgl/Scene'

export default function Main() {
	const [isLoading, setIsLoading] = useState(true)
	const eventSource = useRef()

	return (
		<main id="main" ref={eventSource}>
			<GlobalCanvas
        eventSource={eventSource}
        // eventPrefix="client"
        // scaleMultiplier={0.01}
        gl={{ alpha: true, toneMappingExposure: 1.0, toneMapping: ACESFilmicToneMapping }}
        style={{ pointerEvents: 'none' }}>
          {/* <Suspense fallback={<HandleLoading load={setIsLoading} />}> */}
            <Camera />
            <Environment preset='warehouse' />
          {/* </Suspense> */}
      </GlobalCanvas>

			<SmoothScrollbar>
        {(bind) => (
					<div {...bind}>
					<section id="scene">
						<Intro/> 
						<Scene/>
					</section>
					<WineList/>
					</div>
				)}
				</SmoothScrollbar>
			{/* <Loader load={isLoading} /> */}
		</main>
	)
}

