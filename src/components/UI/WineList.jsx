import React, {useEffect, useState} from "react"
import { useAnimate } from "framer-motion"
import useAppStore from "../../store/useAppStore"


export default function WineList() {
  const [wineList, animate] = useAnimate()
  const wines = useAppStore((state) => state.wines)

  useEffect(() => {
    animate('li', {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        stagger: 0.1
      }
    })
  }
  , [wines])

  return (
    <div ref={wineList}>
      <ul>
        {wines.map((wine, index) => (
          <li key={index}>
            {wine}
          </li>
        ))}
      </ul>
    </div>
  )
}