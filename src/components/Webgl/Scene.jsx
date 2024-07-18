import { Environment } from '@react-three/drei'

// import Camera from './Camera'


import useAppStore from '../../store/useAppStore'

export default function Scene() {
  const { globalState } = useAppStore()

  return (
    <>
      {/* <Camera /> */}
      <Environment preset='warehouse' />
      {/* <color attach='background' args={['#ffffff']} /> */}
    </>
  )
}
