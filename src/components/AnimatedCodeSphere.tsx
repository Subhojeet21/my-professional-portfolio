
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PointsSphere = () => {
  const ref = useRef<THREE.Points>(null!);

  const points = useMemo(() => {
    const numPoints = 2000;
    const vertices = [];
    const radius = 1.5;

    for (let i = 0; i < numPoints; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * radius;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      vertices.push(x, y, z);
    }

    return new Float32Array(vertices);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x -= delta * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="attributes-position" count={points.length / 3} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.015}
        color="#88a4e3"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
};

const AnimatedCodeSphere = () => {
  return (
    <div className="relative group w-full h-full min-h-[400px] rounded-2xl shadow-2xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <PointsSphere />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default AnimatedCodeSphere;
