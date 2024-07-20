import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export default function Camera() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 300, 100]} fov={75} /> 
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} enableDamping dampingFactor={0.1}  />
    </>
  )
}