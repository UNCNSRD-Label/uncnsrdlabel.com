"use client";

import type { RefAttributes } from "react";
import type { Object3D } from "three";

import { Svg, type SvgProps } from "@react-three/drei";
import { Color } from "three";

export default function Logo(
  props: Omit<SvgProps & RefAttributes<Object3D<import("three").Event>>, "src">
) {
  return (
    <Svg
      fillMaterial={{
        color: new Color(0xff0000),
      }}
      src={"/images/logos/logotype.svg"}
      {...props}
    />
  );
}
