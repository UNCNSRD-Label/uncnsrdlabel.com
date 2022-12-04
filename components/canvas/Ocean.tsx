"use client";

import { extend, useThree, useLoader, useFrame } from "@react-three/fiber";
import React, { FC, useRef, useMemo } from "react";
import * as THREE from "three";
import { Water } from "three-stdlib";

extend({ Water });

export const Component: FC<{
  props: Omit<React.RefAttributes<typeof Water>, "src">;
}> = (props) => {
  console.log({ props });
  const ref = useRef(null);
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
  useFrame(
    (state, delta) =>
      // @ts-ignore
      (ref.current.material.uniforms.time.value += delta)
  );

  return (
    // @ts-ignore
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      {...props}
    />
  );
};

export default Component;
