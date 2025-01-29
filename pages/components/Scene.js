import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import AirFryerModel from './AirFryerModel'

export default function Scene() {
  return (
    <Canvas className="canvas">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AirFryerModel />
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        rotateSpeed={0.5}
      />
    </Canvas>
  )
}
