// import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
// import { GLTF } from "three-stdlib";

export default function Model({ url }: { url: string }) {
  const { nodes, materials } = useGLTF(url);

  // return (
  //   <mesh
  //     castShadow
  //     receiveShadow
  //     geometry={nodes["1_Head_Mannequin_0"].geometry}
  //     material={materials.Mannequin}
  //   />
  // );

  return <></>;
}

useGLTF.preload("/models/female_sportswear_2/scene-transformed.glb");
