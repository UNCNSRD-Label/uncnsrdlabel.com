"use client";

import { Canvas } from "@react-three/fiber";
import {
  Backdrop,
  CameraShake,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import React, { FC } from "react";

// import Floor from "#/components/canvas/Floor";
import Logo from "#/components/canvas/Logo";

export const Component: FC<{ children: React.ReactNode }> = ({ children }) => {
  // Everything defined in here will persist between route changes, only children are swapped

  return (
    <Canvas
      eventPrefix="client"
      shadows
      dpr={[1, 2]}
      camera={{
        position: [0, 0, -2_000],
        fov: 35,
        near: 0.01,
        far: 100_000,
      }}
    >
      <spotLight
        position={[5, 10, -15]}
        intensity={0.125}
        angle={0.1}
        penumbra={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.000001}
      />
      {children}
      <Logo position={[650, 500, 1_775]} rotation={[0, Math.PI / 1, 0]} />
      <Backdrop
        floor={0.25} // Stretches the floor segment, 0.25 by default
        position={[0, -875, 800]}
        castShadow
        receiveShadow
        rotation={[0, Math.PI / 1, 0]}
        scale={2_500}
        segments={20} // Mesh-resolution, 20 by default
      >
        <meshStandardMaterial color="#aaa" />
      </Backdrop>
      <OrbitControls makeDefault />
      <CameraShake
        maxYaw={0.025}
        maxPitch={0.025}
        maxRoll={0.025}
        yawFrequency={0.0125}
        pitchFrequency={0.025}
        rollFrequency={0.0125}
      />
      <Preload all />
    </Canvas>
  );
};

export default Component;
