import { Environment } from '@react-three/drei'

// import Camera from './Camera'


import useAppStore from '../../hooks/useAppStore'

export default function Scene() {
  const { globalState } = useAppStore()

  return (
    <>
      {/* <Camera /> */}
      <Environment files={'/hdr/empty_warehouse_01_1k_modi.hdr'} />
      {/* <color attach='background' args={['#ffffff']} /> */}
    </>
  )
}
