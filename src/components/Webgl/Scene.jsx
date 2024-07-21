import { useEffect, useRef } from 'react'
import { UseCanvas, ScrollScene } from '@14islands/r3f-scroll-rig'
import { StickyScrollScene } from '@14islands/r3f-scroll-rig/powerups'


import useAppStore from '../../store/useAppStore'
import Wines from './Wines'

export default function Scene() {
  const { globalState } = useAppStore()
  const el = useRef()

  
  return (
    <>
      <div className="StickyContainer">
        <div ref={el} className="SomeDomContent Debug">
          {/* <p>This element is position:sticky and will be tracked.</p> */}
        </div>
      </div>
      <UseCanvas>
        <StickyScrollScene track={el}>{(props) => <Wines {...props}/>}</StickyScrollScene>
      </UseCanvas>
    </>
  )
}
