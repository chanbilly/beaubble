import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { UseCanvas } from '@14islands/r3f-scroll-rig'
import { StickyScrollScene } from '@14islands/r3f-scroll-rig/powerups'

import useAppStore from '../../store/useAppStore'
import Wines from './Wines'

export default function Scene() {
  const hoveredItem = useAppStore((state) => state.hoveredItem)
  const el = useRef()
  const [visible, setVisible] = useState(false)

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      <div className="StickyContainer">
        <div ref={el} className="StickyContainerSection">
          {hoveredItem &&
            <div className={`content ${visible ? 'visible': 'hidden'}`}>
              <h1>Discover our collection<br/> <strong>{hoveredItem}</strong></h1>
              <a href="#wineList">Learn More</a>
            </div>
          }
        </div>
      </div>
      <UseCanvas>
        <StickyScrollScene track={el}>{(props) => <Wines {...props}/>}</StickyScrollScene>
      </UseCanvas>
    </>
  )
}
