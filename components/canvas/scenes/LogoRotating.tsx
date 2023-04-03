"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";

import { Suspense } from "react";

import Logo from "#/components/canvas/props/Logo";

export default function LogoRotating({
  speed,
  ...props
}: { speed?: number } & JSX.IntrinsicElements["group"]) {
  const logoRef = useRef<THREE.Group>(null);
  const stageRef = useRef<THREE.Group>(null);

  useFrame((_) => {
    if (logoRef.current) {
      // ref.current.rotation.y = _.clock.elapsedTime * speed;
      // logoRef.current.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 250);
    }

    // if (logoRef.current) {
    //   logoRef.current.position.set(0.5, 0.5, 0);
    // }

    // svgRef.current.geometry.computeBoundingBox();
    // const boundingBox = svgRef.current.geometry.boundingBox;
    // const center = new THREE.Vector3();
    // boundingBox.getCenter(center);
    // svgRef.current.geometry.translate(-center.x, -center.y, -center.z);
  });

  return (
    <Suspense>
      {/* <Stage
        ref={stageRef}
        shadows="accumulative"
        // adjustCamera
        intensity={0.5}
        environment="city"
        // center={new THREE.Vector3(0, 1, 0)}
      > */}
      <Logo ref={logoRef} position={[0, 0, 0]} rotation={[0, 0, 0]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[50, 50, -30]} castShadow />
      <pointLight position={[-10, -10, -10]} color="red" intensity={3} />
      <pointLight position={[0, -5, 5]} intensity={0.5} />
      <directionalLight position={[0, -5, 0]} color="red" intensity={2} />
      {/* </Stage> */}
    </Suspense>
  );
}
