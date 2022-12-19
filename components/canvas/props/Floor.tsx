"use client";

import type { RefAttributes } from "react";
import type { MeshBasicMaterial } from "three";

// import { useTexture } from "@react-three/drei";

// import floorImage from "#/public/images/textures/concrete-1024.jpg";

export default function Floor(
  props: Omit<RefAttributes<MeshBasicMaterial>, "key">
) {
  // const floorTexture = useTexture(floorImage as any) as THREE.Texture;

  return <meshBasicMaterial color="hotpink" {...props} />;
}
