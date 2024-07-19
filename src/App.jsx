import { Routes, Route, Outlet } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Webgl from './components/Webgl'
import GNB from './components/UI/GNB'
import Footer from './components/UI/Footer'

import './styles/index.scss'

import useAppStore from './store/useAppStore'
import Product from './pages/Product'
import Main from './pages/Main'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main/>} />
          <Route path="product" element={<Product/>} />
        </Route>
      </Routes>
    </>
  )
}

function Layout() {

  return (
    <div className='layout'>
      <GNB />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
