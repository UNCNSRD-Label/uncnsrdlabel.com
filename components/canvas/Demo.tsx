"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Glitch,
  Scanline,
} from "@react-three/postprocessing";
import * as THREE from "three";

import { Suspense } from "react";

import Logo from "#/components/canvas/Logo";

export default function Demo() {
  return (
    <>
      {/* <fog attach="fog" args={["lightblue", 60, 100]} /> */}
      <Suspense>
        <Stage
          shadows="accumulative"
          adjustCamera
          intensity={0.5}
          environment="city"
        >
          <Logo />
          <ambientLight intensity={0.5} />
          <spotLight position={[50, 50, -30]} castShadow />
          <pointLight position={[-10, -10, -10]} color="red" intensity={3} />
          <pointLight position={[0, -5, 5]} intensity={0.5} />
          <directionalLight position={[0, -5, 0]} color="red" intensity={2} />
        </Stage>
      </Suspense>
      <OrbitControls makeDefault />
      <EffectComposer>
        {/* <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        /> */}
        <Scanline />
        <Glitch
        // chromaticAberrationOffset={new THREE.Vector2(10, 20, 30)}
        // delay={new THREE.Vector2(0.5)}
        // duration={new THREE.Vector2(0.2)}
        // strength={new THREE.Vector2(0.5)}
        // dtSize={1}
        // columns={5}
        // ratio={1}
        />
      </EffectComposer>
    </>
  );
}
