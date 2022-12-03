"use client";

import { Canvas } from "@react-three/fiber";
import {
  CameraShake,
  ContactShadows,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import React, { FC } from "react";

export const Component: FC<{ children: React.ReactNode }> = ({ children }) => {
  // export const Component: FC<{ children: React.ReactNode; } & typeof Canvas> = ({ children, ...props }) => {
  // Everything defined in here will persist between route changes, only children are swapped

  return (
    <Canvas
      eventPrefix="client"
      shadows
      dpr={[1, 2]}
      camera={{
        position: [0, 0, -2_000],
        fov: 20,
        near: 0.01,
        far: 100_000,
      }}
    >
      {/* <fog attach="fog" args={["lightpink", 60, 100]} /> */}
      {/* <directionalLight intensity={0.75} /> */}
      {/* <ambientLight intensity={0.75} /> */}
      <hemisphereLight intensity={0.4} groundColor="white" />
      <directionalLight position={[10, -15, -10]} intensity={0.5} />
      <spotLight
        position={[5, 10, -15]}
        intensity={1}
        angle={0.1}
        penumbra={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.000001}
      />
      {children}
      <ContactShadows
        resolution={1024}
        scale={20}
        position={[0, -1.02, 0]}
        blur={0.75}
        opacity={0.5}
        far={1.05}
        color="#1A5AaF"
      />
      <Preload all />
      <OrbitControls makeDefault />
      <CameraShake
        maxYaw={0.01}
        maxPitch={0.05}
        maxRoll={0.05}
        yawFrequency={0.025}
        pitchFrequency={0.025}
        rollFrequency={0.025}
      />
    </Canvas>
  );
};

export default Component;
