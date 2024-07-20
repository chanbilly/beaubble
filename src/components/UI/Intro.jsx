import React, { useRef, useEffect } from "react"

export default function Intro() {
  const countdown = useRef(null)
  const countDownDate = new Date("Sep 1, 2024 00:00:00").getTime()

  useEffect(() => {
    const x = setInterval(() => {
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
        clearInterval(x)
        countdown.current.innerHTML = "OO:OO:OO:OO"
      }
    }
    , 1000)

    return () => clearInterval(x)
  }, [])

  return (
    <div className="intro">
      <div className="intro_content">
        <img src="/img/winery.svg" alt="" />
        <div ref={countdown} className="countdown"></div>
      </div>
    </div>
  )
}