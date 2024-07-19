import React, {useEffect, useState, useRef} from "react"
import { useInView, motion } from "framer-motion"
import useAppStore from "../../store/useAppStore"


export default function WineList() {
  const wines = useAppStore((state) => state.wines)
  const wineList = useRef(null)
  const isInView = useInView(wineList)

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  return (
    <div className="wine-list_ctn mt-6" >
      <ul ref={wineList}>
        {wines.map((wine, index) => (
          <motion.li key={index}>
            {wine}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}