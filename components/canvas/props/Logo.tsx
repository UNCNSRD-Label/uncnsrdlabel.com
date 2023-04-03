"use client";

import type { Ref, RefAttributes } from "react";
import type { Object3D } from "three";

import { Svg, type SvgProps } from "@react-three/drei";
import { forwardRef } from "react";
import { Color } from "three";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";

// eslint-disable-next-line react/display-name
export const Model = forwardRef(
  (
    // props: Omit<
    //   SvgProps & RefAttributes<Object3D<import("three").Event>>,
    //   "src"
    // >,
    props: JSX.IntrinsicElements["group"],
    ref: Ref<THREE.Group>
  ) => {
    const svgRef = useRef<THREE.Group>(null);

    useFrame((_) => {
      if (svgRef.current) {
        // ref.current.rotation.y = _.clock.elapsedTime * speed;
        svgRef.current.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 250);

        // svgRef.current.geometry.computeBoundingBox();
        // const boundingBox = svgRef.current.geometry.boundingBox;
        // const center = new THREE.Vector3();
        // boundingBox.getCenter(center);
        // svgRef.current.geometry.translate(-center.x, -center.y, -center.z);
        // svgRef.current.translateX(0);
      }

      // if (logoRef.current) {
      //   logoRef.current.position.set(0.5, 0.5, 0);
      // }
    });

    return (
      <group dispose={null} ref={ref} {...props}>
        <Svg
          fillMaterial={{
            color: new Color(0xff0000),
          }}
          ref={svgRef}
          src={"/images/logos/logotype.svg"}
        />
      </group>
    );
  }
);

export default Model;
