"use client";

import type { Object3D } from "three";

import { Svg, type SvgProps } from "@react-three/drei";

export default function Logo(
  props: Omit<
    SvgProps & React.RefAttributes<Object3D<import("three").Event>>,
    "src"
  >
) {
  return <Svg src={"/images/logos/logotype.svg"} {...props} />;
}
