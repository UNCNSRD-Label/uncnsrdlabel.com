"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import React, { FC } from "react";

export const Component: FC<{ children: React.ReactNode }> = ({ children }) => {
  // export const Component: FC<{ children: React.ReactNode; } & typeof Canvas> = ({ children, ...props }) => {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  );
};

export default Component;
