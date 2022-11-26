"use client";

import {
  useCursor,
  Backdrop,
  CameraShake,
  Environment,
  MeshDistortMaterial,
  OrbitControls,
  Stage,
  Svg,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  EffectComposer,
  ChromaticAberration,
  DepthOfField,
  DotScreen,
  Bloom,
  Glitch,
  Noise,
  Scanline,
  Vignette,
} from "@react-three/postprocessing";
// import { useRouter } from 'next/router'
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";

import { Model as Lollipop } from "./Lollipop";

function Light() {
  const ref = useRef();
  useFrame((_) => (ref.current.rotation.x = _.clock.elapsedTime));
  return (
    <group ref={ref}>
      <rectAreaLight
        width={15}
        height={100}
        position={[30, 30, -10]}
        intensity={5}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </group>
  );
}

function Rig() {
  // const [vec] = useState(() => new THREE.Vector3())
  // const { camera, mouse } = useThree()
  // useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05))
  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.01}
      pitchFrequency={0.01}
      rollFrequency={0.01}
    />
  );
}

export default function Lollipops({ route, ...props }) {
  // const router = useRouter()
  const [hovered, hover] = useState(false);
  useCursor(hovered);

  return (
    <>
      <mesh
        // onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        {...props}
      >
        {/* <sphereGeometry args={[1, 64, 64]} /> */}
        <MeshDistortMaterial
          roughness={0}
          color={hovered ? "hotpink" : "#1fb2f5"}
        />
      </mesh>
      <fog attach="fog" args={["lightpink", 60, 100]} />
      <Suspense>
        <Stage shadows="accumulative">
          <Backdrop
            floor={0.25} // Stretches the floor segment, 0.25 by default
            receiveShadow={true}
            segments={20} // Mesh-resolution, 20 by default
          >
            <meshStandardMaterial color="#fff" />
            {/* <MeshDistortMaterial
          roughness={0}
          color={hovered ? "hotpink" : "#1fb2f5"}
        /> */}
          </Backdrop>
          <ambientLight intensity={0.5} />
          <Svg
            src={"/images/logos/logotype.svg"}
            position={[-4.5, -4, 0]}
            rotation={[0, -2.8, 0]}
          />
          <Lollipop position={[-4.5, -4, 0]} rotation={[0, -2.8, 0]} />
          <spotLight position={[50, 50, -30]} castShadow />
          <pointLight position={[-10, -10, -10]} color="red" intensity={3} />
          <pointLight position={[0, -5, 5]} intensity={0.5} />
          <directionalLight position={[0, -5, 0]} color="red" intensity={2} />
          <Light />
          <Environment preset="city" />
          <Rig />
        </Stage>
      </Suspense>
      <CameraShake
        maxYaw={0.01}
        maxPitch={0.01}
        maxRoll={0.01}
        yawFrequency={0.1}
        pitchFrequency={0.1}
        rollFrequency={0.1}
      />
      <OrbitControls makeDefault />
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
        {/* <Noise opacity={0.02} /> */}
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
        {/* <ChromaticAberration /> */}
        {/* <DotScreen /> */}
        <Scanline />
        <Glitch />
      </EffectComposer>
    </>
  );
}
