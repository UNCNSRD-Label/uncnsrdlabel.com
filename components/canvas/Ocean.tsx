"use client";

import type { Object3D } from "three";

import { extend, useThree, useLoader, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
import { Water } from "three-stdlib";

extend({ Water });

export default function Ocean(
  props: Omit<React.RefAttributes<typeof Water>, "src">
) {
  console.log({ props });
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(
    THREE.TextureLoader,
    "/images/textures/waternormals.jpg"
  );
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(1_000_000, 1_000_000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffa500,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: true,
      format: gl.outputEncoding,
    }),
    [waterNormals, gl.outputEncoding]
  );
  // @ts-ignore
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  // @ts-ignore
  return (
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      {...props}
    />
  );
}
