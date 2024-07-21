import React, { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Intro() {
  const countdown = useRef(null)
  const countDownDate = new Date("Sep 1, 2024 00:00:00").getTime()

  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

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

  return (
    <div className="intro">
      <motion.div className="intro_content" style={{ opacity }}>
        <img src="/img/winery.svg" alt="" />
        <div ref={countdown} className="countdown">OO:OO:OO:OO</div>
      </motion.div>
    </div>
  )
}