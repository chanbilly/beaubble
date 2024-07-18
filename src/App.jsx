import { Routes, Route, Outlet } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Webgl from './components/Webgl'
import GNB from './components/UI/GNB'

import './styles/index.scss'

import useAppStore from './store/useAppStore'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        </Route>
      </Routes>
    </>
  )
}

function Layout() {
  const globalState = useAppStore((state) => state.globalState)

  return (
    <div id={globalState} className='layout'>
      <GNB />
      <Webgl />
      <Outlet />
    </div>
  )
}

export default App
