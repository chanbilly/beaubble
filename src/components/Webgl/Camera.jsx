import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export default function Camera() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 500]} fov={50} /> 
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} enableDamping dampingFactor={0.1}  />
    </>
  )
}