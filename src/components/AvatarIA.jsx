'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function AvatarIA() {
  return (
    <Canvas className="h-64 w-64">
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#48A9A6" />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}