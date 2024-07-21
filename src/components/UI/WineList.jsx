import React, { useEffect, useState, useRef } from "react"
import { useInView, motion, delay } from "framer-motion"

import useAppStore from "../../store/useAppStore"
import { min } from "three/examples/jsm/nodes/Nodes.js"

export default function WineList() {
  const wineData = useAppStore((state) => state.wineData)
  const wineList = useRef(null)
  const isInView = useInView(wineList)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [activeItem, setActiveItem] = useState(null)

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [isInView])

  const handleHoverStart = (index) => {
    setHoveredItem(index)
  }

  const handleHoverEnd = () => {
    setHoveredItem(null)
  }

  const handleClick = (index) => {
    setActiveItem(index === activeItem ? null : index)
  }

  return (
    <div className="wine-list mt-6">
      <motion.ul className="wine-list_ctn" ref={wineList} variants={list} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
        {wineData.map((wine, index) => (
          <motion.li
            key={index}
            variants={items}
            className={activeItem === index ? "active" : ""}
            initial="hidden"
            animate={activeItem === index  ? "active" : isVisible ? "visible" : "hidden"}
            onHoverStart={() => handleHoverStart(index)}
            onHoverEnd={handleHoverEnd}
            onClick={() => handleClick(index)}
          >
            <span>{wine.name}</span>
            <ul className="thumbnails">
              {wine.thumbnails.map((thumbnail, thumbIndex) => (
                <motion.li
                  key={thumbIndex}
                  variants={thumbnailVariants}
                  initial="hidden"
                  animate={activeItem === index ? "active" : hoveredItem === index ? "visible" : "hidden"}
                  custom={thumbIndex}
                >
                  <a href={thumbnail.link ? thumbnail.link : "javascript:void(0)"}>
                    <img src={thumbnail.src} alt={thumbnail.label} />
                    <span>{thumbnail.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
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
      staggerChildren: 0.2,
      // delayChildren: 0.2,
      ease: [0.46, 0.03, 0.52, 0.96],
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      when: "afterChildren",
    },
  },
}

const items = {
  hidden: { opacity: 0, y: 20, height: 'auto' },
  visible: { 
    opacity: 1, 
    y: 0, 
    height: 156,
    transition: {
      duration: 0.5,
      ease: [0.46, 0.03, 0.52, 0.96],
    }
  },
  active: { opacity: 1, y: 0, height: 480 }
}

const thumbnailVariants = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      ease: [0.25,0.46,0.45,0.94],
      duration: 0.3,
    },
  }),
  hidden: {
    opacity: 0,
    y: 140,
  },
  active: {
    opacity: [0,1],
    y: 0,
  }
}
