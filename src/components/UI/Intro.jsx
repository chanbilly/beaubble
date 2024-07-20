import React, { useRef, useEffect } from "react"
import { useMotionValue, motion, useTransform } from "framer-motion"
import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Intro() {
  const countdown = useRef(null)
  const scroll = useScroll()
  const countDownDate = new Date("Sep 1, 2024 00:00:00").getTime()

  const x = useMotionValue(0)
  const opacity = useTransform(x, [0, 0.5], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const finaldate = countDownDate - now
      const days = Math.floor(finaldate / (1000 * 60 * 60 * 24))
      const hours = Math.floor((finaldate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((finaldate % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((finaldate % (1000 * 60)) / 1000)
      countdown.current.innerHTML = `
        <span>${days}</span>
        <span>${hours}</span>
        <span>${minutes}</span>
        <span>${seconds}</span>
      `
      if (finaldate < 0) {
        clearInterval(interval)
        countdown.current.innerHTML = "00:00:00:00"
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [countDownDate])


  useFrame(() => {
    x.set(scroll.offset)
  })

  return (
    <motion.div className="intro" style={{ opacity }}>
      <div className="intro_content">
        <img src="/img/winery.svg" alt="" />
        <div ref={countdown} className="countdown"></div>
      </div>
    </motion.div>
  )
}
