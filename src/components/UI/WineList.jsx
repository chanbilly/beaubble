import React, {useEffect, useState, useRef} from "react"
import { useInView, motion } from "framer-motion"
import useAppStore from "../../store/useAppStore"


export default function WineList() {
  const wines = useAppStore((state) => state.wines)
  const wineList = useRef(null)
  const isInView = useInView(wineList)
  const [isVisible, setIsVisible] = useState(false) 

  useEffect(() => {
    if(isInView) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [isInView])

  return (
    <div className="wine-list mt-6" >
      <motion.ul className="wine-list_ctn" ref={wineList} variants={list} initial="hidden" animate={isVisible? "visible" : "hidden"}>
        {wines.map((wine, index) => (
          <motion.li key={index} variants={items}> 
            {wine}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

const list = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      ease: [0.46,0.03,0.52,0.96],
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      when: "afterChildren",
    },
  },
}

const items = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
}

