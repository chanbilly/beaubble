import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function GNB() {
  const location = useLocation()
  const [isLogin, setIsLogin] = useState(false)

  const handleLogin = () =>  {
    setIsLogin(true)
  }

  useEffect(() => {
    let lastScrollTop = 0
    const header = document.getElementById('gnb')
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > lastScrollTop) {
        header.style.top = '-100px'
      } else {
        header.style.top = '0'
      }
      lastScrollTop = scrollTop
    })
  }, [])

  return (
    <div id='gnb' data-header-style={location.pathname == '/' ? "light" : "dark"}>
      <nav>
        <ul>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className='logo'>
        <button
          onClick={() => {
            window.location.reload()
          }}
        >
          <img src='/img/logo.svg' alt='' />
        </button>
      </div>
      <div className="utils">
        <button onClick={handleLogin}>
          {!isLogin ? 'Log in' : <motion.img animate={{scale: [0, 1], transition: { duration: 0.3}}} src='/img/user-icon.png'  alt='' />}
        </button>
        <button>
          Cart
        </button>
      </div>
    </div>
  )
}
