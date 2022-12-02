"use client";

import {
  useCursor,
  Backdrop,
  CameraShake,
  MeshDistortMaterial,
  OrbitControls,
  Stage,
  Svg,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  EffectComposer,
  DepthOfField,
  Glitch,
  Scanline,
  Vignette,
} from "@react-three/postprocessing";
// import { useRouter } from 'next/router'
import { Suspense, useRef, useState, Ref } from "react";
import * as THREE from "three";
import { Lifetime } from "timeline-composer";

import { Model as Lollipop } from "./Lollipop";

function Light() {
  return (
    <group>
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

function RotatingLollipop({
  speed,
  ...props
}: { speed: number } & JSX.IntrinsicElements["group"]) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_) => {
    if (ref.current) {
      ref.current.rotation.x = _.clock.elapsedTime * speed;
    }
  });
  return <Lollipop ref={ref} {...props} />;
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

export default function Lollipops(props: JSX.IntrinsicElements["mesh"]) {
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
        <Stage
          shadows="accumulative"
          adjustCamera
          intensity={0.5}
          environment="city"
        >
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
          {/* <Svg
            src={"/images/logos/logotype.svg"}
            position={[-4.5, -4, 0]}
            rotation={[0, -2.8, 0]}
          /> */}
          {/* <Lifetime seconds={2.5}>
            <Svg
              src={"/images/logos/logotype.svg"}
              position={[-4.5, -4, 0]}
              rotation={[0, -2.8, 0]}
            />
          </Lifetime> */}
          <RotatingLollipop
            position={[1, 1, 1]}
            rotation={[1, 1, 1]}
            speed={1}
          />
          <RotatingLollipop
            position={[5, 5, 5]}
            rotation={[5, 5, 5]}
            speed={5}
          />
          <RotatingLollipop
            position={[10, 10, 10]}
            rotation={[10, 10, 10]}
            speed={10}
          />
          {/* position?: Vector3;
          up?: Vector3;
          scale?: Vector3;
          rotation?: Euler;
          matrix?: Matrix4;
          quaternion?: Quaternion;
          layers?: Layers; */}
          <spotLight position={[50, 50, -30]} castShadow />
          <pointLight position={[-10, -10, -10]} color="red" intensity={3} />
          <pointLight position={[0, -5, 5]} intensity={0.5} />
          <directionalLight position={[0, -5, 0]} color="red" intensity={2} />
          <Light />
          <Rig />
        </Stage>
      </Suspense>
      <OrbitControls makeDefault />
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Scanline />
        <Glitch
        // chromaticAberrationOffset={new THREE.Vector2(1)}
        // delay={new THREE.Vector2(0.5)}
        // duration={new THREE.Vector2(0.2)}
        // strength={new THREE.Vector2(0.5)}
        // dtSize={1}
        // columns={5}
        // ratio={1}
        />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
}
