"use client";

import type { MeshBasicMaterial } from "three";

// import { useTexture } from "@react-three/drei";

// import floorImage from "#/public/images/textures/concrete-1024.jpg";

export default function Floot(
  props: Omit<React.RefAttributes<MeshBasicMaterial>, "key">
) {
  console.log({ props });
  // const floorTexture = useTexture(floorImage as any) as THREE.Texture;

  return <meshBasicMaterial color="hotpink" {...props} />;
}
